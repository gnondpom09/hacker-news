// Imports
import { Component, OnInit, Input } from '@angular/core';
import { Items } from './../../model/items.model';
import { Item } from './../../model/item.model';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss'],
})
export class ItemsComponent implements OnInit {
  // Properties
  @Input() item: Item;
  @Input() items: Items;

  constructor() { }

  ngOnInit() {}

}
