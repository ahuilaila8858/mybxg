define(["jquery","cookie"],function($){
	// NProgress.start();

	// NProgress.done();
	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});
	// 点击退出按钮
	$("#loginOut").click(function(){
		$.ajax({
			type:"post",
			url:"/api/logout",
			dataType:"json",
			success:function(data){
				// 向后台请求数据 请求成功 则退出成功 自动跳转到登陆页面
			  location.href="/main/login";
			}
		})
	})
//   通过cookie获取到sessionID
	var flag=$.cookie("PHPSESSID");
	// 通过cookie获取到头像和名称的参数(登陆成功就会有一个sessid)通过cookie获取到的参数都是字符串的格式 要转成数组
	var loginInfo=JSON.parse($.cookie("loginmes"));
	// 跟换头像
	$(".aside .profile img").attr("src",loginInfo.tc_avatar);
	// 跟换名称
	$(".aside .profile h4").html(loginInfo.tc_name);
	// 判断如果sessid不存在自动跳转登陆页 防止用地址名称直接跳转到index页面
	if(!flag&&location.pathname!="/main/login"){
	  location.href="/main/login"
	}
})
