import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etudiant-add',
  templateUrl: './etudiant-add.component.html',
  styleUrls: ['./etudiant-add.component.css']
})
export class EtudiantAddComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  addEtudiant(e: HTMLInputElement){
    alert(e.value);}

}
