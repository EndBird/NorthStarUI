(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!--\n<mat-sidenav-container>\n  <mat-sidenav></mat-sidenav>\n  <mat-sidenav-content>\n    <app-barheader></app-barheader>\n    <main><div>Hello</div>\n    </main>\n  </mat-sidenav-content>\n</mat-sidenav-container> -->\n\n \n    \n      \n      <app-navigationbar></app-navigationbar>\n   \n      <main>\n      <router-outlet></router-outlet>\n      \n    \n    </main>\n \n    \n  \n\n\n\n \n  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/claimreport/claimreport.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/claimreport/claimreport.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\n<h2>Claim Summary</h2>\n<div id=\"claimreportOverviewContainer\">\n<table  >\n \n       <tr>\n            <th colspan=\"3\">Claim - DE767</th>\n            \n            \n         \n\n       </tr>\n\n\n         <tr>\n    <td><div class=\"cellContent\">Date of Notification &nbsp;</div></td>\n     <td class=\"col2\"><div class=\"cellContent\">&nbsp; 2019-02-22</div></td>\n\n         </tr>\n \n  \n         <tr>\n   <td><div class=\"cellContent\">Date of Service &nbsp;</div></td>\n     <td class=\"col2\"><div class=\"cellContent\">&nbsp; 2019-01-22</div></td>\n   \n\n  </tr>\n\n  <tr>\n   <td><div class=\"cellContent\">Place of Service &nbsp;</div></td>\n     <td class=\"col2\"><div class=\"cellContent\">&nbsp; 22B Baker St, London, UK</div></td>\n   \n\n  </tr>\n\n  <tr>\n   <td><div class=\"cellContent\">Status &nbsp;</div></td>\n     <td class=\"col2\"><div class=\"cellContent\">&nbsp; <span style=\"font-weight:bold\">In Progress</span></div></td>\n   \n\n  </tr>\n\n   <tr>\n   <td><div class=\"cellContent\">Closing &nbsp;</div></td>\n     <td class=\"col2\"><div class=\"cellContent\">&nbsp; <span style=\"font-weight:bold\">In Progress</span></div></td>\n   \n\n  </tr>\n\n\n\n  \n \n</table>\n\n<table id = \"policyTable\">\n   <tr>\n            <th colspan=\"3\">Policy</th>\n            \n\n\n       </tr>\n\n   \n\n\n  \n         <tr>\n    <td><div class=\"cellContent\">Policy Number &nbsp;</div></td>\n     <td class=\"col2\"><div class=\"cellContent\">&nbsp; 100542367</div></td>\n\n         </tr>\n</table>\n\n<table id = \"firstPartyTable\">\n   <tr>\n            <th colspan=\"3\">First Party</th>\n            \n\n\n       </tr>\n\n         <tr>\n    <td><div class=\"cellContent\">Name &nbsp;</div></td>\n     <td class=\"col2\"><div class=\"cellContent\">&nbsp; Minh Huynh</div></td>\n\n         </tr>\n          <tr>\n    <td><div class=\"cellContent\">Birthdate &nbsp;</div></td>\n     <td class=\"col2\"><div class=\"cellContent\">&nbsp; 75-03-12</div></td>\n\n         </tr>\n\n           <tr>\n    <td><div class=\"cellContent\">Address &nbsp;</div></td>\n     <td class=\"col2\"><div class=\"cellContent\">&nbsp; 27 Regent St, London, UK</div></td>\n\n         </tr>\n</table>\n\n<table id = \"thirdPartyTable\">\n   <tr>\n            <th colspan=\"3\">Third Party</th>\n            \n\n\n       </tr>\n\n         <tr>\n    <td><div class=\"cellContent\">Name &nbsp;</div></td>\n     <td class=\"col2\"><div class=\"cellContent\">&nbsp; Sherlock Dental Service</div></td>\n\n         </tr>\n    \n           <tr>\n    <td><div class=\"cellContent\">Address &nbsp;</div></td>\n     <td class=\"col2\"><div class=\"cellContent\">&nbsp; 27 Regent St, London, UK</div></td>\n\n         </tr>\n</table>\n\n<table id = \"claimAmountTable\">\n   <tr>\n            <th colspan=\"3\">Claim Amount</th>\n            \n\n\n       </tr>\n\n         <tr>\n    <td><div class=\"cellContent\">Claim Amount &nbsp;</div></td>\n     <td class=\"col2\"><div class=\"cellContent\">&nbsp; $2000</div></td>\n\n         </tr>\n    \n          \n</table>\n</div>\n\n<div class=\"SuspicionsSection\">\n  \n  <h2>Suspicions</h2>\n  <table border = \"1\" cellpadding = \"5\" cellspacing = \"5\" width = \"100%\" max-height = \"100%\">\n         <tr>\n            <th>Variable</th>\n             <th>Proof</th>\n           \n            \n         </tr>\n         <tr  >\n            <td>This patient recently went to the dentist for a cleaning </td>\n           \n            <td>Claim DE654</td>\n            \n         </tr>\n         <tr   >\n            <td>This dental service recently performed another tooth surgery</td>\n           \n            <td>Claim DE777</td>\n            \n         </tr>\n\n         \n      </table>\n</div>\n\n</body>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-welcomeview></app-welcomeview>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dentalclaims/dentalclaims.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dentalclaims/dentalclaims.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<table class=\"foldersview\" >\n\t<tr>\n\n\t\t<td [routerLink]=\"['/highprioritydentalclaims']\"><i class=\"fa fa-folder\"></i> <span class=\"badge\">!</span><figcaption>High Priority</figcaption>\n\t\n</td>\n\t\t<td><i class=\"fa fa-folder\"></i><figcaption>Medium Priority</figcaption>\n\t\n</td>\n\t\t<td><i class=\"fa fa-folder\"></i><figcaption>Low Priority</figcaption>\n\t\n</td>\n\t\t\n\t</tr>\n\n\t\n\n\n\t\n\n\t\n\t\n\n</table>\n\n\n\t \n\t\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/highprioritydentalclaims/highprioritydentalclaims.component.html":
/*!************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/highprioritydentalclaims/highprioritydentalclaims.component.html ***!
  \************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table border = \"1\" cellpadding = \"5\" cellspacing = \"5\" width = \"100%\" max-height = \"100%\">\n         <tr>\n            <th>Claims</th>\n             <th>Score</th>\n            <th>Date</th>\n            \n         </tr>\n         <tr  [routerLink]=\"['/claimreport']\" (mouseover)=\"changecolour(oddclaim)\" (mouseleave)=\"removecolour(oddclaim)\" #oddclaim>\n            <td><a  ><span class=\"claim-description\">Tooth surgery</span></a></td>\n            <td  class=\"claim-score\"><span>95%</span></td>\n            <td><span class=\"claim-description\">2019-02-22</span></td>\n            \n         </tr>\n         <tr  [routerLink]=\"['/claimreport']\" >\n            <td><a  [routerLink]=\"['/claimreport']\"  ><span class=\"claim-description\">Cavity Filling</span></a></td>\n            <td  class=\"claim-score\"><span>55%</span></td>\n            <td><span class=\"claim-description\">2019-03-12</span></td>\n            \n         </tr>\n\n         <tr  [routerLink]=\"['/claimreport']\" (mouseover)=\"changecolour(oddclaim1)\" (mouseleave)=\"removecolour(oddclaim1)\" #oddclaim1>\n            <td><a  [routerLink]=\"['/claimreport']\"  ><span class=\"claim-description\">Cavity Filling</span></a></td>\n            <td  class=\"claim-scorelow\"><span>25%</span></td>\n            <td><span class=\"claim-description\">2019-04-12</span></td>\n            \n         </tr>\n      </table>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigationbar/navigationbar.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigationbar/navigationbar.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar>  \n  \n  <div id=\"logo\">\n     <img src=\"..\\assets\\logo.jpg\">\n  </div>\n   \n \n \n  <mat-toolbar-row routerLink=\"/\" (click) = \"clickColours(homenav)\" (mouseover)=\"changecolour(homenav)\" (mouseleave) = \"removecolour(homenav)\" #homenav>\n   \n    <a mat-list-item class=\"nav-caption\" >\n    Home\n  </a>\n    \n  </mat-toolbar-row>\n\n  <mat-toolbar-row  [routerLink]=\"['/dentalclaims']\" (click) = \"clickColours(dentalnav)\" (mouseover)=\"changecolour(dentalnav)\" (mouseleave) = \"removecolour(dentalnav)\" #dentalnav id=\"dental-nav\">\n    <a mat-list-item  class=\"nav-caption\">\n      Dental\n    </a >\n   \n  </mat-toolbar-row>\n  \n  \n</mat-toolbar>\n\n\n\n\n\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcomeview/welcomeview.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcomeview/welcomeview.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\t\n\t<h1>Welcome, User!</h1>\n\n\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\napp-root {\r\n\twidth: 100%;\r\n\theight: 100%;\r\n}\r\n\r\nmain {\r\n\tposition: absolute;\r\n\t\r\n\twidth: 85%;\r\n\theight: 100%;\r\n\tleft: 15%;\r\n\t\r\n}\r\n\r\napp-navigationbar {\r\n\tposition: absolute;\r\n\twidth: 15%;\r\n\theight: 100%;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBR0E7Q0FDQyxXQUFXO0NBQ1gsWUFBWTtBQUNiOztBQUVBO0NBQ0Msa0JBQWtCOztDQUVsQixVQUFVO0NBQ1YsWUFBWTtDQUNaLFNBQVM7O0FBRVY7O0FBR0E7Q0FDQyxrQkFBa0I7Q0FDbEIsVUFBVTtDQUNWLFlBQVk7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5cclxuYXBwLXJvb3Qge1xyXG5cdHdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxubWFpbiB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdFxyXG5cdHdpZHRoOiA4NSU7XHJcblx0aGVpZ2h0OiAxMDAlO1xyXG5cdGxlZnQ6IDE1JTtcclxuXHRcclxufVxyXG5cdFxyXG5cclxuYXBwLW5hdmlnYXRpb25iYXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTUlO1xyXG5cdGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'my-app';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _navigationbar_navigationbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navigationbar/navigationbar.component */ "./src/app/navigationbar/navigationbar.component.ts");
