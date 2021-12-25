import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Movie} from "../entities/Movie";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  movies$: BehaviorSubject<Movie[]> = new BehaviorSubject<Movie[]>([]);
  constructor(private http: HttpClient) {
    http.get("https://wl.api.tyuop.tk/movies").subscribe((data: any) => this.movies$ = new BehaviorSubject<Movie[]>(data))
  }
}
