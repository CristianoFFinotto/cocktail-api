import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResolveEnd } from '@angular/router';
import { Subject, switchMap } from 'rxjs';

export type CocktailListApi = {
  drinks?: [
    {
      idDrink: string;
      strDrink: string;
      strCategory: string;
      strDrinkThumb: string;
    }
  ];
};

export type CocktailList = {
  id: string;
  name: string;
  category?: string;
  image: string;
  alcoholic?: string;
  instructions?: string;
  ingredients?: string[];
};

export type CocktailApiById = {
  drinks?: [
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

export type CocktailByIngredientApi = {
  drinks?: [
    {
      idDrink: string;
      strDrink: string;
      strDrinkThumb: string;
    }
  ];
};

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  drinks: CocktailList[] | undefined = undefined;

  setDrinksByName(drink: string): void {
    this.http
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
      .subscribe((response) => {
        let responseApi = response as CocktailListApi;
        this.drinks = responseApi.drinks
          ? responseApi.drinks!.map((drink) => ({
              id: drink.idDrink,
              name: drink.strDrink,
              category: drink.strCategory,
              image: drink.strDrinkThumb,
            }))
          : undefined;
      });
  }

  setDrinkById(id: string): void {
    this.http
      .get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`)
      .subscribe((response) => {
        let responseApi = response as CocktailApiById;
        this.drinks = responseApi.drinks
          ? [
              {
                id: responseApi.drinks![0].idDrink,
                name: responseApi.drinks![0].strDrink,
                category: responseApi.drinks![0].strCategory,
                alcoholic: responseApi.drinks![0].strAlcoholic,
                instructions: responseApi.drinks![0].strInstructions,
                image: responseApi.drinks![0].strDrinkThumb,
                ingredients: Object.keys(responseApi.drinks![0])
                  .filter(
                    (key) =>
                      key.includes('Ingredient') &&
                      responseApi.drinks![0][
                        key as keyof typeof responseApi.drinks[0]
                      ]
                  )
                  .map(
                    (key) =>
                      responseApi.drinks![0][
                        key as keyof typeof responseApi.drinks[0]
                      ]
                  ),
              },
            ]
          : undefined;
      });
  }

  setDrinksByFirstLetter(letter: string): void {
    this.http
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`)
      .subscribe((response) => {
        let responseApi = response as CocktailListApi;
        this.drinks = responseApi.drinks
          ? responseApi.drinks.map((drink) => ({
              id: drink.idDrink,
              name: drink.strDrink,
              category: drink.strCategory,
              image: drink.strDrinkThumb,
            }))
          : undefined;
      });
  }

  setDrinksListByIngredient(ingredient: string): void {
    this.http
      .get(
        `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`
      )
      .subscribe((response) => {
        let responseApi = response as CocktailByIngredientApi;
        this.drinks = responseApi.drinks
          ? responseApi.drinks.map((drink) => ({
              id: drink.idDrink,
              name: drink.strDrink,
              image: drink.strDrinkThumb,
            }))
          : undefined;
      });
  }

  setDrinksOnChangeComponent(): void {
    this.drinks = undefined;
  }
}
