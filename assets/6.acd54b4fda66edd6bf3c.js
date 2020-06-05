(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var START_EVENT_NAME_MAP = {
  transitionstart: {
    transition: 'transitionstart',
    WebkitTransition: 'webkitTransitionStart',
    MozTransition: 'mozTransitionStart',
    OTransition: 'oTransitionStart',
    msTransition: 'MSTransitionStart'
  },

  animationstart: {
    animation: 'animationstart',
    WebkitAnimation: 'webkitAnimationStart',
    MozAnimation: 'mozAnimationStart',
    OAnimation: 'oAnimationStart',
    msAnimation: 'MSAnimationStart'
  }
};

var END_EVENT_NAME_MAP = {
  transitionend: {
    transition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd',
    MozTransition: 'mozTransitionEnd',
    OTransition: 'oTransitionEnd',
    msTransition: 'MSTransitionEnd'
  },

  animationend: {
    animation: 'animationend',
    WebkitAnimation: 'webkitAnimationEnd',
    MozAnimation: 'mozAnimationEnd',
    OAnimation: 'oAnimationEnd',
    msAnimation: 'MSAnimationEnd'
  }
};

var startEvents = [];
var endEvents = [];

function detectEvents() {
  var testEl = document.createElement('div');
  var style = testEl.style;

  if (!('AnimationEvent' in window)) {
    delete START_EVENT_NAME_MAP.animationstart.animation;
    delete END_EVENT_NAME_MAP.animationend.animation;
  }

  if (!('TransitionEvent' in window)) {
    delete START_EVENT_NAME_MAP.transitionstart.transition;
    delete END_EVENT_NAME_MAP.transitionend.transition;
  }

  function process(EVENT_NAME_MAP, events) {
    for (var baseEventName in EVENT_NAME_MAP) {
      if (EVENT_NAME_MAP.hasOwnProperty(baseEventName)) {
        var baseEvents = EVENT_NAME_MAP[baseEventName];
        for (var styleName in baseEvents) {
          if (styleName in style) {
            events.push(baseEvents[styleName]);
            break;
          }
        }
      }
    }
  }

  process(START_EVENT_NAME_MAP, startEvents);
  process(END_EVENT_NAME_MAP, endEvents);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  detectEvents();
}

function addEventListener(node, eventName, eventListener) {
  node.addEventListener(eventName, eventListener, false);
}

function removeEventListener(node, eventName, eventListener) {
  node.removeEventListener(eventName, eventListener, false);
}

var TransitionEvents = {
  // Start events
  startEvents: startEvents,

  addStartEventListener: function addStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    startEvents.forEach(function (startEvent) {
      addEventListener(node, startEvent, eventListener);
    });
  },
  removeStartEventListener: function removeStartEventListener(node, eventListener) {
    if (startEvents.length === 0) {
      return;
    }
    startEvents.forEach(function (startEvent) {
      removeEventListener(node, startEvent, eventListener);
    });
  },


  // End events
  endEvents: endEvents,

  addEndEventListener: function addEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      window.setTimeout(eventListener, 0);
      return;
    }
    endEvents.forEach(function (endEvent) {
      addEventListener(node, endEvent, eventListener);
    });
  },
  removeEndEventListener: function removeEndEventListener(node, eventListener) {
    if (endEvents.length === 0) {
      return;
    }
    endEvents.forEach(function (endEvent) {
      removeEventListener(node, endEvent, eventListener);
    });
  }
};

exports['default'] = TransitionEvents;
module.exports = exports['default'];

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(191);
/* harmony import */ var antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(126);
/* harmony import */ var antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_row__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(192);
/* harmony import */ var antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(109);
/* harmony import */ var antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_col__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(341);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(27);
/* harmony import */ var _context_from__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(49);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(64);









