import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ApiConnectService } from 'src/app/services/API/api-connect.service';

@Component({
  selector: 'details-entry',
  templateUrl: './details-entry.component.html',
  styleUrls: ['./details-entry.component.css']
})
export class DetailsEntryComponent {
    constructor(private _actRouter:ActivatedRoute,private _apiConnect:ApiConnectService) {}
    invoice_id:any = 0
    invoice:any = {}

    loaded:boolean = false

    ngOnInit() {
      this.invoice_id = this._actRouter.snapshot.paramMap.get('invoice_id')
      this.getInvoiceInfo()
      
    }

    getProductImage(imgPath:string) {
      return `${this._apiConnect.host}/products/images${imgPath}`
    }

    getInvoiceInfo() {
      this._apiConnect.get(`/invoices/${this.invoice_id}`)
      .pipe(
        map((response:any) => {
          const provider = response.provider  
          const firstDigitsRNC = provider.rnc.substring(0,4);
          provider.name = `${provider.name} - ${firstDigitsRNC} `
          response.provider = provider;
          return  response
        })
      )
      .subscribe({
        next:(response:any) => {
          console.log(response)
          this.invoice = response
          this.loaded = true
        },
        error:(error:any) =>{
          console.log(error);
          
        }
      })
    }

}
