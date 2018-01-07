define(["jquery", "template", "ckeditor", "uploadify", "region", "datepicker", "language"], function($, template, CKEDITOR) {
    $.ajax({
        type: "post",
        url: "/api/teacher/profile",
        dataType: "json",
        success: function(data) {
            if (data.code == 200) {
                var html = template("settingsTpl", data.result);
                $("#settingsInfo").html(html);
                $("#upfile").uploadify({
                    fileObjName: "tc_avatar",
                    swf: "/public/assets/uploadify/uploadify.swf",
                    buttonimg: "../images/course.png",
                    uploader: "/api/uploader/avatar",
                    onComplate: function(filea, data) {
                        console.log(filea)
                    }
                });
                $("#pcd").region({
                    url: "/public/assets/jquery-region/region.json"
                });
                CKEDITOR.replace("ckeditor", {
                    toolbarGroups: [
                        { name: 'clipboard', groups: ['clipboard', 'undo'] },
                        { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
                    ]
                })
            }
        }
    })
})