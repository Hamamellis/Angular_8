import { Injectable, EventEmitter } from '@angular/core';

import { LogService } from '../shared/log.service';

@Injectable()
export class CursosService{

    emitirCursoCriado = new EventEmitter<string>();
    static criouNovoCurso = new EventEmitter<string>();

    private cursos: string []= ['JavaDocs','WordPress','Angular','Oracle','Docker','SqlServer','VBA Application'];
    
    constructor(private logService: LogService){
        console.log('CursosService');
    }
    
    getCursos(){
        this.logService.consoleLog('Obtendo a lista de cursos:');
        return this.cursos;
    }
     
    addCurso(curso: string){
        this.logService.consoleLog('Criando um novo Curso: ' + curso);
        this.logService.consoleLog(`Criando um novo Curso: ${ curso }`);
        this.cursos.push(curso);
        this.emitirCursoCriado.emit(curso);
        CursosService.criouNovoCurso.emit(curso);
    }
}