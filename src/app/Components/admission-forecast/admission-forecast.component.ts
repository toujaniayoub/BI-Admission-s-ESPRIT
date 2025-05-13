import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface ForecastData {
  ds: string;
  yhat: number;
  target?: number;
  status?: string;
}

@Component({
  selector: 'app-admission-forecast',
  templateUrl: './admission-forecast.component.html',
  styleUrls: ['./admission-forecast.component.css']
})
export class AdmissionForecastComponent implements OnInit {
  forecast: ForecastData[] = [];
  error = '';
  targetApplications: number | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchForecastData();
  }

  fetchForecastData(): void {
    const params = this.targetApplications !== null ? { target: this.targetApplications.toString() } : {};
    this.getForecastData('http://localhost:5000/api/forecast', params)
      .subscribe({
        next: (data) => {
          this.forecast = data;
        },
        error: (err) => {
          this.error = 'Error fetching forecast data.';
          console.error(err);
        }
      });
  }

  // Helper function to handle HTTP request and type assertion
  private getForecastData(url: string, params: any): Observable<ForecastData[]> {
    return this.http.get<any>(url, { params, observe: 'response' })
      .pipe(
        map((response: HttpResponse<any>) => {
          if (response.status === 200) {
            return response.body as ForecastData[]; // Explicitly assert the type
          } else {
            throw new Error(`Server returned status: ${response.status}`);
          }
        })
      );
  }


  updateForecast(): void {
    this.fetchForecastData();
  }

  getCellColor(status: string | undefined): string {
    if (status === 'pass') {
      return 'lightgreen';
    }
    return '';
  }

  getFontColor(status: string | undefined): string {
    if (status === 'pass') {
      return 'black';
    }
    return '';
  }
}