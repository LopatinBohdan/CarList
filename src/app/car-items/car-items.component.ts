import { Component, OnInit } from '@angular/core';
import {Car} from '../Car';
import { Cars } from '../Mock-Car';

@Component({
  selector: 'app-car-items',
  templateUrl: './car-items.component.html',
  styleUrls: ['./car-items.component.css']
})
export class CarItemsComponent implements OnInit{

  ngOnInit(): void {}
  cars=Cars;
  selectedCar:Car=Cars[0];
  OnSelect(item:Car):void{
    this.selectedCar=item;
  }
  constructor(){};
}
