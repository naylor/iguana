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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_services/dialog/dialog.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_services/dialog/dialog.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 mat-dialog-title>{{modalTitle}}</h2>\n<mat-dialog-content>{{modalText}}</mat-dialog-content>\n\n<mat-dialog-content *ngIf=\"modalInput\">\n  <span *ngFor=\"let m of modalInput\">\n    <input type=\"{{m.Type}}\" [(ngModel)]=\"m.Model\" placeholder=\"{{m.Title}}\">\n  </span>\n</mat-dialog-content>\n\n<mat-dialog-actions>\n  <button mat-button [mat-dialog-close]=\"true\" (click)=\"close('YES')\">{{modalYes}}</button>\n  <button mat-button mat-dialog-close>{{modalNo}}</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/_services/mat-progress-bar/mat-progress-bar.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/_services/mat-progress-bar/mat-progress-bar.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-progress-bar\n        [mode]=\"'indeterminate'\">\n</mat-progress-bar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-sidenav-container class=\"sidenav-container\">\n  <mat-sidenav #drawer class=\"sidenav\" fixedInViewport=\"tr\"\n               [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\"\n               [mode]=\"(isHandset$ | async) ? 'over' : 'side'\">\n    <mat-toolbar>\n      <div class=\"iguana\">\n        <h6><b>Iguana Cluster System</b>\n          <br /><span class=\"version\">{{version}}</span>\n        </h6>\n      </div>\n\n      <img class=\"icon\" src=\"../../assets/iguana.png\" />\n    </mat-toolbar>\n\n\n    <mat-nav-list>\n\n      <mat-accordion class=\"example-headers-align\">\n      <mat-divider *ngIf=\"hostConnection['Name']==='ok'\"></mat-divider>\n\n        <app-menu-classroom></app-menu-classroom>\n\n        <mat-divider *ngIf=\"hostConnection['Name']==='ok'\"></mat-divider>\n\n        <mat-expansion-panel *ngIf=\"hostConnection['Name']==='ok' && hostInfo['IsMaster']\"\n                             (opened)=\"panelOpenState = true\"\n                             (closed)=\"panelOpenState = false\">\n          <mat-expansion-panel-header>\n            <mat-panel-title>\n              Management\n            </mat-panel-title>\n          </mat-expansion-panel-header>\n          <div>\n            <app-menu-management></app-menu-management>\n          </div>\n        </mat-expansion-panel>\n\n\n        <mat-divider *ngIf=\"hostConnection['Name']==='ok'\"></mat-divider>\n\n      </mat-accordion>\n\n    </mat-nav-list>\n  </mat-sidenav>\n  <mat-sidenav-content>\n    <mat-toolbar color=\"accent\">\n      <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\n        <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\n      </button>\n\n      <app-host-status\n              [hostInfo]=\"hostInfo\"\n              [hostConnection]=\"hostConnection\">\n      </app-host-status>\n\n      <span class=\"spacer\"></span>\n\n      <app-cluster-info *ngIf=\"(hostInfo.OpMode==='NODE' ||\n                                hostInfo.OpMode==='MASTER') &&\n                                hostConnection['Name']==='ok'\"\n                        [hostInfo]=\"hostInfo\"\n                        [hostConnection]=\"hostConnection\"\n                        [clusterConnection]=\"clusterConnection\">\n      </app-cluster-info>\n      <span class=\"spacer\"></span>\n\n      <div class=\"noIP\" *ngIf=\"hostInfo.IP===''\">\n        Attention, the system was unable to identify the host IP.\n        Go to My Panel -> Settings and define the Public Host Interface.\n      </div>\n\n      <span class=\"spacer\"></span>\n\n      <div class=\"hostInfo\">\n\n        <app-host-credentials *ngIf=\"hostConnection['Name']==='ok'\"\n                              [hostInfo]=\"hostInfo\">\n        </app-host-credentials>\n\n      </div>\n\n    </mat-toolbar>\n    <ng-content></ng-content>\n\n\n    <!--Main layout-->\n    <main>\n      <div class=\"container-fluid mt-5\">\n        <div class=\"row wow fadeIn\">\n\n          <div class=\"col-md-12 mb-4\" *ngIf=\"hostConnection['Name']==='ok'\">\n            <router-outlet></router-outlet>\n          </div>\n          <div class=\"col-md-12 mb-4 down\" *ngIf=\"hostConnection['Name']!=='ok'\">\n            Trying to connect to the server...\n            <app-mat-progress-bar></app-mat-progress-bar>\n          </div>\n\n        </div>\n      </div>\n\n    </main>\n\n  </mat-sidenav-content>\n</mat-sidenav-container>\n\n<!-- Footer -->\n<footer class=\"page-footer font-small teal pt-4\">\n  <div class=\"footer-copyright text-center py-3\">© 2021 Copyright\n    <a href=\"http://lasdpc.icmc.usp.br/\"> LaSDPC USP-ICMC</a>\n  </div>\n</footer>\n<!-- Footer -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cluster-info/cluster-info.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cluster-info/cluster-info.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ng-template #popContent>\n    <span class=\"{{clusterConnection.Name}}\">\n            Connection Status: <b>{{clusterConnection.Status}}</b></span>\n    <br /><div *ngIf=\"clusterConnection['Name']==='wait'\" class=\"response\">\n        <app-mat-progress-bar></app-mat-progress-bar>\n    </div>\n</ng-template>\n\n<div>\n    <div class=\"main\">\n        <img *ngIf=\"hostInfo.OpMode!=='NODE' && clusterConnection['Name']==='ok' && hostInfo.Cluster.Password\" class=\"icon\"\n             src=\"../../assets/onLocked.png\"\n             [ngbPopover]=\"popContent\"\n             triggers=\"mouseenter:mouseleave\"\n             popoverTitle=\"Cluster {{hostInfo.Cluster.Name}} ({{hostInfo.Cluster.MasterIP}})\" />\n\n        <img *ngIf=\"hostInfo.OpMode!=='NODE' && clusterConnection['Name']==='ok' && !hostInfo.Cluster.Password\" class=\"icon\"\n             src=\"../../assets/onUnlocked.png\"\n             [ngbPopover]=\"popContent\"\n             triggers=\"mouseenter:mouseleave\"\n             popoverTitle=\"Cluster {{hostInfo.Cluster.Name}} ({{hostInfo.Cluster.MasterIP}})\" />\n\n        <img *ngIf=\"hostInfo.OpMode!=='NODE' && clusterConnection['Name']!=='ok' && hostInfo.Cluster.Password\" class=\"icon\"\n             src=\"../../assets/onLocked.png\"\n             [ngbPopover]=\"popContent\"\n             triggers=\"mouseenter:mouseleave\"\n             popoverTitle=\"Cluster {{hostInfo.Cluster.Name}} ({{hostInfo.Cluster.MasterIP}})\" />\n\n        <img *ngIf=\"hostInfo.OpMode!=='NODE' && clusterConnection['Name']!=='ok' && !hostInfo.Cluster.Password\" class=\"icon\"\n             src=\"../../assets/onUnlocked.png\"\n             [ngbPopover]=\"popContent\"\n             triggers=\"mouseenter:mouseleave\"\n             popoverTitle=\"Cluster {{hostInfo.Cluster.Name}} ({{hostInfo.Cluster.MasterIP}})\" />\n\n        <img *ngIf=\"hostInfo.OpMode==='NODE' && clusterConnection['Name']==='info'\" class=\"icon\"\n             src=\"../../assets/nodeWait.png\"\n             [ngbPopover]=\"popContent\"\n             triggers=\"mouseenter:mouseleave\"\n             popoverTitle=\"Cluster {{hostInfo.Cluster.Name}} ({{hostInfo.Cluster.MasterIP}})\" />\n\n        <img *ngIf=\"hostInfo.OpMode==='NODE' && clusterConnection['Name']==='ok'\" class=\"icon\"\n             src=\"../../assets/nodeOk.png\"\n             [ngbPopover]=\"popContent\"\n             triggers=\"mouseenter:mouseleave\"\n             popoverTitle=\"Cluster {{hostInfo.Cluster.Name}} ({{hostInfo.Cluster.MasterIP}})\" />\n\n    </div>\n\n    <div class=\"mainSide\">\n        <div *ngIf=\"hostInfo.Cluster.Name\">\n            <a target=\"_blank\" class=\"text-link\"\n               href=\"http://{{this.hostInfo.Cluster.MasterIP}}:{{this.hostInfo.Cluster.PortFrontend}}\">Cluster login page\n            </a>\n        </div>\n        <div class=\"text-link\"\n              *ngIf=\"hostInfo.Cluster.Name\">Queue status: <b>{{hostInfo.Cluster.Queue}}</b>\n        </div>\n    </div>\n    <div class=\"mainSide\">\n        <div *ngIf=\"userSession.Module==='Admin' &&\n                  hostInfo.OpMode==='NODE' &&\n                  hostInfo.Cluster.MasterIP !=''\" class=\"exit\">\n            <button class=\"btn-sm btn-danger mr-1\" (click)=\"setOpMode();false;\">Exit Cluster</button>\n        </div>\n    </div>\n</div>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/code/code.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/code/code.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<md-button class=\"md-fab md-fab-bottom-right\" aria-label=\"Add a category\">\n    <button type=\"button\" name=\"btnCompile\" (click)=\"onSubmitCode(); false;\" [disabled]=\"disabled\"\n            class=\"btn btn-primary\">{{btnCompile}}\n    </button>\n    <div class=\"btn-group\" ngbDropdown role=\"group\" aria-label=\"Button group with nested dropdown\">\n        <button (click)=\"false;\" class=\"btn btn-primary dropdown-toggle-split\" ngbDropdownToggle\n                [disabled]=\"disabled\"></button>\n        <div class=\"dropdown-menu\" ngbDropdownMenu>\n            <button (click)=\"onClick('Compile'); false;\" ngbDropdownItem>Compile</button>\n            <button (click)=\"onClick('Compile and Run'); false;\" ngbDropdownItem>Compile and Run</button>\n        </div>\n    </div>\n</md-button>\n\n<div class=\"codeButtons\">\n    <div ngbDropdown class=\"d-inline-block\">\n        <button class=\"btn btn-outline-secondary\" (click)=\"false;\" id=\"dropdownBasic1\" ngbDropdownToggle>Theme</button>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n            <button (click)=\"setTheme('vs-dark'); false;\" ngbDropdownItem>Dark</button>\n            <button (click)=\"setTheme('vs'); false;\" ngbDropdownItem>Light</button>\n        </div>\n    </div>\n    <div ngbDropdown class=\"d-inline-block\">\n        <button class=\"btn btn-outline-secondary\" (click)=\"false;\" id=\"dropdownBasic2\" ngbDropdownToggle>Font Size\n        </button>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n            <button (click)=\"setFont(8); false;\" ngbDropdownItem>8</button>\n            <button (click)=\"setFont(10); false;\" ngbDropdownItem>10</button>\n            <button (click)=\"setFont(12); false;\" ngbDropdownItem>12</button>\n            <button (click)=\"setFont(14); false;\" ngbDropdownItem>14</button>\n            <button (click)=\"setFont(16); false;\" ngbDropdownItem>16</button>\n            <button (click)=\"setFont(18); false;\" ngbDropdownItem>18</button>\n            <button (click)=\"setFont(20); false;\" ngbDropdownItem>20</button>\n        </div>\n    </div>\n    <div ngbDropdown class=\"d-inline-block\">\n        <button class=\"btn btn-outline-secondary\" (click)=\"false;\" id=\"dropdownBasic3\" ngbDropdownToggle>MiniMap\n        </button>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic3\">\n            <button (click)=\"setMiniMap('true'); false;\" ngbDropdownItem>Show</button>\n            <button (click)=\"setMiniMap('false'); false;\" ngbDropdownItem>Hide</button>\n        </div>\n    </div>\n    <div ngbDropdown class=\"d-inline-block\">\n        <button class=\"btn btn-outline-secondary\" (click)=\"false;\" id=\"dropdownBasic4\" ngbDropdownToggle>Load Example\n            Code\n        </button>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic4\">\n            <button (click)=\"getCodeExample('MPI'); false;\" ngbDropdownItem>MPI</button>\n            <button (click)=\"getCodeExample('OpenMP'); false;\" ngbDropdownItem>OpenMP</button>\n            <button (click)=\"getCodeExample('CUDA'); false;\" ngbDropdownItem>CUDA</button>\n            <button (click)=\"getCodeExample('OpenMP_MPI'); false;\" ngbDropdownItem>Hybrid OpenMP/MPI</button>\n        </div>\n    </div>\n    <div ngbDropdown class=\"d-inline-block\">\n        <button class=\"btn btn-outline-secondary\" (click)=\"false;\" id=\"dropdownBasic5\" ngbDropdownToggle>Code Saving\n        </button>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic5\">\n            <button (click)=\"codeTempCall('auto'); false;\" ngbDropdownItem>Auto (default)</button>\n            <button (click)=\"codeTempCall('none'); false;\" ngbDropdownItem>None</button>\n            <button (click)=\"codeTempCall('load'); false;\" ngbDropdownItem>Load last saved code</button>\n        </div>\n    </div>\n    <div ngbDropdown *ngIf=\"hostInfo.Queue == 'Off'\" class=\"d-inline-block\">\n        <button type=\"button\" class=\"btn btn-outline-secondary\"\n                (click)=\"onQueue()\"\n                ngbPopover=\"If turn on, you will wait for your turn in the queue, so your code will run without concurrency.\"\n                triggers=\"mouseenter:mouseleave\" popoverTitle=\"Queuing System\">\n            Queue {{queue?\"On\":\"Off\"}}\n        </button>\n    </div>\n\n</div>\n<div *ngIf=\"load===0\">\n    <app-mat-progress-bar></app-mat-progress-bar>\n</div>\n\n<ng-template #popContent>\n   <span *ngFor=\"let cpu of codePairUsers\">\n       {{cpu.UserName}} <br />\n    </span>\n</ng-template>\n\n<ngx-monaco-editor *ngIf=\"codeInGroup==1\"\n        [ngbPopover]=\"popContent\"\n        triggers=\"mouseenter:mouseleave\"\n        popoverTitle=\"Users Online in the Editor\"\n        class=\"editor\"\n        [options]=\"editorOptions\"\n        [ngModelOptions]=\"{standalone: true}\"\n        [(ngModel)]=\"code.Code\"\n        (ngModelChange)=\"onChange($event)\"\n        (keydown)=\"onKeydownEvent($event)\"\n        (onInit)=\"onInit($event)\">\n</ngx-monaco-editor>\n\n<ngx-monaco-editor *ngIf=\"codeInGroup==0\"\n        class=\"editor\"\n        [options]=\"editorOptions\"\n        [ngModelOptions]=\"{standalone: true}\"\n        [(ngModel)]=\"code.Code\"\n        (ngModelChange)=\"onChange($event)\"\n        (keydown)=\"onKeydownEvent($event)\"\n        (onInit)=\"onInit($event)\">\n</ngx-monaco-editor>\n\n<div class=\"card m-12 codeRun\">\n    <form [formGroup]=\"codeForm\" enctype=\"multipart/form-data\">\n\n        <div class=\"form-group\" style=\"margin-top: 15px;\">\n\n            <div class=\"form-row\">\n\n                <div class=\"col-md-{{exercise['gId'] ? '8':'12'}} user-container\">\n\n\n                    <div #ResultsTab></div>\n\n                    <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"navActive\" class=\"nav-tabs\" [destroyOnHide]=\"false\">\n                        <li ngbDropdown [ngbNavItem]=\"1\">\n\n                            <a ngbNavLink ngbDropdownToggle>Parameters</a>\n                            <div ngbDropdownMenu>\n                                <button (click)=\"setManualParameters('MPI'); false;\" ngbDropdownItem>MPI</button>\n                                <button (click)=\"setManualParameters('OpenMP'); false;\" ngbDropdownItem>OpenMP</button>\n                                <button (click)=\"setManualParameters('CUDA'); false;\" ngbDropdownItem>CUDA</button>\n                                <div class=\"dropdown-divider\"></div>\n                                <button (click)=\"setManualParameters('OpenMP_MPI'); false;\" ngbDropdownItem>Hybrid\n                                    OpenMP/MPI\n                                </button>\n                                <div class=\"dropdown-divider\"></div>\n                                <button (click)=\"setManualParameters('Manual'); false;\" ngbDropdownItem>Manual</button>\n                            </div>\n                            <ng-template ngbNavContent>\n\n                                <div class=\"form-row codeRun\">\n                                    <div class=\"col-md-6\">\n                                        Command (compile)\n                                    </div>\n                                    <div class=\"col-md-9\">\n                                        <input type=\"text\" formControlName=\"CompCmd\" (keyup)=\"updateParameters()\"\n                                               class=\"form-control\"\n                                               [ngClass]=\"{ 'is-invalid': submitted && fc.CompCmd.errors }\"/>\n                                        <div *ngIf=\"submitted && fc.CompCmd.errors\" class=\"error response\">\n                                            <div *ngIf=\"fc.CompCmd.errors.required\">Field is required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-row codeRun\">\n                                    <div class=\"col-md-6\">\n                                        <a href=\"#\" ngbPopover=\"The binary and code file name must always be main.\"\n                                           triggers=\"mouseenter:mouseleave\" popoverTitle=\"Attention\">\n                                            Arguments (compile)\n                                        </a>\n                                    </div>\n                                    <div class=\"col-md-9\">\n                                        <input type=\"text\" formControlName=\"CompArgs\" (keyup)=\"updateParameters()\"\n                                               class=\"form-control\"\n                                               [ngClass]=\"{ 'is-invalid': submitted && fc.CompArgs.errors }\"/>\n                                        <div *ngIf=\"submitted && fc.CompArgs.errors\" class=\"error response\">\n                                            <div *ngIf=\"fc.CompArgs.errors.required\">Field is required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-row codeRun\">\n                                    <div class=\"col-md-6\">\n                                        Command (execute)\n                                    </div>\n                                    <div class=\"col-md-9\">\n                                        <input type=\"text\" formControlName=\"ExecCmd\" (keyup)=\"updateParameters()\"\n                                               class=\"form-control\"\n                                               [ngClass]=\"{ 'is-invalid': submitted && fc.ExecCmd.errors }\"/>\n                                        <div *ngIf=\"submitted && fc.ExecCmd.errors\" class=\"error response\">\n                                            <div *ngIf=\"fc.ExecCmd.errors.required\">Field is required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-row codeRun\">\n                                    <div class=\"col-md-6\">\n                                        <a href=\"#\" ngbPopover=\"The binary and code file name must always be main.\"\n                                           triggers=\"mouseenter:mouseleave\" popoverTitle=\"Attention\">\n                                            Arguments (execute)\n                                        </a>\n                                    </div>\n                                    <div class=\"col-md-9\">\n                                        <input type=\"text\" formControlName=\"ExecArgs\" (keyup)=\"updateParameters()\"\n                                               class=\"form-control\"\n                                               [ngClass]=\"{ 'is-invalid': submitted && fc.ExecArgs.errors }\"/>\n                                        <div *ngIf=\"submitted && fc.ExecArgs.errors\" class=\"error response\">\n                                            <div *ngIf=\"fc.ExecArgs.errors.required\">Field is required</div>\n                                        </div>\n                                    </div>\n                                </div>\n                                <div class=\"form-row codeRun\">\n                                    <div class=\"col-md-6\">\n                                        <a href=\"#\" ngbPopover=\"You can add extra arguments for the execution.\"\n                                           triggers=\"mouseenter:mouseleave\" popoverTitle=\"Attention\">\n                                            Extra Arguments (execute)\n                                        </a>\n                                    </div>\n                                    <div class=\"col-md-9\">\n                                        <input type=\"text\" formControlName=\"ExtraArgs\" (keyup)=\"updateParameters()\"\n                                               class=\"form-control\"/>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </li>\n\n                        <li [ngbNavItem]=\"2\">\n                            <a ngbNavLink>Files</a>\n                            <ng-template ngbNavContent>\n                                <div *ngIf=\"!exercise.MaxFileSize && exerciseFiles?.length===0\"\n                                     class=\"card form-group col-md-6\">\n                                    No parameters were defined for the use of files in this exercise.\n                                </div>\n\n                                <div class=\"form-row codeRun\">\n\n                                    <div *ngIf=\"exercise.MaxFileSize || tryACode==='1'\" class=\"col-md-4 card\">\n                                        <a href=\"#\" ngbPopover=\"You can upload a file and use it in your code.\n                            To call the file, use the example shown in the box.\"\n                                           triggers=\"mouseenter:mouseleave\" popoverTitle=\"Upload a file\">\n                                            Add a file for this run <br/>\n                                        </a>\n                                        <span class=\"response\">(MaxFileSize: {{_util.formatBytes(exercise.MaxFileSize)}})</span>\n                                        <form enctype=\"multipart/form-data\">\n                                            <input class=\"btn-default\" type='file'\n                                                   data-max-size=\"10\"\n                                                   name=\"media\" #selectfile\n                                                   (click)=\"resetFormFile()\">\n                                            <br/>\n                                            <button type=\"button\" (click)=\"uploadFile()\">Upload</button>\n                                            <br/>\n                                            <progress [value]=progress.loaded [max]=progress.total></progress>\n                                            <div class=\"card-body\">\n                                                <div *ngIf=\"responseFile.Name\" class=\"{{responseFile.Name}}\">\n                                                    {{responseFile.Status}}\n                                                </div>\n                                            </div>\n                                        </form>\n\n                                        <hr/>\n                                        <span *ngIf=\"fileCodeExecution?.length!==0\">\n                                            Files uploaded to the server:\n                                        </span>\n                                        <span *ngFor=\"let p of fileCodeExecution\">\n                                        <a href=\"#\" (click)=\"setFileCodeExecution(p); false\"\n                                           ngbPopover=\"Click to add the filename in extra arguments.\"\n                                           triggers=\"mouseenter:mouseleave\" popoverTitle=\"Add in Extra Arguments\">\n                                            {{p}}\n                                        </a>\n                                            <br/>\n\n                                        </span>\n                                        <br/>\n                                        <span>Files uploaded to the server:\n                                                <br/>1. Files are automatically deleted after logout.\n                                                <br/>2. To replace a file, upload another one with the same name.\n                                        </span>\n\n                                    </div>\n\n                                    <div *ngIf=\"exerciseFiles?.length > 0\" class=\"col-md-4 card\">\n                                        <mat-label>\n                                            <a href=\"#\" popoverTitle=\"This exercise has input files.\n                                You can call them using the example shown in the box.\"\n                                               triggers=\"mouseenter:mouseleave\" ngbPopover=\"\">\n                                                Add input files\n                                            </a>\n                                        </mat-label>\n\n\n                                        <mat-select [formControl]=\"files\" multiple [disabled]=\"disabled\"\n                                                    class=\"form-control\"\n                                                    (selectionChange)=\"setFileParameters('')\">\n                                            <mat-select-trigger class=\"selection\">\n                                                {{files.value ? files.value[0] : ''}}\n                                                <span *ngIf=\"files.value?.length > 1\">\n        (+{{files.value.length - 1}} {{files.value?.length === 2 ? 'other' : 'others'}})\n                                        </span>\n                                            </mat-select-trigger>\n                                            <mat-option *ngFor=\"let n of exerciseFiles\" [value]=\"n.FileName\">\n                                                {{n.FileName}}\n                                            </mat-option>\n                                        </mat-select>\n                                        <hr/>\n                                        Click the file to download:\n                                        <div *ngFor=\"let f of exerciseFiles\" class=\"files\">\n                                            <div class=\"form-row text-center\">\n                                                <a href=\"#\" (click)=\"download(f); false;\"\n                                                   popoverTitle=\"Download\"\n                                                   triggers=\"mouseenter:mouseleave\"\n                                                   ngbPopover=\"Click to download this file.\">\n                                                    {{f.FileName}}\n                                                </a>\n                                                <br/>\n                                            </div>\n                                        </div>\n\n                                    </div>\n\n                                    <div class=\"col-md-4 card\">\n                                        You can upload a file to the code via STDIN, example:\n                                        <code>\n                                            program < file.txt\n                                        </code>\n                                        <br/>or read an array from a file:\n                                        <code>\n                                            FILE * pFile;\n                                            <br/>\n                                            pFile = fopen (\"file.txt\",\"r\");\n                                            <br/>\n                                            fscanf(pFile, \"%d \", &lin);\n                                            <br/>\n                                            fscanf(pFile, \"%d\\n\", &col);\n                                            <br/>\n                                            fscanf(pFile, \"%lf\\n\", &limiar);\n                                            <br/>\n                                        </code>\n                                    </div>\n\n                                </div>\n\n\n                            </ng-template>\n                        </li>\n\n                        <li [ngbNavItem]=\"3\">\n                            <a ngbNavLink>Nodes <span class=\"response\">(MPI)</span></a>\n                            <ng-template ngbNavContent>\n\n                                <div class=\"form-group col-md-3\">\n                                    Number of process\n                                    <input type=\"number\" formControlName=\"NumberProc\"\n                                           (click)=\"setManualParameters('');\"\n                                           onkeydown=\"return false\"\n                                           onclick=\"return false\"\n                                           class=\"form-control\"\n                                           [ngClass]=\"{ 'is-invalid': submitted && fc.NumberProc.errors }\"/>\n                                    <div *ngIf=\"submitted && fc.NumberProc.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"fc.NumberProc.errors.required\">Number of process is required</div>\n                                        <div *ngIf=\"fc.NumberProc.errors.min\">Process must be at least 1 number</div>\n                                        <div *ngIf=\"fc.NumberProc.errors.generic\">{{fc.numberProc.errors.generic}}</div>\n                                    </div>\n                                    <div *ngIf=\"msgOverLoad\" class=\"runTimeout\">{{msgOverLoad}}</div>\n                                </div>\n                                <div class=\"form-group col-md-3\">\n                                    <mat-label>\n                                        <a href=\"#\" ngbPopover=\"Select one or more nodes to run the code.\"\n                                           triggers=\"mouseenter:mouseleave\" popoverTitle=\"Cluster Nodes\">\n                                            Nodes\n                                        </a>\n                                    </mat-label>\n                                    <mat-select [formControl]=\"containers\" multiple [disabled]=\"disabled\"\n                                                class=\"form-control\"\n                                                (selectionChange)=\"setManualParameters('')\">\n                                        <mat-select-trigger class=\"selection\">\n                                            {{containers.value ? containers.value[0] : ''}}\n                                            <span *ngIf=\"containers.value?.length > 1\">\n        (+{{containers.value.length - 1}} {{containers.value?.length === 2 ? 'other' : 'others'}})\n                                    </span>\n                                        </mat-select-trigger>\n                                        <mat-option *ngFor=\"let n of nodes\" [value]=\"n\">{{n}}</mat-option>\n                                    </mat-select>\n                                </div>\n                            </ng-template>\n                        </li>\n\n                        <li [ngbNavItem]=\"4\">\n                            <a ngbNavLink>Results</a>\n                            <ng-template ngbNavContent>\n\n                                <div class=\"card m-3\" *ngIf=\"programStatus\">\n                                    <h6 class=\"card-header\">{{btnCompile}} ->| Program {{programStatus}} </h6>\n                                    <span class=\"queuePosition\">Queue Position: {{queueStatus}}</span>\n                                    <span class=\"runTimeout\">Running timeout: {{programTimeout}}</span>\n\n                                    <div *ngIf=\"sequence?.length > 1\">\n                                        <app-mat-progress-bar></app-mat-progress-bar>\n                                    </div>\n\n                                    <div class=\"card-body\">\n                                        <div *ngIf=\"response.Command\" class=\"serviceOk\">\n                                            {{command}}\n                                        </div>\n                                        <hr/>\n                                        <div *ngIf=\"response.Name\" class=\"{{response.Name}}\">\n                                            {{response.Status}}\n                                        </div>\n                                    </div>\n                                </div>\n\n                                <hr/>\n\n                                <div class=\"form-group\">\n                                    <ngx-monaco-editor class=\"editorResult\"\n                                                       [options]=\"resultOptions\"\n                                                       [ngModelOptions]=\"{standalone: true}\"\n                                                       [(ngModel)]=\"code.Result\">\n                                    </ngx-monaco-editor>\n\n                                </div>\n\n                            </ng-template>\n                        </li>\n\n                        <li [ngbNavItem]=\"5\">\n                            <a ngbNavLink>Special Tags</a>\n                            <ng-template ngbNavContent>\n                                <div class=\"card-body\" *ngIf=\"msgProcess\">\n                                    <table class=\"table table-striped\">\n                                        <tr *ngFor=\"let p of msgProcess | keyvalue\">\n                                            <td>\n                                                <span class='iconServer'></span>\n                                                <b>Node {{p.key}} (Number of process per node: {{p.value.length}})</b>\n                                                <ng-container *ngFor=\"let r of p.value\">\n                                                    <ul>\n                                                        <li>\n                                                            <span class='iconTask'></span>\n                                                            <span>{{r}}</span>\n                                                        </li>\n                                                    </ul>\n                                                </ng-container>\n                                            </td>\n                                        </tr>\n                                    </table>\n                                </div>\n\n                                <div class=\"card m-12\">\n                                    <div class=\"card-body\">\n                                        To view custom OpenMPI output by grouping processes with ranks and messages,\n                                        use the tags according to the template below:\n\n                                        <p>Example of use:</p>\n\n                                        <code>printf(\"message: &#123;M&#125;%s&#123;M&#125; from processor: &#123;P&#125;%s&#123;P&#125;,\n                                            rank: &#123;R&#125;%d&#123;R&#125; out of %d processors\\n\",\n                                            \"Hello World\", processor_name, world_rank, world_size);</code>\n                                    </div>\n                                </div>\n                            </ng-template>\n                        </li>\n\n                        <li [ngbNavItem]=\"6\" (click)=\"getSysInfo(); false;\">\n                            <a ngbNavLink>SysInfo</a>\n                            <ng-template ngbNavContent>\n                                <table class=\"table table-striped\">\n                                    <tr *ngFor=\"let p of sysInfo\">\n                                        <td>\n                                            <b>{{p.Name}}:</b> {{p.Value}}\n                                        </td>\n                                    </tr>\n                                </table>\n                            </ng-template>\n                        </li>\n\n                    </ul>\n                    <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n\n                </div>\n                <div class=\"col-md-4 user-container\" *ngIf=\"exercise['gId']\">\n                    Group Chat\n                    <mat-divider></mat-divider>\n                    <div style=\"overflow-y: scroll; min-height: 100px; height: 300px;\">\n                        <div *ngFor=\"let m of chatList index as i\">\n                            <div class=\"{{0 === i % 2 ? 'chat' : 'chat darker'}} {{userId === m.IdUser ? 'user' : ''}}\">\n                                <mat-icon class=\"{{0 === i % 2 ? 'chatIcon-right' : 'chatIcon'}}\" mat-list-icon>\n                                    account_circle\n                                </mat-icon>\n                                <p style=\"width: 100%; margin-left: 10px;\">{{m.Text}}</p>\n                                <span class=\"{{0 === i % 2 ? 'time-right' : 'time-right'}} {{userId === m.IdUser ? 'time-user' : ''}}\">{{m.Name}}</span>\n                            </div>\n                        </div>\n                    </div>\n                    <form (ngSubmit)=\"sendMsgChat()\">\n                        <div class=\"form-group\">\n                            <input id=\"chatMsg\" [(ngModel)]=\"chatMsg\"\n                                   placeholder=\"type message and press enter\"\n                                   class=\"form-control\" style=\"max-width: 70%;\" autofocus\n                                   [ngModelOptions]=\"{standalone: true}\">\n                        </div>\n                        <input class=\"btn-primary\" type=\"submit\" value=\"add\" style=\"display: none\">\n                    </form>\n\n                </div>\n            </div>\n        </div>\n\n\n    </form>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/host-credentials/host-credentials.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/host-credentials/host-credentials.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"loginMain\">\n  <div class=\"text-center\" *ngIf=\"!userSession.Owner\">\n    <a href=\"#\" class=\"login\" (click)=\"setRoute('host-login');false;\">Login</a>\n  </div>\n  <div class=\"text-center\" *ngIf=\"!userSession.Owner && hostInfo['SelfRegistration']==='On'\">\n    <a href=\"#\" (click)=\"addUser(); false;\">Sign up</a>\n  </div>\n</div>\n\n\n<div *ngIf=\"userSession.Owner\" class=\"exit\">\n  <span class=\"session\" [ngClass]=\"{'error':idleState !== '30 m'}\">Inactivity session logout: {{idleState}}</span>\n\n  <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n    <mat-icon>account_circle</mat-icon>\n  </button>\n  <mat-menu #menu=\"matMenu\">\n    <button mat-menu-item>\n      <span>{{userSession.Name}} ({{userSession.Module}})</span>\n    </button>\n\n    <button *ngIf=\"userSession.Module!=='Admin'\" mat-menu-item (click)=\"setRoute('edit-user');false;\">\n      <mat-icon>lock</mat-icon>\n      <span>Update Profile</span>\n    </button>\n\n    <button *ngIf=\"userSession.Module==='Admin'\" mat-menu-item (click)=\"setRoute('settings');false;\">\n    <mat-icon>lock</mat-icon>\n    <span>Update Profile</span>\n    </button>\n\n    <button mat-menu-item (click)=\"logout();false;\">\n      <mat-icon>exit_to_app</mat-icon>\n      <span>Logout</span>\n    </button>\n  </mat-menu>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/host-credentials/host-login/host-login.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/host-credentials/host-login/host-login.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loginMain card m-3 tags\">\n\n  <div class=\"login card m-3 tags\">\n    <h6 class=\"card-header\">\n      <div class=\"host\">\n        <div class=\"name\">Host Credentials</div>\n      </div>\n    </h6>\n    <div class=\"card-body\">\n      <form *ngIf=\"!userSession.Owner\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\"\n            class=\"d-flex justify-content-center\">\n        <div class=\"form-row\">\n          <div class=\"form-group col\">\n            <input type=\"text\" formControlName=\"owner\"\n                   class=\"form-control\" placeholder=\"Email\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.owner.errors }\" />\n            <input type=\"password\" formControlName=\"password\"\n                   class=\"form-control\" placeholder=\"Password\"\n                   [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" />\n            <span class=\"session\"><a href=\"#\" (click)=\"recoverPassword(); false;\">Recover Password</a></span>\n            <div *ngIf=\"submitted && f.owner.errors\" class=\"invalid-feedback\">\n              <div *ngIf=\"f.owner.errors.required\">Field is required</div>\n              <div *ngIf=\"f.owner.errors.minlength\">Email Or Password must be at least 4 characters</div>\n              <div *ngIf=\"f.owner.errors.generic\">{{f.owner.errors.generic}}</div>\n            </div>\n          </div>\n          <div class=\"buttons text-center flex-column\">\n            <div class=\"text-center\">\n              <button class=\"btn btn-primary mr-1\">OK</button>\n            </div>\n          </div>\n        </div>\n      </form>\n\n      <div class=\"response text-center\" *ngIf=\"response.Name\">\n        <div *ngIf=\"response.Name==='info'\" class=\"{{response.Name}}\">{{response.Status}}\n          <app-mat-progress-bar></app-mat-progress-bar>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/host-status/host-status.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/host-status/host-status.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<ng-template #popContent>\n  <span>Your Hostname: {{hostInfo.Hostname}}</span>\n  <br /><span>Operation Mode: <b>{{hostInfo.OpMode}}</b></span>\n  <br /><span>Queuing System: <b>{{hostInfo.Queue}}</b> (Max. Concurrency: <b>{{hostInfo.MaxConcurrency}}</b>)</span>\n  <br /><span class=\"{{hostConnection.Name}}\">\n            Connection Status: <b>{{hostConnection.Status}}</b></span>\n  <br />\n  <div *ngIf=\"hostConnection['Name']==='info'\" class=\"response\">\n    <app-mat-progress-bar></app-mat-progress-bar>\n  </div>\n</ng-template>\n\n<img class=\"icon\" container=\"body\" src=\"{{hostConnection['Name']==='ok'? '../../assets/serverOn.png':'../../assets/serverOff.png'}}\"\n       [ngbPopover]=\"popContent\"\n       triggers=\"mouseenter:mouseleave\"\n       popoverTitle=\"About this server\" />");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/classroom-edit/classroom-edit.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/classroom-edit/classroom-edit.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <div style=\"float: left\">\n      <span>{{fe.Id.value ? \"Edit\":\"Add\"}} Classroom</span>\n    </div>\n    <div style=\"float: right\">\n      <button class=\"btn-sm btn-success\" (click)=\"setRoute('view-classroom')\" style=\"margin-left: 20px;\">Classroom</button>\n    </div>\n  </h6>\n  <br />\n  <div class=\"col-md-12 group-container\">\n    <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"form-group\">\n        <label for=\"Name\">Name:</label>\n        <input class=\"text\" type=\"text\" formControlName=\"Name\" name=\"Name\" id=\"Name\">\n        <div *ngIf=\"submitted && fe.Name.errors\" class=\"error response\">\n          <div *ngIf=\"fe.Name.errors.required\">Field Name is required</div>\n          <div *ngIf=\"fe.Name.errors.minlength\">Name field must have a minimum of 5 characters</div>\n          <div *ngIf=\"fe.Name.errors.maxlength\">Name must be a maximum of 50 characters</div>\n        </div>\n      </div>\n\n\n      <div class=\"form-group\">\n        <label for=\"KeyAccess\">Self-registration Key:</label>\n        <input class=\"text\" type=\"text\" min=\"0\" max=\"60\" formControlName=\"KeyAccess\"\n               name=\"KeyAccess\" id=\"KeyAccess\">\n        <div *ngIf=\"submitted && fe.KeyAccess.errors\" class=\"error response\">\n          <div *ngIf=\"fe.KeyAccess.errors.maxlength\">The key must be up to 60 characters long</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"MaxStudents\">Maximum Number of Students:</label>\n        <input class=\"number\" type=\"number\" min=\"0\" max=\"1000\" formControlName=\"MaxStudents\"\n               name=\"MaxStudents\" id=\"MaxStudents\">\n        <div *ngIf=\"submitted && fe.MaxStudents.errors\" class=\"error response\">\n          <div *ngIf=\"fe.MaxStudents.errors.max\">The maximum number of students allowed is 100</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"Name\">Description:</label>\n        <ckeditor [editor]=\"Editor\" [config]=\"config\" formControlName=\"Description\"></ckeditor>\n      </div>\n\n\n      <div class=\"form-group\">\n        <button class=\"btn-sm btn-success\">{{fe.Id.value? \"Update\":\"Insert\"}}</button>\n      </div>\n    </form>\n\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/classroom.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/classroom.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n    <h6 class=\"card-header\">\n        <div style=\"float: left\">\n            <span *ngIf=\"notSel===1\">Classroom</span>\n            <span class=\"{{classroom.Enabled ? 'Enabled':'Disabled'}}\">\n            {{classroom.Name}} ({{classroom.Enabled ? \"Enabled\":\"Disabled\"}})\n            </span>\n        </div>\n        <div style=\"float: right\" *ngIf=\"classroom.Name && (userSession.Module==='Admin' ||\n                           classroomModule==='Lecture' ||\n                           classroom.IdUser==userSession.Id)\">\n            <button\n                    class=\"btn-sm btn-primary\" style=\"width:100px\" (click)=\"disableClassroom()\">\n                {{classroom.Enabled ? \"Disable\":\"Enable\"}}\n            </button>\n            <button\n                    class=\"btn-sm btn-primary\" style=\"width:100px\" (click)=\"editClassroom()\">Edit\n            </button>\n        </div>\n    </h6>\n    <div class=\"col-md-12 user-container\">\n        <div *ngIf=\"notSel===1 \">\n            Please, select one classroom.\n        </div>\n\n        <div *ngIf=\"notSel===0 && loadC===0\">\n            <app-mat-progress-bar></app-mat-progress-bar>\n        </div>\n\n        <div *ngIf=\"(!classroom && loadC===1)\">\n            No records found.\n        </div>\n\n        <div class=\"form-group\" *ngIf=\"(classroom && loadC===1)\" style=\"margin-top: 15px;\">\n\n            <div class=\"form-row\">\n\n                <div class=\"col-md-6 user-container\">\n                    <div class=\"card m-12\">\n                        <div class=\"card-header\" style=\"min-height: 141px;\">\n                            Description\n                            <mat-divider></mat-divider>\n                            <br />\n                            <div [innerHTML]=\"classroom.Description\" class=\"description\"></div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-6 user-container\">\n                    <div class=\"card m-12\">\n                        <div class=\"card-header\" style=\"min-height: 141px;\">\n                            <p class=\"description\" *ngIf=\"classroomModule || userSession.Module==='Admin'\">Self-registration key: {{classroom.KeyAccess}}</p>\n\n                            <div class=\"col-md-12 user-container\" *ngIf=\"!classroomModule && userSession.Module!=='Admin'\">\n                                <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n\n                                    <div class=\"form-row\">\n                                        <div class=\"form-group col-md-6\">\n                                            <label for=\"KeyAccess\">Self-registration key:</label>\n                                            <input type=\"text\" formControlName=\"KeyAccess\" placeholder=\"KeyAccess\"\n                                                   name=\"KeyAccess\" class=\"form-control\" id=\"KeyAccess\">\n                                        </div>\n                                        <div class=\"form-group col-md-6\">\n                                            <button class=\"btn-sm btn-success\">Insert Key</button>\n                                        </div>\n                                    </div>\n\n                                    <div *ngIf=\"submitted && fe.KeyAccess.errors\" class=\"error response\">\n                                        <div *ngIf=\"fe.KeyAccess.errors.maxlength\">The key must be up to 60 characters\n                                            long\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n\n\n                            <p class=\"description\">Maximum number of students: {{classroom.MaxStudents}}</p>\n                            Members\n                            <mat-divider></mat-divider>\n                            <div *ngIf=\"loadM===0\">\n                                <app-mat-progress-bar></app-mat-progress-bar>\n                            </div>\n\n                            <div *ngIf=\"(!classroom && loadM===1)\">\n                                No members found.\n                            </div>\n                            <table class=\"table table-striped\">\n                                <tr *ngFor=\"let u of users\">\n                                    <td>\n                                        <img src=\"../../../assets/{{u.Module}}.jpg\" width=\"20px\"/>\n                                        <span class=\"description\">{{u.Module}} - {{u.Name}}: {{u.Email}}</span>\n                                    </td>\n                                </tr>\n                            </table>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.html":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.html ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <div style=\"float: left\">\n      <span>Answer: {{exercise.Title}} {{answerName?'('+answerName+')':''}}</span>\n      <br />\n      <span *ngIf=\"(exIsExpired >= 0)\"\n            class=\"time\" style=\"font-size: 12px;\">Time to finish: {{countDown}}\n            </span>\n    </div>\n    <div style=\"float: right\">\n      <button class=\"btn-sm btn-success\" (click)=\"setRoute('view-answer')\" style=\"margin-left: 20px;\">Answers</button>\n    </div>\n  </h6>\n\n  <div *ngIf=\"load===0\">\n    <app-mat-progress-bar></app-mat-progress-bar>\n  </div>\n\n  <div class=\"col-md-12 group-container\">\n\n    <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n      <br />\n      <ul ngbNav #nav=\"ngbNav\" class=\"nav-tabs\" [(activeId)]=\"navActive\" [destroyOnHide]=\"false\">\n        <li [ngbNavItem]=\"1\">\n          <a ngbNavLink>Content</a>\n          <ng-template ngbNavContent>\n            <div class=\"card m-12\">\n              <h6 class=\"card-header\">Exercise description</h6>\n              <div class=\"card-body\">\n                <div [innerHTML]=\"exercise.Content\"></div>\n              </div>\n            </div>\n\n          </ng-template>\n        </li>\n\n        <li [ngbNavItem]=\"2\">\n          <a ngbNavLink>Coding</a>\n          <ng-template ngbNavContent>\n\n            <div class=\"form-group code\">\n              <app-code></app-code>\n            </div>\n\n          </ng-template>\n        </li>\n\n        <li [ngbNavItem]=\"3\">\n          <a ngbNavLink>Diff</a>\n          <ng-template ngbNavContent>\n\n            <div class=\"form-group\">\n              <div class=\"diff\">\n                <div class=\"diffAdmin\">Admin Result</div>\n                <div class=\"diffUser\">Your Result:\n                  <button (click)=\"false\" *ngIf=\"diff\" [ngClass]=\"(diff=='EQUAL')?'btn-sm btn btn-success':'btn-sm btn btn-danger'\">\n                    {{diff}}\n                  </button>\n                </div>\n              </div>\n\n              <ngx-monaco-diff-editor\n                      [options]=\"resultOptions\"\n                      [originalModel]=\"originalModel\"\n                      [modifiedModel]=\"modifiedModel\">\n\n              </ngx-monaco-diff-editor>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"Comment\">Comment:</label>\n              <textarea class=\"text\" type=\"text\" formControlName=\"Comment\" name=\"Comment\" id=\"Comment\"></textarea>\n            </div>\n\n          </ng-template>\n        </li>\n\n      </ul>\n      <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n\n      <div class=\"form-group\">\n        <br /><button *ngIf=\"!Score && exIsExpired > 0 && exercise.MaxSubmissions > TotalEx\"\n                      class=\"btn-sm btn-success\">Submit</button>\n      </div>\n\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer.component.html ***!
  \*******************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n    <h6 class=\"card-header\">\n        <div style=\"float: left\">\n            <span>Last Exercise Answers: {{exercise.Title}}</span>\n            <br/>\n            <span *ngIf=\"(exIsExpired >= 0)\"\n                  class=\"time\" style=\"font-size: 12px;\">Time to finish: {{countDown}}\n            </span>\n        </div>\n        <div style=\"float: right\">\n            <button class=\"btn-sm btn-success\" (click)=\"setRoute('view-exercise')\" style=\"margin-left: 20px;\">\n                Exercises\n            </button>\n            <button *ngIf=\"(userSession.Module==='User' && totalAnswers < exercise.MaxSubmissions\n                                        && exIsExpired >= 0 && !score)\n            || (  (userSession.Module==='Admin' || module==='Assistant' || module==='Lecturer')\n                   && exIsExpired >= 0 && !score\n               )\" class=\"btn-sm btn-primary\" style=\"width:100px\" (click)=\"addAnswer()\">\n                Add\n            </button>\n        </div>\n    </h6>\n\n    <div *ngIf=\"load===0\">\n        <app-mat-progress-bar></app-mat-progress-bar>\n    </div>\n\n    <div *ngIf=\"(answers?.length <= 0 && load===1)\">\n        No records found.\n    </div>\n\n    <div class=\"filter\">\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($any($event.target).value)\" placeholder=\"Filter: \">\n        </mat-form-field>\n        <div *ngIf=\"userSession.Module==='Admin' || module==='Assistant' || module==='Lecturer' \" class=\"buttonMenu\">\n\n            <div ngbDropdown class=\"d-inline-block\">\n                <button class=\"btn-sm btn-success\" (click)=\"checkSimilarity(); false;\" style=\"margin-left: 20px;\">Check\n                    Similarity\n                </button>\n            </div>\n            <div ngbDropdown class=\"d-inline-block\">\n                <button class=\"btn btn-outline-secondary\" (click)=\"false;\" id=\"dropdownBasic2\" ngbDropdownToggle>Export\n                    Results\n                </button>\n                <div ngbDropdownMenu aria-labelledby=\"dropdownBasic2\">\n                    <button (click)=\"download('allExec'); false;\" ngbDropdownItem disabled>All Executions</button>\n                    <button (click)=\"download('lastExec'); false;\" ngbDropdownItem>Last Executions</button>\n                    <button (click)=\"download('allCode'); false;\" ngbDropdownItem disabled>All Codes</button>\n                    <button (click)=\"download('lastCode'); false;\" ngbDropdownItem>Last Codes</button>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"example-container mat-elevation-z8 \">\n\n        <table mat-table\n               [dataSource]=\"dataSource\" multiTemplateDataRows\n               class=\"mat-elevation-z8\" matSort>\n\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"Id\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> ID</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.Id}}</td>\n            </ng-container>\n\n            <!-- Title Column -->\n            <ng-container matColumnDef=\"Name\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Name/Group</th>\n                <td mat-cell *matCellDef=\"let row;let i = dataIndex;\">\n                    <a *ngIf=\"row.gId && (userSession.Module==='Admin' || module==='Assistant' || module==='Lecturer')\"\n                       href=\"#\" (click)=\"getHistoryGroup(row.gId); false;\"\n                       placement=\"top\" ngbTooltip=\"Click to show the group history\">\n                        {{row.gId ? row.gName : row.Name}}\n                    </a>\n                    <a *ngIf=\"!row.gId || (row.gId && userSession.Module!=='Admin' && module!=='Assistant' && module!=='Lecturer')\">\n                        {{row.gId ? row.gName : row.Name}}\n                    </a>\n                </td>\n            </ng-container>\n\n            <!-- ExpirationDate Column -->\n            <ng-container matColumnDef=\"Date\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Last Submission</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.Date}}</td>\n            </ng-container>\n\n            <!-- Status Column -->\n            <ng-container matColumnDef=\"Status\">\n                <th mat-header-cell *matHeaderCellDef> Last Result</th>\n                <td mat-cell *matCellDef=\"let element\" class=\"action-link\">\n                    <button data-html=\"true\" id=\"button\" placement=\"top\"\n                            [ngClass]=\"(element.Status=='EQUAL')?'btn-sm btn btn-success':'btn-sm btn btn-danger'\">\n                        {{element.Status}}\n                    </button>\n                </td>\n            </ng-container>\n\n            <!-- Score Time Column -->\n            <ng-container matColumnDef=\"Score\">\n                <th mat-header-cell *matHeaderCellDef> Score / Feedback</th>\n                <td mat-cell *matCellDef=\"let row;let i = dataIndex;\">\n                    <a *ngIf=\"userSession.Module==='Admin' || module==='Assistant' || module==='Lecturer'\"\n                       href=\"#\" (click)=\"changeScore(i, row); false;\"\n                       placement=\"top\" ngbTooltip=\"Click to change\">\n                        {{row.Score ? row.Score:\"No\"}}/{{row.Feedback ? \"Yes\":\"No\"}}\n                    </a>\n                    <a *ngIf=\"userSession.Module!=='Admin' && module!=='Assistant' && module!=='Lecturer'\"\n                       href=\"#\" (click)=\"showFeedback(i); false;\"\n                       placement=\"top\" ngbTooltip=\"Click to show the feedback\">\n                        {{row.Score ? row.Score:\"No\"}}/{{row.Feedback ? \"Yes\":\"No\"}}\n                    </a>\n                </td>\n            </ng-container>\n\n            <!-- Response Time Column -->\n            <ng-container matColumnDef=\"TotalEx\">\n                <th mat-header-cell *matHeaderCellDef mat-sort-header> Attempts Number</th>\n                <td mat-cell *matCellDef=\"let row\"> {{row.TotalEx}}</td>\n            </ng-container>\n\n            <!-- Expanded Content Column - The detail row is made up of this one column that spans across all columns -->\n            <ng-container matColumnDef=\"expandedDetail\">\n                <td mat-cell *matCellDef=\"let element;let r = dataIndex;\" [attr.colspan]=\"displayedColumns.length\">\n                    <div class=\"element-detail\"\n                         [@detailExpand]=\"element == expandedElement ? 'expanded' : 'collapsed'\">\n\n\n                        <table mat-table [dataSource]=\"element.run\" matSort>\n\n                            <!-- Index Column -->\n                            <ng-container matColumnDef=\"Index2\">\n                                <mat-header-cell *matHeaderCellDef> #</mat-header-cell>\n                                <mat-cell *matCellDef=\"let row;let i = index\"> {{i+1}}</mat-cell>\n                            </ng-container>\n\n                            <!-- Name Column -->\n                            <ng-container matColumnDef=\"Name2\">\n                                <mat-header-cell *matHeaderCellDef> Submitted by</mat-header-cell>\n                                <mat-cell *matCellDef=\"let row\"> {{row.Name}}</mat-cell>\n                            </ng-container>\n\n                            <!-- Date Column -->\n                            <ng-container matColumnDef=\"Date2\">\n                                <mat-header-cell *matHeaderCellDef> Submission</mat-header-cell>\n                                <mat-cell *matCellDef=\"let row\"> {{row.Date}}</mat-cell>\n                            </ng-container>\n\n                            <!-- CheckCount Column -->\n                            <ng-container matColumnDef=\"CheckCount2\">\n                                <mat-header-cell *matHeaderCellDef> Code Analysis</mat-header-cell>\n                                <mat-cell *matCellDef=\"let element\" class=\"action-link\">\n                                    <a href=\"#\" (click)=\"showList(element.CheckList); false;\">\n                                        <mat-progress-bar id=\"checkBar\"\n                                                          placement=\"top\" ngbTooltip=\"Click to see code analysis\"\n                                                          mode=\"determinate\"\n                                                          value=\"{{element.CheckCount}}\"></mat-progress-bar>\n                                    </a>\n                                </mat-cell>\n                            </ng-container>\n\n                            <!-- ExecTime Column -->\n                            <ng-container matColumnDef=\"ExecTime2\">\n                                <mat-header-cell *matHeaderCellDef> Response Time</mat-header-cell>\n                                <mat-cell *matCellDef=\"let row\"> {{row.ExecTime}}</mat-cell>\n                            </ng-container>\n\n                            <!-- Events Column -->\n                            <ng-container matColumnDef=\"History2\">\n                                <mat-header-cell *matHeaderCellDef mat-sort-header> Events</mat-header-cell>\n                                <mat-cell *matCellDef=\"let element\" class=\"action-link\">\n                                    <a href=\"#\" (click)=\"showEvents(element.Id); false;\"\n                                       placement=\"top\" ngbTooltip=\"Click to see the exercise events\">\n                                        {{element.History}}\n                                    </a>\n                                </mat-cell>\n                            </ng-container>\n\n                            <!-- Status Column -->\n                            <ng-container matColumnDef=\"Status2\">\n                                <mat-header-cell *matHeaderCellDef> Status</mat-header-cell>\n                                <mat-cell *matCellDef=\"let row\"> {{row.Status}}</mat-cell>\n                            </ng-container>\n\n                            <!-- Action Column -->\n                            <ng-container matColumnDef=\"Action2\">\n                                <mat-header-cell *matHeaderCellDef> Action</mat-header-cell>\n                                <mat-cell *matCellDef=\"let element;let i = index\" class=\"action-link\">\n                                    <div style=\"word-wrap: break-word;\">\n                                        <button mat-icon-button\n                                                *ngIf=\"userSession.Module==='Admin' || module==='Assistant' || module==='Lecturer'\"\n                                                (click)=\"deleteAnswer(element.Id, element.Name, r, i); false;\"\n                                                placement=\"top\" ngbTooltip=\"Delete exercise answer\">\n                                            <mat-icon>delete</mat-icon>\n                                        </button>\n                                        <button mat-icon-button\n                                                (click)=\"editAnswer(element); false;\"\n                                                placement=\"top\" ngbTooltip=\"Show exercise answer\">\n                                            <mat-icon>code</mat-icon>\n                                        </button>\n                                    </div>\n                                </mat-cell>\n                            </ng-container>\n\n                            <mat-header-row class=\"header2\" *matHeaderRowDef=\"displayedColumns2\"></mat-header-row>\n                            <mat-row *matRowDef=\"let row; columns: displayedColumns2;\">\n                            </mat-row>\n                        </table>\n\n                    </div>\n                </td>\n            </ng-container>\n\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let element; columns: displayedColumns;\"\n                class=\"element-row\"\n                [class.example-expanded-row]=\"expandedElement === element\"\n                (click)=\"expandedElement = element\">\n            </tr>\n            <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\" class=\"example-detail-row\"></tr>\n\n        </table>\n\n        <mat-paginator [pageSizeOptions]=\"[25, 50, 100]\"></mat-paginator>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-edit.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-edit.component.html ***!
  \***************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <div style=\"float: left\">\n      <span>{{fe.Id.value ? \"Edit\":\"Add\"}} Exercise</span>\n    </div>\n    <div style=\"float: right\">\n      <button class=\"btn-sm btn-success\" (click)=\"setRoute('view-exercise')\" style=\"margin-left: 20px;\">Exercises</button>\n    </div>\n  </h6>\n  <br />\n  <div class=\"col-md-12 group-container\">\n    <div *ngIf=\"!fe.Id.value\">\n      <span class=\"alert-info\">Fill in the contents and parameters first, then click the Insert button to enable Groups, Files, and Code.</span>\n      <br />\n      <br />\n    </div>\n    <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n\n      <ul ngbNav #nav=\"ngbNav\" class=\"nav-tabs\" [destroyOnHide]=\"false\">\n        <li [ngbNavItem]=\"1\">\n          <a ngbNavLink>Content</a>\n          <ng-template ngbNavContent>\n\n            <div class=\"form-group\">\n              <label for=\"Title\">Title:</label>\n              <input class=\"text\" type=\"text\" formControlName=\"Title\" name=\"Title\" id=\"Title\">\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"Content\">Content:</label>\n              <ckeditor [editor]=\"Editor\" [config]=\"config\" formControlName=\"Content\"></ckeditor>\n            </div>\n\n          </ng-template>\n        </li>\n\n        <li [ngbNavItem]=\"2\">\n          <a ngbNavLink>Parameters</a>\n          <ng-template ngbNavContent>\n\n            <div class=\"form-group\">\n              <label for=\"Date\">Expiration Date: </label>\n\n              <div class=\"form-group\">\n                <div class=\"input-group\">\n                  <input class=\"date\" placeholder=\"yyyy-mm-dd\"\n                         name=\"dp\" formControlName=\"Date\" ngbDatepicker #d=\"ngbDatepicker\">\n                  <div class=\"input-group-append\">\n                    <button class=\"btn btn-outline-secondary\" (click)=\"d.toggle()\" type=\"button\">\n                      <img class=\"icon\" src=\"../../assets/calendar.png\" />\n                    </button>\n                  </div>\n                </div>\n                <ngb-timepicker formControlName=\"Time\"></ngb-timepicker>\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"MaxSubmissions\">Maximum Number of Submissions:</label>\n              <input class=\"number\" type=\"number\" min=\"0\" max=\"1000\" formControlName=\"MaxSubmissions\"\n                     name=\"MaxSubmissions\" id=\"MaxSubmissions\">\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"MaxTimeout\">Maximum Timeout (seconds):</label>\n              <input class=\"number\" type=\"number\" min=\"0\" max=\"1000\" formControlName=\"MaxTimeout\"\n                     name=\"MaxTimeout\" id=\"MaxTimeout\">\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"MaxFileSize\">Maximum file size that the student can use with input (bytes). <br />Leave zero to disable:</label>\n              <input class=\"number\" type=\"number\" formControlName=\"MaxFileSize\"\n                     name=\"MaxFileSize\" id=\"MaxFileSize\"\n                     (click)=\"getInputMaxFileSize($event)\"\n                     (keyup)=\"getInputMaxFileSize($event)\">{{maxFileSize}}\n            </div>\n\n          </ng-template>\n        </li>\n\n        <li [ngbNavItem]=\"4\" [disabled]=\"!exerciseId\">\n          <a ngbNavLink>Groups</a>\n          <ng-template ngbNavContent>\n\n            <exercises-app-groups [exerciseId]=\"exerciseId\"\n                          *ngIf=\"exerciseId\"></exercises-app-groups>\n\n          </ng-template>\n        </li>\n\n        <li [ngbNavItem]=\"5\" [disabled]=\"!exerciseId\">\n          <a ngbNavLink>Files</a>\n          <ng-template ngbNavContent>\n            <exercises-app-files [exerciseId]=\"exerciseId\"\n                                 *ngIf=\"exerciseId\"></exercises-app-files>\n          </ng-template>\n        </li>\n\n        <li [ngbNavItem]=\"6\" [disabled]=\"!fe.Id.value\">\n          <a ngbNavLink (click)=\"updateCodeTab()\">Code</a>\n          <ng-template ngbNavContent>\n            <div class=\"form-group code\">\n              <app-code></app-code>\n            </div>\n          </ng-template>\n        </li>\n      </ul>\n      <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n\n      <div class=\"form-group\">\n        <button class=\"btn-sm btn-success\">{{exerciseId? \"Update\":\"Insert\"}}</button>\n      </div>\n      <div *ngIf=\"submitted && fe.Title.errors\" class=\"error response\">\n        <div *ngIf=\"fe.Title.errors.required\">Title is required</div>\n        <div *ngIf=\"fe.Name.errors.minlength\">Title field must have a minimum of 5 characters</div>\n        <div *ngIf=\"fe.Title.errors.maxlength\">Title must be up to 100 characters long</div>\n      </div>\n      <div *ngIf=\"submitted && fe.Date.errors\" class=\"error response\">\n        <div *ngIf=\"fe.Date.errors.required\">Date is required</div>\n      </div>\n      <div *ngIf=\"submitted && fe.Time.errors\" class=\"error response\">\n        <div *ngIf=\"fe.Time.errors.required\">Time is required</div>\n      </div>\n      <div *ngIf=\"submitted && fe.MaxTimeout.errors\" class=\"error response\">\n        <div *ngIf=\"fe.MaxTimeout.errors.required\">MaxTimeout is required</div>\n      </div>\n      <div *ngIf=\"submitted && fe.MaxSubmissions.errors\" class=\"error response\">\n        <div *ngIf=\"fe.MaxSubmissions.errors.required\">MaxSubmissions is required</div>\n      </div>\n    </form>\n\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-files/exercises-files.component.html":
/*!********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-files/exercises-files.component.html ***!
  \********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div *ngIf=\"load===0 && exerciseId\">\n  <app-mat-progress-bar></app-mat-progress-bar>\n</div>\n\n<div *ngIf=\"!exerciseId\">Save the exercise first to enter a group.</div>\n\n<div *ngIf=\"exerciseId\" class=\"m-12\">\n\n  <form *ngIf=\"exerciseId\" enctype=\"multipart/form-data\" (ngSubmit)=\"uploadFile()\">\n    <div class=\"form-row\">\n      <div class=\"form-group col-md-3\">\n        <input #inputFile class=\"btn-sm btn-primary\" type='file' name=\"media\" #selectfile >\n      </div>\n      <div class=\"form-group col-md-3\">\n        <button class=\"btn-sm btn-primary\" mat-raised-button type=\"button\" (click)=\"uploadFile()\">Upload</button>\n      </div>\n      <div class=\"form-group col-md-3\">\n        <progress [value]=progress.loaded  [max]=progress.total></progress>\n      </div>\n    </div>\n\n  </form>\n\n  <div *ngIf=\"(files?.length <= 0 && load===1)\">\n    No records found.\n  </div>\n\n  <div class=\"example-container mat-elevation-z8 \">\n\n    <mat-table [dataSource]=\"dataSource\" class=\"table table-striped\" matSort>\n\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"Id\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.Id}} </mat-cell>\n      </ng-container>\n\n      <!-- Title Column -->\n      <ng-container matColumnDef=\"Name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.FileName}} </mat-cell>\n      </ng-container>\n\n      <!-- Size Column -->\n      <ng-container matColumnDef=\"Size\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Size </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{_util.formatBytes(row.Size)}} </mat-cell>\n      </ng-container>\n\n      <!-- Action Column -->\n      <ng-container matColumnDef=\"Action\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" class=\"action-link\">\n          <div>\n            <button mat-icon-button\n                    (click)=\"delete(element); false;\">\n              <mat-icon>delete</mat-icon>\n            </button>\n          </div>\n          <div>\n            <button placement=\"top\" ngbTooltip=\"Click to download\"\n                    mat-icon-button\n                    (click)=\"download(element); false;\">\n              <mat-icon>save_alt</mat-icon>\n            </button>\n          </div>\n        </mat-cell>\n      </ng-container>\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n    Files are inserted or deleted after choice. You don't need to click the Update button.\n\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-groups/exercises-groups.component.html":
/*!**********************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-groups/exercises-groups.component.html ***!
  \**********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"load===0\">\n  <app-mat-progress-bar></app-mat-progress-bar>\n</div>\n\n<div class=\"col-md-6 group-container\">\n  <div *ngIf=\"!exerciseId\">Save the exercise first to enter a group.</div>\n\n  <form  [formGroup]=\"editForm\">\n\n    <mat-chip-list #chipList aria-label=\"Member selection\">\n\n      <div class=\"form-group\">\n\n        <mat-chip\n                *ngFor=\"let member of members\"\n                [selectable]=\"selectable\"\n                [removable]=\"removable\"\n                (removed)=\"remove(member)\">\n          {{member.Name}}\n          <mat-icon matChipRemove *ngIf=\"removable\">X</mat-icon>\n        </mat-chip>\n      </div>\n      <div class=\"form-group\">\n\n        <input\n                placeholder=\"New group...\"\n                #memberInput\n                [formControl]=\"memberCtrl\"\n                [matAutocomplete]=\"auto\"\n                [matChipInputFor]=\"chipList\"\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                [matChipInputAddOnBlur]=\"addOnBlur\"\n                (matChipInputTokenEnd)=\"add(memberInput)\">\n      </div>\n    </mat-chip-list>\n    <div class=\"form-group\">\n      Members are automatically inserted or deleted in the group once selected. You don't need to click the Update button.\n      <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n        <mat-option *ngFor=\"let member of filteredMembers | async\" [value]=\"member\">\n          {{member.Name}}\n        </mat-option>\n      </mat-autocomplete>\n    </div>\n\n  </form>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/exercises/exercises.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/exercises/exercises.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <div style=\"float: left\">\n      <span>Exercises</span>\n    </div>\n\n    <div style=\"float: right\">\n      <button\n              class=\"btn-sm btn-primary\" style=\"width:110px\" (click)=\"setKey()\">Exercise Key\n      </button>\n    </div>\n\n    <div style=\"float: right\">\n      <button *ngIf=\"userSession.Module==='Admin' || module==='Lecturer' || module==='Assistant'\"\n              class=\"btn-sm btn-primary\" style=\"width:100px\" (click)=\"addExercise()\">Add</button>\n    </div>\n  </h6>\n\n  <div *ngIf=\"load===0\">\n    <app-mat-progress-bar></app-mat-progress-bar>\n  </div>\n\n  <div *ngIf=\"(exercises?.length <= 0 && load===1)\">\n    No records found.\n  </div>\n\n  <div class=\"filter\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($any($event.target).value)\" placeholder=\"Filter: \">\n    </mat-form-field>\n  </div>\n\n  <div class=\"example-container mat-elevation-z8 \">\n\n    <mat-table [dataSource]=\"dataSource\" class=\"table table-striped\" matSort>\n\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"Id\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.Id}} </mat-cell>\n      </ng-container>\n\n      <!-- Title Column -->\n      <ng-container matColumnDef=\"Title\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Title </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.hasGroup ? row.Title+\" (\"+row.hasGroup+\")\" : row.Title}} </mat-cell>\n      </ng-container>\n\n      <!-- MaxSubmissions Column -->\n      <ng-container matColumnDef=\"MaxSubmissions\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>\n          <span placement=\"top\"\n                ngbTooltip=\"Maximum Number of Submissions / Timeout\">MNS/T</span>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.MaxSubmissions}}/{{row.MaxTimeout}}s </mat-cell>\n      </ng-container>\n\n      <!-- Date Column -->\n      <ng-container matColumnDef=\"Date\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Expiration Date </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\">\n          <div style=\"word-wrap: break-word;\"> {{row.Date}}<br />\n            <span *ngIf=\"row.IsExpired < 0\" class=\"expired\">[expired]</span>\n            <span *ngIf=\"row.IsExpired > 0 && row.IsExpired <= 86400\" class=\"Notexpired\">[expires soon!]</span>\n            <span *ngIf=\"row.IsExpired > 86400\" class=\"Notexpired\">[about {{(row.IsExpired/60/60/24).toFixed(0)}} day(s)]</span>\n          </div>\n        </mat-cell>\n      </ng-container>\n\n      <!-- Response Time Column -->\n      <ng-container matColumnDef=\"ExecTime\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>\n                    <span placement=\"top\"\n                          ngbTooltip=\"Admin Response Time\">RT</span>\n        </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.ExecTime}} </mat-cell>\n      </ng-container>\n\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"CheckCount\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header>\n          <span placement=\"top\"\n                ngbTooltip=\"Admin Code Analysis\">Code Analysis</span>\n          </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" class=\"action-link\">\n          <a href=\"#\" placement=\"top\" ngbTooltip=\"Click to see code analysis\"\n             (click)=\"showList(element.CheckList); false;\">\n            <mat-progress-bar id=\"checkBar\" mode=\"determinate\" value=\"{{element.CheckCount}}\"></mat-progress-bar>\n          </a>\n        </mat-cell>\n      </ng-container>\n\n      <!-- Delivered Column -->\n      <ng-container matColumnDef=\"Answers\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Delivered </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" class=\"action-link\">\n          <div style=\"word-wrap: break-word;\">\n            <span *ngIf=\"userSession.Module!=='Admin'\">{{element.Name}}</span>\n            <button placement=\"top\" ngbTooltip=\"{{element.cAnswers}} exercise answers\"\n                    mat-icon-button (click)=\"viewAnswer(element, element.IsExpired)\">\n              <mat-icon>list</mat-icon> ({{element.cAnswers}})\n            </button>\n          </div>\n        </mat-cell>\n      </ng-container>\n\n      <!-- Action Column -->\n      <ng-container *ngIf=\"userSession.Module==='Admin' || module==='Lecturer' || module==='Assistant'\" matColumnDef=\"Action\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" class=\"action-link\">\n          <div style=\"word-wrap: break-word;\">\n            <button mat-icon-button\n                    (click)=\"deleteExercise(element)\">\n              <mat-icon>delete</mat-icon>\n            </button>\n\n            <button mat-icon-button\n                    (click)=\"editExercise(element)\">\n              <mat-icon>edit</mat-icon>\n            </button>\n          </div>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n\n    <mat-paginator [pageSizeOptions]=\"[25, 50, 100]\"></mat-paginator>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/groups/groups-edit/groups-edit.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/groups/groups-edit/groups-edit.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <div style=\"float: left\">\n      <span>{{fe.Id.value ? \"Edit\":\"Add\"}} Group</span>\n    </div>\n    <div style=\"float: right\">\n      <button class=\"btn-sm btn-success\" (click)=\"setRoute('view-group')\" style=\"margin-left: 20px;\">Groups</button>\n    </div>\n  </h6>\n\n  <div class=\"col-md-6 group-container\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n\n      <div class=\"form-group\">\n        <label for=\"Name\">Group Name:</label>\n        <input type=\"text\" formControlName=\"Name\" placeholder=\"Name\" name=\"Name\" class=\"form-control\" id=\"Name\">\n        <div *ngIf=\"submitted && fe.Name.errors\" class=\"error response\">\n          <div *ngIf=\"fe.Name.errors.required\">Field is required</div>\n          <div *ngIf=\"fe.Name.errors.minlength\">Name must be at least 4 characters</div>\n          <div *ngIf=\"fe.Name.errors.maxlength\">Name must be a maximum of 60 characters</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"KeyAccess\">Group self-registration Key:</label>\n        <input type=\"text\" formControlName=\"KeyAccess\" placeholder=\"KeyAccess\" name=\"KeyAccess\" class=\"form-control\" id=\"KeyAccess\">\n        <div *ngIf=\"submitted && fe.KeyAccess.errors\" class=\"error response\">\n          <div *ngIf=\"fe.KeyAccess.errors.minlength\">Name must be at least 4 characters</div>\n          <div *ngIf=\"fe.KeyAccess.errors.maxlength\">KeyAccess must be a maximum of 60 characters</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"Description\">Description:</label>\n        <input type=\"text\" formControlName=\"Description\" placeholder=\"Description\"\n               name=\"Description\" class=\"form-control\" id=\"Description\">\n      </div>\n\n      <div class=\"form-group\">\n        <button class=\"btn-sm btn-success\">{{fe.Id.value ? \"Update\":\"Insert\"}}</button>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/groups/groups-members/groups-members.component.html":
/*!************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/groups/groups-members/groups-members.component.html ***!
  \************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <div style=\"float: left\">\n      <span>Group Members: {{groupName}}</span>\n    </div>\n    <div style=\"float: right\">\n      <button class=\"btn-sm btn-success\" (click)=\"setRoute('view-group')\" style=\"margin-left: 20px;\">Groups</button>\n    </div>\n  </h6>\n\n  <div class=\"col-md-6 group-container\">\n    <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"hidden\">\n        <input type=\"text\" formControlName=\"Name\" placeholder=\"Name\" name=\"Name\" class=\"form-control\" id=\"Name\" readonly>\n      </div>\n\n      <mat-chip-list #chipList aria-label=\"Member selection\">\n\n        <div class=\"form-group\">\n\n          <mat-chip\n                  *ngFor=\"let member of members\"\n                  [selectable]=\"selectable\"\n                  [removable]=\"removable\"\n                  (removed)=\"remove(member)\">\n            {{member.Name}}\n            <mat-icon matChipRemove *ngIf=\"removable\">X</mat-icon>\n          </mat-chip>\n        </div>\n        <div class=\"form-group\">\n\n          <input\n                  placeholder=\"New member...\"\n                  #memberInput\n                  [formControl]=\"memberCtrl\"\n                  [matAutocomplete]=\"auto\"\n                  [matChipInputFor]=\"chipList\"\n                  [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                  [matChipInputAddOnBlur]=\"addOnBlur\"\n                  (matChipInputTokenEnd)=\"add(memberInput)\">\n        </div>\n      </mat-chip-list>\n      <div class=\"form-group\">\n\n        <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n          <mat-option *ngFor=\"let member of filteredMembers | async\" [value]=\"member\">\n            {{member.Name}}\n          </mat-option>\n        </mat-autocomplete>\n      </div>\n\n      <div class=\"form-group\">\n        <button class=\"btn-sm btn-success\">Update</button>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/groups/groups.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/groups/groups.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <div style=\"float: left\">\n      <span>Groups</span>\n    </div>\n    <div style=\"float: right\">\n      <button class=\"btn-sm btn-primary\" style=\"width:100px\" (click)=\"addGroup()\">Add</button>\n    </div>\n  </h6>\n\n  <div *ngIf=\"load===0\">\n    <app-mat-progress-bar></app-mat-progress-bar>\n  </div>\n\n  <div *ngIf=\"(groups?.length <= 0 && load===1)\">\n    No records found.\n  </div>\n\n  <div class=\"filter\">\n    <mat-form-field>\n      <input matInput (keyup)=\"applyFilter($any($event.target).value)\" placeholder=\"Filter: \">\n    </mat-form-field>\n  </div>\n\n  <div class=\"example-container mat-elevation-z8 \">\n\n    <mat-table [dataSource]=\"dataSource\" matSort>\n\n      <!-- ID Column -->\n      <ng-container matColumnDef=\"Id\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.Id}} </mat-cell>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"Name\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.Name}} </mat-cell>\n      </ng-container>\n\n      <!-- Name Column -->\n      <ng-container matColumnDef=\"KeyAccess\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Self-registration Key </mat-header-cell>\n        <mat-cell *matCellDef=\"let row\"> {{row.KeyAccess}} </mat-cell>\n      </ng-container>\n\n      <!-- Action Column -->\n      <ng-container matColumnDef=\"Action\">\n        <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\n        <mat-cell *matCellDef=\"let element\" class=\"action-link\">\n          <button mat-icon-button (click)=\"addMembers(element)\" style=\"margin-left: 20px;\"\n                  ngbPopover=\"Click to add or delete users\"\n                  triggers=\"mouseenter:mouseleave\"\n                  popoverTitle=\"Members\">\n            <mat-icon>groups</mat-icon>\n            ({{element.mCount}})\n          </button>\n          <button mat-icon-button (click)=\"deleteGroup(element)\">\n            <mat-icon>delete</mat-icon>\n          </button>\n          <button mat-icon-button (click)=\"editGroup(element)\" style=\"margin-left: 20px;\">\n            <mat-icon>edit</mat-icon>\n          </button>\n        </mat-cell>\n      </ng-container>\n\n      <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n      <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n      </mat-row>\n    </mat-table>\n\n    <mat-paginator [pageSizeOptions]=\"[25, 50, 100]\"></mat-paginator>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/users/users-edit/users-edit.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/users/users-edit/users-edit.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <div style=\"float: left\">\n      <span>{{fe.Id.value ? \"Edit\":\"Add\"}} User</span>\n    </div>\n    <div style=\"float: right\" *ngIf=\"userSession.Module==='Admin'\">\n      <button class=\"btn-sm btn-success\" (click)=\"setRoute('view-user-classroom')\" style=\"margin-left: 20px;\">Users</button>\n    </div>\n  </h6>\n\n  <div class=\"col-md-6 user-container\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n      </div>\n\n      <hr />\n      <div class=\"form-group\">\n        <input type=\"text\" formControlName=\"Name\" placeholder=\"Name\" name=\"Name\" class=\"form-control\" id=\"Name\">\n        <div *ngIf=\"submitted && fe.Name.errors\" class=\"error response\">\n          <div *ngIf=\"fe.Name.errors.required\">Field is required</div>\n          <div *ngIf=\"fe.Name.errors.minlength\">Name must be at least 4 characters</div>\n          <div *ngIf=\"fe.Name.errors.maxlength\">Name must be a maximum of 60 characters</div>\n        </div>\n      </div>\n\n      <div class=\"error\" *ngIf=\"fe.Id.value===1\">Attention, the Admin password and email must be changed in the Settings module.\n        The change here is not definitive.</div>\n\n      <div class=\"form-group\">\n        <input type=\"password\" formControlName=\"Password\" placeholder=\"Password\" name=\"Password\" class=\"form-control\" id=\"Password\">\n        <div *ngIf=\"submitted && fe.Password.errors\" class=\"error response\">\n          <div *ngIf=\"fe.Password.errors.required\">Field is required</div>\n          <div *ngIf=\"fe.Password.errors.minlength\">Password must be at least 4 characters</div>\n          <div *ngIf=\"fe.Password.errors.maxlength\">Password must be a maximum of 50 characters</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"password\" formControlName=\"CPassword\" placeholder=\"Confirm Password\" name=\"CPassword\" class=\"form-control\" id=\"CPassword\">\n        <div *ngIf=\"submitted && fe.CPassword.errors\" class=\"error response\">\n          <div *ngIf=\"fe.CPassword.errors.required\">Field is required</div>\n          <div *ngIf=\"fe.CPassword.errors.minlength\">Password must be at least 4 characters</div>\n          <div *ngIf=\"fe.CPassword.errors.maxlength\">Password must be a maximum of 50 characters</div>\n          <div *ngIf=\"fe.CPassword.errors.mismatch\">The passwords are different</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"text\" formControlName=\"Email\" placeholder=\"Email\" name=\"Email\" class=\"form-control\" id=\"Email\">\n        <div *ngIf=\"submitted && fe.Email.errors\" class=\"error response\">\n          <div *ngIf=\"fe.Email.errors.required\">Field is required</div>\n          <div *ngIf=\"fe.Email.errors.maxlength\">Email must be a maximum of 100 characters</div>\n          <div *ngIf=\"fe.Email.errors.email\">Please enter a valid email</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"userSession.Module==='Admin'\">\n        <label for=\"Module\">Module:</label>\n        <select formControlName=\"Module\" placeholder=\"Module\" name=\"Module\" class=\"form-control\" id=\"Module\">\n          <option value=\"Lecturer\">Lecturer</option>\n          <option value=\"Student\">Student</option>\n          <option value=\"Assistant\">Assistant</option>\n        </select>\n        <div *ngIf=\"submitted && fe.Module.errors\" class=\"error response\">\n          <div *ngIf=\"fe.Module.errors.required\">Field is required</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"fe.Id.value\">\n        <label for=\"ForceChangePass\">Force password change at next login?</label>\n        <select formControlName=\"ForceChangePass\" placeholder=\"ForceChangePass\"\n                name=\"ForceChangePass\" class=\"form-control\" id=\"ForceChangePass\">\n          <option value=\"1\">Yes</option>\n          <option value=\"0\">No</option>\n        </select>\n      </div>\n\n      <div class=\"form-group\">\n        <button [disabled]=\"disabled\" class=\"btn-sm btn-success\">{{fe.Id.value ? \"Update\":\"Insert\"}}</button>\n      </div>\n    </form>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/users/users-join/users-join.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/users/users-join/users-join.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <div style=\"float: left\">\n      <span>Classroom Members</span>\n    </div>\n    <div style=\"float: right\">\n      <button class=\"btn-sm btn-success\" (click)=\"setRoute('view-user-classroom')\" style=\"margin-left: 20px;\">Users</button>\n    </div>\n  </h6>\n\n  <div class=\"col-md-6 group-container\">\n    <form [formGroup]=\"editForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"hidden\">\n        <input type=\"text\" formControlName=\"Name\" placeholder=\"Name\" name=\"Name\" class=\"form-control\" id=\"Name\" readonly>\n      </div>\n\n      <mat-chip-list #chipList aria-label=\"Member selection\">\n\n        <div class=\"form-group\">\n\n          <mat-chip\n                  *ngFor=\"let member of members\"\n                  [selectable]=\"selectable\">\n            {{member.Name}}\n          </mat-chip>\n        </div>\n        <div class=\"form-group\">\n\n          <input\n                  placeholder=\"New member...\"\n                  #memberInput\n                  [formControl]=\"memberCtrl\"\n                  [matAutocomplete]=\"auto\"\n                  [matChipInputFor]=\"chipList\"\n                  [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\n                  [matChipInputAddOnBlur]=\"addOnBlur\"\n                  (matChipInputTokenEnd)=\"add(memberInput)\">\n        </div>\n      </mat-chip-list>\n      <div class=\"form-group\">\n\n        <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event)\">\n          <mat-option *ngFor=\"let member of filteredMembers | async\" [value]=\"member\">\n            {{member.Name}}\n          </mat-option>\n        </mat-autocomplete>\n      </div>\n\n      <div class=\"form-group\">\n        <button class=\"btn-sm btn-success\">Update</button>\n      </div>\n    </form>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/users/users.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/users/users.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n    <h6 class=\"card-header\">\n        <div style=\"float: left\">\n            <span>Users</span>\n        </div>\n        <div style=\"float: right\">\n            <button class=\"btn-sm btn-primary\" (click)=\"addUser()\">New</button>\n        </div>\n        <div style=\"float: right; width: 50px;\">\n            <button class=\"btn-sm btn-primary\" (click)=\"joinUser()\">Join</button>\n        </div>\n    </h6>\n\n    <div *ngIf=\"load===0\">\n        <app-mat-progress-bar></app-mat-progress-bar>\n    </div>\n\n    <div *ngIf=\"(users?.length <= 0 && load===1)\">\n        No records found.\n    </div>\n\n    <div class=\"filter\">\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($any($event.target).value)\" placeholder=\"Filter: \">\n        </mat-form-field>\n    </div>\n\n    <div class=\"mat-elevation-z8 \">\n\n        <mat-table [dataSource]=\"dataSource\" matSort>\n\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"Id\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.Id}} </mat-cell>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"Name\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.Name}} </mat-cell>\n            </ng-container>\n\n            <!-- Email Column -->\n            <ng-container matColumnDef=\"Email\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.Email}} </mat-cell>\n            </ng-container>\n\n            <!-- Module Column -->\n            <ng-container matColumnDef=\"Module\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Module </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.Module}} </mat-cell>\n            </ng-container>\n\n            <!-- Action Column -->\n            <ng-container matColumnDef=\"Action\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"action-link\">\n                    <button *ngIf=\"(element.Module!=='Lecturer' && module==='Assistant')\n                    || module==='Lecturer' || userSession.Module==='Admin'\" mat-icon-button (click)=\"deleteUser(element)\">\n                        <mat-icon>delete</mat-icon>\n                    </button>\n                    <button *ngIf=\"(element.Module!=='Lecturer' && module==='Assistant')\n                    || module==='Lecturer' || userSession.Module==='Admin'\" mat-icon-button (click)=\"editUser(element)\" style=\"margin-left: 20px;\">\n                        <mat-icon>edit</mat-icon>\n                    </button>\n                </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </mat-row>\n        </mat-table>\n\n        <mat-paginator [pageSizeOptions]=\"[25, 50, 100]\"></mat-paginator>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/menu-classroom.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/menu-classroom.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"myGroup\">\n    <mat-form-field appearance=\"fill\" *ngIf=\"(userSession.Id || userSession.Module==='Admin') && classroom?.length > 0\">\n        <mat-label>Classroom</mat-label>\n        <mat-select formControlName=\"classroomControl\"\n                    (selectionChange)=\"onChange()\"\n                    [compareWith]=\"compareObjects\"\n                    required [(ngModel)]=\"classSelected\">\n            <mat-option *ngFor=\"let c of classroom\" [value]=\"c\">\n                {{c.Name}}\n            </mat-option>\n        </mat-select>\n        <mat-hint *ngIf=\"classroom?.length <= 0\">No registered classroom.</mat-hint>\n    </mat-form-field>\n</form>\n\n<div class=\"divTable\" [ngClass]=\"{'emptyClassroom': classroom?.length <= 0, 'hasClassroom': classroom?.length > 0}\">\n    <div class=\"divTableBody\">\n        <div class=\"divTableRow\" *ngIf=\"classSelected.Id\">\n\n            <div class=\"divTableCell\">\n                <mat-icon>info</mat-icon>\n            </div>\n            <div class=\"divTableCell\"><a href=\"#\" (click)=\"onChange(); false;\"\n                                         style=\"margin-left: 20px;\">Info</a></div>\n        </div>\n        <div class=\"divTableRow\" *ngIf=\"classSelected.Id && (userModule==='Assistant'\n                                                        || userModule==='Lecturer'\n                                                        || userSession.Module==='Admin'\n                                                        || classSelected.IdUser==userSession.Id)\">\n            <div class=\"divTableCell\">\n                <mat-icon>person</mat-icon>\n            </div>\n            <div class=\"divTableCell\"><a href=\"#\" (click)=\"setRoute('view-user-classroom'); false;\"\n                                         style=\"margin-left: 20px;\">Users</a>\n            </div>\n        </div>\n\n        <div class=\"divTableRow\" *ngIf=\"classSelected.Id && (userModule==='Assistant'\n                                                        || userModule==='Lecturer'\n                                                        || userSession.Module==='Admin'\n                                                        || classSelected.IdUser==userSession.Id)\">\n            <div class=\"divTableCell\">\n                <mat-icon>group</mat-icon>\n            </div>\n            <div class=\"divTableCell\"><a href=\"#\" (click)=\"setRoute('view-group'); false;\"\n                                         style=\"margin-left: 20px;\">Groups</a>\n            </div>\n        </div>\n\n        <div class=\"divTableRow\" *ngIf=\"classSelected.Id\">\n            <div class=\"divTableCell\">\n                <mat-icon>format_list_numbered</mat-icon>\n            </div>\n            <div class=\"divTableCell\"><a href=\"#\" (click)=\"setRoute('view-exercise'); false;\"\n                                         style=\"margin-left: 20px;\">Exercises</a></div>\n        </div>\n\n        <div class=\"divTableRow\" *ngIf=\"classSelected.Id\">\n            <div class=\"divTableCell\">\n                <mat-icon>code</mat-icon>\n            </div>\n            <div class=\"divTableCell\"><a href=\"#\" (click)=\"setRoute('view-code'); false;\"\n                                         style=\"margin-left: 20px;\">Try a Code</a></div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/classroom-manager/classroom-manager-edit/classroom-manager-edit.component.html":
/*!******************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/classroom-manager/classroom-manager-edit/classroom-manager-edit.component.html ***!
  \******************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <div style=\"float: left\">\n      <span>{{fe.Id.value ? \"Edit\":\"Add\"}} Classroom</span>\n    </div>\n    <div style=\"float: right\">\n      <button class=\"btn-sm btn-success\" (click)=\"setRoute('view-classroom-manager')\" style=\"margin-left: 20px;\">Classroom</button>\n    </div>\n  </h6>\n\n  <div class=\"col-md-6 user-container\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"Name\">Name:</label>\n        <input type=\"text\" formControlName=\"Name\" placeholder=\"Name\" name=\"Name\" class=\"form-control\" id=\"Name\">\n        <div *ngIf=\"submitted && fe.Name.errors\" class=\"error response\">\n          <div *ngIf=\"fe.Name.errors.required\">Field Name is required</div>\n          <div *ngIf=\"fe.Name.errors.minlength\">Name field must have a minimum of 5 characters</div>\n          <div *ngIf=\"fe.Name.errors.maxlength\">Name must be a maximum of 50 characters</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"IdUser\">Owner:</label>\n        <select formControlName=\"IdUser\" placeholder=\"Owner\" name=\"IdUser\" class=\"form-control\" id=\"IdUser\">\n          <option *ngFor=\"let u of users\" [value]=\"u.Id\">{{u.Name}}</option>\n        </select>\n        <div *ngIf=\"submitted && fe.IdUser.errors\" class=\"error response\">\n          <div *ngIf=\"fe.IdUser.errors.required\">Field Owner is required</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"Description\">Description:</label>\n        <ckeditor [editor]=\"Editor\" [config]=\"config\" formControlName=\"Description\"></ckeditor>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"MaxStudents\">MaxStudents:</label>\n        <input type=\"number\" formControlName=\"MaxStudents\" placeholder=\"MaxStudents\"\n               name=\"MaxStudents\" class=\"form-control\" id=\"MaxStudents\">\n        <div *ngIf=\"submitted && fe.MaxStudents.errors\" class=\"error response\">\n          <div *ngIf=\"fe.MaxStudents.errors.max\">The maximum number of students allowed is 100</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"Enabled\">Enabled:</label>\n        <select formControlName=\"Enabled\" placeholder=\"Enabled\" name=\"Enabled\" class=\"form-control\" id=\"Enabled\">\n          <option [value]=\"1\" selected>Yes</option>\n          <option [value]=\"0\">No</option>\n        </select>\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"KeyAccess\">KeyAccess:</label>\n        <input type=\"text\" formControlName=\"KeyAccess\" placeholder=\"KeyAccess\"\n               name=\"KeyAccess\" class=\"form-control\" id=\"KeyAccess\">\n        <div *ngIf=\"submitted && fe.KeyAccess.errors\" class=\"error response\">\n          <div *ngIf=\"fe.KeyAccess.errors.maxlength\">The key must be up to 60 characters long</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <button class=\"btn-sm btn-success\">{{fe.Id.value ? \"Update\":\"Insert\"}}</button>\n      </div>\n\n    </form>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/classroom-manager/classroom-manager.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/classroom-manager/classroom-manager.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n    <h6 class=\"card-header\">\n        <div style=\"float: left\">\n            <span>Classrooms</span>\n        </div>\n        <div style=\"float: right\">\n            <button class=\"btn-sm btn-primary\" style=\"width:100px\" (click)=\"addClassroom()\">Add</button>\n        </div>\n    </h6>\n\n    <div *ngIf=\"load===0\">\n        <app-mat-progress-bar></app-mat-progress-bar>\n    </div>\n\n    <div *ngIf=\"(classroom?.length <= 0 && load===1)\">\n        No records found.\n    </div>\n\n    <div class=\"filter\">\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($any($event.target).value)\" placeholder=\"Filter: \">\n        </mat-form-field>\n    </div>\n\n    <div class=\"mat-elevation-z8 \">\n\n        <mat-table [dataSource]=\"dataSource\" matSort>\n\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"Id\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.Id}} </mat-cell>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"Name\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.Name}} </mat-cell>\n            </ng-container>\n\n            <!-- IdUser Column -->\n            <ng-container matColumnDef=\"Owner\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Owner </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.Owner}} </mat-cell>\n            </ng-container>\n\n            <!-- MaxStudents Column -->\n            <ng-container matColumnDef=\"MaxStudents\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> MaxStudents </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.MaxStudents}} </mat-cell>\n            </ng-container>\n\n            <!-- Enabled Column -->\n=            <ng-container matColumnDef=\"Enabled\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Enabled </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.Enabled ? 'Yes' : 'No'}} </mat-cell>\n            </ng-container>\n\n            <!-- KeyAccess Column -->\n            <ng-container matColumnDef=\"KeyAccess\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> KeyAccess </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.KeyAccess}} </mat-cell>\n            </ng-container>\n\n            <!-- Action Column -->\n            <ng-container matColumnDef=\"Action\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"action-link\">\n                    <button mat-icon-button (click)=\"deleteClassroom(element)\">\n                        <mat-icon>delete</mat-icon>\n                    </button>\n                    <button mat-icon-button (click)=\"editClassroom(element)\" style=\"margin-left: 20px;\">\n                        <mat-icon>edit</mat-icon>\n                    </button>\n                </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </mat-row>\n        </mat-table>\n\n        <mat-paginator [pageSizeOptions]=\"[25, 50, 100]\"></mat-paginator>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/cluster-available/cluster-available.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/cluster-available/cluster-available.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n    <h6 class=\"card-header\">\n        <span>Cluster on Network</span>\n        <br/>\n        <span class=\"help\">In this section, the nodes detected on the local computer network are displayed.\n          If this host is a node, you can connect to a host configured as a master on the network.</span>\n    </h6>\n    <div class=\"col-md-12 user-container\">\n\n        <div class=\"form-group\" style=\"margin-top: 15px;\">\n\n            <div class=\"form-row\">\n\n                <div class=\"col-md-6 user-container\">\n                    <div class=\"card m-12\">\n                        <div class=\"card-header\" style=\"min-height: 141px;\">\n                            <app-mat-progress-bar *ngIf=\"!hostInfo.OpMode\"></app-mat-progress-bar>\n\n                            <div *ngIf=\"responseCo.Name\" class=\"{{responseCo.Name}} response text-center\">\n                                {{responseCo.Status}}\n                                <app-mat-progress-bar *ngIf=\"responseCo.Name==='info'\"></app-mat-progress-bar>\n                            </div>\n                            <table class=\"table table-striped\">\n                                <tr *ngFor=\"let c of clusters\">\n                                    <td>\n                                        <ul>\n                                            <li [className]=\"c.Name==='master' ? 'master':''\">\n                                                {{c.Name}} - {{c.MasterIP}}\n                                                <p>\n                                                    <span class=\"connected\">Last Check: {{c.LastActivity | slice:0:16}}</span>\n                                                    <span *ngIf=\"hostInfo.Cluster.Id===c.Id\" class=\"connected\"> | (connected)</span>\n                                                    <img *ngIf=\"c.Password\" class=\"key\" src=\"../../assets/key.png\"/>\n\n                                                    <a *ngIf=\"hostInfo.Cluster.Id!==c.Id && hostInfo['IsMaster']\"\n                                                       href=\"#\" (click)=\"connectToCluster(c);false;\" class=\"connected\">-\n                                                        Connect Now</a>\n                                                </p>\n                                            </li>\n                                        </ul>\n                                    </td>\n                                </tr>\n                            </table>\n                            <div *ngIf=\"!(clusters)?.length\"><span\n                                    class=\"connected\">*No master detected on the network</span></div>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-6 user-container\">\n                    <div class=\"card m-12\">\n                        <div class=\"card-header text-center\">\n                            Change the host's operating mode:\n\n                            <div class=\"card-body op-mode\">\n                                <mat-button-toggle-group #group=\"matButtonToggleGroup\" [value]=\"hostInfo.OpMode\"\n                                                         (click)=\"setOpMode(group.value)\">\n                                    <mat-button-toggle value=\"MASTER\">\n                                        MASTER\n                                    </mat-button-toggle>\n                                    <mat-button-toggle value=\"NODE\">NODE\n                                    </mat-button-toggle>\n                                    <mat-button-toggle value=\"LOCAL\">LOCAL\n                                    </mat-button-toggle>\n                                </mat-button-toggle-group>\n                            </div>\n\n                            <div class=\"response text-center\" *ngIf=\"responseOp.Name\">\n                                <div *ngIf=\"responseOp.Name==='ok' || responseOp.Name==='info'\" class=\"{{responseOp.Name}}\">\n                                    {{responseOp.Status}}\n                                    <app-mat-progress-bar></app-mat-progress-bar>\n                                </div>\n                                <div *ngIf=\"responseOp.Name==='error'\" class=\"{{responseOp.Name}}\">{{responseOp.Status}}</div>\n                            </div>\n\n                            <span class=\"description\">\n                                Go to <a href=\"#\" (click)=\"setRoute('settings'); false;\">Settings</a> to change operating mode permanently.\n                            </span>\n\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/current-nodes/current-nodes.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/current-nodes/current-nodes.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n    <h6 class=\"card-header\">\n        <span>Current Virtual Nodes in the Cluster</span>\n        <br/>\n        <span class=\"help\">Here the hosts and their respective nodes are listed.\n          You can add or remove nodes in the host/cluster.</span>\n    </h6>\n    <div class=\"col-md-12 user-container\">\n\n        <div class=\"form-group\" style=\"margin-top: 15px;\">\n\n            <div class=\"form-row\">\n\n                <div class=\"col-md-6 user-container\">\n                    <div class=\"card m-12\">\n                        <div class=\"card-header nodesSelection\">\n                            Increase or decrease the virtual nodes number\n                            <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\" class=\"justify-content-center\">\n                                <div class=\"form-row\">\n                                    <div class=\"form-group col-md-6\">\n                                        <input type=\"number\" formControlName=\"srvNumber\"\n                                               onkeydown=\"return false\"\n                                               onclick=\"return false\"\n                                               class=\"form-control\"\n                                               [ngClass]=\"{ 'is-invalid': submitted && f.srvNumber.errors }\"\n                                        />\n                                    </div>\n                                    <div class=\"form-group col-md-1\">\n                                        <button class=\"btn btn-primary mr-1\"\n                                                [disabled]=\"!f.srvNumber.errors && response.Name==='info'\">OK\n                                        </button>\n                                    </div>\n                                </div>\n                                <div class=\"form-row\">\n                                    <div *ngIf=\"submitted && f.srvNumber.errors\" class=\"invalid-feedback\">\n                                        <div *ngIf=\"f.srvNumber.errors.required\">Number of nodes is required</div>\n                                        <div *ngIf=\"f.srvNumber.errors.min\">Nodes must be at least 0 number or more\n                                        </div>\n                                        <div *ngIf=\"f.srvNumber.errors.generic\">{{f.srvNumber.errors.generic}}</div>\n                                    </div>\n                                    <div *ngIf=\"response.Name\" class=\"{{response.Name}} response\">\n                                        {{response.Status}}\n                                        <app-mat-progress-bar *ngIf=\"response.Name==='info'\"></app-mat-progress-bar>\n                                    </div>\n                                </div>\n\n                                <span class=\"description\">\n                                    Current node mode: {{hostInfo.Cluster.NodeMode}}\n                                    <hr />\n                                SINGLE: creates a node for each vCPU present on the host, simulating a cluster.\n                                <br />MULTI.: allocates all vCPUs to Master virtual node.\n                                <br />SHARED: makes all vCPUs available to nodes, regardless of quantity.\n                                    <hr />\n                                    Go to <a href=\"#\" (click)=\"setRoute('settings'); false;\">Settings</a> to change node mode.\n                            </span>\n                            </form>\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-6 user-container\">\n                    <div class=\"card m-12\">\n                        <mat-list>\n                            <mat-list-item *ngFor=\"let n of nodes\">\n                                <mat-icon mat-list-icon>computer</mat-icon>\n                                <div mat-line><b>Host: {{n.Hostname}}</b>\n                                    <i class=\"nodes\">(Mem: {{n.Memory}}MB | vCPU: {{n.NumberOfCPUs}})</i>\n                                </div>\n                                <mat-list class=\"listNodes\">\n                                    <div *ngFor=\"let c of n.Container\">\n                                        <mat-list-item mat-line class=\"nodes\">---</mat-list-item>\n                                        <mat-list-item mat-line class=\"nodes\"><b>{{c.Name==='master'? 'Physical\n                                            Node':'Virtual Node'}}: {{c.Name}}</b></mat-list-item>\n                                        <mat-list-item mat-line class=\"nodes\">vCPU: {{hostInfo.Cluster.NodeMode==='SHARED'?\n                                            'shared':hostInfo.Cluster.NodeMode==='MULTI'?'all':'1'}} (<span [className]=\"c.State==='running' ? 'ok':'error'\">{{c.State}}</span>)\n                                        </mat-list-item>\n                                    </div>\n                                </mat-list>\n                                <mat-divider></mat-divider>\n                            </mat-list-item>\n                        </mat-list>\n\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/menu-management.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/menu-management.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"divTable\">\n    <div class=\"divTableBody\">\n        <div class=\"divTableRow\" *ngIf=\"userSession.Module==='Admin'\">\n            <div class=\"divTableCell\"><mat-icon>class</mat-icon></div>\n            <div class=\"divTableCell\"><a href=\"#\" (click)=\"setRoute('view-classroom-manager'); false;\" style=\"margin-left: 20px;\">Classrooms</a></div>\n        </div>\n\n        <div class=\"divTableRow\" *ngIf=\"userSession.Module==='Admin'\">\n            <div class=\"divTableCell\"><mat-icon>computer</mat-icon></div>\n            <div class=\"divTableCell\"><a href=\"#\" (click)=\"setRoute('cluster-available'); false;\" style=\"margin-left: 20px;\">Cluster on Network</a></div>\n        </div>\n\n        <div class=\"divTableRow\" *ngIf=\"userSession.Module==='Admin'\">\n            <div class=\"divTableCell\"><mat-icon>developer_board</mat-icon></div>\n            <div class=\"divTableCell\"><a href=\"#\"\n                                         (click)=\"setRoute('current-nodes'); false;\" style=\"margin-left: 20px;\">Nodes</a></div>\n        </div>\n\n        <div class=\"divTableRow\">\n            <div class=\"divTableCell\"><mat-icon>filter</mat-icon></div>\n            <div class=\"divTableCell\"><a href=\"#\" (click)=\"setRoute('monitoring'); false;\" style=\"margin-left: 20px;\">Monitoring</a></div>\n        </div>\n\n        <div class=\"divTableRow\" *ngIf=\"userSession.Module==='Admin'\">\n            <div class=\"divTableCell\"><mat-icon>settings</mat-icon></div>\n            <div class=\"divTableCell\"><a href=\"#\"\n                                         (click)=\"setRoute('settings'); false;\" style=\"margin-left: 20px;\">Settings</a>\n            </div>\n        </div>\n\n        <div class=\"divTableRow\" *ngIf=\"userSession.Module==='Admin'\">\n            <div class=\"divTableCell\"><mat-icon>person</mat-icon></div>\n            <div class=\"divTableCell\"><a href=\"#\" (click)=\"setRoute('view-user'); false;\" style=\"margin-left: 20px;\">System Users</a></div>\n        </div>\n\n        <div class=\"divTableRow\" *ngIf=\"userSession.Module==='Admin'\">\n            <div class=\"divTableCell\"><mat-icon>power_settings_new</mat-icon></div>\n            <div class=\"divTableCell\"><a href=\"#\" (click)=\"reboot(); false;\" style=\"margin-left: 20px;\">Reboot</a></div>\n        </div>\n\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/monitoring/monitoring.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/monitoring/monitoring.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n    <h6 class=\"card-header\">\n        <span>Monitoring</span>\n        <br/>\n        <span class=\"help\">In this section, the system shows users online and their running tasks.</span>\n    </h6>\n    <div class=\"col-md-12 user-container\">\n\n        <div class=\"form-group\" style=\"margin-top: 15px;\">\n\n            <div class=\"form-row\" *ngIf=\"hostInfo.OpMode!=='NODE'\">\n\n                <div class=\"col-md-6 user-container\">\n                    <div class=\"card m-12\">\n                        <div class=\"card-header\">\n                            Users online\n                            <mat-divider></mat-divider>\n\n                            <mat-list>\n                                <mat-list-item *ngFor=\"let h of hosts\">\n                                    <mat-icon mat-list-icon>account_circle</mat-icon>\n                                    <div mat-line [className]=\"h.Owner===hostInfo['Owner'] ? 'master':''\">{{h.Owner}}\n                                    </div>\n                                    <div mat-line> Last Activity: {{h.LastActivity | slice:0:16}}</div>\n                                </mat-list-item>\n                            </mat-list>\n\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"col-md-6 user-container\">\n                    <div class=\"card m-12\">\n                        <div class=\"card-header\">\n                            Tasks\n                            <mat-divider></mat-divider>\n\n                            <mat-table [dataSource]=\"dataSource\" class=\"table table-striped\" matSort>\n\n                                <!-- User Column -->\n                                <ng-container matColumnDef=\"User\">\n                                    <mat-header-cell *matHeaderCellDef mat-sort-header> User</mat-header-cell>\n                                    <mat-cell *matCellDef=\"let row\"> {{row.User}}</mat-cell>\n                                </ng-container>\n\n                                <!-- Position Column -->\n                                <ng-container matColumnDef=\"Position\">\n                                    <mat-header-cell *matHeaderCellDef mat-sort-header> Position</mat-header-cell>\n                                    <mat-cell *matCellDef=\"let row\"> {{row.Position}}</mat-cell>\n                                </ng-container>\n\n                                <!-- Queue Column -->\n                                <ng-container matColumnDef=\"Queue\">\n                                    <mat-header-cell *matHeaderCellDef mat-sort-header> Queue</mat-header-cell>\n                                    <mat-cell *matCellDef=\"let row\"> {{row.Concurrency}}</mat-cell>\n                                </ng-container>\n\n                                <!-- Command Column -->\n                                <ng-container matColumnDef=\"Command\">\n                                    <mat-header-cell *matHeaderCellDef mat-sort-header> Command</mat-header-cell>\n                                    <mat-cell *matCellDef=\"let row\"> {{row.Sequence}}</mat-cell>\n                                </ng-container>\n\n                                <!-- Time Column -->\n                                <ng-container matColumnDef=\"Time\">\n                                    <mat-header-cell *matHeaderCellDef mat-sort-header> Time</mat-header-cell>\n                                    <mat-cell *matCellDef=\"let row\"> {{row.Count}}</mat-cell>\n                                </ng-container>\n\n                                <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n                                <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n                                </mat-row>\n                            </mat-table>\n\n                        </div>\n                    </div>\n                </div>\n\n\n                <div class=\"form-row\" *ngIf=\"hostInfo.OpMode==='NODE'\">\n\n                    <div class=\"col-md-6 user-container\">\n                        <div class=\"card m-12\">\n                            <div class=\"card-header text-center\">\n                                Monitoring does not work in node mode, only local and cluster modes.\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/settings/settings.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/settings/settings.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n    <h6 class=\"card-header\">\n        <span>Settings</span>\n        <br/>\n        <span class=\"help\">If the field is left empty, the system will attempt to automatically detect the settings.</span>\n    </h6>\n    <div class=\"col-md-12 user-container\">\n\n        <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n\n            <ul ngbNav #nav=\"ngbNav\" class=\"nav-tabs\" [destroyOnHide]=\"false\">\n                <li [ngbNavItem]=\"1\">\n                    <a ngbNavLink>Network</a>\n                    <ng-template ngbNavContent>\n\n                        <div class=\"form-group\">\n                            <label for=\"PublicInterface\">Public Host Interface:</label>\n                            <span class=\"description\" for=\"PublicInterface\">Defines which network interface backend\n          and frontend will use to listen to network services.</span>\n                            <input type=\"text\" formControlName=\"PublicInterface\"\n                                   placeholder=\"Default: empty | Example: eth0\"\n                                   name=\"PublicInterface\" class=\"form-control\" id=\"PublicInterface\">\n                            <div *ngIf=\"submitted && fe.PublicInterface.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.PublicInterface.errors.minlength\">Public Interface field must have a minimum of 4 characters</div>\n                                <div *ngIf=\"fe.PublicInterface.errors.maxlength\">Public Interface must be a maximum of 15 characters</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"BackendPort\">Backend Service Port:</label>\n                            <span class=\"description\">Sets the port value to list the services between the backends in the network.</span>\n                            <input type=\"number\" formControlName=\"BackendPort\" placeholder=\"Default: 10001\"\n                                   name=\"BackendPort\" class=\"form-control\" id=\"BackendPort\">\n                            <div *ngIf=\"submitted && fe.BackendPort.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.BackendPort.errors.min\">Backend Port field must have a minimum value of 1500</div>\n                                <div *ngIf=\"fe.BackendPort.errors.max\">Backend Port must be a maximum of value 65534</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"FrontendPort\">Frontend Service Port:</label>\n                            <span class=\"description\">Sets the port value to list the services for the frontends.</span>\n                            <input type=\"number\" formControlName=\"FrontendPort\" placeholder=\"Default: 8000\"\n                                   name=\"FrontendPort\" class=\"form-control\" id=\"FrontendPort\">\n                            <div *ngIf=\"submitted && fe.FrontendPort.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.FrontendPort.errors.min\">Frontend Port field must have a minimum value of 1500</div>\n                                <div *ngIf=\"fe.FrontendPort.errors.max\">Frontend Port must be a maximum of value 65534</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"WebSocketPort\">Websocket Service Port:</label>\n                            <span class=\"description\">Sets the frontend websocket communication port.</span>\n                            <input type=\"number\" formControlName=\"WebSocketPort\" placeholder=\"Default: 8001\"\n                                   name=\"WebSocketPort\" class=\"form-control\" id=\"WebSocketPort\">\n                            <div *ngIf=\"submitted && fe.WebSocketPort.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.WebSocketPort.errors.min\">WebSocket Port field must have a minimum value of 1500</div>\n                                <div *ngIf=\"fe.WebSocketPort.errors.max\">WebSocket Port must be a maximum of value 65534</div>\n                            </div>\n                        </div>\n\n\n                    </ng-template>\n                </li>\n\n                <li [ngbNavItem]=\"2\">\n                    <a ngbNavLink>Cluster</a>\n                    <ng-template ngbNavContent>\n\n                        <div class=\"form-group\">\n                            <label for=\"ClusterName\">Cluster:</label>\n                            <span class=\"description\">The default cluster name.</span>\n                            <input type=\"text\" formControlName=\"ClusterName\" placeholder=\"Default: CLUSTER01\"\n                                   name=\"ClusterName\" class=\"form-control\" id=\"ClusterName\">\n                            <div *ngIf=\"submitted && fe.ClusterName.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.ClusterName.errors.alphaNumeric\">Spaces and special characters are not allowed. Alphanumeric characters only.</div>\n                                <div *ngIf=\"fe.ClusterName.errors.minlength\">Cluster Name field must have a minimum of 4 characters</div>\n                                <div *ngIf=\"fe.ClusterName.errors.maxlength\">Cluster Name must be a maximum of 20 characters</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"ClusterPassword\">Cluster Password:</label>\n                            <span class=\"description\">Defines the cluster password for connection between nodes.\n          If the password is left empty, the nodes will connect automatically if their\n          operating modes are set to NODE.</span>\n                            <input type=\"text\" formControlName=\"ClusterPassword\" placeholder=\"Default: empty\"\n                                   name=\"ClusterPassword\" class=\"form-control\" id=\"ClusterPassword\">\n                            <div *ngIf=\"submitted && fe.ClusterPassword.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.ClusterPassword.errors.minlength\">Cluster Password field must have a minimum of 4 characters</div>\n                                <div *ngIf=\"fe.ClusterPassword.errors.maxlength\">Cluster Password must be a maximum of 20 characters</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"NodeMode\">Node Mode:</label>\n                            <span class=\"description\">\n                                SINGLE: creates a node for each vCPU present on the host, simulating a cluster.\n                                <br />MULTI.: allocates all vCPUs to Master virtual node.\n                                <br />SHARED: makes all vCPUs available to nodes, regardless of quantity.\n                            </span>\n                            <select formControlName=\"NodeMode\" name=\"NodeMode\" class=\"form-control\"\n                                    id=\"NodeMode\">\n                                <option value=\"\">Default: SHARED</option>\n                                <option value=\"SINGLE\">SINGLE</option>\n                                <option value=\"MULTI\">MULTI</option>\n                                <option value=\"SHARED\">SHARED</option>\n                            </select>\n                            <div *ngIf=\"submitted && fe.NodeMode.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.NodeMode.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"OperationMode\">Operation Mode:</label>\n                            <span class=\"description\">\n                                LOCAL: prepares the system to work on one host or virtual machine.\n                                <br />MASTER: defines the host or virtual machine as the master node of the cluster, listing the service available to other hosts on the network.\n                                <br />NODE: sets the host or virtual machine as node mode, enabling the search for a master host to connect.\n                            </span>\n                            <select formControlName=\"OperationMode\" name=\"OperationMode\" class=\"form-control\"\n                                    id=\"OperationMode\">\n                                <option value=\"\">Default: LOCAL</option>\n                                <option value=\"LOCAL\">LOCAL</option>\n                                <option value=\"NODE\">NODE</option>\n                                <option value=\"MASTER\">MASTER</option>\n                            </select>\n                            <div *ngIf=\"submitted && fe.OperationMode.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.OperationMode.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"StartContainers\">Number of Nodes:</label>\n                            <span class=\"description\">The number of containers (virtual nodes) to be started on backend init.</span>\n                            <input type=\"number\" formControlName=\"StartContainers\" placeholder=\"Default: 0\"\n                                   name=\"StartContainers\" class=\"form-control\" id=\"StartContainers\">\n                            <div *ngIf=\"submitted && fe.StartContainers.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.StartContainers.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"MaxContainers\">Maximum Number of Nodes:</label>\n                            <span class=\"description\">The maximum number of containers running as nodes.</span>\n                            <input type=\"number\" formControlName=\"MaxContainers\" placeholder=\"Default: 30\"\n                                   name=\"MaxContainers\" class=\"form-control\" id=\"MaxContainers\">\n                            <div *ngIf=\"submitted && fe.MaxContainers.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.MaxContainers.errors.min\">Max Containers field must have a minimum value of 1500</div>\n                                <div *ngIf=\"fe.MaxContainers.errors.max\">Max Containers must be a maximum of value 65534</div>\n                            </div>\n                        </div>\n\n                    </ng-template>\n                </li>\n\n                <li [ngbNavItem]=\"3\">\n                    <a ngbNavLink>Admin</a>\n                    <ng-template ngbNavContent>\n\n                        <div class=\"form-group\">\n                            <label for=\"HostUser\">Host User:</label>\n                            <span class=\"description\">Sets the default user for the host and for accessing\n          the frontend Administrator roles.</span>\n                            <input type=\"text\" formControlName=\"HostUser\" placeholder=\"Default: user@user\"\n                                   name=\"HostUser\" class=\"form-control\" id=\"HostUser\">\n                            <div *ngIf=\"submitted && fe.HostUser.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.HostUser.errors.minlength\">Host User field must have a minimum of 4 characters</div>\n                                <div *ngIf=\"fe.HostUser.errors.maxlength\">Host User must be a maximum of 20 characters</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"HostPassword\">Host Password:</label>\n                            <span class=\"description\">Sets the default user password.</span>\n                            <input type=\"text\" formControlName=\"HostPassword\" placeholder=\"Default: user\"\n                                   name=\"HostPassword\" class=\"form-control\" id=\"HostPassword\">\n                            <div *ngIf=\"submitted && fe.HostPassword.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.HostPassword.errors.minlength\">Host Password field must have a minimum of 4 characters</div>\n                                <div *ngIf=\"fe.HostPassword.errors.maxlength\">Host Password must be a maximum of 20 characters</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"SelfRegistration\">Self Registration:</label>\n                            <span class=\"description\">Allows users to create their own logins on the server.</span>\n                            <select formControlName=\"SelfRegistration\" placeholder=\"Default: On\"\n                                    name=\"SelfRegistration\" class=\"form-control\" id=\"SelfRegistration\">\n                                <option value=\"\">Default: On</option>\n                                <option value=\"On\">On</option>\n                                <option value=\"Off\">Off</option>\n                            </select>\n                            <div *ngIf=\"submitted && fe.SelfRegistration.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.SelfRegistration.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n\n                    </ng-template>\n                </li>\n\n                <li [ngbNavItem]=\"4\">\n                    <a ngbNavLink>Coding</a>\n                    <ng-template ngbNavContent>\n\n                        <div class=\"form-group\">\n                            <label for=\"CodeExecTimeout\">Code Execution Timeout:</label>\n                            <span class=\"description\">Defines a timeout to code execution (in seconds).</span>\n                            <input type=\"number\" formControlName=\"CodeExecTimeout\" placeholder=\"Default: 20\"\n                                   name=\"CodeExecTimeout\" class=\"form-control\" id=\"CodeExecTimeout\">\n                            <div *ngIf=\"submitted && fe.CodeExecTimeout.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.CodeExecTimeout.errors.min\">Code Execution Timeout field must have a minimum value of 10</div>\n                                <div *ngIf=\"fe.CodeExecTimeout.errors.max\">Code Execution Timeout must be a maximum of value 1000</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"CodeMaxFileSize\">File Size Upload:</label>\n                            <span class=\"description\">Sets the maximum file size to upload (in bytes).</span>\n                            <input type=\"number\" formControlName=\"CodeMaxFileSize\" placeholder=\"Default: 5242880\"\n                                   name=\"CodeMaxFileSize\" class=\"form-control\" id=\"CodeMaxFileSize\"\n                                   (click)=\"getInputMaxFileSize($event)\"\n                                   (keyup)=\"getInputMaxFileSize($event)\">{{CodeMaxFileSize}}\n                            <div *ngIf=\"submitted && fe.CodeMaxFileSize.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.CodeMaxFileSize.errors.min\">File Size Upload field must have a minimum value of 1</div>\n                                <div *ngIf=\"fe.CodeMaxFileSize.errors.max\">File Size Upload must be a maximum of value 10000000000</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"Queue\">Queuing System:</label>\n                            <span class=\"description\">If enabled, a queue system will prevent two codes from running at the same time.\n          If disabled, it will become optional for each run.</span>\n                            <select formControlName=\"Queue\" placeholder=\"Default: Off\" name=\"Queue\" class=\"form-control\"\n                                    id=\"Queue\">\n                                <option value=\"\">Default: Off</option>\n                                <option value=\"On\">On</option>\n                                <option value=\"Off\">Off</option>\n                            </select>\n                            <div *ngIf=\"submitted && fe.Queue.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.Queue.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"MaxConcurrency\">Maximum Queue Concurrency:</label>\n                            <span class=\"description\">Defines the maximum number of users in the queue, competing for resources.</span>\n                            <input type=\"number\" formControlName=\"MaxConcurrency\" placeholder=\"Default: 30\"\n                                   name=\"MaxConcurrency\" class=\"form-control\" id=\"MaxConcurrency\">\n                            <div *ngIf=\"submitted && fe.MaxConcurrency.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.MaxConcurrency.errors.min\">Max Concurrency field must have a minimum value of 1</div>\n                                <div *ngIf=\"fe.MaxConcurrency.errors.max\">Max Concurrency must be a maximum of value 10000000000</div>\n                            </div>\n                        </div>\n\n                    </ng-template>\n                </li>\n\n                <li [ngbNavItem]=\"5\">\n                    <a ngbNavLink>Debug</a>\n                    <ng-template ngbNavContent>\n\n                        <div class=\"form-group\">\n                            <label for=\"Debug\">Debug:</label>\n                            <span class=\"description\">Shows debug messages on the backend.</span>\n                            <select formControlName=\"Debug\" placeholder=\"Default: Off\" name=\"Debug\" class=\"form-control\"\n                                    id=\"Debug\">\n                                <option value=\"\">Default: Off</option>\n                                <option value=\"On\">On</option>\n                                <option value=\"Off\">Off</option>\n                            </select>\n                            <div *ngIf=\"submitted && fe.Debug.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.Debug.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"Error\">Error:</label>\n                            <span class=\"description\">Shows error messages on the backend.</span>\n                            <select formControlName=\"Error\" placeholder=\"Default: Off\" name=\"Error\" class=\"form-control\"\n                                    id=\"Error\">\n                                <option value=\"\">Default: Off</option>\n                                <option value=\"On\">On</option>\n                                <option value=\"Off\">Off</option>\n                            </select>\n                            <div *ngIf=\"submitted && fe.Error.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.Error.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n\n                    </ng-template>\n                </li>\n\n                <li [ngbNavItem]=\"6\">\n                    <a ngbNavLink>SMTP Account</a>\n                    <ng-template ngbNavContent>\n\n                        <div class=\"form-group\">\n                            <label for=\"SmtpServer\">Smtp Server:</label>\n                            <span class=\"description\">Server address responsible for sending the account\n          registration and password recovery emails.</span>\n                            <input type=\"text\" formControlName=\"SmtpServer\" placeholder=\"Default: empty\"\n                                   name=\"SmtpServer\" class=\"form-control\" id=\"SmtpServer\">\n                            <div *ngIf=\"submitted && fe.SmtpServer.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.SmtpServer.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"SmtpPort\">Smtp Port:</label>\n                            <span class=\"description\">Mail server port.</span>\n                            <input type=\"number\" formControlName=\"SmtpPort\" placeholder=\"Default: empty\"\n                                   name=\"SmtpPort\" class=\"form-control\" id=\"SmtpPort\">\n                            <div *ngIf=\"submitted && fe.SmtpPort.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.SmtpPort.errors.min\">Smtp Port field must have a minimum value of 1</div>\n                                <div *ngIf=\"fe.SmtpPort.errors.max\">Smtp Port must be a maximum of value 65534</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"SmtpUser\">Smtp User:</label>\n                            <span class=\"description\">Registered user for sending emails.</span>\n                            <input type=\"text\" formControlName=\"SmtpUser\" placeholder=\"Default: empty\"\n                                   name=\"SmtpUser\" class=\"form-control\" id=\"SmtpUser\">\n                            <div *ngIf=\"submitted && fe.SmtpUser.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.SmtpUser.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"SmtpPassword\">Smtp User Password:</label>\n                            <span class=\"description\">User Password registered for sending e-mails.</span>\n                            <input type=\"text\" formControlName=\"SmtpPassword\" placeholder=\"Default: empty\"\n                                   name=\"SmtpPassword\" class=\"form-control\" id=\"SmtpPassword\">\n                            <div *ngIf=\"submitted && fe.SmtpPassword.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.SmtpPassword.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n\n                    </ng-template>\n                </li>\n\n                <li [ngbNavItem]=\"\">\n                    <a ngbNavLink>Database Account</a>\n                    <ng-template ngbNavContent>\n\n                        <div class=\"form-group\">\n                            <label for=\"DbHost\">DB Server:</label>\n                            <span class=\"description\">DB Server address.</span>\n                            <input type=\"text\" formControlName=\"DbHost\" placeholder=\"Default: localhost\"\n                                   name=\"DbHost\" class=\"form-control\" id=\"DbHost\">\n                            <div *ngIf=\"submitted && fe.DbHost.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.DbHost.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"DbPort\">DB Port:</label>\n                            <span class=\"description\">DB server port.</span>\n                            <input type=\"number\" formControlName=\"DbPort\" placeholder=\"Default: 3306\"\n                                   name=\"SmtpPort\" class=\"form-control\" id=\"DbPort\">\n                            <div *ngIf=\"submitted && fe.DbPort.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.DbPort.errors.min\">DB Port field must have a minimum value of 1</div>\n                                <div *ngIf=\"fe.DbPort.errors.max\">DB Port must be a maximum of value 65534</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"DbUser\">DB User:</label>\n                            <span class=\"description\">DB user to connection.</span>\n                            <input type=\"text\" formControlName=\"DbUser\" placeholder=\"Default: root\"\n                                   name=\"DbUser\" class=\"form-control\" id=\"DbUser\">\n                            <div *ngIf=\"submitted && fe.DbUser.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.DbUser.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"DbPassword\">DB Password:</label>\n                            <span class=\"description\">DB password to connection.</span>\n                            <input type=\"text\" formControlName=\"DbPassword\" placeholder=\"Default: 1gu@nACS\"\n                                   name=\"DbPassword\" class=\"form-control\" id=\"DbPassword\">\n                            <div *ngIf=\"submitted && fe.DbPassword.errors\" class=\"error response\">\n                                <div *ngIf=\"fe.DbPassword.errors.required\">Field is required</div>\n                            </div>\n                        </div>\n\n                    </ng-template>\n                </li>\n\n            </ul>\n            <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\n\n            <div class=\"form-group\">\n                <button class=\"btn-sm btn-success\">Update</button>\n            </div>\n        </form>\n\n        <div class=\"response text-center\" *ngIf=\"response.Name\">\n            <div *ngIf=\"response.Name==='ok' || response.Name==='info'\" class=\"{{response.Name}}\">\n                {{response.Status}}\n                <app-mat-progress-bar></app-mat-progress-bar>\n            </div>\n            <div *ngIf=\"response.Name==='error'\" class=\"{{response.Name}}\">{{response.Status}}</div>\n        </div>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/try-code/try-code.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/try-code/try-code.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <span>Try a Code</span>\n  </h6>\n\n  <div class=\"card-body hostStatus\">\n    <app-code></app-code>\n  </div>\n\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-edit/users-edit.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-edit/users-edit.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <h6 class=\"card-header\">\n    <div style=\"float: left\">\n      <span>{{fe.Id.value ? \"Edit\":\"Add\"}} System User</span>\n    </div>\n    <div style=\"float: right\" *ngIf=\"userSession.Module==='Admin'\">\n      <button class=\"btn-sm btn-success\" (click)=\"setRoute('view-user')\" style=\"margin-left: 20px;\">Users</button>\n    </div>\n  </h6>\n\n  <div class=\"col-md-6 user-container\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-group\">\n      </div>\n\n      <div class=\"error\" *ngIf=\"ForceChangePass==='1'\">Attention, before using the system, you must change the password.</div>\n      <hr />\n      <div class=\"form-group\">\n        <input *ngIf=\"ForceChangePass!=='1'\" type=\"text\" formControlName=\"Name\" placeholder=\"Name\" name=\"Name\" class=\"form-control\" id=\"Name\">\n        <div *ngIf=\"submitted && fe.Name.errors\" class=\"error response\">\n          <div *ngIf=\"fe.Name.errors.required\">Field is required</div>\n          <div *ngIf=\"fe.Name.errors.minlength\">Name must be at least 4 characters</div>\n          <div *ngIf=\"fe.Name.errors.maxlength\">Name must be a maximum of 60 characters</div>\n        </div>\n      </div>\n\n      <div class=\"error\" *ngIf=\"fe.Id.value===1\">Attention, the Admin password and email must be changed in the Settings module.\n        The change here is not definitive.</div>\n\n      <div class=\"form-group\">\n        <input type=\"password\" formControlName=\"Password\" placeholder=\"Password\" name=\"Password\" class=\"form-control\" id=\"Password\">\n        <div *ngIf=\"submitted && fe.Password.errors\" class=\"error response\">\n          <div *ngIf=\"fe.Password.errors.required\">Field is required</div>\n          <div *ngIf=\"fe.Password.errors.minlength\">Password must be at least 4 characters</div>\n          <div *ngIf=\"fe.Password.errors.maxlength\">Password must be a maximum of 50 characters</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <input type=\"password\" formControlName=\"CPassword\" placeholder=\"Confirm Password\" name=\"CPassword\" class=\"form-control\" id=\"CPassword\">\n        <div *ngIf=\"submitted && fe.CPassword.errors\" class=\"error response\">\n          <div *ngIf=\"fe.CPassword.errors.required\">Field is required</div>\n          <div *ngIf=\"fe.CPassword.errors.minlength\">Password must be at least 4 characters</div>\n          <div *ngIf=\"fe.CPassword.errors.maxlength\">Password must be a maximum of 50 characters</div>\n          <div *ngIf=\"fe.CPassword.errors.mismatch\">The passwords are different</div>\n        </div>\n      </div>\n\n      <div *ngIf=\"ForceChangePass!=='1'\" class=\"form-group\">\n        <input type=\"text\" formControlName=\"Email\" placeholder=\"Email\" name=\"Email\" class=\"form-control\" id=\"Email\">\n        <div *ngIf=\"submitted && fe.Email.errors\" class=\"error response\">\n          <div *ngIf=\"fe.Email.errors.required\">Field is required</div>\n          <div *ngIf=\"fe.Email.errors.maxlength\">Email must be a maximum of 100 characters</div>\n          <div *ngIf=\"fe.Email.errors.email\">Please enter a valid email</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"userSession.Module==='Admin'\">\n        <label for=\"Module\">Module:</label>\n        <select formControlName=\"Module\" placeholder=\"Module\" name=\"Module\" class=\"form-control\" id=\"Module\">\n          <option value=\"Admin\">Admin</option>\n          <option value=\"User\">User</option>\n        </select>\n        <div *ngIf=\"submitted && fe.Module.errors\" class=\"error response\">\n          <div *ngIf=\"fe.Module.errors.required\">Field is required</div>\n        </div>\n      </div>\n\n      <div class=\"form-group\" *ngIf=\"userSession.Module==='Admin'\">\n        <label for=\"ForceChangePass\">Force password change at next login?</label>\n        <select formControlName=\"ForceChangePass\" placeholder=\"ForceChangePass\"\n                name=\"ForceChangePass\" class=\"form-control\" id=\"ForceChangePass\">\n          <option value=\"1\">Yes</option>\n          <option value=\"0\">No</option>\n        </select>\n      </div>\n\n      <div class=\"form-group\">\n        <button class=\"btn-sm btn-success\">{{fe.Id.value ? \"Update\":\"Insert\"}}</button>\n      </div>\n    </form>\n\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n    <h6 class=\"card-header\">\n        <div style=\"float: left\">\n            <span>System Users</span>\n        </div>\n        <div style=\"float: right\">\n            <button class=\"btn-sm btn-primary\" style=\"width:100px\" (click)=\"addUser()\">Add</button>\n        </div>\n    </h6>\n\n    <div *ngIf=\"load===0\">\n        <app-mat-progress-bar></app-mat-progress-bar>\n    </div>\n\n    <div *ngIf=\"(users?.length <= 0 && load===1)\">\n        No records found.\n    </div>\n\n    <div class=\"filter\">\n        <mat-form-field>\n            <input matInput (keyup)=\"applyFilter($any($event.target).value)\" placeholder=\"Filter: \">\n        </mat-form-field>\n    </div>\n\n    <div class=\"mat-elevation-z8 \">\n\n        <mat-table [dataSource]=\"dataSource\" matSort>\n\n            <!-- ID Column -->\n            <ng-container matColumnDef=\"Id\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.Id}} </mat-cell>\n            </ng-container>\n\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"Name\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.Name}} </mat-cell>\n            </ng-container>\n\n            <!-- Email Column -->\n            <ng-container matColumnDef=\"Email\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Email </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.Email}} </mat-cell>\n            </ng-container>\n\n            <!-- Module Column -->\n            <ng-container matColumnDef=\"Module\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Module </mat-header-cell>\n                <mat-cell *matCellDef=\"let row\"> {{row.Module}} </mat-cell>\n            </ng-container>\n\n            <!-- Action Column -->\n            <ng-container matColumnDef=\"Action\">\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Action </mat-header-cell>\n                <mat-cell *matCellDef=\"let element\" class=\"action-link\">\n                    <button mat-icon-button (click)=\"deleteUser(element)\">\n                        <mat-icon>delete</mat-icon>\n                    </button>\n                    <button mat-icon-button (click)=\"editUser(element)\" style=\"margin-left: 20px;\">\n                        <mat-icon>edit</mat-icon>\n                    </button>\n                </mat-cell>\n            </ng-container>\n\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\">\n            </mat-row>\n        </mat-table>\n\n        <mat-paginator [pageSizeOptions]=\"[25, 50, 100]\"></mat-paginator>\n    </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"card m-3\">\n  <div class=\"welcome\">\n\n    <div class=\"form-row\">\n      <div class=\"form-group col\">\n        <span>\n          Hello!\n          <br />\n          The Iguana Cluster System allows the execution of parallelized codes in OpenMP, MPI, and CUDA.\n          <br />\n          <br />\n          <span *ngIf=\"hostInfo.SelfRegistration==='On'\">\n            <a href=\"#\" (click)=\"setRoute(); false;\">Register a user</a> and execute your codes in parallel.\n          </span>\n          <br />\n          <br />\n          Simple, quick, and easy.\n          <hr />\n          Author: Naylor Garcia Bachiega\n          <br />\n          Developed for doctoral work at the University of São Paulo - ICMC/USP\n          <br /><br />\n          Advisor: Paulo Sérgio Lopes de Souza\n        </span>\n      </div>\n      <div *ngIf=\"!userSession.Owner\" class=\"flex-column\">\n\n        <div class=\"card-body\">\n          <app-host-login></app-host-login>\n        </div>\n\n      </div>\n\n    </div>\n  </div>\n</div>\n");

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

/***/ "./src/app/_control/code.control.ts":
/*!******************************************!*\
  !*** ./src/app/_control/code.control.ts ***!
  \******************************************/
/*! exports provided: CodeControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeControl", function() { return CodeControl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var CodeControl = /** @class */ (function () {
    function CodeControl() {
    }
    CodeControl.prototype.showProcess = function (response) {
        var lines = [];
        var process = [];
        lines = response.split('\n');
        lines.forEach(function (v, k) {
            //PROCESSOR
            var reg = '{P}(.+){P}';
            var matP = v.match(reg);
            if (matP && matP[1] && !process[matP[1]]) {
                process[matP[1]] = [];
            }
            //RANK && MESSAGE
            reg = '{R}(.+){R}';
            var matR = v.match(reg);
            reg = '{M}(.+){M}';
            var matM = v.match(reg);
            var val = "";
            if (matR && matR[1])
                val = "Rank " + matR[1];
            if (matM && matM[1])
                val += ": " + matM[1];
            if (val != "")
                process[matP[1]].push(val);
        });
        return process;
    };
    CodeControl.prototype.getColor = function () {
        var colors = [];
        colors = ["#00ffff", "#f0ffff", "#f5f5dc",
            "#00ffff", "#ff00ff", "#ffd700", "#ffff00",
            "#f0e68c", "#add8e6", "#e0ffff", "#90ee90",
            "#d3d3d3", "#ffb6c1", "#ffffe0", "#00ff00",
            "#ffa500", "#ffc0cb", "#c0c0c0", "#ffffff"];
        return colors[Math.floor(Math.random() * 19)];
    };
    CodeControl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CodeControl);
    return CodeControl;
}());



/***/ }),

/***/ "./src/app/_control/node.control.ts":
/*!******************************************!*\
  !*** ./src/app/_control/node.control.ts ***!
  \******************************************/
/*! exports provided: NodeControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NodeControl", function() { return NodeControl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NodeControl = /** @class */ (function () {
    function NodeControl() {
    }
    NodeControl.prototype.nodes = function (data, index) {
        var nodesTemp = [];
        var num = 0;
        if (data) {
            data.forEach(function (v, k) {
                num += parseInt(v['NumberOfCPUs']);
                if (v['Container'] != null) {
                    var c = Object.keys(v['Container']).length;
                    if (c > 0) {
                        v['Container'].forEach(function (v1, k1) {
                            if (v1['IP'] != "")
                                nodesTemp.push(v1['IP']);
                        });
                    }
                }
            });
            if (index == 'cpu')
                return num;
            if (index == 'nodes')
                return nodesTemp;
        }
        return null;
    };
    NodeControl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NodeControl);
    return NodeControl;
}());



/***/ }),

/***/ "./src/app/_control/util.control.ts":
/*!******************************************!*\
  !*** ./src/app/_control/util.control.ts ***!
  \******************************************/
/*! exports provided: UtilControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilControl", function() { return UtilControl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/dialog.es5.js");
/* harmony import */ var _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/dialog/dialog.component */ "./src/app/_services/dialog/dialog.component.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");






var UtilControl = /** @class */ (function () {
    function UtilControl(dialog, _snackBar, router) {
        this.dialog = dialog;
        this._snackBar = _snackBar;
        this.router = router;
    }
    UtilControl.prototype.setResponse = function (text, action, panel, route) {
        var _this = this;
        if (!panel)
            panel = action;
        var snackBarRef = this._snackBar.open(text, action, {
            duration: 5000, panelClass: [panel]
        });
        if (route) {
            snackBarRef.onAction().subscribe(function () {
                return _this.router.navigate([route]);
            });
        }
        return snackBarRef;
    };
    UtilControl.prototype.openModal = function (title, text, yes, no, input) {
        var dialogConfig = new _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogConfig"]();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.data = {
            id: 1,
            title: title,
            text: text,
            yes: yes,
            no: no,
            input: input,
        };
        var modalDialog = this.dialog.open(_services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], dialogConfig);
        return modalDialog;
    };
    UtilControl.prototype.formatBytes = function (bytes, decimal) {
        if (decimal === void 0) { decimal = 2; }
        if (bytes < 10)
            return bytes + " Bytes";
        if (0 === bytes)
            return "0 Bytes";
        var c = 0 > decimal ? 0 : decimal, d = Math.floor(Math.log(bytes) / Math.log(1024));
        return parseFloat((bytes / Math.pow(1024, d)).toFixed(c)) + " " + ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"][d];
    };
    UtilControl.prototype.delay = function (ms) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(true);
            }, ms);
        });
    };
    UtilControl.prototype.countdown = function (distance) {
        distance = distance * 1000;
        // Time calculations for days, hours, minutes and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);
        // Display the result in the element with id="demo"
        return days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
    };
    UtilControl.prototype.numberFormat = function (number) {
        if (number.toString().length < 2)
            number = "0" + number;
        return number;
    };
    UtilControl.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    UtilControl = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], UtilControl);
    return UtilControl;
}());



/***/ }),

/***/ "./src/app/_helpers/HttpErrorInterceptor.ts":
/*!**************************************************!*\
  !*** ./src/app/_helpers/HttpErrorInterceptor.ts ***!
  \**************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");






var HttpErrorInterceptor = /** @class */ (function () {
    function HttpErrorInterceptor(host, router) {
        this.host = host;
        this.router = router;
    }
    HttpErrorInterceptor.prototype.intercept = function (request, next) {
        //console.log(request);
        var _this = this;
        if (window.localStorage.getItem("ForceChangePass") == "1")
            this.router.navigate(['edit-user']);
        var session = JSON.stringify(this.host.getSessionID());
        var auth = [];
        auth[0] = this.host.encrypt(session);
        auth[1] = localStorage.getItem('OWNER');
        request = request.clone({
            setHeaders: {
                Authorization: auth,
            }
        });
        return next.handle(request).pipe(
        // We use the map operator to change the data from the response
        Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (resp) {
            //Exceptions
            if (request.url.indexOf('assets') != -1 ||
                request.url == "/api/fileRequest" ||
                request.url == "/api/fileResponse")
                return resp;
            if (resp instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpResponse"]) {
                // and make changes to it, then return that clone
                return resp.clone({ body: _this.host.decrypt(resp.body) });
            }
        }));
    };
    HttpErrorInterceptor.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_4__["HostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    HttpErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_4__["HostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], HttpErrorInterceptor);
    return HttpErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/_services/dialog/dialog.component.css":
/*!*******************************************************!*\
  !*** ./src/app/_services/dialog/dialog.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/deep/.mat-dialog-container {\n  background: #418ad5 !important;\n  display: block;\n  white-space: pre-line;\n  font-size: 12px;\n}\n\ntextarea:focus, input:focus{\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvX3NlcnZpY2VzL2RpYWxvZy9kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9fc2VydmljZXMvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiL2RlZXAvLm1hdC1kaWFsb2ctY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogIzQxOGFkNSAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbnRleHRhcmVhOmZvY3VzLCBpbnB1dDpmb2N1c3tcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/_services/dialog/dialog.component.ts":
/*!******************************************************!*\
  !*** ./src/app/_services/dialog/dialog.component.ts ***!
  \******************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/dialog.es5.js");



var DialogComponent = /** @class */ (function () {
    function DialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.modalInput = [];
        this.modalTitle = data.title;
        this.modalText = data.text;
        this.modalYes = data.yes;
        this.modalNo = data.no;
        this.modalInput = data.input;
        //console.log(data)
    }
    DialogComponent.prototype.close = function (button) {
        var values = { 'button': button, 'input': this.modalInput };
        this.dialogRef.close(values);
    };
    DialogComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-dialog',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_services/dialog/dialog.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dialog.component.css */ "./src/app/_services/dialog/dialog.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogComponent);
    return DialogComponent;
}());



/***/ }),

/***/ "./src/app/_services/event-emitter.service.ts":
/*!****************************************************!*\
  !*** ./src/app/_services/event-emitter.service.ts ***!
  \****************************************************/
/*! exports provided: EventEmitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEmitterService", function() { return EventEmitterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var EventEmitterService = /** @class */ (function () {
    function EventEmitterService() {
        this.newOpMode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hostInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loginChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.code = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.exercise = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.classroom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    // Detect when login or logout happens
    EventEmitterService.prototype.setLoginChange = function (data) {
        this.loginChange.emit(data);
    };
    // Keep the HostInfo updated
    EventEmitterService.prototype.setHostInfo = function (data) {
        this.hostInfo.emit(data);
    };
    EventEmitterService.prototype.setNewOpMode = function (data) {
        this.newOpMode.emit(data);
    };
    EventEmitterService.prototype.setCode = function (code) {
        //console.log(code);
        this.code.emit(code);
    };
    EventEmitterService.prototype.setExercise = function (exercise) {
        //console.log(code);
        this.exercise.emit(exercise);
    };
    EventEmitterService.prototype.setClassroom = function (classroom) {
        //console.log(code);
        this.classroom.emit(classroom);
    };
    EventEmitterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EventEmitterService);
    return EventEmitterService;
}());



/***/ }),

/***/ "./src/app/_services/file.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/file.service.ts ***!
  \*******************************************/
/*! exports provided: ExcelService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExcelService", function() { return ExcelService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! xlsx */ "./node_modules/xlsx/xlsx.js");
/* harmony import */ var xlsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_3__);




var EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
var EXCEL_EXTENSION = '.xlsx';
var ExcelService = /** @class */ (function () {
    function ExcelService() {
    }
    ExcelService.prototype.exportAsExcelFile = function (json, excelFileName) {
        var worksheet = xlsx__WEBPACK_IMPORTED_MODULE_3__["utils"].json_to_sheet(json);
        //console.log('worksheet',worksheet);
        var workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        var excelBuffer = xlsx__WEBPACK_IMPORTED_MODULE_3__["write"](workbook, { bookType: 'xlsx', type: 'array' });
        //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
        this.saveAsExcelFile(excelBuffer, excelFileName);
    };
    ExcelService.prototype.saveAsExcelFile = function (buffer, fileName) {
        var data = new Blob([buffer], {
            type: EXCEL_TYPE
        });
        file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"](data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
    };
    ExcelService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExcelService);
    return ExcelService;
}());



/***/ }),

/***/ "./src/app/_services/host.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/host.service.ts ***!
  \*******************************************/
/*! exports provided: HostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostService", function() { return HostService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/internal/operators */ "./node_modules/rxjs/internal/operators/index.js");
/* harmony import */ var rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! crypto-js */ "./node_modules/crypto-js/index.js");
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var rxjs_internal_Observer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/internal/Observer */ "./node_modules/rxjs/internal/Observer.js");
/* harmony import */ var rxjs_internal_Observer__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(rxjs_internal_Observer__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");








var HostService = /** @class */ (function () {
    function HostService(http, router) {
        this.http = http;
        this.router = router;
    }
    ///////////// BACKEND CALL API /////////////////////////////////
    HostService.prototype.request = function (data, call) {
        //console.log("Host-Service | data, call", data, call);
        //CALLs ///////////////
        // simpleRequest
        // dbRequest
        // dbUpdate
        // setLogin
        // runExecCode
        // setOpMode
        // setConfigs
        return this.http.post('/api/' + call, this.encrypt(JSON.stringify(data)), { responseType: 'text' })
            .pipe(Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            return JSON.parse(response);
        }), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(1), Object(rxjs_internal_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            if (data['Request'] == "hostInfo")
                return '-';
            else
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(rxjs_internal_Observer__WEBPACK_IMPORTED_MODULE_6__["empty"]);
        }));
    };
    HostService.prototype.uploadFileData = function (file, metadata) {
        var formData = new FormData();
        formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
        formData.append('media', file);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpParams"]();
        var options = {
            params: params,
            reportProgress: true,
        };
        var req = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpRequest"]('POST', '/api/fileRequest', formData, options);
        return this.http.request(req);
    };
    HostService.prototype.downloadFileData = function (data, option) {
        var auth = this.getSessionID();
        data = this.encrypt(JSON.stringify(data));
        option = this.encrypt(option);
        location.href = '/api/fileResponse?user=' + encodeURIComponent(auth.Owner) +
            '&option=' + encodeURIComponent(option) +
            '&data=' + encodeURIComponent(data);
    };
    /////////// FRONTEND FUNCTIONS //////////////
    HostService.prototype.CodeExample = function (example) {
        //console.log("CodeExample: ", example);
        return this.http.get('assets/' + example + '.c', { responseType: 'text' })
            .toPromise();
    };
    HostService.prototype.killSessionID = function () {
        localStorage.clear();
    };
    HostService.prototype.setSessionID = function (owner, module, params) {
        localStorage.setItem('OWNER', owner);
        localStorage.setItem('MODULE', module);
        var param = params.split("|");
        localStorage.setItem('ID', param[0]);
        localStorage.setItem('PASS', param[1]);
        localStorage.setItem('TOKEN', param[2]);
        localStorage.setItem('NAME', param[3]);
    };
    HostService.prototype.getSessionID = function () {
        var auth = {};
        auth.Owner = localStorage.getItem('OWNER');
        auth.Password = localStorage.getItem('PASS');
        auth.Name = localStorage.getItem('NAME');
        auth.Module = localStorage.getItem('MODULE');
        auth.Id = Number(localStorage.getItem('ID'));
        auth.Token = localStorage.getItem('TOKEN');
        if ((auth.Owner == "" || auth.Owner == "undefined" || auth.Owner == null)
            && auth.Module != "SelfRegistration")
            return auth = { Owner: "", Password: "", Name: "", Module: "", Id: null, Token: "" };
        return auth;
    };
    HostService.prototype.checkSessionID = function (service) {
        var admin = [
            'ClusterAvailableComponent',
            'SettingsComponent',
            'CurrentNodesComponent',
            'ClassroomManagerComponent',
        ];
        if (this.getSessionID().Module == 'SelfRegistration')
            return;
        if (this.getSessionID().Id == null || !this.getSessionID()) {
            this.router.navigate(['welcome']);
        }
        if (this.getSessionID().Module != 'Admin' && admin.includes(service)) {
            this.router.navigate(['welcome']);
        }
    };
    HostService.prototype.encrypt = function (value) {
        var token = "NPZ8fvABP5pKSwU3";
        if (localStorage.getItem('OWNER'))
            token = localStorage.getItem('TOKEN');
        return crypto_js__WEBPACK_IMPORTED_MODULE_5__["AES"].encrypt(value, token.trim()).toString();
    };
    HostService.prototype.decrypt = function (textToDecrypt) {
        var token = "NPZ8fvABP5pKSwU3";
        if (localStorage.getItem('OWNER'))
            token = localStorage.getItem('TOKEN');
        var d = crypto_js__WEBPACK_IMPORTED_MODULE_5__["AES"].decrypt(textToDecrypt, token.trim()).toString(crypto_js__WEBPACK_IMPORTED_MODULE_5__["enc"].Utf8);
        if (d) {
            try {
                var o = JSON.parse(d);
                if (o["Name"] == "error" && o["Status"] == "token") {
                    localStorage.setItem('TOKEN', 'error');
                }
            }
            catch (e) {
            }
        }
        return d;
    };
    HostService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.error(error, result);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    HostService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    HostService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], HostService);
    return HostService;
}());



/***/ }),

/***/ "./src/app/_services/mat-progress-bar/mat-progress-bar.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/_services/mat-progress-bar/mat-progress-bar.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19zZXJ2aWNlcy9tYXQtcHJvZ3Jlc3MtYmFyL21hdC1wcm9ncmVzcy1iYXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/_services/mat-progress-bar/mat-progress-bar.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/_services/mat-progress-bar/mat-progress-bar.component.ts ***!
  \**************************************************************************/
/*! exports provided: MatProgressBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MatProgressBarComponent", function() { return MatProgressBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var MatProgressBarComponent = /** @class */ (function () {
    function MatProgressBarComponent() {
        this.progresValue = 0;
        this.rangeArray = new Array(100);
    }
    MatProgressBarComponent.prototype.ngOnInit = function () {
    };
    MatProgressBarComponent.prototype.onWindowScroll = function () {
        var element = document.documentElement, body = document.body, scrollTop = 'scrollTop', scrollHeight = 'scrollHeight';
        this.progresValue =
            (element[scrollTop] || body[scrollTop]) /
                ((element[scrollHeight] || body[scrollHeight]) - element.clientHeight) * 100;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("window:scroll", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", []),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], MatProgressBarComponent.prototype, "onWindowScroll", null);
    MatProgressBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mat-progress-bar',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./mat-progress-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/_services/mat-progress-bar/mat-progress-bar.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./mat-progress-bar.component.css */ "./src/app/_services/mat-progress-bar/mat-progress-bar.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MatProgressBarComponent);
    return MatProgressBarComponent;
}());



/***/ }),

/***/ "./src/app/_services/socket.service.ts":
/*!*********************************************!*\
  !*** ./src/app/_services/socket.service.ts ***!
  \*********************************************/
/*! exports provided: SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var SocketService = /** @class */ (function () {
    function SocketService() {
        var _this = this;
        this.listener = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        var webSocketPort = window.localStorage.getItem("WebSocketPort");
        var url = new URL('/ws/', window.location.href);
        url.protocol = url.protocol.replace('http', 'ws');
        this.socket = new WebSocket("ws://" + url.hostname + ":" + webSocketPort + "/ws");
        this.socket.onopen = function (event) {
            _this.listener.emit({ type: "open", data: event });
        };
        this.socket.onclose = function (event) {
            _this.listener.emit({ type: "close", data: event });
        };
        this.socket.onmessage = function (event) {
            _this.listener.emit({ type: "message", data: JSON.parse(event.data) });
        };
    }
    SocketService.prototype.isOpen = function () { return this.socket.readyState === this.socket.OPEN; };
    SocketService.prototype.send = function (data) {
        try {
            if (!this.isOpen()) {
                console.log("Socket is not open");
                return;
            }
            this.socket.send(JSON.stringify(data));
        }
        catch (e) {
            console.log(e.error);
        }
    };
    SocketService.prototype.close = function () {
        this.socket.close();
    };
    SocketService.prototype.getEventListener = function () {
        return this.listener;
    };
    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SocketService);
    return SocketService;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _menu_classroom_classroom_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu-classroom/classroom/exercises/exercises.component */ "./src/app/menu-classroom/classroom/exercises/exercises.component.ts");
/* harmony import */ var _menu_classroom_classroom_exercises_exercises_edit_exercises_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu-classroom/classroom/exercises/exercises-edit/exercises-edit.component */ "./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-edit.component.ts");
/* harmony import */ var _menu_classroom_classroom_exercises_exercises_answer_exercises_answer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-classroom/classroom/exercises/exercises-answer/exercises-answer.component */ "./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer.component.ts");
/* harmony import */ var _menu_classroom_classroom_exercises_exercises_answer_exercises_answer_edit_exercises_answer_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-classroom/classroom/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component */ "./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.ts");
/* harmony import */ var _menu_classroom_classroom_exercises_exercises_edit_exercises_groups_exercises_groups_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./menu-classroom/classroom/exercises/exercises-edit/exercises-groups/exercises-groups.component */ "./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-groups/exercises-groups.component.ts");
/* harmony import */ var _menu_classroom_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu-classroom/classroom/classroom.component */ "./src/app/menu-classroom/classroom/classroom.component.ts");
/* harmony import */ var _menu_classroom_classroom_classroom_edit_classroom_edit_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu-classroom/classroom/classroom-edit/classroom-edit.component */ "./src/app/menu-classroom/classroom/classroom-edit/classroom-edit.component.ts");
/* harmony import */ var _menu_classroom_classroom_groups_groups_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu-classroom/classroom/groups/groups.component */ "./src/app/menu-classroom/classroom/groups/groups.component.ts");
/* harmony import */ var _menu_classroom_classroom_groups_groups_edit_groups_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu-classroom/classroom/groups/groups-edit/groups-edit.component */ "./src/app/menu-classroom/classroom/groups/groups-edit/groups-edit.component.ts");
/* harmony import */ var _menu_classroom_classroom_groups_groups_members_groups_members_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu-classroom/classroom/groups/groups-members/groups-members.component */ "./src/app/menu-classroom/classroom/groups/groups-members/groups-members.component.ts");
/* harmony import */ var _menu_classroom_classroom_users_users_join_users_join_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu-classroom/classroom/users/users-join/users-join.component */ "./src/app/menu-classroom/classroom/users/users-join/users-join.component.ts");
/* harmony import */ var _menu_management_settings_settings_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu-management/settings/settings.component */ "./src/app/menu-management/settings/settings.component.ts");
/* harmony import */ var _try_code_try_code_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./try-code/try-code.component */ "./src/app/try-code/try-code.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _users_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./users/users-edit/users-edit.component */ "./src/app/users/users-edit/users-edit.component.ts");
/* harmony import */ var _menu_management_classroom_manager_classroom_manager_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./menu-management/classroom-manager/classroom-manager.component */ "./src/app/menu-management/classroom-manager/classroom-manager.component.ts");
/* harmony import */ var _menu_management_classroom_manager_classroom_manager_edit_classroom_manager_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./menu-management/classroom-manager/classroom-manager-edit/classroom-manager-edit.component */ "./src/app/menu-management/classroom-manager/classroom-manager-edit/classroom-manager-edit.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _host_credentials_host_login_host_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./host-credentials/host-login/host-login.component */ "./src/app/host-credentials/host-login/host-login.component.ts");
/* harmony import */ var _menu_management_current_nodes_current_nodes_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./menu-management/current-nodes/current-nodes.component */ "./src/app/menu-management/current-nodes/current-nodes.component.ts");
/* harmony import */ var _menu_management_cluster_available_cluster_available_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./menu-management/cluster-available/cluster-available.component */ "./src/app/menu-management/cluster-available/cluster-available.component.ts");
/* harmony import */ var _menu_management_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./menu-management/monitoring/monitoring.component */ "./src/app/menu-management/monitoring/monitoring.component.ts");
/* harmony import */ var _menu_classroom_classroom_users_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./menu-classroom/classroom/users/users-edit/users-edit.component */ "./src/app/menu-classroom/classroom/users/users-edit/users-edit.component.ts");
/* harmony import */ var _menu_classroom_classroom_users_users_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./menu-classroom/classroom/users/users.component */ "./src/app/menu-classroom/classroom/users/users.component.ts");



























var routes = [
    { path: 'welcome', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_20__["WelcomeComponent"], },
    { path: '', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_20__["WelcomeComponent"], },
    { path: '404', component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_20__["WelcomeComponent"], },
    { path: 'view-code', component: _try_code_try_code_component__WEBPACK_IMPORTED_MODULE_15__["TryCodeComponent"], },
    { path: 'settings', component: _menu_management_settings_settings_component__WEBPACK_IMPORTED_MODULE_14__["SettingsComponent"], },
    { path: 'edit-user', component: _users_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_17__["UsersEditComponent"] },
    { path: 'add-user', component: _users_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_17__["UsersEditComponent"] },
    { path: 'view-user', component: _users_users_component__WEBPACK_IMPORTED_MODULE_16__["UsersComponent"], },
    { path: 'view-classroom', component: _menu_classroom_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_8__["ClassroomComponent"] },
    { path: 'edit-classroom', component: _menu_classroom_classroom_classroom_edit_classroom_edit_component__WEBPACK_IMPORTED_MODULE_9__["ClassroomEditComponent"] },
    { path: 'add-classroom', component: _menu_classroom_classroom_classroom_edit_classroom_edit_component__WEBPACK_IMPORTED_MODULE_9__["ClassroomEditComponent"] },
    { path: 'add-join-classroom', component: _menu_classroom_classroom_users_users_join_users_join_component__WEBPACK_IMPORTED_MODULE_13__["UsersClassroomJoinComponent"], },
    { path: 'edit-user-classroom', component: _menu_classroom_classroom_users_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_25__["UsersClassroomEditComponent"], },
    { path: 'add-user-classroom', component: _menu_classroom_classroom_users_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_25__["UsersClassroomEditComponent"], },
    { path: 'view-user-classroom', component: _menu_classroom_classroom_users_users_component__WEBPACK_IMPORTED_MODULE_26__["UsersClassroomComponent"], },
    { path: 'edit-group', component: _menu_classroom_classroom_groups_groups_edit_groups_edit_component__WEBPACK_IMPORTED_MODULE_11__["GroupsEditComponent"] },
    { path: 'add-group', component: _menu_classroom_classroom_groups_groups_edit_groups_edit_component__WEBPACK_IMPORTED_MODULE_11__["GroupsEditComponent"] },
    { path: 'add-members', component: _menu_classroom_classroom_groups_groups_members_groups_members_component__WEBPACK_IMPORTED_MODULE_12__["GroupsMembersComponent"], },
    { path: 'view-group', component: _menu_classroom_classroom_groups_groups_component__WEBPACK_IMPORTED_MODULE_10__["GroupsComponent"], },
    { path: 'view-exercise', component: _menu_classroom_classroom_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_3__["ExercisesComponent"], },
    { path: 'edit-exercise', component: _menu_classroom_classroom_exercises_exercises_edit_exercises_edit_component__WEBPACK_IMPORTED_MODULE_4__["ExercisesEditComponent"] },
    { path: 'add-exercise', component: _menu_classroom_classroom_exercises_exercises_edit_exercises_edit_component__WEBPACK_IMPORTED_MODULE_4__["ExercisesEditComponent"] },
    { path: 'add-groupex', component: _menu_classroom_classroom_exercises_exercises_edit_exercises_groups_exercises_groups_component__WEBPACK_IMPORTED_MODULE_7__["ExercisesGroupsComponent"], },
    { path: 'view-answer', component: _menu_classroom_classroom_exercises_exercises_answer_exercises_answer_component__WEBPACK_IMPORTED_MODULE_5__["ExercisesAnswerComponent"], },
    { path: 'add-answer', component: _menu_classroom_classroom_exercises_exercises_answer_exercises_answer_edit_exercises_answer_edit_component__WEBPACK_IMPORTED_MODULE_6__["ExercisesAnswerEditComponent"], },
    { path: 'edit-answer', component: _menu_classroom_classroom_exercises_exercises_answer_exercises_answer_edit_exercises_answer_edit_component__WEBPACK_IMPORTED_MODULE_6__["ExercisesAnswerEditComponent"], },
    { path: 'host-login', component: _host_credentials_host_login_host_login_component__WEBPACK_IMPORTED_MODULE_21__["HostLoginComponent"], },
    { path: 'cluster-available', component: _menu_management_cluster_available_cluster_available_component__WEBPACK_IMPORTED_MODULE_23__["ClusterAvailableComponent"], },
    { path: 'current-nodes', component: _menu_management_current_nodes_current_nodes_component__WEBPACK_IMPORTED_MODULE_22__["CurrentNodesComponent"], },
    { path: 'monitoring', component: _menu_management_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_24__["MonitoringComponent"], },
    { path: 'edit-classroom-manager', component: _menu_management_classroom_manager_classroom_manager_edit_classroom_manager_edit_component__WEBPACK_IMPORTED_MODULE_19__["ClassroomManagerEditComponent"], },
    { path: 'add-classroom-manager', component: _menu_management_classroom_manager_classroom_manager_edit_classroom_manager_edit_component__WEBPACK_IMPORTED_MODULE_19__["ClassroomManagerEditComponent"], },
    { path: 'view-classroom-manager', component: _menu_management_classroom_manager_classroom_manager_component__WEBPACK_IMPORTED_MODULE_18__["ClassroomManagerComponent"], },
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n.hostInfo {\n  text-align: right;\n  padding: 0 50px 0 0 !important;\n}\n\nmain {\n  margin-left: 25px !important;\n  margin-top: -40px !important;\n}\n\n.col-md-9 {\n  margin-top: -15px !important;\n}\n\n.mb-4, .my-4 {\n  margin-left: -15px !important;\n\n}\n\n.jumbotron {\n  padding: 1rem 0rem;\n}\n\n.navbar {\n  padding: 0 0 0 0;\n  margin-top: -20px !important;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n.MASTER {\n  background-color: #878787;\n}\n\nfooter {\n  background-color: #e9ecef;\n}\n\n.mat-drawer-container {\n  background-color: rgb(111 111 111 / 32%);\n  color: #fff;\n}\n\n.mat-drawer {\n  background: #fff;\n  color: #000;\n}\n\n.mat-drawer.mat-drawer-side {\n  /* background: rgb(111 111 111 / 32%); */\n}\n\n.mat-sidenav-fixed {\n  /* background: rgb(111 111 111 / 32%); */\n}\n\n.mat-drawer-container {\n  background-color: #fff;\n  color: #000;\n}\n\n::ng-deep .mat-expansion-indicator {\n  background: rgba(255, 255, 255, 0.56) !important;\n  color: #000 !important;\n}\n\n::ng-deep .mat-expansion-panel {\n  background: #fff;\n  color: #000;\n  /* box-shadow: 0 0 0 0 !important; */\n}\n\n.mat-list-base {\n  width: 95%;\n  padding-left: 8px;\n}\n\n::ng-deep .mat-toolbar {\n  background: rgb(208 208 208) !important;\n}\n\n::ng-deep .mat-drawer-inner-container {\n  display: flex;\n  flex-direction: column;\n}\n\n::ng-deep .mat-expansion-panel-header-title {\n  color: #000 ;\n}\n\n::ng-deep .mat-expansion-panel:not([class*=mat-elevation-z]) {\n   box-shadow: 0 0 0 0 !important;\n}\n\n::ng-deep .mat-expansion-panel {\n  /* background: rgb(111 111 111 / 32%); */\n  /* display: block */\n  color: #000;\n}\n\n::ng-deep .mat-expansion-panel-body {\n  padding: 5px 5px 5px 20px !important;\n}\n\n::ng-deep .card {\n  border-radius: 0px !important;\n}\n\n::ng-deep .mat-divider {\n  border-top-color: #000 !important;\n}\n\n.icon {\n  width: 60px;\n  height: 60px;\n}\n\n.down {\n  min-height: 200px;\n}\n\n.version {\n  font-size: 12px;\n}\n\n.iguana {\n  color: #000;\n}\n\n.noIP {\n  font-size: 12px;\n  color: #f60202;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLDRCQUE0QjtFQUM1Qiw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSw2QkFBNkI7O0FBRS9COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDRCQUE0QjtBQUM5Qjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsV0FBVztBQUNiOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHdDQUF3QztBQUMxQzs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnREFBZ0Q7RUFDaEQsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUNBQXVDO0FBQ3pDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtHQUNHLDhCQUE4QjtBQUNqQzs7QUFFQTtFQUNFLHdDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4uaG9zdEluZm8ge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZzogMCA1MHB4IDAgMCAhaW1wb3J0YW50O1xufVxuXG5tYWluIHtcbiAgbWFyZ2luLWxlZnQ6IDI1cHggIWltcG9ydGFudDtcbiAgbWFyZ2luLXRvcDogLTQwcHggIWltcG9ydGFudDtcbn1cblxuLmNvbC1tZC05IHtcbiAgbWFyZ2luLXRvcDogLTE1cHggIWltcG9ydGFudDtcbn1cblxuLm1iLTQsIC5teS00IHtcbiAgbWFyZ2luLWxlZnQ6IC0xNXB4ICFpbXBvcnRhbnQ7XG5cbn1cblxuLmp1bWJvdHJvbiB7XG4gIHBhZGRpbmc6IDFyZW0gMHJlbTtcbn1cblxuLm5hdmJhciB7XG4gIHBhZGRpbmc6IDAgMCAwIDA7XG4gIG1hcmdpbi10b3A6IC0yMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLk1BU1RFUiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4Nzg3ODc7XG59XG5cbmZvb3RlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWVjZWY7XG59XG5cbi5tYXQtZHJhd2VyLWNvbnRhaW5lciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTEgMTExIDExMSAvIDMyJSk7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ubWF0LWRyYXdlciB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIGNvbG9yOiAjMDAwO1xufVxuXG4ubWF0LWRyYXdlci5tYXQtZHJhd2VyLXNpZGUge1xuICAvKiBiYWNrZ3JvdW5kOiByZ2IoMTExIDExMSAxMTEgLyAzMiUpOyAqL1xufVxuXG4ubWF0LXNpZGVuYXYtZml4ZWQge1xuICAvKiBiYWNrZ3JvdW5kOiByZ2IoMTExIDExMSAxMTEgLyAzMiUpOyAqL1xufVxuXG4ubWF0LWRyYXdlci1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzAwMDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLWluZGljYXRvciB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41NikgIWltcG9ydGFudDtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZXhwYW5zaW9uLXBhbmVsIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgY29sb3I6ICMwMDA7XG4gIC8qIGJveC1zaGFkb3c6IDAgMCAwIDAgIWltcG9ydGFudDsgKi9cbn1cblxuLm1hdC1saXN0LWJhc2Uge1xuICB3aWR0aDogOTUlO1xuICBwYWRkaW5nLWxlZnQ6IDhweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6IHJnYigyMDggMjA4IDIwOCkgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWlubmVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbC1oZWFkZXItdGl0bGUge1xuICBjb2xvcjogIzAwMCA7XG59XG5cbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbDpub3QoW2NsYXNzKj1tYXQtZWxldmF0aW9uLXpdKSB7XG4gICBib3gtc2hhZG93OiAwIDAgMCAwICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWV4cGFuc2lvbi1wYW5lbCB7XG4gIC8qIGJhY2tncm91bmQ6IHJnYigxMTEgMTExIDExMSAvIDMyJSk7ICovXG4gIC8qIGRpc3BsYXk6IGJsb2NrICovXG4gIGNvbG9yOiAjMDAwO1xufVxuXG46Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwtYm9keSB7XG4gIHBhZGRpbmc6IDVweCA1cHggNXB4IDIwcHggIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMHB4ICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWRpdmlkZXIge1xuICBib3JkZXItdG9wLWNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDYwcHg7XG4gIGhlaWdodDogNjBweDtcbn1cblxuLmRvd24ge1xuICBtaW4taGVpZ2h0OiAyMDBweDtcbn1cblxuLnZlcnNpb24ge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5pZ3VhbmEge1xuICBjb2xvcjogIzAwMDtcbn1cblxuLm5vSVAge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiAjZjYwMjAyO1xufSJdfQ== */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/sidenav.es5.js");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_control/util.control */ "./src/app/_control/util.control.ts");







var AppComponent = /** @class */ (function () {
    function AppComponent(router, host, _util, _eventEmitter) {
        this.router = router;
        this.host = host;
        this._util = _util;
        this._eventEmitter = _eventEmitter;
        this.idleState = 'Not started.';
        this.timedOut = false;
        this.lastPing = null;
        this.title = 'angular-idle-timeout';
        this.hostInfo = {};
        this.cluster = {};
        this.load = 0;
        this.first = 0;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hostInfo.Cluster = this.cluster;
        this.tmp_hostConnection = {
            Name: "info",
            Status: "waiting data from host...",
        };
        this.tmp_clusterConnection = {
            Name: "info",
            Status: "waiting for some cluster on the network...",
        };
        this.tmp_OkConnection = {
            Name: "ok",
            Status: "connected",
        };
        this.hostConnection = this.tmp_hostConnection;
        this.clusterConnection = this.tmp_clusterConnection;
        this.getVersion();
        //Getting value from child HostCredentials
        this.subLogin = this._eventEmitter.loginChange.subscribe(function (data) {
            //console.log('App Root | _eventEmitter.SendMsgAppRoot  ', data);
            _this.getHostInfo();
            if (data['Name'] == "stopSession")
                _this.sidenav.close();
            //if (data['Name'] == "startSession")
            //  this.sidenav.toggle();
        });
        //Getting value from child OperationModeComponent
        this.subNewOpMode = this._eventEmitter.newOpMode.subscribe(function (data) {
            _this.sidenav.close();
            _this.newOpMode = data;
            _this.clusterConnection = _this.tmp_clusterConnection;
            _this.hostConnection = _this.tmp_hostConnection;
            _this.host.killSessionID();
        });
        this.managerStatus();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        this.subLogin.unsubscribe();
        this.subNewOpMode.unsubscribe();
    };
    AppComponent.prototype.getVersion = function () {
        var _this = this;
        var params = [];
        var request = {
            Request: "version",
            Param: params,
        };
        var queue;
        this.host.request(request, 'simpleRequest')
            .subscribe(function (data) {
            _this.version = data;
        });
    };
    AppComponent.prototype.checkToken = function () {
        // Let's check if token is already valid
        // This value come from HttpErrorInterceptor
        var auth = this.host.getSessionID();
        if (auth.Token == "error") {
            console.log("erro the token");
            this._util.openModal('Token Error', 'This token is no more valid! Please, login again...', 'Close', '', '');
            this.host.killSessionID();
            this._eventEmitter.setLoginChange({ Name: "error", Status: "logout" });
        }
    };
    AppComponent.prototype.getHostInfo = function () {
        var _this = this;
        var params = [];
        var request = {
            Request: "hostInfo",
            Param: params,
        };
        this.checkToken();
        this.host.request(request, 'simpleRequest')
            .subscribe(function (data) {
            //console.log('App Root | hostInfo, this.newOpMode: ', data, this.newOpMode);
            _this.hostInfo = data;
            if (_this.hostInfo.WebSocketPort)
                window.localStorage.setItem('WebSocketPort', _this.hostInfo.WebSocketPort);
            if (data == '-' ||
                data['OpMode'] == '' ||
                (_this.newOpMode && _this.hostInfo.OpMode != _this.newOpMode)) {
                // If no connection, show error message
                _this.hostConnection = _this.tmp_hostConnection;
                _this.host.killSessionID();
                _this.first = 0;
                _this.sidenav.close();
            }
            else {
                //console.log(this.hostInfo);
                _this.hostConnection = _this.tmp_OkConnection;
                //Send HostInfo to all children
                _this._eventEmitter.setHostInfo(_this.hostInfo);
                //Get Credential
                if (_this.host.getSessionID().Module == "Admin")
                    _this.hostInfo['IsMaster'] = true;
                if (_this.hostInfo.Cluster.MasterIP && _this.hostInfo.Cluster.MasterIP != "") {
                    _this.clusterConnection = _this.tmp_OkConnection;
                    if (_this.first == 0 && _this.hostInfo.OpMode == 'NODE') {
                        var ret = _this._util.openModal('Master Frontend', 'Do you want to be redirected to the master frontend?', 'Yes', 'No', '');
                        ret.afterClosed().subscribe(function (data) {
                            if (data['button'] == 'YES') {
                                window.open("http://" + _this.hostInfo.Cluster.MasterIP + ":"
                                    + _this.hostInfo.Cluster.PortFrontend, "_blank");
                            }
                        });
                        _this.first = 1;
                    }
                }
                else {
                    _this.clusterConnection = _this.tmp_clusterConnection;
                }
            }
        });
    };
    // Let's check host connection after 10 seconds and forever....
    AppComponent.prototype.managerStatus = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var n;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        n = 0;
                        _a.label = 1;
                    case 1:
                        if (false) {}
                        this.getHostInfo();
                        if (this.hostConnection["Name"] == "info" && n == 2) {
                            this.conn = this._util.openModal('Connection Failed', 'There is no connection with the server!', 'Close', '', '');
                        }
                        if (this.conn && this.hostConnection["Name"] == "ok" && n > 0) {
                            this.conn.close();
                            n = 0;
                        }
                        return [4 /*yield*/, this._util.delay(10000)];
                    case 2:
                        _a.sent();
                        if (this.hostConnection["Name"] == "info")
                            n++;
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_6__["UtilControl"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('drawer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_5__["MatSidenav"])
    ], AppComponent.prototype, "sidenav", void 0);
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_6__["UtilControl"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _menu_management_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu-management/monitoring/monitoring.component */ "./src/app/menu-management/monitoring/monitoring.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _code_code_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./code/code.component */ "./src/app/code/code.component.ts");
/* harmony import */ var _menu_management_cluster_available_cluster_available_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu-management/cluster-available/cluster-available.component */ "./src/app/menu-management/cluster-available/cluster-available.component.ts");
/* harmony import */ var _menu_management_current_nodes_current_nodes_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./menu-management/current-nodes/current-nodes.component */ "./src/app/menu-management/current-nodes/current-nodes.component.ts");
/* harmony import */ var _cluster_info_cluster_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cluster-info/cluster-info.component */ "./src/app/cluster-info/cluster-info.component.ts");
/* harmony import */ var _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_services/dialog/dialog.component */ "./src/app/_services/dialog/dialog.component.ts");
/* harmony import */ var _menu_classroom_classroom_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu-classroom/classroom/exercises/exercises.component */ "./src/app/menu-classroom/classroom/exercises/exercises.component.ts");
/* harmony import */ var _menu_classroom_classroom_exercises_exercises_answer_exercises_answer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./menu-classroom/classroom/exercises/exercises-answer/exercises-answer.component */ "./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer.component.ts");
/* harmony import */ var _menu_classroom_classroom_exercises_exercises_answer_exercises_answer_edit_exercises_answer_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./menu-classroom/classroom/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component */ "./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.ts");
/* harmony import */ var _menu_classroom_classroom_exercises_exercises_edit_exercises_edit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./menu-classroom/classroom/exercises/exercises-edit/exercises-edit.component */ "./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-edit.component.ts");
/* harmony import */ var _menu_classroom_classroom_exercises_exercises_edit_exercises_files_exercises_files_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./menu-classroom/classroom/exercises/exercises-edit/exercises-files/exercises-files.component */ "./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-files/exercises-files.component.ts");
/* harmony import */ var _menu_classroom_classroom_exercises_exercises_edit_exercises_groups_exercises_groups_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./menu-classroom/classroom/exercises/exercises-edit/exercises-groups/exercises-groups.component */ "./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-groups/exercises-groups.component.ts");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./_services/file.service */ "./src/app/_services/file.service.ts");
/* harmony import */ var _menu_classroom_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./menu-classroom/classroom/classroom.component */ "./src/app/menu-classroom/classroom/classroom.component.ts");
/* harmony import */ var _menu_classroom_classroom_classroom_edit_classroom_edit_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./menu-classroom/classroom/classroom-edit/classroom-edit.component */ "./src/app/menu-classroom/classroom/classroom-edit/classroom-edit.component.ts");
/* harmony import */ var _menu_classroom_classroom_groups_groups_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./menu-classroom/classroom/groups/groups.component */ "./src/app/menu-classroom/classroom/groups/groups.component.ts");
/* harmony import */ var _menu_classroom_classroom_groups_groups_edit_groups_edit_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./menu-classroom/classroom/groups/groups-edit/groups-edit.component */ "./src/app/menu-classroom/classroom/groups/groups-edit/groups-edit.component.ts");
/* harmony import */ var _menu_classroom_classroom_groups_groups_members_groups_members_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./menu-classroom/classroom/groups/groups-members/groups-members.component */ "./src/app/menu-classroom/classroom/groups/groups-members/groups-members.component.ts");
/* harmony import */ var _menu_classroom_classroom_users_users_join_users_join_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./menu-classroom/classroom/users/users-join/users-join.component */ "./src/app/menu-classroom/classroom/users/users-join/users-join.component.ts");
/* harmony import */ var _host_credentials_host_credentials_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./host-credentials/host-credentials.component */ "./src/app/host-credentials/host-credentials.component.ts");
/* harmony import */ var _host_credentials_host_login_host_login_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./host-credentials/host-login/host-login.component */ "./src/app/host-credentials/host-login/host-login.component.ts");
/* harmony import */ var _host_status_host_status_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./host-status/host-status.component */ "./src/app/host-status/host-status.component.ts");
/* harmony import */ var _menu_management_classroom_manager_classroom_manager_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./menu-management/classroom-manager/classroom-manager.component */ "./src/app/menu-management/classroom-manager/classroom-manager.component.ts");
/* harmony import */ var _menu_management_classroom_manager_classroom_manager_edit_classroom_manager_edit_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./menu-management/classroom-manager/classroom-manager-edit/classroom-manager-edit.component */ "./src/app/menu-management/classroom-manager/classroom-manager-edit/classroom-manager-edit.component.ts");
/* harmony import */ var _services_mat_progress_bar_mat_progress_bar_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./_services/mat-progress-bar/mat-progress-bar.component */ "./src/app/_services/mat-progress-bar/mat-progress-bar.component.ts");
/* harmony import */ var _menu_classroom_menu_classroom_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./menu-classroom/menu-classroom.component */ "./src/app/menu-classroom/menu-classroom.component.ts");
/* harmony import */ var _menu_management_menu_management_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./menu-management/menu-management.component */ "./src/app/menu-management/menu-management.component.ts");
/* harmony import */ var _menu_management_settings_settings_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./menu-management/settings/settings.component */ "./src/app/menu-management/settings/settings.component.ts");
/* harmony import */ var _menu_classroom_classroom_users_users_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./menu-classroom/classroom/users/users.component */ "./src/app/menu-classroom/classroom/users/users.component.ts");
/* harmony import */ var _menu_classroom_classroom_users_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./menu-classroom/classroom/users/users-edit/users-edit.component */ "./src/app/menu-classroom/classroom/users/users-edit/users-edit.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _users_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./users/users-edit/users-edit.component */ "./src/app/users/users-edit/users-edit.component.ts");
/* harmony import */ var _try_code_try_code_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./try-code/try-code.component */ "./src/app/try-code/try-code.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @ckeditor/ckeditor5-angular */ "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm5/ckeditor-ckeditor5-angular.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/chips.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/button.es5.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/divider.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/button-toggle.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/input.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/progress-bar.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/table.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/sort.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/select.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/list.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/expansion.es5.js");
/* harmony import */ var ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ngx-monaco-editor */ "./node_modules/ngx-monaco-editor/__ivy_ngcc__/fesm5/ngx-monaco-editor.js");
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! @ng-idle/keepalive */ "./node_modules/@ng-idle/keepalive/__ivy_ngcc__/fesm5/ng-idle-keepalive.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _helpers_HttpErrorInterceptor__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./_helpers/HttpErrorInterceptor */ "./src/app/_helpers/HttpErrorInterceptor.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(/*! ./_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/card.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/menu.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/icon.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/layout.es5.js");


//DECLARATIONS



































//IMPORTS




























//PROVIDES



//EXPORTS







Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _menu_management_cluster_available_cluster_available_component__WEBPACK_IMPORTED_MODULE_5__["ClusterAvailableComponent"],
                _cluster_info_cluster_info_component__WEBPACK_IMPORTED_MODULE_7__["ClusterInfoComponent"],
                _menu_management_current_nodes_current_nodes_component__WEBPACK_IMPORTED_MODULE_6__["CurrentNodesComponent"],
                _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"],
                _menu_classroom_classroom_exercises_exercises_component__WEBPACK_IMPORTED_MODULE_9__["ExercisesComponent"],
                _menu_classroom_classroom_exercises_exercises_edit_exercises_edit_component__WEBPACK_IMPORTED_MODULE_12__["ExercisesEditComponent"],
                _menu_classroom_classroom_exercises_exercises_edit_exercises_files_exercises_files_component__WEBPACK_IMPORTED_MODULE_13__["ExercisesFilesComponent"],
                _menu_classroom_classroom_exercises_exercises_answer_exercises_answer_component__WEBPACK_IMPORTED_MODULE_10__["ExercisesAnswerComponent"],
                _menu_classroom_classroom_exercises_exercises_answer_exercises_answer_edit_exercises_answer_edit_component__WEBPACK_IMPORTED_MODULE_11__["ExercisesAnswerEditComponent"],
                _menu_classroom_classroom_exercises_exercises_edit_exercises_groups_exercises_groups_component__WEBPACK_IMPORTED_MODULE_14__["ExercisesGroupsComponent"],
                _code_code_component__WEBPACK_IMPORTED_MODULE_4__["CodeComponent"],
                _menu_classroom_classroom_classroom_component__WEBPACK_IMPORTED_MODULE_16__["ClassroomComponent"],
                _menu_classroom_classroom_classroom_edit_classroom_edit_component__WEBPACK_IMPORTED_MODULE_17__["ClassroomEditComponent"],
                _menu_classroom_classroom_groups_groups_component__WEBPACK_IMPORTED_MODULE_18__["GroupsComponent"],
                _menu_classroom_classroom_groups_groups_edit_groups_edit_component__WEBPACK_IMPORTED_MODULE_19__["GroupsEditComponent"],
                _menu_classroom_classroom_groups_groups_members_groups_members_component__WEBPACK_IMPORTED_MODULE_20__["GroupsMembersComponent"],
                _host_credentials_host_credentials_component__WEBPACK_IMPORTED_MODULE_22__["HostCredentialsComponent"],
                _host_credentials_host_login_host_login_component__WEBPACK_IMPORTED_MODULE_23__["HostLoginComponent"],
                _host_status_host_status_component__WEBPACK_IMPORTED_MODULE_24__["HostStatusComponent"],
                _services_mat_progress_bar_mat_progress_bar_component__WEBPACK_IMPORTED_MODULE_27__["MatProgressBarComponent"],
                _menu_classroom_menu_classroom_component__WEBPACK_IMPORTED_MODULE_28__["MenuClassroomComponent"],
                _menu_management_menu_management_component__WEBPACK_IMPORTED_MODULE_29__["MenuManagementComponent"],
                _menu_management_classroom_manager_classroom_manager_component__WEBPACK_IMPORTED_MODULE_25__["ClassroomManagerComponent"],
                _menu_management_classroom_manager_classroom_manager_edit_classroom_manager_edit_component__WEBPACK_IMPORTED_MODULE_26__["ClassroomManagerEditComponent"],
                _menu_management_monitoring_monitoring_component__WEBPACK_IMPORTED_MODULE_2__["MonitoringComponent"],
                _menu_management_settings_settings_component__WEBPACK_IMPORTED_MODULE_30__["SettingsComponent"],
                _users_users_component__WEBPACK_IMPORTED_MODULE_33__["UsersComponent"],
                _users_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_34__["UsersEditComponent"],
                _menu_classroom_classroom_users_users_component__WEBPACK_IMPORTED_MODULE_31__["UsersClassroomComponent"],
                _menu_classroom_classroom_users_users_join_users_join_component__WEBPACK_IMPORTED_MODULE_21__["UsersClassroomJoinComponent"],
                _menu_classroom_classroom_users_users_edit_users_edit_component__WEBPACK_IMPORTED_MODULE_32__["UsersClassroomEditComponent"],
                _try_code_try_code_component__WEBPACK_IMPORTED_MODULE_35__["TryCodeComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_36__["WelcomeComponent"],
            ],
            imports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_37__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_38__["BrowserAnimationsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_39__["BrowserModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_67__["CommonModule"],
                _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_40__["CKEditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_41__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_42__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_42__["HttpClientJsonpModule"],
                ngx_monaco_editor__WEBPACK_IMPORTED_MODULE_62__["MonacoEditorModule"].forRoot(),
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_43__["MatAutocompleteModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_44__["MatChipsModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_46__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_47__["MatDividerModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_45__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_48__["MatButtonToggleModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_61__["MatExpansionModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_49__["MatInputModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_50__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_51__["MatProgressBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_54__["MatSortModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_58__["MatSnackBarModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_52__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_53__["MatTabsModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_55__["MatSelectModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_60__["MatToolbarModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_57__["MatSidenavModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_56__["MatListModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_59__["FlexLayoutModule"],
                _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_63__["NgIdleKeepaliveModule"].forRoot(),
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_64__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_41__["ReactiveFormsModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_68__["MatGridListModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_69__["MatCardModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_70__["MatMenuModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_71__["MatIconModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_72__["LayoutModule"],
            ],
            providers: [
                {
                    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_42__["HTTP_INTERCEPTORS"],
                    useClass: _helpers_HttpErrorInterceptor__WEBPACK_IMPORTED_MODULE_65__["HttpErrorInterceptor"],
                    multi: true,
                }, _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_66__["EventEmitterService"],
                _services_file_service__WEBPACK_IMPORTED_MODULE_15__["ExcelService"],
            ],
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]],
            entryComponents: [
                _services_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_67__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_41__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_41__["ReactiveFormsModule"],
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cluster-info/cluster-info.component.css":
/*!*********************************************************!*\
  !*** ./src/app/cluster-info/cluster-info.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tags {\n  min-height: 150px;\n  min-width: 20vw;\n  max-width: calc(100vw - 35px);\n}\n\n.text-link {\n  font-size: 14px;\n}\n\n.icon {\n  width: 60px;\n  height: 60px;\n}\n\n.main {\n  float: left;\n}\n\n.mainSide {\n  float: left;\n  margin-left: 10px;\n}\n\n::ng-deep .btn-group-sm>.btn, .btn-sm {\n  padding: 0rem 0rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2x1c3Rlci1pbmZvL2NsdXN0ZXItaW5mby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZiw2QkFBNkI7QUFDL0I7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jbHVzdGVyLWluZm8vY2x1c3Rlci1pbmZvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFncyB7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBtaW4td2lkdGg6IDIwdnc7XG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDM1cHgpO1xufVxuXG4udGV4dC1saW5rIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbi5tYWluIHtcbiAgZmxvYXQ6IGxlZnQ7XG59XG5cbi5tYWluU2lkZSB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuOjpuZy1kZWVwIC5idG4tZ3JvdXAtc20+LmJ0biwgLmJ0bi1zbSB7XG4gIHBhZGRpbmc6IDByZW0gMHJlbSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/cluster-info/cluster-info.component.ts":
/*!********************************************************!*\
  !*** ./src/app/cluster-info/cluster-info.component.ts ***!
  \********************************************************/
/*! exports provided: ClusterInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterInfoComponent", function() { return ClusterInfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_control/util.control */ "./src/app/_control/util.control.ts");





var ClusterInfoComponent = /** @class */ (function () {
    function ClusterInfoComponent(host, _util, _eventEmitter) {
        this.host = host;
        this._util = _util;
        this._eventEmitter = _eventEmitter;
        this.userSession = {};
        this.response = {};
    }
    ClusterInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Getting value from child HostCredentials
        this.subLogin = this._eventEmitter.loginChange.subscribe(function (data) {
            //console.log('App Root | _eventEmitter.SendMsgAppRoot  ', data);
            _this.userSession = _this.host.getSessionID();
        });
        this.userSession = this.host.getSessionID();
    };
    ClusterInfoComponent.prototype.ngOnDestroy = function () {
        this.subLogin.unsubscribe();
    };
    ClusterInfoComponent.prototype.setOpMode = function () {
        var _this = this;
        var ret = this._util.openModal('Exit Cluster', 'Do you confirm leaving the cluster??', 'Yes', 'No', '');
        ret.afterClosed().subscribe(function (data) {
            if (data['button'] == 'YES') {
                var cluster = {};
                var serviceOpMode = {
                    NewOpMode: "LOCAL",
                    Cluster: cluster,
                };
                //console.log('OperationMode: serviceOpMode ', serviceOpMode)
                _this.response['Name'] = "info";
                _this.response['Status'] = "Request sent, wait ...";
                _this.host.request(serviceOpMode, 'setOpMode')
                    .subscribe(function (data) {
                    _this.response = data;
                    if (_this.response['Name'] == "ok") {
                        // Inform the App Root about new change in OpMode
                        _this.host.killSessionID();
                        _this._eventEmitter.setNewOpMode("LOCAL");
                    }
                });
            }
        });
    };
    ClusterInfoComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_4__["UtilControl"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hostInfo'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClusterInfoComponent.prototype, "hostInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hostConnection'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClusterInfoComponent.prototype, "hostConnection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('clusterConnection'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ClusterInfoComponent.prototype, "clusterConnection", void 0);
    ClusterInfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cluster-info',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cluster-info.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cluster-info/cluster-info.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cluster-info.component.css */ "./src/app/cluster-info/cluster-info.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_4__["UtilControl"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"]])
    ], ClusterInfoComponent);
    return ClusterInfoComponent;
}());



/***/ }),

/***/ "./src/app/code/code.component.css":
/*!*****************************************!*\
  !*** ./src/app/code/code.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".files {\n  padding-left: 10px;\n}\n\n.codeButtons {\n  padding-bottom: 10px;\n  display: flex;\n  justify-content: space-between;\n}\n\n.form-control {\n  max-width: 500px;\n}\n\n.text {\n  min-width: 500px !important;\n  display: block;\n}\n\n.editor {\n  height: 90vh !important;\n  width: 100%;\n}\n\n.editorResult {\n  height: 200px !important;\n  width: 100%;\n}\n\n.card {\n  white-space: pre-line !important;\n}\n\n.codeRun {\n  font-size: 14px !important;\n  padding: .75rem 1.25rem;\n\n}\n\n.serviceOk {\n  font-size: 14px;\n  color: #0b51c5;\n  display: block;\n  white-space: pre-line;\n}\n\n.runTimeout {\n  padding: .75rem 1.25rem;\n  font-size: 12px;\n  color: #9d1e15;\n  display: block;\n  white-space: pre-line;\n}\n\n.queuePosition {\n  padding: .75rem 1.25rem;\n  font-size: 12px;\n  color: #28a745;\n  display: block;\n  white-space: pre-line;\n}\n\n.selection {\n  color: #0a0a0a;\n  font-size: 14px;\n}\n\n.md-fab-bottom-right{\n  position: fixed !important;\n  right: 100px; /* Add this and change value to set the margin you want */\n  bottom: 10px;\n  z-index: 9999;\n}\n\n.btn-primary {\n  color: #000;\n  background-color: #fff !important;\n  border-color: #007bff;\n}\n\n.btn-primary.focus, .btn-primary:focus {\n  color: #000 !important;\n}\n\n.nav-tabs {\n  width: 80%;\n}\n\n.chat {\n  border: 2px solid #dedede;\n  background-color: #f1f1f1;\n  border-radius: 5px;\n  margin: 10px 0;\n  width: 95%;\n}\n\n.darker {\n  border-color: #ccc;\n  background-color: #ddd;\n}\n\n.user {\n  border-color: rgba(131, 129, 129, 0.3);\n  background-color: rgba(19, 19, 19, 0.3);\n}\n\n.chat::after {\n  content: \"\";\n  clear: both;\n  display: table;\n}\n\n.chatIcon {\n  float: left;\n  max-width: 10px;\n  width: 100%;\n  margin-right: 20px;\n  border-radius: 50%;\n}\n\n.chatIcon-right {\n  float: right;\n  margin-right: 10px;\n}\n\n.time-right {\n  float: right;\n  color: #aaa;\n  margin-left: 10px;\n}\n\n.time-left {\n  float: left;\n  color: #999;\n  margin-right: 10px;\n}\n\n.time-user {\n  float: left;\n  color: rgba(19, 19, 19, 0.3);\n  margin-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29kZS9jb2RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHdCQUF3QjtFQUN4QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsdUJBQXVCOztBQUV6Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixlQUFlO0VBQ2YsY0FBYztFQUNkLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsZUFBZTtFQUNmLGNBQWM7RUFDZCxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsWUFBWSxFQUFFLHlEQUF5RDtFQUN2RSxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztFQUNYLGlDQUFpQztFQUNqQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHNDQUFzQztFQUN0Qyx1Q0FBdUM7QUFDekM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsV0FBVztFQUNYLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvZGUvY29kZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGVzIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuXG4uY29kZUJ1dHRvbnMge1xuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLnRleHQge1xuICBtaW4td2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZWRpdG9yIHtcbiAgaGVpZ2h0OiA5MHZoICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZWRpdG9yUmVzdWx0IHtcbiAgaGVpZ2h0OiAyMDBweCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNhcmQge1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcbn1cblxuLmNvZGVSdW4ge1xuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcbiAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XG5cbn1cblxuLnNlcnZpY2VPayB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6ICMwYjUxYzU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG5cbi5ydW5UaW1lb3V0IHtcbiAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICM5ZDFlMTU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG5cbi5xdWV1ZVBvc2l0aW9uIHtcbiAgcGFkZGluZzogLjc1cmVtIDEuMjVyZW07XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgY29sb3I6ICMyOGE3NDU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG5cbi5zZWxlY3Rpb24ge1xuICBjb2xvcjogIzBhMGEwYTtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG4ubWQtZmFiLWJvdHRvbS1yaWdodHtcbiAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gIHJpZ2h0OiAxMDBweDsgLyogQWRkIHRoaXMgYW5kIGNoYW5nZSB2YWx1ZSB0byBzZXQgdGhlIG1hcmdpbiB5b3Ugd2FudCAqL1xuICBib3R0b206IDEwcHg7XG4gIHotaW5kZXg6IDk5OTk7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIGNvbG9yOiAjMDAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1jb2xvcjogIzAwN2JmZjtcbn1cblxuLmJ0bi1wcmltYXJ5LmZvY3VzLCAuYnRuLXByaW1hcnk6Zm9jdXMge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuXG4ubmF2LXRhYnMge1xuICB3aWR0aDogODAlO1xufVxuXG4uY2hhdCB7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNkZWRlZGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIHdpZHRoOiA5NSU7XG59XG5cbi5kYXJrZXIge1xuICBib3JkZXItY29sb3I6ICNjY2M7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkZGQ7XG59XG5cbi51c2VyIHtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDEzMSwgMTI5LCAxMjksIDAuMyk7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTksIDE5LCAxOSwgMC4zKTtcbn1cblxuLmNoYXQ6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY2xlYXI6IGJvdGg7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG4uY2hhdEljb24ge1xuICBmbG9hdDogbGVmdDtcbiAgbWF4LXdpZHRoOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG5cbi5jaGF0SWNvbi1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4udGltZS1yaWdodCB7XG4gIGZsb2F0OiByaWdodDtcbiAgY29sb3I6ICNhYWE7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4udGltZS1sZWZ0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi50aW1lLXVzZXIge1xuICBmbG9hdDogbGVmdDtcbiAgY29sb3I6IHJnYmEoMTksIDE5LCAxOSwgMC4zKTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/code/code.component.ts":
/*!****************************************!*\
  !*** ./src/app/code/code.component.ts ***!
  \****************************************/
/*! exports provided: CodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CodeComponent", function() { return CodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _services_socket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_services/socket.service */ "./src/app/_services/socket.service.ts");
/* harmony import */ var _convergencelabs_monaco_collab_ext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @convergencelabs/monaco-collab-ext */ "./node_modules/@convergencelabs/monaco-collab-ext/lib/index.js");
/* harmony import */ var _convergencelabs_monaco_collab_ext__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_convergencelabs_monaco_collab_ext__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ts-md5/dist/md5 */ "./node_modules/ts-md5/dist/md5.js");
/* harmony import */ var ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _control_code_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_control/code.control */ "./src/app/_control/code.control.ts");
/* harmony import */ var _control_node_control__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../_control/node.control */ "./src/app/_control/node.control.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../_control/util.control */ "./src/app/_control/util.control.ts");













var CodeComponent = /** @class */ (function () {
    function CodeComponent(host, formBuilder, router, _eventEmitter, socket, _code, _node, _util, _document) {
        this.host = host;
        this.formBuilder = formBuilder;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this.socket = socket;
        this._code = _code;
        this._node = _node;
        this._util = _util;
        this._document = _document;
        this.progress = { loaded: 0, total: 0 };
        this.submitted = false;
        this.editorOptions = {
            theme: 'vs-dark',
            language: 'c',
            automaticLayout: true,
            cursorSmoothCaretAnimation: true,
            fontSize: 12,
            suggest: true,
            tabCompletion: true,
            glyphMargin: true,
            minimap: {
                enabled: true,
                showSlider: "always",
            },
        };
        this.resultOptions = {
            theme: 'vs-dark',
            language: 'c',
            automaticLayout: true,
            readOnly: true,
        };
        this.load = 0;
        this.codePairUsers = {};
        this.hideMsgUpdateCode = 0;
        this.receivedMsg = 0;
        this.countLines = 0;
        this.firstUpdate = 1;
        this.chatList = [];
        this.groupHistory = { ESelection: 0, EInsert: 0, EDelete: 0, EReplace: 0 };
        this.codeInGroup = -1;
        this.response = {};
        this.responseTemp = {};
        this.responseQueue = {};
        this.responseFile = {};
        this.code = {};
        this.codeTemp = {};
        this.hostInfo = {};
        this.containers = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.exercise = {};
        this.files = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        this.fileName = '';
        this.navActive = 1;
        this.queue = false;
        this.tryACode = "0";
        this.numberOfCPUs = 0;
        this.msgOverLoad = "";
        this.hasChoiceCompile = 0;
        this.host.checkSessionID(this.constructor.name);
    }
    CodeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.codeForm = this.formBuilder.group({
            CompCmd: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
                ]
            ],
            CompArgs: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1),
                ]
            ],
            ExecCmd: ['', []],
            ExecArgs: ['', []],
            ExtraArgs: ['', []],
            File: ['', []],
            NumberProc: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1),
                ]
            ],
            run: ['', []],
        }, {});
        this.disabled = false;
        this.btnCompile = "Compile and Run";
        this.userId = Number(this.host.getSessionID().Id);
        this.exercise.Id = parseInt(window.localStorage.getItem("ExerciseId"));
        //Getting value from child CodeComponent
        this.subCode = this._eventEmitter.code.subscribe(function (data) {
            _this.code = data;
            if (_this.code.Command) {
                var r = _this.code.Command.split("|");
                _this.loadParameters = r[0];
                _this.fc['CompCmd'].setValue(r[1]);
                _this.fc['CompArgs'].setValue(r[2]);
                _this.fc['ExecCmd'].setValue(r[3]);
                _this.fc['ExecArgs'].setValue(r[4]);
                _this.fc['ExtraArgs'].setValue(r[5]);
                _this.fc['NumberProc'].setValue(r[6]);
                if (_this.loadParameters != "Manual") {
                    _this.fc['CompCmd'].disable();
                    _this.fc['CompArgs'].disable();
                    _this.fc['ExecCmd'].disable();
                    _this.fc['ExecArgs'].disable();
                }
            }
        });
        this.tryACode = window.localStorage.getItem("TryACode");
        if (this.tryACode)
            this.codeInGroup = 0;
        if (this.exercise.Id)
            this.getFiles();
        //Getting value from child CodeComponent
        this.subExercise = this._eventEmitter.exercise.subscribe(function (data) {
            _this.exercise = data;
            if (data && _this.exercise && _this.exercise.Id) {
                window.localStorage.setItem("ExerciseId", _this.exercise.Id.toString());
                _this.getFiles();
            }
            if (_this.exercise['gId']) {
                _this.getHistoryGroup();
                if (_this.exercise['gId'] > 0 && !_this.subSocket) {
                    _this.codeInGroup = 1;
                    _this.openSocket(_this.exercise.Code);
                    var c = {};
                    c.IdGroup = _this.exercise['gId'];
                    c.IdUser = _this.userId;
                    c.UserName = _this.host.getSessionID().Name;
                    c.Option = "getCode";
                    _this.socketSend(c);
                }
            }
            else {
                _this.codeInGroup = 0;
            }
        });
        this.getActiveNodes();
        this.getHostInfo();
        this.getFilesCodeExecution();
        //this.codeForm.disable();
    };
    CodeComponent.prototype.onInit = function (editor) {
        var _this = this;
        this.editor = editor;
        this.load = 1;
        var existCondition = setInterval(function () {
            if (_this.exercise) {
                _this.codePair();
                _this.getUsersCoding();
                clearInterval(existCondition);
            }
        }, 1000);
        this.codeTempMode = "auto";
        this.cleanDecorations = false;
    };
    CodeComponent.prototype.ngOnDestroy = function () {
        this.subCode.unsubscribe();
        this.subExercise.unsubscribe();
        if (this.subSocket)
            this.subSocket.unsubscribe();
    };
    CodeComponent.prototype.onQueue = function () {
        this.queue = !this.queue;
    };
    CodeComponent.prototype.onChange = function (editor) {
        //Save in temp code
        if (!this.exercise['gId'])
            this.codeTemp.IdUser = this.userId;
        if (this.exercise['gId'])
            this.codeTemp.IdGroup = Number(this.exercise['gId']);
        this.codeTemp.Code = this.code.Code;
        this.codeTemp.Command = this.code.Command;
    };
    CodeComponent.prototype.setTheme = function (val) {
        this.editor._themeService.setTheme(val);
    };
    CodeComponent.prototype.onKeydownEvent = function (editor) {
        //To autodetect de compiler language
        this.setAutoParameters(this.code.Code);
        if (this.cleanDecorations == true) {
            this.editor.getModel().setValue(this.code.Code);
            this.cleanDecorations = false;
        }
        if (!this.lastUpdate)
            this.lastUpdate = Math.floor(Date.now() / 1000);
        if ((Math.floor(Date.now() / 1000) - this.lastUpdate) > 5) {
            this.lastUpdate = Math.floor(Date.now() / 1000);
            if (this.codeTempMode == "auto")
                this.updateCodeTemp();
            this.getUsersCoding();
        }
        if ((Math.floor(Date.now() / 1000) - this.otherUserTyping) < 5) {
            this._util.setResponse(this.nameUserTyping + ' is typing... ' +
                'Please, wait 3 sec and try again!', 'error', null, null);
            var c = {};
            c.IdGroup = this.exercise['gId'];
            c.IdUser = this.userId;
            c.UserName = this.host.getSessionID().Name;
            c.Option = "sendCode";
            c.Hash = "";
            this.socketSend(c);
            this.receivedMsg = 1;
            this.hideMsgUpdateCode = 1;
        }
    };
    CodeComponent.prototype.setErrorCode = function (error) {
        var sl = 0;
        var sc = 0;
        var ed = this.editor;
        error.split('\n').forEach(function (line) {
            var regexp = line.match('(main.c):([0-9]+):([0-9]+)');
            if (error && Array.isArray(regexp) &&
                regexp.length >= 3 && regexp[1] == "main.c") {
                if (Number(regexp[2]) > 0)
                    sl = regexp[2];
                if (Number(regexp[3]) > 0)
                    sc = regexp[3];
                ed.deltaDecorations([], [
                    {
                        range: new monaco.Range(sl, sc, sl, sc),
                        options: {
                            isWholeLine: true,
                            className: 'myContentClass',
                            glyphMarginClassName: 'myGlyphMarginClass',
                            glyphMarginHoverMessage: { value: line },
                        }
                    }
                ]);
            }
        });
        this.editor = ed;
        this.cleanDecorations = true;
    };
    CodeComponent.prototype.setFont = function (val) {
        var font = { "fontSize": val };
        this.editor.updateOptions(font);
    };
    CodeComponent.prototype.setMiniMap = function (val) {
        this.editor.updateOptions({ minimap: { enabled: val } });
    };
    CodeComponent.prototype.getHostInfo = function () {
        var _this = this;
        var params = [];
        var request = {
            Request: "hostInfo",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(function (data) {
            _this.hostInfo = data;
        });
    };
    CodeComponent.prototype.getSysInfo = function () {
        var _this = this;
        var params = [];
        var request = {
            Request: "sysInfo",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(function (data) {
            _this.sysInfo = data['Param'];
            if (data['Request'] != 'ok')
                _this._util.setResponse('There was a problem executing the request.', 'info', null, null);
            else
                _this._util.setResponse('Data found.', 'ok', null, null);
        });
    };
    CodeComponent.prototype.getFilesCodeExecution = function () {
        var _this = this;
        var params = [];
        var request = {
            Request: "filesCodeExecution",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(function (data) {
            _this.fileCodeExecution = data;
        });
    };
    Object.defineProperty(CodeComponent.prototype, "fc", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.codeForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CodeComponent.prototype.getCodeExample = function (example) {
        var _this = this;
        this.hasChoiceCompile = 1;
        this.host.CodeExample(example)
            .then(function (result) {
            _this.receivedMsg = 0;
            var contentManager = new _convergencelabs_monaco_collab_ext__WEBPACK_IMPORTED_MODULE_7__["EditorContentManager"]({
                editor: _this.editor,
            });
            contentManager.replace(0, result.length + 1, result);
        })
            .catch(function (error) {
            console.log('Error Getting Data: ', error);
        });
        this.OpMode = 'vs-dark';
        this.codeExample = example;
        this.setParameters(this.codeExample);
    };
    CodeComponent.prototype.setFileCodeExecution = function (file) {
        var ExtraArgs = this.fc['ExtraArgs'].value.toString();
        var ExtraArgsTemp = ExtraArgs.split(" ");
        if (ExtraArgsTemp.indexOf(file) > -1) {
            return;
        }
        else {
            if (ExtraArgsTemp.indexOf("<") == -1)
                ExtraArgs += "<";
            ExtraArgs += " " + file;
        }
        this.fc['ExtraArgs'].setValue(ExtraArgs);
    };
    CodeComponent.prototype.setFileParameters = function (tec) {
        this.hasChoiceCompile = 1;
        var ExtraArgs = this.fc['ExtraArgs'].value.toString();
        var ExtraArgsTemp = ExtraArgs.split(" ");
        //check if all files in the selected box are in the input ExtraArgs
        if (this.files.value) {
            for (var i = 0; i < this.files.value.length; i++) {
                if (ExtraArgsTemp.indexOf(this.files.value[i]) > -1) {
                    continue;
                }
                else {
                    if (i == 0 && ExtraArgsTemp.indexOf("<") == -1)
                        ExtraArgs += "<";
                    ExtraArgs += " " + this.files.value[i];
                }
            }
        }
        // Removing key index from exerciseFiles
        if (this.exerciseFiles) {
            var exerciseFilesTemp = [];
            for (var i = 0; i < this.exerciseFiles.length; i++) {
                exerciseFilesTemp[i] = this.exerciseFiles[i]['FileName'];
            }
            //check if all files in the input ExtraArgs are in the selected box
            ExtraArgsTemp = ExtraArgs.split(" ");
            ExtraArgs = "";
            for (var i = 0; i < ExtraArgsTemp.length; i++) {
                if (exerciseFilesTemp.indexOf(ExtraArgsTemp[i]) > -1) {
                    if (this.files.value.indexOf(ExtraArgsTemp[i]) > -1) {
                        ExtraArgs += " " + ExtraArgsTemp[i];
                    }
                }
                else {
                    ExtraArgs += " " + ExtraArgsTemp[i];
                }
            }
        }
        // Check if file uploaded from input File
        ExtraArgsTemp = ExtraArgs.split(" ");
        if (this.fileName != null) {
            if (ExtraArgsTemp.indexOf(this.fileName) === -1) {
                if (ExtraArgsTemp.indexOf("<") == -1)
                    ExtraArgs += "<";
                ExtraArgs += " " + this.fileName;
            }
        }
        this.fc['ExtraArgs'].setValue(ExtraArgs);
        this.setParameters(tec);
    };
    CodeComponent.prototype.setManualParameters = function (tec) {
        this.hasChoiceCompile = 1;
        this.setParameters(tec);
    };
    CodeComponent.prototype.setAutoParameters = function (code) {
        if (!code)
            return;
        var c = 0;
        if (code.indexOf('mpi.h') !== -1) {
            this.setParameters('MPI');
            c += 1;
        }
        if (code.indexOf('omp.h') !== -1) {
            this.setParameters('OpenMP');
            c += 1;
        }
        if (c == 2) {
            this.setParameters('OpenMP_MPI');
        }
        if (code.indexOf('cuda_runtime.h') !== -1) {
            this.setParameters('CUDA');
        }
    };
    CodeComponent.prototype.updateParameters = function () {
        //console.log("updateParameters");
        this.code.Command = this.loadParameters + "|";
        this.code.Command += this.fc['CompCmd'].value.toString() + "|";
        this.code.Command += this.fc['CompArgs'].value.toString() + "|";
        this.code.Command += this.fc['ExecCmd'].value.toString() + "|";
        this.code.Command += this.fc['ExecArgs'].value.toString() + "|";
        this.code.Command += this.fc['ExtraArgs'].value.toString() + "|";
        if (this.fc['NumberProc'].value > 0)
            this.code.Command += this.fc['NumberProc'].value.toString();
        this._eventEmitter.setCode(this.code);
    };
    CodeComponent.prototype.setParameters = function (tec) {
        if (tec != '')
            this.loadParameters = tec;
        if (this.loadParameters != "Manual") {
            this.fc['CompCmd'].disable();
            this.fc['CompArgs'].disable();
            this.fc['ExecCmd'].disable();
            this.fc['ExecArgs'].disable();
        }
        else {
            this.fc['CompCmd'].enable();
            this.fc['CompArgs'].enable();
            this.fc['ExecCmd'].enable();
            this.fc['ExecArgs'].enable();
        }
        var nProcess;
        if (this.fc['NumberProc'].value > 0)
            nProcess = this.fc['NumberProc'].value.toString();
        if (nProcess > this.nodes.cpu) {
            this.msgOverLoad = "Attention, you are allocating more processes than " +
                "the total number of CPUs in the cluster. " +
                "Performance degradation may occur.";
        }
        else {
            this.msgOverLoad = "";
        }
        var hosts;
        if (this.nodes)
            hosts = "-host " + this.nodes.join(",");
        if (this.containers.value != null) {
            if (this.containers.value[0]) {
                hosts = "-host " + this.containers.value;
            }
        }
        var CompCmd = this.fc['CompCmd'].value.toString();
        var CompArgs = this.fc['CompArgs'].value.toString();
        var ExecCmd = this.fc['ExecCmd'].value.toString();
        var ExecArgs = this.fc['ExecArgs'].value.toString();
        var ExtraArgs = this.fc['ExtraArgs'].value.toString();
        if (this.loadParameters == "MPI") {
            CompCmd = "mpic++";
            CompArgs = "main.c -o main";
            ExecCmd = "mpiexec";
            ExecArgs = "-n " + nProcess + " " + hosts + " main";
        }
        if (this.loadParameters == "OpenMP_MPI") {
            CompCmd = "mpic++";
            CompArgs = "-fopenmp main.c -o main";
            ExecCmd = "mpiexec";
            ExecArgs = "-n " + nProcess + " " + hosts + " main";
        }
        if (this.loadParameters == "OpenMP") {
            CompCmd = "g++";
            CompArgs = "-fopenmp main.c -o main";
            ExecCmd = "main";
            this.fc['ExecArgs'].setValidators([,]);
            this.fc['ExecArgs'].updateValueAndValidity();
            ExecArgs = "";
        }
        if (this.loadParameters == "CUDA") {
            CompCmd = "nvcc";
            CompArgs = "main.cu -o main";
            ExecCmd = "main";
            this.fc['ExecArgs'].setValidators([,]);
            this.fc['ExecArgs'].updateValueAndValidity();
            ExecArgs = "";
        }
        CompCmd = CompCmd.replace(/\s{2,}/g, ' ');
        CompArgs = CompArgs.replace(/\s{2,}/g, ' ');
        ExecCmd = ExecCmd.replace(/\s{2,}/g, ' ');
        ExecArgs = ExecArgs.replace(/\s{2,}/g, ' ');
        ExtraArgs = ExtraArgs.replace(/\s{2,}/g, ' ');
        this.fc['CompCmd'].setValue(CompCmd.trim());
        this.fc['CompArgs'].setValue(CompArgs.trim());
        this.fc['ExecCmd'].setValue(ExecCmd.trim());
        this.fc['ExecArgs'].setValue(ExecArgs.trim());
        this.fc['ExtraArgs'].setValue(ExtraArgs.trim());
        this.updateParameters();
    };
    CodeComponent.prototype.resetFormFile = function () {
        this.responseFile = {};
    };
    CodeComponent.prototype.uploadFile = function () {
        //this.response = {} as ResponseStr;
        var _this = this;
        if (this.exercise.MaxTimeout == 0 || !this.exercise.MaxTimeout)
            this.exercise.MaxTimeout = this.hostInfo.CodeMaxFileSize;
        var filedata = this.el.nativeElement.files[0];
        if (parseInt(filedata.size) > this.exercise.MaxFileSize) {
            this.responseFile.Name = "error";
            this.responseFile.Status = "The file is larger than the limit set for the exercise. \n" +
                "\nFile: " + filedata.name +
                "\nSize: " + this._util.formatBytes(filedata.size) +
                "\nMaximum allowed size: " + this._util.formatBytes(this.exercise.MaxFileSize);
            return;
        }
        var param = {};
        param.Name = "Code";
        param.Value = this.host.getSessionID().Token;
        this.host.uploadFileData(filedata, param)
            .subscribe(function (data) {
            if (data.type == 1 && data.loaded && data.total) {
                _this.progress.loaded = data.loaded;
                _this.progress.total = data.total;
            }
            else if (data.body) {
                //console.log("Data Uploaded");
                //console.log(data.body);
                _this.setFileParameters('');
                _this.responseFile.Name = "ok";
                _this.responseFile.Status = "File uploaded successfully. " +
                    "You can call the file directly in your code by the name: " + filedata.name;
                _this.getFilesCodeExecution();
            }
            if (data.loaded == data.total) {
                //console.log(filedata);
                _this.fileName = filedata['name'];
                //this.load = 0;
                if (data.body && data['body']['Name'] == "error") {
                    _this.responseFile = data['body'];
                }
            }
        }, function (error) { return console.log(error); });
    };
    CodeComponent.prototype.download = function (file) {
        //console.log(file);
        this.host.downloadFileData(file, 'ExerciseFiles');
    };
    CodeComponent.prototype.onClick = function (mode) {
        this.btnCompile = "Compile";
        this.fc['ExecCmd'].setValidators([,]);
        this.fc['ExecCmd'].updateValueAndValidity();
        if (mode == "Compile and Run") {
            this.fc['ExecCmd'].setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(1)]);
            this.fc['ExecCmd'].updateValueAndValidity();
        }
        this.btnCompile = mode;
        return;
    };
    CodeComponent.prototype.checkFileParameters = function () {
        var e_1, _a, e_2, _b;
        //Check if user include fopen in his code but forget of input the file
        if (this.code.Code && this.code.Code.indexOf('fopen') !== -1 &&
            (!this.fileName && !this.files.value)) {
            this._util.setResponse("Attention, you are called a file in your code. " +
                "Go to the Files tab and send or select the correct file.", 'info', null, null);
            return false;
        }
        if (this.exerciseFiles) {
            //Select automatically the filename in the select box
            var extraArguments = this.fc['ExtraArgs'].value.split(" ");
            var getFilesName = [];
            try {
                for (var extraArguments_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](extraArguments), extraArguments_1_1 = extraArguments_1.next(); !extraArguments_1_1.done; extraArguments_1_1 = extraArguments_1.next()) {
                    var va = extraArguments_1_1.value;
                    try {
                        for (var _c = (e_2 = void 0, tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](this.exerciseFiles)), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var ve = _d.value;
                            if (va == ve['FileName'])
                                getFilesName.push(va);
                        }
                    }
                    catch (e_2_1) { e_2 = { error: e_2_1 }; }
                    finally {
                        try {
                            if (_d && !_d.done && (_b = _c.return)) _b.call(_c);
                        }
                        finally { if (e_2) throw e_2.error; }
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (extraArguments_1_1 && !extraArguments_1_1.done && (_a = extraArguments_1.return)) _a.call(extraArguments_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            if (getFilesName.length > 0)
                this.files.setValue(getFilesName);
        }
    };
    CodeComponent.prototype.onSubmitCode = function () {
        this.checkFileParameters();
        this.re.nativeElement.scrollIntoView({ behavior: "smooth" });
        this.submitted = true;
        // stop here if form is invalid
        if (this.codeForm.invalid) {
            this.navActive = 1;
            return;
        }
        this.navActive = 4;
        this.codeForm.disable();
        this.disabled = true;
        var container = {};
        //console.log(this.code.MaxTimeout ,this.hostInfo.CodeExecTimeout);
        if (this.exercise.MaxTimeout == 0 || !this.exercise.MaxTimeout)
            this.exercise.MaxTimeout = this.hostInfo.CodeExecTimeout;
        this.codePacket = {
            Token: this.host.getSessionID().Token,
            Code: this.code.Code,
            NumberProc: this.fc['NumberProc'].value.toString(),
            CompArgs: this.fc['CompArgs'].value.toString(),
            ExecArgs: this.fc['ExecArgs'].value.toString() + " " + this.fc['ExtraArgs'].value.toString(),
            ExecCmd: this.fc['ExecCmd'].value.toString(),
            CompCmd: this.fc['CompCmd'].value.toString(),
            FileName: this.fileName,
            Container: this.containers.value,
            Files: this.files.value,
            Queue: this.queue.toString(),
            Sequence: "",
            IdExercise: this.exercise.Id.toString(),
            MaxTimeout: (this.exercise.MaxTimeout + 2).toString(),
            Next: "",
        };
        //console.log(this.codePacket);
        this.sequence = ['queue', 'compile'];
        if (this.btnCompile == "Compile and Run") {
            this.sequence.push('run');
            this.codePacket.Next = "run";
        }
        this.btnCompileTemp = this.btnCompile;
        this.btnCompile = "wait please...";
        this.code.Result = "";
        this.response['Name'] = 'ok';
        this.response['Status'] = "Please wait, we are sending your request to the server.";
        this.programStatus = "is running...";
        if (this.exercise['gId']) {
            var c = {};
            c.IdGroup = this.exercise['gId'];
            c.IdUser = this.userId;
            c.UserName = this.host.getSessionID().Name;
            c.Option = "submit";
            c.Hash = "";
            this.socketSend(c);
        }
        this.managerStatus();
    };
    CodeComponent.prototype.getActiveNodes = function () {
        var _this = this;
        var params = [];
        var request = {
            Request: "activeNodes",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(function (data) {
            _this.numberOfCPUs = _this._node.nodes(data, 'cpu');
            _this.fc['NumberProc'].setValue(_this.numberOfCPUs);
            _this.nodes = _this._node.nodes(data, 'nodes');
            ;
        });
    };
    CodeComponent.prototype.getFiles = function () {
        var _this = this;
        var filter = [];
        filter.push({ Name: "Id", Value: this.exercise.Id.toString() });
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-answer-files",
            Filter: filter,
        };
        var fileTemp = [];
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            _this.exerciseFiles = data;
        });
    };
    CodeComponent.prototype.showQueue = function () {
        var _this = this;
        var params = [];
        params.push({ Name: "", Value: this.codePacket.Token });
        var request = {
            Request: "queueCheck",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(function (data) {
            //console.log(this.codePacket.Token, data);
            _this.responseQueue = data;
        });
    };
    CodeComponent.prototype.runCode = function () {
        var _this = this;
        //console.log("CodeEditor | runCode", this.codePacket);
        this.host.request(this.codePacket, 'runExecCode')
            .subscribe(function (data) {
            _this.responseTemp = data;
            _this.response = _this.responseTemp;
        });
    };
    CodeComponent.prototype.managerStatus = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var wait, wait_queue, wait_compile, wait_run, sequence, timeout, c;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wait = true;
                        wait_queue = false;
                        wait_compile = false;
                        wait_run = false;
                        sequence = "queue";
                        timeout = false;
                        //console.log(this.code);
                        this.programTimeout = this.exercise.MaxTimeout;
                        this.command = "";
                        this.code.Event = "";
                        this.response.Command = "";
                        this.responseQueue = {};
                        _a.label = 1;
                    case 1:
                        if (!wait) return [3 /*break*/, 3];
                        //Let's refresh the Session Timeout
                        this._eventEmitter.setLoginChange({ Name: "RefreshSession", Status: "" });
                        if (timeout == true) {
                            if (this.responseQueue.Count > 5)
                                this.programTimeout = this.exercise.MaxTimeout - this.responseQueue.Count;
                            else
                                this.programTimeout--;
                        }
                        if (wait_queue && this.responseQueue.Position > 1)
                            this.queueStatus = "getting position...";
                        if (sequence == "queue") {
                            if (!wait_queue) {
                                this.responseTemp = {};
                                this.codePacket.Sequence = "queue";
                                this.runCode();
                                wait_queue = true;
                            }
                            if (wait_queue) {
                                if (this.responseTemp['Name'] == "ok") {
                                    this.showQueue();
                                    if (this.responseQueue.Position)
                                        this.queueStatus = this.responseQueue.Position.toString();
                                }
                                if (this.responseQueue.Position == 1) {
                                    sequence = "compile";
                                }
                            }
                        }
                        return [4 /*yield*/, this._util.delay(1000)];
                    case 2:
                        _a.sent();
                        if (sequence == "compile") {
                            if (!wait_compile) {
                                this.responseTemp = {};
                                this.codePacket.Sequence = "compile";
                                this.runCode();
                                wait_compile = true;
                            }
                            if (wait_compile) {
                                if (this.responseTemp['Name']) {
                                    //SHOW COMPILE RESULTS
                                    this.code.Event = this.response.Command + " (time " + this.response.CompTime + ")";
                                    if (this.fileName)
                                        this.code.Event += "\nFilename: " + this.fileName;
                                    this.command += this.code.Event;
                                    this.code.Event += "\n" + this.response.Status;
                                    this._eventEmitter.setCode(this.code);
                                    if (this.responseTemp['Name'] == 'ok') {
                                        if (this.sequence.includes("run"))
                                            sequence = "run";
                                        else
                                            wait = false;
                                    }
                                }
                            }
                        }
                        if (sequence == "run") {
                            if (!wait_run) {
                                this.responseTemp = {};
                                this.codePacket.Sequence = "run";
                                this.runCode();
                                this.responseQueue = {};
                                wait_run = true;
                            }
                            if (wait_run) {
                                timeout = true;
                                this.showQueue();
                                //console.log(this.responseTemp);
                                if (this.responseTemp['Name']) {
                                    //SHOW RUN RESULTS
                                    this.msgProcess = this._code.showProcess(this.responseTemp.Output);
                                    this.code.Result = this.responseTemp.Output;
                                    this.code.CheckCount = this.responseTemp.CheckCount;
                                    this.code.CheckList = this.responseTemp.CheckList;
                                    this.code.ExecTime = this.responseTemp.ExecTime;
                                    this.code.Event = this.response.Command + " (time " + this.response.ExecTime + ")";
                                    this.command += "\n\n" + this.code.Event;
                                    this.code.Event += "\n" + this.response.Status;
                                    this.code['DIFF'] = true;
                                    this._eventEmitter.setCode(this.code);
                                    if (this.exercise['gId']) {
                                        c = {};
                                        c.IdGroup = this.exercise['gId'];
                                        c.IdUser = this.userId;
                                        c.UserName = this.host.getSessionID().Name;
                                        c.Option = "result";
                                        if (this.code.Result == this.exercise.Result)
                                            c.Text = "ok";
                                        else
                                            c.Text = "info";
                                        c.Hash = "";
                                        this.socketSend(c);
                                    }
                                    if (this.responseTemp['Name'] == 'ok') {
                                        this.responseTemp.Status = "Code copied to result area.";
                                    }
                                    wait = false;
                                }
                            }
                        }
                        if (this.responseTemp['Name'] == 'error' || this.responseTemp['Name'] == 'info') {
                            wait = false;
                            this.programTimeout = 0;
                            this.setErrorCode(this.responseTemp['Status']);
                        }
                        return [3 /*break*/, 1];
                    case 3:
                        this.queueStatus = "done!";
                        this.codeForm.enable();
                        this.disabled = false;
                        this.btnCompile = this.btnCompileTemp;
                        this.sequence = [''];
                        this.programStatus = "output";
                        this.programTimeout = 0;
                        if (!this.exercise.Id) {
                            this._util.setResponse("Execution finished.", '', 'ok', null);
                        }
                        return [4 /*yield*/, this._util.delay(1000)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CodeComponent.prototype.codeTempCall = function (option) {
        if (option == "load") {
            this.getCodeTemp("replace");
        }
        if (option == "none")
            this.codeTempMode = "none";
        if (option == "auto")
            this.codeTempMode = "auto";
    };
    CodeComponent.prototype.getCodeTemp = function (option) {
        var _this = this;
        var filter = [];
        var table = 'code-temp-user';
        if (this.exercise['gId']) {
            filter.push({ Name: "GroupId", Value: String(this.exercise['gId']) });
            table = 'code-temp-group';
        }
        else {
            filter.push({ Name: "UserId", Value: String(this.host.getSessionID().Id) });
        }
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: table,
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            if (data[0]) {
                if (option == "replace") {
                    var contentManager = new _convergencelabs_monaco_collab_ext__WEBPACK_IMPORTED_MODULE_7__["EditorContentManager"]({
                        editor: _this.editor,
                    });
                    contentManager.replace(0, data[0].Code.length + 1, data[0].Code);
                    _this.code.Command = data[0].Command;
                    if (_this.hasChoiceCompile == 0)
                        _this.setAutoParameters(_this.code.Code);
                }
                _this.codeTemp.Id = data[0].Id;
            }
        });
    };
    CodeComponent.prototype.updateCodeTemp = function () {
        var _this = this;
        var filter = [];
        filter.push({ Name: "Id", Value: String(this.codeTemp.Id) });
        var requestDB = {
            Operation: "update",
            TableData: this.codeTemp,
            Custom: "CodeTemp",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            if (data['Name'] == "ok" && parseInt(data['Status']) >= 1)
                _this.codeTemp.Id = data['Status'];
        });
    };
    /////// CODE PAIR IMPLEMENTATION //////////
    CodeComponent.prototype.socketSend = function (c) {
        var _this = this;
        if (!this.exercise['gId'])
            return;
        if (!this.socket.isOpen()) {
            var ret = this._util.openModal('Connection failed', 'You are not connected to the group. ' +
                'Press F5 to reload the page.', 'F5', 'Cancel', '');
            ret.afterClosed().subscribe(function (data) {
                if (data && data['button'] == 'YES')
                    _this._document.defaultView.location.reload();
            });
        }
        this.socket.send(c);
    };
    CodeComponent.prototype.getHistoryGroup = function () {
        var _this = this;
        var filter = [];
        filter.push({ Name: "UserId", Value: String(this.host.getSessionID().Id) });
        filter.push({ Name: "GroupId", Value: String(this.exercise['gId']) });
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: 'group-history-user',
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            if (data[0])
                _this.groupHistory = data[0];
        });
    };
    CodeComponent.prototype.setHistoryGroup = function () {
        var _this = this;
        if (!this.exercise['gId'])
            return;
        if (!this.lastHistGroup)
            this.lastHistGroup = Math.floor(Date.now() / 1000);
        if ((Math.floor(Date.now() / 1000) - this.lastHistGroup) > 5) {
            this.lastHistGroup = Math.floor(Date.now() / 1000);
            var filter = [];
            this.groupHistory.IdUser = Number(this.host.getSessionID().Id);
            this.groupHistory.IdGroup = this.exercise['gId'];
            var requestDB = {
                Operation: "update",
                TableData: this.groupHistory,
                Custom: "GroupHistory",
                Filter: filter,
            };
            this.host.request(requestDB, 'FDBRequest')
                .subscribe(function (data) {
                if (data['Name'] == "ok" && parseInt(data['Status']) >= 1)
                    _this.groupHistory.Id = data['Status'];
            });
            //console.log(requestDB, this.groupHistory);
        }
    };
    CodeComponent.prototype.sendMsgChat = function () {
        if (!this.exercise['gId'])
            return;
        var c = {};
        c.IdGroup = this.exercise['gId'];
        c.IdUser = this.userId;
        c.UserName = this.host.getSessionID().Name;
        c.Option = "chatMsg";
        c.Text = this.chatMsg;
        c.Hash = "";
        this.chatMsg = "";
        this.socketSend(c);
    };
    CodeComponent.prototype.getUsersCoding = function () {
        var _this = this;
        if (!this.exercise['gId'])
            return;
        var params = [];
        params.push({ Name: "IdGroup", Value: this.exercise['gId'].toString() });
        var request = {
            Request: "activeSocket",
            Param: params,
        };
        //console.log("CurrentNodes | request: ", request);
        this.host.request(request, 'simpleRequest')
            .subscribe(function (data) {
            if (data) {
                _this.codePairUsers = data[0].Users;
            }
            //console.log(data);
        });
    };
    CodeComponent.prototype.codePair = function () {
        var _this = this;
        if (!this.exercise['gId'])
            return;
        this._util.openModal('Screen sharing', 'You are playing in a group exercise. ' +
            'The code screen is shared among all online group users.' +
            '\n\nRules: \n' +
            '#1. One user can edit the code at a time. \n' +
            '#2. After a user finishes editing, the system automatically releases it to the other users in the group. \n' +
            '#3. The first one to start editing wins the turn. \n' +
            '#4. The user name tag is set in the editor when some character is typed.\n', 'Close', '', '');
        var c = {};
        c.IdGroup = this.exercise['gId'];
        c.IdUser = this.userId;
        c.UserName = this.host.getSessionID().Name;
        if (this.firstUpdate == 1) {
            c.Option = "sendCode";
            c.Hash = "";
            this.socketSend(c);
            //console.log("getCodeUpdated Request First");
            this.firstUpdate = 0;
        }
        this.editor.onDidChangeCursorPosition(function (e) {
            c.Option = "position";
            c.Offset = _this.editor.getModel().getOffsetAt(e.position);
            _this.offsetLine = e.position['lineNumber'];
            _this.offsetCol = e.position['column'];
            _this.socketSend(c);
        });
        this.editor.onDidChangeCursorSelection(function (e) {
            c.Option = "selection";
            c.StartOffset = _this.editor.getModel().getOffsetAt(e.selection.getStartPosition());
            c.EndOffset = _this.editor.getModel().getOffsetAt(e.selection.getEndPosition());
            _this.groupHistory.ESelection++;
            _this.setHistoryGroup();
            _this.socketSend(c);
            //console.log(c);
        });
        this.editor.onDidChangeModelContent(function (e) {
            e.changes.forEach(function (change) {
                if (_this.receivedMsg == 0) {
                    var rangeOffset = change.rangeOffset, rangeLength = change.rangeLength, text = change.text;
                    if (text.length > 0 && rangeLength === 0) {
                        c.Option = "insert";
                        c.Index = rangeOffset;
                        c.Text = text;
                        var md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_8__["Md5"]();
                        c.Hash = String(md5.appendStr(_this.editor.getModel().getValue()).end());
                        //console.log(this.editor.getModel().getValue(), c);
                        _this.groupHistory.EInsert++;
                        _this.setHistoryGroup();
                        _this.socketSend(c);
                    }
                    else if (text.length > 0 && rangeLength > 0) {
                        c.Option = "replace";
                        c.Index = rangeOffset;
                        c.Text = text;
                        c.Length = rangeLength;
                        var md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_8__["Md5"]();
                        c.Hash = String(md5.appendStr(_this.editor.getModel().getValue()).end());
                        //console.log(c);
                        _this.groupHistory.EReplace++;
                        _this.setHistoryGroup();
                        _this.socketSend(c);
                    }
                    else if (text.length === 0 && rangeLength > 0) {
                        c.Option = "delete";
                        c.Index = rangeOffset;
                        c.Length = rangeLength;
                        var md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_8__["Md5"]();
                        c.Hash = String(md5.appendStr(_this.editor.getModel().getValue()).end());
                        //console.log(c);
                        _this.groupHistory.EDelete++;
                        _this.setHistoryGroup();
                        _this.socketSend(c);
                    }
                    else {
                        //console.log(change);
                    }
                }
                _this.receivedMsg = 0;
            });
        });
    };
    CodeComponent.prototype.openSocket = function (code) {
        var _this = this;
        if (!this.exercise['gId'])
            return;
        if (this.editor && code) {
            var contentManager = new _convergencelabs_monaco_collab_ext__WEBPACK_IMPORTED_MODULE_7__["EditorContentManager"]({
                editor: this.editor,
            });
            contentManager.replace(0, code.length + 1, code);
        }
        this.cursorEditors = new Map([]);
        this.selectionEditors = new Map([]);
        this.subSocket = this.socket.getEventListener().subscribe({
            next: function (event) {
                if (event['data']) {
                    var codePair = {};
                    codePair = event['data'];
                    //console.log(codePair);
                    if (!_this.editor || !codePair.IdGroup)
                        return;
                    if (!codePair.IdUser || !_this.host.getSessionID().Id)
                        return;
                    if (_this.exercise['gId'] != codePair.IdGroup)
                        return;
                    if (codePair.Option == "chatMsg") {
                        _this.chatList.push({
                            IdUser: codePair.IdUser,
                            Name: codePair.UserName, Text: codePair.Text
                        });
                        return;
                    }
                    var c = {};
                    c.IdGroup = _this.exercise['gId'];
                    c.IdUser = _this.userId;
                    c.UserName = _this.host.getSessionID().Name;
                    if (codePair.IdUser != _this.userId) {
                        var remoteCursorManager = void 0;
                        var remoteSelectionManager = void 0;
                        var cursor = void 0;
                        var selection = void 0;
                        var color = _this._code.getColor();
                        if (!_this.cursorEditors.has(String(codePair.IdUser))) {
                            var sourceUser = {
                                id: String(codePair.IdUser),
                                label: codePair.UserName,
                                color: color
                            };
                            if (_this.editor) {
                                remoteCursorManager = new _convergencelabs_monaco_collab_ext__WEBPACK_IMPORTED_MODULE_7__["RemoteCursorManager"]({
                                    editor: _this.editor,
                                    tooltips: true,
                                    tooltipDuration: 2
                                });
                                cursor = remoteCursorManager.addCursor(sourceUser.id, sourceUser.color, sourceUser.label);
                                _this.cursorEditors.set(String(codePair.IdUser), cursor);
                                remoteSelectionManager = new _convergencelabs_monaco_collab_ext__WEBPACK_IMPORTED_MODULE_7__["RemoteSelectionManager"]({ editor: _this.editor });
                                selection = remoteSelectionManager.addSelection(String(codePair.IdUser), color);
                                _this.selectionEditors.set(String(codePair.IdUser), selection);
                            }
                        }
                        if (codePair.Option == "position" && _this.cursorEditors.has(String(codePair.IdUser)))
                            _this.cursorEditors.get(String(codePair.IdUser)).setOffset(codePair.Offset);
                        if (codePair.Option == "selection" && _this.selectionEditors.has(String(codePair.IdUser))) {
                            _this.selectionEditors.get(String(codePair.IdUser)).setOffsets(codePair.StartOffset, codePair.EndOffset);
                            _this.selectionEditors.get(String(codePair.IdUser)).show();
                        }
                        if (codePair.Option == "insert") {
                            _this.receivedMsg = 1;
                            var contentManager = new _convergencelabs_monaco_collab_ext__WEBPACK_IMPORTED_MODULE_7__["EditorContentManager"]({
                                editor: _this.editor,
                            });
                            contentManager.insert(codePair.Offset, codePair.Text);
                        }
                        if (codePair.Option == "replace") {
                            _this.receivedMsg = 1;
                            var contentManager = new _convergencelabs_monaco_collab_ext__WEBPACK_IMPORTED_MODULE_7__["EditorContentManager"]({
                                editor: _this.editor,
                            });
                            contentManager.replace(codePair.Index, codePair.Length, codePair.Text);
                        }
                        if (codePair.Option == "delete") {
                            _this.receivedMsg = 1;
                            var contentManager = new _convergencelabs_monaco_collab_ext__WEBPACK_IMPORTED_MODULE_7__["EditorContentManager"]({
                                editor: _this.editor,
                            });
                            contentManager.delete(codePair.Index, codePair.Length);
                        }
                        if (codePair.Option == "sendCode") {
                            c.Option = "codeUpdated";
                            codePair.Hash = "";
                            c.StartOffset = _this.offsetLine;
                            c.EndOffset = _this.offsetCol;
                            c.Text = _this.editor.getModel().getValue();
                            _this.socketSend(c);
                            //console.log("sendCode", c.Hash);
                        }
                        if (codePair.Option == "codeUpdated") {
                            _this.receivedMsg = 1;
                            if (!_this.hideMsgUpdateCode) {
                                _this._util.setResponse('The system is waiting for synchronization with your group.', 'Rsync', 'info', null);
                            }
                            //this.editor.getModel().setValue(codePair.Text);
                            var contentManager = new _convergencelabs_monaco_collab_ext__WEBPACK_IMPORTED_MODULE_7__["EditorContentManager"]({
                                editor: _this.editor,
                            });
                            contentManager.replace(0, codePair.Text.length + 1, codePair.Text);
                            //this.editor.setPosition({
                            //    lineNumber: codePair.StartOffset,
                            //    column: codePair.EndOffset
                            //});
                            //this.editor.focus();
                            _this.hideMsgUpdateCode = 0;
                            codePair.Hash = "";
                        }
                        if (codePair.Option == "result") {
                            var res = "not equal";
                            if (codePair.Text == "ok")
                                res = "equal";
                            _this._util.setResponse(c.UserName + " just ran a code. Result: " + res, '', codePair.Text, null);
                        }
                        if (codePair.Option == "submit") {
                            _this._util.setResponse(c.UserName + " Test submit a code right now. " +
                                "In a few moments, we will show the result.", '', 'info', null);
                        }
                        if (codePair.Option == "insert"
                            || codePair.Option == "replace"
                            || codePair.Option == "delete") {
                            _this.otherUserTyping = Math.floor(Date.now() / 1000);
                            _this.receivedMsg = 1;
                            _this.nameUserTyping = codePair.UserName;
                        }
                        var md5 = new ts_md5_dist_md5__WEBPACK_IMPORTED_MODULE_8__["Md5"]();
                        var s1 = String(md5.appendStr(_this.editor.getModel().getValue()).end());
                        if (codePair.Hash && codePair.Hash != s1
                            && (codePair.Option == "insert" || codePair.Option == "replace" ||
                                codePair.Option == "delete")) {
                            c.Option = "codeUpdated";
                            c.Text = _this.editor.getModel().getValue();
                            _this.socketSend(c);
                            //console.log("getCodeUpdated Request");
                            return;
                        }
                    }
                }
            }
        });
    };
    CodeComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"] },
        { type: _services_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"] },
        { type: _control_code_control__WEBPACK_IMPORTED_MODULE_9__["CodeControl"] },
        { type: _control_node_control__WEBPACK_IMPORTED_MODULE_10__["NodeControl"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_12__["UtilControl"] },
        { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"],] }] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("ResultsTab", { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], CodeComponent.prototype, "re", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectfile'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CodeComponent.prototype, "el", void 0);
    CodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-code',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./code.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/code/code.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./code.component.css */ "./src/app/code/code.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](8, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_11__["DOCUMENT"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"],
            _services_socket_service__WEBPACK_IMPORTED_MODULE_6__["SocketService"],
            _control_code_control__WEBPACK_IMPORTED_MODULE_9__["CodeControl"],
            _control_node_control__WEBPACK_IMPORTED_MODULE_10__["NodeControl"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_12__["UtilControl"],
            Document])
    ], CodeComponent);
    return CodeComponent;
}());



/***/ }),

/***/ "./src/app/host-credentials/host-credentials.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/host-credentials/host-credentials.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login {\n  float: left;\n  margin-left: 10px;\n}\n\n.loginMain {\n  font-size: 14px;\n  width: 150px;\n}\n\n.session {\n  font-size: 12px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zdC1jcmVkZW50aWFscy9ob3N0LWNyZWRlbnRpYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFDQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9ob3N0LWNyZWRlbnRpYWxzL2hvc3QtY3JlZGVudGlhbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbiB7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLmxvZ2luTWFpbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuLnNlc3Npb24ge1xuICBmb250LXNpemU6IDEycHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/host-credentials/host-credentials.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/host-credentials/host-credentials.component.ts ***!
  \****************************************************************/
/*! exports provided: HostCredentialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostCredentialsComponent", function() { return HostCredentialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _ng_idle_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-idle/core */ "./node_modules/@ng-idle/core/__ivy_ngcc__/fesm5/ng-idle-core.js");
/* harmony import */ var _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-idle/keepalive */ "./node_modules/@ng-idle/keepalive/__ivy_ngcc__/fesm5/ng-idle-keepalive.js");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_control/util.control */ "./src/app/_control/util.control.ts");








var HostCredentialsComponent = /** @class */ (function () {
    function HostCredentialsComponent(host, _eventEmitter, router, idle, keepalive, _util) {
        var _this = this;
        this.host = host;
        this._eventEmitter = _eventEmitter;
        this.router = router;
        this.idle = idle;
        this.keepalive = keepalive;
        this._util = _util;
        this.idleState = '30 m';
        this.lastPing = null;
        this.submitted = false;
        this.response = {};
        this.userSession = {};
        idle.setIdle(1800);
        idle.setTimeout(60);
        idle.setInterrupts(_ng_idle_core__WEBPACK_IMPORTED_MODULE_5__["DEFAULT_INTERRUPTSOURCES"]);
        idle.onIdleEnd.subscribe(function () {
            _this.idleState = 'No longer idle.';
            _this.reset();
        });
        idle.onTimeout.subscribe(function () {
            _this.logout();
            _this.idleState = 'Timed out!';
        });
        idle.onIdleStart.subscribe(function () {
            _this.idleState = 'You\'ve gone idle!';
            //console.log(this.idleState);
        });
        idle.onTimeoutWarning.subscribe(function (countdown) {
            _this.idleState = countdown + ' seconds!';
        });
        keepalive.interval(30);
        keepalive.onPing.subscribe(function () { return _this.lastPing = new Date(); });
        this.reset();
    }
    HostCredentialsComponent.prototype.reset = function () {
        this.idle.watch();
        this.idleState = '30 m';
    };
    HostCredentialsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSession = this.host.getSessionID();
        //Getting value from child HostCredentials
        this.subLogin = this._eventEmitter.loginChange.subscribe(function (data) {
            //console.log('App Root | _eventEmitter.SendMsgAppRoot  ', data);
            if (data['Name'] == "error") {
                _this.host.killSessionID();
                _this.userSession = {};
                _this.registerForm.reset();
                _this.router.navigate(['welcome']);
            }
            if (data['Name'] == "stopSession") {
                _this.idleState = "stopped";
                _this.idle.stop();
            }
            if (data['Name'] == "startSession") {
                _this.reset();
            }
            _this.userSession = _this.host.getSessionID();
        });
    };
    HostCredentialsComponent.prototype.ngOnDestroy = function () {
        this.subLogin.unsubscribe();
    };
    Object.defineProperty(HostCredentialsComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    // LOGIN
    HostCredentialsComponent.prototype.setRoute = function (val) {
        this.router.navigate([val]);
    };
    HostCredentialsComponent.prototype.addUser = function () {
        window.localStorage.removeItem("editUserId");
        this.host.setSessionID('', 'SelfRegistration', '||NPZ8fvABP5pKSwU3');
        this.router.navigate(['add-user']);
    };
    ;
    HostCredentialsComponent.prototype.logout = function () {
        var _this = this;
        var params = [];
        params.push({ Name: "", Value: this.userSession.Owner });
        var request = {
            Request: "logout",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(function (data) {
            _this.response = data;
            _this._util.setResponse(_this.response['Status'], _this.response['Name'], null, null);
            if (_this.response['Name'] == "ok") {
                _this.host.killSessionID();
                _this.userSession = {};
                _this._eventEmitter.setLoginChange({ Name: "stopSession", Status: "" });
                _this.router.navigate(['welcome']);
            }
        });
    };
    HostCredentialsComponent.prototype.getValidateSession = function () {
        var Auth = this.host.getSessionID();
        this.host.setSessionID(Auth.Owner, Auth.Module, Auth.Id + "|" + Auth.Password + "|" + Auth.Token);
        //console.log("getValidateSession");
    };
    // Let's validate session after 60 seconds
    HostCredentialsComponent.prototype.managerStatus = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (false) {}
                        return [4 /*yield*/, this._util.delay(60000)];
                    case 1:
                        _a.sent();
                        this.getValidateSession();
                        return [3 /*break*/, 0];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    HostCredentialsComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _ng_idle_core__WEBPACK_IMPORTED_MODULE_5__["Idle"] },
        { type: _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_6__["Keepalive"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_7__["UtilControl"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hostInfo'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HostCredentialsComponent.prototype, "hostInfo", void 0);
    HostCredentialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-host-credentials',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./host-credentials.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/host-credentials/host-credentials.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./host-credentials.component.css */ "./src/app/host-credentials/host-credentials.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _ng_idle_core__WEBPACK_IMPORTED_MODULE_5__["Idle"],
            _ng_idle_keepalive__WEBPACK_IMPORTED_MODULE_6__["Keepalive"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_7__["UtilControl"]])
    ], HostCredentialsComponent);
    return HostCredentialsComponent;
}());



/***/ }),

/***/ "./src/app/host-credentials/host-login/host-login.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/host-credentials/host-login/host-login.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loginMain {\n  display: flex; flex-wrap: wrap; align-content: center;\n}\n\n.PrimaryNav a, .PrimaryNav a.active, .PrimaryNav .nolink {\n  color: #fff;\n  cursor: pointer;\n  font-weight: 600;\n  text-decoration: none;\n}\n\n.Button--redOutline {\n  color: #fff;\n  background-color: transparent;\n  text-transform: uppercase;\n  border: 2px solid #e22866;\n}\n\n.Button--red, .Body .node-application #FormWrap .okta-form input[type=\"submit\"], .Body .node-application #FormWrap .okta-form textarea[type=\"submit\"], .Body .node-application #FormWrap .okta-form select[type=\"submit\"], .Body .block-marketo #FormWrap .okta-form input[type=\"submit\"], .Body .block-marketo #FormWrap .okta-form textarea[type=\"submit\"], .Body .block-marketo #FormWrap .okta-form select[type=\"submit\"] {\n  color: #fff;\n  background-color: #e22866;\n  text-transform: uppercase;\n}\n\n.host{\n  display: flex;\n}\n\n.name {\n  width: 180px;\n}\n\n.exit {\n  flex-grow: 1;\n}\n\n.addUser {\n  width: 30px;\n  margin-top: 10px;\n}\n\ninput {\n  margin-bottom: 0.2em;\n}\n\n.card-body {\n  padding: 0.5rem;\n}\n\n.form-group {\n  margin-bottom: 0rem;\n}\n\n.col-5 {\n  max-width: 20%;\n}\n\n.userStatus {\n  padding: 0.5em;\n}\n\n.userStatus span {\n  display: block;\n  font-size: 12px;\n}\n\n.session {\n  font-size: 12px;\n}\n\n.ok {\n  color: #155724;\n  background-color: #d4edda;\n  border-color: #c3e6cb;\n}\n\n.info {\n  color: #856404;\n  background-color: #fff3cd;\n  border-color: #ffeeba;\n}\n\n.error {\n  color: #721c24;\n  background-color: #f8d7da;\n  border-color: #f5c6cb;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zdC1jcmVkZW50aWFscy9ob3N0LWxvZ2luL2hvc3QtbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWEsRUFBRSxlQUFlLEVBQUUscUJBQXFCO0FBQ3ZEOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvaG9zdC1jcmVkZW50aWFscy9ob3N0LWxvZ2luL2hvc3QtbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbk1haW4ge1xuICBkaXNwbGF5OiBmbGV4OyBmbGV4LXdyYXA6IHdyYXA7IGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLlByaW1hcnlOYXYgYSwgLlByaW1hcnlOYXYgYS5hY3RpdmUsIC5QcmltYXJ5TmF2IC5ub2xpbmsge1xuICBjb2xvcjogI2ZmZjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBmb250LXdlaWdodDogNjAwO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5CdXR0b24tLXJlZE91dGxpbmUge1xuICBjb2xvcjogI2ZmZjtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlMjI4NjY7XG59XG4uQnV0dG9uLS1yZWQsIC5Cb2R5IC5ub2RlLWFwcGxpY2F0aW9uICNGb3JtV3JhcCAub2t0YS1mb3JtIGlucHV0W3R5cGU9XCJzdWJtaXRcIl0sIC5Cb2R5IC5ub2RlLWFwcGxpY2F0aW9uICNGb3JtV3JhcCAub2t0YS1mb3JtIHRleHRhcmVhW3R5cGU9XCJzdWJtaXRcIl0sIC5Cb2R5IC5ub2RlLWFwcGxpY2F0aW9uICNGb3JtV3JhcCAub2t0YS1mb3JtIHNlbGVjdFt0eXBlPVwic3VibWl0XCJdLCAuQm9keSAuYmxvY2stbWFya2V0byAjRm9ybVdyYXAgLm9rdGEtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdLCAuQm9keSAuYmxvY2stbWFya2V0byAjRm9ybVdyYXAgLm9rdGEtZm9ybSB0ZXh0YXJlYVt0eXBlPVwic3VibWl0XCJdLCAuQm9keSAuYmxvY2stbWFya2V0byAjRm9ybVdyYXAgLm9rdGEtZm9ybSBzZWxlY3RbdHlwZT1cInN1Ym1pdFwiXSB7XG4gIGNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTIyODY2O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uaG9zdHtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLm5hbWUge1xuICB3aWR0aDogMTgwcHg7XG59XG5cbi5leGl0IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4uYWRkVXNlciB7XG4gIHdpZHRoOiAzMHB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pbnB1dCB7XG4gIG1hcmdpbi1ib3R0b206IDAuMmVtO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcGFkZGluZzogMC41cmVtO1xufVxuXG4uZm9ybS1ncm91cCB7XG4gIG1hcmdpbi1ib3R0b206IDByZW07XG59XG5cbi5jb2wtNSB7XG4gIG1heC13aWR0aDogMjAlO1xufVxuXG4udXNlclN0YXR1cyB7XG4gIHBhZGRpbmc6IDAuNWVtO1xufVxuXG4udXNlclN0YXR1cyBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLnNlc3Npb24ge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5vayB7XG4gIGNvbG9yOiAjMTU1NzI0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDRlZGRhO1xuICBib3JkZXItY29sb3I6ICNjM2U2Y2I7XG59XG5cbi5pbmZvIHtcbiAgY29sb3I6ICM4NTY0MDQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYzY2Q7XG4gIGJvcmRlci1jb2xvcjogI2ZmZWViYTtcbn1cblxuLmVycm9yIHtcbiAgY29sb3I6ICM3MjFjMjQ7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOGQ3ZGE7XG4gIGJvcmRlci1jb2xvcjogI2Y1YzZjYjtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/host-credentials/host-login/host-login.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/host-credentials/host-login/host-login.component.ts ***!
  \*********************************************************************/
/*! exports provided: HostLoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostLoginComponent", function() { return HostLoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_control/util.control */ "./src/app/_control/util.control.ts");







var HostLoginComponent = /** @class */ (function () {
    function HostLoginComponent(formBuilder, host, _eventEmitter, router, _util) {
        this.formBuilder = formBuilder;
        this.host = host;
        this._eventEmitter = _eventEmitter;
        this.router = router;
        this._util = _util;
        this.submitted = false;
        this.userSession = {};
        this.hostInfo = {};
        this.response = {};
    }
    HostLoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this.formBuilder.group({
            owner: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                ]
            ],
            password: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3),
                ]
            ],
        }, {});
        this.userSession = this.host.getSessionID();
        this.subHostInfo = this._eventEmitter.hostInfo.subscribe(function (data) {
            _this.hostInfo = data;
        });
    };
    HostLoginComponent.prototype.ngOnDestroy = function () {
        this.subHostInfo.unsubscribe();
    };
    Object.defineProperty(HostLoginComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    HostLoginComponent.prototype.checkChangePass = function () {
        var _this = this;
        var filter = [];
        filter.push({ Name: "Email", Value: this.userSession.Owner });
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "host-credentials",
            Filter: filter,
        };
        window.localStorage.setItem("ForceChangePass", "0");
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            if (data && data[0]['ForceChangePass'] == "1") {
                window.localStorage.setItem("ForceChangePass", "1");
                _this.router.navigate(['edit-user']);
                //console.log(data, window.localStorage.getItem("ForceChangePass"));
            }
        });
    };
    ;
    HostLoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this._util.setResponse(this.response['Status'], this.response['Name'], null, null);
        var hostInfoTemp = this.hostInfo;
        hostInfoTemp['Owner'] = this.registerForm.get('owner').value;
        hostInfoTemp['Password'] = this.registerForm.get('password').value;
        this.host.request(hostInfoTemp, 'setLogin')
            .subscribe(function (data) {
            _this.response = data;
            if (_this.response['Name'] == "Admin" || _this.response['Name'] == "User") {
                _this.host.setSessionID(hostInfoTemp['Owner'], _this.response['Name'], _this.response['Status']);
                _this.userSession = _this.host.getSessionID();
                //console.log("App Host-Credential | userSession: ", data);
                _this._util.setResponse("Login successfully!", "ok", null, null);
                // We will notify the root app about new login
                _this._eventEmitter.setLoginChange({ Name: "startSession", Status: "" });
                _this.checkChangePass();
                _this.router.navigate(['welcome']);
            }
            else {
                _this._util.setResponse(_this.response['Status'], _this.response['Name'], null, null);
                //this.registerForm.reset();
                //this.f['owner'].clearValidators();
                //this.f['owner'].setErrors({ 'generic': this.response['Status'] });
                return;
            }
        });
    };
    HostLoginComponent.prototype.recoverPassword = function () {
        var _this = this;
        this.response = {};
        var input = [];
        input.push({ Model: "", Name: "email", Type: "text", Title: "email account" });
        var ret = this._util.openModal('Recover Password', 'Please enter your login email. \n' +
            'If the account exists in our database, we will send you an email for password recovery.', 'Yes', 'No', input);
        ret.afterClosed().subscribe(function (data) {
            if (data && data['button'] == 'YES') {
                if (!data['input'][0]['Model'] ||
                    data['input'][0]['Model'] == "") {
                    _this.response['Name'] = "error";
                    _this.response['Status'] = "Please, type a email account...";
                    return;
                }
                var email = void 0;
                if (data['input'][0] && data['input'][0]['Model'] != "")
                    email = data['input'][0]['Model'];
                var params = [];
                params.push({ Name: "email", Value: email });
                var request = {
                    Request: "recoverPassword",
                    Param: params,
                };
                _this._util.setResponse("Sending request for password recovery...", "info", null, null);
                _this.host.request(request, 'simpleRequest')
                    .subscribe(function (data) {
                    _this.response = data;
                    //console.log('Host-Credentials: data ', data);
                    _this._util.setResponse(_this.response['Status'], _this.response['Name'], null, null);
                });
            }
        });
    };
    HostLoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_6__["UtilControl"] }
    ]; };
    HostLoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-host-login',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./host-login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/host-credentials/host-login/host-login.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./host-login.component.css */ "./src/app/host-credentials/host-login/host-login.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_6__["UtilControl"]])
    ], HostLoginComponent);
    return HostLoginComponent;
}());



/***/ }),

/***/ "./src/app/host-status/host-status.component.css":
/*!*******************************************************!*\
  !*** ./src/app/host-status/host-status.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tags {\n  min-height: 150px;\n  min-width: 20vw;\n  max-width: calc(100vw - 35px);\n}\n\n.icon {\n  width: 60px;\n  height: 60px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9zdC1zdGF0dXMvaG9zdC1zdGF0dXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2hvc3Qtc3RhdHVzL2hvc3Qtc3RhdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFncyB7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBtaW4td2lkdGg6IDIwdnc7XG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDM1cHgpO1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/host-status/host-status.component.ts":
/*!******************************************************!*\
  !*** ./src/app/host-status/host-status.component.ts ***!
  \******************************************************/
/*! exports provided: HostStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostStatusComponent", function() { return HostStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var HostStatusComponent = /** @class */ (function () {
    function HostStatusComponent() {
    }
    HostStatusComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hostInfo'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HostStatusComponent.prototype, "hostInfo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('hostConnection'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], HostStatusComponent.prototype, "hostConnection", void 0);
    HostStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-host-status',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./host-status.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/host-status/host-status.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./host-status.component.css */ "./src/app/host-status/host-status.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HostStatusComponent);
    return HostStatusComponent;
}());



/***/ }),

/***/ "./src/app/menu-classroom/classroom/classroom-edit/classroom-edit.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/classroom-edit/classroom-edit.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control {\n  max-width: 500px;\n}\n\n.text {\n  min-width: 500px !important;\n  display: block;\n}\n\n.date {\n  min-width: 100px !important;\n  display: block;\n}\n\n.number {\n  min-width: 50px !important;\n  display: block;\n}\n\n.card {\n  white-space: pre-line !important;\n}\n\nul, li {list-style-type: none;}\n\n.ck-editor__editable_inline {\n  min-height: 500px;\n}\n\n.icon {\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jbGFzc3Jvb20vY2xhc3Nyb29tL2NsYXNzcm9vbS1lZGl0L2NsYXNzcm9vbS1lZGl0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxnQ0FBZ0M7QUFDbEM7O0FBR0EsUUFBUSxxQkFBcUIsQ0FBQzs7QUFHOUI7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbWVudS1jbGFzc3Jvb20vY2xhc3Nyb29tL2NsYXNzcm9vbS1lZGl0L2NsYXNzcm9vbS1lZGl0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybS1jb250cm9sIHtcbiAgbWF4LXdpZHRoOiA1MDBweDtcbn1cblxuLnRleHQge1xuICBtaW4td2lkdGg6IDUwMHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGF0ZSB7XG4gIG1pbi13aWR0aDogMTAwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5udW1iZXIge1xuICBtaW4td2lkdGg6IDUwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5jYXJkIHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG59XG5cblxudWwsIGxpIHtsaXN0LXN0eWxlLXR5cGU6IG5vbmU7fVxuXG5cbi5jay1lZGl0b3JfX2VkaXRhYmxlX2lubGluZSB7XG4gIG1pbi1oZWlnaHQ6IDUwMHB4O1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/menu-classroom/classroom/classroom-edit/classroom-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/classroom-edit/classroom-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ClassroomEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassroomEditComponent", function() { return ClassroomEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/dialog.es5.js");
/* harmony import */ var _haifahrul_ckeditor5_build_rich__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @haifahrul/ckeditor5-build-rich */ "./node_modules/@haifahrul/ckeditor5-build-rich/build/ckeditor.js");
/* harmony import */ var _haifahrul_ckeditor5_build_rich__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_haifahrul_ckeditor5_build_rich__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_control/util.control */ "./src/app/_control/util.control.ts");









var ClassroomEditComponent = /** @class */ (function () {
    function ClassroomEditComponent(host, dialog, formBuilder, router, _eventEmitter, _util) {
        this.host = host;
        this.dialog = dialog;
        this.formBuilder = formBuilder;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._util = _util;
        this.Editor = _haifahrul_ckeditor5_build_rich__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.config = {
            toolbar: {
                items: [
                    'heading', '|',
                    'alignment', '|',
                    'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
                    'link', '|',
                    'bulletedList', 'numberedList', 'todoList',
                    '-',
                    'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', '|',
                    'code', 'codeBlock', '|',
                    'Smiley', 'insertTable', '|',
                    'outdent', 'indent', '|',
                    'uploadImage', 'blockQuote', '|',
                    'undo', 'redo'
                ],
                shouldNotGroupWhenFull: true,
            },
            language: 'id',
            image: {
                toolbar: [
                    'imageTextAlternative',
                    'imageStyle:full',
                    'imageStyle:side'
                ]
            },
        };
        this.submitted = false;
        this.responseEdit = {};
        this.classroom = {};
        this.host.checkSessionID(this.constructor.name);
    }
    ClassroomEditComponent.prototype.ngOnInit = function () {
        this.editForm = this.formBuilder.group({
            Id: [''],
            IdUser: [''],
            Enabled: [''],
            Name: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                ]
            ],
            KeyAccess: ['',
                [,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60),
                ]
            ],
            Description: ['', []],
            MaxStudents: ['',
                [,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100),
                ]
            ],
        });
        this.classroomId = Number(window.localStorage.getItem("ClassroomId"));
        window.localStorage.setItem('waitLoadComponent', 'N');
        if (this.classroomId)
            this.getClassroom();
    };
    ClassroomEditComponent.prototype.setRoute = function (val) {
        this.getClassroom();
        this.waitLoadComponent();
        this.router.navigate([val]);
    };
    ClassroomEditComponent.prototype.getClassroom = function () {
        var _this = this;
        var filter = [];
        filter.push({ Name: "Id", Value: String(this.classroomId) });
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "classroom-edit",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            if (!data)
                return;
            _this.editForm.setValue(data[0]);
            _this.classroom = data[0];
        });
    };
    Object.defineProperty(ClassroomEditComponent.prototype, "fe", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.editForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ClassroomEditComponent.prototype.waitLoadComponent = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var waitLoad, loop;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        waitLoad = 'N';
                        loop = true;
                        _a.label = 1;
                    case 1:
                        if (!loop) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.delay(100)];
                    case 2:
                        _a.sent();
                        if (waitLoad == 'S') {
                            loop = false;
                        }
                        waitLoad = window.localStorage.getItem("waitLoadComponent");
                        return [3 /*break*/, 1];
                    case 3:
                        this._eventEmitter.setClassroom(this.classroom);
                        return [2 /*return*/];
                }
            });
        });
    };
    ClassroomEditComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(true);
            }, ms);
        });
    };
    ClassroomEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.responseEdit = {};
        this.submitted = true;
        this.disabled = true;
        // stop here if form is invalid
        if (this.editForm.invalid) {
            return;
        }
        var filter = [];
        var requestDB = {
            Operation: "update",
            TableData: this.editForm.value,
            Custom: "Classroom",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            _this.responseEdit = data;
            if (!_this.classroomId && _this.responseEdit.Name == "ok" && parseInt(_this.responseEdit.Status) > 0) {
                _this.classroomId = Number(_this.responseEdit.Status);
                window.localStorage.setItem("ExerciseId", String(_this.classroomId));
                _this.responseEdit.Status = "Record inserted successfully.";
            }
            else if (_this.classroomId && _this.responseEdit.Name == "ok") {
                _this.responseEdit.Status = "Record updated successfully.";
            }
            _this.getClassroom();
            _this.waitLoadComponent();
            _this._util.setResponse(_this.responseEdit.Status, 'Go to Classroom', _this.responseEdit.Name, 'view-classroom');
        });
    };
    ClassroomEditComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_8__["UtilControl"] }
    ]; };
    ClassroomEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'classroom-app-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./classroom-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/classroom-edit/classroom-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./classroom-edit.component.css */ "./src/app/menu-classroom/classroom/classroom-edit/classroom-edit.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_8__["UtilControl"]])
    ], ClassroomEditComponent);
    return ClassroomEditComponent;
}());



/***/ }),

/***/ "./src/app/menu-classroom/classroom/classroom.component.css":
/*!******************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/classroom.component.css ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-container {\n    display: flex;\n    flex-direction: column;\n}\n\n.table td, .table th {\n    padding: initial !important;\n}\n\nbutton {\n    margin-left: 5px;\n}\n\n.mat-progress-bar{\n    height: 20px;\n}\n\n::ng-deep .mat-progress-bar-buffer {\n    background: #E4E8EB;\n}\n\n#checkBar {\n    border-radius: 2px;\n    width: 100px !important;\n}\n\n.icon {\n    width: 20px;\n    height: 20px;\n}\n\n.description {\n    font-size: 12px;\n}\n\n.Enabled {\n    color: #1231da;\n}\n\n.Disabled {\n    color: #9d1e15;\n}\n\n::ng-deep h1 {\n    font-size: 1.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jbGFzc3Jvb20vY2xhc3Nyb29tL2NsYXNzcm9vbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSw0QkFBNEI7QUFDaEMiLCJmaWxlIjoic3JjL2FwcC9tZW51LWNsYXNzcm9vbS9jbGFzc3Jvb20vY2xhc3Nyb29tLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRhYmxlIHRkLCAudGFibGUgdGgge1xuICAgIHBhZGRpbmc6IGluaXRpYWwgIWltcG9ydGFudDtcbn1cblxuYnV0dG9uIHtcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4ubWF0LXByb2dyZXNzLWJhcntcbiAgICBoZWlnaHQ6IDIwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICAgIGJhY2tncm91bmQ6ICNFNEU4RUI7XG59XG5cbiNjaGVja0JhciB7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbiB7XG4gICAgd2lkdGg6IDIwcHg7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLkVuYWJsZWQge1xuICAgIGNvbG9yOiAjMTIzMWRhO1xufVxuLkRpc2FibGVkIHtcbiAgICBjb2xvcjogIzlkMWUxNTtcbn1cblxuOjpuZy1kZWVwIGgxIHtcbiAgICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/menu-classroom/classroom/classroom.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/classroom.component.ts ***!
  \*****************************************************************/
/*! exports provided: ClassroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassroomComponent", function() { return ClassroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_control/util.control */ "./src/app/_control/util.control.ts");







var ClassroomComponent = /** @class */ (function () {
    function ClassroomComponent(host, router, _eventEmitter, _util, formBuilder) {
        this.host = host;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._util = _util;
        this.formBuilder = formBuilder;
        this.response = {};
        this.classroom = {};
        this.userSession = {};
        this.users = [];
        this.submitted = false;
        this.loadM = 0;
        this.loadC = 0;
        this.notSel = 1;
        this.host.checkSessionID(this.constructor.name);
    }
    ClassroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.registerForm = this.formBuilder.group({
            KeyAccess: ['',
                [,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(60),
                ]
            ],
        }, {});
        window.localStorage.removeItem("TryACode");
        window.localStorage.setItem('waitLoadComponent', 'S');
        this.subClassroom = this._eventEmitter.classroom.subscribe(function (data) {
            _this.notSel = 0;
            _this.userSession = _this.host.getSessionID();
            if (data && _this.userSession.Id) {
                _this.classroom = data;
                _this.classroomModule = data['Module'];
                _this.loadC = 1;
                if (_this.classroom.IdUser == Number(_this.userSession.Id))
                    window.localStorage.setItem("ClassModule", "Lecturer");
                _this.getUsers();
                //console.log("Classroom-component|_eventEmitter");
            }
        });
        this.notSel = 1;
    };
    ClassroomComponent.prototype.ngOnDestroy = function () {
        this.subClassroom.unsubscribe();
    };
    ClassroomComponent.prototype.editClassroom = function () {
        window.localStorage.setItem("ClassroomId", this.classroom.Id.toString());
        this.router.navigate(['edit-classroom']);
    };
    ;
    ClassroomComponent.prototype.disableClassroom = function () {
        var _this = this;
        var option = this.classroom.Enabled;
        var op;
        if (!option)
            op = 'enable';
        else
            op = 'disable';
        //console.log(this.classroom);
        var ret = this._util.openModal('Classroom: ' + this.classroom.Name, 'Confirm ' + op + ' the classroom?', 'Yes', 'No', '');
        ret.afterClosed().subscribe(function (data) {
            if (data['button'] == 'YES') {
                if (!option)
                    _this.classroom.Enabled = 1;
                else
                    _this.classroom.Enabled = 0;
                delete _this.classroom['Owner'];
                var filter = [];
                var requestDB = {
                    Operation: "update",
                    TableData: _this.classroom,
                    Custom: "Classroom",
                    Filter: filter,
                };
                _this.host.request(requestDB, 'FDBRequest')
                    .subscribe(function (data) {
                    _this.response = data;
                    if (_this.classroom.Id && _this.response.Name == "ok") {
                        _this.response.Status = "Record updated successfully.";
                    }
                    _this._util.setResponse(_this.response.Status, _this.response.Name, null, null);
                });
            }
        });
    };
    Object.defineProperty(ClassroomComponent.prototype, "fe", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ClassroomComponent.prototype.onSubmit = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.submitted = true;
        if (this.classroom.KeyAccess != this.fe['KeyAccess'].value) {
            this._util.setResponse('Invalid Key!', 'Error', 'error', null);
            return;
        }
        var c = { 'IdClassroom': this.classroom.Id, IdUser: this.userSession.Id, Module: 'Student' };
        var filter = [];
        var requestDB = {
            Operation: "update",
            TableData: c,
            Custom: "ClassMembers",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            _this.response = data;
            if (_this.response.Name == "ok") {
                _this.response.Status = "Record inserted successfully.";
                _this._eventEmitter.setClassroom(_this.classroom);
                _this.classroom['Module'] = "Student";
                _this.classroomModule = "Student";
            }
            _this._util.setResponse(_this.response.Status, 'Welcome!', _this.response.Name, 'view-classroom-manager');
        });
    };
    ClassroomComponent.prototype.getUsers = function () {
        var _this = this;
        var filter = [];
        filter.push({ Name: 'Id', Value: String(this.classroom.Id) });
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "users-classroom",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            if (data) {
                _this.users = data;
                data.forEach(function (u) {
                    if (u.Id == _this.host.getSessionID().Id &&
                        (u.Module == 'Lecturer' || u.Module == 'Assistant')) {
                        window.localStorage.setItem("ClassModule", u.Module);
                    }
                });
            }
            _this.loadM = 1;
        });
    };
    ClassroomComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_6__["UtilControl"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
    ]; };
    ClassroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-classroom',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./classroom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/classroom.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./classroom.component.css */ "./src/app/menu-classroom/classroom/classroom.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_6__["UtilControl"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], ClassroomComponent);
    return ClassroomComponent;
}());



/***/ }),

/***/ "./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.css":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.css ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".time {\n  color: #9d1e15;\n  font-size: 10px;\n}\n\n.form-control {\n  max-width: 500px;\n}\n\n.text {\n  min-width: 500px !important;\n  display: block;\n}\n\n.textarea {\n  min-width: 100% !important;\n  min-height: 200px !important;\n  display: block;\n}\n\n.diff {\n  text-align: center;\n  width: 100%;\n  overflow: hidden;\n}\n\n.diffAdmin {\n  width: 50% !important;\n  float: left;\n}\n\n.diffUser {\n  margin-left: 50%\n}\n\n.card {\n  white-space: pre-line !important;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jbGFzc3Jvb20vY2xhc3Nyb29tL2V4ZXJjaXNlcy9leGVyY2lzZXMtYW5zd2VyL2V4ZXJjaXNlcy1hbnN3ZXItZWRpdC9leGVyY2lzZXMtYW5zd2VyLWVkaXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsNEJBQTRCO0VBQzVCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtBQUNGOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvbWVudS1jbGFzc3Jvb20vY2xhc3Nyb29tL2V4ZXJjaXNlcy9leGVyY2lzZXMtYW5zd2VyL2V4ZXJjaXNlcy1hbnN3ZXItZWRpdC9leGVyY2lzZXMtYW5zd2VyLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aW1lIHtcbiAgY29sb3I6ICM5ZDFlMTU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmZvcm0tY29udHJvbCB7XG4gIG1heC13aWR0aDogNTAwcHg7XG59XG5cbi50ZXh0IHtcbiAgbWluLXdpZHRoOiA1MDBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnRleHRhcmVhIHtcbiAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4ICFpbXBvcnRhbnQ7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uZGlmZiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kaWZmQWRtaW4ge1xuICB3aWR0aDogNTAlICFpbXBvcnRhbnQ7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG4uZGlmZlVzZXIge1xuICBtYXJnaW4tbGVmdDogNTAlXG59XG5cbi5jYXJkIHtcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lICFpbXBvcnRhbnQ7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.ts":
/*!******************************************************************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.ts ***!
  \******************************************************************************************************************************/
/*! exports provided: ExercisesAnswerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesAnswerEditComponent", function() { return ExercisesAnswerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../_control/util.control */ "./src/app/_control/util.control.ts");








var ExercisesAnswerEditComponent = /** @class */ (function () {
    function ExercisesAnswerEditComponent(host, formBuilder, router, _eventEmitter, _util) {
        this.host = host;
        this.formBuilder = formBuilder;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._util = _util;
        this.resultOptions = {
            theme: 'vs-dark',
            language: 'c',
            automaticLayout: true,
            readOnly: true,
            ignoreTrimWhitespace: false,
        };
        this.responseEdit = {};
        this.exercise = {};
        this.answers = {};
        this.diff = '';
        this.exerciseId = '';
        this.answerId = '';
        this.code = {};
        this.userSession = {};
        this.history = [];
        this.load = 0;
        this.TotalEx = 0;
        this.Score = '';
        this.countDown = "";
        this.navActive = 1;
        this.originalModel = {
            code: '',
            language: 'text/plain'
        };
        this.modifiedModel = {
            code: '',
            language: 'text/plain',
        };
        this.host.checkSessionID(this.constructor.name);
    }
    ExercisesAnswerEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            Comment: [''],
        });
        this.userSession = this.host.getSessionID();
        this.exerciseId = window.localStorage.getItem("ExerciseId");
        this.answerId = window.localStorage.getItem("AnswerId");
        this.initA();
        //Getting value from child CodeComponent
        this.subCode = this._eventEmitter.code.subscribe(function (data) {
            _this.code = data;
            var message;
            var typeM;
            if (_this.code.Result && _this.originalModel.code) {
                _this.modifiedModel = { code: _this.code.Result, language: 'text/plain' };
                if (_this.originalModel.code == _this.modifiedModel.code) {
                    _this.diff = "EQUAL";
                    message = "Your result is the same as the result of the exercise. Congratulations!";
                    typeM = "ok";
                }
                else {
                    _this.diff = "NOT EQUAL";
                    message = "Your result is not the same as the result of the exercise!";
                    typeM = "error";
                }
                if (_this.code['DIFF']) {
                    var snackBarRef = _this._util.setResponse(message, 'Go to DIFF tab', typeM, null);
                    snackBarRef.onAction().subscribe(function () {
                        return _this.navActive = 3;
                    });
                    _this.code['DIFF'] = false;
                }
            }
            if (_this.code.Event)
                _this.history.push(_this.registerHistory(_this.code.Event));
        });
    };
    ExercisesAnswerEditComponent.prototype.ngOnDestroy = function () {
        this.subCode.unsubscribe();
    };
    ExercisesAnswerEditComponent.prototype.initA = function () {
        this.getAnswers();
        this.getExercise();
        if (this.answerId)
            this.getAnswer();
    };
    ExercisesAnswerEditComponent.prototype.getExercise = function () {
        var _this = this;
        var filter = [];
        var requestDB;
        filter.push({ Name: "Id", Value: this.exerciseId });
        filter.push({ Name: "IdUser", Value: String(this.userSession.Id) });
        var table = "exercises-list-user";
        if (this.userSession.Module == "Admin" || window.localStorage.getItem("ClassModule"))
            table = "exercises-list-admin";
        requestDB = {
            Operation: "view",
            TableData: null,
            Custom: table,
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            if (data[0]) {
                _this.originalModel = { code: data[0]['Result'], language: 'text/plain' };
                _this.exercise = data[0];
                _this.exIsExpired = _this.exercise['ExIsExpired'];
                _this._eventEmitter.setExercise(_this.exercise);
                _this.managerStatus();
            }
        });
    };
    ExercisesAnswerEditComponent.prototype.getAnswers = function () {
        var _this = this;
        var filter = [];
        var requestDB;
        filter.push({ Name: "Id", Value: this.exerciseId });
        filter.push({ Name: "IdUser", Value: String(this.userSession.Id) });
        var table = "exercises-answer-user";
        if (this.userSession.Module == "Admin" || window.localStorage.getItem("ClassModule")) {
            table = "exercises-answer-admin";
        }
        requestDB = {
            Operation: "view",
            TableData: null,
            Custom: table,
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            if (data[0]) {
                _this.answers = data[0];
                _this.TotalEx = parseInt(data[0]['TotalEx']);
                _this.Score = data[0]['Score'];
                if (_this.answers['Name'])
                    _this.answerName = _this.answers['Name'];
                if (_this.answers['gName'])
                    _this.answerName = _this.answers['gName'];
            }
            else {
                _this.TotalEx = 0;
            }
            //console.log("Exercises Edit | dbList: ", data, this.code);
            _this.load = 1;
        });
    };
    ExercisesAnswerEditComponent.prototype.getAnswer = function () {
        var _this = this;
        var filter = [];
        var requestDB;
        filter.push({ Name: "Id", Value: this.answerId });
        requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-answer-edit",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            if (data[0]) {
                _this.code = {
                    Result: data[0].Result,
                    Event: data[0].History,
                    Command: data[0].Command,
                    CheckCount: data[0].CheckCount,
                    CheckList: data[0].CheckList,
                    Code: data[0].Code,
                    ExecTime: data[0].ExecTime,
                };
                _this.diff = data[0].Status;
                _this.modifiedModel = { code: _this.code.Result, language: 'text/plain' };
                _this._eventEmitter.setCode(_this.code);
            }
            //console.log("Exercises Edit | dbList: ", data, this.code);
            _this.load = 1;
        });
    };
    Object.defineProperty(ExercisesAnswerEditComponent.prototype, "fe", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.editForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ExercisesAnswerEditComponent.prototype.setRoute = function (val) {
        this.router.navigate([val]);
    };
    ExercisesAnswerEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.responseEdit = {};
        if (this.TotalEx >= this.exercise.MaxSubmissions) {
            this.responseEdit.Name = "error";
            this.responseEdit.Status = "The deadline to send the exercise has ended.";
            return;
        }
        var max = '';
        if (this.exercise.MaxSubmissions > 0) {
            max = "Remaining attempts: " +
                (this.exercise.MaxSubmissions - this.TotalEx) + "\n\n";
        }
        var ret = this._util.openModal('Exercise Submission', max + 'Do you want to submit the exercise?', 'Yes', 'No', '');
        var subscription = ret.afterClosed().subscribe(function (data) {
            if (data['button'] == 'YES') {
                var form = {};
                form.Date = 'now';
                form.Result = _this.code.Result;
                form.Code = _this.code.Code;
                form.Status = _this.diff;
                form.IdExercise = _this.exerciseId;
                form.IdGroup = _this.exercise['gId'];
                form.Id = null;
                form.CheckCount = _this.code.CheckCount;
                form.CheckList = _this.code.CheckList;
                form.ExecTime = _this.code.ExecTime;
                form.Command = _this.code.Command;
                form.IdUser = Number(_this.userSession.Id);
                var filter = [];
                var requestDB = {
                    Operation: "update",
                    TableData: form,
                    Custom: "ExerciseAnswers",
                    Filter: filter,
                };
                _this.host.request(requestDB, 'FDBRequest')
                    .subscribe(function (data) {
                    _this.responseEdit = data;
                    //console.log(data);
                    //Let's save the history
                    if (_this.responseEdit.Name == "ok") {
                        var id_1;
                        id_1 = _this.responseEdit.Status;
                        //console.log(this.history);
                        _this.history.forEach(function (element) {
                            _this.submitHistory(element, id_1);
                        });
                        _this.history = [];
                        _this.responseEdit = data;
                        if (_this.responseEdit.Name == "ok" && parseInt(_this.responseEdit.Status) > 0)
                            _this.responseEdit.Status = "Record inserted successfully.";
                        _this._util.setResponse(_this.responseEdit.Status, 'Go to Answers', _this.responseEdit.Name, 'view-answer');
                    }
                    else {
                        _this._util.setResponse(_this.responseEdit.Status, _this.responseEdit.Name, null, null);
                    }
                });
            }
            _this.initA();
        });
    };
    ExercisesAnswerEditComponent.prototype.registerHistory = function (event) {
        var history = {};
        if (event) {
            history.name = event;
            history.date = Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["formatDate"])(new Date(), 'yyyy-MM-dd HH:mm', 'en');
            history.status = this.diff;
            return history;
        }
    };
    ExercisesAnswerEditComponent.prototype.submitHistory = function (element, id) {
        var answerHistory = {};
        answerHistory.IdExerciseAnswers = id;
        answerHistory.Date = element.date;
        answerHistory.Event = element.name;
        answerHistory.Status = element.status;
        var filter = [];
        var requestDB = {
            Operation: "update",
            TableData: answerHistory,
            Custom: "AnswersHistory",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            //console.log(data);
            //this.router.navigate(['Exercises']);
            //console.log("Exercises submithistory | edit: ", req, data);
        });
    };
    ExercisesAnswerEditComponent.prototype.managerStatus = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var count, n, ret;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        count = true;
                        n = this.exercise['CountDown'];
                        if (n <= 0)
                            count = false;
                        _a.label = 1;
                    case 1:
                        if (!count) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._util.delay(1000)];
                    case 2:
                        _a.sent();
                        n--;
                        if (n <= 0) {
                            ret = this._util.openModal('Finished Time to Submission', 'The time to submit the exercise is over.', 'Close', '', '');
                            count = false;
                            this.initA();
                        }
                        this.countDown = this._util.countdown(n);
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    ExercisesAnswerEditComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_7__["UtilControl"] }
    ]; };
    ExercisesAnswerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exercises-answer-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exercises-answer-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exercises-answer-edit.component.css */ "./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_7__["UtilControl"]])
    ], ExercisesAnswerEditComponent);
    return ExercisesAnswerEditComponent;
}());



/***/ }),

/***/ "./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer.component.css ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-table {\n  background: #fff;\n}\nmat-footer-row, mat-header-row, mat-row, td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n  border-bottom-color: rgba(0,0,0,.12);\n}\n.mat-cell, .mat-footer-cell {\n  color: #000;\n}\n.mat-header-cell {\n  color: rgba(0,0,0,.7);\n}\n.mat-header-cell {\n  font-size: 14px;\n  font-weight: 700;\n}\n.mat-paginator, .mat-header-row {\n  background-color: rgba(0,0,0,.03)\n}\n.mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0,0,0,.7);\n}\n/deep/ .mat-form-field-label {\n  color: rgba(0,0,0,.7) !important;\n  font-weight: 700 !important;\n}\n.mat-form-field {\n  font-size: 14px;\n  margin-left: 10px;\n}\n.mat-column-Name, .mat-column-Name2 {\n  flex: 0 0 20%;\n}\n.mat-column-Id, .mat-column-Index2 {\n  flex: 0 0 5%;\n}\nmat-header-row {\n  min-height: auto !important;\n}\n.mat-column-Action2 {\n  flex: 0 0 12%;\n}\n.mat-column-Date,\n.mat-column-Score,\n.mat-column-TotalEx,\n.mat-column-Score2,\n.mat-column-ExecTime2,\n.mat-column-History2,\n.mat-column-Status2 {\n  flex: 0 0 10%;\n}\n.mat-column-Date2, .mat-column-CheckCount2 {\n  flex: 0 0 15%;\n}\ntable {\n  width: 100%;\n}\ntr.example-detail-row {\n  height: 0;\n}\ntr.element-row:not(.example-expanded-row):hover {\n  background: #f5f5f5;\n}\ntr.element-row:not(.example-expanded-row):active {\n  background: #efefef;\n}\n.element-row td {\n  border-bottom-width: 0;\n}\n.element-detail {\n  overflow: hidden;\n  display: flex;\n}\n.element-diagram {\n  min-width: 80px;\n  border: 2px solid black;\n  padding: 8px;\n  font-weight: lighter;\n  margin: 8px 0;\n  height: 104px;\n}\n.element-symbol {\n  font-weight: bold;\n  font-size: 40px;\n  line-height: normal;\n}\n.element-description {\n  padding: 16px;\n}\n.element-description-attribution {\n  opacity: 0.5;\n}\n.element-row:not(.expanded) {\n  cursor: pointer;\n}\n/deep/ .mat-elevation-z8 {\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 8px 10px 1px rgba(0, 0, 0, 0), 0 3px 14px 2px rgba(0, 0, 0, 0);\n}\ninput {\n  width: 100%;\n  background-color: #fcfcfc;\n  border: 0;\n  border-bottom: 2px solid lightgrey;\n  padding: 10px;\n}\n/deep/ .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #fff !important;\n}\n/deep/ .mat-select-value, .mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: #000 !important;\n}\n.mat-row:nth-child(2n+1){\n  background-color: rgba(187, 196, 201, 0.16) !important;\n}\n.mat-row:not(:nth-child(2n+1)){\n  background-color:#ffffff !important;\n}\n.header2 {\n  background-color: rgba(0, 0, 0, 0.29) !important;\n}\n.Notexpired {\n  color: #28a745;\n}\n.expired {\n  color: #9d1e15;\n}\n.time {\n  color: #9d1e15;\n  font-size: 10px;\n}\n.expired, .Notexpired {\n  font-size: 14px;\n}\nbutton {\n  margin-left: 5px;\n}\n.buttonMenu {\n  word-wrap: break-word;\n  float:right;\n  margin: 10px;\n}\n.mat-progress-bar{\n  height: 20px;\n}\n::ng-deep .mat-progress-bar-buffer {\n  background: #E4E8EB;\n}\n#checkBar {\n  border-radius: 2px;\n  width: 100px !important;\n}\n.icon {\n  width: 15px;\n  height: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jbGFzc3Jvb20vY2xhc3Nyb29tL2V4ZXJjaXNlcy9leGVyY2lzZXMtYW5zd2VyL2V4ZXJjaXNlcy1hbnN3ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTs7Ozs7OztFQU9FLGFBQWE7QUFDZjtBQUVBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFLFNBQVM7QUFDWDtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjtBQUVBO0VBQ0UsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLGFBQWE7RUFDYixhQUFhO0FBQ2Y7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0Usc0dBQXNHO0FBQ3hHO0FBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmO0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0Usc0RBQXNEO0FBQ3hEO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7QUFFQTtFQUNFLGdEQUFnRDtBQUNsRDtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFFQTtFQUNFLGVBQWU7QUFDakI7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCO0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbWVudS1jbGFzc3Jvb20vY2xhc3Nyb29tL2V4ZXJjaXNlcy9leGVyY2lzZXMtYW5zd2VyL2V4ZXJjaXNlcy1hbnN3ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxubWF0LWZvb3Rlci1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtcm93LCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsLCB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsMCwwLC4xMik7XG59XG4ubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICBjb2xvcjogIzAwMDtcbn1cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG59XG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLm1hdC1wYWdpbmF0b3IsIC5tYXQtaGVhZGVyLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAzKVxufVxuLm1hdC1wYWdpbmF0b3IsIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xufVxuL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLC43KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubWF0LWNvbHVtbi1OYW1lLCAubWF0LWNvbHVtbi1OYW1lMiB7XG4gIGZsZXg6IDAgMCAyMCU7XG59XG4ubWF0LWNvbHVtbi1JZCwgLm1hdC1jb2x1bW4tSW5kZXgyIHtcbiAgZmxleDogMCAwIDUlO1xufVxuXG5tYXQtaGVhZGVyLXJvdyB7XG4gIG1pbi1oZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcbn1cblxuLm1hdC1jb2x1bW4tQWN0aW9uMiB7XG4gIGZsZXg6IDAgMCAxMiU7XG59XG5cbi5tYXQtY29sdW1uLURhdGUsXG4ubWF0LWNvbHVtbi1TY29yZSxcbi5tYXQtY29sdW1uLVRvdGFsRXgsXG4ubWF0LWNvbHVtbi1TY29yZTIsXG4ubWF0LWNvbHVtbi1FeGVjVGltZTIsXG4ubWF0LWNvbHVtbi1IaXN0b3J5Mixcbi5tYXQtY29sdW1uLVN0YXR1czIge1xuICBmbGV4OiAwIDAgMTAlO1xufVxuXG4ubWF0LWNvbHVtbi1EYXRlMiwgLm1hdC1jb2x1bW4tQ2hlY2tDb3VudDIge1xuICBmbGV4OiAwIDAgMTUlO1xufVxuXG50YWJsZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG50ci5leGFtcGxlLWRldGFpbC1yb3cge1xuICBoZWlnaHQ6IDA7XG59XG5cbnRyLmVsZW1lbnQtcm93Om5vdCguZXhhbXBsZS1leHBhbmRlZC1yb3cpOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcbn1cblxudHIuZWxlbWVudC1yb3c6bm90KC5leGFtcGxlLWV4cGFuZGVkLXJvdyk6YWN0aXZlIHtcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuLmVsZW1lbnQtcm93IHRkIHtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMDtcbn1cblxuLmVsZW1lbnQtZGV0YWlsIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmVsZW1lbnQtZGlhZ3JhbSB7XG4gIG1pbi13aWR0aDogODBweDtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDhweDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG4gIG1hcmdpbjogOHB4IDA7XG4gIGhlaWdodDogMTA0cHg7XG59XG5cbi5lbGVtZW50LXN5bWJvbCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQwcHg7XG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG59XG5cbi5lbGVtZW50LWRlc2NyaXB0aW9uIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmVsZW1lbnQtZGVzY3JpcHRpb24tYXR0cmlidXRpb24ge1xuICBvcGFjaXR5OiAwLjU7XG59XG5cbi5lbGVtZW50LXJvdzpub3QoLmV4cGFuZGVkKSB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuL2RlZXAvIC5tYXQtZWxldmF0aW9uLXo4IHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDApLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDApO1xufVxuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4vZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4vZGVlcC8gLm1hdC1zZWxlY3QtdmFsdWUsIC5tYXQtcGFnaW5hdG9yLCAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi5tYXQtcm93Om50aC1jaGlsZCgybisxKXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODcsIDE5NiwgMjAxLCAwLjE2KSAhaW1wb3J0YW50O1xufVxuLm1hdC1yb3c6bm90KDpudGgtY2hpbGQoMm4rMSkpe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYgIWltcG9ydGFudDtcbn1cblxuLmhlYWRlcjIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjkpICFpbXBvcnRhbnQ7XG59XG5cbi5Ob3RleHBpcmVkIHtcbiAgY29sb3I6ICMyOGE3NDU7XG59XG5cbi5leHBpcmVkIHtcbiAgY29sb3I6ICM5ZDFlMTU7XG59XG5cbi50aW1lIHtcbiAgY29sb3I6ICM5ZDFlMTU7XG4gIGZvbnQtc2l6ZTogMTBweDtcbn1cblxuLmV4cGlyZWQsIC5Ob3RleHBpcmVkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uYnV0dG9uTWVudSB7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgZmxvYXQ6cmlnaHQ7XG4gIG1hcmdpbjogMTBweDtcbn1cblxuLm1hdC1wcm9ncmVzcy1iYXJ7XG4gIGhlaWdodDogMjBweDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtcHJvZ3Jlc3MtYmFyLWJ1ZmZlciB7XG4gIGJhY2tncm91bmQ6ICNFNEU4RUI7XG59XG5cbiNjaGVja0JhciB7XG4gIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgd2lkdGg6IDEwMHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDE1cHg7XG4gIGhlaWdodDogMTVweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: ExercisesAnswerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesAnswerComponent", function() { return ExercisesAnswerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/table.es5.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _services_file_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../_services/file.service */ "./src/app/_services/file.service.ts");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../_control/util.control */ "./src/app/_control/util.control.ts");













var ExercisesAnswerComponent = /** @class */ (function () {
    function ExercisesAnswerComponent(host, router, _eventEmitter, excelService, _util) {
        this.host = host;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this.excelService = excelService;
        this._util = _util;
        this.displayedColumns = ['Id', 'Name', 'Date', 'Status', 'Score', 'TotalEx'];
        this.displayedColumns2 = ['Index2', 'Name2', 'Date2', 'CheckCount2', 'ExecTime2', 'History2', 'Status2', 'Action2'];
        this.exercise = {};
        this.answers = [];
        this.answersXLS = [];
        this.response = {};
        this.userSession = {};
        this.load = 0;
        this.totalAnswers = 0;
        this.similarity = "";
        this.host.checkSessionID(this.constructor.name);
    }
    ExercisesAnswerComponent.prototype.ngAfterViewInit = function () {
        if (this.exerciseId) {
            this.getExercise();
            this.getAnswers();
        }
    };
    ExercisesAnswerComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ExercisesAnswerComponent.prototype.ngOnInit = function () {
        this.userSession = this.host.getSessionID();
        this.module = window.localStorage.getItem("ClassModule");
        this.exerciseId = window.localStorage.getItem("ExerciseId");
    };
    ExercisesAnswerComponent.prototype.setRoute = function (val) {
        this.router.navigate([val]);
    };
    ExercisesAnswerComponent.prototype.addAnswer = function () {
        window.localStorage.setItem("ExerciseId", this.exerciseId);
        window.localStorage.removeItem("AnswerId");
        this.router.navigate(['add-answer']);
    };
    ;
    ExercisesAnswerComponent.prototype.editAnswer = function (answer) {
        window.localStorage.setItem("AnswerId", answer.Id.toString());
        window.localStorage.setItem("ExerciseId", this.exerciseId);
        this.router.navigate(['edit-answer']);
    };
    ;
    ExercisesAnswerComponent.prototype.deleteAnswer = function (id, name, r, i) {
        var _this = this;
        var ret = this._util.openModal('Delete Exercise of the User: ' + name, 'Confirm to delete the exercise?', 'Yes', 'No', '');
        ret.afterClosed().subscribe(function (data) {
            if (data['button'] == 'YES') {
                var filter = [];
                filter.push({ Name: "Id", Value: id.toString() });
                var requestDB = {
                    Operation: "drop",
                    TableData: null,
                    Custom: "exercises-answer",
                    Filter: filter,
                };
                _this.host.request(requestDB, 'FDBRequest')
                    .subscribe(function (data) {
                    _this.response = data;
                    _this._util.setResponse(_this.response['Status'], _this.response['Name'], null, null);
                    if (_this.response['Name'] == "ok") {
                        _this.getAnswers();
                        //console.log("Exercises-Answer | deleteAnswer: ", this.response, this.exerciseId);
                    }
                });
            }
        });
    };
    ExercisesAnswerComponent.prototype.showList = function (list) {
        var ret = this._util.openModal('Code Analysis by Clang-Tidy', list, 'Close', '', '');
    };
    ExercisesAnswerComponent.prototype.showEvents = function (id) {
        this.getHistory(id);
    };
    ExercisesAnswerComponent.prototype.download = function (choice) {
        var _this = this;
        if (choice == "lastExec") {
            this.answers.forEach(function (answer) {
                var name = answer['Name'];
                if (answer['gId'])
                    name = answer['gName'];
                _this.answersXLS.push({
                    Name: name,
                    Submission_Date: answer.Date,
                    Response_Time: answer.ExecTime,
                    Status: answer.Status,
                    Attempts_Number: answer['TotalEx'],
                    Events: answer['HistSum'],
                    Score: answer.Score
                });
            });
            this.excelService.exportAsExcelFile(this.answersXLS, this.exercise.Title);
            //console.log(this.answersXLS);
        }
        if (choice == "lastCode") {
            var zip = new jszip__WEBPACK_IMPORTED_MODULE_10__();
            this.answers.forEach(function (answer) {
                var name = answer['Name'];
                if (answer['gId'])
                    name = answer['gName'];
                zip.file(name + '.c', answer.Code);
            });
            var name_1 = this.exercise.Title;
            zip.generateAsync({ type: "blob" }).then(function (content) {
                // see FileSaver.js
                Object(file_saver__WEBPACK_IMPORTED_MODULE_11__["saveAs"])(content, name_1);
            });
        }
    };
    ExercisesAnswerComponent.prototype.showFeedback = function (id) {
        var ret = this._util.openModal('Feedback', this.answers[id].Feedback, 'Close', '', '');
    };
    ExercisesAnswerComponent.prototype.changeScore = function (index, row) {
        var _this = this;
        var input = [];
        input.push({ Model: row.Score, Name: "score", Type: "text", Title: "Score" });
        input.push({ Model: row.Feedback, Name: "feedback", Type: "text", Title: "Feedback *(Optional)" });
        var ret = this._util.openModal('Change Score', 'Please enter the score: ', 'Yes', 'No', input);
        ret.afterClosed().subscribe(function (data) {
            if (data && data['button'] == 'YES') {
                var score_1, feedback_1;
                if (data['input'][0] && data['input'][0]['Model'] != "")
                    score_1 = data['input'][0]['Model'];
                if (data['input'][1] && data['input'][1]['Model'] != "")
                    feedback_1 = data['input'][1]['Model'];
                if (!score_1)
                    score_1 = "";
                if (row.gId)
                    row.IdUser = "";
                var filter = [];
                var requestDB = {
                    Operation: "update",
                    TableData: {
                        IdExercise: _this.exerciseId,
                        IdUser: row.IdUser,
                        Id: row.IdScore,
                        Score: score_1,
                        Feedback: feedback_1,
                        IdGroup: row.gId,
                    },
                    Custom: "ExerciseScores",
                    Filter: filter,
                };
                _this.host.request(requestDB, 'FDBRequest')
                    .subscribe(function (data) {
                    if (data) {
                        if (data['Name'] == 'ok') {
                            if (parseInt(data['Status']) > 0)
                                _this.answers[index].IdScore = parseInt(data['Status']);
                            _this.answers[index].Score = score_1;
                            _this.answers[index].Feedback = feedback_1;
                            _this._util.setResponse('Record changed successfully.', 'ok', null, null);
                            if (score_1)
                                _this.score = true;
                            else
                                _this.score = false;
                        }
                        else {
                            _this._util.setResponse(data['Status'], 'error', null, null);
                        }
                    }
                });
            }
        });
    };
    ExercisesAnswerComponent.prototype.getHistory = function (id) {
        var _this = this;
        var filter = [];
        filter.push({ Name: "IdExerciseAnswers", Value: id.toString() });
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-answer-history",
            Filter: filter,
        };
        var h = "";
        var i = 0;
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            //console.log(data);
            if (data) {
                data.forEach(function (history) {
                    i++;
                    h += "EVENT #" + i + "\n\nDATE: " + history.Date + "\nSTATUS: " +
                        history.Status + "\n\n COMMAND\n" + history.Event + "\n\n";
                });
            }
            else {
                h = "Records not found.";
            }
            var ret = _this._util.openModal('Events', h, 'Close', '', '');
        });
    };
    ExercisesAnswerComponent.prototype.getHistoryGroup = function (id) {
        var _this = this;
        var filter = [];
        filter.push({ Name: "GroupId", Value: id.toString() });
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: 'group-history-admin',
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            var sel = 0, del = 0, ins = 0, rep = 0;
            var h = "";
            if (data) {
                data.forEach(function (history) {
                    if (history.ESelection)
                        sel += history.ESelection;
                    if (history.EDelete)
                        del += history.EDelete;
                    if (history.EInsert)
                        ins += history.EInsert;
                    if (history.EReplace)
                        rep += history.EReplace;
                });
                var usel_1 = 0, udel_1 = 0, uins_1 = 0, urep_1 = 0;
                data.forEach(function (history) {
                    if (history.ESelection)
                        usel_1 = Math.floor((history.ESelection * 100) / sel);
                    if (history.EInsert)
                        uins_1 = Math.floor((history.EInsert * 100) / ins);
                    if (history.EReplace)
                        urep_1 = Math.floor((history.EReplace * 100) / rep);
                    if (history.EDelete)
                        udel_1 = Math.floor((history.EDelete * 100) / del);
                    h += history['Name'] + "\n";
                    h += "Selection.......: " + usel_1 + "%\n";
                    h += "Insertion........: " + uins_1 + "%\n";
                    h += "Replacement: " + urep_1 + "%\n";
                    h += "Deletion.........: " + udel_1 + "%\n";
                    h += "\n\n";
                });
            }
            else {
                h = "Records not found.";
            }
            var ret = _this._util.openModal('Group History', h, 'Close', '', '');
        });
    };
    ExercisesAnswerComponent.prototype.getExercise = function () {
        var _this = this;
        var filter = [];
        var requestDB;
        filter.push({ Name: "Id", Value: this.exerciseId });
        filter.push({ Name: "IdUser", Value: String(this.userSession.Id) });
        var table = "exercises-list-user";
        if (this.userSession.Module == "Admin" || window.localStorage.getItem("ClassModule"))
            table = "exercises-list-admin";
        requestDB = {
            Operation: "view",
            TableData: null,
            Custom: table,
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            if (data[0]) {
                _this.exercise = data[0];
                _this.exIsExpired = _this.exercise['ExIsExpired'];
                _this.countDown = _this._util.countdown(_this.exercise['CountDown']);
            }
        });
    };
    ExercisesAnswerComponent.prototype.getAnswers = function () {
        var _this = this;
        var filter = [];
        var requestDB;
        filter.push({ Name: "Id", Value: this.exerciseId });
        filter.push({ Name: "IdUser", Value: String(this.userSession.Id) });
        var table = "exercises-answer-user";
        if (this.userSession.Module == "Admin" || window.localStorage.getItem("ClassModule")) {
            table = "exercises-answer-admin";
        }
        requestDB = {
            Operation: "view",
            TableData: null,
            Custom: table,
            Filter: filter,
        };
        this.score = false;
        this.answers = [];
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            if (data) {
                var bId_1;
                var gId_1;
                var run_1 = [];
                var bAnswer_1;
                var i_1 = 0;
                var total_1 = data.length;
                var history_1 = 0;
                data.forEach(function (answer) {
                    if (answer.Score)
                        _this.score = true;
                    if (i_1 == 0) {
                        bId_1 = answer.IdUser;
                        gId_1 = answer.gId;
                    }
                    history_1 += answer.History;
                    if ((answer.IdUser != bId_1 && !answer.gId) ||
                        answer.gId != gId_1) {
                        bAnswer_1['run'] = run_1;
                        bAnswer_1['HistSum'] = history_1;
                        _this.answers.push(bAnswer_1);
                        run_1 = [];
                        history_1 = 0;
                    }
                    bAnswer_1 = answer;
                    run_1.push(answer);
                    bId_1 = answer.IdUser;
                    gId_1 = answer.gId;
                    if (total_1 == 1 || total_1 == i_1 + 1) {
                        bAnswer_1['run'] = run_1;
                        bAnswer_1['HistSum'] = history_1;
                        _this.answers.push(bAnswer_1);
                        run_1 = [];
                        history_1 = 0;
                    }
                    i_1++;
                    _this.totalAnswers++;
                });
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.answers);
                //console.log(this.answers);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
            else {
                delete _this.answers;
                delete _this.dataSource;
            }
            _this.load = 1;
        });
    };
    ExercisesAnswerComponent.prototype.checkSimilarity = function () {
        // APPLYING SIMILARITY CHECK
        var _this = this;
        var stringSimilarity = __webpack_require__(/*! string-similarity/src/index */ "./node_modules/string-similarity/src/index.js");
        this.similarity = "Code similarity ranges from 0 to 1. Where 1 is an identical code string.\n\n";
        this.answers.forEach(function (answer1) {
            _this.answers.forEach(function (answer2) {
                if (answer1.IdUser != answer2.IdUser || answer1['gId'] != answer2['gId']) {
                    var s = stringSimilarity.compareTwoStrings(answer1.Code, answer2.Code);
                    if (answer1['gId'])
                        _this.similarity += "Similarity: " + parseFloat(s.toFixed(2)) +
                            " -> " + answer1['gName'] + " ~ " + answer2['gName'] + "\n";
                    else
                        _this.similarity += "Similarity: " + parseFloat(s.toFixed(2)) +
                            " -> " + answer1['Name'] + " ~ " + answer2['Name'] + "\n";
                }
            });
        });
        var ret = this._util.openModal('Code Similarity', this.similarity, 'Close', '', '');
    };
    ExercisesAnswerComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
        { type: _services_file_service__WEBPACK_IMPORTED_MODULE_9__["ExcelService"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_12__["UtilControl"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], ExercisesAnswerComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], ExercisesAnswerComponent.prototype, "sort", void 0);
    ExercisesAnswerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'exercises-answer-app-answer',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exercises-answer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer.component.html")).default,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('detailExpand', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('collapsed, void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '0px', minHeight: '0', display: 'none' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('expanded', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({ height: '*' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> collapsed', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('expanded <=> void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('225ms cubic-bezier(0.4, 0.0, 0.2, 1)'))
                ]),
            ],
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exercises-answer.component.css */ "./src/app/menu-classroom/classroom/exercises/exercises-answer/exercises-answer.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
            _services_file_service__WEBPACK_IMPORTED_MODULE_9__["ExcelService"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_12__["UtilControl"]])
    ], ExercisesAnswerComponent);
    return ExercisesAnswerComponent;
}());



/***/ }),

/***/ "./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-edit.component.css":
/*!************************************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-edit.component.css ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".form-control {\n  max-width: 500px;\n}\n\n.text {\n  min-width: 500px !important;\n  display: block;\n}\n\n.date {\n  min-width: 100px !important;\n  display: block;\n}\n\n.number {\n  min-width: 50px !important;\n  display: block;\n}\n\n.card {\n  white-space: pre-line !important;\n}\n\nul, li {list-style-type: none;}\n\n.ck-editor__editable_inline {\n  min-height: 500px;\n}\n\n.icon {\n  width: 20px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jbGFzc3Jvb20vY2xhc3Nyb29tL2V4ZXJjaXNlcy9leGVyY2lzZXMtZWRpdC9leGVyY2lzZXMtZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0NBQWdDO0FBQ2xDOztBQUdBLFFBQVEscUJBQXFCLENBQUM7O0FBRzlCO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL21lbnUtY2xhc3Nyb29tL2NsYXNzcm9vbS9leGVyY2lzZXMvZXhlcmNpc2VzLWVkaXQvZXhlcmNpc2VzLWVkaXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wge1xuICBtYXgtd2lkdGg6IDUwMHB4O1xufVxuXG4udGV4dCB7XG4gIG1pbi13aWR0aDogNTAwcHggIWltcG9ydGFudDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kYXRlIHtcbiAgbWluLXdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm51bWJlciB7XG4gIG1pbi13aWR0aDogNTBweCAhaW1wb3J0YW50O1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcmQge1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmUgIWltcG9ydGFudDtcbn1cblxuXG51bCwgbGkge2xpc3Qtc3R5bGUtdHlwZTogbm9uZTt9XG5cblxuLmNrLWVkaXRvcl9fZWRpdGFibGVfaW5saW5lIHtcbiAgbWluLWhlaWdodDogNTAwcHg7XG59XG5cbi5pY29uIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-edit.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-edit.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ExercisesEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesEditComponent", function() { return ExercisesEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _haifahrul_ckeditor5_build_rich__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @haifahrul/ckeditor5-build-rich */ "./node_modules/@haifahrul/ckeditor5-build-rich/build/ckeditor.js");
/* harmony import */ var _haifahrul_ckeditor5_build_rich__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_haifahrul_ckeditor5_build_rich__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../_control/util.control */ "./src/app/_control/util.control.ts");








var ExercisesEditComponent = /** @class */ (function () {
    function ExercisesEditComponent(host, _util, formBuilder, router, _eventEmitter) {
        this.host = host;
        this._util = _util;
        this.formBuilder = formBuilder;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this.Editor = _haifahrul_ckeditor5_build_rich__WEBPACK_IMPORTED_MODULE_6___default.a;
        this.config = {
            toolbar: {
                items: [
                    'heading', '|',
                    'alignment', '|',
                    'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
                    'link', '|',
                    'bulletedList', 'numberedList', 'todoList',
                    '-',
                    'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', '|',
                    'code', 'codeBlock', '|',
                    'Smiley', 'insertTable', '|',
                    'outdent', 'indent', '|',
                    'uploadImage', 'blockQuote', '|',
                    'undo', 'redo'
                ],
                shouldNotGroupWhenFull: true
            },
            language: 'id',
            image: {
                toolbar: [
                    'imageTextAlternative',
                    'imageStyle:full',
                    'imageStyle:side'
                ]
            },
        };
        this.submitted = false;
        this.responseEdit = {};
        this.exercise = {};
        this.code = {};
        this.maxFileSize = '';
        this.userSession = {};
        this.host.checkSessionID(this.constructor.name);
    }
    ExercisesEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.editForm = this.formBuilder.group({
            Id: [''],
            IdUser: [''],
            IdClassroom: [''],
            Title: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                ]
            ],
            Date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            Time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            MaxSubmissions: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            MaxTimeout: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            MaxFileSize: [''],
            Content: [''],
            Code: [''],
            Result: [''],
            Command: [''],
            ExecTime: [''],
            CheckCount: [''],
            CheckList: [''],
        });
        if (window.localStorage.getItem("ExerciseId"))
            this.exerciseId = Number(window.localStorage.getItem("ExerciseId"));
        this.module = window.localStorage.getItem("ClassModule");
        this.userSession = this.host.getSessionID();
        this.getInit();
        //Getting value from child CodeComponent
        this.subCode = this._eventEmitter.code.subscribe(function (data) {
            if (data) {
                _this.code = data;
                //this.getInit();
            }
        });
    };
    ExercisesEditComponent.prototype.ngOnDestroy = function () {
        this.subCode.unsubscribe();
    };
    ExercisesEditComponent.prototype.getInit = function () {
        if (this.exerciseId)
            this.getExercise();
    };
    ExercisesEditComponent.prototype.updateCodeTab = function () {
        this.getExercise();
    };
    ExercisesEditComponent.prototype.getExercise = function () {
        var _this = this;
        var filter = [];
        filter.push({ Name: "Id", Value: String(this.exerciseId) });
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-edit",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            if (!data)
                return;
            //console.log(data);
            data[0]['Date'] = {
                day: parseInt(data[0]['EDDay']),
                month: parseInt(data[0]['EDMonth']),
                year: parseInt(data[0]['EDYear']),
            };
            if (!data[0]['EDHour'])
                data[0]['EDHour'] = '00';
            if (!data[0]['EDMinute'])
                data[0]['EDMinute'] = '00';
            data[0]['Time'] = {
                hour: parseInt(data[0]['EDHour']),
                minute: parseInt(data[0]['EDMinute']),
            };
            delete data[0]['EDDay'];
            delete data[0]['EDMonth'];
            delete data[0]['EDYear'];
            delete data[0]['EDHour'];
            delete data[0]['EDMinute'];
            delete data[0]['FileContent'];
            delete data[0]['FileName'];
            _this.editForm.setValue(data[0]);
            _this.code = data[0];
            _this.code['ShowDiff'] = 1;
            _this._eventEmitter.setCode(_this.code);
            _this._eventEmitter.setExercise(data[0]);
            _this.maxFileSize = _this._util.formatBytes(data[0].MaxFileSize);
        });
    };
    Object.defineProperty(ExercisesEditComponent.prototype, "fe", {
        // convenience getter for easy access to form fields
        get: function () { return this.editForm.controls; },
        enumerable: true,
        configurable: true
    });
    ExercisesEditComponent.prototype.setRoute = function (val) {
        this.router.navigate([val]);
    };
    ExercisesEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.responseEdit = {};
        this.submitted = true;
        // stop here if form is invalid
        if (this.editForm.invalid) {
            return;
        }
        this.fe['Code'].setValue(this.code.Code);
        this.fe['Result'].setValue(this.code.Result);
        this.fe['Command'].setValue(this.code.Command);
        this.fe['ExecTime'].setValue(this.code.ExecTime);
        this.fe['CheckCount'].setValue(this.code.CheckCount);
        this.fe['CheckList'].setValue(this.code.CheckList);
        this.date = this.fe['Date'].value;
        this.time = this.fe['Time'].value;
        //console.log(this.time);
        if (!this.time || this.fe['Time'].value == "") {
            this.fe['Time'].setValue("00:00");
        }
        var temp = this.editForm.value;
        temp['Id'] = this.exerciseId;
        temp['IdUser'] = this.userSession.Id;
        temp['IdClassroom'] = window.localStorage.getItem("ClassroomId");
        temp['Date'] =
            this.date.year + "-" +
                this._util.numberFormat(this.date.month) + "-" +
                this._util.numberFormat(this.date.day) + " " +
                this._util.numberFormat(this.time.hour) + ":" +
                this._util.numberFormat(this.time.minute);
        delete temp['Time'];
        //console.log(temp);
        var filter = [];
        var requestDB = {
            Operation: "update",
            TableData: temp,
            Custom: "Exercises",
            Filter: filter,
        };
        //console.log(requestDB);
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            _this.responseEdit = data;
            if (!_this.exerciseId && _this.responseEdit.Name == "ok" && parseInt(_this.responseEdit.Status) > 0) {
                _this.exerciseId = Number(_this.responseEdit.Status);
                _this.exercise.Id = _this.exerciseId;
                window.localStorage.setItem("ExerciseId", String(_this.exerciseId));
                _this.responseEdit.Status = "Record inserted successfully.";
            }
            else if (_this.exerciseId && _this.responseEdit.Name == "ok") {
                _this.responseEdit.Status = "Record updated successfully.";
            }
            _this._util.setResponse(_this.responseEdit.Status, 'Go to Exercises', _this.responseEdit.Name, 'view-exercise');
            _this.getInit();
            _this._eventEmitter.setExercise(_this.exercise);
            //console.log("Exercises onSubmit | edit: ", this.editForm.value);
        });
    };
    ExercisesEditComponent.prototype.getInputMaxFileSize = function (input) {
        this.maxFileSize = this._util.formatBytes(input.path[0].value);
    };
    ExercisesEditComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_7__["UtilControl"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"] }
    ]; };
    ExercisesEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'exercises-app-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exercises-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exercises-edit.component.css */ "./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-edit.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_7__["UtilControl"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"]])
    ], ExercisesEditComponent);
    return ExercisesEditComponent;
}());



/***/ }),

/***/ "./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-files/exercises-files.component.css":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-files/exercises-files.component.css ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-table {\n  background: #fff;\n}\nmat-footer-row, mat-header-row, mat-row, td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n  border-bottom-color: rgba(0,0,0,.12);\n}\n.mat-cell, .mat-footer-cell {\n  color: #000;\n}\n.mat-header-cell {\n  color: rgba(0,0,0,.7);\n}\n.mat-header-cell {\n  font-size: 14px;\n  font-weight: 700;\n}\n.mat-paginator, .mat-header-row {\n  background-color: rgba(0,0,0,.03)\n}\n.mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0,0,0,.7);\n}\n/deep/ .mat-form-field-label {\n  color: rgba(0,0,0,.7) !important;\n  font-weight: 700 !important;\n}\n.mat-form-field {\n  font-size: 14px;\n  margin-left: 10px;\n}\n.mat-column-Action {\n  flex: 0 0 20%;\n}\n.mat-column-Name {\n  flex: 0 0 40%;\n}\n.mat-column-Size {\n  flex: 0 0 30%;\n}\n.mat-column-Id {\n  flex: 0 0 10%;\n}\n.btn-primary {\n  color: #000;\n  background-color: #fff !important;\n  border-color: #007bff;\n}\n.btn-primary.focus, .btn-primary:focus {\n  color: #000 !important;\n}\n/deep/ .mat-elevation-z8 {\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 8px 10px 1px rgba(0, 0, 0, 0), 0 3px 14px 2px rgba(0, 0, 0, 0);\n}\n/deep/ .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #fff !important;\n}\n/deep/ .mat-select-value, .mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: #000 !important;\n}\n/deep/ .mat-sort-header-arrow {\n  color: #000 !important;\n}\n.mat-row:nth-child(2n+1){\n  background-color: rgba(187, 196, 201, 0.16) !important;\n}\n.mat-row:not(:nth-child(2n+1)){\n  background-color:#ffffff !important;\n}\n.user-container {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\n.card-header span {\n  font-size: 22px;\n}\n.Notexpired {\n  color: #28a745;\n}\n.expired {\n  color: #9d1e15;\n}\n.expired, .Notexpired {\n  font-size: 10px;\n}\nbutton {\n  margin-left: 5px;\n}\n.mat-progress-bar{\n  height: 20px;\n}\n::ng-deep .mat-progress-bar-buffer {\n  background: #E4E8EB;\n}\n#checkBar {\n  border-radius: 2px;\n  width: 100px !important;\n}\n.icon {\n  width: 20px;\n  height: 20px;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jbGFzc3Jvb20vY2xhc3Nyb29tL2V4ZXJjaXNlcy9leGVyY2lzZXMtZWRpdC9leGVyY2lzZXMtZmlsZXMvZXhlcmNpc2VzLWZpbGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxXQUFXO0VBQ1gsaUNBQWlDO0VBQ2pDLHFCQUFxQjtBQUN2QjtBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBRUE7RUFDRSxzR0FBc0c7QUFDeEc7QUFFQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLHNEQUFzRDtBQUN4RDtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL21lbnUtY2xhc3Nyb29tL2NsYXNzcm9vbS9leGVyY2lzZXMvZXhlcmNpc2VzLWVkaXQvZXhlcmNpc2VzLWZpbGVzL2V4ZXJjaXNlcy1maWxlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWJsZSB7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG59XG5tYXQtZm9vdGVyLXJvdywgbWF0LWhlYWRlci1yb3csIG1hdC1yb3csIHRkLm1hdC1jZWxsLCB0ZC5tYXQtZm9vdGVyLWNlbGwsIHRoLm1hdC1oZWFkZXItY2VsbCB7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoMCwwLDAsLjEyKTtcbn1cbi5tYXQtY2VsbCwgLm1hdC1mb290ZXItY2VsbCB7XG4gIGNvbG9yOiAjMDAwO1xufVxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcbn1cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBmb250LXNpemU6IDE0cHg7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ubWF0LXBhZ2luYXRvciwgLm1hdC1oZWFkZXItcm93IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwuMDMpXG59XG4ubWF0LXBhZ2luYXRvciwgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG59XG4vZGVlcC8gLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjcpICFpbXBvcnRhbnQ7XG4gIGZvbnQtd2VpZ2h0OiA3MDAgIWltcG9ydGFudDtcbn1cbi5tYXQtZm9ybS1maWVsZCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ubWF0LWNvbHVtbi1BY3Rpb24ge1xuICBmbGV4OiAwIDAgMjAlO1xufVxuLm1hdC1jb2x1bW4tTmFtZSB7XG4gIGZsZXg6IDAgMCA0MCU7XG59XG4ubWF0LWNvbHVtbi1TaXplIHtcbiAgZmxleDogMCAwIDMwJTtcbn1cbi5tYXQtY29sdW1uLUlkIHtcbiAgZmxleDogMCAwIDEwJTtcbn1cblxuLmJ0bi1wcmltYXJ5IHtcbiAgY29sb3I6ICMwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbiAgYm9yZGVyLWNvbG9yOiAjMDA3YmZmO1xufVxuXG4uYnRuLXByaW1hcnkuZm9jdXMsIC5idG4tcHJpbWFyeTpmb2N1cyB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG5cbi9kZWVwLyAubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwKSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuL2RlZXAvIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuL2RlZXAvIC5tYXQtc2VsZWN0LXZhbHVlLCAubWF0LXBhZ2luYXRvciwgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuL2RlZXAvIC5tYXQtc29ydC1oZWFkZXItYXJyb3cge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuLm1hdC1yb3c6bnRoLWNoaWxkKDJuKzEpe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMTk2LCAyMDEsIDAuMTYpICFpbXBvcnRhbnQ7XG59XG4ubWF0LXJvdzpub3QoOm50aC1jaGlsZCgybisxKSl7XG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZiAhaW1wb3J0YW50O1xufVxuXG4udXNlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBtYXJnaW46IGF1dG87XG59XG4uY2FyZC1oZWFkZXIgc3BhbiB7XG4gIGZvbnQtc2l6ZTogMjJweDtcbn1cblxuLk5vdGV4cGlyZWQge1xuICBjb2xvcjogIzI4YTc0NTtcbn1cbi5leHBpcmVkIHtcbiAgY29sb3I6ICM5ZDFlMTU7XG59XG4uZXhwaXJlZCwgLk5vdGV4cGlyZWQge1xuICBmb250LXNpemU6IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG59XG5cbi5tYXQtcHJvZ3Jlc3MtYmFye1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbjo6bmctZGVlcCAubWF0LXByb2dyZXNzLWJhci1idWZmZXIge1xuICBiYWNrZ3JvdW5kOiAjRTRFOEVCO1xufVxuXG4jY2hlY2tCYXIge1xuICBib3JkZXItcmFkaXVzOiAycHg7XG4gIHdpZHRoOiAxMDBweCAhaW1wb3J0YW50O1xufVxuXG4uaWNvbiB7XG4gIHdpZHRoOiAyMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-files/exercises-files.component.ts":
/*!****************************************************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-files/exercises-files.component.ts ***!
  \****************************************************************************************************************/
/*! exports provided: ExercisesFilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesFilesComponent", function() { return ExercisesFilesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/table.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/sort.es5.js");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../_control/util.control */ "./src/app/_control/util.control.ts");








var ExercisesFilesComponent = /** @class */ (function () {
    function ExercisesFilesComponent(host, router, _eventEmitter, _util) {
        this.host = host;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._util = _util;
        this.displayedColumns = ['Id', 'Name', 'Size', 'Action'];
        this.progress = { loaded: 0, total: 0 };
        this.response = {};
        this.exerciseFiles = {};
        this.files = [];
        this.load = 0;
        this.host.checkSessionID(this.constructor.name);
    }
    ExercisesFilesComponent.prototype.ngOnInit = function () {
        if (this.exerciseId)
            this.getFiles();
    };
    ExercisesFilesComponent.prototype.setRoute = function (val) {
        this.router.navigate([val]);
    };
    ExercisesFilesComponent.prototype.download = function (file) {
        //console.log(file);
        this.host.downloadFileData(file, 'ExerciseFiles');
    };
    ExercisesFilesComponent.prototype.delete = function (file) {
        var _this = this;
        var filter = [];
        filter.push({ Name: "Id", Value: file.Id.toString() });
        var requestDB = {
            Operation: "drop",
            TableData: null,
            Custom: "exercises-files",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            _this.response = data;
            _this._util.setResponse(_this.response['Status'], _this.response['Name'], null, null);
            _this.getFiles();
        });
    };
    ExercisesFilesComponent.prototype.uploadFile = function () {
        var _this = this;
        this.response = {};
        var filedata = this.el.nativeElement.files[0];
        var param = {};
        param.Name = "Exercise";
        param.Value = this.exerciseId.toString();
        this.host.uploadFileData(filedata, param)
            .subscribe(function (data) {
            if (data.type == 1 && data.loaded && data.total) {
                _this.progress.loaded = data.loaded;
                _this.progress.total = data.total;
            }
            else if (data.body) {
                //console.log("Data Uploaded");
                //console.log(data.body);
                _this.response = data.body;
                if (data['body']['Name'] == "ok")
                    _this.response['Status'] = "File inserted successfully.";
                _this._util.setResponse(_this.response['Status'], data['body']['Name'], null, null);
                _this.inputFile.nativeElement.value = "";
                _this.getFiles();
                _this.load = 0;
            }
        }, function (error) { return console.log(error); });
    };
    ExercisesFilesComponent.prototype.getFiles = function () {
        var _this = this;
        var filter = [];
        filter.push({ Name: "Id", Value: this.exerciseId.toString() });
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-answer-files",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            //console.log(requestDB, this.files);
            _this.files = data;
            _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.files);
            if (_this.files)
                _this.dataSource.sort = _this.sort;
            _this.load = 1;
            _this.progress = { loaded: 0, total: 0 };
        });
    };
    ExercisesFilesComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_7__["UtilControl"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('exerciseId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ExercisesFilesComponent.prototype, "exerciseId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('inputFile'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ExercisesFilesComponent.prototype, "inputFile", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], ExercisesFilesComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('selectfile'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ExercisesFilesComponent.prototype, "el", void 0);
    ExercisesFilesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'exercises-app-files',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exercises-files.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-files/exercises-files.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exercises-files.component.css */ "./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-files/exercises-files.component.css")).default]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_7__["UtilControl"]])
    ], ExercisesFilesComponent);
    return ExercisesFilesComponent;
}());



/***/ }),

/***/ "./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-groups/exercises-groups.component.css":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-groups/exercises-groups.component.css ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-input-element {\n  color: slategray;\n}\n.mat-form-field-label {\n  color: slategray;\n}\n.mat-form-field-underline {\n  background-color: slategray;\n}\n.mat-form-field-ripple {\n  background-color: slategray;\n}\n.mat-form-field-required-marker {\n  color: slategray;\n}\n.mat-form-field-label {\n  color: #ff884d;\n}\n.mat-form-field-ripple {\n  background-color: #ff884d;\n}\n.mat-form-field-required-marker {\n  color: #ff884d;\n}\n.mat-input-element {\n  color: #ff884d;\n}\n.mat-input-element {\n  color: #007bff;\n}\n.mat-form-field-label {\n  color: #007bff;\n}\n.mat-form-field-required-marker {\n  color: #007bff;\n}\n.mat-form-field-ripple {\n  background-color: #007bff;\n}\ninput {\n  width: 100%;\n  background-color: #fcfcfc;\n  border: 0;\n  border-bottom: 2px solid lightgrey;\n  padding: 10px;\n}\n::-webkit-input-placeholder { /* Edge */\n  color: gray;\n}\n::-moz-placeholder {\n  color: gray;\n}\n::-ms-input-placeholder {\n  color: gray;\n}\n::placeholder {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jbGFzc3Jvb20vY2xhc3Nyb29tL2V4ZXJjaXNlcy9leGVyY2lzZXMtZWRpdC9leGVyY2lzZXMtZ3JvdXBzL2V4ZXJjaXNlcy1ncm91cHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSwyQkFBMkI7QUFDN0I7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixTQUFTO0VBQ1Qsa0NBQWtDO0VBQ2xDLGFBQWE7QUFDZjtBQUVBLDhCQUE4QixTQUFTO0VBQ3JDLFdBQVc7QUFDYjtBQU1BO0VBQ0UsV0FBVztBQUNiO0FBRkE7RUFDRSxXQUFXO0FBQ2I7QUFGQTtFQUNFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21lbnUtY2xhc3Nyb29tL2NsYXNzcm9vbS9leGVyY2lzZXMvZXhlcmNpc2VzLWVkaXQvZXhlcmNpc2VzLWdyb3Vwcy9leGVyY2lzZXMtZ3JvdXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LWlucHV0LWVsZW1lbnQge1xuICBjb2xvcjogc2xhdGVncmF5O1xufVxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6IHNsYXRlZ3JheTtcbn1cbi5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBzbGF0ZWdyYXk7XG59XG4ubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xufVxuLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gIGNvbG9yOiBzbGF0ZWdyYXk7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiAjZmY4ODRkO1xufVxuLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjg4NGQ7XG59XG4ubWF0LWZvcm0tZmllbGQtcmVxdWlyZWQtbWFya2VyIHtcbiAgY29sb3I6ICNmZjg4NGQ7XG59XG4ubWF0LWlucHV0LWVsZW1lbnQge1xuICBjb2xvcjogI2ZmODg0ZDtcbn1cblxuLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG4ubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuXG4ubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBFZGdlICovXG4gIGNvbG9yOiBncmF5O1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cbiAgY29sb3I6IGdyYXk7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICBjb2xvcjogZ3JheTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-groups/exercises-groups.component.ts":
/*!******************************************************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-groups/exercises-groups.component.ts ***!
  \******************************************************************************************************************/
/*! exports provided: ExercisesGroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesGroupsComponent", function() { return ExercisesGroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/keycodes.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/autocomplete.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../../_control/util.control */ "./src/app/_control/util.control.ts");










var ExercisesGroupsComponent = /** @class */ (function () {
    function ExercisesGroupsComponent(host, formBuilder, router, _eventEmitter, _util) {
        var _this = this;
        this.host = host;
        this.formBuilder = formBuilder;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._util = _util;
        this.response = {};
        this.groups = [];
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        this.memberCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.members = [];
        this.membersDrop = [];
        this.load = 0;
        this.host.checkSessionID(this.constructor.name);
        this.filteredMembers = this.memberCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (member) { return member ? _this._filter(member) : _this.groups.slice(); }));
    }
    ExercisesGroupsComponent.prototype.ngOnInit = function () {
        this.editForm = this.formBuilder.group({
            Id: [''],
            IdUser: [''],
            IdGroup: [''],
        });
        this.IdClassroom = window.localStorage.getItem("ClassroomId");
        if (this.exerciseId && this.IdClassroom)
            this.getMembers();
        this.getGroups();
    };
    ExercisesGroupsComponent.prototype.setRoute = function (val) {
        this.router.navigate([val]);
    };
    Object.defineProperty(ExercisesGroupsComponent.prototype, "f", {
        get: function () {
            return this.editForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ExercisesGroupsComponent.prototype.add = function (member) {
        // Add our member
        if (member && member.Id != 'undefined') {
            this.members.push(member);
            this.memberCtrl.setValue(null);
        }
    };
    ExercisesGroupsComponent.prototype.remove = function (group) {
        var _this = this;
        var index = this.members.indexOf(group);
        if (index >= 0) {
            this.membersDrop.push(this.members[index]);
            this.members.splice(index, 1);
        }
        var filter = [];
        filter.push({ Name: "IdExercise", Value: this.exerciseId.toString() });
        filter.push({ Name: "IdGroup", Value: group.Id.toString() });
        var requestDB = {
            Operation: "drop",
            TableData: null,
            Custom: "exercises-groups",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            //console.log(data, requestDB);
            _this.response = data;
            _this.response.Name = "ok";
            _this.response.Status = "Record updated successfully.";
            _this._util.setResponse(_this.response['Status'], _this.response['Name'], null, 'view-group');
        });
    };
    ExercisesGroupsComponent.prototype.selected = function (event) {
        var _this = this;
        this.members.push(event.option.value);
        this.memberInput.nativeElement.value = '';
        this.memberCtrl.setValue(null);
        var filter = [];
        var requestDB = {
            Operation: "update",
            TableData: { IdGroup: event.option.value['Id'], IdExercise: this.exerciseId },
            Custom: "ExerciseGroups",
            Filter: filter,
        };
        var res;
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            if (data) {
                res = data;
                if (res.Name == "ok") {
                    _this.response.Name = "ok";
                    _this.response.Status = "Record updated successfully.";
                    //console.log(res);
                }
                _this._util.setResponse(_this.response['Status'], _this.response['Name'], null, null);
                //this.getMembers();
            }
        });
    };
    ExercisesGroupsComponent.prototype._filter = function (value) {
        var usersFiltered = [];
        if (value != "" && typeof (value) != 'object') {
            this.groups.forEach(function (i) {
                if (i.Name.trim().toLowerCase().includes(value.toLowerCase(), -1)) {
                    usersFiltered.push(i);
                }
            });
            return usersFiltered;
        }
    };
    ExercisesGroupsComponent.prototype.getMembers = function () {
        var _this = this;
        var filter = [];
        filter.push({ Name: "IdExercise", Value: this.exerciseId.toString() });
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "exercises-groups",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            if (data)
                _this.members = data;
            //console.log("GroupsMembers | getMembers ", this.members, request);
        });
    };
    ExercisesGroupsComponent.prototype.getGroups = function () {
        var _this = this;
        var filter = [];
        filter.push({ Name: 'IdClassroom', Value: this.IdClassroom });
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "groups",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            _this.groups = data;
            _this.load = 1;
            //console.log("groups | dbList: ", data);
        });
    };
    ExercisesGroupsComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_8__["EventEmitterService"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_9__["UtilControl"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('exerciseId'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], ExercisesGroupsComponent.prototype, "exerciseId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('memberInput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ExercisesGroupsComponent.prototype, "memberInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"])
    ], ExercisesGroupsComponent.prototype, "matAutocomplete", void 0);
    ExercisesGroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'exercises-app-groups',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exercises-groups.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-groups/exercises-groups.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exercises-groups.component.css */ "./src/app/menu-classroom/classroom/exercises/exercises-edit/exercises-groups/exercises-groups.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_8__["EventEmitterService"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_9__["UtilControl"]])
    ], ExercisesGroupsComponent);
    return ExercisesGroupsComponent;
}());



/***/ }),

/***/ "./src/app/menu-classroom/classroom/exercises/exercises.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/exercises/exercises.component.css ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-table {\n    background: #fff;\n}\nmat-footer-row, mat-header-row, mat-row, td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n    border-bottom-color: rgba(0,0,0,.12);\n}\n.mat-cell, .mat-footer-cell {\n    color: #000;\n}\n.mat-header-cell {\n    color: rgba(0,0,0,.7);\n}\n.mat-header-cell {\n    font-size: 14px;\n    font-weight: 700;\n}\n.mat-paginator, .mat-header-row {\n    background-color: rgba(0,0,0,.03)\n}\n.mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n    color: rgba(0,0,0,.7);\n}\n/deep/ .mat-form-field-label {\n    color: rgba(0,0,0,.7) !important;\n    font-weight: 700 !important;\n}\n.mat-form-field {\n    font-size: 14px;\n    margin-left: 10px;\n}\n.mat-column-Action {\n    flex: 0 0 25%;\n}\n.mat-column-Title {\n    flex: 0 0 20%;\n}\n.mat-column-ExecTime {\n    flex: 0 0 10%;\n}\n.mat-column-Id {\n    flex: 0 0 6%;\n}\n.mat-column-MaxSubmissions {\n    flex: 0 0 8%;\n}\n.Date, .mat-column-CheckCount {\n    flex: 0 0 15%;\n}\n/deep/ .mat-elevation-z8 {\n    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 8px 10px 1px rgba(0, 0, 0, 0), 0 3px 14px 2px rgba(0, 0, 0, 0);\n}\ninput {\n    width: 100%;\n    background-color: #fcfcfc;\n    border: 0;\n    border-bottom: 2px solid lightgrey;\n    padding: 10px;\n}\n/deep/ .mat-form-field.mat-focused .mat-form-field-ripple {\n    background-color: #fff !important;\n}\n/deep/ .mat-select-value, .mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n    color: #000 !important;\n}\n/deep/ .mat-sort-header-arrow {\n    color: #000 !important;\n}\n.mat-row:nth-child(2n+1){\n    background-color: rgba(187, 196, 201, 0.16) !important;\n}\n.mat-row:not(:nth-child(2n+1)){\n    background-color:#ffffff !important;\n}\n.user-container {\n    display: flex;\n    flex-direction: column;\n    margin: auto;\n}\n.Notexpired {\n    color: #28a745;\n}\n.expired {\n    color: #9d1e15;\n}\n.expired, .Notexpired {\n    font-size: 10px;\n}\nbutton {\n    margin-left: 5px;\n}\n.mat-progress-bar{\n    height: 20px;\n}\n::ng-deep .mat-progress-bar-buffer {\n    background: #E4E8EB;\n}\n#checkBar {\n    border-radius: 2px;\n    width: 100px !important;\n}\n.icon {\n    width: 20px;\n    height: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jbGFzc3Jvb20vY2xhc3Nyb29tL2V4ZXJjaXNlcy9leGVyY2lzZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksb0NBQW9DO0FBQ3hDO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0k7QUFDSjtBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMsMkJBQTJCO0FBQy9CO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxzR0FBc0c7QUFDMUc7QUFDQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsU0FBUztJQUNULGtDQUFrQztJQUNsQyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzREFBc0Q7QUFDMUQ7QUFDQTtJQUNJLG1DQUFtQztBQUN2QztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixZQUFZO0FBQ2hCO0FBRUE7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxjQUFjO0FBQ2xCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHVCQUF1QjtBQUMzQjtBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tZW51LWNsYXNzcm9vbS9jbGFzc3Jvb20vZXhlcmNpc2VzL2V4ZXJjaXNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10YWJsZSB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbm1hdC1mb290ZXItcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdywgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCwgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsMCwwLC4xMik7XG59XG4ubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICAgIGNvbG9yOiAjMDAwO1xufVxuLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xufVxuLm1hdC1oZWFkZXItY2VsbCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG4ubWF0LXBhZ2luYXRvciwgLm1hdC1oZWFkZXItcm93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wMylcbn1cbi5tYXQtcGFnaW5hdG9yLCAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xufVxuL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gICAgY29sb3I6IHJnYmEoMCwwLDAsLjcpICFpbXBvcnRhbnQ7XG4gICAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG4ubWF0LWNvbHVtbi1BY3Rpb24ge1xuICAgIGZsZXg6IDAgMCAyNSU7XG59XG4ubWF0LWNvbHVtbi1UaXRsZSB7XG4gICAgZmxleDogMCAwIDIwJTtcbn1cbi5tYXQtY29sdW1uLUV4ZWNUaW1lIHtcbiAgICBmbGV4OiAwIDAgMTAlO1xufVxuLm1hdC1jb2x1bW4tSWQge1xuICAgIGZsZXg6IDAgMCA2JTtcbn1cbi5tYXQtY29sdW1uLU1heFN1Ym1pc3Npb25zIHtcbiAgICBmbGV4OiAwIDAgOCU7XG59XG4uRGF0ZSwgLm1hdC1jb2x1bW4tQ2hlY2tDb3VudCB7XG4gICAgZmxleDogMCAwIDE1JTtcbn1cbi9kZWVwLyAubWF0LWVsZXZhdGlvbi16OCB7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDApLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDApO1xufVxuaW5wdXQge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG4gICAgYm9yZGVyOiAwO1xuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbi9kZWVwLyAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuL2RlZXAvIC5tYXQtc2VsZWN0LXZhbHVlLCAubWF0LXBhZ2luYXRvciwgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICAgIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4vZGVlcC8gLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XG4gICAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cbi5tYXQtcm93Om50aC1jaGlsZCgybisxKXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMTk2LCAyMDEsIDAuMTYpICFpbXBvcnRhbnQ7XG59XG4ubWF0LXJvdzpub3QoOm50aC1jaGlsZCgybisxKSl7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi51c2VyLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogYXV0bztcbn1cblxuLk5vdGV4cGlyZWQge1xuICAgIGNvbG9yOiAjMjhhNzQ1O1xufVxuLmV4cGlyZWQge1xuICAgIGNvbG9yOiAjOWQxZTE1O1xufVxuLmV4cGlyZWQsIC5Ob3RleHBpcmVkIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG59XG5cbmJ1dHRvbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLm1hdC1wcm9ncmVzcy1iYXJ7XG4gICAgaGVpZ2h0OiAyMHB4O1xufVxuXG46Om5nLWRlZXAgLm1hdC1wcm9ncmVzcy1iYXItYnVmZmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjRTRFOEVCO1xufVxuXG4jY2hlY2tCYXIge1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICB3aWR0aDogMTAwcHggIWltcG9ydGFudDtcbn1cblxuLmljb24ge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogMjBweDtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/menu-classroom/classroom/exercises/exercises.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/exercises/exercises.component.ts ***!
  \***************************************************************************/
/*! exports provided: ExercisesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExercisesComponent", function() { return ExercisesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/table.es5.js");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_control/util.control */ "./src/app/_control/util.control.ts");









var ExercisesComponent = /** @class */ (function () {
    function ExercisesComponent(host, router, _eventEmitter, _util) {
        this.host = host;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._util = _util;
        this.cAdmin = ['Id', 'Title', 'MaxSubmissions', 'Date', 'ExecTime', 'CheckCount', 'Answers', 'Action'];
        this.cUser = ['Id', 'Title', 'MaxSubmissions', 'Date', 'ExecTime', 'CheckCount', 'Answers'];
        this.exercises = [];
        this.response = {};
        this.userSession = {};
        this.load = 0;
        this.host.checkSessionID(this.constructor.name);
    }
    ExercisesComponent.prototype.ngAfterViewInit = function () {
        this.getExercises();
    };
    ExercisesComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ExercisesComponent.prototype.ngOnInit = function () {
        this.userSession = this.host.getSessionID();
        window.localStorage.removeItem("TryACode");
        this.module = window.localStorage.getItem("ClassModule");
        if (this.userSession.Module == 'Admin'
            || this.module == "Lecturer"
            || this.module == "Assistant")
            this.displayedColumns = this.cAdmin;
        else
            this.displayedColumns = this.cUser;
        this.IdClassroom = window.localStorage.getItem("ClassroomId");
    };
    ExercisesComponent.prototype.addExercise = function () {
        window.localStorage.removeItem("ExerciseId");
        this.router.navigate(['add-exercise']);
    };
    ;
    ExercisesComponent.prototype.viewAnswer = function (exercise, IsExpired) {
        window.localStorage.setItem("ExerciseId", exercise.Id.toString());
        this.router.navigate(['view-answer']);
    };
    ;
    ExercisesComponent.prototype.editExercise = function (exercise) {
        window.localStorage.setItem("ExerciseId", exercise.Id.toString());
        this.router.navigate(['edit-exercise']);
    };
    ;
    ExercisesComponent.prototype.setKey = function () {
        var _this = this;
        var input = [];
        input.push({ Model: '', Name: "key", Type: "text", Title: "Key" });
        var ret = this._util.openModal('Exercise Key', 'Please enter the key: ', 'Yes', 'No', input);
        ret.afterClosed().subscribe(function (data) {
            if (data && data['button'] == 'YES') {
                var key = void 0;
                if (data['input'][0] && data['input'][0]['Model'] != "")
                    key = data['input'][0]['Model'];
                var filter = [];
                filter.push({ Name: 'IdUser', Value: String(_this.userSession.Id) });
                filter.push({ Name: 'KeyAccess', Value: key });
                filter.push({ Name: 'IdClassroom', Value: _this.IdClassroom });
                var requestDB = {
                    Operation: "groupKey",
                    TableData: null,
                    Custom: "",
                    Filter: filter,
                };
                _this.host.request(requestDB, 'FDBRequest')
                    .subscribe(function (data) {
                    if (data) {
                        _this._util.setResponse(data['Status'], data['Name'], null, null);
                        _this.getExercises();
                    }
                });
            }
        });
    };
    ExercisesComponent.prototype.deleteExercise = function (exercise) {
        var _this = this;
        var ret = this._util.openModal('Delete Exercise: ' + exercise.Title, 'Confirm to delete the exercise?', 'Yes', 'No', '');
        ret.afterClosed().subscribe(function (data) {
            if (data['button'] == 'YES') {
                var filter = [];
                filter.push({ Name: "Id", Value: exercise.Id.toString() });
                var requestDB = {
                    Operation: "drop",
                    TableData: null,
                    Custom: "exercises",
                    Filter: filter,
                };
                _this.host.request(requestDB, 'FDBRequest')
                    .subscribe(function (data) {
                    _this.response = data;
                    _this._util.setResponse(_this.response['Status'], _this.response['Name'], null, null);
                    if (_this.response['Name'] == "ok") {
                        _this.getExercises();
                    }
                });
            }
        });
    };
    ExercisesComponent.prototype.showList = function (list) {
        var ret = this._util.openModal('Code Analysis by Clang-Tidy', list, 'Close', '', '');
    };
    ExercisesComponent.prototype.getExercises = function () {
        var _this = this;
        var filter = [];
        filter.push({ Name: "User", Value: String(this.userSession.Id) });
        filter.push({ Name: 'IdClassroom', Value: this.IdClassroom });
        var requestDB;
        if (this.userSession.Module == "User") {
            requestDB = {
                Operation: "view",
                TableData: null,
                Custom: "exercises-user",
                Filter: filter,
            };
        }
        if (this.userSession.Module == "Admin"
            || this.module == "Lecturer"
            || this.module == "Assistant") {
            requestDB = {
                Operation: "view",
                TableData: null,
                Custom: "exercises-admin",
                Filter: filter,
            };
        }
        var gTemp = [];
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            if (data) {
                _this.exercises = data;
                if (_this.exercises) {
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.exercises);
                    _this.dataSource.paginator = _this.paginator;
                    _this.dataSource.sort = _this.sort;
                }
                else {
                    delete _this.dataSource;
                }
            }
            _this.load = 1;
        });
    };
    ExercisesComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_8__["UtilControl"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], ExercisesComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], ExercisesComponent.prototype, "sort", void 0);
    ExercisesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exercises',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exercises.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/exercises/exercises.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exercises.component.css */ "./src/app/menu-classroom/classroom/exercises/exercises.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_8__["UtilControl"]])
    ], ExercisesComponent);
    return ExercisesComponent;
}());



/***/ }),

/***/ "./src/app/menu-classroom/classroom/groups/groups-edit/groups-edit.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/groups/groups-edit/groups-edit.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtY2xhc3Nyb29tL2NsYXNzcm9vbS9ncm91cHMvZ3JvdXBzLWVkaXQvZ3JvdXBzLWVkaXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/menu-classroom/classroom/groups/groups-edit/groups-edit.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/groups/groups-edit/groups-edit.component.ts ***!
  \**************************************************************************************/
/*! exports provided: GroupsEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsEditComponent", function() { return GroupsEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../_control/util.control */ "./src/app/_control/util.control.ts");







var GroupsEditComponent = /** @class */ (function () {
    function GroupsEditComponent(formBuilder, host, router, _eventEmitter, _util) {
        this.formBuilder = formBuilder;
        this.host = host;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._util = _util;
        this.submitted = false;
        this.response = {};
        this.host.checkSessionID(this.constructor.name);
    }
    GroupsEditComponent.prototype.ngOnInit = function () {
        this.module = window.localStorage.getItem("ClassModule");
        //Credentials
        if (this.host.getSessionID().Module != "Admin"
            && this.module != "Assistant"
            && this.module != "Lecturer") {
            this.router.navigate(['welcome']);
            return;
        }
        this.registerForm = this.formBuilder.group({
            Name: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60),
                ]
            ],
            KeyAccess: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60),
                ]
            ],
            Description: ['', []],
            Id: ['', []],
            IdClassroom: ['', []],
        }, {});
        this.groupId = Number(window.localStorage.getItem("editGroupId"));
        this.IdClassroom = Number(window.localStorage.getItem("ClassroomId"));
        if (this.groupId)
            this.getGroups(this.groupId);
    };
    Object.defineProperty(GroupsEditComponent.prototype, "fe", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    GroupsEditComponent.prototype.getGroups = function (groupId) {
        var _this = this;
        var filter = [];
        filter.push({ Name: "Id", Value: String(groupId) });
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "groups-edit",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            delete data[0]['mCount'];
            _this.registerForm.setValue(data[0]);
            //console.log("Groups Edit | dbList: ", data, requestDB);
        });
    };
    GroupsEditComponent.prototype.setRoute = function (val) {
        this.router.navigate([val]);
    };
    GroupsEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var temp = this.registerForm.value;
        temp['IdClassroom'] = this.IdClassroom;
        var filter = [];
        var requestDB = {
            Operation: "update",
            TableData: temp,
            Custom: "Groups",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            _this.response = data;
            if (_this.response.Name == "ok" && !_this.groupId)
                _this.response.Status = "Record inserted successfully.";
            if (_this.response.Name == "ok" && _this.groupId)
                _this.response.Status = "Record updated successfully.";
            _this._util.setResponse(_this.response['Status'], 'Go to Groups', _this.response['Name'], 'view-group');
            //console.log("Groups onSubmit | edit: ", this.editForm.value);
        });
    };
    GroupsEditComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_6__["UtilControl"] }
    ]; };
    GroupsEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'groups-app-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./groups-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/groups/groups-edit/groups-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./groups-edit.component.css */ "./src/app/menu-classroom/classroom/groups/groups-edit/groups-edit.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_6__["UtilControl"]])
    ], GroupsEditComponent);
    return GroupsEditComponent;
}());



/***/ }),

/***/ "./src/app/menu-classroom/classroom/groups/groups-members/groups-members.component.css":
/*!*********************************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/groups/groups-members/groups-members.component.css ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-input-element {\n  color: slategray;\n}\n.mat-form-field-label {\n  color: slategray;\n}\n.mat-form-field-underline {\n  background-color: slategray;\n}\n.mat-form-field-ripple {\n  background-color: slategray;\n}\n.mat-form-field-required-marker {\n  color: slategray;\n}\n.mat-form-field-label {\n  color: #ff884d;\n}\n.mat-form-field-ripple {\n  background-color: #ff884d;\n}\n.mat-form-field-required-marker {\n  color: #ff884d;\n}\n.mat-input-element {\n  color: #ff884d;\n}\n.mat-input-element {\n  color: #007bff;\n}\n.mat-form-field-label {\n  color: #007bff;\n}\n.mat-form-field-required-marker {\n  color: #007bff;\n}\n.mat-form-field-ripple {\n  background-color: #007bff;\n}\ninput {\n  width: 100%;\n  background-color: #fcfcfc;\n  border: 0;\n  border-bottom: 2px solid lightgrey;\n  padding: 10px;\n}\n::-webkit-input-placeholder { /* Edge */\n  color: gray;\n}\n::-moz-placeholder {\n  color: gray;\n}\n::-ms-input-placeholder {\n  color: gray;\n}\n::placeholder {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jbGFzc3Jvb20vY2xhc3Nyb29tL2dyb3Vwcy9ncm91cHMtbWVtYmVycy9ncm91cHMtbWVtYmVycy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmO0FBRUEsOEJBQThCLFNBQVM7RUFDckMsV0FBVztBQUNiO0FBTUE7RUFDRSxXQUFXO0FBQ2I7QUFGQTtFQUNFLFdBQVc7QUFDYjtBQUZBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbWVudS1jbGFzc3Jvb20vY2xhc3Nyb29tL2dyb3Vwcy9ncm91cHMtbWVtYmVycy9ncm91cHMtbWVtYmVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY29sb3I6IHNsYXRlZ3JheTtcbn1cbi5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiBzbGF0ZWdyYXk7XG59XG4ubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xufVxuLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcbn1cbi5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICBjb2xvcjogc2xhdGVncmF5O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogI2ZmODg0ZDtcbn1cbi5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4ODRkO1xufVxuLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gIGNvbG9yOiAjZmY4ODRkO1xufVxuLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY29sb3I6ICNmZjg4NGQ7XG59XG5cbi5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogRWRnZSAqL1xuICBjb2xvcjogZ3JheTtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiBncmF5O1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGdyYXk7XG59Il19 */");

/***/ }),

/***/ "./src/app/menu-classroom/classroom/groups/groups-members/groups-members.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/groups/groups-members/groups-members.component.ts ***!
  \********************************************************************************************/
/*! exports provided: GroupsMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsMembersComponent", function() { return GroupsMembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/keycodes.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/autocomplete.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../_control/util.control */ "./src/app/_control/util.control.ts");









var GroupsMembersComponent = /** @class */ (function () {
    function GroupsMembersComponent(host, formBuilder, router, _util) {
        var _this = this;
        this.host = host;
        this.formBuilder = formBuilder;
        this.router = router;
        this._util = _util;
        this.response = {};
        this.users = [];
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        this.memberCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.members = [];
        this.membersDrop = [];
        this.host.checkSessionID(this.constructor.name);
        this.filteredMembers = this.memberCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (member) { return member ? _this._filter(member) : _this.users.slice(); }));
    }
    GroupsMembersComponent.prototype.ngOnInit = function () {
        this.module = window.localStorage.getItem("ClassModule");
        //Credentials
        if (this.host.getSessionID().Module != "Admin"
            && this.module != "Assistant"
            && this.module != "Lecturer") {
            this.router.navigate(['welcome']);
            return;
        }
        this.editForm = this.formBuilder.group({
            Id: [''],
            IdUser: [''],
            IdGroup: [''],
            Name: [''],
        });
        this.IdClassroom = window.localStorage.getItem("ClassroomId");
        this.IdGroup = parseInt(window.localStorage.getItem("editGroupId"));
        this.groupName = window.localStorage.getItem("groupName");
        this.getUsers();
        this.getMembers();
    };
    GroupsMembersComponent.prototype.setRoute = function (val) {
        this.router.navigate([val]);
    };
    Object.defineProperty(GroupsMembersComponent.prototype, "f", {
        get: function () {
            return this.editForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    GroupsMembersComponent.prototype.add = function (member) {
        // Add our member
        if (member && member.Id != 'undefined') {
            this.members.push(member);
            this.memberCtrl.setValue(null);
        }
    };
    GroupsMembersComponent.prototype.remove = function (member) {
        var index = this.members.indexOf(member);
        if (index >= 0) {
            this.membersDrop.push(this.members[index]);
            this.members.splice(index, 1);
        }
    };
    GroupsMembersComponent.prototype.selected = function (event) {
        this.members.push(event.option.value);
        this.memberInput.nativeElement.value = '';
        this.memberCtrl.setValue(null);
    };
    GroupsMembersComponent.prototype._filter = function (value) {
        var usersFiltered = [];
        if (value != "" && typeof (value) != 'object') {
            this.users.forEach(function (i) {
                if (i.Name.trim().toLowerCase().includes(value.toLowerCase(), -1)) {
                    usersFiltered.push(i);
                }
            });
            return usersFiltered;
        }
    };
    GroupsMembersComponent.prototype.onSubmit = function () {
        var _this = this;
        this.deleteMembers();
        var temp = this.editForm;
        delete temp.controls['Name'];
        delete temp.controls['Id'];
        var _loop_1 = function (index) {
            temp.controls['IdUser'].setValue(this_1.members[index].Id);
            temp.controls['IdGroup'].setValue(this_1.IdGroup);
            var filter = [];
            var requestDB = {
                Operation: "update",
                TableData: temp.value,
                Custom: "GroupMembers",
                Filter: filter,
            };
            var res;
            this_1.host.request(requestDB, 'FDBRequest')
                .subscribe(function (data) {
                if (data) {
                    res = data;
                    if (res.Name == "ok" && parseInt(res.Status) > 0) {
                        _this.response.Name = "ok";
                        _this.response.Status = "Record updated successfully.";
                        //console.log(res);
                        _this._util.setResponse(_this.response['Status'], 'Go to Groups', _this.response['Name'], 'view-group');
                    }
                    _this.getMembers();
                }
            });
        };
        var this_1 = this;
        for (var index = 0; index < this.members.length; ++index) {
            _loop_1(index);
        }
    };
    GroupsMembersComponent.prototype.deleteMembers = function () {
        var _this = this;
        for (var index = 0; index < this.membersDrop.length; ++index) {
            var filter = [];
            filter.push({ Name: "IdUser", Value: this.membersDrop[index].Id.toString() });
            filter.push({ Name: "IdGroup", Value: this.IdGroup.toString() });
            var requestDB = {
                Operation: "drop",
                TableData: null,
                Custom: "GroupMembers",
                Filter: filter,
            };
            this.host.request(requestDB, 'FDBRequest')
                .subscribe(function (data) {
                _this.response = data;
                _this.response.Name = "ok";
                _this.response.Status = "Record updated successfully.";
                _this._util.setResponse(_this.response['Status'], 'Go to Groups', _this.response['Name'], 'view-group');
            });
            //console.log(requestDB);
        }
    };
    GroupsMembersComponent.prototype.getMembers = function () {
        var _this = this;
        var filter = [];
        filter.push({ Name: "IdGroup", Value: this.IdGroup.toString() });
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "members",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            if (data)
                _this.members = data;
            //console.log("GroupsMembers | getMembers ", this.members, request);
        });
    };
    GroupsMembersComponent.prototype.getUsers = function () {
        var _this = this;
        var filter = [];
        filter.push({ Name: 'Id', Value: this.IdClassroom });
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "users-classroom",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            _this.users = data;
            //console.log("Users | dbList: ", data);
        });
    };
    GroupsMembersComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_8__["UtilControl"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('memberInput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GroupsMembersComponent.prototype, "memberInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"])
    ], GroupsMembersComponent.prototype, "matAutocomplete", void 0);
    GroupsMembersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'groups-app-members',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./groups-members.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/groups/groups-members/groups-members.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./groups-members.component.css */ "./src/app/menu-classroom/classroom/groups/groups-members/groups-members.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_8__["UtilControl"]])
    ], GroupsMembersComponent);
    return GroupsMembersComponent;
}());



/***/ }),

/***/ "./src/app/menu-classroom/classroom/groups/groups.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/groups/groups.component.css ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-table {\n  background: #fff;\n}\nmat-footer-row, mat-header-row, mat-row, td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n  border-bottom-color: rgba(0,0,0,.12);\n}\n.mat-cell, .mat-footer-cell {\n  color: #000;\n}\n.mat-header-cell {\n  color: rgba(0,0,0,.7);\n}\n.mat-header-cell {\n  font-size: 14px;\n  font-weight: 700;\n}\n.mat-paginator, .mat-header-row {\n  background-color: rgba(0,0,0,.03)\n}\n.mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0,0,0,.7);\n}\n/deep/ .mat-form-field-label {\n  color: rgba(0,0,0,.7) !important;\n  font-weight: 700 !important;\n}\n.mat-form-field {\n  font-size: 14px;\n  margin-left: 10px;\n}\n.mat-column-Action {\n  flex: 0 0 40%;\n}\n.mat-column-Id {\n  flex: 0 0 10%;\n}\n.mat-column-Nome {\n  flex: 0 0 50%;\n}\n/deep/ .mat-elevation-z8 {\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 8px 10px 1px rgba(0, 0, 0, 0), 0 3px 14px 2px rgba(0, 0, 0, 0);\n}\ninput {\n  width: 100%;\n  background-color: #fcfcfc;\n  border: 0;\n  border-bottom: 2px solid lightgrey;\n  padding: 10px;\n}\n/deep/ .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #fff !important;\n}\n/deep/ .mat-select-value, .mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: #000 !important;\n}\n.mat-row:nth-child(2n+1){\n  background-color: rgba(187, 196, 201, 0.16) !important;\n}\n.mat-row:not(:nth-child(2n+1)){\n  background-color:#ffffff !important;\n}\n.user-container {\n  display: flex;\n  flex-direction: column;\n  margin: auto;\n}\nbutton {\n  margin-left: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jbGFzc3Jvb20vY2xhc3Nyb29tL2dyb3Vwcy9ncm91cHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxzR0FBc0c7QUFDeEc7QUFDQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsU0FBUztFQUNULGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzREFBc0Q7QUFDeEQ7QUFDQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL21lbnUtY2xhc3Nyb29tL2NsYXNzcm9vbS9ncm91cHMvZ3JvdXBzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYmxlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbm1hdC1mb290ZXItcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdywgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCwgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLDAsMCwuMTIpO1xufVxuLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgY29sb3I6ICMwMDA7XG59XG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xufVxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5tYXQtcGFnaW5hdG9yLCAubWF0LWhlYWRlci1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wMylcbn1cbi5tYXQtcGFnaW5hdG9yLCAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcbn1cbi9kZWVwLyAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNykgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5tYXQtY29sdW1uLUFjdGlvbiB7XG4gIGZsZXg6IDAgMCA0MCU7XG59XG4ubWF0LWNvbHVtbi1JZCB7XG4gIGZsZXg6IDAgMCAxMCU7XG59XG4ubWF0LWNvbHVtbi1Ob21lIHtcbiAgZmxleDogMCAwIDUwJTtcbn1cbi9kZWVwLyAubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwKSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwKTtcbn1cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgcGFkZGluZzogMTBweDtcbn1cbi9kZWVwLyAubWF0LWZvcm0tZmllbGQubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmYgIWltcG9ydGFudDtcbn1cbi9kZWVwLyAubWF0LXNlbGVjdC12YWx1ZSwgLm1hdC1wYWdpbmF0b3IsIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgY29sb3I6ICMwMDAgIWltcG9ydGFudDtcbn1cbi5tYXQtcm93Om50aC1jaGlsZCgybisxKXtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxODcsIDE5NiwgMjAxLCAwLjE2KSAhaW1wb3J0YW50O1xufVxuLm1hdC1yb3c6bm90KDpudGgtY2hpbGQoMm4rMSkpe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiNmZmZmZmYgIWltcG9ydGFudDtcbn1cbi51c2VyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1hcmdpbjogYXV0bztcbn1cblxuYnV0dG9uIHtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/menu-classroom/classroom/groups/groups.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/groups/groups.component.ts ***!
  \*********************************************************************/
/*! exports provided: GroupsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupsComponent", function() { return GroupsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/table.es5.js");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_control/util.control */ "./src/app/_control/util.control.ts");









var GroupsComponent = /** @class */ (function () {
    function GroupsComponent(host, router, _eventEmitter, _util) {
        this.host = host;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._util = _util;
        this.displayedColumns = ['Id', 'Name', 'KeyAccess', 'Action'];
        this.groups = [];
        this.response = {};
        this.load = 0;
        this.host.checkSessionID(this.constructor.name);
    }
    GroupsComponent.prototype.ngAfterViewInit = function () {
        this.getGroups();
    };
    GroupsComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    GroupsComponent.prototype.ngOnInit = function () {
        this.module = window.localStorage.getItem("ClassModule");
        //Credentials
        if (this.host.getSessionID().Module != "Admin"
            && this.module != "Assistant"
            && this.module != "Lecturer") {
            this.router.navigate(['welcome']);
            return;
        }
        this.IdClassroom = window.localStorage.getItem("ClassroomId");
    };
    GroupsComponent.prototype.addGroup = function () {
        window.localStorage.removeItem("editGroupId");
        this.router.navigate(['add-group']);
    };
    ;
    GroupsComponent.prototype.addMembers = function (group) {
        window.localStorage.setItem("editGroupId", group.Id.toString());
        window.localStorage.setItem("groupName", group.Name);
        this.router.navigate(['add-members']);
    };
    ;
    GroupsComponent.prototype.editGroup = function (group) {
        window.localStorage.setItem("editGroupId", group.Id.toString());
        this.router.navigate(['edit-group']);
    };
    ;
    GroupsComponent.prototype.deleteGroup = function (group) {
        var _this = this;
        var ret = this._util.openModal('Delete Group: ' + group.Name, 'Confirm to delete the group?', 'Yes', 'No', '');
        ret.afterClosed().subscribe(function (data) {
            if (data['button'] == 'YES') {
                var filter = [];
                filter.push({ Name: "Id", Value: group.Id.toString() });
                var requestDB = {
                    Operation: "drop",
                    TableData: null,
                    Custom: "groups",
                    Filter: filter,
                };
                _this.host.request(requestDB, 'FDBRequest')
                    .subscribe(function (data) {
                    _this.response = data;
                    _this._util.setResponse(_this.response['Status'], _this.response['Name'], null, null);
                    if (_this.response['Name'] == "ok") {
                        _this.getGroups();
                    }
                });
            }
        });
    };
    GroupsComponent.prototype.getGroups = function () {
        var _this = this;
        var filter = [];
        filter.push({ Name: 'IdClassroom', Value: this.IdClassroom });
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "groups",
            Filter: filter,
        };
        var gTemp = [];
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            _this.groups = data;
            if (_this.groups) {
                //console.log("Groups | dbList: ", data);
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.groups);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
            else {
                delete _this.dataSource;
            }
            _this.load = 1;
        });
    };
    GroupsComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_8__["UtilControl"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], GroupsComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], GroupsComponent.prototype, "sort", void 0);
    GroupsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-groups',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./groups.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/groups/groups.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./groups.component.css */ "./src/app/menu-classroom/classroom/groups/groups.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_8__["UtilControl"]])
    ], GroupsComponent);
    return GroupsComponent;
}());



/***/ }),

/***/ "./src/app/menu-classroom/classroom/users/users-edit/users-edit.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/users/users-edit/users-edit.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lbnUtY2xhc3Nyb29tL2NsYXNzcm9vbS91c2Vycy91c2Vycy1lZGl0L3VzZXJzLWVkaXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/menu-classroom/classroom/users/users-edit/users-edit.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/users/users-edit/users-edit.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UsersClassroomEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersClassroomEditComponent", function() { return UsersClassroomEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../_control/util.control */ "./src/app/_control/util.control.ts");







var UsersClassroomEditComponent = /** @class */ (function () {
    function UsersClassroomEditComponent(formBuilder, host, router, _eventEmitter, _util) {
        this.formBuilder = formBuilder;
        this.host = host;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._util = _util;
        this.submitted = false;
        this.response = {};
        this.userSession = {};
        this.members = {};
        this.host.checkSessionID(this.constructor.name);
    }
    UsersClassroomEditComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            Name: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60),
                ]
            ],
            Password: ['',
                [,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                ]
            ],
            CPassword: ['',
                [,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                ]
            ],
            Email: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]
            ],
            Module: ['Student', []],
            ForceChangePass: ['0', []],
            Id: ['', []],
        }, { validator: this.checkPassword });
        this.IdClassroom = Number(window.localStorage.getItem("ClassroomId"));
        this.module = window.localStorage.getItem("ClassModule");
        this.userSession = this.host.getSessionID();
        //Getting Credentials
        if (this.host.getSessionID().Module != "Admin"
            && this.module != "Assistant"
            && this.module != "Lecturer") {
            this.router.navigate(['welcome']);
            return;
        }
        this.userId = Number(window.localStorage.getItem("editUserClassroomId"));
        if (this.userId && this.IdClassroom)
            this.getUsers(this.userId, this.IdClassroom);
    };
    UsersClassroomEditComponent.prototype.checkPassword = function (control) {
        if (control.get('Password').value != control.get('CPassword').value) {
            control.get('CPassword').setErrors({
                mismatch: true
            });
        }
        return false;
    };
    Object.defineProperty(UsersClassroomEditComponent.prototype, "fe", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    UsersClassroomEditComponent.prototype.getUsers = function (userId, IdClassroom) {
        var _this = this;
        var filter = [];
        if (userId && IdClassroom) {
            filter.push({ Name: 'Id', Value: String(userId) });
            filter.push({ Name: 'IdClassroom', Value: String(IdClassroom) });
            var requestDB = {
                Operation: "view",
                TableData: null,
                Custom: "users-classroom-edit",
                Filter: filter,
            };
            this.host.request(requestDB, 'FDBRequest')
                .subscribe(function (data) {
                if (data[0]) {
                    _this.Id = data[0]['IdCM'];
                    delete (data[0]['IdCM']);
                    data[0]['CPassword'] = "";
                    data[0]['Password'] = "";
                    _this.registerForm.setValue(data[0]);
                }
            });
        }
    };
    UsersClassroomEditComponent.prototype.setRoute = function (val) {
        this.router.navigate([val]);
    };
    UsersClassroomEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.registerForm.disable();
        this.disabled = true;
        var temp = this.registerForm.value;
        delete temp['CPassword'];
        delete temp['Owner'];
        var m = temp['Module'];
        temp['Module'] = "User";
        if (temp['Password'] == "")
            delete (temp['Password']);
        var filter = [];
        var requestDB = {
            Operation: "update",
            TableData: temp,
            Custom: "Users",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            _this.response = data;
            if (_this.response.Name == "ok" || _this.response.Name == "info") {
                _this.insertMember(parseInt(_this.response.Status), m);
                _this.response.Status = "Record inserted successfully.";
                _this.response.Name = "ok";
            }
            else {
                _this.registerForm.enable();
                _this.disabled = true;
            }
            _this._util.setResponse(_this.response.Status, 'Go to Users', _this.response['Name'], 'view-user-classroom');
            //console.log("requestDB | this.response ", requestDB, this.response);
        });
    };
    UsersClassroomEditComponent.prototype.insertMember = function (Id, m) {
        var _this = this;
        this.members.IdUser = Number(this.userId);
        if (!this.userId)
            this.members.IdUser = Id;
        this.members.IdClassroom = Number(this.IdClassroom);
        this.members.Module = m;
        this.members.Id = this.Id;
        var filter = [];
        var requestDB = {
            Operation: "update",
            TableData: this.members,
            Custom: "ClassMembers",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            _this.response = data;
            if (_this.response.Name != "ok" && _this.response.Name != "info") {
                _this._util.setResponse(_this.response.Status, 'Go to Users', _this.response['Name'], 'view-user-classroom');
            }
        });
        //console.log("requestDB | this.response ", requestDB, this.response);
        this.getUsers(this.userId, this.IdClassroom);
        this.registerForm.enable();
        this.disabled = false;
    };
    UsersClassroomEditComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_6__["UtilControl"] }
    ]; };
    UsersClassroomEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'users-app-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/users/users-edit/users-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users-edit.component.css */ "./src/app/menu-classroom/classroom/users/users-edit/users-edit.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_6__["UtilControl"]])
    ], UsersClassroomEditComponent);
    return UsersClassroomEditComponent;
}());



/***/ }),

/***/ "./src/app/menu-classroom/classroom/users/users-join/users-join.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/users/users-join/users-join.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-input-element {\n  color: slategray;\n}\n.mat-form-field-label {\n  color: slategray;\n}\n.mat-form-field-underline {\n  background-color: slategray;\n}\n.mat-form-field-ripple {\n  background-color: slategray;\n}\n.mat-form-field-required-marker {\n  color: slategray;\n}\n.mat-form-field-label {\n  color: #ff884d;\n}\n.mat-form-field-ripple {\n  background-color: #ff884d;\n}\n.mat-form-field-required-marker {\n  color: #ff884d;\n}\n.mat-input-element {\n  color: #ff884d;\n}\n.mat-input-element {\n  color: #007bff;\n}\n.mat-form-field-label {\n  color: #007bff;\n}\n.mat-form-field-required-marker {\n  color: #007bff;\n}\n.mat-form-field-ripple {\n  background-color: #007bff;\n}\ninput {\n  width: 100%;\n  background-color: #fcfcfc;\n  border: 0;\n  border-bottom: 2px solid lightgrey;\n  padding: 10px;\n}\n::-webkit-input-placeholder { /* Edge */\n  color: gray;\n}\n::-moz-placeholder {\n  color: gray;\n}\n::-ms-input-placeholder {\n  color: gray;\n}\n::placeholder {\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jbGFzc3Jvb20vY2xhc3Nyb29tL3VzZXJzL3VzZXJzLWpvaW4vdXNlcnMtam9pbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UsY0FBYztBQUNoQjtBQUVBO0VBQ0UseUJBQXlCO0FBQzNCO0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmO0FBRUEsOEJBQThCLFNBQVM7RUFDckMsV0FBVztBQUNiO0FBTUE7RUFDRSxXQUFXO0FBQ2I7QUFGQTtFQUNFLFdBQVc7QUFDYjtBQUZBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbWVudS1jbGFzc3Jvb20vY2xhc3Nyb29tL3VzZXJzL3VzZXJzLWpvaW4vdXNlcnMtam9pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY29sb3I6IHNsYXRlZ3JheTtcbn1cbi5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiBzbGF0ZWdyYXk7XG59XG4ubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogc2xhdGVncmF5O1xufVxuLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHNsYXRlZ3JheTtcbn1cbi5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICBjb2xvcjogc2xhdGVncmF5O1xufVxuXG4ubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogI2ZmODg0ZDtcbn1cbi5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4ODRkO1xufVxuLm1hdC1mb3JtLWZpZWxkLXJlcXVpcmVkLW1hcmtlciB7XG4gIGNvbG9yOiAjZmY4ODRkO1xufVxuLm1hdC1pbnB1dC1lbGVtZW50IHtcbiAgY29sb3I6ICNmZjg4NGQ7XG59XG5cbi5tYXQtaW5wdXQtZWxlbWVudCB7XG4gIGNvbG9yOiAjMDA3YmZmO1xufVxuLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6ICMwMDdiZmY7XG59XG5cbi5tYXQtZm9ybS1maWVsZC1yZXF1aXJlZC1tYXJrZXIge1xuICBjb2xvcjogIzAwN2JmZjtcbn1cblxuLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmY2ZjZmM7XG4gIGJvcmRlcjogMDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHsgLyogRWRnZSAqL1xuICBjb2xvcjogZ3JheTtcbn1cblxuOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gIGNvbG9yOiBncmF5O1xufVxuXG46OnBsYWNlaG9sZGVyIHtcbiAgY29sb3I6IGdyYXk7XG59Il19 */");

/***/ }),

/***/ "./src/app/menu-classroom/classroom/users/users-join/users-join.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/users/users-join/users-join.component.ts ***!
  \***********************************************************************************/
/*! exports provided: UsersClassroomJoinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersClassroomJoinComponent", function() { return UsersClassroomJoinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../..//../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/esm5/keycodes.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/autocomplete.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../_control/util.control */ "./src/app/_control/util.control.ts");










var UsersClassroomJoinComponent = /** @class */ (function () {
    function UsersClassroomJoinComponent(host, formBuilder, router, _snackBar, _util) {
        var _this = this;
        this.host = host;
        this.formBuilder = formBuilder;
        this.router = router;
        this._snackBar = _snackBar;
        this._util = _util;
        this.response = {};
        this.users = [];
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_5__["COMMA"]];
        this.memberCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.members = [];
        this.membersDrop = [];
        this.host.checkSessionID(this.constructor.name);
        this.filteredMembers = this.memberCtrl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (member) { return member ? _this._filter(member) : _this.users.slice(); }));
    }
    UsersClassroomJoinComponent.prototype.ngOnInit = function () {
        this.module = window.localStorage.getItem("ClassModule");
        if (this.host.getSessionID().Module != "Admin"
            && this.module != "Assistant"
            && this.module != "Lecturer") {
            this.router.navigate(['welcome']);
            return;
        }
        this.editForm = this.formBuilder.group({
            Id: [''],
            IdUser: [''],
            IdClassroom: [''],
            Name: [''],
        });
        this.IdClassroom = window.localStorage.getItem("ClassroomId");
        this.getUsers();
        this.getMembers();
    };
    UsersClassroomJoinComponent.prototype.setRoute = function (val) {
        this.router.navigate([val]);
    };
    Object.defineProperty(UsersClassroomJoinComponent.prototype, "f", {
        get: function () {
            return this.editForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    UsersClassroomJoinComponent.prototype.add = function (member) {
        // Add our member
        if (member && member.Id != 'undefined') {
            this.members.push(member);
            this.memberCtrl.setValue(null);
        }
    };
    UsersClassroomJoinComponent.prototype.selected = function (event) {
        this.members.push(event.option.value);
        this.memberInput.nativeElement.value = '';
        this.memberCtrl.setValue(null);
    };
    UsersClassroomJoinComponent.prototype._filter = function (value) {
        var usersFiltered = [];
        if (value != "" && typeof (value) != 'object') {
            this.users.forEach(function (i) {
                if (i.Name.trim().toLowerCase().includes(value.toLowerCase(), -1)) {
                    usersFiltered.push(i);
                }
            });
            return usersFiltered;
        }
    };
    UsersClassroomJoinComponent.prototype.onSubmit = function () {
        var _this = this;
        var temp = this.editForm;
        delete temp.controls['Name'];
        delete temp.controls['Id'];
        var _loop_1 = function (index) {
            temp.controls['IdUser'].setValue(this_1.members[index].Id);
            temp.controls['IdClassroom'].setValue(this_1.IdClassroom);
            var filter = [];
            var requestDB = {
                Operation: "update",
                TableData: temp.value,
                Custom: "ClassMembers",
                Filter: filter,
            };
            var res;
            this_1.host.request(requestDB, 'FDBRequest')
                .subscribe(function (data) {
                if (data) {
                    res = data;
                    if (res.Name == "ok" && parseInt(res.Status) > 0) {
                        _this.response.Name = "ok";
                        _this.response.Status = "Record updated successfully.";
                        //console.log(res);
                        _this._util.setResponse(_this.response['Status'], 'Go to Users', _this.response['Name'], 'view-user-classroom');
                    }
                    _this.getMembers();
                }
            });
        };
        var this_1 = this;
        for (var index = 0; index < this.members.length; ++index) {
            _loop_1(index);
        }
    };
    UsersClassroomJoinComponent.prototype.getMembers = function () {
        var _this = this;
        var filter = [];
        filter.push({ Name: 'IdClassroom', Value: this.IdClassroom });
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "users-classroom",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            if (data)
                _this.members = data;
            //console.log("GroupsMembers | getMembers ", this.members, request);
        });
    };
    UsersClassroomJoinComponent.prototype.getUsers = function () {
        var _this = this;
        var filter = [];
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "users",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            _this.users = data;
            //console.log("Users | dbList: ", data);
        });
    };
    UsersClassroomJoinComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_9__["UtilControl"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('memberInput', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UsersClassroomJoinComponent.prototype, "memberInput", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('auto', { static: false }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_6__["MatAutocomplete"])
    ], UsersClassroomJoinComponent.prototype, "matAutocomplete", void 0);
    UsersClassroomJoinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'class-app-users-join',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users-join.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/users/users-join/users-join.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users-join.component.css */ "./src/app/menu-classroom/classroom/users/users-join/users-join.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_9__["UtilControl"]])
    ], UsersClassroomJoinComponent);
    return UsersClassroomJoinComponent;
}());



/***/ }),

/***/ "./src/app/menu-classroom/classroom/users/users.component.css":
/*!********************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/users/users.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-table {\n  background: #fff;\n}\nmat-footer-row, mat-header-row, mat-row, td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n  border-bottom-color: rgba(0,0,0,.12);\n}\n.mat-cell, .mat-footer-cell {\n  color: #000;\n}\n.mat-header-cell {\n  color: rgba(0,0,0,.7);\n}\n.mat-header-cell {\n  font-size: 14px;\n  font-weight: 700;\n}\n.mat-paginator, .mat-header-row {\n  background-color: rgba(0,0,0,.03)\n}\n.mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0,0,0,.7);\n}\n/deep/ .mat-form-field-label {\n  color: rgba(0,0,0,.7) !important;\n  font-weight: 700 !important;\n}\n.mat-form-field {\n  font-size: 14px;\n  margin-left: 10px;\n}\n.mat-column-Action {\n  flex: 0 0 20%;\n}\n.mat-column-Id, .mat-column-Module {\n  flex: 0 0 10%;\n}\n.mat-column-Nome, .mat-column-Email {\n  flex: 0 0 30%;\n}\n/deep/ .mat-elevation-z8 {\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 8px 10px 1px rgba(0, 0, 0, 0), 0 3px 14px 2px rgba(0, 0, 0, 0);\n}\ninput {\n  width: 100%;\n  background-color: #fcfcfc;\n  border: 0;\n  border-bottom: 2px solid lightgrey;\n  padding: 10px;\n}\n/deep/ .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #fff !important;\n}\n/deep/ .mat-select-value, .mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: #000 !important;\n}\n.mat-row:nth-child(2n+1){\n  background-color: rgba(187, 196, 201, 0.16) !important;\n}\n.mat-row:not(:nth-child(2n+1)){\n  background-color:#ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jbGFzc3Jvb20vY2xhc3Nyb29tL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usc0dBQXNHO0FBQ3hHO0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usc0RBQXNEO0FBQ3hEO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9tZW51LWNsYXNzcm9vbS9jbGFzc3Jvb20vdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxubWF0LWZvb3Rlci1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtcm93LCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsLCB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsMCwwLC4xMik7XG59XG4ubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICBjb2xvcjogIzAwMDtcbn1cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG59XG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLm1hdC1wYWdpbmF0b3IsIC5tYXQtaGVhZGVyLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAzKVxufVxuLm1hdC1wYWdpbmF0b3IsIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xufVxuL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLC43KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm1hdC1jb2x1bW4tQWN0aW9uIHtcbiAgZmxleDogMCAwIDIwJTtcbn1cbi5tYXQtY29sdW1uLUlkLCAubWF0LWNvbHVtbi1Nb2R1bGUge1xuICBmbGV4OiAwIDAgMTAlO1xufVxuLm1hdC1jb2x1bW4tTm9tZSwgLm1hdC1jb2x1bW4tRW1haWwge1xuICBmbGV4OiAwIDAgMzAlO1xufVxuL2RlZXAvIC5tYXQtZWxldmF0aW9uLXo4IHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDApLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4vZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4vZGVlcC8gLm1hdC1zZWxlY3QtdmFsdWUsIC5tYXQtcGFnaW5hdG9yLCAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4ubWF0LXJvdzpudGgtY2hpbGQoMm4rMSl7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAxOTYsIDIwMSwgMC4xNikgIWltcG9ydGFudDtcbn1cbi5tYXQtcm93Om5vdCg6bnRoLWNoaWxkKDJuKzEpKXtcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/menu-classroom/classroom/users/users.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/menu-classroom/classroom/users/users.component.ts ***!
  \*******************************************************************/
/*! exports provided: UsersClassroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersClassroomComponent", function() { return UsersClassroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/table.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../_control/util.control */ "./src/app/_control/util.control.ts");










var UsersClassroomComponent = /** @class */ (function () {
    function UsersClassroomComponent(host, router, _eventEmitter, _util, _snackBar) {
        this.host = host;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._util = _util;
        this._snackBar = _snackBar;
        this.displayedColumns = ['Id', 'Name', 'Email', 'Module', 'Action'];
        this.users = [];
        this.response = {};
        this.userSession = {};
        this.load = 0;
        this.host.checkSessionID(this.constructor.name);
    }
    UsersClassroomComponent.prototype.ngAfterViewInit = function () {
        this.getUsers();
    };
    UsersClassroomComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    UsersClassroomComponent.prototype.ngOnInit = function () {
        this.IdClassroom = window.localStorage.getItem("ClassroomId");
        //console.log(this.IdClassroom);
        this.module = window.localStorage.getItem("ClassModule");
        //Credentials
        if (this.host.getSessionID().Module == "User" &&
            this.module != "Assistant" && this.module != "Lecturer") {
            window.localStorage.setItem("editUserId", String(this.host.getSessionID().Id));
            this.router.navigate(['edit-user']);
            return;
        }
        if (this.host.getSessionID().Module != "Admin"
            && this.module != "Assistant"
            && this.module != "Lecturer") {
            this.router.navigate(['welcome']);
            return;
        }
        this.userSession = this.host.getSessionID();
    };
    UsersClassroomComponent.prototype.addUser = function () {
        window.localStorage.removeItem("editUserClassroomId");
        this.router.navigate(['add-user-classroom']);
    };
    ;
    UsersClassroomComponent.prototype.joinUser = function () {
        window.localStorage.setItem("ClassroomId", this.IdClassroom.toString());
        this.router.navigate(['add-join-classroom']);
    };
    ;
    UsersClassroomComponent.prototype.editUser = function (user) {
        window.localStorage.setItem("editUserClassroomId", user.Id.toString());
        this.router.navigate(['edit-user-classroom']);
    };
    ;
    UsersClassroomComponent.prototype.deleteUser = function (user) {
        var _this = this;
        var ret = this._util.openModal('Remove User: ' + user.Name, 'Confirm remove the user from the classroom?', 'Yes', 'No', '');
        ret.afterClosed().subscribe(function (data) {
            if (data['button'] == 'YES') {
                var filter = [];
                filter.push({ Name: "IdUser", Value: user.Id.toString() });
                filter.push({ Name: "IdClassroom", Value: _this.IdClassroom });
                var requestDB = {
                    Operation: "drop",
                    TableData: null,
                    Custom: "classMembers",
                    Filter: filter,
                };
                _this.host.request(requestDB, 'FDBRequest')
                    .subscribe(function (data) {
                    _this.response = data;
                    _this._util.setResponse(_this.response['Status'], _this.response['Name'], null, null);
                    if (_this.response['Name'] == "ok") {
                        _this.getUsers();
                    }
                });
            }
        });
    };
    UsersClassroomComponent.prototype.getUsers = function () {
        var _this = this;
        var filter = [];
        filter.push({ Name: 'IdClassroom', Value: this.IdClassroom });
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "users-classroom",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            _this.users = data;
            if (_this.users) {
                // Assign the data to the data source for the table to render
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.users);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
            else {
                delete _this.dataSource;
            }
            _this.load = 1;
            //console.log("Users | dbList: ", data);
        });
    };
    UsersClassroomComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_9__["UtilControl"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], UsersClassroomComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], UsersClassroomComponent.prototype, "sort", void 0);
    UsersClassroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/classroom/users/users.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.css */ "./src/app/menu-classroom/classroom/users/users.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_9__["UtilControl"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], UsersClassroomComponent);
    return UsersClassroomComponent;
}());



/***/ }),

/***/ "./src/app/menu-classroom/menu-classroom.component.css":
/*!*************************************************************!*\
  !*** ./src/app/menu-classroom/menu-classroom.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tags {\n  min-height: 150px;\n  min-width: 20vw;\n  max-width: calc(100vw - 35px);\n}\n\n.module {\n  padding: 0.5em;\n  margin-left: -20px;\n  display: inline-block;\n  line-height: 40px;\n}\n\n.emptyClassroom {\n  margin-top: 10px;\n}\n\n.hasClassroom {\n  margin-top: -10px;\n}\n\n.divTable{\n  display: table;\n  padding-left: 20px;\n}\n\n.divTableRow {\n  display: table-row;\n}\n\n.divTableHeading {\n  background-color: #EEE;\n  display: table-header-group;\n}\n\n.divTableCell, .divTableHead {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.divTableHeading {\n  background-color: #EEE;\n  display: table-header-group;\n  font-weight: bold;\n}\n\n.divTableFoot {\n  background-color: #EEE;\n  display: table-footer-group;\n  font-weight: bold;\n}\n\n.divTableBody {\n  display: table-row-group;\n  font-size: 12px;\n}\n\n/deep/ .mat-primary .mat-option.mat-selected:not(.mat-option-disabled) {\n  color: #fff;\n}\n\n/deep/ .mat-select-panel {\n  /* background-color: #007bff; */\n  color: #0a0a0a;\n}\n\n/deep/ .mat-select-value {\n  color: #000;\n}\n\n/deep/ .mat-select-arrow {\n  color:  #000;\n}\n\n/deep/ .mat-form-field-type-mat-select .mat-form-field-label {\n  color:  #000;\n}\n\n/deep/ .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #000;\n}\n\n/deep/ .mat-hint {\n  color: blue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jbGFzc3Jvb20vbWVudS1jbGFzc3Jvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsK0JBQStCO0VBQy9CLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tZW51LWNsYXNzcm9vbS9tZW51LWNsYXNzcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhZ3Mge1xuICBtaW4taGVpZ2h0OiAxNTBweDtcbiAgbWluLXdpZHRoOiAyMHZ3O1xuICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSAzNXB4KTtcbn1cblxuLm1vZHVsZSB7XG4gIHBhZGRpbmc6IDAuNWVtO1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XG59XG5cbi5lbXB0eUNsYXNzcm9vbSB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5oYXNDbGFzc3Jvb20ge1xuICBtYXJnaW4tdG9wOiAtMTBweDtcbn1cblxuLmRpdlRhYmxle1xuICBkaXNwbGF5OiB0YWJsZTtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xufVxuLmRpdlRhYmxlUm93IHtcbiAgZGlzcGxheTogdGFibGUtcm93O1xufVxuLmRpdlRhYmxlSGVhZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcbn1cbi5kaXZUYWJsZUNlbGwsIC5kaXZUYWJsZUhlYWQge1xuICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuLmRpdlRhYmxlSGVhZGluZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIGRpc3BsYXk6IHRhYmxlLWhlYWRlci1ncm91cDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZGl2VGFibGVGb290IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VFRTtcbiAgZGlzcGxheTogdGFibGUtZm9vdGVyLWdyb3VwO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5kaXZUYWJsZUJvZHkge1xuICBkaXNwbGF5OiB0YWJsZS1yb3ctZ3JvdXA7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuL2RlZXAvIC5tYXQtcHJpbWFyeSAubWF0LW9wdGlvbi5tYXQtc2VsZWN0ZWQ6bm90KC5tYXQtb3B0aW9uLWRpc2FibGVkKSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4vZGVlcC8gLm1hdC1zZWxlY3QtcGFuZWwge1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyAqL1xuICBjb2xvcjogIzBhMGEwYTtcbn1cblxuL2RlZXAvIC5tYXQtc2VsZWN0LXZhbHVlIHtcbiAgY29sb3I6ICMwMDA7XG59XG5cbi9kZWVwLyAubWF0LXNlbGVjdC1hcnJvdyB7XG4gIGNvbG9yOiAgIzAwMDtcbn1cblxuL2RlZXAvIC5tYXQtZm9ybS1maWVsZC10eXBlLW1hdC1zZWxlY3QgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgY29sb3I6ICAjMDAwO1xufVxuXG4vZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xufVxuXG4vZGVlcC8gLm1hdC1oaW50IHtcbiAgY29sb3I6IGJsdWU7XG59Il19 */");

/***/ }),

/***/ "./src/app/menu-classroom/menu-classroom.component.ts":
/*!************************************************************!*\
  !*** ./src/app/menu-classroom/menu-classroom.component.ts ***!
  \************************************************************/
/*! exports provided: MenuClassroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuClassroomComponent", function() { return MenuClassroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");







var MenuClassroomComponent = /** @class */ (function () {
    function MenuClassroomComponent(router, host, _eventEmitter, _snackBar) {
        this.router = router;
        this.host = host;
        this._eventEmitter = _eventEmitter;
        this._snackBar = _snackBar;
        this.myGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            classroomControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])
        });
        this.userSession = {};
        this.response = {};
        this.classroom = [];
        this.classroomList = [];
        this.classSelected = {};
        this.onChangeClick = false;
        this.reload = 0;
    }
    MenuClassroomComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reload = 1;
        window.localStorage.removeItem("TryACode");
        this.userSession = this.host.getSessionID();
        if (this.userSession.Id) {
            this.getClassroom('1');
        }
        //Getting value from HostCredentials
        this.subLogin = this._eventEmitter.loginChange.subscribe(function (data) {
            _this.userSession = _this.host.getSessionID();
            if (data['Name'] == "stopSession") {
                window.localStorage.removeItem("ClassroomId");
                window.localStorage.removeItem("ClassModule");
                _this.classroom = {};
                _this.classroomList = {};
                _this.classSelected = {};
                _this.userModule = "";
            }
            if (_this.userSession.Id && data['Name'] == "startSession") {
                _this.getClassroom('1');
            }
        });
        //Getting value from HostCredentials
        this.subClassroom = this._eventEmitter.classroom.subscribe(function (data) {
            if (!_this.onChangeClick) {
                _this.getClassroom('1');
                _this.classSelected = data;
                _this.userModule = data['Module'];
                //console.log("MenuClassroom-component|_eventEmitter", data);
            }
        });
    };
    MenuClassroomComponent.prototype.ngOnDestroy = function () {
        this.subLogin.unsubscribe();
        this.subClassroom.unsubscribe();
    };
    MenuClassroomComponent.prototype.setRoute = function (val) {
        if (this.classSelected.Id)
            window.localStorage.setItem("ClassroomId", this.classSelected.Id.toString());
        this.router.navigate([val]);
    };
    MenuClassroomComponent.prototype.compareObjects = function (o1, o2) {
        return o1.Id === o2.Id;
    };
    MenuClassroomComponent.prototype.onChange = function () {
        if (this.classSelected) {
            this.getClassroom('0');
            window.localStorage.setItem("ClassroomId", this.classSelected.Id.toString());
            this.router.navigate(['view-classroom']);
            this.waitLoadComponent();
        }
    };
    MenuClassroomComponent.prototype.waitLoadComponent = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var waitLoad, loop;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        waitLoad = 'N';
                        loop = true;
                        _a.label = 1;
                    case 1:
                        if (!loop) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.delay(100)];
                    case 2:
                        _a.sent();
                        waitLoad = window.localStorage.getItem("waitLoadComponent");
                        if (waitLoad == 'S') {
                            loop = false;
                        }
                        return [3 /*break*/, 1];
                    case 3:
                        this.onChangeClick = true;
                        this._eventEmitter.setClassroom(this.classSelected);
                        this.onChangeClick = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    MenuClassroomComponent.prototype.delay = function (ms) {
        return new Promise(function (resolve) {
            setTimeout(function () {
                resolve(true);
            }, ms);
        });
    };
    MenuClassroomComponent.prototype.getClassroom = function (list) {
        var _this = this;
        if (!this.userSession.Id)
            return;
        var filter = [];
        var custom;
        if (this.userSession.Module == 'Admin')
            custom = "classroom-list-admin";
        if (this.userSession.Module != 'Admin') {
            filter.push({ Name: "IdUser", Value: this.userSession.Id.toString() });
            filter.push({ Name: "Enabled", Value: '1' });
            custom = "classroom-list";
        }
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: custom,
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            if (data) {
                _this.classroom = data;
                if (list == '1') {
                    _this.classroomList = data;
                }
                if (_this.reload) {
                    var classSel_1;
                    _this.classroom.forEach(function (i) {
                        if (String(i.Id) == window.localStorage.getItem("ClassroomId"))
                            classSel_1 = i;
                    });
                    if (classSel_1) {
                        _this.classSelected = classSel_1;
                        _this.userModule = classSel_1['Module'];
                        _this._eventEmitter.setClassroom(_this.classSelected);
                    }
                    _this.reload = 0;
                }
            }
        });
    };
    MenuClassroomComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    MenuClassroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-classroom',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-classroom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-classroom/menu-classroom.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-classroom.component.css */ "./src/app/menu-classroom/menu-classroom.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], MenuClassroomComponent);
    return MenuClassroomComponent;
}());



/***/ }),

/***/ "./src/app/menu-management/classroom-manager/classroom-manager-edit/classroom-manager-edit.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/menu-management/classroom-manager/classroom-manager-edit/classroom-manager-edit.component.css ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".description h1 {\n    font-size: 1.5rem !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1tYW5hZ2VtZW50L2NsYXNzcm9vbS1tYW5hZ2VyL2NsYXNzcm9vbS1tYW5hZ2VyLWVkaXQvY2xhc3Nyb29tLW1hbmFnZXItZWRpdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNEJBQTRCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvbWVudS1tYW5hZ2VtZW50L2NsYXNzcm9vbS1tYW5hZ2VyL2NsYXNzcm9vbS1tYW5hZ2VyLWVkaXQvY2xhc3Nyb29tLW1hbmFnZXItZWRpdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRlc2NyaXB0aW9uIGgxIHtcbiAgICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/menu-management/classroom-manager/classroom-manager-edit/classroom-manager-edit.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/menu-management/classroom-manager/classroom-manager-edit/classroom-manager-edit.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ClassroomManagerEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassroomManagerEditComponent", function() { return ClassroomManagerEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _haifahrul_ckeditor5_build_rich__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @haifahrul/ckeditor5-build-rich */ "./node_modules/@haifahrul/ckeditor5-build-rich/build/ckeditor.js");
/* harmony import */ var _haifahrul_ckeditor5_build_rich__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_haifahrul_ckeditor5_build_rich__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../_control/util.control */ "./src/app/_control/util.control.ts");









var ClassroomManagerEditComponent = /** @class */ (function () {
    function ClassroomManagerEditComponent(formBuilder, host, router, _eventEmitter, _snackBar, _util) {
        this.formBuilder = formBuilder;
        this.host = host;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._snackBar = _snackBar;
        this._util = _util;
        this.Editor = _haifahrul_ckeditor5_build_rich__WEBPACK_IMPORTED_MODULE_7___default.a;
        this.config = {
            toolbar: {
                items: [
                    'heading', '|',
                    'alignment', '|',
                    'bold', 'italic', 'strikethrough', 'underline', 'subscript', 'superscript', '|',
                    'link', '|',
                    'bulletedList', 'numberedList', 'todoList',
                    '-',
                    'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor', '|',
                    'code', 'codeBlock', '|',
                    'Smiley', 'insertTable', '|',
                    'outdent', 'indent', '|',
                    'uploadImage', 'blockQuote', '|',
                    'undo', 'redo'
                ],
                shouldNotGroupWhenFull: true
            },
            language: 'id',
            image: {
                toolbar: [
                    'imageTextAlternative',
                    'imageStyle:full',
                    'imageStyle:side'
                ]
            },
        };
        this.submitted = false;
        this.response = {};
        this.users = [];
        this.host.checkSessionID(this.constructor.name);
    }
    ClassroomManagerEditComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            Name: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                ]
            ],
            KeyAccess: ['',
                [,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60),
                ]
            ],
            Description: ['', []],
            MaxStudents: ['',
                [,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100),
                ]
            ],
            Enabled: ['', []],
            Id: ['', []],
            IdUser: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        }, {});
        if (window.localStorage.getItem("editClassroomId"))
            this.classroomId = Number(window.localStorage.getItem("editClassroomId"));
        this.getUsers();
        if (this.classroomId)
            this.getClassrooms(this.classroomId);
    };
    Object.defineProperty(ClassroomManagerEditComponent.prototype, "fe", {
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    ClassroomManagerEditComponent.prototype.getClassrooms = function (classroomId) {
        var _this = this;
        var filter = [];
        if (classroomId) {
            filter.push({ Name: 'Id', Value: String(classroomId) });
            var requestDB = {
                Operation: "view",
                TableData: null,
                Custom: "classroom-edit",
                Filter: filter,
            };
            this.host.request(requestDB, 'FDBRequest')
                .subscribe(function (data) {
                if (data)
                    _this.registerForm.setValue(data[0]);
            });
        }
    };
    ClassroomManagerEditComponent.prototype.setRoute = function (val) {
        this.router.navigate([val]);
    };
    ClassroomManagerEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var filter = [];
        var requestDB = {
            Operation: "update",
            TableData: this.registerForm.value,
            Custom: "Classroom",
            Filter: filter,
        };
        //console.log(requestDB);
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            _this.response = data;
            if (_this.response.Name == "ok") {
                if (!_this.classroomId)
                    _this.response.Status = "Record inserted successfully.";
                else
                    _this.response.Status = "Record updated successfully.";
                var n = {};
                _this._eventEmitter.setClassroom(n);
            }
            _this._util.setResponse(_this.response.Status, 'Go to Classroom', _this.response.Name, 'view-classroom-manager');
        });
    };
    ClassroomManagerEditComponent.prototype.getUsers = function () {
        var _this = this;
        var filter = [];
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "users",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            _this.users = data;
        });
    };
    ClassroomManagerEditComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_8__["UtilControl"] }
    ]; };
    ClassroomManagerEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'classroom-manager-app-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./classroom-manager-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/classroom-manager/classroom-manager-edit/classroom-manager-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./classroom-manager-edit.component.css */ "./src/app/menu-management/classroom-manager/classroom-manager-edit/classroom-manager-edit.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_8__["UtilControl"]])
    ], ClassroomManagerEditComponent);
    return ClassroomManagerEditComponent;
}());



/***/ }),

/***/ "./src/app/menu-management/classroom-manager/classroom-manager.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/menu-management/classroom-manager/classroom-manager.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-table {\n  background: #fff;\n}\nmat-footer-row, mat-header-row, mat-row, td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n  border-bottom-color: rgba(0,0,0,.12);\n}\n.mat-cell, .mat-footer-cell {\n  color: #000;\n}\n.mat-header-cell {\n  color: rgba(0,0,0,.7);\n}\n.mat-header-cell {\n  font-size: 14px;\n  font-weight: 700;\n}\n.mat-paginator, .mat-header-row {\n  background-color: rgba(0,0,0,.03)\n}\n.mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0,0,0,.7);\n}\n/deep/ .mat-form-field-label {\n  color: rgba(0,0,0,.7) !important;\n  font-weight: 700 !important;\n}\n.mat-form-field {\n  font-size: 14px;\n  margin-left: 10px;\n}\n.mat-column-Action {\n  flex: 0 0 20%;\n}\n.mat-column-Id, .mat-column-Module {\n  flex: 0 0 10%;\n}\n.mat-column-Nome, .mat-column-Email {\n  flex: 0 0 30%;\n}\n/deep/ .mat-elevation-z8 {\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 8px 10px 1px rgba(0, 0, 0, 0), 0 3px 14px 2px rgba(0, 0, 0, 0);\n}\ninput {\n  width: 100%;\n  background-color: #fcfcfc;\n  border: 0;\n  border-bottom: 2px solid lightgrey;\n  padding: 10px;\n}\n/deep/ .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #fff !important;\n}\n/deep/ .mat-select-value, .mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: #000 !important;\n}\n.mat-row:nth-child(2n+1){\n  background-color: rgba(187, 196, 201, 0.16) !important;\n}\n.mat-row:not(:nth-child(2n+1)){\n  background-color:#ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1tYW5hZ2VtZW50L2NsYXNzcm9vbS1tYW5hZ2VyL2NsYXNzcm9vbS1tYW5hZ2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9DQUFvQztBQUN0QztBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFO0FBQ0Y7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0Usc0dBQXNHO0FBQ3hHO0FBRUE7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxrQ0FBa0M7RUFDbEMsYUFBYTtBQUNmO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usc0RBQXNEO0FBQ3hEO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckMiLCJmaWxlIjoic3JjL2FwcC9tZW51LW1hbmFnZW1lbnQvY2xhc3Nyb29tLW1hbmFnZXIvY2xhc3Nyb29tLW1hbmFnZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtdGFibGUge1xuICBiYWNrZ3JvdW5kOiAjZmZmO1xufVxubWF0LWZvb3Rlci1yb3csIG1hdC1oZWFkZXItcm93LCBtYXQtcm93LCB0ZC5tYXQtY2VsbCwgdGQubWF0LWZvb3Rlci1jZWxsLCB0aC5tYXQtaGVhZGVyLWNlbGwge1xuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDAsMCwwLC4xMik7XG59XG4ubWF0LWNlbGwsIC5tYXQtZm9vdGVyLWNlbGwge1xuICBjb2xvcjogIzAwMDtcbn1cbi5tYXQtaGVhZGVyLWNlbGwge1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNyk7XG59XG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLm1hdC1wYWdpbmF0b3IsIC5tYXQtaGVhZGVyLXJvdyB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsLjAzKVxufVxuLm1hdC1wYWdpbmF0b3IsIC5tYXQtcGFnaW5hdG9yLXBhZ2Utc2l6ZSAubWF0LXNlbGVjdC10cmlnZ2VyIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xufVxuL2RlZXAvIC5tYXQtZm9ybS1maWVsZC1sYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLC43KSAhaW1wb3J0YW50O1xuICBmb250LXdlaWdodDogNzAwICFpbXBvcnRhbnQ7XG59XG4ubWF0LWZvcm0tZmllbGQge1xuICBmb250LXNpemU6IDE0cHg7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuLm1hdC1jb2x1bW4tQWN0aW9uIHtcbiAgZmxleDogMCAwIDIwJTtcbn1cbi5tYXQtY29sdW1uLUlkLCAubWF0LWNvbHVtbi1Nb2R1bGUge1xuICBmbGV4OiAwIDAgMTAlO1xufVxuLm1hdC1jb2x1bW4tTm9tZSwgLm1hdC1jb2x1bW4tRW1haWwge1xuICBmbGV4OiAwIDAgMzAlO1xufVxuL2RlZXAvIC5tYXQtZWxldmF0aW9uLXo4IHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDApLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmNmY2ZjO1xuICBib3JkZXI6IDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBsaWdodGdyZXk7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4vZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4vZGVlcC8gLm1hdC1zZWxlY3QtdmFsdWUsIC5tYXQtcGFnaW5hdG9yLCAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4ubWF0LXJvdzpudGgtY2hpbGQoMm4rMSl7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAxOTYsIDIwMSwgMC4xNikgIWltcG9ydGFudDtcbn1cbi5tYXQtcm93Om5vdCg6bnRoLWNoaWxkKDJuKzEpKXtcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmICFpbXBvcnRhbnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/menu-management/classroom-manager/classroom-manager.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/menu-management/classroom-manager/classroom-manager.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ClassroomManagerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassroomManagerComponent", function() { return ClassroomManagerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/table.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../_control/util.control */ "./src/app/_control/util.control.ts");










var ClassroomManagerComponent = /** @class */ (function () {
    function ClassroomManagerComponent(host, router, _eventEmitter, _util, _snackBar) {
        this.host = host;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._util = _util;
        this._snackBar = _snackBar;
        this.displayedColumns = ['Id', 'Owner', 'Name',
            'MaxStudents', 'Enabled', 'KeyAccess', 'Action'];
        this.classroom = [];
        this.response = {};
        this.userSession = {};
        this.load = 0;
        this.host.checkSessionID(this.constructor.name);
    }
    ClassroomManagerComponent.prototype.ngAfterViewInit = function () {
        this.getClassroom();
    };
    ClassroomManagerComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    ClassroomManagerComponent.prototype.ngOnInit = function () {
        this.userSession = this.host.getSessionID();
    };
    ClassroomManagerComponent.prototype.addClassroom = function () {
        window.localStorage.removeItem("editClassroomId");
        this.router.navigate(['add-classroom-manager']);
    };
    ;
    ClassroomManagerComponent.prototype.editClassroom = function (classroom) {
        window.localStorage.setItem("editClassroomId", classroom.Id.toString());
        this.router.navigate(['edit-classroom-manager']);
    };
    ;
    ClassroomManagerComponent.prototype.deleteClassroom = function (classroom) {
        var _this = this;
        var ret = this._util.openModal('Delete Classroom: ' + classroom.Name, 'Confirm to delete the classroom?', 'Yes', 'No', '');
        ret.afterClosed().subscribe(function (data) {
            if (data['button'] == 'YES') {
                var filter = [];
                filter.push({ Name: "Id", Value: classroom.Id.toString() });
                var requestDB = {
                    Operation: "drop",
                    TableData: null,
                    Custom: "classroom",
                    Filter: filter,
                };
                _this.host.request(requestDB, 'FDBRequest')
                    .subscribe(function (data) {
                    _this.response = data;
                    //console.log("Classroom | dbList: ", this.response);
                    _this._util.setResponse(_this.response['Status'], _this.response['Name'], null, null);
                    if (_this.response['Name'] == "ok") {
                        _this.getClassroom();
                        var n = {};
                        _this._eventEmitter.setClassroom(n);
                    }
                });
            }
        });
    };
    ClassroomManagerComponent.prototype.getClassroom = function () {
        var _this = this;
        var filter = [];
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "classroom-list-admin",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            _this.classroom = data;
            if (_this.classroom) {
                // Assign the data to the data source for the table to render
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.classroom);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
            else {
                delete _this.dataSource;
            }
            _this.load = 1;
            //console.log("Classroom | dbList: ", data);
        });
    };
    ClassroomManagerComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_9__["UtilControl"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], ClassroomManagerComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], ClassroomManagerComponent.prototype, "sort", void 0);
    ClassroomManagerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-classroom-manager',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./classroom-manager.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/classroom-manager/classroom-manager.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./classroom-manager.component.css */ "./src/app/menu-management/classroom-manager/classroom-manager.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_9__["UtilControl"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], ClassroomManagerComponent);
    return ClassroomManagerComponent;
}());



/***/ }),

/***/ "./src/app/menu-management/cluster-available/cluster-available.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/menu-management/cluster-available/cluster-available.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.key {\n  width: 20px;\n}\n\n.connected {\n  font-size: 12px;\n  color: blue;\n}\n\n.help {\n  font-size: 12px;\n}\n\n.mat-button-toggle {\n  flex-wrap: wrap !important;\n  overflow-wrap: break-word !important;\n  border-radius: 4px;\n  margin-left: 3px;\n  margin-right:3px;\n  width: 80px;\n  height: 50px;\n  font-size: 14px;\n}\n\n.mat-button-toggle-checked {\n  background-color: #007bff;\n}\n\n.op-mode {\n  text-align: center;\n}\n\n.description {\n  font-size: 12px;\n  display: block;\n  white-space: pre-line;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1tYW5hZ2VtZW50L2NsdXN0ZXItYXZhaWxhYmxlL2NsdXN0ZXItYXZhaWxhYmxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwwQkFBMEI7RUFDMUIsb0NBQW9DO0VBQ3BDLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvbWVudS1tYW5hZ2VtZW50L2NsdXN0ZXItYXZhaWxhYmxlL2NsdXN0ZXItYXZhaWxhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4ua2V5IHtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi5jb25uZWN0ZWQge1xuICBmb250LXNpemU6IDEycHg7XG4gIGNvbG9yOiBibHVlO1xufVxuXG4uaGVscCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbn1cblxuLm1hdC1idXR0b24tdG9nZ2xlIHtcbiAgZmxleC13cmFwOiB3cmFwICFpbXBvcnRhbnQ7XG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBtYXJnaW4tbGVmdDogM3B4O1xuICBtYXJnaW4tcmlnaHQ6M3B4O1xuICB3aWR0aDogODBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5tYXQtYnV0dG9uLXRvZ2dsZS1jaGVja2VkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbn1cblxuLm9wLW1vZGUge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5kZXNjcmlwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/menu-management/cluster-available/cluster-available.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/menu-management/cluster-available/cluster-available.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ClusterAvailableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClusterAvailableComponent", function() { return ClusterAvailableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_control/util.control */ "./src/app/_control/util.control.ts");






var ClusterAvailableComponent = /** @class */ (function () {
    function ClusterAvailableComponent(host, _util, router, _eventEmitter) {
        this.host = host;
        this._util = _util;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this.clusters = [];
        this.responseCo = {};
        this.responseOp = {};
        this.hostInfo = {};
        this.haveUpdate = "";
        this.host.checkSessionID(this.constructor.name);
    }
    ClusterAvailableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clusterInfo();
        this.hostInfo.Cluster = {};
        this.getHostInfo();
        //Getting value from App Component
        this.subHostInfo = this._eventEmitter.hostInfo.subscribe(function (data) {
            _this.hostInfo = data;
            var hu = _this.haveUpdate;
            hu = _this.hostInfo.Updates["clusterAvailable"];
            if (hu != _this.haveUpdate) {
                _this.clusterInfo();
                //console.log('OperationMode: cluster-available: ', hu, this.haveUpdate);
            }
        });
    };
    ClusterAvailableComponent.prototype.ngOnDestroy = function () {
        this.subHostInfo.unsubscribe();
    };
    ClusterAvailableComponent.prototype.connectToCluster = function (val) {
        //console.log('OperationMode: connectToCluster: ', val);
        var _this = this;
        var input = [];
        if (val.Password) {
            input.push({ Model: "", Name: "password", Type: "password", Title: "Password" });
        }
        var ret = this._util.openModal('Connect to ' + val.Name, 'Are you sure you want to connect to this cluster?', 'Yes', 'No', input);
        ret.afterClosed().subscribe(function (data) {
            if (data['button'] == 'YES') {
                if (val.Password &&
                    (!data['input'][0]['Model'] ||
                        data['input'][0]['Model'] == "")) {
                    _this.responseCo['Name'] = "error";
                    _this.responseCo['Status'] = "Please, type the cluster password...";
                    return;
                }
                if (val.Password)
                    val.Check = data['input'][0]['Model'];
                _this.responseCo['Name'] = "info";
                _this.responseCo['Status'] = "Request sent, wait ...";
                var serviceOpMode = {
                    NewOpMode: "NODE",
                    Cluster: val,
                };
                //console.log('OperationMode: ServiceOpModeStr: ', serviceOpMode);
                _this.host.request(serviceOpMode, 'setOpMode')
                    .subscribe(function (data) {
                    _this.responseCo = data;
                    if (_this.responseCo['Name'] == "ok") {
                        // Inform the App Root about new change in OpMode
                        _this._eventEmitter.setNewOpMode("NODE");
                    }
                });
            }
        });
    };
    ClusterAvailableComponent.prototype.setRoute = function (val) {
        this.router.navigate([val]);
    };
    ClusterAvailableComponent.prototype.clusterInfo = function () {
        var _this = this;
        var params = [];
        var request = {
            Request: "clusterAvailable",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(function (data) {
            _this.clusters = data;
            if (data)
                _this.haveUpdate = _this.clusters.length.toString();
            else
                _this.haveUpdate = "0";
            //console.log('Cluster-Available: clusterInfo ', this.clusters, this.host.getSessionID());
        });
    };
    ClusterAvailableComponent.prototype.getHostInfo = function () {
        var _this = this;
        var params = [];
        var request = {
            Request: "hostInfo",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(function (data) {
            _this.hostInfo = data;
            //console.log(this.hostInfo);
        });
    };
    ClusterAvailableComponent.prototype.setOpMode = function (mode) {
        var _this = this;
        if (mode == this.hostInfo.OpMode)
            return;
        var input = [];
        if (mode == 'MASTER') {
            input.push({ Model: "", Name: "clusterName", Type: "text", Title: "Cluster Name" });
            input.push({ Model: "", Name: "password", Type: "password", Title: "Password *(Optional)" });
        }
        var ret = this._util.openModal('Change Mode', 'Did you change the host operation mode to ' + mode + ', confirm the request?', 'Yes', 'No', input);
        ret.afterClosed().subscribe(function (data) {
            if (data && data['button'] == 'YES') {
                if (mode == 'MASTER' &&
                    (!data['input'][0]['Model'] ||
                        data['input'][0]['Model'] == "")) {
                    _this.responseOp['Name'] = "error";
                    _this.responseOp['Status'] = "Please, type a cluster name...";
                    mode = _this.hostInfo.OpMode;
                    return;
                }
                if (mode == 'MASTER' &&
                    data['input'][0]['Model'] && /[^\w]/.test(data['input'][0]['Model'])) {
                    _this.responseOp['Name'] = "error";
                    _this.responseOp['Status'] = "Spaces and special characters are not allowed. " +
                        "Alphanumeric characters only.";
                    mode = _this.hostInfo.OpMode;
                    return;
                }
                var cluster = {};
                cluster.Owner = _this.host.getSessionID().Owner;
                if (data['input'][0] && data['input'][0]['Model'] != "")
                    cluster.Name = data['input'][0]['Model'];
                if (data['input'][1] && data['input'][1]['Model'] != "")
                    cluster.Password = data['input'][1]['Model'];
                var serviceOpMode = {
                    NewOpMode: mode,
                    Cluster: cluster,
                };
                _this.responseOp['Name'] = "info";
                _this.responseOp['Status'] = "Request sent, wait ...";
                _this.host.request(serviceOpMode, 'setOpMode')
                    .subscribe(function (data) {
                    _this.responseOp = data;
                    if (_this.responseOp['Name'] == "ok") {
                        // Inform the App Root about new change in OpMode
                        _this.host.killSessionID();
                        _this._eventEmitter.setNewOpMode(mode);
                    }
                });
            }
            else {
                mode = _this.hostInfo.OpMode;
            }
        });
    };
    ClusterAvailableComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_5__["UtilControl"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"] }
    ]; };
    ClusterAvailableComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-cluster-available',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cluster-available.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/cluster-available/cluster-available.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cluster-available.component.css */ "./src/app/menu-management/cluster-available/cluster-available.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_5__["UtilControl"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"]])
    ], ClusterAvailableComponent);
    return ClusterAvailableComponent;
}());



/***/ }),

/***/ "./src/app/menu-management/current-nodes/current-nodes.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/menu-management/current-nodes/current-nodes.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.help {\r\n    font-size: 12px;\r\n}\r\n\r\n.resources {\r\n    font-size: 10px;\r\n}\r\n\r\n.icon {\r\n    width: 20px;\r\n    height: 20px;\r\n}\r\n\r\n.mat-list-base .mat-list-item {\r\n    color: #000;\r\n}\r\n\r\n.mat-list-base {\r\n    padding-top: 0px;\r\n}\r\n\r\n::ng-deep .mat-list-base .mat-list-item .mat-list-text, .mat-list-base .mat-list-option .mat-list-text {\r\n    float: left;\r\n    width: 80%;\r\n    padding: 4px;\r\n}\r\n\r\n::ng-deep .mat-list-base .mat-list-item .mat-list-icon, .mat-list-base .mat-list-option .mat-list-icon {\r\n    float: left;\r\n}\r\n\r\n::ng-deep .mat-list-base .mat-list-item.mat-multi-line .mat-list-item-content, .mat-list-base .mat-list-option.mat-multi-line .mat-list-item-content {\r\n    padding-top: 0px !important;\r\n}\r\n\r\n::ng-deep .mat-list-base .mat-list-item .mat-list-item-content, .mat-list-base .mat-list-option .mat-list-item-content {\r\n    display: block !important;\r\n}\r\n\r\n::ng-deep .nodes {\r\n    margin-left: 30px !important;\r\n    font-size: 12px !important;\r\n    height: 20px !important;\r\n}\r\n\r\n::ng-deep .listNodes {\r\n    margin-left:30px !important;\r\n}\r\n\r\n.nodesSelection {\r\n    text-align: left;\r\n    font-size: 14px;\r\n}\r\n\r\n.description {\r\n    font-size: 12px;\r\n    display: block;\r\n    white-space: pre-line;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1tYW5hZ2VtZW50L2N1cnJlbnQtbm9kZXMvY3VycmVudC1ub2Rlcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSwyQkFBMkI7QUFDL0I7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSw0QkFBNEI7SUFDNUIsMEJBQTBCO0lBQzFCLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGNBQWM7SUFDZCxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9tZW51LW1hbmFnZW1lbnQvY3VycmVudC1ub2Rlcy9jdXJyZW50LW5vZGVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5oZWxwIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnJlc291cmNlcyB7XHJcbiAgICBmb250LXNpemU6IDEwcHg7XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG59XHJcblxyXG4ubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSB7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG5cclxuLm1hdC1saXN0LWJhc2Uge1xyXG4gICAgcGFkZGluZy10b3A6IDBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC10ZXh0LCAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGlzdC10ZXh0IHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIHBhZGRpbmc6IDRweDtcclxufVxyXG46Om5nLWRlZXAgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWljb24sIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1vcHRpb24gLm1hdC1saXN0LWljb24ge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbS5tYXQtbXVsdGktbGluZSAubWF0LWxpc3QtaXRlbS1jb250ZW50LCAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uLm1hdC1tdWx0aS1saW5lIC5tYXQtbGlzdC1pdGVtLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0gLm1hdC1saXN0LWl0ZW0tY29udGVudCwgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpc3QtaXRlbS1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubm9kZXMge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDMwcHggIWltcG9ydGFudDtcclxuICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4gICAgaGVpZ2h0OiAyMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubGlzdE5vZGVzIHtcclxuICAgIG1hcmdpbi1sZWZ0OjMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5vZGVzU2VsZWN0aW9uIHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuXHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/menu-management/current-nodes/current-nodes.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/menu-management/current-nodes/current-nodes.component.ts ***!
  \**************************************************************************/
/*! exports provided: CurrentNodesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrentNodesComponent", function() { return CurrentNodesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_control/util.control */ "./src/app/_control/util.control.ts");







var CurrentNodesComponent = /** @class */ (function () {
    function CurrentNodesComponent(host, formBuilder, router, _eventEmitter, _util) {
        this.host = host;
        this.formBuilder = formBuilder;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._util = _util;
        this.submitted = false;
        this.nodes = [];
        this.response = {};
        this.haveUpdate = "";
        this.hostInfo = {};
        this.vcpus = 0;
        this.host.checkSessionID(this.constructor.name);
    }
    CurrentNodesComponent.prototype.ngOnInit = function () {
        var _this = this;
        //Credentials
        if (!this.host.getSessionID().Id) {
            this.router.navigate(['welcome']);
            return;
        }
        this.getCurrentNodes();
        this.hostInfo.Cluster = {};
        this.getHostInfo();
        this.registerForm = this.formBuilder.group({
            srvNumber: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0),
                ]
            ],
        }, {});
        //Getting value from App Component
        this.subHostInfo = this._eventEmitter.hostInfo.subscribe(function (data) {
            _this.hostInfo = data;
            var hu = _this.haveUpdate;
            hu = _this.hostInfo.Updates["activeNodes"];
            if (hu != _this.haveUpdate) {
                _this.getCurrentNodes();
                console.log('OperationMode: active-nodes: ', hu, _this.haveUpdate);
            }
            //console.log('OperationMode: active-nodes: ', hu, this.haveUpdate);
        });
    };
    CurrentNodesComponent.prototype.ngOnDestroy = function () {
    };
    Object.defineProperty(CurrentNodesComponent.prototype, "f", {
        // convenience getter for easy access to form fields
        get: function () {
            return this.registerForm.controls;
        },
        enumerable: true,
        configurable: true
    });
    CurrentNodesComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var num = this.registerForm.get('srvNumber').value;
        if (num > this.vcpus) {
            var ret = this._util.openModal('Change the Number of Nodes', 'Attention, you are allocating more nodes than ' +
                'the total number of CPUs in the cluster. \n  ' +
                'Performance degradation may occur, confirm the request?', 'Yes', 'No', '');
            ret.afterClosed().subscribe(function (data) {
                if (data && data['button'] == 'YES') {
                    _this.setNodes(num - 1);
                    _this.registerForm.disable();
                }
            });
        }
        else {
            this.setNodes(num - 1);
            this.registerForm.disable();
        }
    };
    CurrentNodesComponent.prototype.setNodes = function (num) {
        var _this = this;
        var params = [];
        params.push({ Name: "", Value: num.toString() });
        var request = {
            Request: "swarmAdd",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(function (data) {
            _this.response = data;
            //console.log("CurrentNodes | simpleRequest: ", data);
            if (_this.response['Name'] == "error") {
                _this.registerForm.enable();
                _this.f['srvNumber'].setErrors({ 'generic': _this.response['Status'] });
                return;
            }
            _this.managerStatus('getCurrentNodes', _this.registerForm.get('srvNumber').value);
        });
    };
    CurrentNodesComponent.prototype.setRoute = function (val) {
        this.router.navigate([val]);
    };
    CurrentNodesComponent.prototype.getCurrentNodes = function () {
        var _this = this;
        var params = [];
        var request = {
            Request: "activeNodes",
            Param: params,
        };
        //console.log("CurrentNodes | request: ", request);
        var vcpus = 0;
        this.host.request(request, 'simpleRequest')
            .subscribe(function (data) {
            _this.nodes = data;
            var n = 0;
            var h = 0;
            var host = "";
            if (_this.nodes) {
                _this.nodes.forEach(function (v, k) {
                    if (v['NumberOfCPUs'])
                        vcpus += parseInt(v['NumberOfCPUs']);
                    if (v.Hostname != host) {
                        host = v.Hostname;
                        h++;
                    }
                    if (v.Container) {
                        v.Container.forEach(function (v1, k1) {
                            n++;
                            h++;
                        });
                    }
                });
                _this.haveUpdate = h.toString();
            }
            else {
                _this.haveUpdate = "0";
            }
            _this.f['srvNumber'].setValue(n);
            _this.currentNumberOfNodes = n;
            _this.vcpus = vcpus;
        });
    };
    CurrentNodesComponent.prototype.getHostInfo = function () {
        var _this = this;
        var params = [];
        var request = {
            Request: "hostInfo",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(function (data) {
            _this.hostInfo = data;
            //console.log(this.hostInfo);
        });
    };
    CurrentNodesComponent.prototype.managerStatus = function (funcName, desireRet) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var wait_ret, n;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        wait_ret = true;
                        n = "";
                        _a.label = 1;
                    case 1:
                        if (!wait_ret) return [3 /*break*/, 3];
                        return [4 /*yield*/, this._util.delay(5000)];
                    case 2:
                        _a.sent();
                        if (funcName != '') {
                            n = this[funcName]();
                        }
                        if (this.currentNumberOfNodes == desireRet) {
                            this.response['Name'] = 'ok';
                            this.response['Status'] = 'Request completed successfully.';
                            this.registerForm.enable();
                            wait_ret = false;
                        }
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    CurrentNodesComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_6__["UtilControl"] }
    ]; };
    CurrentNodesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-current-nodes',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./current-nodes.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/current-nodes/current-nodes.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./current-nodes.component.css */ "./src/app/menu-management/current-nodes/current-nodes.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_6__["UtilControl"]])
    ], CurrentNodesComponent);
    return CurrentNodesComponent;
}());



/***/ }),

/***/ "./src/app/menu-management/menu-management.component.css":
/*!***************************************************************!*\
  !*** ./src/app/menu-management/menu-management.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".help {\n  font-size: 12px;\n}\n\n.tags {\n  min-height: 150px;\n  min-width: 20vw;\n  max-width: calc(100vw - 35px);\n}\n\n.module {\n  padding: 0.5em;\n  margin-left: -20px;\n  display: inline-block;\n  line-height: 40px;\n}\n\n.divTable{\n  display: table;\n}\n\n.divTableRow {\n  display: table-row;\n}\n\n.divTableHeading {\n  background-color: #EEE;\n  display: table-header-group;\n}\n\n.divTableCell, .divTableHead {\n  display: table-cell;\n  vertical-align: middle;\n}\n\n.divTableHeading {\n  background-color: #EEE;\n  display: table-header-group;\n  font-weight: bold;\n}\n\n.divTableFoot {\n  background-color: #EEE;\n  display: table-footer-group;\n  font-weight: bold;\n}\n\n.divTableBody {\n  display: table-row-group;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1tYW5hZ2VtZW50L21lbnUtbWFuYWdlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0QiwyQkFBMkI7QUFDN0I7O0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixpQkFBaUI7QUFDbkI7O0FBQ0E7RUFDRSxzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLHdCQUF3QjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL21lbnUtbWFuYWdlbWVudC9tZW51LW1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWxwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4udGFncyB7XG4gIG1pbi1oZWlnaHQ6IDE1MHB4O1xuICBtaW4td2lkdGg6IDIwdnc7XG4gIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDM1cHgpO1xufVxuXG4ubW9kdWxlIHtcbiAgcGFkZGluZzogMC41ZW07XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBsaW5lLWhlaWdodDogNDBweDtcbn1cblxuLmRpdlRhYmxle1xuICBkaXNwbGF5OiB0YWJsZTtcbn1cbi5kaXZUYWJsZVJvdyB7XG4gIGRpc3BsYXk6IHRhYmxlLXJvdztcbn1cbi5kaXZUYWJsZUhlYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XG59XG4uZGl2VGFibGVDZWxsLCAuZGl2VGFibGVIZWFkIHtcbiAgZGlzcGxheTogdGFibGUtY2VsbDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cbi5kaXZUYWJsZUhlYWRpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUVFO1xuICBkaXNwbGF5OiB0YWJsZS1oZWFkZXItZ3JvdXA7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLmRpdlRhYmxlRm9vdCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFRUU7XG4gIGRpc3BsYXk6IHRhYmxlLWZvb3Rlci1ncm91cDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uZGl2VGFibGVCb2R5IHtcbiAgZGlzcGxheTogdGFibGUtcm93LWdyb3VwO1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/menu-management/menu-management.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/menu-management/menu-management.component.ts ***!
  \**************************************************************/
/*! exports provided: MenuManagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuManagementComponent", function() { return MenuManagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_control/util.control */ "./src/app/_control/util.control.ts");







var MenuManagementComponent = /** @class */ (function () {
    function MenuManagementComponent(router, host, _eventEmitter, _snackBar, _util) {
        this.router = router;
        this.host = host;
        this._eventEmitter = _eventEmitter;
        this._snackBar = _snackBar;
        this._util = _util;
        this.userSession = {};
        this.response = {};
    }
    MenuManagementComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.localStorage.removeItem("TryACode");
        this.userSession = this.host.getSessionID();
        //Getting value from HostCredentials
        this.subLogin = this._eventEmitter.loginChange.subscribe(function (data) {
            _this.userSession = _this.host.getSessionID();
            //console.log('App Root | _eventEmitter.SendMsgAppRoot  ', this.userSession);
        });
    };
    MenuManagementComponent.prototype.ngOnDestroy = function () {
        this.subLogin.unsubscribe();
    };
    MenuManagementComponent.prototype.setRoute = function (val) {
        this.router.navigate([val]);
    };
    MenuManagementComponent.prototype.reboot = function () {
        var _this = this;
        var ret = this._util.openModal('Reboot Server: ', 'Confirm restart the server?', 'Yes', 'No', '');
        ret.afterClosed().subscribe(function (data) {
            if (data['button'] == 'YES') {
                var params = [];
                var request = {
                    Request: "reboot",
                    Param: params,
                };
                _this.host.request(request, 'simpleRequest')
                    .subscribe(function (data) {
                    _this.response = data;
                    _this._util.setResponse(_this.response['Status'], _this.response['Name'], null, null);
                });
            }
        });
    };
    MenuManagementComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_6__["UtilControl"] }
    ]; };
    MenuManagementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu-management',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./menu-management.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/menu-management.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./menu-management.component.css */ "./src/app/menu-management/menu-management.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_6__["UtilControl"]])
    ], MenuManagementComponent);
    return MenuManagementComponent;
}());



/***/ }),

/***/ "./src/app/menu-management/monitoring/monitoring.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/menu-management/monitoring/monitoring.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".user-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.frontName {\n  font-size: 10px;\n  margin: 0;\n}\n\n.master {\n  color: #9d1e15;\n}\n\n.help {\n  font-size: 12px;\n}\n\n.normal {\n  font-size: 12px;\n}\n\nprocess {\n  line-height:80%;\n  font-size: 12px !important;\n}\n\n.mat-table {\n  background: #fff;\n}\n\nmat-footer-row, mat-header-row, mat-row, td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n  border-bottom-color: rgba(0,0,0,.12);\n}\n\n.mat-cell, .mat-footer-cell {\n  color: #000;\n}\n\n.mat-header-cell {\n  color: rgba(0,0,0,.7);\n}\n\n.mat-header-cell {\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.mat-paginator, .mat-header-row {\n  background-color: rgba(0,0,0,.03)\n}\n\n.mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0,0,0,.7);\n}\n\n/deep/ .mat-form-field-label {\n  color: rgba(0,0,0,.7) !important;\n  font-weight: 700 !important;\n}\n\n.mat-form-field {\n  font-size: 12px;\n  margin-left: 10px;\n}\n\n/deep/ .mat-elevation-z8 {\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 8px 10px 1px rgba(0, 0, 0, 0), 0 3px 14px 2px rgba(0, 0, 0, 0);\n}\n\n/deep/ .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #fff !important;\n}\n\n/deep/ .mat-select-value, .mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: #000 !important;\n}\n\n/deep/ .mat-sort-header-arrow {\n  color: #000 !important;\n}\n\n.mat-row:nth-child(2n+1){\n  background-color: rgba(187, 196, 201, 0.16) !important;\n}\n\n.mat-row:not(:nth-child(2n+1)){\n  background-color:#ffffff !important;\n}\n\n/deep/ .mat-list-base .mat-list-item.mat-2-line, .mat-list-base .mat-list-option.mat-2-line {\n  /* height: 72px; */\n  color: black;\n}\n\n::ng-deep .mat-list-base .mat-list-item .mat-list-text, .mat-list-base .mat-list-option .mat-list-text {\n  float: left;\n  padding: 4px;\n}\n\n::ng-deep .mat-list-base .mat-list-item .mat-list-icon, .mat-list-base .mat-list-option .mat-list-icon {\n  float: left;\n}\n\n::ng-deep .mat-list-base .mat-list-item.mat-2-line, .mat-list-base .mat-list-option.mat-2-line {\n  height: auto;\n}\n\n::ng-deep .mat-list-base .mat-list-item.mat-list-item-with-avatar, .mat-list-base .mat-list-option.mat-list-item-with-avatar {\n  height: auto;\n}\n\n/deep/ .mat-list-base .mat-list-item {\n  font-size: 14px;\n}\n\n/deep/ .mat-list-base .mat-list-item .mat-line:nth-child(n+2) {\n  font-size: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1tYW5hZ2VtZW50L21vbml0b3JpbmcvbW9uaXRvcmluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFDQTtFQUNFO0FBQ0Y7O0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7O0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsMkJBQTJCO0FBQzdCOztBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHNHQUFzRztBQUN4Rzs7QUFFQTtFQUNFLGlDQUFpQztBQUNuQzs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFDQTtFQUNFLHNEQUFzRDtBQUN4RDs7QUFDQTtFQUNFLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUNBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9tZW51LW1hbmFnZW1lbnQvbW9uaXRvcmluZy9tb25pdG9yaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlci1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4uZnJvbnROYW1lIHtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBtYXJnaW46IDA7XG59XG5cbi5tYXN0ZXIge1xuICBjb2xvcjogIzlkMWUxNTtcbn1cblxuLmhlbHAge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbi5ub3JtYWwge1xuICBmb250LXNpemU6IDEycHg7XG59XG5cbnByb2Nlc3Mge1xuICBsaW5lLWhlaWdodDo4MCU7XG4gIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbm1hdC1mb290ZXItcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdywgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCwgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLDAsMCwuMTIpO1xufVxuLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgY29sb3I6ICMwMDA7XG59XG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xufVxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5tYXQtcGFnaW5hdG9yLCAubWF0LWhlYWRlci1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wMylcbn1cbi5tYXQtcGFnaW5hdG9yLCAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcbn1cbi9kZWVwLyAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNykgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuL2RlZXAvIC5tYXQtZWxldmF0aW9uLXo4IHtcbiAgYm94LXNoYWRvdzogMCAwIDAgMCByZ2JhKDAsIDAsIDAsIDApLCAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDApLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDApO1xufVxuXG4vZGVlcC8gLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmICFpbXBvcnRhbnQ7XG59XG4vZGVlcC8gLm1hdC1zZWxlY3QtdmFsdWUsIC5tYXQtcGFnaW5hdG9yLCAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4vZGVlcC8gLm1hdC1zb3J0LWhlYWRlci1hcnJvdyB7XG4gIGNvbG9yOiAjMDAwICFpbXBvcnRhbnQ7XG59XG4ubWF0LXJvdzpudGgtY2hpbGQoMm4rMSl7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTg3LCAxOTYsIDIwMSwgMC4xNikgIWltcG9ydGFudDtcbn1cbi5tYXQtcm93Om5vdCg6bnRoLWNoaWxkKDJuKzEpKXtcbiAgYmFja2dyb3VuZC1jb2xvcjojZmZmZmZmICFpbXBvcnRhbnQ7XG59XG5cbi9kZWVwLyAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbS5tYXQtMi1saW5lLCAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uLm1hdC0yLWxpbmUge1xuICAvKiBoZWlnaHQ6IDcycHg7ICovXG4gIGNvbG9yOiBibGFjaztcbn1cblxuOjpuZy1kZWVwIC5tYXQtbGlzdC1iYXNlIC5tYXQtbGlzdC1pdGVtIC5tYXQtbGlzdC10ZXh0LCAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3Qtb3B0aW9uIC5tYXQtbGlzdC10ZXh0IHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHBhZGRpbmc6IDRweDtcbn1cbjo6bmctZGVlcCAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpc3QtaWNvbiwgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbiAubWF0LWxpc3QtaWNvbiB7XG4gIGZsb2F0OiBsZWZ0O1xufVxuXG46Om5nLWRlZXAgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0ubWF0LTItbGluZSwgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbi5tYXQtMi1saW5lIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG46Om5nLWRlZXAgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0ubWF0LWxpc3QtaXRlbS13aXRoLWF2YXRhciwgLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LW9wdGlvbi5tYXQtbGlzdC1pdGVtLXdpdGgtYXZhdGFyIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vZGVlcC8gLm1hdC1saXN0LWJhc2UgLm1hdC1saXN0LWl0ZW0ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi9kZWVwLyAubWF0LWxpc3QtYmFzZSAubWF0LWxpc3QtaXRlbSAubWF0LWxpbmU6bnRoLWNoaWxkKG4rMikge1xuICBmb250LXNpemU6IDEwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/menu-management/monitoring/monitoring.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/menu-management/monitoring/monitoring.component.ts ***!
  \********************************************************************/
/*! exports provided: MonitoringComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MonitoringComponent", function() { return MonitoringComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/table.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");







var MonitoringComponent = /** @class */ (function () {
    function MonitoringComponent(host, router, _eventEmitter) {
        this.host = host;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this.displayedColumns = ['User', 'Position', 'Queue', 'Command', 'Time'];
        this.hosts = [];
        this.hostInfo = {};
        this.haveUpdate = "";
        this.queues = [];
        this.host.checkSessionID(this.constructor.name);
    }
    MonitoringComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getFrontendInfo();
        //Getting value from App Component
        this.subHostInfo = this._eventEmitter.hostInfo.subscribe(function (data) {
            _this.hostInfo = data;
            if (_this.hostInfo.Updates["activeQueues"] || _this.queues)
                _this.getActiveQueues();
            if (_this.hostInfo.Updates["activeFrontends"]) {
                var hu = _this.haveUpdate;
                hu = _this.hostInfo.Updates["activeFrontends"];
                if (hu != _this.haveUpdate) {
                    _this.getFrontendInfo();
                    //console.log('OperationMode: monitoring: ', hu, this.haveUpdate);
                }
                //console.log('OperationMode: monitoring: ', hu, this.haveUpdate);
            }
        });
    };
    MonitoringComponent.prototype.ngOnDestroy = function () {
        this.subHostInfo.unsubscribe();
    };
    MonitoringComponent.prototype.getFrontendInfo = function () {
        var _this = this;
        var params = [];
        var request = {
            Request: "activeFrontends",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(function (data) {
            _this.hosts = data;
            if (_this.hosts) {
                _this.haveUpdate = _this.hosts.length.toString();
                //console.log('Queues: hu haveUpdate: ', this.hosts);
            }
            else {
                _this.haveUpdate = "0";
            }
        });
    };
    MonitoringComponent.prototype.getActiveQueues = function () {
        var _this = this;
        var params = [];
        var request = {
            Request: "activeQueues",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(function (data) {
            _this.queues = data;
            if (_this.queues) {
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"](_this.queues);
                _this.dataSource.sort = _this.sort;
            }
            else {
                delete _this.dataSource;
            }
        });
        //console.log('Queues: hu haveUpdate: ', this.queues, this.haveUpdate);
    };
    MonitoringComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], MonitoringComponent.prototype, "sort", void 0);
    MonitoringComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-monitoring',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./monitoring.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/monitoring/monitoring.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./monitoring.component.css */ "./src/app/menu-management/monitoring/monitoring.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_3__["EventEmitterService"]])
    ], MonitoringComponent);
    return MonitoringComponent;
}());



/***/ }),

/***/ "./src/app/menu-management/settings/settings.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/menu-management/settings/settings.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("input, select {\n  max-width: 300px;\n}\n\n.description {\n  font-size: 12px;\n  display: block;\n  white-space: pre-line;\n}\n\n.help {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1tYW5hZ2VtZW50L3NldHRpbmdzL3NldHRpbmdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9tZW51LW1hbmFnZW1lbnQvc2V0dGluZ3Mvc2V0dGluZ3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0LCBzZWxlY3Qge1xuICBtYXgtd2lkdGg6IDMwMHB4O1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBmb250LXNpemU6IDEycHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG59XG5cbi5oZWxwIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/menu-management/settings/settings.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/menu-management/settings/settings.component.ts ***!
  \****************************************************************/
/*! exports provided: SettingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsComponent", function() { return SettingsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../_control/util.control */ "./src/app/_control/util.control.ts");







var SettingsComponent = /** @class */ (function () {
    function SettingsComponent(formBuilder, host, router, _util, _eventEmitter) {
        this.formBuilder = formBuilder;
        this.host = host;
        this.router = router;
        this._util = _util;
        this._eventEmitter = _eventEmitter;
        this.submitted = false;
        this.config = {};
        this.response = {};
        this.CodeMaxFileSize = '';
        this.host.checkSessionID(this.constructor.name);
    }
    SettingsComponent.prototype.ngOnInit = function () {
        function alphaNumericValidator(control) {
            return /^[a-zA-Z0-9_]*$/.test(control.value) ? null : { alphaNumeric: true };
        }
        this.registerForm = this.formBuilder.group({
            PublicInterface: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(15),
                ]
            ],
            BackendPort: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1500),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(65534),
                ]
            ],
            FrontendPort: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1500),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(65534),
                ]
            ],
            WebSocketPort: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1500),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(65534),
                ]
            ],
            StartContainers: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(65534),
                ]
            ],
            MaxContainers: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(0),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(65534),
                ]
            ],
            OperationMode: ['', []],
            NodeMode: ['', []],
            ClusterName: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20),
                    alphaNumericValidator,
                ]
            ],
            ClusterPassword: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20),
                ]
            ],
            HostUser: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20),
                ]
            ],
            HostPassword: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(20),
                ]
            ],
            SelfRegistration: ['', []],
            CodeExecTimeout: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(1000),
                ]
            ],
            CodeMaxFileSize: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(10000000000),
                ]
            ],
            Queue: ['', []],
            MaxConcurrency: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(1000),
                ]
            ],
            Debug: ['', []],
            Error: ['', []],
            SmtpServer: ['', []],
            SmtpPort: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(65534),
                ]
            ],
            SmtpUser: ['', []],
            SmtpPassword: ['', []],
            DbHost: ['', []],
            DbPort: ['',
                [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].min(1),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].max(65534),
                ]
            ],
            DbUser: ['', []],
            DbPassword: ['', []],
        }, {});
        this.getConfigs();
    };
    Object.defineProperty(SettingsComponent.prototype, "fe", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    SettingsComponent.prototype.getConfigs = function () {
        var _this = this;
        var params = [];
        var request = {
            Request: "settings",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(function (data) {
            //console.log("Settings | getConfigs: ", data);
            _this.registerForm.setValue(data);
        });
    };
    SettingsComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        this.config.PublicInterface = this.fe['PublicInterface'].value.toString();
        this.config.BackendPort = this.fe['BackendPort'].value.toString();
        this.config.FrontendPort = this.fe['FrontendPort'].value.toString();
        this.config.WebSocketPort = this.fe['WebSocketPort'].value.toString();
        this.config.ClusterName = this.fe['ClusterName'].value.toString();
        this.config.ClusterPassword = this.fe['ClusterPassword'].value.toString();
        this.config.NodeMode = this.fe['NodeMode'].value.toString();
        this.config.OperationMode = this.fe['OperationMode'].value.toString();
        this.config.MaxContainers = this.fe['MaxContainers'].value.toString();
        this.config.StartContainers = this.fe['StartContainers'].value.toString();
        this.config.HostUser = this.fe['HostUser'].value.toString();
        this.config.HostPassword = this.fe['HostPassword'].value.toString();
        this.config.SelfRegistration = this.fe['SelfRegistration'].value.toString();
        this.config.CodeExecTimeout = this.fe['CodeExecTimeout'].value.toString();
        this.config.CodeMaxFileSize = this.fe['CodeMaxFileSize'].value.toString();
        this.config.Queue = this.fe['Queue'].value.toString();
        this.config.MaxConcurrency = this.fe['MaxConcurrency'].value.toString();
        this.config.Debug = this.fe['Debug'].value.toString();
        this.config.Error = this.fe['Error'].value.toString();
        this.config.SmtpServer = this.fe['SmtpServer'].value.toString();
        this.config.SmtpPassword = this.fe['SmtpPassword'].value.toString();
        this.config.SmtpPort = this.fe['SmtpPort'].value.toString();
        this.config.SmtpUser = this.fe['SmtpUser'].value.toString();
        this.config.DbHost = this.fe['DbHost'].value.toString();
        this.config.DbUser = this.fe['DbUser'].value.toString();
        this.config.DbPort = this.fe['DbPort'].value.toString();
        this.config.DbPassword = this.fe['DbPassword'].value.toString();
        this.host.request(this.config, 'setConfigs')
            .subscribe(function (data) {
            _this.response = data;
            //console.log("Users onSubmit | edit: ", this.registerForm.value);
        });
    };
    SettingsComponent.prototype.getInputMaxFileSize = function (input) {
        this.CodeMaxFileSize = this._util.formatBytes(input.path[0].value);
    };
    SettingsComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_4__["HostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_6__["UtilControl"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"] }
    ]; };
    SettingsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'settings-module',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./settings.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/menu-management/settings/settings.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./settings.component.css */ "./src/app/menu-management/settings/settings.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_host_service__WEBPACK_IMPORTED_MODULE_4__["HostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_6__["UtilControl"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/try-code/try-code.component.css":
/*!*************************************************!*\
  !*** ./src/app/try-code/try-code.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyeS1jb2RlL3RyeS1jb2RlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/try-code/try-code.component.ts":
/*!************************************************!*\
  !*** ./src/app/try-code/try-code.component.ts ***!
  \************************************************/
/*! exports provided: TryCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TryCodeComponent", function() { return TryCodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var TryCodeComponent = /** @class */ (function () {
    function TryCodeComponent(router) {
        this.router = router;
    }
    TryCodeComponent.prototype.ngOnInit = function () {
        window.localStorage.removeItem("AnswerId");
        window.localStorage.removeItem("ExerciseId");
        window.localStorage.setItem("TryACode", "1");
    };
    TryCodeComponent.prototype.setRoute = function (val) {
        this.router.navigate([val]);
    };
    TryCodeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    TryCodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'try-code-module',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./try-code.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/try-code/try-code.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./try-code.component.css */ "./src/app/try-code/try-code.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], TryCodeComponent);
    return TryCodeComponent;
}());



/***/ }),

/***/ "./src/app/users/users-edit/users-edit.component.css":
/*!***********************************************************!*\
  !*** ./src/app/users/users-edit/users-edit.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLWVkaXQvdXNlcnMtZWRpdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/users/users-edit/users-edit.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/users/users-edit/users-edit.component.ts ***!
  \**********************************************************/
/*! exports provided: UsersEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEditComponent", function() { return UsersEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../_control/util.control */ "./src/app/_control/util.control.ts");








var UsersEditComponent = /** @class */ (function () {
    function UsersEditComponent(formBuilder, host, router, _util, _eventEmitter, _snackBar) {
        this.formBuilder = formBuilder;
        this.host = host;
        this.router = router;
        this._util = _util;
        this._eventEmitter = _eventEmitter;
        this._snackBar = _snackBar;
        this.submitted = false;
        this.response = {};
        this.userSession = {};
        this.host.checkSessionID(this.constructor.name);
    }
    UsersEditComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            Name: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(60),
                ]
            ],
            Password: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                ]
            ],
            CPassword: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50),
                ]
            ],
            Email: ['',
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(4),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(100),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email
                ]
            ],
            Module: ['User', []],
            ForceChangePass: ['0', []],
            TempChangePass: ['', []],
            Id: ['', []],
        }, { validator: this.checkPassword });
        //Getting Credentials
        this.userSession = this.host.getSessionID();
        this.ForceChangePass = window.localStorage.getItem("ForceChangePass");
        if (this.host.getSessionID().Module == "Admin") {
            this.userId = Number(window.localStorage.getItem("editUserId"));
            if (this.ForceChangePass == "1")
                this.userId = this.userSession.Id;
            if (this.userId)
                this.getUsers(this.userId);
        }
        //Credentials
        if (this.host.getSessionID().Module != "Admin" &&
            this.userSession.Id) {
            this.userId = this.userSession.Id;
            this.getUsers(this.userId);
        }
    };
    UsersEditComponent.prototype.checkPassword = function (control) {
        if (control.get('Password').value != control.get('CPassword').value) {
            control.get('CPassword').setErrors({
                mismatch: true
            });
        }
        return false;
    };
    Object.defineProperty(UsersEditComponent.prototype, "fe", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    UsersEditComponent.prototype.getUsers = function (userId) {
        var _this = this;
        var filter = [];
        if (userId) {
            filter.push({ Name: 'Id', Value: String(userId) });
            var requestDB = {
                Operation: "view",
                TableData: null,
                Custom: "users-edit",
                Filter: filter,
            };
            this.host.request(requestDB, 'FDBRequest')
                .subscribe(function (data) {
                if (data[0]) {
                    data[0]['CPassword'] = "";
                    if (_this.ForceChangePass == "1")
                        data[0]['ForceChangePass'] = 0;
                    _this.registerForm.setValue(data[0]);
                }
                _this.fe['Password'].setValue('');
            });
        }
    };
    UsersEditComponent.prototype.setRoute = function (val) {
        this.router.navigate([val]);
    };
    UsersEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.submitted = true;
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        var temp = this.registerForm.value;
        delete temp['CPassword'];
        //if (this.ForceChangePass == "1")
        //  temp['ForceChangePass'] = "0";
        var filter = [];
        var requestDB = {
            Operation: "update",
            TableData: temp,
            Custom: "Users",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            _this.response = data;
            if (_this.response.Name == "ok") {
                if (!_this.userId)
                    _this.response.Status = "Record inserted successfully.";
                else
                    _this.response.Status = "Record updated successfully.";
                var action = void 0, route = '';
                if (_this.userSession.Module == 'Admin') {
                    action = 'Go to Users';
                    route = 'view-user';
                }
                else {
                    if (!_this.userId) {
                        action = 'Go to Login Page';
                        route = 'host-login';
                    }
                    else {
                        action = _this.response.Name;
                        route = 'view-user';
                    }
                }
                if (_this.response.Name != "ok")
                    action = _this.response.Name;
                _this._util.setResponse(_this.response.Status, action, _this.response.Name, route);
                window.localStorage.setItem("ForceChangePass", "0");
                //this.router.navigate(['Users']);
                //console.log("Users onSubmit | edit: ", temp);
                if (_this.ForceChangePass == "1" || _this.host.getSessionID().Module != 'Admin') {
                    if (_this.host.getSessionID().Module != 'SelfRegistration') {
                        _this._util.openModal('Password changed', 'Please login with the new password.', 'Close', '', '');
                    }
                    else {
                        _this._util.openModal('New User', 'Please enter your new credentials.', 'Close', '', '');
                    }
                    _this.host.killSessionID();
                    _this.userSession = {};
                    _this._eventEmitter.setLoginChange({ Name: "ok", Status: "" });
                    _this.router.navigate(['welcome']);
                }
            }
            else {
                _this._util.setResponse(_this.response.Status, _this.response.Name, null, null);
            }
        });
    };
    UsersEditComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_7__["UtilControl"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
    ]; };
    UsersEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'users-app-edit',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users-edit.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users-edit/users-edit.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users-edit.component.css */ "./src/app/users/users-edit/users-edit.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
            _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_7__["UtilControl"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_5__["EventEmitterService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], UsersEditComponent);
    return UsersEditComponent;
}());



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-table {\n  background: #fff;\n}\nmat-footer-row, mat-header-row, mat-row, td.mat-cell, td.mat-footer-cell, th.mat-header-cell {\n  border-bottom-color: rgba(0,0,0,.12);\n}\n.mat-cell, .mat-footer-cell {\n  color: #000;\n}\n.mat-header-cell {\n  color: rgba(0,0,0,.7);\n}\n.mat-header-cell {\n  font-size: 14px;\n  font-weight: 700;\n}\n.mat-paginator, .mat-header-row {\n  background-color: rgba(0,0,0,.03)\n}\n.mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: rgba(0,0,0,.7);\n}\n/deep/ .mat-form-field-label {\n  color: rgba(0,0,0,.7) !important;\n  font-weight: 700 !important;\n}\n.mat-form-field {\n  font-size: 14px;\n  margin-left: 10px;\n}\n.mat-column-Action {\n  flex: 0 0 20%;\n}\n.mat-column-Id, .mat-column-Module {\n  flex: 0 0 10%;\n}\n.mat-column-Nome, .mat-column-Email {\n  flex: 0 0 30%;\n}\n/deep/ .mat-elevation-z8 {\n  box-shadow: 0 0 0 0 rgba(0, 0, 0, 0), 0 8px 10px 1px rgba(0, 0, 0, 0), 0 3px 14px 2px rgba(0, 0, 0, 0);\n}\ninput {\n  width: 100%;\n  background-color: #fcfcfc;\n  border: 0;\n  border-bottom: 2px solid lightgrey;\n  padding: 10px;\n}\n/deep/ .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #fff !important;\n}\n/deep/ .mat-select-value, .mat-paginator, .mat-paginator-page-size .mat-select-trigger {\n  color: #000 !important;\n}\n.mat-row:nth-child(2n+1){\n  background-color: rgba(187, 196, 201, 0.16) !important;\n}\n.mat-row:not(:nth-child(2n+1)){\n  background-color:#ffffff !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlcnMvdXNlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0U7QUFDRjtBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxnQ0FBZ0M7RUFDaEMsMkJBQTJCO0FBQzdCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxzR0FBc0c7QUFDeEc7QUFFQTtFQUNFLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsU0FBUztFQUNULGtDQUFrQztFQUNsQyxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGlDQUFpQztBQUNuQztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxzREFBc0Q7QUFDeEQ7QUFDQTtFQUNFLG1DQUFtQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWF0LXRhYmxlIHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbn1cbm1hdC1mb290ZXItcm93LCBtYXQtaGVhZGVyLXJvdywgbWF0LXJvdywgdGQubWF0LWNlbGwsIHRkLm1hdC1mb290ZXItY2VsbCwgdGgubWF0LWhlYWRlci1jZWxsIHtcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLDAsMCwuMTIpO1xufVxuLm1hdC1jZWxsLCAubWF0LWZvb3Rlci1jZWxsIHtcbiAgY29sb3I6ICMwMDA7XG59XG4ubWF0LWhlYWRlci1jZWxsIHtcbiAgY29sb3I6IHJnYmEoMCwwLDAsLjcpO1xufVxuLm1hdC1oZWFkZXItY2VsbCB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cbi5tYXQtcGFnaW5hdG9yLCAubWF0LWhlYWRlci1yb3cge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLC4wMylcbn1cbi5tYXQtcGFnaW5hdG9yLCAubWF0LXBhZ2luYXRvci1wYWdlLXNpemUgLm1hdC1zZWxlY3QtdHJpZ2dlciB7XG4gIGNvbG9yOiByZ2JhKDAsMCwwLC43KTtcbn1cbi9kZWVwLyAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICBjb2xvcjogcmdiYSgwLDAsMCwuNykgIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IDcwMCAhaW1wb3J0YW50O1xufVxuLm1hdC1mb3JtLWZpZWxkIHtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5tYXQtY29sdW1uLUFjdGlvbiB7XG4gIGZsZXg6IDAgMCAyMCU7XG59XG4ubWF0LWNvbHVtbi1JZCwgLm1hdC1jb2x1bW4tTW9kdWxlIHtcbiAgZmxleDogMCAwIDEwJTtcbn1cbi5tYXQtY29sdW1uLU5vbWUsIC5tYXQtY29sdW1uLUVtYWlsIHtcbiAgZmxleDogMCAwIDMwJTtcbn1cbi9kZWVwLyAubWF0LWVsZXZhdGlvbi16OCB7XG4gIGJveC1zaGFkb3c6IDAgMCAwIDAgcmdiYSgwLCAwLCAwLCAwKSwgMCA4cHggMTBweCAxcHggcmdiYSgwLCAwLCAwLCAwKSwgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwKTtcbn1cblxuaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZjZmNmYztcbiAgYm9yZGVyOiAwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgbGlnaHRncmV5O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuL2RlZXAvIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xufVxuL2RlZXAvIC5tYXQtc2VsZWN0LXZhbHVlLCAubWF0LXBhZ2luYXRvciwgLm1hdC1wYWdpbmF0b3ItcGFnZS1zaXplIC5tYXQtc2VsZWN0LXRyaWdnZXIge1xuICBjb2xvcjogIzAwMCAhaW1wb3J0YW50O1xufVxuLm1hdC1yb3c6bnRoLWNoaWxkKDJuKzEpe1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE4NywgMTk2LCAyMDEsIDAuMTYpICFpbXBvcnRhbnQ7XG59XG4ubWF0LXJvdzpub3QoOm50aC1jaGlsZCgybisxKSl7XG4gIGJhY2tncm91bmQtY29sb3I6I2ZmZmZmZiAhaW1wb3J0YW50O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/paginator.es5.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/table.es5.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/esm5/snack-bar.es5.js");
/* harmony import */ var _control_util_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../_control/util.control */ "./src/app/_control/util.control.ts");










var UsersComponent = /** @class */ (function () {
    function UsersComponent(host, router, _eventEmitter, _util, _snackBar) {
        this.host = host;
        this.router = router;
        this._eventEmitter = _eventEmitter;
        this._util = _util;
        this._snackBar = _snackBar;
        this.displayedColumns = ['Id', 'Name', 'Email', 'Module', 'Action'];
        this.users = [];
        this.response = {};
        this.load = 0;
    }
    UsersComponent.prototype.ngAfterViewInit = function () {
        this.getUsers();
    };
    UsersComponent.prototype.applyFilter = function (filterValue) {
        filterValue = filterValue.trim(); // Remove whitespace
        filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
        this.dataSource.filter = filterValue;
    };
    UsersComponent.prototype.ngOnInit = function () {
        //Credentials
        if (this.host.getSessionID().Module == "User") {
            window.localStorage.setItem("editUserId", String(this.host.getSessionID().Id));
            this.router.navigate(['edit-user']);
            return;
        }
        if (this.host.getSessionID().Module != "Admin") {
            this.router.navigate(['welcome']);
            return;
        }
    };
    UsersComponent.prototype.addUser = function () {
        window.localStorage.removeItem("editUserId");
        this.router.navigate(['add-user']);
    };
    ;
    UsersComponent.prototype.editUser = function (user) {
        window.localStorage.setItem("editUserId", user.Id.toString());
        this.router.navigate(['edit-user']);
    };
    ;
    UsersComponent.prototype.deleteUser = function (user) {
        var _this = this;
        var ret = this._util.openModal('Delete User: ' + user.Name, 'Confirm to delete the user?', 'Yes', 'No', '');
        ret.afterClosed().subscribe(function (data) {
            if (data['button'] == 'YES') {
                var filter = [];
                filter.push({ Name: "Id", Value: user.Id.toString() });
                var requestDB = {
                    Operation: "drop",
                    TableData: null,
                    Custom: "users",
                    Filter: filter,
                };
                _this.host.request(requestDB, 'FDBRequest')
                    .subscribe(function (data) {
                    _this.response = data;
                    //console.log("Users | dbList: ", this.response);
                    _this._util.setResponse(_this.response['Status'], _this.response['Name'], null, null);
                    if (_this.response['Name'] == "ok") {
                        _this.getUsers();
                    }
                });
            }
        });
    };
    UsersComponent.prototype.getUsers = function () {
        var _this = this;
        var filter = [];
        var requestDB = {
            Operation: "view",
            TableData: null,
            Custom: "users",
            Filter: filter,
        };
        this.host.request(requestDB, 'FDBRequest')
            .subscribe(function (data) {
            _this.users = data;
            if (_this.users) {
                // Assign the data to the data source for the table to render
                _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.users);
                _this.dataSource.paginator = _this.paginator;
                _this.dataSource.sort = _this.sort;
            }
            else {
                delete _this.dataSource;
            }
            _this.load = 1;
            //console.log("Users | dbList: ", data);
        });
    };
    UsersComponent.ctorParameters = function () { return [
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] },
        { type: _control_util_control__WEBPACK_IMPORTED_MODULE_9__["UtilControl"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], UsersComponent.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_6__["MatSort"])
    ], UsersComponent.prototype, "sort", void 0);
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"],
            _control_util_control__WEBPACK_IMPORTED_MODULE_9__["UtilControl"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBar"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("span {\n  font-size: 14px;\n  display: block;\n  white-space: pre-line;\n}\n\n.welcome {\n  width: 100%;\n  margin: auto;\n  padding: 10px;\n}\n\n.system {\n  width: 70%;\n  float: left;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtBQUNmOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsic3BhbiB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcbn1cblxuLndlbGNvbWUge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiBhdXRvO1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG4uc3lzdGVtIHtcbiAgd2lkdGg6IDcwJTtcbiAgZmxvYXQ6IGxlZnQ7XG59Il19 */");

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_host_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_services/host.service */ "./src/app/_services/host.service.ts");
/* harmony import */ var _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_services/event-emitter.service */ "./src/app/_services/event-emitter.service.ts");





var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(router, host, _eventEmitter) {
        this.router = router;
        this.host = host;
        this._eventEmitter = _eventEmitter;
        this.userSession = {};
        this.hostInfo = {};
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userSession = this.host.getSessionID();
        //Getting value from child HostCredentials
        this.subLogin = this._eventEmitter.loginChange.subscribe(function (data) {
            _this.userSession = _this.host.getSessionID();
        });
        this.getHostInfo();
    };
    WelcomeComponent.prototype.ngOnDestroy = function () {
        this.subLogin.unsubscribe();
    };
    WelcomeComponent.prototype.getHostInfo = function () {
        var _this = this;
        var params = [];
        var request = {
            Request: "hostInfo",
            Param: params,
        };
        this.host.request(request, 'simpleRequest')
            .subscribe(function (data) {
            _this.hostInfo = data;
        });
    };
    WelcomeComponent.prototype.setRoute = function () {
        this.host.setSessionID('', 'SelfRegistration', '||NPZ8fvABP5pKSwU3');
        this.router.navigate(['add-user']);
    };
    WelcomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"] },
        { type: _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"] }
    ]; };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/welcome/welcome.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")).default]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _services_host_service__WEBPACK_IMPORTED_MODULE_3__["HostService"],
            _services_event_emitter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
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
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /media/naylor/DADOS/Projeto/ICS/frontend/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!************************!*\
  !*** stream (ignored) ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map