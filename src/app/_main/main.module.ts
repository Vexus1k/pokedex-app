import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { FormsModule } from "@angular/forms";



@NgModule({
    declarations: [
        BaseLayoutComponent
    ],
    exports: [
        BaseLayoutComponent
    ],
    imports: [
        CommonModule,
        NgOptimizedImage,
        FormsModule
    ]
})
export class MainModule { }
