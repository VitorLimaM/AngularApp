import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Home],
  template: `
  <main>
    <header class="brand-name">
      <img class="brand-logo" src="logo.png" alt="logo" width="100" height="100">
    </header>
    <section class="content">
      <app-home />
    </section>
  </main>
  `,
  styleUrl: './app.css'
})
export class App {
  secretWord = 'Everybody';
  protected readonly lol = signal('Home!');
}
