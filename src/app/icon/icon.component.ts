import { Component, OnInit } from "@angular/core";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { faStarHalf } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "star-icon",
  template: `
    <div (click)="onDivClicked()">
      <fa-icon [icon]="faStar"></fa-icon>
      <fa-icon [icon]="faStarHalf"></fa-icon>
    </div>
  `

  // templateUrl: "./icon.component.html"
  // styleUrls: ["./icon.component.css"]
})
export class IconComponent implements OnInit {
  constructor() {}
  isFavorite = false;

  faStar = faStar;
  faStarHalf = faStarHalf;

  onDivClicked() {
    this.isFavorite = !this.isFavorite;
  }

  ngOnInit(): void {}
}