/* harmony import */ var _welcomeview_welcomeview_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./welcomeview/welcomeview.component */ "./src/app/welcomeview/welcomeview.component.ts");
/* harmony import */ var _dentalclaims_dentalclaims_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dentalclaims/dentalclaims.component */ "./src/app/dentalclaims/dentalclaims.component.ts");
/* harmony import */ var _highprioritydentalclaims_highprioritydentalclaims_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./highprioritydentalclaims/highprioritydentalclaims.component */ "./src/app/highprioritydentalclaims/highprioritydentalclaims.component.ts");
/* harmony import */ var _claimreport_claimreport_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./claimreport/claimreport.component */ "./src/app/claimreport/claimreport.component.ts");













let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
            _navigationbar_navigationbar_component__WEBPACK_IMPORTED_MODULE_8__["NavigationbarComponent"],
            _welcomeview_welcomeview_component__WEBPACK_IMPORTED_MODULE_9__["WelcomeviewComponent"],
            _dentalclaims_dentalclaims_component__WEBPACK_IMPORTED_MODULE_10__["DentalclaimsComponent"],
            _highprioritydentalclaims_highprioritydentalclaims_component__WEBPACK_IMPORTED_MODULE_11__["HighprioritydentalclaimsComponent"],
            _claimreport_claimreport_component__WEBPACK_IMPORTED_MODULE_12__["ClaimreportComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot([{ path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"] }, { path: 'dentalclaims', component: _dentalclaims_dentalclaims_component__WEBPACK_IMPORTED_MODULE_10__["DentalclaimsComponent"] },
                { path: 'highprioritydentalclaims', component: _highprioritydentalclaims_highprioritydentalclaims_component__WEBPACK_IMPORTED_MODULE_11__["HighprioritydentalclaimsComponent"] },
                { path: 'claimreport', component: _claimreport_claimreport_component__WEBPACK_IMPORTED_MODULE_12__["ClaimreportComponent"] }]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/claimreport/claimreport.component.css":
