import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FinProcesoComponent } from './components/fin-proceso/fin-proceso.component';
import { FormularioDosComponent } from './components/formulario-dos/formulario-dos.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { TablaSaldosComponent } from './components/tabla-saldos/tabla-saldos.component';


const routes: Routes = [
  {path: 'compra', component: FormularioComponent},
  {path:'validacion', component: FormularioDosComponent},
  {path: 'finalizacion', component: FinProcesoComponent},
  {path: 'saldos', component: TablaSaldosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
