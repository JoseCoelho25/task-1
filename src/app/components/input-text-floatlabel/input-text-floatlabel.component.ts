import { Component } from '@angular/core';
import { FormGroup, FormGroupDirective, FormControl, Validators } from '@angular/forms';

interface FileSelectEvent {
  originalEvent: Event;
  files: File[];
  currentFiles: File[];
}


@Component({
  selector: 'app-input-text-floatlabel',
  templateUrl: './input-text-floatlabel.component.html',
  styleUrls: ['./input-text-floatlabel.component.css'],
})
export class InputTextFloatlabelComponent {
  form!: FormGroup;

  constructor(private rootFormGroup: FormGroupDirective) {
    this.form = new FormGroup({
      basicInfo: new FormGroup({
        projectName: new FormControl(),
        customerNamer: new FormControl(),
        projectDescription: new FormControl(),
        folderPath: new FormControl(),
      }),
    });
  }

  ngOnInit() {
    this.form = this.rootFormGroup.control;
  }

  onSelect(event: FileSelectEvent) {
    console.log(event.files);
    const folderPath = event.currentFiles[0].name;
    this.form.get('basicInfo.folderPath')?.setValue(folderPath);
  }
}
