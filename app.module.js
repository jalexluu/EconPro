"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var booking_component_1 = require("./booking/booking.component");
var booking_service_1 = require("./booking/booking.service");
var _404_component_1 = require("./errors/404.component");
var events_app_component_1 = require("./events-app.component");
var index_1 = require("./events/index");
var navbar_components_1 = require("./nav/navbar.components");
var question_service_1 = require("./question/question.service");
var routes_1 = require("./routes");
require("./rxjs-extensions");
var tips_component_1 = require("./tips/tips.component");
var auth_service_1 = require("./user/auth.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(routes_1.appRoutes),
                ng_bootstrap_1.NgbModule.forRoot(),
            ],
            // tslint:disable-next-line:object-literal-sort-keys
            declarations: [
                events_app_component_1.EventsAppComponent,
                index_1.EventsListComponent,
                navbar_components_1.NavBarComponent,
                index_1.EventDetailsComponent,
                index_1.CreateEventComponent,
                _404_component_1.Error404Component,
                index_1.EventThumbnailComponent,
                index_1.SessionListComponent,
                tips_component_1.TipsComponent,
                booking_component_1.BookingComponent
            ],
            providers: [
                booking_service_1.BookingService,
                index_1.EventService,
                question_service_1.QuestionService,
                index_1.EventResolver,
                index_1.EventListResolver,
                auth_service_1.AuthService,
            ],
            bootstrap: [events_app_component_1.EventsAppComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map