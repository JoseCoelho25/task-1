import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [MessageService],
})
export class FormComponent {
  userForm!: FormGroup;

  constructor(private fb: FormBuilder, private messageService: MessageService) {
    this.userForm = this.fb.group({
      basicInfo: this.fb.group({
        projectName: ['',[Validators.required, Validators.minLength(4)]],
        customerName: ['', Validators.required],
        projectDescription: ['', Validators.required],
        folderPath: ['', Validators.required],
      }),
    });
  }

  ngOnInit(): void {}

  createProject() {
    // Convert Object to key value pair
    const basicInfo = this.userForm.value.basicInfo;
    const formValueAsString = Object.keys(basicInfo)
      .map((key) => `${key}: '${basicInfo[key]}'`)
      .join('\n');
    // Toast content
    this.messageService.add({
      severity: 'success',
      summary: 'Form successfully submitted',
      detail: formValueAsString,
    });
    // Reset the form after submitting
    this.userForm.reset();
  }
}
