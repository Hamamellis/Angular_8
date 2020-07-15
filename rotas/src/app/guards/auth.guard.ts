import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route} from '@angular/router';

import { AuthService } from './../login/auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }
  canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canLoad: Verificando se o Usuário pode carregar o Código do Módulo...');

    return this.verificarAcesso();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ) : Observable<boolean> | boolean {
    
    console.log('AuthGuard: Guarda de Rota filha...');

    return this.verificarAcesso();
  }

  private verificarAcesso(){
    if (this.authService.usuarioEstaAutenticado()){
      return true;
    } 
    this.router.navigate(['/login']);

    return false;
  }

  // CanLoad (route: Route): Observable<boolean>|Promise<boolean>|boolean{
  //   console.log('canLoad: Verificando se o Usuário pode carregar o Código do Módulo...');

  //   return this.verificarAcesso();
  // }

}