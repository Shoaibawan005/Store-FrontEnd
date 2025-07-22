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


  defaultUserPic = 'https://picsum.photos/id/1011/600/400';

  userPics: string[] = [
    'https://picsum.photos/id/1011/600/400',
    'https://picsum.photos/id/1012/600/400',
    'https://picsum.photos/id/1013/600/400',
    'https://picsum.photos/id/1014/600/400',
    'https://picsum.photos/id/1015/600/400',
    'https://picsum.photos/id/1016/600/400',
    'https://picsum.photos/id/1027/600/400',
    'https://picsum.photos/id/1035/600/400',
    'https://picsum.photos/id/1050/600/400',
    'https://picsum.photos/id/1062/600/400',

    'https://picsum.photos/id/1005/600/400',  // outdoor portrait
    'https://picsum.photos/id/1006/600/400',  // male portrait
    'https://picsum.photos/id/1014/600/400',  // candid human shot
    'https://picsum.photos/id/1015/600/400',  // casual portrait
    'https://picsum.photos/id/1021/600/400',  // teenager portrait
    'https://picsum.photos/id/1024/600/400',  // smiling person
    'https://picsum.photos/id/1025/600/400',  // headshot
    'https://picsum.photos/id/1027/600/400',  // outdoor portrait
    'https://picsum.photos/id/1033/600/400',  // close-up face
    'https://picsum.photos/id/1035/600/400',  // neutral expression
    'https://picsum.photos/id/1039/600/400',  // female portrait
    'https://picsum.photos/id/1045/600/400',  // male Expressive portrait
    'https://picsum.photos/id/1053/600/400',  // friend-group style
    'https://picsum.photos/id/1060/600/400',  // professional headshot
    'https://picsum.photos/id/1074/600/400',  // outdoor smiling
    'https://picsum.photos/id/1080/600/400',  // artistic portrait
    'https://picsum.photos/id/1083/600/400'
    ];


  @ViewChild('f') formRef!: NgForm;
  constructor(private userService: UserService,
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
    this.GetAllUsers();
  }

  GetAllUsers() {
    this.users = [];
    this.userService.GetAllUsers().subscribe({
      next: (res: User[]) => {
        this.users = res;
        console.log(res);
      },
      error: (err) => {
        console.log("Error: ", err);
        this.toastr.error("Failed to fetcj the Users.");
      }
    })
  }

  showModal(): void {
    this.isModelOpen = true;
  }

  hideModal(): void {
    this.isModelOpen = false;
    this.formRef.reset();
  }

  DeleteUser(user_id: number) {

    if (confirm("Are you sure to delete this User??")) {

      this.userService.DeleteUser(user_id).subscribe({
        next: (res: {message: string}) => {
          this.toastr.success(res.message);
          this.GetAllUsers();
        },
        error: (err) => {
          console.log("Error: ", err);
          this.toastr.error("Failed to delete the User.")

        }
      });
    }

  }

  addUser() {
    console.log("From Add user")

    const { userName, userPhone, userAge } = this.formRef.value;

    if (!userName || !userPhone || !userAge) {
      this.toastr.warning("All fields are required...");
      return;
    }

    this.userService.AddUser({ Id: 0, Name: userName, Phone_Num: userPhone, Age: userAge }).subscribe({

      next: (res: User) => {
        this.toastr.success("User " + res.Name + " Added Successfully.");
        this.GetAllUsers();
        this.hideModal();
      },
      error: (err) => {
        console.log("Error: ", err);
        this.toastr.error("Failed to fetch the Users.")

      }
    });
  }


  // addRandomUsers(count: number = 20) {
  //   const firstNames = ['Ali', 'Ahmed', 'Sarah', 'Fatima', 'John', 'Emma', 'David', 'Sophia', 'Faraz', 'Fiza'];
  //   const lastNames = ['Raza', 'Khan', 'Butt', 'Malik', 'Smith', 'Johnson', 'Ahmed', 'Chaudhry', 'Hussain', 'Iqbal'];

  //   for (let i = 0; i < count; i++) {
  //     const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
  //     const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];
  //     const fullName = `${randomFirst} ${randomLast}`;

  //     const randomPhone = `03${Math.floor(100000000 + Math.random() * 899999999)}`;
  //     const randomAge = Math.floor(Math.random() * 40) + 18;

  //     this.userService.AddUser({
  //       Id: 0,
  //       Name: fullName,
  //       Phone_Num: randomPhone,
  //       Age: randomAge
  //     }).subscribe({
  //       next: (res: User) => {
  //         console.log(`User ${res.Name} added.`);
  //         if (i === count - 1) {
  //           this.toastr.success(`${count} users added successfully.`);
  //           this.GetAllUsers();
  //         }
  //       },
  //       error: (err) => {
  //         console.log("Error adding user:", err);
  //         this.toastr.error("Some users failed to add.");
  //       }
  //     });
  //   }
  // }


}
