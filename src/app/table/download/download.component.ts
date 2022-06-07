import { Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.scss']
})
export class DownloadComponent implements OnInit {
  
  @Input() userselected:any;
  @Output() uncheck = new EventEmitter<any>(); 
  
  visibleSidebar2;
   
  constructor(private primengConfig: PrimeNGConfig) {}

  //Deleting selected Personas from sidebar(pdf downloading component)
  delete(id,i){
    this.userselected.splice(i, 1);
    this.uncheck.emit(id);
  }
  
  
  //downloading selected personas
  download(){
    
    const idArr = this.userselected.map(ele => ele.persona_id);
    alert("not working");
    const id = {ids:idArr.toString()};
    // this.http.get<any>('http://199.34.21.254/persona/generate-pdf',id)
  }

  ngOnInit() {
    this.primengConfig.ripple = true;
    
    let selected = this.userselected.find((ele :any) => ele.isSelected);
    console.log(selected);
  }

  changeView(isVisible: boolean){
    this.visibleSidebar2 = isVisible;
  }
}