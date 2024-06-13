import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RickMortyService } from '../services/rick-morty.service';
import { forkJoin, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {
  character: any;
  episodes: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private rickMortyService: RickMortyService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.rickMortyService.getCharacter(id).pipe(
        switchMap((character: any) => {
          this.character = character;
          return this.loadEpisodes();
        })
      ).subscribe({
        next: (episodes: any[]) => {
          this.episodes = episodes;
        },
        error: (error: any) => { // Definindo explicitamente o tipo do parâmetro error
          console.error('Failed to load episodes', error);
        }
      });
    }
  }

  loadEpisodes(): Observable<any[]> {
    if (!this.character || !this.character.episode) {
      return of([]);
    }

    const episodeObservables: Observable<any>[] = this.character.episode.map((episodeUrl: string) =>
      this.rickMortyService.getEpisode(episodeUrl)
    );

    return forkJoin(episodeObservables) as Observable<any[]>;
  }

  getOriginName(): string {
    return this.character && this.character.origin ? this.character.origin.name : '';
  }
}
