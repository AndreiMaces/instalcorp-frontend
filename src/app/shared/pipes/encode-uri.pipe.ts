import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'encodeURI',
  standalone: true,
})
export class EncodeURIPipe implements PipeTransform {
  transform(value: string): string {
    let newValue = encodeURIComponent(value);
    return newValue;
  }
}
