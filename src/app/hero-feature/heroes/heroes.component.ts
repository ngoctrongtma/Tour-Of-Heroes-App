import { Hero } from '../hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../../message.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[] = [];
  // heroes$!: Observable<Hero[]>;
  selectedId = 0;

  getHeroes(): void {
      this.heroService.getHeroes().subscribe(heroes => {
        console.log("list hero:", heroes);
        this.heroes = heroes;
      }
    )
  }

  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe(); // research about subscribe
  }
  
  constructor(private heroService: HeroService, private messageService: MessageService,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    // research this way => research about RxJS library
        this.route.paramMap.subscribe(params => {
          this.selectedId = Number(params.get('id')); 
        })
    this.getHeroes();
    
  }

}
