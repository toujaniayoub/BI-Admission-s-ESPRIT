import { Component } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-skill-recommendation',
  templateUrl: './skill-recommendation.component.html',
  styleUrls: ['./skill-recommendation.component.css']
})
export class SkillRecommendationComponent {
  jobTitle: string = '';
  recommendedSkills: string[] = [];
  loading: boolean = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  getRecommendations() {
    if (!this.jobTitle.trim()) {
      this.error = 'Please enter a job title.';
      return;
    }

    this.loading = true;
    this.recommendedSkills = [];
    this.error = null;

    const formData = new FormData();
    formData.append('position', this.jobTitle);

    this.http.post<any>('http://localhost:5000/skills', formData).subscribe({
      next: (response) => {
        this.recommendedSkills = response.skills || [];
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to fetch skills.';
        this.loading = false;
      }
    });
    
  }
}
