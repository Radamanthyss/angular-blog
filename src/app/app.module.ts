import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './component/menu/menu.component';
import { TitleComponent } from './component/title/title.component';
import { DestaqueComponent } from './component/destaque/destaque.component';
import { CardComponent } from './component/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { ConteudoComponent } from './pages/conteudo/conteudo.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    TitleComponent,
    DestaqueComponent,
    CardComponent,
    HomeComponent,
    ConteudoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
