import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { PokedexService } from "../../core/services/PokedexService";
import { finalize } from "rxjs";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-pokedex-list-page',
  templateUrl: './pokedex-list-page.component.html',
  styleUrls: ['./pokedex-list-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PokedexListPageComponent implements OnInit {
  public pokemons = [];

  constructor(
    private readonly _pokedexService: PokedexService,
    private readonly _cdr: ChangeDetectorRef,
    private readonly _route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.getPokemons();
  }

  public getPokemons(offset?: number): void {
    this.pokemons = [];

    this._pokedexService.getPokemons(offset).subscribe((res: any) => {
      for (let info of res?.results) {
        this._pokedexService.getPokemonDetails(info?.name).pipe(finalize(() => {
          this.pokemons.sort((a, b) => a.id - b.id);
          this._cdr.detectChanges();
        })).subscribe((res) => {
          this.pokemons.push(res);
        });
      }
    });
  }
}
