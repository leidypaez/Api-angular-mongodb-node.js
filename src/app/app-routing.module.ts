import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrudBitcoinComponent } from './components/crud-bitcoin/crud-bitcoin.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';


const routes: Routes = [
  {path: "", component: LandingPageComponent},
  {path: "signIn", component:LoginComponent},
  {path: "signUp", component:RegisterComponent},
  {path: "home", component:CrudBitcoinComponent},
  {path: "**", redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
