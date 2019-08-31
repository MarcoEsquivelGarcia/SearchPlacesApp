import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchplacesService} from '../searchplaces-service.service';
import { Places } from '../places';
import { Options } from 'ng5-slider';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  model : any={};  
  errorMessage:string;  
  places:Places[];
  value: number = 10;
  options: Options = {
    floor: 0,
    ceil: 40
  };
  constructor(private router:Router,private SearchPlacesService:SearchplacesService) { }

  ngOnInit() {
  }

  search(){
   
    this.SearchPlacesService.getPlaces(this.model.CategoryType,this.value).subscribe(
       data=>{
         this.places=data;
       }
    );
  }

}
