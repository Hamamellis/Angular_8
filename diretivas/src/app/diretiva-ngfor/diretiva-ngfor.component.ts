import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretiva-ngfor',
  templateUrl: './diretiva-ngfor.component.html',
  styleUrls: ['./diretiva-ngfor.component.css']
})
export class DiretivaNgforComponent implements OnInit {

  cursos: string [] = ["Angular 8","Java 9", "PhoneGap", "Oracle", "SqlServer", "MongoDB", "Python"];

  outrosCursos: string[] = ["Excel Avançado", "WordPress", "Planilhas Dinâmicas", "Gráficos"];

  outrosCursos2: string[] = ["GitHub", "Protector", "Unit for Games", "Zender", "BashCode"];

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < this.cursos.length; i ++){
      let curso = this.cursos[i];
    }

    for (let t = 0; t < this.outrosCursos.length; t ++) {
      let curso1 = this.outrosCursos[t];      
    }

    for (let z = 0; z < this.outrosCursos2.length; z ++) {
      let curso2 = this.outrosCursos2[z];      
    }
  }

  

}
