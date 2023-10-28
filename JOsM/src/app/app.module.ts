import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {NavComponent} from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { CardsComponent } from './components/cards/cards.component';
import { TargetsComponent } from './components/targets/targets.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    NavComponent,
    AppComponent,
    HeaderComponent,
    CardsComponent,
    TargetsComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
