import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  isPasswordVisible: boolean = false; // Track password visibility


  constructor(){

  }
  
  ngOnInit(): void {
      
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible; // Toggle visibility
  }

  
  onSubmit(form: NgForm){

}
}