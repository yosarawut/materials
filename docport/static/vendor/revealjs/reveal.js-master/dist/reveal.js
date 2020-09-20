/*!
 * reveal.js 4.0.2
 * https://revealjs.com
 * MIT licensed
 *
 * Copyright (C) 2020 Hakim El Hattab, https://hakim.se
 */
! function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).Reveal = t()
}(this, (function () {
    "use strict";
    var e = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function t(e, t, n) {
        return e(n = {
            path: t,
            exports: {},
            require: function (e, t) {
                return function () {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }(null == t && n.path)
            }
        }, n.exports), n.exports
    }
    var n = function (e) {
            return e && e.Math == Math && e
        },
        i = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")(),
        r = function (e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        },
        a = !r((function () {
            return 7 != Object.defineProperty({}, 1, {
                get: function () {
                    return 7
                }
            })[1]
        })),
        o = {}.propertyIsEnumerable,
        s = Object.getOwnPropertyDescriptor,
        l = {
            f: s && !o.call({
                1: 2
            }, 1) ? function (e) {
                var t = s(this, e);
                return !!t && t.enumerable
            } : o
        },
        c = function (e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        u = {}.toString,
        d = function (e) {
            return u.call(e).slice(8, -1)
        },
        h = "".split,
        f = r((function () {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function (e) {
            return "String" == d(e) ? h.call(e, "") : Object(e)
        } : Object,
        v = function (e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        },
        g = function (e) {
            return f(v(e))
        },
        p = function (e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        },
        m = function (e, t) {
            if (!p(e)) return e;
            var n, i;
            if (t && "function" == typeof (n = e.toString) && !p(i = n.call(e))) return i;
            if ("function" == typeof (n = e.valueOf) && !p(i = n.call(e))) return i;
            if (!t && "function" == typeof (n = e.toString) && !p(i = n.call(e))) return i;
            throw TypeError("Can't convert object to primitive value")
        },
        y = {}.hasOwnProperty,
        b = function (e, t) {
            return y.call(e, t)
        },
        w = i.document,
        S = p(w) && p(w.createElement),
        E = function (e) {
            return S ? w.createElement(e) : {}
        },
        k = !a && !r((function () {
            return 7 != Object.defineProperty(E("div"), "a", {
                get: function () {
                    return 7
                }
            }).a
        })),
        A = Object.getOwnPropertyDescriptor,
        R = {
            f: a ? A : function (e, t) {
                if (e = g(e), t = m(t, !0), k) try {
                    return A(e, t)
                } catch (e) {}
                if (b(e, t)) return c(!l.f.call(e, t), e[t])
            }
        },
        x = function (e) {
            if (!p(e)) throw TypeError(String(e) + " is not an object");
            return e
        },
        L = Object.defineProperty,
        C = {
            f: a ? L : function (e, t, n) {
                if (x(e), t = m(t, !0), x(n), k) try {
                    return L(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                return "value" in n && (e[t] = n.value), e
            }
        },
        P = a ? function (e, t, n) {
            return C.f(e, t, c(1, n))
        } : function (e, t, n) {
            return e[t] = n, e
        },
        N = function (e, t) {
            try {
                P(i, e, t)
            } catch (n) {
                i[e] = t
            }
            return t
        },
        M = i["__core-js_shared__"] || N("__core-js_shared__", {}),
        I = Function.toString;
    "function" != typeof M.inspectSource && (M.inspectSource = function (e) {
        return I.call(e)
    });
    var O, T, D, j = M.inspectSource,
        H = i.WeakMap,
        U = "function" == typeof H && /native code/.test(j(H)),
        B = t((function (e) {
            (e.exports = function (e, t) {
                return M[e] || (M[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.6.5",
                mode: "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            })
        })),
        F = 0,
        z = Math.random(),
        q = function (e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++F + z).toString(36)
        },
        _ = B("keys"),
        V = function (e) {
            return _[e] || (_[e] = q(e))
        },
        W = {},
        K = i.WeakMap;
    if (U) {
        var $ = new K,
            X = $.get,
            Y = $.has,
            G = $.set;
        O = function (e, t) {
            return G.call($, e, t), t
        }, T = function (e) {
            return X.call($, e) || {}
        }, D = function (e) {
            return Y.call($, e)
        }
    } else {
        var J = V("state");
        W[J] = !0, O = function (e, t) {
            return P(e, J, t), t
        }, T = function (e) {
            return b(e, J) ? e[J] : {}
        }, D = function (e) {
            return b(e, J)
        }
    }
    var Q, Z, ee = {
            set: O,
            get: T,
            has: D,
            enforce: function (e) {
                return D(e) ? T(e) : O(e, {})
            },
            getterFor: function (e) {
                return function (t) {
                    var n;
                    if (!p(t) || (n = T(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                    return n
                }
            }
        },
        te = t((function (e) {
            var t = ee.get,
                n = ee.enforce,
                r = String(String).split("String");
            (e.exports = function (e, t, a, o) {
                var s = !!o && !!o.unsafe,
                    l = !!o && !!o.enumerable,
                    c = !!o && !!o.noTargetGet;
                "function" == typeof a && ("string" != typeof t || b(a, "name") || P(a, "name", t), n(a).source = r.join("string" == typeof t ? t : "")), e !== i ? (s ? !c && e[t] && (l = !0) : delete e[t], l ? e[t] = a : P(e, t, a)) : l ? e[t] = a : N(t, a)
            })(Function.prototype, "toString", (function () {
                return "function" == typeof this && t(this).source || j(this)
            }))
        })),
        ne = i,
        ie = function (e) {
            return "function" == typeof e ? e : void 0
        },
        re = function (e, t) {
            return arguments.length < 2 ? ie(ne[e]) || ie(i[e]) : ne[e] && ne[e][t] || i[e] && i[e][t]
        },
        ae = Math.ceil,
        oe = Math.floor,
        se = function (e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? oe : ae)(e)
        },
        le = Math.min,
        ce = function (e) {
            return e > 0 ? le(se(e), 9007199254740991) : 0
        },
        ue = Math.max,
        de = Math.min,
        he = function (e, t) {
            var n = se(e);
            return n < 0 ? ue(n + t, 0) : de(n, t)
        },
        fe = function (e) {
            return function (t, n, i) {
                var r, a = g(t),
                    o = ce(a.length),
                    s = he(i, o);
                if (e && n != n) {
                    for (; o > s;)
                        if ((r = a[s++]) != r) return !0
                } else
                    for (; o > s; s++)
                        if ((e || s in a) && a[s] === n) return e || s || 0;
                return !e && -1
            }
        },
        ve = {
            includes: fe(!0),
            indexOf: fe(!1)
        },
        ge = ve.indexOf,
        pe = function (e, t) {
            var n, i = g(e),
                r = 0,
                a = [];
            for (n in i) !b(W, n) && b(i, n) && a.push(n);
            for (; t.length > r;) b(i, n = t[r++]) && (~ge(a, n) || a.push(n));
            return a
        },
        me = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        ye = me.concat("length", "prototype"),
        be = {
            f: Object.getOwnPropertyNames || function (e) {
                return pe(e, ye)
            }
        },
        we = {
            f: Object.getOwnPropertySymbols
        },
        Se = re("Reflect", "ownKeys") || function (e) {
            var t = be.f(x(e)),
                n = we.f;
            return n ? t.concat(n(e)) : t
        },
        Ee = function (e, t) {
            for (var n = Se(t), i = C.f, r = R.f, a = 0; a < n.length; a++) {
                var o = n[a];
                b(e, o) || i(e, o, r(t, o))
            }
        },
        ke = /#|\.prototype\./,
        Ae = function (e, t) {
            var n = xe[Re(e)];
            return n == Ce || n != Le && ("function" == typeof t ? r(t) : !!t)
        },
        Re = Ae.normalize = function (e) {
            return String(e).replace(ke, ".").toLowerCase()
        },
        xe = Ae.data = {},
        Le = Ae.NATIVE = "N",
        Ce = Ae.POLYFILL = "P",
        Pe = Ae,
        Ne = R.f,
        Me = function (e, t) {
            var n, r, a, o, s, l = e.target,
                c = e.global,
                u = e.stat;
            if (n = c ? i : u ? i[l] || N(l, {}) : (i[l] || {}).prototype)
                for (r in t) {
                    if (o = t[r], a = e.noTargetGet ? (s = Ne(n, r)) && s.value : n[r], !Pe(c ? r : l + (u ? "." : "#") + r, e.forced) && void 0 !== a) {
                        if (typeof o == typeof a) continue;
                        Ee(o, a)
                    }(e.sham || a && a.sham) && P(o, "sham", !0), te(n, r, o, e)
                }
        },
        Ie = Array.isArray || function (e) {
            return "Array" == d(e)
        },
        Oe = function (e) {
            return Object(v(e))
        },
        Te = function (e, t, n) {
            var i = m(t);
            i in e ? C.f(e, i, c(0, n)) : e[i] = n
        },
        De = !!Object.getOwnPropertySymbols && !r((function () {
            return !String(Symbol())
        })),
        je = De && !Symbol.sham && "symbol" == typeof Symbol.iterator,
        He = B("wks"),
        Ue = i.Symbol,
        Be = je ? Ue : Ue && Ue.withoutSetter || q,
        Fe = function (e) {
            return b(He, e) || (De && b(Ue, e) ? He[e] = Ue[e] : He[e] = Be("Symbol." + e)), He[e]
        },
        ze = Fe("species"),
        qe = function (e, t) {
            var n;
            return Ie(e) && ("function" != typeof (n = e.constructor) || n !== Array && !Ie(n.prototype) ? p(n) && null === (n = n[ze]) && (n = void 0) : n = void 0), new(void 0 === n ? Array : n)(0 === t ? 0 : t)
        },
        _e = re("navigator", "userAgent") || "",
        Ve = i.process,
        We = Ve && Ve.versions,
        Ke = We && We.v8;
    Ke ? Z = (Q = Ke.split("."))[0] + Q[1] : _e && (!(Q = _e.match(/Edge\/(\d+)/)) || Q[1] >= 74) && (Q = _e.match(/Chrome\/(\d+)/)) && (Z = Q[1]);
    var $e = Z && +Z,
        Xe = Fe("species"),
        Ye = function (e) {
            return $e >= 51 || !r((function () {
                var t = [];
                return (t.constructor = {})[Xe] = function () {
                    return {
                        foo: 1
                    }
                }, 1 !== t[e](Boolean).foo
            }))
        },
        Ge = Fe("isConcatSpreadable"),
        Je = $e >= 51 || !r((function () {
            var e = [];
            return e[Ge] = !1, e.concat()[0] !== e
        })),
        Qe = Ye("concat"),
        Ze = function (e) {
            if (!p(e)) return !1;
            var t = e[Ge];
            return void 0 !== t ? !!t : Ie(e)
        };
    Me({
        target: "Array",
        proto: !0,
        forced: !Je || !Qe
    }, {
        concat: function (e) {
            var t, n, i, r, a, o = Oe(this),
                s = qe(o, 0),
                l = 0;
            for (t = -1, i = arguments.length; t < i; t++)
                if (a = -1 === t ? o : arguments[t], Ze(a)) {
                    if (l + (r = ce(a.length)) > 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    for (n = 0; n < r; n++, l++) n in a && Te(s, l, a[n])
                } else {
                    if (l >= 9007199254740991) throw TypeError("Maximum allowed index exceeded");
                    Te(s, l++, a)
                } return s.length = l, s
        }
    });
    var et = function (e) {
            if ("function" != typeof e) throw TypeError(String(e) + " is not a function");
            return e
        },
        tt = function (e, t, n) {
            if (et(e), void 0 === t) return e;
            switch (n) {
                case 0:
                    return function () {
                        return e.call(t)
                    };
                case 1:
                    return function (n) {
                        return e.call(t, n)
                    };
                case 2:
                    return function (n, i) {
                        return e.call(t, n, i)
                    };
                case 3:
                    return function (n, i, r) {
                        return e.call(t, n, i, r)
                    }
            }
            return function () {
                return e.apply(t, arguments)
            }
        },
        nt = [].push,
        it = function (e) {
            var t = 1 == e,
                n = 2 == e,
                i = 3 == e,
                r = 4 == e,
                a = 6 == e,
                o = 5 == e || a;
            return function (s, l, c, u) {
                for (var d, h, v = Oe(s), g = f(v), p = tt(l, c, 3), m = ce(g.length), y = 0, b = u || qe, w = t ? b(s, m) : n ? b(s, 0) : void 0; m > y; y++)
                    if ((o || y in g) && (h = p(d = g[y], y, v), e))
                        if (t) w[y] = h;
                        else if (h) switch (e) {
                    case 3:
                        return !0;
                    case 5:
                        return d;
                    case 6:
                        return y;
                    case 2:
                        nt.call(w, d)
                } else if (r) return !1;
                return a ? -1 : i || r ? r : w
            }
        },
        rt = {
            forEach: it(0),
            map: it(1),
            filter: it(2),
            some: it(3),
            every: it(4),
            find: it(5),
            findIndex: it(6)
        },
        at = function (e, t) {
            var n = [][e];
            return !!n && r((function () {
                n.call(null, t || function () {
                    throw 1
                }, 1)
            }))
        },
        ot = Object.defineProperty,
        st = {},
        lt = function (e) {
            throw e
        },
        ct = function (e, t) {
            if (b(st, e)) return st[e];
            t || (t = {});
            var n = [][e],
                i = !!b(t, "ACCESSORS") && t.ACCESSORS,
                o = b(t, 0) ? t[0] : lt,
                s = b(t, 1) ? t[1] : void 0;
            return st[e] = !!n && !r((function () {
                if (i && !a) return !0;
                var e = {
                    length: -1
                };
                i ? ot(e, 1, {
                    enumerable: !0,
                    get: lt
                }) : e[1] = 1, n.call(e, o, s)
            }))
        },
        ut = rt.forEach,
        dt = at("forEach"),
        ht = ct("forEach"),
        ft = dt && ht ? [].forEach : function (e) {
            return ut(this, e, arguments.length > 1 ? arguments[1] : void 0)
        };
    Me({
        target: "Array",
        proto: !0,
        forced: [].forEach != ft
    }, {
        forEach: ft
    });
    var vt = rt.map,
        gt = Ye("map"),
        pt = ct("map");
    Me({
        target: "Array",
        proto: !0,
        forced: !gt || !pt
    }, {
        map: function (e) {
            return vt(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var mt = Object.keys || function (e) {
            return pe(e, me)
        },
        yt = Object.assign,
        bt = Object.defineProperty,
        wt = !yt || r((function () {
            if (a && 1 !== yt({
                    b: 1
                }, yt(bt({}, "a", {
                    enumerable: !0,
                    get: function () {
                        bt(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var e = {},
                t = {},
                n = Symbol();
            return e[n] = 7, "abcdefghijklmnopqrst".split("").forEach((function (e) {
                t[e] = e
            })), 7 != yt({}, e)[n] || "abcdefghijklmnopqrst" != mt(yt({}, t)).join("")
        })) ? function (e, t) {
            for (var n = Oe(e), i = arguments.length, r = 1, o = we.f, s = l.f; i > r;)
                for (var c, u = f(arguments[r++]), d = o ? mt(u).concat(o(u)) : mt(u), h = d.length, v = 0; h > v;) c = d[v++], a && !s.call(u, c) || (n[c] = u[c]);
            return n
        } : yt;
    Me({
        target: "Object",
        stat: !0,
        forced: Object.assign !== wt
    }, {
        assign: wt
    });
    var St, Et = a ? Object.defineProperties : function (e, t) {
            x(e);
            for (var n, i = mt(t), r = i.length, a = 0; r > a;) C.f(e, n = i[a++], t[n]);
            return e
        },
        kt = re("document", "documentElement"),
        At = V("IE_PROTO"),
        Rt = function () {},
        xt = function (e) {
            return "<script>" + e + "<\/script>"
        },
        Lt = function () {
            try {
                St = document.domain && new ActiveXObject("htmlfile")
            } catch (e) {}
            var e, t;
            Lt = St ? function (e) {
                e.write(xt("")), e.close();
                var t = e.parentWindow.Object;
                return e = null, t
            }(St) : ((t = E("iframe")).style.display = "none", kt.appendChild(t), t.src = String("javascript:"), (e = t.contentWindow.document).open(), e.write(xt("document.F=Object")), e.close(), e.F);
            for (var n = me.length; n--;) delete Lt.prototype[me[n]];
            return Lt()
        };
    W[At] = !0;
    var Ct = Object.create || function (e, t) {
            var n;
            return null !== e ? (Rt.prototype = x(e), n = new Rt, Rt.prototype = null, n[At] = e) : n = Lt(), void 0 === t ? n : Et(n, t)
        },
        Pt = be.f,
        Nt = {}.toString,
        Mt = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
        It = {
            f: function (e) {
                return Mt && "[object Window]" == Nt.call(e) ? function (e) {
                    try {
                        return Pt(e)
                    } catch (e) {
                        return Mt.slice()
                    }
                }(e) : Pt(g(e))
            }
        },
        Ot = {
            f: Fe
        },
        Tt = C.f,
        Dt = C.f,
        jt = Fe("toStringTag"),
        Ht = function (e, t, n) {
            e && !b(e = n ? e : e.prototype, jt) && Dt(e, jt, {
                configurable: !0,
                value: t
            })
        },
        Ut = rt.forEach,
        Bt = V("hidden"),
        Ft = Fe("toPrimitive"),
        zt = ee.set,
        qt = ee.getterFor("Symbol"),
        _t = Object.prototype,
        Vt = i.Symbol,
        Wt = re("JSON", "stringify"),
        Kt = R.f,
        $t = C.f,
        Xt = It.f,
        Yt = l.f,
        Gt = B("symbols"),
        Jt = B("op-symbols"),
        Qt = B("string-to-symbol-registry"),
        Zt = B("symbol-to-string-registry"),
        en = B("wks"),
        tn = i.QObject,
        nn = !tn || !tn.prototype || !tn.prototype.findChild,
        rn = a && r((function () {
            return 7 != Ct($t({}, "a", {
                get: function () {
                    return $t(this, "a", {
                        value: 7
                    }).a
                }
            })).a
        })) ? function (e, t, n) {
            var i = Kt(_t, t);
            i && delete _t[t], $t(e, t, n), i && e !== _t && $t(_t, t, i)
        } : $t,
        an = function (e, t) {
            var n = Gt[e] = Ct(Vt.prototype);
            return zt(n, {
                type: "Symbol",
                tag: e,
                description: t
            }), a || (n.description = t), n
        },
        on = je ? function (e) {
            return "symbol" == typeof e
        } : function (e) {
            return Object(e) instanceof Vt
        },
        sn = function (e, t, n) {
            e === _t && sn(Jt, t, n), x(e);
            var i = m(t, !0);
            return x(n), b(Gt, i) ? (n.enumerable ? (b(e, Bt) && e[Bt][i] && (e[Bt][i] = !1), n = Ct(n, {
                enumerable: c(0, !1)
            })) : (b(e, Bt) || $t(e, Bt, c(1, {})), e[Bt][i] = !0), rn(e, i, n)) : $t(e, i, n)
        },
        ln = function (e, t) {
            x(e);
            var n = g(t),
                i = mt(n).concat(hn(n));
            return Ut(i, (function (t) {
                a && !cn.call(n, t) || sn(e, t, n[t])
            })), e
        },
        cn = function (e) {
            var t = m(e, !0),
                n = Yt.call(this, t);
            return !(this === _t && b(Gt, t) && !b(Jt, t)) && (!(n || !b(this, t) || !b(Gt, t) || b(this, Bt) && this[Bt][t]) || n)
        },
        un = function (e, t) {
            var n = g(e),
                i = m(t, !0);
            if (n !== _t || !b(Gt, i) || b(Jt, i)) {
                var r = Kt(n, i);
                return !r || !b(Gt, i) || b(n, Bt) && n[Bt][i] || (r.enumerable = !0), r
            }
        },
        dn = function (e) {
            var t = Xt(g(e)),
                n = [];
            return Ut(t, (function (e) {
                b(Gt, e) || b(W, e) || n.push(e)
            })), n
        },
        hn = function (e) {
            var t = e === _t,
                n = Xt(t ? Jt : g(e)),
                i = [];
            return Ut(n, (function (e) {
                !b(Gt, e) || t && !b(_t, e) || i.push(Gt[e])
            })), i
        };
    if (De || (te((Vt = function () {
            if (this instanceof Vt) throw TypeError("Symbol is not a constructor");
            var e = arguments.length && void 0 !== arguments[0] ? String(arguments[0]) : void 0,
                t = q(e),
                n = function (e) {
                    this === _t && n.call(Jt, e), b(this, Bt) && b(this[Bt], t) && (this[Bt][t] = !1), rn(this, t, c(1, e))
                };
            return a && nn && rn(_t, t, {
                configurable: !0,
                set: n
            }), an(t, e)
        }).prototype, "toString", (function () {
            return qt(this).tag
        })), te(Vt, "withoutSetter", (function (e) {
            return an(q(e), e)
        })), l.f = cn, C.f = sn, R.f = un, be.f = It.f = dn, we.f = hn, Ot.f = function (e) {
            return an(Fe(e), e)
        }, a && ($t(Vt.prototype, "description", {
            configurable: !0,
            get: function () {
                return qt(this).description
            }
        }), te(_t, "propertyIsEnumerable", cn, {
            unsafe: !0
        }))), Me({
            global: !0,
            wrap: !0,
            forced: !De,
            sham: !De
        }, {
            Symbol: Vt
        }), Ut(mt(en), (function (e) {
            ! function (e) {
                var t = ne.Symbol || (ne.Symbol = {});
                b(t, e) || Tt(t, e, {
                    value: Ot.f(e)
                })
            }(e)
        })), Me({
            target: "Symbol",
            stat: !0,
            forced: !De
        }, {
            for: function (e) {
                var t = String(e);
                if (b(Qt, t)) return Qt[t];
                var n = Vt(t);
                return Qt[t] = n, Zt[n] = t, n
            },
            keyFor: function (e) {
                if (!on(e)) throw TypeError(e + " is not a symbol");
                if (b(Zt, e)) return Zt[e]
            },
            useSetter: function () {
                nn = !0
            },
            useSimple: function () {
                nn = !1
            }
        }), Me({
            target: "Object",
            stat: !0,
            forced: !De,
            sham: !a
        }, {
            create: function (e, t) {
                return void 0 === t ? Ct(e) : ln(Ct(e), t)
            },
            defineProperty: sn,
            defineProperties: ln,
            getOwnPropertyDescriptor: un
        }), Me({
            target: "Object",
            stat: !0,
            forced: !De
        }, {
            getOwnPropertyNames: dn,
            getOwnPropertySymbols: hn
        }), Me({
            target: "Object",
            stat: !0,
            forced: r((function () {
                we.f(1)
            }))
        }, {
            getOwnPropertySymbols: function (e) {
                return we.f(Oe(e))
            }
        }), Wt) {
        var fn = !De || r((function () {
            var e = Vt();
            return "[null]" != Wt([e]) || "{}" != Wt({
                a: e
            }) || "{}" != Wt(Object(e))
        }));
        Me({
            target: "JSON",
            stat: !0,
            forced: fn
        }, {
            stringify: function (e, t, n) {
                for (var i, r = [e], a = 1; arguments.length > a;) r.push(arguments[a++]);
                if (i = t, (p(t) || void 0 !== e) && !on(e)) return Ie(t) || (t = function (e, t) {
                    if ("function" == typeof i && (t = i.call(this, e, t)), !on(t)) return t
                }), r[1] = t, Wt.apply(null, r)
            }
        })
    }
    Vt.prototype[Ft] || P(Vt.prototype, Ft, Vt.prototype.valueOf), Ht(Vt, "Symbol"), W[Bt] = !0;
    var vn = C.f,
        gn = i.Symbol;
    if (a && "function" == typeof gn && (!("description" in gn.prototype) || void 0 !== gn().description)) {
        var pn = {},
            mn = function () {
                var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : String(arguments[0]),
                    t = this instanceof mn ? new gn(e) : void 0 === e ? gn() : gn(e);
                return "" === e && (pn[t] = !0), t
            };
        Ee(mn, gn);
        var yn = mn.prototype = gn.prototype;
        yn.constructor = mn;
        var bn = yn.toString,
            wn = "Symbol(test)" == String(gn("test")),
            Sn = /^Symbol\((.*)\)[^)]+$/;
        vn(yn, "description", {
            configurable: !0,
            get: function () {
                var e = p(this) ? this.valueOf() : this,
                    t = bn.call(e);
                if (b(pn, e)) return "";
                var n = wn ? t.slice(7, -1) : t.replace(Sn, "$1");
                return "" === n ? void 0 : n
            }
        }), Me({
            global: !0,
            forced: !0
        }, {
            Symbol: mn
        })
    }
    var En = function (e, t, n, i) {
            try {
                return i ? t(x(n)[0], n[1]) : t(n)
            } catch (t) {
                var r = e.return;
                throw void 0 !== r && x(r.call(e)), t
            }
        },
        kn = {},
        An = Fe("iterator"),
        Rn = Array.prototype,
        xn = function (e) {
            return void 0 !== e && (kn.Array === e || Rn[An] === e)
        },
        Ln = {};
    Ln[Fe("toStringTag")] = "z";
    var Cn = "[object z]" === String(Ln),
        Pn = Fe("toStringTag"),
        Nn = "Arguments" == d(function () {
            return arguments
        }()),
        Mn = Cn ? d : function (e) {
            var t, n, i;
            return void 0 === e ? "Undefined" : null === e ? "Null" : "string" == typeof (n = function (e, t) {
                try {
                    return e[t]
                } catch (e) {}
            }(t = Object(e), Pn)) ? n : Nn ? d(t) : "Object" == (i = d(t)) && "function" == typeof t.callee ? "Arguments" : i
        },
        In = Fe("iterator"),
        On = function (e) {
            if (null != e) return e[In] || e["@@iterator"] || kn[Mn(e)]
        },
        Tn = Fe("iterator"),
        Dn = !1;
    try {
        var jn = 0,
            Hn = {
                next: function () {
                    return {
                        done: !!jn++
                    }
                },
                return: function () {
                    Dn = !0
                }
            };
        Hn[Tn] = function () {
            return this
        }, Array.from(Hn, (function () {
            throw 2
        }))
    } catch (e) {}
    var Un = function (e, t) {
            if (!t && !Dn) return !1;
            var n = !1;
            try {
                var i = {};
                i[Tn] = function () {
                    return {
                        next: function () {
                            return {
                                done: n = !0
                            }
                        }
                    }
                }, e(i)
            } catch (e) {}
            return n
        },
        Bn = !Un((function (e) {
            Array.from(e)
        }));
    Me({
        target: "Array",
        stat: !0,
        forced: Bn
    }, {
        from: function (e) {
            var t, n, i, r, a, o, s = Oe(e),
                l = "function" == typeof this ? this : Array,
                c = arguments.length,
                u = c > 1 ? arguments[1] : void 0,
                d = void 0 !== u,
                h = On(s),
                f = 0;
            if (d && (u = tt(u, c > 2 ? arguments[2] : void 0, 2)), null == h || l == Array && xn(h))
                for (n = new l(t = ce(s.length)); t > f; f++) o = d ? u(s[f], f) : s[f], Te(n, f, o);
            else
                for (a = (r = h.call(s)).next, n = new l; !(i = a.call(r)).done; f++) o = d ? En(r, u, [i.value, f], !0) : i.value, Te(n, f, o);
            return n.length = f, n
        }
    });
    var Fn = ve.indexOf,
        zn = [].indexOf,
        qn = !!zn && 1 / [1].indexOf(1, -0) < 0,
        _n = at("indexOf"),
        Vn = ct("indexOf", {
            ACCESSORS: !0,
            1: 0
        });
    Me({
        target: "Array",
        proto: !0,
        forced: qn || !_n || !Vn
    }, {
        indexOf: function (e) {
            return qn ? zn.apply(this, arguments) || 0 : Fn(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Wn = Ye("splice"),
        Kn = ct("splice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        $n = Math.max,
        Xn = Math.min;
    Me({
        target: "Array",
        proto: !0,
        forced: !Wn || !Kn
    }, {
        splice: function (e, t) {
            var n, i, r, a, o, s, l = Oe(this),
                c = ce(l.length),
                u = he(e, c),
                d = arguments.length;
            if (0 === d ? n = i = 0 : 1 === d ? (n = 0, i = c - u) : (n = d - 2, i = Xn($n(se(t), 0), c - u)), c + n - i > 9007199254740991) throw TypeError("Maximum allowed length exceeded");
            for (r = qe(l, i), a = 0; a < i; a++)(o = u + a) in l && Te(r, a, l[o]);
            if (r.length = i, n < i) {
                for (a = u; a < c - i; a++) s = a + n, (o = a + i) in l ? l[s] = l[o] : delete l[s];
                for (a = c; a > c - i + n; a--) delete l[a - 1]
            } else if (n > i)
                for (a = c - i; a > u; a--) s = a + n - 1, (o = a + i - 1) in l ? l[s] = l[o] : delete l[s];
            for (a = 0; a < n; a++) l[a + u] = arguments[a + 2];
            return l.length = c - i + n, r
        }
    });
    var Yn = C.f,
        Gn = Function.prototype,
        Jn = Gn.toString,
        Qn = /^\s*function ([^ (]*)/;
    a && !("name" in Gn) && Yn(Gn, "name", {
        configurable: !0,
        get: function () {
            try {
                return Jn.call(this).match(Qn)[1]
            } catch (e) {
                return ""
            }
        }
    });
    var Zn = Object.setPrototypeOf || ("__proto__" in {} ? function () {
            var e, t = !1,
                n = {};
            try {
                (e = Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set).call(n, []), t = n instanceof Array
            } catch (e) {}
            return function (n, i) {
                return x(n),
                    function (e) {
                        if (!p(e) && null !== e) throw TypeError("Can't set " + String(e) + " as a prototype")
                    }(i), t ? e.call(n, i) : n.__proto__ = i, n
            }
        }() : void 0),
        ei = function (e, t, n) {
            var i, r;
            return Zn && "function" == typeof (i = t.constructor) && i !== n && p(r = i.prototype) && r !== n.prototype && Zn(e, r), e
        },
        ti = "\t\n\v\f\r                　\u2028\u2029\ufeff",
        ni = "[" + ti + "]",
        ii = RegExp("^" + ni + ni + "*"),
        ri = RegExp(ni + ni + "*$"),
        ai = function (e) {
            return function (t) {
                var n = String(v(t));
                return 1 & e && (n = n.replace(ii, "")), 2 & e && (n = n.replace(ri, "")), n
            }
        },
        oi = {
            start: ai(1),
            end: ai(2),
            trim: ai(3)
        },
        si = be.f,
        li = R.f,
        ci = C.f,
        ui = oi.trim,
        di = i.Number,
        hi = di.prototype,
        fi = "Number" == d(Ct(hi)),
        vi = function (e) {
            var t, n, i, r, a, o, s, l, c = m(e, !1);
            if ("string" == typeof c && c.length > 2)
                if (43 === (t = (c = ui(c)).charCodeAt(0)) || 45 === t) {
                    if (88 === (n = c.charCodeAt(2)) || 120 === n) return NaN
                } else if (48 === t) {
                switch (c.charCodeAt(1)) {
                    case 66:
                    case 98:
                        i = 2, r = 49;
                        break;
                    case 79:
                    case 111:
                        i = 8, r = 55;
                        break;
                    default:
                        return +c
                }
                for (o = (a = c.slice(2)).length, s = 0; s < o; s++)
                    if ((l = a.charCodeAt(s)) < 48 || l > r) return NaN;
                return parseInt(a, i)
            }
            return +c
        };
    if (Pe("Number", !di(" 0o1") || !di("0b1") || di("+0x1"))) {
        for (var gi, pi = function (e) {
                var t = arguments.length < 1 ? 0 : e,
                    n = this;
                return n instanceof pi && (fi ? r((function () {
                    hi.valueOf.call(n)
                })) : "Number" != d(n)) ? ei(new di(vi(t)), n, pi) : vi(t)
            }, mi = a ? si(di) : "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","), yi = 0; mi.length > yi; yi++) b(di, gi = mi[yi]) && !b(pi, gi) && ci(pi, gi, li(di, gi));
        pi.prototype = hi, hi.constructor = pi, te(i, "Number", pi)
    }
    var bi = Cn ? {}.toString : function () {
        return "[object " + Mn(this) + "]"
    };
    Cn || te(Object.prototype, "toString", bi, {
        unsafe: !0
    });
    var wi, Si, Ei, ki = i.Promise,
        Ai = Fe("species"),
        Ri = t((function (e) {
            var t = function (e, t) {
                this.stopped = e, this.result = t
            };
            (e.exports = function (e, n, i, r, a) {
                var o, s, l, c, u, d, h, f = tt(n, i, r ? 2 : 1);
                if (a) o = e;
                else {
                    if ("function" != typeof (s = On(e))) throw TypeError("Target is not iterable");
                    if (xn(s)) {
                        for (l = 0, c = ce(e.length); c > l; l++)
                            if ((u = r ? f(x(h = e[l])[0], h[1]) : f(e[l])) && u instanceof t) return u;
                        return new t(!1)
                    }
                    o = s.call(e)
                }
                for (d = o.next; !(h = d.call(o)).done;)
                    if ("object" == typeof (u = En(o, f, h.value, r)) && u && u instanceof t) return u;
                return new t(!1)
            }).stop = function (e) {
                return new t(!0, e)
            }
        })),
        xi = Fe("species"),
        Li = function (e, t) {
            var n, i = x(e).constructor;
            return void 0 === i || null == (n = x(i)[xi]) ? t : et(n)
        },
        Ci = /(iphone|ipod|ipad).*applewebkit/i.test(_e),
        Pi = i.location,
        Ni = i.setImmediate,
        Mi = i.clearImmediate,
        Ii = i.process,
        Oi = i.MessageChannel,
        Ti = i.Dispatch,
        Di = 0,
        ji = {},
        Hi = function (e) {
            if (ji.hasOwnProperty(e)) {
                var t = ji[e];
                delete ji[e], t()
            }
        },
        Ui = function (e) {
            return function () {
                Hi(e)
            }
        },
        Bi = function (e) {
            Hi(e.data)
        },
        Fi = function (e) {
            i.postMessage(e + "", Pi.protocol + "//" + Pi.host)
        };
    Ni && Mi || (Ni = function (e) {
        for (var t = [], n = 1; arguments.length > n;) t.push(arguments[n++]);
        return ji[++Di] = function () {
            ("function" == typeof e ? e : Function(e)).apply(void 0, t)
        }, wi(Di), Di
    }, Mi = function (e) {
        delete ji[e]
    }, "process" == d(Ii) ? wi = function (e) {
        Ii.nextTick(Ui(e))
    } : Ti && Ti.now ? wi = function (e) {
        Ti.now(Ui(e))
    } : Oi && !Ci ? (Ei = (Si = new Oi).port2, Si.port1.onmessage = Bi, wi = tt(Ei.postMessage, Ei, 1)) : !i.addEventListener || "function" != typeof postMessage || i.importScripts || r(Fi) || "file:" === Pi.protocol ? wi = "onreadystatechange" in E("script") ? function (e) {
        kt.appendChild(E("script")).onreadystatechange = function () {
            kt.removeChild(this), Hi(e)
        }
    } : function (e) {
        setTimeout(Ui(e), 0)
    } : (wi = Fi, i.addEventListener("message", Bi, !1)));
    var zi, qi, _i, Vi, Wi, Ki, $i, Xi, Yi = {
            set: Ni,
            clear: Mi
        },
        Gi = R.f,
        Ji = Yi.set,
        Qi = i.MutationObserver || i.WebKitMutationObserver,
        Zi = i.process,
        er = i.Promise,
        tr = "process" == d(Zi),
        nr = Gi(i, "queueMicrotask"),
        ir = nr && nr.value;
    ir || (zi = function () {
        var e, t;
        for (tr && (e = Zi.domain) && e.exit(); qi;) {
            t = qi.fn, qi = qi.next;
            try {
                t()
            } catch (e) {
                throw qi ? Vi() : _i = void 0, e
            }
        }
        _i = void 0, e && e.enter()
    }, tr ? Vi = function () {
        Zi.nextTick(zi)
    } : Qi && !Ci ? (Wi = !0, Ki = document.createTextNode(""), new Qi(zi).observe(Ki, {
        characterData: !0
    }), Vi = function () {
        Ki.data = Wi = !Wi
    }) : er && er.resolve ? ($i = er.resolve(void 0), Xi = $i.then, Vi = function () {
        Xi.call($i, zi)
    }) : Vi = function () {
        Ji.call(i, zi)
    });
    var rr, ar, or, sr, lr = ir || function (e) {
            var t = {
                fn: e,
                next: void 0
            };
            _i && (_i.next = t), qi || (qi = t, Vi()), _i = t
        },
        cr = function (e) {
            var t, n;
            this.promise = new e((function (e, i) {
                if (void 0 !== t || void 0 !== n) throw TypeError("Bad Promise constructor");
                t = e, n = i
            })), this.resolve = et(t), this.reject = et(n)
        },
        ur = {
            f: function (e) {
                return new cr(e)
            }
        },
        dr = function (e, t) {
            if (x(e), p(t) && t.constructor === e) return t;
            var n = ur.f(e);
            return (0, n.resolve)(t), n.promise
        },
        hr = function (e) {
            try {
                return {
                    error: !1,
                    value: e()
                }
            } catch (e) {
                return {
                    error: !0,
                    value: e
                }
            }
        },
        fr = Yi.set,
        vr = Fe("species"),
        gr = "Promise",
        pr = ee.get,
        mr = ee.set,
        yr = ee.getterFor(gr),
        br = ki,
        wr = i.TypeError,
        Sr = i.document,
        Er = i.process,
        kr = re("fetch"),
        Ar = ur.f,
        Rr = Ar,
        xr = "process" == d(Er),
        Lr = !!(Sr && Sr.createEvent && i.dispatchEvent),
        Cr = Pe(gr, (function () {
            if (!(j(br) !== String(br))) {
                if (66 === $e) return !0;
                if (!xr && "function" != typeof PromiseRejectionEvent) return !0
            }
            if ($e >= 51 && /native code/.test(br)) return !1;
            var e = br.resolve(1),
                t = function (e) {
                    e((function () {}), (function () {}))
                };
            return (e.constructor = {})[vr] = t, !(e.then((function () {})) instanceof t)
        })),
        Pr = Cr || !Un((function (e) {
            br.all(e).catch((function () {}))
        })),
        Nr = function (e) {
            var t;
            return !(!p(e) || "function" != typeof (t = e.then)) && t
        },
        Mr = function (e, t, n) {
            if (!t.notified) {
                t.notified = !0;
                var i = t.reactions;
                lr((function () {
                    for (var r = t.value, a = 1 == t.state, o = 0; i.length > o;) {
                        var s, l, c, u = i[o++],
                            d = a ? u.ok : u.fail,
                            h = u.resolve,
                            f = u.reject,
                            v = u.domain;
                        try {
                            d ? (a || (2 === t.rejection && Dr(e, t), t.rejection = 1), !0 === d ? s = r : (v && v.enter(), s = d(r), v && (v.exit(), c = !0)), s === u.promise ? f(wr("Promise-chain cycle")) : (l = Nr(s)) ? l.call(s, h, f) : h(s)) : f(r)
                        } catch (e) {
                            v && !c && v.exit(), f(e)
                        }
                    }
                    t.reactions = [], t.notified = !1, n && !t.rejection && Or(e, t)
                }))
            }
        },
        Ir = function (e, t, n) {
            var r, a;
            Lr ? ((r = Sr.createEvent("Event")).promise = t, r.reason = n, r.initEvent(e, !1, !0), i.dispatchEvent(r)) : r = {
                promise: t,
                reason: n
            }, (a = i["on" + e]) ? a(r) : "unhandledrejection" === e && function (e, t) {
                var n = i.console;
                n && n.error && (1 === arguments.length ? n.error(e) : n.error(e, t))
            }("Unhandled promise rejection", n)
        },
        Or = function (e, t) {
            fr.call(i, (function () {
                var n, i = t.value;
                if (Tr(t) && (n = hr((function () {
                        xr ? Er.emit("unhandledRejection", i, e) : Ir("unhandledrejection", e, i)
                    })), t.rejection = xr || Tr(t) ? 2 : 1, n.error)) throw n.value
            }))
        },
        Tr = function (e) {
            return 1 !== e.rejection && !e.parent
        },
        Dr = function (e, t) {
            fr.call(i, (function () {
                xr ? Er.emit("rejectionHandled", e) : Ir("rejectionhandled", e, t.value)
            }))
        },
        jr = function (e, t, n, i) {
            return function (r) {
                e(t, n, r, i)
            }
        },
        Hr = function (e, t, n, i) {
            t.done || (t.done = !0, i && (t = i), t.value = n, t.state = 2, Mr(e, t, !0))
        },
        Ur = function (e, t, n, i) {
            if (!t.done) {
                t.done = !0, i && (t = i);
                try {
                    if (e === n) throw wr("Promise can't be resolved itself");
                    var r = Nr(n);
                    r ? lr((function () {
                        var i = {
                            done: !1
                        };
                        try {
                            r.call(n, jr(Ur, e, i, t), jr(Hr, e, i, t))
                        } catch (n) {
                            Hr(e, i, n, t)
                        }
                    })) : (t.value = n, t.state = 1, Mr(e, t, !1))
                } catch (n) {
                    Hr(e, {
                        done: !1
                    }, n, t)
                }
            }
        };
    Cr && (br = function (e) {
            ! function (e, t, n) {
                if (!(e instanceof t)) throw TypeError("Incorrect " + (n ? n + " " : "") + "invocation")
            }(this, br, gr), et(e), rr.call(this);
            var t = pr(this);
            try {
                e(jr(Ur, this, t), jr(Hr, this, t))
            } catch (e) {
                Hr(this, t, e)
            }
        }, (rr = function (e) {
            mr(this, {
                type: gr,
                done: !1,
                notified: !1,
                parent: !1,
                reactions: [],
                rejection: !1,
                state: 0,
                value: void 0
            })
        }).prototype = function (e, t, n) {
            for (var i in t) te(e, i, t[i], n);
            return e
        }(br.prototype, {
            then: function (e, t) {
                var n = yr(this),
                    i = Ar(Li(this, br));
                return i.ok = "function" != typeof e || e, i.fail = "function" == typeof t && t, i.domain = xr ? Er.domain : void 0, n.parent = !0, n.reactions.push(i), 0 != n.state && Mr(this, n, !1), i.promise
            },
            catch: function (e) {
                return this.then(void 0, e)
            }
        }), ar = function () {
            var e = new rr,
                t = pr(e);
            this.promise = e, this.resolve = jr(Ur, e, t), this.reject = jr(Hr, e, t)
        }, ur.f = Ar = function (e) {
            return e === br || e === or ? new ar(e) : Rr(e)
        }, "function" == typeof ki && (sr = ki.prototype.then, te(ki.prototype, "then", (function (e, t) {
            var n = this;
            return new br((function (e, t) {
                sr.call(n, e, t)
            })).then(e, t)
        }), {
            unsafe: !0
        }), "function" == typeof kr && Me({
            global: !0,
            enumerable: !0,
            forced: !0
        }, {
            fetch: function (e) {
                return dr(br, kr.apply(i, arguments))
            }
        }))), Me({
            global: !0,
            wrap: !0,
            forced: Cr
        }, {
            Promise: br
        }), Ht(br, gr, !1),
        function (e) {
            var t = re(e),
                n = C.f;
            a && t && !t[Ai] && n(t, Ai, {
                configurable: !0,
                get: function () {
                    return this
                }
            })
        }(gr), or = re(gr), Me({
            target: gr,
            stat: !0,
            forced: Cr
        }, {
            reject: function (e) {
                var t = Ar(this);
                return t.reject.call(void 0, e), t.promise
            }
        }), Me({
            target: gr,
            stat: !0,
            forced: Cr
        }, {
            resolve: function (e) {
                return dr(this, e)
            }
        }), Me({
            target: gr,
            stat: !0,
            forced: Pr
        }, {
            all: function (e) {
                var t = this,
                    n = Ar(t),
                    i = n.resolve,
                    r = n.reject,
                    a = hr((function () {
                        var n = et(t.resolve),
                            a = [],
                            o = 0,
                            s = 1;
                        Ri(e, (function (e) {
                            var l = o++,
                                c = !1;
                            a.push(void 0), s++, n.call(t, e).then((function (e) {
                                c || (c = !0, a[l] = e, --s || i(a))
                            }), r)
                        })), --s || i(a)
                    }));
                return a.error && r(a.value), n.promise
            },
            race: function (e) {
                var t = this,
                    n = Ar(t),
                    i = n.reject,
                    r = hr((function () {
                        var r = et(t.resolve);
                        Ri(e, (function (e) {
                            r.call(t, e).then(n.resolve, i)
                        }))
                    }));
                return r.error && i(r.value), n.promise
            }
        });
    var Br = function () {
        var e = x(this),
            t = "";
        return e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.sticky && (t += "y"), t
    };

    function Fr(e, t) {
        return RegExp(e, t)
    }
    var zr, qr, _r = {
            UNSUPPORTED_Y: r((function () {
                var e = Fr("a", "y");
                return e.lastIndex = 2, null != e.exec("abcd")
            })),
            BROKEN_CARET: r((function () {
                var e = Fr("^r", "gy");
                return e.lastIndex = 2, null != e.exec("str")
            }))
        },
        Vr = RegExp.prototype.exec,
        Wr = String.prototype.replace,
        Kr = Vr,
        $r = (zr = /a/, qr = /b*/g, Vr.call(zr, "a"), Vr.call(qr, "a"), 0 !== zr.lastIndex || 0 !== qr.lastIndex),
        Xr = _r.UNSUPPORTED_Y || _r.BROKEN_CARET,
        Yr = void 0 !== /()??/.exec("")[1];
    ($r || Yr || Xr) && (Kr = function (e) {
        var t, n, i, r, a = this,
            o = Xr && a.sticky,
            s = Br.call(a),
            l = a.source,
            c = 0,
            u = e;
        return o && (-1 === (s = s.replace("y", "")).indexOf("g") && (s += "g"), u = String(e).slice(a.lastIndex), a.lastIndex > 0 && (!a.multiline || a.multiline && "\n" !== e[a.lastIndex - 1]) && (l = "(?: " + l + ")", u = " " + u, c++), n = new RegExp("^(?:" + l + ")", s)), Yr && (n = new RegExp("^" + l + "$(?!\\s)", s)), $r && (t = a.lastIndex), i = Vr.call(o ? n : a, u), o ? i ? (i.input = i.input.slice(c), i[0] = i[0].slice(c), i.index = a.lastIndex, a.lastIndex += i[0].length) : a.lastIndex = 0 : $r && i && (a.lastIndex = a.global ? i.index + i[0].length : t), Yr && i && i.length > 1 && Wr.call(i[0], n, (function () {
            for (r = 1; r < arguments.length - 2; r++) void 0 === arguments[r] && (i[r] = void 0)
        })), i
    });
    var Gr = Kr;
    Me({
        target: "RegExp",
        proto: !0,
        forced: /./.exec !== Gr
    }, {
        exec: Gr
    });
    var Jr, Qr, Zr, ea = function (e) {
            return function (t, n) {
                var i, r, a = String(v(t)),
                    o = se(n),
                    s = a.length;
                return o < 0 || o >= s ? e ? "" : void 0 : (i = a.charCodeAt(o)) < 55296 || i > 56319 || o + 1 === s || (r = a.charCodeAt(o + 1)) < 56320 || r > 57343 ? e ? a.charAt(o) : i : e ? a.slice(o, o + 2) : r - 56320 + (i - 55296 << 10) + 65536
            }
        },
        ta = {
            codeAt: ea(!1),
            charAt: ea(!0)
        },
        na = !r((function () {
            function e() {}
            return e.prototype.constructor = null, Object.getPrototypeOf(new e) !== e.prototype
        })),
        ia = V("IE_PROTO"),
        ra = Object.prototype,
        aa = na ? Object.getPrototypeOf : function (e) {
            return e = Oe(e), b(e, ia) ? e[ia] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? ra : null
        },
        oa = Fe("iterator"),
        sa = !1;
    [].keys && ("next" in (Zr = [].keys()) ? (Qr = aa(aa(Zr))) !== Object.prototype && (Jr = Qr) : sa = !0), null == Jr && (Jr = {}), b(Jr, oa) || P(Jr, oa, (function () {
        return this
    }));
    var la = {
            IteratorPrototype: Jr,
            BUGGY_SAFARI_ITERATORS: sa
        },
        ca = la.IteratorPrototype,
        ua = function () {
            return this
        },
        da = la.IteratorPrototype,
        ha = la.BUGGY_SAFARI_ITERATORS,
        fa = Fe("iterator"),
        va = function () {
            return this
        },
        ga = ta.charAt,
        pa = ee.set,
        ma = ee.getterFor("String Iterator");
    ! function (e, t, n, i, r, a, o) {
        ! function (e, t, n) {
            var i = t + " Iterator";
            e.prototype = Ct(ca, {
                next: c(1, n)
            }), Ht(e, i, !1), kn[i] = ua
        }(n, t, i);
        var s, l, u, d = function (e) {
                if (e === r && p) return p;
                if (!ha && e in v) return v[e];
                switch (e) {
                    case "keys":
                    case "values":
                    case "entries":
                        return function () {
                            return new n(this, e)
                        }
                }
                return function () {
                    return new n(this)
                }
            },
            h = t + " Iterator",
            f = !1,
            v = e.prototype,
            g = v[fa] || v["@@iterator"] || r && v[r],
            p = !ha && g || d(r),
            m = "Array" == t && v.entries || g;
        if (m && (s = aa(m.call(new e)), da !== Object.prototype && s.next && (aa(s) !== da && (Zn ? Zn(s, da) : "function" != typeof s[fa] && P(s, fa, va)), Ht(s, h, !0))), "values" == r && g && "values" !== g.name && (f = !0, p = function () {
                return g.call(this)
            }), v[fa] !== p && P(v, fa, p), kn[t] = p, r)
            if (l = {
                    values: d("values"),
                    keys: a ? p : d("keys"),
                    entries: d("entries")
                }, o)
                for (u in l)(ha || f || !(u in v)) && te(v, u, l[u]);
            else Me({
                target: t,
                proto: !0,
                forced: ha || f
            }, l)
    }(String, "String", (function (e) {
        pa(this, {
            type: "String Iterator",
            string: String(e),
            index: 0
        })
    }), (function () {
        var e, t = ma(this),
            n = t.string,
            i = t.index;
        return i >= n.length ? {
            value: void 0,
            done: !0
        } : (e = ga(n, i), t.index += e.length, {
            value: e,
            done: !1
        })
    }));
    var ya = Fe("species"),
        ba = !r((function () {
            var e = /./;
            return e.exec = function () {
                var e = [];
                return e.groups = {
                    a: "7"
                }, e
            }, "7" !== "".replace(e, "$<a>")
        })),
        wa = "$0" === "a".replace(/./, "$0"),
        Sa = Fe("replace"),
        Ea = !!/./ [Sa] && "" === /./ [Sa]("a", "$0"),
        ka = !r((function () {
            var e = /(?:)/,
                t = e.exec;
            e.exec = function () {
                return t.apply(this, arguments)
            };
            var n = "ab".split(e);
            return 2 !== n.length || "a" !== n[0] || "b" !== n[1]
        })),
        Aa = function (e, t, n, i) {
            var a = Fe(e),
                o = !r((function () {
                    var t = {};
                    return t[a] = function () {
                        return 7
                    }, 7 != "" [e](t)
                })),
                s = o && !r((function () {
                    var t = !1,
                        n = /a/;
                    return "split" === e && ((n = {}).constructor = {}, n.constructor[ya] = function () {
                        return n
                    }, n.flags = "", n[a] = /./ [a]), n.exec = function () {
                        return t = !0, null
                    }, n[a](""), !t
                }));
            if (!o || !s || "replace" === e && (!ba || !wa || Ea) || "split" === e && !ka) {
                var l = /./ [a],
                    c = n(a, "" [e], (function (e, t, n, i, r) {
                        return t.exec === Gr ? o && !r ? {
                            done: !0,
                            value: l.call(t, n, i)
                        } : {
                            done: !0,
                            value: e.call(n, t, i)
                        } : {
                            done: !1
                        }
                    }), {
                        REPLACE_KEEPS_$0: wa,
                        REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE: Ea
                    }),
                    u = c[0],
                    d = c[1];
                te(String.prototype, e, u), te(RegExp.prototype, a, 2 == t ? function (e, t) {
                    return d.call(e, this, t)
                } : function (e) {
                    return d.call(e, this)
                })
            }
            i && P(RegExp.prototype[a], "sham", !0)
        },
        Ra = ta.charAt,
        xa = function (e, t, n) {
            return t + (n ? Ra(e, t).length : 1)
        },
        La = function (e, t) {
            var n = e.exec;
            if ("function" == typeof n) {
                var i = n.call(e, t);
                if ("object" != typeof i) throw TypeError("RegExp exec method returned something other than an Object or null");
                return i
            }
            if ("RegExp" !== d(e)) throw TypeError("RegExp#exec called on incompatible receiver");
            return Gr.call(e, t)
        };
    Aa("match", 1, (function (e, t, n) {
        return [function (t) {
            var n = v(this),
                i = null == t ? void 0 : t[e];
            return void 0 !== i ? i.call(t, n) : new RegExp(t)[e](String(n))
        }, function (e) {
            var i = n(t, e, this);
            if (i.done) return i.value;
            var r = x(e),
                a = String(this);
            if (!r.global) return La(r, a);
            var o = r.unicode;
            r.lastIndex = 0;
            for (var s, l = [], c = 0; null !== (s = La(r, a));) {
                var u = String(s[0]);
                l[c] = u, "" === u && (r.lastIndex = xa(a, ce(r.lastIndex), o)), c++
            }
            return 0 === c ? null : l
        }]
    }));
    var Ca = Fe("match"),
        Pa = [].push,
        Na = Math.min,
        Ma = !r((function () {
            return !RegExp(4294967295, "y")
        }));
    Aa("split", 2, (function (e, t, n) {
        var i;
        return i = "c" == "abbc".split(/(b)*/)[1] || 4 != "test".split(/(?:)/, -1).length || 2 != "ab".split(/(?:ab)*/).length || 4 != ".".split(/(.?)(.?)/).length || ".".split(/()()/).length > 1 || "".split(/.?/).length ? function (e, n) {
            var i, r, a = String(v(this)),
                o = void 0 === n ? 4294967295 : n >>> 0;
            if (0 === o) return [];
            if (void 0 === e) return [a];
            if (!p(i = e) || !(void 0 !== (r = i[Ca]) ? r : "RegExp" == d(i))) return t.call(a, e, o);
            for (var s, l, c, u = [], h = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.unicode ? "u" : "") + (e.sticky ? "y" : ""), f = 0, g = new RegExp(e.source, h + "g");
                (s = Gr.call(g, a)) && !((l = g.lastIndex) > f && (u.push(a.slice(f, s.index)), s.length > 1 && s.index < a.length && Pa.apply(u, s.slice(1)), c = s[0].length, f = l, u.length >= o));) g.lastIndex === s.index && g.lastIndex++;
            return f === a.length ? !c && g.test("") || u.push("") : u.push(a.slice(f)), u.length > o ? u.slice(0, o) : u
        } : "0".split(void 0, 0).length ? function (e, n) {
            return void 0 === e && 0 === n ? [] : t.call(this, e, n)
        } : t, [function (t, n) {
            var r = v(this),
                a = null == t ? void 0 : t[e];
            return void 0 !== a ? a.call(t, r, n) : i.call(String(r), t, n)
        }, function (e, r) {
            var a = n(i, e, this, r, i !== t);
            if (a.done) return a.value;
            var o = x(e),
                s = String(this),
                l = Li(o, RegExp),
                c = o.unicode,
                u = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.unicode ? "u" : "") + (Ma ? "y" : "g"),
                d = new l(Ma ? o : "^(?:" + o.source + ")", u),
                h = void 0 === r ? 4294967295 : r >>> 0;
            if (0 === h) return [];
            if (0 === s.length) return null === La(d, s) ? [s] : [];
            for (var f = 0, v = 0, g = []; v < s.length;) {
                d.lastIndex = Ma ? v : 0;
                var p, m = La(d, Ma ? s : s.slice(v));
                if (null === m || (p = Na(ce(d.lastIndex + (Ma ? 0 : v)), s.length)) === f) v = xa(s, v, c);
                else {
                    if (g.push(s.slice(f, v)), g.length === h) return g;
                    for (var y = 1; y <= m.length - 1; y++)
                        if (g.push(m[y]), g.length === h) return g;
                    v = f = p
                }
            }
            return g.push(s.slice(f)), g
        }]
    }), !Ma);
    var Ia, Oa = oi.trim;
    Me({
        target: "String",
        proto: !0,
        forced: (Ia = "trim", r((function () {
            return !!ti[Ia]() || "​᠎" != "​᠎" [Ia]() || ti[Ia].name !== Ia
        })))
    }, {
        trim: function () {
            return Oa(this)
        }
    });
    for (var Ta in {
            CSSRuleList: 0,
            CSSStyleDeclaration: 0,
            CSSValueList: 0,
            ClientRectList: 0,
            DOMRectList: 0,
            DOMStringList: 0,
            DOMTokenList: 1,
            DataTransferItemList: 0,
            FileList: 0,
            HTMLAllCollection: 0,
            HTMLCollection: 0,
            HTMLFormElement: 0,
            HTMLSelectElement: 0,
            MediaList: 0,
            MimeTypeArray: 0,
            NamedNodeMap: 0,
            NodeList: 1,
            PaintRequestList: 0,
            Plugin: 0,
            PluginArray: 0,
            SVGLengthList: 0,
            SVGNumberList: 0,
            SVGPathSegList: 0,
            SVGPointList: 0,
            SVGStringList: 0,
            SVGTransformList: 0,
            SourceBufferList: 0,
            StyleSheetList: 0,
            TextTrackCueList: 0,
            TextTrackList: 0,
            TouchList: 0
        }) {
        var Da = i[Ta],
            ja = Da && Da.prototype;
        if (ja && ja.forEach !== ft) try {
            P(ja, "forEach", ft)
        } catch (e) {
            ja.forEach = ft
        }
    }

    function Ha(e) {
        return (Ha = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function Ua(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function Ba(e, t) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
    }

    function Fa(e, t, n) {
        return t && Ba(e.prototype, t), n && Ba(e, n), e
    }

    function za(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function qa(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            t && (i = i.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function _a(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? qa(Object(n), !0).forEach((function (t) {
                za(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : qa(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function Va(e) {
        return function (e) {
            if (Array.isArray(e)) return Wa(e)
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
        }(e) || function (e, t) {
            if (!e) return;
            if ("string" == typeof e) return Wa(e, t);
            var n = Object.prototype.toString.call(e).slice(8, -1);
            "Object" === n && e.constructor && (n = e.constructor.name);
            if ("Map" === n || "Set" === n) return Array.from(e);
            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return Wa(e, t)
        }(e) || function () {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function Wa(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
        return i
    }
    var Ka = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener/,
        $a = /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/,
        Xa = Math.max,
        Ya = Math.min,
        Ga = Math.floor,
        Ja = /\$([$&'`]|\d\d?|<[^>]*>)/g,
        Qa = /\$([$&'`]|\d\d?)/g;
    Aa("replace", 2, (function (e, t, n, i) {
        var r = i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,
            a = i.REPLACE_KEEPS_$0,
            o = r ? "$" : "$0";
        return [function (n, i) {
            var r = v(this),
                a = null == n ? void 0 : n[e];
            return void 0 !== a ? a.call(n, r, i) : t.call(String(r), n, i)
        }, function (e, i) {
            if (!r && a || "string" == typeof i && -1 === i.indexOf(o)) {
                var l = n(t, e, this, i);
                if (l.done) return l.value
            }
            var c = x(e),
                u = String(this),
                d = "function" == typeof i;
            d || (i = String(i));
            var h = c.global;
            if (h) {
                var f = c.unicode;
                c.lastIndex = 0
            }
            for (var v = [];;) {
                var g = La(c, u);
                if (null === g) break;
                if (v.push(g), !h) break;
                "" === String(g[0]) && (c.lastIndex = xa(u, ce(c.lastIndex), f))
            }
            for (var p, m = "", y = 0, b = 0; b < v.length; b++) {
                g = v[b];
                for (var w = String(g[0]), S = Xa(Ya(se(g.index), u.length), 0), E = [], k = 1; k < g.length; k++) E.push(void 0 === (p = g[k]) ? p : String(p));
                var A = g.groups;
                if (d) {
                    var R = [w].concat(E, S, u);
                    void 0 !== A && R.push(A);
                    var L = String(i.apply(void 0, R))
                } else L = s(w, u, S, E, A, i);
                S >= y && (m += u.slice(y, S) + L, y = S + w.length)
            }
            return m + u.slice(y)
        }];

        function s(e, n, i, r, a, o) {
            var s = i + e.length,
                l = r.length,
                c = Qa;
            return void 0 !== a && (a = Oe(a), c = Ja), t.call(o, c, (function (t, o) {
                var c;
                switch (o.charAt(0)) {
                    case "$":
                        return "$";
                    case "&":
                        return e;
                    case "`":
                        return n.slice(0, i);
                    case "'":
                        return n.slice(s);
                    case "<":
                        c = a[o.slice(1, -1)];
                        break;
                    default:
                        var u = +o;
                        if (0 === u) return t;
                        if (u > l) {
                            var d = Ga(u / 10);
                            return 0 === d ? t : d <= l ? void 0 === r[d - 1] ? o.charAt(1) : r[d - 1] + o.charAt(1) : t
                        }
                        c = r[u - 1]
                }
                return void 0 === c ? "" : c
            }))
        }
    }));
    var Za = Object.is || function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
    };
    Aa("search", 1, (function (e, t, n) {
        return [function (t) {
            var n = v(this),
                i = null == t ? void 0 : t[e];
            return void 0 !== i ? i.call(t, n) : new RegExp(t)[e](String(n))
        }, function (e) {
            var i = n(t, e, this);
            if (i.done) return i.value;
            var r = x(e),
                a = String(this),
                o = r.lastIndex;
            Za(o, 0) || (r.lastIndex = 0);
            var s = La(r, a);
            return Za(r.lastIndex, o) || (r.lastIndex = o), null === s ? -1 : s.index
        }]
    }));
    var eo = function (e, t) {
            for (var n in t) e[n] = t[n];
            return e
        },
        to = function (e, t) {
            return Array.from(e.querySelectorAll(t))
        },
        no = function (e, t, n) {
            n ? e.classList.add(t) : e.classList.remove(t)
        },
        io = function (e) {
            if ("string" == typeof e) {
                if ("null" === e) return null;
                if ("true" === e) return !0;
                if ("false" === e) return !1;
                if (e.match(/^-?[\d\.]+$/)) return parseFloat(e)
            }
            return e
        },
        ro = function (e, t) {
            e.style.transform = t
        },
        ao = function (e, t) {
            var n = e.matches || e.matchesSelector || e.msMatchesSelector;
            return !(!n || !n.call(e, t))
        },
        oo = function (e, t) {
            if ("function" == typeof e.closest) return e.closest(t);
            for (; e;) {
                if (ao(e, t)) return e;
                e = e.parentNode
            }
            return null
        },
        so = function (e, t, n) {
            for (var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "", r = e.querySelectorAll("." + n), a = 0; a < r.length; a++) {
                var o = r[a];
                if (o.parentNode === e) return o
            }
            var s = document.createElement(t);
            return s.className = n, s.innerHTML = i, e.appendChild(s), s
        },
        lo = function (e) {
            var t = document.createElement("style");
            return t.type = "text/css", e && e.length > 0 && (t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e))), document.head.appendChild(t), t
        },
        co = function () {
            var e = {};
            for (var t in location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, (function (t) {
                    e[t.split("=").shift()] = t.split("=").pop()
                })), e) {
                var n = e[t];
                e[t] = io(unescape(n))
            }
            return void 0 !== e.dependencies && delete e.dependencies, e
        },
        uo = function (e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
            if (e) {
                var n, i = e.style.height;
                return e.style.height = "0px", e.parentNode.style.height = "auto", n = t - e.parentNode.offsetHeight, e.style.height = i + "px", e.parentNode.style.removeProperty("height"), n
            }
            return t
        },
        ho = navigator.userAgent,
        fo = document.createElement("div"),
        vo = /(iphone|ipod|ipad|android)/gi.test(ho) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1,
        go = /chrome/i.test(ho) && !/edge/i.test(ho),
        po = /android/gi.test(ho),
        mo = "zoom" in fo.style && !vo && (go || /Version\/[\d\.]+.*Safari/.test(ho)),
        yo = "function" == typeof window.history.replaceState && !/PhantomJS/.test(ho),
        bo = function () {
            function e(t) {
                Ua(this, e), this.Reveal = t, this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this)
            }
            return Fa(e, [{
                key: "shouldPreload",
                value: function (e) {
                    var t = this.Reveal.getConfig().preloadIframes;
                    return "boolean" != typeof t && (t = e.hasAttribute("data-preload")), t
                }
            }, {
                key: "load",
                value: function (e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    e.style.display = this.Reveal.getConfig().display, to(e, "img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach((function (e) {
                        ("IFRAME" !== e.tagName || t.shouldPreload(e)) && (e.setAttribute("src", e.getAttribute("data-src")), e.setAttribute("data-lazy-loaded", ""), e.removeAttribute("data-src"))
                    })), to(e, "video, audio").forEach((function (e) {
                        var t = 0;
                        to(e, "source[data-src]").forEach((function (e) {
                            e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src"), e.setAttribute("data-lazy-loaded", ""), t += 1
                        })), t > 0 && e.load()
                    }));
                    var i = e.slideBackgroundElement;
                    if (i) {
                        i.style.display = "block";
                        var r = e.slideBackgroundContentElement,
                            a = e.getAttribute("data-background-iframe");
                        if (!1 === i.hasAttribute("data-loaded")) {
                            i.setAttribute("data-loaded", "true");
                            var o = e.getAttribute("data-background-image"),
                                s = e.getAttribute("data-background-video"),
                                l = e.hasAttribute("data-background-video-loop"),
                                c = e.hasAttribute("data-background-video-muted");
                            if (o) r.style.backgroundImage = "url(" + encodeURI(o) + ")";
                            else if (s && !this.Reveal.isSpeakerNotes()) {
                                var u = document.createElement("video");
                                l && u.setAttribute("loop", ""), c && (u.muted = !0), vo && (u.muted = !0, u.autoplay = !0, u.setAttribute("playsinline", "")), s.split(",").forEach((function (e) {
                                    u.innerHTML += '<source src="' + e + '">'
                                })), r.appendChild(u)
                            } else if (a && !0 !== n.excludeIframes) {
                                var d = document.createElement("iframe");
                                d.setAttribute("allowfullscreen", ""), d.setAttribute("mozallowfullscreen", ""), d.setAttribute("webkitallowfullscreen", ""), d.setAttribute("allow", "autoplay"), d.setAttribute("data-src", a), d.style.width = "100%", d.style.height = "100%", d.style.maxHeight = "100%", d.style.maxWidth = "100%", r.appendChild(d)
                            }
                        }
                        var h = r.querySelector("iframe[data-src]");
                        h && this.shouldPreload(i) && !/autoplay=(1|true|yes)/gi.test(a) && h.getAttribute("src") !== a && h.setAttribute("src", a)
                    }
                }
            }, {
                key: "unload",
                value: function (e) {
                    e.style.display = "none";
                    var t = this.Reveal.getSlideBackground(e);
                    t && (t.style.display = "none", to(t, "iframe[src]").forEach((function (e) {
                        e.removeAttribute("src")
                    }))), to(e, "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach((function (e) {
                        e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src")
                    })), to(e, "video[data-lazy-loaded] source[src], audio source[src]").forEach((function (e) {
                        e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src")
                    }))
                }
            }, {
                key: "formatEmbeddedContent",
                value: function () {
                    var e = this,
                        t = function (t, n, i) {
                            to(e.Reveal.getSlidesElement(), "iframe[" + t + '*="' + n + '"]').forEach((function (e) {
                                var n = e.getAttribute(t);
                                n && -1 === n.indexOf(i) && e.setAttribute(t, n + (/\?/.test(n) ? "&" : "?") + i)
                            }))
                        };
                    t("src", "youtube.com/embed/", "enablejsapi=1"), t("data-src", "youtube.com/embed/", "enablejsapi=1"), t("src", "player.vimeo.com/", "api=1"), t("data-src", "player.vimeo.com/", "api=1")
                }
            }, {
                key: "startEmbeddedContent",
                value: function (e) {
                    var t = this;
                    e && !this.Reveal.isSpeakerNotes() && (to(e, 'img[src$=".gif"]').forEach((function (e) {
                        e.setAttribute("src", e.getAttribute("src"))
                    })), to(e, "video, audio").forEach((function (e) {
                        if (!oo(e, ".fragment") || oo(e, ".fragment.visible")) {
                            var n = t.Reveal.getConfig().autoPlayMedia;
                            if ("boolean" != typeof n && (n = e.hasAttribute("data-autoplay") || !!oo(e, ".slide-background")), n && "function" == typeof e.play)
                                if (e.readyState > 1) t.startEmbeddedMedia({
                                    target: e
                                });
                                else if (vo) {
                                var i = e.play();
                                i && "function" == typeof i.catch && !1 === e.controls && i.catch((function () {
                                    e.controls = !0, e.addEventListener("play", (function () {
                                        e.controls = !1
                                    }))
                                }))
                            } else e.removeEventListener("loadeddata", t.startEmbeddedMedia), e.addEventListener("loadeddata", t.startEmbeddedMedia)
                        }
                    })), to(e, "iframe[src]").forEach((function (e) {
                        oo(e, ".fragment") && !oo(e, ".fragment.visible") || t.startEmbeddedIframe({
                            target: e
                        })
                    })), to(e, "iframe[data-src]").forEach((function (e) {
                        oo(e, ".fragment") && !oo(e, ".fragment.visible") || e.getAttribute("src") !== e.getAttribute("data-src") && (e.removeEventListener("load", t.startEmbeddedIframe), e.addEventListener("load", t.startEmbeddedIframe), e.setAttribute("src", e.getAttribute("data-src")))
                    })))
                }
            }, {
                key: "startEmbeddedMedia",
                value: function (e) {
                    var t = !!oo(e.target, "html"),
                        n = !!oo(e.target, ".present");
                    t && n && (e.target.currentTime = 0, e.target.play()), e.target.removeEventListener("loadeddata", this.startEmbeddedMedia)
                }
            }, {
                key: "startEmbeddedIframe",
                value: function (e) {
                    var t = e.target;
                    if (t && t.contentWindow) {
                        var n = !!oo(e.target, "html"),
                            i = !!oo(e.target, ".present");
                        if (n && i) {
                            var r = this.Reveal.getConfig().autoPlayMedia;
                            "boolean" != typeof r && (r = t.hasAttribute("data-autoplay") || !!oo(t, ".slide-background")), /youtube\.com\/embed\//.test(t.getAttribute("src")) && r ? t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t.getAttribute("src")) && r ? t.contentWindow.postMessage('{"method":"play"}', "*") : t.contentWindow.postMessage("slide:start", "*")
                        }
                    }
                }
            }, {
                key: "stopEmbeddedContent",
                value: function (e) {
                    var t = this,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    n = eo({
                        unloadIframes: !0
                    }, n), e && e.parentNode && (to(e, "video, audio").forEach((function (e) {
                        e.hasAttribute("data-ignore") || "function" != typeof e.pause || (e.setAttribute("data-paused-by-reveal", ""), e.pause())
                    })), to(e, "iframe").forEach((function (e) {
                        e.contentWindow && e.contentWindow.postMessage("slide:stop", "*"), e.removeEventListener("load", t.startEmbeddedIframe)
                    })), to(e, 'iframe[src*="youtube.com/embed/"]').forEach((function (e) {
                        !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                    })), to(e, 'iframe[src*="player.vimeo.com/"]').forEach((function (e) {
                        !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"method":"pause"}', "*")
                    })), !0 === n.unloadIframes && to(e, "iframe[data-src]").forEach((function (e) {
                        e.setAttribute("src", "about:blank"), e.removeAttribute("src")
                    })))
                }
            }]), e
        }(),
        wo = function () {
            function e(t) {
                Ua(this, e), this.Reveal = t
            }
            return Fa(e, [{
                key: "render",
                value: function () {
                    this.element = document.createElement("div"), this.element.className = "slide-number", this.Reveal.getRevealElement().appendChild(this.element)
                }
            }, {
                key: "configure",
                value: function (e, t) {
                    var n = "none";
                    e.slideNumber && !this.Reveal.isPrintingPDF() && ("all" === e.showSlideNumber || "speaker" === e.showSlideNumber && this.Reveal.isSpeakerNotes()) && (n = "block"), this.element.style.display = n
                }
            }, {
                key: "update",
                value: function () {
                    this.Reveal.getConfig().slideNumber && this.element && (this.element.innerHTML = this.getSlideNumber())
                }
            }, {
                key: "getSlideNumber",
                value: function () {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Reveal.getCurrentSlide(),
                        n = this.Reveal.getConfig(),
                        i = "h.v";
                    if ("function" == typeof n.slideNumber) e = n.slideNumber(t);
                    else switch ("string" == typeof n.slideNumber && (i = n.slideNumber), /c/.test(i) || 1 !== this.Reveal.getHorizontalSlides().length || (i = "c"), e = [], i) {
                        case "c":
                            e.push(this.Reveal.getSlidePastCount(t) + 1);
                            break;
                        case "c/t":
                            e.push(this.Reveal.getSlidePastCount(t) + 1, "/", this.Reveal.getTotalSlides());
                            break;
                        default:
                            var r = this.Reveal.getIndices(t);
                            e.push(r.h + 1);
                            var a = "h/v" === i ? "/" : ".";
                            this.Reveal.isVerticalSlide(t) && e.push(a, r.v + 1)
                    }
                    var o = "#" + this.Reveal.location.getHash(t);
                    return this.formatNumber(e[0], e[1], e[2], o)
                }
            }, {
                key: "formatNumber",
                value: function (e, t, n) {
                    var i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "#" + this.Reveal.location.getHash();
                    return "number" != typeof n || isNaN(n) ? '<a href="'.concat(i, '">\n\t\t\t\t\t<span class="slide-number-a">').concat(e, "</span>\n\t\t\t\t\t</a>") : '<a href="'.concat(i, '">\n\t\t\t\t\t<span class="slide-number-a">').concat(e, '</span>\n\t\t\t\t\t<span class="slide-number-delimiter">').concat(t, '</span>\n\t\t\t\t\t<span class="slide-number-b">').concat(n, "</span>\n\t\t\t\t\t</a>")
                }
            }]), e
        }(),
        So = function (e) {
            var t = e.match(/^#([0-9a-f]{3})$/i);
            if (t && t[1]) return t = t[1], {
                r: 17 * parseInt(t.charAt(0), 16),
                g: 17 * parseInt(t.charAt(1), 16),
                b: 17 * parseInt(t.charAt(2), 16)
            };
            var n = e.match(/^#([0-9a-f]{6})$/i);
            if (n && n[1]) return n = n[1], {
                r: parseInt(n.substr(0, 2), 16),
                g: parseInt(n.substr(2, 2), 16),
                b: parseInt(n.substr(4, 2), 16)
            };
            var i = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
            if (i) return {
                r: parseInt(i[1], 10),
                g: parseInt(i[2], 10),
                b: parseInt(i[3], 10)
            };
            var r = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
            return r ? {
                r: parseInt(r[1], 10),
                g: parseInt(r[2], 10),
                b: parseInt(r[3], 10),
                a: parseFloat(r[4])
            } : null
        },
        Eo = function () {
            function e(t) {
                Ua(this, e), this.Reveal = t
            }
            return Fa(e, [{
                key: "render",
                value: function () {
                    this.element = document.createElement("div"), this.element.className = "backgrounds", this.Reveal.getRevealElement().appendChild(this.element)
                }
            }, {
                key: "create",
                value: function () {
                    var e = this;
                    this.Reveal.isPrintingPDF();
                    this.element.innerHTML = "", this.element.classList.add("no-transition"), this.Reveal.getHorizontalSlides().forEach((function (t) {
                        var n = e.createBackground(t, e.element);
                        to(t, "section").forEach((function (t) {
                            e.createBackground(t, n), n.classList.add("stack")
                        }))
                    })), this.Reveal.getConfig().parallaxBackgroundImage ? (this.element.style.backgroundImage = 'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")', this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize, this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat, this.element.style.backgroundPosition = this.Reveal.getConfig().parallaxBackgroundPosition, setTimeout((function () {
                        e.Reveal.getRevealElement().classList.add("has-parallax-background")
                    }), 1)) : (this.element.style.backgroundImage = "", this.Reveal.getRevealElement().classList.remove("has-parallax-background"))
                }
            }, {
                key: "createBackground",
                value: function (e, t) {
                    var n = document.createElement("div");
                    n.className = "slide-background " + e.className.replace(/present|past|future/, "");
                    var i = document.createElement("div");
                    return i.className = "slide-background-content", n.appendChild(i), t.appendChild(n), e.slideBackgroundElement = n, e.slideBackgroundContentElement = i, this.sync(e), n
                }
            }, {
                key: "sync",
                value: function (e) {
                    var t = e.slideBackgroundElement,
                        n = e.slideBackgroundContentElement;
                    e.classList.remove("has-dark-background"), e.classList.remove("has-light-background"), t.removeAttribute("data-loaded"), t.removeAttribute("data-background-hash"), t.removeAttribute("data-background-size"), t.removeAttribute("data-background-transition"), t.style.backgroundColor = "", n.style.backgroundSize = "", n.style.backgroundRepeat = "", n.style.backgroundPosition = "", n.style.backgroundImage = "", n.style.opacity = "", n.innerHTML = "";
                    var i = {
                        background: e.getAttribute("data-background"),
                        backgroundSize: e.getAttribute("data-background-size"),
                        backgroundImage: e.getAttribute("data-background-image"),
                        backgroundVideo: e.getAttribute("data-background-video"),
                        backgroundIframe: e.getAttribute("data-background-iframe"),
                        backgroundColor: e.getAttribute("data-background-color"),
                        backgroundRepeat: e.getAttribute("data-background-repeat"),
                        backgroundPosition: e.getAttribute("data-background-position"),
                        backgroundTransition: e.getAttribute("data-background-transition"),
                        backgroundOpacity: e.getAttribute("data-background-opacity")
                    };
                    i.background && (/^(http|file|\/\/)/gi.test(i.background) || /\.(svg|png|jpg|jpeg|gif|bmp)([?#\s]|$)/gi.test(i.background) ? e.setAttribute("data-background-image", i.background) : t.style.background = i.background), (i.background || i.backgroundColor || i.backgroundImage || i.backgroundVideo || i.backgroundIframe) && t.setAttribute("data-background-hash", i.background + i.backgroundSize + i.backgroundImage + i.backgroundVideo + i.backgroundIframe + i.backgroundColor + i.backgroundRepeat + i.backgroundPosition + i.backgroundTransition + i.backgroundOpacity), i.backgroundSize && t.setAttribute("data-background-size", i.backgroundSize), i.backgroundColor && (t.style.backgroundColor = i.backgroundColor), i.backgroundTransition && t.setAttribute("data-background-transition", i.backgroundTransition), e.hasAttribute("data-preload") && t.setAttribute("data-preload", ""), i.backgroundSize && (n.style.backgroundSize = i.backgroundSize), i.backgroundRepeat && (n.style.backgroundRepeat = i.backgroundRepeat), i.backgroundPosition && (n.style.backgroundPosition = i.backgroundPosition), i.backgroundOpacity && (n.style.opacity = i.backgroundOpacity);
                    var r, a = i.backgroundColor;
                    if (!a) {
                        var o = window.getComputedStyle(t);
                        o && o.backgroundColor && (a = o.backgroundColor)
                    }
                    if (a) {
                        var s = So(a);
                        s && 0 !== s.a && ("string" == typeof (r = a) && (r = So(r)), (r ? (299 * r.r + 587 * r.g + 114 * r.b) / 1e3 : null) < 128 ? e.classList.add("has-dark-background") : e.classList.add("has-light-background"))
                    }
                }
            }, {
                key: "update",
                value: function () {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        n = this.Reveal.getCurrentSlide(),
                        i = this.Reveal.getIndices(),
                        r = null,
                        a = this.Reveal.getConfig().rtl ? "future" : "past",
                        o = this.Reveal.getConfig().rtl ? "past" : "future";
                    if (Array.from(this.element.childNodes).forEach((function (e, n) {
                            e.classList.remove("past", "present", "future"), n < i.h ? e.classList.add(a) : n > i.h ? e.classList.add(o) : (e.classList.add("present"), r = e), (t || n === i.h) && to(e, ".slide-background").forEach((function (e, t) {
                                e.classList.remove("past", "present", "future"), t < i.v ? e.classList.add("past") : t > i.v ? e.classList.add("future") : (e.classList.add("present"), n === i.h && (r = e))
                            }))
                        })), this.previousBackground && this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, {
                            unloadIframes: !this.Reveal.slideContent.shouldPreload(this.previousBackground)
                        }), r) {
                        this.Reveal.slideContent.startEmbeddedContent(r);
                        var s = r.querySelector(".slide-background-content");
                        if (s) {
                            var l = s.style.backgroundImage || "";
                            /\.gif/i.test(l) && (s.style.backgroundImage = "", window.getComputedStyle(s).opacity, s.style.backgroundImage = l)
                        }
                        var c = this.previousBackground ? this.previousBackground.getAttribute("data-background-hash") : null,
                            u = r.getAttribute("data-background-hash");
                        u && u === c && r !== this.previousBackground && this.element.classList.add("no-transition"), this.previousBackground = r
                    }
                    n && ["has-light-background", "has-dark-background"].forEach((function (t) {
                        n.classList.contains(t) ? e.Reveal.getRevealElement().classList.add(t) : e.Reveal.getRevealElement().classList.remove(t)
                    }), this), setTimeout((function () {
                        e.element.classList.remove("no-transition")
                    }), 1)
                }
            }, {
                key: "updateParallax",
                value: function () {
                    var e = this.Reveal.getIndices();
                    if (this.Reveal.getConfig().parallaxBackgroundImage) {
                        var t, n, i = this.Reveal.getHorizontalSlides(),
                            r = this.Reveal.getVerticalSlides(),
                            a = this.element.style.backgroundSize.split(" ");
                        1 === a.length ? t = n = parseInt(a[0], 10) : (t = parseInt(a[0], 10), n = parseInt(a[1], 10));
                        var o, s = this.element.offsetWidth,
                            l = i.length;
                        o = ("number" == typeof this.Reveal.getConfig().parallaxBackgroundHorizontal ? this.Reveal.getConfig().parallaxBackgroundHorizontal : l > 1 ? (t - s) / (l - 1) : 0) * e.h * -1;
                        var c, u, d = this.element.offsetHeight,
                            h = r.length;
                        c = "number" == typeof this.Reveal.getConfig().parallaxBackgroundVertical ? this.Reveal.getConfig().parallaxBackgroundVertical : (n - d) / (h - 1), u = h > 0 ? c * e.v : 0, this.element.style.backgroundPosition = o + "px " + -u + "px"
                    }
                }
            }]), e
        }(),
        ko = rt.filter,
        Ao = Ye("filter"),
        Ro = ct("filter");
    Me({
        target: "Array",
        proto: !0,
        forced: !Ao || !Ro
    }, {
        filter: function (e) {
            return ko(this, e, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var xo = [].join,
        Lo = f != Object,
        Co = at("join", ",");
    Me({
        target: "Array",
        proto: !0,
        forced: Lo || !Co
    }, {
        join: function (e) {
            return xo.call(g(this), void 0 === e ? "," : e)
        }
    });
    var Po = function (e) {
            return function (t, n, i, r) {
                et(n);
                var a = Oe(t),
                    o = f(a),
                    s = ce(a.length),
                    l = e ? s - 1 : 0,
                    c = e ? -1 : 1;
                if (i < 2)
                    for (;;) {
                        if (l in o) {
                            r = o[l], l += c;
                            break
                        }
                        if (l += c, e ? l < 0 : s <= l) throw TypeError("Reduce of empty array with no initial value")
                    }
                for (; e ? l >= 0 : s > l; l += c) l in o && (r = n(r, o[l], l, a));
                return r
            }
        },
        No = {
            left: Po(!1),
            right: Po(!0)
        }.left,
        Mo = at("reduce"),
        Io = ct("reduce", {
            1: 0
        });
    Me({
        target: "Array",
        proto: !0,
        forced: !Mo || !Io
    }, {
        reduce: function (e) {
            return No(this, e, arguments.length, arguments.length > 1 ? arguments[1] : void 0)
        }
    });
    var Oo = Ye("slice"),
        To = ct("slice", {
            ACCESSORS: !0,
            0: 0,
            1: 2
        }),
        Do = Fe("species"),
        jo = [].slice,
        Ho = Math.max;
    Me({
        target: "Array",
        proto: !0,
        forced: !Oo || !To
    }, {
        slice: function (e, t) {
            var n, i, r, a = g(this),
                o = ce(a.length),
                s = he(e, o),
                l = he(void 0 === t ? o : t, o);
            if (Ie(a) && ("function" != typeof (n = a.constructor) || n !== Array && !Ie(n.prototype) ? p(n) && null === (n = n[Do]) && (n = void 0) : n = void 0, n === Array || void 0 === n)) return jo.call(a, s, l);
            for (i = new(void 0 === n ? Array : n)(Ho(l - s, 0)), r = 0; s < l; s++, r++) s in a && Te(i, r, a[s]);
            return i.length = r, i
        }
    });
    var Uo = r((function () {
        mt(1)
    }));
    Me({
        target: "Object",
        stat: !0,
        forced: Uo
    }, {
        keys: function (e) {
            return mt(Oe(e))
        }
    });
    var Bo = 0,
        Fo = function () {
            function e(t) {
                Ua(this, e), this.Reveal = t
            }
            return Fa(e, [{
                key: "run",
                value: function (e, t) {
                    var n = this;
                    if (this.reset(), e.hasAttribute("data-auto-animate") && t.hasAttribute("data-auto-animate")) {
                        this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || lo();
                        var i = this.getAutoAnimateOptions(t);
                        e.dataset.autoAnimate = "pending", t.dataset.autoAnimate = "pending";
                        var r = this.Reveal.getSlides();
                        i.slideDirection = r.indexOf(t) > r.indexOf(e) ? "forward" : "backward";
                        var a = this.getAutoAnimatableElements(e, t).map((function (e) {
                            return n.autoAnimateElements(e.from, e.to, e.options || {}, i, Bo++)
                        }));
                        if ("false" !== t.dataset.autoAnimateUnmatched && !0 === this.Reveal.getConfig().autoAnimateUnmatched) {
                            var o = .8 * i.duration,
                                s = .2 * i.duration;
                            this.getUnmatchedAutoAnimateElements(t).forEach((function (e) {
                                var t = n.getAutoAnimateOptions(e, i),
                                    r = "unmatched";
                                t.duration === i.duration && t.delay === i.delay || (r = "unmatched-" + Bo++, a.push('[data-auto-animate="running"] [data-auto-animate-target="'.concat(r, '"] { transition: opacity ').concat(t.duration, "s ease ").concat(t.delay, "s; }"))), e.dataset.autoAnimateTarget = r
                            }), this), a.push('[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity '.concat(o, "s ease ").concat(s, "s; }"))
                        }
                        this.autoAnimateStyleSheet.innerHTML = a.join(""), requestAnimationFrame((function () {
                            n.autoAnimateStyleSheet && (getComputedStyle(n.autoAnimateStyleSheet).fontWeight, t.dataset.autoAnimate = "running")
                        })), this.Reveal.dispatchEvent({
                            type: "autoanimate",
                            data: {
                                fromSlide: e,
                                toSlide: t,
                                sheet: this.autoAnimateStyleSheet
                            }
                        })
                    }
                }
            }, {
                key: "reset",
                value: function () {
                    to(this.Reveal.getRevealElement(), '[data-auto-animate]:not([data-auto-animate=""])').forEach((function (e) {
                        e.dataset.autoAnimate = ""
                    })), to(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach((function (e) {
                        delete e.dataset.autoAnimateTarget
                    })), this.autoAnimateStyleSheet && this.autoAnimateStyleSheet.parentNode && (this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet), this.autoAnimateStyleSheet = null)
                }
            }, {
                key: "autoAnimateElements",
                value: function (e, t, n, i, r) {
                    e.dataset.autoAnimateTarget = "", t.dataset.autoAnimateTarget = r;
                    var a = this.getAutoAnimateOptions(t, i);
                    void 0 !== n.delay && (a.delay = n.delay), void 0 !== n.duration && (a.duration = n.duration), void 0 !== n.easing && (a.easing = n.easing);
                    var o = this.getAutoAnimatableProperties("from", e, n),
                        s = this.getAutoAnimatableProperties("to", t, n);
                    t.classList.contains("fragment") && (delete s.styles.opacity, e.classList.contains("fragment") && (e.className.match($a) || [""])[0] === (t.className.match($a) || [""])[0] && "forward" === i.slideDirection && t.classList.add("visible", "disabled"));
                    if (!1 !== n.translate || !1 !== n.scale) {
                        var l = this.Reveal.getScale(),
                            c = {
                                x: (o.x - s.x) / l,
                                y: (o.y - s.y) / l,
                                scaleX: o.width / s.width,
                                scaleY: o.height / s.height
                            };
                        c.x = Math.round(1e3 * c.x) / 1e3, c.y = Math.round(1e3 * c.y) / 1e3, c.scaleX = Math.round(1e3 * c.scaleX) / 1e3, c.scaleX = Math.round(1e3 * c.scaleX) / 1e3;
                        var u = !1 !== n.translate && (0 !== c.x || 0 !== c.y),
                            d = !1 !== n.scale && (0 !== c.scaleX || 0 !== c.scaleY);
                        if (u || d) {
                            var h = [];
                            u && h.push("translate(".concat(c.x, "px, ").concat(c.y, "px)")), d && h.push("scale(".concat(c.scaleX, ", ").concat(c.scaleY, ")")), o.styles.transform = h.join(" "), o.styles["transform-origin"] = "top left", s.styles.transform = "none"
                        }
                    }
                    for (var f in s.styles) {
                        var v = s.styles[f],
                            g = o.styles[f];
                        v === g ? delete s.styles[f] : (!0 === v.explicitValue && (s.styles[f] = v.value), !0 === g.explicitValue && (o.styles[f] = g.value))
                    }
                    var p = "",
                        m = Object.keys(s.styles);
                    m.length > 0 && (o.styles.transition = "none", s.styles.transition = "all ".concat(a.duration, "s ").concat(a.easing, " ").concat(a.delay, "s"), s.styles["transition-property"] = m.join(", "), s.styles["will-change"] = m.join(", "), p = '[data-auto-animate-target="' + r + '"] {' + Object.keys(o.styles).map((function (e) {
                        return e + ": " + o.styles[e] + " !important;"
                    })).join("") + '}[data-auto-animate="running"] [data-auto-animate-target="' + r + '"] {' + Object.keys(s.styles).map((function (e) {
                        return e + ": " + s.styles[e] + " !important;"
                    })).join("") + "}");
                    return p
                }
            }, {
                key: "getAutoAnimateOptions",
                value: function (e, t) {
                    var n = {
                        easing: this.Reveal.getConfig().autoAnimateEasing,
                        duration: this.Reveal.getConfig().autoAnimateDuration,
                        delay: 0
                    };
                    if (n = eo(n, t), e.parentNode) {
                        var i = oo(e.parentNode, "[data-auto-animate-target]");
                        i && (n = this.getAutoAnimateOptions(i, n))
                    }
                    return e.dataset.autoAnimateEasing && (n.easing = e.dataset.autoAnimateEasing), e.dataset.autoAnimateDuration && (n.duration = parseFloat(e.dataset.autoAnimateDuration)), e.dataset.autoAnimateDelay && (n.delay = parseFloat(e.dataset.autoAnimateDelay)), n
                }
            }, {
                key: "getAutoAnimatableProperties",
                value: function (e, t, n) {
                    var i = this.Reveal.getConfig(),
                        r = {
                            styles: []
                        };
                    if (!1 !== n.translate || !1 !== n.scale) {
                        var a;
                        if ("function" == typeof n.measure) a = n.measure(t);
                        else if (i.center) a = t.getBoundingClientRect();
                        else {
                            var o = this.Reveal.getScale();
                            a = {
                                x: t.offsetLeft * o,
                                y: t.offsetTop * o,
                                width: t.offsetWidth * o,
                                height: t.offsetHeight * o
                            }
                        }
                        r.x = a.x, r.y = a.y, r.width = a.width, r.height = a.height
                    }
                    var s = getComputedStyle(t);
                    return (n.styles || i.autoAnimateStyles).forEach((function (t) {
                        var n;
                        "string" == typeof t && (t = {
                            property: t
                        }), "" !== (n = void 0 !== t.from && "from" === e ? {
                            value: t.from,
                            explicitValue: !0
                        } : void 0 !== t.to && "to" === e ? {
                            value: t.to,
                            explicitValue: !0
                        } : s[t.property]) && (r.styles[t.property] = n)
                    })), r
                }
            }, {
                key: "getAutoAnimatableElements",
                value: function (e, t) {
                    var n = ("function" == typeof this.Reveal.getConfig().autoAnimateMatcher ? this.Reveal.getConfig().autoAnimateMatcher : this.getAutoAnimatePairs).call(this, e, t),
                        i = [];
                    return n.filter((function (e, t) {
                        if (-1 === i.indexOf(e.to)) return i.push(e.to), !0
                    }))
                }
            }, {
                key: "getAutoAnimatePairs",
                value: function (e, t) {
                    var n = this,
                        i = [],
                        r = "h1, h2, h3, h4, h5, h6, p, li";
                    return this.findAutoAnimateMatches(i, e, t, "[data-id]", (function (e) {
                        return e.nodeName + ":::" + e.getAttribute("data-id")
                    })), this.findAutoAnimateMatches(i, e, t, r, (function (e) {
                        return e.nodeName + ":::" + e.innerText
                    })), this.findAutoAnimateMatches(i, e, t, "img, video, iframe", (function (e) {
                        return e.nodeName + ":::" + (e.getAttribute("src") || e.getAttribute("data-src"))
                    })), this.findAutoAnimateMatches(i, e, t, "pre", (function (e) {
                        return e.nodeName + ":::" + e.innerText
                    })), i.forEach((function (e) {
                        ao(e.from, r) ? e.options = {
                            scale: !1
                        } : ao(e.from, "pre") && (e.options = {
                            scale: !1,
                            styles: ["width", "height"]
                        }, n.findAutoAnimateMatches(i, e.from, e.to, ".hljs .hljs-ln-code", (function (e) {
                            return e.textContent
                        }), {
                            scale: !1,
                            styles: [],
                            measure: n.getLocalBoundingBox.bind(n)
                        }), n.findAutoAnimateMatches(i, e.from, e.to, ".hljs .hljs-ln-line[data-line-number]", (function (e) {
                            return e.getAttribute("data-line-number")
                        }), {
                            scale: !1,
                            styles: ["width"],
                            measure: n.getLocalBoundingBox.bind(n)
                        }))
                    }), this), i
                }
            }, {
                key: "getLocalBoundingBox",
                value: function (e) {
                    var t = this.Reveal.getScale();
                    return {
                        x: Math.round(e.offsetLeft * t * 100) / 100,
                        y: Math.round(e.offsetTop * t * 100) / 100,
                        width: Math.round(e.offsetWidth * t * 100) / 100,
                        height: Math.round(e.offsetHeight * t * 100) / 100
                    }
                }
            }, {
                key: "findAutoAnimateMatches",
                value: function (e, t, n, i, r, a) {
                    var o = {},
                        s = {};
                    [].slice.call(t.querySelectorAll(i)).forEach((function (e, t) {
                        var n = r(e);
                        "string" == typeof n && n.length && (o[n] = o[n] || [], o[n].push(e))
                    })), [].slice.call(n.querySelectorAll(i)).forEach((function (t, n) {
                        var i, l = r(t);
                        if (s[l] = s[l] || [], s[l].push(t), o[l]) {
                            var c = s[l].length - 1,
                                u = o[l].length - 1;
                            o[l][c] ? (i = o[l][c], o[l][c] = null) : o[l][u] && (i = o[l][u], o[l][u] = null)
                        }
                        i && e.push({
                            from: i,
                            to: t,
                            options: a
                        })
                    }))
                }
            }, {
                key: "getUnmatchedAutoAnimateElements",
                value: function (e) {
                    var t = this;
                    return [].slice.call(e.children).reduce((function (e, n) {
                        var i = n.querySelector("[data-auto-animate-target]");
                        return n.hasAttribute("data-auto-animate-target") || i || e.push(n), n.querySelector("[data-auto-animate-target]") && (e = e.concat(t.getUnmatchedAutoAnimateElements(n))), e
                    }), [])
                }
            }]), e
        }(),
        zo = function () {
            function e(t) {
                Ua(this, e), this.Reveal = t
            }
            return Fa(e, [{
                key: "configure",
                value: function (e, t) {
                    !1 === e.fragments ? this.disable() : !1 === t.fragments && this.enable()
                }
            }, {
                key: "disable",
                value: function () {
                    to(this.Reveal.getSlidesElement(), ".fragment").forEach((function (e) {
                        e.classList.add("visible"), e.classList.remove("current-fragment")
                    }))
                }
            }, {
                key: "enable",
                value: function () {
                    to(this.Reveal.getSlidesElement(), ".fragment").forEach((function (e) {
                        e.classList.remove("visible"), e.classList.remove("current-fragment")
                    }))
                }
            }, {
                key: "availableRoutes",
                value: function () {
                    var e = this.Reveal.getCurrentSlide();
                    if (e && this.Reveal.getConfig().fragments) {
                        var t = e.querySelectorAll(".fragment:not(.disabled)"),
                            n = e.querySelectorAll(".fragment:not(.disabled):not(.visible)");
                        return {
                            prev: t.length - n.length > 0,
                            next: !!n.length
                        }
                    }
                    return {
                        prev: !1,
                        next: !1
                    }
                }
            }, {
                key: "sort",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    e = Array.from(e);
                    var n = [],
                        i = [],
                        r = [];
                    e.forEach((function (e) {
                        if (e.hasAttribute("data-fragment-index")) {
                            var t = parseInt(e.getAttribute("data-fragment-index"), 10);
                            n[t] || (n[t] = []), n[t].push(e)
                        } else i.push([e])
                    })), n = n.concat(i);
                    var a = 0;
                    return n.forEach((function (e) {
                        e.forEach((function (e) {
                            r.push(e), e.setAttribute("data-fragment-index", a)
                        })), a++
                    })), !0 === t ? n : r
                }
            }, {
                key: "sortAll",
                value: function () {
                    var e = this;
                    this.Reveal.getHorizontalSlides().forEach((function (t) {
                        var n = to(t, "section");
                        n.forEach((function (t, n) {
                            e.sort(t.querySelectorAll(".fragment"))
                        }), e), 0 === n.length && e.sort(t.querySelectorAll(".fragment"))
                    }))
                }
            }, {
                key: "update",
                value: function (e, t) {
                    var n = this,
                        i = {
                            shown: [],
                            hidden: []
                        },
                        r = this.Reveal.getCurrentSlide();
                    if (r && this.Reveal.getConfig().fragments && (t = t || this.sort(r.querySelectorAll(".fragment"))).length) {
                        var a = 0;
                        if ("number" != typeof e) {
                            var o = this.sort(r.querySelectorAll(".fragment.visible")).pop();
                            o && (e = parseInt(o.getAttribute("data-fragment-index") || 0, 10))
                        }
                        Array.from(t).forEach((function (t, r) {
                            if (t.hasAttribute("data-fragment-index") && (r = parseInt(t.getAttribute("data-fragment-index"), 10)), a = Math.max(a, r), r <= e) {
                                var o = t.classList.contains("visible");
                                t.classList.add("visible"), t.classList.remove("current-fragment"), r === e && (n.Reveal.announceStatus(n.Reveal.getStatusText(t)), t.classList.add("current-fragment"), n.Reveal.slideContent.startEmbeddedContent(t)), o || (i.shown.push(t), n.Reveal.dispatchEvent({
                                    target: t,
                                    type: "visible",
                                    bubbles: !1
                                }))
                            } else {
                                var s = t.classList.contains("visible");
                                t.classList.remove("visible"), t.classList.remove("current-fragment"), s && (i.hidden.push(t), n.Reveal.dispatchEvent({
                                    target: t,
                                    type: "hidden",
                                    bubbles: !1
                                }))
                            }
                        })), e = "number" == typeof e ? e : -1, e = Math.max(Math.min(e, a), -1), r.setAttribute("data-fragment", e)
                    }
                    return i
                }
            }, {
                key: "sync",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Reveal.getCurrentSlide();
                    return this.sort(e.querySelectorAll(".fragment"))
                }
            }, {
                key: "goto",
                value: function (e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                        n = this.Reveal.getCurrentSlide();
                    if (n && this.Reveal.getConfig().fragments) {
                        var i = this.sort(n.querySelectorAll(".fragment:not(.disabled)"));
                        if (i.length) {
                            if ("number" != typeof e) {
                                var r = this.sort(n.querySelectorAll(".fragment:not(.disabled).visible")).pop();
                                e = r ? parseInt(r.getAttribute("data-fragment-index") || 0, 10) : -1
                            }
                            e += t;
                            var a = this.update(e, i);
                            return a.hidden.length && this.Reveal.dispatchEvent({
                                type: "fragmenthidden",
                                data: {
                                    fragment: a.hidden[0],
                                    fragments: a.hidden
                                }
                            }), a.shown.length && this.Reveal.dispatchEvent({
                                type: "fragmentshown",
                                data: {
                                    fragment: a.shown[0],
                                    fragments: a.shown
                                }
                            }), this.Reveal.controls.update(), this.Reveal.progress.update(), this.Reveal.getConfig().fragmentInURL && this.Reveal.location.writeURL(), !(!a.shown.length && !a.hidden.length)
                        }
                    }
                    return !1
                }
            }, {
                key: "next",
                value: function () {
                    return this.goto(null, 1)
                }
            }, {
                key: "prev",
                value: function () {
                    return this.goto(null, -1)
                }
            }]), e
        }(),
        qo = function () {
            function e(t) {
                Ua(this, e), this.Reveal = t, this.active = !1, this.onSlideClicked = this.onSlideClicked.bind(this)
            }
            return Fa(e, [{
                key: "activate",
                value: function () {
                    var e = this;
                    if (this.Reveal.getConfig().overview && !this.isActive()) {
                        this.active = !0, this.Reveal.getRevealElement().classList.add("overview"), this.Reveal.cancelAutoSlide(), this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()), to(this.Reveal.getRevealElement(), ".slides section").forEach((function (t) {
                            t.classList.contains("stack") || t.addEventListener("click", e.onSlideClicked, !0)
                        }));
                        var t = this.Reveal.getComputedSlideSize();
                        this.overviewSlideWidth = t.width + 70, this.overviewSlideHeight = t.height + 70, this.Reveal.getConfig().rtl && (this.overviewSlideWidth = -this.overviewSlideWidth), this.Reveal.updateSlidesVisibility(), this.layout(), this.update(), this.Reveal.layout();
                        var n = this.Reveal.getIndices();
                        this.Reveal.dispatchEvent({
                            type: "overviewshown",
                            data: {
                                indexh: n.h,
                                indexv: n.v,
                                currentSlide: this.Reveal.getCurrentSlide()
                            }
                        })
                    }
                }
            }, {
                key: "layout",
                value: function () {
                    var e = this;
                    this.Reveal.getHorizontalSlides().forEach((function (t, n) {
                        t.setAttribute("data-index-h", n), ro(t, "translate3d(" + n * e.overviewSlideWidth + "px, 0, 0)"), t.classList.contains("stack") && to(t, "section").forEach((function (t, i) {
                            t.setAttribute("data-index-h", n), t.setAttribute("data-index-v", i), ro(t, "translate3d(0, " + i * e.overviewSlideHeight + "px, 0)")
                        }))
                    })), Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((function (t, n) {
                        ro(t, "translate3d(" + n * e.overviewSlideWidth + "px, 0, 0)"), to(t, ".slide-background").forEach((function (t, n) {
                            ro(t, "translate3d(0, " + n * e.overviewSlideHeight + "px, 0)")
                        }))
                    }))
                }
            }, {
                key: "update",
                value: function () {
                    var e = Math.min(window.innerWidth, window.innerHeight),
                        t = Math.max(e / 5, 150) / e,
                        n = this.Reveal.getIndices();
                    this.Reveal.transformSlides({
                        overview: ["scale(" + t + ")", "translateX(" + -n.h * this.overviewSlideWidth + "px)", "translateY(" + -n.v * this.overviewSlideHeight + "px)"].join(" ")
                    })
                }
            }, {
                key: "deactivate",
                value: function () {
                    var e = this;
                    if (this.Reveal.getConfig().overview) {
                        this.active = !1, this.Reveal.getRevealElement().classList.remove("overview"), this.Reveal.getRevealElement().classList.add("overview-deactivating"), setTimeout((function () {
                            e.Reveal.getRevealElement().classList.remove("overview-deactivating")
                        }), 1), this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()), to(this.Reveal.getRevealElement(), ".slides section").forEach((function (t) {
                            ro(t, ""), t.removeEventListener("click", e.onSlideClicked, !0)
                        })), to(this.Reveal.getBackgroundsElement(), ".slide-background").forEach((function (e) {
                            ro(e, "")
                        })), this.Reveal.transformSlides({
                            overview: ""
                        });
                        var t = this.Reveal.getIndices();
                        this.Reveal.slide(t.h, t.v), this.Reveal.layout(), this.Reveal.cueAutoSlide(), this.Reveal.dispatchEvent({
                            type: "overviewhidden",
                            data: {
                                indexh: t.h,
                                indexv: t.v,
                                currentSlide: this.Reveal.getCurrentSlide()
                            }
                        })
                    }
                }
            }, {
                key: "toggle",
                value: function (e) {
                    "boolean" == typeof e ? e ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate()
                }
            }, {
                key: "isActive",
                value: function () {
                    return this.active
                }
            }, {
                key: "onSlideClicked",
                value: function (e) {
                    if (this.isActive()) {
                        e.preventDefault();
                        for (var t = e.target; t && !t.nodeName.match(/section/gi);) t = t.parentNode;
                        if (t && !t.classList.contains("disabled") && (this.deactivate(), t.nodeName.match(/section/gi))) {
                            var n = parseInt(t.getAttribute("data-index-h"), 10),
                                i = parseInt(t.getAttribute("data-index-v"), 10);
                            this.Reveal.slide(n, i)
                        }
                    }
                }
            }]), e
        }(),
        _o = function () {
            function e(t) {
                Ua(this, e), this.Reveal = t, this.shortcuts = {}, this.bindings = {}, this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), this.onDocumentKeyPress = this.onDocumentKeyPress.bind(this)
            }
            return Fa(e, [{
                key: "configure",
                value: function (e, t) {
                    "linear" === e.navigationMode ? (this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide", this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide") : (this.shortcuts["N  ,  SPACE"] = "Next slide", this.shortcuts.P = "Previous slide", this.shortcuts["&#8592;  ,  H"] = "Navigate left", this.shortcuts["&#8594;  ,  L"] = "Navigate right", this.shortcuts["&#8593;  ,  K"] = "Navigate up", this.shortcuts["&#8595;  ,  J"] = "Navigate down"), this.shortcuts["Home  ,  Shift &#8592;"] = "First slide", this.shortcuts["End  ,  Shift &#8594;"] = "Last slide", this.shortcuts["B  ,  ."] = "Pause", this.shortcuts.F = "Fullscreen", this.shortcuts["ESC, O"] = "Slide overview"
                }
            }, {
                key: "bind",
                value: function () {
                    document.addEventListener("keydown", this.onDocumentKeyDown, !1), document.addEventListener("keypress", this.onDocumentKeyPress, !1)
                }
            }, {
                key: "unbind",
                value: function () {
                    document.removeEventListener("keydown", this.onDocumentKeyDown, !1), document.removeEventListener("keypress", this.onDocumentKeyPress, !1)
                }
            }, {
                key: "addKeyBinding",
                value: function (e, t) {
                    "object" === Ha(e) && e.keyCode ? this.bindings[e.keyCode] = {
                        callback: t,
                        key: e.key,
                        description: e.description
                    } : this.bindings[e] = {
                        callback: t,
                        key: null,
                        description: null
                    }
                }
            }, {
                key: "removeKeyBinding",
                value: function (e) {
                    delete this.bindings[e]
                }
            }, {
                key: "triggerKey",
                value: function (e) {
                    this.onDocumentKeyDown({
                        keyCode: e
                    })
                }
            }, {
                key: "registerKeyboardShortcut",
                value: function (e, t) {
                    this.shortcuts[e] = t
                }
            }, {
                key: "getShortcuts",
                value: function () {
                    return this.shortcuts
                }
            }, {
                key: "getBindings",
                value: function () {
                    return this.bindings
                }
            }, {
                key: "onDocumentKeyPress",
                value: function (e) {
                    e.shiftKey && 63 === e.charCode && this.Reveal.toggleHelp()
                }
            }, {
                key: "onDocumentKeyDown",
                value: function (e) {
                    var t = this.Reveal.getConfig();
                    if ("function" == typeof t.keyboardCondition && !1 === t.keyboardCondition(e)) return !0;
                    if ("focused" === t.keyboardCondition && !this.Reveal.isFocused()) return !0;
                    var n = e.keyCode,
                        i = !this.Reveal.isAutoSliding();
                    this.Reveal.onUserInput(e);
                    var r = document.activeElement && !0 === document.activeElement.isContentEditable,
                        a = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName),
                        o = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className),
                        s = e.shiftKey && 32 === e.keyCode,
                        l = e.shiftKey && 37 === n,
                        c = e.shiftKey && 39 === n,
                        u = !s && !l && !c && (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey);
                    if (!(r || a || o || u)) {
                        var d, h = [66, 86, 190, 191];
                        if ("object" === Ha(t.keyboard))
                            for (d in t.keyboard) "togglePause" === t.keyboard[d] && h.push(parseInt(d, 10));
                        if (this.Reveal.isPaused() && -1 === h.indexOf(n)) return !1;
                        var f, v, g = "linear" === t.navigationMode || !this.Reveal.hasHorizontalSlides() || !this.Reveal.hasVerticalSlides(),
                            p = !1;
                        if ("object" === Ha(t.keyboard))
                            for (d in t.keyboard)
                                if (parseInt(d, 10) === n) {
                                    var m = t.keyboard[d];
                                    "function" == typeof m ? m.apply(null, [e]) : "string" == typeof m && "function" == typeof this.Reveal[m] && this.Reveal[m].call(), p = !0
                                } if (!1 === p)
                            for (d in this.bindings)
                                if (parseInt(d, 10) === n) {
                                    var y = this.bindings[d].callback;
                                    "function" == typeof y ? y.apply(null, [e]) : "string" == typeof y && "function" == typeof this.Reveal[y] && this.Reveal[y].call(), p = !0
                                }! 1 === p && (p = !0, 80 === n || 33 === n ? this.Reveal.prev() : 78 === n || 34 === n ? this.Reveal.next() : 72 === n || 37 === n ? l ? this.Reveal.slide(0) : !this.Reveal.overview.isActive() && g ? this.Reveal.prev() : this.Reveal.left() : 76 === n || 39 === n ? c ? this.Reveal.slide(Number.MAX_VALUE) : !this.Reveal.overview.isActive() && g ? this.Reveal.next() : this.Reveal.right() : 75 === n || 38 === n ? !this.Reveal.overview.isActive() && g ? this.Reveal.prev() : this.Reveal.up() : 74 === n || 40 === n ? !this.Reveal.overview.isActive() && g ? this.Reveal.next() : this.Reveal.down() : 36 === n ? this.Reveal.slide(0) : 35 === n ? this.Reveal.slide(Number.MAX_VALUE) : 32 === n ? (this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(), e.shiftKey ? this.Reveal.prev() : this.Reveal.next()) : 58 === n || 59 === n || 66 === n || 86 === n || 190 === n || 191 === n ? this.Reveal.togglePause() : 70 === n ? (f = t.embedded ? this.Reveal.getViewportElement() : document.documentElement, (v = (f = f || document.documentElement).requestFullscreen || f.webkitRequestFullscreen || f.webkitRequestFullScreen || f.mozRequestFullScreen || f.msRequestFullscreen) && v.apply(f)) : 65 === n ? t.autoSlideStoppable && this.Reveal.toggleAutoSlide(i) : p = !1), p ? e.preventDefault && e.preventDefault() : 27 !== n && 79 !== n || (!1 === this.Reveal.closeOverlay() && this.Reveal.overview.toggle(), e.preventDefault && e.preventDefault()), this.Reveal.cueAutoSlide()
                    }
                }
            }]), e
        }(),
        Vo = function () {
            function e(t) {
                Ua(this, e), this.Reveal = t, this.writeURLTimeout = 0, this.onWindowHashChange = this.onWindowHashChange.bind(this)
            }
            return Fa(e, [{
                key: "bind",
                value: function () {
                    window.addEventListener("hashchange", this.onWindowHashChange, !1)
                }
            }, {
                key: "unbind",
                value: function () {
                    window.removeEventListener("hashchange", this.onWindowHashChange, !1)
                }
            }, {
                key: "readURL",
                value: function () {
                    var e = this.Reveal.getConfig(),
                        t = this.Reveal.getIndices(),
                        n = this.Reveal.getCurrentSlide(),
                        i = window.location.hash,
                        r = i.slice(2).split("/"),
                        a = i.replace(/#\/?/gi, "");
                    if (!/^[0-9]*$/.test(r[0]) && a.length) {
                        var o, s;
                        /\/[-\d]+$/g.test(a) && (s = parseInt(a.split("/").pop(), 10), s = isNaN(s) ? void 0 : s, a = a.split("/").shift());
                        try {
                            o = document.getElementById(decodeURIComponent(a))
                        } catch (e) {}
                        var l = !!n && n.getAttribute("id") === a;
                        if (o) {
                            if (!l || void 0 !== s) {
                                var c = this.Reveal.getIndices(o);
                                this.Reveal.slide(c.h, c.v, s)
                            }
                        } else this.Reveal.slide(t.h || 0, t.v || 0)
                    } else {
                        var u, d = e.hashOneBasedIndex ? 1 : 0,
                            h = parseInt(r[0], 10) - d || 0,
                            f = parseInt(r[1], 10) - d || 0;
                        e.fragmentInURL && (u = parseInt(r[2], 10), isNaN(u) && (u = void 0)), h === t.h && f === t.v && void 0 === u || this.Reveal.slide(h, f, u)
                    }
                }
            }, {
                key: "writeURL",
                value: function (e) {
                    var t = this.Reveal.getConfig(),
                        n = this.Reveal.getCurrentSlide();
                    clearTimeout(this.writeURLTimeout), "number" == typeof e ? this.writeURLTimeout = setTimeout(this.writeURL, e) : n && (t.history || !1 === yo ? window.location.hash = this.getHash() : t.hash && window.history.replaceState(null, null, "#" + this.getHash()))
                }
            }, {
                key: "getHash",
                value: function (e) {
                    var t = "/",
                        n = e || this.Reveal.getCurrentSlide(),
                        i = n ? n.getAttribute("id") : null;
                    i && (i = encodeURIComponent(i));
                    var r = this.Reveal.getIndices(e);
                    if (this.Reveal.getConfig().fragmentInURL || (r.f = void 0), "string" == typeof i && i.length) t = "/" + i, r.f >= 0 && (t += "/" + r.f);
                    else {
                        var a = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0;
                        (r.h > 0 || r.v > 0 || r.f >= 0) && (t += r.h + a), (r.v > 0 || r.f >= 0) && (t += "/" + (r.v + a)), r.f >= 0 && (t += "/" + r.f)
                    }
                    return t
                }
            }, {
                key: "onWindowHashChange",
                value: function (e) {
                    this.readURL()
                }
            }]), e
        }(),
        Wo = function () {
            function e(t) {
                Ua(this, e), this.Reveal = t, this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this), this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this), this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this), this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this), this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this), this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this)
            }
            return Fa(e, [{
                key: "render",
                value: function () {
                    var e = this.Reveal.getConfig().rtl,
                        t = this.Reveal.getRevealElement();
                    this.element = document.createElement("aside"), this.element.className = "controls", this.element.innerHTML = '<button class="navigate-left" aria-label="'.concat(e ? "next slide" : "previous slide", '"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-right" aria-label="').concat(e ? "previous slide" : "next slide", '"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>'), this.Reveal.getRevealElement().appendChild(this.element), this.controlsLeft = to(t, ".navigate-left"), this.controlsRight = to(t, ".navigate-right"), this.controlsUp = to(t, ".navigate-up"), this.controlsDown = to(t, ".navigate-down"), this.controlsPrev = to(t, ".navigate-prev"), this.controlsNext = to(t, ".navigate-next"), this.controlsRightArrow = this.element.querySelector(".navigate-right"), this.controlsLeftArrow = this.element.querySelector(".navigate-left"), this.controlsDownArrow = this.element.querySelector(".navigate-down")
                }
            }, {
                key: "configure",
                value: function (e, t) {
                    this.element.style.display = e.controls ? "block" : "none", this.element.setAttribute("data-controls-layout", e.controlsLayout), this.element.setAttribute("data-controls-back-arrows", e.controlsBackArrows)
                }
            }, {
                key: "bind",
                value: function () {
                    var e = this,
                        t = ["touchstart", "click"];
                    po && (t = ["touchstart"]), t.forEach((function (t) {
                        e.controlsLeft.forEach((function (n) {
                            return n.addEventListener(t, e.onNavigateLeftClicked, !1)
                        })), e.controlsRight.forEach((function (n) {
                            return n.addEventListener(t, e.onNavigateRightClicked, !1)
                        })), e.controlsUp.forEach((function (n) {
                            return n.addEventListener(t, e.onNavigateUpClicked, !1)
                        })), e.controlsDown.forEach((function (n) {
                            return n.addEventListener(t, e.onNavigateDownClicked, !1)
                        })), e.controlsPrev.forEach((function (n) {
                            return n.addEventListener(t, e.onNavigatePrevClicked, !1)
                        })), e.controlsNext.forEach((function (n) {
                            return n.addEventListener(t, e.onNavigateNextClicked, !1)
                        }))
                    }))
                }
            }, {
                key: "unbind",
                value: function () {
                    var e = this;
                    ["touchstart", "click"].forEach((function (t) {
                        e.controlsLeft.forEach((function (n) {
                            return n.removeEventListener(t, e.onNavigateLeftClicked, !1)
                        })), e.controlsRight.forEach((function (n) {
                            return n.removeEventListener(t, e.onNavigateRightClicked, !1)
                        })), e.controlsUp.forEach((function (n) {
                            return n.removeEventListener(t, e.onNavigateUpClicked, !1)
                        })), e.controlsDown.forEach((function (n) {
                            return n.removeEventListener(t, e.onNavigateDownClicked, !1)
                        })), e.controlsPrev.forEach((function (n) {
                            return n.removeEventListener(t, e.onNavigatePrevClicked, !1)
                        })), e.controlsNext.forEach((function (n) {
                            return n.removeEventListener(t, e.onNavigateNextClicked, !1)
                        }))
                    }))
                }
            }, {
                key: "update",
                value: function () {
                    var e = this.Reveal.availableRoutes();
                    [].concat(Va(this.controlsLeft), Va(this.controlsRight), Va(this.controlsUp), Va(this.controlsDown), Va(this.controlsPrev), Va(this.controlsNext)).forEach((function (e) {
                        e.classList.remove("enabled", "fragmented"), e.setAttribute("disabled", "disabled")
                    })), e.left && this.controlsLeft.forEach((function (e) {
                        e.classList.add("enabled"), e.removeAttribute("disabled")
                    })), e.right && this.controlsRight.forEach((function (e) {
                        e.classList.add("enabled"), e.removeAttribute("disabled")
                    })), e.up && this.controlsUp.forEach((function (e) {
                        e.classList.add("enabled"), e.removeAttribute("disabled")
                    })), e.down && this.controlsDown.forEach((function (e) {
                        e.classList.add("enabled"), e.removeAttribute("disabled")
                    })), (e.left || e.up) && this.controlsPrev.forEach((function (e) {
                        e.classList.add("enabled"), e.removeAttribute("disabled")
                    })), (e.right || e.down) && this.controlsNext.forEach((function (e) {
                        e.classList.add("enabled"), e.removeAttribute("disabled")
                    }));
                    var t = this.Reveal.getCurrentSlide();
                    if (t) {
                        var n = this.Reveal.fragments.availableRoutes();
                        n.prev && this.controlsPrev.forEach((function (e) {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
                        })), n.next && this.controlsNext.forEach((function (e) {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
                        })), this.Reveal.isVerticalSlide(t) ? (n.prev && this.controlsUp.forEach((function (e) {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
                        })), n.next && this.controlsDown.forEach((function (e) {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
                        }))) : (n.prev && this.controlsLeft.forEach((function (e) {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
                        })), n.next && this.controlsRight.forEach((function (e) {
                            e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled")
                        })))
                    }
                    if (this.Reveal.getConfig().controlsTutorial) {
                        var i = this.Reveal.getIndices();
                        !this.Reveal.hasNavigatedVertically() && e.down ? this.controlsDownArrow.classList.add("highlight") : (this.controlsDownArrow.classList.remove("highlight"), this.Reveal.getConfig().rtl ? !this.Reveal.hasNavigatedHorizontally() && e.left && 0 === i.v ? this.controlsLeftArrow.classList.add("highlight") : this.controlsLeftArrow.classList.remove("highlight") : !this.Reveal.hasNavigatedHorizontally() && e.right && 0 === i.v ? this.controlsRightArrow.classList.add("highlight") : this.controlsRightArrow.classList.remove("highlight"))
                    }
                }
            }, {
                key: "onNavigateLeftClicked",
                value: function (e) {
                    e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.prev() : this.Reveal.left()
                }
            }, {
                key: "onNavigateRightClicked",
                value: function (e) {
                    e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.next() : this.Reveal.right()
                }
            }, {
                key: "onNavigateUpClicked",
                value: function (e) {
                    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up()
                }
            }, {
                key: "onNavigateDownClicked",
                value: function (e) {
                    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down()
                }
            }, {
                key: "onNavigatePrevClicked",
                value: function (e) {
                    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev()
                }
            }, {
                key: "onNavigateNextClicked",
                value: function (e) {
                    e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next()
                }
            }]), e
        }(),
        Ko = function () {
            function e(t) {
                Ua(this, e), this.Reveal = t, this.onProgressClicked = this.onProgressClicked.bind(this)
            }
            return Fa(e, [{
                key: "render",
                value: function () {
                    this.element = document.createElement("div"), this.element.className = "progress", this.Reveal.getRevealElement().appendChild(this.element), this.bar = document.createElement("span"), this.element.appendChild(this.bar)
                }
            }, {
                key: "configure",
                value: function (e, t) {
                    this.element.style.display = e.progress ? "block" : "none"
                }
            }, {
                key: "bind",
                value: function () {
                    this.Reveal.getConfig().progress && this.element && this.element.addEventListener("click", this.onProgressClicked, !1)
                }
            }, {
                key: "unbind",
                value: function () {
                    this.Reveal.getConfig().progress && this.element && this.element.removeEventListener("click", this.onProgressClicked, !1)
                }
            }, {
                key: "update",
                value: function () {
                    this.Reveal.getConfig().progress && this.bar && (this.bar.style.transform = "scaleX(" + this.Reveal.getProgress() + ")")
                }
            }, {
                key: "getMaxWidth",
                value: function () {
                    return this.Reveal.getRevealElement().offsetWidth
                }
            }, {
                key: "onProgressClicked",
                value: function (e) {
                    this.Reveal.onUserInput(e), e.preventDefault();
                    var t = this.Reveal.getHorizontalSlides().length,
                        n = Math.floor(e.clientX / this.getMaxWidth() * t);
                    this.Reveal.getConfig().rtl && (n = t - n), this.Reveal.slide(n)
                }
            }]), e
        }(),
        $o = function () {
            function e(t) {
                Ua(this, e), this.Reveal = t, this.lastMouseWheelStep = 0, this.cursorHidden = !1, this.cursorInactiveTimeout = 0, this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this), this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this)
            }
            return Fa(e, [{
                key: "configure",
                value: function (e, t) {
                    e.mouseWheel ? (document.addEventListener("DOMMouseScroll", this.onDocumentMouseScroll, !1), document.addEventListener("mousewheel", this.onDocumentMouseScroll, !1)) : (document.removeEventListener("DOMMouseScroll", this.onDocumentMouseScroll, !1), document.removeEventListener("mousewheel", this.onDocumentMouseScroll, !1)), e.hideInactiveCursor ? (document.addEventListener("mousemove", this.onDocumentCursorActive, !1), document.addEventListener("mousedown", this.onDocumentCursorActive, !1)) : (this.showCursor(), document.removeEventListener("mousemove", this.onDocumentCursorActive, !1), document.removeEventListener("mousedown", this.onDocumentCursorActive, !1))
                }
            }, {
                key: "showCursor",
                value: function () {
                    this.cursorHidden && (this.cursorHidden = !1, this.Reveal.getRevealElement().style.cursor = "")
                }
            }, {
                key: "hideCursor",
                value: function () {
                    !1 === this.cursorHidden && (this.cursorHidden = !0, this.Reveal.getRevealElement().style.cursor = "none")
                }
            }, {
                key: "onDocumentCursorActive",
                value: function (e) {
                    this.showCursor(), clearTimeout(this.cursorInactiveTimeout), this.cursorInactiveTimeout = setTimeout(this.hideCursor.bind(this), this.Reveal.getConfig().hideCursorTime)
                }
            }, {
                key: "onDocumentMouseScroll",
                value: function (e) {
                    if (Date.now() - this.lastMouseWheelStep > 1e3) {
                        this.lastMouseWheelStep = Date.now();
                        var t = e.detail || -e.wheelDelta;
                        t > 0 ? this.Reveal.next() : t < 0 && this.Reveal.prev()
                    }
                }
            }]), e
        }(),
        Xo = l.f,
        Yo = function (e) {
            return function (t) {
                for (var n, i = g(t), r = mt(i), o = r.length, s = 0, l = []; o > s;) n = r[s++], a && !Xo.call(i, n) || l.push(e ? [n, i[n]] : i[n]);
                return l
            }
        },
        Go = {
            entries: Yo(!0),
            values: Yo(!1)
        }.values;
    Me({
        target: "Object",
        stat: !0
    }, {
        values: function (e) {
            return Go(e)
        }
    });
    var Jo = function (e, t) {
            var n = document.createElement("script");
            n.type = "text/javascript", n.async = !1, n.defer = !1, n.src = e, "function" == typeof t && (n.onload = n.onreadystatechange = function (e) {
                ("load" === e.type || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = n.onerror = null, t())
            }, n.onerror = function (e) {
                n.onload = n.onreadystatechange = n.onerror = null, t(new Error("Failed loading script: " + n.src + "\n" + e))
            });
            var i = document.querySelector("head");
            i.insertBefore(n, i.lastChild)
        },
        Qo = function () {
            function e(t) {
                Ua(this, e), this.Reveal = t, this.state = "idle", this.registeredPlugins = {}, this.asyncDependencies = []
            }
            return Fa(e, [{
                key: "load",
                value: function (e, t) {
                    var n = this;
                    return this.state = "loading", e.forEach(this.registerPlugin.bind(this)), new Promise((function (e) {
                        var i = [],
                            r = 0;
                        if (t.forEach((function (e) {
                                e.condition && !e.condition() || (e.async ? n.asyncDependencies.push(e) : i.push(e))
                            })), i.length) {
                            r = i.length;
                            var a = function (t) {
                                t && "function" == typeof t.callback && t.callback(), 0 == --r && n.initPlugins().then(e)
                            };
                            i.forEach((function (e) {
                                "string" == typeof e.id ? (n.registerPlugin(e), a(e)) : "string" == typeof e.src ? Jo(e.src, (function () {
                                    return a(e)
                                })) : (console.warn("Unrecognized plugin format", e), a())
                            }))
                        } else n.initPlugins().then(e)
                    }))
                }
            }, {
                key: "initPlugins",
                value: function () {
                    var e = this;
                    return new Promise((function (t) {
                        var n = Object.values(e.registeredPlugins),
                            i = n.length;
                        if (0 === i) e.loadAsync().then(t);
                        else {
                            var r, a = function () {
                                    0 == --i ? e.loadAsync().then(t) : r()
                                },
                                o = 0;
                            (r = function () {
                                var t = n[o++];
                                if ("function" == typeof t.init) {
                                    var i = t.init(e.Reveal);
                                    i && "function" == typeof i.then ? i.then(a) : a()
                                } else a()
                            })()
                        }
                    }))
                }
            }, {
                key: "loadAsync",
                value: function () {
                    return this.state = "loaded", this.asyncDependencies.length && this.asyncDependencies.forEach((function (e) {
                        Jo(e.src, e.callback)
                    })), Promise.resolve()
                }
            }, {
                key: "registerPlugin",
                value: function (e) {
                    2 === arguments.length && "string" == typeof arguments[0] ? (e = arguments[1]).id = arguments[0] : "function" == typeof e && (e = e());
                    var t = e.id;
                    "string" != typeof t ? console.warn("Unrecognized plugin format; can't find plugin.id", e) : void 0 === this.registeredPlugins[t] ? (this.registeredPlugins[t] = e, "loaded" === this.state && "function" == typeof e.init && e.init(this.Reveal)) : console.warn('reveal.js: "' + t + '" plugin has already been registered')
                }
            }, {
                key: "hasPlugin",
                value: function (e) {
                    return !!this.registeredPlugins[e]
                }
            }, {
                key: "getPlugin",
                value: function (e) {
                    return this.registeredPlugins[e]
                }
            }, {
                key: "getRegisteredPlugins",
                value: function () {
                    return this.registeredPlugins
                }
            }]), e
        }(),
        Zo = function () {
            function e(t) {
                Ua(this, e), this.Reveal = t
            }
            return Fa(e, [{
                key: "setupPDF",
                value: function () {
                    var e = this.Reveal.getConfig(),
                        t = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight),
                        n = Math.floor(t.width * (1 + e.margin)),
                        i = Math.floor(t.height * (1 + e.margin)),
                        r = t.width,
                        a = t.height;
                    lo("@page{size:" + n + "px " + i + "px; margin: 0px;}"), lo(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + r + "px; max-height:" + a + "px}"), document.documentElement.classList.add("print-pdf"), document.body.style.width = n + "px", document.body.style.height = i + "px", this.Reveal.layoutSlideContents(r, a);
                    var o = e.slideNumber && /all|print/i.test(e.showSlideNumber);
                    to(this.Reveal.getRevealElement(), ".slides section").forEach((function (e) {
                        e.setAttribute("data-slide-number", this.Reveal.slideNumber.getSlideNumber(e))
                    }), this), to(this.Reveal.getRevealElement(), ".slides section").forEach((function (t) {
                        if (!1 === t.classList.contains("stack")) {
                            var s = (n - r) / 2,
                                l = (i - a) / 2,
                                c = t.scrollHeight,
                                u = Math.max(Math.ceil(c / i), 1);
                            (1 === (u = Math.min(u, e.pdfMaxPagesPerSlide)) && e.center || t.classList.contains("center")) && (l = Math.max((i - c) / 2, 0));
                            var d = document.createElement("div");
                            if (d.className = "pdf-page", d.style.height = (i + e.pdfPageHeightOffset) * u + "px", t.parentNode.insertBefore(d, t), d.appendChild(t), t.style.left = s + "px", t.style.top = l + "px", t.style.width = r + "px", t.slideBackgroundElement && d.insertBefore(t.slideBackgroundElement, t), e.showNotes) {
                                var h = this.Reveal.getSlideNotes(t);
                                if (h) {
                                    var f = "string" == typeof e.showNotes ? e.showNotes : "inline",
                                        v = document.createElement("div");
                                    v.classList.add("speaker-notes"), v.classList.add("speaker-notes-pdf"), v.setAttribute("data-layout", f), v.innerHTML = h, "separate-page" === f ? d.parentNode.insertBefore(v, d.nextSibling) : (v.style.left = "8px", v.style.bottom = "8px", v.style.width = n - 16 + "px", d.appendChild(v))
                                }
                            }
                            if (o) {
                                var g = document.createElement("div");
                                g.classList.add("slide-number"), g.classList.add("slide-number-pdf"), g.innerHTML = t.getAttribute("data-slide-number"), d.appendChild(g)
                            }
                            if (e.pdfSeparateFragments) {
                                var p, m, y = this.Reveal.fragments.sort(d.querySelectorAll(".fragment"), !0);
                                y.forEach((function (e) {
                                    p && p.forEach((function (e) {
                                        e.classList.remove("current-fragment")
                                    })), e.forEach((function (e) {
                                        e.classList.add("visible", "current-fragment")
                                    }), this);
                                    var t = d.cloneNode(!0);
                                    d.parentNode.insertBefore(t, (m || d).nextSibling), p = e, m = t
                                }), this), y.forEach((function (e) {
                                    e.forEach((function (e) {
                                        e.classList.remove("visible", "current-fragment")
                                    }))
                                }))
                            } else to(d, ".fragment:not(.fade-out)").forEach((function (e) {
                                e.classList.add("visible")
                            }))
                        }
                    }), this), this.Reveal.dispatchEvent({
                        type: "pdf-ready"
                    })
                }
            }, {
                key: "isPrintingPDF",
                value: function () {
                    return /print-pdf/gi.test(window.location.search)
                }
            }]), e
        }(),
        es = function () {
            function e(t) {
                Ua(this, e), this.Reveal = t, this.touchStartX = 0, this.touchStartY = 0, this.touchStartCount = 0, this.touchCaptured = !1, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this)
            }
            return Fa(e, [{
                key: "bind",
                value: function () {
                    var e = this.Reveal.getRevealElement();
                    "onpointerdown" in window ? (e.addEventListener("pointerdown", this.onPointerDown, !1), e.addEventListener("pointermove", this.onPointerMove, !1), e.addEventListener("pointerup", this.onPointerUp, !1)) : window.navigator.msPointerEnabled ? (e.addEventListener("MSPointerDown", this.onPointerDown, !1), e.addEventListener("MSPointerMove", this.onPointerMove, !1), e.addEventListener("MSPointerUp", this.onPointerUp, !1)) : (e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1))
                }
            }, {
                key: "unbind",
                value: function () {
                    var e = this.Reveal.getRevealElement();
                    e.removeEventListener("pointerdown", this.onPointerDown, !1), e.removeEventListener("pointermove", this.onPointerMove, !1), e.removeEventListener("pointerup", this.onPointerUp, !1), e.removeEventListener("MSPointerDown", this.onPointerDown, !1), e.removeEventListener("MSPointerMove", this.onPointerMove, !1), e.removeEventListener("MSPointerUp", this.onPointerUp, !1), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1)
                }
            }, {
                key: "isSwipePrevented",
                value: function (e) {
                    for (; e && "function" == typeof e.hasAttribute;) {
                        if (e.hasAttribute("data-prevent-swipe")) return !0;
                        e = e.parentNode
                    }
                    return !1
                }
            }, {
                key: "onTouchStart",
                value: function (e) {
                    if (this.isSwipePrevented(e.target)) return !0;
                    this.touchStartX = e.touches[0].clientX, this.touchStartY = e.touches[0].clientY, this.touchStartCount = e.touches.length
                }
            }, {
                key: "onTouchMove",
                value: function (e) {
                    if (this.isSwipePrevented(e.target)) return !0;
                    var t = this.Reveal.getConfig();
                    if (this.touchCaptured) po && e.preventDefault();
                    else {
                        this.Reveal.onUserInput(e);
                        var n = e.touches[0].clientX,
                            i = e.touches[0].clientY;
                        if (1 === e.touches.length && 2 !== this.touchStartCount) {
                            var r = this.Reveal.availableRoutes({
                                    includeFragments: !0
                                }),
                                a = n - this.touchStartX,
                                o = i - this.touchStartY;
                            a > 40 && Math.abs(a) > Math.abs(o) ? (this.touchCaptured = !0, "linear" === t.navigationMode ? t.rtl ? this.Reveal.next() : this.Reveal.prev() : this.Reveal.left()) : a < -40 && Math.abs(a) > Math.abs(o) ? (this.touchCaptured = !0, "linear" === t.navigationMode ? t.rtl ? this.Reveal.prev() : this.Reveal.next() : this.Reveal.right()) : o > 40 && r.up ? (this.touchCaptured = !0, "linear" === t.navigationMode ? this.Reveal.prev() : this.Reveal.up()) : o < -40 && r.down && (this.touchCaptured = !0, "linear" === t.navigationMode ? this.Reveal.next() : this.Reveal.down()), t.embedded ? (this.touchCaptured || this.Reveal.isVerticalSlide()) && e.preventDefault() : e.preventDefault()
                        }
                    }
                }
            }, {
                key: "onTouchEnd",
                value: function (e) {
                    this.touchCaptured = !1
                }
            }, {
                key: "onPointerDown",
                value: function (e) {
                    e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
                        clientX: e.clientX,
                        clientY: e.clientY
                    }], this.onTouchStart(e))
                }
            }, {
                key: "onPointerMove",
                value: function (e) {
                    e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
                        clientX: e.clientX,
                        clientY: e.clientY
                    }], this.onTouchMove(e))
                }
            }, {
                key: "onPointerUp",
                value: function (e) {
                    e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [{
                        clientX: e.clientX,
                        clientY: e.clientY
                    }], this.onTouchEnd(e))
                }
            }]), e
        }(),
        ts = function () {
            function e(t) {
                Ua(this, e), this.Reveal = t, this.onRevealPointerDown = this.onRevealPointerDown.bind(this), this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this)
            }
            return Fa(e, [{
                key: "configure",
                value: function (e, t) {
                    e.embedded ? this.blur() : (this.focus(), this.unbind())
                }
            }, {
                key: "bind",
                value: function () {
                    this.Reveal.getConfig().embedded && this.Reveal.getRevealElement().addEventListener("pointerdown", this.onRevealPointerDown, !1)
                }
            }, {
                key: "unbind",
                value: function () {
                    this.Reveal.getRevealElement().removeEventListener("pointerdown", this.onRevealPointerDown, !1), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1)
                }
            }, {
                key: "focus",
                value: function () {
                    "focus" !== this.state && (this.Reveal.getRevealElement().classList.add("focused"), document.addEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = "focus"
                }
            }, {
                key: "blur",
                value: function () {
                    "blur" !== this.state && (this.Reveal.getRevealElement().classList.remove("focused"), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = "blur"
                }
            }, {
                key: "isFocused",
                value: function () {
                    return "focus" === this.state
                }
            }, {
                key: "onRevealPointerDown",
                value: function (e) {
                    this.focus()
                }
            }, {
                key: "onDocumentPointerDown",
                value: function (e) {
                    var t = oo(e.target, ".reveal");
                    t && t === this.Reveal.getRevealElement() || this.blur()
                }
            }]), e
        }(),
        ns = function () {
            function e(t) {
                Ua(this, e), this.Reveal = t
            }
            return Fa(e, [{
                key: "render",
                value: function () {
                    this.element = document.createElement("div"), this.element.className = "speaker-notes", this.element.setAttribute("data-prevent-swipe", ""), this.element.setAttribute("tabindex", "0"), this.Reveal.getRevealElement().appendChild(this.element)
                }
            }, {
                key: "configure",
                value: function (e, t) {
                    e.showNotes && this.element.setAttribute("data-layout", "string" == typeof e.showNotes ? e.showNotes : "inline")
                }
            }, {
                key: "update",
                value: function () {
                    this.Reveal.getConfig().showNotes && this.element && this.Reveal.getCurrentSlide() && !this.Reveal.print.isPrintingPDF() && (this.element.innerHTML = this.getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>')
                }
            }, {
                key: "updateVisibility",
                value: function () {
                    this.Reveal.getConfig().showNotes && this.hasNotes() && !this.Reveal.print.isPrintingPDF() ? this.Reveal.getRevealElement().classList.add("show-notes") : this.Reveal.getRevealElement().classList.remove("show-notes")
                }
            }, {
                key: "hasNotes",
                value: function () {
                    return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length > 0
                }
            }, {
                key: "isSpeakerNotesWindow",
                value: function () {
                    return !!window.location.search.match(/receiver/gi)
                }
            }, {
                key: "getSlideNotes",
                value: function () {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.Reveal.getCurrentSlide();
                    if (e.hasAttribute("data-notes")) return e.getAttribute("data-notes");
                    var t = e.querySelector("aside.notes");
                    return t ? t.innerHTML : null
                }
            }]), e
        }(),
        is = Fe("unscopables"),
        rs = Array.prototype;
    null == rs[is] && C.f(rs, is, {
        configurable: !0,
        value: Ct(null)
    });
    Me({
            target: "Array",
            proto: !0
        }, {
            fill: function (e) {
                for (var t = Oe(this), n = ce(t.length), i = arguments.length, r = he(i > 1 ? arguments[1] : void 0, n), a = i > 2 ? arguments[2] : void 0, o = void 0 === a ? n : he(a, n); o > r;) t[r++] = e;
                return t
            }
        }),
        function (e) {
            rs[is][e] = !0
        }("fill");
    var as = function () {
            function e(t, n) {
                Ua(this, e), this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = !1, this.progress = 0, this.progressOffset = 1, this.container = t, this.progressCheck = n, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render()
            }
            return Fa(e, [{
                key: "setPlaying",
                value: function (e) {
                    var t = this.playing;
                    this.playing = e, !t && this.playing ? this.animate() : this.render()
                }
            }, {
                key: "animate",
                value: function () {
                    var e = this.progress;
                    this.progress = this.progressCheck(), e > .8 && this.progress < .2 && (this.progressOffset = this.progress), this.render(), this.playing && requestAnimationFrame(this.animate.bind(this))
                }
            }, {
                key: "render",
                value: function () {
                    var e = this.playing ? this.progress : 0,
                        t = this.diameter2 - this.thickness,
                        n = this.diameter2,
                        i = this.diameter2;
                    this.progressOffset += .1 * (1 - this.progressOffset);
                    var r = -Math.PI / 2 + e * (2 * Math.PI),
                        a = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
                    this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(n, i, t + 4, 0, 2 * Math.PI, !1), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(n, i, t, 0, 2 * Math.PI, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(n, i, t, a, r, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(n - 14, i - 14), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, 10, 28), this.context.fillRect(18, 0, 10, 28)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(24, 14), this.context.lineTo(0, 28), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore()
                }
            }, {
                key: "on",
                value: function (e, t) {
                    this.canvas.addEventListener(e, t, !1)
                }
            }, {
                key: "off",
                value: function (e, t) {
                    this.canvas.removeEventListener(e, t, !1)
                }
            }, {
                key: "destroy",
                value: function () {
                    this.playing = !1, this.canvas.parentNode && this.container.removeChild(this.canvas)
                }
            }]), e
        }(),
        os = {
            width: 960,
            height: 700,
            margin: .04,
            minScale: .2,
            maxScale: 2,
            controls: !0,
            controlsTutorial: !0,
            controlsLayout: "bottom-right",
            controlsBackArrows: "faded",
            progress: !0,
            slideNumber: !1,
            showSlideNumber: "all",
            hashOneBasedIndex: !1,
            hash: !1,
            respondToHashChanges: !0,
            history: !1,
            keyboard: !0,
            keyboardCondition: null,
            disableLayout: !1,
            overview: !0,
            center: !0,
            touch: !0,
            loop: !1,
            rtl: !1,
            navigationMode: "default",
            shuffle: !1,
            fragments: !0,
            fragmentInURL: !0,
            embedded: !1,
            help: !0,
            pause: !0,
            showNotes: !1,
            autoPlayMedia: null,
            preloadIframes: null,
            autoAnimate: !0,
            autoAnimateMatcher: null,
            autoAnimateEasing: "ease",
            autoAnimateDuration: 1,
            autoAnimateUnmatched: !0,
            autoAnimateStyles: ["opacity", "color", "background-color", "padding", "font-size", "line-height", "letter-spacing", "border-width", "border-color", "border-radius", "outline", "outline-offset"],
            autoSlide: 0,
            autoSlideStoppable: !0,
            autoSlideMethod: null,
            defaultTiming: null,
            mouseWheel: !1,
            previewLinks: !1,
            postMessage: !0,
            postMessageEvents: !1,
            focusBodyOnPageVisibilityChange: !0,
            transition: "slide",
            transitionSpeed: "default",
            backgroundTransition: "fade",
            parallaxBackgroundImage: "",
            parallaxBackgroundSize: "",
            parallaxBackgroundRepeat: "",
            parallaxBackgroundPosition: "",
            parallaxBackgroundHorizontal: null,
            parallaxBackgroundVertical: null,
            pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
            pdfSeparateFragments: !0,
            pdfPageHeightOffset: -1,
            viewDistance: 3,
            mobileViewDistance: 2,
            display: "block",
            hideInactiveCursor: !0,
            hideCursorTime: 5e3,
            dependencies: [],
            plugins: []
        };

    function ss(e, t) {
        arguments.length < 2 && (t = arguments[0], e = document.querySelector(".reveal"));
        var n, i, r, a, o, s = {},
            l = {},
            c = !1,
            u = {
                hasNavigatedHorizontally: !1,
                hasNavigatedVertically: !1
            },
            d = [],
            h = 1,
            f = {
                layout: "",
                overview: ""
            },
            v = {},
            g = "idle",
            p = 0,
            m = 0,
            y = -1,
            b = !1,
            w = new bo(s),
            S = new wo(s),
            E = new Fo(s),
            k = new Eo(s),
            A = new zo(s),
            R = new qo(s),
            x = new _o(s),
            L = new Vo(s),
            C = new Wo(s),
            P = new Ko(s),
            N = new $o(s),
            M = new Qo(s),
            I = new Zo(s),
            O = new ts(s),
            T = new es(s),
            D = new ns(s);

        function j(n) {
            return v.wrapper = e, v.slides = e.querySelector(".slides"), l = _a(_a(_a(_a(_a({}, os), l), t), n), co()), H(), window.addEventListener("load", ae, !1), M.load(l.plugins, l.dependencies).then(U), new Promise((function (e) {
                return s.on("ready", e)
            }))
        }

        function H() {
            !0 === l.embedded ? v.viewport = oo(e, ".reveal-viewport") || e : (v.viewport = document.body, document.documentElement.classList.add("reveal-full-page")), v.viewport.classList.add("reveal-viewport")
        }

        function U() {
            c = !0, B(), V(), _(), ke(), W(), L.readURL(), k.update(!0), setTimeout((function () {
                v.slides.classList.remove("no-transition"), v.wrapper.classList.add("ready"), J({
                    type: "ready",
                    data: {
                        indexh: n,
                        indexv: i,
                        currentSlide: a
                    }
                })
            }), 1), I.isPrintingPDF() && ($(), "complete" === document.readyState ? I.setupPDF() : window.addEventListener("load", (function () {
                I.setupPDF()
            })))
        }

        function B() {
            v.slides.classList.add("no-transition"), vo ? v.wrapper.classList.add("no-hover") : v.wrapper.classList.remove("no-hover"), k.render(), S.render(), C.render(), P.render(), D.render(), v.pauseOverlay = so(v.wrapper, "div", "pause-overlay", l.controls ? '<button class="resume-button">Resume presentation</button>' : null), v.statusElement = F(), v.wrapper.setAttribute("role", "application")
        }

        function F() {
            var e = v.wrapper.querySelector(".aria-status");
            return e || ((e = document.createElement("div")).style.position = "absolute", e.style.height = "1px", e.style.width = "1px", e.style.overflow = "hidden", e.style.clip = "rect( 1px, 1px, 1px, 1px )", e.classList.add("aria-status"), e.setAttribute("aria-live", "polite"), e.setAttribute("aria-atomic", "true"), v.wrapper.appendChild(e)), e
        }

        function z(e) {
            v.statusElement.textContent = e
        }

        function q(e) {
            var t = "";
            if (3 === e.nodeType) t += e.textContent;
            else if (1 === e.nodeType) {
                var n = e.getAttribute("aria-hidden"),
                    i = "none" === window.getComputedStyle(e).display;
                "true" === n || i || Array.from(e.childNodes).forEach((function (e) {
                    t += q(e)
                }))
            }
            return "" === (t = t.trim()) ? "" : t + " "
        }

        function _() {
            setInterval((function () {
                0 === v.wrapper.scrollTop && 0 === v.wrapper.scrollLeft || (v.wrapper.scrollTop = 0, v.wrapper.scrollLeft = 0)
            }), 1e3)
        }

        function V() {
            l.postMessage && window.addEventListener("message", (function (e) {
                var t = e.data;
                if ("string" == typeof t && "{" === t.charAt(0) && "}" === t.charAt(t.length - 1) && (t = JSON.parse(t)).method && "function" == typeof s[t.method])
                    if (!1 === Ka.test(t.method)) {
                        var n = s[t.method].apply(s, t.args);
                        Q("callback", {
                            method: t.method,
                            result: n
                        })
                    } else console.warn('reveal.js: "' + t.method + '" is is blacklisted from the postMessage API')
            }), !1)
        }

        function W(e) {
            var t = _a({}, l);
            if ("object" === Ha(e) && eo(l, e), !1 !== s.isReady()) {
                var n = v.wrapper.querySelectorAll(".slides section").length;
                v.wrapper.classList.remove(t.transition), v.wrapper.classList.add(l.transition), v.wrapper.setAttribute("data-transition-speed", l.transitionSpeed), v.wrapper.setAttribute("data-background-transition", l.backgroundTransition), l.shuffle && Ae(), no(v.wrapper, "embedded", l.embedded), no(v.wrapper, "rtl", l.rtl), no(v.wrapper, "center", l.center), !1 === l.pause && ge(), l.previewLinks ? (Z(), ee("[data-preview-link=false]")) : (ee(), Z("[data-preview-link]:not([data-preview-link=false])")), E.reset(), o && (o.destroy(), o = null), n > 1 && l.autoSlide && l.autoSlideStoppable && ((o = new as(v.wrapper, (function () {
                    return Math.min(Math.max((Date.now() - y) / p, 0), 1)
                }))).on("click", rt), b = !1), "default" !== l.navigationMode ? v.wrapper.setAttribute("data-navigation-mode", l.navigationMode) : v.wrapper.removeAttribute("data-navigation-mode"), D.configure(l, t), O.configure(l, t), N.configure(l, t), C.configure(l, t), P.configure(l, t), x.configure(l, t), A.configure(l, t), S.configure(l, t), Se()
            }
        }

        function K() {
            window.addEventListener("resize", tt, !1), l.touch && T.bind(), l.keyboard && x.bind(), l.progress && P.bind(), l.respondToHashChanges && L.bind(), C.bind(), O.bind(), v.slides.addEventListener("transitionend", et, !1), v.pauseOverlay.addEventListener("click", ge, !1), l.focusBodyOnPageVisibilityChange && document.addEventListener("visibilitychange", nt, !1)
        }

        function $() {
            T.unbind(), O.unbind(), x.unbind(), C.unbind(), P.unbind(), L.unbind(), window.removeEventListener("resize", tt, !1), v.slides.removeEventListener("transitionend", et, !1), v.pauseOverlay.removeEventListener("click", ge, !1)
        }

        function X(t, n, i) {
            e.addEventListener(t, n, i)
        }

        function Y(t, n, i) {
            e.removeEventListener(t, n, i)
        }

        function G(e) {
            "string" == typeof e.layout && (f.layout = e.layout), "string" == typeof e.overview && (f.overview = e.overview), f.layout ? ro(v.slides, f.layout + " " + f.overview) : ro(v.slides, f.overview)
        }

        function J(e) {
            var t = e.target,
                n = void 0 === t ? v.wrapper : t,
                i = e.type,
                r = e.data,
                a = e.bubbles,
                o = void 0 === a || a,
                s = document.createEvent("HTMLEvents", 1, 2);
            s.initEvent(i, o, !0), eo(s, r), n.dispatchEvent(s), n === v.wrapper && Q(i)
        }

        function Q(e, t) {
            if (l.postMessageEvents && window.parent !== window.self) {
                var n = {
                    namespace: "reveal",
                    eventName: e,
                    state: ze()
                };
                eo(n, t), window.parent.postMessage(JSON.stringify(n), "*")
            }
        }

        function Z() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "a";
            Array.from(v.wrapper.querySelectorAll(e)).forEach((function (e) {
                /^(http|www)/gi.test(e.getAttribute("href")) && e.addEventListener("click", it, !1)
            }))
        }

        function ee() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "a";
            Array.from(v.wrapper.querySelectorAll(e)).forEach((function (e) {
                /^(http|www)/gi.test(e.getAttribute("href")) && e.removeEventListener("click", it, !1)
            }))
        }

        function te(e) {
            re(), v.overlay = document.createElement("div"), v.overlay.classList.add("overlay"), v.overlay.classList.add("overlay-preview"), v.wrapper.appendChild(v.overlay), v.overlay.innerHTML = '<header>\n\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t<a class="external" href="'.concat(e, '" target="_blank"><span class="icon"></span></a>\n\t\t\t</header>\n\t\t\t<div class="spinner"></div>\n\t\t\t<div class="viewport">\n\t\t\t\t<iframe src="').concat(e, '"></iframe>\n\t\t\t\t<small class="viewport-inner">\n\t\t\t\t\t<span class="x-frame-error">Unable to load iframe. This is likely due to the site\'s policy (x-frame-options).</span>\n\t\t\t\t</small>\n\t\t\t</div>'), v.overlay.querySelector("iframe").addEventListener("load", (function (e) {
                v.overlay.classList.add("loaded")
            }), !1), v.overlay.querySelector(".close").addEventListener("click", (function (e) {
                re(), e.preventDefault()
            }), !1), v.overlay.querySelector(".external").addEventListener("click", (function (e) {
                re()
            }), !1)
        }

        function ne(e) {
            "boolean" == typeof e ? e ? ie() : re() : v.overlay ? re() : ie()
        }

        function ie() {
            if (l.help) {
                re(), v.overlay = document.createElement("div"), v.overlay.classList.add("overlay"), v.overlay.classList.add("overlay-help"), v.wrapper.appendChild(v.overlay);
                var e = '<p class="title">Keyboard Shortcuts</p><br/>',
                    t = x.getShortcuts(),
                    n = x.getBindings();
                for (var i in e += "<table><th>KEY</th><th>ACTION</th>", t) e += "<tr><td>".concat(i, "</td><td>").concat(t[i], "</td></tr>");
                for (var r in n) n[r].key && n[r].description && (e += "<tr><td>".concat(n[r].key, "</td><td>").concat(n[r].description, "</td></tr>"));
                e += "</table>", v.overlay.innerHTML = '\n\t\t\t\t<header>\n\t\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t</header>\n\t\t\t\t<div class="viewport">\n\t\t\t\t\t<div class="viewport-inner">'.concat(e, "</div>\n\t\t\t\t</div>\n\t\t\t"), v.overlay.querySelector(".close").addEventListener("click", (function (e) {
                    re(), e.preventDefault()
                }), !1)
            }
        }

        function re() {
            return !!v.overlay && (v.overlay.parentNode.removeChild(v.overlay), v.overlay = null, !0)
        }

        function ae() {
            if (v.wrapper && !I.isPrintingPDF()) {
                if (!l.disableLayout) {
                    vo && !l.embedded && document.documentElement.style.setProperty("--vh", .01 * window.innerHeight + "px");
                    var e = se(),
                        t = h;
                    oe(l.width, l.height), v.slides.style.width = e.width + "px", v.slides.style.height = e.height + "px", h = Math.min(e.presentationWidth / e.width, e.presentationHeight / e.height), h = Math.max(h, l.minScale), 1 === (h = Math.min(h, l.maxScale)) ? (v.slides.style.zoom = "", v.slides.style.left = "", v.slides.style.top = "", v.slides.style.bottom = "", v.slides.style.right = "", G({
                        layout: ""
                    })) : h > 1 && mo && window.devicePixelRatio < 2 ? (v.slides.style.zoom = h, v.slides.style.left = "", v.slides.style.top = "", v.slides.style.bottom = "", v.slides.style.right = "", G({
                        layout: ""
                    })) : (v.slides.style.zoom = "", v.slides.style.left = "50%", v.slides.style.top = "50%", v.slides.style.bottom = "auto", v.slides.style.right = "auto", G({
                        layout: "translate(-50%, -50%) scale(" + h + ")"
                    }));
                    for (var n = Array.from(v.wrapper.querySelectorAll(".slides section")), i = 0, r = n.length; i < r; i++) {
                        var a = n[i];
                        "none" !== a.style.display && (l.center || a.classList.contains("center") ? a.classList.contains("stack") ? a.style.top = 0 : a.style.top = Math.max((e.height - a.scrollHeight) / 2, 0) + "px" : a.style.top = "")
                    }
                    t !== h && J({
                        type: "resize",
                        data: {
                            oldScale: t,
                            scale: h,
                            size: e
                        }
                    })
                }
                P.update(), k.updateParallax(), R.isActive() && R.update()
            }
        }

        function oe(e, t) {
            to(v.slides, "section > .stretch, section > .r-stretch").forEach((function (n) {
                var i = uo(n, t);
                if (/(img|video)/gi.test(n.nodeName)) {
                    var r = n.naturalWidth || n.videoWidth,
                        a = n.naturalHeight || n.videoHeight,
                        o = Math.min(e / r, i / a);
                    n.style.width = r * o + "px", n.style.height = a * o + "px"
                } else n.style.width = e + "px", n.style.height = i + "px"
            }))
        }

        function se(e, t) {
            var n = {
                width: l.width,
                height: l.height,
                presentationWidth: e || v.wrapper.offsetWidth,
                presentationHeight: t || v.wrapper.offsetHeight
            };
            return n.presentationWidth -= n.presentationWidth * l.margin, n.presentationHeight -= n.presentationHeight * l.margin, "string" == typeof n.width && /%$/.test(n.width) && (n.width = parseInt(n.width, 10) / 100 * n.presentationWidth), "string" == typeof n.height && /%$/.test(n.height) && (n.height = parseInt(n.height, 10) / 100 * n.presentationHeight), n
        }

        function le(e, t) {
            "object" === Ha(e) && "function" == typeof e.setAttribute && e.setAttribute("data-previous-indexv", t || 0)
        }

        function ce(e) {
            if ("object" === Ha(e) && "function" == typeof e.setAttribute && e.classList.contains("stack")) {
                var t = e.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
                return parseInt(e.getAttribute(t) || 0, 10)
            }
            return 0
        }

        function ue() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
            return e && e.parentNode && !!e.parentNode.nodeName.match(/section/i)
        }

        function de() {
            return !(!a || !ue(a)) && !a.nextElementSibling
        }

        function he() {
            return 0 === n && 0 === i
        }

        function fe() {
            return !!a && (!a.nextElementSibling && (!ue(a) || !a.parentNode.nextElementSibling))
        }

        function ve() {
            if (l.pause) {
                var e = v.wrapper.classList.contains("paused");
                Ve(), v.wrapper.classList.add("paused"), !1 === e && J({
                    type: "paused"
                })
            }
        }

        function ge() {
            var e = v.wrapper.classList.contains("paused");
            v.wrapper.classList.remove("paused"), _e(), e && J({
                type: "resumed"
            })
        }

        function pe(e) {
            "boolean" == typeof e ? e ? ve() : ge() : me() ? ge() : ve()
        }

        function me() {
            return v.wrapper.classList.contains("paused")
        }

        function ye(e) {
            "boolean" == typeof e ? e ? Ke() : We() : b ? Ke() : We()
        }

        function be() {
            return !(!p || b)
        }

        function we(e, t, o, s) {
            r = a;
            var c = v.wrapper.querySelectorAll(".slides>section");
            if (0 !== c.length) {
                void 0 !== t || R.isActive() || (t = ce(c[e])), r && r.parentNode && r.parentNode.classList.contains("stack") && le(r.parentNode, i);
                var u = d.concat();
                d.length = 0;
                var h = n || 0,
                    f = i || 0;
                n = Re(".slides>section", void 0 === e ? n : e), i = Re(".slides>section.present>section", void 0 === t ? i : t);
                var p = n !== h || i !== f;
                p || (r = null);
                var m = c[n],
                    y = m.querySelectorAll("section");
                a = y[i] || m;
                var b = !1;
                p && r && a && !R.isActive() && (r.hasAttribute("data-auto-animate") && a.hasAttribute("data-auto-animate") && (b = !0, v.slides.classList.add("disable-slide-transitions")), g = "running"), xe(), ae(), R.isActive() && R.update(), void 0 !== o && A.goto(o), r && r !== a && (r.classList.remove("present"), r.setAttribute("aria-hidden", "true"), he() && setTimeout((function () {
                    Te().forEach((function (e) {
                        le(e, 0)
                    }))
                }), 0));
                e: for (var x = 0, N = d.length; x < N; x++) {
                    for (var M = 0; M < u.length; M++)
                        if (u[M] === d[x]) {
                            u.splice(M, 1);
                            continue e
                        } v.viewport.classList.add(d[x]), J({
                        type: d[x]
                    })
                }
                for (; u.length;) v.viewport.classList.remove(u.pop());
                p && J({
                    type: "slidechanged",
                    data: {
                        indexh: n,
                        indexv: i,
                        previousSlide: r,
                        currentSlide: a,
                        origin: s
                    }
                }), !p && r || (w.stopEmbeddedContent(r), w.startEmbeddedContent(a)), z(q(a)), P.update(), C.update(), D.update(), k.update(), k.updateParallax(), S.update(), A.update(), L.writeURL(), _e(), b && (setTimeout((function () {
                    v.slides.classList.remove("disable-slide-transitions")
                }), 0), l.autoAnimate && E.run(r, a))
            }
        }

        function Se() {
            $(), K(), ae(), p = l.autoSlide, _e(), k.create(), L.writeURL(), A.sortAll(), C.update(), P.update(), xe(), D.update(), D.updateVisibility(), k.update(!0), S.update(), w.formatEmbeddedContent(), !1 === l.autoPlayMedia ? w.stopEmbeddedContent(a, {
                unloadIframes: !1
            }) : w.startEmbeddedContent(a), R.isActive() && R.layout()
        }

        function Ee() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a;
            k.sync(e), A.sync(e), w.load(e), k.update(), D.update()
        }

        function ke() {
            Ie().forEach((function (e) {
                to(e, "section").forEach((function (e, t) {
                    t > 0 && (e.classList.remove("present"), e.classList.remove("past"), e.classList.add("future"), e.setAttribute("aria-hidden", "true"))
                }))
            }))
        }

        function Ae() {
            Ie().forEach((function (e, t, n) {
                v.slides.insertBefore(e, n[Math.floor(Math.random() * n.length)])
            }))
        }

        function Re(e, t) {
            var n = to(v.wrapper, e),
                i = n.length,
                r = I.isPrintingPDF();
            if (i) {
                l.loop && (t %= i) < 0 && (t = i + t), t = Math.max(Math.min(t, i - 1), 0);
                for (var a = 0; a < i; a++) {
                    var o = n[a],
                        s = l.rtl && !ue(o);
                    o.classList.remove("past"), o.classList.remove("present"), o.classList.remove("future"), o.setAttribute("hidden", ""), o.setAttribute("aria-hidden", "true"), o.querySelector("section") && o.classList.add("stack"), r ? o.classList.add("present") : a < t ? (o.classList.add(s ? "future" : "past"), l.fragments && to(o, ".fragment").forEach((function (e) {
                        e.classList.add("visible"), e.classList.remove("current-fragment")
                    }))) : a > t && (o.classList.add(s ? "past" : "future"), l.fragments && to(o, ".fragment.visible").forEach((function (e) {
                        e.classList.remove("visible", "current-fragment")
                    })))
                }
                var c = n[t],
                    u = c.classList.contains("present");
                c.classList.add("present"), c.removeAttribute("hidden"), c.removeAttribute("aria-hidden"), u || J({
                    target: c,
                    type: "visible",
                    bubbles: !1
                });
                var h = c.getAttribute("data-state");
                h && (d = d.concat(h.split(" ")))
            } else t = 0;
            return t
        }

        function xe() {
            var e, t = Ie(),
                r = t.length;
            if (r && void 0 !== n) {
                var a = R.isActive() ? 10 : l.viewDistance;
                vo && (a = R.isActive() ? 6 : l.mobileViewDistance), I.isPrintingPDF() && (a = Number.MAX_VALUE);
                for (var o = 0; o < r; o++) {
                    var s = t[o],
                        c = to(s, "section"),
                        u = c.length;
                    if (e = Math.abs((n || 0) - o) || 0, l.loop && (e = Math.abs(((n || 0) - o) % (r - a)) || 0), e < a ? w.load(s) : w.unload(s), u)
                        for (var d = ce(s), h = 0; h < u; h++) {
                            var f = c[h];
                            e + (o === (n || 0) ? Math.abs((i || 0) - h) : Math.abs(h - d)) < a ? w.load(f) : w.unload(f)
                        }
                }
                je() ? v.wrapper.classList.add("has-vertical-slides") : v.wrapper.classList.remove("has-vertical-slides"), De() ? v.wrapper.classList.add("has-horizontal-slides") : v.wrapper.classList.remove("has-horizontal-slides")
            }
        }

        function Le() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                t = e.includeFragments,
                r = void 0 !== t && t,
                a = v.wrapper.querySelectorAll(".slides>section"),
                o = v.wrapper.querySelectorAll(".slides>section.present>section"),
                s = {
                    left: n > 0,
                    right: n < a.length - 1,
                    up: i > 0,
                    down: i < o.length - 1
                };
            if (l.loop && (a.length > 1 && (s.left = !0, s.right = !0), o.length > 1 && (s.up = !0, s.down = !0)), a.length > 1 && "linear" === l.navigationMode && (s.right = s.right || s.down, s.left = s.left || s.up), !0 === r) {
                var c = A.availableRoutes();
                s.left = s.left || c.prev, s.up = s.up || c.prev, s.down = s.down || c.next, s.right = s.right || c.next
            }
            if (l.rtl) {
                var u = s.left;
                s.left = s.right, s.right = u
            }
            return s
        }

        function Ce() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : a,
                t = Ie(),
                n = 0;
            e: for (var i = 0; i < t.length; i++) {
                for (var r = t[i], o = r.querySelectorAll("section"), s = 0; s < o.length; s++) {
                    if (o[s] === e) break e;
                    "uncounted" !== o[s].dataset.visibility && n++
                }
                if (r === e) break;
                !1 === r.classList.contains("stack") && "uncounted" !== !r.dataset.visibility && n++
            }
            return n
        }

        function Pe() {
            var e = Ue(),
                t = Ce();
            if (a) {
                var n = a.querySelectorAll(".fragment");
                if (n.length > 0) {
                    t += a.querySelectorAll(".fragment.visible").length / n.length * .9
                }
            }
            return Math.min(t / (e - 1), 1)
        }

        function Ne(e) {
            var t, r = n,
                o = i;
            if (e) {
                var s = ue(e),
                    l = s ? e.parentNode : e,
                    c = Ie();
                r = Math.max(c.indexOf(l), 0), o = void 0, s && (o = Math.max(to(e.parentNode, "section").indexOf(e), 0))
            }
            if (!e && a && a.querySelectorAll(".fragment").length > 0) {
                var u = a.querySelector(".current-fragment");
                t = u && u.hasAttribute("data-fragment-index") ? parseInt(u.getAttribute("data-fragment-index"), 10) : a.querySelectorAll(".fragment.visible").length - 1
            }
            return {
                h: r,
                v: o,
                f: t
            }
        }

        function Me() {
            return to(v.wrapper, '.slides section:not(.stack):not([data-visibility="uncounted"])')
        }

        function Ie() {
            return to(v.wrapper, ".slides>section")
        }

        function Oe() {
            return to(v.wrapper, ".slides>section>section")
        }

        function Te() {
            return to(v.wrapper, ".slides>section.stack")
        }

        function De() {
            return Ie().length > 1
        }

        function je() {
            return Oe().length > 1
        }

        function He() {
            return Me().map((function (e) {
                for (var t = {}, n = 0; n < e.attributes.length; n++) {
                    var i = e.attributes[n];
                    t[i.name] = i.value
                }
                return t
            }))
        }

        function Ue() {
            return Me().length
        }

        function Be(e, t) {
            var n = Ie()[e],
                i = n && n.querySelectorAll("section");
            return i && i.length && "number" == typeof t ? i ? i[t] : void 0 : n
        }

        function Fe(e, t) {
            var n = "number" == typeof e ? Be(e, t) : e;
            if (n) return n.slideBackgroundElement
        }

        function ze() {
            var e = Ne();
            return {
                indexh: e.h,
                indexv: e.v,
                indexf: e.f,
                paused: me(),
                overview: R.isActive()
            }
        }

        function qe(e) {
            if ("object" === Ha(e)) {
                we(io(e.indexh), io(e.indexv), io(e.indexf));
                var t = io(e.paused),
                    n = io(e.overview);
                "boolean" == typeof t && t !== me() && pe(t), "boolean" == typeof n && n !== R.isActive() && R.toggle(n)
            }
        }

        function _e() {
            if (Ve(), a && !1 !== l.autoSlide) {
                var e = a.querySelector(".current-fragment");
                e || (e = a.querySelector(".fragment"));
                var t = e ? e.getAttribute("data-autoslide") : null,
                    n = a.parentNode ? a.parentNode.getAttribute("data-autoslide") : null,
                    i = a.getAttribute("data-autoslide");
                t ? p = parseInt(t, 10) : i ? p = parseInt(i, 10) : n ? p = parseInt(n, 10) : (p = l.autoSlide, 0 === a.querySelectorAll(".fragment").length && to(a, "video, audio").forEach((function (e) {
                    e.hasAttribute("data-autoplay") && p && 1e3 * e.duration / e.playbackRate > p && (p = 1e3 * e.duration / e.playbackRate + 1e3)
                }))), !p || b || me() || R.isActive() || fe() && !A.availableRoutes().next && !0 !== l.loop || (m = setTimeout((function () {
                    "function" == typeof l.autoSlideMethod ? l.autoSlideMethod() : Qe(), _e()
                }), p), y = Date.now()), o && o.setPlaying(-1 !== m)
            }
        }

        function Ve() {
            clearTimeout(m), m = -1
        }

        function We() {
            p && !b && (b = !0, J({
                type: "autoslidepaused"
            }), clearTimeout(m), o && o.setPlaying(!1))
        }

        function Ke() {
            p && b && (b = !1, J({
                type: "autoslideresumed"
            }), _e())
        }

        function $e() {
            u.hasNavigatedHorizontally = !0, l.rtl ? (R.isActive() || !1 === A.next()) && Le().left && we(n + 1, "grid" === l.navigationMode ? i : void 0) : (R.isActive() || !1 === A.prev()) && Le().left && we(n - 1, "grid" === l.navigationMode ? i : void 0)
        }

        function Xe() {
            u.hasNavigatedHorizontally = !0, l.rtl ? (R.isActive() || !1 === A.prev()) && Le().right && we(n - 1, "grid" === l.navigationMode ? i : void 0) : (R.isActive() || !1 === A.next()) && Le().right && we(n + 1, "grid" === l.navigationMode ? i : void 0)
        }

        function Ye() {
            (R.isActive() || !1 === A.prev()) && Le().up && we(n, i - 1)
        }

        function Ge() {
            u.hasNavigatedVertically = !0, (R.isActive() || !1 === A.next()) && Le().down && we(n, i + 1)
        }

        function Je() {
            var e;
            if (!1 === A.prev())
                if (Le().up) Ye();
                else if (e = l.rtl ? to(v.wrapper, ".slides>section.future").pop() : to(v.wrapper, ".slides>section.past").pop()) {
                var t = e.querySelectorAll("section").length - 1 || void 0;
                we(n - 1, t)
            }
        }

        function Qe() {
            if (u.hasNavigatedHorizontally = !0, u.hasNavigatedVertically = !0, !1 === A.next()) {
                var e = Le();
                e.down && e.right && l.loop && de() && (e.down = !1), e.down ? Ge() : l.rtl ? $e() : Xe()
            }
        }

        function Ze(e) {
            l.autoSlideStoppable && We()
        }

        function et(e) {
            "running" === g && /section/gi.test(e.target.nodeName) && (g = "idle", J({
                type: "slidetransitionend",
                data: {
                    indexh: n,
                    indexv: i,
                    previousSlide: r,
                    currentSlide: a
                }
            }))
        }

        function tt(e) {
            ae()
        }

        function nt(e) {
            !1 === document.hidden && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(), document.body.focus())
        }

        function it(e) {
            if (e.currentTarget && e.currentTarget.hasAttribute("href")) {
                var t = e.currentTarget.getAttribute("href");
                t && (te(t), e.preventDefault())
            }
        }

        function rt(e) {
            fe() && !1 === l.loop ? (we(0, 0), Ke()) : b ? Ke() : We()
        }
        var at = {
            VERSION: "4.0.2",
            initialize: j,
            configure: W,
            sync: Se,
            syncSlide: Ee,
            syncFragments: A.sync.bind(A),
            slide: we,
            left: $e,
            right: Xe,
            up: Ye,
            down: Ge,
            prev: Je,
            next: Qe,
            navigateLeft: $e,
            navigateRight: Xe,
            navigateUp: Ye,
            navigateDown: Ge,
            navigatePrev: Je,
            navigateNext: Qe,
            navigateFragment: A.goto.bind(A),
            prevFragment: A.prev.bind(A),
            nextFragment: A.next.bind(A),
            on: X,
            off: Y,
            addEventListener: X,
            removeEventListener: Y,
            layout: ae,
            shuffle: Ae,
            availableRoutes: Le,
            availableFragments: A.availableRoutes.bind(A),
            toggleHelp: ne,
            toggleOverview: R.toggle.bind(R),
            togglePause: pe,
            toggleAutoSlide: ye,
            isFirstSlide: he,
            isLastSlide: fe,
            isLastVerticalSlide: de,
            isVerticalSlide: ue,
            isPaused: me,
            isAutoSliding: be,
            isSpeakerNotes: D.isSpeakerNotesWindow.bind(D),
            isOverview: R.isActive.bind(R),
            isFocused: O.isFocused.bind(O),
            isPrintingPDF: I.isPrintingPDF.bind(I),
            isReady: function () {
                return c
            },
            loadSlide: w.load.bind(w),
            unloadSlide: w.unload.bind(w),
            addEventListeners: K,
            removeEventListeners: $,
            dispatchEvent: J,
            getState: ze,
            setState: qe,
            getProgress: Pe,
            getIndices: Ne,
            getSlidesAttributes: He,
            getSlidePastCount: Ce,
            getTotalSlides: Ue,
            getSlide: Be,
            getPreviousSlide: function () {
                return r
            },
            getCurrentSlide: function () {
                return a
            },
            getSlideBackground: Fe,
            getSlideNotes: D.getSlideNotes.bind(D),
            getSlides: Me,
            getHorizontalSlides: Ie,
            getVerticalSlides: Oe,
            hasHorizontalSlides: De,
            hasVerticalSlides: je,
            hasNavigatedHorizontally: function () {
                return u.hasNavigatedHorizontally
            },
            hasNavigatedVertically: function () {
                return u.hasNavigatedVertically
            },
            addKeyBinding: x.addKeyBinding.bind(x),
            removeKeyBinding: x.removeKeyBinding.bind(x),
            triggerKey: x.triggerKey.bind(x),
            registerKeyboardShortcut: x.registerKeyboardShortcut.bind(x),
            getComputedSlideSize: se,
            getScale: function () {
                return h
            },
            getConfig: function () {
                return l
            },
            getQueryHash: co,
            getRevealElement: function () {
                return e
            },
            getSlidesElement: function () {
                return v.slides
            },
            getViewportElement: function () {
                return v.viewport
            },
            getBackgroundsElement: function () {
                return k.element
            },
            registerPlugin: M.registerPlugin.bind(M),
            hasPlugin: M.hasPlugin.bind(M),
            getPlugin: M.getPlugin.bind(M),
            getPlugins: M.getRegisteredPlugins.bind(M)
        };
        return eo(s, _a(_a({}, at), {}, {
            announceStatus: z,
            getStatusText: q,
            print: I,
            focus: O,
            progress: P,
            controls: C,
            location: L,
            overview: R,
            fragments: A,
            slideContent: w,
            slideNumber: S,
            onUserInput: Ze,
            closeOverlay: re,
            updateSlidesVisibility: xe,
            layoutSlideContents: oe,
            transformSlides: G,
            cueAutoSlide: _e,
            cancelAutoSlide: Ve
        })), at
    }
    var ls = ss,
        cs = [];
    return ls.initialize = function (e) {
        return Object.assign(ls, new ss(document.querySelector(".reveal"), e)), cs.map((function (e) {
            return e(ls)
        })), ls.initialize()
    }, ["configure", "on", "off", "addEventListener", "removeEventListener", "registerPlugin"].forEach((function (e) {
        ls[e] = function () {
            for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++) n[i] = arguments[i];
            cs.push((function (t) {
                var i;
                return (i = t[e]).call.apply(i, [null].concat(n))
            }))
        }
    })), ls.isReady = function () {
        return !1
    }, ls.VERSION = "4.0.2", ls
}));
//# sourceMappingURL=reveal.js.map