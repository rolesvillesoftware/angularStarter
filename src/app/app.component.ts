import { Component, OnInit } from '@angular/core';

import { ListItemRepositoryService } from './list-item-repository.service';
import { ListItem } from './list-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Starter App';
  isInitializing = true;
  dataCards: ListItem[] = new Array<ListItem>(0);

  constructor(private repository: ListItemRepositoryService) { }

  get totalCards(): number {
    return this.dataCards.length;
  }

  get totalRemoved(): number {
    return this.dataCards.filter(item => item.remove).length;
  }

  get totalCompleted(): number {
    return this.dataCards.filter(item => item.completed).length;
  }

  doReset() {
    this.dataCards.forEach(item => item.doReset());
  }

  doSave() {
    this.repository.saveItems(this.dataCards)
      .then(data => {
        this.dataCards = data;
        alert('Save Completed');
      })
      .catch(error => alert(`Error: ${error}`));
  }

  ngOnInit() {
    this.isInitializing = true;
    this.repository.getItems()
      .then(data => {
        this.isInitializing = false;
        this.dataCards = data;
      })
      .catch(error => {
        this.isInitializing = false;
        alert(`Error: ${error} `);
      });
  }

}
