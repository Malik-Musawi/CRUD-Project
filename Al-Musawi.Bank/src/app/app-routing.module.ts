import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/bank/home/home.component';
import { RegisterComponent } from './components/bank/register/register.component';
import { DashboardComponent } from './components/bank/dashboard/dashboard.component';
import { AccountComponent } from './components/bank/account/account.component';
import { TransactionComponent } from './components/bank/transaction/transaction.component';
import { HistoryComponent } from './components/bank/history/history.component';
import { AdminComponent } from './components/bank/admin/admin.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'account', component: AccountComponent},
  { path: 'transaction', component: TransactionComponent},
  { path: 'history', component: HistoryComponent},
  { path: 'admin', component: AdminComponent} // Assuming only logged in users can access this
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }