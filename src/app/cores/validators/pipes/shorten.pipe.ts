import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'shorten-word',
})
export class ShortenPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    return value.substr(0, 10);
  }
}
