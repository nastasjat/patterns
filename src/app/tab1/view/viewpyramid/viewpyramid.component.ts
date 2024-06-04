import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PyramidService } from '../../controller/pyramid.service';

@Component({
  selector: 'app-viewpyramid',
  templateUrl: './viewpyramid.component.html',
  styleUrls: ['./viewpyramid.component.scss'],
})
export class ViewpyramidComponent  implements OnInit {

  form!: FormGroup;
  volume!: number;
  surfaceArea!: number;
  
  constructor(private fb: FormBuilder, private pyramidService: PyramidService) {
    this.form = this.fb.group({
      baseLength: [null, [Validators.required, Validators.min(1)]],
      baseWidth: [null, [Validators.required, Validators.min(1)]],
      height: [null, [Validators.required, Validators.min(1)]],
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const { baseLength, baseWidth, height } = this.form.value;
      this.volume = parseFloat(this.pyramidService.calculateVolume(baseLength, baseWidth, height).toFixed(3));
      this.surfaceArea = parseFloat(this.pyramidService.calculateArea(baseLength, baseWidth, height).toFixed(3));
    }
  }

  ngOnInit(): void {
  }

}
