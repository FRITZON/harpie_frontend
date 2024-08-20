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
    
    setTimeout(() => {
      this.isLoading = false; 
    }, 3000); 
  }

}
