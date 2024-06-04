import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewpyramidComponent } from './viewpyramid.component'; 
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ViewpyramidComponent],
  imports: [
    CommonModule,
    IonicModule, 
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ViewpyramidComponent
  ]
})
export class ViewpyramidModule { }