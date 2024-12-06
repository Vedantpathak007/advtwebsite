import { Component, Input } from '@angular/core';
import { Header2Component } from '../loginform/header2/header2.component';
import { MyserviceService } from '../myservice.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
@Component({
  selector: 'app-contactus',
  standalone: true,
  imports: [Header2Component],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  @Input() thirke: any;
  
  constructor(private http: HttpClient, private router: Router, private myserviceService: MyserviceService, private _location: Location   ) {}
  backClicked() {
    this._location.back();
  }
  ngOnInit(): void {
    const loginData = this.myserviceService.getLoginData();
   //const packn = this.myserviceService.getPNo();
  
   //this.packno= packn.packageNumber
  
    this.thirke = loginData.thirke
  
  }
}
