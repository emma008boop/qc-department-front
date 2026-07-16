import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-news-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss',
})
export class NewsCardComponent {
  @Input() imageSrc: string = '';
  @Input() imageAlt: string = '';
  @Input() title: string = '';      
  @Input() description: string = '';
  @Input() label?: string;
  @Input() date: string = '';       
}