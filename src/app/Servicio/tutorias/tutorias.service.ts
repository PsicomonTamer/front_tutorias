import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/config';
import { Asignatura } from 'src/app/Model/tutorias/asignatura';
import { Curso } from 'src/app/Model/tutorias/curso';
import { Modalidad } from 'src/app/Model/tutorias/modalidad';
import { Paralelo } from 'src/app/Model/tutorias/paralelo';
import { Periodo } from 'src/app/Model/tutorias/periodo';

@Injectable({
  providedIn: 'root'
})
export class TutoriasService {

  constructor(private http:HttpClient) {}
  private url=Api.url


  getPeriodos(){
    return this.http.get<Periodo[]>(this.url+"registro/Periodo")
  }

  getModalidades(periodo:Periodo){
    return this.http.get<Modalidad[]>(this.url+""+periodo.id_periodo)
  }

  getCursos(){
    return this.http.get<Curso[]>(this.url+"")
  }

  getParalelos(){
    return this.http.get<Paralelo[]>(this.url+"")
  }

  getAsignaturas(){
    return this.http.get<Asignatura[]>(this.url+"")
  }
  
  muestramensaje(mensaje:string){
    alert(mensaje);

  }
}
