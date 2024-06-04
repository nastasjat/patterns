import { Injectable } from '@angular/core';
import { Pyramid } from '../model/pyramid';
import { IPyramidView } from '../view/IPyramidView';

@Injectable({
  providedIn: 'root'
})
export class PresenterService {
  private pyramid!: Pyramid;
  view!: IPyramidView;

  getPyramid(l: number, w: number, h: number, view: IPyramidView) {
    if (l <= 0 || w <= 0 || h <= 0) {
      throw new Error("All dimensions must be greater than 0");
    }

    else {
      this.view = view;
      this.pyramid = new Pyramid(l, w, h);
      let volume = this.pyramid.getVolume().toFixed(2);
      let surfaceArea = this.pyramid.getSurfaceArea().toFixed(2);
          
      this.view.infoPyramid = `Volume: ${volume}, Surface Area: ${surfaceArea}`;
    }
  }

  constructor() { }
}
