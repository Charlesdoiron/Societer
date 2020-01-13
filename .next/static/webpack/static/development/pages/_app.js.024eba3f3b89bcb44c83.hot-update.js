webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
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
/* harmony import */ var _components_menuMobile__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/menuMobile */ "./components/menuMobile.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _context_mock_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/mock-context */ "./context/mock-context.js");
/* harmony import */ var _styled_typos__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styled/typos */ "./styled/typos.js");

var _jsxFileName = "/Users/charlesdoiron/Sites/societer/components/menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n   padding-left: 30px;\n\n  "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display: none;\n   "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    transition: all 500ms;\n    height: 30px;\n   "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    transition: all 500ms;\n    height: 30px;\n   "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    display:block;\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}









var Menu = function Menu(props) {
  var _useMocks = Object(_context_mock_context__WEBPACK_IMPORTED_MODULE_6__["useMocks"])(),
      menu = _useMocks.menu;

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isOpen = _useState[0],
      setOpen = _useState[1];

  var currentPage = router.pathname;
  var currentTitle = router.query.title;
  return __jsx(MenuDesktop, {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx(MobileNavigation, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, currentPage === "/" ? __jsx(Logo, {
    src: "pictos/logo.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }) : __jsx(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(MinimalLogo, {
    src: "pictos/minimal_logo.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }), __jsx(CurrentPage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, currentTitle))), __jsx(Burger, {
    src: "pictos/burger.svg",
    onClick: function onClick() {
      return setOpen(!isOpen);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx(_components_menuMobile__WEBPACK_IMPORTED_MODULE_4__["default"], {
    isOpen: isOpen,
    onClick: function onClick() {
      return setOpen(!isOpen);
    },
    content: menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(Items, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, menu.map(function (item) {
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
        lineNumber: 42
      },
      __self: this
    }, __jsx(CustomNavigation, {
      className: currentPage === item.path && "isActive",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, item.item));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);
var Burger = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "menu__Burger",
  componentId: "sc-1aarm2u-0"
})(["width:24px;right:30px;position:relative;cursor:pointer;display:none;", ""], function (props) {
  return props.theme.medias.medium(_templateObject());
});
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "menu__Logo",
  componentId: "sc-1aarm2u-1"
})(["height:40px;cursor:pointer;", ""], function (props) {
  return props.theme.medias.medium(_templateObject2());
});
var CurrentPage = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled_typos__WEBPACK_IMPORTED_MODULE_7__["Navigation"]).withConfig({
  displayName: "menu__CurrentPage",
  componentId: "sc-1aarm2u-2"
})(["top:12px;position:relative;font-family:\"garnett_medium\";"]);
var CustomNavigation = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled_typos__WEBPACK_IMPORTED_MODULE_7__["Navigation"]).withConfig({
  displayName: "menu__CustomNavigation",
  componentId: "sc-1aarm2u-3"
})(["margin-right:60px;"]);
var Flex = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "menu__Flex",
  componentId: "sc-1aarm2u-4"
})(["display:flex;color:", ";p{margin-left:15px;}"], function (props) {
  return props.theme.colors.white;
});
var MobileNavigation = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "menu__MobileNavigation",
  componentId: "sc-1aarm2u-5"
})(["display:flex;width:100%;justify-content:space-between;align-items:center;"]);
var MinimalLogo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
  displayName: "menu__MinimalLogo",
  componentId: "sc-1aarm2u-6"
})(["height:35px;width:auto;top:5px;position:relative;cursor:pointer;", ""], function (props) {
  return props.theme.medias.medium(_templateObject3());
});
var Items = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "menu__Items",
  componentId: "sc-1aarm2u-7"
})(["display:flex;width:100%;align-items:center;", ""], function (props) {
  return props.theme.medias.medium(_templateObject4());
});
var MenuDesktop = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
  displayName: "menu__MenuDesktop",
  componentId: "sc-1aarm2u-8"
})(["display:flex;position:relative;justify-content:space-between;width:100%;padding-top:35px;padding-left:10%;z-index:10;", ""], function (props) {
  return props.theme.medias.medium(_templateObject5());
});

/***/ })

})
//# sourceMappingURL=_app.js.024eba3f3b89bcb44c83.hot-update.js.map