import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Deudas } from 'src/app/Model/tutorias/deudas';
import { TutoriasService } from 'src/app/Servicio/tutorias/tutorias.service';

//import { ServiceTutoriasService } from 'src/app/Servicio/tutorias/servicio-tutorias.service';

@Component({
  selector: 'app-deudasConsulta',
  templateUrl: './deudasConsulta.component.html',
  styleUrls: ['./deudasConsulta.component.scss']
})
export class DeudasConsultaComponent implements OnInit {

  constructor(private servitutorias: TutoriasService, private router: Router,) { }

  ngOnInit() {

  }

  ingresadoBuscar: string = '';
  cedula: String = '';
  nombre: string = '';
  cantidad: string = '';
  estado: string = '';

  deudas!: Deudas;


  llenarCuadro() {
    if (this.ingresadoBuscar.length < 10 || this.ingresadoBuscar.length > 10) {
      alert("INGRESE UN NUMERO DE CEDULA VALIDO");
    } else {
      this.servitutorias.getDeudas(this.ingresadoBuscar).subscribe(dataDeudas => {
        if (dataDeudas == null) {
          alert("Numero de Cedula no Registrado");
        } else {
          this.deudas = dataDeudas;
          this.cedula = this.ingresadoBuscar;
          this.nombre = dataDeudas.empleado.id_persona.nombre.toString() + " " + dataDeudas.empleado.id_persona.apellido.toString();
          this.cantidad = '$' + dataDeudas.valor_total.toString();
          if (dataDeudas.valor_total == 0) {
            this.estado = 'Sin Deuda';
          } else {
            this.estado = 'Debiendo';
          }
          console.log(this.deudas);
        }
      });
    }
  }

  vaciarCuadro() {
    this.ingresadoBuscar = '';
    this.cedula = "";
    this.nombre = "";
    this.cantidad = "";
    this.estado = "";
  }

  regresarHome() {
    this.router.navigate(["home"]);
  }

}
