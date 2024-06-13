// characters.page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RickMortyService } from '../services/rick-morty.service';
import { FavoriteService } from '../services/favorite.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.page.html',
  styleUrls: ['./characters.page.scss'],
})
export class CharactersPage {
  characters: any[] = [];
  nextPage: number = 1; // Página atual de personagens

  constructor(
    private router: Router,
    private rickMortyService: RickMortyService,
    private favoriteService: FavoriteService // Injeta o serviço de favoritos
  ) {}

  ngOnInit() {
    this.loadCharacters();
  }

  loadCharacters() {
    this.rickMortyService.getCharacters(this.nextPage).subscribe(data => {
      this.characters = [...this.characters, ...data.results]; // Adiciona os novos personagens ao array existente
      this.nextPage++; // Incrementa a próxima página
    });
  }

  toggleFavorite(character: any) {
    if (this.favoriteService.isFavorite(character)) {
      this.favoriteService.removeFromFavorites(character);
    } else {
      this.favoriteService.addToFavorites(character);
    }
  }

  loadMoreCharacters(event: any) {
    this.loadCharacters(); // Carrega mais personagens
    event.target.complete(); // Completa o evento de carregamento
  }

  showCharacterDetails(character: any) {
    this.router.navigate(['/character-details', character.id]);
  }

  isFavorite(character: any): boolean {
    return this.favoriteService.isFavorite(character);
  }
}