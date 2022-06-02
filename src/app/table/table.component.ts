import {  Component, ElementRef,  Input, OnInit, ViewChild } from '@angular/core';
 

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  check = false;
  checkbox = false; 
  selected = []; 
  selectedArray = [];
  count = 0;
  @ViewChild('row') child:ElementRef;
  @Input () userDetails;
  constructor() { }

  ngOnInit(): void {
 
  } 
 
  onselect(id,i){

      this.userDetails[i].isSelected = !this.userDetails[i].isSelected;

      if( this.userDetails[i].isSelected && this.count < 4)
      {
         this.selectedArray.push(this.userDetails[i])
          this.count++;
      }
      else
      {
          this.selectedArray.splice(this.selectedArray.indexOf(id,0));
          this.count--;
      } 

    // console.log(this.userdetail.indexOf(this.userdetail[i]));
      console.log( this.userDetails[i].isSelected)
      // console.log(this.userdetail)
      
  }

  oncheck($event){

    const id = $event.target.value;
    // if($event.target.checked && id === )
    // {
    //   this.checkbox = true;
    // }
    // else{
    //   this.checkbox = false;
    //   this.child.nativeElement.style = "border:4px solid #3144B4";
    // }
    console.log(id)
  }

  // user = [
  //   {image:"../../assets/images/Rectangle 1.png",
  //     fname:"Parvatamma",
  //     lname:'Gowda',
  //     age:'58 Years',
  //     occupation:'Housewife',
  //     address:'Madurai, Tamil Nadu'
  //   },
  //   {image:"../../assets/images/Rectangle 1.png",
  //     fname:"Parvatamma",
  //     lname:'Gowda',
  //     age:'58 Years',
  //     occupation:'Housewife',
  //     address:'Madurai, Tamil Nadu'
  //   },
  //   {image:"../../assets/images/Rectangle 1.png",
  //     fname:"Parvatamma",
  //     lname:'Gowda',
  //     age:'58 Years',
  //     occupation:'Housewife',
  //     address:'Madurai, Tamil Nadu'
  //   },
  //   {image:"../../assets/images/Rectangle 1.png",
  //     fname:"Parvatamma",
  //     lname:'Gowda',
  //     age:'58 Years',
  //     occupation:'Housewife',
  //     address:'Madurai, Tamil Nadu'
  //   }
  // ]   
}
