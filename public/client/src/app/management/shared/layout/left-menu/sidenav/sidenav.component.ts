import { Component, OnInit, ViewChild, EventEmitter, Output, ElementRef} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'efgm-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0,0,0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class SidenavComponent implements OnInit {
  menuState: string = 'out';
  @ViewChild('sidenav') public sidenav: ElementRef;
  constructor() { }

  ngOnInit() {
    this.sidenav['opened'] = true;
  }

  public toggle() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
    this.sidenav['toggle']();
  }
}
