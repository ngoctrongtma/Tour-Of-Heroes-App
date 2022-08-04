import { AuthModule } from './auth/auth.module';
import { AdminModule } from './admin/admin.module';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HeroesComponent } from './hero-feature/heroes/heroes.component';
import { HeroDetailComponent } from './hero-feature/hero-detail/hero-detail.component'; 
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { HeroSearchComponent } from './hero-feature/hero-search/hero-search.component'; 
import { HeroFormComponent } from './hero-feature/hero-form/hero-form.component'; 
import { NotFoundComponent } from './not-found/not-found.component';
import { HeroesModule } from './hero-feature/heroes.module';
import { CrisisCenterComponent } from './crisis-center/crisis-center/crisis-center.component';
import { CrisisCenterHomeComponent } from './crisis-center/crisis-center-home/crisis-center-home.component';
import { CrisisDetailComponent } from './crisis-center/crisis-detail/crisis-detail.component';
import { CrisisCenterModule } from './crisis-center/crisis-center.module'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
   // HeroesComponent,
   // HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    HeroFormComponent,
    NotFoundComponent,
   // LoginComponent,
   // CrisisListComponent,
   // CrisisCenterComponent,
   // CrisisCenterHomeComponent,
   // CrisisDetailComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule, 
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    AuthModule, // Feature Module
    HeroesModule, // Feature Module
    CrisisCenterModule, // Feature Module
    AdminModule, // Feature Module
    AppRoutingModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
