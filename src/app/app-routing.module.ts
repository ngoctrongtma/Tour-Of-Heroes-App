import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { MessagesComponent } from './messages/messages.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
const routes: Routes = [
  { path: 'heroes',   title: 'Heroes', component: HeroesComponent },
  { path: 'dashboard', title: 'Dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'message', component: MessagesComponent },
  { path: 'add-hero', component: HeroFormComponent },
  { path: 'crisis-center', component: CrisisListComponent },
  { path: '**', component: NotFoundComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes,  { enableTracing: true } )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
