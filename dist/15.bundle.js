"use strict";
{

/***/ 453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ Deferred)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(935);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The Deferred class composes Promises in a way that allows for them to be
 * resolved or rejected from outside the constructor. In most cases promises
 * should be used directly, but Deferreds can be necessary when the logic to
 * resolve a promise must be separate.
 *
 * @private
 */

var Deferred =
/**
 * Creates a promise and exposes its resolve and reject functions as methods.
 */
function Deferred() {
  var _this = this;

  _classCallCheck(this, Deferred);

  this.promise = new Promise(function (resolve, reject) {
    _this.resolve = resolve;
    _this.reject = reject;
  });
};



/***/ }),

/***/ 676:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ cacheMatchIgnoreParams)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(935);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


function stripParams(fullURL, ignoreParams) {
  var strippedURL = new URL(fullURL);

  var _iterator = _createForOfIteratorHelper(ignoreParams),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var param = _step.value;
      strippedURL.searchParams["delete"](param);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  return strippedURL.href;
}
/**
 * Matches an item in the cache, ignoring specific URL params. This is similar
 * to the `ignoreSearch` option, but it allows you to ignore just specific
 * params (while continuing to match on the others).
 *
 * @private
 * @param {Cache} cache
 * @param {Request} request
 * @param {Object} matchOptions
 * @param {Array<string>} ignoreParams
 * @return {Promise<Response|undefined>}
 */


function cacheMatchIgnoreParams(_x, _x2, _x3, _x4) {
  return _cacheMatchIgnoreParams.apply(this, arguments);
}

function _cacheMatchIgnoreParams() {
  _cacheMatchIgnoreParams = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(cache, request, ignoreParams, matchOptions) {
    var strippedRequestURL, keysOptions, cacheKeys, _iterator2, _step2, cacheKey, strippedCacheKeyURL;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            strippedRequestURL = stripParams(request.url, ignoreParams); // If the request doesn't include any ignored params, match as normal.

            if (!(request.url === strippedRequestURL)) {
              _context.next = 3;
              break;
            }

            return _context.abrupt("return", cache.match(request, matchOptions));

          case 3:
            // Otherwise, match by comparing keys
            keysOptions = Object.assign(Object.assign({}, matchOptions), {
              ignoreSearch: true
            });
            _context.next = 6;
            return cache.keys(request, keysOptions);

          case 6:
            cacheKeys = _context.sent;
            _iterator2 = _createForOfIteratorHelper(cacheKeys);
            _context.prev = 8;

            _iterator2.s();

          case 10:
            if ((_step2 = _iterator2.n()).done) {
              _context.next = 17;
              break;
            }

            cacheKey = _step2.value;
            strippedCacheKeyURL = stripParams(cacheKey.url, ignoreParams);

            if (!(strippedRequestURL === strippedCacheKeyURL)) {
              _context.next = 15;
              break;
            }

            return _context.abrupt("return", cache.match(cacheKey, matchOptions));

          case 15:
            _context.next = 10;
            break;

          case 17:
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](8);

            _iterator2.e(_context.t0);

          case 22:
            _context.prev = 22;

            _iterator2.f();

            return _context.finish(22);

          case 25:
            return _context.abrupt("return");

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[8, 19, 22, 25]]);
  }));
  return _cacheMatchIgnoreParams.apply(this, arguments);
}



/***/ }),

/***/ 673:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Y": () => (/* binding */ executeQuotaErrorCallbacks)
/* harmony export */ });
/* harmony import */ var _private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(833);
/* harmony import */ var _models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(403);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(935);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Runs all of the callback functions, one at a time sequentially, in the order
 * in which they were registered.
 *
 * @memberof module:workbox-core
 * @private
 */

function executeQuotaErrorCallbacks() {
  return _executeQuotaErrorCallbacks.apply(this, arguments);
}

function _executeQuotaErrorCallbacks() {
  _executeQuotaErrorCallbacks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var _iterator, _step, callback;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (false) {}

            _iterator = _createForOfIteratorHelper(_models_quotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_1__/* .quotaErrorCallbacks */ .f);
            _context.prev = 2;

            _iterator.s();

          case 4:
            if ((_step = _iterator.n()).done) {
              _context.next = 11;
              break;
            }

            callback = _step.value;
            _context.next = 8;
            return callback();

          case 8:
            if (false) {}

          case 9:
            _context.next = 4;
            break;

          case 11:
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);

            _iterator.e(_context.t0);

          case 16:
            _context.prev = 16;

            _iterator.f();

            return _context.finish(16);

          case 19:
            if (false) {}

          case 20:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 13, 16, 19]]);
  }));
  return _executeQuotaErrorCallbacks.apply(this, arguments);
}



/***/ }),

/***/ 436:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(935);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Returns a promise that resolves and the passed number of milliseconds.
 * This utility is an async/await-friendly version of `setTimeout`.
 *
 * @param {number} ms
 * @return {Promise}
 * @private
 */

function timeout(ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
}

/***/ }),

/***/ 466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ Strategy)
/* harmony export */ });
/* harmony import */ var workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(782);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(833);
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(257);
/* harmony import */ var _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(791);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(264);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An abstract base class that all other strategy classes must extend from:
 *
 * @memberof module:workbox-strategies
 */

