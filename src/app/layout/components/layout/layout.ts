import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MenubarModule, ButtonModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss'
})
export class LayoutComponent {
  year = new Date().getFullYear();

  items: MenuItem[] = [
    { label: 'Inicio', routerLink: '/home' },
    { label: 'Sobre mí', routerLink: '/sobre-mi' },
    { label: 'Servicios', routerLink: '/servicios' },
    { label: 'Portafolio', routerLink: '/portafolio' },
    { label: 'Habilidades', routerLink: '/habilidades' },
    { label: 'Contacto', routerLink: '/contacto' },
    { label: 'Descargar CV', url: 'assets/cv-nicolas-saenz.pdf', target: '_blank' }
  ];
}
