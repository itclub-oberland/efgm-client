(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/management/management-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/management/management-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ManagementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementRoutingModule", function() { return ManagementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_entrypoint_entrypoint_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/entrypoint/entrypoint.component */ "./src/app/management/shared/entrypoint/entrypoint.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/management/pages/home/home.component.ts");





var routes = [
    {
        path: 'management', component: _shared_entrypoint_entrypoint_component__WEBPACK_IMPORTED_MODULE_3__["EntrypointComponent"],
        children: [
            { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] }
        ]
    },
];
var ManagementRoutingModule = /** @class */ (function () {
    function ManagementRoutingModule() {
    }
    ManagementRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ManagementRoutingModule);
    return ManagementRoutingModule;
}());



/***/ }),

/***/ "./src/app/management/management.module.ts":
/*!*************************************************!*\
  !*** ./src/app/management/management.module.ts ***!
  \*************************************************/
/*! exports provided: ManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManagementModule", function() { return ManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/management/pages/home/home.component.ts");
/* harmony import */ var _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/layout/header/header.component */ "./src/app/management/shared/layout/header/header.component.ts");
/* harmony import */ var _shared_layout_content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/layout/content/content.component */ "./src/app/management/shared/layout/content/content.component.ts");
/* harmony import */ var _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/layout/footer/footer.component */ "./src/app/management/shared/layout/footer/footer.component.ts");
/* harmony import */ var _shared_entrypoint_entrypoint_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/entrypoint/entrypoint.component */ "./src/app/management/shared/entrypoint/entrypoint.component.ts");
/* harmony import */ var _management_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./management-routing.module */ "./src/app/management/management-routing.module.ts");









var ManagementModule = /** @class */ (function () {
    function ManagementModule() {
    }
    ManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _shared_layout_content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"], _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _shared_entrypoint_entrypoint_component__WEBPACK_IMPORTED_MODULE_7__["EntrypointComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _management_routing_module__WEBPACK_IMPORTED_MODULE_8__["ManagementRoutingModule"]
            ],
            bootstrap: [_shared_entrypoint_entrypoint_component__WEBPACK_IMPORTED_MODULE_7__["EntrypointComponent"]]
        })
    ], ManagementModule);
    return ManagementModule;
}());



/***/ }),

/***/ "./src/app/management/pages/home/home.component.html":
/*!***********************************************************!*\
  !*** ./src/app/management/pages/home/home.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  home works!\n</p>\n"

/***/ }),

/***/ "./src/app/management/pages/home/home.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/management/pages/home/home.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZW1lbnQvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/management/pages/home/home.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/management/pages/home/home.component.ts ***!
  \*********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'efgm-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/management/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/management/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/management/shared/entrypoint/entrypoint.component.html":
/*!************************************************************************!*\
  !*** ./src/app/management/shared/entrypoint/entrypoint.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<efgm-header></efgm-header>\n<efgm-content>\n    <router-outlet></router-outlet>\n</efgm-content>\n<efgm-footer></efgm-footer>\n"

/***/ }),

/***/ "./src/app/management/shared/entrypoint/entrypoint.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/management/shared/entrypoint/entrypoint.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZW1lbnQvc2hhcmVkL2VudHJ5cG9pbnQvZW50cnlwb2ludC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/management/shared/entrypoint/entrypoint.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/management/shared/entrypoint/entrypoint.component.ts ***!
  \**********************************************************************/
/*! exports provided: EntrypointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrypointComponent", function() { return EntrypointComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EntrypointComponent = /** @class */ (function () {
    function EntrypointComponent() {
    }
    EntrypointComponent.prototype.ngOnInit = function () {
    };
    EntrypointComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'efgm-entrypoint',
            template: __webpack_require__(/*! ./entrypoint.component.html */ "./src/app/management/shared/entrypoint/entrypoint.component.html"),
            styles: [__webpack_require__(/*! ./entrypoint.component.scss */ "./src/app/management/shared/entrypoint/entrypoint.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EntrypointComponent);
    return EntrypointComponent;
}());



/***/ }),

