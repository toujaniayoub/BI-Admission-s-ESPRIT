import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; 

@Component({
  selector: 'app-dashboard-admission',
  templateUrl: './dashboard-admission.component.html',
  styleUrls: ['./dashboard-admission.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class DashboardAdmissionComponent {
  powerBiUrl: SafeResourceUrl | null = null;
  
  constructor(private sanitizer: DomSanitizer) {} 

  ngOnInit(): void {
    const unsafeUrl = '  https://app.powerbi.com/reportEmbed?reportId=d2051062-dde4-453d-9735-b7fc4cebd802&autoAuth=true&ctid=604f1a96-cbe8-43f8-abbf-f8eaf5d85730&filterPaneEnabled=false&navContentPaneEnabled=false';

    this.powerBiUrl = this.sanitizer.bypassSecurityTrustResourceUrl(unsafeUrl);
  }

  selectedMenu: string = 'dashboard';

  showAdmissionClustering() {
    this.selectedMenu = 'admissionClustering';
  }

}
