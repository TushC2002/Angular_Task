import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CompanyFormComponent } from '../company-form/company-form.component';
import { CompanyTableComponent } from '../company-table/company-table.component';
import { MatTableDataSource } from '@angular/material/table';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../services/company.service';

@Component({
    selector: 'app-company',
    templateUrl: './company.component.html',
    styleUrls: ['./company.component.css']
})
export class CompanyComponent {
    @ViewChild(CompanyTableComponent) companyTable!: CompanyTableComponent;
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

    loadCompanies(): void {
        this.companyService.getCompanies().subscribe(companies => {
            this.dataSource.data = companies;
        });
    }

    applyFilter(): void {
        console.log('Search Query:', this.searchQuery);
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