/*!*******************************************************!*\
  !*** ./src/app/claimreport/claimreport.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("tr th {\r\n\r\n\tfont-style: normal;\r\n\tfont-size: 20px;\r\n\t\r\n}\r\n\r\n\r\n\r\nth {vertical-align: bottom;}\r\n\r\n\r\n\r\n#claimreportOverviewContainer table {\r\n\tposition: absolute;\r\n\tborder-style: solid;\r\n\tborder-collapse: separate;\r\n\tborder-width: 1px;\r\n\tborder-radius: 5px;\r\n\t width: 350px;\r\n\t padding: 10px;\r\n\t\t\r\n}\r\n\r\n\r\n\r\ntd {\r\n\tborder-bottom: 1px dotted grey;\r\n\t\r\n\t\r\n}\r\n\r\n\r\n\r\n.cellContent {\r\n\tposition: relative;\r\n\tdisplay: inline;\r\n\ttop: 5px;\r\n\tbackground-color: white;\r\n}\r\n\r\n\r\n\r\n.col2 {\r\n\ttext-align: right;\r\n}\r\n\r\n\r\n\r\n#claimreportOverviewContainer {\r\n\tposition: absolute;\r\n\t\r\n\ttop: 10%;\r\n\tleft: 2%;\r\n\twidth: 800px;\r\n\theight: 400px;\r\n\tborder-style: none;\r\n}\r\n\r\n\r\n\r\n#policyTable {\r\n\tposition: absolute;\r\n\tbottom: 0%;\r\n}\r\n\r\n\r\n\r\n#firstPartyTable {\r\n\tposition: absolute;\r\n\ttop: 0%;\r\n\tright: 0%;\r\n\r\n}\r\n\r\n\r\n\r\n#thirdPartyTable {\r\n\tposition: absolute;\r\n\ttop:200px;\r\n\tright: 0%;\r\n\r\n}\r\n\r\n\r\n\r\n#claimAmountTable {\r\n\tposition: absolute;\r\n\tbottom:0%;\r\n\tright: 0%;\r\n}\r\n\r\n\r\n\r\n.SuspicionsSection {\r\n\tposition: absolute;\r\n\ttop: 500px;\r\n\twidth: 800px;\r\n\tleft: 2%;\r\n}\r\n\r\n\r\n\r\n.SuspicionsSection tr:nth-child(even) {\r\n  background-color: #f2eded;\r\n\r\n}\r\n\r\n\r\n\r\n.SuspicionsSection table {\r\n border-collapse: collapse;\r\n \r\n  width: 100%;\r\n \r\n  \r\n}\r\n\r\n\r\n\r\n.SuspicionsSection td, .SuspicionsSection th {\r\n  border: 1px solid #dddddd;\r\n \r\n  text-align: left;\r\n\r\n  padding: 8px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2xhaW1yZXBvcnQvY2xhaW1yZXBvcnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Q0FFQyxrQkFBa0I7Q0FDbEIsZUFBZTs7QUFFaEI7Ozs7QUFJQSxJQUFJLHNCQUFzQixDQUFDOzs7O0FBRzNCO0NBQ0Msa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtFQUNqQixZQUFZO0VBQ1osYUFBYTs7QUFFZjs7OztBQUVBO0NBQ0MsOEJBQThCOzs7QUFHL0I7Ozs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixlQUFlO0NBQ2YsUUFBUTtDQUNSLHVCQUF1QjtBQUN4Qjs7OztBQUlBO0NBQ0MsaUJBQWlCO0FBQ2xCOzs7O0FBRUE7Q0FDQyxrQkFBa0I7O0NBRWxCLFFBQVE7Q0FDUixRQUFRO0NBQ1IsWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7QUFDbkI7Ozs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0FBQ1g7Ozs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixPQUFPO0NBQ1AsU0FBUzs7QUFFVjs7OztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxTQUFTOztBQUVWOzs7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsU0FBUztDQUNULFNBQVM7QUFDVjs7OztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixZQUFZO0NBQ1osUUFBUTtBQUNUOzs7O0FBRUE7RUFDRSx5QkFBeUI7O0FBRTNCOzs7O0FBRUE7Q0FDQyx5QkFBeUI7O0VBRXhCLFdBQVc7OztBQUdiOzs7O0FBRUE7RUFDRSx5QkFBeUI7O0VBRXpCLGdCQUFnQjs7RUFFaEIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvY2xhaW1yZXBvcnQvY2xhaW1yZXBvcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRyIHRoIHtcclxuXHJcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xyXG5cdGZvbnQtc2l6ZTogMjBweDtcclxuXHRcclxufVxyXG5cclxuXHJcblxyXG50aCB7dmVydGljYWwtYWxpZ246IGJvdHRvbTt9XHJcblxyXG5cclxuI2NsYWltcmVwb3J0T3ZlcnZpZXdDb250YWluZXIgdGFibGUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3JkZXItc3R5bGU6IHNvbGlkO1xyXG5cdGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XHJcblx0Ym9yZGVyLXdpZHRoOiAxcHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNXB4O1xyXG5cdCB3aWR0aDogMzUwcHg7XHJcblx0IHBhZGRpbmc6IDEwcHg7XHJcblx0XHRcclxufVxyXG5cclxudGQge1xyXG5cdGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgZ3JleTtcclxuXHRcclxuXHRcclxufVxyXG5cclxuLmNlbGxDb250ZW50IHtcclxuXHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0ZGlzcGxheTogaW5saW5lO1xyXG5cdHRvcDogNXB4O1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuXHJcbi5jb2wyIHtcclxuXHR0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuI2NsYWltcmVwb3J0T3ZlcnZpZXdDb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcclxuXHR0b3A6IDEwJTtcclxuXHRsZWZ0OiAyJTtcclxuXHR3aWR0aDogODAwcHg7XHJcblx0aGVpZ2h0OiA0MDBweDtcclxuXHRib3JkZXItc3R5bGU6IG5vbmU7XHJcbn1cclxuXHJcbiNwb2xpY3lUYWJsZSB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdGJvdHRvbTogMCU7XHJcbn1cclxuXHJcbiNmaXJzdFBhcnR5VGFibGUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDAlO1xyXG5cdHJpZ2h0OiAwJTtcclxuXHJcbn1cclxuXHJcbiN0aGlyZFBhcnR5VGFibGUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6MjAwcHg7XHJcblx0cmlnaHQ6IDAlO1xyXG5cclxufVxyXG5cclxuI2NsYWltQW1vdW50VGFibGUge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRib3R0b206MCU7XHJcblx0cmlnaHQ6IDAlO1xyXG59XHJcblxyXG4uU3VzcGljaW9uc1NlY3Rpb24ge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwMHB4O1xyXG5cdHdpZHRoOiA4MDBweDtcclxuXHRsZWZ0OiAyJTtcclxufVxyXG5cclxuLlN1c3BpY2lvbnNTZWN0aW9uIHRyOm50aC1jaGlsZChldmVuKSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyZWRlZDtcclxuXHJcbn1cclxuXHJcbi5TdXNwaWNpb25zU2VjdGlvbiB0YWJsZSB7XHJcbiBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiBcclxuICBcclxufVxyXG5cclxuLlN1c3BpY2lvbnNTZWN0aW9uIHRkLCAuU3VzcGljaW9uc1NlY3Rpb24gdGgge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiBcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICBwYWRkaW5nOiA4cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/claimreport/claimreport.component.ts":
/*!******************************************************!*\
  !*** ./src/app/claimreport/claimreport.component.ts ***!
  \******************************************************/
