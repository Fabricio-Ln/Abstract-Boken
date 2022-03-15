import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrarComponent } from './pages/registrar/registrar.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    RouterModule
  ]
})
export class AuthRoutingModule { }

const routes: Routes= [
{
  path: "",
  children:[
   {
    path: "login",
    component: LoginComponent
  },
  {
    path: "registro",
    component: RegistrarComponent
  },
  {
    path: "**",
    redirectTo: "Login"
  }
  ]
}
]