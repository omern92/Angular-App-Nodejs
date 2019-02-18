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

/***/ "./src/app/add-emp/add-emp.component.css":
/*!***********************************************!*\
  !*** ./src/app/add-emp/add-emp.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nbutton {\r\n  margin-top: 1em;\r\n  background-color: #e0ecff;\r\n}\r\n\r\nh1 {\r\n  color: purple;\r\n  font-weight: bold;\r\n  margin-bottom: 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLWVtcC9hZGQtZW1wLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvYWRkLWVtcC9hZGQtZW1wLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTBlY2ZmO1xyXG59XHJcblxyXG5oMSB7XHJcbiAgY29sb3I6IHB1cnBsZTtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/add-emp/add-emp.component.html":
/*!************************************************!*\
  !*** ./src/app/add-emp/add-emp.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>New Employee Registration</h1>\n<div class=\"container\">\n  <mat-card>\n    <form (ngSubmit)=\"onSubmit()\" #employeeForm=\"ngForm\" class=\"form\">\n      <mat-form-field>\n        <input matInput placeholder=\"Employee Name\"\n                        [(ngModel)]=\"name\"\n                        name=\"name\"\n                        required\n                        #EmpName=\"ngModel\">\n      </mat-form-field>\n      <div [hidden]=\"EmpName.valid || EmpName.pristine\"\n      class=\"alert alert-danger\">\n        Name is required\n      </div>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Employee Designation\"\n                        [(ngModel)]=\"designation\"\n                        name=\"designation\"\n                        required\n                        #EmpDesignation=\"ngModel\">\n      </mat-form-field>\n      <div [hidden]=\"EmpDesignation.valid || EmpDesignation.pristine\"\n      class=\"alert alert-danger\">\n        Designation is required\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"project\">Select Project</label>\n        <select class=\"form-control\" id=\"project\"\n        [(ngModel)]=\"project\" name=\"project\"\n        #empProject=\"ngModel\">\n        <option *ngFor=\"let empProject of projectsList\" [ngValue]=\"empProject\">{{empProject.name}}</option>\n        </select>\n      </div>\n\n\n      <mat-form-field>\n        <input matInput placeholder=\"Employee's Skills\"\n                        [(ngModel)]=\"skills\"\n                        name=\"skills\"\n                        required\n                        #EmpSkills=\"ngModel\">\n      </mat-form-field>\n      <div [hidden]=\"EmpSkills.valid || EmpSkills.pristine\"\n      class=\"alert alert-danger\">\n        skills are required\n      </div>\n\n      <button type=\"submit\" mat-flat-button\n              color=\"primary\"\n              [disabled]=\"!employeeForm.form.valid\">Submit\n      </button>\n\n      <button type=\"button\" \n              class=\"btn btn-sm\" \n              (click)=\"newEmp(); employeeForm.reset()\">Clear Form\n    </button>\n\n    </form>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/add-emp/add-emp.component.ts":
/*!**********************************************!*\
  !*** ./src/app/add-emp/add-emp.component.ts ***!
  \**********************************************/
/*! exports provided: AddEmpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddEmpComponent", function() { return AddEmpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_employees_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/employees.service */ "./src/app/shared/employees.service.ts");
/* harmony import */ var _shared_projects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/projects.service */ "./src/app/shared/projects.service.ts");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _employee_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../employee.model */ "./src/app/employee.model.ts");








var AddEmpComponent = /** @class */ (function () {
    function AddEmpComponent(employeeService, authService, router, toastr, projectService) {
        this.employeeService = employeeService;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.projectService = projectService;
    }
    AddEmpComponent.prototype.ngOnInit = function () {
        this.authCheck();
        this.getProjects();
    };
    AddEmpComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects()
            .subscribe(function (projects) {
            _this.projectsList = projects;
        });
    };
    AddEmpComponent.prototype.onSubmit = function () {
        var _this = this;
        var newEmployee = new _employee_model__WEBPACK_IMPORTED_MODULE_7__["Employee"];
        newEmployee.name = this.name;
        newEmployee.designation = this.designation;
        newEmployee.project = this.project;
        newEmployee.skills = this.skills;
        this.employeeService.addEmployee(newEmployee)
            .subscribe(function (res) {
            _this.toastr.success(res.message, 'Done!');
            _this.router.navigate(['/home']);
        }, function (errorRes) {
            _this.toastr.error(errorRes.error.message, 'We are sorry...');
        });
    };
    AddEmpComponent.prototype.newEmp = function () {
        this.name = null;
        this.designation = null;
        this.project = null;
        this.skills = null;
    };
    AddEmpComponent.prototype.authCheck = function () {
        var _this = this;
        this.authService.loginCheck()
            .subscribe(function (resp) {
            if (resp.loggedIn === false) {
                _this.router.navigate(['/home']);
                _this.toastr.error('No permission to add employees', 'Access Denied');
            }
        });
    };
    AddEmpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-emp',
            template: __webpack_require__(/*! ./add-emp.component.html */ "./src/app/add-emp/add-emp.component.html"),
            styles: [__webpack_require__(/*! ./add-emp.component.css */ "./src/app/add-emp/add-emp.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_employees_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"],
            _shared_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _shared_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]])
    ], AddEmpComponent);
    return AddEmpComponent;
}());



/***/ }),

