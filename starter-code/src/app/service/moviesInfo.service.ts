import { Injectable } from "@angular/core";
import { movies } from "../sample-movies";

interface movies {
  id: Number;
  title: String;
  poster: String;
  synopsis: String;
  genres: Array<String>;
  year: Number;
  director: String;
  actors: Array<String>;
  hours: Array<String>;
  room: Number;
}

@Injectable()
export class InfoMovies {
  movies: Array<movies> = movies;
  constructor() {}

  getMovies() {
    return this.movies;
  }
  getMovie(id) {
    return movies.find(function (obj) { return obj.id === id; });
  }
}
