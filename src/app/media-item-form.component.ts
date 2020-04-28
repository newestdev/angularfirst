import {Component, OnInit, Inject} from '@angular/core';
import {FormGroup, FormControl,Validators, FormBuilder} from '@angular/forms';
import {MediaItemService} from './media-item.service';
import {lookupValueToken} from './providers';

@Component({
    selector:'mw-media-item-form',
    templateUrl: './media-item-form.component.html',
    styleUrls: ['./media-item-form.component.css']
})

export class MediaItemFormComponent implements OnInit{
    form:FormGroup;

    constructor (private mediaItemService:MediaItemService,
        private formBuilder:FormBuilder,
        @Inject(lookupValueToken) public lookuplist
        ){}

    ngOnInit(){
        this.form = this.formBuilder.group({
            medium:this.formBuilder.control('Movies'),
            name: this.formBuilder.control('Test',Validators.compose([  Validators.pattern('[\\w\\-\\s\\/]+'),
                Validators.required]
              
            )),
            category:this.formBuilder.control(''),
            year:this.formBuilder.control('',this.Yearvalidation),
        }

        );

    }

    Yearvalidation(control:FormControl){
        if(control.value.trim().length === 0){
            return null;
        }
        const year = parseInt(control.value,10)
        const minYear = 1901;
        const maxYear = 2100;
        if(year>=minYear && year <=2100){
            return null
        }
        else{
            return {
                year:{
                    min:minYear,
                    max:maxYear
                }
            };
        }
    }


    onSubmit(mediaItem){
        this.mediaItemService.add(mediaItem).subscribe();
    }

}