/***/ "./src/app/add-project/add-project.component.css":
/*!*******************************************************!*\
  !*** ./src/app/add-project/add-project.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nbutton {\r\n  margin-top: 1em;\r\n  background-color: #e0ecff;\r\n}\r\n\r\nh1 {\r\n  color: purple;\r\n  font-weight: bold;\r\n  margin-bottom: 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWRkLXByb2plY3QvYWRkLXByb2plY3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hZGQtcHJvamVjdC9hZGQtcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2UwZWNmZjtcclxufVxyXG5cclxuaDEge1xyXG4gIGNvbG9yOiBwdXJwbGU7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/add-project/add-project.component.html":
/*!********************************************************!*\
  !*** ./src/app/add-project/add-project.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Create New Project</h1>\n<div class=\"container\">\n  <mat-card>\n    <form (ngSubmit)=\"onSubmit()\" #projectForm=\"ngForm\" class=\"form\">\n      <mat-form-field>\n        <input matInput placeholder=\"Project Name\"\n                        [(ngModel)]=\"name\"\n                        name=\"name\"\n                        required\n                        #ProjectName=\"ngModel\">\n      </mat-form-field>\n      <div [hidden]=\"ProjectName.valid || ProjectName.pristine\"\n      class=\"alert alert-danger\">\n        Project name is required\n      </div>\n\n      <mat-form-field>\n        <input matInput placeholder=\"Project Designation\"\n                        [(ngModel)]=\"designation\"\n                        name=\"designation\"\n                        required\n                        #ProjectDesignation=\"ngModel\">\n      </mat-form-field>\n      <div [hidden]=\"ProjectDesignation.valid || ProjectDesignation.pristine\"\n      class=\"alert alert-danger\">\n        Designation is required\n      </div>\n\n      <button type=\"submit\" mat-flat-button\n              color=\"primary\"\n              [disabled]=\"!projectForm.form.valid\">Submit\n      </button>\n\n      <button type=\"button\" \n              class=\"btn btn-sm\" \n              (click)=\"newProject(); projectForm.reset()\">Clear Form\n    </button>\n\n    </form>\n  </mat-card>\n</div>"

/***/ }),

/***/ "./src/app/add-project/add-project.component.ts":
/*!******************************************************!*\
  !*** ./src/app/add-project/add-project.component.ts ***!
  \******************************************************/
/*! exports provided: AddProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProjectComponent", function() { return AddProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_employees_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/employees.service */ "./src/app/shared/employees.service.ts");
/* harmony import */ var _shared_projects_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/projects.service */ "./src/app/shared/projects.service.ts");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../project.model */ "./src/app/project.model.ts");








var AddProjectComponent = /** @class */ (function () {
    function AddProjectComponent(employeeService, authService, router, toastr, projectService) {
        this.employeeService = employeeService;
        this.authService = authService;
        this.router = router;
        this.toastr = toastr;
        this.projectService = projectService;
    }
    AddProjectComponent.prototype.ngOnInit = function () {
        this.authCheck();
    };
    AddProjectComponent.prototype.onSubmit = function () {
        var _this = this;
        var newProject = new _project_model__WEBPACK_IMPORTED_MODULE_7__["Project"];
        newProject.name = this.name;
        newProject.designation = this.designation;
        newProject.developers = [];
        newProject.finished = false;
        this.projectService.addProject(newProject)
            .subscribe(function (res) {
            _this.toastr.success(res.message, 'Done!');
            _this.router.navigate(['/home']);
        }, function (errorRes) {
            _this.toastr.error(errorRes.error.message, 'We are sorry...');
        });
    };
    AddProjectComponent.prototype.authCheck = function () {
        var _this = this;
        this.authService.loginCheck()
            .subscribe(function (resp) {
            if (resp.loggedIn === false) {
                _this.router.navigate(['/home']);
                _this.toastr.error('No permission to add projects', 'Access Denied');
            }
        });
    };
    AddProjectComponent.prototype.newProject = function () {
        this.name = null;
        this.designation = null;
    };
    AddProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-project',
            template: __webpack_require__(/*! ./add-project.component.html */ "./src/app/add-project/add-project.component.html"),
            styles: [__webpack_require__(/*! ./add-project.component.css */ "./src/app/add-project/add-project.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_employees_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"],
            _shared_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"],
            _shared_projects_service__WEBPACK_IMPORTED_MODULE_5__["ProjectService"]])
    ], AddProjectComponent);
    return AddProjectComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _add_emp_add_emp_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./add-emp/add-emp.component */ "./src/app/add-emp/add-emp.component.ts");
/* harmony import */ var _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-project/add-project.component */ "./src/app/add-project/add-project.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _projects_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projects/project-details/project-details.component */ "./src/app/projects/project-details/project-details.component.ts");









