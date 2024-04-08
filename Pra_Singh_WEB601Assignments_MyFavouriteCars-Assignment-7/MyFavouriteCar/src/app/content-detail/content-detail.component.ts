import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Content } from '../helper-files/content-interface';
import { carserviceService } from '../car-service.service';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-content-detail',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterLink],
  templateUrl: './content-detail.component.html',
  styleUrl: './content-detail.component.scss',
})
export class ContentDetailComponent {
  id!: number;
  content!: Content;
  constructor(
    private natureService: carserviceService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: { get: (arg0: string) => any }) => {
      this.id = +(params.get('id') ?? 0);
      this.natureService.getContentItemById(this.id).subscribe((c: Content) => {
        this.content = c;
      });
    });
  }
}
