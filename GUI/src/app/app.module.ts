import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardMenuComponent } from './components/dashboard-menu/dashboard-menu.component';
import { DefaultProductsComponent } from './views/Admin/default-products/default-products.component';
import { MainAdminComponent } from './views/Admin/main-admin/main-admin.component';
import { NormalModalComponent } from './components/normal-modal/normal-modal.component';
import { ImgInputComponent } from './components/img-input/img-input.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { EntryMercanciesComponent } from './views/Admin/entry-mercancies/entry-mercancies.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FormAddEntryComponent } from './views/Admin/entry-mercancies/form-add-entry/form-add-entry.component';
import { DetailsEntryComponent } from './views/Admin/entry-mercancies/details-entry/details-entry.component';
import { SearchProductsComponent } from './views/Admin/entry-mercancies/form-add-entry/search-products/search-products.component';
import { ProvidersComponent } from './views/Admin/providers/providers.component';
import { DetailProductComponent } from './views/Admin/detail-product/detail-product.component';
import { OutputMercanciesComponent } from './views/Admin/output-mercancies/output-mercancies.component';
import { FormAddOutputComponent } from './views/Admin/output-mercancies/form-add-output/form-add-output.component';
import { DetailsOutputComponent } from './views/Admin/output-mercancies/details-output/details-output.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardMenuComponent,
    DefaultProductsComponent,
    MainAdminComponent,
    NormalModalComponent,
    ImgInputComponent,
    SearchInputComponent,
    SearchProductsComponent,
    PaginatorComponent,
    EntryMercanciesComponent,
    FormAddEntryComponent,
    DetailsEntryComponent,
    ProvidersComponent,
    DetailProductComponent,
    OutputMercanciesComponent,
    FormAddOutputComponent,
    DetailsOutputComponent,
    
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    BrowserModule,
    MatPaginatorModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
