import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() titulo: any;

  constructor() {
    this.titulo = '';
  }

  ngOnInit() {
  }

}
