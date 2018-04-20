import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-etapa',
  templateUrl: './etapa.component.html',
  styleUrls: ['./etapa.component.css']
})
export class EtapaComponent implements OnInit {

  etapa: any;
  constructor() {
    this.etapa = 'teste';
  }

  ngOnInit() {
  }

}
