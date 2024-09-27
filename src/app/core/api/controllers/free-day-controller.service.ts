import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
import { IFreeDay } from '../../models/IFreeDay';

@Injectable({
  providedIn: 'root',
})
export class FreeDayControllerService {
  private _baseURL = `/free-day`;

  constructor(private apiService: ApiService) {}

  getFreeDay(dayId: number): Observable<IFreeDay> {
    return this.apiService.get<IFreeDay>(`${this._baseURL}/${dayId}`);
  }

  getFreeDays(): Observable<IFreeDay[]> {
    return this.apiService.get<IFreeDay[]>(`${this._baseURL}`);
  }

  createFreeDay(newFreeDay: Partial<IFreeDay>): Observable<IFreeDay> {
    return this.apiService.post<IFreeDay>(`${this._baseURL}`, newFreeDay);
  }

  updateFreeDay(dayId: number, newFreeDay: Partial<IFreeDay>): Observable<IFreeDay> {
    return this.apiService.put<IFreeDay>(`${this._baseURL}/${dayId}`, newFreeDay);
  }

  removeFreeDay(dayId: number): Observable<void> {
    return this.apiService.delete<void>(`${this._baseURL}/${dayId}`);
  }
}
