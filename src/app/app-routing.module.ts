import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantListComponent } from './etudiant/etudiant-list/etudiant-list.component';
import { AproposComponent } from './etudiant/apropos/apropos.component';

const routes: Routes = [
   {path:'etudiants', component:EtudiantListComponent},
   
   {path:'apropos', component:AproposComponent}
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
