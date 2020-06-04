import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class CustomerPipe implements PipeTransform {

  transform(loan: any[],searchValue: any,fieldName) {
    if(!loan){
    return [];
  }
if(!searchValue){
  return loan;
}
searchValue=searchValue.toLowerCase();
return loan.filter(loans => {
  if(isNaN(searchValue )){
    return loans[fieldName].toLowerCase().includes(searchValue);
  } else{
    return loans[fieldName].toString().toLowerCase().includes(searchValue);
  }
}); 
 
}
}