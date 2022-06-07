import {  Component, EventEmitter,  Input, OnInit, Output} from '@angular/core';
import { UserDetails } from './userdetail.model';
 

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit{
  
  selectedUsers = [];
  // selecteduser = this.selectedUsers;
  @Input() userDetails :any;
  @Output() selecteduser : EventEmitter<any> =  new EventEmitter<any>(); 
  
  constructor() { }

  ngOnInit(){

  }

  user:UserDetails[] = [];

  onselect(i){
    if(!this.userDetails[i].isSelected){
      
      this.selectedUsers = this.userDetails.filter(ele => ele.isSelected);

      if(this.selectedUsers.length < 4){
        this.userDetails[i].isSelected = !this.userDetails[i].isSelected;
      }else{
        alert('You can only select four personas at a time');
      }
    }else{
      this.userDetails[i].isSelected = !this.userDetails[i].isSelected;
    }
    this.selectedUsers = this.userDetails.filter(ele => ele.isSelected);
    
    this.selecteduser.emit(this.selectedUsers);
  }


  uncheckuser(id){

    for (let index = 0; index < this.userDetails.length; index++) {

      if(this.userDetails[index].persona_id === id && this.userDetails[index].isSelected == true){

        this.userDetails[index].isSelected = false;
      }        
    }
  }

}
