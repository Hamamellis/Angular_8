import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlunosComponent }  from './alunos.component';
import { CommonModule } from '@angular/common';

@NgModule({    
    imports: [ 
        BrowserModule,
        CommonModule
     ],
    exports: [],
    declarations: [ AlunosComponent ],
    providers: []
})
export class AlunosModule {}