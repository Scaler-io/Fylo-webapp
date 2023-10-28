import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './store/app.state';
import { DarkModeToggle } from './state/shared/shared.action';
import { isDarkMode } from './state/shared/shared.selector';

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
        console.log(res);
      });
  }

  ngOnDestroy(): void {
    if (this.subscriptions.darkMode) this.subscriptions.darkMode.unsubscribe();
  }
}
