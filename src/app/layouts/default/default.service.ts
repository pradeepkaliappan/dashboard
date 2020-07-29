import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Headers, RequestOptions } from '@angular/http';
import {Default} from './default';
import {Gridsize} from './gridsize';

@Injectable()
export class DefaultService {
    
private apiUrl = '/api/employees';
constructor(private http: Http) {
 }
 createEmployee(defaultEntity: Default): Promise<Array<Default>> {
    let empHeaders = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, JSON.stringify(defaultEntity), { headers: empHeaders })
    .toPromise()
    .then(response => response.json() as Default[])
    .catch(this.handleError);
    }
    createGridRow(gridsizeEntity: Gridsize): Promise<Array<Gridsize>> {
        let empHeaders = new Headers({ 'Content-Type': 'application/json' });
        let url =this.apiUrl+'/grid';
        return this.http.post(url, JSON.stringify(gridsizeEntity), { headers: empHeaders })
        .toPromise()
        .then(response => response.json() as Gridsize[])
        .catch(this.handleError);
        }
        saveGridRow(gridsizeEntity: Gridsize): Promise<Array<Gridsize>> {
            let empHeaders = new Headers({ 'Content-Type': 'application/json' });
            let url =this.apiUrl+'/gridsave';
            return this.http.post(url, JSON.stringify(gridsizeEntity), { headers: empHeaders })
            .toPromise()
            .then(response => response.json() as Gridsize[])
            .catch(this.handleError);
            }

    findAll(): Promise<Array<Gridsize>> {
        return this.http.get(this.apiUrl)
        .toPromise()
        .then(response => response.json() as Gridsize[])
        .catch(this.handleError);
        }
        filterdategrid(date: string): Promise<Array<Gridsize>> {
            let empHeaders = new Headers({ 'Content-Type': 'application/json' });
            let url = this.apiUrl+'/date';
            return this.http.post(url, JSON.stringify(date), { headers: empHeaders })
            .toPromise()
            .then(response => response.json() as Gridsize[])
            .catch(this.handleError);
            }
            getTotalValue(){
                let url = this.apiUrl+'/total';
                return this.http.get(url).toPromise().then(response=>response.json()as number);
            }


    private handleError(error: any): Promise<Array<any>> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
        }
}

