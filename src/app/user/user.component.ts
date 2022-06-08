
import { Component, HostListener, Inject, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { DownloadComponent } from '../table/download/download.component';
import { TableComponent } from '../table/table.component';
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
   user:any ={age:'18-30',gender:'Male',location:'Delhi',occupation:'Farmer'};
   users:any = [] ;
   age:string[]=[' 18 - 30 years','30 - 45 years','45 - 60 years','60 - 80 years'];
   location:string[]=[' Mumbai',' Hyderabad','Bangalore'];
   occupation: any=['Receptionist','Daily Labour',' Software Engineer','CEO'];
   userDetails=[]; 
   showHeader=true;
   showDot = false ;
  
  constructor(public userService:UserService , @Inject(DOCUMENT) private doc: Document) { }

  //related to sidebar button
  btnclick = false;
  @ViewChild(DownloadComponent) downloadComp: DownloadComponent;
  @ViewChild(CardsComponent) cardComp: CardsComponent;
  @ViewChild(TableComponent) tableComp: TableComponent

   
 
  ngOnInit(): void {
   const data={};
    this.userService.getDetails(data).subscribe(res =>{
      this.users = res.filter(data => data.firstname)
      //this.occupation=res.filter(data =>data.occupation)
      console.log(res)
    },err=>{
      alert("somthing error occurs")
    })
    // this.userService.getlocation(data).subscribe(res =>{
    //   this.location=res.filter(data => data.locations)
    // },err =>{
    //  alert('location is not avialable')
    // });
    
  }

  taggleCard(){ 
    this.isShow=true
  }
  taggleTable(){ 
  this.isShow=false
  }

  cleareFilter( ){
   this.user ={age:'18-30',gender:'Male',location:'Delhi',occupation:'Farmer'};
   
  } 
 

  selectedUsers = []
  reciveTableData(udata){
    this.selectedUsers = udata;
    this.showDot = true;
    if(this.selectedUsers.length == 0){
      this.showDot = false;
    }
  }
  receiveCardData(data){
    //  console.log(data);
     this.selectedUsers = data;
     this.showDot = true ;
     if(this.selectedUsers.length == 0){
       this.showDot = false;
     }
  }

  //related to sidebar Button
  passData(event){
    this.receiveCardData;
    this.btnclick = !this.btnclick;
    this.downloadComp.changeView(this.btnclick);
  }


  uncheckuser(id){
      if(this.isShow == true){
        this.cardComp.uncheckuser(id);
      }
      else{
        this.tableComp.uncheckuser(id);
      }
      console.log(this.selectedUsers)
  }

  @HostListener('document:wheel',['$event'])
  scrollfunction(event:Event){
    console.log(event);
    if (document.body.scrollTop >= 100|| document.documentElement.scrollTop >= 100){
      this.showHeader=true;   
    }
    else{
       this.showHeader=false; 
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

}   