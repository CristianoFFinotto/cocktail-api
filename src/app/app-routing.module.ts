import { DetailDrinkComponent } from './detail-drink/detail-drink.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MediaBoxComponent } from './media-box/media-box.component';

const routes: Routes = [
  { path: '', component: MediaBoxComponent, pathMatch: 'full' },
  { path: 'drink/:id', component: DetailDrinkComponent, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
