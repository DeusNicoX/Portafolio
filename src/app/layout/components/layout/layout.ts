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
    { label: 'Inicio', icon: 'pi pi-home', routerLink: '/home' },
    { label: 'Sobre mí', icon: 'pi pi-user', routerLink: '/sobre-mi' },
    { label: 'Servicios', icon: 'pi pi-briefcase', routerLink: '/servicios' },
    { label: 'Portafolio', icon: 'pi pi-book', routerLink: '/portafolio' },
    { label: 'Habilidades', icon: 'pi pi-star', routerLink: '/habilidades' },
    { label: 'Contacto', icon: 'pi pi-envelope', routerLink: '/contacto' },
    { label: 'Descargar CV', icon: 'pi pi-download', url: 'assets/cv-nicolas-saenz.pdf', target: '_blank' }
  ];
}
