import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'etapa',
  templateUrl: './etapa.component.html',
  styleUrls: ['./etapa.component.css']
})
export class EtapaComponent implements OnInit {

  @Input() side: string;
  @Input() etapa: any;

  constructor() {
    this.etapa = '';
  }

  ngOnInit() {
  }
}