/*! exports provided: ClaimreportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimreportComponent", function() { return ClaimreportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ClaimreportComponent = class ClaimreportComponent {
    constructor() { }
    ngOnInit() {
    }
};
ClaimreportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-claimreport',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./claimreport.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/claimreport/claimreport.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./claimreport.component.css */ "./src/app/claimreport/claimreport.component.css")).default]
    })
], ClaimreportComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\napp-welcomeview {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\t\r\n\t\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLFlBQVk7OztBQUdiIiwiZmlsZSI6InNyYy9hcHAvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5hcHAtd2VsY29tZXZpZXcge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0XHJcblx0XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/dentalclaims/dentalclaims.component.css":
/*!*********************************************************!*\
  !*** ./src/app/dentalclaims/dentalclaims.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n.badge {\r\n\tvertical-align: top;\r\n\tbackground-color: red;\r\n\t\r\n\t\r\n\t\r\n}\r\n\r\n\r\n\r\n\r\ni {\r\n\tfont-size: 50px;\r\n}\r\n\r\n\r\n\r\n\r\n.foldersview { position: absolute;\r\n\ttop: 3%;\r\nmax-height: 100%;\r\nwidth: 100%;\r\n  \r\n}\r\n\r\n\r\n\r\n\r\ntd {\r\n\theight: 75px;\r\n\twidth:33%;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n\toutline: none;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVudGFsY2xhaW1zL2RlbnRhbGNsYWltcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtDQUNDLG1CQUFtQjtDQUNuQixxQkFBcUI7Ozs7QUFJdEI7Ozs7O0FBS0E7Q0FDQyxlQUFlO0FBQ2hCOzs7OztBQUdBLGVBQWUsa0JBQWtCO0NBQ2hDLE9BQU87QUFDUixnQkFBZ0I7QUFDaEIsV0FBVzs7QUFFWDs7Ozs7QUFFQTtDQUNDLFlBQVk7Q0FDWixTQUFTO0NBQ1Qsa0JBQWtCO0NBQ2xCLGVBQWU7Q0FDZixhQUFhO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9kZW50YWxjbGFpbXMvZGVudGFsY2xhaW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLmJhZGdlIHtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuXHRcclxuXHRcclxuXHRcclxufVxyXG5cclxuXHJcblxyXG5cclxuaSB7XHJcblx0Zm9udC1zaXplOiA1MHB4O1xyXG59XHJcblxyXG5cclxuLmZvbGRlcnN2aWV3IHsgcG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogMyU7XHJcbm1heC1oZWlnaHQ6IDEwMCU7XHJcbndpZHRoOiAxMDAlO1xyXG4gIFxyXG59XHJcblxyXG50ZCB7XHJcblx0aGVpZ2h0OiA3NXB4O1xyXG5cdHdpZHRoOjMzJTtcclxuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/dentalclaims/dentalclaims.component.ts":
/*!********************************************************!*\
  !*** ./src/app/dentalclaims/dentalclaims.component.ts ***!
  \********************************************************/
/*! exports provided: DentalclaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DentalclaimsComponent", function() { return DentalclaimsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DentalclaimsComponent = class DentalclaimsComponent {
    constructor() { }
    ngOnInit() {
    }
};
DentalclaimsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dentalclaims',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dentalclaims.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dentalclaims/dentalclaims.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dentalclaims.component.css */ "./src/app/dentalclaims/dentalclaims.component.css")).default]
    })
], DentalclaimsComponent);



