import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  formulario: FormGroup; // Esta é a variável que vai representar o Formulário para os campos...  

  // Abaixo temos uma forma mais amigável d criar Formulários...
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {

    /*
    Abaixo tmos uma forma masi verbosa de criar formulário...
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null),
    });
    */
   this.formulario = this.formBuilder.group({
     nome: [null],
     email: [null],
    });
  }
}
