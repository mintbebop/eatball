window.__require = function t(e, o, n) {
    function i(s, r) {
        if (!o[s]) {
            if (!e[s]) {
                var c = s.split("/");
                if (c = c[c.length - 1], !e[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!r && l) return l(c, !0);
                    if (a) return a(c, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = c
            }
            var d = o[s] = {
                exports: {}
            };
            e[s][0].call(d.exports, function(t) {
                return i(e[s][1][t] || t)
            }, d, d.exports, t, e, o, n)
        }
        return o[s].exports
    }

    for (var a = "function" == typeof __require && __require, s = 0; s < n.length; s++) i(n[s]);
    return i
}({
    BgMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "23f5dtz4ABHkJpbm4FblvqJ", "BgMgr");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/Tools"),
            r = cc._decorator,
            c = r.ccclass,
            l = r.property,
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.spBg = null, e.ndBorder_l = null, e.ndBorder_r = null, e.ndBorder_b = null, e.ndBorder_t = null, e.sfBgs = [], e.gameCtrl = null, e._imgW = 0, e._imgH = 0, e
                }

                return i(e, t), e.prototype.initBg = function(t, e) {
                    this.gameCtrl = t;
                    var o = this.sfBgs[e],
                        n = this.gameCtrl._camSize;
                    this._imgW = o.getRect().width, this._imgH = o.getRect().height, n = n.add(cc.v2(this._imgW, this._imgH));
                    var i = (Math.ceil(n.x / this._imgW) + 2) * this._imgW,
                        a = (Math.ceil(n.y / this._imgH) + 2) * this._imgH;
                    this.spBg.spriteFrame = o, this.spBg.node.setContentSize(i, a), this.spBg.node.setPosition(0, 0), this.spBg.node.setAnchorPoint(0, 0), this.ndBorder_l.setContentSize(6, n.y), this.ndBorder_r.setContentSize(6, n.y), this.ndBorder_b.setContentSize(n.x, 6), this.ndBorder_t.setContentSize(n.x, 6)
                }, e.prototype.updateBg = function(t) {
                    var e = this.gameCtrl._camSize;
                    e = e.add(cc.v2(this._imgW, this._imgH));
                    var o = t.sub(e.div(2)),
                        n = Math.floor(o.x / this._imgW) * this._imgW,
                        i = Math.floor(o.y / this._imgH) * this._imgH;
                    this.spBg.node.setPosition(n, i);
                    var a = this.gameCtrl._worldSize,
                        r = this.ndBorder_l.height / 2 - 6,
                        c = s.default.getRange(t.y, r, a.y - r);
                    this.ndBorder_l.setPosition(-3, c), this.ndBorder_r.setPosition(a.x + 3, c);
                    var l = this.ndBorder_b.width / 2 - 6,
                        d = s.default.getRange(t.x, l, a.x - l);
                    this.ndBorder_b.setPosition(d, -3), this.ndBorder_t.setPosition(d, a.y + 3)
                }, a([l(cc.Sprite)], e.prototype, "spBg", void 0), a([l(cc.Node)], e.prototype, "ndBorder_l", void 0), a([l(cc.Node)], e.prototype, "ndBorder_r", void 0), a([l(cc.Node)], e.prototype, "ndBorder_b", void 0), a([l(cc.Node)], e.prototype, "ndBorder_t", void 0), a([l([cc.SpriteFrame])], e.prototype, "sfBgs", void 0), a([c], e)
            }(cc.Component);
        o.default = d, cc._RF.pop()
    }, {
        "../datas/Tools": "Tools"
    }],
    BuffItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "9d726MfeFtNYoMVddIjuOYp", "BuffItem");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = cc._decorator,
            r = s.ccclass,
            c = s.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lbTime = null, e.brTime = null, e
                }

                return i(e, t), e.prototype.setInfo = function(t, e) {
                    this.lbTime.string = "" + Math.ceil(t), this.brTime.progress = t / e
                }, a([c(cc.Label)], e.prototype, "lbTime", void 0), a([c(cc.ProgressBar)], e.prototype, "brTime", void 0), a([r], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    DConfig: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "66b41tF4dRJQ4Qoutnm6gCI", "DConfig"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.aw = void 0;
        var n = function() {
            function t() {}

            return t.Pid_Hero = 0, t.Pid_Boss = 1, t.Snake_BgCnt = 5, t
        }();
        o.default = n,
            function(t) {
                t.test = 0, t.testFunc = function(t, e) {
                        return "" + t + e
                    },
                    function(t) {
                        t[t.Snake_Dragon = 0] = "Snake_Dragon", t[t.Snake_Turtle = 1] = "Snake_Turtle", t[t.Snake_Eagle = 2] = "Snake_Eagle", t[t.Snake_Hole = 3] = "Snake_Hole", t[t.Snake_Endless = 4] = "Snake_Endless"
                    }(t.Mode || (t.Mode = {})),
                    function(t) {
                        t[t.None = 0] = "None", t[t.Revive1 = 1] = "Revive1", t[t.Revive2 = 2] = "Revive2", t[t.Revive3 = 3] = "Revive3", t[t.Pass1 = 4] = "Pass1", t[t.Pass2 = 5] = "Pass2", t[t.Pass3 = 6] = "Pass3", t[t.Over1 = 7] = "Over1", t[t.Over2 = 8] = "Over2", t[t.Over3 = 9] = "Over3", t[t.Continue = 10] = "Continue", t[t.Replay = 11] = "Replay", t[t.Back = 12] = "Back", t[t.Menu = 13] = "Menu", t[t.Next = 14] = "Next"
                    }(t.RunState || (t.RunState = {})),
                    function(t) {
                        t[t.Golds = 0] = "Golds", t[t.Diamonds = 1] = "Diamonds", t[t.COUNT = 2] = "COUNT"
                    }(t.Money || (t.Money = {})),
                    function(t) {
                        t[t.Invi = 0] = "Invi", t[t.Grow = 1] = "Grow", t[t.Magnet = 2] = "Magnet", t[t.Income_x2 = 3] = "Income_x2", t[t.Speed = 4] = "Speed", t[t.AvoidDeath = 5] = "AvoidDeath", t[t.COUNT = 6] = "COUNT"
                    }(t.Item || (t.Item = {})),
                    function(t) {
                        t[t.PlayTimes = 0] = "PlayTimes", t[t.WatchAds = 1] = "WatchAds", t[t.GetGolds = 2] = "GetGolds", t[t.GetDiamonds = 3] = "GetDiamonds", t[t.COUNT = 4] = "COUNT"
                    }(t.Daily || (t.Daily = {})),
                    function(t) {
                        t[t.Diamond = 0] = "Diamond", t[t.Gold = 1] = "Gold", t[t.AvoidDeath = 2] = "AvoidDeath", t[t.Skin = 3] = "Skin"
                    }(t.GetShow || (t.GetShow = {})),
                    function(t) {
                        t[t.Diamond = 0] = "Diamond", t[t.Gold = 1] = "Gold", t[t.COUNT = 2] = "COUNT"
                    }(t.GiftIndex || (t.GiftIndex = {})),
                    function(t) {
                        t[t.Nor = 0] = "Nor", t[t.Ess = 1] = "Ess", t[t.Invi = 2] = "Invi", t[t.Grow = 3] = "Grow", t[t.Magnet = 4] = "Magnet", t[t.Income_x2 = 5] = "Income_x2", t[t.Speed = 6] = "Speed", t[t.AvoidDeath = 7] = "AvoidDeath", t[t.Diamond = 8] = "Diamond", t[t.Gold = 9] = "Gold", t[t.COUNT = 10] = "COUNT"
                    }(t.FoodType || (t.FoodType = {})),
                    function(t) {
                        t[t.Born = 0] = "Born", t[t.Idle = 1] = "Idle", t[t.Move = 2] = "Move", t[t.Dead = 3] = "Dead"
                    }(t.FoodState || (t.FoodState = {})),
                    function(t) {
                        t[t.Nor_Cnt = 18] = "Nor_Cnt", t[t.Dragon = 18] = "Dragon", t[t.Eagle = 19] = "Eagle", t[t.Turtle = 20] = "Turtle", t[t.Dragon2 = 21] = "Dragon2", t[t.Eagle2 = 22] = "Eagle2", t[t.Turtle2 = 23] = "Turtle2", t[t.Enemy = 24] = "Enemy", t[t.COUNT = 25] = "COUNT"
                    }(t.SnakeSkin || (t.SnakeSkin = {})),
                    function(t) {
                        t[t.Blust = 0] = "Blust", t[t.Blust_CD = 1] = "Blust_CD", t[t.Border_warning = 2] = "Border_warning", t[t.Angle_change = 3] = "Angle_change", t[t.Angle_warning = 4] = "Angle_warning", t[t.Lure = 5] = "Lure", t[t.Fog_attack_CD = 6] = "Fog_attack_CD", t[t.Born = 7] = "Born", t[t.Skill_CD = 8] = "Skill_CD", t[t.Score_AI = 9] = "Score_AI", t[t.COUNT = 10] = "COUNT"
                    }(t.SnakeTimer || (t.SnakeTimer = {})),
                    function(t) {
                        t[t.Move = 0] = "Move", t[t.Dead = 1] = "Dead", t[t.Over = 2] = "Over"
                    }(t.SnakeState || (t.SnakeState = {})),
                    function(t) {
                        t[t.Stand = 0] = "Stand", t[t.Hurt = 1] = "Hurt", t[t.Move = 2] = "Move", t[t.Die = 3] = "Die", t[t.Over = 4] = "Over"
                    }(t.HoleState || (t.HoleState = {})),
                    function(t) {
                        t[t.Normal = 0] = "Normal", t[t.Hero = 1] = "Hero", t[t.Hole_Main = 2] = "Hole_Main", t[t.Hole = 3] = "Hole"
                    }(t.MiniMapPoint || (t.MiniMapPoint = {}))
            }(o.aw || (o.aw = {})), cc._RF.pop()
    }, {}],
    DRes: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "9c807G0H/ZFUYFJjXUpnTfE", "DRes"), Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.DRes = void 0,
            function(t) {
                var e, o = {},
                    n = {},
                    i = {},
                    a = {};
                t.load_json = function(t, e) {
                        cc.resources.loadDir("jsons", cc.JsonAsset, function(e, o) {
                            t && t(e / o)
                        }, function(t, n) {
                            t && cc.log("err = ", t);
                            for (var i = 0; i < n.length; i++) {
                                var a = n[i];
                                o[a.name] = a.json
                            }
                            e && e()
                        })
                    }, t.getJson = function(t) {
                        return o[t]
                    }, t.getJsonCnt = function(t) {
                        return o[t].length
                    }, t.snakeSkins = "snakeSkins",
                    function(t) {
                        t[t.Index = 0] = "Index", t[t.Order = 1] = "Order", t[t.Name = 2] = "Name", t[t.Type = 3] = "Type", t[t.NoBody = 4] = "NoBody", t[t.NoTail = 5] = "NoTail", t[t.BodyPieces = 6] = "BodyPieces", t[t.HeadHeight = 7] = "HeadHeight", t[t.PriceType = 8] = "PriceType", t[t.PriceValue = 9] = "PriceValue", t[t.Useable = 10] = "Useable"
                    }(t.SnakeSkinsData || (t.SnakeSkinsData = {})), t.getJson_snakeSkin = function(e, n) {
                        return o[t.snakeSkins][e][n]
                    }, t.HoleLvs = "holeLvs",
                    function(t) {
                        t[t.LvIdx = 0] = "LvIdx", t[t.LenMax = 1] = "LenMax", t[t.HpTotal = 2] = "HpTotal", t[t.Cnt = 3] = "Cnt", t[t.SplitCnt = 4] = "SplitCnt", t[t.SplitTime = 5] = "SplitTime", t[t.FogSpeed = 6] = "FogSpeed", t[t.FogDamage = 7] = "FogDamage", t[t.FogSpace = 8] = "FogSpace", t[t.FogSpaceSub = 9] = "FogSpaceSub", t[t.GrowRate = 10] = "GrowRate", t[t.EnemyCnt = 11] = "EnemyCnt", t[t.RwdType = 12] = "RwdType", t[t.RwdVal = 13] = "RwdVal", t[t.Player = 14] = "Player", t[t.BestTime = 15] = "BestTime"
                    }(t.HoleLvsData || (t.HoleLvsData = {})), t.getJson_HoleLv = function(e) {
                        return o[t.HoleLvs][e]
                    }, t.NameSnakes = "name_snake",
                    function(t) {
                        t[t.Index = 0] = "Index", t[t.Name = 1] = "Name"
                    }(e = t.NameSnakesData || (t.NameSnakesData = {})), t.getJson_nameSnake = function(n) {
                        return o[t.NameSnakes][n][e.Name]
                    }, t.getJson_nameSnakeCnt = function() {
                        return o[t.NameSnakes].length
                    }, t.Dailys = "daily",
                    function(t) {
                        t[t.Index = 0] = "Index", t[t.Title = 1] = "Title", t[t.Deco = 2] = "Deco", t[t.Target = 3] = "Target", t[t.RwdType = 4] = "RwdType", t[t.RwdValue = 5] = "RwdValue"
                    }(t.DailysData || (t.DailysData = {})), t.getJson_daily = function(e) {
                        return o[t.Dailys][e]
                    }, t.Navigates = "navigate",
                    function(t) {
                        t[t.Index = 0] = "Index", t[t.Icon = 1] = "Icon", t[t.Name = 2] = "Name", t[t.AppId = 3] = "AppId", t[t.Address = 4] = "Address"
                    }(t.NavigatesData || (t.NavigatesData = {})), t.getJson_Navigate = function(e, n) {
                        return o[t.Navigates][e][n]
                    }, t.load_images = function(t, e) {
                        cc.resources.loadDir("images", cc.SpriteFrame, function(e, o) {
                            t && t(e / o)
                        }, function(t, o) {
                            t && cc.log("err = ", t);
                            for (var i = 0; i < o.length; i++) {
                                var a = o[i];
                                n[a.name] = a
                            }
                            e && e()
                        })
                    }, t.getImage = function(t) {
                        return n[t]
                    }, t.getImage_food = function(t) {
                        return n["food_" + t]
                    }, t.getImage_snakeSkin = function(t, e) {
                        return n["skin_" + t + "_" + e]
                    }, t.getImage_killHead = function(t) {
                        return n["kill_h" + t]
                    }, t.load_prefabs = function(t, e) {
                        cc.resources.loadDir("prefabs", cc.Prefab, function(e, o) {
                            t && t(e / o)
                        }, function(t, o) {
                            t && cc.log("err = ", t);
                            for (var n = 0; n < o.length; n++) {
                                var a = o[n];
                                i[a.name] = o[n]
                            }
                            e && e()
                        })
                    }, t.getPrefab = function(t) {
                        return i[t]
                    }, t.load_dbAnims = function(t, e) {
                        cc.resources.loadDir("dbAnims", function(e, o) {
                            t && t(e / o)
                        }, function(t, o) {
                            t && cc.log("err = ", t);
                            for (var n = 0; n < o.length; n++);
                            e && e()
                        })
                    }, t.load_musics = function(t, e) {
                        cc.resources.loadDir("musics", cc.AudioClip, function(e, o) {
                            t && t(e / o)
                        }, function(t, o) {
                            t && cc.log("err = ", t);
                            for (var n = 0; n < o.length; n++) {
                                var i = o[n];
                                a[i.name] = o[n]
                            }
                            e && e()
                        })
                    }, t.getMusic = function(t) {
                        return a[t]
                    }
            }(o.DRes || (o.DRes = {})), cc._RF.pop()
    }, {}],
    DSave: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1b8b5i9NeNMCZhrq5tX6pwg", "DSave"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.DDaily = o.DSnake = o.DBase = void 0;
        var n = t("./DConfig"),
            i = t("./DRes"),
            a = t("./Tools"),
            s = function() {
                function t() {}

                return t.initAll = function() {
                    r.init(), c.init(), l.init()
                }, t.loadAll = function() {
                    r.load(), c.load(), l.load()
                }, t.saveAll = function() {
                    r.save(), c.save(), l.save()
                }, t.updateAll = function(t) {
                    r.update(t)
                }, t
            }();
        o.default = s;
        var r = function() {
            function t() {}

            return t.init = function() {
                this.autoSaveTimer = 0;
                var t = this.data;
                t.moneys = [];
                for (var e = 0; e < n.aw.Money.COUNT; e++) t.moneys.push(0);
                for (t.moneys[n.aw.Money.Golds] = 500, t.moneys[n.aw.Money.Diamonds] = 0, t.onlineTime = 0, e = 0; e < 5; e++) t.onlineRwd.push(0);
                for (t.signTimes = 0, t.signDate = 0, t.usedRedeemCodes = [], e = 0; e < n.aw.Item.COUNT; e++) t.items.push(0);
                t.jackpot_times = 0, t.jackpot_skinTimes = 0, t.jackpot_freeTimer = this.Full_Free_Time_Jackpot, t.addShortcut = 0, t.teachSteps = [0, 0, 0], t.mineRwd = 0, t.mineRwdTime = 0, t.mineCarCnt = 2, t.mineBuffTime = [0, 0, 0], t.mineBuffTimes_gold = [0, 0, 0]
            }, t.save = function() {
                var t = JSON.stringify(this.data);
                cc.sys.localStorage.setItem(this.fn, t), this.autoSaveTimer = 0
            }, t.load = function() {
                this.init();
                var t = cc.sys.localStorage.getItem(this.fn);
                if (t && "" != t) {
                    for (var e = JSON.parse(t), o = this.data, n = 0; n < o.moneys.length; n++) n < e.moneys.length && (o.moneys[n] = e.moneys[n]);
                    for (o.onlineTime = e.onlineTime, n = 0; n < o.onlineRwd.length; n++) n < e.onlineRwd.length && (o.onlineRwd[n] = e.onlineRwd[n]);
                    if (o.signTimes = e.signTimes, o.signDate = e.signDate, e.vers >= 1 && (o.usedRedeemCodes = e.usedRedeemCodes), e.vers >= 2) {
                        for (n = 0; n < o.items.length; n++) n < e.items.length && (o.items[n] = e.items[n]);
                        o.jackpot_times = e.jackpot_times, o.jackpot_skinTimes = e.jackpot_skinTimes, o.jackpot_freeTimer = e.jackpot_freeTimer
                    }
                    if (e.vers >= 3 && (o.addShortcut = e.addShortcut), e.vers >= 4) {
                        for (n = 0; n < o.teachSteps.length; n++) n < e.teachSteps.length && (o.teachSteps[n] = e.teachSteps[n]);
                        for (o.mineRwd = e.mineRwd, o.mineRwdTime = e.mineRwdTime, o.mineCarCnt = e.mineCarCnt, n = 0; n < o.mineBuffTime.length; n++) n < e.mineBuffTime.length && (o.mineBuffTime[n] = e.mineBuffTime[n]);
                        for (n = 0; n < o.mineBuffTimes_gold.length; n++) n < e.mineBuffTimes_gold.length && (o.mineBuffTimes_gold[n] = e.mineBuffTimes_gold[n])
                    }
                }
            }, t.update = function(t) {
                var e = !1,
                    o = this.data,
                    n = this.getOnlineTimeMax();
                o.onlineTime < n && (o.onlineTime += t, e = !0), this.data.jackpot_freeTimer > 0 && (this.data.jackpot_freeTimer -= t, this.data.jackpot_freeTimer < 0 && (this.data.jackpot_freeTimer = 0), e = !0);
                for (var i = 0; i < this.data.mineBuffTime.length; i++) this.data.mineBuffTime[i] -= t, this.data.mineBuffTime[i] < 0 && (this.data.mineBuffTime[i] = 0);
                this.data.mineRwdTime += t, this.isMineBuffTimeOver(0) || (this.data.mineRwdTime += t);
                var a = this.getMineTimeRound();
                this.data.mineRwdTime > a && (this.data.mineRwdTime = this.data.mineRwdTime % a, this.save()), e && (this.autoSaveTimer += t, this.autoSaveTimer >= 10 && this.save)
            }, t.addMoney = function(t, e, o) {
                void 0 === o && (o = !0);
                var i = this.data,
                    a = i.moneys[t] + e;
                return !(a < 0 || (i.moneys[t] = a, o && this.save(), e > 0 && (t == n.aw.Money.Golds ? l.addProg(n.aw.Daily.GetGolds, e) : t == n.aw.Money.Diamonds && l.addProg(n.aw.Daily.GetDiamonds, e)), 0))
            }, t.getMoney = function(t) {
                return this.data.moneys[t]
            }, t.isMoneyless = function(t, e) {
                return this.data.moneys[t] + e < 0
            }, t.addItem = function(t, e, o) {
                void 0 === o && (o = !0);
                var n = this.data,
                    i = n.items[t] + e;
                return !(i < 0 || (n.items[t] = i, o && this.save(), 0))
            }, t.getItem = function(t) {
                return this.data.items[t]
            }, t.isItemless = function(t, e) {
                return this.data.items[t] + e < 0
            }, t.getOnlineTime = function() {
                return this.data.onlineTime
            }, t.getOnlineTimeMax = function() {
                return 3600
            }, t.doGetOnlineRwd = function(t, e) {
                void 0 === e && (e = !0), this.data.onlineRwd[t] = 1, e && this.save()
            }, t.isGotOnlineRwd = function(t) {
                return this.data.onlineRwd[t] > 0
            }, t.doSign = function(t) {
                void 0 === t && (t = !0), this.data.signTimes += 1, this.data.signDate = a.default.getDate(), t && this.save()
            }, t.getSignTimes = function() {
                return this.data.signTimes
            }, t.getLastSignDate = function() {
                return this.data.signDate
            }, t.doUseRedeemCode = function(t) {
                for (var e = ["965668"], o = 0; o < e.length; o++)
                    if (e[o] == t) {
                        for (var i = 0; i < this.data.usedRedeemCodes.length; i++)
                            if (this.data.usedRedeemCodes[i] == t) return 1;
                        return this.data.usedRedeemCodes.push(t), this.addMoney(n.aw.Money.Golds, 5e3), this.addMoney(n.aw.Money.Diamonds, 300), 0
                    }
                return 2
            }, t.addJackpotTimes = function(t) {
                void 0 === t && (t = !0), this.data.jackpot_times += 1, this.data.jackpot_skinTimes += 1, t && this.save()
            }, t.getJackpotTimes = function() {
                return this.data.jackpot_times
            }, t.resetJackpotSkinTimes = function(t) {
                void 0 === t && (t = !0), this.data.jackpot_skinTimes = 0, t && this.save()
            }, t.getJackpotSkinTimes = function() {
                return this.data.jackpot_skinTimes
            }, t.resetJackpotFreeTimer = function(t) {
                void 0 === t && (t = !0), this.data.jackpot_freeTimer = this.Full_Free_Time_Jackpot, t && this.save()
            }, t.getJackpotFreeTimer = function() {
                return this.data.jackpot_freeTimer
            }, t.setAddShortCut = function(t) {
                void 0 === t && (t = !0), this.data.addShortcut = 1, t && this.save()
            }, t.isAddShortCut = function() {
                return this.data.addShortcut > 0
            }, t.setTeachStep = function(t, e, o) {
                void 0 === o && (o = !0), this.data.teachSteps[t] = e, o && this.save()
            }, t.getTeachStep = function(t) {
                return this.data.teachSteps[t]
            }, t.addMineRwd = function(t, e) {
                void 0 === e && (e = !0), this.data.mineRwd += t;
                var o = this.getMineRwdFull();
                this.data.mineRwd > o && (this.data.mineRwd = o), this.data.mineRwd < 0 && (this.data.mineRwd = 0)
            }, t.getMineRwd = function() {
                return this.data.mineRwd
            }, t.getMineRwdFull = function() {
                return 2e3
            }, t.isMineRwdFull = function() {
                return this.getMineRwd() >= this.getMineRwdFull()
            }, t.getMineTime = function() {
                return this.data.mineRwdTime
            }, t.getMineTimeRound = function() {
                return 10
            }, t.addMineCarCnt = function(t) {
                void 0 === t && (t = !0), this.data.mineCarCnt += 1;
                var e = this.getMineCarCntFull();
                this.data.mineCarCnt > e && (this.data.mineCarCnt = e), t && this.save()
            }, t.getMineCarCnt = function() {
                return this.data.mineCarCnt
            }, t.getMineCarCntFull = function() {
                return 25
            }, t.isMineCarCntFull = function() {
                return this.getMineCarCnt() >= this.getMineCarCntFull()
            }, t.addMineBuffTime = function(t, e) {
                void 0 === e && (e = !0), this.data.mineBuffTime[t] += 300, e && this.save()
            }, t.getMineBuffTime = function(t) {
                return this.data.mineBuffTime[t]
            }, t.isMineBuffTimeOver = function(t) {
                return this.data.mineBuffTime[t] <= 0
            }, t.addMineBuffTimes_gold = function(t, e) {
                void 0 === e && (e = !0), this.data.mineBuffTimes_gold[t] += 1, e && this.save()
            }, t.getMineBuffTimes_gold = function(t) {
                return this.data.mineBuffTimes_gold[t]
            }, t.getMineBuffTimesPrice_gold = function(t) {
                return 0 == t || 2 == t ? 500 : 600 + 200 * this.data.mineBuffTimes_gold[t]
            }, t.fn = "snake_233h5_base", t.Full_Free_Time_Jackpot = 360, t.autoSaveTimer = 0, t.data = {
                vers: 4,
                moneys: [],
                onlineTime: 0,
                onlineRwd: [],
                signTimes: 0,
                signDate: 0,
                usedRedeemCodes: [],
                items: [],
                jackpot_times: 0,
                jackpot_skinTimes: 0,
                jackpot_freeTimer: 0,
                addShortcut: 0,
                teachSteps: [0, 0, 0],
                mineRwd: 0,
                mineRwdTime: 0,
                mineCarCnt: 0,
                mineBuffTime: [0, 0, 0],
                mineBuffTimes_gold: [0, 0, 0]
            }, t
        }();
        o.DBase = r;
        var c = function() {
            function t() {}

            return t.init = function() {
                var t = this.data;
                t.skins = [];
                for (var e = 0; e < n.aw.SnakeSkin.COUNT; e++) t.skins.push({
                    state: 0,
                    propLv: [0, 0, 0]
                });
                t.skins[0].state = 100, t.skinIdx = 0, t.holeLvBestTime = []
            }, t.save = function() {
                var t = JSON.stringify(this.data);
                cc.sys.localStorage.setItem(this.fn, t)
            }, t.load = function() {
                this.init();
                var t = cc.sys.localStorage.getItem(this.fn);
                if (t && "" != t) {
                    for (var e = JSON.parse(t), o = this.data, n = 0; n < o.skins.length; n++) n < e.skins.length && (o.skins[n] = e.skins[n]);
                    o.skinIdx = e.skinIdx, o.holeLvBestTime = e.holeLvBestTime
                }
            }, t.setSkinGet = function(t, e) {
                void 0 === e && (e = !0);
                var o = this.data;
                return 0 == o.skins[t].state && (o.skins[t].state = 1, e && this.save(), !0)
            }, t.isSkinGet = function(t) {
                return this.data.skins[t].state > 0
            }, t.isSkinGet_new = function(t) {
                return 1 == this.data.skins[t].state
            }, t.hasSkinGet_new = function() {
                for (var t = 0; t < this.data.skins.length; t++)
                    if (this.isSkinGet_new(t)) return !0;
                return !1
            }, t.clearSkinGet_new = function(t) {
                if (void 0 === t && (t = -1), t < 0)
                    for (var e = 0; e < this.data.skins.length; e++) this.clearSkinGet_new(e);
                else this.isSkinGet_new(t) && (this.data.skins[t].state = 100)
            }, t.doSkinPropUpgrade = function(t, e, o) {
                void 0 === o && (o = !0);
                var n = this.getSkinPropLvMax(t, e),
                    i = this.getSkinPropLv(t, e);
                return i < n && (this.data.skins[t].propLv[e] = i + 1, o && this.save(), !0)
            }, t.getSkinPropLv = function(t, e) {
                return this.data.skins[t].propLv[e]
            }, t.getSkinPropLvMax = function() {
                return 30
            }, t.getSkinPropVal = function(t, e, o) {
                void 0 === o && (o = -1);
                var n = this.getSkinPropLvMax(t, e);
                return o < 0 && (o = this.getSkinPropLv(t, e)), o > n && (o = n), 0 == e ? 1 * o : 1 == e ? 20 * o : 2 == e ? 2 * o : 0
            }, t.isSkinPropLvMax = function(t, e) {
                var o = this.getSkinPropLvMax(t, e);
                return this.getSkinPropLv(t, e) >= o
            }, t.setSkinIdx = function(t, e) {
                void 0 === e && (e = !0), this.data.skinIdx = t, e && this.save()
            }, t.getSkinIdx = function() {
                return this.data.skinIdx
            }, t.setHoleLvBestTime = function(t, e, o) {
                void 0 === o && (o = !0);
                var n = this.data.holeLvBestTime.length;
                return t < n ? (e < this.data.holeLvBestTime[t] && (this.data.holeLvBestTime[t] = e), 1) : t != n ? -1 : (this.data.holeLvBestTime.push(e), o && this.save(), 0)
            }, t.getHoleLvBestTime = function(t) {
                return t < this.data.holeLvBestTime.length ? this.data.holeLvBestTime[t] : -1
            }, t.getHoleLvPassed = function() {
                return this.data.holeLvBestTime.length
            }, t.fn = "snake_233h5_snake", t.data = {
                vers: 0,
                skins: [],
                skinIdx: 0,
                holeLvBestTime: []
            }, t
        }();
        o.DSnake = c;
        var l = function() {
            function t() {}

            return t.init = function() {
                for (var t = this.data, e = 0; e < n.aw.Daily.COUNT; e++) t.prog.push(0)
            }, t.save = function() {
                var t = JSON.stringify(this.data);
                cc.sys.localStorage.setItem(this.fn, t)
            }, t.load = function() {
                this.init();
                var t = cc.sys.localStorage.getItem(this.fn);
                if (t && "" != t) {
                    var e = JSON.parse(cc.sys.localStorage.getItem(this.fn));
                    if (e.lastDate == a.default.getDate())
                        for (var o = this.data, n = 0; n < o.prog.length; n++) n < o.prog.length && (o.prog[n] = e.prog[n])
                }
            }, t.addProg = function(t, e, o) {
                void 0 === o && (o = !0), this.isFinished(t) || (this.data.prog[t] += e, this.data.lastDate = a.default.getDate(), o && this.save())
            }, t.getProg = function(t) {
                return this.data.prog[t]
            }, t.getProgRate = function(t) {
                var e = i.DRes.getJson_daily(t);
                return this.data.prog[t] / e[i.DRes.DailysData.Target]
            }, t.isProgFinish = function(t) {
                var e = i.DRes.getJson_daily(t);
                return this.data.prog[t] >= e[i.DRes.DailysData.Target]
            }, t.setFinished = function(t, e) {
                void 0 === e && (e = !0), this.data.prog[t] = -1, this.data.lastDate = a.default.getDate(), e && this.save()
            }, t.isFinished = function(t) {
                return this.data.prog[t] < 0
            }, t.getIndex_notFinished = function() {
                for (var t = 0; t < n.aw.Daily.COUNT; t++)
                    if (!this.isFinished(t)) return t;
                return -1
            }, t.fn = "snake_233h5_daily", t.data = {
                vers: 0,
                prog: [],
                lastDate: 0
            }, t
        }();
        o.DDaily = l, cc._RF.pop()
    }, {
        "./DConfig": "DConfig",
        "./DRes": "DRes",
        "./Tools": "Tools"
    }],
    DailyItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "460b9o0u8ZJvb0f+ZMCJBuF", "DailyItem");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DRes"),
            c = t("../datas/DSave"),
            l = t("../datas/GameRun"),
            d = t("../UI/UIMgr"),
            u = cc._decorator,
            p = u.ccclass,
            h = u.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lbDeco = null, e.barProg = null, e.lbProgVal = null, e.lbRwdVal = null, e.btnGet = null, e.ndFinished = null, e._index = 0, e._clickCB = null, e
                }

                return i(e, t), e.prototype.setInfo = function(t, e) {
                    this._index = t, this._clickCB = e;
                    var o = r.DRes.getJson_daily(this._index),
                        n = o[r.DRes.DailysData.Deco],
                        i = o[r.DRes.DailysData.Target];
                    this.lbDeco.string = n.replace("XX", "" + i), this.lbRwdVal.string = "x" + o[r.DRes.DailysData.RwdValue], this.refreshShow()
                }, e.prototype.refreshShow = function() {
                    var t = r.DRes.getJson_daily(this._index)[r.DRes.DailysData.Target],
                        e = c.DDaily.isProgFinish(this._index),
                        o = c.DDaily.isFinished(this._index),
                        n = c.DDaily.getProg(this._index);
                    (o || e) && (n = t), this.lbProgVal.string = n + "/" + t, this.barProg.progress = n / t, this.btnGet.node.active = !o, this.btnGet.interactable = e, this.ndFinished.active = o
                }, e.prototype.onClick_get = function() {
                    if (this._clickCB && this._clickCB(this._index), c.DDaily.isProgFinish(this._index)) {
                        var t = r.DRes.getJson_daily(this._index),
                            e = t[r.DRes.DailysData.RwdType],
                            o = t[r.DRes.DailysData.RwdValue];
                        0 == e ? (c.DBase.addMoney(s.aw.Money.Golds, o), d.default.instance.popGetShow.setOpen(null, {
                            type: s.aw.GetShow.Gold,
                            value: o
                        })) : 1 == e && (c.DBase.addMoney(s.aw.Money.Diamonds, o), d.default.instance.popGetShow.setOpen(null, {
                            type: s.aw.GetShow.Diamond,
                            value: o
                        })), c.DDaily.setFinished(this._index)
                    }
                    this.refreshShow(), l.default.playEFM("ef_ui_claim")
                }, a([h(cc.Label)], e.prototype, "lbDeco", void 0), a([h(cc.ProgressBar)], e.prototype, "barProg", void 0), a([h(cc.Label)], e.prototype, "lbProgVal", void 0), a([h(cc.Label)], e.prototype, "lbRwdVal", void 0), a([h(cc.Button)], e.prototype, "btnGet", void 0), a([h(cc.Node)], e.prototype, "ndFinished", void 0), a([p], e)
            }(cc.Component);
        o.default = f, cc._RF.pop()
    }, {
        "../UI/UIMgr": "UIMgr",
        "../datas/DConfig": "DConfig",
        "../datas/DRes": "DRes",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun"
    }],
    FoodMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "17c33jkOhBCTYzLmovPafvC", "FoodMgr");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/GameRun"),
            c = t("../datas/Tools"),
            l = t("../objs/Food"),
            d = t("../UI/UIMgr"),
            u = s.aw.FoodType,
            p = s.aw.FoodState,
            h = cc._decorator,
            f = h.ccclass,
            _ = (h.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.gameCtrl = null, e._foodCnt = 128, e._foods = [], e
                }

                return i(e, t), e.prototype.initFoods = function(t, e) {
                    void 0 === e && (e = 128), this.gameCtrl = t;
                    var o = this.gameCtrl._worldSize;
                    this._foodCnt = e;
                    for (var n = this._foods.length; n < e;) {
                        var i = cc.instantiate(d.default.instance.ndBaseFood);
                        this.node.addChild(i);
                        var a = i.getComponent(l.default);
                        this._foods.push(a), ++n
                    }
                    for (; n > e;)(a = this._foods.pop()).node.removeFromParent(), --n;
                    for (var s = 0; s < this._foodCnt; s++) {
                        var r = c.default.randomRange(0, o.x),
                            p = c.default.randomRange(0, o.y);
                        this._foods[s].setBorn(u.Nor, cc.v2(r, p))
                    }
                }, e.prototype.freeFoods = function() {
                    this._foods = [], this.node.removeAllChildren()
                }, e.prototype.updateFoods = function(t) {
                    for (var e = this.gameCtrl._worldSize, o = this.gameCtrl._camShowSize, n = this.gameCtrl._camCenter.sub(o.div(2)), i = n.add(o), a = cc.Rect.fromMinMax(n, i), s = this._foods.length, r = 0, c = 0; c < s; c++) {
                        var l = this._foods[c];
                        if (l.updateState(t, e), l.isDead() && l.isType_ess()) l.node.removeFromParent(), this._foods[c] = null, ++r;
                        else {
                            do {
                                if (!l.isLife()) break;
                                var d = l.node.getPosition();
                                if (a.contains(d)) break;
                                if (l.isType_ess()) {
                                    l.isLifeOver() && l.setDead();
                                    break
                                }
                                var u = d.x + Math.ceil((a.xMin - d.x) / a.width) * a.width,
                                    p = d.y + Math.ceil((a.yMin - d.y) / a.height) * a.height;
                                u < 50 && (u = u % a.width + a.width), u > e.x - 50 && (u = u % a.width + Math.floor(e.x / a.width) * a.width) > e.x && (u -= a.width), p < 50 && (p = p % a.height + a.height), p > e.y - 50 && (p = p % a.height + Math.floor(e.y / a.height) * a.height) > e.y && (p -= a.height), l.node.setPosition(cc.v2(u, p))
                            } while (0);
                            r > 0 && (this._foods[c - r] = this._foods[c], this._foods[c] = null)
                        }
                    }
                    r > 0 && this._foods.splice(s - r, r)
                }, e.prototype.checkEatFoods = function(t, e, o) {
                    void 0 === o && (o = 0);
                    for (var n = t.getPos_head(), i = this._foods.length, a = 300, c = null, l = 0, d = 0; d < i; d++) {
                        var u = this._foods[d];
                        if (u && !u.isDead())
                            if (u.isState(p.Move) && u._moveInfo.target == t) {
                                if ((f = u.node.getPosition().sub(n).mag()) < e) {
                                    if (u.isType_nor() || u.isType_ess()) l += u._value;
                                    else if (u.isType_item()) {
                                        var h = u._type - s.aw.FoodType.Invi;
                                        t.addBuff(h, -1)
                                    }
                                    u.setDead()
                                }
                            } else if (u.isState(p.Idle)) {
                            var f;
                            (f = u.node.getPosition().sub(n).mag()) < e ? (u.isType_ess() && t.clearLured(), u.isType_nor() || u.isType_ess() ? l += u._value : u.isType_item() && (h = u._type - s.aw.FoodType.Invi, t.addBuff(h, -1), t.isPid_hero() && r.default.playEFM("ef_snake_growth")), u.setDead()) : o > 0 && f < o ? (u.isType_nor() || u.isType_ess()) && u.setMove({
                                v: 0,
                                a: 2400,
                                target: t
                            }) : u.hasLure() && f < a && (c = u, a = f)
                        }
                    }
                    return c && t.canBeLured() && t.setBeLured(c.node.getPosition()), l
                }, e.prototype.createEss = function(t) {
                    if (!t || t.length < 1) return !1;
                    for (var e = 0; e < t.length; e++) {
                        var o = cc.instantiate(d.default.instance.ndBaseFood);
                        this.node.addChild(o);
                        var n = o.getComponent(l.default);
                        this._foods.push(n), n.setBorn(u.Ess, t[e])
                    }
                    return !0
                }, e.prototype.createLoot_ess = function(t) {
                    for (var e = 0; e < 4; e++) {
                        var o = cc.instantiate(d.default.instance.ndBaseFood);
                        this.node.addChild(o);
                        var n = o.getComponent(l.default);
                        this._foods.push(n);
                        var i = c.default.randomRangeInt(500, 900),
                            a = c.default.randomRange(-30, 30),
                            s = c.default.randomRange(-30, 30);
                        n.setLoot(u.Ess, t.add(cc.v2(a, s))), n.setValue(i)
                    }
                }, e.prototype.createLoot_item = function(t) {
                    var e = cc.instantiate(d.default.instance.ndBaseFood);
                    this.node.addChild(e);
                    var o = e.getComponent(l.default);
                    this._foods.push(o);
                    var n = [u.Invi, u.Grow, u.Magnet, u.Income_x2, u.Speed, u.AvoidDeath],
                        i = c.default.randomRangeInt(0, n.length);
                    o.setLoot(n[i], t)
                }, a([f], e)
            }(cc.Component));
        o.default = _, cc._RF.pop()
    }, {
        "../UI/UIMgr": "UIMgr",
        "../datas/DConfig": "DConfig",
        "../datas/GameRun": "GameRun",
        "../datas/Tools": "Tools",
        "../objs/Food": "Food"
    }],
    Food: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "13744RkYE9Nk61zP4upaxDj", "Food");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DRes"),
            c = t("../datas/Tools"),
            l = s.aw.FoodType,
            d = s.aw.FoodState,
            u = cc._decorator,
            p = u.ccclass,
            h = u.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.spIcon = null, e.armIcon = null, e._type = l.Nor, e._value = 0, e._timer = 0, e._state = 0, e._stateTime = 0, e._stateTimer = 0, e._moveInfo = null, e
                }

                return i(e, t), e.prototype.updateState = function(t, e) {
                    this._timer += t;
                    var o = this.node.getPosition(),
                        n = 1,
                        i = this._stateTimer;
                    switch (this._stateTimer += t, this._state) {
                        case d.Born:
                            if (this._moveInfo) {
                                var a = this._moveInfo,
                                    s = this._stateTimer >= a.time,
                                    r = s ? a.time - i : t,
                                    u = a.v + a.a * i;
                                (v = a.v + a.a * (i + r)) <= 0 && (r = ((v = 0) - a.v) / a.a, s = !0);
                                var p = .5 * (u + v) * r,
                                    h = o.add(cc.v2(p, p).rotate(a.angle)),
                                    f = 180 * a.angle / Math.PI % 360;
                                f = f < 0 ? f + 360 : f, h.x < 15 ? (h.x = 30 - h.x, f > 90 && f < 270 && (f = (180 - f + 360) % 360)) : h.x > e.x - 15 && (h.x = 2 * (e.x - 15) - h.x, (f < 90 || f > 270) && (f = (180 - f + 360) % 360)), h.y < 15 ? (h.y = 30 - h.y, f > 180 && (f = (360 - f) % 360)) : h.y > e.y - 15 && (h.y = 2 * (e.y - 15) - h.y, f < 180 && (f = (360 - f) % 360)), a.angle = f * Math.PI / 180, this.node.setPosition(h), s && this.setIdle()
                            }
                            break;
                        case d.Idle:
                            n = 1 + .1 * Math.sin(this._timer * Math.PI * 4);
                            break;
                        case d.Move:
                            if (this._moveInfo) {
                                var _ = (a = this._moveInfo).target;
                                if (!_ || !_.isLife()) return this._moveInfo = null, void this.setState(d.Idle);
                                p = .5 * ((u = a.v + a.a * i) + (v = a.v + a.a * this._stateTimer)) * t;
                                var v, y = (h = _.getPos_head()).sub(o),
                                    g = y.mag();
                                p <= g && g > 1 && (h = o.add(y.mul(p / g))), this.node.setPosition(h)
                            }
                            break;
                        case d.Dead:
                            if (this._stateTimer > this._stateTime && !this.isType_ess()) {
                                var m = c.default.randomRange(0, e.x),
                                    S = c.default.randomRange(0, e.y);
                                this.setBorn(l.Nor, cc.v2(m, S))
                            }
                    }
                    this.node.setScale(n)
                }, e.prototype.setType = function(t) {
                    if (this._type = t, this._value = 0, t == l.Nor || t == l.Ess) {
                        this.spIcon.node.active = !0, this.armIcon.node.active = !1;
                        var e, o = c.default.randomRangeInt(0, 6),
                            n = c.default.randomRangeInt(0, 20);
                        e = t == l.Ess || 10 == n ? c.default.randomRangeInt(300, 500) : c.default.randomRangeInt(150, 250), this.spIcon.spriteFrame = r.DRes.getImage_food(o), this.setValue(e)
                    } else {
                        this.spIcon.node.active = !1, this.armIcon.node.active = !0;
                        var i = "pro" + (t - l.Ess);
                        this.armIcon.playAnimation(i, 0)
                    }
                }, e.prototype.isType_nor = function() {
                    return this._type == l.Nor
                }, e.prototype.isType_ess = function() {
                    return this._type == l.Ess
                }, e.prototype.isType_item = function() {
                    return this._type >= l.Invi && this._type <= l.AvoidDeath
                }, e.prototype.isType_money = function() {
                    return this._type >= l.Diamond && this._type <= l.Gold
                }, e.prototype.setValue = function(t) {
                    this._value = t;
                    var e = .5;
                    this._value > 150 && (e += Math.sqrt(this._value - 150) / 40), this.spIcon.node.setScale(e)
                }, e.prototype.hasLure = function() {
                    return this._value > 300
                }, e.prototype.setState = function(t, e) {
                    void 0 === e && (e = 0), this._state = t, this._stateTime = e, this._stateTimer = 0
                }, e.prototype.isState = function(t) {
                    return this._state == t
                }, e.prototype.isLife = function() {
                    return this._state == d.Born || this._state == d.Idle
                }, e.prototype.isDead = function() {
                    return this._state == d.Dead
                }, e.prototype.isLifeOver = function() {
                    return this._state == d.Idle && this._timer > this._stateTime
                }, e.prototype.setBorn = function(t, e, o) {
                    var n = this;
                    void 0 === o && (o = null), this.setType(t), this.setState(d.Born), this.node.setPosition(e), this.node.active = !0, this._timer = c.default.randomRange(0, 1), this._moveInfo = o, this._moveInfo || (this.node.setScale(0), this.node.stopAllActions(), cc.tween(this.node).to(.3, {
                        scale: 1
                    }).call(function() {
                        n.setIdle()
                    }).start())
                }, e.prototype.setLoot = function(t, e, o) {
                    var n = this;
                    void 0 === o && (o = null), this.setType(t), this.setState(d.Born), this.node.setPosition(e), this.node.active = !0, this._timer = c.default.randomRange(0, 1), this._moveInfo = o, this._moveInfo || (this.node.setScale(0), this.node.stopAllActions(), cc.tween(this.node).to(.3, {
                        scale: 1
                    }).delay(.7).call(function() {
                        n.setIdle()
                    }).start())
                }, e.prototype.setIdle = function() {
                    var t = c.default.randomRange(10, 15);
                    this.setState(d.Idle, t)
                }, e.prototype.setDead = function() {
                    var t = c.default.randomRange(5, 10);
                    this.setState(d.Dead, t), this.node.active = !1, this._moveInfo = null
                }, e.prototype.setMove = function(t) {
                    this.setState(d.Move, 0), this._moveInfo = t
                }, a([h(cc.Sprite)], e.prototype, "spIcon", void 0), a([h(dragonBones.ArmatureDisplay)], e.prototype, "armIcon", void 0), a([p], e)
            }(cc.Component);
        o.default = f, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DRes": "DRes",
        "../datas/Tools": "Tools"
    }],
    GameCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "dde6akPQHhDqaRO6Q87b/oM", "GameCtrl");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DRes"),
            c = t("../datas/DSave"),
            l = t("../datas/GameRun"),
            d = t("../datas/SdkCtrl"),
            u = t("../datas/Tools"),
            p = t("../UI/UIGame"),
            h = t("../UI/UIMgr"),
            f = t("./BgMgr"),
            _ = t("./FoodMgr"),
            v = t("./HoleMgr"),
            y = t("./InsectMgr"),
            g = t("./SnakeMgr"),
            m = cc._decorator,
            S = m.ccclass,
            k = m.property,
            b = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndUIGame = null, e.ndGameRoot = null, e.ndBgMgr = null, e.ndFoodMgr = null, e.ndHoleMgr = null, e.ndSnakeMgr = null, e.ndInsectMgr = null, e.ndEffectMgr = null, e._uiGame = null, e.bgMgr = null, e.foodMgr = null, e.holeMgr = null, e.snakeMgr = null, e.insectMgr = null, e._camSize = null, e._camShowSize = null, e._camCenter = null, e._camOffset = null, e._worldSize = null, e._bannerStep = 0, e._bannerTimer = 0, e
                }

                return i(e, t), e.prototype.onLoad = function() {
                    this._uiGame = this.ndUIGame.getComponent(p.default), this.bgMgr = this.ndBgMgr.getComponent(f.default), this.foodMgr = this.ndFoodMgr.getComponent(_.default), this.holeMgr = this.ndHoleMgr.getComponent(v.default), this.snakeMgr = this.ndSnakeMgr.getComponent(g.default), this.insectMgr = this.ndInsectMgr.getComponent(y.default)
                }, e.prototype.onEnable = function() {
                    this._camSize = cc.v2(cc.winSize.width, cc.winSize.height);
                    var t = this._camSize.mul(1.125);
                    this._camShowSize = cc.v2(Math.floor(t.x), Math.floor(t.y)), this._camOffset = null;
                    var e = 6;
                    l.default.isMode(s.aw.Mode.Snake_Hole) && (e = u.default.getRange(l.default._lv, 2, 6));
                    var o = cc.v2(1024 * e, 1024 * e),
                        n = 7;
                    this.initWorld(o), this.bgMgr.initBg(this, 0), this.foodMgr.initFoods(this, 48), l.default.isMode(s.aw.Mode.Snake_Hole) ? (this.holeMgr.node.active = !0, this.holeMgr.initMgr(this), n = this.holeMgr._lvDat[r.DRes.HoleLvsData.EnemyCnt], this.insectMgr.node.active = !1, this.insectMgr.freeMgr()) : (this.insectMgr.node.active = !0, this.insectMgr.initMgr(this), this.holeMgr.node.active = !1, this.holeMgr.freeMgr()), this.snakeMgr.initMgr(this, n + 1), this.ndEffectMgr.removeAllChildren(), l.default.isMode(s.aw.Mode.Snake_Hole) && this.snakeMgr.getHero().setSnakeLenMax(this.holeMgr._lvDat[r.DRes.HoleLvsData.LenMax]), this._bannerStep = 0, this._bannerTimer = 2, l.default.isMistakeTouch() || (this._bannerStep = -1)
                }, e.prototype.update = function(t) {
                    if (!l.default._isPause && this.checkRunState()) {
                        this._bannerStep >= 0 && (this._bannerTimer -= t, this._bannerTimer < 0 && (0 == this._bannerStep ? (this._bannerStep = 1, this._bannerTimer = 10, console.log("[GameCtrl.update] show banner"), d.default.playAds_banner(!0, !0)) : 1 == this._bannerStep && (this._bannerStep = 0, this._bannerTimer = 30, console.log("[GameCtrl.update] hide banner"), d.default.playAds_banner(!1))));
                        var e = this.snakeMgr.getHero();
                        this.bgMgr.updateBg(this._camCenter), this.foodMgr.updateFoods(t), this.holeMgr.node.active && this.holeMgr.updateMgr(t), this.insectMgr.node.active && this.insectMgr.updateMgr(t), this.snakeMgr.updateMgr(t);
                        var o = e.getPos_neck();
                        if (this.setWorldPos(o), this._camOffset) {
                            var n = this._camOffset.mag();
                            this._camOffset = n < 5 ? null : this._camOffset.mul(1 - 5 / n)
                        }
                    }
                }, e.prototype.initWorld = function(t) {
                    this._worldSize = t, this.setWorldPos(this._worldSize.div(2))
                }, e.prototype.setWorldPos = function(t) {
                    this._camCenter = t;
                    var e = t;
                    this._camOffset && (e = e.sub(this._camOffset)), e = e.sub(this._camSize.div(2)), this.ndGameRoot.setPosition(e.neg())
                }, e.prototype.getCamPos = function() {
                    return this.node.getPosition().neg()
                }, e.prototype.setCamOffset = function(t) {
                    this._camOffset = t
                }, e.prototype.checkRunState = function() {
                    var t = this,
                        e = this.snakeMgr.getHero(),
                        o = null;
                    switch (l.default._runState) {
                        case s.aw.RunState.None:
                            return !0;
                        case s.aw.RunState.Revive1:
                            if (l.default.setRunState(s.aw.RunState.Revive2), !l.default.isMode(s.aw.Mode.Snake_Hole)) {
                                var n = Math.floor(e._rwdVal),
                                    i = 50 * (Math.floor(n / 50) + 1);
                                o = {
                                    len: 10 * (i - n),
                                    rwd: i
                                }
                            }
                            this._uiGame.setShowNavigates(!1), h.default.instance.popRevive.setOpen(function(e, o) {
                                1 == e && (0 == o ? l.default.setRunState(s.aw.RunState.Over1) : 1 == o && (t._uiGame.setShowNavigates(!0), l.default.setRunState(s.aw.RunState.Revive3)))
                            }, o);
                            break;
                        case s.aw.RunState.Revive2:
                            break;
                        case s.aw.RunState.Revive3:
                            l.default.setRunState(s.aw.RunState.None), this.snakeMgr.getHero().doRevive();
                            break;
                        case s.aw.RunState.Pass1:
                            l.default.setRunState(s.aw.RunState.Pass2), this.doShowCrazyTap(function() {
                                t.doShowNavigate_continue(function() {
                                    t.doShowOver(!0, null)
                                })
                            });
                            break;
                        case s.aw.RunState.Pass2:
                        case s.aw.RunState.Pass3:
                            break;
                        case s.aw.RunState.Over1:
                            l.default.setRunState(s.aw.RunState.Over2), this.doShowCrazyTap(function() {
                                t.doShowNavigate_continue(function() {
                                    t.doShowOver(!1, null)
                                })
                            });
                            break;
                        case s.aw.RunState.Over2:
                        case s.aw.RunState.Over3:
                        case s.aw.RunState.Continue:
                        case s.aw.RunState.Replay:
                            break;
                        case s.aw.RunState.Back:
                        case s.aw.RunState.Menu:
                            this.doBack();
                            break;
                        case s.aw.RunState.Next:
                    }
                    return !1
                }, e.prototype.doShowCrazyTap = function(t) {
                    this.snakeMgr.getHero()._playTime > 0 ? h.default.instance.popCrazyTap.setOpen(function(e) {
                        1 == e && t && t()
                    }) : t && t()
                }, e.prototype.doShowNavigate_continue = function(t) {
                    var e = h.default.instance.popNavigate2_continue;
                    l.default.isMoreGameCtrl(2) && l.default.isShowMoreGame() && e ? e.setOpen(function(e) {
                        1 == e && t && t()
                    }, {
                        evtName: "\u8df3\u8f6c-\u6e38\u620f\u7ed3\u675f"
                    }) : t && t()
                }, e.prototype.doShowOver = function(t, e) {
                    l.default._backFromGame = !0, l.default._playGameTimes += 1;
                    var o = this.snakeMgr.getHero(),
                        n = {
                            playTime: o._playTime
                        };
                    if (l.default.isMode(s.aw.Mode.Snake_Hole)) {
                        if (!t) return h.default.instance.ndGame.active = !1, void(h.default.instance.ndMapLv.active = !0);
                        n.firstPass = c.DSnake.getHoleLvPassed() <= l.default._lv, c.DSnake.setHoleLvBestTime(l.default._lv, o._playTime)
                    } else n.kills = o._kills, n.len = Math.floor(o._score * o.getScoreRate_show()), n.rwd = Math.floor(o._rwdVal), n.rwdRate = 1 + c.DSnake.getSkinPropVal(o._snake._skin, 1) / 100;
                    l.default.setOverInfo(n), l.default.isMode(s.aw.Mode.Snake_Hole) ? h.default.instance.popOver_hole.setOpen(function(t) {
                        1 == t && (h.default.instance.ndGame.active = !1, h.default.instance.ndMapLv.active = !0, e && e())
                    }) : h.default.instance.popOver.setOpen(function(t) {
                        1 == t && (h.default.instance.ndGame.active = !1, h.default.instance.ndMenu.active = !0, e && e())
                    }), c.DDaily.addProg(s.aw.Daily.PlayTimes, 1)
                }, e.prototype.doBack = function() {
                    l.default._backFromGame = !0, l.default.isMode(s.aw.Mode.Snake_Hole) ? (h.default.instance.ndGame.active = !1, h.default.instance.ndMapLv.active = !0) : (h.default.instance.ndGame.active = !1, h.default.instance.ndMenu.active = !0)
                }, a([k(cc.Node)], e.prototype, "ndUIGame", void 0), a([k(cc.Node)], e.prototype, "ndGameRoot", void 0), a([k(cc.Node)], e.prototype, "ndBgMgr", void 0), a([k(cc.Node)], e.prototype, "ndFoodMgr", void 0), a([k(cc.Node)], e.prototype, "ndHoleMgr", void 0), a([k(cc.Node)], e.prototype, "ndSnakeMgr", void 0), a([k(cc.Node)], e.prototype, "ndInsectMgr", void 0), a([k(cc.Node)], e.prototype, "ndEffectMgr", void 0), a([S], e)
            }(cc.Component);
        o.default = b, cc._RF.pop()
    }, {
        "../UI/UIGame": "UIGame",
        "../UI/UIMgr": "UIMgr",
        "../datas/DConfig": "DConfig",
        "../datas/DRes": "DRes",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl",
        "../datas/Tools": "Tools",
        "./BgMgr": "BgMgr",
        "./FoodMgr": "FoodMgr",
        "./HoleMgr": "HoleMgr",
        "./InsectMgr": "InsectMgr",
        "./SnakeMgr": "SnakeMgr"
    }],
    GameRun: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "931d4Q8bN9FiIic5mPSBHSq", "GameRun"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = t("./DConfig"),
            i = t("./DRes"),
            a = function() {
                function t() {}

                return t.startGame = function(t, e) {
                    void 0 === e && (e = 0), this._mode = t, this._lv = e, this.reset()
                }, t.isMode = function(t) {
                    return this._mode == t
                }, t.getLv = function() {
                    return this._lv
                }, t.setBgIdx = function(t) {
                    this._bgIdx = t
                }, t.getBgIdx = function() {
                    return this._bgIdx
                }, t.reset = function() {
                    this._runState = n.aw.RunState.None, this._useItemIdx = -1, this._useItemCnt = 1, this._trialSkin = -1, this._isPause = !1, this._overInfo = null
                }, t.setRunState = function(t) {
                    this._runState = t
                }, t.setUseItem = function(t, e) {
                    this._useItemIdx = t, this._useItemCnt = e
                }, t.getItemTime = function(t, e) {
                    var o = [6, 6, 6, 10, 15, 1];
                    return this._useItemIdx == t && e ? o[t] * this._useItemCnt : o[t]
                }, t.getItemTime_CD = function(t) {
                    return [15, 15, 15, 15, 15, 15][t]
                }, t.setOverInfo = function(t) {
                    this._overInfo = t
                }, t.playBGM = function(t, e) {
                    if (void 0 === e && (e = !0), this._curBGM != t) {
                        this._curBGM = t;
                        var o = i.DRes.getMusic(t);
                        return cc.audioEngine.playMusic(o, e)
                    }
                    return -1
                }, t.stopBGM = function() {
                    this._curBGM = "", cc.audioEngine.stopMusic()
                }, t.pauseBGM = function() {
                    cc.audioEngine.pauseMusic()
                }, t.resumeBGM = function() {
                    cc.audioEngine.resumeMusic()
                }, t.playEFM = function(t, e) {
                    void 0 === e && (e = !1);
                    var o = i.DRes.getMusic(t);
                    return o ? cc.audioEngine.playEffect(o, e) : -1
                }, t.stopEFM = function(t) {
                    cc.audioEngine.stopEffect(t)
                }, t.stopEFM_all = function() {
                    cc.audioEngine.stopAllEffects()
                }, t.load_bundles = function() {
                    var t = this;
                    if (0 == this._bundlesLoadFlag) {
                        this._bundlesLoadFlag = 1, this._bundlesLoadProg = 0;
                        var e = [];
                        if (e.length <= 0) return this._bundlesLoadFlag = 2, void(this._bundlesLoadProg = 1);
                        for (var o = 0, n = [], i = function() {
                                for (var o = 0, i = 0; i < n.length; i++) o += n[i];
                                t._bundlesLoadProg = o / e.length
                            }, a = function(a) {
                                n.push(0), cc.assetManager.loadBundle(e[a], function(s, r) {
                                    s && console.log("loadBundle " + e[a] + "----err:" + s), r.loadDir("./", function(t, e) {
                                        n[a] = e > 0 ? t / e : 1, i()
                                    }, function(n) {
                                        n && console.log("loadBundle " + e[a] + "----loadDir err:" + n), (o += 1) >= e.length && (t._bundlesLoadFlag = 2, t._bundlesLoadProg = 1)
                                    })
                                })
                            }, s = 0; s < e.length; s++) a(s)
                    }
                }, t.isLoadOver_bundles = function() {
                    return 2 == this._bundlesLoadFlag
                }, t.getLoadProg_bundles = function() {
                    return this._bundlesLoadProg
                }, t.setConfig = function() {}, t.isMoreGameCtrl = function(t) {
                    return t < this._moreGameCtrls.length && this._moreGameCtrls[t]
                }, t.getMoreGameCnt = function() {
                    return t._moreGameList.length
                }, t.getMoreGameData = function(e) {
                    return t._moreGameList[e]
                }, t.isShowMoreGame = function() {
                    return !1
                }, t.isMistakeTouch = function() {
                    return !1
                }, t._mode = n.aw.Mode.Snake_Dragon, t._lv = 0, t._bgIdx = 0, t._runState = 0, t._useItemIdx = -1, t._useItemCnt = 0, t._trialSkin = -1, t._isPause = !1, t._overInfo = null, t._backFromGame = !1, t._playGameTimes = 0, t._curBGM = "", t._bundlesLoadFlag = 0, t._bundlesLoadProg = 0, t._mistakeFlag = 1, t._mistakeScenes = [], t._moreGameFlag = 3, t._moreGameCtrls = [!0, !0, !0, !0], t._moreGameStopScenes = [], t._moreGameList = [], t
            }();
        o.default = a, cc._RF.pop()
    }, {
        "./DConfig": "DConfig",
        "./DRes": "DRes"
    }],
    HoleMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1a394l4Aw5BxaooP2sK9n+v", "HoleMgr");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DRes"),
            c = t("../datas/GameRun"),
            l = t("../datas/Tools"),
            d = t("../objs/Hole"),
            u = t("../UI/UIMgr"),
            p = cc._decorator,
            h = p.ccclass,
            f = (p.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.gameCtrl = null, e._lvDat = [], e._holes = [], e
                }

                return i(e, t), e.prototype.initMgr = function(t) {
                    this.gameCtrl = t, this._holes = [], this.node.removeAllChildren();
                    var e = r.DRes.getJson(r.DRes.HoleLvs),
                        o = c.default.getLv(),
                        n = o < e.length ? o : e.length - 1;
                    this._lvDat = e[n];
                    var i = this._lvDat[r.DRes.HoleLvsData.Cnt],
                        a = this._lvDat[r.DRes.HoleLvsData.HpTotal],
                        s = this._lvDat[r.DRes.HoleLvsData.SplitTime];
                    o >= e.length && (a += 25 * (o - e.length + 1));
                    for (var d = this.gameCtrl._worldSize.div(2), u = l.default.randomRange(0, 360) * Math.PI / 180, p = i, h = 0; h < p; h++) {
                        var f = a;
                        if (i > 1) {
                            var _ = a / i;
                            f = Math.floor(_ / 2 + l.default.randomRange(0, _))
                        }
                        a -= f, i -= 1;
                        var v = d.clone();
                        if (p > 1) {
                            var y = Math.PI * h / p;
                            v = cc.v2(800, 0).rotate(u + y).add(d)
                        }
                        var g = this.addHole();
                        g.node.setPosition(v), g.init(!0, f, s)
                    }
                }, e.prototype.freeMgr = function() {
                    this._holes = [], this.node.removeAllChildren()
                }, e.prototype.updateMgr = function(t) {
                    for (var e = this.gameCtrl._worldSize, o = this._holes.length, n = 0, i = 0; i < o; i++) {
                        var a = this._holes[i];
                        a ? (a.update2(t, e), a.isOver() ? (a.node.removeFromParent(), this._holes[i] = null, n += 1) : (n > 0 && (this._holes[i - n] = a), a.isSplitReady() && (a.resetSplit(), this.doSplit(a)))) : n += 1
                    }
                    if (n > 0 && this._holes.splice(o - n, n), this._holes.length <= 0) c.default.setRunState(s.aw.RunState.Pass1);
                    else
                        for (o = this._holes.length, i = 0; i < o; i++)
                            for (var r = i + 1; r < o; r++) {
                                var d = this._holes[i],
                                    u = this._holes[r];
                                if (!d.isMain() || !u.isMain()) {
                                    var p = d.getRudius() + u.getRudius(),
                                        h = d.node.getPosition().sub(u.node.getPosition()),
                                        f = h.mag();
                                    if (!(f >= p)) {
                                        var _ = null;
                                        if (f < .1) {
                                            var v = l.default.randomRange(0, 360) * Math.PI / 180;
                                            _ = cc.v2(1, 0).rotate(v)
                                        } else _ = h.normalize();
                                        var y = _.mul((p + 4) / 2);
                                        if (d.isMain()) {
                                            var g = u._mv.mag();
                                            u.addMove(_.neg().mul(g)), u.node.setPosition(u.node.getPosition().sub(y))
                                        } else u.isMain() ? (g = d._mv.mag(), d.addMove(_.mul(g)), d.node.setPosition(d.node.getPosition().add(y))) : (g = .8 * (d._mv.mag() + u._mv.mag()), d.addMove(_.mul(g)), u.addMove(_.neg().mul(g)), d.node.setPosition(d.node.getPosition().add(y)), u.node.setPosition(u.node.getPosition().sub(y)))
                                    }
                                }
                            }
                }, e.prototype.addHole = function() {
                    var t = cc.instantiate(u.default.instance.ndBaseHole);
                    this.node.addChild(t, 100);
                    var e = t.getComponent(d.default);
                    return this._holes.push(e), e
                }, e.prototype.doSplit = function(t) {
                    for (var e = this._lvDat[r.DRes.HoleLvsData.SplitCnt], o = 0; o < e; o++) {
                        var n = t.getSplitHp(),
                            i = this.addHole();
                        i.init(!1, n, 0);
                        var a = l.default.randomRange(0, 360) * Math.PI / 180,
                            s = l.default.randomRange(15, 25),
                            d = cc.v2(s).rotate(a);
                        i.setMove(d);
                        var u = t.getRudius() + i.getRudius(),
                            p = d.normalize().mul((u + 4) / 2);
                        i.node.setPosition(t.node.getPosition().add(p))
                    }
                    c.default.playEFM("ef_snake_virus_spilt")
                }, e.prototype.checkAttacked = function(t) {
                    if (t.isPid_hero())
                        for (var e = 0; e < this._holes.length; e++) {
                            var o = this._holes[e];
                            if (o && o.canBeAttacked()) {
                                var n = t.checkAttackHole(o);
                                n && (o.doAttacked(), 0 == n.flag ? t.doDie() : (t.setScore(n.score), this.gameCtrl._camOffset ? this.gameCtrl._camOffset = this.gameCtrl._camOffset.add(n.op) : this.gameCtrl._camOffset = n.op))
                            }
                        }
                }, a([h], e)
            }(cc.Component));
        o.default = f, cc._RF.pop()
    }, {
        "../UI/UIMgr": "UIMgr",
        "../datas/DConfig": "DConfig",
        "../datas/DRes": "DRes",
        "../datas/GameRun": "GameRun",
        "../datas/Tools": "Tools",
        "../objs/Hole": "Hole"
    }],
    Hole: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "bd778jS40tHO6Als+GT9vuj", "Hole");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/GameRun"),
            c = t("../datas/Tools"),
            l = cc._decorator,
            d = l.ccclass,
            u = l.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndLife = null, e.armThron = null, e.armCore = null, e.lbHp = null, e.lbSplitTime = null, e.ndDie = null, e.armDie = null, e._main = !1, e._hp = 0, e._coreIdx = 0, e._splitTimer = 0, e._splitTimeMax = 0, e._state = 0, e._mv = null, e
                }

                return i(e, t), e.prototype.init = function(t, e, o) {
                    var n = this;
                    this._main = t, this.node.setScale(t ? 1 : .4), this._hp = e > 0 ? e : 0, this._coreIdx = Math.floor(this._hp / 10);
                    var i = (this._coreIdx > 9 ? "" : "0") + (this._coreIdx + 1);
                    this.armCore.playAnimation("stand" + i, 0);
                    var a = 0;
                    this._main && (a = c.default.randomRangeInt(1, 6)), a = 3, this.armThron.playAnimation("thron" + (a + 1), 0), this.lbHp.string = "" + this._hp, this._splitTimeMax = o, this._splitTimer = 0, this.lbSplitTime.node.active = this._splitTimeMax > 0, this.ndLife.active = !0, this.ndDie.active = !1, this.armCore.on(dragonBones.EventObject.COMPLETE, function() {
                        n.isState(s.aw.HoleState.Hurt) && n.setState(s.aw.HoleState.Stand)
                    }), this.armDie.once(dragonBones.EventObject.COMPLETE, function() {
                        n.isState(s.aw.HoleState.Die) && n.setState(s.aw.HoleState.Over)
                    }), this.setState(s.aw.HoleState.Stand)
                }, e.prototype.isMain = function() {
                    return this._main
                }, e.prototype.getMiniMapPointIndex = function() {
                    return this.isMain() ? s.aw.MiniMapPoint.Hole_Main : s.aw.MiniMapPoint.Hole
                }, e.prototype.isSplitReady = function() {
                    return this._splitTimeMax > 0 && this._splitTimer >= this._splitTimeMax
                }, e.prototype.resetSplit = function() {
                    this._splitTimer = 0
                }, e.prototype.getSplitHp = function() {
                    var t = Math.floor(.15 * this._hp) + 1,
                        e = Math.floor(.25 * this._hp) + 1;
                    return c.default.randomRangeInt(t, e)
                }, e.prototype.getRudius = function() {
                    return 120 * this.node.scaleX
                }, e.prototype.setMove = function(t) {
                    this._mv = t, this.setState(s.aw.HoleState.Move)
                }, e.prototype.addMove = function(t) {
                    this._mv = this._mv.add(t), this.setState(s.aw.HoleState.Move)
                }, e.prototype.updateMove = function(t) {
                    if (this._mv.lengthSqr() < 4) this._state = s.aw.HoleState.Stand;
                    else {
                        var e = this.node.getPosition().add(this._mv);
                        this._mv = this._mv.mul(.95);
                        var o = this.getRudius();
                        e.x < o ? (e.x = o + (o - e.x), this._mv.x = -this._mv.x) : e.x > t.x - o && (e.x = t.x - o + (t.x - o - e.x), this._mv.x = -this._mv.x), e.y < o ? (e.y = o + (o - e.y), this._mv.y = -this._mv.y) : e.y > t.y - o && (e.y = t.y - o + (t.y - o - e.y), this._mv.y = -this._mv.y), this.node.setPosition(e)
                    }
                }, e.prototype.update2 = function(t, e) {
                    if (this.isMove() && this.updateMove(e), this._splitTimeMax > 0) {
                        this._splitTimer += t;
                        var o = Math.floor(this._splitTimeMax - this._splitTimer),
                            n = Math.floor(o % 60),
                            i = Math.floor(o / 60);
                        this.lbSplitTime.string = (i > 9 ? "" : "0") + i + ":" + (n > 9 ? "" : "0") + n
                    }
                }, e.prototype.setState = function(t) {
                    this._state = t;
                    var e = this._coreIdx + 1,
                        o = "";
                    switch (this._state) {
                        case s.aw.HoleState.Stand:
                        case s.aw.HoleState.Move:
                            o = "stand" + (e > 9 ? "" : "0") + e, this.armCore.playAnimation(o, 0);
                            break;
                        case s.aw.HoleState.Hurt:
                            o = "hurt" + (e > 9 ? "" : "0") + e, this.armCore.playAnimation(o, 1), r.default.playEFM("ef_snake_virus_hit");
                            break;
                        case s.aw.HoleState.Die:
                            this.ndLife.active = !1, this.ndDie.active = !0, o = "die" + ((e = c.default.randomRangeInt(0, 4)) > 9 ? "" : "0") + e, this.armDie.playAnimation(o, 1), this.isMain() ? r.default.playEFM("ef_snake_virus_die1") : r.default.playEFM("ef_snake_virus_die0");
                            break;
                        case s.aw.HoleState.Over:
                            this.ndLife.active = !1, this.ndDie.active = !1;
                            break;
                        default:
                            return
                    }
                }, e.prototype.isState = function(t) {
                    return this._state == t
                }, e.prototype.isMove = function() {
                    return this._state == s.aw.HoleState.Move
                }, e.prototype.isDie = function() {
                    return this._state == s.aw.HoleState.Die
                }, e.prototype.isOver = function() {
                    return this._state == s.aw.HoleState.Over
                }, e.prototype.isLife = function() {
                    return !this.isDie() && !this.isOver()
                }, e.prototype.canBeAttacked = function() {
                    return this.isLife()
                }, e.prototype.doAttacked = function() {
                    if (this._hp > 1) {
                        this._hp -= 1, this.lbHp.string = "" + this._hp;
                        var t = this._coreIdx;
                        this._coreIdx = Math.floor(this._hp / 10), this._coreIdx < t && this.setState(s.aw.HoleState.Hurt)
                    } else this._hp = 0, this.setState(s.aw.HoleState.Die)
                }, a([u(cc.Node)], e.prototype, "ndLife", void 0), a([u(dragonBones.ArmatureDisplay)], e.prototype, "armThron", void 0), a([u(dragonBones.ArmatureDisplay)], e.prototype, "armCore", void 0), a([u(cc.Label)], e.prototype, "lbHp", void 0), a([u(cc.Label)], e.prototype, "lbSplitTime", void 0), a([u(cc.Node)], e.prototype, "ndDie", void 0), a([u(dragonBones.ArmatureDisplay)], e.prototype, "armDie", void 0), a([d], e)
            }(cc.Component);
        o.default = p, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/GameRun": "GameRun",
        "../datas/Tools": "Tools"
    }],
    InsectMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1753fg8g85AGadT/ifeuxNI", "InsectMgr");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/Tools"),
            r = t("../objs/Insect"),
            c = t("../UI/UIMgr"),
            l = cc._decorator,
            d = l.ccclass,
            u = (l.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.gameCtrl = null, e._beetles = [], e._spiders = [], e._addBeetleTimer = 0, e._addSpiderTimer = 0, e
                }

                return i(e, t), e.prototype.initMgr = function(t) {
                    this.gameCtrl = t, this.freeMgr();
                    for (var e = this.gameCtrl._worldSize, o = 0; o < 3; o++) {
                        var n = s.default.randomRange(0, e.x),
                            i = s.default.randomRange(0, e.y);
                        this.addBeetle(cc.v2(n, i))
                    }
                    for (o = 0; o < 1; o++) n = s.default.randomRange(0, e.x), i = s.default.randomRange(0, e.y), this.addSpider(cc.v2(n, i));
                    this._addBeetleTimer = 0, this._addSpiderTimer = 0
                }, e.prototype.freeMgr = function() {
                    this.node.removeAllChildren(), this._beetles = [], this._spiders = []
                }, e.prototype.updateMgr = function(t) {
                    var e = this.gameCtrl._worldSize,
                        o = this.gameCtrl._camShowSize.mul(2),
                        n = this.gameCtrl._camCenter.sub(o.div(2)),
                        i = n.add(o),
                        a = cc.Rect.fromMinMax(n, i);
                    if (this.updateInsect(t, this._beetles, e, a), this.updateInsect(t, this._spiders, e, a), this._beetles.length < 20) {
                        if (this._addBeetleTimer += t, this._addBeetleTimer >= 5) {
                            this._addBeetleTimer = 0;
                            var r = s.default.randomRange(0, e.x),
                                c = s.default.randomRange(0, e.y);
                            this.addBeetle(cc.v2(r, c))
                        }
                    } else this._addBeetleTimer = 0;
                    this._spiders.length < 3 ? (this._addSpiderTimer += t, this._addSpiderTimer >= 20 && (this._addSpiderTimer = 0, r = s.default.randomRange(0, e.x), c = s.default.randomRange(0, e.y), this.addSpider(cc.v2(r, c)))) : this._addSpiderTimer = 0
                }, e.prototype.updateInsect = function(t, e, o, n) {
                    for (var i = e.length, a = 0, s = 0; s < i; s++) {
                        var r = e[s];
                        if (r.update2(t, o), r.isOver()) r.node.removeFromParent(), e[s] = null, ++a;
                        else {
                            do {
                                if (!r.isLife()) break;
                                var c = r.node.getPosition();
                                if (n.contains(c)) break;
                                var l = c.x + Math.ceil((n.xMin - c.x) / n.width) * n.width,
                                    d = c.y + Math.ceil((n.yMin - c.y) / n.height) * n.height;
                                l < 50 && (l = l % n.width + n.width), l > o.x - 50 && (l = l % n.width + Math.floor(o.x / n.width) * n.width) > o.x && (l -= n.width), d < 50 && (d = d % n.height + n.height), d > o.y - 50 && (d = d % n.height + Math.floor(o.y / n.height) * n.height) > o.y && (d -= n.height), r.node.setPosition(cc.v2(l, d))
                            } while (0);
                            a > 0 && (e[s - a] = e[s], e[s] = null)
                        }
                    }
                    for (a > 0 && e.splice(i - a, a), s = 0; s < e.length; s++) e[s].isLife() && e[s].canBeAttacked() && this.checkColSnakes(e[s])
                }, e.prototype.addBeetle = function(t) {
                    var e = cc.instantiate(c.default.instance.ndBaseInsect_beetle);
                    this.node.addChild(e);
                    var o = e.getComponent(r.default);
                    this._beetles.push(o), o.setHp(1), e.setPosition(t)
                }, e.prototype.addSpider = function(t) {
                    var e = cc.instantiate(c.default.instance.ndBaseInsect_spider);
                    this.node.addChild(e);
                    var o = e.getComponent(r.default);
                    this._spiders.push(o), o.setHp(6), e.setPosition(t)
                }, e.prototype.checkColSnakes = function(t) {
                    for (var e = this.gameCtrl.snakeMgr._players, o = 0; o < e.length; o++)
                        if (e[o].isLife() && e[o].canAttack()) {
                            var n = e[o]._snake.checkAttackInsect(t);
                            n && 1 == n.flag && (t.doHurt(), t.isLife() ? (t._repelA = n.repelA, t.setState(r.InsectState.Repel, .2)) : 0 == t.getLootType() ? this.gameCtrl.foodMgr.createLoot_ess(t.node.getPosition()) : 1 == t.getLootType() && this.gameCtrl.foodMgr.createLoot_item(t.node.getPosition()))
                        }
                }, a([d], e)
            }(cc.Component));
        o.default = u, cc._RF.pop()
    }, {
        "../UI/UIMgr": "UIMgr",
        "../datas/Tools": "Tools",
        "../objs/Insect": "Insect"
    }],
    Insect_Beetle: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b8b19ExvDNL0IKyX+pEHBDT", "Insect_Beetle");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/GameRun"),
            r = t("../datas/Tools"),
            c = t("./Insect"),
            l = cc._decorator,
            d = l.ccclass,
            u = (l.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._flySpaceTime = 0, e
                }

                return i(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this);
                    var e = r.default.randomRange(3, 6);
                    this._index = r.default.randomRangeInt(0, 6), this.setState(c.InsectState.Fly, e)
                }, e.prototype.update2 = function(t, e) {
                    if (this.updateAngle(t), this._timer -= t, this._state == c.InsectState.Run) {
                        if (this.updateMove(e), this._flySpaceTime -= t, this._flySpaceTime <= 0) {
                            var o = r.default.randomRange(3, 6);
                            this.setState(c.InsectState.Run_Fly, o)
                        }
                    } else this._state == c.InsectState.Fly ? (this.updateMove(e), this._timer <= 0 && (o = r.default.randomRange(5, 10), this.setState(c.InsectState.Fly_Run, o))) : this._state == c.InsectState.Repel && (this.updateRepel(e), this._timer <= 0 && this.setState(c.InsectState.Run, 0))
                }, e.prototype.setState = function(e, o) {
                    var n = this;
                    t.prototype.setState.call(this, e, o);
                    var i = "" + (this._index + 1);
                    switch (e) {
                        case c.InsectState.Run:
                            this.armShow.playAnimation("run" + i, 0);
                            break;
                        case c.InsectState.Run_Fly:
                            this.armShow.playAnimation("run_fly" + i, 1), this.armShow.once(dragonBones.EventObject.COMPLETE, function() {
                                n.setState(c.InsectState.Fly, o)
                            }), s.default.playEFM("ef_jiachong_fly");
                            break;
                        case c.InsectState.Fly:
                            this.armShow.playAnimation("fly" + i, 0), this.setMV(6);
                            break;
                        case c.InsectState.Fly_Run:
                            this.armShow.playAnimation("fly_run" + i, 1), this.armShow.once(dragonBones.EventObject.COMPLETE, function() {
                                n.setState(c.InsectState.Run, 0), n._flySpaceTime = r.default.randomRange(5, 10)
                            }), this.setMV(2);
                            break;
                        case c.InsectState.Repel:
                            break;
                        case c.InsectState.Die:
                            this.armShow.playAnimation("die" + i, 1), this.armShow.once(dragonBones.EventObject.COMPLETE, function() {
                                n.setState(c.InsectState.Over, 0)
                            }), s.default.playEFM("ef_jiachong_die");
                            break;
                        case c.InsectState.Over:
                    }
                }, e.prototype.getRadius = function() {
                    return 30 * this.node.scaleX
                }, e.prototype.getLootType = function() {
                    return 0
                }, a([d], e)
            }(c.default));
        o.default = u, cc._RF.pop()
    }, {
        "../datas/GameRun": "GameRun",
        "../datas/Tools": "Tools",
        "./Insect": "Insect"
    }],
    Insect_Spider: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "5d143XqndhPnY8mO0AEr7yH", "Insect_Spider");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/GameRun"),
            r = t("../datas/Tools"),
            c = t("./Insect"),
            l = cc._decorator,
            d = l.ccclass,
            u = (l.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return i(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.setState(c.InsectState.Run, 0), this._index = 1
                }, e.prototype.update2 = function(t, e) {
                    this.updateAngle(t), this._timer -= t, this._state == c.InsectState.Run ? this.updateMove(e) : this._state == c.InsectState.Repel && (this.updateRepel(e), this._timer <= 0 && this.setState(c.InsectState.Run, 0))
                }, e.prototype.updateAngle = function(t) {
                    this.node.angle = r.default.adjustAngle(this.node.angle + this._mAA, !1), this._mAAT -= t, this._mAAT <= 0 && (this._mAAT = r.default.randomRange(2, 4), this._mAA = r.default.randomRange(-1, 1))
                }, e.prototype.setState = function(e, o) {
                    var n = this;
                    switch (t.prototype.setState.call(this, e, o), this._state) {
                        case c.InsectState.Run:
                            this.armShow.playAnimation("run", 0), this.setMV(1.5);
                            break;
                        case c.InsectState.Repel:
                            break;
                        case c.InsectState.Die:
                            this.armShow.playAnimation("die", 1), this.armShow.once(dragonBones.EventObject.COMPLETE, function() {
                                n.setState(c.InsectState.Over, 0)
                            }), s.default.playEFM("ef_zhizhu_die")
                    }
                }, e.prototype.getRadius = function() {
                    return 50 * this.node.scaleX
                }, e.prototype.getLootType = function() {
                    return 1
                }, a([d], e)
            }(c.default));
        o.default = u, cc._RF.pop()
    }, {
        "../datas/GameRun": "GameRun",
        "../datas/Tools": "Tools",
        "./Insect": "Insect"
    }],
    Insect: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b52354AXj9M1IUBRpI0x/jC", "Insect");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.InsectState = void 0;
        var s, r = t("../datas/Tools");
        (function(t) {
            t[t.Run = 0] = "Run", t[t.Run_Fly = 1] = "Run_Fly", t[t.Fly = 2] = "Fly", t[t.Fly_Run = 3] = "Fly_Run", t[t.Repel = 4] = "Repel", t[t.Die = 5] = "Die", t[t.Over = 6] = "Over"
        })(s = o.InsectState || (o.InsectState = {}));
        var c = cc._decorator,
            l = c.ccclass,
            d = c.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.armShow = null, e._index = 0, e._hp = 0, e._mAA = 0, e._mAAT = 0, e._repelA = 0, e._state = 0, e._timer = 0, e._mV = 2, e
                }

                return i(e, t), e.prototype.onLoad = function() {
                    this._hp = 1
                }, e.prototype.setIndex = function(t) {
                    this._index = t
                }, e.prototype.setState = function(t, e) {
                    this._state = t, this._timer = e
                }, e.prototype.update2 = function() {}, e.prototype.updateAngle = function(t) {
                    this.node.angle = r.default.adjustAngle(this.node.angle + this._mAA, !1), this._mAAT -= t, this._mAAT <= 0 && (this._mAAT = r.default.randomRange(2, 5), this._mAA = r.default.randomRange(-2, 2))
                }, e.prototype.updateMove = function(t) {
                    var e = r.default.adjustAngle(this.node.angle, !1),
                        o = e * Math.PI / 180,
                        n = cc.v2(this._mV, 0).rotate(o),
                        i = this.node.getPosition().add(n),
                        a = e,
                        s = this.getRadius();
                    i.x < s ? (i.x = 2 * s - i.x, a > 90 && a < 270 && (a = r.default.adjustAngle(180 - a, !1))) : i.x > t.x - s && (i.x = 2 * (t.x - s) - i.x, (a < 90 || a > 270) && (a = r.default.adjustAngle(180 - a, !1))), i.y < s ? (i.y = 2 * s - i.y, a > 180 && a < 360 && (a = 360 - a)) : i.y > t.y - s && (i.y = 2 * (t.y - s) - i.y, a > 0 && a < 180 && (a = 360 - a)), this.node.angle = a, this.node.setPosition(i)
                }, e.prototype.updateRepel = function(t) {
                    var e = cc.v2(10, 0).rotate(this._repelA),
                        o = this.node.getPosition().add(e),
                        n = this.getRadius();
                    o.x < n ? o.x = n : o.x > t.x - n && (o.x = t.x - n), o.y < n ? o.y = n : o.y > t.y - n && (o.y = t.y - n), this.node.setPosition(o)
                }, e.prototype.getRadius = function() {
                    return 30 * this.node.scaleX
                }, e.prototype.isLife = function() {
                    return this._state != s.Die && this._state != s.Over
                }, e.prototype.isOver = function() {
                    return this._state == s.Over
                }, e.prototype.getLootType = function() {
                    return 0
                }, e.prototype.canBeAttacked = function() {
                    return this._state == s.Run
                }, e.prototype.doHurt = function() {
                    this._hp -= 1, this._hp <= 0 ? (this.armShow.node.color = cc.Color.WHITE, this.setState(s.Die, 0)) : cc.tween(this.armShow.node).to(.1, {
                        color: cc.Color.RED
                    }).to(.1, {
                        color: cc.Color.WHITE
                    }).start()
                }, e.prototype.setHp = function(t) {
                    this._hp = t > 0 ? t : 0
                }, e.prototype.setMV = function(t) {
                    this._mV = t
                }, a([d(dragonBones.ArmatureDisplay)], e.prototype, "armShow", void 0), a([l], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "../datas/Tools": "Tools"
    }],
    KillShow: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "eb7d5V4JUJHH79Tc2aLSywW", "KillShow");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DRes"),
            r = cc._decorator,
            c = r.ccclass,
            l = r.property,
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.spHead1 = null, e.lbName1 = null, e.spHead2 = null, e.lbName2 = null, e
                }

                return i(e, t), e.prototype.setShow = function(t, e, o, n) {
                    var i = this;
                    this.spHead1.spriteFrame = s.DRes.getImage_killHead(e), this.lbName1.string = t, this.spHead2.spriteFrame = s.DRes.getImage_killHead(n), this.lbName2.string = o;
                    var a = this.getComponent(cc.Animation);
                    a.play(), a.once(cc.Animation.EventType.FINISHED, function() {
                        i.node.removeFromParent()
                    })
                }, a([l(cc.Sprite)], e.prototype, "spHead1", void 0), a([l(cc.Label)], e.prototype, "lbName1", void 0), a([l(cc.Sprite)], e.prototype, "spHead2", void 0), a([l(cc.Label)], e.prototype, "lbName2", void 0), a([c], e)
            }(cc.Component);
        o.default = d, cc._RF.pop()
    }, {
        "../datas/DRes": "DRes"
    }],
    LuckyItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "62fbcmtwwhIuaezw1i4t9wq", "LuckyItem");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/GameRun"),
            r = t("../datas/SdkCtrl"),
            c = t("../datas/Tools"),
            l = cc._decorator,
            d = l.ccclass,
            u = l.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndIconArea = null, e.ndIcons = [], e.ndInfo = null, e.lbName = null, e.lbDeco = null, e.ndBtnFree = null, e.ndBtnAd = null, e._index = 0, e._count = 0, e._clickCB = null, e._state = 0, e._iconY = 0, e._iconY_dst = 0, e._iconVy = 0, e
                }

                var o;
                return i(e, t), o = e, e.prototype.onLoad = function() {
                    for (var t = 0; t < this.ndIcons.length; t++) this.ndIcons[t].setPosition(0, 160 * -t)
                }, e.prototype.update = function() {
                    if (1 == this._state) {
                        this._iconY < this._iconY_dst - 150 ? (this._iconVy += 3, this._iconVy = c.default.getRange(this._iconVy, 0, 30)) : this._iconY < this._iconY_dst && (this._iconVy -= 3, this._iconVy = c.default.getRange(this._iconVy, 3, 30));
                        var t = this._iconY + this._iconVy;
                        t >= this._iconY_dst && (t = this._iconY_dst, this._iconVy = 0, this._state = 2), this.setIconY(t)
                    }
                }, e.prototype.setClickCB = function(t) {
                    this._clickCB = t
                }, e.prototype.setInit = function(t, e) {
                    this._index = t, this._count = e, this.setIconY(this._index * o.Icon_DH), this._state = 0, this.setShowInfo(!1)
                }, e.prototype.doStart = function(t, e) {
                    var n = this.ndIcons.length * o.Icon_DH,
                        i = this._iconY % n;
                    i = i < 0 ? i + n : i, this.setIconY(i), this._index = t, this._iconY_dst = this._index * o.Icon_DH, this._iconY_dst += e * n, this._state = 1, this._iconVy = 0, this.setShowInfo(!1)
                }, e.prototype.setIconY = function(t) {
                    this._iconY = t;
                    for (var e = this.ndIcons.length, n = e * o.Icon_DH, i = (e - 1) * o.Icon_DH / 2, a = 0; a < e; a++) {
                        var s = this._iconY - a * o.Icon_DH;
                        (s %= n) > i ? s -= n : s < -i && (s += n), this.ndIcons[a].setPosition(0, s)
                    }
                }, e.prototype.setShowInfo = function(t) {
                    if (this.ndInfo.active = t, t) {
                        var e = [
                            ["\u65e0\u654c\u62a4\u76fe", "\u83b7\u5f97\u65e0\u654c\u6548\u679c", "\u83b7\u5f97\u65e0\u654c\u6548\u679c(\u6301\u7eed\u65f6\u95f4x3)"],
                            ["\u6210\u957f\u836f\u6c34", "\u86c7\u86c7\u6210\u957f\u52a0\u500d", "\u86c7\u86c7\u6210\u957f\u52a0\u500d(\u6301\u7eed\u65f6\u95f4x3)"],
                            ["\u8679\u5438\u78c1\u94c1", "\u6269\u5927\u5438\u98df\u8303\u56f4", "\u6269\u5927\u5438\u98df\u8303\u56f4(\u6301\u7eed\u65f6\u95f4x3)"],
                            ["\u91d1\u5e01\u7ffb\u500d", "\u83b7\u5f97\u6536\u76ca\u7ffb\u500d", "\u83b7\u5f97\u6536\u76ca\u7ffb\u500d(\u6301\u7eed\u65f6\u95f4x3)"],
                            ["\u52a0\u901f\u978b\u5b50", "\u52a0\u901f\u6548\u679c\u63d0\u5347", "\u52a0\u901f\u6548\u679c\u63d0\u5347(\u6301\u7eed\u65f6\u95f4x3)"],
                            ["\u4fdd\u547d\u5934\u76d4", "\u62b5\u5fa11\u6b21\u6b7b\u4ea1", "\u62b5\u5fa13\u6b21\u6b7b\u4ea1"]
                        ];
                        this.lbName.string = e[this._index][0], this._count > 1 ? this.lbDeco.string = e[this._index][2] : this.lbDeco.string = e[this._index][1], this.ndBtnAd.active = !0, this.ndBtnFree.active = !1
                    }
                    for (var o = 0; o < this.ndIcons.length; o++) this.ndIcons[o].active = o == this._index || !t
                }, e.prototype.isRunOver = function() {
                    return 2 == this._state
                }, e.prototype.getIconCnt = function() {
                    return this.ndIcons.length
                }, e.prototype.onClick_free = function() {
                    this._clickCB && this._clickCB(this._index, this._count), s.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_ad = function() {
                    var t = this;
                    r.default.sendEvent("\u5f00\u5c40buff-\u5e7f\u544a\u70b9\u51fb", {}), r.default.playAds_reward(0, function(e) {
                        0 == e && (r.default.sendEvent("\u5f00\u5c40buff-\u5e7f\u544a\u5b8c\u6210", {}), t._clickCB && t._clickCB(t._index, t._count))
                    }), s.default.playEFM("ef_ui_button")
                }, e.Icon_DH = 160, a([u(cc.Node)], e.prototype, "ndIconArea", void 0), a([u([cc.Node])], e.prototype, "ndIcons", void 0), a([u(cc.Node)], e.prototype, "ndInfo", void 0), a([u(cc.Label)], e.prototype, "lbName", void 0), a([u(cc.Label)], e.prototype, "lbDeco", void 0), a([u(cc.Node)], e.prototype, "ndBtnFree", void 0), a([u(cc.Node)], e.prototype, "ndBtnAd", void 0), o = a([d], e)
            }(cc.Component);
        o.default = p, cc._RF.pop()
    }, {
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl",
        "../datas/Tools": "Tools"
    }],
    MapLv: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2bf30xAZ/lPSrYASYKvhWcG", "MapLv");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DSave"),
            r = t("../datas/GameRun"),
            c = cc._decorator,
            l = c.ccclass,
            d = c.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.btnLv = null, e.ndLocked = null, e.ndNormal = null, e.ndSelected = null, e.lbLv = null, e._lvIdx = 0, e._clickCB = null, e
                }

                return i(e, t), e.prototype.setShow = function(t, e) {
                    this._lvIdx = t, this._clickCB = e, this.lbLv.string = "" + (this._lvIdx + 1), this.refreshShow()
                }, e.prototype.refreshShow = function() {
                    var t = s.DSnake.getHoleLvPassed();
                    this.ndLocked.active = this._lvIdx > t, this.ndNormal.active = this._lvIdx <= t, this.ndSelected.active = !1, this.btnLv.interactable = !this.isLocked()
                }, e.prototype.isLocked = function() {
                    return this.ndLocked.active
                }, e.prototype.isSelected = function() {
                    return this.ndSelected.active
                }, e.prototype.setSelected = function(t) {
                    this.ndSelected.active = t, this.ndNormal.active = !t
                }, e.prototype.onClick_lv = function() {
                    this._clickCB && this._clickCB(this._lvIdx), r.default.playEFM("ef_ui_button")
                }, a([d(cc.Button)], e.prototype, "btnLv", void 0), a([d(cc.Node)], e.prototype, "ndLocked", void 0), a([d(cc.Node)], e.prototype, "ndNormal", void 0), a([d(cc.Node)], e.prototype, "ndSelected", void 0), a([d(cc.Label)], e.prototype, "lbLv", void 0), a([l], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun"
    }],
    MineCarBody: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "468dfJ2rzhApI9h1jJ0CGfX", "MineCarBody");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = cc._decorator,
            r = s.ccclass,
            c = s.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.armShow = null, e._state = 0, e
                }

                return i(e, t), e.prototype.onLoad = function() {
                    this._state = 0, this.armShow.playAnimation("ani1", 0)
                }, e.prototype.setState = function(t) {
                    var e = this;
                    if (this._state != t) {
                        var o = this._state;
                        if (this._state = t, 0 == t) {
                            if (1 == o) return this.setState(2), !0;
                            this.armShow.playAnimation("ani1", 0)
                        } else 1 == t ? this.armShow.playAnimation("ani2", 0) : 2 == t && (this.armShow.playAnimation("ani3", 1), this.armShow.once(dragonBones.EventObject.COMPLETE, function() {
                            e.setState(0)
                        }));
                        return !1
                    }
                }, a([c(dragonBones.ArmatureDisplay)], e.prototype, "armShow", void 0), a([r], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    MineCarHead: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f03153pxVlH1bH6yPo2tdsg", "MineCarHead");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = cc._decorator,
            r = s.ccclass,
            c = s.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.armShow = null, e
                }

                return i(e, t), e.prototype.onEnable = function() {
                    this.armShow.playAnimation("skin10_h", 0)
                }, a([c(dragonBones.ArmatureDisplay)], e.prototype, "armShow", void 0), a([r], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    MiniMapPoint: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "aac2bAQc7pJxqNGuPb0jlJT", "MiniMapPoint");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = cc._decorator,
            r = s.ccclass,
            c = s.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndShows = [], e
                }

                return i(e, t), e.prototype.setShow = function(t) {
                    for (var e = 0; e < this.ndShows.length; e++) this.ndShows[e].active = t == e
                }, a([c([cc.Node])], e.prototype, "ndShows", void 0), a([r], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    NavigateIcon: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "9d86c9mcEtKxZejQ/pLGPQK", "NavigateIcon");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DRes"),
            r = t("../datas/GameRun"),
            c = cc._decorator,
            l = c.ccclass,
            d = c.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.spIcon = null, e._index = 0, e._timer = 0, e._clickCB = null, e
                }

                return i(e, t), e.prototype.update = function(t) {
                    this._timer += t, this._timer > 2 && (this._timer = -3, cc.tween(this.node).to(.1, {
                        angle: 10
                    }).to(.2, {
                        angle: -10
                    }).to(.2, {
                        angle: 10
                    }).to(.2, {
                        angle: -10
                    }).to(.2, {
                        angle: 10
                    }).to(.1, {
                        angle: 0
                    }).start())
                }, e.prototype.setIndex = function(t, e) {
                    var o = this;
                    void 0 === e && (e = !0), this._index = t, this._timer = 0;
                    var n, i = r.default.getMoreGameData(this._index);
                    n = i.local && 1 == i.local ? s.DRes.getImage(i.game_icon) : i.sfIcon, e ? cc.tween(this.node).to(.2, {
                        scale: 0
                    }).call(function() {
                        o.spIcon.spriteFrame = n
                    }).to(.2, {
                        scale: 1
                    }).start() : (this.spIcon.spriteFrame = n, this.node.setScale(1))
                }, e.prototype.setClickCB = function(t) {
                    this._clickCB = t
                }, e.prototype.onClick = function() {
                    this._clickCB && this._clickCB(this._index)
                }, a([d(cc.Sprite)], e.prototype, "spIcon", void 0), a([l], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "../datas/DRes": "DRes",
        "../datas/GameRun": "GameRun"
    }],
    NavigateItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "24e09CtFhNKDYxOfFm2tspM", "NavigateItem");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DRes"),
            r = t("../datas/GameRun"),
            c = cc._decorator,
            l = c.ccclass,
            d = c.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.spIcon = null, e.lbName = null, e._touchArea = null, e._index = 0, e
                }

                return i(e, t), e.prototype.onLoad = function() {
                    var t = this.node.getContentSize();
                    this._touchArea = new cc.Rect(-t.width / 2, -t.height / 2, t.width, t.height)
                }, e.prototype.setIndex = function(t) {
                    this._index = t;
                    var e = r.default.getMoreGameData(this._index);
                    e.local && 1 == e.local ? this.spIcon.spriteFrame = s.DRes.getImage(e.game_icon) : this.spIcon.spriteFrame = e.sfIcon, this.lbName.string = e.game_name
                }, e.prototype.getIndex = function() {
                    return this._index
                }, e.prototype.isTouched = function(t) {
                    var e = this.node.convertToNodeSpaceAR(t);
                    return this._touchArea.contains(e)
                }, a([d(cc.Sprite)], e.prototype, "spIcon", void 0), a([d(cc.Label)], e.prototype, "lbName", void 0), a([l], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "../datas/DRes": "DRes",
        "../datas/GameRun": "GameRun"
    }],
    OnlineRwdItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "5462cdDFy1EXpOAdIlez8uW", "OnlineRwdItem");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/GameRun"),
            r = cc._decorator,
            c = r.ccclass,
            l = r.property,
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndUnlock = null, e.ndLocked = null, e.btnGet = null, e.ndGot = null, e._index = 0, e._clickCB = null, e._state = 0, e
                }

                return i(e, t), e.prototype.setInfo = function(t, e) {
                    this._index = t, this._clickCB = e
                }, e.prototype.setState = function(t) {
                    this._state = t, this.ndUnlock.active = 1 == t || 2 == t, this.ndLocked.active = 0 == t, this.btnGet.node.active = 0 == t || 1 == t, this.btnGet.interactable = 1 == t, this.ndGot.active = 2 == t
                }, e.prototype.isState = function() {
                    return this._state
                }, e.prototype.onClick_get = function() {
                    this._clickCB && this._clickCB(this._index), s.default.playEFM("ef_ui_claim")
                }, a([l(cc.Node)], e.prototype, "ndUnlock", void 0), a([l(cc.Node)], e.prototype, "ndLocked", void 0), a([l(cc.Button)], e.prototype, "btnGet", void 0), a([l(cc.Node)], e.prototype, "ndGot", void 0), a([c], e)
            }(cc.Component);
        o.default = d, cc._RF.pop()
    }, {
        "../datas/GameRun": "GameRun"
    }],
    PlayerSnake: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b0a86aTWwtIyYopHSWU/btG", "PlayerSnake");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DRes"),
            c = t("../datas/DSave"),
            l = t("../datas/GameRun"),
            d = t("../datas/Tools"),
            u = t("./Player"),
            p = t("./Snake"),
            h = s.aw.SnakeTimer,
            f = s.aw.SnakeState,
            _ = cc._decorator,
            v = _.ccclass,
            y = _.property,
            g = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndGrow = null, e.ndMagnet = null, e.ndInvi = null, e.ndSkill = null, e.armSkill = null, e.lbName = null, e._snake = null, e._nameidx = 0, e._angleDst = 0, e._skillAttacks = [], e
                }

                return i(e, t), e.prototype.onLoad = function() {
                    this._snake = this.getComponent(p.default)
                }, e.prototype.init = function(t, e, o, n, i) {
                    this.initPlayer(t, e, h.COUNT), this._snake.setSkin(o), this._snake.setLenLimit(4, 500), this.doBorn(i, n);
                    var a = this._snake.getScore_len(this._snake._lenDst);
                    this.setScore(a), this._skillAttacks = []
                }, e.prototype.setSnakeLenMax = function(t) {
                    var e = this._snake._lenMin,
                        o = e + t;
                    if (this._snake.setLenLimit(e, o), this._snake._lenDst > o) {
                        var n = this._snake.getScore_len(o);
                        this.setScore(n)
                    }
                }, e.prototype.setNameIdx = function(t) {
                    this._nameidx = t, this.lbName.string = r.DRes.getJson_nameSnake(t)
                }, e.prototype.getName = function() {
                    return this.lbName.string
                }, e.prototype.setAngleDst = function(t, e) {
                    void 0 === e && (e = !0), this._angleDst = d.default.adjustAngle(t, !1), e || this._snake.setAngle(this._angleDst)
                }, e.prototype.updateAngle = function() {
                    var t = this._angleDst - this._snake._angle,
                        e = t > 0 ? t : -t,
                        o = e > 180 ? 360 - e : e;
                    if (o <= 1) return this._snake._angle;
                    var n = this._angleDst;
                    return o > 10 && (n = e < 180 && t > 0 || e > 180 && t < 0 ? d.default.adjustAngle(this._snake._angle + 10, !1) : d.default.adjustAngle(this._snake._angle - 10, !1)), n
                }, e.prototype.updateSnakePlayer = function(t, e, o, n) {
                    switch (this.updatePlayer(t), this.updateEffect(), this._state) {
                        case f.Move:
                            break;
                        case f.Dead:
                            return 100;
                        case f.Over:
                            return this.isStateTimerOver() ? 201 : 200
                    }
                    var i = this.updateAngle(),
                        a = 5;
                    this._snake.isSkin_dragon() && (a = 7), this.isPid_hero() && (a *= 1 + c.DSnake.getSkinPropVal(this._snake._skin, 2) / 100);
                    var r = cc.v2(a, 0).rotate(i * Math.PI / 180),
                        l = this.getPos_neck().add(r);
                    if (l.x = d.default.getRange(l.x, 0, e.x), l.y = d.default.getRange(l.y, 0, e.y), this._snake.moveBodys(l, i), this.isTimeOver(h.Blust) || ((l = l.add(r)).x = d.default.getRange(l.x, 0, e.x), l.y = d.default.getRange(l.y, 0, e.y), this._snake.moveBodys(l, i), this.getBuff(s.aw.Item.Speed) >= 0 && ((l = l.add(r)).x = d.default.getRange(l.x, 0, e.x), l.y = d.default.getRange(l.y, 0, e.y), this._snake.moveBodys(l, i))), this._snake.setLenDst_score(this._score), this.getBuff(s.aw.Item.Invi) < 0 && !this.checkCollision_border(e)) return this.setState(f.Dead, 0), 100;
                    if (!this.isPid_hero() && (this.checkChangeAngle_AI(o, n), this.checkWarning_border_AI(e, 200), this.isTimeOver(h.Score_AI))) {
                        this.resetTimer(h.Score_AI, 2);
                        var u = d.default.randomRangeInt(200, 300);
                        this.addScore(u * this.getScoreRate_food())
                    }
                    return 0
                }, e.prototype.updateEffect = function() {
                    this.ndInvi.active = this.getBuff(s.aw.Item.Invi) >= 0, this.ndGrow.active = this.getBuff(s.aw.Item.Grow) >= 0, this.ndMagnet.active = this.getBuff(s.aw.Item.Magnet) >= 0;
                    var t = this.getPos_head(),
                        e = this._snake.getScale(),
                        o = this._snake._angle;
                    if (this.ndGrow.active && (this.ndGrow.setPosition(t), this.ndGrow.setScale(e), this.ndGrow.angle = o - 90), this.ndMagnet.active && (this.ndMagnet.setPosition(t), this.ndMagnet.setScale(e), this.ndMagnet.angle = o - 90), this.ndInvi.active) {
                        var n = this._snake._forceArea,
                            i = cc.v2(n.size.width, n.size.height).mag() + 10;
                        this.ndInvi.setPosition(n.center), this.ndInvi.setScale(i / 168)
                    }
                    this.ndSkill && this.ndSkill.active && (this.ndSkill.setPosition(this._snake.getPos_neck()), this.ndSkill.setScale(1.75 * e));
                    var a = cc.v2(0, 150).mul(e);
                    if (this.lbName.node.setPosition(t.add(a)), l.default.isMode(s.aw.Mode.Snake_Hole)) {
                        var r = this._snake._lenDst - this._snake._lenMin,
                            c = r / (this._snake._lenMax - this._snake._lenMin);
                        this.lbName.string = "" + r;
                        var d = null;
                        if (c < 0) d = new cc.Color(0, 255, 0, 255);
                        else if (c < .25) {
                            var u = (.25 - c) / .25;
                            d = new cc.Color(0, 127 * (1 + u), 127 * (1 - u), 255)
                        } else c < .5 ? (u = (.5 - c) / .25, d = new cc.Color(0, 127 * u, 127 * (2 - u), 255)) : c < .75 ? (u = (.75 - c) / .25, d = new cc.Color(127 * (1 - u), 0, 127 * (1 + u), 255)) : c < 1 ? (u = (1 - c) / .25, d = new cc.Color(127 * (2 - u), 0, 127 * u, 255)) : d = new cc.Color(255, 0, 0, 255);
                        this.lbName.node.color = d
                    } else this.lbName.node.color = cc.Color.WHITE
                }, e.prototype.doBorn = function(t, e) {
                    void 0 === e && (e = 0), this.node.active = !0, this.setState(f.Move, 0), this.clearTimers(), this._snake.initBodys(t, e), this.setAngleDst(d.default.randomRange(0, 360), !1);
                    var o = d.default.randomRange(10, 50);
                    if (this.resetTimer(h.Born, 3), this.resetTimer(h.Skill_CD, 1), this.resetTimer(h.Blust_CD, o), this.clearAllBuff(), this.isPid_hero()) {
                        var n = c.DBase.getItem(s.aw.Item.AvoidDeath);
                        n > 0 && this.addBuff(s.aw.Item.AvoidDeath, n)
                    }
                    this.addBuff(s.aw.Item.Invi, 3), this.ndGrow.active = !1, this.ndMagnet.active = !1, this.ndInvi.active = !1, this.ndSkill.active = !1
                }, e.prototype.doRevive = function() {
                    this.setState(f.Move, 0), this.clearTimers(), this.resetTimer(h.Born, 3), this.resetTimer(h.Skill_CD, 1);
                    for (var t = 0, e = this._buffInfo.length, o = 0; o < e; o++) this._buffInfo[o].idx != s.aw.Item.AvoidDeath ? (this._buffInfo[o] = null, ++t) : t > 0 && (this._buffInfo[o - t] = this._buffInfo[o], this._buffInfo[o] = null);
                    t > 0 && this._buffInfo.splice(e - t, t), this.addBuff(s.aw.Item.Invi, 3)
                }, e.prototype.doRevive_AI = function(t, e) {
                    var o = 0;
                    if (this._snake.isSkin_boss()) {
                        var n = d.default.randomRange(0, 1e4),
                            i = this._score * d.default.randomRange(.2, .5),
                            a = e * d.default.randomRange(.2, .6);
                        o = a > (o = n > i ? n : i) ? a : o
                    } else o = e * d.default.randomRange(.1, .4);
                    o = Math.ceil(o), this._snake.initBodys(t, o), this.doBorn(t, o)
                }, e.prototype.doDie = function() {
                    if (!this.isPid_hero()) {
                        this.node.active = !1;
                        var t = d.default.randomRange(3, 7);
                        return this.setState(f.Over, t), this._snake.doDie()
                    }
                    return this.useBuffAvoidDeath() ? this.doRevive() : l.default.setRunState(s.aw.RunState.Revive1), null
                }, e.prototype.doBlust = function() {
                    var t = this._snake.getScore_body(this._snake._lenDst),
                        e = Math.ceil(.02 * t);
                    this._score > 500 + e && (this._score -= e, this.resetTimer(h.Blust, .5))
                }, e.prototype.checkCollision_border = function(t) {
                    var e = this._snake.checkCollision_border(t);
                    return 0 == e.x && 0 == e.y
                }, e.prototype.checkWarning_border_AI = function(t, e) {
                    if (!this.isTimeOver(h.Border_warning)) return !1;
                    var o = [0, 0],
                        n = this._snake.checkWarning_border(t, e);
                    if (n.x < 0) o = n.y < 0 ? [0, 90] : n.y > 0 ? [270, 360] : [270, 450];
                    else if (n.x > 0) o = n.y < 0 ? [90, 180] : n.y > 0 ? [180, 270] : [90, 270];
                    else if (n.y < 0) o = [0, 180];
                    else {
                        if (!(n.y > 0)) return !1;
                        o = [180, 360]
                    }
                    var i = this._angleDst - o[0];
                    if (i < 0 && (i += 360), i < o[1] - o[0]) return !1;
                    var a = d.default.randomRange(o[0], o[1]);
                    this.setAngleDst(a, !0), this.resetTimer(h.Angle_change, 1);
                    var s = d.default.randomRange(.5, 1);
                    return this.resetTimer(h.Border_warning, s), !0
                }, e.prototype.checkCollision_snake = function(t) {
                    var e = this._snake.checkCollision_snake(t._snake);
                    return 2 == e ? this.getBuff(s.aw.Item.Invi) >= 0 || this._snake._lenDst > t._snake._lenDst ? 1 : t.getBuff(s.aw.Item.Invi) >= 0 || this._snake._lenDst < t._snake._lenDst ? 2 : 3 : e
                }, e.prototype.checkWarning_snake_AI = function(t, e) {
                    if (!this.isTimeOver(h.Angle_warning) && this.getCurTime(h.Angle_warning) > 0) return !1;
                    var o = .5;
                    t._snake.isSkin_dragon() ? (e += 100, o = .2) : (t._snake.isSkin_Eagle() || t._snake.isSkin_Turtle()) && (e += 50, o = .2);
                    var n = this._snake.checkWarning_snake(t._snake, e);
                    return 0 != n.f && (this.setAngleDst(n.a, !0), this.resetTimer(h.Angle_warning, o), this.resetTimer(h.Angle_change, 1), !0)
                }, e.prototype.checkChangeAngle_AI = function(t, e) {
                    if (!this.isTimeOver(h.Angle_change)) return !1;
                    var o = t.sub(this._snake.getPos_head()),
                        n = d.default.randomRange(0, 360);
                    o.magSqr() > e * e && (n = 180 * Math.atan2(o.y, o.x) / Math.PI, n += d.default.randomRange(-40, 40)), this.setAngleDst(n, !0);
                    var i = d.default.randomRange(1, 2.5);
                    return this.resetTimer(h.Angle_change, i), !0
                }, e.prototype.checkAttackHole = function(t) {
                    return this.getBuff(s.aw.Item.Invi) >= 0 ? null : this._snake.checkAttackHole(t)
                }, e.prototype.getPos_head = function() {
                    return this._snake.getPos_head()
                }, e.prototype.getPos_neck = function() {
                    return this._snake.getPos_neck()
                }, e.prototype.getScoreRate_food = function() {
                    var t = 1.5;
                    return this.getBuff(s.aw.Item.Grow) >= 0 && (t *= 2), Math.ceil(t)
                }, e.prototype.getScoreRate_show = function() {
                    return .005
                }, e.prototype.isLife = function() {
                    return this.isState(f.Move)
                }, e.prototype.getMiniMapPointIndex = function() {
                    return this.isPid_hero() ? s.aw.MiniMapPoint.Hero : s.aw.MiniMapPoint.Normal
                }, e.prototype.getRadius_eatFood = function() {
                    return this._snake.getRadius_head() + 30
                }, e.prototype.getRadius_magnetFood = function(t) {
                    return void 0 === t && (t = 1), this.getBuff(s.aw.Item.Magnet) >= 0 ? 4 * this._snake.getRadius_head() + 200 * t : 0
                }, e.prototype.canBeLured = function() {
                    return !this.isPid_hero() && this.isLife() && this.isTimeOver(h.Lure)
                }, e.prototype.clearLured = function() {
                    this.resetTimer(h.Lure, 0)
                }, e.prototype.setBeLured = function(t) {
                    var e = t.sub(this.getPos_head()),
                        o = Math.atan2(e.y, e.x);
                    this.setAngleDst(180 * o / Math.PI, !0), this.resetTimer(h.Lure, 1), this.resetTimer(h.Angle_change, 1)
                }, e.prototype.canAttack = function() {
                    return this.isLife() && this.isTimeOver(h.Born)
                }, e.prototype.canBeKilled = function() {
                    return this.isLife() && this.getBuff(s.aw.Item.Invi) < 0
                }, e.prototype.isInvaded = function(t, e) {
                    return this._snake.isForceInvaded(t._snake, e)
                }, a([y(cc.Node)], e.prototype, "ndGrow", void 0), a([y(cc.Node)], e.prototype, "ndMagnet", void 0), a([y(cc.Node)], e.prototype, "ndInvi", void 0), a([y(cc.Node)], e.prototype, "ndSkill", void 0), a([y(dragonBones.ArmatureDisplay)], e.prototype, "armSkill", void 0), a([y(cc.Label)], e.prototype, "lbName", void 0), a([v], e)
            }(u.default);
        o.default = g, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DRes": "DRes",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/Tools": "Tools",
        "./Player": "Player",
        "./Snake": "Snake"
    }],
    Player: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "bcf3chpjI1IfJufjL5Mvcjh", "Player");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DSave"),
            c = t("../datas/GameRun"),
            l = cc._decorator,
            d = l.ccclass,
            u = (l.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._pid = 0, e._tid = 0, e._playTime = 0, e._timers = null, e._state = 0, e._stateTimer = null, e._score = 0, e._scoreMax = 0, e._scoreTotal = 0, e._kills = 0, e._rwdVal = 0, e._buffInfo = [], e
                }

                return i(e, t), e.prototype.initPlayer = function(t, e, o) {
                    this._pid = t, this._tid = e, this._playTime = 0, this._timers = [];
                    for (var n = 0; n < o; n++) this._timers.push([0, 0]);
                    this._state = 0, this._stateTimer = [0, 0], this._score = 0, this._scoreMax = 0, this._scoreTotal = 0, this._kills = 0, this._rwdVal = 0, this._buffInfo = []
                }, e.prototype.isPid_hero = function() {
                    return this._pid == s.default.Pid_Hero
                }, e.prototype.isSameTeam = function(t) {
                    return this._tid == t._tid
                }, e.prototype.clearTimers = function() {
                    for (var t = 0; t < this._timers.length; t++) this._timers[t][0] = 0, this._timers[t][1] = 0
                }, e.prototype.resetTimer = function(t, e) {
                    void 0 === e && (e = null), this._timers[t][0] = 0, null != e && (this._timers[t][1] = e)
                }, e.prototype.isTimeOver = function(t) {
                    return this._timers[t][0] >= this._timers[t][1]
                }, e.prototype.getCurTime = function(t) {
                    return this._timers[t][0]
                }, e.prototype.getTimeRate = function(t) {
                    return this._timers[t][1] > 0 ? this._timers[t][0] / this._timers[t][1] : 1
                }, e.prototype.setState = function(t, e) {
                    this._state = t, this._stateTimer[0] = 0, this._stateTimer[1] = e
                }, e.prototype.isState = function(t) {
                    return this._state == t
                }, e.prototype.isStateTimerOver = function() {
                    return this._stateTimer[0] > this._stateTimer[1]
                }, e.prototype.setScore = function(t) {
                    this._score = t > 0 ? t : 0, this._score > this._scoreMax && (this._scoreMax = this._score)
                }, e.prototype.addScore = function(t) {
                    if (this.setScore(this._score + t), t > 0) {
                        this._scoreTotal += t;
                        var e = .1 * this.getScoreRate_show();
                        this.getBuff(s.aw.Item.Income_x2) >= 0 && (e *= 2), this._rwdVal += t * e
                    }
                }, e.prototype.getScoreRate_food = function() {
                    return 1
                }, e.prototype.getScoreRate_show = function() {
                    return .005
                }, e.prototype.setKills = function(t) {
                    this._kills = t > 0 ? t : 0
                }, e.prototype.addKills = function(t) {
                    void 0 === t && (t = 1), this.setKills(this._kills + t);
                    var e = 10;
                    this.getBuff(s.aw.Item.Income_x2) >= 0 && (e *= 2), this._rwdVal += t * e
                }, e.prototype.getPos_head = function() {
                    return cc.v2(0, 0)
                }, e.prototype.getPos_neck = function() {
                    return cc.v2(0, 0)
                }, e.prototype.getMiniMapPointIndex = function() {
                    return 0
                }, e.prototype.isLife = function() {
                    return !0
                }, e.prototype.canBeLured = function() {
                    return !1
                }, e.prototype.clearLured = function() {}, e.prototype.setBeLured = function() {}, e.prototype.updatePlayer = function(t) {
                    this._playTime += t;
                    for (var e = 0; e < this._timers.length; e++) this._timers[e][0] += t;
                    this._stateTimer[0] += t, this.updateBuff(t)
                }, e.prototype.addBuff = function(t, e) {
                    var o = e;
                    if (o <= 0 && (o = c.default.getItemTime(t, this.isPid_hero())), t == s.aw.Item.AvoidDeath)
                        if (o = 1, this.isPid_hero()) r.DBase.addItem(s.aw.Item.AvoidDeath, 1), o = r.DBase.getItem(s.aw.Item.AvoidDeath);
                        else {
                            var n = this.getBuff(s.aw.Item.AvoidDeath);
                            n >= 0 && (o = this._buffInfo[n].timer + 1)
                        }
                    for (var i = 0; i < this._buffInfo.length; i++)
                        if (this._buffInfo[i].idx == t) return void(this._buffInfo[i].timer = o);
                    this._buffInfo.push({
                        idx: t,
                        timer: o
                    })
                }, e.prototype.getBuff = function(t) {
                    for (var e = 0; e < this._buffInfo.length; e++) {
                        var o = this._buffInfo[e];
                        if (o.idx == t && o.timer > 0) return e
                    }
                    return -1
                }, e.prototype.updateBuff = function(t) {
                    for (var e = 0, o = this._buffInfo.length, n = 0; n < o; n++) this._buffInfo[n].idx != s.aw.Item.AvoidDeath && (this._buffInfo[n].timer -= t), this._buffInfo[n].timer <= 0 ? (this._buffInfo[n] = null, ++e) : e > 0 && (this._buffInfo[n - e] = this._buffInfo[n], this._buffInfo[n] = null);
                    e > 0 && this._buffInfo.splice(o - e, e)
                }, e.prototype.clearAllBuff = function() {
                    this._buffInfo = []
                }, e.prototype.useBuffAvoidDeath = function() {
                    var t = this.getBuff(s.aw.Item.AvoidDeath);
                    return t >= 0 && (this.isPid_hero() ? (r.DBase.addItem(s.aw.Item.AvoidDeath, -1), this._buffInfo[t].timer = r.DBase.getItem(s.aw.Item.AvoidDeath)) : this._buffInfo[t].timer -= 1, this._buffInfo[t].timer <= 0 && this._buffInfo.splice(t, 1), !0)
                }, a([d], e)
            }(cc.Component));
        o.default = u, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun"
    }],
    PopCrazyTapRwd: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "76489F4fulMzLASru/V92hk", "PopCrazyTapRwd");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/GameRun"),
            r = t("../datas/SdkCtrl"),
            c = t("./UIPop"),
            l = cc._decorator,
            d = l.ccclass,
            u = l.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndGold = null, e.lbGoldVal = null, e.ndDiamond = null, e.lbDiamondVal = null, e.ndGetBtn = null, e.ndGetBtn_free = null, e.ndGetBtn_ad = null, e.tgGet_Ad = null, e
                }

                return i(e, t), e.prototype.onEnable = function() {
                    var t = !1;
                    this.tgGet_Ad.node.active && (s.default.isMistakeTouch() ? (this.tgGet_Ad.check(), t = !0) : this.tgGet_Ad.uncheck()), this.ndGetBtn_free.active = !t, this.ndGetBtn_ad.active = t, this.setTouchStop(!1)
                }, e.prototype.update = function() {
                    if (this.tgGet_Ad.node.active) {
                        var t = this.tgGet_Ad.isChecked;
                        this.ndGetBtn_free.active = !t, this.ndGetBtn_ad.active = t
                    }
                }, e.prototype.reset = function(t) {
                    void 0 === t && (t = null), this.ndGold.active = t.golds > 0, this.ndGold.active && (this.lbGoldVal.string = "x" + t.golds), this.ndDiamond.active = t.diamonds > 0, this.ndDiamond.active && (this.lbDiamondVal.string = "x" + t.diamonds), this.ndGold.active && this.ndDiamond.active ? (this.ndGold.setPosition(-150, 60), this.ndDiamond.setPosition(150, 60)) : this.ndGold.active ? this.ndGold.setPosition(0, 60) : this.ndDiamond.active && this.ndDiamond.setPosition(0, 60)
                }, e.prototype.onClick_get = function() {
                    this.setClose(0), s.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_getx3 = function() {
                    var t = this;
                    r.default.sendEvent("\u75af\u72c2\u70b9\u51fbx3-\u5e7f\u544a\u70b9\u51fb", {}), r.default.playAds_reward(0, function(e) {
                        0 == e && (r.default.sendEvent("\u75af\u72c2\u70b9\u51fbx3-\u5e7f\u544a\u5b8c\u6210", {}), t.setClose(1))
                    }), s.default.playEFM("ef_ui_button")
                }, a([u(cc.Node)], e.prototype, "ndGold", void 0), a([u(cc.Label)], e.prototype, "lbGoldVal", void 0), a([u(cc.Node)], e.prototype, "ndDiamond", void 0), a([u(cc.Label)], e.prototype, "lbDiamondVal", void 0), a([u(cc.Node)], e.prototype, "ndGetBtn", void 0), a([u(cc.Node)], e.prototype, "ndGetBtn_free", void 0), a([u(cc.Node)], e.prototype, "ndGetBtn_ad", void 0), a([u(cc.Toggle)], e.prototype, "tgGet_Ad", void 0), a([d], e)
            }(c.default);
        o.default = p, cc._RF.pop()
    }, {
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl",
        "./UIPop": "UIPop"
    }],
    PopCrazyTap: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ee753+m9ClJp58OqlLn8xas", "PopCrazyTap");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DSave"),
            c = t("../datas/GameRun"),
            l = t("../datas/SdkCtrl"),
            d = t("./UIMgr"),
            u = t("./UIPop"),
            p = cc._decorator,
            h = p.ccclass,
            f = p.property,
            _ = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.brProg = null, e.ndTime = null, e.brTime = null, e.lbTime = null, e.ndTapBtn = null, e.ndRwdLock = [], e._prog = 0, e._timer = 0, e._startTap = !1, e._showBanner = !1, e._mistakeTouch = !1, e
                }

                var o;
                return i(e, t), o = e, e.prototype.onEnable = function() {
                    this.brProg.progress = 0, this._prog = 0, this._timer = o.Time_Full, this.brTime.progress = 1, this.lbTime.string = "" + Math.round(this._timer);
                    for (var t = 0; t < this.ndRwdLock.length; t++) this.ndRwdLock[t].active = !1;
                    this._startTap = !1, this.setTouchStop(!1), this._mistakeTouch = c.default.isMistakeTouch(), this._mistakeTouch ? (this._showBanner = !1, this.ndTime.setPosition(0, -160), this.ndTapBtn.setPosition(0, -280)) : (this._showBanner = !0, l.default.playAds_banner(!0), this.ndTime.setPosition(0, -60), this.ndTapBtn.setPosition(0, -130))
                }, e.prototype.onDisable = function() {
                    l.default.playAds_banner(!1)
                }, e.prototype.update = function(t) {
                    var e = this;
                    if (this.isOpened() && this._startTap) {
                        this._showBanner || (this._mistakeTouch ? (this._prog >= 40 || this._timer < 3) && (this._showBanner = !0, l.default.playAds_banner(!0), this.ndTime.setPosition(0, -60), this.ndTapBtn.setPosition(0, -130)) : this._showBanner = !0);
                        var n = 0,
                            i = 0,
                            a = 0;
                        this._prog >= 20 && (n += 1, i += 100), this._prog >= 60 && (n += 1, a += 100), this._prog >= 100 && (n += 1);
                        for (var c = 0; c < this.ndRwdLock.length; c++) this.ndRwdLock[c].active = n > c;
                        this._timer -= t, this._timer < 0 && (this._timer = 0, this._startTap = !1, this.setTouchStop(!0), n >= 3 && r.DSnake.setSkinGet(s.aw.SnakeSkin.Dragon, !0), i > 0 || a > 0 ? d.default.instance.popCrazyTapRwd.setOpen(function(t, o) {
                            if (1 == t) {
                                var n = 1 == o ? 3 * i : i,
                                    s = 1 == o ? 3 * a : a;
                                e.doGetRwd(n, s)
                            }
                        }, {
                            golds: i,
                            diamonds: a
                        }) : this.setClose(0)), this.brTime.progress = this._timer / o.Time_Full, this.lbTime.string = "" + Math.round(this._timer), this._mistakeTouch ? this._prog -= .5 * (.1 + this._prog / 100) : this._prog -= .75 * (.1 + this._prog / 100), this._prog < 0 && (this._prog = 0), this.brProg.progress = this._prog / 100
                    }
                }, e.prototype.onClick_tap = function() {
                    this.isOpened() && (this._startTap = !0, this._prog += 5, this._prog > 95 && (this._prog = 95))
                }, e.prototype.doGetRwd = function(t, e) {
                    var o = this;
                    t > 0 && e > 0 ? (r.DBase.addMoney(s.aw.Money.Golds, t), r.DBase.addMoney(s.aw.Money.Diamonds, e), d.default.instance.popGetShow.setOpen(function(t) {
                        1 == t && d.default.instance.popGetShow.setOpen(function(t) {
                            1 == t && o.setClose(0)
                        }, {
                            type: s.aw.GetShow.Diamond,
                            value: e
                        })
                    }, {
                        type: s.aw.GetShow.Gold,
                        value: t
                    })) : t > 0 ? (r.DBase.addMoney(s.aw.Money.Golds, t), d.default.instance.popGetShow.setOpen(function(t) {
                        1 == t && o.setClose(0)
                    }, {
                        type: s.aw.GetShow.Gold,
                        value: t
                    })) : e > 0 && (r.DBase.addMoney(s.aw.Money.Diamonds, e), d.default.instance.popGetShow.setOpen(function(t) {
                        1 == t && o.setClose(0)
                    }, {
                        type: s.aw.GetShow.Diamond,
                        value: e
                    }))
                }, e.Time_Full = 5, a([f(cc.ProgressBar)], e.prototype, "brProg", void 0), a([f(cc.Node)], e.prototype, "ndTime", void 0), a([f(cc.ProgressBar)], e.prototype, "brTime", void 0), a([f(cc.Label)], e.prototype, "lbTime", void 0), a([f(cc.Node)], e.prototype, "ndTapBtn", void 0), a([f([cc.Node])], e.prototype, "ndRwdLock", void 0), o = a([h], e)
            }(u.default);
        o.default = _, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl",
        "./UIMgr": "UIMgr",
        "./UIPop": "UIPop"
    }],
    PopDaily: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "59ca1Fl29pF4r6AwmRv8X32", "PopDaily");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DSave"),
            c = t("../datas/GameRun"),
            l = t("../objs/DailyItem"),
            d = t("./UIPop"),
            u = cc._decorator,
            p = u.ccclass,
            h = u.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.svDailys = null, e.pfDailyItem = null, e._dailyList = [], e
                }

                return i(e, t), e.prototype.onLoad = function() {
                    var t = this;
                    this.svDailys.content.removeAllChildren(), this._dailyList = [];
                    for (var e = s.aw.Daily.COUNT, o = 0; o < e; o++) {
                        this._dailyList.push({
                            dailyIdx: o,
                            order: 0,
                            dailyItem: null
                        });
                        var n = cc.instantiate(this.pfDailyItem);
                        this.svDailys.content.addChild(n);
                        var i = n.getComponent(l.default);
                        i.setInfo(o, function(e) {
                            t.doClickItemGet(e)
                        }), this._dailyList[o].dailyItem = i
                    }
                }, e.prototype.onEnable = function() {
                    for (var t = this, e = 0; e < this._dailyList.length; e++) {
                        var o = r.DDaily.isProgFinish(this._dailyList[e].dailyIdx),
                            n = r.DDaily.isFinished(this._dailyList[e].dailyIdx);
                        this._dailyList[e].order = o ? 0 : n ? 2 : 1
                    }
                    this._dailyList = this._dailyList.sort(function(t, e) {
                        return t.order - e.order
                    });
                    var i = this._dailyList[0].dailyItem,
                        a = this._dailyList.length,
                        s = i.node.getContentSize().height,
                        c = 10 + s / 2,
                        l = s * a + 20,
                        d = this.svDailys.content.getContentSize();
                    for (l = l > d.height ? l : d.height, this.svDailys.content.setContentSize(d.width, l), this.setTouchStop(!0), e = 0; e < this._dailyList.length; e++) {
                        var u = this._dailyList[e].dailyItem.node;
                        u.setPosition(0, -c - e * s), 0 == e ? (u.setScale(0), u.opacity = 0, cc.tween(u).delay(.2 + .1 * e).to(.2, {
                            scale: 1.2,
                            opacity: 255
                        }).to(.1, {
                            scale: 1
                        }).delay(.5).call(function() {
                            t.setTouchStop(!1)
                        }).start()) : e < 5 ? (u.setScale(0), u.opacity = 0, cc.tween(u).delay(.2 + .1 * e).to(.2, {
                            scale: 1.2,
                            opacity: 255
                        }).to(.1, {
                            scale: 1
                        }).start()) : u.setScale(1)
                    }
                    this.refreshShow()
                }, e.prototype.refreshShow = function() {
                    for (var t = 0; t < this._dailyList.length; t++) this._dailyList[t].dailyItem.refreshShow()
                }, e.prototype.doClickItemGet = function() {}, e.prototype.onClick_close = function() {
                    this.setClose(0), c.default.playEFM("ef_ui_button")
                }, a([h(cc.ScrollView)], e.prototype, "svDailys", void 0), a([h(cc.Prefab)], e.prototype, "pfDailyItem", void 0), a([p], e)
            }(d.default);
        o.default = f, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../objs/DailyItem": "DailyItem",
        "./UIPop": "UIPop"
    }],
    PopGetShow: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c41aeU4arpE4IXfsXHKi/b0", "PopGetShow");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/GameRun"),
            c = t("./UIPop"),
            l = cc._decorator,
            d = l.ccclass,
            u = l.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndPages = [], e.armItem1 = null, e.ndItemIcons1 = [], e.lbItemVal1 = null, e.lbItemVal2 = null, e.armItem3 = null, e
                }

                return i(e, t), e.prototype.reset = function(t) {
                    void 0 === t && (t = null);
                    var e = t.type,
                        o = t.value,
                        n = 0;
                    if (e == s.aw.GetShow.Diamond) {
                        n = 0, this.armItem1.playAnimation("3_ani", 0);
                        for (var i = 0; i < this.ndItemIcons1.length; i++) this.ndItemIcons1[i].active = 0 == i;
                        this.lbItemVal1.string = "x" + o
                    } else if (e == s.aw.GetShow.Gold) {
                        for (n = 0, this.armItem1.playAnimation("4_ani", 0), i = 0; i < this.ndItemIcons1.length; i++) this.ndItemIcons1[i].active = 1 == i;
                        this.lbItemVal1.string = "x" + o
                    } else e == s.aw.GetShow.AvoidDeath ? (n = 1, this.lbItemVal2.string = "x" + o) : e == s.aw.GetShow.Skin ? (n = 2, this.armItem3.playAnimation("skin_ui_" + o, 0)) : cc.log("error: get show type is not exist");
                    for (i = 0; i < this.ndPages.length; i++) this.ndPages[i].active = i == n;
                    r.default.playEFM("ef_ui_reward")
                }, e.prototype.onClicl_claim = function() {
                    this.setClose(0)
                }, a([u([cc.Node])], e.prototype, "ndPages", void 0), a([u(dragonBones.ArmatureDisplay)], e.prototype, "armItem1", void 0), a([u([cc.Node])], e.prototype, "ndItemIcons1", void 0), a([u(cc.Label)], e.prototype, "lbItemVal1", void 0), a([u(cc.Label)], e.prototype, "lbItemVal2", void 0), a([u(dragonBones.ArmatureDisplay)], e.prototype, "armItem3", void 0), a([d], e)
            }(c.default);
        o.default = p, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/GameRun": "GameRun",
        "./UIPop": "UIPop"
    }],
    PopGift: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "11d582wdEpEOblsBK2tZzlD", "PopGift");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DSave"),
            c = t("../datas/GameRun"),
            l = t("../datas/SdkCtrl"),
            d = t("./UIMgr"),
            u = t("./UIPop"),
            p = cc._decorator,
            h = p.ccclass,
            f = p.property,
            _ = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.armBox = null, e.ndTitles = [], e.ndIcons = [], e.lbVal = null, e.pfNoAdTip = null, e._index = 0, e._ndTip = null, e
                }

                return i(e, t), e.prototype.onLoad = function() {
                    this._ndTip = new cc.Node, this._ndTip.setPosition(0, 0), this.node.addChild(this._ndTip)
                }, e.prototype.reset = function(t) {
                    void 0 === t && (t = null), this._index = t.index;
                    for (var e = 0; e < s.aw.GiftIndex.COUNT; e++) this.ndTitles[e].active = this._index == e, this.ndIcons[e].active = this._index == e;
                    this.lbVal.string = "x" + [200, 1500][this._index], this.armBox.playAnimation(["1_ani", "2_ani"][this._index], 0), this._ndTip.removeAllChildren(), this.setTouchStop(!1), c.default.playEFM("ef_ui_reward")
                }, e.prototype.onClick_close = function() {
                    this._ndTip.removeAllChildren(), this.setClose(0), this.setTouchStop(!0), c.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_get = function() {
                    var t = this;
                    0 == this._index ? l.default.sendEvent("\u94bb\u77f3\u793c\u5305-\u5e7f\u544a\u70b9\u51fb", {}) : 1 == this._index && l.default.sendEvent("\u91d1\u5e01\u793c\u5305-\u5e7f\u544a\u70b9\u51fb", {}), l.default.playAds_reward(0, function(e) {
                        if (0 == e) {
                            0 == t._index ? l.default.sendEvent("\u94bb\u77f3\u793c\u5305-\u5e7f\u544a\u5b8c\u6210", {}) : 1 == t._index && l.default.sendEvent("\u91d1\u5e01\u793c\u5305-\u5e7f\u544a\u5b8c\u6210", {});
                            var o = [
                                [200, s.aw.Money.Diamonds, s.aw.GetShow.Diamond],
                                [1500, s.aw.Money.Golds, s.aw.GetShow.Gold]
                            ];
                            r.DBase.addMoney(o[t._index][1], o[t._index][0]), t.setClose(0), d.default.instance.popGetShow.setOpen(null, {
                                type: o[t._index][2],
                                value: o[t._index][0]
                            })
                        }
                    }), c.default.playEFM("ef_ui_claim")
                }, a([f(dragonBones.ArmatureDisplay)], e.prototype, "armBox", void 0), a([f([cc.Node])], e.prototype, "ndTitles", void 0), a([f([cc.Node])], e.prototype, "ndIcons", void 0), a([f(cc.Label)], e.prototype, "lbVal", void 0), a([f(cc.Prefab)], e.prototype, "pfNoAdTip", void 0), a([h], e)
            }(u.default);
        o.default = _, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl",
        "./UIMgr": "UIMgr",
        "./UIPop": "UIPop"
    }],
    PopJackpot: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "56889n9VYlF6Lj0VuZ/mP03", "PopJackpot");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DRes"),
            c = t("../datas/DSave"),
            l = t("../datas/GameRun"),
            d = t("../datas/SdkCtrl"),
            u = t("../datas/Tools"),
            p = t("./UIMgr"),
            h = t("./UIPop"),
            f = cc._decorator,
            _ = f.ccclass,
            v = f.property,
            y = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndItems = [], e.ndFocusShows = [], e.armSkin = null, e.lbSkinName = null, e.ndBtnFree = null, e.ndBtnAd = null, e.ndTimes = null, e.lbSkinName2 = null, e.lbTimes = null, e.brTimes = null, e.ndFreeTime = null, e.lbFreeTime = null, e._skinIdx = 0, e._state = 0, e._itemIdx_cur = 0, e._itemIdx_dst = 0, e._itemIdx_timeSpace = 0, e._itemIdx_timer = 0, e
                }

                return i(e, t), e.prototype.onEnable = function() {
                    this.setItemIdxCur(0), this._itemIdx_dst = this._itemIdx_cur, this._state = 0, this.refreshShow(), this.setTouchStop(!1)
                }, e.prototype.refreshShow = function() {
                    this._skinIdx = -1;
                    for (var t = 5; t < s.aw.SnakeSkin.Nor_Cnt; t++)
                        if (!c.DSnake.isSkinGet(t)) {
                            this._skinIdx = t;
                            break
                        }
                    if (this._skinIdx >= 0) {
                        var e = this.ndItems.length - 1;
                        this.ndItems[e].active = !0, this.ndTimes.active = !0;
                        var o = "skin_ui_" + this._skinIdx;
                        this.armSkin.playAnimation(o, 0);
                        var n = r.DRes.getJson_snakeSkin(this._skinIdx, r.DRes.SnakeSkinsData.Name);
                        this.lbSkinName.string = n, this.lbSkinName2.string = n, this.lbTimes.string = "" + c.DBase.getJackpotSkinTimes(), this.brTimes.progress = c.DBase.getJackpotSkinTimes() / 10
                    } else e = this.ndItems.length - 1, this.ndItems[e].active = !1, this.ndTimes.active = !1
                }, e.prototype.setItemIdxCur = function(t) {
                    this._itemIdx_cur = t;
                    var e = this.ndFocusShows.length;
                    this._skinIdx < 0 && (e -= 1);
                    for (var o = this._itemIdx_cur % e, n = 0; n < this.ndFocusShows.length; n++) this.ndFocusShows[n].active = o == n
                }, e.prototype.update = function(t) {
                    var e = this,
                        o = c.DBase.getJackpotFreeTimer();
                    if (o > 0 ? (this.ndBtnFree.active && (this.ndBtnFree.active = !1), this.ndBtnAd.active || (this.ndBtnAd.active = !0), this.ndFreeTime.active || (this.ndFreeTime.active = !0), this.lbFreeTime.string = u.default.timeFormat("MM:SS", o)) : (this.ndBtnFree.active || (this.ndBtnFree.active = !0), this.ndBtnAd.active && (this.ndBtnAd.active = !1), this.ndFreeTime.active && (this.ndFreeTime.active = !1)), 1 == this._state) {
                        var n = this._itemIdx_dst - this._itemIdx_cur;
                        if (n > 0) this._itemIdx_timer += t, this._itemIdx_timer >= this._itemIdx_timeSpace && (this.setItemIdxCur(this._itemIdx_cur + 1), this._itemIdx_timer = 0, this._itemIdx_timeSpace -= .05, n < 10 && (this._itemIdx_timeSpace = .1 + .05 * (10 - n)), this._itemIdx_timeSpace < .1 && (this._itemIdx_timeSpace = .1));
                        else {
                            this._state = 0, this.setTouchStop(!1);
                            var i = this.ndItems.length,
                                a = this._itemIdx_cur % i,
                                r = [
                                    [s.aw.GetShow.Gold, 300],
                                    [s.aw.GetShow.Diamond, 200],
                                    [s.aw.GetShow.Gold, 1e3],
                                    [s.aw.GetShow.Diamond, 500],
                                    [s.aw.GetShow.AvoidDeath, 1],
                                    [s.aw.GetShow.Diamond, 100],
                                    [s.aw.GetShow.Gold, 2e3],
                                    [s.aw.GetShow.Skin, this._skinIdx]
                                ];
                            r[a][0] == s.aw.GetShow.Gold ? c.DBase.addMoney(s.aw.Money.Golds, r[a][1]) : r[a][0] == s.aw.GetShow.Diamond ? c.DBase.addMoney(s.aw.Money.Diamonds, r[a][1]) : r[a][0] == s.aw.GetShow.AvoidDeath ? c.DBase.addItem(s.aw.Item.AvoidDeath, r[a][1]) : r[a][0] == s.aw.GetShow.Skin && c.DSnake.setSkinGet(this._skinIdx), p.default.instance.popGetShow.setOpen(function(t) {
                                1 == t && e.refreshShow()
                            }, {
                                type: r[a][0],
                                value: r[a][1]
                            })
                        }
                    }
                }, e.prototype.onClick_close = function() {
                    this.setTouchStop(!0), this.setClose(0), l.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_ok = function() {
                    var t = this;
                    this.ndBtnFree.active ? (this.setTouchStop(!0), this.doStart(!0)) : (d.default.sendEvent("\u8f6e\u76d8-\u5e7f\u544a\u70b9\u51fb", {}), d.default.playAds_reward(0, function(e) {
                        0 == e && (d.default.sendEvent("\u8f6e\u76d8-\u5e7f\u544a\u5b8c\u6210", {}), t.setTouchStop(!0), t.doStart(!1))
                    })), l.default.playEFM("ef_ui_button")
                }, e.prototype.doStart = function(t) {
                    var e = this.ndFocusShows.length;
                    this._skinIdx < 0 && (e -= 1);
                    var o = e - 1,
                        n = o;
                    if (this._skinIdx < 0 || c.DBase.getJackpotSkinTimes() < 9) {
                        n = 0;
                        for (var i = [220, 123, 143, 51, 168, 214, 51, 30], a = u.default.randomRangeInt(0, 1e3), s = 0; s < i.length && !(a < i[s]); s++) a -= i[s], n += 1;
                        this._skinIdx < 0 && n == o && (n = 0)
                    }
                    this.setItemIdxCur(this._itemIdx_cur % e), this._itemIdx_dst = 5 * e + n, this._itemIdx_timeSpace = .3, this._itemIdx_timer = 0, this._state = 1, t && c.DBase.resetJackpotFreeTimer(!1), n == o ? (c.DBase.addJackpotTimes(!1), c.DBase.resetJackpotSkinTimes(!0)) : c.DBase.addJackpotTimes(!0)
                }, a([v([cc.Node])], e.prototype, "ndItems", void 0), a([v([cc.Node])], e.prototype, "ndFocusShows", void 0), a([v(dragonBones.ArmatureDisplay)], e.prototype, "armSkin", void 0), a([v(cc.Label)], e.prototype, "lbSkinName", void 0), a([v(cc.Node)], e.prototype, "ndBtnFree", void 0), a([v(cc.Node)], e.prototype, "ndBtnAd", void 0), a([v(cc.Node)], e.prototype, "ndTimes", void 0), a([v(cc.Label)], e.prototype, "lbSkinName2", void 0), a([v(cc.Label)], e.prototype, "lbTimes", void 0), a([v(cc.ProgressBar)], e.prototype, "brTimes", void 0), a([v(cc.Node)], e.prototype, "ndFreeTime", void 0), a([v(cc.Label)], e.prototype, "lbFreeTime", void 0), a([_], e)
            }(h.default);
        o.default = y, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DRes": "DRes",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl",
        "../datas/Tools": "Tools",
        "./UIMgr": "UIMgr",
        "./UIPop": "UIPop"
    }],
    PopLucky: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a24f4TXln1C+bvq69YnqB3+", "PopLucky");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DSave"),
            c = t("../datas/GameRun"),
            l = t("../datas/Tools"),
            d = t("../objs/LuckyItem"),
            u = t("./UIMgr"),
            p = t("./UIPop"),
            h = cc._decorator,
            f = h.ccclass,
            _ = h.property,
            v = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.armTitle = null, e.ndLucky = null, e.luckyItems = [], e.ndLuckyBig = null, e.luckyItem_big = null, e._luckyPos = [], e._state = 0, e
                }

                return i(e, t), e.prototype.onLoad = function() {
                    for (var t = this, e = 0; e < this.luckyItems.length; e++) {
                        var o = this.luckyItems[e].node.getPosition();
                        this._luckyPos.push(o), this.luckyItems[e].setClickCB(function(e, o) {
                            e == s.aw.Item.AvoidDeath ? r.DBase.addItem(e, o) : c.default.setUseItem(e, o), t.setClose(0)
                        })
                    }
                    this.luckyItem_big.setClickCB(function(e, o) {
                        e == s.aw.Item.AvoidDeath ? r.DBase.addItem(e, o) : c.default.setUseItem(e, o), t.setClose(0)
                    })
                }, e.prototype.onEnable = function() {
                    this.refreshShow();
                    for (var t = 0; t < this.luckyItems.length; t++) this.luckyItems[t].setShowInfo(!0);
                    this._state = 0, this.setTouchStop(!1)
                }, e.prototype.refreshShow = function() {
                    this.armTitle.playAnimation("ani01", 1), this.ndLucky.active = !0, this.ndLuckyBig.active = !1;
                    for (var t = [], e = this.luckyItems[0].getIconCnt(), o = 0; o < e; o++) t.push(o);
                    for (o = 0; o < this.luckyItems.length; o++) {
                        this.luckyItems[o].node.setPosition(this._luckyPos[o]), this.luckyItems[o].node.setScale(1);
                        var n = l.default.randomRangeInt(0, t.length);
                        this.luckyItems[o].setInit(t[n], 1), t.splice(n, 1)
                    }
                }, e.prototype.update = function() {
                    var t = this;
                    if (1 == this._state) {
                        for (var e = !0, o = !0, n = this.luckyItems.length, i = 0; i < n; i++) {
                            if (!this.luckyItems[i].isRunOver()) {
                                e = !1;
                                break
                            }
                            i > 0 && this.luckyItems[i]._index != this.luckyItems[i - 1]._index && (o = !1)
                        }
                        e && (this._state = o ? 30 : 20)
                    } else if (20 == this._state) {
                        for (this._state = 21, this.armTitle.node.active = !0, this.armTitle.playAnimation("ani01", 1), n = this.luckyItems.length, i = 0; i < n; i++) this.luckyItems[i].setShowInfo(!0);
                        this._state = 0, this.setTouchStop(!1)
                    } else if (30 == this._state) {
                        this._state = 31, this.armTitle.node.active = !0, this.armTitle.playAnimation("ani02", 1), n = this.luckyItems.length;
                        var a = this.luckyItems[0].node.getPosition(),
                            s = this.luckyItems[n - 1].node.getPosition(),
                            r = a.add(s).div(2),
                            l = function(e) {
                                var o = d.luckyItems[e];
                                o.node.getPosition(), 0 == e ? cc.tween(o.node).to(.3, {
                                    scale: 1.5,
                                    x: r.x,
                                    y: r.y + 100
                                }).call(function() {
                                    cc.log("show effect ")
                                }).delay(.5).call(function() {
                                    t.ndLucky.active = !1, t.ndLuckyBig.active = !0;
                                    for (var e = 0; e < t.luckyItems.length; e++) t.luckyItems[e].node.setPosition(t._luckyPos[e]), t.luckyItems[e].node.setScale(1);
                                    t.luckyItem_big.setInit(o._index, 3), t.luckyItem_big.node.setPosition(r.x, r.y + 100), t.luckyItem_big.node.setScale(1.5), cc.tween(t.luckyItem_big.node).to(.2, {
                                        scale: 1,
                                        y: r.y
                                    }).call(function() {
                                        t.luckyItem_big.setShowInfo(!0), t._state = 0, t.setTouchStop(!1)
                                    }).start()
                                }).start() : cc.tween(o.node).to(.3, {
                                    scale: 1.5,
                                    x: r.x,
                                    y: r.y + 100
                                }).delay(.5).start()
                            },
                            d = this;
                        for (i = 0; i < n; i++) l(i);
                        c.default.playEFM("ef_ui_upgrade")
                    }
                }, e.prototype.onClick_close = function() {
                    this.setClose(0), c.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_start = function() {
                    if (0 == this._state)
                        if (r.DBase.addMoney(s.aw.Money.Diamonds, -20)) {
                            this._state = 1, this.setTouchStop(!0), this.refreshShow();
                            var t = this.luckyItems[0].getIconCnt(),
                                e = -1;
                            2 == l.default.randomRangeInt(0, 5) && (e = l.default.randomRangeInt(0, t));
                            for (var o = this.luckyItems.length, n = 0; n < o; n++) {
                                var i = e;
                                i < 0 && (i = l.default.randomRangeInt(0, t)), this.luckyItems[n].doStart(i, 5 + 2 * n)
                            }
                            c.default.playEFM("ef_ui_switch")
                        } else cc.log("diamond is not enough"), u.default.instance.popGift.setOpen(null, {
                            index: s.aw.GiftIndex.Diamond
                        })
                }, a([_(dragonBones.ArmatureDisplay)], e.prototype, "armTitle", void 0), a([_(cc.Node)], e.prototype, "ndLucky", void 0), a([_([d.default])], e.prototype, "luckyItems", void 0), a([_(cc.Node)], e.prototype, "ndLuckyBig", void 0), a([_(d.default)], e.prototype, "luckyItem_big", void 0), a([f], e)
            }(p.default);
        o.default = v, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/Tools": "Tools",
        "../objs/LuckyItem": "LuckyItem",
        "./UIMgr": "UIMgr",
        "./UIPop": "UIPop"
    }],
    PopMapLv_hole: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b4310/ldDlCJanP0cJc6PpA", "PopMapLv_hole");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DRes"),
            r = t("../datas/DSave"),
            c = t("../datas/GameRun"),
            l = t("../datas/Tools"),
            d = t("./UIPop"),
            u = cc._decorator,
            p = u.ccclass,
            h = u.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lbBesterName = null, e.lbBesterTime = null, e.lbMyBestTime = null, e.lbLv = null, e.lbRwdVal = null, e._lvStrBase = "", e
                }

                return i(e, t), e.prototype.onLoad = function() {
                    this._lvStrBase = this.lbLv.string
                }, e.prototype.onEnable = function() {
                    var t = c.default.getLv();
                    this.lbLv.string = this._lvStrBase.replace("XX", "" + (t + 1));
                    var e = s.DRes.getJson_HoleLv(t),
                        o = e[s.DRes.HoleLvsData.BestTime],
                        n = r.DSnake.getHoleLvBestTime(t),
                        i = e[s.DRes.HoleLvsData.Player],
                        a = s.DRes.getJson_nameSnake(i);
                    n > 0 ? o < n ? (this.lbBesterName.string = a, this.lbBesterTime.string = l.default.timeFormat("HH:MM:SS", o)) : (this.lbBesterName.string = "\u6211\u81ea\u5df1", this.lbBesterTime.string = l.default.timeFormat("HH:MM:SS", n)) : (this.lbBesterName.string = a, this.lbBesterTime.string = l.default.timeFormat("HH:MM:SS", o), this.lbMyBestTime.string = "00:00:00"), r.DSnake.getHoleLvPassed() > t ? this.lbRwdVal.string = "x0" : this.lbRwdVal.string = "x" + e[s.DRes.HoleLvsData.RwdVal]
                }, e.prototype.onClick_close = function() {
                    this.setClose(1), c.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_enter = function() {
                    this.setClose(0), c.default.playEFM("ef_ui_button")
                }, a([h(cc.Label)], e.prototype, "lbBesterName", void 0), a([h(cc.Label)], e.prototype, "lbBesterTime", void 0), a([h(cc.Label)], e.prototype, "lbMyBestTime", void 0), a([h(cc.Label)], e.prototype, "lbLv", void 0), a([h(cc.Label)], e.prototype, "lbRwdVal", void 0), a([p], e)
            }(d.default);
        o.default = f, cc._RF.pop()
    }, {
        "../datas/DRes": "DRes",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/Tools": "Tools",
        "./UIPop": "UIPop"
    }],
    PopMoreMode: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "bf722DTABhDJ6ihbrCwtmNy", "PopMoreMode");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/GameRun"),
            c = t("../datas/Tools"),
            l = t("./UIMgr"),
            d = t("./UIPop"),
            u = t("./UIScene"),
            p = cc._decorator,
            h = p.ccclass,
            f = (p.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return i(e, t), e.prototype.onEnable = function() {
                    this.setTouchStop(!1)
                }, e.prototype.onClick_close = function() {
                    this.setClose(0), this.setTouchStop(!0), r.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_mode = function(t, e) {
                    var o = this;
                    cc.log("more mode idx = ", e);
                    var n = -1;
                    if (0 == e ? n = s.aw.Mode.Snake_Dragon : 1 == e ? n = s.aw.Mode.Snake_Turtle : 2 == e && (n = s.aw.Mode.Snake_Eagle), n >= 0) {
                        var i = c.default.randomRangeInt(0, s.default.Snake_BgCnt);
                        r.default.setBgIdx(i), r.default.startGame(n, 0), l.default.instance.popLucky.setOpen(function(t) {
                            1 == t && (o.setClose(0), o.setTouchStop(!0), l.default.instance.ndMenu.getComponent(u.default).doExit(function() {
                                l.default.instance.ndMenu.active = !1, l.default.instance.ndGame.active = !0
                            }))
                        }), r.default.playEFM("ef_ui_button")
                    }
                }, a([h], e)
            }(d.default));
        o.default = f, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/GameRun": "GameRun",
        "../datas/Tools": "Tools",
        "./UIMgr": "UIMgr",
        "./UIPop": "UIPop",
        "./UIScene": "UIScene"
    }],
    PopNavigate2: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2e6d1CY96xGybZ/Wnm9BYOK", "PopNavigate2");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/GameRun"),
            r = t("../datas/SdkCtrl"),
            c = t("../objs/NavigateItem"),
            l = t("./UIPop"),
            d = cc._decorator,
            u = d.ccclass,
            p = d.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndIcons = null, e.pfNavigateItem = null, e.rowCnt = 2, e.itemScale = 1.5, e._icons = [], e._scrllingFlag = 0, e._scrollingX = 0, e._touchId = -1, e._touchX = 0, e._bannerShowing = !1, e._eventName = "", e
                }

                return i(e, t), e.prototype.onLoad = function() {
                    for (var t = s.default.getMoreGameCnt(), e = Math.ceil(t / this.rowCnt), o = 0; o < this.rowCnt; o++) {
                        for (var n = [], i = o * e, a = 0; a < e; a++) {
                            var r = cc.instantiate(this.pfNavigateItem);
                            this.ndIcons.addChild(r);
                            var l = r.getComponent(c.default);
                            n.push(l);
                            var d = Math.floor((i + a) % t);
                            l.setIndex(d), l.node.setScale(this.itemScale)
                        }
                        this._icons.push(n)
                    }
                    this._scrllingFlag = 0, this._scrollingX = 0, this.setScrollingX(0), this._touchId = -1, this._touchX = 0, this.ndIcons.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this), this.ndIcons.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this), this.ndIcons.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this), this.ndIcons.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnded, this)
                }, e.prototype.onDestroy = function() {
                    this.ndIcons.off(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this), this.ndIcons.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this), this.ndIcons.off(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this), this.ndIcons.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnded, this)
                }, e.prototype.onEnable = function() {
                    this.setTouchStop(!1), this._bannerShowing = r.default._adBannerShowing, r.default.playAds_banner(!1)
                }, e.prototype.onDisable = function() {
                    this._bannerShowing && r.default.playAds_banner(!0)
                }, e.prototype.reset = function(t) {
                    this._eventName = t.evtName, (!this._eventName || this._eventName.length <= 0) && (this._eventName = "\u8df3\u8f6c-unknow\u5168\u5c4f")
                }, e.prototype.update = function() {
                    -1 == this._scrllingFlag ? this.setScrollingX(this._scrollingX - 2) : 1 == this._scrllingFlag && this.setScrollingX(this._scrollingX + 2)
                }, e.prototype.setScrollingX = function(t) {
                    var e = 160 * this.itemScale + 20,
                        o = 200 * this.itemScale + 10,
                        n = this._icons[0].length * e,
                        i = cc.winSize;
                    if (n < i.width) this._scrollingX = 0, this._scrllingFlag = -1;
                    else {
                        this._scrollingX = t;
                        var a = 50 + (n - i.width) / 2;
                        this._scrollingX > a && (this._scrollingX = a, this._scrllingFlag = -1), this._scrollingX < -a && (this._scrollingX = -a, this._scrllingFlag = 1), 0 == this._scrllingFlag && (this._scrllingFlag = -1)
                    }
                    for (var s = 0; s < this._icons.length; s++) {
                        var r = -(this._icons[s].length - 1) * e / 2,
                            c = o * (this._icons.length - 1) / 2 - s * o;
                        r += this._scrollingX;
                        for (var l = 0; l < this._icons[s].length; l++) this._icons[s][l].node.setPosition(r + l * e, c)
                    }
                }, e.prototype.onTouchBegan = function(t) {
                    var e = t.currentTouch;
                    0 != this._scrllingFlag && (this._touchId = e.getID(), this._touchX = this._scrollingX)
                }, e.prototype.onTouchMoved = function(t) {
                    var e = t.currentTouch;
                    if (this._touchId == e.getID()) {
                        var o = e.getStartLocation(),
                            n = e.getLocation();
                        this._scrollingX = this._touchX + (n.x - o.x)
                    }
                }, e.prototype.onTouchEnded = function(t) {
                    var e = this,
                        o = t.currentTouch;
                    if (this._touchId == o.getID()) {
                        this._touchId = -1;
                        var n = o.getLocation(),
                            i = this.getTouched(n);
                        if (i) {
                            var a = i.getIndex(),
                                c = s.default.getMoreGameData(a),
                                l = c.appid,
                                d = c.game_path,
                                u = c.game_name;
                            console.log("navigateTo: gIdx = " + a + " name = " + u), this.sendEvent(l, u, 0), r.default.reportTo(c.id, l, this._eventName, 1), r.default.navigateToMini(l, d, function(t) {
                                0 == t ? (e.sendEvent(l, u, 1), r.default.reportTo(c.id, l, e._eventName, 2)) : r.default.reportTo(c.id, l, e._eventName, 3)
                            })
                        }
                    }
                }, e.prototype.getTouched = function(t) {
                    for (var e = 0; e < this._icons.length; e++)
                        for (var o = 0; o < this._icons[e].length; o++)
                            if (this._icons[e][o].isTouched(t)) return this._icons[e][o];
                    return null
                }, e.prototype.onClick_close = function() {
                    this.setTouchStop(!0), this.setClose(0)
                }, e.prototype.sendEvent = function(t, e, o) {
                    var n = {
                            appId: t,
                            appName: e
                        },
                        i = this._eventName,
                        a = 1 == o ? "--\u5141\u8bb8" : "";
                    r.default.sendEvent(i + a, n), r.default.sendEvent("\u8df3\u8f6c\u603b\u8ba1-\u5168\u5c4f" + a, n)
                }, a([p(cc.Node)], e.prototype, "ndIcons", void 0), a([p(cc.Prefab)], e.prototype, "pfNavigateItem", void 0), a([p], e.prototype, "rowCnt", void 0), a([p], e.prototype, "itemScale", void 0), a([u], e)
            }(l.default);
        o.default = h, cc._RF.pop()
    }, {
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl",
        "../objs/NavigateItem": "NavigateItem",
        "./UIPop": "UIPop"
    }],
    PopOnlineRwd: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d6a7eiaHcVIrpi3kO+UcYEw", "PopOnlineRwd");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DSave"),
            c = t("../datas/GameRun"),
            l = t("../datas/Tools"),
            d = t("../objs/OnlineRwdItem"),
            u = t("./UIMgr"),
            p = t("./UIPop"),
            h = cc._decorator,
            f = h.ccclass,
            _ = h.property,
            v = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lbTime = null, e.ndTimeOverStr = null, e.brTime = null, e.armBox = null, e.rwds = [], e._refresh_pt = 0, e
                }

                return i(e, t), e.prototype.onLoad = function() {
                    for (var t = this, e = 0; e < this.rwds.length; e++) this.rwds[e].setInfo(e, function(e) {
                        t.doGetRwd(e)
                    })
                }, e.prototype.onEnable = function() {
                    this.refreshShow();
                    var t = this.rwds.length - 1;
                    this.rwds[t].isState(2) ? this.armBox.playAnimation("act_open1", 0) : this.armBox.playAnimation("act_normal", 0), this.setTouchStop(!1)
                }, e.prototype.refreshShow = function() {
                    for (var t = r.DBase.getOnlineTime(), e = [.1, .31, .52, .72, 1], o = 0, n = t, i = -1, a = 0; a < this.rwds.length; a++) {
                        t >= (c = this.getRwdUnlockTime(a)) && (i = a, n = t - c);
                        var s = 0;
                        r.DBase.isGotOnlineRwd(a) ? s = 2 : t >= c && (s = 1), this.rwds[a].setState(s)
                    }
                    if (i < 0) {
                        var c = this.getRwdUnlockTime(0);
                        o = e[0] * n / c
                    } else if (i >= this.rwds.length - 1) this.lbTime.node.active = !1, this.ndTimeOverStr.active = !0, o = 1;
                    else {
                        var l = e[i + 1] - e[i],
                            d = this.getRwdUnlockTime(i + 1) - this.getRwdUnlockTime(i);
                        o = e[i] + l * n / d
                    }
                    this.brTime.progress = o, this._refresh_pt = Math.floor(t)
                }, e.prototype.update = function() {
                    var t = r.DBase.getOnlineTime();
                    if (Math.floor(t) > this._refresh_pt && this.refreshShow(), this.lbTime.node.active)
                        for (var e = 0; e < this.rwds.length; e++) {
                            var o = this.getRwdUnlockTime(e) - t;
                            if (o > 0) {
                                this.lbTime.string = l.default.timeFormat("MM:SS", o);
                                break
                            }
                        }
                }, e.prototype.doGetRwd = function(t) {
                    var e = this;
                    r.DBase.addMoney(s.aw.Money.Diamonds, [20, 50, 100, 200, 300][t], !1), r.DBase.doGetOnlineRwd(t);
                    var o = [{
                            t: s.aw.Money.Diamonds,
                            v: 20
                        }, {
                            t: s.aw.Money.Diamonds,
                            v: 50
                        }, {
                            t: s.aw.Money.Diamonds,
                            v: 100
                        }, {
                            t: s.aw.Money.Diamonds,
                            v: 200
                        }, {
                            t: s.aw.Money.Diamonds,
                            v: 300
                        }],
                        n = o[t].t,
                        i = o[t].v;
                    t == this.rwds.length - 1 ? (this.setTouchStop(!0), this.armBox.playAnimation("act_open", 1), this.armBox.once(dragonBones.EventObject.COMPLETE, function() {
                        e.armBox.playAnimation("act_open1", 0), n == s.aw.Money.Diamonds ? u.default.instance.popGetShow.setOpen(null, {
                            type: s.aw.GetShow.Diamond,
                            value: i
                        }) : n == s.aw.Money.Golds && u.default.instance.popGetShow.setOpen(null, {
                            type: s.aw.GetShow.Gold,
                            value: i
                        }), r.DBase.addMoney(n, i, !1), r.DBase.doGetOnlineRwd(t), e.refreshShow(), e.setTouchStop(!1)
                    })) : (n == s.aw.Money.Diamonds ? u.default.instance.popGetShow.setOpen(null, {
                        type: s.aw.GetShow.Diamond,
                        value: i
                    }) : n == s.aw.Money.Golds && u.default.instance.popGetShow.setOpen(null, {
                        type: s.aw.GetShow.Gold,
                        value: i
                    }), r.DBase.addMoney(n, i, !1), r.DBase.doGetOnlineRwd(t), this.refreshShow())
                }, e.prototype.getRwdUnlockTime = function(t) {
                    return 60 * [1, 5, 10, 30, 60][t]
                }, e.prototype.onclick_close = function() {
                    this.setClose(0), c.default.playEFM("ef_ui_button")
                }, a([_(cc.Label)], e.prototype, "lbTime", void 0), a([_(cc.Node)], e.prototype, "ndTimeOverStr", void 0), a([_(cc.ProgressBar)], e.prototype, "brTime", void 0), a([_(dragonBones.ArmatureDisplay)], e.prototype, "armBox", void 0), a([_([d.default])], e.prototype, "rwds", void 0), a([f], e)
            }(p.default);
        o.default = v, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/Tools": "Tools",
        "../objs/OnlineRwdItem": "OnlineRwdItem",
        "./UIMgr": "UIMgr",
        "./UIPop": "UIPop"
    }],
    PopOver_hole: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6d58eahbuVIH6yO1kdS8NfE", "PopOver_hole");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("./UIPop"),
            r = t("../datas/GameRun"),
            c = t("../datas/Tools"),
            l = t("../datas/DSave"),
            d = t("../datas/DConfig"),
            u = t("./UIMoney"),
            p = t("../datas/DRes"),
            h = t("./UIMgr"),
            f = t("../datas/SdkCtrl"),
            _ = cc._decorator,
            v = _.ccclass,
            y = _.property,
            g = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.armSkin = null, e.lbRwdVal = null, e.lbBestTime = null, e.lbPlayTime = null, e.ndGetBtn = null, e.ndGetBtn_nor = null, e.ndGetBtn_x2 = null, e.tgGet_x2 = null, e.ndShareBtn = null, e.ndShareRwd = null, e.ndEffect = null, e.pfGold = null, e.pfDiamond = null, e.uiMoney = null, e._step = 0, e._showRwdVal = 0, e._collects = [], e
                }

                return i(e, t), e.prototype.onEnable = function() {
                    if (this._showRwdVal = 0, r.default._overInfo.firstPass) {
                        var t = p.DRes.getJson_HoleLv(r.default._lv);
                        this._showRwdVal = t[p.DRes.HoleLvsData.RwdVal]
                    }
                    this._collects = [];
                    var e = l.DSnake.getSkinIdx();
                    this.armSkin.playAnimation("skin_ui_" + e, 0), this.lbRwdVal.string = "" + this._showRwdVal;
                    var o = l.DSnake.getHoleLvBestTime(r.default._lv),
                        n = r.default._overInfo.playTime;
                    this.lbBestTime.string = c.default.timeFormat("HH:MM:SS", o), this.lbPlayTime.string = c.default.timeFormat("HH:MM:SS", n);
                    var i = !1;
                    this.tgGet_x2.node.active && (this.tgGet_x2.check(), i = !0), this.ndGetBtn_nor.active = !i, this.ndGetBtn_x2.active = i, this._step = 6, this.setTouchStop(!1), r.default.stopBGM(), r.default.playEFM("ef_ui_statistic"), this.ndShareBtn.active = !1, this.ndShareRwd.active = !1, f.default.playAds_screen(), h.default.instance.ndNativeAd && (h.default.instance.ndNativeAd.active = !0), h.default.instance.showNavigate2(!0, "\u8df3\u8f6c-overHole")
                }, e.prototype.onDisable = function() {
                    h.default.instance.ndNativeAd && (h.default.instance.ndNativeAd.active = !1), h.default.instance.showNavigate2(!1)
                }, e.prototype.update = function(t) {
                    var e = this;
                    if (this.isOpened()) {
                        if (this.tgGet_x2.node.active) {
                            var o = this.tgGet_x2.isChecked;
                            this.ndGetBtn_nor.active = !o, this.ndGetBtn_x2.active = o
                        }
                        if (7 == this._step) {
                            if (this._collects.length <= 0) return this._step = 8, this.setTouchStop(!0), void cc.tween(this.node).delay(.5).call(function() {
                                e.setClose(0)
                            }).start()
                        } else if (8 == this._step) return;
                        for (var n = 0, i = this._collects.length, a = function(e) {
                                var o = s._collects[e];
                                if (o || (n += 1), o.wt -= t, o.wt > 0) return n > 0 && (s._collects[e - n] = s._collects[e]), "continue";
                                var i = cc.instantiate(o.prefab);
                                s.ndEffect.addChild(i), i.setPosition(o.src), cc.tween(i).to(o.time, {
                                    x: o.dst.x,
                                    y: o.dst.y
                                }).call(function() {
                                    l.DBase.addMoney(o.rwdType, o.rwdVal, !0), i.removeFromParent()
                                }).start(), s._collects[e] = null, n += 1
                            }, s = this, r = 0; r < this._collects.length; r++) a(r);
                        n > 0 && this._collects.splice(i - n, n)
                    }
                }, e.prototype.setCollectRwd = function(t) {
                    var e = 5;
                    t < e && (e = t);
                    for (var o = c.default.rltPos_node(this.ndEffect, this.lbRwdVal.node), n = c.default.rltPos_node(this.ndEffect, this.uiMoney.ndDiamond), i = o.sub(n).mag() / 1e3, a = 0, s = 0; s < e; s++) {
                        var l = Math.floor(t * (s + 1) / e),
                            u = {
                                wt: .1 * s,
                                prefab: this.pfDiamond,
                                time: i,
                                src: o,
                                dst: n,
                                rwdType: d.aw.Money.Diamonds,
                                rwdVal: l - a
                            };
                        this._collects.push(u), a = l
                    }
                    r.default.playEFM("ef_gold_move")
                }, e.prototype.setCollectShareRwd = function(t) {
                    var e = 5;
                    t < e && (e = t);
                    for (var o = c.default.rltPos_node(this.ndEffect, this.ndShareRwd), n = c.default.rltPos_node(this.ndEffect, this.uiMoney.ndDiamondIcon), i = o.sub(n).mag() / 1e3, a = 0, s = 0; s < e; s++) {
                        var r = Math.floor(t * (s + 1) / e),
                            l = {
                                wt: .1 * s,
                                prefab: this.pfDiamond,
                                time: i,
                                src: o,
                                dst: n,
                                rwdType: d.aw.Money.Diamonds,
                                rwdVal: r - a
                            };
                        this._collects.push(l), a = r
                    }
                }, e.prototype.onClick_get = function() {
                    var t = this;
                    6 == this._step && (this.ndGetBtn_x2.active ? (f.default.sendEvent("\u9ed1\u6d1e\u7ed3\u7b97x2-\u5e7f\u544a\u70b9\u51fb", {}), f.default.playAds_reward(0, function(e) {
                        0 == e && (f.default.sendEvent("\u9ed1\u6d1e\u7ed3\u7b97x2-\u5e7f\u544a\u5b8c\u6210", {}), t.setCollectRwd(2 * t._showRwdVal), t._step = 7)
                    })) : (this.setCollectRwd(this._showRwdVal), this._step = 7), r.default.playEFM("ef_ui_button"))
                }, e.prototype.onClick_share = function() {
                    var t = this;
                    f.default.shareRecord(function(e) {
                        if (0 == e) t.setCollectShareRwd(200), t.ndShareBtn.active = !1, t.ndShareRwd.active = !1;
                        else {
                            var o = new cc.Node;
                            o.color = cc.Color.RED, o.setPosition(0, 0), t.ndMain.addChild(o);
                            var n = o.addComponent(cc.Label);
                            n.fontSize = 40, n.enableBold = !0, n.string = "\u5f55\u5c4f\u65f6\u95f4\u8f83\u77ed\uff0c\u5206\u4eab\u5931\u8d25", cc.tween(o).delay(2).to(1, {
                                opacity: 0
                            }).call(function() {
                                o.removeFromParent()
                            }).start()
                        }
                    }), r.default.playEFM("ef_ui_button")
                }, a([y(dragonBones.ArmatureDisplay)], e.prototype, "armSkin", void 0), a([y(cc.Label)], e.prototype, "lbRwdVal", void 0), a([y(cc.Label)], e.prototype, "lbBestTime", void 0), a([y(cc.Label)], e.prototype, "lbPlayTime", void 0), a([y(cc.Node)], e.prototype, "ndGetBtn", void 0), a([y(cc.Node)], e.prototype, "ndGetBtn_nor", void 0), a([y(cc.Node)], e.prototype, "ndGetBtn_x2", void 0), a([y(cc.Toggle)], e.prototype, "tgGet_x2", void 0), a([y(cc.Node)], e.prototype, "ndShareBtn", void 0), a([y(cc.Node)], e.prototype, "ndShareRwd", void 0), a([y(cc.Node)], e.prototype, "ndEffect", void 0), a([y(cc.Prefab)], e.prototype, "pfGold", void 0), a([y(cc.Prefab)], e.prototype, "pfDiamond", void 0), a([y(u.default)], e.prototype, "uiMoney", void 0), a([v], e)
            }(s.default);
        o.default = g, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DRes": "DRes",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl",
        "../datas/Tools": "Tools",
        "./UIMgr": "UIMgr",
        "./UIMoney": "UIMoney",
        "./UIPop": "UIPop"
    }],
    PopOver: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0cf7cvZNIVK1rrg/7faIL9I", "PopOver");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("./UIPop"),
            r = t("../datas/GameRun"),
            c = t("../datas/Tools"),
            l = t("../datas/DSave"),
            d = t("../datas/DConfig"),
            u = t("./UIMoney"),
            p = t("./UIMgr"),
            h = t("../datas/SdkCtrl"),
            f = cc._decorator,
            _ = f.ccclass,
            v = f.property,
            y = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.armSkin = null, e.lbRwdVal = null, e.lbRwdRate = null, e.lbKills = null, e.lbLen = null, e.ndGetBtn = null, e.ndGetBtn_nor = null, e.ndGetBtn_x2 = null, e.tgGet_x2 = null, e.ndShareBtn = null, e.ndShareRwd = null, e.ndEffect = null, e.pfGoldBoom = null, e.pfGold = null, e.pfDiamond = null, e.uiMoney = null, e._rwdVal = 0, e._rwdRate = 1, e._step = 0, e._showRwdVal = 0, e._showRwdVal_dst = 0, e._collects = [], e
                }

                return i(e, t), e.prototype.onEnable = function() {
                    this._rwdVal = Math.floor(r.default._overInfo.rwd), this._rwdRate = r.default._overInfo.rwdRate, this._step = 0, this._showRwdVal = this._rwdVal, this._showRwdVal_dst = this._rwdVal, this._collects = [];
                    var t = l.DSnake.getSkinIdx();
                    this.armSkin.playAnimation("skin_ui_" + t, 0), this.lbRwdVal.string = "" + this._showRwdVal, this.lbRwdRate.string = "x" + this._rwdRate.toFixed(1), this.lbKills.string = "" + r.default._overInfo.kills, this.lbLen.string = "" + r.default._overInfo.len;
                    var e = !1;
                    this.tgGet_x2.node.active && (this.tgGet_x2.check(), e = !0), this.ndGetBtn.active = !1, this.ndGetBtn_nor.active = !e, this.ndGetBtn_x2.active = e, this.setTouchStop(!1), r.default.stopBGM(), r.default.playEFM("ef_ui_statistic"), this.ndShareBtn.active = !1, this.ndShareRwd.active = !1, h.default.playAds_screen(), p.default.instance.ndNativeAd && (p.default.instance.ndNativeAd.active = !0), h.default.playAds_banner(!0), p.default.instance.showNavigate2(!0, "\u8df3\u8f6c-over")
                }, e.prototype.onDisable = function() {
                    p.default.instance.ndNativeAd && (p.default.instance.ndNativeAd.active = !1), h.default.playAds_banner(!1), p.default.instance.showNavigate2(!1)
                }, e.prototype.update = function(t) {
                    var e = this;
                    if (this.isOpened()) {
                        if (this.tgGet_x2.node.active) {
                            var o = this.tgGet_x2.isChecked;
                            this.ndGetBtn_nor.active = !o, this.ndGetBtn_x2.active = o
                        }
                        if (0 == this._step) {
                            this._step = 1;
                            var n = c.default.rltPos_node(this.ndEffect, this.lbRwdRate.node),
                                i = c.default.rltPos_node(this.ndEffect, this.lbRwdVal.node),
                                a = n.add(i.sub(n).div(2)),
                                s = cc.instantiate(this.lbRwdRate.node);
                            this.ndEffect.addChild(s), s.setPosition(n), cc.tween(s).to(.2, {
                                scale: 1.5,
                                x: a.x,
                                y: a.y
                            }).to(.2, {
                                scale: 1,
                                x: i.x,
                                y: i.y,
                                opacity: 100
                            }).call(function() {
                                e._step = 2, s.removeFromParent()
                            }).start()
                        } else if (2 == this._step) {
                            this._step = 3, this._showRwdVal_dst = Math.floor(this._rwdVal * this._rwdRate);
                            var d = c.default.rltPos_node(this.ndEffect, this.lbRwdVal.node),
                                u = cc.instantiate(this.pfGoldBoom);
                            this.ndEffect.addChild(u), u.setPosition(d), u.getComponent(cc.ParticleSystem).autoRemoveOnFinish = !0, r.default.playEFM("ef_gold_appear")
                        } else if (3 == this._step)
                            if (this._showRwdVal < this._showRwdVal_dst) {
                                var p = this._showRwdVal_dst - this._showRwdVal,
                                    h = Math.floor(p / 20);
                                h = c.default.getRange(h, 2, 20), this._showRwdVal += h, this._showRwdVal >= this._showRwdVal_dst && (this._showRwdVal = this._showRwdVal_dst, this._step = 4), this.lbRwdVal.string = "" + this._showRwdVal
                            } else this._showRwdVal = this._showRwdVal_dst, this._step = 4, this.lbRwdVal.string = "" + this._showRwdVal;
                        else if (4 == this._step) this._step = 5, this.ndGetBtn.active = !0, this.ndGetBtn.setScale(0), cc.tween(this.ndGetBtn).to(.2, {
                            scale: 1.2
                        }).to(.2, {
                            scale: 1
                        }).call(function() {
                            e._step = 6
                        }).start();
                        else if (7 == this._step) {
                            if (this._collects.length <= 0) return this._step = 8, this.setTouchStop(!0), void cc.tween(this.node).delay(.5).call(function() {
                                e.setClose(0)
                            }).start()
                        } else if (8 == this._step) return;
                        for (var f = 0, _ = this._collects.length, v = function(e) {
                                var o = y._collects[e];
                                if (o || (f += 1), o.wt -= t, o.wt > 0) return f > 0 && (y._collects[e - f] = y._collects[e]), "continue";
                                var n = cc.instantiate(o.prefab);
                                y.ndEffect.addChild(n), n.setPosition(o.src), cc.tween(n).to(o.time, {
                                    x: o.dst.x,
                                    y: o.dst.y
                                }).call(function() {
                                    l.DBase.addMoney(o.rwdType, o.rwdVal, !0), n.removeFromParent()
                                }).start(), y._collects[e] = null, f += 1
                            }, y = this, g = 0; g < this._collects.length; g++) v(g);
                        f > 0 && this._collects.splice(_ - f, f)
                    }
                }, e.prototype.setCollectRwd = function(t) {
                    var e = 5;
                    t < e && (e = t);
                    for (var o = c.default.rltPos_node(this.ndEffect, this.lbRwdVal.node), n = c.default.rltPos_node(this.ndEffect, this.uiMoney.ndGoldIcon), i = o.sub(n).mag() / 1e3, a = 0, s = 0; s < e; s++) {
                        var l = Math.floor(t * (s + 1) / e),
                            u = {
                                wt: .1 * s,
                                prefab: this.pfGold,
                                time: i,
                                src: o,
                                dst: n,
                                rwdType: d.aw.Money.Golds,
                                rwdVal: l - a
                            };
                        this._collects.push(u), a = l
                    }
                    r.default.playEFM("ef_gold_move")
                }, e.prototype.setCollectShareRwd = function(t) {
                    var e = 5;
                    t < e && (e = t);
                    for (var o = c.default.rltPos_node(this.ndEffect, this.ndShareRwd), n = c.default.rltPos_node(this.ndEffect, this.uiMoney.ndDiamondIcon), i = o.sub(n).mag() / 1e3, a = 0, s = 0; s < e; s++) {
                        var r = Math.floor(t * (s + 1) / e),
                            l = {
                                wt: .1 * s,
                                prefab: this.pfDiamond,
                                time: i,
                                src: o,
                                dst: n,
                                rwdType: d.aw.Money.Diamonds,
                                rwdVal: r - a
                            };
                        this._collects.push(l), a = r
                    }
                }, e.prototype.onClick_get = function() {
                    var t = this;
                    6 == this._step && (this.ndGetBtn_x2.active ? (h.default.sendEvent("\u666e\u901a\u7ed3\u7b97x2-\u5e7f\u544a\u70b9\u51fb", {}), h.default.playAds_reward(0, function(e) {
                        0 == e && (h.default.sendEvent("\u666e\u901a\u7ed3\u7b97x2-\u5e7f\u544a\u5b8c\u6210", {}), t.setCollectRwd(2 * t._showRwdVal_dst), t._step = 7)
                    })) : (this.setCollectRwd(this._showRwdVal_dst), this._step = 7), r.default.playEFM("ef_ui_button"))
                }, e.prototype.onClick_share = function() {
                    var t = this;
                    h.default.shareRecord(function(e) {
                        if (0 == e) t.setCollectShareRwd(200), t.ndShareBtn.active = !1, t.ndShareRwd.active = !1;
                        else {
                            var o = new cc.Node;
                            o.color = cc.Color.RED, o.setPosition(0, 0), t.ndMain.addChild(o);
                            var n = o.addComponent(cc.Label);
                            n.fontSize = 40, n.enableBold = !0, n.string = "\u5f55\u5c4f\u65f6\u95f4\u8f83\u77ed\uff0c\u5206\u4eab\u5931\u8d25", cc.tween(o).delay(2).to(1, {
                                opacity: 0
                            }).call(function() {
                                o.removeFromParent()
                            }).start()
                        }
                    }), r.default.playEFM("ef_ui_button")
                }, a([v(dragonBones.ArmatureDisplay)], e.prototype, "armSkin", void 0), a([v(cc.Label)], e.prototype, "lbRwdVal", void 0), a([v(cc.Label)], e.prototype, "lbRwdRate", void 0), a([v(cc.Label)], e.prototype, "lbKills", void 0), a([v(cc.Label)], e.prototype, "lbLen", void 0), a([v(cc.Node)], e.prototype, "ndGetBtn", void 0), a([v(cc.Node)], e.prototype, "ndGetBtn_nor", void 0), a([v(cc.Node)], e.prototype, "ndGetBtn_x2", void 0), a([v(cc.Toggle)], e.prototype, "tgGet_x2", void 0), a([v(cc.Node)], e.prototype, "ndShareBtn", void 0), a([v(cc.Node)], e.prototype, "ndShareRwd", void 0), a([v(cc.Node)], e.prototype, "ndEffect", void 0), a([v(cc.Prefab)], e.prototype, "pfGoldBoom", void 0), a([v(cc.Prefab)], e.prototype, "pfGold", void 0), a([v(cc.Prefab)], e.prototype, "pfDiamond", void 0), a([v(u.default)], e.prototype, "uiMoney", void 0), a([_], e)
            }(s.default);
        o.default = y, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl",
        "../datas/Tools": "Tools",
        "./UIMgr": "UIMgr",
        "./UIMoney": "UIMoney",
        "./UIPop": "UIPop"
    }],
    PopPause: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f82c8JyazNLjKdgdwwhqasD", "PopPause");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/GameRun"),
            r = t("../datas/SdkCtrl"),
            c = t("./UIMgr"),
            l = t("./UIPop"),
            d = cc._decorator,
            u = d.ccclass,
            p = (d.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return i(e, t), e.prototype.onEnable = function() {
                    this.setTouchStop(!1), r.default.playAds_screen(), c.default.instance.ndNativeAd && (c.default.instance.ndNativeAd.active = !0), r.default.playAds_banner(!0), c.default.instance.showNavigate2(!0, "\u8df3\u8f6c-pause")
                }, e.prototype.onDisable = function() {
                    c.default.instance.ndNativeAd && (c.default.instance.ndNativeAd.active = !1), r.default.playAds_banner(!1), c.default.instance.showNavigate2(!1)
                }, e.prototype.onClick_back = function() {
                    this.setTouchStop(!0), this.setClose(1), s.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_continue = function() {
                    this.setTouchStop(!0), this.setClose(0), s.default.playEFM("ef_ui_button")
                }, a([u], e)
            }(l.default));
        o.default = p, cc._RF.pop()
    }, {
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl",
        "./UIMgr": "UIMgr",
        "./UIPop": "UIPop"
    }],
    PopRevive: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "aaea4E1JVFGiIPJJ1LFW/xt", "PopRevive");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/GameRun"),
            r = t("../datas/SdkCtrl"),
            c = t("./UIMgr"),
            l = t("./UIPop"),
            d = cc._decorator,
            u = d.ccclass,
            p = d.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lbTimer = null, e.barTimer = null, e.rtTip = null, e.timeFull = 10, e._timer = 10, e._timerStop = !1, e._efm_id = -1, e._rtTipBase = "", e
                }

                return i(e, t), e.prototype.onLoad = function() {
                    this._rtTipBase = this.rtTip.string
                }, e.prototype.onEnable = function() {
                    this._timer = this.timeFull, this._timerStop = !1, this._efm_id = s.default.playEFM("ef_ui_contiune_timer", !0), c.default.instance.showNavigate2(!0, "\u8df3\u8f6c-revive"), r.default.playAds_banner(!0)
                }, e.prototype.onDisable = function() {
                    c.default.instance.showNavigate2(!1), r.default.playAds_banner(!1), this._efm_id >= 0 && (s.default.stopEFM(this._efm_id), this._efm_id = -1)
                }, e.prototype.reset = function(t) {
                    if (void 0 === t && (t = null), t) {
                        var e = this._rtTipBase;
                        e = (e = e.replace("XX", "" + t.len)).replace("YY", "" + t.rwd), this.rtTip.string = e, this.rtTip.node.active = !0
                    } else this.rtTip.node.active = !1
                }, e.prototype.update = function(t) {
                    this.isOpened() && !this._timerStop && (this._timer -= t, this._timer <= 0 && (this.setClose(0), this._efm_id >= 0 && (s.default.stopEFM(this._efm_id), this._efm_id = -1)));
                    var e = this._timer;
                    e = e > 0 ? e : 0, this.lbTimer.string = "" + Math.floor(e), this.barTimer.progress = e / this.timeFull
                }, e.prototype.onClick_ok = function() {
                    var t = this;
                    this._timerStop = !0, this._efm_id >= 0 && (s.default.stopEFM(this._efm_id), this._efm_id = -1), r.default.sendEvent("\u6b7b\u4ea1\u590d\u6d3b-\u5e7f\u544a\u70b9\u51fb", {}), r.default.playAds_reward(0, function(e) {
                        t._timerStop = !1, 0 == e ? (r.default.sendEvent("\u6b7b\u4ea1\u590d\u6d3b-\u5e7f\u544a\u5b8c\u6210", {}), t.setClose(1)) : t._efm_id = s.default.playEFM("ef_ui_contiune_timer", !0)
                    }), s.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_close = function() {
                    this._timerStop = !0, this._efm_id >= 0 && (s.default.stopEFM(this._efm_id), this._efm_id = -1), this.setClose(0), s.default.playEFM("ef_ui_button")
                }, a([p(cc.Label)], e.prototype, "lbTimer", void 0), a([p(cc.ProgressBar)], e.prototype, "barTimer", void 0), a([p(cc.RichText)], e.prototype, "rtTip", void 0), a([p], e.prototype, "timeFull", void 0), a([u], e)
            }(l.default);
        o.default = h, cc._RF.pop()
    }, {
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl",
        "./UIMgr": "UIMgr",
        "./UIPop": "UIPop"
    }],
    PopSign: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1f8edR8PgNFCrnFicj5/Ex5", "PopSign");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DSave"),
            c = t("../datas/GameRun"),
            l = t("../datas/SdkCtrl"),
            d = t("../datas/Tools"),
            u = t("../objs/SignDay"),
            p = t("./UIMgr"),
            h = t("./UIPop"),
            f = cc._decorator,
            _ = f.ccclass,
            v = f.property,
            y = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.btnGet = null, e.tgRwdx2 = null, e.signDays = [], e
                }

                return i(e, t), e.prototype.onEnable = function() {
                    this.refreshShow()
                }, e.prototype.refreshShow = function() {
                    var t = r.DBase.getSignTimes(),
                        e = r.DBase.getLastSignDate(),
                        o = d.default.getDate(),
                        n = this.signDays.length,
                        i = e >= o,
                        a = t % n;
                    i && 0 == a && (a = n);
                    for (var s = 0; s < n; s++) {
                        var c = 0;
                        s < a ? c = 2 : s != a || i || (c = 1), this.signDays[s].setState(c)
                    }
                    this.btnGet.node.active = !i;
                    var l = !i && 1 != a && 6 != a;
                    this.tgRwdx2.node.active = l && !1, this.tgRwdx2.check()
                }, e.prototype.onClick_get = function() {
                    var t = this,
                        e = r.DBase.getSignTimes() % this.signDays.length;
                    this.tgRwdx2.node.active && this.tgRwdx2.isChecked ? (l.default.sendEvent("\u7b7e\u5230x2-\u5e7f\u544a\u70b9\u51fb", {}), l.default.playAds_reward(0, function(o) {
                        0 == o && (l.default.sendEvent("\u7b7e\u5230x2-\u5e7f\u544a\u5b8c\u6210", {}), t.doSign(e, 2))
                    })) : this.doSign(e, 1), c.default.playEFM("ef_ui_claim")
                }, e.prototype.onClick_close = function() {
                    this.setClose(0), c.default.playEFM("ef_ui_button")
                }, e.prototype.doSign = function(t, e) {
                    var o = this;
                    void 0 === e && (e = 1);
                    var n = [{
                            t: s.aw.GetShow.Diamond,
                            v: 20
                        }, {
                            t: s.aw.GetShow.Skin,
                            v: 4
                        }, {
                            t: s.aw.GetShow.Gold,
                            v: 2e3
                        }, {
                            t: s.aw.GetShow.Gold,
                            v: 5e3
                        }, {
                            t: s.aw.GetShow.Diamond,
                            v: 150
                        }, {
                            t: s.aw.GetShow.Gold,
                            v: 15e3
                        }, {
                            t: s.aw.GetShow.Skin,
                            v: s.aw.SnakeSkin.Eagle
                        }],
                        i = n[t].t,
                        a = n[t].v;
                    i != s.aw.GetShow.Diamond && i != s.aw.GetShow.Gold || (a = Math.round(a * e)), this.signDays[t].doSignAction(function() {
                        i == s.aw.GetShow.Gold ? r.DBase.addMoney(s.aw.Money.Golds, a, !1) : i == s.aw.GetShow.Diamond ? r.DBase.addMoney(s.aw.Money.Diamonds, a, !1) : i == s.aw.GetShow.Skin && r.DSnake.setSkinGet(a, !0), p.default.instance.popGetShow.setOpen(null, {
                            type: i,
                            value: a
                        }), r.DBase.doSign(), o.refreshShow()
                    })
                }, a([v(cc.Button)], e.prototype, "btnGet", void 0), a([v(cc.Toggle)], e.prototype, "tgRwdx2", void 0), a([v(u.default)], e.prototype, "signDays", void 0), a([_], e)
            }(h.default);
        o.default = y, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl",
        "../datas/Tools": "Tools",
        "../objs/SignDay": "SignDay",
        "./UIMgr": "UIMgr",
        "./UIPop": "UIPop"
    }],
    PopSkinShop: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "bb9a32/lftHy4e6KUx6XarI", "PopSkinShop");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DRes"),
            c = t("../datas/DSave"),
            l = t("../datas/GameRun"),
            d = t("../datas/Tools"),
            u = t("../objs/SkinItem"),
            p = t("./UIPop"),
            h = cc._decorator,
            f = h.ccclass,
            _ = h.property,
            v = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.svSkins = null, e.pfSkinItem = null, e._skinList = [], e._skinShowList = [], e._selectIdx = 0, e
                }

                return i(e, t), e.prototype.onLoad = function() {
                    var t = this;
                    this.svSkins.content.removeAllChildren(), this._skinList = [];
                    for (var e = s.aw.SnakeSkin.COUNT - 1, o = 0; o < e; o++) {
                        var n = r.DRes.getJson_snakeSkin(o, r.DRes.SnakeSkinsData.Order),
                            i = cc.instantiate(this.pfSkinItem);
                        this.svSkins.content.addChild(i);
                        var a = i.getComponent(u.default);
                        a.setInfo(o, function(e, o) {
                            0 == o ? t.setSelect(e) : t.refreshShow()
                        }), this._skinList.push({
                            skinIdx: o,
                            order: n,
                            skinItem: a
                        })
                    }
                    this._skinList = this._skinList.sort(function(t, e) {
                        return t.order - e.order
                    })
                }, e.prototype.onEnable = function() {
                    var t = this;
                    this.setTouchStop(!0), this._skinShowList = [];
                    for (var e = c.DSnake.getSkinIdx(), o = 0, n = 0; n < this._skinList.length; n++) {
                        var i = this._skinList[n].skinIdx,
                            a = 1 == r.DRes.getJson_snakeSkin(i, r.DRes.SnakeSkinsData.Useable) || c.DSnake.isSkinGet(i);
                        this._skinList[n].skinItem.node.active = a, a && (e == i && (o = this._skinShowList.length), this._skinShowList.push(this._skinList[n]))
                    }
                    var s = this.svSkins.content.getContentSize(),
                        l = 280 * this._skinShowList.length + 200;
                    for (l = l > s.width ? l : s.width, this.svSkins.content.setContentSize(l, s.height), n = 0; n < this._skinShowList.length; n++) {
                        var d = Math.abs(n - o),
                            u = this._skinShowList[n].skinItem.node;
                        u.setPosition(240 + 280 * n, 0), d < 4 ? (u.setScale(0), 0 == d ? cc.tween(u).to(.2, {
                            scale: 1
                        }).delay(1).call(function() {
                            t.setTouchStop(!1)
                        }).start() : cc.tween(u).delay(.2 * d).to(.3, {
                            scale: 1
                        }).start()) : u.setScale(1)
                    }
                    this.refreshShow(), this._selectIdx = -1, this.setSelect(e), setTimeout(function() {
                        t.focusSkin(o)
                    }, .1)
                }, e.prototype.update = function() {}, e.prototype.refreshShow = function() {
                    for (var t = 0; t < this._skinShowList.length; t++) this._skinShowList[t].skinItem.refreshShow()
                }, e.prototype.setSelect = function(t) {
                    var e = this.getSkinListIdx(t);
                    this._selectIdx != e && (this._selectIdx >= 0 && this._skinShowList[this._selectIdx].skinItem.setSelected(!1), this._selectIdx = e, this._selectIdx >= 0 && this._skinShowList[this._selectIdx].skinItem.setSelected(!0))
                }, e.prototype.focusSkin = function(t, e) {
                    void 0 === e && (e = 0);
                    var o = this.svSkins.node.getContentSize(),
                        n = this.svSkins.content.getContentSize(),
                        i = this._skinShowList[t].skinItem.node.getPosition(),
                        a = n.width - o.width,
                        s = o.width / 2 - i.x;
                    s = d.default.getRange(s, -a, 0), e > 0 ? cc.tween(this.svSkins.content).to(e, {
                        x: s
                    }).start() : this.svSkins.content.setPosition(s, 0)
                }, e.prototype.getSkinListIdx = function(t) {
                    for (var e = 0; e < this._skinShowList.length; e++)
                        if (this._skinShowList[e].skinIdx == t) return e;
                    return 0
                }, e.prototype.onClick_close = function() {
                    this.setClose(0), l.default.playEFM("ef_ui_button")
                }, a([_(cc.ScrollView)], e.prototype, "svSkins", void 0), a([_(cc.Prefab)], e.prototype, "pfSkinItem", void 0), a([f], e)
            }(p.default);
        o.default = v, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DRes": "DRes",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/Tools": "Tools",
        "../objs/SkinItem": "SkinItem",
        "./UIPop": "UIPop"
    }],
    PopSkinUpgrade: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4577cIwAGBKc55Yv3eTvwP8", "PopSkinUpgrade");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DRes"),
            r = t("../datas/DSave"),
            c = t("../datas/GameRun"),
            l = t("../objs/SkinProp"),
            d = t("./UIPop"),
            u = cc._decorator,
            p = u.ccclass,
            h = u.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.aniSkin = null, e.lbSkinName = null, e.skinProps = [], e._skinIdx = 0, e
                }

                return i(e, t), e.prototype.onEnable = function() {
                    this._skinIdx = r.DSnake.getSkinIdx(), this.aniSkin.playAnimation("skin_ui_" + this._skinIdx, 0), this.lbSkinName.string = s.DRes.getJson_snakeSkin(this._skinIdx, s.DRes.SnakeSkinsData.Name);
                    for (var t = 0; t < this.skinProps.length; t++) this.skinProps[t].setInfo(this._skinIdx, t);
                    this.setOpen(null)
                }, e.prototype.onClick_close = function() {
                    this.setClose(0), c.default.playEFM("ef_ui_button")
                }, a([h(dragonBones.ArmatureDisplay)], e.prototype, "aniSkin", void 0), a([h(cc.Label)], e.prototype, "lbSkinName", void 0), a([h([l.default])], e.prototype, "skinProps", void 0), a([p], e)
            }(d.default);
        o.default = f, cc._RF.pop()
    }, {
        "../datas/DRes": "DRes",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../objs/SkinProp": "SkinProp",
        "./UIPop": "UIPop"
    }],
    PopTrialSkin: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "fe306EurntD9YEcsj9t+TaT", "PopTrialSkin");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DSave"),
            c = t("../datas/GameRun"),
            l = t("../datas/SdkCtrl"),
            d = t("../datas/Tools"),
            u = t("../objs/TrialSkinItem"),
            p = t("./UIPop"),
            h = cc._decorator,
            f = h.ccclass,
            _ = h.property,
            v = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.items = [], e._trialSkins = [], e
                }

                return i(e, t), e.prototype.onLoad = function() {
                    for (var t = this, e = 0; e < this.items.length; e++) this.items[e].init(function(e) {
                        t.doTrialSkin(e)
                    })
                }, e.prototype.onEnable = function() {
                    if (this.setTouchStop(!1), this._trialSkins.length <= 0) this.setClose(0);
                    else {
                        for (var t = 0, e = 0; e < this.items.length; e++)
                            if (this._trialSkins.length > 0) {
                                t += 1, this.items[e].node.active = !0;
                                var o = d.default.randomRangeInt(0, this._trialSkins.length);
                                this.items[e].setSkinIdx(this._trialSkins[o]), this._trialSkins.splice(o, 1)
                            } else this.items[e].node.active = !1;
                        var n = [
                            [0],
                            [-200, 200],
                            [-330, 0, 330]
                        ];
                        for (e = 0; e < t; e++) this.items[e].node.setPosition(n[t - 1][e], -10)
                    }
                }, e.prototype.onClick_close = function() {
                    this.setTouchStop(!0), this.setClose(0)
                }, e.prototype.initTrialSkins = function() {
                    this._trialSkins = [];
                    for (var t = s.aw.SnakeSkin.Nor_Cnt; t < s.aw.SnakeSkin.Enemy; t++) r.DSnake.isSkinGet(t) || this._trialSkins.push(t);
                    return this._trialSkins.length > 0
                }, e.prototype.doTrialSkin = function(t) {
                    var e = this;
                    this.setTouchStop(!0), l.default.playAds_reward(0, function(o) {
                        0 == o ? (c.default._trialSkin = t, e.setClose(1)) : e.setTouchStop(!1)
                    })
                }, a([_([u.default])], e.prototype, "items", void 0), a([f], e)
            }(p.default);
        o.default = v, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl",
        "../datas/Tools": "Tools",
        "../objs/TrialSkinItem": "TrialSkinItem",
        "./UIPop": "UIPop"
    }],
    RankItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6deb3rY/EtMR7Hii9J9a5wN", "RankItem");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = cc._decorator,
            r = s.ccclass,
            c = s.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lbName = null, e.lbLen = null, e
                }

                return i(e, t), e.prototype.setInfo = function(t, e) {
                    this.lbName.string = t, this.lbLen.string = "" + e
                }, a([c(cc.Label)], e.prototype, "lbName", void 0), a([c(cc.Label)], e.prototype, "lbLen", void 0), a([r], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    SdkCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "8fc3eyiIcVD94j14p96s8ic", "SdkCtrl"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = t("./DConfig"),
            i = t("./DSave"),
            a = t("./GameRun"),
            s = function() {
                function t() {}

                return t.init = function() {}, t.isOk_init = function() {
                    return !0
                }, t.initAds = function() {}, t.login = function() {}, t.exitGame = function() {}, t.moreGame = function() {}, t.share = function() {}, t.navigateToMini = function() {}, t.sendEvent = function(t, e) {
                    void 0 === e && (e = {})
                }, t.getSwitches = function() {}, t.getShareInfo = function() {}, t.gameLogin = function() {}, t.reportFrom = function() {}, t.reportTo = function() {}, t.reportEvent = function() {}, t.reportADInfo = function() {}, t.initAds_reward = function() {}, t.loadAds_reward = function() {}, t.playAds_reward = function(t, e) {
                    var o = this;
                    this._adReward_idx = t, this._adReward_overCB = e, console.log("--------- playAds_reward call");
                    var that = this;
                    var n = window.MetaAd;
                    n ? (console.log("--------- playAds_reward start"), cc.game.pause(), n.show(function(data) {
                        console.log("--------- playAds_reward succ"), cc.game.resume();
                        if (data.code != 10000) {//10001 修改
                            that.overAds_reward(0);//1
                            return;
                        }
                        o.overAds_reward(0);
                    })) : (console.log("--------- playAds_reward error"), this.overAds_reward(0))//1
                }, t.overAds_reward = function(t) {
                    if (a.default.resumeBGM(), this._adReward_overCB) {
                        var e = this._adReward_overCB;
                        this._adReward_overCB = null, setTimeout(function() {
                            e(t)
                        }, .1), 0 == t && (i.DDaily.addProg(n.aw.Daily.WatchAds, 1), this.sendEvent("\u5e7f\u544a\u603b\u8ba1-\u5b8c\u6210"))
                    }
                }, t.initAds_screen = function() {}, t.loadAds_screen = function() {}, t.playAds_screen = function() {}, t.initAds_banner = function(t) {
                    void 0 === t && (t = null)
                }, t.loadAds_banner = function() {}, t.playAds_banner = function(t, e, o, n) {
                    void 0 === e && (e = !1), void 0 === o && (o = null), void 0 === n && (n = null)
                }, t.initAds_custom = function() {}, t.loadAds_custom = function() {}, t.playAds_custom = function() {}, t.initAds_native = function() {}, t.loadAds_native = function() {}, t.playAds_native = function() {}, t.onShow_native = function() {}, t.onClick_native = function() {}, t.onClose_native = function() {}, t.initAds_grid = function() {}, t.loadAds_grid = function() {}, t.playAds_grid = function(t, e) {
                    void 0 === e && (e = 0)
                }, t.initRecord = function() {}, t.startRecord = function() {}, t.stopRecord = function() {}, t.shareRecord = function() {}, t._adReward_idx = 0, t._adReward_loaded = !1, t._adReward_overCB = null, t
            }();
        o.default = s, cc._RF.pop()
    }, {
        "./DConfig": "DConfig",
        "./DSave": "DSave",
        "./GameRun": "GameRun"
    }],
    SignDay: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "057c6rIr1BJ3r/v8Orw11gQ", "SignDay");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = cc._decorator,
            r = s.ccclass,
            c = s.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndUnlock = null, e.ndGot = null, e.armShow = null, e._state = 0, e
                }

                return i(e, t), e.prototype.setState = function(t) {
                    this._state = t, this.ndUnlock && (this.ndUnlock.active = 1 == this._state), this.ndGot && (this.ndGot.active = 2 == this._state)
                }, e.prototype.doSignAction = function(t) {
                    if (this.ndGot) {
                        var e = t;
                        t = null, e && (e(), e = null), this.ndGot.active = !0, this.ndGot.setScale(0), cc.tween(this.ndGot).to(.2, {
                            scale: 1
                        }).start()
                    }
                }, a([c(cc.Node)], e.prototype, "ndUnlock", void 0), a([c(cc.Node)], e.prototype, "ndGot", void 0), a([c(dragonBones.ArmatureDisplay)], e.prototype, "armShow", void 0), a([r], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    SkinItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "aa788+TYphHEbwLpULuknTy", "SkinItem");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DRes"),
            c = t("../datas/DSave"),
            l = t("../datas/GameRun"),
            d = t("../UI/UIMgr"),
            u = cc._decorator,
            p = u.ccclass,
            h = u.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.btnMain = null, e.btnUse = null, e.ndBg_nor = null, e.ndBg_dragon = null, e.ndBg_Eagle = null, e.ndBg_Turtle = null, e.ndSelected = null, e.lbName = null, e.armShow = null, e.ndIconGold = null, e.ndIconDiamond = null, e.ndIconSign1 = null, e.ndIconSign2 = null, e.ndIconGot = null, e.ndIconUsed = null, e.lbPrice = null, e._skinIdx = 0, e._clickCB = null, e
                }

                return i(e, t), e.prototype.setInfo = function(t, e) {
                    this._skinIdx = t, this._clickCB = e;
                    var o = 0;
                    o = t == s.aw.SnakeSkin.Dragon || t == s.aw.SnakeSkin.Dragon2 ? 1 : o, o = t == s.aw.SnakeSkin.Eagle || t == s.aw.SnakeSkin.Eagle2 ? 2 : o, o = t == s.aw.SnakeSkin.Turtle || t == s.aw.SnakeSkin.Turtle2 ? 3 : o, this.ndBg_nor.active = 0 == o, this.ndBg_dragon.active = 1 == o, this.ndBg_Eagle.active = 2 == o, this.ndBg_Turtle.active = 3 == o;
                    var n = r.DRes.getJson_snakeSkin(this._skinIdx, r.DRes.SnakeSkinsData.Name);
                    this.lbName.string = n, this.refreshShow(), this.setSelected(!1)
                }, e.prototype.refreshShow = function() {
                    var t = c.DSnake.isSkinGet(this._skinIdx),
                        e = c.DSnake.getSkinIdx() == this._skinIdx;
                    if (t) this.ndIconGold.active = !1, this.ndIconDiamond.active = !1, this.lbPrice.node.active = !1, this.ndIconSign1.active = !1, this.ndIconSign2.active = !1, this.ndIconGot.active = !e, this.ndIconUsed.active = e;
                    else {
                        this.ndIconGot.active = !1, this.ndIconUsed.active = !1;
                        var o = r.DRes.getJson_snakeSkin(this._skinIdx, r.DRes.SnakeSkinsData.PriceType),
                            n = r.DRes.getJson_snakeSkin(this._skinIdx, r.DRes.SnakeSkinsData.PriceValue);
                        this.ndIconGold.active = 0 == o, this.ndIconDiamond.active = 1 == o, this.ndIconSign1.active = 2 == o, this.ndIconSign2.active = 3 == o, this.lbPrice.node.active = 0 == o || 1 == o, this.lbPrice.string = "" + n
                    }
                }, e.prototype.setSelected = function(t) {
                    this.ndSelected.active = t;
                    var e = "skin_ui_" + this._skinIdx;
                    t ? (this.armShow.playAnimation(e, 0), this.btnMain.node.setScale(1.1)) : (this.armShow.playAnimation(e + "a", 0), this.btnMain.node.setScale(1)), this.btnUse.interactable = t
                }, e.prototype.onClick_skin = function() {
                    this._clickCB && this._clickCB(this._skinIdx, 0), l.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_use = function() {
                    var t = this;
                    if (this.ndIconGold.active) {
                        var e = r.DRes.getJson_snakeSkin(this._skinIdx, r.DRes.SnakeSkinsData.PriceValue);
                        c.DBase.addMoney(s.aw.Money.Golds, -e) ? (c.DSnake.setSkinGet(this._skinIdx, !1), c.DSnake.setSkinIdx(this._skinIdx, !0), this._clickCB && this._clickCB(this._skinIdx, 1), d.default.instance.popGetShow.setOpen(null, {
                            type: s.aw.GetShow.Skin,
                            value: this._skinIdx
                        }), l.default.playEFM("ef_ui_buy")) : (cc.log("gold is not enough"), d.default.instance.popGift.setOpen(null, {
                            index: s.aw.GiftIndex.Gold
                        }))
                    } else this.ndIconDiamond.active ? (e = r.DRes.getJson_snakeSkin(this._skinIdx, r.DRes.SnakeSkinsData.PriceValue), c.DBase.addMoney(s.aw.Money.Diamonds, -e) ? (c.DSnake.setSkinGet(this._skinIdx, !1), c.DSnake.setSkinIdx(this._skinIdx, !0), this._clickCB && this._clickCB(this._skinIdx, 1), d.default.instance.popGetShow.setOpen(null, {
                        type: s.aw.GetShow.Skin,
                        value: this._skinIdx
                    }), l.default.playEFM("ef_ui_buy")) : (cc.log("diamond is not enough"), d.default.instance.popGift.setOpen(null, {
                        index: s.aw.GiftIndex.Diamond
                    }))) : this.ndIconGot.active ? (c.DSnake.setSkinIdx(this._skinIdx), this._clickCB && this._clickCB(this._skinIdx, 1), l.default.playEFM("ef_ui_button")) : (this.ndIconSign1.active || this.ndIconSign2.active) && d.default.instance.popSign.setOpen(function(e) {
                        1 == e && t.refreshShow()
                    })
                }, a([h(cc.Button)], e.prototype, "btnMain", void 0), a([h(cc.Button)], e.prototype, "btnUse", void 0), a([h(cc.Node)], e.prototype, "ndBg_nor", void 0), a([h(cc.Node)], e.prototype, "ndBg_dragon", void 0), a([h(cc.Node)], e.prototype, "ndBg_Eagle", void 0), a([h(cc.Node)], e.prototype, "ndBg_Turtle", void 0), a([h(cc.Node)], e.prototype, "ndSelected", void 0), a([h(cc.Label)], e.prototype, "lbName", void 0), a([h(dragonBones.ArmatureDisplay)], e.prototype, "armShow", void 0), a([h(cc.Node)], e.prototype, "ndIconGold", void 0), a([h(cc.Node)], e.prototype, "ndIconDiamond", void 0), a([h(cc.Node)], e.prototype, "ndIconSign1", void 0), a([h(cc.Node)], e.prototype, "ndIconSign2", void 0), a([h(cc.Node)], e.prototype, "ndIconGot", void 0), a([h(cc.Node)], e.prototype, "ndIconUsed", void 0), a([h(cc.Label)], e.prototype, "lbPrice", void 0), a([p], e)
            }(cc.Component);
        o.default = f, cc._RF.pop()
    }, {
        "../UI/UIMgr": "UIMgr",
        "../datas/DConfig": "DConfig",
        "../datas/DRes": "DRes",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun"
    }],
    SkinProp: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "088121bVXtMDbsPSOx331t8", "SkinProp");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DSave"),
            c = t("../datas/GameRun"),
            l = t("../datas/SdkCtrl"),
            d = t("../UI/UIMgr"),
            u = cc._decorator,
            p = u.ccclass,
            h = u.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lbLv = null, e.lbLvProg = null, e.lbVal = null, e.brLvProg = null, e.lbPrice = null, e.ndBtnGold = null, e.ndBtnAd = null, e.ndBtnMax = null, e._skinIdx = 0, e._propIdx = 0, e._price = 0, e
                }

                return i(e, t), e.prototype.setInfo = function(t, e) {
                    this._skinIdx = t, this._propIdx = e, this.refreshShow()
                }, e.prototype.refreshShow = function() {
                    var t = this._skinIdx,
                        e = this._propIdx,
                        o = r.DSnake.getSkinPropLv(t, e),
                        n = r.DSnake.getSkinPropLvMax(t, e),
                        i = r.DSnake.getSkinPropVal(t, e),
                        a = 5;
                    o > 1 && (a = 5 * Math.floor((o - 1) / 5) + 5), this.lbLv.string = "LV." + o, this.lbLvProg.string = o + "/" + a, this._price = 100 + 50 * o, this.lbPrice.string = "" + this._price;
                    var s = o % 5;
                    o > 0 && 0 == s && (s = 5), this.brLvProg.progress = s / 5, 0 == this._propIdx ? this.lbVal.string = "" + i : this.lbVal.string = i + "%", this.ndBtnMax.active = o >= n, this.ndBtnGold.active = o < n && o != a, this.ndBtnAd.active = o < n && o == a
                }, e.prototype.onClick_gold = function() {
                    r.DBase.addMoney(s.aw.Money.Golds, -this._price) ? (r.DSnake.doSkinPropUpgrade(this._skinIdx, this._propIdx), this.refreshShow(), c.default.playEFM("ef_ui_claim")) : d.default.instance.popGift.setOpen(null, {
                        index: s.aw.GiftIndex.Gold
                    })
                }, e.prototype.onClick_ad = function() {
                    var t = this;
                    l.default.sendEvent("\u86c7\u86c7\u8fdb\u5316-\u5e7f\u544a\u70b9\u51fb", {}), l.default.playAds_reward(0, function(e) {
                        0 == e && (l.default.sendEvent("\u86c7\u86c7\u8fdb\u5316-\u5e7f\u544a\u5b8c\u6210", {}), r.DSnake.doSkinPropUpgrade(t._skinIdx, t._propIdx), t.refreshShow())
                    }), c.default.playEFM("ef_ui_claim")
                }, a([h(cc.Label)], e.prototype, "lbLv", void 0), a([h(cc.Label)], e.prototype, "lbLvProg", void 0), a([h(cc.Label)], e.prototype, "lbVal", void 0), a([h(cc.ProgressBar)], e.prototype, "brLvProg", void 0), a([h(cc.Label)], e.prototype, "lbPrice", void 0), a([h(cc.Node)], e.prototype, "ndBtnGold", void 0), a([h(cc.Node)], e.prototype, "ndBtnAd", void 0), a([h(cc.Node)], e.prototype, "ndBtnMax", void 0), a([p], e)
            }(cc.Component);
        o.default = f, cc._RF.pop()
    }, {
        "../UI/UIMgr": "UIMgr",
        "../datas/DConfig": "DConfig",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl"
    }],
    SnakeMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "55d41fbfA1EAYGHPSt2nQaY", "SnakeMgr");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DRes"),
            c = t("../datas/DSave"),
            l = t("../datas/GameRun"),
            d = t("../datas/Tools"),
            u = t("../objs/PlayerSnake"),
            p = t("../UI/UIMgr"),
            h = s.aw.SnakeSkin,
            f = s.aw.SnakeTimer,
            _ = cc._decorator,
            v = _.ccclass,
            y = (_.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.gameCtrl = null, e._players = [], e._checkSnakeColSpace = 0, e
                }

                return i(e, t), e.prototype.initMgr = function(t, e) {
                    void 0 === e && (e = 10), this.gameCtrl = t, this._players = [], this.node.removeAllChildren();
                    for (var o = 0; o < e; o++) {
                        var n = cc.instantiate(p.default.instance.ndBaseSnake);
                        this.node.addChild(n);
                        var i = n.getComponent(u.default);
                        this._players.push(i)
                    }
                    this._players.reverse();
                    var a = c.DSnake.getSkinIdx();
                    l.default._trialSkin >= 0 && (a = l.default._trialSkin);
                    var f = [];
                    for (o = 0; o < h.Nor_Cnt; o++) {
                        var _ = r.DRes.getJson_snakeSkin(o, r.DRes.SnakeSkinsData.Useable);
                        o != a && 1 == _ && f.push(o)
                    }
                    var v = r.DRes.getJson_nameSnakeCnt(),
                        y = [];
                    for (o = 0; o < v; o++) y.push(o);
                    for (o = 0; o < e; o++) {
                        var g = o == s.default.Pid_Hero,
                            m = o == s.default.Pid_Boss,
                            S = o,
                            k = a,
                            b = 0,
                            w = this.getBornPos(g);
                        if (g) {
                            var R = c.DSnake.getSkinPropVal(k, 0);
                            b = this._players[o]._snake.getScore_len(R - this._players[o]._snake._lenMin)
                        } else if (l.default.isMode(s.aw.Mode.Snake_Hole)) S = 100, b = 100 * (10 + d.default.randomRangeInt(0, 20)), k = s.aw.SnakeSkin.Enemy;
                        else if (m && !l.default.isMode(s.aw.Mode.Snake_Endless)) b = 100 * (300 + d.default.randomRangeInt(0, 50)), l.default.isMode(s.aw.Mode.Snake_Dragon) ? k = s.aw.SnakeSkin.Dragon : l.default.isMode(s.aw.Mode.Snake_Eagle) ? k = s.aw.SnakeSkin.Eagle : l.default.isMode(s.aw.Mode.Snake_Turtle) && (k = s.aw.SnakeSkin.Turtle);
                        else {
                            var I = d.default.randomRangeInt(0, f.length);
                            k = f[I], f[I] = f[f.length - 1], f.pop()
                        }
                        this._players[o].init(o, S, k, b, w);
                        var M = d.default.randomRangeInt(0, y.length);
                        this._players[o].setNameIdx(y[M]), y.splice(M, 1)
                    }
                }, e.prototype.freeMgr = function() {
                    this._players = [], this.node.removeAllChildren()
                }, e.prototype.getHero = function() {
                    return this._players[s.default.Pid_Hero]
                }, e.prototype.updateMgr = function(t) {
                    for (var e = this.gameCtrl._worldSize, o = this._players.length, n = this.getHero().getPos_head(), i = 0, a = 0; a < o; a++) {
                        var r = this._players[a],
                            c = a < 4 ? 768 : 1536;
                        if (0 == (i = r.updateSnakePlayer(t, e, n, c))) {
                            var d = r.getRadius_eatFood(),
                                u = r.getRadius_magnetFood(),
                                p = this.gameCtrl.foodMgr.checkEatFoods(r, d, u);
                            p > 0 && (r.addScore(p * r.getScoreRate_food()), r.resetTimer(f.Score_AI, 2), r.isPid_hero() && l.default.playEFM("ef_snake_eat"));
                            do {
                                if (r.isPid_hero()) break;
                                if (!r._snake.isSkin_Eagle() && !r._snake.isSkin_Turtle()) break;
                                if (!r.isTimeOver(f.Skill_CD)) break;
                                this.useSkill(r)
                            } while (0)
                        } else if (100 == i) {
                            var h = r.doDie();
                            this.gameCtrl.foodMgr.createEss(h)
                        } else if (201 == i && !r.isPid_hero()) {
                            var _ = this.getBornPos(!1);
                            r.doRevive_AI(_, 0)
                        }
                    }
                    if (this._checkSnakeColSpace -= 1, this._checkSnakeColSpace < 0)
                        for (var v = 0; v < o; v++) {
                            var y = this._players[v];
                            if (y.isLife())
                                for (var g = 0; g < o; g++) {
                                    var m = this._players[g];
                                    if (v != g && m.isLife() && !y.isSameTeam(m)) {
                                        if (y.canAttack() && y.isInvaded(m, 0) && (1 != (i = y.checkCollision_snake(m)) && 3 != i || !m.canBeKilled() || (m.setState(s.aw.SnakeState.Dead, 0), y.addKills(1), h = m.doDie(), this.gameCtrl.foodMgr.createEss(h), this.addKillShow(y, m)), 2 != i && 3 != i || !y.canBeKilled() || (y.setState(s.aw.SnakeState.Dead, 0), m.addKills(1), h = y.doDie(), this.gameCtrl.foodMgr.createEss(h), this.addKillShow(m, y))), y._skillAttacks.length > 0 && m.isLife()) {
                                            var S = 0;
                                            for (a = 0; a < y._skillAttacks.length; a++) {
                                                var k = y._skillAttacks[a],
                                                    b = k.getPosition(),
                                                    w = (c = 50 * k.scaleX, b.sub(m.getPos_head())),
                                                    R = c + m._snake.getRadius_head();
                                                if (w.magSqr() < R * R) {
                                                    S = 1;
                                                    break
                                                }
                                            }
                                            1 == S && m.canBeKilled() && (m.setState(s.aw.SnakeState.Dead, 0), y.addKills(1), h = m.doDie(), this.gameCtrl.foodMgr.createEss(h), this.addKillShow(y, m))
                                        }!m.isPid_hero() && m.isLife() && y.isInvaded(m, 100) && m.checkWarning_snake_AI(y, 60)
                                    }
                                }
                        }
                    l.default.isMode(s.aw.Mode.Snake_Hole) && this.gameCtrl.holeMgr.checkAttacked(this.getHero())
                }, e.prototype.getBornPos = function(t) {
                    var e = this.gameCtrl._worldSize,
                        o = this.gameCtrl._camCenter;
                    return t ? (o.x += d.default.randomRange(-512, 512), o.y += d.default.randomRange(-512, 512)) : (o.x = d.default.randomRange(256, e.x - 256), o.y = d.default.randomRange(256, e.y - 256)), o
                }, e.prototype.useSkill = function(t) {
                    var e = this,
                        o = 5;
                    if (t.isPid_hero() || (o = d.default.randomRange(3, 5)), t.resetTimer(f.Skill_CD, o), t._snake.isSkin_Turtle()) t.ndSkill.active = !0, t.armSkill.playAnimation("boss_eff", 1), t.armSkill.on(dragonBones.EventObject.COMPLETE, function() {
                        "boss_eff" == t.armSkill.animationName ? (t.armSkill.playAnimation("boss_eff1", 1), e.doSkillAttack(t)) : "boss_eff1" == t.armSkill.animationName && (t.ndSkill.active = !1, t.armSkill.off(dragonBones.EventObject.COMPLETE))
                    }), l.default.playEFM("ef_snake_skill2");
                    else if (t._snake.isSkin_Eagle()) {
                        for (var n = t.getPos_head(), i = t._snake.getAngle(), a = function(e) {
                                var o = cc.instantiate(p.default.instance.ndBaseSkill_eagle);
                                s.gameCtrl.ndEffectMgr.addChild(o), t._skillAttacks.push(o);
                                var a = (i + 20 * (e - 1)) * Math.PI / 180,
                                    r = cc.v2(20, 0).rotate(a).add(n),
                                    c = cc.v2(600, 0).rotate(a).add(n);
                                o.setPosition(r), o.setScale(.25), cc.tween(o).to(.5, {
                                    x: c.x,
                                    y: c.y,
                                    scaleX: 1,
                                    scaleY: 1
                                }).delay(.2).to(.2, {
                                    opacity: 0
                                }).call(function() {
                                    var e = t._skillAttacks.indexOf(o);
                                    e >= 0 && t._skillAttacks.splice(e, 1), o.removeFromParent()
                                }).start()
                            }, s = this, r = 0; r < 3; r++) a(r);
                        l.default.playEFM("ef_snake_skill1")
                    }
                }, e.prototype.doSkillAttack = function(t) {
                    if (t.isLife() && t._snake.isSkin_Turtle()) {
                        var e = t.ndSkill.getPosition(),
                            o = 180 * t.ndSkill.scaleX;
                        t.isPid_hero() || (o *= 1.25);
                        for (var n = 0; n < this._players.length; n++) {
                            var i = this._players[n];
                            if (i._pid != t._pid && i.canBeKilled()) {
                                var a = i.getPos_head().sub(e),
                                    r = i._snake.getRadius_head() + o;
                                if (a.magSqr() < r * r) {
                                    i.setState(s.aw.SnakeState.Dead, 0), t.addKills(1);
                                    var c = i.doDie();
                                    this.gameCtrl.foodMgr.createEss(c), this.addKillShow(t, i)
                                }
                            }
                        }
                    }
                }, e.prototype.addKillShow = function(t, e) {
                    if (!l.default.isMode(s.aw.Mode.Snake_Hole)) {
                        var o = t.getName(),
                            n = t._snake._skin,
                            i = e.getName(),
                            a = e._snake._skin;
                        this.gameCtrl._uiGame.addKillShow(o, n, i, a), l.default.playEFM("ef_snake_kill");
                        for (var r = t._kills, c = [1, 2, 3, 4, 5, 10, 15, 20, 25], d = 0; d < c.length; d++) r == c[d] && l.default.playEFM("ef_snake_kill" + r)
                    }
                }, a([v], e)
            }(cc.Component));
        o.default = y, cc._RF.pop()
    }, {
        "../UI/UIMgr": "UIMgr",
        "../datas/DConfig": "DConfig",
        "../datas/DRes": "DRes",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/Tools": "Tools",
        "../objs/PlayerSnake": "PlayerSnake"
    }],
    Snake: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "26ab6QCOxJIiazUbip/XKFh", "Snake");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DRes"),
            c = t("../datas/Tools"),
            l = s.aw.SnakeSkin,
            d = cc._decorator,
            u = d.ccclass,
            p = d.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndHead = null, e.ndTail = null, e.ndBody = null, e.armHead = null, e.armTail = null, e._skin = 0, e._lenMin = 0, e._lenMax = 0, e._lenDst = 0, e._bodys = [], e._paths = [], e._angle = 0, e._forceArea = new cc.Rect, e
                }

                return i(e, t), e.prototype.setSkin = function(t) {
                    this._skin = t, this.armHead.playAnimation("skin_" + this._skin, 0), this.ndTail.active = this.isSkin_hasTail()
                }, e.prototype.isSkin_boss = function() {
                    return this.isSkin_dragon() || this.isSkin_Eagle() || this.isSkin_Turtle()
                }, e.prototype.isSkin_dragon = function() {
                    return this._skin == l.Dragon || this._skin == l.Dragon2
                }, e.prototype.isSkin_Eagle = function() {
                    return this._skin == l.Eagle || this._skin == l.Eagle2
                }, e.prototype.isSkin_Turtle = function() {
                    return this._skin == l.Turtle || this._skin == l.Turtle2
                }, e.prototype.isSkin_noBody = function() {
                    return this.isSkin_Eagle() || this.isSkin_Turtle()
                }, e.prototype.isSkin_hasTail = function() {
                    return this._skin == l.Dragon
                }, e.prototype.setLenLimit = function(t, e) {
                    void 0 === t && (t = 4), void 0 === e && (e = 500), this._lenMin = t, this._lenMax = e
                }, e.prototype.setLenDst = function(t) {
                    this._lenDst = c.default.getRange(t, this._lenMin, this._lenMax)
                }, e.prototype.setLenDst_score = function(t) {
                    this.setLenDst(this.getLenDst_Score(t))
                }, e.prototype.setAngle = function(t) {
                    this._angle = t, this.ndHead.angle = this._angle - 90
                }, e.prototype.getAngle = function() {
                    return this._angle
                }, e.prototype.getScale = function(t) {
                    void 0 === t && (t = -1);
                    var e = .3,
                        o = t - this._lenMin;
                    return o < 0 && (o = this._lenDst - this._lenMin), e += Math.sqrt(o) / 35, e = Math.min(e, 1), this.isSkin_noBody() ? e = .5 + 1.5 * (e - .3) / .7 : this.isSkin_boss() && (e *= 1.25), e
                }, e.prototype.getRadius_body = function(t) {
                    return void 0 === t && (t = -1), t <= 0 && (t = this.getScale()), this.isSkin_noBody() ? 75 * t : 50 * t
                }, e.prototype.getRadius_head = function(t) {
                    return void 0 === t && (t = -1), t <= 0 && (t = this.getScale()), this.isSkin_noBody() ? 30 * t : 50 * t
                }, e.prototype.getPos_neck = function() {
                    var t = this.ndHead.getPosition();
                    return this._paths.length > 0 && (t = this._paths[0].p), t.clone()
                }, e.prototype.getPos_head = function() {
                    var t = this.getPos_neck(),
                        e = this.getHeight_head();
                    if (e < 1) return t;
                    var o = cc.v2(e, 0).rotate(this._angle * Math.PI / 180);
                    return t.add(o)
                }, e.prototype.getHeight_head = function() {
                    return r.DRes.getJson(r.DRes.snakeSkins)[this._skin][r.DRes.SnakeSkinsData.HeadHeight] * this.getScale()
                }, e.prototype.getScore_body = function(t) {
                    var e = 800;
                    return e += t > 200 ? t * (30 + t) : t > 160 ? t * (30 + t / 2) : t > 130 ? t * (30 + t / 3) : t > 100 ? t * (30 + t / 4) : t > 50 ? t * (30 + t / 5) : t * (30 + t / 6), e = Math.min(e, 2e4), Math.floor(e)
                }, e.prototype.getScore_len = function(t) {
                    for (var e = 0, o = t - this._lenMin, n = 0; n < o; n++) e += this.getScore_body(n);
                    return e
                }, e.prototype.getLenDst_Score = function(t) {
                    for (var e = 0;;) {
                        var o = this.getScore_body(e);
                        if (o > t) break;
                        t -= o, ++e
                    }
                    var n = e + this._lenMin;
                    return n > this._lenMax && (n = this._lenMax), n
                }, e.prototype.isForceInvaded = function(t, e) {
                    var o = t.getPos_head(),
                        n = t.getRadius_head(),
                        i = new cc.Rect(o.x - n, o.y - n, 2 * n, 2 * n),
                        a = this._forceArea.x - e,
                        s = this._forceArea.y - e,
                        r = this._forceArea.width + 2 * e,
                        c = this._forceArea.height + 2 * e;
                    return new cc.Rect(a, s, r, c).intersects(i)
                }, e.prototype.getForceArea = function() {
                    return this._forceArea
                }, e.prototype.addBody = function() {
                    var t = this._bodys.length,
                        e = new cc.Node("body");
                    this.ndBody.addChild(e), this._bodys.push(e), e.setSiblingIndex(0);
                    var o = 0,
                        n = r.DRes.getJson(r.DRes.snakeSkins)[this._skin][r.DRes.SnakeSkinsData.BodyPieces];
                    return n > 1 && (o = Math.floor(t % n)), e.addComponent(cc.Sprite).spriteFrame = r.DRes.getImage_snakeSkin(this._skin, o), e
                }, e.prototype.delBody = function() {
                    return this._bodys.length > this._lenMin && (this._bodys.pop().removeFromParent(), !0)
                }, e.prototype.addPath = function(t, e) {
                    this._paths.unshift({
                        p: t.clone(),
                        a: e
                    })
                }, e.prototype.delPath = function() {
                    this._paths.pop()
                }, e.prototype.initBodys = function(t, e) {
                    void 0 === e && (e = 0), this.ndBody.removeAllChildren(), this._bodys = [], this._paths = [];
                    var o = this.getLenDst_Score(e);
                    this.setLenDst(o), this.moveBodys(t, this._angle)
                }, e.prototype.moveBodys = function(t, e) {
                    var o = this.getScale(),
                        n = this.getRadius_body(o),
                        i = 2 * n,
                        a = this._angle * Math.PI / 180;
                    this.setAngle(e), this.ndHead.setScale(o), this.ndHead.setPosition(t), this.addPath(t, this._angle);
                    for (var s = this.getBodyPathSpace(o), r = this._paths.length, c = (this._lenDst + 1) * s; r > c;) this.delPath(), --r;
                    var l = t;
                    if (this.isSkin_Eagle()) l = t.sub(cc.v2(20 * o, 0).rotate(a)), this._forceArea = new cc.Rect(l.x - n, l.y - n, i, i);
                    else if (this.isSkin_Turtle()) l = t.add(cc.v2(10 * o, 0).rotate(a)), this._forceArea = new cc.Rect(l.x - n, l.y - n, i, i);
                    else {
                        var d = this._bodys.length;
                        for (d < this._lenDst && (this.addBody(), ++d); d > this._lenDst;) this.delBody(), --d;
                        l = this.getPos_head(), this._forceArea = new cc.Rect(l.x - n, l.y - n, i, i);
                        for (var u = 0; u < d; u++) {
                            var p = this._paths[r - 1],
                                h = (u + 1) * s - 1,
                                f = this._bodys[u];
                            if (h >= r - 1 + s) f.active = !1;
                            else if (h >= r - 1 && this.ndTail.active) f.active = !1;
                            else {
                                h < r && (p = this._paths[h]), f.active = !0, f.setPosition(p.p), f.angle = p.a - 90, f.setScale(o);
                                var _ = new cc.Rect(p.p.x - n, p.p.y - n, i, i);
                                this._forceArea.union(this._forceArea, _)
                            }
                        }
                    }
                    if (this.ndTail.active) {
                        var v = this._paths[r - 1];
                        this.ndTail.setPosition(v.p), this.ndTail.angle = v.a - 90, this.ndTail.setScale(o)
                    }
                }, e.prototype.getBodyPathSpace = function(t) {
                    return void 0 === t && (t = -1), t <= 0 && (t = this.getScale()), Math.ceil(Math.max(8 * t, 4))
                }, e.prototype.doDie = function() {
                    var t = [];
                    if (this.isSkin_noBody()) {
                        var e = this.getPos_neck(),
                            o = this.getRadius_body(),
                            n = this._lenDst;
                        n = c.default.getRange(n, 10, 50);
                        for (var i = 0; i < n; i++) {
                            var a = c.default.randomRange(0, 360),
                                s = c.default.randomRange(0, o),
                                r = cc.v2(s, 0).rotate(a * Math.PI / 180);
                            t.push(r.add(e))
                        }
                    } else {
                        var l = this._bodys.length;
                        for (i = 0; i < l; i++) {
                            r = this._bodys[i].getPosition();
                            var d = c.default.randomRange(-15, 15),
                                u = c.default.randomRange(-15, 15);
                            t.push(r.add(cc.v2(d, u)))
                        }
                    }
                    return t
                }, e.prototype.checkCollision_border = function(t) {
                    var e = this.getRadius_head();
                    return this.checkWarning_border(t, e)
                }, e.prototype.checkWarning_border = function(t, e) {
                    var o = this.getPos_head(),
                        n = 0,
                        i = 0;
                    return o.x < e ? n = 1 : o.x > t.x - e && (n = 2), o.y < e ? i = 1 : o.y > t.y - e && (i = 2), {
                        x: n,
                        y: i
                    }
                }, e.prototype.checkCollision_snake = function(t) {
                    var e = this.getRadius_head() + t.getRadius_head(),
                        o = e * e,
                        n = t.getPos_head(),
                        i = n.sub(this.getPos_head());
                    if (i.magSqr() < o) return 2;
                    if (this.isSkin_noBody()) {
                        if (e = this.getRadius_body() + t.getRadius_head(), (i = n.sub(this.getPos_neck())).magSqr() < e * e) return 1
                    } else
                        for (var a = this._bodys.length, s = 0; s < a; s++)
                            if (this._bodys[s].active && (i = n.sub(this._bodys[s].getPosition())).magSqr() < o) return 1;
                    return 0
                }, e.prototype.checkWarning_snake = function(t, e) {
                    var o = this.getPos_head(),
                        n = e + this.getRadius_head() + t.getRadius_body(),
                        i = n * n,
                        a = {
                            f: 0,
                            a: 0
                        };
                    if (t.isSkin_noBody())(u = (d = o.sub(t.getPos_neck())).magSqr()) < (n += 30 * t.getScale()) * n && u > 64 && (a.f = 1, a.a = 180 * Math.atan2(d.y, d.x) / Math.PI);
                    else {
                        for (var s = !1, r = cc.v2(1, 0).rotate(this._angle * Math.PI / 180), c = t._bodys.length, l = 0; l < c; l++) {
                            var d, u;
                            if (t._bodys[l].active && !((u = (d = o.sub(t._bodys[l].getPosition())).magSqr()) > i || u < 64)) {
                                var p = Math.sqrt(u);
                                r = r.add(d.mul(1.2 * n / p)), s = !0
                            }
                        }
                        s && (a.f = 1, a.a = 180 * Math.atan2(r.y, r.x) / Math.PI)
                    }
                    return a
                }, e.prototype.checkAttackHole = function(t) {
                    var e = this.getPos_head().sub(t.node.getPosition()),
                        o = t.getRudius() + this.getRadius_head();
                    if (e.magSqr() < o * o) {
                        if (this._lenDst - this._lenMin <= 0) return {
                            flag: 0,
                            op: null,
                            score: 0
                        };
                        var n = this.getScore_len(this._lenDst - 1),
                            i = this.getPos_neck(),
                            a = this.getBodyPathSpace();
                        return a >= this._paths.length && (a = this._paths.length - 1), this._paths.splice(0, a), {
                            flag: 1,
                            op: this.getPos_neck().sub(i),
                            score: n
                        }
                    }
                    return null
                }, e.prototype.checkAttackInsect = function(t) {
                    var e = t.node.getPosition(),
                        o = this.getRadius_head() + t.getRadius(),
                        n = o * o,
                        i = {
                            flag: 0,
                            repelA: 0
                        },
                        a = this.getPos_head(),
                        s = e.sub(a);
                    if (s.magSqr() < n) i.flag = 1, i.repelA = Math.atan2(s.y, s.x);
                    else if (this.isSkin_noBody())(l = e.sub(this.getPos_neck())).magSqr() < n && (i.flag = 1, i.repelA = Math.atan2(l.y, l.x));
                    else
                        for (var r = this._bodys.length, c = 0; c < r; c++) {
                            var l;
                            if (this._bodys[c].active && (l = e.sub(this._bodys[c].getPosition())).magSqr() < n) {
                                i.flag = 1, i.repelA = Math.atan2(l.y, l.x);
                                break
                            }
                        }
                    return i
                }, a([p(cc.Node)], e.prototype, "ndHead", void 0), a([p(cc.Node)], e.prototype, "ndTail", void 0), a([p(cc.Node)], e.prototype, "ndBody", void 0), a([p(dragonBones.ArmatureDisplay)], e.prototype, "armHead", void 0), a([p(dragonBones.ArmatureDisplay)], e.prototype, "armTail", void 0), a([u], e)
            }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DRes": "DRes",
        "../datas/Tools": "Tools"
    }],
    Tools: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "94d6bXAs3tNk74lcU4wgMTB", "Tools"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var n = function() {
            function t() {}

            return t.adjustAngle = function(t, e) {
                void 0 === e && (e = !0);
                var o = e ? 2 * Math.PI : 360,
                    n = t % o;
                return n < 0 ? n + o : n
            }, t.angleToPI = function(t) {
                return t * Math.PI / 180
            }, t.PIToAngle = function(t) {
                return 180 * t / Math.PI
            }, t.getRange = function(t, e, o) {
                return t > o && (t = o), t < e && (t = e), t
            }, t.changeRect = function(t, e) {
                var o = t.x - e,
                    n = t.y - e,
                    i = t.width + 2 * e,
                    a = t.height + 2 * e;
                return new cc.Rect(o, n, i, a)
            }, t.randomRange = function(t, e) {
                var o = e - t;
                return o <= 0 ? t : t + Math.random() * o % o
            }, t.randomRangeInt = function(t, e) {
                var o = this.randomRange(t, e);
                return Math.floor(o)
            }, t.rltPos_node = function(t, e) {
                var o = e.convertToWorldSpaceAR(cc.v2(0, 0));
                return t.convertToNodeSpaceAR(o)
            }, t.rltPos_wp = function(t, e) {
                return t.convertToNodeSpaceAR(e)
            }, t.timeFormat = function(t, e) {
                var o = e,
                    n = (t.toUpperCase(), t.indexOf("H")),
                    i = t.indexOf("HH");
                if (n >= 0 || i >= 0) {
                    var a = Math.floor(o / 3600);
                    o -= 3600 * a, t = i >= 0 ? t.replace("HH", (a > 9 ? "" : "0") + a) : t.replace("H", "" + a)
                }
                if (n = t.indexOf("M"), i = t.indexOf("MM"), n >= 0 || i >= 0) {
                    var s = Math.floor(o / 60);
                    o -= 60 * s, t = i >= 0 ? t.replace("MM", (s > 9 ? "" : "0") + s) : t.replace("M", "" + s)
                }
                if (n = t.indexOf("S"), i = t.indexOf("SS"), n >= 0 || i >= 0) {
                    var r = Math.floor(o);
                    t = i >= 0 ? t.replace("SS", (r > 9 ? "" : "0") + r) : t.replace("S", "" + r)
                }
                return t
            }, t.getDate = function() {
                var t = new Date,
                    e = 1e4 * t.getFullYear();
                return (e += 100 * (t.getMonth() + 1)) + t.getDate()
            }, t.getTime = function() {
                var t = new Date,
                    e = 1e4 * t.getHours();
                return (e += 100 * t.getMinutes()) + t.getSeconds()
            }, t.ajax = function(t) {
                var e = new XMLHttpRequest;
                if (e.timeout = t.timeout || 5e3, "get" == t.type) {
                    var o = "";
                    for (var n in t.data) o += "&" + n + "=" + t.data[n];
                    o = o.slice(1);
                    var i = t.url + "?" + o;
                    e.open("get", i), e.send()
                } else "post" == t.type && (e.open("post", t.url), e.setRequestHeader("content-type", "application/x-www-form-urlencoded"), e.send(JSON.stringify(t.data)));
                e.onreadystatechange = function() {
                    4 == e.readyState && 200 == e.status ? (console.log("ajax\uff1a\u8bf7\u6c42\u6210\u529f"), t.success && t.success(e.responseText)) : 200 != e.status && (console.log("ajax\uff1a\u8bf7\u6c42\u5931\u8d25"), t.error && t.error(e.status))
                }
            }, t.compareVersion = function(t, e) {
                for (var o = t.split("."), n = e.split("."), i = 0; i < o.length; i++) {
                    if (i >= n.length) return 1;
                    var a = parseInt(o[i]),
                        s = parseInt(n[i]);
                    if (a > s) return 1;
                    if (s < a) return -1
                }
                return o.length == n.length ? 0 : -1
            }, t.M_2PI = 2 * Math.PI, t.M_PI2 = Math.PI / 2, t.M_PI0 = 0, t.M_PI90 = Math.PI / 2, t.M_PI180 = Math.PI, t.M_PI270 = 3 * Math.PI / 2, t.M_PI360 = 2 * Math.PI, t
        }();
        o.default = n, cc._RF.pop()
    }, {}],
    TrialSkinItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "57478c2pgpCBJ13cKC5gaH8", "TrialSkinItem");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DRes"),
            r = t("../datas/GameRun"),
            c = cc._decorator,
            l = c.ccclass,
            d = c.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lbName = null, e.armShow = null, e._onClickCB = null, e._skinIdx = -1, e
                }

                return i(e, t), e.prototype.init = function(t) {
                    this._onClickCB = t
                }, e.prototype.setSkinIdx = function(t) {
                    this._skinIdx = t, this.lbName.string = s.DRes.getJson_snakeSkin(t, s.DRes.SnakeSkinsData.Name), this.armShow.playAnimation("skin_ui_" + t, 0)
                }, e.prototype.onClick = function() {
                    this._onClickCB && this._onClickCB(this._skinIdx), r.default.playEFM("ef_ui_button")
                }, a([d(cc.Label)], e.prototype, "lbName", void 0), a([d(dragonBones.ArmatureDisplay)], e.prototype, "armShow", void 0), a([l], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "../datas/DRes": "DRes",
        "../datas/GameRun": "GameRun"
    }],
    UIAdPrivacy: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d2ab1HDnFFH4KpprQRQ1Pyc", "UIAdPrivacy");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/SdkCtrl"),
            r = cc._decorator,
            c = r.ccclass,
            l = (r.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }

                return i(e, t), e.prototype.onClick_yes = function() {
                    this.node.active = !1
                }, e.prototype.onClick_no = function() {
                    s.default.exitGame()
                }, a([c], e)
            }(cc.Component));
        o.default = l, cc._RF.pop()
    }, {
        "../datas/SdkCtrl": "SdkCtrl"
    }],
    UICommRun: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "aaf7d+sBbRH7Zyj6jQ+I+lX", "UICommRun");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DSave"),
            r = t("./UIMgr"),
            c = t("./UIRound"),
            l = cc._decorator,
            d = l.ccclass,
            u = (l.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e._mineTimer = 0, e
                }

                return i(e, t), e.prototype.update = function(t) {
                    if (s.default.updateAll(t), r.default.instance.ndRound.active) this._mineTimer = 0;
                    else {
                        var e = s.DBase.getMineTime();
                        if (e < this._mineTimer) {
                            var o = c.default.RWD_CAR_TIMES * s.DBase.getMineCarCnt();
                            s.DBase.isMineBuffTimeOver(2) || (o *= 2), s.DBase.addMineRwd(o, !1)
                        }
                        this._mineTimer = e
                    }
                }, a([d], e)
            }(cc.Component));
        o.default = u, cc._RF.pop()
    }, {
        "../datas/DSave": "DSave",
        "./UIMgr": "UIMgr",
        "./UIRound": "UIRound"
    }],
    UIGame: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "127a0/MtEVJr5wEIQFkt5t1", "UIGame");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/GameRun"),
            c = t("../datas/SdkCtrl"),
            l = t("../datas/Tools"),
            d = t("../game/GameCtrl"),
            u = t("../objs/BuffItem"),
            p = t("../objs/KillShow"),
            h = t("../objs/NavigateIcon"),
            f = t("./UIMgr"),
            _ = t("./UIMiniMap"),
            v = cc._decorator,
            y = v.ccclass,
            g = v.property,
            m = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndGameCtrl = null, e.ndRank = null, e.ndMiniMap = null, e.ndEffect = null, e.ndMovePanel = null, e.ndMovePoint = null, e.ndBlust = null, e.btnSkill = null, e.barSkill = null, e.btnItem = null, e.barItem = null, e.spItemIcon = null, e.lbScore = null, e.lbKills = null, e.lbRwds = null, e.lbTime = null, e.buffItems = [], e.icons_NVGT = [], e._gameCtrl = null, e._move_sp = null, e._move_mr = 100, e._touch_sp = null, e._touch_cp = null, e._touch_id = 0, e._blust_mr = 100, e._touchBlust = !1, e._touchBlust_id = 0, e._blustEFM_id = -1, e._itemTimer_CD = 0, e._navigateTimer = 0, e
                }

                return i(e, t), e.prototype.onLoad = function() {
                    this._gameCtrl = this.ndGameCtrl.getComponent(d.default), this.ndMiniMap.getComponent(_.default).initMiniMap(this._gameCtrl), this._move_sp = this.ndMovePanel.getPosition(), this._move_mr = (this.ndMovePanel.getContentSize().width + this.ndMovePoint.getContentSize().width) / 2, this._touch_sp = null, this._touch_cp = null, this._touch_id = -1, this._blust_mr = this.ndBlust.getContentSize().width / 2, this._touchBlust = !1, this._touchBlust_id = -1, this.initShowNavigates()
                }, e.prototype.sendEvent = function(t, e, o) {
                    var n = {
                            appId: t,
                            appName: e
                        },
                        i = 1 == o ? "--\u5141\u8bb8" : "";
                    c.default.sendEvent("\u8df3\u8f6c-game" + i, n), c.default.sendEvent("\u8df3\u8f6c\u603b\u8ba1" + i, n)
                }, e.prototype.onEnable = function() {
                    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
                    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
                    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this), this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnded, this), this._touch_sp = null, this._touch_cp = null, this._touch_id = -1, this._touchBlust = !1, this._touchBlust_id = -1;
                    var t = r.default.isMode(s.aw.Mode.Snake_Hole);
                    this.ndMiniMap.active = t, this.ndRank.active = !t, this.ndEffect.removeAllChildren(), this.lbScore.node.parent.active = !t, this.lbKills.node.parent.active = !t, this.lbRwds.node.parent.active = !t, this.lbTime.node.parent.active = t;
                    for (var e = 0; e < this.buffItems.length; e++) this.buffItems[e].node.active = !1;
                    this.btnItem.node.active = r.default._useItemIdx >= 0, this.btnItem.node.active && (this.spItemIcon.spriteFrame = f.default.instance.sfItemIcons[r.default._useItemIdx]), r.default.playBGM("bg_game"), this.setShowNavigates(!0)
                }, e.prototype.onKeyUp = function(t) {
                    if (t.keyCode == 32) {
                        this._touchBlust_id = -1;
                        this._touchBlust = !1;
                    }
                }, e.prototype.onKeyDown = function(t) {
                    if (t.keyCode == 90) {
                        if (this.btnSkill.node.active && this.btnSkill.interactable) {
                            this.onClick_skill();
                        }
                    } else if (t.keyCode == 32) {
                        this._touchBlust = !0;
                    }
                }, e.prototype.onDisable = function() {
                    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
                    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
                    this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this), this.node.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this), this.node.off(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this), this.node.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnded, this), c.default.playAds_custom(!1, 1)
                }, e.prototype.start = function() {}, e.prototype.update = function(t) {
                    this.updateShowNavigates(t);
                    var e = this._gameCtrl.snakeMgr.getHero();
                    if (e) {
                        if (this._touch_cp && this._touch_sp) {
                            var o = this._touch_cp.sub(this._touch_sp);
                            if (o.lengthSqr() > 100) {
                                var n = Math.atan2(o.y, o.x);
                                e.setAngleDst(180 * n / Math.PI, !0)
                            }
                        }
                        var i = Math.floor(e._score * e.getScoreRate_show());
                        this.lbScore.string = "" + i, this.lbKills.string = "" + e._kills, this.lbRwds.string = "" + Math.floor(e._rwdVal), this.lbTime.string = l.default.timeFormat("MM:SS", e._playTime), this._touchBlust ? e.doBlust() : this._blustEFM_id >= 0 && (r.default.stopEFM(this._blustEFM_id), this._blustEFM_id = -1)
                    }
                    for (var a = 0; a < this.buffItems.length; a++) this.buffItems[a].node.active = !1;
                    var c = e._buffInfo,
                        d = c.length,
                        u = 0 - 70 * (d - 1);
                    for (a = 0; a < d; a++) {
                        var p = c[a].idx;
                        this.buffItems[p].node.active = !0, this.buffItems[p].node.setPosition(u + 70 * a, 0);
                        var h = r.default.getItemTime(p, !0);
                        this.buffItems[p].setInfo(c[a].timer, h)
                    }
                    if (this.btnItem.node.active) {
                        var f = e.getBuff(r.default._useItemIdx) >= 0,
                            _ = r.default.getItemTime_CD(r.default._useItemIdx);
                        if (f) this._itemTimer_CD = _, this.barItem.progress = 1, this.btnItem.interactable = !1;
                        else {
                            this._itemTimer_CD -= t;
                            var v = this._itemTimer_CD / _;
                            this.barItem.progress = l.default.getRange(v, 0, 1), this.btnItem.interactable = v <= 0
                        }
                    }
                    this.btnSkill.node.active = e._snake.isSkin_noBody(), this.btnSkill.node.active && (v = e.getTimeRate(s.aw.SnakeTimer.Skill_CD), this.barSkill.node.active = v < 1, this.barSkill.progress = l.default.getRange(1 - v, 0, 1), this.btnSkill.interactable = v >= 1)
                }, e.prototype.initShowNavigates = function() {
                    var t = this;
                    if (r.default.isShowMoreGame()) {
                        var e = r.default.getMoreGameCnt(),
                            o = function(o) {
                                n.icons_NVGT[o].node.active = !0;
                                var i = o % e;
                                n.icons_NVGT[o].setIndex(i, !1), n.icons_NVGT[o].setClickCB(function(e) {
                                    var o = r.default.getMoreGameData(e),
                                        n = o.appid,
                                        a = o.game_path,
                                        s = o.game_name;
                                    console.log("navigateTo: idx = " + i + " gIdx = " + e + " name = " + s), t.sendEvent(n, s, 0), c.default.reportTo(o.id, n, "\u8df3\u8f6c-game", 1), c.default.navigateToMini(n, a, function(e) {
                                        0 == e ? (t.sendEvent(n, s, 1), c.default.reportTo(o.id, n, "\u8df3\u8f6c-game", 2)) : c.default.reportTo(o.id, n, "\u8df3\u8f6c-game", 3)
                                    })
                                })
                            },
                            n = this;
                        for (i = 0; i < this.icons_NVGT.length; i++) o(i)
                    } else
                        for (var i = 0; i < this.icons_NVGT.length; i++) this.icons_NVGT[i].node.active = !1
                }, e.prototype.setShowNavigates = function(t) {
                    if (!r.default.isShowMoreGame()) return this._navigateTimer = -1, void c.default.playAds_custom(!0, 1);
                    this._navigateTimer = 0;
                    for (var e = 0; e < this.icons_NVGT.length; e++) this.icons_NVGT[e].node.active = t
                }, e.prototype.updateShowNavigates = function(t) {
                    if (r.default.isShowMoreGame() && !(this._navigateTimer < 0) && (this._navigateTimer += t, this._navigateTimer > 5)) {
                        this._navigateTimer = 0;
                        for (var e = r.default.getMoreGameCnt(), o = 0; o < this.icons_NVGT.length; o++) {
                            var n = (this.icons_NVGT[o]._index + this.icons_NVGT.length) % e;
                            this.icons_NVGT[o].setIndex(n, !0)
                        }
                    }
                }, e.prototype.onTouchBegan = function(t) {
                    var e = t.currentTouch,
                        o = t.getLocation();
                    if (this._touch_id < 0) {
                        this._touch_sp = null, this._touch_cp = null;
                        var n = this.node.convertToNodeSpaceAR(o);
                        if (o.x < cc.winSize.width / 2) return this._move_sp = this.ndMovePanel.getPosition(), this.ndMovePanel.setPosition(n.clone()), this._touch_sp = cc.v2(0, 0), this._touch_id = e.getID(), void this.ndMovePoint.setPosition(cc.v2(0, 0))
                    }
                    this._touchBlust_id < 0 && (this._touchBlust = !1, (n = this.ndBlust.convertToNodeSpaceAR(o)).lengthSqr() < this._blust_mr * this._blust_mr && (this._touchBlust = !0, this._touchBlust_id = e.getID()))
                }, e.prototype.onTouchMoved = function(t) {
                    var e = t.currentTouch,
                        o = t.getLocation();
                    if (this._touch_sp && e.getID() == this._touch_id) return o = this.ndMovePanel.convertToNodeSpaceAR(o), this._touch_cp = o.clone(), o.lengthSqr() > this._move_mr * this._move_mr && (o = o.normalize().mul(this._move_mr)), void this.ndMovePoint.setPosition(o)
                }, e.prototype.onTouchEnded = function(t) {
                    var e = t.currentTouch;
                    this._touch_sp && e.getID() == this._touch_id && (this._touch_sp = null, this._touch_cp = null, this._touch_id = -1, this.ndMovePanel.setPosition(this._move_sp), this.ndMovePoint.setPosition(cc.v2(0, 0))), this._touchBlust && e.getID() == this._touchBlust_id && (this._touchBlust_id = -1, this._touchBlust = !1)
                }, e.prototype.onClick_blust = function() {
                    var t = this._gameCtrl.snakeMgr.getHero();
                    t && (t.doBlust(), this._blustEFM_id = r.default.playEFM("ef_snake_speed", !0))
                }, e.prototype.onClick_skill = function() {
                    var t = this._gameCtrl.snakeMgr.getHero();
                    this._gameCtrl.snakeMgr.useSkill(t), r.default.playEFM("ef_snake_growth")
                }, e.prototype.onClick_item = function() {
                    if (r.default._useItemIdx >= 0) {
                        var t = this._gameCtrl.snakeMgr.getHero();
                        t.isLife() && (t.addBuff(r.default._useItemIdx, -1), r.default.playEFM("ef_ui_button"))
                    }
                }, e.prototype.onClick_pause = function() {
                    var t = this;
                    r.default._isPause = !0, f.default.instance.popPause.setOpen(function(e, o) {
                        1 == e && (1 == o ? t._gameCtrl.doBack() : r.default._isPause = !1)
                    }), r.default.playEFM("ef_ui_button")
                }, e.prototype.addKillShow = function(t, e, o, n) {
                    var i = cc.instantiate(f.default.instance.ndBaseKillShow);
                    this.ndEffect.addChild(i), i.setPosition(0, 200), i.getComponent(p.default).setShow(t, e, o, n)
                }, a([g(cc.Node)], e.prototype, "ndGameCtrl", void 0), a([g(cc.Node)], e.prototype, "ndRank", void 0), a([g(cc.Node)], e.prototype, "ndMiniMap", void 0), a([g(cc.Node)], e.prototype, "ndEffect", void 0), a([g(cc.Node)], e.prototype, "ndMovePanel", void 0), a([g(cc.Node)], e.prototype, "ndMovePoint", void 0), a([g(cc.Node)], e.prototype, "ndBlust", void 0), a([g(cc.Button)], e.prototype, "btnSkill", void 0), a([g(cc.ProgressBar)], e.prototype, "barSkill", void 0), a([g(cc.Button)], e.prototype, "btnItem", void 0), a([g(cc.ProgressBar)], e.prototype, "barItem", void 0), a([g(cc.Sprite)], e.prototype, "spItemIcon", void 0), a([g(cc.Label)], e.prototype, "lbScore", void 0), a([g(cc.Label)], e.prototype, "lbKills", void 0), a([g(cc.Label)], e.prototype, "lbRwds", void 0), a([g(cc.Label)], e.prototype, "lbTime", void 0), a([g([u.default])], e.prototype, "buffItems", void 0), a([g([h.default])], e.prototype, "icons_NVGT", void 0), a([y], e)
            }(cc.Component);
        o.default = m, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl",
        "../datas/Tools": "Tools",
        "../game/GameCtrl": "GameCtrl",
        "../objs/BuffItem": "BuffItem",
        "../objs/KillShow": "KillShow",
        "../objs/NavigateIcon": "NavigateIcon",
        "./UIMgr": "UIMgr",
        "./UIMiniMap": "UIMiniMap"
    }],
    UIHealth: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b66b9RnQbVIrbbunrGBwbiY", "UIHealth");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/GameRun"),
            r = cc._decorator,
            c = r.ccclass,
            l = r.property,
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndLoading = null, e._timer = 0, e
                }

                return i(e, t), e.prototype.onLoad = function() {
                    s.default.load_bundles()
                }, e.prototype.onEnable = function() {
                    this._timer = 0
                }, e.prototype.update = function(t) {
                    this._timer >= 0 && (this._timer += t, this._timer > 3 && s.default.isLoadOver_bundles() && (this._timer = -1, this.node.active = !1, this.ndLoading.active = !0))
                }, a([l(cc.Node)], e.prototype, "ndLoading", void 0), a([c], e)
            }(cc.Component);
        o.default = d, cc._RF.pop()
    }, {
        "../datas/GameRun": "GameRun"
    }],
    UILoading: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "43a1bFX3ndCrY9Htg7JCi+U", "UILoading");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DRes"),
            r = t("../datas/DSave"),
            c = t("../datas/GameRun"),
            l = t("../datas/SdkCtrl"),
            d = cc._decorator,
            u = d.ccclass,
            p = d.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.bar = null, e.loadProgMax = 10, e.loadProgShow = 0, e.loadProgCur = [], e.enterFlag = 0, e
                }

                return i(e, t), e.prototype.start = function() {
                    this.loadProgMax = 40, this.loadProgShow = 0, this.bar.progress = 0, this.enterFlag = 0, c.default.load_bundles(), l.default.init()
                }, e.prototype.loadResources = function() {
                    var t = this;
                    this.loadProgCur.push(0), s.DRes.load_json(function(e) {
                        t.loadProgCur[0] = Math.floor(30 * e)
                    }, function() {
                        t.loadProgMax += 20
                    }), this.loadProgCur.push(0), s.DRes.load_images(function(e) {
                        t.loadProgCur[1] = Math.floor(30 * e)
                    }, function() {
                        t.loadProgMax += 20
                    }), this.loadProgCur.push(0), s.DRes.load_musics(function(e) {
                        t.loadProgCur[2] = Math.floor(30 * e)
                    }, function() {
                        t.loadProgMax += 20
                    })
                }, e.prototype.update = function() {
                    0 == this.enterFlag && c.default.isLoadOver_bundles() && (this.enterFlag = 1, this.loadResources()), this.loadProgShow += .5;
                    for (var t = 10, e = 0; e < this.loadProgCur.length; e++) t += this.loadProgCur[e];
                    t < this.loadProgMax && (t = this.loadProgMax), this.loadProgShow >= 100 ? (this.loadProgShow = 100, 1 == this.enterFlag && (this.enterFlag = 2, r.default.loadAll(), cc.director.loadScene("Game"))) : this.loadProgShow > this.loadProgMax && (this.loadProgShow = this.loadProgMax), this.bar.progress = this.loadProgShow / 100
                }, a([p(cc.ProgressBar)], e.prototype, "bar", void 0), a([u], e)
            }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {
        "../datas/DRes": "DRes",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl"
    }],
    UIMapLv_hole: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "9434fKKZVlF3bzJG2Lq5WUy", "UIMapLv_hole");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DSave"),
            c = t("../datas/GameRun"),
            l = t("../datas/SdkCtrl"),
            d = t("../objs/MapLv"),
            u = t("./PopMapLv_hole"),
            p = t("./UIMgr"),
            h = t("./UIScene"),
            f = cc._decorator,
            _ = f.ccclass,
            v = f.property,
            y = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.pvLvs = null, e.ndPre = null, e.ndNxt = null, e.pfLv = null, e.popMapLv = null, e._lvs = [], e._selectLv = -1, e
                }

                var o;
                return i(e, t), o = e, e.prototype.onLoad = function() {
                    var t = this;
                    this.pvLvs.removeAllPages(), this._lvs = [], this._selectLv = -1;
                    for (var e = 0, n = Math.ceil(o.Lv_Cnt / (o.Page_Row * o.Page_Col)), i = this.pvLvs.node.getContentSize(), a = -150 * (o.Page_Col - 1) / 2, s = 150 * (o.Page_Row - 1) / 2, r = 0; r < n; r++) {
                        var c = new cc.Node;
                        c.setContentSize(i), c.setAnchorPoint(cc.v2(.5, .5)), this.pvLvs.addPage(c);
                        for (var u = 0; u < o.Page_Row; u++) {
                            for (var p = 0; p < o.Page_Col; p++) {
                                var h = cc.instantiate(this.pfLv);
                                c.addChild(h), h.setPosition(cc.v2(a + 150 * p, s + -150 * u));
                                var f = h.getComponent(d.default);
                                if (f.setShow(e, function(e) {
                                        t.doClickLv(e)
                                    }), this._lvs.push(f), (e += 1) >= o.Lv_Cnt) break
                            }
                            if (e >= o.Lv_Cnt) break
                        }
                        if (e >= o.Lv_Cnt) break
                    }
                    l.default.startRecord()
                }, e.prototype.onEnable = function() {
                    var t = this;
                    c.default.playBGM("bg_game"), l.default.playAds_banner(!0), p.default.instance.showNavigate2(!0, "\u8df3\u8f6c-mapLv");
                    var e = function(e) {
                        t.showAction(function() {
                            0 == Math.floor(c.default._playGameTimes % 2) && e && p.default.instance.popJackpot.setOpen(null)
                        })
                    };
                    c.default._backFromGame ? (c.default._backFromGame = !1, e(!0)) : e(!1)
                }, e.prototype.onDisable = function() {
                    l.default.playAds_banner(!1), p.default.instance.showNavigate2(!1)
                }, e.prototype.showAction = function(t) {
                    var e = this,
                        n = r.DSnake.getHoleLvPassed(),
                        i = o.Page_Row * o.Page_Col,
                        a = Math.floor(n / i);
                    this.pvLvs.setCurrentPageIndex(a);
                    for (var s = a * i, c = 0; c < this._lvs.length; c++) {
                        var l = this._lvs[c];
                        if (l.refreshShow(), l.node.setScale(1), c >= s && c < s + i) {
                            var d = c - s;
                            l.node.setScale(0), c == s + i - 1 ? cc.tween(l.node).delay(.1 * d).to(.2, {
                                scale: 1.2
                            }).to(.1, {
                                scale: 1
                            }).call(function() {
                                e.setTouchStop(!1), t && t()
                            }).start() : cc.tween(l.node).delay(.1 * d).to(.2, {
                                scale: 1.2
                            }).to(.1, {
                                scale: 1
                            }).start()
                        }
                    }
                    this._selectLv = -1, this.setSelectLv(n), this.ndTouchStop.active = !0, this.doEnter()
                }, e.prototype.update = function() {
                    var t = this.pvLvs.getCurrentPageIndex(),
                        e = this.pvLvs.getPages().length;
                    this.ndPre.active = t > 0, this.ndNxt.active = t < e - 1
                }, e.prototype.doClickLv = function(t) {
                    var e = this;
                    this.setSelectLv(t), this._selectLv >= 0 && (cc.log("enter level", this._selectLv + 1), c.default.startGame(s.aw.Mode.Snake_Hole, this._selectLv), this.popMapLv.setOpen(function(t, o) {
                        1 == t && 0 == o && (p.default.instance.showNavigate2(!1), c.default.startGame(s.aw.Mode.Snake_Hole, e._selectLv), e.doExit(function() {
                            e.node.active = !1, p.default.instance.ndGame.active = !0
                        }))
                    }))
                }, e.prototype.setSelectLv = function(t) {
                    t != this._selectLv && (this._selectLv >= 0 && this._lvs[this._selectLv].setSelected(!1), this._selectLv = t, this._selectLv >= 0 && this._lvs[this._selectLv].setSelected(!0))
                }, e.prototype.onClick_back = function() {
                    var t = this;
                    this.doExit(function() {
                        t.node.active = !1, p.default.instance.ndMenu.active = !0
                    }), c.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_pre = function() {
                    if (!this.pvLvs.isScrolling()) {
                        var t = this.pvLvs.getCurrentPageIndex() - 1;
                        t >= 0 && this.pvLvs.scrollToPage(t, .3), c.default.playEFM("ef_ui_button")
                    }
                }, e.prototype.onClick_nxt = function() {
                    if (!this.pvLvs.isScrolling()) {
                        var t = this.pvLvs.getCurrentPageIndex() + 1;
                        t < this.pvLvs.getPages().length && this.pvLvs.scrollToPage(t, .3), c.default.playEFM("ef_ui_button")
                    }
                }, e.Lv_Cnt = 100, e.Page_Row = 3, e.Page_Col = 6, a([v(cc.PageView)], e.prototype, "pvLvs", void 0), a([v(cc.Node)], e.prototype, "ndPre", void 0), a([v(cc.Node)], e.prototype, "ndNxt", void 0), a([v(cc.Prefab)], e.prototype, "pfLv", void 0), a([v(u.default)], e.prototype, "popMapLv", void 0), o = a([_], e)
            }(h.default);
        o.default = y, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl",
        "../objs/MapLv": "MapLv",
        "./PopMapLv_hole": "PopMapLv_hole",
        "./UIMgr": "UIMgr",
        "./UIScene": "UIScene"
    }],
    UIMenu: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "835f1FSOUZDHqTjsWXZ3dpn", "UIMenu");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DRes"),
            c = t("../datas/DSave"),
            l = t("../datas/GameRun"),
            d = t("../datas/SdkCtrl"),
            u = t("../datas/Tools"),
            p = t("./UIMgr"),
            h = t("./UIMoney"),
            f = t("./UIScene"),
            _ = cc._decorator,
            v = _.ccclass,
            y = _.property,
            g = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.armSkin = null, e.uiMiney = null, e.ndDailyTip = null, e.lbDailyTipDeco = null, e.ndNavigateBtn = null, e._skinIdx = 0, e
                }

                var o;
                return i(e, t), o = e, e.prototype.onEnable = function() {
                    this._skinIdx = c.DSnake.getSkinIdx(), this.armSkin.playAnimation("skin_ui_" + this._skinIdx, 0), this.ndNavigateBtn.active = l.default.isShowMoreGame(), ++o.EnterTimes, this.setTouchStop(!1), l.default.playBGM("bg_game"), this.refreshShowDailyTip(), d.default.startRecord(), d.default.playAds_banner(!0), p.default.instance.showNavigate2(!0, "\u8df3\u8f6c-menu"), this.onEnterStart()
                }, e.prototype.onDisable = function() {
                    d.default.playAds_banner(!1), p.default.instance.showNavigate2(!1)
                }, e.prototype.onEnterStart = function() {
                    this.doEnter(function() {
                        l.default._backFromGame && (l.default._backFromGame = !1, 0 == Math.floor(l.default._playGameTimes % 2) && p.default.instance.popJackpot.setOpen(null))
                    })
                }, e.prototype.refreshShowDailyTip = function() {
                    var t = c.DDaily.getIndex_notFinished();
                    if (t >= 0) {
                        this.ndDailyTip.active = !0;
                        var e = r.DRes.getJson_daily(t),
                            o = e[r.DRes.DailysData.Deco],
                            n = e[r.DRes.DailysData.Target];
                        this.lbDailyTipDeco.string = o.replace("XX", "" + n)
                    } else this.ndDailyTip.active = !1
                }, e.prototype.update = function() {
                    var t = c.DSnake.getSkinIdx();
                    t != this._skinIdx && (this._skinIdx = t, this.armSkin.playAnimation("skin_ui_" + this._skinIdx, 0))
                }, e.prototype.onClick_daily = function() {
                    var t = this;
                    p.default.instance.popDaily.setOpen(function(e) {
                        0 == e && t.refreshShowDailyTip()
                    }), l.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_sign = function() {
                    d.default.playAds_banner(!1), p.default.instance.popSign.setOpen(function(t) {
                        1 == t && d.default.playAds_banner(!0)
                    }), l.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_skinShop = function() {
                    p.default.instance.showNavigate2(!1), p.default.instance.popSkinShop.setOpen(function(t) {
                        1 == t && p.default.instance.showNavigate2(!0, "\u8df3\u8f6c-menu")
                    }), l.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_skinUpgrade = function() {
                    p.default.instance.popSkinUpgrade.setOpen(null), l.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_onlineRwd = function() {
                    p.default.instance.popOnlineRwd.setOpen(null), l.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_jackpot = function() {
                    p.default.instance.popJackpot.setOpen(function() {}), l.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_modeEndless = function() {
                    var t = this,
                        e = u.default.randomRangeInt(0, s.default.Snake_BgCnt);
                    l.default.setBgIdx(e), l.default.startGame(s.aw.Mode.Snake_Endless, 0), this.setTouchStop(!0), p.default.instance.popLucky.setOpen(function(e) {
                        1 == e && (u.default.randomRangeInt(0, 100) < 100 ? t.doTrialSkin() : t.doEnterGame())
                    }), l.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_modeHole = function() {
                    var t = this,
                        e = u.default.randomRangeInt(0, s.default.Snake_BgCnt);
                    l.default.setBgIdx(e), l.default.startGame(s.aw.Mode.Snake_Hole, 0), this.setTouchStop(!0), this.doExit(function() {
                        t.node.active = !1, p.default.instance.ndMapLv.active = !0
                    }), l.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_moreMode = function() {
                    p.default.instance.popMoreMode.setOpen(null), l.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_round = function() {
                    var t = this;
                    this.doExit(function() {
                        t.node.active = !1, p.default.instance.ndRound.active = !0
                    }), l.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_navigate = function() {
                    l.default.isShowMoreGame() && p.default.instance.popNavigate2_continue.setOpen(null, {
                        evtName: "\u8df3\u8f6c-\u4e3b\u83dc\u5355\u6309\u94ae\u5168\u5c4f"
                    }), l.default.playEFM("ef_ui_button")
                }, e.prototype.doTrialSkin = function() {
                    var t = this,
                        e = p.default.instance.popTrialSkin;
                    e.initTrialSkins() ? e.setOpen(function() {
                        t.doEnterGame()
                    }) : this.doEnterGame()
                }, e.prototype.doEnterGame = function() {
                    var t = this;
                    d.default.playAds_banner(!1), p.default.instance.showNavigate2(!1), this.doExit(function() {
                        t.node.active = !1, p.default.instance.ndGame.active = !0
                    })
                }, e.EnterTimes = 0, a([y(dragonBones.ArmatureDisplay)], e.prototype, "armSkin", void 0), a([y(h.default)], e.prototype, "uiMiney", void 0), a([y(cc.Node)], e.prototype, "ndDailyTip", void 0), a([y(cc.Label)], e.prototype, "lbDailyTipDeco", void 0), a([y(cc.Node)], e.prototype, "ndNavigateBtn", void 0), o = a([v], e)
            }(f.default);
        o.default = g, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DRes": "DRes",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl",
        "../datas/Tools": "Tools",
        "./UIMgr": "UIMgr",
        "./UIMoney": "UIMoney",
        "./UIScene": "UIScene"
    }],
    UIMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "161devuSylHCaW2458GtH/1", "UIMgr");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/SdkCtrl"),
            r = t("./UINavigate2"),
            c = t("./UIPop"),
            l = cc._decorator,
            d = l.ccclass,
            u = l.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndMenu = null, e.ndRound = null, e.ndMapLv = null, e.ndGame = null, e.ndNativeAd = null, e.ndNavigate1 = null, e.ndTeachs = null, e.popRevive = null, e.popPause = null, e.popSkinShop = null, e.popSkinUpgrade = null, e.popOver = null, e.popOver_hole = null, e.popCrazyTap = null, e.popCrazyTapRwd = null, e.popGetShow = null, e.popSign = null, e.popDaily = null, e.popLucky = null, e.popOnlineRwd = null, e.popMoreMode = null, e.popGift = null, e.popTrialSkin = null, e.popJackpot = null, e.popNavigate2_start = null, e.popNavigate2_continue = null, e.sfItemIcons = [], e.ndBaseSnake = null, e.ndBaseFood = null, e.ndBaseHole = null, e.ndBaseMiniMapPoint = null, e.ndBaseInsect_beetle = null, e.ndBaseInsect_spider = null, e.ndBaseKillShow = null, e.ndBaseSkill_eagle = null, e
                }

                var o;
                return i(e, t), o = e, e.prototype.onLoad = function() {
                    o.instance = this, cc.game.on(cc.game.EVENT_SHOW, function() {
                        console.log("cc.game.on ----- cc.game.EVENT_SHOW"), s.default.onShow_native()
                    }), s.default.initAds()
                }, e.prototype.onDisable = function() {
                    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP)
                }, e.prototype.checkShareResult = function() {}, e.prototype.showNavigate2 = function(t, e) {
                    void 0 === e && (e = "");
                    var o = !1;
                    if (this.ndNavigate1) {
                        var n = this.ndNavigate1.getComponent(r.default);
                        n && (o = n.setShow(t, e))
                    }
                    o || s.default.playAds_custom(t, 0)
                }, e.instance = null, a([u(cc.Node)], e.prototype, "ndMenu", void 0), a([u(cc.Node)], e.prototype, "ndRound", void 0), a([u(cc.Node)], e.prototype, "ndMapLv", void 0), a([u(cc.Node)], e.prototype, "ndGame", void 0), a([u(cc.Node)], e.prototype, "ndNativeAd", void 0), a([u(cc.Node)], e.prototype, "ndNavigate1", void 0), a([u(cc.Node)], e.prototype, "ndTeachs", void 0), a([u(c.default)], e.prototype, "popRevive", void 0), a([u(c.default)], e.prototype, "popPause", void 0), a([u(c.default)], e.prototype, "popSkinShop", void 0), a([u(c.default)], e.prototype, "popSkinUpgrade", void 0), a([u(c.default)], e.prototype, "popOver", void 0), a([u(c.default)], e.prototype, "popOver_hole", void 0), a([u(c.default)], e.prototype, "popCrazyTap", void 0), a([u(c.default)], e.prototype, "popCrazyTapRwd", void 0), a([u(c.default)], e.prototype, "popGetShow", void 0), a([u(c.default)], e.prototype, "popSign", void 0), a([u(c.default)], e.prototype, "popDaily", void 0), a([u(c.default)], e.prototype, "popLucky", void 0), a([u(c.default)], e.prototype, "popOnlineRwd", void 0), a([u(c.default)], e.prototype, "popMoreMode", void 0), a([u(c.default)], e.prototype, "popGift", void 0), a([u(c.default)], e.prototype, "popTrialSkin", void 0), a([u(c.default)], e.prototype, "popJackpot", void 0), a([u(c.default)], e.prototype, "popNavigate2_start", void 0), a([u(c.default)], e.prototype, "popNavigate2_continue", void 0), a([u([cc.SpriteFrame])], e.prototype, "sfItemIcons", void 0), a([u(cc.Node)], e.prototype, "ndBaseSnake", void 0), a([u(cc.Node)], e.prototype, "ndBaseFood", void 0), a([u(cc.Node)], e.prototype, "ndBaseHole", void 0), a([u(cc.Node)], e.prototype, "ndBaseMiniMapPoint", void 0), a([u(cc.Node)], e.prototype, "ndBaseInsect_beetle", void 0), a([u(cc.Node)], e.prototype, "ndBaseInsect_spider", void 0), a([u(cc.Node)], e.prototype, "ndBaseKillShow", void 0), a([u(cc.Node)], e.prototype, "ndBaseSkill_eagle", void 0), o = a([d], e)
            }(cc.Component);
        o.default = p, cc._RF.pop()
    }, {
        "../datas/SdkCtrl": "SdkCtrl",
        "./UINavigate2": "UINavigate2",
        "./UIPop": "UIPop"
    }],
    UIMiniMap: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "fad8b3b4xxJWLOVZUC+EwwF", "UIMiniMap");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/GameRun"),
            c = t("../objs/MiniMapPoint"),
            l = t("./UIMgr"),
            d = cc._decorator,
            u = d.ccclass,
            p = d.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndMapArea = null, e._gameCtrl = null, e._playerPoints = null, e._holePoints = null, e
                }

                return i(e, t), e.prototype.initMiniMap = function(t) {
                    this._gameCtrl = t, this.ndMapArea.removeAllChildren(), this._playerPoints = [], this._holePoints = []
                }, e.prototype.update = function() {
                    if (this._gameCtrl) {
                        for (var t = this.ndMapArea.getContentSize(), e = this.ndMapArea.getAnchorPoint(), o = cc.v2(t.width / this._gameCtrl._worldSize.x, t.height / this._gameCtrl._worldSize.y), n = cc.v2(t.width * e.x, t.height * e.y), i = this._gameCtrl.snakeMgr._players, a = 0; a < i.length; a++) {
                            var d = i[a],
                                u = null;
                            if (a < this._playerPoints.length) u = this._playerPoints[a];
                            else {
                                var p = cc.instantiate(l.default.instance.ndBaseMiniMapPoint);
                                this.ndMapArea.addChild(p, 1e3 - a), u = p.getComponent(c.default), this._playerPoints.push(u)
                            }
                            u.node.active = d.isLife(), u.node.active && (u.setShow(d.getMiniMapPointIndex()), f = (f = d.getPos_head()).multiply(o).sub(n), u.node.setPosition(f))
                        }
                        if (r.default.isMode(s.aw.Mode.Snake_Hole)) {
                            var h = this._gameCtrl.holeMgr._holes;
                            for (a = 0; a < h.length; a++) {
                                var f, _ = h[a];
                                u = null, a < this._holePoints.length ? u = this._holePoints[a] : (p = cc.instantiate(l.default.instance.ndBaseMiniMapPoint), this.ndMapArea.addChild(p, 500 - a), u = p.getComponent(c.default), this._holePoints.push(u)), u.setShow(_.getMiniMapPointIndex()), f = (f = _.node.getPosition()).multiply(o).sub(n), u.node.setPosition(f)
                            }
                            var v = this._holePoints.length - h.length;
                            if (v > 0) {
                                for (a = 0; a < v; a++) {
                                    var y = h.length + a;
                                    this._holePoints[y].node.removeFromParent()
                                }
                                this._holePoints.splice(h.length, v)
                            }
                        }
                    }
                }, a([p(cc.Node)], e.prototype, "ndMapArea", void 0), a([u], e)
            }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/GameRun": "GameRun",
        "../objs/MiniMapPoint": "MiniMapPoint",
        "./UIMgr": "UIMgr"
    }],
    UIMoney: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "17e07eCBw1EtaMDov3rhWa6", "UIMoney");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DSave"),
            c = t("../datas/GameRun"),
            l = t("./UIMgr"),
            d = cc._decorator,
            u = d.ccclass,
            p = d.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndGold = null, e.ndGoldIcon = null, e.lbGoldVal = null, e.ndDiamond = null, e.ndDiamondIcon = null, e.lbDiamondVal = null, e
                }

                return i(e, t), e.prototype.onLoad = function() {}, e.prototype.update = function() {
                    this.lbGoldVal.string = "" + r.DBase.getMoney(s.aw.Money.Golds), this.lbDiamondVal.string = "" + r.DBase.getMoney(s.aw.Money.Diamonds)
                }, e.prototype.onClick_gold = function() {
                    l.default.instance.popGift.setOpen(null, {
                        index: s.aw.GiftIndex.Gold
                    }), c.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_diamond = function() {
                    l.default.instance.popGift.setOpen(null, {
                        index: s.aw.GiftIndex.Diamond
                    }), c.default.playEFM("ef_ui_button")
                }, a([p(cc.Node)], e.prototype, "ndGold", void 0), a([p(cc.Node)], e.prototype, "ndGoldIcon", void 0), a([p(cc.Label)], e.prototype, "lbGoldVal", void 0), a([p(cc.Node)], e.prototype, "ndDiamond", void 0), a([p(cc.Node)], e.prototype, "ndDiamondIcon", void 0), a([p(cc.Label)], e.prototype, "lbDiamondVal", void 0), a([u], e)
            }(cc.Component);
        o.default = h, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "./UIMgr": "UIMgr"
    }],
    UIMoreGame: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f6b42HiMyNDDah4sPxznp9T", "UIMoreGame");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/SdkCtrl"),
            r = cc._decorator,
            c = r.ccclass,
            l = r.property,
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndIcons = [], e._index = 0, e._timer = 0, e
                }

                return i(e, t), e.prototype.onEnable = function() {
                    this._timer = 0;
                    for (var t = 0; t < this.ndIcons.length; t++) this.ndIcons[t].active = t == this._index, this.ndIcons[t].active && this.ndIcons[t].setPosition(0, 0)
                }, e.prototype.update = function(t) {
                    var e = this;
                    if (this._timer >= 0 && (this._timer += t, this._timer > 3)) {
                        this._timer = -1;
                        var o = Math.floor((this._index + 1) % this.ndIcons.length),
                            n = this.ndIcons[this._index],
                            i = this.ndIcons[o];
                        this._index = o, cc.tween(n).to(.5, {
                            y: -130
                        }).call(function() {
                            n.active = !1
                        }).start(), i.active = !0, i.setPosition(0, 130), cc.tween(i).to(.5, {
                            y: 0
                        }).call(function() {
                            e._timer = 0
                        }).start()
                    }
                }, e.prototype.onClick_more = function() {
                    s.default.moreGame()
                }, a([l([cc.Node])], e.prototype, "ndIcons", void 0), a([c], e)
            }(cc.Component);
        o.default = d, cc._RF.pop()
    }, {
        "../datas/SdkCtrl": "SdkCtrl"
    }],
    UINativeAd: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6c2563Jr7dPVZJlMORtSCNr", "UINativeAd");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/SdkCtrl"),
            r = cc._decorator,
            c = r.ccclass,
            l = r.property,
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.spShow = null, e.lbTitle = null, e
                }

                return i(e, t), e.prototype.onEnable = function() {
                    var t = this;
                    console.log("show native ad"), s.default.playAds_native(function(e, o) {
                        console.log("show native ad url = ", o), t.lbTitle.string = e, cc.assetManager.loadRemote(o, function(e, o) {
                            if (e) console.log("\u8fdc\u7a0b\u52a0\u8f7d\u9519\u8bef" + e);
                            else {
                                var n = new cc.SpriteFrame(o);
                                t.spShow.spriteFrame = n, t.node.active = !0
                            }
                        })
                    })
                }, e.prototype.onClick_show = function() {
                    this.node.active = !1, s.default.onClick_native()
                }, e.prototype.onClick_close = function() {
                    this.node.active = !1, s.default.onClose_native()
                }, a([l(cc.Sprite)], e.prototype, "spShow", void 0), a([l(cc.Label)], e.prototype, "lbTitle", void 0), a([c], e)
            }(cc.Component);
        o.default = d, cc._RF.pop()
    }, {
        "../datas/SdkCtrl": "SdkCtrl"
    }],
    UINavigate2: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e2901n415JMCrAKjHS9OE8k", "UINavigate2");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/GameRun"),
            r = t("../datas/SdkCtrl"),
            c = t("../objs/NavigateIcon"),
            l = cc._decorator,
            d = l.ccclass,
            u = l.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.icons = [], e._timer = 0, e._eventName = "", e
                }

                return i(e, t), e.prototype.onLoad = function() {
                    for (var t = this, e = s.default.getMoreGameCnt(), o = function(o) {
                            var i = o % e;
                            n.icons[o].setIndex(i, !1), n.icons[o].setClickCB(function(e) {
                                var o = s.default.getMoreGameData(e),
                                    n = o.appid,
                                    a = o.game_path,
                                    c = o.game_name;
                                console.log("navigateTo: idx = " + i + " gIdx = " + e + " name = " + c), t.sendEvent(n, c, 0), r.default.reportTo(o.id, n, t._eventName, 1), r.default.navigateToMini(n, a, function(e) {
                                    0 == e ? (t.sendEvent(n, c, 1), r.default.reportTo(o.id, n, t._eventName, 2)) : 1 == e && s.default.isShowMoreGame() && r.default.reportTo(o.id, n, t._eventName, 3)
                                })
                            })
                        }, n = this, i = 0; i < this.icons.length; i++) o(i)
                }, e.prototype.onEnable = function() {
                    this._timer = 0
                }, e.prototype.setShow = function(t, e) {
                    return void 0 === e && (e = ""), s.default.isShowMoreGame() && t ? (this._eventName = e, (!this._eventName || this._eventName.length <= 0) && (this._eventName = "\u8df3\u8f6c-unknow"), this.node.active = !0, !0) : (this.node.active = !1, !1)
                }, e.prototype.update = function(t) {
                    if (this._timer += t, this._timer > 5) {
                        this._timer = 0;
                        for (var e = s.default.getMoreGameCnt(), o = 0; o < this.icons.length; o++) {
                            var n = (this.icons[o]._index + this.icons.length) % e;
                            this.icons[o].setIndex(n, !0)
                        }
                    }
                }, e.prototype.sendEvent = function(t, e, o) {
                    var n = {
                            appId: t,
                            appName: e
                        },
                        i = this._eventName,
                        a = 1 == o ? "--\u5141\u8bb8" : "";
                    r.default.sendEvent(i + a, n), r.default.sendEvent("\u8df3\u8f6c\u603b\u8ba1" + a, n)
                }, a([u([c.default])], e.prototype, "icons", void 0), a([d], e)
            }(cc.Component);
        o.default = p, cc._RF.pop()
    }, {
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl",
        "../objs/NavigateIcon": "NavigateIcon"
    }],
    UIPop: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b65b4hz16tDnrLeYb8V6tIw", "UIPop");
        var n, i, a = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            s = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.PopState = void 0,
            function(t) {
                t[t.Closed = 0] = "Closed", t[t.Opening = 1] = "Opening", t[t.Opened = 2] = "Opened", t[t.Closing = 3] = "Closing"
            }(i = o.PopState || (o.PopState = {}));
        var r = cc._decorator,
            c = r.ccclass,
            l = r.property,
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndBlackBg = null, e.ndMain = null, e.ndTouchStop = null, e._popState = i.Closed, e._closeCB = null, e
                }

                return a(e, t), e.prototype.reset = function(t) {
                    void 0 === t && (t = null)
                }, e.prototype.setOpen = function(t, e) {
                    var o = this;
                    if (void 0 === e && (e = null), this.isClosed()) {
                        this.node.active = !0, this._closeCB = t, this.ndMain.setScale(1);
                        var n = this.ndMain.getComponent(cc.Animation);
                        n ? (this._popState = i.Opening, this.ndBlackBg.opacity = 0, cc.tween(this.ndBlackBg).to(.5, {
                            opacity: 150
                        }).start(), n.play(), n.once(cc.Animation.EventType.FINISHED, function() {
                            o._popState = i.Opened
                        })) : (this._popState = i.Opened, this.ndBlackBg.opacity = 255), this.reset(e)
                    }
                }, e.prototype.setClose = function(t) {
                    var e = this;
                    if (this.isOpened()) {
                        var o = this._closeCB;
                        this._closeCB = null, this._popState = i.Closing, o && o(0, t), cc.tween(this.ndBlackBg).to(.2, {
                            opacity: 0
                        }).start(), cc.tween(this.ndMain).to(.2, {
                            scale: 0
                        }).call(function() {
                            e._popState = i.Closed, e.node.active = !1, o && o(1, t)
                        }).start()
                    }
                }, e.prototype.isOpened = function() {
                    return this._popState == i.Opened
                }, e.prototype.isClosed = function() {
                    return this._popState == i.Closed
                }, e.prototype.setTouchStop = function(t) {
                    this.ndTouchStop && (this.ndTouchStop.active = t)
                }, s([l(cc.Node)], e.prototype, "ndBlackBg", void 0), s([l(cc.Node)], e.prototype, "ndMain", void 0), s([l(cc.Node)], e.prototype, "ndTouchStop", void 0), s([c], e)
            }(cc.Component);
        o.default = d, cc._RF.pop()
    }, {}],
    UIRank: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "3abf7AqHXJAUbm4FeglUj3n", "UIRank");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../objs/RankItem"),
            r = t("./UIGame"),
            c = cc._decorator,
            l = c.ccclass,
            d = c.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.uiGame = null, e.rankItems = [], e
                }

                return i(e, t), e.prototype.update = function() {
                    for (var t = this.uiGame._gameCtrl.snakeMgr._players, e = [], o = 0; o < t.length; o++) {
                        var n = t[o]._score * t[o].getScoreRate_show();
                        n = Math.floor(n), e.push({
                            idx: o,
                            score: n
                        })
                    }
                    for (e.sort(function(t, e) {
                            return e.score - t.score
                        }), o = 0; o < e.length && o < this.rankItems.length; o++) {
                        var i = t[e[o].idx].getName();
                        this.rankItems[o].setInfo(i, e[o].score)
                    }
                }, a([d(r.default)], e.prototype, "uiGame", void 0), a([d([s.default])], e.prototype, "rankItems", void 0), a([l], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "../objs/RankItem": "RankItem",
        "./UIGame": "UIGame"
    }],
    UIRound: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7e228kvfs1FYqymUyoGzG8r", "UIRound");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = t("../datas/DConfig"),
            r = t("../datas/DSave"),
            c = t("../datas/GameRun"),
            l = t("../datas/SdkCtrl"),
            d = t("../datas/Tools"),
            u = t("../objs/MineCarBody"),
            p = t("../objs/MineCarHead"),
            h = t("./UIMgr"),
            f = t("./UIScene"),
            _ = t("./UITeachs"),
            v = cc._decorator,
            y = v.ccclass,
            g = v.property,
            m = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndMain = null, e.lbGold = null, e.lbRwdPM = null, e.lbRwdCur = null, e.ndRwdBox = null, e.ndSpdx2 = null, e.lbSpdx2_time = null, e.armSpdx2_icon = null, e.ndSpdx2_prices = [], e.lbSpdx2_priceGold = null, e.ndAddCnt = null, e.lbAddCnt_val = null, e.lbAddCnt_valNxt = null, e.ndAddCnt_deco = null, e.ndAddCnt_prices = [], e.lbAddCnt_priceGold = null, e.ndRwdx2 = null, e.lbRwdx2_time = null, e.armRwdx2_icon = null, e.ndRwdx2_prices = [], e.lbRwdx2_priceGold = null, e.ndMine = null, e.ndMineCarBodyBase = null, e.ndMineCarHeadBase = null, e.ndMineSrc = null, e.ndMineDst = null, e.ndEffect = null, e.ndFlySrc_gold = null, e.ndFlyDst_gold = null, e.pfGold = null, e._carHead = null, e._carBodys = null, e._rwdShowVal = 0, e._buffFlag0 = 0, e._buffFlag2 = 0, e._collectStep = 0, e._collects = [], e._teachTimer = 0, e._teachWait = 0, e._teachFlag = 0, e._closing = !1, e
                }

                var o;
                return i(e, t), o = e, e.prototype.onLoad = function() {
                    this.initMineCar()
                }, e.prototype.start = function() {}, e.prototype.onEnable = function() {
                    for (var t = r.DBase.getMineCarCnt() - this._carBodys.length, e = 0; e < t; e++) this.addMineCar();
                    this._rwdShowVal = -1, this._buffFlag0 = -1, this._buffFlag2 = -1, this.setTouchStop(!1), this._teachTimer = 0, this._teachWait = 0, this._teachFlag = 0, l.default.playAds_screen(), l.default.playAds_banner(!1), h.default.instance.showNavigate2(!0, "\u8df3\u8f6c-round"), this._closing = !1, this.doEnter()
                }, e.prototype.onDisable = function() {
                    l.default.playAds_banner(!1), h.default.instance.showNavigate2(!1)
                }, e.prototype.update = function(t) {
                    this.lbGold.string = "" + r.DBase.getMoney(s.aw.Money.Golds);
                    var e = r.DBase.getMineRwdFull(),
                        n = r.DBase.getMineRwd();
                    n != this._rwdShowVal && (this._rwdShowVal = n, this.lbRwdCur.string = this._rwdShowVal + "/" + e);
                    var i = o.RWD_CAR_TIMES * r.DBase.getMineCarCnt();
                    i = 60 * i / r.DBase.getMineTimeRound(), r.DBase.isMineBuffTimeOver(0) || (i *= 2), r.DBase.isMineBuffTimeOver(2) || (i *= 2), this.lbRwdPM.string = "" + Math.round(i), this.updateTeach(t), this.refreshShow_spdx2(), this.refreshShow_addCnt(), this.refreshShow_rwdx2(), this.updateMineCar(), this.updateCollect(t)
                }, e.prototype.updateTeach = function(t) {
                    var e = this;
                    if (this._teachTimer < 1) this._teachTimer += t;
                    else if (0 == this._teachFlag && !this._closing) {
                        var o = r.DBase.getTeachStep(2),
                            n = h.default.instance.ndTeachs.getComponent(_.default);
                        if (0 == o) return this._teachFlag = 1, void n.setTeach(4, function() {
                            e._teachWait = 0, e._teachFlag = 0, r.DBase.setTeachStep(2, 1, !1)
                        });
                        if (1 == o) return this._teachWait += t, void(this._teachWait > 2 && (this._teachWait = 0, this._teachFlag = 1, this.setTouchStop(!0), this.ndAddCnt.setScale(0), cc.tween(this.ndAddCnt).to(.2, {
                            scale: 1
                        }).call(function() {
                            e._teachFlag = 0, e.setTouchStop(!1), r.DBase.setTeachStep(2, 2, !1)
                        }).start()));
                        if (2 == o) return this._teachFlag = 1, void n.setTeach(5, function() {
                            e._teachWait = 0, e._teachFlag = 0, e.onClick_addCnt(), r.DBase.setTeachStep(2, 3, !0)
                        });
                        if (3 == o) return this._teachWait += t, void(this._teachWait > 2 && (this._teachWait = 0, this._teachFlag = 1, this.setTouchStop(!0), this.ndSpdx2.setScale(0), cc.tween(this.ndSpdx2).to(.2, {
                            scale: 1
                        }).call(function() {
                            e._teachFlag = 0, e.setTouchStop(!1), r.DBase.setTeachStep(2, 4, !1)
                        }).start()));
                        if (4 == o) return this._teachFlag = 1, void n.setTeach(6, function() {
                            e._teachWait = 0, e._teachFlag = 0, e.onClick_spdx2(), r.DBase.setTeachStep(2, 5, !0)
                        });
                        if (5 == o) return this._teachWait += t, void(this._teachWait > 2 && (this._teachWait = 0, this._teachFlag = 1, this.setTouchStop(!0), this.ndRwdx2.setScale(0), cc.tween(this.ndRwdx2).to(.2, {
                            scale: 1
                        }).call(function() {
                            e._teachFlag = 0, e.setTouchStop(!1), r.DBase.setTeachStep(2, 6, !1)
                        }).start()));
                        if (6 == o) return this._teachFlag = 1, void n.setTeach(7, function() {
                            e._teachWait = 0, e._teachFlag = 0, e.onClick_rwdx2(), r.DBase.setTeachStep(2, 7, !0)
                        });
                        if (7 == o) return this._teachWait += t, void(this._teachWait > 2 && (this._teachWait = 0, this._teachFlag = 0, r.DBase.setTeachStep(2, 8, !1)));
                        if (8 == o) return this._teachFlag = 1, void n.setTeach(8, function() {
                            e._teachWait = 0, e._teachFlag = 0, e.onClick_collect(), r.DBase.setTeachStep(2, 9, !0)
                        })
                    }
                }, e.prototype.refreshShow_spdx2 = function() {
                    var t = r.DBase.getTeachStep(2);
                    if (t < 4) this.ndSpdx2.active = !1;
                    else {
                        this.ndSpdx2.active = !0;
                        var e = r.DBase.getMineBuffTimesPrice_gold(0),
                            o = 1;
                        4 == t && (o = 2);
                        for (var n = 0; n < this.ndSpdx2_prices.length; n++) this.ndSpdx2_prices[n] && (this.ndSpdx2_prices[n].active = o == n);
                        this.lbSpdx2_priceGold.string = "" + e;
                        var i = r.DBase.getMineBuffTime(0);
                        i > 0 ? (this.lbSpdx2_time.string = d.default.timeFormat("MM:SS", i), 1 != this._buffFlag0 && (this._buffFlag0 = 1, this.lbSpdx2_time.node.active = !0, this.armSpdx2_icon.playAnimation("ani1", 0))) : 2 != this._buffFlag0 && (this._buffFlag0 = 2, this.lbSpdx2_time.node.active = !1, this.armSpdx2_icon.playAnimation("ani1a", 0))
                    }
                }, e.prototype.refreshShow_addCnt = function() {
                    var t = r.DBase.getTeachStep(2);
                    if (t < 2) this.ndAddCnt.active = !1;
                    else {
                        this.ndAddCnt.active = !0;
                        var e = r.DBase.getMineCarCnt(),
                            o = r.DBase.isMineCarCntFull(),
                            n = r.DBase.getMineBuffTimesPrice_gold(1),
                            i = 1;
                        o ? i = 3 : 2 == t && (i = 2);
                        for (var a = 0; a < this.ndAddCnt_prices.length; a++) this.ndAddCnt_prices[a] && (this.ndAddCnt_prices[a].active = i == a);
                        this.lbAddCnt_priceGold.string = "" + n, this.lbAddCnt_val.string = "" + e, this.ndAddCnt_deco.active = !o, o || (this.lbAddCnt_valNxt.string = "" + (e + 1))
                    }
                }, e.prototype.refreshShow_rwdx2 = function() {
                    var t = r.DBase.getTeachStep(2);
                    if (t < 6) this.ndRwdx2.active = !1;
                    else {
                        this.ndRwdx2.active = !0;
                        var e = r.DBase.getMineBuffTimesPrice_gold(2),
                            o = 1;
                        6 == t && (o = 2);
                        for (var n = 0; n < this.ndRwdx2_prices.length; n++) this.ndRwdx2_prices[n] && (this.ndRwdx2_prices[n].active = o == n);
                        this.lbRwdx2_priceGold.string = "" + e;
                        var i = r.DBase.getMineBuffTime(2);
                        i > 0 ? (this.lbRwdx2_time.string = d.default.timeFormat("MM:SS", i), 1 != this._buffFlag2 && (this._buffFlag2 = 1, this.lbRwdx2_time.node.active = !0, this.armRwdx2_icon.playAnimation("ani2", 0))) : 2 != this._buffFlag2 && (this._buffFlag2 = 2, this.lbRwdx2_time.node.active = !1, this.armRwdx2_icon.playAnimation("ani2a", 0))
                    }
                }, e.prototype.initMineCar = function() {
                    this.ndMine.removeAllChildren(), this._carBodys = [];
                    var t = cc.instantiate(this.ndMineCarHeadBase);
                    this.ndMine.addChild(t), this._carHead = t.getComponent(p.default);
                    for (var e = r.DBase.getMineCarCnt(), o = 0; o < e; o++) this.addMineCar()
                }, e.prototype.addMineCar = function() {
                    var t = cc.instantiate(this.ndMineCarBodyBase);
                    this.ndMine.addChild(t), t.setSiblingIndex(0);
                    var e = t.getComponent(u.default);
                    this._carBodys.push(e)
                }, e.prototype.updateMineCar = function() {
                    var t = r.DBase.getMineTime(),
                        e = this.getPathInfo(t, 0);
                    this._carHead.node.setPosition(e.p), this._carHead.node.angle = e.a;
                    for (var o = 0; o < this._carBodys.length; o++)
                        if (e = this.getPathInfo(t, o + 1), this._carBodys[o].node.setPosition(e.p), this._carBodys[o].node.angle = e.a, 0 == e.f) {
                            if (this._carBodys[o].setState(0)) {
                                var n = r.DBase.isMineBuffTimeOver(2) ? 1 : 2;
                                r.DBase.addMineRwd(n, !1), c.default.playEFM("ef_round_gold")
                            }
                        } else this._carBodys[o].setState(1)
                }, e.prototype.setCollect = function(t) {
                    var e = r.DBase.getMineRwd();
                    if (0 == this._collectStep && e > 0) {
                        this.setTouchStop(!0), this._collectStep = 1;
                        var o, n = d.default.rltPos_node(this.ndEffect, this.ndFlySrc_gold),
                            i = d.default.rltPos_node(this.ndEffect, this.ndFlyDst_gold),
                            a = n.sub(i).mag() / 1e3;
                        o = e <= 10 ? 1 : e <= 100 ? Math.ceil(e / 10) : 10;
                        for (var l = 0, u = function(d) {
                                var u = Math.floor(e * (d + 1) / o),
                                    h = u - l;
                                l = u;
                                var f = {
                                    wt: .1 * d,
                                    prefab: p.pfGold,
                                    time: a,
                                    src: n,
                                    dst: i,
                                    startCB: function() {
                                        r.DBase.addMineRwd(-h, !1), c.default.playEFM("ef_gold_move")
                                    },
                                    overCB: function() {
                                        r.DBase.addMoney(s.aw.Money.Golds, Math.floor(h * t), !0)
                                    }
                                };
                                p._collects.push(f)
                            }, p = this, h = 0; h < o; h++) u(h)
                    }
                }, e.prototype.updateCollect = function(t) {
                    1 == this._collectStep ? this._collects.length <= 0 && (this._collectStep = 2) : 2 == this._collectStep && this.ndEffect.childrenCount <= 0 && (this._collectStep = 0, this.setTouchStop(!1));
                    for (var e = 0, o = this._collects.length, n = function(o) {
                            var n = i._collects[o];
                            if (n || (e += 1), n.wt -= t, n.wt > 0) return e > 0 && (i._collects[o - e] = i._collects[o]), "continue";
                            var a = cc.instantiate(n.prefab);
                            i.ndEffect.addChild(a), a.setPosition(n.src), n.startCB && n.startCB(), cc.tween(a).to(n.time, {
                                x: n.dst.x,
                                y: n.dst.y
                            }).call(function() {
                                n.overCB && n.overCB(), a.removeFromParent()
                            }).start(), i._collects[o] = null, e += 1
                        }, i = this, a = 0; a < this._collects.length; a++) n(a);
                    e > 0 && this._collects.splice(o - e, e)
                }, e.prototype.onClick_close = function() {
                    var t = this;
                    this._closing = !0, this.doExit(function() {
                        t.node.active = !1, h.default.instance.ndMenu.active = !0
                    }), c.default.playEFM("ef_ui_button")
                }, e.prototype.onClick_modeNormal = function() {}, e.prototype.onClick_modeDragon = function() {}, e.prototype.onClick_adGold = function() {
                    h.default.instance.popGift.setOpen(null, {
                        index: s.aw.GiftIndex.Gold
                    })
                }, e.prototype.onClick_spdx2 = function() {
                    if (this.ndSpdx2_prices[0].active) l.default.playAds_reward(0, function(t) {
                        0 == t && r.DBase.addMineBuffTime(0, !0)
                    });
                    else if (this.ndSpdx2_prices[1].active) {
                        var t = r.DBase.getMineBuffTimesPrice_gold(0);
                        r.DBase.addMoney(s.aw.Money.Golds, -t) ? (r.DBase.addMineBuffTimes_gold(0, !1), r.DBase.addMineBuffTime(0, !0)) : h.default.instance.popGift.setOpen(null, {
                            index: s.aw.GiftIndex.Gold
                        })
                    } else this.ndSpdx2_prices[2].active && r.DBase.addMineBuffTime(0, !0);
                    c.default.playEFM("ef_round_skill")
                }, e.prototype.onClick_addCnt = function() {
                    var t = this;
                    if (this.ndAddCnt_prices[0].active) l.default.playAds_reward(0, function(e) {
                        0 == e && (r.DBase.addMineCarCnt(!0), t.addMineCar())
                    });
                    else if (this.ndAddCnt_prices[1].active) {
                        var e = r.DBase.getMineBuffTimesPrice_gold(1);
                        r.DBase.addMoney(s.aw.Money.Golds, -e) ? (r.DBase.addMineBuffTimes_gold(1, !1), r.DBase.addMineCarCnt(!0), this.addMineCar()) : h.default.instance.popGift.setOpen(null, {
                            index: s.aw.GiftIndex.Gold
                        })
                    } else this.ndAddCnt_prices[2].active && (r.DBase.addMineCarCnt(!0), this.addMineCar());
                    c.default.playEFM("ef_round_skill")
                }, e.prototype.onClick_rwdx2 = function() {
                    if (this.ndRwdx2_prices[0].active) l.default.playAds_reward(0, function(t) {
                        0 == t && r.DBase.addMineBuffTime(2, !0)
                    });
                    else if (this.ndRwdx2_prices[1].active) {
                        var t = r.DBase.getMineBuffTimesPrice_gold(2);
                        r.DBase.addMoney(s.aw.Money.Golds, -t) ? (r.DBase.addMineBuffTimes_gold(2, !1), r.DBase.addMineBuffTime(2, !0)) : h.default.instance.popGift.setOpen(null, {
                            index: s.aw.GiftIndex.Gold
                        })
                    } else this.ndRwdx2_prices[2].active && r.DBase.addMineBuffTime(2, !0);
                    c.default.playEFM("ef_round_skill")
                }, e.prototype.onClick_collect = function() {
                    this.setCollect(1)
                }, e.prototype.onClick_collectx2 = function() {
                    var t = this;
                    l.default.playAds_reward(0, function(e) {
                        0 == e && t.setCollect(2)
                    }), c.default.playEFM("ef_round_skill")
                }, e.prototype.getPathInfo = function(t, e) {
                    var o = {
                            p: cc.v2(0, 0),
                            a: 0,
                            f: 0
                        },
                        n = 215,
                        i = r.DBase.getMineTimeRound(),
                        a = Math.PI * n,
                        s = 2 * a + 1400,
                        c = s * (t % i) / i;
                    if ((c = (c -= 100 * e) < 0 ? c + s : c) < 700) o.p = cc.v2(-350 + c, 215), o.a = 0, o.f = 0;
                    else if (c < 700 + a) {
                        var l = (c - 700) * Math.PI / a;
                        o.p = cc.v2(350 + n * Math.sin(l), n * Math.cos(l)), o.a = 360 - 180 * l / Math.PI, o.f = 0, c > 700 + a / 2 && (o.f = 1)
                    } else c < 1400 + a ? (o.p = cc.v2(350 - (c - a - 700), -215), o.a = 180, o.f = 1) : (l = (c - 1400 - a) * Math.PI / a, o.p = cc.v2(-350 - n * Math.sin(l), -n * Math.cos(l)), o.a = 180 - 180 * l / Math.PI, o.f = c - 1400 - a < a / 2 ? 1 : 0);
                    return o
                }, e.RWD_CAR_TIMES = 1, a([g(cc.Node)], e.prototype, "ndMain", void 0), a([g(cc.Label)], e.prototype, "lbGold", void 0), a([g(cc.Label)], e.prototype, "lbRwdPM", void 0), a([g(cc.Label)], e.prototype, "lbRwdCur", void 0), a([g(cc.Node)], e.prototype, "ndRwdBox", void 0), a([g(cc.Node)], e.prototype, "ndSpdx2", void 0), a([g(cc.Label)], e.prototype, "lbSpdx2_time", void 0), a([g(dragonBones.ArmatureDisplay)], e.prototype, "armSpdx2_icon", void 0), a([g([cc.Node])], e.prototype, "ndSpdx2_prices", void 0), a([g(cc.Label)], e.prototype, "lbSpdx2_priceGold", void 0), a([g(cc.Node)], e.prototype, "ndAddCnt", void 0), a([g(cc.Label)], e.prototype, "lbAddCnt_val", void 0), a([g(cc.Label)], e.prototype, "lbAddCnt_valNxt", void 0), a([g(cc.Node)], e.prototype, "ndAddCnt_deco", void 0), a([g([cc.Node])], e.prototype, "ndAddCnt_prices", void 0), a([g(cc.Label)], e.prototype, "lbAddCnt_priceGold", void 0), a([g(cc.Node)], e.prototype, "ndRwdx2", void 0), a([g(cc.Label)], e.prototype, "lbRwdx2_time", void 0), a([g(dragonBones.ArmatureDisplay)], e.prototype, "armRwdx2_icon", void 0), a([g([cc.Node])], e.prototype, "ndRwdx2_prices", void 0), a([g(cc.Label)], e.prototype, "lbRwdx2_priceGold", void 0), a([g(cc.Node)], e.prototype, "ndMine", void 0), a([g(cc.Node)], e.prototype, "ndMineCarBodyBase", void 0), a([g(cc.Node)], e.prototype, "ndMineCarHeadBase", void 0), a([g(cc.Node)], e.prototype, "ndMineSrc", void 0), a([g(cc.Node)], e.prototype, "ndMineDst", void 0), a([g(cc.Node)], e.prototype, "ndEffect", void 0), a([g(cc.Node)], e.prototype, "ndFlySrc_gold", void 0), a([g(cc.Node)], e.prototype, "ndFlyDst_gold", void 0), a([g(cc.Prefab)], e.prototype, "pfGold", void 0), o = a([y], e)
            }(f.default);
        o.default = m, cc._RF.pop()
    }, {
        "../datas/DConfig": "DConfig",
        "../datas/DSave": "DSave",
        "../datas/GameRun": "GameRun",
        "../datas/SdkCtrl": "SdkCtrl",
        "../datas/Tools": "Tools",
        "../objs/MineCarBody": "MineCarBody",
        "../objs/MineCarHead": "MineCarHead",
        "./UIMgr": "UIMgr",
        "./UIScene": "UIScene",
        "./UITeachs": "UITeachs"
    }],
    UIScene: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4456bhFsvNOkbf9sHotsUrT", "UIScene");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = cc._decorator,
            r = s.ccclass,
            c = s.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.aniMain = null, e.ndTouchStop = null, e
                }

                return i(e, t), e.prototype.doEnter = function(t) {
                    var e = this;
                    void 0 === t && (t = null), this.aniMain ? (this.aniMain.node.opacity = 0, this.aniMain.play().wrapMode = cc.WrapMode.Default, this.aniMain.on(cc.Animation.EventType.FINISHED, function() {
                        t && t(), e.aniMain.off(cc.Animation.EventType.FINISHED)
                    })) : t && t()
                }, e.prototype.doExit = function(t) {
                    var e = this;
                    void 0 === t && (t = null), this.aniMain ? (this.aniMain.play().wrapMode = cc.WrapMode.Reverse, this.aniMain.on(cc.Animation.EventType.FINISHED, function() {
                        t && t(), e.aniMain.off(cc.Animation.EventType.FINISHED)
                    })) : t && t()
                }, e.prototype.setTouchStop = function(t) {
                    this.ndTouchStop && (this.ndTouchStop.active = t)
                }, a([c(cc.Animation)], e.prototype, "aniMain", void 0), a([c(cc.Node)], e.prototype, "ndTouchStop", void 0), a([r], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    UITeachs: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "301b9xprNJBSplHsAk5uS6K", "UITeachs");
        var n, i = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }

                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            a = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s = cc._decorator,
            r = s.ccclass,
            c = s.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.ndTeachs = [], e._index = 0, e._step = 0, e._overCB = null, e
                }

                return i(e, t), e.prototype.onDisable = function() {}, e.prototype.setTeach = function(t, e) {
                    var o = this;
                    this._index = t, this._step = 0, this._overCB = e, this.node.active = !0;
                    for (var n = 0; n < this.ndTeachs.length; n++) this.ndTeachs[n].active = n == this._index;
                    var i = this.ndTeachs[this._index].getComponent(cc.Animation);
                    i.play().wrapMode = cc.WrapMode.Normal, i.once(cc.Animation.EventType.FINISHED, function() {
                        o._step = 1
                    })
                }, e.prototype.onClick_teach = function() {
                    var t = this;
                    if (1 == this._step) {
                        this._step = 2;
                        var e = this.ndTeachs[this._index].getComponent(cc.Animation);
                        e ? (e.play().wrapMode = cc.WrapMode.Reverse, e.once(cc.Animation.EventType.FINISHED, function() {
                            t.node.active = !1, t._overCB && (t._overCB(), t._overCB = null)
                        })) : (this.node.active = !1, this._overCB && (this._overCB(), this._overCB = null))
                    }
                }, a([c([cc.Node])], e.prototype, "ndTeachs", void 0), a([r], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}]
}, {}, ["PopCrazyTap", "PopCrazyTapRwd", "PopDaily", "PopGetShow", "PopGift", "PopJackpot", "PopLucky", "PopMapLv_hole", "PopMoreMode", "PopNavigate2", "PopOnlineRwd", "PopOver", "PopOver_hole", "PopPause", "PopRevive", "PopSign", "PopSkinShop", "PopSkinUpgrade", "PopTrialSkin", "UIAdPrivacy", "UICommRun", "UIGame", "UIHealth", "UILoading", "UIMapLv_hole", "UIMenu", "UIMgr", "UIMiniMap", "UIMoney", "UIMoreGame", "UINativeAd", "UINavigate2", "UIPop", "UIRank", "UIRound", "UIScene", "UITeachs", "DConfig", "DRes", "DSave", "GameRun", "SdkCtrl", "Tools", "BgMgr", "FoodMgr", "GameCtrl", "HoleMgr", "InsectMgr", "SnakeMgr", "BuffItem", "DailyItem", "Food", "Hole", "Insect", "Insect_Beetle", "Insect_Spider", "KillShow", "LuckyItem", "MapLv", "MineCarBody", "MineCarHead", "MiniMapPoint", "NavigateIcon", "NavigateItem", "OnlineRwdItem", "Player", "PlayerSnake", "RankItem", "SignDay", "SkinItem", "SkinProp", "Snake", "TrialSkinItem"]);