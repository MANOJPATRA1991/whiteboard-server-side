webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div.scrollmenu {\r\n    overflow-y: hidden;\r\n    overflow-x: auto;\r\n    position: -webkit-sticky;\r\n    position: sticky;    \r\n    height: 50px;\r\n    left: 0;\r\n    z-index: 500;\r\n    width: 100%;\r\n    top: 0px;\r\n    text-align: center;\r\n    background-color: #333;\r\n    white-space: nowrap;\r\n}\r\n\r\n.scrollbar\r\n{\r\n\tmargin-left: 30px;\r\n\tfloat: left;\r\n\theight: 300px;\r\n\twidth: 65px;\r\n\tbackground: #F5F5F5;\r\n\toverflow-y: scroll;\r\n\tmargin-bottom: 25px;\r\n}\r\n\r\n.force-overflow\r\n{\r\n\tmin-height: 450px;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    display: none;\r\n}\r\n\r\ndiv.scrollmenu a {\r\n    display: inline-block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px;\r\n    text-decoration: none;\r\n}\r\n\r\ndiv.scrollmenu a:hover {\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n    background-color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-alert></app-alert>\r\n<app-nav></app-nav>\r\n<div class=\"scrollmenu\" *ngIf=\"show()\">\r\n    <app-sidebar *ngFor=\"let category of categories; let i = index\">\r\n        <a (click)=\"navCategories(category.name)\">{{ category.name }}</a>\r\n    </app-sidebar>\r\n  </div>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_server_service__ = __webpack_require__("../../../../../src/app/services/blog-server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(catService, route, blog) {
        this.catService = catService;
        this.route = route;
        this.blog = blog;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getCategories();
    };
    /**
     * Get the list of categories
     */
    AppComponent.prototype.getCategories = function () {
        var _this = this;
        this.catService.getCategories().then(function (categories) {
            _this.categories = categories;
        });
    };
    /**
     * Navigation to the category page
     * @param name
     */
    AppComponent.prototype.navCategories = function (name) {
        this.route.navigate(['/blog', name]);
    };
    /**
     * Show sidebar based on route conditions
     */
    AppComponent.prototype.show = function () {
        if (this.route.url === '/auth/login' || this.route.url === '/auth/signup' ||
            this.route.url === '/home' || this.route.url === '/create' || this.route.url.startsWith('/edit')) {
            return false;
        }
        else {
            return true;
        }
    };
    AppComponent.prototype.ngDestroy = function () {
    };
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_categories_service__["a" /* CategoriesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_blog_server_service__["a" /* BlogServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_blog_server_service__["a" /* BlogServerService */]) === "function" && _c || Object])
], AppComponent);

var _a, _b, _c;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_nav_nav_module__ = __webpack_require__("../../../../../src/app/components/nav/nav.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_home_home_module__ = __webpack_require__("../../../../../src/app/components/home/home.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_user_auth_service__ = __webpack_require__("../../../../../src/app/services/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_activate_guard__ = __webpack_require__("../../../../../src/app/guards/activate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__guards_deactivate_guard__ = __webpack_require__("../../../../../src/app/guards/deactivate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_blog_detail_blog_detail_module__ = __webpack_require__("../../../../../src/app/components/blog-detail/blog-detail.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_categories_categories_module__ = __webpack_require__("../../../../../src/app/components/categories/categories.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_user_user_module__ = __webpack_require__("../../../../../src/app/components/user/user.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_user_bookmark_user_bookmark_module__ = __webpack_require__("../../../../../src/app/components/user-bookmark/user-bookmark.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_blog_server_service__ = __webpack_require__("../../../../../src/app/services/blog-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_alert_alert_module__ = __webpack_require__("../../../../../src/app/components/alert/alert.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_edit_blog_edit_blog_module__ = __webpack_require__("../../../../../src/app/components/edit-blog/edit-blog.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_footer_footer_module__ = __webpack_require__("../../../../../src/app/components/footer/footer.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_17__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__components_nav_nav_module__["a" /* NavModule */],
            __WEBPACK_IMPORTED_MODULE_5__components_home_home_module__["a" /* HomeModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_15__components_sidebar_sidebar_module__["a" /* SidebarModule */],
            __WEBPACK_IMPORTED_MODULE_11__components_categories_categories_module__["a" /* CategoriesModule */],
            __WEBPACK_IMPORTED_MODULE_12__components_user_user_module__["a" /* UserModule */],
            __WEBPACK_IMPORTED_MODULE_13__components_user_bookmark_user_bookmark_module__["a" /* UserBookmarkModule */],
            __WEBPACK_IMPORTED_MODULE_10__components_blog_detail_blog_detail_module__["a" /* BlogDetailModule */],
            __WEBPACK_IMPORTED_MODULE_18__components_alert_alert_module__["a" /* AlertModule */],
            __WEBPACK_IMPORTED_MODULE_20__components_edit_blog_edit_blog_module__["a" /* EditBlogModule */],
            __WEBPACK_IMPORTED_MODULE_22__components_footer_footer_module__["a" /* FooterModule */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_16__services_categories_service__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_14__services_blog_server_service__["a" /* BlogServerService */],
            __WEBPACK_IMPORTED_MODULE_6__services_user_auth_service__["a" /* UserAuthService */],
            __WEBPACK_IMPORTED_MODULE_7__services_local_storage_service__["a" /* LocalStorageService */],
            __WEBPACK_IMPORTED_MODULE_8__guards_activate_guard__["a" /* ActivateGuard */],
            __WEBPACK_IMPORTED_MODULE_9__guards_deactivate_guard__["a" /* DeactivateGuard */],
            __WEBPACK_IMPORTED_MODULE_19__services_alert_service__["a" /* AlertService */],
            { provide: __WEBPACK_IMPORTED_MODULE_21__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_21__angular_common__["d" /* HashLocationStrategy */] }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_auth_auth_component__ = __webpack_require__("../../../../../src/app/components/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_signup_signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_create_blog_create_blog_component__ = __webpack_require__("../../../../../src/app/components/create-blog/create-blog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_activate_guard__ = __webpack_require__("../../../../../src/app/guards/activate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__guards_deactivate_guard__ = __webpack_require__("../../../../../src/app/guards/deactivate.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_blog_detail_blog_detail_component__ = __webpack_require__("../../../../../src/app/components/blog-detail/blog-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_categories_categories_component__ = __webpack_require__("../../../../../src/app/components/categories/categories.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_user_user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_user_bookmark_user_bookmark_component__ = __webpack_require__("../../../../../src/app/components/user-bookmark/user-bookmark.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_edit_blog_edit_blog_component__ = __webpack_require__("../../../../../src/app/components/edit-blog/edit-blog.component.ts");













var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__components_home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'auth',
        component: __WEBPACK_IMPORTED_MODULE_1__components_auth_auth_component__["a" /* AuthComponent */],
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: __WEBPACK_IMPORTED_MODULE_4__components_login_login_component__["a" /* LoginComponent */] },
            { path: 'signup', component: __WEBPACK_IMPORTED_MODULE_3__components_signup_signup_component__["a" /* SignupComponent */] }
        ]
    },
    {
        path: 'create',
        component: __WEBPACK_IMPORTED_MODULE_5__components_create_blog_create_blog_component__["a" /* CreateBlogComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_activate_guard__["a" /* ActivateGuard */]],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_7__guards_deactivate_guard__["a" /* DeactivateGuard */]]
    },
    {
        path: 'blog/:category/:id',
        component: __WEBPACK_IMPORTED_MODULE_8__components_blog_detail_blog_detail_component__["a" /* BlogDetailComponent */]
    },
    {
        path: 'blog/:category',
        component: __WEBPACK_IMPORTED_MODULE_9__components_categories_categories_component__["a" /* CategoriesComponent */]
    },
    {
        path: 'user/blogs',
        component: __WEBPACK_IMPORTED_MODULE_10__components_user_user_component__["a" /* UserComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_activate_guard__["a" /* ActivateGuard */]]
    },
    {
        path: 'edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_12__components_edit_blog_edit_blog_component__["a" /* EditBlogComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_activate_guard__["a" /* ActivateGuard */]],
        canDeactivate: [__WEBPACK_IMPORTED_MODULE_7__guards_deactivate_guard__["a" /* DeactivateGuard */]]
    },
    {
        path: 'user/bookmarks',
        component: __WEBPACK_IMPORTED_MODULE_11__components_user_bookmark_user_bookmark_component__["a" /* UserBookmarkComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_activate_guard__["a" /* ActivateGuard */]]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(routes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/alert/alert.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".alert {\r\n    width: 300px;\r\n    height: 50px;\r\n    text-align: center;\r\n    font-size: 20px;\r\n    position: fixed;\r\n    bottom: 0;\r\n    left: 35%;\r\n    z-index: 700;\r\n    margin-bottom: 0;\r\n    border-radius: 0;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);    \r\n}\r\n\r\n.alert-success {\r\n    background-color: #01BE01;\r\n    color: #fff;\r\n}\r\n\r\n.alert-danger {\r\n    background-color: red;\r\n    color: #fff;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .alert {\r\n        width: 100%;\r\n        left: 0;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"alert\" *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">\r\n  {{message.text}}\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        // subscribe to message passed through Observable 
        // returned from getMessage()
        this.alertService.getMessage().subscribe(function (message) {
            _this.message = message;
        });
    };
    AlertComponent.prototype.ngAfterViewChecked = function () {
        // hide alert box after 2 seconds
        if (this.message) {
            $("#alert").fadeTo(2000, 500).slideUp(500, function () {
                $("#alert").slideUp(500);
            });
        }
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-alert',
        template: __webpack_require__("../../../../../src/app/components/alert/alert.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/alert/alert.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/alert/alert.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alert_component__ = __webpack_require__("../../../../../src/app/components/alert/alert.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlertModule = (function () {
    function AlertModule() {
    }
    return AlertModule;
}());
AlertModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__alert_component__["a" /* AlertComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__alert_component__["a" /* AlertComponent */]]
    })
], AlertModule);

//# sourceMappingURL=alert.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".card-1-1 {\r\n    padding: 20px;\r\n}\r\n\r\n.container {\r\n    margin: 50px auto;\r\n    margin-top: 100px;\r\n    width: 600px;\r\n}\r\n\r\n.title {\r\n    font-weight: 700;\r\n    font-size: 25px;\r\n    height: 40px;\r\n    color: red;\r\n    text-align: center;\r\n    margin-bottom: 10px;\r\n    /* margin-left: 10px !important; */\r\n}\r\n\r\nh4, h5 {\r\n    margin: auto 50px;\r\n    text-align: center;\r\n}\r\n\r\n.btn-facebook {\r\n    background: #3B5998;\r\n    border-radius: 0;\r\n    color: #fff;\r\n    border-width: 1px;\r\n    border-style: solid;\r\n    border-color: #263961; \r\n    margin-left: 0;\r\n    margin-top: 1.5rem;\r\n    width: 100%;\r\n}\r\n.btn-facebook:link, .btn-facebook:visited {\r\n    color: #fff;\r\n}\r\n.btn-facebook:active, .btn-facebook:hover {\r\n    background: #263961;\r\n    color: #fff;\r\n}\r\n\r\n@media screen and (max-width: 732px){\r\n    .container {\r\n        width: 300px;\r\n    }\r\n    .title {\r\n        font-weight: 200;\r\n        height: 20px;\r\n        width: 100%;\r\n        color: red;\r\n        text-align: center;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 600px) and (max-width: 768px) and (orientation: landscape){\r\n    .container {\r\n        width: 600px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"card card-1-1 col-xs-12\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <div  class=\"title col-xs-12\">\r\n            <p>Whiteboard</p>\r\n          </div>\r\n            <p class=\"alertError\" *ngIf=\"message !== ''\">{{ message }}</p>\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n        <div *ngIf=\"showSocialLogin()\" class=\"col-xs-12\">\r\n          <h5> or </h5>\r\n          <br>\r\n          <h4> Log in with </h4>\r\n          <a href=\"http://localhost:3000/users/facebook\" target=\"_self\" title=\"Facebook\" class=\"card btn btn-facebook btn-lg\">\r\n            <i class=\"fa fa-facebook fa-fw\"></i> Facebook\r\n          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthComponent = (function () {
    function AuthComponent(router, actRoute) {
        this.router = router;
        this.actRoute = actRoute;
    }
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get param err from route
        this.sub = this.actRoute.queryParams.subscribe(function (params) {
            _this.err = +params['err'];
        });
        if (this.err === 11000) {
            this.message = "You have registered manually with the same email id. \
      You cannot re-register with facebook. Please log in with username and password.";
        }
    };
    /**
     * Toggle visibilit of social login buttons
     */
    AuthComponent.prototype.showSocialLogin = function () {
        if (this.router.url.startsWith('/auth/login')) {
            return true;
        }
        else {
            return false;
        }
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-auth',
        template: __webpack_require__("../../../../../src/app/components/auth/auth.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/auth/auth.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object])
], AuthComponent);

var _a, _b;
//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/auth/auth.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_component__ = __webpack_require__("../../../../../src/app/components/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup_module__ = __webpack_require__("../../../../../src/app/components/signup/signup.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_module__ = __webpack_require__("../../../../../src/app/components/login/login.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AuthModule = (function () {
    function AuthModule() {
    }
    return AuthModule;
}());
AuthModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__signup_signup_module__["a" /* SignupModule */],
            __WEBPACK_IMPORTED_MODULE_5__login_login_module__["a" /* LoginModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* AuthComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__auth_component__["a" /* AuthComponent */]]
    })
], AuthModule);

