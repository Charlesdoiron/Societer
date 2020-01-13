module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./components/menu.js");
/* harmony import */ var _socials__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socials */ "./components/socials.js");
var _jsxFileName = "/Users/charlesdoiron/Sites/societer/components/layout.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Layout = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_menu__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx(_socials__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/menu.js":
/*!****************************!*\
  !*** ./components/menu.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_menuMobile__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/menuMobile */ "./components/menuMobile.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _context_mock_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../context/mock-context */ "./context/mock-context.js");
/* harmony import */ var _styled_typos__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styled/typos */ "./styled/typos.js");
var _jsxFileName = "/Users/charlesdoiron/Sites/societer/components/menu.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Menu = props => {
  const {
    menu
  } = Object(_context_mock_context__WEBPACK_IMPORTED_MODULE_5__["useMocks"])();
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  const {
    0: isOpen,
    1: setOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const currentPage = router.pathname;
  const currentTitle = router.query.title;
  return __jsx(MenuDesktop, {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx(MobileNavigation, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, currentPage === "/" ? __jsx(Logo, {
    src: "pictos/logo.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }) : __jsx(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx(MinimalLogo, {
    src: "pictos/minimal_logo.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }), __jsx(CurrentPage, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, currentTitle))), __jsx(Burger, {
    src: "pictos/burger.svg",
    onClick: () => setOpen(!isOpen),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  })), __jsx(_components_menuMobile__WEBPACK_IMPORTED_MODULE_3__["default"], {
    isOpen: isOpen,
    onClick: () => setOpen(!isOpen),
    content: menu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx(Items, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, menu.map(item => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: {
      pathname: `${item.path}`,
      query: {
        title: item.item
      }
    },
    key: item.item,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: undefined
  }, __jsx(CustomNavigation, {
    className: currentPage === item.path && "isActive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, item.item)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Menu);
const Burger = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "menu__Burger",
  componentId: "sc-1aarm2u-0"
})(["width:24px;right:30px;position:relative;cursor:pointer;display:none;", ""], props => props.theme.medias.medium`
    display:block;
  `);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "menu__Logo",
  componentId: "sc-1aarm2u-1"
})(["height:40px;cursor:pointer;", ""], props => props.theme.medias.medium`
    transition: all 500ms;
    height: 30px;
   `);
const CurrentPage = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styled_typos__WEBPACK_IMPORTED_MODULE_6__["Navigation"]).withConfig({
  displayName: "menu__CurrentPage",
  componentId: "sc-1aarm2u-2"
})(["top:12px;position:relative;font-family:\"garnett_medium\";"]);
const CustomNavigation = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styled_typos__WEBPACK_IMPORTED_MODULE_6__["Navigation"]).withConfig({
  displayName: "menu__CustomNavigation",
  componentId: "sc-1aarm2u-3"
})(["margin-right:60px;white-space:nowrap;"]);
const Flex = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "menu__Flex",
  componentId: "sc-1aarm2u-4"
})(["display:flex;color:", ";p{margin-left:15px;}"], props => props.theme.colors.white);
const MobileNavigation = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "menu__MobileNavigation",
  componentId: "sc-1aarm2u-5"
})(["display:flex;width:100%;justify-content:space-between;align-items:center;"]);
const MinimalLogo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "menu__MinimalLogo",
  componentId: "sc-1aarm2u-6"
})(["height:35px;width:auto;top:5px;position:relative;cursor:pointer;", ""], props => props.theme.medias.medium`
    transition: all 500ms;
    height: 30px;
   `);
const Items = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "menu__Items",
  componentId: "sc-1aarm2u-7"
})(["display:flex;width:100%;align-items:center;", ""], props => props.theme.medias.medium`
    display: none;
   `);
const MenuDesktop = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "menu__MenuDesktop",
  componentId: "sc-1aarm2u-8"
})(["display:flex;position:relative;justify-content:space-between;width:100%;padding-top:35px;padding-left:10%;z-index:10;", ""], props => props.theme.medias.medium`
   padding-left: 30px;

  `);

/***/ }),

/***/ "./components/menuMobile.js":
/*!**********************************!*\
  !*** ./components/menuMobile.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styled_typos__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/typos */ "./styled/typos.js");
var _jsxFileName = "/Users/charlesdoiron/Sites/societer/components/menuMobile.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const isOpening = Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["keyframes"])(["0%{transform:translateX(100%);}100%{transform:translateX(0);}"]);

const MenuMobile = props => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  const currentPage = router.pathname;
  const menuContainer = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);

  const handleClick = e => {
    menuContainer.current.style.transform = "translateX(100%)";
    setTimeout(e => {
      props.onClick(e);
    }, 600);
  };

  const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
    displayName: "menuMobile__Container",
    componentId: "sc-1lqetr6-0"
  })(["position:fixed;width:70%;height:100vh;right:0;top:0;padding:35px;background-color:", ";transition:all 500ms ease-in-out;animation:", " 500ms ease-in-out;overflow:hidden;"], props => props.theme.colors.white, isOpening);

  if (!props.isOpen) {
    return null;
  }

  return __jsx(Container, {
    ref: menuContainer,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: undefined
  }, __jsx(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx(Logo, {
    src: "pictos/logo_mobile.svg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }), __jsx(Close, {
    src: "pictos/close_mobile.svg",
    onClick: () => handleClick(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  })), __jsx(Items, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: undefined
  }, props.content.map(item => __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    key: item.item,
    href: {
      pathname: `${item.path}`,
      query: {
        title: item.item
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(CustomNavigation, {
    className: currentPage === item.path && "isActive",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: undefined
  }, item.item)))));
};

