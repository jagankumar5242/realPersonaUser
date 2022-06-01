import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
 
  isShow=true
   user:any ={age:'18-30',gender:'Male',location:'Karnataka',occupation:'Farmer'};
   users:any=['']
  constructor(public userService:UserService) { }

  ngOnInit(): void {
   const data={};
    this.userService.getDetails(data).subscribe(res =>{
      console.log(res)
    },err=>{
      alert("somthing error occurs")
    })
  }

  taggleCard(){ 
    this.isShow=true
  }
  taggleTable(){ 
  this.isShow=false
  }

  cleareFilter( ){
   this.user ={age:'18-30',gender:'Male',location:'Karnataka',occupation:'Farmer'};
   
  //  console.Reset()
  } 
}
