import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CardModule, ButtonModule, TagModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products = [
    {
      name: 'Fresh Whole Milk',
      description: 'Rich, creamy whole milk from grass-fed cows',
      price: 4.99,
      category: 'Fresh',
      icon: 'pi pi-circle',
      image: 'assets/images/product-1.jpg'
    },
    {
      name: 'Organic Butter',
      description: 'Churned fresh daily from organic cream',
      price: 6.99,
      category: 'Premium',
      icon: 'pi pi-stop',
      image: 'assets/images/product-2.jpg'
    },
    {
      name: 'Greek Yogurt',
      description: 'Thick, protein-rich yogurt with live cultures',
      price: 5.49,
      category: 'Fresh',
      icon: 'pi pi-circle-fill',
      image: 'assets/images/product-3.jpg'
    },
    {
      name: 'Aged Cheddar',
      description: 'Sharp cheddar aged for 12 months',
      price: 8.99,
      category: 'Premium',
      icon: 'pi pi-stop-circle',
      image: 'assets/images/product-4.jpg'
    },
    {
      name: 'Heavy Cream',
      description: 'Rich cream perfect for cooking and baking',
      price: 3.99,
      category: 'Fresh',
      icon: 'pi pi-circle-off',
      image: 'assets/images/gallery-4.jpg'
    },
    {
      name: 'Cottage Cheese',
      description: 'Low-fat, high-protein cottage cheese',
      price: 4.49,
      category: 'Fresh',
      icon: 'pi pi-circle',
      image: 'assets/images/gallery-5.jpg'
    }
  ];
}