/* harmony default export */ __webpack_exports__["default"] = (MenuMobile);
const Flex = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "menuMobile__Flex",
  componentId: "sc-1lqetr6-1"
})(["display:flex;justify-content:space-between;width:100%;align-items:center;"]);
const Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "menuMobile__Logo",
  componentId: "sc-1lqetr6-2"
})(["width:68px;"]);
const Close = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img.withConfig({
  displayName: "menuMobile__Close",
  componentId: "sc-1lqetr6-3"
})(["width:13px;right:2px;position:relative;cursor:pointer;"]);
const Items = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "menuMobile__Items",
  componentId: "sc-1lqetr6-4"
})(["display:flex;width:100%;align-items:flex-start;flex-direction:column;margin-top:160px;"]);
const CustomNavigation = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styled_typos__WEBPACK_IMPORTED_MODULE_4__["Navigation"]).withConfig({
  displayName: "menuMobile__CustomNavigation",
  componentId: "sc-1lqetr6-5"
})(["margin-bottom:30px;color:", ";font-size:20px !important;line-height:28px !important;font-family:\"garnett_medium\";&.isActive{color:", ";}"], props => props.theme.colors.black, props => props.theme.colors.blue);

/***/ }),

/***/ "./components/socials.js":
/*!*******************************!*\
  !*** ./components/socials.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styled_typos__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styled/typos */ "./styled/typos.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/charlesdoiron/Sites/societer/components/socials.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const rsx = [{
  name: "Twitter",
  url: "https://twitter.fr"
}, {
  name: "Linkedin",
  url: "https://linkedin.fr"
}, {
  name: "Instagram",
  url: "https://instagram.fr"
}];

const socials = () => {
  return __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, rsx.map(el => __jsx(Limit, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(_styled_typos__WEBPACK_IMPORTED_MODULE_1__["SmallNavigation"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, el.name))));
};

/* harmony default export */ __webpack_exports__["default"] = (socials);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "socials__Container",
  componentId: "sc-1utpp6v-0"
})(["position:fixed;z-index:200;right:40px;top:50%;transform:translateY(-50%);", ""], props => props.theme.medias.medium`
    display:none;
   `);
const Limit = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "socials__Limit",
  componentId: "sc-1utpp6v-1"
})(["transition:all 500ms;position:relative;text-align:right;width:80px;overflow:hidden;text-align:left;p{left:65px;position:relative;transition:all 500ms;&:hover{left:10px;cursor:pointer;transition:all 500ms;}}"]);

/***/ }),

/***/ "./config/index.js":
/*!*************************!*\
  !*** ./config/index.js ***!
  \*************************/
/*! exports provided: theme */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme */ "./config/theme/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "theme", function() { return _theme__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./config/theme/colors.js":
/*!********************************!*\
  !*** ./config/theme/colors.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  black: "#101010",
  white: "#FFFFFF",
  blue: "#492EFA"
});

/***/ }),

/***/ "./config/theme/fonts.js":
/*!*******************************!*\
  !*** ./config/theme/fonts.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  fontFamily: "'garnett_regular', sans-serif",
  biggest: {
    fontSize: "54px",
    lineHeight: "81px"
  },
  biggerPlus: {
    fontSize: "32px",
    lineHeight: "48px",
    marginBottom: "48px"
  },
  bigger: {
    fontSize: "30px",
    lineHeight: "45px",
    marginBottom: "45px"
  },
  big: {
    fontSize: "22px",
    lineHeight: "33px"
  },
  mediumPlus: {
    fontSize: "20px",
    lineHeight: "30px",
    marginBottom: "8px"
  },
  medium: {
    fontSize: "18px",
    lineHeight: "27px",
    marginBottom: "8px"
  },
  small: {
    fontSize: "16px",
    lineHeight: "24px"
  },
  smallerPlus: {
    fontSize: "14px",
    lineHeight: "21px"
  },
  smaller: {
    fontSize: "14px",
    lineHeight: "21px"
  },
  smallest: {
    fontSize: "12px",
    lineHeight: "18px"
  }
});

/***/ }),

/***/ "./config/theme/globalStyles.js":
/*!**************************************!*\
  !*** ./config/theme/globalStyles.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"]`

@font-face {
    font-family: 'garnett_regular_italic';
    src: url('fonts/garnett_italic-webfont.eot');
    src: url('fonts/garnett_italic-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/garnett_italic-webfont.woff2') format('woff2'),
         url('fonts/garnett_italic-webfont.woff') format('woff'),
         url('fonts/garnett_italic-webfont.ttf') format('truetype'),
         url('fonts/garnett_italic-webfont.svg#garnett_regularitalic') format('svg');
    font-weight: normal;
    font-style: normal;

}




@font-face {
    font-family: 'garnett_medium_italic';
    src: url('fonts/garnett_medium_italic-webfont.eot');
    src: url('fonts/garnett_medium_italic-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/garnett_medium_italic-webfont.woff2') format('woff2'),
         url('fonts/garnett_medium_italic-webfont.woff') format('woff'),
         url('fonts/garnett_medium_italic-webfont.ttf') format('truetype'),
         url('fonts/garnett_medium_italic-webfont.svg#garnett_mediumitalic') format('svg');
    font-weight: normal;
    font-style: normal;

}




@font-face {
    font-family: 'garnett_medium';
    src: url('fonts/garnett_medium-webfont.eot');
    src: url('fonts/garnett_medium-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/garnett_medium-webfont.woff2') format('woff2'),
         url('fonts/garnett_medium-webfont.woff') format('woff'),
         url('fonts/garnett_medium-webfont.ttf') format('truetype'),
         url('fonts/garnett_medium-webfont.svg#garnett_mediumregular') format('svg');
    font-weight: 500;
    font-style: normal;

}




@font-face {
    font-family: 'garnett_regular';
    src: url('fonts/garnett_regular-webfont.eot');
    src: url('fonts/garnett_regular-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/garnett_regular-webfont.woff2') format('woff2'),
         url('fonts/garnett_regular-webfont.woff') format('woff'),
         url('fonts/garnett_regular-webfont.ttf') format('truetype'),
         url('fonts/garnett_regular-webfont.svg#garnett_regularregular') format('svg');
    font-weight: 500;
    font-style: normal;

}




@font-face {
    font-family: 'garnett_bold';
    src: url('fonts/garnett-bold-webfont.eot');
    src: url('fonts/garnett-bold-webfont.eot?#iefix') format('embedded-opentype'),
         url('fonts/garnett-bold-webfont.woff2') format('woff2'),
         url('fonts/garnett-bold-webfont.woff') format('woff'),
         url('fonts/garnett-bold-webfont.ttf') format('truetype'),
         url('fonts/garnett-bold-webfont.svg#garnettbold') format('svg');
    font-weight: bold;
    font-style: normal;

}



   html {
      box-sizing: border-box;
      margin:0;
      padding:0;
      background-color: #101010;
    }
    body {
      margin:0;
      padding:0;
      font-weight: 400;
      line-height: 24px;
      height:100vh;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;

    }
    html,
    body {
      min-height: 100%;
    }
    *,
    *:before,
    *:after {
      box-sizing: inherit;
    }
    :root {
      -moz-tab-size: 4;
      tab-size: 4;
    }
`;
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyles);

/***/ }),

