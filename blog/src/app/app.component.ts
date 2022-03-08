import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators  } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="Reactive Form";

  loginForm = new FormGroup({
    user: new FormControl("", Validators.required),
    password: new FormControl("", Validators.required),
  })

  loginUser(){
    console.warn(this.loginForm.value)
  }

  get userr()
  {
    return this.loginForm.get('user');
  }
  get  passwordD()
  {
    return this.loginForm.get('password');
  }
}
