interface IExpenseType {
    Id: string;
    Name: string;
    IsActive: boolean;
    CreationDate: Date;
    UpdateDate: Date;
}

export class ExpenseType implements IExpenseType {
    Id;
    Name = '';
    IsActive = false;
    CreationDate = new Date();
    UpdateDate;
}