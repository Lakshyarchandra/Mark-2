import { Component } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  public products;
constructor(public apiService:ApiService){
this.apiService.getProducts().then((products)=>{
this.products=products;
})
}
}
