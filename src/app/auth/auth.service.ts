// auth.service.ts
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: User | null = null; 
  isLoggedIn: boolean = false;

  constructor(private userService: UserService, private router: Router) {
    
    this.isLoggedIn = sessionStorage.getItem('isLoggedIn') === 'true'; // Check sessionStorage
    const currentUserData = sessionStorage.getItem('currentUser');
    if (currentUserData) {
      this.currentUser = JSON.parse(currentUserData);
    }
  }

  login(email: string, password: string): void {
    this.userService.getUsers().subscribe(users => {
      const user = users.find(u => u.email === email && u.password === password);
      if (user) {
        this.currentUser = user; 
        this.isLoggedIn = true; 
        sessionStorage.setItem('isLoggedIn', 'true'); // Store login status in sessionStorage
        sessionStorage.setItem('currentUser', JSON.stringify(user)); // Store user data in sessionStorage
        if (user.role === 'admin') {
          this.router.navigate(['/admin-dashboard']);
        } else if (user.role === 'superadmin') {
          this.router.navigate(['/superadmin-dashboard']);
        }
      } else {
        
      }
    });
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn; 
  }

  isAdmin(): boolean {
    return this.currentUser?.role === 'admin';
  }

  isSuperAdmin(): boolean {
    return this.currentUser?.role === 'superadmin'; 
  }

  logout(): void {
    this.currentUser = null; 
    this.isLoggedIn = false; 
    sessionStorage.removeItem('isLoggedIn'); 
    sessionStorage.removeItem('currentUser'); 
    this.router.navigate(['/login']); 
    
  }
}
