import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], searchText: string): any[] {

        if (!items) return items;
        if (!searchText) return items;

        searchText = searchText.toLowerCase();
        return items.filter(itm => itm.Name.toLowerCase().includes(searchText));
    }
}