import { Component } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-get-api",
  imports: [FormsModule],
  templateUrl: "./get-api.component.html",
  styleUrl: "./get-api.component.css",
})
export class GetApiComponent {
  users: any[] = [];
  todos: any[] = []
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get("https://jsonplaceholder.typicode.com/users")
      .subscribe((res: any) => {
        this.users = res;
      });
  }
  getTodos() {
    return this.http
      .get("https://jsonplaceholder.typicode.com/todos")
      .subscribe((res: any) => {
        this.todos = res;
      });
  }
}
