import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'onlyOneError',
    standalone: false
})


export class OnlyOneErrorPipe implements PipeTransform{
    transform(allErrors:any,errorsPriority:string[]):any {
        if(!allErrors){
            return null; // No errors to process
        }

        const onlyOneError: any = {};

        for(let error of errorsPriority) {
            if(allErrors[error]) {
                onlyOneError[error] = allErrors[error];
                break; // Stop at the first error found
            }
        }

        return onlyOneError
    }
}
