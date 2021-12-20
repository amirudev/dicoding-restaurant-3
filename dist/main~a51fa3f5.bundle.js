"use strict";
(self["webpackChunkrestaurant_apps_3"] = self["webpackChunkrestaurant_apps_3"] || []).push([[21],{

/***/ 239:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(862);
/* harmony import */ var _global_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(699);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable no-prototype-builtins */

/* eslint-disable consistent-return */


var dbPromise = (0,idb__WEBPACK_IMPORTED_MODULE_0__/* .openDB */ .X3)(_global_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].DATABASE_NAME */ .Z.DATABASE_NAME, _global_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].DATABASE_VERSION */ .Z.DATABASE_VERSION, {
  upgrade: function upgrade(database) {
    database.createObjectStore(_global_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].OBJECT_STORE_NAME */ .Z.OBJECT_STORE_NAME, {
      keyPath: 'id'
    });
  }
});
var FavouriteRestaurantDB = {
  getRestaurant: function getRestaurant(id) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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
              return _context.abrupt("return", _context.sent.get(_global_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].OBJECT_STORE_NAME */ .Z.OBJECT_STORE_NAME, id));

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  getAllRestaurants: function getAllRestaurants() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return dbPromise;

            case 2:
              return _context2.abrupt("return", _context2.sent.getAll(_global_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].OBJECT_STORE_NAME */ .Z.OBJECT_STORE_NAME));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  putRestaurant: function putRestaurant(restaurant) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
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
              return _context3.abrupt("return", _context3.sent.put(_global_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].OBJECT_STORE_NAME */ .Z.OBJECT_STORE_NAME, restaurant));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  updateRestaurant: function updateRestaurant(restaurant) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return dbPromise;

            case 2:
              return _context4.abrupt("return", _context4.sent.put(_global_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].OBJECT_STORE_NAME */ .Z.OBJECT_STORE_NAME, restaurant));

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  deleteRestaurant: function deleteRestaurant(id) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return dbPromise;

            case 2:
              return _context5.abrupt("return", _context5.sent["delete"](_global_config__WEBPACK_IMPORTED_MODULE_1__/* ["default"].OBJECT_STORE_NAME */ .Z.OBJECT_STORE_NAME, id));

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

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FavouriteRestaurantDB);

/***/ }),

/***/ 793:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ restaurantsapi_source)
});

// EXTERNAL MODULE: ./src/scripts/global/config.js
var config = __webpack_require__(699);
;// CONCATENATED MODULE: ./src/scripts/global/api-endpoint.js

var API_ENDPOINT = {
  RESTAURANTS: "".concat(config/* default.BASE_URL */.Z.BASE_URL, "list"),
  RESTAURANT_DETAIL: function RESTAURANT_DETAIL(id) {
    return "".concat(config/* default.BASE_URL */.Z.BASE_URL, "detail/").concat(id);
  },
  ADD_REVIEW: "".concat(config/* default.BASE_URL */.Z.BASE_URL, "review")
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

/***/ }),

/***/ 699:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CONFIG);

/***/ }),

/***/ 700:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__(86);
// EXTERNAL MODULE: ./src/styles/style.css
var style = __webpack_require__(915);
// EXTERNAL MODULE: ./src/styles/responsive.css
var responsive = __webpack_require__(362);
// EXTERNAL MODULE: ./node_modules/lazysizes/lazysizes.js
var lazysizes = __webpack_require__(272);
// EXTERNAL MODULE: ./node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js
var ls_parent_fit = __webpack_require__(394);
// EXTERNAL MODULE: ./src/scripts/views/app.js
var app = __webpack_require__(164);
;// CONCATENATED MODULE: ./src/scripts/utils/sw-register.js
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var swRegister = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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







var scripts_app = new app/* default */.Z({
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

/***/ }),

/***/ 68:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Restaurant = function Restaurant(pictureId, name, description, city, rating) {
  _classCallCheck(this, Restaurant);

  this.pictureId = pictureId;
  this.name = name;
  this.description = description;
  this.city = city;
  this.rating = rating;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Restaurant);

/***/ }),

/***/ 518:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_pages_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(258);
/* harmony import */ var _views_pages_detail__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(371);
/* harmony import */ var _views_pages_favourite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(450);



var routes = {
  '/': _views_pages_home__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z,
  '/detail/:id': _views_pages_detail__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
  '/favourite': _views_pages_favourite__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (routes);

/***/ }),

/***/ 386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UrlParser);

/***/ }),

/***/ 830:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DrawerInitiator);

/***/ }),

/***/ 744:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(150);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var LikeButtonInitiator = {
  init: function init(_ref) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
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

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
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

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
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

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      var likeButton;
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this4._likeButtonContainer.innerHTML = (0,_views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__/* .createLikedButtonTemplate */ .ci)();
              likeButton = document.querySelector('#likeButton');
              likeButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
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

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var likeButton;
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _this5._likeButtonContainer.innerHTML = (0,_views_templates_template_creator__WEBPACK_IMPORTED_MODULE_0__/* .createLikeButtonTemplate */ .ty)();
              likeButton = document.querySelector('#likeButton');
              likeButton.addEventListener('click', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LikeButtonInitiator);

/***/ })

}]);