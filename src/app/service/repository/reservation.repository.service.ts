import {Injectable} from "@angular/core";
import {RepositoryService} from "./repository.service";
import { HttpSecretary } from "../../utils/http-secretary";
import {Reservation} from "../../models/reservation";
import {HttpClient} from "@angular/common/http";
import {secretarySubscribe} from "../../utils/secretary-subscribe";

@Injectable({
  providedIn: 'root'
})
export class ReservationRepositoryService implements RepositoryService<Reservation> {

    private REPOSITORY = "http://localhost:8080/reservations";

    constructor(private http : HttpClient) {
    }

    search(keyword: string): HttpSecretary<Reservation[]> {
        throw new Error("Method not implemented.");
    }
    get(id: string | number): HttpSecretary<Reservation> {
        throw new Error("Method not implemented.");
    }
    delete(element: Reservation): HttpSecretary<Reservation> {
        throw new Error("Method not implemented.");
    }
    update(element: Reservation): HttpSecretary<Reservation> {
        throw new Error("Method not implemented.");
    }
    save(element: Reservation): HttpSecretary<Reservation> {
        throw new Error("Method not implemented.");
    }

    @secretarySubscribe
    make(sessionId : string) : HttpSecretary<Reservation> {
      // @ts-ignore
      return this.http.post<Reservation>(this.REPOSITORY, sessionId);
    }

}