//# sourceMappingURL=auth.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog-detail/blog-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    margin-top: 70px;\r\n}\r\n\r\n:host /deep/ p {\r\n    color: #000;\r\n}\r\n\r\n:host /deep/ blockquote {\r\n    border-left: solid 2px #eee6ff;\r\n    margin-left: 0;\r\n    padding-left: 5px;\r\n}\r\n\r\n:host /deep/ blockquote p {\r\n    color: #3d119a !important;\r\n}\r\n\r\n:host /deep/ a {\r\n    color: #337ab7;\r\n    text-decoration: none;\r\n}\r\n\r\n.float1 {\r\n    float: left;\r\n}\r\n\r\n.float2 {\r\n    float: right;\r\n    margin-right: 10px;\r\n    text-align: right;\r\n}\r\n\r\n.title {\r\n    font-size: 50px;\r\n    color: red;\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.content {\r\n    display: inline-block;\r\n    font-size: 1.5em;\r\n    text-align: justify;\r\n}\r\n\r\n#bookmark, #likes {\r\n    background-color: #fff;\r\n    width: 50px;\r\n    height: 50px;\r\n    font-size: 20px;\r\n    border-radius: 50%;\r\n    border: 0;\r\n    outline: none;\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n}\r\n\r\n.auth {\r\n    line-height: 2em;\r\n    font-size: 14px;\r\n    color: #386ab2;\r\n    margin-top: 40px;\r\n}\r\n\r\nul {\r\n    padding-left: 0;\r\n    position: relative;\r\n    list-style: none;\r\n}\r\n\r\n.buttons {\r\n    margin: 10px;\r\n    display: inline-block;\r\n    position: relative;\r\n    border-radius: 50%;\r\n}\r\n\r\n#bookmark:active, #likes:active {\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n}\r\n\r\n@media screen and (max-width: 420px) {\r\n    ul {\r\n        left: 10px;\r\n    }\r\n    .float1 {\r\n        float: none;\r\n    }\r\n    .float2 {\r\n        text-align: left;\r\n        float: none;\r\n        margin-left: 10px;\r\n    }\r\n\r\n    .auth {\r\n        margin-top: auto;\r\n    }\r\n}\r\n\r\n.message {\r\n    font-size: 50px;\r\n    padding: 10px;\r\n}\r\n\r\nh2 {\r\n    font-size: 50px;\r\n}\r\n\r\n@media screen and (max-width: 760px) {\r\n    .message {\r\n        font-size: 30px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    h2 {\r\n        font-size: 30px;\r\n    }\r\n}\r\n\r\n#bookmark .label, #likes .label {\r\n    position: absolute;\r\n    top: -10px;\r\n    right: -10px;\r\n}\r\n\r\n.btn-metis-4 {\r\n  color: #ffffff;\r\n  background-color: #a264e7;\r\n  border-color: #62309a;\r\n}\r\n\r\n.discuss {\r\n    color: #00BD00;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/blog-detail/blog-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n    <li><a routerLink=\"/home\">Home</a></li>\r\n    <li><a routerLink=\"/blog/{{detail?.category}}\">{{detail?.category}}</a></li>\r\n    <li></li>\r\n</ol>\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div *ngIf=\"error\" class=\"message col-xs-12\">{{detail}}</div>\r\n    <div *ngIf=\"!error\" class=\"col-xs-12\">\r\n      <span class=\"title\" [innerHTML]=\"detail?.title\"></span>\r\n      <ul class=\"float1\">\r\n        <li class=\"buttons\">\r\n            <button id=\"bookmark\" (click)=\"toggleBookmarkBlog()\">\r\n              <i class=\"fa fa-bookmark-o\" aria-hidden=\"true\"></i>\r\n              <span class=\"label label-success\">{{ bookmarks }}</span>\r\n            </button>  \r\n        </li>\r\n        <li class=\"buttons\">\r\n            <button id=\"likes\" (click)=\"toggleLike()\">\r\n              <i class=\"fa fa-thumbs-o-up\" aria-hidden=\"true\"></i>\r\n              <span class=\"label btn-metis-4\">{{ likes }}</span>\r\n            </button>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"float2\">\r\n        <li class=\"auth\">\r\n          By {{detail?.author}}, {{detail?.updatedAt | date: 'yMMMd'}}\r\n        </li>\r\n      </ul>\r\n      <hr class=\"clear\"/>\r\n      <span class=\"content\" [innerHTML]=\"detail?.content\"></span>\r\n\r\n      <hr />\r\n    </div>\r\n    <div class=\"col-xs-12\">\r\n      <h4 class=\"discuss\">Discussions</h4>\r\n      <app-comments [blog_id]=\"id\"></app-comments>  \r\n    </div>  \r\n  </div>  \r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/blog-detail/blog-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blog_server_service__ = __webpack_require__("../../../../../src/app/services/blog-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_auth_service__ = __webpack_require__("../../../../../src/app/services/user-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var BlogDetailComponent = (function () {
    function BlogDetailComponent(router, auth, route, blog) {
        this.router = router;
        this.auth = auth;
        this.route = route;
        this.blog = blog;
        this.likes = 0;
        this.message = '';
    }
    BlogDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get param id from route
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        // subscribe to get blog detail with given id
        this.blog.getBlogDetail(this.id).subscribe(function (value) {
            _this.detail = value;
            if (typeof (value) === 'string') {
                _this.error = true;
            }
            _this.likes = value.likes;
            _this.bookmarks = value.bookmarks;
        });
    };
    /**
     * Toggle user's bookmarks
     */
    BlogDetailComponent.prototype.toggleBookmarkBlog = function () {
        var _this = this;
        // if user is logged in
        if (this.auth.isLoggedIn) {
            this.blog.saveUserBookmarks(this.id).subscribe(function (value) {
                _this.bookmarks = value;
            });
        }
        else {
            this.router.navigateByUrl('/auth/login');
        }
    };
    /**
     * Toggle likes on a blog by a user
     */
    BlogDetailComponent.prototype.toggleLike = function () {
        var _this = this;
        // if user is logged in
        if (this.auth.isLoggedIn) {
            this.blog.postLikes(this.id).subscribe(function (value) {
                _this.likes = value;
            });
        }
        else {
            this.router.navigateByUrl('/auth/login');
        }
    };
    BlogDetailComponent.prototype.ngDestroy = function () {
        this.sub.unsubscribe();
    };
    return BlogDetailComponent;
}());
BlogDetailComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-blog-detail',
        template: __webpack_require__("../../../../../src/app/components/blog-detail/blog-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/blog-detail/blog-detail.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_auth_service__["a" /* UserAuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_blog_server_service__["a" /* BlogServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_blog_server_service__["a" /* BlogServerService */]) === "function" && _d || Object])
], BlogDetailComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=blog-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/blog-detail/blog-detail.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogDetailModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__blog_detail_component__ = __webpack_require__("../../../../../src/app/components/blog-detail/blog-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__comments_comments_module__ = __webpack_require__("../../../../../src/app/components/comments/comments.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BlogDetailModule = (function () {
    function BlogDetailModule() {
    }
    return BlogDetailModule;
}());
BlogDetailModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__comments_comments_module__["a" /* CommentsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__blog_detail_component__["a" /* BlogDetailComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__blog_detail_component__["a" /* BlogDetailComponent */]]
    })
], BlogDetailModule);

//# sourceMappingURL=blog-detail.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/categories/categories.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\r\n    margin: 0 auto;\r\n    margin-top: 50px;\r\n    width: 100%;\r\n}\r\n\r\n.blogCard {\r\n    position: relative;\r\n    margin: 10px;\r\n    word-wrap: break-word;\r\n    width: 50%;\r\n    padding: 10px 20px;\r\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n    cursor: pointer;\r\n}\r\n\r\n.col-centered {\r\n    float: none;\r\n    margin: 0 auto;\r\n}\r\n\r\n.center-block {\r\n    float: none !important;\r\n}\r\n\r\n.blogCard:hover {\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\nh2 {\r\n    font-size: 20px;\r\n    text-align: left;\r\n    padding-left: 15px;\r\n}\r\n\r\n@media screen and (max-width: 1170px){\r\n    .blogCard {\r\n        width: 100%;\r\n        margin: 10px auto;\r\n    }\r\n    .col-xs-12 {\r\n        padding-left: 15px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 991px){\r\n    .card-category {\r\n        padding: 15px;\r\n    }\r\n    \r\n    .blogs {\r\n        padding-left: 15px;\r\n    }\r\n}\r\n\r\n.foot {\r\n    color: #666565;\r\n    text-align: left;\r\n    padding-top: 20px;\r\n    padding-left: 15px;\r\n}\r\n\r\n.foot p:nth-child(1){\r\n    margin-bottom: 10px;\r\n    font-weight: 700;\r\n    color: royalblue;\r\n}\r\n\r\n.message {\r\n    font-size: 50px;\r\n    padding: 10px;\r\n}\r\n\r\n@media screen and (max-width: 760px) {\r\n    .message {\r\n        font-size: 30px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    h2 {\r\n        font-size: 30px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n    <li><a routerLink=\"/home\">Home</a></li>\r\n    <li>{{category}}</li>\r\n</ol>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\" align=\"center\">\r\n        <div class=\"col-xs-12\">\r\n            <p class=\"message\" *ngIf=\"message !== ''\">{{ message }}</p>\r\n            <span *ngFor=\"let blog of blogs\">\r\n                <div class=\"blogs blogCard card\" (click)=\"blogDetail(blog)\">\r\n                    <h2 [innerHTML]=\"blog?.title\"></h2>\r\n                    <div class=\"foot\">\r\n                        <p>{{blog?.category}}</p>\r\n                        <p>{{blog?.author}}</p>\r\n                        <p><em>{{blog?.updatedAt | date: 'yMMMd'}}</em></p>\r\n                    </div>\r\n                </div> \r\n            </span> \r\n        </div>\r\n        <div class=\"col-xs-12\" align=\"center\">\r\n            <ngb-pagination [collectionSize]=\"count\" [(page)]=\"page\" [maxSize]=\"5\" \r\n            [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\" (pageChange)=\"getBlogDetails(category, $event)\"></ngb-pagination>                \r\n        </div>\r\n    </div>  \r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blog_server_service__ = __webpack_require__("../../../../../src/app/services/blog-server.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoriesComponent = (function () {
    function CategoriesComponent(actroute, blog, route) {
        this.actroute = actroute;
        this.blog = blog;
        this.route = route;
        this.skip = 0;
        this.count = 0;
        this.page = 1;
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.skip = 0;
        this.sub = this.actroute.params.subscribe(function (params) {
            _this.category = params['category'];
            _this.getBlogDetails(_this.category, _this.page);
        });
    };
    /**
     * Function to get blogs by category
     * @param category : Category to which the blog belongs
     * @param skip : Number of blogs to skip
     */
    CategoriesComponent.prototype.getBlogDetails = function (category, skip) {
        var _this = this;
        this.message = '';
        this.blogs = [];
        skip = skip - 1;
        this.blogsub = this.blog.getBlogByCategories(category, skip)
            .subscribe(function (value) {
            if (typeof (value) === 'string') {
                _this.message = value;
            }
            else {
                _this.blogs = value;
            }
        }, function (error) {
            _this.message = error;
        });
        // update blog count
        this.countsub = this.blog.getBlogCount(this.category).subscribe(function (value) {
            _this.count = value;
        });
    };
    /**
     * Function to retrieve the blog details for a given blog
     * @param blog
     */
    CategoriesComponent.prototype.blogDetail = function (blog) {
        this.route.navigate(['/blog', blog.category, blog._id]);
    };
    CategoriesComponent.prototype.getMore = function () {
        this.skip += 5;
        this.getBlogDetails(this.category, this.skip);
    };
    CategoriesComponent.prototype.ngDestroy = function () {
        this.sub.unsubscribe();
        this.blogsub.unsubscribe();
        this.countsub.unsubscribe();
    };
    return CategoriesComponent;
}());
CategoriesComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-categories',
        template: __webpack_require__("../../../../../src/app/components/categories/categories.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/categories/categories.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_blog_server_service__["a" /* BlogServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_blog_server_service__["a" /* BlogServerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], CategoriesComponent);

var _a, _b, _c;
//# sourceMappingURL=categories.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/categories/categories.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__ = __webpack_require__("../../../../@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories_component__ = __webpack_require__("../../../../../src/app/components/categories/categories.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CategoriesModule = (function () {
    function CategoriesModule() {
    }
    return CategoriesModule;
}());
CategoriesModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__categories_component__["a" /* CategoriesComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__categories_component__["a" /* CategoriesComponent */]]
    })
], CategoriesModule);

