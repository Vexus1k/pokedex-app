import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';



@NgModule({
    declarations: [
        BaseLayoutComponent
    ],
    exports: [
        BaseLayoutComponent
    ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ]
})
export class MainModule { }
