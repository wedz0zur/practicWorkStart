import { NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-style',
  imports: [NgStyle, FormsModule],
  templateUrl: './ng-style.component.html',
  styleUrl: './ng-style.component.css'
})
export class NgStyleComponent {
divBckColor: string= '';
isChecked: boolean = false

myCss: any = {
  'backround-color': 'red',
  'width': '200px',
  'height': '200px',
  'fontSize': '50px'
}

editColorDiv(color: string){
  this.divBckColor = color
}
}
