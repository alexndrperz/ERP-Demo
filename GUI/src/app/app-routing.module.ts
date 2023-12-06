import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultProductsComponent } from './views/Admin/default-products/default-products.component';
import { MainAdminComponent } from './views/Admin/main-admin/main-admin.component';
import { EntryMercanciesComponent } from './views/Admin/entry-mercancies/entry-mercancies.component';
import { FormAddEntryComponent } from './views/Admin/entry-mercancies/form-add-entry/form-add-entry.component';
import { DetailsEntryComponent } from './views/Admin/entry-mercancies/details-entry/details-entry.component';
import { ProvidersComponent } from './views/Admin/providers/providers.component';
import { DetailProductComponent } from './views/Admin/detail-product/detail-product.component';
import { OutputMercanciesComponent } from './views/Admin/output-mercancies/output-mercancies.component';
import { FormAddOutputComponent } from './views/Admin/output-mercancies/form-add-output/form-add-output.component';
import { DetailsOutputComponent } from './views/Admin/output-mercancies/details-output/details-output.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'admin',
    pathMatch:'full'
  },


  {
    path:'admin', 
    component:MainAdminComponent,
    children: [
      {
        path:'',
        redirectTo:'productos-default',
        pathMatch:'full'
      },
      {
        path:'productos-default',
        children: [
          {path:'', component:DefaultProductsComponent},
          {path:':product_id/details', component:DetailProductComponent}
        ]
      },
      {
        path:'providers',
        component:ProvidersComponent,
      },
      {
        path:'output-mercancies',
        children: [
          {path:'', component:OutputMercanciesComponent},
          {path:'invoice/:invoice_id', component:DetailsOutputComponent},
          {path:'form-add-out', component:FormAddOutputComponent}
        ]
      },
      {
        path:'entry-mercancies',
        children: [
          {path:'', component:EntryMercanciesComponent},
          {path:'invoice/:invoice_id', component:DetailsEntryComponent},
          {path:'form-add-entry', component:FormAddEntryComponent}
        ]
      },
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
