import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Movie} from "../entities/Movie";

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  movies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>(movies);

  constructor() { }

  search(query: string) {
    if (query.length < 1) return this.movies$.next([]);
    const res = movies.filter(movie => movie.title.toLowerCase().startsWith(query.toLowerCase()));
    this.movies$.next(res)
  }
}

const movies: Movie[] = [
  {
    id: 1,
    title: "Минари",
    thumbnail_url: "https://wl.api.tyuop.tk/img/1_Minari.png",
    rating: 6.9,
    date: 2020
  },
  {
    id: 2,
    title: "Солнцестояние",
    thumbnail_url: "https://wl.api.tyuop.tk/img/2_Solncestoaniye.png",
    rating: 6.6,
    date: 2019
  },
  {
    id: 3,
    title: "Манк",
    thumbnail_url: "https://wl.api.tyuop.tk/img/3_Mank.png",
    rating: 7.1,
    date: 2020
  },
  {
    id: 4,
    title: "Девушка, подающая надежды",
    thumbnail_url: "https://wl.api.tyuop.tk/img/4_Devushka.png",
    rating: 6.8,
    date: 2020
  },
  {
    id: 5,
    title: "Земля кочевников",
    thumbnail_url: "https://wl.api.tyuop.tk/img/5_Zemlya.png",
    rating: 7.3,
    date: 2020
  },
  {
    id: 6,
    title: "Отец",
    thumbnail_url: "https://wl.api.tyuop.tk/img/6_Otets.png",
    rating: 7.9,
    date: 2020
  },
  {
    id: 7,
    title: "Ещё по одной",
    thumbnail_url: "https://wl.api.tyuop.tk/img/7_Drunk.png",
    rating: 7.9,
    date: 2020
  },
  {
    id: 8,
    title: "Душа",
    thumbnail_url: "https://wl.api.tyuop.tk/img/8_Soul.png",
    rating: 8.3,
    date: 2020
  }
]
