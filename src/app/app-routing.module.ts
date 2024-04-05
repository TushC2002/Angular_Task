import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { SuperadminDashboardComponent } from './components/superadmin-dashboard/superadmin-dashboard.component';
import { SuperadminProfileDialogComponent } from './components/superadmin-profile-dialog/superadmin-profile-dialog.component';
import { CompanyComponent } from './components/company/company.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import {SuperadminComponent} from './components/superadmin/superadmin.component'
import { CompanyTableComponent } from './components/company-table/company-table.component';
import { AuthGuard } from './auth/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/redirect', pathMatch: 'full' },
  { path: 'login', component: LoginComponent,},
  { path: 'redirect', component: RedirectComponent ,},
  { path: 'admin-dashboard', component: AdminDashboardComponent, canActivate: [AuthGuard] },
  { 
    path: 'superadmin-dashboard', 
    component: SuperadminDashboardComponent, 
    canActivate: [AuthGuard],
    children: [
      { path: 'profile', component: SuperadminProfileDialogComponent },
      { path: 'company', 
      component: CompanyComponent, 
      children: [
        { path: '', redirectTo: 'table', pathMatch: 'full' },
        { path: 'table', component: CompanyTableComponent }
      ]},
      { path: 'superadmin',component:SuperadminComponent}
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
