// Imports
import { async, ComponentFixture, } from '@angular/core/testing';
import { TestUtils } from '../../../testing/test-utils';
import { By } from '@angular/platform-browser';

import { ItemsComponent } from './items.component';
import { ItemComponent } from '../item/item.component';

import { TimeAgoPipe } from './../../pipes/time-ago/time-ago.pipe';

describe('itemsComponent', () => {
  let component: ItemsComponent;
  let fixture: ComponentFixture<ItemsComponent>;

  beforeEach(async (() => {
    TestUtils.beforeEachCompiler([ItemsComponent, ItemComponent, TimeAgoPipe])
      .then(compiled => {
        fixture = compiled.fixture;
        component = compiled.instance;
      });
    }));

  it('Should display list of items', () => {
    component.items = {
      offset: 0,
      limit: 10,
      total: 2,
      results: [
        { id: 1,
          title: 'item 1',
          url: 'http://www.example1.com',
          by: 'author',
          time: 1478576387,
          score: 768
        },
        { id: 2,
          title: 'item 2',
          url: 'http://www.example2.com',
          by: 'author',
          time: 1478576387,
          score: 436
        }
      ]
    };
    fixture.detectChanges();
    const debugElements = fixture.debugElement.queryAll(By.css('h2'));
    expect(debugElements.length).toBe(2);
    expect(debugElements[0].nativeElement.textContent).toContain('item 1');
    expect(debugElements[1].nativeElement.textContent).toContain('item 2');
  });

  it('Should have no items', () => {
    component.items = {
      offset: 0,
      limit: 10,
      total: 0,
      results: []
    };
    fixture.detectChanges();
    const debugElement$ = fixture.debugElement.query(By.css('p'));
    expect(debugElement$).not.toBeNull();
    expect(debugElement$.nativeElement.textContent).toContain('No items');
  });
});
