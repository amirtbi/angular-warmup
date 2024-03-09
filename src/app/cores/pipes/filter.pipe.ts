import { PipeTransform,Pipe } from "@angular/core";

@Pipe({
    name:"filter"
})

export class FilterPipe implements PipeTransform{
    transform(value:any,filterString:string,propName:string){
        if(value.length === 0 || filterString === " "){
            return value;
        }
        const results = []
        for(const recipe of value){
            if(recipe[propName].includes(filterString)) {
                results.push(recipe);
            }
        }
        return results;        
    }
}