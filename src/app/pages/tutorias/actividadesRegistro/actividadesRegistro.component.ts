import { Component, OnInit } from '@angular/core';
import { empty } from 'rxjs';
import { Periodo, Modalidad, Curso, Paralelo, Asignatura, Estudiante,Registro } from 'src/app/Model/tutorias/registro';
import { TutoriasService } from 'src/app/Servicio/tutorias/tutorias.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-actividades-registro',
  templateUrl: './actividadesRegistro.component.html',
  styleUrls: ['./actividadesRegistro.component.scss'], providers: [MessageService]
})
export class ActividadesRegistroComponent implements OnInit {

  constructor(private servitutorias: TutoriasService) {

  }
  submitted!: boolean;

  statuses!: any[];
  
  Dialog!: boolean;

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

  registro!: Registro[];
  selectRegistro!: Registro;

  ngOnInit(): void {
    this.servitutorias.getPeriodos().subscribe(dataPeriodos => {
      this.periodo = dataPeriodos;
    });
  }
  
  llenarestudiantes() {
    this.servitutorias.getEstudiantes(this.selectAsignatura, this.selectPeriodo, this.selectCurso, this.selectParalelo, this.selectModalidad).subscribe(dataEstudiante => {
      this.registro = dataEstudiante;
      
      console.log(dataEstudiante);
    });
    alert("entro al boton");
  }

  llenarregistros() {
    this.servitutorias.getRegistros().subscribe(dataRegistro => {
      this.registro = dataRegistro;
      console.log(dataRegistro);
    });

  }


  llenarmodalidades() {
    this.selectModalidad = new Modalidad; this.selectCurso = new Curso; this.selectParalelo = new Paralelo; this.selectAsignatura = new Asignatura;
    this.curso = []; this.paralelo = []; this.asignatura = [];
    this.servitutorias.getModalidades(this.selectPeriodo).subscribe(dataModalidades => {
      this.modalidad = dataModalidades; 
    });
  }

  llenarcursos() {
    this.selectCurso = new Curso; this.selectParalelo = new Paralelo; this.selectAsignatura = new Asignatura;
    this.paralelo = []; this.asignatura = [];
    this.servitutorias.getCursos(this.selectModalidad, this.selectPeriodo).subscribe(dataCursos => {
      this.curso = dataCursos;
    });
  }

  llenarparalelos() {
    this.selectParalelo = new Paralelo; this.selectAsignatura = new Asignatura;
    this.asignatura = [];
    this.servitutorias.getParalelos(this.selectCurso, this.selectModalidad, this.selectPeriodo).subscribe(dataParalelos => {
      this.paralelo = dataParalelos;
    });
  }

  llenarasignaturas() {
    this.selectAsignatura = new Asignatura;
    this.servitutorias.getAsignaturas(this.selectParalelo, this.selectCurso, this.selectModalidad, this.selectPeriodo).subscribe(dataAsignatura => {
      this.asignatura = dataAsignatura;
    });
  }

  limpiarFormulario() {
    this.selectPeriodo = new Periodo; this.selectModalidad = new Modalidad; this.selectCurso = new Curso;
    this.selectParalelo = new Paralelo; this.selectAsignatura = new Asignatura;
    this.modalidad = []; this.curso = []; this.paralelo = []; this.asignatura = [];
  }
  
  edit(registro: Registro) {
    this.registro = [registro];
    this.Dialog = true;

  }
  save() {
   
}
hideDialog() {
  this.Dialog = false;
  this.submitted = false;
}
}
