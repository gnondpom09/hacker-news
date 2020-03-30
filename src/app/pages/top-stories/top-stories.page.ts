// Imports
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Items } from '../../model/items.model';
import { ItemService } from '../../services/item/item.service';

@Component({
  selector: 'app-top-stories',
  templateUrl: './top-stories.page.html',
  styleUrls: ['./top-stories.page.scss'],
})
export class TopStoriesPage implements OnInit, OnDestroy {
  // Properties
  items: Items;
  private subscription: Subscription;

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.loadItems(0, 10).subscribe(items => {
      this.items = items;
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

}
