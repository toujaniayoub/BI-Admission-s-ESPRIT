import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface IndustryCount {
    Industry: string;
    'Count of Alumini_Id': number;
}

@Injectable({
    providedIn: 'root'
})
export class IndustryCountsService {
    private apiUrl = 'http://127.0.0.1:5000/api/industry_counts';

    constructor(private http: HttpClient) { }

    getIndustryCounts(): Observable<IndustryCount[]> {
        return this.http.get<IndustryCount[]>(this.apiUrl);
    }
}