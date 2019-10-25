import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name='Soumya';
  username;
  btnCheck=false;
  constructor(){
  }

  checkInput(event) {
    console.log(event);
    if(event.target.value){
      this.btnCheck = true;
    } 
    else{
      this.btnCheck = false;
    }
  }

  resetInput(eventReset){
    return this.username="",this.btnCheck=false;
  }
}
