(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8441:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ seo)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
;// CONCATENATED MODULE: ./components/seo/index.tsx



const SeoComponent = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: ""
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                httpEquiv: "X-UA-Compatible",
                content: "IE=edge"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.googleapis.com"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "preconnect",
                href: "https://fonts.gstatic.com"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                content: "#000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-navbutton-color",
                content: "#000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "apple-mobile-web-app-status-bar-style",
                content: "#000"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "viewport",
                content: "width=device-width,initial-scale=1"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "description",
                content: "description"
            }, "desc"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                charSet: "utf-8"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "format-detection",
                content: "telephone=no"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "theme-color",
                id: "head-theme-color",
                content: "appColors.primary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-TileColor",
                id: "head-title-color",
                content: "appColors.primary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-TileColor",
                content: "#009eff"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-tap-highlight",
                content: "no"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                name: "msapplication-config",
                content: "none"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image"
            }, "ogimage"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:image:type",
                content: "png"
            }, "ogimagetype"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:type",
                content: "website"
            }, "ogtype"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:title"
            }, "ogtitle"),
            /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                property: "og:locale",
                content: "ru"
            }, "oglocale"),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "preconnect",
                href: process.env.NEXT_PUBLIC_BASE_URL
            }, "url-api"),
            /*#__PURE__*/ jsx_runtime_.jsx("link", {
                rel: "canonical"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("title", {
                children: "Экосистема современных IT-решений saf.tatar"
            })
        ]
    });
};
/* harmony default export */ const seo = (SeoComponent);


/***/ }),

/***/ 3148:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_2__]);
react_toastify__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const ToastConfigContainer = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_2__.ToastContainer, {
        position: "top-right",
        pauseOnHover: true,
        hideProgressBar: false,
        theme: "colored",
        toastStyle: {
            zIndex: 99999
        }
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToastConfigContainer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "D": () => (/* binding */ IsFulledHeader)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: external "next/router"
const router_namespaceObject = require("next/router");
// EXTERNAL MODULE: ./lib/constants.ts
var constants = __webpack_require__(8038);
;// CONCATENATED MODULE: ./hooks/is-fulled-header/index.tsx



const IsFulledHeader = ()=>{
    const [isFulledHeader, setIsFulledHeader] = (0,external_react_.useState)(false);
    const { pathname  } = (0,router_namespaceObject.useRouter)();
    const checkPathname = ()=>{
        constants/* PAGES_FULLED_HEADER.map */.X.map((item)=>{
            pathname === item ? setIsFulledHeader(false) : setIsFulledHeader(true);
        });
    };
    (0,external_react_.useEffect)(()=>{
        checkPathname();
    }, [
        pathname
    ]);
    return isFulledHeader;
};


/***/ }),

/***/ 1792:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./layout/default/footer/index.tsx


const DefaultLayoutFooter = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "footer"
    });
};
/* harmony default export */ const footer = (DefaultLayoutFooter);

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/common/link/index.tsx


const Link = (props)=>{
    const { path , children , className , onClick  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: path,
        className: className,
        onClick: onClick,
        children: children
    });
};
/* harmony default export */ const common_link = (Link);

;// CONCATENATED MODULE: ./layout/default/header/header-left/index.tsx



const DefaultHeaderLeft = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "header__left",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(common_link, {
                path: "/",
                className: "header__logo",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "/icons/logo.svg",
                    alt: "TelSafTatar",
                    layout: "responsive",
                    width: 274,
                    height: 76
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "header__left-text",
                children: "изучение Татарского языка вместе с Tel by saf.tatar"
            })
        ]
    });
};
/* harmony default export */ const header_left = (DefaultHeaderLeft);

;// CONCATENATED MODULE: ./layout/default/header/header-middle/index.tsx



const DefaultHeaderMiddle = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "header__middle",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "header__item item item-big text-blue",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "header__item-text item-text",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "header__item-title item-title",
                            children: "Чтение —"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "header__item-subtitle item-subtitle",
                            children: "тестирование способности навыков чтения"
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header__item-button item-button",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(common_link, {
                        path: "https://google.com/",
                        className: "header__item-link item-link",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "st-link"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                children: "Начать упражнение"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "header__item-img item-img",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        src: "/img/main_page/boy.png",
                        alt: "boy",
                        layout: "responsive",
                        width: 480,
                        height: 360
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const header_middle = (DefaultHeaderMiddle);

;// CONCATENATED MODULE: ./layout/default/header/header-right/index.tsx

