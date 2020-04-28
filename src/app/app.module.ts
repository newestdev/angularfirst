import {NgModule} from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms'; 
import {HttpClientModule,HttpXhrBackend} from '@angular/common/http'
import {MediaItemComponent} from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import {favoriteDirective} from './favorite.directive';
import {CategoryListPage} from './category-list.pipe';
import {MediaItemFormComponent} from './media-item-form.component';
import {lookupValueToken,lookupvalue} from './providers';
import {MockXHRBackend} from './mock-xhr-backend';


@NgModule({
    imports: [
        BrowserModule,ReactiveFormsModule,HttpClientModule
    ],
    declarations:[
        AppComponent,MediaItemComponent,MediaItemListComponent,favoriteDirective,CategoryListPage,MediaItemFormComponent
        
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