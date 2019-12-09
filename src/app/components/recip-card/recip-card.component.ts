import { Recip } from './../../shared/models/recip';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-recip-card',
  templateUrl: './recip-card.component.html',
  styleUrls: ['./recip-card.component.scss']
})
export class RecipCardComponent implements OnInit {
  @Input() recip: Recip;
  constructor() { }

  ngOnInit() {
  }

}
