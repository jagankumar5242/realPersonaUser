import { Component, HostListener, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { DownloadComponent } from '../table/download/download.component';
import { TableComponent } from '../table/table.component';
import { UserService } from './user.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  
  isShow=true
  user:any ={age:'18-30',gender:'Male',location:'Karnataka',occupation:'Farmer'};
  users:any ;
  userDetails=[];

  //related to sidebar button
  btnclick = false;
  @ViewChild(DownloadComponent) downloadComp: DownloadComponent
  @ViewChild(TableComponent) tableComp: TableComponent
  @ViewChild(CardsComponent) cardComp: CardsComponent

   showHeader=false;
  constructor(public userService:UserService) { }

  ngOnInit(): void {
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

  selectedUsers = []
  reciveTableData(udata){
    this.selectedUsers = udata;
    console.log(this.selectedUsers)
  }
  receiveCardData(data){
     console.log(data);
     this.selectedUsers = data;
     console.log(this.selectedUsers)
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
    if (document.body.scrollTop > 100|| document.documentElement.scrollTop > 100 ){
      this.showHeader=true;
    }
    else{
      this.showHeader=false
    }
  }


//   @HostListener('window:scroll', ['$event'])
//    getScrollHeight(event) {
//     if(window.pageYOffset> 0 )
//      this.showHeader = true;
//     else
//       this.showHeader = false;
//  }

}
