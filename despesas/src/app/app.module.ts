import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button'; // Corrigido aqui
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'; // Adicionado aqui

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { MonthComponent } from './components/month/month.component';
import { AddDespesaComponent } from './components/add-despesa/add-despesa.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // Adicionado aqui

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MonthComponent,
    AddDespesaComponent,
    ContentComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule, // Corrigido aqui para MatButtonModule
    MatButtonToggleModule,
    MatIconModule,
    ReactiveFormsModule,
    HttpClientModule, // Adicionado aqui
    BrowserAnimationsModule, // Adicionado aqui para animações
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
