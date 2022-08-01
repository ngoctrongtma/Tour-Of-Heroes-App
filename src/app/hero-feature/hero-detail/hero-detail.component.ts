import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { Location } from '@angular/common';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  hero ?: Hero;
  constructor( 
      private route: ActivatedRoute, // holds information about the route to this instance of the HeroDetailComponent.( in this component, it use to get params)
      private router: Router,
      private heroService: HeroService, // gets hero data from the remote server.
      private location: Location, // is an Angular service for interacting with the browser. (in this component, it use to back())
    )
    { }
  
  ngOnInit(): void {
    // way 1:
    const id = Number(this.route.snapshot.paramMap.get('id'));// get id in params
    this.heroService.getHero(id)
    .subscribe(hero => this.hero = hero);

    // way 2: follow tutorial
    // this.hero = this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) => 
    //      this.heroService.getHero( Number(params.get('id')!))
    // )
  }
  
  save(): void{
    if (this.hero) {
      this.heroService.updateHero(this.hero)
        .subscribe(() => this.goBack());
    }
  }

  goBack(): void {
    this.location.back();
  }

}
