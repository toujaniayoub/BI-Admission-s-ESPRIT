import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; 

@Component({
  selector: 'app-dashboard', 
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] 
})
export class DashboardComponent implements OnInit { 

  powerBiUrl: SafeResourceUrl | null = null;
  
  constructor(private sanitizer: DomSanitizer) {} 

  ngOnInit(): void {
    const unsafeUrl = 'https://app.powerbi.com/reportEmbed?reportId=fe6218bd-8305-448b-b6d0-21d2deb3512a&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730';

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