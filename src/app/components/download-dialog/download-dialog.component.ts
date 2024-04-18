import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-download-dialog',
  templateUrl: './download-dialog.component.html',
})
export class DownloadDialogComponent {

  constructor(public dialogRef: MatDialogRef<DownloadDialogComponent>) {}

  onDownload(): void {
    this.dialogRef.close(true);
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}
