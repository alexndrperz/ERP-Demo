import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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

@NgModule({
  declarations: [
    AppComponent,
    DashboardMenuComponent,
    DefaultProductsComponent,
    MainAdminComponent,
    NormalModalComponent,
    ImgInputComponent,
    SearchInputComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
