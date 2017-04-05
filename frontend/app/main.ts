import {enableProdMode, LOCALE_ID} from '@angular/core';
import  {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from './app.module';

enableProdMode();
const platform= platformBrowserDynamic();
platform.bootstrapModule(AppModule,[{provide: LOCALE_ID, useValue:"en-US"}])
    .catch((err : any) => console.error(err))
;