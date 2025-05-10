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
    const unsafeUrl = 'https://app.powerbi.com/reportEmbed?reportId=e57f509d-bb6a-45ea-9bd4-58e736cb67f0&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730';
  
    this.powerBiUrl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
  }
  

  selectedMenu: string = 'dashboard'; 

showRecommendation() {
  this.selectedMenu = 'recommendation';
}

showIndustryClusters() {
    this.selectedMenu = 'industryClusters';
  }



}