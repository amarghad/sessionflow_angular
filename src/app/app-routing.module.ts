import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {MakeReservationComponent} from "./components/reservations/make/make.reservation.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'reservations/make', component: MakeReservationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
