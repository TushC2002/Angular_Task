import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private usersUrl = 'assets/db.json'; 

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<{ users: User[] }>(this.usersUrl).pipe(
      map(data => data.users)
    );
  }

  
}
