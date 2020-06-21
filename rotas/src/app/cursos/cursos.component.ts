import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CursosService } from './cursos.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {  

  cursos: any [];
  pagina: number;
  inscricao: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private cursosService: CursosService,
    ) { }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();

    this.inscricao = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'];
      }
    );

    for (let i = 0; i < this.cursos.length; i ++){ 
      let curso = this.cursos[i];
    }
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

  proximaPagina(){
    //this.pagina ++;
    this.router.navigate(
      ['/cursos'], { queryParams: { 'pagina': ++ this.pagina } } );
  }
}
