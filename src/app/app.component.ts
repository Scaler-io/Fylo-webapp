import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { isDarkMode } from './state/shared/shared.selector';
import { SetDarkMode, SetLightMode } from './state/shared/shared.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  public isDarkMode: boolean;
  constructor(private store: Store<AppState>) {}
  private subscriptions = {
    darkMode: null,
  };

  @HostBinding('class.dark') get mode() {
    return this.isDarkMode;
  }

  ngOnInit(): void {
    this.subscriptions.darkMode = this.store
      .select(isDarkMode)
      .subscribe((res) => {
        this.isDarkMode = res;
      });

    const savedTheme = window.localStorage.getItem('theme');
    if (savedTheme) {
      if (savedTheme === 'dark') {
        this.isDarkMode = true;
        this.store.dispatch(new SetDarkMode());
      } else if (savedTheme === 'light') {
        this.isDarkMode = false;
        this.store.dispatch(new SetLightMode());
      }
    }
  }

  ngOnDestroy(): void {
    if (this.subscriptions.darkMode) this.subscriptions.darkMode.unsubscribe();
  }
}
