import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PokedexService {
  private readonly _basePath = 'https://pokeapi.co/api/v2/';

  public constructor(
    private readonly _http: HttpClient
  ) {}

  public getPokemons(offset = 0): Observable<Object> {
    return this._http.get(`${this._basePath}pokemon?limit=99&offset=${offset}`);
  }

  public getPokemonDetails(pokemonName: string): Observable<Object> {
    return this._http.get(`${this._basePath}pokemon/${pokemonName}`);
  }
}
