import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ArrayInRow' })
export class ArrayInRow implements PipeTransform {

    transform( value: Array<any>, property: string ): string {
		const [first_element] = value
		const size = value.length - 1
		const trigger = size >= 1 ? ` (+${size}  mas)` : ""
		return first_element? `${first_element[property]}  ${trigger}`: "sin asignacion"
    }
}
