import { Component, OnInit } from "@angular/core";
import { InfoMovies } from "../service/moviesInfo.service";

@Component({
  selector: "app-my-home",
  templateUrl: "./my-home.component.html",
  styleUrls: ["./my-home.component.css"]
})
export class MyHomeComponent implements OnInit {
  constructor(public iM: InfoMovies) {}
  movies: Array<any> = [];

  ngOnInit() {
    this.movies = this.iM.getMovies();
  }
}
