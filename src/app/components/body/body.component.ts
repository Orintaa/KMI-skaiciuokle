import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  public ugis?:number;
  public svoris?:number;
  public kmi:number = 0;
  public info:string='';

  constructor() { }

  ngOnInit(): void {
  }

  public skaiciuoti(){
    if(this.ugis!=null && this.svoris!=null){
      this.kmi = Math.round(this.svoris / (this.ugis/100)**2);
      if(this.kmi < 25){
        this.info = 'Sveikiname Jusu svoris normalus.';
      }
      if(this.kmi >= 25 && this.kmi < 30){ 
        this.info = 'Jus turetumete maitintis sveikiau.';
      }
      if(this.kmi >= 30){
        this.info = 'jus turetumete sunerimti, KMi per didelis.'
       }
    }
  }
}
