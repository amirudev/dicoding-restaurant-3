/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 929:
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ 352:
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 272:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (window, factory) {
  var lazySizes = factory(window, window.document, Date);
  window.lazySizes = lazySizes;

  if (( false ? 0 : _typeof(module)) == 'object' && module.exports) {
    module.exports = lazySizes;
  }
})(typeof window != 'undefined' ? window : {},
/**
 * import("./types/global")
 * @typedef { import("./types/lazysizes-config").LazySizesConfigPartial } LazySizesConfigPartial
 */
function l(window, document, Date) {
  // Pass in the window Date function also for SSR because the Date class can be lost
  'use strict';
  /*jshint eqnull:true */

  var lazysizes,
  /**
   * @type { LazySizesConfigPartial }
   */
  lazySizesCfg;

  (function () {
    var prop;
    var lazySizesDefaults = {
      lazyClass: 'lazyload',
      loadedClass: 'lazyloaded',
      loadingClass: 'lazyloading',
      preloadClass: 'lazypreload',
      errorClass: 'lazyerror',
      //strictClass: 'lazystrict',
      autosizesClass: 'lazyautosizes',
      fastLoadedClass: 'ls-is-cached',
      iframeLoadMode: 0,
      srcAttr: 'data-src',
      srcsetAttr: 'data-srcset',
      sizesAttr: 'data-sizes',
      //preloadAfterLoad: false,
      minSize: 40,
      customMedia: {},
      init: true,
      expFactor: 1.5,
      hFac: 0.8,
      loadMode: 2,
      loadHidden: true,
      ricTimeout: 0,
      throttleDelay: 125
    };
    lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

    for (prop in lazySizesDefaults) {
      if (!(prop in lazySizesCfg)) {
        lazySizesCfg[prop] = lazySizesDefaults[prop];
      }
    }
  })();

  if (!document || !document.getElementsByClassName) {
    return {
      init: function init() {},

      /**
       * @type { LazySizesConfigPartial }
       */
      cfg: lazySizesCfg,

      /**
       * @type { true }
       */
      noSupport: true
    };
  }

  var docElem = document.documentElement;
  var supportPicture = window.HTMLPictureElement;
  var _addEventListener = 'addEventListener';
  var _getAttribute = 'getAttribute';
  /**
   * Update to bind to window because 'this' becomes null during SSR
   * builds.
   */

  var addEventListener = window[_addEventListener].bind(window);

  var setTimeout = window.setTimeout;
  var requestAnimationFrame = window.requestAnimationFrame || setTimeout;
  var requestIdleCallback = window.requestIdleCallback;
  var regPicture = /^picture$/i;
  var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];
  var regClassCache = {};
  var forEach = Array.prototype.forEach;
  /**
   * @param ele {Element}
   * @param cls {string}
   */

  var hasClass = function hasClass(ele, cls) {
    if (!regClassCache[cls]) {
      regClassCache[cls] = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    }

    return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
  };
  /**
   * @param ele {Element}
   * @param cls {string}
   */


  var addClass = function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
      ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
    }
  };
  /**
   * @param ele {Element}
   * @param cls {string}
   */


  var removeClass = function removeClass(ele, cls) {
    var reg;

    if (reg = hasClass(ele, cls)) {
      ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
    }
  };

  var addRemoveLoadEvents = function addRemoveLoadEvents(dom, fn, add) {
    var action = add ? _addEventListener : 'removeEventListener';

    if (add) {
      addRemoveLoadEvents(dom, fn);
    }

    loadEvents.forEach(function (evt) {
      dom[action](evt, fn);
    });
  };
  /**
   * @param elem { Element }
   * @param name { string }
   * @param detail { any }
   * @param noBubbles { boolean }
   * @param noCancelable { boolean }
   * @returns { CustomEvent }
   */


  var triggerEvent = function triggerEvent(elem, name, detail, noBubbles, noCancelable) {
    var event = document.createEvent('Event');

    if (!detail) {
      detail = {};
    }

    detail.instance = lazysizes;
    event.initEvent(name, !noBubbles, !noCancelable);
    event.detail = detail;
    elem.dispatchEvent(event);
    return event;
  };

  var updatePolyfill = function updatePolyfill(el, full) {
    var polyfill;

    if (!supportPicture && (polyfill = window.picturefill || lazySizesCfg.pf)) {
      if (full && full.src && !el[_getAttribute]('srcset')) {
        el.setAttribute('srcset', full.src);
      }

      polyfill({
        reevaluate: true,
        elements: [el]
      });
    } else if (full && full.src) {
      el.src = full.src;
    }
  };

  var getCSS = function getCSS(elem, style) {
    return (getComputedStyle(elem, null) || {})[style];
  };
  /**
   *
   * @param elem { Element }
   * @param parent { Element }
   * @param [width] {number}
   * @returns {number}
   */


  var getWidth = function getWidth(elem, parent, width) {
    width = width || elem.offsetWidth;

    while (width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth) {
      width = parent.offsetWidth;
      parent = parent.parentNode;
    }

    return width;
  };

  var rAF = function () {
    var running, waiting;
    var firstFns = [];
    var secondFns = [];
    var fns = firstFns;

    var run = function run() {
      var runFns = fns;
      fns = firstFns.length ? secondFns : firstFns;
      running = true;
      waiting = false;

      while (runFns.length) {
        runFns.shift()();
      }

      running = false;
    };

    var rafBatch = function rafBatch(fn, queue) {
      if (running && !queue) {
        fn.apply(this, arguments);
      } else {
        fns.push(fn);

        if (!waiting) {
          waiting = true;
          (document.hidden ? setTimeout : requestAnimationFrame)(run);
        }
      }
    };

    rafBatch._lsFlush = run;
    return rafBatch;
  }();

  var rAFIt = function rAFIt(fn, simple) {
    return simple ? function () {
      rAF(fn);
    } : function () {
      var that = this;
      var args = arguments;
      rAF(function () {
        fn.apply(that, args);
      });
    };
  };

  var throttle = function throttle(fn) {
    var running;
    var lastTime = 0;
    var gDelay = lazySizesCfg.throttleDelay;
    var rICTimeout = lazySizesCfg.ricTimeout;

    var run = function run() {
      running = false;
      lastTime = Date.now();
      fn();
    };

    var idleCallback = requestIdleCallback && rICTimeout > 49 ? function () {
      requestIdleCallback(run, {
        timeout: rICTimeout
      });

      if (rICTimeout !== lazySizesCfg.ricTimeout) {
        rICTimeout = lazySizesCfg.ricTimeout;
      }
    } : rAFIt(function () {
      setTimeout(run);
    }, true);
    return function (isPriority) {
      var delay;

      if (isPriority = isPriority === true) {
        rICTimeout = 33;
      }

      if (running) {
        return;
      }

      running = true;
      delay = gDelay - (Date.now() - lastTime);

      if (delay < 0) {
        delay = 0;
      }

      if (isPriority || delay < 9) {
        idleCallback();
      } else {
        setTimeout(idleCallback, delay);
      }
    };
  }; //based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html


  var debounce = function debounce(func) {
    var timeout, timestamp;
    var wait = 99;

    var run = function run() {
      timeout = null;
      func();
    };

    var later = function later() {
      var last = Date.now() - timestamp;

      if (last < wait) {
        setTimeout(later, wait - last);
      } else {
        (requestIdleCallback || run)(run);
      }
    };

    return function () {
      timestamp = Date.now();

      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
    };
  };

  var loader = function () {
    var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;
    var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;
    var regImg = /^img$/i;
    var regIframe = /^iframe$/i;
    var supportScroll = 'onscroll' in window && !/(gle|ing)bot/.test(navigator.userAgent);
    var shrinkExpand = 0;
    var currentExpand = 0;
    var isLoading = 0;
    var lowRuns = -1;

    var resetPreloading = function resetPreloading(e) {
      isLoading--;

      if (!e || isLoading < 0 || !e.target) {
        isLoading = 0;
      }
    };

    var isVisible = function isVisible(elem) {
      if (isBodyHidden == null) {
        isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
      }

      return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
    };

    var isNestedVisible = function isNestedVisible(elem, elemExpand) {
      var outerRect;
      var parent = elem;
      var visible = isVisible(elem);
      eLtop -= elemExpand;
      eLbottom += elemExpand;
      eLleft -= elemExpand;
      eLright += elemExpand;

      while (visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem) {
        visible = (getCSS(parent, 'opacity') || 1) > 0;

        if (visible && getCSS(parent, 'overflow') != 'visible') {
          outerRect = parent.getBoundingClientRect();
          visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
        }
      }

      return visible;
    };

    var checkElements = function checkElements() {
      var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal, defaultExpand, preloadExpand, hFac;
      var lazyloadElems = lazysizes.elements;

      if ((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {
        i = 0;
        lowRuns++;

        for (; i < eLlen; i++) {
          if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
            continue;
          }

          if (!supportScroll || lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i])) {
            unveilElement(lazyloadElems[i]);
            continue;
          }

          if (!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)) {
            elemExpand = currentExpand;
          }

          if (!defaultExpand) {
            defaultExpand = !lazySizesCfg.expand || lazySizesCfg.expand < 1 ? docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 : lazySizesCfg.expand;
            lazysizes._defEx = defaultExpand;
            preloadExpand = defaultExpand * lazySizesCfg.expFactor;
            hFac = lazySizesCfg.hFac;
            isBodyHidden = null;

            if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
              currentExpand = preloadExpand;
              lowRuns = 0;
            } else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
              currentExpand = defaultExpand;
            } else {
              currentExpand = shrinkExpand;
            }
          }

          if (beforeExpandVal !== elemExpand) {
            eLvW = innerWidth + elemExpand * hFac;
            elvH = innerHeight + elemExpand;
            elemNegativeExpand = elemExpand * -1;
            beforeExpandVal = elemExpand;
          }

          rect = lazyloadElems[i].getBoundingClientRect();

          if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i], elemExpand))) {
            unveilElement(lazyloadElems[i]);
            loadedSomething = true;

            if (isLoading > 9) {
              break;
            }
          } else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesCfg.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto'))) {
            autoLoadElem = preloadElems[0] || lazyloadElems[i];
          }
        }

        if (autoLoadElem && !loadedSomething) {
          unveilElement(autoLoadElem);
        }
      }
    };

    var throttledCheckElements = throttle(checkElements);

    var switchLoadingClass = function switchLoadingClass(e) {
      var elem = e.target;

      if (elem._lazyCache) {
        delete elem._lazyCache;
        return;
      }

      resetPreloading(e);
      addClass(elem, lazySizesCfg.loadedClass);
      removeClass(elem, lazySizesCfg.loadingClass);
      addRemoveLoadEvents(elem, rafSwitchLoadingClass);
      triggerEvent(elem, 'lazyloaded');
    };

    var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);

    var rafSwitchLoadingClass = function rafSwitchLoadingClass(e) {
      rafedSwitchLoadingClass({
        target: e.target
      });
    };

    var changeIframeSrc = function changeIframeSrc(elem, src) {
      var loadMode = elem.getAttribute('data-load-mode') || lazySizesCfg.iframeLoadMode; // loadMode can be also a string!

      if (loadMode == 0) {
        elem.contentWindow.location.replace(src);
      } else if (loadMode == 1) {
        elem.src = src;
      }
    };

    var handleSources = function handleSources(source) {
      var customMedia;

      var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

      if (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) {
        source.setAttribute('media', customMedia);
      }

      if (sourceSrcset) {
        source.setAttribute('srcset', sourceSrcset);
      }
    };

    var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg) {
      var src, srcset, parent, isPicture, event, firesLoad;

      if (!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented) {
        if (sizes) {
          if (isAuto) {
            addClass(elem, lazySizesCfg.autosizesClass);
          } else {
            elem.setAttribute('sizes', sizes);
          }
        }

        srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
        src = elem[_getAttribute](lazySizesCfg.srcAttr);

        if (isImg) {
          parent = elem.parentNode;
          isPicture = parent && regPicture.test(parent.nodeName || '');
        }

        firesLoad = detail.firesLoad || 'src' in elem && (srcset || src || isPicture);
        event = {
          target: elem
        };
        addClass(elem, lazySizesCfg.loadingClass);

        if (firesLoad) {
          clearTimeout(resetPreloadingTimer);
          resetPreloadingTimer = setTimeout(resetPreloading, 2500);
          addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
        }

        if (isPicture) {
          forEach.call(parent.getElementsByTagName('source'), handleSources);
        }

        if (srcset) {
          elem.setAttribute('srcset', srcset);
        } else if (src && !isPicture) {
          if (regIframe.test(elem.nodeName)) {
            changeIframeSrc(elem, src);
          } else {
            elem.src = src;
          }
        }

        if (isImg && (srcset || isPicture)) {
          updatePolyfill(elem, {
            src: src
          });
        }
      }

      if (elem._lazyRace) {
        delete elem._lazyRace;
      }

      removeClass(elem, lazySizesCfg.lazyClass);
      rAF(function () {
        // Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
        var isLoaded = elem.complete && elem.naturalWidth > 1;

        if (!firesLoad || isLoaded) {
          if (isLoaded) {
            addClass(elem, lazySizesCfg.fastLoadedClass);
          }

          switchLoadingClass(event);
          elem._lazyCache = true;
          setTimeout(function () {
            if ('_lazyCache' in elem) {
              delete elem._lazyCache;
            }
          }, 9);
        }

        if (elem.loading == 'lazy') {
          isLoading--;
        }
      }, true);
    });
    /**
     *
     * @param elem { Element }
     */

    var unveilElement = function unveilElement(elem) {
      if (elem._lazyRace) {
        return;
      }

      var detail;
      var isImg = regImg.test(elem.nodeName); //allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")

      var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));

      var isAuto = sizes == 'auto';

      if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)) {
        return;
      }

      detail = triggerEvent(elem, 'lazyunveilread').detail;

      if (isAuto) {
        autoSizer.updateElem(elem, true, elem.offsetWidth);
      }

      elem._lazyRace = true;
      isLoading++;
      lazyUnveil(elem, detail, isAuto, sizes, isImg);
    };

    var afterScroll = debounce(function () {
      lazySizesCfg.loadMode = 3;
      throttledCheckElements();
    });

    var altLoadmodeScrollListner = function altLoadmodeScrollListner() {
      if (lazySizesCfg.loadMode == 3) {
        lazySizesCfg.loadMode = 2;
      }

      afterScroll();
    };

    var onload = function onload() {
      if (isCompleted) {
        return;
      }

      if (Date.now() - started < 999) {
        setTimeout(onload, 999);
        return;
      }

      isCompleted = true;
      lazySizesCfg.loadMode = 3;
      throttledCheckElements();
      addEventListener('scroll', altLoadmodeScrollListner, true);
    };

    return {
      _: function _() {
        started = Date.now();
        lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
        preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);
        addEventListener('scroll', throttledCheckElements, true);
        addEventListener('resize', throttledCheckElements, true);
        addEventListener('pageshow', function (e) {
          if (e.persisted) {
            var loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);

            if (loadingElements.length && loadingElements.forEach) {
              requestAnimationFrame(function () {
                loadingElements.forEach(function (img) {
                  if (img.complete) {
                    unveilElement(img);
                  }
                });
              });
            }
          }
        });

        if (window.MutationObserver) {
          new MutationObserver(throttledCheckElements).observe(docElem, {
            childList: true,
            subtree: true,
            attributes: true
          });
        } else {
          docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);

          docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);

          setInterval(throttledCheckElements, 999);
        }

        addEventListener('hashchange', throttledCheckElements, true); //, 'fullscreenchange'

        ['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function (name) {
          document[_addEventListener](name, throttledCheckElements, true);
        });

        if (/d$|^c/.test(document.readyState)) {
          onload();
        } else {
          addEventListener('load', onload);

          document[_addEventListener]('DOMContentLoaded', throttledCheckElements);

          setTimeout(onload, 20000);
        }

        if (lazysizes.elements.length) {
          checkElements();

          rAF._lsFlush();
        } else {
          throttledCheckElements();
        }
      },
      checkElems: throttledCheckElements,
      unveil: unveilElement,
      _aLSL: altLoadmodeScrollListner
    };
  }();

  var autoSizer = function () {
    var autosizesElems;
    var sizeElement = rAFIt(function (elem, parent, event, width) {
      var sources, i, len;
      elem._lazysizesWidth = width;
      width += 'px';
      elem.setAttribute('sizes', width);

      if (regPicture.test(parent.nodeName || '')) {
        sources = parent.getElementsByTagName('source');

        for (i = 0, len = sources.length; i < len; i++) {
          sources[i].setAttribute('sizes', width);
        }
      }

      if (!event.detail.dataAttr) {
        updatePolyfill(elem, event.detail);
      }
    });
    /**
     *
     * @param elem {Element}
     * @param dataAttr
     * @param [width] { number }
     */

    var getSizeElement = function getSizeElement(elem, dataAttr, width) {
      var event;
      var parent = elem.parentNode;

      if (parent) {
        width = getWidth(elem, parent, width);
        event = triggerEvent(elem, 'lazybeforesizes', {
          width: width,
          dataAttr: !!dataAttr
        });

        if (!event.defaultPrevented) {
          width = event.detail.width;

          if (width && width !== elem._lazysizesWidth) {
            sizeElement(elem, parent, event, width);
          }
        }
      }
    };

    var updateElementsSizes = function updateElementsSizes() {
      var i;
      var len = autosizesElems.length;

      if (len) {
        i = 0;

        for (; i < len; i++) {
          getSizeElement(autosizesElems[i]);
        }
      }
    };

    var debouncedUpdateElementsSizes = debounce(updateElementsSizes);
    return {
      _: function _() {
        autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
        addEventListener('resize', debouncedUpdateElementsSizes);
      },
      checkElems: debouncedUpdateElementsSizes,
      updateElem: getSizeElement
    };
  }();

  var init = function init() {
    if (!init.i && document.getElementsByClassName) {
      init.i = true;

      autoSizer._();

      loader._();
    }
  };

  setTimeout(function () {
    if (lazySizesCfg.init) {
      init();
    }
  });
  lazysizes = {
    /**
     * @type { LazySizesConfigPartial }
     */
    cfg: lazySizesCfg,
    autoSizer: autoSizer,
    loader: loader,
    init: init,
    uP: updatePolyfill,
    aC: addClass,
    rC: removeClass,
    hC: hasClass,
    fire: triggerEvent,
    gW: getWidth,
    rAF: rAF
  };
  return lazysizes;
});

