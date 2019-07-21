import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../shared/services/login.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'efgm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private cookieService: CookieService, private loginService: LoginService) { }
  username: string;
  password: string;
  url: string;

  ngOnInit() {
    this.loginService.getGoogleUrl().subscribe(url => {
      this.url = url;
    });
  }

  login(): void {
  }
}
