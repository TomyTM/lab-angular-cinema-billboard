import { Component, OnInit } from '@angular/core';
import { InfoMovies } from "../service/moviesInfo.service";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  id:number;
  movie:any;

  constructor(private iM: InfoMovies, private router: ActivatedRoute) { }
  

  ngOnInit() {
    this.router.params.subscribe((p)=>this.movie = this.iM.getMovie(Number(p.id)));
    console.log(this.movie)
  }

}
