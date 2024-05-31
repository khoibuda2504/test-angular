import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private formBuilder: FormBuilder) {}
  testForm = this.formBuilder.group({
    inputValue: 'Angular',
  });
  ngOnInit(): void {}

  onSubmit() {
    console.log(this.testForm)
    this.testForm.reset();
  }
}
