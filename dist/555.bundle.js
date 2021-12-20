"use strict";
{

/***/ 852:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "t": () => (/* binding */ RegExpRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(833);
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(993);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(409);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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
 * RegExpRoute makes it easy to create a regular expression based
 * [Route]{@link module:workbox-routing.Route}.
 *
 * For same-origin requests the RegExp only needs to match part of the URL. For
 * requests against third-party servers, you must define a RegExp that matches
 * the start of the URL.
 *
 * [See the module docs for info.]{@link https://developers.google.com/web/tools/workbox/modules/workbox-routing}
 *
 * @memberof module:workbox-routing
 * @extends module:workbox-routing.Route
 */

var RegExpRoute = /*#__PURE__*/function (_Route) {
  _inherits(RegExpRoute, _Route);

  var _super = _createSuper(RegExpRoute);

  /**
   * If the regular expression contains
   * [capture groups]{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#grouping-back-references},
   * the captured values will be passed to the
   * [handler's]{@link module:workbox-routing~handlerCallback} `params`
   * argument.
   *
   * @param {RegExp} regExp The regular expression to match against URLs.
   * @param {module:workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  function RegExpRoute(regExp, handler, method) {
    _classCallCheck(this, RegExpRoute);

    if (false) {}

    var match = function match(_ref) {
      var url = _ref.url;
      var result = regExp.exec(url.href); // Return immediately if there's no match.

      if (!result) {
        return;
      } // Require that the match start at the first character in the URL string
      // if it's a cross-origin request.
      // See https://github.com/GoogleChrome/workbox/issues/281 for the context
      // behind this behavior.


      if (url.origin !== location.origin && result.index !== 0) {
        if (false) {}

        return;
      } // If the route matches, but there aren't any capture groups defined, then
      // this will return [], which is truthy and therefore sufficient to
      // indicate a match.
      // If there are capture groups, then it will return their values.


      return result.slice(1);
    };

    return _super.call(this, match, handler, method);
  }

  return RegExpRoute;
}(_Route_js__WEBPACK_IMPORTED_MODULE_2__/* .Route */ .A);



/***/ }),

/***/ 993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A": () => (/* binding */ Route)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(525);
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(570);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(409);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_3__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/




/**
 * A `Route` consists of a pair of callback functions, "match" and "handler".
 * The "match" callback determine if a route should be used to "handle" a
 * request by returning a non-falsy value if it can. The "handler" callback
 * is called when there is a match and should return a Promise that resolves
 * to a `Response`.
 *
 * @memberof module:workbox-routing
 */

var Route = /*#__PURE__*/function () {
  /**
   * Constructor for Route class.
   *
   * @param {module:workbox-routing~matchCallback} match
   * A callback function that determines whether the route matches a given
   * `fetch` event by returning a non-falsy value.
   * @param {module:workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response.
   * @param {string} [method='GET'] The HTTP method to match the Route
   * against.
   */
  function Route(match, handler) {
    var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__/* .defaultMethod */ .g;

    _classCallCheck(this, Route);

    if (false) {} // These values are referenced directly by Router so cannot be
    // altered by minificaton.


    this.handler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__/* .normalizeHandler */ .M)(handler);
    this.match = match;
    this.method = method;
  }
  /**
   *
   * @param {module:workbox-routing-handlerCallback} handler A callback
   * function that returns a Promise resolving to a Response
   */


  _createClass(Route, [{
    key: "setCatchHandler",
    value: function setCatchHandler(handler) {
      this.catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_2__/* .normalizeHandler */ .M)(handler);
    }
  }]);

  return Route;
}();



/***/ }),

/***/ 938:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ Router)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
/* harmony import */ var workbox_core_private_getFriendlyURL_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(257);
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(525);
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(833);
/* harmony import */ var _utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(570);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(609);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(409);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_6__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/







/**
 * The Router can be used to process a FetchEvent through one or more
 * [Routes]{@link module:workbox-routing.Route} responding  with a Request if
 * a matching route exists.
 *
 * If no route matches a given a request, the Router will use a "default"
 * handler if one is defined.
 *
 * Should the matching Route throw an error, the Router will use a "catch"
 * handler if one is defined to gracefully deal with issues and respond with a
 * Request.
 *
 * If a request matches multiple routes, the **earliest** registered route will
 * be used to respond to the request.
 *
 * @memberof module:workbox-routing
 */

