import { Component, OnInit } from '@angular/core';
import { Etudiant } from 'src/app/model/etudiant.model';
import { EtudiantService } from 'src/app/service/etudiant.service';

@Component({
  selector: 'app-etudiant-add',
  templateUrl: './etudiant-add.component.html',
  styleUrls: ['./etudiant-add.component.css']
})
export class EtudiantAddComponent implements OnInit {

  constructor(private etudiantService : EtudiantService) { }

  ngOnInit(): void {
  }
  addEtudiant(e: HTMLInputElement){
    alert(e.value);
    this.etudiantService.addEtudiant(new Etudiant(e.value));
  }

}
