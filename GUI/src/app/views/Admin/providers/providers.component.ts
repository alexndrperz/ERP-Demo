import { Component } from '@angular/core';
import { ApiConnectService } from 'src/app/services/API/api-connect.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styleUrls: ['./providers.component.css']
})
export class ProvidersComponent {

  providers:any[] = []

  constructor(private _apiConnect:ApiConnectService) {}

  ngOnInit() {
    this._apiConnect.get('/providers')
    .subscribe({
      next:(response:any) => {
        console.log(response);
        this.providers = response
        
      }
    })
  }

}
