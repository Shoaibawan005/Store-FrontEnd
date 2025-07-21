import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../Services/user.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../Models/user.model';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];
  isModelOpen: boolean = false;


  defaultUserPic = 'https://via.placeholder.com/300x200?text=User';

  @ViewChild('#f') formRef!: NgForm;
  constructor(private userService: UserService,
    private toastr: ToastrService
  ){}

  ngOnInit(): void {
      
  }

    showModal(): void {
    this.isModelOpen = true;
  }

  hideModal(): void {
    this.isModelOpen = false;
    this.formRef.reset(); 
  }

  deleteUser(user_id: number){

  }

  addUser(){

  }

}
