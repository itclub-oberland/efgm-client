




import {Component} from '@angular/core';

export interface Personlist {
  firstname: string;
  id: number;
  lastname: string;
  city: string;
  canton: string;

  
  
}

const ELEMENT_DATA: Personlist[] = [
  {id:1, firstname: 'Jona', lastname: 'Lilium', city: 'Riehen', canton: 'Riehen' },
];

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
  styleUrls: ['./personlist.component.scss']
})


export class PersonlistComponent {
  displayedColumns: string[] = ['id', 'firstname', 'lastname', 'city', 'canton'];
  dataSource = ELEMENT_DATA;
}





