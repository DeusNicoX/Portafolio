import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { ProjectsService, Project } from '../../core/projects';

@Component({
  selector: 'app-portafolio',
  standalone: true,
  imports: [CommonModule, CardModule, ChipModule, ButtonModule, RouterLink],
  templateUrl: './portafolio.html',
  styleUrl: './portafolio.scss',
})
export class PortafolioComponent {
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {
    this.projects = projectsService.getProjects();
  }
}
