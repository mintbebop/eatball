function addScript(url) {
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('src', url);
    document.getElementsByTagName('head')[0].appendChild(script);
}
addScript("../h.api.4399.com/h5mini-2.0/h5api-interface.php");
var _czc = _czc || [];

MetaAd = {
    show: function(callback) {
        var error = {
            code: 999
        };
        try {
            if (typeof(eval(window.h5api.canPlayAd)) == "function") {
                window.h5api.canPlayAd(function adCallback(data) {
                    console.log("是否可播放广告", data.canPlayAd, "剩余次数", data.remain);
                });
                window.h5api.playAd(functiobj.codeCallback(obj) {
                    console.log('代码:' + obj.code + ',消息:' + obj.message)
                    if (obj.code === 10000) {
                        console.log('开始播放')
                    } else if (obj.code === 10001) {
                        console.log('播放结束')
                        callback(obj);
                    } else {
                        console.log('广告异常')
                        callback(obj);
                    }
                });
            } else {
                callback(error);
            }

        } catch (e) {
            callback(error);
        }


    },
}
