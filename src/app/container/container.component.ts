import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  number: Number = 999;
  question: String = 'Lorem ipsum dolor sit amet, consectetur';
}