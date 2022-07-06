import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent implements OnInit {
  @Input() pokemon$: Observable<any> = new Observable();
  @Input() name: string = '';
  @Input() pokemonData: any = {};

  constructor() {}

  ngOnInit(): void {}
}
