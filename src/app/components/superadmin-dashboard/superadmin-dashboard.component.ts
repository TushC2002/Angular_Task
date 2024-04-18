import { Component , } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SuperadminProfileDialogComponent } from '../superadmin-profile-dialog/superadmin-profile-dialog.component';
import { AuthGuard } from '../../auth/auth.guard';

@Component({
  selector: 'app-superadmin-dashboard',
  templateUrl: './superadmin-dashboard.component.html',
  styleUrls: ['./superadmin-dashboard.component.css']
})
export class SuperadminDashboardComponent {

  constructor(public dialog: MatDialog ,private authGuard: AuthGuard) {}

  openProfileDialog(): void {
    this.dialog.open(SuperadminProfileDialogComponent, {
      width: '500px',
      data: { role: 'superadmin', profileImage: 'path/to/profile/image' }
    });
  }

  
}
