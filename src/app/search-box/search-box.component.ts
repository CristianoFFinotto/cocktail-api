import { ControllerService } from './../controller.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatSelectChange } from '@angular/material/select';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { APIService } from '../api.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  constructor(private api: APIService, public controller: ControllerService) {}

  ngOnInit(): void {
    if (this.controller.currentSearchName) {
      this.api.setDrinksByName(this.controller.currentSearchName);
    }

    if (this.controller.currentSearchIngredient) {
      this.api.setDrinksListByIngredient(
        this.controller.currentSearchIngredient
      );
    }

    this.sliderState = this.controller.currentToggleState;
  }

  ingredients: string[] = [
    'Light rum',
    'Applejack',
    'Gin',
    'Dark rum',
    'Sweet Vermouth',
    'Strawberry schnapps',
    'Scotch',
    'Apricot brandy',
    'Triple sec',
    'Southern Comfort',
    'Orange bitters',
    'Brandy',
    'Lemon vodka',
    'Blended whiskey',
    'Dry Vermouth',
    'Amaretto',
    'Tea',
    'Champagne',
    'Coffee liqueur',
    'Bourbon',
    'Tequila',
    'Vodka',
    'Añejo rum',
    'Bitters',
    'Sugar',
    'Kahlua',
    'demerara Sugar',
    'Dubonnet Rouge',
    'Lime juice',
    'Irish whiskey',
    'Apple brandy',
    'Carbonated water',
    'Cherry brandy',
    'Creme de Cacao',
    'Grenadine',
    'Port',
    'Coffee brandy',
    'Red wine',
    'Rum',
    'Grapefruit juice',
    'Ricard',
    'Sherry',
    'Cognac',
    'Sloe gin',
    'Apple juice',
    'Pineapple juice',
    'Lemon juice',
    'Sugar syrup',
    'Milk',
    'Strawberries',
    'Chocolate syrup',
    'Yoghurt',
    'Mango',
    'Ginger',
    'Lime',
    'Cantaloupe',
    'Berries',
    'Grapes',
    'Kiwi',
    'Tomato juice',
    'Cocoa powder',
    'Chocolate',
    'Heavy cream',
    'Galliano',
    'Peach Vodka',
    'Ouzo',
    'Coffee',
    'Spiced rum',
    'Water',
    'Espresso',
    'Angelica root',
    'Orange',
    'Cranberries',
    'Johnnie Walker',
    'Apple cider',
    'Everclear',
    'Cranberry juice',
    'Egg yolk',
    'Egg',
    'Grape juice',
    'Peach nectar',
    'Lemon',
    'Firewater',
    'Lemonade',
    'Lager',
    'Whiskey',
    'Absolut Citron',
    'Pisco',
    'Irish cream',
    'Ale',
    'Chocolate liqueur',
    'Midori melon liqueur',
    'Sambuca',
    'Cider',
    'Sprite',
    '7-Up',
    'Blackberry brandy',
    'Peppermint schnapps',
    'Creme de Cassis',
  ];

  sliderState = false;
  searchData: string = '';

  handleOnChangeInput(e: Event) {
    this.searchData = (e.target as HTMLInputElement).value;
  }

  handleOnChangeSelection(e: MatSelectChange) {
    this.searchData = e.value;
  }

  handleOnChangeToggle(e: MatSlideToggleChange) {
    this.sliderState = e.checked;
    this.controller.currentToggleState = e.checked;
  }

  handleOnSearch() {
    if (this.sliderState) {
      this.api.setDrinksListByIngredient(this.searchData);
      this.controller.currentSearchIngredient = this.searchData;
      this.controller.currentSearchName = '';
    } else {
      this.api.setDrinksByName(this.searchData);
      this.controller.currentSearchName = this.searchData;
      this.controller.currentSearchIngredient = '';
    }
  }
}
