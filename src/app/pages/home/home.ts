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
    { label: '+5 años de experiencia', value: '5' },
    { label: 'APIs .NET entregadas', value: '12' },
    { label: 'Optimización SQL', value: '95%' },
    { label: 'Deploys en IIS', value: '30+' }
  ];

  featured = this.projects.getProjects().slice(0, 2);
}
