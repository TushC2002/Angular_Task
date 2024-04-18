import { Component, Inject, OnInit } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Company } from '../../models/company.model';
import { CompanyComponent } from '../company/company.component';

@Component({
    selector: 'app-company-form',
    templateUrl: './company-form.component.html',
    styleUrls: ['./company-form.component.css']
})
export class CompanyFormComponent implements OnInit {
    company: Company = {
        id: '',
        name: '',
        address: '',
        contactNo: '',
        sector: ''
    };

    constructor(
        public dialogRef: MatDialogRef<CompanyComponent>,
        private companyService: CompanyService,
        @Inject(MAT_DIALOG_DATA) public data: { companyComponent: CompanyComponent }
    ) {}

    ngOnInit(): void {
        this.data.companyComponent.loadCompanies();
    }

    onSubmit(): void {
        this.companyService.addCompany(this.company).subscribe(() => {
            this.dialogRef.close(); 
            this.data.companyComponent.loadCompanies();   
        });
    }

    onCancel(): void {
        this.dialogRef.close();
    }
}
