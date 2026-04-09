import { Component } from '@angular/core';
import { ApiConnectService } from 'src/app/services/API/api-connect.service';

@Component({
  selector: 'app-entry-mercancies',
  templateUrl: './entry-mercancies.component.html',
  styleUrls: ['./entry-mercancies.component.css']
})
export class EntryMercanciesComponent {

  constructor(private _apiConnect:ApiConnectService) {}


  ngOnInit() {
    this.getEntries()
  }
  entries:any[] =[

  ]

  getEntries() {
    this._apiConnect.get('/invoices')
    .subscribe( {
      next:(response:any) => {
        console.log(response);
        this.entries= response
        
      }
    })
  }
}
