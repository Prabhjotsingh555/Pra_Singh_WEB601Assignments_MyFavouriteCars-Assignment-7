import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { HoverAffectDirective } from '../hover-affect.directive';



@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule, HoverAffectDirective],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  
  @Input() content: any;

  onCardClick(content: any): void {
    console.log(`Card Clicked - ID: ${content.id} and Title: ${content.title}`);
  }
}
