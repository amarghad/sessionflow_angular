import {Candidate} from "./candidate";

export enum ReservationStatus {
  PENDING,
  CONFIRMED,
  CANCELLED
}
export interface Reservation {
  id: string;
  status: ReservationStatus;
  candidateDto: Candidate;
}
