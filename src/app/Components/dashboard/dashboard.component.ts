import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; // Import DomSanitizer

@Component({
  selector: 'app-dashboard', // Make sure selector matches your component
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] // Add component-specific styles if needed
})
export class DashboardComponent implements OnInit { // Implement OnInit

  powerBiUrl: SafeResourceUrl | null = null; // Property to hold the sanitized URL
  
  // Inject DomSanitizer
  constructor(private sanitizer: DomSanitizer) {} 

  ngOnInit(): void {
    // The Power BI embed URL provided by the user
    const unsafeUrl = 'https://app.powerbi.com/reportEmbed?reportId=fe6218bd-8305-448b-b6d0-21d2deb3512a&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730';
    
    // Sanitize the URL for use in the iframe's [src]
    this.powerBiUrl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
  }

}