var Strategy = /*#__PURE__*/function () {
  /**
   * Creates a new instance of the strategy and sets all documented option
   * properties as public instance properties.
   *
   * Note: if a custom strategy class extends the base Strategy class and does
   * not need more than these properties, it does not need to define its own
   * constructor.
   *
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to the cache names provided by
   * [workbox-core]{@link module:workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] The
   * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
   * for any `cache.match()` or `cache.put()` calls made by this strategy.
   */
  function Strategy() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Strategy);

    /**
     * Cache name to store and retrieve
     * requests. Defaults to the cache names provided by
     * [workbox-core]{@link module:workbox-core.cacheNames}.
     *
     * @type {string}
     */
    this.cacheName = workbox_core_private_cacheNames_js__WEBPACK_IMPORTED_MODULE_0__/* .cacheNames.getRuntimeName */ .x.getRuntimeName(options.cacheName);
    /**
     * The list
     * [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
     * used by this strategy.
     *
     * @type {Array<Object>}
     */

    this.plugins = options.plugins || [];
    /**
     * Values passed along to the
     * [`init`]{@link https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters}
     * of all fetch() requests made by this strategy.
     *
     * @type {Object}
     */

    this.fetchOptions = options.fetchOptions;
    /**
     * The
     * [`CacheQueryOptions`]{@link https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions}
     * for any `cache.match()` or `cache.put()` calls made by this strategy.
     *
     * @type {Object}
     */

    this.matchOptions = options.matchOptions;
  }
  /**
   * Perform a request strategy and returns a `Promise` that will resolve with
   * a `Response`, invoking all relevant plugin callbacks.
   *
   * When a strategy instance is registered with a Workbox
   * [route]{@link module:workbox-routing.Route}, this method is automatically
   * called when the route matches.
   *
   * Alternatively, this method can be used in a standalone `FetchEvent`
   * listener by passing it to `event.respondWith()`.
   *
   * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
   *     properties listed below.
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   */


  _createClass(Strategy, [{
    key: "handle",
    value: function handle(options) {
      var _this$handleAll = this.handleAll(options),
          _this$handleAll2 = _slicedToArray(_this$handleAll, 1),
          responseDone = _this$handleAll2[0];

      return responseDone;
    }
    /**
     * Similar to [`handle()`]{@link module:workbox-strategies.Strategy~handle}, but
     * instead of just returning a `Promise` that resolves to a `Response` it
     * it will return an tuple of [response, done] promises, where the former
     * (`response`) is equivalent to what `handle()` returns, and the latter is a
     * Promise that will resolve once any promises that were added to
     * `event.waitUntil()` as part of performing the strategy have completed.
     *
     * You can await the `done` promise to ensure any extra work performed by
     * the strategy (usually caching responses) completes successfully.
     *
     * @param {FetchEvent|Object} options A `FetchEvent` or an object with the
     *     properties listed below.
     * @param {Request|string} options.request A request to run this strategy for.
     * @param {ExtendableEvent} options.event The event associated with the
     *     request.
     * @param {URL} [options.url]
     * @param {*} [options.params]
     * @return {Array<Promise>} A tuple of [response, done]
     *     promises that can be used to determine when the response resolves as
     *     well as when the handler has completed all its work.
     */

  }, {
    key: "handleAll",
    value: function handleAll(options) {
      // Allow for flexible options to be passed.
      if (options instanceof FetchEvent) {
        options = {
          event: options,
          request: options.request
        };
      }

      var event = options.event;
      var request = typeof options.request === 'string' ? new Request(options.request) : options.request;
      var params = 'params' in options ? options.params : undefined;
      var handler = new _StrategyHandler_js__WEBPACK_IMPORTED_MODULE_4__/* .StrategyHandler */ .G(this, {
        event: event,
        request: request,
        params: params
      });

      var responseDone = this._getResponse(handler, request, event);

      var handlerDone = this._awaitComplete(responseDone, handler, request, event); // Return an array of promises, suitable for use with Promise.all().


      return [responseDone, handlerDone];
    }
  }, {
    key: "_getResponse",
    value: function () {
      var _getResponse2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(handler, request, event) {
        var response, _iterator, _step, callback, _iterator2, _step2, _callback;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return handler.runCallbacks('handlerWillStart', {
                  event: event,
                  request: request
                });

              case 2:
                response = undefined;
                _context.prev = 3;
                _context.next = 6;
                return this._handle(request, handler);

              case 6:
                response = _context.sent;

                if (!(!response || response.type === 'error')) {
                  _context.next = 9;
                  break;
                }

                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__/* .WorkboxError */ .V('no-response', {
                  url: request.url
                });

              case 9:
                _context.next = 39;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);

                if (!(_context.t0 instanceof Error)) {
                  _context.next = 34;
                  break;
                }

                _iterator = _createForOfIteratorHelper(handler.iterateCallbacks('handlerDidError'));
                _context.prev = 15;

                _iterator.s();

              case 17:
                if ((_step = _iterator.n()).done) {
                  _context.next = 26;
                  break;
                }

                callback = _step.value;
                _context.next = 21;
                return callback({
                  error: _context.t0,
                  event: event,
                  request: request
                });

              case 21:
                response = _context.sent;

                if (!response) {
                  _context.next = 24;
                  break;
                }

                return _context.abrupt("break", 26);

              case 24:
                _context.next = 17;
                break;

              case 26:
                _context.next = 31;
                break;

              case 28:
                _context.prev = 28;
                _context.t1 = _context["catch"](15);

                _iterator.e(_context.t1);

              case 31:
                _context.prev = 31;

                _iterator.f();

                return _context.finish(31);

              case 34:
                if (response) {
                  _context.next = 38;
                  break;
                }

                throw _context.t0;

              case 38:
                if (false) {}

              case 39:
                _iterator2 = _createForOfIteratorHelper(handler.iterateCallbacks('handlerWillRespond'));
                _context.prev = 40;

                _iterator2.s();

              case 42:
                if ((_step2 = _iterator2.n()).done) {
                  _context.next = 49;
                  break;
                }

                _callback = _step2.value;
                _context.next = 46;
                return _callback({
                  event: event,
                  request: request,
                  response: response
                });

              case 46:
                response = _context.sent;

              case 47:
                _context.next = 42;
                break;

              case 49:
                _context.next = 54;
                break;

              case 51:
                _context.prev = 51;
                _context.t2 = _context["catch"](40);

                _iterator2.e(_context.t2);

              case 54:
                _context.prev = 54;

                _iterator2.f();

                return _context.finish(54);

              case 57:
                return _context.abrupt("return", response);

              case 58:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 11], [15, 28, 31, 34], [40, 51, 54, 57]]);
      }));

      function _getResponse(_x, _x2, _x3) {
        return _getResponse2.apply(this, arguments);
      }

      return _getResponse;
    }()
  }, {
    key: "_awaitComplete",
    value: function () {
      var _awaitComplete2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(responseDone, handler, request, event) {
        var response, error;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return responseDone;

              case 3:
                response = _context2.sent;
                _context2.next = 8;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](0);

              case 8:
                _context2.prev = 8;
                _context2.next = 11;
                return handler.runCallbacks('handlerDidRespond', {
                  event: event,
                  request: request,
                  response: response
                });

              case 11:
                _context2.next = 13;
                return handler.doneWaiting();

              case 13:
                _context2.next = 18;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t1 = _context2["catch"](8);

                if (_context2.t1 instanceof Error) {
                  error = _context2.t1;
                }

              case 18:
                _context2.next = 20;
                return handler.runCallbacks('handlerDidComplete', {
                  event: event,
                  request: request,
                  response: response,
                  error: error
                });

              case 20:
                handler.destroy();

                if (!error) {
                  _context2.next = 23;
                  break;
                }

                throw error;

              case 23:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 6], [8, 15]]);
      }));

      function _awaitComplete(_x4, _x5, _x6, _x7) {
        return _awaitComplete2.apply(this, arguments);
      }

      return _awaitComplete;
    }()
  }]);

  return Strategy;
}();


/**
 * Classes extending the `Strategy` based class should implement this method,
 * and leverage the [`handler`]{@link module:workbox-strategies.StrategyHandler}
 * arg to perform all fetching and cache logic, which will ensure all relevant
 * cache, cache options, fetch options and plugins are used (per the current
 * strategy instance).
 *
 * @name _handle
 * @instance
 * @abstract
 * @function
 * @param {Request} request
 * @param {module:workbox-strategies.StrategyHandler} handler
 * @return {Promise<Response>}
 *
 * @memberof module:workbox-strategies.Strategy
 */

/***/ }),

/***/ 791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ StrategyHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
/* harmony import */ var workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(676);
/* harmony import */ var workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(453);
/* harmony import */ var workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(673);
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(257);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(833);
/* harmony import */ var workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(436);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(609);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(264);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_8__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
  Copyright 2020 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/










function toRequest(input) {
  return typeof input === 'string' ? new Request(input) : input;
}
/**
 * A class created every time a Strategy instance instance calls
 * [handle()]{@link module:workbox-strategies.Strategy~handle} or
 * [handleAll()]{@link module:workbox-strategies.Strategy~handleAll} that wraps all fetch and
 * cache actions around plugin callbacks and keeps track of when the strategy
 * is "done" (i.e. all added `event.waitUntil()` promises have resolved).
 *
 * @memberof module:workbox-strategies
 */


