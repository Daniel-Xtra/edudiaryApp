import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component"
import { LoginComponent } from "./login/login.component";
import { NotFoundComponent } from './not-found/not-found.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RegisterComponent } from './register/register.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';


const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent},
  
  { path: 'login', component: LoginComponent},

  { path: 'register', component: RegisterComponent},

  { path: 'privacy', component: PrivacyPolicyComponent},

  { path: 'terms', component: TermsOfServiceComponent},

  { path: 'not-found', component: NotFoundComponent},

  { path: '**', redirectTo: 'not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
