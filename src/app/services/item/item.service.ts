// Imports
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Items } from '../../model/items.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  loadItems(offset: number, limit: number): Observable<Items> {
    return of({
      offset: 0,
      limit: 0,
      total: 0,
      results: []
    });
  }
}
