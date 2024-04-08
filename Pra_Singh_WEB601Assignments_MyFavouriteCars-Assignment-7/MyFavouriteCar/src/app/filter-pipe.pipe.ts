import { Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'filterPipe',
  standalone: true
})
export class FilterPipePipe implements PipeTransform {

  transform(contents: Content[], uniqueType: string): Content[] {
    return contents.filter((content) => content.type?.includes(uniqueType));
  }

}
