import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HpService, Book } from '../../services/hp.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: false,
})
export class HomePage {
  book!: Book;
  loading = true;

  constructor(private hp: HpService, private router: Router) {}

  ionViewWillEnter() {
    this.loadBook();
  }

  loadBook() {
    this.loading = true;
    this.hp.getRandomBook().subscribe((data: Book) => {
      this.book = data;
      this.loading = false;
    });
  }

  goToDetails() {
    this.router.navigate(['/details'], { state: { book: this.book } });
  }
}
