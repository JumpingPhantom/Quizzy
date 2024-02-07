import { Component } from '@angular/core';
import { ContainerComponent } from '../container/container.component';

@Component({
  standalone: true,
  imports: [ContainerComponent],
  selector: 'app-tf-container',
  templateUrl: './truefalsetypecontainer.component.html',
  styleUrl: './truefalsetypecontainer.component.css',
})
export class TrueFalseTypeContainer {}
