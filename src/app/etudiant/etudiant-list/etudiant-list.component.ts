import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/model/etudiant.model';
import { EtudiantService } from 'src/app/service/etudiant.service';

@Component({
  selector: 'app-etudiant-list',
  templateUrl: './etudiant-list.component.html',
  styleUrls: ['./etudiant-list.component.css']
})
export class EtudiantListComponent implements OnInit {
  // etudiants = [
  //   {prenom:'Ali'},
  //   {prenom:'Mohammed'},
  //   {prenom:'Sahar'},
  // ]

  etudiants : Etudiant[];

  constructor(private etudiantService: EtudiantService) { 
    this.etudiants = this.etudiantService.etudiants;
  }

  ngOnInit(): void {
  }

}
