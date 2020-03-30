import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopStoriesPageRoutingModule } from './top-stories-routing.module';

import { TopStoriesPage } from './top-stories.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopStoriesPageRoutingModule
  ],
  declarations: [TopStoriesPage]
})
export class TopStoriesPageModule {}
