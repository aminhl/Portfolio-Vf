import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AvatarComponent } from './components/avatar/avatar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { SpartanBtnComponent } from './components/spartan-btn/spartan-btn.component';

@NgModule({
  declarations: [AppComponent, NavbarComponent, FooterComponent, HomeComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AvatarComponent,
    NgxTypedJsModule,
    SpartanBtnComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
