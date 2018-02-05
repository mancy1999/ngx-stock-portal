import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'NumberPipe' })
export class NumberPipe implements PipeTransform {
    transform(value: number) {
        if (value >= 100000000) {
            return `${(value / 100000000).toFixed(2)}億`;
        } else if (value < 100000000 && value >= 10000000) {
            return `${(value / 10000000).toFixed(2)}千萬`;
        } else if (value < 10000000 && value >= 1000000) {
            return `${(value / 1000000).toFixed(2)}百萬`;
        } else if (value < 1000000 && value >= 10000) {
            return `${(value / 10000).toFixed(2)}萬`;
        } else if (value < 10000 && value >= 1000) {
            return `${(value / 1000).toFixed(2)}千`;
        } else {
            return value;
        }
    }
}
