import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

/**
 * @title Plain input autocomplete
 */
@Component({
  selector: 'search-input',
  templateUrl: 'search-input.component.html',
  styleUrls: ['search-input.component.css'],
})
export class SearchInputComponent implements OnInit {
  control = new FormControl();
  provedores: any[] = [
    {id:1, nombre:'Proveedor 1'},
    {id:1, nombre:'Proveedor 2'},
    {id:2, nombre:'w 21'},
    {id:3, nombre:'f 411'},
  ];
  filterProv: Observable<any[]> = new Observable()
  optionSelected:boolean = false;
  searchData:string = ''


  ngOnInit() {
    this.filterProv = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  

  private _filter(value: string): any[] {
    const filterValue = this._normalizeValue(value);
    
    if(filterValue == '') {
      return []
    }
    const filteredResults:any[] =  this.provedores.filter(street => this._normalizeValue(street.nombre).includes(filterValue));
    return filteredResults
    
  }
  clearSearch() {
    this.optionSelected = false
    
  }

  selectOption(item:any) {
      console.log(item);
      this.searchData = item.nombre
      this.optionSelected = true;
      this._filter('')
      
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}


