import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { ShipComponent } from './ship/ship.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'table', component: ShipComponent},
  {path: 'new', component: FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
