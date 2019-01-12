import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule, DatePipe, CurrencyPipe, registerLocaleData } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RoteamentoModule } from './app.routes';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NgbModule, NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { ExpenseService } from '../services/expense.service';
import { DespesaCadastroComponent } from './despesa-cadastro/despesa-cadastro.component';
import { DespesaListagemComponent } from './despesa-listagem/despesa-listagem.component';

import localePt from '@angular/common/locales/pt';
import { FilterPipe } from './despesa-listagem/despesa-listagem.pipe';
import { DespesaTipoCadastroComponent } from './despesa-tipo-cadastro/despesa-tipo-cadastro.component';

registerLocaleData(localePt, 'pt');

@NgModule({
  declarations: [
    FilterPipe,
    AppComponent,
    ErrorNotFoundComponent,
    DespesaCadastroComponent,
    DespesaListagemComponent,
    DespesaTipoCadastroComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoteamentoModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgxSpinnerModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    ExpenseService,
    DatePipe,
    CurrencyPipe
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { }