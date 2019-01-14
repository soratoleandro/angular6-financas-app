import { Component, OnInit } from '@angular/core';
import { ExpenseType } from '../../models/expenseType.model';
import { ExpenseTypeService } from 'src/services/expenseType.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-despesa-tipo-cadastro',
  templateUrl: './despesa-tipo-cadastro.component.html',
  styles: []
})

export class DespesaTipoCadastroComponent implements OnInit {

  tituloPagina: string;
  expenseType: ExpenseType = new ExpenseType();

  constructor(
    private rotaAtiva: ActivatedRoute,
    private roteamento: Router,
    private expenseTypeService: ExpenseTypeService,
    private toastrService: ToastrService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {

    let expenseTypeId = this.rotaAtiva.snapshot.params.id;

    if (expenseTypeId) {

      this.tituloPagina = "Atualização de tipo de despesa";

      this.spinner.show();

      this.expenseTypeService.Pesquisar(expenseTypeId)
        .subscribe(
          resp => {
            this.expenseType = resp;
            this.spinner.hide();
          },
          err => {
            this.roteamento.navigate(['/error']);
            this.spinner.hide();
          }
        );
    }
    else {
      this.tituloPagina = "Cadastro de tipo de despesa";
    }
  }

  Salvar(expenseType: ExpenseType) {

    this.spinner.show();

    if (this.expenseType.Id) {
      this.expenseTypeService.Atualizar(expenseType)
        .subscribe(
          resp => {
            this.toastrService.success('Atualizado com sucesso', 'Atualizar', { timeOut: 4000, progressBar: true });
            this.roteamento.navigate(['/']);
            this.spinner.hide();
          },
          err => {
            this.toastrService.success('Ocorreu um erro ao atualizar', 'Atenção');
            this.spinner.hide();
          }
        );
    }
    else {
      this.expenseTypeService.Cadastrar(expenseType)
        .subscribe(
          resp => {
            this.toastrService.success('Cadastrado com sucesso', 'Cadastrar', { timeOut: 4000, progressBar: true });
            this.spinner.hide();
          },
          err => {
            this.toastrService.success('Ocorreu um erro ao cadastrar', 'Atenção');
            this.spinner.hide();
          }
        );
    }

    this.expenseType = new ExpenseType();
  }
}