const DefaultHeaderRight = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "header__right",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "header__item item text-white bg-pink",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "header__item-text item-text",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "header__item-name item-name",
                            children: "ХӘЗЕР ЭФИРДА:"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "header__item-live item-live",
                            children: "Габдулла Тукай. Шүрәле."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "header__item-soon item-soon",
                            children: "Илдус Әхмәтҗан укый — 11.30"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "header__item-button item-button",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            href: "frontend/layout/default/header/header-right/index",
                            target: "_blank",
                            rel: "nofollow noreferrer noopener",
                            className: "header__item-link item-link",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                    className: "st-link st-link-light"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    children: "Саф - балалар радиосы"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "header__item-icon item-icon",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("i", {
                                className: "st-music-string"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const header_right = (DefaultHeaderRight);

;// CONCATENATED MODULE: ./layout/default/header/index.tsx





const DefaultLayoutHeader = ({ isFulledHeader  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "header",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "header__container container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: isFulledHeader ? "header__content header__content-fulled" : "header__content",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(header_left, {}),
                    isFulledHeader && /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(header_middle, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx(header_right, {})
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const header = (DefaultLayoutHeader);

;// CONCATENATED MODULE: ./layout/default/container/index.tsx




const DefaultLayoutContainer = ({ children , isFulledHeader  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(header, {
                isFulledHeader: isFulledHeader
            }),
            children,
            /*#__PURE__*/ jsx_runtime_.jsx(footer, {})
        ]
    });
};
/* harmony default export */ const container = (DefaultLayoutContainer);

;// CONCATENATED MODULE: ./layout/default/index.tsx


const DefaultLayout = ({ isFulledHeader , children  })=>{
    return /*#__PURE__*/ jsx_runtime_.jsx(container, {
        isFulledHeader: isFulledHeader,
        children: children
    });
};
/* harmony default export */ const layout_default = (DefaultLayout);

;// CONCATENATED MODULE: ./layout/index.tsx



const AppLayout = ({ component , children , isFulledHeader  })=>{
    // @ts-ignore
    let Layout = layout_default;
    if (component.layout) Layout = component.layout;
    // @ts-ignore
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        isFulledHeader: isFulledHeader,
        children: children
    });
};
/* harmony default export */ const layout = (AppLayout);


/***/ }),

/***/ 8038:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "T": () => (/* binding */ API_URL),
/* harmony export */   "X": () => (/* binding */ PAGES_FULLED_HEADER)
/* harmony export */ });
const API_URL = process.env.NEXT_PUBLIC_API_URL;
const PAGES_FULLED_HEADER = [
    "/chatbot"
];


/***/ }),

/***/ 6638:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ createEmotionCache)
});

;// CONCATENATED MODULE: external "@emotion/cache"
const cache_namespaceObject = require("@emotion/cache");
var cache_default = /*#__PURE__*/__webpack_require__.n(cache_namespaceObject);
;// CONCATENATED MODULE: ./lib/createEmotionCache.ts

function createEmotionCache() {
    return cache_default()({
        key: "css"
    });
}


/***/ }),

/***/ 3847:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_seo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8441);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1792);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2805);
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_emotion_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _lib_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6638);
/* harmony import */ var _providers_query__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3854);
/* harmony import */ var _components_toast_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3148);
/* harmony import */ var _public_global_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3829);
/* harmony import */ var _public_global_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_public_global_scss__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _public_sass_style_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3692);
/* harmony import */ var _public_sass_style_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_public_sass_style_scss__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _public_toastify_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(5168);
/* harmony import */ var _public_toastify_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_public_toastify_scss__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8819);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _hooks_is_fulled_header__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(7517);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_toast_config__WEBPACK_IMPORTED_MODULE_7__]);
_components_toast_config__WEBPACK_IMPORTED_MODULE_7__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];













const clientSideEmotionCache = (0,_lib_createEmotionCache__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)();
function MyApp(props) {
    const { Component , emotionCache =clientSideEmotionCache , pageProps  } = props;
    const isFulledHeader = (0,_hooks_is_fulled_header__WEBPACK_IMPORTED_MODULE_12__/* .IsFulledHeader */ .D)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_seo__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_toast_config__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_providers_query__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                dehydratedState: pageProps.dehydratedState,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_emotion_react__WEBPACK_IMPORTED_MODULE_4__.CacheProvider, {
                    value: emotionCache,
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                        component: Component,
                        isFulledHeader: isFulledHeader,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                            ...pageProps
                        })
                    })
                })
            })
        ]
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3854:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ query)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
;// CONCATENATED MODULE: external "react-query"
const external_react_query_namespaceObject = require("react-query");
;// CONCATENATED MODULE: external "react-query/hydration"
const hydration_namespaceObject = require("react-query/hydration");
;// CONCATENATED MODULE: ./providers/query/index.tsx




const QueryProvider = ({ children , dehydratedState  })=>{
    const queryClientRef = external_react_default().useRef(undefined);
    if (!queryClientRef.current) {
        queryClientRef.current = new external_react_query_namespaceObject.QueryClient({
            defaultOptions: {
                queries: {
                    refetchOnWindowFocus: false,
                    refetchOnMount: false
                }
            }
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_query_namespaceObject.QueryClientProvider, {
        client: queryClientRef.current,
        children: /*#__PURE__*/ jsx_runtime_.jsx(hydration_namespaceObject.Hydrate, {
            state: dehydratedState,
            children: children
        })
    });
};
/* harmony default export */ const query = (QueryProvider);


/***/ }),

/***/ 3829:
/***/ (() => {



/***/ }),

/***/ 3692:
/***/ (() => {



/***/ }),

/***/ 5168:
/***/ (() => {



/***/ }),

/***/ 2805:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 8524:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3590:
/***/ ((module) => {

"use strict";
module.exports = import("react-toastify");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,676,848], () => (__webpack_exec__(3847)));
module.exports = __webpack_exports__;

})();