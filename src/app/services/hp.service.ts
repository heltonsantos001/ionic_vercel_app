import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Book {
  cover: string;
  number: number;
  originalTitle: string;
  releaseDate: string;
  pages: number;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class HpService {
  private api = 'https://potterapi-fedeperin.vercel.app/en/books/random';

  constructor(private http: HttpClient) {}

  getRandomBook(): Observable<Book> {
    return this.http.get<Book>(this.api);
  }
}
