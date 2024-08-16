import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css'
})
export class ChangePasswordComponent implements OnInit{


  isPasswordVisible: boolean = false; // Track password visibility

  constructor(){}

  ngOnInit(): void {
      
  }

  onSubmit(form: NgForm) {
    
  }

  togglePasswordVisibility() {
    this.isPasswordVisible = !this.isPasswordVisible; // Toggle visibility
  }


 

}
