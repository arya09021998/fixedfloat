!(function () {
    let l = UI.func;
    var e = "ontouchstart" in window || (window.DocumentTouch && document instanceof DocumentTouch) ? "touchstart" : "mousedown";
    let c = {
            from: { amount: void 0, label: void 0, name: void 0, logo_t: void 0, logo_a: void 0, rate: void 0, info: void 0, maxmin: void 0, error: void 0, reverse: void 0, selector: void 0 },
            to: { amount: void 0, label: void 0, name: void 0, logo_t: void 0, logo_a: void 0, rate: void 0, info: void 0, maxmin: void 0, error: void 0, reverse: void 0, selector: void 0 },
            address: { field: void 0, label: void 0, hidden: void 0, error: void 0, func: { favorite: void 0, paste: void 0, scanqr: void 0, clean: void 0 }, addressbook: void 0, addressbook_scroll: void 0 },
            tag: { wrapper: void 0, field: void 0, label: void 0, error: void 0, func: { paste: void 0, clean: void 0 } },
            type: { radioui: void 0, fixed: void 0, float: void 0 },
            container: void 0,
            btn_exchange: void 0,
            btn_reverse: void 0,
            rate_usd_from: void 0,
            btn_exchange_ui: void 0,
            agreeterms: void 0,
        },
        d = {
            search_ph: "Type a currency",
            search_found: "Found currencies",
            selector_option: '<span class="coin-img svgcoin {1}"></span>',
            selector_label: '<span class="coin-img svgcoin {value}"></span><span class="coin-name">{coin}<sup>{sub}</sup></span>',
            address_ph: "Your {1} address",
            invoice_ph: "Your {1} address",
            favaddress_ph: "Find your {1} address in the list",
            address_error: "Enter your {1} address",
            invoice_error: "Enter your {1} invoice",
            address_invalid: "Invalid address",
            route_invalid: "Invalid route, unable to find a path to destination",
            limit_min: "Minimum amount {1}",
            limit_max: "You exceeded the limit of {1}",
            minmax:
                '<button type="button" class="maxmin-value" data-value="{min}"><span class="prefix">min:</span><span>{min} {coin}</span></button><button type="button" class="maxmin-value" data-value="{max}"><span class="prefix">max:</span><span>{max} {coin}</span></button>',
            maintenance: "Network temporarily suspended for maintenance",
            ccy_offline: "The network is offline",
            ccy_reserve: "The currency is awaiting the addition of reserves",
            qrcode_error: "Camera not found",
            addressbook_row: '<span>{address}</span><button type="button" class="ico star {#favorite}favorite{\\favorite}"></button>',
            addressbook_fav: "Favorite addresses",
            addressbook_last: "Last used addresses",
            recoverytime: "Estimated network recovery time",
            recoverytime_hour: "Estimated recovery time within an hour",
            recoverytime_hours: "Estimated recovery time is within {1} hours",
            recoverytime_day: "Estimated recovery time during the day",
            recoverytime_days: "Estimated recovery time is within {1} days",
            webln_popup_gen: "It is possible to generate an invoice using your Lightning Wallet. Want to create a new invoice to receive funds for your Lightning Wallet?",
            webln_popup_failed: "Failed to generate invoice",
            webln_popup_switch: "Your wallet cannot generate invoice without specifying the amount. Switch to fixed order type?",
            webln_popup_gen_ok: "Generate",
            webln_popup_cancel: "No thanks",
            webln_popup_switch_ok: "Switch",
            clipboard_permission: "You need to give the browser permission to use your clipboard",
            popup_warning_fee: "",
            popup_forbidden_usa:
                '<div class="popup-content fix-width2"><h3 style="margin-bottom: 1.3em;">Important Notice</h3><p style="text-align: center;margin-bottom: 0.2em;">U.S. persons cannot make an exchange on FixedFloat.com</p><div class="popup-ctrl"><span class="btn submit popup-close-btn bghl">I understand</span></div></div>',
        },
        a = {
            setAmount: -1,
            keyupAmount: -1,
            keyupWallet: -1,
            errorInterval: -1,
            overflowAnimation: -1,
            closeAnimation: -1,
            changeColors: -1,
            stop: function (e) {
                clearTimeout(a[e]), (a[e] = -1);
            },
        },
        n = {
            validateSubmit: function () {
                for (var e in m.error) m.error[e];
            },
            toggleLocked: function () {
                "float" == m.type ? ((m.direction = "from"), c.to.amount.setAttribute("readonly", "readonly")) : m.lockType || c.to.amount.removeAttribute("readonly"),
                    l.togClass(c.from.amount.parentNode, "locked", "from" == m.direction),
                    l.togClass(c.to.amount.parentNode, "locked", "to" == m.direction);
            },
            toggleExtra: function () {
                var e = c.to.selector.val(),
                    e = (c.to.selector.options[e].network, c.to.selector.options[e].tag);
                l.togClass(c.tag.wrapper, "active", !!e),
                    l.togClass(c.address.field, "with-extra", !!e),
                    e
                        ? (c.tag.label && (c.tag.label.innerHTML = e + " (optional)"),
                        c.tag.field && c.tag.field.setAttribute("placeholder", e),
                            clearTimeout(a.overflowAnimation),
                            (a.overflowAnimation = setTimeout(function () {
                                l.addClass(c.tag.wrapper, "ovisible"), (a.overflowAnimation = -1);
                            }, 300)))
                        : l.remClass(c.tag.wrapper, "ovisible");
            },
            positionUsdRate: function () {
                var e = c.from.selector.val(),
                    t = c.to.selector.val();
                ("BTC" == e && "BTCLN" != t) || "BTCLN" == e ? c.container.setAttribute("data-pos-usd", "bottom") : c.container.setAttribute("data-pos-usd", "top");
            },
            resizeTextarea: function () {
                if (c.address.field && "TEXTAREA" == c.address.field.tagName.toUpperCase()) {
                    let e = c.address.field;
                    e.style.height = "0";
                    let t = getComputedStyle(e, null);
                    var o = parseFloat(t.getPropertyValue("padding-top")),
                        r = parseFloat(t.getPropertyValue("padding-bottom")),
                        a = parseFloat(t.getPropertyValue("border-top-width")),
                        s = parseFloat(t.getPropertyValue("border-bottom-width")),
                        i = (parseFloat(t.getPropertyValue("font-size")), parseFloat(t.getPropertyValue("line-height"))),
                        d = e.scrollHeight,
                        n = l.hasClass(e, "multi");
                    if (Math.ceil(i + o + r) >= d) {
                        if (n) return l.remClass(e, "multi"), void this.resizeTextarea();
                    } else if (!n) return l.addClass(e, "multi"), void this.resizeTextarea();
                    c.address.field.style.height = d + s + a + 1 + "px";
                }
            },
        },
        s = {
            allow: !0,
            makeInvoice: async function (e) {
                let t = await WebLN.requestProvider();
                return t.makeInvoice(e);
            },
            getInvoice: function () {
                let t = { defaultMemo: "From FixedFloat" };
                "fixed" == m.type && (t.amount = ~~(1e8 * +m.to.amount)),
                    (a.keyupWallet = 1),
                    c.address.field.blur(),
                    s
                        .makeInvoice(t)
                        .then(function (e) {
                            e = e.paymentRequest;
                            (s.allow = !0), e || t.amount ? ((a.keyupWallet = 1), m.pasteAddress(e), (a.keyupWallet = -1)) : s.confirmSwitchFixed();
                        })
                        .catch(function (e) {
                            (s.allow = !0), (a.keyupWallet = -1), "Zero-amount invoice is not supported." == e ? s.confirmSwitchFixed() : (UI.alert(d.webln_popup_failed), console.log(e));
                        });
            },
            confirmGenerate: function (e) {
                UI.popup({
                    html:
                        '<div class="popup-content popup-confirm fix-width"><p>' +
                        d.webln_popup_gen +
                        '</p><div class="popup-ctrl"><button type="button" class="btn cancel">' +
                        d.webln_popup_cancel +
                        '</button><button type="button" class="btn submit popup-close-btn">' +
                        d.webln_popup_gen_ok +
                        "</button></div></div>",
                    afterRender: function () {
                        var e = this;
                        l.on(e.container, "click", ".cancel", function () {
                            (s.allow = !1),
                                setTimeout(function () {
                                    s.allow = !0;
                                }, 5e3),
                            c.address.field && c.address.field.focus(),
                                e.close();
                        }),
                            l.on(e.container, "click", ".submit", function () {
                                (s.allow = !1), s.getInvoice();
                            });
                    },
                }).show();
            },
            confirmSwitchFixed: function () {
                var e = { ok: d.webln_popup_switch_ok, cancel: d.webln_popup_cancel };
                UI.confirm(
                    d.webln_popup_switch,
                    function () {
                        (m.type = "fixed"), c.type.radioui && c.type.radioui.val("fixed"), n.toggleLocked(), m.getRatePaste();
                    },
                    e
                );
            },
        };
    var i = function (e, t) {
            var o = t.which || t.keyCode;
            t.ctrlKey ||
            t.altKey ||
            t.metaKey ||
            ((48 != o && 96 != o) || "0" != e.value || (e.value = "0."),
                (58 <= o && o <= 90) || (106 <= o && o <= 111) || 146 <= o
                    ? (t.preventDefault(), (188 != o && 190 != o && 191 != o && 110 != o) || -1 != e.value.search(/\./i) || ((t = l.carPos(e)), (e.value = e.value.substr(0, t) + "." + e.value.substr(t++)), l.setCarPos(e, t, t)))
                    : 13 == o && e.blur());
        },
        u = function (t, o) {
            (m.direction = m.lockSend || m.lockReceive ? m.direction : o),
                l.remClass(t.parentNode, "error"),
                clearTimeout(a.keyupAmount),
                n.toggleLocked(),
            t.value &&
            (a.keyupAmount = setTimeout(function () {
                m[o].amount = t.value;
                var e = "to" == o ? "to" : m.direction;
                m.getRate(t.value, e);
            }, 300));
        },
        f = function (e, t) {
            var o;
            clearTimeout(a.keyupAmount), -1 != a.setAmount || m.lockAmount || (e.value ? ((o = "to" == t ? "to" : m.direction), m.getRate(e.value, o)) : ((e.value = "0.0000"), (c[t].error.innerHTML = "The amount can not be zero")));
        };
    let m = {
        isInit: !1,
        from: { ccy: "", amount: 0, req: void 0 },
        to: { ccy: "", amount: 0, req: void 0 },
        usd: { from: 0, to: 0 },
        type: "float",
        direction: "from",
        lockType: !1,
        lockAmount: !1,
        lockSend: !1,
        lockReceive: !1,
        lockAddress: !1,
        errorIgnore: !1,
        floatLNInvoice: !0,
        address: { value: "", extra: "", fixedAmount: !1, findfavorite: !1 },
        error: { from: !1, to: !1, address: !0, extra: !1 },
        wisthExtra: ["BNB", "XRP", "XLM"],
        checkAddressInProgress: !1,
        priceAbortController: void 0,
        priceAbortLoading: void 0,
        priceApiPromise: void 0,
        select: function (e, t) {
            var o = t.value;
            c[e].amount.parentNode.parentNode.setAttribute("data-value", o),
                (c[e].name.innerHTML = t.label),
                (c[e].label.innerHTML = l.fmt(d.selector_label, t)),
                c[e].label.setAttribute("data-count", o.length),
                c[e].reverse.setAttribute("data-value", o),
                c[e].logo_t.setAttribute("data-value", o),
                c[e].logo_a.setAttribute("data-value", o),
                1 == +t.inactive ? (l.addClass(c[e].amount.parentNode, "error"), l.addClass(c[e].amount.parentNode, "offline")) : (l.remClass(c[e].amount.parentNode, "error"), l.remClass(c[e].amount.parentNode, "offline")),
                (m[e].ccy = o),
                clearTimeout(a.changeColors),
                (a.changeColors = setTimeout(function () {
                    APP.highlightingColor(m.from.ccy, m.to.ccy), document.dispatchEvent(new CustomEvent("highlightingColor", { detail: { from: m.from.ccy, to: m.to.ccy } }));
                }, 50));
        },
        unlockAmounts: function () {
            m.lockType || ((m.address.fixedAmount = !1), (c.type.float.disabled = !1), (m.lockAmount && m.lockSend) || (c.from.amount.disabled = !1), "float" != m.type && (c.to.amount.disabled = !1));
        },
        checkType: function (e) {
            e
                ? ((c.to.amount.value = e),
                    (m.type = "fixed"),
                c.type.radioui && c.type.radioui.val("fixed"),
                    (m.direction = "to"),
                    n.toggleLocked(),
                c.type.float && (c.type.float.disabled = !0),
                    (c.to.amount.disabled = !0),
                    (c.from.amount.disabled = !0),
                    (m.address.fixedAmount = !0),
                    m.getRatePaste())
                : m.unlockAmounts();
        },
        pasteAddress: function (e, t) {
            c.address.field
                ? ((c.address.field.value = e), t ? (c.address.field.focus(), n.resizeTextarea(e), c.address.field.blur()) : (l.remClass(c.address.field, "error"), m.validateAddress(), n.resizeTextarea(e)))
                : (m.address.value = e);
        },
        getAddressBook: function (e) {
            APP.api("userAddressBook", e)
                .then(function (e) {
                    l.remClass(c.address.addressbook, "loading"), m.pasteAddressBook(e.data);
                })
                .catch(function (e) {
                    l.remClass(c.address.addressbook, "loading");
                });
        },
        pasteAddressBook: function (t) {
            function e(e) {
                let t = document.createElement("div");
                return (
                    l.addClass(t, "row-address"),
                        t.setAttribute("data-addr", e.address),
                        t.setAttribute("data-tag", e.tag),
                        t.setAttribute("data-coin", e.coin),
                        t.setAttribute("data-network", e.network),
                        (t.innerHTML = l.fmt(d.addressbook_row, e)),
                        t
                );
            }
            function o(e) {
                let t = document.createElement("div");
                return l.addClass(t, "row-separate"), (t.innerHTML = "<span>" + e + "</span>"), t;
            }
            for (let e = t.fav.length - 1; 0 <= e; e--)
                for (var r in t.last) {
                    if (void 0 === t.fav[e]) break;
                    t.fav[e].address == t.last[r].address && t.fav[e].tag == t.last[r].tag && t.fav.splice(e, 1);
                }
            for (var a in ((c.address.addressbook.innerHTML = ""), t.last.length && c.address.addressbook.appendChild(o(d.addressbook_last)), t.last)) c.address.addressbook.appendChild(e(t.last[a]));
            for (var s in (t.fav.length && c.address.addressbook.appendChild(o(d.addressbook_fav)), t.fav)) c.address.addressbook.appendChild(e(t.fav[s]));
            c.address.addressbook_scroll.update();
        },
        closeAddressBook: function (e, t) {
            (m.address.findfavorite = !1),
                (c.address.addressbook.innerHTML = ""),
                l.remClass(c.address.field.parentNode.parentNode, "show-address-book"),
                clearTimeout(a.closeAnimation),
                (a.closeAnimation = setTimeout(function () {
                    l.remClass(c.tag.wrapper, "noanim");
                }, 300)),
                c.address.field.setAttribute("placeholder", l.fmt(d.address_ph, c.to.selector.selectedAttr("label"))),
            t && (c.tag.field.value = t),
                e ? m.pasteAddress(e) : m.pasteAddress("", !1);
        },
        checkAddress: function () {
            var e;
            m.address.value &&
            ((e = { currency: c.to.selector.val(), address: m.address.value, tag: m.address.extra }),
                APP.api("exchCheckAddress", e)
                    .then(function (e) {
                        c.address.error && (c.address.error.innerHTML = ""),
                        c.address.field && l.remClass(c.address.field, "error"),
                        c.tag.field && l.remClass(c.tag.field, "error"),
                            m.checkType(e.data.amount),
                            (m.error.address = !1),
                            (m.checkAddressInProgress = !1),
                            n.validateSubmit();
                    })
                    .catch(function (e) {
                        console.log(e);
                        switch (((m.checkAddressInProgress = !1), e.code)) {
                            case 302:
                            case 303:
                                c.tag.field && l.addClass(c.tag.field, "error"), c.tag.field && (c.tag.error.innerHTML = e.msg);
                                break;
                            case 301:
                            case 304:
                            case 305:
                            default:
                                c.address.field ? l.addClass(c.address.field, "error") : UI.alert(e.msg), c.address.error && (c.address.error.innerHTML = e.msg);
                        }
                        n.validateSubmit();
                    }));
        },
        validateAddress: function () {
            !c.address.field ||
            (m.address.value == c.address.field.value && m.address.extra == c.tag.field.value) ||
            (c.address.field && (m.address.value = c.address.field.value),
            c.tag.field && (m.address.extra = c.tag.field.value),
                m.address.value ? -1 == a.keyupWallet && m.checkAddress() : ((m.error.address = !0), m.unlockAmounts(), n.validateSubmit()));
        },
        validateExtra: function () {
            c.tag.field && (m.address.extra = c.tag.field.value);
            let e = m.address.extra;
            if (e)
                switch (m.to.ccy) {
                    case "XRP":
                        (9 < e.toString().length || isNaN(e)) && (m.error.extra = !0);
                        break;
                    case "BNB":
                        100 < e.toString().length && (m.error.extra = !0);
                        break;
                    default:
                        m.error.extra = !1;
                }
            else m.error.extra = !1;
            c.tag.field ? l.togClass(c.tag.field, "error", m.error.extra) : m.error.extra && UI.alert(d.address_invalid), n.validateSubmit();
        },
        avaliblesCurrencies: function (e) {
            let t = {};
            for (var o in e) t[e[o].code] = e[o];
            for (var r in c.from.selector.options) c.from.selector.attr(r, "inactive", +!t[r].recv);
            for (var a in c.to.selector.options) c.to.selector.attr(a, "inactive", +!t[a].send);
        },
        getRateQuery: function (e, t, o, s, i) {
            clearInterval(a.errorInterval);
            let r = { type: m.type, fromCcy: e.toUpperCase(), toCcy: t.toUpperCase() };
            "string" == typeof o && (o = o.match(/[\d\.]+/g)[0]),
                "to" == s ? (r.toAmount = o) : (r.fromAmount = o),
                !0 === i ? (r.usd = m.usd.from) : +i && (r.usd = +i),
            m.priceApiPromise && m.priceApiPromise.isPending() && m.priceAbortController && m.priceAbortController instanceof AbortController && (m.priceAbortController.abort(), (m.priceAbortLoading = !0)),
                (m.priceAbortController = new AbortController()),
                (m.priceApiPromise = APP.api(
                    "exchPrice",
                    r,
                    function (e) {
                        m.priceAbortLoading = !1;
                        let t = e.data;
                        var o,
                            r,
                            a = "fixed" == m.type ? "=" : "≈",
                            e = "fixed" == m.type ? "" : "≈";
                        if ((l.remClass(c.to.amount.parentNode, "error"), l.remClass(c.from.amount.parentNode, "error"), l.remClass(c.to.amount.parentNode, "offline"), l.remClass(c.from.amount.parentNode, "offline"), t)) {
                            if (((t.to.max = l.fixNumber(t.to.max, 8)), (m.error.from = !1), (m.error.to = !1), t.errors.length)) {
                                if (t.errors.includes("MAINTENANCE_FROM")) {
                                    let e = "";
                                    t.from.recoverytime &&
                                    ((r = moment.unix(t.from.recoverytime)),
                                        (o = moment().diff(r, "hours")),
                                        (r = moment().diff(r, "days")),
                                        (e = 1 < r ? "<br> " + l.fmt(d.recoverytime_days, r) : 1 == r ? "<br> " + l.fmt(d.recoverytime_day) : 1 < o ? "<br> " + l.fmt(d.recoverytime_hours, o) : "<br> " + l.fmt(d.recoverytime_hour))),
                                        (c.from.error.innerHTML = d.maintenance + e),
                                        (m.error.from = "OFFLINE");
                                } else
                                    t.errors.includes("OFFLINE_FROM")
                                        ? ((c.from.error.innerHTML = d.ccy_offline), (m.error.from = "OFFLINE"))
                                        : t.errors.includes("RESERVE_FROM") && ((c.from.error.innerHTML = d.ccy_reserve), (m.error.from = "OFFLINE"));
                                if (t.errors.includes("MAINTENANCE_TO")) {
                                    let e = "";
                                    t.to.recoverytime &&
                                    ((r = moment.unix(t.to.recoverytime)),
                                        (o = moment().diff(r, "hours")),
                                        (r = moment().diff(r, "days")),
                                        (e = 1 < r ? "<br> " + l.fmt(d.recoverytime_days, r) : 1 == r ? "<br> " + l.fmt(d.recoverytime_day) : 1 < o ? "<br> " + l.fmt(d.recoverytime_hours, o) : "<br> " + l.fmt(d.recoverytime_hour))),
                                        (c.to.error.innerHTML = d.maintenance + e),
                                        (m.error.to = "OFFLINE");
                                } else
                                    t.errors.includes("OFFLINE_TO")
                                        ? ((c.to.error.innerHTML = d.ccy_offline), (m.error.to = "OFFLINE"))
                                        : t.errors.includes("RESERVE_TO") && ((c.to.error.innerHTML = d.ccy_reserve), (m.error.to = "OFFLINE"));
                                "OFFLINE" != m.error.from &&
                                "OFFLINE" != m.error.to &&
                                (t.errors.includes("LIMIT_MIN")
                                    ? ((c[s].error.innerHTML = l.fmt(d.limit_min, '<button type="button" class="maxmin-value" data-value="' + t[s].min + '">' + t[s].min + " " + t[s].coin + "</button>")), (m.error[s] = !0))
                                    : t.errors.includes("LIMIT_MAX") &&
                                    ((c[s].error.innerHTML = l.fmt(d.limit_max, '<button type="button" class="maxmin-value" data-value="' + t[s].max + '">' + t[s].max + " " + t[s].coin + "</button>")), (m.error[s] = !0))),
                                m.error.from && (l.addClass(c.from.amount.parentNode, "error"), l.togClass(c.from.amount.parentNode, "offline", "OFFLINE" == m.error.from)),
                                m.error.to && (l.addClass(c.to.amount.parentNode, "error"), l.togClass(c.to.amount.parentNode, "offline", "OFFLINE" == m.error.to));
                            }
                            n.validateSubmit(),
                                i
                                    ? ((c.from.amount.value = t.from.amount), (c.to.amount.value = e + t.to.amount))
                                    : "to" == s
                                        ? ((c.from.amount.value = t.from.amount), (c.to.amount.value = e + l.fixNumber(t.to.amount)))
                                        : (document.activeElement != c.from.amount && (c.from.amount.value = l.fixNumber(t.from.amount)), (c.to.amount.value = e + t.to.amount)),
                                (m.from.amount = l.fixNumber(t.from.amount)),
                                (m.to.amount = l.fixNumber(t.to.amount)),
                                (m.usd.from = t.from.usd),
                                (m.usd.to = t.to.usd),
                                (c.from.rate.innerHTML = "1 " + t.from.coin + " " + a + " " + t.from.rate + " " + t.to.coin),
                                (c.from.maxmin.innerHTML = l.fmt(d.minmax, t.from)),
                                (c.to.rate.innerHTML = "1 " + t.to.coin + " " + a + " " + t.to.rate + " " + t.from.coin),
                                (c.to.maxmin.innerHTML = l.fmt(d.minmax, t.to)),
                                (c.rate_usd_from.innerHTML = "$ " + l.round(t.from.usd, 2)),
                                (c.rate_usd_to.innerHTML = "$ " + l.round(t.to.usd, 2)),
                                n.toggleLocked(),
                            t.ccies && m.avaliblesCurrencies(t.ccies);
                        } else "to" == s ? l.addClass(c.to.amount.parentNode, "error") : l.addClass(c.from.amount.parentNode, "error");
                    },
                    function () {
                        a.errorInterval = setInterval(function () {
                            m.getRateFull(o, s);
                        }, 1e4);
                    },
                    m.priceAbortController
                ));
        },
        getRate: function (e, t, o) {
            m.getRateQuery(c.from.selector.val(), c.to.selector.val(), e, t, o);
        },
        getRateFull: function (e, t, o) {
            this.getRate(e, t, o), c.address.field && ((o = "btcln" == c.to.selector.val() ? d.invoice_ph : d.address_ph), c.address.field.setAttribute("placeholder", l.fmt(o, c.to.selector.selectedAttr("label"))));
        },
        getRatePaste: function (e) {
            var t, o;
            m.isInit && ((t = e ? !m.lockReceive : void 0), (o = ("to" == m.direction ? c.to : c.from).amount.value), e ? m.getRateFull(o, m.direction, t) : m.getRate(o, m.direction, t));
        },
        createOrder: function (e, t) {
            return APP.api(
                "exchCreate",
                e,
                function (e) {
                    t && t.success(), (location.href = "/order/" + e.data);
                },
                function (e) {
                    t && t.error(),
                        301 == e.code
                            ? (c.address.field ? (c.address.error && (c.address.error.innerHTML = l.fmt(d.address_error, c.to.selector.selectedAttr("label"))), c.address.field.focus()) : UI.alert(d.address_invalid),
                                l.addClass(c.address.field, "error"))
                            : 300 == e.code
                                ? UI.alert("Error! Try reloading the page")
                                : 502 == e.code && UI.popup({ html: d.popup_forbidden_usa }).show();
                }
            );
        },
        init: function (t) {
            if (
                ((c.container = l.id("exchange_amount")),
                    (c.agreeterms = l.id("agreeterms")),
                    (c.type.radioui = UI.radio("select_type_from")),
                    (c.btn_exchange = l.id("exchange_submit")),
                    (c.btn_reverse = l.id("btn_reverse")),
                    (c.rate_usd_from = l.id("rate_usd_from")),
                    (c.rate_usd_to = l.id("rate_usd_to")),
                    (c.from.amount = l.id("select_amount_from")),
                    (c.from.name = l.id("select_ccyname_from")),
                    (c.from.label = l.id("select_label_from")),
                    (c.from.reverse = l.id("btn_reverse_from")),
                    (c.from.logo_t = l.id("logo_text_from")),
                    (c.from.logo_a = l.id("logo_arrow_from")),
                    (c.from.error = l.id("select_hinterror_from")),
                    (c.from.rate = l.id("select_rate_from")),
                    (c.from.maxmin = l.id("select_maxmin_from")),
                    (c.from.info = l.id("select_info_from")),
                    (c.to.amount = l.id("select_amount_to")),
                    (c.to.name = l.id("select_ccyname_to")),
                    (c.to.label = l.id("select_label_to")),
                    (c.to.reverse = l.id("btn_reverse_to")),
                    (c.to.logo_t = l.id("logo_text_to")),
                    (c.to.logo_a = l.id("logo_arrow_to")),
                    (c.to.error = l.id("select_hinterror_to")),
                    (c.to.rate = l.id("select_rate_to")),
                    (c.to.maxmin = l.id("select_maxmin_to")),
                    (c.to.info = l.id("select_info_to")),
                    (c.address.field = l.id("receive_wallet")),
                    (c.address.label = l.id("receive_wallet_label")),
                    (c.address.error = l.id("receive_wallet_error")),
                    (c.address.hidden = l.id("receive_wallet_hidden")),
                    (c.address.func.paste = l.id("wallet_paste")),
                    (c.address.func.scanqr = l.id("wallet_scanqr")),
                    (c.address.func.favorite = l.id("wallet_favorite")),
                    (c.address.func.clean = l.id("wallet_clear")),
                    (c.address.addressbook = l.id("wallet_addressbook")),
                    (c.tag.field = l.id("receive_extraid")),
                    (c.tag.label = l.id("receive_extraid_label")),
                    (c.tag.wrapper = l.id("wallet_extra_outer")),
                    (c.tag.error = l.id("receive_extraid_error")),
                    (c.tag.func.paste = l.id("extraid_paste")),
                    (c.tag.func.clean = l.id("extraid_clear")),
                    (c.type.fixed = l.id("fixed_type")),
                    (c.type.float = l.id("float_type")),
                    (m.from.req = t.fromAmount || m.from.req),
                    (m.to.req = t.toAmount || m.to.req),
                    (m.lockAmount = (void 0 !== t.lockAmount ? t : m).lockAmount),
                    (m.lockType = (void 0 !== t.lockType ? t : m).lockType),
                    (m.lockSend = (void 0 !== t.lockSend ? t : m).lockSend),
                    (m.lockReceive = (void 0 !== t.lockReceive ? t : m).lockReceive),
                    (m.lockAddress = (void 0 !== t.lockAddress ? t : m).lockAddress),
                    (m.errorIgnore = (void 0 !== t.errorIgnore ? t : m).errorIgnore),
                    (m.floatLNInvoice = (void 0 !== t.floatLNInvoice ? t : m).floatLNInvoice),
                    (d.selector_option = t.selector_tmpl || d.selector_option),
                    (d.selector_label = t.label_tmpl || d.selector_label),
                    (d.search_ph = t.search_ph || d.search_ph),
                    (d.search_found = t.search_found || d.search_found),
                    (d.address_ph = t.address_ph || d.address_ph),
                    (d.invoice_ph = t.invoice_ph || d.invoice_ph),
                    (d.favaddress_ph = t.favaddress_ph || d.favaddress_ph),
                    (d.address_invalid = t.address_invalid || d.address_invalid),
                    (d.route_invalid = t.route_invalid || d.route_invalid),
                    (d.address_error = t.address_error || d.address_error),
                    (d.invoice_error = t.invoice_error || d.invoice_error),
                    (d.limit_min = t.limit_min || d.limit_min),
                    (d.limit_max = t.limit_max || d.limit_max),
                    (d.addressbook_row = t.address_tmpl || d.address_tmpl),
                    (d.addressbook_fav = t.addressbook_fav || d.addressbook_fav),
                    (d.addressbook_last = t.addressbook_last || d.addressbook_last),
                    (d.maintenance = t.maintenance || d.maintenance),
                    (d.ccy_offline = t.ccy_offline || d.ccy_offline),
                    (d.ccy_reserve = t.ccy_reserve || d.ccy_reserve),
                    (d.qrcode_error = t.qrcode_error || d.qrcode_error),
                    (d.recoverytime = t.recoverytime || d.recoverytime),
                    (d.recoverytime_hour = t.recoverytime_hour || d.recoverytime_hour),
                    (d.recoverytime_hours = t.recoverytime_hours || d.recoverytime_hours),
                    (d.recoverytime_day = t.recoverytime_day || d.recoverytime_day),
                    (d.recoverytime_days = t.recoverytime_days || d.recoverytime_days),
                    (d.clipboard_permission = t.clipboard_permission || d.clipboard_permission),
                    (d.popup_warning_fee = t.popup_warning_fee || d.popup_warning_fee),
                    (d.popup_forbidden_usa = t.popup_forbidden_usa || d.popup_forbidden_usa),
                    c.type.radioui ? (m.type = c.type.radioui.val()) : t.type && (m.type = t.type),
                    (c.from.selector = UI.selector("select_currency_from", {
                        tmpl: d.selector_option,
                        dataToAttr: ["inactive"],
                        search: { placeholder: d.search_ph, label: d.search_found },
                        hidden: !0,
                        onOpen: function () {
                            l.addClass(document.body, "select-priority");
                        },
                        onClose: function () {
                            l.remClass(document.body, "select-priority");
                        },
                        onInit: function (e) {
                            m.select("from", e);
                        },
                    })),
                    (c.to.selector = UI.selector("select_currency_to", {
                        tmpl: d.selector_option,
                        dataToAttr: ["inactive"],
                        search: { placeholder: d.search_ph, label: d.search_found },
                        hidden: !0,
                        onOpen: function () {
                            l.addClass(document.body, "select-priority");
                        },
                        onClose: function () {
                            l.remClass(document.body, "select-priority");
                        },
                        onInit: function (e) {
                            m.select("to", e);
                        },
                    })),
                    c.from.selector.onChange(function (e, t, o) {
                        l.remClass(c.address.field, "error"),
                            n.positionUsdRate(),
                            m.select("from", e),
                        c.to.selector.val() != e.value || o || (c.to.selector.select(t.value, !0), m.unlockAmounts(), m.pasteAddress("", !1)),
                        m.address.fixedAmount && (m.unlockAmounts(), m.pasteAddress("", !1)),
                        o || m.getRatePaste(!0),
                            l.localStorage.set("ff.exch.from", e.value);
                    }),
                    c.to.selector.onChange(function (e, t, o) {
                        l.remClass(c.address.field, "error"),
                        m.to.ccy != e.value && (m.unlockAmounts(), m.address.findfavorite && m.closeAddressBook(), m.pasteAddress("", !1), c.tag.field && ((c.tag.field.value = ""), l.remClass(c.tag.field, "error"))),
                            n.toggleExtra(),
                            n.positionUsdRate(),
                            m.select("to", e),
                        c.from.selector.val() != e.value || o || (c.from.selector.select(t.value, !0), m.unlockAmounts(), m.pasteAddress("", !1), c.tag.field && ((c.tag.field.value = ""), l.remClass(c.tag.field, "error"))),
                            "BTCLN" != e.value || m.floatLNInvoice ? m.lockType || (c.type.float.disabled = !1) : ((m.type = "fixed"), c.type.radioui && c.type.radioui.val("fixed"), n.toggleLocked(), (c.type.float.disabled = !0)),
                            l.togClass(c.address.func.favorite, "none", "BTCLN" == e.value),
                        o || m.getRatePaste(!0),
                            l.localStorage.set("ff.exch.to", e.value);
                    }),
                c.type.radioui &&
                c.type.radioui.change(function () {
                    let e = !1;
                    m.type != this.value && ((m.type = this.value), (e = !0)), n.toggleLocked(), e && m.getRatePaste();
                }),
                c.address.addressbook && (c.address.addressbook_scroll = UI.scroller(c.address.addressbook, { scroll: "y", addParent: !1, classScrollWrapY: "ui-select-scroll-wrap", classScrollBarY: "ui-select-scroll", addClasses: !1 })),
                c.agreeterms &&
                l.bind(c.agreeterms, "change", function () {
                    l.remClass(this.parentNode, "error");
                }),
                    (c.btn_reverse.onclick = function (e) {
                        var t;
                        (e = e || event).preventDefault(),
                        l.hasClass(this, "disabled") || ((t = c.from.selector.val()), (e = c.to.selector.val()), c.to.selector.options[t] && c.from.selector.options[e] && (c.to.selector.val(t), m.pasteAddress("", !1)));
                    }),
                    (c.from.amount.onfocus = function () {
                        l.remClass(c.address.field, "error");
                    }),
                    (c.from.amount.onkeydown = function (e) {
                        (e = e || event), i(this, e);
                    }),
                    (c.from.amount.oninput = function () {
                        u(this, "from");
                    }),
                    (c.from.amount.onblur = function () {
                        f(this, "from");
                    }),
                    (c.to.amount.onfocus = function () {
                        l.remClass(c.address.field, "error");
                    }),
                    (c.to.amount.onkeydown = function (e) {
                        (e = e || event), i(this, e);
                    }),
                    (c.to.amount.oninput = function () {
                        u(this, "to");
                    }),
                    (c.to.amount.onblur = function () {
                        f(this, "to");
                    }),
                    l.bind(c.address.field, "keydown", function (e) {
                        13 == ((e = e || event).which || e.keyCode) && (e.preventDefault(), (m.address.value = this.value), c.btn_exchange_ui.click());
                    }),
                    l.bind(c.address.field, "focus", function () {
                        l.remClass(this, "error");
                    }),
                    l.bind(c.address.field, "click", function () {
                        if (WebLN && s.allow && "btcln" == m.to.ccy && "" == c.address.field.value)
                            try {
                                WebLN.requestProvider()
                                    .then(function () {
                                        c.address.field.blur(), s.confirmGenerate();
                                    })
                                    .catch(function (e) {});
                            } catch (e) {
                                console.log(e);
                            }
                    }),
                    l.bind(c.address.field, "input", function () {
                        (m.checkAddressInProgress = !0), l.remClass(this, "error"), l.remClass(c.tag.field, "error"), clearTimeout(a.keyupWallet);
                        var o = this.value;
                        n.resizeTextarea(o),
                            m.address.findfavorite
                                ? (a.keyupWallet = setTimeout(function () {
                                    a.keyupWallet = -1;
                                    var e = c.to.selector.options[c.to.selector.val()];
                                    let t = { coin: e.coin, network: e.network };
                                    o && (t.address = o), m.getAddressBook(t);
                                }, 1e3))
                                : o
                                    ? (a.keyupWallet = setTimeout(function () {
                                        (a.keyupWallet = -1), m.validateAddress();
                                    }, 1e3))
                                    : ((m.error.address = !0), m.unlockAmounts(), n.validateSubmit(), (m.checkAddressInProgress = !1));
                    }),
                    l.bind(c.address.field, "blur", function () {
                        m.address.findfavorite || m.validateAddress();
                    }),
                    l.bind(c.tag.field, "input", function () {
                        l.remClass(this, "error"),
                            l.remClass(c.address.field, "error"),
                        c.address.field.value &&
                        ((m.checkAddressInProgress = !0),
                            clearTimeout(a.keyupWallet),
                            (a.keyupWallet = setTimeout(function () {
                                (a.keyupWallet = -1), m.validateAddress();
                            }, 1e3)));
                    }),
                    l.bind(c.from.label, "click", function () {
                        c.from.selector.open();
                    }),
                    l.bind(c.to.label, "click", function () {
                        c.to.selector.open();
                    }),
                    l.bind(c.address.func.favorite, "click", function (e) {
                        (m.address.findfavorite = !0),
                            l.addClass(c.address.field.parentNode.parentNode, "show-address-book"),
                            l.addClass(c.tag.wrapper, "noanim"),
                            l.addClass(c.address.addressbook, "loading"),
                            l.remClass(c.address.field, "error"),
                            c.address.field.setAttribute("placeholder", l.fmt(d.favaddress_ph, c.to.selector.selectedAttr("label")));
                        var t = c.to.selector.options[c.to.selector.val()],
                            t = { coin: t.coin, network: t.network };
                        m.getAddressBook(t);
                    }),
                    l.on(c.address.addressbook, "click", ".row-address", function (e) {
                        var t = e.target.closest(".addressbook-favorite");
                        if (t) {
                            let e = t.parentNode;
                            var o = l.hasClass(t, "active");
                            l.togClass(t, "active", !o);
                            var r = { coin: e.getAttribute("data-coin"), network: e.getAttribute("data-network"), address: e.getAttribute("data-addr"), tag: e.getAttribute("data-tag"), favorite: !o };
                            APP.api("userAddressFavorite", r)
                                .then(function (e) {
                                    console.log(e);
                                })
                                .catch(function (e) {
                                    l.togClass(t, "active", !!o);
                                });
                        } else {
                            (e = this.getAttribute("data-addr")), (r = this.getAttribute("data-tag"));
                            m.closeAddressBook(e, r);
                        }
                    }),
                    navigator.clipboard &&
                    (l.remClass(c.address.func.paste, "none"),
                        l.remClass(c.tag.func.paste, "none"),
                        l.bind(c.address.func.paste, "click", function (e) {
                            a.stop("keyupWallet"),
                                navigator.clipboard
                                    .readText()
                                    .then(function (e) {
                                        m.pasteAddress(e);
                                    })
                                    .catch(function (e) {
                                        UI.alert(d.clipboard_permission);
                                    });
                        }),
                        l.bind(c.tag.func.paste, "click", function (e) {
                            a.stop("keyupWallet"),
                                navigator.clipboard
                                    .readText()
                                    .then(function (e) {
                                        (c.tag.field.value = val), m.validateAddress();
                                    })
                                    .catch(function (e) {
                                        UI.alert(d.clipboard_permission);
                                    });
                        })),
                    l.bind(c.address.func.scanqr, "click", function (e) {
                        (e = e || event).preventDefault(),
                            UI.qrscan({
                                scan: function (e) {
                                    e = e.match(/(?:\w+:)?(\w+)(?:\?.*)?/i);
                                    m.pasteAddress(e[1]), this.close();
                                },
                                error: function () {},
                            });
                    }),
                    l.bind(c.address.func.clean, e, function () {
                        clearTimeout(a.keyupWallet),
                            (a.keyupWallet = setTimeout(function () {
                                a.keyupWallet = -1;
                            }, 100));
                    }),
                    l.bind(c.tag.func.clean, e, function () {
                        clearTimeout(a.keyupWallet),
                            (a.keyupWallet = setTimeout(function () {
                                a.keyupWallet = -1;
                            }, 100));
                    }),
                    l.bind(c.address.func.clean, "click", function (e) {
                        (e = e || event).preventDefault(), a.stop("keyupWallet"), m.address.findfavorite ? m.closeAddressBook() : (m.pasteAddress("", !1), (c.tag.field.value = ""), l.remClass(c.tag.field, "error"));
                    }),
                    l.bind(c.tag.func.clean, "click", function (e) {
                        (e = e || event).preventDefault(), a.stop("keyupWallet"), (c.tag.field.value = ""), l.remClass(c.tag.field, "error"), m.validateAddress();
                    }),
                    l.on(c.container, "click", ".tolightning", function (e) {
                        var t = this.getAttribute("data-dir");
                        "from" == t ? c.from.selector.select("btcln") : "to" == t && c.to.selector.select("btcln");
                    }),
                    l.on(c.container, "mousedown", ".maxmin-value", function (r) {
                        if (0 == (r = r || event).button) {
                            r.preventDefault();
                            let e = this.closest(".input-wabbr").querySelector("input.input-amount"),
                                t = e.getAttribute("data-dir"),
                                o = this.getAttribute("data-value");
                            if (!m.lockAmount)
                                return (
                                    ("float" == m.type && "to" == t) || (e.value = o),
                                        n.toggleLocked(),
                                        (a.setAmount = setTimeout(function () {
                                            a.setAmount = -1;
                                        }, 300)),
                                        m.getRate(o, t),
                                        !1
                                );
                        }
                    }),
                    l.bind(document.body, "click", function (e) {
                        m.address.findfavorite && !e.target.closest(".show-address-book > .field") && m.closeAddressBook();
                    }),
                    (c.btn_exchange_ui = UI.button(c.btn_exchange, { changeAtOnce: !1, changeTexts: !1 }).click(function (t, e) {
                        for (var o in (e.preventDefault(), m.error))
                            if (m.error[o]) {
                                let e = !0;
                                switch (o) {
                                    case "from":
                                        c.from.amount.focus();
                                        break;
                                    case "to":
                                        c.to.amount.focus();
                                        break;
                                    case "address":
                                    default:
                                        -1 != a.keyupWallet || m.checkAddressInProgress
                                            ? (e = !1)
                                            : (c.address.field ? (c.address.error && (c.address.error.innerHTML = l.fmt(d.address_error, c.to.selector.selectedAttr("label"))), c.address.field.focus()) : UI.alert(d.address_invalid),
                                                l.addClass(c.address.field, "error"));
                                }
                                if (e && !m.errorIgnore) return;
                            }
                        if (!c.agreeterms || c.agreeterms.checked) {
                            let e = { fromCcy: m.from.ccy.toUpperCase(), toCcy: m.to.ccy.toUpperCase(), type: m.type, toAddress: m.address.value, tz: Intl.DateTimeFormat().resolvedOptions().timeZone, ts: ~~(Date.now() / 1e3), tt: Date() };
                            "to" == m.direction ? (e.toQty = m.to.amount) : (e.fromQty = m.from.amount),
                            c.to.selector.options[e.toCcy].tag && (e.tag = c.tag.field.value),
                            "function" == typeof gtag && gtag("event", "exchange", { event_category: "button" });
                            m.usd.to, m.usd.from;
                            0.07 <= 1 - m.usd.to / m.usd.from && 2 < m.usd.from - m.usd.to && d.popup_warning_fee
                                ? UI.popup({
                                    html: d.popup_warning_fee,
                                    class: "foreground",
                                    onSubmit: function () {
                                        t.loading(), m.createOrder(e, t);
                                    },
                                }).show()
                                : (t.loading(), m.createOrder(e, t));
                        } else l.addClass(c.agreeterms.parentNode, "error");
                    })),
                    !t.reqFrom)
            ) {
                var o = l.localStorage.get("ff.exch.from");
                let e = !1;
                t.reqTo && (e = o == t.reqTo), o && !e && c.from.selector.options[o] && c.from.selector.select(o, !0);
            }
            if (!t.reqTo) {
                var r = l.localStorage.get("ff.exch.to");
                let e = !1;
                t.reqFrom && (e = t.reqFrom == r), r && !e && c.to.selector.options[r] && c.to.selector.select(r);
            }
            (m.isInit = !0),
            t.address && (m.error.address = !1),
                m.pasteAddress(t.address || "", !1),
                (m.address.extra = t.extra || ""),
            c.tag.field && (c.tag.field.value = m.address.extra),
            m.lockReceive && m.lockAmount && ((m.direction = "to"), m.checkType(t.toAmount));
            (o = t.toAmount || t.fromAmount || 1e3), (r = t.fromAmount ? "from" : "to");
            m.getRateFull(o, r, t.fromAmount || t.toAmount ? "undefined" : 50), m.validateAddress(), n.toggleExtra(), n.positionUsdRate(), n.toggleLocked();
        },
    };
    l.bind(window, "resize", function () {
        if (c?.address?.field?.value) n.resizeTextarea(c.address.field.value);
    }),
        (window.Exchange = m),
        (window.ExObj = c);
})();
