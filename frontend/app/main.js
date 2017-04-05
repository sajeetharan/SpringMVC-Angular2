"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
const app_module_1 = require("./app.module");
core_1.enableProdMode();
const platform = platform_browser_dynamic_1.platformBrowserDynamic();
platform.bootstrapModule(app_module_1.AppModule, [{ provide: core_1.LOCALE_ID, useValue: "en-US" }])
    .catch((err) => console.error(err));

//# sourceMappingURL=main.js.map
