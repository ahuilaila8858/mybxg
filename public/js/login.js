define(["jquery","cookie"],function($){
    $("#loginBtn").click(function(){
        $.ajax({
            //请求方式post请求
            type:"post",
          //   后台反向代理实现跨域请求
//              <VirtualHost *:80>
//                DocumentRoot "f:/whh/now/mybxg"
//                ServerName mybxg.com
//                ServerAlias www.mybxg.com
//                ProxyPass /api http://api.whh.com
//               </VirtualHost>
            url:"/api/login",
          //   通过serialize方法 获取表单所有的数据
            data:$("#formlogin").serialize(),
            dataType:"json",
            success:function(data){
                if(data.code){
                    //账号密码输入正确跳转到index页面
                    location.href="/main/index";
                  //   通过设置cookie把头像和名称传递给index页面  因为cookie传递的格式是字符串 但是传递的参数都是数组 
                  //  所以通过JSON.stringify转成字符串传递 把传递的参数的cookie的路劲都设成根路劲 这样所有的页面都可以
                  // 访问cooike了
                    $.cookie("loginmes",JSON.stringify(data.result),{path:"/"});
                }
            }
        })
      //   阻止表单默认提交
        return false;
    })
})