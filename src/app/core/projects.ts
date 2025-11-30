import { Injectable } from '@angular/core';

export interface Project {
  id: string;
  nombre: string;
  rol: string;
  descripcion: string;
  tecnologias: string[];
  anio: number;
  portada: string;
  galeria: string[];
}

@Injectable({ providedIn: 'root' })
export class ProjectsService {
  // Edita este arreglo para modificar tus proyectos reales.
  private projects: Project[] = [
    {
      id: 'api-logistica',
      nombre: 'API de Logística',
      rol: 'Backend .NET',
      descripcion: 'Microservicio de despacho y seguimiento de pedidos con autenticación JWT.',
      tecnologias: ['.NET 8', 'SQL Server', 'Docker', 'IIS'],
      anio: 2024,
      portada: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=60',
      galeria: [
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1545239351-46efeb35a425?auto=format&fit=crop&w=800&q=60'
      ]
    },
    {
      id: 'etl-finanzas',
      nombre: 'ETL Finanzas',
      rol: 'Data Backend',
      descripcion: 'Pipeline de ingestión y limpieza de datos contables con orquestación.',
      tecnologias: ['.NET 7', 'SQL Server', 'SSIS', 'PowerShell'],
      anio: 2023,
      portada: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=60',
      galeria: [
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=800&q=60'
      ]
    }
  ];

  getProjects() {
    return this.projects;
  }

  getProjectById(id: string) {
    return this.projects.find(p => p.id === id);
  }
}
