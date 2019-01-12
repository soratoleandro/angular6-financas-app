import { Component, OnInit } from '@angular/core';
import { ExpenseType } from '../../models/expenseType.model';

@Component({
  selector: 'app-despesa-tipo-cadastro',
  templateUrl: './despesa-tipo-cadastro.component.html',
  styles: []
})

export class DespesaTipoCadastroComponent implements OnInit {

  tituloPagina: string = "Cadastro de tipo de despesa";
  expenseType: ExpenseType = new ExpenseType();

  constructor() { }

  ngOnInit() {
    console.log("caiu2");
  }

}
