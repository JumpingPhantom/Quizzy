import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TrueFalseTypeContainer } from './true-false-type-container/truefalsetypecontainer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TrueFalseTypeContainer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'quizzy';
}
