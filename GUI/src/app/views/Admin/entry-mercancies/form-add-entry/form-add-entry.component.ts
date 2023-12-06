import { Component, ViewChild } from '@angular/core';
import { ApiConnectService } from 'src/app/services/API/api-connect.service';
import { SearchProductsComponent } from './search-products/search-products.component';
import { SearchInputComponent } from 'src/app/components/search-input/search-input.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'form-add-entry',
  templateUrl: './form-add-entry.component.html',
  styleUrls: ['./form-add-entry.component.css']
})
export class FormAddEntryComponent {
  searchActive:boolean = false
  imgSelected:boolean = false
  imgInpPath:string = ""
  subInvoices:any[] = []
  @ViewChild(SearchProductsComponent) searchIns!:SearchProductsComponent;
  @ViewChild(SearchInputComponent) InpsearchIns!:SearchInputComponent;

  constructor(private _apiConnect:ApiConnectService, private _router:Router) {}

  totalAcum:number = 0
  subTotalAcum:number= 0
  totalITBIS:number = 0
  formDataPerInp:any =  {
    quantity:0,
    product_id:0,
    price_unit:0, 
    subtotal:0,
    total:0
  }

  invoice:any = {
    provider_id:0,
    name:"",
    rnc:"",
    subInvoices:[],
    subtotal:0,
    total:0
  }

  clearInput() {
    this.imgSelected = false
    this.imgInpPath = ""
    this.formDataPerInp ={
      quantity:0,
      product_id:0,
      price_unit:0, 
      subtotal:0,
      total:0
    }
    console.log(this.formDataPerInp);
    
  }

  asignProvider(provider_id:number) {
    this.invoice.provider_id = provider_id
  }

  asignProduct(item:any) {
    console.log(item.imgPath);
    this.formDataPerInp.product_id = item.id
    this.imgSelected = true
    this.formDataPerInp.name = item.name
    this.formDataPerInp.imgPath = item.imgPath
    this.imgInpPath = `${this._apiConnect.host}/products/images${item.imgPath}`
    this.calculateTotal()
    console.log(this.formDataPerInp);
  }

  calculateTotal() {
    if(this.formDataPerInp.product_id != 0) {
      const discount:number = (this.formDataPerInp.quantity * this.formDataPerInp.price_unit) *0.18
      this.formDataPerInp.subtotal = parseFloat((this.formDataPerInp.quantity * this.formDataPerInp.price_unit).toFixed(2) )
      this.formDataPerInp.total =parseFloat ( (this.formDataPerInp.subtotal - discount).toFixed(2) ) 
    }
  }
  
  clearProviderInp() {
    this.invoice.rnc = "";
    this.invoice.name = "";
    this.invoice.provider_id = 0
  }

  addSubInvoice() {

    this.subInvoices.push(this.formDataPerInp)
    this.invoice.subtotal += parseFloat(this.formDataPerInp.subtotal)
    this.invoice.total +=parseFloat(this.formDataPerInp.total)
    
    this.invoice.subInvoices.push(this.formDataPerInp)
    console.log(this.subInvoices);
    
    this.searchIns.clearSearch();
    
    this.clearInput()
  }

  getProductImage(imgPath:string) {
    return `${this._apiConnect.host}/products/images${imgPath}`
  }

  createInvoice() {
    this._apiConnect.post('/invoices', this.invoice)
    .subscribe({
      next:(response:any) => {

        console.log(response);
        this._router.navigate(['/admin/entry-mercancies'])
        
      },
      error:(error:any) => {
        console.error(error);
        
      }
    })
    
  }
}
