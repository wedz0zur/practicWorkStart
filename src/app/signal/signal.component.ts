import { ChangeDetectionStrategy, Component, signal } from "@angular/core";

@Component({
  selector: "app-signal",
  imports: [],
  templateUrl: "./signal.component.html",
  styleUrl: "./signal.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignalComponent {
  firstName = signal("Джабака");
  lastName = signal<string>("Нурмагомедов");
  courseName: string = "JavaScript"

  rollNo = signal<number>(0)
 
  constructor(){
    const value = this.firstName()

    setTimeout(()=>{
      debugger;
      this.courseName = "React JS"
      this.firstName.set("Джабраил")

    }, 5000)
    debugger;
  }

  onIncrement(){
    this.rollNo.update(oldValue => oldValue+1)
  }
}
