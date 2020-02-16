import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatSortModule, MatProgressSpinnerModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataComponent } from './app.data.component';
import { MainComponent } from './materialdatatable/app.main.component';
import { ScrollContainerComponent } from './materialdatatable/app.scroll.component';
import { MaterialModule } from './material.module';
import { HttpClientModule } from '@angular/common/http';

// imports: of the type array, used to import and load stabdard angular module and other
// exportebale in current angular application e.g.BrowserModule will be used to render app
// in browser

// declarations:  of the type array, used to define all components, directives and pipes
// of the current application for on-demand execution

// providers:  of the type array, used to provide DI Contianer for Angular Services so that
// they can be injected  (in Components/Directives, etc.) as on when needed

// boostrap: of the type array, used to bootstrap (activate and load) components from
// declaration in browser
@NgModule({
  declarations: [
    AppComponent, DataComponent, MainComponent, ScrollContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  BrowserAnimationsModule,
    MaterialModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class AppModule { }
