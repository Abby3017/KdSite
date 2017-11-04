import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
// import { AppComponent } from './../app.component';
@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    AppHeaderComponent,
    AppFooterComponent
  ],
  declarations: [AppHeaderComponent, AppFooterComponent]
})
export class SharedModule { }
