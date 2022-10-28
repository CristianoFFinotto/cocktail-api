import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { APIService } from '../../../api.service';

@Component({
  selector: 'app-media-box',
  templateUrl: './media-box.component.html',
  styleUrls: ['./media-box.component.scss'],
})
export class MediaBoxComponent {
  constructor(public api: APIService, private router: Router) {}

  handleOnInfo(id: string) {
    this.router.navigateByUrl(`/drink/${id}`);
  }
}
