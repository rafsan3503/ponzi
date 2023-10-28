/*! For license information please see 12.6da9d4ad.chunk.js.LICENSE.txt */
(this.webpackJsonpponzi = this.webpackJsonpponzi || []).push([
    [12], {
        190: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return E
            })), n.d(t, "a", (function() {
                return T
            }));
            var r = n(37),
                i = (n(250), n(4)),
                a = n(650),
                s = n(17),
                o = n(63),
                c = n(57),
                l = n(35),
                u = n(56),
                d = n.n(u),
                p = n(84),
                f = n(187),
                h = n(11);

            function b(e) {
                return Object(h.jsxs)("svg", Object(f.a)(Object(f.a)({
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    className: "feather feather-x"
                }, e), {}, {
                    children: [Object(h.jsx)("line", {
                        x1: "18",
                        y1: "6",
                        x2: "6",
                        y2: "18"
                    }), Object(h.jsx)("line", {
                        x1: "6",
                        y1: "6",
                        x2: "18",
                        y2: "18"
                    })]
                }))
            }

            function m(e) {
                var t = e.isOpen,
                    n = e.onClose,
                    r = Object(p.a)().login,
                    i = function(e, t) {
                        switch (e.preventDefault(), t) {
                            case "metamask":
                                "undefined" !== typeof window.ethereum ? (r(1), n()) : d.a.error("Metamask not found", {
                                    style: {
                                        border: "1px solid #ccc",
                                        padding: "5px 10px",
                                        color: "#713200"
                                    }
                                });
                                break;
                            case "walletconnect":
                                r(2), n();
                                break;
                            case "coinbase":
                                r(3), n();
                                break;
                            default:
                                throw new Error("Unknown wallet type")
                        }
                    };
                return Object(h.jsx)("div", {
                    className: "wallet-box-backdrop ".concat(t && "active"),
                    onClick: n,
                    children: Object(h.jsxs)("div", {
                        className: "wallet-box ".concat(t && "active"),
                        onClick: function(e) {
                            return e.stopPropagation()
                        },
                        children: [Object(h.jsx)("img", {
                            className: "wallet-bg",
                            src: "/paper-bg.png",
                            alt: "paper-bg"
                        }), Object(h.jsxs)("div", {
                            className: "wallet-box-inner",
                            children: [Object(h.jsx)("h1", {
                                className: "wallet-box-title",
                                children: "CONNECT WALLET"
                            }), Object(h.jsx)("div", {
                                className: "line"
                            }), Object(h.jsxs)("a", {
                                className: "wallet-link",
                                href: "/",
                                onClick: function(e) {
                                    return i(e, "metamask")
                                },
                                children: [Object(h.jsx)("figure", {
                                    className: "wallet-pic-wrapper",
                                    children: Object(h.jsx)("img", {
                                        className: "wallet-pic",
                                        src: "/metamask.svg",
                                        alt: "metamask"
                                    })
                                }), Object(h.jsxs)("div", {
                                    className: "wallet-link-content",
                                    children: [Object(h.jsx)("h1", {
                                        className: "wallet-link-title",
                                        children: "METAMASK"
                                    }), Object(h.jsx)("p", {
                                        className: "paragraph",
                                        children: "Connect using browser wallet"
                                    })]
                                })]
                            }), Object(h.jsx)("div", {
                                className: "line"
                            }), Object(h.jsxs)("a", {
                                className: "wallet-link",
                                href: "/",
                                onClick: function(e) {
                                    return i(e, "coinbase")
                                },
                                children: [Object(h.jsx)("figure", {
                                    className: "wallet-pic-wrapper",
                                    children: Object(h.jsx)("img", {
                                        className: "wallet-pic",
                                        src: "/coinbase.svg",
                                        alt: "metamask"
                                    })
                                }), Object(h.jsxs)("div", {
                                    className: "wallet-link-content",
                                    children: [Object(h.jsx)("h1", {
                                        className: "wallet-link-title",
                                        children: "COINBASE"
                                    }), Object(h.jsx)("p", {
                                        className: "paragraph",
                                        children: "Connect using coinbase"
                                    })]
                                })]
                            }), Object(h.jsx)("div", {
                                className: "line"
                            }), Object(h.jsxs)("a", {
                                className: "wallet-link",
                                href: "/",
                                onClick: function(e) {
                                    return i(e, "walletconnect")
                                },
                                children: [Object(h.jsx)("figure", {
                                    className: "wallet-pic-wrapper",
                                    children: Object(h.jsx)("img", {
                                        className: "wallet-pic",
                                        src: "/wallet-connect.svg",
                                        alt: "walletconnect"
                                    })
                                }), Object(h.jsxs)("div", {
                                    className: "wallet-link-content",
                                    children: [Object(h.jsx)("h1", {
                                        className: "wallet-link-title",
                                        children: "WALLET CONNECT"
                                    }), Object(h.jsx)("p", {
                                        className: "paragraph",
                                        children: "Connect using mobile wallet"
                                    })]
                                })]
                            })]
                        }), Object(h.jsx)("button", {
                            className: "close-btn",
                            onClick: n,
                            children: Object(h.jsx)(b, {
                                className: "x-icon"
                            })
                        })]
                    })
                })
            }
            var v = n(659),
                j = [{
                    id: 1,
                    url: "/",
                    title: "Home"
                }, {
                    id: 2,
                    url: "/mint",
                    title: "Mint"
                }, {
                    id: 3,
                    url: "/market",
                    title: "Marketplace"
                }];

            function g(e) {
                var t = e.isOpen,
                    n = e.onClose,
                    r = e.pageData,
                    a = Object(i.useRef)(null),
                    l = Object(i.useState)(!1),
                    u = Object(o.a)(l, 2),
                    d = u[0],
                    p = u[1],
                    f = Object(s.f)();
                return Object(i.useEffect)((function() {
                    document.querySelectorAll(".hamb-link-btn").forEach((function(e) {
                        var t = e.querySelector(".btn-text");
                        e.addEventListener("click", (function() {
                            navigator.clipboard.writeText(t.textContent), e.classList.add("active"), setTimeout((function() {
                                e.classList.remove("active")
                            }), 5e3)
                        }))
                    }))
                })), Object(v.a)(a, (function() {
                    p(!1)
                })), Object(h.jsx)("div", {
                    className: "hamb-menu-backdrop ".concat(t && "active"),
                    onClick: n,
                    children: Object(h.jsxs)("div", {
                        className: "hamb-menu ".concat(t && "active"),
                        onClick: function(e) {
                            return e.stopPropagation()
                        },
                        children: [Object(h.jsx)("img", {
                            className: "hamb-bg",
                            src: "/paper-bg.png",
                            alt: "paper-bg"
                        }), Object(h.jsxs)("div", {
                            className: "hamb-menu-inner",
                            children: [Object(h.jsx)("figure", {
                                className: "hamb-pic-wrapper",
                                children: Object(h.jsx)("img", {
                                    className: "hamb-pic",
                                    src: "https://ponzi-cms.xyz" + r.home.data.attributes.hamburger_image.data.attributes.url,
                                    alt: "Hamburger"
                                })
                            }), Object(h.jsxs)("div", {
                                className: "hamb-links",
                                children: [j.map((function(e) {
                                    return Object(h.jsx)(c.b, {
                                        className: "hamb-link",
                                        to: e.url,
                                        onClick: function(t) {
                                            return function(e, t) {
                                                e.preventDefault(), n(), f.push(t)
                                            }(t, e.url)
                                        },
                                        children: e.title
                                    }, e.id)
                                })), Object(h.jsx)("div", {
                                    className: "drop-box",
                                    children: Object(h.jsx)("button", {
                                        className: "drop-box-btn " + (d ? " active" : ""),
                                        onClick: function() {
                                            return p(!d)
                                        },
                                        children: "Contracts"
                                    })
                                }), Object(h.jsxs)("div", {
                                    className: "drop-content " + (d ? "active" : ""),
                                    ref: a,
                                    children: [Object(h.jsxs)("div", {
                                        className: "hamb-link-btn",
                                        children: [Object(h.jsx)("h1", {
                                            className: "btn-title",
                                            "data-text": "copy",
                                            "data-text-active": "copied",
                                            children: "Ponzi NFT:"
                                        }), Object(h.jsx)("p", {
                                            className: "btn-text",
                                            children: "0xc0f6cc4b7e67f0518851068601c9f7c4ef18b201"
                                        })]
                                    }), Object(h.jsxs)("div", {
                                        className: "hamb-link-btn",
                                        children: [Object(h.jsx)("h1", {
                                            className: "btn-title",
                                            "data-text": "copy",
                                            "data-text-active": "copied",
                                            children: "Ponzi Marketplace:"
                                        }), Object(h.jsx)("p", {
                                            className: "btn-text",
                                            children: "0x78eb94d0630e4302359226feeac70593410580b3"
                                        })]
                                    }), Object(h.jsxs)("div", {
                                        className: "hamb-link-btn",
                                        children: [Object(h.jsx)("h1", {
                                            className: "btn-title",
                                            "data-text": "copy",
                                            "data-text-active": "copied",
                                            children: "Ponzi Coin:"
                                        }), Object(h.jsx)("p", {
                                            className: "btn-text",
                                            children: "0x0a40E0f19Da13c27A251e8d4bc31fd4Ca2D9BF87"
                                        })]
                                    }), Object(h.jsx)("img", {
                                        src: "/paper-bg.png",
                                        alt: "error",
                                        className: "bg"
                                    })]
                                }), Object(h.jsxs)("div", {
                                    className: "social-links",
                                    children: [Object(h.jsx)("a", {
                                        className: "social-link",
                                        href: "twitterlink",
                                        children: Object(h.jsx)("img", {
                                            src: "/twitter.svg",
                                            alt: "error",
                                            className: "image"
                                        })
                                    }), Object(h.jsx)("a", {
                                        className: "social-link",
                                        href: "https://opensea.io/collection/the-ponzi",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: Object(h.jsx)("img", {
                                            src: "/opensea.svg",
                                            alt: "error",
                                            className: "image"
                                        })
                                    }), Object(h.jsx)("a", {
                                        className: "social-link",
                                        href: "https://blur.io/collection/the-ponzi",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: Object(h.jsx)("img", {
                                            src: "/blur.svg",
                                            alt: "error",
                                            className: "image"
                                        })
                                    }), Object(h.jsx)("a", {
                                        className: "social-link",
                                        href: "https://app.uniswap.org/#/swap?inputCurrency=eth&outputCurrency=0x0a40E0f19Da13c27A251e8d4bc31fd4Ca2D9BF87",
                                        target: "_blank",
                                        rel: "noreferrer",
                                        children: Object(h.jsx)("img", {
                                            src: "/uniswap.png",
                                            alt: "error",
                                            className: "image"
                                        })
                                    })]
                                })]
                            }), Object(h.jsx)("button", {
                                className: "close-btn",
                                onClick: n,
                                children: "CLOSE"
                            })]
                        })]
                    })
                })
            }
            var y = n(29);

            function O(e) {
                var t = e.isOpen,
                    n = e.onClose,
                    r = e.onDisconnect,
                    i = e.accountAddress;
                return Object(h.jsx)("div", {
                    className: "account__modal ".concat(t && "active"),
                    onClick: n,
                    children: Object(h.jsxs)("div", {
                        className: "account__modal__inner",
                        onClick: function(e) {
                            return e.stopPropagation()
                        },
                        children: [Object(h.jsx)("img", {
                            src: "/paper-bg.png",
                            alt: "paper-bg",
                            className: "img-bg"
                        }), Object(h.jsxs)("div", {
                            className: "account__modal__content",
                            children: [Object(h.jsx)("h1", {
                                className: "modal-title",
                                children: "ACCOUNT"
                            }), Object(h.jsx)("div", {
                                className: "line"
                            }), Object(h.jsxs)("div", {
                                className: "account-info",
                                children: [Object(h.jsx)("figure", {
                                    className: "profile-pic-wrapper",
                                    children: Object(h.jsx)("svg", {
                                        width: "150",
                                        height: "150",
                                        viewBox: "0 0 154 154",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: Object(h.jsx)("path", {
                                            d: "M77 0.333313C35.439 0.333313 0.333374 35.439 0.333374 77C0.333374 118.561 35.439 153.667 77 153.667C118.561 153.667 153.667 118.561 153.667 77C153.667 35.439 118.561 0.333313 77 0.333313ZM77 38.6666C90.2404 38.6666 100 48.4186 100 61.6666C100 74.9146 90.2404 84.6666 77 84.6666C63.7674 84.6666 54 74.9146 54 61.6666C54 48.4186 63.7674 38.6666 77 38.6666ZM37.854 113.585C44.731 103.465 56.2004 96.7186 69.3334 96.7186H84.6667C97.8074 96.7186 109.269 103.465 116.146 113.585C106.348 124.073 92.4484 130.667 77 130.667C61.5517 130.667 47.652 124.073 37.854 113.585Z",
                                            fill: "#2E2929"
                                        })
                                    })
                                }), Object(h.jsxs)("div", {
                                    className: "account-info-content",
                                    children: [Object(h.jsx)("p", {
                                        className: "paragraph",
                                        children: Object(y.f)(i)
                                    }), Object(h.jsx)("button", {
                                        className: "copy-btn",
                                        onClick: function() {
                                            navigator.clipboard.writeText(i), d.a.success("Copied to clipboard")
                                        },
                                        children: "COPY"
                                    })]
                                })]
                            }), Object(h.jsx)("div", {
                                className: "line"
                            }), Object(h.jsx)("button", {
                                className: "modal-btn opensea-btn",
                                onClick: function() {
                                    window.open("https://opensea.io/".concat(i), "_blank")
                                },
                                children: "VIEW ON OPENSEA"
                            }), Object(h.jsx)("button", {
                                className: "dis-btn",
                                onClick: r,
                                children: "DISCONNECT"
                            })]
                        })]
                    })
                })
            }
            var w = Object(i.forwardRef)((function(e, t) {
                    var n = e.showBackgroud,
                        r = void 0 === n || n,
                        s = e.pageData,
                        u = Object(l.b)(),
                        f = u.connector,
                        b = u.library,
                        v = u.chainId,
                        j = u.account,
                        w = u.active,
                        x = Object(i.useState)(!1),
                        S = Object(o.a)(x, 2),
                        k = S[0],
                        _ = S[1],
                        N = Object(i.useState)(!1),
                        C = Object(o.a)(N, 2),
                        T = C[0],
                        E = C[1],
                        P = Object(i.useState)(!1),
                        L = Object(o.a)(P, 2),
                        M = L[0],
                        z = L[1],
                        A = Object(i.useState)(!1),
                        R = Object(o.a)(A, 2),
                        D = R[0],
                        H = R[1],
                        W = Object(p.a)().logout,
                        I = (new Date).toLocaleDateString("en-US", {
                            weekday: "long",
                            day: "numeric",
                            month: "long",
                            year: "numeric"
                        });
                    return Object(i.useEffect)((function() {
                        var e = j && w && v === parseInt("1", 10);
                        H(e)
                    }), [f, b, j, w, v]), Object(h.jsxs)(h.Fragment, {
                        children: [Object(h.jsxs)(a.a.nav, {
                            className: "navigation ".concat(!r && "blurNavbar"),
                            ref: t,
                            exit: {
                                y: "-100%"
                            },
                            transition: {
                                duration: .5,
                                ease: [.65, -.01, .32, 1]
                            },
                            children: [r && Object(h.jsx)("div", {
                                className: "paper-bg",
                                children: Object(h.jsx)("img", {
                                    className: "paper-pic",
                                    src: "/paper-bg.png",
                                    alt: "paper-bg"
                                })
                            }), Object(h.jsxs)("div", {
                                className: "navigation__inner",
                                children: [Object(h.jsx)("div", {
                                    className: "nav-box",
                                    children: Object(h.jsx)("p", {
                                        className: "paragraph",
                                        children: I
                                    })
                                }), Object(h.jsx)(c.b, {
                                    to: "/",
                                    className: "nav-box",
                                    children: Object(h.jsx)("img", {
                                        className: "logo-img",
                                        src: "/logo.png",
                                        alt: "LOGO"
                                    })
                                }), Object(h.jsxs)("div", {
                                    className: "nav-box",
                                    children: [Object(h.jsxs)("button", {
                                        className: "wallet-btn",
                                        title: "CONNECT WALLET",
                                        onClick: function() {
                                            k && _(!1), D ? z(!0) : E(!T)
                                        },
                                        children: [Object(h.jsx)("img", {
                                            className: "wallet-pic",
                                            src: "/profile.svg",
                                            alt: "wallet"
                                        }), D ? Object(h.jsxs)(h.Fragment, {
                                            children: [Object(h.jsx)("span", {
                                                className: "wallet-text-pc",
                                                children: Object(y.f)(j)
                                            }), Object(h.jsx)("span", {
                                                className: "wallet-text-mobile",
                                                children: "Wallet Info"
                                            })]
                                        }) : Object(h.jsx)("span", {
                                            className: "wallet-text",
                                            children: "Log in"
                                        })]
                                    }), D && Object(h.jsx)(c.b, {
                                        className: "profile__icon",
                                        to: "/profile",
                                        title: "Profile",
                                        children: Object(h.jsx)("svg", {
                                            width: "40",
                                            height: "40",
                                            viewBox: "0 0 154 154",
                                            fill: "none",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: Object(h.jsx)("path", {
                                                d: "M77 0.333313C35.439 0.333313 0.333374 35.439 0.333374 77C0.333374 118.561 35.439 153.667 77 153.667C118.561 153.667 153.667 118.561 153.667 77C153.667 35.439 118.561 0.333313 77 0.333313ZM77 38.6666C90.2404 38.6666 100 48.4186 100 61.6666C100 74.9146 90.2404 84.6666 77 84.6666C63.7674 84.6666 54 74.9146 54 61.6666C54 48.4186 63.7674 38.6666 77 38.6666ZM37.854 113.585C44.731 103.465 56.2004 96.7186 69.3334 96.7186H84.6667C97.8074 96.7186 109.269 103.465 116.146 113.585C106.348 124.073 92.4484 130.667 77 130.667C61.5517 130.667 47.652 124.073 37.854 113.585Z",
                                                fill: "#2E2929"
                                            })
                                        })
                                    }), Object(h.jsxs)("button", {
                                        className: k ? "hamb-btn active" : "hamb-btn",
                                        onClick: function() {
                                            T && E(!1), _(!k)
                                        },
                                        children: [Object(h.jsx)("span", {
                                            className: "hamb-line"
                                        }), Object(h.jsx)("span", {
                                            className: "hamb-line"
                                        }), Object(h.jsx)("span", {
                                            className: "hamb-line"
                                        })]
                                    })]
                                })]
                            })]
                        }, "navbar"), Object(h.jsx)(g, {
                            isOpen: k,
                            onClose: function() {
                                return _(!1)
                            },
                            pageData: s
                        }), Object(h.jsx)(m, {
                            isOpen: T,
                            onClose: function() {
                                return E(!1)
                            }
                        }), Object(h.jsx)(O, {
                            isOpen: M,
                            onClose: function() {
                                return z(!1)
                            },
                            onDisconnect: function() {
                                W(), d.a.success("Disconnected successfully", {
                                    style: {
                                        border: "1px solid #ccc",
                                        padding: "14px",
                                        color: "#713200",
                                        fontSize: "22px",
                                        fontFamily: "'PT Serif', serif"
                                    }
                                }), z(!1)
                            },
                            accountAddress: j
                        })]
                    })
                })),
                x = n(91),
                S = n(2),
                k = n(83),
                _ = n(279),
                N = n(652),
                C = function(e) {
                    var t = 0,
                        n = document.querySelectorAll("img[data-src]");
                    0 !== n.length ? Array.from(n).forEach((function(r) {
                        r.setAttribute("src", r.getAttribute("data-src") || ""), r.onload = function() {
                            var i = ++t / n.length;
                            r.classList.add("loaded"), 1 === i && e()
                        }
                    })) : e()
                };
            var T = Object(i.createContext)(null);

            function E(e) {
                var t = e.children,
                    n = e.pageClassName,
                    c = e.pageWrapperClassName,
                    l = e.pageQuery,
                    u = Object(s.g)(),
                    d = Object(i.useRef)(null),
                    p = function(e, t) {
                        var n = Object(i.useState)(!1),
                            r = Object(o.a)(n, 2),
                            a = r[0],
                            s = r[1],
                            c = Object(i.useState)(null),
                            l = Object(o.a)(c, 2),
                            u = l[0],
                            d = l[1],
                            p = Object(i.useState)(null),
                            f = Object(o.a)(p, 2),
                            h = f[0],
                            b = f[1],
                            m = Object(i.useState)(!0),
                            v = Object(o.a)(m, 2),
                            j = v[0],
                            g = v[1];
                        return Object(i.useEffect)((function() {
                            if (t) {
                                var e = function() {
                                    var e = Object(k.a)(Object(S.a)().mark((function e() {
                                        var n;
                                        return Object(S.a)().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return b(null), e.prev = 1, e.next = 4, N.a.post("https://ponzi-cms.xyz/graphql", {
                                                        query: t
                                                    });
                                                case 4:
                                                    n = e.sent, d(n.data.data), g(!1), e.next = 13;
                                                    break;
                                                case 9:
                                                    e.prev = 9, e.t0 = e.catch(1), b(e.t0), g(!1);
                                                case 13:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [1, 9]
                                        ])
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }();
                                e()
                            } else g(!1)
                        }), [t]), Object(i.useEffect)((function() {
                            if (!j) {
                                var t = localStorage.getItem("is-visited"),
                                    n = document.querySelector(".content");
                                ! function() {
                                    var r = _.a.timeline({});
                                    t ? (r.set(n, {
                                        y: "100%",
                                        rotate: "-360deg",
                                        scale: ".5",
                                        opacity: 1
                                    }), r.to(n, 1, {
                                        y: "50%",
                                        ease: "expo.inOut"
                                    }), r.to(n, 1.5, {
                                        y: "0",
                                        rotate: "0",
                                        scale: "1",
                                        ease: "expo.inOut"
                                    })) : (r.set(n, {
                                        opacity: 0
                                    }), r.to(n, 1, {
                                        opacity: 1,
                                        ease: "expo.inOut"
                                    }), localStorage.setItem("is-visited", "true")), r.call((function() {
                                        var t;
                                        s(!0), null === (t = e.current) || void 0 === t || t.classList.add("active")
                                    }))
                                }()
                            }
                        }), [e, j]), {
                            loaded: a,
                            loadImages: C,
                            isLoading: j,
                            data: u,
                            error: h
                        }
                    }(d, l),
                    f = p.isLoading,
                    b = p.data,
                    m = p.error,
                    v = null === u || void 0 === u ? void 0 : u.pathname.includes("/news/"),
                    j = null === u || void 0 === u ? void 0 : u.pathname.includes("/articles");
                return Object(i.useEffect)((function() {
                    Object(r.a)(document.querySelectorAll(".page-paper-bg img.paper-pic")).forEach((function(e, t) {
                        e.style.setProperty("--index", t)
                    }))
                })), f ? Object(h.jsx)(x.a, {}) : Object(h.jsxs)(h.Fragment, {
                    children: [Object(h.jsx)(w, {
                        ref: d,
                        showBackgroud: !v && !j,
                        pageData: b
                    }, "navbar"), Object(h.jsx)("div", {
                        className: "content",
                        style: {
                            opacity: 0
                        },
                        children: Object(h.jsxs)(a.a.div, {
                            style: {
                                transformOrigin: "center center"
                            },
                            className: "".concat(n, " page"),
                            exit: {
                                y: "-100%",
                                rotate: "360deg",
                                scale: .5
                            },
                            transition: {
                                scale: {
                                    duration: 1.5,
                                    ease: [.85, 0, .15, 1]
                                },
                                y: {
                                    duration: 1,
                                    delay: 1.5,
                                    ease: [.85, 0, .15, 1]
                                },
                                rotate: {
                                    duration: 1.5,
                                    ease: [.65, -.01, .32, 1]
                                }
                            },
                            children: [(v || j) && Object(h.jsx)("div", {
                                className: "paper-color-bg"
                            }), Object(h.jsxs)("div", {
                                className: "".concat(c, " page__wrapper"),
                                id: "scroll-container",
                                children: [Object(h.jsx)("div", {
                                    className: "paper-bg page-paper-bg ggg",
                                    style: {
                                        backgroundImage: "url('/paper-bg.png')",
                                        backgroundRepeat: "repeat"
                                    }
                                }), i.Children.map(t, (function(e) {
                                    return Object(h.jsx)(T.Provider, {
                                        value: {
                                            pageData: b,
                                            error: m
                                        },
                                        children: (!v || !j) && Object(h.jsx)(h.Fragment, {
                                            children: e
                                        })
                                    })
                                }))]
                            })]
                        })
                    })]
                })
            }
        },
        200: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return s
            }));
            var r = n(4),
                i = n(190),
                a = n(11);

            function s() {
                var e = Object(r.useContext)(i.a).pageData;
                return Object(r.useEffect)((function() {
                    var e = document.querySelector(".footer .footer-inner .infinite-box h1"),
                        t = e.getBoundingClientRect().width;
                    e.style.setProperty("--title-width", t + 25 + "px")
                }), []), Object(a.jsx)("footer", {
                    className: "footer",
                    children: Object(a.jsxs)("div", {
                        className: "footer-inner",
                        children: [Object(a.jsx)("div", {
                            className: "infinite-box",
                            children: Object(a.jsx)("h1", {
                                className: "medium-title",
                                children: e.home.data.attributes.marque_footer
                            })
                        }), Object(a.jsx)("div", {
                            className: "line"
                        }), Object(a.jsxs)("div", {
                            className: "footer-content",
                            children: [Object(a.jsx)("p", {
                                className: "paragraph",
                                children: "\xa9 The Ponzi\u2122 EST. 09/05/22"
                            }), Object(a.jsxs)("a", {
                                href: "twitterlink",
                                target: "_blank",
                                rel: "noreferrer",
                                className: "paragraph no-transition tweet-button",
                                children: [Object(a.jsx)("img", {
                                    src: "/twitter.svg",
                                    alt: "Twitter",
                                    className: "image"
                                }), "Tweet us"]
                            }), Object(a.jsx)("a", {
                                className: "paragraph credits no-transition",
                                href: "https://en.wikipedia.org/wiki/Charles_Ponzi",
                                target: "_blank",
                                rel: "noreferrer",
                                children: "credits"
                            })]
                        })]
                    })
                })
            }
        },
        209: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return i
            }));
            var r = n(11);

            function i(e) {
                var t = e.error;
                return Object(r.jsx)("div", {
                    className: "error__wrapper",
                    children: Object(r.jsxs)("div", {
                        className: "error__content__wrapper",
                        children: [Object(r.jsx)("figure", {
                            className: "error__media__wrapper",
                            children: Object(r.jsx)("img", {
                                className: "error__media",
                                src: "/error.png",
                                alt: "Illustration"
                            })
                        }), Object(r.jsx)("h2", {
                            className: "error__message title",
                            children: "Ooops! Something is terrible"
                        }), Object(r.jsx)("p", {
                            className: "error__description paragraph",
                            children: t.message
                        })]
                    })
                })
            }
        },
        230: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.checkSpecKeys = t.checkNavigable = t.changeSlide = t.canUseDOM = t.canGoNext = void 0, t.clamp = c, t.swipeStart = t.swipeMove = t.swipeEnd = t.slidesOnRight = t.slidesOnLeft = t.slideHandler = t.siblingDirection = t.safePreventDefault = t.lazyStartIndex = t.lazySlidesOnRight = t.lazySlidesOnLeft = t.lazyEndIndex = t.keyHandler = t.initializedState = t.getWidth = t.getTrackLeft = t.getTrackCSS = t.getTrackAnimateCSS = t.getTotalSlides = t.getSwipeDirection = t.getSlideCount = t.getRequiredLazySlides = t.getPreClones = t.getPostClones = t.getOnDemandLazySlides = t.getNavigableIndexes = t.getHeight = t.extractObject = void 0;
            var r, i = (r = n(4)) && r.__esModule ? r : {
                default: r
            };

            function a(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(n), !0).forEach((function(t) {
                        o(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function o(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function c(e, t, n) {
                return Math.max(t, Math.min(e, n))
            }
            var l = function(e) {
                ["onTouchStart", "onTouchMove", "onWheel"].includes(e._reactName) || e.preventDefault()
            };
            t.safePreventDefault = l;
            var u = function(e) {
                for (var t = [], n = d(e), r = p(e), i = n; i < r; i++) e.lazyLoadedList.indexOf(i) < 0 && t.push(i);
                return t
            };
            t.getOnDemandLazySlides = u;
            t.getRequiredLazySlides = function(e) {
                for (var t = [], n = d(e), r = p(e), i = n; i < r; i++) t.push(i);
                return t
            };
            var d = function(e) {
                return e.currentSlide - f(e)
            };
            t.lazyStartIndex = d;
            var p = function(e) {
                return e.currentSlide + h(e)
            };
            t.lazyEndIndex = p;
            var f = function(e) {
                return e.centerMode ? Math.floor(e.slidesToShow / 2) + (parseInt(e.centerPadding) > 0 ? 1 : 0) : 0
            };
            t.lazySlidesOnLeft = f;
            var h = function(e) {
                return e.centerMode ? Math.floor((e.slidesToShow - 1) / 2) + 1 + (parseInt(e.centerPadding) > 0 ? 1 : 0) : e.slidesToShow
            };
            t.lazySlidesOnRight = h;
            var b = function(e) {
                return e && e.offsetWidth || 0
            };
            t.getWidth = b;
            var m = function(e) {
                return e && e.offsetHeight || 0
            };
            t.getHeight = m;
            var v = function(e) {
                var t, n, r, i, a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return t = e.startX - e.curX, n = e.startY - e.curY, r = Math.atan2(n, t), (i = Math.round(180 * r / Math.PI)) < 0 && (i = 360 - Math.abs(i)), i <= 45 && i >= 0 || i <= 360 && i >= 315 ? "left" : i >= 135 && i <= 225 ? "right" : !0 === a ? i >= 35 && i <= 135 ? "up" : "down" : "vertical"
            };
            t.getSwipeDirection = v;
            var j = function(e) {
                var t = !0;
                return e.infinite || (e.centerMode && e.currentSlide >= e.slideCount - 1 || e.slideCount <= e.slidesToShow || e.currentSlide >= e.slideCount - e.slidesToShow) && (t = !1), t
            };
            t.canGoNext = j;
            t.extractObject = function(e, t) {
                var n = {};
                return t.forEach((function(t) {
                    return n[t] = e[t]
                })), n
            };
            t.initializedState = function(e) {
                var t, n = i.default.Children.count(e.children),
                    r = e.listRef,
                    a = Math.ceil(b(r)),
                    o = e.trackRef && e.trackRef.node,
                    c = Math.ceil(b(o));
                if (e.vertical) t = a;
                else {
                    var l = e.centerMode && 2 * parseInt(e.centerPadding);
                    "string" === typeof e.centerPadding && "%" === e.centerPadding.slice(-1) && (l *= a / 100), t = Math.ceil((a - l) / e.slidesToShow)
                }
                var d = r && m(r.querySelector('[data-index="0"]')),
                    p = d * e.slidesToShow,
                    f = void 0 === e.currentSlide ? e.initialSlide : e.currentSlide;
                e.rtl && void 0 === e.currentSlide && (f = n - 1 - e.initialSlide);
                var h = e.lazyLoadedList || [],
                    v = u(s(s({}, e), {}, {
                        currentSlide: f,
                        lazyLoadedList: h
                    })),
                    j = {
                        slideCount: n,
                        slideWidth: t,
                        listWidth: a,
                        trackWidth: c,
                        currentSlide: f,
                        slideHeight: d,
                        listHeight: p,
                        lazyLoadedList: h = h.concat(v)
                    };
                return null === e.autoplaying && e.autoplay && (j.autoplaying = "playing"), j
            };
            t.slideHandler = function(e) {
                var t = e.waitForAnimate,
                    n = e.animating,
                    r = e.fade,
                    i = e.infinite,
                    a = e.index,
                    o = e.slideCount,
                    l = e.lazyLoad,
                    d = e.currentSlide,
                    p = e.centerMode,
                    f = e.slidesToScroll,
                    h = e.slidesToShow,
                    b = e.useCSS,
                    m = e.lazyLoadedList;
                if (t && n) return {};
                var v, g, y, O = a,
                    w = {},
                    _ = {},
                    N = i ? a : c(a, 0, o - 1);
                if (r) {
                    if (!i && (a < 0 || a >= o)) return {};
                    a < 0 ? O = a + o : a >= o && (O = a - o), l && m.indexOf(O) < 0 && (m = m.concat(O)), w = {
                        animating: !0,
                        currentSlide: O,
                        lazyLoadedList: m,
                        targetSlide: O
                    }, _ = {
                        animating: !1,
                        targetSlide: O
                    }
                } else v = O, O < 0 ? (v = O + o, i ? o % f !== 0 && (v = o - o % f) : v = 0) : !j(e) && O > d ? O = v = d : p && O >= o ? (O = i ? o : o - 1, v = i ? 0 : o - 1) : O >= o && (v = O - o, i ? o % f !== 0 && (v = 0) : v = o - h), !i && O + h >= o && (v = o - h), g = k(s(s({}, e), {}, {
                    slideIndex: O
                })), y = k(s(s({}, e), {}, {
                    slideIndex: v
                })), i || (g === y && (O = v), g = y), l && (m = m.concat(u(s(s({}, e), {}, {
                    currentSlide: O
                })))), b ? (w = {
                    animating: !0,
                    currentSlide: v,
                    trackStyle: S(s(s({}, e), {}, {
                        left: g
                    })),
                    lazyLoadedList: m,
                    targetSlide: N
                }, _ = {
                    animating: !1,
                    currentSlide: v,
                    trackStyle: x(s(s({}, e), {}, {
                        left: y
                    })),
                    swipeLeft: null,
                    targetSlide: N
                }) : w = {
                    currentSlide: v,
                    trackStyle: x(s(s({}, e), {}, {
                        left: y
                    })),
                    lazyLoadedList: m,
                    targetSlide: N
                };
                return {
                    state: w,
                    nextState: _
                }
            };
            t.changeSlide = function(e, t) {
                var n, r, i, a, o = e.slidesToScroll,
                    c = e.slidesToShow,
                    l = e.slideCount,
                    u = e.currentSlide,
                    d = e.targetSlide,
                    p = e.lazyLoad,
                    f = e.infinite;
                if (n = l % o !== 0 ? 0 : (l - u) % o, "previous" === t.message) a = u - (i = 0 === n ? o : c - n), p && !f && (a = -1 === (r = u - i) ? l - 1 : r), f || (a = d - o);
                else if ("next" === t.message) a = u + (i = 0 === n ? o : n), p && !f && (a = (u + o) % l + n), f || (a = d + o);
                else if ("dots" === t.message) a = t.index * t.slidesToScroll;
                else if ("children" === t.message) {
                    if (a = t.index, f) {
                        var h = T(s(s({}, e), {}, {
                            targetSlide: a
                        }));
                        a > t.currentSlide && "left" === h ? a -= l : a < t.currentSlide && "right" === h && (a += l)
                    }
                } else "index" === t.message && (a = Number(t.index));
                return a
            };
            t.keyHandler = function(e, t, n) {
                return e.target.tagName.match("TEXTAREA|INPUT|SELECT") || !t ? "" : 37 === e.keyCode ? n ? "next" : "previous" : 39 === e.keyCode ? n ? "previous" : "next" : ""
            };
            t.swipeStart = function(e, t, n) {
                return "IMG" === e.target.tagName && l(e), !t || !n && -1 !== e.type.indexOf("mouse") ? "" : {
                    dragging: !0,
                    touchObject: {
                        startX: e.touches ? e.touches[0].pageX : e.clientX,
                        startY: e.touches ? e.touches[0].pageY : e.clientY,
                        curX: e.touches ? e.touches[0].pageX : e.clientX,
                        curY: e.touches ? e.touches[0].pageY : e.clientY
                    }
                }
            };
            t.swipeMove = function(e, t) {
                var n = t.scrolling,
                    r = t.animating,
                    i = t.vertical,
                    a = t.swipeToSlide,
                    o = t.verticalSwiping,
                    c = t.rtl,
                    u = t.currentSlide,
                    d = t.edgeFriction,
                    p = t.edgeDragged,
                    f = t.onEdge,
                    h = t.swiped,
                    b = t.swiping,
                    m = t.slideCount,
                    g = t.slidesToScroll,
                    y = t.infinite,
                    O = t.touchObject,
                    w = t.swipeEvent,
                    S = t.listHeight,
                    _ = t.listWidth;
                if (!n) {
                    if (r) return l(e);
                    i && a && o && l(e);
                    var N, C = {},
                        T = k(t);
                    O.curX = e.touches ? e.touches[0].pageX : e.clientX, O.curY = e.touches ? e.touches[0].pageY : e.clientY, O.swipeLength = Math.round(Math.sqrt(Math.pow(O.curX - O.startX, 2)));
                    var E = Math.round(Math.sqrt(Math.pow(O.curY - O.startY, 2)));
                    if (!o && !b && E > 10) return {
                        scrolling: !0
                    };
                    o && (O.swipeLength = E);
                    var P = (c ? -1 : 1) * (O.curX > O.startX ? 1 : -1);
                    o && (P = O.curY > O.startY ? 1 : -1);
                    var L = Math.ceil(m / g),
                        M = v(t.touchObject, o),
                        z = O.swipeLength;
                    return y || (0 === u && ("right" === M || "down" === M) || u + 1 >= L && ("left" === M || "up" === M) || !j(t) && ("left" === M || "up" === M)) && (z = O.swipeLength * d, !1 === p && f && (f(M), C.edgeDragged = !0)), !h && w && (w(M), C.swiped = !0), N = i ? T + z * (S / _) * P : c ? T - z * P : T + z * P, o && (N = T + z * P), C = s(s({}, C), {}, {
                        touchObject: O,
                        swipeLeft: N,
                        trackStyle: x(s(s({}, t), {}, {
                            left: N
                        }))
                    }), Math.abs(O.curX - O.startX) < .8 * Math.abs(O.curY - O.startY) ? C : (O.swipeLength > 10 && (C.swiping = !0, l(e)), C)
                }
            };
            t.swipeEnd = function(e, t) {
                var n = t.dragging,
                    r = t.swipe,
                    i = t.touchObject,
                    a = t.listWidth,
                    o = t.touchThreshold,
                    c = t.verticalSwiping,
                    u = t.listHeight,
                    d = t.swipeToSlide,
                    p = t.scrolling,
                    f = t.onSwipe,
                    h = t.targetSlide,
                    b = t.currentSlide,
                    m = t.infinite;
                if (!n) return r && l(e), {};
                var j = c ? u / o : a / o,
                    g = v(i, c),
                    w = {
                        dragging: !1,
                        edgeDragged: !1,
                        scrolling: !1,
                        swiping: !1,
                        swiped: !1,
                        swipeLeft: null,
                        touchObject: {}
                    };
                if (p) return w;
                if (!i.swipeLength) return w;
                if (i.swipeLength > j) {
                    var x, _;
                    l(e), f && f(g);
                    var N = m ? b : h;
                    switch (g) {
                        case "left":
                        case "up":
                            _ = N + O(t), x = d ? y(t, _) : _, w.currentDirection = 0;
                            break;
                        case "right":
                        case "down":
                            _ = N - O(t), x = d ? y(t, _) : _, w.currentDirection = 1;
                            break;
                        default:
                            x = N
                    }
                    w.triggerSlideHandler = x
                } else {
                    var C = k(t);
                    w.trackStyle = S(s(s({}, t), {}, {
                        left: C
                    }))
                }
                return w
            };
            var g = function(e) {
                for (var t = e.infinite ? 2 * e.slideCount : e.slideCount, n = e.infinite ? -1 * e.slidesToShow : 0, r = e.infinite ? -1 * e.slidesToShow : 0, i = []; n < t;) i.push(n), n = r + e.slidesToScroll, r += Math.min(e.slidesToScroll, e.slidesToShow);
                return i
            };
            t.getNavigableIndexes = g;
            var y = function(e, t) {
                var n = g(e),
                    r = 0;
                if (t > n[n.length - 1]) t = n[n.length - 1];
                else
                    for (var i in n) {
                        if (t < n[i]) {
                            t = r;
                            break
                        }
                        r = n[i]
                    }
                return t
            };
            t.checkNavigable = y;
            var O = function(e) {
                var t = e.centerMode ? e.slideWidth * Math.floor(e.slidesToShow / 2) : 0;
                if (e.swipeToSlide) {
                    var n, r = e.listRef,
                        i = r.querySelectorAll && r.querySelectorAll(".slick-slide") || [];
                    if (Array.from(i).every((function(r) {
                            if (e.vertical) {
                                if (r.offsetTop + m(r) / 2 > -1 * e.swipeLeft) return n = r, !1
                            } else if (r.offsetLeft - t + b(r) / 2 > -1 * e.swipeLeft) return n = r, !1;
                            return !0
                        })), !n) return 0;
                    var a = !0 === e.rtl ? e.slideCount - e.currentSlide : e.currentSlide;
                    return Math.abs(n.dataset.index - a) || 1
                }
                return e.slidesToScroll
            };
            t.getSlideCount = O;
            var w = function(e, t) {
                return t.reduce((function(t, n) {
                    return t && e.hasOwnProperty(n)
                }), !0) ? null : console.error("Keys Missing:", e)
            };
            t.checkSpecKeys = w;
            var x = function(e) {
                var t, n;
                w(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth"]);
                var r = e.slideCount + 2 * e.slidesToShow;
                e.vertical ? n = r * e.slideHeight : t = C(e) * e.slideWidth;
                var i = {
                    opacity: 1,
                    transition: "",
                    WebkitTransition: ""
                };
                if (e.useTransform) {
                    var a = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                        o = e.vertical ? "translate3d(0px, " + e.left + "px, 0px)" : "translate3d(" + e.left + "px, 0px, 0px)",
                        c = e.vertical ? "translateY(" + e.left + "px)" : "translateX(" + e.left + "px)";
                    i = s(s({}, i), {}, {
                        WebkitTransform: a,
                        transform: o,
                        msTransform: c
                    })
                } else e.vertical ? i.top = e.left : i.left = e.left;
                return e.fade && (i = {
                    opacity: 1
                }), t && (i.width = t), n && (i.height = n), window && !window.addEventListener && window.attachEvent && (e.vertical ? i.marginTop = e.left + "px" : i.marginLeft = e.left + "px"), i
            };
            t.getTrackCSS = x;
            var S = function(e) {
                w(e, ["left", "variableWidth", "slideCount", "slidesToShow", "slideWidth", "speed", "cssEase"]);
                var t = x(e);
                return e.useTransform ? (t.WebkitTransition = "-webkit-transform " + e.speed + "ms " + e.cssEase, t.transition = "transform " + e.speed + "ms " + e.cssEase) : e.vertical ? t.transition = "top " + e.speed + "ms " + e.cssEase : t.transition = "left " + e.speed + "ms " + e.cssEase, t
            };
            t.getTrackAnimateCSS = S;
            var k = function(e) {
                if (e.unslick) return 0;
                w(e, ["slideIndex", "trackRef", "infinite", "centerMode", "slideCount", "slidesToShow", "slidesToScroll", "slideWidth", "listWidth", "variableWidth", "slideHeight"]);
                var t, n, r = e.slideIndex,
                    i = e.trackRef,
                    a = e.infinite,
                    s = e.centerMode,
                    o = e.slideCount,
                    c = e.slidesToShow,
                    l = e.slidesToScroll,
                    u = e.slideWidth,
                    d = e.listWidth,
                    p = e.variableWidth,
                    f = e.slideHeight,
                    h = e.fade,
                    b = e.vertical;
                if (h || 1 === e.slideCount) return 0;
                var m = 0;
                if (a ? (m = -_(e), o % l !== 0 && r + l > o && (m = -(r > o ? c - (r - o) : o % l)), s && (m += parseInt(c / 2))) : (o % l !== 0 && r + l > o && (m = c - o % l), s && (m = parseInt(c / 2))), t = b ? r * f * -1 + m * f : r * u * -1 + m * u, !0 === p) {
                    var v, j = i && i.node;
                    if (v = r + _(e), t = (n = j && j.childNodes[v]) ? -1 * n.offsetLeft : 0, !0 === s) {
                        v = a ? r + _(e) : r, n = j && j.children[v], t = 0;
                        for (var g = 0; g < v; g++) t -= j && j.children[g] && j.children[g].offsetWidth;
                        t -= parseInt(e.centerPadding), t += n && (d - n.offsetWidth) / 2
                    }
                }
                return t
            };
            t.getTrackLeft = k;
            var _ = function(e) {
                return e.unslick || !e.infinite ? 0 : e.variableWidth ? e.slideCount : e.slidesToShow + (e.centerMode ? 1 : 0)
            };
            t.getPreClones = _;
            var N = function(e) {
                return e.unslick || !e.infinite ? 0 : e.slideCount
            };
            t.getPostClones = N;
            var C = function(e) {
                return 1 === e.slideCount ? 1 : _(e) + e.slideCount + N(e)
            };
            t.getTotalSlides = C;
            var T = function(e) {
                return e.targetSlide > e.currentSlide ? e.targetSlide > e.currentSlide + E(e) ? "left" : "right" : e.targetSlide < e.currentSlide - P(e) ? "right" : "left"
            };
            t.siblingDirection = T;
            var E = function(e) {
                var t = e.slidesToShow,
                    n = e.centerMode,
                    r = e.rtl,
                    i = e.centerPadding;
                if (n) {
                    var a = (t - 1) / 2 + 1;
                    return parseInt(i) > 0 && (a += 1), r && t % 2 === 0 && (a += 1), a
                }
                return r ? 0 : t - 1
            };
            t.slidesOnRight = E;
            var P = function(e) {
                var t = e.slidesToShow,
                    n = e.centerMode,
                    r = e.rtl,
                    i = e.centerPadding;
                if (n) {
                    var a = (t - 1) / 2 + 1;
                    return parseInt(i) > 0 && (a += 1), r || t % 2 !== 0 || (a += 1), a
                }
                return r ? t - 1 : 0
            };
            t.slidesOnLeft = P;
            t.canUseDOM = function() {
                return !("undefined" === typeof window || !window.document || !window.document.createElement)
            }
        },
        231: function(e, t, n) {
            "use strict";
            n.d(t, "d", (function() {
                return s
            })), n.d(t, "b", (function() {
                return o
            })), n.d(t, "a", (function() {
                return c
            })), n.d(t, "c", (function() {
                return l
            }));
            var r = n(2),
                i = n(83),
                a = n(29),
                s = function() {
                    var e = Object(i.a)(Object(r.a)().mark((function e(t) {
                        var n, i, s, o;
                        return Object(r.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, !(t && t.length > 0)) {
                                        e.next = 12;
                                        break
                                    }
                                    return n = "".concat(a.a, "/tokenIds/").concat(t), e.next = 5, fetch(n);
                                case 5:
                                    if (200 !== (i = e.sent).status) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 9, i.json();
                                case 9:
                                    return s = e.sent, o = s, e.abrupt("return", o);
                                case 12:
                                    e.next = 17;
                                    break;
                                case 14:
                                    e.prev = 14, e.t0 = e.catch(0), console.error("Unable to fetch data:", e.t0);
                                case 17:
                                    return e.abrupt("return", null);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 14]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                o = function() {
                    var e = Object(i.a)(Object(r.a)().mark((function e(t, n, i, s, o, c) {
                        var l, u, d, p;
                        return Object(r.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (e.prev = 0, !(t && t.length > 0)) {
                                        e.next = 12;
                                        break
                                    }
                                    return l = "".concat(a.a, "/items/").concat(t, "?start=").concat(n, "&limit=").concat(i, "&sortField=").concat(s, "&sortOrder=").concat(o, "&listed=").concat(c), e.next = 5, fetch(l);
                                case 5:
                                    if (200 !== (u = e.sent).status) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.next = 9, u.json();
                                case 9:
                                    return d = e.sent, p = d, e.abrupt("return", p);
                                case 12:
                                    e.next = 17;
                                    break;
                                case 14:
                                    e.prev = 14, e.t0 = e.catch(0), console.error("Unable to fetch data:", e.t0);
                                case 17:
                                    return e.abrupt("return", null);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 14]
                        ])
                    })));
                    return function(t, n, r, i, a, s) {
                        return e.apply(this, arguments)
                    }
                }(),
                c = function() {
                    var e = Object(i.a)(Object(r.a)().mark((function e(t, n, i, s, o) {
                        var c, l, u, d;
                        return Object(r.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, c = "".concat(a.a, "/items?start=").concat(t, "&limit=").concat(n, "&sortField=").concat(i, "&sortOrder=").concat(s, "&listed=").concat(o), e.next = 4, fetch(c);
                                case 4:
                                    if (200 !== (l = e.sent).status) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 8, l.json();
                                case 8:
                                    return u = e.sent, d = u, e.abrupt("return", d);
                                case 11:
                                    e.next = 16;
                                    break;
                                case 13:
                                    e.prev = 13, e.t0 = e.catch(0), console.error("Unable to fetch data:", e.t0);
                                case 16:
                                    return e.abrupt("return", null);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 13]
                        ])
                    })));
                    return function(t, n, r, i, a) {
                        return e.apply(this, arguments)
                    }
                }(),
                l = function() {
                    var e = Object(i.a)(Object(r.a)().mark((function e() {
                        var t, n, i, s;
                        return Object(r.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, t = "".concat(a.a, "/marketStatus"), e.next = 4, fetch(t);
                                case 4:
                                    if (200 !== (n = e.sent).status) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 8, n.json();
                                case 8:
                                    return i = e.sent, s = i, e.abrupt("return", s);
                                case 11:
                                    e.next = 16;
                                    break;
                                case 13:
                                    e.prev = 13, e.t0 = e.catch(0), console.error("Unable to fetch data:", e.t0);
                                case 16:
                                    return e.abrupt("return", null);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 13]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        252: function(e, t, n) {
            var r;
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function i() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        if (r) {
                            var a = typeof r;
                            if ("string" === a || "number" === a) e.push(r);
                            else if (Array.isArray(r)) {
                                if (r.length) {
                                    var s = i.apply(null, r);
                                    s && e.push(s)
                                }
                            } else if ("object" === a) {
                                if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
                                    e.push(r.toString());
                                    continue
                                }
                                for (var o in r) n.call(r, o) && r[o] && e.push(o)
                            }
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (i.default = i, e.exports = i) : void 0 === (r = function() {
                    return i
                }.apply(t, [])) || (e.exports = r)
            }()
        },
        284: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n(346),
                i = n(11);

            function a(e) {
                var t = e.src,
                    n = e.alt,
                    a = e.className,
                    s = e.wrapperClassName;
                return Object(i.jsx)(r.LazyLoadImage, {
                    src: t,
                    alt: n,
                    effect: "blur",
                    className: a,
                    wrapperClassName: s
                })
            }
        },
        285: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return r
            }));
            var r = function() {
                return "\n  query Footer {\n    home {\n        data {\n            attributes {\n                marque_footer\n                hamburger_image{\n                    data{\n                      attributes{\n                        name\n                        url\n                        alternativeText\n                      }\n                    }\n                  }\n            }\n        }\n    }\n  }\n"
            };
            t.a = function() {
                return '\nquery Home {\n    home {\n      data {\n        attributes {\n            Announcement {\n                Announcement\n                Announcement_title\n            }\n            banner_article{\n                article_title\n                article_image{\n                  image{\n                    data{\n                      attributes{\n                        name\n                        url\n                        alternativeText\n                      }\n                    }\n                  }\n                  mobile_image{\n                    data{\n                      attributes{\n                        name\n                        url\n                        alternativeText\n                      }\n                    }\n                  }\n                }\n                article_text\n              }\n              hamburger_image{\n                data{\n                  attributes{\n                    name\n                    url\n                    alternativeText\n                  }\n                }\n              }\n              min_ponzi_section{\n                mint_ponzi_text\n                mint_ponzi_error_text\n              }\n          marque_title\n          marque_footer\n          home_banner_title {\n            banner_title\n          }\n          Marketplace {\n            title\n            description\n            link\n          }\n          Article {\n            id\n            Title\n            Content\n            Image {\n              data {\n                attributes {\n                  alternativeText\n                  url\n                }\n              }\n            }\n            image_mobile{\n                data {\n                    attributes {\n                        alternativeText\n                        url\n                    }\n                }\n            }\n          }\n        }\n      }\n    }\n    blogs(pagination:{ page: 0, pageSize: 3}, sort:"publishedAt:desc") {\n      data {\n        id\n        attributes {\n          Title\n          Content\n          createdAt\n        }\n      }\n    }\n  }\n'
            }
        },
        345: function(e, t) {
            e.exports = {
                isFunction: function(e) {
                    return "function" === typeof e
                },
                isArray: function(e) {
                    return "[object Array]" === Object.prototype.toString.apply(e)
                },
                each: function(e, t) {
                    for (var n = 0, r = e.length; n < r && !1 !== t(e[n], n); n++);
                }
            }
        },
        422: function(e, t, n) {
            "use strict";
            var r;
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = ((r = n(423)) && r.__esModule ? r : {
                default: r
            }).default;
            t.default = i
        },
        423: function(e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var i = l(n(4)),
                a = n(424),
                s = l(n(431)),
                o = l(n(433)),
                c = n(230);

            function l(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function u() {
                return u = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, u.apply(this, arguments)
            }

            function d(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? d(Object(n), !0).forEach((function(t) {
                        g(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : d(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function h(e, t) {
                return h = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, h(e, t)
            }

            function b(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = j(e);
                    if (t) {
                        var i = j(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return m(this, n)
                }
            }

            function m(e, t) {
                if (t && ("object" === r(t) || "function" === typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return v(e)
            }

            function v(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function j(e) {
                return j = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, j(e)
            }

            function g(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var y = (0, c.canUseDOM)() && n(434),
                O = function(e) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && h(e, t)
                    }(d, e);
                    var t, n, r, l = b(d);

                    function d(e) {
                        var t;
                        return function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, d), g(v(t = l.call(this, e)), "innerSliderRefHandler", (function(e) {
                            return t.innerSlider = e
                        })), g(v(t), "slickPrev", (function() {
                            return t.innerSlider.slickPrev()
                        })), g(v(t), "slickNext", (function() {
                            return t.innerSlider.slickNext()
                        })), g(v(t), "slickGoTo", (function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            return t.innerSlider.slickGoTo(e, n)
                        })), g(v(t), "slickPause", (function() {
                            return t.innerSlider.pause("paused")
                        })), g(v(t), "slickPlay", (function() {
                            return t.innerSlider.autoPlay("play")
                        })), t.state = {
                            breakpoint: null
                        }, t._responsiveMediaHandlers = [], t
                    }
                    return t = d, (n = [{
                        key: "media",
                        value: function(e, t) {
                            y.register(e, t), this._responsiveMediaHandlers.push({
                                query: e,
                                handler: t
                            })
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this;
                            if (this.props.responsive) {
                                var t = this.props.responsive.map((function(e) {
                                    return e.breakpoint
                                }));
                                t.sort((function(e, t) {
                                    return e - t
                                })), t.forEach((function(n, r) {
                                    var i;
                                    i = 0 === r ? (0, s.default)({
                                        minWidth: 0,
                                        maxWidth: n
                                    }) : (0, s.default)({
                                        minWidth: t[r - 1] + 1,
                                        maxWidth: n
                                    }), (0, c.canUseDOM)() && e.media(i, (function() {
                                        e.setState({
                                            breakpoint: n
                                        })
                                    }))
                                }));
                                var n = (0, s.default)({
                                    minWidth: t.slice(-1)[0]
                                });
                                (0, c.canUseDOM)() && this.media(n, (function() {
                                    e.setState({
                                        breakpoint: null
                                    })
                                }))
                            }
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._responsiveMediaHandlers.forEach((function(e) {
                                y.unregister(e.query, e.handler)
                            }))
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, t, n = this;
                            (e = this.state.breakpoint ? "unslick" === (t = this.props.responsive.filter((function(e) {
                                return e.breakpoint === n.state.breakpoint
                            })))[0].settings ? "unslick" : p(p(p({}, o.default), this.props), t[0].settings) : p(p({}, o.default), this.props)).centerMode && (e.slidesToScroll, e.slidesToScroll = 1), e.fade && (e.slidesToShow, e.slidesToScroll, e.slidesToShow = 1, e.slidesToScroll = 1);
                            var r = i.default.Children.toArray(this.props.children);
                            r = r.filter((function(e) {
                                return "string" === typeof e ? !!e.trim() : !!e
                            })), e.variableWidth && (e.rows > 1 || e.slidesPerRow > 1) && (console.warn("variableWidth is not supported in case of rows > 1 or slidesPerRow > 1"), e.variableWidth = !1);
                            for (var s = [], c = null, l = 0; l < r.length; l += e.rows * e.slidesPerRow) {
                                for (var d = [], f = l; f < l + e.rows * e.slidesPerRow; f += e.slidesPerRow) {
                                    for (var h = [], b = f; b < f + e.slidesPerRow && (e.variableWidth && r[b].props.style && (c = r[b].props.style.width), !(b >= r.length)); b += 1) h.push(i.default.cloneElement(r[b], {
                                        key: 100 * l + 10 * f + b,
                                        tabIndex: -1,
                                        style: {
                                            width: "".concat(100 / e.slidesPerRow, "%"),
                                            display: "inline-block"
                                        }
                                    }));
                                    d.push(i.default.createElement("div", {
                                        key: 10 * l + f
                                    }, h))
                                }
                                e.variableWidth ? s.push(i.default.createElement("div", {
                                    key: l,
                                    style: {
                                        width: c
                                    }
                                }, d)) : s.push(i.default.createElement("div", {
                                    key: l
                                }, d))
                            }
                            if ("unslick" === e) {
                                var m = "regular slider " + (this.props.className || "");
                                return i.default.createElement("div", {
                                    className: m
                                }, r)
                            }
                            return s.length <= e.slidesToShow && (e.unslick = !0), i.default.createElement(a.InnerSlider, u({
                                style: this.props.style,
                                ref: this.innerSliderRefHandler
                            }, e), s)
                        }
                    }]) && f(t.prototype, n), r && f(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), d
                }(i.default.Component);
            t.default = O
        },
        424: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.InnerSlider = void 0;
            var r = p(n(4)),
                i = p(n(425)),
                a = p(n(426)),
                s = p(n(252)),
                o = n(230),
                c = n(427),
                l = n(428),
                u = n(429),
                d = p(n(430));

            function p(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function f(e) {
                return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, f(e)
            }

            function h() {
                return h = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, h.apply(this, arguments)
            }

            function b(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        a = Object.keys(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        S(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function j(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function g(e, t) {
                return g = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, g(e, t)
            }

            function y(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = x(e);
                    if (t) {
                        var i = x(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return O(this, n)
                }
            }

            function O(e, t) {
                if (t && ("object" === f(t) || "function" === typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return w(e)
            }

            function w(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function x(e) {
                return x = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, x(e)
            }

            function S(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var k = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && g(e, t)
                }(O, e);
                var t, n, p, m = y(O);

                function O(e) {
                    var t;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, O), S(w(t = m.call(this, e)), "listRefHandler", (function(e) {
                        return t.list = e
                    })), S(w(t), "trackRefHandler", (function(e) {
                        return t.track = e
                    })), S(w(t), "adaptHeight", (function() {
                        if (t.props.adaptiveHeight && t.list) {
                            var e = t.list.querySelector('[data-index="'.concat(t.state.currentSlide, '"]'));
                            t.list.style.height = (0, o.getHeight)(e) + "px"
                        }
                    })), S(w(t), "componentDidMount", (function() {
                        if (t.props.onInit && t.props.onInit(), t.props.lazyLoad) {
                            var e = (0, o.getOnDemandLazySlides)(v(v({}, t.props), t.state));
                            e.length > 0 && (t.setState((function(t) {
                                return {
                                    lazyLoadedList: t.lazyLoadedList.concat(e)
                                }
                            })), t.props.onLazyLoad && t.props.onLazyLoad(e))
                        }
                        var n = v({
                            listRef: t.list,
                            trackRef: t.track
                        }, t.props);
                        t.updateState(n, !0, (function() {
                            t.adaptHeight(), t.props.autoplay && t.autoPlay("update")
                        })), "progressive" === t.props.lazyLoad && (t.lazyLoadTimer = setInterval(t.progressiveLazyLoad, 1e3)), t.ro = new d.default((function() {
                            t.state.animating ? (t.onWindowResized(!1), t.callbackTimers.push(setTimeout((function() {
                                return t.onWindowResized()
                            }), t.props.speed))) : t.onWindowResized()
                        })), t.ro.observe(t.list), document.querySelectorAll && Array.prototype.forEach.call(document.querySelectorAll(".slick-slide"), (function(e) {
                            e.onfocus = t.props.pauseOnFocus ? t.onSlideFocus : null, e.onblur = t.props.pauseOnFocus ? t.onSlideBlur : null
                        })), window.addEventListener ? window.addEventListener("resize", t.onWindowResized) : window.attachEvent("onresize", t.onWindowResized)
                    })), S(w(t), "componentWillUnmount", (function() {
                        t.animationEndCallback && clearTimeout(t.animationEndCallback), t.lazyLoadTimer && clearInterval(t.lazyLoadTimer), t.callbackTimers.length && (t.callbackTimers.forEach((function(e) {
                            return clearTimeout(e)
                        })), t.callbackTimers = []), window.addEventListener ? window.removeEventListener("resize", t.onWindowResized) : window.detachEvent("onresize", t.onWindowResized), t.autoplayTimer && clearInterval(t.autoplayTimer), t.ro.disconnect()
                    })), S(w(t), "componentDidUpdate", (function(e) {
                        if (t.checkImagesLoad(), t.props.onReInit && t.props.onReInit(), t.props.lazyLoad) {
                            var n = (0, o.getOnDemandLazySlides)(v(v({}, t.props), t.state));
                            n.length > 0 && (t.setState((function(e) {
                                return {
                                    lazyLoadedList: e.lazyLoadedList.concat(n)
                                }
                            })), t.props.onLazyLoad && t.props.onLazyLoad(n))
                        }
                        t.adaptHeight();
                        var i = v(v({
                                listRef: t.list,
                                trackRef: t.track
                            }, t.props), t.state),
                            a = t.didPropsChange(e);
                        a && t.updateState(i, a, (function() {
                            t.state.currentSlide >= r.default.Children.count(t.props.children) && t.changeSlide({
                                message: "index",
                                index: r.default.Children.count(t.props.children) - t.props.slidesToShow,
                                currentSlide: t.state.currentSlide
                            }), t.props.autoplay ? t.autoPlay("update") : t.pause("paused")
                        }))
                    })), S(w(t), "onWindowResized", (function(e) {
                        t.debouncedResize && t.debouncedResize.cancel(), t.debouncedResize = (0, a.default)((function() {
                            return t.resizeWindow(e)
                        }), 50), t.debouncedResize()
                    })), S(w(t), "resizeWindow", (function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            n = Boolean(t.track && t.track.node);
                        if (n) {
                            var r = v(v({
                                listRef: t.list,
                                trackRef: t.track
                            }, t.props), t.state);
                            t.updateState(r, e, (function() {
                                t.props.autoplay ? t.autoPlay("update") : t.pause("paused")
                            })), t.setState({
                                animating: !1
                            }), clearTimeout(t.animationEndCallback), delete t.animationEndCallback
                        }
                    })), S(w(t), "updateState", (function(e, n, i) {
                        var a = (0, o.initializedState)(e);
                        e = v(v(v({}, e), a), {}, {
                            slideIndex: a.currentSlide
                        });
                        var s = (0, o.getTrackLeft)(e);
                        e = v(v({}, e), {}, {
                            left: s
                        });
                        var c = (0, o.getTrackCSS)(e);
                        (n || r.default.Children.count(t.props.children) !== r.default.Children.count(e.children)) && (a.trackStyle = c), t.setState(a, i)
                    })), S(w(t), "ssrInit", (function() {
                        if (t.props.variableWidth) {
                            var e = 0,
                                n = 0,
                                i = [],
                                a = (0, o.getPreClones)(v(v(v({}, t.props), t.state), {}, {
                                    slideCount: t.props.children.length
                                })),
                                s = (0, o.getPostClones)(v(v(v({}, t.props), t.state), {}, {
                                    slideCount: t.props.children.length
                                }));
                            t.props.children.forEach((function(t) {
                                i.push(t.props.style.width), e += t.props.style.width
                            }));
                            for (var c = 0; c < a; c++) n += i[i.length - 1 - c], e += i[i.length - 1 - c];
                            for (var l = 0; l < s; l++) e += i[l];
                            for (var u = 0; u < t.state.currentSlide; u++) n += i[u];
                            var d = {
                                width: e + "px",
                                left: -n + "px"
                            };
                            if (t.props.centerMode) {
                                var p = "".concat(i[t.state.currentSlide], "px");
                                d.left = "calc(".concat(d.left, " + (100% - ").concat(p, ") / 2 ) ")
                            }
                            return {
                                trackStyle: d
                            }
                        }
                        var f = r.default.Children.count(t.props.children),
                            h = v(v(v({}, t.props), t.state), {}, {
                                slideCount: f
                            }),
                            b = (0, o.getPreClones)(h) + (0, o.getPostClones)(h) + f,
                            m = 100 / t.props.slidesToShow * b,
                            j = 100 / b,
                            g = -j * ((0, o.getPreClones)(h) + t.state.currentSlide) * m / 100;
                        return t.props.centerMode && (g += (100 - j * m / 100) / 2), {
                            slideWidth: j + "%",
                            trackStyle: {
                                width: m + "%",
                                left: g + "%"
                            }
                        }
                    })), S(w(t), "checkImagesLoad", (function() {
                        var e = t.list && t.list.querySelectorAll && t.list.querySelectorAll(".slick-slide img") || [],
                            n = e.length,
                            r = 0;
                        Array.prototype.forEach.call(e, (function(e) {
                            var i = function() {
                                return ++r && r >= n && t.onWindowResized()
                            };
                            if (e.onclick) {
                                var a = e.onclick;
                                e.onclick = function() {
                                    a(), e.parentNode.focus()
                                }
                            } else e.onclick = function() {
                                return e.parentNode.focus()
                            };
                            e.onload || (t.props.lazyLoad ? e.onload = function() {
                                t.adaptHeight(), t.callbackTimers.push(setTimeout(t.onWindowResized, t.props.speed))
                            } : (e.onload = i, e.onerror = function() {
                                i(), t.props.onLazyLoadError && t.props.onLazyLoadError()
                            }))
                        }))
                    })), S(w(t), "progressiveLazyLoad", (function() {
                        for (var e = [], n = v(v({}, t.props), t.state), r = t.state.currentSlide; r < t.state.slideCount + (0, o.getPostClones)(n); r++)
                            if (t.state.lazyLoadedList.indexOf(r) < 0) {
                                e.push(r);
                                break
                            }
                        for (var i = t.state.currentSlide - 1; i >= -(0, o.getPreClones)(n); i--)
                            if (t.state.lazyLoadedList.indexOf(i) < 0) {
                                e.push(i);
                                break
                            }
                        e.length > 0 ? (t.setState((function(t) {
                            return {
                                lazyLoadedList: t.lazyLoadedList.concat(e)
                            }
                        })), t.props.onLazyLoad && t.props.onLazyLoad(e)) : t.lazyLoadTimer && (clearInterval(t.lazyLoadTimer), delete t.lazyLoadTimer)
                    })), S(w(t), "slideHandler", (function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = t.props,
                            i = r.asNavFor,
                            a = r.beforeChange,
                            s = r.onLazyLoad,
                            c = r.speed,
                            l = r.afterChange,
                            u = t.state.currentSlide,
                            d = (0, o.slideHandler)(v(v(v({
                                index: e
                            }, t.props), t.state), {}, {
                                trackRef: t.track,
                                useCSS: t.props.useCSS && !n
                            })),
                            p = d.state,
                            f = d.nextState;
                        if (p) {
                            a && a(u, p.currentSlide);
                            var h = p.lazyLoadedList.filter((function(e) {
                                return t.state.lazyLoadedList.indexOf(e) < 0
                            }));
                            s && h.length > 0 && s(h), !t.props.waitForAnimate && t.animationEndCallback && (clearTimeout(t.animationEndCallback), l && l(u), delete t.animationEndCallback), t.setState(p, (function() {
                                i && t.asNavForIndex !== e && (t.asNavForIndex = e, i.innerSlider.slideHandler(e)), f && (t.animationEndCallback = setTimeout((function() {
                                    var e = f.animating,
                                        n = b(f, ["animating"]);
                                    t.setState(n, (function() {
                                        t.callbackTimers.push(setTimeout((function() {
                                            return t.setState({
                                                animating: e
                                            })
                                        }), 10)), l && l(p.currentSlide), delete t.animationEndCallback
                                    }))
                                }), c))
                            }))
                        }
                    })), S(w(t), "changeSlide", (function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            r = v(v({}, t.props), t.state),
                            i = (0, o.changeSlide)(r, e);
                        if ((0 === i || i) && (!0 === n ? t.slideHandler(i, n) : t.slideHandler(i), t.props.autoplay && t.autoPlay("update"), t.props.focusOnSelect)) {
                            var a = t.list.querySelectorAll(".slick-current");
                            a[0] && a[0].focus()
                        }
                    })), S(w(t), "clickHandler", (function(e) {
                        !1 === t.clickable && (e.stopPropagation(), e.preventDefault()), t.clickable = !0
                    })), S(w(t), "keyHandler", (function(e) {
                        var n = (0, o.keyHandler)(e, t.props.accessibility, t.props.rtl);
                        "" !== n && t.changeSlide({
                            message: n
                        })
                    })), S(w(t), "selectHandler", (function(e) {
                        t.changeSlide(e)
                    })), S(w(t), "disableBodyScroll", (function() {
                        window.ontouchmove = function(e) {
                            (e = e || window.event).preventDefault && e.preventDefault(), e.returnValue = !1
                        }
                    })), S(w(t), "enableBodyScroll", (function() {
                        window.ontouchmove = null
                    })), S(w(t), "swipeStart", (function(e) {
                        t.props.verticalSwiping && t.disableBodyScroll();
                        var n = (0, o.swipeStart)(e, t.props.swipe, t.props.draggable);
                        "" !== n && t.setState(n)
                    })), S(w(t), "swipeMove", (function(e) {
                        var n = (0, o.swipeMove)(e, v(v(v({}, t.props), t.state), {}, {
                            trackRef: t.track,
                            listRef: t.list,
                            slideIndex: t.state.currentSlide
                        }));
                        n && (n.swiping && (t.clickable = !1), t.setState(n))
                    })), S(w(t), "swipeEnd", (function(e) {
                        var n = (0, o.swipeEnd)(e, v(v(v({}, t.props), t.state), {}, {
                            trackRef: t.track,
                            listRef: t.list,
                            slideIndex: t.state.currentSlide
                        }));
                        if (n) {
                            var r = n.triggerSlideHandler;
                            delete n.triggerSlideHandler, t.setState(n), void 0 !== r && (t.slideHandler(r), t.props.verticalSwiping && t.enableBodyScroll())
                        }
                    })), S(w(t), "touchEnd", (function(e) {
                        t.swipeEnd(e), t.clickable = !0
                    })), S(w(t), "slickPrev", (function() {
                        t.callbackTimers.push(setTimeout((function() {
                            return t.changeSlide({
                                message: "previous"
                            })
                        }), 0))
                    })), S(w(t), "slickNext", (function() {
                        t.callbackTimers.push(setTimeout((function() {
                            return t.changeSlide({
                                message: "next"
                            })
                        }), 0))
                    })), S(w(t), "slickGoTo", (function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        if (e = Number(e), isNaN(e)) return "";
                        t.callbackTimers.push(setTimeout((function() {
                            return t.changeSlide({
                                message: "index",
                                index: e,
                                currentSlide: t.state.currentSlide
                            }, n)
                        }), 0))
                    })), S(w(t), "play", (function() {
                        var e;
                        if (t.props.rtl) e = t.state.currentSlide - t.props.slidesToScroll;
                        else {
                            if (!(0, o.canGoNext)(v(v({}, t.props), t.state))) return !1;
                            e = t.state.currentSlide + t.props.slidesToScroll
                        }
                        t.slideHandler(e)
                    })), S(w(t), "autoPlay", (function(e) {
                        t.autoplayTimer && clearInterval(t.autoplayTimer);
                        var n = t.state.autoplaying;
                        if ("update" === e) {
                            if ("hovered" === n || "focused" === n || "paused" === n) return
                        } else if ("leave" === e) {
                            if ("paused" === n || "focused" === n) return
                        } else if ("blur" === e && ("paused" === n || "hovered" === n)) return;
                        t.autoplayTimer = setInterval(t.play, t.props.autoplaySpeed + 50), t.setState({
                            autoplaying: "playing"
                        })
                    })), S(w(t), "pause", (function(e) {
                        t.autoplayTimer && (clearInterval(t.autoplayTimer), t.autoplayTimer = null);
                        var n = t.state.autoplaying;
                        "paused" === e ? t.setState({
                            autoplaying: "paused"
                        }) : "focused" === e ? "hovered" !== n && "playing" !== n || t.setState({
                            autoplaying: "focused"
                        }) : "playing" === n && t.setState({
                            autoplaying: "hovered"
                        })
                    })), S(w(t), "onDotsOver", (function() {
                        return t.props.autoplay && t.pause("hovered")
                    })), S(w(t), "onDotsLeave", (function() {
                        return t.props.autoplay && "hovered" === t.state.autoplaying && t.autoPlay("leave")
                    })), S(w(t), "onTrackOver", (function() {
                        return t.props.autoplay && t.pause("hovered")
                    })), S(w(t), "onTrackLeave", (function() {
                        return t.props.autoplay && "hovered" === t.state.autoplaying && t.autoPlay("leave")
                    })), S(w(t), "onSlideFocus", (function() {
                        return t.props.autoplay && t.pause("focused")
                    })), S(w(t), "onSlideBlur", (function() {
                        return t.props.autoplay && "focused" === t.state.autoplaying && t.autoPlay("blur")
                    })), S(w(t), "render", (function() {
                        var e, n, i, a = (0, s.default)("slick-slider", t.props.className, {
                                "slick-vertical": t.props.vertical,
                                "slick-initialized": !0
                            }),
                            d = v(v({}, t.props), t.state),
                            p = (0, o.extractObject)(d, ["fade", "cssEase", "speed", "infinite", "centerMode", "focusOnSelect", "currentSlide", "lazyLoad", "lazyLoadedList", "rtl", "slideWidth", "slideHeight", "listHeight", "vertical", "slidesToShow", "slidesToScroll", "slideCount", "trackStyle", "variableWidth", "unslick", "centerPadding", "targetSlide", "useCSS"]),
                            f = t.props.pauseOnHover;
                        if (p = v(v({}, p), {}, {
                                onMouseEnter: f ? t.onTrackOver : null,
                                onMouseLeave: f ? t.onTrackLeave : null,
                                onMouseOver: f ? t.onTrackOver : null,
                                focusOnSelect: t.props.focusOnSelect && t.clickable ? t.selectHandler : null
                            }), !0 === t.props.dots && t.state.slideCount >= t.props.slidesToShow) {
                            var b = (0, o.extractObject)(d, ["dotsClass", "slideCount", "slidesToShow", "currentSlide", "slidesToScroll", "clickHandler", "children", "customPaging", "infinite", "appendDots"]),
                                m = t.props.pauseOnDotsHover;
                            b = v(v({}, b), {}, {
                                clickHandler: t.changeSlide,
                                onMouseEnter: m ? t.onDotsLeave : null,
                                onMouseOver: m ? t.onDotsOver : null,
                                onMouseLeave: m ? t.onDotsLeave : null
                            }), e = r.default.createElement(l.Dots, b)
                        }
                        var j = (0, o.extractObject)(d, ["infinite", "centerMode", "currentSlide", "slideCount", "slidesToShow", "prevArrow", "nextArrow"]);
                        j.clickHandler = t.changeSlide, t.props.arrows && (n = r.default.createElement(u.PrevArrow, j), i = r.default.createElement(u.NextArrow, j));
                        var g = null;
                        t.props.vertical && (g = {
                            height: t.state.listHeight
                        });
                        var y = null;
                        !1 === t.props.vertical ? !0 === t.props.centerMode && (y = {
                            padding: "0px " + t.props.centerPadding
                        }) : !0 === t.props.centerMode && (y = {
                            padding: t.props.centerPadding + " 0px"
                        });
                        var O = v(v({}, g), y),
                            w = t.props.touchMove,
                            x = {
                                className: "slick-list",
                                style: O,
                                onClick: t.clickHandler,
                                onMouseDown: w ? t.swipeStart : null,
                                onMouseMove: t.state.dragging && w ? t.swipeMove : null,
                                onMouseUp: w ? t.swipeEnd : null,
                                onMouseLeave: t.state.dragging && w ? t.swipeEnd : null,
                                onTouchStart: w ? t.swipeStart : null,
                                onTouchMove: t.state.dragging && w ? t.swipeMove : null,
                                onTouchEnd: w ? t.touchEnd : null,
                                onTouchCancel: t.state.dragging && w ? t.swipeEnd : null,
                                onKeyDown: t.props.accessibility ? t.keyHandler : null
                            },
                            S = {
                                className: a,
                                dir: "ltr",
                                style: t.props.style
                            };
                        return t.props.unslick && (x = {
                            className: "slick-list"
                        }, S = {
                            className: a
                        }), r.default.createElement("div", S, t.props.unslick ? "" : n, r.default.createElement("div", h({
                            ref: t.listRefHandler
                        }, x), r.default.createElement(c.Track, h({
                            ref: t.trackRefHandler
                        }, p), t.props.children)), t.props.unslick ? "" : i, t.props.unslick ? "" : e)
                    })), t.list = null, t.track = null, t.state = v(v({}, i.default), {}, {
                        currentSlide: t.props.initialSlide,
                        slideCount: r.default.Children.count(t.props.children)
                    }), t.callbackTimers = [], t.clickable = !0, t.debouncedResize = null;
                    var n = t.ssrInit();
                    return t.state = v(v({}, t.state), n), t
                }
                return t = O, (n = [{
                    key: "didPropsChange",
                    value: function(e) {
                        for (var t = !1, n = 0, i = Object.keys(this.props); n < i.length; n++) {
                            var a = i[n];
                            if (!e.hasOwnProperty(a)) {
                                t = !0;
                                break
                            }
                            if ("object" !== f(e[a]) && "function" !== typeof e[a] && e[a] !== this.props[a]) {
                                t = !0;
                                break
                            }
                        }
                        return t || r.default.Children.count(this.props.children) !== r.default.Children.count(e.children)
                    }
                }]) && j(t.prototype, n), p && j(t, p), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), O
            }(r.default.Component);
            t.InnerSlider = k
        },
        425: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r = {
                animating: !1,
                autoplaying: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                dragging: !1,
                edgeDragged: !1,
                initialized: !1,
                lazyLoadedList: [],
                listHeight: null,
                listWidth: null,
                scrolling: !1,
                slideCount: null,
                slideHeight: null,
                slideWidth: null,
                swipeLeft: null,
                swiped: !1,
                swiping: !1,
                touchObject: {
                    startX: 0,
                    startY: 0,
                    curX: 0,
                    curY: 0
                },
                trackStyle: {},
                trackWidth: 0,
                targetSlide: 0
            };
            t.default = r
        },
        426: function(e, t, n) {
            (function(t) {
                var n = /^\s+|\s+$/g,
                    r = /^[-+]0x[0-9a-f]+$/i,
                    i = /^0b[01]+$/i,
                    a = /^0o[0-7]+$/i,
                    s = parseInt,
                    o = "object" == typeof t && t && t.Object === Object && t,
                    c = "object" == typeof self && self && self.Object === Object && self,
                    l = o || c || Function("return this")(),
                    u = Object.prototype.toString,
                    d = Math.max,
                    p = Math.min,
                    f = function() {
                        return l.Date.now()
                    };

                function h(e) {
                    var t = typeof e;
                    return !!e && ("object" == t || "function" == t)
                }

                function b(e) {
                    if ("number" == typeof e) return e;
                    if (function(e) {
                            return "symbol" == typeof e || function(e) {
                                return !!e && "object" == typeof e
                            }(e) && "[object Symbol]" == u.call(e)
                        }(e)) return NaN;
                    if (h(e)) {
                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                        e = h(t) ? t + "" : t
                    }
                    if ("string" != typeof e) return 0 === e ? e : +e;
                    e = e.replace(n, "");
                    var o = i.test(e);
                    return o || a.test(e) ? s(e.slice(2), o ? 2 : 8) : r.test(e) ? NaN : +e
                }
                e.exports = function(e, t, n) {
                    var r, i, a, s, o, c, l = 0,
                        u = !1,
                        m = !1,
                        v = !0;
                    if ("function" != typeof e) throw new TypeError("Expected a function");

                    function j(t) {
                        var n = r,
                            a = i;
                        return r = i = void 0, l = t, s = e.apply(a, n)
                    }

                    function g(e) {
                        return l = e, o = setTimeout(O, t), u ? j(e) : s
                    }

                    function y(e) {
                        var n = e - c;
                        return void 0 === c || n >= t || n < 0 || m && e - l >= a
                    }

                    function O() {
                        var e = f();
                        if (y(e)) return w(e);
                        o = setTimeout(O, function(e) {
                            var n = t - (e - c);
                            return m ? p(n, a - (e - l)) : n
                        }(e))
                    }

                    function w(e) {
                        return o = void 0, v && r ? j(e) : (r = i = void 0, s)
                    }

                    function x() {
                        var e = f(),
                            n = y(e);
                        if (r = arguments, i = this, c = e, n) {
                            if (void 0 === o) return g(c);
                            if (m) return o = setTimeout(O, t), j(c)
                        }
                        return void 0 === o && (o = setTimeout(O, t)), s
                    }
                    return t = b(t) || 0, h(n) && (u = !!n.leading, a = (m = "maxWait" in n) ? d(b(n.maxWait) || 0, t) : a, v = "trailing" in n ? !!n.trailing : v), x.cancel = function() {
                        void 0 !== o && clearTimeout(o), l = 0, r = c = i = o = void 0
                    }, x.flush = function() {
                        return void 0 === o ? s : w(f())
                    }, x
                }
            }).call(this, n(64))
        },
        427: function(e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Track = void 0;
            var i = o(n(4)),
                a = o(n(252)),
                s = n(230);

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c() {
                return c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, c.apply(this, arguments)
            }

            function l(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function u(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function d(e, t) {
                return d = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, d(e, t)
            }

            function p(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = b(e);
                    if (t) {
                        var i = b(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return f(this, n)
                }
            }

            function f(e, t) {
                if (t && ("object" === r(t) || "function" === typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return h(e)
            }

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function b(e) {
                return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, b(e)
            }

            function m(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(n), !0).forEach((function(t) {
                        j(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function j(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var g = function(e) {
                    var t, n, r, i, a;
                    return r = (a = e.rtl ? e.slideCount - 1 - e.index : e.index) < 0 || a >= e.slideCount, e.centerMode ? (i = Math.floor(e.slidesToShow / 2), n = (a - e.currentSlide) % e.slideCount === 0, a > e.currentSlide - i - 1 && a <= e.currentSlide + i && (t = !0)) : t = e.currentSlide <= a && a < e.currentSlide + e.slidesToShow, {
                        "slick-slide": !0,
                        "slick-active": t,
                        "slick-center": n,
                        "slick-cloned": r,
                        "slick-current": a === (e.targetSlide < 0 ? e.targetSlide + e.slideCount : e.targetSlide >= e.slideCount ? e.targetSlide - e.slideCount : e.targetSlide)
                    }
                },
                y = function(e, t) {
                    return e.key || t
                },
                O = function(e) {
                    var t, n = [],
                        r = [],
                        o = [],
                        c = i.default.Children.count(e.children),
                        l = (0, s.lazyStartIndex)(e),
                        u = (0, s.lazyEndIndex)(e);
                    return i.default.Children.forEach(e.children, (function(d, p) {
                        var f, h = {
                            message: "children",
                            index: p,
                            slidesToScroll: e.slidesToScroll,
                            currentSlide: e.currentSlide
                        };
                        f = !e.lazyLoad || e.lazyLoad && e.lazyLoadedList.indexOf(p) >= 0 ? d : i.default.createElement("div", null);
                        var b = function(e) {
                                var t = {};
                                return void 0 !== e.variableWidth && !1 !== e.variableWidth || (t.width = e.slideWidth), e.fade && (t.position = "relative", e.vertical ? t.top = -e.index * parseInt(e.slideHeight) : t.left = -e.index * parseInt(e.slideWidth), t.opacity = e.currentSlide === e.index ? 1 : 0, e.useCSS && (t.transition = "opacity " + e.speed + "ms " + e.cssEase + ", visibility " + e.speed + "ms " + e.cssEase)), t
                            }(v(v({}, e), {}, {
                                index: p
                            })),
                            m = f.props.className || "",
                            j = g(v(v({}, e), {}, {
                                index: p
                            }));
                        if (n.push(i.default.cloneElement(f, {
                                key: "original" + y(f, p),
                                "data-index": p,
                                className: (0, a.default)(j, m),
                                tabIndex: "-1",
                                "aria-hidden": !j["slick-active"],
                                style: v(v({
                                    outline: "none"
                                }, f.props.style || {}), b),
                                onClick: function(t) {
                                    f.props && f.props.onClick && f.props.onClick(t), e.focusOnSelect && e.focusOnSelect(h)
                                }
                            })), e.infinite && !1 === e.fade) {
                            var O = c - p;
                            O <= (0, s.getPreClones)(e) && c !== e.slidesToShow && ((t = -O) >= l && (f = d), j = g(v(v({}, e), {}, {
                                index: t
                            })), r.push(i.default.cloneElement(f, {
                                key: "precloned" + y(f, t),
                                "data-index": t,
                                tabIndex: "-1",
                                className: (0, a.default)(j, m),
                                "aria-hidden": !j["slick-active"],
                                style: v(v({}, f.props.style || {}), b),
                                onClick: function(t) {
                                    f.props && f.props.onClick && f.props.onClick(t), e.focusOnSelect && e.focusOnSelect(h)
                                }
                            }))), c !== e.slidesToShow && ((t = c + p) < u && (f = d), j = g(v(v({}, e), {}, {
                                index: t
                            })), o.push(i.default.cloneElement(f, {
                                key: "postcloned" + y(f, t),
                                "data-index": t,
                                tabIndex: "-1",
                                className: (0, a.default)(j, m),
                                "aria-hidden": !j["slick-active"],
                                style: v(v({}, f.props.style || {}), b),
                                onClick: function(t) {
                                    f.props && f.props.onClick && f.props.onClick(t), e.focusOnSelect && e.focusOnSelect(h)
                                }
                            })))
                        }
                    })), e.rtl ? r.concat(n, o).reverse() : r.concat(n, o)
                },
                w = function(e) {
                    ! function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && d(e, t)
                    }(s, e);
                    var t, n, r, a = p(s);

                    function s() {
                        var e;
                        l(this, s);
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return j(h(e = a.call.apply(a, [this].concat(n))), "node", null), j(h(e), "handleRef", (function(t) {
                            e.node = t
                        })), e
                    }
                    return t = s, (n = [{
                        key: "render",
                        value: function() {
                            var e = O(this.props),
                                t = this.props,
                                n = {
                                    onMouseEnter: t.onMouseEnter,
                                    onMouseOver: t.onMouseOver,
                                    onMouseLeave: t.onMouseLeave
                                };
                            return i.default.createElement("div", c({
                                ref: this.handleRef,
                                className: "slick-track",
                                style: this.props.trackStyle
                            }, n), e)
                        }
                    }]) && u(t.prototype, n), r && u(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), s
                }(i.default.PureComponent);
            t.Track = w
        },
        428: function(e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Dots = void 0;
            var i = o(n(4)),
                a = o(n(252)),
                s = n(230);

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function l(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function u(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function d(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function p(e, t) {
                return p = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, p(e, t)
            }

            function f(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = b(e);
                    if (t) {
                        var i = b(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return h(this, n)
                }
            }

            function h(e, t) {
                if (t && ("object" === r(t) || "function" === typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function b(e) {
                return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, b(e)
            }
            var m = function(e) {
                ! function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), t && p(e, t)
                }(h, e);
                var t, n, r, o = f(h);

                function h() {
                    return u(this, h), o.apply(this, arguments)
                }
                return t = h, n = [{
                    key: "clickHandler",
                    value: function(e, t) {
                        t.preventDefault(), this.props.clickHandler(e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        for (var e, t = this.props, n = t.onMouseEnter, r = t.onMouseOver, o = t.onMouseLeave, u = t.infinite, d = t.slidesToScroll, p = t.slidesToShow, f = t.slideCount, h = t.currentSlide, b = (e = {
                                slideCount: f,
                                slidesToScroll: d,
                                slidesToShow: p,
                                infinite: u
                            }).infinite ? Math.ceil(e.slideCount / e.slidesToScroll) : Math.ceil((e.slideCount - e.slidesToShow) / e.slidesToScroll) + 1, m = {
                                onMouseEnter: n,
                                onMouseOver: r,
                                onMouseLeave: o
                            }, v = [], j = 0; j < b; j++) {
                            var g = (j + 1) * d - 1,
                                y = u ? g : (0, s.clamp)(g, 0, f - 1),
                                O = y - (d - 1),
                                w = u ? O : (0, s.clamp)(O, 0, f - 1),
                                x = (0, a.default)({
                                    "slick-active": u ? h >= w && h <= y : h === w
                                }),
                                S = {
                                    message: "dots",
                                    index: j,
                                    slidesToScroll: d,
                                    currentSlide: h
                                },
                                k = this.clickHandler.bind(this, S);
                            v = v.concat(i.default.createElement("li", {
                                key: j,
                                className: x
                            }, i.default.cloneElement(this.props.customPaging(j), {
                                onClick: k
                            })))
                        }
                        return i.default.cloneElement(this.props.appendDots(v), function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? c(Object(n), !0).forEach((function(t) {
                                    l(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({
                            className: this.props.dotsClass
                        }, m))
                    }
                }], n && d(t.prototype, n), r && d(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), h
            }(i.default.PureComponent);
            t.Dots = m
        },
        429: function(e, t, n) {
            "use strict";

            function r(e) {
                return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PrevArrow = t.NextArrow = void 0;
            var i = o(n(4)),
                a = o(n(252)),
                s = n(230);

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function c() {
                return c = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, c.apply(this, arguments)
            }

            function l(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function u(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? l(Object(n), !0).forEach((function(t) {
                        d(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function d(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function p(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function f(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function h(e, t, n) {
                return t && f(e.prototype, t), n && f(e, n), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), e
            }

            function b(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), Object.defineProperty(e, "prototype", {
                    writable: !1
                }), t && m(e, t)
            }

            function m(e, t) {
                return m = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, m(e, t)
            }

            function v(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = g(e);
                    if (t) {
                        var i = g(this).constructor;
                        n = Reflect.construct(r, arguments, i)
                    } else n = r.apply(this, arguments);
                    return j(this, n)
                }
            }

            function j(e, t) {
                if (t && ("object" === r(t) || "function" === typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }(e)
            }

            function g(e) {
                return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, g(e)
            }
            var y = function(e) {
                b(n, e);
                var t = v(n);

                function n() {
                    return p(this, n), t.apply(this, arguments)
                }
                return h(n, [{
                    key: "clickHandler",
                    value: function(e, t) {
                        t && t.preventDefault(), this.props.clickHandler(e, t)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                                "slick-arrow": !0,
                                "slick-prev": !0
                            },
                            t = this.clickHandler.bind(this, {
                                message: "previous"
                            });
                        !this.props.infinite && (0 === this.props.currentSlide || this.props.slideCount <= this.props.slidesToShow) && (e["slick-disabled"] = !0, t = null);
                        var n = {
                                key: "0",
                                "data-role": "none",
                                className: (0, a.default)(e),
                                style: {
                                    display: "block"
                                },
                                onClick: t
                            },
                            r = {
                                currentSlide: this.props.currentSlide,
                                slideCount: this.props.slideCount
                            };
                        return this.props.prevArrow ? i.default.cloneElement(this.props.prevArrow, u(u({}, n), r)) : i.default.createElement("button", c({
                            key: "0",
                            type: "button"
                        }, n), " ", "Previous")
                    }
                }]), n
            }(i.default.PureComponent);
            t.PrevArrow = y;
            var O = function(e) {
                b(n, e);
                var t = v(n);

                function n() {
                    return p(this, n), t.apply(this, arguments)
                }
                return h(n, [{
                    key: "clickHandler",
                    value: function(e, t) {
                        t && t.preventDefault(), this.props.clickHandler(e, t)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = {
                                "slick-arrow": !0,
                                "slick-next": !0
                            },
                            t = this.clickHandler.bind(this, {
                                message: "next"
                            });
                        (0, s.canGoNext)(this.props) || (e["slick-disabled"] = !0, t = null);
                        var n = {
                                key: "1",
                                "data-role": "none",
                                className: (0, a.default)(e),
                                style: {
                                    display: "block"
                                },
                                onClick: t
                            },
                            r = {
                                currentSlide: this.props.currentSlide,
                                slideCount: this.props.slideCount
                            };
                        return this.props.nextArrow ? i.default.cloneElement(this.props.nextArrow, u(u({}, n), r)) : i.default.createElement("button", c({
                            key: "1",
                            type: "button"
                        }, n), " ", "Next")
                    }
                }]), n
            }(i.default.PureComponent);
            t.NextArrow = O
        },
        430: function(e, t, n) {
            "use strict";
            n.r(t),
                function(e) {
                    var n = function() {
                            if ("undefined" !== typeof Map) return Map;

                            function e(e, t) {
                                var n = -1;
                                return e.some((function(e, r) {
                                    return e[0] === t && (n = r, !0)
                                })), n
                            }
                            return function() {
                                function t() {
                                    this.__entries__ = []
                                }
                                return Object.defineProperty(t.prototype, "size", {
                                    get: function() {
                                        return this.__entries__.length
                                    },
                                    enumerable: !0,
                                    configurable: !0
                                }), t.prototype.get = function(t) {
                                    var n = e(this.__entries__, t),
                                        r = this.__entries__[n];
                                    return r && r[1]
                                }, t.prototype.set = function(t, n) {
                                    var r = e(this.__entries__, t);
                                    ~r ? this.__entries__[r][1] = n : this.__entries__.push([t, n])
                                }, t.prototype.delete = function(t) {
                                    var n = this.__entries__,
                                        r = e(n, t);
                                    ~r && n.splice(r, 1)
                                }, t.prototype.has = function(t) {
                                    return !!~e(this.__entries__, t)
                                }, t.prototype.clear = function() {
                                    this.__entries__.splice(0)
                                }, t.prototype.forEach = function(e, t) {
                                    void 0 === t && (t = null);
                                    for (var n = 0, r = this.__entries__; n < r.length; n++) {
                                        var i = r[n];
                                        e.call(t, i[1], i[0])
                                    }
                                }, t
                            }()
                        }(),
                        r = "undefined" !== typeof window && "undefined" !== typeof document && window.document === document,
                        i = "undefined" !== typeof e && e.Math === Math ? e : "undefined" !== typeof self && self.Math === Math ? self : "undefined" !== typeof window && window.Math === Math ? window : Function("return this")(),
                        a = "function" === typeof requestAnimationFrame ? requestAnimationFrame.bind(i) : function(e) {
                            return setTimeout((function() {
                                return e(Date.now())
                            }), 1e3 / 60)
                        };
                    var s = ["top", "right", "bottom", "left", "width", "height", "size", "weight"],
                        o = "undefined" !== typeof MutationObserver,
                        c = function() {
                            function e() {
                                this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = function(e, t) {
                                    var n = !1,
                                        r = !1,
                                        i = 0;

                                    function s() {
                                        n && (n = !1, e()), r && c()
                                    }

                                    function o() {
                                        a(s)
                                    }

                                    function c() {
                                        var e = Date.now();
                                        if (n) {
                                            if (e - i < 2) return;
                                            r = !0
                                        } else n = !0, r = !1, setTimeout(o, t);
                                        i = e
                                    }
                                    return c
                                }(this.refresh.bind(this), 20)
                            }
                            return e.prototype.addObserver = function(e) {
                                ~this.observers_.indexOf(e) || this.observers_.push(e), this.connected_ || this.connect_()
                            }, e.prototype.removeObserver = function(e) {
                                var t = this.observers_,
                                    n = t.indexOf(e);
                                ~n && t.splice(n, 1), !t.length && this.connected_ && this.disconnect_()
                            }, e.prototype.refresh = function() {
                                this.updateObservers_() && this.refresh()
                            }, e.prototype.updateObservers_ = function() {
                                var e = this.observers_.filter((function(e) {
                                    return e.gatherActive(), e.hasActive()
                                }));
                                return e.forEach((function(e) {
                                    return e.broadcastActive()
                                })), e.length > 0
                            }, e.prototype.connect_ = function() {
                                r && !this.connected_ && (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), o ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
                                    attributes: !0,
                                    childList: !0,
                                    characterData: !0,
                                    subtree: !0
                                })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0)
                            }, e.prototype.disconnect_ = function() {
                                r && this.connected_ && (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1)
                            }, e.prototype.onTransitionEnd_ = function(e) {
                                var t = e.propertyName,
                                    n = void 0 === t ? "" : t;
                                s.some((function(e) {
                                    return !!~n.indexOf(e)
                                })) && this.refresh()
                            }, e.getInstance = function() {
                                return this.instance_ || (this.instance_ = new e), this.instance_
                            }, e.instance_ = null, e
                        }(),
                        l = function(e, t) {
                            for (var n = 0, r = Object.keys(t); n < r.length; n++) {
                                var i = r[n];
                                Object.defineProperty(e, i, {
                                    value: t[i],
                                    enumerable: !1,
                                    writable: !1,
                                    configurable: !0
                                })
                            }
                            return e
                        },
                        u = function(e) {
                            return e && e.ownerDocument && e.ownerDocument.defaultView || i
                        },
                        d = v(0, 0, 0, 0);

                    function p(e) {
                        return parseFloat(e) || 0
                    }

                    function f(e) {
                        for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                        return t.reduce((function(t, n) {
                            return t + p(e["border-" + n + "-width"])
                        }), 0)
                    }

                    function h(e) {
                        var t = e.clientWidth,
                            n = e.clientHeight;
                        if (!t && !n) return d;
                        var r = u(e).getComputedStyle(e),
                            i = function(e) {
                                for (var t = {}, n = 0, r = ["top", "right", "bottom", "left"]; n < r.length; n++) {
                                    var i = r[n],
                                        a = e["padding-" + i];
                                    t[i] = p(a)
                                }
                                return t
                            }(r),
                            a = i.left + i.right,
                            s = i.top + i.bottom,
                            o = p(r.width),
                            c = p(r.height);
                        if ("border-box" === r.boxSizing && (Math.round(o + a) !== t && (o -= f(r, "left", "right") + a), Math.round(c + s) !== n && (c -= f(r, "top", "bottom") + s)), ! function(e) {
                                return e === u(e).document.documentElement
                            }(e)) {
                            var l = Math.round(o + a) - t,
                                h = Math.round(c + s) - n;
                            1 !== Math.abs(l) && (o -= l), 1 !== Math.abs(h) && (c -= h)
                        }
                        return v(i.left, i.top, o, c)
                    }
                    var b = "undefined" !== typeof SVGGraphicsElement ? function(e) {
                        return e instanceof u(e).SVGGraphicsElement
                    } : function(e) {
                        return e instanceof u(e).SVGElement && "function" === typeof e.getBBox
                    };

                    function m(e) {
                        return r ? b(e) ? function(e) {
                            var t = e.getBBox();
                            return v(0, 0, t.width, t.height)
                        }(e) : h(e) : d
                    }

                    function v(e, t, n, r) {
                        return {
                            x: e,
                            y: t,
                            width: n,
                            height: r
                        }
                    }
                    var j = function() {
                            function e(e) {
                                this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = v(0, 0, 0, 0), this.target = e
                            }
                            return e.prototype.isActive = function() {
                                var e = m(this.target);
                                return this.contentRect_ = e, e.width !== this.broadcastWidth || e.height !== this.broadcastHeight
                            }, e.prototype.broadcastRect = function() {
                                var e = this.contentRect_;
                                return this.broadcastWidth = e.width, this.broadcastHeight = e.height, e
                            }, e
                        }(),
                        g = function(e, t) {
                            var n = function(e) {
                                var t = e.x,
                                    n = e.y,
                                    r = e.width,
                                    i = e.height,
                                    a = "undefined" !== typeof DOMRectReadOnly ? DOMRectReadOnly : Object,
                                    s = Object.create(a.prototype);
                                return l(s, {
                                    x: t,
                                    y: n,
                                    width: r,
                                    height: i,
                                    top: n,
                                    right: t + r,
                                    bottom: i + n,
                                    left: t
                                }), s
                            }(t);
                            l(this, {
                                target: e,
                                contentRect: n
                            })
                        },
                        y = function() {
                            function e(e, t, r) {
                                if (this.activeObservations_ = [], this.observations_ = new n, "function" !== typeof e) throw new TypeError("The callback provided as parameter 1 is not a function.");
                                this.callback_ = e, this.controller_ = t, this.callbackCtx_ = r
                            }
                            return e.prototype.observe = function(e) {
                                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                                if ("undefined" !== typeof Element && Element instanceof Object) {
                                    if (!(e instanceof u(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                    var t = this.observations_;
                                    t.has(e) || (t.set(e, new j(e)), this.controller_.addObserver(this), this.controller_.refresh())
                                }
                            }, e.prototype.unobserve = function(e) {
                                if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                                if ("undefined" !== typeof Element && Element instanceof Object) {
                                    if (!(e instanceof u(e).Element)) throw new TypeError('parameter 1 is not of type "Element".');
                                    var t = this.observations_;
                                    t.has(e) && (t.delete(e), t.size || this.controller_.removeObserver(this))
                                }
                            }, e.prototype.disconnect = function() {
                                this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this)
                            }, e.prototype.gatherActive = function() {
                                var e = this;
                                this.clearActive(), this.observations_.forEach((function(t) {
                                    t.isActive() && e.activeObservations_.push(t)
                                }))
                            }, e.prototype.broadcastActive = function() {
                                if (this.hasActive()) {
                                    var e = this.callbackCtx_,
                                        t = this.activeObservations_.map((function(e) {
                                            return new g(e.target, e.broadcastRect())
                                        }));
                                    this.callback_.call(e, t, e), this.clearActive()
                                }
                            }, e.prototype.clearActive = function() {
                                this.activeObservations_.splice(0)
                            }, e.prototype.hasActive = function() {
                                return this.activeObservations_.length > 0
                            }, e
                        }(),
                        O = "undefined" !== typeof WeakMap ? new WeakMap : new n,
                        w = function e(t) {
                            if (!(this instanceof e)) throw new TypeError("Cannot call a class as a function.");
                            if (!arguments.length) throw new TypeError("1 argument required, but only 0 present.");
                            var n = c.getInstance(),
                                r = new y(t, n, this);
                            O.set(this, r)
                        };
                    ["observe", "unobserve", "disconnect"].forEach((function(e) {
                        w.prototype[e] = function() {
                            var t;
                            return (t = O.get(this))[e].apply(t, arguments)
                        }
                    }));
                    var x = "undefined" !== typeof i.ResizeObserver ? i.ResizeObserver : w;
                    t.default = x
                }.call(this, n(64))
        },
        431: function(e, t, n) {
            var r = n(432),
                i = function(e) {
                    var t = "",
                        n = Object.keys(e);
                    return n.forEach((function(i, a) {
                        var s = e[i];
                        (function(e) {
                            return /[height|width]$/.test(e)
                        })(i = r(i)) && "number" === typeof s && (s += "px"), t += !0 === s ? i : !1 === s ? "not " + i : "(" + i + ": " + s + ")", a < n.length - 1 && (t += " and ")
                    })), t
                };
            e.exports = function(e) {
                var t = "";
                return "string" === typeof e ? e : e instanceof Array ? (e.forEach((function(n, r) {
                    t += i(n), r < e.length - 1 && (t += ", ")
                })), t) : i(e)
            }
        },
        432: function(e, t) {
            e.exports = function(e) {
                return e.replace(/[A-Z]/g, (function(e) {
                    return "-" + e.toLowerCase()
                })).toLowerCase()
            }
        },
        433: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var r, i = (r = n(4)) && r.__esModule ? r : {
                default: r
            };
            var a = {
                accessibility: !0,
                adaptiveHeight: !1,
                afterChange: null,
                appendDots: function(e) {
                    return i.default.createElement("ul", {
                        style: {
                            display: "block"
                        }
                    }, e)
                },
                arrows: !0,
                autoplay: !1,
                autoplaySpeed: 3e3,
                beforeChange: null,
                centerMode: !1,
                centerPadding: "50px",
                className: "",
                cssEase: "ease",
                customPaging: function(e) {
                    return i.default.createElement("button", null, e + 1)
                },
                dots: !1,
                dotsClass: "slick-dots",
                draggable: !0,
                easing: "linear",
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: null,
                nextArrow: null,
                onEdge: null,
                onInit: null,
                onLazyLoadError: null,
                onReInit: null,
                pauseOnDotsHover: !1,
                pauseOnFocus: !1,
                pauseOnHover: !0,
                prevArrow: null,
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: "div",
                slidesPerRow: 1,
                slidesToScroll: 1,
                slidesToShow: 1,
                speed: 500,
                swipe: !0,
                swipeEvent: null,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                useTransform: !0,
                variableWidth: !1,
                vertical: !1,
                waitForAnimate: !0
            };
            t.default = a
        },
        434: function(e, t, n) {
            var r = n(435);
            e.exports = new r
        },
        435: function(e, t, n) {
            var r = n(436),
                i = n(345),
                a = i.each,
                s = i.isFunction,
                o = i.isArray;

            function c() {
                if (!window.matchMedia) throw new Error("matchMedia not present, legacy browsers require a polyfill");
                this.queries = {}, this.browserIsIncapable = !window.matchMedia("only all").matches
            }
            c.prototype = {
                constructor: c,
                register: function(e, t, n) {
                    var i = this.queries,
                        c = n && this.browserIsIncapable;
                    return i[e] || (i[e] = new r(e, c)), s(t) && (t = {
                        match: t
                    }), o(t) || (t = [t]), a(t, (function(t) {
                        s(t) && (t = {
                            match: t
                        }), i[e].addHandler(t)
                    })), this
                },
                unregister: function(e, t) {
                    var n = this.queries[e];
                    return n && (t ? n.removeHandler(t) : (n.clear(), delete this.queries[e])), this
                }
            }, e.exports = c
        },
        436: function(e, t, n) {
            var r = n(437),
                i = n(345).each;

            function a(e, t) {
                this.query = e, this.isUnconditional = t, this.handlers = [], this.mql = window.matchMedia(e);
                var n = this;
                this.listener = function(e) {
                    n.mql = e.currentTarget || e, n.assess()
                }, this.mql.addListener(this.listener)
            }
            a.prototype = {
                constuctor: a,
                addHandler: function(e) {
                    var t = new r(e);
                    this.handlers.push(t), this.matches() && t.on()
                },
                removeHandler: function(e) {
                    var t = this.handlers;
                    i(t, (function(n, r) {
                        if (n.equals(e)) return n.destroy(), !t.splice(r, 1)
                    }))
                },
                matches: function() {
                    return this.mql.matches || this.isUnconditional
                },
                clear: function() {
                    i(this.handlers, (function(e) {
                        e.destroy()
                    })), this.mql.removeListener(this.listener), this.handlers.length = 0
                },
                assess: function() {
                    var e = this.matches() ? "on" : "off";
                    i(this.handlers, (function(t) {
                        t[e]()
                    }))
                }
            }, e.exports = a
        },
        437: function(e, t) {
            function n(e) {
                this.options = e, !e.deferSetup && this.setup()
            }
            n.prototype = {
                constructor: n,
                setup: function() {
                    this.options.setup && this.options.setup(), this.initialised = !0
                },
                on: function() {
                    !this.initialised && this.setup(), this.options.match && this.options.match()
                },
                off: function() {
                    this.options.unmatch && this.options.unmatch()
                },
                destroy: function() {
                    this.options.destroy ? this.options.destroy() : this.off()
                },
                equals: function(e) {
                    return this.options === e || this.options.match === e
                }
            }, e.exports = n
        },
        438: function(e, t, n) {},
        439: function(e, t, n) {},
        654: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return _
            }));
            var r = n(57),
                i = n(4),
                a = n(651),
                s = n(190),
                o = n(209),
                c = n(187),
                l = n(2),
                u = n(83),
                d = n(63),
                p = n(422),
                f = n.n(p),
                h = (n(438), n(439), n(231)),
                b = n(11),
                m = {
                    dots: !0,
                    speed: 500,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    autoplay: !0,
                    autoplaySpeed: 2e3,
                    arrows: !1,
                    responsive: [{
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1,
                            infinite: !0,
                            dots: !0
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: !0,
                            dots: !0,
                            centerMode: !0
                        }
                    }]
                };

            function v() {
                var e = Object(i.useContext)(s.a).pageData,
                    t = Object(i.useState)(null),
                    n = Object(d.a)(t, 2),
                    a = n[0],
                    o = n[1],
                    p = Object(i.useState)("idle"),
                    v = Object(d.a)(p, 2),
                    j = v[0],
                    g = v[1];
                return Object(i.useEffect)((function() {
                    Object(u.a)(Object(l.a)().mark((function e() {
                        var t;
                        return Object(l.a)().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return g("pending"), e.prev = 1, e.next = 4, Object(h.a)(0, 6, "price", "desc", "listed");
                                case 4:
                                    t = e.sent, o(t || []), g("resolved"), e.next = 12;
                                    break;
                                case 9:
                                    e.prev = 9, e.t0 = e.catch(1), g("rejected");
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 9]
                        ])
                    })))()
                }), []), Object(b.jsxs)(b.Fragment, {
                    children: ["resolved" === j && 0 === a.length && Object(b.jsx)("div", {
                        className: "nft-slider-nothings",
                        children: Object(b.jsx)("div", {
                            className: "nft-slider-nothings-inner",
                            children: Object(b.jsx)("h1", {
                                className: "title",
                                children: e.home.data.attributes.min_ponzi_section.mint_ponzi_error_text
                            })
                        })
                    }), "pending" === j && Object(b.jsx)("h1", {
                        style: {
                            fontSize: "2rem",
                            textAlign: "center"
                        },
                        children: "Loading..."
                    }), "resolved" === j && Object(b.jsx)(f.a, Object(c.a)(Object(c.a)({
                        className: "nft-slider"
                    }, m), {}, {
                        children: a.length > 0 && a.map((function(e, t) {
                            return Object(b.jsxs)("div", {
                                className: "nft-slider-slide",
                                children: [Object(b.jsx)("figure", {
                                    className: "slide-figure",
                                    children: Object(b.jsx)("img", {
                                        src: e.image || "/3.png",
                                        alt: "PIC OF SLIDE",
                                        className: "nft-slider-slide-img"
                                    })
                                }), Object(b.jsxs)("div", {
                                    className: "slide-content",
                                    children: [Object(b.jsx)("p", {
                                        className: "slide-title",
                                        children: e.name
                                    }), Object(b.jsxs)("div", {
                                        className: "value",
                                        children: [Object(b.jsx)("img", {
                                            src: "/eth.svg",
                                            alt: "eth",
                                            className: "etherium"
                                        }), Object(b.jsx)("p", {
                                            className: "price",
                                            children: e.price
                                        })]
                                    })]
                                }), Object(b.jsx)(r.b, {
                                    to: "/market",
                                    className: "slide-link",
                                    children: "BUY NOW"
                                }), Object(b.jsx)("img", {
                                    src: "/paper-bg.png",
                                    alt: "BACKGRROUND",
                                    className: "slide-bg"
                                })]
                            }, e.tokenId + "-" + t)
                        }))
                    }))]
                })
            }
            var j = n(284),
                g = n(285),
                y = n(29),
                O = n(200),
                w = function(e) {
                    return "https://ponzi-cms.xyz" + e.Image.data.attributes.url
                },
                x = function(e) {
                    return "https://ponzi-cms.xyz" + e.image_mobile.data.attributes.url
                };

            function S(e) {
                var t = e.data;
                return Object(b.jsxs)("div", {
                    className: "announcement__wrapper",
                    children: [Object(b.jsx)("h1", {
                        className: "announcement__title title",
                        children: t.Announcement_title
                    }), Object(b.jsx)("p", {
                        className: "announcement__content paragraph",
                        children: t.Announcement
                    })]
                })
            }

            function k() {
                var e = Object(i.useContext)(s.a),
                    t = e.pageData,
                    n = e.error;
                return Object(i.useEffect)((function() {
                    var e = document.querySelector(".banner-headline h1"),
                        t = e.getBoundingClientRect().width;
                    e.style.setProperty("--width", t + 25 + "px")
                }), []), n ? Object(b.jsx)(o.a, {
                    error: n
                }) : Object(b.jsxs)(b.Fragment, {
                    children: [Object(b.jsx)("section", {
                        className: "home__header",
                        children: Object(b.jsxs)("div", {
                            className: "home__header--inner",
                            children: [Object(b.jsx)("div", {
                                className: "banner-headline",
                                children: Object(b.jsx)("div", {
                                    className: "banner-headline-inner",
                                    children: Object(b.jsx)("h1", {
                                        className: "text",
                                        children: t.home.data.attributes.marque_title
                                    })
                                })
                            }), t.home.data.attributes.Announcement && Object(b.jsx)(S, {
                                data: t.home.data.attributes.Announcement
                            }), Object(b.jsxs)("div", {
                                className: "home-banner",
                                children: [Object(b.jsxs)("div", {
                                    className: "home-banner-news-wrapper",
                                    children: [Object(b.jsx)("figure", {
                                        className: "home-banner-news-figure",
                                        children: Object(b.jsx)(j.a, {
                                            src: "https://ponzi-cms.xyz" + t.home.data.attributes.banner_article.article_image.image.data.attributes.url,
                                            alt: "BANNER NEWS",
                                            className: "home-banner-news-figure-pic"
                                        })
                                    }), Object(b.jsx)("div", {
                                        className: "marketplace-box",
                                        children: Object(b.jsxs)("div", {
                                            className: "marketplace-box-inner",
                                            children: [Object(b.jsx)("div", {
                                                className: "title-box",
                                                children: Object(b.jsx)("h1", {
                                                    className: "marketplace-box-title mini-title",
                                                    children: t.home.data.attributes.Marketplace.title
                                                })
                                            }), Object(b.jsx)("p", {
                                                className: "paragraph",
                                                children: t.home.data.attributes.Marketplace.description
                                            }), Object(b.jsx)(r.b, {
                                                to: "/" + t.home.data.attributes.Marketplace.link,
                                                className: "btn",
                                                children: "EXPLORE"
                                            })]
                                        })
                                    })]
                                }), Object(b.jsxs)("div", {
                                    className: "home-banner-news-content",
                                    children: [Object(b.jsx)("h1", {
                                        className: "title",
                                        children: t.home.data.attributes.banner_article.article_title
                                    }), Object(b.jsxs)("p", {
                                        className: "paragraph",
                                        children: [Object(b.jsx)("span", {
                                            className: "big",
                                            children: t.home.data.attributes.banner_article.article_text[0]
                                        }), t.home.data.attributes.banner_article.article_text]
                                    }), Object(b.jsx)("div", {
                                        className: "marketplace-box",
                                        children: Object(b.jsxs)("div", {
                                            className: "marketplace-box-inner",
                                            children: [Object(b.jsx)("div", {
                                                className: "title-box",
                                                children: Object(b.jsx)("h1", {
                                                    className: "marketplace-box-title mini-title",
                                                    children: t.home.data.attributes.Marketplace.title
                                                })
                                            }), Object(b.jsx)("p", {
                                                className: "paragraph",
                                                style: {
                                                    columnCount: 1
                                                },
                                                children: t.home.data.attributes.Marketplace.description
                                            }), Object(b.jsx)(r.b, {
                                                to: "/" + t.home.data.attributes.Marketplace.link,
                                                className: "btn",
                                                children: "EXPLORE"
                                            })]
                                        })
                                    })]
                                })]
                            }), t.blogs.data.length > 0 && Object(b.jsxs)(b.Fragment, {
                                children: [Object(b.jsx)("h1", {
                                    className: "banner-title",
                                    children: t.home.data.attributes.home_banner_title[0].banner_title
                                }), Object(b.jsxs)("div", {
                                    className: "home-latest__articles__wrapper",
                                    children: [Object(b.jsx)("div", {
                                        className: "article__link__wrapper",
                                        children: t.blogs.data.map((function(e, t) {
                                            return Object(b.jsxs)(r.b, {
                                                to: "/news/".concat(e.id),
                                                className: "article__item__link",
                                                children: [Object(b.jsx)("span", {
                                                    className: "article__link__number",
                                                    children: t + 1
                                                }), Object(b.jsx)("h4", {
                                                    className: "article__link__title",
                                                    children: Object(y.e)(e.attributes.Title, 30)
                                                }), Object(b.jsx)(a.a, {
                                                    className: "article__link__paragrpah",
                                                    children: Object(y.e)(e.attributes.Content, 100)
                                                })]
                                            }, e.id)
                                        }))
                                    }), Object(b.jsx)("div", {
                                        className: "home-latest__btn__wrapper",
                                        children: Object(b.jsx)(r.b, {
                                            className: "btn",
                                            to: "/articles",
                                            children: "ALL NEWS"
                                        })
                                    })]
                                })]
                            })]
                        })
                    }), Object(b.jsxs)("section", {
                        className: "title-side",
                        children: [Object(b.jsx)("h1", {
                            className: "title",
                            children: '"This is without doubt the greatest, fairest, most honest Ponzi the world has ever seen"'
                        }), Object(b.jsx)("h4", {
                            className: "mini-title",
                            children: "- All Charlies, everywhere"
                        })]
                    }), Object(b.jsx)("section", {
                        className: "section",
                        children: Object(b.jsxs)("div", {
                            className: "section-inner",
                            children: [Object(b.jsxs)("div", {
                                className: "section__news__wrapper",
                                children: [Object(b.jsx)("h1", {
                                    className: "title",
                                    children: t.home.data.attributes.Article[0].Title
                                }), Object(b.jsxs)("div", {
                                    className: "section__news__row",
                                    children: [Object(b.jsxs)("figure", {
                                        className: "section__news__media__wrapper",
                                        children: [Object(b.jsx)(j.a, {
                                            className: "section__news__media",
                                            src: w(t.home.data.attributes.Article[0]),
                                            alt: "Latest News Pic",
                                            wrapperClassName: "lazy-load-desktop-wrapper"
                                        }), Object(b.jsx)(j.a, {
                                            className: "section__news__media section__news__media--mobile",
                                            src: x(t.home.data.attributes.Article[0]),
                                            alt: "Latest News Pic",
                                            wrapperClassName: "lazy-load-mobile-wrapper"
                                        })]
                                    }), Object(b.jsx)("div", {
                                        className: "section__news__content__wrapper",
                                        children: Object(b.jsxs)("p", {
                                            className: "paragraph",
                                            children: [Object(b.jsx)("span", {
                                                className: "big",
                                                children: t.home.data.attributes.Article[0].Content[0]
                                            }), t.home.data.attributes.Article[0].Content.slice(1)]
                                        })
                                    })]
                                })]
                            }), Object(b.jsx)("div", {
                                className: "line"
                            })]
                        })
                    }), Object(b.jsx)("section", {
                        className: "news-section",
                        children: Object(b.jsxs)("div", {
                            className: "news-section-inner",
                            children: [Object(b.jsx)("div", {
                                className: "news-column",
                                children: Object(b.jsxs)("div", {
                                    className: "news",
                                    children: [Object(b.jsx)("h1", {
                                        className: "mini-title",
                                        children: t.home.data.attributes.Article[1].Title
                                    }), Object(b.jsxs)("figure", {
                                        className: "news-pic-wrapper",
                                        children: [Object(b.jsx)(j.a, {
                                            className: "news-pic",
                                            src: w(t.home.data.attributes.Article[1]),
                                            alt: "News",
                                            wrapperClassName: "lazy-load-desktop-wrapper"
                                        }), Object(b.jsx)(j.a, {
                                            className: "news-pic news-pic--mobile",
                                            src: x(t.home.data.attributes.Article[1]),
                                            alt: "News",
                                            wrapperClassName: "lazy-load-mobile-wrapper"
                                        })]
                                    }), Object(b.jsxs)("p", {
                                        className: "paragraph",
                                        children: [Object(b.jsx)("span", {
                                            className: "big",
                                            children: t.home.data.attributes.Article[1].Content[0]
                                        }), t.home.data.attributes.Article[1].Content.slice(1)]
                                    }), Object(b.jsx)("h1", {
                                        className: "mini-title",
                                        children: "\u2739\u2739\u2739"
                                    })]
                                })
                            }), Object(b.jsx)("div", {
                                className: "news-column",
                                children: Object(b.jsxs)("div", {
                                    className: "news",
                                    children: [Object(b.jsx)("h1", {
                                        className: "mini-title",
                                        children: t.home.data.attributes.Article[2].Title
                                    }), Object(b.jsxs)("figure", {
                                        className: "news-pic-wrapper",
                                        children: [Object(b.jsx)(j.a, {
                                            className: "news-pic",
                                            src: w(t.home.data.attributes.Article[2]),
                                            alt: "News",
                                            wrapperClassName: "lazy-load-desktop-wrapper"
                                        }), Object(b.jsx)(j.a, {
                                            className: "news-pic news-pic--mobile",
                                            src: x(t.home.data.attributes.Article[2]),
                                            alt: "News",
                                            wrapperClassName: "lazy-load-mobile-wrapper"
                                        })]
                                    }), Object(b.jsxs)("p", {
                                        className: "paragraph",
                                        children: [Object(b.jsx)("span", {
                                            className: "big",
                                            children: t.home.data.attributes.Article[2].Content[0]
                                        }), t.home.data.attributes.Article[2].Content.slice(1)]
                                    }), Object(b.jsx)("h1", {
                                        className: "mini-title",
                                        children: "\u2739\u2739\u2739"
                                    })]
                                })
                            })]
                        })
                    }), Object(b.jsx)("section", {
                        className: "nft-section",
                        children: Object(b.jsxs)("div", {
                            className: "nft-section-inner",
                            children: [Object(b.jsx)("h1", {
                                className: "banner-title",
                                children: t.home.data.attributes.home_banner_title[1].banner_title
                            }), Object(b.jsx)("p", {
                                className: "paragraph last",
                                children: t.home.data.attributes.min_ponzi_section.mint_ponzi_text
                            }), Object(b.jsx)(v, {})]
                        })
                    }), Object(b.jsx)("section", {
                        className: "big-news-section",
                        children: Object(b.jsxs)("div", {
                            className: "big-news-section-inner",
                            children: [Object(b.jsx)("h1", {
                                className: "banner-title",
                                children: t.home.data.attributes.home_banner_title[2].banner_title
                            }), Object(b.jsxs)("div", {
                                className: "news",
                                children: [Object(b.jsxs)("figure", {
                                    className: "news-pic-wrapper",
                                    children: [Object(b.jsx)(j.a, {
                                        className: "news-pic",
                                        src: w(t.home.data.attributes.Article[3]),
                                        alt: "News",
                                        wrapperClassName: "lazy-load-desktop-wrapper"
                                    }), Object(b.jsx)(j.a, {
                                        className: "news-pic news-pic--mobile",
                                        src: x(t.home.data.attributes.Article[3]),
                                        alt: "News",
                                        wrapperClassName: "lazy-load-mobile-wrapper"
                                    })]
                                }), Object(b.jsx)("h1", {
                                    className: "title",
                                    children: t.home.data.attributes.Article[3].Title
                                }), Object(b.jsxs)("p", {
                                    className: "paragraph",
                                    children: [Object(b.jsx)("span", {
                                        className: "big",
                                        children: t.home.data.attributes.Article[3].Content[0]
                                    }), t.home.data.attributes.Article[3].Content.slice(1)]
                                })]
                            }), Object(b.jsx)("h1", {
                                className: "banner-title",
                                children: t.home.data.attributes.home_banner_title[3].banner_title
                            }), Object(b.jsxs)("figure", {
                                className: "news-pic-wrapper",
                                children: [Object(b.jsx)(j.a, {
                                    className: "news-pic",
                                    src: w(t.home.data.attributes.Article[4]),
                                    alt: "News",
                                    wrapperClassName: "lazy-load-desktop-wrapper"
                                }), Object(b.jsx)(j.a, {
                                    className: "news-pic news-pic--mobile",
                                    src: x(t.home.data.attributes.Article[4]),
                                    alt: "News",
                                    wrapperClassName: "lazy-load-mobile-wrapper"
                                })]
                            }), Object(b.jsxs)("div", {
                                className: "news-list",
                                children: [Object(b.jsxs)("div", {
                                    className: "news-column",
                                    children: [Object(b.jsxs)("div", {
                                        className: "news-box",
                                        children: [Object(b.jsx)("h1", {
                                            className: "mini-title",
                                            children: t.home.data.attributes.Article[4].Title
                                        }), Object(b.jsxs)("p", {
                                            className: "paragraph",
                                            children: [Object(b.jsx)("span", {
                                                className: "big",
                                                children: t.home.data.attributes.Article[4].Content[0]
                                            }), t.home.data.attributes.Article[4].Content.slice(1)]
                                        })]
                                    }), Object(b.jsx)("h1", {
                                        className: "mini-title center",
                                        children: "\u2739\u2739\u2739"
                                    }), Object(b.jsxs)("div", {
                                        className: "news-box",
                                        children: [Object(b.jsx)("h1", {
                                            className: "mini-title",
                                            children: t.home.data.attributes.Article[5].Title
                                        }), Object(b.jsxs)("p", {
                                            className: "paragraph",
                                            children: [Object(b.jsx)("span", {
                                                className: "big",
                                                children: t.home.data.attributes.Article[5].Content[0]
                                            }), t.home.data.attributes.Article[5].Content.slice(1)]
                                        })]
                                    })]
                                }), Object(b.jsxs)("div", {
                                    className: "news-column",
                                    children: [Object(b.jsxs)("div", {
                                        className: "news-box",
                                        children: [Object(b.jsx)("h1", {
                                            className: "mini-title",
                                            children: t.home.data.attributes.Article[6].Title
                                        }), Object(b.jsxs)("p", {
                                            className: "paragraph",
                                            children: [Object(b.jsx)("span", {
                                                className: "big",
                                                children: t.home.data.attributes.Article[6].Content[0]
                                            }), t.home.data.attributes.Article[6].Content.slice(1)]
                                        })]
                                    }), Object(b.jsx)("h1", {
                                        className: "mini-title center",
                                        children: "\u2739\u2739\u2739"
                                    }), Object(b.jsxs)("div", {
                                        className: "news-box",
                                        children: [Object(b.jsx)("h1", {
                                            className: "mini-title",
                                            children: t.home.data.attributes.Article[7].Title
                                        }), Object(b.jsxs)("p", {
                                            className: "paragraph",
                                            children: [Object(b.jsx)("span", {
                                                className: "big",
                                                children: t.home.data.attributes.Article[7].Content[0]
                                            }), t.home.data.attributes.Article[7].Content.slice(1)]
                                        })]
                                    })]
                                })]
                            })]
                        })
                    })]
                })
            }

            function _() {
                return Object(b.jsxs)(s.b, {
                    pageClassName: "home",
                    pageWrapperClassName: "home__wrapper",
                    pageQuery: Object(g.a)(),
                    children: [Object(b.jsx)(k, {}), Object(b.jsx)(O.a, {})]
                })
            }
        }
    }
]);
//# sourceMappingURL=12.6da9d4ad.chunk.js.map