import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.css']
})
export class RedirectComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    if (this.authService.isLoggedIn) {
      if (this.authService.currentUser?.role === 'admin') {
        this.router.navigate(['/admin-dashboard']);
      } else if (this.authService.currentUser?.role === 'superadmin') {
        this.router.navigate(['/superadmin-dashboard']);
      }
    } else {
      this.router.navigate(['/login']);
    }
  }

}
