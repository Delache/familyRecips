import { Recip } from './../../shared/models/recip';
import { RecipService } from './../../shared/services/recip.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-recip-list',
  templateUrl: './recip-list.component.html',
  styleUrls: ['./recip-list.component.scss']
})
export class RecipListComponent implements OnInit {
  recip: Recip[];
  constructor(private recipService: RecipService) { }

ngOnInit() {
  this.recipService.getAllRecips()
      .subscribe((response) => {
        this.recip = response;
      });
  }

}
