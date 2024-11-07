import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  forthke: string='';
  fifthke: string='';
  sixthke: string='';
  thirke:string='';
  packageNumber:string=""
  constructor() { }


  setPNo(packageNumber:string){
    this.packageNumber = packageNumber;
  }

  getPNo(){
    return {packageNumber:this.packageNumber}
  }

  setLoginData(forthke: string, fifthke: string, sixthke:string, thirke:string) {
    this.forthke = forthke;
    this.fifthke = fifthke;
    this.sixthke = sixthke;
    this.thirke = thirke
  }

  getLoginData() {
    console.log("login", this.forthke, this.fifthke, this.sixthke, this.thirke );
    
    return { forthke: this.forthke, fifthke: this.fifthke, sixthke:this.sixthke, thirke:this.thirke };
    
  }
}
