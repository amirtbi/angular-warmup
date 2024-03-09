import { PipeTransform,Pipe } from "@angular/core";

@Pipe({
    name:"shorten"
})
export class ShortenLengthPipe implements PipeTransform{
    transform(value: any,limit:number) {
        if(value.length > 20){
            return value.substr(0,limit) + "...";
        }
        return value;
    }
}