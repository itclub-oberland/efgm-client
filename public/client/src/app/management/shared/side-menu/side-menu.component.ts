import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'efgm-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {
  @ViewChild('mainnav') public mainnav: ElementRef;
  @ViewChild('subnav') public subnav: ElementRef;
  menuData: any [];
  constructor() { }

  ngOnInit() {
    this.menuData = [
      {
        name: 'Hakkimda', icon: 'group_work',
        children: [
          {name: 'Home', icon: 'toll', nav: ['/management/home']},
          {name: 'Info', icon: 'info', nav: ['/management/personal-info']},
          {name: 'Tel', icon: 'history', nav: ['/management/home']},
        ]
      },
      {
        name: 'Isteklerim', icon: 'work_outline',
        children: [
          {name: 'Ev icin', icon: 'toll', nav: ['/management/esya']},
          {name: 'Cocuklar icin', icon: 'home', nav: ['/management/cocuk']},
          {name: 'Hanim icin', icon: 'subject', nav: ['/management/hanim']},
          {name: 'Kendim icin', icon: 'pan_tool', nav: ['/management/info']},
        ]
      },
      {
        name: 'Dokumanlarim', icon: 'alarm',
        children: [
          {name: 'Ozel', icon: 'room', nav: ['/management/home']},
          {name: 'Paylasilabilir', icon: 'subject', nav: ['/management/home']},
          {name: 'Kopyalanmis', icon: 'play_arrow', nav: ['/management/home']},
          {name: 'ABC', icon: 'home', nav: ['/management/home']},
        ]
      }
    ];
  }

}
