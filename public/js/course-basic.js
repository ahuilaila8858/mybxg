define(["jquery", "template", "until", "ckeditor"], function($, template, until, CKEDITOR) {
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
                $("#fristType").change(function() {
                    var pid = $(this).val();
                    $.ajax({
                        type: "get",
                        url: "/api/category/child",
                        data: { cg_id: pid },
                        dataType: "json",
                        success: function(data) {
                            if (data.code == 200) {
                                var tpl = '<option>请选择二级分类</option>{{each list}}<option value="{{$value.cg_id}}">{{$value.cg_name}}</option>{{/each}}';
                                var html = template.render(tpl, { list: data.result });
                                $("#secondType").html(html);
                            }
                        }
                    })
                })
                CKEDITOR.replace('editor', {
                    toolbarGroups: [
                        { name: 'clipboard', groups: ['clipboard', 'undo'] },
                        { name: 'editing', groups: ['find', 'selection', 'spellchecker', 'editing'] },
                    ]
                })
            }
        }

    })
})