import { IShowTime } from "./ishowtime";
// IShow Time
export class ShowTime implements IShowTime {
  id?: number;
  moviename: string;
  date: string;
  time: string;
  fare: string;
}
