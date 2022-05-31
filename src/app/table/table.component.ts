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

  selectedArray = [];
  count = 0;
  onselect(id,i){

    
      this.userdetail[i].isSelected = !this.userdetail[i].isSelected;

      if( this.userdetail[i].isSelected && this.count < 4)
      {
         this.selectedArray.push(this.userdetail[i])
          this.count++;
      }
      else
      {
          this.selectedArray.splice(this.selectedArray.indexOf(id,0));
          this.count--;
      }




    // console.log(this.userdetail.indexOf(this.userdetail[i]));
      console.log( this.userdetail[i].isSelected)
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
