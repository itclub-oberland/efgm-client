import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'efgm-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  @ViewChild('sidemenu') public sidemenu: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  setContentWidth(sidemenu) {
    setTimeout(() => {}, 1000);

    const isMainMenuOpen = sidemenu.mainnav.sidenav.opened;
    const isSubMenuOpen = sidemenu.mainnav.sidenav.opened;

    if (isMainMenuOpen && isSubMenuOpen) {
      return 410;
    }

    if (isMainMenuOpen && !isSubMenuOpen) {
      return 150;
    }

    if (!isMainMenuOpen && !isSubMenuOpen) {
      return 50;
    }
  }
}
