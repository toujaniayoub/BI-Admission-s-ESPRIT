import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; 

@Component({
  selector: 'app-dashboard', 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] ,
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit { 

  powerBiUrl: SafeResourceUrl | null = null;
  
  constructor(private sanitizer: DomSanitizer) {} 

  ngOnInit(): void {
    const unsafeUrl = 'https://app.powerbi.com/reportEmbed?reportId=d2051062-dde4-453d-9735-b7fc4cebd802&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730';
  
    this.powerBiUrl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
  }
  

  selectedMenu: string = 'dashboard'; 

showRecommendation() {
  this.selectedMenu = 'recommendation';
}

showIndustryClusters() {
    this.selectedMenu = 'industryClusters';
  }

  showAdmissionClustering() {
    this.selectedMenu = 'admissionClustering';
  }



}