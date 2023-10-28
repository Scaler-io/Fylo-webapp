import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { DarkModeToggle } from 'src/app/state/shared/shared.action';
import { isDarkMode } from 'src/app/state/shared/shared.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isDarkMode$: Observable<boolean>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.isDarkMode$ = this.store.select(isDarkMode);
  }

  public toggleDarkMode() {
    this.store.dispatch(new DarkModeToggle());
  }
}
