define(["jquery", "template", "until", "bootstrap"], function($, template, until) {
    until.setMenu(location.pathname);
    $.ajax({
        type: "get",
        url: "/api/teacher",
        dataType: "json",
        success: function(data) {
            // ajax获取数据
            var html = template("teacherTpl", { list: data.result });
            //    通过art-template模板引擎渲染页面
            $("#teacherInfo").html(html);
            //    点击注销启用按钮
            $(".ead").click(function() {
                //    备用that函数内部的this是weindow
                var that = this;
                //    获取点击按钮的父元素td
                var td = $(this).parent("td");
                //    获取td的自定义属性的值 tc_id
                var tc_id = td.attr("data-id");
                //    获取td的自定义属性的值 tc_status
                var tc_status = td.attr("data-status")
                    //    ajax获取数据库按钮状态
                $.ajax({
                    type: "post",
                    url: "/api/teacher/handle",
                    data: { tc_id: tc_id, tc_status: tc_status },
                    dataType: "json",
                    success: function(data) {
                        if (data.code == 200) {
                            td.attr("data-status", data.result.tc_status);
                            if (data.result.tc_status == 0) {
                                $(that).html("注销")
                            } else {
                                $(that).html("启用")
                            }
                        }
                    }
                })
            });
            //    查看讲师信息
            $(".teachermsg").click(function() {
                //    获取点击按钮的父元素td
                var td = $(this).parent("td");
                //    获取td的自定义属性的值 tc_id
                var tc_id = td.attr("data-id");
                $.ajax({
                    type: "get",
                    url: "/api/teacher/view",
                    data: { tc_id: tc_id },
                    dataType: "json",
                    success: function(data) {
                        var html = template("moduleTpl", data.result);
                        $("#moduleInfo").html(html);
                        $("#teacherModal").modal();
                    }
                })
            })
        }
    })
})