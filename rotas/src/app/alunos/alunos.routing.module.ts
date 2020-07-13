import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AlunosComponent } from './alunos.component';
import { AlunoDetalheComponent } from './aluno-detalhe/aluno-detalhe.component';
import { AlunoFormComponent } from './aluno-form/aluno-form.component';
import { AuthGuard } from '../guards/auth.guard';
import { AlunosGuard } from '../guards/alunos.guard';
import { AlunosDeactivateGuard } from '../guards/alunos.deactivate.guard';
import { AlunoDetalheResolver } from './guards/aluno-detalhe.resolver';

const alunosRoutes = [
    {path: 'alunos', component: AlunosComponent, 
        canActivate: [AuthGuard],
        canActivateChild: [AlunosGuard],    
            children :[
                {path: 'novo', component: AlunoFormComponent},
                {path: ':id', component: AlunoDetalheComponent,
                    resolve: { aluno : AlunoDetalheResolver }
                },
                {path: ':id', component: AlunoFormComponent,            
                    children : [
                        {path: ':editar', component: AlunoFormComponent,
                            canDeactivate: [AlunosDeactivateGuard],
                        }
                ]
            }
        ]
    }   
];

@NgModule({
    imports: [RouterModule.forChild(alunosRoutes)],
    exports: [RouterModule]
})
export class AlunosRoutingModule {}