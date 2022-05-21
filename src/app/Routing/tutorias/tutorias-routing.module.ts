import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActividadesRegistroComponent } from 'src/app/pages/tutorias/actividadesRegistro/actividadesRegistro.component';
import { DeudasConsultaComponent } from 'src/app/pages/tutorias/deudasConsulta/deudasConsulta.component';


const routes: Routes = [
  
    {path:'tutorias/registroActividades',component:ActividadesRegistroComponent},
    {path:'tutorias/consultaDeudas',component:DeudasConsultaComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TutoriasRoutingModule { }
