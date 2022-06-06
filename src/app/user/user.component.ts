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
  
  isShow=true;
  showDot = false ;
  user:any ={age:'18-30',gender:'Male',location:'Karnataka',occupation:'Farmer'};
  users:any ;
  userDetails=[];

  //related to sidebar button
  btnclick = false;
  @ViewChild(DownloadComponent) downloadComp: DownloadComponent;
  @ViewChild(CardsComponent) cardComp: CardsComponent;
  @ViewChild(TableComponent) tableComp: TableComponent

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
  // receiveCardData(data: any){
  //    console.log(data);
  //    this.passData(data)
  // }
  // passData(data : any){
  //   return data;

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

  id;
  // uncheckuser(id){
  //     this.id = id;
  // }
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
