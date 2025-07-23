import { Component, OnInit } from '@angular/core';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import { FormBuilder, FormGroup } from '@angular/forms';




@Component({
    selector: 'create-course',
    templateUrl: './create-course.component.html',
    styleUrls: ['./create-course.component.scss'],
    standalone: false,
    providers: [{
        provide: STEPPER_GLOBAL_OPTIONS, useValue: {showError: true}
    }]
})
export class CreateCourseComponent implements OnInit {
form:FormGroup;


constructor(private fb: FormBuilder) {
  
}
  ngOnInit() {

  }

submit(step1,step2,step3){

  console.log(step1,step2,step3);
  
}

}
