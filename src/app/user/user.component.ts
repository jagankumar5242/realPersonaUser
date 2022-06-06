import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { trigger, state, transition, style, animate } from '@angular/animations';  
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
//   animations:[ 
//     trigger('fade',
//     [ 
//       state('void', style({ opacity : 0})),
//       transition(':enter',[ animate(300)]),
//       transition(':leave',[ animate(500)]),
//     ]
// )]
})
export class UserComponent implements OnInit {
  // fixed: boolean = false;
   isShow=true
   user:any ={age:'18-30',gender:'Male',location:'Karnataka',occupation:'Farmer'};
   users:any ;
   age:string[]=[' 18 - 30 years','30 - 45 years','45 - 60 years','60 - 80 years'];
   location:string[]=['Tamilnadu','Andhra Pradhesh','Maharastra','kerala'];
   occupation:string[]=['Doctor','Engineer','Student','Manager'];
   userDetails=[]; 
   showHeader=true;
  constructor(public userService:UserService , @Inject(DOCUMENT) private doc: Document) { }

  ngOnInit(): void {
    // this.onWindowScroll();
   const data={};
    this.userService.getDetails(data).subscribe(res =>{
      this.users = res.filter(data => data.firstname)
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
   
  } 
  reciveTableData(udata){
    console.log(udata)
  }
  receiveCardData(data){
     console.log(data);
  }
  passData(){
    this.receiveCardData
  }
  @HostListener('document:wheel',['$event'])
  scrollfunction(event:Event){
    console.log(event);
    if (document.body.scrollTop > 100|| document.documentElement.scrollTop > 100){
      this.showHeader=true;
       //this.isShow=true;
    }
    else{
      this.showHeader=false;
      //this.isShow=false
    }
  }
    
  // @HostListener('window:scroll', [])
  // onWindowScroll() {
  //     let number = window.pageYOffset || document.documentElement.scrollTop || window.scrollY || 0;
  //     if (number > 100) {
  //         this.fixed = true;
  //     } else if (this.fixed && number < 10) {
  //         this.fixed = false;
  //     }
  // }
}

  // @HostListener('window:scroll', ['$event'])
  // onWindowScroll(e) {
  //    if (window.pageYOffset > 550) {
  //      let element = document.getElementById('bottons');
  //      this.showHeader=true;
  //      element.classList.add('header');
  //    } else {
  //     let element = document.getElementById('bottons');
  //     this.showHeader=false
  //       element.classList.remove('header'); 
  //    }
  // }



//   @HostListener('window:scroll', ['$event'])
//    getScrollHeight(event) {
//     if(window.pageYOffset> 0 )
//      this.showHeader = true;
//     else
//       this.showHeader = false;
//  }

 