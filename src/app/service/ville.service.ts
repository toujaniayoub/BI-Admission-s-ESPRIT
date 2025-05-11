import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { VilleAdmission } from '../models/ville-admission.model';
import { VILLE_ADMISSION_DATA } from '../data/ville-admission.data';
@Injectable({
  providedIn: 'root'
})
export class VilleService {

  getAdmissionData(): Observable<VilleAdmission[]> {
    return of(VILLE_ADMISSION_DATA);
  }
}