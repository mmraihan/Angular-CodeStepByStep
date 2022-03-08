import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Without service';
  memberData=[
    {name: 'Sahik', email: 'sahik@example.com'},
    {name: 'Mahin', email: 'mahin@example.com'},
    {name: 'Ulfat', email: 'ulfat@example.com'},
    {name: 'ALayna', email: 'alayna@example.com'}
  ]
}
