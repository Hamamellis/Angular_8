import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
//import 'rxjs/add/operator/map';

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

    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    res => res.json()
      .subscribe(dados => console.log(dados));

  }

  constructor(private http: HttpClient) { }

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

  consultaCEP(cep, form){
  console.log(cep); // Para vermos se está ok, executamos um Console.log(cep)

  //   //Nova variável cep somente com dígitos. // Abaixo como já temos o cep... vamos usá-lo ao invéz
  //   //var cep = $(this).val().replace(/\D/g, '');
      cep = cep.replace(/\D/g, '');

  //   //Vamos agora, Verifica se campo cep possui valor informado.
      if (cep != "") {
  //       //Expressão regular para validar o CEP. Que deve ter 8 dígitos...
      var validacep = /^[0-9]{8}$/;

  //       //Se a função ValidaCep estiver OK.
      if(validacep.test(cep)) {

        this.resetaDadosForm(form);

      this.http.get(`//viacep.com.br/ws/ ${cep} /json`)
      dados => dados.json()
      .subscribe(dados => this.populaDadosForm(dados, form));
      }
    }
  }
    populaDadosForm(dados, formulario){
      /*formulario.setValue({
        nome: formulario.value.nome,
        email: formulario.value.email,
        endereço: {
          rua: dados.logradouro,
          cep: dados.cep,
          numero: '',
          complemento: dados.complemento,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }
      }); */  

      formulario.form.patchValue({
        endereço: {
          rua: dados.logradouro,
          cep: dados.cep,
          complemento: dados.complemento,
          bairro: dados.bairro,
          cidade: dados.localidade,
          estado: dados.uf
        }
      });

      console.log(formulario);
    }

    resetaDadosForm(formulario){
      formulario.form.patchValue({
        endereço: {
          rua: null,
          cep: null,
          complemento: null,
          bairro: null,
          cidade: null,
          estado: null
        }
      });
    }

}