/***/ }),

/***/ 394:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (window, factory) {
  if (!window) {
    return;
  }

  var globalInstall = function globalInstall() {
    factory(window.lazySizes);
    window.removeEventListener('lazyunveilread', globalInstall, true);
  };

  factory = factory.bind(null, window, window.document);

  if (( false ? 0 : _typeof(module)) == 'object' && module.exports) {
    factory(__webpack_require__(272));
  } else if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(272)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof window != 'undefined' ? window : 0, function (window, document, lazySizes) {
  'use strict';

  if (!window.addEventListener) {
    return;
  }

  var regDescriptors = /\s+(\d+)(w|h)\s+(\d+)(w|h)/;
  var regCssFit = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/;
  var regCssObject = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/;
  var regPicture = /^picture$/i;
  var cfg = lazySizes.cfg;

  var getCSS = function getCSS(elem) {
    return getComputedStyle(elem, null) || {};
  };

  var parentFit = {
    getParent: function getParent(element, parentSel) {
      var parent = element;
      var parentNode = element.parentNode;

      if ((!parentSel || parentSel == 'prev') && parentNode && regPicture.test(parentNode.nodeName || '')) {
        parentNode = parentNode.parentNode;
      }

      if (parentSel != 'self') {
        if (parentSel == 'prev') {
          parent = element.previousElementSibling;
        } else if (parentSel && (parentNode.closest || window.jQuery)) {
          parent = (parentNode.closest ? parentNode.closest(parentSel) : jQuery(parentNode).closest(parentSel)[0]) || parentNode;
        } else {
          parent = parentNode;
        }
      }

      return parent;
    },
    getFit: function getFit(element) {
      var tmpMatch, parentObj;
      var css = getCSS(element);
      var content = css.content || css.fontFamily;
      var obj = {
        fit: element._lazysizesParentFit || element.getAttribute('data-parent-fit')
      };

      if (!obj.fit && content && (tmpMatch = content.match(regCssFit))) {
        obj.fit = tmpMatch[1];
      }

      if (obj.fit) {
        parentObj = element._lazysizesParentContainer || element.getAttribute('data-parent-container');

        if (!parentObj && content && (tmpMatch = content.match(regCssObject))) {
          parentObj = tmpMatch[1];
        }

        obj.parent = parentFit.getParent(element, parentObj);
      } else {
        obj.fit = css.objectFit;
      }

      return obj;
    },
    getImageRatio: function getImageRatio(element) {
      var i, srcset, media, ratio, match, width, height;
      var parent = element.parentNode;
      var elements = parent && regPicture.test(parent.nodeName || '') ? parent.querySelectorAll('source, img') : [element];

      for (i = 0; i < elements.length; i++) {
        element = elements[i];
        srcset = element.getAttribute(cfg.srcsetAttr) || element.getAttribute('srcset') || element.getAttribute('data-pfsrcset') || element.getAttribute('data-risrcset') || '';
        media = element._lsMedia || element.getAttribute('media');
        media = cfg.customMedia[element.getAttribute('data-media') || media] || media;

        if (srcset && (!media || (window.matchMedia && matchMedia(media) || {}).matches)) {
          ratio = parseFloat(element.getAttribute('data-aspectratio'));

          if (!ratio) {
            match = srcset.match(regDescriptors);

            if (match) {
              if (match[2] == 'w') {
                width = match[1];
                height = match[3];
              } else {
                width = match[3];
                height = match[1];
              }
            } else {
              width = element.getAttribute('width');
              height = element.getAttribute('height');
            }

            ratio = width / height;
          }

          break;
        }
      }

      return ratio;
    },
    calculateSize: function calculateSize(element, width) {
      var displayRatio, height, imageRatio, retWidth;
      var fitObj = this.getFit(element);
      var fit = fitObj.fit;
      var fitElem = fitObj.parent;

      if (fit != 'width' && (fit != 'contain' && fit != 'cover' || !(imageRatio = this.getImageRatio(element)))) {
        return width;
      }

      if (fitElem) {
        width = fitElem.clientWidth;
      } else {
        fitElem = element;
      }

      retWidth = width;

      if (fit == 'width') {
        retWidth = width;
      } else {
        height = fitElem.clientHeight;

        if ((displayRatio = width / height) && (fit == 'cover' && displayRatio < imageRatio || fit == 'contain' && displayRatio > imageRatio)) {
          retWidth = width * (imageRatio / displayRatio);
        }
      }

      return retWidth;
    }
  };
  lazySizes.parentFit = parentFit;
  document.addEventListener('lazybeforesizes', function (e) {
    if (e.defaultPrevented || e.detail.instance != lazySizes) {
      return;
    }

    var element = e.target;
    e.detail.width = parentFit.calculateSize(element, e.detail.width);
  });
});

