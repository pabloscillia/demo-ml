if (function(t, e) {
        function i(t) {
            var e = t.length,
                i = ct.type(t);
            return ct.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === i || "function" !== i && (0 === e || "number" == typeof e && e > 0 && e - 1 in t)
        }

        function n(t) {
            var e = $t[t] = {};
            return ct.each(t.match(pt) || [], function(t, i) {
                e[i] = !0
            }), e
        }

        function o(t, i, n, o) {
            if (ct.acceptData(t)) {
                var r, s, a = ct.expando,
                    l = t.nodeType,
                    h = l ? ct.cache : t,
                    c = l ? t[a] : t[a] && a;
                if (c && h[c] && (o || h[c].data) || n !== e || "string" != typeof i) return c || (c = l ? t[a] = et.pop() || ct.guid++ : a), h[c] || (h[c] = l ? {} : {
                    toJSON: ct.noop
                }), "object" != typeof i && "function" != typeof i || (o ? h[c] = ct.extend(h[c], i) : h[c].data = ct.extend(h[c].data, i)), s = h[c], o || (s.data || (s.data = {}), s = s.data), n !== e && (s[ct.camelCase(i)] = n), "string" == typeof i ? (r = s[i], null == r && (r = s[ct.camelCase(i)])) : r = s, r
            }
        }

        function r(t, e, i) {
            if (ct.acceptData(t)) {
                var n, o, r = t.nodeType,
                    s = r ? ct.cache : t,
                    l = r ? t[ct.expando] : ct.expando;
                if (s[l]) {
                    if (e && (n = i ? s[l] : s[l].data)) {
                        ct.isArray(e) ? e = e.concat(ct.map(e, ct.camelCase)) : e in n ? e = [e] : (e = ct.camelCase(e), e = e in n ? [e] : e.split(" ")), o = e.length;
                        for (; o--;) delete n[e[o]];
                        if (i ? !a(n) : !ct.isEmptyObject(n)) return
                    }(i || (delete s[l].data, a(s[l]))) && (r ? ct.cleanData([t], !0) : ct.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null)
                }
            }
        }

        function s(t, i, n) {
            if (n === e && 1 === t.nodeType) {
                var o = "data-" + i.replace(kt, "-$1").toLowerCase();
                if (n = t.getAttribute(o), "string" == typeof n) {
                    try {
                        n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Et.test(n) ? ct.parseJSON(n) : n
                    } catch (r) {}
                    ct.data(t, i, n)
                } else n = e
            }
            return n
        }

        function a(t) {
            var e;
            for (e in t)
                if (("data" !== e || !ct.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
            return !0
        }

        function l() {
            return !0
        }

        function h() {
            return !1
        }

        function c() {
            try {
                return J.activeElement
            } catch (t) {}
        }

        function u(t, e) {
            do t = t[e]; while (t && 1 !== t.nodeType);
            return t
        }

        function p(t, e, i) {
            if (ct.isFunction(e)) return ct.grep(t, function(t, n) {
                return !!e.call(t, n, t) !== i
            });
            if (e.nodeType) return ct.grep(t, function(t) {
                return t === e !== i
            });
            if ("string" == typeof e) {
                if (Ft.test(e)) return ct.filter(e, t, i);
                e = ct.filter(e, t)
            }
            return ct.grep(t, function(t) {
                return ct.inArray(t, e) >= 0 !== i
            })
        }

        function d(t) {
            var e = Xt.split("|"),
                i = t.createDocumentFragment();
            if (i.createElement)
                for (; e.length;) i.createElement(e.pop());
            return i
        }

        function f(t, e) {
            return ct.nodeName(t, "table") && ct.nodeName(1 === e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
        }

        function g(t) {
            return t.type = (null !== ct.find.attr(t, "type")) + "/" + t.type, t
        }

        function m(t) {
            var e = oe.exec(t.type);
            return e ? t.type = e[1] : t.removeAttribute("type"), t
        }

        function y(t, e) {
            for (var i, n = 0; null != (i = t[n]); n++) ct._data(i, "globalEval", !e || ct._data(e[n], "globalEval"))
        }

        function v(t, e) {
            if (1 === e.nodeType && ct.hasData(t)) {
                var i, n, o, r = ct._data(t),
                    s = ct._data(e, r),
                    a = r.events;
                if (a) {
                    delete s.handle, s.events = {};
                    for (i in a)
                        for (n = 0, o = a[i].length; o > n; n++) ct.event.add(e, i, a[i][n])
                }
                s.data && (s.data = ct.extend({}, s.data))
            }
        }

        function _(t, e) {
            var i, n, o;
            if (1 === e.nodeType) {
                if (i = e.nodeName.toLowerCase(), !ct.support.noCloneEvent && e[ct.expando]) {
                    o = ct._data(e);
                    for (n in o.events) ct.removeEvent(e, n, o.handle);
                    e.removeAttribute(ct.expando)
                }
                "script" === i && e.text !== t.text ? (g(e).text = t.text, m(e)) : "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), ct.support.html5Clone && t.innerHTML && !ct.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && ee.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== i && "textarea" !== i || (e.defaultValue = t.defaultValue)
            }
        }

        function b(t, i) {
            var n, o, r = 0,
                s = typeof t.getElementsByTagName !== V ? t.getElementsByTagName(i || "*") : typeof t.querySelectorAll !== V ? t.querySelectorAll(i || "*") : e;
            if (!s)
                for (s = [], n = t.childNodes || t; null != (o = n[r]); r++) !i || ct.nodeName(o, i) ? s.push(o) : ct.merge(s, b(o, i));
            return i === e || i && ct.nodeName(t, i) ? ct.merge([t], s) : s
        }

        function w(t) {
            ee.test(t.type) && (t.defaultChecked = t.checked)
        }

        function x(t, e) {
            if (e in t) return e;
            for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, o = Ce.length; o--;)
                if (e = Ce[o] + i, e in t) return e;
            return n
        }

        function T(t, e) {
            return t = e || t, "none" === ct.css(t, "display") || !ct.contains(t.ownerDocument, t)
        }

        function C(t, e) {
            for (var i, n, o, r = [], s = 0, a = t.length; a > s; s++) n = t[s], n.style && (r[s] = ct._data(n, "olddisplay"), i = n.style.display, e ? (r[s] || "none" !== i || (n.style.display = ""), "" === n.style.display && T(n) && (r[s] = ct._data(n, "olddisplay", N(n.nodeName)))) : r[s] || (o = T(n), (i && "none" !== i || !o) && ct._data(n, "olddisplay", o ? i : ct.css(n, "display"))));
            for (s = 0; a > s; s++) n = t[s], n.style && (e && "none" !== n.style.display && "" !== n.style.display || (n.style.display = e ? r[s] || "" : "none"));
            return t
        }

        function $(t, e, i) {
            var n = ye.exec(e);
            return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e
        }

        function E(t, e, i, n, o) {
            for (var r = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > r; r += 2) "margin" === i && (s += ct.css(t, i + Te[r], !0, o)), n ? ("content" === i && (s -= ct.css(t, "padding" + Te[r], !0, o)), "margin" !== i && (s -= ct.css(t, "border" + Te[r] + "Width", !0, o))) : (s += ct.css(t, "padding" + Te[r], !0, o), "padding" !== i && (s += ct.css(t, "border" + Te[r] + "Width", !0, o)));
            return s
        }

        function k(t, e, i) {
            var n = !0,
                o = "width" === e ? t.offsetWidth : t.offsetHeight,
                r = ce(t),
                s = ct.support.boxSizing && "border-box" === ct.css(t, "boxSizing", !1, r);
            if (0 >= o || null == o) {
                if (o = ue(t, e, r), (0 > o || null == o) && (o = t.style[e]), ve.test(o)) return o;
                n = s && (ct.support.boxSizingReliable || o === t.style[e]), o = parseFloat(o) || 0
            }
            return o + E(t, e, i || (s ? "border" : "content"), n, r) + "px"
        }

        function N(t) {
            var e = J,
                i = be[t];
            return i || (i = A(t, e), "none" !== i && i || (he = (he || ct("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(e.documentElement), e = (he[0].contentWindow || he[0].contentDocument).document, e.write("<!doctype html><html><body>"), e.close(), i = A(t, e), he.detach()), be[t] = i), i
        }

        function A(t, e) {
            var i = ct(e.createElement(t)).appendTo(e.body),
                n = ct.css(i[0], "display");
            return i.remove(), n
        }

        function S(t, e, i, n) {
            var o;
            if (ct.isArray(e)) ct.each(e, function(e, o) {
                i || Ee.test(t) ? n(t, o) : S(t + "[" + ("object" == typeof o ? e : "") + "]", o, i, n)
            });
            else if (i || "object" !== ct.type(e)) n(t, e);
            else
                for (o in e) S(t + "[" + o + "]", e[o], i, n)
        }

        function D(t) {
            return function(e, i) {
                "string" != typeof e && (i = e, e = "*");
                var n, o = 0,
                    r = e.toLowerCase().match(pt) || [];
                if (ct.isFunction(i))
                    for (; n = r[o++];) "+" === n[0] ? (n = n.slice(1) || "*", (t[n] = t[n] || []).unshift(i)) : (t[n] = t[n] || []).push(i)
            }
        }

        function j(t, e, i, n) {
            function o(a) {
                var l;
                return r[a] = !0, ct.each(t[a] || [], function(t, a) {
                    var h = a(e, i, n);
                    return "string" != typeof h || s || r[h] ? s ? !(l = h) : void 0 : (e.dataTypes.unshift(h), o(h), !1)
                }), l
            }
            var r = {},
                s = t === We;
            return o(e.dataTypes[0]) || !r["*"] && o("*")
        }

        function L(t, i) {
            var n, o, r = ct.ajaxSettings.flatOptions || {};
            for (o in i) i[o] !== e && ((r[o] ? t : n || (n = {}))[o] = i[o]);
            return n && ct.extend(!0, t, n), t
        }

        function O(t, i, n) {
            for (var o, r, s, a, l = t.contents, h = t.dataTypes;
                "*" === h[0];) h.shift(), r === e && (r = t.mimeType || i.getResponseHeader("Content-Type"));
            if (r)
                for (a in l)
                    if (l[a] && l[a].test(r)) {
                        h.unshift(a);
                        break
                    }
            if (h[0] in n) s = h[0];
            else {
                for (a in n) {
                    if (!h[0] || t.converters[a + " " + h[0]]) {
                        s = a;
                        break
                    }
                    o || (o = a)
                }
                s = s || o
            }
            return s ? (s !== h[0] && h.unshift(s), n[s]) : void 0
        }

        function P(t, e, i, n) {
            var o, r, s, a, l, h = {},
                c = t.dataTypes.slice();
            if (c[1])
                for (s in t.converters) h[s.toLowerCase()] = t.converters[s];
            for (r = c.shift(); r;)
                if (t.responseFields[r] && (i[t.responseFields[r]] = e), !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = r, r = c.shift())
                    if ("*" === r) r = l;
                    else if ("*" !== l && l !== r) {
                if (s = h[l + " " + r] || h["* " + r], !s)
                    for (o in h)
                        if (a = o.split(" "), a[1] === r && (s = h[l + " " + a[0]] || h["* " + a[0]])) {
                            s === !0 ? s = h[o] : h[o] !== !0 && (r = a[0], c.unshift(a[1]));
                            break
                        }
                if (s !== !0)
                    if (s && t["throws"]) e = s(e);
                    else try {
                        e = s(e)
                    } catch (u) {
                        return {
                            state: "parsererror",
                            error: s ? u : "No conversion from " + l + " to " + r
                        }
                    }
            }
            return {
                state: "success",
                data: e
            }
        }

        function I() {
            try {
                return new t.XMLHttpRequest
            } catch (e) {}
        }

        function H() {
            try {
                return new t.ActiveXObject("Microsoft.XMLHTTP")
            } catch (e) {}
        }

        function R() {
            return setTimeout(function() {
                Ge = e
            }), Ge = ct.now()
        }

        function M(t, e, i) {
            for (var n, o = (oi[e] || []).concat(oi["*"]), r = 0, s = o.length; s > r; r++)
                if (n = o[r].call(i, e, t)) return n
        }

        function z(t, e, i) {
            var n, o, r = 0,
                s = ni.length,
                a = ct.Deferred().always(function() {
                    delete l.elem
                }),
                l = function() {
                    if (o) return !1;
                    for (var e = Ge || R(), i = Math.max(0, h.startTime + h.duration - e), n = i / h.duration || 0, r = 1 - n, s = 0, l = h.tweens.length; l > s; s++) h.tweens[s].run(r);
                    return a.notifyWith(t, [h, r, i]), 1 > r && l ? i : (a.resolveWith(t, [h]), !1)
                },
                h = a.promise({
                    elem: t,
                    props: ct.extend({}, e),
                    opts: ct.extend(!0, {
                        specialEasing: {}
                    }, i),
                    originalProperties: e,
                    originalOptions: i,
                    startTime: Ge || R(),
                    duration: i.duration,
                    tweens: [],
                    createTween: function(e, i) {
                        var n = ct.Tween(t, h.opts, e, i, h.opts.specialEasing[e] || h.opts.easing);
                        return h.tweens.push(n), n
                    },
                    stop: function(e) {
                        var i = 0,
                            n = e ? h.tweens.length : 0;
                        if (o) return this;
                        for (o = !0; n > i; i++) h.tweens[i].run(1);
                        return e ? a.resolveWith(t, [h, e]) : a.rejectWith(t, [h, e]), this
                    }
                }),
                c = h.props;
            for (q(c, h.opts.specialEasing); s > r; r++)
                if (n = ni[r].call(h, t, c, h.opts)) return n;
            return ct.map(c, M, h), ct.isFunction(h.opts.start) && h.opts.start.call(t, h), ct.fx.timer(ct.extend(l, {
                elem: t,
                anim: h,
                queue: h.opts.queue
            })), h.progress(h.opts.progress).done(h.opts.done, h.opts.complete).fail(h.opts.fail).always(h.opts.always)
        }

        function q(t, e) {
            var i, n, o, r, s;
            for (i in t)
                if (n = ct.camelCase(i), o = e[n], r = t[i], ct.isArray(r) && (o = r[1], r = t[i] = r[0]), i !== n && (t[n] = r, delete t[i]), s = ct.cssHooks[n], s && "expand" in s) {
                    r = s.expand(r), delete t[n];
                    for (i in r) i in t || (t[i] = r[i], e[i] = o)
                } else e[n] = o
        }

        function F(t, e, i) {
            var n, o, r, s, a, l, h = this,
                c = {},
                u = t.style,
                p = t.nodeType && T(t),
                d = ct._data(t, "fxshow");
            i.queue || (a = ct._queueHooks(t, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
                a.unqueued || l()
            }), a.unqueued++, h.always(function() {
                h.always(function() {
                    a.unqueued--, ct.queue(t, "fx").length || a.empty.fire()
                })
            })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [u.overflow, u.overflowX, u.overflowY], "inline" === ct.css(t, "display") && "none" === ct.css(t, "float") && (ct.support.inlineBlockNeedsLayout && "inline" !== N(t.nodeName) ? u.zoom = 1 : u.display = "inline-block")), i.overflow && (u.overflow = "hidden", ct.support.shrinkWrapBlocks || h.always(function() {
                u.overflow = i.overflow[0], u.overflowX = i.overflow[1], u.overflowY = i.overflow[2]
            }));
            for (n in e)
                if (o = e[n], ti.exec(o)) {
                    if (delete e[n], r = r || "toggle" === o, o === (p ? "hide" : "show")) continue;
                    c[n] = d && d[n] || ct.style(t, n)
                }
            if (!ct.isEmptyObject(c)) {
                d ? "hidden" in d && (p = d.hidden) : d = ct._data(t, "fxshow", {}), r && (d.hidden = !p), p ? ct(t).show() : h.done(function() {
                    ct(t).hide()
                }), h.done(function() {
                    var e;
                    ct._removeData(t, "fxshow");
                    for (e in c) ct.style(t, e, c[e])
                });
                for (n in c) s = M(p ? d[n] : 0, n, h), n in d || (d[n] = s.start, p && (s.end = s.start, s.start = "width" === n || "height" === n ? 1 : 0))
            }
        }

        function W(t, e, i, n, o) {
            return new W.prototype.init(t, e, i, n, o)
        }

        function B(t, e) {
            var i, n = {
                    height: t
                },
                o = 0;
            for (e = e ? 1 : 0; 4 > o; o += 2 - e) i = Te[o], n["margin" + i] = n["padding" + i] = t;
            return e && (n.opacity = n.width = t), n
        }

        function U(t) {
            return ct.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
        }
        var X, Y, V = typeof e,
            Q = t.location,
            J = t.document,
            K = J.documentElement,
            G = t.jQuery,
            Z = t.$,
            tt = {},
            et = [],
            it = "1.10.2",
            nt = et.concat,
            ot = et.push,
            rt = et.slice,
            st = et.indexOf,
            at = tt.toString,
            lt = tt.hasOwnProperty,
            ht = it.trim,
            ct = function(t, e) {
                return new ct.fn.init(t, e, Y)
            },
            ut = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
            pt = /\S+/g,
            dt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
            ft = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
            gt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
            mt = /^[\],:{}\s]*$/,
            yt = /(?:^|:|,)(?:\s*\[)+/g,
            vt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
            _t = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
            bt = /^-ms-/,
            wt = /-([\da-z])/gi,
            xt = function(t, e) {
                return e.toUpperCase()
            },
            Tt = function(t) {
                (J.addEventListener || "load" === t.type || "complete" === J.readyState) && (Ct(), ct.ready())
            },
            Ct = function() {
                J.addEventListener ? (J.removeEventListener("DOMContentLoaded", Tt, !1), t.removeEventListener("load", Tt, !1)) : (J.detachEvent("onreadystatechange", Tt), t.detachEvent("onload", Tt))
            };
        ct.fn = ct.prototype = {
                jquery: it,
                constructor: ct,
                init: function(t, i, n) {
                    var o, r;
                    if (!t) return this;
                    if ("string" == typeof t) {
                        if (o = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : ft.exec(t), !o || !o[1] && i) return !i || i.jquery ? (i || n).find(t) : this.constructor(i).find(t);
                        if (o[1]) {
                            if (i = i instanceof ct ? i[0] : i, ct.merge(this, ct.parseHTML(o[1], i && i.nodeType ? i.ownerDocument || i : J, !0)), gt.test(o[1]) && ct.isPlainObject(i))
                                for (o in i) ct.isFunction(this[o]) ? this[o](i[o]) : this.attr(o, i[o]);
                            return this
                        }
                        if (r = J.getElementById(o[2]), r && r.parentNode) {
                            if (r.id !== o[2]) return n.find(t);
                            this.length = 1, this[0] = r
                        }
                        return this.context = J, this.selector = t, this
                    }
                    return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ct.isFunction(t) ? n.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), ct.makeArray(t, this))
                },
                selector: "",
                length: 0,
                toArray: function() {
                    return rt.call(this)
                },
                get: function(t) {
                    return null == t ? this.toArray() : 0 > t ? this[this.length + t] : this[t]
                },
                pushStack: function(t) {
                    var e = ct.merge(this.constructor(), t);
                    return e.prevObject = this, e.context = this.context, e
                },
                each: function(t, e) {
                    return ct.each(this, t, e)
                },
                ready: function(t) {
                    return ct.ready.promise().done(t), this
                },
                slice: function() {
                    return this.pushStack(rt.apply(this, arguments))
                },
                first: function() {
                    return this.eq(0)
                },
                last: function() {
                    return this.eq(-1)
                },
                eq: function(t) {
                    var e = this.length,
                        i = +t + (0 > t ? e : 0);
                    return this.pushStack(i >= 0 && e > i ? [this[i]] : [])
                },
                map: function(t) {
                    return this.pushStack(ct.map(this, function(e, i) {
                        return t.call(e, i, e)
                    }))
                },
                end: function() {
                    return this.prevObject || this.constructor(null)
                },
                push: ot,
                sort: [].sort,
                splice: [].splice
            }, ct.fn.init.prototype = ct.fn, ct.extend = ct.fn.extend = function() {
                var t, i, n, o, r, s, a = arguments[0] || {},
                    l = 1,
                    h = arguments.length,
                    c = !1;
                for ("boolean" == typeof a && (c = a, a = arguments[1] || {}, l = 2), "object" == typeof a || ct.isFunction(a) || (a = {}), h === l && (a = this, --l); h > l; l++)
                    if (null != (r = arguments[l]))
                        for (o in r) t = a[o], n = r[o], a !== n && (c && n && (ct.isPlainObject(n) || (i = ct.isArray(n))) ? (i ? (i = !1, s = t && ct.isArray(t) ? t : []) : s = t && ct.isPlainObject(t) ? t : {}, a[o] = ct.extend(c, s, n)) : n !== e && (a[o] = n));
                return a
            }, ct.extend({
                expando: "jQuery" + (it + Math.random()).replace(/\D/g, ""),
                noConflict: function(e) {
                    return t.$ === ct && (t.$ = Z), e && t.jQuery === ct && (t.jQuery = G), ct
                },
                isReady: !1,
                readyWait: 1,
                holdReady: function(t) {
                    t ? ct.readyWait++ : ct.ready(!0)
                },
                ready: function(t) {
                    if (t === !0 ? !--ct.readyWait : !ct.isReady) {
                        if (!J.body) return setTimeout(ct.ready);
                        ct.isReady = !0, t !== !0 && --ct.readyWait > 0 || (X.resolveWith(J, [ct]), ct.fn.trigger && ct(J).trigger("ready").off("ready"))
                    }
                },
                isFunction: function(t) {
                    return "function" === ct.type(t)
                },
                isArray: Array.isArray || function(t) {
                    return "array" === ct.type(t)
                },
                isWindow: function(t) {
                    return null != t && t == t.window
                },
                isNumeric: function(t) {
                    return !isNaN(parseFloat(t)) && isFinite(t)
                },
                type: function(t) {
                    return null == t ? String(t) : "object" == typeof t || "function" == typeof t ? tt[at.call(t)] || "object" : typeof t
                },
                isPlainObject: function(t) {
                    var i;
                    if (!t || "object" !== ct.type(t) || t.nodeType || ct.isWindow(t)) return !1;
                    try {
                        if (t.constructor && !lt.call(t, "constructor") && !lt.call(t.constructor.prototype, "isPrototypeOf")) return !1
                    } catch (n) {
                        return !1
                    }
                    if (ct.support.ownLast)
                        for (i in t) return lt.call(t, i);
                    for (i in t);
                    return i === e || lt.call(t, i)
                },
                isEmptyObject: function(t) {
                    var e;
                    for (e in t) return !1;
                    return !0
                },
                error: function(t) {
                    throw new Error(t)
                },
                parseHTML: function(t, e, i) {
                    if (!t || "string" != typeof t) return null;
                    "boolean" == typeof e && (i = e, e = !1), e = e || J;
                    var n = gt.exec(t),
                        o = !i && [];
                    return n ? [e.createElement(n[1])] : (n = ct.buildFragment([t], e, o), o && ct(o).remove(), ct.merge([], n.childNodes))
                },
                parseJSON: function(e) {
                    return t.JSON && t.JSON.parse ? t.JSON.parse(e) : null === e ? e : "string" == typeof e && (e = ct.trim(e), e && mt.test(e.replace(vt, "@").replace(_t, "]").replace(yt, ""))) ? new Function("return " + e)() : void ct.error("Invalid JSON: " + e)
                },
                parseXML: function(i) {
                    var n, o;
                    if (!i || "string" != typeof i) return null;
                    try {
                        t.DOMParser ? (o = new DOMParser, n = o.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i))
                    } catch (r) {
                        n = e
                    }
                    return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ct.error("Invalid XML: " + i), n
                },
                noop: function() {},
                globalEval: function(e) {
                    e && ct.trim(e) && (t.execScript || function(e) {
                        t.eval.call(t, e)
                    })(e)
                },
                camelCase: function(t) {
                    return t.replace(bt, "ms-").replace(wt, xt)
                },
                nodeName: function(t, e) {
                    return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
                },
                each: function(t, e, n) {
                    var o, r = 0,
                        s = t.length,
                        a = i(t);
                    if (n) {
                        if (a)
                            for (; s > r && (o = e.apply(t[r], n), o !== !1); r++);
                        else
                            for (r in t)
                                if (o = e.apply(t[r], n), o === !1) break
                    } else if (a)
                        for (; s > r && (o = e.call(t[r], r, t[r]), o !== !1); r++);
                    else
                        for (r in t)
                            if (o = e.call(t[r], r, t[r]), o === !1) break; return t
                },
                trim: ht && !ht.call("\ufeff ") ? function(t) {
                    return null == t ? "" : ht.call(t)
                } : function(t) {
                    return null == t ? "" : (t + "").replace(dt, "")
                },
                makeArray: function(t, e) {
                    var n = e || [];
                    return null != t && (i(Object(t)) ? ct.merge(n, "string" == typeof t ? [t] : t) : ot.call(n, t)), n
                },
                inArray: function(t, e, i) {
                    var n;
                    if (e) {
                        if (st) return st.call(e, t, i);
                        for (n = e.length, i = i ? 0 > i ? Math.max(0, n + i) : i : 0; n > i; i++)
                            if (i in e && e[i] === t) return i
                    }
                    return -1
                },
                merge: function(t, i) {
                    var n = i.length,
                        o = t.length,
                        r = 0;
                    if ("number" == typeof n)
                        for (; n > r; r++) t[o++] = i[r];
                    else
                        for (; i[r] !== e;) t[o++] = i[r++];
                    return t.length = o, t
                },
                grep: function(t, e, i) {
                    var n, o = [],
                        r = 0,
                        s = t.length;
                    for (i = !!i; s > r; r++) n = !!e(t[r], r), i !== n && o.push(t[r]);
                    return o
                },
                map: function(t, e, n) {
                    var o, r = 0,
                        s = t.length,
                        a = i(t),
                        l = [];
                    if (a)
                        for (; s > r; r++) o = e(t[r], r, n), null != o && (l[l.length] = o);
                    else
                        for (r in t) o = e(t[r], r, n), null != o && (l[l.length] = o);
                    return nt.apply([], l)
                },
                guid: 1,
                proxy: function(t, i) {
                    var n, o, r;
                    return "string" == typeof i && (r = t[i], i = t, t = r), ct.isFunction(t) ? (n = rt.call(arguments, 2), o = function() {
                        return t.apply(i || this, n.concat(rt.call(arguments)))
                    }, o.guid = t.guid = t.guid || ct.guid++, o) : e
                },
                access: function(t, i, n, o, r, s, a) {
                    var l = 0,
                        h = t.length,
                        c = null == n;
                    if ("object" === ct.type(n)) {
                        r = !0;
                        for (l in n) ct.access(t, i, l, n[l], !0, s, a)
                    } else if (o !== e && (r = !0, ct.isFunction(o) || (a = !0), c && (a ? (i.call(t, o), i = null) : (c = i, i = function(t, e, i) {
                            return c.call(ct(t), i)
                        })), i))
                        for (; h > l; l++) i(t[l], n, a ? o : o.call(t[l], l, i(t[l], n)));
                    return r ? t : c ? i.call(t) : h ? i(t[0], n) : s
                },
                now: function() {
                    return (new Date).getTime()
                },
                swap: function(t, e, i, n) {
                    var o, r, s = {};
                    for (r in e) s[r] = t.style[r], t.style[r] = e[r];
                    o = i.apply(t, n || []);
                    for (r in e) t.style[r] = s[r];
                    return o
                }
            }), ct.ready.promise = function(e) {
                if (!X)
                    if (X = ct.Deferred(), "complete" === J.readyState) setTimeout(ct.ready);
                    else if (J.addEventListener) J.addEventListener("DOMContentLoaded", Tt, !1), t.addEventListener("load", Tt, !1);
                else {
                    J.attachEvent("onreadystatechange", Tt), t.attachEvent("onload", Tt);
                    var i = !1;
                    try {
                        i = null == t.frameElement && J.documentElement
                    } catch (n) {}
                    i && i.doScroll && ! function o() {
                        if (!ct.isReady) {
                            try {
                                i.doScroll("left")
                            } catch (t) {
                                return setTimeout(o, 50)
                            }
                            Ct(), ct.ready()
                        }
                    }()
                }
                return X.promise(e)
            }, ct.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
                tt["[object " + e + "]"] = e.toLowerCase()
            }), Y = ct(J),
            function(t, e) {
                function i(t, e, i, n) {
                    var o, r, s, a, l, h, c, u, f, g;
                    if ((e ? e.ownerDocument || e : z) !== j && D(e), e = e || j, i = i || [], !t || "string" != typeof t) return i;
                    if (1 !== (a = e.nodeType) && 9 !== a) return [];
                    if (O && !n) {
                        if (o = _t.exec(t))
                            if (s = o[1]) {
                                if (9 === a) {
                                    if (r = e.getElementById(s), !r || !r.parentNode) return i;
                                    if (r.id === s) return i.push(r), i
                                } else if (e.ownerDocument && (r = e.ownerDocument.getElementById(s)) && R(e, r) && r.id === s) return i.push(r), i
                            } else {
                                if (o[2]) return tt.apply(i, e.getElementsByTagName(t)), i;
                                if ((s = o[3]) && T.getElementsByClassName && e.getElementsByClassName) return tt.apply(i, e.getElementsByClassName(s)), i
                            }
                        if (T.qsa && (!P || !P.test(t))) {
                            if (u = c = M, f = e, g = 9 === a && t, 1 === a && "object" !== e.nodeName.toLowerCase()) {
                                for (h = p(t), (c = e.getAttribute("id")) ? u = c.replace(xt, "\\$&") : e.setAttribute("id", u), u = "[id='" + u + "'] ", l = h.length; l--;) h[l] = u + d(h[l]);
                                f = dt.test(t) && e.parentNode || e, g = h.join(",")
                            }
                            if (g) try {
                                return tt.apply(i, f.querySelectorAll(g)), i
                            } catch (m) {} finally {
                                c || e.removeAttribute("id")
                            }
                        }
                    }
                    return w(t.replace(ht, "$1"), e, i, n)
                }

                function n() {
                    function t(i, n) {
                        return e.push(i += " ") > $.cacheLength && delete t[e.shift()], t[i] = n
                    }
                    var e = [];
                    return t
                }

                function o(t) {
                    return t[M] = !0, t
                }

                function r(t) {
                    var e = j.createElement("div");
                    try {
                        return !!t(e)
                    } catch (i) {
                        return !1
                    } finally {
                        e.parentNode && e.parentNode.removeChild(e), e = null
                    }
                }

                function s(t, e) {
                    for (var i = t.split("|"), n = t.length; n--;) $.attrHandle[i[n]] = e
                }

                function a(t, e) {
                    var i = e && t,
                        n = i && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || Q) - (~t.sourceIndex || Q);
                    if (n) return n;
                    if (i)
                        for (; i = i.nextSibling;)
                            if (i === e) return -1;
                    return t ? 1 : -1
                }

                function l(t) {
                    return function(e) {
                        var i = e.nodeName.toLowerCase();
                        return "input" === i && e.type === t
                    }
                }

                function h(t) {
                    return function(e) {
                        var i = e.nodeName.toLowerCase();
                        return ("input" === i || "button" === i) && e.type === t
                    }
                }

                function c(t) {
                    return o(function(e) {
                        return e = +e, o(function(i, n) {
                            for (var o, r = t([], i.length, e), s = r.length; s--;) i[o = r[s]] && (i[o] = !(n[o] = i[o]))
                        })
                    })
                }

                function u() {}

                function p(t, e) {
                    var n, o, r, s, a, l, h, c = B[t + " "];
                    if (c) return e ? 0 : c.slice(0);
                    for (a = t, l = [], h = $.preFilter; a;) {
                        n && !(o = ut.exec(a)) || (o && (a = a.slice(o[0].length) || a), l.push(r = [])), n = !1, (o = pt.exec(a)) && (n = o.shift(), r.push({
                            value: n,
                            type: o[0].replace(ht, " ")
                        }), a = a.slice(n.length));
                        for (s in $.filter) !(o = yt[s].exec(a)) || h[s] && !(o = h[s](o)) || (n = o.shift(), r.push({
                            value: n,
                            type: s,
                            matches: o
                        }), a = a.slice(n.length));
                        if (!n) break
                    }
                    return e ? a.length : a ? i.error(t) : B(t, l).slice(0)
                }

                function d(t) {
                    for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
                    return n
                }

                function f(t, e, i) {
                    var n = e.dir,
                        o = i && "parentNode" === n,
                        r = F++;
                    return e.first ? function(e, i, r) {
                        for (; e = e[n];)
                            if (1 === e.nodeType || o) return t(e, i, r)
                    } : function(e, i, s) {
                        var a, l, h, c = q + " " + r;
                        if (s) {
                            for (; e = e[n];)
                                if ((1 === e.nodeType || o) && t(e, i, s)) return !0
                        } else
                            for (; e = e[n];)
                                if (1 === e.nodeType || o)
                                    if (h = e[M] || (e[M] = {}), (l = h[n]) && l[0] === c) {
                                        if ((a = l[1]) === !0 || a === C) return a === !0
                                    } else if (l = h[n] = [c], l[1] = t(e, i, s) || C, l[1] === !0) return !0
                    }
                }

                function g(t) {
                    return t.length > 1 ? function(e, i, n) {
                        for (var o = t.length; o--;)
                            if (!t[o](e, i, n)) return !1;
                        return !0
                    } : t[0]
                }

                function m(t, e, i, n, o) {
                    for (var r, s = [], a = 0, l = t.length, h = null != e; l > a; a++)(r = t[a]) && (i && !i(r, n, o) || (s.push(r), h && e.push(a)));
                    return s
                }

                function y(t, e, i, n, r, s) {
                    return n && !n[M] && (n = y(n)), r && !r[M] && (r = y(r, s)), o(function(o, s, a, l) {
                        var h, c, u, p = [],
                            d = [],
                            f = s.length,
                            g = o || b(e || "*", a.nodeType ? [a] : a, []),
                            y = !t || !o && e ? g : m(g, p, t, a, l),
                            v = i ? r || (o ? t : f || n) ? [] : s : y;
                        if (i && i(y, v, a, l), n)
                            for (h = m(v, d), n(h, [], a, l), c = h.length; c--;)(u = h[c]) && (v[d[c]] = !(y[d[c]] = u));
                        if (o) {
                            if (r || t) {
                                if (r) {
                                    for (h = [], c = v.length; c--;)(u = v[c]) && h.push(y[c] = u);
                                    r(null, v = [], h, l)
                                }
                                for (c = v.length; c--;)(u = v[c]) && (h = r ? it.call(o, u) : p[c]) > -1 && (o[h] = !(s[h] = u))
                            }
                        } else v = m(v === s ? v.splice(f, v.length) : v), r ? r(null, s, v, l) : tt.apply(s, v)
                    })
                }

                function v(t) {
                    for (var e, i, n, o = t.length, r = $.relative[t[0].type], s = r || $.relative[" "], a = r ? 1 : 0, l = f(function(t) {
                            return t === e
                        }, s, !0), h = f(function(t) {
                            return it.call(e, t) > -1
                        }, s, !0), c = [function(t, i, n) {
                            return !r && (n || i !== A) || ((e = i).nodeType ? l(t, i, n) : h(t, i, n))
                        }]; o > a; a++)
                        if (i = $.relative[t[a].type]) c = [f(g(c), i)];
                        else {
                            if (i = $.filter[t[a].type].apply(null, t[a].matches), i[M]) {
                                for (n = ++a; o > n && !$.relative[t[n].type]; n++);
                                return y(a > 1 && g(c), a > 1 && d(t.slice(0, a - 1).concat({
                                    value: " " === t[a - 2].type ? "*" : ""
                                })).replace(ht, "$1"), i, n > a && v(t.slice(a, n)), o > n && v(t = t.slice(n)), o > n && d(t))
                            }
                            c.push(i)
                        }
                    return g(c)
                }

                function _(t, e) {
                    var n = 0,
                        r = e.length > 0,
                        s = t.length > 0,
                        a = function(o, a, l, h, c) {
                            var u, p, d, f = [],
                                g = 0,
                                y = "0",
                                v = o && [],
                                _ = null != c,
                                b = A,
                                w = o || s && $.find.TAG("*", c && a.parentNode || a),
                                x = q += null == b ? 1 : Math.random() || .1;
                            for (_ && (A = a !== j && a, C = n); null != (u = w[y]); y++) {
                                if (s && u) {
                                    for (p = 0; d = t[p++];)
                                        if (d(u, a, l)) {
                                            h.push(u);
                                            break
                                        }
                                    _ && (q = x, C = ++n)
                                }
                                r && ((u = !d && u) && g--, o && v.push(u))
                            }
                            if (g += y, r && y !== g) {
                                for (p = 0; d = e[p++];) d(v, f, a, l);
                                if (o) {
                                    if (g > 0)
                                        for (; y--;) v[y] || f[y] || (f[y] = G.call(h));
                                    f = m(f)
                                }
                                tt.apply(h, f), _ && !o && f.length > 0 && g + e.length > 1 && i.uniqueSort(h)
                            }
                            return _ && (q = x, A = b), v
                        };
                    return r ? o(a) : a
                }

                function b(t, e, n) {
                    for (var o = 0, r = e.length; r > o; o++) i(t, e[o], n);
                    return n
                }

                function w(t, e, i, n) {
                    var o, r, s, a, l, h = p(t);
                    if (!n && 1 === h.length) {
                        if (r = h[0] = h[0].slice(0), r.length > 2 && "ID" === (s = r[0]).type && T.getById && 9 === e.nodeType && O && $.relative[r[1].type]) {
                            if (e = ($.find.ID(s.matches[0].replace(Tt, Ct), e) || [])[0], !e) return i;
                            t = t.slice(r.shift().value.length)
                        }
                        for (o = yt.needsContext.test(t) ? 0 : r.length; o-- && (s = r[o], !$.relative[a = s.type]);)
                            if ((l = $.find[a]) && (n = l(s.matches[0].replace(Tt, Ct), dt.test(r[0].type) && e.parentNode || e))) {
                                if (r.splice(o, 1), t = n.length && d(r), !t) return tt.apply(i, n), i;
                                break
                            }
                    }
                    return N(t, h)(n, e, !O, i, dt.test(t)), i
                }
                var x, T, C, $, E, k, N, A, S, D, j, L, O, P, I, H, R, M = "sizzle" + -new Date,
                    z = t.document,
                    q = 0,
                    F = 0,
                    W = n(),
                    B = n(),
                    U = n(),
                    X = !1,
                    Y = function(t, e) {
                        return t === e ? (X = !0, 0) : 0
                    },
                    V = typeof e,
                    Q = 1 << 31,
                    J = {}.hasOwnProperty,
                    K = [],
                    G = K.pop,
                    Z = K.push,
                    tt = K.push,
                    et = K.slice,
                    it = K.indexOf || function(t) {
                        for (var e = 0, i = this.length; i > e; e++)
                            if (this[e] === t) return e;
                        return -1
                    },
                    nt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    ot = "[\\x20\\t\\r\\n\\f]",
                    rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
                    st = rt.replace("w", "w#"),
                    at = "\\[" + ot + "*(" + rt + ")" + ot + "*(?:([*^$|!~]?=)" + ot + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + st + ")|)|)" + ot + "*\\]",
                    lt = ":(" + rt + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + at.replace(3, 8) + ")*)|.*)\\)|)",
                    ht = new RegExp("^" + ot + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ot + "+$", "g"),
                    ut = new RegExp("^" + ot + "*," + ot + "*"),
                    pt = new RegExp("^" + ot + "*([>+~]|" + ot + ")" + ot + "*"),
                    dt = new RegExp(ot + "*[+~]"),
                    ft = new RegExp("=" + ot + "*([^\\]'\"]*)" + ot + "*\\]", "g"),
                    gt = new RegExp(lt),
                    mt = new RegExp("^" + st + "$"),
                    yt = {
                        ID: new RegExp("^#(" + rt + ")"),
                        CLASS: new RegExp("^\\.(" + rt + ")"),
                        TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
                        ATTR: new RegExp("^" + at),
                        PSEUDO: new RegExp("^" + lt),
                        CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ot + "*(even|odd|(([+-]|)(\\d*)n|)" + ot + "*(?:([+-]|)" + ot + "*(\\d+)|))" + ot + "*\\)|)", "i"),
                        bool: new RegExp("^(?:" + nt + ")$", "i"),
                        needsContext: new RegExp("^" + ot + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ot + "*((?:-\\d)?\\d*)" + ot + "*\\)|)(?=[^-]|$)", "i")
                    },
                    vt = /^[^{]+\{\s*\[native \w/,
                    _t = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    bt = /^(?:input|select|textarea|button)$/i,
                    wt = /^h\d$/i,
                    xt = /'|\\/g,
                    Tt = new RegExp("\\\\([\\da-f]{1,6}" + ot + "?|(" + ot + ")|.)", "ig"),
                    Ct = function(t, e, i) {
                        var n = "0x" + e - 65536;
                        return n !== n || i ? e : 0 > n ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320)
                    };
                try {
                    tt.apply(K = et.call(z.childNodes), z.childNodes), K[z.childNodes.length].nodeType
                } catch ($t) {
                    tt = {
                        apply: K.length ? function(t, e) {
                            Z.apply(t, et.call(e))
                        } : function(t, e) {
                            for (var i = t.length, n = 0; t[i++] = e[n++];);
                            t.length = i - 1
                        }
                    }
                }
                k = i.isXML = function(t) {
                    var e = t && (t.ownerDocument || t).documentElement;
                    return e ? "HTML" !== e.nodeName : !1
                }, T = i.support = {}, D = i.setDocument = function(t) {
                    var e = t ? t.ownerDocument || t : z,
                        i = e.defaultView;
                    return e !== j && 9 === e.nodeType && e.documentElement ? (j = e, L = e.documentElement, O = !k(e), i && i.attachEvent && i !== i.top && i.attachEvent("onbeforeunload", function() {
                        D()
                    }), T.attributes = r(function(t) {
                        return t.className = "i", !t.getAttribute("className")
                    }), T.getElementsByTagName = r(function(t) {
                        return t.appendChild(e.createComment("")), !t.getElementsByTagName("*").length
                    }), T.getElementsByClassName = r(function(t) {
                        return t.innerHTML = "<div class='a'></div><div class='a i'></div>", t.firstChild.className = "i", 2 === t.getElementsByClassName("i").length
                    }), T.getById = r(function(t) {
                        return L.appendChild(t).id = M, !e.getElementsByName || !e.getElementsByName(M).length
                    }), T.getById ? ($.find.ID = function(t, e) {
                        if (typeof e.getElementById !== V && O) {
                            var i = e.getElementById(t);
                            return i && i.parentNode ? [i] : []
                        }
                    }, $.filter.ID = function(t) {
                        var e = t.replace(Tt, Ct);
                        return function(t) {
                            return t.getAttribute("id") === e
                        }
                    }) : (delete $.find.ID, $.filter.ID = function(t) {
                        var e = t.replace(Tt, Ct);
                        return function(t) {
                            var i = typeof t.getAttributeNode !== V && t.getAttributeNode("id");
                            return i && i.value === e
                        }
                    }), $.find.TAG = T.getElementsByTagName ? function(t, e) {
                        return typeof e.getElementsByTagName !== V ? e.getElementsByTagName(t) : void 0
                    } : function(t, e) {
                        var i, n = [],
                            o = 0,
                            r = e.getElementsByTagName(t);
                        if ("*" === t) {
                            for (; i = r[o++];) 1 === i.nodeType && n.push(i);
                            return n
                        }
                        return r
                    }, $.find.CLASS = T.getElementsByClassName && function(t, e) {
                        return typeof e.getElementsByClassName !== V && O ? e.getElementsByClassName(t) : void 0
                    }, I = [], P = [], (T.qsa = vt.test(e.querySelectorAll)) && (r(function(t) {
                        t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || P.push("\\[" + ot + "*(?:value|" + nt + ")"), t.querySelectorAll(":checked").length || P.push(":checked")
                    }), r(function(t) {
                        var i = e.createElement("input");
                        i.setAttribute("type", "hidden"), t.appendChild(i).setAttribute("t", ""), t.querySelectorAll("[t^='']").length && P.push("[*^$]=" + ot + "*(?:''|\"\")"), t.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), P.push(",.*:")
                    })), (T.matchesSelector = vt.test(H = L.webkitMatchesSelector || L.mozMatchesSelector || L.oMatchesSelector || L.msMatchesSelector)) && r(function(t) {
                        T.disconnectedMatch = H.call(t, "div"), H.call(t, "[s!='']:x"), I.push("!=", lt)
                    }), P = P.length && new RegExp(P.join("|")), I = I.length && new RegExp(I.join("|")), R = vt.test(L.contains) || L.compareDocumentPosition ? function(t, e) {
                        var i = 9 === t.nodeType ? t.documentElement : t,
                            n = e && e.parentNode;
                        return t === n || !(!n || 1 !== n.nodeType || !(i.contains ? i.contains(n) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(n)))
                    } : function(t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, Y = L.compareDocumentPosition ? function(t, i) {
                        if (t === i) return X = !0, 0;
                        var n = i.compareDocumentPosition && t.compareDocumentPosition && t.compareDocumentPosition(i);
                        return n ? 1 & n || !T.sortDetached && i.compareDocumentPosition(t) === n ? t === e || R(z, t) ? -1 : i === e || R(z, i) ? 1 : S ? it.call(S, t) - it.call(S, i) : 0 : 4 & n ? -1 : 1 : t.compareDocumentPosition ? -1 : 1
                    } : function(t, i) {
                        var n, o = 0,
                            r = t.parentNode,
                            s = i.parentNode,
                            l = [t],
                            h = [i];
                        if (t === i) return X = !0, 0;
                        if (!r || !s) return t === e ? -1 : i === e ? 1 : r ? -1 : s ? 1 : S ? it.call(S, t) - it.call(S, i) : 0;
                        if (r === s) return a(t, i);
                        for (n = t; n = n.parentNode;) l.unshift(n);
                        for (n = i; n = n.parentNode;) h.unshift(n);
                        for (; l[o] === h[o];) o++;
                        return o ? a(l[o], h[o]) : l[o] === z ? -1 : h[o] === z ? 1 : 0
                    }, e) : j
                }, i.matches = function(t, e) {
                    return i(t, null, null, e)
                }, i.matchesSelector = function(t, e) {
                    if ((t.ownerDocument || t) !== j && D(t), e = e.replace(ft, "='$1']"), T.matchesSelector && O && (!I || !I.test(e)) && (!P || !P.test(e))) try {
                        var n = H.call(t, e);
                        if (n || T.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n
                    } catch (o) {}
                    return i(e, j, null, [t]).length > 0
                }, i.contains = function(t, e) {
                    return (t.ownerDocument || t) !== j && D(t), R(t, e)
                }, i.attr = function(t, i) {
                    (t.ownerDocument || t) !== j && D(t);
                    var n = $.attrHandle[i.toLowerCase()],
                        o = n && J.call($.attrHandle, i.toLowerCase()) ? n(t, i, !O) : e;
                    return o === e ? T.attributes || !O ? t.getAttribute(i) : (o = t.getAttributeNode(i)) && o.specified ? o.value : null : o
                }, i.error = function(t) {
                    throw new Error("Syntax error, unrecognized expression: " + t)
                }, i.uniqueSort = function(t) {
                    var e, i = [],
                        n = 0,
                        o = 0;
                    if (X = !T.detectDuplicates, S = !T.sortStable && t.slice(0), t.sort(Y), X) {
                        for (; e = t[o++];) e === t[o] && (n = i.push(o));
                        for (; n--;) t.splice(i[n], 1)
                    }
                    return t
                }, E = i.getText = function(t) {
                    var e, i = "",
                        n = 0,
                        o = t.nodeType;
                    if (o) {
                        if (1 === o || 9 === o || 11 === o) {
                            if ("string" == typeof t.textContent) return t.textContent;
                            for (t = t.firstChild; t; t = t.nextSibling) i += E(t)
                        } else if (3 === o || 4 === o) return t.nodeValue
                    } else
                        for (; e = t[n]; n++) i += E(e);
                    return i
                }, $ = i.selectors = {
                    cacheLength: 50,
                    createPseudo: o,
                    match: yt,
                    attrHandle: {},
                    find: {},
                    relative: {
                        ">": {
                            dir: "parentNode",
                            first: !0
                        },
                        " ": {
                            dir: "parentNode"
                        },
                        "+": {
                            dir: "previousSibling",
                            first: !0
                        },
                        "~": {
                            dir: "previousSibling"
                        }
                    },
                    preFilter: {
                        ATTR: function(t) {
                            return t[1] = t[1].replace(Tt, Ct), t[3] = (t[4] || t[5] || "").replace(Tt, Ct), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                        },
                        CHILD: function(t) {
                            return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || i.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && i.error(t[0]), t
                        },
                        PSEUDO: function(t) {
                            var i, n = !t[5] && t[2];
                            return yt.CHILD.test(t[0]) ? null : (t[3] && t[4] !== e ? t[2] = t[4] : n && gt.test(n) && (i = p(n, !0)) && (i = n.indexOf(")", n.length - i) - n.length) && (t[0] = t[0].slice(0, i), t[2] = n.slice(0, i)), t.slice(0, 3))
                        }
                    },
                    filter: {
                        TAG: function(t) {
                            var e = t.replace(Tt, Ct).toLowerCase();
                            return "*" === t ? function() {
                                return !0
                            } : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                        },
                        CLASS: function(t) {
                            var e = W[t + " "];
                            return e || (e = new RegExp("(^|" + ot + ")" + t + "(" + ot + "|$)")) && W(t, function(t) {
                                return e.test("string" == typeof t.className && t.className || typeof t.getAttribute !== V && t.getAttribute("class") || "")
                            })
                        },
                        ATTR: function(t, e, n) {
                            return function(o) {
                                var r = i.attr(o, t);
                                return null == r ? "!=" === e : e ? (r += "", "=" === e ? r === n : "!=" === e ? r !== n : "^=" === e ? n && 0 === r.indexOf(n) : "*=" === e ? n && r.indexOf(n) > -1 : "$=" === e ? n && r.slice(-n.length) === n : "~=" === e ? (" " + r + " ").indexOf(n) > -1 : "|=" === e ? r === n || r.slice(0, n.length + 1) === n + "-" : !1) : !0
                            }
                        },
                        CHILD: function(t, e, i, n, o) {
                            var r = "nth" !== t.slice(0, 3),
                                s = "last" !== t.slice(-4),
                                a = "of-type" === e;
                            return 1 === n && 0 === o ? function(t) {
                                return !!t.parentNode
                            } : function(e, i, l) {
                                var h, c, u, p, d, f, g = r !== s ? "nextSibling" : "previousSibling",
                                    m = e.parentNode,
                                    y = a && e.nodeName.toLowerCase(),
                                    v = !l && !a;
                                if (m) {
                                    if (r) {
                                        for (; g;) {
                                            for (u = e; u = u[g];)
                                                if (a ? u.nodeName.toLowerCase() === y : 1 === u.nodeType) return !1;
                                            f = g = "only" === t && !f && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (f = [s ? m.firstChild : m.lastChild], s && v) {
                                        for (c = m[M] || (m[M] = {}), h = c[t] || [], d = h[0] === q && h[1], p = h[0] === q && h[2], u = d && m.childNodes[d]; u = ++d && u && u[g] || (p = d = 0) || f.pop();)
                                            if (1 === u.nodeType && ++p && u === e) {
                                                c[t] = [q, d, p];
                                                break
                                            }
                                    } else if (v && (h = (e[M] || (e[M] = {}))[t]) && h[0] === q) p = h[1];
                                    else
                                        for (;
                                            (u = ++d && u && u[g] || (p = d = 0) || f.pop()) && ((a ? u.nodeName.toLowerCase() !== y : 1 !== u.nodeType) || !++p || (v && ((u[M] || (u[M] = {}))[t] = [q, p]), u !== e)););
                                    return p -= o, p === n || p % n === 0 && p / n >= 0
                                }
                            }
                        },
                        PSEUDO: function(t, e) {
                            var n, r = $.pseudos[t] || $.setFilters[t.toLowerCase()] || i.error("unsupported pseudo: " + t);
                            return r[M] ? r(e) : r.length > 1 ? (n = [t, t, "", e], $.setFilters.hasOwnProperty(t.toLowerCase()) ? o(function(t, i) {
                                for (var n, o = r(t, e), s = o.length; s--;) n = it.call(t, o[s]), t[n] = !(i[n] = o[s])
                            }) : function(t) {
                                return r(t, 0, n)
                            }) : r
                        }
                    },
                    pseudos: {
                        not: o(function(t) {
                            var e = [],
                                i = [],
                                n = N(t.replace(ht, "$1"));
                            return n[M] ? o(function(t, e, i, o) {
                                for (var r, s = n(t, null, o, []), a = t.length; a--;)(r = s[a]) && (t[a] = !(e[a] = r))
                            }) : function(t, o, r) {
                                return e[0] = t, n(e, null, r, i), !i.pop()
                            }
                        }),
                        has: o(function(t) {
                            return function(e) {
                                return i(t, e).length > 0
                            }
                        }),
                        contains: o(function(t) {
                            return function(e) {
                                return (e.textContent || e.innerText || E(e)).indexOf(t) > -1
                            }
                        }),
                        lang: o(function(t) {
                            return mt.test(t || "") || i.error("unsupported lang: " + t), t = t.replace(Tt, Ct).toLowerCase(),
                                function(e) {
                                    var i;
                                    do
                                        if (i = O ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return i = i.toLowerCase(), i === t || 0 === i.indexOf(t + "-");
                                    while ((e = e.parentNode) && 1 === e.nodeType);
                                    return !1
                                }
                        }),
                        target: function(e) {
                            var i = t.location && t.location.hash;
                            return i && i.slice(1) === e.id
                        },
                        root: function(t) {
                            return t === L
                        },
                        focus: function(t) {
                            return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                        },
                        enabled: function(t) {
                            return t.disabled === !1
                        },
                        disabled: function(t) {
                            return t.disabled === !0
                        },
                        checked: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && !!t.checked || "option" === e && !!t.selected
                        },
                        selected: function(t) {
                            return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
                        },
                        empty: function(t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeName > "@" || 3 === t.nodeType || 4 === t.nodeType) return !1;
                            return !0
                        },
                        parent: function(t) {
                            return !$.pseudos.empty(t)
                        },
                        header: function(t) {
                            return wt.test(t.nodeName)
                        },
                        input: function(t) {
                            return bt.test(t.nodeName)
                        },
                        button: function(t) {
                            var e = t.nodeName.toLowerCase();
                            return "input" === e && "button" === t.type || "button" === e
                        },
                        text: function(t) {
                            var e;
                            return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || e.toLowerCase() === t.type)
                        },
                        first: c(function() {
                            return [0]
                        }),
                        last: c(function(t, e) {
                            return [e - 1]
                        }),
                        eq: c(function(t, e, i) {
                            return [0 > i ? i + e : i]
                        }),
                        even: c(function(t, e) {
                            for (var i = 0; e > i; i += 2) t.push(i);
                            return t
                        }),
                        odd: c(function(t, e) {
                            for (var i = 1; e > i; i += 2) t.push(i);
                            return t
                        }),
                        lt: c(function(t, e, i) {
                            for (var n = 0 > i ? i + e : i; --n >= 0;) t.push(n);
                            return t
                        }),
                        gt: c(function(t, e, i) {
                            for (var n = 0 > i ? i + e : i; ++n < e;) t.push(n);
                            return t
                        })
                    }
                }, $.pseudos.nth = $.pseudos.eq;
                for (x in {
                        radio: !0,
                        checkbox: !0,
                        file: !0,
                        password: !0,
                        image: !0
                    }) $.pseudos[x] = l(x);
                for (x in {
                        submit: !0,
                        reset: !0
                    }) $.pseudos[x] = h(x);
                u.prototype = $.filters = $.pseudos, $.setFilters = new u, N = i.compile = function(t, e) {
                    var i, n = [],
                        o = [],
                        r = U[t + " "];
                    if (!r) {
                        for (e || (e = p(t)), i = e.length; i--;) r = v(e[i]), r[M] ? n.push(r) : o.push(r);
                        r = U(t, _(o, n))
                    }
                    return r
                }, T.sortStable = M.split("").sort(Y).join("") === M, T.detectDuplicates = X, D(), T.sortDetached = r(function(t) {
                    return 1 & t.compareDocumentPosition(j.createElement("div"))
                }), r(function(t) {
                    return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
                }) || s("type|href|height|width", function(t, e, i) {
                    return i ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
                }), T.attributes && r(function(t) {
                    return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
                }) || s("value", function(t, e, i) {
                    return i || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
                }), r(function(t) {
                    return null == t.getAttribute("disabled")
                }) || s(nt, function(t, e, i) {
                    var n;
                    return i ? void 0 : (n = t.getAttributeNode(e)) && n.specified ? n.value : t[e] === !0 ? e.toLowerCase() : null
                }), ct.find = i, ct.expr = i.selectors, ct.expr[":"] = ct.expr.pseudos, ct.unique = i.uniqueSort, ct.text = i.getText, ct.isXMLDoc = i.isXML, ct.contains = i.contains
            }(t);
        var $t = {};
        ct.Callbacks = function(t) {
            t = "string" == typeof t ? $t[t] || n(t) : ct.extend({}, t);
            var i, o, r, s, a, l, h = [],
                c = !t.once && [],
                u = function(e) {
                    for (o = t.memory && e, r = !0, a = l || 0, l = 0, s = h.length, i = !0; h && s > a; a++)
                        if (h[a].apply(e[0], e[1]) === !1 && t.stopOnFalse) {
                            o = !1;
                            break
                        }
                    i = !1, h && (c ? c.length && u(c.shift()) : o ? h = [] : p.disable())
                },
                p = {
                    add: function() {
                        if (h) {
                            var e = h.length;
                            ! function n(e) {
                                ct.each(e, function(e, i) {
                                    var o = ct.type(i);
                                    "function" === o ? t.unique && p.has(i) || h.push(i) : i && i.length && "string" !== o && n(i)
                                })
                            }(arguments), i ? s = h.length : o && (l = e, u(o))
                        }
                        return this
                    },
                    remove: function() {
                        return h && ct.each(arguments, function(t, e) {
                            for (var n;
                                (n = ct.inArray(e, h, n)) > -1;) h.splice(n, 1), i && (s >= n && s--, a >= n && a--)
                        }), this
                    },
                    has: function(t) {
                        return t ? ct.inArray(t, h) > -1 : !(!h || !h.length)
                    },
                    empty: function() {
                        return h = [], s = 0, this
                    },
                    disable: function() {
                        return h = c = o = e, this
                    },
                    disabled: function() {
                        return !h
                    },
                    lock: function() {
                        return c = e, o || p.disable(), this
                    },
                    locked: function() {
                        return !c
                    },
                    fireWith: function(t, e) {
                        return !h || r && !c || (e = e || [], e = [t, e.slice ? e.slice() : e], i ? c.push(e) : u(e)), this
                    },
                    fire: function() {
                        return p.fireWith(this, arguments), this
                    },
                    fired: function() {
                        return !!r
                    }
                };
            return p
        }, ct.extend({
            Deferred: function(t) {
                var e = [
                        ["resolve", "done", ct.Callbacks("once memory"), "resolved"],
                        ["reject", "fail", ct.Callbacks("once memory"), "rejected"],
                        ["notify", "progress", ct.Callbacks("memory")]
                    ],
                    i = "pending",
                    n = {
                        state: function() {
                            return i
                        },
                        always: function() {
                            return o.done(arguments).fail(arguments), this
                        },
                        then: function() {
                            var t = arguments;
                            return ct.Deferred(function(i) {
                                ct.each(e, function(e, r) {
                                    var s = r[0],
                                        a = ct.isFunction(t[e]) && t[e];
                                    o[r[1]](function() {
                                        var t = a && a.apply(this, arguments);
                                        t && ct.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[s + "With"](this === n ? i.promise() : this, a ? [t] : arguments)
                                    })
                                }), t = null
                            }).promise()
                        },
                        promise: function(t) {
                            return null != t ? ct.extend(t, n) : n
                        }
                    },
                    o = {};
                return n.pipe = n.then, ct.each(e, function(t, r) {
                    var s = r[2],
                        a = r[3];
                    n[r[1]] = s.add, a && s.add(function() {
                        i = a
                    }, e[1 ^ t][2].disable, e[2][2].lock), o[r[0]] = function() {
                        return o[r[0] + "With"](this === o ? n : this, arguments), this
                    }, o[r[0] + "With"] = s.fireWith
                }), n.promise(o), t && t.call(o, o), o
            },
            when: function(t) {
                var e, i, n, o = 0,
                    r = rt.call(arguments),
                    s = r.length,
                    a = 1 !== s || t && ct.isFunction(t.promise) ? s : 0,
                    l = 1 === a ? t : ct.Deferred(),
                    h = function(t, i, n) {
                        return function(o) {
                            i[t] = this, n[t] = arguments.length > 1 ? rt.call(arguments) : o, n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n)
                        }
                    };
                if (s > 1)
                    for (e = new Array(s), i = new Array(s), n = new Array(s); s > o; o++) r[o] && ct.isFunction(r[o].promise) ? r[o].promise().done(h(o, n, r)).fail(l.reject).progress(h(o, i, e)) : --a;
                return a || l.resolveWith(n, r), l.promise()
            }
        }), ct.support = function(e) {
            var i, n, o, r, s, a, l, h, c, u = J.createElement("div");
            if (u.setAttribute("className", "t"), u.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = u.getElementsByTagName("*") || [], n = u.getElementsByTagName("a")[0], !n || !n.style || !i.length) return e;
            r = J.createElement("select"), a = r.appendChild(J.createElement("option")), o = u.getElementsByTagName("input")[0], n.style.cssText = "top:1px;float:left;opacity:.5", e.getSetAttribute = "t" !== u.className, e.leadingWhitespace = 3 === u.firstChild.nodeType, e.tbody = !u.getElementsByTagName("tbody").length, e.htmlSerialize = !!u.getElementsByTagName("link").length, e.style = /top/.test(n.getAttribute("style")), e.hrefNormalized = "/a" === n.getAttribute("href"), e.opacity = /^0.5/.test(n.style.opacity), e.cssFloat = !!n.style.cssFloat, e.checkOn = !!o.value, e.optSelected = a.selected, e.enctype = !!J.createElement("form").enctype, e.html5Clone = "<:nav></:nav>" !== J.createElement("nav").cloneNode(!0).outerHTML, e.inlineBlockNeedsLayout = !1, e.shrinkWrapBlocks = !1, e.pixelPosition = !1, e.deleteExpando = !0, e.noCloneEvent = !0, e.reliableMarginRight = !0, e.boxSizingReliable = !0, o.checked = !0, e.noCloneChecked = o.cloneNode(!0).checked, r.disabled = !0, e.optDisabled = !a.disabled;
            try {
                delete u.test
            } catch (p) {
                e.deleteExpando = !1
            }
            o = J.createElement("input"), o.setAttribute("value", ""), e.input = "" === o.getAttribute("value"), o.value = "t", o.setAttribute("type", "radio"), e.radioValue = "t" === o.value, o.setAttribute("checked", "t"), o.setAttribute("name", "t"), s = J.createDocumentFragment(), s.appendChild(o), e.appendChecked = o.checked, e.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked, u.attachEvent && (u.attachEvent("onclick", function() {
                e.noCloneEvent = !1
            }), u.cloneNode(!0).click());
            for (c in {
                    submit: !0,
                    change: !0,
                    focusin: !0
                }) u.setAttribute(l = "on" + c, "t"), e[c + "Bubbles"] = l in t || u.attributes[l].expando === !1;
            u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", e.clearCloneStyle = "content-box" === u.style.backgroundClip;
            for (c in ct(e)) break;
            return e.ownLast = "0" !== c, ct(function() {
                var i, n, o, r = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
                    s = J.getElementsByTagName("body")[0];
                s && (i = J.createElement("div"), i.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(i).appendChild(u), u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", o = u.getElementsByTagName("td"), o[0].style.cssText = "padding:0;margin:0;border:0;display:none", h = 0 === o[0].offsetHeight, o[0].style.display = "", o[1].style.display = "none", e.reliableHiddenOffsets = h && 0 === o[0].offsetHeight, u.innerHTML = "", u.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ct.swap(s, null != s.style.zoom ? {
                    zoom: 1
                } : {}, function() {
                    e.boxSizing = 4 === u.offsetWidth
                }), t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(u, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(u, null) || {
                    width: "4px"
                }).width, n = u.appendChild(J.createElement("div")), n.style.cssText = u.style.cssText = r, n.style.marginRight = n.style.width = "0", u.style.width = "1px", e.reliableMarginRight = !parseFloat((t.getComputedStyle(n, null) || {}).marginRight)), typeof u.style.zoom !== V && (u.innerHTML = "", u.style.cssText = r + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === u.offsetWidth, u.style.display = "block", u.innerHTML = "<div></div>", u.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== u.offsetWidth, e.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(i), i = u = o = n = null)
            }), i = r = s = a = n = o = null, e
        }({});
        var Et = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
            kt = /([A-Z])/g;
        ct.extend({
            cache: {},
            noData: {
                applet: !0,
                embed: !0,
                object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
            },
            hasData: function(t) {
                return t = t.nodeType ? ct.cache[t[ct.expando]] : t[ct.expando], !!t && !a(t)
            },
            data: function(t, e, i) {
                return o(t, e, i)
            },
            removeData: function(t, e) {
                return r(t, e)
            },
            _data: function(t, e, i) {
                return o(t, e, i, !0)
            },
            _removeData: function(t, e) {
                return r(t, e, !0)
            },
            acceptData: function(t) {
                if (t.nodeType && 1 !== t.nodeType && 9 !== t.nodeType) return !1;
                var e = t.nodeName && ct.noData[t.nodeName.toLowerCase()];
                return !e || e !== !0 && t.getAttribute("classid") === e
            }
        }), ct.fn.extend({
            data: function(t, i) {
                var n, o, r = null,
                    a = 0,
                    l = this[0];
                if (t === e) {
                    if (this.length && (r = ct.data(l), 1 === l.nodeType && !ct._data(l, "parsedAttrs"))) {
                        for (n = l.attributes; a < n.length; a++) o = n[a].name, 0 === o.indexOf("data-") && (o = ct.camelCase(o.slice(5)), s(l, o, r[o]));
                        ct._data(l, "parsedAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    ct.data(this, t)
                }) : arguments.length > 1 ? this.each(function() {
                    ct.data(this, t, i)
                }) : l ? s(l, t, ct.data(l, t)) : null
            },
            removeData: function(t) {
                return this.each(function() {
                    ct.removeData(this, t)
                })
            }
        }), ct.extend({
            queue: function(t, e, i) {
                var n;
                return t ? (e = (e || "fx") + "queue", n = ct._data(t, e), i && (!n || ct.isArray(i) ? n = ct._data(t, e, ct.makeArray(i)) : n.push(i)), n || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var i = ct.queue(t, e),
                    n = i.length,
                    o = i.shift(),
                    r = ct._queueHooks(t, e),
                    s = function() {
                        ct.dequeue(t, e)
                    };
                "inprogress" === o && (o = i.shift(), n--), o && ("fx" === e && i.unshift("inprogress"), delete r.stop, o.call(t, s, r)), !n && r && r.empty.fire()
            },
            _queueHooks: function(t, e) {
                var i = e + "queueHooks";
                return ct._data(t, i) || ct._data(t, i, {
                    empty: ct.Callbacks("once memory").add(function() {
                        ct._removeData(t, e + "queue"), ct._removeData(t, i)
                    })
                })
            }
        }), ct.fn.extend({
            queue: function(t, i) {
                var n = 2;
                return "string" != typeof t && (i = t, t = "fx", n--), arguments.length < n ? ct.queue(this[0], t) : i === e ? this : this.each(function() {
                    var e = ct.queue(this, t, i);
                    ct._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && ct.dequeue(this, t)
                })
            },
            dequeue: function(t) {
                return this.each(function() {
                    ct.dequeue(this, t)
                })
            },
            delay: function(t, e) {
                return t = ct.fx ? ct.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                    var n = setTimeout(e, t);
                    i.stop = function() {
                        clearTimeout(n)
                    }
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, i) {
                var n, o = 1,
                    r = ct.Deferred(),
                    s = this,
                    a = this.length,
                    l = function() {
                        --o || r.resolveWith(s, [s])
                    };
                for ("string" != typeof t && (i = t, t = e), t = t || "fx"; a--;) n = ct._data(s[a], t + "queueHooks"), n && n.empty && (o++, n.empty.add(l));
                return l(), r.promise(i)
            }
        });
        var Nt, At, St = /[\t\r\n\f]/g,
            Dt = /\r/g,
            jt = /^(?:input|select|textarea|button|object)$/i,
            Lt = /^(?:a|area)$/i,
            Ot = /^(?:checked|selected)$/i,
            Pt = ct.support.getSetAttribute,
            It = ct.support.input;
        ct.fn.extend({
            attr: function(t, e) {
                return ct.access(this, ct.attr, t, e, arguments.length > 1)
            },
            removeAttr: function(t) {
                return this.each(function() {
                    ct.removeAttr(this, t)
                })
            },
            prop: function(t, e) {
                return ct.access(this, ct.prop, t, e, arguments.length > 1)
            },
            removeProp: function(t) {
                return t = ct.propFix[t] || t, this.each(function() {
                    try {
                        this[t] = e, delete this[t]
                    } catch (i) {}
                })
            },
            addClass: function(t) {
                var e, i, n, o, r, s = 0,
                    a = this.length,
                    l = "string" == typeof t && t;
                if (ct.isFunction(t)) return this.each(function(e) {
                    ct(this).addClass(t.call(this, e, this.className))
                });
                if (l)
                    for (e = (t || "").match(pt) || []; a > s; s++)
                        if (i = this[s], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(St, " ") : " ")) {
                            for (r = 0; o = e[r++];) n.indexOf(" " + o + " ") < 0 && (n += o + " ");
                            i.className = ct.trim(n)
                        }
                return this
            },
            removeClass: function(t) {
                var e, i, n, o, r, s = 0,
                    a = this.length,
                    l = 0 === arguments.length || "string" == typeof t && t;
                if (ct.isFunction(t)) return this.each(function(e) {
                    ct(this).removeClass(t.call(this, e, this.className))
                });
                if (l)
                    for (e = (t || "").match(pt) || []; a > s; s++)
                        if (i = this[s], n = 1 === i.nodeType && (i.className ? (" " + i.className + " ").replace(St, " ") : "")) {
                            for (r = 0; o = e[r++];)
                                for (; n.indexOf(" " + o + " ") >= 0;) n = n.replace(" " + o + " ", " ");
                            i.className = t ? ct.trim(n) : ""
                        }
                return this
            },
            toggleClass: function(t, e) {
                var i = typeof t;
                return "boolean" == typeof e && "string" === i ? e ? this.addClass(t) : this.removeClass(t) : ct.isFunction(t) ? this.each(function(i) {
                    ct(this).toggleClass(t.call(this, i, this.className, e), e)
                }) : this.each(function() {
                    if ("string" === i)
                        for (var e, n = 0, o = ct(this), r = t.match(pt) || []; e = r[n++];) o.hasClass(e) ? o.removeClass(e) : o.addClass(e);
                    else i !== V && "boolean" !== i || (this.className && ct._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : ct._data(this, "__className__") || "")
                })
            },
            hasClass: function(t) {
                for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
                    if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(St, " ").indexOf(e) >= 0) return !0;
                return !1
            },
            val: function(t) {
                var i, n, o, r = this[0]; {
                    if (arguments.length) return o = ct.isFunction(t), this.each(function(i) {
                        var r;
                        1 === this.nodeType && (r = o ? t.call(this, i, ct(this).val()) : t, null == r ? r = "" : "number" == typeof r ? r += "" : ct.isArray(r) && (r = ct.map(r, function(t) {
                            return null == t ? "" : t + ""
                        })), n = ct.valHooks[this.type] || ct.valHooks[this.nodeName.toLowerCase()], n && "set" in n && n.set(this, r, "value") !== e || (this.value = r))
                    });
                    if (r) return n = ct.valHooks[r.type] || ct.valHooks[r.nodeName.toLowerCase()], n && "get" in n && (i = n.get(r, "value")) !== e ? i : (i = r.value, "string" == typeof i ? i.replace(Dt, "") : null == i ? "" : i)
                }
            }
        }), ct.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = ct.find.attr(t, "value");
                        return null != e ? e : t.text
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, i, n = t.options, o = t.selectedIndex, r = "select-one" === t.type || 0 > o, s = r ? null : [], a = r ? o + 1 : n.length, l = 0 > o ? a : r ? o : 0; a > l; l++)
                            if (i = n[l], (i.selected || l === o) && (ct.support.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !ct.nodeName(i.parentNode, "optgroup"))) {
                                if (e = ct(i).val(), r) return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var i, n, o = t.options, r = ct.makeArray(e), s = o.length; s--;) n = o[s], (n.selected = ct.inArray(ct(n).val(), r) >= 0) && (i = !0);
                        return i || (t.selectedIndex = -1), r
                    }
                }
            },
            attr: function(t, i, n) {
                var o, r, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s) return typeof t.getAttribute === V ? ct.prop(t, i, n) : (1 === s && ct.isXMLDoc(t) || (i = i.toLowerCase(), o = ct.attrHooks[i] || (ct.expr.match.bool.test(i) ? At : Nt)), n === e ? o && "get" in o && null !== (r = o.get(t, i)) ? r : (r = ct.find.attr(t, i), null == r ? e : r) : null !== n ? o && "set" in o && (r = o.set(t, n, i)) !== e ? r : (t.setAttribute(i, n + ""), n) : void ct.removeAttr(t, i))
            },
            removeAttr: function(t, e) {
                var i, n, o = 0,
                    r = e && e.match(pt);
                if (r && 1 === t.nodeType)
                    for (; i = r[o++];) n = ct.propFix[i] || i, ct.expr.match.bool.test(i) ? It && Pt || !Ot.test(i) ? t[n] = !1 : t[ct.camelCase("default-" + i)] = t[n] = !1 : ct.attr(t, i, ""), t.removeAttribute(Pt ? i : n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!ct.support.radioValue && "radio" === e && ct.nodeName(t, "input")) {
                            var i = t.value;
                            return t.setAttribute("type", e), i && (t.value = i), e
                        }
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, i, n) {
                var o, r, s, a = t.nodeType;
                if (t && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !ct.isXMLDoc(t), s && (i = ct.propFix[i] || i, r = ct.propHooks[i]), n !== e ? r && "set" in r && (o = r.set(t, n, i)) !== e ? o : t[i] = n : r && "get" in r && null !== (o = r.get(t, i)) ? o : t[i]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        var e = ct.find.attr(t, "tabindex");
                        return e ? parseInt(e, 10) : jt.test(t.nodeName) || Lt.test(t.nodeName) && t.href ? 0 : -1
                    }
                }
            }
        }), At = {
            set: function(t, e, i) {
                return e === !1 ? ct.removeAttr(t, i) : It && Pt || !Ot.test(i) ? t.setAttribute(!Pt && ct.propFix[i] || i, i) : t[ct.camelCase("default-" + i)] = t[i] = !0, i
            }
        }, ct.each(ct.expr.match.bool.source.match(/\w+/g), function(t, i) {
            var n = ct.expr.attrHandle[i] || ct.find.attr;
            ct.expr.attrHandle[i] = It && Pt || !Ot.test(i) ? function(t, i, o) {
                var r = ct.expr.attrHandle[i],
                    s = o ? e : (ct.expr.attrHandle[i] = e) != n(t, i, o) ? i.toLowerCase() : null;
                return ct.expr.attrHandle[i] = r, s
            } : function(t, i, n) {
                return n ? e : t[ct.camelCase("default-" + i)] ? i.toLowerCase() : null
            }
        }), It && Pt || (ct.attrHooks.value = {
            set: function(t, e, i) {
                return ct.nodeName(t, "input") ? void(t.defaultValue = e) : Nt && Nt.set(t, e, i)
            }
        }), Pt || (Nt = {
            set: function(t, i, n) {
                var o = t.getAttributeNode(n);
                return o || t.setAttributeNode(o = t.ownerDocument.createAttribute(n)), o.value = i += "", "value" === n || i === t.getAttribute(n) ? i : e
            }
        }, ct.expr.attrHandle.id = ct.expr.attrHandle.name = ct.expr.attrHandle.coords = function(t, i, n) {
            var o;
            return n ? e : (o = t.getAttributeNode(i)) && "" !== o.value ? o.value : null
        }, ct.valHooks.button = {
            get: function(t, i) {
                var n = t.getAttributeNode(i);
                return n && n.specified ? n.value : e
            },
            set: Nt.set
        }, ct.attrHooks.contenteditable = {
            set: function(t, e, i) {
                Nt.set(t, "" === e ? !1 : e, i)
            }
        }, ct.each(["width", "height"], function(t, e) {
            ct.attrHooks[e] = {
                set: function(t, i) {
                    return "" === i ? (t.setAttribute(e, "auto"), i) : void 0
                }
            }
        })), ct.support.hrefNormalized || ct.each(["href", "src"], function(t, e) {
            ct.propHooks[e] = {
                get: function(t) {
                    return t.getAttribute(e, 4)
                }
            }
        }), ct.support.style || (ct.attrHooks.style = {
            get: function(t) {
                return t.style.cssText || e
            },
            set: function(t, e) {
                return t.style.cssText = e + ""
            }
        }), ct.support.optSelected || (ct.propHooks.selected = {
            get: function(t) {
                var e = t.parentNode;
                return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
            }
        }), ct.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            ct.propFix[this.toLowerCase()] = this
        }), ct.support.enctype || (ct.propFix.enctype = "encoding"), ct.each(["radio", "checkbox"], function() {
            ct.valHooks[this] = {
                set: function(t, e) {
                    return ct.isArray(e) ? t.checked = ct.inArray(ct(t).val(), e) >= 0 : void 0
                }
            }, ct.support.checkOn || (ct.valHooks[this].get = function(t) {
                return null === t.getAttribute("value") ? "on" : t.value
            })
        });
        var Ht = /^(?:input|select|textarea)$/i,
            Rt = /^key/,
            Mt = /^(?:mouse|contextmenu)|click/,
            zt = /^(?:focusinfocus|focusoutblur)$/,
            qt = /^([^.]*)(?:\.(.+)|)$/;
        ct.event = {
            global: {},
            add: function(t, i, n, o, r) {
                var s, a, l, h, c, u, p, d, f, g, m, y = ct._data(t);
                if (y) {
                    for (n.handler && (h = n, n = h.handler, r = h.selector), n.guid || (n.guid = ct.guid++), (a = y.events) || (a = y.events = {}), (u = y.handle) || (u = y.handle = function(t) {
                            return typeof ct === V || t && ct.event.triggered === t.type ? e : ct.event.dispatch.apply(u.elem, arguments)
                        }, u.elem = t), i = (i || "").match(pt) || [""], l = i.length; l--;) s = qt.exec(i[l]) || [], f = m = s[1], g = (s[2] || "").split(".").sort(), f && (c = ct.event.special[f] || {}, f = (r ? c.delegateType : c.bindType) || f, c = ct.event.special[f] || {}, p = ct.extend({
                        type: f,
                        origType: m,
                        data: o,
                        handler: n,
                        guid: n.guid,
                        selector: r,
                        needsContext: r && ct.expr.match.needsContext.test(r),
                        namespace: g.join(".")
                    }, h), (d = a[f]) || (d = a[f] = [], d.delegateCount = 0, c.setup && c.setup.call(t, o, g, u) !== !1 || (t.addEventListener ? t.addEventListener(f, u, !1) : t.attachEvent && t.attachEvent("on" + f, u))), c.add && (c.add.call(t, p), p.handler.guid || (p.handler.guid = n.guid)), r ? d.splice(d.delegateCount++, 0, p) : d.push(p), ct.event.global[f] = !0);
                    t = null
                }
            },
            remove: function(t, e, i, n, o) {
                var r, s, a, l, h, c, u, p, d, f, g, m = ct.hasData(t) && ct._data(t);
                if (m && (c = m.events)) {
                    for (e = (e || "").match(pt) || [""], h = e.length; h--;)
                        if (a = qt.exec(e[h]) || [], d = g = a[1], f = (a[2] || "").split(".").sort(), d) {
                            for (u = ct.event.special[d] || {}, d = (n ? u.delegateType : u.bindType) || d, p = c[d] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = r = p.length; r--;) s = p[r], !o && g !== s.origType || i && i.guid !== s.guid || a && !a.test(s.namespace) || n && n !== s.selector && ("**" !== n || !s.selector) || (p.splice(r, 1), s.selector && p.delegateCount--, u.remove && u.remove.call(t, s));
                            l && !p.length && (u.teardown && u.teardown.call(t, f, m.handle) !== !1 || ct.removeEvent(t, d, m.handle), delete c[d])
                        } else
                            for (d in c) ct.event.remove(t, d + e[h], i, n, !0);
                    ct.isEmptyObject(c) && (delete m.handle, ct._removeData(t, "events"))
                }
            },
            trigger: function(i, n, o, r) {
                var s, a, l, h, c, u, p, d = [o || J],
                    f = lt.call(i, "type") ? i.type : i,
                    g = lt.call(i, "namespace") ? i.namespace.split(".") : [];
                if (l = u = o = o || J, 3 !== o.nodeType && 8 !== o.nodeType && !zt.test(f + ct.event.triggered) && (f.indexOf(".") >= 0 && (g = f.split("."), f = g.shift(), g.sort()), a = f.indexOf(":") < 0 && "on" + f, i = i[ct.expando] ? i : new ct.Event(f, "object" == typeof i && i), i.isTrigger = r ? 2 : 3, i.namespace = g.join("."), i.namespace_re = i.namespace ? new RegExp("(^|\\.)" + g.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, i.result = e, i.target || (i.target = o), n = null == n ? [i] : ct.makeArray(n, [i]), c = ct.event.special[f] || {}, r || !c.trigger || c.trigger.apply(o, n) !== !1)) {
                    if (!r && !c.noBubble && !ct.isWindow(o)) {
                        for (h = c.delegateType || f, zt.test(h + f) || (l = l.parentNode); l; l = l.parentNode) d.push(l), u = l;
                        u === (o.ownerDocument || J) && d.push(u.defaultView || u.parentWindow || t)
                    }
                    for (p = 0;
                        (l = d[p++]) && !i.isPropagationStopped();) i.type = p > 1 ? h : c.bindType || f, s = (ct._data(l, "events") || {})[i.type] && ct._data(l, "handle"), s && s.apply(l, n), s = a && l[a], s && ct.acceptData(l) && s.apply && s.apply(l, n) === !1 && i.preventDefault();
                    if (i.type = f, !r && !i.isDefaultPrevented() && (!c._default || c._default.apply(d.pop(), n) === !1) && ct.acceptData(o) && a && o[f] && !ct.isWindow(o)) {
                        u = o[a], u && (o[a] = null), ct.event.triggered = f;
                        try {
                            o[f]()
                        } catch (m) {}
                        ct.event.triggered = e, u && (o[a] = u)
                    }
                    return i.result
                }
            },
            dispatch: function(t) {
                t = ct.event.fix(t);
                var i, n, o, r, s, a = [],
                    l = rt.call(arguments),
                    h = (ct._data(this, "events") || {})[t.type] || [],
                    c = ct.event.special[t.type] || {};
                if (l[0] = t, t.delegateTarget = this, !c.preDispatch || c.preDispatch.call(this, t) !== !1) {
                    for (a = ct.event.handlers.call(this, t, h), i = 0;
                        (r = a[i++]) && !t.isPropagationStopped();)
                        for (t.currentTarget = r.elem, s = 0;
                            (o = r.handlers[s++]) && !t.isImmediatePropagationStopped();) t.namespace_re && !t.namespace_re.test(o.namespace) || (t.handleObj = o, t.data = o.data, n = ((ct.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, l), n !== e && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
                    return c.postDispatch && c.postDispatch.call(this, t), t.result
                }
            },
            handlers: function(t, i) {
                var n, o, r, s, a = [],
                    l = i.delegateCount,
                    h = t.target;
                if (l && h.nodeType && (!t.button || "click" !== t.type))
                    for (; h != this; h = h.parentNode || this)
                        if (1 === h.nodeType && (h.disabled !== !0 || "click" !== t.type)) {
                            for (r = [], s = 0; l > s; s++) o = i[s], n = o.selector + " ", r[n] === e && (r[n] = o.needsContext ? ct(n, this).index(h) >= 0 : ct.find(n, this, null, [h]).length), r[n] && r.push(o);
                            r.length && a.push({
                                elem: h,
                                handlers: r
                            })
                        }
                return l < i.length && a.push({
                    elem: this,
                    handlers: i.slice(l)
                }), a
            },
            fix: function(t) {
                if (t[ct.expando]) return t;
                var e, i, n, o = t.type,
                    r = t,
                    s = this.fixHooks[o];
                for (s || (this.fixHooks[o] = s = Mt.test(o) ? this.mouseHooks : Rt.test(o) ? this.keyHooks : {}), n = s.props ? this.props.concat(s.props) : this.props, t = new ct.Event(r), e = n.length; e--;) i = n[e], t[i] = r[i];
                return t.target || (t.target = r.srcElement || J), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, r) : t
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(t, e) {
                    return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, i) {
                    var n, o, r, s = i.button,
                        a = i.fromElement;
                    return null == t.pageX && null != i.clientX && (o = t.target.ownerDocument || J, r = o.documentElement, n = o.body, t.pageX = i.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = i.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && a && (t.relatedTarget = a === t.target ? i.toElement : a), t.which || s === e || (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0), t
                }
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        if (this !== c() && this.focus) try {
                            return this.focus(), !1
                        } catch (t) {}
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === c() && this.blur ? (this.blur(), !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return ct.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                    },
                    _default: function(t) {
                        return ct.nodeName(t.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(t) {
                        t.result !== e && (t.originalEvent.returnValue = t.result)
                    }
                }
            },
            simulate: function(t, e, i, n) {
                var o = ct.extend(new ct.Event, i, {
                    type: t,
                    isSimulated: !0,
                    originalEvent: {}
                });
                n ? ct.event.trigger(o, null, e) : ct.event.dispatch.call(e, o), o.isDefaultPrevented() && i.preventDefault()
            }
        }, ct.removeEvent = J.removeEventListener ? function(t, e, i) {
            t.removeEventListener && t.removeEventListener(e, i, !1)
        } : function(t, e, i) {
            var n = "on" + e;
            t.detachEvent && (typeof t[n] === V && (t[n] = null), t.detachEvent(n, i))
        }, ct.Event = function(t, e) {
            return this instanceof ct.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.returnValue === !1 || t.getPreventDefault && t.getPreventDefault() ? l : h) : this.type = t, e && ct.extend(this, e), this.timeStamp = t && t.timeStamp || ct.now(), void(this[ct.expando] = !0)) : new ct.Event(t, e)
        }, ct.Event.prototype = {
            isDefaultPrevented: h,
            isPropagationStopped: h,
            isImmediatePropagationStopped: h,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = l, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = l, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() {
                this.isImmediatePropagationStopped = l, this.stopPropagation()
            }
        }, ct.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        }, function(t, e) {
            ct.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = this,
                        o = t.relatedTarget,
                        r = t.handleObj;
                    return o && (o === n || ct.contains(n, o)) || (t.type = r.origType, i = r.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), ct.support.submitBubbles || (ct.event.special.submit = {
            setup: function() {
                return ct.nodeName(this, "form") ? !1 : void ct.event.add(this, "click._submit keypress._submit", function(t) {
                    var i = t.target,
                        n = ct.nodeName(i, "input") || ct.nodeName(i, "button") ? i.form : e;
                    n && !ct._data(n, "submitBubbles") && (ct.event.add(n, "submit._submit", function(t) {
                        t._submit_bubble = !0
                    }), ct._data(n, "submitBubbles", !0))
                })
            },
            postDispatch: function(t) {
                t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && ct.event.simulate("submit", this.parentNode, t, !0))
            },
            teardown: function() {
                return ct.nodeName(this, "form") ? !1 : void ct.event.remove(this, "._submit")
            }
        }), ct.support.changeBubbles || (ct.event.special.change = {
            setup: function() {
                return Ht.test(this.nodeName) ? ("checkbox" !== this.type && "radio" !== this.type || (ct.event.add(this, "propertychange._change", function(t) {
                    "checked" === t.originalEvent.propertyName && (this._just_changed = !0)
                }), ct.event.add(this, "click._change", function(t) {
                    this._just_changed && !t.isTrigger && (this._just_changed = !1), ct.event.simulate("change", this, t, !0)
                })), !1) : void ct.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Ht.test(e.nodeName) && !ct._data(e, "changeBubbles") && (ct.event.add(e, "change._change", function(t) {
                        !this.parentNode || t.isSimulated || t.isTrigger || ct.event.simulate("change", this.parentNode, t, !0)
                    }), ct._data(e, "changeBubbles", !0))
                })
            },
            handle: function(t) {
                var e = t.target;
                return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
            },
            teardown: function() {
                return ct.event.remove(this, "._change"), !Ht.test(this.nodeName)
            }
        }), ct.support.focusinBubbles || ct.each({
            focus: "focusin",
            blur: "focusout"
        }, function(t, e) {
            var i = 0,
                n = function(t) {
                    ct.event.simulate(e, t.target, ct.event.fix(t), !0)
                };
            ct.event.special[e] = {
                setup: function() {
                    0 === i++ && J.addEventListener(t, n, !0)
                },
                teardown: function() {
                    0 === --i && J.removeEventListener(t, n, !0)
                }
            }
        }), ct.fn.extend({
            on: function(t, i, n, o, r) {
                var s, a;
                if ("object" == typeof t) {
                    "string" != typeof i && (n = n || i, i = e);
                    for (s in t) this.on(s, i, n, t[s], r);
                    return this
                }
                if (null == n && null == o ? (o = i, n = i = e) : null == o && ("string" == typeof i ? (o = n, n = e) : (o = n, n = i, i = e)), o === !1) o = h;
                else if (!o) return this;
                return 1 === r && (a = o, o = function(t) {
                    return ct().off(t), a.apply(this, arguments)
                }, o.guid = a.guid || (a.guid = ct.guid++)), this.each(function() {
                    ct.event.add(this, t, o, n, i)
                })
            },
            one: function(t, e, i, n) {
                return this.on(t, e, i, n, 1)
            },
            off: function(t, i, n) {
                var o, r;
                if (t && t.preventDefault && t.handleObj) return o = t.handleObj, ct(t.delegateTarget).off(o.namespace ? o.origType + "." + o.namespace : o.origType, o.selector, o.handler), this;
                if ("object" == typeof t) {
                    for (r in t) this.off(r, i, t[r]);
                    return this
                }
                return i !== !1 && "function" != typeof i || (n = i, i = e), n === !1 && (n = h), this.each(function() {
                    ct.event.remove(this, t, n, i)
                })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    ct.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var i = this[0];
                return i ? ct.event.trigger(t, e, i, !0) : void 0
            }
        });
        var Ft = /^.[^:#\[\.,]*$/,
            Wt = /^(?:parents|prev(?:Until|All))/,
            Bt = ct.expr.match.needsContext,
            Ut = {
                children: !0,
                contents: !0,
                next: !0,
                prev: !0
            };
        ct.fn.extend({
            find: function(t) {
                var e, i = [],
                    n = this,
                    o = n.length;
                if ("string" != typeof t) return this.pushStack(ct(t).filter(function() {
                    for (e = 0; o > e; e++)
                        if (ct.contains(n[e], this)) return !0
                }));
                for (e = 0; o > e; e++) ct.find(t, n[e], i);
                return i = this.pushStack(o > 1 ? ct.unique(i) : i), i.selector = this.selector ? this.selector + " " + t : t, i
            },
            has: function(t) {
                var e, i = ct(t, this),
                    n = i.length;
                return this.filter(function() {
                    for (e = 0; n > e; e++)
                        if (ct.contains(this, i[e])) return !0
                })
            },
            not: function(t) {
                return this.pushStack(p(this, t || [], !0))
            },
            filter: function(t) {
                return this.pushStack(p(this, t || [], !1))
            },
            is: function(t) {
                return !!p(this, "string" == typeof t && Bt.test(t) ? ct(t) : t || [], !1).length
            },
            closest: function(t, e) {
                for (var i, n = 0, o = this.length, r = [], s = Bt.test(t) || "string" != typeof t ? ct(t, e || this.context) : 0; o > n; n++)
                    for (i = this[n]; i && i !== e; i = i.parentNode)
                        if (i.nodeType < 11 && (s ? s.index(i) > -1 : 1 === i.nodeType && ct.find.matchesSelector(i, t))) {
                            i = r.push(i);
                            break
                        }
                return this.pushStack(r.length > 1 ? ct.unique(r) : r)
            },
            index: function(t) {
                return t ? "string" == typeof t ? ct.inArray(this[0], ct(t)) : ct.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                var i = "string" == typeof t ? ct(t, e) : ct.makeArray(t && t.nodeType ? [t] : t),
                    n = ct.merge(this.get(), i);
                return this.pushStack(ct.unique(n))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }), ct.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null;
            },
            parents: function(t) {
                return ct.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, i) {
                return ct.dir(t, "parentNode", i)
            },
            next: function(t) {
                return u(t, "nextSibling")
            },
            prev: function(t) {
                return u(t, "previousSibling")
            },
            nextAll: function(t) {
                return ct.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return ct.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, i) {
                return ct.dir(t, "nextSibling", i)
            },
            prevUntil: function(t, e, i) {
                return ct.dir(t, "previousSibling", i)
            },
            siblings: function(t) {
                return ct.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return ct.sibling(t.firstChild)
            },
            contents: function(t) {
                return ct.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ct.merge([], t.childNodes)
            }
        }, function(t, e) {
            ct.fn[t] = function(i, n) {
                var o = ct.map(this, e, i);
                return "Until" !== t.slice(-5) && (n = i), n && "string" == typeof n && (o = ct.filter(n, o)), this.length > 1 && (Ut[t] || (o = ct.unique(o)), Wt.test(t) && (o = o.reverse())), this.pushStack(o)
            }
        }), ct.extend({
            filter: function(t, e, i) {
                var n = e[0];
                return i && (t = ":not(" + t + ")"), 1 === e.length && 1 === n.nodeType ? ct.find.matchesSelector(n, t) ? [n] : [] : ct.find.matches(t, ct.grep(e, function(t) {
                    return 1 === t.nodeType
                }))
            },
            dir: function(t, i, n) {
                for (var o = [], r = t[i]; r && 9 !== r.nodeType && (n === e || 1 !== r.nodeType || !ct(r).is(n));) 1 === r.nodeType && o.push(r), r = r[i];
                return o
            },
            sibling: function(t, e) {
                for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t);
                return i
            }
        });
        var Xt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
            Yt = / jQuery\d+="(?:null|\d+)"/g,
            Vt = new RegExp("<(?:" + Xt + ")[\\s/>]", "i"),
            Qt = /^\s+/,
            Jt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
            Kt = /<([\w:]+)/,
            Gt = /<tbody/i,
            Zt = /<|&#?\w+;/,
            te = /<(?:script|style|link)/i,
            ee = /^(?:checkbox|radio)$/i,
            ie = /checked\s*(?:[^=]|=\s*.checked.)/i,
            ne = /^$|\/(?:java|ecma)script/i,
            oe = /^true\/(.*)/,
            re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
            se = {
                option: [1, "<select multiple='multiple'>", "</select>"],
                legend: [1, "<fieldset>", "</fieldset>"],
                area: [1, "<map>", "</map>"],
                param: [1, "<object>", "</object>"],
                thead: [1, "<table>", "</table>"],
                tr: [2, "<table><tbody>", "</tbody></table>"],
                col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
                td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
                _default: ct.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
            },
            ae = d(J),
            le = ae.appendChild(J.createElement("div"));
        se.optgroup = se.option, se.tbody = se.tfoot = se.colgroup = se.caption = se.thead, se.th = se.td, ct.fn.extend({
            text: function(t) {
                return ct.access(this, function(t) {
                    return t === e ? ct.text(this) : this.empty().append((this[0] && this[0].ownerDocument || J).createTextNode(t))
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = f(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = f(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var i, n = t ? ct.filter(t, this) : this, o = 0; null != (i = n[o]); o++) e || 1 !== i.nodeType || ct.cleanData(b(i)), i.parentNode && (e && ct.contains(i.ownerDocument, i) && y(b(i, "script")), i.parentNode.removeChild(i));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++) {
                    for (1 === t.nodeType && ct.cleanData(b(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                    t.options && ct.nodeName(t, "select") && (t.options.length = 0)
                }
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function() {
                    return ct.clone(this, t, e)
                })
            },
            html: function(t) {
                return ct.access(this, function(t) {
                    var i = this[0] || {},
                        n = 0,
                        o = this.length;
                    if (t === e) return 1 === i.nodeType ? i.innerHTML.replace(Yt, "") : e;
                    if ("string" == typeof t && !te.test(t) && (ct.support.htmlSerialize || !Vt.test(t)) && (ct.support.leadingWhitespace || !Qt.test(t)) && !se[(Kt.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(Jt, "<$1></$2>");
                        try {
                            for (; o > n; n++) i = this[n] || {}, 1 === i.nodeType && (ct.cleanData(b(i, !1)), i.innerHTML = t);
                            i = 0
                        } catch (r) {}
                    }
                    i && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = ct.map(this, function(t) {
                        return [t.nextSibling, t.parentNode]
                    }),
                    e = 0;
                return this.domManip(arguments, function(i) {
                    var n = t[e++],
                        o = t[e++];
                    o && (n && n.parentNode !== o && (n = this.nextSibling), ct(this).remove(), o.insertBefore(i, n))
                }, !0), e ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e, i) {
                t = nt.apply([], t);
                var n, o, r, s, a, l, h = 0,
                    c = this.length,
                    u = this,
                    p = c - 1,
                    d = t[0],
                    f = ct.isFunction(d);
                if (f || !(1 >= c || "string" != typeof d || ct.support.checkClone) && ie.test(d)) return this.each(function(n) {
                    var o = u.eq(n);
                    f && (t[0] = d.call(this, n, o.html())), o.domManip(t, e, i)
                });
                if (c && (l = ct.buildFragment(t, this[0].ownerDocument, !1, !i && this), n = l.firstChild, 1 === l.childNodes.length && (l = n), n)) {
                    for (s = ct.map(b(l, "script"), g), r = s.length; c > h; h++) o = l, h !== p && (o = ct.clone(o, !0, !0), r && ct.merge(s, b(o, "script"))), e.call(this[h], o, h);
                    if (r)
                        for (a = s[s.length - 1].ownerDocument, ct.map(s, m), h = 0; r > h; h++) o = s[h], ne.test(o.type || "") && !ct._data(o, "globalEval") && ct.contains(a, o) && (o.src ? ct._evalUrl(o.src) : ct.globalEval((o.text || o.textContent || o.innerHTML || "").replace(re, "")));
                    l = n = null
                }
                return this
            }
        }), ct.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            ct.fn[t] = function(t) {
                for (var i, n = 0, o = [], r = ct(t), s = r.length - 1; s >= n; n++) i = n === s ? this : this.clone(!0), ct(r[n])[e](i), ot.apply(o, i.get());
                return this.pushStack(o)
            }
        }), ct.extend({
            clone: function(t, e, i) {
                var n, o, r, s, a, l = ct.contains(t.ownerDocument, t);
                if (ct.support.html5Clone || ct.isXMLDoc(t) || !Vt.test("<" + t.nodeName + ">") ? r = t.cloneNode(!0) : (le.innerHTML = t.outerHTML, le.removeChild(r = le.firstChild)), !(ct.support.noCloneEvent && ct.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ct.isXMLDoc(t)))
                    for (n = b(r), a = b(t), s = 0; null != (o = a[s]); ++s) n[s] && _(o, n[s]);
                if (e)
                    if (i)
                        for (a = a || b(t), n = n || b(r), s = 0; null != (o = a[s]); s++) v(o, n[s]);
                    else v(t, r);
                return n = b(r, "script"), n.length > 0 && y(n, !l && b(t, "script")), n = a = o = null, r
            },
            buildFragment: function(t, e, i, n) {
                for (var o, r, s, a, l, h, c, u = t.length, p = d(e), f = [], g = 0; u > g; g++)
                    if (r = t[g], r || 0 === r)
                        if ("object" === ct.type(r)) ct.merge(f, r.nodeType ? [r] : r);
                        else if (Zt.test(r)) {
                    for (a = a || p.appendChild(e.createElement("div")), l = (Kt.exec(r) || ["", ""])[1].toLowerCase(), c = se[l] || se._default, a.innerHTML = c[1] + r.replace(Jt, "<$1></$2>") + c[2], o = c[0]; o--;) a = a.lastChild;
                    if (!ct.support.leadingWhitespace && Qt.test(r) && f.push(e.createTextNode(Qt.exec(r)[0])), !ct.support.tbody)
                        for (r = "table" !== l || Gt.test(r) ? "<table>" !== c[1] || Gt.test(r) ? 0 : a : a.firstChild, o = r && r.childNodes.length; o--;) ct.nodeName(h = r.childNodes[o], "tbody") && !h.childNodes.length && r.removeChild(h);
                    for (ct.merge(f, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                    a = p.lastChild
                } else f.push(e.createTextNode(r));
                for (a && p.removeChild(a), ct.support.appendChecked || ct.grep(b(f, "input"), w), g = 0; r = f[g++];)
                    if ((!n || -1 === ct.inArray(r, n)) && (s = ct.contains(r.ownerDocument, r), a = b(p.appendChild(r), "script"), s && y(a), i))
                        for (o = 0; r = a[o++];) ne.test(r.type || "") && i.push(r);
                return a = null, p
            },
            cleanData: function(t, e) {
                for (var i, n, o, r, s = 0, a = ct.expando, l = ct.cache, h = ct.support.deleteExpando, c = ct.event.special; null != (i = t[s]); s++)
                    if ((e || ct.acceptData(i)) && (o = i[a], r = o && l[o])) {
                        if (r.events)
                            for (n in r.events) c[n] ? ct.event.remove(i, n) : ct.removeEvent(i, n, r.handle);
                        l[o] && (delete l[o], h ? delete i[a] : typeof i.removeAttribute !== V ? i.removeAttribute(a) : i[a] = null, et.push(o))
                    }
            },
            _evalUrl: function(t) {
                return ct.ajax({
                    url: t,
                    type: "GET",
                    dataType: "script",
                    async: !1,
                    global: !1,
                    "throws": !0
                })
            }
        }), ct.fn.extend({
            wrapAll: function(t) {
                if (ct.isFunction(t)) return this.each(function(e) {
                    ct(this).wrapAll(t.call(this, e))
                });
                if (this[0]) {
                    var e = ct(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() {
                        for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                        return t
                    }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return ct.isFunction(t) ? this.each(function(e) {
                    ct(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = ct(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = ct.isFunction(t);
                return this.each(function(i) {
                    ct(this).wrapAll(e ? t.call(this, i) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    ct.nodeName(this, "body") || ct(this).replaceWith(this.childNodes)
                }).end()
            }
        });
        var he, ce, ue, pe = /alpha\([^)]*\)/i,
            de = /opacity\s*=\s*([^)]*)/,
            fe = /^(top|right|bottom|left)$/,
            ge = /^(none|table(?!-c[ea]).+)/,
            me = /^margin/,
            ye = new RegExp("^(" + ut + ")(.*)$", "i"),
            ve = new RegExp("^(" + ut + ")(?!px)[a-z%]+$", "i"),
            _e = new RegExp("^([+-])=(" + ut + ")", "i"),
            be = {
                BODY: "block"
            },
            we = {
                position: "absolute",
                visibility: "hidden",
                display: "block"
            },
            xe = {
                letterSpacing: 0,
                fontWeight: 400
            },
            Te = ["Top", "Right", "Bottom", "Left"],
            Ce = ["Webkit", "O", "Moz", "ms"];
        ct.fn.extend({
            css: function(t, i) {
                return ct.access(this, function(t, i, n) {
                    var o, r, s = {},
                        a = 0;
                    if (ct.isArray(i)) {
                        for (r = ce(t), o = i.length; o > a; a++) s[i[a]] = ct.css(t, i[a], !1, r);
                        return s
                    }
                    return n !== e ? ct.style(t, i, n) : ct.css(t, i)
                }, t, i, arguments.length > 1)
            },
            show: function() {
                return C(this, !0)
            },
            hide: function() {
                return C(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    T(this) ? ct(this).show() : ct(this).hide()
                })
            }
        }), ct.extend({
            cssHooks: {
                opacity: {
                    get: function(t, e) {
                        if (e) {
                            var i = ue(t, "opacity");
                            return "" === i ? "1" : i
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": ct.support.cssFloat ? "cssFloat" : "styleFloat"
            },
            style: function(t, i, n, o) {
                if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                    var r, s, a, l = ct.camelCase(i),
                        h = t.style;
                    if (i = ct.cssProps[l] || (ct.cssProps[l] = x(h, l)), a = ct.cssHooks[i] || ct.cssHooks[l], n === e) return a && "get" in a && (r = a.get(t, !1, o)) !== e ? r : h[i];
                    if (s = typeof n, "string" === s && (r = _e.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(ct.css(t, i)), s = "number"), !(null == n || "number" === s && isNaN(n) || ("number" !== s || ct.cssNumber[l] || (n += "px"), ct.support.clearCloneStyle || "" !== n || 0 !== i.indexOf("background") || (h[i] = "inherit"), a && "set" in a && (n = a.set(t, n, o)) === e))) try {
                        h[i] = n
                    } catch (c) {}
                }
            },
            css: function(t, i, n, o) {
                var r, s, a, l = ct.camelCase(i);
                return i = ct.cssProps[l] || (ct.cssProps[l] = x(t.style, l)), a = ct.cssHooks[i] || ct.cssHooks[l], a && "get" in a && (s = a.get(t, !0, n)), s === e && (s = ue(t, i, o)), "normal" === s && i in xe && (s = xe[i]), "" === n || n ? (r = parseFloat(s), n === !0 || ct.isNumeric(r) ? r || 0 : s) : s
            }
        }), t.getComputedStyle ? (ce = function(e) {
            return t.getComputedStyle(e, null)
        }, ue = function(t, i, n) {
            var o, r, s, a = n || ce(t),
                l = a ? a.getPropertyValue(i) || a[i] : e,
                h = t.style;
            return a && ("" !== l || ct.contains(t.ownerDocument, t) || (l = ct.style(t, i)), ve.test(l) && me.test(i) && (o = h.width, r = h.minWidth, s = h.maxWidth, h.minWidth = h.maxWidth = h.width = l, l = a.width, h.width = o, h.minWidth = r, h.maxWidth = s)), l
        }) : J.documentElement.currentStyle && (ce = function(t) {
            return t.currentStyle
        }, ue = function(t, i, n) {
            var o, r, s, a = n || ce(t),
                l = a ? a[i] : e,
                h = t.style;
            return null == l && h && h[i] && (l = h[i]), ve.test(l) && !fe.test(i) && (o = h.left, r = t.runtimeStyle, s = r && r.left, s && (r.left = t.currentStyle.left), h.left = "fontSize" === i ? "1em" : l, l = h.pixelLeft + "px", h.left = o, s && (r.left = s)), "" === l ? "auto" : l
        }), ct.each(["height", "width"], function(t, e) {
            ct.cssHooks[e] = {
                get: function(t, i, n) {
                    return i ? 0 === t.offsetWidth && ge.test(ct.css(t, "display")) ? ct.swap(t, we, function() {
                        return k(t, e, n)
                    }) : k(t, e, n) : void 0
                },
                set: function(t, i, n) {
                    var o = n && ce(t);
                    return $(t, i, n ? E(t, e, n, ct.support.boxSizing && "border-box" === ct.css(t, "boxSizing", !1, o), o) : 0)
                }
            }
        }), ct.support.opacity || (ct.cssHooks.opacity = {
            get: function(t, e) {
                return de.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
            },
            set: function(t, e) {
                var i = t.style,
                    n = t.currentStyle,
                    o = ct.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                    r = n && n.filter || i.filter || "";
                i.zoom = 1, (e >= 1 || "" === e) && "" === ct.trim(r.replace(pe, "")) && i.removeAttribute && (i.removeAttribute("filter"), "" === e || n && !n.filter) || (i.filter = pe.test(r) ? r.replace(pe, o) : r + " " + o)
            }
        }), ct(function() {
            ct.support.reliableMarginRight || (ct.cssHooks.marginRight = {
                get: function(t, e) {
                    return e ? ct.swap(t, {
                        display: "inline-block"
                    }, ue, [t, "marginRight"]) : void 0
                }
            }), !ct.support.pixelPosition && ct.fn.position && ct.each(["top", "left"], function(t, e) {
                ct.cssHooks[e] = {
                    get: function(t, i) {
                        return i ? (i = ue(t, e), ve.test(i) ? ct(t).position()[e] + "px" : i) : void 0
                    }
                }
            })
        }), ct.expr && ct.expr.filters && (ct.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ct.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ct.css(t, "display"))
        }, ct.expr.filters.visible = function(t) {
            return !ct.expr.filters.hidden(t)
        }), ct.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            ct.cssHooks[t + e] = {
                expand: function(i) {
                    for (var n = 0, o = {}, r = "string" == typeof i ? i.split(" ") : [i]; 4 > n; n++) o[t + Te[n] + e] = r[n] || r[n - 2] || r[0];
                    return o
                }
            }, me.test(t) || (ct.cssHooks[t + e].set = $)
        });
        var $e = /%20/g,
            Ee = /\[\]$/,
            ke = /\r?\n/g,
            Ne = /^(?:submit|button|image|reset|file)$/i,
            Ae = /^(?:input|select|textarea|keygen)/i;
        ct.fn.extend({
            serialize: function() {
                return ct.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = ct.prop(this, "elements");
                    return t ? ct.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !ct(this).is(":disabled") && Ae.test(this.nodeName) && !Ne.test(t) && (this.checked || !ee.test(t))
                }).map(function(t, e) {
                    var i = ct(this).val();
                    return null == i ? null : ct.isArray(i) ? ct.map(i, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(ke, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: i.replace(ke, "\r\n")
                    }
                }).get()
            }
        }), ct.param = function(t, i) {
            var n, o = [],
                r = function(t, e) {
                    e = ct.isFunction(e) ? e() : null == e ? "" : e, o[o.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
                };
            if (i === e && (i = ct.ajaxSettings && ct.ajaxSettings.traditional), ct.isArray(t) || t.jquery && !ct.isPlainObject(t)) ct.each(t, function() {
                r(this.name, this.value)
            });
            else
                for (n in t) S(n, t[n], i, r);
            return o.join("&").replace($e, "+")
        }, ct.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            ct.fn[e] = function(t, i) {
                return arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e)
            }
        }), ct.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, i) {
                return this.on(t, null, e, i)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, i, n) {
                return this.on(e, t, i, n)
            },
            undelegate: function(t, e, i) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i)
            }
        });
        var Se, De, je = ct.now(),
            Le = /\?/,
            Oe = /#.*$/,
            Pe = /([?&])_=[^&]*/,
            Ie = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
            He = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
            Re = /^(?:GET|HEAD)$/,
            Me = /^\/\//,
            ze = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
            qe = ct.fn.load,
            Fe = {},
            We = {},
            Be = "*/".concat("*");
        try {
            De = Q.href
        } catch (Ue) {
            De = J.createElement("a"), De.href = "", De = De.href
        }
        Se = ze.exec(De.toLowerCase()) || [], ct.fn.load = function(t, i, n) {
            if ("string" != typeof t && qe) return qe.apply(this, arguments);
            var o, r, s, a = this,
                l = t.indexOf(" ");
            return l >= 0 && (o = t.slice(l, t.length), t = t.slice(0, l)), ct.isFunction(i) ? (n = i, i = e) : i && "object" == typeof i && (s = "POST"), a.length > 0 && ct.ajax({
                url: t,
                type: s,
                dataType: "html",
                data: i
            }).done(function(t) {
                r = arguments, a.html(o ? ct("<div>").append(ct.parseHTML(t)).find(o) : t)
            }).complete(n && function(t, e) {
                a.each(n, r || [t.responseText, e, t])
            }), this
        }, ct.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            ct.fn[e] = function(t) {
                return this.on(e, t)
            }
        }), ct.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: De,
                type: "GET",
                isLocal: He.test(Se[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Be,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": ct.parseJSON,
                    "text xml": ct.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(t, e) {
                return e ? L(L(t, ct.ajaxSettings), e) : L(ct.ajaxSettings, t)
            },
            ajaxPrefilter: D(Fe),
            ajaxTransport: D(We),
            ajax: function(t, i) {
                function n(t, i, n, o) {
                    var r, u, v, _, w, T = i;
                    2 !== b && (b = 2, l && clearTimeout(l), c = e, a = o || "", x.readyState = t > 0 ? 4 : 0, r = t >= 200 && 300 > t || 304 === t, n && (_ = O(p, x, n)), _ = P(p, _, x, r), r ? (p.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (ct.lastModified[s] = w), w = x.getResponseHeader("etag"), w && (ct.etag[s] = w)), 204 === t || "HEAD" === p.type ? T = "nocontent" : 304 === t ? T = "notmodified" : (T = _.state, u = _.data, v = _.error, r = !v)) : (v = T, !t && T || (T = "error", 0 > t && (t = 0))), x.status = t, x.statusText = (i || T) + "", r ? g.resolveWith(d, [u, T, x]) : g.rejectWith(d, [x, T, v]), x.statusCode(y), y = e, h && f.trigger(r ? "ajaxSuccess" : "ajaxError", [x, p, r ? u : v]), m.fireWith(d, [x, T]), h && (f.trigger("ajaxComplete", [x, p]), --ct.active || ct.event.trigger("ajaxStop")))
                }
                "object" == typeof t && (i = t, t = e), i = i || {};
                var o, r, s, a, l, h, c, u, p = ct.ajaxSetup({}, i),
                    d = p.context || p,
                    f = p.context && (d.nodeType || d.jquery) ? ct(d) : ct.event,
                    g = ct.Deferred(),
                    m = ct.Callbacks("once memory"),
                    y = p.statusCode || {},
                    v = {},
                    _ = {},
                    b = 0,
                    w = "canceled",
                    x = {
                        readyState: 0,
                        getResponseHeader: function(t) {
                            var e;
                            if (2 === b) {
                                if (!u)
                                    for (u = {}; e = Ie.exec(a);) u[e[1].toLowerCase()] = e[2];
                                e = u[t.toLowerCase()]
                            }
                            return null == e ? null : e
                        },
                        getAllResponseHeaders: function() {
                            return 2 === b ? a : null
                        },
                        setRequestHeader: function(t, e) {
                            var i = t.toLowerCase();
                            return b || (t = _[i] = _[i] || t, v[t] = e), this
                        },
                        overrideMimeType: function(t) {
                            return b || (p.mimeType = t), this
                        },
                        statusCode: function(t) {
                            var e;
                            if (t)
                                if (2 > b)
                                    for (e in t) y[e] = [y[e], t[e]];
                                else x.always(t[x.status]);
                            return this
                        },
                        abort: function(t) {
                            var e = t || w;
                            return c && c.abort(e), n(0, e), this
                        }
                    };
                if (g.promise(x).complete = m.add, x.success = x.done, x.error = x.fail, p.url = ((t || p.url || De) + "").replace(Oe, "").replace(Me, Se[1] + "//"), p.type = i.method || i.type || p.method || p.type, p.dataTypes = ct.trim(p.dataType || "*").toLowerCase().match(pt) || [""], null == p.crossDomain && (o = ze.exec(p.url.toLowerCase()), p.crossDomain = !(!o || o[1] === Se[1] && o[2] === Se[2] && (o[3] || ("http:" === o[1] ? "80" : "443")) === (Se[3] || ("http:" === Se[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ct.param(p.data, p.traditional)), j(Fe, p, i, x), 2 === b) return x;
                h = p.global, h && 0 === ct.active++ && ct.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !Re.test(p.type), s = p.url, p.hasContent || (p.data && (s = p.url += (Le.test(s) ? "&" : "?") + p.data, delete p.data), p.cache === !1 && (p.url = Pe.test(s) ? s.replace(Pe, "$1_=" + je++) : s + (Le.test(s) ? "&" : "?") + "_=" + je++)), p.ifModified && (ct.lastModified[s] && x.setRequestHeader("If-Modified-Since", ct.lastModified[s]), ct.etag[s] && x.setRequestHeader("If-None-Match", ct.etag[s])), (p.data && p.hasContent && p.contentType !== !1 || i.contentType) && x.setRequestHeader("Content-Type", p.contentType), x.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + Be + "; q=0.01" : "") : p.accepts["*"]);
                for (r in p.headers) x.setRequestHeader(r, p.headers[r]);
                if (p.beforeSend && (p.beforeSend.call(d, x, p) === !1 || 2 === b)) return x.abort();
                w = "abort";
                for (r in {
                        success: 1,
                        error: 1,
                        complete: 1
                    }) x[r](p[r]);
                if (c = j(We, p, i, x)) {
                    x.readyState = 1, h && f.trigger("ajaxSend", [x, p]), p.async && p.timeout > 0 && (l = setTimeout(function() {
                        x.abort("timeout")
                    }, p.timeout));
                    try {
                        b = 1, c.send(v, n)
                    } catch (T) {
                        if (!(2 > b)) throw T;
                        n(-1, T)
                    }
                } else n(-1, "No Transport");
                return x
            },
            getJSON: function(t, e, i) {
                return ct.get(t, e, i, "json")
            },
            getScript: function(t, i) {
                return ct.get(t, e, i, "script")
            }
        }), ct.each(["get", "post"], function(t, i) {
            ct[i] = function(t, n, o, r) {
                return ct.isFunction(n) && (r = r || o, o = n, n = e), ct.ajax({
                    url: t,
                    type: i,
                    dataType: r,
                    data: n,
                    success: o
                })
            }
        }), ct.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return ct.globalEval(t), t
                }
            }
        }), ct.ajaxPrefilter("script", function(t) {
            t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
        }), ct.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var i, n = J.head || ct("head")[0] || J.documentElement;
                return {
                    send: function(e, o) {
                        i = J.createElement("script"), i.async = !0, t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(t, e) {
                            (e || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, i.parentNode && i.parentNode.removeChild(i), i = null, e || o(200, "success"))
                        }, n.insertBefore(i, n.firstChild)
                    },
                    abort: function() {
                        i && i.onload(e, !0)
                    }
                }
            }
        });
        var Xe = [],
            Ye = /(=)\?(?=&|$)|\?\?/;
        ct.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var t = Xe.pop() || ct.expando + "_" + je++;
                return this[t] = !0, t
            }
        }), ct.ajaxPrefilter("json jsonp", function(i, n, o) {
            var r, s, a, l = i.jsonp !== !1 && (Ye.test(i.url) ? "url" : "string" == typeof i.data && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Ye.test(i.data) && "data");
            return l || "jsonp" === i.dataTypes[0] ? (r = i.jsonpCallback = ct.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, l ? i[l] = i[l].replace(Ye, "$1" + r) : i.jsonp !== !1 && (i.url += (Le.test(i.url) ? "&" : "?") + i.jsonp + "=" + r), i.converters["script json"] = function() {
                return a || ct.error(r + " was not called"), a[0]
            }, i.dataTypes[0] = "json", s = t[r], t[r] = function() {
                a = arguments
            }, o.always(function() {
                t[r] = s, i[r] && (i.jsonpCallback = n.jsonpCallback, Xe.push(r)), a && ct.isFunction(s) && s(a[0]), a = s = e
            }), "script") : void 0
        });
        var Ve, Qe, Je = 0,
            Ke = t.ActiveXObject && function() {
                var t;
                for (t in Ve) Ve[t](e, !0)
            };
        ct.ajaxSettings.xhr = t.ActiveXObject ? function() {
            return !this.isLocal && I() || H()
        } : I, Qe = ct.ajaxSettings.xhr(), ct.support.cors = !!Qe && "withCredentials" in Qe, Qe = ct.support.ajax = !!Qe, Qe && ct.ajaxTransport(function(i) {
            if (!i.crossDomain || ct.support.cors) {
                var n;
                return {
                    send: function(o, r) {
                        var s, a, l = i.xhr();
                        if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields)
                            for (a in i.xhrFields) l[a] = i.xhrFields[a];
                        i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), i.crossDomain || o["X-Requested-With"] || (o["X-Requested-With"] = "XMLHttpRequest");
                        try {
                            for (a in o) l.setRequestHeader(a, o[a])
                        } catch (h) {}
                        l.send(i.hasContent && i.data || null), n = function(t, o) {
                            var a, h, c, u;
                            try {
                                if (n && (o || 4 === l.readyState))
                                    if (n = e, s && (l.onreadystatechange = ct.noop, Ke && delete Ve[s]), o) 4 !== l.readyState && l.abort();
                                    else {
                                        u = {}, a = l.status, h = l.getAllResponseHeaders(), "string" == typeof l.responseText && (u.text = l.responseText);
                                        try {
                                            c = l.statusText
                                        } catch (p) {
                                            c = ""
                                        }
                                        a || !i.isLocal || i.crossDomain ? 1223 === a && (a = 204) : a = u.text ? 200 : 404
                                    }
                            } catch (d) {
                                o || r(-1, d)
                            }
                            u && r(a, c, u, h)
                        }, i.async ? 4 === l.readyState ? setTimeout(n) : (s = ++Je, Ke && (Ve || (Ve = {}, ct(t).unload(Ke)), Ve[s] = n), l.onreadystatechange = n) : n()
                    },
                    abort: function() {
                        n && n(e, !0)
                    }
                }
            }
        });
        var Ge, Ze, ti = /^(?:toggle|show|hide)$/,
            ei = new RegExp("^(?:([+-])=|)(" + ut + ")([a-z%]*)$", "i"),
            ii = /queueHooks$/,
            ni = [F],
            oi = {
                "*": [function(t, e) {
                    var i = this.createTween(t, e),
                        n = i.cur(),
                        o = ei.exec(e),
                        r = o && o[3] || (ct.cssNumber[t] ? "" : "px"),
                        s = (ct.cssNumber[t] || "px" !== r && +n) && ei.exec(ct.css(i.elem, t)),
                        a = 1,
                        l = 20;
                    if (s && s[3] !== r) {
                        r = r || s[3], o = o || [], s = +n || 1;
                        do a = a || ".5", s /= a, ct.style(i.elem, t, s + r); while (a !== (a = i.cur() / n) && 1 !== a && --l)
                    }
                    return o && (s = i.start = +s || +n || 0, i.unit = r, i.end = o[1] ? s + (o[1] + 1) * o[2] : +o[2]), i
                }]
            };
        ct.Animation = ct.extend(z, {
            tweener: function(t, e) {
                ct.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
                for (var i, n = 0, o = t.length; o > n; n++) i = t[n], oi[i] = oi[i] || [], oi[i].unshift(e)
            },
            prefilter: function(t, e) {
                e ? ni.unshift(t) : ni.push(t)
            }
        }), ct.Tween = W, W.prototype = {
            constructor: W,
            init: function(t, e, i, n, o, r) {
                this.elem = t, this.prop = i, this.easing = o || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = r || (ct.cssNumber[i] ? "" : "px")
            },
            cur: function() {
                var t = W.propHooks[this.prop];
                return t && t.get ? t.get(this) : W.propHooks._default.get(this)
            },
            run: function(t) {
                var e, i = W.propHooks[this.prop];
                return this.options.duration ? this.pos = e = ct.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : W.propHooks._default.set(this), this
            }
        }, W.prototype.init.prototype = W.prototype, W.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = ct.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    ct.fx.step[t.prop] ? ct.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[ct.cssProps[t.prop]] || ct.cssHooks[t.prop]) ? ct.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        }, W.propHooks.scrollTop = W.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        }, ct.each(["toggle", "show", "hide"], function(t, e) {
            var i = ct.fn[e];
            ct.fn[e] = function(t, n, o) {
                return null == t || "boolean" == typeof t ? i.apply(this, arguments) : this.animate(B(e, !0), t, n, o)
            }
        }), ct.fn.extend({
            fadeTo: function(t, e, i, n) {
                return this.filter(T).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, i, n)
            },
            animate: function(t, e, i, n) {
                var o = ct.isEmptyObject(t),
                    r = ct.speed(e, i, n),
                    s = function() {
                        var e = z(this, ct.extend({}, t), r);
                        (o || ct._data(this, "finish")) && e.stop(!0)
                    };
                return s.finish = s, o || r.queue === !1 ? this.each(s) : this.queue(r.queue, s)
            },
            stop: function(t, i, n) {
                var o = function(t) {
                    var e = t.stop;
                    delete t.stop, e(n)
                };
                return "string" != typeof t && (n = i, i = t, t = e), i && t !== !1 && this.queue(t || "fx", []), this.each(function() {
                    var e = !0,
                        i = null != t && t + "queueHooks",
                        r = ct.timers,
                        s = ct._data(this);
                    if (i) s[i] && s[i].stop && o(s[i]);
                    else
                        for (i in s) s[i] && s[i].stop && ii.test(i) && o(s[i]);
                    for (i = r.length; i--;) r[i].elem !== this || null != t && r[i].queue !== t || (r[i].anim.stop(n), e = !1, r.splice(i, 1));
                    !e && n || ct.dequeue(this, t)
                })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"), this.each(function() {
                    var e, i = ct._data(this),
                        n = i[t + "queue"],
                        o = i[t + "queueHooks"],
                        r = ct.timers,
                        s = n ? n.length : 0;
                    for (i.finish = !0, ct.queue(this, t, []), o && o.stop && o.stop.call(this, !0), e = r.length; e--;) r[e].elem === this && r[e].queue === t && (r[e].anim.stop(!0), r.splice(e, 1));
                    for (e = 0; s > e; e++) n[e] && n[e].finish && n[e].finish.call(this);
                    delete i.finish
                })
            }
        }), ct.each({
            slideDown: B("show"),
            slideUp: B("hide"),
            slideToggle: B("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            ct.fn[t] = function(t, i, n) {
                return this.animate(e, t, i, n)
            }
        }), ct.speed = function(t, e, i) {
            var n = t && "object" == typeof t ? ct.extend({}, t) : {
                complete: i || !i && e || ct.isFunction(t) && t,
                duration: t,
                easing: i && e || e && !ct.isFunction(e) && e
            };
            return n.duration = ct.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in ct.fx.speeds ? ct.fx.speeds[n.duration] : ct.fx.speeds._default, null != n.queue && n.queue !== !0 || (n.queue = "fx"), n.old = n.complete, n.complete = function() {
                ct.isFunction(n.old) && n.old.call(this), n.queue && ct.dequeue(this, n.queue)
            }, n
        }, ct.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        }, ct.timers = [], ct.fx = W.prototype.init, ct.fx.tick = function() {
            var t, i = ct.timers,
                n = 0;
            for (Ge = ct.now(); n < i.length; n++) t = i[n], t() || i[n] !== t || i.splice(n--, 1);
            i.length || ct.fx.stop(), Ge = e
        }, ct.fx.timer = function(t) {
            t() && ct.timers.push(t) && ct.fx.start()
        }, ct.fx.interval = 13, ct.fx.start = function() {
            Ze || (Ze = setInterval(ct.fx.tick, ct.fx.interval))
        }, ct.fx.stop = function() {
            clearInterval(Ze), Ze = null
        }, ct.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        }, ct.fx.step = {}, ct.expr && ct.expr.filters && (ct.expr.filters.animated = function(t) {
            return ct.grep(ct.timers, function(e) {
                return t === e.elem
            }).length
        }), ct.fn.offset = function(t) {
            if (arguments.length) return t === e ? this : this.each(function(e) {
                ct.offset.setOffset(this, t, e)
            });
            var i, n, o = {
                    top: 0,
                    left: 0
                },
                r = this[0],
                s = r && r.ownerDocument;
            if (s) return i = s.documentElement, ct.contains(i, r) ? (typeof r.getBoundingClientRect !== V && (o = r.getBoundingClientRect()), n = U(s), {
                top: o.top + (n.pageYOffset || i.scrollTop) - (i.clientTop || 0),
                left: o.left + (n.pageXOffset || i.scrollLeft) - (i.clientLeft || 0)
            }) : o
        }, ct.offset = {
            setOffset: function(t, e, i) {
                var n = ct.css(t, "position");
                "static" === n && (t.style.position = "relative");
                var o, r, s = ct(t),
                    a = s.offset(),
                    l = ct.css(t, "top"),
                    h = ct.css(t, "left"),
                    c = ("absolute" === n || "fixed" === n) && ct.inArray("auto", [l, h]) > -1,
                    u = {},
                    p = {};
                c ? (p = s.position(), o = p.top, r = p.left) : (o = parseFloat(l) || 0, r = parseFloat(h) || 0), ct.isFunction(e) && (e = e.call(t, i, a)), null != e.top && (u.top = e.top - a.top + o), null != e.left && (u.left = e.left - a.left + r), "using" in e ? e.using.call(t, u) : s.css(u)
            }
        }, ct.fn.extend({
            position: function() {
                if (this[0]) {
                    var t, e, i = {
                            top: 0,
                            left: 0
                        },
                        n = this[0];
                    return "fixed" === ct.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ct.nodeName(t[0], "html") || (i = t.offset()), i.top += ct.css(t[0], "borderTopWidth", !0), i.left += ct.css(t[0], "borderLeftWidth", !0)), {
                        top: e.top - i.top - ct.css(n, "marginTop", !0),
                        left: e.left - i.left - ct.css(n, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || K; t && !ct.nodeName(t, "html") && "static" === ct.css(t, "position");) t = t.offsetParent;
                    return t || K
                })
            }
        }), ct.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, i) {
            var n = /Y/.test(i);
            ct.fn[t] = function(o) {
                return ct.access(this, function(t, o, r) {
                    var s = U(t);
                    return r === e ? s ? i in s ? s[i] : s.document.documentElement[o] : t[o] : void(s ? s.scrollTo(n ? ct(s).scrollLeft() : r, n ? r : ct(s).scrollTop()) : t[o] = r)
                }, t, o, arguments.length, null)
            }
        }), ct.each({
            Height: "height",
            Width: "width"
        }, function(t, i) {
            ct.each({
                padding: "inner" + t,
                content: i,
                "": "outer" + t
            }, function(n, o) {
                ct.fn[o] = function(o, r) {
                    var s = arguments.length && (n || "boolean" != typeof o),
                        a = n || (o === !0 || r === !0 ? "margin" : "border");
                    return ct.access(this, function(i, n, o) {
                        var r;
                        return ct.isWindow(i) ? i.document.documentElement["client" + t] : 9 === i.nodeType ? (r = i.documentElement, Math.max(i.body["scroll" + t], r["scroll" + t], i.body["offset" + t], r["offset" + t], r["client" + t])) : o === e ? ct.css(i, n, a) : ct.style(i, n, o, a)
                    }, i, s ? o : e, s, null)
                }
            })
        }), ct.fn.size = function() {
            return this.length
        }, ct.fn.andSelf = ct.fn.addBack, "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ct : (t.jQuery = t.$ = ct, "function" == typeof define && define.amd && define("jquery", [], function() {
            return ct
        }))
    }(window), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function(t) {
    "use strict";
    var e = t.fn.jquery.split(" ")[0].split(".");
    if (e[0] < 2 && e[1] < 9 || 1 == e[0] && 9 == e[1] && e[2] < 1 || e[0] > 2) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), + function(t) {
    "use strict";

    function e() {
        var t = document.createElement("bootstrap"),
            e = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
        for (var i in e)
            if (void 0 !== t.style[i]) return {
                end: e[i]
            };
        return !1
    }
    t.fn.emulateTransitionEnd = function(e) {
        var i = !1,
            n = this;
        t(this).one("bsTransitionEnd", function() {
            i = !0
        });
        var o = function() {
            i || t(n).trigger(t.support.transition.end)
        };
        return setTimeout(o, e), this
    }, t(function() {
        t.support.transition = e(), t.support.transition && (t.event.special.bsTransitionEnd = {
            bindType: t.support.transition.end,
            delegateType: t.support.transition.end,
            handle: function(e) {
                return t(e.target).is(this) ? e.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.alert");
            o || i.data("bs.alert", o = new n(this)), "string" == typeof e && o[e].call(i)
        })
    }
    var i = '[data-dismiss="alert"]',
        n = function(e) {
            t(e).on("click", i, this.close)
        };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 150, n.prototype.close = function(e) {
        function i() {
            s.detach().trigger("closed.bs.alert").remove()
        }
        var o = t(this),
            r = o.attr("data-target");
        r || (r = o.attr("href"), r = r && r.replace(/.*(?=#[^\s]*$)/, ""));
        var s = t(r);
        e && e.preventDefault(), s.length || (s = o.closest(".alert")), s.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (s.removeClass("in"), t.support.transition && s.hasClass("fade") ? s.one("bsTransitionEnd", i).emulateTransitionEnd(n.TRANSITION_DURATION) : i())
    };
    var o = t.fn.alert;
    t.fn.alert = e, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function() {
        return t.fn.alert = o, this
    }, t(document).on("click.bs.alert.data-api", i, n.prototype.close)
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.button"),
                r = "object" == typeof e && e;
            o || n.data("bs.button", o = new i(this, r)), "toggle" == e ? o.toggle() : e && o.setState(e);
        })
    }
    var i = function(e, n) {
        this.$element = t(e), this.options = t.extend({}, i.DEFAULTS, n), this.isLoading = !1
    };
    i.VERSION = "3.3.6", i.DEFAULTS = {
        loadingText: "loading..."
    }, i.prototype.setState = function(e) {
        var i = "disabled",
            n = this.$element,
            o = n.is("input") ? "val" : "html",
            r = n.data();
        e += "Text", null == r.resetText && n.data("resetText", n[o]()), setTimeout(t.proxy(function() {
            n[o](null == r[e] ? this.options[e] : r[e]), "loadingText" == e ? (this.isLoading = !0, n.addClass(i).attr(i, i)) : this.isLoading && (this.isLoading = !1, n.removeClass(i).removeAttr(i))
        }, this), 0)
    }, i.prototype.toggle = function() {
        var t = !0,
            e = this.$element.closest('[data-toggle="buttons"]');
        if (e.length) {
            var i = this.$element.find("input");
            "radio" == i.prop("type") ? (i.prop("checked") && (t = !1), e.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == i.prop("type") && (i.prop("checked") !== this.$element.hasClass("active") && (t = !1), this.$element.toggleClass("active")), i.prop("checked", this.$element.hasClass("active")), t && i.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var n = t.fn.button;
    t.fn.button = e, t.fn.button.Constructor = i, t.fn.button.noConflict = function() {
        return t.fn.button = n, this
    }, t(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(i) {
        var n = t(i.target);
        n.hasClass("btn") || (n = n.closest(".btn")), e.call(n, "toggle"), t(i.target).is('input[type="radio"]') || t(i.target).is('input[type="checkbox"]') || i.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(e) {
        t(e.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(e.type))
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.carousel"),
                r = t.extend({}, i.DEFAULTS, n.data(), "object" == typeof e && e),
                s = "string" == typeof e ? e : r.slide;
            o || n.data("bs.carousel", o = new i(this, r)), "number" == typeof e ? o.to(e) : s ? o[s]() : r.interval && o.pause().cycle()
        })
    }
    var i = function(e, i) {
        this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = i, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", t.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", t.proxy(this.pause, this)).on("mouseleave.bs.carousel", t.proxy(this.cycle, this))
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 600, i.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, i.prototype.keydown = function(t) {
        if (!/input|textarea/i.test(t.target.tagName)) {
            switch (t.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            t.preventDefault()
        }
    }, i.prototype.cycle = function(e) {
        return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
    }, i.prototype.getItemIndex = function(t) {
        return this.$items = t.parent().children(".item"), this.$items.index(t || this.$active)
    }, i.prototype.getItemForDirection = function(t, e) {
        var i = this.getItemIndex(e),
            n = "prev" == t && 0 === i || "next" == t && i == this.$items.length - 1;
        if (n && !this.options.wrap) return e;
        var o = "prev" == t ? -1 : 1,
            r = (i + o) % this.$items.length;
        return this.$items.eq(r)
    }, i.prototype.to = function(t) {
        var e = this,
            i = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return t > this.$items.length - 1 || 0 > t ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function() {
            e.to(t)
        }) : i == t ? this.pause().cycle() : this.slide(t > i ? "next" : "prev", this.$items.eq(t))
    }, i.prototype.pause = function(e) {
        return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, i.prototype.next = function() {
        return this.sliding ? void 0 : this.slide("next")
    }, i.prototype.prev = function() {
        return this.sliding ? void 0 : this.slide("prev")
    }, i.prototype.slide = function(e, n) {
        var o = this.$element.find(".item.active"),
            r = n || this.getItemForDirection(e, o),
            s = this.interval,
            a = "next" == e ? "left" : "right",
            l = this;
        if (r.hasClass("active")) return this.sliding = !1;
        var h = r[0],
            c = t.Event("slide.bs.carousel", {
                relatedTarget: h,
                direction: a
            });
        if (this.$element.trigger(c), !c.isDefaultPrevented()) {
            if (this.sliding = !0, s && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var u = t(this.$indicators.children()[this.getItemIndex(r)]);
                u && u.addClass("active")
            }
            var p = t.Event("slid.bs.carousel", {
                relatedTarget: h,
                direction: a
            });
            return t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, o.addClass(a), r.addClass(a), o.one("bsTransitionEnd", function() {
                r.removeClass([e, a].join(" ")).addClass("active"), o.removeClass(["active", a].join(" ")), l.sliding = !1, setTimeout(function() {
                    l.$element.trigger(p)
                }, 0)
            }).emulateTransitionEnd(i.TRANSITION_DURATION)) : (o.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger(p)), s && this.cycle(), this
        }
    };
    var n = t.fn.carousel;
    t.fn.carousel = e, t.fn.carousel.Constructor = i, t.fn.carousel.noConflict = function() {
        return t.fn.carousel = n, this
    };
    var o = function(i) {
        var n, o = t(this),
            r = t(o.attr("data-target") || (n = o.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""));
        if (r.hasClass("carousel")) {
            var s = t.extend({}, r.data(), o.data()),
                a = o.attr("data-slide-to");
            a && (s.interval = !1), e.call(r, s), a && r.data("bs.carousel").to(a), i.preventDefault()
        }
    };
    t(document).on("click.bs.carousel.data-api", "[data-slide]", o).on("click.bs.carousel.data-api", "[data-slide-to]", o), t(window).on("load", function() {
        t('[data-ride="carousel"]').each(function() {
            var i = t(this);
            e.call(i, i.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i, n = e.attr("data-target") || (i = e.attr("href")) && i.replace(/.*(?=#[^\s]+$)/, "");
        return t(n)
    }

    function i(e) {
        return this.each(function() {
            var i = t(this),
                o = i.data("bs.collapse"),
                r = t.extend({}, n.DEFAULTS, i.data(), "object" == typeof e && e);
            !o && r.toggle && /show|hide/.test(e) && (r.toggle = !1), o || i.data("bs.collapse", o = new n(this, r)), "string" == typeof e && o[e]()
        })
    }
    var n = function(e, i) {
        this.$element = t(e), this.options = t.extend({}, n.DEFAULTS, i), this.$trigger = t('[data-toggle="collapse"][href="#' + e.id + '"],[data-toggle="collapse"][data-target="#' + e.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    n.VERSION = "3.3.6", n.TRANSITION_DURATION = 350, n.DEFAULTS = {
        toggle: !0
    }, n.prototype.dimension = function() {
        var t = this.$element.hasClass("width");
        return t ? "width" : "height"
    }, n.prototype.show = function() {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var e, o = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(o && o.length && (e = o.data("bs.collapse"), e && e.transitioning))) {
                var r = t.Event("show.bs.collapse");
                if (this.$element.trigger(r), !r.isDefaultPrevented()) {
                    o && o.length && (i.call(o, "hide"), e || o.data("bs.collapse", null));
                    var s = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[s](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var a = function() {
                        this.$element.removeClass("collapsing").addClass("collapse in")[s](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!t.support.transition) return a.call(this);
                    var l = t.camelCase(["scroll", s].join("-"));
                    this.$element.one("bsTransitionEnd", t.proxy(a, this)).emulateTransitionEnd(n.TRANSITION_DURATION)[s](this.$element[0][l])
                }
            }
        }
    }, n.prototype.hide = function() {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var e = t.Event("hide.bs.collapse");
            if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                var i = this.dimension();
                this.$element[i](this.$element[i]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var o = function() {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return t.support.transition ? void this.$element[i](0).one("bsTransitionEnd", t.proxy(o, this)).emulateTransitionEnd(n.TRANSITION_DURATION) : o.call(this)
            }
        }
    }, n.prototype.toggle = function() {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, n.prototype.getParent = function() {
        return t(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(t.proxy(function(i, n) {
            var o = t(n);
            this.addAriaAndCollapsedClass(e(o), o)
        }, this)).end()
    }, n.prototype.addAriaAndCollapsedClass = function(t, e) {
        var i = t.hasClass("in");
        t.attr("aria-expanded", i), e.toggleClass("collapsed", !i).attr("aria-expanded", i)
    };
    var o = t.fn.collapse;
    t.fn.collapse = i, t.fn.collapse.Constructor = n, t.fn.collapse.noConflict = function() {
        return t.fn.collapse = o, this
    }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(n) {
        var o = t(this);
        o.attr("data-target") || n.preventDefault();
        var r = e(o),
            s = r.data("bs.collapse"),
            a = s ? "toggle" : o.data();
        i.call(r, a)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        var i = e.attr("data-target");
        i || (i = e.attr("href"), i = i && /#[A-Za-z]/.test(i) && i.replace(/.*(?=#[^\s]*$)/, ""));
        var n = i && t(i);
        return n && n.length ? n : e.parent()
    }

    function i(i) {
        i && 3 === i.which || (t(o).remove(), t(r).each(function() {
            var n = t(this),
                o = e(n),
                r = {
                    relatedTarget: this
                };
            o.hasClass("open") && (i && "click" == i.type && /input|textarea/i.test(i.target.tagName) && t.contains(o[0], i.target) || (o.trigger(i = t.Event("hide.bs.dropdown", r)), i.isDefaultPrevented() || (n.attr("aria-expanded", "false"), o.removeClass("open").trigger(t.Event("hidden.bs.dropdown", r)))))
        }))
    }

    function n(e) {
        return this.each(function() {
            var i = t(this),
                n = i.data("bs.dropdown");
            n || i.data("bs.dropdown", n = new s(this)), "string" == typeof e && n[e].call(i)
        })
    }
    var o = ".dropdown-backdrop",
        r = '[data-toggle="dropdown"]',
        s = function(e) {
            t(e).on("click.bs.dropdown", this.toggle)
        };
    s.VERSION = "3.3.6", s.prototype.toggle = function(n) {
        var o = t(this);
        if (!o.is(".disabled, :disabled")) {
            var r = e(o),
                s = r.hasClass("open");
            if (i(), !s) {
                "ontouchstart" in document.documentElement && !r.closest(".navbar-nav").length && t(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(t(this)).on("click", i);
                var a = {
                    relatedTarget: this
                };
                if (r.trigger(n = t.Event("show.bs.dropdown", a)), n.isDefaultPrevented()) return;
                o.trigger("focus").attr("aria-expanded", "true"), r.toggleClass("open").trigger(t.Event("shown.bs.dropdown", a))
            }
            return !1
        }
    }, s.prototype.keydown = function(i) {
        if (/(38|40|27|32)/.test(i.which) && !/input|textarea/i.test(i.target.tagName)) {
            var n = t(this);
            if (i.preventDefault(), i.stopPropagation(), !n.is(".disabled, :disabled")) {
                var o = e(n),
                    s = o.hasClass("open");
                if (!s && 27 != i.which || s && 27 == i.which) return 27 == i.which && o.find(r).trigger("focus"), n.trigger("click");
                var a = " li:not(.disabled):visible a",
                    l = o.find(".dropdown-menu" + a);
                if (l.length) {
                    var h = l.index(i.target);
                    38 == i.which && h > 0 && h--, 40 == i.which && h < l.length - 1 && h++, ~h || (h = 0), l.eq(h).trigger("focus")
                }
            }
        }
    };
    var a = t.fn.dropdown;
    t.fn.dropdown = n, t.fn.dropdown.Constructor = s, t.fn.dropdown.noConflict = function() {
        return t.fn.dropdown = a, this
    }, t(document).on("click.bs.dropdown.data-api", i).on("click.bs.dropdown.data-api", ".dropdown form", function(t) {
        t.stopPropagation()
    }).on("click.bs.dropdown.data-api", r, s.prototype.toggle).on("keydown.bs.dropdown.data-api", r, s.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", s.prototype.keydown)
}(jQuery), + function(t) {
    "use strict";

    function e(e, n) {
        return this.each(function() {
            var o = t(this),
                r = o.data("bs.modal"),
                s = t.extend({}, i.DEFAULTS, o.data(), "object" == typeof e && e);
            r || o.data("bs.modal", r = new i(this, s)), "string" == typeof e ? r[e](n) : s.show && r.show(n)
        })
    }
    var i = function(e, i) {
        this.options = i, this.$body = t(document.body), this.$element = t(e), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function() {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 300, i.BACKDROP_TRANSITION_DURATION = 150, i.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, i.prototype.toggle = function(t) {
        return this.isShown ? this.hide() : this.show(t)
    }, i.prototype.show = function(e) {
        var n = this,
            o = t.Event("show.bs.modal", {
                relatedTarget: e
            });
        this.$element.trigger(o), this.isShown || o.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function() {
            n.$element.one("mouseup.dismiss.bs.modal", function(e) {
                t(e.target).is(n.$element) && (n.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function() {
            var o = t.support.transition && n.$element.hasClass("fade");
            n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), n.adjustDialog(), o && n.$element[0].offsetWidth, n.$element.addClass("in"), n.enforceFocus();
            var r = t.Event("shown.bs.modal", {
                relatedTarget: e
            });
            o ? n.$dialog.one("bsTransitionEnd", function() {
                n.$element.trigger("focus").trigger(r)
            }).emulateTransitionEnd(i.TRANSITION_DURATION) : n.$element.trigger("focus").trigger(r)
        }))
    }, i.prototype.hide = function(e) {
        e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", t.proxy(this.hideModal, this)).emulateTransitionEnd(i.TRANSITION_DURATION) : this.hideModal())
    }, i.prototype.enforceFocus = function() {
        t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function(t) {
            this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
        }, this))
    }, i.prototype.escape = function() {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", t.proxy(function(t) {
            27 == t.which && this.hide()
        }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, i.prototype.resize = function() {
        this.isShown ? t(window).on("resize.bs.modal", t.proxy(this.handleUpdate, this)) : t(window).off("resize.bs.modal")
    }, i.prototype.hideModal = function() {
        var t = this;
        this.$element.hide(), this.backdrop(function() {
            t.$body.removeClass("modal-open"), t.resetAdjustments(), t.resetScrollbar(), t.$element.trigger("hidden.bs.modal")
        })
    }, i.prototype.removeBackdrop = function() {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, i.prototype.backdrop = function(e) {
        var n = this,
            o = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var r = t.support.transition && o;
            if (this.$backdrop = t(document.createElement("div")).addClass("modal-backdrop " + o).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function(t) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), r && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
            r ? this.$backdrop.one("bsTransitionEnd", e).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : e()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var s = function() {
                n.removeBackdrop(), e && e()
            };
            t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", s).emulateTransitionEnd(i.BACKDROP_TRANSITION_DURATION) : s()
        } else e && e()
    }, i.prototype.handleUpdate = function() {
        this.adjustDialog()
    }, i.prototype.adjustDialog = function() {
        var t = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && t ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !t ? this.scrollbarWidth : ""
        })
    }, i.prototype.resetAdjustments = function() {
        this.$element.css({
            paddingLeft: "",
            paddingRight: ""
        })
    }, i.prototype.checkScrollbar = function() {
        var t = window.innerWidth;
        if (!t) {
            var e = document.documentElement.getBoundingClientRect();
            t = e.right - Math.abs(e.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < t, this.scrollbarWidth = this.measureScrollbar()
    }, i.prototype.setScrollbar = function() {
        var t = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", t + this.scrollbarWidth)
    }, i.prototype.resetScrollbar = function() {
        this.$body.css("padding-right", this.originalBodyPad)
    }, i.prototype.measureScrollbar = function() {
        var t = document.createElement("div");
        t.className = "modal-scrollbar-measure", this.$body.append(t);
        var e = t.offsetWidth - t.clientWidth;
        return this.$body[0].removeChild(t), e
    };
    var n = t.fn.modal;
    t.fn.modal = e, t.fn.modal.Constructor = i, t.fn.modal.noConflict = function() {
        return t.fn.modal = n, this
    }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(i) {
        var n = t(this),
            o = n.attr("href"),
            r = t(n.attr("data-target") || o && o.replace(/.*(?=#[^\s]+$)/, "")),
            s = r.data("bs.modal") ? "toggle" : t.extend({
                remote: !/#/.test(o) && o
            }, r.data(), n.data());
        n.is("a") && i.preventDefault(), r.one("show.bs.modal", function(t) {
            t.isDefaultPrevented() || r.one("hidden.bs.modal", function() {
                n.is(":visible") && n.trigger("focus")
            })
        }), e.call(r, s, this)
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.tooltip"),
                r = "object" == typeof e && e;
            (o || !/destroy|hide/.test(e)) && (o || n.data("bs.tooltip", o = new i(this, r)), "string" == typeof e && o[e]())
        })
    }
    var i = function(t, e) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", t, e)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {
            selector: "body",
            padding: 0
        }
    }, i.prototype.init = function(e, i, n) {
        if (this.enabled = !0, this.type = e, this.$element = t(i), this.options = this.getOptions(n), this.$viewport = this.options.viewport && t(t.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var o = this.options.trigger.split(" "), r = o.length; r--;) {
            var s = o[r];
            if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
            else if ("manual" != s) {
                var a = "hover" == s ? "mouseenter" : "focusin",
                    l = "hover" == s ? "mouseleave" : "focusout";
                this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = t.extend({}, this.options, {
            trigger: "manual",
            selector: ""
        }) : this.fixTitle()
    }, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.getOptions = function(e) {
        return e = t.extend({}, this.getDefaults(), this.$element.data(), e), e.delay && "number" == typeof e.delay && (e.delay = {
            show: e.delay,
            hide: e.delay
        }), e
    }, i.prototype.getDelegateOptions = function() {
        var e = {},
            i = this.getDefaults();
        return this._options && t.each(this._options, function(t, n) {
            i[t] != n && (e[t] = n)
        }), e
    }, i.prototype.enter = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusin" == e.type ? "focus" : "hover"] = !0), i.tip().hasClass("in") || "in" == i.hoverState ? void(i.hoverState = "in") : (clearTimeout(i.timeout), i.hoverState = "in", i.options.delay && i.options.delay.show ? void(i.timeout = setTimeout(function() {
            "in" == i.hoverState && i.show()
        }, i.options.delay.show)) : i.show())
    }, i.prototype.isInStateTrue = function() {
        for (var t in this.inState)
            if (this.inState[t]) return !0;
        return !1
    }, i.prototype.leave = function(e) {
        var i = e instanceof this.constructor ? e : t(e.currentTarget).data("bs." + this.type);
        return i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i)), e instanceof t.Event && (i.inState["focusout" == e.type ? "focus" : "hover"] = !1), i.isInStateTrue() ? void 0 : (clearTimeout(i.timeout), i.hoverState = "out", i.options.delay && i.options.delay.hide ? void(i.timeout = setTimeout(function() {
            "out" == i.hoverState && i.hide()
        }, i.options.delay.hide)) : i.hide())
    }, i.prototype.show = function() {
        var e = t.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(e);
            var n = t.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (e.isDefaultPrevented() || !n) return;
            var o = this,
                r = this.tip(),
                s = this.getUID(this.type);
            this.setContent(), r.attr("id", s), this.$element.attr("aria-describedby", s), this.options.animation && r.addClass("fade");
            var a = "function" == typeof this.options.placement ? this.options.placement.call(this, r[0], this.$element[0]) : this.options.placement,
                l = /\s?auto?\s?/i,
                h = l.test(a);
            h && (a = a.replace(l, "") || "top"), r.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(a).data("bs." + this.type, this), this.options.container ? r.appendTo(this.options.container) : r.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var c = this.getPosition(),
                u = r[0].offsetWidth,
                p = r[0].offsetHeight;
            if (h) {
                var d = a,
                    f = this.getPosition(this.$viewport);
                a = "bottom" == a && c.bottom + p > f.bottom ? "top" : "top" == a && c.top - p < f.top ? "bottom" : "right" == a && c.right + u > f.width ? "left" : "left" == a && c.left - u < f.left ? "right" : a, r.removeClass(d).addClass(a)
            }
            var g = this.getCalculatedOffset(a, c, u, p);
            this.applyPlacement(g, a);
            var m = function() {
                var t = o.hoverState;
                o.$element.trigger("shown.bs." + o.type), o.hoverState = null, "out" == t && o.leave(o)
            };
            t.support.transition && this.$tip.hasClass("fade") ? r.one("bsTransitionEnd", m).emulateTransitionEnd(i.TRANSITION_DURATION) : m()
        }
    }, i.prototype.applyPlacement = function(e, i) {
        var n = this.tip(),
            o = n[0].offsetWidth,
            r = n[0].offsetHeight,
            s = parseInt(n.css("margin-top"), 10),
            a = parseInt(n.css("margin-left"), 10);
        isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top += s, e.left += a, t.offset.setOffset(n[0], t.extend({
            using: function(t) {
                n.css({
                    top: Math.round(t.top),
                    left: Math.round(t.left)
                })
            }
        }, e), 0), n.addClass("in");
        var l = n[0].offsetWidth,
            h = n[0].offsetHeight;
        "top" == i && h != r && (e.top = e.top + r - h);
        var c = this.getViewportAdjustedDelta(i, e, l, h);
        c.left ? e.left += c.left : e.top += c.top;
        var u = /top|bottom/.test(i),
            p = u ? 2 * c.left - o + l : 2 * c.top - r + h,
            d = u ? "offsetWidth" : "offsetHeight";
        n.offset(e), this.replaceArrow(p, n[0][d], u)
    }, i.prototype.replaceArrow = function(t, e, i) {
        this.arrow().css(i ? "left" : "top", 50 * (1 - t / e) + "%").css(i ? "top" : "left", "")
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle();
        t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
    }, i.prototype.hide = function(e) {
        function n() {
            "in" != o.hoverState && r.detach(), o.$element.removeAttr("aria-describedby").trigger("hidden.bs." + o.type), e && e()
        }
        var o = this,
            r = t(this.$tip),
            s = t.Event("hide.bs." + this.type);
        return this.$element.trigger(s), s.isDefaultPrevented() ? void 0 : (r.removeClass("in"), t.support.transition && r.hasClass("fade") ? r.one("bsTransitionEnd", n).emulateTransitionEnd(i.TRANSITION_DURATION) : n(), this.hoverState = null, this)
    }, i.prototype.fixTitle = function() {
        var t = this.$element;
        (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
    }, i.prototype.hasContent = function() {
        return this.getTitle()
    }, i.prototype.getPosition = function(e) {
        e = e || this.$element;
        var i = e[0],
            n = "BODY" == i.tagName,
            o = i.getBoundingClientRect();
        null == o.width && (o = t.extend({}, o, {
            width: o.right - o.left,
            height: o.bottom - o.top
        }));
        var r = n ? {
                top: 0,
                left: 0
            } : e.offset(),
            s = {
                scroll: n ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop()
            },
            a = n ? {
                width: t(window).width(),
                height: t(window).height()
            } : null;
        return t.extend({}, o, s, a, r)
    }, i.prototype.getCalculatedOffset = function(t, e, i, n) {
        return "bottom" == t ? {
            top: e.top + e.height,
            left: e.left + e.width / 2 - i / 2
        } : "top" == t ? {
            top: e.top - n,
            left: e.left + e.width / 2 - i / 2
        } : "left" == t ? {
            top: e.top + e.height / 2 - n / 2,
            left: e.left - i
        } : {
            top: e.top + e.height / 2 - n / 2,
            left: e.left + e.width
        }
    }, i.prototype.getViewportAdjustedDelta = function(t, e, i, n) {
        var o = {
            top: 0,
            left: 0
        };
        if (!this.$viewport) return o;
        var r = this.options.viewport && this.options.viewport.padding || 0,
            s = this.getPosition(this.$viewport);
        if (/right|left/.test(t)) {
            var a = e.top - r - s.scroll,
                l = e.top + r - s.scroll + n;
            a < s.top ? o.top = s.top - a : l > s.top + s.height && (o.top = s.top + s.height - l)
        } else {
            var h = e.left - r,
                c = e.left + r + i;
            h < s.left ? o.left = s.left - h : c > s.right && (o.left = s.left + s.width - c)
        }
        return o
    }, i.prototype.getTitle = function() {
        var t, e = this.$element,
            i = this.options;
        return t = e.attr("data-original-title") || ("function" == typeof i.title ? i.title.call(e[0]) : i.title)
    }, i.prototype.getUID = function(t) {
        do t += ~~(1e6 * Math.random()); while (document.getElementById(t));
        return t
    }, i.prototype.tip = function() {
        if (!this.$tip && (this.$tip = t(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, i.prototype.enable = function() {
        this.enabled = !0
    }, i.prototype.disable = function() {
        this.enabled = !1
    }, i.prototype.toggleEnabled = function() {
        this.enabled = !this.enabled
    }, i.prototype.toggle = function(e) {
        var i = this;
        e && (i = t(e.currentTarget).data("bs." + this.type), i || (i = new this.constructor(e.currentTarget, this.getDelegateOptions()), t(e.currentTarget).data("bs." + this.type, i))), e ? (i.inState.click = !i.inState.click, i.isInStateTrue() ? i.enter(i) : i.leave(i)) : i.tip().hasClass("in") ? i.leave(i) : i.enter(i)
    }, i.prototype.destroy = function() {
        var t = this;
        clearTimeout(this.timeout), this.hide(function() {
            t.$element.off("." + t.type).removeData("bs." + t.type), t.$tip && t.$tip.detach(), t.$tip = null, t.$arrow = null, t.$viewport = null
        })
    };
    var n = t.fn.tooltip;
    t.fn.tooltip = e, t.fn.tooltip.Constructor = i, t.fn.tooltip.noConflict = function() {
        return t.fn.tooltip = n, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.popover"),
                r = "object" == typeof e && e;
            (o || !/destroy|hide/.test(e)) && (o || n.data("bs.popover", o = new i(this, r)), "string" == typeof e && o[e]())
        })
    }
    var i = function(t, e) {
        this.init("popover", t, e)
    };
    if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
    i.VERSION = "3.3.6", i.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), i.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), i.prototype.constructor = i, i.prototype.getDefaults = function() {
        return i.DEFAULTS
    }, i.prototype.setContent = function() {
        var t = this.tip(),
            e = this.getTitle(),
            i = this.getContent();
        t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof i ? "html" : "append" : "text"](i), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
    }, i.prototype.hasContent = function() {
        return this.getTitle() || this.getContent()
    }, i.prototype.getContent = function() {
        var t = this.$element,
            e = this.options;
        return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
    }, i.prototype.arrow = function() {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var n = t.fn.popover;
    t.fn.popover = e, t.fn.popover.Constructor = i, t.fn.popover.noConflict = function() {
        return t.fn.popover = n, this
    }
}(jQuery), + function(t) {
    "use strict";

    function e(i, n) {
        this.$body = t(document.body), this.$scrollElement = t(t(i).is(document.body) ? window : i), this.options = t.extend({}, e.DEFAULTS, n), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", t.proxy(this.process, this)), this.refresh(), this.process()
    }

    function i(i) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.scrollspy"),
                r = "object" == typeof i && i;
            o || n.data("bs.scrollspy", o = new e(this, r)), "string" == typeof i && o[i]()
        })
    }
    e.VERSION = "3.3.6", e.DEFAULTS = {
        offset: 10
    }, e.prototype.getScrollHeight = function() {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, e.prototype.refresh = function() {
        var e = this,
            i = "offset",
            n = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), t.isWindow(this.$scrollElement[0]) || (i = "position", n = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function() {
            var e = t(this),
                o = e.data("target") || e.attr("href"),
                r = /^#./.test(o) && t(o);
            return r && r.length && r.is(":visible") && [
                [r[i]().top + n, o]
            ] || null
        }).sort(function(t, e) {
            return t[0] - e[0]
        }).each(function() {
            e.offsets.push(this[0]), e.targets.push(this[1])
        })
    }, e.prototype.process = function() {
        var t, e = this.$scrollElement.scrollTop() + this.options.offset,
            i = this.getScrollHeight(),
            n = this.options.offset + i - this.$scrollElement.height(),
            o = this.offsets,
            r = this.targets,
            s = this.activeTarget;
        if (this.scrollHeight != i && this.refresh(), e >= n) return s != (t = r[r.length - 1]) && this.activate(t);
        if (s && e < o[0]) return this.activeTarget = null, this.clear();
        for (t = o.length; t--;) s != r[t] && e >= o[t] && (void 0 === o[t + 1] || e < o[t + 1]) && this.activate(r[t])
    }, e.prototype.activate = function(e) {
        this.activeTarget = e, this.clear();
        var i = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
            n = t(i).parents("li").addClass("active");
        n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")), n.trigger("activate.bs.scrollspy")
    }, e.prototype.clear = function() {
        t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var n = t.fn.scrollspy;
    t.fn.scrollspy = i, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function() {
        return t.fn.scrollspy = n, this
    }, t(window).on("load.bs.scrollspy.data-api", function() {
        t('[data-spy="scroll"]').each(function() {
            var e = t(this);
            i.call(e, e.data())
        })
    })
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.tab");
            o || n.data("bs.tab", o = new i(this)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e) {
        this.element = t(e)
    };
    i.VERSION = "3.3.6", i.TRANSITION_DURATION = 150, i.prototype.show = function() {
        var e = this.element,
            i = e.closest("ul:not(.dropdown-menu)"),
            n = e.data("target");
        if (n || (n = e.attr("href"), n = n && n.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
            var o = i.find(".active:last a"),
                r = t.Event("hide.bs.tab", {
                    relatedTarget: e[0]
                }),
                s = t.Event("show.bs.tab", {
                    relatedTarget: o[0]
                });
            if (o.trigger(r), e.trigger(s), !s.isDefaultPrevented() && !r.isDefaultPrevented()) {
                var a = t(n);
                this.activate(e.closest("li"), i), this.activate(a, a.parent(), function() {
                    o.trigger({
                        type: "hidden.bs.tab",
                        relatedTarget: e[0]
                    }), e.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: o[0]
                    })
                })
            }
        }
    }, i.prototype.activate = function(e, n, o) {
        function r() {
            s.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), e.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), a ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu").length && e.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), o && o()
        }
        var s = n.find("> .active"),
            a = o && t.support.transition && (s.length && s.hasClass("fade") || !!n.find("> .fade").length);
        s.length && a ? s.one("bsTransitionEnd", r).emulateTransitionEnd(i.TRANSITION_DURATION) : r(), s.removeClass("in")
    };
    var n = t.fn.tab;
    t.fn.tab = e, t.fn.tab.Constructor = i, t.fn.tab.noConflict = function() {
        return t.fn.tab = n, this
    };
    var o = function(i) {
        i.preventDefault(), e.call(t(this), "show")
    };
    t(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', o).on("click.bs.tab.data-api", '[data-toggle="pill"]', o);
}(jQuery), + function(t) {
    "use strict";

    function e(e) {
        return this.each(function() {
            var n = t(this),
                o = n.data("bs.affix"),
                r = "object" == typeof e && e;
            o || n.data("bs.affix", o = new i(this, r)), "string" == typeof e && o[e]()
        })
    }
    var i = function(e, n) {
        this.options = t.extend({}, i.DEFAULTS, n), this.$target = t(this.options.target).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(e), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    i.VERSION = "3.3.6", i.RESET = "affix affix-top affix-bottom", i.DEFAULTS = {
        offset: 0,
        target: window
    }, i.prototype.getState = function(t, e, i, n) {
        var o = this.$target.scrollTop(),
            r = this.$element.offset(),
            s = this.$target.height();
        if (null != i && "top" == this.affixed) return i > o ? "top" : !1;
        if ("bottom" == this.affixed) return null != i ? o + this.unpin <= r.top ? !1 : "bottom" : t - n >= o + s ? !1 : "bottom";
        var a = null == this.affixed,
            l = a ? o : r.top,
            h = a ? s : e;
        return null != i && i >= o ? "top" : null != n && l + h >= t - n ? "bottom" : !1
    }, i.prototype.getPinnedOffset = function() {
        if (this.pinnedOffset) return this.pinnedOffset;
        this.$element.removeClass(i.RESET).addClass("affix");
        var t = this.$target.scrollTop(),
            e = this.$element.offset();
        return this.pinnedOffset = e.top - t
    }, i.prototype.checkPositionWithEventLoop = function() {
        setTimeout(t.proxy(this.checkPosition, this), 1)
    }, i.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var e = this.$element.height(),
                n = this.options.offset,
                o = n.top,
                r = n.bottom,
                s = Math.max(t(document).height(), t(document.body).height());
            "object" != typeof n && (r = o = n), "function" == typeof o && (o = n.top(this.$element)), "function" == typeof r && (r = n.bottom(this.$element));
            var a = this.getState(s, e, o, r);
            if (this.affixed != a) {
                null != this.unpin && this.$element.css("top", "");
                var l = "affix" + (a ? "-" + a : ""),
                    h = t.Event(l + ".bs.affix");
                if (this.$element.trigger(h), h.isDefaultPrevented()) return;
                this.affixed = a, this.unpin = "bottom" == a ? this.getPinnedOffset() : null, this.$element.removeClass(i.RESET).addClass(l).trigger(l.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == a && this.$element.offset({
                top: s - e - r
            })
        }
    };
    var n = t.fn.affix;
    t.fn.affix = e, t.fn.affix.Constructor = i, t.fn.affix.noConflict = function() {
        return t.fn.affix = n, this
    }, t(window).on("load", function() {
        t('[data-spy="affix"]').each(function() {
            var i = t(this),
                n = i.data();
            n.offset = n.offset || {}, null != n.offsetBottom && (n.offset.bottom = n.offsetBottom), null != n.offsetTop && (n.offset.top = n.offsetTop), e.call(i, n)
        })
    })
}(jQuery),
function(t, e) {
    "use strict";
    var i = {},
        n = (e(t), t.navigator),
        o = (n.userAgent, t.document),
        r = (e(o), o.body),
        s = (e(r), o.getElementsByTagName("html")[0]),
        a = e(s),
        l = t.Object,
        h = t.Array;
    (function() {
        var t, e = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/,
            i = o.getElementsByTagName("script")[0].style;
        for (t in i)
            if (e.test(t)) return t.match(e)[0].toLowerCase();
        return "WebkitOpacity" in i ? "webkit" : "KhtmlOpacity" in i ? "khtml" : ""
    })();
    i.util = {
        isArray: function() {
            return "function" == typeof h.isArray ? h.isArray : function(t) {
                if (void 0 === t) throw new Error('"ch.util.isArray(obj)": It must receive a parameter.');
                return "[object Array]" === l.prototype.toString.call(t)
            }
        }(),
        isUrl: function(t) {
            return void 0 === t || "string" != typeof t ? !1 : /^(((https|http|ftp|file):\/\/)|www\.|\.\/|(\.\.\/)+|(\/{1,2})|(\d{1,3}\.){3}\d{1,3})(((\w+|-)(\.?)(\/?))+)(\:\d{1,5}){0,1}(((\w+|-)(\.?)(\/?)(#?))+)((\?)(\w+=(\w?)+(&?))+)?(\w+#\w+)?$/.test(t)
        },
        is$: function() {
            return void 0 === e.zepto ? function(t) {
                return t instanceof e
            } : function(t) {
                return e.zepto.isZ(t)
            }
        }(),
        avoidTextSelection: function() {
            var t = arguments,
                i = arguments.length,
                n = 0;
            if (arguments.length < 1) throw new Error('"ch.util.avoidTextSelection(selector);": The selector parameter is required.');
            for (n; i > n; n += 1) {
                if (!(t[n] instanceof e || e.zepto.isZ(t[n]))) throw new Error('"ch.util.avoidTextSelection(selector);": The parameter must be a jQuery or Zepto selector.');
                a.hasClass("lt-ie10") ? t[n].attr("unselectable", "on") : t[n].addClass("ch-user-no-select")
            }
        },
        getStyles: function(e, i) {
            if (void 0 === e || 1 !== e.nodeType) throw new Error('"ch.util.getStyles(el, prop)": The "el" parameter is required and must be a HTMLElement.');
            if (void 0 === i || "string" != typeof i) throw new Error('"ch.util.getStyles(el, prop)": The "prop" parameter is required and must be a string.');
            return t.getComputedStyle ? t.getComputedStyle(e, "").getPropertyValue(i) : (i = i.replace(/\-(\w)/g, function(t, e) {
                return e.toUpperCase()
            }), e.currentStyle[i])
        },
        clone: function(t) {
            if (void 0 === t || "object" != typeof t) throw new Error('"ch.util.clone(obj)": The "obj" parameter is required and must be a object.');
            var e, i = {};
            for (e in t) void 0 !== t[e] && (i[e] = t[e]);
            return i
        },
        inherits: function(t, i) {
            if (void 0 === t || "function" != typeof t) throw new Error('"ch.util.inherits(obj, superConstructor)": The "obj" parameter is required and must be a constructor function.');
            if (void 0 === i || "function" != typeof i) throw new Error('"ch.util.inherits(obj, superConstructor)": The "superConstructor" parameter is required and must be a constructor function.');
            var n = t.prototype || {};
            return t.prototype = e.extend(n, i.prototype), i.prototype
        },
        prevent: function(t) {
            "object" == typeof t && t.preventDefault()
        },
        getScroll: function() {
            return {
                left: t.pageXOffset || o.documentElement.scrollLeft || 0,
                top: t.pageYOffset || o.documentElement.scrollTop || 0
            }
        },
        getOuterDimensions: function(t) {
            var e = t.getBoundingClientRect();
            return {
                width: e.right - e.left,
                height: e.bottom - e.top
            }
        },
        getOffset: function(t) {
            var e = t.getBoundingClientRect(),
                n = i.util.getScroll(),
                o = {
                    left: e.left,
                    top: e.top
                };
            return "fixed" !== i.util.getStyles(t, "position") && "fixed" !== i.util.getStyles(t.offsetParent, "position") && (o.left += n.left, o.top += n.top), o
        },
        VENDOR_PREFIX: function() {
            var t, e = /^(Webkit|Khtml|Moz|ms|O)(?=[A-Z])/,
                i = o.getElementsByTagName("script")[0].style;
            for (t in i)
                if (e.test(t)) return t.match(e)[0].toLowerCase();
            return "WebkitOpacity" in i ? "webkit" : "KhtmlOpacity" in i ? "khtml" : ""
        }(),
        zIndex: 1e3
    }, i.support = {
        transition: void 0 !== r.style.WebkitTransition || void 0 !== r.style.MozTransition || void 0 !== r.style.MSTransition || void 0 !== r.style.OTransition || void 0 !== r.style.transition,
        fx: !!e.fn.slideDown,
        touch: "createTouch" in o
    }, i.onlayoutchange = "layoutchange", i.onresize = "resize", i.onscroll = "scroll", i.onpointerdown = i.support.touch ? "touchstart" : "mousedown", i.onpointerup = i.support.touch ? "touchend" : "mouseup", i.onpointermove = i.support.touch ? "touchmove" : "mousemove", i.onpointertap = i.support.touch ? "touchend" : "click", i.onpointerenter = i.support.touch ? "touchstart" : "mouseenter", i.onpointerleave = i.support.touch ? "touchend" : "mouseleave", i.onkeyinput = "oninput" in o.createElement("input") ? "input" : "keydown", i.onkeytab = "tab", i.onkeyenter = "enter", i.onkeyesc = "esc", i.onkeyleftarrow = "left_arrow", i.onkeyuparrow = "up_arrow", i.onkeyrightarrow = "right_arrow", i.onkeydownarrow = "down_arrow", i.onkeybackspace = "backspace", i.factory = function(t, n) {
        var o = t.prototype.name,
            r = t.prototype._preset || o;
        i[o.charAt(0).toUpperCase() + o.substr(1)] = t, e[o] = function(e, i) {
            return new t(e, i)
        }, e.fn[o] = function(i) {
            var o = [];
            return i = void 0 !== n ? n.apply(this, arguments) : i, e.each(this, function() {
                var n = e(this),
                    s = n.data(r);
                void 0 === s ? (s = new t(n, i), n.data(r, s)) : void 0 !== s.emit && s.emit("exist", i), o.push(s)
            }), o.length > 1 ? o : o[0]
        }
    }, a.removeClass("no-js"), i.$ = e, t.ch = i
}(this, jQuery),
function(t) {
    "use strict";

    function e() {}
    e.prototype.on = function(t, e, i) {
        if (void 0 === t) throw new Error('ch.EventEmitter - "on(event, listener)": It should receive an event.');
        if (void 0 === e) throw new Error('ch.EventEmitter - "on(event, listener)": It should receive a listener function.');
        return this._eventsCollection = this._eventsCollection || {}, e.once = i || !1, void 0 === this._eventsCollection[t] && (this._eventsCollection[t] = []), this._eventsCollection[t].push(e), this
    }, e.prototype.once = function(t, e) {
        return this.on(t, e, !0), this
    }, e.prototype.off = function(t, e) {
        if (void 0 === t) throw new Error('EventEmitter - "off(event, listener)": It should receive an event.');
        if (void 0 === e) throw new Error('EventEmitter - "off(event, listener)": It should receive a listener function.');
        var i, n = this._eventsCollection[t],
            o = 0;
        if (void 0 !== n)
            for (i = n.length, o; i > o; o += 1)
                if (n[o] === e) {
                    n.splice(o, 1);
                    break
                }
        return this
    }, e.prototype.getListeners = function(t) {
        if (void 0 === t) throw new Error('ch.EventEmitter - "getListeners(event)": It should receive an event.');
        return this._eventsCollection[t]
    }, e.prototype.emit = function() {
        var t, e, i = Array.prototype.slice.call(arguments, 0),
            n = i.shift(),
            o = 0;
        if (void 0 === n) throw new Error('ch.EventEmitter - "emit(event)": It should receive an event.');
        if ("string" == typeof n && (n = {
                type: n
            }), n.target || (n.target = this), void 0 !== this._eventsCollection && void 0 !== this._eventsCollection[n.type])
            for (t = this._eventsCollection[n.type], e = t.length, o; e > o; o += 1) t[o].apply(this, i), t[o].once && (this.off(n.type, t[o]), e -= 1, o -= 1);
        return this
    }, t.EventEmitter = e
}(this.ch),
function(t, e) {
    "use strict";

    function i() {
        function i(t) {
            r._$content.html(t.response), r.emit("_contentchange"), r.emit("content" + t.status, t)
        }

        function n(t) {
            r._$content.html(t), r._options.cache = !0, r.emit("_contentchange"), r.emit("contentdone")
        }

        function o(e, n) {
            n = t.extend({
                method: "GET",
                params: "",
                async: !0,
                waiting: '<div class="ch-loading-big"></div>'
            }, n || s), void 0 !== n.cache && (r._options.cache = n.cache), i({
                status: "waiting",
                response: n.waiting
            }), t.ajax({
                url: e,
                type: n.method,
                data: "x=x" + ("" !== n.params ? "&" + n.params : ""),
                cache: r._options.cache,
                async: n.async,
                beforeSend: function(t) {
                    t.setRequestHeader("X-Requested-With", "XMLHttpRequest")
                },
                success: function(t) {
                    i({
                        status: "done",
                        response: t
                    })
                },
                error: function(t, e, n) {
                    i({
                        status: "error",
                        response: "<p>Error on ajax call.</p>",
                        data: {
                            jqXHR: t,
                            textStatus: e,
                            errorThrown: n
                        }
                    })
                }
            })
        }
        var r = this,
            s = {
                method: this._options.method,
                params: this._options.params,
                cache: this._options.cache,
                async: this._options.async,
                waiting: this._options.waiting
            };
        this.content = function(i, s) {
            return void 0 === i ? r._$content.html() : (r._options.content = i, void 0 === r._options.cache && (r._options.cache = !0), "string" == typeof i ? e.util.isUrl(i) ? o(i, s) : n(i) : (e.util.is$(i) || void 0 !== i.nodeType) && n(t(i).remove(null, !0).removeClass("ch-hide")), r)
        }, this.once("_show", function() {
            r.content(r._options.content), r.on("show", function() {
                r._options.cache || r.content(r._options.content)
            })
        })
    }
    e.Content = i
}(this.ch.$, this.ch),
function(t) {
    "use strict";

    function e() {
        function e() {
            o.$container.removeClass("ch-hide").attr("aria-hidden", "false"), o.emit("show")
        }

        function n() {
            o.$container.addClass("ch-hide").attr("aria-hidden", "true"), o.emit("hide")
        }
        var o = this,
            r = "ch-" + this.name + "-trigger-on",
            s = this._options.fx,
            a = t.support.fx && "none" !== s && s !== !1;
        this._shown = !1, this._show = function() {
            return o._shown = !0, void 0 !== o.$trigger && o.$trigger.addClass(r), a ? o.$container[s]("fast", e) : e(), o.emit("_show"), o
        }, this._hide = function() {
            return o._shown = !1, void 0 !== o.$trigger && o.$trigger.removeClass(r), a ? o.$container[i[s]]("fast", n) : n(), o
        }, this._toggle = function() {
            return o._shown ? o.hide() : o.show(), o
        }, this.on("disable", this.hide)
    }
    var i = {
        slideDown: "slideUp",
        slideUp: "slideDown",
        fadeIn: "fadeOut",
        fadeOut: "fadeIn"
    };
    t.Collapsible = e
}(this.ch),
function(t, e, i) {
    "use strict";

    function n() {
        var t = s ? i.onresize : i.onscroll;
        this.refresh(), s = !1, a = !1, this.emit(t)
    }

    function o() {
        this._init()
    }
    var r = e(t),
        s = !1,
        a = !1,
        l = function() {
            return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(e) {
                t.setTimeout(e, 1e3 / 60)
            }
        }();
    i.util.inherits(o, i.EventEmitter), o.prototype._init = function() {
        var t = this;
        this.$el = r, this.refresh(), r.on(i.onresize + ".viewport", function() {
            s || (s = !0, l(function() {
                n.call(t)
            }))
        }).on(i.onscroll + ".viewport", function() {
            a || (a = !0, l(function() {
                n.call(t)
            }))
        })
    }, o.prototype.calculateClientRect = function() {
        return this.top = this.left = 0, this.bottom = this.$el.height(), this.right = this.$el.width(), this
    }, o.prototype.calculateDimensions = function() {
        return this.calculateClientRect(), this.height = this.bottom, this.width = this.right, this
    }, o.prototype.calculateOffset = function() {
        var t = i.util.getScroll();
        return this.offsetTop = t.top, this.offsetLeft = t.left, this.offsetRight = this.left + this.width, this.offsetBottom = this.offsetTop + this.height, this
    }, o.prototype.calculateOrientation = function() {
        return this.orientation = 90 === Math.abs(this.$el.orientation) ? "landscape" : "portrait", this
    }, o.prototype.inViewport = function(t) {
        var e = t.getBoundingClientRect();
        return e.top > 0 && e.right < this.width && e.bottom < this.height && e.left > 0
    }, o.prototype.isVisible = function(t) {
        var e = t.getBoundingClientRect();
        return e.height >= this.offsetTop
    }, o.prototype.refresh = function() {
        return this.calculateDimensions(), this.calculateOffset(), this.calculateOrientation(), this
    }, i.viewport = new o
}(this, this.ch.$, this.ch),
function(t, e, i) {
    "use strict";

    function n(e) {
        if (void 0 === e) throw new t.Error("ch.Positioner: Expected options defined.");
        this._options = i.util.clone(this._defaults), this._configure(e)
    }
    n.prototype.name = "positioner", n.prototype._constructor = n, n.prototype._defaults = {
        offsetX: 0,
        offsetY: 0,
        side: "center",
        align: "center",
        reference: i.viewport,
        position: "fixed"
    }, n.prototype._configure = function(t) {
        return e.extend(this._options, t), this._options.offsetX = parseInt(this._options.offsetX, 10), this._options.offsetY = parseInt(this._options.offsetY, 10), this.$target = t.target || this.$target, this.$reference = t.reference || this.$reference, this._reference = this._options.reference, this.$target.css("position", this._options.position), this
    }, n.prototype.refresh = function(t) {
        return void 0 !== t && this._configure(t), this._reference !== i.viewport && this._calculateReference(), this._calculateTarget(), this._setPoint(), this
    }, n.prototype._calculateReference = function() {
        var t, e = this.$reference[0];
        return e.setAttribute("data-side", this._options.side), e.setAttribute("data-align", this._options.align), this._reference = i.util.getOuterDimensions(e), e.offsetParent === this.$target[0].offsetParent ? (this._reference.left = e.offsetLeft, this._reference.top = e.offsetTop) : (t = i.util.getOffset(e), this._reference.left = t.left, this._reference.top = t.top), this
    }, n.prototype._calculateTarget = function() {
        var t = this.$target[0];
        return t.setAttribute("data-side", this._options.side), t.setAttribute("data-align", this._options.align), this._target = i.util.getOuterDimensions(t), this
    }, n.prototype._setPoint = function() {
        var t, e, i = this._options.side,
            n = "top" === i || "bottom" === i ? "horizontal" : "right" === i || "left" === i ? "vertical" : "center";
        return "center" === n ? t = {
            top: this._reference.top + (this._reference.height / 2 - this._target.height / 2),
            left: this._reference.left + (this._reference.width / 2 - this._target.width / 2)
        } : "horizontal" === n ? (e = {
            left: this._reference.left,
            center: this._reference.left + (this._reference.width / 2 - this._target.width / 2),
            right: this._reference.left + this._reference.width - this._target.width,
            top: this._reference.top - this._target.height,
            bottom: this._reference.top + this._reference.height
        }, t = {
            top: e[i],
            left: e[this._options.align]
        }) : (e = {
            top: this._reference.top,
            center: this._reference.top + (this._reference.height / 2 - this._target.height / 2),
            bottom: this._reference.top + this._reference.height - this._target.height,
            right: this._reference.left + this._reference.width,
            left: this._reference.left - this._target.width
        }, t = {
            top: e[this._options.align],
            left: e[i]
        }), t.top += this._options.offsetY, t.left += this._options.offsetX, this.$target.css(t), this
    }, i.Positioner = n
}(this, this.ch.$, this.ch),
function(t, e, i) {
    "use strict";
    var n = e(t.document),
        o = {
            8: i.onkeybackspace,
            9: i.onkeytab,
            13: i.onkeyenter,
            27: i.onkeyesc,
            37: i.onkeyleftarrow,
            38: i.onkeyuparrow,
            39: i.onkeyrightarrow,
            40: i.onkeydownarrow
        },
        r = {
            _active: null,
            _queue: [],
            _collection: {},
            add: function(t, e, i) {
                return void 0 === this._collection[e] && (this._collection[e] = {}), void 0 === this._collection[e][t] && (this._collection[e][t] = []), this._collection[e][t].push(i), this
            },
            remove: function(t, e, i) {
                var n, o, r;
                if (void 0 === t) throw new Error('Shortcuts - "remove(name, shortcut, callback)": "name" parameter must be defined.');
                if (void 0 === e) return delete this._collection[t], this;
                if (void 0 === i) return delete this._collection[t][e], this;
                for (o = this._collection[t][e], r = o.length, n = 0; r > n; n += 1) o[n] === i && o.splice(n, 1);
                return this
            },
            on: function(t) {
                var e = this._queue.length,
                    i = e - 1;
                for (i; i >= 0; i -= 1) this._queue[i] === t && this._queue.splice(i, 1);
                return this._queue.push(t), this._active = t, this
            },
            off: function(t) {
                var e = this._queue.length,
                    i = e - 1;
                for (i; i >= 0; i -= 1) this._queue[i] === t && (this._queue.splice(i, 1), this._queue.length > 0 ? this._active = this._queue[this._queue.length - 1] : this._active = null);
                return this
            }
        };
    n.on("keydown.shortcuts", function(t) {
        var e, i, n = t.keyCode.toString(),
            s = o[n],
            a = 0;
        if (void 0 !== s && null !== r._active && (e = r._collection[r._active][s], t.type = s, void 0 !== e))
            for (i = e.length, a = 0; i > a; a += 1) e[a](t)
    }), i.shortcuts = r
}(this, this.ch.$, this.ch),
function(t, e) {
    "use strict";

    function i(e, i) {
        e.one("load", function() {
            var n = e.length;
            t.setTimeout(function() {
                --n <= 0 && i.call(e)
            }, 200)
        }).each(function() {
            if (this.complete || void 0 === this.complete) {
                var t = this.src;
                this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", this.src = t
            }
        })
    }
    e.onImagesLoads = i
}(this, this.ch),
function(t, e, i) {
    "use strict";

    function n(e, i) {
        var n = this;
        this._init(e, i), void 0 !== this.initialize && this.initialize(), t.setTimeout(function() {
            n.emit("ready")
        }, 50)
    }
    var o = i.util,
        r = 0;
    i.util.inherits(n, i.EventEmitter), n.prototype.name = "component", n.prototype.constructor = n, n.prototype._init = function(i, n) {
        var s = this._defaults ? o.clone(this._defaults) : {};
        if (void 0 === n) void 0 === i ? this._options = s : o.is$(i) ? (this._$el = i, this._el = i[0], this._options = s) : "object" == typeof i && (n = i, i = void 0, this._options = e.extend(s, n));
        else {
            if ("object" != typeof n) throw new t.Error("Unexpected parameters were found in the '" + this.name + "' instantiation.");
            void 0 === i ? this._options = e.extend(s, n) : o.is$(i) && (this._$el = i, this._el = i[0], this._options = e.extend(s, n))
        }
        this.uid = r += 1, this._enabled = !0
    }, n.prototype.require = function() {
        var t, e = 0,
            n = arguments.length;
        for (e; n > e; e += 1) t = arguments[e], void 0 === this[t.toLowerCase()] && i[t].call(this);
        return this
    }, n.prototype.enable = function() {
        return this._enabled = !0, this.emit("enable"), this
    }, n.prototype.disable = function() {
        return this._enabled = !1, this.emit("disable"), this
    }, n.prototype.destroy = function() {
        this.disable(), void 0 !== this._el && this._$el.removeData(this.name), this.emit("destroy")
    }, i.Component = n
}(this, this.ch.$, this.ch),
function(t, e, i) {
    "use strict";

    function n(e, i) {
        var n = this;
        n._init(e, i), void 0 !== this.initialize && this.initialize(), t.setTimeout(function() {
            n.emit("ready")
        }, 50)
    }
    var o = i.util.inherits(n, i.Component);
    n.prototype.name = "form", n.prototype.constructor = n, n.prototype._init = function(t, e) {
        o._init.call(this, t, e);
        var n = this;
        return this.errors = [], this._messages = this._options.messages || {}, this.validations = [], this.$container = this._$el.addClass("ch-form").attr("novalidate", "novalidate").on("submit.form", function(t) {
            n.validate(t)
        }), this.$container.find('input[type="reset"]').on(i.onpointertap + ".form", function(t) {
            i.util.prevent(t), n.reset()
        }), this.on("disable", this.clear), this
    }, n.prototype.validate = function(t) {
        if (!this._enabled) return this;
        this.emit("beforevalidate");
        var e, n, o, r = this,
            s = 0,
            a = r.validations.length;
        for (this.errors.length = 0, s; a > s; s += 1) e = r.validations[s], e.validate(), e.isShown() && r.errors.push(e);
        return r.errors.length > 0 ? (n = r.errors[0], n.$trigger[0].scrollIntoView(), o = n.$trigger[0], "DIV" === o.tagName && n.$trigger.find("input:first").focus(), "hidden" === o.type && "SELECT" !== o.tagName || o.focus(), i.util.prevent(t), this.emit("error", this.errors)) : this.emit("success", t), this
    }, n.prototype.hasError = function() {
        if (!this._enabled) return !1;
        this.errors.length = 0;
        var t, e = 0,
            i = this.validations.length;
        for (e; i > e; e += 1) t = this.validations[e], t.hasError() && this.errors.push(t);
        return this.errors.length > 0
    }, n.prototype.clear = function() {
        var t = 0,
            e = this.validations.length;
        for (t; e > t; t += 1) this.validations[t].clear();
        return this.emit("clear"), this
    }, n.prototype.reset = function() {
        return this.clear(), this._el.reset(), this.emit("reset"), this
    }, n.prototype.destroy = function() {
        this.$container.off(".form").removeAttr("novalidate"), e.each(this.validations, function(t, e) {
            e.destroy()
        }), o.destroy.call(this)
    }, i.factory(n)
}(this, this.ch.$, this.ch),
function(t, e) {
    "use strict";

    function i(e) {
        return t.extend(this, n[e.name], e), "min" !== this.name && "max" !== this.name && "minLength" !== this.name && "maxLength" !== this.name || (this.message = this.message.replace("{#num#}", this.num)), this._enabled = !0, this
    }
    var n = {
        string: {
            fn: function(t) {
                return /^([a-zA-Z\u00C0-\u00C4\u00C8-\u00CF\u00D2-\u00D6\u00D9-\u00DC\u00E0-\u00E4\u00E8-\u00EF\u00F2-\u00F6\u00E9-\u00FC\u00C7\u00E7\s]*)$/i.test(t)
            },
            message: "Use only letters."
        },
        email: {
            fn: function(t) {
                return /^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i.test(t)
            },
            message: "Use a valid e-mail such as name@example.com."
        },
        url: {
            fn: function(t) {
                return /^((https?|ftp|file):\/\/|((www|ftp)\.)|(\/|.*\/)*)[a-z0-9-]+((\.|\/)[a-z0-9-]+)+([\/?].*)?$/i.test(t)
            },
            message: "It must be a valid URL."
        },
        minLength: {
            fn: function(t, e) {
                return t.length >= e
            },
            message: "Enter at least {#num#} characters."
        },
        maxLength: {
            fn: function(t, e) {
                return t.length <= e
            },
            message: "The maximum amount of characters is {#num#}."
        },
        number: {
            fn: function(t) {
                return /^(-?[0-9\s]+)$/i.test(t)
            },
            message: "Use only numbers."
        },
        max: {
            fn: function(t, e) {
                return e >= t
            },
            message: "The amount must be smaller than {#num#}."
        },
        min: {
            fn: function(t, e) {
                return t >= e
            },
            message: "The amount must be higher than {#num#}."
        },
        required: {
            fn: function(e) {
                var i, n = this.$trigger.hasClass("ch-list-options") ? "OPTIONS" : this._el.tagName;
                switch (n) {
                    case "OPTIONS":
                        i = 0 !== this.$trigger.find("input:checked").length;
                        break;
                    case "SELECT":
                        i = "-1" !== e && "" !== e;
                        break;
                    default:
                        i = 0 !== t.trim(e).length
                }
                return i
            },
            message: "Fill in this information."
        },
        custom: {
            message: "Error"
        }
    };
    i.prototype.name = "condition", i.prototype.constructor = i, i.prototype.enable = function() {
        return this._enabled = !0, this
    }, i.prototype.disable = function() {
        return this._enabled = !1, this
    }, i.prototype.test = function(t, e) {
        return this._enabled ? this.fn.call(e, t, this.num) : !0
    }, e.Condition = i
}(this.ch.$, this.ch),
function(t, e) {
    "use strict";

    function i(e, i) {
        var n = this;
        this._init(e, i), void 0 !== this.initialize && this.initialize(), t.setTimeout(function() {
            n.emit("ready")
        }, 50)
    }

    function n(t) {
        i.prototype[t] = function(e) {
            var i;
            if (void 0 !== e && void 0 !== this.conditions[e]) this.conditions[e][t]();
            else {
                for (i in this.conditions) void 0 !== this.conditions[i] && this.conditions[i][t]();
                o[t].call(this)
            }
            return this
        }
    }
    var o = e.util.inherits(i, e.Component),
        r = ["enable", "disable"],
        s = r.length;
    for (i.prototype.name = "validation", i.prototype.constructor = i, i.prototype._defaults = {
            offsetX: 10,
            side: "right",
            align: "top"
        }, i.prototype._init = function(t, e) {
            var i = this;
            return o._init.call(this, t, e), this.$trigger = this._$el, this._configureContainer(), this.conditions = {}, this._mergeConditions(e.conditions), this._shown = !1, this.error = null, this.on("exist", function(t) {
                this._mergeConditions(t.conditions)
            }).on("disable", this.clear), this.form = (i.$trigger.parents("form").data("form") || i.$trigger.parents("form").form()).validations.push(this), this._validationEvent = this.$trigger.hasClass("ch-list-options") || "SELECT" === this._el.tagName || "INPUT" === this._el.tagName && "range" === this._el.type ? "change" : "blur", this
        }, i.prototype._mergeConditions = function(t) {
            var i = 0,
                n = t.length;
            for (i; n > i; i += 1) this.conditions[t[i].name] = new e.Condition(t[i]);
            return this
        }, i.prototype.validate = function() {
            return this.hasError() ? this._error() : this._success(), this
        }, i.prototype._error = function() {
            var t, e = this;
            return this.$trigger.on(this._validationEvent + ".validation", function() {
                (t !== this.value || "change" === e._validationEvent && e.isShown()) && (t = this.value, e.validate()), void 0 === e.conditions.required && "" === this.value && e.clear()
            }), this._error = function() {
                return e._previousError.condition && e._shown || ("INPUT" !== e._el.nodeName && "TEXTAREA" !== e._el.nodeName || e.$trigger.addClass("ch-validation-error"), e._showErrorMessage(e.error.message || "Error")), e.error.condition !== e._previousError.condition && e._showErrorMessage(e.error.message || e.form._messages[e.error.condition] || "Error"), e._shown = !0, e.emit("error", e.error), e
            }, this._error(), this
        }, i.prototype._success = function() {
            return !this._shown && this._enabled || (this._shown = !1), this.$trigger.removeClass("ch-validation-error").removeAttr("aria-label"), this._hideErrorMessage(), this.emit("success"), this
        }, i.prototype.hasError = function() {
            if (this.$trigger.attr("disabled") || !this._enabled) return !1;
            var t, i = this.conditions.required,
                n = this._el.value;
            if (!i && "" === n && this._shown === !1) return !1;
            this._previousError = e.util.clone(this.error);
            for (t in this.conditions)
                if (void 0 !== this.conditions[t] && !this.conditions[t].test(n, this)) return this.error = {
                    condition: t,
                    message: this.conditions[t].message
                }, !0;
            return this.error = null, !1
        }, i.prototype.clear = function() {
            return this.$trigger.removeClass("ch-validation-error").removeAttr("aria-label"), this.error = null, this._hideErrorMessage(), this._shown = !1, this.emit("clear"), this
        }, i.prototype.and = function() {
            return this.$trigger
        }, i.prototype.isShown = function() {
            return this._shown
        }, i.prototype.message = function(t, e) {
            if (void 0 === t) throw new Error("validation.message(condition, message): Please, a condition parameter is required.");
            return void 0 === e ? this.conditions[t].message : (this.conditions[t].message = e, this.isShown() && this.error.condition === t && this._showErrorMessage(e), this)
        }; s;) n(r[s -= 1]);
    i.prototype.destroy = function() {
        this.$trigger.off(".validation").removeAttr("data-side data-align"), o.destroy.call(this)
    }, e.factory(i)
}(this, this.ch),
function(t, e) {
    "use strict";
    e.Validation.prototype._configureContainer = function() {
        var e = this;
        this.bubble = this._container = t.bubble({
            reference: function() {
                var i, n, o = e.$trigger;
                return o.hasClass("ch-list-options") ? o.find("h4").length > 0 ? (n = o.find("h4"), n.wrapInner("<span>"), i = n.children()) : i = "LEGEND" === o.prev().prop("tagName") ? o.prev() : t(o.find("label")[0]) : i = o, i
            }(),
            align: e._options.align,
            side: e._options.side,
            offsetY: e._options.offsetY,
            offsetX: e._options.offsetX
        })
    }, e.Validation.prototype._showErrorMessage = function(t) {
        return this.bubble.show(t), this.$trigger.attr("aria-label", "ch-" + this.bubble.name + "-" + this.bubble.uid), this
    }, e.Validation.prototype._hideErrorMessage = function() {
        return this.bubble.hide(), this.$trigger.removeAttr("aria-label"), this
    }, e.Validation.prototype.refreshPosition = function(t) {
        return void 0 === t ? this.bubble._position : (this.bubble.refreshPosition(t), this)
    }
}(this.ch.$, this.ch),
function(t) {
    "use strict";

    function e(t) {
        var e, i = {
            name: "string"
        };
        return "object" == typeof t ? (e = t, i.message = e.message, delete e.message) : (e = {}, i.message = t), e.conditions = [i], e
    }

    function i(e, i) {
        return new t.Validation(e, i)
    }
    i.prototype.name = "string", i.prototype.constructor = i, i.prototype._preset = "validation", t.factory(i, e)
}(this.ch),
function(t, e) {
    "use strict";

    function i(t, e) {
        var i, n = {
            name: "maxLength"
        };
        return "object" == typeof t ? (i = t, n.num = i.num, n.message = i.message, delete i.num, delete i.message) : (i = {}, n.num = t, n.message = e), i.conditions = [n], i
    }

    function n(t, i) {
        return new e.Validation(t, i)
    }
    n.prototype.name = "maxLength", n.prototype.constructor = e.MaxLength, n.prototype._preset = "validation", e.factory(n, i)
}(this, this.ch),
function(t, e) {
    "use strict";

    function i(t, e) {
        var i, n = {
            name: "minLength"
        };
        return "object" == typeof t ? (i = t, n.num = i.num, n.message = i.message, delete i.num, delete i.message) : (i = {}, n.num = t, n.message = e), i.conditions = [n], i
    }

    function n(t, i) {
        return new e.Validation(t, i)
    }
    n.prototype.name = "minLength", n.prototype.constructor = e.MinLength, n.prototype._preset = "validation", e.factory(n, i)
}(this, this.ch),
function(t, e) {
    "use strict";

    function i(t) {
        var e, i = {
            name: "email"
        };
        return "object" == typeof t ? (e = t, i.message = e.message, delete e.message) : (e = {}, i.message = t), e.conditions = [i], e
    }

    function n(t, i) {
        return new e.Validation(t, i)
    }
    n.prototype.name = "email", n.prototype.constructor = n, n.prototype._preset = "validation", e.factory(n, i)
}(this, this.ch),
function(t) {
    "use strict";

    function e(t) {
        var e, i = {
            name: "url"
        };
        return "object" == typeof t ? (e = t, i.message = e.message, delete e.message) : (e = {}, i.message = t), e.conditions = [i], e
    }

    function i(e, i) {
        return new t.Validation(e, i)
    }
    i.prototype.name = "url", i.prototype.constructor = i, i.prototype._preset = "validation", t.factory(i, e)
}(this.ch),
function(t) {
    "use strict";

    function e(t) {
        var e, i = {
            name: "number"
        };
        return "object" == typeof t ? (e = t, i.message = e.message, delete e.message) : (e = {}, i.message = t), e.conditions = [i], e
    }

    function i(e, i) {
        return new t.Validation(e, i)
    }
    i.prototype.name = "number", i.prototype.constructor = i, i.prototype._preset = "validation", t.factory(i, e)
}(this.ch),
function(t, e) {
    "use strict";

    function i(t, e) {
        var i, n = {
            name: "min"
        };
        return "object" == typeof t ? (i = t, n.num = i.num, n.message = i.message, delete i.num, delete i.message) : (i = {}, n.num = t, n.message = e), i.conditions = [n], i
    }

    function n(t, i) {
        return new e.Validation(t, i)
    }
    n.prototype.name = "min", n.prototype.constructor = n, n.prototype._preset = "validation", e.factory(n, i)
}(this, this.ch),
function(t, e) {
    "use strict";

    function i(t, e) {
        var i, n = {
            name: "max"
        };
        return "object" == typeof t ? (i = t, n.num = i.num, n.message = i.message, delete i.num, delete i.message) : (i = {}, n.num = t, n.message = e), i.conditions = [n], i
    }

    function n(t, i) {
        return new e.Validation(t, i)
    }
    n.prototype.name = "max", n.prototype.constructor = n, n.prototype._preset = "validation", e.factory(n, i)
}(this, this.ch),
function(t, e) {
    "use strict";

    function i(t, e, i) {
        var n, o = {};
        return "object" == typeof t ? (n = t, o.name = n.name, o.fn = n.fn, o.message = n.message, delete n.name, delete n.fn, delete n.message) : (n = {}, o.name = t, o.fn = e, o.message = i), n.conditions = [o], n
    }

    function n(t, i) {
        return new e.Validation(t, i)
    }
    n.prototype.name = "custom", n.prototype.constructor = n, n.prototype._preset = "validation", e.factory(n, i)
}(this, this.ch),
function(t, e) {
    "use strict";

    function i(t) {
        var e, i = {
            name: "required"
        };
        return "object" == typeof t ? (e = t, i.message = e.message, delete e.message) : (e = {}, i.message = t), e.conditions = [i], e
    }

    function n(t, i) {
        return new e.Validation(t, i)
    }
    n.prototype.name = "required", n.prototype.constructor = n, n.prototype._preset = "validation", e.factory(n, i)
}(this, this.ch),
function(t, e, i) {
    "use strict";

    function n(t) {
        return ("string" == typeof t || i.util.is$(t)) && (t = {
            content: t
        }), t
    }

    function o(e, i) {
        var n = this;
        this._init(e, i), void 0 !== this.initialize && this.initialize(), t.setTimeout(function() {
            n.emit("ready")
        }, 50)
    }
    var r = e(t.document),
        s = i.util.inherits(o, i.Component);
    o.prototype.name = "expandable", o.prototype.constructor = o, o.prototype._defaults = {
        _classNameTrigger: "ch-expandable-trigger ch-expandable-ico",
        _classNameContainer: "ch-expandable-container ch-hide",
        fx: !1,
        toggle: !0
    }, o.prototype._init = function(t, e) {
        s._init.call(this, t, e), this.require("Collapsible", "Content");
        var n = this;
        return this.$trigger = this._$el.addClass(this._options._classNameTrigger).on(i.onpointertap + "." + this.name, function(t) {
            i.util.prevent(t), n._options.toggle ? n._toggle() : n.show()
        }), this.$container = this._$content = (this._options.container || this._$el.next()).addClass(this._options._classNameContainer).attr("aria-expanded", "false"), "" === this.$container.prop("id") && this.$container.prop("id", "ch-expandable-" + this.uid), this.$trigger.attr("aria-controls", this.$container.prop("id")), this.on("show", function() {
            r.trigger(i.onlayoutchange)
        }).on("hide", function() {
            r.trigger(i.onlayoutchange)
        }), i.util.avoidTextSelection(this.$trigger), this
    }, o.prototype.show = function(t, e) {
        return this._enabled ? (this._show(), this.$container.attr("aria-expanded", "true"), void 0 !== t && this.content(t, e), this) : this
    }, o.prototype.hide = function() {
        return this._enabled ? (this._hide(), this.$container.attr("aria-expanded", "false"), this) : this
    }, o.prototype.isShown = function() {
        return this._shown
    }, o.prototype.destroy = function() {
        this.$trigger.off(".expandable").removeClass("ch-expandable-trigger ch-expandable-ico ch-user-no-select").removeAttr("aria-controls"), this.$container.removeClass("ch-expandable-container ch-hide").removeAttr("aria-expanded aria-hidden"), r.trigger(i.onlayoutchange), s.destroy.call(this)
    }, i.factory(o, n)
}(this, this.ch.$, this.ch),
function(t, e, i) {
    "use strict";

    function n(e, i) {
        var n = this;
        n._init(e, i), void 0 !== this.initialize && this.initialize(), t.setTimeout(function() {
            n.emit("ready")
        }, 50)
    }

    function o(t) {
        n.prototype[t] = function(e) {
            var i, n = this.folds[e - 1];
            if (n && "expandable" === n.name) n[t]();
            else {
                for (i = this.folds.length; i;) n = this.folds[i -= 1], "expandable" === n.name && n[t]();
                r[t].call(this), this._el.setAttribute("aria-disabled", !this._enabled)
            }
            return this
        }
    }
    var r = i.util.inherits(n, i.Component),
        s = ["enable", "disable"],
        a = s.length;
    for (n.prototype.name = "menu", n.prototype.constructor = n, n.prototype._defaults = {
            fx: "slideDown"
        }, n.prototype._init = function(t, e) {
            return r._init.call(this, t, e), this._snippet = this._el.cloneNode(!0), this.$container = this._$el.attr("role", "navigation").addClass("ch-menu " + (this._options._className || "") + " " + (this._options.addClass || "")),
                this.folds = [], this._createExpandables(), this
        }, n.prototype._createExpandables = function() {
            function t(t, r) {
                if (i = e(r).addClass("ch-menu-fold"), n = i.children(":first-child"), "A" === n[0].tagName) i.attr("role", "presentation"), n.addClass("ch-fold-trigger"), o.folds.push(n);
                else {
                    var s = n.expandable({
                        fx: o._options.fx
                    });
                    s.on("show", function() {
                        o.emit("show", t + 1)
                    }).on("hide", function() {
                        o.emit("hide")
                    }), n.next().attr("role", "menu").children().attr("role", "presentation").children().attr("role", "menuitem"), o.folds.push(s)
                }
            }
            var i, n, o = this;
            return e.each(this.$container.children(), t), this
        }, n.prototype.show = function(t) {
            return this.folds[t - 1].show(), this
        }, n.prototype.hide = function(t) {
            return this.folds[t - 1].hide(), this
        }, n.prototype.content = function(e, i, n) {
            if (void 0 === e || "number" != typeof e) throw new t.Error("Menu.content(fold, content, options): Expected number of fold.");
            return void 0 === i ? this.folds[e - 1].content() : (this.folds[e - 1].content(i, n), this)
        }; a;) o(s[a -= 1]);
    n.prototype.destroy = function() {
        e.each(this.folds, function(t, e) {
            void 0 !== e.destroy && e.destroy()
        }), this._el.parentNode.replaceChild(this._snippet, this._el), e(t.document).trigger(i.onlayoutchange), r.destroy.call(this)
    }, i.factory(n)
}(this, this.ch.$, this.ch),
function(t, e, i) {
    "use strict";

    function n(e, i) {
        var n = this;
        this._init(e, i), void 0 !== this.initialize && this.initialize(), t.setTimeout(function() {
            n.emit("ready")
        }, 50)
    }
    var o = e(t.document),
        r = e("body"),
        s = i.util.inherits(n, i.Component),
        a = {
            pointertap: i.onpointertap,
            pointerenter: i.onpointerenter
        };
    n.prototype.name = "popover", n.prototype.constructor = n, n.prototype._defaults = {
        _ariaRole: "dialog",
        _className: "",
        _hideDelay: 400,
        addClass: "",
        fx: "fadeIn",
        width: "auto",
        height: "auto",
        shownby: "pointertap",
        hiddenby: "button",
        waiting: '<div class="ch-loading ch-loading-centered"></div>',
        position: "absolute"
    }, n.prototype._init = function(t, n) {
        s._init.call(this, t, n), this.require("Collapsible", "Content");
        var r = this;
        return this.$container = e(["<div", ' class="ch-popover ch-hide ' + this._options._className + " " + this._options.addClass + '"', ' role="' + this._options._ariaRole + '"', ' id="ch-' + this.name + "-" + this.uid + '"', ' style="z-index:' + (i.util.zIndex += 1) + ";width:" + this._options.width + ";height:" + this._options.height + '"', ">"].join("")).on(i.onpointertap + "." + this.name, function(t) {
            t.stopPropagation()
        }), this._$content = e('<div class="ch-popover-content">').appendTo(this.$container), this._configureTrigger(), this._configureHiding(), this._positioner = new i.Positioner({
            target: this.$container,
            reference: this._options.reference,
            side: this._options.side,
            align: this._options.align,
            offsetX: this._options.offsetX,
            offsetY: this._options.offsetY,
            position: this._options.position
        }), this._refreshPositionListener = function() {
            return r._positioner.refresh(n), r
        }, o.on(i.onlayoutchange, this._refreshPositionListener), i.viewport.on(i.onresize, this._refreshPositionListener), this.once("_show", this._refreshPositionListener).on("_contentchange", this._refreshPositionListener).on("hide", function() {
            r.$container.remove(null, !0)
        }), this
    }, n.prototype._configureTrigger = function() {
        if (void 0 !== this._el) {
            var t = this,
                e = function() {
                    var e = t._toggle;
                    return "pointerenter" !== t._options.shownby && "none" !== t._options.hiddenby && "button" !== t._options.hiddenby || (e = function() {
                        t._shown || t.show()
                    }), e
                }();
            this._snippet = this._el.cloneNode(!0), this._options.reference = this._options.reference || this._$el, "none" !== this._options.shownby && this._$el.addClass("ch-shownby-" + this._options.shownby).on(a[this._options.shownby] + "." + this.name, function(t) {
                i.util.prevent(t), e()
            }), void 0 === this._options.content && ("A" === this._el.nodeName && "" !== this._el.href ? this._options.content = this._el.href : "" === this._el.title && "" === this._el.alt || (this._options.content = this._el.title || this._el.alt, this._el.setAttribute("data-title", this._options.content), this._el.title = this._el.alt = "")), this._el.setAttribute("aria-owns", "ch-" + this.name + "-" + this.uid), this._el.setAttribute("aria-haspopup", "true"), this.$trigger = this._$el
        }
    }, n.prototype._configureHiding = function() {
        function n() {
            o = t.setTimeout(function() {
                r.hide()
            }, r._options._hideDelay)
        }
        var o, r = this,
            s = this._options.hiddenby,
            a = i.onpointertap + "." + this.name,
            l = {};
        "none" !== s && ("pointerleave" === s && void 0 !== this.$trigger && (l[i.onpointerenter + "." + this.name] = function() {
            t.clearTimeout(o)
        }, l[i.onpointerleave + "." + this.name] = n, this.$trigger.on(l), this.$container.on(l)), "button" !== s && "all" !== s || e('<i class="ch-close" role="button" aria-label="Close"></i>').on(a, function() {
            r.hide()
        }).prependTo(this.$container), "pointers" !== s && "all" !== s || void 0 === this._hidingShortcuts || this._hidingShortcuts())
    }, n.prototype._normalizeOptions = function(t) {
        return ("string" == typeof t || i.util.is$(t)) && (t = {
            content: t
        }), t
    }, n.prototype.show = function(t, e) {
        return this._enabled ? (this.$container.css("z-index", i.util.zIndex += 1).appendTo(r), this._show(), void 0 !== t && this.content(t, e), this) : this
    }, n.prototype.hide = function() {
        return this._enabled ? (this._hide(), this) : this
    }, n.prototype.isShown = function() {
        return this._shown
    }, n.prototype.width = function(t) {
        return void 0 === t ? this._options.width : (this.$container.css("width", t), this._options.width = t, this.refreshPosition(), this)
    }, n.prototype.height = function(t) {
        return void 0 === t ? this._options.height : (this.$container.css("height", t), this._options.height = t, this.refreshPosition(), this)
    }, n.prototype.refreshPosition = function(t) {
        return this._shown && this._positioner.refresh(t), this
    }, n.prototype.enable = function() {
        return void 0 !== this._el && this._el.setAttribute("aria-disabled", !1), s.enable.call(this), this
    }, n.prototype.disable = function() {
        return void 0 !== this._el && this._el.setAttribute("aria-disabled", !0), this._shown && this.hide(), s.disable.call(this), this
    }, n.prototype.destroy = function() {
        void 0 !== this.$trigger && this.$trigger.off("." + this.name).removeClass("ch-" + this.name + "-trigger").removeAttr("data-title aria-owns aria-haspopup data-side data-align role").attr({
            alt: this._snippet.alt,
            title: this._snippet.title
        }), o.off(i.onlayoutchange, this._refreshPositionListener), i.viewport.off(i.onresize, this._refreshPositionListener), s.destroy.call(this)
    }, i.factory(n, n.prototype._normalizeOptions)
}(this, this.ch.$, this.ch),
function(t, e, i) {
    "use strict";
    var n = e(t.document);
    i.Popover.prototype._hidingShortcuts = function() {
        function t(t) {
            t.target !== e._el && t.target !== e.$container[0] && 0 === t.button && e.hide()
        }
        var e = this,
            o = i.onpointertap + "." + this.name;
        i.shortcuts.add(i.onkeyesc, this.uid, function() {
            e.hide()
        }), this.on("show", function() {
            i.shortcuts.on(e.uid), n.on(o, t)
        }).on("hide", function() {
            i.shortcuts.off(e.uid), n.off(o, t)
        }).once("destroy", function() {
            i.shortcuts.remove(e.uid, i.onkeyesc)
        })
    }
}(this, this.ch.$, this.ch),
function(t, e, i) {
    "use strict";

    function n(e, i) {
        var n = this;
        this._init(e, i), void 0 !== this.initialize && this.initialize(), t.setTimeout(function() {
            n.emit("ready")
        }, 50)
    }
    var o, r = i.util.inherits(n, i.Popover);
    n.prototype.name = "layer", n.prototype.constructor = n, n.prototype._defaults = e.extend(i.util.clone(r._defaults), {
        _className: "ch-layer ch-box-lite ch-cone",
        _ariaRole: "tooltip",
        shownby: "pointerenter",
        hiddenby: "pointerleave",
        side: "bottom",
        align: "left",
        offsetX: 0,
        offsetY: 10,
        waiting: '<div class="ch-loading-small"></div>'
    }), n.prototype.show = function(t, e) {
        return this._enabled ? (void 0 !== o && o.name === this.name && o !== this && o.hide(), "none" !== this._options.hiddenby && "button" !== this._options.hiddenby && (o = this), r.show.call(this, t, e), this) : this
    }, i.factory(n, r._normalizeOptions)
}(this, this.ch.$, this.ch),
function(t, e) {
    "use strict";

    function i(i, n) {
        return void 0 !== n || void 0 === i || e.util.is$(i) || (n = i, i = void 0), n = t.extend(e.util.clone(this._defaults), n), new e.Layer(i, n)
    }
    i.prototype.name = "tooltip", i.prototype.constructor = i, i.prototype._defaults = t.extend(e.util.clone(e.Layer.prototype._defaults), {
        _className: "ch-tooltip ch-cone"
    }), e.factory(i, e.Layer.prototype._normalizeOptions)
}(this.ch.$, this.ch),
function(t, e, i) {
    "use strict";

    function n(e, i) {
        var n = this;
        this._init(e, i), void 0 !== this.initialize && this.initialize(), t.setTimeout(function() {
            n.emit("ready")
        }, 50)
    }
    var o = i.util.inherits(n, i.Popover);
    n.prototype.name = "bubble", n.prototype.constructor = n, n.prototype._defaults = e.extend(i.util.clone(o._defaults), {
        _className: "ch-bubble ch-box-icon ch-box-error ch-cone",
        _ariaRole: "alert",
        shownby: "none",
        hiddenby: "none",
        side: "right",
        align: "top",
        offsetX: 10,
        content: "Check the information, please."
    }), n.prototype._init = function(t, i) {
        return o._init.call(this, t, i), e('<i class="ch-icon-remove-sign"></i>').prependTo(this.$container), this
    }, i.factory(n, o._normalizeOptions)
}(this, this.ch.$, this.ch),
function(t, e, i) {
    "use strict";

    function n(e, i) {
        var n = this;
        this._init(e, i), void 0 !== this.initialize && this.initialize(), t.setTimeout(function() {
            n.emit("ready")
        }, 50)
    }
    var o = e("body"),
        r = e('<div class="ch-underlay ch-hide" tabindex="-1">'),
        s = i.util.inherits(n, i.Popover);
    n.prototype.name = "modal", n.prototype.constructor = n, n.prototype._defaults = e.extend(i.util.clone(s._defaults), {
        _className: "ch-modal ch-box-lite",
        _ariaRole: "dialog",
        width: "50%",
        hiddenby: "all",
        reference: i.viewport,
        waiting: '<div class="ch-loading-big ch-loading-centered"></div>',
        position: "fixed"
    }), n.prototype._showUnderlay = function() {
        r.css("z-index", i.util.zIndex).appendTo(o), "none" !== this._options.fx ? r.fadeIn() : r.removeClass("ch-hide")
    }, n.prototype._hideUnderlay = function() {
        "none" !== this._options.fx ? r.fadeOut("normal", function() {
            r.remove(null, !0)
        }) : r.addClass("ch-hide").remove(null, !0)
    }, n.prototype.show = function(t, e) {
        if (!this._enabled) return this;
        var n = this;
        return "all" !== this._options.hiddenby && "pointers" !== this._options.hiddenby || r.one(i.onpointertap, function() {
            n.hide()
        }), this._showUnderlay(), s.show.call(this, t, e), this
    }, n.prototype.hide = function() {
        return r.off(i.onpointertap), this._hideUnderlay(), s.hide.call(this), this
    }, i.factory(n, s._normalizeOptions)
}(this, this.ch.$, this.ch),
function(t, e) {
    "use strict";

    function i(i, n) {
        return void 0 !== n || void 0 === i || e.util.is$(i) || (n = i, i = void 0), n = t.extend(e.util.clone(this._defaults), n), n.content = t('<div class="ch-loading-big"></div><p>' + n.content + "</p>"), new e.Modal(i, n)
    }
    i.prototype.name = "transition", i.prototype.constructor = i, i.prototype._defaults = t.extend(e.util.clone(e.Modal.prototype._defaults), {
        _className: "ch-transition ch-box-lite",
        _ariaRole: "alert",
        hiddenby: "none",
        content: "Please wait..."
    }), e.factory(i, e.Modal.prototype._normalizeOptions)
}(this.ch.$, this.ch),
function(t, e, i) {
    "use strict";

    function n(e, i) {
        var n = this;
        this._init(e, i), void 0 !== this.initialize && this.initialize(), t.setTimeout(function() {
            n.emit("ready")
        }, 50)
    }
    var o = i.util.inherits(n, i.Layer);
    n.prototype.name = "zoom", n.prototype.constructor = n, n.prototype._defaults = e.extend(i.util.clone(o._defaults), {
        _className: "ch-zoom",
        _ariaRole: "tooltip",
        _hideDelay: 0,
        fx: "none",
        width: "300px",
        height: "300px",
        side: "right",
        align: "top",
        offsetX: 20,
        offsetY: 0,
        waiting: "Loading zoom..."
    }), n.prototype._init = function(n, r) {
        o._init.call(this, n, r);
        var s = this;
        return this._loaded = !1, this._$loading = e('<div class="ch-zoom-loading ch-hide"><div class="ch-loading-big"></div><p>' + this._options.waiting + "</p></div>").appendTo(this.$trigger), this._$seeker = e('<div class="ch-zoom-seeker ch-hide">').appendTo(this.$trigger), this._seeker = this._$seeker[0], this._$original = this.$trigger.children(":first"), this._zoomed = new t.Image, i.onImagesLoads(this._$original, function() {
            s._originalLoaded()
        }), i.onImagesLoads(e(this._zoomed), function() {
            s._zoomedLoaded()
        }), this.on("imageload", function() {
            s._$loading.hasClass("ch-hide") || s.show()
        }), this.$trigger.addClass("ch-zoom-trigger").on({
            "click.zoom": function(t) {
                i.util.prevent(t)
            },
            "mousemove.zoom": function(t) {
                s._move(t)
            }
        }), this
    }, n.prototype._originalLoaded = function() {
        var t = this._$original[0].width,
            e = this._$original[0].height,
            n = i.util.getOffset(this._el);
        this.$trigger.css({
            width: t,
            height: e
        }), this._$loading.css({
            left: (t - this._$loading.width()) / 2,
            top: (e - this._$loading.height()) / 2
        }), this._originalWidth = t, this._originalHeight = e, this._originalOffsetLeft = n.left, this._originalOffsetTop = n.top
    }, n.prototype._zoomedLoaded = function() {
        this._ratioX = this._zoomed.width / this._originalWidth, this._ratioY = this._zoomed.height / this._originalHeight, this._seekerWidth = t.Math.floor(t.parseInt(this._options.width, 10) / this._ratioX), this._seekerHeight = t.Math.floor(t.parseInt(this._options.height, 10) / this._ratioY), this._seekerHalfWidth = t.Math.floor(this._seekerWidth / 2), this._seekerHalfHeight = t.Math.floor(this._seekerHeight / 2), this._seeker.style.cssText = "width:" + this._seekerWidth + "px;height:" + this._seekerHeight + "px", this.content(this._zoomed), this._loaded = !0, this.emit("imageload")
    }, n.prototype._move = function(t) {
        if (this._enabled && this._loaded) {
            var e, i, n = t.pageX - this._seekerHalfWidth,
                o = t.pageY - this._seekerHalfHeight;
            e = n <= this._originalOffsetLeft ? 0 : t.pageX + this._seekerHalfWidth > this._originalWidth + this._originalOffsetLeft ? this._originalWidth - this._seekerWidth - 2 : n - this._originalOffsetLeft, i = o <= this._originalOffsetTop ? 0 : t.pageY + this._seekerHalfHeight > this._originalHeight + this._originalOffsetTop ? this._originalHeight - this._seekerHeight - 2 : o - this._originalOffsetTop, this._seeker.style.left = e + "px", this._seeker.style.top = i + "px", this._zoomed.style.cssText = "left:" + -this._ratioX * e + "px;top:" + -this._ratioY * i + "px"
        }
    }, n.prototype.show = function(t, e) {
        return this._enabled ? this._loaded ? (this._$loading.remove(), this._$seeker.removeClass("ch-hide"), o.show.call(this, t, e), this) : (this._$loading.removeClass("ch-hide"), this.loadImage(), this) : this
    }, n.prototype.hide = function() {
        return this._loaded ? (this._$seeker.addClass("ch-hide"), o.hide.call(this), this) : (this._$loading.addClass("ch-hide"), this)
    }, n.prototype.loadImage = function() {
        return this._zoomed.src = this._el.href, this
    }, n.prototype.destroy = function() {
        this._$seeker.remove(), o.destroy.call(this)
    }, i.factory(n, o._normalizeOptions)
}(this, this.ch.$, this.ch),
function(t, e, i) {
    "use strict";

    function n(t) {
        return ("string" == typeof t || i.util.isArray(t)) && (t = {
            selected: t
        }), t
    }

    function o(e, i) {
        var n = this;
        this._init(e, i), void 0 !== this.initialize && this.initialize(), t.setTimeout(function() {
            n.emit("ready")
        }, 50)
    }
    var r = function(t) {
            return parseInt(t, 10) < 10 ? "0" + t : t
        },
        s = {
            "YYYY/MM/DD": function(t) {
                return [t.year, r(t.month), r(t.day)].join("/")
            },
            "DD/MM/YYYY": function(t) {
                return [r(t.day), r(t.month), t.year].join("/")
            },
            "MM/DD/YYYY": function(t) {
                return [r(t.month), r(t.day), t.year].join("/")
            }
        },
        a = function(t) {
            return t = "today" === t ? new Date : new Date(t), {
                "native": t,
                day: t.getDate(),
                order: t.getDay(),
                month: t.getMonth() + 1,
                year: t.getFullYear()
            }
        },
        l = {
            prev: '<div class="ch-calendar-prev" role="button" aria-hidden="false"></div>',
            next: '<div class="ch-calendar-next" role="button" aria-hidden="false"></div>'
        },
        h = i.util.inherits(o, i.Component);
    o.prototype.name = "calendar", o.prototype.constructor = o, o.prototype._defaults = {
        monthsNames: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
        weekdays: ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
        format: "DD/MM/YYYY"
    }, o.prototype._init = function(t, n) {
        h._init.call(this, t, n);
        var o = this;
        return this._snippet = this._el.cloneNode(!0), this._dates = {
            range: {}
        }, this._dates.today = a("today"), this._dates.current = this._dates.today, this._dates.selected = function() {
            var t = o._options.selected;
            return t ? (i.util.isArray(t) ? e.each(t, function(e, n) {
                i.util.isArray(n) ? (t[e][0] = "today" !== t[e][0] ? a(n[0]) : o._dates.today, t[e][1] = "today" !== t[e][1] ? a(n[1]) : o._dates.today) : t[e] = "today" !== t[e] ? a(n) : o._dates.today
            }) : t = "today" !== t ? o._dates.current = a(t) : o._dates.today, t) : t
        }(), this._dates.today = a("today"), this._dates.range.from = function() {
            return void 0 !== o._options.from && o._options.from ? "today" === o._options.from ? o._dates.today : a(o._options.from) : void 0
        }(), this._dates.range.to = function() {
            return void 0 !== o._options.to && o._options.to ? "today" === o._options.to ? o._dates.today : a(o._options.to) : void 0
        }(), this._$prev = e(l.prev).attr("aria-controls", "ch-calendar-grid-" + this.uid).on(i.onpointertap + "." + this.name, function(t) {
            i.util.prevent(t), o.prevMonth()
        }), this._$next = e(l.next).attr("aria-controls", "ch-calendar-grid-" + this.uid).on(i.onpointertap + "." + this.name, function(t) {
            i.util.prevent(t), o.nextMonth()
        }), this.$container = this._$el.addClass("ch-calendar").prepend(this._$prev).prepend(this._$next).append(this._createTemplate(this._dates.current)), this._updateControls(), i.util.avoidTextSelection(o.$container), this
    }, o.prototype._hasPrevMonth = function() {
        return void 0 === this._dates.range.from || !(this._dates.range.from.month >= this._dates.current.month && this._dates.range.from.year >= this._dates.current.year)
    }, o.prototype._hasNextMonth = function() {
        return void 0 === this._dates.range.to || !(this._dates.range.to.month <= this._dates.current.month && this._dates.range.to.year <= this._dates.current.year)
    }, o.prototype._updateControls = function() {
        return this._hasPrevMonth() ? this._$prev.removeClass("ch-hide").attr("aria-hidden", "false") : this._$prev.addClass("ch-hide").attr("aria-hidden", "true"), this._hasNextMonth() ? this._$next.removeClass("ch-hide").attr("aria-hidden", "false") : this._$next.addClass("ch-hide").attr("aria-hidden", "true"), this
    }, o.prototype._updateTemplate = function(t) {
        return this._dates.current = "string" == typeof t ? a(t) : t, this.$container.children("table").remove(), this.$container.append(this._createTemplate(this._dates.current)), this._updateControls(), this
    }, o.prototype._createTemplate = function(t) {
        var e, i, n, o, r = this,
            s = function() {
                var t, e = ['<thead><tr role="row">'];
                for (t = 0; 7 > t; t += 1) e.push('<th role="columnheader">' + r._defaults.weekdays[t] + "</th>");
                return e.push("</tr></thead>"), e.join("")
            }(),
            a = ['<table class="ch-calendar-month" role="grid" id="ch-calendar-grid-' + r.uid + '">', "<caption>" + r._defaults.monthsNames[t.month - 1] + " - " + t.year + "</caption>", s],
            l = function() {
                var e = new Date(t.year, t.month, 0).getDate(),
                    i = new Date([t.year, t.month, "01"].join("/")).getDay(),
                    n = i + e,
                    o = n % 7,
                    r = o > 0 ? 7 - o : 0;
                return {
                    previous: i,
                    subtotal: n,
                    total: n + r
                }
            }();
        for (a.push('<tbody><tr class="ch-calendar-week" role="row">'), e = 0; e < l.total; e += 1) e < l.previous || e > l.subtotal - 1 ? a.push('<td role="gridcell" class="ch-calendar-other">X</td>') : (i = e + 1, n = i - l.previous, o = this._isSelected(t.year, t.month, n), a.push('<td role="gridcell"' + (o ? ' aria-selected="true"' : "") + ' class="ch-calendar-day', t.year === r._dates.today.year && t.month === r._dates.today.month && n === r._dates.today.day ? " ch-calendar-today" : null, o ? " ch-calendar-selected " : null, r._dates.range.from && n < r._dates.range.from.day && t.month === r._dates.range.from.month && t.year === r._dates.range.from.year || r._dates.range.to && n > r._dates.range.to.day && t.month === r._dates.range.to.month && t.year === r._dates.range.to.year ? " ch-calendar-disabled" : null, '">' + n + "</td>"), i % 7 === 0 && a.push('</tr><tr class="ch-calendar-week" role="row">'));
        return a.push("</tr></tbody></table>"), a.join("")
    }, o.prototype._isInRange = function(t) {
        var e = !0,
            i = !0;
        return this._dates.range.from && (e = this._dates.range.from["native"] <= t["native"]), this._dates.range.to && (i = this._dates.range.to["native"] >= t["native"]), e && i
    }, o.prototype._isSelected = function(t, n, o) {
        var r;
        if (this._dates.selected) {
            if (r = !1, i.util.isArray(this._dates.selected)) e.each(this._dates.selected, function(e, s) {
                if (i.util.isArray(s)) {
                    if (t >= s[0].year && n >= s[0].month && o >= s[0].day && t <= s[1].year && n <= s[1].month && o <= s[1].day) return r = !0
                } else if (t === s.year && n === s.month && o === s.day) return r = !0
            });
            else if (t === this._dates.selected.year && n === this._dates.selected.month && o === this._dates.selected.day) return r = !0;
            return r
        }
    }, o.prototype.select = function(t) {
        if (!t) {
            if (void 0 === this._dates.selected) return;
            return s[this._options.format](this._dates.selected)
        }
        var e = a(t);
        return this._isInRange(e) ? (this._dates.selected = "today" === t ? this._dates.today : e, this._updateTemplate(this._dates.selected), this.emit("select"), this) : this
    }, o.prototype.getToday = function() {
        return s[this._options.format](this._dates.today)
    }, o.prototype.nextMonth = function() {
        return this._enabled && this._hasNextMonth() ? (12 === this._dates.current.month && (this._dates.current.month = 0, this._dates.current.year += 1), this._updateTemplate([this._dates.current.year, this._dates.current.month + 1, "01"].join("/")), this.emit("nextmonth"), this) : this
    }, o.prototype.prevMonth = function() {
        return this._enabled && this._hasPrevMonth() ? (1 === this._dates.current.month && (this._dates.current.month = 13, this._dates.current.year -= 1), this._updateTemplate([this._dates.current.year, this._dates.current.month - 1, "01"].join("/")), this.emit("prevmonth"), this) : this
    }, o.prototype.nextYear = function() {
        return this._enabled && this._hasNextMonth() ? (this._updateTemplate([this._dates.current.year + 1, this._dates.current.month, "01"].join("/")), this.emit("nextyear"), this) : this
    }, o.prototype.prevYear = function() {
        return this._enabled && this._hasPrevMonth() ? (this._updateTemplate([this._dates.current.year - 1, this._dates.current.month, "01"].join("/")), this.emit("prevyear"), this) : this
    }, o.prototype.setFrom = function(t) {
        return this._dates.range.from = "auto" === t ? void 0 : a(t), this._updateTemplate(this._dates.current), this
    }, o.prototype.setTo = function(t) {
        return this._dates.range.to = "auto" === t ? void 0 : a(t), this._updateTemplate(this._dates.current), this
    }, o.prototype.destroy = function() {
        this._el.parentNode.replaceChild(this._snippet, this._el), e(t.document).trigger(i.onlayoutchange), h.destroy.call(this)
    }, i.factory(o, n)
}(this, this.ch.$, this.ch),
function(t, e, i) {
    "use strict";

    function n(e, i) {
        var n = this;
        this._init(e, i), void 0 !== this.initialize && this.initialize(), t.setTimeout(function() {
            n.emit("ready")
        }, 50)
    }
    var o = e(t.document),
        r = i.onpointerenter + ".dropdown",
        s = i.util.inherits(n, i.Layer);
    n.prototype.name = "dropdown", n.prototype.constructor = n, n.prototype._defaults = e.extend(i.util.clone(s._defaults), {
        _className: "ch-dropdown ch-box-lite",
        _ariaRole: "combobox",
        fx: "none",
        shownby: "pointertap",
        hiddenby: "pointers",
        offsetY: -1,
        skin: !1,
        shortcuts: !0
    }), n.prototype._init = function(t, n) {
        s._init.call(this, t, n);
        var o = this,
            a = this.$trigger.next();
        return this.$trigger.addClass("ch-dropdown-trigger").prop("aria-activedescendant", "ch-dropdown" + this.uid + "-selected"), i.util.avoidTextSelection(this.$trigger), this._options.skin ? (this.$trigger.addClass("ch-dropdown-trigger-skin"), this.$container.addClass("ch-dropdown-skin")) : this.$trigger.addClass("ch-btn-skin ch-btn-small"), this._$navigation = a.find("a").prop("role", "option"), e.each(this._$navigation, function(t, i) {
            e(i).on(r, function() {
                o._$navigation[o._selected = t].focus()
            })
        }), this._options.shortcuts && void 0 !== this._navigationShortcuts && this._navigationShortcuts(), this._options.content = a, this._snippet = this._options.content[0].cloneNode(), this
    }, n.prototype.show = function(t, e) {
        return this._enabled ? (s.show.call(this, t, e), this._options.skin && this.$trigger.css("z-index", i.util.zIndex += 1), this._selected = -1, this) : this
    }, n.prototype.destroy = function() {
        this.$trigger.off(".dropdown").removeClass("ch-dropdown-trigger ch-dropdown-trigger-skin ch-user-no-select ch-btn-skin ch-btn-small").removeAttr("aria-controls").after(this._snippet), this.$container.off(".dropdown"), o.trigger(i.onlayoutchange), e.each(this._$navigation, function(t, i) {
            e(i).off(r)
        }), s.destroy.call(this)
    }, i.factory(n)
}(this, this.ch.$, this.ch),
function(t) {
    "use strict";
    t.Dropdown.prototype._highlightOption = function(t) {
        var e = this._$navigation.length;
        this._shown && this._selected !== ("down_arrow" === t ? e - 1 : 0) && (-1 !== this._selected && (this._$navigation[this._selected].blur(), this._$navigation[this._selected].removeAttribute("id")), "down_arrow" === t ? this._selected += 1 : this._selected -= 1, this._$navigation[this._selected].focus(), this._$navigation[this._selected].id = "ch-dropdown" + this.uid + "-selected")
    }, t.Dropdown.prototype._navigationShortcuts = function() {
        var e = this;
        return t.shortcuts.add(t.onkeyuparrow, this.uid, function(i) {
            t.util.prevent(i), e._highlightOption(i.type)
        }), t.shortcuts.add(t.onkeydownarrow, this.uid, function(i) {
            t.util.prevent(i), e._highlightOption(i.type)
        }), this.once("destroy", function() {
            t.shortcuts.remove(t.onkeyuparrow, e.uid), t.shortcuts.remove(t.onkeydownarrow, e.uid)
        }), this
    }
}(this.ch),
function(t, e, i) {
    "use strict";

    function n(e, i) {
        var n = this;
        this._init(e, i), void 0 !== this.initialize && this.initialize(), t.setTimeout(function() {
            n.emit("ready")
        }, 50)
    }

    function o(t) {
        n.prototype[t] = function(e) {
            var i;
            if (void 0 !== e) this.tabpanels[e - 1][t]();
            else {
                for (i = this.tabpanels.length; i;) this.tabpanels[i -= 1][t]();
                r[t].call(this), this._el.setAttribute("aria-disabled", !this._enabled)
            }
            return this
        }
    }
    var r = i.util.inherits(n, i.Component),
        s = t.location,
        a = ["enable", "disable"],
        l = a.length,
        h = new RegExp("\\#!?\\/?(.[^\\?|\\&|\\s]+)");
    for (n.prototype.name = "tabs", n.prototype.constructor = n, n.prototype._init = function(t, e) {
            r._init.call(this, t, e);
            var i = this;
            return this._currentHash = function() {
                var t = s.hash.match(h);
                return null !== t ? t[1] : ""
            }(), this._snippet = this._el.cloneNode(!0), this.$container = this._$el.addClass("ch-tabs"), this.$triggers = this.$container.children(":first-child").addClass("ch-tabs-triggers").attr("role", "tablist"), this.tabpanels = [], this.$panel = this.$container.children(":last-child").addClass("ch-tabs-panel ch-box-lite").attr("role", "presentation"), this._$tabsPanels = this.$panel.children(), this.$triggers.find("a").each(function(t, e) {
                i._createTab(t, e)
            }), this._shown = 1, this._hasHash(), this
        }, n.prototype._createTab = function(t, n) {
            var o, r = this,
                s = this._$tabsPanels.eq(t),
                a = {
                    _classNameTrigger: "ch-tab",
                    _classNameContainer: "ch-tabpanel ch-hide",
                    toggle: !1
                };
            return void 0 === s[0] && (s = e('<div id="' + n.href.split("#")[1] + '">').appendTo(this.$panel), a.content = n.href, a.waiting = this._options.waiting, a.cache = this._options.cache, a.method = this._options.method), a.container = s, o = new i.Expandable(e(n), a), o._hash = n.href.split("#")[1], o.$trigger.attr("role", "tab"), o.$container.attr("role", "tabpanel"), o.on("show", function() {
                r._updateShown(t + 1)
            }), this.tabpanels.push(o), this
        }, n.prototype._hasHash = function() {
            var t = 0,
                e = this.tabpanels.length;
            for (t; e > t; t += 1)
                if (this.tabpanels[t]._hash === this._currentHash) {
                    this._shown = t + 1;
                    break
                }
            return this.tabpanels[this._shown - 1].show(), this.emit("show", this._shown), this
        }, n.prototype.show = function(t) {
            return this.tabpanels[t - 1].show(), this
        }, n.prototype._updateShown = function(t) {
            return this._shown === t ? this : (this.tabpanels[this._shown - 1].hide(), this._shown = t, s.hash = this._currentHash = "" === this._currentHash ? "#!/" + this.tabpanels[this._shown - 1]._hash : s.hash.replace(s.hash.match(h)[1], this.tabpanels[this._shown - 1]._hash), this.emit("show", this._shown), this)
        }, n.prototype.getShown = function() {
            return this._shown
        }, n.prototype.content = function(e, i, n) {
            if (void 0 === e || "number" != typeof e) throw new t.Error("Tabs.content(tab, content, options): Expected a number of tab.");
            return void 0 === i ? this.tab[e - 1].content() : (this.tabpanels[e - 1].content(i, n), this)
        }; l;) o(a[l -= 1]);
    n.prototype.destroy = function() {
        this._el.parentNode.replaceChild(this._snippet, this._el), e(t.document).trigger(i.onlayoutchange), r.destroy.call(this)
    }, i.factory(n)
}(this, this.ch.$, this.ch),
function(t, e, i) {
    "use strict";

    function n(e, i) {
        var n = this;
        this._init(e, i), void 0 !== this.initialize && this.initialize(), t.setTimeout(function() {
            n.emit("ready")
        }, 50)
    }
    var o = i.onpointertap + ".carousel",
        r = t.Math,
        s = t.setTimeout,
        a = i.util.inherits(n, i.Component);
    n.prototype.name = "carousel", n.prototype.constructor = n, n.prototype._defaults = {
        async: 0,
        arrows: !0,
        pagination: !1,
        fx: !0
    }, n.prototype._init = function(n, r) {
        a._init.call(this, n, r);
        var s = this;
        return this._snippet = this._el.cloneNode(!0), this._$list = this._$el.addClass("ch-carousel").children().addClass("ch-carousel-list"), this._$items = this._$list.children().addClass("ch-carousel-item"), this._$mask = e('<div class="ch-carousel-mask" role="tabpanel">').html(this._$list).appendTo(this._$el), this._maskWidth = i.util.getOuterDimensions(this._$mask[0]).width, this._itemWidth = this._$items.width(), this._itemOuterWidth = i.util.getOuterDimensions(this._$items[0]).width, this._itemExtraWidth = 0, this._itemHeight = this._$items.height(), this._itemMargin = 0, this._arrowsCreated = !1, this._paginationCreated = !1, this._limitPerPage = 0, this._currentPage = 1, this._pages = 0, this._pageWidth = 0, this._async = this._options.async, this._$prevArrow = e('<div class="ch-carousel-prev ch-carousel-disabled" role="button" aria-hidden="true">').on(o, function() {
            s.prev()
        }), s._$nextArrow = e('<div class="ch-carousel-next" role="button" aria-hidden="false">').on(o, function() {
            s.next()
        }), this._$pagination = e('<div class="ch-carousel-pages" role="navigation">').on(o, function(e) {
            var i = e.target.getAttribute("data-page");
            null !== i && s.select(t.parseInt(i, 10))
        }), i.viewport.on("resize", function() {
            s.refresh()
        }), this._options.fx || this._$list.addClass("ch-carousel-nofx"), i.support.transition || this._$list.css({
            position: "absolute",
            left: "0"
        }), void 0 !== this._options.pagination && this._addPagination(), void 0 !== this._options.arrows && this._options.arrows !== !1 && this._addArrows(), this._updateARIA(), this._updateLimitPerPage(), this._updateDistribution(), this
    }, n.prototype._updateARIA = function() {
        var t, i = this,
            n = this._$items.length + this._async;
        e.each(this._$items, function(e, o) {
            t = r.floor(e / i._limitPerPage) + 1, o.setAttribute("aria-hidden", t !== i._currentPage), o.setAttribute("aria-setsize", n), o.setAttribute("aria-posinset", e + 1), o.setAttribute("aria-label", "page" + t)
        })
    }, n.prototype._loadAsyncItems = function() {
        if (0 !== this._async) {
            var t, i = this._currentPage * this._limitPerPage,
                n = i - this._$items.length,
                o = this._itemWidth + this._itemExtraWidth,
                r = (o * this._itemHeight / this._itemWidth).toFixed(3),
                s = ["<li", ' class="ch-carousel-item"', ' style="width:' + o + "px;height:" + r + "px;margin-right:" + this._itemMargin + 'px"', "></li>"].join(""),
                a = "";
            if (!(1 > n)) {
                for (n = this._async < n ? this._async : n; n;) a += s, n -= 1;
                t = e(a), this._$list.append(t), this._$items = this._$list.children(), this._updateARIA(), this._async -= n, this.emit("itemsadd", t)
            }
        }
    }, n.prototype._addPagination = function() {
        this._paginationCreated && this._removePagination();
        for (var t, e = this, n = [], o = e._pages; o;) t = o === e._currentPage, n.unshift("<span", ' role="button"', ' aria-selected="' + t + '"', ' aria-controls="page' + o + '"', ' data-page="' + o + '"', ' class="' + (t ? "ch-carousel-selected" : "") + '"', ">" + o + "</span>"), o -= 1;
        e._$pagination.html(n.join("")).appendTo(e._$el), i.util.avoidTextSelection(e._$pagination), e._paginationCreated = !0
    }, n.prototype._removePagination = function() {
        this._paginationCreated && (this._$pagination[0].innerHTML = "", this._paginationCreated = !1)
    }, n.prototype._standbyFX = function(t) {
        var e = this;
        this._options.fx ? (this._$list.addClass("ch-carousel-nofx"), t.call(this), s(function() {
            e._$list.removeClass("ch-carousel-nofx")
        }, 0)) : t.call(this)
    }, n.prototype._updatePages = function() {
        this._pages = r.ceil((this._$items.length + this._async) / this._limitPerPage), this._loadAsyncItems(), this._updateARIA(), this._updateArrows(), this._addPagination()
    }, n.prototype._updateLimitPerPage = function() {
        var t, e = this._options.limitPerPage,
            i = r.floor(this._maskWidth / this._itemOuterWidth) || 1;
        void 0 !== e && i > e && (i = e), i !== this._limitPerPage && (t = (this._currentPage - 1) * this._limitPerPage + 1, this._limitPerPage = i, this._updatePages(), this.select(r.ceil(t / i)))
    }, n.prototype._updateDistribution = function() {
        var t, e, n = this._limitPerPage > 1,
            o = this._maskWidth - this._itemOuterWidth * this._limitPerPage,
            s = n ? r.ceil(o / this._limitPerPage / 2) : r.ceil(o);
        s === this._itemExtraWidth && s > 0 || (this._itemExtraWidth = s, t = n ? this._limitPerPage - 1 : 0, e = this._itemWidth + s, this._itemMargin = n ? r.ceil(o / t / 2) : 0, this._pageWidth = (this._itemOuterWidth + s + this._itemMargin) * this._limitPerPage, this._standbyFX(function() {
            this._$list.css("width", this._pageWidth * this._pages)
        }), this._$items.css({
            width: e,
            height: (e * this._itemHeight / this._itemWidth).toFixed(3),
            "margin-right": this._itemMargin
        }), this._$mask[0].style.height = i.util.getOuterDimensions(this._$items[0]).height + "px", this._standbyFX(function() {
            this._translate(-this._pageWidth * (this._currentPage - 1))
        }))
    }, n.prototype._addArrows = function() {
        i.util.avoidTextSelection(this._$prevArrow, this._$nextArrow), this._$el.prepend(this._$prevArrow).append(this._$nextArrow), this._arrowsCreated = !0
    }, n.prototype._disableArrows = function(t, e) {
        this._$prevArrow.attr("aria-disabled", t)[t ? "addClass" : "removeClass"]("ch-carousel-disabled"), this._$nextArrow.attr("aria-disabled", e)[e ? "addClass" : "removeClass"]("ch-carousel-disabled")
    }, n.prototype._updateArrows = function() {
        this._arrowsCreated && (1 === this._pages ? this._disableArrows(!0, !0) : 1 === this._currentPage ? this._disableArrows(!0, !1) : this._currentPage === this._pages ? this._disableArrows(!1, !0) : this._disableArrows(!1, !1))
    }, n.prototype._translate = function() {
        var t = "-" + i.util.VENDOR_PREFIX + "-transform";
        return i.support.transition ? function(e) {
            this._$list.css(t, "translateX(" + e + "px)")
        } : function(t) {
            this._$list[this._options.fx ? "animate" : "css"]({
                left: t
            })
        }
    }(), n.prototype._switchPagination = function(t, e) {
        if (this._paginationCreated) {
            var i = this._$pagination.children();
            i.eq(t - 1).attr("aria-selected", !1).removeClass("ch-carousel-selected"), i.eq(e - 1).attr("aria-selected", !0).addClass("ch-carousel-selected")
        }
    }, n.prototype.refresh = function() {
        var t = this,
            e = i.util.getOuterDimensions(this._$mask[0]).width;
        return e !== this._maskWidth && (this._maskWidth = e, this._updateLimitPerPage(), this._updateDistribution(), this.emit("refresh")), this._$list.children().length !== this._$items.length && (this._$items = this._$list.children(), this._updatePages(), this._currentPage > this._pages && this._standbyFX(function() {
            t.select(t._pages)
        }), this.emit("refresh")), this
    }, n.prototype.select = function(t) {
        return void 0 === t ? this._currentPage : !this._enabled || t === this._currentPage || 1 > t || t > this._pages ? this : (this._translate(-this._pageWidth * (t - 1)), this._switchPagination(this._currentPage, t), this._currentPage = t, this._updateArrows(), this._loadAsyncItems(), this.emit("select"), this)
    }, n.prototype.prev = function() {
        return this.select(this._currentPage - 1), this.emit("prev"), this
    }, n.prototype.next = function() {
        return this.select(this._currentPage + 1), this.emit("next"), this
    }, n.prototype.enable = function() {
        return this._el.setAttribute("aria-disabled", !1), this._disableArrows(!1, !1), a.enable.call(this), this
    }, n.prototype.disable = function() {
        return this._el.setAttribute("aria-disabled", !0), this._disableArrows(!0, !0), a.disable.call(this), this
    }, n.prototype.destroy = function() {
        this._el.parentNode.replaceChild(this._snippet, this._el), e(t.document).trigger(i.onlayoutchange), a.destroy.call(this)
    }, i.factory(n)
}(this, this.ch.$, this.ch),
function(t, e, i) {
    "use strict";

    function n(e) {
        var i = t.parseInt(e, 10);
        return t.isNaN(i) || (e = {
            max: i
        }), e
    }

    function o(e, i) {
        var n = this;
        n._init(e, i), void 0 !== this.initialize && this.initialize(), t.setTimeout(function() {
            n.emit("ready")
        }, 50)
    }
    var r = i.util.inherits(o, i.Component);
    o.prototype.name = "countdown", o.prototype.constructor = o, o.prototype._defaults = {
        plural: "# characters left.",
        singular: "# character left.",
        max: 500
    }, o.prototype._init = function(t, i) {
        r._init.call(this, t, i);
        var n, o = this,
            s = "ch-countdown-message-" + o.uid;
        return this.$trigger = this._$el.on("keyup.countdown keypress.countdown keydown.countdown paste.countdown cut.countdown", function() {
            o._count()
        }), o._remaining = o._options.max - o._contentLength(), n = 1 === o._remaining ? o._options.singular : o._options.plural, o.$container = e('<p class="ch-countdown ch-form-hint" id="' + s + '">' + n.replace("#", o._remaining) + "</p>").appendTo(o._$el.parent()), this.on("disable", this._removeError), this
    }, o.prototype._contentLength = function() {
        return this._el.value.length
    }, o.prototype._count = function() {
        if (!this._enabled) return this;
        var t, e = this._contentLength();
        return this._remaining = this._options.max - e, e <= this._options.max ? this._exceeded && (this._exceeded = !1, this._removeError()) : e > this._options.max && (this.emit("exceed"), this._exceeded = !0, this.$trigger.addClass("ch-validation-error").attr("aria-invalid", "true"), this.$container.addClass("ch-countdown-exceeded")), t = (1 !== this._remaining ? this._options.plural : this._options.singular).replace(/\#/g, this._remaining), this.$container.text(t), this
    }, o.prototype._removeError = function() {
        return this.$trigger.removeClass("ch-validation-error").attr("aria-invalid", "false"), this.$container.removeClass("ch-countdown-exceeded"), this
    }, o.prototype.destroy = function() {
        this.$trigger.off(".countdown"), this.$container.remove(), e(t.document).trigger(i.onlayoutchange), r.destroy.call(this)
    }, i.factory(o, n)
}(this, this.ch.$, this.ch),
function(t, e, i) {
    "use strict";

    function n(e, i) {
        var n = this;
        this._init(e, i), void 0 !== this.initialize && this.initialize(), t.setTimeout(function() {
            n.emit("ready")
        }, 50)
    }

    function o(t) {
        n.prototype[t] = function() {
            return this._popover[t](), r[t].call(this), this
        }
    }
    var r = i.util.inherits(n, i.Component),
        s = ["enable", "disable"],
        a = s.length;
    for (n.prototype.name = "datepicker", n.prototype.constructor = n, n.prototype._defaults = {
            format: "DD/MM/YYYY",
            side: "bottom",
            align: "center",
            hiddenby: "pointers"
        }, n.prototype._init = function(t, n) {
            r._init.call(this, t, n);
            var o = this;
            return this.field = this._el, this.$trigger = e('<i role="button" class="ch-datepicker-trigger ch-icon-calendar"></i>').insertAfter(this.field), this._calendar = e("<div>").calendar(n), this._popover = this.$trigger.popover({
                _className: "ch-datepicker ch-cone",
                _ariaRole: "tooltip",
                content: this._calendar.$container,
                side: this._options.side,
                align: this._options.align,
                offsetX: 1,
                offsetY: 10,
                shownby: "pointertap",
                hiddenby: this._options.hiddenby
            }), this._popover._$content.on(i.onpointertap, function(t) {
                var e = t.target;
                "TD" === e.nodeName && -1 === e.className.indexOf("ch-calendar-disabled") && -1 === e.className.indexOf("ch-calendar-other") && o.pick(e.innerHTML)
            }), this.field.setAttribute("aria-describedby", "ch-popover-" + this._popover.uid), this.field.type = "text", this.field.value = this._options.selected ? this._calendar.select() : this.field.value, this.on("disable", this.hide), this
        }, n.prototype.show = function() {
            return this._enabled ? (this._popover.show(), this.emit("show"), this) : this
        }, n.prototype.hide = function() {
            return this._popover.hide(), this.emit("hide"), this
        }, n.prototype.pick = function(t) {
            return this.field.value = [this._calendar._dates.current.year, this._calendar._dates.current.month, t].join("/"), this._popover.hide(), this.select(this.field.value), this
        }, n.prototype.select = function(t) {
            return t ? (this._calendar.select(t), this.field.value = this._calendar.select(), this.emit("select"), this) : this._calendar.select()
        }, n.prototype.getToday = function() {
            return this._calendar.getToday()
        }, n.prototype.nextMonth = function() {
            return this._calendar.nextMonth(), this.emit("nextmonth"), this
        }, n.prototype.prevMonth = function() {
            return this._calendar.prevMonth(), this.emit("prevmonth"), this
        }, n.prototype.nextYear = function() {
            return this._calendar.nextYear(), this.emit("nextyear"), this
        }, n.prototype.prevYear = function() {
            return this._calendar.prevYear(), this.emit("prevyear"), this
        }, n.prototype.reset = function() {
            return this.field.value = "", this._calendar.reset(), this.emit("reset"), this
        }, n.prototype.setFrom = function(t) {
            return this._calendar.setFrom(t), this
        }, n.prototype.setTo = function(t) {
            return this._calendar.setTo(t), this
        }; a;) o(s[a -= 1]);
    n.prototype.destroy = function() {
        this.$trigger.remove(), this._el.removeAttribute("aria-describedby"), this._el.type = "date", this._popover.destroy(), r.destroy.call(this)
    }, i.factory(n)
}(this, this.ch.$, this.ch),
function(t, e, i) {
    "use strict";

    function n(e, i) {
        var n = this;
        return this._init(e, i), void 0 !== this.initialize && this.initialize(), t.setTimeout(function() {
            n.emit("ready")
        }, 50), this
    }
    var o = i.util.inherits(n, i.Component);
    n.prototype.name = "autocomplete", n.prototype.constructor = n, n.prototype._defaults = {
        loadingClass: "ch-autocomplete-loading",
        highlightedClass: "ch-autocomplete-highlighted",
        itemClass: "ch-autocomplete-item",
        addClass: "ch-box-lite ch-autocomplete",
        side: "bottom",
        align: "left",
        html: !1,
        _hiddenby: "none",
        keystrokesTime: 150,
        _itemTemplate: '<li class="{{itemClass}}"{{suggestedData}}>{{term}}<i class="ch-icon-arrow-up" data-js="ch-autocomplete-complete-query"></i></li>'
    }, n.prototype._init = function(t, n) {
        var r = this,
            s = "mousedown." + this.name,
            a = "mouseover." + this.name,
            l = i.support.touch ? s : a;
        return o._init.call(this, t, n), this._options._itemTemplate = this._options._itemTemplate.replace("{{itemClass}}", this._options.itemClass), this._options.html && (this._options._itemTemplate = this._options._itemTemplate.replace("{{suggestedData}}", "")), this._$suggestionsList = e('<ul class="ch-autocomplete-list"></ul>'), this._popover = e.popover({
            reference: this._$el,
            content: this._$suggestionsList,
            side: this._options.side,
            align: this._options.align,
            addClass: this._options.addClass,
            hiddenby: this._options._hiddenby,
            width: this._el.getBoundingClientRect().width - 22 + "px",
            fx: this._options.fx
        }), this.$container = this._popover.$container.attr("aria-hidden", "true").on(l, function(t) {
            r._highlightSuggestion(e(t.target))
        }).on(s, function(t) {
            return "I" !== t.target.nodeName || r._options.html ? void(("LI" === t.target.nodeName && -1 !== t.target.className.indexOf(r._options.itemClass) || "LI" === t.target.parentElement.nodeName && -1 !== t.target.parentElement.className.indexOf(r._options.itemClass)) && r._selectSuggestion()) : (i.util.prevent(t), r._el.value = r._suggestions[r._highlighted], void r.emit("type", r._el.value))
        }), this.$trigger = this._$el.attr({
            "aria-autocomplete": "list",
            "aria-haspopup": "true",
            "aria-owns": this.$container[0].id,
            autocomplete: "off"
        }).on("focus." + this.name, function() {
            r._turnOn()
        }).on("blur." + this.name, function() {
            r._turnOff()
        }), this._highlighted = null, this._suggestions = [], this._originalQuery = this._currentQuery = this._el.value, void 0 !== this._configureShortcuts && this._configureShortcuts(), this
    }, n.prototype._turnOn = function() {
        if (!this._enabled) return this;
        var e = this;
        return this._originalQuery = this._el.value, this.$trigger.on(i.onkeyinput, function() {
            return e._currentQuery = e._el.value.replace(/^\s+|\s+$/g, ""), "" === e._currentQuery ? e.hide() : (t.clearTimeout(e._stopTyping), void(e._stopTyping = t.setTimeout(function() {
                e.$trigger.addClass(e._options.loadingClass), e.emit("type", e._currentQuery)
            }, e._options.keystrokesTime)))
        }), this
    }, n.prototype._turnOff = function() {
        return this._enabled ? (this.hide(), this.$trigger.off(i.onkeyinput), this) : this
    }, n.prototype._selectSuggestion = function() {
        return t.clearTimeout(this._stopTyping), null === this._highlighted ? this : (this._options.html || (this._el.value = this._suggestions[this._highlighted]), this._el.blur(), this.emit("select"), this)
    }, n.prototype._highlightSuggestion = function(t) {
        var e = t.attr("aria-posinset") ? t : t.parents("li[aria-posinset]");
        return this._highlighted = void 0 !== e[0] ? parseInt(e.attr("aria-posinset"), 10) - 1 : null, this._toogleHighlighted(), this
    }, n.prototype._toogleHighlighted = function() {
        var t = "#" + this.$container[0].id,
            i = null === this._highlighted ? null : this._highlighted + 1;
        return e(t + " [aria-posinset]." + this._options.highlightedClass).removeClass(this._options.highlightedClass), e(t + ' [aria-posinset="' + i + '"]').addClass(this._options.highlightedClass), this
    }, n.prototype.suggest = function(i) {
        var n, o, r, s, a = this,
            l = [],
            h = new RegExp("(" + this._currentQuery.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1") + ")", "ig"),
            c = 0,
            u = this._options._itemTemplate,
            p = i.length;
        if (this.$trigger.removeClass(a._options.loadingClass), 0 === p) return this._popover.hide(), this;
        for (this._popover.isShown() || t.document.activeElement !== this._el || this._popover.show(), e("." + this._options.highlightedClass, this.$container).removeClass(this._options.highlightedClass), o = 0; p > o; o += 1) r = i[o], a._options.html || (r = r.replace(h, "<strong>$1</strong>"), u = this._options._itemTemplate.replace("{{suggestedData}}", ' data-suggested="' + i[o] + '"')), l.push(u.replace("{{term}}", r));
        for (this._$suggestionsList[0].innerHTML = l.join(""), n = e("." + this._options.itemClass, this.$container), c = n.length, this._suggestions.length = 0, o = 0; c > o; o += 1) s = n[o], a._suggestions.push(s.getAttribute("data-suggested")), s.setAttribute("aria-posinset", a._suggestions.length), s.setAttribute("aria-setsize", c);
        return this._highlighted = null, this._suggestionsQuantity = this._suggestions.length, this
    }, n.prototype.hide = function() {
        return this._enabled ? (this._popover.hide(), this.emit("hide"), this) : this
    }, n.prototype.isShown = function() {
        return this._popover.isShown()
    }, n.prototype.disable = function() {
        return this.isShown() && (this.hide(), this._el.blur()), o.disable.call(this), this
    }, n.prototype.destroy = function() {
        this.$trigger.off("." + this.name).removeAttr("autocomplete aria-autocomplete aria-haspopup aria-owns"), this._popover.destroy(), o.destroy.call(this)
    }, i.factory(n)
}(this, this.ch.$, this.ch),
function(t, e) {
    "use strict";
    t.prototype._configureShortcuts = function() {
        var t = this;
        return e.shortcuts.add(e.onkeyenter, this.uid, function(i) {
            e.util.prevent(i), t._selectSuggestion()
        }), e.shortcuts.add(e.onkeyesc, this.uid, function() {
            t.hide(), t._el.value = t._originalQuery
        }), e.shortcuts.add(e.onkeyuparrow, this.uid, function(i) {
            e.util.prevent(i);
            var n;
            null === t._highlighted ? (t._highlighted = t._suggestionsQuantity - 1, n = t._suggestions[t._highlighted]) : t._highlighted <= 0 ? (this._prevHighlighted = this._currentHighlighted = null, n = t._currentQuery) : (t._highlighted -= 1, n = t._suggestions[t._highlighted]), t._toogleHighlighted(), t._options.html || (t._el.value = n)
        }), e.shortcuts.add(e.onkeydownarrow, this.uid, function() {
            var e;
            null === t._highlighted ? (t._highlighted = 0, e = t._suggestions[t._highlighted]) : t._highlighted >= t._suggestionsQuantity - 1 ? (t._highlighted = null, e = t._currentQuery) : (t._highlighted += 1, e = t._suggestions[t._highlighted]), t._toogleHighlighted(), t._options.html || (t._el.value = e)
        }), this._popover.on("show", function() {
            e.shortcuts.on(t.uid)
        }), this._popover.on("hide", function() {
            e.shortcuts.off(t.uid)
        }), this.on("destroy", function() {
            e.shortcuts.remove(this.uid)
        }), this
    }
}(this.ch.Autocomplete, this.ch), $(document).ready(function() {
    $(".relatedCarousel").carousel({
        pagination: !0
    })
});