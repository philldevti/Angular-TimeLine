import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { TimelineComponent } from './timeline/timeline.component';
import { EtapaComponent } from './timeline/etapa/etapa.component';
import { ConteudoComponent } from './timeline/etapa/conteudo/conteudo.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { Error404Component } from './pages/error404/error404.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/auth/auth.guard';
import { HeaderComponent } from './timeline/etapa/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    TimeLineComponent,
    TimelineComponent,
    EtapaComponent,
    ConteudoComponent,
    HomeComponent,
    AboutComponent,
    Error404Component,
    LoginComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
