import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CompanyService } from '../../services/company.service';
import { Company } from '../../models/company.model';
import { DownloadDialogComponent } from '../download-dialog/download-dialog.component';
import { CompanyFormComponent } from '../company-form/company-form.component';
import * as Papa from 'papaparse';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent {
  dataSource = new MatTableDataSource<Company>();
  searchQuery: string = '';

  constructor(public dialog: MatDialog, private companyService: CompanyService) {}

  openAddCompanyForm(): void {
    const dialogRef = this.dialog.open(CompanyFormComponent, {
        width: '400px',
        data: { companyComponent: this }
    });

    dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
    });
  }

  openDownloadDialog(): void {
    const dialogRef = this.dialog.open(DownloadDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.downloadData();
      }
    });
  }

  downloadData(): void {
    this.companyService.getCompanies().subscribe(companies => {
      const csvData = Papa.unparse(companies);
      this.downloadCSV(csvData);
    });
  }

  downloadCSV(csvData: string): void {
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'companies.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  loadCompanies(): void {
    this.companyService.getCompanies().subscribe(companies => {
      this.dataSource.data = companies;
    });
  }

  applyFilter(): void {
    const filterValue = this.searchQuery.trim().toLowerCase();
    this.dataSource.filter = filterValue;
  }

  ngOnInit(): void {
    this.loadCompanies();
    this.dataSource.filterPredicate = (data: Company, filter: string) => {
      return data.name.toLowerCase().includes(filter);
    };
  }
}