/***/ "./config/theme/index.js":
/*!*******************************!*\
  !*** ./config/theme/index.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./colors */ "./config/theme/colors.js");
/* harmony import */ var _globalStyles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./globalStyles */ "./config/theme/globalStyles.js");
/* harmony import */ var _medias__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./medias */ "./config/theme/medias.js");
/* harmony import */ var _fonts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts */ "./config/theme/fonts.js");




/* harmony default export */ __webpack_exports__["default"] = ({
  colors: _colors__WEBPACK_IMPORTED_MODULE_0__["default"],
  medias: _medias__WEBPACK_IMPORTED_MODULE_2__["default"],
  fonts: _fonts__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./config/theme/medias.js":
/*!********************************!*\
  !*** ./config/theme/medias.js ***!
  \********************************/
/*! exports provided: ScreenSizes, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScreenSizes", function() { return ScreenSizes; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


const ScreenSizes = {
  SMALL: 375,
  MEDIUM: 768,
  MEDIUMPLUS: 850,
  LARGE: 1224,
  XLARGE: 1824
};
const sizes = {
  small: ScreenSizes.SMALL,
  medium: ScreenSizes.MEDIUM,
  mediumPlus: ScreenSizes.MEDIUMPLUS,
  large: ScreenSizes.LARGE,
  xlarge: ScreenSizes.XLARGE
};

const media = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(sizes).reduce((acc, label) => {
  acc[label] = (...args) => Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(["@media (max-width:", "em){", "}"], sizes[label] / 16, Object(styled_components__WEBPACK_IMPORTED_MODULE_1__["css"])(...args));

  return acc;
}, {});

/* harmony default export */ __webpack_exports__["default"] = (media);

/***/ }),

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/*! exports provided: MockProvider, useMocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mock_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mock-context */ "./context/mock-context.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MockProvider", function() { return _mock_context__WEBPACK_IMPORTED_MODULE_0__["MockProvider"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useMocks", function() { return _mock_context__WEBPACK_IMPORTED_MODULE_0__["useMocks"]; });



/***/ }),

/***/ "./context/mock-context.js":
/*!*********************************!*\
  !*** ./context/mock-context.js ***!
  \*********************************/
/*! exports provided: MockProvider, useMocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockProvider", function() { return MockProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useMocks", function() { return useMocks; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _mocks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mocks */ "./context/mocks/index.js");

var _jsxFileName = "/Users/charlesdoiron/Sites/societer/context/mock-context.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const MockContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});

function MockProvider(props) {
  return __jsx(MockContext.Provider, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    value: _mocks__WEBPACK_IMPORTED_MODULE_2__["default"]
  }, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }));
}

function useMocks() {
  const context = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(MockContext);

  if (context === undefined) {
    throw new Error(`useMocks must be used within a MockProvider`);
  }

  return context;
}



/***/ }),

