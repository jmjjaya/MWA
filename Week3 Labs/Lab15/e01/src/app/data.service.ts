import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  
  constructor(private http: HttpClient) { }

  getUserData():Observable<any>{
    return this.http.get('http://jsonplaceholder.typicode.com/users/1');
  } 
}
