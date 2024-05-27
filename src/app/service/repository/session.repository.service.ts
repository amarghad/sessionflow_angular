import {RepositoryService} from "./repository.service";
import { HttpSecretary } from "../../utils/http-secretary";
import { PageRequest } from "../../utils/page-request";
import {Injectable} from "@angular/core";
import {secretarySubscribe} from "../../utils/secretary-subscribe";
import {HttpClient} from "@angular/common/http";
import {Session} from "../../models/session";

@Injectable({
  providedIn: 'root'
})
export class SessionRepositoryService implements RepositoryService<Session> {

  private REPOSITORY : string = "http://localhost:8080/sessions"
  constructor(private http : HttpClient) {
  }

  @secretarySubscribe
  nearest(): HttpSecretary<Session[]> {
    // @ts-ignore
    return this.http.get<Array<Session>>(`${this.REPOSITORY}/nearest`);
  }
  @secretarySubscribe
  search(keyword: string): HttpSecretary<Session[]> {
    // @ts-ignore
    return this.http.get<Array<Session>>(this.REPOSITORY);
  }
  get(id: string | number): HttpSecretary<Session> {
      throw new Error("Method not implemented.");
  }
  delete(element: Session): HttpSecretary<Session> {
      throw new Error("Method not implemented.");
  }
  update(element: Session): HttpSecretary<Session> {
      throw new Error("Method not implemented.");
  }
  @secretarySubscribe
  save(element: Session): HttpSecretary<Session> {
      // @ts-ignore
      return this.http.post<Session>(this.REPOSITORY, element);
  }



}
