import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Movie} from "../entities/Movie";

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  movies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>(movies);
  constructor() { }
}

const movies: Movie[] = [
  {
    id: 0,
    title: "test",
    thumbnail_url: "",
    rating: 0,
    date: 2021,
    description: "",
    genres: []
  }
]
