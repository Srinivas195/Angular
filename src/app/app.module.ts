import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from "@angular/forms";


import {RouterModule  } from "@angular/router";
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CustomerComponent } from './customer/customer.component';
import { BeneficiaryComponent } from './beneficiary/beneficiary.component';
import { TransferComponent } from './transfer/transfer.component';
import { AtmComponent } from './atm/atm.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
import {MatDialogModule} from '@angular/material/dialog';
import { ListofcustomersComponent } from './listofcustomers/listofcustomers.component';

import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ViewCustomerFulldetailsComponent } from './view-customer-fulldetails/view-customer-fulldetails.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';
import { ListOfBeneficiaryComponent } from './list-of-beneficiary/list-of-beneficiary.component';
import { UpdateBeneficiaryComponent } from './update-beneficiary/update-beneficiary.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatRadioModule} from '@angular/material/radio';
import { LoanPipe } from './search.pipe';
import { SendRequestComponent } from './send-request/send-request.component';
import { ListRequestComponent } from './list-request/list-request.component';
import { AuthGuard } from './login/auth.guard';
import { ProjectService } from './project.service';
import { RequestInterceptor } from './navbar/request.interceptor';
import { TransactionComponent } from './transaction/transaction.component';
import { FulltransactionComponent } from './fulltransaction/fulltransaction.component';
import { WelcomeUserComponent } from './welcome-user/welcome-user.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { ListuserrequestComponent } from './listuserrequest/listuserrequest.component';
import { CreditComponent } from './credit/credit.component';
import { PostnewsComponent } from './postnews/postnews.component';
import { GetnewsComponent } from './getnews/getnews.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { CustomerPipe } from './customer.pipe';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    CustomerComponent,
    BeneficiaryComponent,
    TransferComponent,
    AtmComponent,
    NavbarComponent,
    MaterialComponent,
    ListofcustomersComponent,
    ViewCustomerFulldetailsComponent,
    UpdateCustomerComponent,
    ListOfBeneficiaryComponent,
    UpdateBeneficiaryComponent,
    LoanPipe,
    SendRequestComponent,
    ListRequestComponent,
    TransactionComponent,
    FulltransactionComponent,
    WelcomeUserComponent,
    WelcomeAdminComponent,
    ListuserrequestComponent,
    CreditComponent,
    PostnewsComponent,
    GetnewsComponent,
    CustomerPipe
 
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,MatToolbarModule,MatButtonModule,MatPaginatorModule,MatRadioModule,NgxPaginationModule

,
    

    
    RouterModule.forRoot([
      {path :'login', component : LoginComponent },
      {path :'register', component : RegisterComponent },
      {path :'customer', component : CustomerComponent ,data: {roles :['ROLE_ADMIN']},canActivate:[AuthGuard]},
      {path :'atm', component : AtmComponent },

      {path :'ben', component : BeneficiaryComponent },

      {path :'tran', component : TransferComponent },
      {path :'list', component : ListofcustomersComponent },
      {path : 'viewcus' , component : ViewCustomerFulldetailsComponent},
      {path : 'updatecustomer' , component : UpdateCustomerComponent},
      {path : 'updatebeneficiary' , component : UpdateBeneficiaryComponent},
      {path : 'listben' , component : ListOfBeneficiaryComponent},
      {path : 'sendrequest', component : SendRequestComponent },
      {path : 'getrequest' , component : ListRequestComponent},
      {path : 'trans' , component : TransactionComponent},
      {path : 'fulltrans' , component : FulltransactionComponent},
      {path : 'admin' , component : WelcomeAdminComponent},
      {path : 'user' , component : WelcomeUserComponent},
      {path : 'userreq' , component : ListuserrequestComponent},
      {path : 'credit' , component : CreditComponent},
      {path : 'postnews' , component : PostnewsComponent},
      {path : 'getnews' , component : GetnewsComponent}









      








    ]),
    BrowserAnimationsModule
  ],
  providers: [
    ProjectService,
    {
      provide : HTTP_INTERCEPTORS,
      useClass : RequestInterceptor,
      multi : true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
