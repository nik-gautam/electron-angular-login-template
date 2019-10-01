import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user-model';

@Component({
  selector: 'app-forgot-password-ui',
  templateUrl: './forgot-password-ui.component.html',
  styleUrls: ['./forgot-password-ui.component.scss']
})

export class ForgotPasswordUiComponent implements OnInit {

  user: User = {
    name: "Existing Name",
    userName: "",
    emailID: "existing@email.id",
    password: "",
    confirmPassword: "",
    phoneNumber: 1122334455
  }

  constructor() { }

  ngOnInit() {

  }

  onSubmit(){
    alert( JSON.stringify(this.user, null, 4));
  }
  
}