var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
    { path: 'add-emp', component: _add_emp_add_emp_component__WEBPACK_IMPORTED_MODULE_4__["AddEmpComponent"] },
    { path: 'add-project', component: _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_5__["AddProjectComponent"] },
    { path: 'details/:id', component: _details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    { path: 'projects/:id', component: _projects_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_8__["ProjectDetailsComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n  box-sizing: border-box;\r\n  padding: 0px;\r\n  overflow: hidden;\r\n}\r\n\r\n.nav {\r\n  z-index: 2;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFVBQVU7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLm5hdiB7XHJcbiAgei1pbmRleDogMjtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"col-3 nav\">\n                <app-navbar></app-navbar>\n            </div>\n            <div class=\"col-9\">\n                <router-outlet></router-outlet>\n            </div>\n    </div>\n\n</div>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'client';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _add_emp_add_emp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-emp/add-emp.component */ "./src/app/add-emp/add-emp.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./details/details.component */ "./src/app/details/details.component.ts");
/* harmony import */ var _details_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./details/edit/edit.component */ "./src/app/details/edit/edit.component.ts");
/* harmony import */ var _emp_search_emp_search_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./emp-search/emp-search.component */ "./src/app/emp-search/emp-search.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./add-project/add-project.component */ "./src/app/add-project/add-project.component.ts");
/* harmony import */ var _projects_projects_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./projects/projects.component */ "./src/app/projects/projects.component.ts");
/* harmony import */ var _projects_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./projects/project-details/project-details.component */ "./src/app/projects/project-details/project-details.component.ts");




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _add_emp_add_emp_component__WEBPACK_IMPORTED_MODULE_12__["AddEmpComponent"],
                _details_edit_edit_component__WEBPACK_IMPORTED_MODULE_14__["EditComponent"],
                _details_details_component__WEBPACK_IMPORTED_MODULE_13__["DetailsComponent"],
                _emp_search_emp_search_component__WEBPACK_IMPORTED_MODULE_15__["EmpSearchComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
                _add_project_add_project_component__WEBPACK_IMPORTED_MODULE_17__["AddProjectComponent"],
                _projects_projects_component__WEBPACK_IMPORTED_MODULE_18__["ProjectsComponent"],
                _projects_project_details_project_details_component__WEBPACK_IMPORTED_MODULE_19__["ProjectDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSlideToggleModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrModule"].forRoot({
                    preventDuplicates: true,
                    closeButton: true,
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/details/details.component.css":
/*!***********************************************!*\
  !*** ./src/app/details/details.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin-top: 1em;\r\n}\r\n\r\n.top {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\n#avlCheckbox {\r\n  align-self: flex-start;\r\n  margin-top: 1em;\r\n}\r\n\r\n#assignBtn {\r\n  margin-top: 1em;\r\n  margin-right: 2em;\r\n}\r\n\r\n.editDiv {\r\n  margin-top: 1em;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQiw4QkFBOEI7QUFDaEM7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbi50b3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbiNhdmxDaGVja2JveCB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbiNhc3NpZ25CdG4ge1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDJlbTtcclxufVxyXG5cclxuLmVkaXREaXYge1xyXG4gIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/details/details.component.html":
/*!************************************************!*\
  !*** ./src/app/details/details.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-12\">\n  <mat-card>\n    <div class=\"top\">\n      <mat-card-title>{{selectedEmployee.name}}</mat-card-title>\n    </div>\n      <mat-card-subtitle>{{selectedEmployee.skills}}</mat-card-subtitle>\n      <h4>Current Project: <a [routerLink]=\"['/projects/',currentProject._id]\">{{currentProject?.name}}</a></h4>\n\n      <p>{{message}}</p>\n      <button mat-flat-button color=\"accent\"\n              (click)=\"onEdit()\"\n              *ngIf=\"!showEdit; else editOpen\">EDIT\n      </button>\n\n      <ng-template #editOpen>\n          <button mat-flat-button color=\"accent\"\n          (click)=\"onEdit()\">Close EDIT</button>\n      </ng-template>\n\n\n      <div class=\"editDiv\">\n          <app-edit *ngIf=\"showEdit\"\n                    [selectedEmployee]=\"selectedEmployee\"\n                    (updatedEmp)=\"onUpdate($event)\"></app-edit>\n      </div>\n  </mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/details/details.component.ts":
/*!**********************************************!*\
  !*** ./src/app/details/details.component.ts ***!
  \**********************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _employee_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../employee.model */ "./src/app/employee.model.ts");
/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../project.model */ "./src/app/project.model.ts");
/* harmony import */ var _shared_employees_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/employees.service */ "./src/app/shared/employees.service.ts");
/* harmony import */ var _shared_projects_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../shared/projects.service */ "./src/app/shared/projects.service.ts");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");










var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(employeeService, projectService, authService, route, router, toastr, http) {
        this.employeeService = employeeService;
        this.projectService = projectService;
        this.authService = authService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.selectedEmployee = new _employee_model__WEBPACK_IMPORTED_MODULE_5__["Employee"];
        this.currentProject = new _project_model__WEBPACK_IMPORTED_MODULE_6__["Project"];
        this.message = null;
        this.showEdit = false;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.getEmployee();
    };
    DetailsComponent.prototype.getEmployee = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        this.employeeService.getEmployee(id)
            .subscribe(function (employee) {
            _this.selectedEmployee = employee;
            _this.getProject();
        }, function (errorRes) {
            _this.toastr.error(errorRes.error.message, 'We are sorry...');
        });
    };
    DetailsComponent.prototype.getProject = function () {
        var _this = this;
        var projectId = this.selectedEmployee.project;
        if (!projectId) {
            this.currentProject.name = 'none';
            this.selectedEmployee.available = true;
            this.message = 'This employee is available.';
        }
        else {
            this.projectService.getProject(projectId)
                .subscribe(function (project) {
                _this.currentProject = project;
            }, function (errorResp) {
                _this.toastr.error(errorResp.message, 'We are sorry...');
            });
        }
    };
    DetailsComponent.prototype.onEdit = function () {
        var _this = this;
        this.authService.loginCheck()
            .subscribe(function (resp) {
            _this.loggedIn = resp.loggedIn;
            if (_this.loggedIn) {
                if (_this.showEdit === false) {
                    _this.showEdit = true;
                }
                else {
                    _this.showEdit = false;
                }
            }
            else {
                _this.toastr.error('No permission to edit', 'Access Denied');
                _this.router.navigate(['/home']);
            }
        });
    };
    DetailsComponent.prototype.onUpdate = function (employee) {
        this.showEdit = false;
        this.selectedEmployee = employee;
        this.getProject();
    };
    DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.css */ "./src/app/details/details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_employees_service__WEBPACK_IMPORTED_MODULE_7__["EmployeeService"],
            _shared_projects_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"],
            _shared_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/details/edit/edit.component.css":
/*!*************************************************!*\
  !*** ./src/app/details/edit/edit.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n}\r\n\r\nbutton {\r\n  margin: 1em 1em 0 0 ;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGV0YWlscy9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlscy9lZGl0L2VkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG5idXR0b24ge1xyXG4gIG1hcmdpbjogMWVtIDFlbSAwIDAgO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/details/edit/edit.component.html":
/*!**************************************************!*\
  !*** ./src/app/details/edit/edit.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"content\">\n  <h3>Edit Employee Details</h3>\n  <div class=\"form-group\">\n      <label for=\"project\">Select Project</label>\n      <select class=\"form-control\" id=\"project\"\n              [(ngModel)]=\"selectedProject\" name=\"project\"\n              #project=\"ngModel\">\n        <option *ngFor=\"let project of projectsList\" [ngValue]=\"project\">{{project.name}}</option>\n      </select>\n\n      <button mat-flat-button color=\"accent\"\n      (click)=\"assignProject()\" id=\"assignBtn\">Assign</button>\n\n      <button mat-flat-button color=\"accent\"\n      (click)=\"makeAvailable()\" id=\"assignBtn\">Make Available</button>\n  </div>\n</main>"

/***/ }),

