import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiConnectService } from 'src/app/services/API/api-connect.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent {

  constructor(private _actRouter:ActivatedRoute, private _apiConnect:ApiConnectService) {}
  product_id:any = 0
  product:any
  loaded:boolean = false;

  ngOnInit() {
    this.product_id = this._actRouter.snapshot.paramMap.get('product_id')
    this.getProductInfo()
  }

  getProductInfo() {
    this._apiConnect.get(`/products/${this.product_id}`)
    .subscribe({
      next:(response:any) => {
        console.log(response);
        this.product = response
        this.loaded = true
        
      }
    })
  }

  getProductImage(imgPath:string) {
    return `${this._apiConnect.host}/products/images${imgPath}`
  }



}
