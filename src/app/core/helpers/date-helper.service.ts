import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DateHelperService {
  public static getMonday(d: Date): Date {
    d = new Date(d);
    let day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

  public static getWeekDayDate(date: Date, day: number): string {
    const monday = this.getMonday(date);
    monday.setDate(monday.getDate() + day);
    return monday.getDate() < 10 ? `0${monday.getDate()}` : `${monday.getDate()}`;
  }
}
