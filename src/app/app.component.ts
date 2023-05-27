import { ChangeDetectionStrategy, Component, ViewChild } from '@angular/core';
import { PokedexListPageComponent } from "./pokedex-list/pages/pokedex-list-page/pokedex-list-page.component";
import { BaseLayoutComponent } from "./_main/layout/base-layout/base-layout.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  @ViewChild('pokedexListPageComponent') pokedexListPageComponent: PokedexListPageComponent;
  @ViewChild('baseLayoutComponent') baseLayoutComponent: BaseLayoutComponent;

  public activeIndex = 1;
  public readonly array13 = Array(13).fill(0);

  public changePage(pageNumber: number): void {
    if (!pageNumber || pageNumber > 13) { return }

    this.activeIndex = pageNumber;

    this.pokedexListPageComponent.getPokemons(pageNumber * 99 - 99, this.baseLayoutComponent.value)
  }
}