/***/ }),

/***/ 86:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var runtime = function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.

  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }

  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.

    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }

  exports.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.

  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.

  var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.

  function Generator() {}

  function GeneratorFunction() {}

  function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.


  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));

  if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"); // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.

  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function (genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
    // do is to check its .name property.
    (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
  };

  exports.mark = function (genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }

    genFun.prototype = Object.create(Gp);
    return genFun;
  }; // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.


  exports.awrap = function (arg) {
    return {
      __await: arg
    };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);

      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;

        if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function (value) {
            invoke("next", value, resolve, reject);
          }, function (err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function (unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function (error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise = // If enqueue has been called before, then we want to wait until
      // all previous Promises have been resolved before calling invoke,
      // so that results are always delivered in the correct order. If
      // enqueue has not been called before, then it is important to
      // call invoke immediately, without waiting on a callback to fire,
      // so that the async generator function has the opportunity to do
      // any necessary setup in a predictable way. This predictability
      // is why the Promise constructor synchronously invokes its
      // executor callback, and why async functions synchronously
      // execute code before the first await. Since we implement simple
      // async functions in terms of async generators, it is especially
      // important to get this right, even though it requires care.
      previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
      // invocations of the iterator.
      callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    } // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).


    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.

  exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
    : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        } // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume


        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;

        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);

          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);

        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done ? GenStateCompleted : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted; // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.

          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  } // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.


  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];

    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (!info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).

      context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.

      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }
    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    } // The delegate iterator is finished, so forget it and continue with
    // the outer generator.


    context.delegate = null;
    return ContinueSentinel;
  } // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.


  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator"); // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.

  define(Gp, iteratorSymbol, function () {
    return this;
  });
  define(Gp, "toString", function () {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{
      tryLoc: "root"
    }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function (object) {
    var keys = [];

    for (var key in object) {
      keys.push(key);
    }

    keys.reverse(); // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.

    return function next() {
      while (keys.length) {
        var key = keys.pop();

        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      } // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.


      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];

      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;
          return next;
        };

        return next.next = next;
      }
    } // Return an iterator with no values.


    return {
      next: doneResult
    };
  }

  exports.values = values;

  function doneResult() {
    return {
      value: undefined,
      done: true
    };
  }

  Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      this.prev = 0;
      this.next = 0; // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.

      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined;
      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },
    stop: function stop() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;

      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;

      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !!caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" || record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];

        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;

          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }

          return thrown;
        }
      } // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.


      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  }; // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.

  return exports;
}( // If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
( false ? 0 : _typeof(module)) === "object" ? module.exports : {});

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if ((typeof globalThis === "undefined" ? "undefined" : _typeof(globalThis)) === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

/***/ }),

