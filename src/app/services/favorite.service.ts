// favorite.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  private favorites: any[] = []; // Array para armazenar favoritos

  constructor() { }

  getFavorites() {
    return this.favorites;
  }

  addToFavorites(character: any) {
    if (!this.isFavorite(character)) {
      this.favorites.push(character);
    }
  }

  removeFromFavorites(character: any) {
    this.favorites = this.favorites.filter(fav => fav.id !== character.id);
  }

  isFavorite(character: any): boolean {
    return this.favorites.some(fav => fav.id === character.id);
  }
}
