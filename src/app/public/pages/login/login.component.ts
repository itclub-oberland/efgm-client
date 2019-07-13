import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'efgm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router) { }
  username: string;
  password: string;

  ngOnInit() {
  }

  login(): void {
    this.router.navigate(['management', 'home']);
  }
}
