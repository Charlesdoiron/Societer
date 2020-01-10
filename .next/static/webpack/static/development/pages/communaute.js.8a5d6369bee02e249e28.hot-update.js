webpackHotUpdate("static/development/pages/communaute.js",{

/***/ "./components/member.js":
/*!******************************!*\
  !*** ./components/member.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _styled_space__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/space */ "./styled/space.js");
/* harmony import */ var _config_theme_medias__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config/theme/medias */ "./config/theme/medias.js");
/* harmony import */ var _styled_typos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styled/typos */ "./styled/typos.js");

var _jsxFileName = "/Users/charlesdoiron/Sites/societer/components/member.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject12() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      flex-direction: column-reverse;\n      display: flex;\n    "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      position:relative;\n      height:100%;\n    "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      margin-bottom: 0px;\n      width:100%;\n      height:450px;\n  display:none;\n\n    "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      margin: 30px 30px 30px 0 ;\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      top:0;\n      flex-direction: row;\n      justify-content: flex-start;\n      width: 100%;\n\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      margin-top:25px;\n      padding:60px 0;\n    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n    flex-direction:column;\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      padding:0 30px;\n      justify-content: flex-start;\n      };\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      display:none;\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      padding-top: 45px;\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      padding: ", ";\n      justify-content: flex-start;\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n      display:block;\n      width:100%;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}







