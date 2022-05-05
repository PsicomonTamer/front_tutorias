import { Component, OnInit } from '@angular/core';
import { Asignatura } from 'src/app/Model/tutorias/asignatura';
import { Curso } from 'src/app/Model/tutorias/curso';
import { Modalidad } from 'src/app/Model/tutorias/modalidad';
import { Paralelo } from 'src/app/Model/tutorias/paralelo';
import { Periodo } from 'src/app/Model/tutorias/periodo';
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

  ngOnInit(): void {
    this.servitutorias.getPeriodos().subscribe(dataPeriodos => {
      this.periodo = dataPeriodos;
      console.log(dataPeriodos);
    });

    this.servitutorias.getModalidades().subscribe(dataModalidades => {
      this.modalidad = dataModalidades;
      console.log(this.modalidad);
    });

    this.servitutorias.getCursos().subscribe(dataCursos => {
      this.curso = dataCursos;
      console.log(this.curso);
    });

    this.servitutorias.getParalelos().subscribe(dataParalelos => {
      this.paralelo = dataParalelos;
    });

    this.servitutorias.getAsignaturas().subscribe(dataAsignatura => {
      this.asignatura = dataAsignatura;
    });


  }

  llenarmodalidades() {
    this.servitutorias.muestramensaje("El id es "+this.selectPeriodo.id_periodo);
  }
  

  llenarcursos(){

  }

  llenarparalelos(){

  }

  llenarasignaturas(){

  }

  limpiarFormulario() {
    this.modalidad=[];
    this.curso=[];
    this.paralelo=[];
    this.asignatura=[];
  }

  listarDatos() {
    this.servitutorias.muestramensaje("BOTON LISTAR");
  }

}
