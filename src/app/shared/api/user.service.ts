import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import User from '../models/User';

@Injectable()

export default class UserService {

  public API = 'https://localhost:44394/api';
  public USERS_API = `${this.API}/UsersContactDetails`;

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<User>> {
    return this.http.get<Array<User>>(this.USERS_API);
  }

  get(id: string) {
    return this.http.get(`${this.USERS_API}/${id}`);
  }

  save(user: User): Observable<User> {

    let result: Observable<User>;

    if (user.id) {
      result = this.http.put<User>(
        `${this.USERS_API}/${user.id}`,
        user
      );
    }

    return result;
  }

}
