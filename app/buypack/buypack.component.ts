import { Component } from '@angular/core';
import { Header2Component } from '../loginform/header2/header2.component';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import {Location} from '@angular/common';
@Component({
  selector: 'app-buypack',
  standalone: true,
  imports: [Header2Component, CommonModule, FormsModule],
  templateUrl: './buypack.component.html',
  styleUrl: './buypack.component.scss'
})
export class BuypackComponent {
  pricePackages: any[] = [];
  hasPackages: boolean | undefined;

  //packageLength: number;

  private getapiurl = 'https://localhost:7118/getprice';
     
  constructor(private http: HttpClient, private router: Router,private myserviceService: MyserviceService,private _location: Location ) {
    this.getDataFromApi();
  
    //  this.packageLength = this.pricePackages.length;
    
  } 

  backClicked() {
    this._location.back();
  }

  getStarted( packageNumber:string){
    
    console.log("packnooo", packageNumber);
    this.router.navigate(['/mypack'])
    this.myserviceService.setPNo(packageNumber)
    
  }
  onPackageClick(packageNumber: number): void {
    console.log("packno",packageNumber);  // Logs the package number to the console
  }
  getDataFromApi() {
    this.http.get<any>(this.getapiurl).subscribe(
      (data) => {
        this.pricePackages = data; 
        console.log(data); 
        
      },
      (error) => {
        console.error('Error fetching data', error);  // Error handling
      }
    );
  }
  logIndex(index: number) {
    console.log(index + 1);
  }

  trackByFn(index: number, item: any) {
    this.logIndex(index);
    return index;
  }
}
