import { VIRTUAL_SCROLL_STRATEGY } from '@angular/cdk/scrolling';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Api } from 'src/app/config';
import { Periodo, Modalidad, Curso, Paralelo, Asignatura, Estudiante} from 'src/app/Model/tutorias/periodo';

@Injectable({
  providedIn: 'root'
})
export class TutoriasService {

  constructor(private http:HttpClient) {}
  private url=Api.url

  getPeriodos(){
    return this.http.get<Periodo[]>(this.url+"Registro/Periodos/1")
  }

  getModalidades(periodo:Periodo){
    return this.http.get<Modalidad[]>(this.url+"Registro/Modalidades/1/"+periodo.id_periodo)
  }

  getCursos(modalidad:Modalidad, periodo:Periodo){
    return this.http.get<Curso[]>(this.url+"Registro/Cursos/1/"+modalidad.id_modalidad+"/"+periodo.id_periodo)
  }

  getParalelos(curso:Curso,modalidad:Modalidad,periodo:Periodo){
    return this.http.get<Paralelo[]>(this.url+"Registro/Paralelos/1/"+curso.id_curso+"/"+modalidad.id_modalidad+"/"+periodo.id_periodo)
  }

  getAsignaturas(paralelo:Paralelo,curso:Curso,modalidad:Modalidad,periodo:Periodo){
    return this.http.get<Asignatura[]>(this.url+"Registro/Asignaturas/1/"+periodo.id_periodo+"/"+curso.id_curso+"/"+paralelo.id_paralelo+"/"+modalidad.id_modalidad)
  }
  getEstudiantes(asignatura:Asignatura, periodo:Periodo,curso:Curso,paralelo:Paralelo,modalidad:Modalidad){
    return this.http.get<Estudiante[]>(this.url+"Registro/Filtrocompleto/"+asignatura.id_asignatura+"/"+periodo.id_periodo+"/"+curso.id_curso+"/"+paralelo.id_paralelo+"/"+modalidad.id_modalidad)
  }
  
}
