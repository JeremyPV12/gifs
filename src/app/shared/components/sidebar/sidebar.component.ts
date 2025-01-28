import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'shared-sidebar',
  imports: [TitleCasePipe],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent  {


  constructor(private gifsService : GifsService ){}

  /* ngOnInit(): void {
    this.searchList = this.gifsService.tagsHistory
    console.log(this.searchList)
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.searchList = this.gifsService.tagsHistory
    console.log(this.searchList)
  } */

  get tags (){
    return this.gifsService.tagsHistory
  }

  reloadTag(tag:string){
    this.gifsService.searchTag(tag)
  }

}
