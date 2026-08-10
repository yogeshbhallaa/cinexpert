import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter3'
})
// FilterPipe 3
export class FilterPipe3 implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.MovieName.toLowerCase().includes(searchText);
    });
  }
}
