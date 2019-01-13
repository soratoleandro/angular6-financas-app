import { ExpenseType } from "./expenseType.model";

interface IExpense {
    Id: string;
    Name: string;
    IsActive: boolean;
    CreationDate: Date;
    UpdateDate: Date;
    Payed: boolean;
    Value: number;
    Comments: string;
    TargetDate: Date;
    ExpenseTypeId: number;
    ExpenseType: ExpenseType;
}

export class Expense implements IExpense {
    Id;
    Name = '';
    IsActive = true;
    CreationDate = new Date();
    UpdateDate;
    Payed;
    Value;
    Comments = '';
    TargetDate;
    ExpenseTypeId;
    ExpenseType;
}