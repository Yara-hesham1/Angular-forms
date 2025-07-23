import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { passwordStrengthValidator } from '../validators/password-strenght.validator';


@Component({
    selector: 'login',
    templateUrl: './login-reactive.component.html',
    styleUrls: ['./login-reactive.component.css'],
    standalone: false
})
export class LoginReactiveComponent implements OnInit {


  // email= new FormControl('', {
  //   validators: [Validators.required, Validators.email],
  //   updateOn: 'blur' // This will update the control only when it loses focus
  // });
  // password= new FormControl('', {
  //   validators: [
  //     Validators.required,
  //      Validators.minLength(8),
  //      passwordStrengthValidator()]}
    
  // );

  // form= new FormGroup({
  //   email: this.email,
  //   password: this.password
  // });

  form=this.fb.group({
    email:['',{
      validators: [Validators.required, Validators.email],
      updateOn: 'blur' // This will update the control only when it loses focus
    }],
    password:['', [Validators.required, Validators.minLength(8), passwordStrengthValidator()]]
  })



  constructor(private fb :NonNullableFormBuilder) {

    fb.control

  }

  ngOnInit() {

  }

  get email() {
    return this.form.controls['email'];
  }

  get password() {
    return this.form.controls['password'];
  }


  login(){
    const formValue = this.form.value;
    this.form.patchValue({

    })
  }

  reset(){
    this.form.reset();
    console.log(this.form.value);
    
  }

}
