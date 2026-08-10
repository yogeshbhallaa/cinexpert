import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter2'
})
// For Search Movies
export class FilterPipe2 implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) return [];
    if (!searchText) return items;
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.movieName.toLowerCase().includes(searchText);
    });
  }
}
