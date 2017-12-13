import { Input, Component, OnInit } from '@angular/core';
import { ListItem } from '../list-item';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {
  @Input() card: ListItem;

  constructor() { }

  ngOnInit() {
  }

  doRemove() {
    this.card.remove = true;
  }

  doComplete() {
    this.card.completed = true;
  }

}
