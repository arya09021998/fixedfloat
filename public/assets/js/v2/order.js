!(function () {
    let l = UI.func,
        e = {
            section: void 0,
            fieldAddr: void 0,
            fieldTag: void 0,
            wrapTag: void 0,
            errorAddr: void 0,
            errorTag: void 0,
            timerKeyup: -1,
            resizeField: function () {
                var e = this;
                e.fieldAddr.style.height = "0";
                let t = getComputedStyle(e.fieldAddr, null);
                var r = parseFloat(t.getPropertyValue("padding-top")),
                    i = parseFloat(t.getPropertyValue("padding-bottom")),
                    a = parseFloat(t.getPropertyValue("border-top-width")),
                    d = parseFloat(t.getPropertyValue("border-bottom-width")),
                    n = (parseFloat(t.getPropertyValue("font-size")), parseFloat(t.getPropertyValue("line-height"))),
                    s = e.fieldAddr.scrollHeight,
                    o = l.hasClass(e.fieldAddr, "multi");
                if (Math.ceil(n + r + i) >= s) {
                    if (o) return l.remClass(e.fieldAddr, "multi"), void e.resizeField();
                } else if (!o) return l.addClass(e.fieldAddr, "multi"), void e.resizeField();
                e.fieldAddr.style.height = s + d + a + "px";
            },
            checkNeedTag: function () {
                var e = this;
                let t = e.fieldAddr.value;
                (result = t.match(/^(bnb1)[0-9a-z]{38}$/)) || (result = t.match(/^G[A-D]{1}[A-Z2-7]{54}$/)) || (result = t.match(/^(cosmos)[0-9a-z]{39}$/))
                    ? (l.remClass(e.wrapTag, "hidden"), e.fieldTag.setAttribute("placeholder", "MEMO"), e.fieldTag.setAttribute("data-tag", "MEMO"))
                    : (result = t.match(/^r[1-9A-HJ-NP-Za-km-z]{25,34}$/))
                    ? (l.remClass(e.wrapTag, "hidden"), e.fieldTag.setAttribute("placeholder", "Destination Tag"), e.fieldTag.setAttribute("data-tag", "Destination Tag"))
                    : (result = t.match(/^[1-9A-Za-z\-_]{48}$/))
                    ? (l.remClass(e.wrapTag, "hidden"), e.fieldTag.setAttribute("placeholder", "MEMO/Comment"), e.fieldTag.setAttribute("data-tag", "MEMO/Comment"))
                    : (l.addClass(e.wrapTag, "hidden"), e.fieldTag.setAttribute("data-tag", ""), (e.fieldTag.value = ""));
            },
            init: function () {
                var i = this;
                (i.section = l.id("access_address_section")),
                    (i.fieldAddr = l.id("access_address")),
                    (i.fieldTag = l.id("access_tag")),
                    (i.wrapTag = l.id("access_tag_outer")),
                    (i.errorAddr = l.id("access_address_error")),
                    (i.errorTag = l.id("access_tag_error")),
                    l.bind(i.fieldAddr, "focus", function () {
                        l.remClass(this, "error"), l.remClass(i.fieldTag, "error");
                    }),
                    l.bind(i.fieldTag, "focus", function () {
                        l.remClass(this, "error"), l.remClass(i.fieldAddr, "error");
                    }),
                    l.bind(i.fieldAddr, "blur", function () {
                        l.remClass(this, "error"), l.remClass(i.fieldTag, "error"), clearTimeout(i.timerKeyup);
                    }),
                    l.bind(i.fieldTag, "blur", function () {
                        l.remClass(this, "error"), l.remClass(i.fieldAddr, "error"), clearTimeout(i.timerKeyup);
                    }),
                    l.bind(i.fieldAddr, "input", function () {
                        l.remClass(this, "error"), clearTimeout(i.timerKeyup), i.checkNeedTag(), i.resizeField();
                    }),
                    l.bind(i.fieldAddr, "input", function () {
                        l.remClass(this, "error"), l.remClass(i.fieldAddr, "error"), clearTimeout(i.timerKeyup);
                    }),
                    l.on(i.section, "click", ".scanqr", function (e) {
                        (e = e || event).preventDefault();
                        let t = this.closest(".dinput").querySelector(".dinput-field");
                        l.remClass(t, "error"),
                            UI.qrscan({
                                scan: function (e) {
                                    e = e.match(/(?:\w+:)?(\w+)(?:\?.*)?/i);
                                    (t.value = e[1]), t == i.fieldAddr && (i.checkNeedTag(), i.resizeField()), t.blur(), this.close();
                                },
                            });
                    }),
                    l.on(i.section, "click", ".close", function (e) {
                        (e = e || event).preventDefault(), clearTimeout(i.timerKeyup);
                        let t = this.closest(".dinput").querySelector(".dinput-field");
                        (t.value = ""), t.focus(), t == i.fieldAddr && (i.checkNeedTag(), i.resizeField());
                    }),
                    UI.button("unlock_submit").click(function (t) {
                        var r = { id: this.getAttribute("data-id"), addr: i.fieldAddr.value, tag: i.fieldTag.value, tagName: i.fieldTag.getAttribute("data-tag") };
                        if (!r.addr) return t.error(), void l.addClass(i.fieldAddr, "error");
                        APP.api("orderGetAccess", r)
                            .then(function (e) {
                                t.success(), (location.href = "/order/" + r.id);
                            })
                            .catch(function (e) {
                                t.error(), 302 == e.code ? (l.addClass(i.fieldTag, "error"), (i.errorTag.innerHTML = e.msg)) : (l.addClass(i.fieldAddr, "error"), (i.errorAddr.innerHTML = e.msg));
                            });
                    }),
                    window.addEventListener("resize", function () {
                        i.resizeField();
                    });
            },
        };
    window.AccessInit = function () {
        e.init();
    };
})(),
    (function () {
        let l = UI.func;
        function d(r) {
            for (let t = 0; t < r.length; t++) {
                var i = +r[t].getAttribute("timestamp");
                if (100 < i) {
                    let e = moment(moment.unix(i).toDate()).local();
                    i = e.fromNow() + " (" + e.format("lll") + ")";
                    r[t].innerHTML != i && ((r[t].innerHTML = i), r[t].setAttribute("title", i));
                }
            }
        }
        function n(e) {
            let t = moment(moment.unix(+e).toDate()).local();
            return t.format("L") + " " + t.format("LT");
        }
        let a = { keyupWallet: -1, errorInterval: -1, wsTry: !1, wsReady: !1 },
            s = {
                id: "",
                token: null,
                timeLeft: 0,
                from: { amount: "", address: "", confirm: null, tx: null, timeBlock: null },
                to: { amount: "", address: "", confirm: null, tx: null, timeBlock: null },
                back: { address: "", confirm: null, tx: null, timeBlock: null },
                status: "",
                refundonly: !1,
                emergency: { status: [], choice: "", repeat: "", tmpl: "" },
                timeInterval: -1,
                timeout: -1,
                timeUpd: 0,
                html: { action: null, time: null, time_parent: null, time_creation: null, time_tx: null, time_competed: null, head_info: null, details: null, details_more: null, emergency: null },
                init: function (e) {
                    var t = this;
                    (t.id = e.id),
                        (t.token = e.token),
                        (t.timeLeft = e.timeLeft),
                        (t.from = e.from),
                        (t.to = e.to),
                        (t.back = e.back),
                        (t.status = e.status),
                        (t.refundonly = e.refundonly),
                        (t.emergency = e.emergency),
                        (t.html = {
                            action: l.id("order_action"),
                            time: l.id("order_time"),
                            time_parent: l.id("order_time").parentNode.parentNode,
                            time_creation: l.id("order_time_creation"),
                            time_tx: l.id("order_time_tx"),
                            time_competed: l.id("order_time_competed"),
                            head_info: l.id("order_info"),
                            head_inner: l.id("order_info_inner"),
                            details: l.id("order_details"),
                            details_more: l.id("order_details_more"),
                            emergency: l.id("section_emergency"),
                        }),
                        d(t.html.details.getElementsByTagName("time")),
                        d(t.html.details_more.getElementsByTagName("time")),
                        (t.html.time_creation.innerHTML = n(t.html.time_creation.getAttribute("timestamp"))),
                        (t.html.time_tx.innerHTML = n(t.html.time_tx.getAttribute("timestamp"))),
                        (t.html.time_competed.innerHTML = n(t.html.time_competed.getAttribute("timestamp"))),
                        0 < t.timeLeft &&
                            "NEW" == t.status &&
                            (t.timeInterval = setInterval(function () {
                                t.html.time.setAttribute("data-time", APP.formatTime(--t.timeLeft)), t.timeLeft <= 0 && (clearInterval(t.timeInterval), l.addClass("timeline_steps", "expired"), l.addClass(t.html.time_parent, "expired"));
                            }, 1e3)),
                        t.onResize(),
                        setInterval(function () {
                            d(t.html.details.getElementsByTagName("time")), d(t.html.details_more.getElementsByTagName("time"));
                        }, 6e4),
                        window.addEventListener("resize", function () {
                            t.onResize();
                        });
                },
                update: function (e) {
                    var t = this;
                    let r = { status: !1, txs: !1, confirm: !1, address: !1, amountFrom: !1, amountTo: !1, emergency: !1 };
                    t.status != e.status && ((t.status = e.status), (r.status = !0)),
                        (e.emergency.status = Array.isArray(e.emergency.status) ? e.emergency.status.join(",") : e.emergency.status),
                        t.emergency.status != e.emergency.status && ((t.emergency.status = e.emergency.status), (r.emergency = !0)),
                        t.emergency.choice != e.emergency.choice && ((t.emergency.choice = e.emergency.choice), (r.emergency = !0)),
                        t.emergency.repeat != e.emergency.repeat && ((t.emergency.repeat = e.emergency.repeat), (r.emergency = !0)),
                        t.from.tx != e.from.tx.id && ((t.from.tx = e.from.tx.id), (r.txs = !0)),
                        t.to.tx != e.to.tx.id && ((t.to.tx = e.to.tx.id), (r.txs = !0)),
                        t.back.tx != e.back.tx.id && ((t.back.tx = e.back.tx.id), (r.txs = !0)),
                        t.from.address != e.from.address && ((t.from.address = e.from.address), (r.address = !0)),
                        t.to.address != e.to.address && ((t.to.address = e.to.address), (r.address = !0)),
                        t.back.address != e.back.address && ((t.back.address = e.back.address), (r.address = !0)),
                        t.from.confirm != e.from.tx.confirmations &&
                            (l.id("order_from_tx_confirmations") && ((t.from.confirm = e.from.tx.confirmations), (l.id("order_from_tx_confirmations").innerHTML = null != t.from.confirm ? t.from.confirm : "")), (r.confirm = !0)),
                        t.to.confirm != e.to.tx.confirmations &&
                            (l.id("order_to_tx_confirmations") && ((t.to.confirm = e.to.tx.confirmations), (l.id("order_to_tx_confirmations").innerHTML = null != t.to.confirm ? t.to.confirm : "")), (r.confirm = !0)),
                        t.back.confirm != e.back.tx.confirmations &&
                            (l.id("order_back_tx_confirmations") && ((t.back.confirm = e.back.tx.confirmations), (l.id("order_back_tx_confirmations").innerHTML = null != t.back.confirm ? t.back.confirm : "")), (r.confirm = !0)),
                        t.from.amount != l.minCountToFixed(e.from.amount, 6, 10) &&
                            ((t.from.amount = l.minCountToFixed(e.from.amount, 6, 10)),
                            (l.id("order_send_value").innerHTML = t.from.amount + " " + e.from.symbol + (e.from.subSymbol ? "<sup>" + e.from.subSymbol + "</sup>" : "")),
                            (r.amountFrom = !0)),
                        t.to.amount != l.minCountToFixed(e.to.amount, 6, 10) &&
                            ((t.to.amount = l.minCountToFixed(e.to.amount, 6, 10)), (l.id("order_receive_value").innerHTML = t.to.amount + " " + e.to.symbol + (e.to.subSymbol ? "<sup>" + e.to.subSymbol + "</sup>" : "")), (r.amountTo = !0)),
                        t.from.timeBlock != e.from.tx.timeBlock &&
                            ((t.from.timeBlock = e.from.tx.timeBlock), t.from.timeBlock && l.id("order_from_tx_timeblock") && l.id("order_from_tx_timeblock").setAttribute("timestamp", t.from.timeBlock)),
                        t.to.timeBlock != e.to.tx.timeBlock && ((t.to.timeBlock = e.to.tx.timeBlock), t.to.timeBlock && l.id("order_to_tx_timeblock") && l.id("order_to_tx_timeblock").setAttribute("timestamp", t.to.timeBlock)),
                        t.back.timeBlock != e.back.tx.timeBlock &&
                            ((t.back.timeBlock = e.back.tx.timeBlock), t.back.timeBlock && l.id("order_back_tx_timeblock") && l.id("order_back_tx_timeblock").setAttribute("timestamp", t.back.timeBlock));
                    var i = 0 <= e.emergency.status.indexOf("MORE") && 0 <= e.emergency.status.indexOf("LIMIT");
                    t.refundonly = "REFUND" == e.emergency.choice && !i;
                    let a = l.hasClass(t.html.time_tx.parentNode.parentNode, "none");
                    "EXPIRED" != t.status && e.from.tx.timeReg
                        ? a && (t.html.time_tx.setAttribute("timestamp", e.from.tx.timeReg), (t.html.time_tx.innerHTML = n(e.from.tx.timeReg)), l.remClass(t.html.time_tx.parentNode.parentNode, "none"))
                        : a || l.addClass(t.html.time_tx.parentNode.parentNode, "none"),
                        (a = l.hasClass(t.html.time_competed.parentNode.parentNode, "none")),
                        (e.to.tx.id || e.back.tx.id) && e.time.finish && !t.refundonly
                            ? a && (t.html.time_competed.setAttribute("timestamp", e.time.finish), (t.html.time_competed.innerHTML = n(e.time.finish)), l.remClass(t.html.time_competed.parentNode.parentNode, "none"))
                            : l.addClass(t.html.time_competed.parentNode.parentNode, "none"),
                        l.togClass("timeline_pending", "emergency-choice", "EMERGENCY" == e.status),
                        r.status || r.txs || r.amountFrom || r.emergency ? t.getDetails() : (d(t.html.details.getElementsByTagName("time")), d(t.html.details_more.getElementsByTagName("time")));
                },
                getDetails: function (t) {
                    var r = this;
                    clearTimeout(r.timeout),
                        APP.api("orderGetDetails", { id: r.id })
                            .then(function (e) {
                                (-1 == r.timeout && t) || r.setStep(e.data.details, e.data.details_more, e.data.emergency),
                                    d(r.html.details.getElementsByTagName("time")),
                                    d(r.html.details_more.getElementsByTagName("time")),
                                    (r.timeout = -1);
                            })
                            .catch(function (e) {
                                d(r.html.details.getElementsByTagName("time")),
                                    d(r.html.details_more.getElementsByTagName("time")),
                                    (r.timeout = setTimeout(function () {
                                        r.getDetails(!0);
                                    }, 5e3));
                            });
                },
                setStep: function (e, t, r) {
                    var i = this;
                    switch (
                        (l.remClass(document.querySelectorAll("#timeline_steps li:not(.emergency-choice)"), "active"),
                        "REFUND" == i.status && (i.status = (i.refundonly && i.back.tx) || (!i.refundonly && i.to.tx) ? "DONE" : "WITHDRAW"),
                        "NEW" == i.status && l.addClass("timeline_new", "active"),
                        ("PENDING" != i.status && "EMERGENCY" != i.status) || l.addClass("timeline_pending", "active"),
                        "EXCHANGE" == i.status && l.addClass("timeline_exchange", "active"),
                        i.refundonly && l.addClass("timeline_done", "refund"),
                        "WITHDRAW" == i.status && l.addClass("timeline_done", "active"),
                        i.status,
                        i.status)
                    ) {
                        case "NEW":
                            l.remClass("order_qr", "none");
                            break;
                        case "PENDING":
                        case "EXCHANGE":
                        case "WITHDRAW":
                        case "EMERGENCY":
                            clearInterval(i.timeInterval),
                                l.remClass("timeline_steps", "expired"),
                                l.addClass("order_qr", "none"),
                                i.html.time_parent.setAttribute("class", "order-time exchange"),
                                i.html.action.setAttribute("class", "order-action exchange"),
                                r && l.addClass(i.html.time_parent, "emergency");
                            break;
                        case "DONE":
                            clearInterval(i.timeInterval),
                                l.remClass("timeline_steps", "expired"),
                                l.addClass("order_qr", "none"),
                                i.refundonly
                                    ? (i.html.time_parent.setAttribute("class", "order-time refund"), i.html.action.setAttribute("class", "order-action refund"))
                                    : (i.html.time_parent.setAttribute("class", "order-time done"), i.html.action.setAttribute("class", "order-action done"));
                            break;
                        case "EXPIRED":
                            l.addClass("timeline_steps", "expired"), l.remClass("order_qr", "none"), i.html.time_parent.setAttribute("class", "order-time expired"), i.html.action.setAttribute("class", "order-action expired");
                    }
                    e && ((i.html.details.innerHTML = e), d(i.html.details.getElementsByTagName("time"))),
                        t
                            ? ((i.html.details_more.innerHTML = t), l.remClass(i.html.details_more, "none"), d(i.html.details_more.getElementsByTagName("time")))
                            : (l.addClass(i.html.details_more, "none"), (i.html.details_more.innerHTML = "")),
                        r &&
                            i.emergency.tmpl != r &&
                            (l.addClass(i.html.emergency, "active"),
                            (i.html.emergency.innerHTML = r),
                            (i.emergency.tmpl = r),
                            "EXPIRED" != i.status && "NONE" == i.emergency.choice && "" != i.emergency.status ? i.html.action.insertBefore(i.html.emergency, i.html.action.firstElementChild) : l.before("section_timeline", i.html.emergency)),
                        r || (l.remClass(i.html.emergency, "active"), (i.html.emergency.innerHTML = "")),
                        l.id("emergency_submit") && o.init();
                },
                onResize: function () {
                    var t = this,
                        r = t.html.details.querySelector(".order-data-details"),
                        i = t.html.details.querySelector(".order-data-destination"),
                        a = t.html.details_more.querySelector(".order-data-destination");
                    if (l.hasClass(t.html.action, "new") || l.hasClass(t.html.action, "expired")) {
                        let e = r.offsetHeight;
                        var d,
                            r = t.html.head_inner.offsetHeight;
                        i && 700 < document.documentElement.clientWidth
                            ? (85 < (d = i.offsetHeight) || 240 < e) && e + d - 30 > r + 10
                                ? (l.remClass(t.html.head_info.parentNode, "flex-start"), t.html.details_more.appendChild(i), l.remClass(t.html.details_more, "none"))
                                : e > r + 10
                                ? l.addClass(t.html.head_info.parentNode, "flex-start")
                                : l.remClass(t.html.head_info.parentNode, "flex-start")
                            : a &&
                              (((d = a.offsetHeight) <= 55 && e <= 240) || e + d - 30 <= r + 10
                                  ? (t.html.details.appendChild(a),
                                    t.html.details_more.childElementCount || l.addClass(t.html.details_more, "none"),
                                    (e = t.html.details.offsetHeight),
                                    e <= r + 10 && l.remClass(t.html.head_info.parentNode, "flex-start"))
                                  : document.documentElement.clientWidth <= 700 &&
                                    (t.html.details.appendChild(a), t.html.details_more.childElementCount || l.addClass(t.html.details_more, "none"), l.remClass(t.html.head_info.parentNode, "flex-start")));
                    } else
                        i && document.documentElement.clientWidth <= 430
                            ? i && l.hasClass(t.html.details_more, "none") && (t.html.details_more.appendChild(i), l.remClass(t.html.details_more, "none"))
                            : a && 430 < document.documentElement.clientWidth && (t.html.details.appendChild(a), t.html.details_more.childElementCount || l.addClass(t.html.details_more, "none"));
                },
            },
            o = {
                section: void 0,
                submit: void 0,
                submitWrap: void 0,
                refundAddr: void 0,
                refundTag: void 0,
                refundAddrErr: void 0,
                refundTagErr: void 0,
                init: function () {
                    let r = this;
                    (r.section = l.id("section_emergency")),
                        (r.submitWrap = l.id("emergency_submit_section")),
                        (r.submit = l.id("emergency_submit")),
                        (r.refundAddr = l.id("refund_address")),
                        (r.refundTag = l.id("refund_tag")),
                        (r.refundAddrErr = l.id("refund_address_error")),
                        (r.refundTagErr = l.id("refund_tag_error"));
                    let t = UI.radio("order_refund");
                    function i() {
                        if ((l.remClass(r.refundAddr, "error"), t.value)) {
                            l.addClass(r.submit, "loading");
                            let e = { id: s.id, choice: t.value, template: !0 };
                            "REFUND" == t.value && ((e.address = r.refundAddr.value), r.refundTag && r.refundTag.value && (e.tag = r.refundTag.value)),
                                APP.api("orderSetEmergency", e)
                                    .then(function (e) {
                                        l.remClass(r.submit, "loading"), s.getDetails();
                                    })
                                    .catch(function (e) {
                                        switch ((l.remClass(r.submit, "loading"), e.code)) {
                                            case 302:
                                            case 303:
                                                r.refundTag.focus(), l.addClass(r.refundTag, "error"), (r.refundTagErr.innerHTML = e.msg);
                                                break;
                                            case 301:
                                            case 304:
                                            default:
                                                r.refundAddr.focus(), l.addClass(r.refundAddr, "error"), (r.refundAddrErr.innerHTML = e.msg), l.remClass(r.refundTag, "error");
                                        }
                                    });
                        }
                    }
                    t.change(function () {
                        l.remClass(r.refundAddr, "error"),
                            l.togClass("refund_address_outer", "hidden", "REFUND" != t.value),
                            l.togClass("refund_tag_outer", "hidden", "REFUND" != t.value),
                            r.submitWrap.setAttribute("data-choice", t.value),
                            l.addClass(r.submitWrap, "active"),
                            setTimeout(function () {
                                l.addClass(r.submitWrap, "visible-overflow");
                            }, 500);
                    }),
                        0 < t.inputs.length && t.inputs[0].click(),
                        l.bind(r.submit, "click", function () {
                            i();
                        }),
                        l.bind(r.refundAddr, "focus", function () {
                            l.remClass(r.refundAddr, "error");
                        }),
                        l.bind(r.refundTag, "focus", function () {
                            l.remClass(r.refundTag, "error");
                        }),
                        l.bind(r.refundAddr, "keydown", function (e) {
                            13 == e.keyCode && e.preventDefault();
                        }),
                        l.bind(r.refundAddr, "keyup", function (e) {
                            13 == e.keyCode && (e.preventDefault(), i());
                        }),
                        l.bind(r.refundAddr, "input", function (e) {
                            clearTimeout(a.keyupWallet), l.remClass(this, "error"), r.resizeRefundField(), this.value && r.validateRefundAddress();
                        }),
                        l.bind(r.refundAddr, "blur", function () {
                            l.remClass(this, "error"), clearTimeout(a.keyupWallet), this.value && r.validateRefundAddress();
                        }),
                        l.bind(r.refundTag, "keydown", function (e) {
                            13 == e.keyCode && e.preventDefault();
                        }),
                        l.bind(r.refundTag, "keyup", function (e) {
                            13 == e.keyCode && (e.preventDefault(), i());
                        }),
                        l.bind(r.refundTag, "input", function () {
                            clearTimeout(a.keyupWallet), l.remClass(this, "error"), this.value && r.validateRefundAddress();
                        }),
                        l.bind(r.refundTag, "blur", function () {
                            l.remClass(this, "error"), clearTimeout(a.keyupWallet), this.value && r.validateRefundAddress();
                        }),
                        l.on(r.section, "click", ".scanqr", function (e) {
                            (e = e || event).preventDefault();
                            let t = this.closest(".dinput").querySelector(".dinput-field");
                            l.remClass(t, "error"),
                                UI.qrscan({
                                    scan: function (e) {
                                        e = e.match(/(?:\w+:)?(\w+)(?:\?.*)?/i);
                                        (t.value = e[1]), t.blur(), this.close();
                                    },
                                });
                        }),
                        l.on(r.section, "click", ".close", function (e) {
                            (e = e || event).preventDefault(), clearTimeout(a.keyupWallet);
                            let t = this.closest(".dinput").querySelector(".dinput-field");
                            (t.value = ""), t.focus(), r.resizeRefundField();
                        }),
                        window.addEventListener("resize", function () {
                            r.resizeRefundField();
                        });
                },
                resizeRefundField: function () {
                    var e = this;
                    e.refundAddr.style.height = "0";
                    let t = getComputedStyle(e.refundAddr, null);
                    var r = parseFloat(t.getPropertyValue("padding-top")),
                        i = parseFloat(t.getPropertyValue("padding-bottom")),
                        a = parseFloat(t.getPropertyValue("border-top-width")),
                        d = parseFloat(t.getPropertyValue("border-bottom-width")),
                        n = (parseFloat(t.getPropertyValue("font-size")), parseFloat(t.getPropertyValue("line-height"))),
                        s = e.refundAddr.scrollHeight,
                        o = l.hasClass(e.refundAddr, "multi");
                    if (Math.ceil(n + r + i) >= s) {
                        if (o) return l.remClass(e.refundAddr, "multi"), void e.resizeRefundField();
                    } else if (!o) return l.addClass(e.refundAddr, "multi"), void e.resizeRefundField();
                    e.refundAddr.style.height = s + d + a + "px";
                },
                validateRefundAddress: function () {
                    var t = this;
                    t.refundAddr &&
                        (a.keyupWallet = setTimeout(function () {
                            a.keyupWallet = -1;
                            let e = { currency: t.refundAddr.getAttribute("data-ccy"), address: t.refundAddr.value };
                            t.refundTag && t.refundTag.value && (e.tag = t.refundTag.value),
                                APP.api("orderAddressInfo", e)
                                    .then(function (e) {})
                                    .catch(function (e) {
                                        switch (e.code) {
                                            case 302:
                                            case 303:
                                                t.refundTag.focus(), l.addClass(t.refundTag, "error"), (t.refundTagErr.innerHTML = e.msg);
                                                break;
                                            case 301:
                                            case 304:
                                            default:
                                                t.refundAddr.focus(), l.addClass(t.refundAddr, "error"), (t.refundAddrErr.innerHTML = e.msg), l.remClass(t.refundTag, "error");
                                        }
                                    });
                        }, 300));
                },
            };
        window.InitOrder = function (e) {
            s.init(e), l.id("emergency_submit") && o.init();

            // let t = new APP.WSClient("wss://localhost/ws");
            // t.init(function () {
            //     a.wsTry = !0;
            //     let e = { channel: "orderChanges", id: s.id };
            //     s.token && (e.token = s.token), this.subscribe(e);
            // }),
            //     t.message("subscribed", function (e) {
            //         (a.wsReady = !0), s.update(e);
            //     }),
            //     t.message("orderChanges", function (e) {
            //         (a.wsReady = !0), s.update(e);
            //     }),
            //     t.error(function (e) {
            //         (a.wsTry = !1), (a.wsReady = !1);
            //     });
            let r = !1;
            setInterval(function () {
                //t.isProblem &&
                    !r &&
                    ((r = !0),
                    //console.log("WS problem"),
                    APP.api("orderStatus", { id: s.id })
                        .then(function (e) {
                            s.update(e.data), (r = !1);
                        })
                        .catch(function (e) {
                            r = !1;
                        }));
            }, 5000),
                delete window.InitOrder;
        };
    })();
