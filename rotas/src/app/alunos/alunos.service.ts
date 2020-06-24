import { Injectable } from '@angular/core';
import { getMaxListeners } from 'process';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: any [] = [
    {id: 111, nome: 'Wagner Barros de Jesus', email: 'wagnerhamamellis@gmail.com', celular: '(11) 99474-9142'},
    {id: 222, nome: 'Jane Candido de Jesus', email: 'janedyjane@gmail.com', celular: '(11) 99344-8270'},
    {id: 333, nome: 'Karolina Beatriz', email: 'karollyna@gmail.com', celular: '(11) 5555-7878'},
    {id: 444, nome: 'Kamilly Barros', email: 'kamillynha@gmail.com', celular: '(11) 7777-1313'},
    {id: 555, nome: 'Jhonny Quest', email: 'jhonnyquest@gmail.com', celular: '(11) 8888-4545'},
  ];

  getAlunos(){
    return this.alunos;
  }

  getAluno(id: number){
    for (let i = 0; i < this.alunos.length; i ++) {
      let aluno = this.alunos[i];
      if (aluno.id == id){
        return aluno;
      }
    }
    return null;
  }

  constructor() { }
}
