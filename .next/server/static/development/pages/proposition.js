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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/accordion.js":
/*!*********************************!*\
  !*** ./components/accordion.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_collapse__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-collapse */ "react-collapse");
/* harmony import */ var react_collapse__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_collapse__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_typos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/typos */ "./styled/typos.js");
/* harmony import */ var _styled_space__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/space */ "./styled/space.js");
var _jsxFileName = "/Users/charlesdoiron/Sites/societer/components/accordion.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;






const Accordion = props => {
  const {
    0: expertiseActive,
    1: setExpertiseActive
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])("engagement-societal");

  const handleExpertise = slug => {
    setExpertiseActive(slug);
  };

  return __jsx(_styled_space__WEBPACK_IMPORTED_MODULE_4__["FatWrapper"], {
    noWrapperOnMobile: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(Container, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx(Titles, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(_styled_space__WEBPACK_IMPORTED_MODULE_4__["FatWrapper"], {
    noWrapperDesktop: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx(ExpertiseSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, props.subTitle)), props.content.map(el => {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_styled_space__WEBPACK_IMPORTED_MODULE_4__["FatWrapper"], {
      noWrapperDesktop: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: undefined
    }, __jsx(_styled_typos__WEBPACK_IMPORTED_MODULE_3__["ExpertiseTitle"], {
      className: el.slug === expertiseActive && "isActive",
      onMouseEnter: () => handleExpertise(el.slug),
      onTouchStart: () => handleExpertise(el.slug),
      key: el.title,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: undefined
    }, el.title)), el.slug === expertiseActive && __jsx(ShowOnMobile, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: undefined
    }, __jsx(react_collapse__WEBPACK_IMPORTED_MODULE_2__["Collapse"], {
      isOpened: el.slug === expertiseActive,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: undefined
    }, __jsx(CollapseContent, {
      className: "no--wrapper",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: undefined
    }, __jsx(ExpertiseSubtitleCollapse, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: undefined
    }, props.subTitleTwo), __jsx(_styled_typos__WEBPACK_IMPORTED_MODULE_3__["Labor"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, el.description)))));
  })), __jsx(Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: undefined
  }, __jsx(HideOnMobile, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: undefined
  }, __jsx(ExpertiseSubtitle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }, props.subTitleTwo), props.content.map(el => {
    if (el.slug === expertiseActive) {
      return __jsx(_styled_typos__WEBPACK_IMPORTED_MODULE_3__["Labor"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: undefined
      }, el.description);
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Accordion);
const Container = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "accordion__Container",
  componentId: "sc-1s6icfm-0"
})(["display:flex;justify-content:space-around;", ""], props => props.theme.medias.medium`
    flex-direction: column;
  `);
const ExpertiseSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(_styled_typos__WEBPACK_IMPORTED_MODULE_3__["SmallSubtitle"]).withConfig({
  displayName: "accordion__ExpertiseSubtitle",
  componentId: "sc-1s6icfm-1"
})(["margin-bottom:25px;", ""], props => props.theme.medias.medium`
    margin-bottom: 10px;
  `);
const ExpertiseSubtitleCollapse = styled_components__WEBPACK_IMPORTED_MODULE_1___default()(ExpertiseSubtitle).withConfig({
  displayName: "accordion__ExpertiseSubtitleCollapse",
  componentId: "sc-1s6icfm-2"
})(["color:", ";"], props => props.theme.colors.white);
const ShowOnMobile = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "accordion__ShowOnMobile",
  componentId: "sc-1s6icfm-3"
})(["display:none;", ""], props => props.theme.medias.medium`
  display:block;
`);
const Titles = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "accordion__Titles",
  componentId: "sc-1s6icfm-4"
})(["width:50%;", ""], props => props.theme.medias.medium`
    width: 100%;
  `);
const Content = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "accordion__Content",
  componentId: "sc-1s6icfm-5"
})(["width:30%;"]);
const HideOnMobile = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "accordion__HideOnMobile",
  componentId: "sc-1s6icfm-6"
})(["display:block;", ""], props => props.theme.medias.medium`
  display:none;
`);
const CollapseContent = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "accordion__CollapseContent",
  componentId: "sc-1s6icfm-7"
})(["background-color:", ";padding:30px;margin:-8px 0 22px 0;p{color:", ";}"], props => props.theme.colors.black, props => props.theme.colors.white);

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
  title: "Sustainable leadership"
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
/* harmony default export */ __webpack_exports__["default"] = ([{
  id: "seamless-integration",
  title: "Seamless Integration with Google Forms",
  icon: "../../static/images/icons/features/Illu_1.svg",
  subtitle: "When users fill your Google Form, Form Publisher creates documents based on their responses.",
  action: "More Details",
  link: "https://support.form-publisher.com/hc/en-us/articles/115002733225"
}]);

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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

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

