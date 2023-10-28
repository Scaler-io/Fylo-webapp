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

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);

    if (element) {
      const sectionTop = element.getBoundingClientRect().top + window.scrollY;
      this.scrollSmoothly(sectionTop, 200, 0.2);
    }
  }

  scrollSmoothly(to, duration, endingEasing) {
    const start = window.scrollY;
    const change = to - start;
    const startTime = performance.now();

    function animateScroll(time) {
      const timeElapsed = time - startTime;
      const scrollPosition = easeInOutQuad(timeElapsed, start, change, duration, endingEasing);
      window.scrollTo(0, scrollPosition);

      if (timeElapsed < duration) {
        requestAnimationFrame(animateScroll);
      }
    }

    function easeInOutQuad(t, b, c, d, endingEasing) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (
        (-c / 2) * (t * (t - 2) - 1) * (1 - endingEasing) +
        (b + c) * (1 + endingEasing)
      );
    }

    requestAnimationFrame(animateScroll);
  }
}
