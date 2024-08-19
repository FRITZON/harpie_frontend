import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent implements OnInit{

  forgotPasswordForm: FormGroup;
  submitted = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService){
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
      
  }

  onSubmit() {
    this.submitted = true;

    if (this.forgotPasswordForm.valid) {
      this.authService.requestPasswordReset(this.forgotPasswordForm.value.email).subscribe(
        response => {
          this.successMessage = 'Password reset link sent successfully!';
          this.errorMessage = null;
        },
        error => {
          this.errorMessage = 'Failed to send password reset link.';
          this.successMessage = null;
        }
      );
    }
  }

}