/***/ "./context/mocks/communaute.js":
/*!*************************************!*\
  !*** ./context/mocks/communaute.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styled_typos__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styled/typos */ "./styled/typos.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  members: [{
    subTitle: "présidente et co-fondatrice",
    img: "images/communaute/aurelie_motta-rivey.jpg",
    name: "Aurélie Motta-Rivey",
    description: "Jusqu’ici Conseillère pour la Communication et les Partenariats auprès de la Directrice générale de l’UNESCO, Audrey AZOULAY. Elle a commencé sa carrière au Quai d’Orsay, comme Conseillère presse internationale de ministres de l’Europe et des Affaires étrangères, avant de rejoindre la Mission permanente de la France auprès Nations Unies à New York comme conseillère presse et Porte-Parole adjointe. Elle a ensuite mis son expertise en stratégie de communication au service du Ministère des Affaires sociales, notamment sur les enjeux d’égalité femmes hommes et de droits des femmes. Avant de rejoindre l’UNESCO, elle était Associée et membre du Comité exécutif du cabinet de conseil en stratégie de Communication TILDER. Diplômée de Droit et de Sciences Po Paris, elle est aujourd’hui Maître de conférences à Sciences Po dans le Master international de l’École du Management et de l’Innovation sur les sujets de stratégies d’influence et de communication de crise.",
    engagements: {
      subTitle: "engagements",
      description: "Elle est engagée à titre personnel dans la valorisation des institutions internationales comme membre du board du think- tank européen EuropaNova et Vice - Présidente de l’Association Française pour les Nations Unies(AFNU).Elle a notamment contribué à l’essai 60 idées pour Emmanuel Macron, Éditions Débats Publics, dans lequel elle plaide pour l’émergence d’une « diplomatie nouvelle génération », collaborative entre le secteur privé et la société civile."
    },
    socials: {
      twitter: "https://twiter.com",
      linkedin: "https://linkedin.com"
    }
  }, {
    subTitle: "Directrice générale et co-fondatrice",
    img: "images/communaute/mathilde_olivey.jpg",
    name: "Mathilde Oliveau",
    description: "A fondé et dirige SENSIBLE, maison de conseil en stratégie éditoriale et de contenus dédiée à la prise de parole des dirigeants et des marques. Elle était dans ses précédentes fonctions directrice générale de la société de conseil aux dirigeants ALTERMIND, ancrée dans le monde académique, et plume de plusieurs personnalités publiques. Auparavant, elle a été Conseiller Discours du Président de l’Assemblée nationale, et Conseiller pour la communication de la Commission pour la libération de la croissance française présidée par Jacques ATTALI. En début de carrière, elle a mené plusieurs missions de conseil en communication dans le champ des affaires publiques - Ministère de l’économie, Médiation du Crédit aux entreprises, et des affaires culturelles – Établissement public du musée et domaine national de Versailles, Musée du Louvre, Centre Pompidou.",
    engagements: {
      subTitle: "engagements",
      description: "Ancienne élève de Sciences Po Paris, de l’École des Hautes Études en Sciences Sociales et de l’École du Louvre, elle fait de la transmission l’un de ses engagements. Elle a ainsi enseigné à Sciences Po en histoire des idées politiques et intervient régulièrement pour des communications en milieu universitaire, notamment sur la culture flamenca."
    },
    socials: {
      twitter: "https://twiter.com",
      linkedin: "https://linkedin.com"
    }
  }, {
    subTitle: "Associée et co-fondatrice",
    img: "images/communaute/nathalie_de_gaulle.jpg",
    name: "Nathalie de Gaulle",
    description: "A commencé sa carrière à la SOCIETE GENERALE CIB de Londres, avant de rejoindre la Direction financière du groupe ENGIE dans le cadre de son programme de cadres à haut potentiel. En 2012, elle crée Baynuna Economic Consulting , société d’Intelligence stratégique aux Emirats arabes unis, en partenariat avec le groupe technologique BAYNUNA. En 2018, après une expérience comme Directrice des Affaires gouvernementales et Banques centrales de la start-up LEDGER, elle co-fonde la société de Recherche & Développement NB-INOV, une société de biotechnologie, visant à développer des bioplastiques dans des secteurs industriels à haute performance. En 2019, elle intègre le Board d’ANTAEUS TECHNOLOGIES, société américaine spécialisée en Cloud et en Intelligence Artificielle sur le secteur énergétique, et établit PRINCEPS STRATEGY, société de conseil en Développement stratégique et Affaires institutionnelles. Diplômée de Sciences Po Paris et d’HEC, elle également certifiée par le Massachusetts Institute of Technology (MIT).",
    engagements: {
      subTitle: "engagements",
      description: "Nathalie de Gaulle est Vice-présidente de la fédération de clubs de femmes d’affaires FEMININ PLURIEL GLOBAL, et ancienne élue des Français de l’étranger. Elle est par ailleurs membre du COMEX40, le Comité Exécutif du MEDEF qui regroupe 45 dirigeants et fondateurs de moins de 40 ans, et membre du Comité exécutif de la Fondation Croissance Responsable."
    },
    socials: {
      twitter: "https://twiter.com",
      linkedin: "https://linkedin.com"
    }
  }, {
    subTitle: "conseil",
    img: "images/communaute/myassa_djebara.jpg",
    name: "Myassa Djebara",
    description: "Diplômée de Sciences Po en Affaires publiques et de l’Université Paris-Sorbonne en Droit, Myassa Djebara a travaillé au Sénat auprès du Président de la Commission des Lois, puis au sein d’Altermind, cabinet de conseil aux dirigeants en stratégie ancré dans le monde académique. Elle a ensuite été nommée chargée de mission pour le European Forum For Urban Security, réseau international de collectivités locales dédié à la prévention de la criminalité. Spécialisée notamment dans la lutte contre l’extrémisme violent - en particulier dans l’espace numérique, elle a mené des études de terrain et des campagnes locales de discours alternatifs dans plusieurs pays européens (Allemagne, Espagne, France notamment). Depuis 2018, elle est partenaire de Sensible, Maison de conseil en stratégie éditoriale.",
    engagements: {
      subTitle: "engagements",
      description: "Myassa Djebara est membre depuis 2016 du Young Transatlantic Network for Future Leaders du German Marshall Fund, dédié aux relations transatlantiques. Elle a également été membre du programme Middle East-North Africa d’Open Diplomacy, institut qui favorise la participation de la société civile aux affaires internationales, et fait partie de la première promotion d’ alumni de la Middle East Mediterranean Freethinking Platform, dirigée par le Professeur Gilles Kepel, dédiée aux enjeux géopolitiques du monde arabe. En tant qu’ alumni, elle a été sollicitée comme représentante de la société civile lors de rencontres diplomatiques internationales. En 2011, elle cofonde, à Sciences Po, l’association Noise, la ville dédiée aux cultures urbaines et aux enjeux des villes de demain."
    },
    socials: {
      twitter: "https://twiter.com",
      linkedin: "https://linkedin.com"
    }
  }, {
    subTitle: "conseil",
    img: "images/communaute/tess_pettavino.jpg",
    name: "Tess Pettavino",
    description: "Diplômée d’un double master Sciences Po et HEC Paris en Corporate and Public Management, Tess Pettavino a une forte sensibilité internationale : de nationalités française et canadienne, elle fait ses études en milieu anglophone, apprend le mandarin, étudie et travaille à Singapour. Après une collaboration avec l’agence de communication créative Fred & Farid auprès de la Direction Luxe et International, elle rejoint le mouvement En Marche ! à ses débuts en avril 2016. Elle contribue à la structuration du mouvement et à celle de sa communication, notamment digitale. Lors de la campagne pour les élections présidentielle et législatives de 2017, elle devient responsable des Relations Adhérents & Citoyens, et se forme notamment au Nudge. À l’issue des élections, elle devient Responsable Marketing et Planning Stratégique du mouvement et coordonne les effectifs du Pôle Communication. En 2018, elle devient Directrice de la Communication d’En Marche ! et siège à ce titre au Comité de Direction du mouvement. Sous la direction du Délégué Général, elle prend la responsabilité d’une équipe de 25 personnes (presse, porte-parolat, digital, événementiel, relations publiques), qu’elle anime sur la promotion des actions du mouvement, les temps forts politiques et les séquences de crise.",
    engagements: {
      subTitle: "engagements",
      description: "Membre du projet ONLY WATCH depuis sa genèse - vente aux enchères caritative de montres pièces uniques au profit de la recherche contre les myopathies, qui a permis de lever plus de 70 millions d’euros en 8 éditions et de se rapprocher de manière substantielle des essais cliniques -, elle accompagne l’événement pour sa communication stratégique et son organisation. Elle conseille également à titre non-profit plusieurs associations et projets à vocation caritative."
    },
    socials: {
      twitter: "https://twiter.com",
      linkedin: "https://linkedin.com"
    }
  }, {
    subTitle: "conseil",
    img: "images/communaute/lea_tallien_de_cabarrus.jpg",
    name: "Léa Tallien de Cabarrus",
    description: "Diplômée de Sciences Po Paris en International Public Management et Communication, Médias et Industries Créatives, Léa Tallien de Cabarrus a étudié les Relations Internationales à l’Université de Bath avant de rejoindre l’Ambassade de France en Irlande en Chancellerie diplomatique. Elle a ensuite intégré la start-up Pandacraft en tant que responsable achats et logistiques, puis Orange Digital Ventures en tant qu’analyste. Avant d’intégrer Societer, Léa était à la direction de la Communication et des Affaires Publiques de General Electric France, en charge de la communication de la CEO, des réseaux sociaux, de la communication interne et des communications de crise",
    engagements: {
      subTitle: "engagements",
      description: "Particulièrement sensible aux enjeux d’écologie et d‘égalité femmes-hommes, Léa a mené différents travaux de recherche et s’engage sur ces sujets dans de nombreuses actions non-profit."
    },
    socials: {
      twitter: "https://twiter.com",
      linkedin: "https://linkedin.com"
    }
  }],
  strategicComite: {
    smallSubtitle: "Le comité stratégique",
    members: [{
      name: "Bertrand BADRE",
      status: "— CEO de BlueLikeanOrange, Parrain du Planet Lab et précédemment Directeur général de la Banque Mondiale -"
    }, {
      name: "Véronique BOUREZ",
      status: "— Présidente et fondatrice de View Beyond, précédemment Présidente de Coca-Cola France -"
    }, {
      name: "Robert ZARADER",
      status: "— CEO d’Equancy and Co -"
    }, {
      name: "Erick ROCHE",
      status: "— Teva Pharmaceuticals."
    }]
  }
});

