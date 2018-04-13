import {enableProdMode} from "@angular/core";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";

// for enabling prodMode, comment out below when developing;
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
