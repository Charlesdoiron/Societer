webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/menuMobile.js":
/*!**********************************!*\
  !*** ./components/menuMobile.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_typos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/typos */ "./styled/typos.js");
var _jsxFileName = "/Users/charlesdoiron/Sites/societer/components/menuMobile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var isOpening = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%{transform:translateX(100%);}100%{transform:translateX(0);}"]);

var MenuMobile = function MenuMobile(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  var currentPage = router.pathname;
  var menuContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  var handleClick = function handleClick(e) {
    menuContainer.current.style.transform = "translateX(100%)";
    setTimeout(function (e) {
      props.onClick(e);
    }, 600);
  };

  var Container = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
    displayName: "menuMobile__Container",
    componentId: "sc-1lqetr6-0"
  })(["position:fixed;width:70%;height:100vh;right:0;top:0;padding:35px;background-color:", ";transition:all 500ms ease-in-out;animation:", " 500ms ease-in-out;overflow:hidden;"], function (props) {
    return props.theme.colors.white;
  }, isOpening);

  if (props.isOpen) {
    return null;
  }

  return __jsx(Container, {
    ref: menuContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx(Logo, {
    src: "pictos/logo_mobile.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx(Close, {
    src: "pictos/close_mobile.svg",
    onClick: function onClick() {
      return handleClick();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  })), __jsx(Items, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, props.content.map(function (item) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a // href={{ pathname: `${item.path}`, query: { title: item.item } }}
    , {
      key: item.item,
      onClick: function onClick() {
        return handleClick();
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx(CustomNavigation, {
      className: currentPage === item.path && "isActive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, item.item));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuMobile);
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "menuMobile__Flex",
  componentId: "sc-1lqetr6-1"
})(["display:flex;justify-content:space-between;width:100%;align-items:center;"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "menuMobile__Logo",
  componentId: "sc-1lqetr6-2"
})(["width:68px;"]);
var Close = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].img.withConfig({
  displayName: "menuMobile__Close",
  componentId: "sc-1lqetr6-3"
})(["width:13px;right:2px;position:relative;cursor:pointer;"]);
var Items = styled_components__WEBPACK_IMPORTED_MODULE_1__["default"].div.withConfig({
  displayName: "menuMobile__Items",
  componentId: "sc-1lqetr6-4"
})(["display:flex;width:100%;align-items:flex-start;flex-direction:column;margin-top:160px;"]);
var CustomNavigation = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["default"])(_styled_typos__WEBPACK_IMPORTED_MODULE_4__["Navigation"]).withConfig({
  displayName: "menuMobile__CustomNavigation",
  componentId: "sc-1lqetr6-5"
})(["margin-bottom:30px;color:", ";font-size:20px !important;line-height:28px !important;font-family:\"garnett_medium\";&.isActive{color:", ";}"], function (props) {
  return props.theme.colors.black;
}, function (props) {
  return props.theme.colors.blue;
});

/***/ })

})
//# sourceMappingURL=_app.js.2a15e7f9b29bd1673e0d.hot-update.js.map