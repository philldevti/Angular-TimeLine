import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  conteudo: any;

  constructor() {
    this.conteudo = 'teste';
  }

  ngOnInit() {
  }

}
