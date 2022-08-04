import { DialogService } from './dialog.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';

export interface CanComponentDeactivate {
  canDeactivate: () => Observable<boolean> | Promise<boolean> | boolean;
 }

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CrisisDetailComponent> {
  canDeactivate(
    component: CrisisDetailComponent,
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot,
    ): Observable<boolean> | boolean {
       // Get the Crisis Center ID
      console.log("aaaaaa", route.paramMap.get('id'));

      // Get the current URL
      console.log("aaaaaa", state.url);

      if (!component.crisis || component.crisis.name === component.editName) {
        return true;
      }
    
      return component.DialogService.confirm('Do you want to exit and don\'t save changes');
  }
}