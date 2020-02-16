import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './materialdatatable/app.main.component';
import { CustomerDetailsComponent } from './materialdatatable/app.customerdetails.component';


const routes: Routes = [
  {path:'', component: MainComponent},
  {path:'customer/:id', component: CustomerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
