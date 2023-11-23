import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardMenuComponent } from './components/dashboard-menu/dashboard-menu.component';
import { DefaultProductsComponent } from './views/Admin/default-products/default-products.component';
import { MainAdminComponent } from './views/Admin/main-admin/main-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardMenuComponent,
    DefaultProductsComponent,
    MainAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
