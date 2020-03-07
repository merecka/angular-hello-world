import { Component, OnInit } from "@angular/core";
import { CoursesService } from "./courses.service";

@Component({
  selector: "courses",
  template: `
    {{ course.title | uppercase | lowercase }} <br />
    {{ course.students | number }} <br />
    {{ course.rating | number: "1.2-2" }} <br />
    {{ course.price | currency: "AUD":true:"3.2-2" }} <br />
    {{ course.releaseDate | date: "shortDate" }} <br />
    {{ text | summary: 10 }} <br />

    <div (click)="onDivClicked()">
      <input [(ngModel)]="email" (keyup.enter)="onKeyUp()" />
      <button
        class="btn btn-primary"
        [class.active]="isActive"
        [style.backgroundColor]="isActive ? 'blue' : 'white'"
        (click)="onSave($event)"
      >
        Save
      </button>
      <div></div>
    </div>
  `
  // templateUrl: "./courses.component.html"
  // styleUrls: ["./courses.component.css"]
})
export class CoursesComponent implements OnInit {
  isActive = true;
  courses;
  email = "me@example.com";
  course = {
    title: "The Complete Angular Course",
    rating: 4.9745,
    students: 30123,
    price: 190.95,
    releaseDate: new Date(2016, 3, 1)
  };
  text = `Some example text that I am using for this example.`;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }

  onKeyUp() {
    console.log(this.email);
  }

  onDivClicked() {
    console.log("Div was clicked");
  }

  onSave($event) {
    $event.stopPropagation();
    console.log("Button was clicked", $event);
  }

  ngOnInit(): void {}
}
