import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { HotelThumbnailComponent } from './hotel-thumbnail/hotel-thumbnail.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';
import { SmediaComponent } from './smedia/smedia.component';

import { HotelFilterPipe } from '../common/pipes/hotel-filter.pipe';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    HotelsListComponent,
    HotelThumbnailComponent,
    SmediaComponent,
    WeatherDetailsComponent
  ],
  declarations: [
    HotelsListComponent,
    HotelThumbnailComponent,
    SmediaComponent,
    WeatherDetailsComponent,
    HotelFilterPipe
  ], 
  providers: [
  ]
})

export class HotelsModule { }