var Router = /*#__PURE__*/function () {
  /**
   * Initializes a new Router.
   */
  function Router() {
    _classCallCheck(this, Router);

    this._routes = new Map();
    this._defaultHandlerMap = new Map();
  }
  /**
   * @return {Map<string, Array<module:workbox-routing.Route>>} routes A `Map` of HTTP
   * method name ('GET', etc.) to an array of all the corresponding `Route`
   * instances that are registered.
   */


  _createClass(Router, [{
    key: "routes",
    get: function get() {
      return this._routes;
    }
    /**
     * Adds a fetch event listener to respond to events when a route matches
     * the event's request.
     */

  }, {
    key: "addFetchListener",
    value: function addFetchListener() {
      var _this = this;

      // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
      self.addEventListener('fetch', function (event) {
        var request = event.request;

        var responsePromise = _this.handleRequest({
          request: request,
          event: event
        });

        if (responsePromise) {
          event.respondWith(responsePromise);
        }
      });
    }
    /**
     * Adds a message event listener for URLs to cache from the window.
     * This is useful to cache resources loaded on the page prior to when the
     * service worker started controlling it.
     *
     * The format of the message data sent from the window should be as follows.
     * Where the `urlsToCache` array may consist of URL strings or an array of
     * URL string + `requestInit` object (the same as you'd pass to `fetch()`).
     *
     * ```
     * {
     *   type: 'CACHE_URLS',
     *   payload: {
     *     urlsToCache: [
     *       './script1.js',
     *       './script2.js',
     *       ['./script3.js', {mode: 'no-cors'}],
     *     ],
     *   },
     * }
     * ```
     */

  }, {
    key: "addCacheListener",
    value: function addCacheListener() {
      var _this2 = this;

      // See https://github.com/Microsoft/TypeScript/issues/28357#issuecomment-436484705
      self.addEventListener('message', function (event) {
        // event.data is type 'any'
        // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        if (event.data && event.data.type === 'CACHE_URLS') {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          var payload = event.data.payload;

          if (false) {}

          var requestPromises = Promise.all(payload.urlsToCache.map(function (entry) {
            if (typeof entry === 'string') {
              entry = [entry];
            }

            var request = _construct(Request, _toConsumableArray(entry));

            return _this2.handleRequest({
              request: request,
              event: event
            }); // TODO(philipwalton): TypeScript errors without this typecast for
            // some reason (probably a bug). The real type here should work but
            // doesn't: `Array<Promise<Response> | undefined>`.
          })); // TypeScript

          event.waitUntil(requestPromises); // If a MessageChannel was used, reply to the message on success.

          if (event.ports && event.ports[0]) {
            void requestPromises.then(function () {
              return event.ports[0].postMessage(true);
            });
          }
        }
      });
    }
    /**
     * Apply the routing rules to a FetchEvent object to get a Response from an
     * appropriate Route's handler.
     *
     * @param {Object} options
     * @param {Request} options.request The request to handle.
     * @param {ExtendableEvent} options.event The event that triggered the
     *     request.
     * @return {Promise<Response>|undefined} A promise is returned if a
     *     registered route can handle the request. If there is no matching
     *     route and there's no `defaultHandler`, `undefined` is returned.
     */

  }, {
    key: "handleRequest",
    value: function handleRequest(_ref) {
      var _this3 = this;

      var request = _ref.request,
          event = _ref.event;

      if (false) {}

      var url = new URL(request.url, location.href);

      if (!url.protocol.startsWith('http')) {
        if (false) {}

        return;
      }

      var sameOrigin = url.origin === location.origin;

      var _this$findMatchingRou = this.findMatchingRoute({
        event: event,
        request: request,
        sameOrigin: sameOrigin,
        url: url
      }),
          params = _this$findMatchingRou.params,
          route = _this$findMatchingRou.route;

      var handler = route && route.handler;
      var debugMessages = [];

      if (false) {} // If we don't have a handler because there was no matching route, then
      // fall back to defaultHandler if that's defined.


      var method = request.method;

      if (!handler && this._defaultHandlerMap.has(method)) {
        if (false) {}

        handler = this._defaultHandlerMap.get(method);
      }

      if (!handler) {
        if (false) {}

        return;
      }

      if (false) {} // Wrap in try and catch in case the handle method throws a synchronous
      // error. It should still callback to the catch handler.


      var responsePromise;

      try {
        responsePromise = handler.handle({
          url: url,
          request: request,
          event: event,
          params: params
        });
      } catch (err) {
        responsePromise = Promise.reject(err);
      } // Get route's catch handler, if it exists


      var catchHandler = route && route.catchHandler;

      if (responsePromise instanceof Promise && (this._catchHandler || catchHandler)) {
        responsePromise = responsePromise["catch"]( /*#__PURE__*/function () {
          var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(err) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!catchHandler) {
                      _context.next = 11;
                      break;
                    }

                    if (false) {}

                    _context.prev = 2;
                    _context.next = 5;
                    return catchHandler.handle({
                      url: url,
                      request: request,
                      event: event,
                      params: params
                    });

                  case 5:
                    return _context.abrupt("return", _context.sent);

                  case 8:
                    _context.prev = 8;
                    _context.t0 = _context["catch"](2);

                    if (_context.t0 instanceof Error) {
                      err = _context.t0;
                    }

                  case 11:
                    if (!_this3._catchHandler) {
                      _context.next = 14;
                      break;
                    }

                    if (false) {}

                    return _context.abrupt("return", _this3._catchHandler.handle({
                      url: url,
                      request: request,
                      event: event
                    }));

                  case 14:
                    throw err;

                  case 15:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, null, [[2, 8]]);
          }));

          return function (_x) {
            return _ref2.apply(this, arguments);
          };
        }());
      }

      return responsePromise;
    }
    /**
     * Checks a request and URL (and optionally an event) against the list of
     * registered routes, and if there's a match, returns the corresponding
     * route along with any params generated by the match.
     *
     * @param {Object} options
     * @param {URL} options.url
     * @param {boolean} options.sameOrigin The result of comparing `url.origin`
     *     against the current origin.
     * @param {Request} options.request The request to match.
     * @param {Event} options.event The corresponding event.
     * @return {Object} An object with `route` and `params` properties.
     *     They are populated if a matching route was found or `undefined`
     *     otherwise.
     */

  }, {
    key: "findMatchingRoute",
    value: function findMatchingRoute(_ref3) {
      var url = _ref3.url,
          sameOrigin = _ref3.sameOrigin,
          request = _ref3.request,
          event = _ref3.event;
      var routes = this._routes.get(request.method) || [];

      var _iterator = _createForOfIteratorHelper(routes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var route = _step.value;
          var params = void 0; // route.match returns type any, not possible to change right now.
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment

          var matchResult = route.match({
            url: url,
            sameOrigin: sameOrigin,
            request: request,
            event: event
          });

          if (matchResult) {
            if (false) {} // See https://github.com/GoogleChrome/workbox/issues/2079
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment


            params = matchResult;

            if (Array.isArray(params) && params.length === 0) {
              // Instead of passing an empty array in as params, use undefined.
              params = undefined;
            } else if (matchResult.constructor === Object && // eslint-disable-line
            Object.keys(matchResult).length === 0) {
              // Instead of passing an empty object in as params, use undefined.
              params = undefined;
            } else if (typeof matchResult === 'boolean') {
              // For the boolean value true (rather than just something truth-y),
              // don't set params.
              // See https://github.com/GoogleChrome/workbox/pull/2134#issuecomment-513924353
              params = undefined;
            } // Return early if have a match.


            return {
              route: route,
              params: params
            };
          }
        } // If no match was found above, return and empty object.

      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      return {};
    }
    /**
     * Define a default `handler` that's called when no routes explicitly
     * match the incoming request.
     *
     * Each HTTP method ('GET', 'POST', etc.) gets its own default handler.
     *
     * Without a default handler, unmatched requests will go against the
     * network as if there were no service worker present.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     * @param {string} [method='GET'] The HTTP method to associate with this
     * default handler. Each method has its own default.
     */

  }, {
    key: "setDefaultHandler",
    value: function setDefaultHandler(handler) {
      var method = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _utils_constants_js__WEBPACK_IMPORTED_MODULE_2__/* .defaultMethod */ .g;

      this._defaultHandlerMap.set(method, (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__/* .normalizeHandler */ .M)(handler));
    }
    /**
     * If a Route throws an error while handling a request, this `handler`
     * will be called and given a chance to provide a response.
     *
     * @param {module:workbox-routing~handlerCallback} handler A callback
     * function that returns a Promise resulting in a Response.
     */

  }, {
    key: "setCatchHandler",
    value: function setCatchHandler(handler) {
      this._catchHandler = (0,_utils_normalizeHandler_js__WEBPACK_IMPORTED_MODULE_4__/* .normalizeHandler */ .M)(handler);
    }
    /**
     * Registers a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to register.
     */

  }, {
    key: "registerRoute",
    value: function registerRoute(route) {
      if (false) {}

      if (!this._routes.has(route.method)) {
        this._routes.set(route.method, []);
      } // Give precedence to all of the earlier routes by adding this additional
      // route to the end of the array.


      this._routes.get(route.method).push(route);
    }
    /**
     * Unregisters a route with the router.
     *
     * @param {module:workbox-routing.Route} route The route to unregister.
     */

  }, {
    key: "unregisterRoute",
    value: function unregisterRoute(route) {
      if (!this._routes.has(route.method)) {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__/* .WorkboxError */ .V('unregister-route-but-not-found-with-method', {
          method: route.method
        });
      }

      var routeIndex = this._routes.get(route.method).indexOf(route);

      if (routeIndex > -1) {
        this._routes.get(route.method).splice(routeIndex, 1);
      } else {
        throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_5__/* .WorkboxError */ .V('unregister-route-route-not-registered');
      }
    }
  }]);

  return Router;
}();



