import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private apiUrl = 'http://localhost:3000/companies'; 

  constructor(private http: HttpClient) {}

  addCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.apiUrl, company);
  }
  
  getCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

  getCompanyName(companyId: string): Observable<string> {
    const url = `${this.apiUrl}/${companyId}`;
    return this.http.get<string>(url);
  }

  updateCompany(company: Company): Observable<Company> {
    const url = `${this.apiUrl}/${company.id}`;
    return this.http.put<Company>(url, company);
  }

  deleteCompany(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}


