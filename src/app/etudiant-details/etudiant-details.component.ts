import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Etudiant } from '../model/etudiant.model';
import { EtudiantService } from '../service/etudiant.service';

@Component({
  selector: 'app-etudiant-details',
  templateUrl: './etudiant-details.component.html',
  styleUrls: ['./etudiant-details.component.css']
})
export class EtudiantDetailsComponent implements OnInit {
  etudiant: Etudiant | undefined;

  constructor(private route : ActivatedRoute, private etudiantService:EtudiantService) { }

  ngOnInit(): void {
    const RouteParam = this.route.snapshot.paramMap;
    console.log(RouteParam.get("ePrenom"));
    const etd=RouteParam.get('ePrenom');
    this.etudiant = this.etudiantService.etudiants.find((e) => e.prenom === etd);
  }

}
