import { DetailDrinkComponent } from './detail-drink/detail-drink.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FilterComponent } from './filter/filter.component';
import { DetailIngredientComponent } from './detail-ingredient/detail-ingredient.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  { path: 'filter', component: FilterComponent, pathMatch: 'full' },
  { path: 'drink/:id', component: DetailDrinkComponent, pathMatch: 'full' },
  {
    path: 'ingredient/:name',
    component: DetailIngredientComponent,
    pathMatch: 'full',
  },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