//# sourceMappingURL=categories.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/comments/comments.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*Comment List styles*/\r\n.comment-list .row {\r\n  margin-bottom: 0px;\r\n}\r\n\r\np {\r\n  color: rgb(107, 70, 70) !important;\r\n}\r\n\r\n.comment-list .panel .panel-heading {\r\n  padding: 4px 15px;\r\n  position: absolute;\r\n  border:none;\r\n  /*Panel-heading border radius*/\r\n  border-top-right-radius:0px;\r\n  top: 1px;\r\n}\r\n\r\n.comment-list .panel .panel-heading.right {\r\n  border-right-width: 0px;\r\n  /*Panel-heading border radius*/\r\n  border-top-left-radius:0px;\r\n  right: 16px;\r\n}\r\n\r\n.comment-list .panel .panel-heading .panel-body {\r\n  padding-top: 6px;\r\n}\r\n\r\n.comment-list figcaption {\r\n  /*For wrapping text in thumbnail*/\r\n  word-wrap: break-word;\r\n}\r\n\r\n/* Portrait tablets and medium desktops */\r\n@media (min-width: 768px) {\r\n  .comment-list .arrow:after, .comment-list .arrow:before {\r\n    content: \"\";\r\n    position: absolute;\r\n    width: 0;\r\n    height: 0;\r\n    border-style: solid;\r\n    border-color: transparent;\r\n  }\r\n  .comment-list .panel.arrow.left:after, .comment-list .panel.arrow.left:before {\r\n    border-left: 0;\r\n  }\r\n  /*****Left Arrow*****/\r\n  /*Outline effect style*/\r\n  .comment-list .panel.arrow.left:before {\r\n    left: 0px;\r\n    top: 30px;\r\n    /*Use boarder color of panel*/\r\n    border-right-color: inherit;\r\n    border-width: 16px;\r\n  }\r\n  /*Background color effect*/\r\n  .comment-list .panel.arrow.left:after {\r\n    left: 1px;\r\n    top: 31px;\r\n    /*Change for different outline color*/\r\n    border-right-color: #FFFFFF;\r\n    border-width: 15px;\r\n  }\r\n  /*****Right Arrow*****/\r\n  /*Outline effect style*/\r\n  .comment-list .panel.arrow.right:before {\r\n    right: -16px;\r\n    top: 30px;\r\n    /*Use boarder color of panel*/\r\n    border-left-color: inherit;\r\n    border-width: 16px;\r\n  }\r\n  /*Background color effect*/\r\n  .comment-list .panel.arrow.right:after {\r\n    right: -14px;\r\n    top: 31px;\r\n    /*Change for different outline color*/\r\n    border-left-color: #FFFFFF;\r\n    border-width: 15px;\r\n  }\r\n}\r\n.comment-list .comment-post {\r\n  margin-top: 6px;\r\n}\r\n\r\n.panel {\r\n  width: 100%;\r\n}\r\n\r\n.comment-user {\r\n  float: left;\r\n  font-weight: bold;\r\n}\r\n\r\n.comment-date {\r\n  float: right;\r\n  color: #A0A0A0;\r\n}\r\n\r\ntextarea {\r\n  width: 100%;\r\n  resize: none;\r\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n}\r\n\r\nbutton {\r\n  outline: none;\r\n  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\nbutton:active {\r\n  box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n}\r\n\r\n.formdiv {\r\n  margin-bottom: 20px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/comments/comments.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"formdiv col-xs-12\" *ngIf=\"auth.isLoggedIn\">\r\n  <form [formGroup]=\"commentForm\" class=\"form\" (ngSubmit)=\"post(commentForm.value)\">\r\n    <div class=\"form-group\">\r\n        <textarea rows=\"4\" cols=\"100\" type=\"text\" placeholder=\"Add comment\" [formControl]=\"comment\" id=\"comment\">\r\n        </textarea>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-success\">POST</button>\r\n  </form>\r\n</div>\r\n<div class=\"col-xs-12\" *ngFor=\"let comment of comments\">\r\n    <div class=\"card panel panel-default arrow left\">\r\n      <div class=\"panel-body\">\r\n        <header class=\"text-left\">\r\n          <div class=\"comment-user\"><i class=\"fa fa-user\"></i> {{comment.postedBy ? comment.postedBy.username : ''}}</div>\r\n          <time class=\"comment-date\" datetime=\"16-12-2014 01:05\"><i class=\"fa fa-clock-o\"></i> <em>{{comment.updatedAt | date: 'yMMMdjms'}}</em></time>\r\n        </header>\r\n        <hr/>\r\n        <div class=\"comment-post\">\r\n          <p>\r\n            {{comment.comment}}\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/comments/comments.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_blog_server_service__ = __webpack_require__("../../../../../src/app/services/blog-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_auth_service__ = __webpack_require__("../../../../../src/app/services/user-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CommentsComponent = (function () {
    function CommentsComponent(auth, fb, blog) {
        this.auth = auth;
        this.fb = fb;
        this.blog = blog;
        this.comments = [];
        this.comment = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["g" /* Validators */].required]);
        this.commentForm = this.fb.group({
            comment: this.comment
        });
    }
    CommentsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.blog.getBlogComments(this.blog_id)
            .subscribe(function (value) {
            // sort comments based on date time in increasing order
            _this.comments = value.sort(function (a, b) {
                return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
            });
        });
    };
    /**
     * This function is used to post a comment to the blog's comment array
     * @param model
     */
    CommentsComponent.prototype.post = function (model) {
        var _this = this;
        this.blog.postBlogComments(this.blog_id, model).then(function (response) {
            if (response.status === 200) {
                _this.comments.push({
                    comment: model.comment,
                    postedBy: {
                        username: _this.auth.username
                    },
                    updatedAt: Date.now()
                });
            }
        });
    };
    return CommentsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], CommentsComponent.prototype, "blog_id", void 0);
CommentsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-comments',
        template: __webpack_require__("../../../../../src/app/components/comments/comments.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/comments/comments.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_auth_service__["a" /* UserAuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_blog_server_service__["a" /* BlogServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_blog_server_service__["a" /* BlogServerService */]) === "function" && _c || Object])
], CommentsComponent);

var _a, _b, _c;
//# sourceMappingURL=comments.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/comments/comments.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CommentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__comments_component__ = __webpack_require__("../../../../../src/app/components/comments/comments.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CommentsModule = (function () {
    function CommentsModule() {
    }
    return CommentsModule;
}());
CommentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__comments_component__["a" /* CommentsComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__comments_component__["a" /* CommentsComponent */]]
    })
], CommentsModule);

