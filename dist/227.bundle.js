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

/***/ 710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ canConstructResponseFromBodyStream)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(935);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

var supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a new `Response` from a `response.body` stream.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `Response` from a `response.body` stream, `false` otherwise.
 *
 * @private
 */

function canConstructResponseFromBodyStream() {
  if (supportStatus === undefined) {
    var testResponse = new Response('');

    if ('body' in testResponse) {
      try {
        new Response(testResponse.body);
        supportStatus = true;
      } catch (error) {
        supportStatus = false;
      }
    }

    supportStatus = false;
  }

  return supportStatus;
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

/***/ 851:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ waitUntil)
/* harmony export */ });
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(935);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2020 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * A utility method that makes it easier to use `event.waitUntil` with
 * async functions and return the result.
 *
 * @param {ExtendableEvent} event
 * @param {Function} asyncFn
 * @return {Function}
 * @private
 */

function waitUntil(event, asyncFn) {
  var returnPromise = asyncFn();
  event.waitUntil(returnPromise);
  return returnPromise;
}



/***/ }),

/***/ 327:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ copyResponse)
/* harmony export */ });
/* harmony import */ var _private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(710);
/* harmony import */ var _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(935);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_2__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/



/**
 * Allows developers to copy a response and modify its `headers`, `status`,
 * or `statusText` values (the values settable via a
 * [`ResponseInit`]{@link https://developer.mozilla.org/en-US/docs/Web/API/Response/Response#Syntax}
 * object in the constructor).
 * To modify these values, pass a function as the second argument. That
 * function will be invoked with a single object with the response properties
 * `{headers, status, statusText}`. The return value of this function will
 * be used as the `ResponseInit` for the new `Response`. To change the values
 * either modify the passed parameter(s) and return it, or return a totally
 * new object.
 *
 * This method is intentionally limited to same-origin responses, regardless of
 * whether CORS was used or not.
 *
 * @param {Response} response
 * @param {Function} modifier
 * @memberof module:workbox-core
 */

function copyResponse(_x, _x2) {
  return _copyResponse.apply(this, arguments);
}

function _copyResponse() {
  _copyResponse = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(response, modifier) {
    var origin, responseURL, clonedResponse, responseInit, modifiedResponseInit, body;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            origin = null; // If response.url isn't set, assume it's cross-origin and keep origin null.

            if (response.url) {
              responseURL = new URL(response.url);
              origin = responseURL.origin;
            }

            if (!(origin !== self.location.origin)) {
              _context.next = 4;
              break;
            }

            throw new _private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__/* .WorkboxError */ .V('cross-origin-copy-response', {
              origin: origin
            });

          case 4:
            clonedResponse = response.clone(); // Create a fresh `ResponseInit` object by cloning the headers.

            responseInit = {
              headers: new Headers(clonedResponse.headers),
              status: clonedResponse.status,
              statusText: clonedResponse.statusText
            }; // Apply any user modifications.

            modifiedResponseInit = modifier ? modifier(responseInit) : responseInit; // Create the new response from the body stream and `ResponseInit`
            // modifications. Note: not all browsers support the Response.body stream,
            // so fall back to reading the entire body into memory as a blob.

            if (!(0,_private_canConstructResponseFromBodyStream_js__WEBPACK_IMPORTED_MODULE_0__/* .canConstructResponseFromBodyStream */ .x)()) {
              _context.next = 11;
              break;
            }

            _context.t0 = clonedResponse.body;
            _context.next = 14;
            break;

          case 11:
            _context.next = 13;
            return clonedResponse.blob();

          case 13:
            _context.t0 = _context.sent;

          case 14:
            body = _context.t0;
            return _context.abrupt("return", new Response(body, modifiedResponseInit));

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _copyResponse.apply(this, arguments);
}



/***/ }),

/***/ 227:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_private": () => (/* reexport */ _private_namespaceObject),
  "cacheNames": () => (/* reexport */ cacheNames_cacheNames),
  "clientsClaim": () => (/* reexport */ clientsClaim),
  "copyResponse": () => (/* reexport */ copyResponse/* copyResponse */.S),
  "registerQuotaErrorCallback": () => (/* reexport */ registerQuotaErrorCallback/* registerQuotaErrorCallback */.t),
  "setCacheNameDetails": () => (/* reexport */ setCacheNameDetails),
  "skipWaiting": () => (/* reexport */ skipWaiting)
});

