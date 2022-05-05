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
    return this.http.get<Periodo[]>(this.url+"registro/ListarPeriodo")
  }

  getModalidades(){
    return this.http.get<Modalidad[]>(this.url+"registro/ListarModalidad")
  }

  getCursos(){
    return this.http.get<Curso[]>(this.url+"registro/ListarCursos")
  }

  getParalelos(){
    return this.http.get<Paralelo[]>(this.url+"registro/ListarParalelos")
  }

  getAsignaturas(){
    return this.http.get<Asignatura[]>(this.url+"registro/ListarAsignaturas")
  }
  
  muestramensaje(mensaje:string){
    alert(mensaje);

  }
}
