import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js'; 
import {UserService} from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styles: [
  ]
})
export class CompanyComponent implements OnInit {
  chart = [];
  selectedValue:any;
  cname:any;
  ind :any;
  stock:any;


  constructor(private router: Router,private service: UserService) { }

  ngOnInit(): void {
  }

  prepareChart(arr):any{
    this.chart = new Chart('canvas', {  
      type: 'line',  
      data: {  
        labels: arr[1],  
        datasets: [  
          {  
            label:this.cname,
            data: arr[0],  
            borderColor: 'red',  
            
          }  
        ]  
      }
    })
  }

 displayStock(val:any){
   switch(val){
    case 'mod1':
      this.stock = "NIFTY 50 (National Stock Index)";
      this.service.openNSE().subscribe((result:any) => {this.ind=result});
      break;
    case 'mod2':
      this.stock = "SENSEX ( Bombay Stock Index)"
      this.service.openBSE().subscribe((result:any) => {this.ind=result});
       break;
   }

 }

  chooseCompany(val:any){
    
    switch(val){
      case 'd1':
        this.cname = "TATA";
        this.service.getTATA().subscribe((result:any) => {
          this.prepareChart(result);
        });
        break;
      case 'd2':
        this.cname = "RELIANCE";
          this.service.getReliance().subscribe((result:any) => {
            this.prepareChart(result);
          });
          break;
      case 'd3':
        this.cname = "CIPLA";
        this.service.getCipla().subscribe((result:any) => {
          this.prepareChart(result);
        });
        break;
      case 'd4':
        this.cname = "ASHOK LEYLAND";
        this.service.getAshokLeyland().subscribe((result:any) => {
          this.prepareChart(result);
        });
        break;
      case 'd5':
        this.cname = "EICHERMOT";
        this.service.getEichermot().subscribe((result:any) => {
          this.prepareChart(result);
        });
        break;
        
        
    }
  }

  logout():any{
    this.service.setUserLoggedOut();
    this.router.navigate([''])
  }
  
}