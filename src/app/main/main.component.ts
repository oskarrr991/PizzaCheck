import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  firstPrice: number;
  secondPrice: number;
  firstDiameter: number;
  secondDiameter: number;
  cheap: string;
  price1: number;
  price2: number;
  moreAfforable: string;

  constructor() { }

  ngOnInit() { }

  compareTwo() {
    const pizzaYELLOW = document.getElementById('pizzaY');
    const pizzaPURPLE = document.getElementById('pizzaP');

    pizzaYELLOW.setAttribute('style', 'display: block');
    pizzaPURPLE.setAttribute('style', 'display: block');
    document.getElementsByClassName('price')[0].setAttribute('style', 'display: block');
    document.getElementsByClassName('price')[1].setAttribute('style', 'display: block');
    document.getElementById('containers').setAttribute('style', 'margin-top: 150px');
    document.getElementsByClassName('overlay')[0].setAttribute('style', 'display: block');
    // MATHS
    const S1 = (Math.pow((this.firstDiameter / 2), 2)) * Math.PI;
    const S2 = Math.PI * (Math.pow((this.secondDiameter / 2), 2));
    this.price1 = Number((this.firstPrice / S1).toFixed(3));
    this.price2 = Number((this.secondPrice / S2).toFixed(3));
    if (this.price1 < this.price2) {
      this.moreAfforable = 'First pizza is more affordable than the second one';
    } else if (this.firstDiameter === this.secondDiameter) {
        this.moreAfforable = 'Pizzas are the same size';
      } else {
          this.moreAfforable = 'Second pizza is more affordable than the first one';
        }
    // SETTING PIZZA SIZE
    if (this.firstDiameter < 30) {
      pizzaYELLOW.setAttribute('width', '25%');
    } else if (this.firstDiameter > 30 && this.firstDiameter < 60) {
      pizzaYELLOW.setAttribute('width', '35%');
      } else if (this.firstDiameter > 60 && this.firstDiameter <= 100) {
          pizzaYELLOW.setAttribute('width', '45%');
        } else {
            window.alert('Please input true values');
            pizzaYELLOW.setAttribute('style', 'display: none');
            pizzaPURPLE.setAttribute('style', 'display: none');
            document.getElementById('containers').setAttribute('style', 'margin-top: 350px');
            document.getElementsByClassName('price')[0].setAttribute('style', 'display: none');
            document.getElementsByClassName('price')[1].setAttribute('style', 'display: none');
            document.getElementsByClassName('overlay')[0].setAttribute('style', 'display: none');
          }
    if (this.secondDiameter < 30) {
      pizzaPURPLE.setAttribute('width', '25%');
    } else if (this.secondDiameter > 30 && this.secondDiameter < 60) {
        pizzaPURPLE.setAttribute('width', '35%');
      } else if (this.secondDiameter > 60 && this.secondDiameter <= 100) {
          pizzaPURPLE.setAttribute('width', '45%');
        }
  }
  closePopUp() {
      // tslint:disable-next-line:only-arrow-functions
      document.body.addEventListener('click', function(): void {
        document.getElementsByClassName('overlay')[0].setAttribute('style', 'display: none');
      });
      location.reload();
  }
}
