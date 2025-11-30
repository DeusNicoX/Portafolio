import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';
import { ProjectsService, Project } from '../../core/projects';

@Component({
  selector: 'app-proyecto-detalle',
  standalone: true,
  imports: [CommonModule, RouterLink, ChipModule],
  templateUrl: './proyecto-detalle.html',
  styleUrl: './proyecto-detalle.scss',
})
export class ProyectoDetalleComponent {
  project?: Project;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projects: ProjectsService
  ) {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.project = this.projects.getProjectById(id);
    if (!this.project) this.router.navigate(['/portafolio']);
  }
}
