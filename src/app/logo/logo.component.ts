import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrl: './logo.component.css'
})
export class LogoComponent implements OnInit{

  isLoading = true;

  constructor(){}

  ngOnInit() {
    // Simulate a loading delay
    setTimeout(() => {
      this.isLoading = false; // Hide logo after 3 seconds
    }, 3000); // Change duration as needed
  }

}
