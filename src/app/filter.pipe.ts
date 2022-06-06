import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  // members=['rono','messi','hazard','ozil']

  transform(value:any,searchString:string) {
    // let result=this.members.includes(value)
    if(value.length===0||searchString==""){
      return value
    }
   let members=[]
   
   for( const i of value){

   if(i.indexOf(searchString)>-1){
    members.push(i)
   } 
    
    
  
   }
  
   return members;


  }

}