/***/ "./src/app/management/shared/layout/content/content.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/management/shared/layout/content/content.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  content works!\n</p>\n"

/***/ }),

/***/ "./src/app/management/shared/layout/content/content.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/management/shared/layout/content/content.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZW1lbnQvc2hhcmVkL2xheW91dC9jb250ZW50L2NvbnRlbnQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/management/shared/layout/content/content.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/management/shared/layout/content/content.component.ts ***!
  \***********************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'efgm-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/management/shared/layout/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/management/shared/layout/content/content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/management/shared/layout/footer/footer.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/management/shared/layout/footer/footer.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/management/shared/layout/footer/footer.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/management/shared/layout/footer/footer.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hbmFnZW1lbnQvc2hhcmVkL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/management/shared/layout/footer/footer.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/management/shared/layout/footer/footer.component.ts ***!
  \*********************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'efgm-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/management/shared/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/management/shared/layout/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/management/shared/layout/header/header.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/management/shared/layout/header/header.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FIX THIS FILE-->\n<!-- https://tburleson-layouts-demos.firebaseapp.com/#/docs -->\n<div style=\"text-align:center\"></div>\n<div id=\"main\">\n  <div id=\"header-area\">\n    <div id=\"homeAndLanguageArea\">\n      <div id=\"home-icon\"> <i class=\"material-icons\" id=\"home-icon\">\n          home\n        </i></div>\n      <div id=\"language-area\">\n        <a href=\"\">Deutsch</a>\n        <a href=\"\">English</a>\n        <a href=\"\">Français</a></div>\n        <a href=\"\">Italien</a>\n        <a href=\"\" [routerLink]=\"['/', 'home']\">logout</a>\n    </div>\n    <div class=\"orange-border\"></div>\n    <div id=\"logoAndSearchArea\">\n      <div id=\"logo\"></div>\n      <div id=\"search\"><input type=\"text\" placeholder=\"Suchen\"></div>\n      <i class=\"material-icons\" id=\"search-icon\">\n        search\n      </i>\n    </div>\n\n  </div>\n</div>\n\n<div id=\"dashboard\">\n  <button mat-raised-button>Anfragen</button>\n  <button mat-raised-button>Offerten</button>\n  <button mat-raised-button>Activity Log</button>\n  <button mat-raised-button>Message</button>\n\n</div>\n"

/***/ }),

