import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/components/layout/layout';
import { HomeComponent } from './pages/home/home';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi';
import { ServiciosComponent } from './pages/servicios/servicios';
import { PortafolioComponent } from './pages/portafolio/portafolio';
import { ProyectoDetalleComponent } from './pages/proyecto-detalle/proyecto-detalle';
import { HabilidadesComponent } from './pages/habilidades/habilidades';
import { ContactoComponent } from './pages/contacto/contacto';

// Rutas principales: todo se renderiza dentro del layout con header/footer.
export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'sobre-mi', component: SobreMiComponent },
      { path: 'servicios', component: ServiciosComponent },
      { path: 'portafolio', component: PortafolioComponent },
      { path: 'proyecto/:id', component: ProyectoDetalleComponent },
      { path: 'habilidades', component: HabilidadesComponent },
      { path: 'contacto', component: ContactoComponent }
    ]
  },
  { path: '**', redirectTo: 'home' }
];
