import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngif',
  templateUrl: './diretiva-ngif.component.html',
  styleUrls: ['./diretiva-ngif.component.css']
})
export class DiretivaNgifComponent implements OnInit {

  cursos: string [] = ["Angular 8","Java 9", "PhoneGap", "Oracle", "SqlServer", "MongoDB", "Python"];

  mostrarCursos: boolean = false;

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.cursos.length; i ++){
      let curso = this.cursos[i];
    }
  }

  onMostrarCursos(){
    this.mostrarCursos = !this.mostrarCursos;
    console.log(this.mostrarCursos);
  }

}
