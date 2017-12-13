import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ListItem } from './list-item';

@Injectable()
export class ListItemRepositoryService {

  constructor(private http: HttpClient) { }

  getItems(): Promise<ListItem[]> {
    return new Promise<ListItem[]>(
      (response, reject) => {
        const items = [
          { itemId: 1, itemName: 'Test Item 1' },
          { itemId: 2, itemName: 'Test Item 2' },
          { itemId: 3, itemName: 'Test Item 3' },
          { itemId: 4, itemName: 'Test Item 4' },
          { itemId: 5, itemName: 'Test Item 5' }
        ];
        response(items.map(item => new ListItem(item.itemId, item.itemName)));
      }
    );
  }

  saveItems(cards: ListItem[]): Promise<ListItem[]> {
    return new Promise<ListItem[]>(
      (response, reject) => {
        response(cards.filter(item => !item.remove));
      });
  }

}
