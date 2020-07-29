import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';

@Injectable()
export class AreaService {

    private apiUrl = '/api/employees';
    constructor(private http: Http) {
    }

    getgraphdatas(num: number): Promise<number[]> {
        let empHeaders = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.apiUrl + '/graph', JSON.stringify(num), { headers: empHeaders })
            .toPromise()
            .then(response => response.json() as number[])
            .catch(this.handleError);
    }


    private handleError(error: any): Promise<Array<any>> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}