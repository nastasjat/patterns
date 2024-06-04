import { Component } from '@angular/core';
import { PyramidView } from './view/pyramidview';
import { IPyramidView } from './view/IPyramidView';
import { PresenterService } from './presenter/presenter.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  view!: IPyramidView;
  
  constructor(private presenter: PresenterService) {
    this.view = new PyramidView();
  }

  getResult(w: any, l: any, h: any) {
    this.presenter.getPyramid(w, l, h, this.view);
  }
}
