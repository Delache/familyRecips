
import { User } from './../models/user';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class UserService {
  private Url = 'http://localhost:3000/api/users';
  userSession: User;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(this.Url);
    }
  addUser(user: User): Observable<any> {
    return this.http.post(this.Url, user);
  }
  deleteUser(id: number): Observable<any> {
      return this.http.delete(this.Url + `/${id}`);
  }
  updateUser(user: User): Observable<any> {
      return this.http.put(this.Url + `/${user.id}`, user);
  }
  getUserById(id: number): Observable<any> {
    return this.http.get(this.Url + `/${id}`);
  }
}


