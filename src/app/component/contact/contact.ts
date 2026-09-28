import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CrudService } from '../../services/crud';

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
  classList = 'overpass-16 white display-none';
  crud = inject(CrudService);
  table = 'frontend';

  contactform = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(5)]],
    privacyCheckbox: ['', [Validators.required]],
  });

  ngOnInit() {
    this.classList = 'overpass-16 white display-none';
  }

  formSubmit() {
    console.log(this.contactform.value);
    this.createRequest();
    this.formReset();
    this.formUntouch();
    this.classList = 'overpass-16 white';
  }

  formReset() {
    this.contactform.reset();
  }

  formUntouch() {
    this.contactform.markAsPristine();
  }

  toggleCheckbox() {
    this.isChecked = !this.isChecked;
  }

  createRequest(){
    const newRequest = {
      name: this.contactform.value.name!,
      email: this.contactform.value.email!,
      message: this.contactform.value.message!,
    }
    this.crud.saveContactRequest(newRequest);
  }
}