var StrategyHandler = /*#__PURE__*/function () {
  /**
   * Creates a new instance associated with the passed strategy and event
   * that's handling the request.
   *
   * The constructor also initializes the state that will be passed to each of
   * the plugins handling this request.
   *
   * @param {module:workbox-strategies.Strategy} strategy
   * @param {Object} options
   * @param {Request|string} options.request A request to run this strategy for.
   * @param {ExtendableEvent} options.event The event associated with the
   *     request.
   * @param {URL} [options.url]
   * @param {*} [options.params]
   *     [match callback]{@link module:workbox-routing~matchCallback},
   *     (if applicable).
   */
  function StrategyHandler(strategy, options) {
    _classCallCheck(this, StrategyHandler);

    this._cacheKeys = {};
    /**
     * The request the strategy is performing (passed to the strategy's
     * `handle()` or `handleAll()` method).
     * @name request
     * @instance
     * @type {Request}
     * @memberof module:workbox-strategies.StrategyHandler
     */

    /**
     * The event associated with this request.
     * @name event
     * @instance
     * @type {ExtendableEvent}
     * @memberof module:workbox-strategies.StrategyHandler
     */

    /**
     * A `URL` instance of `request.url` (if passed to the strategy's
     * `handle()` or `handleAll()` method).
     * Note: the `url` param will be present if the strategy was invoked
     * from a workbox `Route` object.
     * @name url
     * @instance
     * @type {URL|undefined}
     * @memberof module:workbox-strategies.StrategyHandler
     */

    /**
     * A `param` value (if passed to the strategy's
     * `handle()` or `handleAll()` method).
     * Note: the `param` param will be present if the strategy was invoked
     * from a workbox `Route` object and the
     * [match callback]{@link module:workbox-routing~matchCallback} returned
     * a truthy value (it will be that value).
     * @name params
     * @instance
     * @type {*|undefined}
     * @memberof module:workbox-strategies.StrategyHandler
     */

    if (false) {}

    Object.assign(this, options);
    this.event = options.event;
    this._strategy = strategy;
    this._handlerDeferred = new workbox_core_private_Deferred_js__WEBPACK_IMPORTED_MODULE_2__/* .Deferred */ .B();
    this._extendLifetimePromises = []; // Copy the plugins list (since it's mutable on the strategy),
    // so any mutations don't affect this handler instance.

    this._plugins = _toConsumableArray(strategy.plugins);
    this._pluginStateMap = new Map();

    var _iterator = _createForOfIteratorHelper(this._plugins),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var plugin = _step.value;

        this._pluginStateMap.set(plugin, {});
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }

    this.event.waitUntil(this._handlerDeferred.promise);
  }
  /**
   * Fetches a given request (and invokes any applicable plugin callback
   * methods) using the `fetchOptions` (for non-navigation requests) and
   * `plugins` defined on the `Strategy` object.
   *
   * The following plugin lifecycle methods are invoked when using this method:
   * - `requestWillFetch()`
   * - `fetchDidSucceed()`
   * - `fetchDidFail()`
   *
   * @param {Request|string} input The URL or request to fetch.
   * @return {Promise<Response>}
   */


  _createClass(StrategyHandler, [{
    key: "fetch",
    value: function (_fetch) {
      function fetch(_x) {
        return _fetch.apply(this, arguments);
      }

      fetch.toString = function () {
        return _fetch.toString();
      };

      return fetch;
    }(
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(input) {
        var event, request, possiblePreloadResponse, originalRequest, _iterator2, _step2, cb, pluginFilteredRequest, fetchResponse, _iterator3, _step3, callback;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                event = this.event;
                request = toRequest(input);

                if (!(request.mode === 'navigate' && event instanceof FetchEvent && event.preloadResponse)) {
                  _context.next = 9;
                  break;
                }

                _context.next = 5;
                return event.preloadResponse;

              case 5:
                possiblePreloadResponse = _context.sent;

                if (!possiblePreloadResponse) {
                  _context.next = 9;
                  break;
                }

                if (false) {}

                return _context.abrupt("return", possiblePreloadResponse);

              case 9:
                // If there is a fetchDidFail plugin, we need to save a clone of the
                // original request before it's either modified by a requestWillFetch
                // plugin or before the original request's body is consumed via fetch().
                originalRequest = this.hasCallback('fetchDidFail') ? request.clone() : null;
                _context.prev = 10;
                _iterator2 = _createForOfIteratorHelper(this.iterateCallbacks('requestWillFetch'));
                _context.prev = 12;

                _iterator2.s();

              case 14:
                if ((_step2 = _iterator2.n()).done) {
                  _context.next = 21;
                  break;
                }

                cb = _step2.value;
                _context.next = 18;
                return cb({
                  request: request.clone(),
                  event: event
                });

              case 18:
                request = _context.sent;

              case 19:
                _context.next = 14;
                break;

              case 21:
                _context.next = 26;
                break;

              case 23:
                _context.prev = 23;
                _context.t0 = _context["catch"](12);

                _iterator2.e(_context.t0);

              case 26:
                _context.prev = 26;

                _iterator2.f();

                return _context.finish(26);

              case 29:
                _context.next = 35;
                break;

              case 31:
                _context.prev = 31;
                _context.t1 = _context["catch"](10);

                if (!(_context.t1 instanceof Error)) {
                  _context.next = 35;
                  break;
                }

                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__/* .WorkboxError */ .V('plugin-error-request-will-fetch', {
                  thrownErrorMessage: _context.t1.message
                });

              case 35:
                // The request can be altered by plugins with `requestWillFetch` making
                // the original request (most likely from a `fetch` event) different
                // from the Request we make. Pass both to `fetchDidFail` to aid debugging.
                pluginFilteredRequest = request.clone();
                _context.prev = 36;
                _context.next = 39;
                return fetch(request, request.mode === 'navigate' ? undefined : this._strategy.fetchOptions);

              case 39:
                fetchResponse = _context.sent;

                if (false) {}

                _iterator3 = _createForOfIteratorHelper(this.iterateCallbacks('fetchDidSucceed'));
                _context.prev = 42;

                _iterator3.s();

              case 44:
                if ((_step3 = _iterator3.n()).done) {
                  _context.next = 51;
                  break;
                }

                callback = _step3.value;
                _context.next = 48;
                return callback({
                  event: event,
                  request: pluginFilteredRequest,
                  response: fetchResponse
                });

              case 48:
                fetchResponse = _context.sent;

              case 49:
                _context.next = 44;
                break;

              case 51:
                _context.next = 56;
                break;

              case 53:
                _context.prev = 53;
                _context.t2 = _context["catch"](42);

                _iterator3.e(_context.t2);

              case 56:
                _context.prev = 56;

                _iterator3.f();

                return _context.finish(56);

              case 59:
                return _context.abrupt("return", fetchResponse);

              case 62:
                _context.prev = 62;
                _context.t3 = _context["catch"](36);

                if (false) {} // `originalRequest` will only exist if a `fetchDidFail` callback
                // is being used (see above).


                if (!originalRequest) {
                  _context.next = 68;
                  break;
                }

                _context.next = 68;
                return this.runCallbacks('fetchDidFail', {
                  error: _context.t3,
                  event: event,
                  originalRequest: originalRequest.clone(),
                  request: pluginFilteredRequest.clone()
                });

              case 68:
                throw _context.t3;

              case 69:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[10, 31], [12, 23, 26, 29], [36, 62], [42, 53, 56, 59]]);
      }));

      return function (_x2) {
        return _ref.apply(this, arguments);
      };
    }()
    /**
     * Calls `this.fetch()` and (in the background) runs `this.cachePut()` on
     * the response generated by `this.fetch()`.
     *
     * The call to `this.cachePut()` automatically invokes `this.waitUntil()`,
     * so you do not have to manually call `waitUntil()` on the event.
     *
     * @param {Request|string} input The request or URL to fetch and cache.
     * @return {Promise<Response>}
     */
    )
  }, {
    key: "fetchAndCachePut",
    value: function () {
      var _fetchAndCachePut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(input) {
        var response, responseClone;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.fetch(input);

              case 2:
                response = _context2.sent;
                responseClone = response.clone();
                void this.waitUntil(this.cachePut(input, responseClone));
                return _context2.abrupt("return", response);

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function fetchAndCachePut(_x3) {
        return _fetchAndCachePut.apply(this, arguments);
      }

      return fetchAndCachePut;
    }()
    /**
     * Matches a request from the cache (and invokes any applicable plugin
     * callback methods) using the `cacheName`, `matchOptions`, and `plugins`
     * defined on the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cachedResponseWillByUsed()
     *
     * @param {Request|string} key The Request or URL to use as the cache key.
     * @return {Promise<Response|undefined>} A matching response, if found.
     */

  }, {
    key: "cacheMatch",
    value: function () {
      var _cacheMatch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(key) {
        var request, cachedResponse, _this$_strategy, cacheName, matchOptions, effectiveRequest, multiMatchOptions, _iterator4, _step4, callback;

        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                request = toRequest(key);
                _this$_strategy = this._strategy, cacheName = _this$_strategy.cacheName, matchOptions = _this$_strategy.matchOptions;
                _context3.next = 4;
                return this.getCacheKey(request, 'read');

              case 4:
                effectiveRequest = _context3.sent;
                multiMatchOptions = Object.assign(Object.assign({}, matchOptions), {
                  cacheName: cacheName
                });
                _context3.next = 8;
                return caches.match(effectiveRequest, multiMatchOptions);

              case 8:
                cachedResponse = _context3.sent;

                if (false) {}

                _iterator4 = _createForOfIteratorHelper(this.iterateCallbacks('cachedResponseWillBeUsed'));
                _context3.prev = 11;

                _iterator4.s();

              case 13:
                if ((_step4 = _iterator4.n()).done) {
                  _context3.next = 23;
                  break;
                }

                callback = _step4.value;
                _context3.next = 17;
                return callback({
                  cacheName: cacheName,
                  matchOptions: matchOptions,
                  cachedResponse: cachedResponse,
                  request: effectiveRequest,
                  event: this.event
                });

              case 17:
                _context3.t0 = _context3.sent;

                if (_context3.t0) {
                  _context3.next = 20;
                  break;
                }

                _context3.t0 = undefined;

              case 20:
                cachedResponse = _context3.t0;

              case 21:
                _context3.next = 13;
                break;

              case 23:
                _context3.next = 28;
                break;

              case 25:
                _context3.prev = 25;
                _context3.t1 = _context3["catch"](11);

                _iterator4.e(_context3.t1);

              case 28:
                _context3.prev = 28;

                _iterator4.f();

                return _context3.finish(28);

              case 31:
                return _context3.abrupt("return", cachedResponse);

              case 32:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[11, 25, 28, 31]]);
      }));

      function cacheMatch(_x4) {
        return _cacheMatch.apply(this, arguments);
      }

      return cacheMatch;
    }()
    /**
     * Puts a request/response pair in the cache (and invokes any applicable
     * plugin callback methods) using the `cacheName` and `plugins` defined on
     * the strategy object.
     *
     * The following plugin lifecycle methods are invoked when using this method:
     * - cacheKeyWillByUsed()
     * - cacheWillUpdate()
     * - cacheDidUpdate()
     *
     * @param {Request|string} key The request or URL to use as the cache key.
     * @param {Response} response The response to cache.
     * @return {Promise<boolean>} `false` if a cacheWillUpdate caused the response
     * not be cached, and `true` otherwise.
     */

  }, {
    key: "cachePut",
    value: function () {
      var _cachePut = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(key, response) {
        var request, effectiveRequest, vary, responseToCache, _this$_strategy2, cacheName, matchOptions, cache, hasCacheUpdateCallback, oldResponse, _iterator5, _step5, callback;

        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                request = toRequest(key); // Run in the next task to avoid blocking other cache reads.
                // https://github.com/w3c/ServiceWorker/issues/1397

                _context4.next = 3;
                return (0,workbox_core_private_timeout_js__WEBPACK_IMPORTED_MODULE_6__/* .timeout */ .V)(0);

              case 3:
                _context4.next = 5;
                return this.getCacheKey(request, 'write');

              case 5:
                effectiveRequest = _context4.sent;

                if (true) {
                  _context4.next = 11;
                  break;
                }

                if (!(effectiveRequest.method && effectiveRequest.method !== 'GET')) {
                  _context4.next = 9;
                  break;
                }

                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__/* .WorkboxError */ .V('attempt-to-cache-non-get-request', {
                  url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__/* .getFriendlyURL */ .C)(effectiveRequest.url),
                  method: effectiveRequest.method
                });

              case 9:
                // See https://github.com/GoogleChrome/workbox/issues/2818
                vary = response.headers.get('Vary');

                if (vary) {
                  workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_5__/* .logger.debug */ .k.debug("The response for ".concat((0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__/* .getFriendlyURL */ .C)(effectiveRequest.url), " ") + "has a 'Vary: ".concat(vary, "' header. ") + "Consider setting the {ignoreVary: true} option on your strategy " + "to ensure cache matching and deletion works as expected.");
                }

              case 11:
                if (response) {
                  _context4.next = 14;
                  break;
                }

                if (false) {}

                throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_7__/* .WorkboxError */ .V('cache-put-with-no-response', {
                  url: (0,workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_4__/* .getFriendlyURL */ .C)(effectiveRequest.url)
                });

              case 14:
                _context4.next = 16;
                return this._ensureResponseSafeToCache(response);

              case 16:
                responseToCache = _context4.sent;

                if (responseToCache) {
                  _context4.next = 20;
                  break;
                }

                if (false) {}

                return _context4.abrupt("return", false);

              case 20:
                _this$_strategy2 = this._strategy, cacheName = _this$_strategy2.cacheName, matchOptions = _this$_strategy2.matchOptions;
                _context4.next = 23;
                return self.caches.open(cacheName);

              case 23:
                cache = _context4.sent;
                hasCacheUpdateCallback = this.hasCallback('cacheDidUpdate');

                if (!hasCacheUpdateCallback) {
                  _context4.next = 31;
                  break;
                }

                _context4.next = 28;
                return (0,workbox_core_private_cacheMatchIgnoreParams_js__WEBPACK_IMPORTED_MODULE_1__/* .cacheMatchIgnoreParams */ .F)( // TODO(philipwalton): the `__WB_REVISION__` param is a precaching
                // feature. Consider into ways to only add this behavior if using
                // precaching.
                cache, effectiveRequest.clone(), ['__WB_REVISION__'], matchOptions);

              case 28:
                _context4.t0 = _context4.sent;
                _context4.next = 32;
                break;

              case 31:
                _context4.t0 = null;

              case 32:
                oldResponse = _context4.t0;

                if (false) {}

                _context4.prev = 34;
                _context4.next = 37;
                return cache.put(effectiveRequest, hasCacheUpdateCallback ? responseToCache.clone() : responseToCache);

              case 37:
                _context4.next = 46;
                break;

              case 39:
                _context4.prev = 39;
                _context4.t1 = _context4["catch"](34);

                if (!(_context4.t1 instanceof Error)) {
                  _context4.next = 46;
                  break;
                }

                if (!(_context4.t1.name === 'QuotaExceededError')) {
                  _context4.next = 45;
                  break;
                }

                _context4.next = 45;
                return (0,workbox_core_private_executeQuotaErrorCallbacks_js__WEBPACK_IMPORTED_MODULE_3__/* .executeQuotaErrorCallbacks */ .Y)();

              case 45:
                throw _context4.t1;

              case 46:
                _iterator5 = _createForOfIteratorHelper(this.iterateCallbacks('cacheDidUpdate'));
                _context4.prev = 47;

                _iterator5.s();

              case 49:
                if ((_step5 = _iterator5.n()).done) {
                  _context4.next = 55;
                  break;
                }

                callback = _step5.value;
                _context4.next = 53;
                return callback({
                  cacheName: cacheName,
                  oldResponse: oldResponse,
                  newResponse: responseToCache.clone(),
                  request: effectiveRequest,
                  event: this.event
                });

              case 53:
                _context4.next = 49;
                break;

              case 55:
                _context4.next = 60;
                break;

              case 57:
                _context4.prev = 57;
                _context4.t2 = _context4["catch"](47);

                _iterator5.e(_context4.t2);

              case 60:
                _context4.prev = 60;

                _iterator5.f();

                return _context4.finish(60);

              case 63:
                return _context4.abrupt("return", true);

              case 64:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[34, 39], [47, 57, 60, 63]]);
      }));

      function cachePut(_x5, _x6) {
        return _cachePut.apply(this, arguments);
      }

      return cachePut;
    }()
    /**
     * Checks the list of plugins for the `cacheKeyWillBeUsed` callback, and
     * executes any of those callbacks found in sequence. The final `Request`
     * object returned by the last plugin is treated as the cache key for cache
     * reads and/or writes. If no `cacheKeyWillBeUsed` plugin callbacks have
     * been registered, the passed request is returned unmodified
     *
     * @param {Request} request
     * @param {string} mode
     * @return {Promise<Request>}
     */

  }, {
    key: "getCacheKey",
    value: function () {
      var _getCacheKey = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(request, mode) {
        var key, effectiveRequest, _iterator6, _step6, callback;

        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                key = "".concat(request.url, " | ").concat(mode);

                if (this._cacheKeys[key]) {
                  _context5.next = 24;
                  break;
                }

                effectiveRequest = request;
                _iterator6 = _createForOfIteratorHelper(this.iterateCallbacks('cacheKeyWillBeUsed'));
                _context5.prev = 4;

                _iterator6.s();

              case 6:
                if ((_step6 = _iterator6.n()).done) {
                  _context5.next = 15;
                  break;
                }

                callback = _step6.value;
                _context5.t0 = toRequest;
                _context5.next = 11;
                return callback({
                  mode: mode,
                  request: effectiveRequest,
                  event: this.event,
                  // params has a type any can't change right now.
                  params: this.params // eslint-disable-line

                });

              case 11:
                _context5.t1 = _context5.sent;
                effectiveRequest = (0, _context5.t0)(_context5.t1);

              case 13:
                _context5.next = 6;
                break;

              case 15:
                _context5.next = 20;
                break;

              case 17:
                _context5.prev = 17;
                _context5.t2 = _context5["catch"](4);

                _iterator6.e(_context5.t2);

              case 20:
                _context5.prev = 20;

                _iterator6.f();

                return _context5.finish(20);

              case 23:
                this._cacheKeys[key] = effectiveRequest;

              case 24:
                return _context5.abrupt("return", this._cacheKeys[key]);

              case 25:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this, [[4, 17, 20, 23]]);
      }));

      function getCacheKey(_x7, _x8) {
        return _getCacheKey.apply(this, arguments);
      }

      return getCacheKey;
    }()
    /**
     * Returns true if the strategy has at least one plugin with the given
     * callback.
     *
     * @param {string} name The name of the callback to check for.
     * @return {boolean}
     */

  }, {
    key: "hasCallback",
    value: function hasCallback(name) {
      var _iterator7 = _createForOfIteratorHelper(this._strategy.plugins),
          _step7;

      try {
        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          var plugin = _step7.value;

          if (name in plugin) {
            return true;
          }
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }

      return false;
    }
    /**
     * Runs all plugin callbacks matching the given name, in order, passing the
     * given param object (merged ith the current plugin state) as the only
     * argument.
     *
     * Note: since this method runs all plugins, it's not suitable for cases
     * where the return value of a callback needs to be applied prior to calling
     * the next callback. See
     * [`iterateCallbacks()`]{@link module:workbox-strategies.StrategyHandler#iterateCallbacks}
     * below for how to handle that case.
     *
     * @param {string} name The name of the callback to run within each plugin.
     * @param {Object} param The object to pass as the first (and only) param
     *     when executing each callback. This object will be merged with the
     *     current plugin state prior to callback execution.
     */

  }, {
    key: "runCallbacks",
    value: function () {
      var _runCallbacks = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(name, param) {
        var _iterator8, _step8, callback;

        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _iterator8 = _createForOfIteratorHelper(this.iterateCallbacks(name));
                _context6.prev = 1;

                _iterator8.s();

              case 3:
                if ((_step8 = _iterator8.n()).done) {
                  _context6.next = 9;
                  break;
                }

                callback = _step8.value;
                _context6.next = 7;
                return callback(param);

              case 7:
                _context6.next = 3;
                break;

              case 9:
                _context6.next = 14;
                break;

              case 11:
                _context6.prev = 11;
                _context6.t0 = _context6["catch"](1);

                _iterator8.e(_context6.t0);

              case 14:
                _context6.prev = 14;

                _iterator8.f();

                return _context6.finish(14);

              case 17:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this, [[1, 11, 14, 17]]);
      }));

      function runCallbacks(_x9, _x10) {
        return _runCallbacks.apply(this, arguments);
      }

      return runCallbacks;
    }()
    /**
     * Accepts a callback and returns an iterable of matching plugin callbacks,
     * where each callback is wrapped with the current handler state (i.e. when
     * you call each callback, whatever object parameter you pass it will
     * be merged with the plugin's current state).
     *
     * @param {string} name The name fo the callback to run
     * @return {Array<Function>}
     */

  }, {
    key: "iterateCallbacks",
    value:
    /*#__PURE__*/
    regeneratorRuntime.mark(function iterateCallbacks(name) {
      var _this = this;

      var _iterator9, _step9, _loop;

      return regeneratorRuntime.wrap(function iterateCallbacks$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _iterator9 = _createForOfIteratorHelper(this._strategy.plugins);
              _context8.prev = 1;
              _loop = /*#__PURE__*/regeneratorRuntime.mark(function _loop() {
                var plugin, state, statefulCallback;
                return regeneratorRuntime.wrap(function _loop$(_context7) {
                  while (1) {
                    switch (_context7.prev = _context7.next) {
                      case 0:
                        plugin = _step9.value;

                        if (!(typeof plugin[name] === 'function')) {
                          _context7.next = 6;
                          break;
                        }

                        state = _this._pluginStateMap.get(plugin);

                        statefulCallback = function statefulCallback(param) {
                          var statefulParam = Object.assign(Object.assign({}, param), {
                            state: state
                          }); // TODO(philipwalton): not sure why `any` is needed. It seems like
                          // this should work with `as WorkboxPluginCallbackParam[C]`.

                          return plugin[name](statefulParam);
                        };

                        _context7.next = 6;
                        return statefulCallback;

                      case 6:
                      case "end":
                        return _context7.stop();
                    }
                  }
                }, _loop);
              });

              _iterator9.s();

            case 4:
              if ((_step9 = _iterator9.n()).done) {
                _context8.next = 8;
                break;
              }

              return _context8.delegateYield(_loop(), "t0", 6);

            case 6:
              _context8.next = 4;
              break;

            case 8:
              _context8.next = 13;
              break;

            case 10:
              _context8.prev = 10;
              _context8.t1 = _context8["catch"](1);

              _iterator9.e(_context8.t1);

            case 13:
              _context8.prev = 13;

              _iterator9.f();

              return _context8.finish(13);

            case 16:
            case "end":
              return _context8.stop();
          }
        }
      }, iterateCallbacks, this, [[1, 10, 13, 16]]);
    })
    /**
     * Adds a promise to the
     * [extend lifetime promises]{@link https://w3c.github.io/ServiceWorker/#extendableevent-extend-lifetime-promises}
     * of the event event associated with the request being handled (usually a
     * `FetchEvent`).
     *
     * Note: you can await
     * [`doneWaiting()`]{@link module:workbox-strategies.StrategyHandler~doneWaiting}
     * to know when all added promises have settled.
     *
     * @param {Promise} promise A promise to add to the extend lifetime promises
     *     of the event that triggered the request.
     */

  }, {
    key: "waitUntil",
    value: function waitUntil(promise) {
      this._extendLifetimePromises.push(promise);

      return promise;
    }
    /**
     * Returns a promise that resolves once all promises passed to
     * [`waitUntil()`]{@link module:workbox-strategies.StrategyHandler~waitUntil}
     * have settled.
     *
     * Note: any work done after `doneWaiting()` settles should be manually
     * passed to an event's `waitUntil()` method (not this handler's
     * `waitUntil()` method), otherwise the service worker thread my be killed
     * prior to your work completing.
     */

  }, {
    key: "doneWaiting",
    value: function () {
      var _doneWaiting = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
        var promise;
        return regeneratorRuntime.wrap(function _callee7$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                if (!(promise = this._extendLifetimePromises.shift())) {
                  _context9.next = 5;
                  break;
                }

                _context9.next = 3;
                return promise;

              case 3:
                _context9.next = 0;
                break;

              case 5:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee7, this);
      }));

      function doneWaiting() {
        return _doneWaiting.apply(this, arguments);
      }

      return doneWaiting;
    }()
    /**
     * Stops running the strategy and immediately resolves any pending
     * `waitUntil()` promises.
     */

  }, {
    key: "destroy",
    value: function destroy() {
      this._handlerDeferred.resolve(null);
    }
    /**
     * This method will call cacheWillUpdate on the available plugins (or use
     * status === 200) to determine if the Response is safe and valid to cache.
     *
     * @param {Request} options.request
     * @param {Response} options.response
     * @return {Promise<Response|undefined>}
     *
     * @private
     */

  }, {
    key: "_ensureResponseSafeToCache",
    value: function () {
      var _ensureResponseSafeToCache2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(response) {
        var responseToCache, pluginsUsed, _iterator10, _step10, callback;

        return regeneratorRuntime.wrap(function _callee8$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                responseToCache = response;
                pluginsUsed = false;
                _iterator10 = _createForOfIteratorHelper(this.iterateCallbacks('cacheWillUpdate'));
                _context10.prev = 3;

                _iterator10.s();

              case 5:
                if ((_step10 = _iterator10.n()).done) {
                  _context10.next = 18;
                  break;
                }

                callback = _step10.value;
                _context10.next = 9;
                return callback({
                  request: this.request,
                  response: responseToCache,
                  event: this.event
                });

              case 9:
                _context10.t0 = _context10.sent;

                if (_context10.t0) {
                  _context10.next = 12;
                  break;
                }

                _context10.t0 = undefined;

              case 12:
                responseToCache = _context10.t0;
                pluginsUsed = true;

                if (responseToCache) {
                  _context10.next = 16;
                  break;
                }

                return _context10.abrupt("break", 18);

              case 16:
                _context10.next = 5;
                break;

              case 18:
                _context10.next = 23;
                break;

              case 20:
                _context10.prev = 20;
                _context10.t1 = _context10["catch"](3);

                _iterator10.e(_context10.t1);

              case 23:
                _context10.prev = 23;

                _iterator10.f();

                return _context10.finish(23);

              case 26:
                if (!pluginsUsed) {
                  if (responseToCache && responseToCache.status !== 200) {
                    responseToCache = undefined;
                  }

                  if (false) {}
                }

                return _context10.abrupt("return", responseToCache);

              case 28:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee8, this, [[3, 20, 23, 26]]);
      }));

      function _ensureResponseSafeToCache(_x11) {
        return _ensureResponseSafeToCache2.apply(this, arguments);
      }

      return _ensureResponseSafeToCache;
    }()
  }]);

  return StrategyHandler;
}();



