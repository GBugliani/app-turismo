import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intercontinental',
  templateUrl: './intercontinental.page.html',
  styleUrls: ['./intercontinental.page.scss'],
})
export class IntercontinentalPage implements OnInit {

  constructor() { }

  swiperSlideChanged(e: any) {
    console.log('changed:', e)
  }

  ngOnInit() {
  }

}
