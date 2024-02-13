import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TriviaApiService {
  constructor() {}

  clogHelloWorld() {
    console.log('hello, world! from random service!');
  }
}
