import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  aboutData = {
    experienceYears: 25,
    subtitle: 'About Us',
    title: 'Know About Our Dairy Farm & Our History',
    description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet.',
    buttonText: 'Explore More',
    images: {
      topImage: 'assets/images/gallery-1.jpg',
      bottomLeft: 'assets/images/gallery-2.jpg',
      bottomRight: 'assets/images/gallery-3.jpg'
    },
    features: [
      {
        icon: 'pi pi-briefcase',
        title: 'Dedicated Services',
        description: 'Clita erat ipsum et lorem et sit.'
      },
      {
        icon: 'pi pi-leaf',
        title: 'Organic Products',
        description: 'Sed stet lorem sit clita duo justo magna.'
      }
    ]
  };

  whyChooseUs = {
    subtitle: 'Why Us!',
    title: 'Few Reasons Why People Choosing Us!',
    description: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.',
    buttonText: 'Explore More',
    reasons: [
      'Justo magna erat amet',
      'Aliqu diam amet diam et eos',
      'Clita erat ipsum et lorem et sit'
    ]
  };

  statsData = [
    {
      icon: 'assets/images/experience.png',
      value: '25',
      label: 'Years Experience',
      bgClass: 'bg-[#5b8c51] text-white',
      textClass: 'text-gray-200'
    },
    {
      icon: 'assets/images/award.png',
      value: '183',
      label: 'Award Winning',
      bgClass: 'bg-[#eddd5e] text-gray-800',
      textClass: 'text-[#404a3d]'
    },
    {
      icon: 'assets/images/animal.png',
      value: '2619',
      label: 'Total Animals',
      bgClass: 'bg-[#eddd5e] text-gray-800',
      textClass: 'text-[#404a3d]'
    },
    {
      icon: 'assets/images/client.png',
      value: '51940',
      label: 'Happy Clients',
      bgClass: 'bg-[#5b8c51] text-white',
      textClass: 'text-gray-200'
    }
  ];
}