import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit{

  signupForm: FormGroup;
  isPasswordVisible: boolean = false; 
  submitted: boolean = false; 

  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signupForm = this.fb.group({
      first_name: ['', Validators.required],
      last_name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone_one: ['', Validators.required],
      ip_address:['',Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnInit(): void {}

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible; 
  }

  onSubmit() {
    this.submitted = true; 
    if (this.signupForm.valid) {
      this.authService.signup(this.signupForm.value).subscribe(response => {
        console.log('Signup successful', response);
      }, error => {
        console.error('Signup failed', error);
      });
    }
  }
}
