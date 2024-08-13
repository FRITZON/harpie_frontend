import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent implements OnInit{
  email: string = '';
  password: string = '';


  constructor(){

  }


  ngOnInit(): void {
      
  }

  onSubmit(form: NgForm) {
    
}


}
