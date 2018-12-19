import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  protected url: string;

  protected readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(/*protected http: HttpClient*/) {
    this.url = 'http://192.168.0.196:8094/';
  }

  temp: Observable<number> ;

  login(username:string, password:string): Observable<number>{
    return this.temp;
  }

  register(username:string, password:string): Observable<number>{
    return this.temp;
  }
}
