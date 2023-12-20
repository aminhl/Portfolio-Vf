import { Component } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
})
export class BlogsComponent {
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
