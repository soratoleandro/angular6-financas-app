import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ExpenseType } from '../models/expenseType.model';

@Injectable({
    providedIn: 'root'
})

export class ExpenseTypeService {

    url = '/api/expensetype/';

    constructor(private conexao: HttpClient) { }

    Listar(): Observable<ExpenseType[]> {
        return this.conexao.get<ExpenseType[]>(this.url);
    }

    Pesquisar(expenseId: string): Observable<ExpenseType> {
        return this.conexao.get<ExpenseType>(this.url + expenseId);
    }

    Cadastrar(expense: ExpenseType) {
        return this.conexao.post(this.url, expense);
    }

    Atualizar(expense: ExpenseType) {
        return this.conexao.put(this.url + expense.Id, expense);
    }

    Deletar(expense: ExpenseType) {
        return this.conexao.delete(this.url + expense.Id);
    }
}