import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrimerComponent } from './primercomponente/primer.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [AppComponent, PrimerComponent, ContactoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
