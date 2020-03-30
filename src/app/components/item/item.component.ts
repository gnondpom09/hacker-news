// Imports
import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../model/item.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss'],
})
export class ItemComponent implements OnInit {
  // Properties
  @Input() item: Item;

  constructor() { }

  ngOnInit() {}

}
