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
  classList = "overpass-16 white display-none"

  contactform = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(5)]],
  });

  ngOnInit(){
    this.classList = "overpass-16 white display-none";
  }

  formSubmit() {
    if (this.contactform.valid) {
      console.log(this.contactform.value);
      this.formReset();
      this.formUntouch();
      this.classList = "overpass-16 white"
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
