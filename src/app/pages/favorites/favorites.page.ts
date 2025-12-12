import { Component } from '@angular/core';
import { FavoritesService } from '../../services/favorites.service';
import { Router } from '@angular/router';
import { Book } from './../../services/hp.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: false,
})
export class FavoritesPage {
  favorites: Book[] = [];

  constructor(private fav: FavoritesService, private router: Router) {}

  ionViewWillEnter() {
    this.favorites = this.fav.getFavorites();
  }

  openDetails(book: Book) {
    this.router.navigate(['/details'], { state: { book } });
  }

  remove(i: number) {
    this.fav.removeFavorite(i);
    this.favorites = this.fav.getFavorites();
  }
}
