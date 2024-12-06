import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { getLocaleExtraDayPeriodRules, JsonPipe } from '@angular/common';
import { LoggedinComponent } from './loggedin/loggedin.component';
import { MyserviceService } from '../myservice.service';
@Component({
  selector: 'app-loginform',
  standalone: true,
  imports: [ FormsModule,JsonPipe, LoggedinComponent],
  templateUrl: './loginform.component.html',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {
  email!: string
  passwordhash!: string
  forthkeyValue!: string;
  fifthkeyValue!: string;

  constructor(  private http: HttpClient, private router: Router, private myserviceService: MyserviceService) { }
 
  onSubmit(){
      const payload = {
        email: this.email,
        passwordHash: this.passwordhash,
      }
      this.http.post('https://localhost:7118/loggin', payload)
      .subscribe((response: any) => {
         const keys = Object.keys(response);
         const seckey = keys[1];
         const thirkey = keys[2];
         const forthkey = keys[3];
         const fifthkey = keys[4];
         const forthkeyValue = response[forthkey]
         const fifthkeyValue = response[fifthkey]
         const sixtkeyValue=  response[keys[5]]

        if(response[seckey]=="Login succ"){
          console.log(response, "login",response[thirkey]);
          
        this.myserviceService.setLoginData(response[forthkey], response[fifthkey],  response[keys[5]], response[thirkey]);
          this.router.navigate(['/loggedin']);
          localStorage.setItem('thirdkey', response[thirkey]);
        } 
         else alert("Login failed")
      }, (error: any) => {
       alert("Registration failed")
        console.error('Error sending data:', error);
      });
  }

  
}
