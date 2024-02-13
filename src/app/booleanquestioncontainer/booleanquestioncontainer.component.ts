import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';
import { HttpClient } from '@angular/common/http';

@Component({
  standalone: true,
  imports: [ContainerComponent],
  selector: 'app-tf-container',
  templateUrl: './booleanquestioncontainer.component.html',
  styleUrl: './booleanquestioncontainer.component.css',
})
export class BooleanQuestionContainer {
  handleClick() {}
  constructor(private http: HttpClient) {}
}
