import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  
  signinForm: FormGroup;
  isPasswordVisible: boolean = false; // Track password visibility
  submitted: boolean = false; // Track if the form has been submitted

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signinForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible; // Toggle visibility
  }

  onSubmit() {
    this.submitted = true; // Set submitted to true when the button is clicked
    if (this.signinForm.valid) {
      this.authService.signin(this.signinForm.value).subscribe(response => {
        console.log('Signin successful', response);
      }, error => {
        console.error('Signin failed', error);
      });
    }
  }
}
