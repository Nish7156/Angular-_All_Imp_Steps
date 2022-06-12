import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

const routes: Routes = [
  { path: '', redirectTo: 'parent', pathMatch: 'full' },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },


  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
  {
    path: 'orders',
    loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
