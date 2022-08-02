import { Crisis } from './../crisis';
import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CRISES } from '../mock-crises';
@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit, OnChanges, DoCheck {
  crisis?: Crisis;
  editName ?= '';
  constructor( private route: ActivatedRoute, ) {
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));// get id in params
    const currentCrisis : Crisis | undefined = [...CRISES].find((crisis)=>{return crisis.id === id })
    this.crisis = currentCrisis ;
    this.editName = this.crisis?.name;
  }
  ngOnChanges(changes: SimpleChanges): void {
  }
  ngDoCheck(): void {
 
  }
  save(){

  }
  cancel(){

  }
}
