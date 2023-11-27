import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardMenuComponent } from './components/dashboard-menu/dashboard-menu.component';
import { DefaultProductsComponent } from './views/Admin/default-products/default-products.component';
import { MainAdminComponent } from './views/Admin/main-admin/main-admin.component';
import { NormalModalComponent } from './components/normal-modal/normal-modal.component';
import { ImgInputComponent } from './components/img-input/img-input.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardMenuComponent,
    DefaultProductsComponent,
    MainAdminComponent,
    NormalModalComponent,
    ImgInputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
