import { Component } from "@angular/core";
import { AuthorsService } from "./authors.service";

@Component({
  selector: "authors",
  templateUrl: "./authors.component.html"
})
export class AuthorsComponent {
  authors;

  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }
}
