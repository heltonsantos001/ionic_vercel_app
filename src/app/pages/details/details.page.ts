import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FavoritesService } from '../../services/favorites.service';
import { Book } from '../../services/hp.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: false,
})
export class DetailsPage {
  book!: Book;

  constructor(
    private router: Router,
    private fav: FavoritesService,
    private alertCtrl: AlertController
  ) {}

  ionViewWillEnter() {
    this.book = history.state.book;
    if (!this.book) {
      this.router.navigate(['/home']);
    }
  }

  async addFavorite() {
    this.fav.addFavorite(this.book);
    const alert = await this.alertCtrl.create({
      header: 'Realizado',
      message: 'Livro favoritado',
      buttons: ['OK'],
    });
    await alert.present();
  }

  goHome() {
    this.router.navigate(['/home']);
  }
}
