import { Component, NgModule } from "@angular/core";
import { RouterOutlet, RouterLinkActive, RouterLink, Router } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { NgifComponent } from "./ngif/ngif.component";
import { NgForComponent } from "./ng-for/ng-for.component";
import { NgClassComponent } from "./ng-class/ng-class.component";
import { NgStyleComponent } from "./ng-style/ng-style.component";
import { SignalComponent } from "./signal/signal.component";
import { LinkSignalComponent } from "./link-signal/link-signal.component";
import { GetApiComponent } from "./get-api/get-api.component";
import { PostApiComponent } from "./post-api/post-api.component";

@Component({
  selector: "app-root",
  imports: [
    FormsModule,
    NgifComponent,
    NgForComponent,
    NgClassComponent,
    NgStyleComponent,
    SignalComponent,
    LinkSignalComponent,
    RouterOutlet,
    RouterLink,
    GetApiComponent,
    PostApiComponent
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css",
})
export class AppComponent {
  firstName: string = "Cheten";
  firstName2: string = "";
  rollNo: number = 123;
  isActive: boolean = false;
  currentDate: Date = new Date();
  myPlaceholder: string = "Введите пожалуйста имя";
  divClassName: string = "bg-porimary";
  selectedCity: string = "";

  constructor(private router: Router) {
    console.log(this.firstName);

    this.isActive = true;
    console.log(this.isActive);
  }

  editClassName() {
    this.divClassName = "bg-green";
  }

  showWelcomeMessage() {
    alert("Сообщение сработало");
  }

  onCitychanges() {
    alert("Город выбран");
  }


  navigetToAdmin(){
    this.router.navigateByUrl("/ngfor")
  }
}
