import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DownloadComponent } from './table/download/download.component';
import { SidebarModule} from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button'; 
import { UserComponent } from './user/user.component';
import { CardsComponent } from './cards/cards.component';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';
// import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    DownloadComponent,
    UserComponent,
    CardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    SidebarModule,
    ButtonModule,
    // NgxHideOnScrollModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
