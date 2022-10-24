import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

type CocktailListApi = {
  drinks: [
    {
      idDrink: string;
      strDrink: string;
      strCategory: string;
      strDrinkThumb: string;
    }
  ];
};
type CocktailList = {
  id: string;
  name: string;
  category: string;
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
      strIngredient1: string;
      strIngredient2: string;
      strIngredient3: string;
      strIngredient4: string;
      strIngredient5: string;
      strIngredient6: string;
      strIngredient7: string;
      strIngredient8: string;
      strIngredient9: string;
      strIngredient10: string;
      strIngredient11: string;
      strIngredient12: string;
      strIngredient13: string;
      strIngredient14: string;
      strIngredient15: string;
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
  ingredients: (string | undefined)[];
};

type CocktailSearchByIngredientApi = {
  drinks: [
    {
      idDrink: string;
      strDrink: string;
      strDrinkThumb: string;
    }
  ];
};

type CocktailSearchByIngredient = {
  id: string;
  name: string;
  image: string;
}[];

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  drinksListApi: CocktailListApi | undefined;

  drinksList: CocktailList[] | undefined;

  drinkDetailApi: CocktailDetailApi | undefined;

  drinkDetail: CocktailDetail | undefined;

  drinkListByIngredient: CocktailSearchByIngredient | undefined;

  searchDrinks(drink: string) {
    this.http
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
      .subscribe((response) => {
        this.drinksListApi = response as CocktailListApi;
        this.drinksList = this.drinksListApi.drinks.map((drink) => ({
          id: drink.idDrink,
          name: drink.strDrink,
          category: drink.strCategory,
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
          ingredients: Object.keys(this.drinkDetailApi.drinks[0])
            .filter(
              (key) =>
                key.includes('Ingredient') &&
                this.drinkDetailApi?.drinks[0][
                  key as keyof typeof this.drinkDetailApi.drinks[0]
                ]
            )
            .map(
              (key) =>
                this.drinkDetailApi?.drinks[0][
                  key as keyof typeof this.drinkDetailApi.drinks[0]
                ]
            ),
        };
      });
  }

  searchDrinksByLetter(letter: string) {
    this.http
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .subscribe((response) => {
        this.drinksListApi = response as CocktailListApi;
        this.drinksList = this.drinksListApi.drinks.map((drink) => ({
          id: drink.idDrink,
          name: drink.strDrink,
          category: drink.strCategory,
          image: drink.strDrinkThumb,
        }));
      });
  }

  searchDrinksByIngredient(ingredient: string) {
    this.http
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
      )
      .subscribe((response) => {
        const drinksListApi = response as CocktailSearchByIngredientApi;
        this.drinkListByIngredient = drinksListApi.drinks.map((drink) => ({
          id: drink.idDrink,
          name: drink.strDrink,
          image: drink.strDrinkThumb,
        }));
      });
  }
}
