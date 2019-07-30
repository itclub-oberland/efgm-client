import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'efgm-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() username: string;
  @Input() menu: any;
  constructor() { }

  ngOnInit() {
  }

  onLeftMenuToggle() {
      this.menu.sidemenu.mainnav.toggle();
  }
}
