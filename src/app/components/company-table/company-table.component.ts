import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
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
  @ViewChild(MatPaginator) paginator!: MatPaginator; 
  displayedColumns: string[] = ['srNo', 'name', 'address', 'contactNo', 'sector', 'actions'];
  filteredDataSource = new MatTableDataSource<Company>();
  searchQuery: string = '';
  serialNumber: number = 1;

  constructor(private companyService: CompanyService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => {
      const companiesWithSerials = companies.map((company, index) => {
        return { ...company, srNo: index + 1 };
      });
      this.dataSource.data = companiesWithSerials;
      this.applyFilter();
      this.dataSource.paginator = this.paginator; 
    });
  }

  applyFilter(): void {
    const filterValue = this.searchQuery.trim().toLowerCase();
    this.filteredDataSource.data = this.dataSource.data.filter(company =>
      company.name.toLowerCase().includes(filterValue)
    );
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
      width: '400px',             
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
