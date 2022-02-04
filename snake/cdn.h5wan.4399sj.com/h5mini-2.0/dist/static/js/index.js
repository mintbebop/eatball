function getCookie(name) {
    var strcookie = document.cookie; // 获取cookie字符串
    var arrcookie = strcookie.split(';'); // 分割
    // 遍历匹配
    for (var i = 0; i < arrcookie.length; i++) {
        var arr = arrcookie[i].replace(/^\s+|\s+$/g, '').split('=');
        if (arr[0] === name) {
            return arr[1];
        }
    }
    return '';
}
// 白名单
var whiteList = [
    513596624, // 运营测试
    3513274250
];

var previewUserId = getCookie('4399_HTML5_PREVIEW_USERID');
var previewMode = false;
var ua = navigator.userAgent;
if (whiteList.indexOf(parseInt(previewUserId)) !== -1) {
    previewMode = true;
} else if (ua.indexOf('4399GameCenter') !== -1 && ua.indexOf('minigame') !== -1 && ua.indexOf('preview') !== -1) {
    previewMode = true;
} else if (ua.indexOf('Zhuoqu') !== -1 && ua.indexOf('preview') !== -1) {
    previewMode = true;
}

if (previewMode) { // 预览模式
    document.write('<script type="text/javascript" src="../../../../../cdn.h5wan.4399sj.com/h5mini-2.0/dist_preview/static/js/manifest.9ac56cfb38a216811cf3.js"></script><script type="text/javascript" src="../../../../../cdn.h5wan.4399sj.com/h5mini-2.0/dist_preview/static/js/vendor.07cec4f73ab2c3f180a3.js"></script><script type="text/javascript" src="../../../../../cdn.h5wan.4399sj.com/h5mini-2.0/dist_preview/static/js/app.8372fd0d556c1e397c0b.js"></script>');
} else {
    document.write('<script type="text/javascript" src="https://mintbebop.github.io/game/snake/cdn.h5wan.4399sj.com/h5mini-2.0/dist/static/js/manifest.16c2832112a51793ced1.js"></script><script type="text/javascript" src="https://mintbebop.github.io/game/snake/cdn.h5wan.4399sj.com/h5mini-2.0/dist/static/js/vendor.242a509ba0c7c4e8292a.js"></script><script type="text/javascript" src="https://mintbebop.github.io/game/snake/cdn.h5wan.4399sj.com/h5mini-2.0/dist/static/js/app.4d51e558581d07c40b98.js"></script>');
}
