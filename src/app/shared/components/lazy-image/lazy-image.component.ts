import { NgClass, NgIf, NgStyle } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  imports: [NgIf,NgClass],
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {

  @Input() urlImage! : string 
  @Input() alt! : string 

  loadImage : boolean = false

  constructor() { }

  ngOnInit() {
  }

  onLoadImage(){
    this.loadImage = true
  }

}
