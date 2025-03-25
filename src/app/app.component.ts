import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormsModule} from '@angular/forms'
import { NgifComponent } from "./ngif/ngif.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FormsModule, NgifComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  firstName: string = 'Cheten';
  firstName2: string = '';
  rollNo: number = 123;
  isActive: boolean = false;
  currentDate: Date = new Date();
  myPlaceholder: string = 'Введите пожалуйста имя';
  divClassName: string = 'bg-porimary';
  selectedCity: string = ""

  constructor() {
    console.log(this.firstName);

    this.isActive = true;
    console.log(this.isActive);
  }

  editClassName() {
    this.divClassName = 'bg-green';
  }

  showWelcomeMessage() {
    alert('Сообщение сработало');
  }

  onCitychanges(){
    alert("Город выбран")
  }


}