/***/ }),

/***/ 264:
/***/ (() => {

 // @ts-ignore

try {
  self['workbox:strategies:6.4.0'] && _();
} catch (e) {}

/***/ }),

/***/ 15:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "CacheFirst": () => (/* reexport */ CacheFirst),
  "CacheOnly": () => (/* reexport */ CacheOnly),
  "NetworkFirst": () => (/* reexport */ NetworkFirst),
  "NetworkOnly": () => (/* reexport */ NetworkOnly),
  "StaleWhileRevalidate": () => (/* reexport */ StaleWhileRevalidate),
  "Strategy": () => (/* reexport */ Strategy/* Strategy */._),
  "StrategyHandler": () => (/* reexport */ StrategyHandler/* StrategyHandler */.G)
});

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/assert.js
var assert = __webpack_require__(511);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/logger.js
var logger = __webpack_require__(833);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/WorkboxError.js + 2 modules
var WorkboxError = __webpack_require__(609);
// EXTERNAL MODULE: ./node_modules/workbox-strategies/Strategy.js
var Strategy = __webpack_require__(466);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/getFriendlyURL.js
var getFriendlyURL = __webpack_require__(257);
// EXTERNAL MODULE: ./node_modules/workbox-strategies/_version.js
var _version = __webpack_require__(264);
;// CONCATENATED MODULE: ./node_modules/workbox-strategies/utils/messages.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



