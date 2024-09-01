import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }

    // Toma los primeros 3 caracteres del texto de búsqueda
    const searchTerm = searchText.substring(0, 3).toLowerCase();

    return items.filter(item => {
      // Recorre los valores del objeto y filtra por los primeros 3 caracteres
      return Object.values(item).some(value =>
        typeof value === 'string' && value.toLowerCase().startsWith(searchTerm)
      );
    });
  }
}
