import { HttpClient } from '@angular/common/http';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss']
})
export class HeroFormComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  model = new Hero(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

  submitted = false;
  onSubmit() { this.submitted = true; }

  newHero() {
    this.model = new Hero(42, '', '');
  }

  addHero(heroName: String, power: String, alterEgo: String | undefined): void{
    heroName = heroName.trim();
    if (!heroName || !power) { 
      return; 
    }
    this.heroService.addHero({ name: heroName, power: power, alterEgo: alterEgo } as Hero).subscribe(); // must have subscribe function. data can be post to server
    // get and log list hero to test
    this.heroService.getHeroes().subscribe(heroes => {
        console.log("list hero after add:", heroes);
      }
      )
  }


  constructor( private heroService: HeroService, private http: HttpClient,) { }

  ngOnInit(): void {
  }

}
