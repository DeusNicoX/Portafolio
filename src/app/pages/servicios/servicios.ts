import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './servicios.html',
  styleUrl: './servicios.scss',
})
export class ServiciosComponent {}
