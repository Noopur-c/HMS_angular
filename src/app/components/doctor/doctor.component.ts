import { Component, OnInit } from '@angular/core';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-doctor',
  standalone: true,
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  doctors: any[] = [];
  newDoctor = { name: '', specialization: '', phone: '' };

  constructor(private doctorService: DoctorService) {}

  ngOnInit() {
    this.loadDoctors();
  }

  loadDoctors() {
    this.doctorService.getDoctors().subscribe(data => {
      this.doctors = data;
    });
  }

  addDoctor() {
    this.doctorService.addDoctor(this.newDoctor).subscribe(() => {
      this.loadDoctors();
      this.newDoctor = { name: '', specialization: '', phone: '' };
    });
  }

  deleteDoctor(id: number) {
    this.doctorService.deleteDoctor(id).subscribe(() => {
      this.loadDoctors();
    });
  }
}