/***/ }),

/***/ "./src/app/highprioritydentalclaims/highprioritydentalclaims.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/highprioritydentalclaims/highprioritydentalclaims.component.css ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \r\n table {\r\n border-collapse: collapse;\r\n  width: 100%;\r\n  \r\n}\r\n\r\ntd, th {\r\n  border: 1px solid #dddddd;\r\n \r\n  text-align: left;\r\n\r\n  padding: 8px;\r\n}\r\n\r\ntr:hover, a:active{\r\n\tbackground-color: lightgray; \r\n}\r\n\r\ntr {\r\n\t border-left:  5px solid #dddddd;\r\n\t \r\n}\r\n\r\ntr:nth-child(even) {\r\n  background-color: #f2eded;\r\n}\r\n\r\n.claim-score {\r\n\tbackground-color: #e8bce2;\r\n}\r\n\r\n.claim-scorelow {\r\n\tbackground-color: #9ed9b7;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlnaHByaW9yaXR5ZGVudGFsY2xhaW1zL2hpZ2hwcmlvcml0eWRlbnRhbGNsYWltcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Q0FDQztDQUNBLHlCQUF5QjtFQUN4QixXQUFXOztBQUViOztBQUVBO0VBQ0UseUJBQXlCOztFQUV6QixnQkFBZ0I7O0VBRWhCLFlBQVk7QUFDZDs7QUFDQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFDQTtFQUNFLCtCQUErQjs7QUFFakM7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9oaWdocHJpb3JpdHlkZW50YWxjbGFpbXMvaGlnaHByaW9yaXR5ZGVudGFsY2xhaW1zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIgXHJcbiB0YWJsZSB7XHJcbiBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIFxyXG59XHJcblxyXG50ZCwgdGgge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGRkZGQ7XHJcbiBcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICBwYWRkaW5nOiA4cHg7XHJcbn1cclxudHI6aG92ZXIsIGE6YWN0aXZle1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JheTsgXHJcbn1cclxudHIge1xyXG5cdCBib3JkZXItbGVmdDogIDVweCBzb2xpZCAjZGRkZGRkO1xyXG5cdCBcclxufVxyXG5cclxudHI6bnRoLWNoaWxkKGV2ZW4pIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJlZGVkO1xyXG59XHJcblxyXG4uY2xhaW0tc2NvcmUge1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNlOGJjZTI7XHJcbn1cclxuXHJcbi5jbGFpbS1zY29yZWxvdyB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogIzllZDliNztcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/highprioritydentalclaims/highprioritydentalclaims.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/highprioritydentalclaims/highprioritydentalclaims.component.ts ***!
  \********************************************************************************/
