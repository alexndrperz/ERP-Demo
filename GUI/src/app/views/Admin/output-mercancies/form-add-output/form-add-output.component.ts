import { Component, ViewChild } from '@angular/core';
import { SearchInputComponent } from 'src/app/components/search-input/search-input.component';
import { SearchProductsComponent } from '../../entry-mercancies/form-add-entry/search-products/search-products.component';
import { ApiConnectService } from 'src/app/services/API/api-connect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-add-output',
  templateUrl: './form-add-output.component.html',
  styleUrls: ['./form-add-output.component.css']
})
export class FormAddOutputComponent {
  imgSelected:boolean = false
  imgInpPath:string = ""
  subInvoices:any[] = []
  actualDate:Date = new Date()

  @ViewChild(SearchInputComponent) InpsearchIns!:SearchInputComponent;
  @ViewChild(SearchProductsComponent) searchIns!:SearchProductsComponent;

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
  isInputInvalid:boolean = false;
  productSelected:any = {}

  invoice:any = {
    fiscal_comp:false,
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
    this.productSelected = item
    console.log(item);
    this.formDataPerInp.product_id = item.id
    this.imgSelected = true
    this.formDataPerInp.name = item.name
    this.formDataPerInp.imgPath = item.imgPath
    this.imgInpPath = `${this._apiConnect.host}/products/images${item.imgPath}`
    
    this.calculateTotal()
    console.log(this.formDataPerInp);
  }

  calculateTotal() {
    if(this.formDataPerInp.quantity != 0 || this.formDataPerInp.product_id != 0) {
      if(this.formDataPerInp.quantity > this.productSelected.quantity_availables) {
        this.isInputInvalid=true
      }
      else {
        this.isInputInvalid= false
      }
      this.formDataPerInp.price_unit = parseFloat((this.productSelected.avg_bills * ((this.productSelected.percentage_sell /100)+1)).toFixed(2)) 
      this.formDataPerInp.subtotal = this.formDataPerInp.price_unit * this.formDataPerInp.quantity
      this.formDataPerInp.total = parseFloat((this.formDataPerInp.subtotal * 1.18).toFixed(2))
      
    }
  }
  

  addSubInvoice() {
    const inputProd:any = {
      price_unit:this.formDataPerInp.price_unit,
      product_id:this.formDataPerInp.product_id,
      quantity:this.formDataPerInp.quantity,
      subtotal:this.formDataPerInp.subtotal,
      total:this.formDataPerInp.total 
     }
    this.subInvoices.push(this.formDataPerInp)
    this.invoice.subInvoices.push(inputProd)
    this.invoice.subtotal += parseFloat(this.formDataPerInp.subtotal)
    this.invoice.total +=parseFloat(this.formDataPerInp.total)
    this.searchIns.clearSearch()
    console.log(this.subInvoices);
    
    this.clearInput()
  }

  getProductImage(imgPath:string) {
    return `${this._apiConnect.host}/products/images${imgPath}`
  }

  createInvoice() {
    this._apiConnect.post('/invoices/out', this.invoice)
    .subscribe({
      next:(response:any) => {
        console.log(response);
        this._router.navigate(['/admin/output-mercancies'])
      },
      error:(error:any) => {
        console.error(error);
        
      }
    })
    console.log(this.invoice);
    
    
  }

}