//# sourceMappingURL=comments.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-blog/create-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    margin-top: 50px;\r\n}\r\n\r\nbutton.modButton {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.back {\r\n    padding-left: 0;\r\n}\r\n\r\n.title {\r\n    font-size: 50px;\r\n    color: red;\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.content {\r\n    display: inline-block;\r\n    font-size: 1.5em;\r\n    text-align: justify;\r\n}\r\n\r\n.blogButtons {\r\n    position: absolute;\r\n    z-index: 500;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\n.border-menu {\r\n    position: absolute;\r\n    top: 100px;\r\n    left:50px;\r\n    padding-left: 1.25em;\r\n}\r\n\r\n.border-menu:before {\r\n    content: \" \";\r\n    position: absolute;\r\n    top: 0.25em;\r\n    left: 0;\r\n    width: 1em;\r\n    height: 0.62em;\r\n    border-top: 0.375em double #000;\r\n    border-bottom: 0.125em solid #000;\r\n}\r\n\r\n.mod {\r\n    border-radius: 0;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n}\r\n  \r\nselect {\r\n    width: 200px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/create-blog/create-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <!-- <div class=\"border-menu\" (click)=\"toggleNav()\">Hide Menu</div> -->\r\n    <div class=\"row\">\r\n        <p *ngIf=\"showError\">{{ message }}</p>\r\n        <div class=\"col-xs-12\">\r\n            <div *ngIf=\"!setPreview\" class=\"col-xs-12\">\r\n                <div class=\"form-group form-inline\">\r\n                    <label for=\"sel1\">Select category: </label>\r\n                    <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"title\" (ngModelChange)=\"setTitle(title)\">\r\n                        <option *ngFor=\"let category of categories\" [ngValue]=\"category.name\">{{ category.name }}</option>\r\n                    </select>\r\n                </div>\r\n                <div style=\"font-size: 50px;\" [froalaEditor]=\"optionsTitle\" [(froalaModel)]=\"titleContent\"></div>\r\n                <div [froalaEditor]=\"options\" [(froalaModel)]=\"editorContent\"></div>\r\n                <br>\r\n            </div>    \r\n            <div *ngIf=\"setPreview\" class=\"col-xs-12 col-md-2\">\r\n                <div data-spy=\"affix\" data-offset-top=\"100\" data-offset-bottom=\"200\" class=\"back col-xs-4 col-md-12\">\r\n                    <button class=\"modButton btn btn-primary\" (click)=\"togglePreview()\">\r\n                        <span class=\"glyphicon glyphicon-chevron-left\"></span> Back </button>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"setPreview\" class=\"col-xs-12 col-md-10\">\r\n                <div class=\"title\" [froalaView]=\"titleContent\"></div>\r\n                <div class=\"content\" [froalaView]=\"editorContent\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/create-blog/create-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateBlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_auth_service__ = __webpack_require__("../../../../../src/app/services/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_blog_server_service__ = __webpack_require__("../../../../../src/app/services/blog-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CreateBlogComponent = (function () {
    function CreateBlogComponent(auth, route, catService, blogService, alert) {
        this.auth = auth;
        this.route = route;
        this.catService = catService;
        this.blogService = blogService;
        this.alert = alert;
        this.setPreview = false;
        this.showError = false;
        this.title = '';
        this.editorContent = '';
        this.titleContent = '';
        this.can = false;
        // Options for second Froala Editor instance 
        this.options = {
            toolbarButtons: ['bold', 'italic', 'underline', '|', 'paragraphFormat', 'quote', 'insertLink', 'undo', 'redo', '|', 'preview', 'upload', 'cancel'],
            toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat', 'quote', 'insertLink', 'undo', 'redo', '|', 'preview', 'upload', 'cancel'],
            toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat', 'quote', 'insertLink', 'undo', 'redo', '|', 'preview', 'upload', 'cancel'],
            toolbarButtonsMD: ['bold', 'italic', 'underline', '|', 'paragraphFormat', 'quote', 'insertLink', 'undo', 'redo', '|', 'preview', 'upload', 'cancel'],
            quickInsertButtons: ['table', 'ol', 'ul'],
            placeholderText: "Tell Your Story",
            theme: 'royal',
            height: 400,
            events: {
                'froalaEditor.contentChanged': function (e, editor) {
                    this.editorContent = editor.html.get();
                }
            },
            // Set the image upload URL.
            imageUploadURL: '/uploads/upload_image',
            charCounterCount: false
        };
        // Options for first Froala Editor instance 
        this.optionsTitle = {
            toolbarInline: true,
            fontSize: 30,
            toolbarButtons: ['undo', 'redo'],
            toolbarButtonsXS: ['undo', 'redo'],
            toolbarButtonsSM: ['undo', 'redo'],
            toolbarButtonsMD: ['undo', 'redo'],
            placeholderText: "Title",
            charCounterMax: 20,
            theme: 'royal',
            pluginsEnabled: [],
            events: {
                'froalaEditor.contentChanged': function (e, editor) {
                    this.titleContent = editor.html.get();
                }
            },
            charCounterCount: false
        };
    }
    /**
     * This function retrieves categories to display
     */
    CreateBlogComponent.prototype.getCategories = function () {
        var _this = this;
        // get categories to display
        this.catService.getCategories().then(function (categories) {
            _this.categories = categories;
            _this.title = _this.categories[0]['name'];
        });
    };
    CreateBlogComponent.prototype.ngOnInit = function () {
        this.getCategories();
        var save = this.saveBlog.bind(this);
        var cancel = this.discardBlog.bind(this);
        var preview = this.togglePreview.bind(this);
        // Create Upload icon for Froala Editor
        $.FroalaEditor.DefineIcon('upload', { NAME: 'upload' });
        $.FroalaEditor.RegisterCommand('upload', {
            title: 'Publish',
            focus: false,
            undo: false,
            refreshAfterCallback: false,
            callback: function () {
                save();
            }
        });
        // Create Cancel icon for Froala Editor
        $.FroalaEditor.DefineIcon('cancel', { NAME: 'times' });
        $.FroalaEditor.RegisterCommand('cancel', {
            title: 'Cancel',
            focus: false,
            undo: false,
            refreshAfterCallback: false,
            callback: function () {
                cancel();
            }
        });
        // Create Preview icon for Froala Editor
        $.FroalaEditor.DefineIcon('preview', { NAME: 'eye' });
        $.FroalaEditor.RegisterCommand('preview', {
            title: 'Preview Blog',
            focus: false,
            undo: false,
            refreshAfterCallback: false,
            callback: function () {
                preview();
            }
        });
    };
    /**
     * Deactivate navigation from the route
     */
    CreateBlogComponent.prototype.canDeactivate = function () {
        return this.can;
    };
    /**
     * Save blog to database
     */
    CreateBlogComponent.prototype.saveBlog = function () {
        var _this = this;
        this.blogService.createBlog({
            category: this.title,
            title: this.titleContent,
            content: this.editorContent,
            author: this.auth.username
        }).subscribe(function (value) {
            // check for error
            if (value.status === 500) {
                _this.showError = true;
                _this.message = value.message;
            }
            else {
                // redirect to home page on successful creation of blog
                _this.alert.success("Blog created", true);
                _this.route.navigateByUrl('/home');
            }
        });
        this.can = true;
    };
    /**
     * Discard save and navigate to home page
     */
    CreateBlogComponent.prototype.discardBlog = function () {
        this.can = true;
        this.route.navigateByUrl('/home');
    };
    /**
     * Set title to selectedCategory
     * @param selectedCategory
     */
    CreateBlogComponent.prototype.setTitle = function (selectedCategory) {
        this.title = selectedCategory;
    };
    /**
     * Toggle between preview of blog
     */
    CreateBlogComponent.prototype.togglePreview = function () {
        this.setPreview = !this.setPreview;
    };
    return CreateBlogComponent;
}());
CreateBlogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-blog',
        template: __webpack_require__("../../../../../src/app/components/create-blog/create-blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/create-blog/create-blog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_auth_service__["a" /* UserAuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_categories_service__["a" /* CategoriesService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_blog_server_service__["a" /* BlogServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_blog_server_service__["a" /* BlogServerService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */]) === "function" && _e || Object])
], CreateBlogComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=create-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/create-blog/create-blog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateBlogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_blog_component__ = __webpack_require__("../../../../../src/app/components/create-blog/create-blog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var CreateBlogModule = (function () {
    function CreateBlogModule() {
    }
    return CreateBlogModule;
}());
CreateBlogModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__create_blog_component__["a" /* CreateBlogComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__create_blog_component__["a" /* CreateBlogComponent */]]
    })
], CreateBlogModule);

//# sourceMappingURL=create-blog.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-blog/edit-blog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container {\r\n    margin-top: 50px;\r\n}\r\n  \r\n.back {\r\n    padding-left: 0;\r\n}\r\n\r\nbutton.modButton {\r\n    margin-bottom: 5px;\r\n}\r\n\r\n.title {\r\n    font-size: 50px;\r\n    color: red;\r\n    text-align: center;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.content {\r\n    display: inline-block;\r\n    font-size: 1.5em;\r\n    text-align: justify;\r\n}\r\n\r\n.blogButtons {\r\n    position: absolute;\r\n    z-index: 500;\r\n    bottom: 0;\r\n    right: 0;\r\n}\r\n\r\n.border-menu {\r\n    position: absolute;\r\n    top: 100px;\r\n    left:50px;\r\n    padding-left: 1.25em;\r\n}\r\n\r\n  .border-menu:before {\r\n    content: \" \";\r\n    position: absolute;\r\n    top: 0.25em;\r\n    left: 0;\r\n    width: 1em;\r\n    height: 0.62em;\r\n    border-top: 0.375em double #000;\r\n    border-bottom: 0.125em solid #000;\r\n}\r\n\r\n.mod {\r\n    border-radius: 0;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n}\r\n  \r\nselect {\r\n    width: 200px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/edit-blog/edit-blog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <!-- <div class=\"border-menu\" (click)=\"toggleNav()\">Hide Menu</div> -->\r\n    <div class=\"row\">\r\n        <p *ngIf=\"showError\">{{ message }}</p>\r\n        <div class=\"col-xs-12\">\r\n            <div *ngIf=\"!setPreview\" class=\"col-xs-12\">\r\n                <div class=\"form-group form-inline\">\r\n                    <label for=\"sel1\">Select category: </label>\r\n                    <select class=\"form-control\" id=\"sel1\" [(ngModel)]=\"title\" (ngModelChange)=\"setTitle(title)\">\r\n                        <option *ngFor=\"let category of categories\" [ngValue]=\"category.name\">{{ category.name }}</option>\r\n                    </select>\r\n                </div>\r\n                <div style=\"font-size: 50px;\" [froalaEditor]=\"optionsTitle\" [(froalaModel)]=\"titleContent\"></div>\r\n                <div [froalaEditor]=\"options\" [(froalaModel)]=\"editorContent\"></div>\r\n                <br>\r\n            </div>    \r\n            <div *ngIf=\"setPreview\" class=\"col-xs-12 col-md-2\">\r\n                <div data-spy=\"affix\" data-offset-top=\"100\" data-offset-bottom=\"200\" class=\"back col-xs-4 col-md-12\">\r\n                    <button class=\"modButton btn btn-primary\" (click)=\"togglePreview()\">\r\n                        <span class=\"glyphicon glyphicon-chevron-left\"></span> Back </button>\r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"setPreview\" class=\"col-xs-12 col-md-10\">\r\n                <div class=\"title\" [froalaView]=\"titleContent\"></div>\r\n                <div class=\"content\" [froalaView]=\"editorContent\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/components/edit-blog/edit-blog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_auth_service__ = __webpack_require__("../../../../../src/app/services/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_blog_server_service__ = __webpack_require__("../../../../../src/app/services/blog-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EditBlogComponent = (function () {
    function EditBlogComponent(auth, route, router, catService, blog, alert) {
        this.auth = auth;
        this.route = route;
        this.router = router;
        this.catService = catService;
        this.blog = blog;
        this.alert = alert;
        this.setPreview = false;
        this.showError = false;
        this.title = '';
        this.editorContent = '';
        this.titleContent = '';
        this.can = false;
        // Options for second Froala Editor instance 
        this.options = {
            toolbarButtons: ['bold', 'italic', 'underline', '|', 'paragraphFormat', 'quote', 'insertLink', 'undo', 'redo', '|', 'update', 'preview', 'cancel'],
            toolbarButtonsXS: ['bold', 'italic', 'underline', 'paragraphFormat', 'quote', 'insertLink', 'undo', 'redo', '|', 'update', 'preview', 'cancel'],
            toolbarButtonsSM: ['bold', 'italic', 'underline', 'paragraphFormat', 'quote', 'insertLink', 'undo', 'redo', '|', 'update', 'preview', 'cancel'],
            toolbarButtonsMD: ['bold', 'italic', 'underline', '|', 'paragraphFormat', 'quote', 'insertLink', 'undo', 'redo', '|', 'update', 'preview', 'cancel'],
            quickInsertButtons: ['table', 'ol', 'ul'],
            placeholderText: "Tell Your Story",
            theme: 'royal',
            height: 400,
            events: {
                'froalaEditor.contentChanged': function (e, editor) {
                    this.editorContent = editor.html.get();
                }
            },
            // Set the image upload URL.
            imageUploadURL: '/uploads/upload_image',
            charCounterCount: false
        };
        // Options for first Froala Editor instance 
        this.optionsTitle = {
            toolbarInline: true,
            fontSize: 30,
            toolbarButtons: ['undo', 'redo'],
            toolbarButtonsXS: ['undo', 'redo'],
            toolbarButtonsSM: ['undo', 'redo'],
            toolbarButtonsMD: ['undo', 'redo'],
            placeholderText: "Title",
            theme: 'royal',
            pluginsEnabled: [],
            events: {
                'froalaEditor.contentChanged': function (e, editor) {
                    this.titleContent = editor.html.get();
                }
            },
            charCounterCount: false
        };
    }
    /**
     * This function retrieves categories to display
     */
    EditBlogComponent.prototype.getCategories = function () {
        var _this = this;
        // get categories to display
        this.catService.getCategories().then(function (categories) {
            _this.categories = categories;
            _this.title = _this.categories[0]['name'];
        });
    };
    EditBlogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getCategories();
        // get param id from route
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
        // subscribe to get blog detail with given id
        this.blog.getBlogDetail(this.id).subscribe(function (value) {
            _this.title = value.category;
            _this.editorContent = value.content;
            _this.titleContent = value.title;
        });
        var save = this.updateBlog.bind(this);
        var cancel = this.discardBlog.bind(this);
        var preview = this.togglePreview.bind(this);
        // Create Upload icon for Froala Editor
        $.FroalaEditor.DefineIcon('update', { NAME: 'save' });
        $.FroalaEditor.RegisterCommand('update', {
            title: 'Update',
            focus: false,
            undo: false,
            refreshAfterCallback: false,
            callback: function () {
                save();
            }
        });
        // Create Cancel icon for Froala Editor
        $.FroalaEditor.DefineIcon('cancel', { NAME: 'times' });
        $.FroalaEditor.RegisterCommand('cancel', {
            title: 'Cancel',
            focus: false,
            undo: false,
            refreshAfterCallback: false,
            callback: function () {
                cancel();
            }
        });
        // Create Preview icon for Froala Editor
        $.FroalaEditor.DefineIcon('preview', { NAME: 'eye' });
        $.FroalaEditor.RegisterCommand('preview', {
            title: 'Preview Blog',
            focus: false,
            undo: false,
            refreshAfterCallback: false,
            callback: function () {
                preview();
            }
        });
    };
    /**
     * Deactivate navigation from the route
     */
    EditBlogComponent.prototype.canDeactivate = function () {
        return this.can;
    };
    /**
     * Update blog and save to database
     */
    EditBlogComponent.prototype.updateBlog = function () {
        var _this = this;
        this.blog.editBlog({
            category: this.title,
            title: this.titleContent,
            content: this.editorContent,
            author: this.auth.username
        }, this.id).subscribe(function (value) {
            // redirect to home page on successful creation of blog
            _this.alert.success("Blog updated", true);
            _this.router.navigateByUrl('/user/blogs');
        });
        this.can = true;
    };
    /**
     * Discard save and navigate to home page
     */
    EditBlogComponent.prototype.discardBlog = function () {
        this.can = true;
        this.router.navigateByUrl('/home');
    };
    /**
     * Set title to selectedCategory
     * @param selectedCategory
     */
    EditBlogComponent.prototype.setTitle = function (selectedCategory) {
        this.title = selectedCategory;
    };
    /**
     * Toggle between preview of blog
     */
    EditBlogComponent.prototype.togglePreview = function () {
        this.setPreview = !this.setPreview;
    };
    return EditBlogComponent;
}());
EditBlogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-edit-blog',
        template: __webpack_require__("../../../../../src/app/components/edit-blog/edit-blog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/edit-blog/edit-blog.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_auth_service__["a" /* UserAuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_categories_service__["a" /* CategoriesService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_blog_server_service__["a" /* BlogServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_blog_server_service__["a" /* BlogServerService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_alert_service__["a" /* AlertService */]) === "function" && _f || Object])
], EditBlogComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=edit-blog.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/edit-blog/edit-blog.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditBlogModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular_froala_wysiwyg__ = __webpack_require__("../../../../angular-froala-wysiwyg/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_blog_component__ = __webpack_require__("../../../../../src/app/components/edit-blog/edit-blog.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EditBlogModule = (function () {
    function EditBlogModule() {
    }
    return EditBlogModule;
}());
EditBlogModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2_angular_froala_wysiwyg__["a" /* FroalaEditorModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_2_angular_froala_wysiwyg__["b" /* FroalaViewModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__edit_blog_component__["a" /* EditBlogComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__edit_blog_component__["a" /* EditBlogComponent */]]
    })
], EditBlogModule);

