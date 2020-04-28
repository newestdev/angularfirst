import {Directive,HostBinding,Input, HostListener} from '@angular/core';

@Directive({
    selector: '[mwFavorite]'
})

export class favoriteDirective{
    @HostBinding('class.is-favorite') isFavorite=true;
    @HostBinding('class.is-hovering') isHovering=false;
    @HostListener('mouseenter') onmouseEnter() {
        this.isHovering = true;
    };
    @HostListener('mouseleave') onmouseLeave(){
        this.isHovering = false;
    }


    @Input() set mwFavorite(value){
        this.isFavorite = value;
        console.log(`The value is ${this.isFavorite}`);
    }
}