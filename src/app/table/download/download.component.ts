import { Component, Input, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
 

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {

  @Input() userselected:any;

  visibleSidebar1;
    
  visibleSidebar2;
  
  visibleSidebar3;
  
  visibleSidebar4;
  
  visibleSidebar5;


  constructor(private primengConfig: PrimeNGConfig) {}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }


}