//# sourceMappingURL=edit-blog.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Fjalla+One);", ""]);
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Gudea);", ""]);

// module
exports.push([module.i, ".container-fluid {\r\n    padding-right: 40px;\r\n}\r\n\r\n\r\n.footer-bottom {\r\n    background-color: #4f151f;\r\n    min-height: 30px;\r\n    width: 100%;\r\n    margin-top: 5em;\r\n    margin-top: 20px;\r\n    position: fixed;\r\n    bottom: 0;\r\n}\r\n\r\n.copyright {\r\n    color: #fff;\r\n    line-height: 30px;\r\n    min-height: 30px;\r\n    padding: 7px 0;\r\n}\r\n.design {\r\n    color: #fff;\r\n    line-height: 30px;\r\n    min-height: 30px;\r\n    padding: 7px 0;\r\n    text-align: right;\r\n}\r\n.design a {\r\n    color: #fff;\r\n    padding-right: 8px;\r\n}\r\n\r\n.design a:hover {\r\n    text-decoration: none;\r\n    color: red;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"footer-bottom\">\n  <div class=\"container-fluid\">\n    <div class=\"row\">\n      <div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n        <div class=\"copyright\">\n          © 2017, White Board, All rights reserved\n        </div>\n      </div>\n      <div class=\"col-xs-6 col-md-6 col-lg-6\">\n        <div class=\"design\">\n          <a routerLink=\"/home\">\n            <span class=\"glyphicon glyphicon-home\"></span>  Home \n          </a>  \n          <span *ngIf=\"auth.isLoggedIn\">\n            <a routerLink=\"/create\">\n              <span class=\"glyphicon glyphicon-plus\"></span>  Write \n            </a>\n          </span>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_auth_service__ = __webpack_require__("../../../../../src/app/services/user-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(auth) {
        this.auth = auth;
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/components/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_auth_service__["a" /* UserAuthService */]) === "function" && _a || Object])
], FooterComponent);

var _a;
//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/footer/footer.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__footer_component__ = __webpack_require__("../../../../../src/app/components/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FooterModule = (function () {
    function FooterModule() {
    }
    return FooterModule;
}());
FooterModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__footer_component__["a" /* FooterComponent */]]
    })
], FooterModule);

//# sourceMappingURL=footer.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\r\n    margin-top: 50px;\r\n    width: 100%;\r\n}\r\n\r\n.label {\r\n    position: absolute;\r\n    top: -5px;\r\n    right: -5px;\r\n}\r\n\r\n.title {\r\n    width: 100%;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.card-category {\r\n    margin: 10px 0;\r\n    width: 100%;\r\n    padding: 15px;\r\n    background-color: white;\r\n    color: red;\r\n    font-weight: bold;\r\n    cursor: pointer;\r\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n}\r\n\r\n.card-category:hover {\r\n    background-color: red;\r\n    color: white;\r\n}\r\n\r\n.blogCard {\r\n    position: relative;\r\n    word-wrap: break-word;\r\n    width: 50%;\r\n    padding: 10px 20px;\r\n    margin: 10px 10px;\r\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n    cursor: pointer;\r\n}\r\n\r\n.blogs {\r\n    margin: 0 auto;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 10px;\r\n}\r\n\r\n.blogCard:hover {\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\nh2 {\r\n    font-size: 20px;\r\n    text-align: left;\r\n    padding-left: 15px;\r\n}\r\n\r\n@media screen and (max-width: 1170px){\r\n    .blogCard {\r\n        width: 100%; \r\n        margin: 10px auto;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 991px){\r\n    .card-category {\r\n        padding: 15px;\r\n    }\r\n    \r\n    .blogs {\r\n        padding-left: 15px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .blogs {\r\n        position: relative;\r\n    }\r\n}\r\n\r\n.foot {\r\n    color: #666565; \r\n    text-align: left;\r\n    padding-top: 20px;\r\n    padding-left: 15px;\r\n}\r\n\r\n.foot p:nth-child(1){\r\n    margin-bottom: 10px;\r\n    font-weight: 700;\r\n    color: royalblue;\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    h2 {\r\n        font-size: 20px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n  <div class=\"row\" align=\"center\">\r\n    <div *ngIf=\"error\" class=\"message col-xs-12\">{{message}}</div>\r\n    <div class=\"blogs col-xs-12 col-sm-3\">\r\n        <app-sidebar *ngFor=\"let category of categories; let i = index\">\r\n            <div (click)=\"navCategories(category.name)\" class=\"card card-category col-xs-12\">\r\n              <p>{{ category.name }}</p>\r\n              <span class=\"label label-success\">{{count[i]}}</span>\r\n            </div>\r\n        </app-sidebar>\r\n    </div>\r\n    <div *ngIf=\"!error\" class=\"blogs col-xs-12 col-sm-9\">\r\n      <app-toplists *ngFor=\"let blog of blogArray\">\r\n        <div class=\"blogCard card\" (click)=\"blogDetail(blog)\">\r\n          <h2 class=\"title\" [innerHTML]=\"blog?.title\"></h2>\r\n          <div class=\"foot\">\r\n              <p>{{blog?.category}}</p>\r\n              <p>{{blog?.author}}</p>\r\n              <p><em>{{blog?.updatedAt | date: 'yMMMd'}}</em></p>\r\n          </div>\r\n        </div>\r\n      </app-toplists>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_blog_server_service__ = __webpack_require__("../../../../../src/app/services/blog-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_auth_service__ = __webpack_require__("../../../../../src/app/services/user-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var HomeComponent = (function () {
    function HomeComponent(catService, blog, route, actRoute, auth) {
        this.catService = catService;
        this.blog = blog;
        this.route = route;
        this.actRoute = actRoute;
        this.auth = auth;
        // Array to hold the top 10 blogs
        this.blogArray = [];
        this.count = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.findTopBlogs();
        this.getCategories();
        this.sub = this.actRoute.queryParams.subscribe(function (params) {
            _this.token = params['token'];
            _this.user = params['user'];
            _this.uid = params['_id'];
        });
        if (this.token) {
            this.auth.authToken = this.token;
            this.auth.isLoggedIn = true;
            this.auth.headers.append('x-access-token', this.auth.authToken);
        }
        if (this.user) {
            this.auth.username = this.user;
        }
        if (this.uid) {
            this.auth._id = this.uid;
        }
    };
    /**
     * Get the list of categories
     */
    HomeComponent.prototype.getCategories = function () {
        var _this = this;
        this.catService.getCategories().then(function (categories) {
            _this.categories = categories;
            categories.forEach(function (element, i) {
                _this.blog.getBlogCount(element['name']).subscribe(function (val) {
                    _this.count[i] = val;
                });
            });
        });
    };
    /**
     * Navigation to the category page
     * @param name
     */
    HomeComponent.prototype.navCategories = function (name) {
        this.route.navigate(['/blog', name]);
    };
    /**
     * Function to retrieve the top 10 blogs
     */
    HomeComponent.prototype.findTopBlogs = function () {
        var _this = this;
        this.blog.findTopBlogs()
            .subscribe(function (value) {
            if (typeof (value) === 'string') {
                _this.error = true;
                _this.message = value;
                return;
            }
            _this.blogArray = value;
        });
    };
    /**
     * Navigate to blog page
     * @param blog
     */
    HomeComponent.prototype.blogDetail = function (blog) {
        this.route.navigate(['/blog', blog.category, blog._id]);
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/home/home.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_categories_service__["a" /* CategoriesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_blog_server_service__["a" /* BlogServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_blog_server_service__["a" /* BlogServerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_auth_service__["a" /* UserAuthService */]) === "function" && _e || Object])
], HomeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_component__ = __webpack_require__("../../../../../src/app/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_module__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toplists_toplists_module__ = __webpack_require__("../../../../../src/app/components/toplists/toplists.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__sidebar_sidebar_module__["a" /* SidebarModule */],
            __WEBPACK_IMPORTED_MODULE_4__toplists_toplists_module__["a" /* ToplistsModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__home_component__["a" /* HomeComponent */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" (ngSubmit)=\"login(loginForm.value)\">\r\n    <p class=\"alertError\" *ngIf=\"error !== ''\">{{ error }}</p>\r\n    <input type=\"text\" name=\"username\" id=\"username\" [formControl]=\"username\" placeholder=\"User name\">\r\n    <input type=\"password\" name=\"password\" id=\"password\" [formControl]=\"password\" placeholder=\"Enter password\">\r\n    <button type=\"submit\" [disabled]=\"!loginForm.valid\" class=\"modButton btn btn-primary btn-lg\"> Log In</button>\r\n    <br><br>\r\n    <p> Not a member yet? <a (click)=\"gotoSignUp()\">Sign up here</a>.</p>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_user_auth_service__ = __webpack_require__("../../../../../src/app/services/user-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(fb, route, auth) {
        this.fb = fb;
        this.route = route;
        this.auth = auth;
        this.error = '';
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]);
        this.loginForm = this.fb.group({
            username: this.username,
            password: this.password
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (model) {
        var _this = this;
        this.error = '';
        this.data = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"](function (observer) {
            setTimeout(function () {
                observer.next(_this.auth.message);
            }, 1000);
        });
        var subscription = this.data.subscribe(function (value) { return _this.error = value; }, function (error) { return _this.error = error; });
        this.auth.login(model);
        if (this.auth.isLoggedIn) {
            subscription.unsubscribe();
        }
    };
    LoginComponent.prototype.gotoSignUp = function () {
        this.route.navigateByUrl('/auth/signup');
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_user_auth_service__["a" /* UserAuthService */]) === "function" && _c || Object])
], LoginComponent);