/***/ 948:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(929);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@media screen and (min-width: 650px) {\r\n    .app-bar {\r\n        justify-content: space-between;\r\n    }\r\n   \r\n    .app-bar .app-bar__brand h1 {\r\n        font-size: 1.5em;\r\n    }\r\n   \r\n    .app-bar .app-bar__menu {\r\n        display: none;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation {\r\n        position: static;\r\n        width: fit-content;\r\n        display: flex;\r\n        height: fit-content;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation ul li {\r\n        display: inline-block;\r\n    }\r\n   \r\n    .app-bar .app-bar__navigation ul li a {\r\n        display: inline-block;\r\n        width: 120px;\r\n        text-align: center;\r\n        margin: 0;\r\n        padding: 22px 0;\r\n    }\r\n\r\n    .restaurant-detail .detail-main {\r\n        padding: 1.5rem;\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 800px) {\r\n    .app-bar .app-bar__brand h1 {\r\n        font-size: 2em;\r\n    }\r\n\r\n    .restaurant-detail {\r\n        flex-wrap: nowrap;\r\n        padding: 0 1.5rem;\r\n    }\r\n\r\n    .restaurant-detail .detail-main {\r\n        padding: 1.5rem 0;\r\n    }\r\n    \r\n    .restaurant-detail .detail-sidebar {\r\n        padding-left: 1.5rem;\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 850px) {\r\n    /* .movies {\r\n        grid-template-columns: repeat(3, 1fr);\r\n    } */\r\n  }\r\n   \r\n  @media screen and (min-width: 1200px) {\r\n    /* .movies {\r\n        grid-template-columns: repeat(4, 1fr);\r\n    } */\r\n\r\n    .responsive-container {\r\n        max-width: 1200px;\r\n    }\r\n\r\n    .hero .hero-title {\r\n        position: absolute;\r\n        top: 175px;\r\n    }\r\n\r\n    .responsive-container {\r\n        max-width: 1200px;\r\n        margin: 0 auto;\r\n    }\r\n\r\n    .restaurant-detail {\r\n        max-width: 1200px;\r\n        margin: 0 auto;\r\n    }\r\n  }\r\n   \r\n  @media screen and (min-width: 1600px) {\r\n    /* .movies {\r\n        grid-template-columns: repeat(5, 1fr);\r\n    } */\r\n  }", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 890:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(352);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(929);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Nunito&family=Poppins&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\r\n    margin: 0;\r\n    font-family: 'Nunito', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\nheader {\r\n    background-color: white;\r\n    position: sticky;\r\n    z-index: 99;\r\n    top: 0;\r\n    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.app-bar {\r\n  /* display: grid;\r\n  grid-template-columns: auto 1fr auto; */\r\n  display: flex;\r\n  max-width: 1300px;\r\n  margin: 0 auto;\r\n}\r\n  \r\n.app-bar .app-bar__menu {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n  \r\n.app-bar .app-bar__menu button {\r\n  display: flex;\r\n  background-color: transparent;\r\n  border: none;\r\n  font-size: 18px;\r\n  padding: 14px;\r\n  cursor: pointer;\r\n}\r\n  \r\n.app-bar .app-bar__brand {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n  \r\n.app-bar .app-bar__brand h1 {\r\n  color: #db0000;\r\n  text-transform: uppercase;\r\n  font-size: 22px;\r\n  user-select: none;\r\n}\r\n  \r\n.app-bar .app-bar__navigation {\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 66px;\r\n  left: -400px;\r\n  transition: all 0.3s;\r\n  background-color: white;\r\n  overflow: hidden;\r\n  width: 50vw;\r\n  height: 100vh;\r\n}\r\n\r\n.app-bar .app-bar__navigation ul {\r\n  padding: 0;\r\n  margin: 0;\r\n  list-style-type: none;\r\n  width: 100%;\r\n}\r\n  \r\n.app-bar .app-bar__navigation.open {\r\n  left: 0;\r\n}\r\n  \r\n.app-bar .app-bar__navigation ul li a {\r\n  display: inline-block;\r\n  text-decoration: none;\r\n  color: black;\r\n  margin-bottom: 5px;\r\n  width: 100%;\r\n  padding: 22px 0;\r\n  font-weight: bold;\r\n}\r\n\r\n.skip-link {\r\n  position: absolute;\r\n  top: -40px;\r\n  left: 0;\r\n  background-color: tomato;\r\n  color: white;\r\n  padding: 8px;\r\n  z-index: 100;\r\n  text-decoration: none;\r\n}\r\n  \r\n.skip-link:focus {\r\n    top: 66px;\r\n}\r\n\r\nfooter {\r\n    background-color: rgb(240, 240, 240);\r\n}\r\n\r\nfooter .footer-container {\r\n    padding: 1rem;\r\n    text-align: center;\r\n}\r\n\r\nfooter .footer-container p {\r\n    margin: 0;\r\n}\r\n\r\n.responsive-container {\r\n  margin: 0 auto;\r\n}\r\n\r\n.hero .hero-title-container {\r\n  margin: 1rem;\r\n}\r\n\r\n.hero .hero-title {\r\n  display: flex;\r\n  justify-content: center;\r\n  font-family: 'Poppins', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n  position: absolute;\r\n  top: 125px;\r\n  width: 100%;\r\n  color: white;\r\n}\r\n\r\n.hero .hero-title h1 {\r\n  font-size: 24px;\r\n}\r\n\r\n.hero img {\r\n  width: 100%;\r\n  height: 512px;\r\n  object-fit: cover;\r\n  filter: brightness(0.5);\r\n}\r\n\r\n.list-restaurant {\r\n  max-width: 1366px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.list-restaurant .list-restaurant-title {\r\n  text-align: center;\r\n}\r\n\r\n.list-restaurant .restaurant-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.list-restaurant .restaurant-list .restaurant-item {\r\n  max-width: 375px;\r\n  margin: 0.75rem;\r\n  box-shadow: 0 0 1px 1px rgb(200, 200, 200);\r\n  position: relative;\r\n}\r\n\r\n.list-restaurant .restaurant-list .restaurant-item img {\r\n  width: 100%;\r\n  height: 200px;\r\n  object-fit: cover;\r\n}\r\n\r\n.list-restaurant .restaurant-list .restaurant-item .restaurant-item-city {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: tomato;\r\n  padding: 8px 1rem;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.list-restaurant .restaurant-list .restaurant-item .restaurant-item-city svg {\r\n  width: 20px;\r\n  height: 20px;\r\n  padding-right: 4px;\r\n  color: white;\r\n}\r\n\r\n.list-restaurant .restaurant-list .restaurant-item .restaurant-item-city p {\r\n  margin: 0;\r\n  color: white;\r\n}\r\n\r\n.list-restaurant .restaurant-list .restaurant-item .restaurant-item-detail {\r\n  padding: 1rem;\r\n}\r\n\r\n\r\n.list-restaurant .restaurant-list .restaurant-item .restaurant-item-detail h5 {\r\n  margin: 0 0 10px;\r\n  font-size: 18px;\r\n}\r\n\r\n.list-restaurant .restaurant-list .restaurant-item .restaurant-item-detail p {\r\n  margin: 0;\r\n}\r\n\r\n.list-restaurant .restaurant-list .restaurant-item .restaurant-item-detail .restaurant-item-detail-info {\r\n  margin-top: 10px;\r\n}\r\n\r\n.list-restaurant .restaurant-list .restaurant-item .restaurant-item-detail .restaurant-item-detail-info p {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.list-restaurant .restaurant-list .restaurant-item .restaurant-item-detail .restaurant-item-detail-info svg {\r\n  width: 20px;\r\n  padding-right: 4px;\r\n}\r\n\r\n.list-restaurant .restaurant-list .restaurant-item .restaurant-item-detail .restaurant-item-button-container {\r\n  display: flex;\r\n  justify-content: end;\r\n  margin-top: 20px;\r\n}\r\n\r\n.list-restaurant .restaurant-list .restaurant-item .restaurant-item-detail a {\r\n  padding: 11px 2rem;\r\n  border-radius: 4px;\r\n  background-color: tomato;\r\n  color: white;\r\n  text-decoration: none;\r\n}\r\n\r\n.restaurant-detail {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.restaurant-rating {\r\n  color: black;\r\n  font-weight: bold;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n.restaurant-detail .detail-main__block {\r\n  border: 1px solid gainsboro;\r\n}\r\n\r\n.restaurant-detail .detail-main img {\r\n  width: 100%;\r\n  height: 400px;\r\n  object-fit: cover;\r\n}\r\n\r\n.restaurant-detail .main-title {\r\n  padding: 1rem;\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.restaurant-detail .main-title h2 {\r\n  margin-top: 0;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.restaurant-detail .main-title__title {\r\n  font-size: 18px;\r\n  font-weight: bold;\r\n}\r\n\r\n.restaurant-detail .detail-sidebar {\r\n  padding: 1.5rem;\r\n  width: 100%;\r\n  min-width: 200px;\r\n}\r\n\r\n.restaurant-detail .main-navigation {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  border: 1px solid gainsboro;\r\n  margin: 10px 0;\r\n  padding: 1rem;\r\n}\r\n\r\n.restaurant-detail .main-navigation ul {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.restaurant-detail .main-navigation ul li a {\r\n  padding: 1rem;\r\n  color: black;\r\n  text-decoration: none;\r\n}\r\n\r\n.restaurant-detail .main-navigation .main-navigation__like-container .like {\r\n  font-size: 18px;\r\n  position: fixed;\r\n  bottom: 16px;\r\n  right: 16px;\r\n  background-color: #fa4b3d;\r\n  color: white;\r\n  border: 0;\r\n  border-radius: 50%;\r\n  width: 55px;\r\n  height: 55px;\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n\r\n.restaurant-detail .description-container {\r\n  padding: 1rem;\r\n  border: 1px solid gainsboro;\r\n}\r\n\r\n.restaurant-detail .description-container h3 {\r\n  margin-top: 0;\r\n}\r\n\r\n.restaurant-detail .description-container .main-content__menu-container {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n}\r\n\r\n.restaurant-detail .description-container .main-content__menu-container > div {\r\n  padding-right: 2rem;\r\n}\r\n\r\n.restaurant-detail .review .review__review-title {\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.restaurant-detail .review .review__review-title p {\r\n  margin: 0;\r\n}\r\n\r\n.restaurant-detail .review__review-container .review__review-item .review__review-item-name {\r\n  font-weight: bold;\r\n}\r\n\r\n.restaurant-detail .review__review-container .review__review-item .review__review-item-review-date {\r\n  color: grey;\r\n  font-style: italic;\r\n}\r\n\r\n.restaurant-detail .review-box {\r\n  background-color: #F7D7DC;\r\n  padding: 10px 1rem;\r\n}\r\n\r\n.restaurant-detail .review-box .review-box__title-box h4 {\r\n  margin: 10px 0;\r\n}\r\n\r\n\r\n.restaurant-detail .review-box .review-box__title-box p {\r\n  margin-top: 10px;\r\n}\r\n\r\n.restaurant-detail .review-box .review-box__input-box textarea {\r\n  height: 60px;\r\n  border: 0;\r\n  padding: 0;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.restaurant-detail .review-box .review-box__input-box textarea:focus {\r\n  outline: none;\r\n}\r\n\r\n.restaurant-detail .review-box .review-box__input-box input {\r\n  height: 48px;\r\n  width: 100%;\r\n  padding: 0;\r\n  border: none;\r\n}\r\n\r\n.restaurant-detail .review-box .review-box__input-box input:focus {\r\n  outline: none;\r\n}\r\n\r\n.restaurant-detail .review-box .review-box__textinput-box {\r\n  width: 100%;\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.restaurant-detail .review-box .review-box__submit-box {\r\n  display: flex;\r\n  justify-content: end;\r\n}\r\n\r\n.restaurant-detail .review-box .review-box__input-box button {\r\n  width: 140px;\r\n  height: 46px;\r\n  background-color: #fa4b3d;\r\n  color: white;\r\n  border: none;\r\n  border-radius: 5px;\r\n  cursor: pointer;\r\n}\r\n\r\n.restaurant-detail .review-box .review-box__review-input {\r\n  width: 100%;\r\n}\r\n\r\n.favorite-page input#query {\r\n  width: 100%;\r\n  padding: 10px 6px;\r\n  border: 0;\r\n  border-radius: 4px;\r\n}\r\n\r\n.favorite-page, input#query:focus{\r\n  outline: none;\r\n}\r\n\r\n.favorite-page .restaurants__not__found {\r\n  padding-bottom: 8rem;\r\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 379:
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 777:
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ 216:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ 565:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 795:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ 589:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(86);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(777);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css
var style = __webpack_require__(890);
;// CONCATENATED MODULE: ./src/styles/style.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);




       /* harmony default export */ const styles_style = (style/* default */.Z && style/* default.locals */.Z.locals ? style/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/styles/responsive.css
var responsive = __webpack_require__(948);
;// CONCATENATED MODULE: ./src/styles/responsive.css

      
      
      
      
      
      
      
      
      

var responsive_options = {};

responsive_options.styleTagTransform = (styleTagTransform_default());
responsive_options.setAttributes = (setAttributesWithoutAttributes_default());

      responsive_options.insert = insertBySelector_default().bind(null, "head");
    
responsive_options.domAPI = (styleDomAPI_default());
responsive_options.insertStyleElement = (insertStyleElement_default());

var responsive_update = injectStylesIntoStyleTag_default()(responsive/* default */.Z, responsive_options);




       /* harmony default export */ const styles_responsive = (responsive/* default */.Z && responsive/* default.locals */.Z.locals ? responsive/* default.locals */.Z.locals : undefined);

// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
var lazysizes = __webpack_require__(272);
// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js
var ls_parent_fit = __webpack_require__(394);
;// CONCATENATED MODULE: ./src/scripts/utils/drawer-initiator.js
var DrawerInitiator = {
  init: function init(_ref) {
    var _this = this;

    var button = _ref.button,
        drawer = _ref.drawer,
        content = _ref.content;
    button.addEventListener('click', function (event) {
      _this._toggleDrawer(event, drawer);
    });
    content.addEventListener('click', function (event) {
      _this._closeDrawer(event, drawer);
    });
  },
  _toggleDrawer: function _toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.toggle('open');
  },
  _closeDrawer: function _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
  }
};
/* harmony default export */ const drawer_initiator = (DrawerInitiator);
;// CONCATENATED MODULE: ./src/scripts/routes/url-parser.js
var UrlParser = {
  parseActiveUrlWithCombiner: function parseActiveUrlWithCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();

    var splittedUrl = this._urlSplitter(url);

    return this._urlCombiner(splittedUrl);
  },
  parseActiveUrlWithoutCombiner: function parseActiveUrlWithoutCombiner() {
    var url = window.location.hash.slice(1).toLowerCase();
    return this._urlSplitter(url);
  },
  _urlSplitter: function _urlSplitter(url) {
    var urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null
    };
  },
  _urlCombiner: function _urlCombiner(splittedUrl) {
    return (splittedUrl.resource ? "/".concat(splittedUrl.resource) : '/') + (splittedUrl.id ? '/:id' : '') + (splittedUrl.verb ? "/".concat(splittedUrl.verb) : '');
  }
};
/* harmony default export */ const url_parser = (UrlParser);
;// CONCATENATED MODULE: ./src/scripts/global/config.js
var CONFIG = {
  BASE_URL: 'https://restaurant-api.dicoding.dev/',
  BASE_IMAGE_URL_SMALL: 'https://restaurant-api.dicoding.dev/images/small/',
  BASE_IMAGE_URL_LARGE: 'https://restaurant-api.dicoding.dev/images/large/',
  CACHE_NAME: 'MadangDseat-V1',
  FONT_STYLESHEET_URL: 'https://fonts.googleapis.com',
  FONT_WEBFONT_URL: 'https://fonts.gstatic.com',
  DATABASE_NAME: 'restaurants-finder-database',
  DATABASE_VERSION: 1,
  OBJECT_STORE_NAME: 'restaurants',
  DEFAULT_CACHE_EXPIRED: 60 * 60 * 24 * 30,
  MODE: 'DEVELOPMENT'
};
/* harmony default export */ const config = (CONFIG);
;// CONCATENATED MODULE: ./src/scripts/global/api-endpoint.js

var API_ENDPOINT = {
  RESTAURANTS: "".concat(config.BASE_URL, "list"),
  RESTAURANT_DETAIL: function RESTAURANT_DETAIL(id) {
    return "".concat(config.BASE_URL, "detail/").concat(id);
  },
  ADD_REVIEW: "".concat(config.BASE_URL, "review")
};
/* harmony default export */ const api_endpoint = (API_ENDPOINT);
;// CONCATENATED MODULE: ./src/scripts/data/restaurantsapi-source.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var RestaurantApiSource = /*#__PURE__*/function () {
  function RestaurantApiSource() {
    _classCallCheck(this, RestaurantApiSource);
  }

  _createClass(RestaurantApiSource, null, [{
    key: "restaurantList",
    value: function () {
      var _restaurantList = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return fetch(api_endpoint.RESTAURANTS);

              case 2:
                response = _context.sent;
                _context.next = 5;
                return response.json();

              case 5:
                responseJson = _context.sent;
                return _context.abrupt("return", responseJson);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function restaurantList() {
        return _restaurantList.apply(this, arguments);
      }

      return restaurantList;
    }()
  }, {
    key: "detailRestaurant",
    value: function () {
      var _detailRestaurant = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(id) {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return fetch(api_endpoint.RESTAURANT_DETAIL(id));

              case 2:
                response = _context2.sent;
                _context2.next = 5;
                return response.json();

              case 5:
                responseJson = _context2.sent;
                return _context2.abrupt("return", responseJson);

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function detailRestaurant(_x) {
        return _detailRestaurant.apply(this, arguments);
      }

      return detailRestaurant;
    }()
  }, {
    key: "addNewReview",
    value: function () {
      var _addNewReview = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(review) {
        var response, responseJson;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!review.review) {
                  _context3.next = 9;
                  break;
                }

                if (!review.name) {
                  review.name = 'Anonymous';
                }

                _context3.next = 4;
                return fetch(api_endpoint.ADD_REVIEW, {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(review)
                });

              case 4:
                response = _context3.sent;
                _context3.next = 7;
                return response.json();

              case 7:
                responseJson = _context3.sent;
                return _context3.abrupt("return", responseJson);

              case 9:
                return _context3.abrupt("return", null);

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function addNewReview(_x2) {
        return _addNewReview.apply(this, arguments);
      }

      return addNewReview;
    }()
  }]);

  return RestaurantApiSource;
}();

/* harmony default export */ const restaurantsapi_source = (RestaurantApiSource);
;// CONCATENATED MODULE: ./src/scripts/models/restaurant.js
function restaurant_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Restaurant = function Restaurant(pictureId, name, description, city, rating) {
  restaurant_classCallCheck(this, Restaurant);

  this.pictureId = pictureId;
  this.name = name;
  this.description = description;
  this.city = city;
  this.rating = rating;
};

/* harmony default export */ const restaurant = (Restaurant);
;// CONCATENATED MODULE: ./src/scripts/views/components/restaurant-item.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function restaurant_item_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function restaurant_item_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function restaurant_item_createClass(Constructor, protoProps, staticProps) { if (protoProps) restaurant_item_defineProperties(Constructor.prototype, protoProps); if (staticProps) restaurant_item_defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var RestaurantItem = /*#__PURE__*/function (_HTMLElement) {
  _inherits(RestaurantItem, _HTMLElement);

  var _super = _createSuper(RestaurantItem);

  function RestaurantItem() {
    var _this;

    restaurant_item_classCallCheck(this, RestaurantItem);

    _this = _super.call(this);
    _this.restaurant = new restaurant();
    _this.restaurant.name = _this.getAttribute('data-name');
    return _this;
  }

  restaurant_item_createClass(RestaurantItem, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render();
    }
  }, {
    key: "render",
    value: function render() {
      this.innerHTML = "\n        <div class=\"restaurant-item\">\n          <img class=\"lazyload\" src=\"".concat(config.BASE_IMAGE_URL_SMALL + this.restaurant.pictureId, "\" alt=\"Gambar restoran ").concat(this.restaurant.name, "\">\n          <div class=\"restaurant-item-city\">\n              <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n                  <path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\" />\n              </svg>\n              <p>").concat(this.restaurant.rating, "</p>\n          </div>\n          <div class=\"restaurant-item-detail\">\n              <h5>").concat(this.restaurant.name, "</h5>\n              <p>").concat(this.restaurant.description.substring(0, 150), "...</p>\n              <div class=\"restaurant-item-detail-info\">\n                  <p>\n                      <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                          <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z\" />\n                          <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 11a3 3 0 11-6 0 3 3 0 016 0z\" />\n                      </svg>\n                      ").concat(this.restaurant.city, "</p>\n              </div>\n              <div class=\"restaurant-item-button-container\">\n                  <a href=\"#\">Kunjungi Restoran</a>\n              </div>\n          </div>\n      </div>");
    }
  }]);

  return RestaurantItem;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement));

