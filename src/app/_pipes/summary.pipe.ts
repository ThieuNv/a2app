import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      let i = 0;
      if (value[50] != " ") {
        let res = value.substring(40, 60);
        i = res.indexOf(" ");
      }
      return value.substring(0, 40 + i).trim() + " ...";
    }
  }
}