/*! exports provided: HighprioritydentalclaimsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighprioritydentalclaimsComponent", function() { return HighprioritydentalclaimsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HighprioritydentalclaimsComponent = class HighprioritydentalclaimsComponent {
    constructor() { }
    ngOnInit() {
    }
    changecolour(x) {
        x.style.backgroundColor = 'lightgray';
    }
    removecolour(x) {
        x.style.backgroundColor = '#f2eded';
    }
};
HighprioritydentalclaimsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-highprioritydentalclaims',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./highprioritydentalclaims.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/highprioritydentalclaims/highprioritydentalclaims.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./highprioritydentalclaims.component.css */ "./src/app/highprioritydentalclaims/highprioritydentalclaims.component.css")).default]
    })
], HighprioritydentalclaimsComponent);



/***/ }),

/***/ "./src/app/navigationbar/navigationbar.component.css":
/*!***********************************************************!*\
  !*** ./src/app/navigationbar/navigationbar.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a {\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n \r\na:hover, a:active{\r\n    color: lightgray;\r\n}\r\n \r\nmat-icon {\r\n     vertical-align:bottom;\r\n}\r\n \r\n.nav-caption{\r\n    display: inline-block;\r\n    \r\n   \r\n    height: 24px;\r\n    \r\n     \r\n}\r\n \r\nmat-toolbar-row {\r\n    outline: none;\r\n    display: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n   \r\n   \r\n   \r\n}\r\n \r\nmat-toolbar {\r\n    \r\n\twidth: 100%;\r\n    height: 100%;\r\n    box-shadow: 5px -1px darkgrey;\r\n    background-color: rgb(0, 0, 255);\r\n     \r\n     \r\n\r\n}\r\n \r\n#logo {\r\ndisplay: flex;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    height: 15%;\r\n\r\n}\r\n \r\n#logo img {\r\nmax-width:100%;\r\nmax-height:100%;\r\n\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbmJhci9uYXZpZ2F0aW9uYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxxQkFBcUI7SUFDckIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFJQTtLQUNLLHFCQUFxQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjs7O0lBR3JCLFlBQVk7OztBQUdoQjs7QUFHQTtJQUNJLGFBQWE7SUFDYixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1Qjs7OztBQUkzQjs7QUFDQTs7Q0FFQyxXQUFXO0lBQ1IsWUFBWTtJQUNaLDZCQUE2QjtJQUM3QixnQ0FBZ0M7Ozs7QUFJcEM7O0FBRUE7QUFDQSxhQUFhO0lBQ1QsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXOztBQUVmOztBQUNBO0FBQ0EsY0FBYztBQUNkLGVBQWU7O0FBRWYiLCJmaWxlIjoic3JjL2FwcC9uYXZpZ2F0aW9uYmFyL25hdmlnYXRpb25iYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcbiBcclxuYTpob3ZlciwgYTphY3RpdmV7XHJcbiAgICBjb2xvcjogbGlnaHRncmF5O1xyXG59XHJcblxyXG5cclxuXHJcbm1hdC1pY29uIHtcclxuICAgICB2ZXJ0aWNhbC1hbGlnbjpib3R0b207XHJcbn1cclxuIFxyXG4ubmF2LWNhcHRpb257XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBcclxuICAgXHJcbiAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICBcclxuICAgICBcclxufVxyXG4gIFxyXG5cclxubWF0LXRvb2xiYXItcm93IHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBcclxuICAgXHJcbiAgIFxyXG59XHJcbm1hdC10b29sYmFyIHtcclxuICAgIFxyXG5cdHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYm94LXNoYWRvdzogNXB4IC0xcHggZGFya2dyZXk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMjU1KTtcclxuICAgICBcclxuICAgICBcclxuXHJcbn1cclxuXHJcbiNsb2dvIHtcclxuZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTUlO1xyXG5cclxufVxyXG4jbG9nbyBpbWcge1xyXG5tYXgtd2lkdGg6MTAwJTtcclxubWF4LWhlaWdodDoxMDAlO1xyXG5cclxufVxyXG5cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/navigationbar/navigationbar.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/navigationbar/navigationbar.component.ts ***!
  \**********************************************************/
