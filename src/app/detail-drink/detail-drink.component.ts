import { Component, OnInit } from '@angular/core';
import { APIService } from '../api.service';

@Component({
  selector: 'app-detail-drink',
  templateUrl: './detail-drink.component.html',
  styleUrls: ['./detail-drink.component.scss'],
})
export class DetailDrinkComponent implements OnInit {
  constructor(public api: APIService) {}

  ngOnInit(): void {}
}
