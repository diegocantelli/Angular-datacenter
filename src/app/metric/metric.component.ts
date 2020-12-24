import { Component, OnInit, Input, ChangeDetectionStrategy, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MetricComponent implements OnInit, OnChanges {

  private _value: number = 0;
  private _max: number = 100;

  @Input('used') value: number = 0;
  @Input('available') max: number = 100;
  // set max(max: number) {
  //   if (isNaN(max)) max = 100;
  //   this._max = max;
  // }


  // set value(value: number) {
  //   if (isNaN(value)) value = 0;
  //   this._value = value;
  // }

  // get value(): number { return this._value; }

  // get max(): number { return this._max; }

  constructor() { }


  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    //o nome das propriedades que mudam de valor ficam dentro de "changes"
    if (changes.value && isNaN(changes.value.currentValue)) this.value = 0;
    if (changes.max && isNaN(changes.max.currentValue)) this.max = 0;
  }

  isDanger() {
    return this.value / this.max > 0.7;
  }

}