/***/ }),

/***/ 409:
/***/ (() => {

 // @ts-ignore

try {
  self['workbox:routing:6.4.0'] && _();
} catch (e) {}

/***/ }),

/***/ 963:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "X": () => (/* binding */ registerRoute)
/* harmony export */ });
/* harmony import */ var workbox_core_private_logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(833);
/* harmony import */ var workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(609);
/* harmony import */ var _Route_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(993);
/* harmony import */ var _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(852);
/* harmony import */ var _utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(230);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(409);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_5__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/






/**
 * Easily register a RegExp, string, or function with a caching
 * strategy to a singleton Router instance.
 *
 * This method will generate a Route for you if needed and
 * call [registerRoute()]{@link module:workbox-routing.Router#registerRoute}.
 *
 * @param {RegExp|string|module:workbox-routing.Route~matchCallback|module:workbox-routing.Route} capture
 * If the capture param is a `Route`, all other arguments will be ignored.
 * @param {module:workbox-routing~handlerCallback} [handler] A callback
 * function that returns a Promise resulting in a Response. This parameter
 * is required if `capture` is not a `Route` object.
 * @param {string} [method='GET'] The HTTP method to match the Route
 * against.
 * @return {module:workbox-routing.Route} The generated `Route`(Useful for
 * unregistering).
 *
 * @memberof module:workbox-routing
 */

