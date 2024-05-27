import {JuryMember} from "./jury-member";

export interface Session {
  id: string;
  date: Date;
  max: number;
  start: string; // Using string for LocalTime representation
  end: string; // Using string for LocalTime representation
  juryMembers: JuryMember[];
}
