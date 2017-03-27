import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})

export class HotelsListComponent {

  leasureToSearch: any

  @Input()
  hotels: Hotel[]

  @Input()
  leisureTypes: any

  @Output()
  hotelClicked = new EventEmitter()

  public hotelClickedHandler(hotelId:number) {
    this.hotelClicked.emit(hotelId)
  }

  public doFilter(term):void {
    this.leasureToSearch = term
  }

}
