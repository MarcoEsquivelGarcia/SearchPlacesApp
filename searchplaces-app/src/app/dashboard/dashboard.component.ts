import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchplacesService} from '../searchplaces-service.service';
import { Places } from '../places';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  model : any={};  
  errorMessage:string;  
  places:Places[];
  constructor(private router:Router,private SearchPlacesService:SearchplacesService) { }

  ngOnInit() {
  }

  search(){
   
    this.SearchPlacesService.getPlaces(this.model.CategoryType,this.model.Distancia).subscribe(
       data=>{
         this.places=data;
       }
    );
  }

}
