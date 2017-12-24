import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { AppRouting } from './app.routing.module';

import { HomePageComponent } from './pages/home/home.component';
import { HttpExampleComponent } from './components/http-example/http-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HttpExampleComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'angular-static-starter-app' }),
    RouterModule,
    AppRouting,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue : '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