/***/ }),

/***/ "./context/mocks/homepage.js":
/*!***********************************!*\
  !*** ./context/mocks/homepage.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  subtitle: "Maison de conseil en",
  title: "Sustainable leaders"
});

/***/ }),

/***/ "./context/mocks/index.js":
/*!********************************!*\
  !*** ./context/mocks/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./menu */ "./context/mocks/menu.js");
/* harmony import */ var _communaute__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./communaute */ "./context/mocks/communaute.js");
/* harmony import */ var _manifeste__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./manifeste */ "./context/mocks/manifeste.js");
/* harmony import */ var _proposition__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./proposition */ "./context/mocks/proposition.js");
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage */ "./context/mocks/homepage.js");





/* harmony default export */ __webpack_exports__["default"] = ({
  menu: _menu__WEBPACK_IMPORTED_MODULE_0__["default"],
  homepage: _homepage__WEBPACK_IMPORTED_MODULE_4__["default"],
  communaute: _communaute__WEBPACK_IMPORTED_MODULE_1__["default"],
  manifeste: _manifeste__WEBPACK_IMPORTED_MODULE_2__["default"],
  proposition: _proposition__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./context/mocks/manifeste.js":
/*!************************************!*\
  !*** ./context/mocks/manifeste.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  firstPart: {
    subtitle: "Le Manifeste",
    odd: {
      title: "Agenda 2030",
      content: "<strong>Les 17 Objectifs de Développement Durable sont issus de l’Agenda 2030 des Nations Unies </strong>; ils indiquent la marche à suivre et les sous-objectifs à atteindre pour s’attaquer aux problématiques telles que le réchauffement climatique, la biodiversité, la pauvreté, l’assainissement de l’eau, l’égalité entre les sexes, une éducation de qualité pour tous… Le 17e objectif est celui des partenariats, qui suppose l’alliance et le dialogue de l’ensemble des acteurs au service de cet agenda commun : il est essentiel dans la réussite de tous les ODD. C’est notamment dans cette dynamique collaborative que Societer s’engage.",
      link: {
        label: "En savoir plus",
        url: "https://www.un.org/sustainabledevelopment/fr/objectifs-de-developpement-durable/"
      }
    },
    agenda: {
      title: "17 objectifs de développement durable ",
      content: "L’Agenda 2030 des Nations Unies correspond au Programme de développement durable à l’horizon 2030 adopté par l’Assemblée Générale des Nations Unies. A l’aide de 17 Objectifs de Développement Durables <strong> (ODD)</strong> l’Agenda 2030 fixe un cap à la communauté internationale en termes de développement durable. <strong>Il constitue selon nous le seul agenda de référence pour définir un engagement sociétal, sous-tendu par une réelle volonté d’impact.</strong> Nous croyons que des coalitions entre tous les acteurs doivent se former autour de ces objectifs pour réussir et voir nos luttes contre la pauvreté, les inégalités et le réchauffement climatique aboutir.",
      link: {
        label: "En savoir plus",
        url: "https://www.un.org/sustainabledevelopment/fr/development-agenda/"
      }
    }
  },
  secondPart: {
    subtitle: "Tribune Fondatrice",
    title: "Dirigeants d'entreprise, engagez-vous pour sauver le monde… et votre business",
    media: {
      logo: "images/manifeste/les-echos.svg",
      width: 18
    },
    authors: [{
      name: "Bertrand Badré",
      slug: "bertrand-badre"
    }, {
      name: "Nathalie de Gaulle",
      slug: "nathalie-de-gaulle"
    }, {
      name: "Aurélie Motta-Rivey",
      slug: "aurelie-motta-rivey"
    }, {
      name: "Mathilde Oliveau",
      slug: "mathilde-oliveau"
    }],
    published: "19 Juillet 2019",
    sections: [{
      title: "LE CERCLE - Le dernier sommet du G20 a mis en lumière l'urgence de promouvoir de nouvelles formes de coopération entre secteurs public, privé et société civile. Selon un collectif de personnalités, les dirigeants d'entreprise ont plus que jamais un rôle déterminant à jouer dans l'émergence de ce multilatéralisme nouvelle génération, qui seul permettra d'apporter des solutions durables aux grands défis de notre planète",
      content: "Le 29 juin dernier, à Osaka, au Japon, les membres du G20 ont fini par arracher un accord a minima sur le climat. Au-delà des Etats, des formes inédites de coopération entre les territoires, les entreprises, les ONG montent en puissance pour agir face à l'urgence. Partout, les entreprises se mobilisent, du Global Business Forum, à New York, à cette coalition inattendue de grands investisseurs mondiaux qui, en marge du sommet d'Osaka, a réclamé aux gouvernements une indispensable concertation climatique. C'est précisément dans cette capacité à former des coalitions innovantes entre secteur public, secteur privé et société civile que réside l'avenir de notre planète. Face aux défis cruciaux de notre temps (climat, biodiversité, éducation, alimentation, croissance durable, santé, égalité femmes-hommes, ruptures technologiques…), aucun Etat, si puissant soit-il, ne peut imaginer agir seul. Les instances nationales et multilatérales analysent, alertent, fixent des caps indispensables. A l'heure de la tentation du repli sur soi, les Nations unies restent le seul modèle de gouvernance mondial inclusif. Les objectifs du développement durable (ODD) des Nations unies sont l'unique agenda planétaire qui permette d'envisager, pour la planète et l'humanité, une sortie de crise coordonnée. Mais le système multilatéral n'a ni la vocation ni les moyens de les traduire en actes sur le terrain pour transformer en profondeur les cultures et les organisations."
    }, {
      title: "Exigences socétales",
      content: "De leur côté, les dirigeants d'entreprise sont sous le feu d'exigences sociétales sans précédent. Les citoyens veulent consommer mieux, soucieux de circuits de production et de consommation responsables. Les nouvelles générations exigent de leurs employeurs une capacité à donner du sens. En France, le rapport Senard-Notat ainsi que la loi Pacte, ensuite, ont consacré sur le plan normatif la raison d'être des entreprises. Pour les dirigeants, placer et incarner pro-activement l'engagement sociétal au coeur de la stratégie est devenu une condition sine qua non de performance durable. Mais, pour livrer tout son potentiel économique et sociétal, la définition et la révélation de ce « business purpose » doivent être sincères et ciblées avec une extrême pertinence au regard tant des attentes citoyennes que de l'agenda planétaire. Aucun des 17 ODD ne sera atteint sans y associer la société civile. Aucune croissance durable n'est désormais possible sans engagement des entreprises dans la société."
    }, {
      title: "Une diplomatie à structurer",
      content: "Pour relever les défis immenses qui nous attendent, les initiatives qui émergent en ce sens doivent être structurées et coordonnées à grande échelle. Une rupture de méthode, dans la lignée des Accords de Paris, est indispensable pour créer un électrochoc dans le débat public et esquisser une nouvelle gouvernance mondiale. La France, compte tenu de son influence sur la scène internationale, a un leadership singulier à prendre pour structurer cette diplomatie nouvelle génération. A cet égard, l'approche adoptée pour le prochain G7, à Biarritz, avec la création d'un Business 7 (B7) qui réunit le Medef et des organisations syndicales des six autres pays du G7 va dans le bon sens. Avec le One Planet Summit impulsé par le président Macron, Paris est devenu le premier promoteur d'une diplomatie collaborative sur le climat et un ambassadeur naturel de la co-construction public-privé. Outre un acte politique fort et visionnaire, ce « sustainable new deal » est la seule voie pour apporter des solutions concrètes à chacun des grands défis mondiaux. Et pour y parvenir l'engagement des dirigeants d'entreprise est tout simplement vital."
    }]
  }
});

/***/ }),

