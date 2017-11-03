import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from'@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CompanyComponent} from './company/company.component';
import { ComserviceComponent} from './comservice/comservice.component';
import { WorkComponent} from './work/work.component';
import { routing} from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CompanyComponent,
    ComserviceComponent,
    WorkComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    routing,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
