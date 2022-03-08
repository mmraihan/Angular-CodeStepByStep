import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  ngOnInit(): void {
  }
  users: any;
  constructor(private userData: UserDataService){

    this.userData.users().subscribe((data)=>{
      this.users=data;
    })

  }

}
