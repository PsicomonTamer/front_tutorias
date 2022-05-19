export class id_persona{
    apellido: String="";
    cedula: String="";
    nombre: String=""
}


export class empleado{
    cargo: String="";
    id_persona: id_persona=new id_persona
}

export class Deudas {
    estado: Boolean =true;
    empleado: empleado = new empleado;
    id: Number=0;
    valor_total: Number = 0;
}