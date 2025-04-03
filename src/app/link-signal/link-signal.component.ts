import { Component, linkedSignal, signal } from "@angular/core";

@Component({
  selector: "app-link-signal",
  imports: [],
  templateUrl: "./link-signal.component.html",
  styleUrl: "./link-signal.component.css",
})
export class LinkSignalComponent {
  firstName = signal("Iba");
  lastName = signal("Aushev");

  fullName = linkedSignal({
    source: this.firstName,
    computation: (newOptions, previous) => {
      const fullName = newOptions + " " + this.lastName();
      return fullName;
    },
  });
}
