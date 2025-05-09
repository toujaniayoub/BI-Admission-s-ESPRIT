import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-dashboard-admission',
  templateUrl: './dashboard-admission.component.html'
})
export class DashboardAdmissionComponent {
  powerBiUrl: SafeResourceUrl;
  selectedMenu = 'dashboard-admission'; // Ensures iframe displays

  constructor(private sanitizer: DomSanitizer) {
    this.powerBiUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      'https://app.powerbi.com/reportEmbed?reportId=56549463-b086-49b1-86ad-3bda9860c330&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730'
    );
  }
}
