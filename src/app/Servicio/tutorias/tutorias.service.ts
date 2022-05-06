import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/config';
import { Periodo, Modalidad, Curso, Paralelo, Asignatura } from 'src/app/Model/tutorias/periodo';

@Injectable({
  providedIn: 'root'
})
export class TutoriasService {

  constructor(private http:HttpClient) {}
  private url=Api.url

  getPeriodos(){
    return this.http.get<Periodo[]>(this.url+"registro/ListarPeriodo")
  }

  getModalidades(periodo:Periodo){
    alert("El id del periodo es: "+periodo.id_periodo);
    return this.http.get<Modalidad[]>(this.url+"registro/ListarModalidad")
  }

  getCursos(modalidad:Modalidad){
    alert("El id de la modalidad es: "+modalidad.id_modalidad);
    return this.http.get<Curso[]>(this.url+"registro/ListarCursos")
  }

  getParalelos(curso:Curso){
    alert("El id del curso es: "+curso.id_curso);
    return this.http.get<Paralelo[]>(this.url+"registro/ListarParalelos")
  }

  getAsignaturas(paralelo:Paralelo){
    alert("El id del paralelo es: "+paralelo.id_paralelo);
    return this.http.get<Asignatura[]>(this.url+"registro/ListarAsignaturas")
  }
  
}
