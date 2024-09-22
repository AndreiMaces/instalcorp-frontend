import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalendarLayoutHelperService {
  private static _layoutWidth = 1000;
  private static _layoutComponents = 6;

  public static get layoutComponentWidth(): number {
    return CalendarLayoutHelperService._layoutWidth / CalendarLayoutHelperService._layoutComponents;
  }

  public static get layoutWidth(): number {
    return CalendarLayoutHelperService._layoutWidth;
  }

  public static get layoutComponents(): number {
    return CalendarLayoutHelperService._layoutComponents;
  }
}