/***/ "./src/app/management/shared/layout/header/header.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/management/shared/layout/header/header.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#main {\n  display: flex;\n  justify-content: center;\n  width: 100%; }\n\n#header-area {\n  display: flex;\n  width: 1100px;\n  height: 200px;\n  justify-content: center;\n  flex-direction: column; }\n\n#homeAndLanguageArea {\n  display: flex;\n  width: 100%;\n  height: 20px;\n  background-color: #F2F2F2;\n  margin-top: 0px; }\n\n.orange-border {\n  display: flex;\n  height: 5px;\n  width: 100%;\n  background-color: #D48A04;\n  justify-content: center; }\n\n#logoAndSearchArea {\n  display: flex;\n  width: 100%;\n  align-items: center; }\n\n#logo {\n  width: 360px;\n  height: 100px;\n  background-image: url(\"/assets/logo.png\");\n  justify-content: flex-start; }\n\ninput {\n  width: 310px;\n  height: 32px;\n  background-color: #F2F2F2;\n  font-size: 14px;\n  font-weight: bold;\n  border: none;\n  padding-left: 20px;\n  font-style: italic;\n  justify-content: flex-end;\n  margin-left: 400px; }\n\n#search-icon {\n  margin-left: -25px; }\n\n#home-icon {\n  justify-content: flex-start;\n  text-align: left;\n  color: #505050;\n  width: 20px;\n  height: 17px; }\n\na {\n  text-decoration: none;\n  margin-right: 10px;\n  font-family: Frutiger, \"Helvetica Neue\", Helvetica, Arial, sans-serif; }\n\n#language-area {\n  margin-left: 73%; }\n\n#dashboard {\n  display: block;\n  flex-direction: column;\n  width: 250px;\n  height: 380px;\n  margin-left: 250px;\n  background-color: #D48A04;\n  opacity: 0.7;\n  padding: 10px; }\n\nbutton {\n  display: block;\n  width: 200px;\n  height: 80px;\n  margin-left: 25px; }\n\nbutton:first-child {\n  margin-top: 30px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9Eb2dhbi9jZGRldi9BTkdVTEFSL2VmZ20tY2xpZW50L3NyYy9hcHAvbWFuYWdlbWVudC9zaGFyZWQvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLFdBQVcsRUFBQTs7QUFHYjtFQUNFLGFBQWE7RUFDYixhQUFhO0VBQ2IsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qix1QkFBdUIsRUFBQTs7QUFJekI7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IseUNBQXlDO0VBQ3pDLDJCQUEyQixFQUFBOztBQUc3QjtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLDJCQUEyQjtFQUMzQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBR2Q7RUFDRSxxQkFBcUI7RUFDckIsa0JBQWtCO0VBQ2xCLHFFQUFxRSxFQUFBOztBQUd2RTtFQUNFLGdCQUFnQixFQUFBOztBQUdsQjtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixhQUFhLEVBQUE7O0FBS2Y7RUFBUSxjQUFjO0VBQ3BCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBSW5CO0VBQW1CLGdCQUFnQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbWFuYWdlbWVudC9zaGFyZWQvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNtYWluIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jaGVhZGVyLWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTEwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuI2hvbWVBbmRMYW5ndWFnZUFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJGMkYyO1xuICBtYXJnaW4tdG9wOiAwcHg7XG59XG5cbi5vcmFuZ2UtYm9yZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiA1cHg7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDQ4QTA0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxufVxuXG4jbG9nb0FuZFNlYXJjaEFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuI2xvZ28ge1xuICB3aWR0aDogMzYwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnL2Fzc2V0cy9sb2dvLnBuZycpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDMxMHB4O1xuICBoZWlnaHQ6IDMycHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGMkYyRjI7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIG1hcmdpbi1sZWZ0OiA0MDBweDtcbn1cblxuI3NlYXJjaC1pY29uIHtcbiAgbWFyZ2luLWxlZnQ6IC0yNXB4O1xufVxuXG4jaG9tZS1pY29uIHtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzUwNTA1MDtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMTdweDtcbn1cblxuYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBmb250LWZhbWlseTogRnJ1dGlnZXIsIFwiSGVsdmV0aWNhIE5ldWVcIiwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbn1cblxuI2xhbmd1YWdlLWFyZWEge1xuICBtYXJnaW4tbGVmdDogNzMlO1xufVxuXG4jZGFzaGJvYXJkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAyNTBweDtcbiAgaGVpZ2h0OiAzODBweDtcbiAgbWFyZ2luLWxlZnQ6IDI1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRDQ4QTA0O1xuICBvcGFjaXR5OiAwLjc7XG4gIHBhZGRpbmc6IDEwcHg7XG5cblxufVxuXG5idXR0b24ge2Rpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XG5cbn1cblxuYnV0dG9uOmZpcnN0LWNoaWxke21hcmdpbi10b3A6IDMwcHg7fVxuIl19 */"

/***/ }),

/***/ "./src/app/management/shared/layout/header/header.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/management/shared/layout/header/header.component.ts ***!
  \*********************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'efgm-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/management/shared/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/management/shared/layout/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/public/pages/home/home.component.html":
