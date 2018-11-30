import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = "This is Home Main page that will be displayed to the user GD-CSP [Guard-Directive-Component-Service-Pipe]";
  amountValue = 600;
  formateValue = 'INR';
  constructor() { }

  ngOnInit() {
  }
  ToggleCurrency()
  {
      if(this.formateValue === 'INR') {
        this.formateValue = 'USD';        
        this.amountValue =  this.amountValue / 60;
      } else if (this.formateValue === 'USD')
      {
        this.formateValue = 'INR';
        this.amountValue =  this.amountValue * 60;
      }
      else{
        return this.formateValue;
      }
  }

  get formate()
  {
    return this.formateValue;
  }

  get amount()
  {
    return this.amountValue;
  }
}
