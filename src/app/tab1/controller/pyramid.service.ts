import { Injectable } from '@angular/core';
import { Pyramid } from '../model/pyramid';

@Injectable({
  providedIn: 'root'
})
export class PyramidService {

  private pyramid!: Pyramid;

  constructor() { }

  calculateVolume(l: number, w: number, h: number) {
    this.pyramid = new Pyramid(l, w, h);
    return this.pyramid.getVolume();
  }

  calculateArea(l: number, w: number, h: number) {
    this.pyramid = new Pyramid(l, w, h);
    return this.pyramid.getSurfaceArea();
  }
}
