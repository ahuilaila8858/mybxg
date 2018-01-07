define(["jquery", "template", "ckeditor", "uploadify", "region", "datepicker", "language", "validate", "form"], function($, template, CKEDITOR) {
    $.ajax({
        type: "post",
        url: "/api/teacher/profile",
        dataType: "json",
        success: function(data) {
            if (data.code == 200) {
                var html = template("settingsTpl", data.result);
                $("#settingsInfo").html(html);
                // 上传头像
                $("#upfile").uploadify({
                    fileObjName: "tc_avatar",
                    swf: "/public/assets/uploadify/uploadify.swf",
                    buttonimg: "../images/course.png",
                    uploader: "/api/uploader/avatar",
                    onComplate: function(filea, data) {
                        console.log(filea)
                    }
                });
                // 省市县三级联动
                $("#pcd").region({
                    url: "/public/assets/jquery-region/region.json"
                });
                // 富文本
                CKEDITOR.replace("ckeditor", {
                    toolbarGroups: [
                        { name: 'clipboard', groups: ['clipboard', 'undo'] },
                        { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
                    ]
                });
                $("#settingsForm").validate({
                    sendForm: false,
                    valid: function() {
                        // 获取省市县
                        var p = $("#p").find("option:selected").text()
                        var c = $("#c").find("option:selected").text()
                        var d = $("#d").find("option:selected").text()
                        var homeTown = p + "|" + c + "|" + d;
                        // 同步副本本
                        for (var instance in CKEDITOR.instances) {
                            CKEDITOR.instances[instance].updateElement();
                        }
                        // jquery form 提交表单
                        $(this).ajaxSubmit({
                            type: "post",
                            url: "/api/teacher/modify",
                            data: { tc_hometown: homeTown },
                            dataType: "json",
                            success: function(data) {
                                if (data.code == 200) {
                                    location.reload()
                                }
                            }
                        })
                    }
                })
            }
        }
    })
})