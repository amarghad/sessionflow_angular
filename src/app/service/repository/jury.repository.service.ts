import {RepositoryService} from "./repository.service";
import {JuryMember} from "../../models/jury-member";
import { HttpSecretary } from "../../utils/http-secretary";
import { PageRequest } from "../../utils/page-request";
import {Injectable} from "@angular/core";
import {secretarySubscribe} from "../../utils/secretary-subscribe";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class JuryRepositoryService implements RepositoryService<JuryMember> {

  private REPOSITORY : string = "http://localhost:8080/jury"
  constructor(private http : HttpClient) {
  }

  @secretarySubscribe
  search(keyword: string): HttpSecretary<JuryMember[]> {
      // @ts-ignore
      return this.http.get<Array<JuryMember>>(this.REPOSITORY);
    }
    get(id: string | number): HttpSecretary<JuryMember> {
        throw new Error("Method not implemented.");
    }
    delete(element: JuryMember): HttpSecretary<JuryMember> {
        throw new Error("Method not implemented.");
    }
    update(element: JuryMember): HttpSecretary<JuryMember> {
        throw new Error("Method not implemented.");
    }
    @secretarySubscribe
    save(element: JuryMember): HttpSecretary<JuryMember> {
        // @ts-ignore
        return this.http.post<JuryMember>(this.REPOSITORY, element);
    }

}
