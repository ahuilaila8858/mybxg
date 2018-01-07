require.config({
    baseUrl: "/public/assets",
    paths: {
        jquery: "jquery/jquery.min",
        common: "../js/common",
        cookie: "jquery-cookie/jquery.cookie",
        template: "artTemplate/template-web",
        login: "../js/login",
        teacher: "../js/teacher",
        bootstrap: "bootstrap/js/bootstrap.min",
        teacheradd: "../js/add",
        until: "../js/until",
        datepicker: "bootstrap-datepicker/js/bootstrap-datepicker.min",
        language: "bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min",
        form: "jquery-form/jquery.form",
        validate: "validate/jquery-validate",
        settings: "../js/settings",
        uploadify: "uploadify/jquery.uploadify.min",
        region: "jquery-region/jquery.region",
        ckeditor: "ckeditor/ckeditor",
        courselist: "../js/course-list",
        index: "../js/index"
    },
    shim: {
        bootstrap: {
            deps: ["jquery"]
        },
        language: {
            deps: ["jquery", "datepicker"]
        },
        validate: {
            deps: ["jquery"]
        },
        uploadify: {
            deps: ["jquery"]
        },
        ckeditor: {
            exports: "CKEDITOR"
        }
    }

})