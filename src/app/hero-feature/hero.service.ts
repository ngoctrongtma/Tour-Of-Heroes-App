import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from '../mock-heroes'; 
import { Observable, of } from 'rxjs';
import { MessageService } from '../message.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private heroesUrl = 'api/heroes';  // URL to web api

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); // log to  console
  
      this.log(`${operation} failed: ${error.message}`); // add message to array in messageService
  
      return of(result as T); // return result
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }

  // this function is get list hero from server (url: api/heroes)
  getHeroes(): Observable<Hero[]> {
    // this.messageService.add('HeroService: fetched heroes'); (1)
    return this.http.get<Hero[]>(this.heroesUrl).pipe( 
      tap(_ => this.log('fetched heroes')), // ??? it will do ??? => it replace for (1), it will send message to messageService
      catchError(this.handleError<Hero[]>('getHeroes', []))
    );
  }

  // get hero by heroId (url: api/heroes/:id)
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)), // this function will send message to messageService
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }
  // update hero
  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(
      tap(_ => this.log(`updated hero id=${hero.id}`)), // this function will send message to messageService
      catchError(this.handleError<any>('updateHero'))
    );
  }
  // create hero
  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions).pipe(
      tap((newHero: Hero) => this.log(`added hero w/ id=${newHero.id}`)), // this function will send message to messageService
      catchError(this.handleError<Hero>('addHero'))
    );
  }
  // delete hero (url: api/heroes/:id)
  deleteHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.delete<Hero>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)), // this function will send message to messageService
      catchError(this.handleError<Hero>('deleteHero'))
    );
  }

  searchHeroes(term: string): Observable<Hero[]> {
    // check input value
    if (!term.trim()) {
      // if not search term, return empty hero array.
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`).pipe( // get('api/heroes/?name="input-value"')
      tap(x => x.length ?
         this.log(`found heroes matching "${term}"`) :
         this.log(`no heroes matching "${term}"`)), // this function will send message to messageService
      catchError(this.handleError<Hero[]>('searchHeroes', []))
    );
  }

  constructor(
    private http: HttpClient,
    private messageService: MessageService// messageService is private because it only use in this service
  ) { } 
}
