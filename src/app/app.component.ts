import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BooleanQuestionContainer } from './booleanquestioncontainer/booleanquestioncontainer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BooleanQuestionContainer, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'quizzy';
}
