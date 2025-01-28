import { Component, ElementRef, EventEmitter, Output, ViewChild } from "@angular/core";
import { GifsService } from "../services/gifs.service";

@Component({
    selector: 'gifs-search-box',
    template: `
        <section class="m-10 space-y-4" >
            <h3 class="text-2xl " >Searching</h3>
            <div class="relative block focus-within:border-4 border-2 rounded-xl w-full bg-yellow-50">
                <i class=" inset-y-0 flex items-center left-0 pl-2 absolute fa-solid fa-magnifying-glass fa-lg"></i>
                <input type="text"
                class="outline-none pl-10 text-lg block w-full py-2 rounded-xl focus:not-italic  italic"
                placeholder="Search gifs ..."
                (keyup.enter)="searchTag()"
                #txtTagInput
            >
            </div>
        </section>
    `
})

export class SearchBoxComponent {

    /* New child nos sirve para tomar una referencia local 
        (keyup.enter)="searchTag(txtTagInput.value)"
    */

    @Output() sendListTags = new EventEmitter<string[]>();

    constructor(private gifsService : GifsService){}
    
    @ViewChild('txtTagInput') tagInput! : ElementRef<HTMLInputElement>;

    searchTag(){
        const newTag = this.tagInput.nativeElement.value
        this.gifsService.searchTag(newTag)
        this.tagInput.nativeElement.value = ''
        this.sendListTags.emit(this.gifsService.tagsHistory)
    }

}