
import  { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router';
//import { ModuleWithProviders } from '@angular/core';

import { CursosComponent } from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoNaoEncontradoComponent } from './curso-nao-encontrado/curso-nao-encontrado.component';
import { AuthGuard } from '../guards/auth.guard';
import { CursosGuard } from '../guards/cursos.guard';

const cursosRoutes: Routes = [
    { path: 'cursos', component: CursosComponent,
        canActivate: [AuthGuard],   
        canActivateChild: [CursosGuard],
        canLoad: [AuthGuard]
    },
    { path: 'curso/:id', component: CursoDetalheComponent,
        canActivate: [AuthGuard],
    },                        
    { path: 'naoEncontrado', component: CursoNaoEncontradoComponent,
        canActivate: [AuthGuard],
    }
];

@NgModule({
    imports: [RouterModule.forChild(cursosRoutes)],
    exports: [RouterModule]
})
export class CursosRoutingModule {}