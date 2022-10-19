import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../api.service';

@Component({
  selector: 'app-detail-drink',
  templateUrl: './detail-drink.component.html',
  styleUrls: ['./detail-drink.component.scss'],
})
export class DetailDrinkComponent implements OnInit {
  constructor(public api: APIService, private router: Router) {}

  ngOnInit(): void {
    this.api.searchDrinkById(this.router.url.split('/')[2]);
  }
}
