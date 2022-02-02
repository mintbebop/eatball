! function() {
    "use strict";
    var _ = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        },
        c = function(c) {
            var d, u, a = 0,
                s = c.document,
                l = /^(?:text|application)\/javascript/i,
                p = /^(?:text|application)\/xml/i,
                f = "application/json",
                g = "text/html",
                m = /^\s*$/,
                v = function e(t) {
                    var o = A({}, t || {});
                    for (d in e.settings) void 0 === o[d] && (o[d] = e.settings[d]);
                    (n = o).global && 0 == v.active++ && S(n), o.crossDomain || (o.crossDomain = /^([\w-]+:)?\/\/([^\/]+)/.test(o.url) && RegExp.$2 != c.location.host);
                    var r = o.dataType,
                        t = /=\?/.test(o.url);
                    if ("jsonp" == r || t) return t || (o.url = P(o.url, "callback=?")), e.JSONP(o);
                    o.url || (o.url = c.location.toString()), D(o);
                    var i, n = o.accepts[r],
                        t = {},
                        a = /^([\w-]+:)\/\//.test(o.url) ? RegExp.$1 : c.location.protocol,
                        s = e.settings.xhr();
                    o.crossDomain || (t["X-Requested-With"] = "XMLHttpRequest"), n && (-1 < (t.Accept = n).indexOf(",") && (n = n.split(",", 2)[0]), s.overrideMimeType && s.overrideMimeType(n)), (o.contentType || o.data && "GET" != o.type.toUpperCase()) && (t["Content-Type"] = o.contentType || "application/x-www-form-urlencoded"), o.headers = A(t, o.headers || {}), s.onreadystatechange = function() {
                        if (4 == s.readyState) {
                            clearTimeout(i);
                            var e, t = !1;
                            if (200 <= s.status && s.status < 300 || 304 == s.status || 0 == s.status && "file:" == a) {
                                r = r || ((n = s.getResponseHeader("content-type")) && (n == g ? "html" : n == f ? "json" : l.test(n) ? "script" : p.test(n) && "xml") || "text"), e = s.responseText;
                                try {
                                    "script" == r ? (0, eval)(e) : "xml" == r ? e = s.responseXML : "json" == r && (e = m.test(e) ? null : JSON.parse(e))
                                } catch (e) {
                                    t = e
                                }
                                t ? y(t, "parsererror", s, o) : T(e, s, o)
                            } else y(null, "error", s, o)
                        }
                        var n
                    };
                    t = !("async" in o) || o.async;
                    for (u in s.open(o.type, o.url, t), o.headers) s.setRequestHeader(u, o.headers[u]);
                    return !1 === function(e, t) {
                        var n = t.context;
                        if (!1 === t.beforeSend.call(n, e, t) || !1 === S(t)) return !1;
                        S(t)
                    }(s, o) ? (s.abort(), !1) : (0 < o.timeout && (i = setTimeout(function() {
                        s.onreadystatechange = w, s.abort(), y(null, "timeout", s, o)
                    }, o.timeout)), s.send(o.data || null), s)
                };

            function S(e) {
                if (e.global) return !0
            }

            function T(e, t, n) {
                var o = n.context,
                    r = "success";
                n.success.call(o, e, r, t), S(n), h(r, t, n)
            }

            function y(e, t, n, o) {
                var r = o.context;
                o.error.call(r, n, t, e), S(o), h(t, n, o)
            }

            function h(e, t, n) {
                var o = n.context;
                n.complete.call(o, t, e), S(n), (n = n).global && !--v.active && S(n)
            }

            function w() {}

            function P(e, t) {
                return (e + "&" + t).replace(/[&?]{1,2}/, "?")
            }

            function D(e) {
                var t, n, o;
                "object" === _(e.data) && (e.data = (t = e.data, (o = []).add = function(e, t) {
                    this.push(r(e) + "=" + r(t))
                }, function e(t, n, o, r) {
                    var i = "array" == typeof n;
                    for (var a in n) {
                        var s = n[a];
                        r && (a = o ? r : r + "[" + (i ? "" : a) + "]"), !r && i ? t.add(s.name, s.value) : (o ? "array" == typeof s : "object" === (void 0 === s ? "undefined" : _(s))) ? e(t, s, o, a) : t.add(a, s)
                    }
                }(o, t, n), o.join("&").replace("%20", "+"))), !e.data || e.type && "GET" != e.type.toUpperCase() || (e.url = P(e.url, e.data))
            }
            v.active = 0, v.JSONP = function(t) {
                if (!("type" in t)) return v(t);
                var n, o = "jsonp" + ++a,
                    e = s.createElement("script"),
                    r = {
                        abort: function() {
                            o in c && (c[o] = w), h("abort", r, t)
                        }
                    },
                    i = s.getElementsByTagName("head")[0] || s.documentElement;
                return t.error && (e.onerror = function() {
                    r.abort(), t.error()
                }), c[o] = function(e) {
                    clearTimeout(n), delete c[o], T(e, r, t)
                }, D(t), e.src = t.url.replace(/=\?/, "=" + o), i.insertBefore(e, i.firstChild), 0 < t.timeout && (n = setTimeout(function() {
                    r.abort(), h("timeout", r, t)
                }, t.timeout)), r
            }, v.settings = {
                type: "GET",
                beforeSend: w,
                success: w,
                error: w,
                complete: w,
                context: null,
                global: !0,
                xhr: function() {
                    return new c.XMLHttpRequest
                },
                accepts: {
                    script: "text/javascript, application/javascript",
                    json: f,
                    xml: "application/xml, text/xml",
                    html: g,
                    text: "text/plain"
                },
                crossDomain: !1,
                timeout: 0
            }, v.get = function(e, t) {
                return v({
                    url: e,
                    success: t
                })
            }, v.post = function(e, t, n, o) {
                return "function" == typeof t && (o = o || n, n = t, t = null), v({
                    type: "POST",
                    url: e,
                    data: t,
                    success: n,
                    dataType: o
                })
            }, v.getJSON = function(e, t) {
                return v({
                    url: e,
                    success: t,
                    dataType: "json"
                })
            };
            var r = encodeURIComponent;

            function A(t) {
                return Array.prototype.slice.call(arguments, 1).forEach(function(e) {
                    for (d in e) void 0 !== e[d] && (t[d] = e[d])
                }), t
            }
            return {
                ajax: v
            }
        }(window),
        u = {
            deviceId: "",
            appkey: appid || "",
            appProfile: {
                versionName: vn || "",
                versionCode: vc || "",
                initTime: "",
                sdkVersion: "H5+APP+v1.0.6",
                partner: ""
            },
            deviceProfile: {
                pixel: "",
                language: navigator.language,
                timezone: (new Date).getTimezoneOffset() / 60 * -1
            },
            msgs: []
        },
        r = {
            type: 2,
            data: {
                id: "",
                start: 0,
                duration: 0
            }
        },
        l = {
            autoTrack: !0
        };
    ! function() {
        for (var e = document.getElementsByTagName("script"), t = 0; t < e.length; t++) {
            var n = e[t].getAttribute("td-autoTrack");
            if ("false" === n || !1 === n) {
                l.autoTrack = !1;
                break
            }
        }
    }();
    var p = (new Date).getTime(),
        e = function(e, t, n) {
            e.addEventListener ? e.addEventListener(t, n, !1) : e.attachEvent ? e.attachEvent("on" + t, n) : e["on" + t] = n
        };

    function t(e, t, n) {
        if (void 0 === t) {
            var o = null;
            if (document.cookie && "" != document.cookie)
                for (var r = document.cookie.split(";"), i = 0; i < r.length; i++) {
                    var a = r[i];
                    if (a.substring(0, e.length + 1) == e + "=") {
                        o = decodeURIComponent(a.substring(e.length + 1));
                        break
                    }
                }
            return o
        }
        n = n || {}, null === t && (t = "", n.expires = -1);
        var s = "";
        n.expires && ("number" == typeof n.expires || n.expires.toUTCString) && ("number" == typeof n.expires ? (d = new Date).setTime(d.getTime() + 24 * n.expires * 60 * 60 * 1e3) : d = n.expires, s = "; expires=" + d.toUTCString());
        var c = n.path ? "; path=" + n.path : "",
            d = n.domain ? "; domain=" + n.domain : "",
            n = n.secure ? "; secure" : "";
        document.cookie = [e, "=", encodeURIComponent(t), s, c, d, n].join("")
    }
    l.localStorage = {
        add: function(e, t) {
            this.addLocalStorage(e, t), "sessionId" != e && this.addCookie(e, t)
        },
        get: function(e) {
            var t = this.getLocalStorage(e);
            return t || this._getCookie(e)
        },
        create: function() {
            t("__TD_LOCAL") || (this._addCookie(""), window.localStorage)
        },
        addCookie: function(e, t) {
            if (!window.localStorage) {
                this.create();
                var n = this.cookieList();
                n[e] = t;
                var o, r = [];
                for (o in n) r.push(o + "=" + n[o]);
                this._addCookie(r.join(";"))
            }
        },
        _setCookie: function() {
            this.cookieList();
            t("__TD_LOCAL", "", {
                expires: 1095,
                path: "/",
                domain: location.hostname
            })
        },
        _addCookie: function(e) {
            t("__TD_LOCAL", e, {
                expires: 1095,
                path: "/",
                domain: location.hostname
            })
        },
        _getCookie: function(e) {
            var t = this.cookieList();
            if (t && t[e]) return t[e]
        },
        delCookie: function(e) {},
        cookieList: function() {
            var e = t("__TD_LOCAL");
            return this.format(e)
        },
        addLocalStorage: function(e, t) {
            window.localStorage && ("sessionId" == e && window.sessionStorage ? sessionStorage.setItem("__TD_" + e, t) : localStorage["__TD_" + e] = t)
        },
        delLocalStorage: function(e) {
            window.localStorage && localStorage.removeItem("__TD_" + e)
        },
        getLocalStorage: function(e) {
            if (window.localStorage) return "sessionId" == e && window.sessionStorage ? sessionStorage.getItem("__TD_" + e) : localStorage["__TD_" + e]
        },
        format: function(e) {
            var t = {};
            if (!e) return t;
            for (var n = e.split(";"), o = n.length, r = 0; r < o; r++) {
                var i = n[r].split("=");
                2 == i.length && (t[i[0]] = i[1])
            }
            return t
        }
    }, l.sessionStorage = {
        add: function(e, t) {
            window.sessionStorage && sessionStorage.setItem("__TD_" + e, t)
        },
        get: function(e) {
            return sessionStorage.getItem("__TD_" + e)
        },
        remove: function(e) {
            sessionStorage.removeItem("__TD_" + e)
        }
    };
    var d, i, a, f, n, g = !0,
        m = !1;

    function v() {
        this.url = TDRequestUrl, this.opts = {}, this.requestArray = new Array
    }
    v.prototype = {
        getAjax: function(o, r, i, a, s) {
            (function(e) {
                var t, n;
                0 < navigator.userAgent.indexOf("MSIE 9.0") ? "MSIE6.0" == (t = navigator.appVersion.split(";")[1].replace(/[ ]/g, "")) || "MSIE7.0" == t ? alert("no support IE6,IE7") : window.XDomainRequest && ((n = new XDomainRequest) ? (e.error && "function" == typeof e.error && (n.onerror = function() {
                    e.error()
                }), e.timeout && "function" == typeof e.timeout && (n.ontimeout = function() {
                    e.timeout()
                }), e.success && "function" == typeof e.success && (n.onload = function() {
                    e.dataType ? "json" == e.dataType.toLowerCase() && e.success(JSON.parse(n.responseText)) : e.success(n.responseText)
                }), n.open(e.type, e.url), n.send(e.param)) : alert("Failed to create XDomainRequest")) : g ? (S.add("td-unique", "true"), g = !1, d = c.ajax({
                    type: o,
                    url: r,
                    data: JSON.stringify(i),
                    dataType: "text",
                    success: a,
                    error: s,
                    complete: function() {
                        g = !(d = void 0), m && (T.getAjax(), m = !1), S.delLocalStorage("td-unique")
                    }
                })) : m = !0
            })({
                url: this.url,
                type: "POST",
                param: JSON.stringify(i),
                success: a
            })
        },
        set: function(e, t, n) {
            this.opts = e, this.send(t, n)
        },
        send: function(e, t) {
            this.getAjax("post", this.url, this.opts, e, t)
        }
    }, (i = window).TDBASE = i.TDBASE || {}, TDBASE.cacheName = "cacheList", TDBASE.unique = function(e) {
        e.sort();
        for (var t = [e[0]], n = 1; n < e.length; n++) e[n] !== t[t.length - 1] && t.push(e[n]);
        return t
    }, TDBASE.getArgs = function() {
        for (var e = new Object, t = i.location.search.substring(1).split("&"), n = 0; n < t.length; n++) {
            var o, r = t[n].indexOf("="); - 1 != r && (o = t[n].substring(0, r), r = t[n].substring(r + 1), r = decodeURIComponent(r), e[o] = r)
        }
        return e
    }, TDBASE.getCommon = function(e) {
        var t = S.get("appkey") ? S.get("appkey") : u.appkey,
            e = {
                deviceId: u.deviceId,
                appkey: t,
                appProfile: u.appProfile,
                deviceProfile: u.deviceProfile,
                msgs: e.msg
            };
        return u.appContext && (e.appContext = u.appContext), e
    }, TDBASE.getCommonMsg = function(e, t, n, o, r, i) {
        return {
            type: 2,
            data: {
                id: e,
                start: t,
                status: n,
                duration: o || 0,
                pages: i ? [i] : [],
                events: r || []
            }
        }
    }, TDBASE.addSessionStart = function(e, t) {
        S.add("lastSession", JSON.stringify({
            id: r.data.id,
            start: r.data.start
        })), n = (n = S.get("td-hold-event")) && JSON.parse(n);
        var n = TDBASE.getCommonMsg(r.data.id, r.data.start, t, e, n);
        TDBASE.addMsg(n), S.delLocalStorage("td-hold-event")
    }, TDBASE.equal = function(e, t) {
        if ((void 0 === e ? "undefined" : _(e)) != (void 0 === t ? "undefined" : _(t))) return !1;
        if (_(e.length) != _(t.length)) return !1;
        var n = !0,
            o = [],
            r = [];
        for (i in e) "count" === i || "start" === i || o.push(i);
        for (i in t) "count" === i || "start" === i || r.push(i);
        if (o.length != r.length) return !1;
        for (var i = 0, a = r.length; i < a; i++) o.push(r[i]);
        for (var s = TDBASE.unique(o), i = 0, a = s.length; i < a; i++) {
            if (!(s[i] in e && s[i] in t)) return !1;
            if ("object" == _(e[s[i]]) && "object" == _(t[s[i]])) n = TDBASE.equal(e[s[i]], t[s[i]]);
            else if (e[s[i]] !== t[s[i]]) return !1
        }
        return n
    }, TDBASE.addGenre = function(e, t, n) {
        if (S.get("sessionMsg")) {
            n && n(e);
            var n = JSON.parse(S.get("sessionMsg")),
                o = n.msg[n.msg.length - 1].data[t];
            if ("events" !== t) o.push(e), S.add("sessionMsg", JSON.stringify(n));
            else {
                if (0 != o.length) {
                    for (var r = !1, i = 0; i < o.length; i++)
                        if (TDBASE.equal(o[i], e)) {
                            r = !0, o[i].count += 1, o[i].start = e.start;
                            break
                        }
                    r || o.push(e)
                } else o.push(e);
                S.add("sessionMsg", JSON.stringify(n))
            }
        }
    }, TDBASE.lealSet = function(e) {
        S.add("leavetime", e), S.add("leaveSession", parseInt((e - s.get("SessionStart")) / 1e3))
    }, TDBASE.addMsg = function(e) {
        var t;
        S.get("sessionMsg") ? ((t = JSON.parse(S.get("sessionMsg"))).msg.push(e), S.add("sessionMsg", JSON.stringify(t))) : S.add("sessionMsg", JSON.stringify({
            msg: [e]
        }))
    }, (a = {
        currentPage: null,
        pageStartTime: 0,
        ref: "",
        logoutCalled: !1,
        init: function() {
            e(window, "pagehide", a.pageLogout), e(window, "beforeunload", a.pageLogout), window.TDAPP = window.TDAPP || {}, window.TDAPP.onPage = a.onPage, l.autoTrack && (a.currentPage = window.location.href, a.ref = document.referrer)
        },
        onPage: function(e) {
            var t = (new Date).getTime();
            a.pageLogout("force"), a.pageEnter(e, a.currentPage, t), a.ref = a.currentPage, a.currentPage = e, a.pageStartTime = t, T.getAjax()
        },
        pageEnter: function(e, t, n) {
            t = {
                name: e,
                start: n,
                duration: 0,
                refer: t || document.referrer
            };
            TDBASE.addGenre(t, "pages")
        },
        pageLogout: function(e) {
            if ("force" !== e) {
                if (a.logoutCalled) return;
                a.logoutCalled = !0
            }
            var t = null,
                n = 0,
                o = null;
            if (l.autoTrack) t = a.currentPage || window.location.href, n = a.pageStartTime || p, o = a.ref || document.referrer;
            else {
                if (!a.currentPage) return;
                t = a.currentPage, n = a.pageStartTime, o = a.ref || document.referrer
            }
            e = (new Date).getTime();
            TDBASE.lealSet(e), TDBASE.addGenre({
                name: t,
                start: n,
                duration: Math.ceil((e - n) / 1e3),
                refer: o
            }, "pages")
        }
    }).init(), f = {
        init: function() {
            try {
                var e = l.localStorage.get("profile");
                e && (e = JSON.parse(e), e = f._transform(e), u.appContext = u.appContext || {}, u.appContext.account = e)
            } catch (e) {
                console.error(e)
            }
        },
        _transform: function(e) {
            e = JSON.parse(JSON.stringify(e));
            return e.accountId = e.profileId, e.type = e.profileType, delete e.profileType, delete e.profileId, e
        },
        _transformInverse: function(e) {
            e = JSON.parse(JSON.stringify(e));
            return e.profileId = e.accountId, e.profileType = e.type, delete e.type, delete e.accountId, e
        },
        login: function(e) {
            f._event(e, "login")
        },
        register: function(e) {
            f._event(e, "register")
        },
        updateProfile: function(e) {
            f._event(e, "update")
        },
        _chekProfile: function() {
            return "object" === _(u.appContext) && "object" === _(u.appContext.account) ? u.appContext.account : null
        },
        _event: function(e, t) {
            if (!e || "object" !== (void 0 === e ? "undefined" : _(e))) return console.log("profile信息必填!");
            if ("update" !== t && !e.profileId && !/0{1}/.test(e.profileId)) return console.log("profileId 信息为必填!");
            if ("update" !== t && "number" != typeof e.profileType) return console.log("profileType 为必填!");
            var n, o = f._getProfile(e, t),
                r = {
                    profileId: "_setId",
                    profileType: "_setProfileType",
                    name: "_setName",
                    gender: "_setGender",
                    age: "_setAge"
                },
                i = new RegExp("^property[1-9]$");
            for (n in e) {
                var a, s = e[n],
                    c = r[n];
                if (!c || "update" === t && "profileId" === n) {
                    if (i.test(n) || "property10" === n)
                        if (a = f._setProperty(o, n, s)) return void console.log(a)
                } else if (a = f[c](o, s)) return void console.log(a)
            }
            u.appContext = u.appContext || {}, u.appContext.account = o;
            var d = f._transformInverse(o);
            l.localStorage.add("profile", JSON.stringify(d)), o = f._transform(o), d = f._transform(e), y.setProfile(d, t)
        },
        _getProfile: function(e, t) {
            var n = {};
            return u.appContext && u.appContext.account && (n = JSON.parse(JSON.stringify(u.appContext.account))), "update" == t || e.profileId === n.accountId ? n : {}
        },
        _setId: function(e, t) {
            if (!t && !/0{1}/.test(t)) return "profileId为必填字段！";
            e.accountId = t
        },
        _setProfileType: function(e, t) {
            if ("number" != typeof t || t != t || t < -1 || 6 < t && t < 11 || 20 < t) return "请上传正确的profileType";
            e.type = t
        },
        _setName: function(e, t) {
            if ("string" != typeof t) return "profile name 类型错误";
            e.name = t
        },
        _setAge: function(e, t) {
            if ("number" != typeof t || t != t) return "profile age 类型错误";
            e.age = t
        },
        _setGender: function(e, t) {
            if (0 !== t && 1 !== t & 2 !== t) return "profile gender 类型错误";
            e.gender = t
        },
        _setProperty: function(e, t, n) {
            if ("number" == typeof n && n != n || "string" != typeof n && "number" != typeof n) return "profile property 类型错误";
            e[t] = n
        }
    }, window.TDAPP = window.TDAPP || {}, window.TDAPP.login = f.login, window.TDAPP.register = f.register, window.TDAPP.updateProfile = f.updateProfile, window.TDAPP.ProfileType = {
        0: "ANONYMOUS",
        1: "REGISTERED",
        2: "SINA_WEIBO",
        3: "QQ",
        4: "QQ_WEIBO",
        5: "ND91",
        6: "WEIXIN",
        11: "TYPE1",
        12: "TYPE2",
        13: "TYPE3",
        14: "TYPE4",
        15: "TYPE5",
        16: "TYPE6",
        17: "TYPE7",
        18: "TYPE8",
        19: "TYPE9",
        20: "TYPE10"
    }, f.init(), n = {
        isObject: function(e) {
            return e && "object" === (void 0 === e ? "undefined" : _(e))
        },
        isStrNotEmpty: function(e) {
            return e || /0{1}/.test(e)
        },
        isNumber: function(e) {
            return "number" == typeof e && e == e
        },
        isCurrencyTypeAvailabal: function(e) {
            return e && "string" == typeof e && 3 === e.length
        },
        _checkParam: function(e) {
            return n.isObject(e) ? n.isStrNotEmpty(e.orderId) ? n.isNumber(e.amount) ? !!n.isCurrencyTypeAvailabal(e.currencyType) || (console.warn("请输入正确的currencyType!"), !1) : (console.warn("请输入正确的amount!"), !1) : (console.warn("请输入正确的orderId!"), !1) : (console.warn("请输入正确的参数!"), !1)
        },
        onPlaceOrder: function(e) {
            n._checkParam(e) && (e = {
                count: 1,
                start: (new Date).getTime(),
                domain: "iap",
                id: "placeOrder",
                params: e
            }, y._saveAndFetch(e))
        },
        onOrderPaySucc: function(e) {
            n._checkParam(e) && ((e = JSON.parse(JSON.stringify(e))).paymentType && n.isStrNotEmpty(e.paymentType) && (e.payType = e.paymentType), delete e.paymentType, e = {
                count: 1,
                start: (new Date).getTime(),
                domain: "iap",
                id: "pay",
                params: e
            }, y._saveAndFetch(e))
        },
        onCancelOrder: function(e) {
            n._checkParam(e) && (e = {
                count: 1,
                start: (new Date).getTime(),
                domain: "iap",
                id: "cancelOrder",
                params: e
            }, y._saveAndFetch(e))
        }
    }, window.TDAPP = window.TDAPP || {}, window.TDAPP.onPlaceOrder = n.onPlaceOrder, window.TDAPP.onOrderPaySucc = n.onOrderPaySucc, window.TDAPP.onCancelOrder = n.onCancelOrder;
    var S = l.localStorage,
        s = l.sessionStorage,
        T = {
            timedif: void 0,
            state: 1,
            deviceId: 0,
            sessionId: 0,
            local: [],
            sendInit: 0,
            set: function() {
                try {
                    this.setDeviceId(), this.setSession(), this.setSessionTime(), this.setInitTime(), this.setPartner(), this.setResolution(), this.addlastSession(), this.setPageEnter(), this.getAjax(1)
                } catch (e) {
                    console.log(e)
                }
            },
            setDeviceId: function() {
                if (S.get("deviceId")) this.deviceId = S.get("deviceId");
                else {
                    this.sendInit = 1;
                    for (var e = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""), t = [], n = e.length, o = 0; o < 16; o++) t[o] = e[0 | Math.random() * n];
                    this.deviceId = t.join(""), S.add("deviceId", this.deviceId)
                }
                u.deviceId = this.deviceId
            },
            setSession: function() {
                var e, t;
                if (s.get("sessionId") && S.get("appkey") == u.appkey ? t = s.get("sessionId") : (e = (new Date).getTime(), t = -1 < this.deviceId.indexOf("-") ? this.deviceId.split("-")[0] + e : this.deviceId + e, this.sendInit = 0 == this.sendInit ? 2 : this.sendInit, s.add("sessionId", t)), 0 < 32 - t.length)
                    for (var n = 0, o = 32 - t.length; n < o; n++) t += "0";
                32 - t.length < 0 && (t = t.substring(0, 32)), r.data.id = this.sessionId = t
            },
            setSessionTime: function() {
                var e = (new Date).getTime();
                s.get("SessionStart") && S.get("appkey") == u.appkey ? e = s.get("SessionStart") : s.add("SessionStart", e), r.data.start = parseInt(e)
            },
            setInitTime: function() {
                S.get("initTime") ? u.appProfile.initTime = parseInt(S.get("initTime")) : (u.appProfile.initTime = p, S.add("initTime", p))
            },
            setPartner: function() {
                var e = s.get("td_channel"),
                    t = TDBASE.getArgs().td_channelid;
                e ? u.appProfile.partner = e : null != t && (s.add("td_channel", t), u.appProfile.partner = t)
            },
            setResolution: function() {
                var e = [window.screen.width, window.screen.height];
                window.devicePixelRatio && e.push(window.devicePixelRatio), u.deviceProfile.pixel = e.join("*")
            },
            addlastSession: function() {
                var e = S.get("lastSession");
                void 0 === e && (S.delLocalStorage("sessionMsg"), S.delLocalStorage("lastSession")), e ? (e = JSON.parse(e)).id != r.data.id && (e = TDBASE.getCommonMsg(e.id, e.start, 3, parseInt(S.get("leaveSession"))), TDBASE.addMsg(e), this.timedif = parseInt((r.data.start - S.get("leavetime")) / 1e3), S.get("appkey") && S.get("appkey") != u.appkey || (TDBASE.addSessionStart(this.timedif, 1), this.addAppInitEvent())) : (TDBASE.addSessionStart(0, 1), this.addAppInitEvent())
            },
            setPageEnter: function() {
                var e;
                l.autoTrack && (e = {
                    name: window.location.href,
                    start: (new Date).getTime(),
                    duration: 0,
                    refer: document.referrer
                }, TDBASE.addGenre(e, "pages"))
            },
            addAppInitEvent: function() {
                var e;
                0 != this.sendInit && (e = {
                    id: "init",
                    domain: "app",
                    start: p || (new Date).getTime(),
                    count: 1,
                    params: {
                        first: !0
                    }
                }, 2 == this.sendInit && (e.params.first = !1), TDBASE.addGenre(e, "events"))
            },
            getAjax: function(e) {
                var t = this,
                    n = new v;
                localStorage.__TD_sessionMsg || TDBASE.addSessionStart(0, 2);
                var o, r = JSON.parse(S.get("sessionMsg")),
                    i = TDBASE.getCommon(r),
                    a = localStorage["__TD_td-init-event"];
                !a || (o = i.msgs[i.msgs.length - 1]) && (r = o.data.events, o.data.events = r.concat(JSON.parse(a))), S.delLocalStorage("td-init-event");
                for (var s = [], c = 0; c < i.msgs.length; c++) {
                    var d = i.msgs[c];
                    (2 !== d.data.status || d.data.pages && 0 !== d.data.pages.length || d.data.events && 0 !== d.data.events.length) && s.push(d)
                }
                0 !== s.length && (i.msgs = s, S.get("appkey") ? S.get("appkey") != u.appkey ? n.set(i, function(e) {
                    S.delLocalStorage("sessionMsg"), u.appProfile.initTime = p, S.add("initTime", p), TDBASE.addSessionStart(0, 1), t.addAppInitEvent(), t.getAjax()
                }, function(e) {
                    console.log(e)
                }) : n.set(i, function(e) {
                    S.delLocalStorage("sessionMsg"), TDBASE.addSessionStart(0, 2)
                }, function(e) {
                    console.log(e)
                }) : n.set(i, function(e) {
                    S.delLocalStorage("sessionMsg"), TDBASE.addSessionStart(0, 2)
                }, function(e) {
                    console.log(e)
                }), S.add("appkey", u.appkey))
            }
        };
    T.set();
    var y = {
        set: function(e, t, n, o) {
            var r;
            if (e || /0{1}/.test(e)) {
                if (0 < arguments.length) try {
                    var i = {
                        count: 1,
                        start: (new Date).getTime()
                    };
                    if (null != e && (i.id = "string" != typeof e ? JSON.stringify(e) : e), i.label = null != t ? "string" != typeof t ? JSON.stringify(t) : t : "", null != n && ("object" != (void 0 === (r = n) ? "undefined" : _(r)) || "[object object]" != Object.prototype.toString.call(r).toLowerCase() || r.length || (i.params = n)), o && "smart" === o) i.type = "smart";
                    else if (void 0 !== o) {
                        if ("number" != typeof o || isNaN(o)) return void console.error("value只能为number");
                        i.value = o
                    }
                    y._saveAndFetch(i)
                } catch (e) {}
            } else console.warn("event  Id为必填字段！")
        },
        setProfile: function(e, t) {
            e = {
                count: 1,
                start: (new Date).getTime(),
                domain: "account",
                id: t,
                params: e
            };
            y._saveAndFetch(e)
        },
        _saveAndFetch: function(e) {
            d ? TDBASE.addGenre(e, "events", function(e) {
                var t = S.get("td-hold-event"),
                    n = [];
                if (n.push(e), t) {
                    t = JSON.parse(t);
                    for (var o = 0; o < t.length; o++)
                        if (TDBASE.equal(t[o], e)) {
                            t[o].count += 1, t[o].start = e.start;
                            break
                        }
                    S.add("td-hold-event", JSON.stringify(t))
                } else S.add("td-hold-event", JSON.stringify(n))
            }) : (TDBASE.addGenre(e, "events"), setTimeout(function() {
                T.getAjax()
            }, 500))
        },
        unload: function() {
            try {
                T.getAjax()
            } catch (e) {}
        }
    };
    window.TDAPP = window.TDAPP || {}, window.TDAPP.onEvent = y.set
}();