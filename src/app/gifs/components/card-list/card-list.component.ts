import { Component, Input } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { Gif } from '../../models/gif-model';
import { GifCardComponent } from "../gif-card/gif-card.component";

@Component({
  selector: 'gifs-card-list',
  imports: [GifCardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent  {

  @Input() gifs : Gif[] = []

}
