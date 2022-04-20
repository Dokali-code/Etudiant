import { Injectable } from '@angular/core';
import { Etudiant } from '../model/etudiant.model';

@Injectable({providedIn: 'root'})
export class EtudiantService {
  
  
    etudiants=[
      new Etudiant('Salah'),
      new Etudiant('Ahmed'),
      new Etudiant('Abdallah'),
      new Etudiant('Youssef'),
    ]
    
  constructor() { }
  addEtudiant (e:Etudiant){
    this.etudiants.push(e);
  }
}
