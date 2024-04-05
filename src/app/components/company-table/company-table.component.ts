import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../services/company.service';
import { CompanyDeleteComponent } from '../company-delete/company-delete.component';
import { CompanyUpdateComponent } from '../company-update/company-update.component';

@Component({
  selector: 'app-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.css']
})
export class CompanyTableComponent implements OnInit {
  @Input() dataSource = new MatTableDataSource<Company>();
  displayedColumns: string[] = ['name', 'address', 'contactNo', 'sector', 'actions'];

  constructor(private companyService: CompanyService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.dataSource.data = companies;
    });
  }

  openUpdateDialog(company: Company): void {
    const dialogRef = this.dialog.open(CompanyUpdateComponent, {
      width: '400px',
      data: { company }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        this.loadCompanies();
      }
    });
  }

  openDeleteDialog(companyId: string): void {
    const dialogRef = this.dialog.open(CompanyDeleteComponent, {
      width: '500px',
      height:'400px',

    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) { 
        this.deleteCompany(companyId);
      }
    });
  }

  deleteCompany(id: string): void {
    this.companyService.deleteCompany(id).subscribe(() => {
      console.log('Company deleted successfully');
      this.loadCompanies();
    }, error => {
      console.error('Error deleting company:', error);
    });
  }
}
