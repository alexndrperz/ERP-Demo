import { Component } from '@angular/core';
import { ApiConnectService } from 'src/app/services/API/api-connect.service';

@Component({
  selector: 'app-output-mercancies',
  templateUrl: './output-mercancies.component.html',
  styleUrls: ['./output-mercancies.component.css']
})
export class OutputMercanciesComponent {

  constructor(private _apiConnect:ApiConnectService) {}

  outInvoices:any[] = []

  ngOnInit() {
    this.getOutTransacts()
  }

  getOutTransacts() {
    this._apiConnect.get('/invoices/out')
    .subscribe({
      next:(response:any) => {
        console.log(response);
        this.outInvoices = response
        
      },
      error:(error:any) => {
        console.log(error);
        
      }
    })
  }

}
