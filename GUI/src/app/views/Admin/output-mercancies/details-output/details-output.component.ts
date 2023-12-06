import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { ApiConnectService } from 'src/app/services/API/api-connect.service';

@Component({
  selector: 'app-details-output',
  templateUrl: './details-output.component.html',
  styleUrls: ['./details-output.component.css']
})
export class DetailsOutputComponent {
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
