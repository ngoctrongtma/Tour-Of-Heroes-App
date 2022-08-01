import { Crisis } from './../crisis';
import { Component, OnInit } from '@angular/core';
import { CRISES } from '../mock-crises';
@Component({
  selector: 'app-crisis-list',
  templateUrl: './crisis-list.component.html',
  styleUrls: ['./crisis-list.component.scss']
})
export class CrisisListComponent implements OnInit {

  crises: Crisis[] = [...CRISES]
  constructor() { }

  ngOnInit(): void {
  }

}
