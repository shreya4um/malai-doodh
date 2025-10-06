import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CarouselModule } from 'primeng/carousel';
import { AboutComponent } from "../about/about.component";
import { FooterComponent } from '../../components/footer/footer.component';
import { BlogComponent } from '../../components/blog/blog.component';
import { ServicesComponent } from '../../components/services/services.component';
import { ProductsComponent } from '../../components/products/products.component';
import { TeamComponent } from '../../components/team/team.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ButtonModule, CardModule, CarouselModule, AboutComponent, FooterComponent, BlogComponent, ServicesComponent, ProductsComponent, TeamComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  carousel = [
    {
      title: 'Fresh & Organic Milk',
      subtitle: 'Best Dairy Products',
      img: 'assets/images/carousel-1.jpg',
      align: 'text-left'
    },
    {
      title: 'Healthy Yogurt',
      subtitle: 'Natural & Delicious',
      img: 'assets/images/carousel-2.jpg',
      align: 'text-right'
    },
    {
      title: 'Pure Butter',
      subtitle: 'From Our Farm to Your Table',
      img: 'assets/images/banner-1.jpg',
      align: 'text-right'
    }
  ];


  features = [
    {
      icon: 'pi pi-check-circle',
      title: 'Organic & Fresh',
      description: 'All our products are 100% organic and delivered fresh daily',
      image: 'assets/images/service-1.jpg'
    },
    {
      icon: 'pi pi-heart',
      title: 'Family Owned',
      description: 'A family business with 25+ years of dairy farming experience',
      image: 'assets/images/service-2.jpg'
    },
    {
      icon: 'pi pi-shield',
      title: 'Quality Assured',
      description: 'Rigorous quality control ensures the best products for you',
      image: 'assets/images/service-3.jpg'
    }
  ];

  services = [
    {
      title: 'Best Animal Selection',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
      image: 'assets/images/service-1.jpg'
    },
    {
      title: 'Breeding & Veterinary',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
      image: 'assets/images/service-2.jpg'
    },
    {
      title: 'Care & Milking',
      description: 'Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.',
      image: 'assets/images/service-3.jpg'
    }
  ];

  products = [
    { name: 'Pure Milk', image: 'assets/images/product-1.jpg' },
    { name: 'Fresh Meat', image: 'assets/images/product-2.jpg' },
    { name: 'Dairy Products', image: 'assets/images/product-3.jpg' },
    { name: 'Organic Food', image: 'assets/images/product-4.jpg' }
  ];

  teamMembers = [
    {
      name: 'Adam Phillips',
      position: 'CEO & Founder',
      image: 'assets/images/team-1.jpg'
    },
    {
      name: 'Dylan Hunter',
      position: 'Head Farmer',
      image: 'assets/images/team-2.jpg'
    },
    {
      name: 'Jhon Doe',
      position: 'Veterinarian',
      image: 'assets/images/team-3.jpg'
    }
  ];

  testimonials = [
    {
      name: 'Client Name',
      profession: 'Profession',
      image: 'assets/images/testimonial-1.jpg',
      review: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet'
    },
    {
      name: 'Client Name',
      profession: 'Profession', 
      image: 'assets/images/testimonial-2.jpg',
      review: 'Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet'
    }
  ];

  blogPosts = [
    {
      title: 'How to cultivate organic fruits and vegetables in own firm',
      excerpt: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      author: 'Admin',
      category: 'Dairy',
      date: '01 Jan, 2045',
      image: 'assets/images/gallery-1.jpg'
    },
    {
      title: 'How to cultivate organic fruits and vegetables in own firm',
      excerpt: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      author: 'Admin',
      category: 'Dairy',
      date: '01 Jan, 2045',
      image: 'assets/images/gallery-2.jpg'
    },
    {
      title: 'How to cultivate organic fruits and vegetables in own firm',
      excerpt: 'Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam',
      author: 'Admin',
      category: 'Dairy',
      date: '01 Jan, 2045',
      image: 'assets/images/gallery-3.jpg'
    }
  ];

  galleryColumns = [
    [
      { src: 'assets/images/gallery-5.jpg', alt: 'Gallery 5' },
      { src: 'assets/images/gallery-1.jpg', alt: 'Gallery 1' }
    ],
    [
      { src: 'assets/images/gallery-2.jpg', alt: 'Gallery 2' },
      { src: 'assets/images/gallery-6.jpg', alt: 'Gallery 6' }
    ],
    [
      { src: 'assets/images/gallery-7.jpg', alt: 'Gallery 7' },
      { src: 'assets/images/gallery-3.jpg', alt: 'Gallery 3' }
    ],
    [
      { src: 'assets/images/gallery-4.jpg', alt: 'Gallery 4' },
      { src: 'assets/images/gallery-8.jpg', alt: 'Gallery 8' }
    ]
  ];

  bannerSection = {
    backgroundImage: 'assets/images/banner.jpg',
    items: [
      {
        image: 'assets/images/banner-1.jpg',
        title: 'We Sell Best Dairy Products',
        description: 'Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet',
        buttonText: 'Read More'
      },
      {
        image: 'assets/images/banner-2.jpg',
        title: 'We Deliver Fresh Milk Worldwide',
        description: 'Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet',
        buttonText: 'Read More'
      }
    ]
  };
}