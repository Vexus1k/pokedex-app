import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PokedexService } from "../../core/services/PokedexService";
import { finalize } from "rxjs";
import FuzzySearch from 'fuzzy-search';

@Component({
  selector: 'app-pokedex-list-page',
  templateUrl: './pokedex-list-page.component.html',
  styleUrls: ['./pokedex-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokedexListPageComponent implements OnInit {
  public pokemons = [];

  public constructor(
    private readonly _pokedexService: PokedexService,
    private readonly _cdr: ChangeDetectorRef
  ) {}

  public ngOnInit(): void {
    this.getPokemons();
  }

  public getPokemons(offset?: number, search = ''): void {
    this.pokemons = [];

    this._pokedexService.getPokemons(offset).subscribe((res: any) => {
      for (let info of res?.results) {
        this._pokedexService.getPokemonDetails(info?.name).pipe(
          finalize(() => {
            this.pokemons.sort((a, b) => a.id - b.id);

            if (search) {
              const searcher = new FuzzySearch(this.pokemons, ['name'], {
                caseSensitive: true,
              });

              this.pokemons = searcher.search(search);
            }

            this._cdr.detectChanges();
          })
        ).subscribe((res) => {
          this.pokemons.push(res);
        });
      }
    });
  }
}
