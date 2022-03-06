import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Reusable component";

  userDetails=[
    {name: 'A', email: 'aaaa@example.com'},
    {name: 'B', email: 'aaaa@example.com'},
    {name: 'C', email: 'aaaa@example.com'},
  ]

}
