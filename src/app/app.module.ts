import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FilterComponent } from './filter/filter.component';
import { FilterTableComponent } from './filter-table/filter-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FilterComponent,
    FilterTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
