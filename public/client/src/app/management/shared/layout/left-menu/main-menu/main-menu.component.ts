import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'efgm-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {
  @Input() menu: any;
  @Input() submenu: any;
  selected: number;

  constructor() { }

  ngOnInit() {
    this.selected = 0;
    this.selectMenu(0);
  }

  selectMenu(index) {
    this.selected = index;
    this.submenu.setCurrentSubMenu(this.menu[index].children);
  }
}
