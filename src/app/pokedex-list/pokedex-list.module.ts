import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokedexListPageComponent } from './pages/pokedex-list-page/pokedex-list-page.component';

@NgModule({
    declarations: [
        PokedexListPageComponent
    ],
    exports: [
        PokedexListPageComponent
    ],
    imports: [
        CommonModule
    ]
})
export class PokedexListModule { }
