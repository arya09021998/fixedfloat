!(function () {
    function l(t) {
        return "function" == typeof t || "[object Function]" === e.call(t);
    }

    function h(t) {
        return (
            (t = (function (t) {
                t = Number(t);
                return isNaN(t) ? 0 : 0 !== t && isFinite(t) ? (0 < t ? 1 : -1) * Math.floor(Math.abs(t)) : t;
            })(t)),
                Math.min(Math.max(t, 0), i)
        );
    }

    var e, i;
    Element.prototype.remove ||
    (Element.prototype.remove = function () {
        this.parentNode && this.parentNode.removeChild(this);
    }),
    Element.prototype.closest ||
    (Element.prototype.closest = function (t) {
        for (var e = this; e;) {
            if (e.matches(t)) return e;
            e = e.parentElement;
        }
        return null;
    }),
    Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector),
    Array.from ||
    (Array.from =
        ((e = Object.prototype.toString),
            (i = Math.pow(2, 53) - 1),
            function (t) {
                var e = Object(t);
                if (null == t) throw new TypeError("Array.from requires an array-like object - not null or undefined");
                var i,
                    r = 1 < arguments.length ? arguments[1] : void 0;
                if (void 0 !== r) {
                    if (!l(r)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                    2 < arguments.length && (i = arguments[2]);
                }
                for (var n, s = h(e.length), a = l(this) ? Object(new this(s)) : new Array(s), o = 0; o < s;) (n = e[o]), (a[o] = r ? (void 0 === i ? r(n, o) : r.call(i, n, o)) : n), (o += 1);
                return (a.length = s), a;
            }));
})(),
    (function () {
        function i(t) {
            var e = 0;
            return function () {
                return e < t.length ? {done: !1, value: t[e++]} : {done: !0};
            };
        }

        var e =
                "function" == typeof Object.defineProperties
                    ? Object.defineProperty
                    : function (t, e, i) {
                        t != Array.prototype && t != Object.prototype && (t[e] = i.value);
                    },
            r = ("undefined" == typeof window || window !== this) && "undefined" != typeof global && null != global ? global : this;

        function n() {
            (n = function () {
            }), r.Symbol || (r.Symbol = a);
        }

        var s,
            t,
            a =
                ((s = 0),
                    function (t) {
                        return "jscomp_symbol_" + (t || "") + s++;
                    });

        function o() {
            n();
            var t = (t = r.Symbol.iterator) || (r.Symbol.iterator = r.Symbol("iterator"));
            "function" != typeof Array.prototype[t] &&
            e(Array.prototype, t, {
                configurable: !0,
                writable: !0,
                value: function () {
                    return (
                        (t = i(this)),
                            o(),
                            ((t = {next: t})[r.Symbol.iterator] = function () {
                                return this;
                            }),
                            t
                    );
                    var t;
                },
            }),
                (o = function () {
                });
        }

        function h(t) {
            var e = "undefined" != typeof Symbol && Symbol.iterator && t[Symbol.iterator];
            return e ? e.call(t) : {next: i(t)};
        }

        if ("function" == typeof Object.setPrototypeOf) c = Object.setPrototypeOf;
        else {
            t: {
                var l = {};
                try {
                    (l.__proto__ = {o: !0}), (t = l.o);
                    break t;
                } catch (t) {
                }
                t = !1;
            }
            c = t
                ? function (t, e) {
                    if (((t.__proto__ = e), t.__proto__ !== e)) throw new TypeError(t + " is not extensible");
                    return t;
                }
                : null;
        }
        var p,
            c,
            f = c;

        function d() {
            (this.g = !1), (this.c = null), (this.m = void 0), (this.b = 1), (this.l = this.s = 0), (this.f = null);
        }

        function u(t) {
            if (t.g) throw new TypeError("Generator is already running");
            t.g = !0;
        }

        function m(t, e, i) {
            return (t.b = i), {value: e};
        }

        function y(t) {
            for (var e in ((this.w = t), (this.j = []), t)) this.j.push(e);
            this.j.reverse();
        }

        function g(t) {
            (this.a = new d()), (this.A = t);
        }

        function v(e, t, i, r) {
            try {
                var n = t.call(e.a.c, i);
                if (!(n instanceof Object)) throw new TypeError("Iterator result " + n + " is not an object");
                if (!n.done) return (e.a.g = !1), n;
                var s = n.value;
            } catch (t) {
                return (e.a.c = null), e.a.i(t), b(e);
            }
            return (e.a.c = null), r.call(e.a, s), b(e);
        }

        function b(e) {
            for (; e.a.b;)
                try {
                    var t = e.A(e.a);
                    if (t) return (e.a.g = !1), {value: t.value, done: !1};
                } catch (t) {
                    (e.a.m = void 0), e.a.i(t);
                }
            if (((e.a.g = !1), e.a.f)) {
                if (((t = e.a.f), (e.a.f = null), t.v)) throw t.u;
                return {value: t.return, done: !0};
            }
            return {value: void 0, done: !0};
        }

        function x(e) {
            (this.next = function (t) {
                return e.h(t);
            }),
                (this.throw = function (t) {
                    return e.i(t);
                }),
                (this.return = function (t) {
                    return (function (t, e) {
                        u(t.a);
                        var i = t.a.c;
                        return i
                            ? v(
                                t,
                                "return" in i
                                    ? i.return
                                    : function (t) {
                                        return {value: t, done: !0};
                                    },
                                e,
                                t.a.return
                            )
                            : (t.a.return(e), b(t));
                    })(e, t);
                }),
                o(),
                (this[Symbol.iterator] = function () {
                    return this;
                });
        }

        function E(t, e) {
            e = new x(new g(e));
            return f && f(e, t.prototype), e;
        }

        if (
            ((d.prototype.h = function (t) {
                this.m = t;
            }),
                (d.prototype.i = function (t) {
                    (this.f = {u: t, v: !0}), (this.b = this.s || this.l);
                }),
                (d.prototype.return = function (t) {
                    (this.f = {return: t}), (this.b = this.l);
                }),
                (g.prototype.h = function (t) {
                    return u(this.a), this.a.c ? v(this, this.a.c.next, t, this.a.h) : (this.a.h(t), b(this));
                }),
                (g.prototype.i = function (t) {
                    return u(this.a), this.a.c ? v(this, this.a.c.throw, t, this.a.h) : (this.a.i(t), b(this));
                }),
            "undefined" == typeof FormData || !FormData.prototype.keys)
        ) {
            function C(t, e) {
                for (var i = 0; i < t.length; i++) e(t[i]);
            }

            function P(t) {
                var e = h(t);
                return (t = e.next().value), (e = e.next().value), (t = t instanceof Blob ? new File([t], e, {
                    type: t.type,
                    lastModified: t.lastModified
                }) : t);
            }

            var S = function (t, e, i) {
                    if (arguments.length < 2) throw new TypeError("2 arguments required, but only " + arguments.length + " present.");
                    return e instanceof Blob ? [t + "", e, void 0 !== i ? i + "" : "string" == typeof e.name ? e.name : "blob"] : [t + "", e + ""];
                },
                A = function (t) {
                    if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                    return [t + ""];
                },
                w = "object" == typeof window ? window : "object" == typeof self ? self : this,
                T = w.FormData,
                _ = w.XMLHttpRequest && w.XMLHttpRequest.prototype.send,
                M = w.Request && w.fetch;
            n();
            var k = w.Symbol && Symbol.toStringTag,
                D = new WeakMap(),
                I =
                    Array.from ||
                    function (t) {
                        return [].slice.call(t);
                    };
            k && (Blob.prototype[k] || (Blob.prototype[k] = "Blob"), "File" in w && !File.prototype[k] && (File.prototype[k] = "File"));
            try {
                new File([], "");
            } catch (t) {
                w.File = function (t, e, i) {
                    return (
                        (t = new Blob(t, i)),
                            (i = i && void 0 !== i.lastModified ? new Date(i.lastModified) : new Date()),
                            Object.defineProperties(t, {
                                name: {value: e},
                                lastModifiedDate: {value: i},
                                lastModified: {value: +i},
                                toString: {
                                    value: function () {
                                        return "[object File]";
                                    },
                                },
                            }),
                        k && Object.defineProperty(t, k, {value: "File"}),
                            t
                    );
                };
            }
            n(), o();

            function F(t) {
                if ((D.set(this, Object.create(null)), !t)) return this;
                var i = this;
                C(t.elements, function (e) {
                    var t;
                    e.name &&
                    !e.disabled &&
                    "submit" !== e.type &&
                    "button" !== e.type &&
                    ("file" === e.type
                        ? C(e.files || [], function (t) {
                            i.append(e.name, t);
                        })
                        : "select-multiple" === e.type || "select-one" === e.type
                            ? C(e.options, function (t) {
                                !t.disabled && t.selected && i.append(e.name, t.value);
                            })
                            : "checkbox" === e.type || "radio" === e.type
                                ? e.checked && i.append(e.name, e.value)
                                : ((t = "textarea" === e.type ? (t = "string" == typeof (t = e.value) ? t.replace(/\r\n/g, "\n").replace(/\n/g, "\r\n") : t) : e.value), i.append(e.name, t)));
                });
            }

            ((c = F.prototype).append = function (t, e, i) {
                var r = D.get(this);
                r[t] || (r[t] = []), r[t].push([e, i]);
            }),
                (c.delete = function (t) {
                    delete D.get(this)[t];
                }),
                (c.entries = function t() {
                    var r,
                        n,
                        s,
                        a,
                        o,
                        l = this;
                    return E(t, function (t) {
                        switch (t.b) {
                            case 1:
                                (o = D.get(l)), (n = new y(o));
                            case 2:
                                var e;
                                t: {
                                    for (e = n; 0 < e.j.length;) {
                                        var i = e.j.pop();
                                        if (i in e.w) {
                                            e = i;
                                            break t;
                                        }
                                    }
                                    e = null;
                                }
                                if (null == (r = e)) {
                                    t.b = 0;
                                    break;
                                }
                                (s = h(o[r])), (a = s.next());
                            case 5:
                                if (a.done) {
                                    t.b = 2;
                                    break;
                                }
                                return (o = a.value), m(t, [r, P(o)], 6);
                            case 6:
                                (a = s.next()), (t.b = 5);
                        }
                    });
                }),
                (c.forEach = function (t, e) {
                    for (var i = h(this), r = i.next(); !r.done; r = i.next()) {
                        var r = (n = h(r.value)).next().value,
                            n = n.next().value;
                        t.call(e, n, r, this);
                    }
                }),
                (c.get = function (t) {
                    var e = D.get(this);
                    return e[t] ? P(e[t][0]) : null;
                }),
                (c.getAll = function (t) {
                    return (D.get(this)[t] || []).map(P);
                }),
                (c.has = function (t) {
                    return t in D.get(this);
                }),
                (c.keys = function t() {
                    var e,
                        i,
                        r,
                        n = this;
                    return E(t, function (t) {
                        return 1 == t.b && ((e = h(n)), (i = e.next())), 3 != t.b ? (i.done ? void (t.b = 0) : ((r = i.value), (r = h(r)), m(t, r.next().value, 3))) : ((i = e.next()), void (t.b = 2));
                    });
                }),
                (c.set = function (t, e, i) {
                    D.get(this)[t] = [[e, i]];
                }),
                (c.values = function t() {
                    var e,
                        i,
                        r,
                        n = this;
                    return E(t, function (t) {
                        return 1 == t.b && ((e = h(n)), (i = e.next())), 3 != t.b ? (i.done ? void (t.b = 0) : ((r = i.value), (r = h(r)).next(), m(t, r.next().value, 3))) : ((i = e.next()), void (t.b = 2));
                    });
                }),
                (F.prototype._asNative = function () {
                    for (var t = new T(), e = h(this), i = e.next(); !i.done; i = e.next()) {
                        var i = (r = h(i.value)).next().value,
                            r = r.next().value;
                        t.append(i, r);
                    }
                    return t;
                }),
                (F.prototype._blob = function () {
                    for (var t = "----formdata-polyfill-" + Math.random(), e = [], i = h(this), r = i.next(); !r.done; r = i.next()) {
                        var r = (n = h(r.value)).next().value,
                            n = n.next().value;
                        e.push("--" + t + "\r\n"),
                            n instanceof Blob
                                ? e.push('Content-Disposition: form-data; name="' + r + '"; filename="' + n.name + '"\r\n', "Content-Type: " + (n.type || "application/octet-stream") + "\r\n\r\n", n, "\r\n")
                                : e.push('Content-Disposition: form-data; name="' + r + '"\r\n\r\n' + n + "\r\n");
                    }
                    return e.push("--" + t + "--"), new Blob(e, {type: "multipart/form-data; boundary=" + t});
                }),
                (F.prototype[Symbol.iterator] = function () {
                    return this.entries();
                }),
                (F.prototype.toString = function () {
                    return "[object FormData]";
                }),
            k && (F.prototype[k] = "FormData"),
                [
                    ["append", S],
                    ["delete", A],
                    ["get", A],
                    ["getAll", A],
                    ["has", A],
                    ["set", S],
                ].forEach(function (t) {
                    var e = F.prototype[t[0]];
                    F.prototype[t[0]] = function () {
                        return e.apply(this, t[1].apply(this, I(arguments)));
                    };
                }),
            _ &&
            (XMLHttpRequest.prototype.send = function (t) {
                t instanceof F && ((t = t._blob()), this.setRequestHeader("Content-Type", t.type)), _.call(this, t);
            }),
            M &&
            ((p = w.fetch),
                (w.fetch = function (t, e) {
                    return e && e.body && e.body instanceof F && (e.body = e.body._blob()), p(t, e);
                })),
                (w.FormData = F);
        }
    })(),
    (function (t) {
        "use strict";
        var e, i, a, r, n, s, o, l, h, p;

        function c(t) {
            if (("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase();
        }

        function f(t) {
            return (t = "string" != typeof t ? String(t) : t);
        }

        function d(e) {
            var t = {
                next: function () {
                    var t = e.shift();
                    return {done: void 0 === t, value: t};
                },
            };
            return (
                i &&
                (t[Symbol.iterator] = function () {
                    return t;
                }),
                    t
            );
        }

        function u(e) {
            (this.map = {}),
                e instanceof u
                    ? e.forEach(function (t, e) {
                        this.append(e, t);
                    }, this)
                    : Array.isArray(e)
                        ? e.forEach(function (t) {
                            this.append(t[0], t[1]);
                        }, this)
                        : e &&
                        Object.getOwnPropertyNames(e).forEach(function (t) {
                            this.append(t, e[t]);
                        }, this);
        }

        function m(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0;
        }

        function y(i) {
            return new Promise(function (t, e) {
                (i.onload = function () {
                    t(i.result);
                }),
                    (i.onerror = function () {
                        e(i.error);
                    });
            });
        }

        function g(t) {
            var e = new FileReader(),
                i = y(e);
            return e.readAsArrayBuffer(t), i;
        }

        function v(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer;
        }

        function b() {
            return (
                (this.bodyUsed = !1),
                    (this._initBody = function (t) {
                        if ((this._bodyInit = t))
                            if ("string" == typeof t) this._bodyText = t;
                            else if (a && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                            else if (r && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                            else if (e && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                            else if (n && a && o(t)) (this._bodyArrayBuffer = v(t.buffer)), (this._bodyInit = new Blob([this._bodyArrayBuffer]));
                            else {
                                if (!n || (!ArrayBuffer.prototype.isPrototypeOf(t) && !l(t))) throw new Error("unsupported BodyInit type");
                                this._bodyArrayBuffer = v(t);
                            }
                        else this._bodyText = "";
                        this.headers.get("content-type") ||
                        ("string" == typeof t
                            ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                            : this._bodyBlob && this._bodyBlob.type
                                ? this.headers.set("content-type", this._bodyBlob.type)
                                : e && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
                    }),
                a &&
                ((this.blob = function () {
                    var t = m(this);
                    if (t) return t;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]));
                }),
                    (this.arrayBuffer = function () {
                        return this._bodyArrayBuffer ? m(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g);
                    })),
                    (this.text = function () {
                        var t,
                            e,
                            i = m(this);
                        if (i) return i;
                        if (this._bodyBlob) return (t = this._bodyBlob), (i = y((e = new FileReader()))), e.readAsText(t), i;
                        if (this._bodyArrayBuffer)
                            return Promise.resolve(
                                (function (t) {
                                    for (var e = new Uint8Array(t), i = new Array(e.length), r = 0; r < e.length; r++) i[r] = String.fromCharCode(e[r]);
                                    return i.join("");
                                })(this._bodyArrayBuffer)
                            );
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText);
                    }),
                r &&
                (this.formData = function () {
                    return this.text().then(E);
                }),
                    (this.json = function () {
                        return this.text().then(JSON.parse);
                    }),
                    this
            );
        }

        function x(t, e) {
            var i,
                r = (e = e || {}).body;
            if (t instanceof x) {
                if (t.bodyUsed) throw new TypeError("Already read");
                (this.url = t.url), (this.credentials = t.credentials), e.headers || (this.headers = new u(t.headers)), (this.method = t.method), (this.mode = t.mode), r || null == t._bodyInit || ((r = t._bodyInit), (t.bodyUsed = !0));
            } else this.url = String(t);
            if (
                ((this.credentials = e.credentials || this.credentials || "omit"),
                (!e.headers && this.headers) || (this.headers = new u(e.headers)),
                    (this.method = ((t = (i = e.method || this.method || "GET").toUpperCase()), -1 < h.indexOf(t) ? t : i)),
                    (this.mode = e.mode || this.mode || null),
                    (this.referrer = null),
                ("GET" === this.method || "HEAD" === this.method) && r)
            )
                throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(r);
        }

        function E(t) {
            var i = new FormData();
            return (
                t
                    .trim()
                    .split("&")
                    .forEach(function (t) {
                        var e;
                        t && ((t = (e = t.split("=")).shift().replace(/\+/g, " ")), (e = e.join("=").replace(/\+/g, " ")), i.append(decodeURIComponent(t), decodeURIComponent(e)));
                    }),
                    i
            );
        }

        function C(t, e) {
            (e = e || {}),
                (this.type = "default"),
                (this.status = void 0 === e.status ? 200 : e.status),
                (this.ok = 200 <= this.status && this.status < 300),
                (this.statusText = "statusText" in e ? e.statusText : "OK"),
                (this.headers = new u(e.headers)),
                (this.url = e.url || ""),
                this._initBody(t);
        }

        t.fetch ||
        ((e = "URLSearchParams" in t),
            (i = "Symbol" in t && "iterator" in Symbol),
            (a =
                "FileReader" in t &&
                "Blob" in t &&
                (function () {
                    try {
                        return new Blob(), !0;
                    } catch (t) {
                        return !1;
                    }
                })()),
            (r = "FormData" in t),
        (n = "ArrayBuffer" in t) &&
        ((s = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
        ]),
            (o = function (t) {
                return t && DataView.prototype.isPrototypeOf(t);
            }),
            (l =
                ArrayBuffer.isView ||
                function (t) {
                    return t && -1 < s.indexOf(Object.prototype.toString.call(t));
                })),
            (u.prototype.append = function (t, e) {
                (t = c(t)), (e = f(e));
                var i = this.map[t];
                this.map[t] = i ? i + "," + e : e;
            }),
            (u.prototype.delete = function (t) {
                delete this.map[c(t)];
            }),
            (u.prototype.get = function (t) {
                return (t = c(t)), this.has(t) ? this.map[t] : null;
            }),
            (u.prototype.has = function (t) {
                return this.map.hasOwnProperty(c(t));
            }),
            (u.prototype.set = function (t, e) {
                this.map[c(t)] = f(e);
            }),
            (u.prototype.forEach = function (t, e) {
                for (var i in this.map) this.map.hasOwnProperty(i) && t.call(e, this.map[i], i, this);
            }),
            (u.prototype.keys = function () {
                var i = [];
                return (
                    this.forEach(function (t, e) {
                        i.push(e);
                    }),
                        d(i)
                );
            }),
            (u.prototype.values = function () {
                var e = [];
                return (
                    this.forEach(function (t) {
                        e.push(t);
                    }),
                        d(e)
                );
            }),
            (u.prototype.entries = function () {
                var i = [];
                return (
                    this.forEach(function (t, e) {
                        i.push([e, t]);
                    }),
                        d(i)
                );
            }),
        i && (u.prototype[Symbol.iterator] = u.prototype.entries),
            (h = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"]),
            (x.prototype.clone = function () {
                return new x(this, {body: this._bodyInit});
            }),
            b.call(x.prototype),
            b.call(C.prototype),
            (C.prototype.clone = function () {
                return new C(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new u(this.headers),
                    url: this.url
                });
            }),
            (C.error = function () {
                var t = new C(null, {status: 0, statusText: ""});
                return (t.type = "error"), t;
            }),
            (p = [301, 302, 303, 307, 308]),
            (C.redirect = function (t, e) {
                if (-1 === p.indexOf(e)) throw new RangeError("Invalid status code");
                return new C(null, {status: e, headers: {location: t}});
            }),
            (t.Headers = u),
            (t.Request = x),
            (t.Response = C),
            (t.fetch = function (i, s) {
                return new Promise(function (r, t) {
                    var e = new x(i, s),
                        n = new XMLHttpRequest();
                    (n.onload = function () {
                        var i,
                            t = {
                                status: n.status,
                                statusText: n.statusText,
                                headers:
                                    ((e = n.getAllResponseHeaders() || ""),
                                        (i = new u()),
                                        e
                                            .replace(/\r?\n[\t ]+/g, " ")
                                            .split(/\r?\n/)
                                            .forEach(function (t) {
                                                var e = t.split(":"),
                                                    t = e.shift().trim();
                                                t && ((e = e.join(":").trim()), i.append(t, e));
                                            }),
                                        i),
                            };
                        t.url = "responseURL" in n ? n.responseURL : t.headers.get("X-Request-URL");
                        var e = "response" in n ? n.response : n.responseText;
                        r(new C(e, t));
                    }),
                        (n.onerror = function () {
                            t(new TypeError("Network request failed"));
                        }),
                        (n.ontimeout = function () {
                            t(new TypeError("Network request failed"));
                        }),
                        n.open(e.method, e.url, !0),
                        "include" === e.credentials ? (n.withCredentials = !0) : "omit" === e.credentials && (n.withCredentials = !1),
                    "responseType" in n && a && (n.responseType = "blob"),
                        e.headers.forEach(function (t, e) {
                            n.setRequestHeader(e, t);
                        }),
                        n.send(void 0 === e._bodyInit ? null : e._bodyInit);
                });
            }),
            (t.fetch.polyfill = !0));
    })("undefined" != typeof self ? self : this),
    (function (t) {
        "use strict";
        var e, i, a, r, n, s, o, l, h, p;

        function c(t) {
            if (("string" != typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(t))) throw new TypeError("Invalid character in header field name");
            return t.toLowerCase();
        }

        function f(t) {
            return (t = "string" != typeof t ? String(t) : t);
        }

        function d(e) {
            var t = {
                next: function () {
                    var t = e.shift();
                    return {done: void 0 === t, value: t};
                },
            };
            return (
                i &&
                (t[Symbol.iterator] = function () {
                    return t;
                }),
                    t
            );
        }

        function u(e) {
            (this.map = {}),
                e instanceof u
                    ? e.forEach(function (t, e) {
                        this.append(e, t);
                    }, this)
                    : Array.isArray(e)
                        ? e.forEach(function (t) {
                            this.append(t[0], t[1]);
                        }, this)
                        : e &&
                        Object.getOwnPropertyNames(e).forEach(function (t) {
                            this.append(t, e[t]);
                        }, this);
        }

        function m(t) {
            if (t.bodyUsed) return Promise.reject(new TypeError("Already read"));
            t.bodyUsed = !0;
        }

        function y(i) {
            return new Promise(function (t, e) {
                (i.onload = function () {
                    t(i.result);
                }),
                    (i.onerror = function () {
                        e(i.error);
                    });
            });
        }

        function g(t) {
            var e = new FileReader(),
                i = y(e);
            return e.readAsArrayBuffer(t), i;
        }

        function v(t) {
            if (t.slice) return t.slice(0);
            var e = new Uint8Array(t.byteLength);
            return e.set(new Uint8Array(t)), e.buffer;
        }

        function b() {
            return (
                (this.bodyUsed = !1),
                    (this._initBody = function (t) {
                        if ((this._bodyInit = t))
                            if ("string" == typeof t) this._bodyText = t;
                            else if (a && Blob.prototype.isPrototypeOf(t)) this._bodyBlob = t;
                            else if (r && FormData.prototype.isPrototypeOf(t)) this._bodyFormData = t;
                            else if (e && URLSearchParams.prototype.isPrototypeOf(t)) this._bodyText = t.toString();
                            else if (n && a && o(t)) (this._bodyArrayBuffer = v(t.buffer)), (this._bodyInit = new Blob([this._bodyArrayBuffer]));
                            else {
                                if (!n || (!ArrayBuffer.prototype.isPrototypeOf(t) && !l(t))) throw new Error("unsupported BodyInit type");
                                this._bodyArrayBuffer = v(t);
                            }
                        else this._bodyText = "";
                        this.headers.get("content-type") ||
                        ("string" == typeof t
                            ? this.headers.set("content-type", "text/plain;charset=UTF-8")
                            : this._bodyBlob && this._bodyBlob.type
                                ? this.headers.set("content-type", this._bodyBlob.type)
                                : e && URLSearchParams.prototype.isPrototypeOf(t) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"));
                    }),
                a &&
                ((this.blob = function () {
                    var t = m(this);
                    if (t) return t;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error("could not read FormData body as blob");
                    return Promise.resolve(new Blob([this._bodyText]));
                }),
                    (this.arrayBuffer = function () {
                        return this._bodyArrayBuffer ? m(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(g);
                    })),
                    (this.text = function () {
                        var t,
                            e,
                            i = m(this);
                        if (i) return i;
                        if (this._bodyBlob) return (t = this._bodyBlob), (i = y((e = new FileReader()))), e.readAsText(t), i;
                        if (this._bodyArrayBuffer)
                            return Promise.resolve(
                                (function (t) {
                                    for (var e = new Uint8Array(t), i = new Array(e.length), r = 0; r < e.length; r++) i[r] = String.fromCharCode(e[r]);
                                    return i.join("");
                                })(this._bodyArrayBuffer)
                            );
                        if (this._bodyFormData) throw new Error("could not read FormData body as text");
                        return Promise.resolve(this._bodyText);
                    }),
                r &&
                (this.formData = function () {
                    return this.text().then(E);
                }),
                    (this.json = function () {
                        return this.text().then(JSON.parse);
                    }),
                    this
            );
        }

        function x(t, e) {
            var i,
                r = (e = e || {}).body;
            if (t instanceof x) {
                if (t.bodyUsed) throw new TypeError("Already read");
                (this.url = t.url), (this.credentials = t.credentials), e.headers || (this.headers = new u(t.headers)), (this.method = t.method), (this.mode = t.mode), r || null == t._bodyInit || ((r = t._bodyInit), (t.bodyUsed = !0));
            } else this.url = String(t);
            if (
                ((this.credentials = e.credentials || this.credentials || "omit"),
                (!e.headers && this.headers) || (this.headers = new u(e.headers)),
                    (this.method = ((t = (i = e.method || this.method || "GET").toUpperCase()), -1 < h.indexOf(t) ? t : i)),
                    (this.mode = e.mode || this.mode || null),
                    (this.referrer = null),
                ("GET" === this.method || "HEAD" === this.method) && r)
            )
                throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(r);
        }

        function E(t) {
            var i = new FormData();
            return (
                t
                    .trim()
                    .split("&")
                    .forEach(function (t) {
                        var e;
                        t && ((t = (e = t.split("=")).shift().replace(/\+/g, " ")), (e = e.join("=").replace(/\+/g, " ")), i.append(decodeURIComponent(t), decodeURIComponent(e)));
                    }),
                    i
            );
        }

        function C(t, e) {
            (e = e || {}),
                (this.type = "default"),
                (this.status = void 0 === e.status ? 200 : e.status),
                (this.ok = 200 <= this.status && this.status < 300),
                (this.statusText = "statusText" in e ? e.statusText : "OK"),
                (this.headers = new u(e.headers)),
                (this.url = e.url || ""),
                this._initBody(t);
        }

        t.fetch ||
        ((e = "URLSearchParams" in t),
            (i = "Symbol" in t && "iterator" in Symbol),
            (a =
                "FileReader" in t &&
                "Blob" in t &&
                (function () {
                    try {
                        return new Blob(), !0;
                    } catch (t) {
                        return !1;
                    }
                })()),
            (r = "FormData" in t),
        (n = "ArrayBuffer" in t) &&
        ((s = [
            "[object Int8Array]",
            "[object Uint8Array]",
            "[object Uint8ClampedArray]",
            "[object Int16Array]",
            "[object Uint16Array]",
            "[object Int32Array]",
            "[object Uint32Array]",
            "[object Float32Array]",
            "[object Float64Array]",
        ]),
            (o = function (t) {
                return t && DataView.prototype.isPrototypeOf(t);
            }),
            (l =
                ArrayBuffer.isView ||
                function (t) {
                    return t && -1 < s.indexOf(Object.prototype.toString.call(t));
                })),
            (u.prototype.append = function (t, e) {
                (t = c(t)), (e = f(e));
                var i = this.map[t];
                this.map[t] = i ? i + "," + e : e;
            }),
            (u.prototype.delete = function (t) {
                delete this.map[c(t)];
            }),
            (u.prototype.get = function (t) {
                return (t = c(t)), this.has(t) ? this.map[t] : null;
            }),
            (u.prototype.has = function (t) {
                return this.map.hasOwnProperty(c(t));
            }),
            (u.prototype.set = function (t, e) {
                this.map[c(t)] = f(e);
            }),
            (u.prototype.forEach = function (t, e) {
                for (var i in this.map) this.map.hasOwnProperty(i) && t.call(e, this.map[i], i, this);
            }),
            (u.prototype.keys = function () {
                var i = [];
                return (
                    this.forEach(function (t, e) {
                        i.push(e);
                    }),
                        d(i)
                );
            }),
            (u.prototype.values = function () {
                var e = [];
                return (
                    this.forEach(function (t) {
                        e.push(t);
                    }),
                        d(e)
                );
            }),
            (u.prototype.entries = function () {
                var i = [];
                return (
                    this.forEach(function (t, e) {
                        i.push([e, t]);
                    }),
                        d(i)
                );
            }),
        i && (u.prototype[Symbol.iterator] = u.prototype.entries),
            (h = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"]),
            (x.prototype.clone = function () {
                return new x(this, {body: this._bodyInit});
            }),
            b.call(x.prototype),
            b.call(C.prototype),
            (C.prototype.clone = function () {
                return new C(this._bodyInit, {
                    status: this.status,
                    statusText: this.statusText,
                    headers: new u(this.headers),
                    url: this.url
                });
            }),
            (C.error = function () {
                var t = new C(null, {status: 0, statusText: ""});
                return (t.type = "error"), t;
            }),
            (p = [301, 302, 303, 307, 308]),
            (C.redirect = function (t, e) {
                if (-1 === p.indexOf(e)) throw new RangeError("Invalid status code");
                return new C(null, {status: e, headers: {location: t}});
            }),
            (t.Headers = u),
            (t.Request = x),
            (t.Response = C),
            (t.fetch = function (i, s) {
                return new Promise(function (r, t) {
                    var e = new x(i, s),
                        n = new XMLHttpRequest();
                    (n.onload = function () {
                        var i,
                            t = {
                                status: n.status,
                                statusText: n.statusText,
                                headers:
                                    ((e = n.getAllResponseHeaders() || ""),
                                        (i = new u()),
                                        e
                                            .replace(/\r?\n[\t ]+/g, " ")
                                            .split(/\r?\n/)
                                            .forEach(function (t) {
                                                var e = t.split(":"),
                                                    t = e.shift().trim();
                                                t && ((e = e.join(":").trim()), i.append(t, e));
                                            }),
                                        i),
                            };
                        t.url = "responseURL" in n ? n.responseURL : t.headers.get("X-Request-URL");
                        var e = "response" in n ? n.response : n.responseText;
                        r(new C(e, t));
                    }),
                        (n.onerror = function () {
                            t(new TypeError("Network request failed"));
                        }),
                        (n.ontimeout = function () {
                            t(new TypeError("Network request failed"));
                        }),
                        n.open(e.method, e.url, !0),
                        "include" === e.credentials ? (n.withCredentials = !0) : "omit" === e.credentials && (n.withCredentials = !1),
                    "responseType" in n && a && (n.responseType = "blob"),
                        e.headers.forEach(function (t, e) {
                            n.setRequestHeader(e, t);
                        }),
                        n.send(void 0 === e._bodyInit ? null : e._bodyInit);
                });
            }),
            (t.fetch.polyfill = !0));
    })("undefined" != typeof self ? self : this),
    (function () {
        function r() {
            return this;
        }

        (r.extend = function (t) {
            for (var e in t) this[e] = t[e];
        }),
            (r.objects = {
                list: {},
                add: function (t, e, i) {
                    this.list[e][t] = i;
                },
                delete: function (t, e) {
                    delete this.list[e][t];
                },
            }),
            (r.func = {
                id: function (t) {
                    return "string" == typeof t ? document.getElementById(t) : t;
                },
                getScrollWidth: function (t) {
                    let e = 0;
                    if (t) {
                        if (!(t = "string" == typeof t ? document.getElementById(t) : t)) return !1;
                        e = t.offsetWidth - t.clientWidth;
                    } else {
                        let t = document.createElement("div");
                        (t.style.overflowY = "scroll"), (t.style.width = "50px"), (t.style.height = "50px"), (t.style.visibility = "hidden"), document.body.appendChild(t), (e = t.offsetWidth - t.clientWidth), document.body.removeChild(t);
                    }
                    return e;
                },
                fmt: function (t, e) {
                    let s = "object" == typeof e ? e : arguments;

                    function a(t, e) {
                        let i = e;
                        var r = t.split(".");
                        for (let t = 0; t < r.length; t++) {
                            if ("object" != typeof i) {
                                i = void 0;
                                break;
                            }
                            i = i[r[t]];
                        }
                        return i;
                    }

                    return (t = (function n(t) {
                        return (t = (t = (t = (t = t.replace(/{#([\w\d\.]+)!='([^]*?)'}([^]*?){\\\1}/g, function (t, e, i, r) {
                            return (e = a(e, s)) && e == i ? "" : n(r);
                        })).replace(/{#([\w\d\.]+)='([^]*?)'}([^]*?){\\\1}/g, function (t, e, i, r) {
                            return (e = a(e, s)) && e == i ? n(r) : "";
                        })).replace(/{#([\w\d\.]+)}([^]*?){\\\1}/g, function (t, e, i) {
                            return (e = a(e, s)) && "0" != e && "false" != e ? n(i) : "";
                        })).replace(/{\^([\w\d\.]+)}([^]*?){\\\1}/g, function (t, e, i) {
                            return (e = a(e, s)) && "0" != e && "false" != e ? "" : n(i);
                        }));
                    })(t)).replace(/{([\w\d\.]+)}/g, function (t, e) {
                        e = a(e, s);
                        return null != e ? e : "";
                    });
                },
                localStorage: {
                    check: function () {
                        try {
                            return "localStorage" in window && null !== window.localStorage;
                        } catch (t) {
                            return !1;
                        }
                    },
                    get: function (t) {
                        return this.check() ? localStorage.getItem(t) : null;
                    },
                    set: function (t, e) {
                        if (!this.check()) return null;
                        localStorage.setItem(t, e);
                    },
                },
                addClass: function (e, i) {
                    if ((e = "string" == typeof e ? document.getElementById(e) : e)) {
                        let t = new RegExp("(^|\\s)" + i + "(\\s|$)");
                        if (e instanceof Node) {
                            if (t.test(e.className)) return e;
                            e.className = (e.className + " " + i).replace(/\s+/g, " ").replace(/(^ | $)/g, "");
                        } else if (e instanceof Object) for (var r in e) e[r] instanceof Node && !t.test(e[r].className) && (e[r].className = (e[r].className + " " + i).replace(/\s+/g, " ").replace(/(^ | $)/g, ""));
                        else if (e.length) for (var n in e) e[n] instanceof Node && !t.test(e[n].className) && (e[n].className = (e[n].className + " " + i).replace(/\s+/g, " ").replace(/(^ | $)/g, ""));
                        return e;
                    }
                },
                remClass: function (i, r) {
                    if ((i = "string" == typeof i ? document.getElementById(i) : i)) {
                        if (r) {
                            if (i instanceof Node) {
                                let t = new RegExp("(^|\\s)" + r + "(\\s|$)", "g");
                                t.test(i.className) &&
                                (i.className = i.className
                                    .replace(t, "$1")
                                    .replace(/\s+/g, " ")
                                    .replace(/(^ | $)/g, ""));
                            } else if (i instanceof Object) {
                                let t = new RegExp("(^|\\s)" + r + "(\\s|$)", "g"),
                                    e = new RegExp("(^|\\s)" + r + "(\\s|$)");
                                for (var n in i)
                                    i[n] instanceof Node &&
                                    e.test(i[n].className) &&
                                    (i[n].className = i[n].className
                                        .replace(t, "$1")
                                        .replace(/\s+/g, " ")
                                        .replace(/(^ | $)/g, ""));
                            } else if (i.length) {
                                let t = new RegExp("(^|\\s)" + r + "(\\s|$)", "g"),
                                    e = new RegExp("(^|\\s)" + r + "(\\s|$)");
                                for (var s in i)
                                    i[s] instanceof Node &&
                                    e.test(i[s].className) &&
                                    (i[s].className = i[s].className
                                        .replace(t, "$1")
                                        .replace(/\s+/g, " ")
                                        .replace(/(^ | $)/g, ""));
                            }
                        } else i.className = "";
                        return i;
                    }
                },
                togClass: function (t, e, i) {
                    var r = this;
                    return void 0 !== i ? (1 == i ? r.addClass(t, e) : r.remClass(t, e)) : r.hasClass(t, e) ? r.remClass(t, e) : r.addClass(t, e), t;
                },
                hasClass: function (t, e) {
                    t = "string" == typeof t ? document.getElementById(t) : t;
                    let i = new RegExp("(^|\\s)" + e + "(\\s|$)", "g");
                    return i.test(t.className);
                },
                isChild: function (t, e, i) {
                    if (((i = i && ("string" == typeof i ? document.getElementById(i) : i)), "string" == typeof e))
                        if ("." == e.charAt(0))
                            for (e = e.split(".")[1]; t;) {
                                if (r.func.hasClass(t, e)) return t;
                                if (i && t == i) return !1;
                                t = t.parentNode;
                            }
                        else
                            for (; t;) {
                                if (t.tagName == e.toUpperCase()) return t;
                                if (i && t == i) return !1;
                                t = t.parentNode;
                            }
                    else
                        for (; t;) {
                            if (t == e) return t;
                            if (i && t == i) return !1;
                            t = t.parentNode;
                        }
                    return !1;
                },
                css: function (t, e) {
                    if ((t = "string" == typeof t ? document.getElementById(t) : t)) for (var i in e) t.style[i] = e[i];
                },
                bind: function (t, e, i) {
                    if ((t = "string" == typeof t ? document.getElementById(t) : t))
                        if (t instanceof Node || t == window) t.addEventListener ? (t.addEventListener(e, i), "mousewheel" == e && t.addEventListener("DOMMouseScroll", i)) : t.attachEvent && t.attachEvent("on" + e, i);
                        else
                            for (var r in t)
                                (node = "string" == typeof t[r] ? document.getElementById(t[r]) : t[r]),
                                node && (node.addEventListener ? (node.addEventListener(e, i), "mousewheel" == e && node.addEventListener("DOMMouseScroll", i)) : node.attachEvent && node.attachEvent("on" + e, i));
                },
                unbind: function (t, e, i) {
                    if ((t = "string" == typeof t ? document.getElementById(t) : t))
                        if (t instanceof Node || t == window) t.removeEventListener ? t.removeEventListener(e, i) : t.detachEvent && t.detachEvent("on" + e, i);
                        else for (var r in t) (node = "string" == typeof t[r] ? document.getElementById(t[r]) : t[r]), node.removeEventListener ? node.removeEventListener(e, i) : node.detachEvent && node.detachEvent("on" + e, i);
                },
                on: function (t, e, i, r) {
                    if ((t = "string" == typeof t ? document.getElementById(t) : t)) {
                        function n(t) {
                            t = t || event;
                            let e;
                            (e = t.target.closest(i)) && r.call(e, t);
                        }

                        return this.bind(t, e, n), n;
                    }
                },
                replaceWith: function (t, e) {
                    let i = document.createElement("div");
                    (i.innerHTML = e), t.parentNode.replaceChild(i.firstChild, t);
                },
                insert: function (t, e, i) {
                    t.insertAdjacentHTML(i, e);
                },
                before: function (t, e) {
                    (t = "string" == typeof t ? document.getElementById(t) : t), "string" == typeof e ? t.insertAdjacentHTML("beforebegin", e) : t.parentNode.insertBefore(e, t);
                },
                after: function (t, e) {
                    (t = "string" == typeof t ? document.getElementById(t) : t), "string" == typeof e ? t.insertAdjacentHTML("afterend", e) : t.parentNode.insertBefore(e, t.nextSibling);
                },
                blinkCl: function (t, e, i) {
                    var r = this;
                    (t = "string" == typeof t ? document.getElementById(t) : t),
                        (e = e || "active"),
                        (i = i || 2e3),
                        r.addClass(t, e),
                        setTimeout(function () {
                            r.remClass(t, e);
                        }, i);
                },
                toFormData: function (t, e, i) {
                    var r,
                        n = this;
                    if (((i = i || ""), t instanceof HTMLFormElement)) return new FormData(t);
                    if (t instanceof FormData) return t;
                    let s = e || new FormData();
                    if (t instanceof Date) s.append(i, t.toISOString());
                    else if (t instanceof Array)
                        t.forEach(function (t, e) {
                            e = i + "[" + e + "]";
                            s = n.toFormData(t, s, e);
                        });
                    else if ("object" != typeof t || t instanceof File) s.append(i, t.toString());
                    else for (var a in t) t.hasOwnProperty(a) && void 0 !== t[a] && ((r = i ? i + "[" + a + "]" : a), (s = n.toFormData(t[a], s, r)));
                    return s;
                },
                carPos: function (e) {
                    let i = 0;
                    if (document.selection) {
                        e.focus();
                        let t = document.selection.createRange();
                        t.moveStart("character", -e.value.length), (i = t.text.length);
                    } else (!e.selectionStart && "0" != e.selectionStart) || (i = e.selectionStart);
                    return i;
                },
                setCarPos: function (e, i, r) {
                    if (e.setSelectionRange) e.focus(), e.setSelectionRange(i, r);
                    else if (e.createTextRange) {
                        let t = e.createTextRange();
                        t.collapse(!0), t.moveEnd("character", r), t.moveStart("character", i), t.select();
                    }
                },
                round: function (t, e) {
                    return Math.round(t * Math.pow(10, e)) / Math.pow(10, e);
                },
                zerosNum: function (t, e) {
                    for (e = e || 2, t = String(t); t.length < e;) t = "0" + t;
                    return t;
                },
                getPrecision: function (e) {
                    let i = 0;
                    if ((e = String(e)).match(/^[-+]?(?:[1-9]\.)?[0-9]+e[-]?[1-9][0-9]*$/)) {
                        let t = new Array();
                        t = e.split("e");
                        var r = Math.abs(t[1]);
                        (i = new Number(r)), (t = t[0].split(".")), 2 == t.length && (i += t[1].length);
                    } else {
                        let t = e.split(".");
                        2 == t.length && (i = t[1].replace(/0+$/, "").length);
                    }
                    return i;
                },
                fixNumber: function (t, e) {
                    var i = (function (t) {
                            let e = String(t).split(/[eE]/);
                            if (1 == e.length) return e[0];
                            let i = "",
                                r = t < 0 ? "-" : "",
                                n = e[0].replace(".", ""),
                                s = Number(e[1]) + 1;
                            if (s < 0) {
                                for (i = r + "0."; s++;) i += "0";
                                return i + n.replace(/^\-/, "");
                            }
                            for (s -= n.length; s--;) i += "0";
                            return n + i;
                        })(t),
                        t = this.getPrecision(i);
                    return (i = (+i).toFixed(e && e < t ? e : t));
                },
                maxCountNumbers: function (t, e) {
                    let i = (t = String(this.fixNumber(t))).split(".");
                    return 1 == i.length ? t : ((i[1] = i[1].substr(0, e - i[0].length)), this.fixNumber(i[0] + "." + i[1]));
                },
                minCountToFixed: function (t, e, i) {
                    e = e || 4;
                    let r = (t = String(this.maxCountNumbers(t, i))).split(".");
                    1 == r.length && (r[1] = "");
                    let n = e - r[0].length - 1;
                    for (n = 0 < n ? n : 0; r[1].length < n;) r[1] += "0";
                    let s = r[0] + "." + r[1];
                    return "." == s.slice(-1) && (s = s.slice(0, -1)), s;
                },
                minToFixed: function (t, e) {
                    e = e || 2;
                    let i = (t = String(this.fixNumber(t))).split(".");
                    for (1 == i.length && (i[1] = ""); i[1].length < e;) i[1] += "0";
                    return i[0] + "." + i[1];
                },
                scrollTop: function (e, i, t, r) {
                    r = r || 0;
                    let n = (15 * ((i = (i = i > e.scrollHeight - e.offsetHeight ? e.scrollHeight - e.offsetHeight : i) < 0 ? 0 : i) - e.scrollTop)) / t;
                    0 < n && n < r ? (n = r) : n < 0 && -n < r && (n = -r);
                    let s = setInterval(function () {
                        var t = e.scrollTop + n;
                        !((n < 0 && t <= i) || (0 < n && i <= t)) && ((n < 0 && e.scrollTop > i) || (0 < n && e.scrollTop < i)) ? (e.scrollTop += n) : ((e.scrollTop = i), clearInterval(s));
                    }, 15);
                    return s;
                },
                upload: function (t) {
                    let e = new XMLHttpRequest();
                    (e.id = e.upload.id = t.id),
                        (e.obj = e.upload.obj = t.obj),
                        (e.wrap = e.upload.wrap = t.wrap),
                    (!t.onProgress && "function" != typeof t.onProgress) || (e.upload.onprogress = t.onProgress),
                    (!t.onLoad && "function" != typeof t.onLoad) || (e.onload = t.onLoad),
                    (!t.onError && "function" != typeof t.onError) || (e.onerror = t.onError),
                        e.open("POST", t.url, !0);
                    let i = new FormData();
                    i.append("upload", t.file), e.send(i);
                },
                copy: function (t, e, i) {
                    let r = i ? document.createElement("div") : document.createElement("textarea"),
                        n = document.createRange();
                    var s = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
                    if (
                        ((e = e && s ? e : document.body),
                            (r.style.position = "absolute"),
                            (r.style.zIndex = "-999"),
                            (r.style.opacity = "0"),
                            r.setAttribute("contenteditable", "true"),
                            r.setAttribute("style", "position:absolute;opacity:0;z-index:-999;font-size:16px;left:0"),
                            e.appendChild(r),
                            i ? (r.innerHTML = t) : (r.textContent = t),
                        s || i)
                    ) {
                        n.selectNodeContents(r);
                        let t = window.getSelection();
                        t.removeAllRanges(), t.addRange(n), i || r.setSelectionRange(0, 999999);
                    } else r.select();
                    i = document.execCommand("copy");
                    return e.removeChild(r), i;
                },
                extend: function () {
                    for (let t = 1; t < arguments.length; t++) for (var e in arguments[t]) arguments[t].hasOwnProperty(e) && (arguments[0][e] = arguments[t][e]);
                    return arguments[0];
                },
                isEmptyObject: function (t) {
                    for (var e in t) if (t.hasOwnProperty(e)) return !1;
                    return !0;
                },
                formatTime: function (t, e) {
                    var i = ~~(t / 3600);
                    return (i || e ? r.func.zerosNum(i) + ":" : "") + r.func.zerosNum(~~(t / 60) - 60 * i) + ":" + r.func.zerosNum(t % 60);
                },
                getDateObj: function (t, e) {
                    var i = (e = e || "yyyy-mm-dd").indexOf("dd"),
                        r = e.indexOf("mm"),
                        e = e.indexOf("yyyy");
                    if (0 <= i && 0 <= r && 0 <= e) {
                        (i = +t.substr(i, 2)), (r = +t.substr(r, 2)), (e = +t.substr(e, 4));
                        return {
                            day: i || null,
                            month: r || null,
                            year: e || null,
                            dateTxt: e && r && i ? e + "-" + r + "-" + i : null
                        };
                    }
                },
                printDate: function (t, e) {
                    let i = (e = e || "yyyy-mm-dd");
                    return (i = i.replace(/dd/, this.zerosNum(t.day))), (i = i.replace(/mm/, this.zerosNum(t.month))), (i = i.replace(/yyyy/, this.zerosNum(t.year, 4))), i;
                },
                compDates: function (t, e, i) {
                    return !0 === i ? t.year == e.year && t.month == e.month && t.day == e.day : t.year > e.year ? -1 : t.year < e.year ? 1 : t.month > e.month ? -1 : t.month < e.month ? 1 : t.day > e.day ? -1 : t.day < e.day ? 1 : 0;
                },
                contains: function (e, i) {
                    for (let t = 0; t < i.length; t++) if (-1 < e.indexOf(i[t])) return !0;
                    return !1;
                },
            }),
            (window.UI = r);
    })(),
    window.UI.extend({
        carousel: function (t, e) {
            function i() {
                return this;
            }

            let a = UI.func,
                r = "string" == typeof t ? document.getElementById(t) : t;
            var o = "object" == typeof e && e.scale ? e.scale : 1;
            let l = "object" == typeof e && e.maxScrollSlide ? e.maxScrollSlide : null;
            (i.select = function (t) {
            }), (i.prev = function () {
            }), (i.next = function () {
            }), (i.getSelectedNum = function () {
            });
            let h = {
                    viewport: document.createElement("div"),
                    slider: document.createElement("div"),
                    items: r.children,
                    navPrev: "object" == typeof e && e.navPrev ? e.navPrev : void 0,
                    navNext: "object" == typeof e && e.navNext ? e.navNext : void 0,
                    wrapline: "object" == typeof e && e.wrapline ? e.wrapline : void 0,
                    line: document.createElement("div"),
                },
                n = {
                    drag: !1,
                    afterMove: !1,
                    isMove: !1,
                    touchStart: 0,
                    scrollCurr: 0,
                    scrollStart: 0,
                    touchDown: function (t) {
                        (n.drag = !0), (n.touchStart = t), (n.scrollStart = n.scrollCurr), a.addClass(h.viewport, "scrolling"), a.addClass(h.wrapline, "scrolling");
                    },
                    touchMove: function (e) {
                        if (n.drag) {
                            n.afterMove = !0;
                            let t = n.scrollStart + e - n.touchStart;
                            var i = p.width * (1 - l);
                            0 < t ? (t = Math.sqrt(30 * t)) : t < i && ((e = i - t), (t = i - Math.sqrt(30 * e))), p.scroll(t);
                        }
                    },
                    touchUp: function (t) {
                        n.drag && (a.remClass(h.viewport, "scrolling"), a.remClass(h.wrapline, "scrolling"), p.select(p.selected), (n.drag = !1), (n.isMove = !1));
                    },
                },
                p = {
                    isInit: !1,
                    list: [],
                    width: 0,
                    linewidth: 0,
                    selected: -1,
                    transform: function (t) {
                        let i = t < 0 ? 0 : t;
                        t > l - 1 && (i = l - 1);
                        var e = p.selected;
                        (p.selected = Math.round(i)), e !== p.selected && (a.remClass(p.list, "selected"), a.addClass(p.list[p.selected], "selected"));
                        var r = ~~i;
                        let n = 0;
                        (h.navPrev.disabled = r <= 0), (h.navNext.disabled = r >= l - 1);
                        var s = o - 1;
                        for (let e = 0; e < p.list.length; e++) {
                            let t = 1;
                            s && (e == r ? (t = 1 + s * (1 - i + r)) : e == 1 + r && (t = 1 + s * (i - r))), (p.list[e].style.transform = "translateX(" + n + "px) scale(" + t + ")"), (n += p.width * t);
                        }
                        h.wrapline && (h.line.style.transform = "translateX(" + t * p.linewidth + "px)");
                    },
                    select: function (t) {
                        (t = t <= 0 ? 0 : t) >= l - 1 && (t = l - 1), (n.scrollCurr = -t * p.width), (h.slider.style.transform = "translateX(" + n.scrollCurr + "px)"), p.transform(t);
                    },
                    scroll: function (t) {
                        (h.slider.style.transform = "translateX(" + t + "px)"), p.transform(-t / p.width), (n.scrollCurr = t);
                    },
                    prev: function () {
                        p.select(p.selected - 1);
                    },
                    next: function () {
                        p.select(p.selected + 1);
                    },
                    resize: function () {
                        h.viewport.style.height = "0px";
                        let t = p.list[0].offsetHeight;
                        for (var e in ((p.width = p.list[0].offsetWidth + Number.parseInt((p.list[0].currentStyle || window.getComputedStyle(p.list[0])).marginRight)), p.list)) t = p.list[e].offsetHeight > t ? p.list[e].offsetHeight : t;
                        (h.viewport.style.height = t + "px"), (p.linewidth = h.wrapline.offsetWidth / l), (h.line.style.width = p.linewidth + "px"), p.isInit && p.select(p.selected);
                    },
                    init: function () {
                        for (
                            a.addClass(h.viewport, "carousel-viewport"),
                                a.addClass(h.slider, "carousel-slider"),
                                h.viewport.appendChild(h.slider),
                            h.wrapline && (a.addClass(h.line, "carousel-line-selected"), h.wrapline.appendChild(h.line));
                            h.items[0];
                        )
                            p.list.push(h.items[0]), h.slider.appendChild(h.items[0]);
                        (l = l && l < p.list.length ? l : p.list.length),
                            r.appendChild(h.viewport),
                            p.resize(),
                            p.select(0),
                            a.bind(r, "mousedown", function (t) {
                                t.preventDefault(), 1 == t.which && n.touchDown(t.clientX);
                            }),
                            a.bind(r, "click", function (t) {
                                n.afterMove && (t.preventDefault(), (n.afterMove = !1));
                            }),
                            a.bind(r, "touchstart", function (t) {
                                t = (t.originalEvent || t).touches[0].clientX;
                                n.touchDown(t);
                            }),
                            a.bind(document, "mousemove", function (t) {
                                n.touchMove(t.clientX);
                            }),
                            a.bind(document, "touchmove", function (t) {
                                t = (t.originalEvent || t).touches[0].clientX;
                                n.touchMove(t);
                            }),
                            a.bind(document, "mouseup", function (t) {
                                n.touchUp();
                            }),
                            a.bind(document, "touchend", function (t) {
                                n.touchUp();
                            }),
                            a.bind(h.navPrev, "click", function (t) {
                                p.prev();
                            }),
                            a.bind(h.navNext, "click", function (t) {
                                p.next();
                            }),
                            a.bind(window, "resize", function (t) {
                                p.resize();
                            }),
                            (p.isInit = !0);
                    },
                };
            return (
                p.init(),
                    (i.select = function (t) {
                        p.select(t);
                    }),
                    (i.prev = function () {
                        p.prev();
                    }),
                    (i.next = function () {
                        p.next();
                    }),
                    (i.getSelectedNum = function () {
                        return p.selected;
                    }),
                    i
            );
        },
    }),
    window.UI.extend({
        selector: function (s, t) {
            function a() {
                return this;
            }

            let o = UI.func;
            (a.val = function (t) {
            }),
                (a.select = function (t, e) {
                }),
                (a.selectById = function (t, e) {
                }),
                (a.attr = function (t, e) {
                }),
                (a.selectedAttr = function (t) {
                }),
                (a.open = function () {
                }),
                (a.close = function () {
                }),
                (a.optionHide = function (t) {
                }),
                (a.optionShow = function (t) {
                }),
                (a.optionShowAll = function (t) {
                }),
                (a.onChange = function (t) {
                }),
                (a.onInit = function (t) {
                }),
                (a.onOpen = function (t) {
                }),
                (a.onClose = function (t) {
                }),
                (a.rebuild = function (t) {
                }),
                (a.options = {});
            let n = "string" == typeof s ? document.getElementById(s) : s,
                e = "object" == typeof t && t.onInit ? t.onInit : function () {
                },
                r = "object" == typeof t && t.onChange ? t.onChange : function () {
                },
                i = "object" == typeof t && t.onOpen ? t.onOpen : function () {
                },
                l = "object" == typeof t && t.onClose ? t.onClose : function () {
                };
            var h = "object" == typeof t && t.arrow ? t.arrow : "right";
            let p = "object" == typeof t && t.dataToAttr ? t.dataToAttr : [];
            var c = "object" == typeof t && t.startText ? t.startText : null;
            let f = "object" == typeof t && t.emptyOption ? t.emptyOption : null;
            var d = !("object" != typeof t || !t.inner),
                u = "object" == typeof t && !0 === t.hidden;
            let m = "object" != typeof t || !1 !== t.hover,
                y = "object" == typeof t && t.searchByDataset ? t.searchByDataset : [];
            (a.tmpl = "object" == typeof t && t.tmpl ? t.tmpl : "{label}"),
                (a.tmplSel = "object" == typeof t && t.tmplSel ? t.tmplSel : a.tmpl),
                (a.search = !("object" != typeof t || !t.search) && t.search),
                (a.emptyText = "object" == typeof t && t.emptyText ? t.emptyText : "No data"),
                (a.val = function (t) {
                }),
                (a.select = function (t, e) {
                }),
                (a.selectById = function (t, e) {
                }),
                (a.attr = function (t, e, i) {
                }),
                (a.selectedAttr = function (t) {
                }),
                (a.open = function () {
                }),
                (a.close = function () {
                }),
                (a.optionHide = function (t) {
                }),
                (a.optionShow = function (t) {
                }),
                (a.optionShowAll = function (t) {
                }),
                (a.onChange = function (t) {
                }),
                (a.onInit = function (t) {
                }),
                (a.onOpen = function (t) {
                }),
                (a.onClose = function (t) {
                });
            let g = [],
                v = [],
                b = [],
                x = {},
                E = [],
                C = ["label", "value"],
                P = "",
                S = "",
                A = 0,
                w = 0,
                T = !(a.disable = function (t) {
                }),
                _ = !1;
            let M = document.createElement("div"),
                k = document.createElement("label"),
                D = document.createElement("div"),
                I = document.createElement("div"),
                F = document.createElement("div"),
                B = document.createElement("div"),
                L = document.createElement("ul");
            document.createElement("div"), document.createElement("div");
            let R, V;
            (t = "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch) ? "touchstart" : "mousedown"),
            "ontouchmove" in window || (window.DocumentTouch && (document, DocumentTouch)),
            "ontouchend" in window || (window.DocumentTouch && (document, DocumentTouch));

            function O(e, t) {
                if (f && !1 !== t) {
                    let t = document.createElement("option");
                    t.setAttribute("label", "hidden"), t.setAttribute("value", ""), (t.innerHTML = f);
                }
                for (var i in e) {
                    let t = document.createElement("option");
                    for (var r in e[i]) "value" != r && "label" != r && "selected" != r && t.setAttribute("data-" + r, e[i][r]);
                    e[i].selected && (t.selected = !0), t.setAttribute("value", e[i].value), (t.innerHTML = e[i].label || e[i].value), n.appendChild(t);
                }
            }

            function z() {
                g = [];
                for (let i = 0; i < n.options.length; i++) {
                    let e = {};
                    if (0 == i && "hidden" == n.options[i].getAttribute("label"))
                        (e._type = "description"),
                            (e.label = n.options[i].innerHTML),
                            (e.hidden = !0),
                            (e.value = n.options[i].value),
                            (e.newindex = v.push(e) - 1),
                            (a.options[""] = e),
                        n.options[i].selected && ((S = n.options[i].value), (A = 0));
                    else if ("separate" == n.options[i].getAttribute("label")) (e._type = "separate"), (e.label = n.options[i].innerHTML);
                    else {
                        (e._type = "option"), (e._search = ""), (e.label = n.options[i].label), (e.value = n.options[i].value), (e.index = n.options[i].index), (e.disabled = n.options[i].disabled), (e.hidden = !1);
                        var t,
                            r = n.options[i].dataset;
                        for (t in r) e[t] = r[t];
                        for (let t = 0; t < C.length; t++) 0 != t && (e._search += "  "), (e._search += n.options[i][C[t]] || "");
                        for (let t = 0; t < y.length; t++) e[y[t]] && (e._search += "   " + e[y[t]]);
                        (e.newindex = v.push(e) - 1), (a.options[n.options[i].value] = e), n.options[i].selected && ((S = n.options[i].value), (A = e.newindex));
                    }
                    g.push(e);
                }
            }

            function N(i, r) {
                if (((L.innerHTML = ""), (b = []), !i.length)) {
                    let t = document.createElement("li");
                    return t.setAttribute("class", "ui-select-empty"), (t.innerHTML = a.emptyText), void L.appendChild(t);
                }
                if (r && a.search && a.search.label) {
                    let t = document.createElement("li");
                    t.setAttribute("class", "ui-select-separate"), (t.innerHTML = a.search.label), L.appendChild(t);
                }
                for (let e = 0; e < i.length; e++) {
                    let t = document.createElement("li");
                    if ("separate" != i[e]._type || r) {
                        for (var n in ("string" == typeof s && (t.id = s + "_option_" + i[e].value), t.setAttribute("class", "ui-select-option"), t.setAttribute("data-value", i[e].value), t.setAttribute("data-num", b.length), p)) {
                            n = p[n];
                            i[e][n] && t.setAttribute("data-" + n, i[e][n]);
                        }
                        (t.innerHTML = o.fmt(a.tmpl, i[e])), i[e].disabled && o.addClass(t, "disabled"), i[e].hidden && o.addClass(t, "hidden"), (item_show = {
                            li: t,
                            option: i[e]
                        }), b.push(item_show);
                    } else t.setAttribute("class", "ui-select-separate"), (t.innerHTML = i[e].label);
                    L.appendChild(t), (x[i[e].value] = t);
                }
                (w = 0), b[w] && m && o.addClass(b[w].li, "hover");
            }

            function G(t, e, i) {
                a.options[t][e] = i;
            }

            z(),
                M.setAttribute("class", "ui-select-outer"),
                k.setAttribute("class", "ui-select"),
                D.setAttribute("class", "ui-select-value"),
                I.setAttribute("class", "ui-select-arrow"),
                F.setAttribute("class", "ui-select-list"),
                B.setAttribute("class", "ui-select-list-inner"),
                d ? (F.appendChild(B), B.appendChild(L)) : F.appendChild(L),
            "left" == h && k.appendChild(I),
                k.appendChild(D),
            "right" == h && k.appendChild(I),
                M.appendChild(k),
                M.appendChild(F),
                n.parentNode.insertBefore(M, n),
                n.setAttribute("class", "hidden");
            h = {
                scroll: "y",
                addParent: !1,
                classScrollWrapY: "ui-select-scroll-wrap",
                classScrollBarY: "ui-select-scroll",
                addClasses: !1
            };
            if (((V = d ? UI.scroller(B, h) : UI.scroller(L, h)), a.search)) {
                h = void 0 !== a.search.placeholder ? a.search.placeholder : "Search";
                M.setAttribute("class", "ui-select-outer with-search");
                let t = document.createElement("div"),
                    e = document.createElement("div");

                function H(t) {
                    APP.api(a.search.api, {search: t}, function (t) {
                        "function" == typeof a.search.apiHandler && (t.data = a.search.apiHandler(t.data)), console.log(t.data), (n.innerHTML = ""), O(t.data), z(), N(g);
                    });
                }

                (R = document.createElement("input")),
                    t.setAttribute("class", "ui-select-search"),
                    e.setAttribute("class", "ui-select-search-inner"),
                    R.setAttribute("type", "text"),
                    R.setAttribute("placeholder", h),
                    (t.innerHTML = '<span class="ui-select-search-ico ico"></span>'),
                    e.appendChild(R),
                    t.appendChild(e),
                    k.appendChild(t),
                    (R.onfocus = function () {
                        a.search.api && H(this.value);
                    }),
                    (R.oninput = function () {
                        var t = this.value;
                        let e = [];
                        if (t != P) {
                            if (a.search.api) H(t);
                            else if (!t && _) (_ = !1), N(g);
                            else {
                                var i = new RegExp(t, "i");
                                for (let t = 0; t < v.length; t++) v[t]._search && 0 <= v[t]._search.search(i) && !v[t].disabled && e.push(v[t]);
                                (_ = !0), N(e, !0);
                            }
                            V.update(), (P = t);
                        }
                    });
            }
            return (
                u && o.addClass(M, "hidden-label"),
                n.disabled && o.addClass(M, "disabled"),
                    (k.onclick = function (t) {
                        (t = t || event).preventDefault(), !T || (R && o.isChild(t.target, R)) ? a.open() : a.close();
                    }),
                    (F.onclick = function (t) {
                        t = t || event;
                        let e = o.isChild(t.target, ".ui-select-option", this);
                        e && a.select(e.getAttribute("data-value"));
                    }),
                    (F.onmouseover = function (t) {
                        if (((t = t || event), !m)) return !1;
                        let e = o.isChild(t.target, ".ui-select-option", this);
                        e && e != b[w].li && (o.remClass(b[w].li, "hover"), (w = +e.getAttribute("data-num")), o.addClass(b[w].li, "hover"));
                    }),
                    (a.val = function (t) {
                        if (void 0 === t) return S;
                        a.select(t);
                    }),
                    (a.select = function (t, e) {
                        var i = A;
                        return (
                            (S = t),
                                (n.selectedIndex = a.options[S].index),
                                (A = a.options[S].newindex),
                            v.length && ((D.innerHTML = o.fmt(a.tmplSel, v[A])), k.setAttribute("data-value", S), M.setAttribute("data-value", S), r.call(a, v[A], v[i], e)),
                                a.close(),
                            n.onchange && n.onchange(),
                                a
                        );
                    }),
                    (a.selectById = function (t, e) {
                        var i = A;
                        return (
                            v.length &&
                            ((n.selectedIndex = v[t].index),
                                (S = n.options[n.selectedIndex].value),
                                (A = t),
                                (D.innerHTML = o.fmt(a.tmplSel, v[A])),
                                k.setAttribute("data-value", S),
                                M.setAttribute("data-value", S),
                                r.call(a, v[A], v[i], e)),
                                a.close(),
                                a
                        );
                    }),
                    (a.attr = function (t, e, i) {
                        if (void 0 === i) return a.options[t][e];
                        a.options[t] && (a.options[t][e] = i), x[t] && x[t].setAttribute("data-" + e, i);
                    }),
                    (a.selectedAttr = function (t) {
                        return a.options[S][t];
                    }),
                    (a.open = function () {
                        return T || ((T = !0), m && b.length && o.addClass(b[w].li, "hover"), o.addClass(M, "active"), V.update(), a.search && R.focus(), i.call(a)), a;
                    }),
                    (a.close = function () {
                        return T && ((T = !1), o.remClass(M, "active"), a.search && ((R.value = ""), R.oninput(), R.blur()), l.call(a)), a;
                    }),
                    (a.optionHide = function (t) {
                        return o.addClass(document.getElementById(s + "_option_" + t), "hidden"), G(t, "hidden", !0), E.indexOf(t) < 0 && E.push(t), a;
                    }),
                    (a.optionShow = function (t) {
                        return o.remClass(document.getElementById(s + "_option_" + t), "hidden"), G(t, "hidden", !1), 0 <= E.indexOf(t) && E.splice(E.indexOf(t), 1), a;
                    }),
                    (a.optionShowAll = function (t) {
                        var e = E;
                        for (let t = 0; t < e.length; t++) a.optionShow(e[t]);
                        return a;
                    }),
                    (a.onChange = function (t) {
                        return (r = t), a;
                    }),
                    (a.onInit = function (t) {
                        return (e = t), a;
                    }),
                    (a.onOpen = function (t) {
                        return (i = t), a;
                    }),
                    (a.onClose = function (t) {
                        return (l = t), a;
                    }),
                    (a.disable = function (t) {
                        o.togClass(M, "disabled", t), (n.disabled = !!t);
                    }),
                    (a.rebuild = function (t, e) {
                        t && ((n.innerHTML = ""), O(t, e), z(), N(g));
                    }),
                    N(g),
                    a.selectById(A),
                    e.call(a, v[A]),
                c && (D.innerHTML = c),
                    o.bind(document, t, function (t) {
                        (t = t || event), o.isChild(t.target, M) || a.close();
                    }),
                    o.bind(document, "keydown", function (t) {
                        if (((t = t || event), T && m && (38 == t.keyCode || 40 == t.keyCode))) {
                            if ((t.preventDefault(), o.remClass(b[w].li, "hover"), 38 == t.keyCode)) for (w <= 0 || w--; o.hasClass(b[w].li, "disabled") && 0 < w;) w--;
                            else if (40 == t.keyCode) for (w >= b.length - 1 || w++; o.hasClass(b[w].li, "disabled") && w < b.length - 1;) w++;
                            L.scrollTop > b[w].li.offsetTop
                                ? (L.scrollTop = b[w].li.offsetTop)
                                : L.scrollTop + L.offsetHeight < b[w].li.offsetTop + b[w].li.offsetHeight && (L.scrollTop = b[w].li.offsetTop + b[w].li.offsetHeight - L.offsetHeight - 1),
                                o.addClass(b[w].li, "hover");
                        } else T && m && 13 == t.keyCode ? b[w].li.click() : T && 27 == t.keyCode && a.close();
                    }),
                    a
            );
        },
    }),
    window.UI.extend({
        scroller: function (t, e) {
            function i() {
                return this;
            }

            var r = UI.func,
                n = "string" == typeof t ? document.getElementById(t) : t;
            if (n) {
                var s = r.getScrollWidth(),
                    a = "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch) ? "touchstart" : "mousedown",
                    o = "ontouchmove" in window || (window.DocumentTouch && document instanceof DocumentTouch) ? "touchmove" : "mousemove",
                    l = "ontouchend" in window || (window.DocumentTouch && document instanceof DocumentTouch) ? "touchend" : "mouseup";
                (i.scroll = "object" == typeof e && e.scroll ? e.scroll : "auto"),
                    (i.update = function () {
                        C();
                    });
                var h,
                    p,
                    c,
                    f,
                    d,
                    u = "object" != typeof e || !1 !== e.addParent || e.addParent,
                    m = "object" != typeof e || !1 !== e.addClasses || e.addClasses,
                    y = "object" == typeof e && e.classScrollWrapX ? e.classScrollWrapX : "scroller-wrap-x",
                    g = "object" == typeof e && e.classScrollWrapY ? e.classScrollWrapY : "scroller-wrap-y",
                    t = "object" == typeof e && e.classScrollBarX ? e.classScrollBarX : "scroller-sbar-x",
                    e = "object" == typeof e && e.classScrollBarY ? e.classScrollBarY : "scroller-sbar-y",
                    v = {x: !1, y: !1},
                    b = {x: {volume: 100, coef: 0, position: 0}, y: {volume: 100, coef: 0, position: 0}},
                    x = {move: 0, pos: 0},
                    E = -1;
                return (
                    u ? (h = document.createElement("div")).setAttribute("style", "overflow: hidden; padding: 0") : (h = n.parentNode),
                    ("auto" != i.scroll && "x" != i.scroll) || ((p = document.createElement("div")), (c = document.createElement("div")), p.setAttribute("class", y), c.setAttribute("class", t), p.appendChild(c), h.appendChild(p)),
                    ("auto" != i.scroll && "y" != i.scroll) || ((f = document.createElement("div")), (d = document.createElement("div")), f.setAttribute("class", g), d.setAttribute("class", e), f.appendChild(d), h.appendChild(f)),
                    "auto" != i.scroll && m && n.addClass("only-" + i.scroll),
                        (n.onscroll = function () {
                            var t;
                            ("auto" != i.scroll && "y" != i.scroll) ||
                            (100 != b.y.volume ? ((t = this.scrollTop / (this.scrollHeight - this.offsetHeight)), (b.y.position = t * (f.offsetHeight - d.offsetHeight))) : (b.y.position = 0),
                                r.css(d, {top: b.y.position + "px", height: b.y.volume.toFixed(2) + "%"}));
                        }),
                        C(),
                    c &&
                    r.bind(c, a, function (t) {
                        t.preventDefault(), (v.x = !0), r.addClass(this, "active"), (x.move = t.clientX || t.touches[0].clientX || t.originalEvent.touches[0].clientX), (x.pos = b.x.position);
                    }),
                    d &&
                    (r.bind(f, a, function (t) {
                        var i, e;
                        t.target != this ||
                        v.x ||
                        v.y ||
                        (t.preventDefault(),
                            (i = (t.clientY || t.touches[0].clientY || t.originalEvent.touches[0].clientY) - this.getBoundingClientRect().top),
                            (e = function (t) {
                                var e;
                                i < b.y.position
                                    ? ((e = n.scrollTop - 0.95 * n.offsetHeight), r.scrollTop(n, e, t))
                                    : i > d.offsetHeight + b.y.position
                                        ? ((e = n.scrollTop + 0.95 * n.offsetHeight), r.scrollTop(n, e, t))
                                        : clearInterval(E);
                            })(100),
                            (E = setInterval(function () {
                                e(100);
                            }, 100)));
                    }),
                        r.bind(d, a, function (t) {
                            t.preventDefault(), (v.y = !0), r.addClass(this, "active"), (x.move = t.clientY || t.touches[0].clientY || t.originalEvent.touches[0].clientY), (x.pos = b.y.position);
                        })),
                        r.bind(document, o, function (t) {
                            var e;
                            v.x
                                ? ((e = t.clientX || t.touches[0].clientX || t.originalEvent.touches[0].clientX), (b.x.position = x.pos + e - x.move), (n.scrollLeft = b.x.position * b.x.coef))
                                : v.y && ((t = t.clientY || t.touches[0].clientY || t.originalEvent.touches[0].clientY), (b.y.position = x.pos + t - x.move), (n.scrollTop = b.y.position * b.y.coef));
                        }),
                        r.bind(document, l, function (t) {
                            clearInterval(E), v.x && r.remClass(c, "active"), v.y && r.remClass(d, "active"), (v.x = !1), (v.y = !1);
                        }),
                        i
                );
            }

            function C() {
                ("auto" != i.scroll && "x" != i.scroll) ||
                ((b.x.volume = n.scrollHeight ? (100 * n.offsetHeight) / n.scrollHeight : 100),
                    (b.x.coef = p.offsetHeight ? n.scrollHeight / p.offsetHeight : 0),
                    p.setAttribute("data-width", b.x.volume.toFixed()),
                    r.css(n, {"padding-bottom": r.getScrollWidth() + "px"})),
                ("auto" != i.scroll && "y" != i.scroll) ||
                ((b.y.volume = n.scrollHeight ? (100 * n.offsetHeight) / n.scrollHeight : 100),
                    (b.y.coef = f.offsetHeight ? n.scrollHeight / f.offsetHeight : 0),
                    f.setAttribute("data-height", b.y.volume.toFixed()),
                    100 <= b.y.volume ? r.addClass(f, "hidden") : r.remClass(f, "hidden"),
                    (s = 100 == b.y.volume ? 0 : r.getScrollWidth(n)),
                    r.css(n, {"padding-right": s + "px", width: "calc(100% + " + s + "px)"})),
                    n.onscroll();
            }
        },
    }),
    window.UI.extend({
        dyngraph: function (t, e) {
            function A() {
                return this;
            }

            var w,
                T,
                _,
                M,
                k,
                D,
                I,
                r,
                F,
                B,
                L,
                R,
                V,
                O,
                z,
                N = -100,
                G = -100,
                H = !1,
                j = !1,
                W = !1,
                q = !1,
                U = !1,
                K = {},
                $ = {
                    w: 0,
                    h: 0,
                    data: [],
                    division: "auto",
                    max: void 0,
                    min: void 0,
                    translate: {x: 0, y: 0},
                    padding: {fromParent: !0, bottom: 40, left: 50, right: 50, top: 30},
                    dpi: {x: 0, y: 0},
                    offsetText: 7,
                    color: "0,0,0",
                    gradientLine: [],
                    options: {
                        pointsSize: 2,
                        pointsShadowSize: 5,
                        mainPointSize: 5,
                        mainPointPulseSize: 15,
                        mainPointShadowSize: 9
                    },
                    measure: "",
                },
                Y = {start: 2e3, new: 500, text: 200, clear: 1e3},
                X = {start: 0, translate: 0, clear: 0},
                J = window.devicePixelRatio || 1,
                Z = 1 / J,
                Q = 0,
                tt = !1;

            function et(t) {
                "object" == typeof t && (A.setOptions(t), (B = t.data || []), (L = !!t.showValuesAlways), (R = t.radiusMouse || 15), (V = t.hoverType || "column"), ($.max = void 0), ($.min = void 0));
            }

            function it(t) {
                for (var e = 0; e < t.length; e++) (void 0 === $.min || t[e] < $.min) && ($.min = t[e]), (void 0 === $.max || t[e] > $.max) && ($.max = t[e]);
                $.division = "auto" == $.division ? t.length : $.division;
                for (e = 0; e < t.length; e++) $.data[e] = {
                    x: e * $.dpi.x,
                    y: 0 != $.dpi.y ? (t[e] - $.min) * $.dpi.y : $.h / 2,
                    value: t[e],
                    timeAdd: 0
                };
            }

            function rt() {
                $.dpi.y = $.max != $.min ? $.h / ($.max - $.min) : 0;
                for (var t = 0; t < $.data.length; t++) $.data[t].y = 0 != $.dpi.y ? ($.data[t].value - $.min) * $.dpi.y : $.h / 2;
            }

            function nt(t) {
                return +t.toFixed(8);
            }

            return (
                (w = document.getElementById(t)),
                    (T = A.canvas = document.createElement("canvas")),
                    (_ = document.createElement("canvas")),
                    (M = document.createElement("canvas")),
                    (k = document.createElement("canvas")),
                    (D = T.getContext("2d")),
                    (I = _.getContext("2d")),
                    (ctxLine = M.getContext("2d")),
                    (A.addPoint = function (t) {
                        if (Array.isArray(t)) for (var e = 0; e < t.length; e++) $.data.push({
                            x: $.data.length * $.dpi.x,
                            y: (t[e] - $.min) * $.dpi.y,
                            value: t[e],
                            timeAdd: 0
                        });
                        else $.data.push({x: $.data.length * $.dpi.x, y: (t - $.min) * $.dpi.y, value: t, timeAdd: 0});
                    }),
                    (A.setOptions = function (t) {
                        "object" == typeof t &&
                        (t.color && ($.color = t.color),
                        t.measure && ($.measure = t.measure),
                        t.division && ($.division = t.division),
                        t.offsetText && ($.offsetText = t.offsetText),
                        t.gradientLine && ($.gradientLine = t.gradientLine),
                        "object" == typeof t.padding &&
                        (t.padding.fromParent && ($.padding.fromParent = t.padding.fromParent),
                        t.padding.bottom && ($.padding.bottom = t.padding.bottom),
                        t.padding.left && ($.padding.left = t.padding.left),
                        t.padding.right && ($.padding.right = t.padding.right),
                        t.padding.top && ($.padding.top = t.padding.top)),
                        "object" == typeof t.options &&
                        (t.options.pointsSize && ($.options.pointsSize = t.options.pointsSize),
                        t.options.pointsShadowSize && ($.options.pointsShadowSize = t.options.pointsShadowSize),
                        t.options.mainPointSize && ($.options.mainPointSize = t.options.mainPointSize),
                        t.options.mainPointPulseSize && ($.options.mainPointPulseSize = t.options.mainPointPulseSize),
                        t.options.mainPointShadowSize && ($.options.mainPointShadowSize = t.options.mainPointShadowSize)),
                        "object" == typeof t.duration && (t.duration.new && (Y.new = t.duration.new), t.duration.text && (Y.text = t.duration.text), t.duration.start && (Y.start = t.duration.start)));
                    }),
                    (A.update = function () {
                        (J = window.devicePixelRatio || 1),
                            (Z = 1 / J),
                            (r = w.offsetWidth),
                            (F = w.offsetHeight),
                            (_.width = M.width = k.width = T.width = r * J),
                            (_.height = M.height = k.height = T.height = F * J),
                        $.padding.fromParent &&
                        (($.padding.bottom = parseInt(window.getComputedStyle(w, null).getPropertyValue("padding-bottom"))),
                            ($.padding.left = parseInt(window.getComputedStyle(w, null).getPropertyValue("padding-left"))),
                            ($.padding.right = parseInt(window.getComputedStyle(w, null).getPropertyValue("padding-right"))),
                            ($.padding.top = parseInt(window.getComputedStyle(w, null).getPropertyValue("padding-top")))),
                            ($.w = r - $.padding.left - $.padding.right),
                            ($.h = F - $.padding.top - $.padding.bottom),
                            ($.dpi.x = $.w / ($.division - 1)),
                            ($.dpi.y = $.max != $.min ? $.h / ($.max - $.min) : 0),
                            ($.translate.x = $.translate.x ? $.dpi.x : 0);
                        for (var t = 0; t < $.data.length; t++) ($.data[t].x = t * $.dpi.x), ($.data[t].y = 0 != $.dpi.y ? ($.data[t].value - $.min) * $.dpi.y : $.h / 2);
                        if ($.gradientLine.length) {
                            for (var e = k.getContext("2d"), i = e.createLinearGradient($.padding.left - 15, 0, $.w + $.padding.left + 15, 0), t = 0; t < $.gradientLine.length; t++) i.addColorStop($.gradientLine[t][0], $.gradientLine[t][1]);
                            e.scale(J, J), (e.fillStyle = i), e.fillRect(0, 0, r, F), ($.color = "0,0,0");
                        }
                        U = !1;
                    }),
                    (A.clear = function () {
                        q || (X.clear = new Date().getTime()), (q = !0);
                    }),
                    (A.reinit = function (t, e) {
                        e && A.clear(),
                            q
                                ? (K = t)
                                : ((X.start = new Date().getTime()),
                                    (X.translate = X.clear = $.translate.x = 0),
                                    t
                                        ? (et(t), it(B))
                                        : (($.min = void 0),
                                            ($.max = void 0),
                                            $.data.splice(0, $.data.length - $.division),
                                            (function () {
                                                for (var t = 0; t < $.data.length; t++) (void 0 === $.min || $.data[t].value < $.min) && ($.min = $.data[t].value), (void 0 === $.max || $.data[t].value > $.max) && ($.max = $.data[t].value);
                                            })()),
                                    A.update());
                    }),
                    et(e),
                    (function () {
                        it(B);
                        var e = !!("ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch)),
                            t = e ? "touchmove" : "mousemove";
                        T.addEventListener(t, function (t) {
                            (bounds = w.getBoundingClientRect()), (N = e ? t.targetTouches[0].clientX - bounds.left : t.clientX), (G = e ? t.targetTouches[0].clientY - bounds.top : t.clientY);
                        }),
                            T.addEventListener("mouseout", function (t) {
                                G = N = -100;
                            }),
                        e &&
                        T.addEventListener("touchend", function (t) {
                            G = N = -100;
                        }),
                            window.addEventListener ? window.addEventListener("resize", A.update) : window.attachEvent && window.attachEvent("onresize", A.update),
                            A.update(),
                            w.appendChild(T),
                            (X.start = new Date().getTime());
                    })(),
                    (function t() {
                        if (!tt) {
                            var e = new Date(),
                                i = e.getTime(),
                                r = i - X.start,
                                n = r < Y.start ? r / Y.start : 1,
                                s = 0,
                                a = 0,
                                o = [];
                            3e4 < i - O && A.reinit(), 1 == n && X.translate && (s = (l = i - X.translate) < Y.new ? l / Y.new : 1);
                            var l = $.translate.x * s;
                            if ((W && ((W = !1), rt()), X.clear && (a = (r = i - X.clear) < Y.clear ? r / Y.clear : 1), $.data.length)) {
                                var h,
                                    p,
                                    c,
                                    f,
                                    d,
                                    u,
                                    m,
                                    y,
                                    g,
                                    v = $.w * n + l,
                                    b = $.w * a + l,
                                    x = 0;
                                if (q && b && v <= b && 0 != Object.keys(K).length)
                                    return (X.start = new Date().getTime()), (X.translate = X.clear = $.translate.x = 0), et(K), it(B), A.update(), (q = !(K = {})), void window.requestAnimationFrame(t);
                                if (
                                    (D.clearRect(0, 0, D.canvas.width, D.canvas.height),
                                        I.clearRect(0, 0, I.canvas.width, I.canvas.height),
                                        (D.lineWidth = 1),
                                        (D.globalCompositeOperation = "source-over"),
                                        (D.fillStyle = "rgba(0,0,0,0.4)"),
                                        (D.strokeStyle = "rgba(" + $.color + ",1)"),
                                        (D.textAlign = "center"),
                                        (D.font = '0.8em "Open Sans"'),
                                        D.save(),
                                        D.scale(J, J),
                                        D.translate(-l, 0),
                                        D.moveTo(0, 0),
                                        D.beginPath(),
                                    1 != a)
                                ) {
                                    if ((U = (!(1 != n || s || a || $.data.length > $.division) || !U) && U)) D.scale(Z, Z), D.drawImage(M, 0, 0), (x = $.data[$.data.length - 1].y), (o = $.data), D.scale(J, J);
                                    else {
                                        for (var E = 0; E < $.data.length; E++)
                                            if (!(E < $.data.length - 1 && $.data[E + 1].x <= b))
                                                if ($.data[E].x - b < 0) {
                                                    var C = $.data[E + 1].y + (($.data[E + 1].x - b) * ($.data[E].y - $.data[E + 1].y)) / ($.data[E + 1].x - $.data[E].x);
                                                    (o[E] = {x: b, y: C}),
                                                    0 == E &&
                                                    s &&
                                                    ($.data[E].value == $.max || H
                                                        ? ((H = !0), ($.max += 0 != $.dpi.y ? nt((C - $.h) / $.dpi.y) : 0), rt())
                                                        : ($.data[E].value != $.min && !j) || ((j = !0), ($.min += 0 != $.dpi.y ? nt(C / $.dpi.y) : 0), rt())),
                                                    0 < $.data[E].timeAdd && L && ($.data[0].timeAdd = -i),
                                                        D.lineTo($.padding.left + o[E].x, $.padding.top + $.h - o[E].y);
                                                } else if ($.data[E].x <= v + 1e-10)
                                                    (o[E] = {x: $.data[E].x, y: $.data[E].y}),
                                                        (x = o[E].y),
                                                        D.lineTo($.padding.left + o[E].x, $.padding.top + $.h - o[E].y),
                                                        $.data[E].value >= $.max ? (($.max = $.data[E].value), (W = !(H = !1))) : $.data[E].value <= $.min && (($.min = $.data[E].value), (W = !(j = !1)));
                                                else if (o[E - 1]) {
                                                    1 != n || X.translate || (($.translate.x = $.dpi.x), (X.translate = new Date().getTime())),
                                                        (x = o[E - 1].y + ((v - o[E - 1].x) * ($.data[E].y - o[E - 1].y)) / ($.data[E].x - o[E - 1].x)) < 0
                                                            ? (($.min += 0 != $.dpi.y ? nt(x / $.dpi.y) : 0), (j = !1), rt())
                                                            : $.h < x && (($.max += 0 != $.dpi.y ? nt((x - $.h) / $.dpi.y) : 0), (H = !1), rt()),
                                                        D.lineTo($.padding.left + v, $.padding.top + $.h - x);
                                                    break;
                                                }
                                        for (D.stroke(), E = 0; E < o.length; E++)
                                            o[E] &&
                                            ((D.globalCompositeOperation = "destination-out"),
                                                (D.fillStyle = "rgba(0,0,0,1)"),
                                                (D.lineWidth = 0),
                                                D.beginPath(),
                                                D.arc($.padding.left + o[E].x, $.padding.top + $.h - o[E].y, $.options.pointsShadowSize, 0, 2 * Math.PI),
                                                D.fill(),
                                                (D.globalCompositeOperation = "source-over"),
                                                (D.fillStyle = "rgba(" + $.color + ",1)"),
                                                D.beginPath(),
                                                D.arc($.padding.left + o[E].x, $.padding.top + $.h - o[E].y, $.options.pointsSize, 0, 2 * Math.PI),
                                                D.fill());
                                    }
                                    for (1 != n || s || a || (ctxLine.clearRect(0, 0, ctxLine.canvas.width, ctxLine.canvas.height), ctxLine.drawImage(T, 0, 0), (U = !0)), E = 0; E < o.length; E++)
                                        (h = E),
                                            (p = i),
                                            (g = y = m = u = d = f = c = void 0),
                                            (m = !1),
                                            (y = $.padding.left + $.data[h].x),
                                            (g = $.padding.top + $.h - $.data[h].y),
                                            L
                                                ? (0 == $.data[h].timeAdd && ($.data[h].timeAdd = p),
                                                    $.data[h].timeAdd < 0 ? 0 == (c = (u = p + $.data[h].timeAdd) < Y.text ? 1 - u / Y.text : 0) && ($.data[h].timeAdd = 0) : (c = (u = p - $.data[h].timeAdd) < Y.text ? u / Y.text : 1))
                                                : ("radius" == V ? (m = (f = y - N) * f + (f = g - G) * f <= R * R) : "column" == V && (m = h == Math.round((N - $.padding.left) / $.dpi.x)),
                                                    (c = m
                                                        ? ($.data[h].timeAdd <= 0 && ((d = 0 < (u = p + $.data[h].timeAdd) && u < Y.text ? Y.text - u : 0), ($.data[h].timeAdd = p + d)), (u = p - $.data[h].timeAdd) < Y.text ? u / Y.text : 1)
                                                        : (0 < $.data[h].timeAdd && ((d = 0 < (u = p - $.data[h].timeAdd) && u < Y.text ? Y.text - u : 0), ($.data[h].timeAdd = -p - d)),
                                                            (u = p + $.data[h].timeAdd) < Y.text ? 1 - u / Y.text : 0))),
                                        0 < c &&
                                        ((d = 0 < h ? $.data[h - 1].y - $.data[h].y : 0),
                                            (p = h < $.data.length - 1 ? $.data[h + 1].y - $.data[h].y : 0),
                                            (u = $.offsetText),
                                            (D.textBaseline = "bottom"),
                                            (D.fillStyle = "rgba(255,255,255," + 0.8 * c + ")"),
                                        ((d <= 0 && 0 < p && -d < p) || (0 < d && (0 <= p || (p < 0 && -p < d)))) && ((D.textBaseline = "top"), (u = -u)),
                                            D.fillText($.data[h].value + ($.measure ? " " + $.measure : ""), y, g - u));
                                    (D.globalCompositeOperation = "destination-out"),
                                        (D.fillStyle = "rgba(0,0,0,1)"),
                                        (D.lineWidth = 0),
                                        D.beginPath(),
                                        D.arc($.padding.left + v, $.padding.top + $.h - x, $.options.mainPointShadowSize, 0, 2 * Math.PI),
                                        D.fill(),
                                        (D.globalCompositeOperation = "source-over"),
                                        (e = 1 - (a = 0.001 * e.getMilliseconds())),
                                        (D.fillStyle = "rgba(" + $.color + "," + e + ")"),
                                        D.beginPath(),
                                        D.arc($.padding.left + v, $.padding.top + $.h - x, $.options.mainPointPulseSize * a, 0, 2 * Math.PI),
                                        D.fill(),
                                        (D.fillStyle = "rgba(" + $.color + ",1)"),
                                        D.beginPath(),
                                        D.arc($.padding.left + v, $.padding.top + $.h - x, $.options.mainPointSize - Math.sin(Math.PI * e), 0, 2 * Math.PI),
                                        D.fill();
                                }
                                $.gradientLine.length &&
                                (I.drawImage(T, 0, 0), D.clearRect(0, 0, D.canvas.width, D.canvas.height), D.scale(Z, Z), D.drawImage(k, l * J, 0), (D.globalCompositeOperation = "destination-in"), D.drawImage(_, l * J, 0), D.scale(J, J)),
                                    D.restore(),
                                    D.save(),
                                    D.scale(J, J),
                                    (D.fillStyle = "rgba(255,255,255,0.4)"),
                                    (D.textBaseline = "bottom"),
                                    (D.font = '0.6em "Open Sans"');
                                var P = $.padding.left + $.w,
                                    S = F - 5;
                                for (D.fillText("now", P, S), E = 1; E < $.data.length / 10; E++) (P -= 10 * $.dpi.x), D.fillText(10 * E + " min", P, S);
                                D.restore(),
                                1 < $.data.length &&
                                l >= $.data[1].x &&
                                ($.data.length > $.division &&
                                (function () {
                                    var t = [];
                                    $.dpi.y = $.max != $.min ? $.h / ($.max - $.min) : 0;
                                    for (var e = 0; e < $.data.length - 1; e++) (t[e] = $.data[e + 1]), (t[e].x = e * $.dpi.x), (t[e].y = 0 != $.dpi.y ? (t[e].value - $.min) * $.dpi.y : $.h);
                                    $.data = t;
                                })(),
                                    (X.translate = $.translate.x = l = 0)),
                                    (O = i),
                                    z
                                        ? ((delta = (performance.now() - z) / 1e3),
                                            (z = performance.now()),
                                            (fps = 1 / delta),
                                        fps < 25 && Q++,
                                        25 < Q &&
                                        (UI.func.addClass(w, "hide"),
                                            setTimeout(function () {
                                                tt = !0;
                                            }, 500)))
                                        : ((z = performance.now()), (fps = 0)),
                                    window.requestAnimationFrame(t);
                            } else window.requestAnimationFrame(t);
                        }
                    })(),
                    A
            );
        },
    }),
    window.UI.extend({
        button: function (t, e) {
            function i() {
                return this;
            }

            var r = "string" == typeof t ? document.getElementById(t) : t,
                n = r instanceof Node;
            let s = n ? r : void 0;
            var a = s ? s.getAttribute("data-loading") : null,
                o = s ? s.getAttribute("data-success") : null,
                t = s ? s.getAttribute("data-error") : null;
            (i.obj = s),
                (i.loadingText = e && "string" == typeof e.loadingText ? e.loadingText : a || "Loading"),
                (i.successText = e && "string" == typeof e.successText ? e.successText : o || "Success"),
                (i.errorText = e && "string" == typeof e.errorText ? e.errorText : t || "Error"),
                (i.changeAtOnce = !e || !1 !== e.changeAtOnce || e.changeAtOnce),
                (i.changeTexts = !e || !1 !== e.changeTexts || e.changeTexts);
            let l = function () {
            };
            return (
                n && ("input" == s.tagName.toLowerCase() ? (i.defaultText = s.value) : (i.defaultText = s.innerHTML)),
                    (i.default = function () {
                        (s.disabled = !1), (s.style.minWidth = ""), (s.style.minWidth = null), UI.func.remClass(s, "loading"), "input" == s.tagName.toLowerCase() ? (s.value = i.defaultText) : (s.innerHTML = i.defaultText);
                    }),
                    (i.loading = function (t) {
                        return (
                            (s.style.minWidth = s.offsetWidth + "px"),
                                UI.func.addClass(s, "loading"),
                                (s.disabled = !0),
                            (i.changeTexts || t) && ((t = t || i.loadingText), "input" == s.tagName.toLowerCase() ? (s.value = t) : (s.innerHTML = t)),
                                i
                        );
                    }),
                    (i.success = function (t) {
                        return (
                            setTimeout(function () {
                                UI.func.addClass(s, "success"),
                                    UI.func.remClass(s, "loading"),
                                    (s.style.minWidth = ""),
                                    (s.style.minWidth = null),
                                (i.changeTexts || t) && ((t = t || i.successText), "input" == s.tagName.toLowerCase() ? (s.value = t) : (s.innerHTML = t));
                            }, 300),
                                setTimeout(function () {
                                    UI.func.remClass(s, "success"), (s.disabled = !1), (i.changeTexts || t) && ("input" == s.tagName.toLowerCase() ? (s.value = i.defaultText) : (s.innerHTML = i.defaultText));
                                }, 2e3),
                                i
                        );
                    }),
                    (i.error = function (t) {
                        return (
                            setTimeout(function () {
                                UI.func.addClass(s, "error"), UI.func.remClass(s, "loading"), (i.changeTexts || t) && ((t = t || i.errorText), "input" == s.tagName.toLowerCase() ? (s.value = t) : (s.innerHTML = t));
                            }, 300),
                                setTimeout(function () {
                                    UI.func.remClass(s, "error"),
                                        (s.disabled = !1),
                                        (s.style.minWidth = ""),
                                        (s.style.minWidth = null),
                                    (i.changeTexts || t) && ("input" == s.tagName.toLowerCase() ? (s.value = i.defaultText) : (s.innerHTML = i.defaultText));
                                }, 2e3),
                                i
                        );
                    }),
                    (i.attr = function (t, e) {
                        return void 0 !== e ? (s.setAttribute(t, e), i) : s.getAttribute(t);
                    }),
                    (i.click = function (t) {
                        return void 0 === t ? s.click() : (l = t), i;
                    }),
                    UI.func.bind(r, "click", function (t) {
                        return (t = t || event), this.disabled || (n || ((i.defaultText = "input" == this.tagName.toLowerCase() ? this.value : this.innerHTML), (s = this)), i.changeAtOnce && i.loading(), l.call(this, i, t)), i;
                    }),
                    i
            );
        },
    }),
    window.UI.extend({
        qrscan: function (t) {
            function e() {
                return this;
            }

            let i = t.scan || function () {
                },
                r = t.error || function () {
                },
                n = document.createElement("div"),
                s = document.createElement("div"),
                a = document.createElement("div"),
                o = document.createElement("video"),
                l = document.createElement("canvas"),
                h = l.getContext("2d"),
                p = !1,
                c = !0,
                f;

            function d(t, e, i) {
                h.beginPath(), h.moveTo(t.x, t.y), h.lineTo(e.x, e.y), (h.lineWidth = 4), (h.strokeStyle = i), h.stroke();
            }

            function u() {
                var t;
                o.readyState === o.HAVE_ENOUGH_DATA &&
                ((l.hidden = !1),
                    (l.height = o.videoHeight),
                    (l.width = o.videoWidth),
                    l.clientWidth > window.innerWidth && p ? (UI.func.remClass(n, "maxvertical"), (p = !1)) : l.clientHeight > window.innerHeight && !p && ((p = !0), UI.func.addClass(n, "maxvertical")),
                    h.drawImage(o, 0, 0, l.width, l.height),
                    (t = h.getImageData(0, 0, l.width, l.height)),
                (t = jsQR(t.data, t.width, t.height, {inversionAttempts: "dontInvert"})) &&
                (d(t.location.topLeftCorner, t.location.topRightCorner, "#FF3B58"),
                    d(t.location.topRightCorner, t.location.bottomRightCorner, "#FF3B58"),
                    d(t.location.bottomRightCorner, t.location.bottomLeftCorner, "#FF3B58"),
                    d(t.location.bottomLeftCorner, t.location.topLeftCorner, "#FF3B58"),
                    i.call(e, t.data))),
                c && requestAnimationFrame(u);
            }

            return (
                n.setAttribute("class", "scan-qr-outer"),
                    a.setAttribute("class", "scan-qr-loading"),
                    s.setAttribute("class", "ico popup-close hoverhighlighting"),
                    n.appendChild(l),
                    n.appendChild(a),
                    (a.innerHTML = "Unable to access video stream<br>Allow access to the camera if you have one"),
                    n.appendChild(s),
                    document.body.appendChild(n),
                    (e.scan = function (t) {
                        return (i = t), e;
                    }),
                    (e.close = function () {
                        (c = !1),
                        f && f.stop(),
                            UI.func.addClass(n, "hide"),
                            setTimeout(function () {
                                n.remove();
                            }, 300);
                    }),
                    (s.onclick = function () {
                        e.close();
                    }),
                    navigator.mediaDevices
                        .getUserMedia({video: {facingMode: "environment"}})
                        .then(function (t) {
                            (o.srcObject = t), (f = t.getTracks()[0]), o.setAttribute("playsinline", !0), (a.innerHTML = "Loading"), o.play(), (a.hidden = !0), requestAnimationFrame(u);
                        })
                        .catch(function (t) {
                            r.call(e, t);
                        }),
                    e
            );
        },
    }),
    window.UI.extend({
        popup: function (t) {
            function i() {
                return i;
            }

            var e = UI.func;
            (i.container = null),
                (i.id = t.id || ""),
                (i.title = t.title || ""),
                (i.html = t.html || ""),
                (i.class = t.class || ""),
                (i.bgclose = !1 !== t.bgclose || t.bgclose),
                (i.append = !1 !== t.append || t.append),
                (i.bodyscroll = !1 !== t.bodyscroll || t.bodyscroll),
                (i.marginScroll = !1 !== t.marginScroll || t.marginScroll),
                (i.allowSubmit = !1 !== t.allowSubmit || t.allowSubmit),
                (i.afterRender = t.afterRender || function () {
                }),
                (i.afterClose = t.afterClose || function () {
                });
            let r = t.onSubmit || function () {
            };
            var n = void 0 !== t.submitButton ? t.submitButton : ".submit";
            let s = null;
            if (((i.show = function () {
            }), (i.submit = function () {
            }), (i.close = function () {
            }), 1 == i.append)) {
                let t = document.createElement("div");
                t.setAttribute("id", i.id), t.setAttribute("class", "popup" + (i.class ? " " + i.class : "")), (t.innerHTML = '<div class="popup-bg"></div><div class="popup-wrap">' + i.html + "</div>"), (i.container = t);
            } else {
                if ("" == i.id) return !1;
                i.container = document.getElementById(i.id);
            }
            (i.show = function () {
                if (!1 === i) return !1;
                1 == i.append && document.body.appendChild(i.container);
                var t = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);
                document.body;
                return (
                    document.documentElement.offsetHeight < t
                        ? ((document.body.style.overflow = "hidden"), (document.body.style.marginRight = e.getScrollWidth() + "px"), i.marginScroll && (i.container.style.paddingRight = e.getScrollWidth() + "px"))
                        : (i.bodyscroll = !1),
                        setTimeout(function () {
                            e.addClass(i.container, "active");
                        }, 2),
                        (s = n ? i.container.querySelector(n) : null),
                        e.on(i.container, "click", ".popup-close-btn, .popup-close, .popup-bg", function () {
                            (!e.hasClass(this, "popup-bg") || (e.hasClass(this, "popup-bg") && i.bgclose)) && i.close();
                        }),
                    n &&
                    e.on(i.container, "click", n, function (t) {
                        i.submit(this, t);
                    }),
                        i.afterRender.call(i),
                        i
                );
            }),
                (i.submit = function (t, e) {
                    !0 == (!1 !== r.call(t, i, e)) && i.close();
                }),
                (i.close = function () {
                    !0 == (!1 !== i.afterClose()) &&
                    (e.remClass(i.container, "active"),
                        e.unbind(document, "keydown", a),
                        setTimeout(function () {
                            i.bodyscroll && ((document.body.style.overflow = ""), (document.body.style.marginRight = ""), (document.body.style.overflow = null), (document.body.style.marginRight = null)),
                            1 == i.append && i.container.remove();
                        }, 200));
                });
            var a = function (t) {
                13 == (t = t || event).keyCode && i.allowSubmit ? (t.preventDefault(), i.submit(s)) : 27 == t.keyCode && (t.preventDefault(), i.close());
            };
            return e.bind(document, "keydown", a), i;
        },
        confirm: function (t, e, i) {
            var r = i && i.cancel ? i.cancel : "Cancel",
                i = i && i.ok ? i.ok : "Ok";
            return (
                UI.popup({
                    html:
                        '<div class="popup-content popup-confirm fix-width"> \t\t\t\t\t\t<p>' +
                        t +
                        '</p>\t\t\t\t\t\t<div class="popup-ctrl"><button type="button" class="btn cancel popup-close-btn">' +
                        r +
                        '</button>\t\t\t\t\t\t<button type="button" class="btn submit popup-close-btn">' +
                        i +
                        "</button></div>\t\t\t\t\t</div>",
                    onSubmit: e,
                }).show(),
                    function () {
                        return this;
                    }
            );
        },
        choice: function (t, s, e) {
            t = {
                html:
                    '<div class="popup-content popup-confirm fix-width"> \t\t\t\t\t\t<p>' +
                    t +
                    '</p>\t\t\t\t\t\t<span id="popup_choice_btns"></span>\t\t\t\t\t\t<button type="button" class="btn cancel popup-close-btn">' +
                    ((e = e || {}) && e.cancel ? e.cancel : "Cancel") +
                    "</button>\t\t\t\t\t</div>",
                afterRender: function () {
                    var e,
                        i = this;
                    let r = UI.func,
                        n = r.id("popup_choice_btns");
                    for (e in s) {
                        let t = document.createElement("button");
                        t.setAttribute("type", "button"),
                            t.setAttribute("class", "btn" + (s[e].class ? " " + s[e].class : "")),
                            (t.innerHTML = s[e].btn),
                            r.bind(t, "click", function () {
                                s[e].func.call(i);
                            }),
                            n.appendChild(t);
                    }
                },
            };
            return UI.popup(Object.assign(t, e)).show(), self;
        },
        alert: function (t, e) {
            return (
                UI.popup({
                    html: '<div class="popup-content popup-alert fix-width"> \t\t\t\t\t\t<p>' + t + '</p>\t\t\t\t\t\t<span class="btn submit popup-close-btn">Ok</span>\t\t\t\t\t</div>',
                    afterClose: function () {
                        e && "function" == typeof e && e.call();
                    },
                }).show(),
                    function () {
                        return this;
                    }
            );
        },
    }),
    window.UI.extend({
        reminder: function (e) {
            function i() {
                return i;
            }

            var t = UI.func;
            if (
                ((i.container = null),
                    (i.id = e.id || ""),
                    (i.title = e.title || ""),
                    (i.html = e.html || ""),
                    (i.bgclose = !1 !== e.bgclose || e.bgclose),
                    (i.append = !1 !== e.append || e.append),
                    (i.bodyscroll = !1 !== e.bodyscroll || e.bodyscroll),
                    (i.closebtn = !0 === e.closebtn && e.closebtn),
                    (i.afterRender = e.afterRender || function () {
                    }),
                    (i.onSubmit = e.onSubmit || function () {
                    }),
                    (i.afterClose = e.afterClose || function () {
                    }),
                    (i.show = function () {
                    }),
                    (i.submit = function () {
                    }),
                    (i.close = function () {
                    }),
                1 == i.append)
            ) {
                let t = document.createElement("div");
                e = i.closebtn ? '<div class="reminder-close close"></div>' : "";
                t.setAttribute("id", i.id), t.setAttribute("class", "reminder"), (t.innerHTML = '<div class="reminder-bg"></div><div class="reminder-wrap">' + i.html + "</div>" + e), (i.container = t);
            } else {
                if ("" == i.id) return !1;
                i.container = document.getElementById(i.id);
            }
            return (
                (i.show = function () {
                    return (
                        !1 !== i &&
                        (1 == i.append && document.body.appendChild(i.container),
                            setTimeout(function () {
                                t.addClass(i.container, "active");
                            }, 2),
                            t.on(i.container, "click", ".close", function () {
                                i.close();
                            }),
                            t.on(i.container, "click", ".submit", function () {
                                i.onSubmit(this);
                            }),
                            i.afterRender.call(i),
                            i)
                    );
                }),
                    (i.submit = function () {
                        !0 == (!1 !== i.onSubmit()) && i.close();
                    }),
                    (i.close = function () {
                        !0 == (!1 !== i.afterClose()) &&
                        (t.remClass(i.container, "active"),
                            setTimeout(function () {
                                1 == i.append && i.container.remove();
                            }, 200));
                    }),
                    i
            );
        },
    }),
    window.UI.extend({
        radio: function (t) {
            function i() {
                return this;
            }

            var e = UI.func;
            (i.inputs = document.getElementsByName(t)), (i.value = ""), (i.set = function (t) {
            }), (i.val = function (t) {
            }), (i.change = function (t) {
            });
            var r = function () {
            };
            if (
                ((i.set = function (e) {
                    for (let t = 0; t < i.inputs.length; t++) i.inputs[t].value == e && ((i.inputs[t].checked = !0), (i.value = e));
                    return r.call(i), i.value;
                }),
                    (i.val = function (e) {
                        if (void 0 === e) {
                            i.value = "";
                            for (let t = 0; t < i.inputs.length; t++) "radio" === i.inputs[t].type && i.inputs[t].checked && (i.value = i.inputs[t].value);
                            return i.value;
                        }
                        for (let t = 0; t < i.inputs.length; t++) i.inputs[t].value == e && ((i.inputs[t].checked = !0), (i.value = e));
                        r.call(i);
                    }),
                    (i.change = function (t) {
                        return (r = t), !0;
                    }),
                    e.bind(i.inputs, "click", function (t) {
                        (i.value = this.value), r.call(i, this);
                    }),
                    (i.value = i.val()),
                    i.inputs.length)
            )
                return i;
        },
    }),
    window.UI.extend({
        textbox: function (t, e) {
            function i() {
                return this;
            }

            let r = UI.func;
            (i.obj = "string" == typeof t ? document.getElementById(t) : t),
                (i.value = ""),
                (i.val = function (t) {
                }),
                (i.change = function (t) {
                }),
                (i.submit = function (t) {
                }),
                (i.prev = ""),
                (i.label = void 0),
                (i.error = void 0),
                (i.clearbtn = void 0),
                (i.pswdBtn = void 0),
                (i.copyBtn = void 0),
                (i.pasteBtn = void 0),
                (i.specBlock = void 0);
            let n = function () {
                },
                s = function () {
                },
                a = function () {
                },
                o = function () {
                },
                l = function () {
                },
                h = function () {
                },
                p = {};
            (p.btnClear = !("object" != typeof e || (!e.btnclear && !e.btnClear)) && (e.btnclear || e.btnClear)),
                (p.addLabel = !("object" != typeof e || !e.addLabel) && e.addLabel),
                (p.addError = !("object" != typeof e || !e.addError) && e.addError),
                (p.btnPswd = !("object" != typeof e || !e.btnPswd) && e.btnPswd),
                (p.btnCopy = !("object" != typeof e || !e.btnCopy) && e.btnCopy),
                (p.btnPaste = !("object" != typeof e || !e.btnPaste) && e.btnPaste),
                (p.readonly = !("object" != typeof e || !e.readonly) && e.readonly),
                (p.addclass = !("object" != typeof e || !e.addclass) && e.addclass),
                (p.specblock = !("object" != typeof e || !e.specblock) && e.specblock);
            let c,
                f,
                d = !1,
                u = "",
                m = document.createElement("div");
            if ((m.setAttribute("class", "input-texttype"), i.obj.parentNode.insertBefore(m, i.obj), m.appendChild(i.obj), p.addclass))
                if (Array.isArray(p.addclass)) for (var y in p.addclass) r.addClass(m, p.addclass[y]);
                else r.addClass(m, p.addclass);
            if (
                (!1 !== p.btnClear &&
                ((i.clearbtn = document.createElement("div")).setAttribute("class", "ico input-texttype-clr"),
                    r.addClass(m, "with-clrbtn"),
                    "before" == p.btnClear ? m.insertBefore(i.clearbtn, i.obj) : m.appendChild(i.clearbtn),
                    (i.clearbtn.onclick = function () {
                        i.val(""), i.obj.focus();
                    })),
                !1 !== p.addLabel && (((i.label = document.createElement("label")).innerHTML = p.addLabel), m.appendChild(i.label)),
                !1 !== p.btnPswd &&
                ((i.pswdBtn = document.createElement("div")).setAttribute("class", "ico input-texttype-pswd"),
                    m.appendChild(i.pswdBtn),
                    (i.pswdBtn.onclick = function () {
                        "text" == i.obj.getAttribute("type") ? i.obj.setAttribute("type", "password") : "password" == i.obj.getAttribute("type") && i.obj.setAttribute("type", "text");
                    })),
                !1 !== p.btnCopy &&
                ((i.copyBtn = document.createElement("div")).setAttribute("class", "ico input-texttype-copy"),
                    m.appendChild(i.copyBtn),
                    r.addClass(m, "with-copybtn"),
                    (i.copyBtn.onclick = function () {
                        r.copy(i.val());
                    })),
                !1 !== p.btnPaste &&
                navigator.clipboard &&
                ((i.pasteBtn = document.createElement("div")).setAttribute("class", "ico input-texttype-paste"),
                    m.appendChild(i.pasteBtn),
                    r.addClass(m, "with-pastebtn"),
                    (i.pasteBtn.onclick = function () {
                        navigator.clipboard
                            .readText()
                            .then(function (t) {
                                i.val(t);
                            })
                            .catch(function (t) {
                                UI.alert("You need to give the browser permission to use your clipboard");
                            });
                    })),
                !1 !== p.specblock && ((i.specblock = document.createElement("div")).setAttribute("class", "specblock"), (i.specblock.innerHTML = p.specblock), m.appendChild(i.specblock)),
                !1 !== p.addError)
            ) {
                (i.errorContainer = document.createElement("div")), (i.errorTxt = document.createElement("div")), i.errorContainer.setAttribute("class", "input-texttype-error"), i.errorTxt.setAttribute("class", "input-texttype-errortxt");
                let t = document.createElement("i");
                t.setAttribute("class", "ico"), "string" == typeof p.addError && (i.errorContainer.innerHTML = p.addError), i.errorContainer.appendChild(t), m.appendChild(i.errorContainer), m.appendChild(i.errorTxt);
            }
            return (
                !1 !== p.readonly && (r.addClass(m, "focus"), i.obj.setAttribute("readonly", "")),
                    (i.val = function (t) {
                        if (void 0 === t) return i.obj.value;
                        i.prev !== t && ((i.prev = i.value = i.obj.value = t), r.togClass(m, "empty", !i.obj.value), n.call(i, i.obj));
                    }),
                    (i.input = function (t) {
                        return (o = t), i;
                    }),
                    (i.change = function (t) {
                        return (n = t), i;
                    }),
                    (i.submit = function (t) {
                        return (s = t), i;
                    }),
                    (i.focus = function (t) {
                        return (a = t), i;
                    }),
                    (i.blur = function (t) {
                        return (l = t), i;
                    }),
                    (i.click = function (t) {
                        return (h = t), i;
                    }),
                    (i.error = function (t) {
                        return (
                            r.addClass(i.obj, "error"),
                                (d = !0),
                            i.errorContainer && i.errorTxt && (r.addClass(i.errorContainer, "error-active"), (i.errorTxt.innerHTML = t)),
                                clearTimeout(f),
                                (f = setTimeout(function () {
                                    d = !1;
                                }, 200)),
                                i
                        );
                    }),
                    r.bind(i.obj, "focus", function (t) {
                        (u = this.value), a.call(i, i.obj);
                    }),
                    r.bind(i.obj, "click", function (t) {
                        h.call(i, i.obj);
                    }),
                    r.bind(i.obj, "blur", function (t) {
                        l.call(i, i.obj), (i.prev = i.val());
                    }),
                    r.bind(i.obj, "input", function (t) {
                        (t = t || event),
                            (WH = t.which || t.keyCode),
                            o.call(i, this),
                            clearTimeout(c),
                            r.togClass(m, "empty", !i.obj.value),
                        u != this.value &&
                        (8 == WH || 13 == WH
                            ? (u !== value && ((u = i.value = i.obj.value), n.call(i, i.obj)), s.call(i, this))
                            : (c = setTimeout(function () {
                                u !== i.obj.value && ((u = i.value = i.obj.value), n.call(i, i.obj));
                            }, 500)));
                    }),
                    r.bind(document, "click", function (t) {
                        i.errorContainer && !d && r.remClass(i.errorContainer, "error-active");
                    }),
                i.errorContainer &&
                r.bind(i.errorContainer, "click", function (t) {
                    (d = !0),
                        r.addClass(this, "error-active"),
                        clearTimeout(f),
                        (f = setTimeout(function () {
                            d = !1;
                        }, 200));
                }),
                    (i.prev = i.value = i.val()),
                    r.togClass(m, "empty", !i.obj.value),
                    i
            );
        },
    }),
"undefined" != typeof navigator &&
(function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? (module.exports = e()) : "function" == typeof define && define.amd ? define(e) : ((t = "undefined" != typeof globalThis ? globalThis : t || self).lottie = e());
})(this, function () {
    "use strict";
    var svgNS = "http://www.w3.org/2000/svg",
        locationHref = "",
        _useWebWorker = !1,
        initialDefaultFrame = -999999,
        setWebWorker = function (t) {
            _useWebWorker = !!t;
        },
        getWebWorker = function () {
            return _useWebWorker;
        },
        setLocationHref = function (t) {
            locationHref = t;
        },
        getLocationHref = function () {
            return locationHref;
        };

    function createTag(t) {
        return document.createElement(t);
    }

    function extendPrototype(t, e) {
        for (var i, r = t.length, n = 0; n < r; n += 1) for (var s in (i = t[n].prototype)) Object.prototype.hasOwnProperty.call(i, s) && (e.prototype[s] = i[s]);
    }

    function getDescriptor(t, e) {
        return Object.getOwnPropertyDescriptor(t, e);
    }

    function createProxyFunction(t) {
        function e() {
        }

        return (e.prototype = t), e;
    }

    var audioControllerFactory =
            (($s.prototype = {
                addAudio: function (t) {
                    this.audios.push(t);
                },
                pause: function () {
                    for (var t = this.audios.length, e = 0; e < t; e += 1) this.audios[e].pause();
                },
                resume: function () {
                    for (var t = this.audios.length, e = 0; e < t; e += 1) this.audios[e].resume();
                },
                setRate: function (t) {
                    for (var e = this.audios.length, i = 0; i < e; i += 1) this.audios[i].setRate(t);
                },
                createAudio: function (t) {
                    return this.audioFactory
                        ? this.audioFactory(t)
                        : window.Howl
                            ? new window.Howl({src: [t]})
                            : {
                                isPlaying: !1,
                                play: function () {
                                    this.isPlaying = !0;
                                },
                                seek: function () {
                                    this.isPlaying = !1;
                                },
                                playing: function () {
                                },
                                rate: function () {
                                },
                                setVolume: function () {
                                },
                            };
                },
                setAudioFactory: function (t) {
                    this.audioFactory = t;
                },
                setVolume: function (t) {
                    (this._volume = t), this._updateVolume();
                },
                mute: function () {
                    (this._isMuted = !0), this._updateVolume();
                },
                unmute: function () {
                    (this._isMuted = !1), this._updateVolume();
                },
                getVolume: function () {
                    return this._volume;
                },
                _updateVolume: function () {
                    for (var t = this.audios.length, e = 0; e < t; e += 1) this.audios[e].volume(this._volume * (this._isMuted ? 0 : 1));
                },
            }),
                function () {
                    return new $s();
                }),
        createTypedArray =
            "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array
                ? function (t, e) {
                    return "float32" === t ? new Float32Array(e) : "int16" === t ? new Int16Array(e) : "uint8c" === t ? new Uint8ClampedArray(e) : nt(t, e);
                }
                : nt;

    function nt(t, e) {
        var i,
            r = 0,
            n = [];
        switch (t) {
            case "int16":
            case "uint8c":
                i = 1;
                break;
            default:
                i = 1.1;
        }
        for (r = 0; r < e; r += 1) n.push(i);
        return n;
    }

    function $s(t) {
        (this.audios = []), (this.audioFactory = t), (this._volume = 1), (this._isMuted = !1);
    }

    function createSizedArray(t) {
        return Array.apply(null, {length: t});
    }

    function _typeof$6(t) {
        return (_typeof$6 =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
    }

    var subframeEnabled = !0,
        expressionsPlugin = null,
        expressionsInterfaces = null,
        idPrefix$1 = "",
        isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
        _shouldRoundValues = !1,
        bmPow = Math.pow,
        bmSqrt = Math.sqrt,
        bmFloor = Math.floor,
        bmMax = Math.max,
        bmMin = Math.min,
        BMMath = {};

    function ProjectInterface$1() {
        return 1;
    }

    !(function () {
        for (
            var t = [
                    "abs",
                    "acos",
                    "acosh",
                    "asin",
                    "asinh",
                    "atan",
                    "atanh",
                    "atan2",
                    "ceil",
                    "cbrt",
                    "expm1",
                    "clz32",
                    "cos",
                    "cosh",
                    "exp",
                    "floor",
                    "fround",
                    "hypot",
                    "imul",
                    "log",
                    "log1p",
                    "log2",
                    "log10",
                    "max",
                    "min",
                    "pow",
                    "random",
                    "round",
                    "sign",
                    "sin",
                    "sinh",
                    "sqrt",
                    "tan",
                    "tanh",
                    "trunc",
                    "E",
                    "LN10",
                    "LN2",
                    "LOG10E",
                    "LOG2E",
                    "PI",
                    "SQRT1_2",
                    "SQRT2",
                ],
                e = t.length,
                i = 0;
            i < e;
            i += 1
        )
            BMMath[t[i]] = Math[t[i]];
    })(),
        (BMMath.random = Math.random),
        (BMMath.abs = function (t) {
            if ("object" === _typeof$6(t) && t.length) {
                for (var e = createSizedArray(t.length), i = t.length, r = 0; r < i; r += 1) e[r] = Math.abs(t[r]);
                return e;
            }
            return Math.abs(t);
        });
    var defaultCurveSegments = 150,
        degToRads = Math.PI / 180,
        roundCorner = 0.5519;

    function roundValues(t) {
        _shouldRoundValues = !!t;
    }

    function bmRnd(t) {
        return _shouldRoundValues ? Math.round(t) : t;
    }

    function styleDiv(t) {
        (t.style.position = "absolute"),
            (t.style.top = 0),
            (t.style.left = 0),
            (t.style.display = "block"),
            (t.style.transformOrigin = "0 0"),
            (t.style.webkitTransformOrigin = "0 0"),
            (t.style.backfaceVisibility = "visible"),
            (t.style.webkitBackfaceVisibility = "visible"),
            (t.style.transformStyle = "preserve-3d"),
            (t.style.webkitTransformStyle = "preserve-3d"),
            (t.style.mozTransformStyle = "preserve-3d");
    }

    function BMEnterFrameEvent(t, e, i, r) {
        (this.type = t), (this.currentTime = e), (this.totalTime = i), (this.direction = r < 0 ? -1 : 1);
    }

    function BMCompleteEvent(t, e) {
        (this.type = t), (this.direction = e < 0 ? -1 : 1);
    }

    function BMCompleteLoopEvent(t, e, i, r) {
        (this.type = t), (this.currentLoop = i), (this.totalLoops = e), (this.direction = r < 0 ? -1 : 1);
    }

    function BMSegmentStartEvent(t, e, i) {
        (this.type = t), (this.firstFrame = e), (this.totalFrames = i);
    }

    function BMDestroyEvent(t, e) {
        (this.type = t), (this.target = e);
    }

    function BMRenderFrameErrorEvent(t, e) {
        (this.type = "renderFrameError"), (this.nativeError = t), (this.currentTime = e);
    }

    function BMConfigErrorEvent(t) {
        (this.type = "configError"), (this.nativeError = t);
    }

    function BMAnimationConfigErrorEvent(t, e) {
        (this.type = t), (this.nativeError = e);
    }

    var createElementID =
            ((_count = 0),
                function () {
                    return idPrefix$1 + "__lottie_element_" + (_count += 1);
                }),
        _count;

    function HSVtoRGB(t, e, i) {
        var r,
            n,
            s,
            a,
            o = i * (1 - e),
            l = i * (1 - (t = 6 * t - (a = Math.floor(6 * t))) * e),
            h = i * (1 - (1 - t) * e);
        switch (a % 6) {
            case 0:
                (r = i), (n = h), (s = o);
                break;
            case 1:
                (r = l), (n = i), (s = o);
                break;
            case 2:
                (r = o), (n = i), (s = h);
                break;
            case 3:
                (r = o), (n = l), (s = i);
                break;
            case 4:
                (r = h), (n = o), (s = i);
                break;
            case 5:
                (r = i), (n = o), (s = l);
        }
        return [r, n, s];
    }

    function RGBtoHSV(t, e, i) {
        var r,
            n = Math.max(t, e, i),
            s = Math.min(t, e, i),
            a = n - s,
            o = 0 === n ? 0 : a / n,
            l = n / 255;
        switch (n) {
            case s:
                r = 0;
                break;
            case t:
                (r = e - i + a * (e < i ? 6 : 0)), (r /= 6 * a);
                break;
            case e:
                (r = i - t + 2 * a), (r /= 6 * a);
                break;
            case i:
                (r = t - e + 4 * a), (r /= 6 * a);
        }
        return [r, o, l];
    }

    function addSaturationToRGB(t, e) {
        t = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return (t[1] += e), 1 < t[1] ? (t[1] = 1) : t[1] <= 0 && (t[1] = 0), HSVtoRGB(t[0], t[1], t[2]);
    }

    function addBrightnessToRGB(t, e) {
        t = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return (t[2] += e), 1 < t[2] ? (t[2] = 1) : t[2] < 0 && (t[2] = 0), HSVtoRGB(t[0], t[1], t[2]);
    }

    function addHueToRGB(t, e) {
        t = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
        return (t[0] += e / 360), 1 < t[0] ? --t[0] : t[0] < 0 && (t[0] += 1), HSVtoRGB(t[0], t[1], t[2]);
    }

    var rgbToHex = (function () {
            for (var t, r = [], e = 0; e < 256; e += 1) (t = e.toString(16)), (r[e] = 1 === t.length ? "0" + t : t);
            return function (t, e, i) {
                return e < 0 && (e = 0), i < 0 && (i = 0), "#" + r[(t = t < 0 ? 0 : t)] + r[e] + r[i];
            };
        })(),
        setSubframeEnabled = function (t) {
            subframeEnabled = !!t;
        },
        getSubframeEnabled = function () {
            return subframeEnabled;
        },
        setExpressionsPlugin = function (t) {
            expressionsPlugin = t;
        },
        getExpressionsPlugin = function () {
            return expressionsPlugin;
        },
        setExpressionInterfaces = function (t) {
            expressionsInterfaces = t;
        },
        getExpressionInterfaces = function () {
            return expressionsInterfaces;
        },
        setDefaultCurveSegments = function (t) {
            defaultCurveSegments = t;
        },
        getDefaultCurveSegments = function () {
            return defaultCurveSegments;
        },
        setIdPrefix = function (t) {
            idPrefix$1 = t;
        },
        getIdPrefix = function () {
            return idPrefix$1;
        };

    function createNS(t) {
        return document.createElementNS(svgNS, t);
    }

    function _typeof$5(t) {
        return (_typeof$5 =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
    }

    var dataManager =
            ((Vu = 1),
                (Wu = []),
                (Xu = {
                    onmessage: function () {
                    },
                    postMessage: function (t) {
                        Tu({data: t});
                    },
                }),
                (Yu = {
                    postMessage: function (t) {
                        Xu.onmessage({data: t});
                    },
                }),
                {
                    loadAnimation: function (t, e, i) {
                        Zu();
                        i = $u(e, i);
                        Uu.postMessage({
                            type: "loadAnimation",
                            path: t,
                            fullPath: window.location.origin + window.location.pathname,
                            id: i
                        });
                    },
                    loadData: function (t, e, i) {
                        Zu();
                        i = $u(e, i);
                        Uu.postMessage({
                            type: "loadData",
                            path: t,
                            fullPath: window.location.origin + window.location.pathname,
                            id: i
                        });
                    },
                    completeAnimation: function (t, e, i) {
                        Zu();
                        i = $u(e, i);
                        Uu.postMessage({type: "complete", animation: t, id: i});
                    },
                }),
        ImagePreloader =
            ((Hx = (function () {
                var t = createTag("canvas");
                (t.width = 1), (t.height = 1);
                var e = t.getContext("2d");
                return (e.fillStyle = "rgba(0,0,0,0)"), e.fillRect(0, 0, 1, 1), t;
            })()),
                (Nx.prototype = {
                    loadAssets: function (t, e) {
                        this.imagesLoadedCb = e;
                        for (var i = t.length, r = 0; r < i; r += 1)
                            t[r].layers ||
                            (t[r].t && "seq" !== t[r].t ? 3 === t[r].t && ((this.totalFootages += 1), this.images.push(this.createFootageData(t[r]))) : ((this.totalImages += 1), this.images.push(this._createImageData(t[r]))));
                    },
                    setAssetsPath: function (t) {
                        this.assetsPath = t || "";
                    },
                    setPath: function (t) {
                        this.path = t || "";
                    },
                    loadedImages: function () {
                        return this.totalImages === this.loadedAssets;
                    },
                    loadedFootages: function () {
                        return this.totalFootages === this.loadedFootagesCount;
                    },
                    destroy: function () {
                        (this.imagesLoadedCb = null), (this.images.length = 0);
                    },
                    getAsset: function (t) {
                        for (var e = 0, i = this.images.length; e < i;) {
                            if (this.images[e].assetData === t) return this.images[e].img;
                            e += 1;
                        }
                        return null;
                    },
                    createImgData: function (t) {
                        var e = Kx(t, this.assetsPath, this.path),
                            i = createTag("img");
                        (i.crossOrigin = "anonymous"),
                            i.addEventListener("load", this._imageLoaded, !1),
                            i.addEventListener(
                                "error",
                                function () {
                                    (r.img = Hx), this._imageLoaded();
                                }.bind(this),
                                !1
                            ),
                            (i.src = e);
                        var r = {img: i, assetData: t};
                        return r;
                    },
                    createImageData: function (t) {
                        var e = Kx(t, this.assetsPath, this.path),
                            i = createNS("image");
                        isSafari ? this.testImageLoaded(i) : i.addEventListener("load", this._imageLoaded, !1),
                            i.addEventListener(
                                "error",
                                function () {
                                    (r.img = Hx), this._imageLoaded();
                                }.bind(this),
                                !1
                            ),
                            i.setAttributeNS("http://www.w3.org/1999/xlink", "href", e),
                            this._elementHelper.append ? this._elementHelper.append(i) : this._elementHelper.appendChild(i);
                        var r = {img: i, assetData: t};
                        return r;
                    },
                    imageLoaded: Ix,
                    footageLoaded: Jx,
                    setCacheType: function (t, e) {
                        "svg" === t ? ((this._elementHelper = e), (this._createImageData = this.createImageData.bind(this))) : (this._createImageData = this.createImgData.bind(this));
                    },
                }),
                Nx),
        Hx,
        Tu,
        Uu,
        Vu,
        Wu,
        Xu,
        Yu;

    function Ix() {
        (this.loadedAssets += 1), this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
    }

    function Jx() {
        (this.loadedFootagesCount += 1), this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
    }

    function Kx(t, e, i) {
        var r = "";
        return t.e ? (r = t.p) : e ? (r = e + (e = -1 !== (e = t.p).indexOf("images/") ? e.split("/")[1] : e)) : ((r = i), (r += t.u || ""), (r += t.p)), r;
    }

    function Nx() {
        (this._imageLoaded = Ix.bind(this)),
            (this._footageLoaded = Jx.bind(this)),
            (this.testImageLoaded = function (t) {
                var e = 0,
                    i = setInterval(
                        function () {
                            (t.getBBox().width || 500 < e) && (this._imageLoaded(), clearInterval(i)), (e += 1);
                        }.bind(this),
                        50
                    );
            }.bind(this)),
            (this.createFootageData = function (t) {
                var e = {assetData: t},
                    t = Kx(t, this.assetsPath, this.path);
                return (
                    dataManager.loadData(
                        t,
                        function (t) {
                            (e.img = t), this._footageLoaded();
                        }.bind(this),
                        function () {
                            (e.img = {}), this._footageLoaded();
                        }.bind(this)
                    ),
                        e
                );
            }.bind(this)),
            (this.assetsPath = ""),
            (this.path = ""),
            (this.totalImages = 0),
            (this.totalFootages = 0),
            (this.loadedAssets = 0),
            (this.loadedFootagesCount = 0),
            (this.imagesLoadedCb = null),
            (this.images = []);
    }

    function Zu() {
        Uu ||
        ((Uu = (function (t) {
            if (window.Worker && window.Blob && getWebWorker()) {
                var e = new Blob(["var _workerSelf = self; self.onmessage = ", t.toString()], {type: "text/javascript"}),
                    e = URL.createObjectURL(e);
                return new Worker(e);
            }
            return (Tu = t), Xu;
        })(function (e) {
            var n, r, s, a, o, i, l, h, p, c, t;

            function f(t) {
                var e = t.getResponseHeader("content-type");
                return (e && "json" === t.responseType && -1 !== e.indexOf("json")) || (t.response && "object" === _typeof$5(t.response))
                    ? t.response
                    : t.response && "string" == typeof t.response
                        ? JSON.parse(t.response)
                        : t.responseText
                            ? JSON.parse(t.responseText)
                            : null;
            }

            function d(t, e) {
                for (var i, r, n, s = t.length, a = 0; a < s; a += 1)
                    if ("ks" in (n = t[a]) && !n.completed) {
                        if (((n.completed = !0), n.hasMask))
                            for (var o = n.masksProperties, l = o.length, h = 0; h < l; h += 1)
                                if (o[h].pt.k.i) y(o[h].pt.k);
                                else for (r = o[h].pt.k.length, i = 0; i < r; i += 1) o[h].pt.k[i].s && y(o[h].pt.k[i].s[0]), o[h].pt.k[i].e && y(o[h].pt.k[i].e[0]);
                        0 === n.ty ? ((n.layers = u(n.refId, e)), d(n.layers, e)) : 4 === n.ty ? m(n.shapes) : 5 === n.ty && 0 === (n = n).t.a.length && n.t.p;
                    }
            }

            function u(t, e) {
                e = (function (t, e) {
                    for (var i = 0, r = e.length; i < r;) {
                        if (e[i].id === t) return e[i];
                        i += 1;
                    }
                    return null;
                })(t, e);
                return e ? (e.layers.__used ? JSON.parse(JSON.stringify(e.layers)) : ((e.layers.__used = !0), e.layers)) : null;
            }

            function m(t) {
                for (var e, i, r = t.length - 1; 0 <= r; --r)
                    if ("sh" === t[r].ty)
                        if (t[r].ks.k.i) y(t[r].ks.k);
                        else for (i = t[r].ks.k.length, e = 0; e < i; e += 1) t[r].ks.k[e].s && y(t[r].ks.k[e].s[0]), t[r].ks.k[e].e && y(t[r].ks.k[e].e[0]);
                    else "gr" === t[r].ty && m(t[r].it);
            }

            function y(t) {
                for (var e = t.i.length, i = 0; i < e; i += 1) (t.i[i][0] += t.v[i][0]), (t.i[i][1] += t.v[i][1]), (t.o[i][0] += t.v[i][0]), (t.o[i][1] += t.v[i][1]);
            }

            function g(t, e) {
                e = e ? e.split(".") : [100, 100, 100];
                return t[0] > e[0] || (!(e[0] > t[0]) && (t[1] > e[1] || (!(e[1] > t[1]) && (t[2] > e[2] || (e[2], t[2], 0)))));
            }

            function v(t) {
                for (var e, i, r, n = t.length, s = 0; s < n; s += 1) {
                    if ((e = t[s]).hasMask)
                        for (var a = e.masksProperties, o = a.length, l = 0; l < o; l += 1)
                            if (a[l].pt.k.i) a[l].pt.k.c = a[l].cl;
                            else for (r = a[l].pt.k.length, i = 0; i < r; i += 1) a[l].pt.k[i].s && (a[l].pt.k[i].s[0].c = a[l].cl), a[l].pt.k[i].e && (a[l].pt.k[i].e[0].c = a[l].cl);
                    4 === e.ty &&
                    (function t(e) {
                        for (var i, r, n = e.length - 1; 0 <= n; --n)
                            if ("sh" === e[n].ty)
                                if (e[n].ks.k.i) e[n].ks.k.c = e[n].closed;
                                else for (r = e[n].ks.k.length, i = 0; i < r; i += 1) e[n].ks.k[i].s && (e[n].ks.k[i].s[0].c = e[n].closed), e[n].ks.k[i].e && (e[n].ks.k[i].e[0].c = e[n].closed);
                            else "gr" === e[n].ty && t(e[n].it);
                    })(e.shapes);
                }
            }

            function b(t) {
                for (var e = t.length, i = 0; i < e; i += 1)
                    4 === t[i].ty &&
                    (function t(e) {
                        for (var i, r, n = e.length, s = 0; s < n; s += 1)
                            if ("gr" === e[s].ty) t(e[s].it);
                            else if ("fl" === e[s].ty || "st" === e[s].ty)
                                if (e[s].c.k && e[s].c.k[0].i)
                                    for (r = e[s].c.k.length, i = 0; i < r; i += 1)
                                        e[s].c.k[i].s && ((e[s].c.k[i].s[0] /= 255), (e[s].c.k[i].s[1] /= 255), (e[s].c.k[i].s[2] /= 255), (e[s].c.k[i].s[3] /= 255)),
                                        e[s].c.k[i].e && ((e[s].c.k[i].e[0] /= 255), (e[s].c.k[i].e[1] /= 255), (e[s].c.k[i].e[2] /= 255), (e[s].c.k[i].e[3] /= 255));
                                else (e[s].c.k[0] /= 255), (e[s].c.k[1] /= 255), (e[s].c.k[2] /= 255), (e[s].c.k[3] /= 255);
                    })(t[i].shapes);
            }

            function x(t) {
                for (var e, i = t.length, r = 0; r < i; r += 1)
                    5 === t[r].ty && ((e = void 0), "number" == typeof (e = t[r].t.p).a && (e.a = {
                        a: 0,
                        k: e.a
                    }), "number" == typeof e.p && (e.p = {a: 0, k: e.p}), "number" == typeof e.r && (e.r = {
                        a: 0,
                        k: e.r
                    }));
            }

            function E(t) {
                for (var e, i, r = t.length, n = 0; n < r; n += 1) 5 === t[n].ty && ((i = (e = t[n]).t.d), (e.t.d = {
                    k: [{
                        s: i,
                        t: 0
                    }]
                }));
            }

            Yu.dataManager ||
            (Yu.dataManager =
                ((o = [4, 4, 14]),
                    (i = function (t) {
                        if (g(o, t.v) && (E(t.layers), t.assets)) for (var e = t.assets.length, i = 0; i < e; i += 1) t.assets[i].layers && E(t.assets[i].layers);
                    }),
                    (n = [4, 7, 99]),
                    (l = function (t) {
                        if (t.chars && !g(n, t.v))
                            for (var e = t.chars.length, i = 0; i < e; i += 1) {
                                var r = t.chars[i];
                                r.data &&
                                r.data.shapes &&
                                (m(r.data.shapes),
                                    (r.data.ip = 0),
                                    (r.data.op = 99999),
                                    (r.data.st = 0),
                                    (r.data.sr = 1),
                                    (r.data.ks = {
                                        p: {k: [0, 0], a: 0},
                                        s: {k: [100, 100], a: 0},
                                        a: {k: [0, 0], a: 0},
                                        r: {k: 0, a: 0},
                                        o: {k: 100, a: 0}
                                    }),
                                t.chars[i].t ||
                                (r.data.shapes.push({ty: "no"}),
                                    r.data.shapes[0].it.push({
                                        p: {k: [0, 0], a: 0},
                                        s: {k: [100, 100], a: 0},
                                        a: {k: [0, 0], a: 0},
                                        r: {k: 0, a: 0},
                                        o: {k: 100, a: 0},
                                        sk: {k: 0, a: 0},
                                        sa: {k: 0, a: 0},
                                        ty: "tr",
                                    })));
                            }
                    }),
                    (a = [5, 7, 15]),
                    (h = function (t) {
                        if (g(a, t.v) && (x(t.layers), t.assets)) for (var e = t.assets.length, i = 0; i < e; i += 1) t.assets[i].layers && x(t.assets[i].layers);
                    }),
                    (s = [4, 1, 9]),
                    (r = [4, 4, 18]),
                    (c = function (t) {
                        if (g(r, t.v) && (v(t.layers), t.assets)) for (var e = t.assets.length, i = 0; i < e; i += 1) t.assets[i].layers && v(t.assets[i].layers);
                    }),
                    ((t = {
                        completeData: function (t) {
                            t.__complete ||
                            (p(t),
                                i(t),
                                l(t),
                                h(t),
                                c(t),
                                d(t.layers, t.assets),
                                (function (t, e) {
                                    if (t) for (var i = 0, r = t.length, i = 0; i < r; i += 1) 1 === t[i].t && ((t[i].data.layers = u(t[i].data.refId, e)), d(t[i].data.layers, e));
                                })(t.chars, t.assets),
                                (t.__complete = !0));
                        },
                    }).checkColors = p = function (t) {
                        if (g(s, t.v) && (b(t.layers), t.assets)) for (var e = t.assets.length, i = 0; i < e; i += 1) t.assets[i].layers && b(t.assets[i].layers);
                    }),
                    (t.checkChars = l),
                    (t.checkPathProperties = h),
                    (t.checkShapes = c),
                    (t.completeLayers = d),
                    t)),
            Yu.assetLoader ||
            (Yu.assetLoader = {
                load: function (e, i, t, r) {
                    var n,
                        s = new XMLHttpRequest();
                    try {
                        s.responseType = "json";
                    } catch (t) {
                    }
                    s.onreadystatechange = function () {
                        if (4 === s.readyState)
                            if (200 === s.status) (n = f(s)), t(n);
                            else
                                try {
                                    (n = f(s)), t(n);
                                } catch (t) {
                                    r && r(t);
                                }
                    };
                    try {
                        s.open(["G", "E", "T"].join(""), e, !0);
                    } catch (t) {
                        s.open(["G", "E", "T"].join(""), i + "/" + e, !0);
                    }
                    s.send();
                },
            }),
                "loadAnimation" === e.data.type
                    ? Yu.assetLoader.load(
                        e.data.path,
                        e.data.fullPath,
                        function (t) {
                            Yu.dataManager.completeData(t), Yu.postMessage({id: e.data.id, payload: t, status: "success"});
                        },
                        function () {
                            Yu.postMessage({id: e.data.id, status: "error"});
                        }
                    )
                    : "complete" === e.data.type
                        ? ((t = e.data.animation), Yu.dataManager.completeData(t), Yu.postMessage({
                            id: e.data.id,
                            payload: t,
                            status: "success"
                        }))
                        : "loadData" === e.data.type &&
                        Yu.assetLoader.load(
                            e.data.path,
                            e.data.fullPath,
                            function (t) {
                                Yu.postMessage({id: e.data.id, payload: t, status: "success"});
                            },
                            function () {
                                Yu.postMessage({id: e.data.id, status: "error"});
                            }
                        );
        })).onmessage = function (t) {
            var e = t.data,
                i = e.id,
                t = Wu[i];
            (Wu[i] = null), "success" === e.status ? t.onComplete(e.payload) : t.onError && t.onError();
        });
    }

    function $u(t, e) {
        var i = "processId_" + (Vu += 1);
        return (Wu[i] = {onComplete: t, onError: e}), i;
    }

    function BaseEvent() {
    }

    BaseEvent.prototype = {
        triggerEvent: function (t, e) {
            if (this._cbs[t]) for (var i = this._cbs[t], r = 0; r < i.length; r += 1) i[r](e);
        },
        addEventListener: function (t, e) {
            return (
                this._cbs[t] || (this._cbs[t] = []),
                    this._cbs[t].push(e),
                    function () {
                        this.removeEventListener(t, e);
                    }.bind(this)
            );
        },
        removeEventListener: function (t, e) {
            if (e) {
                if (this._cbs[t]) {
                    for (var i = 0, r = this._cbs[t].length; i < r;) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), --i, --r), (i += 1);
                    this._cbs[t].length || (this._cbs[t] = null);
                }
            } else this._cbs[t] = null;
        },
    };
    var markerParser = function (e) {
            for (var t = [], i = 0; i < e.length; i += 1) {
                var r = e[i],
                    n = {time: r.tm, duration: r.dr};
                try {
                    n.payload = JSON.parse(e[i].cm);
                } catch (t) {
                    try {
                        n.payload = (function (t) {
                            for (var e, i = t.split("\r\n"), r = {}, n = 0, s = 0; s < i.length; s += 1) 2 === (e = i[s].split(":")).length && ((r[e[0]] = e[1].trim()), (n += 1));
                            if (0 === n) throw new Error();
                            return r;
                        })(e[i].cm);
                    } catch (t) {
                        n.payload = {name: e[i].cm};
                    }
                }
                t.push(n);
            }
            return t;
        },
        ProjectInterface = function () {
            function t(t) {
                for (var e = 0, i = this.compositions.length; e < i;) {
                    if (this.compositions[e].data && this.compositions[e].data.nm === t)
                        return this.compositions[e].prepareFrame && this.compositions[e].data.xt && this.compositions[e].prepareFrame(this.currentFrame), this.compositions[e].compInterface;
                    e += 1;
                }
                return null;
            }

            return (t.compositions = []), (t.currentFrame = 0), (t.registerComposition = Qy), t;
        },
        renderers = {},
        registerRenderer = function (t, e) {
            renderers[t] = e;
        };

    function Qy(t) {
        this.compositions.push(t);
    }

    function getRenderer(t) {
        return renderers[t];
    }

    function getRegisteredRenderer() {
        if (renderers.canvas) return "canvas";
        for (var t in renderers) if (renderers[t]) return t;
        return "";
    }

    function _typeof$4(t) {
        return (_typeof$4 =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
    }

    var AnimationItem = function () {
        (this._cbs = []),
            (this.name = ""),
            (this.path = ""),
            (this.isLoaded = !1),
            (this.currentFrame = 0),
            (this.currentRawFrame = 0),
            (this.firstFrame = 0),
            (this.totalFrames = 0),
            (this.frameRate = 0),
            (this.frameMult = 0),
            (this.playSpeed = 1),
            (this.playDirection = 1),
            (this.playCount = 0),
            (this.animationData = {}),
            (this.assets = []),
            (this.isPaused = !0),
            (this.autoplay = !1),
            (this.loop = !0),
            (this.renderer = null),
            (this.animationID = createElementID()),
            (this.assetsPath = ""),
            (this.timeCompleted = 0),
            (this.segmentPos = 0),
            (this.isSubframeEnabled = getSubframeEnabled()),
            (this.segments = []),
            (this._idle = !0),
            (this._completedLoop = !1),
            (this.projectInterface = ProjectInterface()),
            (this.imagePreloader = new ImagePreloader()),
            (this.audioController = audioControllerFactory()),
            (this.markers = []),
            (this.configAnimation = this.configAnimation.bind(this)),
            (this.onSetupError = this.onSetupError.bind(this)),
            (this.onSegmentComplete = this.onSegmentComplete.bind(this)),
            (this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0)),
            (this.expressionsPlugin = getExpressionsPlugin());
    };
    extendPrototype([BaseEvent], AnimationItem),
        (AnimationItem.prototype.setParams = function (t) {
            (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
            var e = "svg";
            t.animType ? (e = t.animType) : t.renderer && (e = t.renderer);
            var i = getRenderer(e);
            (this.renderer = new i(this, t.rendererSettings)),
                this.imagePreloader.setCacheType(e, this.renderer.globalData.defs),
                this.renderer.setProjectInterface(this.projectInterface),
                (this.animType = e),
                "" === t.loop || null === t.loop || void 0 === t.loop || !0 === t.loop ? (this.loop = !0) : !1 === t.loop ? (this.loop = !1) : (this.loop = parseInt(t.loop, 10)),
                (this.autoplay = !("autoplay" in t) || t.autoplay),
                (this.name = t.name || ""),
                (this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments),
                (this.assetsPath = t.assetsPath),
                (this.initialSegment = t.initialSegment),
            t.audioFactory && this.audioController.setAudioFactory(t.audioFactory),
                t.animationData
                    ? this.setupAnimation(t.animationData)
                    : t.path &&
                    (-1 !== t.path.lastIndexOf("\\") ? (this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1)) : (this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1)),
                        (this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1)),
                        (this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json"))),
                        dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError));
        }),
        (AnimationItem.prototype.onSetupError = function () {
            this.trigger("data_failed");
        }),
        (AnimationItem.prototype.setupAnimation = function (t) {
            dataManager.completeAnimation(t, this.configAnimation);
        }),
        (AnimationItem.prototype.setData = function (t, e) {
            var i = {wrapper: t, animationData: (e = e && "object" !== _typeof$4(e) ? JSON.parse(e) : e)},
                e = t.attributes;
            (i.path = e.getNamedItem("data-animation-path")
                ? e.getNamedItem("data-animation-path").value
                : e.getNamedItem("data-bm-path")
                    ? e.getNamedItem("data-bm-path").value
                    : e.getNamedItem("bm-path")
                        ? e.getNamedItem("bm-path").value
                        : ""),
                (i.animType = e.getNamedItem("data-anim-type")
                    ? e.getNamedItem("data-anim-type").value
                    : e.getNamedItem("data-bm-type")
                        ? e.getNamedItem("data-bm-type").value
                        : e.getNamedItem("bm-type")
                            ? e.getNamedItem("bm-type").value
                            : e.getNamedItem("data-bm-renderer")
                                ? e.getNamedItem("data-bm-renderer").value
                                : e.getNamedItem("bm-renderer")
                                    ? e.getNamedItem("bm-renderer").value
                                    : getRegisteredRenderer() || "canvas");
            t = e.getNamedItem("data-anim-loop") ? e.getNamedItem("data-anim-loop").value : e.getNamedItem("data-bm-loop") ? e.getNamedItem("data-bm-loop").value : e.getNamedItem("bm-loop") ? e.getNamedItem("bm-loop").value : "";
            "false" === t ? (i.loop = !1) : "true" === t ? (i.loop = !0) : "" !== t && (i.loop = parseInt(t, 10));
            t = e.getNamedItem("data-anim-autoplay")
                ? e.getNamedItem("data-anim-autoplay").value
                : e.getNamedItem("data-bm-autoplay")
                    ? e.getNamedItem("data-bm-autoplay").value
                    : !e.getNamedItem("bm-autoplay") || e.getNamedItem("bm-autoplay").value;
            (i.autoplay = "false" !== t),
                (i.name = e.getNamedItem("data-name") ? e.getNamedItem("data-name").value : e.getNamedItem("data-bm-name") ? e.getNamedItem("data-bm-name").value : e.getNamedItem("bm-name") ? e.getNamedItem("bm-name").value : ""),
            "false" ===
            (e.getNamedItem("data-anim-prerender")
                ? e.getNamedItem("data-anim-prerender").value
                : e.getNamedItem("data-bm-prerender")
                    ? e.getNamedItem("data-bm-prerender").value
                    : e.getNamedItem("bm-prerender")
                        ? e.getNamedItem("bm-prerender").value
                        : "") && (i.prerender = !1),
                i.path ? this.setParams(i) : this.trigger("destroy");
        }),
        (AnimationItem.prototype.includeLayers = function (t) {
            t.op > this.animationData.op && ((this.animationData.op = t.op), (this.totalFrames = Math.floor(t.op - this.animationData.ip)));
            for (var e, i = this.animationData.layers, r = i.length, n = t.layers, s = n.length, a = 0; a < s; a += 1)
                for (e = 0; e < r;) {
                    if (i[e].id === n[a].id) {
                        i[e] = n[a];
                        break;
                    }
                    e += 1;
                }
            if (((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets))
                for (r = t.assets.length, e = 0; e < r; e += 1) this.animationData.assets.push(t.assets[e]);
            (this.animationData.__complete = !1), dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
        }),
        (AnimationItem.prototype.onSegmentComplete = function (t) {
            this.animationData = t;
            t = getExpressionsPlugin();
            t && t.initExpressions(this), this.loadNextSegment();
        }),
        (AnimationItem.prototype.loadNextSegment = function () {
            var t = this.animationData.segments;
            if (!t || 0 === t.length || !this.autoloadSegments) return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
            t = t.shift();
            this.timeCompleted = t.time * this.frameRate;
            t = this.path + this.fileName + "_" + this.segmentPos + ".json";
            (this.segmentPos += 1),
                dataManager.loadData(
                    t,
                    this.includeLayers.bind(this),
                    function () {
                        this.trigger("data_failed");
                    }.bind(this)
                );
        }),
        (AnimationItem.prototype.loadSegments = function () {
            this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
        }),
        (AnimationItem.prototype.imagesLoaded = function () {
            this.trigger("loaded_images"), this.checkLoaded();
        }),
        (AnimationItem.prototype.preloadImages = function () {
            this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
        }),
        (AnimationItem.prototype.configAnimation = function (t) {
            if (this.renderer)
                try {
                    (this.animationData = t),
                        this.initialSegment
                            ? ((this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0])), (this.firstFrame = Math.round(this.initialSegment[0])))
                            : ((this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip)), (this.firstFrame = Math.round(this.animationData.ip))),
                        this.renderer.configAnimation(t),
                    t.assets || (t.assets = []),
                        (this.assets = this.animationData.assets),
                        (this.frameRate = this.animationData.fr),
                        (this.frameMult = this.animationData.fr / 1e3),
                        this.renderer.searchExtraCompositions(t.assets),
                        (this.markers = markerParser(t.markers || [])),
                        this.trigger("config_ready"),
                        this.preloadImages(),
                        this.loadSegments(),
                        this.updaFrameModifier(),
                        this.waitForFontsLoaded(),
                    this.isPaused && this.audioController.pause();
                } catch (t) {
                    this.triggerConfigError(t);
                }
        }),
        (AnimationItem.prototype.waitForFontsLoaded = function () {
            this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
        }),
        (AnimationItem.prototype.checkLoaded = function () {
            var t;
            !this.isLoaded &&
            this.renderer.globalData.fontManager.isLoaded &&
            (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) &&
            this.imagePreloader.loadedFootages() &&
            ((this.isLoaded = !0),
            (t = getExpressionsPlugin()) && t.initExpressions(this),
                this.renderer.initItems(),
                setTimeout(
                    function () {
                        this.trigger("DOMLoaded");
                    }.bind(this),
                    0
                ),
                this.gotoFrame(),
            this.autoplay && this.play());
        }),
        (AnimationItem.prototype.resize = function (t, e) {
            (t = "number" == typeof t ? t : void 0), (e = "number" == typeof e ? e : void 0);
            this.renderer.updateContainerSize(t, e);
        }),
        (AnimationItem.prototype.setSubframe = function (t) {
            this.isSubframeEnabled = !!t;
        }),
        (AnimationItem.prototype.gotoFrame = function () {
            (this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame),
            this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted),
                this.trigger("enterFrame"),
                this.renderFrame(),
                this.trigger("drawnFrame");
        }),
        (AnimationItem.prototype.renderFrame = function () {
            if (!1 !== this.isLoaded && this.renderer)
                try {
                    this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
                } catch (t) {
                    this.triggerRenderFrameError(t);
                }
        }),
        (AnimationItem.prototype.play = function (t) {
            (t && this.name !== t) || (!0 === this.isPaused && ((this.isPaused = !1), this.trigger("_play"), this.audioController.resume(), this._idle && ((this._idle = !1), this.trigger("_active"))));
        }),
        (AnimationItem.prototype.pause = function (t) {
            (t && this.name !== t) || (!1 === this.isPaused && ((this.isPaused = !0), this.trigger("_pause"), (this._idle = !0), this.trigger("_idle"), this.audioController.pause()));
        }),
        (AnimationItem.prototype.togglePause = function (t) {
            (t && this.name !== t) || (!0 === this.isPaused ? this.play() : this.pause());
        }),
        (AnimationItem.prototype.stop = function (t) {
            (t && this.name !== t) || (this.pause(), (this.playCount = 0), (this._completedLoop = !1), this.setCurrentRawFrameValue(0));
        }),
        (AnimationItem.prototype.getMarkerData = function (t) {
            for (var e, i = 0; i < this.markers.length; i += 1) if ((e = this.markers[i]).payload && e.payload.name === t) return e;
            return null;
        }),
        (AnimationItem.prototype.goToAndStop = function (t, e, i) {
            (i && this.name !== i) ||
            ((i = Number(t)), isNaN(i) ? (i = this.getMarkerData(t)) && this.goToAndStop(i.time, !0) : e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier), this.pause());
        }),
        (AnimationItem.prototype.goToAndPlay = function (t, e, i) {
            var r;
            (i && this.name !== i) ||
            ((r = Number(t)), isNaN(r) ? (t = this.getMarkerData(t)) && (t.duration ? this.playSegments([t.time, t.time + t.duration], !0) : this.goToAndStop(t.time, !0)) : this.goToAndStop(r, e, i), this.play());
        }),
        (AnimationItem.prototype.advanceTime = function (t) {
            var e;
            !0 !== this.isPaused &&
            !1 !== this.isLoaded &&
            ((e = !1),
                (t = this.currentRawFrame + t * this.frameModifier) >= this.totalFrames - 1 && 0 < this.frameModifier
                    ? this.loop && this.playCount !== this.loop
                        ? t >= this.totalFrames
                            ? ((this.playCount += 1), this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), (this._completedLoop = !0), this.trigger("loopComplete")))
                            : this.setCurrentRawFrameValue(t)
                        : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || ((e = !0), (t = this.totalFrames - 1))
                    : t < 0
                        ? this.checkSegments(t % this.totalFrames) ||
                        (!this.loop || (this.playCount-- <= 0 && !0 !== this.loop)
                            ? ((e = !0), (t = 0))
                            : (this.setCurrentRawFrameValue(this.totalFrames + (t % this.totalFrames)), this._completedLoop ? this.trigger("loopComplete") : (this._completedLoop = !0)))
                        : this.setCurrentRawFrameValue(t),
            e && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete")));
        }),
        (AnimationItem.prototype.adjustSegment = function (t, e) {
            (this.playCount = 0),
                t[1] < t[0]
                    ? (0 < this.frameModifier && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)),
                        (this.totalFrames = t[0] - t[1]),
                        (this.timeCompleted = this.totalFrames),
                        (this.firstFrame = t[1]),
                        this.setCurrentRawFrameValue(this.totalFrames - 0.001 - e))
                    : t[1] > t[0] &&
                    (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)),
                        (this.totalFrames = t[1] - t[0]),
                        (this.timeCompleted = this.totalFrames),
                        (this.firstFrame = t[0]),
                        this.setCurrentRawFrameValue(0.001 + e)),
                this.trigger("segmentStart");
        }),
        (AnimationItem.prototype.setSegment = function (t, e) {
            var i = -1;
            this.isPaused && (this.currentRawFrame + this.firstFrame < t ? (i = t) : this.currentRawFrame + this.firstFrame > e && (i = e - t)),
                (this.firstFrame = t),
                (this.totalFrames = e - t),
                (this.timeCompleted = this.totalFrames),
            -1 !== i && this.goToAndStop(i, !0);
        }),
        (AnimationItem.prototype.playSegments = function (t, e) {
            if ((e && (this.segments.length = 0), "object" === _typeof$4(t[0]))) for (var i = t.length, r = 0; r < i; r += 1) this.segments.push(t[r]);
            else this.segments.push(t);
            this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
        }),
        (AnimationItem.prototype.resetSegments = function (t) {
            (this.segments.length = 0), this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
        }),
        (AnimationItem.prototype.checkSegments = function (t) {
            return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0);
        }),
        (AnimationItem.prototype.destroy = function (t) {
            (t && this.name !== t) ||
            !this.renderer ||
            (this.renderer.destroy(),
                this.imagePreloader.destroy(),
                this.trigger("destroy"),
                (this._cbs = null),
                (this.onEnterFrame = null),
                (this.onLoopComplete = null),
                (this.onComplete = null),
                (this.onSegmentStart = null),
                (this.onDestroy = null),
                (this.renderer = null),
                (this.expressionsPlugin = null),
                (this.imagePreloader = null),
                (this.projectInterface = null));
        }),
        (AnimationItem.prototype.setCurrentRawFrameValue = function (t) {
            (this.currentRawFrame = t), this.gotoFrame();
        }),
        (AnimationItem.prototype.setSpeed = function (t) {
            (this.playSpeed = t), this.updaFrameModifier();
        }),
        (AnimationItem.prototype.setDirection = function (t) {
            (this.playDirection = t < 0 ? -1 : 1), this.updaFrameModifier();
        }),
        (AnimationItem.prototype.setLoop = function (t) {
            this.loop = t;
        }),
        (AnimationItem.prototype.setVolume = function (t, e) {
            (e && this.name !== e) || this.audioController.setVolume(t);
        }),
        (AnimationItem.prototype.getVolume = function () {
            return this.audioController.getVolume();
        }),
        (AnimationItem.prototype.mute = function (t) {
            (t && this.name !== t) || this.audioController.mute();
        }),
        (AnimationItem.prototype.unmute = function (t) {
            (t && this.name !== t) || this.audioController.unmute();
        }),
        (AnimationItem.prototype.updaFrameModifier = function () {
            (this.frameModifier = this.frameMult * this.playSpeed * this.playDirection), this.audioController.setRate(this.playSpeed * this.playDirection);
        }),
        (AnimationItem.prototype.getPath = function () {
            return this.path;
        }),
        (AnimationItem.prototype.getAssetsPath = function (t) {
            var e,
                i = "";
            return t.e ? (i = t.p) : this.assetsPath ? (-1 !== (e = t.p).indexOf("images/") && (e = e.split("/")[1]), (i = this.assetsPath + e)) : ((i = this.path), (i += t.u || ""), (i += t.p)), i;
        }),
        (AnimationItem.prototype.getAssetData = function (t) {
            for (var e = 0, i = this.assets.length; e < i;) {
                if (t === this.assets[e].id) return this.assets[e];
                e += 1;
            }
            return null;
        }),
        (AnimationItem.prototype.hide = function () {
            this.renderer.hide();
        }),
        (AnimationItem.prototype.show = function () {
            this.renderer.show();
        }),
        (AnimationItem.prototype.getDuration = function (t) {
            return t ? this.totalFrames : this.totalFrames / this.frameRate;
        }),
        (AnimationItem.prototype.updateDocumentData = function (t, e, i) {
            try {
                this.renderer.getElementByPath(t).updateDocumentData(e, i);
            } catch (t) {
            }
        }),
        (AnimationItem.prototype.trigger = function (t) {
            if (this._cbs && this._cbs[t])
                switch (t) {
                    case "enterFrame":
                        this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
                        break;
                    case "drawnFrame":
                        (this.drawnFrameEvent.currentTime = this.currentFrame), (this.drawnFrameEvent.totalTime = this.totalFrames), (this.drawnFrameEvent.direction = this.frameModifier), this.triggerEvent(t, this.drawnFrameEvent);
                        break;
                    case "loopComplete":
                        this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
                        break;
                    case "complete":
                        this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
                        break;
                    case "segmentStart":
                        this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
                        break;
                    case "destroy":
                        this.triggerEvent(t, new BMDestroyEvent(t, this));
                        break;
                    default:
                        this.triggerEvent(t);
                }
            "enterFrame" === t && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)),
            "loopComplete" === t && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)),
            "complete" === t && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)),
            "segmentStart" === t && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)),
            "destroy" === t && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
        }),
        (AnimationItem.prototype.triggerRenderFrameError = function (t) {
            t = new BMRenderFrameErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", t), this.onError && this.onError.call(this, t);
        }),
        (AnimationItem.prototype.triggerConfigError = function (t) {
            t = new BMConfigErrorEvent(t, this.currentFrame);
            this.triggerEvent("error", t), this.onError && this.onError.call(this, t);
        });
    var animationManager =
            ((GA = {}),
                (HA = []),
                (IA = 0),
                (JA = 0),
                (KA = 0),
                (LA = !0),
                (MA = !1),
                (GA.registerAnimation = OA),
                (GA.loadAnimation = function (t) {
                    var e = new AnimationItem();
                    return RA(e, null), e.setParams(t), e;
                }),
                (GA.setSpeed = function (t, e) {
                    for (var i = 0; i < JA; i += 1) HA[i].animation.setSpeed(t, e);
                }),
                (GA.setDirection = function (t, e) {
                    for (var i = 0; i < JA; i += 1) HA[i].animation.setDirection(t, e);
                }),
                (GA.play = function (t) {
                    for (var e = 0; e < JA; e += 1) HA[e].animation.play(t);
                }),
                (GA.pause = function (t) {
                    for (var e = 0; e < JA; e += 1) HA[e].animation.pause(t);
                }),
                (GA.stop = function (t) {
                    for (var e = 0; e < JA; e += 1) HA[e].animation.stop(t);
                }),
                (GA.togglePause = function (t) {
                    for (var e = 0; e < JA; e += 1) HA[e].animation.togglePause(t);
                }),
                (GA.searchAnimations = function (t, e, i) {
                    for (var r, n = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), s = n.length, a = 0; a < s; a += 1)
                        i && n[a].setAttribute("data-bm-type", i), OA(n[a], t);
                    e &&
                    0 === s &&
                    ((i = i || "svg"),
                        ((r = document.getElementsByTagName("body")[0]).innerText = ""),
                        ((e = createTag("div")).style.width = "100%"),
                        (e.style.height = "100%"),
                        e.setAttribute("data-bm-type", i),
                        r.appendChild(e),
                        OA(e, t));
                }),
                (GA.resize = function () {
                    for (var t = 0; t < JA; t += 1) HA[t].animation.resize();
                }),
                (GA.goToAndStop = function (t, e, i) {
                    for (var r = 0; r < JA; r += 1) HA[r].animation.goToAndStop(t, e, i);
                }),
                (GA.destroy = function (t) {
                    for (var e = JA - 1; 0 <= e; --e) HA[e].animation.destroy(t);
                }),
                (GA.freeze = function () {
                    MA = !0;
                }),
                (GA.unfreeze = function () {
                    (MA = !1), UA();
                }),
                (GA.setVolume = function (t, e) {
                    for (var i = 0; i < JA; i += 1) HA[i].animation.setVolume(t, e);
                }),
                (GA.mute = function (t) {
                    for (var e = 0; e < JA; e += 1) HA[e].animation.mute(t);
                }),
                (GA.unmute = function (t) {
                    for (var e = 0; e < JA; e += 1) HA[e].animation.unmute(t);
                }),
                (GA.getRegisteredAnimations = function () {
                    for (var t = HA.length, e = [], i = 0; i < t; i += 1) e.push(HA[i].animation);
                    return e;
                }),
                GA),
        BezierFactory =
            ((VB = {
                getBezierEasing: function (t, e, i, r, n) {
                    n = n || ("bez_" + t + "_" + e + "_" + i + "_" + r).replace(/\./g, "p");
                    if (WB[n]) return WB[n];
                    r = new cC([t, e, i, r]);
                    return (WB[n] = r);
                },
            }),
                (WB = {}),
                (YB = "function" == typeof Float32Array),
                (cC.prototype = {
                    get: function (t) {
                        var e = this._p[0],
                            i = this._p[1],
                            r = this._p[2],
                            n = this._p[3];
                        return this._precomputed || this._precompute(), e === i && r === n ? t : 0 === t ? 0 : 1 === t ? 1 : aC(this._getTForX(t), i, n);
                    },
                    _precompute: function () {
                        var t = this._p[0],
                            e = this._p[1],
                            i = this._p[2],
                            r = this._p[3];
                        (this._precomputed = !0), (t === e && i === r) || this._calcSampleValues();
                    },
                    _calcSampleValues: function () {
                        for (var t = this._p[0], e = this._p[2], i = 0; i < 11; ++i) this._mSampleValues[i] = aC(0.1 * i, t, e);
                    },
                    _getTForX: function (t) {
                        for (var e = this._p[0], i = this._p[2], r = this._mSampleValues, n = 0, s = 1; 10 !== s && r[s] <= t; ++s) n += 0.1;
                        var a = n + ((t - r[--s]) / (r[s + 1] - r[s])) * 0.1,
                            o = bC(a, e, i);
                        return 0.001 <= o
                            ? (function (t, e, i, r) {
                                for (var n = 0; n < 4; ++n) {
                                    var s = bC(e, i, r);
                                    if (0 === s) return e;
                                    e -= (aC(e, i, r) - t) / s;
                                }
                                return e;
                            })(t, a, e, i)
                            : 0 === o
                                ? a
                                : (function (t, e, i, r, n) {
                                    for (var s, a, o = 0; 0 < (s = aC((a = e + (i - e) / 2), r, n) - t) ? (i = a) : (e = a), 1e-7 < Math.abs(s) && ++o < 10;) ;
                                    return a;
                                })(t, n, n + 0.1, e, i);
                    },
                }),
                VB),
        pooling = {
            double: function (t) {
                return t.concat(createSizedArray(t.length));
            },
        },
        poolFactory = function (t, e, i) {
            var r = 0,
                n = t,
                s = createSizedArray(n);
            return {
                newElement: function () {
                    return r ? s[--r] : e();
                },
                release: function (t) {
                    r === n && ((s = pooling.double(s)), (n *= 2)), i && i(t), (s[r] = t), (r += 1);
                },
            };
        },
        bezierLengthPool = poolFactory(8, function () {
            return {
                addedLength: 0,
                percents: createTypedArray("float32", getDefaultCurveSegments()),
                lengths: createTypedArray("float32", getDefaultCurveSegments())
            };
        }),
        segmentsLengthPool = poolFactory(
            8,
            function () {
                return {lengths: [], totalLength: 0};
            },
            function (t) {
                for (var e = t.lengths.length, i = 0; i < e; i += 1) bezierLengthPool.release(t.lengths[i]);
                t.lengths.length = 0;
            }
        ),
        VB,
        WB,
        YB,
        GA,
        HA,
        IA,
        JA,
        KA,
        LA,
        MA;

    function ZB(t, e) {
        return 1 - 3 * e + 3 * t;
    }

    function aC(t, e, i) {
        return ((ZB(e, i) * t + (3 * i - 6 * e)) * t + 3 * e) * t;
    }

    function bC(t, e, i) {
        return 3 * ZB(e, i) * t * t + 2 * (3 * i - 6 * e) * t + 3 * e;
    }

    function cC(t) {
        (this._p = t), (this._mSampleValues = new (YB ? Float32Array : Array)(11)), (this._precomputed = !1), (this.get = this.get.bind(this));
    }

    function NA(t) {
        for (var e = 0, i = t.target; e < JA;) HA[e].animation === i && (HA.splice(e, 1), --e, --JA, i.isPaused || QA()), (e += 1);
    }

    function OA(t, e) {
        if (!t) return null;
        for (var i = 0; i < JA;) {
            if (HA[i].elem === t && null !== HA[i].elem) return HA[i].animation;
            i += 1;
        }
        var r = new AnimationItem();
        return RA(r, t), r.setData(t, e), r;
    }

    function PA() {
        (KA += 1), UA();
    }

    function QA() {
        --KA;
    }

    function RA(t, e) {
        t.addEventListener("destroy", NA), t.addEventListener("_active", PA), t.addEventListener("_idle", QA), HA.push({
            elem: e,
            animation: t
        }), (JA += 1);
    }

    function SA(t) {
        for (var e = t - IA, i = 0; i < JA; i += 1) HA[i].animation.advanceTime(e);
        (IA = t), KA && !MA ? window.requestAnimationFrame(SA) : (LA = !0);
    }

    function TA(t) {
        (IA = t), window.requestAnimationFrame(SA);
    }

    function UA() {
        !MA && KA && LA && (window.requestAnimationFrame(TA), (LA = !1));
    }

    function bezFunction() {
        var w = Math;

        function y(t, e, i, r, n, s) {
            e = t * r + e * n + i * s - n * r - s * t - i * e;
            return -0.001 < e && e < 0.001;
        }

        function p(t, e, i, r) {
            for (var n, s, a, o, l = getDefaultCurveSegments(), h = 0, p = [], c = [], f = bezierLengthPool.newElement(), d = i.length, u = 0; u < l; u += 1) {
                for (a = u / (l - 1), n = o = 0; n < d; n += 1)
                    (s = bmPow(1 - a, 3) * t[n] + 3 * bmPow(1 - a, 2) * a * i[n] + 3 * (1 - a) * bmPow(a, 2) * r[n] + bmPow(a, 3) * e[n]), (p[n] = s), null !== c[n] && (o += bmPow(p[n] - c[n], 2)), (c[n] = p[n]);
                o && (h += o = bmSqrt(o)), (f.percents[u] = a), (f.lengths[u] = h);
            }
            return (f.addedLength = h), f;
        }

        function g(t) {
            (this.segmentLength = 0), (this.points = new Array(t));
        }

        function v(t, e) {
            (this.partialLength = t), (this.point = e);
        }

        var b,
            t =
                ((b = {}),
                    function (t, e, i, r) {
                        var n = (t[0] + "_" + t[1] + "_" + e[0] + "_" + e[1] + "_" + i[0] + "_" + i[1] + "_" + r[0] + "_" + r[1]).replace(/\./g, "p");
                        if (!b[n]) {
                            for (
                                var s,
                                    a,
                                    o,
                                    l,
                                    h,
                                    p = getDefaultCurveSegments(),
                                    c = 0,
                                    f = null,
                                    d = new g((p = 2 === t.length && (t[0] !== e[0] || t[1] !== e[1]) && y(t[0], t[1], e[0], e[1], t[0] + i[0], t[1] + i[1]) && y(t[0], t[1], e[0], e[1], e[0] + r[0], e[1] + r[1]) ? 2 : p)),
                                    u = i.length,
                                    m = 0;
                                m < p;
                                m += 1
                            ) {
                                for (h = createSizedArray(u), o = m / (p - 1), s = l = 0; s < u; s += 1)
                                    (a = bmPow(1 - o, 3) * t[s] + 3 * bmPow(1 - o, 2) * o * (t[s] + i[s]) + 3 * (1 - o) * bmPow(o, 2) * (e[s] + r[s]) + bmPow(o, 3) * e[s]), (h[s] = a), null !== f && (l += bmPow(h[s] - f[s], 2));
                                (c += l = bmSqrt(l)), (d.points[m] = new v(l, h)), (f = h);
                            }
                            (d.segmentLength = c), (b[n] = d);
                        }
                        return b[n];
                    });

        function T(t, e) {
            var i = e.percents,
                r = e.lengths,
                n = i.length,
                s = bmFloor((n - 1) * t),
                a = t * e.addedLength,
                o = 0;
            if (s === n - 1 || 0 === s || a === r[s]) return i[s];
            for (var l = r[s] > a ? -1 : 1, h = !0; h;)
                if ((r[s] <= a && r[s + 1] > a ? ((o = (a - r[s]) / (r[s + 1] - r[s])), (h = !1)) : (s += l), s < 0 || n - 1 <= s)) {
                    if (s === n - 1) return i[s];
                    h = !1;
                }
            return i[s] + (i[s + 1] - i[s]) * o;
        }

        var _ = createTypedArray("float32", 8);
        return {
            getSegmentsLength: function (t) {
                for (var e = segmentsLengthPool.newElement(), i = t.c, r = t.v, n = t.o, s = t.i, a = t._length, o = e.lengths, l = 0, h = 0; h < a - 1; h += 1) (o[h] = p(r[h], r[h + 1], n[h], s[h + 1])), (l += o[h].addedLength);
                return i && a && ((o[h] = p(r[h], r[0], n[h], s[0])), (l += o[h].addedLength)), (e.totalLength = l), e;
            },
            getNewSegment: function (t, e, i, r, n, s, a) {
                n < 0 ? (n = 0) : 1 < n && (n = 1);
                for (
                    var o = T(n, a),
                        n = T((s = 1 < s ? 1 : s), a),
                        l = t.length,
                        s = 1 - o,
                        a = 1 - n,
                        h = s * s * s,
                        p = o * s * s * 3,
                        c = o * o * s * 3,
                        f = o * o * o,
                        d = s * s * a,
                        u = o * s * a + s * o * a + s * s * n,
                        m = o * o * a + s * o * n + o * s * n,
                        y = o * o * n,
                        g = s * a * a,
                        v = o * a * a + s * n * a + s * a * n,
                        b = o * n * a + s * n * n + o * a * n,
                        x = o * n * n,
                        E = a * a * a,
                        C = n * a * a + a * n * a + a * a * n,
                        P = n * n * a + a * n * n + n * a * n,
                        S = n * n * n,
                        A = 0;
                    A < l;
                    A += 1
                )
                    (_[4 * A] = w.round(1e3 * (h * t[A] + p * i[A] + c * r[A] + f * e[A])) / 1e3),
                        (_[4 * A + 1] = w.round(1e3 * (d * t[A] + u * i[A] + m * r[A] + y * e[A])) / 1e3),
                        (_[4 * A + 2] = w.round(1e3 * (g * t[A] + v * i[A] + b * r[A] + x * e[A])) / 1e3),
                        (_[4 * A + 3] = w.round(1e3 * (E * t[A] + C * i[A] + P * r[A] + S * e[A])) / 1e3);
                return _;
            },
            getPointInSegment: function (t, e, i, r, n, s) {
                (n = T(n, s)), (s = 1 - n);
                return [
                    w.round(1e3 * (s * s * s * t[0] + (n * s * s + s * n * s + s * s * n) * i[0] + (n * n * s + s * n * n + n * s * n) * r[0] + n * n * n * e[0])) / 1e3,
                    w.round(1e3 * (s * s * s * t[1] + (n * s * s + s * n * s + s * s * n) * i[1] + (n * n * s + s * n * n + n * s * n) * r[1] + n * n * n * e[1])) / 1e3,
                ];
            },
            buildBezierData: t,
            pointOnLine2D: y,
            pointOnLine3D: function (t, e, i, r, n, s, a, o, l) {
                if (0 === i && 0 === s && 0 === l) return y(t, e, r, n, a, o);
                var h = w.sqrt(w.pow(r - t, 2) + w.pow(n - e, 2) + w.pow(s - i, 2)),
                    i = w.sqrt(w.pow(a - t, 2) + w.pow(o - e, 2) + w.pow(l - i, 2)),
                    s = w.sqrt(w.pow(a - r, 2) + w.pow(o - n, 2) + w.pow(l - s, 2));
                return -1e-4 < (s = i < h ? (s < h ? h - i - s : s - i - h) : i < s ? s - i - h : i - h - s) && s < 1e-4;
            },
        };
    }

    var bez = bezFunction(),
        initFrame = initialDefaultFrame,
        mathAbs = Math.abs;

    function interpolateValue(t, e) {
        var i,
            r = this.offsetTime;
        "multidimensional" === this.propType && (i = createTypedArray("float32", this.pv.length));
        for (var n, s, a, o = e.lastIndex, l = o, h = this.keyframes.length - 1, p = !0; p;) {
            if (((n = this.keyframes[l]), (s = this.keyframes[l + 1]), l === h - 1 && t >= s.t - r)) {
                n.h && (n = s), (o = 0);
                break;
            }
            if (s.t - r > t) {
                o = l;
                break;
            }
            l < h - 1 ? (l += 1) : ((o = 0), (p = !1));
        }
        var c = this.keyframesMetadata[l] || {},
            f = s.t - r,
            d = n.t - r;
        if (n.to) {
            c.bezierData || (c.bezierData = bez.buildBezierData(n.s, s.s || n.e, n.to, n.ti));
            var u = c.bezierData;
            if (f <= t || t < d) for (var m = f <= t ? u.points.length - 1 : 0, y = u.points[m].point.length, g = 0; g < y; g += 1) i[g] = u.points[m].point[g];
            else {
                c.__fnct ? (a = c.__fnct) : ((a = BezierFactory.getBezierEasing(n.o.x, n.o.y, n.i.x, n.i.y, n.n).get), (c.__fnct = a));
                for (
                    var v,
                        b = a((t - d) / (f - d)),
                        x = u.segmentLength * b,
                        E = e.lastFrame < t && e._lastKeyframeIndex === l ? e._lastAddedLength : 0,
                        C = e.lastFrame < t && e._lastKeyframeIndex === l ? e._lastPoint : 0,
                        p = !0,
                        P = u.points.length;
                    p;
                ) {
                    if (((E += u.points[C].partialLength), 0 == x || 0 === b || C === u.points.length - 1)) {
                        for (y = u.points[C].point.length, g = 0; g < y; g += 1) i[g] = u.points[C].point[g];
                        break;
                    }
                    if (E <= x && x < E + u.points[C + 1].partialLength) {
                        for (v = (x - E) / u.points[C + 1].partialLength, y = u.points[C].point.length, g = 0; g < y; g += 1) i[g] = u.points[C].point[g] + (u.points[C + 1].point[g] - u.points[C].point[g]) * v;
                        break;
                    }
                    C < P - 1 ? (C += 1) : (p = !1);
                }
                (e._lastPoint = C), (e._lastAddedLength = E - u.points[C].partialLength), (e._lastKeyframeIndex = l);
            }
        } else {
            var S,
                A,
                w,
                T,
                _,
                h = n.s.length,
                M = s.s || n.e;
            if (this.sh && 1 !== n.h)
                f <= t ? ((i[0] = M[0]), (i[1] = M[1]), (i[2] = M[2])) : t <= d ? ((i[0] = n.s[0]), (i[1] = n.s[1]), (i[2] = n.s[2])) : quaternionToEuler(i, slerp(createQuaternion(n.s), createQuaternion(M), (t - d) / (f - d)));
            else
                for (l = 0; l < h; l += 1)
                    1 !== n.h &&
                    (b =
                        f <= t
                            ? 1
                            : t < d
                                ? 0
                                : (n.o.x.constructor === Array
                                    ? (c.__fnct || (c.__fnct = []),
                                        c.__fnct[l]
                                            ? (a = c.__fnct[l])
                                            : ((S = void 0 === n.o.x[l] ? n.o.x[0] : n.o.x[l]),
                                                (A = void 0 === n.o.y[l] ? n.o.y[0] : n.o.y[l]),
                                                (w = void 0 === n.i.x[l] ? n.i.x[0] : n.i.x[l]),
                                                (T = void 0 === n.i.y[l] ? n.i.y[0] : n.i.y[l]),
                                                (a = BezierFactory.getBezierEasing(S, A, w, T).get),
                                                (c.__fnct[l] = a)))
                                    : c.__fnct
                                        ? (a = c.__fnct)
                                        : ((S = n.o.x), (A = n.o.y), (w = n.i.x), (T = n.i.y), (a = BezierFactory.getBezierEasing(S, A, w, T).get), (n.keyframeMetadata = a)),
                                    a((t - d) / (f - d)))),
                        (M = s.s || n.e),
                        (_ = 1 === n.h ? n.s[l] : n.s[l] + (M[l] - n.s[l]) * b),
                        "multidimensional" === this.propType ? (i[l] = _) : (i = _);
        }
        return (e.lastIndex = o), i;
    }

    function slerp(t, e, i) {
        var r,
            n = [],
            s = t[0],
            a = t[1],
            o = t[2],
            l = t[3],
            h = e[0],
            p = e[1],
            c = e[2],
            f = e[3];
        return (
            (t = s * h + a * p + o * c + l * f) < 0 && ((t = -t), (h = -h), (p = -p), (c = -c), (f = -f)),
                (i = 1e-6 < 1 - t ? ((e = Math.acos(t)), (t = Math.sin(e)), (r = Math.sin((1 - i) * e) / t), Math.sin(i * e) / t) : ((r = 1 - i), i)),
                (n[0] = r * s + i * h),
                (n[1] = r * a + i * p),
                (n[2] = r * o + i * c),
                (n[3] = r * l + i * f),
                n
        );
    }

    function quaternionToEuler(t, e) {
        var i = e[0],
            r = e[1],
            n = e[2],
            s = e[3],
            a = Math.atan2(2 * r * s - 2 * i * n, 1 - 2 * r * r - 2 * n * n),
            e = Math.asin(2 * i * r + 2 * n * s),
            n = Math.atan2(2 * i * s - 2 * r * n, 1 - 2 * i * i - 2 * n * n);
        (t[0] = a / degToRads), (t[1] = e / degToRads), (t[2] = n / degToRads);
    }

    function createQuaternion(t) {
        var e = t[0] * degToRads,
            i = t[1] * degToRads,
            r = t[2] * degToRads,
            n = Math.cos(e / 2),
            s = Math.cos(i / 2),
            t = Math.cos(r / 2),
            e = Math.sin(e / 2),
            i = Math.sin(i / 2),
            r = Math.sin(r / 2);
        return [e * i * t + n * s * r, e * s * t + n * i * r, n * i * t - e * s * r, n * s * t - e * i * r];
    }

    function getValueAtCurrentTime() {
        var t = this.comp.renderedFrame - this.offsetTime,
            e = this.keyframes[0].t - this.offsetTime,
            i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
        return (
            t === this._caching.lastFrame ||
            (this._caching.lastFrame !== initFrame && ((this._caching.lastFrame >= i && i <= t) || (this._caching.lastFrame < e && t < e))) ||
            (this._caching.lastFrame >= t && ((this._caching._lastKeyframeIndex = -1), (this._caching.lastIndex = 0)), (e = this.interpolateValue(t, this._caching)), (this.pv = e)),
                (this._caching.lastFrame = t),
                this.pv
        );
    }

    function setVValue(t) {
        var e;
        if ("unidimensional" === this.propType) (e = t * this.mult), 1e-5 < mathAbs(this.v - e) && ((this.v = e), (this._mdf = !0));
        else for (var i = 0, r = this.v.length; i < r;) (e = t[i] * this.mult), 1e-5 < mathAbs(this.v[i] - e) && ((this.v[i] = e), (this._mdf = !0)), (i += 1);
    }

    function processEffectsSequence() {
        if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
            if (this.lock) this.setVValue(this.pv);
            else {
                (this.lock = !0), (this._mdf = this._isFirstFrame);
                for (var t = this.effectsSequence.length, e = this.kf ? this.pv : this.data.k, i = 0; i < t; i += 1) e = this.effectsSequence[i](e);
                this.setVValue(e), (this._isFirstFrame = !1), (this.lock = !1), (this.frameId = this.elem.globalData.frameId);
            }
    }

    function addEffect(t) {
        this.effectsSequence.push(t), this.container.addDynamicProperty(this);
    }

    function ValueProperty(t, e, i, r) {
        (this.propType = "unidimensional"),
            (this.mult = i || 1),
            (this.data = e),
            (this.v = i ? e.k * i : e.k),
            (this.pv = e.k),
            (this._mdf = !1),
            (this.elem = t),
            (this.container = r),
            (this.comp = t.comp),
            (this.k = !1),
            (this.kf = !1),
            (this.vel = 0),
            (this.effectsSequence = []),
            (this._isFirstFrame = !0),
            (this.getValue = processEffectsSequence),
            (this.setVValue = setVValue),
            (this.addEffect = addEffect);
    }

    function MultiDimensionalProperty(t, e, i, r) {
        var n;
        (this.propType = "multidimensional"), (this.mult = i || 1), (this.data = e), (this._mdf = !1), (this.elem = t), (this.container = r), (this.comp = t.comp), (this.k = !1), (this.kf = !1), (this.frameId = -1);
        var s = e.k.length;
        for (this.v = createTypedArray("float32", s), this.pv = createTypedArray("float32", s), this.vel = createTypedArray("float32", s), n = 0; n < s; n += 1) (this.v[n] = e.k[n] * this.mult), (this.pv[n] = e.k[n]);
        (this._isFirstFrame = !0), (this.effectsSequence = []), (this.getValue = processEffectsSequence), (this.setVValue = setVValue), (this.addEffect = addEffect);
    }

    function KeyframedValueProperty(t, e, i, r) {
        (this.propType = "unidimensional"),
            (this.keyframes = e.k),
            (this.keyframesMetadata = []),
            (this.offsetTime = t.data.st),
            (this.frameId = -1),
            (this._caching = {lastFrame: initFrame, lastIndex: 0, value: 0, _lastKeyframeIndex: -1}),
            (this.k = !0),
            (this.kf = !0),
            (this.data = e),
            (this.mult = i || 1),
            (this.elem = t),
            (this.container = r),
            (this.comp = t.comp),
            (this.v = initFrame),
            (this.pv = initFrame),
            (this._isFirstFrame = !0),
            (this.getValue = processEffectsSequence),
            (this.setVValue = setVValue),
            (this.interpolateValue = interpolateValue),
            (this.effectsSequence = [getValueAtCurrentTime.bind(this)]),
            (this.addEffect = addEffect);
    }

    function KeyframedMultidimensionalProperty(t, e, i, r) {
        this.propType = "multidimensional";
        for (var n, s, a, o, l = e.k.length, h = 0; h < l - 1; h += 1)
            e.k[h].to &&
            e.k[h].s &&
            e.k[h + 1] &&
            e.k[h + 1].s &&
            ((n = e.k[h].s),
                (s = e.k[h + 1].s),
                (a = e.k[h].to),
                (o = e.k[h].ti),
            ((2 === n.length && (n[0] !== s[0] || n[1] !== s[1]) && bez.pointOnLine2D(n[0], n[1], s[0], s[1], n[0] + a[0], n[1] + a[1]) && bez.pointOnLine2D(n[0], n[1], s[0], s[1], s[0] + o[0], s[1] + o[1])) ||
                (3 === n.length &&
                    (n[0] !== s[0] || n[1] !== s[1] || n[2] !== s[2]) &&
                    bez.pointOnLine3D(n[0], n[1], n[2], s[0], s[1], s[2], n[0] + a[0], n[1] + a[1], n[2] + a[2]) &&
                    bez.pointOnLine3D(n[0], n[1], n[2], s[0], s[1], s[2], s[0] + o[0], s[1] + o[1], s[2] + o[2]))) &&
            ((e.k[h].to = null), (e.k[h].ti = null)),
            n[0] === s[0] && n[1] === s[1] && 0 === a[0] && 0 === a[1] && 0 === o[0] && 0 === o[1] && (2 === n.length || (n[2] === s[2] && 0 === a[2] && 0 === o[2])) && ((e.k[h].to = null), (e.k[h].ti = null)));
        (this.effectsSequence = [getValueAtCurrentTime.bind(this)]),
            (this.data = e),
            (this.keyframes = e.k),
            (this.keyframesMetadata = []),
            (this.offsetTime = t.data.st),
            (this.k = !0),
            (this.kf = !0),
            (this._isFirstFrame = !0),
            (this.mult = i || 1),
            (this.elem = t),
            (this.container = r),
            (this.comp = t.comp),
            (this.getValue = processEffectsSequence),
            (this.setVValue = setVValue),
            (this.interpolateValue = interpolateValue),
            (this.frameId = -1);
        var p = e.k[0].s.length;
        for (this.v = createTypedArray("float32", p), this.pv = createTypedArray("float32", p), h = 0; h < p; h += 1) (this.v[h] = initFrame), (this.pv[h] = initFrame);
        (this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: createTypedArray("float32", p)
        }), (this.addEffect = addEffect);
    }

    var PropertyFactory = {
        getProp: function (t, e, i, r, n) {
            var s;
            if ((e = e.sid ? t.globalData.slotManager.getProp(e) : e).k.length)
                if ("number" == typeof e.k[0]) s = new MultiDimensionalProperty(t, e, r, n);
                else
                    switch (i) {
                        case 0:
                            s = new KeyframedValueProperty(t, e, r, n);
                            break;
                        case 1:
                            s = new KeyframedMultidimensionalProperty(t, e, r, n);
                    }
            else s = new ValueProperty(t, e, r, n);
            return s.effectsSequence.length && n.addDynamicProperty(s), s;
        },
    };

    function DynamicPropertyContainer() {
    }

    DynamicPropertyContainer.prototype = {
        addDynamicProperty: function (t) {
            -1 === this.dynamicProperties.indexOf(t) && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), (this._isAnimated = !0));
        },
        iterateDynamicProperties: function () {
            this._mdf = !1;
            for (var t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0);
        },
        initDynamicPropertyContainer: function (t) {
            (this.container = t), (this.dynamicProperties = []), (this._mdf = !1), (this._isAnimated = !1);
        },
    };
    var pointPool = poolFactory(8, function () {
        return createTypedArray("float32", 2);
    });

    function ShapePath() {
        (this.c = !1), (this._length = 0), (this._maxLength = 8), (this.v = createSizedArray(this._maxLength)), (this.o = createSizedArray(this._maxLength)), (this.i = createSizedArray(this._maxLength));
    }

    (ShapePath.prototype.setPathData = function (t, e) {
        (this.c = t), this.setLength(e);
        for (var i = 0; i < e;) (this.v[i] = pointPool.newElement()), (this.o[i] = pointPool.newElement()), (this.i[i] = pointPool.newElement()), (i += 1);
    }),
        (ShapePath.prototype.setLength = function (t) {
            for (; this._maxLength < t;) this.doubleArrayLength();
            this._length = t;
        }),
        (ShapePath.prototype.doubleArrayLength = function () {
            (this.v = this.v.concat(createSizedArray(this._maxLength))), (this.i = this.i.concat(createSizedArray(this._maxLength))), (this.o = this.o.concat(createSizedArray(this._maxLength))), (this._maxLength *= 2);
        }),
        (ShapePath.prototype.setXYAt = function (t, e, i, r, n) {
            var s;
            switch (((this._length = Math.max(this._length, r + 1)), this._length >= this._maxLength && this.doubleArrayLength(), i)) {
                case "v":
                    s = this.v;
                    break;
                case "i":
                    s = this.i;
                    break;
                case "o":
                    s = this.o;
                    break;
                default:
                    s = [];
            }
            (s[r] && (!s[r] || n)) || (s[r] = pointPool.newElement()), (s[r][0] = t), (s[r][1] = e);
        }),
        (ShapePath.prototype.setTripleAt = function (t, e, i, r, n, s, a, o) {
            this.setXYAt(t, e, "v", a, o), this.setXYAt(i, r, "o", a, o), this.setXYAt(n, s, "i", a, o);
        }),
        (ShapePath.prototype.reverse = function () {
            var t = new ShapePath();
            t.setPathData(this.c, this._length);
            var e = this.v,
                i = this.o,
                r = this.i,
                n = 0;
            this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), (n = 1));
            for (var s = this._length - 1, a = this._length, o = n; o < a; o += 1) t.setTripleAt(e[s][0], e[s][1], r[s][0], r[s][1], i[s][0], i[s][1], o, !1), --s;
            return t;
        }),
        (ShapePath.prototype.length = function () {
            return this._length;
        });
    var shapePool =
            ((factory = poolFactory(
                4,
                function () {
                    return new ShapePath();
                },
                function (t) {
                    for (var e = t._length, i = 0; i < e; i += 1) pointPool.release(t.v[i]), pointPool.release(t.i[i]), pointPool.release(t.o[i]), (t.v[i] = null), (t.i[i] = null), (t.o[i] = null);
                    (t._length = 0), (t.c = !1);
                }
            )),
                (factory.clone = function (t) {
                    var e,
                        i = factory.newElement(),
                        r = void 0 === t._length ? t.v.length : t._length;
                    for (i.setLength(r), i.c = t.c, e = 0; e < r; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
                    return i;
                }),
                factory),
        factory;

    function ShapeCollection() {
        (this._length = 0), (this._maxLength = 4), (this.shapes = createSizedArray(this._maxLength));
    }

    (ShapeCollection.prototype.addShape = function (t) {
        this._length === this._maxLength && ((this.shapes = this.shapes.concat(createSizedArray(this._maxLength))), (this._maxLength *= 2)), (this.shapes[this._length] = t), (this._length += 1);
    }),
        (ShapeCollection.prototype.releaseShapes = function () {
            for (var t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
            this._length = 0;
        });
    var shapeCollectionPool =
            ((ob = {
                newShapeCollection: function () {
                    return _length ? pool[--_length] : new ShapeCollection();
                },
                release: function (t) {
                    for (var e = t._length, i = 0; i < e; i += 1) shapePool.release(t.shapes[i]);
                    (t._length = 0), _length === _maxLength && ((pool = pooling.double(pool)), (_maxLength *= 2)), (pool[_length] = t), (_length += 1);
                },
            }),
                (_length = 0),
                (_maxLength = 4),
                (pool = createSizedArray(_maxLength)),
                ob),
        ob,
        _length,
        _maxLength,
        pool,
        ShapePropertyFactory = (function () {
            var n = -999999;

            function t(t, e, i) {
                var r,
                    n,
                    s,
                    a,
                    o,
                    l,
                    h,
                    p = i.lastIndex,
                    c = this.keyframes;
                if (t < c[0].t - this.offsetTime) (r = c[0].s[0]), (n = !0), (p = 0);
                else if (t >= c[c.length - 1].t - this.offsetTime) (r = (c[c.length - 1].s ? c[c.length - 1].s : c[c.length - 2].e)[0]), (n = !0);
                else {
                    for (var f, d, u = p, m = c.length - 1, y = !0; y && ((f = c[u]), !((d = c[u + 1]).t - this.offsetTime > t));) u < m - 1 ? (u += 1) : (y = !1);
                    var g,
                        v,
                        b,
                        x = this.keyframesMetadata[u] || {},
                        p = u;
                    (n = 1 === f.h) ||
                    ((v =
                        t >= d.t - this.offsetTime
                            ? 1
                            : t < f.t - this.offsetTime
                                ? 0
                                : (x.__fnct ? (g = x.__fnct) : ((g = BezierFactory.getBezierEasing(f.o.x, f.o.y, f.i.x, f.i.y).get), (x.__fnct = g)),
                                    g((t - (f.t - this.offsetTime)) / (d.t - this.offsetTime - (f.t - this.offsetTime))))),
                        (b = (d.s || f.e)[0])),
                        (r = f.s[0]);
                }
                for (o = e._length, l = r.i[0].length, i.lastIndex = p, s = 0; s < o; s += 1)
                    for (a = 0; a < l; a += 1)
                        (h = n ? r.i[s][a] : r.i[s][a] + (b.i[s][a] - r.i[s][a]) * v),
                            (e.i[s][a] = h),
                            (h = n ? r.o[s][a] : r.o[s][a] + (b.o[s][a] - r.o[s][a]) * v),
                            (e.o[s][a] = h),
                            (h = n ? r.v[s][a] : r.v[s][a] + (b.v[s][a] - r.v[s][a]) * v),
                            (e.v[s][a] = h);
            }

            function r() {
                this.paths = this.localShapeCollection;
            }

            function e(t) {
                !(function (t, e) {
                    if (t._length === e._length && t.c === e.c) {
                        for (var i = t._length, r = 0; r < i; r += 1)
                            if (t.v[r][0] !== e.v[r][0] || t.v[r][1] !== e.v[r][1] || t.o[r][0] !== e.o[r][0] || t.o[r][1] !== e.o[r][1] || t.i[r][0] !== e.i[r][0] || t.i[r][1] !== e.i[r][1]) return;
                        return 1;
                    }
                })(this.v, t) && ((this.v = shapePool.clone(t)), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), (this._mdf = !0), (this.paths = this.localShapeCollection));
            }

            function i() {
                if (this.elem.globalData.frameId !== this.frameId)
                    if (this.effectsSequence.length)
                        if (this.lock) this.setVValue(this.pv);
                        else {
                            (this.lock = !0), (this._mdf = !1);
                            for (var t = this.kf ? this.pv : (this.data.ks || this.data.pt).k, e = this.effectsSequence.length, i = 0; i < e; i += 1) t = this.effectsSequence[i](t);
                            this.setVValue(t), (this.lock = !1), (this.frameId = this.elem.globalData.frameId);
                        }
                    else this._mdf = !1;
            }

            function s(t, e, i) {
                (this.propType = "shape"), (this.comp = t.comp), (this.container = t), (this.elem = t), (this.data = e), (this.k = !1), (this.kf = !1), (this._mdf = !1);
                e = (3 === i ? e.pt : e.ks).k;
                (this.v = shapePool.clone(e)),
                    (this.pv = shapePool.clone(this.v)),
                    (this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
                    (this.paths = this.localShapeCollection),
                    this.paths.addShape(this.v),
                    (this.reset = r),
                    (this.effectsSequence = []);
            }

            function a(t) {
                this.effectsSequence.push(t), this.container.addDynamicProperty(this);
            }

            function o(t, e, i) {
                (this.propType = "shape"),
                    (this.comp = t.comp),
                    (this.elem = t),
                    (this.container = t),
                    (this.offsetTime = t.data.st),
                    (this.keyframes = (3 === i ? e.pt : e.ks).k),
                    (this.keyframesMetadata = []),
                    (this.k = !0),
                    (this.kf = !0);
                e = this.keyframes[0].s[0].i.length;
                (this.v = shapePool.newElement()),
                    this.v.setPathData(this.keyframes[0].s[0].c, e),
                    (this.pv = shapePool.clone(this.v)),
                    (this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
                    (this.paths = this.localShapeCollection),
                    this.paths.addShape(this.v),
                    (this.lastFrame = n),
                    (this.reset = r),
                    (this._caching = {lastFrame: n, lastIndex: 0}),
                    (this.effectsSequence = [
                        function () {
                            var t = this.comp.renderedFrame - this.offsetTime,
                                e = this.keyframes[0].t - this.offsetTime,
                                i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                                r = this._caching.lastFrame;
                            return (
                                (r !== n && ((r < e && t < e) || (i < r && i < t))) || ((this._caching.lastIndex = r < t ? this._caching.lastIndex : 0), this.interpolateShape(t, this.pv, this._caching)),
                                    (this._caching.lastFrame = t),
                                    this.pv
                            );
                        }.bind(this),
                    ]);
            }

            (s.prototype.interpolateShape = t),
                (s.prototype.getValue = i),
                (s.prototype.setVValue = e),
                (s.prototype.addEffect = a),
                (o.prototype.getValue = i),
                (o.prototype.interpolateShape = t),
                (o.prototype.setVValue = e),
                (o.prototype.addEffect = a);
            var l,
                h =
                    ((l = roundCorner),
                        (u.prototype = {
                            reset: r,
                            getValue: function () {
                                this.elem.globalData.frameId !== this.frameId && ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
                            },
                            convertEllToPath: function () {
                                var t = this.p.v[0],
                                    e = this.p.v[1],
                                    i = this.s.v[0] / 2,
                                    r = this.s.v[1] / 2,
                                    n = 3 !== this.d,
                                    s = this.v;
                                (s.v[0][0] = t),
                                    (s.v[0][1] = e - r),
                                    (s.v[1][0] = n ? t + i : t - i),
                                    (s.v[1][1] = e),
                                    (s.v[2][0] = t),
                                    (s.v[2][1] = e + r),
                                    (s.v[3][0] = n ? t - i : t + i),
                                    (s.v[3][1] = e),
                                    (s.i[0][0] = n ? t - i * l : t + i * l),
                                    (s.i[0][1] = e - r),
                                    (s.i[1][0] = n ? t + i : t - i),
                                    (s.i[1][1] = e - r * l),
                                    (s.i[2][0] = n ? t + i * l : t - i * l),
                                    (s.i[2][1] = e + r),
                                    (s.i[3][0] = n ? t - i : t + i),
                                    (s.i[3][1] = e + r * l),
                                    (s.o[0][0] = n ? t + i * l : t - i * l),
                                    (s.o[0][1] = e - r),
                                    (s.o[1][0] = n ? t + i : t - i),
                                    (s.o[1][1] = e + r * l),
                                    (s.o[2][0] = n ? t - i * l : t + i * l),
                                    (s.o[2][1] = e + r),
                                    (s.o[3][0] = n ? t - i : t + i),
                                    (s.o[3][1] = e - r * l);
                            },
                        }),
                        extendPrototype([DynamicPropertyContainer], u),
                        u),
                p =
                    ((d.prototype = {
                        reset: r,
                        getValue: function () {
                            this.elem.globalData.frameId !== this.frameId && ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), this._mdf && this.convertToPath());
                        },
                        convertStarToPath: function () {
                            var t = 2 * Math.floor(this.pt.v),
                                e = (2 * Math.PI) / t,
                                i = !0,
                                r = this.or.v,
                                n = this.ir.v,
                                s = this.os.v,
                                a = this.is.v,
                                o = (2 * Math.PI * r) / (2 * t),
                                l = (2 * Math.PI * n) / (2 * t),
                                h = -Math.PI / 2;
                            h += this.r.v;
                            for (var p = 3 === this.data.d ? -1 : 1, c = (this.v._length = 0); c < t; c += 1) {
                                var f = i ? s : a,
                                    d = i ? o : l,
                                    u = (g = i ? r : n) * Math.cos(h),
                                    m = g * Math.sin(h),
                                    y = 0 === u && 0 === m ? 0 : m / Math.sqrt(u * u + m * m),
                                    g = 0 === u && 0 === m ? 0 : -u / Math.sqrt(u * u + m * m);
                                (u += +this.p.v[0]), (m += +this.p.v[1]), this.v.setTripleAt(u, m, u - y * d * f * p, m - g * d * f * p, u + y * d * f * p, m + g * d * f * p, c, !0), (i = !i), (h += e * p);
                            }
                        },
                        convertPolygonToPath: function () {
                            var t,
                                e = Math.floor(this.pt.v),
                                i = (2 * Math.PI) / e,
                                r = this.or.v,
                                n = this.os.v,
                                s = (2 * Math.PI * r) / (4 * e),
                                a = 0.5 * -Math.PI,
                                o = 3 === this.data.d ? -1 : 1;
                            for (a += this.r.v, t = this.v._length = 0; t < e; t += 1) {
                                var l = r * Math.cos(a),
                                    h = r * Math.sin(a),
                                    p = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                                    c = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                                (l += +this.p.v[0]), (h += +this.p.v[1]), this.v.setTripleAt(l, h, l - p * s * n * o, h - c * s * n * o, l + p * s * n * o, h + c * s * n * o, t, !0), (a += i * o);
                            }
                            (this.paths.length = 0), (this.paths[0] = this.v);
                        },
                    }),
                        extendPrototype([DynamicPropertyContainer], d),
                        d),
                c =
                    ((f.prototype = {
                        convertRectToPath: function () {
                            var t = this.p.v[0],
                                e = this.p.v[1],
                                i = this.s.v[0] / 2,
                                r = this.s.v[1] / 2,
                                n = bmMin(i, r, this.r.v),
                                s = n * (1 - roundCorner);
                            (this.v._length = 0),
                                2 === this.d || 1 === this.d
                                    ? (this.v.setTripleAt(t + i, e - r + n, t + i, e - r + n, t + i, e - r + s, 0, !0),
                                        this.v.setTripleAt(t + i, e + r - n, t + i, e + r - s, t + i, e + r - n, 1, !0),
                                        0 !== n
                                            ? (this.v.setTripleAt(t + i - n, e + r, t + i - n, e + r, t + i - s, e + r, 2, !0),
                                                this.v.setTripleAt(t - i + n, e + r, t - i + s, e + r, t - i + n, e + r, 3, !0),
                                                this.v.setTripleAt(t - i, e + r - n, t - i, e + r - n, t - i, e + r - s, 4, !0),
                                                this.v.setTripleAt(t - i, e - r + n, t - i, e - r + s, t - i, e - r + n, 5, !0),
                                                this.v.setTripleAt(t - i + n, e - r, t - i + n, e - r, t - i + s, e - r, 6, !0),
                                                this.v.setTripleAt(t + i - n, e - r, t + i - s, e - r, t + i - n, e - r, 7, !0))
                                            : (this.v.setTripleAt(t - i, e + r, t - i + s, e + r, t - i, e + r, 2), this.v.setTripleAt(t - i, e - r, t - i, e - r + s, t - i, e - r, 3)))
                                    : (this.v.setTripleAt(t + i, e - r + n, t + i, e - r + s, t + i, e - r + n, 0, !0),
                                        0 !== n
                                            ? (this.v.setTripleAt(t + i - n, e - r, t + i - n, e - r, t + i - s, e - r, 1, !0),
                                                this.v.setTripleAt(t - i + n, e - r, t - i + s, e - r, t - i + n, e - r, 2, !0),
                                                this.v.setTripleAt(t - i, e - r + n, t - i, e - r + n, t - i, e - r + s, 3, !0),
                                                this.v.setTripleAt(t - i, e + r - n, t - i, e + r - s, t - i, e + r - n, 4, !0),
                                                this.v.setTripleAt(t - i + n, e + r, t - i + n, e + r, t - i + s, e + r, 5, !0),
                                                this.v.setTripleAt(t + i - n, e + r, t + i - s, e + r, t + i - n, e + r, 6, !0),
                                                this.v.setTripleAt(t + i, e + r - n, t + i, e + r - n, t + i, e + r - s, 7, !0))
                                            : (this.v.setTripleAt(t - i, e - r, t - i + s, e - r, t - i, e - r, 1, !0),
                                                this.v.setTripleAt(t - i, e + r, t - i, e + r - s, t - i, e + r, 2, !0),
                                                this.v.setTripleAt(t + i, e + r, t + i - s, e + r, t + i, e + r, 3, !0)));
                        },
                        getValue: function () {
                            this.elem.globalData.frameId !== this.frameId && ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
                        },
                        reset: r,
                    }),
                        extendPrototype([DynamicPropertyContainer], f),
                        f);

            function f(t, e) {
                (this.v = shapePool.newElement()),
                    (this.v.c = !0),
                    (this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
                    this.localShapeCollection.addShape(this.v),
                    (this.paths = this.localShapeCollection),
                    (this.elem = t),
                    (this.comp = t.comp),
                    (this.frameId = -1),
                    (this.d = e.d),
                    this.initDynamicPropertyContainer(t),
                    (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                    (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                    (this.r = PropertyFactory.getProp(t, e.r, 0, 0, this)),
                    this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertRectToPath());
            }

            function d(t, e) {
                (this.v = shapePool.newElement()),
                    this.v.setPathData(!0, 0),
                    (this.elem = t),
                    (this.comp = t.comp),
                    (this.data = e),
                    (this.frameId = -1),
                    (this.d = e.d),
                    this.initDynamicPropertyContainer(t),
                    1 === e.sy
                        ? ((this.ir = PropertyFactory.getProp(t, e.ir, 0, 0, this)), (this.is = PropertyFactory.getProp(t, e.is, 0, 0.01, this)), (this.convertToPath = this.convertStarToPath))
                        : (this.convertToPath = this.convertPolygonToPath),
                    (this.pt = PropertyFactory.getProp(t, e.pt, 0, 0, this)),
                    (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                    (this.r = PropertyFactory.getProp(t, e.r, 0, degToRads, this)),
                    (this.or = PropertyFactory.getProp(t, e.or, 0, 0, this)),
                    (this.os = PropertyFactory.getProp(t, e.os, 0, 0.01, this)),
                    (this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
                    this.localShapeCollection.addShape(this.v),
                    (this.paths = this.localShapeCollection),
                    this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertToPath());
            }

            function u(t, e) {
                (this.v = shapePool.newElement()),
                    this.v.setPathData(!0, 4),
                    (this.localShapeCollection = shapeCollectionPool.newShapeCollection()),
                    (this.paths = this.localShapeCollection),
                    this.localShapeCollection.addShape(this.v),
                    (this.d = e.d),
                    (this.elem = t),
                    (this.comp = t.comp),
                    (this.frameId = -1),
                    this.initDynamicPropertyContainer(t),
                    (this.p = PropertyFactory.getProp(t, e.p, 1, 0, this)),
                    (this.s = PropertyFactory.getProp(t, e.s, 1, 0, this)),
                    this.dynamicProperties.length ? (this.k = !0) : ((this.k = !1), this.convertEllToPath());
            }

            return {
                getShapeProp: function (t, e, i) {
                    var r;
                    return (
                        3 === i || 4 === i ? (r = new ((3 === i ? e.pt : e.ks).k.length ? o : s)(t, e, i)) : 5 === i ? (r = new c(t, e)) : 6 === i ? (r = new h(t, e)) : 7 === i && (r = new p(t, e)), r.k && t.addDynamicProperty(r), r
                    );
                },
                getConstructorFunction: function () {
                    return s;
                },
                getKeyframedConstructorFunction: function () {
                    return o;
                },
            };
        })(),
        Matrix =
            ((uK = Math.cos),
                (vK = Math.sin),
                (wK = Math.tan),
                (xK = Math.round),
                function () {
                    (this.reset = yK),
                        (this.rotate = zK),
                        (this.rotateX = AK),
                        (this.rotateY = BK),
                        (this.rotateZ = CK),
                        (this.skew = EK),
                        (this.skewFromAxis = FK),
                        (this.shear = DK),
                        (this.scale = GK),
                        (this.setTransform = HK),
                        (this.translate = IK),
                        (this.transform = JK),
                        (this.multiply = KK),
                        (this.applyToPoint = PK),
                        (this.applyToX = QK),
                        (this.applyToY = RK),
                        (this.applyToZ = SK),
                        (this.applyToPointArray = XK),
                        (this.applyToTriplePoints = WK),
                        (this.applyToPointStringified = YK),
                        (this.toCSS = ZK),
                        (this.to2dCSS = _K),
                        (this.clone = NK),
                        (this.cloneFromProps = OK),
                        (this.equals = MK),
                        (this.inversePoints = VK),
                        (this.inversePoint = UK),
                        (this.getInverseMatrix = TK),
                        (this._t = this.transform),
                        (this.isIdentity = LK),
                        (this._identity = !0),
                        (this._identityCalculated = !1),
                        (this.props = createTypedArray("float32", 16)),
                        this.reset();
                }),
        uK,
        vK,
        wK,
        xK;

    function yK() {
        return (
            (this.props[0] = 1),
                (this.props[1] = 0),
                (this.props[2] = 0),
                (this.props[3] = 0),
                (this.props[4] = 0),
                (this.props[5] = 1),
                (this.props[6] = 0),
                (this.props[7] = 0),
                (this.props[8] = 0),
                (this.props[9] = 0),
                (this.props[10] = 1),
                (this.props[11] = 0),
                (this.props[12] = 0),
                (this.props[13] = 0),
                (this.props[14] = 0),
                (this.props[15] = 1),
                this
        );
    }

    function zK(t) {
        if (0 === t) return this;
        var e = uK(t),
            t = vK(t);
        return this._t(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    function AK(t) {
        if (0 === t) return this;
        var e = uK(t),
            t = vK(t);
        return this._t(1, 0, 0, 0, 0, e, -t, 0, 0, t, e, 0, 0, 0, 0, 1);
    }

    function BK(t) {
        if (0 === t) return this;
        var e = uK(t),
            t = vK(t);
        return this._t(e, 0, t, 0, 0, 1, 0, 0, -t, 0, e, 0, 0, 0, 0, 1);
    }

    function CK(t) {
        if (0 === t) return this;
        var e = uK(t),
            t = vK(t);
        return this._t(e, -t, 0, 0, t, e, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    function DK(t, e) {
        return this._t(1, e, t, 1, 0, 0);
    }

    function EK(t, e) {
        return this.shear(wK(t), wK(e));
    }

    function FK(t, e) {
        var i = uK(e),
            e = vK(e);
        return this._t(i, e, 0, 0, -e, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, wK(t), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(i, -e, 0, 0, e, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    }

    function GK(t, e, i) {
        return i || 0 === i || (i = 1), 1 === t && 1 === e && 1 === i ? this : this._t(t, 0, 0, 0, 0, e, 0, 0, 0, 0, i, 0, 0, 0, 0, 1);
    }

    function HK(t, e, i, r, n, s, a, o, l, h, p, c, f, d, u, m) {
        return (
            (this.props[0] = t),
                (this.props[1] = e),
                (this.props[2] = i),
                (this.props[3] = r),
                (this.props[4] = n),
                (this.props[5] = s),
                (this.props[6] = a),
                (this.props[7] = o),
                (this.props[8] = l),
                (this.props[9] = h),
                (this.props[10] = p),
                (this.props[11] = c),
                (this.props[12] = f),
                (this.props[13] = d),
                (this.props[14] = u),
                (this.props[15] = m),
                this
        );
    }

    function IK(t, e, i) {
        return (i = i || 0), 0 !== t || 0 !== e || 0 !== i ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, t, e, i, 1) : this;
    }

    function JK(t, e, i, r, n, s, a, o, l, h, p, c, f, d, u, m) {
        var y = this.props;
        if (1 === t && 0 === e && 0 === i && 0 === r && 0 === n && 1 === s && 0 === a && 0 === o && 0 === l && 0 === h && 1 === p && 0 === c)
            return (y[12] = y[12] * t + y[15] * f), (y[13] = y[13] * s + y[15] * d), (y[14] = y[14] * p + y[15] * u), (y[15] *= m), (this._identityCalculated = !1), this;
        var g = y[0],
            v = y[1],
            b = y[2],
            x = y[3],
            E = y[4],
            C = y[5],
            P = y[6],
            S = y[7],
            A = y[8],
            w = y[9],
            T = y[10],
            _ = y[11],
            M = y[12],
            k = y[13],
            D = y[14],
            I = y[15];
        return (
            (y[0] = g * t + v * n + b * l + x * f),
                (y[1] = g * e + v * s + b * h + x * d),
                (y[2] = g * i + v * a + b * p + x * u),
                (y[3] = g * r + v * o + b * c + x * m),
                (y[4] = E * t + C * n + P * l + S * f),
                (y[5] = E * e + C * s + P * h + S * d),
                (y[6] = E * i + C * a + P * p + S * u),
                (y[7] = E * r + C * o + P * c + S * m),
                (y[8] = A * t + w * n + T * l + _ * f),
                (y[9] = A * e + w * s + T * h + _ * d),
                (y[10] = A * i + w * a + T * p + _ * u),
                (y[11] = A * r + w * o + T * c + _ * m),
                (y[12] = M * t + k * n + D * l + I * f),
                (y[13] = M * e + k * s + D * h + I * d),
                (y[14] = M * i + k * a + D * p + I * u),
                (y[15] = M * r + k * o + D * c + I * m),
                (this._identityCalculated = !1),
                this
        );
    }

    function KK(t) {
        t = t.props;
        return this.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15]);
    }

    function LK() {
        return (
            this._identityCalculated ||
            ((this._identity = !(
                1 !== this.props[0] ||
                0 !== this.props[1] ||
                0 !== this.props[2] ||
                0 !== this.props[3] ||
                0 !== this.props[4] ||
                1 !== this.props[5] ||
                0 !== this.props[6] ||
                0 !== this.props[7] ||
                0 !== this.props[8] ||
                0 !== this.props[9] ||
                1 !== this.props[10] ||
                0 !== this.props[11] ||
                0 !== this.props[12] ||
                0 !== this.props[13] ||
                0 !== this.props[14] ||
                1 !== this.props[15]
            )),
                (this._identityCalculated = !0)),
                this._identity
        );
    }

    function MK(t) {
        for (var e = 0; e < 16;) {
            if (t.props[e] !== this.props[e]) return !1;
            e += 1;
        }
        return !0;
    }

    function NK(t) {
        for (var e = 0; e < 16; e += 1) t.props[e] = this.props[e];
        return t;
    }

    function OK(t) {
        for (var e = 0; e < 16; e += 1) this.props[e] = t[e];
    }

    function PK(t, e, i) {
        return {
            x: t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
            y: t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
            z: t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14],
        };
    }

    function QK(t, e, i) {
        return t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12];
    }

    function RK(t, e, i) {
        return t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13];
    }

    function SK(t, e, i) {
        return t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14];
    }

    function TK() {
        var t = this.props[0] * this.props[5] - this.props[1] * this.props[4],
            e = this.props[5] / t,
            i = -this.props[1] / t,
            r = -this.props[4] / t,
            n = this.props[0] / t,
            s = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / t,
            a = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / t,
            t = new Matrix();
        return (t.props[0] = e), (t.props[1] = i), (t.props[4] = r), (t.props[5] = n), (t.props[12] = s), (t.props[13] = a), t;
    }

    function UK(t) {
        return this.getInverseMatrix().applyToPointArray(t[0], t[1], t[2] || 0);
    }

    function VK(t) {
        for (var e = t.length, i = [], r = 0; r < e; r += 1) i[r] = UK(t[r]);
        return i;
    }

    function WK(t, e, i) {
        var r,
            n,
            s,
            a,
            o,
            l,
            h = createTypedArray("float32", 6);
        return (
            this.isIdentity()
                ? ((h[0] = t[0]), (h[1] = t[1]), (h[2] = e[0]), (h[3] = e[1]), (h[4] = i[0]), (h[5] = i[1]))
                : ((r = this.props[0]),
                    (n = this.props[1]),
                    (s = this.props[4]),
                    (a = this.props[5]),
                    (o = this.props[12]),
                    (l = this.props[13]),
                    (h[0] = t[0] * r + t[1] * s + o),
                    (h[1] = t[0] * n + t[1] * a + l),
                    (h[2] = e[0] * r + e[1] * s + o),
                    (h[3] = e[0] * n + e[1] * a + l),
                    (h[4] = i[0] * r + i[1] * s + o),
                    (h[5] = i[0] * n + i[1] * a + l)),
                h
        );
    }

    function XK(t, e, i) {
        return this.isIdentity()
            ? [t, e, i]
            : [
                t * this.props[0] + e * this.props[4] + i * this.props[8] + this.props[12],
                t * this.props[1] + e * this.props[5] + i * this.props[9] + this.props[13],
                t * this.props[2] + e * this.props[6] + i * this.props[10] + this.props[14],
            ];
    }

    function YK(t, e) {
        if (this.isIdentity()) return t + "," + e;
        var i = this.props;
        return Math.round(100 * (t * i[0] + e * i[4] + i[12])) / 100 + "," + Math.round(100 * (t * i[1] + e * i[5] + i[13])) / 100;
    }

    function ZK() {
        for (var t = 0, e = this.props, i = "matrix3d("; t < 16;) (i += xK(1e4 * e[t]) / 1e4), (i += 15 === t ? ")" : ","), (t += 1);
        return i;
    }

    function $K(t) {
        return (t < 1e-6 && 0 < t) || (-1e-6 < t && t < 0) ? xK(1e4 * t) / 1e4 : t;
    }

    function _K() {
        var t = this.props;
        return "matrix(" + $K(t[0]) + "," + $K(t[1]) + "," + $K(t[4]) + "," + $K(t[5]) + "," + $K(t[12]) + "," + $K(t[13]) + ")";
    }

    function _typeof$3(t) {
        return (_typeof$3 =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
    }

    var lottie = {},
        standalone = "__[STANDALONE]__",
        animationData = "__[ANIMATIONDATA]__",
        renderer = "";

    function setLocation(t) {
        setLocationHref(t);
    }

    function searchAnimations() {
        !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations();
    }

    function setSubframeRendering(t) {
        setSubframeEnabled(t);
    }

    function setPrefix(t) {
        setIdPrefix(t);
    }

    function loadAnimation(t) {
        return !0 === standalone && (t.animationData = JSON.parse(animationData)), animationManager.loadAnimation(t);
    }

    function setQuality(t) {
        if ("string" == typeof t)
            switch (t) {
                case "high":
                    setDefaultCurveSegments(200);
                    break;
                default:
                case "medium":
                    setDefaultCurveSegments(50);
                    break;
                case "low":
                    setDefaultCurveSegments(10);
            }
        else !isNaN(t) && 1 < t && setDefaultCurveSegments(t);
        50 <= getDefaultCurveSegments() ? roundValues(!1) : roundValues(!0);
    }

    function inBrowser() {
        return "undefined" != typeof navigator;
    }

    function installPlugin(t, e) {
        "expressions" === t && setExpressionsPlugin(e);
    }

    function getFactory(t) {
        switch (t) {
            case "propertyFactory":
                return PropertyFactory;
            case "shapePropertyFactory":
                return ShapePropertyFactory;
            case "matrix":
                return Matrix;
            default:
                return null;
        }
    }

    function checkReady() {
        "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations());
    }

    function getQueryVariable(t) {
        for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
            var r = e[i].split("=");
            if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1]);
        }
        return null;
    }

    (lottie.play = animationManager.play),
        (lottie.pause = animationManager.pause),
        (lottie.setLocationHref = setLocation),
        (lottie.togglePause = animationManager.togglePause),
        (lottie.setSpeed = animationManager.setSpeed),
        (lottie.setDirection = animationManager.setDirection),
        (lottie.stop = animationManager.stop),
        (lottie.searchAnimations = searchAnimations),
        (lottie.registerAnimation = animationManager.registerAnimation),
        (lottie.loadAnimation = loadAnimation),
        (lottie.setSubframeRendering = setSubframeRendering),
        (lottie.resize = animationManager.resize),
        (lottie.goToAndStop = animationManager.goToAndStop),
        (lottie.destroy = animationManager.destroy),
        (lottie.setQuality = setQuality),
        (lottie.inBrowser = inBrowser),
        (lottie.installPlugin = installPlugin),
        (lottie.freeze = animationManager.freeze),
        (lottie.unfreeze = animationManager.unfreeze),
        (lottie.setVolume = animationManager.setVolume),
        (lottie.mute = animationManager.mute),
        (lottie.unmute = animationManager.unmute),
        (lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations),
        (lottie.useWebWorker = setWebWorker),
        (lottie.setIDPrefix = setPrefix),
        (lottie.__getFactory = getFactory),
        (lottie.version = "5.12.2");
    var queryString = "",
        scripts,
        index,
        myScript,
        queryString,
        renderer;
    standalone &&
    ((scripts = document.getElementsByTagName("script")),
        (index = scripts.length - 1),
        (myScript = scripts[index] || {src: ""}),
        (queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : ""),
        (renderer = getQueryVariable("renderer")));
    var readyStateCheckInterval = setInterval(checkReady, 100);
    try {
        ("object" === ("undefined" == typeof exports ? "undefined" : _typeof$3(exports)) && "undefined" != typeof module) || ("function" == typeof define && define.amd) || (window.bodymovin = lottie);
    } catch (t) {
    }
    var ShapeModifiers =
            ((KN = {}),
                (LN = {}),
                (KN.registerModifier = function (t, e) {
                    LN[t] || (LN[t] = e);
                }),
                (KN.getModifier = function (t, e, i) {
                    return new LN[t](e, i);
                }),
                KN),
        KN,
        LN;

    function ShapeModifier() {
    }

    function TrimModifier() {
    }

    function PuckerAndBloatModifier() {
    }

    (ShapeModifier.prototype.initModifierProperties = function () {
    }),
        (ShapeModifier.prototype.addShapeToModifier = function () {
        }),
        (ShapeModifier.prototype.addShape = function (t) {
            var e;
            this.closed ||
            (t.sh.container.addDynamicProperty(t.sh),
                (e = {shape: t.sh, data: t, localShapeCollection: shapeCollectionPool.newShapeCollection()}),
                this.shapes.push(e),
                this.addShapeToModifier(e),
            this._isAnimated && t.setAsAnimated());
        }),
        (ShapeModifier.prototype.init = function (t, e) {
            (this.shapes = []),
                (this.elem = t),
                this.initDynamicPropertyContainer(t),
                this.initModifierProperties(t, e),
                (this.frameId = initialDefaultFrame),
                (this.closed = !1),
                (this.k = !1),
                this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
        }),
        (ShapeModifier.prototype.processKeys = function () {
            this.elem.globalData.frameId !== this.frameId && ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties());
        }),
        extendPrototype([DynamicPropertyContainer], ShapeModifier),
        extendPrototype([ShapeModifier], TrimModifier),
        (TrimModifier.prototype.initModifierProperties = function (t, e) {
            (this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this)),
                (this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this)),
                (this.o = PropertyFactory.getProp(t, e.o, 0, 0, this)),
                (this.sValue = 0),
                (this.eValue = 0),
                (this.getValue = this.processKeys),
                (this.m = e.m),
                (this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length);
        }),
        (TrimModifier.prototype.addShapeToModifier = function (t) {
            t.pathsData = [];
        }),
        (TrimModifier.prototype.calculateShapeEdges = function (t, e, i, r, n) {
            var s = [];
            e <= 1 ? s.push({s: t, e: e}) : 1 <= t ? s.push({s: t - 1, e: e - 1}) : (s.push({s: t, e: 1}), s.push({
                s: 0,
                e: e - 1
            }));
            for (var a, o, l = [], h = s.length, p = 0; p < h; p += 1) (o = s[p]).e * n < r || o.s * n > r + i || ((a = o.s * n <= r ? 0 : (o.s * n - r) / i), (o = o.e * n >= r + i ? 1 : (o.e * n - r) / i), l.push([a, o]));
            return l.length || l.push([0, 0]), l;
        }),
        (TrimModifier.prototype.releasePathsData = function (t) {
            for (var e = t.length, i = 0; i < e; i += 1) segmentsLengthPool.release(t[i]);
            return (t.length = 0), t;
        }),
        (TrimModifier.prototype.processShapes = function (t) {
            var e, i, r, n;
            this._mdf || t
                ? ((i = (this.o.v % 360) / 360) < 0 && (i += 1),
                (r = 1 < this.s.v ? 1 + i : this.s.v < 0 ? 0 + i : this.s.v + i) > (n = 1 < this.e.v ? 1 + i : this.e.v < 0 ? 0 + i : this.e.v + i) && ((i = r), (r = n), (n = i)),
                    (r = 1e-4 * Math.round(1e4 * r)),
                    (n = 1e-4 * Math.round(1e4 * n)),
                    (this.sValue = r),
                    (this.eValue = n))
                : ((r = this.sValue), (n = this.eValue));
            var s,
                a,
                o,
                l,
                h,
                p = this.shapes.length,
                c = 0;
            if (n === r)
                for (m = 0; m < p; m += 1)
                    this.shapes[m].localShapeCollection.releaseShapes(), (this.shapes[m].shape._mdf = !0), (this.shapes[m].shape.paths = this.shapes[m].localShapeCollection), this._mdf && (this.shapes[m].pathsData.length = 0);
            else if ((1 === n && 0 === r) || (0 === n && 1 === r)) {
                if (this._mdf) for (m = 0; m < p; m += 1) (this.shapes[m].pathsData.length = 0), (this.shapes[m].shape._mdf = !0);
            } else {
                for (var f, d, u = [], m = 0; m < p; m += 1)
                    if ((f = this.shapes[m]).shape._mdf || this._mdf || t || 2 === this.m) {
                        if (((a = (e = f.shape.paths)._length), (h = 0), !f.shape._mdf && f.pathsData.length)) h = f.totalShapeLength;
                        else {
                            for (o = this.releasePathsData(f.pathsData), s = 0; s < a; s += 1) (l = bez.getSegmentsLength(e.shapes[s])), o.push(l), (h += l.totalLength);
                            (f.totalShapeLength = h), (f.pathsData = o);
                        }
                        (c += h), (f.shape._mdf = !0);
                    } else f.shape.paths = f.localShapeCollection;
                var y,
                    g = r,
                    v = n,
                    b = 0;
                for (m = p - 1; 0 <= m; --m)
                    if ((f = this.shapes[m]).shape._mdf) {
                        for (
                            (d = f.localShapeCollection).releaseShapes(), 2 === this.m && 1 < p ? ((y = this.calculateShapeEdges(r, n, f.totalShapeLength, b, c)), (b += f.totalShapeLength)) : (y = [[g, v]]), a = y.length, s = 0;
                            s < a;
                            s += 1
                        ) {
                            (g = y[s][0]),
                                (v = y[s][1]),
                                (u.length = 0),
                                v <= 1
                                    ? u.push({s: f.totalShapeLength * g, e: f.totalShapeLength * v})
                                    : 1 <= g
                                        ? u.push({s: f.totalShapeLength * (g - 1), e: f.totalShapeLength * (v - 1)})
                                        : (u.push({s: f.totalShapeLength * g, e: f.totalShapeLength}), u.push({
                                            s: 0,
                                            e: f.totalShapeLength * (v - 1)
                                        }));
                            var x,
                                E = this.addShapes(f, u[0]);
                            u[0].s !== u[0].e &&
                            (1 < u.length && (E = f.shape.paths.shapes[f.shape.paths._length - 1].c ? ((x = E.pop()), this.addPaths(E, d), this.addShapes(f, u[1], x)) : (this.addPaths(E, d), this.addShapes(f, u[1]))),
                                this.addPaths(E, d));
                        }
                        f.shape.paths = d;
                    }
            }
        }),
        (TrimModifier.prototype.addPaths = function (t, e) {
            for (var i = t.length, r = 0; r < i; r += 1) e.addShape(t[r]);
        }),
        (TrimModifier.prototype.addSegment = function (t, e, i, r, n, s, a) {
            n.setXYAt(e[0], e[1], "o", s), n.setXYAt(i[0], i[1], "i", s + 1), a && n.setXYAt(t[0], t[1], "v", s), n.setXYAt(r[0], r[1], "v", s + 1);
        }),
        (TrimModifier.prototype.addSegmentFromArray = function (t, e, i, r) {
            e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), r && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1);
        }),
        (TrimModifier.prototype.addShapes = function (t, e, i) {
            var r,
                n,
                s,
                a,
                o,
                l,
                h,
                p,
                c = t.pathsData,
                f = t.shape.paths.shapes,
                d = t.shape.paths._length,
                u = 0,
                m = [],
                y = !0,
                g = i ? ((a = i._length), i._length) : ((i = shapePool.newElement()), (a = 0));
            for (m.push(i), r = 0; r < d; r += 1) {
                for (o = c[r].lengths, i.c = f[r].c, s = f[r].c ? o.length : o.length + 1, n = 1; n < s; n += 1)
                    if (u + (p = o[n - 1]).addedLength < e.s) (u += p.addedLength), (i.c = !1);
                    else {
                        if (u > e.e) {
                            i.c = !1;
                            break;
                        }
                        e.s <= u && e.e >= u + p.addedLength
                            ? (this.addSegment(f[r].v[n - 1], f[r].o[n - 1], f[r].i[n], f[r].v[n], i, a, y), (y = !1))
                            : ((l = bez.getNewSegment(f[r].v[n - 1], f[r].v[n], f[r].o[n - 1], f[r].i[n], (e.s - u) / p.addedLength, (e.e - u) / p.addedLength, o[n - 1])), this.addSegmentFromArray(l, i, a, y), (y = !1), (i.c = !1)),
                            (u += p.addedLength),
                            (a += 1);
                    }
                if (
                    (f[r].c &&
                    o.length &&
                    ((p = o[n - 1]),
                        u <= e.e
                            ? ((h = o[n - 1].addedLength),
                                e.s <= u && e.e >= u + h
                                    ? (this.addSegment(f[r].v[n - 1], f[r].o[n - 1], f[r].i[0], f[r].v[0], i, a, y), (y = !1))
                                    : ((l = bez.getNewSegment(f[r].v[n - 1], f[r].v[0], f[r].o[n - 1], f[r].i[0], (e.s - u) / h, (e.e - u) / h, o[n - 1])), this.addSegmentFromArray(l, i, a, y), (y = !1), (i.c = !1)))
                            : (i.c = !1),
                        (u += p.addedLength),
                        (a += 1)),
                    i._length && (i.setXYAt(i.v[g][0], i.v[g][1], "i", g), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)),
                    u > e.e)
                )
                    break;
                r < d - 1 && ((i = shapePool.newElement()), (y = !0), m.push(i), (a = 0));
            }
            return m;
        }),
        extendPrototype([ShapeModifier], PuckerAndBloatModifier),
        (PuckerAndBloatModifier.prototype.initModifierProperties = function (t, e) {
            (this.getValue = this.processKeys), (this.amount = PropertyFactory.getProp(t, e.a, 0, null, this)), (this._isAnimated = !!this.amount.effectsSequence.length);
        }),
        (PuckerAndBloatModifier.prototype.processPath = function (t, e) {
            for (var i = e / 100, r = [0, 0], n = t._length, s = 0, s = 0; s < n; s += 1) (r[0] += t.v[s][0]), (r[1] += t.v[s][1]);
            (r[0] /= n), (r[1] /= n);
            var a,
                o,
                l,
                h,
                p,
                c,
                f = shapePool.newElement();
            for (f.c = t.c, s = 0; s < n; s += 1)
                (a = t.v[s][0] + (r[0] - t.v[s][0]) * i),
                    (o = t.v[s][1] + (r[1] - t.v[s][1]) * i),
                    (l = t.o[s][0] + (r[0] - t.o[s][0]) * -i),
                    (h = t.o[s][1] + (r[1] - t.o[s][1]) * -i),
                    (p = t.i[s][0] + (r[0] - t.i[s][0]) * -i),
                    (c = t.i[s][1] + (r[1] - t.i[s][1]) * -i),
                    f.setTripleAt(a, o, l, h, p, c, s);
            return f;
        }),
        (PuckerAndBloatModifier.prototype.processShapes = function (t) {
            var e,
                i,
                r,
                n,
                s,
                a,
                o = this.shapes.length,
                l = this.amount.v;
            if (0 !== l)
                for (i = 0; i < o; i += 1) {
                    if (((a = (s = this.shapes[i]).localShapeCollection), s.shape._mdf || this._mdf || t))
                        for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, n = s.shape.paths._length, r = 0; r < n; r += 1) a.addShape(this.processPath(e[r], l));
                    s.shape.paths = s.localShapeCollection;
                }
            this.dynamicProperties.length || (this._mdf = !1);
        });
    var TransformPropertyFactory =
            ((LP = [0, 0]),
                (MP.prototype = {
                    applyToMatrix: function (t) {
                        var e = this._mdf;
                        this.iterateDynamicProperties(),
                            (this._mdf = this._mdf || e),
                        this.a && t.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                        this.s && t.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                        this.sk && t.skewFromAxis(-this.sk.v, this.sa.v),
                            this.r ? t.rotate(-this.r.v) : t.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                            this.data.p.s ? (this.data.p.z ? t.translate(this.px.v, this.py.v, -this.pz.v) : t.translate(this.px.v, this.py.v, 0)) : t.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
                    },
                    getValue: function (t) {
                        var e, i, r, n;
                        this.elem.globalData.frameId !== this.frameId &&
                        (this._isDirty && (this.precalculateMatrix(), (this._isDirty = !1)),
                            this.iterateDynamicProperties(),
                        (this._mdf || t) &&
                        (this.v.cloneFromProps(this.pre.props),
                        this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]),
                        this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]),
                        this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v),
                            this.r && this.appliedTransformations < 4
                                ? this.v.rotate(-this.r.v)
                                : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]),
                        this.autoOriented &&
                        ((n = this.elem.globalData.frameRate),
                            this.p && this.p.keyframes && this.p.getValueAtTime
                                ? (i =
                                    this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t
                                        ? ((e = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / n, 0)), this.p.getValueAtTime(this.p.keyframes[0].t / n, 0))
                                        : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t
                                            ? ((e = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / n, 0)), this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / n, 0))
                                            : ((e = this.p.pv), this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / n, this.p.offsetTime)))
                                : this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime
                                    ? ((e = []),
                                        (i = []),
                                        (r = this.px),
                                        (t = this.py),
                                        r._caching.lastFrame + r.offsetTime <= r.keyframes[0].t
                                            ? ((e[0] = r.getValueAtTime((r.keyframes[0].t + 0.01) / n, 0)),
                                                (e[1] = t.getValueAtTime((t.keyframes[0].t + 0.01) / n, 0)),
                                                (i[0] = r.getValueAtTime(r.keyframes[0].t / n, 0)),
                                                (i[1] = t.getValueAtTime(t.keyframes[0].t / n, 0)))
                                            : r._caching.lastFrame + r.offsetTime >= r.keyframes[r.keyframes.length - 1].t
                                                ? ((e[0] = r.getValueAtTime(r.keyframes[r.keyframes.length - 1].t / n, 0)),
                                                    (e[1] = t.getValueAtTime(t.keyframes[t.keyframes.length - 1].t / n, 0)),
                                                    (i[0] = r.getValueAtTime((r.keyframes[r.keyframes.length - 1].t - 0.01) / n, 0)),
                                                    (i[1] = t.getValueAtTime((t.keyframes[t.keyframes.length - 1].t - 0.01) / n, 0)))
                                                : ((e = [r.pv, t.pv]),
                                                    (i[0] = r.getValueAtTime((r._caching.lastFrame + r.offsetTime - 0.01) / n, r.offsetTime)),
                                                    (i[1] = t.getValueAtTime((t._caching.lastFrame + t.offsetTime - 0.01) / n, t.offsetTime))))
                                    : (e = i = LP),
                            this.v.rotate(-Math.atan2(e[1] - i[1], e[0] - i[0]))),
                            this.data.p && this.data.p.s ? (this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0)) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])),
                            (this.frameId = this.elem.globalData.frameId));
                    },
                    precalculateMatrix: function () {
                        if (
                            ((this.appliedTransformations = 0),
                                this.pre.reset(),
                            !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), (this.appliedTransformations = 1), !this.s.effectsSequence.length))
                        ) {
                            if ((this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), (this.appliedTransformations = 2), this.sk)) {
                                if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                                this.pre.skewFromAxis(-this.sk.v, this.sa.v), (this.appliedTransformations = 3);
                            }
                            this.r
                                ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), (this.appliedTransformations = 4))
                                : this.rz.effectsSequence.length ||
                                this.ry.effectsSequence.length ||
                                this.rx.effectsSequence.length ||
                                this.or.effectsSequence.length ||
                                (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), (this.appliedTransformations = 4));
                        }
                    },
                    autoOrient: function () {
                    },
                }),
                extendPrototype([DynamicPropertyContainer], MP),
                (MP.prototype.addDynamicProperty = function (t) {
                    this._addDynamicProperty(t), this.elem.addDynamicProperty(t), (this._isDirty = !0);
                }),
                (MP.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty),
                {
                    getTransformProperty: function (t, e, i) {
                        return new MP(t, e, i);
                    },
                }),
        LP;

    function MP(t, e, i) {
        if (
            ((this.elem = t),
                (this.frameId = -1),
                (this.propType = "transform"),
                (this.data = e),
                (this.v = new Matrix()),
                (this.pre = new Matrix()),
                (this.appliedTransformations = 0),
                this.initDynamicPropertyContainer(i || t),
                e.p && e.p.s
                    ? ((this.px = PropertyFactory.getProp(t, e.p.x, 0, 0, this)), (this.py = PropertyFactory.getProp(t, e.p.y, 0, 0, this)), e.p.z && (this.pz = PropertyFactory.getProp(t, e.p.z, 0, 0, this)))
                    : (this.p = PropertyFactory.getProp(t, e.p || {k: [0, 0, 0]}, 1, 0, this)),
                e.rx)
        ) {
            if (((this.rx = PropertyFactory.getProp(t, e.rx, 0, degToRads, this)), (this.ry = PropertyFactory.getProp(t, e.ry, 0, degToRads, this)), (this.rz = PropertyFactory.getProp(t, e.rz, 0, degToRads, this)), e.or.k[0].ti))
                for (var r = e.or.k.length, n = 0; n < r; n += 1) (e.or.k[n].to = null), (e.or.k[n].ti = null);
            (this.or = PropertyFactory.getProp(t, e.or, 1, degToRads, this)), (this.or.sh = !0);
        } else this.r = PropertyFactory.getProp(t, e.r || {k: 0}, 0, degToRads, this);
        e.sk && ((this.sk = PropertyFactory.getProp(t, e.sk, 0, degToRads, this)), (this.sa = PropertyFactory.getProp(t, e.sa, 0, degToRads, this))),
            (this.a = PropertyFactory.getProp(t, e.a || {k: [0, 0, 0]}, 1, 0, this)),
            (this.s = PropertyFactory.getProp(t, e.s || {k: [100, 100, 100]}, 1, 0.01, this)),
            e.o ? (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, t)) : (this.o = {_mdf: !1, v: 1}),
            (this._isDirty = !0),
        this.dynamicProperties.length || this.getValue(!0);
    }

    function RepeaterModifier() {
    }

    function RoundCornersModifier() {
    }

    function floatEqual(t, e) {
        return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e));
    }

    function floatZero(t) {
        return Math.abs(t) <= 1e-5;
    }

    function lerp(t, e, i) {
        return t * (1 - i) + e * i;
    }

    function lerpPoint(t, e, i) {
        return [lerp(t[0], e[0], i), lerp(t[1], e[1], i)];
    }

    function quadRoots(t, e, i) {
        if (0 === t) return [];
        i = e * e - 4 * t * i;
        if (i < 0) return [];
        e = -e / (2 * t);
        if (0 == i) return [e];
        t = Math.sqrt(i) / (2 * t);
        return [e - t, e + t];
    }

    function polynomialCoefficients(t, e, i, r) {
        return [3 * e - t - 3 * i + r, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t];
    }

    function singlePoint(t) {
        return new PolynomialBezier(t, t, t, t, !1);
    }

    function PolynomialBezier(t, e, i, r, n) {
        n && pointEqual(t, e) && (e = lerpPoint(t, r, 1 / 3)), n && pointEqual(i, r) && (i = lerpPoint(t, r, 2 / 3));
        var s = polynomialCoefficients(t[0], e[0], i[0], r[0]),
            n = polynomialCoefficients(t[1], e[1], i[1], r[1]);
        (this.a = [s[0], n[0]]), (this.b = [s[1], n[1]]), (this.c = [s[2], n[2]]), (this.d = [s[3], n[3]]), (this.points = [t, e, i, r]);
    }

    function extrema(t, e) {
        var i,
            r = t.points[0][e],
            n = t.points[t.points.length - 1][e];
        n < r && ((i = n), (n = r), (r = i));
        for (var s, a = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), o = 0; o < a.length; o += 1) 0 < a[o] && a[o] < 1 && ((s = t.point(a[o])[e]) < r ? (r = s) : n < s && (n = s));
        return {min: r, max: n};
    }

    function intersectData(t, e, i) {
        var r = t.boundingBox();
        return {cx: r.cx, cy: r.cy, width: r.width, height: r.height, bez: t, t: (e + i) / 2, t1: e, t2: i};
    }

    function splitData(t) {
        var e = t.bez.split(0.5);
        return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)];
    }

    function boxIntersect(t, e) {
        return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height;
    }

    function intersectsImpl(t, e, i, r, n, s) {
        boxIntersect(t, e) &&
        (s <= i || (t.width <= r && t.height <= r && e.width <= r && e.height <= r)
            ? n.push([t.t, e.t])
            : ((t = splitData(t)),
                (e = splitData(e)),
                intersectsImpl(t[0], e[0], i + 1, r, n, s),
                intersectsImpl(t[0], e[1], i + 1, r, n, s),
                intersectsImpl(t[1], e[0], i + 1, r, n, s),
                intersectsImpl(t[1], e[1], i + 1, r, n, s)));
    }

    function crossProduct(t, e) {
        return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
    }

    function lineIntersection(t, e, i, r) {
        (t = [t[0], t[1], 1]), (e = [e[0], e[1], 1]), (i = [i[0], i[1], 1]), (r = [r[0], r[1], 1]), (r = crossProduct(crossProduct(t, e), crossProduct(i, r)));
        return floatZero(r[2]) ? null : [r[0] / r[2], r[1] / r[2]];
    }

    function polarOffset(t, e, i) {
        return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i];
    }

    function pointDistance(t, e) {
        return Math.hypot(t[0] - e[0], t[1] - e[1]);
    }

    function pointEqual(t, e) {
        return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1]);
    }

    function ZigZagModifier() {
    }

    function setPoint(t, e, i, r, n, s, a) {
        var o = i - Math.PI / 2,
            l = i + Math.PI / 2,
            h = e[0] + Math.cos(i) * r * n,
            n = e[1] - Math.sin(i) * r * n;
        t.setTripleAt(h, n, h + Math.cos(o) * s, n - Math.sin(o) * s, h + Math.cos(l) * a, n - Math.sin(l) * a, t.length());
    }

    function getPerpendicularVector(t, e) {
        (e = [e[0] - t[0], e[1] - t[1]]), (t = 0.5 * -Math.PI);
        return [Math.cos(t) * e[0] - Math.sin(t) * e[1], Math.sin(t) * e[0] + Math.cos(t) * e[1]];
    }

    function getProjectingAngle(t, e) {
        var i = 0 === e ? t.length() - 1 : e - 1,
            e = (e + 1) % t.length(),
            e = getPerpendicularVector(t.v[i], t.v[e]);
        return Math.atan2(0, 1) - Math.atan2(e[1], e[0]);
    }

    function zigZagCorner(t, e, i, r, n, s, a) {
        var o = getProjectingAngle(e, i),
            l = e.v[i % e._length],
            h = e.v[0 === i ? e._length - 1 : i - 1],
            p = e.v[(i + 1) % e._length],
            h = 2 === s ? Math.sqrt(Math.pow(l[0] - h[0], 2) + Math.pow(l[1] - h[1], 2)) : 0,
            p = 2 === s ? Math.sqrt(Math.pow(l[0] - p[0], 2) + Math.pow(l[1] - p[1], 2)) : 0;
        setPoint(t, e.v[i % e._length], o, a, r, p / (2 * (n + 1)), h / (2 * (n + 1)), s);
    }

    function zigZagSegment(t, e, i, r, n, s) {
        for (var a = 0; a < r; a += 1) {
            var o = (a + 1) / (r + 1),
                l = 2 === n ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0,
                h = e.normalAngle(o);
            setPoint(t, e.point(o), h, s, i, l / (2 * (r + 1)), l / (2 * (r + 1)), n), (s = -s);
        }
        return s;
    }

    function linearOffset(t, e, i) {
        var r = Math.atan2(e[0] - t[0], e[1] - t[1]);
        return [polarOffset(t, r, i), polarOffset(e, r, i)];
    }

    function offsetSegment(t, e) {
        var i = (a = linearOffset(t.points[0], t.points[1], e))[0],
            r = a[1],
            n = (a = linearOffset(t.points[1], t.points[2], e))[0],
            s = a[1],
            t = (a = linearOffset(t.points[2], t.points[3], e))[0],
            e = a[1],
            a = lineIntersection(i, r, n, s);
        null === a && (a = r);
        s = lineIntersection(t, e, n, s);
        return new PolynomialBezier(i, a, (s = null === s ? t : s), e);
    }

    function joinLines(t, e, i, r, n) {
        var s = e.points[3],
            a = i.points[0];
        if (3 === r) return s;
        if (pointEqual(s, a)) return s;
        if (2 === r) {
            var o = -e.tangentAngle(1),
                l = -i.tangentAngle(0) + Math.PI,
                r = lineIntersection(s, polarOffset(s, o + Math.PI / 2, 100), a, polarOffset(a, o + Math.PI / 2, 100)),
                r = r ? pointDistance(r, s) : pointDistance(s, a) / 2,
                o = polarOffset(s, o, 2 * r * roundCorner);
            return t.setXYAt(o[0], o[1], "o", t.length() - 1), (o = polarOffset(a, l, 2 * r * roundCorner)), t.setTripleAt(a[0], a[1], a[0], a[1], o[0], o[1], t.length()), a;
        }
        i = lineIntersection(pointEqual(s, e.points[2]) ? e.points[0] : e.points[2], s, a, pointEqual(a, i.points[1]) ? i.points[3] : i.points[1]);
        return i && pointDistance(i, s) < n ? (t.setTripleAt(i[0], i[1], i[0], i[1], i[0], i[1], t.length()), i) : s;
    }

    function getIntersection(t, e) {
        e = t.intersections(e);
        return e.length && floatEqual(e[0][0], 1) && e.shift(), e.length ? e[0] : null;
    }

    function pruneSegmentIntersection(t, e) {
        var i = t.slice(),
            r = e.slice(),
            n = getIntersection(t[t.length - 1], e[0]);
        return (
            n && ((i[t.length - 1] = t[t.length - 1].split(n[0])[0]), (r[0] = e[0].split(n[1])[1])),
                1 < t.length && 1 < e.length && (n = getIntersection(t[0], e[e.length - 1])) ? [[t[0].split(n[0])[0]], [e[e.length - 1].split(n[1])[1]]] : [i, r]
        );
    }

    function pruneIntersections(t) {
        for (var e, i = 1; i < t.length; i += 1) (e = pruneSegmentIntersection(t[i - 1], t[i])), (t[i - 1] = e[0]), (t[i] = e[1]);
        return 1 < t.length && ((e = pruneSegmentIntersection(t[t.length - 1], t[0])), (t[t.length - 1] = e[0]), (t[0] = e[1])), t;
    }

    function offsetSegmentSplit(t, e) {
        var i,
            r = t.inflectionPoints();
        if (0 === r.length) return [offsetSegment(t, e)];
        if (1 === r.length || floatEqual(r[1], 1)) return (n = (i = t.split(r[0]))[0]), (s = i[1]), [offsetSegment(n, e), offsetSegment(s, e)];
        var n = (i = t.split(r[0]))[0],
            r = (r[1] - r[0]) / (1 - r[0]),
            r = (i = i[1].split(r))[0],
            s = i[1];
        return [offsetSegment(n, e), offsetSegment(r, e), offsetSegment(s, e)];
    }

    function OffsetPathModifier() {
    }

    function getFontProperties(t) {
        for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", r = "normal", n = e.length, s = 0; s < n; s += 1)
            switch (e[s].toLowerCase()) {
                case "italic":
                    r = "italic";
                    break;
                case "bold":
                    i = "700";
                    break;
                case "black":
                    i = "900";
                    break;
                case "medium":
                    i = "500";
                    break;
                case "regular":
                case "normal":
                    i = "400";
                    break;
                case "light":
                case "thin":
                    i = "200";
            }
        return {style: r, weight: t.fWeight || i};
    }

    extendPrototype([ShapeModifier], RepeaterModifier),
        (RepeaterModifier.prototype.initModifierProperties = function (t, e) {
            (this.getValue = this.processKeys),
                (this.c = PropertyFactory.getProp(t, e.c, 0, null, this)),
                (this.o = PropertyFactory.getProp(t, e.o, 0, null, this)),
                (this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this)),
                (this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this)),
                (this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this)),
                (this.data = e),
            this.dynamicProperties.length || this.getValue(!0),
                (this._isAnimated = !!this.dynamicProperties.length),
                (this.pMatrix = new Matrix()),
                (this.rMatrix = new Matrix()),
                (this.sMatrix = new Matrix()),
                (this.tMatrix = new Matrix()),
                (this.matrix = new Matrix());
        }),
        (RepeaterModifier.prototype.applyTransforms = function (t, e, i, r, n, s) {
            var a = s ? -1 : 1,
                o = r.s.v[0] + (1 - r.s.v[0]) * (1 - n),
                l = r.s.v[1] + (1 - r.s.v[1]) * (1 - n);
            t.translate(r.p.v[0] * a * n, r.p.v[1] * a * n, r.p.v[2]),
                e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]),
                e.rotate(-r.r.v * a * n),
                e.translate(r.a.v[0], r.a.v[1], r.a.v[2]),
                i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]),
                i.scale(s ? 1 / o : o, s ? 1 / l : l),
                i.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
        }),
        (RepeaterModifier.prototype.init = function (t, e, i, r) {
            for (
                this.elem = t,
                    this.arr = e,
                    this.pos = i,
                    this.elemsData = r,
                    this._currentCopies = 0,
                    this._elements = [],
                    this._groups = [],
                    this.frameId = -1,
                    this.initDynamicPropertyContainer(t),
                    this.initModifierProperties(t, e[i]);
                0 < i;
            )
                --i, this._elements.unshift(e[i]);
            this.dynamicProperties.length ? (this.k = !0) : this.getValue(!0);
        }),
        (RepeaterModifier.prototype.resetElements = function (t) {
            for (var e = t.length, i = 0; i < e; i += 1) (t[i]._processed = !1), "gr" === t[i].ty && this.resetElements(t[i].it);
        }),
        (RepeaterModifier.prototype.cloneElements = function (t) {
            t = JSON.parse(JSON.stringify(t));
            return this.resetElements(t), t;
        }),
        (RepeaterModifier.prototype.changeGroupRender = function (t, e) {
            for (var i = t.length, r = 0; r < i; r += 1) (t[r]._render = e), "gr" === t[r].ty && this.changeGroupRender(t[r].it, e);
        }),
        (RepeaterModifier.prototype.processShapes = function (t) {
            var e,
                i,
                r,
                n,
                s,
                a = !1;
            if (this._mdf || t) {
                var o = Math.ceil(this.c.v);
                if (this._groups.length < o) {
                    for (; this._groups.length < o;) {
                        var l = {it: this.cloneElements(this._elements), ty: "gr"};
                        l.it.push({
                            a: {a: 0, ix: 1, k: [0, 0]},
                            nm: "Transform",
                            o: {a: 0, ix: 7, k: 100},
                            p: {a: 0, ix: 2, k: [0, 0]},
                            r: {
                                a: 1,
                                ix: 6,
                                k: [
                                    {s: 0, e: 0, t: 0},
                                    {s: 0, e: 0, t: 1},
                                ],
                            },
                            s: {a: 0, ix: 3, k: [100, 100]},
                            sa: {a: 0, ix: 5, k: 0},
                            sk: {a: 0, ix: 4, k: 0},
                            ty: "tr",
                        }),
                            this.arr.splice(0, 0, l),
                            this._groups.splice(0, 0, l),
                            (this._currentCopies += 1);
                    }
                    this.elem.reloadShapes(), (a = !0);
                }
                for (r = s = 0; r <= this._groups.length - 1; r += 1) {
                    var h = s < o;
                    (this._groups[r]._render = h),
                        this.changeGroupRender(this._groups[r].it, h),
                    h || (0 !== (h = (h = this.elemsData[r].it)[h.length - 1]).transform.op.v ? ((h.transform.op._mdf = !0), (h.transform.op.v = 0)) : (h.transform.op._mdf = !1)),
                        (s += 1);
                }
                this._currentCopies = o;
                var p = this.o.v,
                    t = p % 1,
                    c = 0 < p ? Math.floor(p) : Math.ceil(p),
                    f = this.pMatrix.props,
                    d = this.rMatrix.props,
                    u = this.sMatrix.props;
                this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
                var m,
                    y,
                    g = 0;
                if (0 < p) {
                    for (; g < c;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), (g += 1);
                    t && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, t, !1), (g += t));
                } else if (p < 0) {
                    for (; c < g;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), --g;
                    t && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -t, !0), (g -= t));
                }
                for (r = 1 === this.data.m ? 0 : this._currentCopies - 1, n = 1 === this.data.m ? 1 : -1, s = this._currentCopies; s;) {
                    if (
                        ((y = (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props).length),
                            (e[e.length - 1].transform.mProps._mdf = !0),
                            (e[e.length - 1].transform.op._mdf = !0),
                            (e[e.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1))),
                        0 !== g)
                    ) {
                        for (
                            ((0 !== r && 1 === n) || (r !== this._currentCopies - 1 && -1 === n)) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1),
                                this.matrix.transform(d[0], d[1], d[2], d[3], d[4], d[5], d[6], d[7], d[8], d[9], d[10], d[11], d[12], d[13], d[14], d[15]),
                                this.matrix.transform(u[0], u[1], u[2], u[3], u[4], u[5], u[6], u[7], u[8], u[9], u[10], u[11], u[12], u[13], u[14], u[15]),
                                this.matrix.transform(f[0], f[1], f[2], f[3], f[4], f[5], f[6], f[7], f[8], f[9], f[10], f[11], f[12], f[13], f[14], f[15]),
                                m = 0;
                            m < y;
                            m += 1
                        )
                            i[m] = this.matrix.props[m];
                        this.matrix.reset();
                    } else for (this.matrix.reset(), m = 0; m < y; m += 1) i[m] = this.matrix.props[m];
                    (g += 1), --s, (r += n);
                }
            } else
                for (s = this._currentCopies, r = 0, n = 1; s;)
                    (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props), (e[e.length - 1].transform.mProps._mdf = !1), (e[e.length - 1].transform.op._mdf = !1), --s, (r += n);
            return a;
        }),
        (RepeaterModifier.prototype.addShape = function () {
        }),
        extendPrototype([ShapeModifier], RoundCornersModifier),
        (RoundCornersModifier.prototype.initModifierProperties = function (t, e) {
            (this.getValue = this.processKeys), (this.rd = PropertyFactory.getProp(t, e.r, 0, null, this)), (this._isAnimated = !!this.rd.effectsSequence.length);
        }),
        (RoundCornersModifier.prototype.processPath = function (t, e) {
            var i = shapePool.newElement();
            i.c = t.c;
            for (var r, n, s, a, o, l, h, p, c, f, d, u, m = t._length, y = 0, g = 0; g < m; g += 1)
                (r = t.v[g]),
                    (s = t.o[g]),
                    (n = t.i[g]),
                    r[0] === s[0] && r[1] === s[1] && r[0] === n[0] && r[1] === n[1]
                        ? (0 !== g && g !== m - 1) || t.c
                            ? ((a = 0 === g ? t.v[m - 1] : t.v[g - 1]),
                                (l = (o = Math.sqrt(Math.pow(r[0] - a[0], 2) + Math.pow(r[1] - a[1], 2))) ? Math.min(o / 2, e) / o : 0),
                                (h = d = r[0] + (a[0] - r[0]) * l),
                                (p = u = r[1] - (r[1] - a[1]) * l),
                                (c = h - (h - r[0]) * roundCorner),
                                (f = p - (p - r[1]) * roundCorner),
                                i.setTripleAt(h, p, c, f, d, u, y),
                                (y += 1),
                                (a = g === m - 1 ? t.v[0] : t.v[g + 1]),
                                (l = (o = Math.sqrt(Math.pow(r[0] - a[0], 2) + Math.pow(r[1] - a[1], 2))) ? Math.min(o / 2, e) / o : 0),
                                (h = c = r[0] + (a[0] - r[0]) * l),
                                (p = f = r[1] + (a[1] - r[1]) * l),
                                (d = h - (h - r[0]) * roundCorner),
                                (u = p - (p - r[1]) * roundCorner),
                                i.setTripleAt(h, p, c, f, d, u, y))
                            : i.setTripleAt(r[0], r[1], s[0], s[1], n[0], n[1], y)
                        : i.setTripleAt(t.v[g][0], t.v[g][1], t.o[g][0], t.o[g][1], t.i[g][0], t.i[g][1], y),
                    (y += 1);
            return i;
        }),
        (RoundCornersModifier.prototype.processShapes = function (t) {
            var e,
                i,
                r,
                n,
                s,
                a,
                o = this.shapes.length,
                l = this.rd.v;
            if (0 !== l)
                for (i = 0; i < o; i += 1) {
                    if (((a = (s = this.shapes[i]).localShapeCollection), s.shape._mdf || this._mdf || t))
                        for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, n = s.shape.paths._length, r = 0; r < n; r += 1) a.addShape(this.processPath(e[r], l));
                    s.shape.paths = s.localShapeCollection;
                }
            this.dynamicProperties.length || (this._mdf = !1);
        }),
        (PolynomialBezier.prototype.point = function (t) {
            return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]];
        }),
        (PolynomialBezier.prototype.derivative = function (t) {
            return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]];
        }),
        (PolynomialBezier.prototype.tangentAngle = function (t) {
            t = this.derivative(t);
            return Math.atan2(t[1], t[0]);
        }),
        (PolynomialBezier.prototype.normalAngle = function (t) {
            t = this.derivative(t);
            return Math.atan2(t[0], t[1]);
        }),
        (PolynomialBezier.prototype.inflectionPoints = function () {
            var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
            if (floatZero(t)) return [];
            var e = (-0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1])) / t,
                t = e * e - ((1 / 3) * (this.b[1] * this.c[0] - this.b[0] * this.c[1])) / t;
            if (t < 0) return [];
            t = Math.sqrt(t);
            return floatZero(t)
                ? 0 < t && t < 1
                    ? [e]
                    : []
                : [e - t, e + t].filter(function (t) {
                    return 0 < t && t < 1;
                });
        }),
        (PolynomialBezier.prototype.split = function (t) {
            if (t <= 0) return [singlePoint(this.points[0]), this];
            if (1 <= t) return [this, singlePoint(this.points[this.points.length - 1])];
            var e = lerpPoint(this.points[0], this.points[1], t),
                i = lerpPoint(this.points[1], this.points[2], t),
                r = lerpPoint(this.points[2], this.points[3], t),
                n = lerpPoint(e, i, t),
                i = lerpPoint(i, r, t),
                t = lerpPoint(n, i, t);
            return [new PolynomialBezier(this.points[0], e, n, t, !0), new PolynomialBezier(t, i, r, this.points[3], !0)];
        }),
        (PolynomialBezier.prototype.bounds = function () {
            return {x: extrema(this, 0), y: extrema(this, 1)};
        }),
        (PolynomialBezier.prototype.boundingBox = function () {
            var t = this.bounds();
            return {
                left: t.x.min,
                right: t.x.max,
                top: t.y.min,
                bottom: t.y.max,
                width: t.x.max - t.x.min,
                height: t.y.max - t.y.min,
                cx: (t.x.max + t.x.min) / 2,
                cy: (t.y.max + t.y.min) / 2
            };
        }),
        (PolynomialBezier.prototype.intersections = function (t, e, i) {
            void 0 === e && (e = 2), void 0 === i && (i = 7);
            var r = [];
            return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, r, i), r;
        }),
        (PolynomialBezier.shapeSegment = function (t, e) {
            var i = (e + 1) % t.length();
            return new PolynomialBezier(t.v[e], t.o[e], t.i[i], t.v[i], !0);
        }),
        (PolynomialBezier.shapeSegmentInverted = function (t, e) {
            var i = (e + 1) % t.length();
            return new PolynomialBezier(t.v[i], t.i[i], t.o[e], t.v[e], !0);
        }),
        extendPrototype([ShapeModifier], ZigZagModifier),
        (ZigZagModifier.prototype.initModifierProperties = function (t, e) {
            (this.getValue = this.processKeys),
                (this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this)),
                (this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this)),
                (this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this)),
                (this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length);
        }),
        (ZigZagModifier.prototype.processPath = function (t, e, i, r) {
            var n = t._length,
                s = shapePool.newElement();
            if (((s.c = t.c), t.c || --n, 0 === n)) return s;
            var a = -1,
                o = PolynomialBezier.shapeSegment(t, 0);
            zigZagCorner(s, t, 0, e, i, r, a);
            for (var l = 0; l < n; l += 1) (a = zigZagSegment(s, o, e, i, r, -a)), (o = l !== n - 1 || t.c ? PolynomialBezier.shapeSegment(t, (l + 1) % n) : null), zigZagCorner(s, t, l + 1, e, i, r, a);
            return s;
        }),
        (ZigZagModifier.prototype.processShapes = function (t) {
            var e,
                i,
                r,
                n,
                s,
                a,
                o = this.shapes.length,
                l = this.amplitude.v,
                h = Math.max(0, Math.round(this.frequency.v)),
                p = this.pointsType.v;
            if (0 !== l)
                for (i = 0; i < o; i += 1) {
                    if (((a = (s = this.shapes[i]).localShapeCollection), s.shape._mdf || this._mdf || t))
                        for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, n = s.shape.paths._length, r = 0; r < n; r += 1) a.addShape(this.processPath(e[r], l, h, p));
                    s.shape.paths = s.localShapeCollection;
                }
            this.dynamicProperties.length || (this._mdf = !1);
        }),
        extendPrototype([ShapeModifier], OffsetPathModifier),
        (OffsetPathModifier.prototype.initModifierProperties = function (t, e) {
            (this.getValue = this.processKeys),
                (this.amount = PropertyFactory.getProp(t, e.a, 0, null, this)),
                (this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this)),
                (this.lineJoin = e.lj),
                (this._isAnimated = 0 !== this.amount.effectsSequence.length);
        }),
        (OffsetPathModifier.prototype.processPath = function (t, e, i, r) {
            var n = shapePool.newElement();
            n.c = t.c;
            var s,
                a,
                o = t.length();
            t.c || --o;
            for (var l = [], h = 0; h < o; h += 1) (a = PolynomialBezier.shapeSegment(t, h)), l.push(offsetSegmentSplit(a, e));
            if (!t.c) for (h = o - 1; 0 <= h; --h) (a = PolynomialBezier.shapeSegmentInverted(t, h)), l.push(offsetSegmentSplit(a, e));
            var l = pruneIntersections(l),
                p = null,
                c = null;
            for (h = 0; h < l.length; h += 1) {
                var f = l[h];
                for (c && (p = joinLines(n, c, f[0], i, r)), c = f[f.length - 1], s = 0; s < f.length; s += 1)
                    (a = f[s]),
                        p && pointEqual(a.points[0], p)
                            ? n.setXYAt(a.points[1][0], a.points[1][1], "o", n.length() - 1)
                            : n.setTripleAt(a.points[0][0], a.points[0][1], a.points[1][0], a.points[1][1], a.points[0][0], a.points[0][1], n.length()),
                        n.setTripleAt(a.points[3][0], a.points[3][1], a.points[3][0], a.points[3][1], a.points[2][0], a.points[2][1], n.length()),
                        (p = a.points[3]);
            }
            return l.length && joinLines(n, c, l[0][0], i, r), n;
        }),
        (OffsetPathModifier.prototype.processShapes = function (t) {
            var e,
                i,
                r,
                n,
                s,
                a,
                o = this.shapes.length,
                l = this.amount.v,
                h = this.miterLimit.v,
                p = this.lineJoin;
            if (0 !== l)
                for (i = 0; i < o; i += 1) {
                    if (((a = (s = this.shapes[i]).localShapeCollection), s.shape._mdf || this._mdf || t))
                        for (a.releaseShapes(), s.shape._mdf = !0, e = s.shape.paths.shapes, n = s.shape.paths._length, r = 0; r < n; r += 1) a.addShape(this.processPath(e[r], l, p, h));
                    s.shape.paths = s.localShapeCollection;
                }
            this.dynamicProperties.length || (this._mdf = !1);
        });
    var FontManager =
            ((WV = {w: 0, size: 0, shapes: [], data: {shapes: []}}),
                (XV = (XV = []).concat([
                    2304,
                    2305,
                    2306,
                    2307,
                    2362,
                    2363,
                    2364,
                    2364,
                    2366,
                    2367,
                    2368,
                    2369,
                    2370,
                    2371,
                    2372,
                    2373,
                    2374,
                    2375,
                    2376,
                    2377,
                    2378,
                    2379,
                    2380,
                    2381,
                    2382,
                    2383,
                    2387,
                    2388,
                    2389,
                    2390,
                    2391,
                    2402,
                    2403,
                ])),
                (ZV = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"]),
                (cW.isModifier = function (t, e) {
                    e = t.toString(16) + e.toString(16);
                    return -1 !== ZV.indexOf(e);
                }),
                (cW.isZeroWidthJoiner = function (t) {
                    return 8205 === t;
                }),
                (cW.isFlagEmoji = function (t) {
                    return bW(t.substr(0, 2)) && bW(t.substr(2, 2));
                }),
                (cW.isRegionalCode = bW),
                (cW.isCombinedCharacter = function (t) {
                    return -1 !== XV.indexOf(t);
                }),
                (cW.isRegionalFlag = function (t, e) {
                    var i = aW(t.substr(e, 2));
                    if (127988 !== i) return !1;
                    var r = 0;
                    for (e += 2; r < 5;) {
                        if ((i = aW(t.substr(e, 2))) < 917601 || 917626 < i) return !1;
                        (r += 1), (e += 2);
                    }
                    return 917631 === aW(t.substr(e, 2));
                }),
                (cW.isVariationSelector = function (t) {
                    return 65039 === t;
                }),
                (cW.BLACK_FLAG_CODE_POINT = 127988),
                (cW.prototype = {
                    addChars: function (t) {
                        if (t) {
                            this.chars || (this.chars = []);
                            for (var e, i, r = t.length, n = this.chars.length, s = 0; s < r; s += 1) {
                                for (e = 0, i = !1; e < n;) this.chars[e].style === t[s].style && this.chars[e].fFamily === t[s].fFamily && this.chars[e].ch === t[s].ch && (i = !0), (e += 1);
                                i || (this.chars.push(t[s]), (n += 1));
                            }
                        }
                    },
                    addFonts: function (t, e) {
                        if (t) {
                            if (this.chars) return (this.isLoaded = !0), void (this.fonts = t.list);
                            if (!document.body)
                                return (
                                    (this.isLoaded = !0),
                                        t.list.forEach(function (t) {
                                            (t.helper = _V(t)), (t.cache = {});
                                        }),
                                        void (this.fonts = t.list)
                                );
                            for (var i = t.list, r = i.length, n = r, s = 0; s < r; s += 1) {
                                var a,
                                    o,
                                    l,
                                    h,
                                    p = !0;
                                if (((i[s].loaded = !1), (i[s].monoCase = $V(i[s].fFamily, "monospace")), (i[s].sansCase = $V(i[s].fFamily, "sans-serif")), i[s].fPath)) {
                                    if ("p" === i[s].fOrigin || 3 === i[s].origin)
                                        (p = !(0 < (a = document.querySelectorAll('style[f-forigin="p"][f-family="' + i[s].fFamily + '"], style[f-origin="3"][f-family="' + i[s].fFamily + '"]')).length) && p) &&
                                        ((l = createTag("style")).setAttribute("f-forigin", i[s].fOrigin),
                                            l.setAttribute("f-origin", i[s].origin),
                                            l.setAttribute("f-family", i[s].fFamily),
                                            (l.type = "text/css"),
                                            (l.innerText = "@font-face {font-family: " + i[s].fFamily + "; font-style: normal; src: url('" + i[s].fPath + "');}"),
                                            e.appendChild(l));
                                    else if ("g" === i[s].fOrigin || 1 === i[s].origin) {
                                        for (a = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), o = 0; o < a.length; o += 1) -1 !== a[o].href.indexOf(i[s].fPath) && (p = !1);
                                        p &&
                                        ((h = createTag("link")).setAttribute("f-forigin", i[s].fOrigin),
                                            h.setAttribute("f-origin", i[s].origin),
                                            (h.type = "text/css"),
                                            (h.rel = "stylesheet"),
                                            (h.href = i[s].fPath),
                                            document.body.appendChild(h));
                                    } else if ("t" === i[s].fOrigin || 2 === i[s].origin) {
                                        for (a = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), o = 0; o < a.length; o += 1) i[s].fPath === a[o].src && (p = !1);
                                        p &&
                                        ((h = createTag("link")).setAttribute("f-forigin", i[s].fOrigin),
                                            h.setAttribute("f-origin", i[s].origin),
                                            h.setAttribute("rel", "stylesheet"),
                                            h.setAttribute("href", i[s].fPath),
                                            e.appendChild(h));
                                    }
                                } else (i[s].loaded = !0), --n;
                                (i[s].helper = _V(i[s], e)), (i[s].cache = {}), this.fonts.push(i[s]);
                            }
                            0 === n ? (this.isLoaded = !0) : setTimeout(this.checkLoadedFonts.bind(this), 100);
                        } else this.isLoaded = !0;
                    },
                    getCharData: function (t, e, i) {
                        for (var r = 0, n = this.chars.length; r < n;) {
                            if (this.chars[r].ch === t && this.chars[r].style === e && this.chars[r].fFamily === i) return this.chars[r];
                            r += 1;
                        }
                        return (
                            (("string" == typeof t && 13 !== t.charCodeAt(0)) || !t) && console && console.warn && !this._warned && ((this._warned = !0), console.warn("Missing character from exported characters list: ", t, e, i)), WV
                        );
                    },
                    getFontByName: function (t) {
                        for (var e = 0, i = this.fonts.length; e < i;) {
                            if (this.fonts[e].fName === t) return this.fonts[e];
                            e += 1;
                        }
                        return this.fonts[0];
                    },
                    measureText: function (t, e, i) {
                        var r,
                            n,
                            s = this.getFontByName(e),
                            a = t;
                        return s.cache[a] || ((r = s.helper), " " === t ? ((n = r.measureText("|" + t + "|")), (e = r.measureText("||")), (s.cache[a] = (n - e) / 100)) : (s.cache[a] = r.measureText(t) / 100)), s.cache[a] * i;
                    },
                    checkLoadedFonts: function () {
                        for (var t, e, i = this.fonts.length, r = i, n = 0; n < i; n += 1)
                            this.fonts[n].loaded
                                ? --r
                                : "n" === this.fonts[n].fOrigin || 0 === this.fonts[n].origin
                                    ? (this.fonts[n].loaded = !0)
                                    : ((t = this.fonts[n].monoCase.node),
                                        (e = this.fonts[n].monoCase.w),
                                        t.offsetWidth !== e ? (--r, (this.fonts[n].loaded = !0)) : ((t = this.fonts[n].sansCase.node), (e = this.fonts[n].sansCase.w), t.offsetWidth !== e && (--r, (this.fonts[n].loaded = !0))),
                                    this.fonts[n].loaded && (this.fonts[n].sansCase.parent.parentNode.removeChild(this.fonts[n].sansCase.parent), this.fonts[n].monoCase.parent.parentNode.removeChild(this.fonts[n].monoCase.parent)));
                        0 !== r && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
                    },
                    setIsLoaded: function () {
                        this.isLoaded = !0;
                    },
                }),
                cW),
        WV,
        XV,
        ZV;

    function $V(n, t) {
        var e = createTag("span");
        e.setAttribute("aria-hidden", !0), (e.style.fontFamily = t);
        var i = createTag("span");
        (i.innerText = "giItT1WQy@!-/#"),
            (e.style.position = "absolute"),
            (e.style.left = "-10000px"),
            (e.style.top = "-10000px"),
            (e.style.fontSize = "300px"),
            (e.style.fontVariant = "normal"),
            (e.style.fontStyle = "normal"),
            (e.style.fontWeight = "normal"),
            (e.style.letterSpacing = "0"),
            e.appendChild(i),
            document.body.appendChild(e);
        var r = i.offsetWidth;
        return (
            (i.style.fontFamily =
                (function () {
                    for (var t = n.split(","), e = t.length, i = [], r = 0; r < e; r += 1) "sans-serif" !== t[r] && "monospace" !== t[r] && i.push(t[r]);
                    return i.join(",");
                })() +
                ", " +
                t),
                {node: i, w: r, parent: e}
        );
    }

    function _V(t, e) {
        var i,
            r = document.body && e ? "svg" : "canvas",
            n = getFontProperties(t),
            s =
                "svg" == r
                    ? (((i = createNS("text")).style.fontSize = "100px"),
                        i.setAttribute("font-family", t.fFamily),
                        i.setAttribute("font-style", n.style),
                        i.setAttribute("font-weight", n.weight),
                        (i.textContent = "1"),
                        t.fClass ? ((i.style.fontFamily = "inherit"), i.setAttribute("class", t.fClass)) : (i.style.fontFamily = t.fFamily),
                        e.appendChild(i),
                        i)
                    : (((i = new OffscreenCanvas(500, 500).getContext("2d")).font = n.style + " " + n.weight + " 100px " + t.fFamily), i);
        return {
            measureText: function (t) {
                return "svg" == r ? ((s.textContent = t), s.getComputedTextLength()) : s.measureText(t).width;
            },
        };
    }

    function aW(t) {
        var e = 0,
            i = t.charCodeAt(0);
        return 55296 <= i && i <= 56319 && 56320 <= (t = t.charCodeAt(1)) && t <= 57343 && (e = 1024 * (i - 55296) + t - 56320 + 65536), e;
    }

    function bW(t) {
        t = aW(t);
        return 127462 <= t && t <= 127487;
    }

    function cW() {
        (this.fonts = []),
            (this.chars = null),
            (this.typekitLoaded = 0),
            (this.isLoaded = !1),
            (this._warned = !1),
            (this.initTime = Date.now()),
            (this.setIsLoadedBinded = this.setIsLoaded.bind(this)),
            (this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this));
    }

    function SlotManager(t) {
        this.animationData = t;
    }

    function slotFactory(t) {
        return new SlotManager(t);
    }

    function RenderableElement() {
    }

    (SlotManager.prototype.getProp = function (t) {
        return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t;
    }),
        (RenderableElement.prototype = {
            initRenderable: function () {
                (this.isInRange = !1), (this.hidden = !1), (this.isTransparent = !1), (this.renderableComponents = []);
            },
            addRenderableComponent: function (t) {
                -1 === this.renderableComponents.indexOf(t) && this.renderableComponents.push(t);
            },
            removeRenderableComponent: function (t) {
                -1 !== this.renderableComponents.indexOf(t) && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
            },
            prepareRenderableFrame: function (t) {
                this.checkLayerLimits(t);
            },
            checkTransparency: function () {
                this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && ((this.isTransparent = !0), this.hide()) : this.isTransparent && ((this.isTransparent = !1), this.show());
            },
            checkLayerLimits: function (t) {
                this.data.ip - this.data.st <= t && this.data.op - this.data.st > t
                    ? !0 !== this.isInRange && ((this.globalData._mdf = !0), (this._mdf = !0), (this.isInRange = !0), this.show())
                    : !1 !== this.isInRange && ((this.globalData._mdf = !0), (this.isInRange = !1), this.hide());
            },
            renderRenderable: function () {
                for (var t = this.renderableComponents.length, e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame);
            },
            sourceRectAtTime: function () {
                return {top: 0, left: 0, width: 100, height: 100};
            },
            getLayerSize: function () {
                return 5 === this.data.ty ? {
                    w: this.data.textData.width,
                    h: this.data.textData.height
                } : {w: this.data.width, h: this.data.height};
            },
        });
    var getBlendMode =
            ((blendModeEnums = {
                0: "source-over",
                1: "multiply",
                2: "screen",
                3: "overlay",
                4: "darken",
                5: "lighten",
                6: "color-dodge",
                7: "color-burn",
                8: "hard-light",
                9: "soft-light",
                10: "difference",
                11: "exclusion",
                12: "hue",
                13: "saturation",
                14: "color",
                15: "luminosity",
            }),
                function (t) {
                    return blendModeEnums[t] || "";
                }),
        blendModeEnums;

    function SliderEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
    }

    function AngleEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
    }

    function ColorEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
    }

    function PointEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
    }

    function LayerIndexEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
    }

    function MaskIndexEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
    }

    function CheckboxEffect(t, e, i) {
        this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
    }

    function NoValueEffect() {
        this.p = {};
    }

    function EffectsManager(t, e) {
        var i = t.ef || [];
        this.effectElements = [];
        for (var r, n = i.length, s = 0; s < n; s += 1) (r = new GroupEffect(i[s], e)), this.effectElements.push(r);
    }

    function GroupEffect(t, e) {
        this.init(t, e);
    }

    function BaseElement() {
    }

    function FrameElement() {
    }

    function FootageElement(t, e, i) {
        this.initFrame(), this.initRenderable(), (this.assetData = e.getAssetData(t.refId)), (this.footageData = e.imageLoader.getAsset(this.assetData)), this.initBaseData(t, e, i);
    }

    function AudioElement(t, e, i) {
        this.initFrame(), this.initRenderable(), (this.assetData = e.getAssetData(t.refId)), this.initBaseData(t, e, i), (this._isPlaying = !1), (this._canPlay = !1);
        i = this.globalData.getAssetsPath(this.assetData);
        (this.audio = this.globalData.audioController.createAudio(i)),
            (this._currentTime = 0),
            this.globalData.audioController.addAudio(this),
            (this._volumeMultiplier = 1),
            (this._volume = 1),
            (this._previousVolume = null),
            (this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {_placeholder: !0}),
            (this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : {k: [100]}, 1, 0.01, this));
    }

    function BaseRenderer() {
    }

    extendPrototype([DynamicPropertyContainer], GroupEffect),
        (GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties),
        (GroupEffect.prototype.init = function (t, e) {
            (this.data = t), (this.effectElements = []), this.initDynamicPropertyContainer(e);
            for (var i, r = this.data.ef.length, n = this.data.ef, s = 0; s < r; s += 1) {
                switch (((i = null), n[s].ty)) {
                    case 0:
                        i = new SliderEffect(n[s], e, this);
                        break;
                    case 1:
                        i = new AngleEffect(n[s], e, this);
                        break;
                    case 2:
                        i = new ColorEffect(n[s], e, this);
                        break;
                    case 3:
                        i = new PointEffect(n[s], e, this);
                        break;
                    case 4:
                    case 7:
                        i = new CheckboxEffect(n[s], e, this);
                        break;
                    case 10:
                        i = new LayerIndexEffect(n[s], e, this);
                        break;
                    case 11:
                        i = new MaskIndexEffect(n[s], e, this);
                        break;
                    case 5:
                        i = new EffectsManager(n[s], e, this);
                        break;
                    default:
                        i = new NoValueEffect(n[s], e, this);
                }
                i && this.effectElements.push(i);
            }
        }),
        (BaseElement.prototype = {
            checkMasks: function () {
                if (!this.data.hasMask) return !1;
                for (var t = 0, e = this.data.masksProperties.length; t < e;) {
                    if ("n" !== this.data.masksProperties[t].mode && !1 !== this.data.masksProperties[t].cl) return !0;
                    t += 1;
                }
                return !1;
            },
            initExpressions: function () {
                var t,
                    e,
                    i,
                    r,
                    n = getExpressionInterfaces();
                n &&
                ((t = n("layer")),
                    (r = n("effects")),
                    (e = n("shape")),
                    (i = n("text")),
                    (n = n("comp")),
                    (this.layerInterface = t(this)),
                this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager),
                    (r = r.createEffectsInterface(this, this.layerInterface)),
                    this.layerInterface.registerEffectsInterface(r),
                    0 === this.data.ty || this.data.xt
                        ? (this.compInterface = n(this))
                        : 4 === this.data.ty
                            ? ((this.layerInterface.shapeInterface = e(this.shapesData, this.itemsData, this.layerInterface)), (this.layerInterface.content = this.layerInterface.shapeInterface))
                            : 5 === this.data.ty && ((this.layerInterface.textInterface = i(this)), (this.layerInterface.text = this.layerInterface.textInterface)));
            },
            setBlendMode: function () {
                var t = getBlendMode(this.data.bm);
                (this.baseElement || this.layerElement).style["mix-blend-mode"] = t;
            },
            initBaseData: function (t, e, i) {
                (this.globalData = e), (this.comp = i), (this.data = t), (this.layerId = createElementID()), this.data.sr || (this.data.sr = 1), (this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties));
            },
            getType: function () {
                return this.type;
            },
            sourceRectAtTime: function () {
            },
        }),
        (FrameElement.prototype = {
            initFrame: function () {
                (this._isFirstFrame = !1), (this.dynamicProperties = []), (this._mdf = !1);
            },
            prepareProperties: function (t, e) {
                for (var i = this.dynamicProperties.length, r = 0; r < i; r += 1)
                    (e || (this._isParent && "transform" === this.dynamicProperties[r].propType)) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && ((this.globalData._mdf = !0), (this._mdf = !0)));
            },
            addDynamicProperty: function (t) {
                -1 === this.dynamicProperties.indexOf(t) && this.dynamicProperties.push(t);
            },
        }),
        (FootageElement.prototype.prepareFrame = function () {
        }),
        extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement),
        (FootageElement.prototype.getBaseElement = function () {
            return null;
        }),
        (FootageElement.prototype.renderFrame = function () {
        }),
        (FootageElement.prototype.destroy = function () {
        }),
        (FootageElement.prototype.initExpressions = function () {
            var t = getExpressionInterfaces();
            t && ((t = t("footage")), (this.layerInterface = t(this)));
        }),
        (FootageElement.prototype.getFootageData = function () {
            return this.footageData;
        }),
        (AudioElement.prototype.prepareFrame = function (t) {
            this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder ? (this._currentTime = t / this.data.sr) : ((e = this.tm.v), (this._currentTime = e)), (this._volume = this.lv.v[0]);
            var e = this._volume * this._volumeMultiplier;
            this._previousVolume !== e && ((this._previousVolume = e), this.audio.volume(e));
        }),
        extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement),
        (AudioElement.prototype.renderFrame = function () {
            this.isInRange &&
            this._canPlay &&
            (this._isPlaying
                ? (!this.audio.playing() || 0.1 < Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek())) && this.audio.seek(this._currentTime / this.globalData.frameRate)
                : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), (this._isPlaying = !0)));
        }),
        (AudioElement.prototype.show = function () {
        }),
        (AudioElement.prototype.hide = function () {
            this.audio.pause(), (this._isPlaying = !1);
        }),
        (AudioElement.prototype.pause = function () {
            this.audio.pause(), (this._isPlaying = !1), (this._canPlay = !1);
        }),
        (AudioElement.prototype.resume = function () {
            this._canPlay = !0;
        }),
        (AudioElement.prototype.setRate = function (t) {
            this.audio.rate(t);
        }),
        (AudioElement.prototype.volume = function (t) {
            (this._volumeMultiplier = t), (this._previousVolume = t * this._volume), this.audio.volume(this._previousVolume);
        }),
        (AudioElement.prototype.getBaseElement = function () {
            return null;
        }),
        (AudioElement.prototype.destroy = function () {
        }),
        (AudioElement.prototype.sourceRectAtTime = function () {
        }),
        (AudioElement.prototype.initExpressions = function () {
        }),
        (BaseRenderer.prototype.checkLayers = function (t) {
            var e,
                i,
                r = this.layers.length;
            for (this.completeLayers = !0, e = r - 1; 0 <= e; --e)
                this.elements[e] || ((i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e)), (this.completeLayers = !!this.elements[e] && this.completeLayers);
            this.checkPendingElements();
        }),
        (BaseRenderer.prototype.createItem = function (t) {
            switch (t.ty) {
                case 2:
                    return this.createImage(t);
                case 0:
                    return this.createComp(t);
                case 1:
                    return this.createSolid(t);
                case 3:
                default:
                    return this.createNull(t);
                case 4:
                    return this.createShape(t);
                case 5:
                    return this.createText(t);
                case 6:
                    return this.createAudio(t);
                case 13:
                    return this.createCamera(t);
                case 15:
                    return this.createFootage(t);
            }
        }),
        (BaseRenderer.prototype.createCamera = function () {
            throw new Error("You're using a 3d camera. Try the html renderer.");
        }),
        (BaseRenderer.prototype.createAudio = function (t) {
            return new AudioElement(t, this.globalData, this);
        }),
        (BaseRenderer.prototype.createFootage = function (t) {
            return new FootageElement(t, this.globalData, this);
        }),
        (BaseRenderer.prototype.buildAllItems = function () {
            for (var t = this.layers.length, e = 0; e < t; e += 1) this.buildItem(e);
            this.checkPendingElements();
        }),
        (BaseRenderer.prototype.includeLayers = function (t) {
            this.completeLayers = !1;
            for (var e, i = t.length, r = this.layers.length, n = 0; n < i; n += 1)
                for (e = 0; e < r;) {
                    if (this.layers[e].id === t[n].id) {
                        this.layers[e] = t[n];
                        break;
                    }
                    e += 1;
                }
        }),
        (BaseRenderer.prototype.setProjectInterface = function (t) {
            this.globalData.projectInterface = t;
        }),
        (BaseRenderer.prototype.initItems = function () {
            this.globalData.progressiveLoad || this.buildAllItems();
        }),
        (BaseRenderer.prototype.buildElementParenting = function (t, e, i) {
            for (var r = this.elements, n = this.layers, s = 0, a = n.length; s < a;)
                n[s].ind == e &&
                (r[s] && !0 !== r[s] ? (i.push(r[s]), r[s].setAsParent(), void 0 !== n[s].parent ? this.buildElementParenting(t, n[s].parent, i) : t.setHierarchy(i)) : (this.buildItem(s), this.addPendingElement(t))),
                    (s += 1);
        }),
        (BaseRenderer.prototype.addPendingElement = function (t) {
            this.pendingElements.push(t);
        }),
        (BaseRenderer.prototype.searchExtraCompositions = function (t) {
            for (var e, i = t.length, r = 0; r < i; r += 1) t[r].xt && ((e = this.createComp(t[r])).initExpressions(), this.globalData.projectInterface.registerComposition(e));
        }),
        (BaseRenderer.prototype.getElementById = function (t) {
            for (var e = this.elements.length, i = 0; i < e; i += 1) if (this.elements[i].data.ind === t) return this.elements[i];
            return null;
        }),
        (BaseRenderer.prototype.getElementByPath = function (t) {
            var e,
                i = t.shift();
            if ("number" == typeof i) e = this.elements[i];
            else
                for (var r = this.elements.length, n = 0; n < r; n += 1)
                    if (this.elements[n].data.nm === i) {
                        e = this.elements[n];
                        break;
                    }
            return 0 === t.length ? e : e.getElementByPath(t);
        }),
        (BaseRenderer.prototype.setupGlobalData = function (t, e) {
            (this.globalData.fontManager = new FontManager()),
                (this.globalData.slotManager = slotFactory(t)),
                this.globalData.fontManager.addChars(t.chars),
                this.globalData.fontManager.addFonts(t.fonts, e),
                (this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem)),
                (this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem)),
                (this.globalData.imageLoader = this.animationItem.imagePreloader),
                (this.globalData.audioController = this.animationItem.audioController),
                (this.globalData.frameId = 0),
                (this.globalData.frameRate = t.fr),
                (this.globalData.nm = t.nm),
                (this.globalData.compSize = {w: t.w, h: t.h});
        });
    var effectTypes = {TRANSFORM_EFFECT: "transformEFfect"};

    function TransformElement() {
    }

    function MaskElement(t, e, i) {
        (this.data = t), (this.element = e), (this.globalData = i), (this.storedData = []), (this.masksProperties = this.data.masksProperties || []), (this.maskElement = null);
        var r,
            n = this.globalData.defs,
            s = this.masksProperties ? this.masksProperties.length : 0;
        (this.viewData = createSizedArray(s)), (this.solidPath = "");
        for (var a, o, l, h, p = this.masksProperties, c = 0, f = [], d = createElementID(), u = "clipPath", m = "clip-path", y = 0; y < s; y += 1)
            if (
                ((("a" !== p[y].mode && "n" !== p[y].mode) || p[y].inv || 100 !== p[y].o.k || p[y].o.x) && (m = u = "mask"),
                    ("s" !== p[y].mode && "i" !== p[y].mode) || 0 !== c
                        ? (a = null)
                        : ((a = createNS("rect")).setAttribute("fill", "#ffffff"), a.setAttribute("width", this.element.comp.data.w || 0), a.setAttribute("height", this.element.comp.data.h || 0), f.push(a)),
                    (r = createNS("path")),
                "n" === p[y].mode)
            )
                (this.viewData[y] = {
                    op: PropertyFactory.getProp(this.element, p[y].o, 0, 0.01, this.element),
                    prop: ShapePropertyFactory.getShapeProp(this.element, p[y], 3),
                    elem: r,
                    lastPath: ""
                }), n.appendChild(r);
            else {
                if (
                    ((c += 1),
                        r.setAttribute("fill", "s" === p[y].mode ? "#000000" : "#ffffff"),
                        r.setAttribute("clip-rule", "nonzero"),
                        0 !== p[y].x.k
                            ? ((m = u = "mask"),
                                (l = PropertyFactory.getProp(this.element, p[y].x, 0, null, this.element)),
                                (h = createElementID()),
                                (x = createNS("filter")).setAttribute("id", h),
                                (o = createNS("feMorphology")).setAttribute("operator", "erode"),
                                o.setAttribute("in", "SourceGraphic"),
                                o.setAttribute("radius", "0"),
                                x.appendChild(o),
                                n.appendChild(x),
                                r.setAttribute("stroke", "s" === p[y].mode ? "#000000" : "#ffffff"))
                            : (l = o = null),
                        (this.storedData[y] = {
                            elem: r,
                            x: l,
                            expan: o,
                            lastPath: "",
                            lastOperator: "",
                            filterId: h,
                            lastRadius: 0
                        }),
                    "i" === p[y].mode)
                ) {
                    for (var g = f.length, v = createNS("g"), b = 0; b < g; b += 1) v.appendChild(f[b]);
                    var x = createNS("mask");
                    x.setAttribute("mask-type", "alpha"),
                        x.setAttribute("id", d + "_" + c),
                        x.appendChild(r),
                        n.appendChild(x),
                        v.setAttribute("mask", "url(" + getLocationHref() + "#" + d + "_" + c + ")"),
                        (f.length = 0),
                        f.push(v);
                } else f.push(r);
                p[y].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()),
                    (this.viewData[y] = {
                        elem: r,
                        lastPath: "",
                        op: PropertyFactory.getProp(this.element, p[y].o, 0, 0.01, this.element),
                        prop: ShapePropertyFactory.getShapeProp(this.element, p[y], 3),
                        invRect: a
                    }),
                this.viewData[y].prop.k || this.drawPath(p[y], this.viewData[y].prop.v, this.viewData[y]);
            }
        for (this.maskElement = createNS(u), s = f.length, y = 0; y < s; y += 1) this.maskElement.appendChild(f[y]);
        0 < c && (this.maskElement.setAttribute("id", d), this.element.maskedElement.setAttribute(m, "url(" + getLocationHref() + "#" + d + ")"), n.appendChild(this.maskElement)),
        this.viewData.length && this.element.addRenderableComponent(this);
    }

    (TransformElement.prototype = {
        initTransform: function () {
            var t = new Matrix();
            (this.finalTransform = {
                mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {o: 0},
                _matMdf: !1,
                _localMatMdf: !1,
                _opMdf: !1,
                mat: t,
                localMat: t,
                localOpacity: 1
            }),
            this.data.ao && (this.finalTransform.mProp.autoOriented = !0),
                this.data.ty;
        },
        renderTransform: function () {
            if (((this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame), (this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame), this.hierarchy)) {
                var t,
                    e = this.finalTransform.mat,
                    i = 0,
                    r = this.hierarchy.length;
                if (!this.finalTransform._matMdf)
                    for (; i < r;) {
                        if (this.hierarchy[i].finalTransform.mProp._mdf) {
                            this.finalTransform._matMdf = !0;
                            break;
                        }
                        i += 1;
                    }
                if (this.finalTransform._matMdf) for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1) e.multiply(this.hierarchy[i].finalTransform.mProp.v);
            }
            this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
        },
        renderLocalTransform: function () {
            if (this.localTransforms) {
                var t = 0,
                    e = this.localTransforms.length;
                if (((this.finalTransform._localMatMdf = this.finalTransform._matMdf), !this.finalTransform._localMatMdf || !this.finalTransform._opMdf))
                    for (; t < e;)
                        this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0),
                        this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && ((this.finalTransform.localOpacity = this.finalTransform.mProp.o.v), (this.finalTransform._opMdf = !0)),
                            (t += 1);
                if (this.finalTransform._localMatMdf) {
                    var i = this.finalTransform.localMat;
                    for (this.localTransforms[0].matrix.clone(i), t = 1; t < e; t += 1) {
                        var r = this.localTransforms[t].matrix;
                        i.multiply(r);
                    }
                    i.multiply(this.finalTransform.mat);
                }
                if (this.finalTransform._opMdf) {
                    for (var n = this.finalTransform.localOpacity, t = 0; t < e; t += 1) n *= 0.01 * this.localTransforms[t].opacity;
                    this.finalTransform.localOpacity = n;
                }
            }
        },
        searchEffectTransforms: function () {
            if (this.renderableEffectsManager) {
                var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
                if (t.length) {
                    (this.localTransforms = []), (this.finalTransform.localMat = new Matrix());
                    for (var e = 0, i = t.length, e = 0; e < i; e += 1) this.localTransforms.push(t[e]);
                }
            }
        },
        globalToLocal: function (t) {
            var e = [];
            e.push(this.finalTransform);
            for (var i = !0, r = this.comp; i;) r.finalTransform ? (r.data.hasMask && e.splice(0, 0, r.finalTransform), (r = r.comp)) : (i = !1);
            for (var n, s = e.length, a = 0; a < s; a += 1) (n = e[a].mat.applyToPointArray(0, 0, 0)), (t = [t[0] - n[0], t[1] - n[1], 0]);
            return t;
        },
        mHelper: new Matrix(),
    }),
        (MaskElement.prototype.getMaskProperty = function (t) {
            return this.viewData[t].prop;
        }),
        (MaskElement.prototype.renderFrame = function (t) {
            for (var e, i = this.element.finalTransform.mat, r = this.masksProperties.length, n = 0; n < r; n += 1)
                (this.viewData[n].prop._mdf || t) && this.drawPath(this.masksProperties[n], this.viewData[n].prop.v, this.viewData[n]),
                (this.viewData[n].op._mdf || t) && this.viewData[n].elem.setAttribute("fill-opacity", this.viewData[n].op.v),
                "n" !== this.masksProperties[n].mode &&
                (this.viewData[n].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[n].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()),
                this.storedData[n].x && (this.storedData[n].x._mdf || t)) &&
                ((e = this.storedData[n].expan),
                    this.storedData[n].x.v < 0
                        ? ("erode" !== this.storedData[n].lastOperator &&
                        ((this.storedData[n].lastOperator = "erode"), this.storedData[n].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[n].filterId + ")")),
                            e.setAttribute("radius", -this.storedData[n].x.v))
                        : ("dilate" !== this.storedData[n].lastOperator && ((this.storedData[n].lastOperator = "dilate"), this.storedData[n].elem.setAttribute("filter", null)),
                            this.storedData[n].elem.setAttribute("stroke-width", 2 * this.storedData[n].x.v)));
        }),
        (MaskElement.prototype.getMaskelement = function () {
            return this.maskElement;
        }),
        (MaskElement.prototype.createLayerSolidPath = function () {
            var t = "M0,0 ";
            return (t += " h" + this.globalData.compSize.w), (t += " v" + this.globalData.compSize.h), (t += " h-" + this.globalData.compSize.w) + (" v-" + this.globalData.compSize.h) + " ";
        }),
        (MaskElement.prototype.drawPath = function (t, e, i) {
            for (var r, n = " M" + e.v[0][0] + "," + e.v[0][1], s = e._length, a = 1; a < s; a += 1) n += " C" + e.o[a - 1][0] + "," + e.o[a - 1][1] + " " + e.i[a][0] + "," + e.i[a][1] + " " + e.v[a][0] + "," + e.v[a][1];
            e.c && 1 < s && (n += " C" + e.o[a - 1][0] + "," + e.o[a - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]),
            i.lastPath !== n && ((r = ""), i.elem && (e.c && (r = t.inv ? this.solidPath + n : n), i.elem.setAttribute("d", r)), (i.lastPath = n));
        }),
        (MaskElement.prototype.destroy = function () {
            (this.element = null), (this.globalData = null), (this.maskElement = null), (this.data = null), (this.masksProperties = null);
        });
    var filtersFactory =
            ((H$ = {
                createFilter: function (t, e) {
                    var i = createNS("filter");
                    return (
                        i.setAttribute("id", t),
                        !0 !== e && (i.setAttribute("filterUnits", "objectBoundingBox"), i.setAttribute("x", "0%"), i.setAttribute("y", "0%"), i.setAttribute("width", "100%"), i.setAttribute("height", "100%")),
                            i
                    );
                },
                createAlphaToLuminanceFilter: function () {
                    var t = createNS("feColorMatrix");
                    return t.setAttribute("type", "matrix"), t.setAttribute("color-interpolation-filters", "sRGB"), t.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), t;
                },
            }),
                H$),
        featureSupport =
            ((M$ = {maskType: !0, svgLumaHidden: !0, offscreenCanvas: "undefined" != typeof OffscreenCanvas}),
            (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (M$.maskType = !1),
            /firefox/i.test(navigator.userAgent) && (M$.svgLumaHidden = !1),
                M$),
        registeredEffects$1 = {},
        idPrefix = "filter_result_",
        M$,
        H$;

    function SVGEffects(t) {
        var e,
            i = "SourceGraphic",
            r = t.data.ef ? t.data.ef.length : 0,
            n = createElementID(),
            s = filtersFactory.createFilter(n, !0),
            a = 0;
        for (this.filters = [], e = 0; e < r; e += 1) {
            var o = null,
                l = t.data.ef[e].ty;
            registeredEffects$1[l] && ((o = new registeredEffects$1[l].effect(s, t.effectsManager.effectElements[e], t, idPrefix + a, i)), (i = idPrefix + a), registeredEffects$1[l].countsAsEffect && (a += 1)),
            o && this.filters.push(o);
        }
        a && (t.globalData.defs.appendChild(s), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + n + ")")), this.filters.length && t.addRenderableComponent(this);
    }

    function registerEffect$1(t, e, i) {
        registeredEffects$1[t] = {effect: e, countsAsEffect: i};
    }

    function SVGBaseElement() {
    }

    function HierarchyElement() {
    }

    function RenderableDOMElement() {
    }

    function IImageElement(t, e, i) {
        (this.assetData = e.getAssetData(t.refId)),
        this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)),
            this.initElement(t, e, i),
            (this.sourceRect = {top: 0, left: 0, width: this.assetData.w, height: this.assetData.h});
    }

    function ProcessedElement(t, e) {
        (this.elem = t), (this.pos = e);
    }

    function IShapeElement() {
    }

    (SVGEffects.prototype.renderFrame = function (t) {
        for (var e = this.filters.length, i = 0; i < e; i += 1) this.filters[i].renderFrame(t);
    }),
        (SVGEffects.prototype.getEffects = function (t) {
            for (var e = this.filters.length, i = [], r = 0; r < e; r += 1) this.filters[r].type === t && i.push(this.filters[r]);
            return i;
        }),
        (SVGBaseElement.prototype = {
            initRendererElement: function () {
                this.layerElement = createNS("g");
            },
            createContainerElements: function () {
                (this.matteElement = createNS("g")), (this.transformedElement = this.layerElement), (this.maskedElement = this.layerElement), (this._sizeChanged = !1);
                var t,
                    e,
                    i,
                    r = null;
                this.data.td
                    ? ((this.matteMasks = {}), (e = createNS("g")).setAttribute("id", this.layerId), e.appendChild(this.layerElement), (r = e), this.globalData.defs.appendChild(e))
                    : this.data.tt
                        ? (this.matteElement.appendChild(this.layerElement), (r = this.matteElement), (this.baseElement = this.matteElement))
                        : (this.baseElement = this.layerElement),
                this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
                this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
                0 !== this.data.ty ||
                this.data.hd ||
                ((i = createNS("clipPath")),
                    (t = createNS("path")).setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z"),
                    (e = createElementID()),
                    i.setAttribute("id", e),
                    i.appendChild(t),
                    this.globalData.defs.appendChild(i),
                    this.checkMasks()
                        ? ((i = createNS("g")).setAttribute("clip-path", "url(" + getLocationHref() + "#" + e + ")"),
                            i.appendChild(this.layerElement),
                            (this.transformedElement = i),
                            r ? r.appendChild(this.transformedElement) : (this.baseElement = this.transformedElement))
                        : this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + e + ")")),
                0 !== this.data.bm && this.setBlendMode();
            },
            renderElement: function () {
                this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()),
                this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
            },
            destroyBaseElement: function () {
                (this.layerElement = null), (this.matteElement = null), this.maskManager.destroy();
            },
            getBaseElement: function () {
                return this.data.hd ? null : this.baseElement;
            },
            createRenderableComponents: function () {
                (this.maskManager = new MaskElement(this.data, this, this.globalData)), (this.renderableEffectsManager = new SVGEffects(this)), this.searchEffectTransforms();
            },
            getMatte: function (t) {
                var e, i, r, n, s, a, o, l, h;
                return (
                    this.matteMasks || (this.matteMasks = {}),
                    this.matteMasks[t] ||
                    ((r = this.layerId + "_" + t),
                        1 === t || 3 === t
                            ? ((h = createNS("mask")).setAttribute("id", r),
                                h.setAttribute("mask-type", 3 === t ? "luminance" : "alpha"),
                                (e = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId),
                                h.appendChild(e),
                                this.globalData.defs.appendChild(h),
                            featureSupport.maskType ||
                            1 !== t ||
                            (h.setAttribute("mask-type", "luminance"),
                                (a = createElementID()),
                                (o = filtersFactory.createFilter(a)),
                                this.globalData.defs.appendChild(o),
                                o.appendChild(filtersFactory.createAlphaToLuminanceFilter()),
                                (i = createNS("g")).appendChild(e),
                                h.appendChild(i),
                                i.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")))
                            : 2 === t &&
                            ((n = createNS("mask")).setAttribute("id", r),
                                n.setAttribute("mask-type", "alpha"),
                                (s = createNS("g")),
                                n.appendChild(s),
                                (a = createElementID()),
                                (o = filtersFactory.createFilter(a)),
                                (l = createNS("feComponentTransfer")).setAttribute("in", "SourceGraphic"),
                                o.appendChild(l),
                                (h = createNS("feFuncA")).setAttribute("type", "table"),
                                h.setAttribute("tableValues", "1.0 0.0"),
                                l.appendChild(h),
                                this.globalData.defs.appendChild(o),
                                (h = createNS("rect")).setAttribute("width", this.comp.data.w),
                                h.setAttribute("height", this.comp.data.h),
                                h.setAttribute("x", "0"),
                                h.setAttribute("y", "0"),
                                h.setAttribute("fill", "#ffffff"),
                                h.setAttribute("opacity", "0"),
                                s.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")"),
                                s.appendChild(h),
                                (e = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId),
                                s.appendChild(e),
                            featureSupport.maskType ||
                            (n.setAttribute("mask-type", "luminance"), o.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (i = createNS("g")), s.appendChild(h), i.appendChild(this.layerElement), s.appendChild(i)),
                                this.globalData.defs.appendChild(n)),
                        (this.matteMasks[t] = r)),
                        this.matteMasks[t]
                );
            },
            setMatte: function (t) {
                this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")");
            },
        }),
        (HierarchyElement.prototype = {
            initHierarchy: function () {
                (this.hierarchy = []), (this._isParent = !1), this.checkParenting();
            },
            setHierarchy: function (t) {
                this.hierarchy = t;
            },
            setAsParent: function () {
                this._isParent = !0;
            },
            checkParenting: function () {
                void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, []);
            },
        }),
        extendPrototype(
            [
                RenderableElement,
                createProxyFunction({
                    initElement: function (t, e, i) {
                        this.initFrame(),
                            this.initBaseData(t, e, i),
                            this.initTransform(t, e, i),
                            this.initHierarchy(),
                            this.initRenderable(),
                            this.initRendererElement(),
                            this.createContainerElements(),
                            this.createRenderableComponents(),
                            this.createContent(),
                            this.hide();
                    },
                    hide: function () {
                        this.hidden || (this.isInRange && !this.isTransparent) || (((this.baseElement || this.layerElement).style.display = "none"), (this.hidden = !0));
                    },
                    show: function () {
                        this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), (this.hidden = !1), (this._isFirstFrame = !0));
                    },
                    renderFrame: function () {
                        this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
                    },
                    renderInnerContent: function () {
                    },
                    prepareFrame: function (t) {
                        (this._mdf = !1), this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency();
                    },
                    destroy: function () {
                        (this.innerElem = null), this.destroyBaseElement();
                    },
                }),
            ],
            RenderableDOMElement
        ),
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement),
        (IImageElement.prototype.createContent = function () {
            var t = this.globalData.getAssetsPath(this.assetData);
            (this.innerElem = createNS("image")),
                this.innerElem.setAttribute("width", this.assetData.w + "px"),
                this.innerElem.setAttribute("height", this.assetData.h + "px"),
                this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio),
                this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
                this.layerElement.appendChild(this.innerElem);
        }),
        (IImageElement.prototype.sourceRectAtTime = function () {
            return this.sourceRect;
        }),
        (IShapeElement.prototype = {
            addShapeToModifiers: function (t) {
                for (var e = this.shapeModifiers.length, i = 0; i < e; i += 1) this.shapeModifiers[i].addShape(t);
            },
            isShapeInAnimatedModifiers: function (t) {
                for (var e = this.shapeModifiers.length; 0 < e;) if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
                return !1;
            },
            renderModifiers: function () {
                if (this.shapeModifiers.length) {
                    for (var t = this.shapes.length, e = 0; e < t; e += 1) this.shapes[e].sh.reset();
                    for (e = (t = this.shapeModifiers.length) - 1; 0 <= e && !this.shapeModifiers[e].processShapes(this._isFirstFrame); --e) ;
                }
            },
            searchProcessedElement: function (t) {
                for (var e = this.processedElements, i = 0, r = e.length; i < r;) {
                    if (e[i].elem === t) return e[i].pos;
                    i += 1;
                }
                return 0;
            },
            addProcessedElement: function (t, e) {
                for (var i = this.processedElements, r = i.length; r;) if (i[--r].elem === t) return void (i[r].pos = e);
                i.push(new ProcessedElement(t, e));
            },
            prepareFrame: function (t) {
                this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
            },
        });
    var lineCapEnum = {1: "butt", 2: "round", 3: "square"},
        lineJoinEnum = {1: "miter", 2: "round", 3: "bevel"};

    function SVGShapeData(t, e, i) {
        (this.caches = []), (this.styles = []), (this.transformers = t), (this.lStr = ""), (this.sh = i), (this.lvl = e), (this._isAnimated = !!i.k);
        for (var r = 0, n = t.length; r < n;) {
            if (t[r].mProps.dynamicProperties.length) {
                this._isAnimated = !0;
                break;
            }
            r += 1;
        }
    }

    function SVGStyleData(t, e) {
        (this.data = t), (this.type = t.ty), (this.d = ""), (this.lvl = e), (this._mdf = !1), (this.closed = !0 === t.hd), (this.pElem = createNS("path")), (this.msElem = null);
    }

    function DashProperty(t, e, i, r) {
        (this.elem = t),
            (this.frameId = -1),
            (this.dataProps = createSizedArray(e.length)),
            (this.renderer = i),
            (this.k = !1),
            (this.dashStr = ""),
            (this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0)),
            (this.dashoffset = createTypedArray("float32", 1)),
            this.initDynamicPropertyContainer(r);
        for (var n, s = e.length || 0, a = 0; a < s; a += 1) (n = PropertyFactory.getProp(t, e[a].v, 0, 0, this)), (this.k = n.k || this.k), (this.dataProps[a] = {
            n: e[a].n,
            p: n
        });
        this.k || this.getValue(!0), (this._isAnimated = this.k);
    }

    function SVGStrokeStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
            (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
            (this.d = new DashProperty(t, e.d || {}, "svg", this)),
            (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)),
            (this.style = i),
            (this._isAnimated = !!this._isAnimated);
    }

    function SVGFillStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t), (this.getValue = this.iterateDynamicProperties), (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)), (this.c = PropertyFactory.getProp(t, e.c, 1, 255, this)), (this.style = i);
    }

    function SVGNoStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t), (this.getValue = this.iterateDynamicProperties), (this.style = i);
    }

    function GradientProperty(t, e, i) {
        (this.data = e), (this.c = createTypedArray("uint8c", 4 * e.p));
        var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
        (this.o = createTypedArray("float32", r)),
            (this._cmdf = !1),
            (this._omdf = !1),
            (this._collapsable = this.checkCollapsable()),
            (this._hasOpacity = r),
            this.initDynamicPropertyContainer(i),
            (this.prop = PropertyFactory.getProp(t, e.k, 1, null, this)),
            (this.k = this.prop.k),
            this.getValue(!0);
    }

    function SVGGradientFillStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t), (this.getValue = this.iterateDynamicProperties), this.initGradientData(t, e, i);
    }

    function SVGGradientStrokeStyleData(t, e, i) {
        this.initDynamicPropertyContainer(t),
            (this.getValue = this.iterateDynamicProperties),
            (this.w = PropertyFactory.getProp(t, e.w, 0, null, this)),
            (this.d = new DashProperty(t, e.d || {}, "svg", this)),
            this.initGradientData(t, e, i),
            (this._isAnimated = !!this._isAnimated);
    }

    function ShapeGroupData() {
        (this.it = []), (this.prevViewData = []), (this.gr = createNS("g"));
    }

    function SVGTransformData(t, e, i) {
        (this.transform = {
            mProps: t,
            op: e,
            container: i
        }), (this.elements = []), (this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length);
    }

    (SVGShapeData.prototype.setAsAnimated = function () {
        this._isAnimated = !0;
    }),
        (SVGStyleData.prototype.reset = function () {
            (this.d = ""), (this._mdf = !1);
        }),
        (DashProperty.prototype.getValue = function (t) {
            if ((this.elem.globalData.frameId !== this.frameId || t) && ((this.frameId = this.elem.globalData.frameId), this.iterateDynamicProperties(), (this._mdf = this._mdf || t), this._mdf)) {
                var e = 0,
                    i = this.dataProps.length;
                for ("svg" === this.renderer && (this.dashStr = ""), e = 0; e < i; e += 1)
                    "o" !== this.dataProps[e].n ? ("svg" === this.renderer ? (this.dashStr += " " + this.dataProps[e].p.v) : (this.dashArray[e] = this.dataProps[e].p.v)) : (this.dashoffset[0] = this.dataProps[e].p.v);
            }
        }),
        extendPrototype([DynamicPropertyContainer], DashProperty),
        extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData),
        extendPrototype([DynamicPropertyContainer], SVGFillStyleData),
        extendPrototype([DynamicPropertyContainer], SVGNoStyleData),
        (GradientProperty.prototype.comparePoints = function (t, e) {
            for (var i = 0, r = this.o.length / 2; i < r;) {
                if (0.01 < Math.abs(t[4 * i] - t[4 * e + 2 * i])) return !1;
                i += 1;
            }
            return !0;
        }),
        (GradientProperty.prototype.checkCollapsable = function () {
            if (this.o.length / 2 != this.c.length / 4) return !1;
            if (this.data.k.k[0].s)
                for (var t = 0, e = this.data.k.k.length; t < e;) {
                    if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
                    t += 1;
                }
            else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
            return !0;
        }),
        (GradientProperty.prototype.getValue = function (t) {
            if ((this.prop.getValue(), (this._mdf = !1), (this._cmdf = !1), (this._omdf = !1), this.prop._mdf || t)) {
                for (var e, i, r = 4 * this.data.p, n = 0; n < r; n += 1) (e = n % 4 == 0 ? 100 : 255), (i = Math.round(this.prop.v[n] * e)), this.c[n] !== i && ((this.c[n] = i), (this._cmdf = !t));
                if (this.o.length)
                    for (r = this.prop.v.length, n = 4 * this.data.p; n < r; n += 1)
                        (e = n % 2 == 0 ? 100 : 1), (i = n % 2 == 0 ? Math.round(100 * this.prop.v[n]) : this.prop.v[n]), this.o[n - 4 * this.data.p] !== i && ((this.o[n - 4 * this.data.p] = i), (this._omdf = !t));
                this._mdf = !t;
            }
        }),
        extendPrototype([DynamicPropertyContainer], GradientProperty),
        (SVGGradientFillStyleData.prototype.initGradientData = function (t, e, i) {
            (this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this)),
                (this.s = PropertyFactory.getProp(t, e.s, 1, null, this)),
                (this.e = PropertyFactory.getProp(t, e.e, 1, null, this)),
                (this.h = PropertyFactory.getProp(t, e.h || {k: 0}, 0, 0.01, this)),
                (this.a = PropertyFactory.getProp(t, e.a || {k: 0}, 0, degToRads, this)),
                (this.g = new GradientProperty(t, e.g, this)),
                (this.style = i),
                (this.stops = []),
                this.setGradientData(i.pElem, e),
                this.setGradientOpacity(e, i),
                (this._isAnimated = !!this._isAnimated);
        }),
        (SVGGradientFillStyleData.prototype.setGradientData = function (t, e) {
            var i = createElementID(),
                r = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
            for (var n, s = [], a = 4 * e.g.p, o = 0; o < a; o += 4) (n = createNS("stop")), r.appendChild(n), s.push(n);
            t.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + i + ")"), (this.gf = r), (this.cst = s);
        }),
        (SVGGradientFillStyleData.prototype.setGradientOpacity = function (t, e) {
            if (this.g._hasOpacity && !this.g._collapsable) {
                var i,
                    r = createNS("mask"),
                    n = createNS("path");
                r.appendChild(n);
                var s = createElementID(),
                    a = createElementID();
                r.setAttribute("id", a);
                var o = createNS(1 === t.t ? "linearGradient" : "radialGradient");
                o.setAttribute("id", s), o.setAttribute("spreadMethod", "pad"), o.setAttribute("gradientUnits", "userSpaceOnUse");
                for (var l = (t.g.k.k[0].s || t.g.k.k).length, h = this.stops, p = 4 * t.g.p; p < l; p += 2) (i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), o.appendChild(i), h.push(i);
                n.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + s + ")"),
                "gs" === t.ty && (n.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), 1 === t.lj && n.setAttribute("stroke-miterlimit", t.ml)),
                    (this.of = o),
                    (this.ms = r),
                    (this.ost = h),
                    (this.maskId = a),
                    (e.msElem = n);
            }
        }),
        extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData),
        extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
    var buildShapeString = function (t, e, i, r) {
            if (0 === e) return "";
            for (var n = t.o, s = t.i, a = t.v, o = " M" + r.applyToPointStringified(a[0][0], a[0][1]), l = 1; l < e; l += 1)
                o += " C" + r.applyToPointStringified(n[l - 1][0], n[l - 1][1]) + " " + r.applyToPointStringified(s[l][0], s[l][1]) + " " + r.applyToPointStringified(a[l][0], a[l][1]);
            return i && e && ((o += " C" + r.applyToPointStringified(n[l - 1][0], n[l - 1][1]) + " " + r.applyToPointStringified(s[0][0], s[0][1]) + " " + r.applyToPointStringified(a[0][0], a[0][1])), (o += "z")), o;
        },
        SVGElementsRenderer =
            ((x1 = new Matrix()),
                (y1 = new Matrix()),
                {
                    createRenderFunction: function (t) {
                        switch (t.ty) {
                            case "fl":
                                return C1;
                            case "gf":
                                return E1;
                            case "gs":
                                return D1;
                            case "st":
                                return F1;
                            case "sh":
                            case "el":
                            case "rc":
                            case "sr":
                                return B1;
                            case "tr":
                                return z1;
                            case "no":
                                return A1;
                            default:
                                return null;
                        }
                    },
                }),
        x1,
        y1;

    function z1(t, e, i) {
        (i || e.transform.op._mdf) && e.transform.container.setAttribute("opacity", e.transform.op.v), (i || e.transform.mProps._mdf) && e.transform.container.setAttribute("transform", e.transform.mProps.v.to2dCSS());
    }

    function A1() {
    }

    function B1(t, e, i) {
        for (var r, n, s, a, o, l, h, p, c, f = e.styles.length, d = e.lvl, u = 0; u < f; u += 1) {
            if (((a = e.sh._mdf || i), e.styles[u].lvl < d)) {
                for (h = y1.reset(), p = d - e.styles[u].lvl, c = e.transformers.length - 1; !a && 0 < p;) (a = e.transformers[c].mProps._mdf || a), --p, --c;
                if (a) for (p = d - e.styles[u].lvl, c = e.transformers.length - 1; 0 < p;) h.multiply(e.transformers[c].mProps.v), --p, --c;
            } else h = x1;
            if (((n = (l = e.sh.paths)._length), a)) {
                for (s = "", r = 0; r < n; r += 1) (o = l.shapes[r]) && o._length && (s += buildShapeString(o, o._length, o.c, h));
                e.caches[u] = s;
            } else s = e.caches[u];
            (e.styles[u].d += !0 === t.hd ? "" : s), (e.styles[u]._mdf = a || e.styles[u]._mdf);
        }
    }

    function C1(t, e, i) {
        var r = e.style;
        (e.c._mdf || i) && r.pElem.setAttribute("fill", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i) && r.pElem.setAttribute("fill-opacity", e.o.v);
    }

    function D1(t, e, i) {
        E1(t, e, i), F1(0, e, i);
    }

    function E1(t, e, i) {
        var r,
            n,
            s,
            a,
            o = e.gf,
            l = e.g._hasOpacity,
            h = e.s.v,
            p = e.e.v;
        if (
            ((e.o._mdf || i) && ((s = "gf" === t.ty ? "fill-opacity" : "stroke-opacity"), e.style.pElem.setAttribute(s, e.o.v)),
            (e.s._mdf || i) && ((s = "x1" == (n = 1 === t.t ? "x1" : "cx") ? "y1" : "cy"), o.setAttribute(n, h[0]), o.setAttribute(s, h[1]), l && !e.g._collapsable && (e.of.setAttribute(n, h[0]), e.of.setAttribute(s, h[1]))),
            e.g._cmdf || i)
        )
            for (var c = e.cst, f = e.g.c, d = c.length, u = 0; u < d; u += 1) (r = c[u]).setAttribute("offset", f[4 * u] + "%"), r.setAttribute("stop-color", "rgb(" + f[4 * u + 1] + "," + f[4 * u + 2] + "," + f[4 * u + 3] + ")");
        if (l && (e.g._omdf || i)) {
            var m = e.g.o;
            for (d = (c = e.g._collapsable ? e.cst : e.ost).length, u = 0; u < d; u += 1) (r = c[u]), e.g._collapsable || r.setAttribute("offset", m[2 * u] + "%"), r.setAttribute("stop-opacity", m[2 * u + 1]);
        }
        1 === t.t
            ? (e.e._mdf || i) && (o.setAttribute("x2", p[0]), o.setAttribute("y2", p[1]), l && !e.g._collapsable && (e.of.setAttribute("x2", p[0]), e.of.setAttribute("y2", p[1])))
            : ((e.s._mdf || e.e._mdf || i) && ((a = Math.sqrt(Math.pow(h[0] - p[0], 2) + Math.pow(h[1] - p[1], 2))), o.setAttribute("r", a), l && !e.g._collapsable && e.of.setAttribute("r", a)),
            (e.e._mdf || e.h._mdf || e.a._mdf || i) &&
            ((a = a || Math.sqrt(Math.pow(h[0] - p[0], 2) + Math.pow(h[1] - p[1], 2))),
                (i = Math.atan2(p[1] - h[1], p[0] - h[0])),
                1 <= (p = e.h.v) ? (p = 0.99) : p <= -1 && (p = -0.99),
                (a = a * p),
                (p = Math.cos(i + e.a.v) * a + h[0]),
                (h = Math.sin(i + e.a.v) * a + h[1]),
                o.setAttribute("fx", p),
                o.setAttribute("fy", h),
            l && !e.g._collapsable && (e.of.setAttribute("fx", p), e.of.setAttribute("fy", h))));
    }

    function F1(t, e, i) {
        var r = e.style,
            n = e.d;
        n && (n._mdf || i) && n.dashStr && (r.pElem.setAttribute("stroke-dasharray", n.dashStr), r.pElem.setAttribute("stroke-dashoffset", n.dashoffset[0])),
        e.c && (e.c._mdf || i) && r.pElem.setAttribute("stroke", "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
        (e.o._mdf || i) && r.pElem.setAttribute("stroke-opacity", e.o.v),
        (e.w._mdf || i) && (r.pElem.setAttribute("stroke-width", e.w.v), r.msElem && r.msElem.setAttribute("stroke-width", e.w.v));
    }

    function SVGShapeElement(t, e, i) {
        (this.shapes = []),
            (this.shapesData = t.shapes),
            (this.stylesList = []),
            (this.shapeModifiers = []),
            (this.itemsData = []),
            (this.processedElements = []),
            (this.animatedContents = []),
            this.initElement(t, e, i),
            (this.prevViewData = []);
    }

    function LetterProps(t, e, i, r, n, s) {
        (this.o = t), (this.sw = e), (this.sc = i), (this.fc = r), (this.m = n), (this.p = s), (this._mdf = {
            o: !0,
            sw: !!e,
            sc: !!i,
            fc: !!r,
            m: !0,
            p: !0
        });
    }

    function TextProperty(t, e) {
        (this._frameId = initialDefaultFrame),
            (this.pv = ""),
            (this.v = ""),
            (this.kf = !1),
            (this._isFirstFrame = !0),
            (this._mdf = !1),
        e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)),
            (this.data = e),
            (this.elem = t),
            (this.comp = this.elem.comp),
            (this.keysIndex = 0),
            (this.canResize = !1),
            (this.minimumFontSize = 1),
            (this.effectsSequence = []),
            (this.currentData = {
                ascent: 0,
                boxWidth: this.defaultBoxWidth,
                f: "",
                fStyle: "",
                fWeight: "",
                fc: "",
                j: "",
                justifyOffset: "",
                l: [],
                lh: 0,
                lineWidths: [],
                ls: "",
                of: "",
                s: "",
                sc: "",
                sw: 0,
                t: 0,
                tr: 0,
                sz: 0,
                ps: null,
                fillColorAnim: !1,
                strokeColorAnim: !1,
                strokeWidthAnim: !1,
                yOffset: 0,
                finalSize: 0,
                finalText: [],
                finalLineHeight: 0,
                __complete: !1,
            }),
            this.copyData(this.currentData, this.data.d.k[0].s),
        this.searchProperty() || this.completeTextData(this.currentData);
    }

    extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement),
        (SVGShapeElement.prototype.initSecondaryElement = function () {
        }),
        (SVGShapeElement.prototype.identityMatrix = new Matrix()),
        (SVGShapeElement.prototype.buildExpressionInterface = function () {
        }),
        (SVGShapeElement.prototype.createContent = function () {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
        }),
        (SVGShapeElement.prototype.filterUniqueShapes = function () {
            for (var t, e, i, r = this.shapes.length, n = this.stylesList.length, s = [], a = !1, o = 0; o < n; o += 1) {
                for (i = this.stylesList[o], a = !1, t = s.length = 0; t < r; t += 1) -1 !== (e = this.shapes[t]).styles.indexOf(i) && (s.push(e), (a = e._isAnimated || a));
                1 < s.length && a && this.setShapesAsAnimated(s);
            }
        }),
        (SVGShapeElement.prototype.setShapesAsAnimated = function (t) {
            for (var e = t.length, i = 0; i < e; i += 1) t[i].setAsAnimated();
        }),
        (SVGShapeElement.prototype.createStyleElement = function (t, e) {
            var i,
                r = new SVGStyleData(t, e),
                e = r.pElem;
            return (
                "st" === t.ty
                    ? (i = new SVGStrokeStyleData(this, t, r))
                    : "fl" === t.ty
                        ? (i = new SVGFillStyleData(this, t, r))
                        : "gf" === t.ty || "gs" === t.ty
                            ? ((i = new ("gf" === t.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, r)),
                                this.globalData.defs.appendChild(i.gf),
                            i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), e.setAttribute("mask", "url(" + getLocationHref() + "#" + i.maskId + ")")))
                            : "no" === t.ty && (i = new SVGNoStyleData(this, t, r)),
                ("st" !== t.ty && "gs" !== t.ty) ||
                (e.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]),
                    e.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]),
                    e.setAttribute("fill-opacity", "0"),
                1 === t.lj && e.setAttribute("stroke-miterlimit", t.ml)),
                2 === t.r && e.setAttribute("fill-rule", "evenodd"),
                t.ln && e.setAttribute("id", t.ln),
                t.cl && e.setAttribute("class", t.cl),
                t.bm && (e.style["mix-blend-mode"] = getBlendMode(t.bm)),
                    this.stylesList.push(r),
                    this.addToAnimatedContents(t, i),
                    i
            );
        }),
        (SVGShapeElement.prototype.createGroupElement = function (t) {
            var e = new ShapeGroupData();
            return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
        }),
        (SVGShapeElement.prototype.createTransformElement = function (t, e) {
            var i = TransformPropertyFactory.getTransformProperty(this, t, this),
                e = new SVGTransformData(i, i.o, e);
            return this.addToAnimatedContents(t, e), e;
        }),
        (SVGShapeElement.prototype.createShapeElement = function (t, e, i) {
            var r = 4;
            "rc" === t.ty ? (r = 5) : "el" === t.ty ? (r = 6) : "sr" === t.ty && (r = 7);
            r = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, r, this));
            return this.shapes.push(r), this.addShapeToModifiers(r), this.addToAnimatedContents(t, r), r;
        }),
        (SVGShapeElement.prototype.addToAnimatedContents = function (t, e) {
            for (var i = 0, r = this.animatedContents.length; i < r;) {
                if (this.animatedContents[i].element === e) return;
                i += 1;
            }
            this.animatedContents.push({fn: SVGElementsRenderer.createRenderFunction(t), element: e, data: t});
        }),
        (SVGShapeElement.prototype.setElementStyles = function (t) {
            for (var e = t.styles, i = this.stylesList.length, r = 0; r < i; r += 1) this.stylesList[r].closed || e.push(this.stylesList[r]);
        }),
        (SVGShapeElement.prototype.reloadShapes = function () {
            this._isFirstFrame = !0;
            for (var t = this.itemsData.length, e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1)
                this.dynamicProperties[e].getValue();
            this.renderModifiers();
        }),
        (SVGShapeElement.prototype.searchShapes = function (t, e, i, r, n, s, a) {
            for (var o, l, h, p, c, f = [].concat(s), d = t.length - 1, u = [], m = [], y = d; 0 <= y; --y) {
                if (((c = this.searchProcessedElement(t[y])) ? (e[y] = i[c - 1]) : (t[y]._render = a), "fl" === t[y].ty || "st" === t[y].ty || "gf" === t[y].ty || "gs" === t[y].ty || "no" === t[y].ty))
                    c ? (e[y].style.closed = !1) : (e[y] = this.createStyleElement(t[y], n)), t[y]._render && e[y].style.pElem.parentNode !== r && r.appendChild(e[y].style.pElem), u.push(e[y].style);
                else if ("gr" === t[y].ty) {
                    if (c) for (l = e[y].it.length, o = 0; o < l; o += 1) e[y].prevViewData[o] = e[y].it[o];
                    else e[y] = this.createGroupElement(t[y]);
                    this.searchShapes(t[y].it, e[y].it, e[y].prevViewData, e[y].gr, n + 1, f, a), t[y]._render && e[y].gr.parentNode !== r && r.appendChild(e[y].gr);
                } else
                    "tr" === t[y].ty
                        ? (c || (e[y] = this.createTransformElement(t[y], r)), (h = e[y].transform), f.push(h))
                        : "sh" === t[y].ty || "rc" === t[y].ty || "el" === t[y].ty || "sr" === t[y].ty
                            ? (c || (e[y] = this.createShapeElement(t[y], f, n)), this.setElementStyles(e[y]))
                            : "tm" === t[y].ty || "rd" === t[y].ty || "ms" === t[y].ty || "pb" === t[y].ty || "zz" === t[y].ty || "op" === t[y].ty
                                ? (c ? ((p = e[y]).closed = !1) : ((p = ShapeModifiers.getModifier(t[y].ty)).init(this, t[y]), (e[y] = p), this.shapeModifiers.push(p)), m.push(p))
                                : "rp" === t[y].ty && (c ? ((p = e[y]).closed = !0) : ((p = ShapeModifiers.getModifier(t[y].ty)), (e[y] = p).init(this, t, y, e), this.shapeModifiers.push(p), (a = !1)), m.push(p));
                this.addProcessedElement(t[y], y + 1);
            }
            for (d = u.length, y = 0; y < d; y += 1) u[y].closed = !0;
            for (d = m.length, y = 0; y < d; y += 1) m[y].closed = !0;
        }),
        (SVGShapeElement.prototype.renderInnerContent = function () {
            this.renderModifiers();
            for (var t = this.stylesList.length, e = 0; e < t; e += 1) this.stylesList[e].reset();
            for (this.renderShape(), e = 0; e < t; e += 1)
                (this.stylesList[e]._mdf || this._isFirstFrame) &&
                (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), (this.stylesList[e].d = "M0 0" + this.stylesList[e].d)),
                    this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"));
        }),
        (SVGShapeElement.prototype.renderShape = function () {
            for (var t, e = this.animatedContents.length, i = 0; i < e; i += 1) (t = this.animatedContents[i]), (this._isFirstFrame || t.element._isAnimated) && !0 !== t.data && t.fn(t.data, t.element, this._isFirstFrame);
        }),
        (SVGShapeElement.prototype.destroy = function () {
            this.destroyBaseElement(), (this.shapesData = null), (this.itemsData = null);
        }),
        (LetterProps.prototype.update = function (t, e, i, r, n, s) {
            (this._mdf.o = !1), (this._mdf.sw = !1), (this._mdf.sc = !1), (this._mdf.fc = !1), (this._mdf.m = !1);
            var a = (this._mdf.p = !1);
            return (
                this.o !== t && ((this.o = t), (a = this._mdf.o = !0)),
                this.sw !== e && ((this.sw = e), (a = this._mdf.sw = !0)),
                this.sc !== i && ((this.sc = i), (a = this._mdf.sc = !0)),
                this.fc !== r && ((this.fc = r), (a = this._mdf.fc = !0)),
                this.m !== n && ((this.m = n), (a = this._mdf.m = !0)),
                !s.length || (this.p[0] === s[0] && this.p[1] === s[1] && this.p[4] === s[4] && this.p[5] === s[5] && this.p[12] === s[12] && this.p[13] === s[13]) || ((this.p = s), (a = this._mdf.p = !0)),
                    a
            );
        }),
        (TextProperty.prototype.defaultBoxWidth = [0, 0]),
        (TextProperty.prototype.copyData = function (t, e) {
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
            return t;
        }),
        (TextProperty.prototype.setCurrentData = function (t) {
            t.__complete || this.completeTextData(t), (this.currentData = t), (this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth), (this._mdf = !0);
        }),
        (TextProperty.prototype.searchProperty = function () {
            return this.searchKeyframes();
        }),
        (TextProperty.prototype.searchKeyframes = function () {
            return (this.kf = 1 < this.data.d.k.length), this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
        }),
        (TextProperty.prototype.addEffect = function (t) {
            this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.getValue = function (t) {
            if ((this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) || t) {
                this.currentData.t = this.data.d.k[this.keysIndex].s.t;
                var e = this.currentData,
                    i = this.keysIndex;
                if (this.lock) this.setCurrentData(this.currentData);
                else {
                    (this.lock = !0), (this._mdf = !1);
                    for (var r = this.effectsSequence.length, n = t || this.data.d.k[this.keysIndex].s, s = 0; s < r; s += 1)
                        n = i !== this.keysIndex ? this.effectsSequence[s](n, n.t) : this.effectsSequence[s](this.currentData, n.t);
                    e !== n && this.setCurrentData(n), (this.v = this.currentData), (this.pv = this.v), (this.lock = !1), (this.frameId = this.elem.globalData.frameId);
                }
            }
        }),
        (TextProperty.prototype.getKeyframeValue = function () {
            for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && !(i === r - 1 || t[i + 1].t > e);) i += 1;
            return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s;
        }),
        (TextProperty.prototype.buildFinalText = function (t) {
            for (var e, i, r = [], n = 0, s = t.length, a = !1, o = !1, l = ""; n < s;)
                (a = o),
                    (o = !1),
                    (e = t.charCodeAt(n)),
                    (l = t.charAt(n)),
                    FontManager.isCombinedCharacter(e)
                        ? (a = !0)
                        : 55296 <= e && e <= 56319
                            ? FontManager.isRegionalFlag(t, n)
                                ? (l = t.substr(n, 14))
                                : 56320 <= (i = t.charCodeAt(n + 1)) && i <= 57343 && (FontManager.isModifier(e, i) ? ((l = t.substr(n, 2)), (a = !0)) : (l = FontManager.isFlagEmoji(t.substr(n, 4)) ? t.substr(n, 4) : t.substr(n, 2)))
                            : 56319 < e
                                ? ((i = t.charCodeAt(n + 1)), FontManager.isVariationSelector(e) && (a = !0))
                                : FontManager.isZeroWidthJoiner(e) && (o = a = !0),
                    a ? ((r[r.length - 1] += l), (a = !1)) : r.push(l),
                    (n += l.length);
            return r;
        }),
        (TextProperty.prototype.completeTextData = function (t) {
            t.__complete = !0;
            var e,
                i,
                r,
                n = this.elem.globalData.fontManager,
                s = this.data,
                a = [],
                o = 0,
                l = s.m.g,
                h = 0,
                p = 0,
                c = 0,
                f = [],
                d = 0,
                u = 0,
                m = n.getFontByName(t.f),
                y = 0,
                g = getFontProperties(m);
            (t.fWeight = g.weight), (t.fStyle = g.style), (t.finalSize = t.s), (t.finalText = this.buildFinalText(t.t)), (A = t.finalText.length), (t.finalLineHeight = t.lh);
            var v,
                b = (t.tr / 1e3) * t.finalSize;
            if (t.sz)
                for (var x, E = !0, C = t.sz[0], P = t.sz[1]; E;) {
                    for (var S = 0, d = 0, A = (x = this.buildFinalText(t.t)).length, b = (t.tr / 1e3) * t.finalSize, w = -1, T = 0; T < A; T += 1)
                        (v = x[T].charCodeAt(0)),
                            (e = !1),
                            " " === x[T] ? (w = T) : (13 !== v && 3 !== v) || ((e = !(d = 0)), (S += t.finalLineHeight || 1.2 * t.finalSize)),
                            C < d + (y = n.chars ? ((r = n.getCharData(x[T], m.fStyle, m.fFamily)), e ? 0 : (r.w * t.finalSize) / 100) : n.measureText(x[T], t.f, t.finalSize)) && " " !== x[T]
                                ? (-1 === w ? (A += 1) : (T = w), (S += t.finalLineHeight || 1.2 * t.finalSize), x.splice(T, w === T ? 1 : 0, "\r"), (w = -1), (d = 0))
                                : ((d += y), (d += b));
                    (S += (m.ascent * t.finalSize) / 100),
                        this.canResize && t.finalSize > this.minimumFontSize && P < S ? (--t.finalSize, (t.finalLineHeight = (t.finalSize * t.lh) / t.s)) : ((t.finalText = x), (A = t.finalText.length), (E = !1));
                }
            d = -b;
            var _,
                y = 0,
                M = 0;
            for (T = 0; T < A; T += 1)
                if (
                    ((e = !1),
                        13 === (v = (_ = t.finalText[T]).charCodeAt(0)) || 3 === v ? ((M = 0), f.push(d), (u = u < d ? d : u), (d = -2 * b), (e = !(i = "")), (c += 1)) : (i = _),
                        (y = n.chars ? ((r = n.getCharData(_, m.fStyle, n.getFontByName(t.f).fFamily)), e ? 0 : (r.w * t.finalSize) / 100) : n.measureText(i, t.f, t.finalSize)),
                        " " === _ ? (M += y + b) : ((d += y + b + M), (M = 0)),
                        a.push({l: y, an: y, add: h, n: e, anIndexes: [], val: i, line: c, animatorJustifyOffset: 0}),
                    2 == l)
                ) {
                    if (((h += y), "" === i || " " === i || T === A - 1)) {
                        for (("" !== i && " " !== i) || (h -= y); p <= T;) (a[p].an = h), (a[p].ind = o), (a[p].extra = y), (p += 1);
                        (o += 1), (h = 0);
                    }
                } else if (3 == l) {
                    if (((h += y), "" === i || T === A - 1)) {
                        for ("" === i && (h -= y); p <= T;) (a[p].an = h), (a[p].ind = o), (a[p].extra = y), (p += 1);
                        (h = 0), (o += 1);
                    }
                } else (a[o].ind = o), (a[o].extra = 0), (o += 1);
            if (((t.l = a), (u = u < d ? d : u), f.push(d), t.sz)) (t.boxWidth = t.sz[0]), (t.justifyOffset = 0);
            else
                switch (((t.boxWidth = u), t.j)) {
                    case 1:
                        t.justifyOffset = -t.boxWidth;
                        break;
                    case 2:
                        t.justifyOffset = -t.boxWidth / 2;
                        break;
                    default:
                        t.justifyOffset = 0;
                }
            t.lineWidths = f;
            for (var k, D, I, F, B = s.a, L = B.length, R = [], V = 0; V < L; V += 1) {
                for ((k = B[V]).a.sc && (t.strokeColorAnim = !0), k.a.sw && (t.strokeWidthAnim = !0), (k.a.fc || k.a.fh || k.a.fs || k.a.fb) && (t.fillColorAnim = !0), F = 0, I = k.s.b, T = 0; T < A; T += 1)
                    ((D = a[T]).anIndexes[V] = F),
                    ((1 == I && "" !== D.val) || (2 == I && "" !== D.val && " " !== D.val) || (3 == I && (D.n || " " == D.val || T == A - 1)) || (4 == I && (D.n || T == A - 1))) && (1 === k.s.rn && R.push(F), (F += 1));
                s.a[V].s.totalChars = F;
                var O,
                    z = -1;
                if (1 === k.s.rn) for (T = 0; T < A; T += 1) z != (D = a[T]).anIndexes[V] && ((z = D.anIndexes[V]), (O = R.splice(Math.floor(Math.random() * R.length), 1)[0])), (D.anIndexes[V] = O);
            }
            (t.yOffset = t.finalLineHeight || 1.2 * t.finalSize), (t.ls = t.ls || 0), (t.ascent = (m.ascent * t.finalSize) / 100);
        }),
        (TextProperty.prototype.updateDocumentData = function (t, e) {
            e = void 0 === e ? this.keysIndex : e;
            var i = this.copyData({}, this.data.d.k[e].s),
                i = this.copyData(i, t);
            (this.data.d.k[e].s = i), this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.recalculate = function (t) {
            t = this.data.d.k[t].s;
            (t.__complete = !1), (this.keysIndex = 0), (this._isFirstFrame = !0), this.getValue(t);
        }),
        (TextProperty.prototype.canResizeFont = function (t) {
            (this.canResize = t), this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
        }),
        (TextProperty.prototype.setMinimumFontSize = function (t) {
            (this.minimumFontSize = Math.floor(t) || 1), this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
        });
    var TextSelectorProp =
            ((r5 = Math.max),
                (s5 = Math.min),
                (t5 = Math.floor),
                (u5.prototype = {
                    getMult: function (t) {
                        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
                        var e = 0,
                            i = 0,
                            r = 1,
                            n = 1;
                        0 < this.ne.v ? (e = this.ne.v / 100) : (i = -this.ne.v / 100), 0 < this.xe.v ? (r = 1 - this.xe.v / 100) : (n = 1 + this.xe.v / 100);
                        var s = BezierFactory.getBezierEasing(e, i, r, n).get,
                            a = 0,
                            o = this.finalS,
                            e = this.finalE,
                            i = this.data.sh;
                        return (
                            (a =
                                2 === i
                                    ? s((a = e === o ? (e <= t ? 1 : 0) : r5(0, s5(0.5 / (e - o) + (t - o) / (e - o), 1))))
                                    : 3 === i
                                        ? s((a = e === o ? (e <= t ? 0 : 1) : 1 - r5(0, s5(0.5 / (e - o) + (t - o) / (e - o), 1))))
                                        : 4 === i
                                            ? (e === o ? (a = 0) : (a = r5(0, s5(0.5 / (e - o) + (t - o) / (e - o), 1))) < 0.5 ? (a *= 2) : (a = 1 - 2 * (a - 0.5)), s(a))
                                            : 5 === i
                                                ? s((a = e === o ? 0 : ((n = -(r = e - o) / 2 + (t = s5(r5(0, t + 0.5 - o), e - o))), (r = r / 2), Math.sqrt(1 - (n * n) / (r * r)))))
                                                : (6 === i
                                                    ? (a = e === o ? 0 : ((t = s5(r5(0, t + 0.5 - o), e - o)), (1 + Math.cos(Math.PI + (2 * Math.PI * t) / (e - o))) / 2))
                                                    : t >= t5(o) && (a = r5(0, s5(t - o < 0 ? s5(e, 1) - (o - t) : e - t, 1))),
                                                    s(a))),
                            100 !== this.sm.v && (a < (s = 0.5 - 0.5 * (t = 0 === (t = 0.01 * this.sm.v) ? 1e-8 : t)) ? (a = 0) : 1 < (a = (a - s) / t) && (a = 1)),
                            a * this.a.v
                        );
                    },
                    getValue: function (t) {
                        this.iterateDynamicProperties(), (this._mdf = t || this._mdf), (this._currentTextLength = this.elem.textProperty.currentData.l.length || 0), t && 2 === this.data.r && (this.e.v = this._currentTextLength);
                        var e = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                            i = this.o.v / e,
                            t = this.s.v / e + i,
                            e = this.e.v / e + i;
                        e < t && ((i = t), (t = e), (e = i)), (this.finalS = t), (this.finalE = e);
                    },
                }),
                extendPrototype([DynamicPropertyContainer], u5),
                {
                    getTextSelectorProp: function (t, e, i) {
                        return new u5(t, e);
                    },
                }),
        r5,
        s5,
        t5;

    function u5(t, e) {
        (this._currentTextLength = -1),
            (this.k = !1),
            (this.data = e),
            (this.elem = t),
            (this.comp = t.comp),
            (this.finalS = 0),
            (this.finalE = 0),
            this.initDynamicPropertyContainer(t),
            (this.s = PropertyFactory.getProp(t, e.s || {k: 0}, 0, 0, this)),
            (this.e = "e" in e ? PropertyFactory.getProp(t, e.e, 0, 0, this) : {v: 100}),
            (this.o = PropertyFactory.getProp(t, e.o || {k: 0}, 0, 0, this)),
            (this.xe = PropertyFactory.getProp(t, e.xe || {k: 0}, 0, 0, this)),
            (this.ne = PropertyFactory.getProp(t, e.ne || {k: 0}, 0, 0, this)),
            (this.sm = PropertyFactory.getProp(t, e.sm || {k: 100}, 0, 0, this)),
            (this.a = PropertyFactory.getProp(t, e.a, 0, 0.01, this)),
        this.dynamicProperties.length || this.getValue();
    }

    function TextAnimatorDataProperty(t, e, i) {
        var r = {propType: !1},
            n = PropertyFactory.getProp,
            s = e.a;
        (this.a = {
            r: s.r ? n(t, s.r, 0, degToRads, i) : r,
            rx: s.rx ? n(t, s.rx, 0, degToRads, i) : r,
            ry: s.ry ? n(t, s.ry, 0, degToRads, i) : r,
            sk: s.sk ? n(t, s.sk, 0, degToRads, i) : r,
            sa: s.sa ? n(t, s.sa, 0, degToRads, i) : r,
            s: s.s ? n(t, s.s, 1, 0.01, i) : r,
            a: s.a ? n(t, s.a, 1, 0, i) : r,
            o: s.o ? n(t, s.o, 0, 0.01, i) : r,
            p: s.p ? n(t, s.p, 1, 0, i) : r,
            sw: s.sw ? n(t, s.sw, 0, 0, i) : r,
            sc: s.sc ? n(t, s.sc, 1, 0, i) : r,
            fc: s.fc ? n(t, s.fc, 1, 0, i) : r,
            fh: s.fh ? n(t, s.fh, 0, 0, i) : r,
            fs: s.fs ? n(t, s.fs, 0, 0.01, i) : r,
            fb: s.fb ? n(t, s.fb, 0, 0.01, i) : r,
            t: s.t ? n(t, s.t, 0, 0, i) : r,
        }),
            (this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i)),
            (this.s.t = e.s.t);
    }

    function TextAnimatorProperty(t, e, i) {
        (this._isFirstFrame = !0),
            (this._hasMaskedPath = !1),
            (this._frameId = -1),
            (this._textData = t),
            (this._renderType = e),
            (this._elem = i),
            (this._animatorsData = createSizedArray(this._textData.a.length)),
            (this._pathData = {}),
            (this._moreOptions = {alignment: {}}),
            (this.renderedLetters = []),
            (this.lettersChangedFlag = !1),
            this.initDynamicPropertyContainer(i);
    }

    function ITextElement() {
    }

    (TextAnimatorProperty.prototype.searchProperties = function () {
        for (var t, e = this._textData.a.length, i = PropertyFactory.getProp, r = 0; r < e; r += 1) (t = this._textData.a[r]), (this._animatorsData[r] = new TextAnimatorDataProperty(this._elem, t, this));
        this._textData.p && "m" in this._textData.p
            ? ((this._pathData = {
                a: i(this._elem, this._textData.p.a, 0, 0, this),
                f: i(this._elem, this._textData.p.f, 0, 0, this),
                l: i(this._elem, this._textData.p.l, 0, 0, this),
                r: i(this._elem, this._textData.p.r, 0, 0, this),
                p: i(this._elem, this._textData.p.p, 0, 0, this),
                m: this._elem.maskManager.getMaskProperty(this._textData.p.m),
            }),
                (this._hasMaskedPath = !0))
            : (this._hasMaskedPath = !1),
            (this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this));
    }),
        (TextAnimatorProperty.prototype.getMeasures = function (t, e) {
            if (((this.lettersChangedFlag = e), this._mdf || this._isFirstFrame || e || (this._hasMaskedPath && this._pathData.m._mdf))) {
                this._isFirstFrame = !1;
                var i,
                    r,
                    n,
                    s,
                    a,
                    o,
                    l,
                    h,
                    p,
                    c,
                    f,
                    d,
                    u,
                    m = this._moreOptions.alignment.v,
                    y = this._animatorsData,
                    g = this._textData,
                    v = this.mHelper,
                    b = this._renderType,
                    x = this.renderedLetters.length,
                    E = t.l;
                if (this._hasMaskedPath) {
                    if (((u = this._pathData.m), !this._pathData.n || this._pathData._mdf)) {
                        for (var C, P = u.v, S = {
                            tLength: 0,
                            segments: []
                        }, A = (P = this._pathData.r.v ? P.reverse() : P)._length - 1, w = (f = 0); w < A; w += 1)
                            (C = bez.buildBezierData(P.v[w], P.v[w + 1], [P.o[w][0] - P.v[w][0], P.o[w][1] - P.v[w][1]], [P.i[w + 1][0] - P.v[w + 1][0], P.i[w + 1][1] - P.v[w + 1][1]])),
                                (S.tLength += C.segmentLength),
                                S.segments.push(C),
                                (f += C.segmentLength);
                        (w = A),
                        u.v.c &&
                        ((C = bez.buildBezierData(P.v[w], P.v[0], [P.o[w][0] - P.v[w][0], P.o[w][1] - P.v[w][1]], [P.i[0][0] - P.v[0][0], P.i[0][1] - P.v[0][1]])),
                            (S.tLength += C.segmentLength),
                            S.segments.push(C),
                            (f += C.segmentLength)),
                            (this._pathData.pi = S);
                    }
                    if (((S = this._pathData.pi), (i = this._pathData.f.v), (a = 1), (s = !(n = o = 0)), (p = S.segments), i < 0 && u.v.c))
                        for (S.tLength < Math.abs(i) && (i = -Math.abs(i) % S.tLength), a = (h = p[(o = p.length - 1)].points).length - 1; i < 0;) (i += h[a].partialLength), --a < 0 && (a = (h = p[--o].points).length - 1);
                    (l = (h = p[o].points)[a - 1]), (c = (r = h[a]).partialLength);
                }
                A = E.length;
                var T,
                    _,
                    M,
                    k,
                    D,
                    I,
                    F,
                    B,
                    L,
                    R,
                    V,
                    O,
                    z,
                    N,
                    G,
                    H,
                    j = 0,
                    W = 0,
                    q = 1.2 * t.finalSize * 0.714,
                    U = !0,
                    K = y.length,
                    $ = -1,
                    Y = i,
                    X = o,
                    J = a,
                    Z = -1,
                    Q = "",
                    tt = this.defaultPropsArray;
                if (2 === t.j || 1 === t.j) {
                    var et = 0,
                        it = 0,
                        rt = 2 === t.j ? -0.5 : -1,
                        nt = 0,
                        st = !0;
                    for (w = 0; w < A; w += 1)
                        if (E[w].n) {
                            for (et && (et += it); nt < w;) (E[nt].animatorJustifyOffset = et), (nt += 1);
                            st = !(et = 0);
                        } else {
                            for (ot = 0; ot < K; ot += 1)
                                (T = y[ot].a).t.propType && (st && 2 === t.j && (it += T.t.v * rt), (M = y[ot].s.getMult(E[w].anIndexes[ot], g.a[ot].s.totalChars)).length ? (et += T.t.v * M[0] * rt) : (et += T.t.v * M * rt));
                            st = !1;
                        }
                    for (et && (et += it); nt < w;) (E[nt].animatorJustifyOffset = et), (nt += 1);
                }
                for (w = 0; w < A; w += 1) {
                    if ((v.reset(), (F = 1), E[w].n))
                        (j = 0),
                            (W += t.yOffset),
                            (W += U ? 1 : 0),
                            (i = Y),
                            (U = !1),
                        this._hasMaskedPath && ((a = J), (l = (h = p[(o = X)].points)[a - 1]), (c = (r = h[a]).partialLength), (n = 0)),
                            (G = O = N = Q = ""),
                            (tt = this.defaultPropsArray);
                    else {
                        if (this._hasMaskedPath) {
                            if (Z !== E[w].line) {
                                switch (t.j) {
                                    case 1:
                                        i += f - t.lineWidths[E[w].line];
                                        break;
                                    case 2:
                                        i += (f - t.lineWidths[E[w].line]) / 2;
                                }
                                Z = E[w].line;
                            }
                            $ !== E[w].ind && (E[$] && (i += E[$].extra), (i += E[w].an / 2), ($ = E[w].ind)), (i += m[0] * E[w].an * 0.005);
                            for (var at = 0, ot = 0; ot < K; ot += 1)
                                (T = y[ot].a).p.propType && ((M = y[ot].s.getMult(E[w].anIndexes[ot], g.a[ot].s.totalChars)).length ? (at += T.p.v[0] * M[0]) : (at += T.p.v[0] * M)),
                                T.a.propType && ((M = y[ot].s.getMult(E[w].anIndexes[ot], g.a[ot].s.totalChars)).length ? (at += T.a.v[0] * M[0]) : (at += T.a.v[0] * M));
                            for (s = !0, this._pathData.a.v && ((i = 0.5 * E[0].an + ((f - this._pathData.f.v - 0.5 * E[0].an - 0.5 * E[E.length - 1].an) * $) / (A - 1)), (i += this._pathData.f.v)); s;)
                                i + at <= n + c || !h
                                    ? ((d = (i + at - n) / r.partialLength),
                                        (D = l.point[0] + (r.point[0] - l.point[0]) * d),
                                        (I = l.point[1] + (r.point[1] - l.point[1]) * d),
                                        v.translate(-m[0] * E[w].an * 0.005, -m[1] * q * 0.01),
                                        (s = !1))
                                    : h &&
                                    ((n += r.partialLength),
                                    (a += 1) >= h.length && ((a = 0), (h = p[(o += 1)] ? p[o].points : u.v.c ? p[(o = a = 0)].points : ((n -= r.partialLength), null))),
                                    h && ((l = r), (c = (r = h[a]).partialLength)));
                            (k = E[w].an / 2 - E[w].add), v.translate(-k, 0, 0);
                        } else (k = E[w].an / 2 - E[w].add), v.translate(-k, 0, 0), v.translate(-m[0] * E[w].an * 0.005, -m[1] * q * 0.01, 0);
                        for (ot = 0; ot < K; ot += 1)
                            (T = y[ot].a).t.propType &&
                            ((M = y[ot].s.getMult(E[w].anIndexes[ot], g.a[ot].s.totalChars)),
                            (0 === j && 0 === t.j) || (this._hasMaskedPath ? (M.length ? (i += T.t.v * M[0]) : (i += T.t.v * M)) : M.length ? (j += T.t.v * M[0]) : (j += T.t.v * M)));
                        for (t.strokeWidthAnim && (L = t.sw || 0), t.strokeColorAnim && (B = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (R = [t.fc[0], t.fc[1], t.fc[2]]), ot = 0; ot < K; ot += 1)
                            (T = y[ot].a).a.propType &&
                            ((M = y[ot].s.getMult(E[w].anIndexes[ot], g.a[ot].s.totalChars)).length ? v.translate(-T.a.v[0] * M[0], -T.a.v[1] * M[1], T.a.v[2] * M[2]) : v.translate(-T.a.v[0] * M, -T.a.v[1] * M, T.a.v[2] * M));
                        for (ot = 0; ot < K; ot += 1)
                            (T = y[ot].a).s.propType &&
                            ((M = y[ot].s.getMult(E[w].anIndexes[ot], g.a[ot].s.totalChars)).length
                                ? v.scale(1 + (T.s.v[0] - 1) * M[0], 1 + (T.s.v[1] - 1) * M[1], 1)
                                : v.scale(1 + (T.s.v[0] - 1) * M, 1 + (T.s.v[1] - 1) * M, 1));
                        for (ot = 0; ot < K; ot += 1) {
                            if (
                                ((T = y[ot].a),
                                    (M = y[ot].s.getMult(E[w].anIndexes[ot], g.a[ot].s.totalChars)),
                                T.sk.propType && (M.length ? v.skewFromAxis(-T.sk.v * M[0], T.sa.v * M[1]) : v.skewFromAxis(-T.sk.v * M, T.sa.v * M)),
                                T.r.propType && (M.length ? v.rotateZ(-T.r.v * M[2]) : v.rotateZ(-T.r.v * M)),
                                T.ry.propType && (M.length ? v.rotateY(T.ry.v * M[1]) : v.rotateY(T.ry.v * M)),
                                T.rx.propType && (M.length ? v.rotateX(T.rx.v * M[0]) : v.rotateX(T.rx.v * M)),
                                T.o.propType && (M.length ? (F += (T.o.v * M[0] - F) * M[0]) : (F += (T.o.v * M - F) * M)),
                                t.strokeWidthAnim && T.sw.propType && (M.length ? (L += T.sw.v * M[0]) : (L += T.sw.v * M)),
                                t.strokeColorAnim && T.sc.propType)
                            )
                                for (V = 0; V < 3; V += 1) M.length ? (B[V] += (T.sc.v[V] - B[V]) * M[0]) : (B[V] += (T.sc.v[V] - B[V]) * M);
                            if (t.fillColorAnim && t.fc) {
                                if (T.fc.propType) for (V = 0; V < 3; V += 1) M.length ? (R[V] += (T.fc.v[V] - R[V]) * M[0]) : (R[V] += (T.fc.v[V] - R[V]) * M);
                                T.fh.propType && (R = M.length ? addHueToRGB(R, T.fh.v * M[0]) : addHueToRGB(R, T.fh.v * M)),
                                T.fs.propType && (R = M.length ? addSaturationToRGB(R, T.fs.v * M[0]) : addSaturationToRGB(R, T.fs.v * M)),
                                T.fb.propType && (R = M.length ? addBrightnessToRGB(R, T.fb.v * M[0]) : addBrightnessToRGB(R, T.fb.v * M));
                            }
                        }
                        for (ot = 0; ot < K; ot += 1)
                            (T = y[ot].a).p.propType &&
                            ((M = y[ot].s.getMult(E[w].anIndexes[ot], g.a[ot].s.totalChars)),
                                this._hasMaskedPath
                                    ? M.length
                                        ? v.translate(0, T.p.v[1] * M[0], -T.p.v[2] * M[1])
                                        : v.translate(0, T.p.v[1] * M, -T.p.v[2] * M)
                                    : M.length
                                        ? v.translate(T.p.v[0] * M[0], T.p.v[1] * M[1], -T.p.v[2] * M[2])
                                        : v.translate(T.p.v[0] * M, T.p.v[1] * M, -T.p.v[2] * M));
                        if (
                            (t.strokeWidthAnim && (O = L < 0 ? 0 : L),
                            t.strokeColorAnim && (z = "rgb(" + Math.round(255 * B[0]) + "," + Math.round(255 * B[1]) + "," + Math.round(255 * B[2]) + ")"),
                            t.fillColorAnim && t.fc && (N = "rgb(" + Math.round(255 * R[0]) + "," + Math.round(255 * R[1]) + "," + Math.round(255 * R[2]) + ")"),
                                this._hasMaskedPath)
                        )
                            v.translate(0, -t.ls),
                                v.translate(0, m[1] * q * 0.01 + W, 0),
                            this._pathData.p.v && ((H = (r.point[1] - l.point[1]) / (r.point[0] - l.point[0])), (H = (180 * Math.atan(H)) / Math.PI), r.point[0] < l.point[0] && (H += 180), v.rotate((-H * Math.PI) / 180)),
                                v.translate(D, I, 0),
                                (i -= m[0] * E[w].an * 0.005),
                            E[w + 1] && $ !== E[w + 1].ind && ((i += E[w].an / 2), (i += 0.001 * t.tr * t.finalSize));
                        else {
                            switch ((v.translate(j, W, 0), t.ps && v.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j)) {
                                case 1:
                                    v.translate(E[w].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[E[w].line]), 0, 0);
                                    break;
                                case 2:
                                    v.translate(E[w].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[E[w].line]) / 2, 0, 0);
                            }
                            v.translate(0, -t.ls), v.translate(k, 0, 0), v.translate(m[0] * E[w].an * 0.005, m[1] * q * 0.01, 0), (j += E[w].l + 0.001 * t.tr * t.finalSize);
                        }
                        "html" === b
                            ? (Q = v.toCSS())
                            : "svg" === b
                                ? (Q = v.to2dCSS())
                                : (tt = [
                                    v.props[0],
                                    v.props[1],
                                    v.props[2],
                                    v.props[3],
                                    v.props[4],
                                    v.props[5],
                                    v.props[6],
                                    v.props[7],
                                    v.props[8],
                                    v.props[9],
                                    v.props[10],
                                    v.props[11],
                                    v.props[12],
                                    v.props[13],
                                    v.props[14],
                                    v.props[15],
                                ]),
                            (G = F);
                    }
                    x <= w
                        ? ((_ = new LetterProps(G, O, z, N, Q, tt)), this.renderedLetters.push(_), (x += 1), (this.lettersChangedFlag = !0))
                        : ((_ = this.renderedLetters[w]), (this.lettersChangedFlag = _.update(G, O, z, N, Q, tt) || this.lettersChangedFlag));
                }
            }
        }),
        (TextAnimatorProperty.prototype.getValue = function () {
            this._elem.globalData.frameId !== this._frameId && ((this._frameId = this._elem.globalData.frameId), this.iterateDynamicProperties());
        }),
        (TextAnimatorProperty.prototype.mHelper = new Matrix()),
        (TextAnimatorProperty.prototype.defaultPropsArray = []),
        extendPrototype([DynamicPropertyContainer], TextAnimatorProperty),
        (ITextElement.prototype.initElement = function (t, e, i) {
            (this.lettersChangedFlag = !0),
                this.initFrame(),
                this.initBaseData(t, e, i),
                (this.textProperty = new TextProperty(this, t.t, this.dynamicProperties)),
                (this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this)),
                this.initTransform(t, e, i),
                this.initHierarchy(),
                this.initRenderable(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
                this.createContent(),
                this.hide(),
                this.textAnimator.searchProperties(this.dynamicProperties);
        }),
        (ITextElement.prototype.prepareFrame = function (t) {
            (this._mdf = !1), this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
        }),
        (ITextElement.prototype.createPathShape = function (t, e) {
            for (var i, r = e.length, n = "", s = 0; s < r; s += 1) "sh" === e[s].ty && ((i = e[s].ks.k), (n += buildShapeString(i, i.i.length, !0, t)));
            return n;
        }),
        (ITextElement.prototype.updateDocumentData = function (t, e) {
            this.textProperty.updateDocumentData(t, e);
        }),
        (ITextElement.prototype.canResizeFont = function (t) {
            this.textProperty.canResizeFont(t);
        }),
        (ITextElement.prototype.setMinimumFontSize = function (t) {
            this.textProperty.setMinimumFontSize(t);
        }),
        (ITextElement.prototype.applyTextPropertiesToMatrix = function (t, e, i, r, n) {
            switch ((t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j)) {
                case 1:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
                    break;
                case 2:
                    e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0);
            }
            e.translate(r, n, 0);
        }),
        (ITextElement.prototype.buildColor = function (t) {
            return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")";
        }),
        (ITextElement.prototype.emptyProp = new LetterProps()),
        (ITextElement.prototype.destroy = function () {
        }),
        (ITextElement.prototype.validateText = function () {
            (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), (this.textProperty._isFirstFrame = !1), (this.textProperty._mdf = !1));
        });
    var emptyShapeData = {shapes: []};

    function SVGTextLottieElement(t, e, i) {
        (this.textSpans = []), (this.renderType = "svg"), this.initElement(t, e, i);
    }

    function ISolidElement(t, e, i) {
        this.initElement(t, e, i);
    }

    function NullElement(t, e, i) {
        this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy();
    }

    function SVGRendererBase() {
    }

    function ICompElement() {
    }

    function SVGCompElement(t, e, i) {
        (this.layers = t.layers),
            (this.supports3d = !0),
            (this.completeLayers = !1),
            (this.pendingElements = []),
            (this.elements = this.layers ? createSizedArray(this.layers.length) : []),
            this.initElement(t, e, i),
            (this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {_placeholder: !0});
    }

    function SVGRenderer(t, e) {
        (this.animationItem = t), (this.layers = null), (this.renderedFrame = -1), (this.svgElement = createNS("svg"));
        var i,
            r = "";
        e && e.title && ((t = createNS("title")), (i = createElementID()), t.setAttribute("id", i), (t.textContent = e.title), this.svgElement.appendChild(t), (r += i)),
        e && e.description && ((i = createNS("desc")), (n = createElementID()), i.setAttribute("id", n), (i.textContent = e.description), this.svgElement.appendChild(i), (r += " " + n)),
        r && this.svgElement.setAttribute("aria-labelledby", r);
        var n = createNS("defs");
        this.svgElement.appendChild(n);
        r = createNS("g");
        this.svgElement.appendChild(r),
            (this.layerElement = r),
            (this.renderConfig = {
                preserveAspectRatio: (e && e.preserveAspectRatio) || "xMidYMid meet",
                imagePreserveAspectRatio: (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
                contentVisibility: (e && e.contentVisibility) || "visible",
                progressiveLoad: (e && e.progressiveLoad) || !1,
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                viewBoxOnly: (e && e.viewBoxOnly) || !1,
                viewBoxSize: (e && e.viewBoxSize) || !1,
                className: (e && e.className) || "",
                id: (e && e.id) || "",
                focusable: e && e.focusable,
                filterSize: {
                    width: (e && e.filterSize && e.filterSize.width) || "100%",
                    height: (e && e.filterSize && e.filterSize.height) || "100%",
                    x: (e && e.filterSize && e.filterSize.x) || "0%",
                    y: (e && e.filterSize && e.filterSize.y) || "0%",
                },
                width: e && e.width,
                height: e && e.height,
                runExpressions: !e || void 0 === e.runExpressions || e.runExpressions,
            }),
            (this.globalData = {_mdf: !1, frameNum: -1, defs: n, renderConfig: this.renderConfig}),
            (this.elements = []),
            (this.pendingElements = []),
            (this.destroyed = !1),
            (this.rendererType = "svg");
    }

    function ShapeTransformManager() {
        (this.sequences = {}), (this.sequenceList = []), (this.transform_key_count = 0);
    }

    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement),
        (SVGTextLottieElement.prototype.createContent = function () {
            this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
        }),
        (SVGTextLottieElement.prototype.buildTextContents = function (t) {
            for (var e = 0, i = t.length, r = [], n = ""; e < i;) t[e] === String.fromCharCode(13) || t[e] === String.fromCharCode(3) ? (r.push(n), (n = "")) : (n += t[e]), (e += 1);
            return r.push(n), r;
        }),
        (SVGTextLottieElement.prototype.buildShapeData = function (t, e) {
            var i;
            return t.shapes && t.shapes.length && (!(i = t.shapes[0]).it || ((i = i.it[i.it.length - 1]).s && ((i.s.k[0] = e), (i.s.k[1] = e)))), t;
        }),
        (SVGTextLottieElement.prototype.buildNewText = function () {
            this.addDynamicProperty(this);
            var t = this.textProperty.currentData;
            (this.renderedLetters = createSizedArray(t ? t.l.length : 0)),
                t.fc ? this.layerElement.setAttribute("fill", this.buildColor(t.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"),
            t.sc && (this.layerElement.setAttribute("stroke", this.buildColor(t.sc)), this.layerElement.setAttribute("stroke-width", t.sw)),
                this.layerElement.setAttribute("font-size", t.finalSize);
            var e,
                i,
                r = this.globalData.fontManager.getFontByName(t.f);
            r.fClass
                ? this.layerElement.setAttribute("class", r.fClass)
                : (this.layerElement.setAttribute("font-family", r.fFamily), (e = t.fWeight), (i = t.fStyle), this.layerElement.setAttribute("font-style", i), this.layerElement.setAttribute("font-weight", e)),
                this.layerElement.setAttribute("aria-label", t.t);
            var n = t.l || [],
                s = !!this.globalData.fontManager.chars;
            E = n.length;
            var a = this.mHelper,
                o = this.data.singleShape,
                l = 0,
                h = 0,
                p = !0,
                c = 0.001 * t.tr * t.finalSize;
            if (!o || s || t.sz) {
                for (var f, d, u, m, y = this.textSpans.length, g = 0; g < E; g += 1)
                    this.textSpans[g] || (this.textSpans[g] = {span: null, childSpan: null, glyph: null}),
                    (s && o && 0 !== g) ||
                    ((d = g < y ? this.textSpans[g].span : createNS(s ? "g" : "text")),
                    y <= g &&
                    (d.setAttribute("stroke-linecap", "butt"),
                        d.setAttribute("stroke-linejoin", "round"),
                        d.setAttribute("stroke-miterlimit", "4"),
                        (this.textSpans[g].span = d),
                    s && ((u = createNS("g")), d.appendChild(u), (this.textSpans[g].childSpan = u)),
                        (this.textSpans[g].span = d),
                        this.layerElement.appendChild(d)),
                        (d.style.display = "inherit")),
                        a.reset(),
                    o && (n[g].n && ((l = -c), (h += t.yOffset), (h += p ? 1 : 0), (p = !1)), this.applyTextPropertiesToMatrix(t, a, n[g].line, l, h), (l += n[g].l || 0), (l += c)),
                        s
                            ? ((u =
                                1 === (f = this.globalData.fontManager.getCharData(t.finalText[g], r.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)).t
                                    ? new SVGCompElement(f.data, this.globalData, this)
                                    : ((m = emptyShapeData), new SVGShapeElement((m = f.data && f.data.shapes ? this.buildShapeData(f.data, t.finalSize) : m), this.globalData, this))),
                            this.textSpans[g].glyph && ((m = this.textSpans[g].glyph), this.textSpans[g].childSpan.removeChild(m.layerElement), m.destroy()),
                                ((this.textSpans[g].glyph = u)._debug = !0),
                                u.prepareFrame(0),
                                u.renderFrame(),
                                this.textSpans[g].childSpan.appendChild(u.layerElement),
                            1 === f.t && this.textSpans[g].childSpan.setAttribute("transform", "scale(" + t.finalSize / 100 + "," + t.finalSize / 100 + ")"))
                            : (o && d.setAttribute("transform", "translate(" + a.props[12] + "," + a.props[13] + ")"), (d.textContent = n[g].val), d.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"));
                o && d && d.setAttribute("d", "");
            } else {
                var v = this.textContainer,
                    b = "start";
                switch (t.j) {
                    case 1:
                        b = "end";
                        break;
                    case 2:
                        b = "middle";
                        break;
                    default:
                        b = "start";
                }
                v.setAttribute("text-anchor", b), v.setAttribute("letter-spacing", c);
                var x = this.buildTextContents(t.finalText),
                    E = x.length,
                    h = t.ps ? t.ps[1] + t.ascent : 0;
                for (g = 0; g < E; g += 1)
                    ((d = this.textSpans[g].span || createNS("tspan")).textContent = x[g]),
                        d.setAttribute("x", 0),
                        d.setAttribute("y", h),
                        (d.style.display = "inherit"),
                        v.appendChild(d),
                    this.textSpans[g] || (this.textSpans[g] = {span: null, glyph: null}),
                        (this.textSpans[g].span = d),
                        (h += t.finalLineHeight);
                this.layerElement.appendChild(v);
            }
            for (; g < this.textSpans.length;) (this.textSpans[g].span.style.display = "none"), (g += 1);
            this._sizeChanged = !0;
        }),
        (SVGTextLottieElement.prototype.sourceRectAtTime = function () {
            var t;
            return (
                this.prepareFrame(this.comp.renderedFrame - this.data.st),
                    this.renderInnerContent(),
                this._sizeChanged && ((this._sizeChanged = !1), (t = this.layerElement.getBBox()), (this.bbox = {
                    top: t.y,
                    left: t.x,
                    width: t.width,
                    height: t.height
                })),
                    this.bbox
            );
        }),
        (SVGTextLottieElement.prototype.getValue = function () {
            var t,
                e,
                i = this.textSpans.length;
            for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < i; t += 1) (e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0));
        }),
        (SVGTextLottieElement.prototype.renderInnerContent = function () {
            if (
                (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag))
            ) {
                this._sizeChanged = !0;
                for (var t, e, i, r = this.textAnimator.renderedLetters, n = this.textProperty.currentData.l, s = n.length, a = 0; a < s; a += 1)
                    n[a].n ||
                    ((t = r[a]),
                        (e = this.textSpans[a].span),
                    (i = this.textSpans[a].glyph) && i.renderFrame(),
                    t._mdf.m && e.setAttribute("transform", t.m),
                    t._mdf.o && e.setAttribute("opacity", t.o),
                    t._mdf.sw && e.setAttribute("stroke-width", t.sw),
                    t._mdf.sc && e.setAttribute("stroke", t.sc),
                    t._mdf.fc && e.setAttribute("fill", t.fc));
            }
        }),
        extendPrototype([IImageElement], ISolidElement),
        (ISolidElement.prototype.createContent = function () {
            var t = createNS("rect");
            t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
        }),
        (NullElement.prototype.prepareFrame = function (t) {
            this.prepareProperties(t, !0);
        }),
        (NullElement.prototype.renderFrame = function () {
        }),
        (NullElement.prototype.getBaseElement = function () {
            return null;
        }),
        (NullElement.prototype.destroy = function () {
        }),
        (NullElement.prototype.sourceRectAtTime = function () {
        }),
        (NullElement.prototype.hide = function () {
        }),
        extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement),
        extendPrototype([BaseRenderer], SVGRendererBase),
        (SVGRendererBase.prototype.createNull = function (t) {
            return new NullElement(t, this.globalData, this);
        }),
        (SVGRendererBase.prototype.createShape = function (t) {
            return new SVGShapeElement(t, this.globalData, this);
        }),
        (SVGRendererBase.prototype.createText = function (t) {
            return new SVGTextLottieElement(t, this.globalData, this);
        }),
        (SVGRendererBase.prototype.createImage = function (t) {
            return new IImageElement(t, this.globalData, this);
        }),
        (SVGRendererBase.prototype.createSolid = function (t) {
            return new ISolidElement(t, this.globalData, this);
        }),
        (SVGRendererBase.prototype.configAnimation = function (t) {
            this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"),
                this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"),
                this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h),
            this.renderConfig.viewBoxOnly ||
            (this.svgElement.setAttribute("width", t.w),
                this.svgElement.setAttribute("height", t.h),
                (this.svgElement.style.width = "100%"),
                (this.svgElement.style.height = "100%"),
                (this.svgElement.style.transform = "translate3d(0,0,0)"),
                (this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility)),
            this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width),
            this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height),
            this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className),
            this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id),
            void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable),
                this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio),
                this.animationItem.wrapper.appendChild(this.svgElement);
            var e = this.globalData.defs;
            this.setupGlobalData(t, e), (this.globalData.progressiveLoad = this.renderConfig.progressiveLoad), (this.data = t);
            var i = createNS("clipPath"),
                r = createNS("rect");
            r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
            var n = createElementID();
            i.setAttribute("id", n),
                i.appendChild(r),
                this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"),
                e.appendChild(i),
                (this.layers = t.layers),
                (this.elements = createSizedArray(t.layers.length));
        }),
        (SVGRendererBase.prototype.destroy = function () {
            this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), (this.layerElement = null), (this.globalData.defs = null);
            for (var t = this.layers ? this.layers.length : 0, e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
            (this.elements.length = 0), (this.destroyed = !0), (this.animationItem = null);
        }),
        (SVGRendererBase.prototype.updateContainerSize = function () {
        }),
        (SVGRendererBase.prototype.findIndexByInd = function (t) {
            for (var e = 0, i = this.layers.length, e = 0; e < i; e += 1) if (this.layers[e].ind === t) return e;
            return -1;
        }),
        (SVGRendererBase.prototype.buildItem = function (t) {
            var e,
                i,
                r = this.elements;
            r[t] ||
            99 === this.layers[t].ty ||
            ((r[t] = !0),
                (e = this.createItem(this.layers[t])),
                (r[t] = e),
            getExpressionsPlugin() && (0 === this.layers[t].ty && this.globalData.projectInterface.registerComposition(e), e.initExpressions()),
                this.appendElementInPos(e, t),
            this.layers[t].tt &&
            -1 !== (i = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1) &&
            (this.elements[i] && !0 !== this.elements[i] ? ((t = r[i].getMatte(this.layers[t].tt)), e.setMatte(t)) : (this.buildItem(i), this.addPendingElement(e))));
        }),
        (SVGRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length;) {
                var t = this.pendingElements.pop();
                if ((t.checkParenting(), t.data.tt))
                    for (var e = 0, i = this.elements.length; e < i;) {
                        if (this.elements[e] === t) {
                            var r = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1,
                                r = this.elements[r].getMatte(this.layers[e].tt);
                            t.setMatte(r);
                            break;
                        }
                        e += 1;
                    }
            }
        }),
        (SVGRendererBase.prototype.renderFrame = function (t) {
            if (this.renderedFrame !== t && !this.destroyed) {
                var e;
                null === t ? (t = this.renderedFrame) : (this.renderedFrame = t), (this.globalData.frameNum = t), (this.globalData.frameId += 1), (this.globalData.projectInterface.currentFrame = t), (this.globalData._mdf = !1);
                var i = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), e = i - 1; 0 <= e; --e) (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
                if (this.globalData._mdf) for (e = 0; e < i; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
            }
        }),
        (SVGRendererBase.prototype.appendElementInPos = function (t, e) {
            t = t.getBaseElement();
            if (t) {
                for (var i, r = 0; r < e;) this.elements[r] && !0 !== this.elements[r] && this.elements[r].getBaseElement() && (i = this.elements[r].getBaseElement()), (r += 1);
                i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t);
            }
        }),
        (SVGRendererBase.prototype.hide = function () {
            this.layerElement.style.display = "none";
        }),
        (SVGRendererBase.prototype.show = function () {
            this.layerElement.style.display = "block";
        }),
        extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement),
        (ICompElement.prototype.initElement = function (t, e, i) {
            this.initFrame(),
                this.initBaseData(t, e, i),
                this.initTransform(t, e, i),
                this.initRenderable(),
                this.initHierarchy(),
                this.initRendererElement(),
                this.createContainerElements(),
                this.createRenderableComponents(),
            (!this.data.xt && e.progressiveLoad) || this.buildAllItems(),
                this.hide();
        }),
        (ICompElement.prototype.prepareFrame = function (t) {
            if (((this._mdf = !1), this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt)) {
                this.tm._placeholder ? (this.renderedFrame = t / this.data.sr) : ((i = this.tm.v) === this.data.op && (i = this.data.op - 1), (this.renderedFrame = i));
                var e,
                    i = this.elements.length;
                for (this.completeLayers || this.checkLayers(this.renderedFrame), e = i - 1; 0 <= e; --e)
                    (this.completeLayers || this.elements[e]) && (this.elements[e].prepareFrame(this.renderedFrame - this.layers[e].st), this.elements[e]._mdf && (this._mdf = !0));
            }
        }),
        (ICompElement.prototype.renderInnerContent = function () {
            for (var t = this.layers.length, e = 0; e < t; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
        }),
        (ICompElement.prototype.setElements = function (t) {
            this.elements = t;
        }),
        (ICompElement.prototype.getElements = function () {
            return this.elements;
        }),
        (ICompElement.prototype.destroyElements = function () {
            for (var t = this.layers.length, e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy();
        }),
        (ICompElement.prototype.destroy = function () {
            this.destroyElements(), this.destroyBaseElement();
        }),
        extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement),
        (SVGCompElement.prototype.createComp = function (t) {
            return new SVGCompElement(t, this.globalData, this);
        }),
        extendPrototype([SVGRendererBase], SVGRenderer),
        (SVGRenderer.prototype.createComp = function (t) {
            return new SVGCompElement(t, this.globalData, this);
        }),
        (ShapeTransformManager.prototype = {
            addTransformSequence: function (t) {
                for (var e = t.length, i = "_", r = 0; r < e; r += 1) i += t[r].transform.key + "_";
                var n = this.sequences[i];
                return n || ((n = {
                    transforms: [].concat(t),
                    finalTransform: new Matrix(),
                    _mdf: !1
                }), (this.sequences[i] = n), this.sequenceList.push(n)), n;
            },
            processSequence: function (t, e) {
                for (var i = 0, r = t.transforms.length, n = e; i < r && !e;) {
                    if (t.transforms[i].transform.mProps._mdf) {
                        n = !0;
                        break;
                    }
                    i += 1;
                }
                if (n) for (t.finalTransform.reset(), i = r - 1; 0 <= i; --i) t.finalTransform.multiply(t.transforms[i].transform.mProps.v);
                t._mdf = n;
            },
            processSequences: function (t) {
                for (var e = this.sequenceList.length, i = 0; i < e; i += 1) this.processSequence(this.sequenceList[i], t);
            },
            getNewKey: function () {
                return (this.transform_key_count += 1), "_" + this.transform_key_count;
            },
        });
    var lumaLoader = function () {
        var r = "__lottie_element_luma_buffer",
            n = null,
            s = null;

        function e() {
            var t, e, i;
            n ||
            ((t = createNS("svg")),
                (e = createNS("filter")),
                (i = createNS("feColorMatrix")),
                e.setAttribute("id", r),
                i.setAttribute("type", "matrix"),
                i.setAttribute("color-interpolation-filters", "sRGB"),
                i.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"),
                e.appendChild(i),
                t.appendChild(e),
                t.setAttribute("id", r + "_svg"),
            featureSupport.svgLumaHidden && (t.style.display = "none"),
                document.body.appendChild(t),
                (n = createTag("canvas")),
                ((s = n.getContext("2d")).filter = "url(#" + r + ")"),
                (s.fillStyle = "rgba(0,0,0,0)"),
                s.fillRect(0, 0, 1, 1));
        }

        return {
            load: e,
            get: function (t) {
                return n || e(), (n.width = t.width), (n.height = t.height), (s.filter = "url(#" + r + ")"), n;
            },
        };
    };

    function createCanvas(t, e) {
        if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
        var i = createTag("canvas");
        return (i.width = t), (i.height = e), i;
    }

    var assetLoader = {loadLumaCanvas: lumaLoader.load, getLumaCanvas: lumaLoader.get, createCanvas: createCanvas},
        registeredEffects = {};

    function CVEffects(t) {
        var e,
            i = t.data.ef ? t.data.ef.length : 0;
        for (this.filters = [], e = 0; e < i; e += 1) {
            var r = null,
                n = t.data.ef[e].ty;
            (r = registeredEffects[n] ? new registeredEffects[n].effect(t.effectsManager.effectElements[e], t) : r) && this.filters.push(r);
        }
        this.filters.length && t.addRenderableComponent(this);
    }

    function registerEffect(t, e) {
        registeredEffects[t] = {effect: e};
    }

    function CVMaskElement(t, e) {
        (this.data = t), (this.element = e), (this.masksProperties = this.data.masksProperties || []), (this.viewData = createSizedArray(this.masksProperties.length));
        for (var i = this.masksProperties.length, r = !1, n = 0; n < i; n += 1) "n" !== this.masksProperties[n].mode && (r = !0), (this.viewData[n] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[n], 3));
        (this.hasMasks = r) && this.element.addRenderableComponent(this);
    }

    function CVBaseElement() {
    }

    (CVEffects.prototype.renderFrame = function (t) {
        for (var e = this.filters.length, i = 0; i < e; i += 1) this.filters[i].renderFrame(t);
    }),
        (CVEffects.prototype.getEffects = function (t) {
            for (var e = this.filters.length, i = [], r = 0; r < e; r += 1) this.filters[r].type === t && i.push(this.filters[r]);
            return i;
        }),
        (CVMaskElement.prototype.renderFrame = function () {
            if (this.hasMasks) {
                var t,
                    e,
                    i,
                    r,
                    n = this.element.finalTransform.mat,
                    s = this.element.canvasContext,
                    a = this.masksProperties.length;
                for (s.beginPath(), t = 0; t < a; t += 1)
                    if ("n" !== this.masksProperties[t].mode) {
                        this.masksProperties[t].inv &&
                        (s.moveTo(0, 0),
                            s.lineTo(this.element.globalData.compSize.w, 0),
                            s.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h),
                            s.lineTo(0, this.element.globalData.compSize.h),
                            s.lineTo(0, 0)),
                            (r = this.viewData[t].v),
                            (e = n.applyToPointArray(r.v[0][0], r.v[0][1], 0)),
                            s.moveTo(e[0], e[1]);
                        for (var o = r._length, l = 1; l < o; l += 1) (i = n.applyToTriplePoints(r.o[l - 1], r.i[l], r.v[l])), s.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                        (i = n.applyToTriplePoints(r.o[l - 1], r.i[0], r.v[0])), s.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
                    }
                this.element.globalData.renderer.save(!0), s.clip();
            }
        }),
        (CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty),
        (CVMaskElement.prototype.destroy = function () {
            this.element = null;
        });
    var operationsMap = {1: "source-in", 2: "source-out", 3: "source-in", 4: "source-out"};

    function CVShapeData(t, e, i, r) {
        (this.styledShapes = []), (this.tr = [0, 0, 0, 0, 0, 0]);
        var n = 4;
        "rc" === e.ty ? (n = 5) : "el" === e.ty ? (n = 6) : "sr" === e.ty && (n = 7), (this.sh = ShapePropertyFactory.getShapeProp(t, e, n, t));
        for (var s, a = i.length, o = 0; o < a; o += 1) i[o].closed || ((s = {
            transforms: r.addTransformSequence(i[o].transforms),
            trNodes: []
        }), this.styledShapes.push(s), i[o].elements.push(s));
    }

    function CVShapeElement(t, e, i) {
        (this.shapes = []),
            (this.shapesData = t.shapes),
            (this.stylesList = []),
            (this.itemsData = []),
            (this.prevViewData = []),
            (this.shapeModifiers = []),
            (this.processedElements = []),
            (this.transformsManager = new ShapeTransformManager()),
            this.initElement(t, e, i);
    }

    function CVTextElement(t, e, i) {
        (this.textSpans = []),
            (this.yOffset = 0),
            (this.fillColorAnim = !1),
            (this.strokeColorAnim = !1),
            (this.strokeWidthAnim = !1),
            (this.stroke = !1),
            (this.fill = !1),
            (this.justifyOffset = 0),
            (this.currentRender = null),
            (this.renderType = "canvas"),
            (this.values = {fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: ""}),
            this.initElement(t, e, i);
    }

    function CVImageElement(t, e, i) {
        (this.assetData = e.getAssetData(t.refId)), (this.img = e.imageLoader.getAsset(this.assetData)), this.initElement(t, e, i);
    }

    function CVSolidElement(t, e, i) {
        this.initElement(t, e, i);
    }

    function CanvasRendererBase() {
    }

    function CanvasContext() {
        (this.opacity = -1),
            (this.transform = createTypedArray("float32", 16)),
            (this.fillStyle = ""),
            (this.strokeStyle = ""),
            (this.lineWidth = ""),
            (this.lineCap = ""),
            (this.lineJoin = ""),
            (this.miterLimit = ""),
            (this.id = Math.random());
    }

    function CVContextData() {
        var t;
        for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix(), t = 0; t < 15; t += 1) {
            var e = new CanvasContext();
            this.stack[t] = e;
        }
        (this._length = 15),
            (this.nativeContext = null),
            (this.transformMat = new Matrix()),
            (this.currentOpacity = 1),
            (this.currentFillStyle = ""),
            (this.appliedFillStyle = ""),
            (this.currentStrokeStyle = ""),
            (this.appliedStrokeStyle = ""),
            (this.currentLineWidth = ""),
            (this.appliedLineWidth = ""),
            (this.currentLineCap = ""),
            (this.appliedLineCap = ""),
            (this.currentLineJoin = ""),
            (this.appliedLineJoin = ""),
            (this.appliedMiterLimit = ""),
            (this.currentMiterLimit = "");
    }

    function CVCompElement(t, e, i) {
        (this.completeLayers = !1),
            (this.layers = t.layers),
            (this.pendingElements = []),
            (this.elements = createSizedArray(this.layers.length)),
            this.initElement(t, e, i),
            (this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {_placeholder: !0});
    }

    function CanvasRenderer(t, e) {
        (this.animationItem = t),
            (this.renderConfig = {
                clearCanvas: !e || void 0 === e.clearCanvas || e.clearCanvas,
                context: (e && e.context) || null,
                progressiveLoad: (e && e.progressiveLoad) || !1,
                preserveAspectRatio: (e && e.preserveAspectRatio) || "xMidYMid meet",
                imagePreserveAspectRatio: (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
                contentVisibility: (e && e.contentVisibility) || "visible",
                className: (e && e.className) || "",
                id: (e && e.id) || "",
                runExpressions: !e || void 0 === e.runExpressions || e.runExpressions,
            }),
            (this.renderConfig.dpr = (e && e.dpr) || 1),
        this.animationItem.wrapper && (this.renderConfig.dpr = (e && e.dpr) || window.devicePixelRatio || 1),
            (this.renderedFrame = -1),
            (this.globalData = {frameNum: -1, _mdf: !1, renderConfig: this.renderConfig, currentGlobalAlpha: -1}),
            (this.contextData = new CVContextData()),
            (this.elements = []),
            (this.pendingElements = []),
            (this.transformMat = new Matrix()),
            (this.completeLayers = !1),
            (this.rendererType = "canvas"),
        this.renderConfig.clearCanvas &&
        ((this.ctxTransform = this.contextData.transform.bind(this.contextData)),
            (this.ctxOpacity = this.contextData.opacity.bind(this.contextData)),
            (this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData)),
            (this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData)),
            (this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData)),
            (this.ctxLineCap = this.contextData.lineCap.bind(this.contextData)),
            (this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData)),
            (this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData)),
            (this.ctxFill = this.contextData.fill.bind(this.contextData)),
            (this.ctxFillRect = this.contextData.fillRect.bind(this.contextData)),
            (this.ctxStroke = this.contextData.stroke.bind(this.contextData)),
            (this.save = this.contextData.save.bind(this.contextData)));
    }

    function HBaseElement() {
    }

    function HSolidElement(t, e, i) {
        this.initElement(t, e, i);
    }

    function HShapeElement(t, e, i) {
        (this.shapes = []),
            (this.shapesData = t.shapes),
            (this.stylesList = []),
            (this.shapeModifiers = []),
            (this.itemsData = []),
            (this.processedElements = []),
            (this.animatedContents = []),
            (this.shapesContainer = createNS("g")),
            this.initElement(t, e, i),
            (this.prevViewData = []),
            (this.currentBBox = {x: 999999, y: -999999, h: 0, w: 0});
    }

    function HTextElement(t, e, i) {
        (this.textSpans = []), (this.textPaths = []), (this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
        }), (this.renderType = "svg"), (this.isMasked = !1), this.initElement(t, e, i);
    }

    function HCameraElement(t, e, i) {
        this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
        i = PropertyFactory.getProp;
        if (
            ((this.pe = i(this, t.pe, 0, 0, this)),
                t.ks.p.s ? ((this.px = i(this, t.ks.p.x, 1, 0, this)), (this.py = i(this, t.ks.p.y, 1, 0, this)), (this.pz = i(this, t.ks.p.z, 1, 0, this))) : (this.p = i(this, t.ks.p, 1, 0, this)),
            t.ks.a && (this.a = i(this, t.ks.a, 1, 0, this)),
            t.ks.or.k.length && t.ks.or.k[0].to)
        )
            for (var r = t.ks.or.k.length, n = 0; n < r; n += 1) (t.ks.or.k[n].to = null), (t.ks.or.k[n].ti = null);
        (this.or = i(this, t.ks.or, 1, degToRads, this)),
            (this.or.sh = !0),
            (this.rx = i(this, t.ks.rx, 0, degToRads, this)),
            (this.ry = i(this, t.ks.ry, 0, degToRads, this)),
            (this.rz = i(this, t.ks.rz, 0, degToRads, this)),
            (this.mat = new Matrix()),
            (this._prevMat = new Matrix()),
            (this._isFirstFrame = !0),
            (this.finalTransform = {mProp: this});
    }

    function HImageElement(t, e, i) {
        (this.assetData = e.getAssetData(t.refId)), this.initElement(t, e, i);
    }

    function HybridRendererBase(t, e) {
        (this.animationItem = t),
            (this.layers = null),
            (this.renderedFrame = -1),
            (this.renderConfig = {
                className: (e && e.className) || "",
                imagePreserveAspectRatio: (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                filterSize: {
                    width: (e && e.filterSize && e.filterSize.width) || "400%",
                    height: (e && e.filterSize && e.filterSize.height) || "400%",
                    x: (e && e.filterSize && e.filterSize.x) || "-100%",
                    y: (e && e.filterSize && e.filterSize.y) || "-100%",
                },
            }),
            (this.globalData = {_mdf: !1, frameNum: -1, renderConfig: this.renderConfig}),
            (this.pendingElements = []),
            (this.elements = []),
            (this.threeDElements = []),
            (this.destroyed = !1),
            (this.camera = null),
            (this.supports3d = !0),
            (this.rendererType = "html");
    }

    function HCompElement(t, e, i) {
        (this.layers = t.layers),
            (this.supports3d = !t.hasMask),
            (this.completeLayers = !1),
            (this.pendingElements = []),
            (this.elements = this.layers ? createSizedArray(this.layers.length) : []),
            this.initElement(t, e, i),
            (this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : {_placeholder: !0});
    }

    function HybridRenderer(t, e) {
        (this.animationItem = t),
            (this.layers = null),
            (this.renderedFrame = -1),
            (this.renderConfig = {
                className: (e && e.className) || "",
                imagePreserveAspectRatio: (e && e.imagePreserveAspectRatio) || "xMidYMid slice",
                hideOnTransparent: !(e && !1 === e.hideOnTransparent),
                filterSize: {
                    width: (e && e.filterSize && e.filterSize.width) || "400%",
                    height: (e && e.filterSize && e.filterSize.height) || "400%",
                    x: (e && e.filterSize && e.filterSize.x) || "-100%",
                    y: (e && e.filterSize && e.filterSize.y) || "-100%",
                },
                runExpressions: !e || void 0 === e.runExpressions || e.runExpressions,
            }),
            (this.globalData = {_mdf: !1, frameNum: -1, renderConfig: this.renderConfig}),
            (this.pendingElements = []),
            (this.elements = []),
            (this.threeDElements = []),
            (this.destroyed = !1),
            (this.camera = null),
            (this.supports3d = !0),
            (this.rendererType = "html");
    }

    (CVBaseElement.prototype = {
        createElements: function () {
        },
        initRendererElement: function () {
        },
        createContainerElements: function () {
            var t, e;
            1 <= this.data.tt &&
            ((this.buffers = []),
                (e = this.globalData.canvasContext),
                (t = assetLoader.createCanvas(e.canvas.width, e.canvas.height)),
                this.buffers.push(t),
                (e = assetLoader.createCanvas(e.canvas.width, e.canvas.height)),
                this.buffers.push(e),
            3 <= this.data.tt && !document._isProxy && assetLoader.loadLumaCanvas()),
                (this.canvasContext = this.globalData.canvasContext),
                (this.transformCanvas = this.globalData.transformCanvas),
                (this.renderableEffectsManager = new CVEffects(this)),
                this.searchEffectTransforms();
        },
        createContent: function () {
        },
        setBlendMode: function () {
            var t,
                e = this.globalData;
            e.blendMode !== this.data.bm && ((e.blendMode = this.data.bm), (t = getBlendMode(this.data.bm)), (e.canvasContext.globalCompositeOperation = t));
        },
        createRenderableComponents: function () {
            (this.maskManager = new CVMaskElement(this.data, this)), (this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT));
        },
        hideElement: function () {
            this.hidden || (this.isInRange && !this.isTransparent) || (this.hidden = !0);
        },
        showElement: function () {
            this.isInRange && !this.isTransparent && ((this.hidden = !1), (this._isFirstFrame = !0), (this.maskManager._isFirstFrame = !0));
        },
        clearCanvas: function (t) {
            t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
        },
        prepareLayer: function () {
            var t;
            1 <= this.data.tt &&
            ((t = this.buffers[0].getContext("2d")),
                this.clearCanvas(t),
                t.drawImage(this.canvasContext.canvas, 0, 0),
                (this.currentTransform = this.canvasContext.getTransform()),
                this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
                this.clearCanvas(this.canvasContext),
                this.canvasContext.setTransform(this.currentTransform));
        },
        exitLayer: function () {
            var t, e;
            1 <= this.data.tt &&
            ((e = (t = this.buffers[1]).getContext("2d")),
                this.clearCanvas(e),
                e.drawImage(this.canvasContext.canvas, 0, 0),
                this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
                this.clearCanvas(this.canvasContext),
                this.canvasContext.setTransform(this.currentTransform),
                this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0),
                this.canvasContext.setTransform(1, 0, 0, 1, 0, 0),
            3 <= this.data.tt &&
            !document._isProxy &&
            ((e = assetLoader.getLumaCanvas(this.canvasContext.canvas)).getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(e, 0, 0)),
                (this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt]),
                this.canvasContext.drawImage(t, 0, 0),
                (this.canvasContext.globalCompositeOperation = "destination-over"),
                this.canvasContext.drawImage(this.buffers[0], 0, 0),
                this.canvasContext.setTransform(this.currentTransform),
                (this.canvasContext.globalCompositeOperation = "source-over"));
        },
        renderFrame: function (t) {
            this.hidden ||
            this.data.hd ||
            (1 === this.data.td && !t) ||
            (this.renderTransform(),
                this.renderRenderable(),
                this.renderLocalTransform(),
                this.setBlendMode(),
                (t = 0 === this.data.ty),
                this.prepareLayer(),
                this.globalData.renderer.save(t),
                this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props),
                this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity),
                this.renderInnerContent(),
                this.globalData.renderer.restore(t),
                this.exitLayer(),
            this.maskManager.hasMasks && this.globalData.renderer.restore(!0),
            this._isFirstFrame && (this._isFirstFrame = !1));
        },
        destroy: function () {
            (this.canvasContext = null), (this.data = null), (this.globalData = null), this.maskManager.destroy();
        },
        mHelper: new Matrix(),
    }),
        (CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement),
        (CVBaseElement.prototype.show = CVBaseElement.prototype.showElement),
        (CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated),
        extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement),
        (CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement),
        (CVShapeElement.prototype.transformHelper = {opacity: 1, _opMdf: !1}),
        (CVShapeElement.prototype.dashResetter = []),
        (CVShapeElement.prototype.createContent = function () {
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
        }),
        (CVShapeElement.prototype.createStyleElement = function (t, e) {
            var i = {
                    data: t,
                    type: t.ty,
                    preTransforms: this.transformsManager.addTransformSequence(e),
                    transforms: [],
                    elements: [],
                    closed: !0 === t.hd
                },
                r = {};
            return (
                "fl" === t.ty || "st" === t.ty
                    ? ((r.c = PropertyFactory.getProp(this, t.c, 1, 255, this)), r.c.k || (i.co = "rgb(" + bmFloor(r.c.v[0]) + "," + bmFloor(r.c.v[1]) + "," + bmFloor(r.c.v[2]) + ")"))
                    : ("gf" !== t.ty && "gs" !== t.ty) ||
                    ((r.s = PropertyFactory.getProp(this, t.s, 1, null, this)),
                        (r.e = PropertyFactory.getProp(this, t.e, 1, null, this)),
                        (r.h = PropertyFactory.getProp(this, t.h || {k: 0}, 0, 0.01, this)),
                        (r.a = PropertyFactory.getProp(this, t.a || {k: 0}, 0, degToRads, this)),
                        (r.g = new GradientProperty(this, t.g, this))),
                    (r.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this)),
                    "st" === t.ty || "gs" === t.ty
                        ? ((i.lc = lineCapEnum[t.lc || 2]),
                            (i.lj = lineJoinEnum[t.lj || 2]),
                        1 == t.lj && (i.ml = t.ml),
                            (r.w = PropertyFactory.getProp(this, t.w, 0, null, this)),
                        r.w.k || (i.wi = r.w.v),
                        t.d && ((e = new DashProperty(this, t.d, "canvas", this)), (r.d = e), r.d.k || ((i.da = r.d.dashArray), (i.do = r.d.dashoffset[0]))))
                        : (i.r = 2 === t.r ? "evenodd" : "nonzero"),
                    this.stylesList.push(i),
                    (r.style = i),
                    r
            );
        }),
        (CVShapeElement.prototype.createGroupElement = function () {
            return {it: [], prevViewData: []};
        }),
        (CVShapeElement.prototype.createTransformElement = function (t) {
            return {
                transform: {
                    opacity: 1,
                    _opMdf: !1,
                    key: this.transformsManager.getNewKey(),
                    op: PropertyFactory.getProp(this, t.o, 0, 0.01, this),
                    mProps: TransformPropertyFactory.getTransformProperty(this, t, this)
                }
            };
        }),
        (CVShapeElement.prototype.createShapeElement = function (t) {
            t = new CVShapeData(this, t, this.stylesList, this.transformsManager);
            return this.shapes.push(t), this.addShapeToModifiers(t), t;
        }),
        (CVShapeElement.prototype.reloadShapes = function () {
            this._isFirstFrame = !0;
            for (var t = this.itemsData.length, e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
            for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
            this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
        }),
        (CVShapeElement.prototype.addTransformToStyleList = function (t) {
            for (var e = this.stylesList.length, i = 0; i < e; i += 1) this.stylesList[i].closed || this.stylesList[i].transforms.push(t);
        }),
        (CVShapeElement.prototype.removeTransformFromStyleList = function () {
            for (var t = this.stylesList.length, e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop();
        }),
        (CVShapeElement.prototype.closeStyles = function (t) {
            for (var e = t.length, i = 0; i < e; i += 1) t[i].closed = !0;
        }),
        (CVShapeElement.prototype.searchShapes = function (t, e, i, r, n) {
            for (var s, a, o, l, h, p = t.length - 1, c = [], f = [], d = [].concat(n), u = p; 0 <= u; --u) {
                if (((o = this.searchProcessedElement(t[u])) ? (e[u] = i[o - 1]) : (t[u]._shouldRender = r), "fl" === t[u].ty || "st" === t[u].ty || "gf" === t[u].ty || "gs" === t[u].ty))
                    o ? (e[u].style.closed = !1) : (e[u] = this.createStyleElement(t[u], d)), c.push(e[u].style);
                else if ("gr" === t[u].ty) {
                    if (o) for (a = e[u].it.length, s = 0; s < a; s += 1) e[u].prevViewData[s] = e[u].it[s];
                    else e[u] = this.createGroupElement(t[u]);
                    this.searchShapes(t[u].it, e[u].it, e[u].prevViewData, r, d);
                } else
                    "tr" === t[u].ty
                        ? (o || ((h = this.createTransformElement(t[u])), (e[u] = h)), d.push(e[u]), this.addTransformToStyleList(e[u]))
                        : "sh" === t[u].ty || "rc" === t[u].ty || "el" === t[u].ty || "sr" === t[u].ty
                            ? o || (e[u] = this.createShapeElement(t[u]))
                            : "tm" === t[u].ty || "rd" === t[u].ty || "pb" === t[u].ty || "zz" === t[u].ty || "op" === t[u].ty
                                ? (o ? ((l = e[u]).closed = !1) : ((l = ShapeModifiers.getModifier(t[u].ty)).init(this, t[u]), (e[u] = l), this.shapeModifiers.push(l)), f.push(l))
                                : "rp" === t[u].ty && (o ? ((l = e[u]).closed = !0) : ((l = ShapeModifiers.getModifier(t[u].ty)), (e[u] = l).init(this, t, u, e), this.shapeModifiers.push(l), (r = !1)), f.push(l));
                this.addProcessedElement(t[u], u + 1);
            }
            for (this.removeTransformFromStyleList(), this.closeStyles(c), p = f.length, u = 0; u < p; u += 1) f[u].closed = !0;
        }),
        (CVShapeElement.prototype.renderInnerContent = function () {
            (this.transformHelper.opacity = 1),
                (this.transformHelper._opMdf = !1),
                this.renderModifiers(),
                this.transformsManager.processSequences(this._isFirstFrame),
                this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
        }),
        (CVShapeElement.prototype.renderShapeTransform = function (t, e) {
            (t._opMdf || e.op._mdf || this._isFirstFrame) && ((e.opacity = t.opacity), (e.opacity *= e.op.v), (e._opMdf = !0));
        }),
        (CVShapeElement.prototype.drawLayer = function () {
            for (var t, e, i, r, n, s, a, o, l = this.stylesList.length, h = this.globalData.renderer, p = this.globalData.canvasContext, c = 0; c < l; c += 1)
                if ((("st" !== (a = (o = this.stylesList[c]).type) && "gs" !== a) || 0 !== o.wi) && o.data._shouldRender && 0 !== o.coOp && 0 !== this.globalData.currentGlobalAlpha) {
                    for (
                        h.save(),
                            n = o.elements,
                            "st" === a || "gs" === a
                                ? (h.ctxStrokeStyle("st" === a ? o.co : o.grd), h.ctxLineWidth(o.wi), h.ctxLineCap(o.lc), h.ctxLineJoin(o.lj), h.ctxMiterLimit(o.ml || 0))
                                : h.ctxFillStyle("fl" === a ? o.co : o.grd),
                            h.ctxOpacity(o.coOp),
                        "st" !== a && "gs" !== a && p.beginPath(),
                            h.ctxTransform(o.preTransforms.finalTransform.props),
                            e = n.length,
                            t = 0;
                        t < e;
                        t += 1
                    ) {
                        for (("st" !== a && "gs" !== a) || (p.beginPath(), o.da && (p.setLineDash(o.da), (p.lineDashOffset = o.do))), r = (s = n[t].trNodes).length, i = 0; i < r; i += 1)
                            "m" === s[i].t ? p.moveTo(s[i].p[0], s[i].p[1]) : "c" === s[i].t ? p.bezierCurveTo(s[i].pts[0], s[i].pts[1], s[i].pts[2], s[i].pts[3], s[i].pts[4], s[i].pts[5]) : p.closePath();
                        ("st" !== a && "gs" !== a) || (h.ctxStroke(), o.da && p.setLineDash(this.dashResetter));
                    }
                    "st" !== a && "gs" !== a && this.globalData.renderer.ctxFill(o.r), h.restore();
                }
        }),
        (CVShapeElement.prototype.renderShape = function (t, e, i, r) {
            for (var n = t, s = e.length - 1; 0 <= s; --s)
                "tr" === e[s].ty
                    ? ((n = i[s].transform), this.renderShapeTransform(t, n))
                    : "sh" === e[s].ty || "el" === e[s].ty || "rc" === e[s].ty || "sr" === e[s].ty
                        ? this.renderPath(e[s], i[s])
                        : "fl" === e[s].ty
                            ? this.renderFill(e[s], i[s], n)
                            : "st" === e[s].ty
                                ? this.renderStroke(e[s], i[s], n)
                                : "gf" === e[s].ty || "gs" === e[s].ty
                                    ? this.renderGradientFill(e[s], i[s], n)
                                    : "gr" === e[s].ty
                                        ? this.renderShape(n, e[s].it, i[s].it)
                                        : e[s].ty;
            r && this.drawLayer();
        }),
        (CVShapeElement.prototype.renderStyledShape = function (t, e) {
            if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
                var i,
                    r,
                    n = t.trNodes,
                    s = e.paths,
                    a = s._length;
                n.length = 0;
                for (var o = t.transforms.finalTransform, l = 0; l < a; l += 1) {
                    var h = s.shapes[l];
                    if (h && h.v) {
                        for (r = h._length, i = 1; i < r; i += 1) 1 === i && n.push({
                            t: "m",
                            p: o.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                        }), n.push({t: "c", pts: o.applyToTriplePoints(h.o[i - 1], h.i[i], h.v[i])});
                        1 === r && n.push({
                            t: "m",
                            p: o.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                        }), h.c && r && (n.push({
                            t: "c",
                            pts: o.applyToTriplePoints(h.o[i - 1], h.i[0], h.v[0])
                        }), n.push({t: "z"}));
                    }
                }
                t.trNodes = n;
            }
        }),
        (CVShapeElement.prototype.renderPath = function (t, e) {
            if (!0 !== t.hd && t._shouldRender) for (var i = e.styledShapes.length, r = 0; r < i; r += 1) this.renderStyledShape(e.styledShapes[r], e.sh);
        }),
        (CVShapeElement.prototype.renderFill = function (t, e, i) {
            var r = e.style;
            (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity);
        }),
        (CVShapeElement.prototype.renderGradientFill = function (t, e, i) {
            var r = e.style;
            if (!r.grd || e.g._mdf || e.s._mdf || e.e._mdf || (1 !== t.t && (e.h._mdf || e.a._mdf))) {
                var n,
                    s,
                    a,
                    o,
                    l = this.globalData.canvasContext,
                    h = e.s.v,
                    p = e.e.v;
                o =
                    1 === t.t
                        ? l.createLinearGradient(h[0], h[1], p[0], p[1])
                        : ((n = Math.sqrt(Math.pow(h[0] - p[0], 2) + Math.pow(h[1] - p[1], 2))),
                            (s = Math.atan2(p[1] - h[1], p[0] - h[0])),
                            1 <= (a = e.h.v) ? (a = 0.99) : a <= -1 && (a = -0.99),
                            (p = n * a),
                            (a = Math.cos(s + e.a.v) * p + h[0]),
                            (p = Math.sin(s + e.a.v) * p + h[1]),
                            l.createRadialGradient(a, p, 0, h[0], h[1], n));
                for (var c = t.g.p, f = e.g.c, d = 1, u = 0; u < c; u += 1)
                    e.g._hasOpacity && e.g._collapsable && (d = e.g.o[2 * u + 1]), o.addColorStop(f[4 * u] / 100, "rgba(" + f[4 * u + 1] + "," + f[4 * u + 2] + "," + f[4 * u + 3] + "," + d + ")");
                r.grd = o;
            }
            r.coOp = e.o.v * i.opacity;
        }),
        (CVShapeElement.prototype.renderStroke = function (t, e, i) {
            var r = e.style,
                n = e.d;
            n && (n._mdf || this._isFirstFrame) && ((r.da = n.dashArray), (r.do = n.dashoffset[0])),
            (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"),
            (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity),
            (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v);
        }),
        (CVShapeElement.prototype.destroy = function () {
            (this.shapesData = null), (this.globalData = null), (this.canvasContext = null), (this.stylesList.length = 0), (this.itemsData.length = 0);
        }),
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement),
        (CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d")),
        (CVTextElement.prototype.buildNewText = function () {
            var t = this.textProperty.currentData;
            this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
            var e = !1;
            t.fc ? ((e = !0), (this.values.fill = this.buildColor(t.fc))) : (this.values.fill = "rgba(0,0,0,0)"), (this.fill = e);
            e = !1;
            t.sc && ((e = !0), (this.values.stroke = this.buildColor(t.sc)), (this.values.sWidth = t.sw));
            var i,
                r,
                n,
                s,
                a,
                o,
                l,
                h = this.globalData.fontManager.getFontByName(t.f),
                p = t.l,
                c = this.mHelper;
            (this.stroke = e), (this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily);
            for (var f = t.finalText.length, d = this.data.singleShape, u = 0.001 * t.tr * t.finalSize, m = 0, y = 0, g = !0, v = 0, b = 0; b < f; b += 1) {
                (i = ((i = this.globalData.fontManager.getCharData(t.finalText[b], h.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && i.data) || {}),
                    c.reset(),
                d && p[b].n && ((m = -u), (y += t.yOffset), (y += g ? 1 : 0), (g = !1)),
                    (a = (s = i.shapes ? i.shapes[0].it : []).length),
                    c.scale(t.finalSize / 100, t.finalSize / 100),
                d && this.applyTextPropertiesToMatrix(t, c, p[b].line, m, y);
                for (var x = createSizedArray(a - 1), E = 0, C = 0; C < a; C += 1)
                    if ("sh" === s[C].ty) {
                        for (n = s[C].ks.k.i.length, o = s[C].ks.k, l = [], r = 1; r < n; r += 1)
                            1 === r && l.push(c.applyToX(o.v[0][0], o.v[0][1], 0), c.applyToY(o.v[0][0], o.v[0][1], 0)),
                                l.push(
                                    c.applyToX(o.o[r - 1][0], o.o[r - 1][1], 0),
                                    c.applyToY(o.o[r - 1][0], o.o[r - 1][1], 0),
                                    c.applyToX(o.i[r][0], o.i[r][1], 0),
                                    c.applyToY(o.i[r][0], o.i[r][1], 0),
                                    c.applyToX(o.v[r][0], o.v[r][1], 0),
                                    c.applyToY(o.v[r][0], o.v[r][1], 0)
                                );
                        l.push(
                            c.applyToX(o.o[r - 1][0], o.o[r - 1][1], 0),
                            c.applyToY(o.o[r - 1][0], o.o[r - 1][1], 0),
                            c.applyToX(o.i[0][0], o.i[0][1], 0),
                            c.applyToY(o.i[0][0], o.i[0][1], 0),
                            c.applyToX(o.v[0][0], o.v[0][1], 0),
                            c.applyToY(o.v[0][0], o.v[0][1], 0)
                        ),
                            (x[E] = l),
                            (E += 1);
                    }
                d && ((m += p[b].l), (m += u)), this.textSpans[v] ? (this.textSpans[v].elem = x) : (this.textSpans[v] = {elem: x}), (v += 1);
            }
        }),
        (CVTextElement.prototype.renderInnerContent = function () {
            var t, e, i, r;
            this.validateText(),
                (this.canvasContext.font = this.values.fValue),
                this.globalData.renderer.ctxLineCap("butt"),
                this.globalData.renderer.ctxLineJoin("miter"),
                this.globalData.renderer.ctxMiterLimit(4),
            this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
            for (var n, s, a, o = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l, h = l.length, p = null, c = null, f = null, d = this.globalData.renderer, u = 0; u < h; u += 1)
                if (!l[u].n) {
                    if (((n = o[u]) && (d.save(), d.ctxTransform(n.p), d.ctxOpacity(n.o)), this.fill)) {
                        for (
                            n && n.fc ? p !== n.fc && (d.ctxFillStyle(n.fc), (p = n.fc)) : p !== this.values.fill && ((p = this.values.fill), d.ctxFillStyle(this.values.fill)),
                                e = (s = this.textSpans[u].elem).length,
                                this.globalData.canvasContext.beginPath(),
                                t = 0;
                            t < e;
                            t += 1
                        )
                            for (r = (a = s[t]).length, this.globalData.canvasContext.moveTo(a[0], a[1]), i = 2; i < r; i += 6) this.globalData.canvasContext.bezierCurveTo(a[i], a[i + 1], a[i + 2], a[i + 3], a[i + 4], a[i + 5]);
                        this.globalData.canvasContext.closePath(), d.ctxFill();
                    }
                    if (this.stroke) {
                        for (
                            n && n.sw ? f !== n.sw && ((f = n.sw), d.ctxLineWidth(n.sw)) : f !== this.values.sWidth && ((f = this.values.sWidth), d.ctxLineWidth(this.values.sWidth)),
                                n && n.sc ? c !== n.sc && ((c = n.sc), d.ctxStrokeStyle(n.sc)) : c !== this.values.stroke && ((c = this.values.stroke), d.ctxStrokeStyle(this.values.stroke)),
                                e = (s = this.textSpans[u].elem).length,
                                this.globalData.canvasContext.beginPath(),
                                t = 0;
                            t < e;
                            t += 1
                        )
                            for (r = (a = s[t]).length, this.globalData.canvasContext.moveTo(a[0], a[1]), i = 2; i < r; i += 6) this.globalData.canvasContext.bezierCurveTo(a[i], a[i + 1], a[i + 2], a[i + 3], a[i + 4], a[i + 5]);
                        this.globalData.canvasContext.closePath(), d.ctxStroke();
                    }
                    n && this.globalData.renderer.restore();
                }
        }),
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement),
        (CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement),
        (CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame),
        (CVImageElement.prototype.createContent = function () {
            var t, e, i, r, n, s, a, o, l;
            !this.img.width ||
            (this.assetData.w === this.img.width && this.assetData.h === this.img.height) ||
            (((t = createTag("canvas")).width = this.assetData.w),
                (t.height = this.assetData.h),
                (r = t.getContext("2d")),
                (a = (n = this.img.width) / (s = this.img.height)),
                (o = this.assetData.w / this.assetData.h),
                (l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio),
                (o < a && "xMidYMid slice" === l) || (a < o && "xMidYMid slice" !== l) ? (e = (i = s) * o) : (i = (e = n) / o),
                r.drawImage(this.img, (n - e) / 2, (s - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h),
                (this.img = t));
        }),
        (CVImageElement.prototype.renderInnerContent = function () {
            this.canvasContext.drawImage(this.img, 0, 0);
        }),
        (CVImageElement.prototype.destroy = function () {
            this.img = null;
        }),
        extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement),
        (CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement),
        (CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame),
        (CVSolidElement.prototype.renderInnerContent = function () {
            this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
        }),
        extendPrototype([BaseRenderer], CanvasRendererBase),
        (CanvasRendererBase.prototype.createShape = function (t) {
            return new CVShapeElement(t, this.globalData, this);
        }),
        (CanvasRendererBase.prototype.createText = function (t) {
            return new CVTextElement(t, this.globalData, this);
        }),
        (CanvasRendererBase.prototype.createImage = function (t) {
            return new CVImageElement(t, this.globalData, this);
        }),
        (CanvasRendererBase.prototype.createSolid = function (t) {
            return new CVSolidElement(t, this.globalData, this);
        }),
        (CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull),
        (CanvasRendererBase.prototype.ctxTransform = function (t) {
            (1 === t[0] && 0 === t[1] && 0 === t[4] && 1 === t[5] && 0 === t[12] && 0 === t[13]) || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
        }),
        (CanvasRendererBase.prototype.ctxOpacity = function (t) {
            this.canvasContext.globalAlpha *= t < 0 ? 0 : t;
        }),
        (CanvasRendererBase.prototype.ctxFillStyle = function (t) {
            this.canvasContext.fillStyle = t;
        }),
        (CanvasRendererBase.prototype.ctxStrokeStyle = function (t) {
            this.canvasContext.strokeStyle = t;
        }),
        (CanvasRendererBase.prototype.ctxLineWidth = function (t) {
            this.canvasContext.lineWidth = t;
        }),
        (CanvasRendererBase.prototype.ctxLineCap = function (t) {
            this.canvasContext.lineCap = t;
        }),
        (CanvasRendererBase.prototype.ctxLineJoin = function (t) {
            this.canvasContext.lineJoin = t;
        }),
        (CanvasRendererBase.prototype.ctxMiterLimit = function (t) {
            this.canvasContext.miterLimit = t;
        }),
        (CanvasRendererBase.prototype.ctxFill = function (t) {
            this.canvasContext.fill(t);
        }),
        (CanvasRendererBase.prototype.ctxFillRect = function (t, e, i, r) {
            this.canvasContext.fillRect(t, e, i, r);
        }),
        (CanvasRendererBase.prototype.ctxStroke = function () {
            this.canvasContext.stroke();
        }),
        (CanvasRendererBase.prototype.reset = function () {
            this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
        }),
        (CanvasRendererBase.prototype.save = function () {
            this.canvasContext.save();
        }),
        (CanvasRendererBase.prototype.restore = function (t) {
            this.renderConfig.clearCanvas ? (t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t)) : this.canvasContext.restore();
        }),
        (CanvasRendererBase.prototype.configAnimation = function (t) {
            var e, i;
            this.animationItem.wrapper
                ? ((this.animationItem.container = createTag("canvas")),
                    ((e = this.animationItem.container.style).width = "100%"),
                    (e.height = "100%"),
                    (i = "0px 0px 0px"),
                    (e.transformOrigin = i),
                    (e.mozTransformOrigin = i),
                    (e.webkitTransformOrigin = i),
                    (e["-webkit-transform"] = i),
                    (e.contentVisibility = this.renderConfig.contentVisibility),
                    this.animationItem.wrapper.appendChild(this.animationItem.container),
                    (this.canvasContext = this.animationItem.container.getContext("2d")),
                this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className),
                this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id))
                : (this.canvasContext = this.renderConfig.context),
                this.contextData.setContext(this.canvasContext),
                (this.data = t),
                (this.layers = t.layers),
                (this.transformCanvas = {w: t.w, h: t.h, sx: 0, sy: 0, tx: 0, ty: 0}),
                this.setupGlobalData(t, document.body),
                (this.globalData.canvasContext = this.canvasContext),
                ((this.globalData.renderer = this).globalData.isDashed = !1),
                (this.globalData.progressiveLoad = this.renderConfig.progressiveLoad),
                (this.globalData.transformCanvas = this.transformCanvas),
                (this.elements = createSizedArray(t.layers.length)),
                this.updateContainerSize();
        }),
        (CanvasRendererBase.prototype.updateContainerSize = function (t, e) {
            var i, r, n, s, a;
            this.reset(),
                t
                    ? ((i = t), (r = e), (this.canvasContext.canvas.width = i), (this.canvasContext.canvas.height = r))
                    : ((r =
                        this.animationItem.wrapper && this.animationItem.container
                            ? ((i = this.animationItem.wrapper.offsetWidth), this.animationItem.wrapper.offsetHeight)
                            : ((i = this.canvasContext.canvas.width), this.canvasContext.canvas.height)),
                        (this.canvasContext.canvas.width = i * this.renderConfig.dpr),
                        (this.canvasContext.canvas.height = r * this.renderConfig.dpr)),
                -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")
                    ? ((n = (a = this.renderConfig.preserveAspectRatio.split(" "))[1] || "meet"),
                        (t = (s = a[0] || "xMidYMid").substr(0, 4)),
                        (e = s.substr(4)),
                        (a = i / r),
                        ((s = this.transformCanvas.w / this.transformCanvas.h) > a && "meet" === n) || (s < a && "slice" === n)
                            ? ((this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr)), (this.transformCanvas.sy = i / (this.transformCanvas.w / this.renderConfig.dpr)))
                            : ((this.transformCanvas.sx = r / (this.transformCanvas.h / this.renderConfig.dpr)), (this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr))),
                        (this.transformCanvas.tx =
                            "xMid" === t && ((s < a && "meet" === n) || (a < s && "slice" === n))
                                ? ((i - this.transformCanvas.w * (r / this.transformCanvas.h)) / 2) * this.renderConfig.dpr
                                : "xMax" === t && ((s < a && "meet" === n) || (a < s && "slice" === n))
                                    ? (i - this.transformCanvas.w * (r / this.transformCanvas.h)) * this.renderConfig.dpr
                                    : 0),
                        (this.transformCanvas.ty =
                            "YMid" === e && ((a < s && "meet" === n) || (s < a && "slice" === n))
                                ? ((r - this.transformCanvas.h * (i / this.transformCanvas.w)) / 2) * this.renderConfig.dpr
                                : "YMax" === e && ((a < s && "meet" === n) || (s < a && "slice" === n))
                                    ? (r - this.transformCanvas.h * (i / this.transformCanvas.w)) * this.renderConfig.dpr
                                    : 0))
                    : ("none" === this.renderConfig.preserveAspectRatio
                        ? ((this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr)), (this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr)))
                        : ((this.transformCanvas.sx = this.renderConfig.dpr), (this.transformCanvas.sy = this.renderConfig.dpr)),
                        (this.transformCanvas.tx = 0),
                        (this.transformCanvas.ty = 0)),
                (this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1]),
                this.ctxTransform(this.transformCanvas.props),
                this.canvasContext.beginPath(),
                this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h),
                this.canvasContext.closePath(),
                this.canvasContext.clip(),
                this.renderFrame(this.renderedFrame, !0);
        }),
        (CanvasRendererBase.prototype.destroy = function () {
            var t;
            for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; 0 <= t; --t)
                this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
            (this.elements.length = 0), (this.globalData.canvasContext = null), (this.animationItem.container = null), (this.destroyed = !0);
        }),
        (CanvasRendererBase.prototype.renderFrame = function (t, e) {
            if ((this.renderedFrame !== t || !0 !== this.renderConfig.clearCanvas || e) && !this.destroyed && -1 !== t) {
                var i;
                (this.renderedFrame = t),
                    (this.globalData.frameNum = t - this.animationItem._isFirstFrame),
                    (this.globalData.frameId += 1),
                    (this.globalData._mdf = !this.renderConfig.clearCanvas || e),
                    (this.globalData.projectInterface.currentFrame = t);
                e = this.layers.length;
                for (this.completeLayers || this.checkLayers(t), i = e - 1; 0 <= i; --i) (this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
                if (this.globalData._mdf) {
                    for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = e - 1; 0 <= i; --i)
                        (this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
                    !0 !== this.renderConfig.clearCanvas && this.restore();
                }
            }
        }),
        (CanvasRendererBase.prototype.buildItem = function (t) {
            var e,
                i = this.elements;
            i[t] || 99 === this.layers[t].ty || ((e = this.createItem(this.layers[t], this, this.globalData)), (i[t] = e).initExpressions());
        }),
        (CanvasRendererBase.prototype.checkPendingElements = function () {
            for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting();
        }),
        (CanvasRendererBase.prototype.hide = function () {
            this.animationItem.container.style.display = "none";
        }),
        (CanvasRendererBase.prototype.show = function () {
            this.animationItem.container.style.display = "block";
        }),
        (CVContextData.prototype.duplicate = function () {
            for (var t = 2 * this._length, e = 0, e = this._length; e < t; e += 1) this.stack[e] = new CanvasContext();
            this._length = t;
        }),
        (CVContextData.prototype.reset = function () {
            (this.cArrPos = 0), this.cTr.reset(), (this.stack[this.cArrPos].opacity = 1);
        }),
        (CVContextData.prototype.restore = function (t) {
            --this.cArrPos;
            for (var e, i = this.stack[this.cArrPos], r = i.transform, n = this.cTr.props, s = 0; s < 16; s += 1) n[s] = r[s];
            t &&
            (this.nativeContext.restore(),
                (e = this.stack[this.cArrPos + 1]),
                (this.appliedFillStyle = e.fillStyle),
                (this.appliedStrokeStyle = e.strokeStyle),
                (this.appliedLineWidth = e.lineWidth),
                (this.appliedLineCap = e.lineCap),
                (this.appliedLineJoin = e.lineJoin),
                (this.appliedMiterLimit = e.miterLimit)),
                this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]),
            (t || (-1 !== i.opacity && this.currentOpacity !== i.opacity)) && ((this.nativeContext.globalAlpha = i.opacity), (this.currentOpacity = i.opacity)),
                (this.currentFillStyle = i.fillStyle),
                (this.currentStrokeStyle = i.strokeStyle),
                (this.currentLineWidth = i.lineWidth),
                (this.currentLineCap = i.lineCap),
                (this.currentLineJoin = i.lineJoin),
                (this.currentMiterLimit = i.miterLimit);
        }),
        (CVContextData.prototype.save = function (t) {
            t && this.nativeContext.save();
            var e = this.cTr.props;
            this._length <= this.cArrPos && this.duplicate();
            for (var i = this.stack[this.cArrPos], r = 0; r < 16; r += 1) i.transform[r] = e[r];
            this.cArrPos += 1;
            t = this.stack[this.cArrPos];
            (t.opacity = i.opacity), (t.fillStyle = i.fillStyle), (t.strokeStyle = i.strokeStyle), (t.lineWidth = i.lineWidth), (t.lineCap = i.lineCap), (t.lineJoin = i.lineJoin), (t.miterLimit = i.miterLimit);
        }),
        (CVContextData.prototype.setOpacity = function (t) {
            this.stack[this.cArrPos].opacity = t;
        }),
        (CVContextData.prototype.setContext = function (t) {
            this.nativeContext = t;
        }),
        (CVContextData.prototype.fillStyle = function (t) {
            this.stack[this.cArrPos].fillStyle !== t && ((this.currentFillStyle = t), (this.stack[this.cArrPos].fillStyle = t));
        }),
        (CVContextData.prototype.strokeStyle = function (t) {
            this.stack[this.cArrPos].strokeStyle !== t && ((this.currentStrokeStyle = t), (this.stack[this.cArrPos].strokeStyle = t));
        }),
        (CVContextData.prototype.lineWidth = function (t) {
            this.stack[this.cArrPos].lineWidth !== t && ((this.currentLineWidth = t), (this.stack[this.cArrPos].lineWidth = t));
        }),
        (CVContextData.prototype.lineCap = function (t) {
            this.stack[this.cArrPos].lineCap !== t && ((this.currentLineCap = t), (this.stack[this.cArrPos].lineCap = t));
        }),
        (CVContextData.prototype.lineJoin = function (t) {
            this.stack[this.cArrPos].lineJoin !== t && ((this.currentLineJoin = t), (this.stack[this.cArrPos].lineJoin = t));
        }),
        (CVContextData.prototype.miterLimit = function (t) {
            this.stack[this.cArrPos].miterLimit !== t && ((this.currentMiterLimit = t), (this.stack[this.cArrPos].miterLimit = t));
        }),
        (CVContextData.prototype.transform = function (t) {
            this.transformMat.cloneFromProps(t);
            t = this.cTr;
            this.transformMat.multiply(t), t.cloneFromProps(this.transformMat.props);
            t = t.props;
            this.nativeContext.setTransform(t[0], t[1], t[4], t[5], t[12], t[13]);
        }),
        (CVContextData.prototype.opacity = function (t) {
            var e = this.stack[this.cArrPos].opacity;
            (e *= t < 0 ? 0 : t), this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && ((this.nativeContext.globalAlpha = t), (this.currentOpacity = t)), (this.stack[this.cArrPos].opacity = e));
        }),
        (CVContextData.prototype.fill = function (t) {
            this.appliedFillStyle !== this.currentFillStyle && ((this.appliedFillStyle = this.currentFillStyle), (this.nativeContext.fillStyle = this.appliedFillStyle)), this.nativeContext.fill(t);
        }),
        (CVContextData.prototype.fillRect = function (t, e, i, r) {
            this.appliedFillStyle !== this.currentFillStyle && ((this.appliedFillStyle = this.currentFillStyle), (this.nativeContext.fillStyle = this.appliedFillStyle)), this.nativeContext.fillRect(t, e, i, r);
        }),
        (CVContextData.prototype.stroke = function () {
            this.appliedStrokeStyle !== this.currentStrokeStyle && ((this.appliedStrokeStyle = this.currentStrokeStyle), (this.nativeContext.strokeStyle = this.appliedStrokeStyle)),
            this.appliedLineWidth !== this.currentLineWidth && ((this.appliedLineWidth = this.currentLineWidth), (this.nativeContext.lineWidth = this.appliedLineWidth)),
            this.appliedLineCap !== this.currentLineCap && ((this.appliedLineCap = this.currentLineCap), (this.nativeContext.lineCap = this.appliedLineCap)),
            this.appliedLineJoin !== this.currentLineJoin && ((this.appliedLineJoin = this.currentLineJoin), (this.nativeContext.lineJoin = this.appliedLineJoin)),
            this.appliedMiterLimit !== this.currentMiterLimit && ((this.appliedMiterLimit = this.currentMiterLimit), (this.nativeContext.miterLimit = this.appliedMiterLimit)),
                this.nativeContext.stroke();
        }),
        extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement),
        (CVCompElement.prototype.renderInnerContent = function () {
            var t,
                e = this.canvasContext;
            for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; 0 <= t; --t)
                (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
        }),
        (CVCompElement.prototype.destroy = function () {
            for (var t = this.layers.length - 1; 0 <= t; --t) this.elements[t] && this.elements[t].destroy();
            (this.layers = null), (this.elements = null);
        }),
        (CVCompElement.prototype.createComp = function (t) {
            return new CVCompElement(t, this.globalData, this);
        }),
        extendPrototype([CanvasRendererBase], CanvasRenderer),
        (CanvasRenderer.prototype.createComp = function (t) {
            return new CVCompElement(t, this.globalData, this);
        }),
        (HBaseElement.prototype = {
            checkBlendMode: function () {
            },
            initRendererElement: function () {
                (this.baseElement = createTag(this.data.tg || "div")),
                    this.data.hasMask
                        ? ((this.svgElement = createNS("svg")),
                            (this.layerElement = createNS("g")),
                            (this.maskedElement = this.layerElement),
                            this.svgElement.appendChild(this.layerElement),
                            this.baseElement.appendChild(this.svgElement))
                        : (this.layerElement = this.baseElement),
                    styleDiv(this.baseElement);
            },
            createContainerElements: function () {
                (this.renderableEffectsManager = new CVEffects(this)),
                    (this.transformedElement = this.baseElement),
                    (this.maskedElement = this.layerElement),
                this.data.ln && this.layerElement.setAttribute("id", this.data.ln),
                this.data.cl && this.layerElement.setAttribute("class", this.data.cl),
                0 !== this.data.bm && this.setBlendMode();
            },
            renderElement: function () {
                var t,
                    e = this.transformedElement ? this.transformedElement.style : {};
                this.finalTransform._matMdf && ((t = this.finalTransform.mat.toCSS()), (e.transform = t), (e.webkitTransform = t)), this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v);
            },
            renderFrame: function () {
                this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
            },
            destroy: function () {
                (this.layerElement = null), (this.transformedElement = null), this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), (this.maskManager = null));
            },
            createRenderableComponents: function () {
                this.maskManager = new MaskElement(this.data, this, this.globalData);
            },
            addEffects: function () {
            },
            setMatte: function () {
            },
        }),
        (HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement),
        (HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy),
        (HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting),
        extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement),
        (HSolidElement.prototype.createContent = function () {
            var t;
            this.data.hasMask
                ? ((t = createNS("rect")).setAttribute("width", this.data.sw),
                    t.setAttribute("height", this.data.sh),
                    t.setAttribute("fill", this.data.sc),
                    this.svgElement.setAttribute("width", this.data.sw),
                    this.svgElement.setAttribute("height", this.data.sh))
                : (((t = createTag("div")).style.width = this.data.sw + "px"), (t.style.height = this.data.sh + "px"), (t.style.backgroundColor = this.data.sc)),
                this.layerElement.appendChild(t);
        }),
        extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement),
        (HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent),
    (HShapeElement.prototype.createContent = function () {
        var t, e;
        (this.baseElement.style.fontSize = 0),
            this.data.hasMask
                ? (this.layerElement.appendChild(this.shapesContainer), (t = this.svgElement))
                : ((t = createNS("svg")), (e = this.comp.data || this.globalData.compSize), t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t)),
            this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0),
            this.filterUniqueShapes(),
            (this.shapeCont = t);
    }),
    (HShapeElement.prototype.getTransformedPoint = function (t, e) {
        for (var i = t.length, r = 0; r < i; r += 1) e = t[r].mProps.v.applyToPointArray(e[0], e[1], 0);
        return e;
    }),
    (HShapeElement.prototype.calculateShapeBoundingBox = function (t, e) {
        var i,
            r,
            n,
            s,
            a,
            o = t.sh.v,
            l = t.transformers,
            h = o._length;
        if (!(h <= 1)) {
            for (i = 0; i < h - 1; i += 1)
                (r = this.getTransformedPoint(l, o.v[i])), (n = this.getTransformedPoint(l, o.o[i])), (s = this.getTransformedPoint(l, o.i[i + 1])), (a = this.getTransformedPoint(l, o.v[i + 1])), this.checkBounds(r, n, s, a, e);
            o.c && ((r = this.getTransformedPoint(l, o.v[i])), (n = this.getTransformedPoint(l, o.o[i])), (s = this.getTransformedPoint(l, o.i[0])), (a = this.getTransformedPoint(l, o.v[0])), this.checkBounds(r, n, s, a, e));
        }
    }),
    (HShapeElement.prototype.checkBounds = function (t, e, i, r, n) {
        this.getBoundsOfCurve(t, e, i, r);
        r = this.shapeBoundingBox;
        (n.x = bmMin(r.left, n.x)), (n.xMax = bmMax(r.right, n.xMax)), (n.y = bmMin(r.top, n.y)), (n.yMax = bmMax(r.bottom, n.yMax));
    }),
    (HShapeElement.prototype.shapeBoundingBox = {left: 0, right: 0, top: 0, bottom: 0}),
    (HShapeElement.prototype.tempBoundingBox = {x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0}),
    (HShapeElement.prototype.getBoundsOfCurve = function (t, e, i, r) {
        for (
            var n,
                s,
                a,
                o,
                l = [
                    [t[0], r[0]],
                    [t[1], r[1]],
                ],
                h = 0;
            h < 2;
            ++h
        )
            (n = 6 * t[h] - 12 * e[h] + 6 * i[h]),
                (o = -3 * t[h] + 9 * e[h] - 9 * i[h] + 3 * r[h]),
                (a = 3 * e[h] - 3 * t[h]),
                (n |= 0),
                (a |= 0),
            (0 == (o |= 0) && 0 == n) ||
            (0 == o
                ? 0 < (s = -a / n) && s < 1 && l[h].push(this.calculateF(s, t, e, i, r, h))
                : 0 <= (s = n * n - 4 * a * o) &&
                (0 < (a = (-n + bmSqrt(s)) / (2 * o)) && a < 1 && l[h].push(this.calculateF(a, t, e, i, r, h)), 0 < (o = (-n - bmSqrt(s)) / (2 * o)) && o < 1 && l[h].push(this.calculateF(o, t, e, i, r, h))));
        (this.shapeBoundingBox.left = bmMin.apply(null, l[0])),
            (this.shapeBoundingBox.top = bmMin.apply(null, l[1])),
            (this.shapeBoundingBox.right = bmMax.apply(null, l[0])),
            (this.shapeBoundingBox.bottom = bmMax.apply(null, l[1]));
    }),
    (HShapeElement.prototype.calculateF = function (t, e, i, r, n, s) {
        return bmPow(1 - t, 3) * e[s] + 3 * bmPow(1 - t, 2) * t * i[s] + 3 * (1 - t) * bmPow(t, 2) * r[s] + bmPow(t, 3) * n[s];
    }),
    (HShapeElement.prototype.calculateBoundingBox = function (t, e) {
        for (var i = t.length, r = 0; r < i; r += 1)
            t[r] && t[r].sh ? this.calculateShapeBoundingBox(t[r], e) : t[r] && t[r].it ? this.calculateBoundingBox(t[r].it, e) : t[r] && t[r].style && t[r].w && this.expandStrokeBoundingBox(t[r].w, e);
    }),
    (HShapeElement.prototype.expandStrokeBoundingBox = function (t, e) {
        var i = 0;
        if (t.keyframes) {
            for (var r = 0; r < t.keyframes.length; r += 1) {
                var n = t.keyframes[r].s;
                i < n && (i = n);
            }
            i *= t.mult;
        } else i = t.v * t.mult;
        (e.x -= i), (e.xMax += i), (e.y -= i), (e.yMax += i);
    }),
    (HShapeElement.prototype.currentBoxContains = function (t) {
        return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height;
    }),
    (HShapeElement.prototype.renderInnerContent = function () {
        var t, e;
        this._renderShapeFrame(),
        this.hidden ||
        (!this._isFirstFrame && !this._mdf) ||
        ((t = 999999),
            ((e = this.tempBoundingBox).x = t),
            (e.xMax = -t),
            (e.y = t),
            (e.yMax = -t),
            this.calculateBoundingBox(this.itemsData, e),
            (e.width = e.xMax < e.x ? 0 : e.xMax - e.x),
            (e.height = e.yMax < e.y ? 0 : e.yMax - e.y),
        this.currentBoxContains(e) ||
        ((t = !1),
        this.currentBBox.w !== e.width && ((this.currentBBox.w = e.width), this.shapeCont.setAttribute("width", e.width), (t = !0)),
        this.currentBBox.h !== e.height && ((this.currentBBox.h = e.height), this.shapeCont.setAttribute("height", e.height), (t = !0)),
        (!t && this.currentBBox.x === e.x && this.currentBBox.y === e.y) ||
        ((this.currentBBox.w = e.width),
            (this.currentBBox.h = e.height),
            (this.currentBBox.x = e.x),
            (this.currentBBox.y = e.y),
            this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h),
            (t = this.shapeCont.style),
            (e = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)"),
            (t.transform = e),
            (t.webkitTransform = e))));
    }),
    extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement),
    (HTextElement.prototype.createContent = function () {
        var t;
        (this.isMasked = this.checkMasks()),
            this.isMasked
                ? ((this.renderType = "svg"),
                    (this.compW = this.comp.data.w),
                    (this.compH = this.comp.data.h),
                    this.svgElement.setAttribute("width", this.compW),
                    this.svgElement.setAttribute("height", this.compH),
                    (t = createNS("g")),
                    this.maskedElement.appendChild(t),
                    (this.innerElem = t))
                : ((this.renderType = "html"), (this.innerElem = this.layerElement)),
            this.checkParenting();
    }),
    (HTextElement.prototype.buildNewText = function () {
        var t = this.textProperty.currentData;
        this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
        var e = this.innerElem.style,
            i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
        (e.fill = i), (e.color = i), t.sc && ((e.stroke = this.buildColor(t.sc)), (e.strokeWidth = t.sw + "px"));
        var r,
            n = this.globalData.fontManager.getFontByName(t.f);
        this.globalData.fontManager.chars ||
        ((e.fontSize = t.finalSize + "px"),
            (e.lineHeight = t.finalSize + "px"),
            n.fClass ? (this.innerElem.className = n.fClass) : ((e.fontFamily = n.fFamily), (r = t.fWeight), (i = t.fStyle), (e.fontStyle = i), (e.fontWeight = r)));
        for (var s, a, o, l, h, p, c, f, d = t.l, u = d.length, m = this.mHelper, y = 0, g = 0; g < u; g += 1)
            this.globalData.fontManager.chars
                ? (this.textPaths[y]
                    ? (s = this.textPaths[y])
                    : ((s = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), s.setAttribute("stroke-linejoin", lineJoinEnum[2]), s.setAttribute("stroke-miterlimit", "4")),
                this.isMasked || (this.textSpans[y] ? (o = (a = this.textSpans[y]).children[0]) : (((a = createTag("div")).style.lineHeight = 0), (o = createNS("svg")).appendChild(s), styleDiv(a))))
                : this.isMasked
                    ? (s = this.textPaths[y] || createNS("text"))
                    : this.textSpans[y]
                        ? ((a = this.textSpans[y]), (s = this.textPaths[y]))
                        : (styleDiv((a = createTag("span"))), styleDiv((s = createTag("span"))), a.appendChild(s)),
                this.globalData.fontManager.chars
                    ? ((p = (h = this.globalData.fontManager.getCharData(t.finalText[g], n.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) ? h.data : null),
                        m.reset(),
                    p && p.shapes && p.shapes.length && ((h = p.shapes[0].it), m.scale(t.finalSize / 100, t.finalSize / 100), (l = this.createPathShape(m, h)), s.setAttribute("d", l)),
                        this.isMasked
                            ? this.innerElem.appendChild(s)
                            : (this.innerElem.appendChild(a),
                                p && p.shapes
                                    ? (document.body.appendChild(o),
                                        (f = o.getBBox()),
                                        o.setAttribute("width", f.width + 2),
                                        o.setAttribute("height", f.height + 2),
                                        o.setAttribute("viewBox", f.x - 1 + " " + (f.y - 1) + " " + (f.width + 2) + " " + (f.height + 2)),
                                        (p = o.style),
                                        (c = "translate(" + (f.x - 1) + "px," + (f.y - 1) + "px)"),
                                        (p.transform = c),
                                        (p.webkitTransform = c),
                                        (d[g].yOffset = f.y - 1))
                                    : (o.setAttribute("width", 1), o.setAttribute("height", 1)),
                                a.appendChild(o)))
                    : ((s.textContent = d[g].val),
                        s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"),
                        this.isMasked ? this.innerElem.appendChild(s) : (this.innerElem.appendChild(a), (c = s.style), (f = "translate3d(0," + -t.finalSize / 1.2 + "px,0)"), (c.transform = f), (c.webkitTransform = f))),
                this.isMasked ? (this.textSpans[y] = s) : (this.textSpans[y] = a),
                (this.textSpans[y].style.display = "block"),
                (this.textPaths[y] = s),
                (y += 1);
        for (; y < this.textSpans.length;) (this.textSpans[y].style.display = "none"), (y += 1);
    }),
    (HTextElement.prototype.renderInnerContent = function () {
        var t;
        if ((this.validateText(), this.data.singleShape)) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
            this.isMasked &&
            this.finalTransform._matMdf &&
            (this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH),
                (t = this.svgElement.style),
                (n = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)"),
                (t.transform = n),
                (t.webkitTransform = n));
        }
        if ((this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
            for (var e, i, r, n, s = 0, a = this.textAnimator.renderedLetters, o = this.textProperty.currentData.l, l = o.length, h = 0; h < l; h += 1)
                o[h].n
                    ? (s += 1)
                    : ((i = this.textSpans[h]),
                        (r = this.textPaths[h]),
                        (e = a[s]),
                        (s += 1),
                    e._mdf.m && (this.isMasked ? i.setAttribute("transform", e.m) : ((i.style.webkitTransform = e.m), (i.style.transform = e.m))),
                        (i.style.opacity = e.o),
                    e.sw && e._mdf.sw && r.setAttribute("stroke-width", e.sw),
                    e.sc && e._mdf.sc && r.setAttribute("stroke", e.sc),
                    e.fc && e._mdf.fc && (r.setAttribute("fill", e.fc), (r.style.color = e.fc)));
            this.innerElem.getBBox &&
            !this.hidden &&
            (this._isFirstFrame || this._mdf) &&
            ((n = this.innerElem.getBBox()),
            this.currentBBox.w !== n.width && ((this.currentBBox.w = n.width), this.svgElement.setAttribute("width", n.width)),
            this.currentBBox.h !== n.height && ((this.currentBBox.h = n.height), this.svgElement.setAttribute("height", n.height)),
            (this.currentBBox.w === n.width + 2 && this.currentBBox.h === n.height + 2 && this.currentBBox.x === n.x - 1 && this.currentBBox.y === n.y - 1) ||
            ((this.currentBBox.w = n.width + 2),
                (this.currentBBox.h = n.height + 2),
                (this.currentBBox.x = n.x - 1),
                (this.currentBBox.y = n.y - 1),
                this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h),
                (t = this.svgElement.style),
                (n = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)"),
                (t.transform = n),
                (t.webkitTransform = n)));
        }
    }),
    extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement),
    (HCameraElement.prototype.setup = function () {
        for (var t, e, i, r, n, s = this.comp.threeDElements.length, a = 0; a < s; a += 1)
            "3d" === (n = this.comp.threeDElements[a]).type &&
            ((t = n.perspectiveElem.style),
                (e = n.container.style),
                (i = this.pe.v + "px"),
                (r = "0px 0px 0px"),
                (n = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"),
                (t.perspective = i),
                (t.webkitPerspective = i),
                (e.transformOrigin = r),
                (e.mozTransformOrigin = r),
                (e.webkitTransformOrigin = r),
                (t.transform = n),
                (t.webkitTransform = n));
    }),
    (HCameraElement.prototype.createElements = function () {
    }),
    (HCameraElement.prototype.hide = function () {
    }),
    (HCameraElement.prototype.renderFrame = function () {
        var t,
            e,
            i = this._isFirstFrame;
        if (this.hierarchy) for (l = this.hierarchy.length, h = 0; h < l; h += 1) i = this.hierarchy[h].finalTransform.mProp._mdf || i;
        if (i || this.pe._mdf || (this.p && this.p._mdf) || (this.px && (this.px._mdf || this.py._mdf || this.pz._mdf)) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || (this.a && this.a._mdf)) {
            if ((this.mat.reset(), this.hierarchy))
                for (h = l = this.hierarchy.length - 1; 0 <= h; --h) {
                    var r = this.hierarchy[h].finalTransform.mProp;
                    this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]),
                        this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]),
                        this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v),
                        this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]),
                        this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
                }
            this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v),
            this.a &&
            ((e = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]]),
                (t = Math.sqrt(Math.pow(e[0], 2) + Math.pow(e[1], 2) + Math.pow(e[2], 2))),
                (e = [e[0] / t, e[1] / t, e[2] / t]),
                (t = Math.sqrt(e[2] * e[2] + e[0] * e[0])),
                (t = Math.atan2(e[1], t)),
                (e = Math.atan2(e[0], -e[2])),
                this.mat.rotateY(e).rotateX(-t)),
                this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v),
                this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]),
                this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0),
                this.mat.translate(0, 0, this.pe.v);
            var n = !this._prevMat.equals(this.mat);
            if ((n || this.pe._mdf) && this.comp.threeDElements) {
                for (var s, a, o, l = this.comp.threeDElements.length, h = 0; h < l; h += 1)
                    "3d" === (s = this.comp.threeDElements[h]).type &&
                    (n && ((o = this.mat.toCSS()), ((a = s.container.style).transform = o), (a.webkitTransform = o)),
                    this.pe._mdf && (((s = s.perspectiveElem.style).perspective = this.pe.v + "px"), (s.webkitPerspective = this.pe.v + "px")));
                this.mat.clone(this._prevMat);
            }
        }
        this._isFirstFrame = !1;
    }),
    (HCameraElement.prototype.prepareFrame = function (t) {
        this.prepareProperties(t, !0);
    }),
    (HCameraElement.prototype.destroy = function () {
    }),
    (HCameraElement.prototype.getBaseElement = function () {
        return null;
    }),
    extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement),
    (HImageElement.prototype.createContent = function () {
        var t = this.globalData.getAssetsPath(this.assetData),
            e = new Image();
        this.data.hasMask
            ? ((this.imageElem = createNS("image")),
                this.imageElem.setAttribute("width", this.assetData.w + "px"),
                this.imageElem.setAttribute("height", this.assetData.h + "px"),
                this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t),
                this.layerElement.appendChild(this.imageElem),
                this.baseElement.setAttribute("width", this.assetData.w),
                this.baseElement.setAttribute("height", this.assetData.h))
            : this.layerElement.appendChild(e),
            (e.crossOrigin = "anonymous"),
            (e.src = t),
        this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
    }),
    extendPrototype([BaseRenderer], HybridRendererBase),
    (HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem),
    (HybridRendererBase.prototype.checkPendingElements = function () {
        for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting();
    }),
    (HybridRendererBase.prototype.appendElementInPos = function (t, e) {
        var i = t.getBaseElement();
        if (i) {
            t = this.layers[e];
            if (t.ddd && this.supports3d) this.addTo3dContainer(i, e);
            else if (this.threeDElements) this.addTo3dContainer(i, e);
            else {
                for (var r, n, s = 0; s < e;)
                    this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement && ((n = this.elements[s]), (r = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : n.getBaseElement()) || r)), (s += 1);
                r ? (t.ddd && this.supports3d) || this.layerElement.insertBefore(i, r) : (t.ddd && this.supports3d) || this.layerElement.appendChild(i);
            }
        }
    }),
    (HybridRendererBase.prototype.createShape = function (t) {
        return new (this.supports3d ? HShapeElement : SVGShapeElement)(t, this.globalData, this);
    }),
    (HybridRendererBase.prototype.createText = function (t) {
        return new (this.supports3d ? HTextElement : SVGTextLottieElement)(t, this.globalData, this);
    }),
    (HybridRendererBase.prototype.createCamera = function (t) {
        return (this.camera = new HCameraElement(t, this.globalData, this)), this.camera;
    }),
    (HybridRendererBase.prototype.createImage = function (t) {
        return new (this.supports3d ? HImageElement : IImageElement)(t, this.globalData, this);
    }),
    (HybridRendererBase.prototype.createSolid = function (t) {
        return new (this.supports3d ? HSolidElement : ISolidElement)(t, this.globalData, this);
    }),
    (HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull),
    (HybridRendererBase.prototype.getThreeDContainerByPos = function (t) {
        for (var e = 0, i = this.threeDElements.length; e < i;) {
            if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
            e += 1;
        }
        return null;
    }),
    (HybridRendererBase.prototype.createThreeDContainer = function (t, e) {
        var i = createTag("div");
        styleDiv(i);
        var r,
            n,
            s = createTag("div");
        styleDiv(s),
        "3d" === e &&
        (((n = i.style).width = this.globalData.compSize.w + "px"),
            (n.height = this.globalData.compSize.h + "px"),
            (r = "50% 50%"),
            (n.webkitTransformOrigin = r),
            (n.mozTransformOrigin = r),
            (n.transformOrigin = r),
            (n = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)"),
            ((r = s.style).transform = n),
            (r.webkitTransform = n)),
            i.appendChild(s);
        e = {container: s, perspectiveElem: i, startPos: t, endPos: t, type: e};
        return this.threeDElements.push(e), e;
    }),
    (HybridRendererBase.prototype.build3dContainers = function () {
        for (var t, e = this.layers.length, i = "", r = 0; r < e; r += 1)
            this.layers[r].ddd && 3 !== this.layers[r].ty ? "3d" !== i && ((i = "3d"), (t = this.createThreeDContainer(r, "3d"))) : "2d" !== i && ((i = "2d"), (t = this.createThreeDContainer(r, "2d"))),
                (t.endPos = Math.max(t.endPos, r));
        for (r = (e = this.threeDElements.length) - 1; 0 <= r; --r) this.resizerElem.appendChild(this.threeDElements[r].perspectiveElem);
    }),
    (HybridRendererBase.prototype.addTo3dContainer = function (t, e) {
        for (var i = 0, r = this.threeDElements.length; i < r;) {
            if (e <= this.threeDElements[i].endPos) {
                for (var n, s = this.threeDElements[i].startPos; s < e;) this.elements[s] && this.elements[s].getBaseElement && (n = this.elements[s].getBaseElement()), (s += 1);
                n ? this.threeDElements[i].container.insertBefore(t, n) : this.threeDElements[i].container.appendChild(t);
                break;
            }
            i += 1;
        }
    }),
    (HybridRendererBase.prototype.configAnimation = function (t) {
        var e = createTag("div"),
            i = this.animationItem.wrapper,
            r = e.style;
        (r.width = t.w + "px"),
            (r.height = t.h + "px"),
            styleDiv((this.resizerElem = e)),
            (r.transformStyle = "flat"),
            (r.mozTransformStyle = "flat"),
            (r.webkitTransformStyle = "flat"),
        this.renderConfig.className && e.setAttribute("class", this.renderConfig.className),
            i.appendChild(e),
            (r.overflow = "hidden");
        e = createNS("svg");
        e.setAttribute("width", "1"), e.setAttribute("height", "1"), styleDiv(e), this.resizerElem.appendChild(e);
        r = createNS("defs");
        e.appendChild(r), (this.data = t), this.setupGlobalData(t, e), (this.globalData.defs = r), (this.layers = t.layers), (this.layerElement = this.resizerElem), this.build3dContainers(), this.updateContainerSize();
    }),
    (HybridRendererBase.prototype.destroy = function () {
        this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), (this.animationItem.container = null), (this.globalData.defs = null);
        for (var t = this.layers ? this.layers.length : 0, e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
        (this.elements.length = 0), (this.destroyed = !0), (this.animationItem = null);
    }),
    (HybridRendererBase.prototype.updateContainerSize = function () {
        var t,
            e,
            i,
            r = this.animationItem.wrapper.offsetWidth,
            n = this.animationItem.wrapper.offsetHeight,
            s = r / n,
            r =
                this.globalData.compSize.w / this.globalData.compSize.h > s
                    ? ((t = r / this.globalData.compSize.w), (e = r / this.globalData.compSize.w), (i = 0), (n - this.globalData.compSize.h * (r / this.globalData.compSize.w)) / 2)
                    : ((t = n / this.globalData.compSize.h), (e = n / this.globalData.compSize.h), (i = (r - this.globalData.compSize.w * (n / this.globalData.compSize.h)) / 2), 0),
            n = this.resizerElem.style;
        (n.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + r + ",0,1)"), (n.transform = n.webkitTransform);
    }),
    (HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame),
    (HybridRendererBase.prototype.hide = function () {
        this.resizerElem.style.display = "none";
    }),
    (HybridRendererBase.prototype.show = function () {
        this.resizerElem.style.display = "block";
    }),
    (HybridRendererBase.prototype.initItems = function () {
        if ((this.buildAllItems(), this.camera)) this.camera.setup();
        else
            for (var t = this.globalData.compSize.w, e = this.globalData.compSize.h, i = this.threeDElements.length, r = 0; r < i; r += 1) {
                var n = this.threeDElements[r].perspectiveElem.style;
                (n.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(e, 2)) + "px"), (n.perspective = n.webkitPerspective);
            }
    }),
    (HybridRendererBase.prototype.searchExtraCompositions = function (t) {
        for (var e, i = t.length, r = createTag("div"), n = 0; n < i; n += 1) t[n].xt && ((e = this.createComp(t[n], r, this.globalData.comp, null)).initExpressions(), this.globalData.projectInterface.registerComposition(e));
    }),
    extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement),
    (HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements),
    (HCompElement.prototype.createContainerElements = function () {
        this._createBaseContainerElements(),
            this.data.hasMask
                ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), (this.transformedElement = this.baseElement))
                : (this.transformedElement = this.layerElement);
    }),
    (HCompElement.prototype.addTo3dContainer = function (t, e) {
        for (var i, r = 0; r < e;) this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), (r += 1);
        i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t);
    }),
    (HCompElement.prototype.createComp = function (t) {
        return new (this.supports3d ? HCompElement : SVGCompElement)(t, this.globalData, this);
    }),
    extendPrototype([HybridRendererBase], HybridRenderer),
    (HybridRenderer.prototype.createComp = function (t) {
        return new (this.supports3d ? HCompElement : SVGCompElement)(t, this.globalData, this);
    });
    var CompExpressionInterface = function (r) {
        function t(t) {
            for (var e = 0, i = r.layers.length; e < i;) {
                if (r.layers[e].nm === t || r.layers[e].ind === t) return r.elements[e].layerInterface;
                e += 1;
            }
            return null;
        }

        return (
            Object.defineProperty(t, "_name", {value: r.data.nm}),
                ((t.layer = t).pixelAspect = 1),
                (t.height = r.data.h || r.globalData.compSize.h),
                (t.width = r.data.w || r.globalData.compSize.w),
                (t.pixelAspect = 1),
                (t.frameDuration = 1 / r.globalData.frameRate),
                (t.displayStartTime = 0),
                (t.numLayers = r.layers.length),
                t
        );
    };

    function _typeof$2(t) {
        return (_typeof$2 =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
    }

    function seedRandom(s, a) {
        var o = this,
            l = 256,
            h = a.pow(l, 6),
            p = a.pow(2, 52),
            c = 2 * p,
            f = 255;

        function d(t) {
            var e,
                i = t.length,
                a = this,
                r = 0,
                n = (a.i = a.j = 0),
                s = (a.S = []);
            for (i || (t = [i++]); r < l;) s[r] = r++;
            for (r = 0; r < l; r++) (s[r] = s[(n = f & (n + t[r % i] + (e = s[r])))]), (s[n] = e);
            a.g = function (t) {
                for (var e, i = 0, r = a.i, n = a.j, s = a.S; t--;) (e = s[(r = f & (r + 1))]), (i = i * l + s[f & ((s[r] = s[(n = f & (n + e))]) + (s[n] = e))]);
                return (a.i = r), (a.j = n), i;
            };
        }

        function u(t, e) {
            return (e.i = t.i), (e.j = t.j), (e.S = t.S.slice()), e;
        }

        function m(t, e) {
            for (var i, r = t + "", n = 0; n < r.length;) e[f & n] = f & ((i ^= 19 * e[f & n]) + r.charCodeAt(n++));
            return y(e);
        }

        function y(t) {
            return String.fromCharCode.apply(0, t);
        }

        (a.seedrandom = function (t, e, i) {
            var r = [],
                t = m(
                    (function t(e, i) {
                        var r,
                            n = [],
                            s = _typeof$2(e);
                        if (i && "object" == s)
                            for (r in e)
                                try {
                                    n.push(t(e[r], i - 1));
                                } catch (e) {
                                }
                        return n.length ? n : "string" == s ? e : e + "\0";
                    })(
                        (e = !0 === e ? {entropy: !0} : e || {}).entropy
                            ? [t, y(s)]
                            : null === t
                                ? (function () {
                                    try {
                                        var t = new Uint8Array(l);
                                        return (o.crypto || o.msCrypto).getRandomValues(t), y(t);
                                    } catch (t) {
                                        var e = o.navigator,
                                            e = e && e.plugins;
                                        return [+new Date(), o, e, o.screen, y(s)];
                                    }
                                })()
                                : t,
                        3
                    ),
                    r
                ),
                n = new d(r),
                r = function () {
                    for (var t = n.g(6), e = h, i = 0; t < p;) (t = (t + i) * l), (e *= l), (i = n.g(1));
                    for (; c <= t;) (t /= 2), (e /= 2), (i >>>= 1);
                    return (t + i) / e;
                };
            return (
                (r.int32 = function () {
                    return 0 | n.g(4);
                }),
                    (r.quick = function () {
                        return n.g(4) / 4294967296;
                    }),
                    (r.double = r),
                    m(y(n.S), s),
                    (
                        e.pass ||
                        i ||
                        function (t, e, i, r) {
                            return (
                                r &&
                                (r.S && u(r, n),
                                    (t.state = function () {
                                        return u(n, {});
                                    })),
                                    i ? ((a.random = t), e) : t
                            );
                        }
                    )(r, t, "global" in e ? e.global : this == a, e.state)
            );
        }),
            m(a.random(), s);
    }

    function initialize$2(t) {
        seedRandom([], t);
    }

    var propTypes = {SHAPE: "shape"};

    function _typeof$1(t) {
        return (_typeof$1 =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
    }

    var ExpressionManager = (function () {
            var ob = {},
                Math = BMMath,
                window = null,
                document = null,
                XMLHttpRequest = null,
                fetch = null,
                frames = null,
                _lottieGlobal = {};

            function resetFrame() {
                _lottieGlobal = {};
            }

            function $bm_isInstanceOfArray(t) {
                return t.constructor === Array || t.constructor === Float32Array;
            }

            function isNumerable(t, e) {
                return "number" === t || e instanceof Number || "boolean" === t || "string" === t;
            }

            function $bm_neg(t) {
                var e = _typeof$1(t);
                if ("number" === e || t instanceof Number || "boolean" === e) return -t;
                if ($bm_isInstanceOfArray(t)) {
                    for (var i = t.length, r = [], n = 0; n < i; n += 1) r[n] = -t[n];
                    return r;
                }
                return t.propType ? t.v : -t;
            }

            initialize$2(BMMath);
            var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get,
                easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get,
                easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;

            function sum(t, e) {
                var i = _typeof$1(t),
                    r = _typeof$1(e);
                if ((isNumerable(i, t) && isNumerable(r, e)) || "string" === i || "string" === r) return t + e;
                if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return ((t = t.slice(0))[0] += e), t;
                if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return ((e = e.slice(0))[0] = t + e[0]), e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                    for (var n = 0, s = t.length, a = e.length, o = []; n < s || n < a;)
                        ("number" == typeof t[n] || t[n] instanceof Number) && ("number" == typeof e[n] || e[n] instanceof Number) ? (o[n] = t[n] + e[n]) : (o[n] = void 0 === e[n] ? t[n] : t[n] || e[n]), (n += 1);
                    return o;
                }
                return 0;
            }

            var add = sum;

            function sub(t, e) {
                var i = _typeof$1(t),
                    r = _typeof$1(e);
                if (isNumerable(i, t) && isNumerable(r, e)) return (t = "string" === i ? parseInt(t, 10) : t) - (e = "string" === r ? parseInt(e, 10) : e);
                if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return ((t = t.slice(0))[0] -= e), t;
                if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return ((e = e.slice(0))[0] = t - e[0]), e;
                if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
                    for (var n = 0, s = t.length, a = e.length, o = []; n < s || n < a;)
                        ("number" == typeof t[n] || t[n] instanceof Number) && ("number" == typeof e[n] || e[n] instanceof Number) ? (o[n] = t[n] - e[n]) : (o[n] = void 0 === e[n] ? t[n] : t[n] || e[n]), (n += 1);
                    return o;
                }
                return 0;
            }

            function mul(t, e) {
                var i,
                    r,
                    n,
                    s = _typeof$1(t),
                    a = _typeof$1(e);
                if (isNumerable(s, t) && isNumerable(a, e)) return t * e;
                if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                    for (n = t.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t[r] * e;
                    return i;
                }
                if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                    for (n = e.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t * e[r];
                    return i;
                }
                return 0;
            }

            function div(t, e) {
                var i,
                    r,
                    n,
                    s = _typeof$1(t),
                    a = _typeof$1(e);
                if (isNumerable(s, t) && isNumerable(a, e)) return t / e;
                if ($bm_isInstanceOfArray(t) && isNumerable(a, e)) {
                    for (n = t.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t[r] / e;
                    return i;
                }
                if (isNumerable(s, t) && $bm_isInstanceOfArray(e)) {
                    for (n = e.length, i = createTypedArray("float32", n), r = 0; r < n; r += 1) i[r] = t / e[r];
                    return i;
                }
                return 0;
            }

            function mod(t, e) {
                return (t = "string" == typeof t ? parseInt(t, 10) : t) % (e = "string" == typeof e ? parseInt(e, 10) : e);
            }

            var $bm_sum = sum,
                $bm_sub = sub,
                $bm_mul = mul,
                $bm_div = div,
                $bm_mod = mod;

            function clamp(t, e, i) {
                var r;
                return i < e && ((r = i), (i = e), (e = r)), Math.min(Math.max(t, e), i);
            }

            function radiansToDegrees(t) {
                return t / degToRads;
            }

            var radians_to_degrees = radiansToDegrees;

            function degreesToRadians(t) {
                return t * degToRads;
            }

            var degrees_to_radians = radiansToDegrees,
                helperLengthArray = [0, 0, 0, 0, 0, 0];

            function length(t, e) {
                if ("number" == typeof t || t instanceof Number) return (e = e || 0), Math.abs(t - e);
                e = e || helperLengthArray;
                for (var i = Math.min(t.length, e.length), r = 0, n = 0; n < i; n += 1) r += Math.pow(e[n] - t[n], 2);
                return Math.sqrt(r);
            }

            function normalize(t) {
                return div(t, length(t));
            }

            function rgbToHsl(t) {
                var e,
                    i = t[0],
                    r = t[1],
                    n = t[2],
                    s = Math.max(i, r, n),
                    a = Math.min(i, r, n),
                    o = (s + a) / 2;
                if (s === a) h = e = 0;
                else {
                    var l = s - a,
                        h = 0.5 < o ? l / (2 - s - a) : l / (s + a);
                    switch (s) {
                        case i:
                            e = (r - n) / l + (r < n ? 6 : 0);
                            break;
                        case r:
                            e = (n - i) / l + 2;
                            break;
                        case n:
                            e = (i - r) / l + 4;
                    }
                    e /= 6;
                }
                return [e, h, o, t[3]];
            }

            function hue2rgb(t, e, i) {
                return i < 0 && (i += 1), 1 < i && --i, i < 1 / 6 ? t + 6 * (e - t) * i : i < 0.5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
            }

            function hslToRgb(t) {
                var e,
                    i,
                    r,
                    n = t[0],
                    s = t[1],
                    a = t[2];
                return 0 === s ? (i = r = e = a) : ((e = hue2rgb((s = 2 * a - (a = a < 0.5 ? a * (1 + s) : a + s - a * s)), a, n + 1 / 3)), (i = hue2rgb(s, a, n)), (r = hue2rgb(s, a, n - 1 / 3))), [e, i, r, t[3]];
            }

            function linear(t, e, i, r, n) {
                var s;
                if (((void 0 !== r && void 0 !== n) || ((r = e), (n = i), (e = 0), (i = 1)), i < e && ((s = i), (i = e), (e = s)), t <= e)) return r;
                if (i <= t) return n;
                var a = i === e ? 0 : (t - e) / (i - e);
                if (!r.length) return r + (n - r) * a;
                for (var o = r.length, l = createTypedArray("float32", o), h = 0; h < o; h += 1) l[h] = r[h] + (n[h] - r[h]) * a;
                return l;
            }

            function random(t, e) {
                if ((void 0 === e && (void 0 === t ? ((t = 0), (e = 1)) : ((e = t), (t = void 0))), e.length)) {
                    var i = e.length;
                    t = t || createTypedArray("float32", i);
                    for (var r = createTypedArray("float32", i), n = BMMath.random(), s = 0; s < i; s += 1) r[s] = t[s] + n * (e[s] - t[s]);
                    return r;
                }
                return (t = void 0 === t ? 0 : t) + BMMath.random() * (e - t);
            }

            function createPath(t, e, i, r) {
                var n = t.length,
                    s = shapePool.newElement();
                s.setPathData(!!r, n);
                for (var a, o, l = [0, 0], h = 0; h < n; h += 1) (a = e && e[h] ? e[h] : l), (o = i && i[h] ? i[h] : l), s.setTripleAt(t[h][0], t[h][1], o[0] + t[h][0], o[1] + t[h][1], a[0] + t[h][0], a[1] + t[h][1], h, !0);
                return s;
            }

            function initiateExpression(elem, data, property) {
                function noOp(t) {
                    return t;
                }

                if (!elem.globalData.renderConfig.runExpressions) return noOp;
                var val = data.x,
                    needsVelocity = /velocity(?![\w\d])/.test(val),
                    _needsRandom = -1 !== val.indexOf("random"),
                    elemType = elem.data.ty,
                    transform,
                    $bm_transform,
                    content,
                    effect,
                    thisProperty = property;
                (thisProperty.valueAtTime = thisProperty.getValueAtTime),
                    Object.defineProperty(thisProperty, "value", {
                        get: function () {
                            return thisProperty.v;
                        },
                    }),
                    (elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate),
                    (elem.comp.displayStartTime = 0);
                var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                    outPoint = elem.data.op / elem.comp.globalData.frameRate,
                    width = elem.data.sw || 0,
                    height = elem.data.sh || 0,
                    name = elem.data.nm,
                    loopIn,
                    loop_in,
                    loopOut,
                    loop_out,
                    smooth,
                    toWorld,
                    fromWorld,
                    fromComp,
                    toComp,
                    fromCompToSurface,
                    position,
                    rotation,
                    anchorPoint,
                    scale,
                    thisLayer,
                    thisComp,
                    mask,
                    valueAtTime,
                    velocityAtTime,
                    scoped_bm_rt,
                    expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                    numKeys = property.kf ? data.k.length : 0,
                    active = !this.data || !0 !== this.data.hd,
                    wiggle = function (t, e) {
                        for (var i = this.pv.length || 1, r = createTypedArray("float32", i), n = Math.floor(5 * time), s = 0, a = 0; s < n;) {
                            for (a = 0; a < i; a += 1) r[a] += -e + 2 * e * BMMath.random();
                            s += 1;
                        }
                        var o = 5 * time,
                            l = o - Math.floor(o),
                            h = createTypedArray("float32", i);
                        if (1 < i) {
                            for (a = 0; a < i; a += 1) h[a] = this.pv[a] + r[a] + (-e + 2 * e * BMMath.random()) * l;
                            return h;
                        }
                        return this.pv + r[0] + (-e + 2 * e * BMMath.random()) * l;
                    }.bind(this);

                function loopInDuration(t, e) {
                    return loopIn(t, e, !0);
                }

                function loopOutDuration(t, e) {
                    return loopOut(t, e, !0);
                }

                thisProperty.loopIn && ((loopIn = thisProperty.loopIn.bind(thisProperty)), (loop_in = loopIn)),
                thisProperty.loopOut && ((loopOut = thisProperty.loopOut.bind(thisProperty)), (loop_out = loopOut)),
                thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)),
                this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)),
                this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
                var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                    time,
                    velocity,
                    value,
                    text,
                    textIndex,
                    textTotal,
                    selectorValue;

                function lookAt(t, e) {
                    (e = [e[0] - t[0], e[1] - t[1], e[2] - t[2]]), (t = Math.atan2(e[0], Math.sqrt(e[1] * e[1] + e[2] * e[2])) / degToRads);
                    return [-Math.atan2(e[1], e[2]) / degToRads, t, 0];
                }

                function easeOut(t, e, i, r, n) {
                    return applyEase(easeOutBez, t, e, i, r, n);
                }

                function easeIn(t, e, i, r, n) {
                    return applyEase(easeInBez, t, e, i, r, n);
                }

                function ease(t, e, i, r, n) {
                    return applyEase(easeInOutBez, t, e, i, r, n);
                }

                function applyEase(t, e, i, r, n, s) {
                    void 0 === n ? ((n = i), (s = r)) : (e = (e - i) / (r - i)), 1 < e ? (e = 1) : e < 0 && (e = 0);
                    var a = t(e);
                    if ($bm_isInstanceOfArray(n)) {
                        for (var o = n.length, l = createTypedArray("float32", o), h = 0; h < o; h += 1) l[h] = (s[h] - n[h]) * a + n[h];
                        return l;
                    }
                    return (s - n) * a + n;
                }

                function nearestKey(t) {
                    var e,
                        i,
                        r,
                        n = data.k.length;
                    if (data.k.length && "number" != typeof data.k[0])
                        if (((i = -1), (t *= elem.comp.globalData.frameRate) < data.k[0].t)) (i = 1), (r = data.k[0].t);
                        else {
                            for (e = 0; e < n - 1; e += 1) {
                                if (t === data.k[e].t) {
                                    (i = e + 1), (r = data.k[e].t);
                                    break;
                                }
                                if (t > data.k[e].t && t < data.k[e + 1].t) {
                                    r = t - data.k[e].t > data.k[e + 1].t - t ? ((i = e + 2), data.k[e + 1].t) : ((i = e + 1), data.k[e].t);
                                    break;
                                }
                            }
                            -1 === i && ((i = e + 1), (r = data.k[e].t));
                        }
                    else r = i = 0;
                    var s = {};
                    return (s.index = i), (s.time = r / elem.comp.globalData.frameRate), s;
                }

                function key(t) {
                    if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + t);
                    --t;
                    for (var e = {
                        time: data.k[t].t / elem.comp.globalData.frameRate,
                        value: []
                    }, i = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e, r = i.length, n = 0; n < r; n += 1)
                        (e[n] = i[n]), (e.value[n] = i[n]);
                    return e;
                }

                function framesToTime(t, e) {
                    return t / (e = e || elem.comp.globalData.frameRate);
                }

                function timeToFrames(t, e) {
                    return (t = !t && 0 !== t ? time : t) * (e = e || elem.comp.globalData.frameRate);
                }

                function seedRandom(t) {
                    BMMath.seedrandom(randSeed + t);
                }

                function sourceRectAtTime() {
                    return elem.sourceRectAtTime();
                }

                function substring(t, e) {
                    return "string" == typeof value ? (void 0 === e ? value.substring(t) : value.substring(t, e)) : "";
                }

                function substr(t, e) {
                    return "string" == typeof value ? (void 0 === e ? value.substr(t) : value.substr(t, e)) : "";
                }

                function posterizeTime(t) {
                    (time = 0 === t ? 0 : Math.floor(time * t) / t), (value = valueAtTime(time));
                }

                var index = elem.data.ind,
                    hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                    parent,
                    randSeed = Math.floor(1e6 * Math.random()),
                    globalData = elem.globalData;

                function executeExpression(t) {
                    return (
                        (value = t),
                            this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType
                                ? value
                                : ("textSelector" === this.propType && ((textIndex = this.textIndex), (textTotal = this.textTotal), (selectorValue = this.selectorValue)),
                                thisLayer ||
                                ((text = elem.layerInterface.text),
                                    (thisLayer = elem.layerInterface),
                                    (thisComp = elem.comp.compInterface),
                                    (toWorld = thisLayer.toWorld.bind(thisLayer)),
                                    (fromWorld = thisLayer.fromWorld.bind(thisLayer)),
                                    (fromComp = thisLayer.fromComp.bind(thisLayer)),
                                    (toComp = thisLayer.toComp.bind(thisLayer)),
                                    (mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null),
                                    (fromCompToSurface = fromComp)),
                                transform || ((transform = elem.layerInterface("ADBE Transform Group")), ($bm_transform = transform) && (anchorPoint = transform.anchorPoint)),
                                4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")),
                                    (effect = effect || thisLayer(4)),
                                (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface),
                                    (time = this.comp.renderedFrame / this.comp.globalData.frameRate),
                                _needsRandom && seedRandom(randSeed + time),
                                needsVelocity && (velocity = velocityAtTime(time)),
                                    expression_function(),
                                    (this.frameExpressionId = elem.globalData.frameId),
                                    (scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt))
                    );
                }

                return (
                    (executeExpression.__preventDeadCodeRemoval = [
                        $bm_transform,
                        anchorPoint,
                        time,
                        velocity,
                        inPoint,
                        outPoint,
                        width,
                        height,
                        name,
                        loop_in,
                        loop_out,
                        smooth,
                        toComp,
                        fromCompToSurface,
                        toWorld,
                        fromWorld,
                        mask,
                        position,
                        rotation,
                        scale,
                        thisComp,
                        numKeys,
                        active,
                        wiggle,
                        loopInDuration,
                        loopOutDuration,
                        comp,
                        lookAt,
                        easeOut,
                        easeIn,
                        ease,
                        nearestKey,
                        key,
                        text,
                        textIndex,
                        textTotal,
                        selectorValue,
                        framesToTime,
                        timeToFrames,
                        sourceRectAtTime,
                        substring,
                        substr,
                        posterizeTime,
                        index,
                        globalData,
                    ]),
                        executeExpression
                );
            }

            return (
                (ob.initiateExpression = initiateExpression),
                    (ob.__preventDeadCodeRemoval = [
                        window,
                        document,
                        XMLHttpRequest,
                        fetch,
                        frames,
                        $bm_neg,
                        add,
                        $bm_sum,
                        $bm_sub,
                        $bm_mul,
                        $bm_div,
                        $bm_mod,
                        clamp,
                        radians_to_degrees,
                        degreesToRadians,
                        degrees_to_radians,
                        normalize,
                        rgbToHsl,
                        hslToRgb,
                        linear,
                        random,
                        createPath,
                        _lottieGlobal,
                    ]),
                    (ob.resetFrame = resetFrame),
                    ob
            );
        })(),
        Expressions =
            ((Rna = {}),
                (Rna.initExpressions = function (t) {
                    var e = 0,
                        i = [];
                    (t.renderer.compInterface = CompExpressionInterface(t.renderer)),
                        t.renderer.globalData.projectInterface.registerComposition(t.renderer),
                        (t.renderer.globalData.pushExpression = function () {
                            e += 1;
                        }),
                        (t.renderer.globalData.popExpression = function () {
                            0 == --e &&
                            (function () {
                                for (var t = i.length, e = 0; e < t; e += 1) i[e].release();
                                i.length = 0;
                            })();
                        }),
                        (t.renderer.globalData.registerExpressionProperty = function (t) {
                            -1 === i.indexOf(t) && i.push(t);
                        });
                }),
                (Rna.resetFrame = ExpressionManager.resetFrame),
                Rna),
        MaskManagerInterface =
            (Object.defineProperty(Yna.prototype, "maskPath", {
                get: function () {
                    return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
                },
            }),
                Object.defineProperty(Yna.prototype, "maskOpacity", {
                    get: function () {
                        return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
                    },
                }),
                function (e) {
                    for (var i = createSizedArray(e.viewData.length), r = e.viewData.length, n = 0; n < r; n += 1) i[n] = new Yna(e.viewData[n], e.masksProperties[n]);
                    return function (t) {
                        for (n = 0; n < r;) {
                            if (e.masksProperties[n].nm === t) return i[n];
                            n += 1;
                        }
                        return null;
                    };
                }),
        ExpressionPropertyInterface =
            ((eoa = {pv: 0, v: 0, mult: 1}),
                (foa = {pv: [0, 0, 0], v: [0, 0, 0], mult: 1}),
                function (t) {
                    return t
                        ? "unidimensional" === t.propType
                            ? ((o = 1 / (a = !((a = t) && "pv" in a) ? eoa : a).mult),
                                (l = a.pv * o),
                                ((h = new Number(l)).value = l),
                                goa(h, a, "unidimensional"),
                                function () {
                                    return a.k && a.getValue(), (l = a.v * o), h.value !== l && (((h = new Number(l)).value = l), goa(h, a, "unidimensional")), h;
                                })
                            : ((i = 1 / (e = !((e = t) && "pv" in e) ? foa : e).mult),
                                (r = (e.data && e.data.l) || e.pv.length),
                                (n = createTypedArray("float32", r)),
                                (s = createTypedArray("float32", r)),
                                (n.value = s),
                                goa(n, e, "multidimensional"),
                                function () {
                                    e.k && e.getValue();
                                    for (var t = 0; t < r; t += 1) (s[t] = e.v[t] * i), (n[t] = s[t]);
                                    return n;
                                })
                        : hoa;
                    var e, i, r, n, s, a, o, l, h;
                }),
        TransformExpressionInterface = function (t) {
            function e(t) {
                switch (t) {
                    case "scale":
                    case "Scale":
                    case "ADBE Scale":
                    case 6:
                        return e.scale;
                    case "rotation":
                    case "Rotation":
                    case "ADBE Rotation":
                    case "ADBE Rotate Z":
                    case 10:
                        return e.rotation;
                    case "ADBE Rotate X":
                        return e.xRotation;
                    case "ADBE Rotate Y":
                        return e.yRotation;
                    case "position":
                    case "Position":
                    case "ADBE Position":
                    case 2:
                        return e.position;
                    case "ADBE Position_0":
                        return e.xPosition;
                    case "ADBE Position_1":
                        return e.yPosition;
                    case "ADBE Position_2":
                        return e.zPosition;
                    case "anchorPoint":
                    case "AnchorPoint":
                    case "Anchor Point":
                    case "ADBE AnchorPoint":
                    case 1:
                        return e.anchorPoint;
                    case "opacity":
                    case "Opacity":
                    case 11:
                        return e.opacity;
                    default:
                        return null;
                }
            }

            var i, r, n, s;
            return (
                Object.defineProperty(e, "rotation", {get: ExpressionPropertyInterface(t.r || t.rz)}),
                    Object.defineProperty(e, "zRotation", {get: ExpressionPropertyInterface(t.rz || t.r)}),
                    Object.defineProperty(e, "xRotation", {get: ExpressionPropertyInterface(t.rx)}),
                    Object.defineProperty(e, "yRotation", {get: ExpressionPropertyInterface(t.ry)}),
                    Object.defineProperty(e, "scale", {get: ExpressionPropertyInterface(t.s)}),
                    t.p ? (s = ExpressionPropertyInterface(t.p)) : ((i = ExpressionPropertyInterface(t.px)), (r = ExpressionPropertyInterface(t.py)), t.pz && (n = ExpressionPropertyInterface(t.pz))),
                    Object.defineProperty(e, "position", {
                        get: function () {
                            return t.p ? s() : [i(), r(), n ? n() : 0];
                        },
                    }),
                    Object.defineProperty(e, "xPosition", {get: ExpressionPropertyInterface(t.px)}),
                    Object.defineProperty(e, "yPosition", {get: ExpressionPropertyInterface(t.py)}),
                    Object.defineProperty(e, "zPosition", {get: ExpressionPropertyInterface(t.pz)}),
                    Object.defineProperty(e, "anchorPoint", {get: ExpressionPropertyInterface(t.a)}),
                    Object.defineProperty(e, "opacity", {get: ExpressionPropertyInterface(t.o)}),
                    Object.defineProperty(e, "skew", {get: ExpressionPropertyInterface(t.sk)}),
                    Object.defineProperty(e, "skewAxis", {get: ExpressionPropertyInterface(t.sa)}),
                    Object.defineProperty(e, "orientation", {get: ExpressionPropertyInterface(t.or)}),
                    e
            );
        },
        LayerExpressionInterface = function (e) {
            var i;

            function r(t) {
                switch (t) {
                    case "ADBE Root Vectors Group":
                    case "Contents":
                    case 2:
                        return r.shapeInterface;
                    case 1:
                    case 6:
                    case "Transform":
                    case "transform":
                    case "ADBE Transform Group":
                        return i;
                    case 4:
                    case "ADBE Effect Parade":
                    case "effects":
                    case "Effects":
                        return r.effect;
                    case "ADBE Text Properties":
                        return r.textInterface;
                    default:
                        return null;
                }
            }

            (r.getMatrix = Goa),
                (r.invertPoint = Moa),
                (r.applyPoint = Loa),
                (r.toWorld = Ioa),
                (r.toWorldVec = Hoa),
                (r.fromWorld = Koa),
                (r.fromWorldVec = Joa),
                (r.toComp = Ioa),
                (r.fromComp = Noa),
                (r.sampleImage = Ooa),
                (r.sourceRectAtTime = e.sourceRectAtTime.bind(e));
            var t = getDescriptor((i = TransformExpressionInterface((r._elem = e).finalTransform.mProp)), "anchorPoint");
            return (
                Object.defineProperties(r, {
                    hasParent: {
                        get: function () {
                            return e.hierarchy.length;
                        },
                    },
                    parent: {
                        get: function () {
                            return e.hierarchy[0].layerInterface;
                        },
                    },
                    rotation: getDescriptor(i, "rotation"),
                    scale: getDescriptor(i, "scale"),
                    position: getDescriptor(i, "position"),
                    opacity: getDescriptor(i, "opacity"),
                    anchorPoint: t,
                    anchor_point: t,
                    transform: {
                        get: function () {
                            return i;
                        },
                    },
                    active: {
                        get: function () {
                            return e.isInRange;
                        },
                    },
                }),
                    (r.startTime = e.data.st),
                    (r.index = e.data.ind),
                    (r.source = e.data.refId),
                    (r.height = 0 === e.data.ty ? e.data.h : 100),
                    (r.width = 0 === e.data.ty ? e.data.w : 100),
                    (r.inPoint = e.data.ip / e.comp.globalData.frameRate),
                    (r.outPoint = e.data.op / e.comp.globalData.frameRate),
                    (r._name = e.data.nm),
                    (r.registerMaskInterface = function (t) {
                        r.mask = new MaskManagerInterface(t, e);
                    }),
                    (r.registerEffectsInterface = function (t) {
                        r.effect = t;
                    }),
                    r
            );
        },
        propertyGroupFactory = function (e, i) {
            return function (t) {
                return (t = void 0 === t ? 1 : t) <= 0 ? e : i(t - 1);
            };
        },
        PropertyInterface = function (t, e) {
            var i = {_name: t};
            return function (t) {
                return (t = void 0 === t ? 1 : t) <= 0 ? i : e(t - 1);
            };
        },
        EffectsExpressionInterface = {
            createEffectsInterface: function (t, e) {
                if (t.effectsManager) {
                    for (var i = [], r = t.data.ef, n = t.effectsManager.effectElements.length, s = 0; s < n; s += 1) i.push(Bpa(r[s], t.effectsManager.effectElements[s], e, t));
                    var a = t.data.ef || [],
                        o = function (t) {
                            for (s = 0, n = a.length; s < n;) {
                                if (t === a[s].nm || t === a[s].mn || t === a[s].ix) return i[s];
                                s += 1;
                            }
                            return null;
                        };
                    return (
                        Object.defineProperty(o, "numProperties", {
                            get: function () {
                                return a.length;
                            },
                        }),
                            o
                    );
                }
                return null;
            },
        },
        ShapePathInterface = function (t, e, i) {
            var r = e.sh;

            function n(t) {
                return "Shape" === t || "shape" === t || "Path" === t || "path" === t || "ADBE Vector Shape" === t || 2 === t ? n.path : null;
            }

            e = propertyGroupFactory(n, i);
            return (
                r.setGroupProperty(PropertyInterface("Path", e)),
                    Object.defineProperties(n, {
                        path: {
                            get: function () {
                                return r.k && r.getValue(), r;
                            },
                        },
                        shape: {
                            get: function () {
                                return r.k && r.getValue(), r;
                            },
                        },
                        _name: {value: t.nm},
                        ix: {value: t.ix},
                        propertyIndex: {value: t.ix},
                        mn: {value: t.mn},
                        propertyGroup: {value: i},
                    }),
                    n
            );
        },
        ShapeExpressionInterface = function (t, e, r) {
            var n;

            function i(t) {
                if ("number" == typeof t) return 0 === (t = void 0 === t ? 1 : t) ? r : n[t - 1];
                for (var e = 0, i = n.length; e < i;) {
                    if (n[e]._name === t) return n[e];
                    e += 1;
                }
                return null;
            }

            return (
                (i.propertyGroup = propertyGroupFactory(i, function () {
                    return r;
                })),
                    (n = jqa(t, e, i.propertyGroup)),
                    (i.numProperties = n.length),
                    (i._name = "Contents"),
                    i
            );
        },
        TextExpressionInterface = function (e) {
            var i;

            function r(t) {
                return "ADBE Text Document" === t ? r.sourceText : null;
            }

            return (
                Object.defineProperty(r, "sourceText", {
                    get: function () {
                        e.textProperty.getValue();
                        var t = e.textProperty.currentData.t;
                        return (
                            (i && t === i.value) ||
                            (((i = new String(t)).value = t || new String(t)),
                                Object.defineProperty(i, "style", {
                                    get: function () {
                                        return {fillColor: e.textProperty.currentData.fc};
                                    },
                                })),
                                i
                        );
                    },
                }),
                    r
            );
        },
        eoa,
        foa,
        Rna;

    function jqa(t, e, i) {
        for (var r, n, s, a = [], o = t ? t.length : 0, l = 0; l < o; l += 1)
            "gr" === t[l].ty
                ? a.push(
                    (function (t, e, i) {
                        var r = function (t) {
                            switch (t) {
                                case "ADBE Vectors Group":
                                case "Contents":
                                case 2:
                                    return r.content;
                                default:
                                    return r.transform;
                            }
                        };
                        r.propertyGroup = propertyGroupFactory(r, i);
                        (i = (function (t, e, i) {
                            function r(t) {
                                for (var e = 0, i = n.length; e < i;) {
                                    if (n[e]._name === t || n[e].mn === t || n[e].propertyIndex === t || n[e].ix === t || n[e].ind === t) return n[e];
                                    e += 1;
                                }
                                return "number" == typeof t ? n[t - 1] : null;
                            }

                            var n;
                            (r.propertyGroup = propertyGroupFactory(r, i)), (n = jqa(t.it, e.it, r.propertyGroup)), (r.numProperties = n.length);
                            e = qqa(t.it[t.it.length - 1], e.it[e.it.length - 1], r.propertyGroup);
                            return (r.transform = e), (r.propertyIndex = t.cix), (r._name = t.nm), r;
                        })(t, e, r.propertyGroup)),
                            (e = qqa(t.it[t.it.length - 1], e.it[e.it.length - 1], r.propertyGroup));
                        return (
                            (r.content = i),
                                (r.transform = e),
                                Object.defineProperty(r, "_name", {
                                    get: function () {
                                        return t.nm;
                                    },
                                }),
                                (r.numProperties = t.np),
                                (r.propertyIndex = t.ix),
                                (r.nm = t.nm),
                                (r.mn = t.mn),
                                r
                        );
                    })(t[l], e[l], i)
                )
                : "fl" === t[l].ty
                    ? a.push(
                        ((r = t[l]),
                            (n = e[l]),
                            (s = i),
                            Object.defineProperties(p, {
                                color: {get: ExpressionPropertyInterface(n.c)},
                                opacity: {get: ExpressionPropertyInterface(n.o)},
                                _name: {value: r.nm},
                                mn: {value: r.mn}
                            }),
                            n.c.setGroupProperty(PropertyInterface("Color", s)),
                            n.o.setGroupProperty(PropertyInterface("Opacity", s)),
                            p)
                    )
                    : "st" === t[l].ty
                        ? a.push(
                            (function (t, e, i) {
                                var r,
                                    i = propertyGroupFactory(o, i),
                                    n = propertyGroupFactory(a, i);
                                var s = t.d ? t.d.length : 0,
                                    a = {};
                                for (r = 0; r < s; r += 1) Object.defineProperty(a, t.d[r].nm, {get: ExpressionPropertyInterface(e.d.dataProps[r].p)}), e.d.dataProps[r].p.setGroupProperty(n);

                                function o(t) {
                                    return "Color" === t || "color" === t ? o.color : "Opacity" === t || "opacity" === t ? o.opacity : "Stroke Width" === t || "stroke width" === t ? o.strokeWidth : null;
                                }

                                return (
                                    Object.defineProperties(o, {
                                        color: {get: ExpressionPropertyInterface(e.c)},
                                        opacity: {get: ExpressionPropertyInterface(e.o)},
                                        strokeWidth: {get: ExpressionPropertyInterface(e.w)},
                                        dash: {
                                            get: function () {
                                                return a;
                                            },
                                        },
                                        _name: {value: t.nm},
                                        mn: {value: t.mn},
                                    }),
                                        e.c.setGroupProperty(PropertyInterface("Color", i)),
                                        e.o.setGroupProperty(PropertyInterface("Opacity", i)),
                                        e.w.setGroupProperty(PropertyInterface("Stroke Width", i)),
                                        o
                                );
                            })(t[l], e[l], i)
                        )
                        : "tm" === t[l].ty
                            ? a.push(
                                (function (e, t, i) {
                                    function r(t) {
                                        return t === e.e.ix || "End" === t || "end" === t ? r.end : t === e.s.ix ? r.start : t === e.o.ix ? r.offset : null;
                                    }

                                    var n = propertyGroupFactory(r, i);
                                    return (
                                        (r.propertyIndex = e.ix),
                                            t.s.setGroupProperty(PropertyInterface("Start", n)),
                                            t.e.setGroupProperty(PropertyInterface("End", n)),
                                            t.o.setGroupProperty(PropertyInterface("Offset", n)),
                                            (r.propertyIndex = e.ix),
                                            (r.propertyGroup = i),
                                            Object.defineProperties(r, {
                                                start: {get: ExpressionPropertyInterface(t.s)},
                                                end: {get: ExpressionPropertyInterface(t.e)},
                                                offset: {get: ExpressionPropertyInterface(t.o)},
                                                _name: {value: e.nm},
                                            }),
                                            (r.mn = e.mn),
                                            r
                                    );
                                })(t[l], e[l], i)
                            )
                            : "tr" === t[l].ty ||
                            ("el" === t[l].ty
                                ? a.push(
                                    (function (e, t, i) {
                                        function r(t) {
                                            return e.p.ix === t ? r.position : e.s.ix === t ? r.size : null;
                                        }

                                        i = propertyGroupFactory(r, i);
                                        r.propertyIndex = e.ix;
                                        t = "tm" === t.sh.ty ? t.sh.prop : t.sh;
                                        return (
                                            t.s.setGroupProperty(PropertyInterface("Size", i)),
                                                t.p.setGroupProperty(PropertyInterface("Position", i)),
                                                Object.defineProperties(r, {
                                                    size: {get: ExpressionPropertyInterface(t.s)},
                                                    position: {get: ExpressionPropertyInterface(t.p)},
                                                    _name: {value: e.nm}
                                                }),
                                                (r.mn = e.mn),
                                                r
                                        );
                                    })(t[l], e[l], i)
                                )
                                : "sr" === t[l].ty
                                    ? a.push(
                                        (function (e, t, i) {
                                            function r(t) {
                                                return e.p.ix === t
                                                    ? r.position
                                                    : e.r.ix === t
                                                        ? r.rotation
                                                        : e.pt.ix === t
                                                            ? r.points
                                                            : e.or.ix === t || "ADBE Vector Star Outer Radius" === t
                                                                ? r.outerRadius
                                                                : e.os.ix === t
                                                                    ? r.outerRoundness
                                                                    : !e.ir || (e.ir.ix !== t && "ADBE Vector Star Inner Radius" !== t)
                                                                        ? e.is && e.is.ix === t
                                                                            ? r.innerRoundness
                                                                            : null
                                                                        : r.innerRadius;
                                            }

                                            (i = propertyGroupFactory(r, i)), (t = "tm" === t.sh.ty ? t.sh.prop : t.sh);
                                            return (
                                                (r.propertyIndex = e.ix),
                                                    t.or.setGroupProperty(PropertyInterface("Outer Radius", i)),
                                                    t.os.setGroupProperty(PropertyInterface("Outer Roundness", i)),
                                                    t.pt.setGroupProperty(PropertyInterface("Points", i)),
                                                    t.p.setGroupProperty(PropertyInterface("Position", i)),
                                                    t.r.setGroupProperty(PropertyInterface("Rotation", i)),
                                                e.ir && (t.ir.setGroupProperty(PropertyInterface("Inner Radius", i)), t.is.setGroupProperty(PropertyInterface("Inner Roundness", i))),
                                                    Object.defineProperties(r, {
                                                        position: {get: ExpressionPropertyInterface(t.p)},
                                                        rotation: {get: ExpressionPropertyInterface(t.r)},
                                                        points: {get: ExpressionPropertyInterface(t.pt)},
                                                        outerRadius: {get: ExpressionPropertyInterface(t.or)},
                                                        outerRoundness: {get: ExpressionPropertyInterface(t.os)},
                                                        innerRadius: {get: ExpressionPropertyInterface(t.ir)},
                                                        innerRoundness: {get: ExpressionPropertyInterface(t.is)},
                                                        _name: {value: e.nm},
                                                    }),
                                                    (r.mn = e.mn),
                                                    r
                                            );
                                        })(t[l], e[l], i)
                                    )
                                    : "sh" === t[l].ty
                                        ? a.push(ShapePathInterface(t[l], e[l], i))
                                        : "rc" === t[l].ty
                                            ? a.push(
                                                (function (e, t, i) {
                                                    function r(t) {
                                                        return e.p.ix === t ? r.position : e.r.ix === t ? r.roundness : e.s.ix === t || "Size" === t || "ADBE Vector Rect Size" === t ? r.size : null;
                                                    }

                                                    (i = propertyGroupFactory(r, i)), (t = "tm" === t.sh.ty ? t.sh.prop : t.sh);
                                                    return (
                                                        (r.propertyIndex = e.ix),
                                                            t.p.setGroupProperty(PropertyInterface("Position", i)),
                                                            t.s.setGroupProperty(PropertyInterface("Size", i)),
                                                            t.r.setGroupProperty(PropertyInterface("Rotation", i)),
                                                            Object.defineProperties(r, {
                                                                position: {get: ExpressionPropertyInterface(t.p)},
                                                                roundness: {get: ExpressionPropertyInterface(t.r)},
                                                                size: {get: ExpressionPropertyInterface(t.s)},
                                                                _name: {value: e.nm},
                                                            }),
                                                            (r.mn = e.mn),
                                                            r
                                                    );
                                                })(t[l], e[l], i)
                                            )
                                            : "rd" === t[l].ty
                                                ? a.push(
                                                    (function (e, t, i) {
                                                        function r(t) {
                                                            return e.r.ix === t || "Round Corners 1" === t ? r.radius : null;
                                                        }

                                                        i = propertyGroupFactory(r, i);
                                                        return (
                                                            (r.propertyIndex = e.ix),
                                                                t.rd.setGroupProperty(PropertyInterface("Radius", i)),
                                                                Object.defineProperties(r, {
                                                                    radius: {get: ExpressionPropertyInterface(t.rd)},
                                                                    _name: {value: e.nm}
                                                                }),
                                                                (r.mn = e.mn),
                                                                r
                                                        );
                                                    })(t[l], e[l], i)
                                                )
                                                : "rp" === t[l].ty
                                                    ? a.push(
                                                        (function (e, t, i) {
                                                            function r(t) {
                                                                return e.c.ix === t || "Copies" === t ? r.copies : e.o.ix === t || "Offset" === t ? r.offset : null;
                                                            }

                                                            i = propertyGroupFactory(r, i);
                                                            return (
                                                                (r.propertyIndex = e.ix),
                                                                    t.c.setGroupProperty(PropertyInterface("Copies", i)),
                                                                    t.o.setGroupProperty(PropertyInterface("Offset", i)),
                                                                    Object.defineProperties(r, {
                                                                        copies: {get: ExpressionPropertyInterface(t.c)},
                                                                        offset: {get: ExpressionPropertyInterface(t.o)},
                                                                        _name: {value: e.nm}
                                                                    }),
                                                                    (r.mn = e.mn),
                                                                    r
                                                            );
                                                        })(t[l], e[l], i)
                                                    )
                                                    : "gf" === t[l].ty
                                                        ? a.push(
                                                            ((r = t[l]),
                                                                (n = e[l]),
                                                                (s = i),
                                                                Object.defineProperties(h, {
                                                                    startPoint: {get: ExpressionPropertyInterface(n.s)},
                                                                    endPoint: {get: ExpressionPropertyInterface(n.e)},
                                                                    opacity: {get: ExpressionPropertyInterface(n.o)},
                                                                    type: {
                                                                        get: function () {
                                                                            return "a";
                                                                        },
                                                                    },
                                                                    _name: {value: r.nm},
                                                                    mn: {value: r.mn},
                                                                }),
                                                                n.s.setGroupProperty(PropertyInterface("Start Point", s)),
                                                                n.e.setGroupProperty(PropertyInterface("End Point", s)),
                                                                n.o.setGroupProperty(PropertyInterface("Opacity", s)),
                                                                h)
                                                        )
                                                        : a.push(
                                                            (t[l],
                                                                e[l],
                                                                function () {
                                                                    return null;
                                                                })
                                                        ));

        function h(t) {
            return "Start Point" === t || "start point" === t ? h.startPoint : "End Point" === t || "end point" === t ? h.endPoint : "Opacity" === t || "opacity" === t ? h.opacity : null;
        }

        function p(t) {
            return "Color" === t || "color" === t ? p.color : "Opacity" === t || "opacity" === t ? p.opacity : null;
        }

        return a;
    }

    function qqa(e, t, i) {
        function r(t) {
            return e.a.ix === t || "Anchor Point" === t
                ? r.anchorPoint
                : e.o.ix === t || "Opacity" === t
                    ? r.opacity
                    : e.p.ix === t || "Position" === t
                        ? r.position
                        : e.r.ix === t || "Rotation" === t || "ADBE Vector Rotation" === t
                            ? r.rotation
                            : e.s.ix === t || "Scale" === t
                                ? r.scale
                                : (e.sk && e.sk.ix === t) || "Skew" === t
                                    ? r.skew
                                    : (e.sa && e.sa.ix === t) || "Skew Axis" === t
                                        ? r.skewAxis
                                        : null;
        }

        var n = propertyGroupFactory(r, i);
        return (
            t.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", n)),
                t.transform.mProps.p.setGroupProperty(PropertyInterface("Position", n)),
                t.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", n)),
                t.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", n)),
                t.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", n)),
            t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", n)), t.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", n))),
                t.transform.op.setGroupProperty(PropertyInterface("Opacity", n)),
                Object.defineProperties(r, {
                    opacity: {get: ExpressionPropertyInterface(t.transform.mProps.o)},
                    position: {get: ExpressionPropertyInterface(t.transform.mProps.p)},
                    anchorPoint: {get: ExpressionPropertyInterface(t.transform.mProps.a)},
                    scale: {get: ExpressionPropertyInterface(t.transform.mProps.s)},
                    rotation: {get: ExpressionPropertyInterface(t.transform.mProps.r)},
                    skew: {get: ExpressionPropertyInterface(t.transform.mProps.sk)},
                    skewAxis: {get: ExpressionPropertyInterface(t.transform.mProps.sa)},
                    _name: {value: e.nm},
                }),
                (r.ty = "tr"),
                (r.mn = e.mn),
                (r.propertyGroup = i),
                r
        );
    }

    function Bpa(n, t, e, i) {
        function r(t) {
            for (var e = n.ef, i = 0, r = e.length; i < r;) {
                if (t === e[i].nm || t === e[i].mn || t === e[i].ix) return 5 === e[i].ty ? a[i] : a[i]();
                i += 1;
            }
            throw new Error();
        }

        for (var s = propertyGroupFactory(r, e), a = [], o = n.ef.length, l = 0; l < o; l += 1)
            5 === n.ef[l].ty
                ? a.push(Bpa(n.ef[l], t.effectElements[l], t.effectElements[l].propertyGroup, i))
                : a.push(
                    (function (t, e, i, r) {
                        var n = ExpressionPropertyInterface(t.p);
                        return (
                            t.p.setGroupProperty && t.p.setGroupProperty(PropertyInterface("", r)),
                                function () {
                                    return 10 === e ? i.comp.compInterface(t.p.v) : n();
                                }
                        );
                    })(t.effectElements[l], n.ef[l].ty, i, s)
                );
        return (
            "ADBE Color Control" === n.mn &&
            Object.defineProperty(r, "color", {
                get: function () {
                    return a[0]();
                },
            }),
                Object.defineProperties(r, {
                    numProperties: {
                        get: function () {
                            return n.np;
                        },
                    },
                    _name: {value: n.nm},
                    propertyGroup: {value: s},
                }),
                (r.enabled = 0 !== n.en),
                (r.active = r.enabled),
                r
        );
    }

    function Goa(t) {
        var e = new Matrix();
        return void 0 !== t ? this._elem.finalTransform.mProp.getValueAtTime(t).clone(e) : this._elem.finalTransform.mProp.applyToMatrix(e), e;
    }

    function Hoa(t, e) {
        e = this.getMatrix(e);
        return (e.props[12] = 0), (e.props[13] = 0), (e.props[14] = 0), this.applyPoint(e, t);
    }

    function Ioa(t, e) {
        e = this.getMatrix(e);
        return this.applyPoint(e, t);
    }

    function Joa(t, e) {
        e = this.getMatrix(e);
        return (e.props[12] = 0), (e.props[13] = 0), (e.props[14] = 0), this.invertPoint(e, t);
    }

    function Koa(t, e) {
        e = this.getMatrix(e);
        return this.invertPoint(e, t);
    }

    function Loa(t, e) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) for (var i = this._elem.hierarchy.length, r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
        return t.applyToPointArray(e[0], e[1], e[2] || 0);
    }

    function Moa(t, e) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) for (var i = this._elem.hierarchy.length, r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
        return t.inversePoint(e);
    }

    function Noa(t) {
        var e = new Matrix();
        if ((e.reset(), this._elem.finalTransform.mProp.applyToMatrix(e), this._elem.hierarchy && this._elem.hierarchy.length)) {
            for (var i = this._elem.hierarchy.length, r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e);
            return e.inversePoint(t);
        }
        return e.inversePoint(t);
    }

    function Ooa() {
        return [1, 1, 1, 1];
    }

    function goa(r, n, s) {
        Object.defineProperty(r, "velocity", {
            get: function () {
                return n.getVelocityAtTime(n.comp.currentFrame);
            },
        }),
            (r.numKeys = n.keyframes ? n.keyframes.length : 0),
            (r.key = function (t) {
                if (!r.numKeys) return 0;
                var e = "s" in n.keyframes[t - 1] ? n.keyframes[t - 1].s : "e" in n.keyframes[t - 2] ? n.keyframes[t - 2].e : n.keyframes[t - 2].s,
                    i = "unidimensional" === s ? new Number(e) : Object.assign({}, e);
                return (i.time = n.keyframes[t - 1].t / n.elem.comp.globalData.frameRate), (i.value = "unidimensional" === s ? e[0] : e), i;
            }),
            (r.valueAtTime = n.getValueAtTime),
            (r.speedAtTime = n.getSpeedAtTime),
            (r.velocityAtTime = n.getVelocityAtTime),
            (r.propertyGroup = n.propertyGroup);
    }

    function hoa() {
        return eoa;
    }

    function Yna(t, e) {
        (this._mask = t), (this._data = e);
    }

    function _typeof(t) {
        return (_typeof =
            "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                ? function (t) {
                    return typeof t;
                }
                : function (t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
                })(t);
    }

    var FootageInterface =
            ((dataInterfaceFactory = function (t) {
                function e(t) {
                    return "Outline" === t ? e.outlineInterface() : null;
                }

                return (
                    (e._name = "Outline"),
                        (e.outlineInterface =
                            ((n = ""),
                                (s = (r = t).getFootageData()),
                                function () {
                                    return (n = ""), (s = r.getFootageData()), i;
                                })),
                        e
                );

                function i(t) {
                    if (s[t]) return "object" === _typeof((s = s[(n = t)])) ? i : s;
                    var e = t.indexOf(n);
                    if (-1 === e) return "";
                    e = parseInt(t.substr(e + n.length), 10);
                    return "object" === _typeof((s = s[e])) ? i : s;
                }

                var r, n, s;
            }),
                function (t) {
                    function e(t) {
                        return "Data" === t ? e.dataInterface : null;
                    }

                    return (e._name = "Data"), (e.dataInterface = dataInterfaceFactory(t)), e;
                }),
        dataInterfaceFactory,
        interfaces = {
            layer: LayerExpressionInterface,
            effects: EffectsExpressionInterface,
            comp: CompExpressionInterface,
            shape: ShapeExpressionInterface,
            text: TextExpressionInterface,
            footage: FootageInterface
        };

    function getInterface(t) {
        return interfaces[t] || null;
    }

    var expressionHelpers = {
        searchExpressions: function (t, e, i) {
            e.x && ((i.k = !0), (i.x = !0), (i.initiateExpression = ExpressionManager.initiateExpression), i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)));
        },
        getSpeedAtTime: function (t) {
            var e = this.getValueAtTime(t),
                i = this.getValueAtTime(t + -0.01),
                r = 0;
            if (e.length) {
                for (var n = 0; n < e.length; n += 1) r += Math.pow(i[n] - e[n], 2);
                r = 100 * Math.sqrt(r);
            } else r = 0;
            return r;
        },
        getVelocityAtTime: function (t) {
            if (void 0 !== this.vel) return this.vel;
            var e,
                i,
                r = this.getValueAtTime(t),
                n = this.getValueAtTime(t + -0.001);
            if (r.length) for (e = createTypedArray("float32", r.length), i = 0; i < r.length; i += 1) e[i] = (n[i] - r[i]) / -0.001;
            else e = (n - r) / -0.001;
            return e;
        },
        getValueAtTime: function (t) {
            return (
                (t *= this.elem.globalData.frameRate),
                (t -= this.offsetTime) !== this._cachingAtTime.lastFrame &&
                ((this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0),
                    (this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime)),
                    (this._cachingAtTime.lastFrame = t)),
                    this._cachingAtTime.value
            );
        },
        getStaticValueAtTime: function () {
            return this.pv;
        },
        setGroupProperty: function (t) {
            this.propertyGroup = t;
        },
    };

    function addPropertyDecorator() {
        function a(t, e, i) {
            if (!this.k || !this.keyframes) return this.pv;
            t = t ? t.toLowerCase() : "";
            var r,
                n,
                s,
                a,
                o,
                l = this.comp.renderedFrame,
                h = this.keyframes,
                p = h[h.length - 1].t;
            if (l <= p) return this.pv;
            if (
                (i ? (n = p - (r = e ? Math.abs(p - this.elem.comp.globalData.frameRate * e) : Math.max(0, p - this.elem.data.ip))) : ((!e || e > h.length - 1) && (e = h.length - 1), (r = p - (n = h[h.length - 1 - e].t))),
                "pingpong" === t)
            ) {
                if (Math.floor((l - n) / r) % 2 != 0) return this.getValueAtTime((r - ((l - n) % r) + n) / this.comp.globalData.frameRate, 0);
            } else {
                if ("offset" === t) {
                    var c = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                        f = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                        d = this.getValueAtTime((((l - n) % r) + n) / this.comp.globalData.frameRate, 0),
                        u = Math.floor((l - n) / r);
                    if (this.pv.length) {
                        for (a = (o = new Array(c.length)).length, s = 0; s < a; s += 1) o[s] = (f[s] - c[s]) * u + d[s];
                        return o;
                    }
                    return (f - c) * u + d;
                }
                if ("continue" === t) {
                    var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                        y = this.getValueAtTime((p - 0.001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (a = (o = new Array(m.length)).length, s = 0; s < a; s += 1) o[s] = m[s] + ((m[s] - y[s]) * ((l - p) / this.comp.globalData.frameRate)) / 5e-4;
                        return o;
                    }
                    return m + ((l - p) / 0.001) * (m - y);
                }
            }
            return this.getValueAtTime((((l - n) % r) + n) / this.comp.globalData.frameRate, 0);
        }

        function o(t, e, i) {
            if (!this.k) return this.pv;
            t = t ? t.toLowerCase() : "";
            var r,
                n,
                s,
                a,
                o,
                l = this.comp.renderedFrame,
                h = this.keyframes,
                p = h[0].t;
            if (p <= l) return this.pv;
            if ((i ? (n = p + (r = e ? Math.abs(this.elem.comp.globalData.frameRate * e) : Math.max(0, this.elem.data.op - p))) : (r = (n = h[(e = !e || e > h.length - 1 ? h.length - 1 : e)].t) - p), "pingpong" === t)) {
                if (Math.floor((p - l) / r) % 2 == 0) return this.getValueAtTime((((p - l) % r) + p) / this.comp.globalData.frameRate, 0);
            } else {
                if ("offset" === t) {
                    var c = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                        f = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                        d = this.getValueAtTime((r - ((p - l) % r) + p) / this.comp.globalData.frameRate, 0),
                        u = Math.floor((p - l) / r) + 1;
                    if (this.pv.length) {
                        for (a = (o = new Array(c.length)).length, s = 0; s < a; s += 1) o[s] = d[s] - (f[s] - c[s]) * u;
                        return o;
                    }
                    return d - (f - c) * u;
                }
                if ("continue" === t) {
                    var m = this.getValueAtTime(p / this.comp.globalData.frameRate, 0),
                        y = this.getValueAtTime((p + 0.001) / this.comp.globalData.frameRate, 0);
                    if (this.pv.length) {
                        for (a = (o = new Array(m.length)).length, s = 0; s < a; s += 1) o[s] = m[s] + ((m[s] - y[s]) * (p - l)) / 0.001;
                        return o;
                    }
                    return m + ((m - y) * (p - l)) / 0.001;
                }
            }
            return this.getValueAtTime((r - (((p - l) % r) + p)) / this.comp.globalData.frameRate, 0);
        }

        function l(t, e) {
            if (!this.k) return this.pv;
            if (((t = 0.5 * (t || 0.4)), (e = Math.floor(e || 5)) <= 1)) return this.pv;
            for (var i, r = this.comp.renderedFrame / this.comp.globalData.frameRate, n = r - t, s = 1 < e ? (r + t - n) / (e - 1) : 1, a = 0, o = 0, l = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; a < e;) {
                if (((i = this.getValueAtTime(n + a * s)), this.pv.length)) for (o = 0; o < this.pv.length; o += 1) l[o] += i[o];
                else l += i;
                a += 1;
            }
            if (this.pv.length) for (o = 0; o < this.pv.length; o += 1) l[o] /= e;
            else l /= e;
            return l;
        }

        var r = TransformPropertyFactory.getTransformProperty;
        TransformPropertyFactory.getTransformProperty = function (t, e, i) {
            i = r(t, e, i);
            return (
                i.dynamicProperties.length
                    ? (i.getValueAtTime = function (t) {
                        this._transformCachingAtTime || (this._transformCachingAtTime = {v: new Matrix()});
                        var e,
                            i,
                            r,
                            n,
                            s,
                            a,
                            o = this._transformCachingAtTime.v;
                        return (
                            o.cloneFromProps(this.pre.props),
                            this.appliedTransformations < 1 && ((e = this.a.getValueAtTime(t)), o.translate(-e[0] * this.a.mult, -e[1] * this.a.mult, e[2] * this.a.mult)),
                            this.appliedTransformations < 2 && ((i = this.s.getValueAtTime(t)), o.scale(i[0] * this.s.mult, i[1] * this.s.mult, i[2] * this.s.mult)),
                            this.sk && this.appliedTransformations < 3 && ((e = this.sk.getValueAtTime(t)), (i = this.sa.getValueAtTime(t)), o.skewFromAxis(-e * this.sk.mult, i * this.sa.mult)),
                                this.r && this.appliedTransformations < 4
                                    ? ((r = this.r.getValueAtTime(t)), o.rotate(-r * this.r.mult))
                                    : !this.r &&
                                    this.appliedTransformations < 4 &&
                                    ((r = this.rz.getValueAtTime(t)),
                                        (n = this.ry.getValueAtTime(t)),
                                        (s = this.rx.getValueAtTime(t)),
                                        (a = this.or.getValueAtTime(t)),
                                        o
                                            .rotateZ(-r * this.rz.mult)
                                            .rotateY(n * this.ry.mult)
                                            .rotateX(s * this.rx.mult)
                                            .rotateZ(-a[2] * this.or.mult)
                                            .rotateY(a[1] * this.or.mult)
                                            .rotateX(a[0] * this.or.mult)),
                                this.data.p && this.data.p.s
                                    ? ((n = this.px.getValueAtTime(t)),
                                        (s = this.py.getValueAtTime(t)),
                                        this.data.p.z ? ((a = this.pz.getValueAtTime(t)), o.translate(n * this.px.mult, s * this.py.mult, -a * this.pz.mult)) : o.translate(n * this.px.mult, s * this.py.mult, 0))
                                    : ((t = this.p.getValueAtTime(t)), o.translate(t[0] * this.p.mult, t[1] * this.p.mult, -t[2] * this.p.mult)),
                                o
                        );
                    }.bind(i))
                    : (i.getValueAtTime = function () {
                        return this.v.clone(new Matrix());
                    }.bind(i)),
                    (i.setGroupProperty = expressionHelpers.setGroupProperty),
                    i
            );
        };
        var h = PropertyFactory.getProp;
        PropertyFactory.getProp = function (t, e, i, r, n) {
            var s = h(t, e, i, r, n);
            s.kf ? (s.getValueAtTime = expressionHelpers.getValueAtTime.bind(s)) : (s.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(s)),
                (s.setGroupProperty = expressionHelpers.setGroupProperty),
                (s.loopOut = a),
                (s.loopIn = o),
                (s.smooth = l),
                (s.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(s)),
                (s.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(s)),
                (s.numKeys = 1 === e.a ? e.k.length : 0),
                (s.propertyIndex = e.ix);
            r = 0;
            return (
                0 !== i && (r = createTypedArray("float32", (1 === e.a ? e.k[0].s : e.k).length)),
                    (s._cachingAtTime = {lastFrame: initialDefaultFrame, lastIndex: 0, value: r}),
                    expressionHelpers.searchExpressions(t, e, s),
                s.k && n.addDynamicProperty(s),
                    s
            );
        };
        var t = ShapePropertyFactory.getConstructorFunction(),
            e = ShapePropertyFactory.getKeyframedConstructorFunction();

        function i() {
        }

        (i.prototype = {
            vertices: function (t, e) {
                this.k && this.getValue();
                for (var i = this.v, r = (i = void 0 !== e ? this.getValueAtTime(e, 0) : i)._length, n = i[t], s = i.v, a = createSizedArray(r), o = 0; o < r; o += 1)
                    a[o] = "i" === t || "o" === t ? [n[o][0] - s[o][0], n[o][1] - s[o][1]] : [n[o][0], n[o][1]];
                return a;
            },
            points: function (t) {
                return this.vertices("v", t);
            },
            inTangents: function (t) {
                return this.vertices("i", t);
            },
            outTangents: function (t) {
                return this.vertices("o", t);
            },
            isClosed: function () {
                return this.v.c;
            },
            pointOnPath: function (t, e) {
                var i = this.v;
                void 0 !== e && (i = this.getValueAtTime(e, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(i));
                for (var e = this._segmentsLength, r = e.lengths, n = e.totalLength * t, s = 0, a = r.length, o = 0; s < a;) {
                    if (o + r[s].addedLength > n) {
                        var l = i.c && s === a - 1 ? 0 : s + 1,
                            h = (n - o) / r[s].addedLength,
                            p = bez.getPointInSegment(i.v[s], i.v[l], i.o[s], i.i[l], h, r[s]);
                        break;
                    }
                    (o += r[s].addedLength), (s += 1);
                }
                return (p = p || (i.c ? [i.v[0][0], i.v[0][1]] : [i.v[i._length - 1][0], i.v[i._length - 1][1]]));
            },
            vectorOnPath: function (t, e, i) {
                1 == t ? (t = this.v.c) : 0 == t && (t = 0.999);
                var r = this.pointOnPath(t, e),
                    t = this.pointOnPath(t + 0.001, e),
                    e = t[0] - r[0],
                    t = t[1] - r[1],
                    r = Math.sqrt(Math.pow(e, 2) + Math.pow(t, 2));
                return 0 === r ? [0, 0] : "tangent" === i ? [e / r, t / r] : [-t / r, e / r];
            },
            tangentOnPath: function (t, e) {
                return this.vectorOnPath(t, e, "tangent");
            },
            normalOnPath: function (t, e) {
                return this.vectorOnPath(t, e, "normal");
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime,
        }),
            extendPrototype([i], t),
            extendPrototype([i], e),
            (e.prototype.getValueAtTime = function (t) {
                return (
                    this._cachingAtTime || (this._cachingAtTime = {
                        shapeValue: shapePool.clone(this.pv),
                        lastIndex: 0,
                        lastTime: initialDefaultFrame
                    }),
                        (t *= this.elem.globalData.frameRate),
                    (t -= this.offsetTime) !== this._cachingAtTime.lastTime &&
                    ((this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < t ? this._caching.lastIndex : 0),
                        (this._cachingAtTime.lastTime = t),
                        this.interpolateShape(t, this._cachingAtTime.shapeValue, this._cachingAtTime)),
                        this._cachingAtTime.shapeValue
                );
            }),
            (e.prototype.initiateExpression = ExpressionManager.initiateExpression);
        var s = ShapePropertyFactory.getShapeProp;
        ShapePropertyFactory.getShapeProp = function (t, e, i, r, n) {
            n = s(t, e, i, r, n);
            return (n.propertyIndex = e.ix), (n.lock = !1), 3 === i ? expressionHelpers.searchExpressions(t, e.pt, n) : 4 === i && expressionHelpers.searchExpressions(t, e.ks, n), n.k && t.addDynamicProperty(n), n;
        };
    }

    function initialize$1() {
        addPropertyDecorator();
    }

    function addDecorator() {
        (TextProperty.prototype.getExpressionValue = function (t, e) {
            var i = this.calculateExpression(e);
            if (t.t === i) return t;
            e = {};
            return this.copyData(e, t), (e.t = i.toString()), (e.__complete = !1), e;
        }),
            (TextProperty.prototype.searchProperty = function () {
                var t = this.searchKeyframes(),
                    e = this.searchExpressions();
                return (this.kf = t || e), this.kf;
            }),
            (TextProperty.prototype.searchExpressions = function () {
                return this.data.d.x ? ((this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this)), this.addEffect(this.getExpressionValue.bind(this)), !0) : null;
            });
    }

    function initialize() {
        addDecorator();
    }

    function SVGComposableEffect() {
    }

    SVGComposableEffect.prototype = {
        createMergeNode: function (t, e) {
            var i,
                r,
                n = createNS("feMerge");
            for (n.setAttribute("result", t), r = 0; r < e.length; r += 1) (i = createNS("feMergeNode")).setAttribute("in", e[r]), n.appendChild(i), n.appendChild(i);
            return n;
        },
    };
    var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

    function SVGTintFilter(t, e, i, r, n) {
        this.filterManager = e;
        e = createNS("feColorMatrix");
        e.setAttribute("type", "matrix"),
            e.setAttribute("color-interpolation-filters", "linearRGB"),
            e.setAttribute("values", linearFilterValue + " 1 0"),
            (this.linearFilter = e).setAttribute("result", r + "_tint_1"),
            t.appendChild(e),
            (e = createNS("feColorMatrix")).setAttribute("type", "matrix"),
            e.setAttribute("color-interpolation-filters", "sRGB"),
            e.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
            e.setAttribute("result", r + "_tint_2"),
            t.appendChild(e),
            (this.matrixFilter = e);
        r = this.createMergeNode(r, [n, r + "_tint_1", r + "_tint_2"]);
        t.appendChild(r);
    }

    function SVGFillFilter(t, e, i, r) {
        this.filterManager = e;
        e = createNS("feColorMatrix");
        e.setAttribute("type", "matrix"),
            e.setAttribute("color-interpolation-filters", "sRGB"),
            e.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"),
            e.setAttribute("result", r),
            t.appendChild(e),
            (this.matrixFilter = e);
    }

    function SVGStrokeEffect(t, e, i) {
        (this.initialized = !1), (this.filterManager = e), (this.elem = i), (this.paths = []);
    }

    function SVGTritoneFilter(t, e, i, r) {
        this.filterManager = e;
        e = createNS("feColorMatrix");
        e.setAttribute("type", "matrix"),
            e.setAttribute("color-interpolation-filters", "linearRGB"),
            e.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"),
            t.appendChild(e);
        e = createNS("feComponentTransfer");
        e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("result", r), (this.matrixFilter = e);
        r = createNS("feFuncR");
        r.setAttribute("type", "table"), e.appendChild(r), (this.feFuncR = r);
        r = createNS("feFuncG");
        r.setAttribute("type", "table"), e.appendChild(r), (this.feFuncG = r);
        r = createNS("feFuncB");
        r.setAttribute("type", "table"), e.appendChild(r), (this.feFuncB = r), t.appendChild(e);
    }

    function SVGProLevelsFilter(t, e, i, r) {
        this.filterManager = e;
        var n = this.filterManager.effectElements,
            e = createNS("feComponentTransfer");
        (n[10].p.k || 0 !== n[10].p.v || n[11].p.k || 1 !== n[11].p.v || n[12].p.k || 1 !== n[12].p.v || n[13].p.k || 0 !== n[13].p.v || n[14].p.k || 1 !== n[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", e)),
        (n[17].p.k || 0 !== n[17].p.v || n[18].p.k || 1 !== n[18].p.v || n[19].p.k || 1 !== n[19].p.v || n[20].p.k || 0 !== n[20].p.v || n[21].p.k || 1 !== n[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", e)),
        (n[24].p.k || 0 !== n[24].p.v || n[25].p.k || 1 !== n[25].p.v || n[26].p.k || 1 !== n[26].p.v || n[27].p.k || 0 !== n[27].p.v || n[28].p.k || 1 !== n[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", e)),
        (n[31].p.k || 0 !== n[31].p.v || n[32].p.k || 1 !== n[32].p.v || n[33].p.k || 1 !== n[33].p.v || n[34].p.k || 0 !== n[34].p.v || n[35].p.k || 1 !== n[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", e)),
        (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (e.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(e)),
        (n[3].p.k || 0 !== n[3].p.v || n[4].p.k || 1 !== n[4].p.v || n[5].p.k || 1 !== n[5].p.v || n[6].p.k || 0 !== n[6].p.v || n[7].p.k || 1 !== n[7].p.v) &&
        ((e = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"),
            e.setAttribute("result", r),
            t.appendChild(e),
            (this.feFuncRComposed = this.createFeFunc("feFuncR", e)),
            (this.feFuncGComposed = this.createFeFunc("feFuncG", e)),
            (this.feFuncBComposed = this.createFeFunc("feFuncB", e)));
    }

    function SVGDropShadowEffect(t, e, i, r, n) {
        var s = e.container.globalData.renderConfig.filterSize,
            a = e.data.fs || s;
        t.setAttribute("x", a.x || s.x), t.setAttribute("y", a.y || s.y), t.setAttribute("width", a.width || s.width), t.setAttribute("height", a.height || s.height), (this.filterManager = e);
        e = createNS("feGaussianBlur");
        e.setAttribute("in", "SourceAlpha"), e.setAttribute("result", r + "_drop_shadow_1"), e.setAttribute("stdDeviation", "0"), (this.feGaussianBlur = e), t.appendChild(e);
        e = createNS("feOffset");
        e.setAttribute("dx", "25"), e.setAttribute("dy", "0"), e.setAttribute("in", r + "_drop_shadow_1"), e.setAttribute("result", r + "_drop_shadow_2"), (this.feOffset = e), t.appendChild(e);
        e = createNS("feFlood");
        e.setAttribute("flood-color", "#00ff00"), e.setAttribute("flood-opacity", "1"), e.setAttribute("result", r + "_drop_shadow_3"), (this.feFlood = e), t.appendChild(e);
        e = createNS("feComposite");
        e.setAttribute("in", r + "_drop_shadow_3"), e.setAttribute("in2", r + "_drop_shadow_2"), e.setAttribute("operator", "in"), e.setAttribute("result", r + "_drop_shadow_4"), t.appendChild(e);
        n = this.createMergeNode(r, [r + "_drop_shadow_4", n]);
        t.appendChild(n);
    }

    extendPrototype([SVGComposableEffect], SVGTintFilter),
        (SVGTintFilter.prototype.renderFrame = function (t) {
            var e, i;
            (t || this.filterManager._mdf) &&
            ((e = this.filterManager.effectElements[0].p.v),
                (i = this.filterManager.effectElements[1].p.v),
                (t = this.filterManager.effectElements[2].p.v / 100),
                this.linearFilter.setAttribute("values", linearFilterValue + " " + t + " 0"),
                this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0"));
        }),
        (SVGFillFilter.prototype.renderFrame = function (t) {
            var e;
            (t || this.filterManager._mdf) &&
            ((e = this.filterManager.effectElements[2].p.v),
                (t = this.filterManager.effectElements[6].p.v),
                this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + t + " 0"));
        }),
        (SVGStrokeEffect.prototype.initialize = function () {
            var t,
                e,
                i,
                r,
                n = this.elem.layerElement.children || this.elem.layerElement.childNodes;
            for (
                1 === this.filterManager.effectElements[1].p.v ? ((r = this.elem.maskManager.masksProperties.length), (i = 0)) : (r = 1 + (i = this.filterManager.effectElements[0].p.v - 1)),
                    (e = createNS("g")).setAttribute("fill", "none"),
                    e.setAttribute("stroke-linecap", "round"),
                    e.setAttribute("stroke-dashoffset", 1);
                i < r;
                i += 1
            )
                (t = createNS("path")), e.appendChild(t), this.paths.push({p: t, m: i});
            if (3 === this.filterManager.effectElements[10].p.v) {
                var s = createNS("mask"),
                    a = createElementID();
                s.setAttribute("id", a), s.setAttribute("mask-type", "alpha"), s.appendChild(e), this.elem.globalData.defs.appendChild(s);
                var o = createNS("g");
                for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + a + ")"); n[0];) o.appendChild(n[0]);
                this.elem.layerElement.appendChild(o), (this.masker = s), e.setAttribute("stroke", "#fff");
            } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
                if (2 === this.filterManager.effectElements[10].p.v) for (n = this.elem.layerElement.children || this.elem.layerElement.childNodes; n.length;) this.elem.layerElement.removeChild(n[0]);
                this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff");
            }
            (this.initialized = !0), (this.pathMasker = e);
        }),
        (SVGStrokeEffect.prototype.renderFrame = function (t) {
            this.initialized || this.initialize();
            for (var e, i, r = this.paths.length, n = 0; n < r; n += 1)
                if (
                    -1 !== this.paths[n].m &&
                    ((o = this.elem.maskManager.viewData[this.paths[n].m]),
                        (e = this.paths[n].p),
                    (t || this.filterManager._mdf || o.prop._mdf) && e.setAttribute("d", o.lastPath),
                    t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || o.prop._mdf)
                ) {
                    if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                        for (
                            var s = 0.01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                a = 0.01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                                o = e.getTotalLength(),
                                l = "0 0 0 " + o * s + " ",
                                a = o * (a - s),
                                s = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01,
                                h = Math.floor(a / s),
                                p = 0;
                            p < h;
                            p += 1
                        )
                            l += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01 + " ";
                        l += "0 " + 10 * o + " 0 0";
                    } else l = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01;
                    e.setAttribute("stroke-dasharray", l);
                }
            (t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v),
            (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v),
            (1 !== this.filterManager.effectElements[10].p.v && 2 !== this.filterManager.effectElements[10].p.v) ||
            (!t && !this.filterManager.effectElements[3].p._mdf) ||
            ((i = this.filterManager.effectElements[3].p.v), this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * i[0]) + "," + bmFloor(255 * i[1]) + "," + bmFloor(255 * i[2]) + ")"));
        }),
        (SVGTritoneFilter.prototype.renderFrame = function (t) {
            var e, i, r, n;
            (t || this.filterManager._mdf) &&
            ((n = this.filterManager.effectElements[0].p.v),
                (e = this.filterManager.effectElements[1].p.v),
                (r = (i = this.filterManager.effectElements[2].p.v)[0] + " " + e[0] + " " + n[0]),
                (t = i[1] + " " + e[1] + " " + n[1]),
                (n = i[2] + " " + e[2] + " " + n[2]),
                this.feFuncR.setAttribute("tableValues", r),
                this.feFuncG.setAttribute("tableValues", t),
                this.feFuncB.setAttribute("tableValues", n));
        }),
        (SVGProLevelsFilter.prototype.createFeFunc = function (t, e) {
            t = createNS(t);
            return t.setAttribute("type", "table"), e.appendChild(t), t;
        }),
        (SVGProLevelsFilter.prototype.getTableValue = function (t, e, i, r, n) {
            for (var s, a = 0, o = Math.min(t, e), l = Math.max(t, e), h = Array.call(null, {length: 256}), p = 0, c = n - r, f = e - t; a <= 256;)
                (s = (s = a / 256) <= o ? (f < 0 ? n : r) : l <= s ? (f < 0 ? r : n) : r + c * Math.pow((s - t) / f, 1 / i)), (h[p] = s), (p += 1), (a += 256 / 255);
            return h.join(" ");
        }),
        (SVGProLevelsFilter.prototype.renderFrame = function (t) {
            var e, i;
            (t || this.filterManager._mdf) &&
            ((i = this.filterManager.effectElements),
            this.feFuncRComposed &&
            (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) &&
            ((e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v)),
                this.feFuncRComposed.setAttribute("tableValues", e),
                this.feFuncGComposed.setAttribute("tableValues", e),
                this.feFuncBComposed.setAttribute("tableValues", e)),
            this.feFuncR &&
            (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) &&
            ((e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v)), this.feFuncR.setAttribute("tableValues", e)),
            this.feFuncG &&
            (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) &&
            ((e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v)), this.feFuncG.setAttribute("tableValues", e)),
            this.feFuncB &&
            (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) &&
            ((e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v)), this.feFuncB.setAttribute("tableValues", e)),
            this.feFuncA &&
            (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) &&
            ((e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v)), this.feFuncA.setAttribute("tableValues", e)));
        }),
        extendPrototype([SVGComposableEffect], SVGDropShadowEffect),
        (SVGDropShadowEffect.prototype.renderFrame = function (t) {
            var e, i;
            (t || this.filterManager._mdf) &&
            ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4),
            (t || this.filterManager.effectElements[0].p._mdf) &&
            ((i = this.filterManager.effectElements[0].p.v), this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * i[0]), Math.round(255 * i[1]), Math.round(255 * i[2])))),
            (t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255),
            (t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) &&
            ((e = this.filterManager.effectElements[3].p.v),
                (i = (this.filterManager.effectElements[2].p.v - 90) * degToRads),
                (t = e * Math.cos(i)),
                (i = e * Math.sin(i)),
                this.feOffset.setAttribute("dx", t),
                this.feOffset.setAttribute("dy", i)));
        });
    var _svgMatteSymbols = [];

    function SVGMatte3Effect(t, e, i) {
        (this.initialized = !1),
            (this.filterManager = e),
            (this.filterElem = t),
            ((this.elem = i).matteElement = createNS("g")),
            i.matteElement.appendChild(i.layerElement),
            i.matteElement.appendChild(i.transformedElement),
            (i.baseElement = i.matteElement);
    }

    function SVGGaussianBlurEffect(t, e, i, r) {
        t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), (this.filterManager = e);
        e = createNS("feGaussianBlur");
        e.setAttribute("result", r), t.appendChild(e), (this.feGaussianBlur = e);
    }

    function TransformEffect() {
    }

    function SVGTransformEffect(t, e) {
        this.init(e);
    }

    function CVTransformEffect(t) {
        this.init(t);
    }

    return (
        (SVGMatte3Effect.prototype.findSymbol = function (t) {
            for (var e = 0, i = _svgMatteSymbols.length; e < i;) {
                if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
                e += 1;
            }
            return null;
        }),
            (SVGMatte3Effect.prototype.replaceInParent = function (t, e) {
                var i = t.layerElement.parentNode;
                if (i) {
                    for (var r, n = i.children, s = 0, a = n.length; s < a && n[s] !== t.layerElement;) s += 1;
                    s <= a - 2 && (r = n[s + 1]);
                    var o = createNS("use");
                    o.setAttribute("href", "#" + e), r ? i.insertBefore(o, r) : i.appendChild(o);
                }
            }),
            (SVGMatte3Effect.prototype.setElementAsMask = function (t, e) {
                var i, r, n, s;
                this.findSymbol(e) ||
                ((i = createElementID()),
                    (r = createNS("mask")).setAttribute("id", e.layerId),
                    r.setAttribute("mask-type", "alpha"),
                    _svgMatteSymbols.push(e),
                    (n = t.globalData.defs).appendChild(r),
                    (s = createNS("symbol")).setAttribute("id", i),
                    this.replaceInParent(e, i),
                    s.appendChild(e.layerElement),
                    n.appendChild(s),
                    (s = createNS("use")).setAttribute("href", "#" + i),
                    r.appendChild(s),
                    (e.data.hd = !1),
                    e.show()),
                    t.setMatte(e.layerId);
            }),
            (SVGMatte3Effect.prototype.initialize = function () {
                for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, r = e.length; i < r;) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), (i += 1);
                this.initialized = !0;
            }),
            (SVGMatte3Effect.prototype.renderFrame = function () {
                this.initialized || this.initialize();
            }),
            (SVGGaussianBlurEffect.prototype.renderFrame = function (t) {
                var e, i;
                (t || this.filterManager._mdf) &&
                ((i = 0.3 * this.filterManager.effectElements[0].p.v),
                    (t = 3 == (e = this.filterManager.effectElements[1].p.v) ? 0 : i),
                    (i = 2 == e ? 0 : i),
                    this.feGaussianBlur.setAttribute("stdDeviation", t + " " + i),
                    (i = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate"),
                    this.feGaussianBlur.setAttribute("edgeMode", i));
            }),
            (TransformEffect.prototype.init = function (t) {
                (this.effectsManager = t), (this.type = effectTypes.TRANSFORM_EFFECT), (this.matrix = new Matrix()), (this.opacity = -1), (this._mdf = !1), (this._opMdf = !1);
            }),
            (TransformEffect.prototype.renderFrame = function (t) {
                var e, i, r, n, s, a, o;
                (this._opMdf = !1),
                    (this._mdf = !1),
                (t || this.effectsManager._mdf) &&
                ((i = (e = this.effectsManager.effectElements)[0].p.v),
                    (r = e[1].p.v),
                    (o = 1 === e[2].p.v),
                    (n = e[3].p.v),
                    (s = o ? n : e[4].p.v),
                    (a = e[5].p.v),
                    (t = e[6].p.v),
                    (o = e[7].p.v),
                    this.matrix.reset(),
                    this.matrix.translate(-i[0], -i[1], i[2]),
                    this.matrix.scale(0.01 * s, 0.01 * n, 1),
                    this.matrix.rotate(-o * degToRads),
                    this.matrix.skewFromAxis(-a * degToRads, (t + 90) * degToRads),
                    this.matrix.translate(r[0], r[1], 0),
                    (this._mdf = !0),
                this.opacity !== e[8].p.v && ((this.opacity = e[8].p.v), (this._opMdf = !0)));
            }),
            extendPrototype([TransformEffect], SVGTransformEffect),
            extendPrototype([TransformEffect], CVTransformEffect),
            registerRenderer("canvas", CanvasRenderer),
            registerRenderer("html", HybridRenderer),
            registerRenderer("svg", SVGRenderer),
            ShapeModifiers.registerModifier("tm", TrimModifier),
            ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier),
            ShapeModifiers.registerModifier("rp", RepeaterModifier),
            ShapeModifiers.registerModifier("rd", RoundCornersModifier),
            ShapeModifiers.registerModifier("zz", ZigZagModifier),
            ShapeModifiers.registerModifier("op", OffsetPathModifier),
            setExpressionsPlugin(Expressions),
            setExpressionInterfaces(getInterface),
            initialize$1(),
            initialize(),
            registerEffect$1(20, SVGTintFilter, !0),
            registerEffect$1(21, SVGFillFilter, !0),
            registerEffect$1(22, SVGStrokeEffect, !1),
            registerEffect$1(23, SVGTritoneFilter, !0),
            registerEffect$1(24, SVGProLevelsFilter, !0),
            registerEffect$1(25, SVGDropShadowEffect, !0),
            registerEffect$1(28, SVGMatte3Effect, !1),
            registerEffect$1(29, SVGGaussianBlurEffect, !0),
            registerEffect$1(35, SVGTransformEffect, !1),
            registerEffect(35, CVTransformEffect),
            lottie
    );
}),
    (CoinColors = {
        aave: "#c673d4",
        aaveeth: "#c673d4",
        ada: "#ffffff",
        adabnb: "#ffffff",
        adabsc: "#ffffff",
        atom: "#e6e6e6",
        avax: "#ca443c",
        avaxc: "#ca443c",
        bat: "#ff0649",
        batbsc: "#ff0649",
        bch: "#85c459",
        bnb: "#ffcc4f",
        bsc: "#ffcc4f",
        bsv: "#eab300",
        btc: "#f7931a",
        btcbnb: "#f7931a",
        btcbsc: "#f7931a",
        btcln: "#9157ff",
        btg: "#ffd827",
        btm: "#ffffff",
        btt: "#ffffff",
        busd: "#ffcc4f",
        busdbsc: "#ffcc4f",
        busdeth: "#ffcc4f",
        busdtrc: "#ffcc4f",
        cake: "#43d2da",
        daibsc: "#f4b731",
        daieth: "#f4b731",
        daimatic: "#f4b731",
        dash: "#008ce3",
        doge: "#ba9f33",
        dot: "#e6007a",
        drgn: "#28a2ea",
        eos: "#8997d8",
        etc: "#8cbd9b",
        eth: "#ffffff",
        etharbitrum: "#ffffff",
        ethbnb: "#ffffff",
        ethbsc: "#ffffff",
        eurs: "#15bcff",
        ftm: "#3f7fff",
        gnt: "#06a8c6",
        kcs: "#41e6af",
        link: "#3f6ff3",
        lsk: "#2979d8",
        ltc: "#497ed1",
        mana: "#ff6947",
        manaeth: "#ff6947",
        matic: "#8247e5",
        maticeth: "#8247e5",
        mkr: "#10bc99",
        neo: "#92d71b",
        omg: "#235eff",
        pax: "#c7e432",
        paxgeth: "#ede70a",
        qtum: "#41abe0",
        shib: "#f4a816",
        shibbsc: "#f4a816",
        sol: "#a364fc",
        ton: "#0188cc",
        trx: "#ff2e4b",
        tube: "#86af49",
        tusd: "#5dc9bc",
        twt: "#478dd7",
        twtbsc: "#478dd7",
        usdc: "#2775ca",
        usdcbsc: "#2775ca",
        usdceth: "#2775ca",
        usdcmatic: "#2775ca",
        usdcsol: "#2775ca",
        usdctrc: "#2775ca",
        usdp: "#c7e432",
        usdt: "#53ae94",
        usdtbnb: "#53ae94",
        usdtbsc: "#53ae94",
        usdterc: "#53ae94",
        usdtmatic: "#53ae94",
        usdtsol: "#53ae94",
        usdttrc: "#53ae94",
        ustbsc: "#5d9cff",
        vet: "#29acf6",
        waves: "#076dd4",
        wbnbbsc: "#ffcc4f",
        wetheth: "#ffffff",
        xem: "#00c4b3",
        xlm: "#ffffff",
        xmr: "#e06b1a",
        xrp: "#0c89ca",
        xtz: "#4284ff",
        zec: "#ffbf20",
        zrx: "#ffffff",
    }),
    (WhiteCoins = ["ada", "adabnb", "adabsc", "atom", "btt", "eth", "etharbitrum", "ethbnb", "ethbsc", "wetheth", "xlm", "zrx"]),
    (APP = {
        apiAbortController: new AbortController(),
        abortApi: function () {
            APP.apiAbortController.abort();
        },
        api: function (t, e, i, r, n) {
            e = e || {};
            var s = UI.func.toFormData(e);
            s.append('_token', document.querySelector('meta[name="csrf-token"]')?.content);
            (n && n instanceof AbortController) || (n = i && i instanceof AbortController ? i : APP.apiAbortController);
            let a = !0,
                o = !1,
                l = !1,
                h = new Promise(function (e, i) {

                    fetch("/ajax/" + t, {method: "POST", body: s, signal: n.signal})
                        .then(function (t) {
                            return 200 !== t.status
                                ? ((o = !0), (a = !1), void i({code: 1, msg: "API Error", data: null}))
                                : void t.json().then(function (t) {
                                    0 == t.code ? ((l = !0), (a = !1), e(t)) : ((o = !0), (a = !1), i(t));
                                });
                        })
                        .catch(function (t) {
                            (o = !0), (a = !1), t && "AbortError" == t.name ? i({
                                code: 2,
                                msg: "Abort query",
                                data: null
                            }) : i({code: 1, msg: "API Error", data: null});
                        });
                });
            return (
                i && "function" == typeof i && h.then(i),
                r && "function" == typeof r && h.catch(r),
                    (h.isFulfilled = function () {
                        return l;
                    }),
                    (h.isPending = function () {
                        return a;
                    }),
                    (h.isRejected = function () {
                        return o;
                    }),
                    h
            );
        },
        WSClient: function (t) {
            var e = this;
            (e.tid = 0), (e.tvs = 0), (e.url = t), (e.target = document.createElement("div")), (e.lastTime = new Date()), (e.isInit = !1), (e.isOpen = !1), (e.isProblem = !1), (e.attempts = 10), (e.ws = void 0);
        },
        signOut: function () {
            APP.api("userSignOut")
                .then(function () {
                    window.location.reload();
                })
                .catch(function () {
                });
        },
        setCookie: function (t, e, i) {
            let r = (i = i || {}).expires;
            if ("number" == typeof r && r) {
                let t = new Date();
                t.setTime(t.getTime() + 1e3 * r), (r = i.expires = t);
            }
            r && r.toUTCString && (i.expires = r.toUTCString());
            let n = t + "=" + (e = encodeURIComponent(e));
            for (var s in i) {
                n += "; " + s;
                s = i[s];
                !0 !== s && (n += "=" + s);
            }
            document.cookie = n;
        },
        getCookie: function (t) {
            t = document.cookie.match(new RegExp("(?:^|; )" + t.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") + "=([^;]*)"));
            return t ? decodeURIComponent(t[1]) : void 0;
        },
        getCoinColor: function (t, e) {
            return (t = t.toLowerCase()), CoinColors[t] ? (!1 === e ? CoinColors[t].substr(1) : CoinColors[t]) : null;
        },
        getActiveCoin: function (t, e) {
            return (t = t.toLowerCase()), (e = e.toLowerCase()), -1 < WhiteCoins.indexOf(e) || !CoinColors[e] ? (WhiteCoins.indexOf(t) < 0 && CoinColors[t] ? t : "btc") : e;
        },
        getActiveColor: function (t, e, i) {
            e = this.getActiveCoin(t, e);
            return this.getCoinColor(e, i);
        },
        highlightingColor: function (t, e) {
            (e = this.getActiveColor(t, e)), (e = "a, .hl,.hoverhl:hover,.linkhl a:hover {color:" + e + ";} .borderhl{border-color:" + e + ";} .hlfill{fill:" + e + ";} .bghl,.buttonhl button:hover{background-color:" + e + ";}");
            document.getElementById("highlighting_style").innerHTML = e;
        },
        formatTime: function (t) {
            var e = ~~(t / 3600);
            return (e ? UI.func.zerosNum(e) + ":" : "") + UI.func.zerosNum(~~(t / 60) - 60 * e) + ":" + UI.func.zerosNum(t % 60);
        },
        timeToText: function (t) {
            var e = ~~(t / 60) - 60 * ~~(t / 3600);
            return e ? e + " min" : (t % 60) + " sec";
        },
        GeeCaptchaAdded: !1,
        GeeCaptchaLoaded: !1,
        GeeCaptcha: function (t, e) {
            function i() {
                return this;
            }

            let r = UI.func,
                n = void 0;
            var s = e && e.lang ? e.lang : document.documentElement.getAttribute("lang");
            let a = function () {
                },
                o = function () {
                },
                l = function () {
                };
            if (APP.GeeCaptchaAdded)
                APP.GeeCaptchaLoaded
                    ? h()
                    : r.bind(document, "GeeCaptchaLoaded", function () {
                        h();
                    });
            else {
                let t = document.createElement("script");
                (t.type = "text/javascript"),
                    (t.id = "geetest_script"),
                    (t.src = "/assets/js/libs/gt.js"),
                    document.head.appendChild(t),
                    (APP.GeeCaptchaAdded = !0),
                    (t.onload = function () {
                        document.dispatchEvent(new Event("GeeCaptchaLoaded")), (APP.GeeCaptchaLoaded = !0), h();
                    });
            }

            function h() {
                APP.api("userCaptchaInit")
                    .then(function (t) {
                        (t = t.data), (t = {
                            product: "bind",
                            lang: s,
                            gt: t.gt,
                            challenge: t.challenge,
                            new_captcha: t.new_captcha,
                            offline: !t.success
                        });
                        initGeetest(t, function (t) {
                            (n = t),
                                l.call(n),
                                n.onSuccess(function () {
                                    a.call(n);
                                }),
                                n.onError(function () {
                                    o.call(n);
                                }),
                                n.onClose(function () {
                                    onCloseBind.call(n);
                                });
                        });
                    })
                    .catch(function (t) {
                    });
            }

            return (
                (i.validate = function () {
                    return n.getValidate();
                }),
                    (i.verify = function (t) {
                        return t && "function" == typeof t && (a = t), n.verify();
                    }),
                    (i.reset = function () {
                        n.reset();
                    }),
                    (i.onInit = function (t) {
                        return (l = t), i;
                    }),
                    (i.onSuccess = function (t) {
                        return (a = t), i;
                    }),
                    (i.onError = function (t) {
                        return (o = t), i;
                    }),
                    (i.onClose = function (t) {
                        return (onCloseBind = t), i;
                    }),
                    i
            );
        },
        authInit: function (t, e, i, r) {
            let o = UI.func,
                n = "string" == typeof t ? document.getElementById(t) : t;
            n.querySelectorAll("#auth_nav > button");
            i = !!i;
            let l = {
                    isInit: !1,
                    captcha: void 0,
                    currLayout: void 0,
                    navs: n.querySelectorAll("#auth_nav > button"),
                    changeLayout: function (t) {
                        var e = o.id("layout_" + t);
                        "forgot" != t && (o.remClass(this.navs, "active"), o.addClass("nav_" + t, "active")),
                            o.remClass(n.querySelectorAll(".auth-layout"), "active"),
                            o.addClass(e, "active"),
                            (o.id("auth_layouts").style.height = e.offsetHeight + "px"),
                            (this.currLayout = t);
                    },
                    resizeLayout: function (t) {
                        t = o.id("layout_" + t);
                        o.id("auth_layouts").style.height = t.offsetHeight + "px";
                    },
                    validate: function (t, e, i, r) {
                        let n = !1,
                            s;
                        var a = "string" == typeof t ? this.form[t] : t;
                        switch (((i = i || !1), (r = r || !1), e)) {
                            case "email":
                                (s = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/),
                                    (n = s.test(a.email.value)),
                                r || o.togClass(a.email, "error", !(n || ("" == a.email.value && !i))),
                                    (l.errors[t][e] = !n);
                                break;
                            case "pswd":
                                (s = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d).*$/),
                                    (n = s.test(a.pswd.value)),
                                r || o.togClass(a.pswd, "error", !(n || ("" == a.pswd.value && !i))),
                                    (l.errors[t][e] = !n),
                                a.repswd && ((dis = a.pswd.value == a.repswd.value), r || o.togClass(a.repswd, "error", !(dis || ("" == a.repswd.value && !i))), (l.errors[t].repswd = !dis));
                                break;
                            case "repswd":
                                (n = a.pswd.value == a.repswd.value), r || o.togClass(a.repswd, "error", !(n || ("" == a.repswd.value && !i))), (l.errors[t][e] = !n);
                        }
                        return l.isInit && this.resizeLayout(t), n;
                    },
                    submit: function () {
                        a[this.currLayout].btn.click();
                    },
                },
                s = {
                    email: function (t) {
                        return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(t);
                    },
                    pswd: function (t) {
                        return /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d).*$/.test(t);
                    },
                    repswd: function (t, e) {
                        return t === e;
                    },
                },
                a = {
                    signin: {
                        form: document.getElementById("layout_signin"),
                        btn: UI.button("auth_signin", {changeAtOnce: !1}),
                        fields: {email: void 0, pswd: void 0},
                        check: function (t) {
                            if ("email" == t) {
                                let t = this.fields.email;
                                if (!s.email(t.val())) return t.error(t.obj.getAttribute("data-error-invalid")), !1;
                            }
                            return !0;
                        },
                        validate: function () {
                            for (var e in (o.remClass([this.fields.email, this.fields.pswd], "error"), this.fields)) {
                                let t = this.fields[e];
                                if (!t.val()) return t.error(t.obj.getAttribute("data-error-empty")), !1;
                            }
                            return !0;
                        },
                    },
                    signup: {
                        form: document.getElementById("layout_signup"),
                        btn: UI.button("auth_signup", {changeAtOnce: !1}),
                        fields: {email: void 0, pswd: void 0, repswd: void 0},
                        check: function (t, e) {
                            let i = this.fields[t];
                            return !e && "pswd" == t && this.fields.pswd.val() && this.fields.repswd.val()
                                ? (o.remClass(this.fields.repswd.obj, "error"), this.check("repswd"))
                                : !!s[t](i.val(), this.fields.pswd.val()) || (i.error(i.obj.getAttribute("data-error-invalid")), !1);
                        },
                        validate: function () {
                            for (var e in (o.remClass([this.fields.email, this.fields.pswd, this.fields.repswd], "error"), this.fields)) {
                                let t = this.fields[e];
                                if (!t.val()) return t.error(t.obj.getAttribute("data-error-empty")), !1;
                                if (!this.check(e, !0)) return !1;
                            }
                            return !0;
                        },
                    },
                    forgot: {
                        form: document.getElementById("layout_forgot"),
                        btn: UI.button("auth_reset_btn", {changeAtOnce: !1}),
                        fields: {email: void 0},
                        check: function (t) {
                            let e = this.fields[t];
                            return !!s[t](e.val()) || (e.error(e.obj.getAttribute("data-error-invalid")), !1);
                        },
                        validate: function () {
                            for (var e in (o.remClass([this.fields.email, this.fields.pswd, this.fields.repswd], "error"), this.fields)) {
                                let t = this.fields[e];
                                if (!t.val()) return t.error(t.obj.getAttribute("data-error-empty")), !1;
                                if (!this.check(e, !0)) return !1;
                            }
                            return !0;
                        },
                    },
                };
            APP.GeeCaptchaLoaded || (a.signin.btn.loading(a.signin.btn.attr("data-captcha-loading")), a.signup.btn.loading(a.signup.btn.attr("data-captcha-loading")), a.forgot.btn.loading(a.forgot.btn.attr("data-captcha-loading"))),
                (l.captcha = APP.GeeCaptcha()),
                l.captcha.onInit(function () {
                    a.signin.btn.default(), a.signup.btn.default(), a.forgot.btn.default();
                }),
                l.captcha.onClose(function () {
                    a.signin.btn.default(), a.signup.btn.default(), a.forgot.btn.default();
                }),
                (a.signin.fields.email = UI.textbox(a.signin.form.email, {
                    addLabel: a.signin.form.email.getAttribute("data-label"),
                    btnclear: !0,
                    addError: !0
                })
                    .input(function (t) {
                        o.remClass(t, "error");
                    })
                    .blur(function (t) {
                        t.value && a.signin.check("email");
                    })),
                (a.signin.fields.pswd = UI.textbox(a.signin.form.pswd, {
                    addLabel: a.signin.form.pswd.getAttribute("data-label"),
                    btnPswd: !0,
                    addError: !0
                }).input(function (t) {
                    o.remClass(t, "error");
                })),
                a.signin.btn.click(function (e, t) {
                    t.preventDefault(),
                        o.remClass("signin_captcha_error", "active"),
                    a.signin.validate() &&
                    (e.loading(),
                        l.captcha.verify(function () {
                            let t = this.getValidate() || {};
                            (t.email = a.signin.form.email.value),
                                (t.pswd = a.signin.form.pswd.value),
                                o.remClass("auth_error", "active"),
                                o.remClass("signin_captcha_error", "active"),
                                APP.api("userSignIn", t)
                                    .then(function () {
                                        e.success(), r ? (window.location.href = r) : window.location.reload();
                                    })
                                    .catch(function (t) {
                                        e.error(), l.captcha.reset(), 606 == t.code ? o.addClass("signin_captcha_error", "active") : o.addClass("auth_error", "active"), l.resizeLayout("signin");
                                    });
                        }));
                }),
                (a.signup.fields.email = UI.textbox(a.signup.form.email, {
                    addLabel: a.signup.form.email.getAttribute("data-label"),
                    btnclear: !0,
                    addError: !0
                })
                    .input(function (t) {
                        o.remClass(t, "error");
                    })
                    .blur(function (t) {
                        t.value && a.signup.check("email");
                    })),
                (a.signup.fields.pswd = UI.textbox(a.signup.form.pswd, {
                    addLabel: a.signup.form.pswd.getAttribute("data-label"),
                    btnPswd: !0,
                    addError: !0
                })
                    .input(function (t) {
                        o.remClass(t, "error");
                    })
                    .change(function (t) {
                        a.signup.fields.repswd.val() && (o.remClass(a.signup.fields.repswd.obj, "error"), a.signup.check("repswd"));
                    })
                    .blur(function (t) {
                        t.value && a.signup.check("pswd");
                    })),
                (a.signup.fields.repswd = UI.textbox(a.signup.form.repswd, {
                    addLabel: a.signup.form.repswd.getAttribute("data-label"),
                    btnPswd: !0,
                    addError: !0
                })
                    .input(function (t) {
                        o.remClass(t, "error");
                    })
                    .blur(function (t) {
                        t.value && a.signup.check("repswd");
                    })),
                a.signup.btn.click(function (e, t) {
                    t.preventDefault(),
                        o.remClass("signup_captcha_error", "active"),
                    a.signup.validate() &&
                    (e.loading(),
                        l.captcha.verify(function () {
                            let t = this.getValidate() || {};
                            (t.email = a.signup.form.email.value),
                                (t.pswd = a.signup.form.pswd.value),
                                o.remClass("auth_error", "active"),
                                o.remClass("signup_captcha_error", "active"),
                                APP.api("userSignUp", t)
                                    .then(function () {
                                        e.success(), r ? (window.location.href = r) : window.location.reload();
                                    })
                                    .catch(function (t) {
                                        e.error(),
                                            l.captcha.reset(),
                                            606 == t.code
                                                ? o.addClass("signup_captcha_error", "active")
                                                : 701 == t.code && (o.addClass("auth_signup_error", "active"), (o.id("auth_layouts").style.height = o.id("layout_signup").offsetHeight + "px")),
                                            l.resizeLayout("signup");
                                    });
                        }));
                }),
                (a.forgot.fields.email = UI.textbox(a.forgot.form.email, {
                    addLabel: a.forgot.form.email.getAttribute("data-label"),
                    btnclear: !0,
                    addError: !0
                })
                    .input(function (t) {
                        o.remClass(t, "error");
                    })
                    .blur(function (t) {
                        t.value && a.forgot.check("email");
                    })),
                a.forgot.btn.click(function (e, t) {
                    t.preventDefault(),
                        o.remClass("auth_reset_captcha_error", "active"),
                        o.remClass("auth_reset_error", "active"),
                    a.forgot.validate() &&
                    (e.loading(),
                        l.captcha.verify(function () {
                            let t = this.getValidate() || {};
                            (t.email = a.forgot.form.email.value),
                                o.remClass("auth_error", "active"),
                                o.remClass("auth_reset_captcha_error", "active"),
                                APP.api("userRecovery", t)
                                    .then(function () {
                                        e.success();
                                        var t = o.id("auth_reset_success");
                                        o.addClass(a.forgot.form.email.parentNode, "none"),
                                            o.addClass(e.obj.parentNode, "none"),
                                            o.addClass(e.obj.closest(".auth-layout").querySelector(".auth-nav-btn").parentNode, "none"),
                                            o.addClass(t, "active");
                                    })
                                    .catch(function (t) {
                                        console.log(t), e.error(), l.captcha.reset(), 606 == t.code ? o.addClass("auth_reset_captcha_error", "active") : o.addClass("auth_reset_error", "active"), l.resizeLayout("forgot");
                                    });
                        }));
                }),
                o.bind(document.querySelectorAll(".auth-nav-btn"), "click", function () {
                    l.changeLayout(this.getAttribute("data-layout"));
                }),
            i ||
            (l.changeLayout(e),
                setTimeout(function () {
                    o.addClass("auth_layouts", "init");
                }, 10)),
                setTimeout(function () {
                    l.isInit = !0;
                }, 500);
            e = o.id("auth_image_robot_anim");
            e && lottie && lottie.loadAnimation({
                container: e,
                renderer: "canvas",
                loop: !0,
                autoplay: !0,
                path: "/assets/images/background/signin_robot.json"
            }), (window.Auth = l);
        },
        popupAuth: function (t) {
            let e = UI.func;
            if (((t = t || "signin"), e.id("layout_" + t)))
                return (
                    e
                        .id("layout_" + t)
                        .closest(".wrapper")
                        .scrollIntoView(),
                        window.Auth.changeLayout(t),
                        !1
                );
            UI.popup({
                html: document.getElementById("auth").innerHTML,
                afterRender: function () {
                    APP.authInit(this.container, t);
                },
                onSubmit: function (t, e) {
                    return window.Auth.submit(), !1;
                },
            }).show();
        },
    }),
    (APP.WSClient.prototype.init = function (e) {
        var i = this;
        clearTimeout(i.tid);
        try {
            (i.ws = new WebSocket(i.url)),
                (i.ws.onopen = function (t) {
                    (i.isOpen = !0),
                        (i.attempts = 10),
                        (i.lastTime = new Date()),
                        clearInterval(i.tid),
                        (i.tid = setInterval(function () {
                            i.send("ping");
                        }, 3e4)),
                    "function" == typeof e && e.call(i);
                }),
                (i.ws.onmessage = function (t) {
                    t = JSON.parse(t.data);
                    (i.lastTime = new Date()), i.target.dispatchEvent(new CustomEvent("msg", {detail: t}));
                }),
                (i.ws.onerror = function (t) {
                    i.target.dispatchEvent(new CustomEvent("error", {msg: "Internal error", event: t}));
                }),
                (i.ws.onclose = function (t) {
                    (i.isOpen = !1), i.reconnect(e, 5e3);
                });
        } catch (t) {
            i.target.dispatchEvent(new CustomEvent("error", {msg: t, event: null})), i.reconnect(e, 15e3);
        }
        i.isInit ||
        (i.tvs = setInterval(function () {
            var t = new Date().getTime() - i.lastTime.getTime();
            i.isProblem = !i.isOpen && 6e4 < t;
        }, 1e3)),
            (i.isInit = !0);
    }),
    (APP.WSClient.prototype.reconnect = function (t, e) {
        var i = this;
        i.isOpen && i.ws.close(),
            clearInterval(i.tid),
            e
                ? setTimeout(function () {
                    console.log("WebSocket reconnecting…"), i.init(t);
                }, e)
                : i.init(t);
    }),
    (APP.WSClient.prototype.send = function (t, e) {
        var i = {method: t, params: e, id: Date.now()};
        try {
            return this.ws.send(JSON.stringify(i)), !0;
        } catch (t) {
            return !1;
        }
    }),
    (APP.WSClient.prototype.subscribe = function (t) {
        return this.send("subscribe", t);
    }),
    (APP.WSClient.prototype.message = function (e, i) {
        var r = this;
        (e = "string" == typeof e ? [e] : e),
            r.target.addEventListener("msg", function (t) {
                t = t.detail;
                0 <= e.indexOf(t.event) && i.call(r, t.result);
            });
    }),
    (APP.WSClient.prototype.error = function (e) {
        var i = this;
        i.target.addEventListener("error", function (t) {
            e.call(i, t);
        });
    }),
    document.addEventListener("DOMContentLoaded", function () {
        let e = UI.func;
        var t = window.location.hostname.split("."),
            t = t[t.length - 2] + "." + t[t.length - 1];
        var i = "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch) ? "touchstart" : "mousedown",
            r = document.getElementById("left_menu_wrap");
        s(),
            (window.onscroll = function () {
                s();
            }),
            e.bind("left_menu_btn", "click", function () {
                e.hasClass(r, "active")
                    ? (e.remClass(r, "active"), "touchstart" == i && (document.body.style.overflow = "auto"))
                    : (e.addClass(r, "active"), e.remClass(r, "right-active"), "touchstart" == i && (document.body.style.overflow = "hidden"));
            }),
            e.bind(document.querySelectorAll(".shadow-body, .loc .ui-select, .menu-focus-btn"), i, function (t) {
                e.remClass(r, "active"), "touchstart" == i && (document.body.style.overflow = "auto");
            }),
            e.bind("header_signin", "click", function (t) {
                return t.preventDefault(), APP.popupAuth("signin"), !1;
            }),
            e.bind("header_signup", "click", function (t) {
                return t.preventDefault(), APP.popupAuth("signup"), !1;
            });
        let n = UI.scroller("loc_menu_wrap", {
            scroll: "y",
            addParent: !1,
            classScrollWrapY: "ui-select-scroll-wrap",
            classScrollBarY: "ui-select-scroll",
            addClasses: !1
        });

        function s() {
            var t = window.pageYOffset || document.documentElement.scrollTop;
            0 < t ? (e.remClass("header", "onbody"), e.remClass("header", "ontop")) : (t < 0 ? e.addClass("header", "onbody") : e.remClass("header", "onbody"), e.addClass("header", "ontop"));
        }

        e.bind(window, "resize", function () {
            n.update();
        }),
        !APP.getCookie("allowCookie") &&
        e.id("cookies_accept") &&
        UI.reminder({
            html: e.id("cookies_accept").innerHTML,
            closebtn: !1,
            onSubmit: function () {
                var t = {tz: Intl.DateTimeFormat().resolvedOptions().timeZone, ts: ~~(Date.now() / 1e3), tt: Date()};
                APP.api("userAcceptCookies", t);
            },
        }).show();
    });
