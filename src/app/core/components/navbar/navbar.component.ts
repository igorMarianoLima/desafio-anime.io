import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { NavbarLink } from './navbar.interface';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  navbarLinks: NavbarLink[] = [
    {
      label: 'Início',
      path: ''
    },
    {
      label: 'Lista',
      path: 'lista'
    },
    {
      label: 'Gêneros',
      path: 'generos'
    },
    {
      label: 'Novos episódios',
      path: 'novos-episodios'
    }
  ]
}
