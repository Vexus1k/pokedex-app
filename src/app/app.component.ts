import { Component, ViewChild } from '@angular/core';
import { PokedexListPageComponent } from "./pokedex-list/pages/pokedex-list-page/pokedex-list-page.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('pokedexListPageComponent') pokedexListPageComponent: PokedexListPageComponent;

  public activeIndex = 1;
  public readonly array13 = Array(13).fill(0);

  public changePage(pageNumber: number): void {
    console.log(pageNumber)
    if (!pageNumber || pageNumber > 13) { return }

    this.activeIndex = pageNumber;
    console.log(pageNumber * 99 - 99);
    this.pokedexListPageComponent.getPokemons(pageNumber * 99 - 99)
  }
}
