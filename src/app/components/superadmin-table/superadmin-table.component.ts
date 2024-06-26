import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Admin } from '../../models/admin.model';
import { MatDialog } from '@angular/material/dialog';
import { SuperadminUpdateComponent } from '../superadmin-update/superadmin-update.component';
import { CompanyService } from '../../services/company.service';
import { DeleteConfirmationDialogComponent } from '../delete-confirmation-dialog/delete-confirmation-dialog.component';

@Component({
  selector: 'app-superadmin-table',
  templateUrl: './superadmin-table.component.html',
  styleUrls: ['./superadmin-table.component.css']
})
export class SuperadminTableComponent implements OnInit {

  admins: Admin[] = [];
  displayedColumns: string[] = ['srNo','fullName', 'contactNo', 'companyName', 'actions'];

  constructor(
    private adminService: AdminService,
    public dialog: MatDialog,
    private companyService: CompanyService
  ) { }

  ngOnInit(): void {
    this.loadAdmins();
  }

  loadAdmins(): void {
    this.adminService.getAdmins().subscribe(admins => {
      const adminsWithSerials = admins.map((admin, index) => {
        return { ...admin, srNo: index + 1 };
      });
      this.admins = adminsWithSerials;
      this.fetchCompanyNames();
    });
  }
  

  fetchCompanyNames(): void {
    this.admins.forEach(admin => {
      this.companyService.getCompanyName(admin.companyId).subscribe({
        next: companyName => {
          admin.companyName = companyName;
        },
        error: error => {
          console.error('Error fetching company name:', error);
        }
      });
    });
  }

  updateAdmin(admin: Admin): void {
    const dialogRef = this.dialog.open(SuperadminUpdateComponent, {
      width: '400px',
      data: { admin }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        this.loadAdmins();
      }
    });
  }

  openDeleteConfirmationDialog(adminId: string): void {
    const dialogRef = this.dialog.open(DeleteConfirmationDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        this.deleteAdmin(adminId);
      }
    });
  }

  deleteAdmin(adminId: string): void {
    this.adminService.deleteAdmin(adminId).subscribe(() => {
      console.log('Admin deleted successfully');
      this.loadAdmins(); 
    }, error => {
      console.error('Error deleting admin:', error);
    });
  }

  zoomIn(event: MouseEvent): void {
    const row = event.currentTarget as HTMLTableRowElement;
    row.style.transform = 'scale(1)';
    row.style.transformOrigin = 'left';
  }
  
  zoomOut(event: MouseEvent): void {
    const row = event.currentTarget as HTMLTableRowElement;
    row.style.transform = 'scale(1)';
    row.style.transformOrigin = 'left';
  }
}
