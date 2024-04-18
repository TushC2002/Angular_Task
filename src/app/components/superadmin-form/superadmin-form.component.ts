import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Admin } from '../../models/admin.model';
import { AdminService } from '../../services/admin.service';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../services/company.service';
import { SuperadminComponent } from '../superadmin/superadmin.component';

@Component({
  selector: 'app-superadmin-form',
  templateUrl: './superadmin-form.component.html',
  styleUrls: ['./superadmin-form.component.css']
})
export class SuperadminFormComponent implements OnInit {

  firstName: string = '';
  lastName: string = '';
  email: string = '';
  contactNo: string = '';
  selectedCompany: string = '';
  companies: Company[] = [];

  constructor(
    public dialogRef: MatDialogRef<SuperadminFormComponent>,
    private adminService: AdminService,
    private companyService: CompanyService,
    @Inject(MAT_DIALOG_DATA) public data: { superadminComponent: SuperadminComponent }
  ) { }

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }

  onSubmit(): void {
    this.companyService.getCompanyName(this.selectedCompany).subscribe(companyName => {
      const admin: Admin = {
        id: '',
        firstName: this.firstName,
        lastName: this.lastName,
        email: this.email,
        contactNo: this.contactNo,
        companyId: this.selectedCompany,
        companyName: '' 
      };

      this.adminService.addAdmin(admin).subscribe(() => {
        console.log('Admin added successfully');
        this.data.superadminComponent.loadAdmins(); 
        this.dialogRef.close();
      }, error => {
        console.error('Error adding admin:', error);
      });
    });
  }
  onCancel(): void {
    this.dialogRef.close();
  }
}
