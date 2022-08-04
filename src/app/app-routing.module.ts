import { NotFoundComponent } from './not-found/not-found.component';
import { HeroFormComponent } from './hero-feature/hero-form/hero-form.component';
import { MessagesComponent } from './messages/messages.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, PreloadingStrategy, RouterModule, Routes } from '@angular/router';
// import { HeroesComponent } from './hero-feature/heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-feature/hero-detail/hero-detail.component';
const routes: Routes = [
 // { path: 'heroes',   title: 'Heroes', component: HeroesComponent },
  { path: 'dashboard', title: 'Dashboard', component: DashboardComponent },
 // { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'message', component: MessagesComponent },
  { path: 'add-hero', component: HeroFormComponent },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), // here is lazy loading 
  },
 // { path: 'crisis-center', component: CrisisListComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // redirect to default path. pathMatch: 'full' use to
  { path: '**', component: NotFoundComponent } // wildcard => if url don't have, website will redirect to NotFoundComponent
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules} , { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
