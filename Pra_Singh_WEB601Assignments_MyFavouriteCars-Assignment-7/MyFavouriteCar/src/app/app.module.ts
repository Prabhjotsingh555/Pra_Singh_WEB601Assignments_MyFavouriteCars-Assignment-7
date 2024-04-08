import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HoverAffectDirective } from './hover-affect.directive';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { InMemoryDataService } from './services/in-memory-data.service';
import { ContentCardComponent } from "./content-card/content-card.component";
import { ContentListComponent } from "./content-list/content-list.component";
import { ContentMessageComponent } from "./content-message/content-message.component";



@NgModule({
    declarations: [AppComponent],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        CommonModule,
        HoverAffectDirective,
        FormsModule,
        HttpClientModule,
        HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
        ContentCardComponent,
        ContentListComponent,
        ContentMessageComponent
    ]
})
export class AppModule { }
