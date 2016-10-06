/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	// SASS include
	__webpack_require__(1);
	// JS include
	__webpack_require__(6);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./_main.scss", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/postcss-loader/index.js!./../node_modules/sass-loader/index.js!./_main.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "/* MAIN SASS FILE WITH ALL IMPORTS */\n/* BASE STYLES */\n* {\n  box-sizing: border-box; }\n\nhtml, body {\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n  font-family: 'Duru Sans', sans-serif;\n  color: #3a3a3a; }\n\na {\n  color: inherit;\n  text-decoration: none; }\n  a:hover {\n    color: inherit;\n    text-decoration: none; }\n\nul {\n  padding: 0;\n  list-style-type: none; }\n\np {\n  line-height: 1.5em; }\n\nimg {\n  width: 100%;\n  height: inherit; }\n\n/* Layout */\n.wrapper {\n  height: 100%;\n  width: 100%;\n  margin: 0 auto;\n  padding: 0; }\n\n/* MODULES */\n/* MEDIA QUERIES LOCATED AT END OF MODULE */\n.drawer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  position: relative;\n  width: 100%;\n  padding: 1.3em;\n  color: #fff;\n  background: #366aed;\n  background-image: -webkit-linear-gradient(#1b13f7, #565656);\n  background-image: linear-gradient(#1b13f7, #565656);\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  /* box-shadow: 3px 0px 2px 12px rgba(0,0,0,1); */\n  /* &__marker {\n\t\tposition: absolute;\n\t\ttop: 8.5em;\n\t\tcolor: #fff;\n\t\tpadding: .4em .8em .4em .8em;\n\t\tfont-size: .6em;\n\t\tright: 1.1em;\n\t\tbackground: rgb(27, 19, 247);\n\t\tborder-radius: .05em;\n\t\tbox-shadow: -.2em .2em .6em rgba(0,0,0,0.6);\n\t\tz-index: 1000;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\ttransform: rotate(-90deg);\n\n\t\t&:hover {\n\t\t\tcursor: pointer;\n\t\t}\n\n\t} end marker */ }\n  .drawer__slogan {\n    position: relative;\n    font-size: .67em;\n    font-weight: bold;\n    top: 1.9em;\n    color: #999999; }\n  .drawer__description {\n    font-size: .67em;\n    font-weight: bold; }\n  .drawer__content {\n    text-align: left; }\n  .drawer .social-links > li {\n    display: inline-block;\n    margin-right: .7em;\n    font-size: .9em; }\n  .drawer__main-img {\n    height: 220px;\n    width: 220px;\n    border-radius: 100%;\n    box-shadow: 1px 1px 12px 2px rgba(0, 0, 0, 0.4); }\n  .drawer__title {\n    font-size: 2.3em; }\n  @media screen and (min-width: 920px) {\n    .drawer {\n      position: fixed;\n      width: 55%;\n      height: 100%; } }\n  @media screen and (min-width: 720px) {\n    .drawer {\n      font-size: 2.4em; } }\n  @media screen and (min-width: 550px) {\n    .drawer {\n      font-size: 2.1em; } }\n  @media screen and (min-width: 400px) {\n    .drawer {\n      font-size: 1.8em; } }\n\n.content {\n  height: 100%;\n  width: 100%;\n  background: #fff; }\n  @media screen and (min-width: 920px) {\n    .content {\n      float: right;\n      height: 100%;\n      width: 45%; } }\n\n.blog-hero {\n  height: 320px;\n  width: 100%;\n  /* background: hsl(221, 64%, 42%); */\n  background-image: url(" + __webpack_require__(4) + ");\n  background-position: center;\n  background-size: cover;\n  z-index: 1;\n  position: relative; }\n  .blog-hero__layer {\n    height: 320px;\n    position: absolute;\n    top: 0;\n    left: 0;\n    color: #fff;\n    width: 100%;\n    padding: 1em;\n    z-index: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    background: rgba(26, 19, 246, 0.4); }\n  .blog-hero__post-title {\n    font-size: 2em;\n    font-weight: bold; }\n\n.about {\n  padding: 3em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n  .about__content {\n    text-align: left; }\n  .about__title {\n    font-size: 1.5em;\n    display: inline-block;\n    margin-bottom: .3em; }\n\n.portfolio {\n  padding: 3em;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex; }\n  .portfolio__content {\n    width: 100%; }\n  .portfolio__title {\n    font-size: 1.5em;\n    width: 100%;\n    margin-bottom: 1.2em; }\n  .portfolio__list > li {\n    margin-bottom: 2em;\n    display: block; }\n  .portfolio__item {\n    float: left;\n    width: 80%; }\n  .portfolio__list-title {\n    font-size: 1.2em; }\n  .portfolio__list-description {\n    font-size: .7em;\n    font-style: italic; }\n  .portfolio__links {\n    float: right; }\n    .portfolio__links > li {\n      display: inline;\n      margin-right: .8em; }\n\n.my-image {\n  max-width: 100%;\n  height: 320px; }\n\n.footer {\n  padding: .8em;\n  text-align: center;\n  color: #fff;\n  background: #1b13f7; }\n  .footer__title {\n    font-size: .8em; }\n\n/* UTILS */\n.clear {\n  clear: both; }\n", ""]);

	// exports


/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "1fe52216950aa04a383fa94d368de9d5.jpg";

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 6 */
/***/ function(module, exports) {

	(function() {

	  var drawerHero = document.querySelector('.drawer__title');
		var date = new Date();
		var hour = date.getHours();
		console.log(hour)

		switch (hour) {
			case 4,5,6:
				drawerHero.innerHTML = 'You\'re up early, don\'t forget to grab a coffee!';
				break;
			case 7,8,9,10,11:
				drawerHero.innerHTML = 'Good Morning, welcome to my site!';
				break;
			case 12,13,14,15,16,17,18,19,20,21,22,23:
				drawerHero.innerHTML = 'Good Evening, I hope you enjoy your stay!';
				break;
			case 24,0,1,2,3:
				drawerHero.innerHTML = 'You\'re up late!  Enjoy my site you nightowl you!';
				break;
			default:
				break;
		}

	})();


/***/ }
/******/ ]);