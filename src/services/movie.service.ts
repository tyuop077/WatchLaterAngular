import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Movie} from "../entities/Movie";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  movies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>(movies);

  constructor(private http: HttpClient) {
    http.get("https://wl.api.tyuop.tk/movies").subscribe((data: any) => {
      movies = data;
      //this.movies$.next(data) // no need to show it on first start
    })
  }

  search(query: string) {
    if (query.length < 1) return this.movies$.next([]);
    const res = movies.filter(movie => movie.title.toLowerCase().includes(query.toLowerCase()));
    //if (res.length === 0) return this.movies$.next([{title: "Фильм не найден"}])
    this.movies$.next(res)
  }
}

let movies: Movie[] = []
