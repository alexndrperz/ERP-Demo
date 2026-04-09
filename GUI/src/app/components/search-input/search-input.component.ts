import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { ApiConnectService } from 'src/app/services/API/api-connect.service';

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
  ];
  filterProv: Observable<any[]> = new Observable()
  optionSelected:boolean = false;
  searchData:string = ''
  @Output() provider_selected:EventEmitter<number>= new EventEmitter()

  
  constructor(private _apiConnect:ApiConnectService) {

  }

  ngOnInit() {
    this.getProviders()
    this.filterProv = this.control.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }
  

  private _filter(value: string): any[] {
    const filterValue = this._normalizeValue(value);
    console.log();
    
    if(filterValue == '') {
      return []
    }
    const filteredResults:any[] =  this.provedores.filter(street => this._normalizeValue(street.name).includes(filterValue));
    return filteredResults
    
  }

  getProviders() {
    this._apiConnect.get('/providers')
    .pipe(
      map((response:any) => {
          return response.map((provider:any) => {
            const firstDigitsRNC = provider.rnc.substring(0,4);
            provider.name = `${firstDigitsRNC} - ${provider.name}`
            return provider;

          })
      })
    )
    .subscribe({
      next:(response:any) => {
        console.log(response);
        this.provedores = response
        
      },
      error:(error:any) => {
        console.log(error);
        
      } 
    })
  }

  clearSearch() {
    this.optionSelected = false
    
  }

  selectOption(item:any) {
      console.log(item);
      this.searchData = item.name
      this.optionSelected = true;
      this.provider_selected.emit(item.id)
      
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
}


