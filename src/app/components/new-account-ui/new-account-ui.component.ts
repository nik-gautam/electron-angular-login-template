import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user-model'

@Component({
  selector: 'app-new-account-ui',
  templateUrl: './new-account-ui.component.html',
  styleUrls: ['./new-account-ui.component.scss']
})
export class NewAccountUiComponent implements OnInit {


  user: User ={
    name: "",
    userName: "",
    emailID: "",
    password: "",
    confirmPassword: "",
    phoneNumber: null
  }

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    alert( JSON.stringify(this.user, null, 4));
  }

}
