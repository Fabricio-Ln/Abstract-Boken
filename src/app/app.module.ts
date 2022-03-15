import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegistrarComponent } from './auth/pages/registrar/registrar.component';
import { HomeComponent } from './abstract/pages/home/home.component';
import { GameplayComponent } from './abstract/pages/gameplay/gameplay.component';
import { DownloadComponent } from './abstract/pages/download/download.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    HomeComponent,
    GameplayComponent,
    DownloadComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
