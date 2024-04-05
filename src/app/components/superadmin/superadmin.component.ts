import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuperadminFormComponent } from '../superadmin-form/superadmin-form.component';
import { SuperadminTableComponent } from '../superadmin-table/superadmin-table.component';

@Component({
  selector: 'app-superadmin',
  templateUrl: './superadmin.component.html',
  styleUrls: ['./superadmin.component.css']
})
export class SuperadminComponent {
  @ViewChild(SuperadminTableComponent) superadminTable!: SuperadminTableComponent;

  constructor(public dialog: MatDialog) { }

  openAddAdminForm(): void {
    const dialogRef = this.dialog.open(SuperadminFormComponent, {
      width: '400px',
      data: { superadminComponent: this }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  loadAdmins(): void {
    this.superadminTable.loadAdmins();
  }
}
