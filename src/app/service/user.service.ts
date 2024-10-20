import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../models/user';
import { Observable } from 'rxjs';
import { IRegister, IUserRegistered } from '../models/register';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  api = "https://reqres.in/api/users"

  constructor(private http: HttpClient) { }

 

  getUser(page: number, perPage: number): Observable<IUser>{

    const x = `${this.api}?page=${page}&perPage=${perPage}`;
    return this.http.get<IUser>(x)
  }

  //Post di registrazione

  registrationUser(body: IRegister): Observable<IUserRegistered> {
    return this.http.post<IUserRegistered>(this.api, body);
  }

  getById(id: number) {

    const x = `${this.api}/${id}`;
    return this.http.get(x);
  }
}

