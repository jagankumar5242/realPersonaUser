import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
 private url="http://199.34.21.254/persona/personas/0/10"
  constructor(private http:HttpClient) { }

  getDetails(_payLoad:any):Observable<any[]>{
    return this.http.get<any[]>(this.url)
  }
}

