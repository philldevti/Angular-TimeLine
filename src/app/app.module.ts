import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EtapaComponent } from './timeline/etapa/etapa.component';
import { ConteudoComponent } from './timeline/etapa/conteudo/conteudo.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeLineComponent,
    TimelineComponent,
    EtapaComponent,
    ConteudoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
