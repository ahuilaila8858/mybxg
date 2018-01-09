define(["jquery", "until", "template"], function($, until, template) {
    until.setMenu(location.pathname);
    $.ajax({
        type: "get",
        url: "/api/course",
        dataType: "json",
        success: function(data) {
            if (data.code == 200) {
                var html = template("courseTpl", { list: data.result });
                $("#courseInfo").html(html)
            }
        }
    })
})