customElements.define('restaurant-item', RestaurantItem);
;// CONCATENATED MODULE: ./src/scripts/views/templates/template-creator.js


var createListByArrayForMenu = function createListByArrayForMenu(items) {
  var lists = '';
  items.forEach(function (item) {
    lists += "<li>".concat(item.name, "</li>");
  });
  return lists;
};

var createReviewItemList = function createReviewItemList(reviews) {
  var reviewList = '';
  reviews.forEach(function (review) {
    reviewList += "\n          <div class=\"review__review-item\">\n              <p class=\"review__review-item-name\">".concat(review.name, "</p>\n              <p class=\"review__review-item-review\">").concat(review.review, " - <span class=\"review__review-item-review-date\">").concat(review.date, "</span></p>\n          </div>");
  });
  return reviewList;
};

var createRestaurantItemTemplate = function createRestaurantItemTemplate(restaurant) {
  return "<div class=\"restaurant-item\">\n    <img class=\"lazyload\" src=\"".concat(config.BASE_IMAGE_URL_SMALL + restaurant.pictureId, "\" alt=\"Gambar restoran ").concat(restaurant.name || '-', "\">\n    <div class=\"restaurant-item-city\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5\" viewBox=\"0 0 20 20\" fill=\"currentColor\">\n            <path d=\"M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z\" />\n        </svg>\n        <p>").concat(restaurant.rating || '-', "</p>\n    </div>\n    <div class=\"restaurant-item-detail\">\n        <h5 class=\"restaurant__name\">").concat(restaurant.name || '-', "</h5>\n        <p>").concat(restaurant.description ? restaurant.description.substring(0, 150) : '-', "...</p>\n        <div class=\"restaurant-item-detail-info\">\n            <p>\n                <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\">\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z\" />\n                    <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M15 11a3 3 0 11-6 0 3 3 0 016 0z\" />\n                </svg>\n                ").concat(restaurant.city || '-', "</p>\n        </div>\n        <div class=\"restaurant-item-button-container\">\n            <a href=\"./#/detail/").concat(restaurant.id, "\" class=\"visit-restaurant\" aria-label=\"Kunjungi restoran ").concat(restaurant.name || '-', " di ").concat(restaurant.city || '-', "\">Kunjungi Restoran</a>\n        </div>\n    </div>\n</div>");
};

var createDetailRestaurantItem = function createDetailRestaurantItem(restaurant) {
  return "\n    <section class=\"restaurant-detail\">\n        <div class=\"detail-main\">\n            <div class=\"detail-main__block\">\n                <img class=\"lazyload\" src=\"".concat(config.BASE_IMAGE_URL_LARGE + restaurant.pictureId, "\"></img>\n                <div class=\"main-title\">\n                    <div>\n                        <h2 class=\"main-title__title restaurant__name\">").concat(restaurant.name, "</h2>\n                        <p class=\"main-title__location\">").concat(restaurant.address, ", ").concat(restaurant.city, "</p>\n                        <div class=\"main-title__category\">\n                            <div class=\"main-title__category-item\"></div>\n                        </div>\n                    </div>\n                    <p class=\"restaurant-rating\">Rating: ").concat(restaurant.rating, "</p>\n                </div>\n            </div>\n            <div class=\"main-navigation\">\n                <ul>\n                    <li>\n                        <a href=\"#\">About</a>\n                        <a href=\"#\">Menu</a>\n                        <a href=\"#\">Review</a>\n                    </li>\n                </ul>\n                <div class=\"main-navigation__like-container\" id=\"restaurant-like-container\"></div>\n            </div>\n            <div class=\"main-content description-container\">\n                <div class=\"main-content__block\">\n                    <h3 class=\"main-content__title\" id=\"about\">Deskripsi</h3>\n                    <hr>\n                    <p>").concat(restaurant.description, "</p>\n                </div>\n                <div class=\"main-content__block\">\n                    <h3 class=\"main-content__title\" id=\"menu\">Menu</h3>\n                    <hr>\n                    <div class=\"main-content__menu-container\">\n                        <div>\n                            <p>Foods</p>\n                            <ul class=\"food-list-container\">\n                                ").concat(createListByArrayForMenu(restaurant.menus.foods), "\n                            </ul>\n                        </div>\n                        <div>\n                            <p>Drinks</p>\n                            <ul class=\"drink-list-container\">\n                                ").concat(createListByArrayForMenu(restaurant.menus.drinks), "\n                            </ul>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"detail-sidebar\">\n            <div class=\"main-content__block review\" id=\"review\">\n                <div class=\"review__review-title\">\n                    <h3 class=\"main-content__title\">Review</h3>\n                </div>\n                <hr>\n                <div class=\"review__write-review-container\" id=\"write-review-container\"></div>\n                <hr>\n                <div class=\"review__review-container\">\n                    ").concat(createReviewItemList(restaurant.customerReviews), "\n                </div>\n            </div>\n        </div>\n    </section>");
};

var createLikeButtonTemplate = function createLikeButtonTemplate() {
  return "<button aria-label=\"like this restaurant\" id=\"likeButton\" class=\"like\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-6 w-6\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" width=\"25\">\n            <path stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z\" />\n        </svg>\n    </button>";
};

var createLikedButtonTemplate = function createLikedButtonTemplate() {
  return "<button aria-label=\"unlike this restaurant\" id=\"likeButton\" class=\"like\">\n        <svg xmlns=\"http://www.w3.org/2000/svg\" class=\"h-5 w-5\" viewBox=\"0 0 20 20\" fill=\"currentColor\" width=\"25\">\n            <path fill-rule=\"evenodd\" d=\"M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z\" clip-rule=\"evenodd\" />\n        </svg>\n    </button>";
};

