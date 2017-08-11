
import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { AppComponent} from './app.component';
import { CallbackComponent} from './callback/callback.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthGuardService as AuthGuard } from './auth/auth-guard.service';
import { ScopeGuardService as ScopeGuard } from './auth/scope-guard.service';



export const ROUTES: Routes = [

    { path: '', component: HomeComponent }, 
    {
      path: 'heroes',
      component: HeroesComponent, canActivate: [AuthGuard], data: { expectedScopes: ['write:messages']}
    },
    {
      path: 'dashboard',
      component: DashboardComponent, canActivate: [AuthGuard], data: { expectedScopes: ['write:messages']}
    },
    { 
      path: 'callback', 
      component: CallbackComponent 
    },
    { 
      path: 'profile', 
      component: ProfileComponent, canActivate: [AuthGuard], data: { expectedScopes: ['write:messages']} 
    },    
    // {
    //   path: '',
    //   redirectTo: '/dashboard',
    //   pathMatch: 'full'
    // },
    {
      path: 'detail/:id',
      component: HeroDetailComponent
    },
     { path: '**', redirectTo: '' }, 
];