/*!*******************************************************!*\
  !*** ./src/app/public/pages/home/home.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<efgm-header></efgm-header>\n<efgm-content>\n  <router-outlet></router-outlet>\n</efgm-content>\n<efgm-footer></efgm-footer>\n"

/***/ }),

/***/ "./src/app/public/pages/home/home.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/public/pages/home/home.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/public/pages/home/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/public/pages/home/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'efgm-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/public/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/public/pages/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/public/pages/login/login.component.html":
/*!*********************************************************!*\
  !*** ./src/app/public/pages/login/login.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div fxLayout=\"column\">\n  <div fxFlex=\"20\"> &nbsp;</div>\n  <div fxFlex=\"50\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\n    <mat-card class=\"example-card\"  >\n      <mat-card-header>\n        <mat-card-title>Login</mat-card-title>\n      </mat-card-header>\n      <mat-card-content>\n        <form class=\"example-form\">\n          <table class=\"example-full-width\" cellspacing=\"0\">\n            <tr>\n              <td>\n                <mat-form-field class=\"example-full-width\">\n                <input matInput placeholder=\"Username\"   name=\"username\" required>\n                </mat-form-field>\n              </td>\n            </tr>\n            <tr>\n            <td><mat-form-field class=\"example-full-width\">\n              <input matInput placeholder=\"Password\"  type=\"password\" name=\"password\" required>\n            </mat-form-field></td>\n          </tr></table>\n        </form>\n      </mat-card-content>\n      <mat-card-actions>\n        <button mat-raised-button (click)=\"login()\" color=\"primary\">Login</button>\n      </mat-card-actions>\n    </mat-card>\n\n  </div>\n  <div fxFlex=\"20\">&nbsp;</div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/public/pages/login/login.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/public/pages/login/login.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9wYWdlcy9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/public/pages/login/login.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/public/pages/login/login.component.ts ***!
  \*******************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var LoginComponent = /** @class */ (function () {
    function LoginComponent(router) {
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.router.navigate(['management', 'home']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'efgm-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/public/pages/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/public/pages/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/public/public-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/public/public-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PublicRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicRoutingModule", function() { return PublicRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/public/pages/home/home.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/public/pages/login/login.component.ts");





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }
];
var PublicRoutingModule = /** @class */ (function () {
    function PublicRoutingModule() {
    }
    PublicRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PublicRoutingModule);
    return PublicRoutingModule;
}());



/***/ }),

/***/ "./src/app/public/public.module.ts":
/*!*****************************************!*\
  !*** ./src/app/public/public.module.ts ***!
  \*****************************************/
/*! exports provided: PublicModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicModule", function() { return PublicModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/public/pages/home/home.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/public/pages/login/login.component.ts");
/* harmony import */ var _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/layout/header/header.component */ "./src/app/public/shared/layout/header/header.component.ts");
/* harmony import */ var _shared_layout_content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/layout/content/content.component */ "./src/app/public/shared/layout/content/content.component.ts");
/* harmony import */ var _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/layout/footer/footer.component */ "./src/app/public/shared/layout/footer/footer.component.ts");
/* harmony import */ var _shared_entrypoint_entrypoint_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/entrypoint/entrypoint.component */ "./src/app/public/shared/entrypoint/entrypoint.component.ts");
/* harmony import */ var _public_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./public-routing.module */ "./src/app/public/public-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_material_material_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/material/material.module */ "./src/app/public/shared/material/material.module.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _management_management_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../management/management.module */ "./src/app/management/management.module.ts");















var PublicModule = /** @class */ (function () {
    function PublicModule() {
    }
    PublicModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_pages_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"], _pages_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _shared_layout_content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"], _shared_layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_8__["FooterComponent"], _shared_entrypoint_entrypoint_component__WEBPACK_IMPORTED_MODULE_9__["EntrypointComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _public_routing_module__WEBPACK_IMPORTED_MODULE_10__["PublicRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"],
                _shared_material_material_module__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                _management_management_module__WEBPACK_IMPORTED_MODULE_14__["ManagementModule"]
            ],
            bootstrap: [_shared_entrypoint_entrypoint_component__WEBPACK_IMPORTED_MODULE_9__["EntrypointComponent"]]
        })
    ], PublicModule);
    return PublicModule;
}());

