import { Hero } from './../hero';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  heroes : Hero[] = [];

  getHeroes(): void {
   this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes)
  }

  addHero(heroName: String): void{
    heroName = heroName.trim();
    if (!heroName) { return; }
    this.heroService.addHero({ name:heroName } as Hero)
      .subscribe( hero => {
        this.heroes.push(hero);
      });
  }

  deleteHero(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero.id).subscribe();
  }
  
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

}
