import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-movie-component',
  templateUrl: './user-movie-component.component.html',
  styleUrls: ['./user-movie-component.component.css']
})
export class UserMovieComponentComponent  implements OnInit{
    
  constructor(){}

  ngOnInit(): void {
    
  }
  reviewmessage:string='';
  starRating:number=0;

  submitreview(){
    console.log(this.reviewmessage);
    console.log(this.starRating);
  }
  }
  

