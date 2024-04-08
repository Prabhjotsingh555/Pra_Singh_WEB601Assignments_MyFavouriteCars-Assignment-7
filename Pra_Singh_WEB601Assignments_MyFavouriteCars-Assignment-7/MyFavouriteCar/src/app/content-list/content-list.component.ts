import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import { ContentCardComponent } from '../content-card/content-card.component';
import { FilterPipePipe } from '../filter-pipe.pipe';
import { carserviceService } from '../car-service.service';
import { ModifyContentComponent } from '../modify-content/modify-content.component';
import { MessagesServiceService } from '../messages-service.service';

@Component({
  selector: 'app-content-list',
  standalone: true,
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
  imports: [
    CommonModule,
    ContentCardComponent,
    FilterPipePipe,
    FormsModule,
    ModifyContentComponent,
  ],
})
export class ContentListComponent implements OnInit {
  contentArray: Content[] = [];

  constructor(
    private carservice: carserviceService,
    private messageService: MessagesServiceService
  ) {}

  onContentAdded(newContent: Content) {
    //this.contentArray.push(newContent);
    this.messageService.sendMessage(
      `Content '${newContent.title}' added successfully!`
    );
  }
  ngOnInit() {
    this.loadContentArray();
  }

  loadContentArray() {
    this.carservice.getContentArray().subscribe((data) => {
      this.contentArray = data;
      console.log('Content array loaded!');
    });
  }

  searchTitle: string = '';
  searchMsg: string = '';
  searchClr: string = '';

  searchCard(): void {
    const foundContent = this.contentArray.find(
      (content) => content.title.toLowerCase() === this.searchTitle
    );

    if (foundContent) {
      this.searchMsg = `Title "${this.searchTitle}" exists in Content.`;
      this.searchClr = 'green';
    } else {
      this.searchMsg = `Title "${this.searchTitle}" doesn't exist in Content.`;
      this.searchClr = 'red';
    }
  }
}
