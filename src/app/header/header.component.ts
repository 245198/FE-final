import { Component, HostListener, OnInit } from '@angular/core';
import { UserAuthService } from '../_services/user-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../_services/user.service';
import { Movie } from '../Model/movie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  isNavbarWhite: boolean = false;

 

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.checkNavbarBackground();
  }

  private checkNavbarBackground() {
    const carouselHeight = document.querySelector('.carousel-container')?.clientHeight || 0;
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    this.isNavbarWhite = scrollPosition > carouselHeight;
  }
  
  
  constructor(
    private userAuthService: UserAuthService,
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private userService: UserService) { }

  // ngOnInit(): void {
    
  // }
  // selectedOption: string = 'name';
  // searchValue: string = '';
  // searchPlaceholder: string = 'Enter a movie name';

  movieName: string = '';
  movieDate: string = '';

  movies: Movie[] = [];

  ngOnInit(): void {
    this.checkNavbarBackground();
    this.movieName = this.activatedRoute.snapshot.params['movieName'];
    this.movieDate = this.activatedRoute.snapshot.params['movieDate'];

    this.check()
    
  }



  selectedOption: string = 'name';
  searchValue: string = '';
  searchPlaceholder: string = 'Enter a movie name';


  search() {
    if (this.selectedOption === 'name') {
      this.router.navigate(['search', this.searchValue]);
    } else if (this.selectedOption === 'date') {
      this.router.navigate(['search/date', this.searchValue]);
    }
  }

  onSelectedOptionChange() {
    this.searchValue = ''; // Clear the search field
    if (this.selectedOption === 'name') {
      this.searchPlaceholder = 'Enter a movie name';
    } else if (this.selectedOption === 'date') {
      this.searchPlaceholder = 'Enter a date';
    }
  }



  redirectToHomePage(): void {
    const confirmation = confirm("Do you want to continue?");
  
    if (!confirmation) {
      return; // Logout cancelled
    }
  
    window.location.href = "/home";
  }






  check() {

    if(this.movieName != null) {

      console.log("Movie Name: " + this.movieName);
      this.getMoviesByName(this.movieName);
      this.addToHTML(this.movieName);

    } else if (this.movieDate != null) {

      this.addToHTML(this.movieDate);
      this.getMoviesByDate(this.movieDate);
      console.log("Movie Date: " + this.movieDate);

    }
    
  }

  addToHTML(searchTerm: string) {
    const spanElement: any = document.getElementById('searchTerm');
    const titleText = document.createTextNode(searchTerm);
    spanElement.appendChild(titleText);

  }


  getMoviesByName(name: string) {
    this.homeActivityService.getMoviesByName(name).subscribe(
      (response) => {
        this.movies = response
      },
      (error) => {
        console.log(error);
      }
    )
  }

  getMoviesByDate(date: string) {
    this.homeActivityService.getMoviesByDate(date).subscribe(
      (response) => {
        this.movies = response
      },
      (error) => {
        console.log(error);
      }
    )
  }


  // Getter
  public getUserService(): UserService {
    return this.userService;
  }

  public isLoggedIn() {
    return this.userAuthService.isLoggedIn();
  }

  public logOut() {
    this.userAuthService.clearAllTraces();
    this.router.navigate(['/home'])
  }
  // search() {
  //   if (this.selectedOption === 'name') {
  //     console.log('Searching by name:', this.searchValue);
  //   } else if (this.selectedOption === 'date') {
  //     console.log('Searching by date:', this.searchValue);
  //   }
  // }

  // onSelectedOptionChange() {
  //   this.searchValue = ''; // Clear the search field
  //   if (this.selectedOption === 'name') {
  //     this.searchPlaceholder = 'Enter a movie name';
  //   } else if (this.selectedOption === 'date') {
  //     this.searchPlaceholder = 'Enter a date';
  //   }
  // }

  

}