// NAMESPACE OBJECT: ./node_modules/workbox-core/_private.js
var _private_namespaceObject = {};
__webpack_require__.r(_private_namespaceObject);
__webpack_require__.d(_private_namespaceObject, {
  "Deferred": () => (Deferred/* Deferred */.B),
  "WorkboxError": () => (WorkboxError/* WorkboxError */.V),
  "assert": () => (assert/* assert */.h),
  "cacheMatchIgnoreParams": () => (cacheMatchIgnoreParams/* cacheMatchIgnoreParams */.F),
  "cacheNames": () => (cacheNames/* cacheNames */.x),
  "canConstructReadableStream": () => (canConstructReadableStream),
  "canConstructResponseFromBodyStream": () => (canConstructResponseFromBodyStream/* canConstructResponseFromBodyStream */.x),
  "dontWaitFor": () => (dontWaitFor/* dontWaitFor */.f),
  "executeQuotaErrorCallbacks": () => (executeQuotaErrorCallbacks/* executeQuotaErrorCallbacks */.Y),
  "getFriendlyURL": () => (getFriendlyURL/* getFriendlyURL */.C),
  "logger": () => (logger/* logger */.k),
  "resultingClientExists": () => (resultingClientExists),
  "timeout": () => (timeout/* timeout */.V),
  "waitUntil": () => (waitUntil/* waitUntil */.A)
});

// EXTERNAL MODULE: ./node_modules/workbox-core/registerQuotaErrorCallback.js
var registerQuotaErrorCallback = __webpack_require__(419);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/assert.js
var assert = __webpack_require__(511);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/cacheNames.js
var cacheNames = __webpack_require__(782);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/cacheMatchIgnoreParams.js
var cacheMatchIgnoreParams = __webpack_require__(676);
// EXTERNAL MODULE: ./node_modules/workbox-core/_version.js
var _version = __webpack_require__(935);
;// CONCATENATED MODULE: ./node_modules/workbox-core/_private/canConstructReadableStream.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

var supportStatus;
/**
 * A utility function that determines whether the current browser supports
 * constructing a [`ReadableStream`](https://developer.mozilla.org/en-US/docs/Web/API/ReadableStream/ReadableStream)
 * object.
 *
 * @return {boolean} `true`, if the current browser can successfully
 *     construct a `ReadableStream`, `false` otherwise.
 *
 * @private
 */

function canConstructReadableStream() {
  if (supportStatus === undefined) {
    // See https://github.com/GoogleChrome/workbox/issues/1473
    try {
      new ReadableStream({
        start: function start() {}
      });
      supportStatus = true;
    } catch (error) {
      supportStatus = false;
    }
  }

  return supportStatus;
}


// EXTERNAL MODULE: ./node_modules/workbox-core/_private/canConstructResponseFromBodyStream.js
var canConstructResponseFromBodyStream = __webpack_require__(710);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/dontWaitFor.js
var dontWaitFor = __webpack_require__(183);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/Deferred.js
var Deferred = __webpack_require__(453);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/executeQuotaErrorCallbacks.js
var executeQuotaErrorCallbacks = __webpack_require__(673);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/getFriendlyURL.js
var getFriendlyURL = __webpack_require__(257);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/logger.js
var logger = __webpack_require__(833);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/timeout.js
var timeout = __webpack_require__(436);
;// CONCATENATED MODULE: ./node_modules/workbox-core/_private/resultingClientExists.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/*
  Copyright 2019 Google LLC
  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


var MAX_RETRY_TIME = 2000;
/**
 * Returns a promise that resolves to a window client matching the passed
 * `resultingClientId`. For browsers that don't support `resultingClientId`
 * or if waiting for the resulting client to apper takes too long, resolve to
 * `undefined`.
 *
 * @param {string} [resultingClientId]
 * @return {Promise<Client|undefined>}
 * @private
 */

function resultingClientExists(_x) {
  return _resultingClientExists.apply(this, arguments);
}

