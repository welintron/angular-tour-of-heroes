import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
 
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
import { Hero }           from './hero';
import { AuthHttp } from "angular2-jwt";

@Injectable()
export class HeroSearchService {

  constructor(private authHttp: AuthHttp) {}

  search(term: string): Observable<Hero[]> {
    return this.authHttp
               .get(`http://localhost:3000/heroes/?name=${term}`)
          //     .get(`api/heroes/?name=${term}`) //InMemoryWebApiModule
           //    .map(response => response.json().data as Hero[]); //InMemoryWebApiModule
                 .map(response => response.json() as Hero[]);
  }
}