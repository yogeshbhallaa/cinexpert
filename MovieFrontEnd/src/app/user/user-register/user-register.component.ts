import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';
import { UserForRegister } from 'src/app/model/user';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
// User Register Component
export class UserRegisterComponent implements OnInit {
  user: UserForRegister;
  userSubmitted: boolean;
  registerationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private alertify: AlertifyService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.createRegisterationForm();
  }
  createRegisterationForm() {
    this.registerationForm = this.fb.group(
      {
        firstName: [null, Validators.required],
        lastName: [null, Validators.required],
        userName: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
        password: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassword: [null, Validators.required],
        mobile: [null, [Validators.required, Validators.maxLength(10)]],
      },
      { Validators: this.passwordMatchingValidator }
    );
  }
  passwordMatchingValidator(fc: AbstractControl): ValidationErrors | null {
    return fc.get('password')?.value === fc.get('confirmPassword')?.value ? null : { notmatched: true };
  }
  onSubmit() {
    console.log(this.registerationForm.value);
    this.userSubmitted = true;
    if (this.registerationForm.valid) {
      this.authService.registerUser(this.userData()).subscribe(() => {
        this.onReset();
        this.alertify.success('Congrats, You are Successfully Regitered');
        this.router.navigate(['/user/login']);
      }
      );
    } else {
      this.alertify.warning('All Fileds Required!!!');
    }
  }
  onReset() {
    this.userSubmitted = false;
    this.registerationForm.reset();
  }
  userData(): UserForRegister {
    return this.user = {
      firstName: this.firstName.value,
      lastName: this.lastName.value,
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    };
  }
  get userName() {
    return this.registerationForm.get('userName') as FormControl;
  }
  get firstName() {
    return this.registerationForm.get('firstName') as FormControl;
  }
  get lastName() {
    return this.registerationForm.get('lastName') as FormControl;
  }
  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  get password() {
    return this.registerationForm.get('password') as FormControl;
  }
  get confirmPassword() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  get mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }
}