function registerRoute(capture, handler, method) {
  var route;

  if (typeof capture === 'string') {
    var captureUrl = new URL(capture, location.href);

    if (false) { var wildcards, valueToCheck; }

    var matchCallback = function matchCallback(_ref) {
      var url = _ref.url;

      if (false) {}

      return url.href === captureUrl.href;
    }; // If `capture` is a string then `handler` and `method` must be present.


    route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__/* .Route */ .A(matchCallback, handler, method);
  } else if (capture instanceof RegExp) {
    // If `capture` is a `RegExp` then `handler` and `method` must be present.
    route = new _RegExpRoute_js__WEBPACK_IMPORTED_MODULE_3__/* .RegExpRoute */ .t(capture, handler, method);
  } else if (typeof capture === 'function') {
    // If `capture` is a function then `handler` and `method` must be present.
    route = new _Route_js__WEBPACK_IMPORTED_MODULE_2__/* .Route */ .A(capture, handler, method);
  } else if (capture instanceof _Route_js__WEBPACK_IMPORTED_MODULE_2__/* .Route */ .A) {
    route = capture;
  } else {
    throw new workbox_core_private_WorkboxError_js__WEBPACK_IMPORTED_MODULE_1__/* .WorkboxError */ .V('unsupported-route-type', {
      moduleName: 'workbox-routing',
      funcName: 'registerRoute',
      paramName: 'capture'
    });
  }

  var defaultRouter = (0,_utils_getOrCreateDefaultRouter_js__WEBPACK_IMPORTED_MODULE_4__/* .getOrCreateDefaultRouter */ .u)();
  defaultRouter.registerRoute(route);
  return route;
}