/* harmony default export */ __webpack_exports__["a"] = (function () {
  var from = Object(react__WEBPACK_IMPORTED_MODULE_4__["useContext"])(_context_from__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"]);
  return from.from === 'bb' ? null : react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "app-footer"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "footer-box"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", {
    className: "logo"
  }, "DAZE.JS"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_row__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    xxl: 6,
    xl: 6,
    lg: 12,
    md: 12,
    sm: 24,
    xs: 24
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", null, "\u7279\u6027"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "item"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "b"], {
    to: "/docs/core/container"
  }, "IOC \u5BB9\u5668")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "item"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "b"], {
    to: "/docs/core/privider"
  }, "\u63D0\u4F9B\u8005\u6A21\u5F0F")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "item"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "b"], {
    to: "/docs/core/autoload"
  }, "\u81EA\u52A8\u52A0\u8F7D")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "item"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "b"], {
    to: "/docs/base/controller"
  }, "\u8DEF\u7531")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "item"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "b"], {
    to: "/docs/base/database"
  }, "\u6570\u636E\u5E93")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "item"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_6__[/* Link */ "b"], {
    to: "/docs/adv/process"
  }, "\u591A\u8FDB\u7A0B"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    xxl: 6,
    xl: 6,
    lg: 12,
    md: 12,
    sm: 24,
    xs: 24
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", null, "\u751F\u6001"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "item"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://github.com/dazejs/dubbo-provider",
    target: "_blank"
  }, "Apache Dubbo")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "item"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://github.com/dazejs/jwt-provider",
    target: "_blank"
  }, "JWT"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    xxl: 6,
    xl: 6,
    lg: 12,
    md: 12,
    sm: 24,
    xs: 24
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("h4", null, "\u5E2E\u52A9"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "item"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://github.com/dazejs/daze",
    target: "_blank"
  }, "Github")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "item"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://github.com/dazejs/daze/blob/master/packages/framework/CHANGELOG.md",
    target: "_blank"
  }, "\u66F4\u65B0\u8BB0\u5F55")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "item"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://github.com/dazejs/daze/issues",
    target: "_blank"
  }, "\u8BA8\u8BBA\u5217\u8868"))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_col__WEBPACK_IMPORTED_MODULE_3___default.a, {
    xxl: 6,
    xl: 6,
    lg: 12,
    md: 12,
    sm: 24,
    xs: 24
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "Daze.js \u662F\u57FA\u4E8E Node.js \u7684 Web \u5168\u6808\u6846\u67B6\uFF0C\u5B83\u5177\u6709\u9AD8\u6027\u80FD\uFF0C\u9AD8\u6269\u5C55\u6027\uFF0C\u4F53\u9A8C\u53CB\u597D\u7684\u7279\u6027\uFF0C\u662F\u4E00\u6B3E\u9762\u5411\u672A\u6765\u7684\u6846\u67B6\u3002"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "icons"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    href: "https://github.com/dazejs/daze",
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_icons__WEBPACK_IMPORTED_MODULE_8__[/* GithubOutlined */ "c"], {
    style: {
      fontSize: 25
    }
  }))))))));
});

/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/antd/lib/layout/style/index.js
var style = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/antd/lib/layout/index.js
var layout = __webpack_require__(48);
var layout_default = /*#__PURE__*/__webpack_require__.n(layout);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/container/home/index.less
var home = __webpack_require__(350);

// EXTERNAL MODULE: ./node_modules/antd/lib/button/style/index.js
var button_style = __webpack_require__(335);

// EXTERNAL MODULE: ./node_modules/antd/lib/button/index.js
var lib_button = __webpack_require__(336);
var button_default = /*#__PURE__*/__webpack_require__.n(lib_button);

// CONCATENATED MODULE: ./src/assets/logo-banner.png
/* harmony default export */ var logo_banner = (__webpack_require__.p + "bb183d23e4f920c28f50827a9664f933.png");
// EXTERNAL MODULE: ./src/components/banner/index.less
var banner = __webpack_require__(351);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(27);

// CONCATENATED MODULE: ./src/components/banner/index.tsx






/* harmony default export */ var components_banner = (function () {
  return react_default.a.createElement("div", {
    className: "banner"
  }, react_default.a.createElement("div", {
    className: "hero"
  }, react_default.a.createElement("img", {
    src: logo_banner
  }), react_default.a.createElement("h1", null, "DAZE.JS"), react_default.a.createElement("p", {
    className: "description"
  }, "\u57FA\u4E8E Node.js \u7684 Web \u5168\u6808\u6846\u67B6\uFF0C\u672A\u6765\u5C3D\u5728\u638C\u63E1\u3002"), react_default.a.createElement("div", {
    className: "action"
  }, react_default.a.createElement(button_default.a, {
    size: "large",
    shape: "round",
    type: "primary"
  }, react_default.a.createElement(react_router_dom["b" /* Link */], {
    to: "/docs/quick-start"
  }, "\u5F00\u59CB\u4F7F\u7528")), react_default.a.createElement(button_default.a, {
    size: "large",
    shape: "round",
    icon: "github",
    style: {
      margin: '0 16px'
    }
  }, react_default.a.createElement("a", {
    href: "https://github.com/dazejs/daze",
    target: "_blank"
  }, " GITHUB ")))));
});
// EXTERNAL MODULE: ./src/components/footer/index.tsx
var footer = __webpack_require__(340);

