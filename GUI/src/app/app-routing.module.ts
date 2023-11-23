import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultProductsComponent } from './views/Admin/default-products/default-products.component';
import { MainAdminComponent } from './views/Admin/main-admin/main-admin.component';

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
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