var messages = {
  strategyStart: function strategyStart(strategyName, request) {
    return "Using ".concat(strategyName, " to respond to '").concat((0,getFriendlyURL/* getFriendlyURL */.C)(request.url), "'");
  },
  printFinalResponse: function printFinalResponse(response) {
    if (response) {
      logger/* logger.groupCollapsed */.k.groupCollapsed("View the final response here.");
      logger/* logger.log */.k.log(response || '[No response returned]');
      logger/* logger.groupEnd */.k.groupEnd();
    }
  }
};
;// CONCATENATED MODULE: ./node_modules/workbox-strategies/CacheFirst.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An implementation of a [cache-first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-falling-back-to-network}
 * request strategy.
 *
 * A cache first strategy is useful for assets that have been revisioned,
 * such as URLs like `/styles/example.a8f5f1.css`, since they
 * can be cached for long periods of time.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */

var CacheFirst = /*#__PURE__*/function (_Strategy) {
  _inherits(CacheFirst, _Strategy);

  var _super = _createSuper(CacheFirst);

  function CacheFirst() {
    _classCallCheck(this, CacheFirst);

    return _super.apply(this, arguments);
  }

  _createClass(CacheFirst, [{
    key: "_handle",
    value:
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    function () {
      var _handle2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, handler) {
        var logs, response, error, _iterator, _step, log;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                logs = [];

                if (false) {}

                _context.next = 4;
                return handler.cacheMatch(request);

              case 4:
                response = _context.sent;
                error = undefined;

                if (response) {
                  _context.next = 20;
                  break;
                }

                if (false) {}

                _context.prev = 8;
                _context.next = 11;
                return handler.fetchAndCachePut(request);

              case 11:
                response = _context.sent;
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](8);

                if (_context.t0 instanceof Error) {
                  error = _context.t0;
                }

              case 17:
                if (false) {}

                _context.next = 21;
                break;

              case 20:
                if (false) {}

              case 21:
                if (false) {}

                if (response) {
                  _context.next = 24;
                  break;
                }

                throw new WorkboxError/* WorkboxError */.V('no-response', {
                  url: request.url,
                  error: error
                });

              case 24:
                return _context.abrupt("return", response);

              case 25:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[8, 14]]);
      }));

      function _handle(_x, _x2) {
        return _handle2.apply(this, arguments);
      }

      return _handle;
    }()
  }]);

  return CacheFirst;
}(Strategy/* Strategy */._);


