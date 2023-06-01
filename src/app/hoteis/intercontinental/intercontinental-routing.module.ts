import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntercontinentalPage } from './intercontinental.page';

const routes: Routes = [
  {
    path: '',
    component: IntercontinentalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IntercontinentalPageRoutingModule {}
