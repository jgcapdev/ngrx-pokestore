import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectItems } from 'src/app/state/selectors/cart.selectors';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  counter: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectItems).subscribe((item) => {
      this.counter = item;
    });
  }
}
