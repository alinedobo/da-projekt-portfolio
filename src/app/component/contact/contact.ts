import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {
  fb = inject(FormBuilder);
  isChecked = false;
  isDisabled = true;

  contactform = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(5)]],
  });

  formSubmit() {
    if (this.contactform.valid) {
      console.log(this.contactform.value);
      this.formReset();
      this.formUntouch();
    }
  }

  formReset() {
    this.contactform.reset();
  }

  formUntouch() {
    this.contactform.markAsPristine();
  }

  toggleCheckbox(){
    this.isChecked = !this.isChecked;
  }
}
