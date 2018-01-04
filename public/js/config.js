require.config({
    baseUrl: "/public/assets",
    paths: {
        jquery: "jquery/jquery",
        common: "../js/common",
        cookie: "jquery-cookie/jquery.cookie",
        template: "artTemplate/template-web",
        login: "../js/login",
        teacher: "../js/teacher",
        bootstrap: "bootstrap/js/bootstrap.min",
        teacheradd: "../js/add",
        until: "../js/until",
        datepicker: "bootstrap-datepicker/js/bootstrap-datepicker.min",
        language: "bootstrap-datepicker/locales/bootstrap-datepicker.zh-CN.min"
    },
    shim: {
        bootstrap: {
            deps: ["jquery"]
        },
        language: {
            deps: ["jquery", "datepicker"]
        }
    }

})