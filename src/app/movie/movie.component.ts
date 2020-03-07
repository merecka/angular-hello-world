import { Component, OnInit } from "@angular/core";

@Component({
  selector: "movie",
  template: `
    <input type="text" [(ngModel)]="title" /><br />
    {{ title | titleCase }}
  `

  // templateUrl: './movie.component.html',
  // styleUrls: ["./movie.component.css"]
})
export class MovieComponent implements OnInit {
  constructor() {}

  title = "Enter a movie title";

  ngOnInit(): void {}
}
