import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'change'
})
export class ChangePipe implements PipeTransform {

  transform(value: any, ...args): any {
    console.log(value, args);
    if(args[0])
    {
        return value = value + 'first value is ture';
    }
    else if(args[1] === "singlequote")
    {
      return value = value + "'";
    }
    else{
      return value;
    }
   
  }

}
