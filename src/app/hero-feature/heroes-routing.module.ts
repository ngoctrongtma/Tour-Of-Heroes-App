import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroFormComponent } from './hero-form/hero-form.component';
import { HeroSearchComponent } from './hero-search/hero-search.component';

const routes: Routes = [
  { path: 'heroes',  component: HeroesComponent, data: { animation: 'heroes' } },
  { path: 'detail/:id', component: HeroDetailComponent, data: { animation: 'hero' } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // in feature module use RouterModunle.forChild() method
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
