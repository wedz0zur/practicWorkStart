import { Component } from "@angular/core";
import { NgIf } from "@angular/common";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-ngif",
  imports: [NgIf, FormsModule],
  templateUrl: "./ngif.component.html",
  styleUrl: "./ngif.component.css",
})
export class NgifComponent {
  div1Visable: boolean = false;
  number1: string = "";
  number2: string = "";
  showDiv1() {
    this.div1Visable = true;
  }
  hideShowDiv1() {
    this.div1Visable = false;
  }

  showHideDiv1() {
    this.div1Visable = !this.div1Visable;
  }
}
