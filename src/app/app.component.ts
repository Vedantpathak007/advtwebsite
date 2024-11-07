import { Component } from '@angular/core';
import { Router,RouterModule, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';  
import { WebcamModule } from 'ngx-webcam';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    RouterModule, 
      // Import the routing module here
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'MedantaApp';
  constructor(private router: Router) {}
  username: string = '';
 
  onButtonClick() {
    this.router.navigate(['/target']);
}
   
}



