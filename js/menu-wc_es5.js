'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }
function _construct(Parent, args, Class) { if (_isNativeReflectConstruct()) { _construct = Reflect.construct.bind(); } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
customElements.define('compodoc-menu', /*#__PURE__*/function (_HTMLElement) {
  _inherits(_class, _HTMLElement);
  var _super = _createSuper(_class);
  function _class() {
    var _this;
    _classCallCheck(this, _class);
    _this = _super.call(this);
    _this.isNormalMode = _this.getAttribute('mode') === 'normal';
    return _this;
  }
  _createClass(_class, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.render(this.isNormalMode);
    }
  }, {
    key: "render",
    value: function render(isNormalMode) {
      var tp = lithtml.html("\n        <nav>\n            <ul class=\"list\">\n                <li class=\"title\">\n                    <a href=\"index.html\" data-type=\"index-link\">frontend documentation</a>\n                </li>\n\n                <li class=\"divider\"></li>\n                ".concat(isNormalMode ? "<div id=\"book-search-input\" role=\"search\"><input type=\"text\" placeholder=\"Type to search\"></div>" : '', "\n                <li class=\"chapter\">\n                    <a data-type=\"chapter-link\" href=\"index.html\"><span class=\"icon ion-ios-home\"></span>Getting started</a>\n                    <ul class=\"links\">\n                        <li class=\"link\">\n                            <a href=\"overview.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-keypad\"></span>Overview\n                            </a>\n                        </li>\n                        <li class=\"link\">\n                            <a href=\"index.html\" data-type=\"chapter-link\">\n                                <span class=\"icon ion-ios-paper\"></span>README\n                            </a>\n                        </li>\n                                <li class=\"link\">\n                                    <a href=\"dependencies.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-list\"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class=\"link\">\n                                    <a href=\"properties.html\" data-type=\"chapter-link\">\n                                        <span class=\"icon ion-ios-apps\"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class=\"chapter modules\">\n                        <a data-type=\"chapter-link\" href=\"modules.html\">\n                            <div class=\"menu-toggler linked\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#modules-links"' : 'data-target="#xs-modules-links"', ">\n                                <span class=\"icon ion-ios-archive\"></span>\n                                <span class=\"link-name\">Modules</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                        </a>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"', ">\n                            <li class=\"link\">\n                                <a href=\"modules/AdministratorModule.html\" data-type=\"entity-link\" >AdministratorModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AdministratorModule-dcd5cf839fc91680cf117d223d029b28374bc56223a109f8a2aaa6caa5516ba7b859cdac95ad6c90c816f4cc12568cf34a6e8285e52c1f55783be3eec4d98f6a"' : 'data-target="#xs-components-links-module-AdministratorModule-dcd5cf839fc91680cf117d223d029b28374bc56223a109f8a2aaa6caa5516ba7b859cdac95ad6c90c816f4cc12568cf34a6e8285e52c1f55783be3eec4d98f6a"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AdministratorModule-dcd5cf839fc91680cf117d223d029b28374bc56223a109f8a2aaa6caa5516ba7b859cdac95ad6c90c816f4cc12568cf34a6e8285e52c1f55783be3eec4d98f6a"' : 'id="xs-components-links-module-AdministratorModule-dcd5cf839fc91680cf117d223d029b28374bc56223a109f8a2aaa6caa5516ba7b859cdac95ad6c90c816f4cc12568cf34a6e8285e52c1f55783be3eec4d98f6a"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AdminDeviceFormComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AdminDeviceFormComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AdminDutytitleFormComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AdminDutytitleFormComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/AdminHomeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AdminHomeComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LayoutBranchComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LayoutBranchComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/LayoutsComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >LayoutsComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AdministratorRoutingModule.html\" data-type=\"entity-link\" >AdministratorRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppModule.html\" data-type=\"entity-link\" >AppModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-AppModule-098be563289e1ed2fe3d7a9e8534709ff229e90659edc04a7d09cdadef3d0f98259c948d8a393f0d4e19043389c8c49a9278643133ae5aeff8d0f1413d6a8ed5"' : 'data-target="#xs-components-links-module-AppModule-098be563289e1ed2fe3d7a9e8534709ff229e90659edc04a7d09cdadef3d0f98259c948d8a393f0d4e19043389c8c49a9278643133ae5aeff8d0f1413d6a8ed5"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-AppModule-098be563289e1ed2fe3d7a9e8534709ff229e90659edc04a7d09cdadef3d0f98259c948d8a393f0d4e19043389c8c49a9278643133ae5aeff8d0f1413d6a8ed5"' : 'id="xs-components-links-module-AppModule-098be563289e1ed2fe3d7a9e8534709ff229e90659edc04a7d09cdadef3d0f98259c948d8a393f0d4e19043389c8c49a9278643133ae5aeff8d0f1413d6a8ed5"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/AppComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >AppComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/AppRoutingModule.html\" data-type=\"entity-link\" >AppRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/CoreModule.html\" data-type=\"entity-link\" >CoreModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-CoreModule-5bd740d6b942991b5453f02ad5bd5be34d80fb922de86a66f936583d24ce4554793e41abe9bfdac26fbb006b22ddecb1857d64b7fb1b0b295efbfd7ea675f216"' : 'data-target="#xs-components-links-module-CoreModule-5bd740d6b942991b5453f02ad5bd5be34d80fb922de86a66f936583d24ce4554793e41abe9bfdac26fbb006b22ddecb1857d64b7fb1b0b295efbfd7ea675f216"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-CoreModule-5bd740d6b942991b5453f02ad5bd5be34d80fb922de86a66f936583d24ce4554793e41abe9bfdac26fbb006b22ddecb1857d64b7fb1b0b295efbfd7ea675f216"' : 'id="xs-components-links-module-CoreModule-5bd740d6b942991b5453f02ad5bd5be34d80fb922de86a66f936583d24ce4554793e41abe9bfdac26fbb006b22ddecb1857d64b7fb1b0b295efbfd7ea675f216"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/HeaderComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HeaderComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/MainComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >MainComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/NotFoundComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >NotFoundComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/ShellComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >ShellComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomeModule.html\" data-type=\"entity-link\" >HomeModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-HomeModule-0b396e9db19cc772f920294156a0f5ec2f335100e57b3a2ef1cf3f6fb04deb9a221bb8ec102095a9508fc63cbe750d5cd5303863ce7375cd7a5b3a392b56ab5c"' : 'data-target="#xs-components-links-module-HomeModule-0b396e9db19cc772f920294156a0f5ec2f335100e57b3a2ef1cf3f6fb04deb9a221bb8ec102095a9508fc63cbe750d5cd5303863ce7375cd7a5b3a392b56ab5c"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-HomeModule-0b396e9db19cc772f920294156a0f5ec2f335100e57b3a2ef1cf3f6fb04deb9a221bb8ec102095a9508fc63cbe750d5cd5303863ce7375cd7a5b3a392b56ab5c"' : 'id="xs-components-links-module-HomeModule-0b396e9db19cc772f920294156a0f5ec2f335100e57b3a2ef1cf3f6fb04deb9a221bb8ec102095a9508fc63cbe750d5cd5303863ce7375cd7a5b3a392b56ab5c"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/HomeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >HomeComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/HomeRoutingModule.html\" data-type=\"entity-link\" >HomeRoutingModule</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SuperadministratorModule.html\" data-type=\"entity-link\" >SuperadministratorModule</a>\n                                    <li class=\"chapter inner\">\n                                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#components-links-module-SuperadministratorModule-905775c747fc463a9c48f65fbdeadbb3cc8ef64a83c9f7dd19197aad780ce904c76fbc436eee1ccbffe2ed7f450cdf1035dfbc51f0e37959e4020ee39531e12f"' : 'data-target="#xs-components-links-module-SuperadministratorModule-905775c747fc463a9c48f65fbdeadbb3cc8ef64a83c9f7dd19197aad780ce904c76fbc436eee1ccbffe2ed7f450cdf1035dfbc51f0e37959e4020ee39531e12f"', ">\n                                            <span class=\"icon ion-md-cog\"></span>\n                                            <span>Components</span>\n                                            <span class=\"icon ion-ios-arrow-down\"></span>\n                                        </div>\n                                        <ul class=\"links collapse\" ").concat(isNormalMode ? 'id="components-links-module-SuperadministratorModule-905775c747fc463a9c48f65fbdeadbb3cc8ef64a83c9f7dd19197aad780ce904c76fbc436eee1ccbffe2ed7f450cdf1035dfbc51f0e37959e4020ee39531e12f"' : 'id="xs-components-links-module-SuperadministratorModule-905775c747fc463a9c48f65fbdeadbb3cc8ef64a83c9f7dd19197aad780ce904c76fbc436eee1ccbffe2ed7f450cdf1035dfbc51f0e37959e4020ee39531e12f"', ">\n                                            <li class=\"link\">\n                                                <a href=\"components/SuperadminBranchComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SuperadminBranchComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SuperadminDivisionComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SuperadminDivisionComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SuperadminHomeComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SuperadminHomeComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SuperadminLocationComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SuperadminLocationComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SuperadminOperationComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SuperadminOperationComponent</a>\n                                            </li>\n                                            <li class=\"link\">\n                                                <a href=\"components/SuperadminUnitComponent.html\" data-type=\"entity-link\" data-context=\"sub-entity\" data-context-id=\"modules\" >SuperadminUnitComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"modules/SuperadministratorRoutingModule.html\" data-type=\"entity-link\" >SuperadministratorRoutingModule</a>\n                            </li>\n                </ul>\n                </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#classes-links"' : 'data-target="#xs-classes-links"', ">\n                            <span class=\"icon ion-ios-paper\"></span>\n                            <span>Classes</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"', ">\n                            <li class=\"link\">\n                                <a href=\"classes/BranchImpl.html\" data-type=\"entity-link\" >BranchImpl</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DeviceImpl.html\" data-type=\"entity-link\" >DeviceImpl</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DivisionImpl.html\" data-type=\"entity-link\" >DivisionImpl</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/DutyTitleImpl.html\" data-type=\"entity-link\" >DutyTitleImpl</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/LocationImpl.html\" data-type=\"entity-link\" >LocationImpl</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/OperationImpl.html\" data-type=\"entity-link\" >OperationImpl</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"classes/UnitImpl.html\" data-type=\"entity-link\" >UnitImpl</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#injectables-links"' : 'data-target="#xs-injectables-links"', ">\n                                <span class=\"icon ion-md-arrow-round-down\"></span>\n                                <span>Injectables</span>\n                                <span class=\"icon ion-ios-arrow-down\"></span>\n                            </div>\n                            <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"', ">\n                                <li class=\"link\">\n                                    <a href=\"injectables/DataService.html\" data-type=\"entity-link\" >DataService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#interfaces-links"' : 'data-target="#xs-interfaces-links"', ">\n                            <span class=\"icon ion-md-information-circle-outline\"></span>\n                            <span>Interfaces</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"', ">\n                            <li class=\"link\">\n                                <a href=\"interfaces/Branch.html\" data-type=\"entity-link\" >Branch</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Device.html\" data-type=\"entity-link\" >Device</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Division.html\" data-type=\"entity-link\" >Division</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/DutyTitle.html\" data-type=\"entity-link\" >DutyTitle</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Location.html\" data-type=\"entity-link\" >Location</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Operation.html\" data-type=\"entity-link\" >Operation</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"interfaces/Unit.html\" data-type=\"entity-link\" >Unit</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class=\"chapter\">\n                        <div class=\"simple menu-toggler\" data-toggle=\"collapse\" ").concat(isNormalMode ? 'data-target="#miscellaneous-links"' : 'data-target="#xs-miscellaneous-links"', ">\n                            <span class=\"icon ion-ios-cube\"></span>\n                            <span>Miscellaneous</span>\n                            <span class=\"icon ion-ios-arrow-down\"></span>\n                        </div>\n                        <ul class=\"links collapse \" ").concat(isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"', ">\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/enumerations.html\" data-type=\"entity-link\">Enums</a>\n                            </li>\n                            <li class=\"link\">\n                                <a href=\"miscellaneous/variables.html\" data-type=\"entity-link\">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class=\"chapter\">\n                            <a data-type=\"chapter-link\" href=\"routes.html\"><span class=\"icon ion-ios-git-branch\"></span>Routes</a>\n                        </li>\n                    <li class=\"chapter\">\n                        <a data-type=\"chapter-link\" href=\"coverage.html\"><span class=\"icon ion-ios-stats\"></span>Documentation coverage</a>\n                    </li>\n                    <li class=\"divider\"></li>\n                    <li class=\"copyright\">\n                        Documentation generated using <a href=\"https://compodoc.app/\" target=\"_blank\">\n                            <img data-src=\"images/compodoc-vectorise.png\" class=\"img-responsive\" data-type=\"compodoc-logo\">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        "));
      this.innerHTML = tp.strings;
    }
  }]);
  return _class;
}( /*#__PURE__*/_wrapNativeSuper(HTMLElement)));