/***/ "./src/app/details/edit/edit.component.ts":
/*!************************************************!*\
  !*** ./src/app/details/edit/edit.component.ts ***!
  \************************************************/
/*! exports provided: EditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditComponent", function() { return EditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _employee_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../employee.model */ "./src/app/employee.model.ts");
/* harmony import */ var _shared_employees_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/employees.service */ "./src/app/shared/employees.service.ts");
/* harmony import */ var _shared_projects_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/projects.service */ "./src/app/shared/projects.service.ts");







var EditComponent = /** @class */ (function () {
    function EditComponent(employeeService, projectService, route, router, toastr) {
        this.employeeService = employeeService;
        this.projectService = projectService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.updatedEmp = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.projectsList = [];
    }
    EditComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    EditComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects()
            .subscribe(function (projects) { return _this.projectsList = projects; });
    };
    EditComponent.prototype.makeAvailable = function () {
        this.selectedEmployee.available = true;
        this.selectedEmployee.project = null;
        this.updateEmployee();
    };
    EditComponent.prototype.assignProject = function () {
        this.updateProjectEmp();
        this.updateEmployee();
    };
    EditComponent.prototype.updateEmployee = function () {
        var _this = this;
        var empId = this.route.snapshot.params.id;
        var projectId = this.selectedProject._id;
        this.selectedEmployee.project = projectId;
        this.employeeService.updateEmployee(empId, this.selectedEmployee)
            .subscribe(function (res) {
            _this.toastr.success(res.message, 'Done!');
            _this.updatedEmp.emit(_this.selectedEmployee);
        }, function (errorRes) {
            _this.toastr.error(errorRes.error.message, 'We are sorry...');
        });
    };
    EditComponent.prototype.updateProjectEmp = function () {
        var _this = this;
        var newProjectId = this.selectedProject._id;
        var oldProjectId = this.selectedEmployee.project;
        var userId = this.selectedEmployee._id;
        this.projectService.updateProjectEmp(oldProjectId, newProjectId, userId)
            .subscribe(function (res) {
            _this.toastr.success(res.message, 'Done!');
        }, function (errorRes) {
            _this.toastr.error(errorRes.error.message, 'We are sorry...');
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _employee_model__WEBPACK_IMPORTED_MODULE_4__["Employee"])
    ], EditComponent.prototype, "selectedEmployee", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], EditComponent.prototype, "updatedEmp", void 0);
    EditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit',
            template: __webpack_require__(/*! ./edit.component.html */ "./src/app/details/edit/edit.component.html"),
            styles: [__webpack_require__(/*! ./edit.component.css */ "./src/app/details/edit/edit.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_employees_service__WEBPACK_IMPORTED_MODULE_5__["EmployeeService"],
            _shared_projects_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]])
    ], EditComponent);
    return EditComponent;
}());



/***/ }),

/***/ "./src/app/emp-search/emp-search.component.css":
/*!*****************************************************!*\
  !*** ./src/app/emp-search/emp-search.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#search-box {\r\n  flex: 0 1 auto;\r\n}\r\n\r\n.results {\r\n  position: absolute;\r\n  margin: 0;\r\n  margin-top: -5px;\r\n  flex: 0 1 auto;\r\n\r\n}\r\n\r\n.search-result li {\r\n  border-bottom: 1px solid gray;\r\n  border-left: 1px solid gray;\r\n  border-right: 1px solid gray;\r\n  width: 185px;\r\n  height: 32px;\r\n  padding: 5px;\r\n  background-color: white;\r\n  cursor: pointer;\r\n  list-style-type: none;\r\n  z-index: 999;\r\n}\r\n\r\n.search-result li:hover {\r\n  background-color: #607D8B;\r\n}\r\n\r\n.search-result li a {\r\n  color: #888;\r\n  display: block;\r\n  text-decoration: none;\r\n  padding: 0px;\r\n}\r\n\r\n.search-result li a:hover {\r\n  color: white;\r\n  padding: 0px;\r\n}\r\n\r\n.search-result li a:active {\r\n  color: white;\r\n  padding: 0px;\r\n}\r\n\r\nul.search-result {\r\n  margin-top: 0;\r\n  padding-left: 0;\r\n}\r\n\r\n.btn-round {\r\n  border-radius: 3em;\r\n  font-size: 17px;\r\n  line-height: 29px; \r\n  padding: 0;\r\n  overflow: hidden;\r\n  position: relative;\r\n  margin: 5px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wLXNlYXJjaC9lbXAtc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsY0FBYzs7QUFFaEI7O0FBRUE7RUFDRSw2QkFBNkI7RUFDN0IsMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1osWUFBWTtBQUNkOztBQUNBO0VBQ0UsWUFBWTtFQUNaLFlBQVk7QUFDZDs7QUFHQTtFQUNFLGFBQWE7RUFDYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvZW1wLXNlYXJjaC9lbXAtc2VhcmNoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2VhcmNoLWJveCB7XHJcbiAgZmxleDogMCAxIGF1dG87XHJcbn1cclxuXHJcbi5yZXN1bHRzIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIG1hcmdpbi10b3A6IC01cHg7XHJcbiAgZmxleDogMCAxIGF1dG87XHJcblxyXG59XHJcblxyXG4uc2VhcmNoLXJlc3VsdCBsaSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyYXk7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBncmF5O1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIGdyYXk7XHJcbiAgd2lkdGg6IDE4NXB4O1xyXG4gIGhlaWdodDogMzJweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB6LWluZGV4OiA5OTk7XHJcbn1cclxuIFxyXG4uc2VhcmNoLXJlc3VsdCBsaTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzYwN0Q4QjtcclxufVxyXG4gXHJcbi5zZWFyY2gtcmVzdWx0IGxpIGEge1xyXG4gIGNvbG9yOiAjODg4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuIFxyXG4uc2VhcmNoLXJlc3VsdCBsaSBhOmhvdmVyIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcbi5zZWFyY2gtcmVzdWx0IGxpIGE6YWN0aXZlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59XHJcblxyXG4gXHJcbnVsLnNlYXJjaC1yZXN1bHQge1xyXG4gIG1hcmdpbi10b3A6IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4uYnRuLXJvdW5kIHtcclxuICBib3JkZXItcmFkaXVzOiAzZW07XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyOXB4OyBcclxuICBwYWRkaW5nOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogNXB4O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/emp-search/emp-search.component.html":
/*!******************************************************!*\
  !*** ./src/app/emp-search/emp-search.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"header\">\n      <h4>Employees Search</h4>\n    </div>\n   \n    <div class=\"search\">\n      <input #searchBox id=\"search-box\" (input)=\"search(searchBox.value)\" autocomplete=\"off\"/>\n      <button mat-raised-button type=\"submit\" class=\"btn btn-primary btn-round btn-sm\">\n          <i class=\"material-icons\">search</i>\n      </button>\n    </div>\n\n    <div class=\"results\">\n      <ul class=\"search-result\">\n        <li *ngFor=\"let emp of employees$ | async\" >\n          <a routerLink=\"/details/{{emp._id}}\">\n            {{emp.name}}\n          </a>\n        </li>\n      </ul>\n    </div>\n"

/***/ }),

