import { Component, OnInit, Input, NgZone, Output, EventEmitter } from '@angular/core';

declare let window: any;

@Component({
  selector: 'etapa',
  templateUrl: './etapa.component.html',
  styleUrls: ['./etapa.component.css']
})
export class EtapaComponent implements OnInit {
  someValue: String = 'xxxx';
  @Input() side: string;
  @Input() etapa: any;
  @Output() callback: EventEmitter<any> = new EventEmitter();

  constructor(private zone: NgZone) {
    window['angularComponentRef'] = {
      zone: this.zone,
      componentFn: (value) => this.callFromOutside(value),
      component: this
    };
  }

  ngOnInit() {
  }

  callFromOutside(value: any) {
    this.zone.run(() => {
      value();
    });
  }

  clickEtapa($event): void {
    this.callback.emit([$event]);
  }


}
