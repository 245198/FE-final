import { Injectable } from '@angular/core';
import { Movie } from './Model/movie';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MovieTwo } from './Model/movietwo';

@Injectable({
  providedIn: 'root'
})
export class ConnectivityService {

  constructor(private http: HttpClient) { }

  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>("http://localhost:8083/1.0/admin/viewAllMovies");
  }

  deleteProductById(id: number): Observable<string> {
    const url = `http://localhost:8083/1.0/admin/deleteAMovie/${id}`;
    
    return this.http.delete<string>(url, { responseType: 'text' as 'json' });
  }

  saveProduct(movie: MovieTwo): Observable<any> {
    const formData = new FormData();
    formData.append('movieName', movie.movieName);
    formData.append('movieDirector', movie.movieDirector);
    formData.append('movieGenre', movie.movieGenre);
    formData.append('movieReleaseDate', movie.movieReleaseDate);
    formData.append('movieLanguage', movie.movieLanguage);
    formData.append('duration', movie.duration);
    formData.append('country', movie.country);
    formData.append('description', movie.description);
    formData.append('overallRate', movie.overallRate.toString());
    formData.append('file', movie.imageFile as Blob);
  
    return this.http.post("http://localhost:8083/1.0/admin/addMovie", formData, { responseType: 'text' });
  }

}
