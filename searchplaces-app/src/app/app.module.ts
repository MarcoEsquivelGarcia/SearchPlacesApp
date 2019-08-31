import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
   
import { FormsModule } from '@angular/forms';   
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule} from '@angular/common/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClient } from 'selenium-webdriver/http';
import { LoginService } from './login.service';
import { SearchplacesService } from './searchplaces-service.service';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    Ng5SliderModule      
  ],
  providers: [LoginService,SearchplacesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
