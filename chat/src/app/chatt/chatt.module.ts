import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboxComponent } from './chatbox/chatbox.component';
import {RouterModule,Routes} from '@angular/router';
import { RemoveSpecialCharPipe } from './../shared/pipe/remove-special-char.pipe';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SharedModule } from '../shared/shared.module';
import { UserDetailsComponent } from '../shared/user-details/user-details.component';
import { ChatRouteGuardService } from './chat-route-gaurd.service';



@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forChild([
      {path:'chat',component:ChatboxComponent,canActivate:[ChatRouteGuardService]}
    ]),
    SharedModule
  ],
  declarations: [ChatboxComponent,RemoveSpecialCharPipe,],
  providers:[ChatRouteGuardService]
})
export class ChattModule { }