/***/ "./context/mocks/menu.js":
/*!*******************************!*\
  !*** ./context/mocks/menu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  item: "le manifeste",
  path: "/manifeste"
}, {
  item: "la proposition",
  path: "/proposition"
}, {
  item: "la communauté",
  path: "/communaute"
}, {
  socials: [{
    title: "twitter",
    url: "www.twiter.fr"
  }, {
    title: "twitter",
    url: "www.twiter.fr"
  }, {
    title: "twitter",
    url: "www.twiter.fr"
  }]
}]);

/***/ }),

/***/ "./context/mocks/proposition.js":
/*!**************************************!*\
  !*** ./context/mocks/proposition.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  chapeau: "Pour les entreprises, l’incarnation d’un engagement sociétal au plus haut niveau n’est plus une option, mais la condition sine qua non d’une performance économique durable. Aux avant-postes de cette nouvelle donne, SOCIETER, première Maison de conseil en sustainable leadership, spécialisée en communication engagée, impact sociétal et diplomatie collaborative, révèle l’engagement du dirigeant et de l’entreprise dans le débat public mondial.",
  firstPartLabor: "SOCIETER connecte ses recommandations stratégiques aux Objectifs du Développement Durable (ODD) de l’Agenda 2030 des Nations Unies, seul agenda de référence pour l’engagement sociétal.",
  secondPartSubtitle: "Societer intervient sur mesure",
  secondPartFatTitle: "Societer réunit l’ensemble des expertises stratégiques nécessaires à un leadership durable : communication engagée, impact sociétal et diplomatie collaborative.",
  expertise: {
    subTitle: "expertises",
    subTitleTwo: "méthode",
    content: [{
      title: "Engagement sociétal",
      slug: "engagement-societal",
      description: "Définition de l’engagement sociétal, à la lumière des Objectifs du Développement Durable (ODD) de l’Agenda 2030 des Nations Unies - seul agenda partagé de référence du développement durable ; stratégie d’incarnation par le(s) dirigeant(s) (CEO et membres du Comité exécutif), en cohérence avec la raison d’être de l’entreprise."
    }, {
      title: "Discours stratégique",
      slug: "discours-stategique",
      description: "Conception, rédaction et déclinaison du discours stratégique et des contenus qui structurent la raison d’être et la stratégie de l’entreprise, telle qu’incarnées par le(s) dirigeant(s) : manifestes, discours fondateurs, essais, tribunes, argumentaires, working papers, contenus print et digital, ainsi que toute prise de parole structurante."
    }, {
      title: "Leadership et incarnation",
      slug: "lederchip-&-incarnation",
      description: "Stratégies de communication, d’incarnation et de rayonnement en France et à l’international, notamment : stratégie éditoriale et de contenus (dont déclinaison sur les réseaux sociaux), stratégie d’alliés, visibilité médias, engagements non-profit."
    }, {
      title: "Création de coalitions",
      slug: "creation-de-coalitions",
      description: "Constitution de coalitions internationales ad hoc autour d’engagements sociétaux, environnementaux, économiques, impliquant acteurs publics, privés et société civile. "
    }, {
      title: "Diplomatie économique",
      slug: "diplomatie-economique",
      description: "Rayonnement des stratégies d’entreprises à l’étranger et synergies entre les sphères diplomatiques et privées. "
    }, {
      title: "Partenariats institutionnels",
      slug: "partenariats-institutionnels",
      description: "Définition et développement de stratégies de co-construction entre les sphères publiques, privées et les représentants de la société civile en France et à l’international."
    }, {
      title: "Développement business",
      slug: "developpement-business",
      description: "Positionnement et développement de la stratégie business dans une logique de performance durable."
    }, {
      title: "Communication de crise",
      slug: "communication-de-crise",
      description: "Construction d’un écosystème d’« ambassadeurs », prévention, gestion de crise, et reconstruction post-crise."
    }]
  }
});

/***/ }),

