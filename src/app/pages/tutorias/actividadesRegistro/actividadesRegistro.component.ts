import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Periodo, Modalidad, Curso, Paralelo, Asignatura,Estudiante } from 'src/app/Model/tutorias/periodo';
import { TutoriasService } from 'src/app/Servicio/tutorias/tutorias.service';

@Component({
  selector: 'app-actividades-registro',
  templateUrl: './actividadesRegistro.component.html',
  styleUrls: ['./actividadesRegistro.component.scss']
})
export class ActividadesRegistroComponent implements OnInit {

  constructor(private servitutorias: TutoriasService) {

  }

  periodo!: Periodo[];
  selectPeriodo!: Periodo;

  modalidad!: Modalidad[];
  selectModalidad!: Modalidad;

  curso!: Curso[];
  selectCurso!: Curso;

  paralelo!: Paralelo[];
  selectParalelo!: Paralelo;

  asignatura!: Asignatura[];
  selectAsignatura!: Asignatura;

  estudiante!: Estudiante[];
  selectEstudiante!: Estudiante;

  ngOnInit(): void {
    this.servitutorias.getPeriodos().subscribe(dataPeriodos => {
      this.periodo = dataPeriodos;
      console.log(dataPeriodos);
    });
  }
  llenarestudiantes(){
    this.selectEstudiante=new Estudiante; this.estudiante=[];
  this.servitutorias.getEstudiantes(this.selectEstudiante).subscribe(dataEstudiante=>{
    this.estudiante=dataEstudiante;});
  }
  

  llenarmodalidades() {
    this.selectModalidad=new Modalidad; this.selectCurso=new Curso; this.selectParalelo=new Paralelo; this.selectAsignatura=new Asignatura;
    this.curso=[];  this.paralelo=[]; this.asignatura=[];
    this.servitutorias.getModalidades(this.selectPeriodo).subscribe(dataModalidades => {
      this.modalidad = dataModalidades;
    });
  }

  llenarcursos(){
    this.selectCurso=new Curso; this.selectParalelo=new Paralelo; this.selectAsignatura=new Asignatura;
    this.paralelo=[]; this.asignatura=[];
    this.servitutorias.getCursos(this.selectModalidad,this.selectPeriodo).subscribe(dataCursos => {
      this.curso = dataCursos;
    });
  }

  llenarparalelos(){
    this.selectParalelo=new Paralelo; this.selectAsignatura=new Asignatura;
    this.asignatura=[];
    this.servitutorias.getParalelos(this.selectCurso, this.selectModalidad, this.selectPeriodo).subscribe(dataParalelos => {
      this.paralelo = dataParalelos;
    });
  }

  llenarasignaturas(){
    this.selectAsignatura=new Asignatura;
    this.servitutorias.getAsignaturas(this.selectParalelo,this.selectCurso,this.selectModalidad,this.selectPeriodo).subscribe(dataAsignatura => {
      this.asignatura = dataAsignatura;
    }); 
  }

  limpiarFormulario() {
    this.selectPeriodo=new Periodo; this.selectModalidad=new Modalidad; this.selectCurso=new Curso;
    this.selectParalelo=new Paralelo; this.selectAsignatura=new Asignatura;
    this.modalidad=[];  this.curso=[];  this.paralelo=[]; this.asignatura=[];
  }

  listarDatos() {
    alert("BOTON LISTAR");
  }

}
