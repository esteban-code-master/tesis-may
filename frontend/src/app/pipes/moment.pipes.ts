import { Pipe, PipeTransform } from '@angular/core';
import { Moment } from 'moment';

@Pipe({ name: 'momentFormat' })

export class MomentPipe implements PipeTransform {

    transform( value: Moment, momentFormat: string ): string {

		return value ? value.format(momentFormat) : "error moment"
    }
}
