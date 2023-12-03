import { Component, ViewChild } from '@angular/core';
import { NormalModalComponent } from 'src/app/components/normal-modal/normal-modal.component';
import { ApiConnectService } from 'src/app/services/API/api-connect.service';

@Component({
  selector: 'app-default-products',
  templateUrl: './default-products.component.html',
  styleUrls: ['./default-products.component.css']
})
export class DefaultProductsComponent {
  @ViewChild(NormalModalComponent) modalIns:NormalModalComponent = new NormalModalComponent()
  
  constructor(private _apiConnect:ApiConnectService) {}

  formData:any ={
    name:"",
    image:null,
    price:0
  }


  ngOnInit() {
    this.getAllProductsDefault()
  }

  getProductImage(imgPath:string) {
    return `${this._apiConnect.host}/products/images${imgPath}`
  }

  saveChanges() {
    console.log(this.formData);

    const formDataObj:FormData = new FormData();
    for(var key in this.formData) {
      formDataObj.append(key, this.formData[key])
    }
    this._apiConnect.post('/products', formDataObj)
    .subscribe({
      next:(response:any) => {
        console.log(response);
        this.getAllProductsDefault();
        
      }
    })
  }


  getAllProductsDefault() {
    this._apiConnect.get('/products')
    .subscribe({
      next:(response:any) => {
        console.log(response);
        
        this.productsData = response
      }
    })
  }

  deshabilitateProduct(productId:number ) {
    this._apiConnect.delete(`/products/${productId}`)
    .subscribe({
      next:(response:any) => {
        console.log(response);
        this.getAllProductsDefault()
        
      }
    })
  }

  productsData:any[] =  []
  proveedores:any[] = [
    {id:1, nombre:'jumbo'},
    {id:1, nombre:'Sirena'},
    {id:1, nombre:'Bravo'},
  ]



}
