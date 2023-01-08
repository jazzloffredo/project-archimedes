import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { BehaviorSubject, distinctUntilChanged, pairwise } from 'rxjs';

export enum Theme {
  Light = 'light',
  Dark = 'dark'
}

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  private _theme$: BehaviorSubject<Theme> = new BehaviorSubject<Theme>(Theme.Light);

  constructor(@Inject(DOCUMENT) private readonly document: Document) {
    this._theme$
      .pipe(
        distinctUntilChanged(),
        pairwise()
      )
      .subscribe(([prev, next]) => {
        // Remove the old theme.
        if (this.document.body.classList.contains(prev)) {
          this.document.body.classList.remove(prev);
        }
        // Set the new theme.
        if (!this.document.body.classList.contains(next)) {
          this.document.body.classList.add(next);
        }
      });
  }

  setTheme(theme: Theme): void {
    this._theme$.next(theme);
  }

}
