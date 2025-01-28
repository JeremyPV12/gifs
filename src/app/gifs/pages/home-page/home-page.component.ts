import { Component } from '@angular/core';
import { SearchBoxComponent } from "../../components/search-box.component";
import { CardListComponent } from "../../components/card-list/card-list.component";
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../models/gif-model';

@Component({
  selector: 'gifs-home-page',
  imports: [SearchBoxComponent, CardListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  constructor(private gifService : GifsService){}

  get gifs():Gif[]{
    return this.gifService.gifsList
  }

}
