import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  // userdetail:any = [];
  // selectedusers : any =[];
  isSelected = false ;
  showCheckbox = false;
  users :any = [{firstname:"jhon",gender:"1",lastname:"Deo", age:"65",location:"Delhi",occupation:"Daily Labour",persona_id:"61"},
                {firstname:"parvathama",gender:"0",lastname:"Gowda",age:"35",location:" Mysore, Karnataka",occupation:"Housewife",persona_id:"62" },
                {firstname:"jhon",gender:"1",lastname:"Deo", age:"65",location:"Delhi",occupation:"Daily Labour",persona_id:"61"},
                {firstname:"parvathama",gender:"0",lastname:"Gowda",age:"35",location:" Mysore, Karnataka",occupation:"Housewife",persona_id:"62" },
                {firstname:"Tim",gender:"1",lastname:"Deo",age:"35",location:"Bengaluru",occupation:"CEO",persona_id:"63"},
                {firstname:"Tim",gender:"1",lastname:"Deo",age:"35",location:"Bengaluru",occupation:"CEO",persona_id:"63"}];
  constructor() { }

  ngOnInit(): void {
    const Selected = this.users.filter((elem :any ) => elem.isSelected); 
    console.log(Selected);
  }
  clickHandler(x,i)
  {
    // console.log(i);
    if(!this.users[i].isSelected){
      const selectedUsers = this.users.filter(ele => ele.isSelected);
      if(selectedUsers.length < 4){
        this.users[i].isSelected = !this.users[i].isSelected;
      }else{
        alert('Maximum four users only be selected');
      }
    }else{
      this.users[i].isSelected = !this.users[i].isSelected;
    }
  }
}
