import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value:any,searchString:string) {
    if(value.length===0||searchString==""){
      return value
    }
   let members=[]
   for( const i of value){
   if(i.indexOf(searchString)>-1){
    members.push(i)
   }
  
 }
   return members
  }

}
