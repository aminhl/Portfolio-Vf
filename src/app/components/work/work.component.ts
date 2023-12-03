import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
})
export class WorkComponent {
  buttons: Array<string> = [
    'all',
    'fullstack',
    'frontend',
    'backend',
    'blockchain',
  ];
  activeButton: any = null;

  onButtonClick(button: any) {
    this.activeButton = button;
  }
}
