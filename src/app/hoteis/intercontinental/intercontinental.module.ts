import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IntercontinentalPageRoutingModule } from './intercontinental-routing.module';

import { IntercontinentalPage } from './intercontinental.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IntercontinentalPageRoutingModule
  ],
  declarations: [IntercontinentalPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IntercontinentalPageModule {}