;// CONCATENATED MODULE: ./node_modules/workbox-strategies/CacheOnly.js
function CacheOnly_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CacheOnly_typeof = function _typeof(obj) { return typeof obj; }; } else { CacheOnly_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CacheOnly_typeof(obj); }

function CacheOnly_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function CacheOnly_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { CacheOnly_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { CacheOnly_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function CacheOnly_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CacheOnly_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CacheOnly_createClass(Constructor, protoProps, staticProps) { if (protoProps) CacheOnly_defineProperties(Constructor.prototype, protoProps); if (staticProps) CacheOnly_defineProperties(Constructor, staticProps); return Constructor; }

function CacheOnly_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CacheOnly_setPrototypeOf(subClass, superClass); }

function CacheOnly_setPrototypeOf(o, p) { CacheOnly_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CacheOnly_setPrototypeOf(o, p); }

function CacheOnly_createSuper(Derived) { var hasNativeReflectConstruct = CacheOnly_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = CacheOnly_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = CacheOnly_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return CacheOnly_possibleConstructorReturn(this, result); }; }

function CacheOnly_possibleConstructorReturn(self, call) { if (call && (CacheOnly_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return CacheOnly_assertThisInitialized(self); }

function CacheOnly_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CacheOnly_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function CacheOnly_getPrototypeOf(o) { CacheOnly_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CacheOnly_getPrototypeOf(o); }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * An implementation of a
 * [cache-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#cache-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If there is no cache match, this will throw a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */

var CacheOnly = /*#__PURE__*/function (_Strategy) {
  CacheOnly_inherits(CacheOnly, _Strategy);

  var _super = CacheOnly_createSuper(CacheOnly);

  function CacheOnly() {
    CacheOnly_classCallCheck(this, CacheOnly);

    return _super.apply(this, arguments);
  }

  CacheOnly_createClass(CacheOnly, [{
    key: "_handle",
    value:
    /**
     * @private
     * @param {Request|string} request A request to run this strategy for.
     * @param {module:workbox-strategies.StrategyHandler} handler The event that
     *     triggered the request.
     * @return {Promise<Response>}
     */
    function () {
      var _handle2 = CacheOnly_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, handler) {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (false) {}

                _context.next = 3;
                return handler.cacheMatch(request);

              case 3:
                response = _context.sent;

                if (false) {}

                if (response) {
                  _context.next = 7;
                  break;
                }

                throw new WorkboxError/* WorkboxError */.V('no-response', {
                  url: request.url
                });

              case 7:
                return _context.abrupt("return", response);

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _handle(_x, _x2) {
        return _handle2.apply(this, arguments);
      }

      return _handle;
    }()
  }]);

  return CacheOnly;
}(Strategy/* Strategy */._);


;// CONCATENATED MODULE: ./node_modules/workbox-strategies/plugins/cacheOkAndOpaquePlugin.js
function cacheOkAndOpaquePlugin_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function cacheOkAndOpaquePlugin_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { cacheOkAndOpaquePlugin_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { cacheOkAndOpaquePlugin_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

var cacheOkAndOpaquePlugin = {
  /**
   * Returns a valid response (to allow caching) if the status is 200 (OK) or
   * 0 (opaque).
   *
   * @param {Object} options
   * @param {Response} options.response
   * @return {Response|null}
   *
   * @private
   */
  cacheWillUpdate: function () {
    var _cacheWillUpdate = cacheOkAndOpaquePlugin_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
      var response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              response = _ref.response;

              if (!(response.status === 200 || response.status === 0)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", response);

            case 3:
              return _context.abrupt("return", null);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function cacheWillUpdate(_x) {
      return _cacheWillUpdate.apply(this, arguments);
    }

    return cacheWillUpdate;
  }()
};
;// CONCATENATED MODULE: ./node_modules/workbox-strategies/NetworkFirst.js
function NetworkFirst_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NetworkFirst_typeof = function _typeof(obj) { return typeof obj; }; } else { NetworkFirst_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NetworkFirst_typeof(obj); }

function NetworkFirst_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = NetworkFirst_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function NetworkFirst_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return NetworkFirst_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return NetworkFirst_arrayLikeToArray(o, minLen); }

function NetworkFirst_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function NetworkFirst_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function NetworkFirst_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { NetworkFirst_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { NetworkFirst_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function NetworkFirst_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NetworkFirst_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NetworkFirst_createClass(Constructor, protoProps, staticProps) { if (protoProps) NetworkFirst_defineProperties(Constructor.prototype, protoProps); if (staticProps) NetworkFirst_defineProperties(Constructor, staticProps); return Constructor; }

function NetworkFirst_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NetworkFirst_setPrototypeOf(subClass, superClass); }

function NetworkFirst_setPrototypeOf(o, p) { NetworkFirst_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NetworkFirst_setPrototypeOf(o, p); }

function NetworkFirst_createSuper(Derived) { var hasNativeReflectConstruct = NetworkFirst_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = NetworkFirst_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = NetworkFirst_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return NetworkFirst_possibleConstructorReturn(this, result); }; }

function NetworkFirst_possibleConstructorReturn(self, call) { if (call && (NetworkFirst_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return NetworkFirst_assertThisInitialized(self); }

function NetworkFirst_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NetworkFirst_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function NetworkFirst_getPrototypeOf(o) { NetworkFirst_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NetworkFirst_getPrototypeOf(o); }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [network first]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-falling-back-to-cache}
 * request strategy.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */

var NetworkFirst = /*#__PURE__*/function (_Strategy) {
  NetworkFirst_inherits(NetworkFirst, _Strategy);

  var _super = NetworkFirst_createSuper(NetworkFirst);

  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * [workbox-core]{@link module:workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will fallback to the cache.
   *
   * This option can be used to combat
   * "[lie-fi]{@link https://developers.google.com/web/fundamentals/performance/poor-connectivity/#lie-fi}"
   * scenarios.
   */
  function NetworkFirst() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    NetworkFirst_classCallCheck(this, NetworkFirst);

    _this = _super.call(this, options); // If this instance contains no plugins with a 'cacheWillUpdate' callback,
    // prepend the `cacheOkAndOpaquePlugin` plugin to the plugins list.

    if (!_this.plugins.some(function (p) {
      return 'cacheWillUpdate' in p;
    })) {
      _this.plugins.unshift(cacheOkAndOpaquePlugin);
    }

    _this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;

    if (false) {}

    return _this;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {module:workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */


  NetworkFirst_createClass(NetworkFirst, [{
    key: "_handle",
    value: function () {
      var _handle2 = NetworkFirst_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(request, handler) {
        var logs, promises, timeoutId, _this$_getTimeoutProm, id, promise, networkPromise, response, _iterator, _step, log;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                logs = [];

                if (false) {}

                promises = [];

                if (this._networkTimeoutSeconds) {
                  _this$_getTimeoutProm = this._getTimeoutPromise({
                    request: request,
                    logs: logs,
                    handler: handler
                  }), id = _this$_getTimeoutProm.id, promise = _this$_getTimeoutProm.promise;
                  timeoutId = id;
                  promises.push(promise);
                }

                networkPromise = this._getNetworkPromise({
                  timeoutId: timeoutId,
                  request: request,
                  logs: logs,
                  handler: handler
                });
                promises.push(networkPromise);
                _context2.next = 8;
                return handler.waitUntil(NetworkFirst_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return handler.waitUntil(Promise.race(promises));

                        case 2:
                          _context.t0 = _context.sent;

                          if (_context.t0) {
                            _context.next = 7;
                            break;
                          }

                          _context.next = 6;
                          return networkPromise;

                        case 6:
                          _context.t0 = _context.sent;

                        case 7:
                          return _context.abrupt("return", _context.t0);

                        case 8:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }))());

              case 8:
                response = _context2.sent;

                if (false) {}

                if (response) {
                  _context2.next = 12;
                  break;
                }

                throw new WorkboxError/* WorkboxError */.V('no-response', {
                  url: request.url
                });

              case 12:
                return _context2.abrupt("return", response);

              case 13:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function _handle(_x, _x2) {
        return _handle2.apply(this, arguments);
      }

      return _handle;
    }()
    /**
     * @param {Object} options
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs array
     * @param {Event} options.event
     * @return {Promise<Response>}
     *
     * @private
     */

  }, {
    key: "_getTimeoutPromise",
    value: function _getTimeoutPromise(_ref2) {
      var _this2 = this;

      var request = _ref2.request,
          logs = _ref2.logs,
          handler = _ref2.handler;
      var timeoutId;
      var timeoutPromise = new Promise(function (resolve) {
        var onNetworkTimeout = /*#__PURE__*/function () {
          var _ref3 = NetworkFirst_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    if (false) {}

                    _context3.t0 = resolve;
                    _context3.next = 4;
                    return handler.cacheMatch(request);

                  case 4:
                    _context3.t1 = _context3.sent;
                    (0, _context3.t0)(_context3.t1);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3);
          }));

          return function onNetworkTimeout() {
            return _ref3.apply(this, arguments);
          };
        }();

        timeoutId = setTimeout(onNetworkTimeout, _this2._networkTimeoutSeconds * 1000);
      });
      return {
        promise: timeoutPromise,
        id: timeoutId
      };
    }
    /**
     * @param {Object} options
     * @param {number|undefined} options.timeoutId
     * @param {Request} options.request
     * @param {Array} options.logs A reference to the logs Array.
     * @param {Event} options.event
     * @return {Promise<Response>}
     *
     * @private
     */

  }, {
    key: "_getNetworkPromise",
    value: function () {
      var _getNetworkPromise2 = NetworkFirst_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_ref4) {
        var timeoutId, request, logs, handler, error, response;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                timeoutId = _ref4.timeoutId, request = _ref4.request, logs = _ref4.logs, handler = _ref4.handler;
                _context4.prev = 1;
                _context4.next = 4;
                return handler.fetchAndCachePut(request);

              case 4:
                response = _context4.sent;
                _context4.next = 10;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](1);

                if (_context4.t0 instanceof Error) {
                  error = _context4.t0;
                }

              case 10:
                if (timeoutId) {
                  clearTimeout(timeoutId);
                }

                if (false) {}

                if (!(error || !response)) {
                  _context4.next = 17;
                  break;
                }

                _context4.next = 15;
                return handler.cacheMatch(request);

              case 15:
                response = _context4.sent;

                if (false) {}

              case 17:
                return _context4.abrupt("return", response);

              case 18:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this, [[1, 7]]);
      }));

      function _getNetworkPromise(_x3) {
        return _getNetworkPromise2.apply(this, arguments);
      }

      return _getNetworkPromise;
    }()
  }]);

  return NetworkFirst;
}(Strategy/* Strategy */._);


