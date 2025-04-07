import { HttpClient } from "@angular/common/http";
import { Component, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-post-api",
  imports: [FormsModule],
  templateUrl: "./post-api.component.html",
  styleUrl: "./post-api.component.css",
})
export class PostApiComponent {
  carList: any[] = [];
  carObj: any = {
    carId: 0,
    brand: "",
    model: "",
    year: 0,
    color: "",
    dailyRate: 0,
    carImage: "",
    regNo: "",
  };

  http = inject(HttpClient);
  getCars() {
    return this.http
      .get("https://67c966760acf98d0708a1df9.mockapi.io/cars/carList")
      .subscribe((res: any) => {
        this.carList = res;
      });
  }

  addCar() {
    this.http
      .post(
        "https://67c966760acf98d0708a1df9.mockapi.io/cars/carList",
        this.carObj
      )
      .subscribe((res: any) => {
        if (res.id) {
          alert("Авто добавлено");
        }else{
          alert("Ошибка добавления")
        }
        this.getCars();
      });
  }
}
