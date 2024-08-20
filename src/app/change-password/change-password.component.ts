import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent implements OnInit{

  resetPasswordForm: FormGroup;
  submitted = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  token: string | null = null;

  isPasswordVisible: boolean = false; // Track password visibility

  constructor(private fb: FormBuilder, private authService: AuthService, private route: ActivatedRoute){
    this.resetPasswordForm = this.fb.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });

    // Get the token from the URL
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
    });
  }

  ngOnInit(): void {
      
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible; // Toggle visibility
  }

  passwordMatchValidator(form: FormGroup) {
    return form.get('newPassword')?.value === form.get('confirmPassword')?.value
      ? null : { mismatch: true };
  }

  onSubmit() {
    this.submitted = true;

    if (this.resetPasswordForm.valid && this.token) {
      this.authService.resetPassword(this.token, this.resetPasswordForm.value.newPassword).subscribe(
        response => {
          this.successMessage = 'Password reset successfully!';
          this.errorMessage = null;
        },
        error => {
          this.errorMessage = 'Failed to reset password.';
          this.successMessage = null;
        }
      );
    }
  }


}
