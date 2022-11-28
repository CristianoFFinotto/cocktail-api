import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../api.service';

@Component({
  selector: 'app-detail-ingredient',
  templateUrl: './detail-ingredient.component.html',
  styleUrls: ['./detail-ingredient.component.scss'],
})
export class DetailIngredientComponent implements OnInit {
  ingredient: string = this.router.url.split('/')[2];

  constructor(public api: APIService, private router: Router) {}

  ngOnInit(): void {
    this.api.setIngredientByName(this.ingredient);
    this.api.setDrinksListByIngredient(this.ingredient);
  }
}