var member = function member(props) {
  var dataMember = props.dataMember;
  var containerRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var imageRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var changeImgHeight = function changeImgHeight() {
      var containerHeight = containerRef.current && containerRef.current.offsetHeight;
      var image = imageRef.current;

      if (image && window.innerWidth > _config_theme_medias__WEBPACK_IMPORTED_MODULE_4__["ScreenSizes"].MEDIUMPLUS) {
        image.style.height = containerHeight / 1.37 + "px";
      }
    };

    changeImgHeight();

    if (true) {
      window.addEventListener("resize", function () {
        return changeImgHeight();
      }, {
        passive: true
      });
      return function () {
        return window.removeEventListener("resize", function () {
          return changeImgHeight();
        });
      };
    }
  });
  var TabletImage = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].img.withConfig({
    displayName: "member__TabletImage",
    componentId: "nw82qq-0"
  })(["display:none;", ""], function (props) {
    return props.theme.medias.mediumPlus(_templateObject());
  });
  var Titles = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "member__Titles",
    componentId: "nw82qq-1"
  })(["display:flex;justify-content:", ";flex-direction:column;"], props.even && function (props) {
    return props.withWrapper;
  } ? "flex-end" : "flex-start");
  var MemberSmallSubtitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled_typos__WEBPACK_IMPORTED_MODULE_5__["SmallSubtitle"]).withConfig({
    displayName: "member__MemberSmallSubtitle",
    componentId: "nw82qq-2"
  })(["padding:", ";display:flex;justify-content:", ";color:", ";margin:", ";", ""], function (props) {
    return props.withWrapper ? "0 20%" : "0";
  }, props.even && function (props) {
    return props.withWrapper;
  } ? "flex-end" : "flex-start", props.even ? function (props) {
    return props.theme.colors.black;
  } : function (props) {
    return props.theme.colors.white;
  }, function (props) {
    return props.insideDescription ? " 50px 0 25px 0" : 0;
  }, function (props) {
    return props.theme.medias.mediumPlus(_templateObject2(), function (props) {
      return props.insideDescription ? "0" : "0 30px";
    });
  });
  var Container = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "member__Container",
    componentId: "nw82qq-3"
  })(["padding-top:125px;position:relative;background-color:", ";flex-direction:", ";", ""], props.even ? function (props) {
    return props.theme.colors.white;
  } : function (props) {
    return props.theme.colors.black;
  }, props.even ? "row" : "row-reverse", function (props) {
    return props.theme.medias.mediumPlus(_templateObject3());
  });
  var Line = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "member__Line",
    componentId: "nw82qq-4"
  })(["margin-left:", ";display:flex;border:0.5px solid ", ";width:1px;height:115px;position:relative;margin-bottom:20px;", ""], props.even && function (props) {
    return props.withWrapper;
  } ? "70%" : "25%", props.even ? function (props) {
    return props.theme.colors.black;
  } : function (props) {
    return props.theme.colors.white;
  }, function (props) {
    return props.theme.medias.mediumPlus(_templateObject4());
  });
  var MemberLabor = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled_typos__WEBPACK_IMPORTED_MODULE_5__["Labor"]).withConfig({
    displayName: "member__MemberLabor",
    componentId: "nw82qq-5"
  })(["font-size:14px;color:", ";"], props.even ? function (props) {
    return props.theme.colors.black;
  } : function (props) {
    return props.theme.colors.white;
  });
  var MemberFatTitle = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled_typos__WEBPACK_IMPORTED_MODULE_5__["FatTitle"]).withConfig({
    displayName: "member__MemberFatTitle",
    componentId: "nw82qq-6"
  })(["padding:0 20%;margin-top:10px;justify-content:", ";display:flex;color:", ";", ""], props.even && function (props) {
    return props.withWrapper;
  } ? "flex-end" : "flex-start", props.even ? function (props) {
    return props.theme.colors.black;
  } : function (props) {
    return props.theme.colors.white;
  }, function (props) {
    return props.theme.medias.mediumPlus(_templateObject5());
  });
  var MemberHr = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].hr.withConfig({
    displayName: "member__MemberHr",
    componentId: "nw82qq-7"
  })(["width:100%;border:0.5px solid ", ";margin:50px 0 25px 10px;"], props.even ? function (props) {
    return props.theme.colors.black;
  } : function (props) {
    return props.theme.colors.white;
  });
  var Content = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "member__Content",
    componentId: "nw82qq-8"
  })(["display:flex;justify-content:space-around;align-items:flex-start;flex-direction:", ";height:100%;", ""], props.even ? "row-reverse" : "row", function (props) {
    return props.theme.medias.mediumPlus(_templateObject6());
  });
  var Description = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "member__Description",
    componentId: "nw82qq-9"
  })(["padding:", ";width:100%;", ""], props.even ? "0 0 60px 10%" : "0 10% 60px 0", function (props) {
    return props.theme.medias.mediumPlus(_templateObject7());
  });
  var Socials = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "member__Socials",
    componentId: "nw82qq-10"
  })(["width:40%;top:30vh;position:relative;display:flex;flex-direction:column;align-items:center;", ""], function (props) {
    return props.theme.medias.mediumPlus(_templateObject8());
  });
  var Social = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(_styled_typos__WEBPACK_IMPORTED_MODULE_5__["SmallNavigation"]).withConfig({
    displayName: "member__Social",
    componentId: "nw82qq-11"
  })(["border:1px solid ", ";border-radius:100%;margin-bottom:0 auto 45px auto;color:", ";display:inline-block;width:30px;height:30px;text-align:center;vertical-align:middle;padding:2px;line-height:unset;transition:all 500ms;&:hover{transition:all 500ms;cursor:pointer;border:1px solid ", ";color:", ";}", ""], props.even ? function (props) {
    return props.theme.colors.black;
  } : function (props) {
    return props.theme.colors.white;
  }, props.even ? function (props) {
    return props.theme.colors.black;
  } : function (props) {
    return props.theme.colors.white;
  }, function (props) {
    return props.theme.colors.blue;
  }, function (props) {
    return props.theme.colors.blue;
  }, function (props) {
    return props.theme.medias.mediumPlus(_templateObject9());
  });
  var ImgContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "member__ImgContainer",
    componentId: "nw82qq-12"
  })(["position:relative;width:90%;height:100%;margin-bottom:-330px;", ""], function (props) {
    return props.theme.medias.mediumPlus(_templateObject10());
  });
  var Img = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "member__Img",
    componentId: "nw82qq-13"
  })(["background-image:url(\"", "\");background-size:cover;background-position:center;background-repeat:no-repeat;width:100%;height:120%;position:absolute;z-index:9;top:0;", ""], dataMember.img, function (props) {
    return props.theme.medias.mediumPlus(_templateObject11());
  });
  var Flex = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "member__Flex",
    componentId: "nw82qq-14"
  })(["display:flex;justify-content:space-around;align-items:center;"]);
  var PhotoAndSocials = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div.withConfig({
    displayName: "member__PhotoAndSocials",
    componentId: "nw82qq-15"
  })(["width:100%;", ""], function (props) {
    return props.theme.medias.mediumPlus(_templateObject12());
  });
  return __jsx(Container, {
    ref: containerRef,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 243
    },
    __self: this
  }, __jsx(Titles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }, __jsx(MemberSmallSubtitle, {
    withWrapper: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245
    },
    __self: this
  }, dataMember.subTitle), __jsx(MemberFatTitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248
    },
    __self: this
  }, dataMember.name)), __jsx(Line, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 251
    },
    __self: this
  }), __jsx(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253
    },
    __self: this
  }, __jsx(PhotoAndSocials, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 254
    },
    __self: this
  }, __jsx(ImgContainer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 255
    },
    __self: this
  }, __jsx(Img, {
    ref: imageRef,
    alt: dataMember.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256
    },
    __self: this
  })), __jsx(TabletImage, {
    src: dataMember.img,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 259
    },
    __self: this
  }), __jsx(Socials, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 262
    },
    __self: this
  }, __jsx(Social, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 263
    },
    __self: this
  }, dataMember.socials.twitter && "Tw"), __jsx(Social, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264
    },
    __self: this
  }, dataMember.socials.linkedin && "Li"))), __jsx(_styled_space__WEBPACK_IMPORTED_MODULE_3__["WrapperMediumPlus"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268
    },
    __self: this
  }, __jsx(Description, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269
    },
    __self: this
  }, __jsx(MemberLabor, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 270
    },
    __self: this
  }, dataMember.description), __jsx(Flex, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 271
    },
    __self: this
  }, __jsx(MemberSmallSubtitle, {
    insideDescription: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 272
    },
    __self: this
  }, dataMember.engagements.subTitle), __jsx(MemberHr, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 275
    },
    __self: this
  })), __jsx(MemberLabor, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 278
    },
    __self: this
  }, dataMember.engagements.description)))));
};

/* harmony default export */ __webpack_exports__["default"] = (member);

/***/ })

})
//# sourceMappingURL=communaute.js.8a5d6369bee02e249e28.hot-update.js.map