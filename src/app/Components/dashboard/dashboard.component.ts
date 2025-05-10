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
    const unsafeUrl = 'https://app.powerbi.com/reportEmbed?reportId=fd9243e6-3c23-40e3-b52f-f659de6f22ee&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&filterPaneEnabled=false&navContentPaneEnabled=false';
  
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