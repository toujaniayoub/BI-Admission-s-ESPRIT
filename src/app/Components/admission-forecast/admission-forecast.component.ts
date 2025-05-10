import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { tap } from 'rxjs/operators';

@Component({
    selector: 'app-admission-forecast',
    templateUrl: './admission-forecast.component.html',
    styleUrls: ['./admission-forecast.component.css']
})
export class AdmissionForecastComponent implements OnInit, AfterViewInit {
    forecast: any[] = [];
    error = '';
    @ViewChild('forecastChart') forecastChart!: ElementRef;
    chart: Chart | null = null;
    chartCreated = false;

    constructor(
        private http: HttpClient,
        private cdRef: ChangeDetectorRef
    ) { }

    ngOnInit(): void {
        this.fetchForecastData();
    }

    ngAfterViewInit(): void {
        console.log('ngAfterViewInit called');
        this.tryCreateChart();
    }

    fetchForecastData(): void {
        this.http.get<any[]>('http://localhost:5000/api/forecast').pipe(
            tap(data => {
                this.forecast = data;
                console.log('Data received:', data);
            })
        ).subscribe({
            next: () => this.tryCreateChart(),
            error: (err) => this.error = 'Error fetching forecast data.'
        });
    }

    tryCreateChart(): void {
        console.log('tryCreateChart called:');
        console.log('  forecastChart:', this.forecastChart);
        console.log('  chartCreated:', this.chartCreated);
        console.log('  forecast.length:', this.forecast.length);

        if (this.forecastChart && this.forecastChart.nativeElement && !this.chartCreated && this.forecast.length > 0) {
            setTimeout(() => {
                this.createForecastChart();
            }, 0);
        } else {
            console.log('Chart creation conditions not met.');
        }
    }

    createForecastChart(): void {
        console.log('createForecastChart called'); // Added logging
        if (!this.forecastChart || !this.forecastChart.nativeElement) {
            console.error('forecastChart element is not available.');
            return;
        }

        const ctx = this.forecastChart.nativeElement.getContext('2d');
        if (!ctx) {
            console.error('2D context is not available.');
            return;
        }

        try {
            this.chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: this.forecast.map(item => new Date(item.ds).toLocaleDateString()),
                    datasets: [
                        {
                            label: 'Forecast',
                            data: this.forecast.map(item => item.yhat),
                            borderColor: 'blue',
                            fill: false
                        },
                        {
                            label: 'Lower Bound',
                            data: this.forecast.map(item => item.yhat_lower),
                            borderColor: 'rgba(0, 0, 255, 0.3)',
                            fill: '-1'
                        },
                        {
                            label: 'Upper Bound',
                            data: this.forecast.map(item => item.yhat_upper),
                            borderColor: 'rgba(0, 0, 255, 0.3)',
                            fill: '-1'
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            type: 'time',
                            time: {
                                unit: 'day',
                                displayFormats: {
                                    day: 'MMM DD'
                                }
                            },
                            title: {
                                display: true,
                                text: 'Date'
                            }
                        },
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Number of Applications'
                            }
                        }
                    },
                    plugins: {
                        title: {
                            display: true,
                            text: '7-Day Admission Application Forecast',
                            font: {
                                size: 16
                            }
                        },
                        legend: {
                            display: true,
                            position: 'bottom'
                        }
                    }
                }
            });
            this.chartCreated = true;
            this.cdRef.detectChanges();
        } catch (error) {
            console.error('Error creating chart:', error);
            this.error = 'Error creating chart.';
        }

    }
}