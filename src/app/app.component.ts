import { AfterContentInit, Component, OnInit } from '@angular/core';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public api: APIService) {}

  ngOnInit(): void {
    /* this.api.getDrinks(); */
  }
}