/***/ }),

/***/ 525:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "g": () => (/* binding */ defaultMethod)
/* harmony export */ });
/* unused harmony export validMethods */
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(409);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_0__);
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/

/**
 * The default HTTP method, 'GET', used when there's no specific method
 * configured for a route.
 *
 * @type {string}
 *
 * @private
 */

var defaultMethod = 'GET';
/**
 * The list of valid HTTP methods associated with requests that could be routed.
 *
 * @type {Array<string>}
 *
 * @private
 */

var validMethods = (/* unused pure expression or super */ null && (['DELETE', 'GET', 'HEAD', 'PATCH', 'POST', 'PUT']));

/***/ }),

/***/ 230:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ getOrCreateDefaultRouter)
/* harmony export */ });
/* harmony import */ var _Router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(938);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(409);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


var defaultRouter;
/**
 * Creates a new, singleton Router instance if one does not exist. If one
 * does already exist, that instance is returned.
 *
 * @private
 * @return {Router}
 */

var getOrCreateDefaultRouter = function getOrCreateDefaultRouter() {
  if (!defaultRouter) {
    defaultRouter = new _Router_js__WEBPACK_IMPORTED_MODULE_0__/* .Router */ .F(); // The helpers that use the default Router assume these listeners exist.

    defaultRouter.addFetchListener();
    defaultRouter.addCacheListener();
  }

  return defaultRouter;
};

/***/ }),

/***/ 570:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ normalizeHandler)
/* harmony export */ });
/* harmony import */ var workbox_core_private_assert_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(511);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(409);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_version_js__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * @param {function()|Object} handler Either a function, or an object with a
 * 'handle' method.
 * @return {Object} An object with a handle method.
 *
 * @private
 */

var normalizeHandler = function normalizeHandler(handler) {
  if (handler && _typeof(handler) === 'object') {
    if (false) {}

    return handler;
  } else {
    if (false) {}

    return {
      handle: handler
    };
  }
};

/***/ }),

/***/ 555:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "NavigationRoute": () => (/* reexport */ NavigationRoute),
  "RegExpRoute": () => (/* reexport */ RegExpRoute/* RegExpRoute */.t),
  "Route": () => (/* reexport */ Route/* Route */.A),
  "Router": () => (/* reexport */ Router/* Router */.F),
  "registerRoute": () => (/* reexport */ registerRoute/* registerRoute */.X),
  "setCatchHandler": () => (/* reexport */ setCatchHandler),
  "setDefaultHandler": () => (/* reexport */ setDefaultHandler)
});