/***/ "./next-seo.config.js":
/*!****************************!*\
  !*** ./next-seo.config.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  title: "Societer"
});

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(/*! ../core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

function appGetInitialProps(_x) {
  return _appGetInitialProps.apply(this, arguments);
}

function _appGetInitialProps() {
  _appGetInitialProps = (0, _asyncToGenerator2.default)(function* (_ref) {
    var {
      Component,
      ctx
    } = _ref;
    var pageProps = yield (0, _utils.loadGetInitialProps)(Component, ctx);
    return {
      pageProps
    };
  });
  return _appGetInitialProps.apply(this, arguments);
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, (0, _extends2.default)({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-seo */ "next-seo");
/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_seo__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _config_theme_globalStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config/theme/globalStyles */ "./config/theme/globalStyles.js");
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
/* harmony import */ var _next_seo_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../next-seo.config */ "./next-seo.config.js");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var _config___WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/ */ "./config/index.js");

var _jsxFileName = "/Users/charlesdoiron/Sites/societer/pages/_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;









class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  constructor() {
    super();
  }

  static async getInitialProps({
    Component,
    ctx
  }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return {
      pageProps
    };
  }

  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(styled_components__WEBPACK_IMPORTED_MODULE_3__["ThemeProvider"], {
      theme: _config___WEBPACK_IMPORTED_MODULE_9__["theme"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(_context__WEBPACK_IMPORTED_MODULE_8__["MockProvider"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx(_config_theme_globalStyles__WEBPACK_IMPORTED_MODULE_5__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx(Component, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }))))));
  }

}

/***/ }),

/***/ "./styled/typos.js":
/*!*************************!*\
  !*** ./styled/typos.js ***!
  \*************************/
