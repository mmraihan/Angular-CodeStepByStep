import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Pass data from Parent to Child';
  data=10;
  updateData(){
    this.data=Math.random();
  }

}
