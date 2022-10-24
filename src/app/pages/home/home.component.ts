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
  constructor(public api: APIService, private router: Router) {}

  ngOnInit(): void {
    this.api.searchDrinksByLetter(this.letters[0]);
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
    'V',
    'W',
    'Y',
    'Z',
  ];

  onSearch() {
    this.router.navigateByUrl(`/filter`);
  }

  onChangeLetter(e: MatTabChangeEvent) {
    this.api.searchDrinksByLetter(this.letters[e.index]);
  }
}
