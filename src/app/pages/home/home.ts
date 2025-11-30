import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ProjectsService } from '../../core/projects';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, ButtonModule, CardModule, ChipModule],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class HomeComponent {
  private projects = inject(ProjectsService);

  stats = [
    { label: 'Años de experiencia', value: '5+' },
    { label: 'Integraciones pasarelas de pago', value: '6+' },
    { label: 'APIs/servicios entregados', value: '12' },
    { label: 'Despliegues y soporte ERP/IIS', value: '25+' }
  ];

  featured = this.projects.getProjects().slice(0, 2);
}
