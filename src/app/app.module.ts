import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';


import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { UserService } from './services/user.service';
import { ReactiveFormsModule } from '@angular/forms'; 
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SuperadminDashboardComponent } from './components/superadmin-dashboard/superadmin-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SuperadminProfileDialogComponent } from './components/superadmin-profile-dialog/superadmin-profile-dialog.component';
import { CompanyComponent } from './components/company/company.component';
import { CompanyFormComponent } from './components/company-form/company-form.component';
import { CompanyTableComponent } from './components/company-table/company-table.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { SuperadminComponent } from './components/superadmin/superadmin.component';
import { SuperadminFormComponent } from './components/superadmin-form/superadmin-form.component';
import { SuperadminTableComponent } from './components/superadmin-table/superadmin-table.component';
import { SuperadminUpdateComponent } from './components/superadmin-update/superadmin-update.component';
import { DeleteConfirmationDialogComponent } from './components/delete-confirmation-dialog/delete-confirmation-dialog.component';
import { CompanyUpdateComponent } from './components/company-update/company-update.component';
import { CompanyDeleteComponent } from './components/company-delete/company-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SuperadminDashboardComponent,
    AdminDashboardComponent,
    SuperadminProfileDialogComponent,
    CompanyComponent,
    CompanyFormComponent,
    CompanyTableComponent,
    RedirectComponent,
    SuperadminComponent,
    SuperadminFormComponent,
    SuperadminTableComponent,
    SuperadminUpdateComponent,
    DeleteConfirmationDialogComponent,
    CompanyUpdateComponent,
    CompanyDeleteComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [
    provideAnimationsAsync(),
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
