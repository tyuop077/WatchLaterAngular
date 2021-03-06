import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MovieService} from "../../services/movie.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'watch-later';
  form: FormGroup;

  movies$ = this.movieService.movies$; // Movie[]
  hideNotFound = true;
  selected = 0;

  constructor(private fb: FormBuilder, private movieService: MovieService) {
    this.form = this.fb.group({
      searchInput: []
    });
    this.form.get("searchInput")!.valueChanges.subscribe(res => {
      this.movieService.search(res)
      this.hideNotFound = !Boolean(res);
    })
  }

  onToggleChange(n: number) {
    this.selected = n;
  }
}
