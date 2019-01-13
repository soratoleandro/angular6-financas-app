import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { ExpenseService } from '../../services/expense.service';
import { ToastrService } from '../../../node_modules/ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';
import { Router } from '@angular/router';

@Component({
  selector: 'app-despesa-listagem',
  templateUrl: './despesa-listagem.component.html',
  styles: []
})

export class DespesaListagemComponent implements OnInit {

  listaExpense: Expense[];
  searchTerm: string;

  constructor(
    private servico: ExpenseService,
    private toastrService: ToastrService,
    private roteamento: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {

    this.ListarExpenses();

  }

  ListarExpenses() {

    this.spinner.show();

    this.servico.Listar()
      .subscribe(
        resp => {
          this.listaExpense = resp;
          this.spinner.hide();
        },
        err => {
          this.roteamento.navigate(['/error']);
          this.spinner.hide();
        }
      );
  }

  ApagarExpense(expense: Expense) {

    this.spinner.show();

    this.servico
      .Deletar(expense)
      .subscribe(
        resp => {
          this.listaExpense = this.listaExpense.filter(obj => obj != expense);
          this.toastrService.info("Registro excluído com sucesso", "Exclusão", { timeOut: 4000, progressBar: true });
          this.spinner.hide();
        },
        err => {
          this.toastrService.warning('Ocorreu um erro ao excluir o registro', 'Atenção');
          this.spinner.hide();
        }
      );
  }
}
