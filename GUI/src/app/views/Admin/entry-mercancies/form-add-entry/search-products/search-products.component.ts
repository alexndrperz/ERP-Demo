import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { ApiConnectService } from 'src/app/services/API/api-connect.service';

@Component({
  selector: 'search-products',
  templateUrl: './search-products.component.html',
  styleUrls: ['./search-products.component.css']
})
export class SearchProductsComponent {
  control = new FormControl();
  productos: any[] = [
  ];

  isInputInvalid:boolean = false
  
  filterProv: Observable<any[]> = new Observable()
  optionSelected:boolean = false;
  searchData:string = ''
  @Input()  isOutPut=false
  @Output() routeImg = new EventEmitter();
  @Output() clearSearcher = new EventEmitter()
  
  constructor(private _apiConnect:ApiConnectService) {

  }

  ngOnInit() {
    this.getProducts()
    this.filterProv = this.control.valueChanges.pipe(
      startWith(''),
      map((value:string) => this._filter(value))
    );
    
  }
  

  private _filter(value: string): any[] {
    
    const filterValue = this._normalizeValue(value);
    
    if(filterValue == '') {
      return []
    }
    const filteredResults:any[] =  this.productos.filter(producto => this._normalizeValue(producto.name).includes(filterValue));
    console.log(filteredResults);
    
    return filteredResults
    
  }

  getProducts() {
    this._apiConnect.get('/products')
    .subscribe({
      next:(response:any) => {
        if(this.isOutPut == false) {
          this.productos = response
        }
        else {
          this.productos = response.filter((product:any) => product.quantity_availables > 0)
        }
        
      },
      error:(error:any) => {
        console.log(error);
        
      } 
    })
  }

  clearSearch() {
    this.optionSelected = false
    this.searchData = ''
    console.log(this.searchData);
    
    this.clearSearcher.emit()
    
  }

  getProductImage(imgPath:string) {
    return `${this._apiConnect.host}/products/images${imgPath}`
  }

  selectOption(item:any) {
      console.log(item);
      this.searchData = item.name
      this.optionSelected = true;
      console.log(this.optionSelected);
      this.routeImg.emit(item)
      
      
  }

  private _normalizeValue(value: string): string {
    
    return value.toLowerCase().replace(/\s/g, '');
  }
}
