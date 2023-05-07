import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './shared/modules/material.module';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user/user.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, UserComponent, PageNotFoundComponent],
  imports: [BrowserModule, AppRoutingModule, MaterialModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
