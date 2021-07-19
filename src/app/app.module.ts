import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreationsComponent } from './creations/creations.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { ChangeBgColorDirective } from './Directives/change-bg-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreationsComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    ChangeBgColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
