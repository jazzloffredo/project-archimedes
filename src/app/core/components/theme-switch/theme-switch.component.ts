import { AfterViewInit, Component } from '@angular/core';

import { ThemeService, Theme } from '../../services/theme.service';

import * as feather from 'feather-icons';

@Component({
  selector: 'arch-theme-switch',
  templateUrl: './theme-switch.component.html',
  styleUrls: ['./theme-switch.component.scss']
})
export class ThemeSwitchComponent implements AfterViewInit {

  checked: boolean = false;

  constructor(private readonly themeService: ThemeService) { }

  ngAfterViewInit(): void {
    feather.replace();
  }

  toggle(): void {
    this.checked = !this.checked;
    if (this.checked) {
      this.themeService.setTheme(Theme.Dark);
    } else {
      this.themeService.setTheme(Theme.Light);
    }
  }

}