// EXTERNAL MODULE: ./node_modules/workbox-core/_private/assert.js
var assert = __webpack_require__(511);
// EXTERNAL MODULE: ./node_modules/workbox-core/_private/logger.js
var logger = __webpack_require__(833);
// EXTERNAL MODULE: ./node_modules/workbox-routing/Route.js
var Route = __webpack_require__(993);
// EXTERNAL MODULE: ./node_modules/workbox-routing/_version.js
var _version = __webpack_require__(409);
;// CONCATENATED MODULE: ./node_modules/workbox-routing/NavigationRoute.js
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
 * NavigationRoute makes it easy to create a
 * [Route]{@link module:workbox-routing.Route} that matches for browser
 * [navigation requests]{@link https://developers.google.com/web/fundamentals/primers/service-workers/high-performance-loading#first_what_are_navigation_requests}.
 *
 * It will only match incoming Requests whose
 * [`mode`]{@link https://fetch.spec.whatwg.org/#concept-request-mode}
 * is set to `navigate`.
 *
 * You can optionally only apply this route to a subset of navigation requests
 * by using one or both of the `denylist` and `allowlist` parameters.
 *
 * @memberof module:workbox-routing
 * @extends module:workbox-routing.Route
 */

var NavigationRoute = /*#__PURE__*/function (_Route) {
  _inherits(NavigationRoute, _Route);

  var _super = _createSuper(NavigationRoute);

  /**
   * If both `denylist` and `allowlist` are provided, the `denylist` will
   * take precedence and the request will not match this route.
   *
   * The regular expressions in `allowlist` and `denylist`
   * are matched against the concatenated
   * [`pathname`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/pathname}
   * and [`search`]{@link https://developer.mozilla.org/en-US/docs/Web/API/HTMLHyperlinkElementUtils/search}
   * portions of the requested URL.
   *
   * @param {module:workbox-routing~handlerCallback} handler A callback
   * function that returns a Promise resulting in a Response.
   * @param {Object} options
   * @param {Array<RegExp>} [options.denylist] If any of these patterns match,
   * the route will not handle the request (even if a allowlist RegExp matches).
   * @param {Array<RegExp>} [options.allowlist=[/./]] If any of these patterns
   * match the URL's pathname and search parameter, the route will handle the
   * request (assuming the denylist doesn't match).
   */
  function NavigationRoute(handler) {
    var _this;

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$allowlist = _ref.allowlist,
        allowlist = _ref$allowlist === void 0 ? [/./] : _ref$allowlist,
        _ref$denylist = _ref.denylist,
        denylist = _ref$denylist === void 0 ? [] : _ref$denylist;

    _classCallCheck(this, NavigationRoute);

    if (false) {}

    _this = _super.call(this, function (options) {
      return _this._match(options);
    }, handler);
    _this._allowlist = allowlist;
    _this._denylist = denylist;
    return _this;
  }
  /**
   * Routes match handler.
   *
   * @param {Object} options
   * @param {URL} options.url
   * @param {Request} options.request
   * @return {boolean}
   *
   * @private
   */


  _createClass(NavigationRoute, [{
    key: "_match",
    value: function _match(_ref2) {
      var url = _ref2.url,
          request = _ref2.request;

      if (request && request.mode !== 'navigate') {
        return false;
      }

      var pathnameAndSearch = url.pathname + url.search;

      var _iterator = _createForOfIteratorHelper(this._denylist),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var regExp = _step.value;

          if (regExp.test(pathnameAndSearch)) {
            if (false) {}

            return false;
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      if (this._allowlist.some(function (regExp) {
        return regExp.test(pathnameAndSearch);
      })) {
        if (false) {}

        return true;
      }

      if (false) {}

      return false;
    }
  }]);

  return NavigationRoute;
}(Route/* Route */.A);


// EXTERNAL MODULE: ./node_modules/workbox-routing/RegExpRoute.js
var RegExpRoute = __webpack_require__(852);
// EXTERNAL MODULE: ./node_modules/workbox-routing/registerRoute.js
var registerRoute = __webpack_require__(963);
// EXTERNAL MODULE: ./node_modules/workbox-routing/Router.js
var Router = __webpack_require__(938);
// EXTERNAL MODULE: ./node_modules/workbox-routing/utils/getOrCreateDefaultRouter.js
var getOrCreateDefaultRouter = __webpack_require__(230);
;// CONCATENATED MODULE: ./node_modules/workbox-routing/setCatchHandler.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * If a Route throws an error while handling a request, this `handler`
 * will be called and given a chance to provide a response.
 *
 * @param {module:workbox-routing~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @memberof module:workbox-routing
 */

function setCatchHandler(handler) {
  var defaultRouter = (0,getOrCreateDefaultRouter/* getOrCreateDefaultRouter */.u)();
  defaultRouter.setCatchHandler(handler);
}


;// CONCATENATED MODULE: ./node_modules/workbox-routing/setDefaultHandler.js
/*
  Copyright 2019 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/


/**
 * Define a default `handler` that's called when no routes explicitly
 * match the incoming request.
 *
 * Without a default handler, unmatched requests will go against the
 * network as if there were no service worker present.
 *
 * @param {module:workbox-routing~handlerCallback} handler A callback
 * function that returns a Promise resulting in a Response.
 *
 * @memberof module:workbox-routing
 */

function setDefaultHandler(handler) {
  var defaultRouter = (0,getOrCreateDefaultRouter/* getOrCreateDefaultRouter */.u)();
  defaultRouter.setDefaultHandler(handler);
}


;// CONCATENATED MODULE: ./node_modules/workbox-routing/index.js
/*
  Copyright 2018 Google LLC

  Use of this source code is governed by an MIT-style
  license that can be found in the LICENSE file or at
  https://opensource.org/licenses/MIT.
*/








/**
 * @module workbox-routing
 */


;// CONCATENATED MODULE: ./node_modules/workbox-routing/index.mjs


/***/ })

};