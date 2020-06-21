import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  getCursos(){
    return [
      {id: 21062020_1, nome: 'Front-End Angular 8', valor: 'R$ 2823.45', tempo: '18 meses'},
      {id: 21062020_2, nome: 'Microsoft SqlServer', valor: 'R$ 1843.13', tempo: '10 meses'},
      {id: 21062020_3, nome: 'System Docker', valor: 'R$ 1483.78', tempo: '06 meses'},
      {id: 21062020_4, nome: 'Programm Java', valor: 'R$ 1953.89', tempo: '12 meses'},
      {id: 21062020_5, nome: 'Unit Gamer', valor: 'R$ 1755.43', tempo: '18 meses'},
      {id: 21062020_6, nome: 'Programm Python', valor: 'R$ 3143.89', tempo: '24 meses'},
      {id: 21062020_7, nome: 'UML Requester', valor: 'R$ 935.43', tempo: '4 meses'},
      {id: 21062020_8, nome: 'Node JS', valor: 'R$ 1843.18', tempo: '10 meses'},
      {id: 21062020_9, nome: 'JavaScript ES2015', valor: 'R$ 19180.30', tempo: '12 meses'}
    ];
  }

  getCurso(id: number){ 
    let cursos = this.getCursos();
    for (let i = 0; i < cursos.length; i ++ ){
      let curso = cursos[i];
      if (curso.id == id){
        return curso;
      }
    }
    return null;
  }

  constructor() { }
}
