import {Component, OnInit} from '@angular/core';
import {Session} from "../../../models/session";
import {SessionRepositoryService} from "../../../service/repository/session.repository.service";
import {ReservationRepositoryService} from "../../../service/repository/reservation.repository.service";

@Component({
  selector: 'make-reservation',
  templateUrl: './make.reservation.component.html'
})
export class MakeReservationComponent implements OnInit{

  sessions!: Array<Session>;
  selectedSession: string | null = null;

  constructor(private sessionRepository : SessionRepositoryService,
              private reservationRepository : ReservationRepositoryService) {
  }

  ngOnInit(): void {
    this.sessionRepository.nearest().output$.subscribe(x => this.sessions = x);
  }

  selectSession(sessionId: string): void {
    // Set the selected session
    this.selectedSession = sessionId;
  }


  submitSession() {
    if (this.selectedSession != null) {
      this.reservationRepository.make(this.selectedSession).output$.subscribe(x => {
        alert("Réservation effectué");
      });
    }
  }
}
