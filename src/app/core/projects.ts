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
      id: 'sedi-solutions',
      nombre: 'Sedi Solutions | ERP & Pasarelas',
      rol: 'Backend .NET Core / Integraciones',
      descripcion:
        'Desarrollo de módulos ERP, nómina y comunicaciones. Integración de APIs de Meta WhatsApp, RNDC y múltiples pasarelas de pago (Wompi, E-Collect, Palomma). Arquitectura MVC y microservicios.',
      tecnologias: ['.NET 8', 'ASP.NET MVC', 'SQL Server', 'PostgreSQL', 'APIs REST', 'Pasarelas de pago', 'IIS'],
      anio: 2024,
      portada: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=900&q=60',
      galeria: [
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1545239351-46efeb35a425?auto=format&fit=crop&w=800&q=60'
      ]
    },
    {
      id: 'quality-software',
      nombre: 'Quality Software | StoneERP & CAS CRM',
      rol: 'Full Stack .NET',
      descripcion:
        'Planificación y desarrollo de ERP y CRM (contabilidad, nómina, tesorería, inventario). Portales de pago con PlaceToPay, Wompi y E-Collect, priorizando seguridad, escalabilidad y eficiencia.',
      tecnologias: ['.NET Core', 'SQL Server', 'APIs REST', 'Identity/JWT', 'Pasarelas de pago', 'IIS'],
      anio: 2023,
      portada: 'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=900&q=60',
      galeria: [
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?auto=format&fit=crop&w=800&q=60'
      ]
    },
    {
      id: 'finagro',
      nombre: 'Finagro | Apps Internas',
      rol: 'Aprendiz Desarrollo .NET',
      descripcion:
        'Participación en desarrollo y mantenimiento de aplicaciones internas usando .NET, DevExpress y SQL Server. Mejora de funcionalidad, rendimiento y seguridad en operaciones críticas.',
      tecnologias: ['.NET', 'DevExpress', 'SQL Server', 'IIS'],
      anio: 2019,
      portada: 'https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?auto=format&fit=crop&w=900&q=60',
      galeria: [
        'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=60'
      ]
    },
    {
      id: 'ejercito-colombia',
      nombre: 'Ejército de Colombia | Régimen interno',
      rol: 'Auxiliar de control de personal',
      descripcion:
        'Gestión interna y control de personal, soporte a procesos operativos. Fortalecimiento de disciplina, responsabilidad y trabajo en equipo.',
      tecnologias: ['Gestión operativa', 'Coordinación de personal'],
      anio: 2017,
      portada: 'https://images.unsplash.com/photo-1473186578172-c141e6798cf4?auto=format&fit=crop&w=900&q=60',
      galeria: [
        'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=60',
        'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=60'
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
