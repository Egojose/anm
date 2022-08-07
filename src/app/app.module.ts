import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table'
import { MatCardModule } from '@angular/material/card';
import { TablaCompraComponent } from './components/tabla-compra/tabla-compra.component';
import { FormularioDosComponent } from './components/formulario-dos/formulario-dos.component';
import { AlertModule } from 'ngx-bootstrap/alert';
import { FinProcesoComponent } from './components/fin-proceso/fin-proceso.component'





@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    TablaCompraComponent,
    FormularioDosComponent,
    FinProcesoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatCardModule,
    AlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