var _a, _b, _c;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var LoginModule = (function () {
    function LoginModule() {
    }
    return LoginModule;
}());
LoginModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_4__login_component__["a" /* LoginComponent */]]
    })
], LoginModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".container-fluid {\r\n    padding-right: 40px;\r\n}\r\n\r\n.navbar {\r\n    background-color: #fff;\r\n    opacity: 1;\r\n    height: 60px;\r\n    border-radius: 0;\r\n    margin: auto;\r\n    top: -60px;\r\n    width: 100%;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n}\r\n\r\na.navbar-brand {\r\n    font-weight: 700;\r\n    font-size: 25px;\r\n    height: 40px;\r\n    color: red;\r\n    margin-left: 10px !important;\r\n}\r\n\r\n.navbar-toggle {\r\n    margin-top: 15px;\r\n    margin-right: 0;\r\n    border: 0;\r\n}\r\n\r\n.navbar-toggle:hover {\r\n    background-color: #000;\r\n}\r\n\r\n.navbar-toggle .icon-bar {\r\n    background-color: #000;\r\n}\r\n\r\n.navbar-toggle:hover .icon-bar {\r\n    background-color: #FFF;\r\n}\r\n\r\na {\r\n    padding: 10px !important;\r\n    margin-top: 10px;\r\n    border: 1px solid transparent;\r\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n}\r\n\r\na:hover {\r\n    border-radius: 4px;\r\n    border: 1px solid red;\r\n    background-color: red !important;\r\n    color: #FFF !important;\r\n}\r\n\r\n.dropdown-menu {\r\n    left: 30px;\r\n    right: 0px;\r\n    text-align: center;\r\n}\r\n\r\n.dropdown-menu>li>a {\r\n    color: #337ab7;\r\n}\r\n\r\n.dropdown-toggle {\r\n    margin-top: 12px;\r\n    border: 0;\r\n    background-color: red;\r\n    color: #fff;\r\n}\r\n\r\n#dropdownMenu1 {\r\n    width: 100%;\r\n    border-radius: 0;\r\n}\r\n    \r\nul {\r\n    margin-top: 0;\r\n    margin-bottom: 0;\r\n}\r\n\r\nul.dropdown-menu {\r\n    padding-top: 0;\r\n    padding-bottom: 0;\r\n}\r\n\r\nul.dropdown-menu li a {\r\n    margin-top: 0;\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    #bs-example-navbar-collapse-1 {\r\n        box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);\r\n        background-color: #FFF;\r\n        border: 1px solid #f2f2f2;\r\n        border-bottom: 0;\r\n        z-index: 500;\r\n        top: 60px;\r\n        position: absolute;\r\n        right: 30px;\r\n        width: 250px;\r\n        text-align: center;\r\n        padding-bottom: 0;\r\n    }\r\n\r\n    ul li a {\r\n        margin-top: 0;\r\n    }\r\n\r\n    .dropdown-toggle {\r\n        margin-top: 0;\r\n    }\r\n\r\n    #author {\r\n        padding-left: 0;\r\n    }\r\n\r\n    a:hover {\r\n        border-radius: 0;\r\n        border: 1px solid red;\r\n        background-color: red !important;\r\n        color: #FFF !important;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 576px) {\r\n    #bs-example-navbar-collapse-1 {\r\n        width: 93%;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav *ngIf=\"visible\" class=\"navbar navbar-fixed-top\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a class=\"navbar-brand\" routerLink=\"/home\">Whiteboard</a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\r\n      <ul class=\"nav navbar-nav navbar-left\">\r\n          <li>\r\n            <ul *ngIf=\"auth.isLoggedIn\" id=\"author\">\r\n              <button class=\"btn btn-default dropdown-toggle\" type=\"button\" id=\"dropdownMenu1\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\r\n                  {{ auth.username }}\r\n                <span class=\"caret\"></span>\r\n              </button>\r\n              <ul class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\r\n                <li><a routerLink=\"/user/blogs\"><i class=\"fa fa-sticky-note\" aria-hidden=\"true\"></i> Your posts </a></li>\r\n                <li><a routerLink=\"/user/bookmarks\"><i class=\"fa fa-bookmark\" aria-hidden=\"true\"></i> Your bookmarks </a></li>\r\n              </ul>\r\n            </ul>\r\n          </li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li class=\"active\"><a routerLink=\"/home\"><span class=\"glyphicon glyphicon-home\"></span> Home <span class=\"sr-only\">(current)</span></a></li>\r\n        <li *ngIf=\"!auth.isLoggedIn\"><a routerLink=\"/auth\"><span class=\"glyphicon glyphicon-log-in\"></span> Log in</a></li>\r\n        <li *ngIf=\"auth.isLoggedIn\"><a routerLink=\"/create\"><span class=\"glyphicon glyphicon-plus\"></span> Write a blog </a></li>\r\n        <li *ngIf=\"auth.isLoggedIn\"><a (click)=\"logout()\"><span class=\"glyphicon glyphicon-log-out\"></span> Log out</a></li>\r\n      </ul>\r\n    </div><!-- /.navbar-collapse -->\r\n  </div><!-- /.container-fluid -->\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_auth_service__ = __webpack_require__("../../../../../src/app/services/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavComponent = (function () {
    function NavComponent(auth, router) {
        this.auth = auth;
        this.router = router;
        this.visible = true;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    /**
     * Toggles the navbar visibility
     */
    NavComponent.prototype.show = function () {
        this.visible = !this.visible;
    };
    /**
     * Log out user from the current session
     */
    NavComponent.prototype.logout = function () {
        this.auth.logout();
    };
    return NavComponent;
}());
NavComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-nav',
        template: __webpack_require__("../../../../../src/app/components/nav/nav.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/nav/nav.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_user_auth_service__["a" /* UserAuthService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], NavComponent);

var _a, _b;
//# sourceMappingURL=nav.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/nav/nav.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__nav_component__ = __webpack_require__("../../../../../src/app/components/nav/nav.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__ = __webpack_require__("../../../../../src/app/components/auth/auth.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_blog_create_blog_module__ = __webpack_require__("../../../../../src/app/components/create-blog/create-blog.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var NavModule = (function () {
    function NavModule() {
    }
    return NavModule;
}());
NavModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__auth_auth_module__["a" /* AuthModule */],
            __WEBPACK_IMPORTED_MODULE_5__create_blog_create_blog_module__["a" /* CreateBlogModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__nav_component__["a" /* NavComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__nav_component__["a" /* NavComponent */]]
    })
], NavModule);

//# sourceMappingURL=nav.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/mock-categories.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CATEGORIES; });
var CATEGORIES = [
    { name: 'Style' },
    { name: 'Tech & Science' },
    { name: 'Sports' },
    { name: 'Arts & Culture' },
    { name: 'Travel' },
    { name: 'Music' },
    { name: 'Books' },
    { name: 'Business' },
    { name: 'Photos & Design' },
    { name: 'Living' }
];
//# sourceMappingURL=mock-categories.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/sidebar/sidebar.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebar_component__ = __webpack_require__("../../../../../src/app/components/sidebar/sidebar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SidebarModule = (function () {
    function SidebarModule() {
    }
    return SidebarModule;
}());
SidebarModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__sidebar_component__["a" /* SidebarComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__sidebar_component__["a" /* SidebarComponent */]]
    })
], SidebarModule);

//# sourceMappingURL=sidebar.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=\"text\"].ng-dirty.ng-invalid:focus,\r\ninput[type=\"email\"].ng-dirty.ng-invalid:focus,\r\ninput[type=\"password\"].ng-dirty.ng-invalid:focus {\r\n    border-bottom: 2px solid #F70909;\r\n    color: #F70909;\r\n    transition: 0.2s ease;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"signupForm\" (ngSubmit)=\"signup(signupForm.value)\">\r\n  <p class=\"alertError\" *ngIf=\"error !== ''\">{{ error }}</p>\r\n  <input type=\"text\" name=\"username\" id=\"username\" [formControl]=\"username\" placeholder=\"User name\">\r\n  <div class=\"alertError\" [hidden]=\"!username.dirty || !username.invalid\">\r\n    <p [hidden]=\"!username.hasError('inValidUsername')\">Invalid Username. Username must contain only letters, numbers and underscores</p>\r\n  </div>\r\n  <input type=\"email\" name=\"email\" id=\"email\" [formControl]=\"email\" placeholder=\"Email address\">\r\n  <div class=\"alertError\" [hidden]=\"!email.dirty || !email.invalid\">\r\n      <p [hidden]=\"!email.invalid && !email.hasError('inValidEmail')\">Invalid Email</p>\r\n    </div>\r\n  <input type=\"password\" name=\"password\" id=\"password\" [formControl]=\"password\" placeholder=\"Enter password\">\r\n  <div class=\"alertError\" [hidden]=\"!password.dirty || !password.invalid\">\r\n    <p [hidden]=\"!password.hasError('inValidPassword')\">Invalid Password. Password should contain atleast one number,\r\n      one lowercase and one uppercase letter and should be atleast 6 characters long.</p>\r\n  </div>\r\n  <input type=\"password\" name=\"rePassword\" id=\"rePassword\" [formControl]=\"rePassword\" \r\n  [ngClass]=\"{'ng-invalid': password.value !== rePassword.value}\" placeholder=\"Re-Enter password\">\r\n  <div class=\"alertError\" [hidden]=\"(password.value === rePassword.value)\">\r\n    <p>Passwords don't match</p>\r\n  </div>\r\n  <button type=\"submit\" [disabled]=\"!signupForm.valid\" class=\"modButton btn btn-primary btn-lg\"> Sign up</button>\r\n  <br><br>\r\n  <p> Already a member? <a (click)=gotoLogin()>Log in here</a>.</p>\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_form_validator__ = __webpack_require__("../../../../../src/app/validators/form.validator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_user_auth_service__ = __webpack_require__("../../../../../src/app/services/user-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SignupComponent = (function () {
    function SignupComponent(fb, route, auth) {
        this.fb = fb;
        this.route = route;
        this.auth = auth;
        this.error = '';
        this.fv = new __WEBPACK_IMPORTED_MODULE_3__validators_form_validator__["a" /* FormValidators */]();
        this.username = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.fv.checkUsername]);
        this.email = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email, this.fv.checkEmail]);
        this.password = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.fv.checkPassword]);
        this.rePassword = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, this.fv.checkPassword]);
        this.signupForm = this.fb.group({
            username: this.username,
            email: this.email,
            password: this.password,
            rePassword: this.rePassword
        });
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.signup = function (model) {
        var _this = this;
        this.error = '';
        this.data = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"](function (observer) {
            setTimeout(function () {
                observer.next(_this.auth.message);
            }, 1000);
        });
        var subscription = this.data.subscribe(function (value) { return _this.error = value; }, function (error) { return _this.error = error; });
        this.auth.register(model);
        if (this.auth.isLoggedIn) {
            subscription.unsubscribe();
        }
    };
    SignupComponent.prototype.gotoLogin = function () {
        this.route.navigateByUrl('/auth/login');
    };
    return SignupComponent;
}());
SignupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-signup',
        template: __webpack_require__("../../../../../src/app/components/signup/signup.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/signup/signup.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormBuilder */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_user_auth_service__["a" /* UserAuthService */]) === "function" && _c || Object])
], SignupComponent);

