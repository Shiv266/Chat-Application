import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../app-service.service';
import { Cookie } from 'ng2-cookies/ng2-cookies';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  public email: any;
  public password: any;

  constructor(
    public appService:AppServiceService,
    public router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {

   /* if(Cookie.get('receiverId')){
      this.router.navigate(['/chat']);

    }*/}
  public goToSignUp: any = () => {

    this.router.navigate(['/sign-up']);

  } // end goToSignUp
  //method to login
  public logInFunction = (): any => {
    let data = {
      'email': this.email,
      'password': this.password
    }

    this.appService.logInFunction(data).subscribe(
      Response => {

        if (Response.status === 200) {
          Cookie.set('authtoken', Response.data.authToken);

          Cookie.set('receiverId', Response.data.userDetails.userId);

          Cookie.set('receiverName', Response.data.userDetails.firstName + ' ' + Response.data.userDetails.lastName);

          this.appService.setUserInfoInLocalStorage(Response.data.userDetails)

          this.router.navigate(['/chat']);


        }
        else {
          this.toastr.error(Response.message);
          
        }
      },
      (err) => {

        this.toastr.error('Server Error!');
       
      });
  }//end
}


