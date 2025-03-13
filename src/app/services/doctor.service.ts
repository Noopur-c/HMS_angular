import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  private apiUrl = 'http://localhost:3000/doctors'; // Adjust based on your backend

  constructor(private http: HttpClient) {}

  getDoctors(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  addDoctor(doctorData: any): Observable<any> {
    return this.http.post(this.apiUrl, doctorData);
  }

  getDoctorById(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updateDoctor(id: number, doctorData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, doctorData);
  }

  deleteDoctor(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}

