import { Crisis } from './../crisis';
import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CRISES } from '../mock-crises';
import { CrisisService } from '../crisis.service';
import { DialogService } from 'src/app/dialog.service';
@Component({
  selector: 'app-crisis-detail',
  templateUrl: './crisis-detail.component.html',
  styleUrls: ['./crisis-detail.component.scss']
})
export class CrisisDetailComponent implements OnInit, OnChanges {
  crisis?: Crisis;
  editName: String  = '';
  constructor( private route: ActivatedRoute,  private router: Router, private crisisService : CrisisService , public DialogService: DialogService) {
  }

  cancelEdit = false;

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));// get id in params
    const currentCrisis : Crisis | undefined = this.crisisService.getCrisis(id);
    this.crisis = currentCrisis ;
    this.editName = this.crisis?.name;
  }
  ngOnChanges(changes: SimpleChanges): void {

  }
  save(){
      const id = Number(this.route.snapshot.paramMap.get('id'));// get id in params
      this.crisisService.updateCrises(id, this.editName)
  }
  cancel(){

  }
  backToListCrisis(){
    this.router.navigate(['/crisis-center']);
  }
}