var _a, _b, _c;
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/signup/signup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_component__ = __webpack_require__("../../../../../src/app/components/signup/signup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SignupModule = (function () {
    function SignupModule() {
    }
    return SignupModule;
}());
SignupModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__signup_component__["a" /* SignupComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_5__signup_component__["a" /* SignupComponent */]]
    })
], SignupModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/toplists/toplists.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "div {\r\n    margin: 0 auto;\r\n    padding: auto;\r\n    \r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/toplists/toplists.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-content></ng-content>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/toplists/toplists.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToplistsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ToplistsComponent = (function () {
    function ToplistsComponent() {
        this.blogArray = [];
    }
    ToplistsComponent.prototype.ngOnInit = function () {
    };
    return ToplistsComponent;
}());
ToplistsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-toplists',
        template: __webpack_require__("../../../../../src/app/components/toplists/toplists.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/toplists/toplists.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ToplistsComponent);

//# sourceMappingURL=toplists.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/toplists/toplists.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToplistsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toplists_component__ = __webpack_require__("../../../../../src/app/components/toplists/toplists.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ToplistsModule = (function () {
    function ToplistsModule() {
    }
    return ToplistsModule;
}());
ToplistsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_2__toplists_component__["a" /* ToplistsComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_2__toplists_component__["a" /* ToplistsComponent */]]
    })
], ToplistsModule);

//# sourceMappingURL=toplists.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-bookmark/user-bookmark.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blogCard {\r\n    position: relative;\r\n    word-wrap: break-word;\r\n    width: 50%;\r\n    padding: 10px 20px;\r\n    margin: 10px 10px;\r\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\nh2 {\r\n    font-size: 20px;\r\n    text-align: left;\r\n    margin-bottom: 0;\r\n    padding-left: 15px;\r\n}\r\n\r\n.blogs {\r\n    margin: 0 auto;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 10px;\r\n}\r\n\r\n.blogCard:hover {\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\n@media screen and (max-width: 1170px){\r\n    .blogCard {\r\n        width: 100%; \r\n        margin: 10px auto;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 991px){\r\n    \r\n    .blogs {\r\n        padding-left: 15px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .blogs {\r\n        position: relative;\r\n    }\r\n}\r\n\r\n.foot {\r\n    color: #666565;\r\n    text-align: left;\r\n    padding-top: 20px;\r\n    padding-left: 15px;\r\n}\r\n\r\n.foot p:nth-child(1){\r\n    margin-bottom: 10px;\r\n    font-weight: 700;\r\n    color: royalblue;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user-bookmark/user-bookmark.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n    <li><a routerLink=\"/home\">Home</a></li>\r\n    <li>My Bookmarks</li>\r\n</ol>\r\n\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\" align=\"center\">\r\n    <div class=\"col-xs-12\">\r\n      <div class=\"col-xs-12\">\r\n        <h3>My Bookmarks</h3>\r\n      </div>\r\n      <div class=\"col-xs-12\">\r\n        <p class=\"message\" *ngIf=\"blogArray.length === 0\">{{ message }}</p>\r\n        <div *ngFor=\"let blog of blogArray\" class=\"blogCard card\" (click)=\"blogDetail(blog)\">\r\n          <h2 [innerHTML]=\"blog?.title\"></h2>\r\n          <div class=\"foot\">\r\n              <p>{{blog?.category}}</p>\r\n              <p>{{blog?.author}}</p>\r\n              <p><em>{{blog?.updatedAt | date: 'yMMMd'}}</em></p>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user-bookmark/user-bookmark.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBookmarkComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blog_server_service__ = __webpack_require__("../../../../../src/app/services/blog-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_auth_service__ = __webpack_require__("../../../../../src/app/services/user-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserBookmarkComponent = (function () {
    function UserBookmarkComponent(blog, auth, route) {
        this.blog = blog;
        this.auth = auth;
        this.route = route;
        this.blogArray = [];
    }
    UserBookmarkComponent.prototype.ngOnInit = function () {
        this.getUserBookmarks();
    };
    /**
     * Get bookmarks by user
     */
    UserBookmarkComponent.prototype.getUserBookmarks = function () {
        var _this = this;
        this.blog.getUserBookmarks()
            .subscribe(function (value) {
            if (typeof (value) === 'string') {
                _this.message = value;
                _this.blogArray = [];
            }
            else {
                _this.blogArray = value;
            }
        });
    };
    /**
     * Get blog details based on blog
     * @param blog
     */
    UserBookmarkComponent.prototype.blogDetail = function (blog) {
        this.route.navigate(['/blog', blog.category, blog._id]);
    };
    return UserBookmarkComponent;
}());
UserBookmarkComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user-bookmark',
        template: __webpack_require__("../../../../../src/app/components/user-bookmark/user-bookmark.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user-bookmark/user-bookmark.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_blog_server_service__["a" /* BlogServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_blog_server_service__["a" /* BlogServerService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_auth_service__["a" /* UserAuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object])
], UserBookmarkComponent);

var _a, _b, _c;
//# sourceMappingURL=user-bookmark.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user-bookmark/user-bookmark.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserBookmarkModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_bookmark_component__ = __webpack_require__("../../../../../src/app/components/user-bookmark/user-bookmark.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserBookmarkModule = (function () {
    function UserBookmarkModule() {
    }
    return UserBookmarkModule;
}());
UserBookmarkModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__user_bookmark_component__["a" /* UserBookmarkComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__user_bookmark_component__["a" /* UserBookmarkComponent */]]
    })
], UserBookmarkModule);

//# sourceMappingURL=user-bookmark.module.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".blogCard {\r\n    position: relative;\r\n    word-wrap: break-word;\r\n    width: 50%;\r\n    padding: 10px 20px;\r\n    margin: 10px 10px;\r\n    transition: all 0.3s cubic-bezier(.25,.8,.25,1);\r\n    cursor: pointer;\r\n    \r\n}\r\n\r\nh2 {\r\n    font-size: 20px;\r\n    text-align: left;\r\n}\r\n\r\n.blogs {\r\n    margin: 0 auto;\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    top: 10px;\r\n}\r\n\r\n.dropdown {\r\n    top: 20px;\r\n}\r\n\r\n.floatLeft {\r\n    float: left;\r\n}\r\n\r\n.floatRight {\r\n    float: right;\r\n}\r\n\r\n.clear {\r\n    clear: both;\r\n}\r\n\r\n.blogCard:hover {\r\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\r\n}\r\n\r\n@media screen and (max-width: 1170px){\r\n    .blogCard {\r\n        width: 100%; \r\n        margin: 10px auto;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 991px){\r\n    \r\n    .blogs {\r\n        padding-left: 15px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 767px) {\r\n    .blogs {\r\n        position: relative;\r\n    }\r\n}\r\n\r\n.foot {\r\n    color: #666565;\r\n    text-align: left;\r\n    padding-top: 20px;\r\n    padding-left: 15px;\r\n}\r\n\r\n.foot p:nth-child(1){\r\n    margin-bottom: 10px;\r\n    font-weight: 700;\r\n    color: royalblue;\r\n}\r\n\r\n.message {\r\n    font-size: 50px;\r\n    padding: 10px;\r\n}\r\n\r\n@media screen and (max-width: 760px) {\r\n    .message {\r\n        font-size: 30px;\r\n    }\r\n}\r\n\r\n@media screen and (max-width: 400px) {\r\n    h2 {\r\n        font-size: 20px;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<ol class=\"breadcrumb\">\r\n    <li><a routerLink=\"/home\">Home</a></li>\r\n    <li>My Posts</li>\r\n</ol>\r\n<div class=\"container-fluid\">\r\n  <div class=\"row\" align=\"center\">\r\n    <div class=\"col-xs-12\">\r\n      <h3>My Posts</h3>\r\n    </div>\r\n    <div class=\"col-xs-12\" align=\"center\">\r\n      <p class=\"message\" *ngIf=\"blogArray.length === 0\">{{ message }}</p>\r\n      <div *ngFor=\"let blog of blogArray\" class=\"blogCard card\">\r\n        <div class=\"floatLeft col-xs-10\">\r\n          <a (click)=\"blogDetail(blog)\"><h2 [innerHTML]=\"blog?.title\"></h2></a>\r\n        </div>\r\n        <div class=\"floatRight dropdown col-xs-2\" style=\"float:right;\">\r\n          <a type=\"button\" data-toggle=\"dropdown\"><i class=\"fa fa-caret-down fa-2x\" aria-hidden=\"true\"></i></a>\r\n          <ul class=\"dropdown-menu pull-right\">\r\n            <li><a (click)=\"edit(blog._id)\">Edit</a></li>\r\n            <li><a (click)=\"deleteBlog(blog._id)\">Delete</a></li>\r\n          </ul> \r\n        </div>\r\n        <br><br>\r\n        <div class=\"clear foot\">\r\n            <p>{{blog?.category}}</p>\r\n            <p>{{blog?.author}}</p>\r\n            <p><em>{{blog?.updatedAt | date: 'yMMMd'}}</em></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_blog_server_service__ = __webpack_require__("../../../../../src/app/services/blog-server.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_user_auth_service__ = __webpack_require__("../../../../../src/app/services/user-auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_alert_service__ = __webpack_require__("../../../../../src/app/services/alert.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserComponent = (function () {
    function UserComponent(alert, blog, auth, route) {
        this.alert = alert;
        this.blog = blog;
        this.auth = auth;
        this.route = route;
        this.blogArray = [];
    }
    UserComponent.prototype.ngOnInit = function () {
        this.getBlogsByUser(this.auth.username);
    };
    /**
     * Get blog posts by user
     * @param author
     */
    UserComponent.prototype.getBlogsByUser = function (author) {
        var _this = this;
        this.blog.getBlogsByUser(author)
            .subscribe(function (value) {
            if (typeof (value) === 'string') {
                _this.message = value;
            }
            else {
                _this.blogArray = value;
            }
        });
    };
    /**
     * Get blog details for a given blog
     * @param blog
     */
    UserComponent.prototype.blogDetail = function (blog) {
        this.route.navigate(['/blog', blog.category, blog._id]);
    };
    /**
     * Delete blog with given blog id
     * @param blog_id
     */
    UserComponent.prototype.deleteBlog = function (blog_id) {
        var _this = this;
        if (window.confirm('Are you sure you want to delete this blog')) {
            this.blog.deleteBlog(blog_id).subscribe(function (value) {
                if (value) {
                    _this.getBlogsByUser(_this.auth.username);
                    _this.alert.success("Blog deleted", true);
                }
            });
        }
    };
    /**
     * Go to edit page
     * @param id
     */
    UserComponent.prototype.edit = function (id) {
        this.route.navigateByUrl("/edit/" + id);
    };
    return UserComponent;
}());
UserComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-user',
        template: __webpack_require__("../../../../../src/app/components/user/user.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/user/user.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_alert_service__["a" /* AlertService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_blog_server_service__["a" /* BlogServerService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_blog_server_service__["a" /* BlogServerService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_user_auth_service__["a" /* UserAuthService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _d || Object])
], UserComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_component__ = __webpack_require__("../../../../../src/app/components/user/user.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var UserModule = (function () {
    function UserModule() {
    }
    return UserModule;
}());
UserModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_3__user_component__["a" /* UserComponent */]],
        exports: [__WEBPACK_IMPORTED_MODULE_3__user_component__["a" /* UserComponent */]]
    })
], UserModule);

//# sourceMappingURL=user.module.js.map

/***/ }),

/***/ "../../../../../src/app/guards/activate.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActivateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_auth_service__ = __webpack_require__("../../../../../src/app/services/user-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ActivateGuard = (function () {
    function ActivateGuard(router, auth) {
        this.router = router;
        this.auth = auth;
        this.can = false;
    }
    ActivateGuard.prototype.canActivate = function (next, state) {
        if (this.auth.isLoggedIn) {
            return true;
        }
        else {
            this.router.navigateByUrl('/auth');
            return false;
        }
    };
    return ActivateGuard;
}());
ActivateGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_user_auth_service__["a" /* UserAuthService */]) === "function" && _b || Object])
], ActivateGuard);

var _a, _b;
//# sourceMappingURL=activate.guard.js.map

/***/ }),

/***/ "../../../../../src/app/guards/deactivate.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DeactivateGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DeactivateGuard = (function () {
    function DeactivateGuard() {
    }
    DeactivateGuard.prototype.canDeactivate = function (component) {
        var can = component.canDeactivate();
        if (!can) {
            if (window.confirm('Are you sure you want to continue? Any unsaved changes will be erased.')) {
                return true;
            }
            else {
                return false;
            }
        }
        return true;
    };
    return DeactivateGuard;
}());
DeactivateGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
], DeactivateGuard);

