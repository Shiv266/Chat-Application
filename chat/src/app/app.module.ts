import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';


import { AppComponent } from './app.component';
import { ChattModule } from './chatt/chatt.module';
import { UserModule } from './user/user.module';
import { LogInComponent } from './user/log-in/log-in.component';
import { AppServiceService } from './app-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    UserModule,
    ChattModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {path:'log-in',component:LogInComponent,pathMatch:'full'},
      {path:'',redirectTo:'log-in',pathMatch:'full'},
      {path:'*',component:LogInComponent},
      {path:'**',component:LogInComponent}
    ])
  ],
  providers: [AppServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
