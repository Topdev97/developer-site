import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  constructor(private router: Router) {}
  isMenuOpen: boolean = false;
  links: { path: string; name: string; external: boolean }[] = [
    {
      path: '/',
      name: 'About',
      external: true,
    },
    {
      path: '/projects',
      name: 'Projects',
      external: false,
    },
    {
      path: '/contact',
      name: 'Contact',
      external: true,
    },

    {
      path: '/admin',
      name: 'Admin',
      external: true,
    },
  ];
  closeModal() {
    this.isMenuOpen = false;
  }

  setIsOpen() {
    this.isMenuOpen = !this.isMenuOpen;
  }
  href(path: string) {
    this.closeModal()
    setTimeout(() => {
      this.router.navigateByUrl(path);
    }, 1500);
  }
}
