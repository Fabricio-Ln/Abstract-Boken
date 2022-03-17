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
import { NovedadesComponent } from './pages/novedades/novedades.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    HomeComponent,
    GameplayComponent,
    DownloadComponent,
    ErrorPageComponent,
    NavigationComponent,
    NovedadesComponent,
    AyudaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
