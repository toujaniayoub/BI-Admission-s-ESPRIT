import { Component, OnInit, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
import { IndustryCountsService, IndustryCount } from 'src/app/service/industry-counts.service';
import ChartDataLabels from 'chartjs-plugin-datalabels'; // Import the plugin


@Component({
  selector: 'app-industry-clusters',
  templateUrl: './industry-clusters.component.html',
  styleUrls: ['./industry-clusters.component.css']
})
export class IndustryClustersComponent implements OnInit, AfterViewInit {
  industryCounts: IndustryCount[] = [];
  loading: boolean = true;
  error: string = '';
  @ViewChild('barChart') barChart!: ElementRef;

  constructor(
    private industryCountsService: IndustryCountsService,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.fetchIndustryCounts();
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
    if (!this.loading && !this.error) {
      this.createBarChart();
    } else {
      console.log('Data not ready for chart creation in ngAfterViewInit');
    }
  }

  fetchIndustryCounts(): void {
    this.loading = true;
    this.industryCountsService.getIndustryCounts().subscribe({
      next: (data) => {
        console.log('Data from API:', data);
        this.industryCounts = data;
        this.loading = false;
        this.cdRef.detectChanges();
        console.log('fetchIndustryCounts next complete');
        this.createBarChart();
      },
      error: (err) => {
        this.error = 'Error fetching data.';
        console.error(err);
        this.loading = false;
      }
    });
  }

  createBarChart(): void {
    console.log('createBarChart called');
    if (!this.barChart) {
      console.error('barChart element is NOT available in createBarChart!');
      return;
    }

    const ctx = this.barChart.nativeElement.getContext('2d');
    if (!ctx) {
      console.error('2D context is NOT available.');
      return;
    }

    console.log('Data for chart:', this.industryCounts);

    try {
      new Chart(ctx, {
        type: 'bar',
        data: {
          labels: this.industryCounts.map(item => item.Industry),
          datasets: [{
            label: 'Count of Alumini',
            data: this.industryCounts.map(item => item['Count of Alumini_Id']),
            backgroundColor: '#850303'
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            },
            x: {
              ticks: {
                maxRotation: 45,
                autoSkip: true,
                maxTicksLimit: 10
              }
            }
          },
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            title: {
              display: true,
              text: 'Alumni Distribution by Industry',
              font: {
                size: 14
              }
            },
            legend: {
              display: true,
              position: 'bottom',
            },
            // BEGIN: Add this plugin to display data labels
            datalabels: {
              anchor: 'end',
              align: 'top',
              font: {
                size: 10
              },
              color: 'black',
              formatter: (value, context) => {
                return value;
              }
            }
            // END: Add this plugin to display data labels
          }
        },
        // BEGIN:  Ensure you have this plugin registered globally or imported here
        plugins: [ChartDataLabels]
        // END: Ensure you have this plugin registered globally or imported here
      });
      console.log('Chart created successfully');
    } catch (chartError) {
      console.error('Error creating chart:', chartError);
      this.error = 'Error creating the chart.';
    }
  }
}