function _resultingClientExists() {
  _resultingClientExists = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(resultingClientId) {
    var existingWindows, existingWindowIds, resultingWindow, startTime;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (resultingClientId) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return");

          case 2:
            _context.next = 4;
            return self.clients.matchAll({
              type: 'window'
            });

          case 4:
            existingWindows = _context.sent;
            existingWindowIds = new Set(existingWindows.map(function (w) {
              return w.id;
            }));
            startTime = performance.now(); // Only wait up to `MAX_RETRY_TIME` to find a matching client.

          case 7:
            if (!(performance.now() - startTime < MAX_RETRY_TIME)) {
              _context.next = 18;
              break;
            }

            _context.next = 10;
            return self.clients.matchAll({
              type: 'window'
            });

          case 10:
            existingWindows = _context.sent;
            resultingWindow = existingWindows.find(function (w) {
              if (resultingClientId) {
                // If we have a `resultingClientId`, we can match on that.
                return w.id === resultingClientId;
              } else {
                // Otherwise match on finding a window not in `existingWindowIds`.
                return !existingWindowIds.has(w.id);
              }
            });

            if (!resultingWindow) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("break", 18);

          case 14:
            _context.next = 16;
            return (0,timeout/* timeout */.V)(100);

          case 16:
            _context.next = 7;
            break;

          case 18:
            return _context.abrupt("return", resultingWindow);

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _resultingClientExists.apply(this, arguments);
}
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/waitUntil.js
var waitUntil = __webpack_require__(851);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/WorkboxError.js + 2 modules
var WorkboxError = __webpack_require__(609);
;// CONCATENATED MODULE: ./node_modules/workbox-core/_private.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/
// We either expose defaults or we expose every named export.
















;// CONCATENATED MODULE: ./node_modules/workbox-core/cacheNames.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Get the current cache names and prefix/suffix used by Workbox.
 *
 * `cacheNames.precache` is used for precached assets,
 * `cacheNames.googleAnalytics` is used by `workbox-google-analytics` to
 * store `analytics.js`, and `cacheNames.runtime` is used for everything else.
 *
 * `cacheNames.prefix` can be used to retrieve just the current prefix value.
 * `cacheNames.suffix` can be used to retrieve just the current suffix value.
 *
 * @return {Object} An object with `precache`, `runtime`, `prefix`, and
 *     `googleAnalytics` properties.
 *
 * @memberof module:workbox-core
 */

var cacheNames_cacheNames = {
  get googleAnalytics() {
    return cacheNames/* cacheNames.getGoogleAnalyticsName */.x.getGoogleAnalyticsName();
  },

  get precache() {
    return cacheNames/* cacheNames.getPrecacheName */.x.getPrecacheName();
  },

  get prefix() {
    return cacheNames/* cacheNames.getPrefix */.x.getPrefix();
  },

  get runtime() {
    return cacheNames/* cacheNames.getRuntimeName */.x.getRuntimeName();
  },

  get suffix() {
    return cacheNames/* cacheNames.getSuffix */.x.getSuffix();
  }

};

// EXTERNAL MODULE: ./node_modules/workbox-core/copyResponse.js
var copyResponse = __webpack_require__(327);
;// CONCATENATED MODULE: ./node_modules/workbox-core/clientsClaim.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * Claim any currently available clients once the service worker
 * becomes active. This is normally used in conjunction with `skipWaiting()`.
 *
 * @memberof module:workbox-core
 */

function clientsClaim() {
  self.addEventListener('activate', function () {
    return self.clients.claim();
  });
}


;// CONCATENATED MODULE: ./node_modules/workbox-core/setCacheNameDetails.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * Modifies the default cache names used by the Workbox packages.
 * Cache names are generated as `<prefix>-<Cache Name>-<suffix>`.
 *
 * @param {Object} details
 * @param {Object} [details.prefix] The string to add to the beginning of
 *     the precache and runtime cache names.
 * @param {Object} [details.suffix] The string to add to the end of
 *     the precache and runtime cache names.
 * @param {Object} [details.precache] The cache name to use for precache
 *     caching.
 * @param {Object} [details.runtime] The cache name to use for runtime caching.
 * @param {Object} [details.googleAnalytics] The cache name to use for
 *     `workbox-google-analytics` caching.
 *
 * @memberof module:workbox-core
 */

function setCacheNameDetails(details) {
  if (false) {}

  cacheNames/* cacheNames.updateDetails */.x.updateDetails(details);
}


;// CONCATENATED MODULE: ./node_modules/workbox-core/skipWaiting.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * This method is deprecated, and will be removed in Workbox v7.
 *
 * Calling self.skipWaiting() is equivalent, and should be used instead.
 *
 * @memberof module:workbox-core
 */

function skipWaiting() {
  // Just call self.skipWaiting() directly.
  // See https://github.com/GoogleChrome/workbox/issues/2525
  if (false) {}

  void self.skipWaiting();
}


;// CONCATENATED MODULE: ./node_modules/workbox-core/types.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

;// CONCATENATED MODULE: ./node_modules/workbox-core/index.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * All of the Workbox service worker libraries use workbox-core for shared
 * code as well as setting default values that need to be shared (like cache
 * names).
 *
 * @module workbox-core
 */



;// CONCATENATED MODULE: ./node_modules/workbox-core/index.mjs


/***/ })

};