import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/bank/home/home.component';
import { RegisterComponent } from './components/bank/register/register.component';
import { DashboardComponent } from './components/bank/dashboard/dashboard.component';
import { AccountComponent } from './components/bank/account/account.component';
import { TransactionComponent } from './components/bank/transaction/transaction.component';
import { HistoryComponent } from './components/bank/history/history.component';
import { AdminComponent } from './components/bank/admin/admin.component';
import { LoginComponent } from './components/bank/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    DashboardComponent,
    AccountComponent,
    TransactionComponent,
    HistoryComponent,
    AdminComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
