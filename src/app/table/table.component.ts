import { AfterViewInit, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../user.service';
import { UserDetails } from './userdetail.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit,AfterViewInit{

  @ViewChild('row') child:ElementRef;
 
  constructor(private userservice:UserService) { }

  ngOnInit(): void {

    this.onget();
  }
  ngAfterViewInit(): void {

  }
 
  dom;
  check = false;
  checkbox = false;

  selected = [];

  userdetail:UserDetails[] = [];

  onget(){

    this.userservice.ngOnInit().subscribe(
          responseData =>{
            console.log(responseData);
            this.userdetail = responseData.filter(ele => ele.firstname);
          })
    
  }

  onselect(id,i){
    if(!this.userdetail[i].isSelected){
      const selectedUsers = this.userdetail.filter(ele => ele.isSelected);
      if(selectedUsers.length < 4){
        this.userdetail[i].isSelected = !this.userdetail[i].isSelected;
      }else{
        alert('Maximum four users only be selected');
      }
    }else{
      this.userdetail[i].isSelected = !this.userdetail[i].isSelected;
    }
  }
}
