import {Identified} from "./identified.model";

export interface JuryMember extends Identified{
  name: string;
  specialty: string;
}