var createReviewBoxTemplate = function createReviewBoxTemplate() {
  return "\n        <div class=\"review-box\">\n            <div class=\"review-box__title-box\">\n                <h4>Tambahkan Review</h4>\n                <p>Bagaimana pengalamanmu saat makan disini ? Ayo bagikan pengalamanmu disini</p>\n            </div>\n            <div class=\"review-box__input-box\">\n                <div class=\"review-box__textinput-box\">\n                    <input type=\"text\" name=\"name\" placeholder=\"Nama\" id=\"input-name\"></input>\n                </div>\n                <textarea class=\"review-box__review-input\" placeholder=\"Review Restoran\" id=\"input-review\"></textarea>\n                <div class=\"review-box__submit-box\">\n                    <button type=\"submit\" id=\"add-new-review-button\">Kirim</button>\n                </div>\n            </div>\n        </div>\n    ";
};

var createReviewedBoxTemplate = function createReviewedBoxTemplate(reviewText) {
  return "\n    <div class=\"review-box\">\n        <div class=\"review-box__title-box\">\n            <h4>Review berhasil ditambahkan</h4>\n            <p>Terima kasih telah memberikan penilaian mengenai restoran ini !</p>\n        </div>\n        <div class=\"review-box__input-box\">\n            <i>".concat(reviewText, "</i>\n        </div>\n    </div>\n    ");
};

var createFavoriteSearchboxTemplate = function createFavoriteSearchboxTemplate() {
  return "\n    <section class=\"hero\">\n        <picture>\n            <source media=(max-width: 600px) srcset=\"./images/hero-image-small.jpg\" alt=\"Gambar hero - chef sedang memasak\">\n            <img class=\"lazyload\" src=\"./images/hero-image.jpg\" alt=\"Gambar hero - chef sedang memasak\">\n        </picture>\n        <div class=\"hero-title\">\n            <div class=\"hero-title-container responsive-container\">\n                <h1>Madang D'Seat Restaurant Finder</h1>\n                <p>Temukan restoran yang sesuai denganmu disini</p>\n                <p>Menyajikan ribuan restoran pilihan dari seluruh Indonesia yang pastinya menggugah selera kamu, mulai cari sekarang !</p>\n            </div>\n        </div>\n    </section>\n    <section class=\"list-restaurant\">\n        <div class=\"responsive-container\" id=\"focusContent\">\n            <h2 class=\"list-restaurant-title\">Jelajahi Restoran</h2>\n            <div class=\"restaurant-list\" id=\"restaurant-list\">\n\n            </div>\n        </div>\n    </section>";
};


