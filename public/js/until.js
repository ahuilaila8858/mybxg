define(["jquery"], function($) {
    return {
        qs: function(key) {
            var pm = location.search.substr(1)
            if (pm) {
                var ps = pm.split("&")
                var result = null;
                $.each(ps, function(index, item) {
                    var kv = item.split("=");
                    if (kv[0] == "tc_id") {
                        result = kv[1];
                        return false;
                    }
                })
            }
            return result;
        }
    }
})