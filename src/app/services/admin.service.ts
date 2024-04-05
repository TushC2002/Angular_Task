import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Admin } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  private apiUrl = 'http://localhost:3000/admins';
  private companyUrl = 'http://localhost:3000/companies';
  private adminIdCounter: number = 0; 

  constructor(private http: HttpClient) { }

  getAdmins(): Observable<Admin[]> {
    return this.http.get<Admin[]>(this.apiUrl);
  }

  addAdmin(admin: Admin): Observable<Admin> {
    admin.id = (this.adminIdCounter++).toString();
    return this.http.post<Admin>(this.apiUrl, admin);
  }

  deleteAdmin(adminId: string): Observable<void> {
    const url = `${this.apiUrl}/${adminId}`;
    return this.http.delete<void>(url);
  }

  getCompanyName(companyId: string): Observable<string> {
    const url = `${this.companyUrl}/${companyId}`;
    return this.http.get<string>(url);
  }

  updateAdmin(admin: Admin): Observable<Admin> {
    const url = `${this.apiUrl}/${admin.id}`;
    return this.http.put<Admin>(url, admin);
  }
  
}
