import { Injectable } from '@angular/core';  
import {HttpClient, HttpParams} from '@angular/common/http';  
import {HttpHeaders} from '@angular/common/http';  
import { from, Observable } from 'rxjs';  
import { Login } from './login';
import { FilterPlaces, Places } from './places';
@Injectable({
  providedIn: 'root'
})
export class SearchplacesService {
  apiURL: string = 'https://localhost:44380/api/places/GetFiltered';

  constructor(private http: HttpClient) {}

   // Http Options
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getPlaces(CategoryType:string, Distancia:number):Observable<Places[]>{
    let httpHeaders = new HttpHeaders()
        .set('Accept', 'application/json');
    let httpParams = new HttpParams()
      .set('CategoryType', CategoryType)
      .set('Distancia', Distancia.toString());  
    return this.http.get<Places[]>(this.apiURL, {
                          headers: httpHeaders,
                          params: httpParams, 
                          responseType: 'json'
                    });
   
  }
}