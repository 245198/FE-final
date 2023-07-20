import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthService } from './user-auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  

  PATH_OF_API = "http://localhost:9090";

  requestHeader = new HttpHeaders({
    "No-Auth": "True"
  });


  constructor(private httpClient: HttpClient, private userAuthService: UserAuthService) { }

   //add user
   public register(signUpData: any) {
    return this.httpClient.post(
      this.PATH_OF_API + "/registerNewUser",
      signUpData, 
      {
        headers: this.requestHeader
      }
      );
  }

  // User/Admin Trying to login
  public login(loginData: any) {
    return this.httpClient.post(
      this.PATH_OF_API + "/authenticate", 
      loginData, 
      {
        headers: this.requestHeader
      }
      );
  }


  public forUser() {
    return this.httpClient.get(this.PATH_OF_API + '/forUser', {responseType: 'text'});
  }

  public forAdmin() {
    return this.httpClient.get(this.PATH_OF_API + '/forAdmin', {responseType: 'text'});
  }


  // role match check
  public roleMatch(allowedRoles: any): boolean {
    let isMatch = false;
    const userRoles: any = this.userAuthService.getRole();

    if (userRoles != null && userRoles) {
      for (let i = 0; i < userRoles.length; i++) {
        for (let j = 0; j < allowedRoles.length; j++) {
          if (userRoles[i].roleName === allowedRoles[j]) {
            isMatch = true;
            return isMatch;
          }
        }
      }
    }
    return isMatch;
  }

 


}