// EXTERNAL MODULE: ./node_modules/workbox-core/_private/timeout.js
var timeout = __webpack_require__(436);
;// CONCATENATED MODULE: ./node_modules/workbox-strategies/NetworkOnly.js
function NetworkOnly_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { NetworkOnly_typeof = function _typeof(obj) { return typeof obj; }; } else { NetworkOnly_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return NetworkOnly_typeof(obj); }

function NetworkOnly_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function NetworkOnly_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { NetworkOnly_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { NetworkOnly_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function NetworkOnly_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function NetworkOnly_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function NetworkOnly_createClass(Constructor, protoProps, staticProps) { if (protoProps) NetworkOnly_defineProperties(Constructor.prototype, protoProps); if (staticProps) NetworkOnly_defineProperties(Constructor, staticProps); return Constructor; }

function NetworkOnly_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) NetworkOnly_setPrototypeOf(subClass, superClass); }

function NetworkOnly_setPrototypeOf(o, p) { NetworkOnly_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return NetworkOnly_setPrototypeOf(o, p); }

function NetworkOnly_createSuper(Derived) { var hasNativeReflectConstruct = NetworkOnly_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = NetworkOnly_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = NetworkOnly_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return NetworkOnly_possibleConstructorReturn(this, result); }; }

