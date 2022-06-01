import { Component, OnInit } from '@angular/core';
import { Periodo, Modalidad, Curso, Paralelo, Asignatura, Registro } from 'src/app/Model/tutorias/registro';
import { TutoriasService } from 'src/app/Servicio/tutorias/tutorias.service';
import { MessageService, SharedModule, ConfirmationService } from 'primeng/api';
@Component({
  selector: 'app-actividades-registro',
  templateUrl: './actividadesRegistro.component.html',
  styleUrls: ['./actividadesRegistro.component.scss'],
  providers: [MessageService, SharedModule, ConfirmationService]
})
export class ActividadesRegistroComponent implements OnInit {

  constructor(private servitutorias: TutoriasService, private messageService: MessageService, private confirmationService: ConfirmationService) {

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

  listarBoolean: boolean = true;
  limpiarBoolean: boolean = true;
  filtrosBoolean: boolean = false;

  ngOnInit(): void {
    this.llenarperiodos();
  }

  habilitarListar() {
    this.listarBoolean = false;
  }

  llenarperiodos() {
    this.servitutorias.getPeriodos().subscribe(dataPeriodos => {
      this.periodo = dataPeriodos;
    });
  }

  llenarmodalidades() {
    this.selectModalidad = new Modalidad;
    this.selectCurso = new Curso;
    this.selectParalelo = new Paralelo;
    this.selectAsignatura = new Asignatura;
    this.curso = [];
    this.paralelo = [];
    this.asignatura = [];
    this.listarBoolean = true;
    this.servitutorias.getModalidades(this.selectPeriodo).subscribe(dataModalidades => {
      this.modalidad = dataModalidades;
    });
  }

  llenarcursos() {
    this.selectCurso = new Curso;
    this.selectParalelo = new Paralelo;
    this.selectAsignatura = new Asignatura;
    this.paralelo = [];
    this.asignatura = [];
    this.listarBoolean = true;
    this.servitutorias.getCursos(this.selectModalidad, this.selectPeriodo).subscribe(dataCursos => {
      this.curso = dataCursos;
    });
  }

  llenarparalelos() {
    this.selectParalelo = new Paralelo;
    this.selectAsignatura = new Asignatura;
    this.asignatura = [];
    this.listarBoolean = true;
    this.servitutorias.getParalelos(this.selectCurso, this.selectModalidad, this.selectPeriodo).subscribe(dataParalelos => {
      this.paralelo = dataParalelos;
    });
  }

  llenarasignaturas() {
    this.selectAsignatura = new Asignatura;
    this.listarBoolean = true;
    this.servitutorias.getAsignaturas(this.selectParalelo, this.selectCurso, this.selectModalidad, this.selectPeriodo).subscribe(dataAsignatura => {
      this.asignatura = dataAsignatura;
    });
  }

  llenarregistros() {
    this.servitutorias.getRegistros().subscribe(dataRegistro => {
      for (let i = 0; i < dataRegistro.length; i++) {
        console.log(dataRegistro);
        if ((this.selectPeriodo.id_periodo == dataRegistro[i].id_matricula.id_periodo.id_periodo)
          && (this.selectModalidad.id_modalidad == dataRegistro[i].id_matricula.modalidad.id_modalidad)
          && (this.selectCurso.id_curso == dataRegistro[i].id_matricula.curso.id_curso)
          && (this.selectParalelo.id_paralelo == dataRegistro[i].id_matricula.id_paralelo.id_paralelo)
          && (this.selectAsignatura.id_asignatura == dataRegistro[i].id_asignatura.id_asignatura)) {
            console.log("Se encontro en la posicion" + i);
        }else{
          console.log("No se encontro en la posicion" + i);
          dataRegistro.splice(i, 1);
          i = -1;
        };
      }
      if (dataRegistro.length == 0) {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: 'NO HAY REGISTROS', life: 3000 });
      } else {
        this.registro = dataRegistro;
        this.listarBoolean = true;
        this.filtrosBoolean = true;
        this.limpiarBoolean = false;
      }
    });
  }

  limpiarFormulario() {
    this.filtrosBoolean = false;
    this.limpiarBoolean = true;
    this.selectPeriodo = new Periodo;
    this.selectModalidad = new Modalidad;
    this.selectCurso = new Curso;
    this.selectParalelo = new Paralelo;
    this.selectAsignatura = new Asignatura;
    this.listarBoolean = true;
    this.modalidad = [];
    this.curso = [];
    this.paralelo = [];
    this.asignatura = [];
    this.registro = [];
  }

  edit(selectRegistro: Registro) {
    this.selectRegistro = { ...selectRegistro };
    this.Dialog = true;
  }

  save() {
    this.submitted = true;
    if (this.selectRegistro.id_registro) {
      this.registro[this.findIndexById(this.selectRegistro.id_registro)] = this.selectRegistro;
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro Actualizado', life: 3000 });
    }
    else {
      this.selectRegistro.id_registro = this.createId();
      this.registro.push(this.selectRegistro);
      this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Registro Creado', life: 3000 });
    }
    this.registro = [...this.registro];
    this.Dialog = false;
    this.selectRegistro = { ...this.selectRegistro };
  }

  hideDialog() {
    this.Dialog = false;
    this.submitted = false;
  }

  findIndexById(id: Number) {
    let index = -1;
    for (let i = 0; i < this.registro.length; i++) {
      if (this.registro[i].id_registro === id) {
        index = i;
        break;
      }
    }
    return index;
  }

  createId(): Number {
    let id = 0;
    for (var i = 0; i < 5; i++) {
      id += (Math.floor(Math.random()));
    }
    return id;
  }
}
