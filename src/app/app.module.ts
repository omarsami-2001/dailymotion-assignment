import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { VideoComponent } from './components/video/video.component';
import { ListingComponent } from './components/listing/listing.component';
import { HomescreenComponent } from './components/homescreen/homescreen.component';
import { MyplaylistscreenComponent } from './components/myplaylistscreen/myplaylistscreen.component';
import { UserservService } from './userserv.service';
import { VideoservService } from './videoserv.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    VideoComponent,
    ListingComponent,
    HomescreenComponent,
    MyplaylistscreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [VideoservService,UserservService],
  bootstrap: [AppComponent]
})
export class AppModule { }
