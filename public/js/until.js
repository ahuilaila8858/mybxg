define(["jquery"], function($) {
    return {
        qs: function(key) {
            var pm = location.search.substr(1)
            if (pm) {
                var ps = pm.split("&")
                var result = null;
                $.each(ps, function(index, item) {
                    var kv = item.split("=");
                    if (kv[0] == key) {
                        result = kv[1];
                        return false;
                    }
                })
            }
            return result;
        },
        setMenu: function(path) {
            $(".aside .navs  a[href='" + path + "']").addClass("active").closest("ul").show()
        }
    }
})