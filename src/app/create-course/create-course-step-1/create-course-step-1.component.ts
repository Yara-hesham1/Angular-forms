import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CoursesService} from '../../services/courses.service';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import { courseTitleValidator } from '../../validators/course-title.validator';
import { json } from 'express';

interface CourseCategory {
  code: string;
  description: string;
}


@Component({
    selector: 'create-course-step-1',
    templateUrl: './create-course-step-1.component.html',
    styleUrls: ['./create-course-step-1.component.scss'],
    standalone: false
})
export class CreateCourseStep1Component implements OnInit {


  form=this.fb.group({
    title: ['',{validators: [Validators.required, Validators.maxLength(60)],
      asyncValidators:[courseTitleValidator(this.courses)],
      updateOn: 'blur' // This will update the control only when it loses focus
    }],
    releasedAt: [new Date(), Validators.required],
    category: ['Begginer', Validators.required],
    downloadsAllowed:[false,Validators.requiredTrue],
    longDescription: ['', [Validators.required,Validators.minLength(3)]]
 
  
  })


  courseCategories$:Observable<CourseCategory[]> 

  constructor(private fb:FormBuilder,private courses:CoursesService) {

    // this.form.get('title')?.valueChanges.pipe(
    //   filter(value => value.length > 3)
    // ).subscribe(value => console.log(value));

    // this.form.get('title')?.valueChanges.subscribe(value => console.log(value));

  }

  ngOnInit() {

    this.courseCategories$=this.courses.findCourseCategories()

    const draft=localStorage.getItem('STEP_1');
    if(draft){
      this.form.setValue(JSON.parse(draft));
    }

    this.form.valueChanges.pipe(
      filter(value => this.form.valid)
    ).subscribe(value => {
      localStorage.setItem('STEP_1', JSON.stringify(value));
    }
    );
  }

  get courseTitle() {
    return this.form.controls['title'];
  }

}
