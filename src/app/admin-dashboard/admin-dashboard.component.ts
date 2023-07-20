import { Component, ViewChild } from '@angular/core';
import { Movie } from '../Model/movie';
import { MovieTwo } from '../Model/movietwo';
import { ConnectivityService } from '../connectivity.service';
import { Router } from '@angular/router';
import {  ElementRef } from '@angular/core';


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {
  Movies: Movie[] = [];
  selectedMovie: Movie | undefined;
  movietwo: MovieTwo = new MovieTwo();
  // isModalOpen: boolean = false;
  @ViewChild('movieForm', { static: false }) movieForm: ElementRef | undefined;
  constructor(private service: ConnectivityService, private router: Router) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.service.getMovies().subscribe((Movies) => {
      this.Movies = Movies;
    });
  }

  showMovieDetails(movie: Movie): void {
    this.selectedMovie = movie;
  }

  deleteProduct(movieId: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this movie?');
    if (confirmDelete) {
      this.service.deleteProductById(movieId).subscribe(() => {
        console.log('Movie deleted successfully');
        this.getMovies();
        alert('Movie deleted successfully');
        // this.router.navigate(['retrieve']);
        // this.isModalOpen = false;
      });
    }
  }

  addMovie() {
    this.service.saveProduct(this.movietwo).subscribe(
      () => {
        console.log('Movie added successfully');
        alert('Movie added successfully');
        this.movietwo = new MovieTwo();
        this.getMovies();
      },
      (error) => {
        console.error('Failed to add movie', error);
      }
    );
  }

  onImageFileChange(event: any) {
    const file = event.target.files[0];
    this.movietwo.imageFile = file;
  }

  resetForm() {
    if (this.movieForm) {
      this.movieForm.nativeElement.reset();
    }
  }

}

 

