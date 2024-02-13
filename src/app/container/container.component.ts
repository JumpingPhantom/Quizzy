import { Component } from '@angular/core';
import {
  MAX_QUESTIONS_SIZE,
  CATEGORIES,
  QUESTIONS_DIFFICULTY,
  QUESTION_TYPE,
} from '../app.constants';

@Component({
  standalone: true,
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.css',
})
export class ContainerComponent {
  question_index: number = 0;
  amount: number = MAX_QUESTIONS_SIZE;
}
