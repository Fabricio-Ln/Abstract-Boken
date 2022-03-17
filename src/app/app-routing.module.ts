import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/pages/login/login.component';
import { AyudaComponent } from './pages/ayuda/ayuda.component';

import { DownloadComponent } from './pages/download/download.component';
import { GameplayComponent } from './pages/gameplay/gameplay.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NovedadesComponent } from './pages/novedades/novedades.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'descargar', component: DownloadComponent },
  { path: 'gameplay', component: GameplayComponent },
  { path: '404', component: NotFoundComponent},
  {path:  'login', component: LoginComponent},
  {path:  'ayuda', component: AyudaComponent},
  {path:  'novedades', component: NovedadesComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/404', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


