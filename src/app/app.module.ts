import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DownloadComponent } from './table/download/download.component';
import { SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DownloadComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
