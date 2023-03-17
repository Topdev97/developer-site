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
  href(event:any) {
    event.preventDefault()
    this.isMenuOpen = false
    setTimeout(() => {
      console.log(event.target.href)
      window.location.href =  event.target.href
    }, 1500);
  }
}
