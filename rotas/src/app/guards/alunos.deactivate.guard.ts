import { Injectable } from "@angular/core";
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AlunoFormComponent } from '../alunos/aluno-form/aluno-form.component';
import { Observable } from 'rxjs';

//import { IFormCanDeactivate } from './iform-candeactivate';

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<AlunoFormComponent> {
    
  canDeactivate(
    component: AlunoFormComponent,
    currentRoute: ActivatedRouteSnapshot, // - Cópia da Rota ativada...
    currentState: RouterStateSnapshot, // - estado da Rota Ativada...
    nextState: RouterStateSnapshot 
  ): Observable<boolean>|Promise<boolean>|boolean {

    console.log('Guarda de desativação...');

    return true;
  }
}