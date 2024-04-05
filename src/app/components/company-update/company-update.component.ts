import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Company } from '../../models/company.model';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-company-update',
  templateUrl: './company-update.component.html',
  styleUrls: ['./company-update.component.css']
})
export class CompanyUpdateComponent implements OnInit {
  company!: Company;

  constructor(
    public dialogRef: MatDialogRef<CompanyUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { company: Company },
    private companyService: CompanyService
  ) {}

  ngOnInit(): void {
    this.company = { ...this.data.company }; 
  }

  onSubmit(): void {
    this.companyService.updateCompany(this.company).subscribe(() => {
      console.log('Company updated successfully');
      this.dialogRef.close(true); 
    }, error => {
      console.error('Error updating company:', error);
    });
  }

  onCancel(): void {
    this.dialogRef.close(); 
  }
}
