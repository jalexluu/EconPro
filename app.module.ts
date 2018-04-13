import {NgModule} from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { BookingComponent } from "./booking/booking.component";
import { BookingService } from "./booking/booking.service";
import {Error404Component} from "./errors/404.component";
import { EventsAppComponent } from "./events-app.component";
import {
  CreateEventComponent,
  EventDetailsComponent,
  EventListResolver,
  EventResolver,
  EventService,
  EventsListComponent,
  EventThumbnailComponent,
  SessionListComponent,
} from "./events/index";
import {NavBarComponent} from "./nav/navbar.components";
import { QuestionService } from "./question/question.service";
import {appRoutes} from "./routes";
import "./rxjs-extensions";
import { TipsComponent } from "./tips/tips.component";
import {AuthService} from "./user/auth.service";

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule.forRoot(),
    ],
  // tslint:disable-next-line:object-literal-sort-keys
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    NavBarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    EventThumbnailComponent,
    SessionListComponent,
    TipsComponent,
    BookingComponent],
  providers: [
    BookingService,
    EventService,
    QuestionService,
    EventResolver,
    EventListResolver,
    AuthService,
  ],
  bootstrap: [EventsAppComponent],
})
export class AppModule {}
