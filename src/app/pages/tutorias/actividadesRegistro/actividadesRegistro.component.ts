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
  modalidades: string[] = [];
  modalidadSelec: string = "";


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
  }

  llenarmodalidades() {
      this.modalidades = ['Semi Presencial Intensiva', 'Semi Presencial No Intensiva'];
      this.servitutorias.muestramensaje("El id es "+this.selectPeriodo.id_periodo);
  }
  

  llenarcursos(){

  }

  llenarparalelos(){

  }

  llenarasignaturas(){

  }

  limpiarFormulario() {
  }

  listarDatos() {
    this.servitutorias.muestramensaje("BOTON LISTAR");
  }

}
