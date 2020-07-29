import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {
    nome: null,
    email: null,
    senha: null
  }

  onSubmit(form){ 

    console.log(form);

    //console.log(this.usuario);
  }

  constructor() { }

  ngOnInit(): void {   
  }

  verificaValidTouched(campo){
    return !campo.valid && campo.touched;
  }

  aplicaCssErro(campo){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  // consultaCEP(cep){
  //   console.log(cep); // Para vermos se está ok, executamos um Console.log(cep)

  //   //Nova variável "cep" somente com dígitos. // Abaixo como já temos o cep... vamos usá-lo ao invéz
  //   //var cep = $(this).val().replace(/\D/g, '');
  //   cep = cep.replace(/\D/g, '');

  //   //Vamos agora, Verifica se campo cep possui valor informado.
  //   if (cep != "") {
  //       //Expressão regular para validar o CEP. Que deve ter 8 dígitos...
  //       var validacep = /^[0-9]{8}$/;

  //       //Se a função ValidaCep estiver "OK".
  //       if(validacep.test(cep)) {

  //         //this.http.get(`//viacep.com.br/ws/ ${cep} /json`);
  //       }
  //   }
  // }

}
