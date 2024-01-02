import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { FilterComponent } from './filter/filter.component';
import {FilterTableComponent} from './filter-table/filter-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'filter-table', component: FilterTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
