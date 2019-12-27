import { Department } from './department';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  readonly url = 'http://localhost:3000/departments';

  constructor(private http: HttpClient) { }

  get(): Observable<Department[]> {
    return this.http.get<Department[]>(this.url);
  }

  add(d: Department): Observable<Department> {
    return this.http.post<Department>(this.url, d);
  }
}

