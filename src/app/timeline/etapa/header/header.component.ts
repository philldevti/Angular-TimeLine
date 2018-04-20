import { Component, OnInit, Input, EventEmitter, Output, AfterViewInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  @Input() header: any;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {

  }

  clickHeader($event): void {
    this.callback.emit([$event]);
  }

}