/***/ "./src/app/emp-search/emp-search.component.ts":
/*!****************************************************!*\
  !*** ./src/app/emp-search/emp-search.component.ts ***!
  \****************************************************/
/*! exports provided: EmpSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpSearchComponent", function() { return EmpSearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _shared_employees_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/employees.service */ "./src/app/shared/employees.service.ts");





var EmpSearchComponent = /** @class */ (function () {
    function EmpSearchComponent(employeeService) {
        this.employeeService = employeeService;
        this.searchTerms = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    EmpSearchComponent.prototype.search = function (term) {
        this.searchTerms.next(term);
    };
    EmpSearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employees$ = this.searchTerms.pipe(
        // wait 300ms after each keystroke before considering the term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), 
        // ignore new term if same as previous term
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), 
        // switch to new search observable each time the term changes
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (term) { return _this.employeeService.searchEmployees(term); }));
    };
    EmpSearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emp-search',
            template: __webpack_require__(/*! ./emp-search.component.html */ "./src/app/emp-search/emp-search.component.html"),
            styles: [__webpack_require__(/*! ./emp-search.component.css */ "./src/app/emp-search/emp-search.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_employees_service__WEBPACK_IMPORTED_MODULE_4__["EmployeeService"]])
    ], EmpSearchComponent);
    return EmpSearchComponent;
}());



/***/ }),

/***/ "./src/app/employee.model.ts":
/*!***********************************!*\
  !*** ./src/app/employee.model.ts ***!
  \***********************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-component {\r\n  position: relative;\r\n  z-index: 100;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\ntd {\r\n  margin: 1em;\r\n}\r\n\r\ntd a {\r\n  margin-left: 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zZWFyY2gtY29tcG9uZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxufVxyXG5cclxudGQge1xyXG4gIG1hcmdpbjogMWVtO1xyXG59XHJcblxyXG50ZCBhIHtcclxuICBtYXJnaW4tbGVmdDogMWVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  \n    <div class=\"col-md-8\">\n        <h3>Employees List</h3>\n        <br/>\n    </div>\n\n    <div class=\"col-md-4 search-component\">\n        <app-emp-search></app-emp-search>\n    </div>\n\n</div>\n\n<div class=\"row\">\n    <div class=\"table-responsive\">\n        <table class=\"table table-striped table-hover\">\n            <thead>\n                <tr>\n                    <th>S.No.</th>\n                    <th>Employee Name</th>\n                    <th>Designation</th>\n                    <th>Project</th>\n                    <th>Action</th>\n                </tr>\n            </thead>\n\n            <tbody>\n                <tr *ngFor=\"let empData of employeesList; index as i; trackBy: employeeId\">\n                    <td>{{i+1}}</td>\n                    <td>{{empData.name}}</td>\n                    <td>{{empData.designation}}</td>\n                    <td>{{empData.project}}</td>\n                    <td>\n                        <a [routerLink]=\"['/details/',empData._id]\"\n                           class=\"btn btn-primary\">\n                            Detail\n                        </a>\n                        <a [routerLink]=\"['/edit/',empData._id]\"\n                           class=\"btn btn-success\">\n                            Edit\n                        </a>\n                        <a \n                           class=\"btn btn-danger\" (click)=\"deleteEmployee(empData._id)\">\n                            Delete\n                        </a>\n                    </td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_employees_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/employees.service */ "./src/app/shared/employees.service.ts");
