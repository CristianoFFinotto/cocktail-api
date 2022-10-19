import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type CocktailListApi = {
  drinks: [{ idDrink: string; strDrink: string; strDrinkThumb: string }];
};
type CocktailList = {
  id: string;
  name: string;
  image: string;
};

type CocktailDetailApi = {
  drinks: [
    {
      idDrink: string;
      strDrink: string;
      strCategory: string;
      strAlcoholic: string;
      strInstructions: string;
      strDrinkThumb: string;
    }
  ];
};

type CocktailDetail = {
  id: string;
  name: string;
  category: string;
  alcoholic: string;
  instructions: string;
  image: string;
};

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  drinksListApi: CocktailListApi | undefined;

  drinksList: CocktailList[] | undefined;

  drinkDetailApi: CocktailDetailApi | undefined;

  drinkDetail: CocktailDetail | undefined;

  searchDrinks(drink: string) {
    this.http
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
      .subscribe((response) => {
        this.drinksListApi = response as CocktailListApi;
        this.drinksList = this.drinksListApi.drinks.map((drink) => ({
          id: drink.idDrink,
          name: drink.strDrink,
          image: drink.strDrinkThumb,
        }));
      });
  }

  searchDrinkById(id: string) {
    this.http
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .subscribe((response) => {
        this.drinkDetailApi = response as CocktailDetailApi;
        this.drinkDetail = {
          id: this.drinkDetailApi.drinks[0].idDrink,
          name: this.drinkDetailApi.drinks[0].strDrink,
          category: this.drinkDetailApi.drinks[0].strCategory,
          alcoholic: this.drinkDetailApi.drinks[0].strAlcoholic,
          instructions: this.drinkDetailApi.drinks[0].strInstructions,
          image: this.drinkDetailApi.drinks[0].strDrinkThumb,
        };
      });
  }
}
