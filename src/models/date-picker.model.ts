interface IDatePickerModel {
    day: number,
    month: number,
    year: number
}

export class DatePickerModel implements IDatePickerModel {
    day;
    month;
    year;
}