// CONCATENATED MODULE: ./src/assets/superman.jpeg
/* harmony default export */ var superman = (__webpack_require__.p + "6c28353c20830f0105265e13f2a4d70c.jpeg");
// EXTERNAL MODULE: ./node_modules/highlight.js/lib/highlight.js
var highlight = __webpack_require__(343);
var highlight_default = /*#__PURE__*/__webpack_require__.n(highlight);

// EXTERNAL MODULE: ./node_modules/highlight.js/lib/languages/bash.js
var bash = __webpack_require__(344);
var bash_default = /*#__PURE__*/__webpack_require__.n(bash);

// EXTERNAL MODULE: ./node_modules/highlight.js/styles/atom-one-dark.css
var atom_one_dark = __webpack_require__(345);

// CONCATENATED MODULE: ./src/container/home/index.tsx










highlight_default.a.registerLanguage('bash', bash_default.a);
var Content = layout_default.a.Content;
/* harmony default export */ var container_home = __webpack_exports__["default"] = (function () {
  Object(react["useEffect"])(() => {
    highlight_default.a.initHighlightingOnLoad();
  }, []);
  return react_default.a.createElement("div", null, react_default.a.createElement(layout_default.a, {
    className: "home-layout"
  }, react_default.a.createElement(Content, null, react_default.a.createElement(components_banner, null), react_default.a.createElement("div", {
    className: "home-content"
  }, react_default.a.createElement("div", {
    className: "section-1"
  }, react_default.a.createElement("div", {
    className: "items"
  }, react_default.a.createElement("div", {
    className: "item"
  }, react_default.a.createElement("p", {
    className: "tit"
  }, "\u9AD8\u6269\u5C55\u6027"), react_default.a.createElement("p", {
    className: "con"
  }, "\u5229\u7528\u88C5\u9970\u5668\u4E0E IOC \u5BB9\u5668\u7684\u80FD\u529B\uFF0C\u521B\u5EFA\u4E86\u4E00\u4E2A\u975E\u5E38\u5927\u5F3A\u7684\u6269\u5C55\u6A21\u5F0F - \u63D0\u4F9B\u8005\uFF0C\u53EF\u4EE5\u5229\u7528\u5B83\u505A\u4F60\u4EFB\u4F55\u60F3\u505A\u7684\u4E8B")), react_default.a.createElement("div", {
    className: "item"
  }, react_default.a.createElement("p", {
    className: "tit"
  }, "\u9AD8\u6027\u80FD"), react_default.a.createElement("p", {
    className: "con"
  }, "\u5168\u65B0\u7684\u67B6\u6784\u8BBE\u8BA1\uFF0C\u4F7F\u4E4B\u5177\u6709\u524D\u6240\u672A\u6709\u7684\u9AD8\u6027\u80FD\u3002")), react_default.a.createElement("div", {
    className: "item"
  }, react_default.a.createElement("p", {
    className: "tit"
  }, "\u7075\u6D3B\u6613\u7528"), react_default.a.createElement("p", {
    className: "con"
  }, "\u4F7F\u7528\u6700\u65B0\u7684 JavaScript \u7279\u6027\u4E0E\u6210\u719F\u7684\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u521B\u5EFA\u6700\u7075\u6D3B\u4E0E\u6613\u7528\u7684 API\u3002")))), react_default.a.createElement("div", {
    className: "section-2"
  }, react_default.a.createElement("p", {
    className: "h2"
  }, "\u5148\u7779\u4E3A\u5FEB"), react_default.a.createElement("p", {
    className: "con"
  }, react_default.a.createElement("img", {
    className: "img",
    src: superman
  }))), react_default.a.createElement("div", {
    className: "section-3"
  }, react_default.a.createElement("p", {
    className: "h2"
  }, "\u5F00\u59CB\u5427\uFF01"), react_default.a.createElement("div", {
    className: "code-box"
  }, react_default.a.createElement("pre", null, react_default.a.createElement("code", {
    className: "hljs bash"
  }, `  $ npm i -g @dazejs/cli

  $ daze create project-name

  ? Which one to use for development? (Use arrow keys)
  ❯ typescript
    javascript

  ? Which package manager you wany? (Use arrow keys)
  ❯ npm
    yarn
    cnpm
`))))), react_default.a.createElement(footer["a" /* default */], null))));
});

/***/ })

}]);