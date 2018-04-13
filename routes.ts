import {Routes} from "@angular/router";
import { BookingComponent } from "./booking/booking.component";
import {Error404Component} from "./errors/404.component";
import {
  CreateEventComponent,
  EventDetailsComponent,
  EventListResolver,
  EventsListComponent,
} from "./events/index";
import {EventResolver} from "./events/shared/event-resolver.service";
import { TipsComponent } from "./tips/tips.component";

export const appRoutes: Routes = [
  { path: "events/new", component: CreateEventComponent },
  { path: "home", component: EventsListComponent}, // resolve: {events: EventListResolver}
  { path: "events/:id", component: EventDetailsComponent, resolve: {event: EventResolver} },
  { path: "404", component: Error404Component },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "tips", component: TipsComponent},
  { path: "booking", component: BookingComponent},
  { path: "user", loadChildren: "app/user/user.module#UserModule"},
];
