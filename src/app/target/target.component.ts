import { HttpClient } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common'

@Component({
  selector: 'app-target',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './target.component.html',
  styleUrl: './target.component.css'
})
export class TargetComponent {
  @Input() item=''
   httpClient = inject(HttpClient);
  ngOnInit():void{
    this.fetchData()
  }


data: any[] = []
  fetchData(){
    this.httpClient.get('https://localhost:7066/getStock').subscribe((data:any)=>{
  console.log(data);
  this.data= data;
  
    }
  )
  }

}
