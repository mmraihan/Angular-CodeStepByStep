import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  memberData=[
    {name: 'Sahik', email: 'sahik@example.com'},
    {name: 'Mahin', email: 'mahin@example.com'},
    {name: 'Ulfat', email: 'ulfat@example.com'},
    {name: 'ALayna', email: 'alayna@example.com'}
  ]

}
