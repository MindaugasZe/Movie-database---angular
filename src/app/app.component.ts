import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tmdb-app';
  constructor(
    private location: Location,
  ) { }

  ngOnInit(): void {

  }
  back(): void {
    // window.scroll(0,0);
  }
}
