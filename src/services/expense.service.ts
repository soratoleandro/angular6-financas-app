import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Expense } from '../models/expense.model';

@Injectable({
    providedIn: 'root'
})

export class ExpenseService {

    url = '/api/expense/';

    constructor(private conexao: HttpClient) { }

    Listar(): Observable<Expense[]> {
        return this.conexao.get<Expense[]>(this.url);
    }

    Pesquisar(expenseId: string): Observable<Expense> {
        return this.conexao.get<Expense>(this.url + expenseId);
    }

    Cadastrar(expense: Expense) {
        return this.conexao.post(this.url, expense);
    }

    Atualizar(expense: Expense) {
        return this.conexao.put(this.url + expense.Id, expense);
    }

    Deletar(expense: Expense) {
        return this.conexao.delete(this.url + expense.Id);
    }
}