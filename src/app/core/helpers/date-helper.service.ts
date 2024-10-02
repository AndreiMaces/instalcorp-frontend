import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';

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

  public static getFriday(d: Date): Date {
    const monday = this.getMonday(d);
    return new Date(monday.setDate(monday.getDate() + 4));
  }

  public static getWeekDayDateString(date: Date, day: number): string {
    const monday = this.getMonday(date);
    monday.setDate(monday.getDate() + day - 1);
    return monday.getDate() < 10 ? `0${monday.getDate()}` : `${monday.getDate()}`;
  }

  public static getWeekDayDate(date: Date, day: number): Date {
    const monday = this.getMonday(date);
    monday.setDate(monday.getDate() + day - 1);
    return monday;
  }

  public static dateDiffInDays(a: Date, b: Date) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.abs(Math.floor((utc1 - utc2) / _MS_PER_DAY));
  }

  public static getWeekRange(date: Date): string {
    const monday = this.getMonday(date);
    const friday = this.getFriday(date);
    // us
    const datePipe = new DatePipe('en-US');

    return `${datePipe.transform(monday, 'dd.MM.yyyy')} - ${datePipe.transform(friday, 'dd.MM.yyyy')}`;
  }
}
