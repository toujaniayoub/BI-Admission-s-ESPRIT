// src/app/components/admission-clustering/admission-clustering.component.ts
import { Component, OnInit } from '@angular/core';
import { VilleAdmission } from '../../models/ville-admission.model';
import { VilleService } from '../../service/ville.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-admission-clustering',
  templateUrl: './admission-clustering.component.html',
  styleUrls: ['./admission-clustering.component.css']
})
export class AdmissionClusteringComponent implements OnInit {
  admissionData: VilleAdmission[] = [];
  targetGoal: number = 30; // Default goal
  selectedVille: string = '';

  constructor(private villeService: VilleService) {}

  ngOnInit(): void {
    this.loadAdmissionData();
  }

  loadAdmissionData(): void {
    this.villeService.getAdmissionData().subscribe(data => {
      this.admissionData = data;
    });
  }

  getBarColor(rate: number): string {
    return rate >= this.targetGoal ? 'green' : 'red';
  }

  updateGoal(event: any): void {
    this.targetGoal = +event.target.value; // Convert to number
  }

  selectVille(ville: string) {
    this.selectedVille = ville;
  }
}