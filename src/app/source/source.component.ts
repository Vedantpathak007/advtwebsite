import { Component, Inject, OnInit, PLATFORM_ID, ViewChild, ElementRef,  Injector  } from '@angular/core';
import { isPlatformBrowser, JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCard } from '@angular/material/card';
import { statfsSync } from 'node:fs';
import { setMaxIdleHTTPParsers } from 'node:http';
@Component({
  selector: 'app-source',
  standalone: true,
 
  imports: [ FormsModule, JsonPipe, MatCard],
  templateUrl: './source.component.html',
  styleUrls: ['./source.component.css']
})

export class SourceComponent  {
  isHidden1=false
  isHidden2=true;
  isHidden3 = false;
  isHidden4=true
  
  username!: string
  email!: string
  passwordhash!: string
  statusmessage!: string 
  dob!:string
  dOb!:string

  @ViewChild('video') videoElement!: ElementRef<HTMLVideoElement>;
  @ViewChild('canvas') canvasElement!: ElementRef<HTMLCanvasElement>;


  constructor(private elementRef: ElementRef, private http: HttpClient) { }
 
  ngAfterViewInit() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(stream => {
        this.videoElement.nativeElement.srcObject = stream;
      })
      .catch(error => {
        console.error('Error accessing camera:', error);
      });
  }

  captureImage() {
   this.isHidden2=false
    const canvas = this.canvasElement.nativeElement;
    const context = canvas.getContext('2d');
    if (context) {
      context.drawImage(this.videoElement.nativeElement, 0, 0, 100, 100);
      let imageData = canvas.toDataURL();
      imageData = imageData.replace(/^data:image\/png;base64,/, '');
      console.log('Image data:', imageData);
      this.isHidden1=true
      this.isHidden3=true
      this.isHidden4=false
    } else {
      console.error('Failed to get canvas context');
    }
  }
  resetImage(){
 this.isHidden2=true
 this.isHidden1=false
 this.isHidden3=false
this.isHidden4=true
  }

  onSubmit() {
 
    // Get the image data from the canvas
    let imageData = this.canvasElement.nativeElement.toDataURL();
    imageData = imageData.replace(/^data:image\/png;base64,/, '');
  
    if (this.dob) {
      const date = new Date(this.dob);  // Convert the input string to a Date object
      this.dOb = date.toDateString();  // Convert the date to a string (e.g., 'Mon Sep 10 2024')
    }
    const payload = {
      userID:  "",
      username: this.username,
      email: this.email,
      passwordHash: this.passwordhash,
      profilePicUrl: imageData,
      statusMessage: this.statusmessage,
      //createdAt: this.dOb ? this.dOb.toString() : null
       createdAt:"fri"
    };
  console.log("playload", payload);
  
    this.http.post('https://localhost:7118/postdata', payload)
      .subscribe((response: any) => {

      alert("Registration successfull")
        console.log('Data sent successfully:', response);
      }, (error: any) => {
       alert("Registration failed")
        console.error('Error sending data:', error);
      });
  }


  
}
