import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutoriasService {

  constructor() {}
  
  muestramensaje(mensaje:string){
    alert(mensaje);

  }
}