/* harmony import */ var _shared_projects_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/projects.service */ "./src/app/shared/projects.service.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(employeeService, projectService, toastr) {
        this.employeeService = employeeService;
        this.projectService = projectService;
        this.toastr = toastr;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getProjects();
    };
    HomeComponent.prototype.getProjects = function () {
        var _this = this;
        this.projectService.getProjects()
            .subscribe(function (projects) {
            _this.projectsList = projects;
            _this.getEmployees();
        });
    };
    HomeComponent.prototype.getEmployees = function () {
        var _this = this;
        this.employeeService.getEmployees()
            .subscribe(function (employees) {
            _this.employeesList = _this.reArrangeEmpList(employees, _this.projectsList, _this.getProjectName);
        });
    };
    HomeComponent.prototype.deleteEmployee = function (id) {
        var _this = this;
        this.employeeService.deleteEmployee(id)
            .subscribe(function (res) {
            _this.toastr.warning(res.message, 'Done!');
            _this.ngOnInit();
        }, function (errorRes) {
            _this.toastr.error(errorRes.error.message, 'Oops...');
        });
    };
    HomeComponent.prototype.getProjectName = function (projectsList, projectId) {
        var selectedProject = projectsList.find(function (project) { return project._id === projectId; });
        if (selectedProject) {
            return selectedProject.name;
        }
        else {
            return false;
        }
    };
    HomeComponent.prototype.reArrangeEmpList = function (employeesList, projectsList, getProjectName) {
        employeesList.forEach(function (emp) {
            if (emp.project === null) {
                emp.project = 'none';
            }
            else {
                var projectName = getProjectName(projectsList, emp.project);
                if (projectName) {
                    emp.project = projectName;
                }
                else {
                    emp.project = 'none';
                }
            }
        });
        return employeesList;
    };
    HomeComponent.prototype.employeeId = function (index, item) {
        return item._id;
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_employees_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"],
            _shared_projects_service__WEBPACK_IMPORTED_MODULE_4__["ProjectService"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nbutton {\r\n  margin-top: 1em;\r\n}\r\n\r\nh1 {\r\n  color: purple;\r\n  font-weight: bold;\r\n  margin-bottom: 1em;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuYnV0dG9uIHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbmgxIHtcclxuICBjb2xvcjogcHVycGxlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIG1hcmdpbi1ib3R0b206IDFlbTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"header\">\n  <h1>Login</h1>\n</div>\n<div class=\"container\">\n  <p>username: admin<br>\n    password: admin</p>\n    <form (ngSubmit)=\"onSubmit()\" #loginForm=\"ngForm\" class=\"form\">\n        <mat-form-field>\n          <input matInput placeholder=\"Enter username\"\n                          [(ngModel)]=\"username\"\n                          name=\"username\"\n                          required\n                          #usernameInput=\"ngModel\">\n        </mat-form-field>\n        <div [hidden]=\"usernameInput.valid || usernameInput.pristine\"\n        class=\"alert alert-danger\">\n          Username is required\n        </div>\n      \n        <mat-form-field>\n          <input matInput placeholder=\"Enter password\"\n                          type=\"password\"\n                          [(ngModel)]=\"password\"\n                          name=\"password\"\n                          required\n                          #passwordInput=\"ngModel\">\n        </mat-form-field>\n        <div [hidden]=\"passwordInput.valid || passwordInput.pristine\"\n        class=\"alert alert-danger\">\n          Password is required\n        </div>\n\n        <button type=\"submit\" mat-flat-button\n        color=\"primary\"\n        [disabled]=\"!loginForm.form.valid\">Submit\n        </button>\n    </form>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");
/* harmony import */ var _models_admin_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../models/admin.model */ "./src/app/models/admin.model.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router, location, toastr) {
        this.authService = authService;
        this.router = router;
        this.location = location;
        this.toastr = toastr;
        this.admin = new _models_admin_model__WEBPACK_IMPORTED_MODULE_6__["Admin"];
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authCheck();
        this.authService.loggedIn.subscribe(function (loggedIn) {
            if (loggedIn) {
                _this.router.navigate(['/home']);
            }
            _this.loggedIn = loggedIn;
        });
    };
    LoginComponent.prototype.onSubmit = function () {
        this.admin.username = this.username;
        this.admin.password = this.password;
        this.authService.doLogin(this.admin);
    };
    LoginComponent.prototype.doLogout = function () {
        this.authService.logout();
    };
    LoginComponent.prototype.authCheck = function () {
        var _this = this;
        this.authService.loginCheck()
            .subscribe(function (resp) {
            if (resp.loggedIn === true) {
                _this.router.navigate(['/home']);
                _this.toastr.error('You already logged- in');
            }
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/admin.model.ts":
/*!***************************************!*\
  !*** ./src/app/models/admin.model.ts ***!
  \***************************************/
/*! exports provided: Admin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Admin", function() { return Admin; });
var Admin = /** @class */ (function () {
    function Admin() {
    }
    return Admin;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* make sidebar nav vertical */ \r\n@media (min-width: 768px) {\r\n  .sidebar-nav {\r\n    z-index: -1;\r\n    display: flex;\r\n    height: 100vh;\r\n    flex-flow: column wrap;\r\n    justify-content: space-around;\r\n  }\r\n\r\n\r\n  .sidebar-nav .navbar {\r\n    flex: 1 100%;\r\n  }\r\n\r\n\r\n  ul {    \r\n    display: block;\r\n    box-sizing: border-box;\r\n    margin: auto;    \r\n  }\r\n  \r\n\r\n  .nav-item .nav-link {\r\n    display: block;\r\n    box-sizing: border-box;\r\n    width: 250px;\r\n    margin: 20px;\r\n    border-radius: 10px;\r\n    \r\n  }\r\n\r\n  .nav-item .nav-link:hover {\r\n    color: white;\r\n  }\r\n\r\n  .navbar-collapse > ul > li {\r\n    background-color: #1664ff;\r\n  }\r\n\r\n  li > a {\r\n    margin-bottom: 10px;\r\n    position: relative;\r\n    text-align: center;\r\n  }\r\n\r\n  li > a > i {\r\n    position: absolute;\r\n    left: 1em;\r\n  } \r\n\r\n  .logout {\r\n    top: 0;\r\n    padding: 0.5em;\r\n    position: absolute;\r\n  }\r\n\r\n  .logout > a {\r\n    text-decoration: none;\r\n    color: grey;\r\n    cursor: pointer;\r\n  }\r\n\r\n  .logout > a:hover {\r\n    text-decoration: none;\r\n    color: white;\r\n    cursor: pointer;\r\n  }\r\n\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDhCQUE4QjtBQUM5QjtFQUNFO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDZCQUE2QjtFQUMvQjs7O0VBR0E7SUFDRSxZQUFZO0VBQ2Q7OztFQUdBO0lBQ0UsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2Q7OztFQUdBO0lBQ0UsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osWUFBWTtJQUNaLG1CQUFtQjs7RUFFckI7O0VBRUE7SUFDRSxZQUFZO0VBQ2Q7O0VBRUE7SUFDRSx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixTQUFTO0VBQ1g7O0VBRUE7SUFDRSxNQUFNO0lBQ04sY0FBYztJQUNkLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osZUFBZTtFQUNqQjs7QUFFRiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIG1ha2Ugc2lkZWJhciBuYXYgdmVydGljYWwgKi8gXHJcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gIC5zaWRlYmFyLW5hdiB7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW4gd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gIH1cclxuXHJcblxyXG4gIC5zaWRlYmFyLW5hdiAubmF2YmFyIHtcclxuICAgIGZsZXg6IDEgMTAwJTtcclxuICB9XHJcblxyXG5cclxuICB1bCB7ICAgIFxyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgbWFyZ2luOiBhdXRvOyAgICBcclxuICB9XHJcbiAgXHJcblxyXG4gIC5uYXYtaXRlbSAubmF2LWxpbmsge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgbWFyZ2luOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIFxyXG4gIH1cclxuXHJcbiAgLm5hdi1pdGVtIC5uYXYtbGluazpob3ZlciB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWNvbGxhcHNlID4gdWwgPiBsaSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTY2NGZmO1xyXG4gIH1cclxuXHJcbiAgbGkgPiBhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBsaSA+IGEgPiBpIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDFlbTtcclxuICB9IFxyXG5cclxuICAubG9nb3V0IHtcclxuICAgIHRvcDogMDtcclxuICAgIHBhZGRpbmc6IDAuNWVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIH1cclxuXHJcbiAgLmxvZ291dCA+IGEge1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IGdyZXk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAubG9nb3V0ID4gYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"sidebar-nav\">\n\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarToggler\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n      <div class=\"collapse navbar-collapse\" id=\"navbarToggler\">\n\n        <div *ngIf=\"loggedIn\" class=\"logout\">\n          <a (click)=\"logout()\">Logout</a>\n        </div>\n        \n        <ul class=\"nav navbar-nav\">\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n            <a class=\"nav-link\" [routerLink]=\"['/home']\">\n              <i class=\"material-icons\">home</i>\n              Home\n            </a>\n          </li>\n\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n            <a class=\"nav-link\" [routerLink]=\"['/add-emp']\">\n              <i class=\"material-icons\">person_add</i>\n              Add Employee\n            </a>\n          </li>\n\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n            <a class=\"nav-link\" [routerLink]=\"['/add-project']\">\n              <i class=\"material-icons\">create</i>\n              Add Project\n            </a>\n          </li>\n\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\n            <a class=\"nav-link\" [routerLink]=\"['/login']\">\n              <i class=\"material-icons\">verified_user</i>\n              Login\n            </a>\n          </li>\n\n        </ul>\n      </div>\n    </nav>\n\n</div>\n"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/auth.service */ "./src/app/shared/auth.service.ts");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.loggedIn.subscribe(function (loggedIn) {
            _this.loggedIn = loggedIn;
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/project.model.ts":
/*!**********************************!*\
  !*** ./src/app/project.model.ts ***!
  \**********************************/
/*! exports provided: Project */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Project", function() { return Project; });
var Project = /** @class */ (function () {
    function Project() {
    }
    return Project;
}());



/***/ }),

/***/ "./src/app/projects/project-details/project-details.component.css":
/*!************************************************************************!*\
  !*** ./src/app/projects/project-details/project-details.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  margin-top: 1em;\r\n}\r\n\r\n.top {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n}\r\n\r\nmat-card-title {\r\n  color:darkblue;\r\n  font-weight:bold\r\n}\r\n\r\n.container table {\r\n  width: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdHMvcHJvamVjdC1kZXRhaWxzL3Byb2plY3QtZGV0YWlscy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsY0FBYztFQUNkO0FBQ0Y7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9wcm9qZWN0cy9wcm9qZWN0LWRldGFpbHMvcHJvamVjdC1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbi50b3Age1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuXHJcbm1hdC1jYXJkLXRpdGxlIHtcclxuICBjb2xvcjpkYXJrYmx1ZTtcclxuICBmb250LXdlaWdodDpib2xkXHJcbn1cclxuXHJcbi5jb250YWluZXIgdGFibGUge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/projects/project-details/project-details.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/projects/project-details/project-details.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container col-md-12\">\n  <mat-card>\n    <div class=\"top\">\n      <mat-card-title>{{selectedProject.name}}</mat-card-title>\n    </div>\n      <mat-card-subtitle>Designation: {{selectedProject.designation}}</mat-card-subtitle>\n      <h5>Employees currently working on the project:</h5>\n      <div class=\"container table\">\n        <table class=\"table table-hover custom\">\n            <thead>\n              <tr>\n                <th scope=\"col\">#</th>\n                <th scope=\"col\">Employee Name</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let emp of employees; index as i;\">\n                <th scope=\"row\">{{i+1}}</th>\n                <td>{{emp.name}}</td>\n              </tr>\n            </tbody>\n          </table>\n      </div>\n\n\n  </mat-card>\n\n</div>"

/***/ }),

/***/ "./src/app/projects/project-details/project-details.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/projects/project-details/project-details.component.ts ***!
  \***********************************************************************/
/*! exports provided: ProjectDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectDetailsComponent", function() { return ProjectDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _project_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../project.model */ "./src/app/project.model.ts");
/* harmony import */ var _shared_employees_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/employees.service */ "./src/app/shared/employees.service.ts");
/* harmony import */ var _shared_projects_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/projects.service */ "./src/app/shared/projects.service.ts");








var ProjectDetailsComponent = /** @class */ (function () {
    function ProjectDetailsComponent(employeeService, projectService, route, router, toastr, http) {
        this.employeeService = employeeService;
        this.projectService = projectService;
        this.route = route;
        this.router = router;
        this.toastr = toastr;
        this.http = http;
        this.selectedProject = new _project_model__WEBPACK_IMPORTED_MODULE_5__["Project"];
        this.employees = [];
    }
    ProjectDetailsComponent.prototype.ngOnInit = function () {
        this.getProject();
    };
    ProjectDetailsComponent.prototype.getProject = function () {
        var _this = this;
        var id = this.route.snapshot.params.id;
        this.projectService.getProject(id)
            .subscribe(function (project) {
            _this.selectedProject = project;
            _this.getProjectEmp(id);
        }, function (errorRes) {
            _this.toastr.error(errorRes.error.message, 'We are sorry...');
        });
    };
    ProjectDetailsComponent.prototype.getProjectEmp = function (id) {
        var _this = this;
        this.projectService.getProjectEmp(id)
            .subscribe(function (employees) {
            _this.employees = employees;
        }, function (errorRes) {
            _this.toastr.error(errorRes.error.message, 'We are sorry...');
        });
    };
    ProjectDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-details',
            template: __webpack_require__(/*! ./project-details.component.html */ "./src/app/projects/project-details/project-details.component.html"),
            styles: [__webpack_require__(/*! ./project-details.component.css */ "./src/app/projects/project-details/project-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_employees_service__WEBPACK_IMPORTED_MODULE_6__["EmployeeService"],
            _shared_projects_service__WEBPACK_IMPORTED_MODULE_7__["ProjectService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ProjectDetailsComponent);
    return ProjectDetailsComponent;
}());



/***/ }),

/***/ "./src/app/projects/projects.component.css":
/*!*************************************************!*\
  !*** ./src/app/projects/projects.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3RzL3Byb2plY3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/projects/projects.component.html":
/*!**************************************************!*\
  !*** ./src/app/projects/projects.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  projects works!\n</p>\n"

/***/ }),

