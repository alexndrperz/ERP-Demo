import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultProductsComponent } from './views/Admin/default-products/default-products.component';
import { MainAdminComponent } from './views/Admin/main-admin/main-admin.component';
import { EntryMercanciesComponent } from './views/Admin/entry-mercancies/entry-mercancies.component';
import { FormAddEntryComponent } from './views/Admin/entry-mercancies/form-add-entry/form-add-entry.component';
import { DetailsEntryComponent } from './views/Admin/entry-mercancies/details-entry/details-entry.component';

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
        component:DefaultProductsComponent,
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