//# sourceMappingURL=deactivate.guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    /**
     * Function to show alert with success message
     * @param message
     * @param keepAfterNavigationChange
     */
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        var _this = this;
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
        setTimeout(function () {
            _this.subject.next();
        }, 2500);
    };
    /**
     * Function to show alert with error message
     * @param message
     * @param keepAfterNavigationChange
     */
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    };
    /**
     * Returns subject as Observable
     * @return Observable
     */
    AlertService.prototype.getMessage = function () {
        // retrun subject as observable
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/blog-server.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogServerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_auth_service__ = __webpack_require__("../../../../../src/app/services/user-auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//TODO: add logic to catch errors







var baseURL = "http://localhost:3000";
var BlogServerService = (function () {
    function BlogServerService(http, route, auth) {
        this.http = http;
        this.route = route;
        this.auth = auth;
        this.blogs = [];
        this.message = '';
        this.error = '';
    }
    /**
     * Function to create a new blog and save to the database
     * @param model Blog data
     */
    BlogServerService.prototype.createBlog = function (model) {
        return this.http.post(baseURL + '/blogs', model, { headers: this.auth.headers })
            .map(function (response) {
            var resp = response.json();
            if (response.status === 500) {
                return { message: resp.err, status: 500 };
            }
            else {
                return { message: resp.message, status: 200 };
            }
        });
    };
    /**
     * Retrieve top 10 blogs from the database
     */
    BlogServerService.prototype.findTopBlogs = function () {
        return this.http.get(baseURL + '/blogs', { headers: this.auth.headers })
            .map(function (response) {
            var respArray = response.json();
            return respArray;
        })
            .catch(function (error) {
            return ['Internal server error. Check your internet connection or try again later'];
        });
        ;
    };
    /**
     * Get blog detail for a blog with a given id
     * @param id
     */
    BlogServerService.prototype.getBlogDetail = function (id) {
        var _this = this;
        return this.http.get(baseURL + ("/blogs/post/" + id), { headers: this.auth.headers })
            .map(function (response) {
            _this.message = response.json();
            return _this.message;
        })
            .catch(function (error) {
            return ['Internal server error. Check your internet connection or try again later'];
        });
    };
    /**
     * get blogs per category 10 at a time
     * @param category
     * @param skip
     */
    BlogServerService.prototype.getBlogByCategories = function (category, skip) {
        var _this = this;
        return this.http.get(baseURL + ("/blogs/category/" + category + "?skip=" + skip), { headers: this.auth.headers })
            .map(function (response) {
            if (response.json().length === 0) {
                _this.message = "No blogs found under this category. Be the first to write a blog under this category.";
            }
            else {
                _this.message = response.json();
            }
            return _this.message;
        })
            .catch(function (error) {
            return ['Internal server error. Check your internet connection or try again later'];
        });
    };
    //TODO: change author to uid and do the same in database
    /**
     * get blogs posted by given author name
     * @param author
     */
    BlogServerService.prototype.getBlogsByUser = function (author) {
        var _this = this;
        this.blogs = [];
        this.message = '';
        return this.http.get(baseURL + ("/blogs/author/" + author + "/posts"), { headers: this.auth.headers })
            .map(function (response) {
            // check if no blogs posted by user
            if (response.json().length === 0) {
                _this.message = "Create your first blog";
                return _this.message;
            }
            response.json().forEach(function (elem) {
                _this.blogs.push(elem);
            });
            return _this.blogs;
        });
    };
    /**
     * get all bookmarks for the user
     */
    BlogServerService.prototype.getUserBookmarks = function () {
        var _this = this;
        this.blogs = [];
        this.message = '';
        return this.http.get(baseURL + "/bookmarks/user", { headers: this.auth.headers })
            .map(function (response) {
            // check if user has no bookmarks
            if (response.json().blogs.length === 0) {
                _this.message = "No bookmarks found.";
                return _this.message;
            }
            response.json().blogs.forEach(function (elem) {
                _this.blogs.push(elem);
            });
            return _this.blogs;
        });
    };
    /**
     * save blog with given id to user's bookmarks list
     * @param blog_id
     */
    BlogServerService.prototype.saveUserBookmarks = function (blog_id) {
        var _this = this;
        return this.http.post(baseURL + "/bookmarks/user", { _id: blog_id }, { headers: this.auth.headers })
            .map(function (response) {
            _this.message = response.json();
            return _this.message;
        });
    };
    /**
     * save the blog with given id to users likes
     * and increment likes on blog
     * @param blog_id
     */
    BlogServerService.prototype.postLikes = function (blog_id) {
        var _this = this;
        return this.http.post(baseURL + "/likedBlogs", { _id: blog_id }, { headers: this.auth.headers })
            .map(function (response) {
            _this.likes = response.json();
            return _this.likes;
        });
    };
    /**
     * Delete blog with given id
     * @param blog_id
     */
    BlogServerService.prototype.deleteBlog = function (blog_id) {
        return this.http.delete(baseURL + ("/blogs/author/posts/" + blog_id), { headers: this.auth.headers })
            .map(function (response) {
            return true;
        });
    };
    /**
     * Update blog and save to database
     * @param model
     * @param blog_id
     */
    BlogServerService.prototype.editBlog = function (model, blog_id) {
        return this.http.put(baseURL + ("/blogs/author/posts/" + blog_id), model, { headers: this.auth.headers })
            .map(function (response) {
            return response.json();
        });
    };
    /**
     * Get number of blogs per category
     * @param category
     */
    BlogServerService.prototype.getBlogCount = function (category) {
        return this.http.get(baseURL + ("/blogs/category/" + category + "/count"), { headers: this.auth.headers })
            .map(function (response) {
            return response.json();
        });
    };
    BlogServerService.prototype.getBlogComments = function (blog_id) {
        return this.http.get(baseURL + ("/blogs/" + blog_id + "/comments"), { headers: this.auth.headers })
            .map(function (response) {
            return response.json();
        });
    };
    BlogServerService.prototype.postBlogComments = function (blog_id, model) {
        return this.http.post(baseURL + ("/blogs/" + blog_id + "/comments"), model, { headers: this.auth.headers }).toPromise();
    };
    return BlogServerService;
}());
BlogServerService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__user_auth_service__["a" /* UserAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__user_auth_service__["a" /* UserAuthService */]) === "function" && _c || Object])
], BlogServerService);

var _a, _b, _c;
//# sourceMappingURL=blog-server.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/categories.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_sidebar_mock_categories__ = __webpack_require__("../../../../../src/app/components/sidebar/mock-categories.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CategoriesService = (function () {
    function CategoriesService() {
    }
    /**
     * Returns a promise which can be resolved to get the categories
     * @returns Promise
     */
    CategoriesService.prototype.getCategories = function () {
        return Promise.resolve(__WEBPACK_IMPORTED_MODULE_1__components_sidebar_mock_categories__["a" /* CATEGORIES */]);
    };
    return CategoriesService;
}());
CategoriesService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CategoriesService);

//# sourceMappingURL=categories.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    /**
     * Store item in local storage
     * @param key
     * @param value
     */
    LocalStorageService.prototype.store = function (key, value) {
        localStorage.setItem(key, value);
    };
    /**
     * Get item from local storage based on key
     * @param defaultValue
     */
    LocalStorageService.prototype.get = function (key, defaultValue) {
        return localStorage.getItem(key) || defaultValue;
    };
    /**
     * Removes the key-value pair from local storage based on key
     * @param key
     */
    LocalStorageService.prototype.remove = function (key) {
        localStorage.removeItem(key);
    };
    /**
     * Store an object in local storage
     * @param key
     * @param value
     */
    LocalStorageService.prototype.storeObject = function (key, value) {
        localStorage[key] = JSON.stringify(value);
    };
    /**
     * Get the object from local storage based on given key
     * @param key
     * @param defaultValue
     */
    LocalStorageService.prototype.getObject = function (key, defaultValue) {
        return JSON.parse(localStorage.getItem(key) || defaultValue);
    };
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LocalStorageService);

//# sourceMappingURL=local-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/user-auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_local_storage_service__ = __webpack_require__("../../../../../src/app/services/local-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var baseURL = "http://localhost:3000";
var UserAuthService = (function () {
    function UserAuthService(http, route, local) {
        this.http = http;
        this.route = route;
        this.local = local;
        this.TOKEN_KEY = 'Token';
        this.isLoggedIn = false;
        this.username = '';
        this.isVerified = false;
        this.admin = false;
        this.authToken = undefined;
        this._id = '';
        this.message = '';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
    }
    /**
     * Use the credentials for
     * @param credentials
     */
    UserAuthService.prototype.useCredentials = function (credentials) {
        this.isLoggedIn = true;
        this.username = credentials.username;
        this.authToken = credentials.token;
        this.admin = credentials.admin;
        this.isVerified = credentials.isVerified;
        this._id = credentials._id;
        // Set the token as header for your requests!
        this.headers.append('x-access-token', this.authToken);
    };
    /**
     * Store the user credentials in local storage and use them
     * @param credentials
     */
    UserAuthService.prototype.storeUserCredentials = function (credentials) {
        this.local.storeObject(this.TOKEN_KEY, credentials);
        this.useCredentials(credentials);
    };
    /**
     * Destroy credentials on logout
     */
    UserAuthService.prototype.destroyUserCredentials = function () {
        this.authToken = undefined;
        this.username = '';
        this.admin = false;
        this.isVerified = false;
        this.isLoggedIn = false;
        this.headers.delete('x-access-token');
        this.local.remove(this.TOKEN_KEY);
    };
    /**
     * Register the user based on model data
     * @param model
     */
    UserAuthService.prototype.register = function (model) {
        var _this = this;
        this.message = '';
        return this.http
            .post(baseURL + '/users/register', model, { headers: this.headers }).toPromise()
            .then(function (response) {
            _this.message = '';
            _this.login({ username: model.username, password: model.password });
        })
            .catch(function (error) {
            _this.message = error.json().err.message;
        });
    };
    /**
     * Log in the user based on model data
     * @param model
     */
    UserAuthService.prototype.login = function (model) {
        var _this = this;
        this.message = '';
        return this.http.post(baseURL + '/users/login', model, { headers: this.headers }).toPromise()
            .then(function (response) {
            _this.message = '';
            _this.storeUserCredentials({
                username: model.username,
                token: response.json().token,
                admin: response.json().admin,
                _id: response.json()._id,
                isVerified: response.json().isVerified
            });
            _this.route.navigateByUrl('/');
        })
            .catch(function (err) {
            _this.message = err.json().err.message;
        });
    };
    /**
     * Logout the user from the current session
     */
    UserAuthService.prototype.logout = function () {
        var _this = this;
        return this.http.get(baseURL + '/users/logout').toPromise()
            .then(function (response) {
            _this.destroyUserCredentials();
            _this.route.navigateByUrl('/home');
        });
    };
    return UserAuthService;
}());
UserAuthService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_local_storage_service__["a" /* LocalStorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_local_storage_service__["a" /* LocalStorageService */]) === "function" && _c || Object])
], UserAuthService);

var _a, _b, _c;
//# sourceMappingURL=user-auth.service.js.map

/***/ }),

/***/ "../../../../../src/app/validators/form.validator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormValidators; });
var FormValidators = (function () {
    function FormValidators() {
    }
    FormValidators.prototype.checkPassword = function (str) {
        // at least one number, one lowercase and one uppercase letter
        // at least six characters
        var re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
        return re.test(str.value) ? null : { inValidPassword: true };
    };
    FormValidators.prototype.checkUsername = function (str) {
        // Username must contain only letters, numbers and underscores
        var re = /^\w+$/;
        return re.test(str.value) ? null : { inValidUsername: true };
    };
    FormValidators.prototype.checkEmail = function (str) {
        var re = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        return re.test(str.value) ? null : { inValidEmail: true };
    };
    return FormValidators;
}());

//# sourceMappingURL=form.validator.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map