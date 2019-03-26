import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './shared-services/storage.service';
import { HttpxService } from './shared-services/httpx.service';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StorageService,
    HttpxService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
