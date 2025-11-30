import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-sobre-mi',
  standalone: true,
  imports: [CommonModule, CardModule],
  templateUrl: './sobre-mi.html',
  styleUrl: './sobre-mi.scss',
})
export class SobreMiComponent {}
