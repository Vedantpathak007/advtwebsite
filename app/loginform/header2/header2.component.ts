import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { MyserviceService } from '../../myservice.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header2.component.html',
  styleUrl: './header2.component.css'
})
export class Header2Component {
  @Input() forthke:string=''
  @Input() fifthke: string=''
  @Input() sixthke: string=''


  base64String!: string;
 private getapiurl = 'https://localhost:7118/getmsg';
 constructor(private http: HttpClient,private router: Router, private myserviceService: MyserviceService  ) {}
 ngOnInit(): void {
  const loginData = this.myserviceService.getLoginData();
  this.forthke = loginData.forthke;
  this.fifthke = loginData.fifthke;
  this.sixthke = loginData.sixthke

}
tomyadvt(){
  this.router.navigate(['/myadvertisements'])
}
}
