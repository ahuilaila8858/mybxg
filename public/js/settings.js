define(["jquery", "template"], function($, template) {
    $.ajax({
        type: "post",
        url: "/api/teacher/profile",
        dataType: "json",
        success: function(data) {
            var html = template("settingsTpl", data.result);
            $("#settingsInfo").html(html);
        }
    })
})