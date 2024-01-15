// src\app\login\login.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  SavedUser: string  = 'Aftab123';
  SavedPassword: string = 'Aftab123';

  EnteredUserName: string = '';
  EnteredPassword: string = '';

  verifyLogin(): void {
    if (this.EnteredUserName === this.SavedUser && this.EnteredPassword === this.SavedPassword) {
      alert('LogIn Successfully');
      this.router.navigate(['/filter-table']);
    } else {
      alert('Incorrect Username or Password');
    }
  }

}
