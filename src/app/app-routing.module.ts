import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameplayComponent } from './abstract/pages/gameplay/gameplay.component';
import { HomeComponent } from './abstract/pages/home/home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: GameplayComponent }
];

@NgModule({
  imports: 
  [RouterModule.forRoot(routes)],
  exports: 
  [RouterModule]
})
export class AppRoutingModule { }