// ng g c public/shared/layout/footer  --module=public.module


/***/ }),

/***/ "./src/app/public/shared/entrypoint/entrypoint.component.html":
/*!********************************************************************!*\
  !*** ./src/app/public/shared/entrypoint/entrypoint.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/public/shared/entrypoint/entrypoint.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/public/shared/entrypoint/entrypoint.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9zaGFyZWQvZW50cnlwb2ludC9lbnRyeXBvaW50LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/public/shared/entrypoint/entrypoint.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/public/shared/entrypoint/entrypoint.component.ts ***!
  \******************************************************************/
/*! exports provided: EntrypointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntrypointComponent", function() { return EntrypointComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EntrypointComponent = /** @class */ (function () {
    function EntrypointComponent() {
    }
    EntrypointComponent.prototype.ngOnInit = function () {
    };
    EntrypointComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'efgm-entrypoint',
            template: __webpack_require__(/*! ./entrypoint.component.html */ "./src/app/public/shared/entrypoint/entrypoint.component.html"),
            styles: [__webpack_require__(/*! ./entrypoint.component.scss */ "./src/app/public/shared/entrypoint/entrypoint.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EntrypointComponent);
    return EntrypointComponent;
}());



/***/ }),

/***/ "./src/app/public/shared/layout/content/content.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/public/shared/layout/content/content.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  content works!\n</p>\n"

/***/ }),

/***/ "./src/app/public/shared/layout/content/content.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/public/shared/layout/content/content.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9zaGFyZWQvbGF5b3V0L2NvbnRlbnQvY29udGVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/public/shared/layout/content/content.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/public/shared/layout/content/content.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentComponent", function() { return ContentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'efgm-content',
            template: __webpack_require__(/*! ./content.component.html */ "./src/app/public/shared/layout/content/content.component.html"),
            styles: [__webpack_require__(/*! ./content.component.scss */ "./src/app/public/shared/layout/content/content.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());



/***/ }),

/***/ "./src/app/public/shared/layout/footer/footer.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/public/shared/layout/footer/footer.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  footer works!\n</p>\n"

/***/ }),

/***/ "./src/app/public/shared/layout/footer/footer.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/public/shared/layout/footer/footer.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9zaGFyZWQvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/public/shared/layout/footer/footer.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/public/shared/layout/footer/footer.component.ts ***!
  \*****************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'efgm-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/public/shared/layout/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/public/shared/layout/footer/footer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/public/shared/layout/header/header.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/public/shared/layout/header/header.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <div fxHide.gt-xs>\n  </div>\n  <div>\n      <a routerLink=\"/home\">Owner-Account</a>\n  </div>\n  <div fxFlex fxLayout fxLayoutAlign=\"end\" fxHide.xs>\n      <ul fxLayout fxLayoutGap=\"15px\" class=\"navigation-items\">\n          <li>\n              <a routerLink=\"/login\">Login</a>\n          </li>\n      </ul>\n  </div>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/public/shared/layout/header/header.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/public/shared/layout/header/header.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3B1YmxpYy9zaGFyZWQvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/public/shared/layout/header/header.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/public/shared/layout/header/header.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'efgm-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/public/shared/layout/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/public/shared/layout/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/public/shared/material/material.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/public/shared/material/material.module.ts ***!
  \***********************************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"]
            ],
            declarations: []
        })
    ], MaterialModule);
    return MaterialModule;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_public_public_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/public/public.module */ "./src/app/public/public.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_public_public_module__WEBPACK_IMPORTED_MODULE_3__["PublicModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Dogan/cddev/ANGULAR/efgm-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map