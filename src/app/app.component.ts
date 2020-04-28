import {Component} from '@angular/core';


@Component({
    selector:'mw-app',
    templateUrl:'./app.component.html',
    styleUrls: [
           './app.component.css' 
           ]
})
export class AppComponent{
    firstMediaItem={
        id:1,
        name:"Fire Bug",
        medium: "Series",
        category:"Science Fiction",
        year:2010,
        watchedOn: 2125,
        isFav:false
    }

    onMediaItemDelete(mediaItem){

    }
}