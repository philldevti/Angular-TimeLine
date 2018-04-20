import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'conteudo',
  templateUrl: './conteudo.component.html',
  styleUrls: ['./conteudo.component.css']
})
export class ConteudoComponent implements OnInit {

  @Input() detalhes: any;

  constructor() {
    
  }

  ngOnInit() {
  }

}
