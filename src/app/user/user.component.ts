
import { Component, HostListener, Inject, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';
import { CardsComponent } from '../cards/cards.component';
import { DownloadComponent } from '../table/download/download.component';
import { TableComponent } from '../table/table.component';
import { UserService } from './user.service';
import { DOCUMENT } from '@angular/common';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
 
})
export class UserComponent implements OnInit {
  // fixed: boolean = false;
   isShow=true
   user:any ={age:'18-30',gender:'Male',location:'Karnataka',occupation:'Farmer'};
   users:any = [] ;
   age:string[]=[' 18 - 30 years','30 - 45 years','45 - 60 years','60 - 80 years'];
   location:string[]=[];
   occupation:string[]=[];
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
      const allOccupation = res.map(ele => ele.occupation);
      const allLocation = res.map(ele => ele.location);
      this.location = this.onlyUnique(allLocation);
      this.occupation = this.onlyUnique(allOccupation);
      // console.log(allOccupation);
      // console.log(allLocation);
    },err=>{
      alert("somthing error occurs")
    })  
  }
  onlyUnique(inputArray) {
    const outPutArray = [];
    inputArray.map(ele => { 

      if(outPutArray.indexOf(ele)== -1 && ele){
        outPutArray.push(ele);
      }
    });
    return outPutArray;
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
    if (document.body.scrollTop >= 100|| document.documentElement.scrollTop>= 100){
      this.showHeader=true;   
    }
    else{
       this.showHeader=false; 
    }
  }
 

}   