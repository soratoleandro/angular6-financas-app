import { Component, OnInit } from '@angular/core';
import { Expense } from '../../models/expense.model';
import { ExpenseService } from '../../services/expense.service';
import { ToastrService } from '../../../node_modules/ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

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
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.ListarExpenses();
  }

  ListarExpenses() {
    this.spinner.show();
    this.servico.Listar().subscribe(resp => {
      this.listaExpense = resp;
      this.spinner.hide();
    });
  }

  ApagarExpense(expense: Expense) {
    this.spinner.show();
    this.servico.Deletar(expense).subscribe(resp => {
      this.listaExpense = this.listaExpense.filter(obj => obj != expense);
      this.toastrService.info("Registro excluído com sucesso", "Exclusão", { closeButton: true, timeOut: 4000, progressBar: true });
      this.spinner.hide();
    });
  }
}
