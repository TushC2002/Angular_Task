import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-superadmin-profile-dialog',
  templateUrl: './superadmin-profile-dialog.component.html',
})
export class SuperadminProfileDialogComponent {
  currentUser: User | null = null; 

  constructor(
    public dialogRef: MatDialogRef<SuperadminProfileDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private authService: AuthService,
    private router: Router
  ) {
    this.currentUser = this.authService.currentUser;
  }

  close(): void {
    this.dialogRef.close();
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
    this.dialogRef.close(); 
  }
}
