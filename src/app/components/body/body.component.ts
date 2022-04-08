import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public talpa?:number;
  public greitis?:number;
  public laikas?:number;
  public rez:number = 0;
  public info:string='';

  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuoti(){
    if(this.talpa!=null && this.greitis!=null && this.laikas!=null){
      this.rez = Math.round(this.talpa / (this.greitis * this.laikas));
      if(this.rez < 80){
        this.info = 'Rezervuaras stabilus.';
      }
      if(this.rez >= 80){ 
        this.info = 'Rezervuaro talpa kritiskai pripildyta.';
      }
      if(this.rez > 100){
        this.info = 'Rezervuaras yra perpildytas!';
       }
    }
  }
}
