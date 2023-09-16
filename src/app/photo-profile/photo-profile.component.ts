import { Component, Input, OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-profile',
  templateUrl: './photo-profile.component.html',
  styleUrls: ['./photo-profile.component.css'],
})
export class PhotoProfileComponent implements OnInit {
  @Input() employeeId: number = 0;
  @Input() profilePhoto : any;

  successMessage: string = '';
  errorMessage: string = '';

  uploadedPhotoProfile: File | undefined;

  constructor(private employeeService: EmployeeService, private router: Router) {}

  ngOnInit(): void {
    
  }

  onPhotoProfileChange(event: any) {
    this.uploadedPhotoProfile = event.target.files[0];
  }

  onPhotoProfileUpload() {
    const photoProfileFormData = new FormData();

    //check it uploadedPhProfile :
    if (this.uploadedPhotoProfile) {
      photoProfileFormData.append(
        'photoProfile',
        this.uploadedPhotoProfile,
        this.uploadedPhotoProfile.name
      );
    }

    this.employeeService
      .uploadPhotoProfile(this.employeeId, photoProfileFormData)
      .subscribe((res) => {
        //For the photo to be seen immediately : 
        this.successMessage = 'Photo Profile was uploaded successfully!';
      });
  }
}
