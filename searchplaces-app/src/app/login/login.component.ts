import { Component, OnInit } from '@angular/core';    
import { Router } from '@angular/router';    
import { LoginService } from '../login.service';    
 import { FormsModule } from '@angular/forms';    
import { Login } from '../login';

    
@Component({    
  selector: 'app-login',    
  templateUrl: './login.component.html',    
  styleUrls: ['./login.component.css']    
})    
export class LoginComponent {    
    
  model : any={};    
  Log:Login;
  errorMessage:string;    
  constructor(private router:Router,private LoginService:LoginService) { }    
    
    
  ngOnInit() {    
    sessionStorage.removeItem('UserName');    
    sessionStorage.clear();    
  }    
  login(){  
   
    console.log(this.Log);
     this.LoginService.loginin(this.model).subscribe(
        data=>{
         if(data.status==200){
           this.router.navigate(['/dashboard']);
         }else{
            this.errorMessage=data.Message;
         }
        },
        error=>{
          this.errorMessage="user or password incorrect";
        }
     );
  }
 }  