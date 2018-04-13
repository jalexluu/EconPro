"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var booking_component_1 = require("./booking/booking.component");
var _404_component_1 = require("./errors/404.component");
var index_1 = require("./events/index");
var event_resolver_service_1 = require("./events/shared/event-resolver.service");
var tips_component_1 = require("./tips/tips.component");
exports.appRoutes = [
    { path: "events/new", component: index_1.CreateEventComponent },
    { path: "home", component: index_1.EventsListComponent },
    { path: "events/:id", component: index_1.EventDetailsComponent, resolve: { event: event_resolver_service_1.EventResolver } },
    { path: "404", component: _404_component_1.Error404Component },
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "tips", component: tips_component_1.TipsComponent },
    { path: "booking", component: booking_component_1.BookingComponent },
    { path: "user", loadChildren: "app/user/user.module#UserModule" },
];
//# sourceMappingURL=routes.js.map