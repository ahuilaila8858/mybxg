define(["jquery", "template", "until", "datepicker", "language", "validate", "form"], function($, template, until) {
    var tcId = until.qs('tc_id')
    if (tcId) {
        // 编辑页面
        $.ajax({
            type: "get",
            url: "/api/teacher/edit",
            data: { tc_id: tcId },
            dataType: "json",
            success: function(data) {
                if (data.code == 200) {
                    data.result.operate = "编辑讲师"
                    var html = template("teacherTpl", data.result);
                    $("#teacherInfo").html(html);
                    submitForm("/api/teacher/update")
                }
            }
        })
    } else {
        // 添加页面
        var html = template("teacherTpl", { operate: "添加讲师" });
        $("#teacherInfo").html(html);
        submitForm("/api/teacher/add")
    }

    // function submitForm(url) {
    //     $("#teacherBtn").click(function() {
    //         $.ajax({
    //             type: "post",
    //             url: url,
    //             data: $("#teacherForm").serialize(),
    //             dataType: 'json',
    //             success: function(data) {
    //                 if (data.code == 200) {
    //                 location.href = "/teacher/list";
    //                 }
    //             }
    //         })
    //     })
    // }

    // 使用jquery-form表单提交插件 和 validate表单验证插件
    function submitForm(url) {
        $("#teacherForm").validate({
            // 禁掉默认提交
            sendForm: false,
            // 表单有效的输入域
            valid: function() {
                //  这里的this就指的是teacherForm
                $(this).ajaxSubmit({
                    type: "post",
                    url: url,
                    dataType: "json",
                    success: function(data) {
                        if (data.code == 200) {
                            location.href = "/teacher/list";
                        }
                    }
                })
            },
            // 验证提示
            description: {
                tcName: {
                    required: "用户名不能为空"
                },
                tcPass: {
                    required: "密码名不能为空",
                    // 密码格式不对的时候提示
                    pattern: "密码必须是六位数字"
                },
                tcJoindate: {
                    required: "日期名不能为空"

                }
            }
        })
    }
})