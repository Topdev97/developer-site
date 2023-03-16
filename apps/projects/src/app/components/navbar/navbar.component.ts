import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen: boolean = false
  links:{path:string,name:string,external:boolean}[] = [


    {
      path:'/',
      name:'About',
      external:true
    },
    {
      path:'/projects',
      name:'Projects',
      external:false
    },
    {
      path:'/contact',
      name:'Contact',
      external:true
    },

    {
      path:'/admin',
      name:'Admin',
      external:true
    }

  ]
  closeModal(){
    console.log('cierrate');
    this.isMenuOpen = false
  }

  setIsOpen(){
    this.isMenuOpen = !this.isMenuOpen
  }
}
