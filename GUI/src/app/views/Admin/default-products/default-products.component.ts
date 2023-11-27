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
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:20000},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000},
    {id:2, nombre:"Martinis", modelo:'sdad',precio: 500, ganancias:2000},
  ]



}
