import { Component } from '@angular/core';
import { NewsCardComponent } from '../../shared/components/news-card.component/news-card.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [NewsCardComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  newsList = [
    {
      imageSrc: 'assets/descarga.jpeg',
      imageAlt: 'Gráfico de analítica financiera',
      title: 'Risk Mitigation Strategy', 
      description: 'We ensure compliance and mitigate risks to safeguard policy value.',
      label: 'Risk Control',
      date: '15 Jul 2026' 
    },
    {
      imageSrc: '../assets/descarga.jpeg',
      imageAlt: 'Reunión de equipo de control',
      title: 'Technical Excellence', 
      description: 'Ensuring high standards across all technical operations for our clients.',
      label: 'Compliance',
      date: '14 Jul 2026' 
    }
  ];
}