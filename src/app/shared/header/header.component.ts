import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { SetDarkMode, SetLightMode } from 'src/app/state/shared/shared.action';
import { isDarkMode } from 'src/app/state/shared/shared.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public isDarkMode: boolean;
  constructor(private store: Store<AppState>) {}
  private subscriptions = {
    darkMode: null,
  };

  ngOnInit(): void {
    this.subscriptions.darkMode = this.store
      .select(isDarkMode)
      .subscribe((res) => {
        this.isDarkMode = res;
      });
  }

  public toggleDarkMode() {
    if (!this.isDarkMode) {
      console.log('light mode toggle');
      this.store.dispatch(new SetDarkMode());
    } else {
      console.log('darkmode toggle');
      this.store.dispatch(new SetLightMode());
    }
  }
}
