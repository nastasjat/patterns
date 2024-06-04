import { Component } from '@angular/core';
import { Pyramid } from './model/pyramid';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor() { }
  
  pyramid = new Pyramid();
  volume!: string;
  surfaceArea!: string;


  updatePyramid(l: any, w: any, h: any) {
    this.pyramid.L = l;
    this.pyramid.W = w;
    this.pyramid.H = h;
    this.volume = this.pyramid.getVolume().toFixed(2);
    this.surfaceArea = this.pyramid.getSurfaceArea().toFixed(2);
  }

}
