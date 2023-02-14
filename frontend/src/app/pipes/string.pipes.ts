import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({ name: 'toString' })

export class StringPipes implements PipeTransform {

    transform(value: moment.Moment): any {

        if(value){
            return  value.toString()
        }
       return ""
    }
}
