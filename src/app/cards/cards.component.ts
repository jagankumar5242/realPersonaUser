import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../user/user.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {

  isSelected = false ;
  showCheckbox = false;
  @Input() userDetails;

  @Output() outputFromCards : EventEmitter<any> = new EventEmitter();
  
  // users :any = [{firstname:"jhon",gender:"1",lastname:"Deo", age:"65",location:"Delhi",occupation:"Daily Labour",persona_id:"61"},
  //               {firstname:"parvathama",gender:"0",lastname:"Gowda",age:"35",location:" Mysore, Karnataka",occupation:"Housewife",persona_id:"62" },
  //               {firstname:"Tim",gender:"1",lastname:"Deo",age:"35",location:"Bengaluru",occupation:"CEO",persona_id:"63"},
  //               {firstname:"Tim",gender:"1",lastname:"Deo",age:"35",location:"Bengaluru",occupation:"CEO",persona_id:"63"}];
  constructor(private user:UserService ) { }

  ngOnInit(): void {
    // const data={};
    // this.user.getDetails(data).subscribe(res =>{
    //   this.users=res;
    //   console.log(res)
    // },err=>{
    //   alert("somthing error occurs")
    // })
  }
  clickHandler(x,i)
  {
    if(!this. userDetails[i].isSelected){
      const selectedUsers = this. userDetails.filter(ele => ele.isSelected);
      if(selectedUsers.length < 4)
      {
        this.userDetails[i].isSelected = !this. userDetails[i].isSelected;
      }
      else
      {
        alert('Maximum four users only be selected');
      }
    }else{
      this. userDetails[i].isSelected = !this.userDetails[i].isSelected;
    }
    const selected = this.userDetails.filter(ele => ele.isSelected);
    // console.log(selected);
    this.outputFromCards.emit(selected);
  }

}
