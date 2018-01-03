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
        until: "../js/until"
    },
    shim: {
        bootstrap: {
            deps: ["jquery"]
        }
    }

})