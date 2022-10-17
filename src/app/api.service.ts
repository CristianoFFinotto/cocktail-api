import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class APIService {
  constructor(private http: HttpClient) {}

  getDrinks() {
    this.http
      .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita')
      .subscribe((response) => console.log(response));
  }
}