/***/ "./src/app/projects/projects.component.ts":
/*!************************************************!*\
  !*** ./src/app/projects/projects.component.ts ***!
  \************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent() {
    }
    ProjectsComponent.prototype.ngOnInit = function () {
    };
    ProjectsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.css */ "./src/app/projects/projects.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/shared/auth.service.ts":
/*!****************************************!*\
  !*** ./src/app/shared/auth.service.ts ***!
  \****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");





var AuthService = /** @class */ (function () {
    function AuthService(http, toastr) {
        this.http = http;
        this.toastr = toastr;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            withCredentials: true
        };
        this.url = 'api/auth';
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"];
        this.getLogin();
    }
    AuthService.prototype.getLogin = function () {
        var _this = this;
        this.http.get(this.url + "/login", this.httpOptions)
            .subscribe(function (resp) {
            _this.loggedIn.next(resp.loggedIn);
        });
    };
    AuthService.prototype.doLogin = function (admin) {
        var _this = this;
        this.http.post(this.url + "/login", admin, this.httpOptions)
            .subscribe(function (resp) {
            if (resp.success) {
                _this.toastr.success('You are logged in', 'Welcome');
                _this.loggedIn.next(true);
            }
            else {
                _this.toastr.error(resp.message, 'Oops...');
                _this.loggedIn.next(false);
            }
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.http.post(this.url + "/logout", {}, {
            withCredentials: true
        }).subscribe(function () {
            _this.loggedIn.next(false);
            _this.toastr.error('You have been logged-out', 'Logged Out');
        });
    };
    AuthService.prototype.loginCheck = function () {
        return this.http.get(this.url + "/login", this.httpOptions);
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/shared/employees.service.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/employees.service.ts ***!
  \*********************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            withCredentials: true
        };
        this.url = 'api/employees';
    }
    EmployeeService.prototype.getEmployees = function () {
        return this.http.get(this.url);
    };
    EmployeeService.prototype.getEmployee = function (id) {
        return this.http.get(this.url + "/" + id);
    };
    EmployeeService.prototype.updateEmployee = function (id, employee) {
        return this.http.put(this.url + "/" + id, employee, this.httpOptions);
    };
    EmployeeService.prototype.addEmployee = function (employee) {
        return this.http.post(this.url, employee, this.httpOptions);
    };
    EmployeeService.prototype.deleteEmployee = function (id) {
        return this.http.delete(this.url + "/" + id, this.httpOptions);
    };
    EmployeeService.prototype.searchEmployees = function (term) {
        if (!term.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])([]);
        }
        return this.http.get(this.url + "/search/" + term);
    };
    EmployeeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], EmployeeService);
    return EmployeeService;
}());



