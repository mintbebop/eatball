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
    261337924, // 忧郁的眼神
    2362303732, // ceshi@4399
    2115498776, // ceshi@001
    2364678458, // ceshi@2
    1405564344, // a6657073
    667177428, // 圣诞老人
    554586257, // yswnldy1
    996265692, // buchun002
    1989359836, // 85453301
    1285275227, // chandoubarenlei
    500886888, // shmilyfay
    1723834034, // 00778297
    537593226, // yjtest5
    592942648, // /393659081
    1759495307, // hongbaotong
    2451820247, // G4220122
    2420881482, // xyk30000
    2388255195, // lindongbin2
    2382578078, // user_card_none
    2382578665, // user_card_less_8
    2382579166, // user_card_less_18
    2382579515, // user_card_more_18
    2382579892, // user_card_false
    2575935819, // yj@5555
    2509422481, // xmmx700
    2509423538, // xmmx701
    732341717, // a1820609 未带实名
    2732342259, // b1820609 带成年实名
    2732346948, // c1820609 带未成年实名
    2003484637, // QQ快捷登录用户
    2118384058, // 微信快捷登录用户
    989535678, // 微博快捷登录用户
    2732341717, // a1820609
    1889032464, // QQ快捷登录用户
    2551018448, // zzq0406 [运营]郑泽强
    2736219851, // yulan@11
    2736221491, // yulan@22
    279499036, // youyuanru
    504235680, // 504235680 [运营]陈伟斌
    1556240342, // 黄坤霖
    2875813813, // 1957395040
    2111611889, // 运营测试
    3172527170, // 运营测试
    3175632840, // 运营测试
    874338946, // 运营测试
    3181914896, // 学霞测试
    3185952062, // 杨晓鑫
    3185948017, // 陈色雅
    3270644041, // 陈嘉楠
    2938641932, // 杨妍
    3304356129, // 杨妍
    2397344501, // 苑玲
    3152862892,
    3152936953,
    3152988118,
    3153139609,
    3155495235,
    3156179172,
    3156220491,
    3328755485, // 敏玉
    3304362916,
    3184282228,
    3513596624, // 运营测试
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
    document.write('<script type="text/javascript" src="../../../../../../snake/cdn.h5wan.4399sj.com/h5mini-2.0/dist_preview/static/js/manifest.9ac56cfb38a216811cf3.js"></script><script type="text/javascript" src="../../../../../cdn.h5wan.4399sj.com/h5mini-2.0/dist_preview/static/js/vendor.07cec4f73ab2c3f180a3.js"></script><script type="text/javascript" src="../../../../../cdn.h5wan.4399sj.com/h5mini-2.0/dist_preview/static/js/app.8372fd0d556c1e397c0b.js"></script>');
} else {
    document.write('<script type="text/javascript" src="../../../../../cdn.h5wan.4399sj.com/h5mini-2.0/dist/static/js/manifest.16c2832112a51793ced1.js"></script><script type="text/javascript" src="../../../../../cdn.h5wan.4399sj.com/h5mini-2.0/dist/static/js/vendor.242a509ba0c7c4e8292a.js"></script><script type="text/javascript" src="../../../../../cdn.h5wan.4399sj.com/h5mini-2.0/dist/static/js/app.4d51e558581d07c40b98.js"></script>');
}