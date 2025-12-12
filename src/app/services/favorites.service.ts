import { Injectable } from '@angular/core';
import { Book } from './hp.service';

const STORAGE_KEY = 'favoriteBooks';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  getFavorites(): Book[] {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  }

  addFavorite(book: Book) {
    const list = this.getFavorites();
    list.push(book);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }

  removeFavorite(index: number) {
    const list = this.getFavorites();
    list.splice(index, 1);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
  }
}
