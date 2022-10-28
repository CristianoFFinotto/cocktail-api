import { ControllerService } from './../../controller.service';
import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';
import { Router } from '@angular/router';
import { APIService } from 'src/app/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(
    public api: APIService,
    private router: Router,
    public controller: ControllerService
  ) {}

  ngOnInit(): void {
    if (this.controller.currentLetter) {
      this.api.setDrinksByFirstLetter(this.controller.currentLetter);
    } else {
      this.api.setDrinksByFirstLetter(this.letters[0]);
    }
  }

  letters: string[] = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];

  onSearch() {
    this.api.setDrinksOnChangeComponent();
    this.router.navigateByUrl(`/filter`);
  }

  onChangeLetter(e: MatTabChangeEvent) {
    this.controller.currentLetter = this.letters[e.index];
    this.controller.currentTabIndex = e.index;
    this.api.setDrinksByFirstLetter(
      this.letters[this.controller.currentTabIndex]
    );
  }
}
