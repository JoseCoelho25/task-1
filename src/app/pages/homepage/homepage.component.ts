import { Component  } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  styles: [
    `
      :host ::ng-deep .p-dialog-header {
        box-shadow: 0px -4px 0px 2px #9c9c9c;
      }
    `,
  ],
})
export class HomepageComponent {

  visible: boolean = false;

  showDialog() {
    this.visible = true;
  }

}
