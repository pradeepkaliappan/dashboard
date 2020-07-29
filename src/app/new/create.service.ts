import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CreateService {

  private baseUrl = '/api/authorBooks';

  uniqueId:number;

  constructor(private http: HttpClient) { }

  setId(idd:number){
    this.uniqueId = idd;
  }

  getId(){
    return this.uniqueId;
  }

  getDetailData(state:number): Observable<any> {
    const url = `${this.baseUrl+'/detailData'}`;
    return this.http.post(`${url}`,state);
  }

  createAuthorBooks(authorBooks: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, authorBooks);
  }

  filterAuthorBooks(authorBooks: Object): Observable<Object> {
    const url = this.baseUrl+'/filter';
    return this.http.post(`${url}`, authorBooks);
  }

  getAuthorBooksList(flag:number): Observable<any> {
    const url = `${this.baseUrl}/${flag}`;
    return this.http.get(`${url}`);
  }

  getPreviousData(): Observable<any> {
    const url = this.baseUrl+'/previous';
    return this.http.get(`${url}`);
  }

  getNextData(): Observable<any> {
    const url = this.baseUrl+'/next';
    return this.http.get(`${url}`);
  }

  getAuthorValuesList(): Observable<any> {
    const url = this.baseUrl+'/authorFetchValue';
    return this.http.get(`${url}`);
  }

  
  getBookValuesList(): Observable<any> {
    const url = this.baseUrl+'/authorBookValue';
    return this.http.get(`${url}`);
  }

  deleteEmployee(id: number): Observable<any> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete(`${url}`, { responseType: 'text' });
  }
}
