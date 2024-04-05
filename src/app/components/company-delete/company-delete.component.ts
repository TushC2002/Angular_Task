import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-company-delete',
  templateUrl: './company-delete.component.html',
  styleUrls: ['./company-delete.component.css']
})
export class CompanyDeleteComponent {

  constructor(public dialogRef: MatDialogRef<CompanyDeleteComponent>) {}

  confirmDelete(): void {
   
    this.dialogRef.close(true); 
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

