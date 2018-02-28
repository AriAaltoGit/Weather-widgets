import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'tempUnit'
})
export class TempUnitPipe implements PipeTransform {
    transform(temp: number, unitType: string) {
        if (unitType == 'celsius') {
            const celsius = Number((temp*(1) - 32) *5/9).toFixed(0);
            return celsius + " \u00B0C";
        } else {
            return Number(temp).toFixed(0) + " \u00B0F";
        }
    }
}