import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admission-forecast',
  templateUrl: './admission-forecast.component.html',
  styleUrls: ['./admission-forecast.component.css']
})
export class AdmissionForecastComponent implements OnInit {
  forecast: any[] = [];
  error = '';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:5000/api/forecast').subscribe({
      next: (data) => this.forecast = data,
      error: (err) => this.error = 'Error fetching forecast data.'
    });
  }
}
