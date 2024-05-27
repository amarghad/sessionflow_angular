import {Identified} from "../../models/identified.model";
import {HttpSecretary} from "../../utils/http-secretary";

export interface RepositoryService<T extends Identified> {

  search(keyword : string) : HttpSecretary<Array<T>>;
  get(id : number | string) : HttpSecretary<T>;
  delete(element : T) : HttpSecretary<T>;
  update(element : T) : HttpSecretary<T>;
  save(element : T) : HttpSecretary<T>;

}
