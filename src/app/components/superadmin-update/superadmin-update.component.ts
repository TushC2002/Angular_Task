import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Admin } from '../../models/admin.model';
import { AdminService } from '../../services/admin.service';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-superadmin-update',
  templateUrl: './superadmin-update.component.html',
  styleUrls: ['./superadmin-update.component.css']
})
export class SuperadminUpdateComponent implements OnInit {

  admin!: Admin;
  companies: Company[] = [];

  constructor(
    public dialogRef: MatDialogRef<SuperadminUpdateComponent>,
    private adminService: AdminService,
    private companyService: CompanyService,
    @Inject(MAT_DIALOG_DATA) public data: { admin: Admin }
  ) { }

  ngOnInit(): void {
    this.admin = { ...this.data.admin };
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.companies = companies;
    });
  }

  onSubmit(): void {
    this.adminService.updateAdmin(this.admin).subscribe(() => {
      console.log('Admin updated successfully');
      this.dialogRef.close(true);
    }, error => {
      console.error('Error updating admin:', error);
      this.dialogRef.close(false);
    });
  }

  onCancel(): void {
    this.dialogRef.close(false);
  }
}