/***/ "./pages/proposition.js":
/*!******************************!*\
  !*** ./pages/proposition.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styled_typos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../styled/typos */ "./styled/typos.js");
/* harmony import */ var _styled_space__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styled/space */ "./styled/space.js");
/* harmony import */ var _components_accordion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/accordion */ "./components/accordion.js");
/* harmony import */ var _context_mock_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../context/mock-context */ "./context/mock-context.js");
var _jsxFileName = "/Users/charlesdoiron/Sites/societer/pages/proposition.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const client = __webpack_require__(/*! contentful */ "contentful").createClient({
  space: "86i03dw6wwwc",
  accessToken: "fs65wT3qwmrz2Rcyh0fFkJE2uukw1N5mxY9_IzljpH0"
});

function Proposition() {
  const {
    proposition
  } = Object(_context_mock_context__WEBPACK_IMPORTED_MODULE_6__["useMocks"])();
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, "Societer | la Proposition")), __jsx(_styled_space__WEBPACK_IMPORTED_MODULE_4__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx(FirstPart, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_styled_typos__WEBPACK_IMPORTED_MODULE_3__["Chapeau"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, proposition.chapeau), __jsx(_styled_typos__WEBPACK_IMPORTED_MODULE_3__["Labor"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, proposition.firstPartLabor))), __jsx(SecondPart, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_styled_space__WEBPACK_IMPORTED_MODULE_4__["Wrapper"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_styled_typos__WEBPACK_IMPORTED_MODULE_3__["Subtitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, proposition.secondPartSubtitle), __jsx(_styled_typos__WEBPACK_IMPORTED_MODULE_3__["FatTitle"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, proposition.secondPartFatTitle)), __jsx(Img, {
    src: "images/proposition/proposition_img.jpg",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx(_components_accordion__WEBPACK_IMPORTED_MODULE_5__["default"], {
    subTitle: proposition.expertise.subTitle,
    subTitleTwo: proposition.expertise.subTitleTwo,
    content: proposition.expertise.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (Proposition);
const FirstPart = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "proposition__FirstPart",
  componentId: "sc-5zfhpn-0"
})(["padding:200px 0 120px 0;display:flex;flex-direction:row;justify-content:space-between;h3{max-width:60%;}p{max-width:30%;color:", ";}", ""], props => props.theme.colors.white, props => props.theme.medias.medium`
   flex-direction : column;
   padding: 60px 0;

      h3 {
        max-width: unset;
        padding-right: 0px;
        margin-bottom:50px;
      }

      p {
        max-width: unset;
      }
  `);
const Img = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img.withConfig({
  displayName: "proposition__Img",
  componentId: "sc-5zfhpn-1"
})(["width:490px;position:absolute;top:300px;right:0;", ""], props => props.theme.medias.medium`
    display:none;
  `);
const SecondPart = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "proposition__SecondPart",
  componentId: "sc-5zfhpn-2"
})(["background-color:", ";padding:150px 0;position:relative;", " h1{margin-top:30px;color:", ";max-width:80%;z-index:10;position:relative;margin-bottom:270px;", "}"], props => props.theme.colors.white, props => props.theme.medias.medium`
    padding: 60px 0;
  `, props => props.theme.colors.black, props => props.theme.medias.medium`
     max-width: unset;
     margin-bottom: 60px;
    `);
const ThirdPart = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "proposition__ThirdPart",
  componentId: "sc-5zfhpn-3"
})(["background-color:", ";"], props => props.theme.colors.white);

/***/ }),

/***/ "./styled/space.js":
/*!*************************!*\
  !*** ./styled/space.js ***!
  \*************************/
/*! exports provided: Wrapper, WrapperMediumPlus, FatWrapper, ShowOnMediumPlus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Wrapper", function() { return Wrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperMediumPlus", function() { return WrapperMediumPlus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FatWrapper", function() { return FatWrapper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowOnMediumPlus", function() { return ShowOnMediumPlus; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);

const Wrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "space__Wrapper",
  componentId: "sc-9h1sc-0"
})(["padding:0 10%;margin:0 auto;width:100%;left:0;right:0;", ""], props => props.theme.medias.medium`
    padding:0 30px;
  `);
const WrapperMediumPlus = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "space__WrapperMediumPlus",
  componentId: "sc-9h1sc-1"
})(["padding:0 10%;margin:0 auto;width:100%;left:0;right:0;", ""], props => props.theme.medias.mediumPlus`
    padding:0 30px;
  `);
const FatWrapper = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "space__FatWrapper",
  componentId: "sc-9h1sc-2"
})(["padding:", ";margin:0 auto;width:100%;left:0;right:0;", ""], props => props.noWrapperDesktop ? "0" : "0 20%", props => props.theme.medias.medium`
    padding:${props => props.noWrapperOnMobile ? "0" : "0 30px"};
  `);
const ShowOnMediumPlus = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.div.withConfig({
  displayName: "space__ShowOnMediumPlus",
  componentId: "sc-9h1sc-3"
})(["display:flex;", ""], props => props.theme.medias.mediumPlus`
  display:none;
`);

/***/ }),

