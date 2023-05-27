import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { PokedexListPageComponent } from "../../../pokedex-list/pages/pokedex-list-page/pokedex-list-page.component";

@Component({
  selector: 'app-base-layout',
  templateUrl: './base-layout.component.html',
  styleUrls: ['./base-layout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseLayoutComponent {
  @Input() pokedexListPageComponent: PokedexListPageComponent;
  @Input() activeIndex: number;

  public value: string;

  public sortPokemons(value: string): void {
    this.pokedexListPageComponent.getPokemons(this.activeIndex * 99 - 99, value);
  }
}
