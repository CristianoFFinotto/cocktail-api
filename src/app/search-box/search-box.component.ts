import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { APIService } from '../api.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent {
  constructor(private api: APIService) {}

  formGroup = new FormGroup({
    drinkName: new FormControl(''),
  });

  handleOnSubmit(e: Event) {
    e.preventDefault();
    this.api.searchDrinks(this.formGroup.get('drinkName')!.value!);
  }
}
