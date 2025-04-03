import { Routes } from "@angular/router";
import { SignalComponent } from "./signal/signal.component";
import { NgClassComponent } from "./ng-class/ng-class.component";
import { AdminComponent } from "./admin/admin.component";
import { NgForComponent } from "./ng-for/ng-for.component";

export const routes: Routes = [
  { path: "", redirectTo: "signal", pathMatch: "full" },
  { path: "signal", component: SignalComponent },
  { path: "ngclass", component: NgClassComponent },
  { path: "admin", component: AdminComponent },
  { path: "ngfor", component: NgForComponent },

];