/***/ "./styled/typos.js":
/*!*************************!*\
  !*** ./styled/typos.js ***!
  \*************************/
/*! exports provided: BigTitle, FatTitle, Navigation, SmallNavigation, Subtitle, SmallSubtitle, Chapeau, ExpertiseTitle, ArticleTitle, Labor, FatLabor, ArticleInterTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigTitle", function() { return BigTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FatTitle", function() { return FatTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Navigation", function() { return Navigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallNavigation", function() { return SmallNavigation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subtitle", function() { return Subtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SmallSubtitle", function() { return SmallSubtitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Chapeau", function() { return Chapeau; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpertiseTitle", function() { return ExpertiseTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleTitle", function() { return ArticleTitle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Labor", function() { return Labor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FatLabor", function() { return FatLabor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArticleInterTitle", function() { return ArticleInterTitle; });
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
})(["font-family:\"garnett_regular\";font-style:normal;font-weight:normal;font-size:14px;line-height:20px;list-style-type:none;margin-right:60px;cursor:pointer;color:", ";&.isActive{border-bottom:1px solid ", ";}"], props => props.theme.colors.white, props => props.theme.colors.white);
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
const SmallSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig({
  displayName: "typos__SmallSubtitle",
  componentId: "sc-4ublue-5"
})(["font-family:\"garnett_regular\";font-style:normal;font-weight:normal;font-size:10px;line-height:15px;letter-spacing:0.1em;text-transform:uppercase;margin:0;color:", ";"], props => props.theme.colors.black);
const Chapeau = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "typos__Chapeau",
  componentId: "sc-4ublue-6"
})(["font-family:\"garnett_medium\";font-style:normal;font-weight:500;font-size:28px;line-height:43px;margin:0;color:", ";transition:all 500ms;", ""], props => props.theme.colors.white, props => props.theme.medias.medium`
    transition: all 500ms;
    font-size: 18px;
    line-height: 25px;
   `);
const ExpertiseTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "typos__ExpertiseTitle",
  componentId: "sc-4ublue-7"
})(["font-family:\"garnett_medium\";font-style:normal;font-weight:500;font-size:28px;line-height:31px;color:", ";margin-bottom:25px;margin-top:0;cursor:pointer;transition:all 500ms;", " &.isActive{transition:all 500ms;position:relative;transform:translateX(10px);color:", ";}"], props => props.theme.colors.black, props => props.theme.medias.medium`
    transition: all 500ms;
    font-size: 22px;
    line-height: 34px;
    margin-bottom: 30px;
   `, props => props.theme.colors.blue);
const ArticleTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h3.withConfig({
  displayName: "typos__ArticleTitle",
  componentId: "sc-4ublue-8"
})(["font-family:\"garnett_bold\";font-style:normal;font-weight:bold;font-size:50px;line-height:71px;color:", ";"], props => props.theme.colors.blue);
const Labor = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "typos__Labor",
  componentId: "sc-4ublue-9"
})(["font-family:\"garnett_regular\";font-style:normal;font-weight:normal;font-size:16px;line-height:25px;margin:0;color:", ";transition:all 500ms;"], props => props.theme.colors.black);
const FatLabor = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.p.withConfig({
  displayName: "typos__FatLabor",
  componentId: "sc-4ublue-10"
})(["font-family:\"garnett_medium\";font-style:normal;font-weight:500;font-size:28px;line-height:40px;color:", ";"], props => props.theme.colors.white);
const ArticleInterTitle = styled_components__WEBPACK_IMPORTED_MODULE_0___default.a.h4.withConfig({
  displayName: "typos__ArticleInterTitle",
  componentId: "sc-4ublue-11"
})(["font-family:\"garnett_medium\";font-style:normal;font-weight:500;font-size:20px;line-height:28px;color:", ";"], props => props.theme.colors.blue);

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/proposition.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/charlesdoiron/Sites/societer/pages/proposition.js */"./pages/proposition.js");


/***/ }),

/***/ "contentful":
/*!*****************************!*\
  !*** external "contentful" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("contentful");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-collapse":
/*!*********************************!*\
  !*** external "react-collapse" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-collapse");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=proposition.js.map