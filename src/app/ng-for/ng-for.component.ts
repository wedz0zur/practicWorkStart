import { NgFor } from '@angular/common';
import { Component } from '@angular/core';


@Component({
  selector: 'app-ng-for',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {
  cityList: string[] = ["Магас", "Назрань", "Малгобек", "Карабулак", "Сунжа"]

  employeeArray: any[] = [
    {empid: 121, name: "Мага", city: "Магас", contactNo: "9829923929342"},
    {empid: 121, name: "Муса", city: "Назрань", contactNo: "9829923929342"},
    {empid: 121, name: "Чанга", city: "Малгобек", contactNo: "9829923929342"},
    {empid: 121, name: "Ахмед", city: "Карабулак", contactNo: "9829923929342"},
    {empid: 121, name: "Рома", city: "Сунжа", contactNo: "9829923929342"},
  ]
}
