import { IMovieBase } from "./imoviebase";
// I Movie
export interface IMovie extends IMovieBase {
    estPossessionOn?: string;
    movieDescription: string;
    rating: string;


}
