import { Component, OnInit } from '@angular/core';
import { UserLogin } from '../../types/user';
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {
  user:UserLogin={
    email:'',
    password:'',
  }
  logoPath:string="../../../../../assets/Red_Dead_Redemption_2_Logo.png"
  constructor() { }

  ngOnInit(): void {
  }
  signin(){
    console.log(this.user)
  }

}
