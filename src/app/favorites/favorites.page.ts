// favorites.page.ts

import { Component, OnInit } from '@angular/core';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
  favorites: any[] = [];

  constructor(private favoriteService: FavoriteService) {}

  ngOnInit() {
    this.favorites = this.favoriteService.getFavorites();
  }

  removeFromFavorites(character: any) {
    this.favoriteService.removeFromFavorites(character);
    this.favorites = this.favoriteService.getFavorites(); // Atualiza a lista após a remoção
  }
}
