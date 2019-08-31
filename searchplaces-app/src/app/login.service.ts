import { Injectable } from '@angular/core';  
import {HttpClient} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';  
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  apiURL: string = 'https://localhost:44380/api/login';

  constructor(private http: HttpClient) {}

   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  loginin(login:Login):Observable<any>{
    let httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json'
   });    
    return this.http.post<any>(this.apiURL,login,
                    {
                      headers: httpHeaders,
                      observe: 'response'
                    }
      );
   
  }

}