import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, MenubarModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  menuItems = [
    { label: 'Home', route: '/home' },
    { label: 'About', route: '/about' },
    { label: 'Service', route: '/services' },
    { label: 'Product', route: '/products' },
    { label: 'Pages', route: '/pages' },
    { label: 'Contact', route: '/contact' }
  ];

  socialLinks = [
    { icon: 'pi pi-facebook', url: '#' },
    { icon: 'pi pi-twitter', url: '#' },
    { icon: 'pi pi-linkedin', url: '#' },
    { icon: 'pi pi-instagram', url: '#' }
  ];

  contactInfo = {
    icon: 'pi pi-phone',
    label: 'Call Us',
    phone: '+012 345 6789'
  };

  constructor(public themeService: ThemeService) {}
}