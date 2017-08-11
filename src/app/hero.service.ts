import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Hero } from './hero';

import { AuthHttp } from 'angular2-jwt';

import { AuthService } from './auth/auth.service';

//import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';  // URL to web api (InMemoryWebApiModule)
  private heroesUrlWS = 'http://localhost:3000/heroes';  //REST

  constructor(public authHttp: AuthHttp) { }

  // getHeroes(){
  //   return this.http.get(this.heroesUrlWS)
  //     .map(res => res.json());
  // }

  getHeroes(): Promise<Hero[]> {
    // return Promise.resolve(HEROES);

   // return this.authHttp.get(this.heroesUrl) //InMemoryWebApiModule
    return this.authHttp.get(this.heroesUrlWS)
      .toPromise()
    //  .then(response => response.json().data as Hero[])  //InMemoryWebApiModule
      .then(response => response.json())
      .catch(this.handleError);

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }

  getHero(id: number): Promise<Hero> {
    //  return this.getHeroes()
    //    .then(heroes => heroes.find(hero => hero.id === id));

  //  const url = `${this.heroesUrl}/${id}`;//InMemoryWebApiModule
    const url = `${this.heroesUrlWS}/${id}`;
    return this.authHttp.get(url)
      .toPromise()
    // .then(response => response.json().data as Hero) //InMemoryWebApiModule
      .then(response => response.json())
      .catch(this.handleError);


  }

  private headers = new Headers({ 'Content-Type': 'application/json' });

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrlWS}/${hero.id}`;
    return this.authHttp
      .put(url, JSON.stringify(hero), { headers: this.headers })
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  create(name: string): Promise<Hero> {
    return this.authHttp
      .post(this.heroesUrlWS, JSON.stringify({ name: name }), { headers: this.headers })
      .toPromise()
   //   .then(res => res.json().data as Hero) //InMemoryWebApiModule
      .then(res => res.json())
      .catch(this.handleError);
  }

  delete(id: number): Promise<void> {
    const url = `${this.heroesUrlWS}/${id}`;
    return this.authHttp.delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

}