!function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {})
}(this, function (t) {
    "use strict";

    function e(t, e) {
        function n() {
            this.constructor = t
        }

        my(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
    }

    function n() {
        for (var t = 0, e = 0, n = arguments.length; n > e; e++) t += arguments[e].length;
        for (var i = Array(t), r = 0, e = 0; n > e; e++) for (var o = arguments[e], a = 0, s = o.length; s > a; a++, r++) i[r] = o[a];
        return i
    }

    function i(t, e) {
        var n = e.browser, i = t.match(/Firefox\/([\d.]+)/),
            r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/), o = t.match(/Edge?\/([\d.]+)/),
            a = /micromessenger/i.test(t);
        i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), o && (n.edge = !0, n.version = o[1], n.newEdge = +o[1].split(".")[0] > 18), a && (n.weChat = !0), e.canvasSupported = !!document.createElement("canvas").getContext, e.svgSupported = "undefined" != typeof SVGRect, e.touchEventsSupported = "ontouchstart" in window && !n.ie && !n.edge, e.pointerEventsSupported = "onpointerdown" in window && (n.edge || n.ie && +n.version >= 11), e.domSupported = "undefined" != typeof document
    }

    function r(t, e) {
        Oy[t] = e
    }

    function o() {
        return Ry++
    }

    function a() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        "undefined" != typeof console && console.error.apply(console, t)
    }

    function s(t) {
        if (null == t || "object" != typeof t) return t;
        var e = t, n = My.call(t);
        if ("[object Array]" === n) {
            if (!Y(t)) {
                e = [];
                for (var i = 0, r = t.length; r > i; i++) e[i] = s(t[i])
            }
        } else if (Ty[n]) {
            if (!Y(t)) {
                var o = t.constructor;
                if (o.from) e = o.from(t); else {
                    e = new o(t.length);
                    for (var i = 0, r = t.length; r > i; i++) e[i] = s(t[i])
                }
            }
        } else if (!Sy[n] && !Y(t) && !P(t)) {
            e = {};
            for (var a in t) t.hasOwnProperty(a) && (e[a] = s(t[a]))
        }
        return e
    }

    function l(t, e, n) {
        if (!A(e) || !A(t)) return n ? s(e) : t;
        for (var i in e) if (e.hasOwnProperty(i)) {
            var r = t[i], o = e[i];
            !A(o) || !A(r) || T(o) || T(r) || P(o) || P(r) || k(o) || k(r) || Y(o) || Y(r) ? !n && i in t || (t[i] = s(e[i])) : l(r, o, n)
        }
        return t
    }

    function u(t, e) {
        for (var n = t[0], i = 1, r = t.length; r > i; i++) n = l(n, t[i], e);
        return n
    }

    function h(t, e) {
        if (Object.assign) Object.assign(t, e); else for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }

    function c(t, e, n) {
        for (var i = w(e), r = 0; r < i.length; r++) {
            var o = i[r];
            (n ? null != e[o] : null == t[o]) && (t[o] = e[o])
        }
        return t
    }

    function p(t, e) {
        if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var n = 0, i = t.length; i > n; n++) if (t[n] === e) return n
        }
        return -1
    }

    function f(t, e) {
        function n() {
        }

        var i = t.prototype;
        n.prototype = e.prototype, t.prototype = new n;
        for (var r in i) i.hasOwnProperty(r) && (t.prototype[r] = i[r]);
        t.prototype.constructor = t, t.superClass = e
    }

    function d(t, e, n) {
        if (t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, Object.getOwnPropertyNames) for (var i = Object.getOwnPropertyNames(e), r = 0; r < i.length; r++) {
            var o = i[r];
            "constructor" !== o && (n ? null != e[o] : null == t[o]) && (t[o] = e[o])
        } else c(t, e, n)
    }

    function g(t) {
        return t ? "string" == typeof t ? !1 : "number" == typeof t.length : !1
    }

    function y(t, e, n) {
        if (t && e) if (t.forEach && t.forEach === Iy) t.forEach(e, n); else if (t.length === +t.length) for (var i = 0, r = t.length; r > i; i++) e.call(n, t[i], i, t); else for (var o in t) t.hasOwnProperty(o) && e.call(n, t[o], o, t)
    }

    function v(t, e, n) {
        if (!t) return [];
        if (!e) return V(t);
        if (t.map && t.map === ky) return t.map(e, n);
        for (var i = [], r = 0, o = t.length; o > r; r++) i.push(e.call(n, t[r], r, t));
        return i
    }

    function m(t, e, n, i) {
        if (t && e) {
            for (var r = 0, o = t.length; o > r; r++) n = e.call(i, n, t[r], r, t);
            return n
        }
    }

    function _(t, e, n) {
        if (!t) return [];
        if (!e) return V(t);
        if (t.filter && t.filter === Dy) return t.filter(e, n);
        for (var i = [], r = 0, o = t.length; o > r; r++) e.call(n, t[r], r, t) && i.push(t[r]);
        return i
    }

    function x(t, e, n) {
        if (t && e) for (var i = 0, r = t.length; r > i; i++) if (e.call(n, t[i], i, t)) return t[i]
    }

    function w(t) {
        if (!t) return [];
        if (Object.keys) return Object.keys(t);
        var e = [];
        for (var n in t) t.hasOwnProperty(n) && e.push(n);
        return e
    }

    function b(t, e) {
        for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
        return function () {
            return t.apply(e, n.concat(Ay.call(arguments)))
        }
    }

    function S(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        return function () {
            return t.apply(this, e.concat(Ay.call(arguments)))
        }
    }

    function T(t) {
        return Array.isArray ? Array.isArray(t) : "[object Array]" === My.call(t)
    }

    function M(t) {
        return "function" == typeof t
    }

    function C(t) {
        return "string" == typeof t
    }

    function I(t) {
        return "[object String]" === My.call(t)
    }

    function D(t) {
        return "number" == typeof t
    }

    function A(t) {
        var e = typeof t;
        return "function" === e || !!t && "object" === e
    }

    function k(t) {
        return !!Sy[My.call(t)]
    }

    function L(t) {
        return !!Ty[My.call(t)]
    }

    function P(t) {
        return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
    }

    function O(t) {
        return null != t.colorStops
    }

    function R(t) {
        return null != t.image
    }

    function B(t) {
        return "[object RegExp]" === My.call(t)
    }

    function E(t) {
        return t !== t
    }

    function z() {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        for (var n = 0, i = t.length; i > n; n++) if (null != t[n]) return t[n]
    }

    function N(t, e) {
        return null != t ? t : e
    }

    function F(t, e, n) {
        return null != t ? t : null != e ? e : n
    }

    function V(t) {
        for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
        return Ay.apply(t, e)
    }

    function H(t) {
        if ("number" == typeof t) return [t, t, t, t];
        var e = t.length;
        return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
    }

    function W(t, e) {
        if (!t) throw new Error(e)
    }

    function G(t) {
        return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }

    function U(t) {
        t[zy] = !0
    }

    function Y(t) {
        return t[zy]
    }

    function X(t) {
        return new Ny(t)
    }

    function j(t, e) {
        for (var n = new t.constructor(t.length + e.length), i = 0; i < t.length; i++) n[i] = t[i];
        for (var r = t.length, i = 0; i < e.length; i++) n[i + r] = e[i];
        return n
    }

    function q(t, e) {
        var n;
        if (Object.create) n = Object.create(t); else {
            var i = function () {
            };
            i.prototype = t, n = new i
        }
        return e && h(n, e), n
    }

    function Z(t, e) {
        return t.hasOwnProperty(e)
    }

    function K() {
    }

    function $(t, e) {
        return null == t && (t = 0), null == e && (e = 0), [t, e]
    }

    function Q(t, e) {
        return t[0] = e[0], t[1] = e[1], t
    }

    function J(t) {
        return [t[0], t[1]]
    }

    function te(t, e, n) {
        return t[0] = e, t[1] = n, t
    }

    function ee(t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
    }

    function ne(t, e, n, i) {
        return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t
    }

    function ie(t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
    }

    function re(t) {
        return Math.sqrt(oe(t))
    }

    function oe(t) {
        return t[0] * t[0] + t[1] * t[1]
    }

    function ae(t, e, n) {
        return t[0] = e[0] * n[0], t[1] = e[1] * n[1], t
    }

    function se(t, e, n) {
        return t[0] = e[0] / n[0], t[1] = e[1] / n[1], t
    }

    function le(t, e) {
        return t[0] * e[0] + t[1] * e[1]
    }

    function ue(t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t
    }

    function he(t, e) {
        var n = re(e);
        return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
    }

    function ce(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
    }

    function pe(t, e) {
        return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
    }

    function fe(t, e) {
        return t[0] = -e[0], t[1] = -e[1], t
    }

    function de(t, e, n, i) {
        return t[0] = e[0] + i * (n[0] - e[0]), t[1] = e[1] + i * (n[1] - e[1]), t
    }

    function ge(t, e, n) {
        var i = e[0], r = e[1];
        return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t
    }

    function ye(t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
    }

    function ve(t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
    }

    function me(t, e, n, i, r, o) {
        var a = i + "-" + r, s = t.length;
        if (o.hasOwnProperty(a)) return o[a];
        if (1 === e) {
            var l = Math.round(Math.log((1 << s) - 1 & ~r) / qy);
            return t[n][l]
        }
        for (var u = i | 1 << n, h = n + 1; i & 1 << h;) h++;
        for (var c = 0, p = 0, f = 0; s > p; p++) {
            var d = 1 << p;
            d & r || (c += (f % 2 ? -1 : 1) * t[n][p] * me(t, e - 1, h, u, r | d, o), f++)
        }
        return o[a] = c, c
    }

    function _e(t, e) {
        var n = [[t[0], t[1], 1, 0, 0, 0, -e[0] * t[0], -e[0] * t[1]], [0, 0, 0, t[0], t[1], 1, -e[1] * t[0], -e[1] * t[1]], [t[2], t[3], 1, 0, 0, 0, -e[2] * t[2], -e[2] * t[3]], [0, 0, 0, t[2], t[3], 1, -e[3] * t[2], -e[3] * t[3]], [t[4], t[5], 1, 0, 0, 0, -e[4] * t[4], -e[4] * t[5]], [0, 0, 0, t[4], t[5], 1, -e[5] * t[4], -e[5] * t[5]], [t[6], t[7], 1, 0, 0, 0, -e[6] * t[6], -e[6] * t[7]], [0, 0, 0, t[6], t[7], 1, -e[7] * t[6], -e[7] * t[7]]],
            i = {}, r = me(n, 8, 0, 0, 0, i);
        if (0 !== r) {
            for (var o = [], a = 0; 8 > a; a++) for (var s = 0; 8 > s; s++) null == o[s] && (o[s] = 0), o[s] += ((a + s) % 2 ? -1 : 1) * me(n, 7, 0 === a ? 1 : 0, 1 << a, 1 << s, i) / r * e[a];
            return function (t, e, n) {
                var i = e * o[6] + n * o[7] + 1;
                t[0] = (e * o[0] + n * o[1] + o[2]) / i, t[1] = (e * o[3] + n * o[4] + o[5]) / i
            }
        }
    }

    function xe(t, e, n, i, r) {
        return we(Ky, e, i, r, !0) && we(t, n, Ky[0], Ky[1])
    }

    function we(t, e, n, i, r) {
        if (e.getBoundingClientRect && by.domSupported && !Te(e)) {
            var o = e[Zy] || (e[Zy] = {}), a = be(e, o), s = Se(a, o, r);
            if (s) return s(t, n, i), !0
        }
        return !1
    }

    function be(t, e) {
        var n = e.markers;
        if (n) return n;
        n = e.markers = [];
        for (var i = ["left", "right"], r = ["top", "bottom"], o = 0; 4 > o; o++) {
            var a = document.createElement("div"), s = a.style, l = o % 2, u = (o >> 1) % 2;
            s.cssText = ["position: absolute", "visibility: hidden", "padding: 0", "margin: 0", "border-width: 0", "user-select: none", "width:0", "height:0", i[l] + ":0", r[u] + ":0", i[1 - l] + ":auto", r[1 - u] + ":auto", ""].join("!important;"), t.appendChild(a), n.push(a)
        }
        return n
    }

    function Se(t, e, n) {
        for (var i = n ? "invTrans" : "trans", r = e[i], o = e.srcCoords, a = [], s = [], l = !0, u = 0; 4 > u; u++) {
            var h = t[u].getBoundingClientRect(), c = 2 * u, p = h.left, f = h.top;
            a.push(p, f), l = l && o && p === o[c] && f === o[c + 1], s.push(t[u].offsetLeft, t[u].offsetTop)
        }
        return l && r ? r : (e.srcCoords = a, e[i] = n ? _e(s, a) : _e(a, s))
    }

    function Te(t) {
        return "CANVAS" === t.nodeName.toUpperCase()
    }

    function Me(t, e, n, i) {
        return n = n || {}, i || !by.canvasSupported ? Ce(t, e, n) : by.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : Ce(t, e, n), n
    }

    function Ce(t, e, n) {
        if (by.domSupported && t.getBoundingClientRect) {
            var i = e.clientX, r = e.clientY;
            if (Te(t)) {
                var o = t.getBoundingClientRect();
                return n.zrX = i - o.left, void (n.zrY = r - o.top)
            }
            if (we(Jy, t, i, r)) return n.zrX = Jy[0], void (n.zrY = Jy[1])
        }
        n.zrX = n.zrY = 0
    }

    function Ie(t) {
        return t || window.event
    }

    function De(t, e, n) {
        if (e = Ie(e), null != e.zrX) return e;
        var i = e.type, r = i && i.indexOf("touch") >= 0;
        if (r) {
            var o = "touchend" !== i ? e.targetTouches[0] : e.changedTouches[0];
            o && Me(t, o, e, n)
        } else {
            Me(t, e, e, n);
            var a = Ae(e);
            e.zrDelta = a ? a / 120 : -(e.detail || 0) / 3
        }
        var s = e.button;
        return null == e.which && void 0 !== s && Qy.test(e.type) && (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), e
    }

    function Ae(t) {
        var e = t.wheelDelta;
        if (e) return e;
        var n = t.deltaX, i = t.deltaY;
        if (null == n || null == i) return e;
        var r = Math.abs(0 !== i ? i : n), o = i > 0 ? -1 : 0 > i ? 1 : n > 0 ? -1 : 1;
        return 3 * r * o
    }

    function ke(t, e, n, i) {
        $y ? t.addEventListener(e, n, i) : t.attachEvent("on" + e, n)
    }

    function Le(t, e, n, i) {
        $y ? t.removeEventListener(e, n, i) : t.detachEvent("on" + e, n)
    }

    function Pe(t) {
        var e = t[1][0] - t[0][0], n = t[1][1] - t[0][1];
        return Math.sqrt(e * e + n * n)
    }

    function Oe(t) {
        return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
    }

    function Re(t, e, n) {
        return {
            type: t,
            event: n,
            target: e.target,
            topTarget: e.topTarget,
            cancelBubble: !1,
            offsetX: n.zrX,
            offsetY: n.zrY,
            gestureEvent: n.gestureEvent,
            pinchX: n.pinchX,
            pinchY: n.pinchY,
            pinchScale: n.pinchScale,
            wheelDelta: n.zrDelta,
            zrByTouch: n.zrByTouch,
            which: n.which,
            stop: Be
        }
    }

    function Be() {
        tv(this.event)
    }

    function Ee(t, e, n) {
        if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
            for (var i = t, r = void 0, o = !1; i;) {
                if (i.ignoreClip && (o = !0), !o) {
                    var a = i.getClipPath();
                    if (a && !a.contain(e, n)) return !1;
                    i.silent && (r = !0)
                }
                var s = i.__hostTarget;
                i = s ? s : i.parent
            }
            return r ? iv : !0
        }
        return !1
    }

    function ze(t, e, n) {
        var i = t.painter;
        return 0 > e || e > i.getWidth() || 0 > n || n > i.getHeight()
    }

    function Ne() {
        return [1, 0, 0, 1, 0, 0]
    }

    function Fe(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
    }

    function Ve(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
    }

    function He(t, e, n) {
        var i = e[0] * n[0] + e[2] * n[1], r = e[1] * n[0] + e[3] * n[1], o = e[0] * n[2] + e[2] * n[3],
            a = e[1] * n[2] + e[3] * n[3], s = e[0] * n[4] + e[2] * n[5] + e[4], l = e[1] * n[4] + e[3] * n[5] + e[5];
        return t[0] = i, t[1] = r, t[2] = o, t[3] = a, t[4] = s, t[5] = l, t
    }

    function We(t, e, n) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t
    }

    function Ge(t, e, n) {
        var i = e[0], r = e[2], o = e[4], a = e[1], s = e[3], l = e[5], u = Math.sin(n), h = Math.cos(n);
        return t[0] = i * h + a * u, t[1] = -i * u + a * h, t[2] = r * h + s * u, t[3] = -r * u + h * s, t[4] = h * o + u * l, t[5] = h * l - u * o, t
    }

    function Ue(t, e, n) {
        var i = n[0], r = n[1];
        return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t
    }

    function Ye(t, e) {
        var n = e[0], i = e[2], r = e[4], o = e[1], a = e[3], s = e[5], l = n * a - o * i;
        return l ? (l = 1 / l, t[0] = a * l, t[1] = -o * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - a * r) * l, t[5] = (o * r - n * s) * l, t) : null
    }

    function Xe(t) {
        var e = Ne();
        return Ve(e, t), e
    }

    function je(t) {
        return t > pv || -pv > t
    }

    function qe(t) {
        return t = Math.round(t), 0 > t ? 0 : t > 255 ? 255 : t
    }

    function Ze(t) {
        return t = Math.round(t), 0 > t ? 0 : t > 360 ? 360 : t
    }

    function Ke(t) {
        return 0 > t ? 0 : t > 1 ? 1 : t
    }

    function $e(t) {
        var e = t;
        return qe(e.length && "%" === e.charAt(e.length - 1) ? parseFloat(e) / 100 * 255 : parseInt(e, 10))
    }

    function Qe(t) {
        var e = t;
        return Ke(e.length && "%" === e.charAt(e.length - 1) ? parseFloat(e) / 100 : parseFloat(e))
    }

    function Je(t, e, n) {
        return 0 > n ? n += 1 : n > 1 && (n -= 1), 1 > 6 * n ? t + (e - t) * n * 6 : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t
    }

    function tn(t, e, n) {
        return t + (e - t) * n
    }

    function en(t, e, n, i, r) {
        return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t
    }

    function nn(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }

    function rn(t, e) {
        Mv && nn(Mv, e), Mv = Tv.put(t, Mv || e.slice())
    }

    function on(t, e) {
        if (t) {
            e = e || [];
            var n = Tv.get(t);
            if (n) return nn(e, n);
            t += "";
            var i = t.replace(/ /g, "").toLowerCase();
            if (i in Sv) return nn(e, Sv[i]), rn(t, e), e;
            var r = i.length;
            if ("#" !== i.charAt(0)) {
                var o = i.indexOf("("), a = i.indexOf(")");
                if (-1 !== o && a + 1 === r) {
                    var s = i.substr(0, o), l = i.substr(o + 1, a - (o + 1)).split(","), u = 1;
                    switch (s) {
                        case "rgba":
                            if (4 !== l.length) return 3 === l.length ? en(e, +l[0], +l[1], +l[2], 1) : en(e, 0, 0, 0, 1);
                            u = Qe(l.pop());
                        case "rgb":
                            return 3 !== l.length ? void en(e, 0, 0, 0, 1) : (en(e, $e(l[0]), $e(l[1]), $e(l[2]), u), rn(t, e), e);
                        case "hsla":
                            return 4 !== l.length ? void en(e, 0, 0, 0, 1) : (l[3] = Qe(l[3]), an(l, e), rn(t, e), e);
                        case "hsl":
                            return 3 !== l.length ? void en(e, 0, 0, 0, 1) : (an(l, e), rn(t, e), e);
                        default:
                            return
                    }
                }
                en(e, 0, 0, 0, 1)
            } else {
                if (4 === r || 5 === r) {
                    var h = parseInt(i.slice(1, 4), 16);
                    return h >= 0 && 4095 >= h ? (en(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 5 === r ? parseInt(i.slice(4), 16) / 15 : 1), rn(t, e), e) : void en(e, 0, 0, 0, 1)
                }
                if (7 === r || 9 === r) {
                    var h = parseInt(i.slice(1, 7), 16);
                    return h >= 0 && 16777215 >= h ? (en(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 9 === r ? parseInt(i.slice(7), 16) / 255 : 1), rn(t, e), e) : void en(e, 0, 0, 0, 1)
                }
            }
        }
    }

    function an(t, e) {
        var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360, i = Qe(t[1]), r = Qe(t[2]),
            o = .5 >= r ? r * (i + 1) : r + i - r * i, a = 2 * r - o;
        return e = e || [], en(e, qe(255 * Je(a, o, n + 1 / 3)), qe(255 * Je(a, o, n)), qe(255 * Je(a, o, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
    }

    function sn(t) {
        if (t) {
            var e, n, i = t[0] / 255, r = t[1] / 255, o = t[2] / 255, a = Math.min(i, r, o), s = Math.max(i, r, o),
                l = s - a, u = (s + a) / 2;
            if (0 === l) e = 0, n = 0; else {
                n = .5 > u ? l / (s + a) : l / (2 - s - a);
                var h = ((s - i) / 6 + l / 2) / l, c = ((s - r) / 6 + l / 2) / l, p = ((s - o) / 6 + l / 2) / l;
                i === s ? e = p - c : r === s ? e = 1 / 3 + h - p : o === s && (e = 2 / 3 + c - h), 0 > e && (e += 1), e > 1 && (e -= 1)
            }
            var f = [360 * e, n, u];
            return null != t[3] && f.push(t[3]), f
        }
    }

    function ln(t, e) {
        var n = on(t);
        if (n) {
            for (var i = 0; 3 > i; i++) n[i] = 0 > e ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : n[i] < 0 && (n[i] = 0);
            return dn(n, 4 === n.length ? "rgba" : "rgb")
        }
    }

    function un(t) {
        var e = on(t);
        return e ? ((1 << 24) + (e[0] << 16) + (e[1] << 8) + +e[2]).toString(16).slice(1) : void 0
    }

    function hn(t, e, n) {
        if (e && e.length && t >= 0 && 1 >= t) {
            n = n || [];
            var i = t * (e.length - 1), r = Math.floor(i), o = Math.ceil(i), a = e[r], s = e[o], l = i - r;
            return n[0] = qe(tn(a[0], s[0], l)), n[1] = qe(tn(a[1], s[1], l)), n[2] = qe(tn(a[2], s[2], l)), n[3] = Ke(tn(a[3], s[3], l)), n
        }
    }

    function cn(t, e, n) {
        if (e && e.length && t >= 0 && 1 >= t) {
            var i = t * (e.length - 1), r = Math.floor(i), o = Math.ceil(i), a = on(e[r]), s = on(e[o]), l = i - r,
                u = dn([qe(tn(a[0], s[0], l)), qe(tn(a[1], s[1], l)), qe(tn(a[2], s[2], l)), Ke(tn(a[3], s[3], l))], "rgba");
            return n ? {color: u, leftIndex: r, rightIndex: o, value: i} : u
        }
    }

    function pn(t, e, n, i) {
        var r = on(t);
        return t ? (r = sn(r), null != e && (r[0] = Ze(e)), null != n && (r[1] = Qe(n)), null != i && (r[2] = Qe(i)), dn(an(r), "rgba")) : void 0
    }

    function fn(t, e) {
        var n = on(t);
        return n && null != e ? (n[3] = Ke(e), dn(n, "rgba")) : void 0
    }

    function dn(t, e) {
        if (t && t.length) {
            var n = t[0] + "," + t[1] + "," + t[2];
            return ("rgba" === e || "hsva" === e || "hsla" === e) && (n += "," + t[3]), e + "(" + n + ")"
        }
    }

    function gn(t, e) {
        var n = on(t);
        return n ? (.299 * n[0] + .587 * n[1] + .114 * n[2]) * n[3] / 255 + (1 - n[3]) * e : 0
    }

    function yn() {
        var t = Math.round(255 * Math.random()), e = Math.round(255 * Math.random()),
            n = Math.round(255 * Math.random());
        return "rgb(" + t + "," + e + "," + n + ")"
    }

    function vn(t, e, n) {
        return (e - t) * n + t
    }

    function mn(t, e, n) {
        return n > .5 ? e : t
    }

    function _n(t, e, n, i) {
        for (var r = e.length, o = 0; r > o; o++) t[o] = vn(e[o], n[o], i)
    }

    function xn(t, e, n, i) {
        for (var r = e.length, o = r && e[0].length, a = 0; r > a; a++) {
            t[a] || (t[a] = []);
            for (var s = 0; o > s; s++) t[a][s] = vn(e[a][s], n[a][s], i)
        }
    }

    function wn(t, e, n, i) {
        for (var r = e.length, o = 0; r > o; o++) t[o] = e[o] + n[o] * i;
        return t
    }

    function bn(t, e, n, i) {
        for (var r = e.length, o = r && e[0].length, a = 0; r > a; a++) {
            t[a] || (t[a] = []);
            for (var s = 0; o > s; s++) t[a][s] = e[a][s] + n[a][s] * i
        }
        return t
    }

    function Sn(t, e, n) {
        var i = t, r = e;
        if (i.push && r.push) {
            var o = i.length, a = r.length;
            if (o !== a) {
                var s = o > a;
                if (s) i.length = a; else for (var l = o; a > l; l++) i.push(1 === n ? r[l] : Av.call(r[l]))
            }
            for (var u = i[0] && i[0].length, l = 0; l < i.length; l++) if (1 === n) isNaN(i[l]) && (i[l] = r[l]); else for (var h = 0; u > h; h++) isNaN(i[l][h]) && (i[l][h] = r[l][h])
        }
    }

    function Tn(t, e) {
        var n = t.length;
        if (n !== e.length) return !1;
        for (var i = 0; n > i; i++) if (t[i] !== e[i]) return !1;
        return !0
    }

    function Mn(t, e, n, i, r, o, a) {
        var s = .5 * (n - t), l = .5 * (i - e);
        return (2 * (e - n) + s + l) * a + (-3 * (e - n) - 2 * s - l) * o + s * r + e
    }

    function Cn(t, e, n, i, r, o, a, s) {
        for (var l = e.length, u = 0; l > u; u++) t[u] = Mn(e[u], n[u], i[u], r[u], o, a, s)
    }

    function In(t, e, n, i, r, o, a, s) {
        for (var l = e.length, u = e[0].length, h = 0; l > h; h++) {
            t[h] || (t[1] = []);
            for (var c = 0; u > c; c++) t[h][c] = Mn(e[h][c], n[h][c], i[h][c], r[h][c], o, a, s)
        }
    }

    function Dn(t) {
        if (g(t)) {
            var e = t.length;
            if (g(t[0])) {
                for (var n = [], i = 0; e > i; i++) n.push(Av.call(t[i]));
                return n
            }
            return Av.call(t)
        }
        return t
    }

    function An(t) {
        return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
    }

    function kn(t) {
        return g(t && t[0]) ? 2 : 1
    }

    function Ln(t, e) {
        return lv || (lv = By().getContext("2d")), uv !== e && (uv = lv.font = e || Uv), lv.measureText(t)
    }

    function Pn(t, e) {
        e = e || Uv;
        var n = Gv[e];
        n || (n = Gv[e] = new bv(500));
        var i = n.get(t);
        return null == i && (i = Yv.measureText(t, e).width, n.put(t, i)), i
    }

    function On(t, e, n, i) {
        var r = Pn(t, e), o = zn(e), a = Bn(0, r, n), s = En(0, o, i), l = new Wv(a, s, r, o);
        return l
    }

    function Rn(t, e, n, i) {
        var r = ((t || "") + "").split("\n"), o = r.length;
        if (1 === o) return On(r[0], e, n, i);
        for (var a = new Wv(0, 0, 0, 0), s = 0; s < r.length; s++) {
            var l = On(r[s], e, n, i);
            0 === s ? a.copy(l) : a.union(l)
        }
        return a
    }

    function Bn(t, e, n) {
        return "right" === n ? t -= e : "center" === n && (t -= e / 2), t
    }

    function En(t, e, n) {
        return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t
    }

    function zn(t) {
        return Pn("国", t)
    }

    function Nn(t, e) {
        return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
    }

    function Fn(t, e, n) {
        var i = e.position || "inside", r = null != e.distance ? e.distance : 5, o = n.height, a = n.width, s = o / 2,
            l = n.x, u = n.y, h = "left", c = "top";
        if (i instanceof Array) l += Nn(i[0], n.width), u += Nn(i[1], n.height), h = null, c = null; else switch (i) {
            case "left":
                l -= r, u += s, h = "right", c = "middle";
                break;
            case "right":
                l += r + a, u += s, c = "middle";
                break;
            case "top":
                l += a / 2, u -= r, h = "center", c = "bottom";
                break;
            case "bottom":
                l += a / 2, u += o + r, h = "center";
                break;
            case "inside":
                l += a / 2, u += s, h = "center", c = "middle";
                break;
            case "insideLeft":
                l += r, u += s, c = "middle";
                break;
            case "insideRight":
                l += a - r, u += s, h = "right", c = "middle";
                break;
            case "insideTop":
                l += a / 2, u += r, h = "center";
                break;
            case "insideBottom":
                l += a / 2, u += o - r, h = "center", c = "bottom";
                break;
            case "insideTopLeft":
                l += r, u += r;
                break;
            case "insideTopRight":
                l += a - r, u += r, h = "right";
                break;
            case "insideBottomLeft":
                l += r, u += o - r, c = "bottom";
                break;
            case "insideBottomRight":
                l += a - r, u += o - r, h = "right", c = "bottom"
        }
        return t = t || {}, t.x = l, t.y = u, t.align = h, t.verticalAlign = c, t
    }

    function Vn(t, e, n, i, r) {
        n = n || {};
        var o = [];
        Un(t, "", t, e, n, i, o, r);
        var a = o.length, s = !1, l = n.done, u = n.aborted, h = function () {
            s = !0, a--, 0 >= a && (s ? l && l() : u && u())
        }, c = function () {
            a--, 0 >= a && (s ? l && l() : u && u())
        };
        a || l && l(), o.length > 0 && n.during && o[0].during(function (t, e) {
            n.during(e)
        });
        for (var p = 0; p < o.length; p++) {
            var f = o[p];
            h && f.done(h), c && f.aborted(c), f.start(n.easing, n.force)
        }
        return o
    }

    function Hn(t, e, n) {
        for (var i = 0; n > i; i++) t[i] = e[i]
    }

    function Wn(t) {
        return g(t[0])
    }

    function Gn(t, e, n) {
        if (g(e[n])) if (g(t[n]) || (t[n] = []), L(e[n])) {
            var i = e[n].length;
            t[n].length !== i && (t[n] = new e[n].constructor(i), Hn(t[n], e[n], i))
        } else {
            var r = e[n], o = t[n], a = r.length;
            if (Wn(r)) for (var s = r[0].length, l = 0; a > l; l++) o[l] ? Hn(o[l], r[l], s) : o[l] = Array.prototype.slice.call(r[l]); else Hn(o, r, a);
            o.length = r.length
        } else t[n] = e[n]
    }

    function Un(t, e, n, i, r, o, a, s) {
        for (var l = [], u = [], h = w(i), c = r.duration, f = r.delay, d = r.additive, y = r.setToFinal, v = !A(o), m = 0; m < h.length; m++) {
            var _ = h[m];
            if (null != n[_] && null != i[_] && (v || o[_])) if (A(i[_]) && !g(i[_])) {
                if (e) {
                    s || (n[_] = i[_], t.updateDuringAnimation(e));
                    continue
                }
                Un(t, _, n[_], i[_], r, o && o[_], a, s)
            } else l.push(_), u.push(_); else s || (n[_] = i[_], t.updateDuringAnimation(e), u.push(_))
        }
        var x = l.length;
        if (x > 0 || r.force && !a.length) {
            for (var b = t.animators, S = [], T = 0; T < b.length; T++) b[T].targetName === e && S.push(b[T]);
            if (!d && S.length) for (var T = 0; T < S.length; T++) {
                var M = S[T].stopTracks(u);
                if (M) {
                    var C = p(b, S[T]);
                    b.splice(C, 1)
                }
            }
            var I = void 0, D = void 0, k = void 0;
            if (s) {
                D = {}, y && (I = {});
                for (var T = 0; x > T; T++) {
                    var _ = l[T];
                    D[_] = n[_], y ? I[_] = i[_] : n[_] = i[_]
                }
            } else if (y) {
                k = {};
                for (var T = 0; x > T; T++) {
                    var _ = l[T];
                    k[_] = Dn(n[_]), Gn(n, i, _)
                }
            }
            var L = new Pv(n, !1, d ? S : null);
            L.targetName = e, r.scope && (L.scope = r.scope), y && I && L.whenWithKeys(0, I, l), k && L.whenWithKeys(0, k, l), L.whenWithKeys(null == c ? 500 : c, s ? D : i, l).delay(f || 0), t.addAnimator(L, e), a.push(L)
        }
    }

    function Yn(t) {
        for (var e = 0; t >= om;) e |= 1 & t, t >>= 1;
        return t + e
    }

    function Xn(t, e, n, i) {
        var r = e + 1;
        if (r === n) return 1;
        if (i(t[r++], t[e]) < 0) {
            for (; n > r && i(t[r], t[r - 1]) < 0;) r++;
            jn(t, e, r)
        } else for (; n > r && i(t[r], t[r - 1]) >= 0;) r++;
        return r - e
    }

    function jn(t, e, n) {
        for (n--; n > e;) {
            var i = t[e];
            t[e++] = t[n], t[n--] = i
        }
    }

    function qn(t, e, n, i, r) {
        for (i === e && i++; n > i; i++) {
            for (var o, a = t[i], s = e, l = i; l > s;) o = s + l >>> 1, r(a, t[o]) < 0 ? l = o : s = o + 1;
            var u = i - s;
            switch (u) {
                case 3:
                    t[s + 3] = t[s + 2];
                case 2:
                    t[s + 2] = t[s + 1];
                case 1:
                    t[s + 1] = t[s];
                    break;
                default:
                    for (; u > 0;) t[s + u] = t[s + u - 1], u--
            }
            t[s] = a
        }
    }

    function Zn(t, e, n, i, r, o) {
        var a = 0, s = 0, l = 1;
        if (o(t, e[n + r]) > 0) {
            for (s = i - r; s > l && o(t, e[n + r + l]) > 0;) a = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s), a += r, l += r
        } else {
            for (s = r + 1; s > l && o(t, e[n + r - l]) <= 0;) a = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s);
            var u = a;
            a = r - l, l = r - u
        }
        for (a++; l > a;) {
            var h = a + (l - a >>> 1);
            o(t, e[n + h]) > 0 ? a = h + 1 : l = h
        }
        return l
    }

    function Kn(t, e, n, i, r, o) {
        var a = 0, s = 0, l = 1;
        if (o(t, e[n + r]) < 0) {
            for (s = r + 1; s > l && o(t, e[n + r - l]) < 0;) a = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s);
            var u = a;
            a = r - l, l = r - u
        } else {
            for (s = i - r; s > l && o(t, e[n + r + l]) >= 0;) a = l, l = (l << 1) + 1, 0 >= l && (l = s);
            l > s && (l = s), a += r, l += r
        }
        for (a++; l > a;) {
            var h = a + (l - a >>> 1);
            o(t, e[n + h]) < 0 ? l = h : a = h + 1
        }
        return l
    }

    function $n(t, e) {
        function n(t, e) {
            l[c] = t, u[c] = e, c += 1
        }

        function i() {
            for (; c > 1;) {
                var t = c - 2;
                if (t >= 1 && u[t - 1] <= u[t] + u[t + 1] || t >= 2 && u[t - 2] <= u[t] + u[t - 1]) u[t - 1] < u[t + 1] && t--; else if (u[t] > u[t + 1]) break;
                o(t)
            }
        }

        function r() {
            for (; c > 1;) {
                var t = c - 2;
                t > 0 && u[t - 1] < u[t + 1] && t--, o(t)
            }
        }

        function o(n) {
            var i = l[n], r = u[n], o = l[n + 1], h = u[n + 1];
            u[n] = r + h, n === c - 3 && (l[n + 1] = l[n + 2], u[n + 1] = u[n + 2]), c--;
            var p = Kn(t[o], t, i, r, 0, e);
            i += p, r -= p, 0 !== r && (h = Zn(t[i + r - 1], t, o, h, h - 1, e), 0 !== h && (h >= r ? a(i, r, o, h) : s(i, r, o, h)))
        }

        function a(n, i, r, o) {
            var a = 0;
            for (a = 0; i > a; a++) p[a] = t[n + a];
            var s = 0, l = r, u = n;
            if (t[u++] = t[l++], 0 !== --o) {
                if (1 === i) {
                    for (a = 0; o > a; a++) t[u + a] = t[l + a];
                    return void (t[u + o] = p[s])
                }
                for (var c, f, d, g = h; ;) {
                    c = 0, f = 0, d = !1;
                    do if (e(t[l], p[s]) < 0) {
                        if (t[u++] = t[l++], f++, c = 0, 0 === --o) {
                            d = !0;
                            break
                        }
                    } else if (t[u++] = p[s++], c++, f = 0, 1 === --i) {
                        d = !0;
                        break
                    } while (g > (c | f));
                    if (d) break;
                    do {
                        if (c = Kn(t[l], p, s, i, 0, e), 0 !== c) {
                            for (a = 0; c > a; a++) t[u + a] = p[s + a];
                            if (u += c, s += c, i -= c, 1 >= i) {
                                d = !0;
                                break
                            }
                        }
                        if (t[u++] = t[l++], 0 === --o) {
                            d = !0;
                            break
                        }
                        if (f = Zn(p[s], t, l, o, 0, e), 0 !== f) {
                            for (a = 0; f > a; a++) t[u + a] = t[l + a];
                            if (u += f, l += f, o -= f, 0 === o) {
                                d = !0;
                                break
                            }
                        }
                        if (t[u++] = p[s++], 1 === --i) {
                            d = !0;
                            break
                        }
                        g--
                    } while (c >= am || f >= am);
                    if (d) break;
                    0 > g && (g = 0), g += 2
                }
                if (h = g, 1 > h && (h = 1), 1 === i) {
                    for (a = 0; o > a; a++) t[u + a] = t[l + a];
                    t[u + o] = p[s]
                } else {
                    if (0 === i) throw new Error;
                    for (a = 0; i > a; a++) t[u + a] = p[s + a]
                }
            } else for (a = 0; i > a; a++) t[u + a] = p[s + a]
        }

        function s(n, i, r, o) {
            var a = 0;
            for (a = 0; o > a; a++) p[a] = t[r + a];
            var s = n + i - 1, l = o - 1, u = r + o - 1, c = 0, f = 0;
            if (t[u--] = t[s--], 0 !== --i) {
                if (1 === o) {
                    for (u -= i, s -= i, f = u + 1, c = s + 1, a = i - 1; a >= 0; a--) t[f + a] = t[c + a];
                    return void (t[u] = p[l])
                }
                for (var d = h; ;) {
                    var g = 0, y = 0, v = !1;
                    do if (e(p[l], t[s]) < 0) {
                        if (t[u--] = t[s--], g++, y = 0, 0 === --i) {
                            v = !0;
                            break
                        }
                    } else if (t[u--] = p[l--], y++, g = 0, 1 === --o) {
                        v = !0;
                        break
                    } while (d > (g | y));
                    if (v) break;
                    do {
                        if (g = i - Kn(p[l], t, n, i, i - 1, e), 0 !== g) {
                            for (u -= g, s -= g, i -= g, f = u + 1, c = s + 1, a = g - 1; a >= 0; a--) t[f + a] = t[c + a];
                            if (0 === i) {
                                v = !0;
                                break
                            }
                        }
                        if (t[u--] = p[l--], 1 === --o) {
                            v = !0;
                            break
                        }
                        if (y = o - Zn(t[s], p, 0, o, o - 1, e), 0 !== y) {
                            for (u -= y, l -= y, o -= y, f = u + 1, c = l + 1, a = 0; y > a; a++) t[f + a] = p[c + a];
                            if (1 >= o) {
                                v = !0;
                                break
                            }
                        }
                        if (t[u--] = t[s--], 0 === --i) {
                            v = !0;
                            break
                        }
                        d--
                    } while (g >= am || y >= am);
                    if (v) break;
                    0 > d && (d = 0), d += 2
                }
                if (h = d, 1 > h && (h = 1), 1 === o) {
                    for (u -= i, s -= i, f = u + 1, c = s + 1, a = i - 1; a >= 0; a--) t[f + a] = t[c + a];
                    t[u] = p[l]
                } else {
                    if (0 === o) throw new Error;
                    for (c = u - (o - 1), a = 0; o > a; a++) t[c + a] = p[a]
                }
            } else for (c = u - (o - 1), a = 0; o > a; a++) t[c + a] = p[a]
        }

        var l, u, h = am, c = 0, p = [];
        return l = [], u = [], {mergeRuns: i, forceMergeRuns: r, pushRun: n}
    }

    function Qn(t, e, n, i) {
        n || (n = 0), i || (i = t.length);
        var r = i - n;
        if (!(2 > r)) {
            var o = 0;
            if (om > r) return o = Xn(t, n, i, e), void qn(t, n, i, n + o, e);
            var a = $n(t, e), s = Yn(r);
            do {
                if (o = Xn(t, n, i, e), s > o) {
                    var l = r;
                    l > s && (l = s), qn(t, n, n + l, n + o, e), o = l
                }
                a.pushRun(n, o), a.mergeRuns(), r -= o, n += o
            } while (0 !== r);
            a.forceMergeRuns()
        }
    }

    function Jn() {
        sm || (sm = !0, console.warn("z / z2 / zlevel of displayable is invalid, which may cause unexpected errors"))
    }

    function ti(t, e) {
        return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
    }

    function ei(t) {
        var e = t.pointerType;
        return "pen" === e || "touch" === e
    }

    function ni(t) {
        t.touching = !0, null != t.touchTimer && (clearTimeout(t.touchTimer), t.touchTimer = null), t.touchTimer = setTimeout(function () {
            t.touching = !1, t.touchTimer = null
        }, 700)
    }

    function ii(t) {
        t && (t.zrByTouch = !0)
    }

    function ri(t, e) {
        return De(t.dom, new ym(t, e), !0)
    }

    function oi(t, e) {
        for (var n = e, i = !1; n && 9 !== n.nodeType && !(i = n.domBelongToZr || n !== e && n === t.painterRoot);) n = n.parentNode;
        return i
    }

    function ai(t, e) {
        var n = e.domHandlers;
        by.pointerEventsSupported ? y(fm.pointer, function (i) {
            li(e, i, function (e) {
                n[i].call(t, e)
            })
        }) : (by.touchEventsSupported && y(fm.touch, function (i) {
            li(e, i, function (r) {
                n[i].call(t, r), ni(e)
            })
        }), y(fm.mouse, function (i) {
            li(e, i, function (r) {
                r = Ie(r), e.touching || n[i].call(t, r)
            })
        }))
    }

    function si(t, e) {
        function n(n) {
            function i(i) {
                i = Ie(i), oi(t, i.target) || (i = ri(t, i), e.domHandlers[n].call(t, i))
            }

            li(e, n, i, {capture: !0})
        }

        by.pointerEventsSupported ? y(dm.pointer, n) : by.touchEventsSupported || y(dm.mouse, n)
    }

    function li(t, e, n, i) {
        t.mounted[e] = n, t.listenerOpts[e] = i, ke(t.domTarget, e, n, i)
    }

    function ui(t) {
        var e = t.mounted;
        for (var n in e) e.hasOwnProperty(n) && Le(t.domTarget, n, e[n], t.listenerOpts[n]);
        t.mounted = {}
    }

    function hi(t) {
        delete Tm[t]
    }

    function ci(t) {
        if (!t) return !1;
        if ("string" == typeof t) return gn(t, 1) < qv;
        if (t.colorStops) {
            for (var e = t.colorStops, n = 0, i = e.length, r = 0; i > r; r++) n += gn(e[r].color, 1);
            return n /= i, qv > n
        }
        return !1
    }

    function pi(t, e) {
        var n = new Mm(o(), t, e);
        return Tm[n.id] = n, n
    }

    function fi(t) {
        t.dispose()
    }

    function di() {
        for (var t in Tm) Tm.hasOwnProperty(t) && Tm[t].dispose();
        Tm = {}
    }

    function gi(t) {
        return Tm[t]
    }

    function yi(t, e) {
        Sm[t] = e
    }

    function vi(t) {
        return t.replace(/^\s+|\s+$/g, "")
    }

    function mi(t, e, n, i) {
        var r = e[1] - e[0], o = n[1] - n[0];
        if (0 === r) return 0 === o ? n[0] : (n[0] + n[1]) / 2;
        if (i) if (r > 0) {
            if (t <= e[0]) return n[0];
            if (t >= e[1]) return n[1]
        } else {
            if (t >= e[0]) return n[0];
            if (t <= e[1]) return n[1]
        } else {
            if (t === e[0]) return n[0];
            if (t === e[1]) return n[1]
        }
        return (t - e[0]) / r * o + n[0]
    }

    function _i(t, e) {
        switch (t) {
            case "center":
            case "middle":
                t = "50%";
                break;
            case "left":
            case "top":
                t = "0%";
                break;
            case "right":
            case "bottom":
                t = "100%"
        }
        return "string" == typeof t ? vi(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? 0 / 0 : +t
    }

    function xi(t, e, n) {
        return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t
    }

    function wi(t) {
        return t.sort(function (t, e) {
            return t - e
        }), t
    }

    function bi(t) {
        if (t = +t, isNaN(t)) return 0;
        for (var e = 1, n = 0; Math.round(t * e) / e !== t;) e *= 10, n++;
        return n
    }

    function Si(t) {
        var e = t.toString(), n = e.indexOf("e");
        if (n > 0) {
            var i = +e.slice(n + 1);
            return 0 > i ? -i : 0
        }
        var r = e.indexOf(".");
        return 0 > r ? 0 : e.length - 1 - r
    }

    function Ti(t, e) {
        var n = Math.log, i = Math.LN10, r = Math.floor(n(t[1] - t[0]) / i),
            o = Math.round(n(Math.abs(e[1] - e[0])) / i), a = Math.min(Math.max(-r + o, 0), 20);
        return isFinite(a) ? a : 20
    }

    function Mi(t, e, n) {
        if (!t[e]) return 0;
        var i = m(t, function (t, e) {
            return t + (isNaN(e) ? 0 : e)
        }, 0);
        if (0 === i) return 0;
        for (var r = Math.pow(10, n), o = v(t, function (t) {
            return (isNaN(t) ? 0 : t) / i * r * 100
        }), a = 100 * r, s = v(o, function (t) {
            return Math.floor(t)
        }), l = m(s, function (t, e) {
            return t + e
        }, 0), u = v(o, function (t, e) {
            return t - s[e]
        }); a > l;) {
            for (var h = Number.NEGATIVE_INFINITY, c = null, p = 0, f = u.length; f > p; ++p) u[p] > h && (h = u[p], c = p);
            ++s[c], u[c] = 0, ++l
        }
        return s[e] / r
    }

    function Ci(t) {
        var e = 2 * Math.PI;
        return (t % e + e) % e
    }

    function Ii(t) {
        return t > -Dm && Dm > t
    }

    function Di(t) {
        if (t instanceof Date) return t;
        if ("string" == typeof t) {
            var e = km.exec(t);
            if (!e) return new Date(0 / 0);
            if (e[8]) {
                var n = +e[4] || 0;
                return "Z" !== e[8].toUpperCase() && (n -= +e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
            }
            return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
        }
        return new Date(null == t ? 0 / 0 : Math.round(t))
    }

    function Ai(t) {
        return Math.pow(10, ki(t))
    }

    function ki(t) {
        if (0 === t) return 0;
        var e = Math.floor(Math.log(t) / Math.LN10);
        return t / Math.pow(10, e) >= 10 && e++, e
    }

    function Li(t, e) {
        var n, i = ki(t), r = Math.pow(10, i), o = t / r;
        return n = e ? 1.5 > o ? 1 : 2.5 > o ? 2 : 4 > o ? 3 : 7 > o ? 5 : 10 : 1 > o ? 1 : 2 > o ? 2 : 3 > o ? 3 : 5 > o ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(0 > i ? -i : 0) : t
    }

    function Pi(t, e) {
        var n = (t.length - 1) * e + 1, i = Math.floor(n), r = +t[i - 1], o = n - i;
        return o ? r + o * (t[i] - r) : r
    }

    function Oi(t) {
        function e(t, n, i) {
            return t.interval[i] < n.interval[i] || t.interval[i] === n.interval[i] && (t.close[i] - n.close[i] === (i ? -1 : 1) || !i && e(t, n, 1))
        }

        t.sort(function (t, n) {
            return e(t, n, 0) ? -1 : 1
        });
        for (var n = -1 / 0, i = 1, r = 0; r < t.length;) {
            for (var o = t[r].interval, a = t[r].close, s = 0; 2 > s; s++) o[s] <= n && (o[s] = n, a[s] = s ? 1 : 1 - i), n = o[s], i = a[s];
            o[0] === o[1] && a[0] * a[1] !== 1 ? t.splice(r, 1) : r++
        }
        return t
    }

    function Ri(t) {
        var e = parseFloat(t);
        return e == t && (0 !== e || "string" != typeof t || t.indexOf("x") <= 0) ? e : 0 / 0
    }

    function Bi(t) {
        return !isNaN(Ri(t))
    }

    function Ei() {
        return Math.round(9 * Math.random())
    }

    function zi(t, e) {
        return 0 === e ? t : zi(e, t % e)
    }

    function Ni(t, e) {
        return null == t ? e : null == e ? t : t * e / zi(t, e)
    }

    function Fi(t) {
        throw new Error(t)
    }

    function Vi(t) {
        return t instanceof Array ? t : null == t ? [] : [t]
    }

    function Hi(t, e, n) {
        if (t) {
            t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
            for (var i = 0, r = n.length; r > i; i++) {
                var o = n[i];
                !t.emphasis[e].hasOwnProperty(o) && t[e].hasOwnProperty(o) && (t.emphasis[e][o] = t[e][o])
            }
        }
    }

    function Wi(t) {
        return !A(t) || T(t) || t instanceof Date ? t : t.value
    }

    function Gi(t) {
        return A(t) && !(t instanceof Array)
    }

    function Ui(t, e, n) {
        var i = "normalMerge" === n, r = "replaceMerge" === n, o = "replaceAll" === n;
        t = t || [], e = (e || []).slice();
        var a = X();
        y(e, function (t, n) {
            return A(t) ? void 0 : void (e[n] = null)
        });
        var s = Yi(t, a, n);
        return (i || r) && Xi(s, t, a, e), i && ji(s, e), i || r ? qi(s, e, r) : o && Zi(s, e), Ki(s), s
    }

    function Yi(t, e, n) {
        var i = [];
        if ("replaceAll" === n) return i;
        for (var r = 0; r < t.length; r++) {
            var o = t[r];
            o && null != o.id && e.set(o.id, r), i.push({
                existing: "replaceMerge" === n || er(o) ? null : o,
                newOption: null,
                keyInfo: null,
                brandNew: null
            })
        }
        return i
    }

    function Xi(t, e, n, i) {
        y(i, function (r, o) {
            if (r && null != r.id) {
                var a = Qi(r.id), s = n.get(a);
                if (null != s) {
                    var l = t[s];
                    W(!l.newOption, 'Duplicated option on id "' + a + '".'), l.newOption = r, l.existing = e[s], i[o] = null
                }
            }
        })
    }

    function ji(t, e) {
        y(e, function (n, i) {
            if (n && null != n.name) for (var r = 0; r < t.length; r++) {
                var o = t[r].existing;
                if (!t[r].newOption && o && (null == o.id || null == n.id) && !er(n) && !er(o) && $i("name", o, n)) return t[r].newOption = n, void (e[i] = null)
            }
        })
    }

    function qi(t, e, n) {
        y(e, function (e) {
            if (e) {
                for (var i, r = 0; (i = t[r]) && (i.newOption || er(i.existing) || i.existing && null != e.id && !$i("id", e, i.existing));) r++;
                i ? (i.newOption = e, i.brandNew = n) : t.push({
                    newOption: e,
                    brandNew: n,
                    existing: null,
                    keyInfo: null
                }), r++
            }
        })
    }

    function Zi(t, e) {
        y(e, function (e) {
            t.push({newOption: e, brandNew: !0, existing: null, keyInfo: null})
        })
    }

    function Ki(t) {
        var e = X();
        y(t, function (t) {
            var n = t.existing;
            n && e.set(n.id, t)
        }), y(t, function (t) {
            var n = t.newOption;
            W(!n || null == n.id || !e.get(n.id) || e.get(n.id) === t, "id duplicates: " + (n && n.id)), n && null != n.id && e.set(n.id, t), !t.keyInfo && (t.keyInfo = {})
        }), y(t, function (t, n) {
            var i = t.existing, r = t.newOption, o = t.keyInfo;
            if (A(r)) {
                if (o.name = null != r.name ? Qi(r.name) : i ? i.name : Lm + n, i) o.id = Qi(i.id); else if (null != r.id) o.id = Qi(r.id); else {
                    var a = 0;
                    do o.id = "\x00" + o.name + "\x00" + a++; while (e.get(o.id))
                }
                e.set(o.id, t)
            }
        })
    }

    function $i(t, e, n) {
        var i = Ji(e[t], null), r = Ji(n[t], null);
        return null != i && null != r && i === r
    }

    function Qi(t) {
        return Ji(t, "")
    }

    function Ji(t, e) {
        if (null == t) return e;
        var n = typeof t;
        return "string" === n ? t : "number" === n || I(t) ? t + "" : e
    }

    function tr(t) {
        var e = t.name;
        return !(!e || !e.indexOf(Lm))
    }

    function er(t) {
        return t && null != t.id && 0 === Qi(t.id).indexOf(Pm)
    }

    function nr(t, e, n) {
        y(t, function (t) {
            var i = t.newOption;
            A(i) && (t.keyInfo.mainType = e, t.keyInfo.subType = ir(e, i, t.existing, n))
        })
    }

    function ir(t, e, n, i) {
        var r = e.type ? e.type : n ? n.subType : i.determineSubType(t, e);
        return r
    }

    function rr(t, e) {
        return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? T(e.dataIndex) ? v(e.dataIndex, function (e) {
            return t.indexOfRawIndex(e)
        }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? T(e.name) ? v(e.name, function (e) {
            return t.indexOfName(e)
        }) : t.indexOfName(e.name) : void 0
    }

    function or() {
        var t = "__ec_inner_" + Rm++;
        return function (e) {
            return e[t] || (e[t] = {})
        }
    }

    function ar(t, e, n) {
        var i;
        if (C(e)) {
            var r = {};
            r[e + "Index"] = 0, i = r
        } else i = e;
        var o = X(), a = {}, s = !1;
        y(i, function (t, e) {
            if ("dataIndex" === e || "dataIndexInside" === e) return void (a[e] = t);
            var i = e.match(/^(\w+)(Index|Id|Name)$/) || [], r = i[1], l = (i[2] || "").toLowerCase();
            if (r && l && !(n && n.includeMainTypes && p(n.includeMainTypes, r) < 0)) {
                s = s || !!r;
                var u = o.get(r) || o.set(r, {});
                u[l] = t
            }
        });
        var l = n ? n.defaultMainType : null;
        return !s && l && o.set(l, {}), o.each(function (e, i) {
            var r = sr(t, i, e, {
                useDefault: l === i,
                enableAll: n && null != n.enableAll ? n.enableAll : !0,
                enableNone: n && null != n.enableNone ? n.enableNone : !0
            });
            a[i + "Models"] = r.models, a[i + "Model"] = r.models[0]
        }), a
    }

    function sr(t, e, n, i) {
        i = i || Bm;
        var r = n.index, o = n.id, a = n.name, s = {models: null, specified: null != r || null != o || null != a};
        if (!s.specified) {
            var l = void 0;
            return s.models = i.useDefault && (l = t.getComponent(e)) ? [l] : [], s
        }
        return "none" === r || r === !1 ? (W(i.enableNone, '`"none"` or `false` is not a valid value on index option.'), s.models = [], s) : ("all" === r && (W(i.enableAll, '`"all"` is not a valid value on index option.'), r = o = a = null), s.models = t.queryComponents({
            mainType: e,
            index: r,
            id: o,
            name: a
        }), s)
    }

    function lr(t, e, n) {
        t.setAttribute ? t.setAttribute(e, n) : t[e] = n
    }

    function ur(t, e) {
        return t.getAttribute ? t.getAttribute(e) : t[e]
    }

    function hr(t) {
        return "auto" === t ? by.domSupported ? "html" : "richText" : t || "html"
    }

    function cr(t, e, n, i, r) {
        var o = null == e || "auto" === e;
        if (null == i) return i;
        if ("number" == typeof i) {
            var a = vn(n || 0, i, r);
            return xi(a, o ? Math.max(Si(n || 0), Si(i)) : e)
        }
        if ("string" == typeof i) return 1 > r ? n : i;
        for (var s = [], l = n, u = i, h = Math.max(l ? l.length : 0, u.length), c = 0; h > c; ++c) {
            var p = t.getDimensionInfo(c);
            if ("ordinal" === p.type) s[c] = (1 > r && l ? l : u)[c]; else {
                var f = l && l[c] ? l[c] : 0, d = u[c], a = vn(f, d, r);
                s[c] = xi(a, o ? Math.max(Si(f), Si(d)) : e)
            }
        }
        return s
    }

    function pr(t) {
        var e = {main: "", sub: ""};
        if (t) {
            var n = t.split(Em);
            e.main = n[0] || "", e.sub = n[1] || ""
        }
        return e
    }

    function fr(t) {
        W(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
    }

    function dr(t) {
        return !(!t || !t[Nm])
    }

    function gr(t) {
        t.$constructor = t, t.extend = function (t) {
            function e() {
                for (var r = [], o = 0; o < arguments.length; o++) r[o] = arguments[o];
                if (t.$constructor) t.$constructor.apply(this, arguments); else {
                    if (yr(i)) {
                        var a = q(e.prototype, new (i.bind.apply(i, n([void 0], r))));
                        return a
                    }
                    i.apply(this, arguments)
                }
            }

            var i = this;
            return e[Nm] = !0, h(e.prototype, t), e.extend = this.extend, e.superCall = _r, e.superApply = xr, f(e, this), e.superClass = i, e
        }
    }

    function yr(t) {
        return "function" == typeof t && /^class\s/.test(Function.prototype.toString.call(t))
    }

    function vr(t, e) {
        t.extend = e.extend
    }

    function mr(t) {
        var e = ["__\x00is_clz", Fm++].join("_");
        t.prototype[e] = !0, t.isInstance = function (t) {
            return !(!t || !t[e])
        }
    }

    function _r(t, e) {
        for (var n = [], i = 2; i < arguments.length; i++) n[i - 2] = arguments[i];
        return this.superClass.prototype[e].apply(t, n)
    }

    function xr(t, e, n) {
        return this.superClass.prototype[e].apply(t, n)
    }

    function wr(t) {
        function e(t) {
            var e = n[t.main];
            return e && e[zm] || (e = n[t.main] = {}, e[zm] = !0), e
        }

        var n = {};
        t.registerClass = function (t) {
            var i = t.type || t.prototype.type;
            if (i) {
                fr(i), t.prototype.type = i;
                var r = pr(i);
                if (r.sub) {
                    if (r.sub !== zm) {
                        var o = e(r);
                        o[r.sub] = t
                    }
                } else n[r.main] = t
            }
            return t
        }, t.getClass = function (t, e, i) {
            var r = n[t];
            if (r && r[zm] && (r = e ? r[e] : null), i && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
            return r
        }, t.getClassesByMainType = function (t) {
            var e = pr(t), i = [], r = n[e.main];
            return r && r[zm] ? y(r, function (t, e) {
                e !== zm && i.push(t)
            }) : i.push(r), i
        }, t.hasClass = function (t) {
            var e = pr(t);
            return !!n[e.main]
        }, t.getAllClassMainTypes = function () {
            var t = [];
            return y(n, function (e, n) {
                t.push(n)
            }), t
        }, t.hasSubTypes = function (t) {
            var e = pr(t), i = n[e.main];
            return i && i[zm]
        }
    }

    function br(t, e) {
        for (var n = 0; n < t.length; n++) t[n][1] || (t[n][1] = t[n][0]);
        return e = e || !1, function (n, i, r) {
            for (var o = {}, a = 0; a < t.length; a++) {
                var s = t[a][1];
                if (!(i && p(i, s) >= 0 || r && p(r, s) < 0)) {
                    var l = n.getShallow(s, e);
                    null != l && (o[t[a][0]] = l)
                }
            }
            return o
        }
    }

    function Sr(t) {
        if ("string" == typeof t) {
            var e = Gm.get(t);
            return e && e.image
        }
        return t
    }

    function Tr(t, e, n, i, r) {
        if (t) {
            if ("string" == typeof t) {
                if (e && e.__zrImageSrc === t || !n) return e;
                var o = Gm.get(t), a = {hostEl: n, cb: i, cbPayload: r};
                return o ? (e = o.image, !Cr(e) && o.pending.push(a)) : (e = new Image, e.onload = e.onerror = Mr, Gm.put(t, e.__cachedImgObj = {
                    image: e,
                    pending: [a]
                }), e.src = e.__zrImageSrc = t), e
            }
            return t
        }
        return e
    }

    function Mr() {
        var t = this.__cachedImgObj;
        this.onload = this.onerror = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
            var n = t.pending[e], i = n.cb;
            i && i(this, n.cbPayload), n.hostEl.dirty()
        }
        t.pending.length = 0
    }

    function Cr(t) {
        return t && t.width && t.height
    }

    function Ir(t, e, n, i, r) {
        if (!e) return "";
        var o = (t + "").split("\n");
        r = Dr(e, n, i, r);
        for (var a = 0, s = o.length; s > a; a++) o[a] = Ar(o[a], r);
        return o.join("\n")
    }

    function Dr(t, e, n, i) {
        i = i || {};
        var r = h({}, i);
        r.font = e, n = N(n, "..."), r.maxIterations = N(i.maxIterations, 2);
        var o = r.minChar = N(i.minChar, 0);
        r.cnCharWidth = Pn("国", e);
        var a = r.ascCharWidth = Pn("a", e);
        r.placeholder = N(i.placeholder, "");
        for (var s = t = Math.max(0, t - 1), l = 0; o > l && s >= a; l++) s -= a;
        var u = Pn(n, e);
        return u > s && (n = "", u = 0), s = t - u, r.ellipsis = n, r.ellipsisWidth = u, r.contentWidth = s, r.containerWidth = t, r
    }

    function Ar(t, e) {
        var n = e.containerWidth, i = e.font, r = e.contentWidth;
        if (!n) return "";
        var o = Pn(t, i);
        if (n >= o) return t;
        for (var a = 0; ; a++) {
            if (r >= o || a >= e.maxIterations) {
                t += e.ellipsis;
                break
            }
            var s = 0 === a ? kr(t, r, e.ascCharWidth, e.cnCharWidth) : o > 0 ? Math.floor(t.length * r / o) : 0;
            t = t.substr(0, s), o = Pn(t, i)
        }
        return "" === t && (t = e.placeholder), t
    }

    function kr(t, e, n, i) {
        for (var r = 0, o = 0, a = t.length; a > o && e > r; o++) {
            var s = t.charCodeAt(o);
            r += s >= 0 && 127 >= s ? n : i
        }
        return o
    }

    function Lr(t, e) {
        null != t && (t += "");
        var n, i = e.overflow, r = e.padding, o = e.font, a = "truncate" === i, s = zn(o), l = N(e.lineHeight, s),
            u = "truncate" === e.lineOverflow, h = e.width;
        n = null != h && "break" === i || "breakAll" === i ? t ? Er(t, e.font, h, "breakAll" === i, 0).lines : [] : t ? t.split("\n") : [];
        var c = n.length * l, p = N(e.height, c);
        if (c > p && u) {
            var f = Math.floor(p / l);
            n = n.slice(0, f)
        }
        var d = p, g = h;
        if (r && (d += r[0] + r[2], null != g && (g += r[1] + r[3])), t && a && null != g) for (var y = Dr(h, o, e.ellipsis, {
            minChar: e.truncateMinChar,
            placeholder: e.placeholder
        }), v = 0; v < n.length; v++) n[v] = Ar(n[v], y);
        if (null == h) {
            for (var m = 0, v = 0; v < n.length; v++) m = Math.max(Pn(n[v], o), m);
            h = m
        }
        return {lines: n, height: p, outerHeight: d, lineHeight: l, calculatedLineHeight: s, contentHeight: c, width: h}
    }

    function Pr(t, e) {
        function n(t, e, n) {
            t.width = e, t.lineHeight = n, p += n, f = Math.max(f, e)
        }

        var i = new jm;
        if (null != t && (t += ""), !t) return i;
        for (var r, o = e.width, a = e.height, s = e.overflow, l = "break" !== s && "breakAll" !== s || null == o ? null : {
            width: o,
            accumWidth: 0,
            breakAll: "breakAll" === s
        }, u = Um.lastIndex = 0; null != (r = Um.exec(t));) {
            var h = r.index;
            h > u && Or(i, t.substring(u, h), e, l), Or(i, r[2], e, l, r[1]), u = Um.lastIndex
        }
        u < t.length && Or(i, t.substring(u, t.length), e, l);
        var c = [], p = 0, f = 0, d = e.padding, g = "truncate" === s, y = "truncate" === e.lineOverflow;
        t: for (var v = 0; v < i.lines.length; v++) {
            for (var m = i.lines[v], _ = 0, x = 0, w = 0; w < m.tokens.length; w++) {
                var b = m.tokens[w], S = b.styleName && e.rich[b.styleName] || {}, T = b.textPadding = S.padding,
                    M = T ? T[1] + T[3] : 0, C = b.font = S.font || e.font;
                b.contentHeight = zn(C);
                var I = N(S.height, b.contentHeight);
                if (b.innerHeight = I, T && (I += T[0] + T[2]), b.height = I, b.lineHeight = F(S.lineHeight, e.lineHeight, I), b.align = S && S.align || e.align, b.verticalAlign = S && S.verticalAlign || "middle", y && null != a && p + b.lineHeight > a) {
                    w > 0 ? (m.tokens = m.tokens.slice(0, w), n(m, x, _), i.lines = i.lines.slice(0, v + 1)) : i.lines = i.lines.slice(0, v);
                    break t
                }
                var D = S.width, A = null == D || "auto" === D;
                if ("string" == typeof D && "%" === D.charAt(D.length - 1)) b.percentWidth = D, c.push(b), b.contentWidth = Pn(b.text, C); else {
                    if (A) {
                        var k = S.backgroundColor, L = k && k.image;
                        L && (L = Sr(L), Cr(L) && (b.width = Math.max(b.width, L.width * I / L.height)))
                    }
                    var P = g && null != o ? o - x : null;
                    null != P && P < b.width ? !A || M > P ? (b.text = "", b.width = b.contentWidth = 0) : (b.text = Ir(b.text, P - M, C, e.ellipsis, {minChar: e.truncateMinChar}), b.width = b.contentWidth = Pn(b.text, C)) : b.contentWidth = Pn(b.text, C)
                }
                b.width += M, x += b.width, S && (_ = Math.max(_, b.lineHeight))
            }
            n(m, x, _)
        }
        i.outerWidth = i.width = N(o, f), i.outerHeight = i.height = N(a, p), i.contentHeight = p, i.contentWidth = f, d && (i.outerWidth += d[1] + d[3], i.outerHeight += d[0] + d[2]);
        for (var v = 0; v < c.length; v++) {
            var b = c[v], O = b.percentWidth;
            b.width = parseInt(O, 10) / 100 * i.width
        }
        return i
    }

    function Or(t, e, n, i, r) {
        var o, a, s = "" === e, l = r && n.rich[r] || {}, u = t.lines, h = l.font || n.font, c = !1;
        if (i) {
            var p = l.padding, f = p ? p[1] + p[3] : 0;
            if (null != l.width && "auto" !== l.width) {
                var d = zr(l.width, i.width) + f;
                u.length > 0 && d + i.accumWidth > i.width && (o = e.split("\n"), c = !0), i.accumWidth = d
            } else {
                var g = Er(e, h, i.width, i.breakAll, i.accumWidth);
                i.accumWidth = g.accumWidth + f, a = g.linesWidths, o = g.lines
            }
        } else o = e.split("\n");
        for (var y = 0; y < o.length; y++) {
            var v = o[y], m = new Ym;
            if (m.styleName = r, m.text = v, m.isLineHolder = !v && !s, m.width = "number" == typeof l.width ? l.width : a ? a[y] : Pn(v, h), y || c) u.push(new Xm([m])); else {
                var _ = (u[u.length - 1] || (u[0] = new Xm)).tokens, x = _.length;
                1 === x && _[0].isLineHolder ? _[0] = m : (v || !x || s) && _.push(m)
            }
        }
    }

    function Rr(t) {
        var e = t.charCodeAt(0);
        return e >= 33 && 255 >= e
    }

    function Br(t) {
        return Rr(t) ? qm[t] ? !0 : !1 : !0
    }

    function Er(t, e, n, i, r) {
        for (var o = [], a = [], s = "", l = "", u = 0, h = 0, c = 0; c < t.length; c++) {
            var p = t.charAt(c);
            if ("\n" !== p) {
                var f = Pn(p, e), d = i ? !1 : !Br(p);
                (o.length ? h + f > n : r + h + f > n) ? h ? (s || l) && (d ? (s || (s = l, l = "", u = 0, h = u), o.push(s), a.push(h - u), l += p, u += f, s = "", h = u) : (l && (s += l, h += u, l = "", u = 0), o.push(s), a.push(h), s = p, h = f)) : d ? (o.push(l), a.push(u), l = p, u = f) : (o.push(p), a.push(f)) : (h += f, d ? (l += p, u += f) : (l && (s += l, l = "", u = 0), s += p))
            } else l && (s += l, h += u), o.push(s), a.push(h), s = "", l = "", u = 0, h = 0
        }
        return o.length || s || (s = t, l = "", u = 0), l && (s += l), s && (o.push(s), a.push(h)), 1 === o.length && (h += r), {
            accumWidth: h,
            lines: o,
            linesWidths: a
        }
    }

    function zr(t, e) {
        return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
    }

    function Nr(t, e, n) {
        return t_.copy(t.getBoundingRect()), t.transform && t_.applyTransform(t.transform), e_.width = e, e_.height = n, !t_.intersect(e_)
    }

    function Fr(t) {
        return t > -r_ && r_ > t
    }

    function Vr(t) {
        return t > r_ || -r_ > t
    }

    function Hr(t, e, n, i, r) {
        var o = 1 - r;
        return o * o * (o * t + 3 * r * e) + r * r * (r * i + 3 * o * n)
    }

    function Wr(t, e, n, i, r) {
        var o = 1 - r;
        return 3 * (((e - t) * o + 2 * (n - e) * r) * o + (i - n) * r * r)
    }

    function Gr(t, e, n, i, r, o) {
        var a = i + 3 * (e - n) - t, s = 3 * (n - 2 * e + t), l = 3 * (e - t), u = t - r, h = s * s - 3 * a * l,
            c = s * l - 9 * a * u, p = l * l - 3 * s * u, f = 0;
        if (Fr(h) && Fr(c)) if (Fr(s)) o[0] = 0; else {
            var d = -l / s;
            d >= 0 && 1 >= d && (o[f++] = d)
        } else {
            var g = c * c - 4 * h * p;
            if (Fr(g)) {
                var y = c / h, d = -s / a + y, v = -y / 2;
                d >= 0 && 1 >= d && (o[f++] = d), v >= 0 && 1 >= v && (o[f++] = v)
            } else if (g > 0) {
                var m = i_(g), _ = h * s + 1.5 * a * (-c + m), x = h * s + 1.5 * a * (-c - m);
                _ = 0 > _ ? -n_(-_, s_) : n_(_, s_), x = 0 > x ? -n_(-x, s_) : n_(x, s_);
                var d = (-s - (_ + x)) / (3 * a);
                d >= 0 && 1 >= d && (o[f++] = d)
            } else {
                var w = (2 * h * s - 3 * a * c) / (2 * i_(h * h * h)), b = Math.acos(w) / 3, S = i_(h), T = Math.cos(b),
                    d = (-s - 2 * S * T) / (3 * a), v = (-s + S * (T + a_ * Math.sin(b))) / (3 * a),
                    M = (-s + S * (T - a_ * Math.sin(b))) / (3 * a);
                d >= 0 && 1 >= d && (o[f++] = d), v >= 0 && 1 >= v && (o[f++] = v), M >= 0 && 1 >= M && (o[f++] = M)
            }
        }
        return f
    }

    function Ur(t, e, n, i, r) {
        var o = 6 * n - 12 * e + 6 * t, a = 9 * e + 3 * i - 3 * t - 9 * n, s = 3 * e - 3 * t, l = 0;
        if (Fr(a)) {
            if (Vr(o)) {
                var u = -s / o;
                u >= 0 && 1 >= u && (r[l++] = u)
            }
        } else {
            var h = o * o - 4 * a * s;
            if (Fr(h)) r[0] = -o / (2 * a); else if (h > 0) {
                var c = i_(h), u = (-o + c) / (2 * a), p = (-o - c) / (2 * a);
                u >= 0 && 1 >= u && (r[l++] = u), p >= 0 && 1 >= p && (r[l++] = p)
            }
        }
        return l
    }

    function Yr(t, e, n, i, r, o) {
        var a = (e - t) * r + t, s = (n - e) * r + e, l = (i - n) * r + n, u = (s - a) * r + a, h = (l - s) * r + s,
            c = (h - u) * r + u;
        o[0] = t, o[1] = a, o[2] = u, o[3] = c, o[4] = c, o[5] = h, o[6] = l, o[7] = i
    }

    function Xr(t, e, n, i, r, o, a, s, l, u, h) {
        var c, p, f, d, g, y = .005, v = 1 / 0;
        l_[0] = l, l_[1] = u;
        for (var m = 0; 1 > m; m += .05) u_[0] = Hr(t, n, r, a, m), u_[1] = Hr(e, i, o, s, m), d = Gy(l_, u_), v > d && (c = m, v = d);
        v = 1 / 0;
        for (var _ = 0; 32 > _ && !(o_ > y); _++) p = c - y, f = c + y, u_[0] = Hr(t, n, r, a, p), u_[1] = Hr(e, i, o, s, p), d = Gy(u_, l_), p >= 0 && v > d ? (c = p, v = d) : (h_[0] = Hr(t, n, r, a, f), h_[1] = Hr(e, i, o, s, f), g = Gy(h_, l_), 1 >= f && v > g ? (c = f, v = g) : y *= .5);
        return h && (h[0] = Hr(t, n, r, a, c), h[1] = Hr(e, i, o, s, c)), i_(v)
    }

    function jr(t, e, n, i, r, o, a, s, l) {
        for (var u = t, h = e, c = 0, p = 1 / l, f = 1; l >= f; f++) {
            var d = f * p, g = Hr(t, n, r, a, d), y = Hr(e, i, o, s, d), v = g - u, m = y - h;
            c += Math.sqrt(v * v + m * m), u = g, h = y
        }
        return c
    }

    function qr(t, e, n, i) {
        var r = 1 - i;
        return r * (r * t + 2 * i * e) + i * i * n
    }

    function Zr(t, e, n, i) {
        return 2 * ((1 - i) * (e - t) + i * (n - e))
    }

    function Kr(t, e, n, i, r) {
        var o = t - 2 * e + n, a = 2 * (e - t), s = t - i, l = 0;
        if (Fr(o)) {
            if (Vr(a)) {
                var u = -s / a;
                u >= 0 && 1 >= u && (r[l++] = u)
            }
        } else {
            var h = a * a - 4 * o * s;
            if (Fr(h)) {
                var u = -a / (2 * o);
                u >= 0 && 1 >= u && (r[l++] = u)
            } else if (h > 0) {
                var c = i_(h), u = (-a + c) / (2 * o), p = (-a - c) / (2 * o);
                u >= 0 && 1 >= u && (r[l++] = u), p >= 0 && 1 >= p && (r[l++] = p)
            }
        }
        return l
    }

    function $r(t, e, n) {
        var i = t + n - 2 * e;
        return 0 === i ? .5 : (t - e) / i
    }

    function Qr(t, e, n, i, r) {
        var o = (e - t) * i + t, a = (n - e) * i + e, s = (a - o) * i + o;
        r[0] = t, r[1] = o, r[2] = s, r[3] = s, r[4] = a, r[5] = n
    }

    function Jr(t, e, n, i, r, o, a, s, l) {
        var u, h = .005, c = 1 / 0;
        l_[0] = a, l_[1] = s;
        for (var p = 0; 1 > p; p += .05) {
            u_[0] = qr(t, n, r, p), u_[1] = qr(e, i, o, p);
            var f = Gy(l_, u_);
            c > f && (u = p, c = f)
        }
        c = 1 / 0;
        for (var d = 0; 32 > d && !(o_ > h); d++) {
            var g = u - h, y = u + h;
            u_[0] = qr(t, n, r, g), u_[1] = qr(e, i, o, g);
            var f = Gy(u_, l_);
            if (g >= 0 && c > f) u = g, c = f; else {
                h_[0] = qr(t, n, r, y), h_[1] = qr(e, i, o, y);
                var v = Gy(h_, l_);
                1 >= y && c > v ? (u = y, c = v) : h *= .5
            }
        }
        return l && (l[0] = qr(t, n, r, u), l[1] = qr(e, i, o, u)), i_(c)
    }

    function to(t, e, n, i, r, o, a) {
        for (var s = t, l = e, u = 0, h = 1 / a, c = 1; a >= c; c++) {
            var p = c * h, f = qr(t, n, r, p), d = qr(e, i, o, p), g = f - s, y = d - l;
            u += Math.sqrt(g * g + y * y), s = f, l = d
        }
        return u
    }

    function eo(t, e, n) {
        if (0 !== t.length) {
            for (var i = t[0], r = i[0], o = i[0], a = i[1], s = i[1], l = 1; l < t.length; l++) i = t[l], r = c_(r, i[0]), o = p_(o, i[0]), a = c_(a, i[1]), s = p_(s, i[1]);
            e[0] = r, e[1] = a, n[0] = o, n[1] = s
        }
    }

    function no(t, e, n, i, r, o) {
        r[0] = c_(t, n), r[1] = c_(e, i), o[0] = p_(t, n), o[1] = p_(e, i)
    }

    function io(t, e, n, i, r, o, a, s, l, u) {
        var h = Ur, c = Hr, p = h(t, n, r, a, __);
        l[0] = 1 / 0, l[1] = 1 / 0, u[0] = -1 / 0, u[1] = -1 / 0;
        for (var f = 0; p > f; f++) {
            var d = c(t, n, r, a, __[f]);
            l[0] = c_(d, l[0]), u[0] = p_(d, u[0])
        }
        p = h(e, i, o, s, x_);
        for (var f = 0; p > f; f++) {
            var g = c(e, i, o, s, x_[f]);
            l[1] = c_(g, l[1]), u[1] = p_(g, u[1])
        }
        l[0] = c_(t, l[0]), u[0] = p_(t, u[0]), l[0] = c_(a, l[0]), u[0] = p_(a, u[0]), l[1] = c_(e, l[1]), u[1] = p_(e, u[1]), l[1] = c_(s, l[1]), u[1] = p_(s, u[1])
    }

    function ro(t, e, n, i, r, o, a, s) {
        var l = $r, u = qr, h = p_(c_(l(t, n, r), 1), 0), c = p_(c_(l(e, i, o), 1), 0), p = u(t, n, r, h),
            f = u(e, i, o, c);
        a[0] = c_(t, r, p), a[1] = c_(e, o, f), s[0] = p_(t, r, p), s[1] = p_(e, o, f)
    }

    function oo(t, e, n, i, r, o, a, s, l) {
        var u = ye, h = ve, c = Math.abs(r - o);
        if (1e-4 > c % g_ && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void (l[1] = e + i);
        if (y_[0] = d_(r) * n + t, y_[1] = f_(r) * i + e, v_[0] = d_(o) * n + t, v_[1] = f_(o) * i + e, u(s, y_, v_), h(l, y_, v_), r %= g_, 0 > r && (r += g_), o %= g_, 0 > o && (o += g_), r > o && !a ? o += g_ : o > r && a && (r += g_), a) {
            var p = o;
            o = r, r = p
        }
        for (var f = 0; o > f; f += Math.PI / 2) f > r && (m_[0] = d_(f) * n + t, m_[1] = f_(f) * i + e, u(s, m_, s), h(l, m_, l))
    }

    function ao(t) {
        var e = Math.round(t / R_ * 1e8) / 1e8;
        return e % 2 * R_
    }

    function so(t, e) {
        var n = ao(t[0]);
        0 > n && (n += B_);
        var i = n - t[0], r = t[1];
        r += i, !e && r - n >= B_ ? r = n + B_ : e && n - r >= B_ ? r = n - B_ : !e && n > r ? r = n + (B_ - ao(n - r)) : e && r > n && (r = n - (B_ - ao(r - n))), t[0] = n, t[1] = r
    }

    function lo(t, e, n, i, r, o, a) {
        if (0 === r) return !1;
        var s = r, l = 0, u = t;
        if (a > e + s && a > i + s || e - s > a && i - s > a || o > t + s && o > n + s || t - s > o && n - s > o) return !1;
        if (t === n) return Math.abs(o - t) <= s / 2;
        l = (e - i) / (t - n), u = (t * i - n * e) / (t - n);
        var h = l * o - a + u, c = h * h / (l * l + 1);
        return s / 2 * s / 2 >= c
    }

    function uo(t, e, n, i, r, o, a, s, l, u, h) {
        if (0 === l) return !1;
        var c = l;
        if (h > e + c && h > i + c && h > o + c && h > s + c || e - c > h && i - c > h && o - c > h && s - c > h || u > t + c && u > n + c && u > r + c && u > a + c || t - c > u && n - c > u && r - c > u && a - c > u) return !1;
        var p = Xr(t, e, n, i, r, o, a, s, u, h, null);
        return c / 2 >= p
    }

    function ho(t, e, n, i, r, o, a, s, l) {
        if (0 === a) return !1;
        var u = a;
        if (l > e + u && l > i + u && l > o + u || e - u > l && i - u > l && o - u > l || s > t + u && s > n + u && s > r + u || t - u > s && n - u > s && r - u > s) return !1;
        var h = Jr(t, e, n, i, r, o, s, l, null);
        return u / 2 >= h
    }

    function co(t) {
        return t %= F_, 0 > t && (t += F_), t
    }

    function po(t, e, n, i, r, o, a, s, l) {
        if (0 === a) return !1;
        var u = a;
        s -= t, l -= e;
        var h = Math.sqrt(s * s + l * l);
        if (h - u > n || n > h + u) return !1;
        if (Math.abs(i - r) % V_ < 1e-4) return !0;
        if (o) {
            var c = i;
            i = co(r), r = co(c)
        } else i = co(i), r = co(r);
        i > r && (r += V_);
        var p = Math.atan2(l, s);
        return 0 > p && (p += V_), p >= i && r >= p || p + V_ >= i && r >= p + V_
    }

    function fo(t, e, n, i, r, o) {
        if (o > e && o > i || e > o && i > o) return 0;
        if (i === e) return 0;
        var a = (o - e) / (i - e), s = e > i ? 1 : -1;
        (1 === a || 0 === a) && (s = e > i ? .5 : -.5);
        var l = a * (n - t) + t;
        return l === r ? 1 / 0 : l > r ? s : 0
    }

    function go(t, e) {
        return Math.abs(t - e) < G_
    }

    function yo() {
        var t = Y_[0];
        Y_[0] = Y_[1], Y_[1] = t
    }

    function vo(t, e, n, i, r, o, a, s, l, u) {
        if (u > e && u > i && u > o && u > s || e > u && i > u && o > u && s > u) return 0;
        var h = Gr(e, i, o, s, u, U_);
        if (0 === h) return 0;
        for (var c = 0, p = -1, f = void 0, d = void 0, g = 0; h > g; g++) {
            var y = U_[g], v = 0 === y || 1 === y ? .5 : 1, m = Hr(t, n, r, a, y);
            l > m || (0 > p && (p = Ur(e, i, o, s, Y_), Y_[1] < Y_[0] && p > 1 && yo(), f = Hr(e, i, o, s, Y_[0]), p > 1 && (d = Hr(e, i, o, s, Y_[1]))), c += 2 === p ? y < Y_[0] ? e > f ? v : -v : y < Y_[1] ? f > d ? v : -v : d > s ? v : -v : y < Y_[0] ? e > f ? v : -v : f > s ? v : -v)
        }
        return c
    }

    function mo(t, e, n, i, r, o, a, s) {
        if (s > e && s > i && s > o || e > s && i > s && o > s) return 0;
        var l = Kr(e, i, o, s, U_);
        if (0 === l) return 0;
        var u = $r(e, i, o);
        if (u >= 0 && 1 >= u) {
            for (var h = 0, c = qr(e, i, o, u), p = 0; l > p; p++) {
                var f = 0 === U_[p] || 1 === U_[p] ? .5 : 1, d = qr(t, n, r, U_[p]);
                a > d || (h += U_[p] < u ? e > c ? f : -f : c > o ? f : -f)
            }
            return h
        }
        var f = 0 === U_[0] || 1 === U_[0] ? .5 : 1, d = qr(t, n, r, U_[0]);
        return a > d ? 0 : e > o ? f : -f
    }

    function _o(t, e, n, i, r, o, a, s) {
        if (s -= e, s > n || -n > s) return 0;
        var l = Math.sqrt(n * n - s * s);
        U_[0] = -l, U_[1] = l;
        var u = Math.abs(i - r);
        if (1e-4 > u) return 0;
        if (u >= W_ - 1e-4) {
            i = 0, r = W_;
            var h = o ? 1 : -1;
            return a >= U_[0] + t && a <= U_[1] + t ? h : 0
        }
        if (i > r) {
            var c = i;
            i = r, r = c
        }
        0 > i && (i += W_, r += W_);
        for (var p = 0, f = 0; 2 > f; f++) {
            var d = U_[f];
            if (d + t > a) {
                var g = Math.atan2(s, d), h = o ? 1 : -1;
                0 > g && (g = W_ + g), (g >= i && r >= g || g + W_ >= i && r >= g + W_) && (g > Math.PI / 2 && g < 1.5 * Math.PI && (h = -h), p += h)
            }
        }
        return p
    }

    function xo(t, e, n, i, r) {
        for (var o, a, s = t.data, l = t.len(), u = 0, h = 0, c = 0, p = 0, f = 0, d = 0; l > d;) {
            var g = s[d++], y = 1 === d;
            switch (g === H_.M && d > 1 && (n || (u += fo(h, c, p, f, i, r))), y && (h = s[d], c = s[d + 1], p = h, f = c), g) {
                case H_.M:
                    p = s[d++], f = s[d++], h = p, c = f;
                    break;
                case H_.L:
                    if (n) {
                        if (lo(h, c, s[d], s[d + 1], e, i, r)) return !0
                    } else u += fo(h, c, s[d], s[d + 1], i, r) || 0;
                    h = s[d++], c = s[d++];
                    break;
                case H_.C:
                    if (n) {
                        if (uo(h, c, s[d++], s[d++], s[d++], s[d++], s[d], s[d + 1], e, i, r)) return !0
                    } else u += vo(h, c, s[d++], s[d++], s[d++], s[d++], s[d], s[d + 1], i, r) || 0;
                    h = s[d++], c = s[d++];
                    break;
                case H_.Q:
                    if (n) {
                        if (ho(h, c, s[d++], s[d++], s[d], s[d + 1], e, i, r)) return !0
                    } else u += mo(h, c, s[d++], s[d++], s[d], s[d + 1], i, r) || 0;
                    h = s[d++], c = s[d++];
                    break;
                case H_.A:
                    var v = s[d++], m = s[d++], _ = s[d++], x = s[d++], w = s[d++], b = s[d++];
                    d += 1;
                    var S = !!(1 - s[d++]);
                    o = Math.cos(w) * _ + v, a = Math.sin(w) * x + m, y ? (p = o, f = a) : u += fo(h, c, o, a, i, r);
                    var T = (i - v) * x / _ + v;
                    if (n) {
                        if (po(v, m, x, w, w + b, S, e, T, r)) return !0
                    } else u += _o(v, m, x, w, w + b, S, T, r);
                    h = Math.cos(w + b) * _ + v, c = Math.sin(w + b) * x + m;
                    break;
                case H_.R:
                    p = h = s[d++], f = c = s[d++];
                    var M = s[d++], C = s[d++];
                    if (o = p + M, a = f + C, n) {
                        if (lo(p, f, o, f, e, i, r) || lo(o, f, o, a, e, i, r) || lo(o, a, p, a, e, i, r) || lo(p, a, p, f, e, i, r)) return !0
                    } else u += fo(o, f, o, a, i, r), u += fo(p, a, p, f, i, r);
                    break;
                case H_.Z:
                    if (n) {
                        if (lo(h, c, p, f, e, i, r)) return !0
                    } else u += fo(h, c, p, f, i, r);
                    h = p, c = f
            }
        }
        return n || go(c, f) || (u += fo(h, c, p, f, i, r) || 0), 0 !== u
    }

    function wo(t, e, n) {
        return xo(t, 0, !1, e, n)
    }

    function bo(t, e, n, i) {
        return xo(t, e, !0, n, i)
    }

    function So(t) {
        return !!(t && "string" != typeof t && t.width && t.height)
    }

    function To(t, e) {
        var n, i, r, o, a = e.x, s = e.y, l = e.width, u = e.height, h = e.r;
        0 > l && (a += l, l = -l), 0 > u && (s += u, u = -u), "number" == typeof h ? n = i = r = o = h : h instanceof Array ? 1 === h.length ? n = i = r = o = h[0] : 2 === h.length ? (n = r = h[0], i = o = h[1]) : 3 === h.length ? (n = h[0], i = o = h[1], r = h[2]) : (n = h[0], i = h[1], r = h[2], o = h[3]) : n = i = r = o = 0;
        var c;
        n + i > l && (c = n + i, n *= l / c, i *= l / c), r + o > l && (c = r + o, r *= l / c, o *= l / c), i + r > u && (c = i + r, i *= u / c, r *= u / c), n + o > u && (c = n + o, n *= u / c, o *= u / c), t.moveTo(a + n, s), t.lineTo(a + l - i, s), 0 !== i && t.arc(a + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(a + l, s + u - r), 0 !== r && t.arc(a + l - r, s + u - r, r, 0, Math.PI / 2), t.lineTo(a + o, s + u), 0 !== o && t.arc(a + o, s + u - o, o, Math.PI / 2, Math.PI), t.lineTo(a, s + n), 0 !== n && t.arc(a + n, s + n, n, Math.PI, 1.5 * Math.PI)
    }

    function Mo(t, e, n) {
        if (e) {
            var i = e.x1, r = e.x2, o = e.y1, a = e.y2;
            t.x1 = i, t.x2 = r, t.y1 = o, t.y2 = a;
            var s = n && n.lineWidth;
            return s ? (ex(2 * i) === ex(2 * r) && (t.x1 = t.x2 = Io(i, s, !0)), ex(2 * o) === ex(2 * a) && (t.y1 = t.y2 = Io(o, s, !0)), t) : t
        }
    }

    function Co(t, e, n) {
        if (e) {
            var i = e.x, r = e.y, o = e.width, a = e.height;
            t.x = i, t.y = r, t.width = o, t.height = a;
            var s = n && n.lineWidth;
            return s ? (t.x = Io(i, s, !0), t.y = Io(r, s, !0), t.width = Math.max(Io(i + o, s, !1) - t.x, 0 === o ? 0 : 1), t.height = Math.max(Io(r + a, s, !1) - t.y, 0 === a ? 0 : 1), t) : t
        }
    }

    function Io(t, e, n) {
        if (!e) return t;
        var i = ex(2 * t);
        return (i + ex(e)) % 2 === 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
    }

    function Do(t) {
        return Ao(t), y(t.rich, Ao), t
    }

    function Ao(t) {
        if (t) {
            t.font = lx.makeFont(t);
            var e = t.align;
            "middle" === e && (e = "center"), t.align = null == e || ux[e] ? e : "left";
            var n = t.verticalAlign;
            "center" === n && (n = "middle"), t.verticalAlign = null == n || hx[n] ? n : "top";
            var i = t.padding;
            i && (t.padding = H(t.padding))
        }
    }

    function ko(t, e) {
        return null == t || 0 >= e || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function Lo(t) {
        return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function Po(t, e, n) {
        return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3]
    }

    function Oo(t) {
        var e = t.text;
        return null != e && (e += ""), e
    }

    function Ro(t) {
        return !!(t.backgroundColor || t.borderWidth && t.borderColor)
    }

    function Bo(t) {
        return null != t && "none" !== t
    }

    function Eo(t) {
        if ("string" != typeof t) return t;
        var e = Dx.get(t);
        return e || (e = ln(t, -.1), Dx.put(t, e)), e
    }

    function zo(t, e, n) {
        t.onHoverStateChange && (t.hoverState || 0) !== n && t.onHoverStateChange(e), t.hoverState = n
    }

    function No(t) {
        zo(t, "emphasis", vx)
    }

    function Fo(t) {
        t.hoverState === vx && zo(t, "normal", gx)
    }

    function Vo(t) {
        zo(t, "blur", yx)
    }

    function Ho(t) {
        t.hoverState === yx && zo(t, "normal", gx)
    }

    function Wo(t) {
        t.selected = !0
    }

    function Go(t) {
        t.selected = !1
    }

    function Uo(t, e, n) {
        e(t, n)
    }

    function Yo(t, e, n) {
        Uo(t, e, n), t.isGroup && t.traverse(function (t) {
            Uo(t, e, n)
        })
    }

    function Xo(t, e, n, i) {
        for (var r = t.style, o = {}, a = 0; a < e.length; a++) {
            var s = e[a], l = r[s];
            o[s] = null == l ? i && i[s] : l
        }
        for (var a = 0; a < t.animators.length; a++) {
            var u = t.animators[a];
            u.__fromStateTransition && u.__fromStateTransition.indexOf(n) < 0 && "style" === u.targetName && u.saveFinalToTarget(o, e)
        }
        return o
    }

    function jo(t, e, n, i) {
        var r = n && p(n, "select") >= 0, o = !1;
        if (t instanceof Z_) {
            var a = dx(t), s = r ? a.selectFill || a.normalFill : a.normalFill,
                l = r ? a.selectStroke || a.normalStroke : a.normalStroke;
            if (Bo(s) || Bo(l)) {
                i = i || {};
                var u = i.style || {};
                !Bo(u.fill) && Bo(s) ? (o = !0, i = h({}, i), u = h({}, u), u.fill = Eo(s)) : !Bo(u.stroke) && Bo(l) && (o || (i = h({}, i), u = h({}, u)), u.stroke = Eo(l)), i.style = u
            }
        }
        if (i && null == i.z2) {
            o || (i = h({}, i));
            var c = t.z2EmphasisLift;
            i.z2 = t.z2 + (null != c ? c : xx)
        }
        return i
    }

    function qo(t, e, n) {
        if (n && null == n.z2) {
            n = h({}, n);
            var i = t.z2SelectLift;
            n.z2 = t.z2 + (null != i ? i : bx)
        }
        return n
    }

    function Zo(t, e, n) {
        var i = p(t.currentStates, e) >= 0, r = t.style.opacity, o = i ? null : Xo(t, ["opacity"], e, {opacity: 1});
        n = n || {};
        var a = n.style || {};
        return null == a.opacity && (n = h({}, n), a = h({opacity: i ? r : .1 * o.opacity}, a), n.style = a), n
    }

    function Ko(t, e) {
        var n = this.states[t];
        if (this.style) {
            if ("emphasis" === t) return jo(this, t, e, n);
            if ("blur" === t) return Zo(this, t, n);
            if ("select" === t) return qo(this, t, n)
        }
        return n
    }

    function $o(t) {
        t.stateProxy = Ko;
        var e = t.getTextContent(), n = t.getTextGuideLine();
        e && (e.stateProxy = Ko), n && (n.stateProxy = Ko)
    }

    function Qo(t, e) {
        !aa(t, e) && !t.__highByOuter && Yo(t, No)
    }

    function Jo(t, e) {
        !aa(t, e) && !t.__highByOuter && Yo(t, Fo)
    }

    function ta(t, e) {
        t.__highByOuter |= 1 << (e || 0), Yo(t, No)
    }

    function ea(t, e) {
        !(t.__highByOuter &= ~(1 << (e || 0))) && Yo(t, Fo)
    }

    function na(t) {
        Yo(t, Vo)
    }

    function ia(t) {
        Yo(t, Ho)
    }

    function ra(t) {
        Yo(t, Wo)
    }

    function oa(t) {
        Yo(t, Go)
    }

    function aa(t, e) {
        return t.__highDownSilentOnTouch && e.zrByTouch
    }

    function sa(t) {
        var e = t.getModel();
        e.eachComponent(function (e, n) {
            var i = "series" === e ? t.getViewOfSeriesModel(n) : t.getViewOfComponentModel(n);
            i.group.traverse(function (t) {
                Ho(t)
            })
        })
    }

    function la(t, e, n, i, r) {
        function o(t, e) {
            for (var n = 0; n < e.length; n++) {
                var i = t.getItemGraphicEl(e[n]);
                i && ia(i)
            }
        }

        var a = i.getModel();
        if (n = n || "coordinateSystem", !r) return void sa(i);
        if (null != t && e && "none" !== e) {
            var s = a.getSeriesByIndex(t), l = s.coordinateSystem;
            l && l.master && (l = l.master);
            var u = [];
            a.eachSeries(function (t) {
                var r = s === t, a = t.coordinateSystem;
                a && a.master && (a = a.master);
                var h = a && l ? a === l : r;
                if (!("series" === n && !r || "coordinateSystem" === n && !h || "series" === e && r)) {
                    var c = i.getViewOfSeriesModel(t);
                    if (c.group.traverse(function (t) {
                        Vo(t)
                    }), g(e)) o(t.getData(), e); else if (A(e)) for (var p = w(e), f = 0; f < p.length; f++) o(t.getData(p[f]), e[p[f]]);
                    u.push(t)
                }
            }), a.eachComponent(function (t, e) {
                if ("series" !== t) {
                    var n = i.getViewOfComponentModel(e);
                    n && n.blurSeries && n.blurSeries(u, a)
                }
            })
        }
    }

    function ua(t, e, n) {
        if (xa(e)) {
            var i = e.type === Sx, r = t.seriesIndex, o = t.getData(e.dataType), a = rr(o, e);
            a = (T(a) ? a[0] : a) || 0;
            var s = o.getItemGraphicEl(a);
            if (!s) for (var l = o.count(), u = 0; !s && l > u;) s = o.getItemGraphicEl(u++);
            if (s) {
                var h = cx(s);
                la(r, h.focus, h.blurScope, n, i)
            } else {
                var c = t.get(["emphasis", "focus"]), p = t.get(["emphasis", "blurScope"]);
                null != c && la(r, c, p, n, i)
            }
        }
    }

    function ha(t, e) {
        if (_a(e)) {
            var n = e.dataType, i = t.getData(n), r = rr(i, e);
            T(r) || (r = [r]), t[e.type === Ix ? "toggleSelect" : e.type === Mx ? "select" : "unselect"](r, n)
        }
    }

    function ca(t) {
        var e = t.getAllData();
        y(e, function (e) {
            var n = e.data, i = e.type;
            n.eachItemGraphicEl(function (e, n) {
                t.isSelected(n, i) ? ra(e) : oa(e)
            })
        })
    }

    function pa(t) {
        var e = [];
        return t.eachSeries(function (t) {
            var n = t.getAllData();
            y(n, function (n) {
                var i = (n.data, n.type), r = t.getSelectedDataIndices();
                if (r.length > 0) {
                    var o = {dataIndex: r, seriesIndex: t.seriesIndex};
                    null != i && (o.dataType = i), e.push(o)
                }
            })
        }), e
    }

    function fa(t, e, n) {
        ya(t, !0), Yo(t, $o), da(t, e, n)
    }

    function da(t, e, n) {
        var i = cx(t);
        null != e ? (i.focus = e, i.blurScope = n) : i.focus && (i.focus = null)
    }

    function ga(t, e, n, i) {
        n = n || "itemStyle";
        for (var r = 0; r < Ax.length; r++) {
            var o = Ax[r], a = e.getModel([o, n]), s = t.ensureState(o);
            s.style = i ? i(a) : a[kx[n]]()
        }
    }

    function ya(t, e) {
        var n = e === !1, i = t;
        t.highDownSilentOnTouch && (i.__highDownSilentOnTouch = t.highDownSilentOnTouch), (!n || i.__highDownDispatcher) && (i.__highByOuter = i.__highByOuter || 0, i.__highDownDispatcher = !n)
    }

    function va(t) {
        return !(!t || !t.__highDownDispatcher)
    }

    function ma(t) {
        var e = fx[t];
        return null == e && 32 >= px && (e = fx[t] = px++), e
    }

    function _a(t) {
        var e = t.type;
        return e === Mx || e === Cx || e === Ix
    }

    function xa(t) {
        var e = t.type;
        return e === Sx || e === Tx
    }

    function wa(t) {
        var e = dx(t);
        e.normalFill = t.style.fill, e.normalStroke = t.style.stroke;
        var n = t.states.select || {};
        e.selectFill = n.style && n.style.fill || null, e.selectStroke = n.style && n.style.stroke || null
    }

    function ba(t, e) {
        var n, i, r, o, a, s, l = t.data, u = t.len(), h = Lx.M, c = Lx.C, p = Lx.L, f = Lx.R, d = Lx.A, g = Lx.Q;
        for (r = 0, o = 0; u > r;) {
            switch (n = l[r++], o = r, i = 0, n) {
                case h:
                    i = 1;
                    break;
                case p:
                    i = 1;
                    break;
                case c:
                    i = 3;
                    break;
                case g:
                    i = 2;
                    break;
                case d:
                    var y = e[4], v = e[5], m = Ox(e[0] * e[0] + e[1] * e[1]), _ = Ox(e[2] * e[2] + e[3] * e[3]),
                        x = Rx(-e[1] / _, e[0] / m);
                    l[r] *= m, l[r++] += y, l[r] *= _, l[r++] += v, l[r++] *= m, l[r++] *= _, l[r++] += x, l[r++] += x, r += 2, o = r;
                    break;
                case f:
                    s[0] = l[r++], s[1] = l[r++], ge(s, s, e), l[o++] = s[0], l[o++] = s[1], s[0] += l[r++], s[1] += l[r++], ge(s, s, e), l[o++] = s[0], l[o++] = s[1]
            }
            for (a = 0; i > a; a++) {
                var w = Px[a];
                w[0] = l[r++], w[1] = l[r++], ge(w, w, e), l[o++] = w[0], l[o++] = w[1]
            }
        }
        t.increaseVersion()
    }

    function Sa(t) {
        return Math.sqrt(t[0] * t[0] + t[1] * t[1])
    }

    function Ta(t, e) {
        return (t[0] * e[0] + t[1] * e[1]) / (Sa(t) * Sa(e))
    }

    function Ma(t, e) {
        return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(Ta(t, e))
    }

    function Ca(t, e, n, i, r, o, a, s, l, u, h) {
        var c = l * (Nx / 180), p = zx(c) * (t - n) / 2 + Ex(c) * (e - i) / 2,
            f = -1 * Ex(c) * (t - n) / 2 + zx(c) * (e - i) / 2, d = p * p / (a * a) + f * f / (s * s);
        d > 1 && (a *= Bx(d), s *= Bx(d));
        var g = (r === o ? -1 : 1) * Bx((a * a * s * s - a * a * f * f - s * s * p * p) / (a * a * f * f + s * s * p * p)) || 0,
            y = g * a * f / s, v = g * -s * p / a, m = (t + n) / 2 + zx(c) * y - Ex(c) * v,
            _ = (e + i) / 2 + Ex(c) * y + zx(c) * v, x = Ma([1, 0], [(p - y) / a, (f - v) / s]),
            w = [(p - y) / a, (f - v) / s], b = [(-1 * p - y) / a, (-1 * f - v) / s], S = Ma(w, b);
        if (Ta(w, b) <= -1 && (S = Nx), Ta(w, b) >= 1 && (S = 0), 0 > S) {
            var T = Math.round(S / Nx * 1e6) / 1e6;
            S = 2 * Nx + T % 2 * Nx
        }
        h.addData(u, m, _, a, s, x, S, c, o)
    }

    function Ia(t) {
        var e = new N_;
        if (!t) return e;
        var n, i = 0, r = 0, o = i, a = r, s = N_.CMD, l = t.match(Fx);
        if (!l) return e;
        for (var u = 0; u < l.length; u++) {
            for (var h = l[u], c = h.charAt(0), p = void 0, f = h.match(Vx) || [], d = f.length, g = 0; d > g; g++) f[g] = parseFloat(f[g]);
            for (var y = 0; d > y;) {
                var v = void 0, m = void 0, _ = void 0, x = void 0, w = void 0, b = void 0, S = void 0, T = i, M = r,
                    C = void 0, I = void 0;
                switch (c) {
                    case "l":
                        i += f[y++], r += f[y++], p = s.L, e.addData(p, i, r);
                        break;
                    case "L":
                        i = f[y++], r = f[y++], p = s.L, e.addData(p, i, r);
                        break;
                    case "m":
                        i += f[y++], r += f[y++], p = s.M, e.addData(p, i, r), o = i, a = r, c = "l";
                        break;
                    case "M":
                        i = f[y++], r = f[y++], p = s.M, e.addData(p, i, r), o = i, a = r, c = "L";
                        break;
                    case "h":
                        i += f[y++], p = s.L, e.addData(p, i, r);
                        break;
                    case "H":
                        i = f[y++], p = s.L, e.addData(p, i, r);
                        break;
                    case "v":
                        r += f[y++], p = s.L, e.addData(p, i, r);
                        break;
                    case "V":
                        r = f[y++], p = s.L, e.addData(p, i, r);
                        break;
                    case "C":
                        p = s.C, e.addData(p, f[y++], f[y++], f[y++], f[y++], f[y++], f[y++]), i = f[y - 2], r = f[y - 1];
                        break;
                    case "c":
                        p = s.C, e.addData(p, f[y++] + i, f[y++] + r, f[y++] + i, f[y++] + r, f[y++] + i, f[y++] + r), i += f[y - 2], r += f[y - 1];
                        break;
                    case "S":
                        v = i, m = r, C = e.len(), I = e.data, n === s.C && (v += i - I[C - 4], m += r - I[C - 3]), p = s.C, T = f[y++], M = f[y++], i = f[y++], r = f[y++], e.addData(p, v, m, T, M, i, r);
                        break;
                    case "s":
                        v = i, m = r, C = e.len(), I = e.data, n === s.C && (v += i - I[C - 4], m += r - I[C - 3]), p = s.C, T = i + f[y++], M = r + f[y++], i += f[y++], r += f[y++], e.addData(p, v, m, T, M, i, r);
                        break;
                    case "Q":
                        T = f[y++], M = f[y++], i = f[y++], r = f[y++], p = s.Q, e.addData(p, T, M, i, r);
                        break;
                    case "q":
                        T = f[y++] + i, M = f[y++] + r, i += f[y++], r += f[y++], p = s.Q, e.addData(p, T, M, i, r);
                        break;
                    case "T":
                        v = i, m = r, C = e.len(), I = e.data, n === s.Q && (v += i - I[C - 4], m += r - I[C - 3]), i = f[y++], r = f[y++], p = s.Q, e.addData(p, v, m, i, r);
                        break;
                    case "t":
                        v = i, m = r, C = e.len(), I = e.data, n === s.Q && (v += i - I[C - 4], m += r - I[C - 3]), i += f[y++], r += f[y++], p = s.Q, e.addData(p, v, m, i, r);
                        break;
                    case "A":
                        _ = f[y++], x = f[y++], w = f[y++], b = f[y++], S = f[y++], T = i, M = r, i = f[y++], r = f[y++], p = s.A, Ca(T, M, i, r, b, S, _, x, w, p, e);
                        break;
                    case "a":
                        _ = f[y++], x = f[y++], w = f[y++], b = f[y++], S = f[y++], T = i, M = r, i += f[y++], r += f[y++], p = s.A, Ca(T, M, i, r, b, S, _, x, w, p, e)
                }
            }
            ("z" === c || "Z" === c) && (p = s.Z, e.addData(p), i = o, r = a), n = p
        }
        return e.toStatic(), e
    }

    function Da(t) {
        return null != t.setData
    }

    function Aa(t, e) {
        var n = Ia(t), i = h({}, e);
        return i.buildPath = function (t) {
            if (Da(t)) {
                t.setData(n.data);
                var e = t.getContext();
                e && t.rebuildPath(e, 1)
            } else {
                var e = t;
                n.rebuildPath(e, 1)
            }
        }, i.applyTransform = function (t) {
            ba(n, t), this.dirtyShape()
        }, i
    }

    function ka(t, e) {
        return new Hx(Aa(t, e))
    }

    function La(t, n) {
        var i = Aa(t, n), r = function (t) {
            function n(e) {
                var n = t.call(this, e) || this;
                return n.applyTransform = i.applyTransform, n.buildPath = i.buildPath, n
            }

            return e(n, t), n
        }(Hx);
        return r
    }

    function Pa(t, e) {
        for (var n = [], i = t.length, r = 0; i > r; r++) {
            var o = t[r];
            o.path || o.createPathProxy(), o.shapeChanged() && o.buildPath(o.path, o.shape, !0), n.push(o.path)
        }
        var a = new Z_(e);
        return a.createPathProxy(), a.buildPath = function (t) {
            if (Da(t)) {
                t.appendPath(n);
                var e = t.getContext();
                e && t.rebuildPath(e, 1)
            }
        }, a
    }

    function Oa(t, e, n, i, r, o, a, s) {
        var l = n - t, u = i - e, h = a - r, c = s - o, p = c * l - h * u;
        return nw > p * p ? void 0 : (p = (h * (e - o) - c * (t - r)) / p, [t + p * l, e + p * u])
    }

    function Ra(t, e, n, i, r, o, a) {
        var s = t - n, l = e - i, u = (a ? o : -o) / Jx(s * s + l * l), h = u * l, c = -u * s, p = t + h, f = e + c,
            d = n + h, g = i + c, y = (p + d) / 2, v = (f + g) / 2, m = d - p, _ = g - f, x = m * m + _ * _, w = r - o,
            b = p * g - d * f, S = (0 > _ ? -1 : 1) * Jx(tw(0, w * w * x - b * b)), T = (b * _ - m * S) / x,
            M = (-b * m - _ * S) / x, C = (b * _ + m * S) / x, I = (-b * m + _ * S) / x, D = T - y, A = M - v,
            k = C - y, L = I - v;
        return D * D + A * A > k * k + L * L && (T = C, M = I), {
            cx: T,
            cy: M,
            x01: -h,
            y01: -c,
            x11: T * (r / w - 1),
            y11: M * (r / w - 1)
        }
    }

    function Ba(t, e) {
        var n = tw(e.r, 0), i = tw(e.r0 || 0, 0), r = n > 0, o = i > 0;
        if (r || o) {
            if (r || (n = i, i = 0), i > n) {
                var a = n;
                n = i, i = a
            }
            var s = !!e.clockwise, l = e.startAngle, u = e.endAngle, h = [l, u];
            so(h, !s);
            var c = Qx(h[0] - h[1]), p = e.cx, f = e.cy, d = e.cornerRadius || 0, g = e.innerCornerRadius || 0;
            if (n > nw) if (c > jx - nw) t.moveTo(p + n * Zx(l), f + n * qx(l)), t.arc(p, f, n, l, u, !s), i > nw && (t.moveTo(p + i * Zx(u), f + i * qx(u)), t.arc(p, f, i, u, l, s)); else {
                var y = Qx(n - i) / 2, v = ew(y, d), m = ew(y, g), _ = m, x = v, w = n * Zx(l), b = n * qx(l),
                    S = i * Zx(u), T = i * qx(u), M = void 0, C = void 0, I = void 0, D = void 0;
                if ((v > nw || m > nw) && (M = n * Zx(u), C = n * qx(u), I = i * Zx(l), D = i * qx(l), Xx > c)) {
                    var A = Oa(w, b, I, D, M, C, S, T);
                    if (A) {
                        var k = w - A[0], L = b - A[1], P = M - A[0], O = C - A[1],
                            R = 1 / qx(Kx((k * P + L * O) / (Jx(k * k + L * L) * Jx(P * P + O * O))) / 2),
                            B = Jx(A[0] * A[0] + A[1] * A[1]);
                        _ = ew(m, (i - B) / (R - 1)), x = ew(v, (n - B) / (R + 1))
                    }
                }
                if (c > nw) if (x > nw) {
                    var E = Ra(I, D, w, b, n, x, s), z = Ra(M, C, S, T, n, x, s);
                    t.moveTo(p + E.cx + E.x01, f + E.cy + E.y01), v > x ? t.arc(p + E.cx, f + E.cy, x, $x(E.y01, E.x01), $x(z.y01, z.x01), !s) : (t.arc(p + E.cx, f + E.cy, x, $x(E.y01, E.x01), $x(E.y11, E.x11), !s), t.arc(p, f, n, $x(E.cy + E.y11, E.cx + E.x11), $x(z.cy + z.y11, z.cx + z.x11), !s), t.arc(p + z.cx, f + z.cy, x, $x(z.y11, z.x11), $x(z.y01, z.x01), !s))
                } else t.moveTo(p + w, f + b), t.arc(p, f, n, l, u, !s); else t.moveTo(p + w, f + b);
                if (i > nw && c > nw) if (_ > nw) {
                    var E = Ra(S, T, M, C, i, -_, s), z = Ra(w, b, I, D, i, -_, s);
                    t.lineTo(p + E.cx + E.x01, f + E.cy + E.y01), m > _ ? t.arc(p + E.cx, f + E.cy, _, $x(E.y01, E.x01), $x(z.y01, z.x01), !s) : (t.arc(p + E.cx, f + E.cy, _, $x(E.y01, E.x01), $x(E.y11, E.x11), !s), t.arc(p, f, i, $x(E.cy + E.y11, E.cx + E.x11), $x(z.cy + z.y11, z.cx + z.x11), s), t.arc(p + z.cx, f + z.cy, _, $x(z.y11, z.x11), $x(z.y01, z.x01), !s))
                } else t.lineTo(p + S, f + T), t.arc(p, f, i, u, l, s); else t.lineTo(p + S, f + T)
            } else t.moveTo(p, f);
            t.closePath()
        }
    }

    function Ea(t, e, n, i, r, o, a) {
        var s = .5 * (n - t), l = .5 * (i - e);
        return (2 * (e - n) + s + l) * a + (-3 * (e - n) - 2 * s - l) * o + s * r + e
    }

    function za(t, e) {
        for (var n = t.length, i = [], r = 0, o = 1; n > o; o++) r += ce(t[o - 1], t[o]);
        var a = r / 2;
        a = n > a ? n : a;
        for (var o = 0; a > o; o++) {
            var s = o / (a - 1) * (e ? n : n - 1), l = Math.floor(s), u = s - l, h = void 0, c = t[l % n], p = void 0,
                f = void 0;
            e ? (h = t[(l - 1 + n) % n], p = t[(l + 1) % n], f = t[(l + 2) % n]) : (h = t[0 === l ? l : l - 1], p = t[l > n - 2 ? n - 1 : l + 1], f = t[l > n - 3 ? n - 1 : l + 2]);
            var d = u * u, g = u * d;
            i.push([Ea(h[0], c[0], p[0], f[0], u, d, g), Ea(h[1], c[1], p[1], f[1], u, d, g)])
        }
        return i
    }

    function Na(t, e, n, i) {
        var r, o, a, s, l = [], u = [], h = [], c = [];
        if (i) {
            a = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];
            for (var p = 0, f = t.length; f > p; p++) ye(a, a, t[p]), ve(s, s, t[p]);
            ye(a, a, i[0]), ve(s, s, i[1])
        }
        for (var p = 0, f = t.length; f > p; p++) {
            var d = t[p];
            if (n) r = t[p ? p - 1 : f - 1], o = t[(p + 1) % f]; else {
                if (0 === p || p === f - 1) {
                    l.push(J(t[p]));
                    continue
                }
                r = t[p - 1], o = t[p + 1]
            }
            ie(u, o, r), ue(u, u, e);
            var g = ce(d, r), y = ce(d, o), v = g + y;
            0 !== v && (g /= v, y /= v), ue(h, u, -g), ue(c, u, y);
            var m = ee([], d, h), _ = ee([], d, c);
            i && (ve(m, m, a), ye(m, m, s), ve(_, _, a), ye(_, _, s)), l.push(m), l.push(_)
        }
        return n && l.push(l.shift()), l
    }

    function Fa(t, e, n) {
        var i = e.smooth, r = e.points;
        if (r && r.length >= 2) {
            if (i && "spline" !== i) {
                var o = Na(r, i, n, e.smoothConstraint);
                t.moveTo(r[0][0], r[0][1]);
                for (var a = r.length, s = 0; (n ? a : a - 1) > s; s++) {
                    var l = o[2 * s], u = o[2 * s + 1], h = r[(s + 1) % a];
                    t.bezierCurveTo(l[0], l[1], u[0], u[1], h[0], h[1])
                }
            } else {
                "spline" === i && (r = za(r, n)), t.moveTo(r[0][0], r[0][1]);
                for (var s = 1, c = r.length; c > s; s++) t.lineTo(r[s][0], r[s][1])
            }
            n && t.closePath()
        }
    }

    function Va(t, e, n) {
        var i = t.cpx2, r = t.cpy2;
        return null === i || null === r ? [(n ? Wr : Hr)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? Wr : Hr)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? Zr : qr)(t.x1, t.cpx1, t.x2, e), (n ? Zr : qr)(t.y1, t.cpy1, t.y2, e)]
    }

    function Ha(t) {
        return Z_.extend(t)
    }

    function Wa(t, e) {
        return Ow(t, e)
    }

    function Ga(t, e) {
        Pw[t] = e
    }

    function Ua(t) {
        return Pw.hasOwnProperty(t) ? Pw[t] : void 0
    }

    function Ya(t, e, n, i) {
        var r = ka(t, e);
        return n && ("center" === i && (n = ja(n, r.getBoundingRect())), qa(r, n)), r
    }

    function Xa(t, e, n) {
        var i = new tx({
            style: {image: t, x: e.x, y: e.y, width: e.width, height: e.height}, onload: function (t) {
                if ("center" === n) {
                    var r = {width: t.width, height: t.height};
                    i.setStyle(ja(e, r))
                }
            }
        });
        return i
    }

    function ja(t, e) {
        var n, i = e.width / e.height, r = t.height * i;
        r <= t.width ? n = t.height : (r = t.width, n = r / i);
        var o = t.x + t.width / 2, a = t.y + t.height / 2;
        return {x: o - r / 2, y: a - n / 2, width: r, height: n}
    }

    function qa(t, e) {
        if (t.applyTransform) {
            var n = t.getBoundingRect(), i = n.calculateTransform(e);
            t.applyTransform(i)
        }
    }

    function Za(t) {
        return Mo(t.shape, t.shape, t.style), t
    }

    function Ka(t) {
        return Co(t.shape, t.shape, t.style), t
    }

    function $a(t, e, n, i, r, o, a) {
        var s, l = !1;
        "function" == typeof r ? (a = o, o = r, r = null) : A(r) && (o = r.cb, a = r.during, l = r.isFrom, s = r.removeOpt, r = r.dataIndex);
        var u, h = "update" === t, c = "remove" === t;
        if (i && i.ecModel) {
            var p = i.ecModel.getUpdatePayload();
            u = p && p.animation
        }
        var f = i && i.isAnimationEnabled();
        if (c || e.stopAnimation("remove"), f) {
            var d = void 0, g = void 0, y = void 0;
            u ? (d = u.duration || 0, g = u.easing || "cubicOut", y = u.delay || 0) : c ? (s = s || {}, d = N(s.duration, 200), g = N(s.easing, "cubicOut"), y = 0) : (d = i.getShallow(h ? "animationDurationUpdate" : "animationDuration"), g = i.getShallow(h ? "animationEasingUpdate" : "animationEasing"), y = i.getShallow(h ? "animationDelayUpdate" : "animationDelay")), "function" == typeof y && (y = y(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof d && (d = d(r)), d > 0 ? l ? e.animateFrom(n, {
                duration: d,
                delay: y || 0,
                easing: g,
                done: o,
                force: !!o || !!a,
                scope: t,
                during: a
            }) : e.animateTo(n, {
                duration: d,
                delay: y || 0,
                easing: g,
                done: o,
                force: !!o || !!a,
                setToFinal: !0,
                scope: t,
                during: a
            }) : (e.stopAnimation(), !l && e.attr(n), o && o())
        } else e.stopAnimation(), !l && e.attr(n), a && a(1), o && o()
    }

    function Qa(t, e, n, i, r, o) {
        $a("update", t, e, n, i, r, o)
    }

    function Ja(t, e, n, i, r, o) {
        $a("init", t, e, n, i, r, o)
    }

    function ts(t, e, n, i, r, o) {
        is(t) || $a("remove", t, e, n, i, r, o)
    }

    function es(t, e, n, i) {
        t.removeTextContent(), t.removeTextGuideLine(), ts(t, {style: {opacity: 0}}, e, n, i)
    }

    function ns(t, e, n) {
        function i() {
            t.parent && t.parent.remove(t)
        }

        t.isGroup ? t.traverse(function (t) {
            t.isGroup || es(t, e, n, i)
        }) : es(t, e, n, i)
    }

    function is(t) {
        if (!t.__zr) return !0;
        for (var e = 0; e < t.animators.length; e++) {
            var n = t.animators[e];
            if ("remove" === n.scope) return !0
        }
        return !1
    }

    function rs(t, e) {
        for (var n = Fe([]); t && t !== e;) He(n, t.getLocalTransform(), n), t = t.parent;
        return n
    }

    function os(t, e, n) {
        return e && !g(e) && (e = vv.getLocalTransform(e)), n && (e = Ye([], e)), ge([], t, e)
    }

    function as(t, e, n) {
        var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
            r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
            o = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];
        return o = os(o, e, n), Math.abs(o[0]) > Math.abs(o[1]) ? o[0] > 0 ? "right" : "left" : o[1] > 0 ? "bottom" : "top"
    }

    function ss(t) {
        return !t.isGroup
    }

    function ls(t) {
        return null != t.shape
    }

    function us(t, e, n) {
        function i(t) {
            var e = {};
            return t.traverse(function (t) {
                ss(t) && t.anid && (e[t.anid] = t)
            }), e
        }

        function r(t) {
            var e = {x: t.x, y: t.y, rotation: t.rotation};
            return ls(t) && (e.shape = h({}, t.shape)), e
        }

        if (t && e) {
            var o = i(t);
            e.traverse(function (t) {
                if (ss(t) && t.anid) {
                    var e = o[t.anid];
                    if (e) {
                        var i = r(t);
                        t.attr(r(e)), Qa(t, i, n, cx(t).dataIndex)
                    }
                }
            })
        }
    }

    function hs(t, e) {
        return v(t, function (t) {
            var n = t[0];
            n = kw(n, e.x), n = Lw(n, e.x + e.width);
            var i = t[1];
            return i = kw(i, e.y), i = Lw(i, e.y + e.height), [n, i]
        })
    }

    function cs(t, e) {
        var n = kw(t.x, e.x), i = Lw(t.x + t.width, e.x + e.width), r = kw(t.y, e.y),
            o = Lw(t.y + t.height, e.y + e.height);
        return i >= n && o >= r ? {x: n, y: r, width: i - n, height: o - r} : void 0
    }

    function ps(t, e, n) {
        var i = h({rectHover: !0}, e), r = i.style = {strokeNoScale: !0};
        return n = n || {
            x: -1,
            y: -1,
            width: 2,
            height: 2
        }, t ? 0 === t.indexOf("image://") ? (r.image = t.slice(8), c(r, n), new tx(i)) : Ya(t.replace("path://", ""), i, n, "center") : void 0
    }

    function fs(t, e, n, i, r) {
        for (var o = 0, a = r[r.length - 1]; o < r.length; o++) {
            var s = r[o];
            if (ds(t, e, n, i, s[0], s[1], a[0], a[1])) return !0;
            a = s
        }
    }

    function ds(t, e, n, i, r, o, a, s) {
        var l = n - t, u = i - e, h = a - r, c = s - o, p = gs(h, c, l, u);
        if (ys(p)) return !1;
        var f = t - r, d = e - o, g = gs(f, d, l, u) / p;
        if (0 > g || g > 1) return !1;
        var y = gs(f, d, h, c) / p;
        return 0 > y || y > 1 ? !1 : !0
    }

    function gs(t, e, n, i) {
        return t * i - n * e
    }

    function ys(t) {
        return 1e-6 >= t && t >= -1e-6
    }

    function vs(t, e) {
        for (var n = 0; n < mx.length; n++) {
            var i = mx[n], r = e[i], o = t.ensureState(i);
            o.style = o.style || {}, o.style.text = r
        }
        var a = t.currentStates.slice();
        t.clearStates(!0), t.setStyle({text: e.normal}), t.useStates(a, !0)
    }

    function ms(t, e, n) {
        var i, r = t.labelFetcher, o = t.labelDataIndex, a = t.labelDimIndex, s = e.normal;
        r && (i = r.getFormattedLabel(o, "normal", null, a, s && s.get("formatter"), null != n ? {interpolatedValue: n} : null)), null == i && (i = M(t.defaultText) ? t.defaultText(o, t, n) : t.defaultText);
        for (var l = {normal: i}, u = 0; u < mx.length; u++) {
            var h = mx[u], c = e[h];
            l[h] = N(r ? r.getFormattedLabel(o, h, null, a, c && c.get("formatter")) : null, i)
        }
        return l
    }

    function _s(t, e, n, i) {
        n = n || zw;
        for (var r = t instanceof lx, o = !1, a = 0; a < _x.length; a++) {
            var s = e[_x[a]];
            if (s && s.getShallow("show")) {
                o = !0;
                break
            }
        }
        var l = r ? t : t.getTextContent();
        if (o) {
            r || (l || (l = new lx, t.setTextContent(l)), t.stateProxy && (l.stateProxy = t.stateProxy));
            var u = ms(n, e), h = e.normal, c = !!h.getShallow("show"), p = ws(h, i && i.normal, n, !1, !r);
            p.text = u.normal, r || t.setTextConfig(bs(h, n, !1));
            for (var a = 0; a < mx.length; a++) {
                var f = mx[a], s = e[f];
                if (s) {
                    var d = l.ensureState(f), g = !!N(s.getShallow("show"), c);
                    if (g !== c && (d.ignore = !g), d.style = ws(s, i && i[f], n, !0, !r), d.style.text = u[f], !r) {
                        var y = t.ensureState(f);
                        y.textConfig = bs(s, n, !0)
                    }
                }
            }
            l.silent = !!h.getShallow("silent"), null != l.style.x && (p.x = l.style.x), null != l.style.y && (p.y = l.style.y), l.ignore = !c, l.useStyle(p), l.dirty(), n.enableTextSetter && (Hw(l).setLabelText = function (t) {
                var i = ms(n, e, t);
                vs(l, i)
            })
        } else l && (l.ignore = !0);
        t.dirty()
    }

    function xs(t, e) {
        e = e || "label";
        for (var n = {normal: t.getModel(e)}, i = 0; i < mx.length; i++) {
            var r = mx[i];
            n[r] = t.getModel([r, e])
        }
        return n
    }

    function ws(t, e, n, i, r) {
        var o = {};
        return Ss(o, t, n, i, r), e && h(o, e), o
    }

    function bs(t, e, n) {
        e = e || {};
        var i, r = {}, o = t.getShallow("rotate"), a = N(t.getShallow("distance"), n ? null : 5),
            s = t.getShallow("offset");
        return i = t.getShallow("position") || (n ? null : "inside"), "outside" === i && (i = e.defaultOutsidePosition || "top"), null != i && (r.position = i), null != s && (r.offset = s), null != o && (o *= Math.PI / 180, r.rotation = o), null != a && (r.distance = a), r.outsideFill = "inherit" === t.get("color") ? e.inheritColor || null : "auto", r
    }

    function Ss(t, e, n, i, r) {
        n = n || zw;
        var o, a = e.ecModel, s = a && a.option.textStyle, l = Ts(e);
        if (l) {
            o = {};
            for (var u in l) if (l.hasOwnProperty(u)) {
                var h = e.getModel(["rich", u]);
                Ms(o[u] = {}, h, s, n, i, r, !1, !0)
            }
        }
        o && (t.rich = o);
        var c = e.get("overflow");
        c && (t.overflow = c);
        var p = e.get("minMargin");
        null != p && (t.margin = p), Ms(t, e, s, n, i, r, !0, !1)
    }

    function Ts(t) {
        for (var e; t && t !== t.ecModel;) {
            var n = (t.option || zw).rich;
            if (n) {
                e = e || {};
                for (var i = w(n), r = 0; r < i.length; r++) {
                    var o = i[r];
                    e[o] = 1
                }
            }
            t = t.parentModel
        }
        return e
    }

    function Ms(t, e, n, i, r, o, a, s) {
        n = !r && n || zw;
        var l = i && i.inheritColor, u = e.getShallow("color"), h = e.getShallow("textBorderColor"),
            c = N(e.getShallow("opacity"), n.opacity);
        ("inherit" === u || "auto" === u) && (u = l ? l : null), ("inherit" === h || "auto" === h) && (h = l ? l : null), o || (u = u || n.color, h = h || n.textBorderColor), null != u && (t.fill = u), null != h && (t.stroke = h);
        var p = N(e.getShallow("textBorderWidth"), n.textBorderWidth);
        null != p && (t.lineWidth = p);
        var f = N(e.getShallow("textBorderType"), n.textBorderType);
        null != f && (t.lineDash = f);
        var d = N(e.getShallow("textBorderDashOffset"), n.textBorderDashOffset);
        null != d && (t.lineDashOffset = d), r || null != c || s || (c = i && i.defaultOpacity), null != c && (t.opacity = c), r || o || null == t.fill && i.inheritColor && (t.fill = i.inheritColor);
        for (var g = 0; g < Nw.length; g++) {
            var y = Nw[g], v = N(e.getShallow(y), n[y]);
            null != v && (t[y] = v)
        }
        for (var g = 0; g < Fw.length; g++) {
            var y = Fw[g], v = e.getShallow(y);
            null != v && (t[y] = v)
        }
        if (null == t.verticalAlign) {
            var m = e.getShallow("baseline");
            null != m && (t.verticalAlign = m)
        }
        if (!a || !i.disableBox) {
            for (var g = 0; g < Vw.length; g++) {
                var y = Vw[g], v = e.getShallow(y);
                null != v && (t[y] = v)
            }
            var _ = e.getShallow("borderType");
            null != _ && (t.borderDash = _), "auto" !== t.backgroundColor && "inherit" !== t.backgroundColor || !l || (t.backgroundColor = l), "auto" !== t.borderColor && "inherit" !== t.borderColor || !l || (t.borderColor = l)
        }
    }

    function Cs(t, e) {
        var n = e && e.getModel("textStyle");
        return G([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "))
    }

    function Is(t, e, n, i) {
        if (t) {
            var r = Hw(t);
            r.prevValue = r.value, r.value = n;
            var o = e.normal;
            r.valueAnimation = o.get("valueAnimation"), r.valueAnimation && (r.precision = o.get("precision"), r.defaultInterpolatedText = i, r.statesModels = e)
        }
    }

    function Ds(t, e, n, i, r) {
        function o(i) {
            var o = cr(n, a.precision, l, u, i);
            a.interpolatedValue = 1 === i ? null : o;
            var h = ms({labelDataIndex: e, labelFetcher: r, defaultText: s ? s(o) : o + ""}, a.statesModels, o);
            vs(t, h)
        }

        var a = Hw(t);
        if (a.valueAnimation) {
            var s = a.defaultInterpolatedText, l = N(a.interpolatedValue, a.prevValue), u = a.value;
            (null == l ? Ja : Qa)(t, {}, i, e, null, o)
        }
    }

    function As(t) {
        return [t || "", Qw++].join("_")
    }

    function ks(t) {
        var e = {};
        t.registerSubTypeDefaulter = function (t, n) {
            var i = pr(t);
            e[i.main] = n
        }, t.determineSubType = function (n, i) {
            var r = i.type;
            if (!r) {
                var o = pr(n).main;
                t.hasSubTypes(n) && e[o] && (r = e[o](i))
            }
            return r
        }
    }

    function Ls(t, e) {
        function n(t) {
            var n = {}, o = [];
            return y(t, function (a) {
                var s = i(n, a), l = s.originalDeps = e(a), u = r(l, t);
                s.entryCount = u.length, 0 === s.entryCount && o.push(a), y(u, function (t) {
                    p(s.predecessor, t) < 0 && s.predecessor.push(t);
                    var e = i(n, t);
                    p(e.successor, t) < 0 && e.successor.push(a)
                })
            }), {graph: n, noEntryList: o}
        }

        function i(t, e) {
            return t[e] || (t[e] = {predecessor: [], successor: []}), t[e]
        }

        function r(t, e) {
            var n = [];
            return y(t, function (t) {
                p(e, t) >= 0 && n.push(t)
            }), n
        }

        t.topologicalTravel = function (t, e, i, r) {
            function o(t) {
                l[t].entryCount--, 0 === l[t].entryCount && u.push(t)
            }

            function a(t) {
                h[t] = !0, o(t)
            }

            if (t.length) {
                var s = n(e), l = s.graph, u = s.noEntryList, h = {};
                for (y(t, function (t) {
                    h[t] = !0
                }); u.length;) {
                    var c = u.pop(), p = l[c], f = !!h[c];
                    f && (i.call(r, c, p.originalDeps.slice()), delete h[c]), y(p.successor, f ? a : o)
                }
                y(h, function () {
                    var t = "";
                    throw new Error(t)
                })
            }
        }
    }

    function Ps(t, e) {
        return l(l({}, t, !0), e, !0)
    }

    function Os(t, e) {
        t = t.toUpperCase(), ob[t] = new $w(e), rb[t] = e
    }

    function Rs(t) {
        if (C(t)) {
            var e = rb[t.toUpperCase()] || {};
            return t === eb || t === nb ? s(e) : l(s(e), s(rb[ib]), !1)
        }
        return l(s(t), s(rb[ib]), !1)
    }

    function Bs(t) {
        return ob[t]
    }

    function Es() {
        return ob[ib]
    }

    function zs(t, e) {
        return t += "", "0000".substr(0, e - t.length) + t
    }

    function Ns(t) {
        switch (t) {
            case "half-year":
            case "quarter":
                return "month";
            case "week":
            case "half-week":
                return "day";
            case "half-day":
            case "quarter-day":
                return "hour";
            default:
                return t
        }
    }

    function Fs(t) {
        return t === Ns(t)
    }

    function Vs(t) {
        switch (t) {
            case "year":
            case "month":
                return "day";
            case "millisecond":
                return "millisecond";
            default:
                return "second"
        }
    }

    function Hs(t, e, n, i) {
        var r = Di(t), o = r[Ys(n)](), a = r[Xs(n)]() + 1, s = Math.floor((a - 1) / 4) + 1, l = r[js(n)](),
            u = r["get" + (n ? "UTC" : "") + "Day"](), h = r[qs(n)](), c = (h - 1) % 12 + 1, p = r[Zs(n)](),
            f = r[Ks(n)](), d = r[$s(n)](), g = i instanceof $w ? i : Bs(i || ab) || Es(), y = g.getModel("time"),
            v = y.get("month"), m = y.get("monthAbbr"), _ = y.get("dayOfWeek"), x = y.get("dayOfWeekAbbr");
        return (e || "").replace(/{yyyy}/g, o + "").replace(/{yy}/g, o % 100 + "").replace(/{Q}/g, s + "").replace(/{MMMM}/g, v[a - 1]).replace(/{MMM}/g, m[a - 1]).replace(/{MM}/g, zs(a, 2)).replace(/{M}/g, a + "").replace(/{dd}/g, zs(l, 2)).replace(/{d}/g, l + "").replace(/{eeee}/g, _[u]).replace(/{ee}/g, x[u]).replace(/{e}/g, u + "").replace(/{HH}/g, zs(h, 2)).replace(/{H}/g, h + "").replace(/{hh}/g, zs(c + "", 2)).replace(/{h}/g, c + "").replace(/{mm}/g, zs(p, 2)).replace(/{m}/g, p + "").replace(/{ss}/g, zs(f, 2)).replace(/{s}/g, f + "").replace(/{SSS}/g, zs(d, 3)).replace(/{S}/g, d + "")
    }

    function Ws(t, e, n, i, r) {
        var o = null;
        if ("string" == typeof n) o = n; else if ("function" == typeof n) o = n(t.value, e, {level: t.level}); else {
            var a = h({}, pb);
            if (t.level > 0) for (var s = 0; s < gb.length; ++s) a[gb[s]] = "{primary|" + a[gb[s]] + "}";
            var l = n ? n.inherit === !1 ? n : c(n, a) : a, u = Gs(t.value, r);
            if (l[u]) o = l[u]; else if (l.inherit) {
                for (var p = yb.indexOf(u), s = p - 1; s >= 0; --s) if (l[u]) {
                    o = l[u];
                    break
                }
                o = o || a.none
            }
            if (T(o)) {
                var f = null == t.level ? 0 : t.level >= 0 ? t.level : o.length + t.level;
                f = Math.min(f, o.length - 1), o = o[f]
            }
        }
        return Hs(new Date(t.value), o, r, i)
    }

    function Gs(t, e) {
        var n = Di(t), i = n[Xs(e)]() + 1, r = n[js(e)](), o = n[qs(e)](), a = n[Zs(e)](), s = n[Ks(e)](),
            l = n[$s(e)](), u = 0 === l, h = u && 0 === s, c = h && 0 === a, p = c && 0 === o, f = p && 1 === r,
            d = f && 1 === i;
        return d ? "year" : f ? "month" : p ? "day" : c ? "hour" : h ? "minute" : u ? "second" : "millisecond"
    }

    function Us(t, e, n) {
        var i = "number" == typeof t ? Di(t) : t;
        switch (e = e || Gs(t, n)) {
            case "year":
                return i[Ys(n)]();
            case "half-year":
                return i[Xs(n)]() >= 6 ? 1 : 0;
            case "quarter":
                return Math.floor((i[Xs(n)]() + 1) / 4);
            case "month":
                return i[Xs(n)]();
            case "day":
                return i[js(n)]();
            case "half-day":
                return i[qs(n)]() / 24;
            case "hour":
                return i[qs(n)]();
            case "minute":
                return i[Zs(n)]();
            case "second":
                return i[Ks(n)]();
            case "millisecond":
                return i[$s(n)]()
        }
    }

    function Ys(t) {
        return t ? "getUTCFullYear" : "getFullYear"
    }

    function Xs(t) {
        return t ? "getUTCMonth" : "getMonth"
    }

    function js(t) {
        return t ? "getUTCDate" : "getDate"
    }

    function qs(t) {
        return t ? "getUTCHours" : "getHours"
    }

    function Zs(t) {
        return t ? "getUTCMinutes" : "getMinutes"
    }

    function Ks(t) {
        return t ? "getUTCSeconds" : "getSeconds"
    }

    function $s(t) {
        return t ? "getUTCSeconds" : "getSeconds"
    }

    function Qs(t) {
        return t ? "setUTCFullYear" : "setFullYear"
    }

    function Js(t) {
        return t ? "setUTCMonth" : "setMonth"
    }

    function tl(t) {
        return t ? "setUTCDate" : "setDate"
    }

    function el(t) {
        return t ? "setUTCHours" : "setHours"
    }

    function nl(t) {
        return t ? "setUTCMinutes" : "setMinutes"
    }

    function il(t) {
        return t ? "setUTCSeconds" : "setSeconds"
    }

    function rl(t) {
        return t ? "setUTCSeconds" : "setSeconds"
    }

    function ol(t, e, n, i, r, o, a, s) {
        var l = new lx({
            style: {
                text: t,
                font: e,
                align: n,
                verticalAlign: i,
                padding: r,
                rich: o,
                overflow: a ? "truncate" : null,
                lineHeight: s
            }
        });
        return l.getBoundingRect()
    }

    function al(t) {
        if (!Bi(t)) return C(t) ? t : "-";
        var e = (t + "").split(".");
        return e[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (e.length > 1 ? "." + e[1] : "")
    }

    function sl(t, e) {
        return t = (t || "").toLowerCase().replace(/-(.)/g, function (t, e) {
            return e.toUpperCase()
        }), e && t && (t = t.charAt(0).toUpperCase() + t.slice(1)), t
    }

    function ll(t) {
        return null == t ? "" : (t + "").replace(mb, function (t, e) {
            return _b[e]
        })
    }

    function ul(t, e, n) {
        function i(t) {
            return t && G(t) ? t : "-"
        }

        function r(t) {
            return !(null == t || isNaN(t) || !isFinite(t))
        }

        var o = "yyyy-MM-dd hh:mm:ss", a = "time" === e, s = t instanceof Date;
        if (a || s) {
            var l = a ? Di(t) : t;
            if (!isNaN(+l)) return Hs(l, o, n);
            if (s) return "-"
        }
        if ("ordinal" === e) return I(t) ? i(t) : D(t) && r(t) ? t + "" : "-";
        var u = Ri(t);
        return r(u) ? al(u) : I(t) ? i(t) : "-"
    }

    function hl(t, e, n) {
        T(e) || (e = [e]);
        var i = e.length;
        if (!i) return "";
        for (var r = e[0].$vars || [], o = 0; o < r.length; o++) {
            var a = xb[o];
            t = t.replace(wb(a), wb(a, 0))
        }
        for (var s = 0; i > s; s++) for (var l = 0; l < r.length; l++) {
            var u = e[s][r[l]];
            t = t.replace(wb(xb[l], s), n ? ll(u) : u)
        }
        return t
    }

    function cl(t, e) {
        var n = C(t) ? {color: t, extraCssText: e} : t || {}, i = n.color, r = n.type;
        e = n.extraCssText;
        var o = n.renderMode || "html";
        if (!i) return "";
        if ("html" === o) return "subItem" === r ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + ll(i) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:4px;border-radius:10px;width:10px;height:10px;background-color:' + ll(i) + ";" + (e || "") + '"></span>';
        var a = n.markerId || "markerX";
        return {
            renderMode: o,
            content: "{" + a + "|}  ",
            style: "subItem" === r ? {width: 4, height: 4, borderRadius: 2, backgroundColor: i} : {
                width: 10,
                height: 10,
                borderRadius: 5,
                backgroundColor: i
            }
        }
    }

    function pl(t, e, n) {
        ("week" === t || "month" === t || "quarter" === t || "half-year" === t || "year" === t) && (t = "MM-dd\nyyyy");
        var i = Di(e), r = n ? "UTC" : "", o = i["get" + r + "FullYear"](), a = i["get" + r + "Month"]() + 1,
            s = i["get" + r + "Date"](), l = i["get" + r + "Hours"](), u = i["get" + r + "Minutes"](),
            h = i["get" + r + "Seconds"](), c = i["get" + r + "Milliseconds"]();
        return t = t.replace("MM", zs(a, 2)).replace("M", a).replace("yyyy", o).replace("yy", o % 100 + "").replace("dd", zs(s, 2)).replace("d", s).replace("hh", zs(l, 2)).replace("h", l).replace("mm", zs(u, 2)).replace("m", u).replace("ss", zs(h, 2)).replace("s", h).replace("SSS", zs(c, 3))
    }

    function fl(t) {
        return t ? t.charAt(0).toUpperCase() + t.substr(1) : t
    }

    function dl(t, e) {
        return e = e || "transparent", C(t) ? t : A(t) ? t.colorStops && (t.colorStops[0] || {}).color || e : e
    }

    function gl(t, e) {
        if ("_blank" === e || "blank" === e) {
            var n = window.open();
            n.opener = null, n.location.href = t
        } else window.open(t, e)
    }

    function yl(t, e, n, i, r) {
        var o = 0, a = 0;
        null == i && (i = 1 / 0), null == r && (r = 1 / 0);
        var s = 0;
        e.eachChild(function (l, u) {
            var h, c, p = l.getBoundingRect(), f = e.childAt(u + 1), d = f && f.getBoundingRect();
            if ("horizontal" === t) {
                var g = p.width + (d ? -d.x + p.x : 0);
                h = o + g, h > i || l.newline ? (o = 0, h = g, a += s + n, s = p.height) : s = Math.max(s, p.height)
            } else {
                var y = p.height + (d ? -d.y + p.y : 0);
                c = a + y, c > r || l.newline ? (o += s + n, a = 0, c = y, s = p.width) : s = Math.max(s, p.width)
            }
            l.newline || (l.x = o, l.y = a, l.markRedraw(), "horizontal" === t ? o = h + n : a = c + n)
        })
    }

    function vl(t, e, n) {
        n = vb(n || 0);
        var i = e.width, r = e.height, o = _i(t.left, i), a = _i(t.top, r), s = _i(t.right, i), l = _i(t.bottom, r),
            u = _i(t.width, i), h = _i(t.height, r), c = n[2] + n[0], p = n[1] + n[3], f = t.aspect;
        switch (isNaN(u) && (u = i - s - p - o), isNaN(h) && (h = r - l - c - a), null != f && (isNaN(u) && isNaN(h) && (f > i / r ? u = .8 * i : h = .8 * r), isNaN(u) && (u = f * h), isNaN(h) && (h = u / f)), isNaN(o) && (o = i - s - u - p), isNaN(a) && (a = r - l - h - c), t.left || t.right) {
            case "center":
                o = i / 2 - u / 2 - n[3];
                break;
            case "right":
                o = i - u - p
        }
        switch (t.top || t.bottom) {
            case "middle":
            case "center":
                a = r / 2 - h / 2 - n[0];
                break;
            case "bottom":
                a = r - h - c
        }
        o = o || 0, a = a || 0, isNaN(u) && (u = i - p - o - (s || 0)), isNaN(h) && (h = r - c - a - (l || 0));
        var d = new Wv(o + n[3], a + n[0], u, h);
        return d.margin = n, d
    }

    function ml(t) {
        var e = t.layoutMode || t.constructor.layoutMode;
        return A(e) ? e : e ? {type: e} : null
    }

    function _l(t, e, n) {
        function i(n, i) {
            var a = {}, l = 0, u = {}, h = 0, c = 2;
            if (bb(n, function (e) {
                u[e] = t[e]
            }), bb(n, function (t) {
                r(e, t) && (a[t] = u[t] = e[t]), o(a, t) && l++, o(u, t) && h++
            }), s[i]) return o(e, n[1]) ? u[n[2]] = null : o(e, n[2]) && (u[n[1]] = null), u;
            if (h !== c && l) {
                if (l >= c) return a;
                for (var p = 0; p < n.length; p++) {
                    var f = n[p];
                    if (!r(a, f) && r(t, f)) {
                        a[f] = t[f];
                        break
                    }
                }
                return a
            }
            return u
        }

        function r(t, e) {
            return t.hasOwnProperty(e)
        }

        function o(t, e) {
            return null != t[e] && "auto" !== t[e]
        }

        function a(t, e, n) {
            bb(t, function (t) {
                e[t] = n[t]
            })
        }

        var s = n && n.ignoreSize;
        !T(s) && (s = [s, s]);
        var l = i(Tb[0], 0), u = i(Tb[1], 1);
        a(Tb[0], t, l), a(Tb[1], t, u)
    }

    function xl(t) {
        return wl({}, t)
    }

    function wl(t, e) {
        return e && t && bb(Sb, function (n) {
            e.hasOwnProperty(n) && (t[n] = e[n])
        }), t
    }

    function bl(t) {
        var e = [];
        return y(Ib.getClassesByMainType(t), function (t) {
            e = e.concat(t.dependencies || t.prototype.dependencies || [])
        }), e = v(e, function (t) {
            return pr(t).main
        }), "dataset" !== t && p(e, "dataset") <= 0 && e.unshift("dataset"), e
    }

    function Sl(t) {
        Gb(t).datasetMap = X()
    }

    function Tl(t, e, n) {
        function i(t, e, n) {
            for (var i = 0; n > i; i++) t.push(e + i)
        }

        function r(t) {
            var e = t.dimsDef;
            return e ? e.length : 1
        }

        var o = {}, a = Cl(e);
        if (!a || !t) return o;
        var s, l, u = [], h = [], c = e.ecModel, p = Gb(c).datasetMap, f = a.uid + "_" + n.seriesLayoutBy;
        t = t.slice(), y(t, function (e, n) {
            var i = A(e) ? e : t[n] = {name: e};
            "ordinal" === i.type && null == s && (s = n, l = r(i)), o[i.name] = []
        });
        var d = p.get(f) || p.set(f, {categoryWayDim: l, valueWayDim: 0});
        return y(t, function (t, e) {
            var n = t.name, a = r(t);
            if (null == s) {
                var l = d.valueWayDim;
                i(o[n], l, a), i(h, l, a), d.valueWayDim += a
            } else if (s === e) i(o[n], 0, a), i(u, 0, a); else {
                var l = d.categoryWayDim;
                i(o[n], l, a), i(h, l, a), d.categoryWayDim += a
            }
        }), u.length && (o.itemName = u), h.length && (o.seriesName = h), o
    }

    function Ml(t, e, n) {
        var i = {}, r = Cl(t);
        if (!r) return i;
        var o, a = e.sourceFormat, s = e.dimensionsDefine;
        (a === Eb || a === zb) && y(s, function (t, e) {
            "name" === (A(t) ? t.name : t) && (o = e)
        });
        var l = function () {
            function t(t) {
                return null != t.v && null != t.n
            }

            for (var i = {}, r = {}, l = [], u = 0, h = Math.min(5, n); h > u; u++) {
                var c = Al(e.data, a, e.seriesLayoutBy, s, e.startIndex, u);
                l.push(c);
                var p = c === Wb.Not;
                if (p && null == i.v && u !== o && (i.v = u), (null == i.n || i.n === i.v || !p && l[i.n] === Wb.Not) && (i.n = u), t(i) && l[i.n] !== Wb.Not) return i;
                p || (c === Wb.Might && null == r.v && u !== o && (r.v = u), (null == r.n || r.n === r.v) && (r.n = u))
            }
            return t(i) ? i : t(r) ? r : null
        }();
        if (l) {
            i.value = [l.v];
            var u = null != o ? o : l.n;
            i.itemName = [u], i.seriesName = [u]
        }
        return i
    }

    function Cl(t) {
        var e = t.get("data", !0);
        return e ? void 0 : sr(t.ecModel, "dataset", {
            index: t.get("datasetIndex", !0),
            id: t.get("datasetId", !0)
        }, Bm).models[0]
    }

    function Il(t) {
        return t.get("transform", !0) || t.get("fromTransformResult", !0) ? sr(t.ecModel, "dataset", {
            index: t.get("fromDatasetIndex", !0),
            id: t.get("fromDatasetId", !0)
        }, Bm).models : []
    }

    function Dl(t, e) {
        return Al(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
    }

    function Al(t, e, n, i, r, o) {
        function a(t) {
            var e = C(t);
            return null != t && isFinite(t) && "" !== t ? e ? Wb.Might : Wb.Not : e && "-" !== t ? Wb.Must : void 0
        }

        var s, l = 5;
        if (L(t)) return Wb.Not;
        var u, h;
        if (i) {
            var c = i[o];
            A(c) ? (u = c.name, h = c.type) : C(c) && (u = c)
        }
        if (null != h) return "ordinal" === h ? Wb.Must : Wb.Not;
        if (e === Bb) {
            var p = t;
            if (n === Hb) {
                for (var f = p[o], d = 0; d < (f || []).length && l > d; d++) if (null != (s = a(f[r + d]))) return s
            } else for (var d = 0; d < p.length && l > d; d++) {
                var g = p[r + d];
                if (g && null != (s = a(g[o]))) return s
            }
        } else if (e === Eb) {
            var y = t;
            if (!u) return Wb.Not;
            for (var d = 0; d < y.length && l > d; d++) {
                var v = y[d];
                if (v && null != (s = a(v[u]))) return s
            }
        } else if (e === zb) {
            var m = t;
            if (!u) return Wb.Not;
            var f = m[u];
            if (!f || L(f)) return Wb.Not;
            for (var d = 0; d < f.length && l > d; d++) if (null != (s = a(f[d]))) return s
        } else if (e === Rb) for (var _ = t, d = 0; d < _.length && l > d; d++) {
            var v = _[d], x = Wi(v);
            if (!T(x)) return Wb.Not;
            if (null != (s = a(x[o]))) return s
        }
        return Wb.Not
    }

    function kl(t, e, n) {
        var i = Ub.get(e);
        if (!i) return n;
        var r = i(t);
        return r ? n.concat(r) : n
    }

    function Ll(t, e) {
        for (var n = t.length, i = 0; n > i; i++) if (t[i].length > e) return t[i];
        return t[n - 1]
    }

    function Pl(t, e, n, i, r, o, a) {
        o = o || t;
        var s = e(o), l = s.paletteIdx || 0, u = s.paletteNameMap = s.paletteNameMap || {};
        if (u.hasOwnProperty(r)) return u[r];
        var h = null != a && i ? Ll(i, a) : n;
        if (h = h || n, h && h.length) {
            var c = h[l];
            return r && (u[r] = c), s.paletteIdx = (l + 1) % h.length, c
        }
    }

    function Ol(t, e) {
        e(t).paletteIdx = 0, e(t).paletteNameMap = {}
    }

    function Rl(t, e) {
        if (e) {
            var n = e.seriesIndex, i = e.seriesId, r = e.seriesName;
            return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r
        }
    }

    function Bl(t, e) {
        var n = t.color && !t.colorLayer;
        y(e, function (e, i) {
            "colorLayer" === i && n || Ib.hasClass(i) || ("object" == typeof e ? t[i] = t[i] ? l(t[i], e, !1) : s(e) : null == t[i] && (t[i] = e))
        })
    }

    function El(t, e, n) {
        if (T(e)) {
            var i = X();
            return y(e, function (t) {
                if (null != t) {
                    var e = Ji(t, null);
                    null != e && i.set(t, !0)
                }
            }), _(n, function (e) {
                return e && i.get(e[t])
            })
        }
        var r = Ji(e, null);
        return _(n, function (e) {
            return e && null != r && e[t] === r
        })
    }

    function zl(t, e) {
        return e.hasOwnProperty("subType") ? _(t, function (t) {
            return t && t.subType === e.subType
        }) : t
    }

    function Nl(t) {
        var e = X();
        return t && y(Vi(t.replaceMerge), function (t) {
            e.set(t, !0)
        }), {replaceMergeMainTypeMap: e}
    }

    function Fl(t, e, n) {
        function i(t) {
            y(e, function (e) {
                e(t, n)
            })
        }

        var r, o, a = [], s = t.baseOption, l = t.timeline, u = t.options, h = t.media, c = !!t.media,
            p = !!(u || l || s && s.timeline);
        return s ? (o = s, o.timeline || (o.timeline = l)) : ((p || c) && (t.options = t.media = null), o = t), c && T(h) && y(h, function (t) {
            t && t.option && (t.query ? a.push(t) : r || (r = t))
        }), i(o), y(u, function (t) {
            return i(t)
        }), y(a, function (t) {
            return i(t.option)
        }), {baseOption: o, timelineOptions: u || [], mediaDefault: r, mediaList: a}
    }

    function Vl(t, e, n) {
        var i = {width: e, height: n, aspectratio: e / n}, r = !0;
        return y(t, function (t, e) {
            var n = e.match(oS);
            if (n && n[1] && n[2]) {
                var o = n[1], a = n[2].toLowerCase();
                Hl(i[a], t, o) || (r = !1)
            }
        }), r
    }

    function Hl(t, e, n) {
        return "min" === n ? t >= e : "max" === n ? e >= t : t === e
    }

    function Wl(t, e) {
        return t.join(",") === e.join(",")
    }

    function Gl(t) {
        var e = t && t.itemStyle;
        if (e) for (var n = 0, i = uS.length; i > n; n++) {
            var r = uS[n], o = e.normal, a = e.emphasis;
            o && o[r] && (t[r] = t[r] || {}, t[r].normal ? l(t[r].normal, o[r]) : t[r].normal = o[r], o[r] = null), a && a[r] && (t[r] = t[r] || {}, t[r].emphasis ? l(t[r].emphasis, a[r]) : t[r].emphasis = a[r], a[r] = null)
        }
    }

    function Ul(t, e, n) {
        if (t && t[e] && (t[e].normal || t[e].emphasis)) {
            var i = t[e].normal, r = t[e].emphasis;
            i && (n ? (t[e].normal = t[e].emphasis = null, c(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r, r.focus && (t.emphasis.focus = r.focus), r.blurScope && (t.emphasis.blurScope = r.blurScope))
        }
    }

    function Yl(t) {
        Ul(t, "itemStyle"), Ul(t, "lineStyle"), Ul(t, "areaStyle"), Ul(t, "label"), Ul(t, "labelLine"), Ul(t, "upperLabel"), Ul(t, "edgeLabel")
    }

    function Xl(t, e) {
        var n = lS(t) && t[e], i = lS(n) && n.textStyle;
        if (i) for (var r = 0, o = Om.length; o > r; r++) {
            var a = Om[r];
            i.hasOwnProperty(a) && (n[a] = i[a])
        }
    }

    function jl(t) {
        t && (Yl(t), Xl(t, "label"), t.emphasis && Xl(t.emphasis, "label"))
    }

    function ql(t) {
        if (lS(t)) {
            Gl(t), Yl(t), Xl(t, "label"), Xl(t, "upperLabel"), Xl(t, "edgeLabel"), t.emphasis && (Xl(t.emphasis, "label"), Xl(t.emphasis, "upperLabel"), Xl(t.emphasis, "edgeLabel"));
            var e = t.markPoint;
            e && (Gl(e), jl(e));
            var n = t.markLine;
            n && (Gl(n), jl(n));
            var i = t.markArea;
            i && jl(i);
            var r = t.data;
            if ("graph" === t.type) {
                r = r || t.nodes;
                var o = t.links || t.edges;
                if (o && !L(o)) for (var a = 0; a < o.length; a++) jl(o[a]);
                y(t.categories, function (t) {
                    Yl(t)
                })
            }
            if (r && !L(r)) for (var a = 0; a < r.length; a++) jl(r[a]);
            if (e = t.markPoint, e && e.data) for (var s = e.data, a = 0; a < s.length; a++) jl(s[a]);
            if (n = t.markLine, n && n.data) for (var l = n.data, a = 0; a < l.length; a++) T(l[a]) ? (jl(l[a][0]), jl(l[a][1])) : jl(l[a]);
            "gauge" === t.type ? (Xl(t, "axisLabel"), Xl(t, "title"), Xl(t, "detail")) : "treemap" === t.type ? (Ul(t.breadcrumb, "itemStyle"), y(t.levels, function (t) {
                Yl(t)
            })) : "tree" === t.type && Yl(t.leaves)
        }
    }

    function Zl(t) {
        return T(t) ? t : t ? [t] : []
    }

    function Kl(t) {
        return (T(t) ? t[0] : t) || {}
    }

    function $l(t, e) {
        sS(Zl(t.series), function (t) {
            lS(t) && ql(t)
        });
        var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
        e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), sS(n, function (e) {
            sS(Zl(t[e]), function (t) {
                t && (Xl(t, "axisLabel"), Xl(t.axisPointer, "label"))
            })
        }), sS(Zl(t.parallel), function (t) {
            var e = t && t.parallelAxisDefault;
            Xl(e, "axisLabel"), Xl(e && e.axisPointer, "label")
        }), sS(Zl(t.calendar), function (t) {
            Ul(t, "itemStyle"), Xl(t, "dayLabel"), Xl(t, "monthLabel"), Xl(t, "yearLabel")
        }), sS(Zl(t.radar), function (t) {
            Xl(t, "name"), t.name && null == t.axisName && (t.axisName = t.name, delete t.name), null != t.nameGap && null == t.axisNameGap && (t.axisNameGap = t.nameGap, delete t.nameGap)
        }), sS(Zl(t.geo), function (t) {
            lS(t) && (jl(t), sS(Zl(t.regions), function (t) {
                jl(t)
            }))
        }), sS(Zl(t.timeline), function (t) {
            jl(t), Ul(t, "label"), Ul(t, "itemStyle"), Ul(t, "controlStyle", !0);
            var e = t.data;
            T(e) && y(e, function (t) {
                A(t) && (Ul(t, "label"), Ul(t, "itemStyle"))
            })
        }), sS(Zl(t.toolbox), function (t) {
            Ul(t, "iconStyle"), sS(t.feature, function (t) {
                Ul(t, "iconStyle")
            })
        }), Xl(Kl(t.axisPointer), "label"), Xl(Kl(t.tooltip).axisPointer, "label")
    }

    function Ql(t, e) {
        for (var n = e.split(","), i = t, r = 0; r < n.length && (i = i && i[n[r]], null != i); r++) ;
        return i
    }

    function Jl(t, e, n, i) {
        for (var r, o = e.split(","), a = t, s = 0; s < o.length - 1; s++) r = o[s], null == a[r] && (a[r] = {}), a = a[r];
        (i || null == a[o[s]]) && (a[o[s]] = n)
    }

    function tu(t) {
        t && y(hS, function (e) {
            e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
        })
    }

    function eu(t) {
        var e = t && t.itemStyle;
        if (e) for (var n = 0; n < pS.length; n++) {
            var i = pS[n][1], r = pS[n][0];
            null != e[i] && (e[r] = e[i])
        }
    }

    function nu(t) {
        t && "edge" === t.alignTo && null != t.margin && null == t.edgeDistance && (t.edgeDistance = t.margin)
    }

    function iu(t) {
        t && t.downplay && !t.blur && (t.blur = t.downplay)
    }

    function ru(t) {
        t && null != t.focusNodeAdjacency && (t.emphasis = t.emphasis || {}, null == t.emphasis.focus && (t.emphasis.focus = "adjacency"))
    }

    function ou(t, e) {
        if (t) for (var n = 0; n < t.length; n++) e(t[n]), t[n] && ou(t[n].children, e)
    }

    function au(t, e) {
        $l(t, e), t.series = Vi(t.series), y(t.series, function (t) {
            if (A(t)) {
                var e = t.type;
                if ("line" === e) null != t.clipOverflow && (t.clip = t.clipOverflow); else if ("pie" === e || "gauge" === e) {
                    null != t.clockWise && (t.clockwise = t.clockWise), nu(t.label);
                    var n = t.data;
                    if (n && !L(n)) for (var i = 0; i < n.length; i++) nu(n[i]);
                    null != t.hoverOffset && (t.emphasis = t.emphasis || {}, (t.emphasis.scaleSize = null) && (t.emphasis.scaleSize = t.hoverOffset))
                } else if ("gauge" === e) {
                    var r = Ql(t, "pointer.color");
                    null != r && Jl(t, "itemStyle.color", r)
                } else if ("bar" === e) {
                    eu(t), eu(t.backgroundStyle), eu(t.emphasis);
                    var n = t.data;
                    if (n && !L(n)) for (var i = 0; i < n.length; i++) "object" == typeof n[i] && (eu(n[i]), eu(n[i] && n[i].emphasis))
                } else if ("sunburst" === e) {
                    var o = t.highlightPolicy;
                    o && (t.emphasis = t.emphasis || {}, t.emphasis.focus || (t.emphasis.focus = o)), iu(t), ou(t.data, iu)
                } else "graph" === e || "sankey" === e ? ru(t) : "map" === e && (t.mapType && !t.map && (t.map = t.mapType), t.mapLocation && c(t, t.mapLocation));
                null != t.hoverAnimation && (t.emphasis = t.emphasis || {}, t.emphasis && null == t.emphasis.scale && (t.emphasis.scale = t.hoverAnimation)), tu(t)
            }
        }), t.dataRange && (t.visualMap = t.dataRange), y(cS, function (e) {
            var n = t[e];
            n && (T(n) || (n = [n]), y(n, function (t) {
                tu(t)
            }))
        })
    }

    function su(t) {
        var e = X();
        t.eachSeries(function (t) {
            var n = t.get("stack");
            if (n) {
                var i = e.get(n) || e.set(n, []), r = t.getData(), o = {
                    stackResultDimension: r.getCalculationInfo("stackResultDimension"),
                    stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
                    stackedDimension: r.getCalculationInfo("stackedDimension"),
                    stackedByDimension: r.getCalculationInfo("stackedByDimension"),
                    isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
                    data: r,
                    seriesModel: t
                };
                if (!o.stackedDimension || !o.isStackedByIndex && !o.stackedByDimension) return;
                i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(o)
            }
        }), e.each(lu)
    }

    function lu(t) {
        y(t, function (e, n) {
            var i = [], r = [0 / 0, 0 / 0], o = [e.stackResultDimension, e.stackedOverDimension], a = e.data,
                s = e.isStackedByIndex, l = a.map(o, function (o, l, u) {
                    var h = a.get(e.stackedDimension, u);
                    if (isNaN(h)) return r;
                    var c, p;
                    s ? p = a.getRawIndex(u) : c = a.get(e.stackedByDimension, u);
                    for (var f = 0 / 0, d = n - 1; d >= 0; d--) {
                        var g = t[d];
                        if (s || (p = g.data.rawIndexOf(g.stackedByDimension, c)), p >= 0) {
                            var y = g.data.getByRawIndex(g.stackResultDimension, p);
                            if (h >= 0 && y > 0 || 0 >= h && 0 > y) {
                                h += y, f = y;
                                break
                            }
                        }
                    }
                    return i[0] = h, i[1] = f, i
                });
            a.hostModel.setData(l), e.data = l
        })
    }

    function uu(t) {
        return t instanceof fS
    }

    function hu(t, e, n, i) {
        n = n || du(t);
        var r = e.seriesLayoutBy, o = gu(t, n, r, e.sourceHeader, e.dimensions), a = new fS({
            data: t,
            sourceFormat: n,
            seriesLayoutBy: r,
            dimensionsDefine: o.dimensionsDefine,
            startIndex: o.startIndex,
            dimensionsDetectedCount: o.dimensionsDetectedCount,
            encodeDefine: fu(i),
            metaRawOption: s(e)
        });
        return a
    }

    function cu(t) {
        return new fS({data: t, sourceFormat: L(t) ? Nb : Rb})
    }

    function pu(t) {
        return new fS({
            data: t.data,
            sourceFormat: t.sourceFormat,
            seriesLayoutBy: t.seriesLayoutBy,
            dimensionsDefine: s(t.dimensionsDefine),
            startIndex: t.startIndex,
            dimensionsDetectedCount: t.dimensionsDetectedCount,
            encodeDefine: fu(t.encodeDefine)
        })
    }

    function fu(t) {
        return t ? X(t) : null
    }

    function du(t) {
        var e = Fb;
        if (L(t)) e = Nb; else if (T(t)) {
            0 === t.length && (e = Bb);
            for (var n = 0, i = t.length; i > n; n++) {
                var r = t[n];
                if (null != r) {
                    if (T(r)) {
                        e = Bb;
                        break
                    }
                    if (A(r)) {
                        e = Eb;
                        break
                    }
                }
            }
        } else if (A(t)) for (var o in t) if (Z(t, o) && g(t[o])) {
            e = zb;
            break
        }
        return e
    }

    function gu(t, e, n, i, r) {
        var o, a;
        if (!t) return {dimensionsDefine: vu(r), startIndex: a, dimensionsDetectedCount: o};
        if (e === Bb) {
            var s = t;
            "auto" === i || null == i ? mu(function (t) {
                null != t && "-" !== t && (C(t) ? null == a && (a = 1) : a = 0)
            }, n, s, 10) : a = D(i) ? i : i ? 1 : 0, r || 1 !== a || (r = [], mu(function (t, e) {
                r[e] = null != t ? t + "" : ""
            }, n, s, 1 / 0)), o = r ? r.length : n === Hb ? s.length : s[0] ? s[0].length : null
        } else if (e === Eb) r || (r = yu(t)); else if (e === zb) r || (r = [], y(t, function (t, e) {
            r.push(e)
        })); else if (e === Rb) {
            var l = Wi(t[0]);
            o = T(l) && l.length || 1
        }
        return {startIndex: a, dimensionsDefine: vu(r), dimensionsDetectedCount: o}
    }

    function yu(t) {
        for (var e, n = 0; n < t.length && !(e = t[n++]);) ;
        if (e) {
            var i = [];
            return y(e, function (t, e) {
                i.push(e)
            }), i
        }
    }

    function vu(t) {
        if (t) {
            var e = X();
            return v(t, function (t) {
                t = A(t) ? t : {name: t};
                var n = {name: t.name, displayName: t.displayName, type: t.type};
                if (null == n.name) return n;
                n.name += "", null == n.displayName && (n.displayName = n.name);
                var i = e.get(n.name);
                return i ? n.name += "-" + i.count++ : e.set(n.name, {count: 1}), n
            })
        }
    }

    function mu(t, e, n, i) {
        if (e === Hb) for (var r = 0; r < n.length && i > r; r++) t(n[r] ? n[r][0] : null, r); else for (var o = n[0] || [], r = 0; r < o.length && i > r; r++) t(o[r], r)
    }

    function _u(t, e) {
        var n = yS[bu(t, e)];
        return n
    }

    function xu(t, e) {
        var n = mS[bu(t, e)];
        return n
    }

    function wu(t) {
        var e = xS[t];
        return e
    }

    function bu(t, e) {
        return t === Bb ? t + "_" + e : t
    }

    function Su(t, e, n) {
        if (t) {
            var i = t.getRawDataItem(e);
            if (null != i) {
                var r, o, a = t.getProvider().getSource().sourceFormat, s = t.getDimensionInfo(n);
                return s && (r = s.name, o = s.index), wu(a)(i, o, r)
            }
        }
    }

    function Tu(t) {
        var e, n;
        return A(t) ? t.type && (n = t) : e = t, {markupText: e, markupFragment: n}
    }

    function Mu(t) {
        return new SS(t)
    }

    function Cu(t, e) {
        var n = e && e.type;
        if ("ordinal" === n) {
            var i = e && e.ordinalMeta;
            return i ? i.parseAndCollect(t) : t
        }
        return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +Di(t)), null == t || "" === t ? 0 / 0 : +t
    }

    function Iu(t, e) {
        var n = new IS, i = t.data, r = n.sourceFormat = t.sourceFormat, o = t.startIndex, a = "";
        t.seriesLayoutBy !== Vb && Fi(a);
        var s = [], l = {}, u = t.dimensionsDefine;
        if (u) y(u, function (t, e) {
            var n = t.name, i = {index: e, name: n, displayName: t.displayName};
            if (s.push(i), null != n) {
                var r = "";
                Z(l, n) && Fi(r), l[n] = i
            }
        }); else for (var h = 0; h < t.dimensionsDetectedCount; h++) s.push({index: h});
        var c = _u(r, Vb);
        e.__isBuiltIn && (n.getRawDataItem = function (t) {
            return c(i, o, s, t)
        }, n.getRawData = Ey(Du, null, t)), n.cloneRawData = Ey(Au, null, t);
        var p = xu(r, Vb);
        n.count = Ey(p, null, i, o, s);
        var f = wu(r);
        n.retrieveValue = function (t, e) {
            var n = c(i, o, s, t);
            return d(n, e)
        };
        var d = n.retrieveValueFromItem = function (t, e) {
            if (null != t) {
                var n = s[e];
                return n ? f(t, e, n.name) : void 0
            }
        };
        return n.getDimensionInfo = Ey(ku, null, s, l), n.cloneAllDimensionInfo = Ey(Lu, null, s), n
    }

    function Du(t) {
        var e = t.sourceFormat;
        if (!Bu(e)) {
            var n = "";
            Fi(n)
        }
        return t.data
    }

    function Au(t) {
        var e = t.sourceFormat, n = t.data;
        if (!Bu(e)) {
            var i = "";
            Fi(i)
        }
        if (e === Bb) {
            for (var r = [], o = 0, a = n.length; a > o; o++) r.push(n[o].slice());
            return r
        }
        if (e === Eb) {
            for (var r = [], o = 0, a = n.length; a > o; o++) r.push(h({}, n[o]));
            return r
        }
    }

    function ku(t, e, n) {
        return null != n ? "number" == typeof n || !isNaN(n) && !Z(e, n) ? t[n] : Z(e, n) ? e[n] : void 0 : void 0
    }

    function Lu(t) {
        return s(t)
    }

    function Pu(t) {
        t = s(t);
        var e = t.type, n = "";
        e || Fi(n);
        var i = e.split(":");
        2 !== i.length && Fi(n);
        var r = !1;
        "echarts" === i[0] && (e = i[1], r = !0), t.__isBuiltIn = r, DS.set(e, t)
    }

    function Ou(t, e, n) {
        var i = Vi(t), r = i.length, o = "";
        r || Fi(o);
        for (var a = 0, s = r; s > a; a++) {
            var l = i[a];
            e = Ru(l, e, n, 1 === r ? null : a), a !== s - 1 && (e.length = Math.max(e.length, 1))
        }
        return e
    }

    function Ru(t, e) {
        var n = "";
        e.length || Fi(n), A(t) || Fi(n);
        var i = t.type, r = DS.get(i);
        r || Fi(n);
        var o = v(e, function (t) {
            return Iu(t, r)
        }), a = Vi(r.transform({upstream: o[0], upstreamList: o, config: s(t.config)}));
        return v(a, function (t, n) {
            var i = "";
            A(t) || Fi(i), t.data || Fi(i);
            var r = du(t.data);
            Bu(r) || Fi(i);
            var o, a = e[0];
            if (a && 0 === n && !t.dimensions) {
                var s = a.startIndex;
                s && (t.data = a.data.slice(0, s).concat(t.data)), o = {
                    seriesLayoutBy: Vb,
                    sourceHeader: s,
                    dimensions: a.metaRawOption.dimensions
                }
            } else o = {seriesLayoutBy: Vb, sourceHeader: 0, dimensions: t.dimensions};
            return hu(t.data, o, null, null)
        })
    }

    function Bu(t) {
        return t === Bb || t === Eb
    }

    function Eu(t) {
        var e = t.option.transform;
        e && U(t.option.transform)
    }

    function zu(t) {
        return "series" === t.mainType
    }

    function Nu(t) {
        throw new Error(t)
    }

    function Fu(t, e) {
        var n = t.color || "#6e7079", i = t.fontSize || 12, r = t.fontWeight || "400", o = t.color || "#464646",
            a = t.fontSize || 14, s = t.fontWeight || "900";
        return "html" === e ? {
            nameStyle: "font-size:" + i + "px;color:" + n + ";font-weight:" + r,
            valueStyle: "font-size:" + a + "px;color:" + o + ";font-weight:" + s
        } : {nameStyle: {fontSize: i, fill: n, fontWeight: r}, valueStyle: {fontSize: a, fill: o, fontWeight: s}}
    }

    function Vu(t, e) {
        return e.type = t, e
    }

    function Hu(t) {
        return Z(OS, t.type) && OS[t.type]
    }

    function Wu(t, e, n, i) {
        var r = [], o = e.blocks || [];
        W(!o || T(o)), o = o || [];
        var a = t.orderMode;
        if (e.sortBlocks && a) {
            o = o.slice();
            var s = {valueAsc: "asc", valueDesc: "desc"};
            if (Z(s, a)) {
                var l = new CS(s[a], null);
                o.sort(function (t, e) {
                    return l.evaluate(t.sortParam, e.sortParam)
                })
            } else "seriesDesc" === a && o.reverse()
        }
        var u = Uu(e);
        return y(o, function (e, n) {
            var o = Hu(e).build(t, e, n > 0 ? u.html : 0, i);
            null != o && r.push(o)
        }), r.length ? "richText" === t.renderMode ? r.join(u.richText) : Yu(r.join(""), n) : void 0
    }

    function Gu(t, e, n, i, r, o) {
        if (t) {
            var a = Hu(t);
            a.planLayout(t);
            var s = {useUTC: r, renderMode: n, orderMode: i, markupStyleCreator: e};
            return a.build(s, t, 0, o)
        }
    }

    function Uu(t) {
        var e = t.__gapLevelBetweenSubBlocks;
        return {html: LS[e], richText: PS[e]}
    }

    function Yu(t, e) {
        var n = '<div style="clear:both"></div>', i = "margin: " + e + "px 0 0";
        return '<div style="' + i + ";" + kS + ';">' + t + n + "</div>"
    }

    function Xu(t, e, n) {
        var i = e ? "margin-left:2px" : "";
        return '<span style="' + n + ";" + i + '">' + ll(t) + "</span>"
    }

    function ju(t, e, n, i) {
        var r = n ? "10px" : "20px", o = e ? "float:right;margin-left:" + r : "";
        return '<span style="' + o + ";" + i + '">' + v(t, function (t) {
            return ll(t)
        }).join("&nbsp;&nbsp;") + "</span>"
    }

    function qu(t, e, n) {
        return t.markupStyleCreator.wrapRichTextStyle(e, n)
    }

    function Zu(t, e, n, i, r) {
        var o = [r], a = i ? 10 : 20;
        return n && o.push({
            padding: [0, 0, 0, a],
            align: "right"
        }), t.markupStyleCreator.wrapRichTextStyle(e.join("  "), o)
    }

    function Ku(t, e) {
        var n = t.getData().getItemVisual(e, "style"), i = n[t.visualDrawType];
        return dl(i)
    }

    function $u(t, e) {
        var n = t.get("padding");
        return null != n ? n : "richText" === e ? [8, 10] : 10
    }

    function Qu(t) {
        var e, n, i, r, o = t.series, a = t.dataIndex, s = t.multipleSeries, l = o.getData(),
            u = l.mapDimensionsAll("defaultedTooltip"), h = u.length, c = o.getRawValue(a), p = T(c), f = Ku(o, a);
        if (h > 1 || p && !h) {
            var d = Ju(c, o, a, u, f);
            e = d.inlineValues, n = d.inlineValueTypes, i = d.blocks, r = d.inlineValues[0]
        } else if (h) {
            var g = l.getDimensionInfo(u[0]);
            r = e = Su(l, a, u[0]), n = g.type
        } else r = e = p ? c[0] : c;
        var y = tr(o), v = y && o.name || "", m = l.getName(a), _ = s ? v : m;
        return Vu("section", {
            header: v,
            noHeader: s || !y,
            sortParam: r,
            blocks: [Vu("nameValue", {
                markerType: "item",
                markerColor: f,
                name: _,
                noName: !G(_),
                value: e,
                valueType: n
            })].concat(i || [])
        })
    }

    function Ju(t, e, n, i, r) {
        function o(t, e) {
            var n = a.getDimensionInfo(e);
            n && n.otherDims.tooltip !== !1 && (s ? h.push(Vu("nameValue", {
                markerType: "subItem",
                markerColor: r,
                name: n.displayName,
                value: t,
                valueType: n.type
            })) : (l.push(t), u.push(n.type)))
        }

        var a = e.getData(), s = m(t, function (t, e, n) {
            var i = a.getDimensionInfo(n);
            return t = t || i && i.tooltip !== !1 && null != i.displayName
        }, !1), l = [], u = [], h = [];
        return i.length ? y(i, function (t) {
            o(Su(a, n, t), t)
        }) : y(t, o), {inlineValues: l, inlineValueTypes: u, blocks: h}
    }

    function th(t, e) {
        return t.getName(e) || t.getId(e)
    }

    function eh(t) {
        var e = t.name;
        tr(t) || (t.name = nh(t) || e)
    }

    function nh(t) {
        var e = t.getRawData(), n = e.mapDimensionsAll("seriesName"), i = [];
        return y(n, function (t) {
            var n = e.getDimensionInfo(t);
            n.displayName && i.push(n.displayName)
        }), i.join(" ")
    }

    function ih(t) {
        return t.model.getRawData().count()
    }

    function rh(t) {
        var e = t.model;
        return e.setData(e.getRawData().cloneShallow()), oh
    }

    function oh(t, e) {
        e.outputData && t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
    }

    function ah(t, e) {
        y(n(t.CHANGABLE_METHODS, t.DOWNSAMPLE_METHODS), function (n) {
            t.wrapMethod(n, S(sh, e))
        })
    }

    function sh(t, e) {
        var n = lh(t);
        return n && n.setOutputEnd((e || this).count()), e
    }

    function lh(t) {
        var e = (t.ecModel || {}).scheduler, n = e && e.getPipeline(t.uid);
        if (n) {
            var i = n.currentTask;
            if (i) {
                var r = i.agentStubMap;
                r && (i = r.get(t.uid))
            }
            return i
        }
    }

    function uh() {
        var t = or();
        return function (e) {
            var n = t(e), i = e.pipelineContext, r = !!n.large, o = !!n.progressiveRender,
                a = n.large = !(!i || !i.large), s = n.progressiveRender = !(!i || !i.progressiveRender);
            return !(r === a && o === s) && "reset"
        }
    }

    function hh(t, e, n) {
        t && ("emphasis" === e ? ta : ea)(t, n)
    }

    function ch(t, e, n) {
        var i = rr(t, e), r = e && null != e.highlightKey ? ma(e.highlightKey) : null;
        null != i ? y(Vi(i), function (e) {
            hh(t.getItemGraphicEl(e), n, r)
        }) : t.eachItemGraphicEl(function (t) {
            hh(t, n, r)
        })
    }

    function ph(t) {
        return FS(t.model)
    }

    function fh(t) {
        var e = t.model, n = t.ecModel, i = t.api, r = t.payload, o = e.pipelineContext.progressiveRender, a = t.view,
            s = r && NS(r).updateMethod, l = o ? "incrementalPrepareRender" : s && a[s] ? s : "render";
        return "render" !== l && a[l](e, n, i, r), WS[l]
    }

    function dh(t, e, n) {
        function i() {
            h = (new Date).getTime(), c = null, t.apply(a, s || [])
        }

        var r, o, a, s, l, u = 0, h = 0, c = null;
        e = e || 0;
        var p = function () {
            for (var t = [], p = 0; p < arguments.length; p++) t[p] = arguments[p];
            r = (new Date).getTime(), a = this, s = t;
            var f = l || e, d = l || n;
            l = null, o = r - (d ? u : h) - f, clearTimeout(c), d ? c = setTimeout(i, f) : o >= 0 ? i() : c = setTimeout(i, -o), u = r
        };
        return p.clear = function () {
            c && (clearTimeout(c), c = null)
        }, p.debounceNextCall = function (t) {
            l = t
        }, p
    }

    function gh(t, e, n, i) {
        var r = t[e];
        if (r) {
            var o = r[GS] || r, a = r[YS], s = r[US];
            if (s !== n || a !== i) {
                if (null == n || !i) return t[e] = o;
                r = t[e] = dh(o, n, "debounce" === i), r[GS] = o, r[YS] = i, r[US] = n
            }
            return r
        }
    }

    function yh(t, e) {
        var n = t.visualStyleMapper || jS[e];
        return n ? n : (console.warn("Unkown style type '" + e + "'."), jS.itemStyle)
    }

    function vh(t, e) {
        var n = t.visualDrawType || qS[e];
        return n ? n : (console.warn("Unkown style type '" + e + "'."), "fill")
    }

    function mh(t, e) {
        e = e || {}, c(e, {
            text: "loading",
            textColor: "#000",
            fontSize: 12,
            fontWeight: "normal",
            fontStyle: "normal",
            fontFamily: "sans-serif",
            maskColor: "rgba(255, 255, 255, 0.8)",
            showSpinner: !0,
            color: "#5470c6",
            spinnerRadius: 10,
            lineWidth: 5,
            zlevel: 0
        });
        var n = new wm, i = new rx({style: {fill: e.maskColor}, zlevel: e.zlevel, z: 1e4});
        n.add(i);
        var r = new lx({
            style: {
                text: e.text,
                fill: e.textColor,
                fontSize: e.fontSize,
                fontWeight: e.fontWeight,
                fontStyle: e.fontStyle,
                fontFamily: e.fontFamily
            }
        }), o = new rx({
            style: {fill: "none"},
            textContent: r,
            textConfig: {position: "right", distance: 10},
            zlevel: e.zlevel,
            z: 10001
        });
        n.add(o);
        var a;
        return e.showSpinner && (a = new mw({
            shape: {startAngle: -JS / 2, endAngle: -JS / 2 + .1, r: e.spinnerRadius},
            style: {stroke: e.color, lineCap: "round", lineWidth: e.lineWidth},
            zlevel: e.zlevel,
            z: 10001
        }), a.animateShape(!0).when(1e3, {endAngle: 3 * JS / 2}).start("circularInOut"), a.animateShape(!0).when(1e3, {startAngle: 3 * JS / 2}).delay(300).start("circularInOut"), n.add(a)), n.resize = function () {
            var n = r.getBoundingRect().width, s = e.showSpinner ? e.spinnerRadius : 0,
                l = (t.getWidth() - 2 * s - (e.showSpinner && n ? 10 : 0) - n) / 2 - (e.showSpinner && n ? 0 : 5 + n / 2) + (e.showSpinner ? 0 : n / 2) + (n ? 0 : s),
                u = t.getHeight() / 2;
            e.showSpinner && a.setShape({cx: l, cy: u}), o.setShape({
                x: l - s,
                y: u - s,
                width: 2 * s,
                height: 2 * s
            }), i.setShape({x: 0, y: 0, width: t.getWidth(), height: t.getHeight()})
        }, n.resize(), n
    }

    function _h(t) {
        t.overallReset(t.ecModel, t.api, t.payload)
    }

    function xh(t) {
        return t.overallProgress && wh
    }

    function wh() {
        this.agent.dirty(), this.getDownstream().dirty()
    }

    function bh() {
        this.agent && this.agent.dirty()
    }

    function Sh(t) {
        return t.plan ? t.plan(t.model, t.ecModel, t.api, t.payload) : null
    }

    function Th(t) {
        t.useClearVisual && t.data.clearAllVisual();
        var e = t.resetDefines = Vi(t.reset(t.model, t.ecModel, t.api, t.payload));
        return e.length > 1 ? v(e, function (t, e) {
            return Mh(e)
        }) : eT
    }

    function Mh(t) {
        return function (e, n) {
            var i = n.data, r = n.resetDefines[t];
            if (r && r.dataEach) for (var o = e.start; o < e.end; o++) r.dataEach(i, o); else r && r.progress && r.progress(e, i)
        }
    }

    function Ch(t) {
        return t.data.count()
    }

    function Ih(t) {
        HS = null;
        try {
            t(nT, iT)
        } catch (e) {
        }
        return HS
    }

    function Dh(t, e) {
        for (var n in e.prototype) t[n] = K
    }

    function Ah(t) {
        if (C(t)) {
            var e = new DOMParser;
            t = e.parseFromString(t, "text/xml")
        }
        var n = t;
        for (9 === n.nodeType && (n = n.firstChild); "svg" !== n.nodeName.toLowerCase() || 1 !== n.nodeType;) n = n.nextSibling;
        return n
    }

    function kh(t, e, n) {
        switch (n) {
            case "color":
                var i = t.getItemVisual(e, "style");
                return i[t.getVisual("drawType")];
            case "opacity":
                return t.getItemVisual(e, "style").opacity;
            case "symbol":
            case "symbolSize":
            case "liftZ":
                return t.getItemVisual(e, n)
        }
    }

    function Lh(t, e) {
        switch (e) {
            case "color":
                var n = t.getVisual("style");
                return n[t.getVisual("drawType")];
            case "opacity":
                return t.getVisual("style").opacity;
            case "symbol":
            case "symbolSize":
            case "liftZ":
                return t.getVisual(e)
        }
    }

    function Ph(t, e, n, i, r) {
        var o = n.width, a = n.height;
        switch (t) {
            case "top":
                i.set(n.x + o / 2, n.y - e), r.set(0, -1);
                break;
            case "bottom":
                i.set(n.x + o / 2, n.y + a + e), r.set(0, 1);
                break;
            case "left":
                i.set(n.x - e, n.y + a / 2), r.set(-1, 0);
                break;
            case "right":
                i.set(n.x + o + e, n.y + a / 2), r.set(1, 0)
        }
    }

    function Oh(t, e, n, i, r, o, a, s, l) {
        a -= t, s -= e;
        var u = Math.sqrt(a * a + s * s);
        a /= u, s /= u;
        var h = a * n + t, c = s * n + e;
        if (Math.abs(i - r) % vT < 1e-4) return l[0] = h, l[1] = c, u - n;
        if (o) {
            var p = i;
            i = co(r), r = co(p)
        } else i = co(i), r = co(r);
        i > r && (r += vT);
        var f = Math.atan2(s, a);
        if (0 > f && (f += vT), f >= i && r >= f || f + vT >= i && r >= f + vT) return l[0] = h, l[1] = c, u - n;
        var d = n * Math.cos(i) + t, g = n * Math.sin(i) + e, y = n * Math.cos(r) + t, v = n * Math.sin(r) + e,
            m = (d - a) * (d - a) + (g - s) * (g - s), _ = (y - a) * (y - a) + (v - s) * (v - s);
        return _ > m ? (l[0] = d, l[1] = g, Math.sqrt(m)) : (l[0] = y, l[1] = v, Math.sqrt(_))
    }

    function Rh(t, e, n, i, r, o, a, s) {
        var l = r - t, u = o - e, h = n - t, c = i - e, p = Math.sqrt(h * h + c * c);
        h /= p, c /= p;
        var f = l * h + u * c, d = f / p;
        s && (d = Math.min(Math.max(d, 0), 1)), d *= p;
        var g = a[0] = t + d * h, y = a[1] = e + d * c;
        return Math.sqrt((g - r) * (g - r) + (y - o) * (y - o))
    }

    function Bh(t, e, n, i, r, o, a) {
        0 > n && (t += n, n = -n), 0 > i && (e += i, i = -i);
        var s = t + n, l = e + i, u = a[0] = Math.min(Math.max(r, t), s), h = a[1] = Math.min(Math.max(o, e), l);
        return Math.sqrt((u - r) * (u - r) + (h - o) * (h - o))
    }

    function Eh(t, e, n) {
        var i = Bh(e.x, e.y, e.width, e.height, t.x, t.y, xT);
        return n.set(xT[0], xT[1]), i
    }

    function zh(t, e, n) {
        for (var i, r, o = 0, a = 0, s = 0, l = 0, u = 1 / 0, h = e.data, c = t.x, p = t.y, f = 0; f < h.length;) {
            var d = h[f++];
            1 === f && (o = h[f], a = h[f + 1], s = o, l = a);
            var g = u;
            switch (d) {
                case mT.M:
                    s = h[f++], l = h[f++], o = s, a = l;
                    break;
                case mT.L:
                    g = Rh(o, a, h[f], h[f + 1], c, p, xT, !0), o = h[f++], a = h[f++];
                    break;
                case mT.C:
                    g = Xr(o, a, h[f++], h[f++], h[f++], h[f++], h[f], h[f + 1], c, p, xT), o = h[f++], a = h[f++];
                    break;
                case mT.Q:
                    g = Jr(o, a, h[f++], h[f++], h[f], h[f + 1], c, p, xT), o = h[f++], a = h[f++];
                    break;
                case mT.A:
                    var y = h[f++], v = h[f++], m = h[f++], _ = h[f++], x = h[f++], w = h[f++];
                    f += 1;
                    var b = !!(1 - h[f++]);
                    i = Math.cos(x) * m + y, r = Math.sin(x) * _ + v, 1 >= f && (s = i, l = r);
                    var S = (c - y) * _ / m + y;
                    g = Oh(y, v, _, x, x + w, b, S, p, xT), o = Math.cos(x + w) * m + y, a = Math.sin(x + w) * _ + v;
                    break;
                case mT.R:
                    s = o = h[f++], l = a = h[f++];
                    var T = h[f++], M = h[f++];
                    g = Bh(s, l, T, M, c, p, xT);
                    break;
                case mT.Z:
                    g = Rh(o, a, s, l, c, p, xT, !0), o = s, a = l
            }
            u > g && (u = g, n.set(xT[0], xT[1]))
        }
        return u
    }

    function Nh(t, e) {
        if (t) {
            var n = t.getTextGuideLine(), i = t.getTextContent();
            if (i && n) {
                var r = t.textGuideLineConfig || {}, o = [[0, 0], [0, 0], [0, 0]], a = r.candidates || _T,
                    s = i.getBoundingRect().clone();
                s.applyTransform(i.getComputedTransform());
                var l = 1 / 0, u = r.anchor, h = t.getComputedTransform(), c = h && Ye([], h),
                    p = e.get("length2") || 0;
                u && ST.copy(u);
                for (var f = 0; f < a.length; f++) {
                    var d = a[f];
                    Ph(d, 0, s, wT, TT), Ov.scaleAndAdd(bT, wT, TT, p), bT.transform(c);
                    var g = t.getBoundingRect(),
                        y = u ? u.distance(bT) : t instanceof Z_ ? zh(bT, t.path, ST) : Eh(bT, g, ST);
                    l > y && (l = y, bT.transform(h), ST.transform(h), ST.toArray(o[0]), bT.toArray(o[1]), wT.toArray(o[2]))
                }
                Fh(o, e.get("minTurnAngle")), n.setShape({points: o})
            }
        }
    }

    function Fh(t, e) {
        if (180 >= e && e > 0) {
            e = e / 180 * Math.PI, wT.fromArray(t[0]), bT.fromArray(t[1]), ST.fromArray(t[2]), Ov.sub(TT, wT, bT), Ov.sub(MT, ST, bT);
            var n = TT.len(), i = MT.len();
            if (!(.001 > n || .001 > i)) {
                TT.scale(1 / n), MT.scale(1 / i);
                var r = TT.dot(MT), o = Math.cos(e);
                if (r > o) {
                    var a = Rh(bT.x, bT.y, ST.x, ST.y, wT.x, wT.y, CT, !1);
                    IT.fromArray(CT), IT.scaleAndAdd(MT, a / Math.tan(Math.PI - e));
                    var s = ST.x !== bT.x ? (IT.x - bT.x) / (ST.x - bT.x) : (IT.y - bT.y) / (ST.y - bT.y);
                    if (isNaN(s)) return;
                    0 > s ? Ov.copy(IT, bT) : s > 1 && Ov.copy(IT, ST), IT.toArray(t[1])
                }
            }
        }
    }

    function Vh(t, e, n) {
        if (180 >= n && n > 0) {
            n = n / 180 * Math.PI, wT.fromArray(t[0]), bT.fromArray(t[1]), ST.fromArray(t[2]), Ov.sub(TT, bT, wT), Ov.sub(MT, ST, bT);
            var i = TT.len(), r = MT.len();
            if (!(.001 > i || .001 > r)) {
                TT.scale(1 / i), MT.scale(1 / r);
                var o = TT.dot(e), a = Math.cos(n);
                if (a > o) {
                    var s = Rh(bT.x, bT.y, ST.x, ST.y, wT.x, wT.y, CT, !1);
                    IT.fromArray(CT);
                    var l = Math.PI / 2, u = Math.acos(MT.dot(e)), h = l + u - n;
                    if (h >= l) Ov.copy(IT, ST); else {
                        IT.scaleAndAdd(MT, s / Math.tan(Math.PI / 2 - h));
                        var c = ST.x !== bT.x ? (IT.x - bT.x) / (ST.x - bT.x) : (IT.y - bT.y) / (ST.y - bT.y);
                        if (isNaN(c)) return;
                        0 > c ? Ov.copy(IT, bT) : c > 1 && Ov.copy(IT, ST)
                    }
                    IT.toArray(t[1])
                }
            }
        }
    }

    function Hh(t, e, n, i) {
        var r = "normal" === n, o = r ? t : t.ensureState(n);
        o.ignore = e;
        var a = i.get("smooth");
        a && a === !0 && (a = .3), o.shape = o.shape || {}, a > 0 && (o.shape.smooth = a);
        var s = i.getModel("lineStyle").getLineStyle();
        r ? t.useStyle(s) : o.style = s
    }

    function Wh(t, e) {
        var n = e.smooth, i = e.points;
        if (i) if (t.moveTo(i[0][0], i[0][1]), n > 0 && i.length >= 3) {
            var r = Wy(i[0], i[1]), o = Wy(i[1], i[2]);
            if (!r || !o) return t.lineTo(i[1][0], i[1][1]), void t.lineTo(i[2][0], i[2][1]);
            var a = Math.min(r, o) * n, s = de([], i[1], i[0], a / r), l = de([], i[1], i[2], a / o),
                u = de([], s, l, .5);
            t.bezierCurveTo(s[0], s[1], s[0], s[1], u[0], u[1]), t.bezierCurveTo(l[0], l[1], l[0], l[1], i[2][0], i[2][1])
        } else for (var h = 1; h < i.length; h++) t.lineTo(i[h][0], i[h][1])
    }

    function Gh(t, e, n) {
        var i = t.getTextGuideLine(), r = t.getTextContent();
        if (!r) return void (i && t.removeTextGuideLine());
        for (var o = e.normal, a = o.get("show"), s = r.ignore, l = 0; l < _x.length; l++) {
            var u = _x[l], h = e[u], p = "normal" === u;
            if (h) {
                var f = h.get("show"), d = p ? s : N(r.states[u] && r.states[u].ignore, s);
                if (d || !N(f, a)) {
                    var g = p ? i : i && i.states.normal;
                    g && (g.ignore = !0);
                    continue
                }
                i || (i = new hw, t.setTextGuideLine(i), p || !s && a || Hh(i, !0, "normal", e.normal), t.stateProxy && (i.stateProxy = t.stateProxy)), Hh(i, !1, u, h)
            }
        }
        if (i) {
            c(i.style, n), i.style.fill = null;
            var y = o.get("showAbove"), v = t.textGuideLineConfig = t.textGuideLineConfig || {};
            v.showAbove = y || !1, i.buildPath = Wh
        }
    }

    function Uh(t, e) {
        e = e || "labelLine";
        for (var n = {normal: t.getModel(e)}, i = 0; i < mx.length; i++) {
            var r = mx[i];
            n[r] = t.getModel([r, e])
        }
        return n
    }

    function Yh(t) {
        for (var e = [], n = 0; n < t.length; n++) {
            var i = t[n];
            if (!i.defaultAttr.ignore) {
                var r = i.label, o = r.getComputedTransform(), a = r.getBoundingRect(),
                    s = !o || o[1] < 1e-5 && o[2] < 1e-5, l = r.style.margin || 0, u = a.clone();
                u.applyTransform(o), u.x -= l / 2, u.y -= l / 2, u.width += l, u.height += l;
                var h = s ? new Iw(a, o) : null;
                e.push({
                    label: r,
                    labelLine: i.labelLine,
                    rect: u,
                    localRect: a,
                    obb: h,
                    priority: i.priority,
                    defaultAttr: i.defaultAttr,
                    layoutOption: i.computedLayoutOption,
                    axisAligned: s,
                    transform: o
                })
            }
        }
        return e
    }

    function Xh(t, e, n, i, r, o) {
        function a() {
            w = S.rect[e] - i, b = r - T.rect[e] - T.rect[n]
        }

        function s(t, e, n) {
            if (0 > t) {
                var i = Math.min(e, -t);
                if (i > 0) {
                    l(i * n, 0, c);
                    var r = i + t;
                    0 > r && u(-r * n, 1)
                } else u(-t * n, 1)
            }
        }

        function l(n, i, r) {
            0 !== n && (d = !0);
            for (var o = i; r > o; o++) {
                var a = t[o], s = a.rect;
                s[e] += n, a.label[e] += n
            }
        }

        function u(i, r) {
            for (var o = [], a = 0, s = 1; c > s; s++) {
                var u = t[s - 1].rect, h = Math.max(t[s].rect[e] - u[e] - u[n], 0);
                o.push(h), a += h
            }
            if (a) {
                var p = Math.min(Math.abs(i) / a, r);
                if (i > 0) for (var s = 0; c - 1 > s; s++) {
                    var f = o[s] * p;
                    l(f, 0, s + 1)
                } else for (var s = c - 1; s > 0; s--) {
                    var f = o[s - 1] * p;
                    l(-f, s, c)
                }
            }
        }

        function h(t) {
            var e = 0 > t ? -1 : 1;
            t = Math.abs(t);
            for (var n = Math.ceil(t / (c - 1)), i = 0; c - 1 > i; i++) if (e > 0 ? l(n, 0, i + 1) : l(-n, c - i - 1, c), t -= n, 0 >= t) return
        }

        var c = t.length;
        if (!(2 > c)) {
            t.sort(function (t, n) {
                return t.rect[e] - n.rect[e]
            });
            for (var p, f = 0, d = !1, g = [], y = 0, v = 0; c > v; v++) {
                var m = t[v], _ = m.rect;
                p = _[e] - f, 0 > p && (_[e] -= p, m.label[e] -= p, d = !0);
                var x = Math.max(-p, 0);
                g.push(x), y += x, f = _[e] + _[n]
            }
            y > 0 && o && l(-y / c, 0, c);
            var w, b, S = t[0], T = t[c - 1];
            return a(), 0 > w && u(-w, .8), 0 > b && u(b, .8), a(), s(w, b, 1), s(b, w, -1), a(), 0 > w && h(-w), 0 > b && h(b), d
        }
    }

    function jh(t, e, n, i) {
        return Xh(t, "x", "width", e, n, i)
    }

    function qh(t, e, n, i) {
        return Xh(t, "y", "height", e, n, i)
    }

    function Zh(t) {
        function e(t) {
            if (!t.ignore) {
                var e = t.ensureState("emphasis");
                null == e.ignore && (e.ignore = !1)
            }
            t.ignore = !0
        }

        var n = [];
        t.sort(function (t, e) {
            return e.priority - t.priority
        });
        for (var i = new Wv(0, 0, 0, 0), r = 0; r < t.length; r++) {
            var o = t[r], a = o.axisAligned, s = o.localRect, l = o.transform, u = o.label, h = o.labelLine;
            i.copy(o.rect), i.width -= .1, i.height -= .1, i.x += .05, i.y += .05;
            for (var c = o.obb, p = !1, f = 0; f < n.length; f++) {
                var d = n[f];
                if (i.intersect(d.rect)) {
                    if (a && d.axisAligned) {
                        p = !0;
                        break
                    }
                    if (d.obb || (d.obb = new Iw(d.localRect, d.transform)), c || (c = new Iw(s, l)), c.intersect(d.obb)) {
                        p = !0;
                        break
                    }
                }
            }
            p ? (e(u), h && e(h)) : (u.attr("ignore", o.defaultAttr.ignore), h && h.attr("ignore", o.defaultAttr.labelGuideIgnore), n.push(o))
        }
    }

    function Kh(t) {
        if (t) {
            for (var e = [], n = 0; n < t.length; n++) e.push(t[n].slice());
            return e
        }
    }

    function $h(t, e) {
        var n = t.label, i = e && e.getTextGuideLine();
        return {
            dataIndex: t.dataIndex,
            dataType: t.dataType,
            seriesIndex: t.seriesModel.seriesIndex,
            text: t.label.style.text,
            rect: t.hostRect,
            labelRect: t.rect,
            align: n.style.align,
            verticalAlign: n.style.verticalAlign,
            labelLinePoints: Kh(i && i.shape.points)
        }
    }

    function Qh(t, e, n) {
        for (var i = 0; i < n.length; i++) {
            var r = n[i];
            null != e[r] && (t[r] = e[r])
        }
    }

    function Jh(t, e) {
        function n(e, n) {
            var i = [];
            return e.eachComponent({mainType: "series", subType: t, query: n}, function (t) {
                i.push(t.seriesIndex)
            }), i
        }

        y([[t + "ToggleSelect", "toggleSelect"], [t + "Select", "select"], [t + "UnSelect", "unselect"]], function (t) {
            e(t[0], function (e, i, r) {
                e = h({}, e), r.dispatchAction(h(e, {type: t[1], seriesIndex: n(i, e)}))
            })
        })
    }

    function tc(t, e, n, i, r) {
        var o = t + e;
        n.isSilent(o) || i.eachComponent({mainType: "series", subType: "pie"}, function (t) {
            for (var e = t.seriesIndex, i = r.selected, a = 0; a < i.length; a++) if (i[a].seriesIndex === e) {
                var s = t.getData(), l = rr(s, r.fromActionPayload);
                n.trigger(o, {
                    type: o,
                    seriesId: t.id,
                    name: s.getName(T(l) ? l[0] : l),
                    selected: h({}, t.option.selectedMap)
                })
            }
        })
    }

    function ec(t, e, n) {
        t.on("selectchanged", function (t) {
            var i = n.getModel();
            t.isFromClick ? (tc("map", "selectchanged", e, i, t), tc("pie", "selectchanged", e, i, t)) : "select" === t.fromAction ? (tc("map", "selected", e, i, t), tc("pie", "selected", e, i, t)) : "unselect" === t.fromAction && (tc("map", "unselected", e, i, t), tc("pie", "unselected", e, i, t))
        })
    }

    function nc(t, e, n) {
        for (var i; t && (!e(t) || (i = t, !n));) t = t.__hostTarget || t.parent;
        return i
    }

    function ic(t, e) {
        if ("image" !== this.type) {
            var n = this.style;
            this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff", n.lineWidth = 2) : n.fill = t, this.markRedraw()
        }
    }

    function rc(t, e, n, i, r, o, a) {
        var s = 0 === t.indexOf("empty");
        s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
        var l;
        return l = 0 === t.indexOf("image://") ? Xa(t.slice(8), new Wv(e, n, i, r), a ? "center" : "cover") : 0 === t.indexOf("path://") ? Ya(t.slice(7), {}, new Wv(e, n, i, r), a ? "center" : "cover") : new GT({
            shape: {
                symbolType: t,
                x: e,
                y: n,
                width: i,
                height: r
            }
        }), l.__isEmptyBrush = s, l.setColor = ic, o && l.setColor(o), l
    }

    function oc(t, e, n) {
        var i = null == e.x ? 0 : e.x, r = null == e.x2 ? 1 : e.x2, o = null == e.y ? 0 : e.y,
            a = null == e.y2 ? 0 : e.y2;
        e.global || (i = i * n.width + n.x, r = r * n.width + n.x, o = o * n.height + n.y, a = a * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, o = isNaN(o) ? 0 : o, a = isNaN(a) ? 0 : a;
        var s = t.createLinearGradient(i, o, r, a);
        return s
    }

    function ac(t, e, n) {
        var i = n.width, r = n.height, o = Math.min(i, r), a = null == e.x ? .5 : e.x, s = null == e.y ? .5 : e.y,
            l = null == e.r ? .5 : e.r;
        e.global || (a = a * i + n.x, s = s * r + n.y, l *= o);
        var u = t.createRadialGradient(a, s, 0, a, s, l);
        return u
    }

    function sc(t, e, n) {
        for (var i = "radial" === e.type ? ac(t, e, n) : oc(t, e, n), r = e.colorStops, o = 0; o < r.length; o++) i.addColorStop(r[o].offset, r[o].color);
        return i
    }

    function lc(t, e) {
        if (t === e || !t && !e) return !1;
        if (!t || !e || t.length !== e.length) return !0;
        for (var n = 0; n < t.length; n++) if (t[n] !== e[n]) return !0;
        return !1
    }

    function uc(t, e) {
        return t && "solid" !== t && e > 0 ? (e = e || 1, "dashed" === t ? [4 * e, 2 * e] : "dotted" === t ? [e] : D(t) ? [t] : T(t) ? t : null) : null
    }

    function hc(t) {
        var e = t.stroke;
        return !(null == e || "none" === e || !(t.lineWidth > 0))
    }

    function cc(t) {
        var e = t.fill;
        return null != e && "none" !== e
    }

    function pc(t, e) {
        if (null != e.fillOpacity && 1 !== e.fillOpacity) {
            var n = t.globalAlpha;
            t.globalAlpha = e.fillOpacity * e.opacity, t.fill(), t.globalAlpha = n
        } else t.fill()
    }

    function fc(t, e) {
        if (null != e.strokeOpacity && 1 !== e.strokeOpacity) {
            var n = t.globalAlpha;
            t.globalAlpha = e.strokeOpacity * e.opacity, t.stroke(), t.globalAlpha = n
        } else t.stroke()
    }

    function dc(t, e, n) {
        var i = Tr(e.image, e.__image, n);
        if (Cr(i)) {
            var r = t.createPattern(i, e.repeat || "repeat");
            if ("function" == typeof DOMMatrix) {
                var o = new DOMMatrix;
                o.rotateSelf(0, 0, (e.rotation || 0) / Math.PI * 180), o.scaleSelf(e.scaleX || 1, e.scaleY || 1), o.translateSelf(e.x || 0, e.y || 0), r.setTransform(o)
            }
            return r
        }
    }

    function gc(t, e, n, i) {
        var r = hc(n), o = cc(n), a = n.strokePercent, s = 1 > a, l = !e.path;
        e.silent && !s || !l || e.createPathProxy();
        var u = e.path || UT;
        if (!i) {
            var h = n.fill, c = n.stroke, p = o && !!h.colorStops, f = r && !!c.colorStops, d = o && !!h.image,
                g = r && !!c.image, y = void 0, m = void 0, _ = void 0, x = void 0, w = void 0;
            (p || f) && (w = e.getBoundingRect()), p && (y = e.__dirty ? sc(t, h, w) : e.__canvasFillGradient, e.__canvasFillGradient = y), f && (m = e.__dirty ? sc(t, c, w) : e.__canvasStrokeGradient, e.__canvasStrokeGradient = m), d && (_ = e.__dirty || !e.__canvasFillPattern ? dc(t, h, e) : e.__canvasFillPattern, e.__canvasFillPattern = _), g && (x = e.__dirty || !e.__canvasStrokePattern ? dc(t, c, e) : e.__canvasStrokePattern, e.__canvasStrokePattern = _), p ? t.fillStyle = y : d && (_ ? t.fillStyle = _ : o = !1), f ? t.strokeStyle = m : g && (x ? t.strokeStyle = x : r = !1)
        }
        var b = n.lineDash && n.lineWidth > 0 && uc(n.lineDash, n.lineWidth), S = n.lineDashOffset, T = !!t.setLineDash,
            M = e.getGlobalScale();
        if (u.setScale(M[0], M[1], e.segmentIgnoreThreshold), b) {
            var C = n.strokeNoScale && e.getLineScale ? e.getLineScale() : 1;
            C && 1 !== C && (b = v(b, function (t) {
                return t / C
            }), S /= C)
        }
        var I = !0;
        (l || e.__dirty & Z_.SHAPE_CHANGED_BIT || b && !T && r) && (u.setDPR(t.dpr), s ? u.setContext(null) : (u.setContext(t), I = !1), u.reset(), b && !T && (u.setLineDash(b), u.setLineDashOffset(S)), e.buildPath(u, e.shape, i), u.toStatic(), e.pathUpdated()), I && u.rebuildPath(t, s ? a : 1), b && T && (t.setLineDash(b), t.lineDashOffset = S), i || (n.strokeFirst ? (r && fc(t, n), o && pc(t, n)) : (o && pc(t, n), r && fc(t, n))), b && T && t.setLineDash([])
    }

    function yc(t, e, n) {
        var i = e.__image = Tr(n.image, e.__image, e, e.onload);
        if (i && Cr(i)) {
            var r = n.x || 0, o = n.y || 0, a = e.getWidth(), s = e.getHeight(), l = i.width / i.height;
            if (null == a && null != s ? a = s * l : null == s && null != a ? s = a / l : null == a && null == s && (a = i.width, s = i.height), n.sWidth && n.sHeight) {
                var u = n.sx || 0, h = n.sy || 0;
                t.drawImage(i, u, h, n.sWidth, n.sHeight, r, o, a, s)
            } else if (n.sx && n.sy) {
                var u = n.sx, h = n.sy, c = a - u, p = s - h;
                t.drawImage(i, u, h, c, p, r, o, a, s)
            } else t.drawImage(i, r, o, a, s)
        }
    }

    function vc(t, e, n) {
        var i = n.text;
        if (null != i && (i += ""), i) {
            t.font = n.font || Uv, t.textAlign = n.textAlign, t.textBaseline = n.textBaseline;
            var r = void 0;
            if (t.setLineDash) {
                var o = n.lineDash && n.lineWidth > 0 && uc(n.lineDash, n.lineWidth), a = n.lineDashOffset;
                if (o) {
                    var s = n.strokeNoScale && e.getLineScale ? e.getLineScale() : 1;
                    s && 1 !== s && (o = v(o, function (t) {
                        return t / s
                    }), a /= s), t.setLineDash(o), t.lineDashOffset = a, r = !0
                }
            }
            n.strokeFirst ? (hc(n) && t.strokeText(i, n.x, n.y), cc(n) && t.fillText(i, n.x, n.y)) : (cc(n) && t.fillText(i, n.x, n.y), hc(n) && t.strokeText(i, n.x, n.y)), r && t.setLineDash([])
        }
    }

    function mc(t, e, n, i, r) {
        var o = !1;
        if (!i && (n = n || {}, e === n)) return !1;
        (i || e.opacity !== n.opacity) && (o || (Mc(t, r), o = !0), t.globalAlpha = null == e.opacity ? Km.opacity : e.opacity), (i || e.blend !== n.blend) && (o || (Mc(t, r), o = !0), t.globalCompositeOperation = e.blend || Km.blend);
        for (var a = 0; a < YT.length; a++) {
            var s = YT[a];
            (i || e[s] !== n[s]) && (o || (Mc(t, r), o = !0), t[s] = t.dpr * (e[s] || 0))
        }
        return (i || e.shadowColor !== n.shadowColor) && (o || (Mc(t, r), o = !0), t.shadowColor = e.shadowColor || Km.shadowColor), o
    }

    function _c(t, e, n, i, r) {
        var o = Cc(e, r.inHover), a = i ? null : n && Cc(n, r.inHover) || {};
        if (o === a) return !1;
        var s = mc(t, o, a, i, r);
        if ((i || o.fill !== a.fill) && (s || (Mc(t, r), s = !0), t.fillStyle = o.fill), (i || o.stroke !== a.stroke) && (s || (Mc(t, r), s = !0), t.strokeStyle = o.stroke), (i || o.opacity !== a.opacity) && (s || (Mc(t, r), s = !0), t.globalAlpha = null == o.opacity ? 1 : o.opacity), e.hasStroke()) {
            var l = o.lineWidth, u = l / (o.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1);
            t.lineWidth !== u && (s || (Mc(t, r), s = !0), t.lineWidth = u)
        }
        for (var h = 0; h < XT.length; h++) {
            var c = XT[h], p = c[0];
            (i || o[p] !== a[p]) && (s || (Mc(t, r), s = !0), t[p] = o[p] || c[1])
        }
        return s
    }

    function xc(t, e, n, i, r) {
        return mc(t, Cc(e, r.inHover), n && Cc(n, r.inHover), i, r)
    }

    function wc(t, e) {
        var n = e.transform, i = t.dpr || 1;
        n ? t.setTransform(i * n[0], i * n[1], i * n[2], i * n[3], i * n[4], i * n[5]) : t.setTransform(i, 0, 0, i, 0, 0)
    }

    function bc(t, e, n) {
        for (var i = !1, r = 0; r < t.length; r++) {
            var o = t[r];
            i = i || o.isZeroArea(), wc(e, o), e.beginPath(), o.buildPath(e, o.shape), e.clip()
        }
        n.allClipped = i
    }

    function Sc(t, e) {
        return t && e ? t[0] !== e[0] || t[1] !== e[1] || t[2] !== e[2] || t[3] !== e[3] || t[4] !== e[4] || t[5] !== e[5] : t || e ? !0 : !1
    }

    function Tc(t) {
        var e = cc(t), n = hc(t);
        return !(t.lineDash || !(+e ^ +n) || e && "string" != typeof t.fill || n && "string" != typeof t.stroke || t.strokePercent < 1 || t.strokeOpacity < 1 || t.fillOpacity < 1)
    }

    function Mc(t, e) {
        e.batchFill && t.fill(), e.batchStroke && t.stroke(), e.batchFill = "", e.batchStroke = ""
    }

    function Cc(t, e) {
        return e ? t.__hoverStyle || t.style : t.style
    }

    function Ic(t, e) {
        Dc(t, e, {inHover: !1, viewWidth: 0, viewHeight: 0}, !0)
    }

    function Dc(t, e, n, i) {
        var r = e.transform;
        if (!e.shouldBePainted(n.viewWidth, n.viewHeight, !1, !1)) return e.__dirty &= ~im.REDARAW_BIT, void (e.__isRendered = !1);
        var o = e.__clipPaths, a = n.prevElClipPaths, s = !1, l = !1;
        if ((!a || lc(o, a)) && (a && a.length && (Mc(t, n), t.restore(), l = s = !0, n.prevElClipPaths = null, n.allClipped = !1, n.prevEl = null), o && o.length && (Mc(t, n), t.save(), bc(o, t, n), s = !0), n.prevElClipPaths = o), n.allClipped) return void (e.__isRendered = !1);
        e.beforeBrush && e.beforeBrush(), e.innerBeforeBrush();
        var u = n.prevEl;
        u || (l = s = !0);
        var h = e instanceof Z_ && e.autoBatch && Tc(e.style);
        s || Sc(r, u.transform) ? (Mc(t, n), wc(t, e)) : h || Mc(t, n);
        var c = Cc(e, n.inHover);
        e instanceof Z_ ? (n.lastDrawType !== jT && (l = !0, n.lastDrawType = jT), _c(t, e, u, l, n), h && (n.batchFill || n.batchStroke) || t.beginPath(), gc(t, e, c, h), h && (n.batchFill = c.fill || "", n.batchStroke = c.stroke || "")) : e instanceof $_ ? (n.lastDrawType !== ZT && (l = !0, n.lastDrawType = ZT), _c(t, e, u, l, n), vc(t, e, c)) : e instanceof tx ? (n.lastDrawType !== qT && (l = !0, n.lastDrawType = qT), xc(t, e, u, l, n), yc(t, e, c)) : e instanceof Aw && (n.lastDrawType !== KT && (l = !0, n.lastDrawType = KT), Ac(t, e, n)), h && i && Mc(t, n), e.innerAfterBrush(), e.afterBrush && e.afterBrush(), n.prevEl = e, e.__dirty = 0, e.__isRendered = !0
    }

    function Ac(t, e, n) {
        var i = e.getDisplayables(), r = e.getTemporalDisplayables();
        t.save();
        var o, a, s = {
            prevElClipPaths: null,
            prevEl: null,
            allClipped: !1,
            viewWidth: n.viewWidth,
            viewHeight: n.viewHeight,
            inHover: n.inHover
        };
        for (o = e.getCursor(), a = i.length; a > o; o++) {
            var l = i[o];
            l.beforeBrush && l.beforeBrush(), l.innerBeforeBrush(), Dc(t, l, s, o === a - 1), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), s.prevEl = l
        }
        for (var u = 0, h = r.length; h > u; u++) {
            var l = r[u];
            l.beforeBrush && l.beforeBrush(), l.innerBeforeBrush(), Dc(t, l, s, u === h - 1), l.innerAfterBrush(), l.afterBrush && l.afterBrush(), s.prevEl = l
        }
        e.clearTemporalDisplayables(), e.notClear = !0, t.restore()
    }

    function kc(t, e) {
        function n(t) {
            function e() {
                for (var t = 1, e = 0, n = m.length; n > e; ++e) t = Ni(t, m[e]);
                for (var i = 1, e = 0, n = v.length; n > e; ++e) i = Ni(i, v[e].length);
                t *= i;
                var r = _ * m.length * v.length;
                return {
                    width: Math.max(1, Math.min(t, s.maxTileWidth)),
                    height: Math.max(1, Math.min(r, s.maxTileHeight))
                }
            }

            function n() {
                function t(t, e, n, a, l) {
                    var u = o ? 1 : i, h = rc(l, t * u, e * u, n * u, a * u, s.color, s.symbolKeepAspect);
                    o ? w.appendChild(r.painter.paintOne(h)) : Ic(d, h)
                }

                d && (d.clearRect(0, 0, x.width, x.height), s.backgroundColor && (d.fillStyle = s.backgroundColor, d.fillRect(0, 0, x.width, x.height)));
                for (var e = 0, n = 0; n < y.length; ++n) e += y[n];
                if (!(0 >= e)) for (var a = -_, l = 0, u = 0, h = 0; a < b.height;) {
                    if (l % 2 === 0) {
                        for (var c = u / 2 % v.length, p = 0, f = 0, m = 0; p < 2 * b.width;) {
                            for (var S = 0, n = 0; n < g[h].length; ++n) S += g[h][n];
                            if (0 >= S) break;
                            if (f % 2 === 0) {
                                var T = .5 * (1 - s.symbolSize), M = p + g[h][f] * T, C = a + y[l] * T,
                                    I = g[h][f] * s.symbolSize, D = y[l] * s.symbolSize, A = m / 2 % v[c].length;
                                t(M, C, I, D, v[c][A])
                            }
                            p += g[h][f], ++m, ++f, f === g[h].length && (f = 0)
                        }
                        ++h, h === g.length && (h = 0)
                    }
                    a += y[l], ++u, ++l, l === y.length && (l = 0)
                }
            }

            for (var a = [i], l = !0, u = 0; u < JT.length; ++u) {
                var h = s[JT[u]], c = typeof h;
                if (null != h && !T(h) && "string" !== c && "number" !== c && "boolean" !== c) {
                    l = !1;
                    break
                }
                a.push(h)
            }
            var p;
            if (l) {
                p = a.join(",") + (o ? "-svg" : "");
                var f = QT.get(p);
                f && (o ? t.svgElement = f : t.image = f)
            }
            var d, g = Pc(s.dashArrayX), y = Oc(s.dashArrayY), v = Lc(s.symbol), m = Rc(g), _ = Bc(y), x = !o && By(),
                w = o && r.painter.createSVGElement("g"), b = e();
            x && (x.width = b.width * i, x.height = b.height * i, d = x.getContext("2d")), n(), l && QT.put(p, x || w), t.image = x, t.svgElement = w, t.svgWidth = b.width, t.svgHeight = b.height
        }

        if ("none" === t) return null;
        var i = e.getDevicePixelRatio(), r = e.getZr(), o = "svg" === r.painter.type;
        t.dirty && $T["delete"](t);
        var a = $T.get(t);
        if (a) return a;
        var s = c(t, {
            symbol: "rect",
            symbolSize: 1,
            symbolKeepAspect: !0,
            color: "rgba(0, 0, 0, 0.2)",
            backgroundColor: null,
            dashArrayX: 5,
            dashArrayY: 5,
            rotation: 0,
            maxTileWidth: 512,
            maxTileHeight: 512
        });
        "none" === s.backgroundColor && (s.backgroundColor = null);
        var l = {repeat: "repeat"};
        return n(l), l.rotation = s.rotation, l.scaleX = l.scaleY = o ? 1 : 1 / i, $T.set(t, l), t.dirty = !1, l
    }

    function Lc(t) {
        if (!t || 0 === t.length) return [["rect"]];
        if ("string" == typeof t) return [[t]];
        for (var e = !0, n = 0; n < t.length; ++n) if ("string" != typeof t[n]) {
            e = !1;
            break
        }
        if (e) return Lc([t]);
        for (var i = [], n = 0; n < t.length; ++n) i.push("string" == typeof t[n] ? [t[n]] : t[n]);
        return i
    }

    function Pc(t) {
        if (!t || 0 === t.length) return [[0, 0]];
        if ("number" == typeof t) {
            var e = Math.ceil(t);
            return [[e, e]]
        }
        for (var n = !0, i = 0; i < t.length; ++i) if ("number" != typeof t[i]) {
            n = !1;
            break
        }
        if (n) return Pc([t]);
        for (var r = [], i = 0; i < t.length; ++i) if ("number" == typeof t[i]) {
            var e = Math.ceil(t[i]);
            r.push([e, e])
        } else {
            var e = v(t[i], function (t) {
                return Math.ceil(t)
            });
            r.push(e.length % 2 === 1 ? e.concat(e) : e)
        }
        return r
    }

    function Oc(t) {
        if (!t || "object" == typeof t && 0 === t.length) return [0, 0];
        if ("number" == typeof t) {
            var e = Math.ceil(t);
            return [e, e]
        }
        var n = v(t, function (t) {
            return Math.ceil(t)
        });
        return t.length % 2 ? n.concat(n) : n
    }

    function Rc(t) {
        return v(t, function (t) {
            return Bc(t)
        })
    }

    function Bc(t) {
        for (var e = 0, n = 0; n < t.length; ++n) e += t[n];
        return t.length % 2 === 1 ? 2 * e : e
    }

    function Ec(t, e) {
        t.eachRawSeries(function (n) {
            if (!t.isSeriesFiltered(n)) {
                var i = n.getData();
                i.hasItemVisual() && i.each(function (t) {
                    var n = i.getItemVisual(t, "decal");
                    if (n) {
                        var r = i.ensureUniqueItemVisual(t, "style");
                        r.decal = kc(n, e)
                    }
                });
                var r = i.getVisual("decal");
                if (r) {
                    var o = i.getVisual("style");
                    o.decal = kc(r, e)
                }
            }
        })
    }

    function zc(t) {
        return function () {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return this.isDisposed() ? void 0 : Fc(this, t, e)
        }
    }

    function Nc(t) {
        return function () {
            for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
            return Fc(this, t, e)
        }
    }

    function Fc(t, e, n) {
        return n[0] = n[0] && n[0].toLowerCase(), jy.prototype[e].apply(t, n)
    }

    function Vc(t, e, n) {
        var i = Uc(t);
        if (i) return i;
        var r = new nC(t, e, n);
        return r.id = "ec_" + yC++, dC[r.id] = r, lr(t, mC, r.id), QM(r), eM(uC, function (t) {
            t(r)
        }), r
    }

    function Hc(t) {
        if (T(t)) {
            var e = t;
            t = null, eM(e, function (e) {
                null != e.group && (t = e.group)
            }), t = t || "g_" + vC++, eM(e, function (e) {
                e.group = t
            })
        }
        return gC[t] = !0, t
    }

    function Wc(t) {
        gC[t] = !1
    }

    function Gc(t) {
        "string" == typeof t ? t = dC[t] : t instanceof nC || (t = Uc(t)), t instanceof nC && !t.isDisposed() && t.dispose()
    }

    function Uc(t) {
        return dC[ur(t, mC)]
    }

    function Yc(t) {
        return dC[t]
    }

    function Xc(t, e) {
        pC[t] = e
    }

    function jc(t) {
        rM(lC, t) < 0 && lC.push(t)
    }

    function qc(t, e) {
        np(sC, t, e, pM)
    }

    function Zc(t) {
        rM(uC, t) < 0 && t && uC.push(t)
    }

    function Kc(t) {
        rM(hC, t) < 0 && t && hC.push(t)
    }

    function $c(t, e, n) {
        "function" == typeof e && (n = e, e = "");
        var i = iM(t) ? t.type : [t, t = {event: e}][0];
        t.event = (t.event || i).toLowerCase(), e = t.event, aC[e] || (tM(DM.test(i) && DM.test(e)), oC[i] || (oC[i] = {
            action: n,
            actionInfo: t
        }), aC[e] = i)
    }

    function Qc(t, e) {
        rS.register(t, e)
    }

    function Jc(t) {
        var e = rS.get(t);
        return e ? e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice() : void 0
    }

    function tp(t, e) {
        np(cC, t, e, dM, "layout")
    }

    function ep(t, e) {
        np(cC, t, e, vM, "visual")
    }

    function np(t, e, n, i, r) {
        if ((nM(e) || iM(e)) && (n = e, e = i), !(rM(xC, n) >= 0)) {
            xC.push(n);
            var o = tT.wrapStageHandler(n, r);
            o.__prio = e, o.__raw = n, t.push(o)
        }
    }

    function ip(t, e) {
        fC[t] = e
    }

    function rp(t) {
        r("createCanvas", t)
    }

    function op(t, e, n) {
        pT.registerMap(t, e, n)
    }

    function ap(t) {
        var e = pT.retrieveMap(t);
        return e && e[0] && {geoJson: e[0].geoJSON, specialAreas: e[0].specialAreas}
    }

    function sp(t) {
        return null == t ? 0 : t.length || 1
    }

    function lp(t) {
        return t
    }

    function up(t) {
        var e = {}, n = e.encode = {}, i = X(), r = [], o = [],
            a = e.userOutput = {dimensionNames: t.dimensions.slice(), encode: {}};
        y(t.dimensions, function (e) {
            var s = t.getDimensionInfo(e), l = s.coordDim;
            if (l) {
                var u = s.coordDimIndex;
                hp(n, l)[u] = e, s.isExtraCoord || (i.set(l, 1), pp(s.type) && (r[0] = e), hp(a.encode, l)[u] = s.index), s.defaultTooltip && o.push(e)
            }
            Ob.each(function (t, e) {
                var i = hp(n, e), r = s.otherDims[e];
                null != r && r !== !1 && (i[r] = s.name)
            })
        });
        var s = [], l = {};
        i.each(function (t, e) {
            var i = n[e];
            l[e] = i[0], s = s.concat(i)
        }), e.dataDimsOnCoord = s, e.encodeFirstDimNotExtra = l;
        var u = n.label;
        u && u.length && (r = u.slice());
        var h = n.tooltip;
        return h && h.length ? o = h.slice() : o.length || (o = r.slice()), n.defaultedLabel = r, n.defaultedTooltip = o, e
    }

    function hp(t, e) {
        return t.hasOwnProperty(e) || (t[e] = []), t[e]
    }

    function cp(t) {
        return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
    }

    function pp(t) {
        return !("ordinal" === t || "time" === t)
    }

    function fp(t, e, n) {
        function i(t, e, n) {
            null != Ob.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, a.set(e, !0))
        }

        uu(e) || (e = cu(e)), n = n || {}, t = (t || []).slice();
        for (var r = (n.dimsDef || []).slice(), o = X(), a = X(), l = [], u = dp(e, t, r, n.dimCount), p = 0; u > p; p++) {
            var f = r[p], d = r[p] = h({}, A(f) ? f : {name: f}), g = d.name, v = l[p] = new NC;
            null != g && null == o.get(g) && (v.name = v.displayName = g, o.set(g, p)), null != d.type && (v.type = d.type), null != d.displayName && (v.displayName = d.displayName)
        }
        var m = n.encodeDef;
        !m && n.encodeDefaulter && (m = n.encodeDefaulter(e, u));
        var _ = X(m);
        _.each(function (t, e) {
            var n = Vi(t).slice();
            if (1 === n.length && !C(n[0]) && n[0] < 0) return void _.set(e, !1);
            var r = _.set(e, []);
            y(n, function (t, n) {
                var a = C(t) ? o.get(t) : t;
                null != a && u > a && (r[n] = a, i(l[a], e, n))
            })
        });
        var x = 0;
        y(t, function (t) {
            var e, n, r, o;
            if (C(t)) e = t, o = {}; else {
                o = t, e = o.name;
                var a = o.ordinalMeta;
                o.ordinalMeta = null, o = s(o), o.ordinalMeta = a, n = o.dimsDef, r = o.otherDims, o.name = o.coordDim = o.coordDimIndex = o.dimsDef = o.otherDims = null
            }
            var u = _.get(e);
            if (u !== !1) {
                if (u = Vi(u), !u.length) for (var h = 0; h < (n && n.length || 1); h++) {
                    for (; x < l.length && null != l[x].coordDim;) x++;
                    x < l.length && u.push(x++)
                }
                y(u, function (t, a) {
                    var s = l[t];
                    if (i(c(s, o), e, a), null == s.name && n) {
                        var u = n[a];
                        !A(u) && (u = {name: u}), s.name = s.displayName = u.name, s.defaultTooltip = u.defaultTooltip
                    }
                    r && c(s.otherDims, r)
                })
            }
        });
        var w = n.generateCoord, b = n.generateCoordCount, S = null != b;
        b = w ? b || 1 : 0;
        for (var T = w || "value", M = 0; u > M; M++) {
            var v = l[M] = l[M] || new NC, I = v.coordDim;
            null == I && (v.coordDim = gp(T, a, S), v.coordDimIndex = 0, (!w || 0 >= b) && (v.isExtraCoord = !0), b--), null == v.name && (v.name = gp(v.coordDim, o, !1)), null != v.type || Dl(e, M) !== Wb.Must && (!v.isExtraCoord || null == v.otherDims.itemName && null == v.otherDims.seriesName) || (v.type = "ordinal")
        }
        return l
    }

    function dp(t, e, n, i) {
        var r = Math.max(t.dimensionsDetectedCount || 1, e.length, n.length, i || 0);
        return y(e, function (t) {
            var e;
            A(t) && (e = t.dimsDef) && (r = Math.max(r, e.length))
        }), r
    }

    function gp(t, e, n) {
        if (n || null != e.get(t)) {
            for (var i = 0; null != e.get(t + i);) i++;
            t += i
        }
        return e.set(t, !0), t
    }

    function yp(t, e) {
        return e = e || {}, fp(e.coordDimensions || [], t, {
            dimsDef: e.dimensionsDefine || t.dimensionsDefine,
            encodeDef: e.encodeDefine || t.encodeDefine,
            dimCount: e.dimensionsCount,
            encodeDefaulter: e.encodeDefaulter,
            generateCoord: e.generateCoord,
            generateCoordCount: e.generateCoordCount
        })
    }

    function vp(t) {
        var e = t.get("coordinateSystem"), n = new QC(e), i = JC[e];
        return i ? (i(t, n, n.axisMap, n.categoryAxisMap), n) : void 0
    }

    function mp(t) {
        return "category" === t.get("type")
    }

    function _p(t, e, n) {
        n = n || {};
        var i, r, o, a, s = n.byIndex, l = n.stackedCoordDimension, u = !(!t || !t.get("stack"));
        if (y(e, function (t, n) {
            C(t) && (e[n] = t = {name: t}), u && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t))
        }), !r || s || i || (s = !0), r) {
            o = "__\x00ecstackresult", a = "__\x00ecstackedover", i && (i.createInvertedIndices = !0);
            var h = r.coordDim, c = r.type, p = 0;
            y(e, function (t) {
                t.coordDim === h && p++
            }), e.push({
                name: o,
                coordDim: h,
                coordDimIndex: p,
                type: c,
                isExtraCoord: !0,
                isCalculationCoord: !0
            }), p++, e.push({name: a, coordDim: a, coordDimIndex: p, type: c, isExtraCoord: !0, isCalculationCoord: !0})
        }
        return {
            stackedDimension: r && r.name,
            stackedByDimension: i && i.name,
            isStackedByIndex: s,
            stackedOverDimension: a,
            stackResultDimension: o
        }
    }

    function xp(t, e) {
        return !!e && e === t.getCalculationInfo("stackedDimension")
    }

    function wp(t, e) {
        return xp(t, e) ? t.getCalculationInfo("stackResultDimension") : e
    }

    function bp(t, e, n) {
        n = n || {}, uu(t) || (t = cu(t));
        var i, r = e.get("coordinateSystem"), o = rS.get(r), a = vp(e);
        a && a.coordSysDims && (i = v(a.coordSysDims, function (t) {
            var e = {name: t}, n = a.axisMap.get(t);
            if (n) {
                var i = n.get("type");
                e.type = cp(i)
            }
            return e
        })), i || (i = o && (o.getDimensionsInfo ? o.getDimensionsInfo() : o.dimensions.slice()) || ["x", "y"]);
        var s, l, u = n.useEncodeDefaulter, h = yp(t, {
            coordDimensions: i,
            generateCoord: n.generateCoord,
            encodeDefaulter: M(u) ? u : u ? S(Tl, i, e) : null
        });
        a && y(h, function (t, e) {
            var i = t.coordDim, r = a.categoryAxisMap.get(i);
            r && (null == s && (s = e), t.ordinalMeta = r.getOrdinalMeta(), n.createInvertedIndices && (t.createInvertedIndices = !0)), null != t.otherDims.itemName && (l = !0)
        }), l || null == s || (h[s].otherDims.itemName = 0);
        var c = _p(e, h), p = new $C(h, e);
        p.setCalculationInfo(c);
        var f = null != s && Sp(t) ? function (t, e, n, i) {
            return i === s ? n : this.defaultDimValueGetter(t, e, n, i)
        } : null;
        return p.hasItemOption = !1, p.initData(t, null, f), p
    }

    function Sp(t) {
        if (t.sourceFormat === Rb) {
            var e = Tp(t.data || []);
            return null != e && !T(Wi(e))
        }
    }

    function Tp(t) {
        for (var e = 0; e < t.length && null == t[e];) e++;
        return t[e]
    }

    function Mp(t) {
        return A(t) && null != t.value ? t.value : t + ""
    }

    function Cp(t, e, n, i) {
        var r = {}, o = t[1] - t[0], a = r.interval = Li(o / e, !0);
        null != n && n > a && (a = r.interval = n), null != i && a > i && (a = r.interval = i);
        var s = r.intervalPrecision = Ip(a),
            l = r.niceTickExtent = [nI(Math.ceil(t[0] / a) * a, s), nI(Math.floor(t[1] / a) * a, s)];
        return Ap(l, t), r
    }

    function Ip(t) {
        return Si(t) + 2
    }

    function Dp(t, e, n) {
        t[e] = Math.max(Math.min(t[e], n[1]), n[0])
    }

    function Ap(t, e) {
        !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), Dp(t, 0, e), Dp(t, 1, e), t[0] > t[1] && (t[0] = t[1])
    }

    function kp(t, e) {
        return t >= e[0] && t <= e[1]
    }

    function Lp(t, e) {
        return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
    }

    function Pp(t, e) {
        return t * (e[1] - e[0]) + e[0]
    }

    function Op(t) {
        return t.get("stack") || aI + t.seriesIndex
    }

    function Rp(t) {
        return t.dim + t.index
    }

    function Bp(t, e) {
        var n = [];
        return e.eachSeriesByType(t, function (t) {
            Hp(t) && !Wp(t) && n.push(t)
        }), n
    }

    function Ep(t) {
        var e = {};
        y(t, function (t) {
            var n = t.coordinateSystem, i = n.getBaseAxis();
            if ("time" === i.type || "value" === i.type) for (var r = t.getData(), o = i.dim + "_" + i.index, a = r.mapDimension(i.dim), s = 0, l = r.count(); l > s; ++s) {
                var u = r.get(a, s);
                e[o] ? e[o].push(u) : e[o] = [u]
            }
        });
        var n = {};
        for (var i in e) if (e.hasOwnProperty(i)) {
            var r = e[i];
            if (r) {
                r.sort(function (t, e) {
                    return t - e
                });
                for (var o = null, a = 1; a < r.length; ++a) {
                    var s = r[a] - r[a - 1];
                    s > 0 && (o = null === o ? s : Math.min(o, s))
                }
                n[i] = o
            }
        }
        return n
    }

    function zp(t) {
        var e = Ep(t), n = [];
        return y(t, function (t) {
            var i, r = t.coordinateSystem, o = r.getBaseAxis(), a = o.getExtent();
            if ("category" === o.type) i = o.getBandWidth(); else if ("value" === o.type || "time" === o.type) {
                var s = o.dim + "_" + o.index, l = e[s], u = Math.abs(a[1] - a[0]), h = o.scale.getExtent(),
                    c = Math.abs(h[1] - h[0]);
                i = l ? u / c * l : u
            } else {
                var p = t.getData();
                i = Math.abs(a[1] - a[0]) / p.count()
            }
            var f = _i(t.get("barWidth"), i), d = _i(t.get("barMaxWidth"), i), g = _i(t.get("barMinWidth") || 1, i),
                y = t.get("barGap"), v = t.get("barCategoryGap");
            n.push({
                bandWidth: i,
                barWidth: f,
                barMaxWidth: d,
                barMinWidth: g,
                barGap: y,
                barCategoryGap: v,
                axisKey: Rp(o),
                stackId: Op(t)
            })
        }), Np(n)
    }

    function Np(t) {
        var e = {};
        y(t, function (t) {
            var n = t.axisKey, i = t.bandWidth, r = e[n] || {
                bandWidth: i,
                remainedWidth: i,
                autoWidthCount: 0,
                categoryGap: null,
                gap: "20%",
                stacks: {}
            }, o = r.stacks;
            e[n] = r;
            var a = t.stackId;
            o[a] || r.autoWidthCount++, o[a] = o[a] || {width: 0, maxWidth: 0};
            var s = t.barWidth;
            s && !o[a].width && (o[a].width = s, s = Math.min(r.remainedWidth, s), r.remainedWidth -= s);
            var l = t.barMaxWidth;
            l && (o[a].maxWidth = l);
            var u = t.barMinWidth;
            u && (o[a].minWidth = u);
            var h = t.barGap;
            null != h && (r.gap = h);
            var c = t.barCategoryGap;
            null != c && (r.categoryGap = c)
        });
        var n = {};
        return y(e, function (t, e) {
            n[e] = {};
            var i = t.stacks, r = t.bandWidth, o = t.categoryGap;
            if (null == o) {
                var a = w(i).length;
                o = Math.max(35 - 4 * a, 15) + "%"
            }
            var s = _i(o, r), l = _i(t.gap, 1), u = t.remainedWidth, h = t.autoWidthCount,
                c = (u - s) / (h + (h - 1) * l);
            c = Math.max(c, 0), y(i, function (t) {
                var e = t.maxWidth, n = t.minWidth;
                if (t.width) {
                    var i = t.width;
                    e && (i = Math.min(i, e)), n && (i = Math.max(i, n)), t.width = i, u -= i + l * i, h--
                } else {
                    var i = c;
                    e && i > e && (i = Math.min(e, u)), n && n > i && (i = n), i !== c && (t.width = i, u -= i + l * i, h--)
                }
            }), c = (u - s) / (h + (h - 1) * l), c = Math.max(c, 0);
            var p, f = 0;
            y(i, function (t) {
                t.width || (t.width = c), p = t, f += t.width * (1 + l)
            }), p && (f -= p.width * l);
            var d = -f / 2;
            y(i, function (t, i) {
                n[e][i] = n[e][i] || {bandWidth: r, offset: d, width: t.width}, d += t.width * (1 + l)
            })
        }), n
    }

    function Fp(t, e, n) {
        if (t && e) {
            var i = t[Rp(e)];
            return null != i && null != n ? i[Op(n)] : i
        }
    }

    function Vp(t, e) {
        var n = Bp(t, e), i = zp(n), r = {};
        y(n, function (t) {
            var e = t.getData(), n = t.coordinateSystem, o = n.getBaseAxis(), a = Op(t), s = i[Rp(o)][a], l = s.offset,
                u = s.width, h = n.getOtherAxis(o), c = t.get("barMinHeight") || 0;
            r[a] = r[a] || [], e.setLayout({bandWidth: s.bandWidth, offset: l, size: u});
            for (var p = e.mapDimension(h.dim), f = e.mapDimension(o.dim), d = xp(e, p), g = h.isHorizontal(), y = Gp(o, h, d), v = 0, m = e.count(); m > v; v++) {
                var _ = e.get(p, v), x = e.get(f, v), w = _ >= 0 ? "p" : "n", b = y;
                d && (r[a][x] || (r[a][x] = {p: y, n: y}), b = r[a][x][w]);
                var S = void 0, T = void 0, M = void 0, C = void 0;
                if (g) {
                    var I = n.dataToPoint([_, x]);
                    S = b, T = I[1] + l, M = I[0] - y, C = u, Math.abs(M) < c && (M = (0 > M ? -1 : 1) * c), isNaN(M) || d && (r[a][x][w] += M)
                } else {
                    var I = n.dataToPoint([x, _]);
                    S = I[0] + l, T = b, M = u, C = I[1] - y, Math.abs(C) < c && (C = (0 >= C ? -1 : 1) * c), isNaN(C) || d && (r[a][x][w] += C)
                }
                e.setItemLayout(v, {x: S, y: T, width: M, height: C})
            }
        })
    }

    function Hp(t) {
        return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
    }

    function Wp(t) {
        return t.pipelineContext && t.pipelineContext.large
    }

    function Gp(t, e) {
        return e.toGlobalCoord(e.dataToCoord("log" === e.type ? 1 : 0))
    }

    function Up(t, e, n, i) {
        var r = Di(e), o = Di(n), a = function (t) {
            return Us(r, t, i) === Us(o, t, i)
        }, s = function () {
            return a("year")
        }, l = function () {
            return s() && a("month")
        }, u = function () {
            return l() && a("day")
        }, h = function () {
            return u() && a("hour")
        }, c = function () {
            return h() && a("minute")
        }, p = function () {
            return c() && a("second")
        }, f = function () {
            return p() && a("millisecond")
        };
        switch (t) {
            case "year":
                return s();
            case "month":
                return l();
            case "day":
                return u();
            case "hour":
                return h();
            case "minute":
                return c();
            case "second":
                return p();
            case "millisecond":
                return f()
        }
    }

    function Yp(t) {
        return t /= hb, t > 16 ? 16 : t > 7.5 ? 7 : t > 3.5 ? 4 : t > 1.5 ? 2 : 1
    }

    function Xp(t) {
        var e = 30 * hb;
        return t /= e, t > 6 ? 6 : t > 3 ? 3 : t > 2 ? 2 : 1
    }

    function jp(t) {
        return t /= ub, t > 12 ? 12 : t > 6 ? 6 : t > 3.5 ? 4 : t > 2 ? 2 : 1
    }

    function qp(t, e) {
        return t /= e ? lb : sb, t > 30 ? 30 : t > 20 ? 20 : t > 15 ? 15 : t > 10 ? 10 : t > 5 ? 5 : t > 2 ? 2 : 1
    }

    function Zp(t) {
        return Li(t, !0)
    }

    function Kp(t, e, n) {
        var i = new Date(t);
        switch (Ns(e)) {
            case "year":
            case "month":
                i[Js(n)](0);
            case "day":
                i[tl(n)](1);
            case "hour":
                i[el(n)](0);
            case "minute":
                i[nl(n)](0);
            case "second":
                i[il(n)](0), i[rl(n)](0)
        }
        return i.getTime()
    }

    function $p(t, e, n, i) {
        function r(t, e, n, r, o, a, s) {
            for (var l = new Date(e), u = e, h = l[r](); n > u && u <= i[1];) s.push({value: u}), h += t, l[o](h), u = l.getTime();
            s.push({value: u, notAdd: !0})
        }

        function o(t, o, a) {
            var s = [], l = !o.length;
            if (!Up(Ns(t), i[0], i[1], n)) {
                l && (o = [{value: Kp(new Date(i[0]), t, n)}, {value: i[1]}]);
                for (var u = 0; u < o.length - 1; u++) {
                    var h = o[u].value, c = o[u + 1].value;
                    if (h !== c) {
                        var p = void 0, f = void 0, d = void 0, g = !1;
                        switch (t) {
                            case "year":
                                p = Math.max(1, Math.round(e / hb / 365)), f = Ys(n), d = Qs(n);
                                break;
                            case "half-year":
                            case "quarter":
                            case "month":
                                p = Xp(e), f = Xs(n), d = Js(n);
                                break;
                            case "week":
                            case "half-week":
                            case "day":
                                p = Yp(e, 31), f = js(n), d = tl(n), g = !0;
                                break;
                            case "half-day":
                            case "quarter-day":
                            case "hour":
                                p = jp(e), f = qs(n), d = el(n);
                                break;
                            case "minute":
                                p = qp(e, !0), f = Zs(n), d = nl(n);
                                break;
                            case "second":
                                p = qp(e, !1), f = Ks(n), d = il(n);
                                break;
                            case "millisecond":
                                p = Zp(e), f = $s(n), d = rl(n)
                        }
                        r(p, h, c, f, d, g, s), "year" === t && a.length > 1 && 0 === u && a.unshift({value: a[0].value - p})
                    }
                }
                for (var u = 0; u < s.length; u++) a.push(s[u]);
                return s
            }
        }

        for (var a = 1e4, s = yb, l = 0, u = [], h = [], c = 0, p = 0, f = 0; f < s.length && l++ < a; ++f) {
            var d = Ns(s[f]);
            if (Fs(s[f])) {
                o(s[f], u[u.length - 1] || [], h);
                var g = s[f + 1] ? Ns(s[f + 1]) : null;
                if (d !== g) {
                    if (h.length) {
                        p = c, h.sort(function (t, e) {
                            return t.value - e.value
                        });
                        for (var y = [], m = 0; m < h.length; ++m) {
                            var x = h[m].value;
                            (0 === m || h[m - 1].value !== x) && (y.push(h[m]), x >= i[0] && x <= i[1] && c++)
                        }
                        var w = (i[1] - i[0]) / e;
                        if (c > 1.5 * w && p > w / 1.5) break;
                        if (u.push(y), c > w || t === s[f]) break
                    }
                    h = []
                }
            }
        }
        for (var b = _(v(u, function (t) {
            return _(t, function (t) {
                return t.value >= i[0] && t.value <= i[1] && !t.notAdd
            })
        }), function (t) {
            return t.length > 0
        }), S = [], T = b.length - 1, f = 0; f < b.length; ++f) for (var M = b[f], C = 0; C < M.length; ++C) S.push({
            value: M[C].value,
            level: T - f
        });
        S.sort(function (t, e) {
            return t.value - e.value
        });
        for (var I = [], f = 0; f < S.length; ++f) (0 === f || S[f].value !== S[f - 1].value) && I.push(S[f]);
        return I
    }

    function Qp(t, e) {
        return yI(t, gI(e))
    }

    function Jp(t, e, n) {
        var i = t.rawExtentInfo;
        return i ? i : (i = new SI(t, e, n), t.rawExtentInfo = i, i)
    }

    function tf(t, e) {
        return null == e ? null : E(e) ? 0 / 0 : t.parse(e)
    }

    function ef(t, e) {
        var n = t.type, i = Jp(t, e, t.getExtent()).calculate();
        t.setBlank(i.isBlank);
        var r = i.min, o = i.max, a = e.ecModel;
        if (a && "time" === n) {
            var s = Bp("bar", a), l = !1;
            if (y(s, function (t) {
                l = l || t.getBaseAxis() === e.axis
            }), l) {
                var u = zp(s), h = nf(r, o, e, u);
                r = h.min, o = h.max
            }
        }
        return {extent: [r, o], fixMin: i.minFixed, fixMax: i.maxFixed}
    }

    function nf(t, e, n, i) {
        var r = n.axis.getExtent(), o = r[1] - r[0], a = Fp(i, n.axis);
        if (void 0 === a) return {min: t, max: e};
        var s = 1 / 0;
        y(a, function (t) {
            s = Math.min(t.offset, s)
        });
        var l = -1 / 0;
        y(a, function (t) {
            l = Math.max(t.offset + t.width, l)
        }), s = Math.abs(s), l = Math.abs(l);
        var u = s + l, h = e - t, c = 1 - (s + l) / o, p = h / c - h;
        return e += p * (l / u), t -= p * (s / u), {min: t, max: e}
    }

    function rf(t, e) {
        var n = ef(t, e), i = n.extent, r = e.get("splitNumber");
        t instanceof wI && (t.base = e.get("logBase"));
        var o = t.type;
        t.setExtent(i[0], i[1]), t.niceExtent({
            splitNumber: r,
            fixMin: n.fixMin,
            fixMax: n.fixMax,
            minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null,
            maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null
        });
        var a = e.get("interval");
        null != a && t.setInterval && t.setInterval(a)
    }

    function of(t, e) {
        if (e = e || t.get("type")) switch (e) {
            case "category":
                return new iI({
                    ordinalMeta: t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(),
                    extent: [1 / 0, -1 / 0]
                });
            case "time":
                return new cI({locale: t.ecModel.getLocaleModel(), useUTC: t.ecModel.get("useUTC")});
            default:
                return new (tI.getClass(e) || oI)
        }
    }

    function af(t) {
        var e = t.scale.getExtent(), n = e[0], i = e[1];
        return !(n > 0 && i > 0 || 0 > n && 0 > i)
    }

    function sf(t) {
        var e = t.getLabelModel().get("formatter"), n = "category" === t.type ? t.scale.getExtent()[0] : null;
        return "time" === t.scale.type ? function (e) {
            return function (n, i) {
                return t.scale.getFormattedLabel(n, i, e)
            }
        }(e) : "string" == typeof e ? function (e) {
            return function (n) {
                var i = t.scale.getLabel(n), r = e.replace("{value}", null != i ? i : "");
                return r
            }
        }(e) : "function" == typeof e ? function (e) {
            return function (i, r) {
                return null != n && (r = i.value - n), e(lf(t, i), r, null != i.level ? {level: i.level} : null)
            }
        }(e) : function (e) {
            return t.scale.getLabel(e)
        }
    }

    function lf(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e.value
    }

    function uf(t) {
        var e = t.model, n = t.scale;
        if (e.get(["axisLabel", "show"]) && !n.isBlank()) {
            var i, r, o = n.getExtent();
            n instanceof iI ? r = n.count() : (i = n.getTicks(), r = i.length);
            var a, s = t.getLabelModel(), l = sf(t), u = 1;
            r > 40 && (u = Math.ceil(r / 40));
            for (var h = 0; r > h; h += u) {
                var c = i ? i[h] : {value: o[0] + h}, p = l(c, h), f = s.getTextRect(p),
                    d = hf(f, s.get("rotate") || 0);
                a ? a.union(d) : a = d
            }
            return a
        }
    }

    function hf(t, e) {
        var n = e * Math.PI / 180, i = t.width, r = t.height, o = i * Math.abs(Math.cos(n)) + Math.abs(r * Math.sin(n)),
            a = i * Math.abs(Math.sin(n)) + Math.abs(r * Math.cos(n)), s = new Wv(t.x, t.y, o, a);
        return s
    }

    function cf(t) {
        var e = t.get("interval");
        return null == e ? "auto" : e
    }

    function pf(t) {
        return "category" === t.type && 0 === cf(t.getLabelModel())
    }

    function ff(t, e) {
        var n = {};
        return y(t.mapDimensionsAll(e), function (e) {
            n[wp(t, e)] = !0
        }), w(n)
    }

    function df(t) {
        return bp(t.getSource(), t)
    }

    function gf(t, e) {
        var n = e;
        e instanceof $w || (n = new $w(e));
        var i = of(n);
        return i.setExtent(t[0], t[1]), rf(i, n), i
    }

    function yf(t) {
        d(t, CI)
    }

    function vf(t, e) {
        return e = e || {}, ws(t, null, null, "normal" !== e.state)
    }

    function mf(t) {
        return T(t) ? void y(t, function (t) {
            mf(t)
        }) : void (p(AI, t) >= 0 || (AI.push(t), M(t) && (t = {install: t}), t.install(kI)))
    }

    function _f(t, e) {
        return Math.abs(t - e) < LI
    }

    function xf(t, e, n) {
        var i = 0, r = t[0];
        if (!r) return !1;
        for (var o = 1; o < t.length; o++) {
            var a = t[o];
            i += fo(r[0], r[1], a[0], a[1], e, n), r = a
        }
        var s = t[0];
        return _f(r[0], s[0]) && _f(r[1], s[1]) || (i += fo(r[0], r[1], s[0], s[1], e, n)), 0 !== i
    }

    function wf(t) {
        if (!t.UTF8Encoding) return t;
        var e = t, n = e.UTF8Scale;
        null == n && (n = 1024);
        for (var i = e.features, r = 0; r < i.length; r++) {
            var o = i[r], a = o.geometry;
            if ("Polygon" === a.type) for (var s = a.coordinates, l = 0; l < s.length; l++) s[l] = bf(s[l], a.encodeOffsets[l], n); else if ("MultiPolygon" === a.type) for (var s = a.coordinates, l = 0; l < s.length; l++) for (var u = s[l], h = 0; h < u.length; h++) u[h] = bf(u[h], a.encodeOffsets[l][h], n)
        }
        return e.UTF8Encoding = !1, e
    }

    function bf(t, e, n) {
        for (var i = [], r = e[0], o = e[1], a = 0; a < t.length; a += 2) {
            var s = t.charCodeAt(a) - 64, l = t.charCodeAt(a + 1) - 64;
            s = s >> 1 ^ -(1 & s), l = l >> 1 ^ -(1 & l), s += r, l += o, r = s, o = l, i.push([s / n, l / n])
        }
        return i
    }

    function Sf(t, e) {
        return t = wf(t), v(_(t.features, function (t) {
            return t.geometry && t.properties && t.geometry.coordinates.length > 0
        }), function (t) {
            var n = t.properties, i = t.geometry, r = [];
            if ("Polygon" === i.type) {
                var o = i.coordinates;
                r.push({type: "polygon", exterior: o[0], interiors: o.slice(1)})
            }
            if ("MultiPolygon" === i.type) {
                var o = i.coordinates;
                y(o, function (t) {
                    t[0] && r.push({type: "polygon", exterior: t[0], interiors: t.slice(1)})
                })
            }
            var a = new PI(n[e || "name"], r, n.cp);
            return a.properties = n, a
        })
    }

    function Tf(t) {
        return "category" === t.type ? Cf(t) : Af(t)
    }

    function Mf(t, e) {
        return "category" === t.type ? Df(t, e) : {
            ticks: v(t.scale.getTicks(), function (t) {
                return t.value
            })
        }
    }

    function Cf(t) {
        var e = t.getLabelModel(), n = If(t, e);
        return !e.get("show") || t.scale.isBlank() ? {labels: [], labelCategoryInterval: n.labelCategoryInterval} : n
    }

    function If(t, e) {
        var n = kf(t, "labels"), i = cf(e), r = Lf(n, i);
        if (r) return r;
        var o, a;
        return M(i) ? o = zf(t, i) : (a = "auto" === i ? Of(t) : i, o = Ef(t, a)), Pf(n, i, {
            labels: o,
            labelCategoryInterval: a
        })
    }

    function Df(t, e) {
        var n = kf(t, "ticks"), i = cf(e), r = Lf(n, i);
        if (r) return r;
        var o, a;
        if ((!e.get("show") || t.scale.isBlank()) && (o = []), M(i)) o = zf(t, i, !0); else if ("auto" === i) {
            var s = If(t, t.getLabelModel());
            a = s.labelCategoryInterval, o = v(s.labels, function (t) {
                return t.tickValue
            })
        } else a = i, o = Ef(t, a, !0);
        return Pf(n, i, {ticks: o, tickCategoryInterval: a})
    }

    function Af(t) {
        var e = t.scale.getTicks(), n = sf(t);
        return {
            labels: v(e, function (e, i) {
                return {formattedLabel: n(e, i), rawLabel: t.scale.getLabel(e), tickValue: e.value}
            })
        }
    }

    function kf(t, e) {
        return NI(t)[e] || (NI(t)[e] = [])
    }

    function Lf(t, e) {
        for (var n = 0; n < t.length; n++) if (t[n].key === e) return t[n].value
    }

    function Pf(t, e, n) {
        return t.push({key: e, value: n}), n
    }

    function Of(t) {
        var e = NI(t).autoInterval;
        return null != e ? e : NI(t).autoInterval = t.calculateCategoryInterval()
    }

    function Rf(t) {
        var e = Bf(t), n = sf(t), i = (e.axisRotate - e.labelRotate) / 180 * Math.PI, r = t.scale, o = r.getExtent(),
            a = r.count();
        if (o[1] - o[0] < 1) return 0;
        var s = 1;
        a > 40 && (s = Math.max(1, Math.floor(a / 40)));
        for (var l = o[0], u = t.dataToCoord(l + 1) - t.dataToCoord(l), h = Math.abs(u * Math.cos(i)), c = Math.abs(u * Math.sin(i)), p = 0, f = 0; l <= o[1]; l += s) {
            var d = 0, g = 0, y = Rn(n({value: l}), e.font, "center", "top");
            d = 1.3 * y.width, g = 1.3 * y.height, p = Math.max(p, d, 7), f = Math.max(f, g, 7)
        }
        var v = p / h, m = f / c;
        isNaN(v) && (v = 1 / 0), isNaN(m) && (m = 1 / 0);
        var _ = Math.max(0, Math.floor(Math.min(v, m))), x = NI(t.model), w = t.getExtent(), b = x.lastAutoInterval,
            S = x.lastTickCount;
        return null != b && null != S && Math.abs(b - _) <= 1 && Math.abs(S - a) <= 1 && b > _ && x.axisExtent0 === w[0] && x.axisExtent1 === w[1] ? _ = b : (x.lastTickCount = a, x.lastAutoInterval = _, x.axisExtent0 = w[0], x.axisExtent1 = w[1]), _
    }

    function Bf(t) {
        var e = t.getLabelModel();
        return {
            axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
            labelRotate: e.get("rotate") || 0,
            font: e.getFont()
        }
    }

    function Ef(t, e, n) {
        function i(t) {
            var e = {value: t};
            l.push(n ? t : {formattedLabel: r(e), rawLabel: o.getLabel(e), tickValue: t})
        }

        var r = sf(t), o = t.scale, a = o.getExtent(), s = t.getLabelModel(), l = [], u = Math.max((e || 0) + 1, 1),
            h = a[0], c = o.count();
        0 !== h && u > 1 && c / u > 2 && (h = Math.round(Math.ceil(h / u) * u));
        var p = pf(t), f = s.get("showMinLabel") || p, d = s.get("showMaxLabel") || p;
        f && h !== a[0] && i(a[0]);
        for (var g = h; g <= a[1]; g += u) i(g);
        return d && g - u !== a[1] && i(a[1]), l
    }

    function zf(t, e, n) {
        var i = t.scale, r = sf(t), o = [];
        return y(i.getTicks(), function (t) {
            var a = i.getLabel(t), s = t.value;
            e(t.value, a) && o.push(n ? s : {formattedLabel: r(t), rawLabel: a, tickValue: s})
        }), o
    }

    function Nf(t, e) {
        var n = t[1] - t[0], i = e, r = n / i / 2;
        t[0] += r, t[1] -= r
    }

    function Ff(t, e, n, i) {
        function r(t, e) {
            return t = xi(t), e = xi(e), p ? t > e : e > t
        }

        var o = e.length;
        if (t.onBand && !n && o) {
            var a, s, l = t.getExtent();
            if (1 === o) e[0].coord = l[0], a = e[1] = {coord: l[0]}; else {
                var u = e[o - 1].tickValue - e[0].tickValue, h = (e[o - 1].coord - e[0].coord) / u;
                y(e, function (t) {
                    t.coord -= h / 2
                });
                var c = t.scale.getExtent();
                s = 1 + c[1] - e[o - 1].tickValue, a = {coord: e[o - 1].coord + h * s}, e.push(a)
            }
            var p = l[0] > l[1];
            r(e[0].coord, l[0]) && (i ? e[0].coord = l[0] : e.shift()), i && r(l[0], e[0].coord) && e.unshift({coord: l[0]}), r(l[1], a.coord) && (i ? a.coord = l[1] : e.pop()), i && r(a.coord, l[1]) && e.push({coord: l[1]})
        }
    }

    function Vf(t) {
        var e = Ib.extend(t);
        return Ib.registerClass(e), e
    }

    function Hf(t) {
        var e = zS.extend(t);
        return zS.registerClass(e), e
    }

    function Wf(t) {
        var e = ES.extend(t);
        return ES.registerClass(e), e
    }

    function Gf(t) {
        var e = VS.extend(t);
        return VS.registerClass(e), e
    }

    function Uf() {
        return !1
    }

    function Yf(t, e, n) {
        var i = By(), r = e.getWidth(), o = e.getHeight(), a = i.style;
        return a && (a.position = "absolute", a.left = "0", a.top = "0", a.width = r + "px", a.height = o + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = o * n, i
    }

    function Xf(t) {
        return parseInt(t, 10)
    }

    function jf(t) {
        return t ? t.__builtin__ ? !0 : "function" != typeof t.resize || "function" != typeof t.refresh ? !1 : !0 : !1
    }

    function qf(t, e) {
        var n = document.createElement("div");
        return n.style.cssText = ["position:relative", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n
    }

    function Zf(t) {
        t.registerPainter("canvas", XI)
    }

    function Kf(t) {
        t.registerComponentModel(jI), t.registerComponentView(qI)
    }

    function $f(t) {
        return {
            seriesType: t, reset: function (t, e, n) {
                var i = t.getData(), r = t.get("sampling"), o = t.coordinateSystem, a = i.count();
                if (a > 10 && "cartesian2d" === o.type && r) {
                    var s = o.getBaseAxis(), l = o.getOtherAxis(s), u = s.getExtent(), h = n.getDevicePixelRatio(),
                        c = Math.abs(u[1] - u[0]) * (h || 1), p = Math.round(a / c);
                    if (p > 1) {
                        "lttb" === r && t.setData(i.lttbDownSample(i.mapDimension(l.dim), 1 / p));
                        var f = void 0;
                        "string" == typeof r ? f = ZI[r] : "function" == typeof r && (f = r), f && t.setData(i.downSample(i.mapDimension(l.dim), 1 / p, f, KI))
                    }
                }
            }
        }
    }

    function Qf(t, e, n, i, r) {
        var o = t.getArea(), a = o.x, s = o.y, l = o.width, u = o.height, h = n.get(["lineStyle", "width"]) || 2;
        a -= h / 2, s -= h / 2, l += h, u += h, a = Math.floor(a), l = Math.round(l);
        var c = new rx({shape: {x: a, y: s, width: l, height: u}});
        if (e) {
            var p = t.getBaseAxis(), f = p.isHorizontal(), d = p.inverse;
            f ? (d && (c.shape.x += l), c.shape.width = 0) : (d || (c.shape.y += u), c.shape.height = 0);
            var g = "function" == typeof r ? function (t) {
                r(t, c)
            } : null;
            Ja(c, {shape: {width: l, height: u, x: a, y: s}}, n, null, i, g)
        }
        return c
    }

    function Jf(t, e, n) {
        var i = t.getArea(), r = xi(i.r0, 1), o = xi(i.r, 1), a = new rw({
            shape: {
                cx: xi(t.cx, 1),
                cy: xi(t.cy, 1),
                r0: r,
                r: o,
                startAngle: i.startAngle,
                endAngle: i.endAngle,
                clockwise: i.clockwise
            }
        });
        if (e) {
            var s = "angle" === t.getBaseAxis().dim;
            s ? a.shape.endAngle = i.startAngle : a.shape.r = r, Ja(a, {shape: {endAngle: i.endAngle, r: o}}, n)
        }
        return a
    }

    function td(t, e, n, i, r) {
        return t ? "polar" === t.type ? Jf(t, e, n) : "cartesian2d" === t.type ? Qf(t, e, n, i, r) : null : null
    }

    function ed(t, e) {
        return t.type === e
    }

    function nd(t, e) {
        var n = t.mapDimensionsAll("defaultedLabel"), i = n.length;
        if (1 === i) {
            var r = Su(t, e, n[0]);
            return null != r ? r + "" : null
        }
        if (i) {
            for (var o = [], a = 0; a < n.length; a++) o.push(Su(t, e, n[a]));
            return o.join(" ")
        }
    }

    function id(t, e) {
        var n = t.mapDimensionsAll("defaultedLabel");
        if (!T(e)) return e + "";
        for (var i = [], r = 0; r < n.length; r++) {
            var o = t.getDimensionInfo(n[r]);
            o && i.push(e[o.index])
        }
        return i.join(" ")
    }

    function rd(t, e) {
        var n = t.getArea && t.getArea();
        if (ed(t, "cartesian2d")) {
            var i = t.getBaseAxis();
            if ("category" !== i.type || !i.onBand) {
                var r = e.getLayout("bandWidth");
                i.isHorizontal() ? (n.x -= r, n.width += 2 * r) : (n.y -= r, n.height += 2 * r)
            }
        }
        return n
    }

    function od(t, e) {
        var n = t.get("realtimeSort", !0), i = e.getBaseAxis();
        return n && "category" === i.type && "cartesian2d" === e.type ? {
            baseAxis: i,
            otherAxis: e.getOtherAxis(i)
        } : void 0
    }

    function ad(t, e, n, i, r, o, a, s) {
        var l, u;
        o ? (u = {x: i.x, width: i.width}, l = {y: i.y, height: i.height}) : (u = {
            y: i.y,
            height: i.height
        }, l = {x: i.x, width: i.width}), s || (a ? Qa : Ja)(n, {shape: l}, e, r, null);
        var h = e ? t.baseAxis.model : null;
        (a ? Qa : Ja)(n, {shape: u}, h, r)
    }

    function sd(t) {
        return null != t.startAngle && null != t.endAngle && t.startAngle === t.endAngle
    }

    function ld(t, e, n, i, r, o, a, s) {
        var l = e.getItemVisual(n, "style");
        s || t.setShape("r", i.get(nD) || 0), t.useStyle(l);
        var u = i.getShallow("cursor");
        if (u && t.attr("cursor", u), !s) {
            var h = a ? r.height > 0 ? "bottom" : "top" : r.width > 0 ? "left" : "right", c = xs(i);
            _s(t, c, {
                labelFetcher: o,
                labelDataIndex: n,
                defaultText: nd(o.getData(), n),
                inheritColor: l.fill,
                defaultOpacity: l.opacity,
                defaultOutsidePosition: h
            });
            var p = t.getTextContent();
            Is(p, c, o.getRawValue(n), function (t) {
                return id(e, t)
            })
        }
        var f = i.getModel(["emphasis"]);
        fa(t, f.get("focus"), f.get("blurScope")), ga(t, i), sd(r) && (t.style.fill = "none", t.style.stroke = "none", y(t.states, function (t) {
            t.style && (t.style.fill = t.style.stroke = "none")
        }))
    }

    function ud(t, e) {
        var n = t.get(eD) || 0, i = isNaN(e.width) ? Number.MAX_VALUE : Math.abs(e.width),
            r = isNaN(e.height) ? Number.MAX_VALUE : Math.abs(e.height);
        return Math.min(n, i, r)
    }

    function hd(t, e, n) {
        var i = t.getData(), r = [], o = i.getLayout("valueAxisHorizontal") ? 1 : 0;
        r[1 - o] = i.getLayout("valueAxisStart");
        var a = i.getLayout("largeDataIndices"), s = i.getLayout("barWidth"), l = t.getModel("backgroundStyle"),
            u = t.get("showBackground", !0);
        if (u) {
            var h = i.getLayout("largeBackgroundPoints"), c = [];
            c[1 - o] = i.getLayout("backgroundStart");
            var p = new cD({shape: {points: h}, incremental: !!n, silent: !0, z2: 0});
            p.__startPoint = c, p.__baseDimIdx = o, p.__largeDataIndices = a, p.__barWidth = s, fd(p, l, i), e.add(p)
        }
        var f = new cD({shape: {points: i.getLayout("largePoints")}, incremental: !!n});
        f.__startPoint = r, f.__baseDimIdx = o, f.__largeDataIndices = a, f.__barWidth = s, e.add(f), pd(f, t, i), cx(f).seriesIndex = t.seriesIndex, t.get("silent") || (f.on("mousedown", pD), f.on("mousemove", pD))
    }

    function cd(t, e, n) {
        var i = t.__baseDimIdx, r = 1 - i, o = t.shape.points, a = t.__largeDataIndices, s = Math.abs(t.__barWidth / 2),
            l = t.__startPoint[r];
        iD[0] = e, iD[1] = n;
        for (var u = iD[i], h = iD[1 - i], c = u - s, p = u + s, f = 0, d = o.length / 2; d > f; f++) {
            var g = 2 * f, y = o[g + i], v = o[g + r];
            if (y >= c && p >= y && (v >= l ? h >= l && v >= h : h >= v && l >= h)) return a[f]
        }
        return -1
    }

    function pd(t, e, n) {
        var i = n.getVisual("style");
        t.useStyle(h({}, i)), t.style.fill = null, t.style.stroke = i.fill, t.style.lineWidth = n.getLayout("barWidth")
    }

    function fd(t, e, n) {
        var i = e.get("borderColor") || e.get("color"), r = e.getItemStyle();
        t.useStyle(r), t.style.fill = null, t.style.stroke = i, t.style.lineWidth = n.getLayout("barWidth")
    }

    function dd(t, e, n) {
        if (ed(n, "cartesian2d")) {
            var i = e, r = n.getArea();
            return {x: t ? i.x : r.x, y: t ? r.y : i.y, width: t ? i.width : r.width, height: t ? r.height : i.height}
        }
        var r = n.getArea(), o = e;
        return {
            cx: r.cx,
            cy: r.cy,
            r0: t ? r.r0 : o.r0,
            r: t ? r.r : o.r,
            startAngle: t ? o.startAngle : 0,
            endAngle: t ? o.endAngle : 2 * Math.PI
        }
    }

    function gd(t, e, n) {
        var i = "polar" === t.type ? rw : rx;
        return new i({shape: dd(e, n, t), silent: !0, z2: 0})
    }

    function yd(t) {
        t.registerChartView(aD), t.registerSeriesModel(QI), t.registerLayout(t.PRIORITY.VISUAL.LAYOUT, S(Vp, "bar")), t.registerLayout(t.PRIORITY.VISUAL.PROGRESSIVE_LAYOUT, uI), t.registerVisual({
            seriesType: "bar",
            reset: function (t) {
                t.getData().setVisual("legendSymbol", "roundRect")
            }
        }), t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, $f("bar")), t.registerAction({
            type: "changeAxisOrder",
            event: "changeAxisOrder",
            update: "update"
        }, function (t, e) {
            var n = t.componentType || "series";
            e.eachComponent({mainType: n, query: t}, function (e) {
                t.sortInfo && e.axis.setCategorySortInfo(t.sortInfo)
            })
        })
    }

    function vd(t, e) {
        return vl(t.getBoxLayoutParams(), {width: e.getWidth(), height: e.getHeight()})
    }

    function md(t, e, n) {
        e.eachSeriesByType(t, function (t) {
            var e = t.getData(), i = e.mapDimension("value"), r = vd(t, n), o = t.get("center"), a = t.get("radius");
            T(a) || (a = [0, a]), T(o) || (o = [o, o]);
            var s = _i(r.width, n.getWidth()), l = _i(r.height, n.getHeight()), u = Math.min(s, l),
                h = _i(o[0], s) + r.x, c = _i(o[1], l) + r.y, p = _i(a[0], u / 2), f = _i(a[1], u / 2),
                d = -t.get("startAngle") * dD, g = t.get("minAngle") * dD, y = 0;
            e.each(i, function (t) {
                !isNaN(t) && y++
            });
            var v = e.getSum(i), m = Math.PI / (v || y) * 2, _ = t.get("clockwise"), x = t.get("roseType"),
                w = t.get("stillShowZeroSum"), b = e.getDataExtent(i);
            b[0] = 0;
            var S = fD, M = 0, C = d, I = _ ? 1 : -1;
            if (e.setLayout({viewRect: r, r: f}), e.each(i, function (t, n) {
                var i;
                if (isNaN(t)) return void e.setItemLayout(n, {
                    angle: 0 / 0,
                    startAngle: 0 / 0,
                    endAngle: 0 / 0,
                    clockwise: _,
                    cx: h,
                    cy: c,
                    r0: p,
                    r: x ? 0 / 0 : f
                });
                i = "area" !== x ? 0 === v && w ? m : t * m : fD / y, g > i ? (i = g, S -= g) : M += t;
                var r = C + I * i;
                e.setItemLayout(n, {
                    angle: i,
                    startAngle: C,
                    endAngle: r,
                    clockwise: _,
                    cx: h,
                    cy: c,
                    r0: p,
                    r: x ? mi(t, b, [p, f]) : f
                }), C = r
            }), fD > S && y) if (.001 >= S) {
                var D = fD / y;
                e.each(i, function (t, n) {
                    if (!isNaN(t)) {
                        var i = e.getItemLayout(n);
                        i.angle = D, i.startAngle = d + I * n * D, i.endAngle = d + I * (n + 1) * D
                    }
                })
            } else m = S / M, C = d, e.each(i, function (t, n) {
                if (!isNaN(t)) {
                    var i = e.getItemLayout(n), r = i.angle === g ? g : t * m;
                    i.startAngle = C, i.endAngle = C + I * r, C += I * r
                }
            })
        })
    }

    function _d(t) {
        return {
            seriesType: t, reset: function (t, e) {
                var n = e.findComponents({mainType: "legend"});
                if (n && n.length) {
                    var i = t.getData();
                    i.filterSelf(function (t) {
                        for (var e = i.getName(t), r = 0; r < n.length; r++) if (!n[r].isSelected(e)) return !1;
                        return !0
                    })
                }
            }
        }
    }

    function xd(t, e, n, i, r, o, a, s, l, u) {
        function h(t) {
            for (var o = t.rB, a = o * o, s = 0; s < t.list.length; s++) {
                var l = t.list[s], u = Math.abs(l.label.y - n), h = i + l.len, c = h * h,
                    p = Math.sqrt((1 - Math.abs(u * u / a)) * c);
                l.label.x = e + (p + l.len2) * r
            }
        }

        function c(t) {
            for (var o = {list: [], maxY: 0}, a = {
                list: [],
                maxY: 0
            }, s = 0; s < t.length; s++) if ("none" === t[s].labelAlignTo) {
                var l = t[s], u = l.label.y > n ? a : o, c = Math.abs(l.label.y - n);
                if (c > u.maxY) {
                    var p = l.label.x - e - l.len2 * r, f = i + l.len,
                        d = f > p ? Math.sqrt(c * c / (1 - p * p / f / f)) : f;
                    u.rB = d, u.maxY = c
                }
                u.list.push(l)
            }
            h(o), h(a)
        }

        if (!(t.length < 2)) {
            for (var p = t.length, f = 0; p > f; f++) if ("outer" === t[f].position && "labelLine" === t[f].labelAlignTo) {
                var d = t[f].label.x - u;
                t[f].linePoints[1][0] += d, t[f].label.x = u
            }
            qh(t, l, l + a) && c(t)
        }
    }

    function wd(t, e, n, i, r, o, a, s) {
        for (var l = [], u = [], h = Number.MAX_VALUE, c = -Number.MAX_VALUE, p = 0; p < t.length; p++) {
            var f = t[p].label;
            bd(t[p]) || (f.x < e ? (h = Math.min(h, f.x), l.push(t[p])) : (c = Math.max(c, f.x), u.push(t[p])))
        }
        xd(u, e, n, i, 1, r, o, a, s, c), xd(l, e, n, i, -1, r, o, a, s, h);
        for (var p = 0; p < t.length; p++) {
            var d = t[p], f = d.label;
            if (!bd(d)) {
                var g = d.linePoints;
                if (g) {
                    var y = "edge" === d.labelAlignTo, v = d.rect.width, m = void 0;
                    m = y ? f.x < e ? g[2][0] - d.labelDistance - a - d.edgeDistance : a + r - d.edgeDistance - g[2][0] - d.labelDistance : f.x < e ? f.x - a - d.bleedMargin : a + r - f.x - d.bleedMargin, m < d.rect.width && (d.label.style.width = m, "edge" === d.labelAlignTo && (v = m));
                    var _ = g[1][0] - g[2][0];
                    y ? g[2][0] = f.x < e ? a + d.edgeDistance + v + d.labelDistance : a + r - d.edgeDistance - v - d.labelDistance : (g[2][0] = f.x < e ? f.x + d.labelDistance : f.x - d.labelDistance, g[1][0] = g[2][0] + _), g[1][1] = g[2][1] = f.y
                }
            }
        }
    }

    function bd(t) {
        return "center" === t.position
    }

    function Sd(t) {
        function e(t) {
            t.ignore = !0
        }

        function n(t) {
            if (!t.ignore) return !0;
            for (var e in t.states) if (t.states[e].ignore === !1) return !0;
            return !1
        }

        var i, r, o = t.getData(), a = [], s = !1, l = (t.get("minShowLabelAngle") || 0) * gD,
            u = o.getLayout("viewRect"), h = o.getLayout("r"), c = u.width, p = u.x, f = u.y, d = u.height;
        o.each(function (t) {
            var u = o.getItemGraphicEl(t), f = u.shape, d = u.getTextContent(), g = u.getTextGuideLine(),
                v = o.getItemModel(t), m = v.getModel("label"),
                _ = m.get("position") || v.get(["emphasis", "label", "position"]), x = m.get("distanceToLabelLine"),
                w = m.get("alignTo"), b = _i(m.get("edgeDistance"), c), S = m.get("bleedMargin"),
                T = v.getModel("labelLine"), M = T.get("length");
            M = _i(M, c);
            var C = T.get("length2");
            if (C = _i(C, c), Math.abs(f.endAngle - f.startAngle) < l) return y(d.states, e), void (d.ignore = !0);
            if (n(d)) {
                var I, D, A, k, L = (f.startAngle + f.endAngle) / 2, P = Math.cos(L), O = Math.sin(L);
                i = f.cx, r = f.cy;
                var R = "inside" === _ || "inner" === _;
                if ("center" === _) I = f.cx, D = f.cy, k = "center"; else {
                    var B = (R ? (f.r + f.r0) / 2 * P : f.r * P) + i, E = (R ? (f.r + f.r0) / 2 * O : f.r * O) + r;
                    if (I = B + 3 * P, D = E + 3 * O, !R) {
                        var z = B + P * (M + h - f.r), N = E + O * (M + h - f.r), F = z + (0 > P ? -1 : 1) * C, V = N;
                        I = "edge" === w ? 0 > P ? p + b : p + c - b : F + (0 > P ? -x : x), D = V, A = [[B, E], [z, N], [F, V]]
                    }
                    k = R ? "center" : "edge" === w ? P > 0 ? "right" : "left" : P > 0 ? "left" : "right"
                }
                var H, W = m.get("rotate");
                if (H = "number" == typeof W ? W * (Math.PI / 180) : W ? 0 > P ? -L + Math.PI : -L : 0, s = !!H, d.x = I, d.y = D, d.rotation = H, d.setStyle({verticalAlign: "middle"}), R) {
                    d.setStyle({align: k});
                    var G = d.states.select;
                    G && (G.x += d.x, G.y += d.y)
                } else {
                    var U = d.getBoundingRect().clone();
                    U.applyTransform(d.getComputedTransform());
                    var Y = (d.style.margin || 0) + 2.1;
                    U.y -= Y / 2, U.height += Y, a.push({
                        label: d,
                        labelLine: g,
                        position: _,
                        len: M,
                        len2: C,
                        minTurnAngle: T.get("minTurnAngle"),
                        maxSurfaceAngle: T.get("maxSurfaceAngle"),
                        surfaceNormal: new Ov(P, O),
                        linePoints: A,
                        textAlign: k,
                        labelDistance: x,
                        labelAlignTo: w,
                        edgeDistance: b,
                        bleedMargin: S,
                        rect: U
                    })
                }
                u.setTextConfig({inside: R})
            }
        }), !s && t.get("avoidLabelOverlap") && wd(a, i, r, h, c, d, p, f);
        for (var g = 0; g < a.length; g++) {
            var v = a[g], m = v.label, _ = v.labelLine, x = isNaN(m.x) || isNaN(m.y);
            if (m) {
                m.setStyle({align: v.textAlign}), x && (y(m.states, e), m.ignore = !0);
                var w = m.states.select;
                w && (w.x += m.x, w.y += m.y)
            }
            if (_) {
                var b = v.linePoints;
                x || !b ? (y(_.states, e), _.ignore = !0) : (Fh(b, v.minTurnAngle), Vh(b, v.surfaceNormal, v.maxSurfaceAngle), _.setShape({points: b}), m.__hostTarget.textGuideLineConfig = {anchor: new Ov(b[0][0], b[0][1])})
            }
        }
    }

    function Td(t, e) {
        var n = t.get("borderRadius");
        return null == n ? null : (T(n) || (n = [n, n]), {
            innerCornerRadius: Nn(n[0], e.r0),
            cornerRadius: Nn(n[1], e.r)
        })
    }

    function Md(t, e, n) {
        e = T(e) && {coordDimensions: e} || h({}, e);
        var i = t.getSource(), r = yp(i, e), o = new $C(r, t);
        return o.initData(i, n), o
    }

    function Cd(t) {
        t.registerChartView(vD), t.registerSeriesModel(_D), Jh("pie", t.registerAction), t.registerLayout(S(md, "pie")), t.registerProcessor(_d("pie"))
    }

    function Id(t, n, i, r) {
        y(DD, function (o, a) {
            var s = l(l({}, ID[a], !0), r, !0), u = function (t) {
                function i() {
                    for (var e = [], i = 0; i < arguments.length; i++) e[i] = arguments[i];
                    var r = t.apply(this, e) || this;
                    return r.type = n + "Axis." + a, r
                }

                return e(i, t), i.prototype.mergeDefaultAndTheme = function (t, e) {
                    var n = ml(this), i = n ? xl(t) : {}, r = e.getTheme();
                    l(t, r.get(a + "Axis")), l(t, this.getDefaultOption()), t.type = Dd(t), n && _l(t, i, n)
                }, i.prototype.optionUpdated = function () {
                    var t = this.option;
                    "category" === t.type && (this.__ordinalMeta = eI.createByAxisModel(this))
                }, i.prototype.getCategories = function (t) {
                    var e = this.option;
                    return "category" === e.type ? t ? e.data : this.__ordinalMeta.categories : void 0
                }, i.prototype.getOrdinalMeta = function () {
                    return this.__ordinalMeta
                }, i.type = n + "Axis." + a, i.defaultOption = s, i
            }(i);
            t.registerComponentModel(u)
        }), t.registerSubTypeDefaulter(n + "Axis", Dd)
    }

    function Dd(t) {
        return t.type || (t.data ? "category" : "value")
    }

    function Ad(t) {
        return "interval" === t.type || "time" === t.type
    }

    function kd(t, e, n) {
        n = n || {};
        var i = t.coordinateSystem, r = e.axis, o = {}, a = r.getAxesOnZeroOf()[0], s = r.position,
            l = a ? "onZero" : s, u = r.dim, h = i.getRect(), c = [h.x, h.x + h.width, h.y, h.y + h.height],
            p = {left: 0, right: 1, top: 0, bottom: 1, onZero: 2}, f = e.get("offset") || 0,
            d = "x" === u ? [c[2] - f, c[3] + f] : [c[0] - f, c[1] + f];
        if (a) {
            var g = a.toGlobalCoord(a.dataToCoord(0));
            d[p.onZero] = Math.max(Math.min(g, d[1]), d[0])
        }
        o.position = ["y" === u ? d[p[l]] : c[0], "x" === u ? d[p[l]] : c[3]], o.rotation = Math.PI / 2 * ("x" === u ? 0 : 1);
        var y = {top: -1, bottom: 1, left: -1, right: 1};
        o.labelDirection = o.tickDirection = o.nameDirection = y[s], o.labelOffset = a ? d[p[s]] - d[p.onZero] : 0, e.get(["axisTick", "inside"]) && (o.tickDirection = -o.tickDirection), z(n.labelInside, e.get(["axisLabel", "inside"])) && (o.labelDirection = -o.labelDirection);
        var v = e.get(["axisLabel", "rotate"]);
        return o.labelRotate = "top" === l ? -v : v, o.z2 = 1, o
    }

    function Ld(t) {
        return "cartesian2d" === t.get("coordinateSystem")
    }

    function Pd(t) {
        var e = {xAxisModel: null, yAxisModel: null};
        return y(e, function (n, i) {
            var r = i.replace(/Model$/, ""), o = t.getReferringComponents(r, Bm).models[0];
            e[i] = o
        }), e
    }

    function Od(t, e) {
        return t.getCoordSysModel() === e
    }

    function Rd(t, e, n, i) {
        function r(t) {
            return t.dim + "_" + t.index
        }

        n.getAxesOnZeroOf = function () {
            return o ? [o] : []
        };
        var o, a = t[e], s = n.model, l = s.get(["axisLine", "onZero"]), u = s.get(["axisLine", "onZeroAxisIndex"]);
        if (l) {
            if (null != u) Bd(a[u]) && (o = a[u]); else for (var h in a) if (a.hasOwnProperty(h) && Bd(a[h]) && !i[r(a[h])]) {
                o = a[h];
                break
            }
            o && (i[r(o)] = !0)
        }
    }

    function Bd(t) {
        return t && "category" !== t.type && "time" !== t.type && af(t)
    }

    function Ed(t, e) {
        var n = t.getExtent(), i = n[0] + n[1];
        t.toGlobalCoord = "x" === t.dim ? function (t) {
            return t + e
        } : function (t) {
            return i - t + e
        }, t.toLocalCoord = "x" === t.dim ? function (t) {
            return t - e
        } : function (t) {
            return i - t + e
        }
    }

    function zd(t, e, n, i) {
        var r, o, a = Ci(n - t), s = i[0] > i[1], l = "start" === e && !s || "start" !== e && s;
        return Ii(a - RD / 2) ? (o = l ? "bottom" : "top", r = "center") : Ii(a - 1.5 * RD) ? (o = l ? "top" : "bottom", r = "center") : (o = "middle", r = 1.5 * RD > a && a > RD / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
            rotation: a,
            textAlign: r,
            textVerticalAlign: o
        }
    }

    function Nd(t, e, n) {
        if (!pf(t.axis)) {
            var i = t.get(["axisLabel", "showMinLabel"]), r = t.get(["axisLabel", "showMaxLabel"]);
            e = e || [], n = n || [];
            var o = e[0], a = e[1], s = e[e.length - 1], l = e[e.length - 2], u = n[0], h = n[1], c = n[n.length - 1],
                p = n[n.length - 2];
            i === !1 ? (Fd(o), Fd(u)) : Vd(o, a) && (i ? (Fd(a), Fd(h)) : (Fd(o), Fd(u))), r === !1 ? (Fd(s), Fd(c)) : Vd(l, s) && (r ? (Fd(l), Fd(p)) : (Fd(s), Fd(c)))
        }
    }

    function Fd(t) {
        t && (t.ignore = !0)
    }

    function Vd(t, e) {
        var n = t && t.getBoundingRect().clone(), i = e && e.getBoundingRect().clone();
        if (n && i) {
            var r = Fe([]);
            return Ge(r, r, -t.rotation), n.applyTransform(He([], r, t.getLocalTransform())), i.applyTransform(He([], r, e.getLocalTransform())), n.intersect(i)
        }
    }

    function Hd(t) {
        return "middle" === t || "center" === t
    }

    function Wd(t, e, n, i, r) {
        for (var o = [], a = [], s = [], l = 0; l < t.length; l++) {
            var u = t[l].coord;
            a[0] = u, a[1] = 0, s[0] = u, s[1] = n, e && (ge(a, a, e), ge(s, s, e));
            var h = new fw({
                subPixelOptimize: !0,
                shape: {x1: a[0], y1: a[1], x2: s[0], y2: s[1]},
                style: i,
                z2: 2,
                autoBatch: !0,
                silent: !0
            });
            h.anid = r + "_" + t[l].tickValue, o.push(h)
        }
        return o
    }

    function Gd(t, e, n, i) {
        var r = n.axis, o = n.getModel("axisTick"), a = o.get("show");
        if ("auto" === a && i.handleAutoShown && (a = i.handleAutoShown("axisTick")), a && !r.scale.isBlank()) {
            for (var s = o.getModel("lineStyle"), l = i.tickDirection * o.get("length"), u = r.getTicksCoords(), h = Wd(u, e.transform, l, c(s.getLineStyle(), {stroke: n.get(["axisLine", "lineStyle", "color"])}), "ticks"), p = 0; p < h.length; p++) t.add(h[p]);
            return h
        }
    }

    function Ud(t, e, n, i) {
        var r = n.axis, o = n.getModel("minorTick");
        if (o.get("show") && !r.scale.isBlank()) {
            var a = r.getMinorTicksCoords();
            if (a.length) for (var s = o.getModel("lineStyle"), l = i * o.get("length"), u = c(s.getLineStyle(), c(n.getModel("axisTick").getLineStyle(), {stroke: n.get(["axisLine", "lineStyle", "color"])})), h = 0; h < a.length; h++) for (var p = Wd(a[h], e.transform, l, u, "minorticks_" + h), f = 0; f < p.length; f++) t.add(p[f])
        }
    }

    function Yd(t, e, n, i) {
        var r = n.axis, o = z(i.axisLabelShow, n.get(["axisLabel", "show"]));
        if (o && !r.scale.isBlank()) {
            var a = n.getModel("axisLabel"), s = a.get("margin"), l = r.getViewLabels(),
                u = (z(i.labelRotate, a.get("rotate")) || 0) * RD / 180,
                h = BD.innerTextLayout(i.rotation, u, i.labelDirection), c = n.getCategories && n.getCategories(!0),
                p = [], f = BD.isLabelSilent(n), d = n.get("triggerEvent");
            return y(l, function (o, l) {
                var u = "ordinal" === r.scale.type ? r.scale.getRawOrdinalNumber(o.tickValue) : o.tickValue,
                    g = o.formattedLabel, y = o.rawLabel, v = a;
                if (c && c[u]) {
                    var m = c[u];
                    A(m) && m.textStyle && (v = new $w(m.textStyle, a, n.ecModel))
                }
                var _ = v.getTextColor() || n.get(["axisLine", "lineStyle", "color"]), x = r.dataToCoord(u),
                    w = new lx({
                        x: x,
                        y: i.labelOffset + i.labelDirection * s,
                        rotation: h.rotation,
                        silent: f,
                        z2: 10,
                        style: ws(v, {
                            text: g,
                            align: v.getShallow("align", !0) || h.textAlign,
                            verticalAlign: v.getShallow("verticalAlign", !0) || v.getShallow("baseline", !0) || h.textVerticalAlign,
                            fill: "function" == typeof _ ? _("category" === r.type ? y : "value" === r.type ? u + "" : u, l) : _
                        })
                    });
                if (w.anid = "label_" + u, d) {
                    var b = BD.makeAxisEventDataBase(n);
                    b.targetType = "axisLabel", b.value = y, cx(w).eventData = b
                }
                e.add(w), w.updateTransform(), p.push(w), t.add(w), w.decomposeTransform()
            }), p
        }
    }

    function Xd(t, e) {
        var n = {axesInfo: {}, seriesInvolved: !1, coordSysAxesInfo: {}, coordSysMap: {}};
        return jd(n, t, e), n.seriesInvolved && Zd(n, t), n
    }

    function jd(t, e, n) {
        var i = e.getComponent("tooltip"), r = e.getComponent("axisPointer"), o = r.get("link", !0) || [], a = [];
        y(n.getCoordinateSystems(), function (n) {
            function s(i, s, l) {
                var h = l.model.getModel("axisPointer", r), p = h.get("show");
                if (p && ("auto" !== p || i || eg(h))) {
                    null == s && (s = h.get("triggerTooltip")), h = i ? qd(l, c, r, e, i, s) : h;
                    var f = h.get("snap"), d = ng(l.model), g = s || f || "category" === l.type, y = t.axesInfo[d] = {
                        key: d,
                        axis: l,
                        coordSys: n,
                        axisPointerModel: h,
                        triggerTooltip: s,
                        involveSeries: g,
                        snap: f,
                        useHandle: eg(h),
                        seriesModels: [],
                        linkGroup: null
                    };
                    u[d] = y, t.seriesInvolved = t.seriesInvolved || g;
                    var v = Kd(o, l);
                    if (null != v) {
                        var m = a[v] || (a[v] = {axesInfo: {}});
                        m.axesInfo[d] = y, m.mapper = o[v].mapper, y.linkGroup = m
                    }
                }
            }

            if (n.axisPointerEnabled) {
                var l = ng(n.model), u = t.coordSysAxesInfo[l] = {};
                t.coordSysMap[l] = n;
                var h = n.model, c = h.getModel("tooltip", i);
                if (y(n.getAxes(), S(s, !1, null)), n.getTooltipAxes && i && c.get("show")) {
                    var p = "axis" === c.get("trigger"), f = "cross" === c.get(["axisPointer", "type"]),
                        d = n.getTooltipAxes(c.get(["axisPointer", "axis"]));
                    (p || f) && y(d.baseAxes, S(s, f ? "cross" : !0, p)), f && y(d.otherAxes, S(s, "cross", !1))
                }
            }
        })
    }

    function qd(t, e, n, i, r, o) {
        var a = e.getModel("axisPointer"),
            l = ["type", "snap", "lineStyle", "shadowStyle", "label", "animation", "animationDurationUpdate", "animationEasingUpdate", "z"],
            u = {};
        y(l, function (t) {
            u[t] = s(a.get(t))
        }), u.snap = "category" !== t.type && !!o, "cross" === a.get("type") && (u.type = "line");
        var h = u.label || (u.label = {});
        if (null == h.show && (h.show = !1), "cross" === r) {
            var p = a.get(["label", "show"]);
            if (h.show = null != p ? p : !0, !o) {
                var f = u.lineStyle = a.get("crossStyle");
                f && c(h, f.textStyle)
            }
        }
        return t.model.getModel("axisPointer", new $w(u, n, i))
    }

    function Zd(t, e) {
        e.eachSeries(function (e) {
            var n = e.coordinateSystem, i = e.get(["tooltip", "trigger"], !0), r = e.get(["tooltip", "show"], !0);
            n && "none" !== i && i !== !1 && "item" !== i && r !== !1 && e.get(["axisPointer", "show"], !0) !== !1 && y(t.coordSysAxesInfo[ng(n.model)], function (t) {
                var i = t.axis;
                n.getAxis(i.dim) === i && (t.seriesModels.push(e), null == t.seriesDataCount && (t.seriesDataCount = 0), t.seriesDataCount += e.getData().count())
            })
        })
    }

    function Kd(t, e) {
        for (var n = e.model, i = e.dim, r = 0; r < t.length; r++) {
            var o = t[r] || {};
            if ($d(o[i + "AxisId"], n.id) || $d(o[i + "AxisIndex"], n.componentIndex) || $d(o[i + "AxisName"], n.name)) return r
        }
    }

    function $d(t, e) {
        return "all" === t || T(t) && p(t, e) >= 0 || t === e
    }

    function Qd(t) {
        var e = Jd(t);
        if (e) {
            var n = e.axisPointerModel, i = e.axis.scale, r = n.option, o = n.get("status"), a = n.get("value");
            null != a && (a = i.parse(a));
            var s = eg(n);
            null == o && (r.status = s ? "show" : "hide");
            var l = i.getExtent().slice();
            l[0] > l[1] && l.reverse(), (null == a || a > l[1]) && (a = l[1]), a < l[0] && (a = l[0]), r.value = a, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show")
        }
    }

    function Jd(t) {
        var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
        return e && e.axesInfo[ng(t)]
    }

    function tg(t) {
        var e = Jd(t);
        return e && e.axisPointerModel
    }

    function eg(t) {
        return !!t.get(["handle", "show"])
    }

    function ng(t) {
        return t.type + "||" + t.id
    }

    function ig(t, e, n, i) {
        var r = n.axis;
        if (!r.scale.isBlank()) {
            var o = n.getModel("splitArea"), a = o.getModel("areaStyle"), s = a.get("color"),
                l = i.coordinateSystem.getRect(), u = r.getTicksCoords({tickModel: o, clamp: !0});
            if (u.length) {
                var h = s.length, p = FD(t).splitAreaColors, f = X(), d = 0;
                if (p) for (var g = 0; g < u.length; g++) {
                    var y = p.get(u[g].tickValue);
                    if (null != y) {
                        d = (y + (h - 1) * g) % h;
                        break
                    }
                }
                var v = r.toGlobalCoord(u[0].coord), m = a.getAreaStyle();
                s = T(s) ? s : [s];
                for (var g = 1; g < u.length; g++) {
                    var _ = r.toGlobalCoord(u[g].coord), x = void 0, w = void 0, b = void 0, S = void 0;
                    r.isHorizontal() ? (x = v, w = l.y, b = _ - x, S = l.height, v = x + b) : (x = l.x, w = v, b = l.width, S = _ - w, v = w + S);
                    var M = u[g - 1].tickValue;
                    null != M && f.set(M, d), e.add(new rx({
                        anid: null != M ? "area_" + M : null,
                        shape: {x: x, y: w, width: b, height: S},
                        style: c({fill: s[d]}, m),
                        autoBatch: !0,
                        silent: !0
                    })), d = (d + 1) % h
                }
                FD(t).splitAreaColors = f
            }
        }
    }

    function rg(t) {
        FD(t).splitAreaColors = null
    }

    function og(t) {
        t.registerComponentView(XD), t.registerComponentModel(xD), t.registerCoordinateSystem("cartesian2d", OD), Id(t, "x", wD, jD), Id(t, "y", wD, jD), t.registerComponentView(UD), t.registerComponentView(YD), t.registerPreprocessor(function (t) {
            t.xAxis && t.yAxis && !t.grid && (t.grid = {})
        })
    }

    function ag(t) {
        t.registerComponentModel(qD), t.registerComponentView(ZD)
    }

    function sg(t, e) {
        var n = vb(e.get("padding")), i = e.getItemStyle(["color", "opacity"]);
        return i.fill = e.get("backgroundColor"), t = new rx({
            shape: {
                x: t.x - n[3],
                y: t.y - n[0],
                width: t.width + n[1] + n[3],
                height: t.height + n[0] + n[2],
                r: e.get("borderRadius")
            }, style: i, silent: !0, z2: -1
        })
    }

    function lg(t, e, n, i, r, o, a) {
        var s;
        return "line" !== e && e.indexOf("empty") < 0 ? (s = n.getItemStyle(), t.style.stroke = i, t.style.decal = o, a || (s.stroke = r)) : s = n.getItemStyle(["borderWidth", "borderColor"]), t.setStyle(s), t
    }

    function ug(t, e, n, i) {
        pg(t, e, n, i), n.dispatchAction({type: "legendToggleSelect", name: null != t ? t : e}), cg(t, e, n, i)
    }

    function hg(t) {
        for (var e, n = t.getZr().storage.getDisplayList(), i = 0, r = n.length; r > i && !(e = n[i].states.emphasis);) i++;
        return e && e.hoverLayer
    }

    function cg(t, e, n, i) {
        hg(n) || n.dispatchAction({type: "highlight", seriesName: t, name: e, excludeSeriesId: i})
    }

    function pg(t, e, n, i) {
        hg(n) || n.dispatchAction({type: "downplay", seriesName: t, name: e, excludeSeriesId: i})
    }

    function fg(t) {
        var e = t.findComponents({mainType: "legend"});
        e && e.length && t.filterSeries(function (t) {
            for (var n = 0; n < e.length; n++) if (!e[n].isSelected(t.name)) return !1;
            return !0
        })
    }

    function dg(t, e, n) {
        var i, r = {}, o = "toggleSelected" === t;
        return n.eachComponent("legend", function (n) {
            o && null != i ? n[i ? "select" : "unSelect"](e.name) : "allSelect" === t || "inverseSelect" === t ? n[t]() : (n[t](e.name), i = n.isSelected(e.name));
            var a = n.getData();
            y(a, function (t) {
                var e = t.get("name");
                if ("\n" !== e && "" !== e) {
                    var i = n.isSelected(e);
                    r[e] = r.hasOwnProperty(e) ? r[e] && i : i
                }
            })
        }), "allSelect" === t || "inverseSelect" === t ? {selected: r} : {name: e.name, selected: r}
    }

    function gg(t) {
        t.registerAction("legendToggleSelect", "legendselectchanged", S(dg, "toggleSelected")), t.registerAction("legendAllSelect", "legendselectall", S(dg, "allSelect")), t.registerAction("legendInverseSelect", "legendinverseselect", S(dg, "inverseSelect")), t.registerAction("legendSelect", "legendselected", S(dg, "select")), t.registerAction("legendUnSelect", "legendunselected", S(dg, "unSelect"))
    }

    function yg(t) {
        t.registerComponentModel($D), t.registerComponentView(eA), t.registerProcessor(t.PRIORITY.PROCESSOR.SERIES_FILTER, fg), t.registerSubTypeDefaulter("legend", function () {
            return "plain"
        }), gg(t)
    }

    function vg(t, e, n) {
        var i = t.getOrient(), r = [1, 1];
        r[i.index] = 0, _l(e, n, {type: "box", ignoreSize: !!r})
    }

    function mg(t) {
        t.registerAction("legendScroll", "legendscroll", function (t, e) {
            var n = t.scrollDataIndex;
            null != n && e.eachComponent({mainType: "legend", subType: "scroll", query: t}, function (t) {
                t.setScrollDataIndex(n)
            })
        })
    }

    function _g(t) {
        mf(yg), t.registerComponentModel(nA), t.registerComponentView(aA), mg(t)
    }

    function xg(t, e, n, i) {
        wg(sA(n).lastProp, i) || (sA(n).lastProp = i, e ? Qa(n, i, t) : (n.stopAnimation(), n.attr(i)))
    }

    function wg(t, e) {
        if (A(t) && A(e)) {
            var n = !0;
            return y(e, function (e, i) {
                n = n && wg(t[i], e)
            }), !!n
        }
        return t === e
    }

    function bg(t, e) {
        t[e.get(["label", "show"]) ? "show" : "hide"]()
    }

    function Sg(t) {
        return {x: t.x || 0, y: t.y || 0, rotation: t.rotation || 0}
    }

    function Tg(t, e, n) {
        var i = e.get("z"), r = e.get("zlevel");
        t && t.traverse(function (t) {
            "group" !== t.type && (null != i && (t.z = i), null != r && (t.zlevel = r), t.silent = n)
        })
    }

    function Mg(t) {
        var e, n = t.get("type"), i = t.getModel(n + "Style");
        return "line" === n ? (e = i.getLineStyle(), e.fill = null) : "shadow" === n && (e = i.getAreaStyle(), e.stroke = null), e
    }

    function Cg(t, e, n, i, r) {
        var o = n.get("value"), a = Dg(o, e.axis, e.ecModel, n.get("seriesDataIndices"), {
                precision: n.get(["label", "precision"]),
                formatter: n.get(["label", "formatter"])
            }), s = n.getModel("label"), l = vb(s.get("padding") || 0), u = s.getFont(), h = Rn(a, u), c = r.position,
            p = h.width + l[1] + l[3], f = h.height + l[0] + l[2], d = r.align;
        "right" === d && (c[0] -= p), "center" === d && (c[0] -= p / 2);
        var g = r.verticalAlign;
        "bottom" === g && (c[1] -= f), "middle" === g && (c[1] -= f / 2), Ig(c, p, f, i);
        var y = s.get("backgroundColor");
        y && "auto" !== y || (y = e.get(["axisLine", "lineStyle", "color"])), t.label = {
            x: c[0],
            y: c[1],
            style: ws(s, {text: a, font: u, fill: s.getTextColor(), padding: l, backgroundColor: y}),
            z2: 10
        }
    }

    function Ig(t, e, n, i) {
        var r = i.getWidth(), o = i.getHeight();
        t[0] = Math.min(t[0] + e, r) - e, t[1] = Math.min(t[1] + n, o) - n, t[0] = Math.max(t[0], 0), t[1] = Math.max(t[1], 0)
    }

    function Dg(t, e, n, i, r) {
        t = e.scale.parse(t);
        var o = e.scale.getLabel({value: t}, {precision: r.precision}), a = r.formatter;
        if (a) {
            var s = {value: lf(e, {value: t}), axisDimension: e.dim, axisIndex: e.index, seriesData: []};
            y(i, function (t) {
                var e = n.getSeriesByIndex(t.seriesIndex), i = t.dataIndexInside, r = e && e.getDataParams(i);
                r && s.seriesData.push(r)
            }), C(a) ? o = a.replace("{value}", o) : M(a) && (o = a(s))
        }
        return o
    }

    function Ag(t, e, n) {
        var i = Ne();
        return Ge(i, i, n.rotation), We(i, i, n.position), os([t.dataToCoord(e), (n.labelOffset || 0) + (n.labelDirection || 1) * (n.labelMargin || 0)], i)
    }

    function kg(t, e, n, i, r, o) {
        var a = BD.innerTextLayout(n.rotation, 0, n.labelDirection);
        n.labelMargin = r.get(["label", "margin"]), Cg(e, i, r, o, {
            position: Ag(i.axis, t, n),
            align: a.textAlign,
            verticalAlign: a.textVerticalAlign
        })
    }

    function Lg(t, e, n) {
        return n = n || 0, {x1: t[n], y1: t[1 - n], x2: e[n], y2: e[1 - n]}
    }

    function Pg(t, e, n) {
        return n = n || 0, {x: t[n], y: t[1 - n], width: e[n], height: e[1 - n]}
    }

    function Og(t, e) {
        var n = {};
        return n[e.dim + "AxisIndex"] = e.index, t.getCartesian(n)
    }

    function Rg(t) {
        return "x" === t.dim ? 0 : 1
    }

    function Bg(t, e, n) {
        if (!by.node) {
            var i = e.getZr();
            dA(i).records || (dA(i).records = {}), Eg(i, e);
            var r = dA(i).records[t] || (dA(i).records[t] = {});
            r.handler = n
        }
    }

    function Eg(t, e) {
        function n(n, i) {
            t.on(n, function (n) {
                var r = Vg(e);
                gA(dA(t).records, function (t) {
                    t && i(t, n, r.dispatchAction)
                }), zg(r.pendings, e)
            })
        }

        dA(t).initialized || (dA(t).initialized = !0, n("click", S(Fg, "click")), n("mousemove", S(Fg, "mousemove")), n("globalout", Ng))
    }

    function zg(t, e) {
        var n, i = t.showTip.length, r = t.hideTip.length;
        i ? n = t.showTip[i - 1] : r && (n = t.hideTip[r - 1]), n && (n.dispatchAction = null, e.dispatchAction(n))
    }

    function Ng(t, e, n) {
        t.handler("leave", null, n)
    }

    function Fg(t, e, n, i) {
        e.handler(t, n, i)
    }

    function Vg(t) {
        var e = {showTip: [], hideTip: []}, n = function (i) {
            var r = e[i.type];
            r ? r.push(i) : (i.dispatchAction = n, t.dispatchAction(i))
        };
        return {dispatchAction: n, pendings: e}
    }

    function Hg(t, e) {
        if (!by.node) {
            var n = e.getZr(), i = (dA(n).records || {})[t];
            i && (dA(n).records[t] = null)
        }
    }

    function Wg(t, e) {
        var n, i = [], r = t.seriesIndex;
        if (null == r || !(n = e.getSeriesByIndex(r))) return {point: []};
        var o = n.getData(), a = rr(o, t);
        if (null == a || 0 > a || T(a)) return {point: []};
        var s = o.getItemGraphicEl(a), l = n.coordinateSystem;
        if (n.getTooltipPosition) i = n.getTooltipPosition(a) || []; else if (l && l.dataToPoint) if (t.isStacked) {
            var u = l.getBaseAxis(), h = l.getOtherAxis(u), c = h.dim, p = u.dim,
                f = "x" === c || "radius" === c ? 1 : 0, d = o.mapDimension(p), g = [];
            g[f] = o.get(d, a), g[1 - f] = o.get(o.getCalculationInfo("stackResultDimension"), a), i = l.dataToPoint(g) || []
        } else i = l.dataToPoint(o.getValues(v(l.dimensions, function (t) {
            return o.mapDimension(t)
        }), a)) || []; else if (s) {
            var y = s.getBoundingRect().clone();
            y.applyTransform(s.transform), i = [y.x + y.width / 2, y.y + y.height / 2]
        }
        return {point: i, el: s}
    }

    function Gg(t, e, n) {
        var i = t.currTrigger, r = [t.x, t.y], o = t, a = t.dispatchAction || Ey(n.dispatchAction, n),
            s = e.getComponent("axisPointer").coordSysAxesInfo;
        if (s) {
            Jg(r) && (r = Wg({seriesIndex: o.seriesIndex, dataIndex: o.dataIndex}, e).point);
            var l = Jg(r), u = o.axesInfo, h = s.axesInfo, c = "leave" === i || Jg(r), p = {}, f = {},
                d = {list: [], map: {}}, g = {showPointer: S(Xg, f), showTooltip: S(jg, d)};
            y(s.coordSysMap, function (t, e) {
                var n = l || t.containPoint(r);
                y(s.coordSysAxesInfo[e], function (t) {
                    var e = t.axis, i = $g(u, t);
                    if (!c && n && (!u || i)) {
                        var o = i && i.value;
                        null != o || l || (o = e.pointToData(r)), null != o && Ug(t, o, g, !1, p)
                    }
                })
            });
            var v = {};
            return y(h, function (t, e) {
                var n = t.linkGroup;
                n && !f[e] && y(n.axesInfo, function (e, i) {
                    var r = f[i];
                    if (e !== t && r) {
                        var o = r.value;
                        n.mapper && (o = t.axis.scale.parse(n.mapper(o, Qg(e), Qg(t)))), v[t.key] = o
                    }
                })
            }), y(v, function (t, e) {
                Ug(h[e], t, g, !0, p)
            }), qg(f, h, p), Zg(d, r, t, a), Kg(h, a, n), p
        }
    }

    function Ug(t, e, n, i, r) {
        var o = t.axis;
        if (!o.scale.isBlank() && o.containData(e)) {
            if (!t.involveSeries) return void n.showPointer(t, e);
            var a = Yg(e, t), s = a.payloadBatch, l = a.snapToValue;
            s[0] && null == r.seriesIndex && h(r, s[0]), !i && t.snap && o.containData(l) && null != l && (e = l), n.showPointer(t, e, s), n.showTooltip(t, a, l)
        }
    }

    function Yg(t, e) {
        var n = e.axis, i = n.dim, r = t, o = [], a = Number.MAX_VALUE, s = -1;
        return y(e.seriesModels, function (e) {
            var l, u, h = e.getData().mapDimensionsAll(i);
            if (e.getAxisTooltipData) {
                var c = e.getAxisTooltipData(h, t, n);
                u = c.dataIndices, l = c.nestestValue
            } else {
                if (u = e.getData().indicesOfNearest(h[0], t, "category" === n.type ? .5 : null), !u.length) return;
                l = e.getData().get(h[0], u[0])
            }
            if (null != l && isFinite(l)) {
                var p = t - l, f = Math.abs(p);
                a >= f && ((a > f || p >= 0 && 0 > s) && (a = f, s = p, r = l, o.length = 0), y(u, function (t) {
                    o.push({seriesIndex: e.seriesIndex, dataIndexInside: t, dataIndex: e.getData().getRawIndex(t)})
                }))
            }
        }), {payloadBatch: o, snapToValue: r}
    }

    function Xg(t, e, n, i) {
        t[e.key] = {value: n, payloadBatch: i}
    }

    function jg(t, e, n, i) {
        var r = n.payloadBatch, o = e.axis, a = o.model, s = e.axisPointerModel;
        if (e.triggerTooltip && r.length) {
            var l = e.coordSys.model, u = ng(l), h = t.map[u];
            h || (h = t.map[u] = {
                coordSysId: l.id,
                coordSysIndex: l.componentIndex,
                coordSysType: l.type,
                coordSysMainType: l.mainType,
                dataByAxis: []
            }, t.list.push(h)), h.dataByAxis.push({
                axisDim: o.dim,
                axisIndex: a.componentIndex,
                axisType: a.type,
                axisId: a.id,
                value: i,
                valueLabelOpt: {precision: s.get(["label", "precision"]), formatter: s.get(["label", "formatter"])},
                seriesDataIndices: r.slice()
            })
        }
    }

    function qg(t, e, n) {
        var i = n.axesInfo = [];
        y(e, function (e, n) {
            var r = e.axisPointerModel.option, o = t[n];
            o ? (!e.useHandle && (r.status = "show"), r.value = o.value, r.seriesDataIndices = (o.payloadBatch || []).slice()) : !e.useHandle && (r.status = "hide"), "show" === r.status && i.push({
                axisDim: e.axis.dim,
                axisIndex: e.axis.model.componentIndex,
                value: r.value
            })
        })
    }

    function Zg(t, e, n, i) {
        if (Jg(e) || !t.list.length) return void i({type: "hideTip"});
        var r = ((t.list[0].dataByAxis[0] || {}).seriesDataIndices || [])[0] || {};
        i({
            type: "showTip",
            escapeConnect: !0,
            x: e[0],
            y: e[1],
            tooltipOption: n.tooltipOption,
            position: n.position,
            dataIndexInside: r.dataIndexInside,
            dataIndex: r.dataIndex,
            seriesIndex: r.seriesIndex,
            dataByCoordSys: t.list
        })
    }

    function Kg(t, e, n) {
        var i = n.getZr(), r = "axisPointerLastHighlights", o = vA(i)[r] || {}, a = vA(i)[r] = {};
        y(t, function (t) {
            var e = t.axisPointerModel.option;
            "show" === e.status && y(e.seriesDataIndices, function (t) {
                var e = t.seriesIndex + " | " + t.dataIndex;
                a[e] = t
            })
        });
        var s = [], l = [];
        y(o, function (t, e) {
            !a[e] && l.push(t)
        }), y(a, function (t, e) {
            !o[e] && s.push(t)
        }), l.length && n.dispatchAction({
            type: "downplay",
            escapeConnect: !0,
            notBlur: !0,
            batch: l
        }), s.length && n.dispatchAction({type: "highlight", escapeConnect: !0, notBlur: !0, batch: s})
    }

    function $g(t, e) {
        for (var n = 0; n < (t || []).length; n++) {
            var i = t[n];
            if (e.axis.dim === i.axisDim && e.axis.model.componentIndex === i.axisIndex) return i
        }
    }

    function Qg(t) {
        var e = t.axis.model, n = {}, i = n.axisDim = t.axis.dim;
        return n.axisIndex = n[i + "AxisIndex"] = e.componentIndex, n.axisName = n[i + "AxisName"] = e.name, n.axisId = n[i + "AxisId"] = e.id, n
    }

    function Jg(t) {
        return !t || null == t[0] || isNaN(t[0]) || null == t[1] || isNaN(t[1])
    }

    function ty(t) {
        ND.registerAxisPointerClass("CartesianAxisPointer", cA), t.registerComponentModel(fA), t.registerComponentView(yA), t.registerPreprocessor(function (t) {
            if (t) {
                (!t.axisPointer || 0 === t.axisPointer.length) && (t.axisPointer = {});
                var e = t.axisPointer.link;
                e && !T(e) && (t.axisPointer.link = [e])
            }
        }), t.registerProcessor(t.PRIORITY.PROCESSOR.STATISTIC, function (t, e) {
            t.getComponent("axisPointer").coordSysAxesInfo = Xd(t, e)
        }), t.registerAction({type: "updateAxisPointer", event: "updateAxisPointer", update: ":updateAxisPointer"}, Gg)
    }

    function ey(t) {
        var e = t.get("confine");
        return null != e ? !!e : "richText" === t.get("renderMode")
    }

    function ny(t) {
        return t = "left" === t ? "right" : "right" === t ? "left" : "top" === t ? "bottom" : "top"
    }

    function iy(t, e, n) {
        if (!C(n) || "inside" === n) return "";
        e = dl(e);
        var i = ny(n), r = "", o = "";
        p(["left", "right"], i) > -1 ? (r = i + ":-6px;top:50%;", o = "translateY(-50%) rotate(" + ("left" === i ? -225 : -45) + "deg)") : (r = i + ":-6px;left:50%;", o = "translateX(-50%) rotate(" + ("top" === i ? 225 : 45) + "deg)"), o = v(_A, function (t) {
            return t + "transform:" + o
        }).join(";");
        var a = ["position:absolute;width:10px;height:10px;", "" + r + o + ";", "border-bottom: " + e + " solid 1px;", "border-right: " + e + " solid 1px;", "background-color: " + t + ";", "box-shadow: 8px 8px 16px -3px #000;"];
        return '<div style="' + a.join("") + '"></div>'
    }

    function ry(t, e) {
        var n = "cubic-bezier(0.23, 1, 0.32, 1)", i = "opacity " + t / 2 + "s " + n + ",visibility " + t / 2 + "s " + n;
        return e || (i += ",left " + t + "s " + n + ",top " + t + "s " + n), v(_A, function (t) {
            return t + "transition:" + i
        }).join(";")
    }

    function oy(t) {
        var e = [], n = t.get("fontSize"), i = t.getTextColor();
        i && e.push("color:" + i), e.push("font:" + t.getFont()), n && e.push("line-height:" + Math.round(3 * n / 2) + "px");
        var r = t.get("textShadowColor"), o = t.get("textShadowBlur") || 0, a = t.get("textShadowOffsetX") || 0,
            s = t.get("textShadowOffsetY") || 0;
        return r && o && e.push("text-shadow:" + a + "px " + s + "px " + o + "px " + r), y(["decoration", "align"], function (n) {
            var i = t.get(n);
            i && e.push("text-" + n + ":" + i)
        }), e.join(";")
    }

    function ay(t, e, n) {
        var i = [], r = t.get("transitionDuration"), o = t.get("backgroundColor"), a = t.get("shadowBlur"),
            s = t.get("shadowColor"), l = t.get("shadowOffsetX"), u = t.get("shadowOffsetY"),
            h = t.getModel("textStyle"), c = $u(t, "html"), p = l + "px " + u + "px " + a + "px " + s;
        return i.push("box-shadow:" + p), e && r && i.push(ry(r, n)), o && (by.canvasSupported ? i.push("background-Color:" + o) : (i.push("background-Color:#" + un(o)), i.push("filter:alpha(opacity=70)"))), y(["width", "color", "radius"], function (e) {
            var n = "border-" + e, r = sl(n), o = t.get(r);
            null != o && i.push(n + ":" + o + ("color" === e ? "" : "px"))
        }), i.push(oy(h)), null != c && i.push("padding:" + vb(c).join("px ") + "px"), i.join(";") + ";"
    }

    function sy(t, e, n, i, r) {
        var o = e && e.painter;
        if (n) {
            var a = o && o.getViewportRoot();
            a && xe(t, a, document.body, i, r)
        } else {
            t[0] = i, t[1] = r;
            var s = o && o.getViewportRootOffset();
            s && (t[0] += s.offsetLeft, t[1] += s.offsetTop)
        }
        t[2] = t[0] / e.getWidth(), t[3] = t[1] / e.getHeight()
    }

    function ly(t) {
        return Math.max(0, t)
    }

    function uy(t) {
        var e = ly(t.shadowBlur || 0), n = ly(t.shadowOffsetX || 0), i = ly(t.shadowOffsetY || 0);
        return {left: ly(e - n), right: ly(e + n), top: ly(e - i), bottom: ly(e + i)}
    }

    function hy(t, e, n, i) {
        t[0] = n, t[1] = i, t[2] = t[0] / e.getWidth(), t[3] = t[1] / e.getHeight()
    }

    function cy(t) {
        for (var e = t.pop(); t.length;) {
            var n = t.pop();
            n && (n instanceof $w && (n = n.get("tooltip", !0)), C(n) && (n = {formatter: n}), e = new $w(n, e, e.ecModel))
        }
        return e
    }

    function py(t, e) {
        return t.dispatchAction || Ey(e.dispatchAction, e)
    }

    function fy(t, e, n, i, r, o, a) {
        var s = n.getOuterSize(), l = s.width, u = s.height;
        return null != o && (t + l + o + 2 > i ? t -= l + o : t += o), null != a && (e + u + a > r ? e -= u + a : e += a), [t, e]
    }

    function dy(t, e, n, i, r) {
        var o = n.getOuterSize(), a = o.width, s = o.height;
        return t = Math.min(t + a, i) - a, e = Math.min(e + s, r) - s, t = Math.max(t, 0), e = Math.max(e, 0), [t, e]
    }

    function gy(t, e, n) {
        var i = n[0], r = n[1], o = 10, a = 5, s = 0, l = 0, u = e.width, h = e.height;
        switch (t) {
            case "inside":
                s = e.x + u / 2 - i / 2, l = e.y + h / 2 - r / 2;
                break;
            case "top":
                s = e.x + u / 2 - i / 2, l = e.y - r - o;
                break;
            case "bottom":
                s = e.x + u / 2 - i / 2, l = e.y + h + o;
                break;
            case "left":
                s = e.x - i - o - a, l = e.y + h / 2 - r / 2;
                break;
            case "right":
                s = e.x + u + o + a, l = e.y + h / 2 - r / 2
        }
        return [s, l]
    }

    function yy(t) {
        return "center" === t || "middle" === t
    }

    function vy(t) {
        mf(ty), t.registerComponentModel(mA), t.registerComponentView(IA), t.registerAction({
            type: "showTip",
            event: "showTip",
            update: "tooltip:manuallyShowTip"
        }, function () {
        }), t.registerAction({type: "hideTip", event: "hideTip", update: "tooltip:manuallyHideTip"}, function () {
        })
    }

    var my = function (t, e) {
        return (my = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
            t.__proto__ = e
        } || function (t, e) {
            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
        })(t, e)
    }, _y = function () {
        return _y = Object.assign || function (t) {
            for (var e, n = 1, i = arguments.length; i > n; n++) {
                e = arguments[n];
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r])
            }
            return t
        }, _y.apply(this, arguments)
    }, xy = function () {
        function t() {
            this.firefox = !1, this.ie = !1, this.edge = !1, this.newEdge = !1, this.weChat = !1
        }

        return t
    }(), wy = function () {
        function t() {
            this.browser = new xy, this.node = !1, this.wxa = !1, this.worker = !1, this.canvasSupported = !1, this.svgSupported = !1, this.touchEventsSupported = !1, this.pointerEventsSupported = !1, this.domSupported = !1
        }

        return t
    }(), by = new wy;
    "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? (by.wxa = !0, by.canvasSupported = !0, by.touchEventsSupported = !0) : "undefined" == typeof document && "undefined" != typeof self ? (by.worker = !0, by.canvasSupported = !0) : "undefined" == typeof navigator ? (by.node = !0, by.canvasSupported = !0, by.svgSupported = !0) : i(navigator.userAgent, by);
    var Sy = {
            "[object Function]": !0,
            "[object RegExp]": !0,
            "[object Date]": !0,
            "[object Error]": !0,
            "[object CanvasGradient]": !0,
            "[object CanvasPattern]": !0,
            "[object Image]": !0,
            "[object Canvas]": !0
        }, Ty = {
            "[object Int8Array]": !0,
            "[object Uint8Array]": !0,
            "[object Uint8ClampedArray]": !0,
            "[object Int16Array]": !0,
            "[object Uint16Array]": !0,
            "[object Int32Array]": !0,
            "[object Uint32Array]": !0,
            "[object Float32Array]": !0,
            "[object Float64Array]": !0
        }, My = Object.prototype.toString, Cy = Array.prototype, Iy = Cy.forEach, Dy = Cy.filter, Ay = Cy.slice,
        ky = Cy.map, Ly = function () {
        }.constructor, Py = Ly ? Ly.prototype : null, Oy = {}, Ry = 2311, By = function () {
            return Oy.createCanvas()
        };
    Oy.createCanvas = function () {
        return document.createElement("canvas")
    };
    var Ey = Py && M(Py.bind) ? Py.call.bind(Py.bind) : b, zy = "__ec_primitive__", Ny = function () {
            function t(e) {
                function n(t, e) {
                    i ? r.set(t, e) : r.set(e, t)
                }

                this.data = {};
                var i = T(e);
                this.data = {};
                var r = this;
                e instanceof t ? e.each(n) : e && y(e, n)
            }

            return t.prototype.get = function (t) {
                return this.data.hasOwnProperty(t) ? this.data[t] : null
            }, t.prototype.set = function (t, e) {
                return this.data[t] = e
            }, t.prototype.each = function (t, e) {
                for (var n in this.data) this.data.hasOwnProperty(n) && t.call(e, this.data[n], n)
            }, t.prototype.keys = function () {
                return w(this.data)
            }, t.prototype.removeKey = function (t) {
                delete this.data[t]
            }, t
        }(), Fy = (Object.freeze || Object)({
            $override: r,
            guid: o,
            logError: a,
            clone: s,
            merge: l,
            mergeAll: u,
            extend: h,
            defaults: c,
            createCanvas: By,
            indexOf: p,
            inherits: f,
            mixin: d,
            isArrayLike: g,
            each: y,
            map: v,
            reduce: m,
            filter: _,
            find: x,
            keys: w,
            bind: Ey,
            curry: S,
            isArray: T,
            isFunction: M,
            isString: C,
            isStringSafe: I,
            isNumber: D,
            isObject: A,
            isBuiltInObject: k,
            isTypedArray: L,
            isDom: P,
            isGradientObject: O,
            isPatternObject: R,
            isRegExp: B,
            eqNaN: E,
            retrieve: z,
            retrieve2: N,
            retrieve3: F,
            slice: V,
            normalizeCssArray: H,
            assert: W,
            trim: G,
            setAsPrimitive: U,
            isPrimitive: Y,
            HashMap: Ny,
            createHashMap: X,
            concatArray: j,
            createObject: q,
            hasOwn: Z,
            noop: K
        }), Vy = re, Hy = oe, Wy = ce, Gy = pe, Uy = (Object.freeze || Object)({
            create: $,
            copy: Q,
            clone: J,
            set: te,
            add: ee,
            scaleAndAdd: ne,
            sub: ie,
            len: re,
            length: Vy,
            lenSquare: oe,
            lengthSquare: Hy,
            mul: ae,
            div: se,
            dot: le,
            scale: ue,
            normalize: he,
            distance: ce,
            dist: Wy,
            distanceSquare: pe,
            distSquare: Gy,
            negate: fe,
            lerp: de,
            applyTransform: ge,
            min: ye,
            max: ve
        }), Yy = function () {
            function t(t, e) {
                this.target = t, this.topTarget = e && e.topTarget
            }

            return t
        }(), Xy = function () {
            function t(t) {
                this.handler = t, t.on("mousedown", this._dragStart, this), t.on("mousemove", this._drag, this), t.on("mouseup", this._dragEnd, this)
            }

            return t.prototype._dragStart = function (t) {
                for (var e = t.target; e && !e.draggable;) e = e.parent;
                e && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.handler.dispatchToElement(new Yy(e, t), "dragstart", t.event))
            }, t.prototype._drag = function (t) {
                var e = this._draggingTarget;
                if (e) {
                    var n = t.offsetX, i = t.offsetY, r = n - this._x, o = i - this._y;
                    this._x = n, this._y = i, e.drift(r, o, t), this.handler.dispatchToElement(new Yy(e, t), "drag", t.event);
                    var a = this.handler.findHover(n, i, e).target, s = this._dropTarget;
                    this._dropTarget = a, e !== a && (s && a !== s && this.handler.dispatchToElement(new Yy(s, t), "dragleave", t.event), a && a !== s && this.handler.dispatchToElement(new Yy(a, t), "dragenter", t.event))
                }
            }, t.prototype._dragEnd = function (t) {
                var e = this._draggingTarget;
                e && (e.dragging = !1), this.handler.dispatchToElement(new Yy(e, t), "dragend", t.event), this._dropTarget && this.handler.dispatchToElement(new Yy(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
            }, t
        }(), jy = function () {
            function t(t) {
                t && (this._$eventProcessor = t)
            }

            return t.prototype.on = function (t, e, n, i) {
                this._$handlers || (this._$handlers = {});
                var r = this._$handlers;
                if ("function" == typeof e && (i = n, n = e, e = null), !n || !t) return this;
                var o = this._$eventProcessor;
                null != e && o && o.normalizeQuery && (e = o.normalizeQuery(e)), r[t] || (r[t] = []);
                for (var a = 0; a < r[t].length; a++) if (r[t][a].h === n) return this;
                var s = {h: n, query: e, ctx: i || this, callAtLast: n.zrEventfulCallAtLast}, l = r[t].length - 1,
                    u = r[t][l];
                return u && u.callAtLast ? r[t].splice(l, 0, s) : r[t].push(s), this
            }, t.prototype.isSilent = function (t) {
                var e = this._$handlers;
                return !e || !e[t] || !e[t].length
            }, t.prototype.off = function (t, e) {
                var n = this._$handlers;
                if (!n) return this;
                if (!t) return this._$handlers = {}, this;
                if (e) {
                    if (n[t]) {
                        for (var i = [], r = 0, o = n[t].length; o > r; r++) n[t][r].h !== e && i.push(n[t][r]);
                        n[t] = i
                    }
                    n[t] && 0 === n[t].length && delete n[t]
                } else delete n[t];
                return this
            }, t.prototype.trigger = function (t) {
                for (var e = [], n = 1; n < arguments.length; n++) e[n - 1] = arguments[n];
                if (!this._$handlers) return this;
                var i = this._$handlers[t], r = this._$eventProcessor;
                if (i) for (var o = e.length, a = i.length, s = 0; a > s; s++) {
                    var l = i[s];
                    if (!r || !r.filter || null == l.query || r.filter(t, l.query)) switch (o) {
                        case 0:
                            l.h.call(l.ctx);
                            break;
                        case 1:
                            l.h.call(l.ctx, e[0]);
                            break;
                        case 2:
                            l.h.call(l.ctx, e[0], e[1]);
                            break;
                        default:
                            l.h.apply(l.ctx, e)
                    }
                }
                return r && r.afterTrigger && r.afterTrigger(t), this
            }, t.prototype.triggerWithContext = function (t) {
                if (!this._$handlers) return this;
                var e = this._$handlers[t], n = this._$eventProcessor;
                if (e) for (var i = arguments, r = i.length, o = i[r - 1], a = e.length, s = 0; a > s; s++) {
                    var l = e[s];
                    if (!n || !n.filter || null == l.query || n.filter(t, l.query)) switch (r) {
                        case 0:
                            l.h.call(o);
                            break;
                        case 1:
                            l.h.call(o, i[0]);
                            break;
                        case 2:
                            l.h.call(o, i[0], i[1]);
                            break;
                        default:
                            l.h.apply(o, i.slice(1, r - 1))
                    }
                }
                return n && n.afterTrigger && n.afterTrigger(t), this
            }, t
        }(), qy = Math.log(2), Zy = "___zrEVENTSAVED", Ky = [],
        $y = "undefined" != typeof window && !!window.addEventListener,
        Qy = /^(?:mouse|pointer|contextmenu|drag|drop)|click/, Jy = [], tv = $y ? function (t) {
            t.preventDefault(), t.stopPropagation(), t.cancelBubble = !0
        } : function (t) {
            t.returnValue = !1, t.cancelBubble = !0
        }, ev = function () {
            function t() {
                this._track = []
            }

            return t.prototype.recognize = function (t, e, n) {
                return this._doTrack(t, e, n), this._recognize(t)
            }, t.prototype.clear = function () {
                return this._track.length = 0, this
            }, t.prototype._doTrack = function (t, e, n) {
                var i = t.touches;
                if (i) {
                    for (var r = {points: [], touches: [], target: e, event: t}, o = 0, a = i.length; a > o; o++) {
                        var s = i[o], l = Me(n, s, {});
                        r.points.push([l.zrX, l.zrY]), r.touches.push(s)
                    }
                    this._track.push(r)
                }
            }, t.prototype._recognize = function (t) {
                for (var e in nv) if (nv.hasOwnProperty(e)) {
                    var n = nv[e](this._track, t);
                    if (n) return n
                }
            }, t
        }(), nv = {
            pinch: function (t, e) {
                var n = t.length;
                if (n) {
                    var i = (t[n - 1] || {}).points, r = (t[n - 2] || {}).points || i;
                    if (r && r.length > 1 && i && i.length > 1) {
                        var o = Pe(i) / Pe(r);
                        !isFinite(o) && (o = 1), e.pinchScale = o;
                        var a = Oe(i);
                        return e.pinchX = a[0], e.pinchY = a[1], {type: "pinch", target: t[0].target, event: e}
                    }
                }
            }
        }, iv = "silent", rv = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.handler = null, e
            }

            return e(n, t), n.prototype.dispose = function () {
            }, n.prototype.setCursor = function () {
            }, n
        }(jy), ov = function () {
            function t(t, e) {
                this.x = t, this.y = e
            }

            return t
        }(), av = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        sv = function (t) {
            function n(e, n, i, r) {
                var o = t.call(this) || this;
                return o._hovered = new ov(0, 0), o.storage = e, o.painter = n, o.painterRoot = r, i = i || new rv, o.proxy = null, o.setHandlerProxy(i), o._draggingMgr = new Xy(o), o
            }

            return e(n, t), n.prototype.setHandlerProxy = function (t) {
                this.proxy && this.proxy.dispose(), t && (y(av, function (e) {
                    t.on && t.on(e, this[e], this)
                }, this), t.handler = this), this.proxy = t
            }, n.prototype.mousemove = function (t) {
                var e = t.zrX, n = t.zrY, i = ze(this, e, n), r = this._hovered, o = r.target;
                o && !o.__zr && (r = this.findHover(r.x, r.y), o = r.target);
                var a = this._hovered = i ? new ov(e, n) : this.findHover(e, n), s = a.target, l = this.proxy;
                l.setCursor && l.setCursor(s ? s.cursor : "default"), o && s !== o && this.dispatchToElement(r, "mouseout", t), this.dispatchToElement(a, "mousemove", t), s && s !== o && this.dispatchToElement(a, "mouseover", t)
            }, n.prototype.mouseout = function (t) {
                var e = t.zrEventControl;
                "only_globalout" !== e && this.dispatchToElement(this._hovered, "mouseout", t), "no_globalout" !== e && this.trigger("globalout", {
                    type: "globalout",
                    event: t
                })
            }, n.prototype.resize = function () {
                this._hovered = new ov(0, 0)
            }, n.prototype.dispatch = function (t, e) {
                var n = this[t];
                n && n.call(this, e)
            }, n.prototype.dispose = function () {
                this.proxy.dispose(), this.storage = null, this.proxy = null, this.painter = null
            }, n.prototype.setCursorStyle = function (t) {
                var e = this.proxy;
                e.setCursor && e.setCursor(t)
            }, n.prototype.dispatchToElement = function (t, e, n) {
                t = t || {};
                var i = t.target;
                if (!i || !i.silent) {
                    for (var r = "on" + e, o = Re(e, t, n); i && (i[r] && (o.cancelBubble = !!i[r].call(i, o)), i.trigger(e, o), i = i.__hostTarget ? i.__hostTarget : i.parent, !o.cancelBubble);) ;
                    o.cancelBubble || (this.trigger(e, o), this.painter && this.painter.eachOtherLayer && this.painter.eachOtherLayer(function (t) {
                        "function" == typeof t[r] && t[r].call(t, o), t.trigger && t.trigger(e, o)
                    }))
                }
            }, n.prototype.findHover = function (t, e, n) {
                for (var i = this.storage.getDisplayList(), r = new ov(t, e), o = i.length - 1; o >= 0; o--) {
                    var a = void 0;
                    if (i[o] !== n && !i[o].ignore && (a = Ee(i[o], t, e)) && (!r.topTarget && (r.topTarget = i[o]), a !== iv)) {
                        r.target = i[o];
                        break
                    }
                }
                return r
            }, n.prototype.processGesture = function (t, e) {
                this._gestureMgr || (this._gestureMgr = new ev);
                var n = this._gestureMgr;
                "start" === e && n.clear();
                var i = n.recognize(t, this.findHover(t.zrX, t.zrY, null).target, this.proxy.dom);
                if ("end" === e && n.clear(), i) {
                    var r = i.type;
                    t.gestureEvent = r;
                    var o = new ov;
                    o.target = i.target, this.dispatchToElement(o, r, i.event)
                }
            }, n
        }(jy);
    y(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        sv.prototype[t] = function (e) {
            var n, i, r = e.zrX, o = e.zrY, a = ze(this, r, o);
            if ("mouseup" === t && a || (n = this.findHover(r, o), i = n.target), "mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i; else if ("mouseup" === t) this._upEl = i; else if ("click" === t) {
                if (this._downEl !== this._upEl || !this._downPoint || Wy(this._downPoint, [e.zrX, e.zrY]) > 4) return;
                this._downPoint = null
            }
            this.dispatchToElement(n, t, e)
        }
    });
    var lv, uv, hv = (Object.freeze || Object)({
            create: Ne,
            identity: Fe,
            copy: Ve,
            mul: He,
            translate: We,
            rotate: Ge,
            scale: Ue,
            invert: Ye,
            clone: Xe
        }), cv = Fe, pv = 5e-5, fv = [], dv = [], gv = Ne(), yv = Math.abs, vv = function () {
            function t() {
            }

            return t.prototype.setPosition = function (t) {
                this.x = t[0], this.y = t[1]
            }, t.prototype.setScale = function (t) {
                this.scaleX = t[0], this.scaleY = t[1]
            }, t.prototype.setOrigin = function (t) {
                this.originX = t[0], this.originY = t[1]
            }, t.prototype.needLocalTransform = function () {
                return je(this.rotation) || je(this.x) || je(this.y) || je(this.scaleX - 1) || je(this.scaleY - 1)
            }, t.prototype.updateTransform = function () {
                var t = this.parent, e = t && t.transform, n = this.needLocalTransform(), i = this.transform;
                return n || e ? (i = i || Ne(), n ? this.getLocalTransform(i) : cv(i), e && (n ? He(i, t.transform, i) : Ve(i, t.transform)), this.transform = i, void this._resolveGlobalScaleRatio(i)) : void (i && cv(i))
            }, t.prototype._resolveGlobalScaleRatio = function (t) {
                var e = this.globalScaleRatio;
                if (null != e && 1 !== e) {
                    this.getGlobalScale(fv);
                    var n = fv[0] < 0 ? -1 : 1, i = fv[1] < 0 ? -1 : 1, r = ((fv[0] - n) * e + n) / fv[0] || 0,
                        o = ((fv[1] - i) * e + i) / fv[1] || 0;
                    t[0] *= r, t[1] *= r, t[2] *= o, t[3] *= o
                }
                this.invTransform = this.invTransform || Ne(), Ye(this.invTransform, t)
            }, t.prototype.getLocalTransform = function (e) {
                return t.getLocalTransform(this, e)
            }, t.prototype.getComputedTransform = function () {
                for (var t = this, e = []; t;) e.push(t), t = t.parent;
                for (; t = e.pop();) t.updateTransform();
                return this.transform
            }, t.prototype.setLocalTransform = function (t) {
                if (t) {
                    var e = t[0] * t[0] + t[1] * t[1], n = t[2] * t[2] + t[3] * t[3];
                    je(e - 1) && (e = Math.sqrt(e)), je(n - 1) && (n = Math.sqrt(n)), t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), this.rotation = Math.atan2(-t[1] / n, t[0] / e), 0 > e && 0 > n && (this.rotation += Math.PI, e = -e, n = -n), this.x = t[4], this.y = t[5], this.scaleX = e, this.scaleY = n
                }
            }, t.prototype.decomposeTransform = function () {
                if (this.transform) {
                    var t = this.parent, e = this.transform;
                    t && t.transform && (He(dv, t.invTransform, e), e = dv);
                    var n = this.originX, i = this.originY;
                    (n || i) && (gv[4] = n, gv[5] = i, He(dv, e, gv), dv[4] -= n, dv[5] -= i, e = dv), this.setLocalTransform(e)
                }
            }, t.prototype.getGlobalScale = function (t) {
                var e = this.transform;
                return t = t || [], e ? (t[0] = Math.sqrt(e[0] * e[0] + e[1] * e[1]), t[1] = Math.sqrt(e[2] * e[2] + e[3] * e[3]), e[0] < 0 && (t[0] = -t[0]), e[3] < 0 && (t[1] = -t[1]), t) : (t[0] = 1, t[1] = 1, t)
            }, t.prototype.transformCoordToLocal = function (t, e) {
                var n = [t, e], i = this.invTransform;
                return i && ge(n, n, i), n
            }, t.prototype.transformCoordToGlobal = function (t, e) {
                var n = [t, e], i = this.transform;
                return i && ge(n, n, i), n
            }, t.prototype.getLineScale = function () {
                var t = this.transform;
                return t && yv(t[0] - 1) > 1e-10 && yv(t[3] - 1) > 1e-10 ? Math.sqrt(yv(t[0] * t[3] - t[2] * t[1])) : 1
            }, t.getLocalTransform = function (t, e) {
                e = e || [], cv(e);
                var n = t.originX || 0, i = t.originY || 0, r = t.scaleX, o = t.scaleY, a = t.rotation || 0, s = t.x,
                    l = t.y;
                return e[4] -= n, e[5] -= i, e[0] *= r, e[1] *= o, e[2] *= r, e[3] *= o, e[4] *= r, e[5] *= o, a && Ge(e, e, a), e[4] += n, e[5] += i, e[4] += s, e[5] += l, e
            }, t.initDefaultProps = function () {
                var e = t.prototype;
                e.x = 0, e.y = 0, e.scaleX = 1, e.scaleY = 1, e.originX = 0, e.originY = 0, e.rotation = 0, e.globalScaleRatio = 1
            }(), t
        }(), mv = {
            linear: function (t) {
                return t
            }, quadraticIn: function (t) {
                return t * t
            }, quadraticOut: function (t) {
                return t * (2 - t)
            }, quadraticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
            }, cubicIn: function (t) {
                return t * t * t
            }, cubicOut: function (t) {
                return --t * t * t + 1
            }, cubicInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
            }, quarticIn: function (t) {
                return t * t * t * t
            }, quarticOut: function (t) {
                return 1 - --t * t * t * t
            }, quarticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
            }, quinticIn: function (t) {
                return t * t * t * t * t
            }, quinticOut: function (t) {
                return --t * t * t * t * t + 1
            }, quinticInOut: function (t) {
                return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
            }, sinusoidalIn: function (t) {
                return 1 - Math.cos(t * Math.PI / 2)
            }, sinusoidalOut: function (t) {
                return Math.sin(t * Math.PI / 2)
            }, sinusoidalInOut: function (t) {
                return .5 * (1 - Math.cos(Math.PI * t))
            }, exponentialIn: function (t) {
                return 0 === t ? 0 : Math.pow(1024, t - 1)
            }, exponentialOut: function (t) {
                return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
            }, exponentialInOut: function (t) {
                return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (-Math.pow(2, -10 * (t - 1)) + 2)
            }, circularIn: function (t) {
                return 1 - Math.sqrt(1 - t * t)
            }, circularOut: function (t) {
                return Math.sqrt(1 - --t * t)
            }, circularInOut: function (t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
            }, elasticIn: function (t) {
                var e, n = .1, i = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), -(n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i)))
            }, elasticOut: function (t) {
                var e, n = .1, i = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin(2 * (t - e) * Math.PI / i) + 1)
            }, elasticInOut: function (t) {
                var e, n = .1, i = .4;
                return 0 === t ? 0 : 1 === t ? 1 : (!n || 1 > n ? (n = 1, e = i / 4) : e = i * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? -.5 * n * Math.pow(2, 10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) : n * Math.pow(2, -10 * (t -= 1)) * Math.sin(2 * (t - e) * Math.PI / i) * .5 + 1)
            }, backIn: function (t) {
                var e = 1.70158;
                return t * t * ((e + 1) * t - e)
            }, backOut: function (t) {
                var e = 1.70158;
                return --t * t * ((e + 1) * t + e) + 1
            }, backInOut: function (t) {
                var e = 2.5949095;
                return (t *= 2) < 1 ? .5 * t * t * ((e + 1) * t - e) : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
            }, bounceIn: function (t) {
                return 1 - mv.bounceOut(1 - t)
            }, bounceOut: function (t) {
                return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
            }, bounceInOut: function (t) {
                return .5 > t ? .5 * mv.bounceIn(2 * t) : .5 * mv.bounceOut(2 * t - 1) + .5
            }
        }, _v = function () {
            function t(t) {
                this._initialized = !1, this._startTime = 0, this._pausedTime = 0, this._paused = !1, this._life = t.life || 1e3, this._delay = t.delay || 0, this.loop = null == t.loop ? !1 : t.loop, this.gap = t.gap || 0, this.easing = t.easing || "linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart
            }

            return t.prototype.step = function (t, e) {
                if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) return void (this._pausedTime += e);
                var n = (t - this._startTime - this._pausedTime) / this._life;
                0 > n && (n = 0), n = Math.min(n, 1);
                var i = this.easing, r = "string" == typeof i ? mv[i] : i, o = "function" == typeof r ? r(n) : n;
                if (this.onframe && this.onframe(o), 1 === n) {
                    if (!this.loop) return !0;
                    this._restart(t), this.onrestart && this.onrestart()
                }
                return !1
            }, t.prototype._restart = function (t) {
                var e = (t - this._startTime - this._pausedTime) % this._life;
                this._startTime = t - e + this.gap, this._pausedTime = 0
            }, t.prototype.pause = function () {
                this._paused = !0
            }, t.prototype.resume = function () {
                this._paused = !1
            }, t
        }(), xv = function () {
            function t(t) {
                this.value = t
            }

            return t
        }(), wv = function () {
            function t() {
                this._len = 0
            }

            return t.prototype.insert = function (t) {
                var e = new xv(t);
                return this.insertEntry(e), e
            }, t.prototype.insertEntry = function (t) {
                this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
            }, t.prototype.remove = function (t) {
                var e = t.prev, n = t.next;
                e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--
            }, t.prototype.len = function () {
                return this._len
            }, t.prototype.clear = function () {
                this.head = this.tail = null, this._len = 0
            }, t
        }(), bv = function () {
            function t(t) {
                this._list = new wv, this._maxSize = 10, this._map = {}, this._maxSize = t
            }

            return t.prototype.put = function (t, e) {
                var n = this._list, i = this._map, r = null;
                if (null == i[t]) {
                    var o = n.len(), a = this._lastRemovedEntry;
                    if (o >= this._maxSize && o > 0) {
                        var s = n.head;
                        n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s
                    }
                    a ? a.value = e : a = new xv(e), a.key = t, n.insertEntry(a), i[t] = a
                }
                return r
            }, t.prototype.get = function (t) {
                var e = this._map[t], n = this._list;
                return null != e ? (e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value) : void 0
            }, t.prototype.clear = function () {
                this._list.clear(), this._map = {}
            }, t.prototype.len = function () {
                return this._list.len()
            }, t
        }(), Sv = {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255, 1],
            antiquewhite: [250, 235, 215, 1],
            aqua: [0, 255, 255, 1],
            aquamarine: [127, 255, 212, 1],
            azure: [240, 255, 255, 1],
            beige: [245, 245, 220, 1],
            bisque: [255, 228, 196, 1],
            black: [0, 0, 0, 1],
            blanchedalmond: [255, 235, 205, 1],
            blue: [0, 0, 255, 1],
            blueviolet: [138, 43, 226, 1],
            brown: [165, 42, 42, 1],
            burlywood: [222, 184, 135, 1],
            cadetblue: [95, 158, 160, 1],
            chartreuse: [127, 255, 0, 1],
            chocolate: [210, 105, 30, 1],
            coral: [255, 127, 80, 1],
            cornflowerblue: [100, 149, 237, 1],
            cornsilk: [255, 248, 220, 1],
            crimson: [220, 20, 60, 1],
            cyan: [0, 255, 255, 1],
            darkblue: [0, 0, 139, 1],
            darkcyan: [0, 139, 139, 1],
            darkgoldenrod: [184, 134, 11, 1],
            darkgray: [169, 169, 169, 1],
            darkgreen: [0, 100, 0, 1],
            darkgrey: [169, 169, 169, 1],
            darkkhaki: [189, 183, 107, 1],
            darkmagenta: [139, 0, 139, 1],
            darkolivegreen: [85, 107, 47, 1],
            darkorange: [255, 140, 0, 1],
            darkorchid: [153, 50, 204, 1],
            darkred: [139, 0, 0, 1],
            darksalmon: [233, 150, 122, 1],
            darkseagreen: [143, 188, 143, 1],
            darkslateblue: [72, 61, 139, 1],
            darkslategray: [47, 79, 79, 1],
            darkslategrey: [47, 79, 79, 1],
            darkturquoise: [0, 206, 209, 1],
            darkviolet: [148, 0, 211, 1],
            deeppink: [255, 20, 147, 1],
            deepskyblue: [0, 191, 255, 1],
            dimgray: [105, 105, 105, 1],
            dimgrey: [105, 105, 105, 1],
            dodgerblue: [30, 144, 255, 1],
            firebrick: [178, 34, 34, 1],
            floralwhite: [255, 250, 240, 1],
            forestgreen: [34, 139, 34, 1],
            fuchsia: [255, 0, 255, 1],
            gainsboro: [220, 220, 220, 1],
            ghostwhite: [248, 248, 255, 1],
            gold: [255, 215, 0, 1],
            goldenrod: [218, 165, 32, 1],
            gray: [128, 128, 128, 1],
            green: [0, 128, 0, 1],
            greenyellow: [173, 255, 47, 1],
            grey: [128, 128, 128, 1],
            honeydew: [240, 255, 240, 1],
            hotpink: [255, 105, 180, 1],
            indianred: [205, 92, 92, 1],
            indigo: [75, 0, 130, 1],
            ivory: [255, 255, 240, 1],
            khaki: [240, 230, 140, 1],
            lavender: [230, 230, 250, 1],
            lavenderblush: [255, 240, 245, 1],
            lawngreen: [124, 252, 0, 1],
            lemonchiffon: [255, 250, 205, 1],
            lightblue: [173, 216, 230, 1],
            lightcoral: [240, 128, 128, 1],
            lightcyan: [224, 255, 255, 1],
            lightgoldenrodyellow: [250, 250, 210, 1],
            lightgray: [211, 211, 211, 1],
            lightgreen: [144, 238, 144, 1],
            lightgrey: [211, 211, 211, 1],
            lightpink: [255, 182, 193, 1],
            lightsalmon: [255, 160, 122, 1],
            lightseagreen: [32, 178, 170, 1],
            lightskyblue: [135, 206, 250, 1],
            lightslategray: [119, 136, 153, 1],
            lightslategrey: [119, 136, 153, 1],
            lightsteelblue: [176, 196, 222, 1],
            lightyellow: [255, 255, 224, 1],
            lime: [0, 255, 0, 1],
            limegreen: [50, 205, 50, 1],
            linen: [250, 240, 230, 1],
            magenta: [255, 0, 255, 1],
            maroon: [128, 0, 0, 1],
            mediumaquamarine: [102, 205, 170, 1],
            mediumblue: [0, 0, 205, 1],
            mediumorchid: [186, 85, 211, 1],
            mediumpurple: [147, 112, 219, 1],
            mediumseagreen: [60, 179, 113, 1],
            mediumslateblue: [123, 104, 238, 1],
            mediumspringgreen: [0, 250, 154, 1],
            mediumturquoise: [72, 209, 204, 1],
            mediumvioletred: [199, 21, 133, 1],
            midnightblue: [25, 25, 112, 1],
            mintcream: [245, 255, 250, 1],
            mistyrose: [255, 228, 225, 1],
            moccasin: [255, 228, 181, 1],
            navajowhite: [255, 222, 173, 1],
            navy: [0, 0, 128, 1],
            oldlace: [253, 245, 230, 1],
            olive: [128, 128, 0, 1],
            olivedrab: [107, 142, 35, 1],
            orange: [255, 165, 0, 1],
            orangered: [255, 69, 0, 1],
            orchid: [218, 112, 214, 1],
            palegoldenrod: [238, 232, 170, 1],
            palegreen: [152, 251, 152, 1],
            paleturquoise: [175, 238, 238, 1],
            palevioletred: [219, 112, 147, 1],
            papayawhip: [255, 239, 213, 1],
            peachpuff: [255, 218, 185, 1],
            peru: [205, 133, 63, 1],
            pink: [255, 192, 203, 1],
            plum: [221, 160, 221, 1],
            powderblue: [176, 224, 230, 1],
            purple: [128, 0, 128, 1],
            red: [255, 0, 0, 1],
            rosybrown: [188, 143, 143, 1],
            royalblue: [65, 105, 225, 1],
            saddlebrown: [139, 69, 19, 1],
            salmon: [250, 128, 114, 1],
            sandybrown: [244, 164, 96, 1],
            seagreen: [46, 139, 87, 1],
            seashell: [255, 245, 238, 1],
            sienna: [160, 82, 45, 1],
            silver: [192, 192, 192, 1],
            skyblue: [135, 206, 235, 1],
            slateblue: [106, 90, 205, 1],
            slategray: [112, 128, 144, 1],
            slategrey: [112, 128, 144, 1],
            snow: [255, 250, 250, 1],
            springgreen: [0, 255, 127, 1],
            steelblue: [70, 130, 180, 1],
            tan: [210, 180, 140, 1],
            teal: [0, 128, 128, 1],
            thistle: [216, 191, 216, 1],
            tomato: [255, 99, 71, 1],
            turquoise: [64, 224, 208, 1],
            violet: [238, 130, 238, 1],
            wheat: [245, 222, 179, 1],
            white: [255, 255, 255, 1],
            whitesmoke: [245, 245, 245, 1],
            yellow: [255, 255, 0, 1],
            yellowgreen: [154, 205, 50, 1]
        }, Tv = new bv(20), Mv = null, Cv = hn, Iv = cn, Dv = (Object.freeze || Object)({
            parse: on,
            lift: ln,
            toHex: un,
            fastLerp: hn,
            fastMapToColor: Cv,
            lerp: cn,
            mapToColor: Iv,
            modifyHSL: pn,
            modifyAlpha: fn,
            stringify: dn,
            lum: gn,
            random: yn
        }), Av = Array.prototype.slice, kv = [0, 0, 0, 0], Lv = function () {
            function t(t) {
                this.keyframes = [], this.maxTime = 0, this.arrDim = 0, this.interpolable = !0, this._needsSort = !1, this._isAllValueEqual = !0, this._lastFrame = 0, this._lastFramePercent = 0, this.propName = t
            }

            return t.prototype.isFinished = function () {
                return this._finished
            }, t.prototype.setFinished = function () {
                this._finished = !0, this._additiveTrack && this._additiveTrack.setFinished()
            }, t.prototype.needsAnimate = function () {
                return !this._isAllValueEqual && this.keyframes.length >= 2 && this.interpolable
            }, t.prototype.getAdditiveTrack = function () {
                return this._additiveTrack
            }, t.prototype.addKeyframe = function (t, e) {
                t >= this.maxTime ? this.maxTime = t : this._needsSort = !0;
                var n = this.keyframes, i = n.length;
                if (this.interpolable) if (g(e)) {
                    var r = kn(e);
                    if (i > 0 && this.arrDim !== r) return void (this.interpolable = !1);
                    if (1 === r && "number" != typeof e[0] || 2 === r && "number" != typeof e[0][0]) return void (this.interpolable = !1);
                    if (i > 0) {
                        var o = n[i - 1];
                        this._isAllValueEqual && (1 === r ? Tn(e, o.value) || (this._isAllValueEqual = !1) : this._isAllValueEqual = !1)
                    }
                    this.arrDim = r
                } else {
                    if (this.arrDim > 0) return void (this.interpolable = !1);
                    if ("string" == typeof e) {
                        var a = on(e);
                        a ? (e = a, this.isValueColor = !0) : this.interpolable = !1
                    } else if ("number" != typeof e) return void (this.interpolable = !1);
                    if (this._isAllValueEqual && i > 0) {
                        var o = n[i - 1];
                        this.isValueColor && !Tn(o.value, e) ? this._isAllValueEqual = !1 : o.value !== e && (this._isAllValueEqual = !1)
                    }
                }
                var s = {time: t, value: e, percent: 0};
                return this.keyframes.push(s), s
            }, t.prototype.prepare = function (t) {
                var e = this.keyframes;
                this._needsSort && e.sort(function (t, e) {
                    return t.time - e.time
                });
                for (var n = this.arrDim, i = e.length, r = e[i - 1], o = 0; i > o; o++) e[o].percent = e[o].time / this.maxTime, n > 0 && o !== i - 1 && Sn(e[o].value, r.value, n);
                if (t && this.needsAnimate() && t.needsAnimate() && n === t.arrDim && this.isValueColor === t.isValueColor && !t._finished) {
                    this._additiveTrack = t;
                    for (var a = e[0].value, o = 0; i > o; o++) 0 === n ? e[o].additiveValue = this.isValueColor ? wn([], e[o].value, a, -1) : e[o].value - a : 1 === n ? e[o].additiveValue = wn([], e[o].value, a, -1) : 2 === n && (e[o].additiveValue = bn([], e[o].value, a, -1))
                }
            }, t.prototype.step = function (t, e) {
                if (!this._finished) {
                    this._additiveTrack && this._additiveTrack._finished && (this._additiveTrack = null);
                    var n, i = null != this._additiveTrack, r = i ? "additiveValue" : "value", o = this.keyframes,
                        a = this.keyframes.length, s = this.propName, l = this.arrDim, u = this.isValueColor;
                    if (0 > e) n = 0; else if (e < this._lastFramePercent) {
                        var h = Math.min(this._lastFrame + 1, a - 1);
                        for (n = h; n >= 0 && !(o[n].percent <= e); n--) ;
                        n = Math.min(n, a - 2)
                    } else {
                        for (n = this._lastFrame; a > n && !(o[n].percent > e); n++) ;
                        n = Math.min(n - 1, a - 2)
                    }
                    var c = o[n + 1], p = o[n];
                    if (p && c) {
                        this._lastFrame = n, this._lastFramePercent = e;
                        var f = c.percent - p.percent;
                        if (0 !== f) {
                            var d = (e - p.percent) / f, g = i ? this._additiveValue : u ? kv : t[s];
                            if ((l > 0 || u) && !g && (g = this._additiveValue = []), this.useSpline) {
                                var y = o[n][r], v = o[0 === n ? n : n - 1][r], m = o[n > a - 2 ? a - 1 : n + 1][r],
                                    _ = o[n > a - 3 ? a - 1 : n + 2][r];
                                if (l > 0) 1 === l ? Cn(g, v, y, m, _, d, d * d, d * d * d) : In(g, v, y, m, _, d, d * d, d * d * d); else if (u) Cn(g, v, y, m, _, d, d * d, d * d * d), i || (t[s] = An(g)); else {
                                    var x = void 0;
                                    x = this.interpolable ? Mn(v, y, m, _, d, d * d, d * d * d) : m, i ? this._additiveValue = x : t[s] = x
                                }
                            } else if (l > 0) 1 === l ? _n(g, p[r], c[r], d) : xn(g, p[r], c[r], d); else if (u) _n(g, p[r], c[r], d), i || (t[s] = An(g)); else {
                                var x = void 0;
                                x = this.interpolable ? vn(p[r], c[r], d) : mn(p[r], c[r], d), i ? this._additiveValue = x : t[s] = x
                            }
                            i && this._addToTarget(t)
                        }
                    }
                }
            }, t.prototype._addToTarget = function (t) {
                var e = this.arrDim, n = this.propName, i = this._additiveValue;
                0 === e ? this.isValueColor ? (on(t[n], kv), wn(kv, kv, i, 1), t[n] = An(kv)) : t[n] = t[n] + i : 1 === e ? wn(t[n], t[n], i, 1) : 2 === e && bn(t[n], t[n], i, 1)
            }, t
        }(), Pv = function () {
            function t(t, e, n) {
                return this._tracks = {}, this._trackKeys = [], this._delay = 0, this._maxTime = 0, this._paused = !1, this._started = 0, this._clip = null, this._target = t, this._loop = e, e && n ? void a("Can' use additive animation on looped animation.") : void (this._additiveAnimators = n)
            }

            return t.prototype.getTarget = function () {
                return this._target
            }, t.prototype.changeTarget = function (t) {
                this._target = t
            }, t.prototype.when = function (t, e) {
                return this.whenWithKeys(t, e, w(e))
            }, t.prototype.whenWithKeys = function (t, e, n) {
                for (var i = this._tracks, r = 0; r < n.length; r++) {
                    var o = n[r], a = i[o];
                    if (!a) {
                        a = i[o] = new Lv(o);
                        var s = void 0, l = this._getAdditiveTrack(o);
                        if (l) {
                            var u = l.keyframes[l.keyframes.length - 1];
                            s = u && u.value, l.isValueColor && s && (s = An(s))
                        } else s = this._target[o];
                        if (null == s) continue;
                        0 !== t && a.addKeyframe(0, Dn(s)), this._trackKeys.push(o)
                    }
                    a.addKeyframe(t, Dn(e[o]))
                }
                return this._maxTime = Math.max(this._maxTime, t), this
            }, t.prototype.pause = function () {
                this._clip.pause(), this._paused = !0
            }, t.prototype.resume = function () {
                this._clip.resume(), this._paused = !1
            }, t.prototype.isPaused = function () {
                return !!this._paused
            }, t.prototype._doneCallback = function () {
                this._setTracksFinished(), this._clip = null;
                var t = this._doneList;
                if (t) for (var e = t.length, n = 0; e > n; n++) t[n].call(this)
            }, t.prototype._abortedCallback = function () {
                this._setTracksFinished();
                var t = this.animation, e = this._abortedList;
                if (t && t.removeClip(this._clip), this._clip = null, e) for (var n = 0; n < e.length; n++) e[n].call(this)
            }, t.prototype._setTracksFinished = function () {
                for (var t = this._tracks, e = this._trackKeys, n = 0; n < e.length; n++) t[e[n]].setFinished()
            }, t.prototype._getAdditiveTrack = function (t) {
                var e, n = this._additiveAnimators;
                if (n) for (var i = 0; i < n.length; i++) {
                    var r = n[i].getTrack(t);
                    r && (e = r)
                }
                return e
            }, t.prototype.start = function (t, e) {
                if (!(this._started > 0)) {
                    this._started = 1;
                    for (var n = this, i = [], r = 0; r < this._trackKeys.length; r++) {
                        var o = this._trackKeys[r], a = this._tracks[o], s = this._getAdditiveTrack(o), l = a.keyframes;
                        if (a.prepare(s), a.needsAnimate()) i.push(a); else if (!a.interpolable) {
                            var u = l[l.length - 1];
                            u && (n._target[a.propName] = u.value)
                        }
                    }
                    if (i.length || e) {
                        var h = new _v({
                            life: this._maxTime, loop: this._loop, delay: this._delay, onframe: function (t) {
                                n._started = 2;
                                var e = n._additiveAnimators;
                                if (e) {
                                    for (var r = !1, o = 0; o < e.length; o++) if (e[o]._clip) {
                                        r = !0;
                                        break
                                    }
                                    r || (n._additiveAnimators = null)
                                }
                                for (var o = 0; o < i.length; o++) i[o].step(n._target, t);
                                var a = n._onframeList;
                                if (a) for (var o = 0; o < a.length; o++) a[o](n._target, t)
                            }, ondestroy: function () {
                                n._doneCallback()
                            }
                        });
                        this._clip = h, this.animation && this.animation.addClip(h), t && "spline" !== t && (h.easing = t)
                    } else this._doneCallback();
                    return this
                }
            }, t.prototype.stop = function (t) {
                if (this._clip) {
                    var e = this._clip;
                    t && e.onframe(1), this._abortedCallback()
                }
            }, t.prototype.delay = function (t) {
                return this._delay = t, this
            }, t.prototype.during = function (t) {
                return t && (this._onframeList || (this._onframeList = []), this._onframeList.push(t)), this
            }, t.prototype.done = function (t) {
                return t && (this._doneList || (this._doneList = []), this._doneList.push(t)), this
            }, t.prototype.aborted = function (t) {
                return t && (this._abortedList || (this._abortedList = []), this._abortedList.push(t)), this
            }, t.prototype.getClip = function () {
                return this._clip
            }, t.prototype.getTrack = function (t) {
                return this._tracks[t]
            }, t.prototype.stopTracks = function (t, e) {
                if (!t.length || !this._clip) return !0;
                for (var n = this._tracks, i = this._trackKeys, r = 0; r < t.length; r++) {
                    var o = n[t[r]];
                    o && (e ? o.step(this._target, 1) : 1 === this._started && o.step(this._target, 0), o.setFinished())
                }
                for (var a = !0, r = 0; r < i.length; r++) if (!n[i[r]].isFinished()) {
                    a = !1;
                    break
                }
                return a && this._abortedCallback(), a
            }, t.prototype.saveFinalToTarget = function (t, e) {
                if (t) {
                    e = e || this._trackKeys;
                    for (var n = 0; n < e.length; n++) {
                        var i = e[n], r = this._tracks[i];
                        if (r && !r.isFinished()) {
                            var o = r.keyframes, a = o[o.length - 1];
                            if (a) {
                                var s = Dn(a.value);
                                r.isValueColor && (s = An(s)), t[i] = s
                            }
                        }
                    }
                }
            }, t.prototype.__changeFinalValue = function (t, e) {
                e = e || w(t);
                for (var n = 0; n < e.length; n++) {
                    var i = e[n], r = this._tracks[i];
                    if (r) {
                        var o = r.keyframes;
                        if (o.length > 1) {
                            var a = o.pop();
                            r.addKeyframe(a.time, t[i]), r.prepare(r.getAdditiveTrack())
                        }
                    }
                }
            }, t
        }(), Ov = function () {
            function t(t, e) {
                this.x = t || 0, this.y = e || 0
            }

            return t.prototype.copy = function (t) {
                return this.x = t.x, this.y = t.y, this
            }, t.prototype.clone = function () {
                return new t(this.x, this.y)
            }, t.prototype.set = function (t, e) {
                return this.x = t, this.y = e, this
            }, t.prototype.equal = function (t) {
                return t.x === this.x && t.y === this.y
            }, t.prototype.add = function (t) {
                return this.x += t.x, this.y += t.y, this
            }, t.prototype.scale = function (t) {
                this.x *= t, this.y *= t
            }, t.prototype.scaleAndAdd = function (t, e) {
                this.x += t.x * e, this.y += t.y * e
            }, t.prototype.sub = function (t) {
                return this.x -= t.x, this.y -= t.y, this
            }, t.prototype.dot = function (t) {
                return this.x * t.x + this.y * t.y
            }, t.prototype.len = function () {
                return Math.sqrt(this.x * this.x + this.y * this.y)
            }, t.prototype.lenSquare = function () {
                return this.x * this.x + this.y * this.y
            }, t.prototype.normalize = function () {
                var t = this.len();
                return this.x /= t, this.y /= t, this
            }, t.prototype.distance = function (t) {
                var e = this.x - t.x, n = this.y - t.y;
                return Math.sqrt(e * e + n * n)
            }, t.prototype.distanceSquare = function (t) {
                var e = this.x - t.x, n = this.y - t.y;
                return e * e + n * n
            }, t.prototype.negate = function () {
                return this.x = -this.x, this.y = -this.y, this
            }, t.prototype.transform = function (t) {
                if (t) {
                    var e = this.x, n = this.y;
                    return this.x = t[0] * e + t[2] * n + t[4], this.y = t[1] * e + t[3] * n + t[5], this
                }
            }, t.prototype.toArray = function (t) {
                return t[0] = this.x, t[1] = this.y, t
            }, t.prototype.fromArray = function (t) {
                this.x = t[0], this.y = t[1]
            }, t.set = function (t, e, n) {
                t.x = e, t.y = n
            }, t.copy = function (t, e) {
                t.x = e.x, t.y = e.y
            }, t.len = function (t) {
                return Math.sqrt(t.x * t.x + t.y * t.y)
            }, t.lenSquare = function (t) {
                return t.x * t.x + t.y * t.y
            }, t.dot = function (t, e) {
                return t.x * e.x + t.y * e.y
            }, t.add = function (t, e, n) {
                t.x = e.x + n.x, t.y = e.y + n.y
            }, t.sub = function (t, e, n) {
                t.x = e.x - n.x, t.y = e.y - n.y
            }, t.scale = function (t, e, n) {
                t.x = e.x * n, t.y = e.y * n
            }, t.scaleAndAdd = function (t, e, n, i) {
                t.x = e.x + n.x * i, t.y = e.y + n.y * i
            }, t.lerp = function (t, e, n, i) {
                var r = 1 - i;
                t.x = r * e.x + i * n.x, t.y = r * e.y + i * n.y
            }, t
        }(), Rv = Math.min, Bv = Math.max, Ev = new Ov, zv = new Ov, Nv = new Ov, Fv = new Ov, Vv = new Ov, Hv = new Ov,
        Wv = function () {
            function t(t, e, n, i) {
                0 > n && isFinite(n) && (t += n, n = -n), 0 > i && isFinite(i) && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i
            }

            return t.prototype.union = function (t) {
                var e = Rv(t.x, this.x), n = Rv(t.y, this.y);
                this.width = isFinite(this.x) && isFinite(this.width) ? Bv(t.x + t.width, this.x + this.width) - e : t.width, this.height = isFinite(this.y) && isFinite(this.height) ? Bv(t.y + t.height, this.y + this.height) - n : t.height, this.x = e, this.y = n
            }, t.prototype.applyTransform = function (e) {
                t.applyTransform(this, this, e)
            }, t.prototype.calculateTransform = function (t) {
                var e = this, n = t.width / e.width, i = t.height / e.height, r = Ne();
                return We(r, r, [-e.x, -e.y]), Ue(r, r, [n, i]), We(r, r, [t.x, t.y]), r
            }, t.prototype.intersect = function (e, n) {
                if (!e) return !1;
                e instanceof t || (e = t.create(e));
                var i = this, r = i.x, o = i.x + i.width, a = i.y, s = i.y + i.height, l = e.x, u = e.x + e.width,
                    h = e.y, c = e.y + e.height, p = !(l > o || r > u || h > s || a > c);
                if (n) {
                    var f = 1 / 0, d = 0, g = Math.abs(o - l), y = Math.abs(u - r), v = Math.abs(s - h),
                        m = Math.abs(c - a), _ = Math.min(g, y), x = Math.min(v, m);
                    l > o || r > u ? _ > d && (d = _, y > g ? Ov.set(Hv, -g, 0) : Ov.set(Hv, y, 0)) : f > _ && (f = _, y > g ? Ov.set(Vv, g, 0) : Ov.set(Vv, -y, 0)), h > s || a > c ? x > d && (d = x, m > v ? Ov.set(Hv, 0, -v) : Ov.set(Hv, 0, m)) : f > _ && (f = _, m > v ? Ov.set(Vv, 0, v) : Ov.set(Vv, 0, -m))
                }
                return n && Ov.copy(n, p ? Vv : Hv), p
            }, t.prototype.contain = function (t, e) {
                var n = this;
                return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
            }, t.prototype.clone = function () {
                return new t(this.x, this.y, this.width, this.height)
            }, t.prototype.copy = function (e) {
                t.copy(this, e)
            }, t.prototype.plain = function () {
                return {x: this.x, y: this.y, width: this.width, height: this.height}
            }, t.prototype.isFinite = function () {
                return isFinite(this.x) && isFinite(this.y) && isFinite(this.width) && isFinite(this.height)
            }, t.prototype.isZero = function () {
                return 0 === this.width || 0 === this.height
            }, t.create = function (e) {
                return new t(e.x, e.y, e.width, e.height)
            }, t.copy = function (t, e) {
                t.x = e.x, t.y = e.y, t.width = e.width, t.height = e.height
            }, t.applyTransform = function (e, n, i) {
                if (!i) return void (e !== n && t.copy(e, n));
                if (i[1] < 1e-5 && i[1] > -1e-5 && i[2] < 1e-5 && i[2] > -1e-5) {
                    var r = i[0], o = i[3], a = i[4], s = i[5];
                    return e.x = n.x * r + a, e.y = n.y * o + s, e.width = n.width * r, e.height = n.height * o, e.width < 0 && (e.x += e.width, e.width = -e.width), void (e.height < 0 && (e.y += e.height, e.height = -e.height))
                }
                Ev.x = Nv.x = n.x, Ev.y = Fv.y = n.y, zv.x = Fv.x = n.x + n.width, zv.y = Nv.y = n.y + n.height, Ev.transform(i), Fv.transform(i), zv.transform(i), Nv.transform(i), e.x = Rv(Ev.x, zv.x, Nv.x, Fv.x), e.y = Rv(Ev.y, zv.y, Nv.y, Fv.y);
                var l = Bv(Ev.x, zv.x, Nv.x, Fv.x), u = Bv(Ev.y, zv.y, Nv.y, Fv.y);
                e.width = l - e.x, e.height = u - e.y
            }, t
        }(), Gv = {}, Uv = "12px sans-serif", Yv = {measureText: Ln}, Xv = 1;
    "undefined" != typeof window && (Xv = Math.max(window.devicePixelRatio || window.screen && window.screen.deviceXDPI / window.screen.logicalXDPI || 1, 1));
    var jv = Xv, qv = .4, Zv = "#333", Kv = "#ccc", $v = "#eee", Qv = "__zr_normal__",
        Jv = ["x", "y", "scaleX", "scaleY", "originX", "originY", "rotation", "ignore"],
        tm = {x: !0, y: !0, scaleX: !0, scaleY: !0, originX: !0, originY: !0, rotation: !0, ignore: !1}, em = {},
        nm = new Wv(0, 0, 0, 0), im = function () {
            function t(t) {
                this.id = o(), this.animators = [], this.currentStates = [], this.states = {}, this._init(t)
            }

            return t.prototype._init = function (t) {
                this.attr(t)
            }, t.prototype.drift = function (t, e) {
                switch (this.draggable) {
                    case "horizontal":
                        e = 0;
                        break;
                    case "vertical":
                        t = 0
                }
                var n = this.transform;
                n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.markRedraw()
            }, t.prototype.beforeUpdate = function () {
            }, t.prototype.afterUpdate = function () {
            }, t.prototype.update = function () {
                this.updateTransform(), this.__dirty && this.updateInnerText()
            }, t.prototype.updateInnerText = function (t) {
                var e = this._textContent;
                if (e && (!e.ignore || t)) {
                    this.textConfig || (this.textConfig = {});
                    var n = this.textConfig, i = n.local, r = e.attachedTransform, o = void 0, a = void 0, s = !1;
                    r.parent = i ? this : null;
                    var l = !1;
                    if (r.x = e.x, r.y = e.y, r.originX = e.originX, r.originY = e.originY, r.rotation = e.rotation, r.scaleX = e.scaleX, r.scaleY = e.scaleY, null != n.position) {
                        var u = nm;
                        u.copy(n.layoutRect ? n.layoutRect : this.getBoundingRect()), i || u.applyTransform(this.transform), this.calculateTextPosition ? this.calculateTextPosition(em, n, u) : Fn(em, n, u), r.x = em.x, r.y = em.y, o = em.align, a = em.verticalAlign;
                        var h = n.origin;
                        if (h && null != n.rotation) {
                            var c = void 0, p = void 0;
                            "center" === h ? (c = .5 * u.width, p = .5 * u.height) : (c = Nn(h[0], u.width), p = Nn(h[1], u.height)), l = !0, r.originX = -r.x + c + (i ? 0 : u.x), r.originY = -r.y + p + (i ? 0 : u.y)
                        }
                    }
                    null != n.rotation && (r.rotation = n.rotation);
                    var f = n.offset;
                    f && (r.x += f[0], r.y += f[1], l || (r.originX = -f[0], r.originY = -f[1]));
                    var d = null == n.inside ? "string" == typeof n.position && n.position.indexOf("inside") >= 0 : n.inside,
                        g = this._innerTextDefaultStyle || (this._innerTextDefaultStyle = {}), y = void 0, v = void 0,
                        m = void 0;
                    d && this.canBeInsideText() ? (y = n.insideFill, v = n.insideStroke, (null == y || "auto" === y) && (y = this.getInsideTextFill()), (null == v || "auto" === v) && (v = this.getInsideTextStroke(y), m = !0)) : (y = n.outsideFill, v = n.outsideStroke, (null == y || "auto" === y) && (y = this.getOutsideFill()), (null == v || "auto" === v) && (v = this.getOutsideStroke(y), m = !0)), y = y || "#000", (y !== g.fill || v !== g.stroke || m !== g.autoStroke || o !== g.align || a !== g.verticalAlign) && (s = !0, g.fill = y, g.stroke = v, g.autoStroke = m, g.align = o, g.verticalAlign = a, e.setDefaultTextStyle(g)), s && e.dirtyStyle(), e.markRedraw()
                }
            }, t.prototype.canBeInsideText = function () {
                return !0
            }, t.prototype.getInsideTextFill = function () {
                return "#fff"
            }, t.prototype.getInsideTextStroke = function () {
                return "#000"
            }, t.prototype.getOutsideFill = function () {
                return this.__zr && this.__zr.isDarkMode() ? Kv : Zv
            }, t.prototype.getOutsideStroke = function () {
                var t = this.__zr && this.__zr.getBackgroundColor(), e = "string" == typeof t && on(t);
                e || (e = [255, 255, 255, 1]);
                for (var n = e[3], i = this.__zr.isDarkMode(), r = 0; 3 > r; r++) e[r] = e[r] * n + (i ? 0 : 255) * (1 - n);
                return e[3] = 1, dn(e, "rgba")
            }, t.prototype.traverse = function () {
            }, t.prototype.attrKV = function (t, e) {
                "textConfig" === t ? this.setTextConfig(e) : "textContent" === t ? this.setTextContent(e) : "clipPath" === t ? this.setClipPath(e) : "extra" === t ? (this.extra = this.extra || {}, h(this.extra, e)) : this[t] = e
            }, t.prototype.hide = function () {
                this.ignore = !0, this.markRedraw()
            }, t.prototype.show = function () {
                this.ignore = !1, this.markRedraw()
            }, t.prototype.attr = function (t, e) {
                if ("string" == typeof t) this.attrKV(t, e); else if (A(t)) for (var n = t, i = w(n), r = 0; r < i.length; r++) {
                    var o = i[r];
                    this.attrKV(o, t[o])
                }
                return this.markRedraw(), this
            }, t.prototype.saveCurrentToNormalState = function (t) {
                this._innerSaveToNormal(t);
                for (var e = this._normalState, n = 0; n < this.animators.length; n++) {
                    var i = this.animators[n], r = i.__fromStateTransition;
                    if (!r || r === Qv) {
                        var o = i.targetName, a = o ? e[o] : e;
                        i.saveFinalToTarget(a)
                    }
                }
            }, t.prototype._innerSaveToNormal = function (t) {
                var e = this._normalState;
                e || (e = this._normalState = {}), t.textConfig && !e.textConfig && (e.textConfig = this.textConfig), this._savePrimaryToNormal(t, e, Jv)
            }, t.prototype._savePrimaryToNormal = function (t, e, n) {
                for (var i = 0; i < n.length; i++) {
                    var r = n[i];
                    null == t[r] || r in e || (e[r] = this[r])
                }
            }, t.prototype.hasState = function () {
                return this.currentStates.length > 0
            }, t.prototype.getState = function (t) {
                return this.states[t]
            }, t.prototype.ensureState = function (t) {
                var e = this.states;
                return e[t] || (e[t] = {}), e[t]
            }, t.prototype.clearStates = function (t) {
                this.useState(Qv, !1, t)
            }, t.prototype.useState = function (e, n, i) {
                var r = e === Qv, o = this.hasState();
                if (o || !r) {
                    var s = this.currentStates, l = this.stateTransition;
                    if (!(p(s, e) >= 0) || !n && 1 !== s.length) {
                        var u;
                        if (this.stateProxy && !r && (u = this.stateProxy(e)), u || (u = this.states && this.states[e]), !u && !r) return void a("State " + e + " not exists.");
                        r || this.saveCurrentToNormalState(u);
                        var h = !(!u || !u.hoverLayer);
                        return h && this._toggleHoverLayerFlag(!0), this._applyStateObj(e, u, this._normalState, n, !i && !this.__inHover && l && l.duration > 0, l), this._textContent && this._textContent.useState(e, n), this._textGuide && this._textGuide.useState(e, n), r ? (this.currentStates = [], this._normalState = {}) : n ? this.currentStates.push(e) : this.currentStates = [e], this._updateAnimationTargets(), this.markRedraw(), !h && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~t.REDARAW_BIT), u
                    }
                }
            }, t.prototype.useStates = function (e, n) {
                if (e.length) {
                    var i = [], r = this.currentStates, o = e.length, a = o === r.length;
                    if (a) for (var s = 0; o > s; s++) if (e[s] !== r[s]) {
                        a = !1;
                        break
                    }
                    if (a) return;
                    for (var s = 0; o > s; s++) {
                        var l = e[s], u = void 0;
                        this.stateProxy && (u = this.stateProxy(l, e)), u || (u = this.states[l]), u && i.push(u)
                    }
                    var h = !(!i[o - 1] || !i[o - 1].hoverLayer);
                    h && this._toggleHoverLayerFlag(!0);
                    var c = this._mergeStates(i), p = this.stateTransition;
                    this.saveCurrentToNormalState(c), this._applyStateObj(e.join(","), c, this._normalState, !1, !n && !this.__inHover && p && p.duration > 0, p), this._textContent && this._textContent.useStates(e), this._textGuide && this._textGuide.useStates(e), this._updateAnimationTargets(), this.currentStates = e.slice(), this.markRedraw(), !h && this.__inHover && (this._toggleHoverLayerFlag(!1), this.__dirty &= ~t.REDARAW_BIT)
                } else this.clearStates()
            }, t.prototype._updateAnimationTargets = function () {
                for (var t = 0; t < this.animators.length; t++) {
                    var e = this.animators[t];
                    e.targetName && e.changeTarget(this[e.targetName])
                }
            }, t.prototype.removeState = function (t) {
                var e = p(this.currentStates, t);
                if (e >= 0) {
                    var n = this.currentStates.slice();
                    n.splice(e, 1), this.useStates(n)
                }
            }, t.prototype.replaceState = function (t, e, n) {
                var i = this.currentStates.slice(), r = p(i, t), o = p(i, e) >= 0;
                r >= 0 ? o ? i.splice(r, 1) : i[r] = e : n && !o && i.push(e), this.useStates(i)
            }, t.prototype.toggleState = function (t, e) {
                e ? this.useState(t, !0) : this.removeState(t)
            }, t.prototype._mergeStates = function (t) {
                for (var e, n = {}, i = 0; i < t.length; i++) {
                    var r = t[i];
                    h(n, r), r.textConfig && (e = e || {}, h(e, r.textConfig))
                }
                return e && (n.textConfig = e), n
            }, t.prototype._applyStateObj = function (t, e, n, i, r, o) {
                var a = !(e && i);
                e && e.textConfig ? (this.textConfig = h({}, i ? this.textConfig : n.textConfig), h(this.textConfig, e.textConfig)) : a && n.textConfig && (this.textConfig = n.textConfig);
                for (var s = {}, l = !1, u = 0; u < Jv.length; u++) {
                    var c = Jv[u], p = r && tm[c];
                    e && null != e[c] ? p ? (l = !0, s[c] = e[c]) : this[c] = e[c] : a && null != n[c] && (p ? (l = !0, s[c] = n[c]) : this[c] = n[c])
                }
                if (!r) for (var u = 0; u < this.animators.length; u++) {
                    var f = this.animators[u], d = f.targetName;
                    f.__changeFinalValue(d ? (e || n)[d] : e || n)
                }
                l && this._transitionState(t, s, o)
            }, t.prototype._attachComponent = function (t) {
                if (t.__zr && !t.__hostTarget) throw new Error("Text element has been added to zrender.");
                if (t === this) throw new Error("Recursive component attachment.");
                var e = this.__zr;
                e && t.addSelfToZr(e), t.__zr = e, t.__hostTarget = this
            }, t.prototype._detachComponent = function (t) {
                t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__hostTarget = null
            }, t.prototype.getClipPath = function () {
                return this._clipPath
            }, t.prototype.setClipPath = function (t) {
                this._clipPath && this._clipPath !== t && this.removeClipPath(), this._attachComponent(t), this._clipPath = t, this.markRedraw()
            }, t.prototype.removeClipPath = function () {
                var t = this._clipPath;
                t && (this._detachComponent(t), this._clipPath = null, this.markRedraw())
            }, t.prototype.getTextContent = function () {
                return this._textContent
            }, t.prototype.setTextContent = function (t) {
                var e = this._textContent;
                if (e !== t) {
                    if (e && e !== t && this.removeTextContent(), t.__zr && !t.__hostTarget) throw new Error("Text element has been added to zrender.");
                    t.attachedTransform = new vv, this._attachComponent(t), this._textContent = t, this.markRedraw()
                }
            }, t.prototype.setTextConfig = function (t) {
                this.textConfig || (this.textConfig = {}), h(this.textConfig, t), this.markRedraw()
            }, t.prototype.removeTextContent = function () {
                var t = this._textContent;
                t && (t.attachedTransform = null, this._detachComponent(t), this._textContent = null, this._innerTextDefaultStyle = null, this.markRedraw())
            }, t.prototype.getTextGuideLine = function () {
                return this._textGuide
            }, t.prototype.setTextGuideLine = function (t) {
                this._textGuide && this._textGuide !== t && this.removeTextGuideLine(), this._attachComponent(t), this._textGuide = t, this.markRedraw()
            }, t.prototype.removeTextGuideLine = function () {
                var t = this._textGuide;
                t && (this._detachComponent(t), this._textGuide = null, this.markRedraw())
            }, t.prototype.markRedraw = function () {
                this.__dirty |= t.REDARAW_BIT;
                var e = this.__zr;
                e && (this.__inHover ? e.refreshHover() : e.refresh()), this.__hostTarget && this.__hostTarget.markRedraw()
            }, t.prototype.dirty = function () {
                this.markRedraw()
            }, t.prototype._toggleHoverLayerFlag = function (t) {
                this.__inHover = t;
                var e = this._textContent, n = this._textGuide;
                e && (e.__inHover = t), n && (n.__inHover = t)
            }, t.prototype.addSelfToZr = function (t) {
                this.__zr = t;
                var e = this.animators;
                if (e) for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
                this._clipPath && this._clipPath.addSelfToZr(t), this._textContent && this._textContent.addSelfToZr(t), this._textGuide && this._textGuide.addSelfToZr(t)
            }, t.prototype.removeSelfFromZr = function (t) {
                this.__zr = null;
                var e = this.animators;
                if (e) for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
                this._clipPath && this._clipPath.removeSelfFromZr(t), this._textContent && this._textContent.removeSelfFromZr(t), this._textGuide && this._textGuide.removeSelfFromZr(t)
            }, t.prototype.animate = function (t, e) {
                var n = t ? this[t] : this;
                if (!n) return void a('Property "' + t + '" is not existed in element ' + this.id);
                var i = new Pv(n, e);
                return this.addAnimator(i, t), i
            }, t.prototype.addAnimator = function (t, e) {
                var n = this.__zr, i = this;
                t.during(function () {
                    i.updateDuringAnimation(e)
                }).done(function () {
                    var e = i.animators, n = p(e, t);
                    n >= 0 && e.splice(n, 1)
                }), this.animators.push(t), n && n.animation.addAnimator(t), n && n.wakeUp()
            }, t.prototype.updateDuringAnimation = function () {
                this.markRedraw()
            }, t.prototype.stopAnimation = function (t, e) {
                for (var n = this.animators, i = n.length, r = [], o = 0; i > o; o++) {
                    var a = n[o];
                    t && t !== a.scope ? r.push(a) : a.stop(e)
                }
                return this.animators = r, this
            }, t.prototype.animateTo = function (t, e, n) {
                Vn(this, t, e, n)
            }, t.prototype.animateFrom = function (t, e, n) {
                Vn(this, t, e, n, !0)
            }, t.prototype._transitionState = function (t, e, n, i) {
                for (var r = Vn(this, e, n, i), o = 0; o < r.length; o++) r[o].__fromStateTransition = t
            }, t.prototype.getBoundingRect = function () {
                return null
            }, t.prototype.getPaintRect = function () {
                return null
            }, t.REDARAW_BIT = 1, t.initDefaultProps = function () {
                function e(t, e, n) {
                    r[t + e + n] || (console.warn("DEPRECATED: '" + t + "' has been deprecated. use '" + e + "', '" + n + "' instead"), r[t + e + n] = !0)
                }

                function n(t, n, r, o) {
                    function a(t, e) {
                        Object.defineProperty(e, 0, {
                            get: function () {
                                return t[r]
                            }, set: function (e) {
                                t[r] = e
                            }
                        }), Object.defineProperty(e, 1, {
                            get: function () {
                                return t[o]
                            }, set: function (e) {
                                t[o] = e
                            }
                        })
                    }

                    Object.defineProperty(i, t, {
                        get: function () {
                            if (e(t, r, o), !this[n]) {
                                var i = this[n] = [];
                                a(this, i)
                            }
                            return this[n]
                        }, set: function (i) {
                            e(t, r, o), this[r] = i[0], this[o] = i[1], this[n] = i, a(this, i)
                        }
                    })
                }

                var i = t.prototype;
                i.type = "element", i.name = "", i.ignore = !1, i.silent = !1, i.isGroup = !1, i.draggable = !1, i.dragging = !1, i.ignoreClip = !1, i.__inHover = !1, i.__dirty = t.REDARAW_BIT;
                var r = {};
                Object.defineProperty && (!by.browser.ie || by.browser.version > 8) && (n("position", "_legacyPos", "x", "y"), n("scale", "_legacyScale", "scaleX", "scaleY"), n("origin", "_legacyOrigin", "originX", "originY"))
            }(), t
        }();
    d(im, jy), d(im, vv);
    var rm, om = 32, am = 7, sm = !1, lm = function () {
        function t() {
            this._roots = [], this._displayList = [], this._displayListLen = 0, this.displayableSortFunc = ti
        }

        return t.prototype.traverse = function (t, e) {
            for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e)
        }, t.prototype.getDisplayList = function (t, e) {
            e = e || !1;
            var n = this._displayList;
            return (t || !n.length) && this.updateDisplayList(e), n
        }, t.prototype.updateDisplayList = function (t) {
            this._displayListLen = 0;
            for (var e = this._roots, n = this._displayList, i = 0, r = e.length; r > i; i++) this._updateAndAddDisplayable(e[i], null, t);
            n.length = this._displayListLen, by.canvasSupported && Qn(n, ti)
        }, t.prototype._updateAndAddDisplayable = function (t, e, n) {
            if (!t.ignore || n) {
                t.beforeUpdate(), t.update(), t.afterUpdate();
                var i = t.getClipPath();
                if (t.ignoreClip) e = null; else if (i) {
                    e = e ? e.slice() : [];
                    for (var r = i, o = t; r;) r.parent = o, r.updateTransform(), e.push(r), o = r, r = r.getClipPath()
                }
                if (t.childrenRef) {
                    for (var a = t.childrenRef(), s = 0; s < a.length; s++) {
                        var l = a[s];
                        t.__dirty && (l.__dirty |= im.REDARAW_BIT), this._updateAndAddDisplayable(l, e, n)
                    }
                    t.__dirty = 0
                } else {
                    var u = t;
                    e && e.length ? u.__clipPaths = e : u.__clipPaths && u.__clipPaths.length > 0 && (u.__clipPaths = []), isNaN(u.z) && (Jn(), u.z = 0), isNaN(u.z2) && (Jn(), u.z2 = 0), isNaN(u.zlevel) && (Jn(), u.zlevel = 0), this._displayList[this._displayListLen++] = u
                }
                var h = t.getDecalElement && t.getDecalElement();
                h && this._updateAndAddDisplayable(h, e, n);
                var c = t.getTextGuideLine();
                c && this._updateAndAddDisplayable(c, e, n);
                var p = t.getTextContent();
                p && this._updateAndAddDisplayable(p, e, n)
            }
        }, t.prototype.addRoot = function (t) {
            t.__zr && t.__zr.storage === this || this._roots.push(t)
        }, t.prototype.delRoot = function (t) {
            if (t instanceof Array) for (var e = 0, n = t.length; n > e; e++) this.delRoot(t[e]); else {
                var i = p(this._roots, t);
                i >= 0 && this._roots.splice(i, 1)
            }
        }, t.prototype.delAllRoots = function () {
            this._roots = [], this._displayList = [], this._displayListLen = 0
        }, t.prototype.getRoots = function () {
            return this._roots
        }, t.prototype.dispose = function () {
            this._displayList = null, this._roots = null
        }, t
    }();
    rm = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
        return setTimeout(t, 16)
    };
    var um = rm, hm = function (t) {
        function n(e) {
            var n = t.call(this) || this;
            return n._running = !1, n._time = 0, n._pausedTime = 0, n._pauseStart = 0, n._paused = !1, e = e || {}, n.stage = e.stage || {}, n.onframe = e.onframe || function () {
            }, n
        }

        return e(n, t), n.prototype.addClip = function (t) {
            t.animation && this.removeClip(t), this._clipsHead ? (this._clipsTail.next = t, t.prev = this._clipsTail, t.next = null, this._clipsTail = t) : this._clipsHead = this._clipsTail = t, t.animation = this
        }, n.prototype.addAnimator = function (t) {
            t.animation = this;
            var e = t.getClip();
            e && this.addClip(e)
        }, n.prototype.removeClip = function (t) {
            if (t.animation) {
                var e = t.prev, n = t.next;
                e ? e.next = n : this._clipsHead = n, n ? n.prev = e : this._clipsTail = e, t.next = t.prev = t.animation = null
            }
        }, n.prototype.removeAnimator = function (t) {
            var e = t.getClip();
            e && this.removeClip(e), t.animation = null
        }, n.prototype.update = function (t) {
            for (var e = (new Date).getTime() - this._pausedTime, n = e - this._time, i = this._clipsHead; i;) {
                var r = i.next, o = i.step(e, n);
                o ? (i.ondestroy && i.ondestroy(), this.removeClip(i), i = r) : i = r
            }
            this._time = e, t || (this.onframe(n), this.trigger("frame", n), this.stage.update && this.stage.update())
        }, n.prototype._startLoop = function () {
            function t() {
                e._running && (um(t), !e._paused && e.update())
            }

            var e = this;
            this._running = !0, um(t)
        }, n.prototype.start = function () {
            this._running || (this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop())
        }, n.prototype.stop = function () {
            this._running = !1
        }, n.prototype.pause = function () {
            this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
        }, n.prototype.resume = function () {
            this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
        }, n.prototype.clear = function () {
            for (var t = this._clipsHead; t;) {
                var e = t.next;
                t.prev = t.next = t.animation = null, t = e
            }
            this._clipsHead = this._clipsTail = null
        }, n.prototype.isFinished = function () {
            return null == this._clipsHead
        }, n.prototype.animate = function (t, e) {
            e = e || {}, this.start();
            var n = new Pv(t, e.loop);
            return this.addAnimator(n), n
        }, n
    }(jy), cm = 300, pm = by.domSupported, fm = function () {
        var t = ["click", "dblclick", "mousewheel", "wheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
            e = ["touchstart", "touchend", "touchmove"],
            n = {pointerdown: 1, pointerup: 1, pointermove: 1, pointerout: 1}, i = v(t, function (t) {
                var e = t.replace("mouse", "pointer");
                return n.hasOwnProperty(e) ? e : t
            });
        return {mouse: t, touch: e, pointer: i}
    }(), dm = {mouse: ["mousemove", "mouseup"], pointer: ["pointermove", "pointerup"]}, gm = !1, ym = function () {
        function t(t, e) {
            this.stopPropagation = K, this.stopImmediatePropagation = K, this.preventDefault = K, this.type = e.type, this.target = this.currentTarget = t.dom, this.pointerType = e.pointerType, this.clientX = e.clientX, this.clientY = e.clientY
        }

        return t
    }(), vm = {
        mousedown: function (t) {
            t = De(this.dom, t), this.__mayPointerCapture = [t.zrX, t.zrY], this.trigger("mousedown", t)
        }, mousemove: function (t) {
            t = De(this.dom, t);
            var e = this.__mayPointerCapture;
            !e || t.zrX === e[0] && t.zrY === e[1] || this.__togglePointerCapture(!0), this.trigger("mousemove", t)
        }, mouseup: function (t) {
            t = De(this.dom, t), this.__togglePointerCapture(!1), this.trigger("mouseup", t)
        }, mouseout: function (t) {
            t = De(this.dom, t);
            var e = t.toElement || t.relatedTarget;
            oi(this, e) || (this.__pointerCapturing && (t.zrEventControl = "no_globalout"), this.trigger("mouseout", t))
        }, wheel: function (t) {
            gm = !0, t = De(this.dom, t), this.trigger("mousewheel", t)
        }, mousewheel: function (t) {
            gm || (t = De(this.dom, t), this.trigger("mousewheel", t))
        }, touchstart: function (t) {
            t = De(this.dom, t), ii(t), this.__lastTouchMoment = new Date, this.handler.processGesture(t, "start"), vm.mousemove.call(this, t), vm.mousedown.call(this, t)
        }, touchmove: function (t) {
            t = De(this.dom, t), ii(t), this.handler.processGesture(t, "change"), vm.mousemove.call(this, t)
        }, touchend: function (t) {
            t = De(this.dom, t), ii(t), this.handler.processGesture(t, "end"), vm.mouseup.call(this, t), +new Date - +this.__lastTouchMoment < cm && vm.click.call(this, t)
        }, pointerdown: function (t) {
            vm.mousedown.call(this, t)
        }, pointermove: function (t) {
            ei(t) || vm.mousemove.call(this, t)
        }, pointerup: function (t) {
            vm.mouseup.call(this, t)
        }, pointerout: function (t) {
            ei(t) || vm.mouseout.call(this, t)
        }
    };
    y(["click", "dblclick", "contextmenu"], function (t) {
        vm[t] = function (e) {
            e = De(this.dom, e), this.trigger(t, e)
        }
    });
    var mm = {
        pointermove: function (t) {
            ei(t) || mm.mousemove.call(this, t)
        }, pointerup: function (t) {
            mm.mouseup.call(this, t)
        }, mousemove: function (t) {
            this.trigger("mousemove", t)
        }, mouseup: function (t) {
            var e = this.__pointerCapturing;
            this.__togglePointerCapture(!1), this.trigger("mouseup", t), e && (t.zrEventControl = "only_globalout", this.trigger("mouseout", t))
        }
    }, _m = function () {
        function t(t, e) {
            this.mounted = {}, this.listenerOpts = {}, this.touching = !1, this.domTarget = t, this.domHandlers = e
        }

        return t
    }(), xm = function (t) {
        function n(e, n) {
            var i = t.call(this) || this;
            return i.__pointerCapturing = !1, i.dom = e, i.painterRoot = n, i._localHandlerScope = new _m(e, vm), pm && (i._globalHandlerScope = new _m(document, mm)), ai(i, i._localHandlerScope), i
        }

        return e(n, t), n.prototype.dispose = function () {
            ui(this._localHandlerScope), pm && ui(this._globalHandlerScope)
        }, n.prototype.setCursor = function (t) {
            this.dom.style && (this.dom.style.cursor = t || "default")
        }, n.prototype.__togglePointerCapture = function (t) {
            if (this.__mayPointerCapture = null, pm && +this.__pointerCapturing ^ +t) {
                this.__pointerCapturing = t;
                var e = this._globalHandlerScope;
                t ? si(this, e) : ui(e)
            }
        }, n
    }(jy), wm = function (t) {
        function n(e) {
            var n = t.call(this) || this;
            return n.isGroup = !0, n._children = [], n.attr(e), n
        }

        return e(n, t), n.prototype.childrenRef = function () {
            return this._children
        }, n.prototype.children = function () {
            return this._children.slice()
        }, n.prototype.childAt = function (t) {
            return this._children[t]
        }, n.prototype.childOfName = function (t) {
            for (var e = this._children, n = 0; n < e.length; n++) if (e[n].name === t) return e[n]
        }, n.prototype.childCount = function () {
            return this._children.length
        }, n.prototype.add = function (t) {
            if (t && (t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), t.__hostTarget)) throw "This elemenet has been used as an attachment";
            return this
        }, n.prototype.addBefore = function (t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
                var n = this._children, i = n.indexOf(e);
                i >= 0 && (n.splice(i, 0, t), this._doAdd(t))
            }
            return this
        }, n.prototype.replaceAt = function (t, e) {
            var n = this._children, i = n[e];
            if (t && t !== this && t.parent !== this && t !== i) {
                n[e] = t, i.parent = null;
                var r = this.__zr;
                r && i.removeSelfFromZr(r), this._doAdd(t)
            }
            return this
        }, n.prototype._doAdd = function (t) {
            t.parent && t.parent.remove(t), t.parent = this;
            var e = this.__zr;
            e && e !== t.__zr && t.addSelfToZr(e), e && e.refresh()
        }, n.prototype.remove = function (t) {
            var e = this.__zr, n = this._children, i = p(n, t);
            return 0 > i ? this : (n.splice(i, 1), t.parent = null, e && t.removeSelfFromZr(e), e && e.refresh(), this)
        }, n.prototype.removeAll = function () {
            for (var t = this._children, e = this.__zr, n = 0; n < t.length; n++) {
                var i = t[n];
                e && i.removeSelfFromZr(e), i.parent = null
            }
            return t.length = 0, this
        }, n.prototype.eachChild = function (t, e) {
            for (var n = this._children, i = 0; i < n.length; i++) {
                var r = n[i];
                t.call(e, r, i)
            }
            return this
        }, n.prototype.traverse = function (t, e) {
            for (var n = 0; n < this._children.length; n++) {
                var i = this._children[n], r = t.call(e, i);
                i.isGroup && !r && i.traverse(t, e)
            }
            return this
        }, n.prototype.addSelfToZr = function (e) {
            t.prototype.addSelfToZr.call(this, e);
            for (var n = 0; n < this._children.length; n++) {
                var i = this._children[n];
                i.addSelfToZr(e)
            }
        }, n.prototype.removeSelfFromZr = function (e) {
            t.prototype.removeSelfFromZr.call(this, e);
            for (var n = 0; n < this._children.length; n++) {
                var i = this._children[n];
                i.removeSelfFromZr(e)
            }
        }, n.prototype.getBoundingRect = function (t) {
            for (var e = new Wv(0, 0, 0, 0), n = t || this._children, i = [], r = null, o = 0; o < n.length; o++) {
                var a = n[o];
                if (!a.ignore && !a.invisible) {
                    var s = a.getBoundingRect(), l = a.getLocalTransform(i);
                    l ? (Wv.applyTransform(e, s, l), r = r || e.clone(), r.union(e)) : (r = r || s.clone(), r.union(s))
                }
            }
            return r || e
        }, n
    }(im);
    wm.prototype.type = "group";
    var bm = !by.canvasSupported, Sm = {}, Tm = {}, Mm = function () {
            function t(t, e, n) {
                var i = this;
                this._sleepAfterStill = 10, this._stillFrameAccum = 0, this._needsRefresh = !0, this._needsRefreshHover = !0, this._darkMode = !1, n = n || {}, this.dom = e, this.id = t;
                var r = new lm, o = n.renderer || "canvas";
                if (bm) throw new Error("IE8 support has been dropped since 5.0");
                if (Sm[o] || (o = w(Sm)[0]), !Sm[o]) throw new Error("Renderer '" + o + "' is not imported. Please import it first.");
                n.useDirtyRect = null == n.useDirtyRect ? !1 : n.useDirtyRect;
                var a = new Sm[o](e, r, n, t);
                this.storage = r, this.painter = a;
                var s = by.node || by.worker ? null : new xm(a.getViewportRoot(), a.root);
                this.handler = new sv(r, a, s, a.root), this.animation = new hm({
                    stage: {
                        update: function () {
                            return i._flush(!0)
                        }
                    }
                }), this.animation.start()
            }

            return t.prototype.add = function (t) {
                t && (this.storage.addRoot(t), t.addSelfToZr(this), this.refresh())
            }, t.prototype.remove = function (t) {
                t && (this.storage.delRoot(t), t.removeSelfFromZr(this), this.refresh())
            }, t.prototype.configLayer = function (t, e) {
                this.painter.configLayer && this.painter.configLayer(t, e), this.refresh()
            }, t.prototype.setBackgroundColor = function (t) {
                this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this.refresh(), this._backgroundColor = t, this._darkMode = ci(t)
            }, t.prototype.getBackgroundColor = function () {
                return this._backgroundColor
            }, t.prototype.setDarkMode = function (t) {
                this._darkMode = t
            }, t.prototype.isDarkMode = function () {
                return this._darkMode
            }, t.prototype.refreshImmediately = function (t) {
                t || this.animation.update(!0), this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
            }, t.prototype.refresh = function () {
                this._needsRefresh = !0, this.animation.start()
            }, t.prototype.flush = function () {
                this._flush(!1)
            }, t.prototype._flush = function (t) {
                var e, n = (new Date).getTime();
                this._needsRefresh && (e = !0, this.refreshImmediately(t)), this._needsRefreshHover && (e = !0, this.refreshHoverImmediately());
                var i = (new Date).getTime();
                e ? (this._stillFrameAccum = 0, this.trigger("rendered", {elapsedTime: i - n})) : this._sleepAfterStill > 0 && (this._stillFrameAccum++, this._stillFrameAccum > this._sleepAfterStill && this.animation.stop())
            }, t.prototype.setSleepAfterStill = function (t) {
                this._sleepAfterStill = t
            }, t.prototype.wakeUp = function () {
                this.animation.start(), this._stillFrameAccum = 0
            }, t.prototype.addHover = function () {
            }, t.prototype.removeHover = function () {
            }, t.prototype.clearHover = function () {
            }, t.prototype.refreshHover = function () {
                this._needsRefreshHover = !0
            }, t.prototype.refreshHoverImmediately = function () {
                this._needsRefreshHover = !1, this.painter.refreshHover && "canvas" === this.painter.getType() && this.painter.refreshHover()
            }, t.prototype.resize = function (t) {
                t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
            }, t.prototype.clearAnimation = function () {
                this.animation.clear()
            }, t.prototype.getWidth = function () {
                return this.painter.getWidth()
            }, t.prototype.getHeight = function () {
                return this.painter.getHeight()
            }, t.prototype.pathToImage = function (t, e) {
                return this.painter.pathToImage ? this.painter.pathToImage(t, e) : void 0
            }, t.prototype.setCursorStyle = function (t) {
                this.handler.setCursorStyle(t)
            }, t.prototype.findHover = function (t, e) {
                return this.handler.findHover(t, e)
            }, t.prototype.on = function (t, e, n) {
                return this.handler.on(t, e, n), this
            }, t.prototype.off = function (t, e) {
                this.handler.off(t, e)
            }, t.prototype.trigger = function (t, e) {
                this.handler.trigger(t, e)
            }, t.prototype.clear = function () {
                for (var t = this.storage.getRoots(), e = 0; e < t.length; e++) t[e] instanceof wm && t[e].removeSelfFromZr(this);
                this.storage.delAllRoots(), this.painter.clear()
            }, t.prototype.dispose = function () {
                this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null, hi(this.id)
            }, t
        }(), Cm = "5.0.3", Im = (Object.freeze || Object)({
            init: pi,
            dispose: fi,
            disposeAll: di,
            getInstance: gi,
            registerPainter: yi,
            version: Cm
        }), Dm = 1e-4, Am = 9007199254740991,
        km = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d{1,2})(?::(\d{1,2})(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
        Lm = "series\x00", Pm = "\x00_ec_\x00",
        Om = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
        Rm = Ei(), Bm = {useDefault: !0, enableAll: !1, enableNone: !1}, Em = ".",
        zm = "___EC__COMPONENT__CONTAINER___", Nm = "___EC__EXTENDED_CLASS___", Fm = Math.round(10 * Math.random()),
        Vm = [["fill", "color"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["opacity"], ["shadowColor"]],
        Hm = br(Vm), Wm = function () {
            function t() {
            }

            return t.prototype.getAreaStyle = function (t, e) {
                return Hm(this, t, e)
            }, t
        }(), Gm = new bv(50), Um = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g, Ym = function () {
            function t() {
            }

            return t
        }(), Xm = function () {
            function t(t) {
                this.tokens = [], t && (this.tokens = t)
            }

            return t
        }(), jm = function () {
            function t() {
                this.width = 0, this.height = 0, this.contentWidth = 0, this.contentHeight = 0, this.outerWidth = 0, this.outerHeight = 0, this.lines = []
            }

            return t
        }(), qm = m(",&?/;] ".split(""), function (t, e) {
            return t[e] = !0, t
        }, {}), Zm = "__zr_style_" + Math.round(10 * Math.random()),
        Km = {shadowBlur: 0, shadowOffsetX: 0, shadowOffsetY: 0, shadowColor: "#000", opacity: 1, blend: "source-over"},
        $m = {style: {shadowBlur: !0, shadowOffsetX: !0, shadowOffsetY: !0, shadowColor: !0, opacity: !0}};
    Km[Zm] = !0;
    var Qm = ["z", "z2", "invisible"], Jm = function (t) {
            function n(e) {
                return t.call(this, e) || this
            }

            return e(n, t), n.prototype._init = function (e) {
                for (var n = w(e), i = 0; i < n.length; i++) {
                    var r = n[i];
                    "style" === r ? this.useStyle(e[r]) : t.prototype.attrKV.call(this, r, e[r])
                }
                this.style || this.useStyle({})
            }, n.prototype.beforeBrush = function () {
            }, n.prototype.afterBrush = function () {
            }, n.prototype.innerBeforeBrush = function () {
            }, n.prototype.innerAfterBrush = function () {
            }, n.prototype.shouldBePainted = function (t, e, n, i) {
                var r = this.transform;
                if (this.ignore || this.invisible || 0 === this.style.opacity || this.culling && Nr(this, t, e) || r && !r[0] && !r[3]) return !1;
                if (n && this.__clipPaths) for (var o = 0; o < this.__clipPaths.length; ++o) if (this.__clipPaths[o].isZeroArea()) return !1;
                if (i && this.parent) for (var a = this.parent; a;) {
                    if (a.ignore) return !1;
                    a = a.parent
                }
                return !0
            }, n.prototype.contain = function (t, e) {
                return this.rectContain(t, e)
            }, n.prototype.traverse = function (t, e) {
                t.call(e, this)
            }, n.prototype.rectContain = function (t, e) {
                var n = this.transformCoordToLocal(t, e), i = this.getBoundingRect();
                return i.contain(n[0], n[1])
            }, n.prototype.getPaintRect = function () {
                var t = this._paintRect;
                if (!this._paintRect || this.__dirty) {
                    var e = this.transform, n = this.getBoundingRect(), i = this.style, r = i.shadowBlur || 0,
                        o = i.shadowOffsetX || 0, a = i.shadowOffsetY || 0;
                    t = this._paintRect || (this._paintRect = new Wv(0, 0, 0, 0)), e ? Wv.applyTransform(t, n, e) : t.copy(n), (r || o || a) && (t.width += 2 * r + Math.abs(o), t.height += 2 * r + Math.abs(a), t.x = Math.min(t.x, t.x + o - r), t.y = Math.min(t.y, t.y + a - r));
                    var s = this.dirtyRectTolerance;
                    t.isZero() || (t.x = Math.floor(t.x - s), t.y = Math.floor(t.y - s), t.width = Math.ceil(t.width + 1 + 2 * s), t.height = Math.ceil(t.height + 1 + 2 * s))
                }
                return t
            }, n.prototype.setPrevPaintRect = function (t) {
                t ? (this._prevPaintRect = this._prevPaintRect || new Wv(0, 0, 0, 0), this._prevPaintRect.copy(t)) : this._prevPaintRect = null
            }, n.prototype.getPrevPaintRect = function () {
                return this._prevPaintRect
            }, n.prototype.animateStyle = function (t) {
                return this.animate("style", t)
            }, n.prototype.updateDuringAnimation = function (t) {
                "style" === t ? this.dirtyStyle() : this.markRedraw()
            }, n.prototype.attrKV = function (e, n) {
                "style" !== e ? t.prototype.attrKV.call(this, e, n) : this.style ? this.setStyle(n) : this.useStyle(n)
            }, n.prototype.setStyle = function (t, e) {
                return "string" == typeof t ? this.style[t] = e : h(this.style, t), this.dirtyStyle(), this
            }, n.prototype.dirtyStyle = function () {
                this.markRedraw(), this.__dirty |= n.STYLE_CHANGED_BIT, this._rect && (this._rect = null)
            }, n.prototype.dirty = function () {
                this.dirtyStyle()
            }, n.prototype.styleChanged = function () {
                return !!(this.__dirty & n.STYLE_CHANGED_BIT)
            }, n.prototype.styleUpdated = function () {
                this.__dirty &= ~n.STYLE_CHANGED_BIT
            }, n.prototype.createStyle = function (t) {
                return q(Km, t)
            }, n.prototype.useStyle = function (t) {
                t[Zm] || (t = this.createStyle(t)), this.__inHover ? this.__hoverStyle = t : this.style = t, this.dirtyStyle()
            }, n.prototype.isStyleObject = function (t) {
                return t[Zm]
            }, n.prototype._innerSaveToNormal = function (e) {
                t.prototype._innerSaveToNormal.call(this, e);
                var n = this._normalState;
                e.style && !n.style && (n.style = this._mergeStyle(this.createStyle(), this.style)), this._savePrimaryToNormal(e, n, Qm)
            }, n.prototype._applyStateObj = function (e, n, i, r, o, a) {
                t.prototype._applyStateObj.call(this, e, n, i, r, o, a);
                var s, l = !(n && r);
                if (n && n.style ? o ? r ? s = n.style : (s = this._mergeStyle(this.createStyle(), i.style), this._mergeStyle(s, n.style)) : (s = this._mergeStyle(this.createStyle(), r ? this.style : i.style), this._mergeStyle(s, n.style)) : l && (s = i.style), s) if (o) {
                    var u = this.style;
                    if (this.style = this.createStyle(l ? {} : u), l) for (var h = w(u), c = 0; c < h.length; c++) {
                        var p = h[c];
                        p in s && (s[p] = s[p], this.style[p] = u[p])
                    }
                    for (var f = w(s), c = 0; c < f.length; c++) {
                        var p = f[c];
                        this.style[p] = this.style[p]
                    }
                    this._transitionState(e, {style: s}, a, this.getAnimationStyleProps())
                } else this.useStyle(s);
                for (var c = 0; c < Qm.length; c++) {
                    var p = Qm[c];
                    n && null != n[p] ? this[p] = n[p] : l && null != i[p] && (this[p] = i[p])
                }
            }, n.prototype._mergeStates = function (e) {
                for (var n, i = t.prototype._mergeStates.call(this, e), r = 0; r < e.length; r++) {
                    var o = e[r];
                    o.style && (n = n || {}, this._mergeStyle(n, o.style))
                }
                return n && (i.style = n), i
            }, n.prototype._mergeStyle = function (t, e) {
                return h(t, e), t
            }, n.prototype.getAnimationStyleProps = function () {
                return $m
            }, n.STYLE_CHANGED_BIT = 2, n.initDefaultProps = function () {
                var t = n.prototype;
                t.type = "displayable", t.invisible = !1, t.z = 0, t.z2 = 0, t.zlevel = 0, t.culling = !1, t.cursor = "pointer", t.rectHover = !1, t.incremental = !1, t._rect = null, t.dirtyRectTolerance = 0, t.__dirty = im.REDARAW_BIT | n.STYLE_CHANGED_BIT
            }(), n
        }(im), t_ = new Wv(0, 0, 0, 0), e_ = new Wv(0, 0, 0, 0), n_ = Math.pow, i_ = Math.sqrt, r_ = 1e-8, o_ = 1e-4,
        a_ = i_(3), s_ = 1 / 3, l_ = $(), u_ = $(), h_ = $(), c_ = Math.min, p_ = Math.max, f_ = Math.sin,
        d_ = Math.cos, g_ = 2 * Math.PI, y_ = $(), v_ = $(), m_ = $(), __ = [], x_ = [],
        w_ = {M: 1, L: 2, C: 3, Q: 4, A: 5, Z: 6, R: 7}, b_ = [], S_ = [], T_ = [], M_ = [], C_ = [], I_ = [],
        D_ = Math.min, A_ = Math.max, k_ = Math.cos, L_ = Math.sin, P_ = Math.sqrt, O_ = Math.abs, R_ = Math.PI,
        B_ = 2 * R_, E_ = "undefined" != typeof Float32Array, z_ = [], N_ = function () {
            function t(t) {
                this.dpr = 1, this._version = 0, this._xi = 0, this._yi = 0, this._x0 = 0, this._y0 = 0, this._len = 0, t && (this._saveData = !1), this._saveData && (this.data = [])
            }

            return t.prototype.increaseVersion = function () {
                this._version++
            }, t.prototype.getVersion = function () {
                return this._version
            }, t.prototype.setScale = function (t, e, n) {
                n = n || 0, n > 0 && (this._ux = O_(n / jv / t) || 0, this._uy = O_(n / jv / e) || 0)
            }, t.prototype.setDPR = function (t) {
                this.dpr = t
            }, t.prototype.setContext = function (t) {
                this._ctx = t
            }, t.prototype.getContext = function () {
                return this._ctx
            }, t.prototype.beginPath = function () {
                return this._ctx && this._ctx.beginPath(), this.reset(), this
            }, t.prototype.reset = function () {
                this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this._pathSegLen && (this._pathSegLen = null, this._pathLen = 0), this._version++
            }, t.prototype.moveTo = function (t, e) {
                return this.addData(w_.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
            }, t.prototype.lineTo = function (t, e) {
                var n = O_(t - this._xi) > this._ux || O_(e - this._yi) > this._uy || this._len < 5;
                return this.addData(w_.L, t, e), this._ctx && n && (this._needsDash ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this
            }, t.prototype.bezierCurveTo = function (t, e, n, i, r, o) {
                return this.addData(w_.C, t, e, n, i, r, o), this._ctx && (this._needsDash ? this._dashedBezierTo(t, e, n, i, r, o) : this._ctx.bezierCurveTo(t, e, n, i, r, o)), this._xi = r, this._yi = o, this
            }, t.prototype.quadraticCurveTo = function (t, e, n, i) {
                return this.addData(w_.Q, t, e, n, i), this._ctx && (this._needsDash ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this
            }, t.prototype.arc = function (t, e, n, i, r, o) {
                z_[0] = i, z_[1] = r, so(z_, o), i = z_[0], r = z_[1];
                var a = r - i;
                return this.addData(w_.A, t, e, n, n, i, a, 0, o ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, o), this._xi = k_(r) * n + t, this._yi = L_(r) * n + e, this
            }, t.prototype.arcTo = function (t, e, n, i, r) {
                return this._ctx && this._ctx.arcTo(t, e, n, i, r), this
            }, t.prototype.rect = function (t, e, n, i) {
                return this._ctx && this._ctx.rect(t, e, n, i), this.addData(w_.R, t, e, n, i), this
            }, t.prototype.closePath = function () {
                this.addData(w_.Z);
                var t = this._ctx, e = this._x0, n = this._y0;
                return t && (this._needsDash && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this
            }, t.prototype.fill = function (t) {
                t && t.fill(), this.toStatic()
            }, t.prototype.stroke = function (t) {
                t && t.stroke(), this.toStatic()
            }, t.prototype.setLineDash = function (t) {
                if (t instanceof Array) {
                    this._lineDash = t, this._dashIdx = 0;
                    for (var e = 0, n = 0; n < t.length; n++) e += t[n];
                    this._dashSum = e, this._needsDash = !0
                } else this._lineDash = null, this._needsDash = !1;
                return this
            }, t.prototype.setLineDashOffset = function (t) {
                return this._dashOffset = t, this
            }, t.prototype.len = function () {
                return this._len
            }, t.prototype.setData = function (t) {
                var e = t.length;
                this.data && this.data.length === e || !E_ || (this.data = new Float32Array(e));
                for (var n = 0; e > n; n++) this.data[n] = t[n];
                this._len = e
            }, t.prototype.appendPath = function (t) {
                t instanceof Array || (t = [t]);
                for (var e = t.length, n = 0, i = this._len, r = 0; e > r; r++) n += t[r].len();
                E_ && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
                for (var r = 0; e > r; r++) for (var o = t[r].data, a = 0; a < o.length; a++) this.data[i++] = o[a];
                this._len = i
            }, t.prototype.addData = function () {
                if (this._saveData) {
                    var t = this.data;
                    this._len + arguments.length > t.length && (this._expandData(), t = this.data);
                    for (var e = 0; e < arguments.length; e++) t[this._len++] = arguments[e]
                }
            }, t.prototype._expandData = function () {
                if (!(this.data instanceof Array)) {
                    for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                    this.data = t
                }
            }, t.prototype._dashedLineTo = function (t, e) {
                var n, i, r = this._dashSum, o = this._lineDash, a = this._ctx, s = this._dashOffset, l = this._xi,
                    u = this._yi, h = t - l, c = e - u, p = P_(h * h + c * c), f = l, d = u, g = o.length;
                for (h /= p, c /= p, 0 > s && (s = r + s), s %= r, f -= s * h, d -= s * c; h > 0 && t >= f || 0 > h && f >= t || 0 === h && (c > 0 && e >= d || 0 > c && d >= e);) i = this._dashIdx, n = o[i], f += h * n, d += c * n, this._dashIdx = (i + 1) % g, h > 0 && l > f || 0 > h && f > l || c > 0 && u > d || 0 > c && d > u || a[i % 2 ? "moveTo" : "lineTo"](h >= 0 ? D_(f, t) : A_(f, t), c >= 0 ? D_(d, e) : A_(d, e));
                h = f - t, c = d - e, this._dashOffset = -P_(h * h + c * c)
            }, t.prototype._dashedBezierTo = function (t, e, n, i, r, o) {
                var a, s, l, u, h, c = this._ctx, p = this._dashSum, f = this._dashOffset, d = this._lineDash, g = this._xi,
                    y = this._yi, v = 0, m = this._dashIdx, _ = d.length, x = 0;
                for (0 > f && (f = p + f), f %= p, a = 0; 1 > a; a += .1) s = Hr(g, t, n, r, a + .1) - Hr(g, t, n, r, a), l = Hr(y, e, i, o, a + .1) - Hr(y, e, i, o, a), v += P_(s * s + l * l);
                for (; _ > m && (x += d[m], !(x > f)); m++) ;
                for (a = (x - f) / v; 1 >= a;) u = Hr(g, t, n, r, a), h = Hr(y, e, i, o, a), m % 2 ? c.moveTo(u, h) : c.lineTo(u, h), a += d[m] / v, m = (m + 1) % _;
                m % 2 !== 0 && c.lineTo(r, o), s = r - u, l = o - h, this._dashOffset = -P_(s * s + l * l)
            }, t.prototype._dashedQuadraticTo = function (t, e, n, i) {
                var r = n, o = i;
                n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, o)
            }, t.prototype.toStatic = function () {
                if (this._saveData) {
                    var t = this.data;
                    t instanceof Array && (t.length = this._len, E_ && this._len > 11 && (this.data = new Float32Array(t)))
                }
            }, t.prototype.getBoundingRect = function () {
                T_[0] = T_[1] = C_[0] = C_[1] = Number.MAX_VALUE, M_[0] = M_[1] = I_[0] = I_[1] = -Number.MAX_VALUE;
                var t, e = this.data, n = 0, i = 0, r = 0, o = 0;
                for (t = 0; t < this._len;) {
                    var a = e[t++], s = 1 === t;
                    switch (s && (n = e[t], i = e[t + 1], r = n, o = i), a) {
                        case w_.M:
                            n = r = e[t++], i = o = e[t++], C_[0] = r, C_[1] = o, I_[0] = r, I_[1] = o;
                            break;
                        case w_.L:
                            no(n, i, e[t], e[t + 1], C_, I_), n = e[t++], i = e[t++];
                            break;
                        case w_.C:
                            io(n, i, e[t++], e[t++], e[t++], e[t++], e[t], e[t + 1], C_, I_), n = e[t++], i = e[t++];
                            break;
                        case w_.Q:
                            ro(n, i, e[t++], e[t++], e[t], e[t + 1], C_, I_), n = e[t++], i = e[t++];
                            break;
                        case w_.A:
                            var l = e[t++], u = e[t++], h = e[t++], c = e[t++], p = e[t++], f = e[t++] + p;
                            t += 1;
                            var d = !e[t++];
                            s && (r = k_(p) * h + l, o = L_(p) * c + u), oo(l, u, h, c, p, f, d, C_, I_), n = k_(f) * h + l, i = L_(f) * c + u;
                            break;
                        case w_.R:
                            r = n = e[t++], o = i = e[t++];
                            var g = e[t++], y = e[t++];
                            no(r, o, r + g, o + y, C_, I_);
                            break;
                        case w_.Z:
                            n = r, i = o
                    }
                    ye(T_, T_, C_), ve(M_, M_, I_)
                }
                return 0 === t && (T_[0] = T_[1] = M_[0] = M_[1] = 0), new Wv(T_[0], T_[1], M_[0] - T_[0], M_[1] - T_[1])
            }, t.prototype._calculateLength = function () {
                var t = this.data, e = this._len, n = this._ux, i = this._uy, r = 0, o = 0, a = 0, s = 0;
                this._pathSegLen || (this._pathSegLen = []);
                for (var l = this._pathSegLen, u = 0, h = 0, c = 0; e > c;) {
                    var p = t[c++], f = 1 === c;
                    f && (r = t[c], o = t[c + 1], a = r, s = o);
                    var d = -1;
                    switch (p) {
                        case w_.M:
                            r = a = t[c++], o = s = t[c++];
                            break;
                        case w_.L:
                            var g = t[c++], y = t[c++], v = g - r, m = y - o;
                            (O_(v) > n || O_(m) > i || c === e - 1) && (d = Math.sqrt(v * v + m * m), r = g, o = y);
                            break;
                        case w_.C:
                            var _ = t[c++], x = t[c++], g = t[c++], y = t[c++], w = t[c++], b = t[c++];
                            d = jr(r, o, _, x, g, y, w, b, 10), r = w, o = b;
                            break;
                        case w_.Q:
                            var _ = t[c++], x = t[c++], g = t[c++], y = t[c++];
                            d = to(r, o, _, x, g, y, 10), r = g, o = y;
                            break;
                        case w_.A:
                            var S = t[c++], T = t[c++], M = t[c++], C = t[c++], I = t[c++], D = t[c++], A = D + I;
                            c += 1;
                        {
                            !t[c++]
                        }
                            f && (a = k_(I) * M + S, s = L_(I) * C + T), d = A_(M, C) * D_(B_, Math.abs(D)), r = k_(A) * M + S, o = L_(A) * C + T;
                            break;
                        case w_.R:
                            a = r = t[c++], s = o = t[c++];
                            var k = t[c++], L = t[c++];
                            d = 2 * k + 2 * L;
                            break;
                        case w_.Z:
                            var v = a - r, m = s - o;
                            d = Math.sqrt(v * v + m * m), r = a, o = s
                    }
                    d >= 0 && (l[h++] = d, u += d)
                }
                return this._pathLen = u, u
            }, t.prototype.rebuildPath = function (t, e) {
                var n, i, r, o, a, s, l, u, h, c = this.data, p = this._ux, f = this._uy, d = this._len, g = 1 > e, y = 0,
                    v = 0;
                if (!g || (this._pathSegLen || this._calculateLength(), l = this._pathSegLen, u = this._pathLen, h = e * u)) t: for (var m = 0; d > m;) {
                    var _ = c[m++], x = 1 === m;
                    switch (x && (r = c[m], o = c[m + 1], n = r, i = o), _) {
                        case w_.M:
                            n = r = c[m++], i = o = c[m++], t.moveTo(r, o);
                            break;
                        case w_.L:
                            if (a = c[m++], s = c[m++], O_(a - r) > p || O_(s - o) > f || m === d - 1) {
                                if (g) {
                                    var w = l[v++];
                                    if (y + w > h) {
                                        var b = (h - y) / w;
                                        t.lineTo(r * (1 - b) + a * b, o * (1 - b) + s * b);
                                        break t
                                    }
                                    y += w
                                }
                                t.lineTo(a, s), r = a, o = s
                            }
                            break;
                        case w_.C:
                            var S = c[m++], T = c[m++], M = c[m++], C = c[m++], I = c[m++], D = c[m++];
                            if (g) {
                                var w = l[v++];
                                if (y + w > h) {
                                    var b = (h - y) / w;
                                    Yr(r, S, M, I, b, b_), Yr(o, T, C, D, b, S_), t.bezierCurveTo(b_[1], S_[1], b_[2], S_[2], b_[3], S_[3]);
                                    break t
                                }
                                y += w
                            }
                            t.bezierCurveTo(S, T, M, C, I, D), r = I, o = D;
                            break;
                        case w_.Q:
                            var S = c[m++], T = c[m++], M = c[m++], C = c[m++];
                            if (g) {
                                var w = l[v++];
                                if (y + w > h) {
                                    var b = (h - y) / w;
                                    Qr(r, S, M, b, b_), Qr(o, T, C, b, S_), t.quadraticCurveTo(b_[1], S_[1], b_[2], S_[2]);
                                    break t
                                }
                                y += w
                            }
                            t.quadraticCurveTo(S, T, M, C), r = M, o = C;
                            break;
                        case w_.A:
                            var A = c[m++], k = c[m++], L = c[m++], P = c[m++], O = c[m++], R = c[m++], B = c[m++],
                                E = !c[m++], z = L > P ? L : P, N = O_(L - P) > .001, F = O + R, V = !1;
                            if (g) {
                                var w = l[v++];
                                y + w > h && (F = O + R * (h - y) / w, V = !0), y += w
                            }
                            if (N && t.ellipse ? t.ellipse(A, k, L, P, B, O, F, E) : t.arc(A, k, z, O, F, E), V) break t;
                            x && (n = k_(O) * L + A, i = L_(O) * P + k), r = k_(F) * L + A, o = L_(F) * P + k;
                            break;
                        case w_.R:
                            n = r = c[m], i = o = c[m + 1], a = c[m++], s = c[m++];
                            var H = c[m++], W = c[m++];
                            if (g) {
                                var w = l[v++];
                                if (y + w > h) {
                                    var G = h - y;
                                    t.moveTo(a, s), t.lineTo(a + D_(G, H), s), G -= H, G > 0 && t.lineTo(a + H, s + D_(G, W)), G -= W, G > 0 && t.lineTo(a + A_(H - G, 0), s + W), G -= H, G > 0 && t.lineTo(a, s + A_(W - G, 0));
                                    break t
                                }
                                y += w
                            }
                            t.rect(a, s, H, W);
                            break;
                        case w_.Z:
                            if (g) {
                                var w = l[v++];
                                if (y + w > h) {
                                    var b = (h - y) / w;
                                    t.lineTo(r * (1 - b) + n * b, o * (1 - b) + i * b);
                                    break t
                                }
                                y += w
                            }
                            t.closePath(), r = n, o = i
                    }
                }
            }, t.CMD = w_, t.initDefaultProps = function () {
                var e = t.prototype;
                e._saveData = !0, e._needsDash = !1, e._dashOffset = 0, e._dashIdx = 0, e._dashSum = 0, e._ux = 0, e._uy = 0
            }(), t
        }(), F_ = 2 * Math.PI, V_ = 2 * Math.PI, H_ = N_.CMD, W_ = 2 * Math.PI, G_ = 1e-4, U_ = [-1, -1, -1], Y_ = [-1, -1],
        X_ = c({
            fill: "#000",
            stroke: null,
            strokePercent: 1,
            fillOpacity: 1,
            strokeOpacity: 1,
            lineDashOffset: 0,
            lineWidth: 1,
            lineCap: "butt",
            miterLimit: 10,
            strokeNoScale: !1,
            strokeFirst: !1
        }, Km), j_ = {
            style: c({
                fill: !0,
                stroke: !0,
                strokePercent: !0,
                fillOpacity: !0,
                strokeOpacity: !0,
                lineDashOffset: !0,
                lineWidth: !0,
                miterLimit: !0
            }, $m.style)
        },
        q_ = ["x", "y", "rotation", "scaleX", "scaleY", "originX", "originY", "invisible", "culling", "z", "z2", "zlevel", "parent"],
        Z_ = function (t) {
            function n(e) {
                return t.call(this, e) || this
            }

            return e(n, t), n.prototype.update = function () {
                var e = this;
                t.prototype.update.call(this);
                var i = this.style;
                if (i.decal) {
                    var r = this._decalEl = this._decalEl || new n;
                    r.buildPath === n.prototype.buildPath && (r.buildPath = function (t) {
                        e.buildPath(t, e.shape)
                    }), r.silent = !0;
                    var o = r.style;
                    for (var a in i) o[a] !== i[a] && (o[a] = i[a]);
                    o.fill = i.fill ? i.decal : null, o.decal = null, o.shadowColor = null, i.strokeFirst && (o.stroke = null);
                    for (var s = 0; s < q_.length; ++s) r[q_[s]] = this[q_[s]];
                    r.__dirty |= im.REDARAW_BIT
                } else this._decalEl && (this._decalEl = null)
            }, n.prototype.getDecalElement = function () {
                return this._decalEl
            }, n.prototype._init = function (e) {
                var n = w(e);
                this.shape = this.getDefaultShape();
                var i = this.getDefaultStyle();
                i && this.useStyle(i);
                for (var r = 0; r < n.length; r++) {
                    var o = n[r], a = e[o];
                    "style" === o ? this.style ? h(this.style, a) : this.useStyle(a) : "shape" === o ? h(this.shape, a) : t.prototype.attrKV.call(this, o, a)
                }
                this.style || this.useStyle({})
            }, n.prototype.getDefaultStyle = function () {
                return null
            }, n.prototype.getDefaultShape = function () {
                return {}
            }, n.prototype.canBeInsideText = function () {
                return this.hasFill()
            }, n.prototype.getInsideTextFill = function () {
                var t = this.style.fill;
                if ("none" !== t) {
                    if (C(t)) {
                        var e = gn(t, 0);
                        return e > .5 ? Zv : e > .2 ? $v : Kv
                    }
                    if (t) return Kv
                }
                return Zv
            }, n.prototype.getInsideTextStroke = function (t) {
                var e = this.style.fill;
                if (C(e)) {
                    var n = this.__zr, i = !(!n || !n.isDarkMode()), r = gn(t, 0) < qv;
                    if (i === r) return e
                }
            }, n.prototype.buildPath = function () {
            }, n.prototype.pathUpdated = function () {
                this.__dirty &= ~n.SHAPE_CHANGED_BIT
            }, n.prototype.createPathProxy = function () {
                this.path = new N_(!1)
            }, n.prototype.hasStroke = function () {
                var t = this.style, e = t.stroke;
                return !(null == e || "none" === e || !(t.lineWidth > 0))
            }, n.prototype.hasFill = function () {
                var t = this.style, e = t.fill;
                return null != e && "none" !== e
            }, n.prototype.getBoundingRect = function () {
                var t = this._rect, e = this.style, i = !t;
                if (i) {
                    var r = !1;
                    this.path || (r = !0, this.createPathProxy());
                    var o = this.path;
                    (r || this.__dirty & n.SHAPE_CHANGED_BIT) && (o.beginPath(), this.buildPath(o, this.shape, !1), this.pathUpdated()), t = o.getBoundingRect()
                }
                if (this._rect = t, this.hasStroke() && this.path && this.path.len() > 0) {
                    var a = this._rectWithStroke || (this._rectWithStroke = t.clone());
                    if (this.__dirty || i) {
                        a.copy(t);
                        var s = e.strokeNoScale ? this.getLineScale() : 1, l = e.lineWidth;
                        if (!this.hasFill()) {
                            var u = this.strokeContainThreshold;
                            l = Math.max(l, null == u ? 4 : u)
                        }
                        s > 1e-10 && (a.width += l / s, a.height += l / s, a.x -= l / s / 2, a.y -= l / s / 2)
                    }
                    return a
                }
                return t
            }, n.prototype.contain = function (t, e) {
                var n = this.transformCoordToLocal(t, e), i = this.getBoundingRect(), r = this.style;
                if (t = n[0], e = n[1], i.contain(t, e)) {
                    var o = this.path;
                    if (this.hasStroke()) {
                        var a = r.lineWidth, s = r.strokeNoScale ? this.getLineScale() : 1;
                        if (s > 1e-10 && (this.hasFill() || (a = Math.max(a, this.strokeContainThreshold)), bo(o, a / s, t, e))) return !0
                    }
                    if (this.hasFill()) return wo(o, t, e)
                }
                return !1
            }, n.prototype.dirtyShape = function () {
                this.__dirty |= n.SHAPE_CHANGED_BIT, this._rect && (this._rect = null), this._decalEl && this._decalEl.dirtyShape(), this.markRedraw()
            }, n.prototype.dirty = function () {
                this.dirtyStyle(), this.dirtyShape()
            }, n.prototype.animateShape = function (t) {
                return this.animate("shape", t)
            }, n.prototype.updateDuringAnimation = function (t) {
                "style" === t ? this.dirtyStyle() : "shape" === t ? this.dirtyShape() : this.markRedraw()
            }, n.prototype.attrKV = function (e, n) {
                "shape" === e ? this.setShape(n) : t.prototype.attrKV.call(this, e, n)
            }, n.prototype.setShape = function (t, e) {
                var n = this.shape;
                return n || (n = this.shape = {}), "string" == typeof t ? n[t] = e : h(n, t), this.dirtyShape(), this
            }, n.prototype.shapeChanged = function () {
                return !!(this.__dirty & n.SHAPE_CHANGED_BIT)
            }, n.prototype.createStyle = function (t) {
                return q(X_, t)
            }, n.prototype._innerSaveToNormal = function (e) {
                t.prototype._innerSaveToNormal.call(this, e);
                var n = this._normalState;
                e.shape && !n.shape && (n.shape = h({}, this.shape))
            }, n.prototype._applyStateObj = function (e, n, i, r, o, a) {
                t.prototype._applyStateObj.call(this, e, n, i, r, o, a);
                var s, l = !(n && r);
                if (n && n.shape ? o ? r ? s = n.shape : (s = h({}, i.shape), h(s, n.shape)) : (s = h({}, r ? this.shape : i.shape), h(s, n.shape)) : l && (s = i.shape), s) if (o) {
                    this.shape = h({}, this.shape);
                    for (var u = {}, c = w(s), p = 0; p < c.length; p++) {
                        var f = c[p];
                        "object" == typeof s[f] ? this.shape[f] = s[f] : u[f] = s[f]
                    }
                    this._transitionState(e, {shape: u}, a)
                } else this.shape = s, this.dirtyShape()
            }, n.prototype._mergeStates = function (e) {
                for (var n, i = t.prototype._mergeStates.call(this, e), r = 0; r < e.length; r++) {
                    var o = e[r];
                    o.shape && (n = n || {}, this._mergeStyle(n, o.shape))
                }
                return n && (i.shape = n), i
            }, n.prototype.getAnimationStyleProps = function () {
                return j_
            }, n.prototype.isZeroArea = function () {
                return !1
            }, n.extend = function (t) {
                var i = function (n) {
                    function i(e) {
                        var i = n.call(this, e) || this;
                        return t.init && t.init.call(i, e), i
                    }

                    return e(i, n), i.prototype.getDefaultStyle = function () {
                        return s(t.style)
                    }, i.prototype.getDefaultShape = function () {
                        return s(t.shape)
                    }, i
                }(n);
                for (var r in t) "function" == typeof t[r] && (i.prototype[r] = t[r]);
                return i
            }, n.SHAPE_CHANGED_BIT = 4, n.initDefaultProps = function () {
                var t = n.prototype;
                t.type = "path", t.strokeContainThreshold = 5, t.segmentIgnoreThreshold = 0, t.subPixelOptimize = !1, t.autoBatch = !1, t.__dirty = im.REDARAW_BIT | Jm.STYLE_CHANGED_BIT | n.SHAPE_CHANGED_BIT
            }(), n
        }(Jm),
        K_ = c({strokeFirst: !0, font: Uv, x: 0, y: 0, textAlign: "left", textBaseline: "top", miterLimit: 2}, X_),
        $_ = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return e(n, t), n.prototype.hasStroke = function () {
                var t = this.style, e = t.stroke;
                return null != e && "none" !== e && t.lineWidth > 0
            }, n.prototype.hasFill = function () {
                var t = this.style, e = t.fill;
                return null != e && "none" !== e
            }, n.prototype.createStyle = function (t) {
                return q(K_, t)
            }, n.prototype.setBoundingRect = function (t) {
                this._rect = t
            }, n.prototype.getBoundingRect = function () {
                var t = this.style;
                if (!this._rect) {
                    var e = t.text;
                    null != e ? e += "" : e = "";
                    var n = Rn(e, t.font, t.textAlign, t.textBaseline);
                    if (n.x += t.x || 0, n.y += t.y || 0, this.hasStroke()) {
                        var i = t.lineWidth;
                        n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i
                    }
                    this._rect = n
                }
                return this._rect
            }, n.initDefaultProps = function () {
                var t = n.prototype;
                t.dirtyRectTolerance = 10
            }(), n
        }(Jm);
    $_.prototype.type = "tspan";
    var Q_ = c({x: 0, y: 0}, Km),
        J_ = {style: c({x: !0, y: !0, width: !0, height: !0, sx: !0, sy: !0, sWidth: !0, sHeight: !0}, $m.style)},
        tx = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return e(n, t), n.prototype.createStyle = function (t) {
                return q(Q_, t)
            }, n.prototype._getSize = function (t) {
                var e = this.style, n = e[t];
                if (null != n) return n;
                var i = So(e.image) ? e.image : this.__image;
                if (!i) return 0;
                var r = "width" === t ? "height" : "width", o = e[r];
                return null == o ? i[t] : i[t] / i[r] * o
            }, n.prototype.getWidth = function () {
                return this._getSize("width")
            }, n.prototype.getHeight = function () {
                return this._getSize("height")
            }, n.prototype.getAnimationStyleProps = function () {
                return J_
            }, n.prototype.getBoundingRect = function () {
                var t = this.style;
                return this._rect || (this._rect = new Wv(t.x || 0, t.y || 0, this.getWidth(), this.getHeight())), this._rect
            }, n
        }(Jm);
    tx.prototype.type = "image";
    var ex = Math.round, nx = function () {
        function t() {
            this.x = 0, this.y = 0, this.width = 0, this.height = 0
        }

        return t
    }(), ix = {}, rx = function (t) {
        function n(e) {
            return t.call(this, e) || this
        }

        return e(n, t), n.prototype.getDefaultShape = function () {
            return new nx
        }, n.prototype.buildPath = function (t, e) {
            var n, i, r, o;
            if (this.subPixelOptimize) {
                var a = Co(ix, e, this.style);
                n = a.x, i = a.y, r = a.width, o = a.height, a.r = e.r, e = a
            } else n = e.x, i = e.y, r = e.width, o = e.height;
            e.r ? To(t, e) : t.rect(n, i, r, o)
        }, n.prototype.isZeroArea = function () {
            return !this.shape.width || !this.shape.height
        }, n
    }(Z_);
    rx.prototype.type = "rect";
    var ox = {fill: "#000"}, ax = 2, sx = {
            style: c({
                fill: !0,
                stroke: !0,
                fillOpacity: !0,
                strokeOpacity: !0,
                lineWidth: !0,
                fontSize: !0,
                lineHeight: !0,
                width: !0,
                height: !0,
                textShadowColor: !0,
                textShadowBlur: !0,
                textShadowOffsetX: !0,
                textShadowOffsetY: !0,
                backgroundColor: !0,
                padding: !0,
                borderColor: !0,
                borderWidth: !0,
                borderRadius: !0
            }, $m.style)
        }, lx = function (t) {
            function n(e) {
                var n = t.call(this) || this;
                return n.type = "text", n._children = [], n._defaultStyle = ox, n.attr(e), n
            }

            return e(n, t), n.prototype.childrenRef = function () {
                return this._children
            }, n.prototype.update = function () {
                this.styleChanged() && this._updateSubTexts();
                for (var e = 0; e < this._children.length; e++) {
                    var n = this._children[e];
                    n.zlevel = this.zlevel, n.z = this.z, n.z2 = this.z2, n.culling = this.culling, n.cursor = this.cursor, n.invisible = this.invisible
                }
                var i = this.attachedTransform;
                if (i) {
                    i.updateTransform();
                    var r = i.transform;
                    r ? (this.transform = this.transform || [], Ve(this.transform, r)) : this.transform = null
                } else t.prototype.update.call(this)
            }, n.prototype.getComputedTransform = function () {
                return this.__hostTarget && (this.__hostTarget.getComputedTransform(), this.__hostTarget.updateInnerText(!0)), this.attachedTransform ? this.attachedTransform.getComputedTransform() : t.prototype.getComputedTransform.call(this)
            }, n.prototype._updateSubTexts = function () {
                this._childCursor = 0, Do(this.style), this.style.rich ? this._updateRichTexts() : this._updatePlainTexts(), this._children.length = this._childCursor, this.styleUpdated()
            }, n.prototype.addSelfToZr = function (e) {
                t.prototype.addSelfToZr.call(this, e);
                for (var n = 0; n < this._children.length; n++) this._children[n].__zr = e
            }, n.prototype.removeSelfFromZr = function (e) {
                t.prototype.removeSelfFromZr.call(this, e);
                for (var n = 0; n < this._children.length; n++) this._children[n].__zr = null
            }, n.prototype.getBoundingRect = function () {
                if (this.styleChanged() && this._updateSubTexts(), !this._rect) {
                    for (var t = new Wv(0, 0, 0, 0), e = this._children, n = [], i = null, r = 0; r < e.length; r++) {
                        var o = e[r], a = o.getBoundingRect(), s = o.getLocalTransform(n);
                        s ? (t.copy(a), t.applyTransform(s), i = i || t.clone(), i.union(t)) : (i = i || a.clone(), i.union(a))
                    }
                    this._rect = i || t
                }
                return this._rect
            }, n.prototype.setDefaultTextStyle = function (t) {
                this._defaultStyle = t || ox
            }, n.prototype.setTextContent = function () {
                throw new Error("Can't attach text on another text")
            }, n.prototype._mergeStyle = function (t, e) {
                if (!e) return t;
                var n = e.rich, i = t.rich || n && {};
                return h(t, e), n && i ? (this._mergeRich(i, n), t.rich = i) : i && (t.rich = i), t
            }, n.prototype._mergeRich = function (t, e) {
                for (var n = w(e), i = 0; i < n.length; i++) {
                    var r = n[i];
                    t[r] = t[r] || {}, h(t[r], e[r])
                }
            }, n.prototype.getAnimationStyleProps = function () {
                return sx
            }, n.prototype._getOrCreateChild = function (t) {
                var e = this._children[this._childCursor];
                return e && e instanceof t || (e = new t), this._children[this._childCursor++] = e, e.__zr = this.__zr, e.parent = this, e
            }, n.prototype._updatePlainTexts = function () {
                var t = this.style, e = t.font || Uv, n = t.padding, i = Oo(t), r = Lr(i, t), o = Ro(t),
                    a = !!t.backgroundColor, s = r.outerHeight, l = r.lines, u = r.lineHeight, h = this._defaultStyle,
                    c = t.x || 0, p = t.y || 0, f = t.align || h.align || "left",
                    d = t.verticalAlign || h.verticalAlign || "top", g = c, y = En(p, r.contentHeight, d);
                if (o || n) {
                    var v = r.width;
                    n && (v += n[1] + n[3]);
                    var m = Bn(c, v, f), _ = En(p, s, d);
                    o && this._renderBackground(t, t, m, _, v, s)
                }
                y += u / 2, n && (g = Po(c, f, n), "top" === d ? y += n[0] : "bottom" === d && (y -= n[2]));
                for (var x = 0, w = !1, b = (Lo("fill" in t ? t.fill : (w = !0, h.fill))), S = (ko("stroke" in t ? t.stroke : a || h.autoStroke && !w ? null : (x = ax, h.stroke))), T = t.textShadowBlur > 0, M = null != t.width && ("truncate" === t.overflow || "break" === t.overflow || "breakAll" === t.overflow), C = r.calculatedLineHeight, I = 0; I < l.length; I++) {
                    var D = this._getOrCreateChild($_), A = D.createStyle();
                    D.useStyle(A), A.text = l[I], A.x = g, A.y = y, f && (A.textAlign = f), A.textBaseline = "middle", A.opacity = t.opacity, A.strokeFirst = !0, T && (A.shadowBlur = t.textShadowBlur || 0, A.shadowColor = t.textShadowColor || "transparent", A.shadowOffsetX = t.textShadowOffsetX || 0, A.shadowOffsetY = t.textShadowOffsetY || 0), S && (A.stroke = S, A.lineWidth = t.lineWidth || x, A.lineDash = t.lineDash, A.lineDashOffset = t.lineDashOffset || 0), b && (A.fill = b), A.font = e, y += u, M && D.setBoundingRect(new Wv(Bn(A.x, t.width, A.textAlign), En(A.y, C, A.textBaseline), t.width, C))
                }
            }, n.prototype._updateRichTexts = function () {
                var t = this.style, e = Oo(t), n = Pr(e, t), i = n.width, r = n.outerWidth, o = n.outerHeight,
                    a = t.padding, s = t.x || 0, l = t.y || 0, u = this._defaultStyle, h = t.align || u.align,
                    c = t.verticalAlign || u.verticalAlign, p = Bn(s, r, h), f = En(l, o, c), d = p, g = f;
                a && (d += a[3], g += a[0]);
                var y = d + i;
                Ro(t) && this._renderBackground(t, t, p, f, r, o);
                for (var v = !!t.backgroundColor, m = 0; m < n.lines.length; m++) {
                    for (var _ = n.lines[m], x = _.tokens, w = x.length, b = _.lineHeight, S = _.width, T = 0, M = d, C = y, I = w - 1, D = void 0; w > T && (D = x[T], !D.align || "left" === D.align);) this._placeToken(D, t, b, g, M, "left", v), S -= D.width, M += D.width, T++;
                    for (; I >= 0 && (D = x[I], "right" === D.align);) this._placeToken(D, t, b, g, C, "right", v), S -= D.width, C -= D.width, I--;
                    for (M += (i - (M - d) - (y - C) - S) / 2; I >= T;) D = x[T], this._placeToken(D, t, b, g, M + D.width / 2, "center", v), M += D.width, T++;
                    g += b
                }
            }, n.prototype._placeToken = function (t, e, n, i, r, o, a) {
                var s = e.rich[t.styleName] || {};
                s.text = t.text;
                var l = t.verticalAlign, u = i + n / 2;
                "top" === l ? u = i + t.height / 2 : "bottom" === l && (u = i + n - t.height / 2);
                var h = !t.isLineHolder && Ro(s);
                h && this._renderBackground(s, e, "right" === o ? r - t.width : "center" === o ? r - t.width / 2 : r, u - t.height / 2, t.width, t.height);
                var c = !!s.backgroundColor, p = t.textPadding;
                p && (r = Po(r, o, p), u -= t.height / 2 - p[0] - t.innerHeight / 2);
                var f = this._getOrCreateChild($_), d = f.createStyle();
                f.useStyle(d);
                var g = this._defaultStyle, y = !1, v = 0,
                    m = ko("fill" in s ? s.fill : "fill" in e ? e.fill : (y = !0, g.fill)),
                    _ = ko("stroke" in s ? s.stroke : "stroke" in e ? e.stroke : c || a || g.autoStroke && !y ? null : (v = ax, g.stroke)),
                    x = s.textShadowBlur > 0 || e.textShadowBlur > 0;
                d.text = t.text, d.x = r, d.y = u, x && (d.shadowBlur = s.textShadowBlur || e.textShadowBlur || 0, d.shadowColor = s.textShadowColor || e.textShadowColor || "transparent", d.shadowOffsetX = s.textShadowOffsetX || e.textShadowOffsetX || 0, d.shadowOffsetY = s.textShadowOffsetY || e.textShadowOffsetY || 0), d.textAlign = o, d.textBaseline = "middle", d.font = t.font || Uv, d.opacity = F(s.opacity, e.opacity, 1), _ && (d.lineWidth = F(s.lineWidth, e.lineWidth, v), d.lineDash = N(s.lineDash, e.lineDash), d.lineDashOffset = e.lineDashOffset || 0, d.stroke = _), m && (d.fill = m);
                var w = t.contentWidth, b = t.contentHeight;
                f.setBoundingRect(new Wv(Bn(d.x, w, d.textAlign), En(d.y, b, d.textBaseline), w, b))
            }, n.prototype._renderBackground = function (t, e, n, i, r, o) {
                var a, s, l = t.backgroundColor, u = t.borderWidth, h = t.borderColor, c = C(l), p = t.borderRadius,
                    f = this;
                if (c || u && h) {
                    a = this._getOrCreateChild(rx), a.useStyle(a.createStyle()), a.style.fill = null;
                    var d = a.shape;
                    d.x = n, d.y = i, d.width = r, d.height = o, d.r = p, a.dirtyShape()
                }
                if (c) {
                    var g = a.style;
                    g.fill = l || null, g.fillOpacity = N(t.fillOpacity, 1)
                } else if (l && l.image) {
                    s = this._getOrCreateChild(tx), s.onload = function () {
                        f.dirtyStyle()
                    };
                    var y = s.style;
                    y.image = l.image, y.x = n, y.y = i, y.width = r, y.height = o
                }
                if (u && h) {
                    var g = a.style;
                    g.lineWidth = u, g.stroke = h, g.strokeOpacity = N(t.strokeOpacity, 1), g.lineDash = t.borderDash, g.lineDashOffset = t.borderDashOffset || 0, a.strokeContainThreshold = 0, a.hasFill() && a.hasStroke() && (g.strokeFirst = !0, g.lineWidth *= 2)
                }
                var v = (a || s).style;
                v.shadowBlur = t.shadowBlur || 0, v.shadowColor = t.shadowColor || "transparent", v.shadowOffsetX = t.shadowOffsetX || 0, v.shadowOffsetY = t.shadowOffsetY || 0, v.opacity = F(t.opacity, e.opacity, 1)
            }, n.makeFont = function (t) {
                var e = "";
                if (t.fontSize || t.fontFamily || t.fontWeight) {
                    var n = "";
                    n = "string" != typeof t.fontSize || -1 === t.fontSize.indexOf("px") && -1 === t.fontSize.indexOf("rem") && -1 === t.fontSize.indexOf("em") ? isNaN(+t.fontSize) ? "12px" : t.fontSize + "px" : t.fontSize, e = [t.fontStyle, t.fontWeight, n, t.fontFamily || "sans-serif"].join(" ")
                }
                return e && G(e) || t.textFont || t.font
            }, n
        }(Jm), ux = {left: !0, right: 1, center: 1}, hx = {top: 1, bottom: 1, middle: 1}, cx = or(), px = 1, fx = {},
        dx = or(), gx = 0, yx = 1, vx = 2, mx = ["emphasis", "blur", "select"],
        _x = ["normal", "emphasis", "blur", "select"], xx = 10, bx = 9, Sx = "highlight", Tx = "downplay",
        Mx = "select", Cx = "unselect", Ix = "toggleSelect", Dx = new bv(100), Ax = ["emphasis", "blur", "select"],
        kx = {itemStyle: "getItemStyle", lineStyle: "getLineStyle", areaStyle: "getAreaStyle"}, Lx = N_.CMD,
        Px = [[], [], []], Ox = Math.sqrt, Rx = Math.atan2, Bx = Math.sqrt, Ex = Math.sin, zx = Math.cos, Nx = Math.PI,
        Fx = /([mlvhzcqtsa])([^mlvhzcqtsa]*)/gi, Vx = /-?([0-9]*\.)?[0-9]+([eE]-?[0-9]+)?/g, Hx = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return e(n, t), n.prototype.applyTransform = function () {
            }, n
        }(Z_), Wx = function () {
            function t() {
                this.cx = 0, this.cy = 0, this.r = 0
            }

            return t
        }(), Gx = function (t) {
            function n(e) {
                return t.call(this, e) || this
            }

            return e(n, t), n.prototype.getDefaultShape = function () {
                return new Wx
            }, n.prototype.buildPath = function (t, e, n) {
                n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI)
            }, n
        }(Z_);
    Gx.prototype.type = "circle";
    var Ux = function () {
        function t() {
            this.cx = 0, this.cy = 0, this.rx = 0, this.ry = 0
        }

        return t
    }(), Yx = function (t) {
        function n(e) {
            return t.call(this, e) || this
        }

        return e(n, t), n.prototype.getDefaultShape = function () {
            return new Ux
        }, n.prototype.buildPath = function (t, e) {
            var n = .5522848, i = e.cx, r = e.cy, o = e.rx, a = e.ry, s = o * n, l = a * n;
            t.moveTo(i - o, r), t.bezierCurveTo(i - o, r - l, i - s, r - a, i, r - a), t.bezierCurveTo(i + s, r - a, i + o, r - l, i + o, r), t.bezierCurveTo(i + o, r + l, i + s, r + a, i, r + a), t.bezierCurveTo(i - s, r + a, i - o, r + l, i - o, r), t.closePath()
        }, n
    }(Z_);
    Yx.prototype.type = "ellipse";
    var Xx = Math.PI, jx = 2 * Xx, qx = Math.sin, Zx = Math.cos, Kx = Math.acos, $x = Math.atan2, Qx = Math.abs,
        Jx = Math.sqrt, tw = Math.max, ew = Math.min, nw = 1e-4, iw = function () {
            function t() {
                this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = 2 * Math.PI, this.clockwise = !0, this.cornerRadius = 0, this.innerCornerRadius = 0
            }

            return t
        }(), rw = function (t) {
            function n(e) {
                return t.call(this, e) || this
            }

            return e(n, t), n.prototype.getDefaultShape = function () {
                return new iw
            }, n.prototype.buildPath = function (t, e) {
                Ba(t, e)
            }, n.prototype.isZeroArea = function () {
                return this.shape.startAngle === this.shape.endAngle || this.shape.r === this.shape.r0
            }, n
        }(Z_);
    rw.prototype.type = "sector";
    var ow = function () {
        function t() {
            this.cx = 0, this.cy = 0, this.r = 0, this.r0 = 0
        }

        return t
    }(), aw = function (t) {
        function n(e) {
            return t.call(this, e) || this
        }

        return e(n, t), n.prototype.getDefaultShape = function () {
            return new ow
        }, n.prototype.buildPath = function (t, e) {
            var n = e.cx, i = e.cy, r = 2 * Math.PI;
            t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0)
        }, n
    }(Z_);
    aw.prototype.type = "ring";
    var sw = function () {
        function t() {
            this.points = null, this.smooth = 0, this.smoothConstraint = null
        }

        return t
    }(), lw = function (t) {
        function n(e) {
            return t.call(this, e) || this
        }

        return e(n, t), n.prototype.getDefaultShape = function () {
            return new sw
        }, n.prototype.buildPath = function (t, e) {
            Fa(t, e, !0)
        }, n
    }(Z_);
    lw.prototype.type = "polygon";
    var uw = function () {
        function t() {
            this.points = null, this.percent = 1, this.smooth = 0, this.smoothConstraint = null
        }

        return t
    }(), hw = function (t) {
        function n(e) {
            return t.call(this, e) || this
        }

        return e(n, t), n.prototype.getDefaultStyle = function () {
            return {stroke: "#000", fill: null}
        }, n.prototype.getDefaultShape = function () {
            return new uw
        }, n.prototype.buildPath = function (t, e) {
            Fa(t, e, !1)
        }, n
    }(Z_);
    hw.prototype.type = "polyline";
    var cw = {}, pw = function () {
        function t() {
            this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.percent = 1
        }

        return t
    }(), fw = function (t) {
        function n(e) {
            return t.call(this, e) || this
        }

        return e(n, t), n.prototype.getDefaultStyle = function () {
            return {stroke: "#000", fill: null}
        }, n.prototype.getDefaultShape = function () {
            return new pw
        }, n.prototype.buildPath = function (t, e) {
            var n, i, r, o;
            if (this.subPixelOptimize) {
                var a = Mo(cw, e, this.style);
                n = a.x1, i = a.y1, r = a.x2, o = a.y2
            } else n = e.x1, i = e.y1, r = e.x2, o = e.y2;
            var s = e.percent;
            0 !== s && (t.moveTo(n, i), 1 > s && (r = n * (1 - s) + r * s, o = i * (1 - s) + o * s), t.lineTo(r, o))
        }, n.prototype.pointAt = function (t) {
            var e = this.shape;
            return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
        }, n
    }(Z_);
    fw.prototype.type = "line";
    var dw = [], gw = function () {
        function t() {
            this.x1 = 0, this.y1 = 0, this.x2 = 0, this.y2 = 0, this.cpx1 = 0, this.cpy1 = 0, this.percent = 1
        }

        return t
    }(), yw = function (t) {
        function n(e) {
            return t.call(this, e) || this
        }

        return e(n, t), n.prototype.getDefaultStyle = function () {
            return {stroke: "#000", fill: null}
        }, n.prototype.getDefaultShape = function () {
            return new gw
        }, n.prototype.buildPath = function (t, e) {
            var n = e.x1, i = e.y1, r = e.x2, o = e.y2, a = e.cpx1, s = e.cpy1, l = e.cpx2, u = e.cpy2, h = e.percent;
            0 !== h && (t.moveTo(n, i), null == l || null == u ? (1 > h && (Qr(n, a, r, h, dw), a = dw[1], r = dw[2], Qr(i, s, o, h, dw), s = dw[1], o = dw[2]), t.quadraticCurveTo(a, s, r, o)) : (1 > h && (Yr(n, a, l, r, h, dw), a = dw[1], l = dw[2], r = dw[3], Yr(i, s, u, o, h, dw), s = dw[1], u = dw[2], o = dw[3]), t.bezierCurveTo(a, s, l, u, r, o)))
        }, n.prototype.pointAt = function (t) {
            return Va(this.shape, t, !1)
        }, n.prototype.tangentAt = function (t) {
            var e = Va(this.shape, t, !0);
            return he(e, e)
        }, n
    }(Z_);
    yw.prototype.type = "bezier-curve";
    var vw = function () {
        function t() {
            this.cx = 0, this.cy = 0, this.r = 0, this.startAngle = 0, this.endAngle = 2 * Math.PI, this.clockwise = !0
        }

        return t
    }(), mw = function (t) {
        function n(e) {
            return t.call(this, e) || this
        }

        return e(n, t), n.prototype.getDefaultStyle = function () {
            return {stroke: "#000", fill: null}
        }, n.prototype.getDefaultShape = function () {
            return new vw
        }, n.prototype.buildPath = function (t, e) {
            var n = e.cx, i = e.cy, r = Math.max(e.r, 0), o = e.startAngle, a = e.endAngle, s = e.clockwise,
                l = Math.cos(o), u = Math.sin(o);
            t.moveTo(l * r + n, u * r + i), t.arc(n, i, r, o, a, !s)
        }, n
    }(Z_);
    mw.prototype.type = "arc";
    var _w = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = "compound", e
        }

        return e(n, t), n.prototype._updatePathDirty = function () {
            for (var t = this.shape.paths, e = this.shapeChanged(), n = 0; n < t.length; n++) e = e || t[n].shapeChanged();
            e && this.dirtyShape()
        }, n.prototype.beforeBrush = function () {
            this._updatePathDirty();
            for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1], t[n].segmentIgnoreThreshold)
        }, n.prototype.buildPath = function (t, e) {
            for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0)
        }, n.prototype.afterBrush = function () {
            for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].pathUpdated()
        }, n.prototype.getBoundingRect = function () {
            return this._updatePathDirty.call(this), Z_.prototype.getBoundingRect.call(this)
        }, n
    }(Z_), xw = function () {
        function t(t) {
            this.colorStops = t || []
        }

        return t.prototype.addColorStop = function (t, e) {
            this.colorStops.push({offset: t, color: e})
        }, t
    }(), ww = function (t) {
        function n(e, n, i, r, o, a) {
            var s = t.call(this, o) || this;
            return s.x = null == e ? 0 : e, s.y = null == n ? 0 : n, s.x2 = null == i ? 1 : i, s.y2 = null == r ? 0 : r, s.type = "linear", s.global = a || !1, s
        }

        return e(n, t), n
    }(xw), bw = function (t) {
        function n(e, n, i, r, o) {
            var a = t.call(this, r) || this;
            return a.x = null == e ? .5 : e, a.y = null == n ? .5 : n, a.r = null == i ? .5 : i, a.type = "radial", a.global = o || !1, a
        }

        return e(n, t), n
    }(xw), Sw = [0, 0], Tw = [0, 0], Mw = new Ov, Cw = new Ov, Iw = function () {
        function t(t, e) {
            this._corners = [], this._axes = [], this._origin = [0, 0];
            for (var n = 0; 4 > n; n++) this._corners[n] = new Ov;
            for (var n = 0; 2 > n; n++) this._axes[n] = new Ov;
            t && this.fromBoundingRect(t, e)
        }

        return t.prototype.fromBoundingRect = function (t, e) {
            var n = this._corners, i = this._axes, r = t.x, o = t.y, a = r + t.width, s = o + t.height;
            if (n[0].set(r, o), n[1].set(a, o), n[2].set(a, s), n[3].set(r, s), e) for (var l = 0; 4 > l; l++) n[l].transform(e);
            Ov.sub(i[0], n[1], n[0]), Ov.sub(i[1], n[3], n[0]), i[0].normalize(), i[1].normalize();
            for (var l = 0; 2 > l; l++) this._origin[l] = i[l].dot(n[0])
        }, t.prototype.intersect = function (t, e) {
            var n = !0, i = !e;
            return Mw.set(1 / 0, 1 / 0), Cw.set(0, 0), !this._intersectCheckOneSide(this, t, Mw, Cw, i, 1) && (n = !1, i) ? n : !this._intersectCheckOneSide(t, this, Mw, Cw, i, -1) && (n = !1, i) ? n : (i || Ov.copy(e, n ? Mw : Cw), n)
        }, t.prototype._intersectCheckOneSide = function (t, e, n, i, r, o) {
            for (var a = !0, s = 0; 2 > s; s++) {
                var l = this._axes[s];
                if (this._getProjMinMaxOnAxis(s, t._corners, Sw), this._getProjMinMaxOnAxis(s, e._corners, Tw), Sw[1] < Tw[0] || Sw[0] > Tw[1]) {
                    if (a = !1, r) return a;
                    var u = Math.abs(Tw[0] - Sw[1]), h = Math.abs(Sw[0] - Tw[1]);
                    Math.min(u, h) > i.len() && (h > u ? Ov.scale(i, l, -u * o) : Ov.scale(i, l, h * o))
                } else if (n) {
                    var u = Math.abs(Tw[0] - Sw[1]), h = Math.abs(Sw[0] - Tw[1]);
                    Math.min(u, h) < n.len() && (h > u ? Ov.scale(n, l, u * o) : Ov.scale(n, l, -h * o))
                }
            }
            return a
        }, t.prototype._getProjMinMaxOnAxis = function (t, e, n) {
            for (var i = this._axes[t], r = this._origin, o = e[0].dot(i) + r[t], a = o, s = o, l = 1; l < e.length; l++) {
                var u = e[l].dot(i) + r[t];
                a = Math.min(u, a), s = Math.max(u, s)
            }
            n[0] = a, n[1] = s
        }, t
    }(), Dw = [], Aw = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.notClear = !0, e.incremental = !0, e._displayables = [], e._temporaryDisplayables = [], e._cursor = 0, e
        }

        return e(n, t), n.prototype.traverse = function (t, e) {
            t.call(e, this)
        }, n.prototype.useStyle = function () {
            this.style = {}
        }, n.prototype.getCursor = function () {
            return this._cursor
        }, n.prototype.innerAfterBrush = function () {
            this._cursor = this._displayables.length
        }, n.prototype.clearDisplaybles = function () {
            this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.markRedraw(), this.notClear = !1
        }, n.prototype.clearTemporalDisplayables = function () {
            this._temporaryDisplayables = []
        }, n.prototype.addDisplayable = function (t, e) {
            e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.markRedraw()
        }, n.prototype.addDisplayables = function (t, e) {
            e = e || !1;
            for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e)
        }, n.prototype.getDisplayables = function () {
            return this._displayables
        }, n.prototype.getTemporalDisplayables = function () {
            return this._temporaryDisplayables
        }, n.prototype.eachPendingDisplayable = function (t) {
            for (var e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
            for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
        }, n.prototype.update = function () {
            this.updateTransform();
            for (var t = this._cursor; t < this._displayables.length; t++) {
                var e = this._displayables[t];
                e.parent = this, e.update(), e.parent = null
            }
            for (var t = 0; t < this._temporaryDisplayables.length; t++) {
                var e = this._temporaryDisplayables[t];
                e.parent = this, e.update(), e.parent = null
            }
        }, n.prototype.getBoundingRect = function () {
            if (!this._rect) {
                for (var t = new Wv(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                    var n = this._displayables[e], i = n.getBoundingRect().clone();
                    n.needLocalTransform() && i.applyTransform(n.getLocalTransform(Dw)), t.union(i)
                }
                this._rect = t
            }
            return this._rect
        }, n.prototype.contain = function (t, e) {
            var n = this.transformCoordToLocal(t, e), i = this.getBoundingRect();
            if (i.contain(n[0], n[1])) for (var r = 0; r < this._displayables.length; r++) {
                var o = this._displayables[r];
                if (o.contain(t, e)) return !0
            }
            return !1
        }, n
    }(Jm), kw = Math.max, Lw = Math.min, Pw = {}, Ow = La, Rw = Pa, Bw = Io;
    Ga("circle", Gx), Ga("ellipse", Yx), Ga("sector", rw), Ga("ring", aw), Ga("polygon", lw), Ga("polyline", hw), Ga("rect", rx), Ga("line", fw), Ga("bezierCurve", yw), Ga("arc", mw);
    var Ew = (Object.freeze || Object)({
            extendShape: Ha,
            extendPath: Wa,
            registerShape: Ga,
            getShapeClass: Ua,
            makePath: Ya,
            makeImage: Xa,
            mergePath: Rw,
            resizePath: qa,
            subPixelOptimizeLine: Za,
            subPixelOptimizeRect: Ka,
            subPixelOptimize: Bw,
            updateProps: Qa,
            initProps: Ja,
            removeElement: ts,
            removeElementWithFadeOut: ns,
            isElementRemoved: is,
            getTransform: rs,
            applyTransform: os,
            transformDirection: as,
            groupTransition: us,
            clipPointsByRect: hs,
            clipRectByRect: cs,
            createIcon: ps,
            linePolygonIntersect: fs,
            lineLineIntersect: ds,
            Group: wm,
            Image: tx,
            Text: lx,
            Circle: Gx,
            Ellipse: Yx,
            Sector: rw,
            Ring: aw,
            Polygon: lw,
            Polyline: hw,
            Rect: rx,
            Line: fw,
            BezierCurve: yw,
            Arc: mw,
            IncrementalDisplayable: Aw,
            CompoundPath: _w,
            LinearGradient: ww,
            RadialGradient: bw,
            BoundingRect: Wv,
            OrientedBoundingRect: Iw,
            Point: Ov,
            Path: Z_
        }), zw = {},
        Nw = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY"],
        Fw = ["align", "lineHeight", "width", "height", "tag", "verticalAlign"],
        Vw = ["padding", "borderWidth", "borderRadius", "borderDashOffset", "backgroundColor", "borderColor", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"],
        Hw = or(), Ww = ["textStyle", "color"], Gw = new lx, Uw = function () {
            function t() {
            }

            return t.prototype.getTextColor = function (t) {
                var e = this.ecModel;
                return this.getShallow("color") || (!t && e ? e.get(Ww) : null)
            }, t.prototype.getFont = function () {
                return Cs({
                    fontStyle: this.getShallow("fontStyle"),
                    fontWeight: this.getShallow("fontWeight"),
                    fontSize: this.getShallow("fontSize"),
                    fontFamily: this.getShallow("fontFamily")
                }, this.ecModel)
            }, t.prototype.getTextRect = function (t) {
                return Gw.useStyle({
                    text: t,
                    fontStyle: this.getShallow("fontStyle"),
                    fontWeight: this.getShallow("fontWeight"),
                    fontSize: this.getShallow("fontSize"),
                    fontFamily: this.getShallow("fontFamily"),
                    verticalAlign: this.getShallow("verticalAlign") || this.getShallow("baseline"),
                    padding: this.getShallow("padding"),
                    lineHeight: this.getShallow("lineHeight"),
                    rich: this.getShallow("rich")
                }), Gw.update(), Gw.getBoundingRect()
            }, t
        }(),
        Yw = [["lineWidth", "width"], ["stroke", "color"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["lineDash", "type"], ["lineDashOffset", "dashOffset"], ["lineCap", "cap"], ["lineJoin", "join"], ["miterLimit"]],
        Xw = br(Yw), jw = function () {
            function t() {
            }

            return t.prototype.getLineStyle = function (t) {
                return Xw(this, t)
            }, t
        }(),
        qw = [["fill", "color"], ["stroke", "borderColor"], ["lineWidth", "borderWidth"], ["opacity"], ["shadowBlur"], ["shadowOffsetX"], ["shadowOffsetY"], ["shadowColor"], ["lineDash", "borderType"], ["lineDashOffset", "borderDashOffset"], ["lineCap", "borderCap"], ["lineJoin", "borderJoin"], ["miterLimit", "borderMiterLimit"]],
        Zw = br(qw), Kw = function () {
            function t() {
            }

            return t.prototype.getItemStyle = function (t, e) {
                return Zw(this, t, e)
            }, t
        }(), $w = function () {
            function t(t, e, n) {
                this.parentModel = e, this.ecModel = n, this.option = t
            }

            return t.prototype.init = function () {
                for (var t = [], e = 3; e < arguments.length; e++) t[e - 3] = arguments[e]
            }, t.prototype.mergeOption = function (t) {
                l(this.option, t, !0)
            }, t.prototype.get = function (t, e) {
                return null == t ? this.option : this._doGet(this.parsePath(t), !e && this.parentModel)
            }, t.prototype.getShallow = function (t, e) {
                var n = this.option, i = null == n ? n : n[t];
                if (null == i && !e) {
                    var r = this.parentModel;
                    r && (i = r.getShallow(t))
                }
                return i
            }, t.prototype.getModel = function (e, n) {
                var i = null != e, r = i ? this.parsePath(e) : null, o = i ? this._doGet(r) : this.option;
                return n = n || this.parentModel && this.parentModel.getModel(this.resolveParentPath(r)), new t(o, n, this.ecModel)
            }, t.prototype.isEmpty = function () {
                return null == this.option
            }, t.prototype.restoreData = function () {
            }, t.prototype.clone = function () {
                var t = this.constructor;
                return new t(s(this.option))
            }, t.prototype.parsePath = function (t) {
                return "string" == typeof t ? t.split(".") : t
            }, t.prototype.resolveParentPath = function (t) {
                return t
            }, t.prototype.isAnimationEnabled = function () {
                if (!by.node && this.option) {
                    if (null != this.option.animation) return !!this.option.animation;
                    if (this.parentModel) return this.parentModel.isAnimationEnabled()
                }
            }, t.prototype._doGet = function (t, e) {
                var n = this.option;
                if (!t) return n;
                for (var i = 0; i < t.length && (!t[i] || (n = n && "object" == typeof n ? n[t[i]] : null, null != n)); i++) ;
                return null == n && e && (n = e._doGet(this.resolveParentPath(t), e.parentModel)), n
            }, t
        }();
    gr($w), mr($w), d($w, jw), d($w, Kw), d($w, Wm), d($w, Uw);
    var Qw = Math.round(10 * Math.random()), Jw = {
        time: {
            month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthAbbr: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayOfWeekAbbr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
        },
        legend: {selector: {all: "All", inverse: "Inv"}},
        toolbox: {
            brush: {
                title: {
                    rect: "Box Select",
                    polygon: "Lasso Select",
                    lineX: "Horizontally Select",
                    lineY: "Vertically Select",
                    keep: "Keep Selections",
                    clear: "Clear Selections"
                }
            },
            dataView: {title: "Data View", lang: ["Data View", "Close", "Refresh"]},
            dataZoom: {title: {zoom: "Zoom", back: "Zoom Reset"}},
            magicType: {
                title: {
                    line: "Switch to Line Chart",
                    bar: "Switch to Bar Chart",
                    stack: "Stack",
                    tiled: "Tile"
                }
            },
            restore: {title: "Restore"},
            saveAsImage: {title: "Save as Image", lang: ["Right Click to Save Image"]}
        },
        series: {
            typeNames: {
                pie: "Pie chart",
                bar: "Bar chart",
                line: "Line chart",
                scatter: "Scatter plot",
                effectScatter: "Ripple scatter plot",
                radar: "Radar chart",
                tree: "Tree",
                treemap: "Treemap",
                boxplot: "Boxplot",
                candlestick: "Candlestick",
                k: "K line chart",
                heatmap: "Heat map",
                map: "Map",
                parallel: "Parallel coordinate map",
                lines: "Line graph",
                graph: "Relationship graph",
                sankey: "Sankey diagram",
                funnel: "Funnel chart",
                gauge: "Guage",
                pictorialBar: "Pictorial bar",
                themeRiver: "Theme River Map",
                sunburst: "Sunburst"
            }
        },
        aria: {
            general: {withTitle: 'This is a chart about "{title}"', withoutTitle: "This is a chart"},
            series: {
                single: {
                    prefix: "",
                    withName: " with type {seriesType} named {seriesName}.",
                    withoutName: " with type {seriesType}."
                },
                multiple: {
                    prefix: ". It consists of {seriesCount} series count.",
                    withName: " The {seriesId} series is a {seriesType} representing {seriesName}.",
                    withoutName: " The {seriesId} series is a {seriesType}.",
                    separator: {middle: "", end: ""}
                }
            },
            data: {
                allData: "The data is as follows: ",
                partialData: "The first {displayCnt} items are: ",
                withName: "the data for {name} is {value}",
                withoutName: "{value}",
                separator: {middle: ", ", end: ". "}
            }
        }
    }, tb = {
        time: {
            month: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
            monthAbbr: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"],
            dayOfWeek: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
            dayOfWeekAbbr: ["日", "一", "二", "三", "四", "五", "六"]
        },
        legend: {selector: {all: "全选", inverse: "反选"}},
        toolbox: {
            brush: {
                title: {
                    rect: "矩形选择",
                    polygon: "圈选",
                    lineX: "横向选择",
                    lineY: "纵向选择",
                    keep: "保持选择",
                    clear: "清除选择"
                }
            },
            dataView: {title: "数据视图", lang: ["数据视图", "关闭", "刷新"]},
            dataZoom: {title: {zoom: "区域缩放", back: "区域缩放还原"}},
            magicType: {title: {line: "切换为折线图", bar: "切换为柱状图", stack: "切换为堆叠", tiled: "切换为平铺"}},
            restore: {title: "还原"},
            saveAsImage: {title: "保存为图片", lang: ["右键另存为图片"]}
        },
        series: {
            typeNames: {
                pie: "饼图",
                bar: "柱状图",
                line: "折线图",
                scatter: "散点图",
                effectScatter: "涟漪散点图",
                radar: "雷达图",
                tree: "树图",
                treemap: "矩形树图",
                boxplot: "箱型图",
                candlestick: "K线图",
                k: "K线图",
                heatmap: "热力图",
                map: "地图",
                parallel: "平行坐标图",
                lines: "线图",
                graph: "关系图",
                sankey: "桑基图",
                funnel: "漏斗图",
                gauge: "仪表盘图",
                pictorialBar: "象形柱图",
                themeRiver: "主题河流图",
                sunburst: "旭日图"
            }
        },
        aria: {
            general: {withTitle: "这是一个关于“{title}”的图表。", withoutTitle: "这是一个图表，"},
            series: {
                single: {
                    prefix: "",
                    withName: "图表类型是{seriesType}，表示{seriesName}。",
                    withoutName: "图表类型是{seriesType}。"
                },
                multiple: {
                    prefix: "它由{seriesCount}个图表系列组成。",
                    withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
                    withoutName: "第{seriesId}个系列是一个{seriesType}，",
                    separator: {middle: "；", end: "。"}
                }
            },
            data: {
                allData: "其数据是——",
                partialData: "其中，前{displayCnt}项是——",
                withName: "{name}的数据是{value}",
                withoutName: "{value}",
                separator: {middle: "，", end: ""}
            }
        }
    }, eb = "ZH", nb = "EN", ib = nb, rb = {}, ob = {}, ab = by.domSupported ? function () {
        var t = (document.documentElement.lang || navigator.language || navigator.browserLanguage).toUpperCase();
        return t.indexOf(eb) > -1 ? eb : ib
    }() : ib;
    Os(nb, Jw), Os(eb, tb);
    var sb = 1e3, lb = 60 * sb, ub = 60 * lb, hb = 24 * ub, cb = 365 * hb, pb = {
            year: "{yyyy}",
            month: "{MMM}",
            day: "{d}",
            hour: "{HH}:{mm}",
            minute: "{HH}:{mm}",
            second: "{HH}:{mm}:{ss}",
            millisecond: "{hh}:{mm}:{ss} {SSS}",
            none: "{yyyy}-{MM}-{dd} {hh}:{mm}:{ss} {SSS}"
        }, fb = "{yyyy}-{MM}-{dd}", db = {
            year: "{yyyy}",
            month: "{yyyy}-{MM}",
            day: fb,
            hour: fb + " " + pb.hour,
            minute: fb + " " + pb.minute,
            second: fb + " " + pb.second,
            millisecond: pb.none
        }, gb = ["year", "month", "day", "hour", "minute", "second", "millisecond"],
        yb = ["year", "half-year", "quarter", "month", "week", "half-week", "day", "half-day", "quarter-day", "hour", "minute", "second", "millisecond"],
        vb = H, mb = /([&<>"'])/g, _b = {"&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"},
        xb = ["a", "b", "c", "d", "e", "f", "g"], wb = function (t, e) {
            return "{" + t + (null == e ? "" : e) + "}"
        }, bb = y, Sb = ["left", "right", "top", "bottom", "width", "height"],
        Tb = [["width", "left", "right"], ["height", "top", "bottom"]], Mb = yl,
        Cb = (S(yl, "vertical"), S(yl, "horizontal"), or()), Ib = function (t) {
            function n(e, n, i) {
                var r = t.call(this, e, n, i) || this;
                return r.uid = As("ec_cpt_model"), r
            }

            return e(n, t), n.prototype.init = function (t, e, n) {
                this.mergeDefaultAndTheme(t, n)
            }, n.prototype.mergeDefaultAndTheme = function (t, e) {
                var n = ml(this), i = n ? xl(t) : {}, r = e.getTheme();
                l(t, r.get(this.mainType)), l(t, this.getDefaultOption()), n && _l(t, i, n)
            }, n.prototype.mergeOption = function (t) {
                l(this.option, t, !0);
                var e = ml(this);
                e && _l(this.option, t, e)
            }, n.prototype.optionUpdated = function () {
            }, n.prototype.getDefaultOption = function () {
                var t = this.constructor;
                if (!dr(t)) return t.defaultOption;
                var e = Cb(this);
                if (!e.defaultOption) {
                    for (var n = [], i = t; i;) {
                        var r = i.prototype.defaultOption;
                        r && n.push(r), i = i.superClass
                    }
                    for (var o = {}, a = n.length - 1; a >= 0; a--) o = l(o, n[a], !0);
                    e.defaultOption = o
                }
                return e.defaultOption
            }, n.prototype.getReferringComponents = function (t, e) {
                var n = t + "Index", i = t + "Id";
                return sr(this.ecModel, t, {index: this.get(n, !0), id: this.get(i, !0)}, e)
            }, n.prototype.getBoxLayoutParams = function () {
                var t = this;
                return {
                    left: t.get("left"),
                    top: t.get("top"),
                    right: t.get("right"),
                    bottom: t.get("bottom"),
                    width: t.get("width"),
                    height: t.get("height")
                }
            }, n.protoInitialize = function () {
                var t = n.prototype;
                t.type = "component", t.id = "", t.name = "", t.mainType = "", t.subType = "", t.componentIndex = 0
            }(), n
        }($w);
    vr(Ib, $w), wr(Ib), ks(Ib), Ls(Ib, bl);
    var Db = "";
    "undefined" != typeof navigator && (Db = navigator.platform || "");
    var Ab, kb, Lb = "rgba(0, 0, 0, 0.2)", Pb = {
            darkMode: "auto",
            color: ["#5470c6", "#91cc75", "#fac858", "#ee6666", "#73c0de", "#3ba272", "#fc8452", "#9a60b4", "#ea7ccc"],
            gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
            aria: {
                decal: {
                    decals: [{
                        color: Lb,
                        dashArrayX: [1, 0],
                        dashArrayY: [2, 5],
                        symbolSize: 1,
                        rotation: Math.PI / 6
                    }, {
                        color: Lb,
                        symbol: "circle",
                        dashArrayX: [[8, 8], [0, 8, 8, 0]],
                        dashArrayY: [6, 0],
                        symbolSize: .8
                    }, {color: Lb, dashArrayX: [1, 0], dashArrayY: [4, 3], rotation: -Math.PI / 4}, {
                        color: Lb,
                        dashArrayX: [[6, 6], [0, 6, 6, 0]],
                        dashArrayY: [6, 0]
                    }, {
                        color: Lb,
                        dashArrayX: [[1, 0], [1, 6]],
                        dashArrayY: [1, 0, 6, 0],
                        rotation: Math.PI / 4
                    }, {
                        color: Lb,
                        symbol: "triangle",
                        dashArrayX: [[9, 9], [0, 9, 9, 0]],
                        dashArrayY: [7, 2],
                        symbolSize: .75
                    }]
                }
            },
            textStyle: {
                fontFamily: Db.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: "normal"
            },
            blendMode: null,
            stateAnimation: {duration: 300, easing: "cubicOut"},
            animation: "auto",
            animationDuration: 1e3,
            animationDurationUpdate: 500,
            animationEasing: "cubicInOut",
            animationEasingUpdate: "cubicInOut",
            animationThreshold: 2e3,
            progressiveThreshold: 3e3,
            progressive: 400,
            hoverLayerThreshold: 3e3,
            useUTC: !1
        }, Ob = X(["tooltip", "label", "itemName", "itemId", "seriesName"]), Rb = "original", Bb = "arrayRows",
        Eb = "objectRows", zb = "keyedColumns", Nb = "typedArray", Fb = "unknown", Vb = "column", Hb = "row",
        Wb = {Must: 1, Might: 2, Not: 3}, Gb = or(), Ub = X(), Yb = or(), Xb = (or(), function () {
            function t() {
            }

            return t.prototype.getColorFromPalette = function (t, e, n) {
                var i = Vi(this.get("color", !0)), r = this.get("colorLayer", !0);
                return Pl(this, Yb, i, r, t, e, n)
            }, t.prototype.clearColorPalette = function () {
                Ol(this, Yb)
            }, t
        }()), jb = "\x00_ec_inner", qb = 1, Zb = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return e(n, t), n.prototype.init = function (t, e, n, i, r, o) {
                i = i || {}, this.option = null, this._theme = new $w(i), this._locale = new $w(r), this._optionManager = o
            }, n.prototype.setOption = function (t, e, n) {
                var i = Nl(e);
                this._optionManager.setOption(t, n, i), this._resetOption(null, i)
            }, n.prototype.resetOption = function (t, e) {
                return this._resetOption(t, Nl(e))
            }, n.prototype._resetOption = function (t, e) {
                var n = !1, i = this._optionManager;
                if (!t || "recreate" === t) {
                    var r = i.mountOption("recreate" === t);
                    this.option && "recreate" !== t ? (this.restoreData(), this._mergeOption(r, e)) : kb(this, r), n = !0
                }
                if (("timeline" === t || "media" === t) && this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                    var o = i.getTimelineOption(this);
                    o && (n = !0, this._mergeOption(o, e))
                }
                if (!t || "recreate" === t || "media" === t) {
                    var a = i.getMediaOption(this);
                    a.length && y(a, function (t) {
                        n = !0, this._mergeOption(t, e)
                    }, this)
                }
                return n
            }, n.prototype.mergeOption = function (t) {
                this._mergeOption(t, null)
            }, n.prototype._mergeOption = function (t, e) {
                function n(e) {
                    var n = kl(this, e, Vi(t[e])), a = r.get(e),
                        s = a ? c && c.get(e) ? "replaceMerge" : "normalMerge" : "replaceAll", l = Ui(a, n, s);
                    nr(l, e, Ib), i[e] = null, r.set(e, null), o.set(e, 0);
                    var u = [], p = [], f = 0;
                    y(l, function (t, n) {
                        var i = t.existing, r = t.newOption;
                        if (r) {
                            var o = Ib.getClass(e, t.keyInfo.subType, !0);
                            if (i && i.constructor === o) i.name = t.keyInfo.name, i.mergeOption(r, this), i.optionUpdated(r, !1); else {
                                var a = h({componentIndex: n}, t.keyInfo);
                                i = new o(r, this, this, a), h(i, a), t.brandNew && (i.__requireNewView = !0), i.init(r, this, this), i.optionUpdated(null, !0)
                            }
                        } else i && (i.mergeOption({}, this), i.optionUpdated({}, !1));
                        i ? (u.push(i.option), p.push(i), f++) : (u.push(void 0), p.push(void 0))
                    }, this), i[e] = u, r.set(e, p), o.set(e, f), "series" === e && Ab(this)
                }

                var i = this.option, r = this._componentsMap, o = this._componentsCount, a = [], u = X(),
                    c = e && e.replaceMergeMainTypeMap;
                Sl(this), y(t, function (t, e) {
                    null != t && (Ib.hasClass(e) ? e && (a.push(e), u.set(e, !0)) : i[e] = null == i[e] ? s(t) : l(i[e], t, !0))
                }), c && c.each(function (t, e) {
                    Ib.hasClass(e) && !u.get(e) && (a.push(e), u.set(e, !0))
                }), Ib.topologicalTravel(a, Ib.getAllClassMainTypes(), n, this), this._seriesIndices || Ab(this)
            }, n.prototype.getOption = function () {
                var t = s(this.option);
                return y(t, function (e, n) {
                    if (Ib.hasClass(n)) {
                        for (var i = Vi(e), r = i.length, o = !1, a = r - 1; a >= 0; a--) i[a] && !er(i[a]) ? o = !0 : (i[a] = null, !o && r--);
                        i.length = r, t[n] = i
                    }
                }), delete t[jb], t
            }, n.prototype.getTheme = function () {
                return this._theme
            }, n.prototype.getLocaleModel = function () {
                return this._locale
            }, n.prototype.getLocale = function (t) {
                var e = this.getLocaleModel();
                return e.get(t)
            }, n.prototype.setUpdatePayload = function (t) {
                this._payload = t
            }, n.prototype.getUpdatePayload = function () {
                return this._payload
            }, n.prototype.getComponent = function (t, e) {
                var n = this._componentsMap.get(t);
                if (n) {
                    var i = n[e || 0];
                    if (i) return i;
                    if (null == e) for (var r = 0; r < n.length; r++) if (n[r]) return n[r]
                }
            }, n.prototype.queryComponents = function (t) {
                var e = t.mainType;
                if (!e) return [];
                var n = t.index, i = t.id, r = t.name, o = this._componentsMap.get(e);
                if (!o || !o.length) return [];
                var a;
                return null != n ? (a = [], y(Vi(n), function (t) {
                    o[t] && a.push(o[t])
                })) : a = null != i ? El("id", i, o) : null != r ? El("name", r, o) : _(o, function (t) {
                    return !!t
                }), zl(a, t)
            }, n.prototype.findComponents = function (t) {
                function e(t) {
                    var e = r + "Index", n = r + "Id", i = r + "Name";
                    return !t || null == t[e] && null == t[n] && null == t[i] ? null : {
                        mainType: r,
                        index: t[e],
                        id: t[n],
                        name: t[i]
                    }
                }

                function n(e) {
                    return t.filter ? _(e, t.filter) : e
                }

                var i = t.query, r = t.mainType, o = e(i),
                    a = o ? this.queryComponents(o) : _(this._componentsMap.get(r), function (t) {
                        return !!t
                    });
                return n(zl(a, t))
            }, n.prototype.eachComponent = function (t, e, n) {
                var i = this._componentsMap;
                if (M(t)) {
                    var r = e, o = t;
                    i.each(function (t, e) {
                        for (var n = 0; t && n < t.length; n++) {
                            var i = t[n];
                            i && o.call(r, e, i, i.componentIndex)
                        }
                    })
                } else for (var a = C(t) ? i.get(t) : A(t) ? this.findComponents(t) : null, s = 0; a && s < a.length; s++) {
                    var l = a[s];
                    l && e.call(n, l, l.componentIndex)
                }
            }, n.prototype.getSeriesByName = function (t) {
                var e = Ji(t, null);
                return _(this._componentsMap.get("series"), function (t) {
                    return !!t && null != e && t.name === e
                })
            }, n.prototype.getSeriesByIndex = function (t) {
                return this._componentsMap.get("series")[t]
            }, n.prototype.getSeriesByType = function (t) {
                return _(this._componentsMap.get("series"), function (e) {
                    return !!e && e.subType === t
                })
            }, n.prototype.getSeries = function () {
                return _(this._componentsMap.get("series").slice(), function (t) {
                    return !!t
                })
            }, n.prototype.getSeriesCount = function () {
                return this._componentsCount.get("series")
            }, n.prototype.eachSeries = function (t, e) {
                y(this._seriesIndices, function (n) {
                    var i = this._componentsMap.get("series")[n];
                    t.call(e, i, n)
                }, this)
            }, n.prototype.eachRawSeries = function (t, e) {
                y(this._componentsMap.get("series"), function (n) {
                    n && t.call(e, n, n.componentIndex)
                })
            }, n.prototype.eachSeriesByType = function (t, e, n) {
                y(this._seriesIndices, function (i) {
                    var r = this._componentsMap.get("series")[i];
                    r.subType === t && e.call(n, r, i)
                }, this)
            }, n.prototype.eachRawSeriesByType = function (t, e, n) {
                return y(this.getSeriesByType(t), e, n)
            }, n.prototype.isSeriesFiltered = function (t) {
                return null == this._seriesIndicesMap.get(t.componentIndex)
            }, n.prototype.getCurrentSeriesIndices = function () {
                return (this._seriesIndices || []).slice()
            }, n.prototype.filterSeries = function (t, e) {
                var n = [];
                y(this._seriesIndices, function (i) {
                    var r = this._componentsMap.get("series")[i];
                    t.call(e, r, i) && n.push(i)
                }, this), this._seriesIndices = n, this._seriesIndicesMap = X(n)
            }, n.prototype.restoreData = function (t) {
                Ab(this);
                var e = this._componentsMap, n = [];
                e.each(function (t, e) {
                    Ib.hasClass(e) && n.push(e)
                }), Ib.topologicalTravel(n, Ib.getAllClassMainTypes(), function (n) {
                    y(e.get(n), function (e) {
                        !e || "series" === n && Rl(e, t) || e.restoreData()
                    })
                })
            }, n.internalField = function () {
                Ab = function (t) {
                    var e = t._seriesIndices = [];
                    y(t._componentsMap.get("series"), function (t) {
                        t && e.push(t.componentIndex)
                    }), t._seriesIndicesMap = X(e)
                }, kb = function (t, e) {
                    t.option = {}, t.option[jb] = qb, t._componentsMap = X({series: []}), t._componentsCount = X();
                    var n = e.aria;
                    A(n) && null == n.enabled && (n.enabled = !0), Bl(e, t._theme.option), l(e, Pb, !1), t._mergeOption(e, null)
                }
            }(), n
        }($w);
    d(Zb, Xb);
    var Kb, $b, Qb, Jb, tS,
        eS = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getOption", "getId", "updateLabelLayout"],
        nS = function () {
            function t(t) {
                y(eS, function (e) {
                    this[e] = Ey(t[e], t)
                }, this)
            }

            return t
        }(), iS = {}, rS = function () {
            function t() {
                this._coordinateSystems = []
            }

            return t.prototype.create = function (t, e) {
                var n = [];
                y(iS, function (i) {
                    var r = i.create(t, e);
                    n = n.concat(r || [])
                }), this._coordinateSystems = n
            }, t.prototype.update = function (t, e) {
                y(this._coordinateSystems, function (n) {
                    n.update && n.update(t, e)
                })
            }, t.prototype.getCoordinateSystems = function () {
                return this._coordinateSystems.slice()
            }, t.register = function (t, e) {
                iS[t] = e
            }, t.get = function (t) {
                return iS[t]
            }, t
        }(), oS = /^(min|max)?(.+)$/, aS = function () {
            function t(t) {
                this._timelineOptions = [], this._mediaList = [], this._currentMediaIndices = [], this._api = t
            }

            return t.prototype.setOption = function (t, e) {
                t && (y(Vi(t.series), function (t) {
                    t && t.data && L(t.data) && U(t.data)
                }), y(Vi(t.dataset), function (t) {
                    t && t.source && L(t.source) && U(t.source)
                })), t = s(t);
                var n = this._optionBackup, i = Fl(t, e, !n);
                this._newBaseOption = i.baseOption, n ? (i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i
            }, t.prototype.mountOption = function (t) {
                var e = this._optionBackup;
                return this._timelineOptions = e.timelineOptions, this._mediaList = e.mediaList, this._mediaDefault = e.mediaDefault, this._currentMediaIndices = [], s(t ? e.baseOption : this._newBaseOption)
            }, t.prototype.getTimelineOption = function (t) {
                var e, n = this._timelineOptions;
                if (n.length) {
                    var i = t.getComponent("timeline");
                    i && (e = s(n[i.getCurrentIndex()]))
                }
                return e
            }, t.prototype.getMediaOption = function () {
                var t = this._api.getWidth(), e = this._api.getHeight(), n = this._mediaList, i = this._mediaDefault,
                    r = [], o = [];
                if (!n.length && !i) return o;
                for (var a = 0, l = n.length; l > a; a++) Vl(n[a].query, t, e) && r.push(a);
                return !r.length && i && (r = [-1]), r.length && !Wl(r, this._currentMediaIndices) && (o = v(r, function (t) {
                    return s(-1 === t ? i.option : n[t].option)
                })), this._currentMediaIndices = r, o
            }, t
        }(), sS = y, lS = A, uS = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
        hS = [["x", "left"], ["y", "top"], ["x2", "right"], ["y2", "bottom"]],
        cS = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
        pS = [["borderRadius", "barBorderRadius"], ["borderColor", "barBorderColor"], ["borderWidth", "barBorderWidth"]],
        fS = function () {
            function t(t) {
                this.data = t.data || (t.sourceFormat === zb ? {} : []), this.sourceFormat = t.sourceFormat || Fb, this.seriesLayoutBy = t.seriesLayoutBy || Vb, this.startIndex = t.startIndex || 0, this.dimensionsDefine = t.dimensionsDefine, this.dimensionsDetectedCount = t.dimensionsDetectedCount, this.encodeDefine = t.encodeDefine, this.metaRawOption = t.metaRawOption
            }

            return t
        }(), dS = function () {
            function t(t, e) {
                var n = uu(t) ? t : cu(t);
                this._source = n;
                var i = this._data = n.data;
                n.sourceFormat === Nb && (this._offset = 0, this._dimSize = e, this._data = i), tS(this, i, n)
            }

            return t.prototype.getSource = function () {
                return this._source
            }, t.prototype.count = function () {
                return 0
            }, t.prototype.getItem = function () {
            }, t.prototype.appendData = function () {
            }, t.prototype.clean = function () {
            }, t.protoInitialize = function () {
                var e = t.prototype;
                e.pure = !1, e.persistent = !0
            }(), t.internalField = function () {
                function t(t) {
                    for (var e = 0; e < t.length; e++) this._data.push(t[e])
                }

                var e;
                tS = function (t, e, o) {
                    var a = o.sourceFormat, s = o.seriesLayoutBy, l = o.startIndex, u = o.dimensionsDefine,
                        c = Jb[bu(a, s)];
                    if (h(t, c), a === Nb) t.getItem = n, t.count = r, t.fillStorage = i; else {
                        var p = _u(a, s);
                        t.getItem = Ey(p, null, e, l, u);
                        var f = xu(a, s);
                        t.count = Ey(f, null, e, l, u)
                    }
                };
                var n = function (t, e) {
                    t -= this._offset, e = e || [];
                    for (var n = this._data, i = this._dimSize, r = i * t, o = 0; i > o; o++) e[o] = n[r + o];
                    return e
                }, i = function (t, e, n, i) {
                    for (var r = this._data, o = this._dimSize, a = 0; o > a; a++) {
                        for (var s = i[a], l = null == s[0] ? 1 / 0 : s[0], u = null == s[1] ? -1 / 0 : s[1], h = e - t, c = n[a], p = 0; h > p; p++) {
                            var f = r[p * o + a];
                            c[t + p] = f, l > f && (l = f), f > u && (u = f)
                        }
                        s[0] = l, s[1] = u
                    }
                }, r = function () {
                    return this._data ? this._data.length / this._dimSize : 0
                };
                e = {}, e[Bb + "_" + Vb] = {pure: !0, appendData: t}, e[Bb + "_" + Hb] = {
                    pure: !0,
                    appendData: function () {
                        throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
                    }
                }, e[Eb] = {pure: !0, appendData: t}, e[zb] = {
                    pure: !0, appendData: function (t) {
                        var e = this._data;
                        y(t, function (t, n) {
                            for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r])
                        })
                    }
                }, e[Rb] = {appendData: t}, e[Nb] = {
                    persistent: !1, pure: !0, appendData: function (t) {
                        this._data = t
                    }, clean: function () {
                        this._offset += this.count(), this._data = null
                    }
                }, Jb = e
            }(), t
        }(), gS = function (t, e, n, i) {
            return t[i]
        }, yS = (Kb = {}, Kb[Bb + "_" + Vb] = function (t, e, n, i) {
            return t[i + e]
        }, Kb[Bb + "_" + Hb] = function (t, e, n, i) {
            i += e;
            for (var r = [], o = t, a = 0; a < o.length; a++) {
                var s = o[a];
                r.push(s ? s[i] : null)
            }
            return r
        }, Kb[Eb] = gS, Kb[zb] = function (t, e, n, i) {
            for (var r = [], o = 0; o < n.length; o++) {
                var a = n[o].name, s = t[a];
                r.push(s ? s[i] : null)
            }
            return r
        }, Kb[Rb] = gS, Kb), vS = function (t) {
            return t.length
        }, mS = ($b = {}, $b[Bb + "_" + Vb] = function (t, e) {
            return Math.max(0, t.length - e)
        }, $b[Bb + "_" + Hb] = function (t, e) {
            var n = t[0];
            return n ? Math.max(0, n.length - e) : 0
        }, $b[Eb] = vS, $b[zb] = function (t, e, n) {
            var i = n[0].name, r = t[i];
            return r ? r.length : 0
        }, $b[Rb] = vS, $b), _S = function (t, e) {
            return null != e ? t[e] : t
        }, xS = (Qb = {}, Qb[Bb] = _S, Qb[Eb] = function (t, e, n) {
            return null != e ? t[n] : t
        }, Qb[zb] = _S, Qb[Rb] = function (t, e) {
            var n = Wi(t);
            return null != e && n instanceof Array ? n[e] : n
        }, Qb[Nb] = _S, Qb), wS = /\{@(.+?)\}/g, bS = function () {
            function t() {
            }

            return t.prototype.getDataParams = function (t, e) {
                var n = this.getData(e), i = this.getRawValue(t, e), r = n.getRawIndex(t), o = n.getName(t),
                    a = n.getRawDataItem(t), s = n.getItemVisual(t, "style"),
                    l = s && s[n.getItemVisual(t, "drawType") || "fill"], u = s && s.stroke, h = this.mainType,
                    c = "series" === h, p = n.userOutput;
                return {
                    componentType: h,
                    componentSubType: this.subType,
                    componentIndex: this.componentIndex,
                    seriesType: c ? this.subType : null,
                    seriesIndex: this.seriesIndex,
                    seriesId: c ? this.id : null,
                    seriesName: c ? this.name : null,
                    name: o,
                    dataIndex: r,
                    data: a,
                    dataType: e,
                    value: i,
                    color: l,
                    borderColor: u,
                    dimensionNames: p ? p.dimensionNames : null,
                    encode: p ? p.encode : null,
                    $vars: ["seriesName", "name", "value"]
                }
            }, t.prototype.getFormattedLabel = function (t, e, n, i, r, o) {
                e = e || "normal";
                var a = this.getData(n), s = this.getDataParams(t, n);
                if (o && (s.value = o.interpolatedValue), null != i && T(s.value) && (s.value = s.value[i]), !r) {
                    var l = a.getItemModel(t);
                    r = l.get("normal" === e ? ["label", "formatter"] : [e, "label", "formatter"])
                }
                if ("function" == typeof r) return s.status = e, s.dimensionIndex = i, r(s);
                if ("string" == typeof r) {
                    var u = hl(r, s);
                    return u.replace(wS, function (e, n) {
                        var i = n.length, r = "[" === n.charAt(0) && "]" === n.charAt(i - 1) ? +n.slice(1, i - 1) : n,
                            s = Su(a, t, r);
                        if (o && T(o.interpolatedValue)) {
                            var l = a.getDimensionInfo(r);
                            l && (s = o.interpolatedValue[l.index])
                        }
                        return null != s ? s + "" : ""
                    })
                }
            }, t.prototype.getRawValue = function (t, e) {
                return Su(this.getData(e), t)
            }, t.prototype.formatTooltip = function () {
            }, t
        }(), SS = function () {
            function t(t) {
                t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0
            }

            return t.prototype.perform = function (t) {
                function e(t) {
                    return !(t >= 1) && (t = 1), t
                }

                var n = this._upstream, i = t && t.skip;
                if (this._dirty && n) {
                    var r = this.context;
                    r.data = r.outputData = n.context.outputData
                }
                this.__pipeline && (this.__pipeline.currentTask = this);
                var o;
                this._plan && !i && (o = this._plan(this.context));
                var a = e(this._modBy), s = this._modDataCount || 0, l = e(t && t.modBy), u = t && t.modDataCount || 0;
                (a !== l || s !== u) && (o = "reset");
                var h;
                (this._dirty || "reset" === o) && (this._dirty = !1, h = this._doReset(i)), this._modBy = l, this._modDataCount = u;
                var c = t && t.step;
                if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
                    var p = this._dueIndex, f = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
                    if (!i && (h || f > p)) {
                        var d = this._progress;
                        if (T(d)) for (var g = 0; g < d.length; g++) this._doProgress(d[g], p, f, l, u); else this._doProgress(d, p, f, l, u)
                    }
                    this._dueIndex = f;
                    var y = null != this._settedOutputEnd ? this._settedOutputEnd : f;
                    this._outputDueEnd = y
                } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
                return this.unfinished()
            }, t.prototype.dirty = function () {
                this._dirty = !0, this._onDirty && this._onDirty(this.context)
            }, t.prototype._doProgress = function (t, e, n, i, r) {
                TS.reset(e, n, i, r), this._callingProgress = t, this._callingProgress({
                    start: e,
                    end: n,
                    count: n - e,
                    next: TS.next
                }, this.context)
            }, t.prototype._doReset = function (t) {
                this._dueIndex = this._outputDueEnd = this._dueEnd = 0, this._settedOutputEnd = null;
                var e, n;
                !t && this._reset && (e = this._reset(this.context), e && e.progress && (n = e.forceFirstProgress, e = e.progress), T(e) && !e.length && (e = null)), this._progress = e, this._modBy = this._modDataCount = null;
                var i = this._downstream;
                return i && i.dirty(), n
            }, t.prototype.unfinished = function () {
                return this._progress && this._dueIndex < this._dueEnd
            }, t.prototype.pipe = function (t) {
                (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
            }, t.prototype.dispose = function () {
                this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
            }, t.prototype.getUpstream = function () {
                return this._upstream
            }, t.prototype.getDownstream = function () {
                return this._downstream
            }, t.prototype.setOutputEnd = function (t) {
                this._outputDueEnd = this._settedOutputEnd = t
            }, t
        }(), TS = function () {
            function t() {
                return n > i ? i++ : null
            }

            function e() {
                var t = i % a * r + Math.ceil(i / a), e = i >= n ? null : o > t ? t : i;
                return i++, e
            }

            var n, i, r, o, a, s = {
                reset: function (l, u, h, c) {
                    i = l, n = u, r = h, o = c, a = Math.ceil(o / r), s.next = r > 1 && o > 0 ? e : t
                }
            };
            return s
        }(), MS = (X({
            number: function (t) {
                return parseFloat(t)
            }, time: function (t) {
                return +Di(t)
            }, trim: function (t) {
                return "string" == typeof t ? G(t) : t
            }
        }), {
            lt: function (t, e) {
                return e > t
            }, lte: function (t, e) {
                return e >= t
            }, gt: function (t, e) {
                return t > e
            }, gte: function (t, e) {
                return t >= e
            }
        }), CS = (function () {
            function t(t, e) {
                if ("number" != typeof e) {
                    var n = "";
                    Fi(n)
                }
                this._opFn = MS[t], this._rvalFloat = Ri(e)
            }

            return t.prototype.evaluate = function (t) {
                return "number" == typeof t ? this._opFn(t, this._rvalFloat) : this._opFn(Ri(t), this._rvalFloat)
            }, t
        }(), function () {
            function t(t, e) {
                var n = "desc" === t;
                this._resultLT = n ? 1 : -1, null == e && (e = n ? "min" : "max"), this._incomparable = "min" === e ? -1 / 0 : 1 / 0
            }

            return t.prototype.evaluate = function (t, e) {
                var n = typeof t, i = typeof e, r = "number" === n ? t : Ri(t), o = "number" === i ? e : Ri(e),
                    a = isNaN(r), s = isNaN(o);
                if (a && (r = this._incomparable), s && (o = this._incomparable), a && s) {
                    var l = "string" === n, u = "string" === i;
                    l && (r = u ? t : 0), u && (o = l ? e : 0)
                }
                return o > r ? this._resultLT : r > o ? -this._resultLT : 0
            }, t
        }()), IS = (function () {
            function t(t, e) {
                this._rval = e, this._isEQ = t, this._rvalTypeof = typeof e, this._rvalFloat = Ri(e)
            }

            return t.prototype.evaluate = function (t) {
                var e = t === this._rval;
                if (!e) {
                    var n = typeof t;
                    n === this._rvalTypeof || "number" !== n && "number" !== this._rvalTypeof || (e = Ri(t) === this._rvalFloat)
                }
                return this._isEQ ? e : !e
            }, t
        }(), function () {
            function t() {
            }

            return t.prototype.getRawData = function () {
                throw new Error("not supported")
            }, t.prototype.getRawDataItem = function () {
                throw new Error("not supported")
            }, t.prototype.cloneRawData = function () {
            }, t.prototype.getDimensionInfo = function () {
            }, t.prototype.cloneAllDimensionInfo = function () {
            }, t.prototype.count = function () {
            }, t.prototype.retrieveValue = function () {
            }, t.prototype.retrieveValueFromItem = function () {
            }, t.prototype.convertValue = function (t, e) {
                return Cu(t, e)
            }, t
        }()), DS = X(), AS = function () {
            function t(t) {
                this._sourceList = [], this._upstreamSignList = [], this._versionSignBase = 0, this._sourceHost = t
            }

            return t.prototype.dirty = function () {
                this._setLocalSource([], [])
            }, t.prototype._setLocalSource = function (t, e) {
                this._sourceList = t, this._upstreamSignList = e, this._versionSignBase++, this._versionSignBase > 9e10 && (this._versionSignBase = 0)
            }, t.prototype._getVersionSign = function () {
                return this._sourceHost.uid + "_" + this._versionSignBase
            }, t.prototype.prepareSource = function () {
                this._isDirty() && this._createSource()
            }, t.prototype._createSource = function () {
                this._setLocalSource([], []);
                var t, e, n = this._sourceHost, i = this._getUpstreamSourceManagers(), r = !!i.length;
                if (zu(n)) {
                    var o = n, a = void 0, s = void 0, l = void 0;
                    if (r) {
                        var u = i[0];
                        u.prepareSource(), l = u.getSource(), a = l.data, s = l.sourceFormat, e = [u._getVersionSign()]
                    } else a = o.get("data", !0), s = L(a) ? Nb : Rb, e = [];
                    var h = this._getSourceMetaRawOption(), c = l ? l.metaRawOption : null,
                        p = N(h.seriesLayoutBy, c ? c.seriesLayoutBy : null),
                        f = N(h.sourceHeader, c ? c.sourceHeader : null), d = N(h.dimensions, c ? c.dimensions : null);
                    t = [hu(a, {seriesLayoutBy: p, sourceHeader: f, dimensions: d}, s, o.get("encode", !0))]
                } else {
                    var g = n;
                    if (r) {
                        var y = this._applyTransform(i);
                        t = y.sourceList, e = y.upstreamSignList
                    } else {
                        var v = g.get("source", !0);
                        t = [hu(v, this._getSourceMetaRawOption(), null, null)], e = []
                    }
                }
                this._setLocalSource(t, e)
            }, t.prototype._applyTransform = function (t) {
                var e = this._sourceHost, n = e.get("transform", !0), i = e.get("fromTransformResult", !0);
                if (null != i) {
                    var r = "";
                    1 !== t.length && Nu(r)
                }
                var o, a = [], s = [];
                return y(t, function (t) {
                    t.prepareSource();
                    var e = t.getSource(i || 0), n = "";
                    null == i || e || Nu(n), a.push(e), s.push(t._getVersionSign())
                }), n ? o = Ou(n, a, {datasetIndex: e.componentIndex}) : null != i && (o = [pu(a[0])]), {
                    sourceList: o,
                    upstreamSignList: s
                }
            }, t.prototype._isDirty = function () {
                var t = this._sourceList;
                if (!t.length) return !0;
                for (var e = this._getUpstreamSourceManagers(), n = 0; n < e.length; n++) {
                    var i = e[n];
                    if (i._isDirty() || this._upstreamSignList[n] !== i._getVersionSign()) return !0
                }
            }, t.prototype.getSource = function (t) {
                return this._sourceList[t || 0]
            }, t.prototype._getUpstreamSourceManagers = function () {
                var t = this._sourceHost;
                if (zu(t)) {
                    var e = Cl(t);
                    return e ? [e.getSourceManager()] : []
                }
                return v(Il(t), function (t) {
                    return t.getSourceManager()
                })
            }, t.prototype._getSourceMetaRawOption = function () {
                var t, e, n, i = this._sourceHost;
                if (zu(i)) t = i.get("seriesLayoutBy", !0), e = i.get("sourceHeader", !0), n = i.get("dimensions", !0); else if (!this._getUpstreamSourceManagers().length) {
                    var r = i;
                    t = r.get("seriesLayoutBy", !0), e = r.get("sourceHeader", !0), n = r.get("dimensions", !0)
                }
                return {seriesLayoutBy: t, sourceHeader: e, dimensions: n}
            }, t
        }(), kS = "line-height:1", LS = [0, 10, 20, 30], PS = ["", "\n", "\n\n", "\n\n\n"], OS = {
            section: {
                planLayout: function (t) {
                    var e = t.blocks.length, n = e > 1 || e > 0 && !t.noHeader, i = 0;
                    y(t.blocks, function (t) {
                        Hu(t).planLayout(t);
                        var e = t.__gapLevelBetweenSubBlocks;
                        e >= i && (i = e + (!n || e && ("section" !== t.type || t.noHeader) ? 0 : 1))
                    }), t.__gapLevelBetweenSubBlocks = i
                }, build: function (t, e, n, i) {
                    var r = e.noHeader, o = Uu(e), a = Wu(t, e, r ? n : o.html, i);
                    if (r) return a;
                    var s = ul(e.header, "ordinal", t.useUTC), l = Fu(i, t.renderMode).nameStyle;
                    return "richText" === t.renderMode ? qu(t, s, l) + o.richText + a : Yu('<div style="' + l + ";" + kS + ';">' + ll(s) + "</div>" + a, n)
                }
            }, nameValue: {
                planLayout: function (t) {
                    t.__gapLevelBetweenSubBlocks = 0
                }, build: function (t, e, n, i) {
                    var r = t.renderMode, o = e.noName, a = e.noValue, s = !e.markerType, l = e.name, u = e.value,
                        h = t.useUTC;
                    if (!o || !a) {
                        var c = s ? "" : t.markupStyleCreator.makeTooltipMarker(e.markerType, e.markerColor || "#333", r),
                            p = o ? "" : ul(l, "ordinal", h), f = e.valueType, d = a ? [] : T(u) ? v(u, function (t, e) {
                                return ul(t, T(f) ? f[e] : f, h)
                            }) : [ul(u, T(f) ? f[0] : f, h)], g = !s || !o, y = !s && o, m = Fu(i, r), _ = m.nameStyle,
                            x = m.valueStyle;
                        return "richText" === r ? (s ? "" : c) + (o ? "" : qu(t, p, _)) + (a ? "" : Zu(t, d, g, y, x)) : Yu((s ? "" : c) + (o ? "" : Xu(p, !s, _)) + (a ? "" : ju(d, g, y, x)), n)
                    }
                }
            }
        }, RS = function () {
            function t() {
                this.richTextStyles = {}, this._nextStyleNameId = Ei()
            }

            return t.prototype._generateStyleName = function () {
                return "__EC_aUTo_" + this._nextStyleNameId++
            }, t.prototype.makeTooltipMarker = function (t, e, n) {
                var i = "richText" === n ? this._generateStyleName() : null,
                    r = cl({color: e, type: t, renderMode: n, markerId: i});
                return C(r) ? r : (this.richTextStyles[i] = r.style, r.content)
            }, t.prototype.wrapRichTextStyle = function (t, e) {
                var n = {};
                T(e) ? y(e, function (t) {
                    return h(n, t)
                }) : h(n, e);
                var i = this._generateStyleName();
                return this.richTextStyles[i] = n, "{" + i + "|" + t + "}"
            }, t
        }(), BS = or(), ES = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e._selectedDataIndicesMap = {}, e
            }

            return e(n, t), n.prototype.init = function (t, e, n) {
                this.seriesIndex = this.componentIndex, this.dataTask = Mu({
                    count: ih,
                    reset: rh
                }), this.dataTask.context = {model: this}, this.mergeDefaultAndTheme(t, n);
                var i = BS(this).sourceManager = new AS(this);
                i.prepareSource();
                var r = this.getInitialData(t, n);
                ah(r, this), this.dataTask.context.data = r, BS(this).dataBeforeProcessed = r, eh(this), this._initSelectedMapFromData(r)
            }, n.prototype.mergeDefaultAndTheme = function (t, e) {
                var n = ml(this), i = n ? xl(t) : {}, r = this.subType;
                Ib.hasClass(r) && (r += "Series"), l(t, e.getTheme().get(this.subType)), l(t, this.getDefaultOption()), Hi(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && _l(t, i, n)
            }, n.prototype.mergeOption = function (t, e) {
                t = l(this.option, t, !0), this.fillDataTextStyle(t.data);
                var n = ml(this);
                n && _l(this.option, t, n);
                var i = BS(this).sourceManager;
                i.dirty(), i.prepareSource();
                var r = this.getInitialData(t, e);
                ah(r, this), this.dataTask.dirty(), this.dataTask.context.data = r, BS(this).dataBeforeProcessed = r, eh(this), this._initSelectedMapFromData(r)
            }, n.prototype.fillDataTextStyle = function (t) {
                if (t && !L(t)) for (var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && Hi(t[n], "label", e)
            }, n.prototype.getInitialData = function () {
            }, n.prototype.appendData = function (t) {
                var e = this.getRawData();
                e.appendData(t.data)
            }, n.prototype.getData = function (t) {
                var e = lh(this);
                if (e) {
                    var n = e.context.data;
                    return null == t ? n : n.getLinkedData(t)
                }
                return BS(this).data
            }, n.prototype.getAllData = function () {
                var t = this.getData();
                return t && t.getLinkedDataAll ? t.getLinkedDataAll() : [{data: t}]
            }, n.prototype.setData = function (t) {
                var e = lh(this);
                if (e) {
                    var n = e.context;
                    n.outputData = t, e !== this.dataTask && (n.data = t)
                }
                BS(this).data = t
            }, n.prototype.getSource = function () {
                return BS(this).sourceManager.getSource()
            }, n.prototype.getRawData = function () {
                return BS(this).dataBeforeProcessed
            }, n.prototype.getBaseAxis = function () {
                var t = this.coordinateSystem;
                return t && t.getBaseAxis && t.getBaseAxis()
            }, n.prototype.formatTooltip = function (t, e) {
                return Qu({series: this, dataIndex: t, multipleSeries: e})
            }, n.prototype.isAnimationEnabled = function () {
                if (by.node) return !1;
                var t = this.getShallow("animation");
                return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), !!t
            }, n.prototype.restoreData = function () {
                this.dataTask.dirty()
            }, n.prototype.getColorFromPalette = function (t, e, n) {
                var i = this.ecModel, r = Xb.prototype.getColorFromPalette.call(this, t, e, n);
                return r || (r = i.getColorFromPalette(t, e, n)), r
            }, n.prototype.coordDimToDataDim = function (t) {
                return this.getRawData().mapDimensionsAll(t)
            }, n.prototype.getProgressive = function () {
                return this.get("progressive")
            }, n.prototype.getProgressiveThreshold = function () {
                return this.get("progressiveThreshold")
            }, n.prototype.select = function (t, e) {
                this._innerSelect(this.getData(e), t)
            }, n.prototype.unselect = function (t, e) {
                var n = this.option.selectedMap;
                if (n) for (var i = this.getData(e), r = 0; r < t.length; r++) {
                    var o = t[r], a = th(i, o);
                    n[a] = !1, this._selectedDataIndicesMap[a] = -1
                }
            }, n.prototype.toggleSelect = function (t, e) {
                for (var n = [], i = 0; i < t.length; i++) n[0] = t[i], this.isSelected(t[i], e) ? this.unselect(n, e) : this.select(n, e)
            }, n.prototype.getSelectedDataIndices = function () {
                for (var t = this._selectedDataIndicesMap, e = w(t), n = [], i = 0; i < e.length; i++) {
                    var r = t[e[i]];
                    r >= 0 && n.push(r)
                }
                return n
            }, n.prototype.isSelected = function (t, e) {
                var n = this.option.selectedMap;
                if (!n) return !1;
                var i = this.getData(e), r = th(i, t);
                return n[r] || !1
            }, n.prototype._innerSelect = function (t, e) {
                var n, i, r = this.option.selectedMode, o = e.length;
                if (r && o) if ("multiple" === r) for (var a = this.option.selectedMap || (this.option.selectedMap = {}), s = 0; o > s; s++) {
                    var l = e[s], u = th(t, l);
                    a[u] = !0, this._selectedDataIndicesMap[u] = t.getRawIndex(l)
                } else if ("single" === r || r === !0) {
                    var h = e[o - 1], u = th(t, h);
                    this.option.selectedMap = (n = {}, n[u] = !0, n), this._selectedDataIndicesMap = (i = {}, i[u] = t.getRawIndex(h), i)
                }
            }, n.prototype._initSelectedMapFromData = function (t) {
                if (!this.option.selectedMap) {
                    var e = [];
                    t.hasItemOption && t.each(function (n) {
                        var i = t.getRawDataItem(n);
                        "object" == typeof i && i.selected && e.push(n)
                    }), e.length > 0 && this._innerSelect(t, e)
                }
            }, n.registerClass = function (t) {
                return Ib.registerClass(t)
            }, n.protoInitialize = function () {
                var t = n.prototype;
                t.type = "series.__base__", t.seriesIndex = 0, t.useColorPaletteOnData = !1, t.ignoreStyleOnData = !1, t.hasSymbolVisual = !1, t.defaultSymbol = "circle", t.visualStyleAccessPath = "itemStyle", t.visualDrawType = "fill"
            }(), n
        }(Ib);
    d(ES, bS), d(ES, Xb), vr(ES, Ib);
    var zS = function () {
        function t() {
            this.group = new wm, this.uid = As("viewComponent")
        }

        return t.prototype.init = function () {
        }, t.prototype.render = function () {
        }, t.prototype.dispose = function () {
        }, t.prototype.updateView = function () {
        }, t.prototype.updateLayout = function () {
        }, t.prototype.updateVisual = function () {
        }, t.prototype.blurSeries = function () {
        }, t
    }();
    gr(zS), wr(zS);
    var NS = or(), FS = uh(), VS = function () {
        function t() {
            this.group = new wm, this.uid = As("viewChart"), this.renderTask = Mu({
                plan: ph,
                reset: fh
            }), this.renderTask.context = {view: this}
        }

        return t.prototype.init = function () {
        }, t.prototype.render = function () {
        }, t.prototype.highlight = function (t, e, n, i) {
            ch(t.getData(), i, "emphasis")
        }, t.prototype.downplay = function (t, e, n, i) {
            ch(t.getData(), i, "normal")
        }, t.prototype.remove = function () {
            this.group.removeAll()
        }, t.prototype.dispose = function () {
        }, t.prototype.updateView = function (t, e, n, i) {
            this.render(t, e, n, i)
        }, t.prototype.updateLayout = function (t, e, n, i) {
            this.render(t, e, n, i)
        }, t.prototype.updateVisual = function (t, e, n, i) {
            this.render(t, e, n, i)
        }, t.markUpdateMethod = function (t, e) {
            NS(t).updateMethod = e
        }, t.protoInitialize = function () {
            var e = t.prototype;
            e.type = "chart"
        }(), t
    }();
    gr(VS, ["dispose"]), wr(VS);
    var HS, WS = {
            incrementalPrepareRender: {
                progress: function (t, e) {
                    e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
                }
            }, render: {
                forceFirstProgress: !0, progress: function (t, e) {
                    e.view.render(e.model, e.ecModel, e.api, e.payload)
                }
            }
        }, GS = "\x00__throttleOriginMethod", US = "\x00__throttleRate", YS = "\x00__throttleType", XS = or(),
        jS = {itemStyle: br(qw, !0), lineStyle: br(Yw, !0)}, qS = {lineStyle: "stroke", itemStyle: "fill"}, ZS = {
            createOnAllSeries: !0, performRawSeries: !0, reset: function (t, e) {
                var n = t.getData(), i = t.visualStyleAccessPath || "itemStyle", r = t.getModel(i), o = yh(t, i), a = o(r),
                    s = r.getShallow("decal");
                s && (n.setVisual("decal", s), s.dirty = !0);
                var l = vh(t, i), u = a[l], c = M(u) ? u : null;
                return (!a[l] || c) && (a[l] = t.getColorFromPalette(t.name, null, e.getSeriesCount()), n.setVisual("colorFromPalette", !0)), n.setVisual("style", a), n.setVisual("drawType", l), !e.isSeriesFiltered(t) && c ? (n.setVisual("colorFromPalette", !1), {
                    dataEach: function (e, n) {
                        var i = t.getDataParams(n), r = h({}, a);
                        r[l] = c(i), e.setItemVisual(n, "style", r)
                    }
                }) : void 0
            }
        }, KS = new $w, $S = {
            createOnAllSeries: !0, performRawSeries: !0, reset: function (t, e) {
                if (!t.ignoreStyleOnData && !e.isSeriesFiltered(t)) {
                    var n = t.getData(), i = t.visualStyleAccessPath || "itemStyle", r = yh(t, i),
                        o = n.getVisual("drawType");
                    return {
                        dataEach: n.hasItemOption ? function (t, e) {
                            var n = t.getRawDataItem(e);
                            if (n && n[i]) {
                                KS.option = n[i];
                                var a = r(KS), s = t.ensureUniqueItemVisual(e, "style");
                                h(s, a), KS.option.decal && (t.setItemVisual(e, "decal", KS.option.decal), KS.option.decal.dirty = !0), o in a && t.setItemVisual(e, "colorFromPalette", !1)
                            }
                        } : null
                    }
                }
            }
        }, QS = {
            performRawSeries: !0, overallReset: function (t) {
                var e = X();
                t.eachSeries(function (t) {
                    if (t.useColorPaletteOnData) {
                        var n = e.get(t.type);
                        n || (n = {}, e.set(t.type, n)), XS(t).scope = n
                    }
                }), t.eachSeries(function (e) {
                    if (e.useColorPaletteOnData && !t.isSeriesFiltered(e)) {
                        var n = e.getRawData(), i = {}, r = e.getData(), o = XS(e).scope,
                            a = e.visualStyleAccessPath || "itemStyle", s = vh(e, a);
                        r.each(function (t) {
                            var e = r.getRawIndex(t);
                            i[e] = t
                        }), n.each(function (t) {
                            var a = i[t], l = r.getItemVisual(a, "colorFromPalette");
                            if (l) {
                                var u = r.ensureUniqueItemVisual(a, "style"), h = n.getName(t) || t + "", c = n.count();
                                u[s] = e.getColorFromPalette(h, o, c)
                            }
                        })
                    }
                })
            }
        }, JS = Math.PI, tT = function () {
            function t(t, e, n, i) {
                this._stageTaskMap = X(), this.ecInstance = t, this.api = e, n = this._dataProcessorHandlers = n.slice(), i = this._visualHandlers = i.slice(), this._allHandlers = n.concat(i)
            }

            return t.prototype.restoreData = function (t, e) {
                t.restoreData(e), this._stageTaskMap.each(function (t) {
                    var e = t.overallTask;
                    e && e.dirty()
                })
            }, t.prototype.getPerformArgs = function (t, e) {
                if (t.__pipeline) {
                    var n = this._pipelineMap.get(t.__pipeline.id), i = n.context,
                        r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex,
                        o = r ? n.step : null, a = i && i.modDataCount, s = null != a ? Math.ceil(a / o) : null;
                    return {step: o, modBy: s, modDataCount: a}
                }
            }, t.prototype.getPipeline = function (t) {
                return this._pipelineMap.get(t)
            }, t.prototype.updateStreamModes = function (t, e) {
                var n = this._pipelineMap.get(t.uid), i = t.getData(), r = i.count(),
                    o = n.progressiveEnabled && e.incrementalPrepareRender && r >= n.threshold,
                    a = t.get("large") && r >= t.get("largeThreshold"),
                    s = "mod" === t.get("progressiveChunkMode") ? r : null;
                t.pipelineContext = n.context = {progressiveRender: o, modDataCount: s, large: a}
            }, t.prototype.restorePipelines = function (t) {
                var e = this, n = e._pipelineMap = X();
                t.eachSeries(function (t) {
                    var i = t.getProgressive(), r = t.uid;
                    n.set(r, {
                        id: r,
                        head: null,
                        tail: null,
                        threshold: t.getProgressiveThreshold(),
                        progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
                        blockIndex: -1,
                        step: Math.round(i || 700),
                        count: 0
                    }), e._pipe(t, t.dataTask)
                })
            }, t.prototype.prepareStageTasks = function () {
                var t = this._stageTaskMap, e = this.api.getModel(), n = this.api;
                y(this._allHandlers, function (i) {
                    var r = t.get(i.uid) || t.set(i.uid, {}), o = "";
                    W(!(i.reset && i.overallReset), o), i.reset && this._createSeriesStageTask(i, r, e, n), i.overallReset && this._createOverallStageTask(i, r, e, n)
                }, this)
            }, t.prototype.prepareView = function (t, e, n, i) {
                var r = t.renderTask, o = r.context;
                o.model = e, o.ecModel = n, o.api = i, r.__block = !t.incrementalPrepareRender, this._pipe(e, r)
            }, t.prototype.performDataProcessorTasks = function (t, e) {
                this._performStageTasks(this._dataProcessorHandlers, t, e, {block: !0})
            }, t.prototype.performVisualTasks = function (t, e, n) {
                this._performStageTasks(this._visualHandlers, t, e, n)
            }, t.prototype._performStageTasks = function (t, e, n, i) {
                function r(t, e) {
                    return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
                }

                i = i || {};
                var o = !1, a = this;
                y(t, function (t) {
                    if (!i.visualType || i.visualType === t.visualType) {
                        var s = a._stageTaskMap.get(t.uid), l = s.seriesTaskMap, u = s.overallTask;
                        if (u) {
                            var h, c = u.agentStubMap;
                            c.each(function (t) {
                                r(i, t) && (t.dirty(), h = !0)
                            }), h && u.dirty(), a.updatePayload(u, n);
                            var p = a.getPerformArgs(u, i.block);
                            c.each(function (t) {
                                t.perform(p)
                            }), u.perform(p) && (o = !0)
                        } else l && l.each(function (s) {
                            r(i, s) && s.dirty();
                            var l = a.getPerformArgs(s, i.block);
                            l.skip = !t.performRawSeries && e.isSeriesFiltered(s.context.model), a.updatePayload(s, n), s.perform(l) && (o = !0)
                        })
                    }
                }), this.unfinished = o || this.unfinished
            }, t.prototype.performSeriesTasks = function (t) {
                var e;
                t.eachSeries(function (t) {
                    e = t.dataTask.perform() || e
                }), this.unfinished = e || this.unfinished
            }, t.prototype.plan = function () {
                this._pipelineMap.each(function (t) {
                    var e = t.tail;
                    do {
                        if (e.__block) {
                            t.blockIndex = e.__idxInPipeline;
                            break
                        }
                        e = e.getUpstream()
                    } while (e)
                })
            }, t.prototype.updatePayload = function (t, e) {
                "remain" !== e && (t.context.payload = e)
            }, t.prototype._createSeriesStageTask = function (t, e, n, i) {
                function r(e) {
                    var r = e.uid, l = s.set(r, a && a.get(r) || Mu({plan: Sh, reset: Th, count: Ch}));
                    l.context = {
                        model: e,
                        ecModel: n,
                        api: i,
                        useClearVisual: t.isVisual && !t.isLayout,
                        plan: t.plan,
                        reset: t.reset,
                        scheduler: o
                    }, o._pipe(e, l)
                }

                var o = this, a = e.seriesTaskMap, s = e.seriesTaskMap = X(), l = t.seriesType, u = t.getTargetSeries;
                t.createOnAllSeries ? n.eachRawSeries(r) : l ? n.eachRawSeriesByType(l, r) : u && u(n, i).each(r)
            }, t.prototype._createOverallStageTask = function (t, e, n, i) {
                function r(t) {
                    var e = t.uid, n = l.set(e, s && s.get(e) || (p = !0, Mu({reset: xh, onDirty: bh})));
                    n.context = {model: t, overallProgress: c}, n.agent = a, n.__block = c, o._pipe(t, n)
                }

                var o = this, a = e.overallTask = e.overallTask || Mu({reset: _h});
                a.context = {ecModel: n, api: i, overallReset: t.overallReset, scheduler: o};
                var s = a.agentStubMap, l = a.agentStubMap = X(), u = t.seriesType, h = t.getTargetSeries, c = !0, p = !1,
                    f = "";
                W(!t.createOnAllSeries, f), u ? n.eachRawSeriesByType(u, r) : h ? h(n, i).each(r) : (c = !1, y(n.getSeries(), r)), p && a.dirty()
            }, t.prototype._pipe = function (t, e) {
                var n = t.uid, i = this._pipelineMap.get(n);
                !i.head && (i.head = e), i.tail && i.tail.pipe(e), i.tail = e, e.__idxInPipeline = i.count++, e.__pipeline = i
            }, t.wrapStageHandler = function (t, e) {
                return M(t) && (t = {
                    overallReset: t,
                    seriesType: Ih(t)
                }), t.uid = As("stageHandler"), e && (t.visualType = e), t
            }, t
        }(), eT = Mh(0), nT = {}, iT = {};
    Dh(nT, Zb), Dh(iT, nS), nT.eachSeriesByType = nT.eachRawSeriesByType = function (t) {
        HS = t
    }, nT.eachComponent = function (t) {
        "series" === t.mainType && t.subType && (HS = t.subType)
    };
    var rT = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
        oT = {
            color: rT,
            colorLayer: [["#37A2DA", "#ffd85c", "#fd7b5f"], ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"], ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], rT]
        }, aT = "#B9B8CE", sT = "#100C2A", lT = function () {
            return {
                axisLine: {lineStyle: {color: aT}},
                splitLine: {lineStyle: {color: "#484753"}},
                splitArea: {areaStyle: {color: ["rgba(255,255,255,0.02)", "rgba(255,255,255,0.05)"]}},
                minorSplitLine: {lineStyle: {color: "#20203B"}}
            }
        }, uT = ["#4992ff", "#7cffb2", "#fddd60", "#ff6e76", "#58d9f9", "#05c091", "#ff8a45", "#8d48e3", "#dd79ff"], hT = {
            darkMode: !0,
            color: uT,
            backgroundColor: sT,
            axisPointer: {lineStyle: {color: "#817f91"}, crossStyle: {color: "#817f91"}, label: {color: "#fff"}},
            legend: {textStyle: {color: aT}},
            textStyle: {color: aT},
            title: {textStyle: {color: "#EEF1FA"}, subtextStyle: {color: "#B9B8CE"}},
            toolbox: {iconStyle: {borderColor: aT}},
            dataZoom: {
                borderColor: "#71708A",
                textStyle: {color: aT},
                brushStyle: {color: "rgba(135,163,206,0.3)"},
                handleStyle: {color: "#353450", borderColor: "#C5CBE3"},
                moveHandleStyle: {color: "#B0B6C3", opacity: .3},
                fillerColor: "rgba(135,163,206,0.2)",
                emphasis: {
                    handleStyle: {borderColor: "#91B7F2", color: "#4D587D"},
                    moveHandleStyle: {color: "#636D9A", opacity: .7}
                },
                dataBackground: {lineStyle: {color: "#71708A", width: 1}, areaStyle: {color: "#71708A"}},
                selectedDataBackground: {lineStyle: {color: "#87A3CE"}, areaStyle: {color: "#87A3CE"}}
            },
            visualMap: {textStyle: {color: aT}},
            timeline: {lineStyle: {color: aT}, label: {color: aT}, controlStyle: {color: aT, borderColor: aT}},
            calendar: {itemStyle: {color: sT}, dayLabel: {color: aT}, monthLabel: {color: aT}, yearLabel: {color: aT}},
            timeAxis: lT(),
            logAxis: lT(),
            valueAxis: lT(),
            categoryAxis: lT(),
            line: {symbol: "circle"},
            graph: {color: uT},
            gauge: {
                title: {color: aT},
                axisLine: {lineStyle: {color: [[1, "rgba(207,212,219,0.2)"]]}},
                axisLabel: {color: aT},
                detail: {color: "#EEF1FA"}
            },
            candlestick: {itemStyle: {color: "#f64e56", color0: "#54ea92", borderColor: "#f64e56", borderColor0: "#54ea92"}}
        };
    hT.categoryAxis.splitLine.show = !1;
    var cT = X(), pT = {
            registerMap: function (t, e, n) {
                var i;
                if (T(e)) i = e; else if (e.svg) i = [{type: "svg", source: e.svg, specialAreas: e.specialAreas}]; else {
                    var r = e.geoJson || e.geoJSON;
                    r && !e.features && (n = e.specialAreas, e = r), i = [{type: "geoJSON", source: e, specialAreas: n}]
                }
                return y(i, function (t) {
                    var e = t.type;
                    "geoJson" === e && (e = t.type = "geoJSON");
                    var n = fT[e];
                    n(t)
                }), cT.set(t, i)
            }, retrieveMap: function (t) {
                return cT.get(t)
            }
        }, fT = {
            geoJSON: function (t) {
                var e = t.source;
                t.geoJSON = C(e) ? "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")() : e
            }, svg: function (t) {
                t.svgXML = Ah(t.source)
            }
        }, dT = function () {
            function t() {
            }

            return t.prototype.normalizeQuery = function (t) {
                var e = {}, n = {}, i = {};
                if (C(t)) {
                    var r = pr(t);
                    e.mainType = r.main || null, e.subType = r.sub || null
                } else {
                    var o = ["Index", "Name", "Id"], a = {name: 1, dataIndex: 1, dataType: 1};
                    y(t, function (t, r) {
                        for (var s = !1, l = 0; l < o.length; l++) {
                            var u = o[l], h = r.lastIndexOf(u);
                            if (h > 0 && h === r.length - u.length) {
                                var c = r.slice(0, h);
                                "data" !== c && (e.mainType = c, e[u.toLowerCase()] = t, s = !0)
                            }
                        }
                        a.hasOwnProperty(r) && (n[r] = t, s = !0), s || (i[r] = t)
                    })
                }
                return {cptQuery: e, dataQuery: n, otherQuery: i}
            }, t.prototype.filter = function (t, e) {
                function n(t, e, n, i) {
                    return null == t[n] || e[i || n] === t[n]
                }

                var i = this.eventInfo;
                if (!i) return !0;
                var r = i.targetEl, o = i.packedEvent, a = i.model, s = i.view;
                if (!a || !s) return !0;
                var l = e.cptQuery, u = e.dataQuery;
                return n(l, a, "mainType") && n(l, a, "subType") && n(l, a, "index", "componentIndex") && n(l, a, "name") && n(l, a, "id") && n(u, o, "name") && n(u, o, "dataIndex") && n(u, o, "dataType") && (!s.filterForExposedEvent || s.filterForExposedEvent(t, e.otherQuery, r, o))
            }, t.prototype.afterTrigger = function () {
                this.eventInfo = null
            }, t
        }(), gT = {
            createOnAllSeries: !0, performRawSeries: !0, reset: function (t, e) {
                function n(e, n) {
                    var i = t.getRawValue(n), a = t.getDataParams(n);
                    l && e.setItemVisual(n, "symbol", r(i, a)), u && e.setItemVisual(n, "symbolSize", o(i, a)), h && e.setItemVisual(n, "symbolRotate", s(i, a))
                }

                var i = t.getData();
                if (t.legendSymbol && i.setVisual("legendSymbol", t.legendSymbol), t.hasSymbolVisual) {
                    var r = t.get("symbol"), o = t.get("symbolSize"), a = t.get("symbolKeepAspect"),
                        s = t.get("symbolRotate"), l = M(r), u = M(o), h = M(s), c = l || u || h,
                        p = !l && r ? r : t.defaultSymbol, f = u ? null : o, d = h ? null : s;
                    if (i.setVisual({
                        legendSymbol: t.legendSymbol || p,
                        symbol: p,
                        symbolSize: f,
                        symbolKeepAspect: a,
                        symbolRotate: d
                    }), !e.isSeriesFiltered(t)) return {dataEach: c ? n : null}
                }
            }
        }, yT = {
            createOnAllSeries: !0, performRawSeries: !0, reset: function (t, e) {
                function n(t, e) {
                    var n = t.getItemModel(e), i = n.getShallow("symbol", !0), r = n.getShallow("symbolSize", !0),
                        o = n.getShallow("symbolRotate", !0), a = n.getShallow("symbolKeepAspect", !0);
                    null != i && t.setItemVisual(e, "symbol", i), null != r && t.setItemVisual(e, "symbolSize", r), null != o && t.setItemVisual(e, "symbolRotate", o), null != a && t.setItemVisual(e, "symbolKeepAspect", a)
                }

                if (t.hasSymbolVisual && !e.isSeriesFiltered(t)) {
                    var i = t.getData();
                    return {dataEach: i.hasItemOption ? n : null}
                }
            }
        }, vT = 2 * Math.PI, mT = N_.CMD, _T = ["top", "right", "bottom", "left"], xT = [], wT = new Ov, bT = new Ov,
        ST = new Ov, TT = new Ov, MT = new Ov, CT = [], IT = new Ov,
        DT = ["align", "verticalAlign", "width", "height", "fontSize"], AT = new vv, kT = or(), LT = or(),
        PT = ["x", "y", "rotation"], OT = function () {
            function t() {
                this._labelList = [], this._chartViewList = []
            }

            return t.prototype.clearLabels = function () {
                this._labelList = [], this._chartViewList = []
            }, t.prototype._addLabel = function (t, e, n, i, r) {
                var o = i.style, a = i.__hostTarget, s = a.textConfig || {}, l = i.getComputedTransform(),
                    u = i.getBoundingRect().plain();
                Wv.applyTransform(u, u, l), l ? AT.setLocalTransform(l) : (AT.x = AT.y = AT.rotation = AT.originX = AT.originY = 0, AT.scaleX = AT.scaleY = 1);
                var h, c = i.__hostTarget;
                if (c) {
                    h = c.getBoundingRect().plain();
                    var p = c.getComputedTransform();
                    Wv.applyTransform(h, h, p)
                }
                var f = h && c.getTextGuideLine();
                this._labelList.push({
                    label: i,
                    labelLine: f,
                    seriesModel: n,
                    dataIndex: t,
                    dataType: e,
                    layoutOption: r,
                    computedLayoutOption: null,
                    rect: u,
                    hostRect: h,
                    priority: h ? h.width * h.height : 0,
                    defaultAttr: {
                        ignore: i.ignore,
                        labelGuideIgnore: f && f.ignore,
                        x: AT.x,
                        y: AT.y,
                        rotation: AT.rotation,
                        style: {
                            x: o.x,
                            y: o.y,
                            align: o.align,
                            verticalAlign: o.verticalAlign,
                            width: o.width,
                            height: o.height,
                            fontSize: o.fontSize
                        },
                        cursor: i.cursor,
                        attachedPos: s.position,
                        attachedRot: s.rotation
                    }
                })
            }, t.prototype.addLabelsOfSeries = function (t) {
                var e = this;
                this._chartViewList.push(t);
                var n = t.__model, i = n.get("labelLayout");
                (M(i) || w(i).length) && t.group.traverse(function (t) {
                    if (t.ignore) return !0;
                    var r = t.getTextContent(), o = cx(t);
                    r && !r.disableLabelLayout && e._addLabel(o.dataIndex, o.dataType, n, r, i)
                })
            }, t.prototype.updateLayoutConfig = function (t) {
                function e(t, e) {
                    return function () {
                        Nh(t, e)
                    }
                }

                for (var n = t.getWidth(), i = t.getHeight(), r = 0; r < this._labelList.length; r++) {
                    var o = this._labelList[r], a = o.label, s = a.__hostTarget, l = o.defaultAttr, u = void 0;
                    u = "function" == typeof o.layoutOption ? o.layoutOption($h(o, s)) : o.layoutOption, u = u || {}, o.computedLayoutOption = u;
                    var h = Math.PI / 180;
                    s && s.setTextConfig({
                        local: !1,
                        position: null != u.x || null != u.y ? null : l.attachedPos,
                        rotation: null != u.rotate ? u.rotate * h : l.attachedRot,
                        offset: [u.dx || 0, u.dy || 0]
                    });
                    var c = !1;
                    if (null != u.x ? (a.x = _i(u.x, n), a.setStyle("x", 0), c = !0) : (a.x = l.x, a.setStyle("x", l.style.x)), null != u.y ? (a.y = _i(u.y, i), a.setStyle("y", 0), c = !0) : (a.y = l.y, a.setStyle("y", l.style.y)), u.labelLinePoints) {
                        var p = s.getTextGuideLine();
                        p && (p.setShape({points: u.labelLinePoints}), c = !1)
                    }
                    var f = kT(a);
                    f.needsUpdateLabelLine = c, a.rotation = null != u.rotate ? u.rotate * h : l.rotation;
                    for (var d = 0; d < DT.length; d++) {
                        var g = DT[d];
                        a.setStyle(g, null != u[g] ? u[g] : l.style[g])
                    }
                    if (u.draggable) {
                        if (a.draggable = !0, a.cursor = "move", s) {
                            var y = o.seriesModel;
                            if (null != o.dataIndex) {
                                var v = o.seriesModel.getData(o.dataType);
                                y = v.getItemModel(o.dataIndex)
                            }
                            a.on("drag", e(s, y.getModel("labelLine")))
                        }
                    } else a.off("drag"), a.cursor = l.cursor
                }
            }, t.prototype.layout = function (t) {
                var e = t.getWidth(), n = t.getHeight(), i = Yh(this._labelList), r = _(i, function (t) {
                    return "shiftX" === t.layoutOption.moveOverlap
                }), o = _(i, function (t) {
                    return "shiftY" === t.layoutOption.moveOverlap
                });
                jh(r, 0, e), qh(o, 0, n);
                var a = _(i, function (t) {
                    return t.layoutOption.hideOverlap
                });
                Zh(a)
            }, t.prototype.processLabelsOverall = function () {
                var t = this;
                y(this._chartViewList, function (e) {
                    var n = e.__model, i = e.ignoreLabelLineUpdate, r = n.isAnimationEnabled();
                    e.group.traverse(function (e) {
                        if (e.ignore) return !0;
                        var o = !i, a = e.getTextContent();
                        !o && a && (o = kT(a).needsUpdateLabelLine), o && t._updateLabelLine(e, n), r && t._animateLabels(e, n)
                    })
                })
            }, t.prototype._updateLabelLine = function (t, e) {
                var n = t.getTextContent(), i = cx(t), r = i.dataIndex;
                if (n && null != r) {
                    var o = e.getData(i.dataType), a = o.getItemModel(r), s = {}, l = o.getItemVisual(r, "style"),
                        u = o.getVisual("drawType");
                    s.stroke = l[u];
                    var h = a.getModel("labelLine");
                    Gh(t, Uh(a), s), Nh(t, h)
                }
            }, t.prototype._animateLabels = function (t, e) {
                var n = t.getTextContent(), i = t.getTextGuideLine();
                if (n && !n.ignore && !n.invisible && !t.disableLabelAnimation && !is(t)) {
                    var r = kT(n), o = r.oldLayout, a = cx(t), s = a.dataIndex, l = {x: n.x, y: n.y, rotation: n.rotation},
                        u = e.getData(a.dataType);
                    if (o) {
                        n.attr(o);
                        var h = t.prevStates;
                        h && (p(h, "select") >= 0 && n.attr(r.oldLayoutSelect), p(h, "emphasis") >= 0 && n.attr(r.oldLayoutEmphasis)), Qa(n, l, e, s)
                    } else if (n.attr(l), !Hw(n).valueAnimation) {
                        var c = N(n.style.opacity, 1);
                        n.style.opacity = 0, Ja(n, {style: {opacity: c}}, e, s)
                    }
                    if (r.oldLayout = l, n.states.select) {
                        var f = r.oldLayoutSelect = {};
                        Qh(f, l, PT), Qh(f, n.states.select, PT)
                    }
                    if (n.states.emphasis) {
                        var d = r.oldLayoutEmphasis = {};
                        Qh(d, l, PT), Qh(d, n.states.emphasis, PT)
                    }
                    Ds(n, s, u, e, e)
                }
                if (i && !i.ignore && !i.invisible) {
                    var r = LT(i), o = r.oldLayout, g = {points: i.shape.points};
                    o ? (i.attr({shape: o}), Qa(i, {shape: g}, e)) : (i.setShape(g), i.style.strokePercent = 0, Ja(i, {style: {strokePercent: 1}}, e)), r.oldLayout = g
                }
            }, t
        }(), RT = Math.round(9 * Math.random()), BT = function () {
            function t() {
                this._id = "__ec_inner_" + RT++
            }

            return t.prototype.get = function (t) {
                return this._guard(t)[this._id]
            }, t.prototype.set = function (t, e) {
                var n = this._guard(t);
                return "function" == typeof Object.defineProperty ? Object.defineProperty(n, this._id, {
                    value: e,
                    enumerable: !1,
                    configurable: !0
                }) : n[this._id] = e, this
            }, t.prototype["delete"] = function (t) {
                return this.has(t) ? (delete this._guard(t)[this._id], !0) : !1
            }, t.prototype.has = function (t) {
                return !!this._guard(t)[this._id]
            }, t.prototype._guard = function (t) {
                if (t !== Object(t)) throw TypeError("Value of WeakMap is not a non-null object.");
                return t
            }, t
        }(), ET = Z_.extend({
            type: "triangle", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var n = e.cx, i = e.cy, r = e.width / 2, o = e.height / 2;
                t.moveTo(n, i - o), t.lineTo(n + r, i + o), t.lineTo(n - r, i + o), t.closePath()
            }
        }), zT = Z_.extend({
            type: "diamond", shape: {cx: 0, cy: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var n = e.cx, i = e.cy, r = e.width / 2, o = e.height / 2;
                t.moveTo(n, i - o), t.lineTo(n + r, i), t.lineTo(n, i + o), t.lineTo(n - r, i), t.closePath()
            }
        }), NT = Z_.extend({
            type: "pin", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var n = e.x, i = e.y, r = e.width / 5 * 3, o = Math.max(r, e.height), a = r / 2, s = a * a / (o - a),
                    l = i - o + a + s, u = Math.asin(s / a), h = Math.cos(u) * a, c = Math.sin(u), p = Math.cos(u),
                    f = .6 * a, d = .7 * a;
                t.moveTo(n - h, l + s), t.arc(n, l, a, Math.PI - u, 2 * Math.PI + u), t.bezierCurveTo(n + h - c * f, l + s + p * f, n, i - d, n, i), t.bezierCurveTo(n, i - d, n - h + c * f, l + s + p * f, n - h, l + s), t.closePath()
            }
        }), FT = Z_.extend({
            type: "arrow", shape: {x: 0, y: 0, width: 0, height: 0}, buildPath: function (t, e) {
                var n = e.height, i = e.width, r = e.x, o = e.y, a = i / 3 * 2;
                t.moveTo(r, o), t.lineTo(r + a, o + n), t.lineTo(r, o + n / 4 * 3), t.lineTo(r - a, o + n), t.lineTo(r, o), t.closePath()
            }
        }), VT = {line: rx, rect: rx, roundRect: rx, square: rx, circle: Gx, diamond: zT, pin: NT, arrow: FT, triangle: ET},
        HT = {
            line: function (t, e, n, i, r) {
                var o = 2;
                r.x = t, r.y = e + i / 2 - o / 2, r.width = n, r.height = o
            }, rect: function (t, e, n, i, r) {
                r.x = t, r.y = e, r.width = n, r.height = i
            }, roundRect: function (t, e, n, i, r) {
                r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4
            }, square: function (t, e, n, i, r) {
                var o = Math.min(n, i);
                r.x = t, r.y = e, r.width = o, r.height = o
            }, circle: function (t, e, n, i, r) {
                r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2
            }, diamond: function (t, e, n, i, r) {
                r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
            }, pin: function (t, e, n, i, r) {
                r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
            }, arrow: function (t, e, n, i, r) {
                r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
            }, triangle: function (t, e, n, i, r) {
                r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
            }
        }, WT = {};
    y(VT, function (t, e) {
        WT[e] = new t
    });
    var GT = Z_.extend({
            type: "symbol",
            shape: {symbolType: "", x: 0, y: 0, width: 0, height: 0},
            calculateTextPosition: function (t, e, n) {
                var i = Fn(t, e, n), r = this.shape;
                return r && "pin" === r.symbolType && "inside" === e.position && (i.y = n.y + .4 * n.height), i
            },
            buildPath: function (t, e, n) {
                var i = e.symbolType;
                if ("none" !== i) {
                    var r = WT[i];
                    r || (i = "rect", r = WT[i]), HT[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n)
                }
            }
        }), UT = new N_(!0), YT = ["shadowBlur", "shadowOffsetX", "shadowOffsetY"],
        XT = [["lineCap", "butt"], ["lineJoin", "miter"], ["miterLimit", 10]], jT = 1, qT = 2, ZT = 3, KT = 4,
        $T = new BT, QT = new bv(100),
        JT = ["symbol", "symbolSize", "symbolKeepAspect", "color", "backgroundColor", "dashArrayX", "dashArrayY", "maxTileWidth", "maxTileHeight"],
        tM = W, eM = y, nM = M, iM = A, rM = p, oM = "undefined" != typeof window, aM = "5.0.1",
        sM = {zrender: "5.0.3"}, lM = 1, uM = 800, hM = 900, cM = 1e3, pM = 2e3, fM = 5e3, dM = 1e3, gM = 1100,
        yM = 2e3, vM = 3e3, mM = 4e3, _M = 4500, xM = 4600, wM = 5e3, bM = 6e3, SM = 7e3, TM = {
            PROCESSOR: {FILTER: cM, SERIES_FILTER: uM, STATISTIC: fM},
            VISUAL: {
                LAYOUT: dM,
                PROGRESSIVE_LAYOUT: gM,
                GLOBAL: yM,
                CHART: vM,
                POST_CHART_LAYOUT: xM,
                COMPONENT: mM,
                BRUSH: wM,
                CHART_ITEM: _M,
                ARIA: bM,
                DECAL: SM
            }
        }, MM = "__flagInMainProcess", CM = "__optionUpdated", IM = "__needsUpdateStatus", DM = /^[a-zA-Z0-9_]+$/,
        AM = "__connectUpdateStatus", kM = 0, LM = 1, PM = 2, OM = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return e(n, t), n
        }(jy), RM = OM.prototype;
    RM.on = Nc("on"), RM.off = Nc("off");
    var BM, EM, zM, NM, FM, VM, HM, WM, GM, UM, YM, XM, jM, qM, ZM, KM, $M, QM, JM, tC, eC, nC = function (t) {
        function n(e, n, i) {
            function r(t, e) {
                return t.__prio - e.__prio
            }

            var o = t.call(this, new dT) || this;
            o._chartsViews = [], o._chartsMap = {}, o._componentsViews = [], o._componentsMap = {}, o._pendingActions = [], i = i || {}, "string" == typeof n && (n = pC[n]), o._dom = e;
            var a = "canvas", l = !1, u = o._zr = pi(e, {
                renderer: i.renderer || a,
                devicePixelRatio: i.devicePixelRatio,
                width: i.width,
                height: i.height,
                useDirtyRect: null == i.useDirtyRect ? l : i.useDirtyRect
            });
            o._throttledZrFlush = dh(Ey(u.flush, u), 17), n = s(n), n && au(n, !0), o._theme = n, o._locale = Rs(i.locale || ab), o._coordSysMgr = new rS;
            var h = o._api = $M(o);
            return Qn(cC, r), Qn(sC, r), o._scheduler = new tT(o, h, sC, cC), o._messageCenter = new OM, o._labelManager = new OT, o._initEvents(), o.resize = Ey(o.resize, o), u.animation.on("frame", o._onframe, o), UM(u, o), YM(u, o), U(o), o
        }

        return e(n, t), n.prototype._onframe = function () {
            if (!this._disposed) {
                eC(this);
                var t = this._scheduler;
                if (this[CM]) {
                    var e = this[CM].silent;
                    this[MM] = !0, BM(this), NM.update.call(this), this._zr.flush(), this[MM] = !1, this[CM] = !1, WM.call(this, e), GM.call(this, e)
                } else if (t.unfinished) {
                    var n = lM, i = this._model, r = this._api;
                    t.unfinished = !1;
                    do {
                        var o = +new Date;
                        t.performSeriesTasks(i), t.performDataProcessorTasks(i), VM(this, i), t.performVisualTasks(i), ZM(this, this._model, r, "remain"), n -= +new Date - o
                    } while (n > 0 && t.unfinished);
                    t.unfinished || this._zr.flush()
                }
            }
        }, n.prototype.getDom = function () {
            return this._dom
        }, n.prototype.getId = function () {
            return this.id
        }, n.prototype.getZr = function () {
            return this._zr
        }, n.prototype.setOption = function (t, e, n) {
            if (!this._disposed) {
                var i, r, o;
                if (iM(e) && (n = e.lazyUpdate, i = e.silent, r = e.replaceMerge, o = e.transition, e = e.notMerge), this[MM] = !0, !this._model || e) {
                    var a = new aS(this._api), s = this._theme, l = this._model = new Zb;
                    l.scheduler = this._scheduler, l.init(null, null, null, s, this._locale, a)
                }
                this._model.setOption(t, {replaceMerge: r}, lC), JM(this, o), n ? (this[CM] = {silent: i}, this[MM] = !1, this.getZr().wakeUp()) : (BM(this), NM.update.call(this), this._zr.flush(), this[CM] = !1, this[MM] = !1, WM.call(this, i), GM.call(this, i))
            }
        }, n.prototype.setTheme = function () {
            console.error("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
        }, n.prototype.getModel = function () {
            return this._model
        }, n.prototype.getOption = function () {
            return this._model && this._model.getOption()
        }, n.prototype.getWidth = function () {
            return this._zr.getWidth()
        }, n.prototype.getHeight = function () {
            return this._zr.getHeight()
        }, n.prototype.getDevicePixelRatio = function () {
            return this._zr.painter.dpr || oM && window.devicePixelRatio || 1
        }, n.prototype.getRenderedCanvas = function (t) {
            if (by.canvasSupported) {
                t = h({}, t || {}), t.pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor");
                var e = this._zr;
                return e.painter.getRenderedCanvas(t)
            }
        }, n.prototype.getSvgDataURL = function () {
            if (by.svgSupported) {
                var t = this._zr, e = t.storage.getDisplayList();
                return y(e, function (t) {
                    t.stopAnimation(null, !0)
                }), t.painter.toDataURL()
            }
        }, n.prototype.getDataURL = function (t) {
            if (!this._disposed) {
                t = t || {};
                var e = t.excludeComponents, n = this._model, i = [], r = this;
                eM(e, function (t) {
                    n.eachComponent({mainType: t}, function (t) {
                        var e = r._componentsMap[t.__viewId];
                        e.group.ignore || (i.push(e), e.group.ignore = !0)
                    })
                });
                var o = "svg" === this._zr.painter.getType() ? this.getSvgDataURL() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
                return eM(i, function (t) {
                    t.group.ignore = !1
                }), o
            }
        }, n.prototype.getConnectedDataURL = function (t) {
            if (!this._disposed && by.canvasSupported) {
                var e = "svg" === t.type, n = this.group, i = Math.min, r = Math.max, o = 1 / 0;
                if (gC[n]) {
                    var a = o, l = o, u = -o, h = -o, c = [], p = t && t.pixelRatio || 1;
                    y(dC, function (o) {
                        if (o.group === n) {
                            var p = e ? o.getZr().painter.getSvgDom().innerHTML : o.getRenderedCanvas(s(t)),
                                f = o.getDom().getBoundingClientRect();
                            a = i(f.left, a), l = i(f.top, l), u = r(f.right, u), h = r(f.bottom, h), c.push({
                                dom: p,
                                left: f.left,
                                top: f.top
                            })
                        }
                    }), a *= p, l *= p, u *= p, h *= p;
                    var f = u - a, d = h - l, g = By(), v = pi(g, {renderer: e ? "svg" : "canvas"});
                    if (v.resize({width: f, height: d}), e) {
                        var m = "";
                        return eM(c, function (t) {
                            var e = t.left - a, n = t.top - l;
                            m += '<g transform="translate(' + e + "," + n + ')">' + t.dom + "</g>"
                        }), v.painter.getSvgRoot().innerHTML = m, t.connectedBackgroundColor && v.painter.setBackgroundColor(t.connectedBackgroundColor), v.refreshImmediately(), v.painter.toDataURL()
                    }
                    return t.connectedBackgroundColor && v.add(new rx({
                        shape: {x: 0, y: 0, width: f, height: d},
                        style: {fill: t.connectedBackgroundColor}
                    })), eM(c, function (t) {
                        var e = new tx({style: {x: t.left * p - a, y: t.top * p - l, image: t.dom}});
                        v.add(e)
                    }), v.refreshImmediately(), g.toDataURL("image/" + (t && t.type || "png"))
                }
                return this.getDataURL(t)
            }
        }, n.prototype.convertToPixel = function (t, e) {
            return FM(this, "convertToPixel", t, e)
        }, n.prototype.convertFromPixel = function (t, e) {
            return FM(this, "convertFromPixel", t, e)
        }, n.prototype.containPixel = function (t, e) {
            if (!this._disposed) {
                var n, i = this._model, r = ar(i, t);
                return y(r, function (t, i) {
                    i.indexOf("Models") >= 0 && y(t, function (t) {
                        var r = t.coordinateSystem;
                        if (r && r.containPoint) n = n || !!r.containPoint(e); else if ("seriesModels" === i) {
                            var o = this._chartsMap[t.__viewId];
                            o && o.containPoint && (n = n || o.containPoint(e, t))
                        }
                    }, this)
                }, this), !!n
            }
        }, n.prototype.getVisual = function (t, e) {
            var n = this._model, i = ar(n, t, {defaultMainType: "series"}), r = i.seriesModel, o = r.getData(),
                a = i.hasOwnProperty("dataIndexInside") ? i.dataIndexInside : i.hasOwnProperty("dataIndex") ? o.indexOfRawIndex(i.dataIndex) : null;
            return null != a ? kh(o, a, e) : Lh(o, e)
        }, n.prototype.getViewOfComponentModel = function (t) {
            return this._componentsMap[t.__viewId]
        }, n.prototype.getViewOfSeriesModel = function (t) {
            return this._chartsMap[t.__viewId]
        }, n.prototype._initEvents = function () {
            var t = this;
            eM(rC, function (e) {
                var n = function (n) {
                    var i, r = t.getModel(), o = n.target, a = "globalout" === e;
                    if (a ? i = {} : o && nc(o, function (t) {
                        var e = cx(t);
                        if (e && null != e.dataIndex) {
                            var n = e.dataModel || r.getSeriesByIndex(e.seriesIndex);
                            return i = n && n.getDataParams(e.dataIndex, e.dataType) || {}, !0
                        }
                        return e.eventData ? (i = h({}, e.eventData), !0) : void 0
                    }, !0), i) {
                        var s = i.componentType, l = i.componentIndex;
                        ("markLine" === s || "markPoint" === s || "markArea" === s) && (s = "series", l = i.seriesIndex);
                        var u = s && null != l && r.getComponent(s, l),
                            c = u && t["series" === u.mainType ? "_chartsMap" : "_componentsMap"][u.__viewId];
                        i.event = n, i.type = e, t._$eventProcessor.eventInfo = {
                            targetEl: o,
                            packedEvent: i,
                            model: u,
                            view: c
                        }, t.trigger(e, i)
                    }
                };
                n.zrEventfulCallAtLast = !0, t._zr.on(e, n, t)
            }), eM(aC, function (e, n) {
                t._messageCenter.on(n, function (t) {
                    this.trigger(n, t)
                }, t)
            }), eM(["selectchanged"], function (e) {
                t._messageCenter.on(e, function (t) {
                    this.trigger(e, t)
                }, t)
            }), ec(this._messageCenter, this, this._api)
        }, n.prototype.isDisposed = function () {
            return this._disposed
        }, n.prototype.clear = function () {
            this._disposed || this.setOption({series: []}, !0)
        }, n.prototype.dispose = function () {
            if (!this._disposed) {
                this._disposed = !0, lr(this.getDom(), mC, "");
                var t = this._api, e = this._model;
                eM(this._componentsViews, function (n) {
                    n.dispose(e, t)
                }), eM(this._chartsViews, function (n) {
                    n.dispose(e, t)
                }), this._zr.dispose(), delete dC[this.id]
            }
        }, n.prototype.resize = function (t) {
            if (!this._disposed) {
                this._zr.resize(t);
                var e = this._model;
                if (this._loadingFX && this._loadingFX.resize(), e) {
                    var n = e.resetOption("media"), i = t && t.silent;
                    this[MM] = !0, n && BM(this), NM.update.call(this, {
                        type: "resize",
                        animation: {duration: 0}
                    }), this[MM] = !1, WM.call(this, i), GM.call(this, i)
                }
            }
        }, n.prototype.showLoading = function (t, e) {
            if (!this._disposed && (iM(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), fC[t])) {
                var n = fC[t](this._api, e), i = this._zr;
                this._loadingFX = n, i.add(n)
            }
        }, n.prototype.hideLoading = function () {
            this._disposed || (this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null)
        }, n.prototype.makeActionFromEvent = function (t) {
            var e = h({}, t);
            return e.type = aC[t.type], e
        }, n.prototype.dispatchAction = function (t, e) {
            if (!this._disposed && (iM(e) || (e = {silent: !!e}), oC[t.type] && this._model)) {
                if (this[MM]) return void this._pendingActions.push(t);
                var n = e.silent;
                HM.call(this, t, n);
                var i = e.flush;
                i ? this._zr.flush() : i !== !1 && by.browser.weChat && this._throttledZrFlush(), WM.call(this, n), GM.call(this, n)
            }
        }, n.prototype.updateLabelLayout = function () {
            var t = this._labelManager;
            t.updateLayoutConfig(this._api), t.layout(this._api), t.processLabelsOverall()
        }, n.prototype.appendData = function (t) {
            if (!this._disposed) {
                var e = t.seriesIndex, n = this.getModel(), i = n.getSeriesByIndex(e);
                i.appendData(t), this._scheduler.unfinished = !0, this.getZr().wakeUp()
            }
        }, n.internalField = function () {
            function t(t) {
                for (var e = [], n = t.currentStates, i = 0; i < n.length; i++) {
                    var r = n[i];
                    "emphasis" !== r && "blur" !== r && "select" !== r && e.push(r)
                }
                t.selected && t.states.select && e.push("select"), t.hoverState === vx && t.states.emphasis ? e.push("emphasis") : t.hoverState === yx && t.states.blur && e.push("blur"), t.useStates(e)
            }

            function n(t, e) {
                var n = t._zr, i = n.storage, r = 0;
                i.traverse(function (t) {
                    t.isGroup || r++
                }), r > e.get("hoverLayerThreshold") && !by.node && !by.worker && e.eachSeries(function (e) {
                    if (!e.preventUsingHoverLayer) {
                        var n = t._chartsMap[e.__viewId];
                        n.__alive && n.group.traverse(function (t) {
                            t.states.emphasis && (t.states.emphasis.hoverLayer = !0)
                        })
                    }
                })
            }

            function i(t, e) {
                var n = t.get("blendMode") || null;
                e.group.traverse(function (t) {
                    t.isGroup || (t.style.blend = n), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {
                        t.style.blend = n
                    })
                })
            }

            function r(t, e) {
                if (!t.preventAutoZ) {
                    var n = t.get("z"), i = t.get("zlevel");
                    e.group.traverse(function (t) {
                        if (!t.isGroup) {
                            null != n && (t.z = n), null != i && (t.zlevel = i);
                            var e = t.getTextContent(), r = t.getTextGuideLine();
                            if (e && (e.z = t.z, e.zlevel = t.zlevel, e.z2 = t.z2 + 2), r) {
                                var o = t.textGuideLineConfig && t.textGuideLineConfig.showAbove;
                                r.z = t.z, r.zlevel = t.zlevel, r.z2 = t.z2 + (o ? 1 : -1)
                            }
                        }
                    })
                }
            }

            function o(t, e) {
                e.group.traverse(function (t) {
                    if (!is(t)) {
                        var e = t.getTextContent(), n = t.getTextGuideLine();
                        t.stateTransition && (t.stateTransition = null), e && e.stateTransition && (e.stateTransition = null), n && n.stateTransition && (n.stateTransition = null), t.hasState() ? (t.prevStates = t.currentStates, t.clearStates()) : t.prevStates && (t.prevStates = null)
                    }
                })
            }

            function a(e, n) {
                var i = e.getModel("stateAnimation"), r = e.isAnimationEnabled(), o = i.get("duration"),
                    a = o > 0 ? {duration: o, delay: i.get("delay"), easing: i.get("easing")} : null;
                n.group.traverse(function (e) {
                    if (e.states && e.states.emphasis) {
                        if (is(e)) return;
                        if (e instanceof Z_ && wa(e), e.__dirty) {
                            var n = e.prevStates;
                            n && e.useStates(n)
                        }
                        if (r) {
                            e.stateTransition = a;
                            var i = e.getTextContent(), o = e.getTextGuideLine();
                            i && (i.stateTransition = a), o && (o.stateTransition = a)
                        }
                        e.__dirty && t(e)
                    }
                })
            }

            BM = function (t) {
                var e = t._scheduler;
                e.restorePipelines(t._model), e.prepareStageTasks(), EM(t, !0), EM(t, !1), e.plan()
            }, EM = function (t, e) {
                function n(t) {
                    var n = t.__requireNewView;
                    t.__requireNewView = !1;
                    var u = "_ec_" + t.id + "_" + t.type, h = !n && a[u];
                    if (!h) {
                        var c = pr(t.type), p = e ? zS.getClass(c.main, c.sub) : VS.getClass(c.sub);
                        h = new p, h.init(i, l), a[u] = h, o.push(h), s.add(h.group)
                    }
                    t.__viewId = h.__id = u, h.__alive = !0, h.__model = t, h.group.__ecComponentInfo = {
                        mainType: t.mainType,
                        index: t.componentIndex
                    }, !e && r.prepareView(h, t, i, l)
                }

                for (var i = t._model, r = t._scheduler, o = e ? t._componentsViews : t._chartsViews, a = e ? t._componentsMap : t._chartsMap, s = t._zr, l = t._api, u = 0; u < o.length; u++) o[u].__alive = !1;
                e ? i.eachComponent(function (t, e) {
                    "series" !== t && n(e)
                }) : i.eachSeries(n);
                for (var u = 0; u < o.length;) {
                    var h = o[u];
                    h.__alive ? u++ : (!e && h.renderTask.dispose(), s.remove(h.group), h.dispose(i, l), o.splice(u, 1), a[h.__id] === h && delete a[h.__id], h.__id = h.group.__ecComponentInfo = null)
                }
            }, zM = function (t, e, n, i, r) {
                function o(i) {
                    i && i.__alive && i[e] && i[e](i.__model, a, t._api, n)
                }

                var a = t._model;
                if (a.setUpdatePayload(n), !i) return void eM([].concat(t._componentsViews).concat(t._chartsViews), o);
                var s = {};
                s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];
                var l = {mainType: i, query: s};
                r && (l.subType = r);
                var u, h = n.excludeSeriesId;
                null != h && (u = X(), eM(Vi(h), function (t) {
                    var e = Ji(t, null);
                    null != e && u.set(e, !0)
                })), a && a.eachComponent(l, function (e) {
                    u && null != u.get(e.id) || (xa(n) && !n.notBlur ? e instanceof ES && ua(e, n, t._api) : _a(n) && e instanceof ES && (ha(e, n, t._api), ca(e), tC(t)), o(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId]))
                }, t)
            }, NM = {
                prepareAndUpdate: function (t) {
                    BM(this), NM.update.call(this, t)
                }, update: function (t) {
                    var e = this._model, n = this._api, i = this._zr, r = this._coordSysMgr, o = this._scheduler;
                    if (e) {
                        e.setUpdatePayload(t), o.restoreData(e, t), o.performSeriesTasks(e), r.create(e, n), o.performDataProcessorTasks(e, t), VM(this, e), r.update(e, n), XM(e), o.performVisualTasks(e, t), jM(this, e, n, t);
                        var a = e.get("backgroundColor") || "transparent", s = e.get("darkMode");
                        if (by.canvasSupported) i.setBackgroundColor(a), null != s && "auto" !== s && i.setDarkMode(s); else {
                            var l = on(a);
                            a = dn(l, "rgb"), 0 === l[3] && (a = "transparent")
                        }
                        KM(e, n)
                    }
                }, updateTransform: function (t) {
                    var e = this, n = this._model, i = this._api;
                    if (n) {
                        n.setUpdatePayload(t);
                        var r = [];
                        n.eachComponent(function (o, a) {
                            if ("series" !== o) {
                                var s = e.getViewOfComponentModel(a);
                                if (s && s.__alive) if (s.updateTransform) {
                                    var l = s.updateTransform(a, n, i, t);
                                    l && l.update && r.push(s)
                                } else r.push(s)
                            }
                        });
                        var o = X();
                        n.eachSeries(function (r) {
                            var a = e._chartsMap[r.__viewId];
                            if (a.updateTransform) {
                                var s = a.updateTransform(r, n, i, t);
                                s && s.update && o.set(r.uid, 1)
                            } else o.set(r.uid, 1)
                        }), XM(n), this._scheduler.performVisualTasks(n, t, {
                            setDirty: !0,
                            dirtyMap: o
                        }), ZM(this, n, i, t, o), KM(n, this._api)
                    }
                }, updateView: function (t) {
                    var e = this._model;
                    e && (e.setUpdatePayload(t), VS.markUpdateMethod(t, "updateView"), XM(e), this._scheduler.performVisualTasks(e, t, {setDirty: !0}), jM(this, this._model, this._api, t), KM(e, this._api))
                }, updateVisual: function (t) {
                    var e = this, n = this._model;
                    n && (n.setUpdatePayload(t), n.eachSeries(function (t) {
                        t.getData().clearAllVisual()
                    }), VS.markUpdateMethod(t, "updateVisual"), XM(n), this._scheduler.performVisualTasks(n, t, {
                        visualType: "visual",
                        setDirty: !0
                    }), n.eachComponent(function (i, r) {
                        if ("series" !== i) {
                            var o = e.getViewOfComponentModel(r);
                            o && o.__alive && o.updateVisual(r, n, e._api, t)
                        }
                    }), n.eachSeries(function (i) {
                        var r = e._chartsMap[i.__viewId];
                        r.updateVisual(i, n, e._api, t)
                    }), KM(n, this._api))
                }, updateLayout: function (t) {
                    NM.update.call(this, t)
                }
            }, FM = function (t, e, n, i) {
                if (!t._disposed) for (var r, o = t._model, a = t._coordSysMgr.getCoordinateSystems(), s = ar(o, n), l = 0; l < a.length; l++) {
                    var u = a[l];
                    if (u[e] && null != (r = u[e](o, s, i))) return r
                }
            }, VM = function (t, e) {
                var n = t._chartsMap, i = t._scheduler;
                e.eachSeries(function (t) {
                    i.updateStreamModes(t, n[t.__viewId])
                })
            }, HM = function (t, e) {
                var n = this, i = this.getModel(), r = t.type, o = t.escapeConnect, a = oC[r], s = a.actionInfo,
                    l = (s.update || "update").split(":"), u = l.pop(), p = null != l[0] && pr(l[0]);
                this[MM] = !0;
                var f = [t], d = !1;
                t.batch && (d = !0, f = v(t.batch, function (e) {
                    return e = c(h({}, e), t), e.batch = null, e
                }));
                var g, y = [], m = _a(t), _ = xa(t) || m;
                if (eM(f, function (t) {
                    g = a.action(t, n._model, n._api), g = g || h({}, t), g.type = s.event || g.type, y.push(g), _ ? (zM(n, u, t, "series"), tC(n)) : p && zM(n, u, t, p.main, p.sub)
                }), "none" === u || _ || p || (this[CM] ? (BM(this), NM.update.call(this, t), this[CM] = !1) : NM[u].call(this, t)), g = d ? {
                    type: s.event || r,
                    escapeConnect: o,
                    batch: y
                } : y[0], this[MM] = !1, !e) {
                    var x = this._messageCenter;
                    if (x.trigger(g.type, g), m) {
                        var w = {
                            type: "selectchanged",
                            escapeConnect: o,
                            selected: pa(i),
                            isFromClick: t.isFromClick || !1,
                            fromAction: t.type,
                            fromActionPayload: t
                        };
                        x.trigger(w.type, w)
                    }
                }
            }, WM = function (t) {
                for (var e = this._pendingActions; e.length;) {
                    var n = e.shift();
                    HM.call(this, n, t)
                }
            }, GM = function (t) {
                !t && this.trigger("updated")
            }, UM = function (t, e) {
                t.on("rendered", function (n) {
                    e.trigger("rendered", n), !t.animation.isFinished() || e[CM] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
                })
            }, YM = function (t, e) {
                t.on("mouseover", function (t) {
                    var n = t.target, i = nc(n, va);
                    if (i) {
                        var r = cx(i);
                        la(r.seriesIndex, r.focus, r.blurScope, e._api, !0), Qo(i, t), tC(e)
                    }
                }).on("mouseout", function (t) {
                    var n = t.target, i = nc(n, va);
                    if (i) {
                        var r = cx(i);
                        la(r.seriesIndex, r.focus, r.blurScope, e._api, !1), Jo(i, t), tC(e)
                    }
                }).on("click", function (t) {
                    var n = t.target, i = nc(n, function (t) {
                        return null != cx(t).dataIndex
                    }, !0);
                    if (i) {
                        var r = i.selected ? "unselect" : "select", o = cx(i);
                        e._api.dispatchAction({
                            type: r,
                            dataType: o.dataType,
                            dataIndexInside: o.dataIndex,
                            seriesIndex: o.seriesIndex,
                            isFromClick: !0
                        })
                    }
                })
            }, XM = function (t) {
                t.clearColorPalette(), t.eachSeries(function (t) {
                    t.clearColorPalette()
                })
            }, jM = function (t, e, n, i) {
                qM(t, e, n, i), eM(t._chartsViews, function (t) {
                    t.__alive = !1
                }), ZM(t, e, n, i), eM(t._chartsViews, function (t) {
                    t.__alive || t.remove(e, n)
                })
            }, qM = function (t, e, n, i, s) {
                eM(s || t._componentsViews, function (t) {
                    var s = t.__model;
                    o(s, t), t.render(s, e, n, i), r(s, t), a(s, t)
                })
            }, ZM = function (t, e, s, l, u) {
                var h = t._scheduler, c = t._labelManager;
                c.clearLabels();
                var p = !1;
                e.eachSeries(function (e) {
                    var n = t._chartsMap[e.__viewId];
                    n.__alive = !0;
                    var r = n.renderTask;
                    h.updatePayload(r, l), o(e, n), u && u.get(e.uid) && r.dirty(), r.perform(h.getPerformArgs(r)) && (p = !0), e.__transientTransitionOpt = null, n.group.silent = !!e.get("silent"), i(e, n), ca(e), c.addLabelsOfSeries(n)
                }), h.unfinished = p || h.unfinished, c.updateLayoutConfig(s), c.layout(s), c.processLabelsOverall(), e.eachSeries(function (e) {
                    var n = t._chartsMap[e.__viewId];
                    r(e, n), a(e, n)
                }), n(t, e)
            }, KM = function (t, e) {
                eM(hC, function (n) {
                    n(t, e)
                })
            }, tC = function (t) {
                t[IM] = !0, t.getZr().wakeUp()
            }, eC = function (e) {
                e[IM] && (e.getZr().storage.traverse(function (e) {
                    is(e) || t(e)
                }), e[IM] = !1)
            }, $M = function (t) {
                return new (function (n) {
                    function i() {
                        return null !== n && n.apply(this, arguments) || this
                    }

                    return e(i, n), i.prototype.getCoordinateSystems = function () {
                        return t._coordSysMgr.getCoordinateSystems()
                    }, i.prototype.getComponentByElement = function (e) {
                        for (; e;) {
                            var n = e.__ecComponentInfo;
                            if (null != n) return t._model.getComponent(n.mainType, n.index);
                            e = e.parent
                        }
                    }, i.prototype.enterEmphasis = function (e, n) {
                        ta(e, n), tC(t)
                    }, i.prototype.leaveEmphasis = function (e, n) {
                        ea(e, n), tC(t)
                    }, i.prototype.enterBlur = function (e) {
                        na(e), tC(t)
                    }, i.prototype.leaveBlur = function (e) {
                        ia(e), tC(t)
                    }, i.prototype.enterSelect = function (e) {
                        ra(e), tC(t)
                    }, i.prototype.leaveSelect = function (e) {
                        oa(e), tC(t)
                    }, i.prototype.getModel = function () {
                        return t.getModel()
                    }, i.prototype.getViewOfComponentModel = function (e) {
                        return t.getViewOfComponentModel(e)
                    }, i.prototype.getViewOfSeriesModel = function (e) {
                        return t.getViewOfSeriesModel(e)
                    }, i
                }(nS))(t)
            }, QM = function (t) {
                function e(t, e) {
                    for (var n = 0; n < t.length; n++) {
                        var i = t[n];
                        i[AM] = e
                    }
                }

                eM(aC, function (n, i) {
                    t._messageCenter.on(i, function (n) {
                        if (gC[t.group] && t[AM] !== kM) {
                            if (n && n.escapeConnect) return;
                            var i = t.makeActionFromEvent(n), r = [];
                            eM(dC, function (e) {
                                e !== t && e.group === t.group && r.push(e)
                            }), e(r, kM), eM(r, function (t) {
                                t[AM] !== LM && t.dispatchAction(i)
                            }), e(r, PM)
                        }
                    })
                })
            }, JM = function (t, e) {
                var n = t._model;
                y(Vi(e), function (t) {
                    var e, i = t.from, r = t.to;
                    null == r && Fi(e);
                    var o = {includeMainTypes: ["series"], enableAll: !1, enableNone: !1}, a = i ? ar(n, i, o) : null,
                        s = ar(n, r, o), l = s.seriesModel;
                    null == l && (e = ""), a && a.seriesModel !== l && (e = ""), null != e && Fi(e), l.__transientTransitionOpt = {
                        from: i ? i.dimension : null,
                        to: r.dimension,
                        dividingMethod: t.dividingMethod
                    }
                })
            }
        }(), n
    }(jy), iC = nC.prototype;
    iC.on = zc("on"), iC.off = zc("off"), iC.one = function (t, e, n) {
        function i() {
            for (var n = [], o = 0; o < arguments.length; o++) n[o] = arguments[o];
            e && e.apply && e.apply(this, n), r.off(t, i)
        }

        var r = this;
        this.on.call(this, t, i, n)
    };
    var rC = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"],
        oC = {}, aC = {}, sC = [], lC = [], uC = [], hC = [], cC = [], pC = {}, fC = {}, dC = {}, gC = {},
        yC = +new Date - 0, vC = +new Date - 0, mC = "_echarts_instance_", _C = Wc, xC = [], wC = Pu;
    ep(yM, ZS), ep(_M, $S), ep(_M, QS), ep(yM, gT), ep(_M, yT), ep(SM, Ec), jc(au), qc(hM, su), ip("default", mh), $c({
        type: Sx,
        event: Sx,
        update: Sx
    }, K), $c({type: Tx, event: Tx, update: Tx}, K), $c({type: Mx, event: Mx, update: Mx}, K), $c({
        type: Cx,
        event: Cx,
        update: Cx
    }, K), $c({type: Ix, event: Ix, update: Ix}, K), Xc("light", oT), Xc("dark", hT);
    var bC, SC, TC, MC, CC, IC, DC, AC, kC, LC, PC, OC, RC, BC, EC = {}, zC = function () {
            function t(t, e, n, i, r, o) {
                this._old = t, this._new = e, this._oldKeyGetter = n || lp, this._newKeyGetter = i || lp, this.context = r, this._diffModeMultiple = "multiple" === o
            }

            return t.prototype.add = function (t) {
                return this._add = t, this
            }, t.prototype.update = function (t) {
                return this._update = t, this
            }, t.prototype.updateManyToOne = function (t) {
                return this._updateManyToOne = t, this
            }, t.prototype.updateOneToMany = function (t) {
                return this._updateOneToMany = t, this
            }, t.prototype.remove = function (t) {
                return this._remove = t, this
            }, t.prototype.execute = function () {
                this[this._diffModeMultiple ? "_executeMultiple" : "_executeOneToOne"]()
            }, t.prototype._executeOneToOne = function () {
                var t = this._old, e = this._new, n = {}, i = new Array(t.length), r = new Array(e.length);
                this._initIndexMap(t, null, i, "_oldKeyGetter"), this._initIndexMap(e, n, r, "_newKeyGetter");
                for (var o = 0; o < t.length; o++) {
                    var a = i[o], s = n[a], l = sp(s);
                    if (l > 1) {
                        var u = s.shift();
                        1 === s.length && (n[a] = s[0]), this._update && this._update(u, o)
                    } else 1 === l ? (n[a] = null, this._update && this._update(s, o)) : this._remove && this._remove(o)
                }
                this._performRestAdd(r, n)
            }, t.prototype._executeMultiple = function () {
                var t = this._old, e = this._new, n = {}, i = {}, r = [], o = [];
                this._initIndexMap(t, n, r, "_oldKeyGetter"), this._initIndexMap(e, i, o, "_newKeyGetter");
                for (var a = 0; a < r.length; a++) {
                    var s = r[a], l = n[s], u = i[s], h = sp(l), c = sp(u);
                    if (h > 1 && 1 === c) this._updateManyToOne && this._updateManyToOne(u, l), i[s] = null; else if (1 === h && c > 1) this._updateOneToMany && this._updateOneToMany(u, l), i[s] = null; else if (1 === h && 1 === c) this._update && this._update(u, l), i[s] = null; else if (h > 1) for (var p = 0; h > p; p++) this._remove && this._remove(l[p]); else this._remove && this._remove(l)
                }
                this._performRestAdd(o, i)
            }, t.prototype._performRestAdd = function (t, e) {
                for (var n = 0; n < t.length; n++) {
                    var i = t[n], r = e[i], o = sp(r);
                    if (o > 1) for (var a = 0; o > a; a++) this._add && this._add(r[a]); else 1 === o && this._add && this._add(r);
                    e[i] = null
                }
            }, t.prototype._initIndexMap = function (t, e, n, i) {
                for (var r = this._diffModeMultiple, o = 0; o < t.length; o++) {
                    var a = "_ec_" + this[i](t[o], o);
                    if (r || (n[o] = a), e) {
                        var s = e[a], l = sp(s);
                        0 === l ? (e[a] = o, r && n.push(a)) : 1 === l ? e[a] = [s, o] : s.push(o)
                    }
                }
            }, t
        }(), NC = function () {
            function t(t) {
                this.otherDims = {}, null != t && h(this, t)
            }

            return t
        }(), FC = Math.floor, VC = A, HC = v, WC = "undefined", GC = -1, UC = "e\x00\x00", YC = {
            "float": typeof Float64Array === WC ? Array : Float64Array,
            "int": typeof Int32Array === WC ? Array : Int32Array,
            ordinal: Array,
            number: Array,
            time: Array
        }, XC = typeof Uint32Array === WC ? Array : Uint32Array, jC = typeof Int32Array === WC ? Array : Int32Array,
        qC = typeof Uint16Array === WC ? Array : Uint16Array,
        ZC = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx", "_nameRepeatCount"],
        KC = ["_extent", "_approximateExtent", "_rawExtent"], $C = function () {
            function t(t, e) {
                this.type = "list", this._count = 0, this._rawCount = 0, this._storage = {}, this._storageArr = [], this._nameList = [], this._idList = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this._itemLayouts = [], this._graphicEls = [], this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._calculationInfo = {}, this.hasItemOption = !0, this.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "lttbDownSample", "map"], this.CHANGABLE_METHODS = ["filterSelf", "selectRange"], this.DOWNSAMPLE_METHODS = ["downSample", "lttbDownSample"], this.getRawIndex = CC, t = t || ["x", "y"];
                for (var n = {}, i = [], r = {}, o = 0; o < t.length; o++) {
                    var a = t[o], s = C(a) ? new NC({name: a}) : a instanceof NC ? a : new NC(a), l = s.name;
                    s.type = s.type || "float", s.coordDim || (s.coordDim = l, s.coordDimIndex = 0);
                    var u = s.otherDims = s.otherDims || {};
                    i.push(l), n[l] = s, s.index = o, s.createInvertedIndices && (r[l] = []), 0 === u.itemName && (this._nameDimIdx = o, this._nameOrdinalMeta = s.ordinalMeta), 0 === u.itemId && (this._idDimIdx = o, this._idOrdinalMeta = s.ordinalMeta)
                }
                this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this._dimensionsSummary = up(this), this._invertedIndicesMap = r, this.userOutput = this._dimensionsSummary.userOutput
            }

            return t.prototype.getDimension = function (t) {
                return ("number" == typeof t || !isNaN(t) && !this._dimensionInfos.hasOwnProperty(t)) && (t = this.dimensions[t]), t
            }, t.prototype.getDimensionInfo = function (t) {
                return this._dimensionInfos[this.getDimension(t)]
            }, t.prototype.getDimensionsOnCoord = function () {
                return this._dimensionsSummary.dataDimsOnCoord.slice()
            }, t.prototype.mapDimension = function (t, e) {
                var n = this._dimensionsSummary;
                if (null == e) return n.encodeFirstDimNotExtra[t];
                var i = n.encode[t];
                return i ? i[e] : null
            }, t.prototype.mapDimensionsAll = function (t) {
                var e = this._dimensionsSummary, n = e.encode[t];
                return (n || []).slice()
            }, t.prototype.initData = function (t, e, n) {
                var i = uu(t) || g(t), r = i ? new dS(t, this.dimensions.length) : t;
                this._rawData = r;
                var o = r.getSource().sourceFormat;
                this._storage = {}, this._indices = null, this._dontMakeIdFromName = null != this._idDimIdx || o === Nb || !!r.fillStorage, this._nameList = (e || []).slice(), this._idList = [], this._nameRepeatCount = {}, n || (this.hasItemOption = !1), this.defaultDimValueGetter = bC[o], this._dimValueGetter = n = n || this.defaultDimValueGetter, this._dimValueGetterArrayRows = bC.arrayRows, this._rawExtent = {}, this._initDataFromProvider(0, r.count()), r.pure && (this.hasItemOption = !1)
            }, t.prototype.getProvider = function () {
                return this._rawData
            }, t.prototype.appendData = function (t) {
                var e = this._rawData, n = this.count();
                e.appendData(t);
                var i = e.count();
                e.persistent || (i += n), this._initDataFromProvider(n, i, !0)
            }, t.prototype.appendValues = function (t, e) {
                for (var n = this._storage, i = this.dimensions, r = i.length, o = this._rawExtent, a = this.count(), s = a + Math.max(t.length, e ? e.length : 0), l = 0; r > l; l++) {
                    var u = i[l];
                    o[u] || (o[u] = OC()), MC(n, this._dimensionInfos[u], s, !0)
                }
                for (var h = HC(i, function (t) {
                    return o[t]
                }), c = this._storageArr = HC(i, function (t) {
                    return n[t]
                }), p = [], f = a; s > f; f++) {
                    for (var d = f - a, g = 0; r > g; g++) {
                        var u = i[g], y = this._dimValueGetterArrayRows(t[d] || p, u, d, g);
                        c[g][f] = y;
                        var v = h[g];
                        y < v[0] && (v[0] = y), y > v[1] && (v[1] = y)
                    }
                    e && (this._nameList[f] = e[d], this._dontMakeIdFromName || kC(this, f))
                }
                this._rawCount = this._count = s, this._extent = {}, SC(this)
            }, t.prototype._initDataFromProvider = function (t, e, n) {
                if (!(t >= e)) {
                    for (var i = this._rawData, r = this._storage, o = this.dimensions, a = o.length, s = this._dimensionInfos, l = this._nameList, u = this._idList, h = this._rawExtent, c = i.getSource().sourceFormat, p = c === Rb, f = 0; a > f; f++) {
                        var d = o[f];
                        h[d] || (h[d] = OC()), MC(r, s[d], e, n)
                    }
                    var g = this._storageArr = HC(o, function (t) {
                        return r[t]
                    }), y = HC(o, function (t) {
                        return h[t]
                    });
                    if (i.fillStorage) i.fillStorage(t, e, g, y); else for (var v = [], m = t; e > m; m++) {
                        v = i.getItem(m, v);
                        for (var _ = 0; a > _; _++) {
                            var d = o[_], x = g[_], w = this._dimValueGetter(v, d, m, _);
                            x[m] = w;
                            var b = y[_];
                            w < b[0] && (b[0] = w), w > b[1] && (b[1] = w)
                        }
                        if (p && !i.pure && v) {
                            var S = v.name;
                            null == l[m] && null != S && (l[m] = Ji(S, null));
                            var T = v.id;
                            null == u[m] && null != T && (u[m] = Ji(T, null))
                        }
                        this._dontMakeIdFromName || kC(this, m)
                    }
                    !i.persistent && i.clean && i.clean(), this._rawCount = this._count = e, this._extent = {}, SC(this)
                }
            }, t.prototype.count = function () {
                return this._count
            }, t.prototype.getIndices = function () {
                var t, e = this._indices;
                if (e) {
                    var n = e.constructor, i = this._count;
                    if (n === Array) {
                        t = new n(i);
                        for (var r = 0; i > r; r++) t[r] = e[r]
                    } else t = new n(e.buffer, 0, i)
                } else {
                    var n = TC(this);
                    t = new n(this.count());
                    for (var r = 0; r < t.length; r++) t[r] = r
                }
                return t
            }, t.prototype.getByDimIdx = function (t, e) {
                if (!(e >= 0 && e < this._count)) return 0 / 0;
                var n = this._storageArr[t];
                return n ? n[this.getRawIndex(e)] : 0 / 0
            }, t.prototype.get = function (t, e) {
                if (!(e >= 0 && e < this._count)) return 0 / 0;
                var n = this._storage[t];
                return n ? n[this.getRawIndex(e)] : 0 / 0
            }, t.prototype.getByRawIndex = function (t, e) {
                if (!(e >= 0 && e < this._rawCount)) return 0 / 0;
                var n = this._storage[t];
                return n ? n[e] : 0 / 0
            }, t.prototype.getValues = function (t, e) {
                var n = [];
                T(t) || (e = t, t = this.dimensions);
                for (var i = 0, r = t.length; r > i; i++) n.push(this.get(t[i], e));
                return n
            }, t.prototype.hasValue = function (t) {
                for (var e = this._dimensionsSummary.dataDimsOnCoord, n = 0, i = e.length; i > n; n++) if (isNaN(this.get(e[n], t))) return !1;
                return !0
            }, t.prototype.getDataExtent = function (t) {
                t = this.getDimension(t);
                var e = this._storage[t], n = OC();
                if (!e) return n;
                var i, r = this.count(), o = !this._indices;
                if (o) return this._rawExtent[t].slice();
                if (i = this._extent[t]) return i.slice();
                i = n;
                for (var a = i[0], s = i[1], l = 0; r > l; l++) {
                    var u = this.getRawIndex(l), h = e[u];
                    a > h && (a = h), h > s && (s = h)
                }
                return i = [a, s], this._extent[t] = i, i
            }, t.prototype.getApproximateExtent = function (t) {
                return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t)
            }, t.prototype.setApproximateExtent = function (t, e) {
                e = this.getDimension(e), this._approximateExtent[e] = t.slice()
            }, t.prototype.getCalculationInfo = function (t) {
                return this._calculationInfo[t]
            }, t.prototype.setCalculationInfo = function (t, e) {
                VC(t) ? h(this._calculationInfo, t) : this._calculationInfo[t] = e
            }, t.prototype.getSum = function (t) {
                var e = this._storage[t], n = 0;
                if (e) for (var i = 0, r = this.count(); r > i; i++) {
                    var o = this.get(t, i);
                    isNaN(o) || (n += o)
                }
                return n
            }, t.prototype.getMedian = function (t) {
                var e = [];
                this.each(t, function (t) {
                    isNaN(t) || e.push(t)
                });
                var n = e.sort(function (t, e) {
                    return t - e
                }), i = this.count();
                return 0 === i ? 0 : i % 2 === 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2
            }, t.prototype.rawIndexOf = function (t, e) {
                var n = t && this._invertedIndicesMap[t], i = n[e];
                return null == i || isNaN(i) ? GC : i
            }, t.prototype.indexOfName = function (t) {
                for (var e = 0, n = this.count(); n > e; e++) if (this.getName(e) === t) return e;
                return -1
            }, t.prototype.indexOfRawIndex = function (t) {
                if (t >= this._rawCount || 0 > t) return -1;
                if (!this._indices) return t;
                var e = this._indices, n = e[t];
                if (null != n && n < this._count && n === t) return t;
                for (var i = 0, r = this._count - 1; r >= i;) {
                    var o = (i + r) / 2 | 0;
                    if (e[o] < t) i = o + 1; else {
                        if (!(e[o] > t)) return o;
                        r = o - 1
                    }
                }
                return -1
            }, t.prototype.indicesOfNearest = function (t, e, n) {
                var i = this._storage, r = i[t], o = [];
                if (!r) return o;
                null == n && (n = 1 / 0);
                for (var a = 1 / 0, s = -1, l = 0, u = 0, h = this.count(); h > u; u++) {
                    var c = this.getRawIndex(u), p = e - r[c], f = Math.abs(p);
                    n >= f && ((a > f || f === a && p >= 0 && 0 > s) && (a = f, s = p, l = 0), p === s && (o[l++] = u))
                }
                return o.length = l, o
            }, t.prototype.getRawDataItem = function (t) {
                if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
                for (var e = [], n = 0; n < this.dimensions.length; n++) {
                    var i = this.dimensions[n];
                    e.push(this.get(i, t))
                }
                return e
            }, t.prototype.getName = function (t) {
                var e = this.getRawIndex(t), n = this._nameList[e];
                return null == n && null != this._nameDimIdx && (n = AC(this, this._nameDimIdx, this._nameOrdinalMeta, e)), null == n && (n = ""), n
            }, t.prototype.getId = function (t) {
                return DC(this, this.getRawIndex(t))
            }, t.prototype.each = function (t, e, n, i) {
                var r = this;
                if (this._count) {
                    "function" == typeof t && (i = n, n = e, e = t, t = []);
                    for (var o = n || i || this, a = HC(LC(t), this.getDimension, this), s = a.length, l = HC(a, function (t) {
                        return r._dimensionInfos[t].index
                    }), u = this._storageArr, h = 0, c = this.count(); c > h; h++) {
                        var p = this.getRawIndex(h);
                        switch (s) {
                            case 0:
                                e.call(o, h);
                                break;
                            case 1:
                                e.call(o, u[l[0]][p], h);
                                break;
                            case 2:
                                e.call(o, u[l[0]][p], u[l[1]][p], h);
                                break;
                            default:
                                for (var f = 0, d = []; s > f; f++) d[f] = u[l[f]][p];
                                d[f] = h, e.apply(o, d)
                        }
                    }
                }
            }, t.prototype.filterSelf = function (t, e, n, i) {
                var r = this;
                if (this._count) {
                    "function" == typeof t && (i = n, n = e, e = t, t = []);
                    for (var o = n || i || this, a = HC(LC(t), this.getDimension, this), s = this.count(), l = TC(this), u = new l(s), h = [], c = a.length, p = 0, f = HC(a, function (t) {
                        return r._dimensionInfos[t].index
                    }), d = f[0], g = this._storageArr, y = 0; s > y; y++) {
                        var v = void 0, m = this.getRawIndex(y);
                        if (0 === c) v = e.call(o, y); else if (1 === c) {
                            var _ = g[d][m];
                            v = e.call(o, _, y)
                        } else {
                            for (var x = 0; c > x; x++) h[x] = g[f[x]][m];
                            h[x] = y, v = e.apply(o, h)
                        }
                        v && (u[p++] = m)
                    }
                    return s > p && (this._indices = u), this._count = p, this._extent = {}, this.getRawIndex = this._indices ? IC : CC, this
                }
            }, t.prototype.selectRange = function (t) {
                var e = this, n = this._count;
                if (n) {
                    var i = [];
                    for (var r in t) t.hasOwnProperty(r) && i.push(r);
                    var o = i.length;
                    if (o) {
                        var a = this.count(), s = TC(this), l = new s(a), u = 0, h = i[0], c = HC(i, function (t) {
                            return e._dimensionInfos[t].index
                        }), p = t[h][0], f = t[h][1], d = this._storageArr, g = !1;
                        if (!this._indices) {
                            var y = 0;
                            if (1 === o) {
                                for (var v = d[c[0]], m = 0; n > m; m++) {
                                    var _ = v[m];
                                    (_ >= p && f >= _ || isNaN(_)) && (l[u++] = y), y++
                                }
                                g = !0
                            } else if (2 === o) {
                                for (var v = d[c[0]], x = d[c[1]], w = t[i[1]][0], b = t[i[1]][1], m = 0; n > m; m++) {
                                    var _ = v[m], S = x[m];
                                    (_ >= p && f >= _ || isNaN(_)) && (S >= w && b >= S || isNaN(S)) && (l[u++] = y), y++
                                }
                                g = !0
                            }
                        }
                        if (!g) if (1 === o) for (var m = 0; a > m; m++) {
                            var T = this.getRawIndex(m), _ = d[c[0]][T];
                            (_ >= p && f >= _ || isNaN(_)) && (l[u++] = T)
                        } else for (var m = 0; a > m; m++) {
                            for (var M = !0, T = this.getRawIndex(m), C = 0; o > C; C++) {
                                var I = i[C], _ = d[c[C]][T];
                                (_ < t[I][0] || _ > t[I][1]) && (M = !1)
                            }
                            M && (l[u++] = this.getRawIndex(m))
                        }
                        return a > u && (this._indices = l), this._count = u, this._extent = {}, this.getRawIndex = this._indices ? IC : CC, this
                    }
                }
            }, t.prototype.mapArray = function (t, e, n, i) {
                "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;
                var r = [];
                return this.each(t, function () {
                    r.push(e && e.apply(this, arguments))
                }, n), r
            }, t.prototype.map = function (t, e, n, i) {
                var r = n || i || this, o = HC(LC(t), this.getDimension, this), a = PC(this, o), s = a._storage;
                a._indices = this._indices, a.getRawIndex = a._indices ? IC : CC;
                for (var l = [], u = o.length, h = this.count(), c = [], p = a._rawExtent, f = 0; h > f; f++) {
                    for (var d = 0; u > d; d++) c[d] = this.get(o[d], f);
                    c[u] = f;
                    var g = e && e.apply(r, c);
                    if (null != g) {
                        "object" != typeof g && (l[0] = g, g = l);
                        for (var y = this.getRawIndex(f), v = 0; v < g.length; v++) {
                            var m = o[v], _ = g[v], x = p[m], w = s[m];
                            w && (w[y] = _), _ < x[0] && (x[0] = _), _ > x[1] && (x[1] = _)
                        }
                    }
                }
                return a
            }, t.prototype.downSample = function (t, e, n, i) {
                for (var r = PC(this, [t]), o = r._storage, a = [], s = FC(1 / e), l = o[t], u = this.count(), h = r._rawExtent[t], c = new (TC(this))(u), p = 0, f = 0; u > f; f += s) {
                    s > u - f && (s = u - f, a.length = s);
                    for (var d = 0; s > d; d++) {
                        var g = this.getRawIndex(f + d);
                        a[d] = l[g]
                    }
                    var y = n(a), v = this.getRawIndex(Math.min(f + i(a, y) || 0, u - 1));
                    l[v] = y, y < h[0] && (h[0] = y), y > h[1] && (h[1] = y), c[p++] = v
                }
                return r._count = p, r._indices = c, r.getRawIndex = IC, r
            }, t.prototype.lttbDownSample = function (t, e) {
                var n, i, r, o = PC(this, []), a = o._storage, s = a[t], l = this.count(), u = new (TC(this))(l), h = 0,
                    c = FC(1 / e), p = this.getRawIndex(0);
                u[h++] = p;
                for (var f = 1; l - 1 > f; f += c) {
                    for (var d = Math.min(f + c, l - 1), g = Math.min(f + 2 * c, l), y = (g + d) / 2, v = 0, m = d; g > m; m++) {
                        var _ = this.getRawIndex(m), x = s[_];
                        isNaN(x) || (v += x)
                    }
                    v /= g - d;
                    var w = f, b = Math.min(f + c, l), S = f - 1, T = s[p];
                    n = -1, r = w;
                    for (var m = w; b > m; m++) {
                        var _ = this.getRawIndex(m), x = s[_];
                        isNaN(x) || (i = Math.abs((S - y) * (x - T) - (S - m) * (v - T)), i > n && (n = i, r = _))
                    }
                    u[h++] = r, p = r
                }
                return u[h++] = this.getRawIndex(l - 1), o._count = h, o._indices = u, o.getRawIndex = IC, o
            }, t.prototype.getItemModel = function (t) {
                var e = this.hostModel, n = this.getRawDataItem(t);
                return new $w(n, e, e && e.ecModel)
            }, t.prototype.diff = function (t) {
                var e = this;
                return new zC(t ? t.getIndices() : [], this.getIndices(), function (e) {
                    return DC(t, e)
                }, function (t) {
                    return DC(e, t)
                })
            }, t.prototype.getVisual = function (t) {
                var e = this._visual;
                return e && e[t]
            }, t.prototype.setVisual = function (t, e) {
                this._visual = this._visual || {}, VC(t) ? h(this._visual, t) : this._visual[t] = e
            }, t.prototype.getItemVisual = function (t, e) {
                var n = this._itemVisuals[t], i = n && n[e];
                return null == i ? this.getVisual(e) : i
            }, t.prototype.hasItemVisual = function () {
                return this._itemVisuals.length > 0
            }, t.prototype.ensureUniqueItemVisual = function (t, e) {
                var n = this._itemVisuals, i = n[t];
                i || (i = n[t] = {});
                var r = i[e];
                return null == r && (r = this.getVisual(e), T(r) ? r = r.slice() : VC(r) && (r = h({}, r)), i[e] = r), r
            }, t.prototype.setItemVisual = function (t, e, n) {
                var i = this._itemVisuals[t] || {};
                this._itemVisuals[t] = i, VC(e) ? h(i, e) : i[e] = n
            }, t.prototype.clearAllVisual = function () {
                this._visual = {}, this._itemVisuals = []
            }, t.prototype.setLayout = function (t, e) {
                if (VC(t)) for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]); else this._layout[t] = e
            }, t.prototype.getLayout = function (t) {
                return this._layout[t]
            }, t.prototype.getItemLayout = function (t) {
                return this._itemLayouts[t]
            }, t.prototype.setItemLayout = function (t, e, n) {
                this._itemLayouts[t] = n ? h(this._itemLayouts[t] || {}, e) : e
            }, t.prototype.clearItemLayouts = function () {
                this._itemLayouts.length = 0
            }, t.prototype.setItemGraphicEl = function (t, e) {
                var n = this.hostModel;
                if (e) {
                    var i = cx(e);
                    i.dataIndex = t, i.dataType = this.dataType, i.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(RC, e)
                }
                this._graphicEls[t] = e
            }, t.prototype.getItemGraphicEl = function (t) {
                return this._graphicEls[t]
            }, t.prototype.eachItemGraphicEl = function (t, e) {
                y(this._graphicEls, function (n, i) {
                    n && t && t.call(e, n, i)
                })
            }, t.prototype.cloneShallow = function (e) {
                if (!e) {
                    var n = HC(this.dimensions, this.getDimensionInfo, this);
                    e = new t(n, this.hostModel)
                }
                if (e._storage = this._storage, e._storageArr = this._storageArr, BC(e, this), this._indices) {
                    var i = this._indices.constructor;
                    if (i === Array) {
                        var r = this._indices.length;
                        e._indices = new i(r);
                        for (var o = 0; r > o; o++) e._indices[o] = this._indices[o]
                    } else e._indices = new i(this._indices)
                } else e._indices = null;
                return e.getRawIndex = e._indices ? IC : CC, e
            }, t.prototype.wrapMethod = function (t, e) {
                var n = this[t];
                "function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
                    var t = n.apply(this, arguments);
                    return e.apply(this, [t].concat(V(arguments)))
                })
            }, t.internalField = function () {
                function e(t, e, n, i) {
                    return Cu(t[i], this._dimensionInfos[e])
                }

                function n(t) {
                    var e = t.constructor;
                    return e === Array ? t.slice() : new e(t)
                }

                bC = {
                    arrayRows: e, objectRows: function (t, e) {
                        return Cu(t[e], this._dimensionInfos[e])
                    }, keyedColumns: e, original: function (t, e, n, i) {
                        var r = t && (null == t.value ? t : t.value);
                        return !this._rawData.pure && Gi(t) && (this.hasItemOption = !0), Cu(r instanceof Array ? r[i] : r, this._dimensionInfos[e])
                    }, typedArray: function (t, e, n, i) {
                        return t[i]
                    }
                }, SC = function (t) {
                    var e = t._invertedIndicesMap;
                    y(e, function (n, i) {
                        var r = t._dimensionInfos[i], o = r.ordinalMeta;
                        if (o) {
                            n = e[i] = new jC(o.categories.length);
                            for (var a = 0; a < n.length; a++) n[a] = GC;
                            for (var a = 0; a < t._count; a++) n[t.get(i, a)] = a
                        }
                    })
                }, AC = function (t, e, n, i) {
                    var r, o = t._storageArr[e];
                    return o && (r = o[i], n && n.categories.length && (r = n.categories[r])), Ji(r, null)
                }, TC = function (t) {
                    return t._rawCount > 65535 ? XC : qC
                }, MC = function (t, e, n, i) {
                    var r = YC[e.type], o = e.name;
                    if (i) {
                        var a = t[o], s = a && a.length;
                        if (s !== n) {
                            for (var l = new r(n), u = 0; s > u; u++) l[u] = a[u];
                            t[o] = l
                        }
                    } else t[o] = new r(n)
                }, CC = function (t) {
                    return t
                }, IC = function (t) {
                    return t < this._count && t >= 0 ? this._indices[t] : -1
                }, DC = function (t, e) {
                    var n = t._idList[e];
                    return null == n && null != t._idDimIdx && (n = AC(t, t._idDimIdx, t._idOrdinalMeta, e)), null == n && (n = UC + e), n
                }, LC = function (t) {
                    return T(t) || (t = null != t ? [t] : []), t
                }, PC = function (e, i) {
                    var r = e.dimensions, o = new t(HC(r, e.getDimensionInfo, e), e.hostModel);
                    BC(o, e);
                    for (var a = o._storage = {}, s = e._storage, l = o._storageArr = [], u = 0; u < r.length; u++) {
                        var h = r[u];
                        s[h] && (p(i, h) >= 0 ? (a[h] = n(s[h]), o._rawExtent[h] = OC(), o._extent[h] = null) : a[h] = s[h], l.push(a[h]))
                    }
                    return o
                }, OC = function () {
                    return [1 / 0, -1 / 0]
                }, RC = function (t) {
                    var e = cx(t), n = cx(this);
                    e.seriesIndex = n.seriesIndex, e.dataIndex = n.dataIndex, e.dataType = n.dataType
                }, BC = function (t, e) {
                    y(ZC.concat(e.__wrappedMethods || []), function (n) {
                        e.hasOwnProperty(n) && (t[n] = e[n])
                    }), t.__wrappedMethods = e.__wrappedMethods, y(KC, function (n) {
                        t[n] = s(e[n])
                    }), t._calculationInfo = h({}, e._calculationInfo)
                }, kC = function (t, e) {
                    var n = t._nameList, i = t._idList, r = t._nameDimIdx, o = t._idDimIdx, a = n[e], s = i[e];
                    if (null == a && null != r && (n[e] = a = AC(t, r, t._nameOrdinalMeta, e)), null == s && null != o && (i[e] = s = AC(t, o, t._idOrdinalMeta, e)), null == s && null != a) {
                        var l = t._nameRepeatCount, u = l[a] = (l[a] || 0) + 1;
                        s = a, u > 1 && (s += "__ec__" + u), i[e] = s
                    }
                }
            }(), t
        }(), QC = function () {
            function t(t) {
                this.coordSysDims = [], this.axisMap = X(), this.categoryAxisMap = X(), this.coordSysName = t
            }

            return t
        }(), JC = {
            cartesian2d: function (t, e, n, i) {
                var r = t.getReferringComponents("xAxis", Bm).models[0],
                    o = t.getReferringComponents("yAxis", Bm).models[0];
                e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", o), mp(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), mp(o) && (i.set("y", o), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1))
            }, singleAxis: function (t, e, n, i) {
                var r = t.getReferringComponents("singleAxis", Bm).models[0];
                e.coordSysDims = ["single"], n.set("single", r), mp(r) && (i.set("single", r), e.firstCategoryDimIndex = 0)
            }, polar: function (t, e, n, i) {
                var r = t.getReferringComponents("polar", Bm).models[0], o = r.findAxisModel("radiusAxis"),
                    a = r.findAxisModel("angleAxis");
                e.coordSysDims = ["radius", "angle"], n.set("radius", o), n.set("angle", a), mp(o) && (i.set("radius", o), e.firstCategoryDimIndex = 0), mp(a) && (i.set("angle", a), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = 1))
            }, geo: function (t, e) {
                e.coordSysDims = ["lng", "lat"]
            }, parallel: function (t, e, n, i) {
                var r = t.ecModel, o = r.getComponent("parallel", t.get("parallelIndex")),
                    a = e.coordSysDims = o.dimensions.slice();
                y(o.parallelAxisIndex, function (t, o) {
                    var s = r.getComponent("parallelAxis", t), l = a[o];
                    n.set(l, s), mp(s) && (i.set(l, s), null == e.firstCategoryDimIndex && (e.firstCategoryDimIndex = o))
                })
            }
        }, tI = function () {
            function t(t) {
                this._setting = t || {}, this._extent = [1 / 0, -1 / 0]
            }

            return t.prototype.getSetting = function (t) {
                return this._setting[t]
            }, t.prototype.unionExtent = function (t) {
                var e = this._extent;
                t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
            }, t.prototype.unionExtentFromData = function (t, e) {
                this.unionExtent(t.getApproximateExtent(e))
            }, t.prototype.getExtent = function () {
                return this._extent.slice()
            }, t.prototype.setExtent = function (t, e) {
                var n = this._extent;
                isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e)
            }, t.prototype.isInExtentRange = function (t) {
                return this._extent[0] <= t && this._extent[1] >= t
            }, t.prototype.isBlank = function () {
                return this._isBlank
            }, t.prototype.setBlank = function (t) {
                this._isBlank = t
            }, t
        }();
    wr(tI);
    var eI = function () {
        function t(t) {
            this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication
        }

        return t.createByAxisModel = function (e) {
            var n = e.option, i = n.data, r = i && v(i, Mp);
            return new t({categories: r, needCollect: !r, deduplication: n.dedplication !== !1})
        }, t.prototype.getOrdinal = function (t) {
            return this._getOrCreateMap().get(t)
        }, t.prototype.parseAndCollect = function (t) {
            var e, n = this._needCollect;
            if ("string" != typeof t && !n) return t;
            if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
            var i = this._getOrCreateMap();
            return e = i.get(t), null == e && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = 0 / 0), e
        }, t.prototype._getOrCreateMap = function () {
            return this._map || (this._map = X(this.categories))
        }, t
    }(), nI = xi, iI = function (t) {
        function n(e) {
            var n = t.call(this, e) || this;
            n.type = "ordinal";
            var i = n.getSetting("ordinalMeta");
            return i || (i = new eI({})), T(i) && (i = new eI({
                categories: v(i, function (t) {
                    return A(t) ? t.value : t
                })
            })), n._ordinalMeta = i, n._extent = n.getSetting("extent") || [0, i.categories.length - 1], n
        }

        return e(n, t), n.prototype.parse = function (t) {
            return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
        }, n.prototype.contain = function (t) {
            return t = this.parse(t), kp(t, this._extent) && null != this._ordinalMeta.categories[t]
        }, n.prototype.normalize = function (t) {
            return t = this._getTickNumber(this.parse(t)), Lp(t, this._extent)
        }, n.prototype.scale = function (t) {
            return t = Math.round(Pp(t, this._extent)), this.getRawOrdinalNumber(t)
        }, n.prototype.getTicks = function () {
            for (var t = [], e = this._extent, n = e[0]; n <= e[1];) t.push({value: n}), n++;
            return t
        }, n.prototype.getMinorTicks = function () {
        }, n.prototype.setSortInfo = function (t) {
            if (null == t) return void (this._ordinalNumbersByTick = this._ticksByOrdinalNumber = null);
            for (var e = t.ordinalNumbers, n = this._ordinalNumbersByTick = [], i = this._ticksByOrdinalNumber = [], r = 0, o = this._ordinalMeta.categories.length, a = Math.min(o, e.length); a > r; ++r) {
                var s = e[r];
                n[r] = s, i[s] = r
            }
            for (var l = 0; o > r; ++r) {
                for (; null != i[l];) l++;
                n.push(l), i[l] = r
            }
        }, n.prototype._getTickNumber = function (t) {
            var e = this._ticksByOrdinalNumber;
            return e && t >= 0 && t < e.length ? e[t] : t
        }, n.prototype.getRawOrdinalNumber = function (t) {
            var e = this._ordinalNumbersByTick;
            return e && t >= 0 && t < e.length ? e[t] : t
        }, n.prototype.getLabel = function (t) {
            if (!this.isBlank()) {
                var e = this.getRawOrdinalNumber(t.value), n = this._ordinalMeta.categories[e];
                return null == n ? "" : n + ""
            }
        }, n.prototype.count = function () {
            return this._extent[1] - this._extent[0] + 1
        }, n.prototype.unionExtentFromData = function (t, e) {
            this.unionExtent(t.getApproximateExtent(e))
        }, n.prototype.isInExtentRange = function (t) {
            return t = this._getTickNumber(t), this._extent[0] <= t && this._extent[1] >= t
        }, n.prototype.getOrdinalMeta = function () {
            return this._ordinalMeta
        }, n.prototype.niceTicks = function () {
        }, n.prototype.niceExtent = function () {
        }, n.type = "ordinal", n
    }(tI);
    tI.registerClass(iI);
    var rI = xi, oI = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = "interval", e._interval = 0, e._intervalPrecision = 2, e
        }

        return e(n, t), n.prototype.parse = function (t) {
            return t
        }, n.prototype.contain = function (t) {
            return kp(t, this._extent)
        }, n.prototype.normalize = function (t) {
            return Lp(t, this._extent)
        }, n.prototype.scale = function (t) {
            return Pp(t, this._extent)
        }, n.prototype.setExtent = function (t, e) {
            var n = this._extent;
            isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e))
        }, n.prototype.unionExtent = function (t) {
            var e = this._extent;
            t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), this.setExtent(e[0], e[1])
        }, n.prototype.getInterval = function () {
            return this._interval
        }, n.prototype.setInterval = function (t) {
            this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = Ip(t)
        }, n.prototype.getTicks = function (t) {
            var e = this._interval, n = this._extent, i = this._niceExtent, r = this._intervalPrecision, o = [];
            if (!e) return o;
            var a = 1e4;
            n[0] < i[0] && o.push(t ? {value: rI(i[0] - e, r)} : {value: n[0]});
            for (var s = i[0]; s <= i[1] && (o.push({value: s}), s = rI(s + e, r), s !== o[o.length - 1].value);) if (o.length > a) return [];
            var l = o.length ? o[o.length - 1].value : i[1];
            return n[1] > l && o.push(t ? {value: rI(l + e, r)} : {value: n[1]}), o
        }, n.prototype.getMinorTicks = function (t) {
            for (var e = this.getTicks(!0), n = [], i = this.getExtent(), r = 1; r < e.length; r++) {
                for (var o = e[r], a = e[r - 1], s = 0, l = [], u = o.value - a.value, h = u / t; t - 1 > s;) {
                    var c = rI(a.value + (s + 1) * h);
                    c > i[0] && c < i[1] && l.push(c), s++
                }
                n.push(l)
            }
            return n
        }, n.prototype.getLabel = function (t, e) {
            if (null == t) return "";
            var n = e && e.precision;
            null == n ? n = Si(t.value) || 0 : "auto" === n && (n = this._intervalPrecision);
            var i = rI(t.value, n, !0);
            return al(i)
        }, n.prototype.niceTicks = function (t, e, n) {
            t = t || 5;
            var i = this._extent, r = i[1] - i[0];
            if (isFinite(r)) {
                0 > r && (r = -r, i.reverse());
                var o = Cp(i, t, e, n);
                this._intervalPrecision = o.intervalPrecision, this._interval = o.interval, this._niceExtent = o.niceTickExtent
            }
        }, n.prototype.niceExtent = function (t) {
            var e = this._extent;
            if (e[0] === e[1]) if (0 !== e[0]) {
                var n = e[0];
                t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2)
            } else e[1] = 1;
            var i = e[1] - e[0];
            isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
            var r = this._interval;
            t.fixMin || (e[0] = rI(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = rI(Math.ceil(e[1] / r) * r))
        }, n.type = "interval", n
    }(tI);
    tI.registerClass(oI);
    var aI = "__ec_stack_", sI = .5, lI = "undefined" != typeof Float32Array ? Float32Array : Array, uI = {
            seriesType: "bar", plan: uh(), reset: function (t) {
                if (Hp(t) && Wp(t)) {
                    var e = t.getData(), n = t.coordinateSystem, i = n.master.getRect(), r = n.getBaseAxis(),
                        o = n.getOtherAxis(r), a = e.mapDimension(o.dim), s = e.mapDimension(r.dim), l = o.isHorizontal(),
                        u = l ? 0 : 1, h = Fp(zp([t]), r, t).width;
                    return h > sI || (h = sI), {
                        progress: function (t, e) {
                            for (var c, p = t.count, f = new lI(2 * p), d = new lI(2 * p), g = new lI(p), y = [], v = [], m = 0, _ = 0; null != (c = t.next());) v[u] = e.get(a, c), v[1 - u] = e.get(s, c), y = n.dataToPoint(v, null, y), d[m] = l ? i.x + i.width : y[0], f[m++] = y[0], d[m] = l ? y[1] : i.y + i.height, f[m++] = y[1], g[_++] = c;
                            e.setLayout({
                                largePoints: f,
                                largeDataIndices: g,
                                largeBackgroundPoints: d,
                                barWidth: h,
                                valueAxisStart: Gp(r, o, !1),
                                backgroundStart: l ? i.x : i.y,
                                valueAxisHorizontal: l
                            })
                        }
                    }
                }
            }
        }, hI = function (t, e, n, i) {
            for (; i > n;) {
                var r = n + i >>> 1;
                t[r][1] < e ? n = r + 1 : i = r
            }
            return n
        }, cI = function (t) {
            function n(e) {
                var n = t.call(this, e) || this;
                return n.type = "time", n
            }

            return e(n, t), n.prototype.getLabel = function (t) {
                var e = this.getSetting("useUTC");
                return Hs(t.value, db[Vs(Ns(this._minLevelUnit))] || db.second, e, this.getSetting("locale"))
            }, n.prototype.getFormattedLabel = function (t, e, n) {
                var i = this.getSetting("useUTC"), r = this.getSetting("locale");
                return Ws(t, e, n, r, i)
            }, n.prototype.getTicks = function () {
                var t = this._interval, e = this._extent, n = [];
                if (!t) return n;
                n.push({value: e[0], level: 0});
                var i = this.getSetting("useUTC"), r = $p(this._minLevelUnit, this._approxInterval, i, e);
                return n = n.concat(r), n.push({value: e[1], level: 0}), n
            }, n.prototype.niceExtent = function (t) {
                var e = this._extent;
                if (e[0] === e[1] && (e[0] -= hb, e[1] += hb), e[1] === -1 / 0 && 1 / 0 === e[0]) {
                    var n = new Date;
                    e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - hb
                }
                this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval)
            }, n.prototype.niceTicks = function (t, e, n) {
                t = t || 10;
                var i = this._extent, r = i[1] - i[0];
                this._approxInterval = r / t, null != e && this._approxInterval < e && (this._approxInterval = e), null != n && this._approxInterval > n && (this._approxInterval = n);
                var o = pI.length, a = Math.min(hI(pI, this._approxInterval, 0, o), o - 1);
                this._interval = pI[a][1], this._minLevelUnit = pI[Math.max(a - 1, 0)][0]
            }, n.prototype.parse = function (t) {
                return "number" == typeof t ? t : +Di(t)
            }, n.prototype.contain = function (t) {
                return kp(this.parse(t), this._extent)
            }, n.prototype.normalize = function (t) {
                return Lp(this.parse(t), this._extent)
            }, n.prototype.scale = function (t) {
                return Pp(t, this._extent)
            }, n.type = "time", n
        }(oI),
        pI = [["second", sb], ["minute", lb], ["hour", ub], ["quarter-day", 6 * ub], ["half-day", 12 * ub], ["day", 1.2 * hb], ["half-week", 3.5 * hb], ["week", 7 * hb], ["month", 31 * hb], ["quarter", 95 * hb], ["half-year", cb / 2], ["year", cb]];
    tI.registerClass(cI);
    var fI = tI.prototype, dI = oI.prototype, gI = Si, yI = xi, vI = Math.floor, mI = Math.ceil, _I = Math.pow,
        xI = Math.log, wI = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = "log", e.base = 10, e._originalScale = new oI, e._interval = 0, e
            }

            return e(n, t), n.prototype.getTicks = function (t) {
                var e = this._originalScale, n = this._extent, i = e.getExtent(), r = dI.getTicks.call(this, t);
                return v(r, function (t) {
                    var e = t.value, r = xi(_I(this.base, e));
                    return r = e === n[0] && this._fixMin ? Qp(r, i[0]) : r, r = e === n[1] && this._fixMax ? Qp(r, i[1]) : r, {value: r}
                }, this)
            }, n.prototype.setExtent = function (t, e) {
                var n = this.base;
                t = xI(t) / xI(n), e = xI(e) / xI(n), dI.setExtent.call(this, t, e)
            }, n.prototype.getExtent = function () {
                var t = this.base, e = fI.getExtent.call(this);
                e[0] = _I(t, e[0]), e[1] = _I(t, e[1]);
                var n = this._originalScale, i = n.getExtent();
                return this._fixMin && (e[0] = Qp(e[0], i[0])), this._fixMax && (e[1] = Qp(e[1], i[1])), e
            }, n.prototype.unionExtent = function (t) {
                this._originalScale.unionExtent(t);
                var e = this.base;
                t[0] = xI(t[0]) / xI(e), t[1] = xI(t[1]) / xI(e), fI.unionExtent.call(this, t)
            }, n.prototype.unionExtentFromData = function (t, e) {
                this.unionExtent(t.getApproximateExtent(e))
            }, n.prototype.niceTicks = function (t) {
                t = t || 10;
                var e = this._extent, n = e[1] - e[0];
                if (!(1 / 0 === n || 0 >= n)) {
                    var i = Ai(n), r = t / n * i;
                    for (.5 >= r && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) i *= 10;
                    var o = [xi(mI(e[0] / i) * i), xi(vI(e[1] / i) * i)];
                    this._interval = i, this._niceExtent = o
                }
            }, n.prototype.niceExtent = function (t) {
                dI.niceExtent.call(this, t), this._fixMin = t.fixMin, this._fixMax = t.fixMax
            }, n.prototype.parse = function (t) {
                return t
            }, n.prototype.contain = function (t) {
                return t = xI(t) / xI(this.base), kp(t, this._extent)
            }, n.prototype.normalize = function (t) {
                return t = xI(t) / xI(this.base), Lp(t, this._extent)
            }, n.prototype.scale = function (t) {
                return t = Pp(t, this._extent), _I(this.base, t)
            }, n.type = "log", n
        }(tI), bI = wI.prototype;
    bI.getMinorTicks = dI.getMinorTicks, bI.getLabel = dI.getLabel, tI.registerClass(wI);
    var SI = function () {
            function t(t, e, n) {
                this._prepareParams(t, e, n)
            }

            return t.prototype._prepareParams = function (t, e, n) {
                n[1] < n[0] && (n = [0 / 0, 0 / 0]), this._dataMin = n[0], this._dataMax = n[1];
                var i = this._isOrdinal = "ordinal" === t.type;
                this._needCrossZero = e.getNeedCrossZero && e.getNeedCrossZero();
                var r = this._modelMinRaw = e.get("min", !0);
                M(r) ? this._modelMinNum = tf(t, r({
                    min: n[0],
                    max: n[1]
                })) : "dataMin" !== r && (this._modelMinNum = tf(t, r));
                var o = this._modelMaxRaw = e.get("max", !0);
                if (M(o) ? this._modelMaxNum = tf(t, o({
                    min: n[0],
                    max: n[1]
                })) : "dataMax" !== o && (this._modelMaxNum = tf(t, o)), i) this._axisDataLen = e.getCategories().length; else {
                    var a = e.get("boundaryGap"), s = T(a) ? a : [a || 0, a || 0];
                    this._boundaryGapInner = "boolean" == typeof s[0] || "boolean" == typeof s[1] ? [0, 0] : [Nn(s[0], 1), Nn(s[1], 1)]
                }
            }, t.prototype.calculate = function () {
                var t = this._isOrdinal, e = this._dataMin, n = this._dataMax, i = this._axisDataLen,
                    r = this._boundaryGapInner, o = t ? null : n - e || Math.abs(e),
                    a = "dataMin" === this._modelMinRaw ? e : this._modelMinNum,
                    s = "dataMax" === this._modelMaxRaw ? n : this._modelMaxNum, l = null != a, u = null != s;
                null == a && (a = t ? i ? 0 : 0 / 0 : e - r[0] * o), null == s && (s = t ? i ? i - 1 : 0 / 0 : n + r[1] * o), (null == a || !isFinite(a)) && (a = 0 / 0), (null == s || !isFinite(s)) && (s = 0 / 0), a > s && (a = 0 / 0, s = 0 / 0);
                var h = E(a) || E(s) || t && !i;
                this._needCrossZero && (a > 0 && s > 0 && !l && (a = 0), 0 > a && 0 > s && !u && (s = 0));
                var c = this._determinedMin, p = this._determinedMax;
                return null != c && (a = c, l = !0), null != p && (s = p, u = !0), {
                    min: a,
                    max: s,
                    minFixed: l,
                    maxFixed: u,
                    isBlank: h
                }
            }, t.prototype.modifyDataMinMax = function (t, e) {
                this[MI[t]] = e
            }, t.prototype.setDeterminedMinMax = function (t, e) {
                var n = TI[t];
                this[n] = e
            }, t.prototype.freeze = function () {
                this.frozen = !0
            }, t
        }(), TI = {min: "_determinedMin", max: "_determinedMax"}, MI = {min: "_dataMin", max: "_dataMax"},
        CI = function () {
            function t() {
            }

            return t.prototype.getNeedCrossZero = function () {
                var t = this.option;
                return !t.scale
            }, t.prototype.getCoordSysModel = function () {
            }, t
        }(), II = {isDimensionStacked: xp, enableDataStack: _p, getStackedDimension: wp},
        DI = (Object.freeze || Object)({
            createList: df,
            getLayoutRect: vl,
            dataStack: II,
            createScale: gf,
            mixinAxisModelCommonMethods: yf,
            getECData: cx,
            createTextStyle: vf,
            createDimensions: yp,
            createSymbol: rc,
            enableHoverEmphasis: fa
        }), AI = [], kI = {
            registerPreprocessor: jc,
            registerProcessor: qc,
            registerPostInit: Zc,
            registerPostUpdate: Kc,
            registerAction: $c,
            registerCoordinateSystem: Qc,
            registerLayout: tp,
            registerVisual: ep,
            registerTransform: wC,
            registerLoading: ip,
            registerMap: op,
            PRIORITY: TM,
            ComponentModel: Ib,
            ComponentView: zS,
            SeriesModel: ES,
            ChartView: VS,
            registerComponentModel: function (t) {
                Ib.registerClass(t)
            },
            registerComponentView: function (t) {
                zS.registerClass(t)
            },
            registerSeriesModel: function (t) {
                ES.registerClass(t)
            },
            registerChartView: function (t) {
                VS.registerClass(t)
            },
            registerSubTypeDefaulter: function (t, e) {
                Ib.registerSubTypeDefaulter(t, e)
            },
            registerPainter: function (t, e) {
                yi(t, e)
            }
        }, LI = 1e-8, PI = function () {
            function t(t, e, n) {
                if (this.name = t, this.geometries = e, n) n = [n[0], n[1]]; else {
                    var i = this.getBoundingRect();
                    n = [i.x + i.width / 2, i.y + i.height / 2]
                }
                this.center = n
            }

            return t.prototype.getBoundingRect = function () {
                var t = this._rect;
                if (t) return t;
                for (var e = Number.MAX_VALUE, n = [e, e], i = [-e, -e], r = [], o = [], a = this.geometries, s = 0; s < a.length; s++) if ("polygon" === a[s].type) {
                    var l = a[s].exterior;
                    eo(l, r, o), ye(n, n, r), ve(i, i, o)
                }
                return 0 === s && (n[0] = n[1] = i[0] = i[1] = 0), this._rect = new Wv(n[0], n[1], i[0] - n[0], i[1] - n[1])
            }, t.prototype.contain = function (t) {
                var e = this.getBoundingRect(), n = this.geometries;
                if (!e.contain(t[0], t[1])) return !1;
                t: for (var i = 0, r = n.length; r > i; i++) if ("polygon" === n[i].type) {
                    var o = n[i].exterior, a = n[i].interiors;
                    if (xf(o, t[0], t[1])) {
                        for (var s = 0; s < (a ? a.length : 0); s++) if (xf(a[s], t[0], t[1])) continue t;
                        return !0
                    }
                }
                return !1
            }, t.prototype.transformTo = function (t, e, n, i) {
                var r = this.getBoundingRect(), o = r.width / r.height;
                n ? i || (i = n / o) : n = o * i;
                for (var a = new Wv(t, e, n, i), s = r.calculateTransform(a), l = this.geometries, u = 0; u < l.length; u++) if ("polygon" === l[u].type) {
                    for (var h = l[u].exterior, c = l[u].interiors, p = 0; p < h.length; p++) ge(h[p], h[p], s);
                    for (var f = 0; f < (c ? c.length : 0); f++) for (var p = 0; p < c[f].length; p++) ge(c[f][p], c[f][p], s)
                }
                r = this._rect, r.copy(a), this.center = [r.x + r.width / 2, r.y + r.height / 2]
            }, t.prototype.cloneShallow = function (e) {
                null == e && (e = this.name);
                var n = new t(e, this.geometries, this.center);
                return n._rect = this._rect, n.transformTo = null, n
            }, t
        }(), OI = (Object.freeze || Object)({
            linearMap: mi,
            round: xi,
            asc: wi,
            getPrecision: bi,
            getPrecisionSafe: Si,
            getPixelPrecision: Ti,
            getPercentWithPrecision: Mi,
            MAX_SAFE_INTEGER: Am,
            remRadian: Ci,
            isRadianAroundZero: Ii,
            parseDate: Di,
            quantity: Ai,
            quantityExponent: ki,
            nice: Li,
            quantile: Pi,
            reformIntervals: Oi,
            isNumeric: Bi,
            numericToNumber: Ri
        }), RI = (Object.freeze || Object)({parse: Di, format: Hs}), BI = (Object.freeze || Object)({
            extendShape: Ha,
            extendPath: Wa,
            makePath: Ya,
            makeImage: Xa,
            mergePath: Rw,
            resizePath: qa,
            createIcon: ps,
            updateProps: Qa,
            initProps: Ja,
            getTransform: rs,
            clipPointsByRect: hs,
            clipRectByRect: cs,
            registerShape: Ga,
            getShapeClass: Ua,
            Group: wm,
            Image: tx,
            Text: lx,
            Circle: Gx,
            Ellipse: Yx,
            Sector: rw,
            Ring: aw,
            Polygon: lw,
            Polyline: hw,
            Rect: rx,
            Line: fw,
            BezierCurve: yw,
            Arc: mw,
            IncrementalDisplayable: Aw,
            CompoundPath: _w,
            LinearGradient: ww,
            RadialGradient: bw,
            BoundingRect: Wv
        }), EI = (Object.freeze || Object)({
            addCommas: al,
            toCamelCase: sl,
            normalizeCssArray: vb,
            encodeHTML: ll,
            formatTpl: hl,
            getTooltipMarker: cl,
            formatTime: pl,
            capitalFirst: fl,
            truncateText: Ir,
            getTextRect: ol
        }), zI = (Object.freeze || Object)({
            map: v,
            each: y,
            indexOf: p,
            inherits: f,
            reduce: m,
            filter: _,
            bind: Ey,
            curry: S,
            isArray: T,
            isString: C,
            isObject: A,
            isFunction: M,
            extend: h,
            defaults: c,
            clone: s,
            merge: l
        }), NI = or(), FI = [0, 1], VI = function () {
            function t(t, e, n) {
                this.onBand = !1, this.inverse = !1, this.dim = t, this.scale = e, this._extent = n || [0, 0]
            }

            return t.prototype.contain = function (t) {
                var e = this._extent, n = Math.min(e[0], e[1]), i = Math.max(e[0], e[1]);
                return t >= n && i >= t
            }, t.prototype.containData = function (t) {
                return this.scale.contain(t)
            }, t.prototype.getExtent = function () {
                return this._extent.slice()
            }, t.prototype.getPixelPrecision = function (t) {
                return Ti(t || this.scale.getExtent(), this._extent)
            }, t.prototype.setExtent = function (t, e) {
                var n = this._extent;
                n[0] = t, n[1] = e
            }, t.prototype.dataToCoord = function (t, e) {
                var n = this._extent, i = this.scale;
                return t = i.normalize(t), this.onBand && "ordinal" === i.type && (n = n.slice(), Nf(n, i.count())), mi(t, FI, n, e)
            }, t.prototype.coordToData = function (t, e) {
                var n = this._extent, i = this.scale;
                this.onBand && "ordinal" === i.type && (n = n.slice(), Nf(n, i.count()));
                var r = mi(t, n, FI, e);
                return this.scale.scale(r)
            }, t.prototype.pointToData = function () {
            }, t.prototype.getTicksCoords = function (t) {
                t = t || {};
                var e = t.tickModel || this.getTickModel(), n = Mf(this, e), i = n.ticks, r = v(i, function (t) {
                    return {
                        coord: this.dataToCoord("ordinal" === this.scale.type ? this.scale.getRawOrdinalNumber(t) : t),
                        tickValue: t
                    }
                }, this), o = e.get("alignWithLabel");
                return Ff(this, r, o, t.clamp), r
            }, t.prototype.getMinorTicksCoords = function () {
                if ("ordinal" === this.scale.type) return [];
                var t = this.model.getModel("minorTick"), e = t.get("splitNumber");
                e > 0 && 100 > e || (e = 5);
                var n = this.scale.getMinorTicks(e), i = v(n, function (t) {
                    return v(t, function (t) {
                        return {coord: this.dataToCoord(t), tickValue: t}
                    }, this)
                }, this);
                return i
            }, t.prototype.getViewLabels = function () {
                return Tf(this).labels
            }, t.prototype.getLabelModel = function () {
                return this.model.getModel("axisLabel")
            }, t.prototype.getTickModel = function () {
                return this.model.getModel("axisTick")
            }, t.prototype.getBandWidth = function () {
                var t = this._extent, e = this.scale.getExtent(), n = e[1] - e[0] + (this.onBand ? 1 : 0);
                0 === n && (n = 1);
                var i = Math.abs(t[1] - t[0]);
                return Math.abs(i) / n
            }, t.prototype.calculateCategoryInterval = function () {
                return Rf(this)
            }, t
        }(), HI = function (t) {
            function n(e, n, i) {
                var r = t.call(this) || this;
                r.motionBlur = !1, r.lastFrameAlpha = .7, r.dpr = 1, r.virtual = !1, r.config = {}, r.incremental = !1, r.zlevel = 0, r.maxRepaintRectCount = 5, r.__dirty = !0, r.__firstTimePaint = !0, r.__used = !1, r.__drawIndex = 0, r.__startIndex = 0, r.__endIndex = 0, r.__prevStartIndex = null, r.__prevEndIndex = null;
                var o;
                i = i || jv, "string" == typeof e ? o = Yf(e, n, i) : A(e) && (o = e, e = o.id), r.id = e, r.dom = o;
                var a = o.style;
                return a && (o.onselectstart = Uf, a.webkitUserSelect = "none", a.userSelect = "none", a.webkitTapHighlightColor = "rgba(0,0,0,0)", a["-webkit-touch-callout"] = "none", a.padding = "0", a.margin = "0", a.borderWidth = "0"), r.domBack = null, r.ctxBack = null, r.painter = n, r.config = null, r.dpr = i, r
            }

            return e(n, t), n.prototype.getElementCount = function () {
                return this.__endIndex - this.__startIndex
            }, n.prototype.afterBrush = function () {
                this.__prevStartIndex = this.__startIndex, this.__prevEndIndex = this.__endIndex
            }, n.prototype.initContext = function () {
                this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
            }, n.prototype.setUnpainted = function () {
                this.__firstTimePaint = !0
            }, n.prototype.createBackBuffer = function () {
                var t = this.dpr;
                this.domBack = Yf("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 !== t && this.ctxBack.scale(t, t)
            }, n.prototype.createRepaintRects = function (t, e, n, i) {
                function r(t) {
                    if (t.isFinite() && !t.isZero()) if (0 === o.length) {
                        var e = new Wv(0, 0, 0, 0);
                        e.copy(t), o.push(e)
                    } else {
                        for (var n = !1, i = 1 / 0, r = 0, u = 0; u < o.length; ++u) {
                            var h = o[u];
                            if (h.intersect(t)) {
                                var c = new Wv(0, 0, 0, 0);
                                c.copy(h), c.union(t), o[u] = c, n = !0;
                                break
                            }
                            if (s) {
                                l.copy(t), l.union(h);
                                var p = t.width * t.height, f = h.width * h.height, d = l.width * l.height, g = d - p - f;
                                i > g && (i = g, r = u)
                            }
                        }
                        if (s && (o[r].union(t), n = !0), !n) {
                            var e = new Wv(0, 0, 0, 0);
                            e.copy(t), o.push(e)
                        }
                        s || (s = o.length >= a)
                    }
                }

                if (this.__firstTimePaint) return this.__firstTimePaint = !1, null;
                for (var o = [], a = this.maxRepaintRectCount, s = !1, l = new Wv(0, 0, 0, 0), u = this.__startIndex; u < this.__endIndex; ++u) {
                    var h = t[u];
                    if (h) {
                        var c = h.shouldBePainted(n, i, !0, !0),
                            p = h.__isRendered && (h.__dirty & im.REDARAW_BIT || !c) ? h.getPrevPaintRect() : null;
                        p && r(p);
                        var f = c && (h.__dirty & im.REDARAW_BIT || !h.__isRendered) ? h.getPaintRect() : null;
                        f && r(f)
                    }
                }
                for (var u = this.__prevStartIndex; u < this.__prevEndIndex; ++u) {
                    var h = e[u], c = h.shouldBePainted(n, i, !0, !0);
                    if (h && (!c || !h.__zr) && h.__isRendered) {
                        var p = h.getPrevPaintRect();
                        p && r(p)
                    }
                }
                var d;
                do {
                    d = !1;
                    for (var u = 0; u < o.length;) if (o[u].isZero()) o.splice(u, 1); else {
                        for (var g = u + 1; g < o.length;) o[u].intersect(o[g]) ? (d = !0, o[u].union(o[g]), o.splice(g, 1)) : g++;
                        u++
                    }
                } while (d);
                return this._paintRects = o, o
            }, n.prototype.debugGetPaintRects = function () {
                return (this._paintRects || []).slice()
            }, n.prototype.resize = function (t, e) {
                var n = this.dpr, i = this.dom, r = i.style, o = this.domBack;
                r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, o && (o.width = t * n, o.height = e * n, 1 !== n && this.ctxBack.scale(n, n))
            }, n.prototype.clear = function (t, e, n) {
                function i(t, n, i, r) {
                    if (o.clearRect(t, n, i, r), e && "transparent" !== e) {
                        var a = void 0;
                        O(e) ? (a = e.__canvasGradient || sc(o, e, {
                            x: 0,
                            y: 0,
                            width: i,
                            height: r
                        }), e.__canvasGradient = a) : R(e) && (a = dc(o, e, {
                            dirty: function () {
                                c.setUnpainted(), c.__painter.refresh()
                            }
                        })), o.save(), o.fillStyle = a || e, o.fillRect(t, n, i, r), o.restore()
                    }
                    l && (o.save(), o.globalAlpha = u, o.drawImage(p, t, n, i, r), o.restore())
                }

                var r = this.dom, o = this.ctx, a = r.width, s = r.height;
                e = e || this.clearColor;
                var l = this.motionBlur && !t, u = this.lastFrameAlpha, h = this.dpr, c = this;
                l && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(r, 0, 0, a / h, s / h));
                var p = this.domBack;
                !n || l ? i(0, 0, a, s) : n.length && y(n, function (t) {
                    i(t.x * h, t.y * h, t.width * h, t.height * h)
                })
            }, n
        }(jy), WI = 1e5, GI = 314159, UI = .01, YI = .001, XI = function () {
            function t(t, e, n) {
                this.type = "canvas", this._zlevelList = [], this._prevDisplayList = [], this._layers = {}, this._layerConfig = {}, this._needsManuallyCompositing = !1, this.type = "canvas";
                var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
                this._opts = n = h({}, n || {}), this.dpr = n.devicePixelRatio || jv, this._singleCanvas = i, this.root = t;
                var r = t.style;
                r && (r.webkitTapHighlightColor = "transparent", r.webkitUserSelect = "none", r.userSelect = "none", r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
                var o = this._zlevelList;
                this._prevDisplayList = [];
                var a = this._layers;
                if (i) {
                    var s = t, l = s.width, u = s.height;
                    null != n.width && (l = n.width), null != n.height && (u = n.height), this.dpr = n.devicePixelRatio || 1, s.width = l * this.dpr, s.height = u * this.dpr, this._width = l, this._height = u;
                    var c = new HI(s, this, this.dpr);
                    c.__builtin__ = !0, c.initContext(), a[GI] = c, c.zlevel = GI, o.push(GI), this._domRoot = t
                } else {
                    this._width = this._getSize(0), this._height = this._getSize(1);
                    var p = this._domRoot = qf(this._width, this._height);
                    t.appendChild(p)
                }
            }

            return t.prototype.getType = function () {
                return "canvas"
            }, t.prototype.isSingleCanvas = function () {
                return this._singleCanvas
            }, t.prototype.getViewportRoot = function () {
                return this._domRoot
            }, t.prototype.getViewportRootOffset = function () {
                var t = this.getViewportRoot();
                return t ? {offsetLeft: t.offsetLeft || 0, offsetTop: t.offsetTop || 0} : void 0
            }, t.prototype.refresh = function (t) {
                var e = this.storage.getDisplayList(!0), n = this._prevDisplayList, i = this._zlevelList;
                this._redrawId = Math.random(), this._paintList(e, n, t, this._redrawId);
                for (var r = 0; r < i.length; r++) {
                    var o = i[r], a = this._layers[o];
                    if (!a.__builtin__ && a.refresh) {
                        var s = 0 === r ? this._backgroundColor : null;
                        a.refresh(s)
                    }
                }
                return this._opts.useDirtyRect && (this._prevDisplayList = e.slice()), this
            }, t.prototype.refreshHover = function () {
                this._paintHoverList(this.storage.getDisplayList(!1))
            }, t.prototype._paintHoverList = function (t) {
                var e = t.length, n = this._hoverlayer;
                if (n && n.clear(), e) {
                    for (var i, r = {inHover: !0, viewWidth: this._width, viewHeight: this._height}, o = 0; e > o; o++) {
                        var a = t[o];
                        a.__inHover && (n || (n = this._hoverlayer = this.getLayer(WI)), i || (i = n.ctx, i.save()), Dc(i, a, r, o === e - 1))
                    }
                    i && i.restore()
                }
            }, t.prototype.getHoverLayer = function () {
                return this.getLayer(WI)
            }, t.prototype.paintOne = function (t, e) {
                Ic(t, e)
            }, t.prototype._paintList = function (t, e, n, i) {
                if (this._redrawId === i) {
                    n = n || !1, this._updateLayerStatus(t);
                    var r = this._doPaintList(t, e, n), o = r.finished, a = r.needsRefreshHover;
                    if (this._needsManuallyCompositing && this._compositeManually(), a && this._paintHoverList(t), o) this.eachLayer(function (t) {
                        t.afterBrush && t.afterBrush()
                    }); else {
                        var s = this;
                        um(function () {
                            s._paintList(t, e, n, i)
                        })
                    }
                }
            }, t.prototype._compositeManually = function () {
                var t = this.getLayer(GI).ctx, e = this._domRoot.width, n = this._domRoot.height;
                t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function (i) {
                    i.virtual && t.drawImage(i.dom, 0, 0, e, n)
                })
            }, t.prototype._doPaintList = function (t, e, n) {
                for (var i = this, r = [], o = this._opts.useDirtyRect, a = 0; a < this._zlevelList.length; a++) {
                    var s = this._zlevelList[a], l = this._layers[s];
                    l.__builtin__ && l !== this._hoverlayer && (l.__dirty || n) && r.push(l)
                }
                for (var u = !0, h = !1, c = function (a) {
                    var s = r[a], l = s.ctx, c = o && s.createRepaintRects(t, e, p._width, p._height);
                    l.save();
                    var f = n ? s.__startIndex : s.__drawIndex, d = !n && s.incremental && Date.now, g = d && Date.now(),
                        y = s.zlevel === p._zlevelList[0] ? p._backgroundColor : null;
                    if (s.__startIndex === s.__endIndex) s.clear(!1, y, c); else if (f === s.__startIndex) {
                        var v = t[f];
                        v.incremental && v.notClear && !n || s.clear(!1, y, c)
                    }
                    -1 === f && (console.error("For some unknown reason. drawIndex is -1"), f = s.__startIndex);
                    var m, _ = function (e) {
                        var n = {inHover: !1, allClipped: !1, prevEl: null, viewWidth: i._width, viewHeight: i._height};
                        for (m = f; m < s.__endIndex; m++) {
                            var r = t[m];
                            if (r.__inHover && (h = !0), i._doPaintEl(r, s, o, e, n, m === s.__endIndex - 1), d) {
                                var a = Date.now() - g;
                                if (a > 15) break
                            }
                        }
                        n.prevElClipPaths && l.restore()
                    };
                    if (c) if (0 === c.length) m = s.__endIndex; else for (var x = p.dpr, w = 0; w < c.length; ++w) {
                        var b = c[w];
                        l.save(), l.beginPath(), l.rect(b.x * x, b.y * x, b.width * x, b.height * x), l.clip(), _(b), l.restore()
                    } else l.save(), _(), l.restore();
                    s.__drawIndex = m, s.__drawIndex < s.__endIndex && (u = !1)
                }, p = this, f = 0; f < r.length; f++) c(f);
                return by.wxa && y(this._layers, function (t) {
                    t && t.ctx && t.ctx.draw && t.ctx.draw()
                }), {finished: u, needsRefreshHover: h}
            }, t.prototype._doPaintEl = function (t, e, n, i, r, o) {
                var a = e.ctx;
                if (n) {
                    var s = t.getPaintRect();
                    (!i || s && s.intersect(i)) && (Dc(a, t, r, o), t.setPrevPaintRect(s))
                } else Dc(a, t, r, o)
            }, t.prototype.getLayer = function (t, e) {
                this._singleCanvas && !this._needsManuallyCompositing && (t = GI);
                var n = this._layers[t];
                return n || (n = new HI("zr_" + t, this, this.dpr), n.zlevel = t, n.__builtin__ = !0, this._layerConfig[t] ? l(n, this._layerConfig[t], !0) : this._layerConfig[t - UI] && l(n, this._layerConfig[t - UI], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n
            }, t.prototype.insertLayer = function (t, e) {
                var n = this._layers, i = this._zlevelList, r = i.length, o = this._domRoot, s = null, l = -1;
                if (n[t]) return void a("ZLevel " + t + " has been used already");
                if (!jf(e)) return void a("Layer of zlevel " + t + " is not valid");
                if (r > 0 && t > i[0]) {
                    for (l = 0; r - 1 > l && !(i[l] < t && i[l + 1] > t); l++) ;
                    s = n[i[l]]
                }
                if (i.splice(l + 1, 0, t), n[t] = e, !e.virtual) if (s) {
                    var u = s.dom;
                    u.nextSibling ? o.insertBefore(e.dom, u.nextSibling) : o.appendChild(e.dom)
                } else o.firstChild ? o.insertBefore(e.dom, o.firstChild) : o.appendChild(e.dom);
                e.__painter = this
            }, t.prototype.eachLayer = function (t, e) {
                for (var n = this._zlevelList, i = 0; i < n.length; i++) {
                    var r = n[i];
                    t.call(e, this._layers[r], r)
                }
            }, t.prototype.eachBuiltinLayer = function (t, e) {
                for (var n = this._zlevelList, i = 0; i < n.length; i++) {
                    var r = n[i], o = this._layers[r];
                    o.__builtin__ && t.call(e, o, r)
                }
            }, t.prototype.eachOtherLayer = function (t, e) {
                for (var n = this._zlevelList, i = 0; i < n.length; i++) {
                    var r = n[i], o = this._layers[r];
                    o.__builtin__ || t.call(e, o, r)
                }
            }, t.prototype.getLayers = function () {
                return this._layers
            }, t.prototype._updateLayerStatus = function (t) {
                function e(t) {
                    s && (s.__endIndex !== t && (s.__dirty = !0), s.__endIndex = t)
                }

                if (this.eachBuiltinLayer(function (t) {
                    t.__dirty = t.__used = !1
                }), this._singleCanvas) for (var n = 1; n < t.length; n++) {
                    var i = t[n];
                    if (i.zlevel !== t[n - 1].zlevel || i.incremental) {
                        this._needsManuallyCompositing = !0;
                        break
                    }
                }
                var r, o, s = null, l = 0;
                for (o = 0; o < t.length; o++) {
                    var i = t[o], u = i.zlevel, h = void 0;
                    r !== u && (r = u, l = 0), i.incremental ? (h = this.getLayer(u + YI, this._needsManuallyCompositing), h.incremental = !0, l = 1) : h = this.getLayer(u + (l > 0 ? UI : 0), this._needsManuallyCompositing), h.__builtin__ || a("ZLevel " + u + " has been used by unkown layer " + h.id), h !== s && (h.__used = !0, h.__startIndex !== o && (h.__dirty = !0), h.__startIndex = o, h.__drawIndex = h.incremental ? -1 : o, e(o), s = h), i.__dirty & im.REDARAW_BIT && !i.__inHover && (h.__dirty = !0, h.incremental && h.__drawIndex < 0 && (h.__drawIndex = o))
                }
                e(o), this.eachBuiltinLayer(function (t) {
                    !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
                })
            }, t.prototype.clear = function () {
                return this.eachBuiltinLayer(this._clearLayer), this
            }, t.prototype._clearLayer = function (t) {
                t.clear()
            }, t.prototype.setBackgroundColor = function (t) {
                this._backgroundColor = t, y(this._layers, function (t) {
                    t.setUnpainted()
                })
            }, t.prototype.configLayer = function (t, e) {
                if (e) {
                    var n = this._layerConfig;
                    n[t] ? l(n[t], e, !0) : n[t] = e;
                    for (var i = 0; i < this._zlevelList.length; i++) {
                        var r = this._zlevelList[i];
                        if (r === t || r === t + UI) {
                            var o = this._layers[r];
                            l(o, n[t], !0)
                        }
                    }
                }
            }, t.prototype.delLayer = function (t) {
                var e = this._layers, n = this._zlevelList, i = e[t];
                i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(p(n, t), 1))
            }, t.prototype.resize = function (t, e) {
                if (this._domRoot.style) {
                    var n = this._domRoot;
                    n.style.display = "none";
                    var i = this._opts;
                    if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width !== t || e !== this._height) {
                        n.style.width = t + "px", n.style.height = e + "px";
                        for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                        this.refresh(!0)
                    }
                    this._width = t, this._height = e
                } else {
                    if (null == t || null == e) return;
                    this._width = t, this._height = e, this.getLayer(GI).resize(t, e)
                }
                return this
            }, t.prototype.clearLayer = function (t) {
                var e = this._layers[t];
                e && e.clear()
            }, t.prototype.dispose = function () {
                this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
            }, t.prototype.getRenderedCanvas = function (t) {
                if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[GI].dom;
                var e = new HI("image", this, t.pixelRatio || this.dpr), n = e.ctx;
                if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
                    this.refresh();
                    var i = e.dom.width, r = e.dom.height, o = e.ctx;
                    this.eachLayer(function (t) {
                        t.__builtin__ ? o.drawImage(t.dom, 0, 0, i, r) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore())
                    })
                } else for (var a = {
                    inHover: !1,
                    viewWidth: this._width,
                    viewHeight: this._height
                }, s = this.storage.getDisplayList(!0), l = 0, u = s.length; u > l; l++) {
                    var h = s[l];
                    Dc(n, h, a, l === u - 1)
                }
                return e.dom
            }, t.prototype.getWidth = function () {
                return this._width
            }, t.prototype.getHeight = function () {
                return this._height
            }, t.prototype._getSize = function (t) {
                var e = this._opts, n = ["width", "height"][t], i = ["clientWidth", "clientHeight"][t],
                    r = ["paddingLeft", "paddingTop"][t], o = ["paddingRight", "paddingBottom"][t];
                if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
                var a = this.root, s = document.defaultView.getComputedStyle(a);
                return (a[i] || Xf(s[n]) || Xf(a.style[n])) - (Xf(s[r]) || 0) - (Xf(s[o]) || 0) | 0
            }, t.prototype.pathToImage = function (t, e) {
                e = e || this.dpr;
                var n = document.createElement("canvas"), i = n.getContext("2d"), r = t.getBoundingRect(), o = t.style,
                    a = o.shadowBlur * e, s = o.shadowOffsetX * e, l = o.shadowOffsetY * e,
                    u = t.hasStroke() ? o.lineWidth : 0, c = Math.max(u / 2, -s + a), p = Math.max(u / 2, s + a),
                    f = Math.max(u / 2, -l + a), d = Math.max(u / 2, l + a), g = r.width + c + p, y = r.height + f + d;
                n.width = g * e, n.height = y * e, i.scale(e, e), i.clearRect(0, 0, g, y), i.dpr = e;
                var v = {
                    x: t.x,
                    y: t.y,
                    scaleX: t.scaleX,
                    scaleY: t.scaleY,
                    rotation: t.rotation,
                    originX: t.originX,
                    originY: t.originY
                };
                t.x = c - r.x, t.y = f - r.y, t.rotation = 0, t.scaleX = 1, t.scaleY = 1, t.updateTransform(), t && Dc(i, t, {
                    inHover: !1,
                    viewWidth: this._width,
                    viewHeight: this._height
                }, !0);
                var m = new tx({style: {x: 0, y: 0, image: n}});
                return h(t, v), m
            }, t
        }(), jI = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = "dataset", e
            }

            return e(n, t), n.prototype.init = function (e, n, i) {
                t.prototype.init.call(this, e, n, i), this._sourceManager = new AS(this), Eu(this)
            }, n.prototype.mergeOption = function (e, n) {
                t.prototype.mergeOption.call(this, e, n), Eu(this)
            }, n.prototype.optionUpdated = function () {
                this._sourceManager.dirty()
            }, n.prototype.getSourceManager = function () {
                return this._sourceManager
            }, n.type = "dataset", n.defaultOption = {seriesLayoutBy: Vb}, n
        }(Ib), qI = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = "dataset", e
            }

            return e(n, t), n.type = "dataset", n
        }(zS);
    mf([Zf, Kf]);
    var ZI = {
        average: function (t) {
            for (var e = 0, n = 0, i = 0; i < t.length; i++) isNaN(t[i]) || (e += t[i], n++);
            return 0 === n ? 0 / 0 : e / n
        }, sum: function (t) {
            for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
            return e
        }, max: function (t) {
            for (var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
            return isFinite(e) ? e : 0 / 0
        }, min: function (t) {
            for (var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
            return isFinite(e) ? e : 0 / 0
        }, nearest: function (t) {
            return t[0]
        }
    }, KI = function (t) {
        return Math.round(t.length / 2)
    }, $I = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = n.type, e
        }

        return e(n, t), n.prototype.getInitialData = function () {
            return bp(this.getSource(), this, {useEncodeDefaulter: !0})
        }, n.prototype.getMarkerPosition = function (t) {
            var e = this.coordinateSystem;
            if (e) {
                var n = e.dataToPoint(e.clampData(t)), i = this.getData(), r = i.getLayout("offset"),
                    o = i.getLayout("size"), a = e.getBaseAxis().isHorizontal() ? 0 : 1;
                return n[a] += r + o / 2, n
            }
            return [0 / 0, 0 / 0]
        }, n.type = "series.__base_bar__", n.defaultOption = {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            barMinHeight: 0,
            barMinAngle: 0,
            large: !1,
            largeThreshold: 400,
            progressive: 3e3,
            progressiveChunkMode: "mod"
        }, n
    }(ES);
    ES.registerClass($I);
    var QI = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e
            }

            return e(n, t), n.prototype.getInitialData = function () {
                return bp(this.getSource(), this, {
                    useEncodeDefaulter: !0,
                    createInvertedIndices: !!this.get("realtimeSort", !0) || null
                })
            }, n.prototype.getProgressive = function () {
                return this.get("large") ? this.get("progressive") : !1
            }, n.prototype.getProgressiveThreshold = function () {
                var t = this.get("progressiveThreshold"), e = this.get("largeThreshold");
                return e > t && (t = e), t
            }, n.prototype.brushSelector = function (t, e, n) {
                return n.rect(e.getItemLayout(t))
            }, n.type = "series.bar", n.dependencies = ["grid", "polar"], n.defaultOption = Ps($I.defaultOption, {
                clip: !0,
                roundCap: !1,
                showBackground: !1,
                backgroundStyle: {
                    color: "rgba(180, 180, 180, 0.2)",
                    borderColor: null,
                    borderWidth: 0,
                    borderType: "solid",
                    borderRadius: 0,
                    shadowBlur: 0,
                    shadowColor: null,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,
                    opacity: 1
                },
                select: {itemStyle: {borderColor: "#212121"}},
                realtimeSort: !1
            }), n
        }($I), JI = function () {
            function t() {
                this.cx = 0, this.cy = 0, this.r0 = 0, this.r = 0, this.startAngle = 0, this.endAngle = 2 * Math.PI, this.clockwise = !0
            }

            return t
        }(), tD = function (t) {
            function n(e) {
                var n = t.call(this, e) || this;
                return n.type = "sausage", n
            }

            return e(n, t), n.prototype.getDefaultShape = function () {
                return new JI
            }, n.prototype.buildPath = function (t, e) {
                var n = e.cx, i = e.cy, r = Math.max(e.r0 || 0, 0), o = Math.max(e.r, 0), a = .5 * (o - r), s = r + a,
                    l = e.startAngle, u = e.endAngle, h = e.clockwise, c = Math.cos(l), p = Math.sin(l), f = Math.cos(u),
                    d = Math.sin(u), g = h ? u - l < 2 * Math.PI : l - u < 2 * Math.PI;
                g && (t.moveTo(c * r + n, p * r + i), t.arc(c * s + n, p * s + i, a, -Math.PI + l, l, !h)), t.arc(n, i, o, l, u, !h), t.moveTo(f * o + n, d * o + i), t.arc(f * s + n, d * s + i, a, u - 2 * Math.PI, u - Math.PI, !h), 0 !== r && (t.arc(n, i, r, u, l, h), t.moveTo(c * r + n, d * r + i)), t.closePath()
            }, n
        }(Z_), eD = ["itemStyle", "borderWidth"], nD = ["itemStyle", "borderRadius"], iD = [0, 0], rD = Math.max,
        oD = Math.min, aD = function (t) {
            function n() {
                var e = t.call(this) || this;
                return e.type = n.type, e._isFirstFrame = !0, e
            }

            return e(n, t), n.prototype.render = function (t, e, n, i) {
                this._model = t, this._removeOnRenderedListener(n), this._updateDrawMode(t);
                var r = t.get("coordinateSystem");
                ("cartesian2d" === r || "polar" === r) && (this._isLargeDraw ? this._renderLarge(t, e, n) : this._renderNormal(t, e, n, i))
            }, n.prototype.incrementalPrepareRender = function (t) {
                this._clear(), this._updateDrawMode(t), this._updateLargeClip(t)
            }, n.prototype.incrementalRender = function (t, e) {
                this._incrementalRenderLarge(t, e)
            }, n.prototype._updateDrawMode = function (t) {
                var e = t.pipelineContext.large;
                (null == this._isLargeDraw || e !== this._isLargeDraw) && (this._isLargeDraw = e, this._clear())
            }, n.prototype._renderNormal = function (t, e, n, i) {
                function r(t) {
                    var e = uD[u.type](s, t), n = gd(u, o, e);
                    return n.useStyle(v.getItemStyle()), "cartesian2d" === u.type && n.setShape("r", m), _[t] = n, n
                }

                var o, a = this.group, s = t.getData(), l = this._data, u = t.coordinateSystem, h = u.getBaseAxis();
                "cartesian2d" === u.type ? o = h.isHorizontal() : "polar" === u.type && (o = "angle" === h.dim);
                var c = t.isAnimationEnabled() ? t : null, p = od(t, u);
                p && this._enableRealtimeSort(p, s, n);
                var f = t.get("clip", !0) || p, d = rd(u, s);
                a.removeClipPath();
                var g = t.get("roundCap", !0), y = t.get("showBackground", !0), v = t.getModel("backgroundStyle"),
                    m = v.get("borderRadius") || 0, _ = [], x = this._backgroundEls, w = i && i.isInitSort,
                    b = i && "changeAxisOrder" === i.type;
                s.diff(l).add(function (e) {
                    var n = s.getItemModel(e), i = uD[u.type](s, e, n);
                    if (y && r(e), s.hasValue(e)) {
                        var l = !1;
                        f && (l = sD[u.type](d, i));
                        var v = lD[u.type](t, s, e, i, o, c, h.model, !1, g);
                        ld(v, s, e, n, i, t, o, "polar" === u.type), w ? v.attr({shape: i}) : p ? ad(p, c, v, i, e, o, !1, !1) : Ja(v, {shape: i}, t, e), s.setItemGraphicEl(e, v), a.add(v), v.ignore = l
                    }
                }).update(function (e, n) {
                    var i = s.getItemModel(e), S = uD[u.type](s, e, i);
                    if (y) {
                        var T = void 0;
                        0 === x.length ? T = r(n) : (T = x[n], T.useStyle(v.getItemStyle()), "cartesian2d" === u.type && T.setShape("r", m), _[e] = T);
                        var M = uD[u.type](s, e), C = dd(o, M, u);
                        Qa(T, {shape: C}, c, e)
                    }
                    var I = l.getItemGraphicEl(n);
                    if (!s.hasValue(e)) return a.remove(I), void (I = null);
                    var D = !1;
                    f && (D = sD[u.type](d, S), D && a.remove(I)), I || (I = lD[u.type](t, s, e, S, o, c, h.model, !!I, g)), b || ld(I, s, e, i, S, t, o, "polar" === u.type), w ? I.attr({shape: S}) : p ? ad(p, c, I, S, e, o, !0, b) : Qa(I, {shape: S}, t, e, null), s.setItemGraphicEl(e, I), I.ignore = D, a.add(I)
                }).remove(function (e) {
                    var n = l.getItemGraphicEl(e);
                    n && ns(n, t, e)
                }).execute();
                var S = this._backgroundGroup || (this._backgroundGroup = new wm);
                S.removeAll();
                for (var T = 0; T < _.length; ++T) S.add(_[T]);
                a.add(S), this._backgroundEls = _, this._data = s
            }, n.prototype._renderLarge = function (t) {
                this._clear(), hd(t, this.group), this._updateLargeClip(t)
            }, n.prototype._incrementalRenderLarge = function (t, e) {
                this._removeBackground(), hd(e, this.group, !0)
            }, n.prototype._updateLargeClip = function (t) {
                var e = t.get("clip", !0) ? td(t.coordinateSystem, !1, t) : null;
                e ? this.group.setClipPath(e) : this.group.removeClipPath()
            }, n.prototype._enableRealtimeSort = function (t, e, n) {
                var i = this;
                if (e.count()) {
                    var r = t.baseAxis;
                    if (this._isFirstFrame) this._dispatchInitSort(e, t, n), this._isFirstFrame = !1; else {
                        var o = function (t) {
                            var n = e.getItemGraphicEl(t);
                            if (n) {
                                var i = n.shape;
                                return Math.abs(r.isHorizontal() ? i.height : i.width) || 0
                            }
                            return 0
                        };
                        this._onRendered = function () {
                            i._updateSortWithinSameData(e, o, r, n)
                        }, n.getZr().on("rendered", this._onRendered)
                    }
                }
            }, n.prototype._dataSort = function (t, e, n) {
                var i = [];
                return t.each(t.mapDimension(e.dim), function (t, e) {
                    var r = n(e);
                    r = null == r ? 0 / 0 : r, i.push({dataIndex: e, mappedValue: r, ordinalNumber: t})
                }), i.sort(function (t, e) {
                    return e.mappedValue - t.mappedValue
                }), {
                    ordinalNumbers: v(i, function (t) {
                        return t.ordinalNumber
                    })
                }
            }, n.prototype._isOrderChangedWithinSameData = function (t, e, n) {
                for (var i = n.scale, r = t.mapDimension(n.dim), o = Number.MAX_VALUE, a = 0, s = i.getOrdinalMeta().categories.length; s > a; ++a) {
                    var l = t.rawIndexOf(r, i.getRawOrdinalNumber(a)),
                        u = 0 > l ? Number.MIN_VALUE : e(t.indexOfRawIndex(l));
                    if (u > o) return !0;
                    o = u
                }
                return !1
            }, n.prototype._isOrderDifferentInView = function (t, e) {
                for (var n = e.scale, i = n.getExtent(), r = Math.max(0, i[0]), o = Math.min(i[1], n.getOrdinalMeta().categories.length - 1); o >= r; ++r) if (t.ordinalNumbers[r] !== n.getRawOrdinalNumber(r)) return !0
            }, n.prototype._updateSortWithinSameData = function (t, e, n, i) {
                if (this._isOrderChangedWithinSameData(t, e, n)) {
                    var r = this._dataSort(t, n, e);
                    this._isOrderDifferentInView(r, n) && (this._removeOnRenderedListener(i), i.dispatchAction({
                        type: "changeAxisOrder",
                        componentType: n.dim + "Axis",
                        axisId: n.index,
                        sortInfo: r
                    }))
                }
            }, n.prototype._dispatchInitSort = function (t, e, n) {
                var i = e.baseAxis, r = this._dataSort(t, i, function (n) {
                    return t.get(t.mapDimension(e.otherAxis.dim), n)
                });
                n.dispatchAction({
                    type: "changeAxisOrder",
                    componentType: i.dim + "Axis",
                    isInitSort: !0,
                    axisId: i.index,
                    sortInfo: r,
                    animation: {duration: 0}
                })
            }, n.prototype.remove = function (t, e) {
                this._clear(this._model), this._removeOnRenderedListener(e)
            }, n.prototype.dispose = function (t, e) {
                this._removeOnRenderedListener(e)
            }, n.prototype._removeOnRenderedListener = function (t) {
                this._onRendered && (t.getZr().off("rendered", this._onRendered), this._onRendered = null)
            }, n.prototype._clear = function (t) {
                var e = this.group, n = this._data;
                t && t.isAnimationEnabled() && n && !this._isLargeDraw ? (this._removeBackground(), this._backgroundEls = [], n.eachItemGraphicEl(function (e) {
                    ns(e, t, cx(e).dataIndex)
                })) : e.removeAll(), this._data = null, this._isFirstFrame = !0
            }, n.prototype._removeBackground = function () {
                this.group.remove(this._backgroundGroup), this._backgroundGroup = null
            }, n.type = "bar", n
        }(VS), sD = {
            cartesian2d: function (t, e) {
                var n = e.width < 0 ? -1 : 1, i = e.height < 0 ? -1 : 1;
                0 > n && (e.x += e.width, e.width = -e.width), 0 > i && (e.y += e.height, e.height = -e.height);
                var r = t.x + t.width, o = t.y + t.height, a = rD(e.x, t.x), s = oD(e.x + e.width, r), l = rD(e.y, t.y),
                    u = oD(e.y + e.height, o), h = a > s, c = l > u;
                return e.x = h && a > r ? s : a, e.y = c && l > o ? u : l, e.width = h ? 0 : s - a, e.height = c ? 0 : u - l, 0 > n && (e.x += e.width, e.width = -e.width), 0 > i && (e.y += e.height, e.height = -e.height), h || c
            }, polar: function (t, e) {
                var n = e.r0 <= e.r ? 1 : -1;
                if (0 > n) {
                    var i = e.r;
                    e.r = e.r0, e.r0 = i
                }
                var r = oD(e.r, t.r), o = rD(e.r0, t.r0);
                e.r = r, e.r0 = o;
                var a = 0 > r - o;
                if (0 > n) {
                    var i = e.r;
                    e.r = e.r0, e.r0 = i
                }
                return a
            }
        }, lD = {
            cartesian2d: function (t, e, n, i, r, o) {
                var a = new rx({shape: h({}, i), z2: 1});
                if (a.__dataIndex = n, a.name = "item", o) {
                    var s = a.shape, l = r ? "height" : "width";
                    s[l] = 0
                }
                return a
            }, polar: function (t, e, n, i, r, o, a, s, l) {
                var u = i.startAngle < i.endAngle, h = !r && l ? tD : rw, p = new h({shape: c({clockwise: u}, i), z2: 1});
                if (p.name = "item", o) {
                    var f = p.shape, d = r ? "r" : "endAngle", g = {};
                    f[d] = r ? 0 : i.startAngle, g[d] = i[d], (s ? Qa : Ja)(p, {shape: g}, o)
                }
                return p
            }
        }, uD = {
            cartesian2d: function (t, e, n) {
                var i = t.getItemLayout(e), r = n ? ud(n, i) : 0, o = i.width > 0 ? 1 : -1, a = i.height > 0 ? 1 : -1;
                return {x: i.x + o * r / 2, y: i.y + a * r / 2, width: i.width - o * r, height: i.height - a * r}
            }, polar: function (t, e) {
                var n = t.getItemLayout(e);
                return {cx: n.cx, cy: n.cy, r0: n.r0, r: n.r, startAngle: n.startAngle, endAngle: n.endAngle}
            }
        }, hD = function () {
            function t() {
            }

            return t
        }(), cD = function (t) {
            function n(e) {
                var n = t.call(this, e) || this;
                return n.type = "largeBar", n
            }

            return e(n, t), n.prototype.getDefaultShape = function () {
                return new hD
            }, n.prototype.buildPath = function (t, e) {
                for (var n = e.points, i = this.__startPoint, r = this.__baseDimIdx, o = 0; o < n.length; o += 2) i[r] = n[o + r], t.moveTo(i[0], i[1]), t.lineTo(n[o], n[o + 1])
            }, n
        }(Z_), pD = dh(function (t) {
            var e = this, n = cd(e, t.offsetX, t.offsetY);
            cx(e).dataIndex = n >= 0 ? n : null
        }, 30, !1);
    mf(yd);
    var fD = 2 * Math.PI, dD = Math.PI / 180, gD = Math.PI / 180, yD = function (t) {
        function n(e, n, i) {
            var r = t.call(this) || this;
            r.z2 = 2;
            var o = new hw, a = new lx;
            return r.setTextGuideLine(o), r.setTextContent(a), r.updateData(e, n, i, !0), r
        }

        return e(n, t), n.prototype.updateData = function (t, e, n, i) {
            var r = this, o = t.hostModel, a = t.getItemModel(e), s = a.getModel("emphasis"), l = t.getItemLayout(e),
                u = h(Td(a.getModel("itemStyle"), l) || {}, l);
            if (i) {
                r.setShape(u);
                var c = o.getShallow("animationType");
                "scale" === c ? (r.shape.r = l.r0, Ja(r, {shape: {r: l.r}}, o, e)) : null != n ? (r.setShape({
                    startAngle: n,
                    endAngle: n
                }), Ja(r, {
                    shape: {
                        startAngle: l.startAngle,
                        endAngle: l.endAngle
                    }
                }, o, e)) : (r.shape.endAngle = l.startAngle, Qa(r, {shape: {endAngle: l.endAngle}}, o, e))
            } else Qa(r, {shape: u}, o, e);
            r.useStyle(t.getItemVisual(e, "style")), ga(r, a);
            var p = (l.startAngle + l.endAngle) / 2, f = o.get("selectedOffset"), d = Math.cos(p) * f,
                g = Math.sin(p) * f, y = a.getShallow("cursor");
            y && r.attr("cursor", y), this._updateLabel(o, t, e), r.ensureState("emphasis").shape = _y({r: l.r + (s.get("scale") ? s.get("scaleSize") || 0 : 0)}, Td(s.getModel("itemStyle"), l)), h(r.ensureState("select"), {
                x: d,
                y: g,
                shape: Td(a.getModel(["select", "itemStyle"]), l)
            }), h(r.ensureState("blur"), {shape: Td(a.getModel(["blur", "itemStyle"]), l)});
            var v = r.getTextGuideLine(), m = r.getTextContent();
            h(v.ensureState("select"), {x: d, y: g}), h(m.ensureState("select"), {
                x: d,
                y: g
            }), fa(this, s.get("focus"), s.get("blurScope"))
        }, n.prototype._updateLabel = function (t, e, n) {
            var i = this, r = e.getItemModel(n), o = r.getModel("labelLine"), a = e.getItemVisual(n, "style"),
                s = a && a.fill, l = a && a.opacity;
            _s(i, xs(r), {
                labelFetcher: e.hostModel,
                labelDataIndex: n,
                inheritColor: s,
                defaultOpacity: l,
                defaultText: t.getFormattedLabel(n, "normal") || e.getName(n)
            });
            var u = i.getTextContent();
            i.setTextConfig({position: null, rotation: null}), u.attr({z2: 10}), Gh(this, Uh(r), {
                stroke: s,
                opacity: F(o.get(["lineStyle", "opacity"]), l, 1)
            })
        }, n
    }(rw), vD = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.ignoreLabelLineUpdate = !0, e
        }

        return e(n, t), n.prototype.init = function () {
            var t = new wm;
            this._sectorGroup = t
        }, n.prototype.render = function (t) {
            var e, n = t.getData(), i = this._data, r = this.group;
            if (!i && n.count() > 0) {
                for (var o = n.getItemLayout(0), a = 1; isNaN(o && o.startAngle) && a < n.count(); ++a) o = n.getItemLayout(a);
                o && (e = o.startAngle)
            }
            n.diff(i).add(function (t) {
                var i = new yD(n, t, e);
                n.setItemGraphicEl(t, i), r.add(i)
            }).update(function (t, o) {
                var a = i.getItemGraphicEl(o);
                a.updateData(n, t, e), a.off("click"), r.add(a), n.setItemGraphicEl(t, a)
            }).remove(function (e) {
                var n = i.getItemGraphicEl(e);
                ns(n, t, e)
            }).execute(), Sd(t), "expansion" !== t.get("animationTypeUpdate") && (this._data = n)
        }, n.prototype.dispose = function () {
        }, n.prototype.containPoint = function (t, e) {
            var n = e.getData(), i = n.getItemLayout(0);
            if (i) {
                var r = t[0] - i.cx, o = t[1] - i.cy, a = Math.sqrt(r * r + o * o);
                return a <= i.r && a >= i.r0
            }
        }, n.type = "pie", n
    }(VS), mD = function () {
        function t(t, e) {
            this._getDataWithEncodedVisual = t, this._getRawData = e
        }

        return t.prototype.getAllNames = function () {
            var t = this._getRawData();
            return t.mapArray(t.getName)
        }, t.prototype.containName = function (t) {
            var e = this._getRawData();
            return e.indexOfName(t) >= 0
        }, t.prototype.indexOfName = function (t) {
            var e = this._getDataWithEncodedVisual();
            return e.indexOfName(t)
        }, t.prototype.getItemVisual = function (t, e) {
            var n = this._getDataWithEncodedVisual();
            return n.getItemVisual(t, e)
        }, t
    }(), _D = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.useColorPaletteOnData = !0, e
        }

        return e(n, t), n.prototype.init = function (e) {
            t.prototype.init.apply(this, arguments), this.legendVisualProvider = new mD(Ey(this.getData, this), Ey(this.getRawData, this)), this._defaultLabelLine(e)
        }, n.prototype.mergeOption = function () {
            t.prototype.mergeOption.apply(this, arguments)
        }, n.prototype.getInitialData = function () {
            return Md(this, {coordDimensions: ["value"], encodeDefaulter: S(Ml, this)})
        }, n.prototype.getDataParams = function (e) {
            var n = this.getData(), i = t.prototype.getDataParams.call(this, e), r = [];
            return n.each(n.mapDimension("value"), function (t) {
                r.push(t)
            }), i.percent = Mi(r, e, n.hostModel.get("percentPrecision")), i.$vars.push("percent"), i
        }, n.prototype._defaultLabelLine = function (t) {
            Hi(t, "labelLine", ["show"]);
            var e = t.labelLine, n = t.emphasis.labelLine;
            e.show = e.show && t.label.show, n.show = n.show && t.emphasis.label.show
        }, n.type = "series.pie", n.defaultOption = {
            zlevel: 0,
            z: 2,
            legendHoverLink: !0,
            center: ["50%", "50%"],
            radius: [0, "75%"],
            clockwise: !0,
            startAngle: 90,
            minAngle: 0,
            minShowLabelAngle: 0,
            selectedOffset: 10,
            percentPrecision: 2,
            stillShowZeroSum: !0,
            left: 0,
            top: 0,
            right: 0,
            bottom: 0,
            width: null,
            height: null,
            label: {
                rotate: 0,
                show: !0,
                overflow: "truncate",
                position: "outer",
                alignTo: "none",
                edgeDistance: "25%",
                bleedMargin: 10,
                distanceToLabelLine: 5
            },
            labelLine: {
                show: !0,
                length: 15,
                length2: 15,
                smooth: !1,
                minTurnAngle: 90,
                maxSurfaceAngle: 90,
                lineStyle: {width: 1, type: "solid"}
            },
            itemStyle: {borderWidth: 1},
            labelLayout: {hideOverlap: !0},
            emphasis: {scale: !0, scaleSize: 5},
            avoidLabelOverlap: !0,
            animationType: "expansion",
            animationDuration: 1e3,
            animationTypeUpdate: "transition",
            animationEasingUpdate: "cubicInOut",
            animationDurationUpdate: 500,
            animationEasing: "cubicInOut"
        }, n
    }(ES);
    mf(Cd);
    var xD = function (t) {
        function n() {
            return null !== t && t.apply(this, arguments) || this
        }

        return e(n, t), n.type = "grid", n.dependencies = ["xAxis", "yAxis"], n.layoutMode = "box", n.defaultOption = {
            show: !1,
            zlevel: 0,
            z: 0,
            left: "10%",
            top: 60,
            right: "10%",
            bottom: 70,
            containLabel: !1,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "#ccc"
        }, n
    }(Ib), wD = function (t) {
        function n() {
            return null !== t && t.apply(this, arguments) || this
        }

        return e(n, t), n.prototype.getCoordSysModel = function () {
            return this.getReferringComponents("grid", Bm).models[0]
        }, n.type = "cartesian2dAxis", n
    }(Ib);
    d(wD, CI);
    var bD = {
            show: !0,
            zlevel: 0,
            z: 0,
            inverse: !1,
            name: "",
            nameLocation: "end",
            nameRotate: null,
            nameTruncate: {maxWidth: null, ellipsis: "...", placeholder: "."},
            nameTextStyle: {},
            nameGap: 15,
            silent: !1,
            triggerEvent: !1,
            tooltip: {show: !1},
            axisPointer: {},
            axisLine: {
                show: !0,
                onZero: !0,
                onZeroAxisIndex: null,
                lineStyle: {color: "#6E7079", width: 1, type: "solid"},
                symbol: ["none", "none"],
                symbolSize: [10, 15]
            },
            axisTick: {show: !0, inside: !1, length: 5, lineStyle: {width: 1}},
            axisLabel: {show: !0, inside: !1, rotate: 0, showMinLabel: null, showMaxLabel: null, margin: 8, fontSize: 12},
            splitLine: {show: !0, lineStyle: {color: ["#E0E6F1"], width: 1, type: "solid"}},
            splitArea: {show: !1, areaStyle: {color: ["rgba(250,250,250,0.2)", "rgba(210,219,238,0.2)"]}}
        }, SD = l({
            boundaryGap: !0,
            deduplication: null,
            splitLine: {show: !1},
            axisTick: {alignWithLabel: !1, interval: "auto"},
            axisLabel: {interval: "auto"}
        }, bD), TD = l({
            boundaryGap: [0, 0],
            axisLine: {show: "auto"},
            axisTick: {show: "auto"},
            splitNumber: 5,
            minorTick: {show: !1, splitNumber: 5, length: 3, lineStyle: {}},
            minorSplitLine: {show: !1, lineStyle: {color: "#F4F7FD", width: 1}}
        }, bD), MD = l({
            scale: !0,
            splitNumber: 6,
            axisLabel: {showMinLabel: !1, showMaxLabel: !1, rich: {primary: {fontWeight: "bold"}}},
            splitLine: {show: !1}
        }, TD), CD = c({scale: !0, logBase: 10}, TD), ID = {category: SD, value: TD, time: MD, log: CD},
        DD = {value: 1, category: 1, time: 1, log: 1}, AD = function () {
            function t(t) {
                this.type = "cartesian", this._dimList = [], this._axes = {}, this.name = t || ""
            }

            return t.prototype.getAxis = function (t) {
                return this._axes[t]
            }, t.prototype.getAxes = function () {
                return v(this._dimList, function (t) {
                    return this._axes[t]
                }, this)
            }, t.prototype.getAxesByScale = function (t) {
                return t = t.toLowerCase(), _(this.getAxes(), function (e) {
                    return e.scale.type === t
                })
            }, t.prototype.addAxis = function (t) {
                var e = t.dim;
                this._axes[e] = t, this._dimList.push(e)
            }, t
        }(), kD = ["x", "y"], LD = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = "cartesian2d", e.dimensions = kD, e
            }

            return e(n, t), n.prototype.calcAffineTransform = function () {
                this._transform = this._invTransform = null;
                var t = this.getAxis("x").scale, e = this.getAxis("y").scale;
                if (Ad(t) && Ad(e)) {
                    var n = t.getExtent(), i = e.getExtent(), r = this.dataToPoint([n[0], i[0]]),
                        o = this.dataToPoint([n[1], i[1]]), a = n[1] - n[0], s = i[1] - i[0];
                    if (a && s) {
                        var l = (o[0] - r[0]) / a, u = (o[1] - r[1]) / s, h = r[0] - n[0] * l, c = r[1] - i[0] * u,
                            p = this._transform = [l, 0, 0, u, h, c];
                        this._invTransform = Ye([], p)
                    }
                }
            }, n.prototype.getBaseAxis = function () {
                return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
            }, n.prototype.containPoint = function (t) {
                var e = this.getAxis("x"), n = this.getAxis("y");
                return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
            }, n.prototype.containData = function (t) {
                return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
            }, n.prototype.dataToPoint = function (t, e, n) {
                n = n || [];
                var i = t[0], r = t[1];
                if (this._transform && null != i && isFinite(i) && null != r && isFinite(r)) return ge(n, t, this._transform);
                var o = this.getAxis("x"), a = this.getAxis("y");
                return n[0] = o.toGlobalCoord(o.dataToCoord(i)), n[1] = a.toGlobalCoord(a.dataToCoord(r)), n
            }, n.prototype.clampData = function (t, e) {
                var n = this.getAxis("x").scale, i = this.getAxis("y").scale, r = n.getExtent(), o = i.getExtent(),
                    a = n.parse(t[0]), s = i.parse(t[1]);
                return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), a), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(o[0], o[1]), s), Math.max(o[0], o[1])), e
            }, n.prototype.pointToData = function (t, e) {
                if (e = e || [], this._invTransform) return ge(e, t, this._invTransform);
                var n = this.getAxis("x"), i = this.getAxis("y");
                return e[0] = n.coordToData(n.toLocalCoord(t[0])), e[1] = i.coordToData(i.toLocalCoord(t[1])), e
            }, n.prototype.getOtherAxis = function (t) {
                return this.getAxis("x" === t.dim ? "y" : "x")
            }, n.prototype.getArea = function () {
                var t = this.getAxis("x").getGlobalExtent(), e = this.getAxis("y").getGlobalExtent(),
                    n = Math.min(t[0], t[1]), i = Math.min(e[0], e[1]), r = Math.max(t[0], t[1]) - n,
                    o = Math.max(e[0], e[1]) - i;
                return new Wv(n, i, r, o)
            }, n
        }(AD), PD = function (t) {
            function n(e, n, i, r, o) {
                var a = t.call(this, e, n, i) || this;
                return a.index = 0, a.type = r || "value", a.position = o || "bottom", a
            }

            return e(n, t), n.prototype.isHorizontal = function () {
                var t = this.position;
                return "top" === t || "bottom" === t
            }, n.prototype.getGlobalExtent = function (t) {
                var e = this.getExtent();
                return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e
            }, n.prototype.pointToData = function (t, e) {
                return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
            }, n.prototype.setCategorySortInfo = function (t) {
                return "category" !== this.type ? !1 : (this.model.option.categorySortInfo = t, void this.scale.setSortInfo(t))
            }, n
        }(VI), OD = function () {
            function t(t, e, n) {
                this.type = "grid", this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this.axisPointerEnabled = !0, this.dimensions = kD, this._initCartesian(t, e, n), this.model = t
            }

            return t.prototype.getRect = function () {
                return this._rect
            }, t.prototype.update = function (t, e) {
                var n = this._axesMap;
                this._updateScale(t, this.model), y(n.x, function (t) {
                    rf(t.scale, t.model)
                }), y(n.y, function (t) {
                    rf(t.scale, t.model)
                });
                var i = {};
                y(n.x, function (t) {
                    Rd(n, "y", t, i)
                }), y(n.y, function (t) {
                    Rd(n, "x", t, i)
                }), this.resize(this.model, e)
            }, t.prototype.resize = function (t, e, n) {
                function i() {
                    y(s, function (t) {
                        var e = t.isHorizontal(), n = e ? [0, a.width] : [0, a.height], i = t.inverse ? 1 : 0;
                        t.setExtent(n[i], n[1 - i]), Ed(t, e ? a.x : a.y)
                    })
                }

                var r = t.getBoxLayoutParams(), o = !n && t.get("containLabel"),
                    a = vl(r, {width: e.getWidth(), height: e.getHeight()});
                this._rect = a;
                var s = this._axesList;
                i(), o && (y(s, function (t) {
                    if (!t.model.get(["axisLabel", "inside"])) {
                        var e = uf(t);
                        if (e) {
                            var n = t.isHorizontal() ? "height" : "width", i = t.model.get(["axisLabel", "margin"]);
                            a[n] -= e[n] + i, "top" === t.position ? a.y += e.height + i : "left" === t.position && (a.x += e.width + i)
                        }
                    }
                }), i()), y(this._coordsList, function (t) {
                    t.calcAffineTransform()
                })
            }, t.prototype.getAxis = function (t, e) {
                var n = this._axesMap[t];
                return null != n ? n[e || 0] : void 0
            }, t.prototype.getAxes = function () {
                return this._axesList.slice()
            }, t.prototype.getCartesian = function (t, e) {
                if (null != t && null != e) {
                    var n = "x" + t + "y" + e;
                    return this._coordsMap[n]
                }
                A(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
                for (var i = 0, r = this._coordsList; i < r.length; i++) if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i]
            }, t.prototype.getCartesians = function () {
                return this._coordsList.slice()
            }, t.prototype.convertToPixel = function (t, e, n) {
                var i = this._findConvertTarget(e);
                return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null
            }, t.prototype.convertFromPixel = function (t, e, n) {
                var i = this._findConvertTarget(e);
                return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null
            }, t.prototype._findConvertTarget = function (t) {
                var e, n, i = t.seriesModel, r = t.xAxisModel || i && i.getReferringComponents("xAxis", Bm).models[0],
                    o = t.yAxisModel || i && i.getReferringComponents("yAxis", Bm).models[0], a = t.gridModel,
                    s = this._coordsList;
                if (i) e = i.coordinateSystem, p(s, e) < 0 && (e = null); else if (r && o) e = this.getCartesian(r.componentIndex, o.componentIndex); else if (r) n = this.getAxis("x", r.componentIndex); else if (o) n = this.getAxis("y", o.componentIndex); else if (a) {
                    var l = a.coordinateSystem;
                    l === this && (e = this._coordsList[0])
                }
                return {cartesian: e, axis: n}
            }, t.prototype.containPoint = function (t) {
                var e = this._coordsList[0];
                return e ? e.containPoint(t) : void 0
            }, t.prototype._initCartesian = function (t, e) {
                function n(e) {
                    return function (n, i) {
                        if (Od(n, t)) {
                            var l = n.get("position");
                            "x" === e ? "top" !== l && "bottom" !== l && (l = o.bottom ? "top" : "bottom") : "left" !== l && "right" !== l && (l = o.left ? "right" : "left"), o[l] = !0;
                            var u = new PD(e, of(n), [0, 0], n.get("type"), l), h = "category" === u.type;
                            u.onBand = h && n.get("boundaryGap"), u.inverse = n.get("inverse"), n.axis = u, u.model = n, u.grid = r, u.index = i, r._axesList.push(u), a[e][i] = u, s[e]++
                        }
                    }
                }

                var i = this, r = this, o = {left: !1, right: !1, top: !1, bottom: !1}, a = {x: {}, y: {}},
                    s = {x: 0, y: 0};
                return e.eachComponent("xAxis", n("x"), this), e.eachComponent("yAxis", n("y"), this), s.x && s.y ? (this._axesMap = a, void y(a.x, function (e, n) {
                    y(a.y, function (r, o) {
                        var a = "x" + n + "y" + o, s = new LD(a);
                        s.master = i, s.model = t, i._coordsMap[a] = s, i._coordsList.push(s), s.addAxis(e), s.addAxis(r)
                    })
                })) : (this._axesMap = {}, void (this._axesList = []))
            }, t.prototype._updateScale = function (t, e) {
                function n(t, e) {
                    y(ff(t, e.dim), function (n) {
                        e.scale.unionExtentFromData(t, n)
                    })
                }

                y(this._axesList, function (t) {
                    if (t.scale.setExtent(1 / 0, -1 / 0), "category" === t.type) {
                        var e = t.model.get("categorySortInfo");
                        t.scale.setSortInfo(e)
                    }
                }), t.eachSeries(function (t) {
                    if (Ld(t)) {
                        var i = Pd(t), r = i.xAxisModel, o = i.yAxisModel;
                        if (!Od(r, e) || !Od(o, e)) return;
                        var a = this.getCartesian(r.componentIndex, o.componentIndex), s = t.getData(), l = a.getAxis("x"),
                            u = a.getAxis("y");
                        "list" === s.type && (n(s, l), n(s, u))
                    }
                }, this)
            }, t.prototype.getTooltipAxes = function (t) {
                var e = [], n = [];
                return y(this.getCartesians(), function (i) {
                    var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(), o = i.getOtherAxis(r);
                    p(e, r) < 0 && e.push(r), p(n, o) < 0 && n.push(o)
                }), {baseAxes: e, otherAxes: n}
            }, t.create = function (e, n) {
                var i = [];
                return e.eachComponent("grid", function (r, o) {
                    var a = new t(r, e, n);
                    a.name = "grid_" + o, a.resize(r, n, !0), r.coordinateSystem = a, i.push(a)
                }), e.eachSeries(function (t) {
                    if (Ld(t)) {
                        var e = Pd(t), n = e.xAxisModel, i = e.yAxisModel, r = n.getCoordSysModel(), o = r.coordinateSystem;
                        t.coordinateSystem = o.getCartesian(n.componentIndex, i.componentIndex)
                    }
                }), i
            }, t.dimensions = kD, t
        }(), RD = Math.PI, BD = function () {
            function t(t, e) {
                this.group = new wm, this.opt = e, this.axisModel = t, c(e, {
                    labelOffset: 0,
                    nameDirection: 1,
                    tickDirection: 1,
                    labelDirection: 1,
                    silent: !0,
                    handleAutoShown: function () {
                        return !0
                    }
                });
                var n = new wm({x: e.position[0], y: e.position[1], rotation: e.rotation});
                n.updateTransform(), this._transformGroup = n
            }

            return t.prototype.hasBuilder = function (t) {
                return !!ED[t]
            }, t.prototype.add = function (t) {
                ED[t](this.opt, this.axisModel, this.group, this._transformGroup)
            }, t.prototype.getGroup = function () {
                return this.group
            }, t.innerTextLayout = function (t, e, n) {
                var i, r, o = Ci(e - t);
                return Ii(o) ? (r = n > 0 ? "top" : "bottom", i = "center") : Ii(o - RD) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = o > 0 && RD > o ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), {
                    rotation: o,
                    textAlign: i,
                    textVerticalAlign: r
                }
            }, t.makeAxisEventDataBase = function (t) {
                var e = {componentType: t.mainType, componentIndex: t.componentIndex};
                return e[t.mainType + "Index"] = t.componentIndex, e
            }, t.isLabelSilent = function (t) {
                var e = t.get("tooltip");
                return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
            }, t
        }(), ED = {
            axisLine: function (t, e, n, i) {
                var r = e.get(["axisLine", "show"]);
                if ("auto" === r && t.handleAutoShown && (r = t.handleAutoShown("axisLine")), r) {
                    var o = e.axis.getExtent(), a = i.transform, s = [o[0], 0], l = [o[1], 0];
                    a && (ge(s, s, a), ge(l, l, a));
                    var u = h({lineCap: "round"}, e.getModel(["axisLine", "lineStyle"]).getLineStyle()), c = new fw({
                        subPixelOptimize: !0,
                        shape: {x1: s[0], y1: s[1], x2: l[0], y2: l[1]},
                        style: u,
                        strokeContainThreshold: t.strokeContainThreshold || 5,
                        silent: !0,
                        z2: 1
                    });
                    c.anid = "line", n.add(c);
                    var p = e.get(["axisLine", "symbol"]), f = e.get(["axisLine", "symbolSize"]),
                        d = e.get(["axisLine", "symbolOffset"]) || 0;
                    if ("number" == typeof d && (d = [d, d]), null != p) {
                        "string" == typeof p && (p = [p, p]), ("string" == typeof f || "number" == typeof f) && (f = [f, f]);
                        var g = f[0], v = f[1];
                        y([{rotate: t.rotation + Math.PI / 2, offset: d[0], r: 0}, {
                            rotate: t.rotation - Math.PI / 2,
                            offset: d[1],
                            r: Math.sqrt((s[0] - l[0]) * (s[0] - l[0]) + (s[1] - l[1]) * (s[1] - l[1]))
                        }], function (e, i) {
                            if ("none" !== p[i] && null != p[i]) {
                                var r = rc(p[i], -g / 2, -v / 2, g, v, u.stroke, !0), o = e.r + e.offset;
                                r.attr({
                                    rotation: e.rotate,
                                    x: s[0] + o * Math.cos(t.rotation),
                                    y: s[1] - o * Math.sin(t.rotation),
                                    silent: !0,
                                    z2: 11
                                }), n.add(r)
                            }
                        })
                    }
                }
            }, axisTickLabel: function (t, e, n, i) {
                var r = Gd(n, i, e, t), o = Yd(n, i, e, t);
                Nd(e, o, r), Ud(n, i, e, t.tickDirection)
            }, axisName: function (t, e, n, i) {
                var r = z(t.axisName, e.get("name"));
                if (r) {
                    var o, a = e.get("nameLocation"), s = t.nameDirection, l = e.getModel("nameTextStyle"),
                        u = e.get("nameGap") || 0, c = e.axis.getExtent(), p = c[0] > c[1] ? -1 : 1,
                        f = ["start" === a ? c[0] - p * u : "end" === a ? c[1] + p * u : (c[0] + c[1]) / 2, Hd(a) ? t.labelOffset + s * u : 0],
                        d = e.get("nameRotate");
                    null != d && (d = d * RD / 180);
                    var g;
                    Hd(a) ? o = BD.innerTextLayout(t.rotation, null != d ? d : t.rotation, s) : (o = zd(t.rotation, a, d || 0, c), g = t.axisNameAvailableWidth, null != g && (g = Math.abs(g / Math.sin(o.rotation)), !isFinite(g) && (g = null)));
                    var y = l.getFont(), v = e.get("nameTruncate", !0) || {}, m = v.ellipsis,
                        _ = z(t.nameTruncateMaxWidth, v.maxWidth, g), x = e.get("tooltip", !0), w = e.mainType,
                        b = {componentType: w, name: r, $vars: ["name"]};
                    b[w + "Index"] = e.componentIndex;
                    var S = new lx({
                        x: f[0],
                        y: f[1],
                        rotation: o.rotation,
                        silent: BD.isLabelSilent(e),
                        style: ws(l, {
                            text: r,
                            font: y,
                            overflow: "truncate",
                            width: _,
                            ellipsis: m,
                            fill: l.getTextColor() || e.get(["axisLine", "lineStyle", "color"]),
                            align: l.get("align") || o.textAlign,
                            verticalAlign: l.get("verticalAlign") || o.textVerticalAlign
                        }),
                        z2: 1
                    });
                    if (S.tooltip = x && x.show ? h({
                        content: r, formatter: function () {
                            return r
                        }, formatterParams: b
                    }, x) : null, S.__fullText = r, S.anid = "name", e.get("triggerEvent")) {
                        var T = BD.makeAxisEventDataBase(e);
                        T.targetType = "axisName", T.name = r, cx(S).eventData = T
                    }
                    i.add(S), S.updateTransform(), n.add(S), S.decomposeTransform()
                }
            }
        }, zD = {}, ND = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e
            }

            return e(n, t), n.prototype.render = function (e, n, i) {
                this.axisPointerClass && Qd(e), t.prototype.render.apply(this, arguments), this._doUpdateAxisPointerClass(e, i, !0)
            }, n.prototype.updateAxisPointer = function (t, e, n) {
                this._doUpdateAxisPointerClass(t, n, !1)
            }, n.prototype.remove = function (t, e) {
                var n = this._axisPointer;
                n && n.remove(e)
            }, n.prototype.dispose = function (e, n) {
                this._disposeAxisPointer(n), t.prototype.dispose.apply(this, arguments)
            }, n.prototype._doUpdateAxisPointerClass = function (t, e, i) {
                var r = n.getAxisPointerClass(this.axisPointerClass);
                if (r) {
                    var o = tg(t);
                    o ? (this._axisPointer || (this._axisPointer = new r)).render(t, o, e, i) : this._disposeAxisPointer(e)
                }
            }, n.prototype._disposeAxisPointer = function (t) {
                this._axisPointer && this._axisPointer.dispose(t), this._axisPointer = null
            }, n.registerAxisPointerClass = function (t, e) {
                zD[t] = e
            }, n.getAxisPointerClass = function (t) {
                return t && zD[t]
            }, n.type = "axis", n
        }(zS), FD = or(), VD = ["axisLine", "axisTickLabel", "axisName"], HD = ["splitArea", "splitLine", "minorSplitLine"],
        WD = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e.axisPointerClass = "CartesianAxisPointer", e
            }

            return e(n, t), n.prototype.render = function (e, n, i, r) {
                this.group.removeAll();
                var o = this._axisGroup;
                if (this._axisGroup = new wm, this.group.add(this._axisGroup), e.get("show")) {
                    var a = e.getCoordSysModel(), s = kd(a, e), l = new BD(e, h({
                        handleAutoShown: function () {
                            for (var t = a.coordinateSystem.getCartesians(), n = 0; n < t.length; n++) {
                                var i = t[n].getOtherAxis(e.axis).type;
                                if ("value" === i || "log" === i) return !0
                            }
                            return !1
                        }
                    }, s));
                    y(VD, l.add, l), this._axisGroup.add(l.getGroup()), y(HD, function (t) {
                        e.get([t, "show"]) && GD[t](this, this._axisGroup, e, a)
                    }, this), us(o, this._axisGroup, e), t.prototype.render.call(this, e, n, i, r)
                }
            }, n.prototype.remove = function () {
                rg(this)
            }, n.type = "cartesianAxis", n
        }(ND), GD = {
            splitLine: function (t, e, n, i) {
                var r = n.axis;
                if (!r.scale.isBlank()) {
                    var o = n.getModel("splitLine"), a = o.getModel("lineStyle"), s = a.get("color");
                    s = T(s) ? s : [s];
                    for (var l = i.coordinateSystem.getRect(), u = r.isHorizontal(), h = 0, p = r.getTicksCoords({tickModel: o}), f = [], d = [], g = a.getLineStyle(), y = 0; y < p.length; y++) {
                        var v = r.toGlobalCoord(p[y].coord);
                        u ? (f[0] = v, f[1] = l.y, d[0] = v, d[1] = l.y + l.height) : (f[0] = l.x, f[1] = v, d[0] = l.x + l.width, d[1] = v);
                        var m = h++ % s.length, _ = p[y].tickValue;
                        e.add(new fw({
                            anid: null != _ ? "line_" + p[y].tickValue : null,
                            subPixelOptimize: !0,
                            autoBatch: !0,
                            shape: {x1: f[0], y1: f[1], x2: d[0], y2: d[1]},
                            style: c({stroke: s[m]}, g),
                            silent: !0
                        }))
                    }
                }
            }, minorSplitLine: function (t, e, n, i) {
                var r = n.axis, o = n.getModel("minorSplitLine"), a = o.getModel("lineStyle"),
                    s = i.coordinateSystem.getRect(), l = r.isHorizontal(), u = r.getMinorTicksCoords();
                if (u.length) for (var h = [], c = [], p = a.getLineStyle(), f = 0; f < u.length; f++) for (var d = 0; d < u[f].length; d++) {
                    var g = r.toGlobalCoord(u[f][d].coord);
                    l ? (h[0] = g, h[1] = s.y, c[0] = g, c[1] = s.y + s.height) : (h[0] = s.x, h[1] = g, c[0] = s.x + s.width, c[1] = g), e.add(new fw({
                        anid: "minor_line_" + u[f][d].tickValue,
                        subPixelOptimize: !0,
                        autoBatch: !0,
                        shape: {x1: h[0], y1: h[1], x2: c[0], y2: c[1]},
                        style: p,
                        silent: !0
                    }))
                }
            }, splitArea: function (t, e, n, i) {
                ig(t, e, n, i)
            }
        }, UD = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e
            }

            return e(n, t), n.type = "xAxis", n
        }(WD), YD = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = UD.type, e
            }

            return e(n, t), n.type = "yAxis", n
        }(WD), XD = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = "grid", e
            }

            return e(n, t), n.prototype.render = function (t) {
                this.group.removeAll(), t.get("show") && this.group.add(new rx({
                    shape: t.coordinateSystem.getRect(),
                    style: c({fill: t.get("backgroundColor")}, t.getItemStyle()),
                    silent: !0,
                    z2: -1
                }))
            }, n.type = "grid", n
        }(zS), jD = {offset: 0};
    mf(og);
    var qD = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = n.type, e.layoutMode = {type: "box", ignoreSize: !0}, e
        }

        return e(n, t), n.type = "title", n.defaultOption = {
            zlevel: 0,
            z: 6,
            show: !0,
            text: "",
            target: "blank",
            subtext: "",
            subtarget: "blank",
            left: 0,
            top: 0,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            textStyle: {fontSize: 18, fontWeight: "bold", color: "#464646"},
            subtextStyle: {fontSize: 12, color: "#6E7079"}
        }, n
    }(Ib), ZD = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = n.type, e
        }

        return e(n, t), n.prototype.render = function (t, e, n) {
            if (this.group.removeAll(), t.get("show")) {
                var i = this.group, r = t.getModel("textStyle"), o = t.getModel("subtextStyle"), a = t.get("textAlign"),
                    s = N(t.get("textBaseline"), t.get("textVerticalAlign")),
                    l = new lx({style: ws(r, {text: t.get("text"), fill: r.getTextColor()}, {disableBox: !0}), z2: 10}),
                    u = l.getBoundingRect(), h = t.get("subtext"), c = new lx({
                        style: ws(o, {
                            text: h,
                            fill: o.getTextColor(),
                            y: u.height + t.get("itemGap"),
                            verticalAlign: "top"
                        }, {disableBox: !0}), z2: 10
                    }), p = t.get("link"), f = t.get("sublink"), d = t.get("triggerEvent", !0);
                l.silent = !p && !d, c.silent = !f && !d, p && l.on("click", function () {
                    gl(p, "_" + t.get("target"))
                }), f && c.on("click", function () {
                    gl(f, "_" + t.get("subtarget"))
                }), cx(l).eventData = cx(c).eventData = d ? {
                    componentType: "title",
                    componentIndex: t.componentIndex
                } : null, i.add(l), h && i.add(c);
                var g = i.getBoundingRect(), y = t.getBoxLayoutParams();
                y.width = g.width, y.height = g.height;
                var v = vl(y, {width: n.getWidth(), height: n.getHeight()}, t.get("padding"));
                a || (a = t.get("left") || t.get("right"), "middle" === a && (a = "center"), "right" === a ? v.x += v.width : "center" === a && (v.x += v.width / 2)), s || (s = t.get("top") || t.get("bottom"), "center" === s && (s = "middle"), "bottom" === s ? v.y += v.height : "middle" === s && (v.y += v.height / 2), s = s || "top"), i.x = v.x, i.y = v.y, i.markRedraw();
                var m = {align: a, verticalAlign: s};
                l.setStyle(m), c.setStyle(m), g = i.getBoundingRect();
                var _ = v.margin, x = t.getItemStyle(["color", "opacity"]);
                x.fill = t.get("backgroundColor");
                var w = new rx({
                    shape: {
                        x: g.x - _[3],
                        y: g.y - _[0],
                        width: g.width + _[1] + _[3],
                        height: g.height + _[0] + _[2],
                        r: t.get("borderRadius")
                    }, style: x, subPixelOptimize: !0, silent: !0
                });
                i.add(w)
            }
        }, n.type = "title", n
    }(zS);
    mf(ag);
    var KD = function (t, e) {
        return "all" === e ? {
            type: "all",
            title: t.getLocale(["legend", "selector", "all"])
        } : "inverse" === e ? {type: "inverse", title: t.getLocale(["legend", "selector", "inverse"])} : void 0
    }, $D = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = n.type, e.layoutMode = {type: "box", ignoreSize: !0}, e
        }

        return e(n, t), n.prototype.init = function (t, e, n) {
            this.mergeDefaultAndTheme(t, n), t.selected = t.selected || {}, this._updateSelector(t)
        }, n.prototype.mergeOption = function (e, n) {
            t.prototype.mergeOption.call(this, e, n), this._updateSelector(e)
        }, n.prototype._updateSelector = function (t) {
            var e = t.selector, n = this.ecModel;
            e === !0 && (e = t.selector = ["all", "inverse"]), T(e) && y(e, function (t, i) {
                C(t) && (t = {type: t}), e[i] = l(t, KD(n, t.type))
            })
        }, n.prototype.optionUpdated = function () {
            this._updateData(this.ecModel);
            var t = this._data;
            if (t[0] && "single" === this.get("selectedMode")) {
                for (var e = !1, n = 0; n < t.length; n++) {
                    var i = t[n].get("name");
                    if (this.isSelected(i)) {
                        this.select(i), e = !0;
                        break
                    }
                }
                !e && this.select(t[0].get("name"))
            }
        }, n.prototype._updateData = function (t) {
            var e = [], n = [];
            t.eachRawSeries(function (i) {
                var r = i.name;
                n.push(r);
                var o;
                if (i.legendVisualProvider) {
                    var a = i.legendVisualProvider, s = a.getAllNames();
                    t.isSeriesFiltered(i) || (n = n.concat(s)), s.length ? e = e.concat(s) : o = !0
                } else o = !0;
                o && tr(i) && e.push(i.name)
            }), this._availableNames = n;
            var i = this.get("data") || e, r = v(i, function (t) {
                return ("string" == typeof t || "number" == typeof t) && (t = {name: t}), new $w(t, this, this.ecModel)
            }, this);
            this._data = r
        }, n.prototype.getData = function () {
            return this._data
        }, n.prototype.select = function (t) {
            var e = this.option.selected, n = this.get("selectedMode");
            if ("single" === n) {
                var i = this._data;
                y(i, function (t) {
                    e[t.get("name")] = !1
                })
            }
            e[t] = !0
        }, n.prototype.unSelect = function (t) {
            "single" !== this.get("selectedMode") && (this.option.selected[t] = !1)
        }, n.prototype.toggleSelected = function (t) {
            var e = this.option.selected;
            e.hasOwnProperty(t) || (e[t] = !0), this[e[t] ? "unSelect" : "select"](t)
        }, n.prototype.allSelect = function () {
            var t = this._data, e = this.option.selected;
            y(t, function (t) {
                e[t.get("name", !0)] = !0
            })
        }, n.prototype.inverseSelect = function () {
            var t = this._data, e = this.option.selected;
            y(t, function (t) {
                var n = t.get("name", !0);
                e.hasOwnProperty(n) || (e[n] = !0), e[n] = !e[n]
            })
        }, n.prototype.isSelected = function (t) {
            var e = this.option.selected;
            return !(e.hasOwnProperty(t) && !e[t]) && p(this._availableNames, t) >= 0
        }, n.prototype.getOrient = function () {
            return "vertical" === this.get("orient") ? {index: 1, name: "vertical"} : {index: 0, name: "horizontal"}
        }, n.type = "legend.plain", n.dependencies = ["series"], n.defaultOption = {
            zlevel: 0,
            z: 4,
            show: !0,
            orient: "horizontal",
            left: "center",
            top: 0,
            align: "auto",
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "#ccc",
            borderRadius: 0,
            borderWidth: 0,
            padding: 5,
            itemGap: 10,
            itemWidth: 25,
            itemHeight: 14,
            inactiveColor: "#ccc",
            inactiveBorderColor: "#ccc",
            itemStyle: {borderWidth: 0},
            textStyle: {color: "#333"},
            selectedMode: !0,
            selector: !1,
            selectorLabel: {
                show: !0,
                borderRadius: 10,
                padding: [3, 5, 3, 5],
                fontSize: 12,
                fontFamily: " sans-serif",
                color: "#666",
                borderWidth: 1,
                borderColor: "#666"
            },
            emphasis: {selectorLabel: {show: !0, color: "#eee", backgroundColor: "#666"}},
            selectorPosition: "auto",
            selectorItemGap: 7,
            selectorButtonGap: 10,
            tooltip: {show: !1}
        }, n
    }(Ib), QD = S, JD = y, tA = wm, eA = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = n.type, e.newlineDisabled = !1, e
        }

        return e(n, t), n.prototype.init = function () {
            this.group.add(this._contentGroup = new tA), this.group.add(this._selectorGroup = new tA), this._isFirstRender = !0
        }, n.prototype.getContentGroup = function () {
            return this._contentGroup
        }, n.prototype.getSelectorGroup = function () {
            return this._selectorGroup
        }, n.prototype.render = function (t, e, n) {
            var i = this._isFirstRender;
            if (this._isFirstRender = !1, this.resetInner(), t.get("show", !0)) {
                var r = t.get("align"), o = t.get("orient");
                r && "auto" !== r || (r = "right" === t.get("left") && "vertical" === o ? "right" : "left");
                var a = t.get("selector", !0), s = t.get("selectorPosition", !0);
                !a || s && "auto" !== s || (s = "horizontal" === o ? "end" : "start"), this.renderInner(r, t, e, n, a, o, s);
                var l = t.getBoxLayoutParams(), u = {width: n.getWidth(), height: n.getHeight()}, h = t.get("padding"),
                    p = vl(l, u, h), f = this.layoutInner(t, r, p, i, a, s),
                    d = vl(c({width: f.width, height: f.height}, l), u, h);
                this.group.x = d.x - f.x, this.group.y = d.y - f.y, this.group.markRedraw(), this.group.add(this._backgroundEl = sg(f, t))
            }
        }, n.prototype.resetInner = function () {
            this.getContentGroup().removeAll(), this._backgroundEl && this.group.remove(this._backgroundEl), this.getSelectorGroup().removeAll()
        }, n.prototype.renderInner = function (t, e, n, i, r, o, a) {
            var s = this.getContentGroup(), l = X(), u = e.get("selectedMode"), h = [];
            n.eachRawSeries(function (t) {
                !t.get("legendHoverLink") && h.push(t.id)
            }), JD(e.getData(), function (r, o) {
                var a = r.get("name");
                if (!this.newlineDisabled && ("" === a || "\n" === a)) {
                    var c = new tA;
                    return c.newline = !0, void s.add(c)
                }
                var p = n.getSeriesByName(a)[0];
                if (!l.get(a)) if (p) {
                    var f = p.getData(), d = f.getVisual("style"), g = d[f.getVisual("drawType")] || d.fill,
                        y = d.stroke, v = d.decal, m = f.getVisual("legendSymbol") || "roundRect",
                        _ = f.getVisual("symbol"), x = this._createItem(a, o, r, e, m, _, t, g, y, v, u);
                    x.on("click", QD(ug, a, null, i, h)).on("mouseover", QD(cg, p.name, null, i, h)).on("mouseout", QD(pg, p.name, null, i, h)), l.set(a, !0)
                } else n.eachRawSeries(function (n) {
                    if (!l.get(a) && n.legendVisualProvider) {
                        var s = n.legendVisualProvider;
                        if (!s.containName(a)) return;
                        var c = s.indexOfName(a), p = s.getItemVisual(c, "style"), f = p.stroke, d = p.decal,
                            g = p.fill, y = on(p.fill);
                        y && 0 === y[3] && (y[3] = .2, g = dn(y, "rgba"));
                        var v = "roundRect", m = this._createItem(a, o, r, e, v, null, t, g, f, d, u);
                        m.on("click", QD(ug, null, a, i, h)).on("mouseover", QD(cg, null, a, i, h)).on("mouseout", QD(pg, null, a, i, h)), l.set(a, !0)
                    }
                }, this)
            }, this), r && this._createSelector(r, e, i, o, a)
        }, n.prototype._createSelector = function (t, e, n) {
            var i = this.getSelectorGroup();
            JD(t, function (t) {
                var r = t.type, o = new lx({
                    style: {x: 0, y: 0, align: "center", verticalAlign: "middle"}, onclick: function () {
                        n.dispatchAction({type: "all" === r ? "legendAllSelect" : "legendInverseSelect"})
                    }
                });
                i.add(o);
                var a = e.getModel("selectorLabel"), s = e.getModel(["emphasis", "selectorLabel"]);
                _s(o, {normal: a, emphasis: s}, {defaultText: t.title}), fa(o)
            })
        }, n.prototype._createItem = function (t, e, n, i, r, o, a, s, l, u, c) {
            var p = i.get("itemWidth"), f = i.get("itemHeight"), d = i.get("inactiveColor"),
                g = i.get("inactiveBorderColor"), y = i.get("symbolKeepAspect"), v = i.getModel("itemStyle"),
                m = i.isSelected(t), _ = new tA, x = n.getModel("textStyle"), w = n.get("icon"),
                b = n.getModel("tooltip"), S = b.parentModel;
            r = w || r;
            var T = rc(r, 0, 0, p, f, m ? s : d, null == y ? !0 : y);
            if (_.add(lg(T, r, v, l, g, u, m)), !w && o && (o !== r || "none" === o)) {
                var M = .8 * f;
                "none" === o && (o = "circle");
                var C = rc(o, (p - M) / 2, (f - M) / 2, M, M, m ? s : d, null == y ? !0 : y);
                _.add(lg(C, o, v, l, g, u, m))
            }
            var I = "left" === a ? p + 5 : -5, D = a, A = i.get("formatter"), k = t;
            "string" == typeof A && A ? k = A.replace("{name}", null != t ? t : "") : "function" == typeof A && (k = A(t)), _.add(new lx({
                style: ws(x, {
                    text: k,
                    x: I,
                    y: f / 2,
                    fill: m ? x.getTextColor() : d,
                    align: D,
                    verticalAlign: "middle"
                })
            }));
            var L = new rx({shape: _.getBoundingRect(), invisible: !0});
            if (b.get("show")) {
                var P = {componentType: "legend", legendIndex: i.componentIndex, name: t, $vars: ["name"]};
                L.tooltip = h({
                    content: t, formatter: S.get("formatter", !0) || function (t) {
                        return t.name
                    }, formatterParams: P
                }, b.option)
            }
            return _.add(L), _.eachChild(function (t) {
                t.silent = !0
            }), L.silent = !c, this.getContentGroup().add(_), fa(_), _.__legendDataIndex = e, _
        }, n.prototype.layoutInner = function (t, e, n, i, r, o) {
            var a = this.getContentGroup(), s = this.getSelectorGroup();
            Mb(t.get("orient"), a, t.get("itemGap"), n.width, n.height);
            var l = a.getBoundingRect(), u = [-l.x, -l.y];
            if (s.markRedraw(), a.markRedraw(), r) {
                Mb("horizontal", s, t.get("selectorItemGap", !0));
                var h = s.getBoundingRect(), c = [-h.x, -h.y], p = t.get("selectorButtonGap", !0),
                    f = t.getOrient().index, d = 0 === f ? "width" : "height", g = 0 === f ? "height" : "width",
                    y = 0 === f ? "y" : "x";
                "end" === o ? c[f] += l[d] + p : u[f] += h[d] + p, c[1 - f] += l[g] / 2 - h[g] / 2, s.x = c[0], s.y = c[1], a.x = u[0], a.y = u[1];
                var v = {x: 0, y: 0};
                return v[d] = l[d] + p + h[d], v[g] = Math.max(l[g], h[g]), v[y] = Math.min(0, h[y] + c[1 - f]), v
            }
            return a.x = u[0], a.y = u[1], this.group.getBoundingRect()
        }, n.prototype.remove = function () {
            this.getContentGroup().removeAll(), this._isFirstRender = !0
        }, n.type = "legend.plain", n
    }(zS), nA = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = n.type, e
        }

        return e(n, t), n.prototype.setScrollDataIndex = function (t) {
            this.option.scrollDataIndex = t
        }, n.prototype.init = function (e, n, i) {
            var r = xl(e);
            t.prototype.init.call(this, e, n, i), vg(this, e, r)
        }, n.prototype.mergeOption = function (e, n) {
            t.prototype.mergeOption.call(this, e, n), vg(this, this.option, e)
        }, n.type = "legend.scroll", n.defaultOption = Ps($D.defaultOption, {
            scrollDataIndex: 0,
            pageButtonItemGap: 5,
            pageButtonGap: null,
            pageButtonPosition: "end",
            pageFormatter: "{current}/{total}",
            pageIcons: {
                horizontal: ["M0,0L12,-10L12,10z", "M0,0L-12,-10L-12,10z"],
                vertical: ["M0,0L20,0L10,-20z", "M0,0L20,0L10,20z"]
            },
            pageIconColor: "#2f4554",
            pageIconInactiveColor: "#aaa",
            pageIconSize: 15,
            pageTextStyle: {color: "#333"},
            animationDurationUpdate: 800
        }), n
    }($D), iA = wm, rA = ["width", "height"], oA = ["x", "y"], aA = function (t) {
        function n() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.type = n.type, e.newlineDisabled = !0, e._currentIndex = 0, e
        }

        return e(n, t), n.prototype.init = function () {
            t.prototype.init.call(this), this.group.add(this._containerGroup = new iA), this._containerGroup.add(this.getContentGroup()), this.group.add(this._controllerGroup = new iA)
        }, n.prototype.resetInner = function () {
            t.prototype.resetInner.call(this), this._controllerGroup.removeAll(), this._containerGroup.removeClipPath(), this._containerGroup.__rectSize = null
        }, n.prototype.renderInner = function (e, n, i, r, o, a, s) {
            function l(t, e) {
                var i = t + "DataIndex",
                    o = ps(n.get("pageIcons", !0)[n.getOrient().name][e], {onclick: Ey(u._pageGo, u, i, n, r)}, {
                        x: -p[0] / 2,
                        y: -p[1] / 2,
                        width: p[0],
                        height: p[1]
                    });
                o.name = t, h.add(o)
            }

            var u = this;
            t.prototype.renderInner.call(this, e, n, i, r, o, a, s);
            var h = this._controllerGroup, c = n.get("pageIconSize", !0), p = T(c) ? c : [c, c];
            l("pagePrev", 0);
            var f = n.getModel("pageTextStyle");
            h.add(new lx({
                name: "pageText",
                style: {
                    text: "xx/xx",
                    fill: f.getTextColor(),
                    font: f.getFont(),
                    verticalAlign: "middle",
                    align: "center"
                },
                silent: !0
            })), l("pageNext", 1)
        }, n.prototype.layoutInner = function (t, e, n, i, r, o) {
            var a = this.getSelectorGroup(), l = t.getOrient().index, u = rA[l], h = oA[l], c = rA[1 - l],
                p = oA[1 - l];
            r && Mb("horizontal", a, t.get("selectorItemGap", !0));
            var f = t.get("selectorButtonGap", !0), d = a.getBoundingRect(), g = [-d.x, -d.y], y = s(n);
            r && (y[u] = n[u] - d[u] - f);
            var v = this._layoutContentAndController(t, i, y, l, u, c, p, h);
            if (r) {
                if ("end" === o) g[l] += v[u] + f; else {
                    var m = d[u] + f;
                    g[l] -= m, v[h] -= m
                }
                v[u] += d[u] + f, g[1 - l] += v[p] + v[c] / 2 - d[c] / 2, v[c] = Math.max(v[c], d[c]), v[p] = Math.min(v[p], d[p] + g[1 - l]), a.x = g[0], a.y = g[1], a.markRedraw()
            }
            return v
        }, n.prototype._layoutContentAndController = function (t, e, n, i, r, o, a, s) {
            var l = this.getContentGroup(), u = this._containerGroup, h = this._controllerGroup;
            Mb(t.get("orient"), l, t.get("itemGap"), i ? n.width : null, i ? null : n.height), Mb("horizontal", h, t.get("pageButtonItemGap", !0));
            var c = l.getBoundingRect(), p = h.getBoundingRect(), f = this._showController = c[r] > n[r],
                d = [-c.x, -c.y];
            e || (d[i] = l[s]);
            var g = [0, 0], y = [-p.x, -p.y], v = N(t.get("pageButtonGap", !0), t.get("itemGap", !0));
            if (f) {
                var m = t.get("pageButtonPosition", !0);
                "end" === m ? y[i] += n[r] - p[r] : g[i] += p[r] + v
            }
            y[1 - i] += c[o] / 2 - p[o] / 2, l.setPosition(d), u.setPosition(g), h.setPosition(y);
            var _ = {x: 0, y: 0};
            if (_[r] = f ? n[r] : c[r], _[o] = Math.max(c[o], p[o]), _[a] = Math.min(0, p[a] + y[1 - i]), u.__rectSize = n[r], f) {
                var x = {x: 0, y: 0};
                x[r] = Math.max(n[r] - p[r] - v, 0), x[o] = _[o], u.setClipPath(new rx({shape: x})), u.__rectSize = x[r]
            } else h.eachChild(function (t) {
                t.attr({invisible: !0, silent: !0})
            });
            var w = this._getPageInfo(t);
            return null != w.pageIndex && Qa(l, {
                x: w.contentPosition[0],
                y: w.contentPosition[1]
            }, f ? t : null), this._updatePageInfoView(t, w), _
        }, n.prototype._pageGo = function (t, e, n) {
            var i = this._getPageInfo(e)[t];
            null != i && n.dispatchAction({type: "legendScroll", scrollDataIndex: i, legendId: e.id})
        }, n.prototype._updatePageInfoView = function (t, e) {
            var n = this._controllerGroup;
            y(["pagePrev", "pageNext"], function (i) {
                var r = i + "DataIndex", o = null != e[r], a = n.childOfName(i);
                a && (a.setStyle("fill", o ? t.get("pageIconColor", !0) : t.get("pageIconInactiveColor", !0)), a.cursor = o ? "pointer" : "default")
            });
            var i = n.childOfName("pageText"), r = t.get("pageFormatter"), o = e.pageIndex, a = null != o ? o + 1 : 0,
                s = e.pageCount;
            i && r && i.setStyle("text", C(r) ? r.replace("{current}", null == a ? "" : a + "").replace("{total}", null == s ? "" : s + "") : r({
                current: a,
                total: s
            }))
        }, n.prototype._getPageInfo = function (t) {
            function e(t) {
                if (t) {
                    var e = t.getBoundingRect(), n = e[l] + t[l];
                    return {s: n, e: n + e[s], i: t.__legendDataIndex}
                }
            }

            function n(t, e) {
                return t.e >= e && t.s <= e + o
            }

            var i = t.get("scrollDataIndex", !0), r = this.getContentGroup(), o = this._containerGroup.__rectSize,
                a = t.getOrient().index, s = rA[a], l = oA[a], u = this._findTargetItemIndex(i), h = r.children(),
                c = h[u], p = h.length, f = p ? 1 : 0, d = {
                    contentPosition: [r.x, r.y],
                    pageCount: f,
                    pageIndex: f - 1,
                    pagePrevDataIndex: null,
                    pageNextDataIndex: null
                };
            if (!c) return d;
            var g = e(c);
            d.contentPosition[a] = -g.s;
            for (var y = u + 1, v = g, m = g, _ = null; p >= y; ++y) _ = e(h[y]), (!_ && m.e > v.s + o || _ && !n(_, v.s)) && (v = m.i > v.i ? m : _, v && (null == d.pageNextDataIndex && (d.pageNextDataIndex = v.i), ++d.pageCount)), m = _;
            for (var y = u - 1, v = g, m = g, _ = null; y >= -1; --y) _ = e(h[y]), _ && n(m, _.s) || !(v.i < m.i) || (m = v, null == d.pagePrevDataIndex && (d.pagePrevDataIndex = v.i), ++d.pageCount, ++d.pageIndex), v = _;
            return d
        }, n.prototype._findTargetItemIndex = function (t) {
            if (!this._showController) return 0;
            var e, n, i = this.getContentGroup();
            return i.eachChild(function (i, r) {
                var o = i.__legendDataIndex;
                null == n && null != o && (n = r), o === t && (e = r)
            }), null != e ? e : n
        }, n.type = "legend.scroll", n
    }(eA);
    mf(_g);
    var sA = or(), lA = s, uA = Ey, hA = function () {
            function t() {
                this._dragging = !1, this.animationThreshold = 15
            }

            return t.prototype.render = function (t, e, n, i) {
                var r = e.get("value"), o = e.get("status");
                if (this._axisModel = t, this._axisPointerModel = e, this._api = n, i || this._lastValue !== r || this._lastStatus !== o) {
                    this._lastValue = r, this._lastStatus = o;
                    var a = this._group, s = this._handle;
                    if (!o || "hide" === o) return a && a.hide(), void (s && s.hide());
                    a && a.show(), s && s.show();
                    var l = {};
                    this.makeElOption(l, r, t, e, n);
                    var u = l.graphicKey;
                    u !== this._lastGraphicKey && this.clear(n), this._lastGraphicKey = u;
                    var h = this._moveAnimation = this.determineAnimation(t, e);
                    if (a) {
                        var c = S(xg, e, h);
                        this.updatePointerEl(a, l, c), this.updateLabelEl(a, l, c, e)
                    } else a = this._group = new wm, this.createPointerEl(a, l, t, e), this.createLabelEl(a, l, t, e), n.getZr().add(a);
                    Tg(a, e, !0), this._renderHandle(r)
                }
            }, t.prototype.remove = function (t) {
                this.clear(t)
            }, t.prototype.dispose = function (t) {
                this.clear(t)
            }, t.prototype.determineAnimation = function (t, e) {
                var n = e.get("animation"), i = t.axis, r = "category" === i.type, o = e.get("snap");
                if (!o && !r) return !1;
                if ("auto" === n || null == n) {
                    var a = this.animationThreshold;
                    if (r && i.getBandWidth() > a) return !0;
                    if (o) {
                        var s = Jd(t).seriesDataCount, l = i.getExtent();
                        return Math.abs(l[0] - l[1]) / s > a
                    }
                    return !1
                }
                return n === !0
            }, t.prototype.makeElOption = function () {
            }, t.prototype.createPointerEl = function (t, e) {
                var n = e.pointer;
                if (n) {
                    var i = sA(t).pointerEl = new Ew[n.type](lA(e.pointer));
                    t.add(i)
                }
            }, t.prototype.createLabelEl = function (t, e, n, i) {
                if (e.label) {
                    var r = sA(t).labelEl = new lx(lA(e.label));
                    t.add(r), bg(r, i)
                }
            }, t.prototype.updatePointerEl = function (t, e, n) {
                var i = sA(t).pointerEl;
                i && e.pointer && (i.setStyle(e.pointer.style), n(i, {shape: e.pointer.shape}))
            }, t.prototype.updateLabelEl = function (t, e, n, i) {
                var r = sA(t).labelEl;
                r && (r.setStyle(e.label.style), n(r, {x: e.label.x, y: e.label.y}), bg(r, i))
            }, t.prototype._renderHandle = function (t) {
                if (!this._dragging && this.updateHandleTransform) {
                    var e = this._axisPointerModel, n = this._api.getZr(), i = this._handle, r = e.getModel("handle"),
                        o = e.get("status");
                    if (!r.get("show") || !o || "hide" === o) return i && n.remove(i), void (this._handle = null);
                    var a;
                    this._handle || (a = !0, i = this._handle = ps(r.get("icon"), {
                        cursor: "move",
                        draggable: !0,
                        onmousemove: function (t) {
                            tv(t.event)
                        },
                        onmousedown: uA(this._onHandleDragMove, this, 0, 0),
                        drift: uA(this._onHandleDragMove, this),
                        ondragend: uA(this._onHandleDragEnd, this)
                    }), n.add(i)), Tg(i, e, !1), i.setStyle(r.getItemStyle(null, ["color", "borderColor", "borderWidth", "opacity", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY"]));
                    var s = r.get("size");
                    T(s) || (s = [s, s]), i.scaleX = s[0] / 2, i.scaleY = s[1] / 2, gh(this, "_doDispatchAxisPointer", r.get("throttle") || 0, "fixRate"), this._moveHandleToValue(t, a)
                }
            }, t.prototype._moveHandleToValue = function (t, e) {
                xg(this._axisPointerModel, !e && this._moveAnimation, this._handle, Sg(this.getHandleTransform(t, this._axisModel, this._axisPointerModel)))
            }, t.prototype._onHandleDragMove = function (t, e) {
                var n = this._handle;
                if (n) {
                    this._dragging = !0;
                    var i = this.updateHandleTransform(Sg(n), [t, e], this._axisModel, this._axisPointerModel);
                    this._payloadInfo = i, n.stopAnimation(), n.attr(Sg(i)), sA(n).lastProp = null, this._doDispatchAxisPointer()
                }
            }, t.prototype._doDispatchAxisPointer = function () {
                var t = this._handle;
                if (t) {
                    var e = this._payloadInfo, n = this._axisModel;
                    this._api.dispatchAction({
                        type: "updateAxisPointer",
                        x: e.cursorPoint[0],
                        y: e.cursorPoint[1],
                        tooltipOption: e.tooltipOption,
                        axesInfo: [{axisDim: n.axis.dim, axisIndex: n.componentIndex}]
                    })
                }
            }, t.prototype._onHandleDragEnd = function () {
                this._dragging = !1;
                var t = this._handle;
                if (t) {
                    var e = this._axisPointerModel.get("value");
                    this._moveHandleToValue(e), this._api.dispatchAction({type: "hideTip"})
                }
            }, t.prototype.clear = function (t) {
                this._lastValue = null, this._lastStatus = null;
                var e = t.getZr(), n = this._group, i = this._handle;
                e && n && (this._lastGraphicKey = null, n && e.remove(n), i && e.remove(i), this._group = null, this._handle = null, this._payloadInfo = null)
            }, t.prototype.doClear = function () {
            }, t.prototype.buildLabel = function (t, e, n) {
                return n = n || 0, {x: t[n], y: t[1 - n], width: e[n], height: e[1 - n]}
            }, t
        }(), cA = function (t) {
            function n() {
                return null !== t && t.apply(this, arguments) || this
            }

            return e(n, t), n.prototype.makeElOption = function (t, e, n, i, r) {
                var o = n.axis, a = o.grid, s = i.get("type"), l = Og(a, o).getOtherAxis(o).getGlobalExtent(),
                    u = o.toGlobalCoord(o.dataToCoord(e, !0));
                if (s && "none" !== s) {
                    var h = Mg(i), c = pA[s](o, u, l);
                    c.style = h, t.graphicKey = c.type, t.pointer = c
                }
                var p = kd(a.model, n);
                kg(e, t, p, n, i, r)
            }, n.prototype.getHandleTransform = function (t, e, n) {
                var i = kd(e.axis.grid.model, e, {labelInside: !1});
                i.labelMargin = n.get(["handle", "margin"]);
                var r = Ag(e.axis, t, i);
                return {x: r[0], y: r[1], rotation: i.rotation + (i.labelDirection < 0 ? Math.PI : 0)}
            }, n.prototype.updateHandleTransform = function (t, e, n) {
                var i = n.axis, r = i.grid, o = i.getGlobalExtent(!0), a = Og(r, i).getOtherAxis(i).getGlobalExtent(),
                    s = "x" === i.dim ? 0 : 1, l = [t.x, t.y];
                l[s] += e[s], l[s] = Math.min(o[1], l[s]), l[s] = Math.max(o[0], l[s]);
                var u = (a[1] + a[0]) / 2, h = [u, u];
                h[s] = l[s];
                var c = [{verticalAlign: "middle"}, {align: "center"}];
                return {x: l[0], y: l[1], rotation: t.rotation, cursorPoint: h, tooltipOption: c[s]}
            }, n
        }(hA), pA = {
            line: function (t, e, n) {
                var i = Lg([e, n[0]], [e, n[1]], Rg(t));
                return {type: "Line", subPixelOptimize: !0, shape: i}
            }, shadow: function (t, e, n) {
                var i = Math.max(1, t.getBandWidth()), r = n[1] - n[0];
                return {type: "Rect", shape: Pg([e - i / 2, n[0]], [i, r], Rg(t))}
            }
        }, fA = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e
            }

            return e(n, t), n.type = "axisPointer", n.defaultOption = {
                show: "auto",
                zlevel: 0,
                z: 50,
                type: "line",
                snap: !1,
                triggerTooltip: !0,
                value: null,
                status: null,
                link: [],
                animation: null,
                animationDurationUpdate: 200,
                lineStyle: {color: "#B9BEC9", width: 1, type: "dashed"},
                shadowStyle: {color: "rgba(210,219,238,0.2)"},
                label: {
                    show: !0,
                    formatter: null,
                    precision: "auto",
                    margin: 3,
                    color: "#fff",
                    padding: [5, 7, 5, 7],
                    backgroundColor: "auto",
                    borderColor: null,
                    borderWidth: 0,
                    borderRadius: 3
                },
                handle: {
                    show: !1,
                    icon: "M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4h1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7v-1.2h6.6z M13.3,22H6.7v-1.2h6.6z M13.3,19.6H6.7v-1.2h6.6z",
                    size: 45,
                    margin: 50,
                    color: "#333",
                    shadowBlur: 3,
                    shadowColor: "#aaa",
                    shadowOffsetX: 0,
                    shadowOffsetY: 2,
                    throttle: 40
                }
            }, n
        }(Ib), dA = or(), gA = y, yA = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e
            }

            return e(n, t), n.prototype.render = function (t, e, n) {
                var i = e.getComponent("tooltip"), r = t.get("triggerOn") || i && i.get("triggerOn") || "mousemove|click";
                Bg("axisPointer", n, function (t, e, n) {
                    "none" !== r && ("leave" === t || r.indexOf(t) >= 0) && n({
                        type: "updateAxisPointer",
                        currTrigger: t,
                        x: e && e.offsetX,
                        y: e && e.offsetY
                    })
                })
            }, n.prototype.remove = function (t, e) {
                Hg("axisPointer", e)
            }, n.prototype.dispose = function (t, e) {
                Hg("axisPointer", e)
            }, n.type = "axisPointer", n
        }(zS), vA = or(), mA = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e
            }

            return e(n, t), n.type = "tooltip", n.dependencies = ["axisPointer"], n.defaultOption = {
                zlevel: 0,
                z: 60,
                show: !0,
                showContent: !0,
                trigger: "item",
                triggerOn: "mousemove|click",
                alwaysShowContent: !1,
                displayMode: "single",
                renderMode: "auto",
                confine: null,
                showDelay: 0,
                hideDelay: 100,
                transitionDuration: .4,
                enterable: !1,
                backgroundColor: "#fff",
                shadowBlur: 10,
                shadowColor: "rgba(0, 0, 0, .2)",
                shadowOffsetX: 1,
                shadowOffsetY: 2,
                borderRadius: 4,
                borderWidth: 1,
                padding: null,
                extraCssText: "",
                axisPointer: {
                    type: "line",
                    axis: "auto",
                    animation: "auto",
                    animationDurationUpdate: 200,
                    animationEasingUpdate: "exponentialOut",
                    crossStyle: {color: "#999", width: 1, type: "dashed", textStyle: {}}
                },
                textStyle: {color: "#666", fontSize: 14}
            }, n
        }(Ib), _A = ["-ms-", "-moz-", "-o-", "-webkit-", ""],
        xA = "position:absolute;display:block;border-style:solid;white-space:nowrap;z-index:9999999;",
        wA = function () {
            function t(t, e, n) {
                if (this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._firstShow = !0, this._longHide = !0, by.wxa) return null;
                var i = document.createElement("div");
                i.domBelongToZr = !0, this.el = i;
                var r = this._zr = e.getZr(), o = this._appendToBody = n && n.appendToBody;
                sy(this._styleCoord, r, o, e.getWidth() / 2, e.getHeight() / 2), o ? document.body.appendChild(i) : t.appendChild(i), this._container = t;
                var a = this;
                i.onmouseenter = function () {
                    a._enterable && (clearTimeout(a._hideTimeout), a._show = !0), a._inContent = !0
                }, i.onmousemove = function (t) {
                    if (t = t || window.event, !a._enterable) {
                        var e = r.handler, n = r.painter.getViewportRoot();
                        De(n, t, !0), e.dispatch("mousemove", t)
                    }
                }, i.onmouseleave = function () {
                    a._inContent = !1, a._enterable && a._show && a.hideLater(a._hideDelay)
                }
            }

            return t.prototype.update = function (t) {
                var e = this._container, n = e.currentStyle || document.defaultView.getComputedStyle(e), i = e.style;
                "absolute" !== i.position && "absolute" !== n.position && (i.position = "relative");
                var r = t.get("alwaysShowContent");
                r && this._moveIfResized(), this.el.className = t.get("className") || ""
            }, t.prototype.show = function (t, e) {
                clearTimeout(this._hideTimeout), clearTimeout(this._longHideTimeout);
                var n = this.el, i = this._styleCoord, r = n.offsetHeight / 2;
                e = dl(e), n.style.cssText = xA + ay(t, !this._firstShow, this._longHide) + ";left:" + i[0] + "px;top:" + (i[1] - r) + "px;" + ("border-color: " + e + ";") + (t.get("extraCssText") || ""), n.style.display = n.innerHTML ? "block" : "none", n.style.pointerEvents = this._enterable ? "auto" : "none", this._show = !0, this._firstShow = !1, this._longHide = !1
            }, t.prototype.setContent = function (t, e, n, i, r) {
                if (null != t) {
                    var o = this.el;
                    if (C(r) && "item" === n.get("trigger") && !ey(n) && (t += iy(n.get("backgroundColor"), i, r)), C(t)) o.innerHTML = t; else if (t) {
                        o.innerHTML = "", T(t) || (t = [t]);
                        for (var a = 0; a < t.length; a++) P(t[a]) && t[a].parentNode !== o && o.appendChild(t[a])
                    }
                }
            }, t.prototype.setEnterable = function (t) {
                this._enterable = t
            }, t.prototype.getSize = function () {
                var t = this.el;
                return [t.clientWidth, t.clientHeight]
            }, t.prototype.moveTo = function (t, e) {
                var n = this._styleCoord;
                if (sy(n, this._zr, this._appendToBody, t, e), null != n[0] && null != n[1]) {
                    var i = this.el.style;
                    i.left = n[0].toFixed(0) + "px", i.top = n[1].toFixed(0) + "px"
                }
            }, t.prototype._moveIfResized = function () {
                var t = this._styleCoord[2], e = this._styleCoord[3];
                this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight())
            }, t.prototype.hide = function () {
                var t = this;
                this.el.style.visibility = "hidden", this.el.style.opacity = "0", this._show = !1, this._longHideTimeout = setTimeout(function () {
                    return t._longHide = !0
                }, 500)
            }, t.prototype.hideLater = function (t) {
                !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(Ey(this.hide, this), t)) : this.hide())
            }, t.prototype.isShow = function () {
                return this._show
            }, t.prototype.dispose = function () {
                this.el.parentNode.removeChild(this.el)
            }, t.prototype.getOuterSize = function () {
                var t = this.el.clientWidth, e = this.el.clientHeight;
                if (document.defaultView && document.defaultView.getComputedStyle) {
                    var n = document.defaultView.getComputedStyle(this.el);
                    n && (t += parseInt(n.borderLeftWidth, 10) + parseInt(n.borderRightWidth, 10), e += parseInt(n.borderTopWidth, 10) + parseInt(n.borderBottomWidth, 10))
                }
                return {width: t, height: e}
            }, t
        }(), bA = function () {
            function t(t) {
                this._show = !1, this._styleCoord = [0, 0, 0, 0], this._enterable = !0, this._zr = t.getZr(), hy(this._styleCoord, this._zr, t.getWidth() / 2, t.getHeight() / 2)
            }

            return t.prototype.update = function (t) {
                var e = t.get("alwaysShowContent");
                e && this._moveIfResized()
            }, t.prototype.show = function () {
                this._hideTimeout && clearTimeout(this._hideTimeout), this.el.show(), this._show = !0
            }, t.prototype.setContent = function (t, e, n, i) {
                A(t) && Fi(""), this.el && this._zr.remove(this.el);
                var r = n.getModel("textStyle");
                this.el = new lx({
                    style: {
                        rich: e.richTextStyles,
                        text: t,
                        lineHeight: 22,
                        backgroundColor: n.get("backgroundColor"),
                        borderRadius: n.get("borderRadius"),
                        borderWidth: 1,
                        borderColor: i,
                        shadowColor: n.get("shadowColor"),
                        shadowBlur: n.get("shadowBlur"),
                        shadowOffsetX: n.get("shadowOffsetX"),
                        shadowOffsetY: n.get("shadowOffsetY"),
                        textShadowColor: r.get("textShadowColor"),
                        textShadowBlur: r.get("textShadowBlur") || 0,
                        textShadowOffsetX: r.get("textShadowOffsetX") || 0,
                        textShadowOffsetY: r.get("textShadowOffsetY") || 0,
                        fill: n.get(["textStyle", "color"]),
                        padding: $u(n, "richText"),
                        verticalAlign: "top",
                        align: "left"
                    }, z: n.get("z")
                }), this._zr.add(this.el);
                var o = this;
                this.el.on("mouseover", function () {
                    o._enterable && (clearTimeout(o._hideTimeout), o._show = !0), o._inContent = !0
                }), this.el.on("mouseout", function () {
                    o._enterable && o._show && o.hideLater(o._hideDelay), o._inContent = !1
                })
            }, t.prototype.setEnterable = function (t) {
                this._enterable = t
            }, t.prototype.getSize = function () {
                var t = this.el, e = this.el.getBoundingRect(), n = uy(t.style);
                return [e.width + n.left + n.right, e.height + n.top + n.bottom]
            }, t.prototype.moveTo = function (t, e) {
                var n = this.el;
                if (n) {
                    var i = this._styleCoord;
                    hy(i, this._zr, t, e), t = i[0], e = i[1];
                    var r = n.style, o = ly(r.borderWidth || 0), a = uy(r);
                    n.x = t + o + a.left, n.y = e + o + a.top, n.markRedraw()
                }
            }, t.prototype._moveIfResized = function () {
                var t = this._styleCoord[2], e = this._styleCoord[3];
                this.moveTo(t * this._zr.getWidth(), e * this._zr.getHeight())
            }, t.prototype.hide = function () {
                this.el && this.el.hide(), this._show = !1
            }, t.prototype.hideLater = function (t) {
                !this._show || this._inContent && this._enterable || (t ? (this._hideDelay = t, this._show = !1, this._hideTimeout = setTimeout(Ey(this.hide, this), t)) : this.hide())
            }, t.prototype.isShow = function () {
                return this._show
            }, t.prototype.getOuterSize = function () {
                var t = this.getSize();
                return {width: t[0], height: t[1]}
            }, t.prototype.dispose = function () {
                this._zr.remove(this.el)
            }, t
        }(), SA = Ey, TA = y, MA = _i, CA = new rx({shape: {x: -1, y: -1, width: 2, height: 2}}), IA = function (t) {
            function n() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.type = n.type, e
            }

            return e(n, t), n.prototype.init = function (t, e) {
                if (!by.node) {
                    var n = t.getComponent("tooltip"), i = n.get("renderMode");
                    this._renderMode = hr(i), this._tooltipContent = "richText" === this._renderMode ? new bA(e) : new wA(e.getDom(), e, {appendToBody: n.get("appendToBody", !0)})
                }
            }, n.prototype.render = function (t, e, n) {
                if (!by.node) {
                    this.group.removeAll(), this._tooltipModel = t, this._ecModel = e, this._api = n, this._alwaysShowContent = t.get("alwaysShowContent");
                    var i = this._tooltipContent;
                    i.update(t), i.setEnterable(t.get("enterable")), this._initGlobalListener(), this._keepShow()
                }
            }, n.prototype._initGlobalListener = function () {
                var t = this._tooltipModel, e = t.get("triggerOn");
                Bg("itemTooltip", this._api, SA(function (t, n, i) {
                    "none" !== e && (e.indexOf(t) >= 0 ? this._tryShow(n, i) : "leave" === t && this._hide(i))
                }, this))
            }, n.prototype._keepShow = function () {
                var t = this._tooltipModel, e = this._ecModel, n = this._api;
                if (null != this._lastX && null != this._lastY && "none" !== t.get("triggerOn")) {
                    var i = this;
                    clearTimeout(this._refreshUpdateTimeout), this._refreshUpdateTimeout = setTimeout(function () {
                        !n.isDisposed() && i.manuallyShowTip(t, e, n, {
                            x: i._lastX,
                            y: i._lastY,
                            dataByCoordSys: i._lastDataByCoordSys
                        })
                    })
                }
            }, n.prototype.manuallyShowTip = function (t, e, n, i) {
                if (i.from !== this.uid && !by.node) {
                    var r = py(i, n);
                    this._ticket = "";
                    var o = i.dataByCoordSys;
                    if (i.tooltip && null != i.x && null != i.y) {
                        var a = CA;
                        a.x = i.x, a.y = i.y, a.update(), a.tooltip = i.tooltip, this._tryShow({
                            offsetX: i.x,
                            offsetY: i.y,
                            target: a
                        }, r)
                    } else if (o) this._tryShow({
                        offsetX: i.x,
                        offsetY: i.y,
                        position: i.position,
                        dataByCoordSys: o,
                        tooltipOption: i.tooltipOption
                    }, r); else if (null != i.seriesIndex) {
                        if (this._manuallyAxisShowTip(t, e, n, i)) return;
                        var s = Wg(i, e), l = s.point[0], u = s.point[1];
                        null != l && null != u && this._tryShow({
                            offsetX: l,
                            offsetY: u,
                            position: i.position,
                            target: s.el
                        }, r)
                    } else null != i.x && null != i.y && (n.dispatchAction({
                        type: "updateAxisPointer",
                        x: i.x,
                        y: i.y
                    }), this._tryShow({
                        offsetX: i.x,
                        offsetY: i.y,
                        position: i.position,
                        target: n.getZr().findHover(i.x, i.y).target
                    }, r))
                }
            }, n.prototype.manuallyHideTip = function (t, e, n, i) {
                var r = this._tooltipContent;
                !this._alwaysShowContent && this._tooltipModel && r.hideLater(this._tooltipModel.get("hideDelay")), this._lastX = this._lastY = this._lastDataByCoordSys = null, i.from !== this.uid && this._hide(py(i, n))
            }, n.prototype._manuallyAxisShowTip = function (t, e, n, i) {
                var r = i.seriesIndex, o = i.dataIndex, a = e.getComponent("axisPointer").coordSysAxesInfo;
                if (null != r && null != o && null != a) {
                    var s = e.getSeriesByIndex(r);
                    if (s) {
                        var l = s.getData(), u = cy([l.getItemModel(o), s, (s.coordinateSystem || {}).model, t]);
                        if ("axis" === u.get("trigger")) return n.dispatchAction({
                            type: "updateAxisPointer",
                            seriesIndex: r,
                            dataIndex: o,
                            position: i.position
                        }), !0
                    }
                }
            }, n.prototype._tryShow = function (t, e) {
                var n = t.target, i = this._tooltipModel;
                if (i) {
                    this._lastX = t.offsetX, this._lastY = t.offsetY;
                    var r = t.dataByCoordSys;
                    r && r.length ? this._showAxisTooltip(r, t) : n && nc(n, function (t) {
                        return null != cx(t).dataIndex
                    }, !0) ? (this._lastDataByCoordSys = null, this._showSeriesItemTooltip(t, n, e)) : n && n.tooltip ? (this._lastDataByCoordSys = null, this._showComponentItemTooltip(t, n, e)) : (this._lastDataByCoordSys = null, this._hide(e))
                }
            }, n.prototype._showOrMove = function (t, e) {
                var n = t.get("showDelay");
                e = Ey(e, this), clearTimeout(this._showTimout), n > 0 ? this._showTimout = setTimeout(e, n) : e()
            }, n.prototype._showAxisTooltip = function (t, e) {
                var n = this._ecModel, i = this._tooltipModel, r = [e.offsetX, e.offsetY], o = cy([e.tooltipOption, i]),
                    a = this._renderMode, s = [], l = Vu("section", {blocks: [], noHeader: !0}), u = [], h = new RS;
                TA(t, function (t) {
                    TA(t.dataByAxis, function (t) {
                        var e = n.getComponent(t.axisDim + "Axis", t.axisIndex), i = t.value;
                        if (e && null != i) {
                            var r = Dg(i, e.axis, n, t.seriesDataIndices, t.valueLabelOpt),
                                o = Vu("section", {header: r, noHeader: !G(r), sortBlocks: !0, blocks: []});
                            l.blocks.push(o), y(t.seriesDataIndices, function (l) {
                                var c = n.getSeriesByIndex(l.seriesIndex), p = l.dataIndexInside, f = c.getDataParams(p);
                                f.axisDim = t.axisDim, f.axisIndex = t.axisIndex, f.axisType = t.axisType, f.axisId = t.axisId, f.axisValue = lf(e.axis, {value: i}), f.axisValueLabel = r, f.marker = h.makeTooltipMarker("item", dl(f.color), a);
                                var d = Tu(c.formatTooltip(p, !0, null));
                                d.markupFragment && o.blocks.push(d.markupFragment), d.markupText && u.push(d.markupText), s.push(f)
                            })
                        }
                    })
                }), l.blocks.reverse(), u.reverse();
                var c = e.position, p = o.get("order"), f = Gu(l, h, a, p, n.get("useUTC"), o.get("textStyle"));
                f && u.unshift(f);
                var d = "richText" === a ? "\n\n" : "<br/>", g = u.join(d);
                this._showOrMove(o, function () {
                    this._updateContentNotChangedOnAxis(t) ? this._updatePosition(o, c, r[0], r[1], this._tooltipContent, s) : this._showTooltipContent(o, g, s, Math.random() + "", r[0], r[1], c, null, h)
                })
            }, n.prototype._showSeriesItemTooltip = function (t, e, n) {
                var i = nc(e, function (t) {
                        return null != cx(t).dataIndex
                    }, !0), r = this._ecModel, o = cx(i), a = o.seriesIndex, s = r.getSeriesByIndex(a), l = o.dataModel || s,
                    u = o.dataIndex, h = o.dataType, c = l.getData(h), p = this._renderMode,
                    f = cy([c.getItemModel(u), l, s && (s.coordinateSystem || {}).model, this._tooltipModel]),
                    d = f.get("trigger");
                if (null == d || "item" === d) {
                    var g = l.getDataParams(u, h), y = new RS;
                    g.marker = y.makeTooltipMarker("item", dl(g.color), p);
                    var v = Tu(l.formatTooltip(u, !1, h)), m = f.get("order"),
                        _ = v.markupFragment ? Gu(v.markupFragment, y, p, m, r.get("useUTC"), f.get("textStyle")) : v.markupText,
                        x = "item_" + l.name + "_" + u;
                    this._showOrMove(f, function () {
                        this._showTooltipContent(f, _, g, x, t.offsetX, t.offsetY, t.position, t.target, y)
                    }), n({
                        type: "showTip",
                        dataIndexInside: u,
                        dataIndex: c.getRawIndex(u),
                        seriesIndex: a,
                        from: this.uid
                    })
                }
            }, n.prototype._showComponentItemTooltip = function (t, e, n) {
                var i = e.tooltip;
                if (C(i)) {
                    var r = i;
                    i = {content: r, formatter: r}
                }
                var o = new $w(i, this._tooltipModel, this._ecModel), a = o.get("content"), s = Math.random() + "",
                    l = new RS;
                this._showOrMove(o, function () {
                    this._showTooltipContent(o, a, o.get("formatterParams") || {}, s, t.offsetX, t.offsetY, t.position, e, l)
                }), n({type: "showTip", from: this.uid})
            }, n.prototype._showTooltipContent = function (t, e, n, i, r, o, a, s, l) {
                if (this._ticket = "", t.get("showContent") && t.get("show")) {
                    var u = this._tooltipContent, h = t.get("formatter");
                    a = a || t.get("position");
                    var c = e, p = this._getNearestPoint([r, o], n, t.get("trigger"), t.get("borderColor"));
                    if (h && C(h)) {
                        var f = t.ecModel.get("useUTC"), d = T(n) ? n[0] : n,
                            g = d && d.axisType && d.axisType.indexOf("time") >= 0;
                        c = h, g && (c = Hs(d.axisValue, c, f)), c = hl(c, n, !0)
                    } else if (M(h)) {
                        var y = SA(function (e, i) {
                            e === this._ticket && (u.setContent(i, l, t, p.color, a), this._updatePosition(t, a, r, o, u, n, s))
                        }, this);
                        this._ticket = i, c = h(n, i, y)
                    }
                    u.setContent(c, l, t, p.color, a), u.show(t, p.color), this._updatePosition(t, a, r, o, u, n, s)
                }
            }, n.prototype._getNearestPoint = function (t, e, n, i) {
                return "axis" === n || T(e) ? {color: i || ("html" === this._renderMode ? "#fff" : "none")} : T(e) ? void 0 : {color: i || e.color || e.borderColor}
            }, n.prototype._updatePosition = function (t, e, n, i, r, o, a) {
                var s = this._api.getWidth(), l = this._api.getHeight();
                e = e || t.get("position");
                var u = r.getSize(), h = t.get("align"), c = t.get("verticalAlign"), p = a && a.getBoundingRect().clone();
                if (a && p.applyTransform(a.transform), M(e) && (e = e([n, i], o, r.el, p, {
                    viewSize: [s, l],
                    contentSize: u.slice()
                })), T(e)) n = MA(e[0], s), i = MA(e[1], l); else if (A(e)) {
                    var f = e;
                    f.width = u[0], f.height = u[1];
                    var d = vl(f, {width: s, height: l});
                    n = d.x, i = d.y, h = null, c = null
                } else if (C(e) && a) {
                    var g = gy(e, p, u);
                    n = g[0], i = g[1]
                } else {
                    var g = fy(n, i, r, s, l, h ? null : 20, c ? null : 20);
                    n = g[0], i = g[1]
                }
                if (h && (n -= yy(h) ? u[0] / 2 : "right" === h ? u[0] : 0), c && (i -= yy(c) ? u[1] / 2 : "bottom" === c ? u[1] : 0), ey(t)) {
                    var g = dy(n, i, r, s, l);
                    n = g[0], i = g[1]
                }
                r.moveTo(n, i)
            }, n.prototype._updateContentNotChangedOnAxis = function (t) {
                var e = this._lastDataByCoordSys, n = !!e && e.length === t.length;
                return n && TA(e, function (e, i) {
                    var r = e.dataByAxis || [], o = t[i] || {}, a = o.dataByAxis || [];
                    n = n && r.length === a.length, n && TA(r, function (t, e) {
                        var i = a[e] || {}, r = t.seriesDataIndices || [], o = i.seriesDataIndices || [];
                        n = n && t.value === i.value && t.axisType === i.axisType && t.axisId === i.axisId && r.length === o.length, n && TA(r, function (t, e) {
                            var i = o[e];
                            n = n && t.seriesIndex === i.seriesIndex && t.dataIndex === i.dataIndex
                        })
                    })
                }), this._lastDataByCoordSys = t, !!n
            }, n.prototype._hide = function (t) {
                this._lastDataByCoordSys = null, t({type: "hideTip", from: this.uid})
            }, n.prototype.dispose = function (t, e) {
                by.node || (this._tooltipContent.dispose(), Hg("itemTooltip", e))
            }, n.type = "tooltip", n
        }(zS);
    mf(vy), t.version = aM, t.dependencies = sM, t.PRIORITY = TM, t.init = Vc, t.connect = Hc, t.disConnect = Wc, t.disconnect = _C, t.dispose = Gc, t.getInstanceByDom = Uc, t.getInstanceById = Yc, t.registerTheme = Xc, t.registerPreprocessor = jc, t.registerProcessor = qc, t.registerPostInit = Zc, t.registerPostUpdate = Kc, t.registerAction = $c, t.registerCoordinateSystem = Qc, t.getCoordinateSystemDimensions = Jc, t.registerLayout = tp, t.registerVisual = ep, t.registerLoading = ip, t.setCanvasCreator = rp, t.registerMap = op, t.getMap = ap, t.registerTransform = wC, t.dataTool = EC, t.registerLocale = Os, t.zrender = Im, t.matrix = hv, t.vector = Uy, t.zrUtil = Fy, t.color = Dv, t.helper = DI, t.number = OI, t.time = RI, t.graphic = BI, t.format = EI, t.util = zI, t.ComponentModel = Ib, t.ComponentView = zS, t.SeriesModel = ES, t.ChartView = VS, t.extendComponentModel = Vf, t.extendComponentView = Hf, t.extendSeriesModel = Wf, t.extendChartView = Gf, t.throttle = dh, t.use = mf, t.parseGeoJSON = Sf, t.parseGeoJson = Sf, t.env = by, t.List = $C, t.Model = $w, t.Axis = VI, t.innerDrawElementOnCanvas = Ic
});