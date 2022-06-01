import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { UserDetails } from './userdetail.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit,AfterViewInit{
  
  selectedUsers = [];
  @ViewChild('row') child:ElementRef;
 
  constructor() { }

  ngOnInit(){

  }
  ngAfterViewInit(): void {

  }
 
  userdetail:UserDetails[] = [];

  
  onselect(id,i){
    if(!this.userdetail[i].isSelected){
      
      this.selectedUsers = this.userdetail.filter(ele => ele.isSelected);

      if(this.selectedUsers.length < 4){
        this.userdetail[i].isSelected = !this.userdetail[i].isSelected;
      }else{
        alert('You can only select four personas at a time');
      }
    }else{
      this.userdetail[i].isSelected = !this.userdetail[i].isSelected;
    }
    this.selectedUsers = this.userdetail.filter(ele => ele.isSelected);
    console.log(this.selectedUsers);
  }
}
