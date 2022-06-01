import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit{

  constructor(private http: HttpClient) { }

  ngOnInit()
  {
    
  }


  // iam commenting this code because api not working
  
  // getPdf(ids){

  //   return this.http.get<any>('http://199.34.21.254/persona/generate-pdf',ids);

  // }
}