/*! exports provided: BigTitle, FatTitle, Navigation, SmallNavigation, Subtitle, MediumSubtitle, SmallSubtitle, Chapeau, ExpertiseTitle, ArticleTitle, Labor, FatLabor, ArticleInterTitle, ManifestLabor, PopUpTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigTitle", function() { return BigTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FatTitle", function() { return FatTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallNavigation", function() { return SmallNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subtitle", function() { return Subtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediumSubtitle", function() { return MediumSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallSubtitle", function() { return SmallSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chapeau", function() { return Chapeau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertiseTitle", function() { return ExpertiseTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleTitle", function() { return ArticleTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Labor", function() { return Labor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FatLabor", function() { return FatLabor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleInterTitle", function() { return ArticleInterTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManifestLabor", function() { return ManifestLabor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopUpTitle", function() { return PopUpTitle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const BigTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "typos__BigTitle",
  componentId: "sc-4ublue-0"
})(["font-family:\"garnett_bold\";font-style:normal;font-weight:bold;margin:0;font-size:80px;line-height:95px;color:", ";transition:all 500ms;", ""], props => props.theme.colors.white, props => props.theme.medias.medium`
    transition: all 500ms;
    font-size: 40px;
    line-height: 50px;
   `);
const FatTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h1.withConfig({
  displayName: "typos__FatTitle",
  componentId: "sc-4ublue-1"
})(["font-family:\"garnett_regular\";font-style:normal;font-size:60px;line-height:85px;color:", ";transition:all 500ms;margin:0;", ""], props => props.theme.colors.white, props => props.theme.medias.medium`
    transition: all 500ms;
    font-size: 30px;
    line-height: 40px;
   `);
const Navigation = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "typos__Navigation",
  componentId: "sc-4ublue-2"
})(["margin:0;font-family:\"garnett_regular\";font-style:normal;font-weight:normal;font-size:14px;line-height:20px;list-style-type:none;cursor:pointer;color:", ";", " &.isActive{border-bottom:1px solid ", ";}"], props => props.isBlack ? props.theme.colors.black : props.theme.colors.white, props => props.theme.medias.medium`
    font-size: 12px;
    line-height: 17px;
   `, props => props.theme.colors.white);
const SmallNavigation = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "typos__SmallNavigation",
  componentId: "sc-4ublue-3"
})(["font-family:\"garnett_regular\";font-style:normal;font-weight:normal;font-size:12px;line-height:17px;color:", ";"], props => props.theme.colors.white);
const Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "typos__Subtitle",
  componentId: "sc-4ublue-4"
})(["font-family:\"garnett_regular\";font-style:normal;font-weight:normal;font-size:16px;line-height:25px;letter-spacing:0.1em;text-transform:uppercase;color:", ";transition:all 500ms;margin:0;", ""], props => props.theme.colors.black, props => props.theme.medias.medium`
    transition: all 500ms;
    font-size: 14px;
    line-height: 22px;
   `);
const MediumSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig({
  displayName: "typos__MediumSubtitle",
  componentId: "sc-4ublue-5"
})(["font-family:\"garnett_regular\";font-style:normal;font-weight:normal;font-size:12px;line-height:17px;letter-spacing:0.15em;text-transform:uppercase;margin:0;color:", ";"], props => props.isBlack ? props.theme.colors.black : props.theme.colors.white);
const SmallSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig({
  displayName: "typos__SmallSubtitle",
  componentId: "sc-4ublue-6"
})(["font-family:\"garnett_regular\";font-style:normal;font-weight:normal;font-size:10px;line-height:15px;letter-spacing:0.1em;text-transform:uppercase;margin:0;color:", ";"], props => props.theme.colors.black);
const Chapeau = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "typos__Chapeau",
  componentId: "sc-4ublue-7"
})(["font-family:\"garnett_medium\";font-style:normal;font-weight:500;font-size:28px;line-height:43px;margin:0;color:", ";transition:all 500ms;", ""], props => props.isBlack ? props.theme.colors.black : props.theme.colors.white, props => props.theme.medias.medium`
    transition: all 500ms;
    font-size: 18px;
    line-height: 25px;
   `);
const ExpertiseTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "typos__ExpertiseTitle",
  componentId: "sc-4ublue-8"
})(["font-family:\"garnett_medium\";font-style:normal;font-weight:500;font-size:28px;line-height:31px;color:", ";margin-bottom:25px;margin-top:0;cursor:pointer;transition:all 500ms;", " &.isActive{transition:all 500ms;position:relative;transform:translateX(10px);color:", ";}"], props => props.theme.colors.black, props => props.theme.medias.medium`
    transition: all 500ms;
    font-size: 22px;
    line-height: 34px;
    margin-bottom: 30px;
   `, props => props.theme.colors.blue);
const ArticleTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "typos__ArticleTitle",
  componentId: "sc-4ublue-9"
})(["font-family:\"garnett_bold\";font-style:normal;font-weight:bold;font-size:50px;line-height:71px;color:", ";", ""], props => props.theme.colors.blue, props => props.theme.medias.medium`
    font-size: 30px;
    line-height: 42px;
   `);
const Labor = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "typos__Labor",
  componentId: "sc-4ublue-10"
})(["font-family:\"garnett_regular\";font-style:normal;font-weight:normal;font-size:16px;line-height:25px;margin:0;color:", ";transition:all 500ms;"], props => props.isWhite ? props.theme.colors.white : props.theme.colors.black);
const FatLabor = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "typos__FatLabor",
  componentId: "sc-4ublue-11"
})(["font-family:\"garnett_medium\";font-style:normal;font-weight:500;font-size:28px;line-height:40px;color:", ";"], props => props.theme.colors.white);
const ArticleInterTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig({
  displayName: "typos__ArticleInterTitle",
  componentId: "sc-4ublue-12"
})(["font-family:\"garnett_medium\";font-style:normal;font-weight:500;font-size:20px;line-height:28px;margin:0;color:", ";"], props => props.theme.colors.blue);
const ManifestLabor = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "typos__ManifestLabor",
  componentId: "sc-4ublue-13"
})(["margin:0;font-family:\"garnett_regular\";font-style:normal;font-weight:500;font-size:28px;line-height:40px;color:", ";", " a{text-decoration:none;color:", ";border-bottom:1px solid ", ";cursor:pointer;}"], props => props.theme.colors.white, props => props.theme.medias.medium`
    font-size: 18px;
    line-height: 25px;
   `, props => props.theme.colors.white, props => props.theme.colors.white);
const PopUpTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "typos__PopUpTitle",
  componentId: "sc-4ublue-14"
})(["font-family:\"garnett_medium\";font-style:normal;font-weight:500;font-size:18px;line-height:25px;margin:0%;color:", ";"], props => props.theme.colors.white);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next-seo":
/*!***************************!*\
  !*** external "next-seo" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-seo");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map