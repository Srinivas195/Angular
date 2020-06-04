import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  myURL = 'http://localhost:8080/api';

  constructor(private http : HttpClient,private router : Router) { 

  }

// posts
postNews(news){
  return this.http.post<any>(`${this.myURL}/postnews`,news);

}
getNews(){
  return this.http.get<any>(`${this.myURL}/getpost`);
}




//Atm

  postatm(atm,cId){
    return this.http.post<any>(`${this.myURL}/atm/${cId}`,atm);
  }

  postcredit(atm,cId){
    return this.http.post<any>(`${this.myURL}/credit/${cId}`,atm);
  }

  // getData(){
  //   return this.http.get<any>(`${this.myURL}/atm/get`);
  // }

  
// getAtmPage(){
//   return this.http.get(`${this.myURL}/atm/get`);
// }

getCustomerPage(pageNo,itemsPerPage, fieldName){
  if(!fieldName){
  return this.http.get<{content : any[] , totalElements :number}>(`${this.myURL}/customers/${pageNo}/${itemsPerPage}`);
}else{
  return this.http.get<{content : any[] , totalElements :number}>(`${this.myURL}/customers/${pageNo}/${itemsPerPage}/${fieldName}`);

}
}


getRequestPage(pageNo,itemsPerPage, fieldName){
  if(!fieldName){
  return this.http.get<{content : any[] , totalElements :number}>(`${this.myURL}/requests/${pageNo}/${itemsPerPage}`);
}else{
  return this.http.get<{content : any[] , totalElements :number}>(`${this.myURL}/requests/${pageNo}/${itemsPerPage}/${fieldName}`);

}
}



getTransactionPage(pageNo,itemsPerPage, fieldName){
  if(!fieldName){
  return this.http.get<{content : any[] , totalElements :number}>(`${this.myURL}/transactions/${pageNo}/${itemsPerPage}`);
}else{
  return this.http.get<{content : any[] , totalElements :number}>(`${this.myURL}/transactions/${pageNo}/${itemsPerPage}/${fieldName}`);

}
}

// Customer
getParticular(id){
  return this.http.get<any>(`${this.myURL}/getusers/${id}`);
}




getCustomer(){
  return this.http.get<any>(`${this.myURL}/getusers`);
}

getFullTrans(){
  return this.http.get<any>(`${this.myURL}/getTransactions`);
}

getCustomerid(id){
  return this.http.get<any>(`${this.myURL}/customer/${id}`);
}

postCustomer(customer){
  return this.http.post<any>(`${this.myURL}/addusers`,customer);

}

postRegister(customer){
  return this.http.post<any>(`${this.myURL}/register`,customer);

}

deleteCustomer(customer){
  return this.http.delete<any>(`${this.myURL}/deleteCustomer/${customer.customerId}`);

}

updateCustomer(customer){
  return this.http.put<any>(`${this.myURL}/users`,customer);
}


// Benefiaciary


getBen(id){
  return this.http.get<any>(`${this.myURL}/myBeneficiary/${id}`);
}

postBen(benefiaciary , id){
  return this.http.post<any>(`${this.myURL}/addBeneficiary/${id}`,benefiaciary);

}
deleteBen(beneficiary){
  return this.http.delete<any>(`${this.myURL}/delete-beneficiary/${beneficiary.beneficiaryId}`);

}


updateBen(benefiaciary){
  return this.http.put<any>(`${this.myURL}/benupdate`,benefiaciary);
}

//Transfer Funds

// "/addRequest/{id}"

postReq(Request , id){
  return this.http.post<any>(`${this.myURL}/addRequest/${id}`,Request);

}

postFund(fund,id){
  return this.http.post<any>(`${this.myURL}/transfer/${id}`,fund);
}

getFund(){
  return this.http.get<any>(`${this.myURL}/transfer/get`);
}


updateApprove(applicant){
  return this.http.put<any>(`http://localhost:8080/api/applicationapprove/${applicant.requestId}`, applicant);
}

updateReject(applicant){
  return this.http.put<any>(`http://localhost:8080/api/applicationreject/${applicant.requestId}`, applicant);
}



getRequestid(id) {
  return this.http.get<any>(`${this.myURL}/myrequest/${id}`);

}


getData() {
  return this.http.get<any>(`${this.myURL}/requests`);

}

getTransaction(id) {
  return this.http.get<any>(`${this.myURL}/myTransaction/${id}`);

}




login(user){
  return this.http.post<any>(`${this.myURL}/login`,user);
}

isUser() : boolean{
    const userData = JSON.parse(localStorage.getItem('userData'));
    if(userData && userData.data.role === "ROLE_USER"){
      return true;
    }else {
      return false;

    }
}

isAdmin() : boolean{
  const userData = JSON.parse(localStorage.getItem('userData'));
  if(userData && userData.data.role === "ROLE_ADMIN"){
    return true;
  }else {
    return false;
  }
}


isLogged() : boolean{
  const userData = JSON.parse(localStorage.getItem('userData'));
  if(userData){
    return true;
  }else {
    return false;

  }
}

logout(){
  localStorage.clear()
  this.router.navigateByUrl('/login');
}




}