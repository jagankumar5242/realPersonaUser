import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  isSelected = false ;
  showCheckbox = false;
  users :any = [{firstname:"jhon",gender:"1",lastname:"Deo", age:"65",location:"Delhi",occupation:"Daily Labour",persona_id:"61"},
                {firstname:"parvathama",gender:"0",lastname:"Gowda",age:"35",location:" Mysore, Karnataka",occupation:"Housewife",persona_id:"62" },
                {firstname:"Tim",gender:"1",lastname:"Deo",age:"35",location:"Bengaluru",occupation:"CEO",persona_id:"63"},
                {firstname:"Tim",gender:"1",lastname:"Deo",age:"35",location:"Bengaluru",occupation:"CEO",persona_id:"63"}];
  constructor() { }

  ngOnInit(): void {
  }

  // toggleCheckbox(){
  //   const cb = document.getElementById("check");
  //   const c = document.querySelector("check")
    
  // }
  mark(imageId : any){
    // document.getElementById(imageId).style.border = "1";
    document.getElementById("imageId")?.style.border == "blue solid 7px";
  }
}
