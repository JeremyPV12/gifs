import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, gifModel } from '../models/gif-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private _tasgHistory : string[] = []
  private apiKey:string = '9HRkTlBLBrYhWW2adjwT5rVVVGVRX6XG'
  private urlGifs:string = 'https://api.giphy.com/v1/gifs/'
  private _gifs : Gif[] = []

  constructor(private http : HttpClient) { 
    this.loadLocalStorage()

  }

  get tagsHistory(){
    /* Esto es para hacer una copia de _tagsHistory */
    return [...this._tasgHistory];
  }

  get gifsList(){
    return[...this._gifs]
  }

  private organizeHistory(tag: string){
    tag = tag.toUpperCase();
    /* Verifica si este tag, existe en nuestro array */
    if (this._tasgHistory.includes(tag)) {
      this._tasgHistory = this._tasgHistory.filter((oldTag)=> oldTag!==tag)
    }
    this._tasgHistory.unshift(tag)
    this._tasgHistory.splice(10)
    this.saveLocalStora();
  }



  private saveLocalStora():void{
    localStorage.setItem('history',JSON.stringify(this._tasgHistory))
  }

  private loadLocalStorage():void{
    if(!localStorage.getItem('history')) return;
    this._tasgHistory = JSON.parse(localStorage.getItem('history')!)

    if (this._tasgHistory.length !== 0) {
      this.searchTag(this._tasgHistory[0])
    }

  }

  searchTag(tag:string):void{
    this._gifs = []
    /* unshift ingresa nuervos elementos al inicio del array y regresa el nuevo numero de datos */
    if (tag.length == 0) return;
    this.organizeHistory(tag)

    let params = new HttpParams()
      .set('api_key',this.apiKey)
      .set('limit',10)
      .set('q',tag)
    this.http.get<gifModel>(`${this.urlGifs}search`,{params}).subscribe({
      next: (data) => this._gifs = data.data,
    })
  }


}
