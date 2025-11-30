import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

// Componente raíz que solo renderiza el router.
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {}
