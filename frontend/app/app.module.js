"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const app_component_1 = require("./app.component");
const platform_browser_1 = require("@angular/platform-browser");
const common_1 = require("@angular/common");
const ng2_bootstrap_1 = require("ng2-bootstrap");
const http_1 = require("@angular/http");
let AppModule = class AppModule {
};
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, common_1.CommonModule, ng2_bootstrap_1.Ng2BootstrapModule.forRoot(), http_1.HttpModule],
        declarations: [app_component_1.AppComponent],
        bootstrap: [app_component_1.AppComponent],
        providers: []
    })
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=app.module.js.map
