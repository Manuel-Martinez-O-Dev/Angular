import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  url: string = "https://practicando-bd-default-rtdb.firebaseio.com/test.json";

  constructor(private http: HttpClient) { }

  getData(): Observable<any>
  {
    return this.http.get(this.url);
  }

  postData(body:any): Observable<any>
  {
    return this.http.post(this.url, body)
  }
}
