import { Component } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { RouterModule, Routes } from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [AuthService]
})


export class AppComponent {

      title = 'Tour of Heroes';
      constructor(public auth: AuthService) {
          auth.handleAuthentication();
      }

}