/***/ }),

/***/ "./src/app/shared/projects.service.ts":
/*!********************************************!*\
  !*** ./src/app/shared/projects.service.ts ***!
  \********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ProjectService = /** @class */ (function () {
    function ProjectService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
            withCredentials: true
        };
        this.url = 'api/projects';
    }
    ProjectService.prototype.getProjects = function () {
        return this.http.get("" + this.url);
    };
    ProjectService.prototype.getProject = function (projectId) {
        return this.http.get(this.url + "/" + projectId);
    };
    ProjectService.prototype.addProject = function (project) {
        return this.http.post(this.url, project, this.httpOptions);
    };
    ProjectService.prototype.updateProject = function (projectId, userId) {
        var data = { projectId: projectId, userId: userId };
        return this.http.post(this.url + "/" + projectId, data, this.httpOptions);
    };
    ProjectService.prototype.getProjectEmp = function (projectId) {
        return this.http.get(this.url + "/" + projectId + "/employees", this.httpOptions);
    };
    ProjectService.prototype.updateProjectEmp = function (oldProjectId, newProjectId, userId) {
        var data = { oldProjectId: oldProjectId, newProjectId: newProjectId, userId: userId };
        return this.http.post(this.url + "/" + newProjectId + "/employees", data, this.httpOptions);
    };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProjectService);
    return ProjectService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\nahum\Desktop\MEAN\client\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map