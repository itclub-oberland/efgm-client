import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/public/shared/services/login.service';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'efgm-entrypoint',
  templateUrl: './entrypoint.component.html',
  styleUrls: ['./entrypoint.component.scss']
})
export class EntrypointComponent implements OnInit {
  showFiller = false;
  username: string;

  constructor(private loginService: LoginService, private router : Router,
     private route: ActivatedRoute, private cookieService: CookieService) { }

  ngOnInit() {
    this.username = this.cookieService.get('current_user_email') || null;
    const token = this.cookieService.get('current_access_token') || null;
    /*
    this.loginService.getByCookie({token}).subscribe(response => {
      if (response && response.authorized) {
        this.router.navigate(['management']);
      } else {
        this.router.navigate(['home']);
      }
    });
    */
  }

}
