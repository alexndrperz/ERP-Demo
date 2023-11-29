import { Component, ViewChild } from '@angular/core';
import { NormalModalComponent } from 'src/app/components/normal-modal/normal-modal.component';

@Component({
  selector: 'app-default-products',
  templateUrl: './default-products.component.html',
  styleUrls: ['./default-products.component.css']
})
export class DefaultProductsComponent {
  @ViewChild(NormalModalComponent) modalIns:NormalModalComponent = new NormalModalComponent()
  

  productsData:any[] = [
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:20000, available:3},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000, available:3},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000, available:3},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000, available:3},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000, available:3},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000, available:3},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000, available:3},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000, available:3},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000, available:3},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000, available:3},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000, available:3},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000, available:3},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000, available:3},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000, available:3},
  ]


  proveedores:any[] = [
    {id:1, nombre:'jumbo'},
    {id:1, nombre:'Sirena'},
    {id:1, nombre:'Bravo'},
  ]



}
