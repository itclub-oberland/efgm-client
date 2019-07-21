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

  constructor(private loginService: LoginService, private router : Router,
     private route: ActivatedRoute, private cookieService: CookieService) { }

  ngOnInit() {
    const email = this.cookieService.get('current_user_email');
    const token = this.cookieService.get('current_user_token');
    console.log('hele buraya bir bakasin 2', { email, token});
    this.loginService.getByCookie({ email, token}).subscribe(response => {
      console.log('hele buraya bir bakasin 222', { email, token});
      if (response && response.authorized) {
        this.router.navigate(['management']);
      } else {
        this.router.navigate(['home']);
      }
    });
  }

}
