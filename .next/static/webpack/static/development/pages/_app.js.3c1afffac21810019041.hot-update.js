webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/menuMobile.js":
/*!**********************************!*\
  !*** ./components/menuMobile.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styled_typos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/typos */ "./styled/typos.js");

var _jsxFileName = "/Users/charlesdoiron/Sites/societer/components/menuMobile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: none;\n   "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var isOpening = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(["0%{transform:translateX(100%);}100%{transform:translateX(0);}"]);

var MenuMobile = function MenuMobile(props) {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var currentPage = router.pathname;
  var menuContainer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);

  var handleClick = function handleClick(e) {
    menuContainer.current.style.transform = "translateX(100%)";
    setTimeout(function (e) {
      props.onClick(e);
    }, 600);
  };

  var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "menuMobile__Container",
    componentId: "sc-1lqetr6-0"
  })(["position:absolute;width:70%;height:100vh;right:0;top:0;padding:35px;background-color:", ";transition:all 500ms ease-in-out;animation:", " 500ms ease-in-out;"], function (props) {
    return props.theme.colors.white;
  }, isOpening);
  var CustomNavigation = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled_typos__WEBPACK_IMPORTED_MODULE_5__["Navigation"]).withConfig({
    displayName: "menuMobile__CustomNavigation",
    componentId: "sc-1lqetr6-1"
  })(["margin-right:60px;color:black;"]);

  if (!props.isOpen) {
    return null;
  }

  return __jsx(Container, {
    ref: menuContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(Logo, {
    src: "pictos/logo_mobile.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx(Close, {
    src: "pictos/close_mobile.svg",
    onClick: function onClick() {
      return handleClick();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  })), __jsx(Items, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, props.content.map(function (item) {
    return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
      href: {
        pathname: "".concat(item.path),
        query: {
          title: item.item
        }
      },
      key: item.item,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx(CustomNavigation, {
      className: currentPage === item.path && "isActive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, item.item));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuMobile);
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "menuMobile__Flex",
  componentId: "sc-1lqetr6-2"
})(["display:flex;justify-content:space-between;width:100%;align-items:center;"]);
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "menuMobile__Logo",
  componentId: "sc-1lqetr6-3"
})(["width:68px;"]);
var Close = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "menuMobile__Close",
  componentId: "sc-1lqetr6-4"
})(["width:13px;right:2px;position:relative;cursor:pointer;"]);
var Items = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "menuMobile__Items",
  componentId: "sc-1lqetr6-5"
})(["display:flex;width:100%;align-items:center;", ""], function (props) {
  return props.theme.medias.medium(_templateObject());
});

/***/ })

})
//# sourceMappingURL=_app.js.3c1afffac21810019041.hot-update.js.map