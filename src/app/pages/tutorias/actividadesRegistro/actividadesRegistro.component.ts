import { Component, OnInit } from '@angular/core';
import { TutoriasService } from 'src/app/Servicio/tutorias/tutorias.service';

@Component({
  selector: 'app-actividades-registro',
  templateUrl: './actividadesRegistro.component.html',
  styleUrls: ['./actividadesRegistro.component.scss']
})
export class ActividadesRegistroComponent implements OnInit {

  periodos = ['TSD Septiembre - Junio - 2021/2022','TSD Septiembre - Junio - 2020/2021'];
  periodoSelec:string="";

  cursos:string[] = [];
  cursoSelec:string="";

  modalidades:string[] = []
  modalidadSelec:string="";

  paralelos:string[]=[];
  paraleloSelec:string="";

  asignaturas:string[]=[];
  asignaturasSelec:string="";


  constructor(private servitutorias:TutoriasService ) { 

  }

  
  ngOnInit(): void {
    
  }
  

  limpiarFormulario(){
    this.periodoSelec="";
    this.cursoSelec="";
    this.cursos=[];
    this.modalidadSelec="";
    this.modalidades=[];
    this.paraleloSelec=""
    this.paralelos=[];
    this.asignaturasSelec="";
    this.asignaturas=[];
  }

  listarDatos(){
    this.servitutorias.muestramensaje("BOTON LISTAR");
  }

  llenarperiodos(){

  }

  llenarasignaturas(){
    if(this.paraleloSelec==""){
    }else{
      this.asignaturas = ['PROGRAMACION WEB','INGLES', 'MATEMATICA'];
    }

  }

  llenarcursos(){
    if(this.modalidadSelec==""){
    }else{
      this.cursos = ['Básica Superior Intensiva','Bachillerato Superior Intensiva'];
    }
  }

  llenarmodalidades(){
    if(this.periodoSelec==""){
    }else{
      this.modalidades = ['Semi Presencial Intensiva','Semi Presencial No Intensiva'];
    }
  }

  llenarparalelos(){
    if(this.cursoSelec==""){
    }else{
      this.paralelos = ['2A','3A'];
    }
  }

}
