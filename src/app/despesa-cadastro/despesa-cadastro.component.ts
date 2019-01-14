import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExpenseType } from '../../models/expenseType.model';
import { ExpenseTypeService } from '../../services/expenseType.service';
import { DatePickerModel } from '../../models/date-picker.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-despesa-cadastro',
  templateUrl: './despesa-cadastro.component.html',
  styles: []
})

export class DespesaCadastroComponent implements OnInit {

  tituloPagina: string = 'Cadastro de despesa';
  expense: Expense = new Expense();
  listaExpenseType: ExpenseType[];
  dataPagamento: DatePickerModel = new DatePickerModel();

  constructor(
    private rotaAtiva: ActivatedRoute,
    private toastrService: ToastrService,
    private expenseService: ExpenseService,
    private expenseTypeService: ExpenseTypeService,
    private roteamento: Router,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {

    let expenseId = this.rotaAtiva.snapshot.params.id;

    this.spinner.show();

    this.CarregarListaExpenseType();

    if (expenseId) {

      this.tituloPagina = 'Atualização de despesa';

      this.expenseService
        .Pesquisar(expenseId)
        .subscribe(
          resp => {
            this.expense = resp;
            this.dataPagamento = {
              day: new Date(resp.TargetDate).getDate(),
              month: new Date(resp.TargetDate).getMonth() + 1,
              year: new Date(resp.TargetDate).getFullYear()
            };
          },
          err => {
            this.toastrService.warning('Ocorreu um erro ao carregar a página.', 'Atenção');
            this.spinner.hide();
          }
        );
    }
    else {
      this.tituloPagina = 'Cadastro de despesa';
    }
  }

  CarregarListaExpenseType() {

    this.expenseTypeService.Listar()
      .subscribe(
        resp => {
          this.listaExpenseType = resp;
          this.spinner.hide();
        },
        err => {
          this.toastrService.warning('Ocorreu um erro ao carregar a página.', 'Atenção');
          this.spinner.hide();
        }
      );
  }

  Salvar(expense: Expense) {

    this.spinner.show();

    if (this.dataPagamento) {
      expense.TargetDate = new Date(this.dataPagamento.year, this.dataPagamento.month - 1, this.dataPagamento.day);
    }

    if (expense.Id) {
      this.expenseService.Atualizar(expense)
        .subscribe(
          resp => {
            this.toastrService.success('Atualizado com sucesso', 'Atualizar', { timeOut: 4000, progressBar: true });
            this.roteamento.navigate(['/despesas'])
            this.spinner.hide();
          },
          err => {
            this.toastrService.warning('Ocorreu um erro ao atualizar', 'Atenção');
            this.spinner.hide();
          }
        );
    }
    else {
      this.expense.IsActive = true;
      this.expenseService.Cadastrar(expense)
        .subscribe(
          resp => {
            this.toastrService.success('Cadastrado com sucesso', 'Cadastrar', { timeOut: 4000, progressBar: true });
            this.spinner.hide();
          },
          err => {
            this.toastrService.warning('Ocorreu um erro ao cadastrar', 'Atenção');
            this.spinner.hide();
          }
        );
    }

    this.expense = new Expense();
    this.dataPagamento = new DatePickerModel();
  }
}