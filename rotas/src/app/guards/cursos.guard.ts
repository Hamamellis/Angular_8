
import { CanActivateChild, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()
export class CursosGuard implements CanActivateChild {
        
        canActivateChild(
            route: ActivatedRouteSnapshot,
            state: RouterStateSnapshot
        ): Observable<boolean> | Promise<boolean> | boolean {

            console.log('Guarda de rotas filhas de Cursos...')
            console.log(route);
            console.log(state);

            return true;
        }    
    }