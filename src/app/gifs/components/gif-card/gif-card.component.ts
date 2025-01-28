import { Component, Input } from '@angular/core';
import { Gif } from '../../models/gif-model';
import { LazyImageComponent } from "../../../shared/components/lazy-image/lazy-image.component";

@Component({
  selector: 'gifs-gif-card',
  imports: [LazyImageComponent],
  templateUrl: './gif-card.component.html',
  styleUrl: './gif-card.component.css'
})
export class GifCardComponent {

  @Input() gif! : Gif

}
