import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { RegistrarComponent } from './auth/pages/registrar/registrar.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { DownloadComponent } from './pages/download/download.component';
import { GameplayComponent } from './pages/gameplay/gameplay.component';
import { HomeComponent } from './pages/home/home.component';
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
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
