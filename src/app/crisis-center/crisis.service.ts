import { Injectable } from '@angular/core';
import { Crisis } from './crisis';
import { CRISES } from './mock-crises';

@Injectable({
  providedIn: 'root'
})
export class CrisisService {

  

  getCrises(): Crisis[]{
    return CRISES
  }

  getCrisis(id: Number): Crisis {
    console.log("crisis", CRISES.find((crisis)=> {
      return crisis.id === id;
    }))
    const temp = CRISES.find((crisis)=> {
    return crisis.id === id;
    })
    if (temp)
      return temp
    else
    return {
      id: 0,
      name: ""
    }
  }

  updateCrises(id: Number, name: String){
     if (this.getCrisis(id).id !== 0)
     {
      this.getCrisis(id).name = name
     }     
  }
  constructor() {

  }
}
