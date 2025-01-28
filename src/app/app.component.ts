import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./shared/components/sidebar/sidebar.component";
import { HomePageComponent } from "./gifs/pages/home-page/home-page.component";
import { SearchBoxComponent } from './gifs/components/search-box.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SidebarComponent, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gifs';
}
