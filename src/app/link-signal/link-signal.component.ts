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

  user = signal({id: 111, name: 'Chetan'})
  
  email = linkedSignal({
    source: this.user,
    computation: ((user)=>`${user.name + user.id}@gmail.com`),
    equal:(a:any, b:any)=> a.id !== b.id
  })

  changeName(){
    debugger;
    this.firstName.set("Джанго")
    debugger;

  }

  changeId(){
    debugger
    this.user.set({id: 123, name: "Chetan"})
    debugger
  }
}
