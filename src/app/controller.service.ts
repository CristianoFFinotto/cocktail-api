import { CocktailList } from './api.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ControllerService {
  constructor() {}

  currentLetter: string = '';
  currentTabIndex: number = 0;
  currentSearchName: string = '';
  currentSearchIngredient: string = '';
  currentToggleState: boolean = false;
}
