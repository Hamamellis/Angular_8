import { Component, OnInit } from '@angular/core';

import { CursosService } from './cursos.service';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [CursosService]
})
export class CursosComponent implements OnInit {

  cursos: string [] = [];

  constructor(private cursosService: CursosService) { }  

  ngOnInit(): void {    
    this.cursos = this.cursosService.getCursos();

    for (let i = 0; i < this.cursos.length; i ++) {
      let curso = this.cursos[i];      
    }

    CursosService.criouNovoCurso.subscribe(
      //curso => console.log(curso)
      curso => this.cursos.push(curso)
      // function(curso){
      //   console.log(curso);
      // }
    );    
  }  

}
