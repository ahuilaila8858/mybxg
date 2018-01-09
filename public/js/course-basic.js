define(["jquery", "template", "until"], function($, template, until) {
    until.setMenu("/course/add")
    var csId = until.qs("cs_id");
    var flag = until.qs("flag");
    $.ajax({
        type: "get",
        url: "/api/course/basic",
        data: { cs_id: csId },
        dataType: "json",
        success: function(data) {
            if (flag) {
                data.result.operate = "编辑课程";
            } else {
                data.result.operate = "添加课程";
            }
            if (data.code == 200) {
                var html = template("basicTpl", data.result);
                $("#basicInfo").html(html);
            }
        }

    })
})