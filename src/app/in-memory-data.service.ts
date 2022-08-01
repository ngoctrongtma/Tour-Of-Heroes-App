import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero-feature/hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 12, name: 'Dr. Nice', power: "string", alterEgo: "string"},
      { id: 13, name: 'Bombasto', power: "string", alterEgo: "string" },
      { id: 14, name: 'Celeritas', power: "string", alterEgo: "string" },
      { id: 15, name: 'Magneta', power: "string", alterEgo: "string" },
      { id: 16, name: 'RubberMan', power: "string", alterEgo: "string" },
      { id: 17, name: 'Dynama', power: "string", alterEgo: "string" },
      { id: 18, name: 'Dr. IQ', power: "string", alterEgo: "string" },
      { id: 19, name: 'Magma', power: "string", alterEgo: "string" },
      { id: 20, name: 'Tornado', power: "string", alterEgo: "string" }
    ];
    return {heroes};
  }
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}
