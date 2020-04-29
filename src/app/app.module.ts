import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from './app.component';
import {HttpClientModule,HttpXhrBackend} from '@angular/common/http'
import {MediaItemComponent} from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import {favoriteDirective} from './favorite.directive';
import {CategoryListPage} from './category-list.pipe';
import {lookupValueToken,lookupvalue} from './providers';
import {MockXHRBackend} from './mock-xhr-backend';
import {routing} from './app.routing';


@NgModule({
    imports: [
        BrowserModule,HttpClientModule,routing
    ],
    declarations:[
        AppComponent,MediaItemComponent,MediaItemListComponent,favoriteDirective,CategoryListPage
        
    ],
    bootstrap:[
        AppComponent
    ],
    providers:[
        {provide:lookupValueToken, useValue:lookupvalue},
        {provide:HttpXhrBackend,useClass:MockXHRBackend}
    ]

})
export class AppModule{

}