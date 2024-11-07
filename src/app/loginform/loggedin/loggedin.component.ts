import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { jsPDF } from 'jspdf';
import { catchError, throwError } from 'rxjs';
import { MyserviceService } from '../../myservice.service';
import { Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Header2Component } from '../header2/header2.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggedin',
  standalone: true,
  imports: [FormsModule, CommonModule, Header2Component],
  templateUrl: './loggedin.component.html',
  styleUrl: './loggedin.component.css'
})
export class LoggedinComponent {
  
  isHidden3 = false; 
  ishidden1=true;
  description:string = ""
  targAud:string = ""
  titles: string=""
  selectedFile!: File;

  base64String!: string;
 private getapiurl = 'https://localhost:7118/getmsg';
  thirke: any;
  
 constructor(private http: HttpClient, private router: Router, private myserviceService: MyserviceService ) {}
 ngOnInit(): void {
  const loginData = this.myserviceService.getLoginData();
 //const packn = this.myserviceService.getPNo();

 //this.packno= packn.packageNumber

  this.thirke = loginData.thirke

}

  onFileChange(event: any) {
    this.selectedFile = event.target.files[0];
    this.convertToBase64(this.selectedFile);
  }

getmyData(){
return this.http.get<any>(this.getapiurl)
}


  convertToBase64(file: File) {
    const reader = new FileReader();
    reader.onload = () => {
      this.base64String = reader.result as string;
    };
    reader.readAsDataURL(file);
  }

  // closePopup(event?: Event) {
  //   this.ishidden1 = true;
  //   if (event) {
  //     event.stopPropagation(); // Stop click event from propagating to avoid unwanted behavior
  //   }
  // }

    createBlog(): void {
      this.ishidden1=false
      
     console.log("getdata", this.getmyData);
     
    }
    
   onSubmit(){
    console.log("button clicked");
    
    const payload = {
  
     id:"", 
    title:this.titles,
    description:this.description,
    images:this.base64String,
    userID:this.thirke,
    targAud:this.targAud,

    }
    console.log("paylod", payload);
    const formData = new FormData();
    formData.append('title', this.titles);
    formData.append('description', this.description);
    formData.append('targetAudience', this.targAud);
    formData.append('image', this.selectedFile);

    this.http.post('https://localhost:7118/postlogged', payload)
      .subscribe((response: any) => {
       
        
        console.log(response);
      });
   }
  
   tobuypack(){
    this.router.navigate(['/buypack'])
  }
 
}
