import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AuthorComponent } from "./author/author.component";
import { AuthorsComponent } from "./author/authors.component";
import { AuthorsService } from "./author/authors.service";
import { CoursesComponent } from "./courses/courses.component";
import { CoursesService } from "./courses/courses.service";
import { SummaryPipe } from "./summary.pipe";
import { IconComponent } from "./icon/icon.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MovieComponent } from './movie/movie.component';
import { TitleCasePipe } from './title-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AuthorComponent,
    AuthorsComponent,
    CoursesComponent,
    SummaryPipe,
    IconComponent,
    MovieComponent,
    TitleCasePipe
  ],
  imports: [BrowserModule, FormsModule, FontAwesomeModule],
  providers: [AuthorsService, CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