function NetworkOnly_possibleConstructorReturn(self, call) { if (call && (NetworkOnly_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return NetworkOnly_assertThisInitialized(self); }

function NetworkOnly_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function NetworkOnly_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function NetworkOnly_getPrototypeOf(o) { NetworkOnly_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return NetworkOnly_getPrototypeOf(o); }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [network-only]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#network-only}
 * request strategy.
 *
 * This class is useful if you want to take advantage of any
 * [Workbox plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}.
 *
 * If the network request fails, this will throw a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */

var NetworkOnly = /*#__PURE__*/function (_Strategy) {
  NetworkOnly_inherits(NetworkOnly, _Strategy);

  var _super = NetworkOnly_createSuper(NetworkOnly);

  /**
   * @param {Object} [options]
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {number} [options.networkTimeoutSeconds] If set, any network requests
   * that fail to respond within the timeout will result in a network error.
   */
  function NetworkOnly() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    NetworkOnly_classCallCheck(this, NetworkOnly);

    _this = _super.call(this, options);
    _this._networkTimeoutSeconds = options.networkTimeoutSeconds || 0;
    return _this;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {module:workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */


  NetworkOnly_createClass(NetworkOnly, [{
    key: "_handle",
    value: function () {
      var _handle2 = NetworkOnly_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, handler) {
        var error, response, promises, timeoutPromise;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (false) {}

                error = undefined;
                _context.prev = 2;
                promises = [handler.fetch(request)];

                if (this._networkTimeoutSeconds) {
                  timeoutPromise = (0,timeout/* timeout */.V)(this._networkTimeoutSeconds * 1000);
                  promises.push(timeoutPromise);
                }

                _context.next = 7;
                return Promise.race(promises);

              case 7:
                response = _context.sent;

                if (response) {
                  _context.next = 10;
                  break;
                }

                throw new Error("Timed out the network response after " + "".concat(this._networkTimeoutSeconds, " seconds."));

              case 10:
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);

                if (_context.t0 instanceof Error) {
                  error = _context.t0;
                }

              case 15:
                if (false) {}

                if (response) {
                  _context.next = 18;
                  break;
                }

                throw new WorkboxError/* WorkboxError */.V('no-response', {
                  url: request.url,
                  error: error
                });

              case 18:
                return _context.abrupt("return", response);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 12]]);
      }));

      function _handle(_x, _x2) {
        return _handle2.apply(this, arguments);
      }

      return _handle;
    }()
  }]);

  return NetworkOnly;
}(Strategy/* Strategy */._);


;// CONCATENATED MODULE: ./node_modules/workbox-strategies/StaleWhileRevalidate.js
function StaleWhileRevalidate_typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { StaleWhileRevalidate_typeof = function _typeof(obj) { return typeof obj; }; } else { StaleWhileRevalidate_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return StaleWhileRevalidate_typeof(obj); }

function StaleWhileRevalidate_createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = StaleWhileRevalidate_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function StaleWhileRevalidate_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return StaleWhileRevalidate_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return StaleWhileRevalidate_arrayLikeToArray(o, minLen); }

function StaleWhileRevalidate_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function StaleWhileRevalidate_asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function StaleWhileRevalidate_asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { StaleWhileRevalidate_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { StaleWhileRevalidate_asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function StaleWhileRevalidate_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StaleWhileRevalidate_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function StaleWhileRevalidate_createClass(Constructor, protoProps, staticProps) { if (protoProps) StaleWhileRevalidate_defineProperties(Constructor.prototype, protoProps); if (staticProps) StaleWhileRevalidate_defineProperties(Constructor, staticProps); return Constructor; }

function StaleWhileRevalidate_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) StaleWhileRevalidate_setPrototypeOf(subClass, superClass); }

function StaleWhileRevalidate_setPrototypeOf(o, p) { StaleWhileRevalidate_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return StaleWhileRevalidate_setPrototypeOf(o, p); }

function StaleWhileRevalidate_createSuper(Derived) { var hasNativeReflectConstruct = StaleWhileRevalidate_isNativeReflectConstruct(); return function _createSuperInternal() { var Super = StaleWhileRevalidate_getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = StaleWhileRevalidate_getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return StaleWhileRevalidate_possibleConstructorReturn(this, result); }; }

function StaleWhileRevalidate_possibleConstructorReturn(self, call) { if (call && (StaleWhileRevalidate_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return StaleWhileRevalidate_assertThisInitialized(self); }

function StaleWhileRevalidate_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function StaleWhileRevalidate_isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function StaleWhileRevalidate_getPrototypeOf(o) { StaleWhileRevalidate_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return StaleWhileRevalidate_getPrototypeOf(o); }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * An implementation of a
 * [stale-while-revalidate]{@link https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook/#stale-while-revalidate}
 * request strategy.
 *
 * Resources are requested from both the cache and the network in parallel.
 * The strategy will respond with the cached version if available, otherwise
 * wait for the network response. The cache is updated with the network response
 * with each successful request.
 *
 * By default, this strategy will cache responses with a 200 status code as
 * well as [opaque responses]{@link https://developers.google.com/web/tools/workbox/guides/handle-third-party-requests}.
 * Opaque responses are cross-origin requests where the response doesn't
 * support [CORS]{@link https://enable-cors.org/}.
 *
 * If the network request fails, and there is no cache match, this will throw
 * a `WorkboxError` exception.
 *
 * @extends module:workbox-strategies.Strategy
 * @memberof module:workbox-strategies
 */

var StaleWhileRevalidate = /*#__PURE__*/function (_Strategy) {
  StaleWhileRevalidate_inherits(StaleWhileRevalidate, _Strategy);

  var _super = StaleWhileRevalidate_createSuper(StaleWhileRevalidate);

  /**
   * @param {Object} [options]
   * @param {string} [options.cacheName] Cache name to store and retrieve
   * requests. Defaults to cache names provided by
   * [workbox-core]{@link module:workbox-core.cacheNames}.
   * @param {Array<Object>} [options.plugins] [Plugins]{@link https://developers.google.com/web/tools/workbox/guides/using-plugins}
   * to use in conjunction with this caching strategy.
   * @param {Object} [options.fetchOptions] Values passed along to the
   * [`init`](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch#Parameters)
   * of [non-navigation](https://github.com/GoogleChrome/workbox/issues/1796)
   * `fetch()` requests made by this strategy.
   * @param {Object} [options.matchOptions] [`CacheQueryOptions`](https://w3c.github.io/ServiceWorker/#dictdef-cachequeryoptions)
   */
  function StaleWhileRevalidate() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    StaleWhileRevalidate_classCallCheck(this, StaleWhileRevalidate);

    _this = _super.call(this, options); // If this instance contains no plugins with a 'cacheWillUpdate' callback,
    // prepend the `cacheOkAndOpaquePlugin` plugin to the plugins list.

    if (!_this.plugins.some(function (p) {
      return 'cacheWillUpdate' in p;
    })) {
      _this.plugins.unshift(cacheOkAndOpaquePlugin);
    }

    return _this;
  }
  /**
   * @private
   * @param {Request|string} request A request to run this strategy for.
   * @param {module:workbox-strategies.StrategyHandler} handler The event that
   *     triggered the request.
   * @return {Promise<Response>}
   */


  StaleWhileRevalidate_createClass(StaleWhileRevalidate, [{
    key: "_handle",
    value: function () {
      var _handle2 = StaleWhileRevalidate_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(request, handler) {
        var logs, fetchAndCachePromise, response, error, _iterator, _step, log;

        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                logs = [];

                if (false) {}

                fetchAndCachePromise = handler.fetchAndCachePut(request)["catch"](function () {// Swallow this error because a 'no-response' error will be thrown in
                  // main handler return flow. This will be in the `waitUntil()` flow.
                });
                _context.next = 5;
                return handler.cacheMatch(request);

              case 5:
                response = _context.sent;

                if (!response) {
                  _context.next = 10;
                  break;
                }

                if (false) {}

                _context.next = 20;
                break;

              case 10:
                if (false) {}

                _context.prev = 11;
                _context.next = 14;
                return fetchAndCachePromise;

              case 14:
                response = _context.sent;
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](11);

                if (_context.t0 instanceof Error) {
                  error = _context.t0;
                }

              case 20:
                if (false) {}

                if (response) {
                  _context.next = 23;
                  break;
                }

                throw new WorkboxError/* WorkboxError */.V('no-response', {
                  url: request.url,
                  error: error
                });

              case 23:
                return _context.abrupt("return", response);

              case 24:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[11, 17]]);
      }));

      function _handle(_x, _x2) {
        return _handle2.apply(this, arguments);
      }

      return _handle;
    }()
  }]);

  return StaleWhileRevalidate;
}(Strategy/* Strategy */._);


// EXTERNAL MODULE: ./node_modules/workbox-strategies/StrategyHandler.js
var StrategyHandler = __webpack_require__(791);
;// CONCATENATED MODULE: ./node_modules/workbox-strategies/index.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * There are common caching strategies that most service workers will need
 * and use. This module provides simple implementations of these strategies.
 *
 * @module workbox-strategies
 */


;// CONCATENATED MODULE: ./node_modules/workbox-strategies/index.mjs


/***/ })

};