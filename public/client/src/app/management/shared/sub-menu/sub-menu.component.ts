import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'efgm-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {
  selected: number;
  submenus: any [];
  constructor() { }

  ngOnInit() {
    this.selected = 0;
  }

  public setCurrentSubMenu(subMenu) {
      this.submenus = subMenu;
  }

  selectMenu(index) {
    this.selected = index;
  }
}
