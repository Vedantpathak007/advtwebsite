import { Component, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MyserviceService } from '../../../myservice.service';
import { Header2Component } from '../../../loginform/header2/header2.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-my-advt',
  standalone: true,
  imports: [Header2Component, CommonModule],
  templateUrl: './my-advt.component.html',
  styleUrl: './my-advt.component.css'
})
export class MyAdvtComponent {
    @Input() thirke: string=''
  myadvertisements: any[] = [];

  constructor(private http: HttpClient,private myserviceService: MyserviceService, private _location: Location)
  {this.getDatafromadvtApi()}

  ngOnInit(): void {
    const loginData = this.myserviceService.getLoginData();
   //const packn = this.myserviceService.getPNo();
  
   //this.packno= packn.packageNumber
  
  
  }


    backClicked() {
      this._location.back();
    }
  
  getDatafromadvtApi(){
    this.http.get<any>('https://localhost:7118/getadvt').subscribe((data)=>{this.myadvertisements=data;
      console.log("advertisement", this.myadvertisements=data);
      
    })
  }
}
