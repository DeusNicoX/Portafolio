import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';

@Component({
  selector: 'app-habilidades',
  standalone: true,
  imports: [CommonModule, ChipModule],
  templateUrl: './habilidades.html',
  styleUrl: './habilidades.scss',
})
export class HabilidadesComponent {}
