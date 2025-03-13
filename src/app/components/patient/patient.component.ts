import { Component, OnInit } from '@angular/core';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient',
  standalone: true,
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {
  patients: any[] = [];

  constructor(private patientService: PatientService) {}

  ngOnInit() {
    this.patientService.getPatients().subscribe((data) => {
      this.patients = data;
    });
  }
}

