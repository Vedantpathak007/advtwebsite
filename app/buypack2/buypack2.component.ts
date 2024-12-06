import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { Header2Component } from '../loginform/header2/header2.component';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MyserviceService } from '../myservice.service';
import {Location} from '@angular/common';

@Component({
  selector: 'app-buypack2',
  standalone: true,
  imports: [ Header2Component ,CommonModule,FormsModule  ],
  templateUrl: './buypack2.component.html',
  styleUrl: './buypack2.component.css'
})
export class Buypack2Component {
   @Input() thirke: string=''
  isHidden3 = false; 
  ishidden1=false
 name:string = ""
  cardnumber:string = ""
  cvv: string=""
  dob: string=""
  expiryDate=""
  @Input()  packno=""
  private getapiurl = 'https://localhost:7118/payment';
  constructor(private http: HttpClient, private router: Router, private myserviceService: MyserviceService,private _location: Location  ) {}
  
  backClicked() {
    this._location.back();
  }

  ngOnInit(): void {
    const loginData = this.myserviceService.getLoginData();
   const packn = this.myserviceService.getPNo();
 
   this.packno= packn.packageNumber

    this.thirke = loginData.thirke

  }
  onSubmit(){
   const payload= {
    userID:this.thirke,
    name: this.name,
    cardNumber:this.cardnumber,
    cvv:this.cvv,
    expirydate:this.expiryDate,   
    packno:this.packno
   }
   console.log("userdif", this.thirke);
   
   const formData = new FormData();
   formData.append('name', this.name);
   formData.append('cardnumber', this.cardnumber);
   formData.append('cvv', this.cvv);
   formData.append('dob',this.expiryDate)

   this.http.post(this.getapiurl,payload).subscribe((response:any)=>{
      console.log("payment detail",response);
      
   })
   this.router.navigate(['/paymentdone'])
 }

}

