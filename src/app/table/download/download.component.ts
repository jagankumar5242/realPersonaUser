import { Component, Input, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  
  @Input() userselected:any;
  
  
  visibleSidebar1;
    
  visibleSidebar2 = false;
  
  visibleSidebar3;
  
  visibleSidebar4;
  
  visibleSidebar5;
  
  
  constructor(private primengConfig: PrimeNGConfig,
    private userservice:UserService) {}
    
    ngOnInit() {
      this.primengConfig.ripple = true;
    }
    
  //Deleting selected Personas
  delete(id,i){
      this.userselected.splice(i, 1);
  }

  //downloading selected personas
  download(){

    alert("Api Not working!!!")
  }

}