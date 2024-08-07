class Reservacion{
    constructor (fechaInicio,numPersonas,fechaFin){
        this._fechaInicio = fechaInicio;
        this._fechaFin = fechaFin;
        this._numPersonas = numPersonas;
    }
    get fechaFin(){
        return this._fechaFin.toString();
    }
    set fechaFin(fechaFin){
        this._fechaFin=fechaFin;
    }
    get fechaInicio(){
        return this._fechaInicio.toString();
    }
    set fechaInicio(fechaInicio){
        this._fechaInicio=fechaInicio;
    }
    get numPersonas(){
        return this._numPersonas;
    }
    set numPersonas(numPersonas){
        this._numPersonas=numPersonas;
    }

}