/*! exports provided: NavigationbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationbarComponent", function() { return NavigationbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NavigationbarComponent = class NavigationbarComponent {
    constructor() { }
    ngOnInit() {
    }
    changecolour(x) {
        if (x.style.backgroundColor == 'darkgray') {
            return;
        }
        x.style.backgroundColor = 'lightgray';
    }
    removecolour(x) {
        if (x.style.backgroundColor == 'darkgray') {
            return;
        }
        x.style.backgroundColor = 'transparent';
    }
    clickColours(x) {
        var allelements = document.getElementsByTagName("mat-toolbar-row");
        var i;
        for (i = 0; i < allelements.length; i++) {
            var element = allelements[i];
            element.style.backgroundColor = "transparent";
        }
        x.style.backgroundColor = "darkgray";
    }
};
NavigationbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navigationbar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./navigationbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigationbar/navigationbar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./navigationbar.component.css */ "./src/app/navigationbar/navigationbar.component.css")).default]
    })
], NavigationbarComponent);



/***/ }),

/***/ "./src/app/welcomeview/welcomeview.component.css":
/*!*******************************************************!*\
  !*** ./src/app/welcomeview/welcomeview.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("h1 {\r\n\tposition: absolute;\r\n\ttop: 50%;\r\n\tleft: 50%;\r\n transform: translate(-50%, -50%);\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZXZpZXcvd2VsY29tZXZpZXcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGtCQUFrQjtDQUNsQixRQUFRO0NBQ1IsU0FBUztDQUVSLGdDQUFnQzs7QUFFbEMiLCJmaWxlIjoic3JjL2FwcC93ZWxjb21ldmlldy93ZWxjb21ldmlldy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDEge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0LW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG5cclxufVxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/welcomeview/welcomeview.component.ts":
/*!******************************************************!*\
  !*** ./src/app/welcomeview/welcomeview.component.ts ***!
  \******************************************************/
/*! exports provided: WelcomeviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeviewComponent", function() { return WelcomeviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WelcomeviewComponent = class WelcomeviewComponent {
    constructor() { }
    ngOnInit() {
    }
};
WelcomeviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcomeview',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcomeview.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcomeview/welcomeview.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcomeview.component.css */ "./src/app/welcomeview/welcomeview.component.css")).default]
    })
], WelcomeviewComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\mlh27\PycharmProjects\Team-Hope\NorthStarUI\frontend\my-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map