;// CONCATENATED MODULE: ./src/scripts/views/pages/home.js
function home_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function home_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { home_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { home_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var Home = {
  render: function render() {
    return home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n        <section class=\"hero\">\n            <picture>\n              <source media=(max-width: 600px) srcset=\"./images/hero-image-small.jpg\" alt=\"Gambar hero - chef sedang memasak\">\n              <img class=\"lazyload\" src=\"./images/hero-image.jpg\" alt=\"Gambar hero - chef sedang memasak\">\n            </picture>\n            <div class=\"hero-title\">\n                <div class=\"hero-title-container responsive-container\">\n                    <h1>Madang D'Seat Restaurant Finder</h1>\n                    <p>Temukan restoran yang sesuai denganmu disini</p>\n                    <p>Menyajikan ribuan restoran pilihan dari seluruh Indonesia yang pastinya menggugah selera kamu, mulai cari sekarang !</p>\n                </div>\n            </div>\n        </section>\n        <section class=\"list-restaurant\">\n            <div class=\"responsive-container\" id=\"focusContent\">\n                <h2 class=\"list-restaurant-title\">Jelajahi Restoran</h2>\n                <div class=\"restaurant-list\" id=\"restaurant-list\">\n\n                </div>\n            </div>\n        </section>\n        ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return home_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var restaurantApi, restaurantContainer;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return restaurantsapi_source.restaurantList();

            case 2:
              restaurantApi = _context2.sent;

              if (!restaurantApi.error) {
                restaurantContainer = document.querySelector('#restaurant-list');
                restaurantApi.restaurants.forEach(function (restaurant) {
                  restaurantContainer.innerHTML += createRestaurantItemTemplate(restaurant);
                });
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ const home = (Home);
;// CONCATENATED MODULE: ./node_modules/idb/build/wrap-idb-value.js
var instanceOfAny = function instanceOfAny(object, constructors) {
  return constructors.some(function (c) {
    return object instanceof c;
  });
};

var idbProxyableTypes;
var cursorAdvanceMethods; // This is a function to prevent it throwing up in node environments.

function getIdbProxyableTypes() {
  return idbProxyableTypes || (idbProxyableTypes = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction]);
} // This is a function to prevent it throwing up in node environments.


function getCursorAdvanceMethods() {
  return cursorAdvanceMethods || (cursorAdvanceMethods = [IDBCursor.prototype.advance, IDBCursor.prototype["continue"], IDBCursor.prototype.continuePrimaryKey]);
}

var cursorRequestMap = new WeakMap();
var transactionDoneMap = new WeakMap();
var transactionStoreNamesMap = new WeakMap();
var transformCache = new WeakMap();
var reverseTransformCache = new WeakMap();

function promisifyRequest(request) {
  var promise = new Promise(function (resolve, reject) {
    var unlisten = function unlisten() {
      request.removeEventListener('success', success);
      request.removeEventListener('error', error);
    };

    var success = function success() {
      resolve(wrap_idb_value_wrap(request.result));
      unlisten();
    };

    var error = function error() {
      reject(request.error);
      unlisten();
    };

    request.addEventListener('success', success);
    request.addEventListener('error', error);
  });
  promise.then(function (value) {
    // Since cursoring reuses the IDBRequest (*sigh*), we cache it for later retrieval
    // (see wrapFunction).
    if (value instanceof IDBCursor) {
      cursorRequestMap.set(value, request);
    } // Catching to avoid "Uncaught Promise exceptions"

  })["catch"](function () {}); // This mapping exists in reverseTransformCache but doesn't doesn't exist in transformCache. This
  // is because we create many promises from a single IDBRequest.

  reverseTransformCache.set(promise, request);
  return promise;
}

function cacheDonePromiseForTransaction(tx) {
  // Early bail if we've already created a done promise for this transaction.
  if (transactionDoneMap.has(tx)) return;
  var done = new Promise(function (resolve, reject) {
    var unlisten = function unlisten() {
      tx.removeEventListener('complete', complete);
      tx.removeEventListener('error', error);
      tx.removeEventListener('abort', error);
    };

    var complete = function complete() {
      resolve();
      unlisten();
    };

    var error = function error() {
      reject(tx.error || new DOMException('AbortError', 'AbortError'));
      unlisten();
    };

    tx.addEventListener('complete', complete);
    tx.addEventListener('error', error);
    tx.addEventListener('abort', error);
  }); // Cache it for later retrieval.

  transactionDoneMap.set(tx, done);
}

var idbProxyTraps = {
  get: function get(target, prop, receiver) {
    if (target instanceof IDBTransaction) {
      // Special handling for transaction.done.
      if (prop === 'done') return transactionDoneMap.get(target); // Polyfill for objectStoreNames because of Edge.

      if (prop === 'objectStoreNames') {
        return target.objectStoreNames || transactionStoreNamesMap.get(target);
      } // Make tx.store return the only store in the transaction, or undefined if there are many.


      if (prop === 'store') {
        return receiver.objectStoreNames[1] ? undefined : receiver.objectStore(receiver.objectStoreNames[0]);
      }
    } // Else transform whatever we get back.


    return wrap_idb_value_wrap(target[prop]);
  },
  set: function set(target, prop, value) {
    target[prop] = value;
    return true;
  },
  has: function has(target, prop) {
    if (target instanceof IDBTransaction && (prop === 'done' || prop === 'store')) {
      return true;
    }

    return prop in target;
  }
};

function replaceTraps(callback) {
  idbProxyTraps = callback(idbProxyTraps);
}

function wrapFunction(func) {
  // Due to expected object equality (which is enforced by the caching in `wrap`), we
  // only create one new func per func.
  // Edge doesn't support objectStoreNames (booo), so we polyfill it here.
  if (func === IDBDatabase.prototype.transaction && !('objectStoreNames' in IDBTransaction.prototype)) {
    return function (storeNames) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      var tx = func.call.apply(func, [unwrap(this), storeNames].concat(args));
      transactionStoreNamesMap.set(tx, storeNames.sort ? storeNames.sort() : [storeNames]);
      return wrap_idb_value_wrap(tx);
    };
  } // Cursor methods are special, as the behaviour is a little more different to standard IDB. In
  // IDB, you advance the cursor and wait for a new 'success' on the IDBRequest that gave you the
  // cursor. It's kinda like a promise that can resolve with many values. That doesn't make sense
  // with real promises, so each advance methods returns a new promise for the cursor object, or
  // undefined if the end of the cursor has been reached.


  if (getCursorAdvanceMethods().includes(func)) {
    return function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
      // the original object.
      func.apply(unwrap(this), args);
      return wrap_idb_value_wrap(cursorRequestMap.get(this));
    };
  }

  return function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    // Calling the original function with the proxy as 'this' causes ILLEGAL INVOCATION, so we use
    // the original object.
    return wrap_idb_value_wrap(func.apply(unwrap(this), args));
  };
}

function transformCachableValue(value) {
  if (typeof value === 'function') return wrapFunction(value); // This doesn't return, it just creates a 'done' promise for the transaction,
  // which is later returned for transaction.done (see idbObjectHandler).

  if (value instanceof IDBTransaction) cacheDonePromiseForTransaction(value);
  if (instanceOfAny(value, getIdbProxyableTypes())) return new Proxy(value, idbProxyTraps); // Return the same value back if we're not going to transform it.

  return value;
}

function wrap_idb_value_wrap(value) {
  // We sometimes generate multiple promises from a single IDBRequest (eg when cursoring), because
  // IDB is weird and a single IDBRequest can yield many responses, so these can't be cached.
  if (value instanceof IDBRequest) return promisifyRequest(value); // If we've already transformed this value before, reuse the transformed value.
  // This is faster, but it also provides object equality.

  if (transformCache.has(value)) return transformCache.get(value);
  var newValue = transformCachableValue(value); // Not all types are transformed.
  // These may be primitive types, so they can't be WeakMap keys.

  if (newValue !== value) {
    transformCache.set(value, newValue);
    reverseTransformCache.set(newValue, value);
  }

  return newValue;
}

var unwrap = function unwrap(value) {
  return reverseTransformCache.get(value);
};


;// CONCATENATED MODULE: ./node_modules/idb/build/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function build_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function build_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { build_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { build_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }



/**
 * Open a database.
 *
 * @param name Name of the database.
 * @param version Schema version.
 * @param callbacks Additional callbacks.
 */

function openDB(name, version) {
  var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
      blocked = _ref.blocked,
      upgrade = _ref.upgrade,
      blocking = _ref.blocking,
      terminated = _ref.terminated;

  var request = indexedDB.open(name, version);
  var openPromise = wrap_idb_value_wrap(request);

  if (upgrade) {
    request.addEventListener('upgradeneeded', function (event) {
      upgrade(wrap_idb_value_wrap(request.result), event.oldVersion, event.newVersion, wrap_idb_value_wrap(request.transaction));
    });
  }

  if (blocked) request.addEventListener('blocked', function () {
    return blocked();
  });
  openPromise.then(function (db) {
    if (terminated) db.addEventListener('close', function () {
      return terminated();
    });
    if (blocking) db.addEventListener('versionchange', function () {
      return blocking();
    });
  })["catch"](function () {});
  return openPromise;
}
/**
 * Delete a database.
 *
 * @param name Name of the database.
 */


function deleteDB(name) {
  var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      blocked = _ref2.blocked;

  var request = indexedDB.deleteDatabase(name);
  if (blocked) request.addEventListener('blocked', function () {
    return blocked();
  });
  return wrap(request).then(function () {
    return undefined;
  });
}

var readMethods = ['get', 'getKey', 'getAll', 'getAllKeys', 'count'];
var writeMethods = ['put', 'add', 'delete', 'clear'];
var cachedMethods = new Map();

function getMethod(target, prop) {
  if (!(target instanceof IDBDatabase && !(prop in target) && typeof prop === 'string')) {
    return;
  }

  if (cachedMethods.get(prop)) return cachedMethods.get(prop);
  var targetFuncName = prop.replace(/FromIndex$/, '');
  var useIndex = prop !== targetFuncName;
  var isWrite = writeMethods.includes(targetFuncName);

  if ( // Bail if the target doesn't exist on the target. Eg, getAll isn't in Edge.
  !(targetFuncName in (useIndex ? IDBIndex : IDBObjectStore).prototype) || !(isWrite || readMethods.includes(targetFuncName))) {
    return;
  }

  var method = /*#__PURE__*/function () {
    var _ref3 = build_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(storeName) {
      var _target;

      var tx,
          target,
          _len,
          args,
          _key,
          _args = arguments;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // isWrite ? 'readwrite' : undefined gzipps better, but fails in Edge :(
              tx = this.transaction(storeName, isWrite ? 'readwrite' : 'readonly');
              target = tx.store;

              for (_len = _args.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                args[_key - 1] = _args[_key];
              }

              if (useIndex) target = target.index(args.shift()); // Must reject if op rejects.
              // If it's a write operation, must reject if tx.done rejects.
              // Must reject with op rejection first.
              // Must resolve with op value.
              // Must handle both promises (no unhandled rejections)

              _context.next = 6;
              return Promise.all([(_target = target)[targetFuncName].apply(_target, args), isWrite && tx.done]);

            case 6:
              return _context.abrupt("return", _context.sent[0]);

            case 7:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function method(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  cachedMethods.set(prop, method);
  return method;
}

replaceTraps(function (oldTraps) {
  return _objectSpread(_objectSpread({}, oldTraps), {}, {
    get: function get(target, prop, receiver) {
      return getMethod(target, prop) || oldTraps.get(target, prop, receiver);
    },
    has: function has(target, prop) {
      return !!getMethod(target, prop) || oldTraps.has(target, prop);
    }
  });
});

;// CONCATENATED MODULE: ./src/scripts/data/favouriterestaurant-idb.js
function favouriterestaurant_idb_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function favouriterestaurant_idb_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { favouriterestaurant_idb_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { favouriterestaurant_idb_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable no-prototype-builtins */

/* eslint-disable consistent-return */


var dbPromise = openDB(config.DATABASE_NAME, config.DATABASE_VERSION, {
  upgrade: function upgrade(database) {
    database.createObjectStore(config.OBJECT_STORE_NAME, {
      keyPath: 'id'
    });
  }
});
var FavouriteRestaurantDB = {
  getRestaurant: function getRestaurant(id) {
    return favouriterestaurant_idb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (id) {
                _context.next = 2;
                break;
              }

              return _context.abrupt("return");

            case 2:
              _context.next = 4;
              return dbPromise;

            case 4:
              return _context.abrupt("return", _context.sent.get(config.OBJECT_STORE_NAME, id));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getAllRestaurants: function getAllRestaurants() {
    return favouriterestaurant_idb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dbPromise;

            case 2:
              return _context2.abrupt("return", _context2.sent.getAll(config.OBJECT_STORE_NAME));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  putRestaurant: function putRestaurant(restaurant) {
    return favouriterestaurant_idb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (restaurant.hasOwnProperty('id')) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              _context3.next = 4;
              return dbPromise;

            case 4:
              return _context3.abrupt("return", _context3.sent.put(config.OBJECT_STORE_NAME, restaurant));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  updateRestaurant: function updateRestaurant(restaurant) {
    return favouriterestaurant_idb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return dbPromise;

            case 2:
              return _context4.abrupt("return", _context4.sent.put(config.OBJECT_STORE_NAME, restaurant));

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  deleteRestaurant: function deleteRestaurant(id) {
    return favouriterestaurant_idb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return dbPromise;

            case 2:
              return _context5.abrupt("return", _context5.sent["delete"](config.OBJECT_STORE_NAME, id));

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  searchRestaurants: function searchRestaurants(query) {
    var _this = this;

    return favouriterestaurant_idb_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _this.getAllRestaurants();

            case 2:
              return _context6.abrupt("return", _context6.sent.filter(function (restaurant) {
                var loweredCaseRestaraurantName = (restaurant.name || '-').toLowerCase();
                var jammedRestaurantName = loweredCaseRestaraurantName.replace(/\s/g, '');
                var loweredCaseQuery = query.toLowerCase();
                var jammedQuery = loweredCaseQuery.replace(/\s/g, '');
                return jammedRestaurantName.indexOf(jammedQuery) !== -1;
              }));

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  }
};
/* harmony default export */ const favouriterestaurant_idb = (FavouriteRestaurantDB);
;// CONCATENATED MODULE: ./src/scripts/utils/like-button-initiator.js
function like_button_initiator_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function like_button_initiator_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { like_button_initiator_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { like_button_initiator_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var LikeButtonInitiator = {
  init: function init(_ref) {
    var _this = this;

    return like_button_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var likeButtonContainer, favoriteRestaurant, restaurant;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              likeButtonContainer = _ref.likeButtonContainer, favoriteRestaurant = _ref.favoriteRestaurant, restaurant = _ref.restaurant;
              _this._likeButtonContainer = likeButtonContainer;
              _this._favoriteRestaurant = favoriteRestaurant;
              _this._restaurant = restaurant;
              _context.next = 6;
              return _this._renderButton();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  _renderButton: function _renderButton() {
    var _this2 = this;

    return like_button_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var id;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              id = _this2._restaurant.id;
              _context2.next = 3;
              return _this2._isRestaurantExist(id);

            case 3:
              if (!_context2.sent) {
                _context2.next = 7;
                break;
              }

              _this2._renderLiked();

              _context2.next = 8;
              break;

            case 7:
              _this2._renderLike();

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  _isRestaurantExist: function _isRestaurantExist(id) {
    var _this3 = this;

    return like_button_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var restaurant;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _this3._favoriteRestaurant.getRestaurant(id);

            case 2:
              restaurant = _context3.sent;
              return _context3.abrupt("return", restaurant);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  _renderLiked: function _renderLiked() {
    var _this4 = this;

    return like_button_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var likeButton;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this4._likeButtonContainer.innerHTML = createLikedButtonTemplate();
              likeButton = document.querySelector('#likeButton');
              likeButton.addEventListener('click', /*#__PURE__*/like_button_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                  while (1) {
                    switch (_context4.prev = _context4.next) {
                      case 0:
                        _context4.next = 2;
                        return _this4._favoriteRestaurant.deleteRestaurant(_this4._restaurant.id);

                      case 2:
                        _this4._renderButton();

                      case 3:
                      case "end":
                        return _context4.stop();
                    }
                  }
                }, _callee4);
              })));

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  _renderLike: function _renderLike() {
    var _this5 = this;

    return like_button_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var likeButton;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _this5._likeButtonContainer.innerHTML = createLikeButtonTemplate();
              likeButton = document.querySelector('#likeButton');
              likeButton.addEventListener('click', /*#__PURE__*/like_button_initiator_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                  while (1) {
                    switch (_context6.prev = _context6.next) {
                      case 0:
                        _context6.next = 2;
                        return _this5._favoriteRestaurant.putRestaurant(_this5._restaurant);

                      case 2:
                        _this5._renderButton();

                      case 3:
                      case "end":
                        return _context6.stop();
                    }
                  }
                }, _callee6);
              })));

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }))();
  }
};
/* harmony default export */ const like_button_initiator = (LikeButtonInitiator);
;// CONCATENATED MODULE: ./src/scripts/views/pages/detail.js
function detail_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function detail_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { detail_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { detail_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var Detail = {
  render: function render() {
    return detail_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", "\n        <section class=\"detail-restaurant\" id=\"focusContent\">\n          <div id=\"restaurant\"></div>\n        </section>\n        ");

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return detail_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var url, restaurant, restaurantContainer, likeButtonContainer, writeReviewContainer, addNewReviewButton;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              url = url_parser.parseActiveUrlWithoutCombiner();
              _context2.next = 3;
              return restaurantsapi_source.detailRestaurant(url.id);

            case 3:
              restaurant = _context2.sent;
              restaurant = restaurant.restaurant;
              restaurantContainer = document.querySelector('#restaurant');
              restaurantContainer.innerHTML = createDetailRestaurantItem(restaurant);
              likeButtonContainer = document.querySelector('#restaurant-like-container');
              likeButtonContainer.innerHTML = createLikeButtonTemplate();
              like_button_initiator.init({
                likeButtonContainer: document.querySelector('#restaurant-like-container'),
                favoriteRestaurant: favouriterestaurant_idb,
                restaurant: {
                  id: restaurant.id,
                  name: restaurant.name,
                  description: restaurant.description,
                  city: restaurant.city,
                  rating: restaurant.rating,
                  pictureId: restaurant.pictureId
                }
              });
              writeReviewContainer = document.querySelector('#write-review-container');
              writeReviewContainer.innerHTML = createReviewBoxTemplate();
              addNewReviewButton = document.querySelector('#add-new-review-button');
              addNewReviewButton.addEventListener('click', function () {
                var name = document.querySelector('#input-name').value;
                var review = document.querySelector('#input-review').value;
                var reviewPost = restaurantsapi_source.addNewReview({
                  id: restaurant.id,
                  name: name,
                  review: review
                });
                reviewPost.then(function (response) {
                  var submittedComment = response.customerReviews[response.customerReviews.length - 1];
                  writeReviewContainer.innerHTML = createReviewedBoxTemplate(submittedComment.review);
                });
              });

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ const detail = (Detail);
;// CONCATENATED MODULE: ./src/scripts/views/pages/liked-movies/favorite-restaurant-search-presenter.js
function favorite_restaurant_search_presenter_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function favorite_restaurant_search_presenter_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { favorite_restaurant_search_presenter_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { favorite_restaurant_search_presenter_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function favorite_restaurant_search_presenter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function favorite_restaurant_search_presenter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function favorite_restaurant_search_presenter_createClass(Constructor, protoProps, staticProps) { if (protoProps) favorite_restaurant_search_presenter_defineProperties(Constructor.prototype, protoProps); if (staticProps) favorite_restaurant_search_presenter_defineProperties(Constructor, staticProps); return Constructor; }

var FavoriteRestaurantSearchPresenter = /*#__PURE__*/function () {
  function FavoriteRestaurantSearchPresenter(_ref) {
    var view = _ref.view,
        favoriteRestaurants = _ref.favoriteRestaurants;

    favorite_restaurant_search_presenter_classCallCheck(this, FavoriteRestaurantSearchPresenter);

    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    this._listenToSearchUserByRequest();
  }

  favorite_restaurant_search_presenter_createClass(FavoriteRestaurantSearchPresenter, [{
    key: "_showFoundRestaurants",
    value: function _showFoundRestaurants(restaurants) {
      this._view.showFavoriteRestaurants(restaurants);
    }
  }, {
    key: "_searchRestaurants",
    value: function () {
      var _searchRestaurants2 = favorite_restaurant_search_presenter_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(latestQuery) {
        var foundRestaurants;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._latestQuery = latestQuery.trim();

                if (!(this._latestQuery.length > 0)) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return this._favoriteRestaurants.searchRestaurants(this._latestQuery);

              case 4:
                foundRestaurants = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.next = 9;
                return this._favoriteRestaurants.getAllRestaurants();

              case 9:
                foundRestaurants = _context.sent;

              case 10:
                this._showFoundRestaurants(foundRestaurants);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _searchRestaurants(_x) {
        return _searchRestaurants2.apply(this, arguments);
      }

      return _searchRestaurants;
    }()
  }, {
    key: "_listenToSearchUserByRequest",
    value: function _listenToSearchUserByRequest() {
      var _this = this;

      this._view.runWhenUserIsSearching(function (latestQuery) {
        _this._searchRestaurants(latestQuery);
      });
    }
  }, {
    key: "latestQuery",
    get: function get() {
      return this._latestQuery;
    }
  }]);

  return FavoriteRestaurantSearchPresenter;
}();

/* harmony default export */ const favorite_restaurant_search_presenter = (FavoriteRestaurantSearchPresenter);
;// CONCATENATED MODULE: ./src/scripts/views/pages/liked-movies/favorite-restaurant-search-view.js
function favorite_restaurant_search_view_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function favorite_restaurant_search_view_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function favorite_restaurant_search_view_createClass(Constructor, protoProps, staticProps) { if (protoProps) favorite_restaurant_search_view_defineProperties(Constructor.prototype, protoProps); if (staticProps) favorite_restaurant_search_view_defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable class-methods-use-this */


var FavoriteRestaurantSearchView = /*#__PURE__*/function () {
  function FavoriteRestaurantSearchView() {
    favorite_restaurant_search_view_classCallCheck(this, FavoriteRestaurantSearchView);
  }

  favorite_restaurant_search_view_createClass(FavoriteRestaurantSearchView, [{
    key: "getTemplate",
    value: function getTemplate() {
      return createFavoriteSearchboxTemplate;
    }
  }, {
    key: "runWhenUserIsSearching",
    value: function runWhenUserIsSearching(callback) {
      document.getElementById('query').addEventListener('change', function (event) {
        callback(event.target.value);
      });
    }
  }, {
    key: "_getEmptyRestaurantTemplate",
    value: function _getEmptyRestaurantTemplate() {
      return '<div class="restaurant-item__not__found restaurants__not__found">Tidak ada restoran untuk ditampilkan</div>';
    }
  }, {
    key: "showFavoriteRestaurants",
    value: function showFavoriteRestaurants() {
      var restaurants = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var html;

      if (restaurants.length) {
        html = restaurants.reduce(function (carry, restaurant) {
          return carry.concat(createRestaurantItemTemplate(restaurant));
        }, '');
      } else {
        html = this._getEmptyRestaurantTemplate();
      }

      document.getElementById('restaurants').innerHTML = html;
      document.getElementById('restaurants').dispatchEvent(new Event('restaurants:updated'));
    }
  }, {
    key: "showRestaurants",
    value: function showRestaurants(restaurants) {
      this.showFavoriteRestaurants(restaurants);
    }
  }]);

  return FavoriteRestaurantSearchView;
}();

/* harmony default export */ const favorite_restaurant_search_view = (FavoriteRestaurantSearchView);
;// CONCATENATED MODULE: ./src/scripts/views/pages/liked-movies/favorite-restaurant-show-presenter.js
function favorite_restaurant_show_presenter_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function favorite_restaurant_show_presenter_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { favorite_restaurant_show_presenter_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { favorite_restaurant_show_presenter_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function favorite_restaurant_show_presenter_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function favorite_restaurant_show_presenter_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function favorite_restaurant_show_presenter_createClass(Constructor, protoProps, staticProps) { if (protoProps) favorite_restaurant_show_presenter_defineProperties(Constructor.prototype, protoProps); if (staticProps) favorite_restaurant_show_presenter_defineProperties(Constructor, staticProps); return Constructor; }

var FavoriteRestaurantShowPresenter = /*#__PURE__*/function () {
  function FavoriteRestaurantShowPresenter(_ref) {
    var view = _ref.view,
        favoriteRestaurants = _ref.favoriteRestaurants;

    favorite_restaurant_show_presenter_classCallCheck(this, FavoriteRestaurantShowPresenter);

    this._view = view;
    this._favoriteRestaurants = favoriteRestaurants;

    this._showFavoriteRestaurants();
  }

  favorite_restaurant_show_presenter_createClass(FavoriteRestaurantShowPresenter, [{
    key: "_displayRestaurants",
    value: function _displayRestaurants(restaurants) {
      this._view.showFavoriteRestaurants(restaurants);
    }
  }, {
    key: "_showFavoriteRestaurants",
    value: function () {
      var _showFavoriteRestaurants2 = favorite_restaurant_show_presenter_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var restaurants;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._favoriteRestaurants.getAllRestaurants();

              case 2:
                restaurants = _context.sent;

                this._displayRestaurants(restaurants);

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _showFavoriteRestaurants() {
        return _showFavoriteRestaurants2.apply(this, arguments);
      }

      return _showFavoriteRestaurants;
    }()
  }]);

  return FavoriteRestaurantShowPresenter;
}();

/* harmony default export */ const favorite_restaurant_show_presenter = (FavoriteRestaurantShowPresenter);
;// CONCATENATED MODULE: ./src/scripts/views/pages/favourite.js
function favourite_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function favourite_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { favourite_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { favourite_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable no-new */
// import FavouriteRestaurantDB from '../../data/favouriterestaurant-idb';
// import { createRestaurantItemTemplate } from '../templates/template-creator';




var view = new favorite_restaurant_search_view();
var Favourite = {
  render: function render() {
    return favourite_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", view.getTemplate());

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  afterRender: function afterRender() {
    return favourite_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              new favorite_restaurant_show_presenter({
                view: view,
                favoriteRestaurants: favouriterestaurant_idb
              });
              new favorite_restaurant_search_presenter({
                view: view,
                favoriteRestaurants: favouriterestaurant_idb
              });

            case 2:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  }
};
/* harmony default export */ const favourite = (Favourite);
;// CONCATENATED MODULE: ./src/scripts/routes/routes.js



var routes = {
  '/': home,
  '/detail/:id': detail,
  '/favourite': favourite
};
/* harmony default export */ const routes_routes = (routes);
;// CONCATENATED MODULE: ./src/scripts/views/app.js
function app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function app_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { app_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function app_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function app_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function app_createClass(Constructor, protoProps, staticProps) { if (protoProps) app_defineProperties(Constructor.prototype, protoProps); if (staticProps) app_defineProperties(Constructor, staticProps); return Constructor; }





var App = /*#__PURE__*/function () {
  function App(_ref) {
    var button = _ref.button,
        drawer = _ref.drawer,
        content = _ref.content,
        skipLink = _ref.skipLink;

    app_classCallCheck(this, App);

    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._skipLink = skipLink;

    this._initialAppShell();
  }

  app_createClass(App, [{
    key: "_initialAppShell",
    value: function _initialAppShell() {
      drawer_initiator.init({
        button: this._button,
        drawer: this._drawer,
        content: this._content
      });

      this._initialSkipLink();
    }
  }, {
    key: "renderPage",
    value: function () {
      var _renderPage = app_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url, page, skipLinkElem;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = url_parser.parseActiveUrlWithCombiner();
                page = routes_routes[url];
                _context.next = 4;
                return page.render();

              case 4:
                this._content.innerHTML = _context.sent;
                _context.next = 7;
                return page.afterRender();

              case 7:
                skipLinkElem = document.querySelector('.skip-link');
                skipLinkElem.addEventListener('click', function (event) {
                  event.preventDefault();
                  document.querySelector('#mainContent').focus();
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function renderPage() {
        return _renderPage.apply(this, arguments);
      }

      return renderPage;
    }()
  }, {
    key: "_initialSkipLink",
    value: function _initialSkipLink() {
      var _this = this;

      this._skipLink.addEventListener('click', function () {
        _this._content.tabIndex = 0;

        _this._content.focus();
      });
    }
  }]);

  return App;
}();

/* harmony default export */ const app = (App);
;// CONCATENATED MODULE: ./src/scripts/utils/sw-register.js
function sw_register_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function sw_register_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { sw_register_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { sw_register_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var swRegister = /*#__PURE__*/function () {
  var _ref = sw_register_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if ('serviceWorker' in navigator) {
              navigator.serviceWorker.register('../sw.js');
            }

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function swRegister() {
    return _ref.apply(this, arguments);
  };
}();

/* harmony default export */ const sw_register = (swRegister);
;// CONCATENATED MODULE: ./src/scripts/index.js
/* eslint-disable no-unused-expressions */







var scripts_app = new app({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
  skipLink: document.querySelector('#skipLink')
});
window.addEventListener('hashchange', function () {
  scripts_app.renderPage();
});
window.addEventListener('load', function () {
  scripts_app.renderPage();
  sw_register();
});
})();

/******/ })()
;