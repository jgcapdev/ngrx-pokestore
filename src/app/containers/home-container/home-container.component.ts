import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectItems } from 'src/app/state/selectors/cart.selectors';

@Component({
  selector: 'app-home-container',
  templateUrl: './home-container.component.html',
  styleUrls: ['./home-container.component.css'],
})
export class HomeContainerComponent implements OnInit {
  counter: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(selectItems).subscribe((item) => {
      this.counter = item;
    });
  }
}
