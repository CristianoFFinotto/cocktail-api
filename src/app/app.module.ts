import { AngularMaterialModule } from './angular-material/angular-material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBoxComponent } from './search-box/search-box.component';
import { MediaBoxComponent } from './pages/home/media-box/media-box.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DetailDrinkComponent } from './detail-drink/detail-drink.component';
import { HomeComponent } from './pages/home/home.component';
import { FilterComponent } from './filter/filter.component';
import { DetailIngredientComponent } from './detail-ingredient/detail-ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBoxComponent,
    MediaBoxComponent,
    DetailDrinkComponent,
    HomeComponent,
    FilterComponent,
    DetailIngredientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
