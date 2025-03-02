import { WeekDays } from '../types/WeekDays';
import { Month } from '../types/Months';

function getToday<T>(type: T, date: number): T[keyof T] {
    const casted = date as keyof T;
    return type[casted];
}

export default function getFormattedDate(): (string | number)[] {
    const currentDate = new Date();

    const weekDay = getToday(WeekDays, currentDate.getDay());
    const month = getToday(Month, currentDate.getMonth());
    let date = currentDate.getDate().toString();
    let year = currentDate.getFullYear().toString();
    if (date.length < 2) {
        date = `0${date}`;
    }
    year = year.slice(-2);

    return [date, weekDay, month, year];
}
