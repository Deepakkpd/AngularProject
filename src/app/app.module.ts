import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; //added for [(ngModel)] to work

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PDMtoBOMComponent } from './pdmto-bom/pdmto-bom.component';
import { BOMtoPDMComponent } from './bomto-pdm/bomto-pdm.component';
import { TreeModule } from 'angular-tree-component';
import { BasicTreeComponent } from './basictree/basictree.component';

@NgModule({
  declarations: [
    AppComponent,
    PDMtoBOMComponent,
    BOMtoPDMComponent,
    BasicTreeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, //added for [(ngModel)] to work
    TreeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
