import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  userList : any = [];
  constructor(private userlistService : UsersService) { }

  ngOnInit(): void {
    this.userlistService.getUsersList().subscribe(
      data => {
        this.userList = data;
      },
      errors => {
        console.log(errors)
      }
    )
  }

}
